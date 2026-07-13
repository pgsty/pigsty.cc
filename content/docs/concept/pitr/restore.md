---
title: 声明式恢复
linkTitle: 恢复
weight: 214
description: 恢复不该是深夜里的十几步手工操作：用 pg_pitr 参数声明想回到的时刻，由 pgsql-pitr.yml 剧本或 pig 命令行工具编排执行。
icon: fa-solid fa-rotate-left
module: [PGSQL]
categories: [概念]
---

备份系统的全部价值，都在恢复的那一刻兑现。而恢复几乎总是发生在最糟糕的时刻 ——
生产事故、深夜告警、每一分钟都在损失。传统的 PITR 手工流程在这种时刻是残酷的：
停 HA、停库、写恢复配置、执行还原、盯日志、验证位点、重建元数据、拉起集群……十几个步骤环环相扣，任何一步出错都可能雪上加霜。

Pigsty 的答案与 [**声明式配置**](/docs/concept/iac/) 一脉相承：**恢复也是声明式的**。
您只需描述想回到的时刻，编排工具负责其余的一切。


----------------

## 声明恢复目标

恢复目标用 [**`pg_pitr`**](/docs/pgsql/backup/restore/) 参数描述，交给 `pgsql-pitr.yml` 剧本执行。
最常用的形式只有一行 —— 把集群恢复到指定时间点：

```bash
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "time": "2026-07-11 10:00:00+08" }}'
```

[**六类恢复目标**](/docs/concept/pitr/mechanism/#目标恢复到哪一刻) 与恢复行为的方方面面，都是这个参数的字段：

```yaml
pg_pitr:                      # 恢复目标定义（按需声明，字段均可省略）
  cluster: pg-meta            # 从哪个集群的备份恢复（源 stanza），默认为本集群
  type: time                  # 目标类型：default | time | xid | lsn | name | immediate
  time: '2026-07-11 10:00:00+08'  # 恢复到的时间点（与 xid / lsn / name 互斥）
  exclusive: false            # 停在目标之前（排除目标点），默认包含
  action: promote             # 到达目标后的动作：pause | promote | shutdown
  timeline: latest            # 目标时间线，默认 latest
  set: latest                 # 从哪个备份集开始还原，默认自动选择
  repo: { ... }               # 临时指定备份仓库（不使用本机配置时）
  backup: false               # 恢复前是否把原数据目录搬到 /pg/data-backup 留作后悔药
  archive: true               # 保留原有归档配置；探索性恢复可设为 false
  db_include: [ ... ]         # 只恢复指定数据库（选择性恢复）
  data: /pg/data              # 恢复到哪个数据目录
```

完整的字段说明与用法示例请参阅 [**恢复操作**](/docs/pgsql/backup/restore/)。


----------------

## 剧本如何执行

`pgsql-pitr.yml` 把手工恢复的十几个步骤编排为六个阶段，幂等可重入：

| 阶段 | 动作 |
|:---|:---|
| **print** | 汇总恢复计划：源集群、目标类型、还原命令 —— 执行前最后确认 |
| **pause** | `patronictl pause`：让 Patroni 进入维护模式，暂停高可用自动干预 |
| **stop** | 依次停止从库与主库的 Patroni 及 PostgreSQL 进程 |
| **pitr** | 渲染恢复配置，执行 `pgbackrest restore`（增量还原），启动进程重放 WAL，验证恢复位点 |
| **etcd** | 清除 etcd 中的旧集群元数据，避免新旧时间线的状态混淆 |
| **start** | 重新拉起 Patroni，恢复高可用自动驾驶，从库重新克隆 |
{.full-width}

几处设计值得注意：

* **增量还原**：还原使用 pgBackRest 的 `delta` 模式，只重写数据目录中与备份不一致的文件。
  对大库而言，这往往把"还原全库"缩短为"还原变化的部分"，显著压缩 RTO。
* **验证而非假设**：重放完成后，剧本用 `pg_controldata` 提取集群实际到达的 LSN、时间线与事务号，
  确认恢复落点，而不是默认成功。您也可以在监控系统中直观地看到集群 LSN 回到过去的位置。
* **后悔药**：声明 `backup: true` 时，恢复前会把原数据目录完整搬到 `/pg/data-backup`——
  如果恢复目标选错了，原现场还在。
* **分阶段执行**：谨慎起见，可以用 tags 把恢复拆为三步走：`-t down`（停集群）、`-t pitr`（执行还原）、`-t up`（拉起集群），
  每步之间人工检查。

恢复到达目标后的行为由 `action` 决定：`promote`（提升并开启新时间线，主库默认）、
`pause`（暂停在目标点，可检查数据后再决定）、`shutdown`（停机待命）。
剧本不会替您做"数据对不对"的判断 —— 这是工程师保留的最终决定权。


----------------

## 命令行工具：pig

除了 Ansible 剧本，[**pig**](/docs/pig/) 命令行工具提供了单实例粒度的 PITR 编排 ——
适合在数据库节点上直接操作，无需管理节点与剧本环境：

```bash
pig pitr -t "2026-07-11 10:00:00+08"    # 恢复到指定时间点
pig pitr --xid 250000 -X                # 恢复到事务 250000 之前（排除该事务）
pig pitr -d                             # 重放到 WAL 归档末尾（灾难恢复）
pig pitr -I --no-restart                # 恢复到一致点即停，不启动实例
```

[**`pig pitr`**](/docs/pig/pitr) 与剧本执行同样的编排逻辑：预检（校验目标、stanza、备份存在性）、
停止 Patroni 与 PostgreSQL、执行还原、重新拉起、给出恢复后指引。默认拒绝任何破坏性的强制停库动作，除非显式指定 `--force-stop`。

更底层的 [**`pig pb`**](/docs/pig/pb) 系列命令封装了 pgBackRest 本身：`pb info` 查看备份、
`pb backup` 触发备份、`pb restore` 执行裸还原。这里有一道有意设置的硬边界：
**当实例仍由 Patroni 托管时，`pig pb restore` 会直接拒绝执行** ——
因为 Patroni 会立刻把恢复到一半的库重新拉起，酿成事故。托管实例的恢复，请始终使用 `pig pitr` 或 `pgsql-pitr.yml`。


----------------

## 原地恢复与克隆恢复

同一套恢复机制，有两种截然不同的用法：

| 维度 | **原地恢复** | **克隆恢复** |
|:---|:---|:---|
| 做法 | 把生产集群整体回滚到过去 | 用备份把 **另一套集群** 恢复到过去 |
| 停机 | 需要（恢复期间服务不可用） | 不需要（生产集群不受影响） |
| 影响 | 目标点之后的 **所有** 写入都被抹去 | 零风险，可反复尝试不同时间点 |
| 适用 | 整库损毁、灾难恢复、可接受回滚 | 误删找回、审计取证、恢复演练 |
{.full-width}

克隆恢复的关键是 `pg_pitr` 的 `cluster` 字段 —— 它指定 **从谁的备份** 恢复。
下面的命令把 `pg-meta` 的历史状态恢复到 `pg-test` 集群上，生产库全程无感：

```bash
./pgsql-pitr.yml -l pg-test -e '{"pg_pitr": { "cluster": "pg-meta", "time": "2026-07-11 10:00:00+08" }}'
```

从克隆集群中把误删的表 `pg_dump` 出来、导回生产，是处理误删除的标准姿势 ——
全库回滚是最后手段，而不是第一反应。克隆恢复的完整流程与善后事项，请参阅 [**克隆数据库集群**](/docs/pgsql/backup/cluster/)。


----------------

## 恢复之后

恢复完成不等于事情结束。有三件事应当纳入收尾清单：

1. **新时间线，新备份**：提升后集群运行在新时间线上。尽快执行一次全量备份（`pg-backup full`），
   让恢复窗口在新时间线上重新建立。
2. **归档状态**：探索性恢复若使用了 `archive: false`，记得恢复归档配置（`ALTER SYSTEM RESET archive_mode` 并重启），
   否则新的历史不会被归档 —— 时间机器会悄悄停摆。
3. **克隆善后**：克隆出的新集群与源集群的备份身份（stanza）不一致，需要重建 stanza 后再启用自身的备份，
   详见 [**克隆数据库集群**](/docs/pgsql/backup/cluster/)。

工具能编排的都已编排，剩下的是判断：恢复到哪一刻、用原地还是克隆、数据对不对。
这些决策的框架，请继续阅读 [**典型场景**](/docs/concept/pitr/scenarios/)。

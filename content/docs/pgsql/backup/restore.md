---
title: 恢复操作
weight: 1705
description: 执行时间点恢复：pgsql-pitr.yml 剧本、pig pitr 命令与 pig pb restore 原语，恢复目标、分步执行与完整参数参考。
icon: fa-solid fa-rotate-left
categories: [任务]
---

Pigsty 提供三个层次的恢复入口，共用 [**同一套参数语义**](/docs/pgsql/backup/mechanism/#参数如何映射)，按场景选用：

| 入口                                           | 适用场景            | 特点                              |
|:---------------------------------------------|:----------------|:--------------------------------|
| [**`pgsql-pitr.yml`**](#快速上手) 剧本             | 生产集群恢复          | 编排整个集群：HA 暂停、多节点、etcd 清理、恢复控制信息输出 |
| [**`pig pitr`**](#单实例pig-pitr) 命令            | 单节点集群 / 节点本机操作  | 无需管理节点，在数据库节点上直接编排执行            |
| [**`pig pb restore`**](#原语pig-pb-restore) 原语 | 非 Patroni 托管的实例 | pgbackrest restore 的直接封装，最精细的控制 |
{.full-width}

手把手的沙箱演练教程请参阅 [**手工恢复**](/docs/pgsql/tutorial/pitr)；
用恢复克隆出新集群（不影响生产的推荐姿势）请参阅 [**克隆数据库集群**](/docs/pgsql/backup/cluster/)。


--------

## 快速上手

要将 `pg-meta` 集群回滚到之前的时间点，声明 [**`pg_pitr`**](#pitr-参数定义) 参数并运行剧本：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_pitr: { time: '2025-07-13 10:00:00+00', action: promote }   # 一步执行：到达目标后显式提升
```

```bash
./pgsql-pitr.yml -l pg-meta
```

参数也可以通过命令行临时传入，两种方式等价：

```bash
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "time": "2025-07-13 10:00:00+00", "action": "promote" }}'
```

{{% alert color="info" title="命令行传参请使用合法 JSON" %}}
`-e` 传入的参数必须是合法 JSON：键与字符串值都要加双引号，例如 `{"pg_pitr": {"time": "...", "archive": true}}`。
布尔值不加引号，字符串必须加 —— 引号缺失会导致参数解析失败或静默取错值。
{{% /alert %}}

剧本会依次执行：暂停 Patroni 高可用 → 停止集群进程 → 执行 pgbackrest 增量还原 → 启动 PostgreSQL 并等待进入一致恢复状态 →
用 `pg_controldata` 打印控制信息 → 清理 etcd 元数据 → 重新拉起集群与高可用。
执行过程的第一步会打印完整的恢复计划（源集群、目标、还原命令），但不会暂停等待确认；上面的一步式示例因此显式声明了 `action: promote`。
如果需要在目标点检查数据，请使用下文的 [**分步执行**](#分步执行)，并显式选择 `action: pause`。


--------

## 恢复目标

`pg_pitr` 支持 [**六类恢复目标**](/docs/concept/pitr/mechanism/#目标恢复到哪一刻)，其中四类目标值互斥，只能指定一个：

{{< tabpane persist="disabled" >}}
{{% tab header="恢复目标类型" disabled=true /%}}
{{< tab header="default/latest" lang="yaml" >}}
pg_pitr: { }  # 恢复到最新状态（WAL 归档流末尾）
{{< /tab >}}
{{< tab header="time" lang="yaml" >}}
pg_pitr: { time: "2025-07-13 10:00:00+00" }
{{< /tab >}}
{{< tab header="lsn" lang="yaml" >}}
pg_pitr: { lsn: "0/4001C80" }
{{< /tab >}}
{{< tab header="xid" lang="yaml" >}}
pg_pitr: { xid: "250000" }
{{< /tab >}}
{{< tab header="name" lang="yaml" >}}
pg_pitr: { name: "some_restore_point" }
{{< /tab >}}
{{< tab header="immediate" lang="yaml" >}}
pg_pitr: { type: "immediate" }
{{< /tab >}}
{{< /tabpane >}}

未指定任何目标时，重放全部 WAL 归档恢复到最新状态（内部类型 `default`）；
`immediate` 类型在到达第一个一致点后立即停止，用于最快恢复出可用实例（例如验证备份）。

### 按时间恢复

最常用的目标。时间应为合法的 PostgreSQL [`TIMESTAMP`](https://www.postgresql.org/docs/current/datatype-datetime.html#DATATYPE-DATETIME-INPUT-TIME-STAMPS) 格式，建议带时区：`YYYY-MM-DD HH:MM:SS+TZ`：

```bash
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "time": "2025-07-13 10:00:00+00", "action": "promote" }}'
```

### 按名称恢复

在高危变更前用 [`pg_create_restore_point`](https://www.postgresql.org/docs/current/functions-admin.html#id-1.5.8.34.5.5.2.2.1.1.1.1) 打点，恢复时便有了无歧义的目标：

```sql
SELECT pg_create_restore_point('before_migration');
```

```bash
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "name": "before_migration", "action": "promote" }}'
```

### 按事务 ID 恢复

如果误删数据的事务号已知（从监控仪表盘或 CSVLOG 的 `TXID` 字段获取），
配合 `exclusive` 精确停在该事务 **之前**，一条数据都不多丢：

```bash
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "xid": "250000", "exclusive": true, "action": "promote" }}'
```

### 按 LSN 恢复

[LSN](https://www.postgresql.org/docs/current/datatype-pg-lsn.html)（日志序列号）标识 WAL 流中的精确位置，
可从 Pigsty 仪表盘的 PG LSN 面板获取；需要时可以用 `timeline` 指定目标时间线（默认 `latest`）：

```bash
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "lsn": "0/4001C80", "timeline": "1", "action": "promote" }}'
```

{{% alert color="info" title="包含与排除" %}}
恢复目标默认是"包含"（inclusive）的：目标点上的事务会被重放。
`exclusive: true` 排除目标点本身 —— 例如 `xid: 250000, exclusive: true` 时，最后被重放的是 249999 号之前已提交的事务。
仅适用于 `time`、`xid`、`lsn` 目标，对应 PostgreSQL 的 [`recovery_target_inclusive`](https://www.postgresql.org/docs/current/runtime-config-wal.html#RECOVERY-TARGET-INCLUSIVE)。
{{% /alert %}}


--------

## 恢复来源

默认从本集群自己的备份恢复，三个字段可以改变恢复来源：

- `cluster`：源 stanza —— 使用共享仓库中 **其他集群** 的备份恢复（[**克隆集群**](/docs/pgsql/backup/cluster/) 的基础）
- `repo`：临时指定备份仓库定义（格式同 [**`pgbackrest_repo`**](/docs/pgsql/param#pgbackrest_repo) 的仓库条目），例如从旧仓库或异地仓库恢复
- `set`：从指定的 [**备份标签**](/docs/pgsql/backup/mechanism/#备份链与备份标签) 开始还原（默认自动选择目标点前最近的备份集，用 `pb info` 查看可用标签）

```bash
./pgsql-pitr.yml -l pg-meta2 -e '{"pg_pitr": { "cluster": "pg-meta", "archive": false, "action": "promote" }}'           # 用 pg-meta 的备份恢复 pg-meta2
./pgsql-pitr.yml -l pg-meta2 -e '{"pg_pitr": { "cluster": "pg-meta", "time": "2025-07-14 08:00:00+00", "archive": false, "action": "promote" }}' # 并指定时间点
```


--------

## 分步执行

一步到位固然方便，但在生产事故中，您可能希望亲手控制每个阶段。剧本的任务树支持用 tags 三步走：

```bash
./pgsql-pitr.yml -l pg-meta -t down     # 第一步：暂停 HA，停止 patroni 与 postgres
./pgsql-pitr.yml -l pg-meta -t pitr     # 第二步：执行还原与重放，打印恢复控制信息
./pgsql-pitr.yml -l pg-meta -t up       # 第三步：清理 etcd，拉起集群，恢复 HA
```

```yaml
# down                 : # 停止高可用并关闭 patroni 和 postgres
#   - pause            : # 暂停 patroni 自动故障切换
#   - stop             : # 停止 patroni 和 postgres 服务
#     - stop_patroni   : # 停止 patroni 服务
#     - stop_postgres  : # 停止 postgres 服务
# pitr                 : # 执行 PITR 过程
#   - config           : # 生成 pgbackrest 配置和恢复脚本
#   - restore          : # 运行 pgbackrest 恢复命令
#   - recovery         : # 启动 postgres 并完成恢复
#   - verify           : # 验证恢复后的集群控制数据
# up:                  : # 启动 postgres / patroni 并恢复高可用
#   - etcd             : # 启动前清理 etcd 元数据
#   - start            : # 启动 patroni 和 postgres 服务
#     - start_postgres : # 启动 postgres 服务
#     - start_patroni  : # 启动 patroni 服务
#   - resume           : # 恢复 patroni 自动故障切换
```

每步之间您可以检查状态：`down` 之后确认进程已停；`pitr` 阶段返回后，先查看 `/pg/tmp/recovery.log`，
并用 `pg_is_in_recovery()`、`pg_is_wal_replay_paused()`、`pg_last_wal_replay_lsn()` 与 `pg_last_xact_replay_timestamp()`
确认是否已经到达目标，再结合业务查询抽查数据。`pg_controldata /pg/data` 提供的是检查点与时间线摘要，不能单独证明时间、XID 或 LSN 目标已经命中。
使用 `action: pause` 时，确认无误后先提升实例，再执行 `up`；如果恢复目标选错了，可在 `up` 之前调整 `pg_pitr` 重跑 `pitr` 阶段。
`pause` / `shutdown` 需要配合这种分阶段流程才能形成明确的人工门；一步式执行应显式使用 `action: promote`。

```sql
SELECT pg_is_in_recovery(), pg_is_wal_replay_paused(),
       pg_last_wal_replay_lsn(), pg_last_xact_replay_timestamp();
```

```bash
pg_ctl -D /pg/data promote              # action: pause 验证通过后执行
./pgsql-pitr.yml -l pg-meta -t up       # 清理 etcd，拉起 Patroni，恢复 HA
```

{{% alert color="warning" title="重跑 pitr 阶段" %}}
`backup: true` 会把当前数据目录搬到 `/pg/data-backup`，而再次运行时会先删除已有的 `/pg/data-backup`。
因此剧本支持分阶段执行，但不能把带 `backup: true` 的恢复笼统视为幂等操作。
{{% /alert %}}


--------

## PITR 参数定义

`pg_pitr` 的完整字段如下。恢复目标、目标动作与原数据保留方式都建议显式声明：

```yaml
pg_pitr:                         # 定义 PITR 恢复任务
  cluster: pg-meta               # 恢复来源集群（源 stanza），默认为本集群 pg_cluster
  type: default                  # 目标类型：default | time | xid | name | lsn | immediate
  time: "2025-07-13 10:00:00+00" # 恢复目标：时间点（与 xid / name / lsn 互斥）
  name: "some_restore_point"     # 恢复目标：命名恢复点（与 time / xid / lsn 互斥）
  xid: "250000"                  # 恢复目标：事务 ID（与 time / name / lsn 互斥）
  lsn: "0/4001C80"               # 恢复目标：日志序列号（与 time / xid / name 互斥）
  exclusive: false               # 排除目标点本身，默认包含（仅 time / xid / lsn 有效）
  timeline: latest               # 目标时间线，可为整数，默认 latest
  set: latest                    # 从哪个备份标签开始还原，默认自动选择
  action: pause                  # 到达目标后动作：pause / promote / shutdown
                                 # 指定恢复目标时未声明 action，实际默认 pause
  archive: true                  # 保留原归档配置；探索性恢复设为 false（archive-mode=off）
  backup: false                  # 恢复前将原数据目录搬到 /pg/data-backup；重跑会覆盖已有备份目录
  db_exclude: []                 # 排除的数据库（选择性恢复）
  db_include: []                 # 只恢复指定数据库（选择性恢复）
  link_map:                      # 目录软链接映射（表空间 / WAL 分盘）
    pg_wal: '/data/wal'
    pg_xact: '/data/pg_xact'
  process: 4                     # 恢复并行进程数，默认为节点 CPU 核数
  repo: {}                       # 临时指定恢复来源仓库（格式同 pgbackrest_repo 条目）
  data: /pg/data                 # 恢复到的数据目录
  port: 5432                     # 恢复实例的监听端口
```

每个字段与 pgbackrest 选项的对应关系，见 [**参数映射表**](/docs/pgsql/backup/mechanism/#参数如何映射)。


--------

## 单实例：pig pitr

在数据库节点上，[**`pig pitr`**](/docs/pig/pitr) 无需 Ansible 环境即可执行单节点恢复编排：
预检（校验目标、stanza 与备份存在性）→ 停止 Patroni 与 PostgreSQL → 执行还原 → 按参数决定是否启动 PostgreSQL → 恢复后指引。

```bash
pig pitr -t "2025-07-13 10:00:00+00"    # 恢复到时间点
pig pitr --xid 250000 -X                # 恢复到事务 250000 之前（-X = --exclusive）
pig pitr --name before_migration        # 恢复到命名还原点
pig pitr -d                             # 恢复到 WAL 归档末尾（--default）
pig pitr -I --no-restart                # 只还原并准备 immediate 恢复，PostgreSQL 保持停止
pig pitr -t "..." --plan                # 只显示执行计划，不实际执行
```

常用选项：`-b/--set` 指定备份集，`-T/--target-timeline` 指定时间线，`--target-action` 指定到达目标后的动作，
`-D/--data` 恢复到其他数据目录（此时必须配合 `--no-restart`）。
默认只用安全的 fast 模式停库，失败即中止 —— 除非显式给出 `--force-stop`，才允许升级为强制停库。
对于 Patroni 托管的数据目录，命令恢复后会让 Patroni 保持停止；验证数据后再执行 `pig pt start`。
`pig pitr` 不清理 etcd、不重建副本，也不会自动把实例重新加入 HA 集群。
完整选项参阅 [**pig pitr 命令手册**](/docs/pig/pitr)。


--------

## 原语：pig pb restore

对于 **不由 Patroni 托管** 的实例（或已明确停管的场景），可以使用最底层的恢复原语 ——
它是 [**`pgbackrest restore`**](/docs/pgbackrest/command/restore) 的直接封装，自动处理 stanza、DBSU 与时间格式，
执行前显示恢复计划并要求确认：

```bash
pig pb restore --time "2025-07-13 10:00"     # 时间可省略时区与秒，自动按本地时区规范化
pig pb restore --set 20250715-013657F        # 从指定备份集恢复
pig pb restore -d                            # 恢复到归档末尾
```

两道内置的安全边界值得了解：

- **Patroni 托管实例会被硬拒绝**：若 Patroni 服务活跃且目标是其托管的数据目录，`pig pb restore` 直接报错退出 ——
  因为 Patroni 会立刻把恢复到一半的实例重新拉起。托管实例请使用 `pig pitr` 或 `pgsql-pitr.yml`。
- **PostgreSQL 必须已停止**：实例仍在运行时拒绝执行。

`--` 之后可透传原生 pgbackrest 选项（如 `--tablespace-map`、`--link-all`），
但恢复目标、stanza、仓库等关键选项已被封装接管，不允许透传覆盖。详见 [**pig pb 命令手册**](/docs/pig/pb)。


--------

## 恢复后处理

恢复完成后，剧本会打印控制信息并重建高可用，但仍有三件事需要确认：

1. **核对数据**：按 [**分步执行**](#分步执行) 中的方法检查恢复目标与业务数据。
2. **重建备份**：如果是从其他集群克隆恢复，需要执行 [**stanza 善后**](/docs/pgsql/backup/cluster/#克隆善后)；
   无论何种恢复，都建议尽快执行一次全量备份，在新时间线上重建恢复起点：

   ```bash
   pg-backup full
   ```

3. **恢复归档**：探索性恢复若设置了 `archive: false`，归档已被关闭，验证完成后必须恢复
   （`archive_mode` 是 postmaster 参数，需要重启生效）：

   ```bash
   psql -c 'ALTER SYSTEM RESET archive_mode;'
   pg restart pg-meta   # 重启集群使归档配置生效
   pg-backup full       # 执行新的全量备份
   ```

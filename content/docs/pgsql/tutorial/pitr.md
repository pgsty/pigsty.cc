---
title: 手工 PITR 演练
weight: 1706
description: 在隔离沙箱中分阶段执行、验证并收尾 PostgreSQL 时间点恢复。
icon: fa-solid fa-flask
categories: [任务]
aliases: [/docs/pgsql/tutorial/example/]
---

本教程在 Pigsty v4.5.0 的四节点沙箱中演练 PostgreSQL 时间点恢复。核心路径使用 [`pgsql-pitr.yml`](/docs/pgsql/backup/restore/) 的 `down → pitr → up` 三阶段，让操作者在覆盖数据、提升时间线和重建 HA 之前分别停下来验证。

如果只恢复当前节点，可使用 [`pig pitr`](/docs/pig/pitr/)；如果需要直接控制 pgBackRest，可参考 [`pg-pitr` 低层工具](/docs/pgsql/tutorial/pg-fork/#pg-pitr)。

{{% alert color="danger" title="只在可丢弃沙箱中照做" %}}
恢复会停止 Patroni/PostgreSQL，并以 `pgbackrest --force restore` 覆盖目标 PGDATA；`up` 阶段还会删除目标集群的 etcd 前缀并重建 Patroni 状态。剧本会打印计划，但 **没有交互确认**。生产操作前必须由操作者明确说出并确认精确集群名与恢复点，核对近期可用且独立验证过的备份，使用完全相同的 `-l`、变量与标签先运行 `--check`，并安排维护窗口。本教程不授权在任何生产环境执行这些命令。
{{% /alert %}}


--------

## 准备隔离沙箱

使用 [Vagrant](/docs/deploy/vagrant/) 或其他可丢弃的四节点实验环境，并选用自带 Silo 备份仓库的 `ha/full` 模板：

```bash
curl -fsSL https://repo.pigsty.io/get | bash
cd ~/pigsty
./configure -c ha/full
./deploy.yml
```

`ha/full` 定义单节点 `pg-meta`、三节点 `pg-test` 与 Silo/pgBackRest 仓库。本教程以下使用精确目标 `pg-meta`，避免把示例选择器复制到其他环境。

初始部署和备份都会改变沙箱状态；生产环境必须另行履行部署与备份审批流程。


--------

## 建立恢复证据

先只读检查拓扑、备份链与 WAL 范围：

```bash
pig pg list pg-meta
sudo -iu postgres pig pb info
sudo -iu postgres pig pb check
```

`info` 中至少应有 `status: ok` 的可用备份，并且归档 WAL 覆盖目标时间。`check` 能检查当前 stanza 与归档链路，但不能替代真实恢复演练或独立副本验证。

在沙箱中，可以运行 Pigsty 心跳脚本生成易验证的时间序列：

```bash
sudo -iu postgres /pg/bin/pg-heartbeat
```

记录以下信息，随后停止负载：

- 准备恢复到的带时区时间戳；
- 该时刻前后的心跳、LSN 与事务边界；
- 当前主库、时间线和备份标签；
- 目标集群名 `pg-meta` 与目标节点。

对真实业务表的检查需要单独授权；本教程只使用沙箱心跳数据。


--------

## 声明恢复任务

在沙箱清单的 `pg-meta.vars` 中声明恢复目标：

```yaml
pg_pitr:
  cluster: pg-meta
  time: "2026-08-13 10:00:00+08"
  action: pause
  archive: true
  backup: false
```

- `cluster` 是备份源 stanza；缺省为目标 `pg_cluster`。
- `action: pause` 让 PostgreSQL 到达目标后暂停，给人工验证留下闸门。
- `archive: true` 保留归档设置。
- `backup: true` 不是安全备份替代品：它会先删除已有的 `<pg_data>-backup`，再移动当前 PGDATA，因此这里保持 `false`。

也可以用 `-e` 临时传入同一对象，但三个阶段与预检必须逐字复用同一份有效 JSON，避免变量漂移。


--------

## 完整预检

在任何停服或写入动作前，对完整工作流执行同目标预检：

```bash
./pgsql-pitr.yml -l pg-meta --check
```

检查 Ansible 解析出的唯一目标确实是 `pg-meta`，并核对输出中的：

- 源 stanza、恢复类型、时间、时间线与动作；
- 目标 `pg_data`、端口和仓库；
- 表空间/软链接映射；
- `archive` 与 `backup` 行为。

`--check` 只验证清单、变量和任务选择，不能证明 pgBackRest 备份能够恢复。目标、备份或变量一旦变化，就必须重新预检。


--------

## 阶段一：停服

只有在操作者再次确认精确目标 `pg-meta`、恢复点与维护窗口后，才执行：

```bash
./pgsql-pitr.yml -l pg-meta -t down
```

`down` 会尝试暂停 Patroni 自动故障转移，停止所有目标成员的 Patroni，并在 PostgreSQL 仍运行时执行 immediate shutdown。随后在每个目标节点确认服务确实停止；不要只相信剧本返回码：

```bash
sudo systemctl is-active patroni
sudo -iu postgres pg_ctl -D /pg/data status
```

预期分别为 `inactive` 和“server is not running”。如果任何成员仍在运行，停止流程并排障，不要进入恢复阶段。


--------

## 阶段二：恢复并验证

再次核对 `pg_pitr` 与目标节点后执行破坏性的恢复阶段：

```bash
./pgsql-pitr.yml -l pg-meta -t pitr
```

该阶段会：

1. 生成 `/pg/conf/pitr.conf` 与 `/pg/bin/pg-restore`；
2. 根据 `backup` 决定是否移动原 PGDATA；
3. 创建目标目录并运行带 `--force`、`delta=y` 的 pgBackRest restore；
4. 直接启动 PostgreSQL并等待日志出现 consistent recovery state；
5. 打印 `pg_controldata` 摘要。

控制信息只能证明数据目录具有可读的控制状态，不能证明指定时间、XID 或业务状态正确。使用 `action: pause` 时，确认 WAL 已到达并暂停在目标附近：

```bash
sudo -iu postgres psql -p 5432 -Atqc \
  'SELECT pg_is_in_recovery(), pg_is_wal_replay_paused(), pg_last_wal_replay_lsn(), pg_last_xact_replay_timestamp()'
```

然后只检查获授权的最小数据范围；在沙箱中可检查心跳记录。若目标不对：

1. 保持所有 Patroni 停止；
2. 停止手工启动的 PostgreSQL；
3. 修改恢复目标并重新运行完整 `--check`；
4. 再执行 `pitr` 阶段。

不要运行 `up`，也不要让旧时间线上的副本重新接入。


--------

## 提升与阶段三：重建 HA

只有操作者确认恢复结果正确且接受创建新时间线后，才提升恢复实例：

```bash
sudo -iu postgres pg_ctl -D /pg/data promote
sudo -iu postgres psql -p 5432 -Atqc 'SELECT pg_is_in_recovery()'
```

预期结果为 `f`。提升不是只读验证，也不能无损撤销。

在所有 Patroni 成员仍停止、精确目标仍为 `pg-meta` 的前提下，再执行：

```bash
./pgsql-pitr.yml -l pg-meta -t up
```

`up` 会在主库节点对应的 etcd 中删除 `/pg/pg-meta/` 前缀（实际前缀还受 `pg_namespace`/Citus 配置影响），停止手工 PostgreSQL，启动主库 Patroni，再逐个启动副本并恢复 HA。etcd 删除任务设置了错误容忍，因此成功返回也不能证明旧 DCS 状态已正确清除。


--------

## 恢复后验收

逐项验证，不要把“服务启动”当成恢复完成：

```bash
pig pg list pg-meta
sudo -iu postgres psql -Atqc \
  "SELECT pg_is_in_recovery(), pg_current_wal_lsn(), current_setting('archive_mode')"
sudo -iu postgres pig pb check
```

还应确认：

- 只有预期成员成为主库，副本来自新时间线且复制正常；
- HAProxy/VIP/DNS 和应用流量只指向已验收的实例；
- 恢复点附近的数据与事件边界正确；
- `archive_mode`、`archive_command` 和新 WAL 归档正常；
- 监控、告警与备份仓库没有旧集群残留。

确认新时间线稳定后，按审批流程执行新的全量备份并再次核验：

```bash
sudo -iu postgres pg-backup full
sudo -iu postgres pig pb info
```

如果本次恢复显式使用了 `archive: false`，它会写入 `archive-mode=off`。只有在验证恢复结果并确认维护窗口后，才重置该覆盖项并通过受控重启使 `archive_mode` 生效；默认 `archive: true` 不需要这一步。


--------

## 多节点与跨集群恢复

- 多节点恢复后，旧时间线副本不能未经验证直接重新加入；`up` 会逐个启动副本并等待克隆/恢复，必须监控完成状态。
- 从另一 stanza 恢复时，`pg_pitr.cluster` 是源，`-l` 仍是被覆盖的目标。把两者分别写进变更单并逐一复述。
- 跨集群恢复通常应使用 `archive: false`，避免测试目标向源 stanza 写入 WAL；验收并完成 [stanza 善后](/docs/pgsql/backup/cluster/#克隆善后) 后再启用自己的归档。
- `link_map`、`data`、`port` 与临时 `repo` 会改变真正的数据与存储目标，必须纳入 `--check` 和人工复核。


--------

## 相关文档

- [恢复操作完整参考](/docs/pgsql/backup/restore/)
- [PITR 原理与目标语义](/docs/concept/pitr/)
- [备份链与恢复窗口](/docs/pgsql/backup/mechanism/)
- [克隆与低层 `pg-pitr`](/docs/pgsql/tutorial/pg-fork/)
- [`pig pitr`](/docs/pig/pitr/)

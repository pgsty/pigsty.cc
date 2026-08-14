---
title: 克隆与旁路恢复 PostgreSQL 实例
linkTitle: Fork 实例
weight: 1708
description: 使用 pg-fork 创建本机物理副本，并以 pg-pitr 对停止的数据目录执行低层恢复。
icon: fa-solid fa-code-fork
categories: [任务]
aliases: [/docs/pgsql/tutorial/instance/]
---

Pigsty v4.5.0 提供两个本机 Shell 工具：

- [`pg-fork`](#pg-fork)：复制一个 PostgreSQL 数据目录，并为副本设置独立端口。
- [`pg-pitr`](#pg-pitr)：调用 pgBackRest，将一个 **已停止** 的数据目录恢复到指定目标。

它们适合沙箱演练、旁路取证和临时测试，不是完整的 Patroni 集群恢复编排器。托管实例优先使用 [`pig pitr`](/docs/pig/pitr/)；多节点集群优先使用分阶段的 [`pgsql-pitr.yml`](/docs/pgsql/backup/restore/)。

{{% alert color="danger" title="先确认路径、备份和停机状态" %}}
`pg-fork` 会递归删除已存在的目标目录；`pg-pitr` 会用备份覆盖目标目录。两者在非交互环境都可能不经确认直接执行。真实运行前必须核对源与目标的绝对路径、端口、表空间、精确集群/实例身份，并确认有独立、近期且经过验证的备份。不要把刚创建的 CoW 克隆当作独立备份。
{{% /alert %}}


--------

## pg-fork

[`pg-fork`](https://github.com/pgsty/pigsty/blob/main/files/postgres/pg-fork) 在当前节点上复制 PostgreSQL 数据目录。以数据库操作系统用户（通常为 `postgres`，至少属于 `postgres` 组）执行：

```bash
pg-fork 1                         # /pg/data -> /pg/data1，目标端口 15432
pg-fork 2 -d /pg/data1            # /pg/data1 -> /pg/data2，目标端口 25432
pg-fork 3 -D /srv/pg-clone -P 55432
```

### 参数

```text
pg-fork <FORK_ID> [options]
```

| 参数 | 含义 | 默认值 |
|:-----|:-----|:-------|
| `<FORK_ID>` | 单个数字 `1`–`9`，用于推导默认目录和端口 | 必填 |
| `-d, --data <path>` | 源数据目录 | `$PG_DATA` 或 `/pg/data` |
| `-D, --dst <path>` | 目标数据目录 | `/pg/data<FORK_ID>` |
| `-p, --port <port>` | 源实例端口 | `$PG_PORT` 或 `5432` |
| `-P, --dst-port <port>` | 目标实例端口 | `<FORK_ID>5432` |
| `-s, --skip` | 跳过在线备份 API，强制冷拷贝 | 否 |
| `-y, --yes` | 跳过交互确认 | 否 |
{.full-width}

脚本会拒绝相同的规范化源/目标路径，但不会判断自定义目标目录是否属于其他重要数据。目标目录存在时，它会在复制前执行递归删除。

### 热备份与冷拷贝

默认情况下，脚本用目标端口连接源实例，在同一个 `psql` 会话中执行：

1. `CHECKPOINT`；
2. `pg_backup_start()`；
3. `rm -rf <目标>` 与 `cp -a --reflink=auto`；
4. `pg_backup_stop(wait_for_archive => false)`。

如果无法通过指定端口连接源实例，脚本会 **自动降级为冷拷贝**，而不是中止。`-s` 也会强制冷拷贝。只有确认源实例已经完全停止时，冷拷贝才是安全的；`postmaster.pid` 只能作为警告线索，不能证明进程状态。

同一文件系统上，脚本会将以下文件系统识别为快速 CoW 模式：启用 reflink 的 XFS、Btrfs、Bcachefs 和 OCFS2。其他文件系统或跨文件系统目标仍执行 `cp --reflink=auto`，但可能退化为完整复制。脚本帮助中的 ZFS 描述比当前探测逻辑更宽；v4.5.0 实现不会把 ZFS 标记为已确认的快速 CoW 模式。

### 副本配置

复制成功后，`pg-fork` 会：

- 删除目标中的 `postmaster.pid`、`postmaster.opts` 与 `standby.signal`；
- 清空目标中的物理复制槽目录；
- 在目标 `postgresql.auto.conf` 中设置独立 `port`、`archive_mode=off` 与本地 `log_directory`；
- 删除 `primary_conninfo`、`primary_slot_name` 与旧的 `recovery_target*` 覆盖项。

脚本不会检查目标端口是否空闲，也不会调整内存参数。启动副本前，至少核对：

```bash
postgres -D /pg/data1 -C port
postgres -D /pg/data1 -C archive_mode
postgres -D /pg/data1 -C shared_buffers
pg_ctl -D /pg/data1 status
```

{{% alert color="warning" title="外部表空间不会被隔离" %}}
`cp -a` 会保留 `pg_tblspc` 中的符号链接；`pg-fork` 不会复制或重映射 PGDATA 之外的表空间。直接启动这样的副本可能访问甚至修改源实例的表空间。存在外部表空间时，必须先独立复制并重映射所有表空间，或不要使用此脚本创建可写副本。
{{% /alert %}}

### 交互边界

只有标准输入是终端且没有 `-y` 时，脚本才询问 `Proceed with fork? [y/N]`。管道、CI、cron 等非交互调用不会出现该确认。因此自动化必须在调用前自行完成严格的绝对路径白名单与目标存在性检查；不要为了方便默认添加 `-y`。


--------

## pg-pitr

[`pg-pitr`](https://github.com/pgsty/pigsty/blob/main/files/postgres/pg-pitr) 是低层 pgBackRest restore 包装器。它不暂停或启动 Patroni，不停止或启动 PostgreSQL，不清理 DCS，也不重建副本。

### 恢复目标

实际执行至少要明确理解一个恢复目标。无参数调用只显示帮助：

| 参数 | pgBackRest 语义 |
|:-----|:---------------|
| `-d, --default` | 不设置停止目标，重放到可用 WAL 末尾 |
| `-i, --immediate` | 到达所选备份的一致性点后停止 |
| `-t, --time <timestamp>` | 恢复到指定时间 |
| `-n, --name <restore-point>` | 恢复到命名还原点 |
| `-l, --lsn <lsn>` | 恢复到指定 LSN |
| `-x, --xid <xid>` | 恢复到指定事务 ID |
{.full-width}

`-S/--set`（兼容别名 `-b/--backup`）只选择 **从哪个备份集开始恢复**，不是停止目标。例如，`-S 20251225-120000F -d` 仍会继续重放到 WAL 末尾；若要在该备份一致后立即停止，应组合 `-S ... -i`。

针对 `time`、`name`、`lsn`、`xid` 与 `immediate`，pgBackRest 的有效默认动作是抵达目标后暂停；`-P/--promote` 改为自动提升。`-X/--exclusive` 只应与 `time`、`lsn` 或 `xid` 这类明确边界配合使用。

### 其他选项

| 参数 | 含义 |
|:-----|:-----|
| `-D, --data <path>` | 目标数据目录，必须是绝对路径；默认 `/pg/data` |
| `-s, --stanza <name>` | pgBackRest stanza；默认从配置取第一个非 `global` stanza |
| `-T, --timeline <value>` | `latest`、`current` 或正整数时间线 |
| `-P, --promote` | 对有停止目标的恢复设置自动提升 |
| `-v, --verbose` | 启用 pgBackRest info 级控制台日志 |
| `-c, --check, --dry-run` | 只打印将执行的命令 |
| `-y, --yes` | 跳过五秒倒计时 |
| `-- <args>` | 将额外参数原样传给 pgBackRest |
{.full-width}

`-c` 是命令渲染检查，不会证明备份/WAL 可用，也不会检查 PostgreSQL 或 Patroni 已停止。额外 pgBackRest 参数也没有由包装器做冲突过滤；传递仓库、表空间或链接映射参数时必须单独审查最终命令。

### 安全执行顺序

以下示例只展示单个已隔离目标目录的低层流程；生产集群恢复应使用完整 runbook：

```bash
# 1. 只读核验备份与恢复窗口
pig pb info

# 2. 核对目标实例已经停止；Patroni 托管实例还要先停止 Patroni
pg_ctl -D /pg/data1 status

# 3. 打印并人工审查准确命令，不写数据
pg-pitr -D /pg/data1 -t "2026-08-13 10:00:00+08" -c

# 4. 只有在操作者再次确认绝对目标、备份与停机状态后，才去掉 -c
pg-pitr -D /pg/data1 -t "2026-08-13 10:00:00+08"
```

实际执行拒绝 root，并在发现目标目录中存在 `postmaster.pid` 时中止；即使 PID 已失效，也要求人工确认后清理。它没有 `y/N` 问答：交互终端只有五秒可中断倒计时，非交互环境没有倒计时并直接进入 restore。

恢复后由操作者启动实例并验证：

```bash
pg_ctl -D /pg/data1 start
psql -p 15432 -Atqc \
  'SELECT pg_is_in_recovery(), pg_is_wal_replay_paused(), pg_last_xact_replay_timestamp()'
```

只有恢复目标、允许访问的业务数据、时间线和归档设置全部验证无误后，才决定是否提升。提升会创建新时间线，不是可撤销的“查看”动作。`pg-pitr` 本身不会关闭归档；不要机械执行脚本结尾的通用“enable archive_mode”提示，应先查看有效值，只纠正本次恢复明确造成的覆盖项。

### 旁路恢复的额外风险

向 `/pg/data1` 之类的自定义目录恢复时，pgBackRest 可能从备份恢复 `postgresql.auto.conf`，覆盖 `pg-fork` 写入的独立端口。启动前重新检查 `port`、`archive_mode`、socket、日志与内存设置。

备份中若包含外部表空间或链接，旁路恢复还可能使用原路径。需要隔离时，应在 `--` 后提供经过审查的 pgBackRest `--tablespace-map`、`--link-map` 等参数，并检查打印出的完整命令；否则不要在与生产实例相同的主机上启动恢复副本。


--------

## 推荐的克隆验证流程

1. 核对源实例、目标绝对路径、目标端口、表空间与独立备份。
2. 在交互终端运行 `pg-fork <id>`，确认脚本显示的是热备份而非意外降级的冷拷贝。
3. 不启动副本，先用 `pg-pitr -D <clone> ... -c` 检查恢复命令。
4. 明确确认目标后执行恢复；随后重新检查副本端口和所有外部路径。
5. 启动副本，在隔离端口上验证恢复状态和经授权的数据。
6. 只有需要形成新主库时才提升；否则停止副本并按经过验证的精确路径清理。

这种旁路验证可以降低对当前 PGDATA 的直接影响，但仍会读取同一个备份仓库、占用主机资源，并可能触及外部表空间；它不是无风险沙箱。


--------

## 相关文档

- [PITR 手工演练](/docs/pgsql/tutorial/pitr/)
- [恢复操作与 `pgsql-pitr.yml`](/docs/pgsql/backup/restore/)
- [`pig pitr`](/docs/pig/pitr/)
- [`pig pb restore`](/docs/pig/pb/#pb-restore/)

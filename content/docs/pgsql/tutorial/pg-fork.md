---
title: 利用 xfs 实现实例 Fork
linkTitle: Fork 实例
weight: 1708
description: 在同一台机器上克隆实例并执行时间点恢复
icon: fa-solid fa-code-fork
categories: [任务]
---


Pigsty 提供了两个实用脚本，用于在同一台机器上快速克隆实例并执行时间点恢复：

- [`pg-fork`](#pg-fork)：在同一台机器上快速克隆一个新的 PostgreSQL 实例
- [`pg-pitr`](#pg-pitr)：使用 pgbackrest 手动执行时间点恢复

这两个脚本可以配合使用：先用 `pg-fork` 克隆实例，再用 `pg-pitr` 将克隆实例恢复到指定时间点。


--------


## pg-fork

[`pg-fork`](https://github.com/pgsty/pigsty/blob/main/files/postgres/pg-fork) 可以在同一台机器上快速克隆一个新的 PostgreSQL 实例。

### 快速上手

使用 `postgres` 用户（dbsu）执行以下命令，即可创建一个新的实例：

```bash
pg-fork 1                         # 从 /pg/data 克隆到 /pg/data1，端口 15432
pg-fork 2 -d /pg/data1            # 从 /pg/data1 克隆到 /pg/data2，端口 25432
pg-fork 3 -D /tmp/test -P 5555    # 克隆到自定义目录和端口
```

克隆完成后，可以启动并访问新实例：

```bash
pg_ctl -D /pg/data1 start         # 启动克隆实例
psql -p 15432                     # 连接克隆实例
```


### 命令语法

```bash
pg-fork <FORK_ID> [options]
```

**必填参数：**

| 参数 | 说明 |
|------|------|
| `<FORK_ID>` | 克隆实例编号（1-9），决定默认端口和数据目录 |

**可选参数：**

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `-d, --data <datadir>` | 源实例数据目录 | `/pg/data` 或 `$PG_DATA` |
| `-D, --dst <dst_dir>` | 目标数据目录 | `/pg/data<FORK_ID>` |
| `-p, --port <port>` | 源实例端口 | `5432` 或 `$PG_PORT` |
| `-P, --dst-port <port>` | 目标实例端口 | `<FORK_ID>5432` |
| `-s, --skip` | 跳过备份 API，使用冷拷贝模式 | - |
| `-y, --yes` | 跳过确认提示 | - |
| `-h, --help` | 显示帮助信息 | - |


### 使用示例

{{< tabpane persist="disabled" >}}
{{% tab header="pg-fork 示例" disabled=true /%}}
{{< tab header="基础克隆" lang="bash" >}}
# 从默认实例克隆到 /pg/data1，端口 15432
pg-fork 1

# 从默认实例克隆到 /pg/data2，端口 25432
pg-fork 2
{{< /tab >}}
{{< tab header="指定源端口" lang="bash" >}}
# 从端口 5433 的实例克隆
pg-fork 1 -p 5433

# 使用环境变量指定源端口
PG_PORT=5433 pg-fork 1
{{< /tab >}}
{{< tab header="链式克隆" lang="bash" >}}
# 从 /pg/data1 克隆到 /pg/data2
pg-fork 2 -d /pg/data1

# 从 /pg/data2 克隆到 /pg/data3
pg-fork 3 -d /pg/data2
{{< /tab >}}
{{< tab header="自定义位置" lang="bash" >}}
# 克隆到自定义目录和端口
pg-fork 1 -D /tmp/pgtest -P 5555

# 完全自定义
pg-fork 1 -d /pg/data -D /mnt/backup/pgclone -P 6543
{{< /tab >}}
{{< tab header="冷拷贝模式" lang="bash" >}}
# 源实例已停止时使用冷拷贝
pg-fork 1 -s

# 跳过确认直接执行
pg-fork 1 -s -y
{{< /tab >}}
{{< /tabpane >}}


### 工作原理

`pg-fork` 支持两种工作模式：

**热备份模式**（默认，源实例运行中）：
1. 调用 `pg_backup_start()` 开始备份
2. 使用 `cp --reflink=auto` 拷贝数据目录
3. 调用 `pg_backup_stop()` 结束备份
4. 修改配置文件，避免与源实例冲突

**冷拷贝模式**（使用 `-s` 参数或源实例未运行）：
1. 直接使用 `cp --reflink=auto` 拷贝数据目录
2. 修改配置文件

{{% alert color="info" title="CoW 快速克隆" %}}
如果您使用 XFS（启用 reflink）、Btrfs 或 ZFS 文件系统，`pg-fork` 会利用 **Copy-on-Write** 特性，
数据目录拷贝在几百毫秒内完成，且几乎不占用额外存储空间。只有在数据被修改时才会分配新的存储块。
{{% /alert %}}


### 克隆后配置

`pg-fork` 会自动修改克隆实例的以下配置：

| 配置项 | 修改内容 |
|--------|----------|
| `port` | 改为目标端口（避免冲突） |
| `archive_mode` | 设为 `off`（避免污染 WAL 归档） |
| `log_directory` | 设为 `log`（使用数据目录下的日志） |
| `primary_conninfo` | 移除（创建独立实例） |
| `standby.signal` | 移除（创建独立实例） |
| `pg_replslot/*` | 清空（避免复制槽冲突） |


### 典型工作流

```bash
# 1. 克隆实例用于测试
pg-fork 1 -y

# 2. 启动克隆实例
pg_ctl -D /pg/data1 start

# 3. 在克隆实例上测试（不影响生产）
psql -p 15432 -c "DROP TABLE important_data;"  # 安全测试

# 4. 测试完成后清理
pg_ctl -D /pg/data1 stop
rm -rf /pg/data1
```


--------


## pg-pitr

[`pg-pitr`](https://github.com/pgsty/pigsty/blob/main/files/postgres/pg-pitr) 是一个用于手动执行时间点恢复的脚本，基于 pgbackrest。

### 快速上手

```bash
pg-pitr -d                                  # 恢复到最新状态
pg-pitr -i                                  # 恢复到备份完成时间
pg-pitr -t "2025-01-01 12:00:00+08"         # 恢复到指定时间点
pg-pitr -n my-savepoint                     # 恢复到命名恢复点
pg-pitr -l "0/7C82CB8"                      # 恢复到指定 LSN
pg-pitr -x 12345678 -X                      # 恢复到事务之前
pg-pitr -b 20251225-120000F                 # 恢复到指定备份集
```


### 命令语法

```bash
pg-pitr [options] [recovery_target]
```

**恢复目标（选择一个）：**

| 参数 | 说明 |
|------|------|
| `-d, --default` | 恢复到 WAL 归档流末尾（最新状态） |
| `-i, --immediate` | 恢复到数据库一致性点（最快恢复） |
| `-t, --time <timestamp>` | 恢复到指定时间点 |
| `-n, --name <restore_point>` | 恢复到命名恢复点 |
| `-l, --lsn <lsn>` | 恢复到指定 LSN |
| `-x, --xid <xid>` | 恢复到指定事务 ID |
| `-b, --backup <label>` | 恢复到指定备份集 |

**可选参数：**

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `-D, --data <path>` | 恢复目标数据目录 | `/pg/data` |
| `-s, --stanza <name>` | pgbackrest stanza 名称 | 自动检测 |
| `-X, --exclusive` | 排除目标点（恢复到目标之前） | - |
| `-P, --promote` | 恢复后自动提升（默认暂停） | - |
| `-c, --check` | 干运行模式，仅打印命令 | - |
| `-y, --yes` | 跳过确认和倒计时 | - |
| `-h, --help` | 显示帮助信息 | - |


### 恢复目标类型

{{< tabpane persist="disabled" >}}
{{% tab header="恢复目标" disabled=true /%}}
{{< tab header="latest" lang="bash" >}}
# 恢复到 WAL 归档流末尾（最新状态）
pg-pitr -d

# 这是默认行为，会重放所有可用的 WAL
{{< /tab >}}
{{< tab header="immediate" lang="bash" >}}
# 恢复到数据库一致性点
pg-pitr -i

# 最快的恢复方式，不重放额外的 WAL
# 适用于快速验证备份是否可用
{{< /tab >}}
{{< tab header="time" lang="bash" >}}
# 恢复到指定时间点
pg-pitr -t "2025-01-01 12:00:00+08"

# 使用 UTC 时间
pg-pitr -t "2025-01-01 04:00:00+00"

# 时间格式：YYYY-MM-DD HH:MM:SS[.usec][+/-TZ]
{{< /tab >}}
{{< tab header="name" lang="bash" >}}
# 恢复到命名恢复点
pg-pitr -n my-savepoint

# 恢复点需要事先使用 pg_create_restore_point() 创建
# SELECT pg_create_restore_point('my-savepoint');
{{< /tab >}}
{{< tab header="lsn" lang="bash" >}}
# 恢复到指定 LSN
pg-pitr -l "0/7C82CB8"

# LSN 可以从监控面板或 pg_current_wal_lsn() 获取
{{< /tab >}}
{{< tab header="xid" lang="bash" >}}
# 恢复到指定事务 ID
pg-pitr -x 12345678

# 恢复到事务之前（不包含该事务）
pg-pitr -x 12345678 -X
{{< /tab >}}
{{< tab header="backup" lang="bash" >}}
# 恢复到指定备份集
pg-pitr -b 20251225-120000F

# 查看可用备份集
pgbackrest info
{{< /tab >}}
{{< /tabpane >}}


### 使用示例

**恢复到指定时间点：**

```bash
# 1. 停止 PostgreSQL
pg_ctl -D /pg/data stop -m fast

# 2. 执行 PITR
pg-pitr -t "2025-12-27 10:00:00+08"

# 3. 启动并验证
pg_ctl -D /pg/data start
psql -c "SELECT * FROM important_table;"

# 4. 确认无误后提升
pg_ctl -D /pg/data promote

# 5. 启用归档并执行新备份
psql -c "ALTER SYSTEM SET archive_mode = on;"
pg_ctl -D /pg/data restart
pg-backup full
```

**恢复到克隆实例：**

```bash
# 1. 克隆实例
pg-fork 1 -y

# 2. 在克隆实例上执行 PITR
pg-pitr -D /pg/data1 -t "2025-12-27 10:00:00+08"

# 3. 启动克隆实例验证
pg_ctl -D /pg/data1 start
psql -p 15432
```

**干运行模式：**

```bash
# 仅打印命令，不执行
pg-pitr -t "2025-12-27 10:00:00+08" -c

# 输出示例：
# Command:
#   pgbackrest --stanza=pg-meta --delta --force --type=time --target="2025-12-27 10:00:00+08" restore
```


### 恢复后处理

恢复完成后，实例会处于**恢复暂停**状态（除非使用 `-P` 参数）。您需要：

1. **启动实例**：`pg_ctl -D /pg/data start`
2. **验证数据**：检查数据是否符合预期
3. **提升实例**：`pg_ctl -D /pg/data promote`
4. **启用归档**：`psql -c "ALTER SYSTEM SET archive_mode = on;"`
5. **重启实例**：`pg_ctl -D /pg/data restart`
6. **执行备份**：`pg-backup full`

{{% alert color="warning" title="重要提示" %}}
恢复后的实例 `archive_mode` 被设为 `off`，以防止意外的 WAL 写入污染归档仓库。
确认数据正确后，务必重新启用归档并执行全量备份。
{{% /alert %}}


--------


## 组合使用

`pg-fork` 和 `pg-pitr` 可以组合使用，实现安全的 PITR 验证流程：

```bash
# 1. 克隆当前实例
pg-fork 1 -y

# 2. 在克隆实例上执行 PITR（不影响生产）
pg-pitr -D /pg/data1 -t "2025-12-27 10:00:00+08"

# 3. 启动克隆实例
pg_ctl -D /pg/data1 start

# 4. 验证恢复结果
psql -p 15432 -c "SELECT count(*) FROM orders WHERE created_at < '2025-12-27 10:00:00';"

# 5. 确认无误后，可以选择：
#    - 方案A：在生产实例上执行相同的 PITR
#    - 方案B：将克隆实例提升为新的生产实例

# 6. 清理测试实例
pg_ctl -D /pg/data1 stop
rm -rf /pg/data1
```


--------


## 注意事项

### 运行要求

- 必须以 `postgres` 用户（或 postgres 组成员）执行
- `pg-pitr` 执行前必须停止目标实例的 PostgreSQL
- `pg-fork` 热备份模式需要源实例正在运行

### 文件系统

- 推荐使用 XFS（启用 reflink）或 Btrfs 文件系统
- CoW 文件系统上克隆几乎瞬间完成，且不占用额外空间
- 非 CoW 文件系统会执行完整拷贝，耗时较长

### 端口规划

| FORK_ID | 默认端口 | 默认数据目录 |
|---------|----------|--------------|
| 1 | 15432 | /pg/data1 |
| 2 | 25432 | /pg/data2 |
| 3 | 35432 | /pg/data3 |
| ... | ... | ... |
| 9 | 95432 | /pg/data9 |

### 安全建议

- 克隆实例仅用于测试和验证，不应长期运行
- 验证完成后及时清理克隆实例
- 生产环境 PITR 建议使用 `pgsql-pitr.yml` 剧本
- 重要操作前先使用 `-c` 干运行模式确认命令





## 原理剖析

有时候，您想要用现有的 PostgreSQL 实例在 **同一台机器** 上创建一个新的实例 （用于测试，PITR 恢复），可以使用 `postgres` 用户执行下面的命令：

```bash
psql <<EOF
CHECKPOINT;
SELECT pg_backup_start('pgfork', true);
\! rm -rf /pg/data2 && cp -r --reflink=auto /pg/data /pg/data2 && ls -alhd /pg/data2
SELECT * FROM pg_backup_stop(false);
EOF

# 修改配置，避免与现有实例冲突：端口，日志，归档等
sed -i 's/^port.*/port = 5431/' /pg/data2/postgresql.conf;
sed -i 's/^log_destination.*/log_destination = stderr/' /pg/data2/postgresql.conf;
sed -i 's/^archive_mode.*/archive_mode = off/' /pg/data2/postgresql.conf;
rm -rf /pg/data2/postmaster.pid /pg/data2/postmaster.opts
pg_ctl -D /pg/data2 start -l /pg/log/pgfork.log
pg_ctl -D /pg/data2 stop
psql -p 5431  # 访问新实例
```

上面的命令会创建一个新的数据目录 `/pg/data2`，它是现有数据目录 `/pg/data` 的一个完整拷贝。
如果您使用的是 XFS （启用了 reflink COW 特性），那么同磁盘拷贝目录会非常快，通常几百毫秒的常数时间内即可完成。

您在原地拉起新实例前，**务必** 修改 `postgresql.conf` 里的 `port` / `archive_mode` / `log_destination` 参数，避免影响现有生产实例等运行。
您可以使用一个没有被占用的端口，例如 `5431`，并将日志输出到 `/pg/log/xxxx.log` 避免写脏现有实例的日志文件。

我们建议同时修改 `shared_buffers`  Pigsty 默认情况通常分配 25% 的系统内存给 PostgreSQL 实例，
开启新实例时，会与现有实例争夺内存资源。您可以适当调小，以减小对现有生产实例的影响。





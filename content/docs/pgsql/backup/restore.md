---
title: 恢复操作
weight: 1705
description: 从备份恢复 PostgreSQL
icon: fa-solid fa-rotate-left
categories: [任务]
---


您可以使用预配置的 pgbackrest 在 Pigsty 中执行时间点恢复（PITR）。

- [**剧本方式**](#快速上手)：使用 `pgsql-pitr.yml` 剧本自动执行 PITR
- [**手动方式**](/docs/pgsql/tutorial/pg-fork#pg-pitr)：使用 `pg-pitr` 脚本手动执行 PITR

--------


## 快速上手

如果您想将 `pg-meta` 集群回滚到之前的时间点，添加 `pg_pitr` 参数：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta2
    pg_pitr: { time: '2025-07-13 10:00:00+00' }  # 从最新备份恢复
```

然后运行 `pgsql-pitr.yml` 剧本，它将把 `pg-meta` 集群回滚到指定时间点。

```bash
./pgsql-pitr.yml -l pg-meta
```


--------

## 恢复后处理

恢复后的集群会**禁用** `archive_mode`，以防止意外的 WAL 写入。
如果恢复后的数据库状态正常，您可以启用 `archive_mode` 并执行全量备份。

```bash title="postgres @ pg-meta $"
psql -c 'ALTER SYSTEM RESET archive_mode; SELECT pg_reload_conf();'
pg-backup full    # 执行新的全量备份
```


--------

## 恢复目标

您可以在 `pg_pitr` 中指定不同类型的恢复目标，但它们是互斥的：

- [`time`](https://www.postgresql.org/docs/current/runtime-config-wal.html#RECOVERY-TARGET-TIME)：恢复到哪个时间点？
- [`name`](https://www.postgresql.org/docs/current/runtime-config-wal.html#RECOVERY-TARGET-NAME)：恢复到命名的恢复点（由 `pg_create_restore_point` 创建）
- [`xid`](https://www.postgresql.org/docs/current/runtime-config-wal.html#RECOVERY-TARGET-XID)：恢复到特定的事务 ID（TXID/XID）
- [`lsn`](https://www.postgresql.org/docs/current/runtime-config-wal.html#RECOVERY-TARGET-LSN)：恢复到特定的 LSN（日志序列号）点

如果指定了上述任何参数，恢复 [`类型`](https://www.postgresql.org/docs/current/runtime-config-wal.html#RECOVERY-TARGET-TYPE) 会相应设置，
否则将设置为 `latest`（WAL 归档流的末尾）。
特殊的 `immediate` 类型可用于指示 pgbackrest 通过在第一个一致点停止来最小化恢复时间。


### 目标类型

{{< tabpane persist="disabled" >}}
{{% tab header="恢复目标类型" disabled=true /%}}
{{< tab header="latest" lang="yaml" >}}
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


### 按时间恢复

最常用的目标是时间点；您可以指定要恢复到的时间点：

```bash title="恢复到指定时间点"
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "time": "2025-12-27 15:50:00+00" }}'
```

时间应该是有效的 PostgreSQL [`TIMESTAMP`](https://www.postgresql.org/docs/current/datatype-datetime.html#DATATYPE-DATETIME-INPUT-TIME-STAMPS) 格式，建议使用 `YYYY-MM-DD HH:MM:SS+TZ`。


### 按名称恢复

您可以使用 [`pg_create_restore_point`](https://www.postgresql.org/docs/current/functions-admin.html#id-1.5.8.34.5.5.2.2.1.1.1.1) 创建命名恢复点：

```sql
SELECT pg_create_restore_point('shit_incoming');
```

然后在 PITR 中使用该命名恢复点：

```bash
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "name": "shit_incoming" }}'
```


### 按 XID 恢复

如果您有一个事务意外删除了某些数据，最好的恢复方式是将数据库恢复到该事务之前的状态。

```bash title="恢复到某事务之前"
./pgsql-pitr.yml -e '{"pg_pitr": { "xid": "250000", exclusive: true }}'
```

您可以从监控仪表盘找到确切的事务 ID，或从 CSVLOG 中的 `TXID` 字段获取。

{{% alert color="info" title="包含与排除" %}}
目标参数默认是"包含"的，这意味着恢复会包含目标点。
`exclusive` 标志会排除该确切目标，例如 xid 24999 将是最后一个被重放的事务。

这仅适用于 `time`、`xid`、`lsn` 恢复目标，详情请参阅 [`recovery_target_inclusive`](https://www.postgresql.org/docs/current/runtime-config-wal.html#RECOVERY-TARGET-INCLUSIVE)。
{{% /alert %}}


### 按 LSN 恢复

PostgreSQL 使用 [LSN](https://www.postgresql.org/docs/current/datatype-pg-lsn.html)（日志序列号）来标识 WAL 记录的位置。
您可以在很多地方找到它，比如 Pigsty 仪表盘的 PG LSN 面板。

```bash title="恢复到指定 LSN"
./pgsql-pitr.yml -e '{"pg_pitr": { "lsn": "0/4001C80", timeline: "1" }}'
```

要恢复到 WAL 流中的确切位置，您还可以指定 [`timeline`](https://www.postgresql.org/docs/current/runtime-config-wal.html#RECOVERY-TARGET-TIMELINE) 参数（默认为 `latest`）


--------

## 恢复来源

- `cluster`：从哪个集群恢复？默认使用当前的 `pg_cluster`，您可以使用同一 pgbackrest 仓库中的任何其他集群
- `repo`：覆盖备份仓库，使用与 `pgbackrest_repo` 相同的格式
- `set`：默认使用 `latest` 备份集，但您可以通过标签指定特定的 pgbackrest 备份

Pigsty 将从 pgbackrest 备份仓库恢复。如果您使用集中式备份仓库（如 MinIO/S3），
可以指定另一个 "stanza"（另一个集群的备份目录）作为恢复来源。

```yaml
pg-meta2:
  hosts: { 10.10.10.11: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta2
    pg_pitr: { cluster: pg-meta }  # 从 pg-meta 集群备份恢复
```

上述配置将标记 PITR 过程使用 `pg-meta` stanza。
您也可以通过 CLI 参数传递 `pg_pitr` 参数：

```bash title="使用 pg-meta 备份恢复 pg-meta2"
./pgsql-pitr.yml -l pg-meta2 -e '{"pg_pitr": { "cluster": "pg-meta" }}'
```

从另一个集群 PITR 时也可以使用这些目标：

```bash
./pgsql-pitr.yml -l pg-meta2 -e '{"pg_pitr": { "cluster": "pg-meta", "time": "2025-07-14 08:00:00+00" }}'
```


--------

## 分步执行

这种方式是半自动的，您将参与 PITR 过程以做出关键决策。

例如，此配置将把 `pg-meta` 集群本身恢复到指定时间点：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta2
    pg_pitr: { time: '2025-07-13 10:00:00+00' }  # 从最新备份恢复
```

让我们逐步执行：

```bash
./pgsql-pitr.yml -l pg-meta -t down     # 暂停 patroni 高可用
./pgsql-pitr.yml -l pg-meta -t pitr     # 运行 pitr 过程
./pgsql-pitr.yml -l pg-meta -t up       # 生成 pgbackrest 配置和恢复脚本
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


--------

## PITR 参数定义

`pg_pitr` 参数还有更多可用选项：

```yaml
pg_pitr:                           # 定义 PITR 任务
    cluster: "some_pg_cls_name"    # 源集群名称
    type: default                   # 恢复目标类型：time, xid, name, lsn, immediate, default
    time: "2025-01-01 10:00:00+00" # 恢复目标：时间，与 xid, name, lsn 互斥
    name: "some_restore_point"     # 恢复目标：命名恢复点，与 time, xid, lsn 互斥
    xid:  "100000"                 # 恢复目标：事务 ID，与 time, name, lsn 互斥
    lsn:  "0/3000000"              # 恢复目标：日志序列号，与 time, name, xid 互斥
    timeline: latest               # 目标时间线，可以是整数，默认为 latest
    exclusive: false               # 是否排除目标点，默认为 false
    action: pause                  # 恢复后操作：pause, promote, shutdown
    archive: false                 # 是否保留归档设置？默认为 false
    db_exclude: [ template0, template1 ]
    db_include: []
    link_map:
      pg_wal: '/data/wal'
      pg_xact: '/data/pg_xact'
    process: 4                     # 并行恢复进程数
    repo: {}                       # 恢复来源仓库
    data: /pg/data                 # 数据恢复位置
    port: 5432                     # 恢复实例的监听端口
```

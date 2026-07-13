---
title: CRIT 模板
weight: 40
description: 面向一致性优先业务的 PostgreSQL 参数模板，启用严格同步复制、数据校验和详细连接日志。
icon: fa-solid fa-shield-halved
module: [PGSQL]
categories: [参考]
---

`crit.yml` 面向一致性和审计要求较高的事务型业务。它强制启用数据校验和与 Patroni 严格同步模式，增加连接日志，并调整部分 WAL、超时和并行查询参数。

该模板会增加写入延迟，并可能在没有可用同步副本时阻塞写入。使用前应确认一致性目标、故障域、客户端提交设置和可用性要求。

建议同时评估 [**`node_tune: crit`**](/docs/node/param#node_tune)，但主机调优与数据库参数可以独立选择。


----------------

## 使用方法

```yaml
pg-critical:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica }
  vars:
    pg_cluster: pg-critical
    pg_conf: crit.yml
    node_tune: crit
```

三节点拓扑可以在一个节点故障后保留重新选择同步副本的空间，但是否持续可写还取决于剩余节点状态、DCS、网络和同步副本选择。应在目标拓扑上执行故障演练。


----------------

## 严格同步复制

CRIT 不使用 [**`pg_rpo`**](/docs/pgsql/param#pg_rpo) 推导同步模式，而是固定启用：

```yaml
synchronous_mode: true
synchronous_mode_strict: true
```

`synchronous_mode_strict` 禁止 Patroni 在没有同步副本时自动退回异步复制，因此主库会阻塞需要同步确认的写入。

在以下前提下，该模式以不丢失已确认事务为目标：

- 会话没有将 `synchronous_commit` 降低为 `local`、`off` 等异步级别；
- 提交时同步副本正常确认 WAL；
- 故障切换只选择包含所需 WAL 的合格节点。

因此，RPO 结论必须结合客户端参数、复制状态和故障模型验证，不能只根据模板名称确定。

需要多个同步副本确认时，可以通过 Patroni 动态配置设置：

```bash
pg edit-config pg-critical
```

```yaml
synchronous_node_count: 2
```

同步副本数量越多，可接受写入的节点条件越严格。


----------------

## 数据校验和

CRIT 初始化配置始终包含：

```yaml
initdb:
  - data-checksums
```

这会忽略 [**`pg_checksum`**](/docs/pgsql/param#pg_checksum) 的关闭设置，并为新集群启用页级校验和。校验和用于发现写入后发生的页面损坏，不检测逻辑错误或所有内存错误。


----------------

## 连接与查询日志

CRIT 记录 DDL、执行时间超过 100 ms 的语句和连接断开事件：

```yaml
log_statement: ddl
log_min_duration_statement: 100
log_disconnections: 'on'
```

PostgreSQL 18 及以上版本使用：

```yaml
log_connections: 'receipt,authentication,authorization'
```

较早版本使用 `log_connections: on`。这些日志可以支持连接审计，但不等同于 SQL 细粒度审计。需要记录对象读写、角色或语句类别时，应另行启用 `pgaudit`。

`track_activity_query_size` 设置为 32 KiB，以保留更长的活动查询文本。日志可能包含 SQL 和业务数据，应限制访问并设置合适的保留周期。


----------------

## Watchdog

CRIT 会将默认关闭的 Patroni watchdog 模式转换为 `automatic`：

```yaml
watchdog:
  mode: automatic
  device: /dev/watchdog
```

`automatic` 仅在系统存在可用 watchdog 设备时启用。需要强制 fencing 时，应确认硬件、虚拟化平台和设备权限后显式使用 `required`；配置错误会影响主库启动和故障切换。


----------------

## 主要参数差异

| 参数 | CRIT | OLTP 默认 | 影响 |
|:---|:---|:---|:---|
| `synchronous_mode` | 固定启用 | 由 `pg_rpo` 推导 | 一致性优先 |
| `synchronous_mode_strict` | `true` | 按通用模板 | 无同步副本时阻塞写入 |
| `data-checksums` | 强制启用 | 由 `pg_checksum` 控制 | 页面损坏检测 |
| `max_parallel_workers_per_gather` | `0` | 根据 CPU 计算 | 降低并行查询波动 |
| `wal_writer_delay` | `10ms` | `20ms` | 更频繁处理 WAL |
| `wal_writer_flush_after` | `0` | `1MB` | 改变 WAL 刷写行为 |
| `idle_replication_slot_timeout` | `3d` | `7d` | 更快清理闲置复制槽 |
| `idle_in_transaction_session_timeout` | `1min` | `10min` | 更快终止空闲事务 |
| `track_activity_query_size` | `32KiB` | `8KiB` | 保留更长查询文本 |
| `log_connections` | 详细连接事件 | PostgreSQL 18 默认记录授权 | 增加连接审计信息 |
| `log_disconnections` | `on` | `off` | 记录断开事件 |
{.full-width}

CRIT 还会禁用单个查询的并行 gather，并调整并行成本、autovacuum、WAL 和统计参数。完整值以实际版本的 `roles/pgsql/templates/crit.yml` 为准。


----------------

## 预加载扩展

CRIT 使用 [**`pg_libs`**](/docs/pgsql/param#pg_libs) 生成 `shared_preload_libraries`。由于角色默认值已经将 `pg_libs` 设置为：

```yaml
pg_libs: 'pg_stat_statements, auto_explain'
```

单独选择 `crit.yml` **不会自动加载 `passwordcheck`**。需要口令复杂度检查时应显式配置：

```yaml
pg_libs: '$libdir/passwordcheck, pg_stat_statements, auto_explain'
```

[**`ha/safe`**](/docs/conf/safe) 已包含该覆盖值。需要 `pgaudit` 时，也应显式加入 `pg_libs` 并配置审计范围：

```yaml
pg_libs: '$libdir/passwordcheck, pg_stat_statements, auto_explain, pgaudit'
pg_parameters:
  pgaudit.log: 'ddl, role, write'
```


----------------

## 性能与可用性影响

- 同步提交需要等待同步副本，写入延迟至少包含副本网络与 WAL 持久化时间；
- 严格同步模式在没有可用同步副本时阻塞写入；
- 禁用并行 gather 可能降低大型查询吞吐，但减少并行执行造成的资源波动；
- 更详细的日志和统计会增加 I/O、CPU 与存储占用；
- 更短的空闲事务超时可能终止长时间保持事务但未执行语句的应用会话。

影响大小取决于硬件、网络、查询和客户端行为，应使用实际负载测试，不宜采用固定的延迟或吞吐百分比。


----------------

## 上线检查

- [ ] 至少部署一个可用同步副本，并验证节点故障时的写入行为
- [ ] 检查应用是否修改 `synchronous_commit`
- [ ] 根据可用性要求选择 watchdog `automatic` 或 `required`
- [ ] 验证连接日志的采集、访问权限和保留周期
- [ ] 需要口令检查或 SQL 审计时，显式配置 `pg_libs` 和扩展参数
- [ ] 使用生产负载测试写入延迟、吞吐和空闲事务超时
- [ ] 执行主库、同步副本、DCS 和网络分区故障演练


----------------

## 相关文档

- [**安全模型**](/docs/concept/sec/level)：CRIT 在整体加固路径中的位置
- [**数据安全**](/docs/concept/sec/data)：同步复制、校验和与审计边界
- [**`ha/safe` 配置**](/docs/conf/safe)：包含 CRIT 的三节点安全示例
- [**同步备库**](/docs/pgsql/config/cluster#同步备库)：同步复制配置
- [**法定人数提交**](/docs/pgsql/config/cluster#法定人数提交)：同步副本数量
- [**OLTP 模板**](/docs/pgsql/template/oltp/)：通用事务模板

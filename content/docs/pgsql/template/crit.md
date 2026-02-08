---
title: CRIT 模板
weight: 40
description: 针对核心金融业务优化的 PostgreSQL 配置模板，强调数据安全与审计合规
icon: fa-solid fa-shield-halved
module: [PGSQL]
categories: [参考]
---


`crit.yml` 是针对**核心金融业务**优化的配置模板。适用于 4-128 核 CPU 的服务器，特点是强制同步复制、数据校验和、完整审计日志、严格的安全设置。这个模板牺牲一定的性能来换取最高级别的数据安全性。

> 建议同时使用 [**`node_tune`**](/docs/node/param#node_tune) = `crit` 进行操作系统级别的配套调优，优化脏页数量。


----------------

## 适用场景

CRIT 模板适用于以下场景：

- **金融交易**：银行转账、支付清算、证券交易
- **核心账务**：总账系统、会计系统
- **合规审计**：需要完整操作记录的业务
- **关键业务**：任何不能容忍数据丢失的场景

**特征需求**：
- 零数据丢失（RPO = 0）
- 数据完整性校验
- 完整的审计日志
- 严格的安全策略
- 可以接受一定的性能损失


----------------

## 使用方法

在集群定义中指定 [**`pg_conf`**](/docs/pgsql/param#pg_conf) = `crit.yml`：

```yaml
pg-finance:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica }
  vars:
    pg_cluster: pg-finance
    pg_conf: crit.yml    # PostgreSQL 关键业务模板
    node_tune: crit      # 操作系统关键业务调优
```

**建议**：关键业务集群至少配置 3 个节点，以确保在一个节点故障时仍能保持同步复制。


----------------

## 核心特性

### 强制同步复制

CRIT 模板**强制启用同步复制**，无论 [`pg_rpo`](/docs/pgsql/param#pg_rpo) 设置为何值：

```yaml
synchronous_mode: true   # 强制开启，不受 pg_rpo 影响
```

这意味着每次事务提交都必须等待至少一个从库确认写入，确保 **RPO = 0**（零数据丢失）。

**代价**：写入延迟会增加（通常增加 1-5ms，取决于网络延迟）。

### 强制数据校验和

CRIT 模板**强制启用数据校验和**，无论 [`pg_checksum`](/docs/pgsql/param#pg_checksum) 设置为何值：

```yaml
initdb:
  - data-checksums   # 强制启用，不检查 pg_checksum 参数
```

数据校验和可以检测到磁盘静默损坏（bit rot），这对金融数据尤为重要。

### 禁用并行查询

CRIT 模板禁用了并行查询的 gather 操作：

```yaml
max_parallel_workers_per_gather: 0   # 禁用并行查询
```

同时提高了并行查询的成本估算：

```yaml
parallel_setup_cost: 2000
parallel_tuple_cost: 0.2
min_parallel_table_scan_size: 32MB
min_parallel_index_scan_size: 2MB
```

**原因**：并行查询可能导致查询延迟不稳定，对于延迟敏感的金融交易场景，稳定可预测的性能更为重要。


----------------

## 参数详解

### 连接管理

```yaml
max_connections: 500/1000   # 取决于是否使用 pgbouncer
superuser_reserved_connections: 10
```

与 OLTP 模板相同。

### 内存配置

| 参数 | 计算公式 | 说明 |
|:-----|:---------|:-----|
| `shared_buffers` | 内存 × `pg_shared_buffer_ratio` | 默认比例 0.25 |
| `maintenance_work_mem` | shared_buffers × 25% | 用于 VACUUM、CREATE INDEX |
| `work_mem` | 64MB - 1GB | 与 OLTP 相同 |
| `effective_cache_size` | 总内存 - shared_buffers | 可用于缓存的预估内存 |
{.full-width}

### WAL 配置（关键差异）

```yaml
wal_writer_delay: 10ms              # OLTP: 20ms，更频繁刷新
wal_writer_flush_after: 0           # OLTP: 1MB，立即刷新，不缓冲
idle_replication_slot_timeout: 3d   # OLTP: 7d，更严格的槽位清理
```

`wal_writer_flush_after: 0` 确保每次 WAL 写入都立即刷到磁盘，最大程度减少数据丢失风险。

### 复制配置（PG15-）

```yaml
vacuum_defer_cleanup_age: 500000    # 仅 PG15 及以下版本
```

这个参数保留最近 50 万个事务的变更不被 vacuum 清理，为从库提供更多的追赶缓冲。

### 审计日志（关键差异）

CRIT 模板启用完整的连接审计：

**PostgreSQL 18+**:
```yaml
log_connections: 'receipt,authentication,authorization'
```

**PostgreSQL 17 及以下**:
```yaml
log_connections: 'on'
log_disconnections: 'on'
```

这记录了每个连接的完整生命周期，包括：
- 连接接收
- 认证过程
- 授权结果
- 断开连接

### 查询日志

```yaml
log_min_duration_statement: 100     # 记录超过 100ms 的查询
log_statement: ddl                  # 记录所有 DDL
track_activity_query_size: 32768    # OLTP: 8192，保存完整查询
```

32KB 的 `track_activity_query_size` 确保能捕获完整的长查询文本。

### 统计跟踪

```yaml
track_io_timing: on
track_cost_delay_timing: on         # PG18+，跟踪 vacuum 代价延迟
track_functions: all
track_activity_query_size: 32768
```

### 客户端超时（关键差异）

```yaml
idle_in_transaction_session_timeout: 1min   # OLTP: 10min，更严格
```

1 分钟的空闲事务超时可以快速释放持有锁的僵尸事务，避免阻塞其他交易。

### 扩展配置

```yaml
shared_preload_libraries: '$libdir/passwordcheck, pg_stat_statements, auto_explain'
```

**注意**：CRIT 模板默认加载 `passwordcheck` 扩展，强制密码复杂度检查。


----------------

## 与 OLTP 模板的主要差异

| 参数 | [**CRIT**](/docs/pgsql/template/crit/) | [**OLTP**](/docs/pgsql/template/oltp/) | 差异原因 |
|:-----|:-----|:-----|:---------|
| synchronous_mode | **强制 true** | 取决于 pg_rpo | 零数据丢失 |
| data-checksums | **强制启用** | 可选 | 数据完整性 |
| max_parallel_workers_per_gather | **0** | 20% cpu | 稳定延迟 |
| wal_writer_delay | 10ms | 20ms | 更频繁刷新 |
| wal_writer_flush_after | **0** | 1MB | 立即刷新 |
| idle_replication_slot_timeout | 3d | 7d | 更严格清理 |
| idle_in_transaction_session_timeout | **1min** | 10min | 快速释放锁 |
| track_activity_query_size | **32KB** | 8KB | 完整查询记录 |
| log_connections | **完整记录** | 仅授权 | 审计合规 |
| log_disconnections | **on** | off | 审计合规 |
| passwordcheck | **启用** | 未启用 | 密码安全 |
| vacuum_defer_cleanup_age | 500000 | 0 | 从库追赶缓冲 |
{.full-width}


----------------

## 性能影响

使用 CRIT 模板会带来以下性能影响：

### 写入延迟增加

同步复制会增加 1-5ms 的写入延迟（取决于网络）：

```
异步复制: 提交 -> 本地刷盘 -> 返回客户端
同步复制: 提交 -> 本地刷盘 -> 等待从库确认 -> 返回客户端
```

### 写入吞吐量下降

由于需要等待从库确认，写入 TPS 可能下降 10-30%。

### 查询延迟更稳定

禁用并行查询后，查询延迟更加可预测，没有并行查询启动的开销波动。

### 资源开销略有增加

更频繁的 WAL 刷新和完整的审计日志会带来额外的 IO 开销。


----------------

## 高可用配置

### 最小推荐配置

```yaml
pg-critical:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica }
  vars:
    pg_cluster: pg-critical
    pg_conf: crit.yml    # PostgreSQL 关键业务模板
    node_tune: crit      # 操作系统关键业务调优
```

3 节点配置确保在一个节点故障时仍能保持同步复制。

### 跨机房部署

对于金融级别的容灾要求：

```yaml
pg-critical:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary, pg_weight: 100 }  # 机房 A
    10.10.10.12: { pg_seq: 2, pg_role: replica, pg_weight: 100 }  # 机房 A
    10.20.10.13: { pg_seq: 3, pg_role: replica, pg_weight: 0 }    # 机房 B（备用）
  vars:
    pg_cluster: pg-critical
    pg_conf: crit.yml    # PostgreSQL 关键业务模板
    node_tune: crit      # 操作系统关键业务调优
```

### 法定人数提交

对于更高的一致性要求，可以配置多个同步从库：

```bash
$ pg edit-config pg-critical
synchronous_mode: true
synchronous_node_count: 2    # 需要 2 个从库确认
```


----------------

## 安全加固建议

### 密码策略

CRIT 模板已启用 `passwordcheck`，建议进一步配置：

```sql
-- 设置密码最小长度
ALTER SYSTEM SET password_encryption = 'scram-sha-256';
```

### 审计扩展

考虑启用 `pgaudit` 扩展进行更详细的审计：

```yaml
pg_libs: 'pg_stat_statements, auto_explain, pgaudit'
pg_parameters:
  pgaudit.log: 'ddl, role, write'
```

### 网络隔离

确保数据库网络与业务网络隔离，使用 [HBA 规则](/docs/pgsql/config/hba) 限制访问。


----------------

## 监控指标

对于关键业务集群，重点关注：

- **复制延迟**：同步复制延迟应接近 0
- **事务提交时间**：p99 延迟
- **锁等待**：长时间锁等待可能影响业务
- **检查点**：检查点持续时间和频率
- **WAL 生成速率**：预测磁盘空间需求


----------------

## 参考资料

- [**`pg_conf`**](/docs/pgsql/param#pg_conf)：PostgreSQL 配置模板选择参数
- [**`node_tune`**](/docs/node/param#node_tune)：操作系统调优模板，应与 `pg_conf` 配套
- [**`pg_rpo`**](/docs/pgsql/param#pg_rpo)：恢复点目标参数
- [**OLTP 模板**](/docs/pgsql/template/oltp/)：事务处理模板对比
- [**OLAP 模板**](/docs/pgsql/template/olap/)：分析处理模板对比
- [**TINY 模板**](/docs/pgsql/template/tiny/)：微型实例模板对比
- [同步备库](/docs/pgsql/config/cluster#同步备库)：同步复制配置
- [法定人数提交](/docs/pgsql/config/cluster#法定人数提交)：更高一致性级别


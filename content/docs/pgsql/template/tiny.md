---
title: TINY 模板
weight: 50
description: 针对微型实例和资源受限环境优化的 PostgreSQL 配置模板
icon: fa-solid fa-microchip
module: [PGSQL]
categories: [参考]
---


`tiny.yml` 是针对**微型实例**和资源受限环境优化的配置模板。适用于 1-3 核 CPU 的服务器，特点是最小化资源占用、保守的内存分配、禁用并行查询。

> 建议同时使用 [**`node_tune`**](/docs/node/param#node_tune) = `tiny` 进行操作系统级别的配套调优。


----------------

## 适用场景

TINY 模板适用于以下场景：

- **开发测试**：本地开发环境、CI/CD 测试
- **低配虚拟机**：1-2 核 CPU、1-4GB 内存的云主机
- **边缘计算**：树莓派、嵌入式设备
- **Demo 演示**：快速体验 Pigsty 功能
- **个人项目**：资源有限的个人博客、小型应用

**资源限制**：
- 1-3 核 CPU
- 1-8 GB 内存
- 有限的磁盘空间
- 可能与其他服务共享资源


----------------

## 使用方法

在集群定义中指定 [**`pg_conf`**](/docs/pgsql/param#pg_conf) = `tiny.yml`：

```yaml
pg-dev:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-dev
    pg_conf: tiny.yml    # PostgreSQL 微型实例模板
    node_tune: tiny      # 操作系统微型实例调优
```

单节点开发环境：

```yaml
pg-local:
  hosts:
    127.0.0.1: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-local
    pg_conf: tiny.yml    # PostgreSQL 微型实例模板
    node_tune: tiny      # 操作系统微型实例调优
```


----------------

## 参数详解

### 连接管理

```yaml
max_connections: 250   # OLTP: 500-1000，减少连接开销
superuser_reserved_connections: 10
```

微型实例不需要处理大量并发连接，250 个连接足以应对开发测试场景。

### 内存配置

TINY 模板使用保守的内存分配策略：

| 参数 | 计算公式 | 说明 |
|:-----|:---------|:-----|
| `shared_buffers` | 内存 × `pg_shared_buffer_ratio` | 默认比例 0.25 |
| `maintenance_work_mem` | shared_buffers × 25% | 用于 VACUUM、CREATE INDEX |
| `work_mem` | 16MB - **256MB** | 更小的排序/哈希内存 |
| `effective_cache_size` | 总内存 - shared_buffers | 可用于缓存的预估内存 |
{.full-width}

**work_mem 计算逻辑**（与 OLTP 不同）：
```
work_mem = min(max(shared_buffers / max_connections, 16MB), 256MB)
```

更小的 `work_mem` 上限（256MB vs OLTP 的 1GB）避免内存溢出。

### 并行查询（完全禁用）

TINY 模板完全禁用了并行查询：

```yaml
max_worker_processes: cpu + 4 (最小12)      # OLTP: cpu + 8
max_parallel_workers: 50% × cpu (最小1)      # OLTP: 50% (最小2)
max_parallel_workers_per_gather: 0           # 禁用并行查询
max_parallel_maintenance_workers: 33% × cpu (最小1)
```

`max_parallel_workers_per_gather: 0` 确保查询不会启动并行工作进程，避免在低核心环境下争抢资源。

### IO 配置（PG17+）

```yaml
io_workers: 3   # 固定值，OLTP: 25% cpu (4-16)
```

固定的低 IO 工作线程数量，适合资源受限环境。

### Vacuum 配置

```yaml
vacuum_cost_delay: 20ms
vacuum_cost_limit: 2000
autovacuum_max_workers: 2          # OLTP: 3，减少一个工作进程
autovacuum_naptime: 1min
# autovacuum_vacuum_scale_factor 使用默认值
# autovacuum_analyze_scale_factor 使用默认值
```

减少 autovacuum 工作进程数量，降低后台资源占用。

### 查询优化

```yaml
random_page_cost: 1.1
effective_io_concurrency: 200
default_statistics_target: 200     # OLTP: 400，降低统计精度以节省空间
```

较低的 `default_statistics_target` 减少 `pg_statistic` 表的大小。

### 日志配置

```yaml
log_min_duration_statement: 100    # 与 OLTP 相同
log_statement: ddl
log_checkpoints: on
log_lock_waits: on
log_temp_files: 1024
# log_connections 使用默认设置（不额外记录）
```

TINY 模板不启用额外的连接日志，以减少日志量。

### 客户端超时

```yaml
deadlock_timeout: 50ms
idle_in_transaction_session_timeout: 10min   # 与 OLTP 相同
```

### 扩展配置

```yaml
shared_preload_libraries: 'pg_stat_statements, auto_explain'

pg_stat_statements.max: 2500      # OLTP: 10000，减少内存占用
pg_stat_statements.track: all
pg_stat_statements.track_utility: off
pg_stat_statements.track_planning: off
```

`pg_stat_statements.max` 从 10000 降到 2500，减少约 75% 的内存占用。


----------------

## 与 OLTP 模板的主要差异

| 参数 | [**TINY**](/docs/pgsql/template/tiny/) | [**OLTP**](/docs/pgsql/template/oltp/) | 差异原因 |
|:-----|:-----|:-----|:---------|
| max_connections | **250** | 500-1000 | 减少连接开销 |
| work_mem 上限 | **256MB** | 1GB | 避免内存溢出 |
| max_worker_processes | cpu+4 | cpu+8 | 减少后台进程 |
| max_parallel_workers_per_gather | **0** | 20% cpu | 禁用并行查询 |
| autovacuum_max_workers | **2** | 3 | 减少后台负载 |
| default_statistics_target | **200** | 400 | 节省空间 |
| pg_stat_statements.max | **2500** | 10000 | 减少内存占用 |
| io_workers | **3** | 25% cpu | 固定低值 |
{.full-width}


----------------

## 资源估算

以下是 TINY 模板在不同配置下的资源使用估算：

### 1 核 1GB 内存

```yaml
shared_buffers: ~256MB
work_mem: ~16MB
maintenance_work_mem: ~64MB
max_connections: 250
max_worker_processes: ~12
```

**PostgreSQL 进程内存占用**：约 400-600MB

### 2 核 4GB 内存

```yaml
shared_buffers: ~1GB
work_mem: ~32MB
maintenance_work_mem: ~256MB
max_connections: 250
max_worker_processes: ~12
```

**PostgreSQL 进程内存占用**：约 1.5-2GB

### 4 核 8GB 内存

此配置建议使用 OLTP 模板而非 TINY 模板：

```yaml
pg-small:
  vars:
    pg_conf: oltp.yml   # 4核8GB可以使用OLTP模板
```


----------------

## 性能调优建议

### 进一步减少资源

如果资源极度受限，可以考虑：

```yaml
pg_parameters:
  max_connections: 100           # 进一步减少
  shared_buffers: 128MB          # 进一步减少
  maintenance_work_mem: 32MB
  work_mem: 8MB
```

### 禁用不需要的扩展

```yaml
pg_libs: 'pg_stat_statements'    # 只保留必要扩展
```

### 关闭不需要的功能

```yaml
pg_parameters:
  track_io_timing: off           # 禁用 IO 时间跟踪
  track_functions: none          # 禁用函数跟踪
```

### 使用外部连接池

即使在微型实例上，使用 PgBouncer 也能显著提高并发能力：

```yaml
pg-tiny:
  vars:
    pg_conf: tiny.yml
    pg_default_service_dest: pgbouncer
    pgbouncer_poolmode: transaction
```


----------------

## 云平台推荐规格

### AWS

- **t3.micro**：1 vCPU, 1GB RAM - 适合 TINY
- **t3.small**：2 vCPU, 2GB RAM - 适合 TINY
- **t3.medium**：2 vCPU, 4GB RAM - 可考虑 OLTP

### 阿里云

- **ecs.t6-c1m1.small**：1 vCPU, 1GB RAM - 适合 TINY
- **ecs.t6-c1m2.small**：1 vCPU, 2GB RAM - 适合 TINY
- **ecs.t6-c1m4.small**：1 vCPU, 4GB RAM - 适合 TINY

### 腾讯云

- **SA2.SMALL1**：1 vCPU, 1GB RAM - 适合 TINY
- **SA2.SMALL2**：1 vCPU, 2GB RAM - 适合 TINY
- **SA2.SMALL4**：1 vCPU, 4GB RAM - 适合 TINY


----------------

## 边缘设备部署

### 树莓派 4

```yaml
pg-pi:
  hosts:
    192.168.1.100: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-pi
    pg_conf: tiny.yml       # PostgreSQL 微型实例模板
    node_tune: tiny         # 操作系统微型实例调优
    pg_storage_type: SSD    # 建议使用 SSD 存储
```

### Docker 容器

```yaml
pg-docker:
  hosts:
    172.17.0.2: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-docker
    pg_conf: tiny.yml       # PostgreSQL 微型实例模板
    node_tune: tiny         # 操作系统微型实例调优
```


----------------

## 升级到 OLTP

当您的应用增长，需要更多资源时，可以轻松升级到 [**OLTP 模板**](/docs/pgsql/template/oltp/)：

1. 升级虚拟机规格（4核 8GB 以上）
2. 修改集群配置：

```yaml
pg-growing:
  vars:
    pg_conf: oltp.yml    # 从 tiny.yml 改为 oltp.yml
    node_tune: oltp      # 从 tiny 改为 oltp
```

3. [重新配置集群](/docs/pgsql/admin/cluster#配置集群) 或重新部署


----------------

## 参考资料

- [**`pg_conf`**](/docs/pgsql/param#pg_conf)：PostgreSQL 配置模板选择参数
- [**`node_tune`**](/docs/node/param#node_tune)：操作系统调优模板，应与 `pg_conf` 配套
- [**OLTP 模板**](/docs/pgsql/template/oltp/)：事务处理模板，4核8GB 以上可升级使用
- [**OLAP 模板**](/docs/pgsql/template/olap/)：分析处理模板
- [**CRIT 模板**](/docs/pgsql/template/crit/)：关键业务模板
- [单机部署](/docs/setup/install#部署)：Pigsty 单机安装指南


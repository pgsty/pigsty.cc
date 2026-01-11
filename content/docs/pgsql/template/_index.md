---
title: 场景模板
weight: 2200
description: 使用 Pigsty 预置的四种场景化 Patroni 模版，或者基于这些模板自定义您的配置模板
icon: fas fa-paint-roller
module: [PGSQL]
categories: [参考]
---


Pigsty 提供四种预置的 Patroni/PostgreSQL 配置模板，针对不同的使用场景进行了参数优化：

| 模板                     | CPU核心  | 适用场景      | 特点            |
|:-----------------------|:-------|:----------|:--------------|
| [**`oltp.yml`**](oltp) | 4-128C | OLTP 事务处理 | 高并发、低延迟、高吞吐   |
| [**`olap.yml`**](olap) | 4-128C | OLAP 分析处理 | 大查询、高并行、长事务   |
| [**`crit.yml`**](crit) | 4-128C | 核心/金融业务   | 数据安全、审计合规、零丢失 |
| [**`tiny.yml`**](tiny) | 1-3C   | 微型实例      | 资源受限、低配环境     |
{.full-width}

您可以通过 [**`pg_conf`**](/docs/pgsql/param#pg_conf) 参数来选择使用哪个配置模板，默认为 [**`oltp.yml`**](oltp)。

> 通常，数据库调优模板 [**`pg_conf`**](/docs/pgsql/param#pg_conf) 应当与机器调优模板 [**`node_tune`**](/docs/node/param#node_tune) 配套使用。


----------------

## 使用模板

要使用特定的配置模板，只需在集群定义中设置 [**`pg_conf`**](/docs/pgsql/param#pg_conf) 参数。
建议同时设置 [**`node_tune`**](/docs/node/param#node_tune) 参数，使操作系统级别的调优与数据库调优保持一致：

```yaml
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
  vars:
    pg_cluster: pg-test
    pg_conf: oltp.yml    # PostgreSQL 配置模板（默认值）
    node_tune: oltp      # 操作系统调优模板（默认值）
```

对于核心金融业务场景，您可以使用 [**`crit.yml`**](crit) 模板：

```yaml
pg-finance:
  hosts:
    10.10.10.21: { pg_seq: 1, pg_role: primary }
    10.10.10.22: { pg_seq: 2, pg_role: replica }
    10.10.10.23: { pg_seq: 3, pg_role: replica }
  vars:
    pg_cluster: pg-finance
    pg_conf: crit.yml    # PostgreSQL 关键业务模板
    node_tune: crit      # 操作系统关键业务调优
```

对于低配虚拟机或开发环境，可以使用 [**`tiny.yml`**](tiny) 模板：

```yaml
pg-dev:
  hosts:
    10.10.10.31: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-dev
    pg_conf: tiny.yml    # PostgreSQL 微型实例模板
    node_tune: tiny      # 操作系统微型实例调优
```


----------------

## 模板对比

四种模板在关键参数上有显著差异，以适应不同的业务场景。以下是主要差异对比：

### 连接与内存

| 参数                            | OLTP         | OLAP         | CRIT         | TINY         |
|:------------------------------|:-------------|:-------------|:-------------|:-------------|
| **max_connections**           | 500/1000     | 500          | 500/1000     | 250          |
| **work_mem** 范围               | 64MB-1GB     | 64MB-8GB     | 64MB-1GB     | 16MB-256MB   |
| **maintenance_work_mem**      | 25% 共享缓冲区    | 50% 共享缓冲区    | 25% 共享缓冲区    | 25% 共享缓冲区    |
| **max_locks_per_transaction** | 1-2x maxconn | 2-4x maxconn | 1-2x maxconn | 1-2x maxconn |
{.full-width}

### 并行查询

| 参数                                  | OLTP            | OLAP    | CRIT    | TINY    |
|:------------------------------------|:----------------|:--------|:--------|:--------|
| **max_worker_processes**            | cpu+8           | cpu+12  | cpu+8   | cpu+4   |
| **max_parallel_workers**            | 50% cpu         | 80% cpu | 50% cpu | 50% cpu |
| **max_parallel_workers_per_gather** | 20% cpu (max 8) | 50% cpu | 0（禁用）   | 0（禁用）   |
| **parallel_setup_cost**             | 2000            | 1000    | 2000    | 1000    |
| **parallel_tuple_cost**             | 0.2             | 0.1     | 0.2     | 0.1     |
{.full-width}

### 同步复制

| 参数                   | OLTP       | OLAP       | CRIT | TINY       |
|:---------------------|:-----------|:-----------|:-----|:-----------|
| **synchronous_mode** | 取决于 pg_rpo | 取决于 pg_rpo | 强制开启 | 取决于 pg_rpo |
| **data_checksums**   | 可选         | 可选         | 强制开启 | 可选         |
{.full-width}

### Vacuum 配置

| 参数                         | OLTP | OLAP  | CRIT | TINY |
|:---------------------------|:-----|:------|:-----|:-----|
| **vacuum_cost_delay**      | 20ms | 10ms  | 20ms | 20ms |
| **vacuum_cost_limit**      | 2000 | 10000 | 2000 | 2000 |
| **autovacuum_max_workers** | 3    | 3     | 3    | 2    |
{.full-width}

### 超时与安全

| 参数                                      | OLTP  | OLAP   | CRIT  | TINY  |
|:----------------------------------------|:------|:-------|:------|:------|
| **idle_in_transaction_session_timeout** | 10min | 禁用     | 1min  | 10min |
| **log_min_duration_statement**          | 100ms | 1000ms | 100ms | 100ms |
| **default_statistics_target**           | 400   | 1000   | 400   | 200   |
| **track_activity_query_size**           | 8KB   | 8KB    | 32KB  | 8KB   |
| **log_connections**                     | 仅授权   | 仅授权    | 全部阶段  | 默认    |
{.full-width}


### IO 配置（PG17+）

| 参数                  | OLTP           | OLAP           | CRIT          | TINY    |
|:--------------------|:---------------|:---------------|:--------------|:--------|
| **io_workers**      | 25% cpu (4-16) | 50% cpu (4-32) | 25% cpu (4-8) | 3       |
| **temp_file_limit** | 1/20 磁盘        | 1/5 磁盘         | 1/20 磁盘       | 1/20 磁盘 |
{.full-width}


----------------

## 选择建议

- [**OLTP 模板**](oltp)：适用于大多数在线事务处理场景，是默认选择。适合电商、社交、游戏等高并发低延迟应用。

- [**OLAP 模板**](olap)：适用于数据仓库、BI 报表、ETL 等分析型负载。特点是允许大查询、高并行度、宽松的超时设置。

- [**CRIT 模板**](crit)：适用于金融交易、核心账务等对数据一致性和安全性有极高要求的场景。强制同步复制、数据校验和、完整审计日志。

- [**TINY 模板**](tiny)：适用于开发测试环境、资源受限的虚拟机、树莓派等场景。最小化资源占用，禁用并行查询。


----------------

## 自定义模板

您可以基于现有模板创建自定义配置模板。模板文件位于 Pigsty 安装目录的 `roles/pgsql/templates/` 下：

```bash
roles/pgsql/templates/
├── oltp.yml    # OLTP 事务处理模板（默认）
├── olap.yml    # OLAP 分析处理模板
├── crit.yml    # CRIT 关键业务模板
└── tiny.yml    # TINY 微型实例模板
```

创建自定义模板的步骤：

1. 复制一个现有模板作为基础
2. 根据需要修改参数
3. 将模板放置在 `roles/pgsql/templates/` 目录
4. 在集群定义中通过 [`pg_conf`](/docs/pgsql/param#pg_conf) 引用新模板

例如，创建一个名为 `myapp.yml` 的自定义模板：

```bash
cp roles/pgsql/templates/oltp.yml roles/pgsql/templates/myapp.yml
# 编辑 myapp.yml 进行自定义
```

然后在集群中使用：

```yaml
pg-myapp:
  vars:
    pg_conf: myapp.yml
```

请注意，模板文件使用 Jinja2 模板语法，参数值会根据节点的实际资源（CPU、内存、磁盘）动态计算。


----------------

## 参数优化策略

了解更多关于模板参数优化的技术细节，请参阅 [**参数优化策略**](tune)，其中详细介绍了：

- 内存参数调整（共享缓冲区、工作内存、最大连接数）
- CPU 参数调整（并行查询工作进程配置）
- 存储空间参数（WAL 大小、临时文件限制）
- 手工调整参数的方法


----------------

## 相关参数

- [**`pg_conf`**](/docs/pgsql/param#pg_conf)：指定使用的 PostgreSQL 配置模板
- [**`node_tune`**](/docs/node/param#node_tune)：指定使用的操作系统调优模板，应与 `pg_conf` 配套
- [**`pg_rto`**](/docs/pgsql/param#pg_rto)：恢复时间目标，影响故障切换超时
- [**`pg_rpo`**](/docs/pgsql/param#pg_rpo)：恢复点目标，影响同步复制模式
- [**`pg_max_conn`**](/docs/pgsql/param#pg_max_conn)：覆盖模板的最大连接数
- [**`pg_shared_buffer_ratio`**](/docs/pgsql/param#pg_shared_buffer_ratio)：共享缓冲区占内存比例
- [**`pg_storage_type`**](/docs/pgsql/param#pg_storage_type)：存储类型，影响 IO 相关参数


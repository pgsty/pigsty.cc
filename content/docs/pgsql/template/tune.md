---
title: 默认配置模板的参数优化策略说明
linkTitle: 参数优化策略
weight: 10
description: 了解在 Pigsty 中，预置的四种 Patroni 场景化模板所采用的不同参数优化策略
icon: fa-solid fa-gauge-high
module: [PGSQL]
categories: [参考]
---


Pigsty 默认提供了四套场景化参数模板，可以通过 [**`pg_conf`**](/docs/pgsql/param#pg_conf) 参数指定并使用。

- [**`tiny.yml`**](/docs/pgsql/template/tiny)：为小节点、虚拟机、小型演示优化（模板标注为 1-3 核）
- [**`oltp.yml`**](/docs/pgsql/template/oltp)：为 OLTP 工作负载和延迟敏感应用优化（4C8GB+）（默认模板）
- [**`olap.yml`**](/docs/pgsql/template/olap)：为 OLAP 工作负载和吞吐量优化（4C8G+）
- [**`crit.yml`**](/docs/pgsql/template/crit)：为数据一致性和关键应用优化（4C8G+）

Pigsty 会针对这四种默认场景，采取不同的参数优化策略，如下所示：


--------

## 内存参数调整

Pigsty 默认会检测系统的内存大小，并以此为依据设定最大连接数量与内存相关参数。

- [**`pg_max_conn`**](/docs/pgsql/param#pg_max_conn)：postgres 最大连接数，`auto` 将使用不同场景下的推荐值
- [**`pg_shared_buffer_ratio`**](/docs/pgsql/param#pg_shared_buffer_ratio)：内存共享缓冲区比例，默认为 0.25

默认情况下，Pigsty 使用 25% 的内存作为 PostgreSQL 共享缓冲区；其余内存还会被连接、`work_mem`、后台进程及操作系统缓存共同使用。

默认情况下，如果用户没有设置一个 [`pg_max_conn`](/docs/pgsql/param#pg_max_conn) 最大连接数，Pigsty 会根据以下规则使用默认值：

- oltp: 500 (pgbouncer) / 1000 (postgres)
- crit: 500 (pgbouncer) / 1000 (postgres)
- tiny: 250
- olap: 500

其中对于 OLTP 与 CRIT 模版来说，如果服务没有指向 pgbouncer 连接池，而是直接连接 postgres 数据库，最大连接会翻倍至 1000 条。

决定最大连接数后，`work_mem` 会根据共享内存数量 / 最大连接数计算得到，并限定在 64MB ~ 1GB 的范围内。

```jinja2
{% raw %}
{% if pg_max_conn != 'auto' and pg_max_conn|int >= 20 %}{% set pg_max_connections = pg_max_conn|int %}{% else %}{% if pg_default_service_dest|default('postgres') == 'pgbouncer' %}{% set pg_max_connections = 500 %}{% else %}{% set pg_max_connections = 1000 %}{% endif %}{% endif %}
{% set pg_max_prepared_transactions = pg_max_connections if 'citus' in pg_libs else 0 %}
{% set pg_max_locks_per_transaction = (2 * pg_max_connections)|int if 'citus' in pg_libs or 'timescaledb' in pg_libs else pg_max_connections %}
{% set pg_shared_buffers = (node_mem_mb|int * pg_shared_buffer_ratio|float) | round(0, 'ceil') | int %}
{% set pg_maintenance_mem = (pg_shared_buffers|int * 0.25)|round(0, 'ceil')|int %}
{% set pg_effective_cache_size = node_mem_mb|int - pg_shared_buffers|int  %}
{% set pg_workmem =  ([ ([ (pg_shared_buffers / pg_max_connections)|round(0,'floor')|int , 64 ])|max|int , 1024])|min|int %}
{% endraw %}
```


--------

## CPU参数调整

在 PostgreSQL 中，有 4 个与并行查询相关的重要参数，Pigsty 会自动根据当前系统的 CPU 核数进行参数优化。
模板先计算并行/扩展 worker 预算，然后在写入 `max_worker_processes` 时再额外增加 8 个保留槽。因此最终 GUC 比模板顶部的中间变量多 8。

| OLTP                               | 设置逻辑                           | 范围限制                    |
|------------------------------------|--------------------------------|-------------------------|
| `max_worker_processes`             | `max(CPU + 8, 16) + 8`         | 即 `max(CPU + 16, 24)`   |
| `max_parallel_workers`             | `max(ceil(50% CPU), 2)`        | 1/2 CPU 上取整，最少两个        |
| `max_parallel_maintenance_workers` | `max(ceil(33% CPU), 2)`        | 1/3 CPU 上取整，最少两个        |
| `max_parallel_workers_per_gather`  | `min(max(ceil(20% CPU), 2),8)` | 1/5 CPU 下取整，最少两个，最多 8 个 |
{.full-width}

| OLAP                               | 设置逻辑                     | 范围限制                  |
|------------------------------------|--------------------------|-----------------------|
| `max_worker_processes`             | `max(CPU + 12, 20) + 8`  | 即 `max(CPU + 20, 28)` |
| `max_parallel_workers`             | `max(ceil(80% CPU, 2))`  | 4/5 CPU 上取整，最少两个      |
| `max_parallel_maintenance_workers` | `max(ceil(33% CPU), 2)`  | 1/3 CPU 上取整，最少两个      |
| `max_parallel_workers_per_gather`  | `max(floor(50% CPU), 2)` | 1/2 CPU 上取整，最少两个      |
{.full-width}

| CRIT                               | 设置逻辑                    | 范围限制                  |
|------------------------------------|-------------------------|-----------------------|
| `max_worker_processes`             | `max(CPU + 8, 16) + 8`  | 即 `max(CPU + 16, 24)` |
| `max_parallel_workers`             | `max(ceil(50% CPU), 2)` | 1/2 CPU 上取整，最少两个      |
| `max_parallel_maintenance_workers` | `max(ceil(33% CPU), 2)` | 1/3 CPU 上取整，最少两个      |
| `max_parallel_workers_per_gather`  | `0`, 按需启用               |                       |
{.full-width}

| TINY                               | 设置逻辑                     | 范围限制                  |
|------------------------------------|--------------------------|-----------------------|
| `max_worker_processes`             | `max(CPU + 4, 12) + 8`   | 即 `max(CPU + 12, 20)` |
| `max_parallel_workers`             | `max(floor(50% CPU), 1)` | 50% CPU 下取整，最少 1 个    |
| `max_parallel_maintenance_workers` | `max(floor(33% CPU), 1)` | 33% CPU 下取整，最少 1 个    |
| `max_parallel_workers_per_gather`  | `0`，按需启用                 | 禁用单个查询的并行 gather      |
{.full-width}

请注意，CRIT 和 TINY 模板直接通过设置 `max_parallel_workers_per_gather = 0 ` 关闭了并行查询。
用户可以按需在需要时设置此参数以启用并行查询。

OLTP 和 CRIT 模板都额外设置了以下参数，将并行查询的 Cost x 2，以降低使用并行查询的倾向。

```yaml
parallel_setup_cost: 2000           # double from 100 to increase parallel cost
parallel_tuple_cost: 0.2            # double from 0.1 to increase parallel cost
min_parallel_table_scan_size: 32MB  # 4x default 8MB, prefer non-parallel scan
min_parallel_index_scan_size: 2MB   # 4x default 512kB, prefer non-parallel scan
```

请注意  `max_worker_processes` 参数的调整必须在重启后才能生效。此外，当从库的本参数配置值高于主库时，从库将无法启动。
此参数必须通过 patroni 配置管理进行调整，该参数由 Patroni 管理，用于确保主从配置一致，避免在故障切换时新从库无法启动。



--------

## 存储空间参数

Pigsty 默认检测 `/data/postgres` 主数据目录所在磁盘的总空间，并以此作为依据指定下列参数：

```jinja2
{% raw %}
{% set pg_size_twentieth = ([([(node_fs_bytes|int / 21474836480)|round(0, 'ceil')|int, 1])|max, 100])|min %}
min_wal_size: {{ ([pg_size_twentieth, 200])|min }}GB                  # 1/20 disk size, max 200GB
max_wal_size: {{ ([pg_size_twentieth * 4, 2000])|min }}GB             # 2/10 disk size, max 2000GB
max_slot_wal_keep_size: {{ ([pg_size_twentieth * 6, 3000])|min }}GB   # 3/10 disk size, max 3000GB
temp_file_limit: {{ ([pg_size_twentieth, 200])|min }}GB               # 1/20 of disk size, max 200GB
{% endraw %}
```

- `pg_size_twentieth` 先按磁盘容量的 1/20 向上取整，并限制在 1～100GB。
- 因此前三种标准模板中，`temp_file_limit` 与 `min_wal_size` 的**实际有效上限是 100GB**。
- `max_wal_size` 的实际有效上限是 400GB。
- `max_slot_wal_keep_size` 的实际有效上限是 600GB。

OLAP 模板将 `temp_file_limit` 设为 `pg_size_twentieth × 4`，实际有效上限是 400GB。模板行尾现有的 200GB/2TB/3TB 注释没有计入 `pg_size_twentieth` 自身的 100GB 上限，应以渲染表达式为准。


--------

## 手工调整参数

除了使用 Pigsty 自动配置的参数外，您还可以手工调整 PostgreSQL 参数。

使用 `pg edit-config <cluster>` 命令可以交互式编辑集群配置：

```bash
pg edit-config pg-meta
```

或者使用 `-p` 参数直接设置参数：

```bash
pg edit-config -p log_min_duration_statement=1000 pg-meta
pg edit-config --force -p shared_preload_libraries='timescaledb, pg_cron, pg_stat_statements, auto_explain' pg-meta
```

您也可以使用 Patroni REST API 来修改配置：

```bash
curl -u 'postgres:Patroni.API' \
    -d '{"postgresql":{"parameters": {"log_min_duration_statement":200}}}' \
    -s -X PATCH http://10.10.10.10:8008/config | jq .
```

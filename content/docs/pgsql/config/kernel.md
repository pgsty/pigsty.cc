---
title: 内核版本
weight: 20
description: 如何选择合适的 PostgreSQL 内核与大版本。
icon: fa-solid fa-microchip
module: [PGSQL]
categories: [参考]
---

> 在 Pigsty 中选择"内核"意味着确定 PostgreSQL 大版本、模式/发行版、需要安装的包以及要加载的调优模板。

Pigsty v4.5 当前源码支持 PostgreSQL 14 - 18，默认使用 18。下方内容展示如何通过配置文件完成这些选择。


----------------

## 大版本与软件包

- `pg_version`：指定 PostgreSQL 主版本（默认 18）。Pigsty 会根据版本自动映射到正确的包名前缀。
- `pg_packages`：定义需要安装的核心包集合，支持使用 [包别名](/docs/pgsql/config/alias)（默认 `pgsql-main pgsql-common`，包含内核 + patroni/pgbouncer/pgbackrest 等常用工具）。
- `pg_extensions`：额外需要安装的扩展包列表，同样支持别名；缺省为空表示只装核心依赖。

```yaml
all:
  vars:
    pg_version: 18
    pg_packages: [ pgsql-main, pgsql-common ]
    pg_extensions: [ postgis, timescaledb, pgvector, pgml ]
```

> 效果：Ansible 在安装阶段会拉取与 `pg_version=18` 对应的包，将扩展预装到系统中，随后数据库初始化脚本即可直接 `CREATE EXTENSION`。

Pigsty 的离线仓库中不同版本的扩展支持范围不同：14 可用扩展相对较少，17/18 覆盖最广。若某扩展未预打包，可通过 `repo_extra_packages` 追加。


----------------

## 内核模式（pg_mode）

`pg_mode` 控制要部署的内核“风味”，默认 `pgsql` 表示标准 PostgreSQL。Pigsty 目前支持以下模式：

| 模式       | 场景                                      |
|----------|-----------------------------------------|
| `pgsql`  | 标准 PostgreSQL，高可用 + 复制                  |
| `citus`  | Citus 分布式集群，需要额外的 `pg_shard / pg_group` |
| `gpsql`  | Cloudberry / Greenplum / MatrixDB       |
| `mssql`  | Babelfish                               |
| `mysql`  | OpenGauss/HaloDB 兼容 MySQL 协议            |
| `polar`  | 阿里 PolarDB（基于 pg `polar` 发行）            |
| `ivory`  | IvorySQL（Oracle 兼容语法）                   |
| `pgtde`  | Percona PostgreSQL + pg_tde，使用 `/usr/pgtde-$v` |
| `oriole` | OrioleDB 存储引擎                           |
| `agens`  | AgensGraph 图数据库内核                       |
| `pgedge` | pgEdge 分布式复制内核                          |
{.full-width}

`pg_mode` 决定二进制路径、Patroni 集成方式及部分内核特定逻辑；它本身不会自动替你补齐所有软件包、扩展与业务数据库。实际部署时应使用匹配的 `conf/*.yml` 配置模板，或显式配置 `pg_packages`、`pg_extensions`、`pg_libs` 与 `pg_databases`。以下是一个精简的 Citus 示例：

```yaml
all:
  children:
    pg-citus1:
      hosts: { 10.10.10.11: { pg_seq: 1, pg_role: primary } }
      vars: { pg_cluster: pg-citus1, pg_group: 0 }
    pg-citus2:
      hosts: { 10.10.10.12: { pg_seq: 1, pg_role: primary } }
      vars: { pg_cluster: pg-citus2, pg_group: 1 }
  vars:
    pg_mode: citus
    pg_shard: pg-citus
    pg_primary_db: citus
    pg_extensions: [ citus ]
    pg_libs: 'citus, pg_stat_statements'
    pg_databases:
      - { name: citus, extensions: [ citus ] }
```

> `conf/ha/citus.yml` 提供了当前完整样例；上面的精简配置显式安装 Citus 包，并在 `citus` 数据库中创建扩展。


----------------

## 扩展与预置对象

除了系统包，你还可以通过以下参数控制数据库启动后自动加载的组件：

- `pg_libs`：写入 `shared_preload_libraries` 的列表。例如 `pg_libs: 'timescaledb, pg_stat_statements, auto_explain'`。
- `pg_default_extensions` / `pg_default_schemas`：控制初始化脚本对 `template1` 与 `postgres` 预创建的 schema、扩展。
- `pg_parameters`：由 Pigsty 在配置阶段渲染进 `postgresql.auto.conf`；不要再手工执行 `ALTER SYSTEM` 管理同一批参数。

示例：启用 TimescaleDB、pgvector 并自定义一些系统参数。

```yaml
pg-analytics:
  vars:
    pg_cluster: pg-analytics
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain'
    pg_default_extensions:
      - { name: timescaledb }
      - { name: vector }
    pg_parameters:
      timescaledb.max_background_workers: 8
```

> 效果：初始化时 `template1` 与 `postgres` 会创建默认扩展；新建且使用 `template1` 的业务库会继承这些对象。`pg_parameters` 则直接写入 `postgresql.auto.conf`。


----------------

## 调优模板 (`pg_conf`)

`pg_conf` 指向 `roles/pgsql/templates/*.yml` 中的 Patroni 模板。Pigsty 内置四套通用模板：

| 模板         | 适用场景                   |
|------------|------------------------|
| `oltp.yml` | 默认模板，面向 4–128 核的 TP 负载 |
| `olap.yml` | 针对分析场景优化               |
| `crit.yml` | 强调同步提交/最小延迟，适合金融等零丢失场景 |
| `tiny.yml` | 轻量机 / 边缘场景 / 资源受限环境    |
{.full-width}

你可以直接替换模板或自定义一个 YAML 文件放在 `templates/` 下，然后在集群 `vars` 里指定。

```yaml
pg-ledger:
  hosts: { 10.10.10.21: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-ledger
    pg_conf: crit.yml
    pg_parameters:
      synchronous_commit: 'remote_apply'
      max_wal_senders: 16
      wal_keep_size: '2GB'
```

> 效果：拷贝 `crit.yml` 作为 Patroni 配置，叠加 `pg_parameters` 写入 `postgresql.auto.conf`，使实例立即以同步提交模式运行。


----------------

## 组合实例：一个完整示例

```yaml
pg-rag:
  hosts:
    10.10.10.31: { pg_seq: 1, pg_role: primary }
    10.10.10.32: { pg_seq: 2, pg_role: replica }
  vars:
    pg_cluster: pg-rag
    pg_version: 18
    pg_mode: pgsql
    pg_conf: olap.yml
    pg_packages: [ pgsql-main, pgsql-common ]
    pg_extensions: [ pgvector, pgml, postgis ]
    pg_libs: 'pg_stat_statements, auto_explain'
    pg_parameters:
      max_parallel_workers: 8
      shared_buffers: '32GB'
```

- 第一台主库 + 一台 replica，使用 `olap.yml` 调优。
- 安装 PG18 + RAG 常用扩展；只有需要预加载的库才应写入 `pg_libs`。
- Patroni/pgbouncer/pgbackrest 由 Pigsty 生成，无需手工干预。

根据业务需要替换上述参数即可完成内核层的全部定制。

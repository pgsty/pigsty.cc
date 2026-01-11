---
title: 内核版本
weight: 1202
description: 如何选择合适的 PostgreSQL 内核与大版本。
icon: fa-solid fa-microchip
module: [PGSQL]
categories: [参考]
---

> 在 Pigsty 中选择"内核"意味着确定 PostgreSQL 大版本、模式/发行版、需要安装的包以及要加载的调优模板。

Pigsty 从 PostgreSQL 10 起提供支持，当前版本默认打包了 13 - 18 的核心软件，并在 17/18 上提供完整扩展集合。下方内容展示如何通过配置文件完成这些选择。


----------------

## 大版本与软件包

- `pg_version`：指定 PostgreSQL 主版本（默认 18）。Pigsty 会根据版本自动映射到正确的包名前缀。
- `pg_packages`：定义需要安装的核心包集合，支持使用 [包别名](/docs/pgsql/config/alias)（默认 `pgsql-main pgsql-common`，包含内核 + patroni/pgbouncer/pgbackrest 等常用工具）。
- `pg_extensions`：额外需要安装的扩展包列表，同样支持别名；缺省为空表示只装核心依赖。

```yaml
all:
  vars:
    pg_version: 17
    pg_packages: [ pgsql-main pgsql-common ]
    pg_extensions: [ postgis, timescaledb, pgvector, pgml ]
```

> 效果：Ansible 在安装阶段会拉取与 `pg_version=17` 对应的包，将扩展预装到系统中，随后数据库初始化脚本即可直接 `CREATE EXTENSION`。

Pigsty 的离线仓库中不同版本的扩展支持范围不同：12/13 只提供核心与一级扩展，15/17/18 则涵盖全部扩展。若某扩展未预打包，可通过 `repo_packages_extra` 追加。


----------------

## 内核模式（pg_mode）

`pg_mode` 控制要部署的内核“风味”，默认 `pgsql` 表示标准 PostgreSQL。Pigsty 目前支持以下模式：

| 模式       | 场景                                      |
|----------|-----------------------------------------|
| `pgsql`  | 标准 PostgreSQL，高可用 + 复制                  |
| `citus`  | Citus 分布式集群，需要额外的 `pg_shard / pg_group` |
| `gpsql`  | Greenplum / MatrixDB                    |
| `mssql`  | Babelfish for PostgreSQL                |
| `mysql`  | OpenGauss/HaloDB 兼容 MySQL 协议            |
| `polar`  | 阿里 PolarDB（基于 pg `polar` 发行）            |
| `ivory`  | IvorySQL（Oracle 兼容语法）                   |
| `oriole` | OrioleDB 存储引擎                           |
| `oracle` | PostgreSQL + ora 兼容（`pg_mode: oracle`）  |
{.full-width}

选择模式后，Pigsty 会自动加载对应的模板、依赖包与 Patroni 配置。以部署 Citus 为例：

```yaml
all:
  children:
    pg-citus0:
      hosts: { 10.10.10.11: { pg_seq: 1, pg_role: primary } }
      vars: { pg_cluster: pg-citus0, pg_group: 0 }
    pg-citus1:
      hosts: { 10.10.10.12: { pg_seq: 1, pg_role: primary } }
      vars: { pg_cluster: pg-citus1, pg_group: 1 }
  vars:
    pg_mode: citus
    pg_shard: pg-citus
    patroni_citus_db: meta
```

> 效果：所有成员会安装 Citus 相关包，Patroni 以分片模式写入 etcd，并自动在 `meta` 数据库内 `CREATE EXTENSION citus`。


----------------

## 扩展与预置对象

除了系统包，你还可以通过以下参数控制数据库启动后自动加载的组件：

- `pg_libs`：写入 `shared_preload_libraries` 的列表。例如 `pg_libs: 'timescaledb, pg_stat_statements, auto_explain'`。
- `pg_default_extensions` / `pg_default_schemas`：控制初始化脚本对 `template1` 与 `postgres` 预创建的 schema、扩展。
- `pg_parameters`：为所有实例附加 `ALTER SYSTEM SET`（写入 `postgresql.auto.conf`）。

示例：启用 TimescaleDB、pgvector 并自定义一些系统参数。

```yaml
pg-analytics:
  vars:
    pg_cluster: pg-analytics
    pg_libs: 'timescaledb, pg_stat_statements, pgml'
    pg_default_extensions:
      - { name: timescaledb }
      - { name: pgvector }
    pg_parameters:
      timescaledb.max_background_workers: 8
      shared_preload_libraries: "'timescaledb,pg_stat_statements,pgml'"
```

> 效果：初始化时 `template1` 会创建扩展、Patroni 的 `postgresql.conf` 注入对应参数，所有业务库继承这些设置。


----------------

## 调优模板 (`pg_conf`)

`pg_conf` 指向 `roles/pgsql/templates/*.yml` 中的 Patroni 模板。Pigsty内置四套通用模板：

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
    pg_packages: [ pgsql-main pgsql-common ]
    pg_extensions: [ pgvector, pgml, postgis ]
    pg_libs: 'pg_stat_statements, pgvector, pgml'
    pg_parameters:
      max_parallel_workers: 8
      shared_buffers: '32GB'
```

- 第一台主库 + 一台 replica，使用 `olap.yml` 调优。
- 安装 PG18 + RAG 常用扩展，自动在系统级加载 `pgvector/pgml`。
- Patroni/pgbouncer/pgbackrest 由 Pigsty 生成，无需手工干预。

根据业务需要替换上述参数即可完成内核层的全部定制。

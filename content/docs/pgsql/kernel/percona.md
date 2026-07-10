---
title: Percona
weight: 2108
description: 支持 TDE 透明加密的 Percona Postgres 发行版
icon: fa-solid fa-lock
module: [PGSQL]
categories: [概念]
---

[Percona Postgres](https://www.percona.com/postgresql/software/postgresql-distribution) 是一个带有 [`pg_tde`](https://docs.percona.com/pg-tde/index.html)（透明数据加密）扩展的补丁 Postgres 内核。

Pigsty v4.4.0 的 `percona-main` 包集使用 Percona PostgreSQL 18，并额外安装 `pg_tde`、PostGIS、pgvector、wal2json、pg_repack、pgaudit、pg_stat_monitor 等常用组件。

- [Percona 透明数据加密（TDE）性能测试](https://andreas.scherbaum.la/post/2025-06-30_performance-test-for-percona-transparent-data-encryption-tde/)


------

## 快速开始

使用 Pigsty [**标准安装流程**](/docs/setup/install)，配合 [`pgtde`](https://github.com/pgsty/pigsty/blob/main/conf/pgtde.yml) 配置模板。

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty;
./configure -c pgtde     # 使用 percona postgres 内核
./deploy.yml             # 使用 pigsty 设置一切
```



------

## 配置

需要调整以下参数来部署 Percona 集群：

```yaml
pg-meta:
  hosts:
    10.10.10.10: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - { name: dbuser_meta ,password: DBUser.Meta   ,pgbouncer: true ,roles: [dbrole_admin   ] ,comment: pigsty admin user }
      - { name: dbuser_view ,password: DBUser.Viewer ,pgbouncer: true ,roles: [dbrole_readonly] ,comment: read-only viewer  }
    pg_databases:
      - name: meta
        baseline: cmdb.sql
        comment: pigsty tde database
        schemas: [pigsty]
        extensions: [ vector, postgis, pg_tde ,pgaudit, { name: pg_stat_monitor, schema: monitor } ]
    pg_hba_rules:
      - { user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes' }
    node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ] # 每天凌晨 1 点进行全量备份

    # Percona PostgreSQL TDE 临时设置
    pg_packages: [ percona-main, pgsql-common ]  # 安装 percona postgres 包
    pg_libs: 'pg_tde, pgaudit, pg_stat_statements, pg_stat_monitor, auto_explain'
```


------

## 可用扩展

Percona Postgres 内核共有 **73** 个可用扩展，去除 PG Contrib 自带扩展之后，还有以下额外扩展：

| 扩展名                                                                 | 版本号     | 说明                                                                                                                                                                                                                                                        |
|:--------------------------------------------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [address_standardizer](/ext/e/address_standardizer)                 | `3.5.6` | Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.                                                                                                                                       |
| [address_standardizer_data_us](/ext/e/address_standardizer_data_us) | `3.5.6` | Address Standardizer US dataset example                                                                                                                                                                                                                   |
| [pg_repack](/ext/e/pg_repack)                                       | `1.5.3` | Reorganize tables in PostgreSQL databases with minimal locks                                                                                                                                                                                              |
| [pg_stat_monitor](/ext/e/pg_stat_monitor)                           | `2.3`   | The pg_stat_monitor is a PostgreSQL Query Performance Monitoring tool, based on PostgreSQL contrib module pg_stat_statements. pg_stat_monitor provides aggregated statistics, client information, plan details including plan, and histogram information. |
| [pg_tde](/ext/e/pg_tde)                                             | `2.2`   | pg_tde access method                                                                                                                                                                                                                                      |
| [pgaudit](/ext/e/pgaudit)                                           | `18.0`  | provides auditing functionality                                                                                                                                                                                                                           |
| [postgis](/ext/e/postgis)                                           | `3.5.6` | PostGIS geometry and geography spatial types and functions                                                                                                                                                                                                |
| [postgis_raster](/ext/e/postgis_raster)                             | `3.5.6` | PostGIS raster types and functions                                                                                                                                                                                                                        |
| [postgis_sfcgal](/ext/e/postgis_sfcgal)                             | `3.5.6` | PostGIS SFCGAL functions                                                                                                                                                                                                                                  |
| [postgis_tiger_geocoder](/ext/e/postgis_tiger_geocoder)             | `3.5.6` | PostGIS tiger geocoder and reverse geocoder                                                                                                                                                                                                               |
| [postgis_topology](/ext/e/postgis_topology)                         | `3.5.6` | PostGIS topology spatial types and functions                                                                                                                                                                                                              |
| [set_user](/ext/e/set_user)                                         | `4.2.0` | similar to SET ROLE but with added logging                                                                                                                                                                                                                |
| [vector](/ext/e/vector)                                             | `0.8.2` | vector data type and ivfflat and hnsw access methods                                                                                                                                                                                                      |
{.full-width}

------

## 关键特性

- **透明数据加密**：使用 pg_tde 扩展提供静态数据加密
- **PostgreSQL 18 兼容**：基于 Percona PostgreSQL 18 包集
- **企业级扩展**：包含 pgaudit、pg_stat_monitor 等企业级功能
- **完整生态**：支持 pgvector、PostGIS 等流行扩展

> **注意**：目前处于稳定阶段 - 在生产使用前请彻底评估。

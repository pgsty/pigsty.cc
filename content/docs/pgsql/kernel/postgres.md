---
title: PostgreSQL
weight: 2101
description: 带有 444 扩展的原版 PostgreSQL 内核
icon: fa-solid fa-database
module: [PGSQL]
categories: [概念]
---

[PostgreSQL](https://www.postgresql.org/) 是世界上最先进和最受欢迎的开源数据库。

Pigsty 支持 PostgreSQL 13 ~ 18，并提供 444 个 PG 扩展。


------

## 快速开始

使用 [`pgsql`](https://github.com/pgsty/pigsty/blob/main/conf/pgsql.yml) 配置模板 [**安装**](/docs/setup/install) Pigsty。

```bash
./configure -c pgsql     # 使用 postgres 内核
./deploy.yml             # 使用 pigsty 设置一切
```

大多数 [配置模板](/docs/conf/) 默认使用 PostgreSQL 内核，例如：

- [`meta`](https://github.com/pgsty/pigsty/blob/main/conf/meta.yml) : **默认**，带有核心扩展（vector、postgis、timescale）的 postgres
- [`rich`](https://github.com/pgsty/pigsty/blob/main/conf/rich.yml) : 安装了所有扩展的 postgres
- [`slim`](https://github.com/pgsty/pigsty/blob/main/conf/slim.yml) : 仅 postgres，无监控基础设施
- [`full`](https://github.com/pgsty/pigsty/blob/main/conf/full.yml) : 用于 HA 演示的 4 节点沙盒
- [`pgsql`](https://github.com/pgsty/pigsty/blob/main/conf/pgsql.yml) : 最小的 postgres 内核配置示例


------

## 配置

原版 PostgreSQL 内核不需要特殊调整：

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
      - { name: meta, baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty] ,extensions: [ vector ]}
    pg_hba_rules:
      - { user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes' }
    node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ] # 每天凌晨 1 点进行全量备份
    pg_packages: [ pgsql-main, pgsql-common ]   # pg 内核和通用工具
    #pg_extensions: [ pg18-time ,pg18-gis ,pg18-rag ,pg18-fts ,pg18-olap ,pg18-feat ,pg18-lang ,pg18-type ,pg18-util ,pg18-func ,pg18-admin ,pg18-stat ,pg18-sec ,pg18-fdw ,pg18-sim ,pg18-etl]
```


------

## 版本选择

要使用不同的 PostgreSQL 主版本，您可以使用 `-v` 参数进行配置：

```bash
./configure -c pgsql            # 默认就是 postgresql 18，无需显式指定
./configure -c pgsql -v 17      # 使用 postgresql 17
./configure -c pgsql -v 16      # 使用 postgresql 16
./configure -c pgsql -v 15      # 使用 postgresql 15
./configure -c pgsql -v 14      # 使用 postgresql 14
./configure -c pgsql -v 13      # 使用 postgresql 13
```

如果 PostgreSQL 集群已经安装，您需要在安装新版本之前卸载它：

```bash
./pgsql-rm.yml # -l pg-meta
```


------

## 扩展生态

Pigsty 为 PostgreSQL 提供了丰富的扩展生态，包括：

- **时序类**：timescaledb, pg_cron, periods
- **地理类**：postgis, h3, pgrouting
- **向量类**：pgvector, pgml, vchord
- **搜索类**：pg_trgm, zhparser, pgroonga
- **分析类**：citus, pg_duckdb, pg_analytics
- **特性类**：age, pg_graphql, rum
- **语言类**：plpython3u, pljava, plv8
- **类型类**：hstore, ltree, citext
- **工具类**：http, pg_net, pgjwt
- **函数类**：pgcrypto, uuid-ossp, pg_uuidv7
- **管理类**：pg_repack, pgagent, pg_squeeze
- **统计类**：pg_stat_statements, pg_qualstats, auto_explain
- **安全类**：pgaudit, pgcrypto, pgsodium
- **外部类**：postgres_fdw, mysql_fdw, oracle_fdw
- **兼容类**：orafce, babelfishpg_tds
- **数据类**：pglogical, wal2json, decoderbufs

详情请参考 [扩展目录](https://pgext.cloud/zh/list)。


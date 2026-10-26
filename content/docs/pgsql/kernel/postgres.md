---
title: PostgreSQL
weight: 2101
description: 带有 600 个扩展的原版 PostgreSQL 内核
icon: fa-solid fa-database
module: [PGSQL]
categories: [概念]
---

[PostgreSQL](https://www.postgresql.org/) 是世界上最先进和最受欢迎的开源数据库。

默认安装 PostgreSQL 18，支持 PostgreSQL 14 ~ 18，并提供 {{< param pgext_count >}} 个 PG 扩展。


------

## 快速开始

使用 [`pgsql`](/docs/conf/pgsql/) 配置模板 [**安装**](/docs/setup/install) Pigsty。

以下命令使用 [v4.5.0 模板](https://github.com/pgsty/pigsty/blob/v4.5.0/conf/pgsql.yml)；开发版已迁移至 `conf/fork/pgsql.yml`，对应使用 `-c fork/pgsql`。

```bash
./configure -c pgsql     # 使用 postgres 内核
./deploy.yml             # 部署 Pigsty 核心链路与原生 PostgreSQL
```

大多数 [配置模板](/docs/conf/) 默认使用 PostgreSQL 内核，例如：

- [`meta`](https://github.com/pgsty/pigsty/blob/main/conf/meta.yml) : **默认**，带有核心扩展（vector、postgis、timescale）的 postgres
- [`rich`](https://github.com/pgsty/pigsty/blob/main/conf/rich.yml)：安装了所有扩展的 postgres
- [`slim`](https://github.com/pgsty/pigsty/blob/main/conf/slim.yml)：仅 postgres，无监控基础设施
- [`ha/full`](https://github.com/pgsty/pigsty/blob/main/conf/ha/full.yml)：用于 HA 演示的 4 节点沙盒
- [`pgsql`](/docs/conf/pgsql/)：最小的 postgres 内核配置示例


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
    pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ] # 每天凌晨 1 点进行全量备份
    pg_packages: [ pgsql-main, pgsql-common ]   # pg 内核和通用工具
    #pg_extensions: [ pg18-time ,pg18-gis ,pg18-rag ,pg18-fts ,pg18-olap ,pg18-feat ,pg18-lang ,pg18-type ,pg18-util ,pg18-func ,pg18-admin ,pg18-stat ,pg18-sec ,pg18-fdw ,pg18-sim ,pg18-etl]
```


------

## 版本选择

要使用不同的 PostgreSQL 主版本，您可以使用 `-v` 参数进行配置：

```bash
./configure -c pgsql            # 默认就是 postgresql 18，无需显式指定
./configure -c pgsql -v 18      # 显式指定 postgresql 18
./configure -c pgsql -v 17      # 使用 postgresql 17
./configure -c pgsql -v 16      # 使用 postgresql 16
./configure -c pgsql -v 15      # 使用 postgresql 15
./configure -c pgsql -v 14      # 使用 postgresql 14
```

`-v` 用于生成新部署的配置，不会升级已有数据目录。已有集群需要切换主版本时，请按 [**PostgreSQL 大版本升级**](/docs/pgsql/admin/upgrade/) 流程规划兼容性检查、备份与迁移。


------

## 扩展生态

Pigsty 为 PostgreSQL 提供了丰富的扩展生态，详情请参考 [扩展目录](/ext/list/)。

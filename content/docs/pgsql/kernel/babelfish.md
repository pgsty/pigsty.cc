---
title: Babelfish
weight: 2104
description: 在 Pigsty 中使用 Babelfish（PG17）提供 SQL Server 协议/T-SQL 兼容能力
icon: fab fa-microsoft
module: [PGSQL]
categories: [概念]
---

[Babelfish](https://babelfishpg.org/) 是一个提供 MS SQL Server 线缆协议兼容性的内核分支 + 扩展，由 AWS 开源。

--------

## 概览

Pigsty 允许您使用 `mssql` 模式部署 Babelfish 内核，在 PostgreSQL 上提供：

- SQL Server 线缆协议兼容（TDS 协议，`1433` 端口）
- T-SQL 语法兼容
- 与 Pigsty 现有能力（高可用、备份、监控、IaC）统一集成

在 **v4.2.0** 中，Babelfish 默认基于 **PostgreSQL 17**，并已经纳入 Pigsty 标准交付链路。支持所有 Linux 平台


--------

## 快速开始

使用 Pigsty 内置模板：

```bash
./configure -c mssql
./deploy.yml
```

部署完成后可直接使用 SQL Server 客户端连接：

```bash
sqlcmd -S <ip>,1433 -U dbuser_mssql -P DBUser.MSSQL -d mssql
```


--------

## 关键配置

`mssql` 模板中的核心参数如下：

```yaml
pg_mode: mssql
pg_version: 17
pg_packages: [ babelfish, pgsql-common, sqlcmd ]
pg_libs: 'babelfishpg_tds, pg_stat_statements, auto_explain'

pg_databases:
  - name: mssql
    baseline: mssql.sql
    extensions:
      - { name: uuid-ossp }
      - { name: babelfishpg_common }
      - { name: babelfishpg_tsql }
      - { name: babelfishpg_tds }
      - { name: babelfishpg_money }
      - { name: pg_hint_plan }
      - { name: system_stats }
      - { name: tds_fdw }
    parameters: { 'babelfishpg_tsql.migration_mode': 'multi-db' }

pg_hba_rules:
  - { user: dbuser_mssql, db: mssql, addr: intra, auth: md5, order: 525 }

pg_default_services:
  - { name: primary, port: 5433, dest: 1433 }
  - { name: replica, port: 5434, dest: 1433 }
```


--------

## 连接与端口

Babelfish 集群会同时提供两类访问：

- PostgreSQL 协议：`5432`
- SQL Server 协议（TDS）：`1433`

通过 Pigsty 服务抽象，还可使用：

- `5433` 固定路由到主库 `1433`
- `5434` 路由到可读节点 `1433`

```bash
# 主库写入
sqlcmd -S <任意节点IP>,5433 -U dbuser_mssql -P DBUser.MSSQL

# 读库查询
sqlcmd -S <任意节点IP>,5434 -U dbuser_mssql -P DBUser.MSSQL
```


--------

## 注意事项

- Babelfish 认证规则需使用 `md5`，而不是默认 `scram-sha-256`。
- 默认迁移模式为 `multi-db`，如需 `single-db` 可修改 `babelfishpg_tsql.migration_mode`。
- 并非所有原生 PostgreSQL 扩展都可直接在 Babelfish 内核使用；请以包可用性与兼容性测试为准。
- 生产环境请收紧 HBA 与网络暴露策略，不要沿用演示级开放配置。


--------

## 相关文档

- [`mssql` 配置模板](/docs/conf/mssql/)
- [PGSQL 内核模式说明](/docs/pgsql/config/kernel/)
- [SQL Server 官方 `sqlcmd` 文档](https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-utility)

---
title: Babelfish
weight: 2104
description: 在 Pigsty 中使用 Babelfish（PG17/18）提供 SQL Server 协议与 T-SQL 兼容能力
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

Pigsty 提供 **PostgreSQL 17/18** 兼容的 Babelfish 软件包，默认模板选择 `pg_version: 17`。版本与平台可用性见 [**软件包清单**](/docs/repo/pgsql/)。

`./configure -c mssql` 会忽略 `-v`；选择 PG18 时，应显式调整生成的配置并核对软件包。开发版 `fork/mssql` 的 `-v` 会覆盖版本，详细说明见 [**MSSQL 配置模板**](/docs/conf/mssql/)。


--------

## 快速开始

使用 Pigsty 内置模板：

以下命令使用 [v4.5.0 模板](https://github.com/pgsty/pigsty/blob/v4.5.0/conf/mssql.yml)；开发版已迁移至 `conf/fork/mssql.yml`，对应使用 `-c fork/mssql`。

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


--------

## 可用扩展

以下列出部分非 Contrib 扩展供参考；实际可用性与版本请在目标实例上 [**查询确认**](/docs/pgsql/kernel/#版本)。

| 扩展名                                             | 版本号     | 说明                            |
|:------------------------------------------------|:--------|:------------------------------|
| [babelfishpg_common](/ext/e/babelfishpg_common) | `5.4.0` | Transact SQL Datatype Support |
| [babelfishpg_money](/ext/e/babelfishpg_money)   | `1.1.0` | babelfishpg_money             |
| [babelfishpg_tds](/ext/e/babelfishpg_tds)       | `1.0.0` | TDS protocol extension        |
| [babelfishpg_tsql](/ext/e/babelfishpg_tsql)     | `5.4.0` | Transact SQL compatibility    |
{.full-width}

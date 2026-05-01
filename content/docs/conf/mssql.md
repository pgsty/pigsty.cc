---
title: mssql
weight: 420
description: Babelfish（PG17）内核模板，提供 Microsoft SQL Server 协议与 T-SQL 兼容能力
icon: fa-brands fa-windows
categories: [参考]
---

`mssql` 配置模板使用 **Babelfish（PG17）** 内核替代原生 PostgreSQL，提供 Microsoft SQL Server 线缆协议（TDS）与 T-SQL 语法兼容能力。

从 Pigsty v4.2 以来，Babelfish 由 Pigsty 直接构建，不再使用 WiltonDB 仓库，可在所有 [支持的 Linux 平台](/docs/ref/linux) 上使用。

完整教程请参考：**[Babelfish (MSSQL) 内核使用说明](/docs/pgsql/kernel/babelfish/)**


--------

## 配置概览

- 配置名称： `mssql`
- 节点数量： 单节点
- 配置说明：Babelfish（PG17）配置模板，提供 SQL Server 协议兼容
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c mssql [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/mssql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/mssql.yml)

{{< readfile file="yaml/mssql.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`mssql` 模板让您可以使用 SQL Server Management Studio (SSMS) 或其他 SQL Server 客户端工具连接 PostgreSQL（Babelfish 协议层）。

**关键特性**：
- 使用 TDS 协议（端口 1433），兼容 SQL Server 客户端
- 支持 T-SQL 语法，迁移成本低
- 保留 PostgreSQL 的 ACID 特性和扩展生态（底层为 PG17）
- 支持 `multi-db` 和 `single-db` 两种迁移模式
- 默认包组为 `babelfish + pgsql-common + sqlcmd`
- 默认创建扩展：`uuid-ossp`、`babelfishpg_common`、`babelfishpg_tsql`、`babelfishpg_tds`、`babelfishpg_money`、`pg_hint_plan`、`system_stats`、`tds_fdw`
- v4.2.0 起支持主流平台全覆盖（EL8/9/10、Debian 12/13、Ubuntu 22/24/26；`x86_64` / `aarch64`）

**连接方式**：

```bash
# 使用 sqlcmd 命令行工具
sqlcmd -S 10.10.10.10,1433 -U dbuser_mssql -P DBUser.MSSQL -d mssql

# 使用 SSMS 或 Azure Data Studio
# Server: 10.10.10.10,1433
# Authentication: SQL Server Authentication
# Login: dbuser_mssql
# Password: DBUser.MSSQL
```

**适用场景**：
- 从 SQL Server 迁移到 PostgreSQL
- 需要同时支持 SQL Server 和 PostgreSQL 客户端的应用
- 希望利用 PostgreSQL 生态同时保持 T-SQL 兼容性

**注意事项**：
- Babelfish 内核基于 PostgreSQL 17，不支持 PG18+ 专有特性
- 默认迁移模式为 `multi-db`（`babelfishpg_tsql.migration_mode`），可按需改为 `single-db`
- 部分 T-SQL 语法可能存在兼容性差异，请参考 Babelfish 兼容性文档
- 需要使用 `md5` 认证方式（而非 `scram-sha-256`）

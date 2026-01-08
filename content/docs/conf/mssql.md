---
title: mssql
weight: 800
description: WiltonDB / Babelfish 内核，提供 Microsoft SQL Server 协议与语法兼容能力
icon: fa-brands fa-windows
categories: [参考]
---

`mssql` 配置模板使用 WiltonDB / Babelfish 数据库内核替代原生 PostgreSQL，提供 Microsoft SQL Server 线缆协议（TDS）与 T-SQL 语法兼容能力。

完整教程请参考：**[Babelfish (MSSQL) 内核使用说明](/docs/pgsql/kernel/babelfish/)**


--------

## 配置概览

- 配置名称： `mssql`
- 节点数量： 单节点
- 配置说明：WiltonDB / Babelfish 配置模板，提供 SQL Server 协议兼容
- 适用系统：`el8`, `el9`, `el10`, `u22`, `u24` (Debian 不可用)
- 适用架构：`x86_64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c mssql [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/mssql.yml`](https://github.com/Vonng/pigsty/blob/main/conf/mssql.yml)

{{< readfile file="yaml/mssql.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`mssql` 模板让您可以使用 SQL Server Management Studio (SSMS) 或其他 SQL Server 客户端工具连接 PostgreSQL。

**关键特性**：
- 使用 TDS 协议（端口 1433），兼容 SQL Server 客户端
- 支持 T-SQL 语法，迁移成本低
- 保留 PostgreSQL 的 ACID 特性和扩展生态
- 支持 `multi-db` 和 `single-db` 两种迁移模式

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
- WiltonDB 基于 PostgreSQL 15，不支持更高版本特性
- 部分 T-SQL 语法可能存在兼容性差异，请参考 Babelfish 兼容性文档
- 需要使用 `md5` 认证方式（而非 `scram-sha-256`）


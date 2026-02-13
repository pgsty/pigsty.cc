---
title: mysql
weight: 815
description: OpenHalo 内核，提供 MySQL 协议与语法兼容能力
icon: fa-solid fa-database
categories: [参考]
---

`mysql` 配置模板使用 OpenHalo 数据库内核替代原生 PostgreSQL，提供 MySQL 线缆协议与 SQL 语法兼容能力。


--------

## 配置概览

- 配置名称： `mysql`
- 节点数量： 单节点
- 配置说明：OpenHalo MySQL 兼容内核配置
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c mysql [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/mysql.yml)

{{< readfile file="yaml/mysql.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`mysql` 模板使用 OpenHalo 内核，让您可以使用 MySQL 客户端工具连接 PostgreSQL。

**关键特性**：
- 使用 MySQL 协议（端口 3306），兼容 MySQL 客户端
- 支持 MySQL SQL 语法子集
- 保留 PostgreSQL 的 ACID 特性和存储引擎
- 同时支持 PostgreSQL 和 MySQL 两种协议连接

**连接方式**：

```bash
# 使用 MySQL 客户端
mysql -h 10.10.10.10 -P 3306 -u dbuser_meta -pDBUser.Meta

# 同时保留 PostgreSQL 连接能力
psql postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
```

**适用场景**：
- 从 MySQL 迁移到 PostgreSQL
- 需要同时支持 MySQL 和 PostgreSQL 客户端的应用
- 希望利用 PostgreSQL 生态同时保持 MySQL 兼容性

**注意事项**：
- OpenHalo 基于 PostgreSQL 14，不支持更高版本特性
- 部分 MySQL 语法可能存在兼容性差异
- 仅支持 EL8/EL9 系统
- 不支持 ARM64 架构


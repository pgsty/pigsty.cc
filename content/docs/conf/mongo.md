---
title: mongo
weight: 940
description: DocumentDB + FerretDB（Mongo Wire 协议兼容）配置模板，基于 PostgreSQL 提供 Mongo 风格服务。
icon: fa-solid fa-database
categories: [参考]
---

`mongo` 配置模板用于部署 FerretDB 与 DocumentDB 兼容栈，在 PostgreSQL 之上提供 Mongo Wire 协议兼容能力。


--------

## 配置概览

- 配置名称： `mongo`
- 节点数量： 单节点（默认）
- 配置说明：基于 PostgreSQL 18 + FerretDB + DocumentDB 的 Mongo 兼容模板。
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)、[`pgsql`](/docs/conf/pgsql/)

启用方式：

```bash
./configure -c mongo
./deploy.yml
./mongo.yml -l ferret
```


--------

## 配置内容

源文件地址：[`pigsty/conf/mongo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/mongo.yml)

{{< readfile file="yaml/mongo.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`mongo` 模板包含两个核心分组：

- `pg-meta`：PostgreSQL 主库，承载 `documentdb`、`pg_cron`、`rum` 等扩展。
- `ferret`：Mongo 协议兼容服务层，使用 `mongo_pgurl` 连接 PostgreSQL。

关键特征：

- 默认使用 PostgreSQL 18（可改为 16/17/18）。
- 在 `postgres` 数据库直接启用 `documentdb` 相关能力，便于快速验证。
- 默认 HBA 规则包含本地 trust 与内网密码访问，便于开发测试。
- `version` 已对齐 `v4.1.0`，并与主仓库配置保持一致。

注意事项：

- 模板中包含面向开发环境的宽松访问规则（如 world 访问示例），生产环境请按需收紧。
- 若需多节点与高可用，应在此模板基础上扩展拓扑与安全策略。

---
title: pgsql
weight: 790
description: 原生 PostgreSQL 内核，支持 PostgreSQL 13 到 18 的多版本部署
icon: fa-brands fa-linux
categories: [参考]
---

`pgsql` 配置模板使用原生 PostgreSQL 内核，是 Pigsty 的默认数据库内核，支持 PostgreSQL 13 到 18 版本。


--------

## 配置概览

- 配置名称： `pgsql`
- 节点数量： 单节点
- 配置说明：原生 PostgreSQL 内核配置模板
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c pgsql [-i <primary_ip>]
```

如需指定特定 PostgreSQL 版本（如 17）：

```bash
./configure -c pgsql -v 17
```


--------

## 配置内容

源文件地址：[`pigsty/conf/pgsql.yml`](https://github.com/Vonng/pigsty/blob/main/conf/pgsql.yml)

{{< readfile file="yaml/pgsql.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`pgsql` 模板是 Pigsty 的 **标准内核配置**，使用社区原生 PostgreSQL。

**版本支持**：
- PostgreSQL 18（默认）
- PostgreSQL 17、16、15、14、13

**适用场景**：
- 需要使用最新 PostgreSQL 特性
- 需要最广泛的扩展支持
- 标准生产环境部署
- 与 `meta` 模板功能相同，显式声明使用原生内核

**与 meta 的区别**：
- `pgsql` 模板显式声明使用原生 PostgreSQL 内核
- 适合需要明确区分不同内核类型的场景


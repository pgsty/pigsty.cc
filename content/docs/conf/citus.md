---
title: citus
weight: 795
description: Citus 分布式 PostgreSQL 集群，提供水平扩展与分片能力
icon: fa-solid fa-cubes
categories: [参考]
---

`citus` 配置模板使用 Citus 扩展部署分布式 PostgreSQL 集群，提供透明的水平扩展与数据分片能力。


--------

## 配置概览

- 配置名称： `citus`
- 节点数量： 五节点（1 协调节点 + 4 数据节点）
- 配置说明：Citus 分布式 PostgreSQL 集群
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c citus [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/citus.yml`](https://github.com/Vonng/pigsty/blob/main/conf/citus.yml)

{{< readfile file="yaml/citus.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`citus` 模板部署 Citus 分布式 PostgreSQL 集群，适合需要水平扩展的大规模数据场景。

**关键特性**：
- 透明数据分片，自动分布数据到多个节点
- 并行查询执行，聚合多节点结果
- 支持分布式事务（2PC）
- 保持 PostgreSQL SQL 兼容性

**架构说明**：
- **协调节点** (pg-citus0)：接收查询，路由到数据节点
- **数据节点** (pg-citus1~3)：存储分片数据

**适用场景**：
- 单表数据量超过单机容量
- 需要水平扩展写入和查询性能
- 多租户 SaaS 应用
- 实时分析型工作负载

**注意事项**：
- Citus 支持 PostgreSQL 14~17
- 分布式表需要指定分布列
- 部分 PostgreSQL 特性可能受限（如外键跨分片）
- 不支持 ARM64 架构


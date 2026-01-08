---
title: polar
weight: 805
description: PolarDB for PostgreSQL 内核，提供 Aurora 风格的存算分离能力
icon: fa-solid fa-snowflake
categories: [参考]
---

`polar` 配置模板使用阿里云 PolarDB for PostgreSQL 数据库内核替代原生 PostgreSQL，提供"云原生" Aurora 风格的存算分离能力。

完整教程请参考：**[PolarDB for PostgreSQL (POLAR) 内核使用说明](/docs/pgsql/kernel/polardb/)**


--------

## 配置概览

- 配置名称： `polar`
- 节点数量： 单节点
- 配置说明：使用 PolarDB for PostgreSQL 内核
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c polar [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/polar.yml`](https://github.com/Vonng/pigsty/blob/main/conf/polar.yml)

{{< readfile file="yaml/polar.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`polar` 模板使用阿里云开源的 PolarDB for PostgreSQL 内核，提供云原生数据库能力。

**关键特性**：
- 存算分离架构，计算节点和存储节点可独立扩展
- 支持一写多读，读副本秒级扩展
- 兼容 PostgreSQL 生态，保持 SQL 兼容性
- 支持共享存储场景，适合云环境部署

**适用场景**：
- 需要存算分离架构的云原生场景
- 读多写少的业务负载
- 需要快速扩展读副本的场景
- 评估 PolarDB 特性的测试环境

**注意事项**：
- PolarDB 基于 PostgreSQL 15，不支持更高版本特性
- 复制用户需要超级用户权限（与原生 PostgreSQL 不同）
- 部分 PostgreSQL 扩展可能存在兼容性问题
- 不支持 ARM64 架构


---
title: ivory
weight: 810
description: IvorySQL 内核，提供 Oracle 语法与 PL/SQL 兼容能力
icon: fa-solid fa-gem
categories: [参考]
---

`ivory` 配置模板使用瀚高的 IvorySQL 数据库内核替代原生 PostgreSQL，提供 Oracle 语法与 PL/SQL 兼容能力。

完整教程请参考：**[IvorySQL (Oracle兼容) 内核使用说明](/docs/pgsql/kernel/ivorysql/)**


--------

## 配置概览

- 配置名称： `ivory`
- 节点数量： 单节点
- 配置说明：使用 IvorySQL Oracle 兼容内核
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c ivory [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/ivory.yml`](https://github.com/Vonng/pigsty/blob/main/conf/ivory.yml)

{{< readfile file="yaml/ivory.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`ivory` 模板使用瀚高开源的 IvorySQL 内核，提供 Oracle 数据库兼容能力。

**关键特性**：
- 支持 Oracle PL/SQL 语法
- 兼容 Oracle 数据类型（NUMBER、VARCHAR2 等）
- 支持 Oracle 风格的包（Package）
- 保留 PostgreSQL 的所有标准功能

**适用场景**：
- 从 Oracle 迁移到 PostgreSQL
- 需要同时支持 Oracle 和 PostgreSQL 语法的应用
- 希望利用 PostgreSQL 生态同时保持 PL/SQL 兼容性
- 评估 IvorySQL 特性的测试环境

**注意事项**：
- IvorySQL 5 基于 PostgreSQL 18
- 使用 `liboracle_parser` 需要加载到 `shared_preload_libraries`
- `pgbackrest` 在 Oracle 兼容模式下可能存在校验问题，PITR 能力受限
- 主要支持 EL8/EL9 系统，其他系统支持程度请参考官方文档


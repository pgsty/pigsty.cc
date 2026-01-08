---
title: oriole
weight: 825
description: OrioleDB 内核，提供无膨胀的 OLTP 增强存储引擎
icon: fa-solid fa-feather
categories: [参考]
---

`oriole` 配置模板使用 OrioleDB 存储引擎替代 PostgreSQL 默认的 Heap 存储，提供无膨胀、高性能的 OLTP 能力。


--------

## 配置概览

- 配置名称： `oriole`
- 节点数量： 单节点
- 配置说明：OrioleDB 无膨胀存储引擎配置
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c oriole [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/oriole.yml`](https://github.com/Vonng/pigsty/blob/main/conf/oriole.yml)

{{< readfile file="yaml/oriole.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`oriole` 模板使用 OrioleDB 存储引擎，从根本上解决 PostgreSQL 表膨胀问题。

**关键特性**：
- **无膨胀设计**：使用 UNDO 日志而非多版本并发控制 (MVCC)
- **无需 VACUUM**：消除 autovacuum 带来的性能抖动
- **行级 WAL**：更高效的日志记录和复制
- **压缩存储**：内置数据压缩，减少存储空间

**适用场景**：
- 高频更新的 OLTP 工作负载
- 对写入延迟敏感的应用
- 需要稳定响应时间（消除 VACUUM 影响）
- 大表频繁更新导致膨胀的场景

**使用方法**：

```sql
-- 创建使用 OrioleDB 存储的表
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT,
    amount DECIMAL(10,2)
) USING orioledb;

-- 对现有表无法直接转换，需要重建
```

**注意事项**：
- OrioleDB 基于 PostgreSQL 17
- 需要将 `orioledb` 添加到 `shared_preload_libraries`
- 部分 PostgreSQL 特性可能不完全支持
- 不支持 ARM64 架构


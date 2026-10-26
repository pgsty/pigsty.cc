---
title: fork/oriole
weight: 490
description: OrioleDB 内核，提供基于 UNDO 的 OLTP 存储引擎
icon: fa-solid fa-feather
categories: [参考]
---

开发版配置路径为 `conf/fork/oriole.yml`；v4.5.0 使用 `conf/oriole.yml`，配置命令相应为 `-c oriole`。

`fork/oriole` 配置模板使用 OrioleDB 存储引擎替代 PostgreSQL 默认的 Heap 存储，使用 UNDO 日志保存旧版本，减少主存储中的膨胀。


--------

## 配置概览

- 配置名称： `fork/oriole`
- 节点数量： 单节点
- 配置说明：OrioleDB 存储引擎配置
- PostgreSQL 大版本：`16`、`17`、`18`
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c fork/oriole [-i <primary_ip>]
```


--------

## 配置内容

开发版源文件：`conf/fork/oriole.yml`；发布版：[`v4.5.0：conf/oriole.yml`](https://github.com/pgsty/pigsty/blob/v4.5.0/conf/oriole.yml)。

{{< include file="yaml/oriole.yml" code=true lang="yaml" >}}


--------

## 配置解读

`fork/oriole` 模板启用 OrioleDB 存储引擎，原理见 [**内核说明**](/docs/pgsql/kernel/orioledb/)。

**关键特性**：
- **版本管理**：使用 UNDO 日志保存 MVCC 旧版本，减少主存储中的膨胀
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
- OrioleDB 支持 PostgreSQL 16、17、18，默认模板使用 PG18，可通过 `./configure -c fork/oriole -v 16/17/18` 指定大版本
- 需要将 `orioledb` 添加到 `shared_preload_libraries`
- 部分 PostgreSQL 特性可能不完全支持
- 请为所选 PostgreSQL 大版本与 OS 架构安装匹配的 OrioleDB 包

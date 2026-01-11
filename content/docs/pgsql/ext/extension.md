---
title: 默认扩展
weight: 2210
description: Pigsty 默认安装的 PostgreSQL 扩展
icon: fa-brands fa-usb
module: [PGSQL]
categories: [参考]
---

Pigsty 在初始化 PostgreSQL 集群时，会默认安装和启用一些核心扩展。


--------

## 默认安装的扩展

通过 [`pg_packages`](/docs/pgsql/param#pg_packages) 默认安装的扩展：

| 扩展 | 说明 |
|:-----|:-----|
| `pg_repack` | 在线处理表膨胀，重要的维护工具 |
| `wal2json` | 逻辑解码输出 JSON 格式变更，CDC 场景常用 |
{.full-width}

通过 [`pg_extensions`](/docs/pgsql/param#pg_extensions) 可选安装的扩展（默认注释）：

| 扩展 | 说明 |
|:-----|:-----|
| `postgis` | 地理空间数据库扩展 |
| `timescaledb` | 时序数据库扩展 |
| `pgvector` | 向量数据类型与索引 |
{.full-width}


--------

## 默认启用的扩展

通过 [`pg_default_extensions`](/docs/pgsql/param#pg_default_extensions) 在所有数据库中默认启用的扩展：

| 扩展 | Schema | 说明 |
|:-----|:-------|:-----|
| `pg_stat_statements` | monitor | SQL 语句执行统计 |
| `pgstattuple` | monitor | 元组级统计信息 |
| `pg_buffercache` | monitor | 缓冲区缓存检查 |
| `pageinspect` | monitor | 页面级检查 |
| `pg_prewarm` | monitor | 关系预热 |
| `pg_visibility` | monitor | 可见性映射检查 |
| `pg_freespacemap` | monitor | 空闲空间映射检查 |
| `postgres_fdw` | public | PostgreSQL 外部数据包装器 |
| `file_fdw` | public | 文件外部数据包装器 |
| `btree_gist` | public | B-tree GiST 操作符类 |
| `btree_gin` | public | B-tree GIN 操作符类 |
| `pg_trgm` | public | 三元组匹配 |
| `intagg` | public | 整数聚合器 |
| `intarray` | public | 整数数组函数 |
| `pg_repack` | - | 在线重组表 |
{.full-width}

这些扩展提供基础的监控、运维和功能增强能力。


--------

## 默认预加载的扩展

通过 [`pg_libs`](/docs/pgsql/param#pg_libs) 默认预加载到 `shared_preload_libraries` 的扩展：

| 扩展 | 说明 |
|:-----|:-----|
| `pg_stat_statements` | 跟踪所有 SQL 语句的执行统计 |
| `auto_explain` | 自动记录慢查询的执行计划 |
{.full-width}

这两个扩展提供基本的可观测性，强烈建议保留。


--------

## 自定义默认扩展

可以通过修改配置参数来自定义默认安装和启用的扩展：

```yaml
all:
  vars:
    # 修改默认安装的扩展包
    pg_packages:
      - pgsql-main pgsql-common
      - pg_repack_$v* wal2json_$v*

    # 修改默认安装的扩展
    pg_extensions: [ postgis, timescaledb, pgvector ]

    # 修改默认预加载的扩展
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain'

    # 修改默认启用的扩展
    pg_default_extensions:
      - { name: pg_stat_statements, schema: monitor }
      - { name: pg_repack }
      # ... 添加更多
```

详细的扩展使用方法请参阅：

- [快速开始](start)：使用扩展的流程速览
- [扩展简介](intro)：扩展的核心概念
- [安装扩展](install)：如何安装扩展
- [配置扩展](config)：预加载与参数配置
- [启用扩展](create)：在数据库中创建扩展


---
title: 启用扩展
weight: 2207
description: 在数据库中创建和启用扩展
icon: fas fa-plus-circle
module: [PGSQL]
categories: [参考]
---

安装扩展软件包后，需要在数据库中执行 `CREATE EXTENSION` 才能使用扩展功能。


--------

## 查看可用扩展

安装扩展软件包后，可以查看可用的扩展：

```sql
-- 查看所有可用扩展
SELECT * FROM pg_available_extensions;

-- 查看特定扩展
SELECT * FROM pg_available_extensions WHERE name = 'vector';

-- 查看已启用的扩展
SELECT * FROM pg_extension;
```


--------

## 创建扩展

使用 `CREATE EXTENSION` 在数据库中启用扩展：

```sql
-- 创建扩展
CREATE EXTENSION vector;

-- 创建扩展到指定 Schema
CREATE EXTENSION postgis SCHEMA public;

-- 自动安装依赖的扩展
CREATE EXTENSION postgis_topology CASCADE;

-- 如果不存在则创建
CREATE EXTENSION IF NOT EXISTS vector;
```

> 注意：`CREATE EXTENSION` 使用的是**扩展名**（如 `vector`），而非包别名（`pgvector`）。


--------

## 集群初始化时启用

在 [`pg_databases`](/docs/pgsql/param#pg_databases) 中声明扩展，集群初始化时自动创建：

```yaml
pg-meta:
  vars:
    pg_cluster: pg-meta
    pg_databases:
      - name: meta
        extensions:
          - { name: vector }                         # 使用默认 Schema
          - { name: postgis, schema: public }        # 指定 Schema
          - { name: pg_stat_statements, schema: monitor }
```

Pigsty 会在数据库创建后自动执行 `CREATE EXTENSION`。


--------

## 需要预加载的扩展

部分扩展需要先添加到 `shared_preload_libraries` 并重启后才能创建：

```yaml
pg-meta:
  vars:
    pg_cluster: pg-meta
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain'
    pg_databases:
      - name: meta
        extensions:
          - { name: timescaledb }  # 需要预加载
```

如果未预加载就尝试创建，会收到错误信息。

需要预加载的常见扩展：`timescaledb`, `citus`, `pg_cron`, `pg_net`, `pgaudit` 等。详见 [配置扩展](config)。


--------

## 扩展依赖

某些扩展依赖于其他扩展，需要按顺序创建：

```sql
-- postgis_topology 依赖 postgis
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;

-- 或使用 CASCADE 自动安装依赖
CREATE EXTENSION postgis_topology CASCADE;
```


--------

## 不需要创建的扩展

少数扩展不通过 SQL 接口对外服务，无需执行 `CREATE EXTENSION`：

| 扩展 | 说明 |
|:-----|:-----|
| `wal2json` | 逻辑解码插件，直接在复制槽中使用 |
| `decoderbufs` | 逻辑解码插件 |
| `decoder_raw` | 逻辑解码插件 |
{.full-width}

这些扩展安装后即可使用，例如：

```sql
-- 使用 wal2json 创建逻辑复制槽
SELECT * FROM pg_create_logical_replication_slot('test_slot', 'wal2json');
```


--------

## 查看扩展信息

```sql
-- 查看扩展详情
\dx+ vector

-- 查看扩展包含的对象
SELECT * FROM pg_extension_config_dump('vector');

-- 查看扩展版本
SELECT extversion FROM pg_extension WHERE extname = 'vector';
```


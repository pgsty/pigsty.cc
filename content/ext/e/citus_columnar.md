---
title: "citus_columnar"
linkTitle: "citus_columnar"
description: "Citus 列式存储引擎"
weight: 2401
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/citusdata/citus">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">citusdata/citus</div>
    <div class="ext-card__desc">https://github.com/citusdata/citus</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/citus-14.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">citus-14.0.0.tar.gz</div>
    <div class="ext-card__desc">citus-14.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`citus`**](/ext/e/citus) | `14.0.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2400  | [**`citus`**](/ext/e/citus) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 2401  | [**`citus_columnar`**](/ext/e/citus_columnar) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`columnar`](/ext/e/columnar) [`pg_parquet`](/ext/e/pg_parquet) [`timescaledb`](/ext/e/timescaledb) [`pg_analytics`](/ext/e/pg_analytics) [`pg_mooncake`](/ext/e/pg_mooncake) [`pg_duckdb`](/ext/e/pg_duckdb) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`orioledb`](/ext/e/orioledb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> conflict with hydra columnar, no pg18


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.0.0` | {{< pgvers "18,17,16" >}} | `citus` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.0.0` | {{< pgvers "18,17,16" >}} | `citus_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.0.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-citus` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 8 | AVAIL PIGSTY 14.0.0 15 | AVAIL PIGSTY 13.2.0 22 | AVAIL PIGSTY 13.0.0 29 |
| el8.aarch64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 8 | AVAIL PIGSTY 14.0.0 15 | AVAIL PIGSTY 13.2.0 21 | AVAIL PIGSTY 13.0.0 16 |
| el9.x86_64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 8 | AVAIL PIGSTY 14.0.0 15 | AVAIL PIGSTY 13.2.0 22 | AVAIL PIGSTY 13.0.0 26 |
| el9.aarch64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 8 | AVAIL PIGSTY 14.0.0 15 | AVAIL PIGSTY 13.2.0 22 | AVAIL PIGSTY 13.0.0 16 |
| el10.x86_64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 6 | AVAIL PIGSTY 14.0.0 6 | AVAIL PIGSTY 13.2.0 5 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 14.0.0 2 | AVAIL PIGSTY 14.0.0 6 | AVAIL PIGSTY 14.0.0 6 | AVAIL PIGSTY 13.2.0 5 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 14.0.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `citus` 扩展的 RPM / DEB 包：

```bash
pig build pkg citus         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `citus` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install citus;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y citus -v 18  # PG 18
pig ext install -y citus -v 17  # PG 17
pig ext install -y citus -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y citus_18       # PG 18
dnf install -y citus_17       # PG 17
dnf install -y citus_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-citus   # PG 18
apt install -y postgresql-17-citus   # PG 17
apt install -y postgresql-16-citus   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION citus_columnar;
```



## 用法

> [citus_columnar: PostgreSQL 的列式存储访问方法](https://github.com/citusdata/citus)

Citus Columnar 为 PostgreSQL 提供列式存储引擎。它以列式格式存储数据并自动压缩，非常适合在仅追加数据上执行分析工作负载，这类查询通常只读取部分列。

**核心文档：**

- [列式存储](https://docs.citusdata.com/en/stable/admin_guide/table_management.html#columnar-storage)
- [列式压缩](https://docs.citusdata.com/en/stable/admin_guide/table_management.html#compression)

### 创建列式表

创建表时使用 `USING columnar` 子句：

```sql
CREATE TABLE events (
    event_id    BIGINT,
    event_time  TIMESTAMPTZ,
    event_type  TEXT,
    user_id     INT,
    payload     JSONB
) USING columnar;
```

### 压缩选项

可按表配置压缩方式。支持的方法：`zstd`（默认）、`lz4`、`pglz`、`none`。

```sql
ALTER TABLE events SET (
    columnar.compression = zstd,
    columnar.compression_level = 3
);
```

### 块组和条带设置

列式存储将数据组织为条带（stripe），每个条带包含多个块组（chunk group）。调整这些参数会影响压缩率和查询性能。

```sql
ALTER TABLE events SET (
    columnar.stripe_row_limit = 150000,    -- 每个条带的最大行数（默认 150000）
    columnar.chunk_group_row_limit = 10000 -- 每个块组的行数（默认 10000）
);
```

### 适用场景

列式存储最适合以下场景：

- **分析和报表**：查询只读取宽表中的少数列
- **仅追加工作负载**（如日志、事件、时序归档）
- **大型事实表**：需要批量扫描和聚合
- **冷数据归档**：高压缩率非常有价值

### 限制

- **不支持 UPDATE 或 DELETE**：列式表仅支持追加
- **不支持索引**：仅支持顺序/列式扫描
- **不支持 TOAST**：大值内联存储
- **不支持作为发布端的逻辑复制**
- **不支持 tid 扫描**

### 列投影和块组跳过

列式存储自动仅读取查询中引用的列（列投影），并跳过 min/max 元数据与查询条件不匹配的块组：

```sql
-- 仅读取 event_type 和 event_time 列；跳过不相关的块组
SELECT event_type, count(*)
FROM events
WHERE event_time > '2025-01-01'
GROUP BY event_type;
```

### 监控列式存储

查看条带和块组的元数据：

```sql
-- 查看列式表的条带信息
SELECT * FROM columnar.stripe WHERE relation = 'events'::regclass;

-- 查看块组详情
SELECT * FROM columnar.chunk_group WHERE relation = 'events'::regclass;

-- 检查存储大小和压缩率
SELECT pg_size_pretty(pg_total_relation_size('events')) AS total_size;
```

### 堆表和列式表之间的转换

将现有堆表转换为列式表：

```sql
-- 创建列式副本
CREATE TABLE events_columnar (LIKE events) USING columnar;
INSERT INTO events_columnar SELECT * FROM events;

-- 或使用 ALTER TABLE（Citus 11+）
SELECT alter_table_set_access_method('events', 'columnar');
```

将列式表转换回堆表：

```sql
SELECT alter_table_set_access_method('events', 'heap');
```

### 与分区结合使用

将列式存储与分区结合，保持近期数据在堆表中（支持更新/索引），将较旧的分区归档为列式存储：

```sql
CREATE TABLE events (
    event_time TIMESTAMPTZ,
    data       JSONB
) PARTITION BY RANGE (event_time);

-- 近期数据：堆表（支持索引和更新）
CREATE TABLE events_current PARTITION OF events
    FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');

-- 归档数据：列式表（压缩存储，读取优化）
CREATE TABLE events_archive PARTITION OF events
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01')
    USING columnar;
```

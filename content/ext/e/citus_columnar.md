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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/citus-14.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">citus-14.2.0.tar.gz</div>
    <div class="ext-card__desc">citus-14.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`citus`**](/ext/e/citus) | `14.2.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2400  | [**`citus`**](/ext/e/citus) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 2401  | [**`citus_columnar`**](/ext/e/citus_columnar) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`pg_mooncake`](/ext/e/pg_mooncake) [`columnar`](/ext/e/columnar) [`storage_engine`](/ext/e/storage_engine) [`orioledb`](/ext/e/orioledb) [`pg_sorted_heap`](/ext/e/pg_sorted_heap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Packaged with Citus 14.2.0; the control default_version is 14.2-1; citus_columnar itself does not require preload and conflicts with Hydra Columnar.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.2.0` | {{< pgvers "16,17,18" >}} | `citus` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.2.0` | {{< pgvers "18,17,16" >}} | `citus_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `14.2.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-citus` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 14.2.0 4 | AVAIL PGDG 14.2.0 10 | AVAIL PGDG 14.2.0 17 | AVAIL PGDG 13.2.0 21 | AVAIL PGDG 13.0.0 28 |
| el8.aarch64 | AVAIL PGDG 14.2.0 4 | AVAIL PGDG 14.2.0 10 | AVAIL PGDG 14.2.0 17 | AVAIL PGDG 13.2.0 20 | AVAIL PGDG 13.0.0 15 |
| el9.x86_64 | AVAIL PGDG 14.2.0 6 | AVAIL PGDG 14.2.0 12 | AVAIL PGDG 14.2.0 19 | AVAIL PGDG 13.2.0 21 | AVAIL PGDG 13.0.0 25 |
| el9.aarch64 | AVAIL PGDG 14.2.0 6 | AVAIL PGDG 14.2.0 12 | AVAIL PGDG 14.2.0 19 | AVAIL PGDG 13.2.0 21 | AVAIL PGDG 13.0.0 15 |
| el10.x86_64 | AVAIL PGDG 14.2.0 6 | AVAIL PGDG 14.2.0 10 | AVAIL PGDG 14.2.0 10 | AVAIL PGDG 13.2.0 4 | AVAIL PIGSTY 13.0.0 1 |
| el10.aarch64 | AVAIL PGDG 14.2.0 6 | AVAIL PGDG 14.2.0 10 | AVAIL PGDG 14.2.0 10 | AVAIL PGDG 13.2.0 4 | AVAIL PIGSTY 13.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 14.2.0 1 | AVAIL PIGSTY 13.2.0 1 | AVAIL PIGSTY 13.0.0 1 |
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install citus;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y citus -v 18  # PG 18
pig ext install -y citus -v 17  # PG 17
pig ext install -y citus -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y citus_18       # PG 18
dnf install -y citus_17       # PG 17
dnf install -y citus_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-citus   # PG 18
apt install -y postgresql-17-citus   # PG 17
apt install -y postgresql-16-citus   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION citus_columnar;
```

## 用法

来源：

- [Citus v14.2.0 columnar 控制文件](https://github.com/citusdata/citus/blob/v14.2.0/src/backend/columnar/citus_columnar.control)
- [Citus v14.2.0 columnar 选项辅助函数](https://github.com/citusdata/citus/blob/v14.2.0/src/backend/columnar/sql/udfs/alter_columnar_table_set/latest.sql)
- [Citus 列存储文档](https://docs.citusdata.com/en/stable/admin_guide/table_management.html#columnar-storage)
- [Citus v14.2.0 发行说明](https://github.com/citusdata/citus/releases/tag/v14.2.0)

`citus_columnar` 为 PostgreSQL 提供面向追加写入的列式表访问方法。它随 Citus 14.2 软件包交付，但属于独立扩展：软件包版本为 `14.2.0`，而扩展控制版本为 `14.2-1`。适用于以扫描为主，且工作负载符合其写入与功能限制的归档或分析表。

### 创建列存储表

```sql
CREATE EXTENSION citus_columnar;

CREATE TABLE events_archive (
  event_at timestamptz NOT NULL,
  tenant_id bigint NOT NULL,
  kind text,
  payload jsonb
) USING columnar;
```

`citus_columnar` 本身不要求 `shared_preload_libraries`。如果数据库还使用分布式 `citus` 扩展，仍需预加载 `citus`。

### 加载与查询数据

列存储会将行组成条带，并按数据块压缩各列。使用大小合理的事务进行批量插入，比持续执行微型事务更有利于产生良好条带。

```sql
INSERT INTO events_archive
SELECT event_at, tenant_id, kind, payload
FROM events
WHERE event_at < now() - interval '90 days';

SELECT tenant_id, count(*), min(event_at), max(event_at)
FROM events_archive
GROUP BY tenant_id;
```

### 使用 Citus 扩展转换

如果主 `citus` 扩展也已预加载并安装，可以使用其辅助函数转换本地表或分布式表：

```sql
SELECT alter_table_set_access_method('events_archive', 'columnar');
SELECT alter_table_set_access_method('events_archive', 'heap');
```

转换会重写表。转换为列存储会删除现有索引，因此执行前应清点依赖的索引和约束，并为重写安排足够的磁盘空间和锁定时间。

`alter_table_set_access_method()` 属于 `citus`，而不是独立的 `citus_columnar`。没有主扩展时，应新建 `USING columnar` 表并将数据复制进去，而不要假定该辅助函数存在。

### 调整压缩

使用文档所述的辅助函数检查和修改表级列存储选项：

```sql
SELECT alter_columnar_table_set(
  'events_archive',
  compression => 'zstd',
  compression_level => 3,
  stripe_row_limit => 150000,
  chunk_group_row_limit => 10000
);
```

新设置只影响后续写入的条带。如果旧条带也需要采用新布局，请重写现有数据。

### 运维边界

- 列存储表面向追加型使用场景。它不支持 `UPDATE` 和 `DELETE`，回滚写入留下的空间也无法通过普通的堆表式维护回收。
- TOAST 不可用；大值会保持行内存储，并可能触及 PostgreSQL 行大小限制。
- 不支持行锁、`AFTER ... FOR EACH ROW` 触发器、可串行化隔离、逻辑解码、外键、非日志表以及多种扫描类型。采用该访问方法前，应检查当前上游限制列表。
- 不应把普通堆表在索引、vacuum、复制、触发器和约束方面的惯例直接套用到列存储上。应使用有代表性的列存储表验证每项必需的数据库功能。
- 扩展安装在 `pg_catalog` 中，不可重定位，SQL 版本为 `14.2-1`；检查或更新 `pg_extension` 时应使用该版本，而不是软件包版本 `14.2.0`。

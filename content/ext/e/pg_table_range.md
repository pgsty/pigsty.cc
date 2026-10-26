---
title: "pg_table_range"
linkTitle: "pg_table_range"
description: "基于每个分区的数据范围在规划阶段裁剪分区，并支持非分区键列。"
weight: 2570
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bitner/pg_table_range">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bitner/pg_table_range</div>
    <div class="ext-card__desc">https://github.com/bitner/pg_table_range</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_table_range-0.1.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_table_range-0.1.2.tar.gz</div>
    <div class="ext-card__desc">pg_table_range-0.1.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_table_range`**](/ext/e/pg_table_range) | `0.1.2` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2570  | [**`pg_table_range`**](/ext/e/pg_table_range) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_kpart`](/ext/e/pg_kpart) [`qdgc`](/ext/e/qdgc) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Experimental. 0.1.2 fixes missing rows and backend crashes. From 0.1.1: install new binaries, restart all backends, UPDATE extension, REINDEX each table_range index (parent for partitioned tables); old summaries are ignored until rebuilt.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.2` | {{< pgvers "16,17,18" >}} | `pg_table_range` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.2` | {{< pgvers "16,17,18" >}} | `pg_table_range_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | AVAIL PIGSTY 0.1.2 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_table_range_18 pg_table_range_18-0.1.2-1PGSTY.el8.x86_64.rpm pigsty 0.1.2 984.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_table_range_18-0.1.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_table_range_18 pg_table_range_18-0.1.2-1PGSTY.el8.aarch64.rpm pigsty 0.1.2 851.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_table_range_18-0.1.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_table_range_18 pg_table_range_18-0.1.2-1PGSTY.el9.x86_64.rpm pigsty 0.1.2 1010.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_table_range_18-0.1.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_table_range_18 pg_table_range_18-0.1.2-1PGSTY.el9.aarch64.rpm pigsty 0.1.2 909.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_table_range_18-0.1.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_table_range_18 pg_table_range_18-0.1.2-1PGSTY.el10.x86_64.rpm pigsty 0.1.2 1009.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_table_range_18-0.1.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_table_range_18 pg_table_range_18-0.1.2-1PGSTY.el10.aarch64.rpm pigsty 0.1.2 889.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_table_range_18-0.1.2-1PGSTY.el10.aarch64.rpm
@ el8.x86_64 17 pg_table_range_17 pg_table_range_17-0.1.2-1PGSTY.el8.x86_64.rpm pigsty 0.1.2 983.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_table_range_17-0.1.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_table_range_17 pg_table_range_17-0.1.2-1PGSTY.el8.aarch64.rpm pigsty 0.1.2 848.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_table_range_17-0.1.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_table_range_17 pg_table_range_17-0.1.2-1PGSTY.el9.x86_64.rpm pigsty 0.1.2 1000.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_table_range_17-0.1.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_table_range_17 pg_table_range_17-0.1.2-1PGSTY.el9.aarch64.rpm pigsty 0.1.2 906.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_table_range_17-0.1.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_table_range_17 pg_table_range_17-0.1.2-1PGSTY.el10.x86_64.rpm pigsty 0.1.2 1000.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_table_range_17-0.1.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_table_range_17 pg_table_range_17-0.1.2-1PGSTY.el10.aarch64.rpm pigsty 0.1.2 887.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_table_range_17-0.1.2-1PGSTY.el10.aarch64.rpm
@ el8.x86_64 16 pg_table_range_16 pg_table_range_16-0.1.2-1PGSTY.el8.x86_64.rpm pigsty 0.1.2 980.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_table_range_16-0.1.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_table_range_16 pg_table_range_16-0.1.2-1PGSTY.el8.aarch64.rpm pigsty 0.1.2 846.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_table_range_16-0.1.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_table_range_16 pg_table_range_16-0.1.2-1PGSTY.el9.x86_64.rpm pigsty 0.1.2 1004.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_table_range_16-0.1.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_table_range_16 pg_table_range_16-0.1.2-1PGSTY.el9.aarch64.rpm pigsty 0.1.2 904.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_table_range_16-0.1.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_table_range_16 pg_table_range_16-0.1.2-1PGSTY.el10.x86_64.rpm pigsty 0.1.2 1004.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_table_range_16-0.1.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_table_range_16 pg_table_range_16-0.1.2-1PGSTY.el10.aarch64.rpm pigsty 0.1.2 887.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_table_range_16-0.1.2-1PGSTY.el10.aarch64.rpm
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_table_range` 扩展的 RPM 包：

```bash
pig build pkg pg_table_range         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_table_range` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_table_range;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_table_range -v 18  # PG 18
pig ext install -y pg_table_range -v 17  # PG 17
pig ext install -y pg_table_range -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_table_range_18       # PG 18
dnf install -y pg_table_range_17       # PG 17
dnf install -y pg_table_range_16       # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_table_range;
```

## 用法

来源：

- [上游 README](https://github.com/bitner/pg_table_range/blob/v0.1.2/README.md)
- [版本与 PostgreSQL 特性矩阵](https://github.com/bitner/pg_table_range/blob/v0.1.2/Cargo.toml)
- [规划器钩子与 GUC 注册](https://github.com/bitner/pg_table_range/blob/v0.1.2/src/lib.rs)
- [0.1.2 upgrade and correctness fixes](https://github.com/bitner/pg_table_range/blob/v0.1.2/CHANGELOG.md)

pg_table_range 是面向 PostgreSQL 16–18 的实验性扩展，用于在规划期按非分区键列剪枝。其 table_range 索引访问方法保存每个分区的实际标量最小值与最大值、范围外延，或 PostGIS 几何外延。只有当摘要能够证明分区不可能匹配时，规划器钩子才会移除它。

### 基本用法

在分区表上构建摘要索引，并用代表性谓词对比执行计划：

```sql
CREATE EXTENSION pg_table_range;

CREATE INDEX events_tr
ON events USING table_range (val, created_at);

EXPLAIN (COSTS OFF)
SELECT *
FROM events
WHERE val >= 250;

SET table_range.enable_pruning = off;
EXPLAIN (COSTS OFF)
SELECT *
FROM events
WHERE val >= 250;
RESET table_range.enable_pruning;
```

该索引永远不会被选中来扫描行；它拥有供规划器使用的紧凑摘要。插入会自动拓宽摘要。删除仍然安全，但可能让摘要比实际存活数据更宽，直到 REINDEX 将其收紧；VACUUM 不会重建摘要。

受支持的剪枝谓词包括标量比较、BETWEEN、空值测试、常量 IN 或 ANY 列表，以及范围与 PostGIS 几何类型的重叠。不受支持的表达式会保守地保留分区。

### 从 0.1.1 升级

0.1.2 修复了 0.1.1 的漏行与后端崩溃问题。先安装新二进制文件并重启 PostgreSQL，确保所有后端都不再运行旧代码。随后升级扩展，并重建每个 table_range 索引；分区表应重建父索引：

```sql
ALTER EXTENSION pg_table_range UPDATE TO '0.1.2';
REINDEX INDEX events_tr;
```

重建前会忽略旧摘要，保留全部分区，以免错误剪枝。此版本拒绝部分索引。删除后如需收紧摘要，也应使用 REINDEX。

### 注意事项

- 上游明确将项目标记为实验性且高度由 AI 驱动。采用前应在仿真生产数据上验证正确性、崩溃恢复、升级和规划器行为。
- 规划成本随分区数量线性增长。原生分区键剪枝便宜得多；只有当选择性非键谓词的执行收益足以抵消规划工作时，才应使用 pg_table_range。
- 索引创建与非键规划都会锁定所有分区。当分区数达到数千时，默认 max_locks_per_transaction 可能导致共享内存不足错误；增大它会消耗共享内存，且需要重启。
- 删除可能降低选择性，直到维护重建或收紧摘要。失效的 table_range 索引会默默禁用剪枝。
- 控制文件要求由超级用户安装。应限制表与索引 DDL 权限，并针对确切的 PostgreSQL 大版本测试 Rust/pgrx 构建。

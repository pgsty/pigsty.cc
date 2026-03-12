---
title: "pg_overexplain"
linkTitle: "pg_overexplain"
description: "允许 EXPLAIN 转储更多详细"
weight: 6880
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/devel/pgoverexplain.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/devel/pgoverexplain.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/devel/pgoverexplain.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_overexplain`**](/ext/e/pg_overexplain) | `1.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6880  | [**`pg_overexplain`**](/ext/e/pg_overexplain) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_profile`](/ext/e/pg_profile) [`pg_tracing`](/ext/e/pg_tracing) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) [`pg_track_settings`](/ext/e/pg_track_settings) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--miss">✗</span> | <span class="ext-badge ext-badge--miss">✗</span> | <span class="ext-badge ext-badge--miss">✗</span> | <span class="ext-badge ext-badge--miss">✗</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展





## 用法

> [pg_overexplain: 带有内部规划器详情的扩展 EXPLAIN](https://www.postgresql.org/docs/current/pgoverexplain.html)

pg_overexplain 使用额外的调试选项扩展 `EXPLAIN` 命令，以显示内部规划器数据结构。主要用于规划器调试和开发。

### 加载

```sql
LOAD 'pg_overexplain';
-- 或在 postgresql.conf 中：
-- session_preload_libraries = 'pg_overexplain'
```

### EXPLAIN (DEBUG)

显示内部计划树信息：

```sql
EXPLAIN (DEBUG) SELECT * FROM my_table WHERE id = 1;
```

显示每个节点的字段：
- **Disabled Nodes** -- 禁用节点的原始计数
- **Parallel Safe** -- 节点是否可以出现在 Gather 下
- **Plan Node ID** -- 用于并行查询协调的内部 ID
- **extParam / allParam** -- 影响节点的参数

显示每个查询的字段：
- **Command Type** -- 查询类型（select、update 等）
- **Flags** -- hasReturning、hasModifyingCTE、canSetTag、transientPlan 等
- **Subplans Needing Rewind** -- 需要回退的子计划 ID
- **Relation OIDs** -- 计划依赖的 OID
- **Parse Location** -- 查询字符串中的位置

### EXPLAIN (RANGE_TABLE)

显示查询范围表条目的信息：

```sql
EXPLAIN (RANGE_TABLE) SELECT * FROM t1 JOIN t2 ON t1.id = t2.id;
```

显示范围表索引引用（`Scan RTI`、`Nominal RTI`、`Append RTIs` 等），并转储每个范围表条目及其类型（relation、subquery、join、cte 等）和条目特定字段。

### 注意事项

- 输出反映内部规划器数据结构，可能需要阅读源代码才能解释
- 输出格式可能因 PostgreSQL 版本而异
- 不建议在生产环境中使用

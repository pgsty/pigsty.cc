---
title: "pg_logicalinspect"
linkTitle: "pg_logicalinspect"
description: "检视逻辑解码组件详情"
weight: 6890
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/devel/pglogicalinspect.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/devel/pglogicalinspect.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/devel/pglogicalinspect.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_logicalinspect`**](/ext/e/pg_logicalinspect) | `1.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6890  | [**`pg_logicalinspect`**](/ext/e/pg_logicalinspect) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
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

```sql
CREATE EXTENSION pg_logicalinspect;
```




## 用法

> [pg_logicalinspect: 检查逻辑解码快照文件](https://www.postgresql.org/docs/current/pglogicalinspect.html)

pg_logicalinspect 提供 SQL 函数来检查存储在 `pg_logical/snapshots/` 中的序列化逻辑解码快照，适用于调试和教学目的。

### 函数

**`pg_get_logical_snapshot_meta(filename text)`** -- 快照文件元数据：

```sql
SELECT * FROM pg_get_logical_snapshot_meta('0-40796E18.snap');

 magic      | 1369563137
 checksum   | 1028045905
 version    | 6
```

**`pg_get_logical_snapshot_info(filename text)`** -- 详细快照信息：

```sql
SELECT * FROM pg_get_logical_snapshot_info('0-40796E18.snap');

 state                    | consistent
 xmin                     | 751
 xmax                     | 751
 start_decoding_at        | 0/40796AF8
 two_phase_at             | 0/40796AF8
 initial_xmin_horizon     | 0
 building_full_snapshot   | f
 in_slot_creation         | f
 last_serialized_snapshot | 0/0
 committed_count          | 0
 committed_xip            |
 catchange_count          | 2
 catchange_xip            | {751,752}
```

### 列出可用快照

结合 `pg_ls_logicalsnapdir()` 来发现和检查所有快照：

```sql
SELECT ss.name, meta.*
FROM pg_ls_logicalsnapdir() AS ss,
     pg_get_logical_snapshot_meta(ss.name) AS meta;

SELECT ss.name, info.*
FROM pg_ls_logicalsnapdir() AS ss,
     pg_get_logical_snapshot_info(ss.name) AS info;
```

### 访问控制

默认限制为超级用户和 `pg_read_server_files` 成员。

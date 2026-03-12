---
title: "auto_explain"
linkTitle: "auto_explain"
description: "提供一种自动记录执行计划的手段"
weight: 6980
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/auto-explain.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/auto-explain.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/auto-explain.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`auto_explain`**](/ext/e/auto_explain) | `-` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6980  | [**`auto_explain`**](/ext/e/auto_explain) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_store_plans`](/ext/e/pg_store_plans) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`plprofiler`](/ext/e/plprofiler) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_track_settings`](/ext/e/pg_track_settings) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展





## 用法

> [auto_explain: 自动记录慢查询计划](https://www.postgresql.org/docs/current/auto-explain.html)

auto_explain 自动记录慢语句的执行计划，无需手动运行 `EXPLAIN`。计划发送到 PostgreSQL 日志中。

### 快速开始

```sql
-- 按会话加载
LOAD 'auto_explain';
SET auto_explain.log_min_duration = '1s';
SET auto_explain.log_analyze = true;
```

或在 `postgresql.conf` 中为所有会话配置：

```
session_preload_libraries = 'auto_explain'
auto_explain.log_min_duration = '3s'
```

### 配置参数

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `auto_explain.log_min_duration` | `-1` | 记录的最小持续时间（毫秒）。`0` = 全部，`-1` = 禁用 |
| `auto_explain.log_analyze` | `off` | 使用 `EXPLAIN ANALYZE`（包含实际耗时） |
| `auto_explain.log_buffers` | `off` | 包含缓冲区使用统计 |
| `auto_explain.log_wal` | `off` | 包含 WAL 使用统计 |
| `auto_explain.log_timing` | `on` | 包含每个节点的耗时（禁用可减少开销） |
| `auto_explain.log_triggers` | `off` | 包含触发器执行统计 |
| `auto_explain.log_verbose` | `off` | 包含详细输出 |
| `auto_explain.log_settings` | `off` | 记录已修改的规划器相关设置 |
| `auto_explain.log_format` | `text` | 格式：`text`、`xml`、`json`、`yaml` |
| `auto_explain.log_level` | `LOG` | 输出的日志级别 |
| `auto_explain.log_nested_statements` | `off` | 记录函数内部语句的计划 |
| `auto_explain.log_parameter_max_length` | `-1` | 参数日志：`-1` = 完整，`0` = 不记录 |
| `auto_explain.sample_rate` | `1` | 要分析的语句比例（0.0 到 1.0） |

### 日志输出示例

```
LOG:  duration: 3.651 ms  plan:
  Query Text: SELECT count(*) FROM pg_class, pg_index
              WHERE oid = indrelid AND indisunique;
  Aggregate  (cost=16.79..16.80 rows=1 width=0)
             (actual time=3.626..3.627 rows=1 loops=1)
    ->  Hash Join  (cost=4.17..16.55 rows=92 width=0)
                   (actual time=3.349..3.594 rows=92 loops=1)
```

### 性能提示

使用 `log_analyze` 时，如果只需要行数可禁用 `log_timing`：

```sql
SET auto_explain.log_analyze = true;
SET auto_explain.log_timing = off;
```

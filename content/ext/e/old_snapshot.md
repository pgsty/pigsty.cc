---
title: "old_snapshot"
linkTitle: "old_snapshot"
description: "支持 old_snapshot_threshold 的实用程序"
weight: 5960
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/oldsnapshot.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/oldsnapshot.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/oldsnapshot.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`old_snapshot`**](/ext/e/old_snapshot) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5960  | [**`old_snapshot`**](/ext/e/old_snapshot) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) [`pgstattuple`](/ext/e/pgstattuple) [`pg_prewarm`](/ext/e/pg_prewarm) [`pg_buffercache`](/ext/e/pg_buffercache) [`amcheck`](/ext/e/amcheck) [`pg_surgery`](/ext/e/pg_surgery) [`toastinfo`](/ext/e/toastinfo) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--miss">✗</span> | <span class="ext-badge ext-badge--miss">✗</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION old_snapshot;
```



## 用法

> [old_snapshot: 支持 old_snapshot_threshold 的工具函数](https://www.postgresql.org/docs/16/oldsnapshot.html)

`old_snapshot` 扩展提供与 `old_snapshot_threshold` 配置参数相关的服务器状态检查函数。

注意：在较新版本中，本章已从 PostgreSQL 当前文档中移除；需要时请使用版本化文档。

### 函数

```sql
-- 查看时间戳到 XID 的映射表
SELECT * FROM pg_old_snapshot_time_mapping();
```

### 函数签名

```sql
pg_old_snapshot_time_mapping(
    array_offset OUT int4,
    end_timestamp OUT timestamptz,
    newest_xmin OUT xid
) RETURNS SETOF record
```

### 输出列

| 列 | 类型 | 描述 |
|--------|------|-------------|
| `array_offset` | int4 | 映射数组中的索引位置 |
| `end_timestamp` | timestamptz | 对应一分钟时间段的结束时间 |
| `newest_xmin` | xid | 该分钟内拍摄的所有快照中最新的 xmin |

### 上下文

PostgreSQL 的 `old_snapshot_threshold` 参数控制快照保持有效的时长。服务器维护一个内部的时间戳到事务 ID 的映射来实现此功能。此扩展公开该映射以供检查和调试。

```sql
-- 检查 old_snapshot_threshold 设置
SHOW old_snapshot_threshold;

-- 检查当前映射条目
SELECT array_offset, end_timestamp, newest_xmin
FROM pg_old_snapshot_time_mapping()
ORDER BY array_offset;
```

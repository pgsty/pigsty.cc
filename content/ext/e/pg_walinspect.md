---
title: "pg_walinspect"
linkTitle: "pg_walinspect"
description: "用于检查 PostgreSQL WAL 日志内容的函数"
weight: 6940
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgwalinspect.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgwalinspect.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgwalinspect.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_walinspect`**](/ext/e/pg_walinspect) | `1.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6940  | [**`pg_walinspect`**](/ext/e/pg_walinspect) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`basic_archive`](/ext/e/basic_archive) [`pglogical`](/ext/e/pglogical) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`wal2json`](/ext/e/wal2json) [`basebackup_to_shell`](/ext/e/basebackup_to_shell) [`decoderbufs`](/ext/e/decoderbufs) [`test_decoding`](/ext/e/test_decoding) [`pg_profile`](/ext/e/pg_profile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--miss">✗</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION pg_walinspect;
```




## 用法

> [pg_walinspect: 底层 WAL 检查](https://www.postgresql.org/docs/current/pgwalinspect.html)

pg_walinspect 提供 SQL 函数来检查运行中服务器上的预写日志（WAL）内容。类似于 `pg_waldump`，但可通过 SQL 访问。

### 函数

**`pg_get_wal_record_info(in_lsn pg_lsn)`** -- 单条 WAL 记录详情：

```sql
SELECT * FROM pg_get_wal_record_info('0/E419E28');

 start_lsn        | 0/E419E28
 end_lsn          | 0/E419E68
 prev_lsn         | 0/E419D78
 xid              | 0
 resource_manager | Heap2
 record_type      | VACUUM
 record_length    | 58
 main_data_length | 2
 fpi_length       | 0
 description      | nunused: 5, unused: [1, 2, 3, 4, 5]
 block_ref        | blkref #0: rel 1663/16385/1249 fork main blk 364
```

**`pg_get_wal_records_info(start_lsn, end_lsn)`** -- LSN 范围内的所有记录：

```sql
SELECT * FROM pg_get_wal_records_info('0/1E913618', '0/1E913740');
```

**`pg_get_wal_block_info(start_lsn, end_lsn, show_data)`** -- WAL 记录中的块引用：

```sql
SELECT * FROM pg_get_wal_block_info('0/1230278', '0/12302B8');
```

每个块引用返回：`start_lsn`、`end_lsn`、`block_id`、`reltablespace`、`reldatabase`、`relfilenode`、`relforknumber`、`relblocknumber`、`xid`、`fork_flags`、`block_data`、`block_fpi_data` 等。

**`pg_get_wal_stats(start_lsn, end_lsn, per_record)`** -- 聚合 WAL 统计：

```sql
SELECT * FROM pg_get_wal_stats('0/1E847D00', '0/1E84F500')
WHERE count > 0;
```

### 提示

- 使用 `FFFFFFFF/FFFFFFFF` 作为 `end_lsn` 可读取到当前服务器 LSN
- 如果 `in_lsn` 不在记录边界上，则返回下一条有效记录
- 所有函数使用服务器当前的时间线 ID

### 访问权限

限制为超级用户和 `pg_read_server_files` 成员。

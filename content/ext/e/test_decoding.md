---
title: "test_decoding"
linkTitle: "test_decoding"
description: "基于SQL的WAL逻辑解码样例"
weight: 9970
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/test-decoding.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/test-decoding.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/test-decoding.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`test_decoding`**](/ext/e/test_decoding) | `-` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9970  | [**`test_decoding`**](/ext/e/test_decoding) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`wal2json`](/ext/e/wal2json) [`decoderbufs`](/ext/e/decoderbufs) [`decoder_raw`](/ext/e/decoder_raw) [`pgoutput`](/ext/e/pgoutput) [`pglogical`](/ext/e/pglogical) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgactive`](/ext/e/pgactive) [`kafka_fdw`](/ext/e/kafka_fdw) |
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

> [test_decoding: 用于 WAL 逻辑解码的基于 SQL 的测试/示例模块](https://www.postgresql.org/docs/current/test-decoding.html)

PostgreSQL 内置的逻辑解码输出插件，可生成 WAL 变更的文本表示。主要用于测试和作为参考实现。

### 配置

在 `postgresql.conf` 中：

```ini
wal_level = logical
max_replication_slots = 10
max_wal_senders = 10
```

### 使用 SQL 函数

```sql
-- 创建逻辑复制槽
SELECT * FROM pg_create_logical_replication_slot('test_slot', 'test_decoding');

-- 执行一些变更
CREATE TABLE test_table (id serial PRIMARY KEY, data text);
INSERT INTO test_table (data) VALUES ('hello');
UPDATE test_table SET data = 'world' WHERE id = 1;
DELETE FROM test_table WHERE id = 1;

-- 查看变更（不消费）
SELECT * FROM pg_logical_slot_peek_changes('test_slot', NULL, NULL);

-- 获取并消费变更
SELECT * FROM pg_logical_slot_get_changes('test_slot', NULL, NULL);
```

### 输出格式

```
BEGIN 1234
table public.test_table: INSERT: id[integer]:1 data[text]:'hello'
table public.test_table: UPDATE: id[integer]:1 data[text]:'world'
table public.test_table: DELETE: id[integer]:1
COMMIT 1234
```

### 使用 pg_recvlogical

```bash
# 创建槽
pg_recvlogical -d postgres --slot test_slot --create-slot -P test_decoding

# 流式接收变更
pg_recvlogical -d postgres --slot test_slot --start -f -

# 删除槽
pg_recvlogical -d postgres --slot test_slot --drop-slot
```

### 选项

以键值对形式传递选项：

```sql
SELECT * FROM pg_logical_slot_get_changes('test_slot', NULL, NULL,
    'include-xids', '1',
    'skip-empty-xacts', '1',
    'include-timestamp', '1'
);
```

- `include-xids` - 在输出中包含事务 ID
- `skip-empty-xacts` - 跳过没有变更的事务
- `include-timestamp` - 包含提交时间戳

### 注意事项

- 随 PostgreSQL 一起发布（contrib 模块，无需单独安装）
- 主要用于测试和调试逻辑解码
- 生产环境 CDC 请使用专用插件（wal2json、pgoutput、decoderbufs）

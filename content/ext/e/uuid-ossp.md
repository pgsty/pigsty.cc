---
title: "uuid-ossp"
linkTitle: "uuid-ossp"
description: "生成通用唯一标识符（UUIDs）"
weight: 4930
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/uuid-ossp.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/uuid-ossp.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/uuid-ossp.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`uuid-ossp`**](/ext/e/uuid-ossp) | `1.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4930  | [**`uuid-ossp`**](/ext/e/uuid-ossp) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`permuteseq`](/ext/e/permuteseq) [`ddsketch`](/ext/e/ddsketch) [`vasco`](/ext/e/vasco) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION uuid-ossp;
```



## 用法

> [uuid-ossp: UUID 生成函数](https://www.postgresql.org/docs/current/uuid-ossp.html)

提供使用多种标准算法生成 UUID 的函数。注意：如果只需要随机 UUID，可以考虑使用内置的 `gen_random_uuid()` 函数。

```sql
CREATE EXTENSION "uuid-ossp";
```

### UUID 生成函数

| 函数 | 说明 |
|---|---|
| `uuid_generate_v1()` | 版本 1：MAC 地址 + 时间戳 |
| `uuid_generate_v1mc()` | 版本 1，使用随机多播 MAC |
| `uuid_generate_v3(namespace uuid, name text)` | 版本 3：命名空间 + 名称的 MD5 哈希 |
| `uuid_generate_v4()` | 版本 4：完全随机 |
| `uuid_generate_v5(namespace uuid, name text)` | 版本 5：命名空间 + 名称的 SHA-1 哈希（优先于 v3） |

### 命名空间常量

| 函数 | 说明 |
|---|---|
| `uuid_nil()` | 空 UUID（全零） |
| `uuid_ns_dns()` | DNS 命名空间 |
| `uuid_ns_url()` | URL 命名空间 |
| `uuid_ns_oid()` | ISO OID 命名空间 |
| `uuid_ns_x500()` | X.500 DN 命名空间 |

### 示例

```sql
-- 随机 UUID（v4）
SELECT uuid_generate_v4();

-- 基于时间戳的 UUID（v1）
SELECT uuid_generate_v1();

-- 基于名称的确定性 UUID（v5，优先于 v3）
SELECT uuid_generate_v5(uuid_ns_url(), 'http://www.postgresql.org');

-- 用作默认主键
CREATE TABLE items (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name text
);
```

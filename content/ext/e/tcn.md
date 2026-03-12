---
title: "tcn"
linkTitle: "tcn"
description: "用触发器通知变更"
weight: 4920
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/tcn.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/tcn.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/tcn.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`tcn`**](/ext/e/tcn) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4920  | [**`tcn`**](/ext/e/tcn) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`permuteseq`](/ext/e/permuteseq) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION tcn;
```



## 用法

> [tcn: 通过 LISTEN/NOTIFY 触发变更通知](https://www.postgresql.org/docs/current/tcn.html)

提供在行变更时发送 NOTIFY 事件的触发器函数，携带变更行信息，实现异步变更跟踪。

```sql
CREATE EXTENSION tcn;
```

### 触发器函数

| 函数 | 说明 |
|---|---|
| `triggered_change_notification()` | 行变更时发送携带主键信息的 NOTIFY 通知 |

可选参数：自定义频道名称（默认为 `tcn`）。

### 通知载荷格式

```
"table_name",operation,"column"='value',"column"='value'
```

操作类型：`I`（INSERT）、`U`（UPDATE）、`D`（DELETE）。

### 示例

```sql
CREATE TABLE tcndata (
  a int NOT NULL,
  b date NOT NULL,
  c text,
  PRIMARY KEY (a, b)
);

-- 附加触发器
CREATE TRIGGER tcndata_tcn
  AFTER INSERT OR UPDATE OR DELETE ON tcndata
  FOR EACH ROW
  EXECUTE FUNCTION triggered_change_notification();

-- 监听通知
LISTEN tcn;

-- 变更会触发通知：
INSERT INTO tcndata VALUES (1, '2024-01-01', 'test');
-- 通知: "tcndata",I,"a"='1',"b"='2024-01-01'

UPDATE tcndata SET c = 'updated' WHERE a = 1;
-- 通知: "tcndata",U,"a"='1',"b"='2024-01-01'

DELETE FROM tcndata WHERE a = 1;
-- 通知: "tcndata",D,"a"='1',"b"='2024-01-01'

-- 使用自定义频道名称
CREATE TRIGGER my_trigger
  AFTER INSERT OR UPDATE OR DELETE ON my_table
  FOR EACH ROW
  EXECUTE FUNCTION triggered_change_notification('my_channel');
```

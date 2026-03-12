---
title: "plpgsql"
linkTitle: "plpgsql"
description: "PL/pgSQL 程序设计语言"
weight: 3280
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/plpgsql.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/plpgsql.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/plpgsql.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plpgsql`**](/ext/e/plpgsql) | `1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3280  | [**`plpgsql`**](/ext/e/plpgsql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pldbgapi`](/ext/e/pldbgapi) [`plprofiler`](/ext/e/plprofiler) [`pltclu`](/ext/e/pltclu) [`plv8`](/ext/e/plv8) [`plluau`](/ext/e/plluau) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`data_historization`](/ext/e/data_historization) [`ddl_historization`](/ext/e/ddl_historization) [`pg4ml`](/ext/e/pg4ml) [`pg_drop_events`](/ext/e/pg_drop_events) [`pg_profile`](/ext/e/pg_profile) [`pg_upless`](/ext/e/pg_upless) [`plpgsql_check`](/ext/e/plpgsql_check) [`powa`](/ext/e/powa) [`table_version`](/ext/e/table_version) [`unit`](/ext/e/unit) [`biscuit`](/ext/e/biscuit) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION plpgsql;
```



## 用法

> [plpgsql: PL/pgSQL 过程语言](https://www.postgresql.org/docs/current/plpgsql.html)

PL/pgSQL 是 PostgreSQL 的默认过程语言。它在 SQL 基础上扩展了控制结构、变量、游标和异常处理等功能。

```sql
CREATE EXTENSION plpgsql;  -- 默认已安装

-- 包含变量和控制流的基本函数
CREATE FUNCTION calculate_discount(price numeric, quantity integer) RETURNS numeric
LANGUAGE plpgsql AS $$
DECLARE
  discount numeric := 0;
BEGIN
  IF quantity >= 100 THEN
    discount := 0.20;
  ELSIF quantity >= 50 THEN
    discount := 0.10;
  ELSIF quantity >= 10 THEN
    discount := 0.05;
  END IF;
  RETURN price * quantity * (1 - discount);
END;
$$;

-- 循环与集合返回函数
CREATE FUNCTION fibonacci(n integer) RETURNS SETOF integer
LANGUAGE plpgsql AS $$
DECLARE
  a integer := 0;
  b integer := 1;
  tmp integer;
BEGIN
  FOR i IN 1..n LOOP
    RETURN NEXT a;
    tmp := a + b;
    a := b;
    b := tmp;
  END LOOP;
END;
$$;

SELECT * FROM fibonacci(10);

-- 异常处理
CREATE FUNCTION safe_divide(a numeric, b numeric) RETURNS numeric
LANGUAGE plpgsql AS $$
BEGIN
  RETURN a / b;
EXCEPTION
  WHEN division_by_zero THEN
    RAISE NOTICE '除以零，返回 NULL';
    RETURN NULL;
END;
$$;

-- 触发器函数
CREATE FUNCTION update_modified_column() RETURNS trigger
LANGUAGE plpgsql AS $$
BEGIN
  NEW.modified_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_modified
  BEFORE UPDATE ON my_table
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- 带事务控制的存储过程（PG 11+）
CREATE PROCEDURE batch_archive(batch_size integer)
LANGUAGE plpgsql AS $$
DECLARE
  rows_moved integer;
BEGIN
  LOOP
    WITH moved AS (
      DELETE FROM orders WHERE status = 'completed'
      RETURNING *
    )
    INSERT INTO orders_archive SELECT * FROM moved;

    GET DIAGNOSTICS rows_moved = ROW_COUNT;
    COMMIT;
    EXIT WHEN rows_moved < batch_size;
  END LOOP;
END;
$$;
```

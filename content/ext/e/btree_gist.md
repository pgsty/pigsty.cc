---
title: "btree_gist"
linkTitle: "btree_gist"
description: "用GiST索引常见数据类型"
weight: 4940
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/btree-gist.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/btree-gist.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/btree-gist.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`btree_gist`**](/ext/e/btree_gist) | `1.7` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4940  | [**`btree_gist`**](/ext/e/btree_gist) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`btree_gin`](/ext/e/btree_gin) [`unaccent`](/ext/e/unaccent) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`pg_trgm`](/ext/e/pg_trgm) [`prefix`](/ext/e/prefix) [`citext`](/ext/e/citext) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`emaj`](/ext/e/emaj) [`omni_auth`](/ext/e/omni_auth) [`periods`](/ext/e/periods) [`pgautofailover`](/ext/e/pgautofailover) [`powa`](/ext/e/powa) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.7</span> | <span class="ext-badge ext-badge--avail">1.7</span> | <span class="ext-badge ext-badge--avail">1.7</span> | <span class="ext-badge ext-badge--avail">1.7</span> | <span class="ext-badge ext-badge--avail">1.7</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION btree_gist;
```

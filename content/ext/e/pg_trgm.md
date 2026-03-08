---
title: "pg_trgm"
linkTitle: "pg_trgm"
description: "文本相似度测量函数与模糊检索"
weight: 2390
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgtrgm.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgtrgm.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgtrgm.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_trgm`**](/ext/e/pg_trgm) | `1.6` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2390  | [**`pg_trgm`**](/ext/e/pg_trgm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_similarity`](/ext/e/pg_similarity) [`pg_bigm`](/ext/e/pg_bigm) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`unaccent`](/ext/e/unaccent) [`smlar`](/ext/e/smlar) [`pgroonga_database`](/ext/e/pgroonga_database) [`rum`](/ext/e/rum) [`citext`](/ext/e/citext) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.6</span> | <span class="ext-badge ext-badge--avail">1.6</span> | <span class="ext-badge ext-badge--avail">1.6</span> | <span class="ext-badge ext-badge--avail">1.6</span> | <span class="ext-badge ext-badge--avail">1.6</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION pg_trgm;
```

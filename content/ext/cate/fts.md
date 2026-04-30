---
title: "FTS - 全文检索"
linkTitle: "FTS"
description: "全文检索扩展：ES 替代 pg_search，BM25，中文分词，欧洲语言分词字典 hunspell，模糊检索，2-gram/3-gram 索引。"
weight: 821
icon: fas fa-magnifying-glass
---

## 扩展列表

共有 **24** 个扩展，位于 **23** 个扩展包中。

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`pg_search`](/ext/e/pg_search) | [`pg_search`](https://github.com/paradedb/paradedb/tree/dev/pg_search) | `0.23.1` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | ParadeDB BM25算法全文检索插件，ES全文检索 |
| [`pgroonga`](/ext/e/pgroonga) | [`pgroonga`](https://github.com/pgroonga/pgroonga) | `4.0.4` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用Groonga，面向所有语言的高速全文检索平台 |
| [`pgroonga_database`](/ext/e/pgroonga_database) | [`pgroonga`](https://github.com/pgroonga/pgroonga) | `4.0.4` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PGGroonga 数据库管理模块 |
| [`pg_bigm`](/ext/e/pg_bigm) | [`pg_bigm`](https://github.com/pgbigm/pg_bigm) | `1.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 基于二字组的多语言全文检索扩展 |
| [`zhparser`](/ext/e/zhparser) | [`zhparser`](https://github.com/amutu/zhparser) | `2.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 中文分词，全文搜索解析器 |
| [`pg_bestmatch`](/ext/e/pg_bestmatch) | [`pg_bestmatch`](https://github.com/tensorchord/pg_bestmatch.rs) | `0.0.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 在数据库内生成BM25稀疏向量 |
| [`vchord_bm25`](/ext/e/vchord_bm25) | [`vchord_bm25`](https://github.com/tensorchord/VectorChord-bm25) | `0.3.0` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | BM25排序算法 |
| [`pg_tokenizer`](/ext/e/pg_tokenizer) | [`pg_tokenizer`](https://github.com/tensorchord/pg_tokenizer.rs) | `0.1.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 用于全文检索的分词器 |
| [`biscuit`](/ext/e/biscuit) | [`pg_biscuit`](https://github.com/CrystallineCore/Biscuit) | `2.2.2` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用IAM的高性能文本模式匹配 |
| [`pg_textsearch`](/ext/e/pg_textsearch) | [`pg_textsearch`](https://github.com/timescale/pg_textsearch) | `1.0.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 带有BM25排序的全文搜索扩展 |
| [`pg_pinyin`](/ext/e/pg_pinyin) | [`pg_pinyin`](https://github.com/aiyou178/pg_pinyin) | `0.0.2` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | PostgreSQL 拼音转写与检索辅助扩展 |
| [`pg_kazsearch`](/ext/e/pg_kazsearch) | [`pg_kazsearch`](https://github.com/darkhanakh/pg-kazsearch) | `0.1.0` | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | PostgreSQL 哈萨克语全文检索扩展 |
| [`hunspell_cs_cz`](/ext/e/hunspell_cs_cz) | [`hunspell_cs_cz`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell捷克语全文检索词典 |
| [`hunspell_de_de`](/ext/e/hunspell_de_de) | [`hunspell_de_de`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell德语全文检索词典 |
| [`hunspell_en_us`](/ext/e/hunspell_en_us) | [`hunspell_en_us`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell英语全文检索词典 |
| [`hunspell_fr`](/ext/e/hunspell_fr) | [`hunspell_fr`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell法语全文检索词典 |
| [`hunspell_ne_np`](/ext/e/hunspell_ne_np) | [`hunspell_ne_np`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell尼泊尔语全文检索词典 |
| [`hunspell_nl_nl`](/ext/e/hunspell_nl_nl) | [`hunspell_nl_nl`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell荷兰语全文检索词典 |
| [`hunspell_nn_no`](/ext/e/hunspell_nn_no) | [`hunspell_nn_no`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell挪威语全文检索词典 |
| [`hunspell_pt_pt`](/ext/e/hunspell_pt_pt) | [`hunspell_pt_pt`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell葡萄牙语全文检索词典 |
| [`hunspell_ru_ru`](/ext/e/hunspell_ru_ru) | [`hunspell_ru_ru`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell俄语全文检索词典 |
| [`hunspell_ru_ru_aot`](/ext/e/hunspell_ru_ru_aot) | [`hunspell_ru_ru_aot`](https://github.com/postgrespro/hunspell_dicts) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | Hunspell俄语全文检索词典（来自AOT.ru小组） |
| [`fuzzystrmatch`](/ext/e/fuzzystrmatch) | [`fuzzystrmatch`](https://www.postgresql.org/docs/current/fuzzystrmatch.html) | `1.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 确定字符串之间的相似性和距离 |
| [`pg_trgm`](/ext/e/pg_trgm) | [`pg_trgm`](https://www.postgresql.org/docs/current/pgtrgm.html) | `1.6` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 文本相似度测量函数与模糊检索 |
{.ext-table}


---------

## pg_search {#pg_search}

[**`pg_search`**](/ext/e/pg_search) - `0.23.1` : ParadeDB BM25算法全文检索插件，ES全文检索

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_search`](/ext/e/pg_search) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_search`](https://github.com/paradedb/paradedb/tree/dev/pg_search) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_search_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-pg-search` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pgroonga {#pgroonga}

[**`pgroonga`**](/ext/e/pgroonga) - `4.0.4` : 使用Groonga，面向所有语言的高速全文检索平台

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgroonga`](/ext/e/pgroonga) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgroonga`](https://github.com/pgroonga/pgroonga) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgroonga_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgroonga` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pgroonga_database {#pgroonga_database}

[**`pgroonga`**](/ext/e/pgroonga_database) - `4.0.4` : PGGroonga 数据库管理模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgroonga_database`](/ext/e/pgroonga_database) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgroonga`](https://github.com/pgroonga/pgroonga) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgroonga_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgroonga` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_bigm {#pg_bigm}

[**`pg_bigm`**](/ext/e/pg_bigm) - `1.2` : 基于二字组的多语言全文检索扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_bigm`](/ext/e/pg_bigm) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_bigm`](https://github.com/pgbigm/pg_bigm) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_bigm_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-bigm` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## zhparser {#zhparser}

[**`zhparser`**](/ext/e/zhparser) - `2.3` : 中文分词，全文搜索解析器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`zhparser`](/ext/e/zhparser) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`zhparser`](https://github.com/amutu/zhparser) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `zhparser_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-zhparser` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_bestmatch {#pg_bestmatch}

[**`pg_bestmatch`**](/ext/e/pg_bestmatch) - `0.0.2` : 在数据库内生成BM25稀疏向量

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_bestmatch`](/ext/e/pg_bestmatch) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_bestmatch`](https://github.com/tensorchord/pg_bestmatch.rs) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_bestmatch_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-bestmatch` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## vchord_bm25 {#vchord_bm25}

[**`vchord_bm25`**](/ext/e/vchord_bm25) - `0.3.0` : BM25排序算法

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`vchord_bm25`](/ext/e/vchord_bm25) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`vchord_bm25`](https://github.com/tensorchord/VectorChord-bm25) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `vchord_bm25_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-vchord-bm25` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_tokenizer {#pg_tokenizer}

[**`pg_tokenizer`**](/ext/e/pg_tokenizer) - `0.1.1` : 用于全文检索的分词器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_tokenizer`](/ext/e/pg_tokenizer) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_tokenizer`](https://github.com/tensorchord/pg_tokenizer.rs) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_tokenizer_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-tokenizer` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## biscuit {#biscuit}

[**`pg_biscuit`**](/ext/e/biscuit) - `2.2.2` : 使用IAM的高性能文本模式匹配

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`biscuit`](/ext/e/biscuit) | **el8** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **扩展包** | [`pg_biscuit`](https://github.com/CrystallineCore/Biscuit) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_biscuit_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-biscuit` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_textsearch {#pg_textsearch}

[**`pg_textsearch`**](/ext/e/pg_textsearch) - `1.0.0` : 带有BM25排序的全文搜索扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_textsearch`](/ext/e/pg_textsearch) | **el8** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **扩展包** | [`pg_textsearch`](https://github.com/timescale/pg_textsearch) | **el9** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **RPM** | `pg_textsearch_$v` | **el10** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **DEB** | `postgresql-$v-textsearch` | **d12** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_pinyin {#pg_pinyin}

[**`pg_pinyin`**](/ext/e/pg_pinyin) - `0.0.2` : PostgreSQL 拼音转写与检索辅助扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_pinyin`](/ext/e/pg_pinyin) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_pinyin`](https://github.com/aiyou178/pg_pinyin) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_pinyin_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pinyin` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_kazsearch {#pg_kazsearch}

[**`pg_kazsearch`**](/ext/e/pg_kazsearch) - `0.1.0` : PostgreSQL 哈萨克语全文检索扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_kazsearch`](/ext/e/pg_kazsearch) | **el8** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **扩展包** | [`pg_kazsearch`](https://github.com/darkhanakh/pg-kazsearch) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_kazsearch_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-kazsearch` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_cs_cz {#hunspell_cs_cz}

[**`hunspell_cs_cz`**](/ext/e/hunspell_cs_cz) - `1.0` : Hunspell捷克语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_cs_cz`](/ext/e/hunspell_cs_cz) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_cs_cz`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_cs_cz_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-cs-cz` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_de_de {#hunspell_de_de}

[**`hunspell_de_de`**](/ext/e/hunspell_de_de) - `1.0` : Hunspell德语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_de_de`](/ext/e/hunspell_de_de) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_de_de`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_de_de_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-de-de` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_en_us {#hunspell_en_us}

[**`hunspell_en_us`**](/ext/e/hunspell_en_us) - `1.0` : Hunspell英语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_en_us`](/ext/e/hunspell_en_us) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_en_us`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_en_us_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-en-us` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_fr {#hunspell_fr}

[**`hunspell_fr`**](/ext/e/hunspell_fr) - `1.0` : Hunspell法语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_fr`](/ext/e/hunspell_fr) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_fr`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_fr_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-fr` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_ne_np {#hunspell_ne_np}

[**`hunspell_ne_np`**](/ext/e/hunspell_ne_np) - `1.0` : Hunspell尼泊尔语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_ne_np`](/ext/e/hunspell_ne_np) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_ne_np`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_ne_np_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-ne-np` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_nl_nl {#hunspell_nl_nl}

[**`hunspell_nl_nl`**](/ext/e/hunspell_nl_nl) - `1.0` : Hunspell荷兰语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_nl_nl`](/ext/e/hunspell_nl_nl) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_nl_nl`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_nl_nl_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-nl-nl` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_nn_no {#hunspell_nn_no}

[**`hunspell_nn_no`**](/ext/e/hunspell_nn_no) - `1.0` : Hunspell挪威语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_nn_no`](/ext/e/hunspell_nn_no) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_nn_no`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_nn_no_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-nn-no` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_pt_pt {#hunspell_pt_pt}

[**`hunspell_pt_pt`**](/ext/e/hunspell_pt_pt) - `1.0` : Hunspell葡萄牙语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_pt_pt`](/ext/e/hunspell_pt_pt) | **el8** | - | - |
| **扩展包** | [`hunspell_pt_pt`](https://github.com/postgrespro/hunspell_dicts) | **el9** | - | - |
| **RPM** | `hunspell_pt_pt_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-hunspell-pt-pt` | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_ru_ru {#hunspell_ru_ru}

[**`hunspell_ru_ru`**](/ext/e/hunspell_ru_ru) - `1.0` : Hunspell俄语全文检索词典

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_ru_ru`](/ext/e/hunspell_ru_ru) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_ru_ru`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_ru_ru_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-ru-ru` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hunspell_ru_ru_aot {#hunspell_ru_ru_aot}

[**`hunspell_ru_ru_aot`**](/ext/e/hunspell_ru_ru_aot) - `1.0` : Hunspell俄语全文检索词典（来自AOT.ru小组）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hunspell_ru_ru_aot`](/ext/e/hunspell_ru_ru_aot) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hunspell_ru_ru_aot`](https://github.com/postgrespro/hunspell_dicts) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hunspell_ru_ru_aot_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hunspell-ru-ru-aot` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## fuzzystrmatch {#fuzzystrmatch}

[**`fuzzystrmatch`**](/ext/e/fuzzystrmatch) - `1.2` : 确定字符串之间的相似性和距离

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`fuzzystrmatch`](/ext/e/fuzzystrmatch) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`fuzzystrmatch`](https://www.postgresql.org/docs/current/fuzzystrmatch.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_trgm {#pg_trgm}

[**`pg_trgm`**](/ext/e/pg_trgm) - `1.6` : 文本相似度测量函数与模糊检索

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_trgm`](/ext/e/pg_trgm) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_trgm`](https://www.postgresql.org/docs/current/pgtrgm.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


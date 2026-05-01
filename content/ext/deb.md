---
title: "DEB 列表"
description: "在 Debian/Ubuntu 系统上可用的 PostgreSQL 扩展 DEB 二进制包"
weight: 140
icon: fa-brands fa-debian
---

在 Debian/Ubuntu 系统上共有 **495** 个 PostgreSQL 扩展可用，共计 **409** 个扩展包。

其中 **2** 个扩展包是 Debian/Ubuntu 独有，**15** 个 RPM 扩展包缺少对应的 DEB 包。

| **分类** | **All** | **PGDG** | **PIGSTY** | **CONTRIB** | | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--------:|:------:|:--------:|:----------:|:-----------:|:---:|:--------:|:--------:|:--------:|:--------:|:--------:|
| [**EXT**](/ext/deb) | 495 | 107 | 317 | 71 | | 472 | 480 | 469 | 462 | 446 |
| [**PKG**](/ext/repo) | 409 | 92 | 256 | 0 | | 389 | 399 | 391 | 385 | 372 |
{.ext-table}


--------

## TIME

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`timescaledb`](/ext/e/timescaledb) | `2.26.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-timescaledb-tsl` | {{< pgvers "18,17,16,15" >}} | - |
| [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) | `1.22.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-timescaledb-toolkit` | {{< pgvers "18,17,16,15" >}} | - |
| [`pg_timeseries`](/ext/e/timeseries) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-timeseries` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-cron`, `postgresql-$v-partman` |
| [`periods`](/ext/e/periods) | `1.2.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-periods` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`temporal_tables`](/ext/e/temporal_tables) | `1.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-temporal-tables` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`emaj`](/ext/e/emaj) | `4.7.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-emaj` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`table_version`](/ext/e/table_version) | `1.11.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-table-version` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_cron`](/ext/e/pg_cron) | `1.6.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-cron` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_task`](/ext/e/pg_task) | `2.1.12` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-task` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_later`](/ext/e/pg_later) | `0.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-later` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmq` |
| [`pg_dispatch`](/ext/e/pg_dispatch) | `0.1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-dispatch` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-cron` |
| [`pg_background`](/ext/e/pg_background) | `1.9.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-background` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_when`](/ext/e/pg_when) | `0.1.9` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-when` | {{< pgvers "18,17,16,15,14,13" >}} | - |
{.ext-table}


--------

## GIS

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`postgis`](/ext/e/postgis) | `3.6.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-postgis-3` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgrouting`](/ext/e/pgrouting) | `4.0.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgrouting` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pointcloud`](/ext/e/pointcloud) | `1.2.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pointcloud` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_h3`](/ext/e/h3) | `4.2.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-h3` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`q3c`](/ext/e/q3c) | `2.0.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-q3c` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ogr_fdw`](/ext/e/ogr_fdw) | `1.1.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-ogr-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`geoip`](/ext/e/geoip) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-geoip` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_polyline`](/ext/e/pg_polyline) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-polyline` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_eviltransform`](/ext/e/pg_eviltransform) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-eviltransform` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-postgis` |
| [`pg_geohash`](/ext/e/pg_geohash) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-geohash` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pghydro`](/ext/e/pghydro) | `6.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pghydro` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-postgis-3` |
| [`mobilitydb`](/ext/e/mobilitydb) | `1.3.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-mobilitydb` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tzf`](/ext/e/tzf) | `0.2.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-tzf` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## RAG

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pgvector`](/ext/e/vector) | `0.8.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgvector` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`vchord`](/ext/e/vchord) | `1.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-vchord` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgvector` |
| [`pgvectorscale`](/ext/e/vectorscale) | `0.9.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgvectorscale` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgvector` |
| [`pg_vectorize`](/ext/e/vectorize) | `0.26.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-vectorize` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmq`, `postgresql-$v-pg-cron`, `postgresql-$v-pgvector` |
| [`pg_similarity`](/ext/e/pg_similarity) | `1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-similarity` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_rrf`](/ext/e/pg_rrf) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-rrf` | {{< pgvers "17,16,15,14" >}} | - |
| [`smlar`](/ext/e/smlar) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-smlar` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_summarize`](/ext/e/pg_summarize) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-summarize` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tiktoken`](/ext/e/pg_tiktoken) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-tiktoken` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg4ml`](/ext/e/pg4ml) | `2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg4ml` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgml`](/ext/e/pgml) | `2.10.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgml` | {{< pgvers "17,16,15,14" >}} | - |
{.ext-table}


--------

## FTS

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_search`](/ext/e/pg_search) | `0.23.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-search` | {{< pgvers "18,17,16,15" >}} | - |
| [`pgroonga`](/ext/e/pgroonga) | `4.0.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgroonga` | {{< pgvers "18,17,16,15,14" >}} | `libgroonga0` |
| [`pg_bigm`](/ext/e/pg_bigm) | `1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-bigm` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`zhparser`](/ext/e/zhparser) | `2.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-zhparser` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_bestmatch`](/ext/e/pg_bestmatch) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-bestmatch` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`vchord_bm25`](/ext/e/vchord_bm25) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-vchord-bm25` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tokenizer`](/ext/e/pg_tokenizer) | `0.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-tokenizer` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_biscuit`](/ext/e/biscuit) | `2.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-biscuit` | {{< pgvers "18,17,16" >}} | - |
| [`pg_textsearch`](/ext/e/pg_textsearch) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-textsearch` | {{< pgvers "18,17" >}} | - |
| [`pg_pinyin`](/ext/e/pg_pinyin) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pinyin` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_kazsearch`](/ext/e/pg_kazsearch) | `2.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-kazsearch` | {{< pgvers "18,17,16" >}} | - |
| [`hunspell_cs_cz`](/ext/e/hunspell_cs_cz) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-cs-cz` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_de_de`](/ext/e/hunspell_de_de) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-de-de` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_en_us`](/ext/e/hunspell_en_us) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-en-us` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_fr`](/ext/e/hunspell_fr) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-fr` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_ne_np`](/ext/e/hunspell_ne_np) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-ne-np` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_nl_nl`](/ext/e/hunspell_nl_nl) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-nl-nl` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_nn_no`](/ext/e/hunspell_nn_no) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-nn-no` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_pt_pt`](/ext/e/hunspell_pt_pt) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-pt-pt` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_ru_ru`](/ext/e/hunspell_ru_ru) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-ru-ru` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_ru_ru_aot`](/ext/e/hunspell_ru_ru_aot) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hunspell-ru-ru-aot` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## OLAP

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`citus`](/ext/e/citus) | `14.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-citus` | {{< pgvers "18,17,16" >}} | - |
| [`hydra`](/ext/e/columnar) | `1.1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hydra` | {{< pgvers "16,15,14" >}} | - |
| [`pg_analytics`](/ext/e/pg_analytics) | `0.3.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-analytics` | {{< pgvers "17,16,15,14" >}} | - |
| [`pg_duckdb`](/ext/e/pg_duckdb) | `1.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-duckdb` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_mooncake`](/ext/e/pg_mooncake) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-mooncake` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`storage_engine`](/ext/e/storage_engine) | `1.3.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-storage-engine` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_clickhouse`](/ext/e/pg_clickhouse) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-clickhouse` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`duckdb_fdw`](/ext/e/duckdb_fdw) | `1.4.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-duckdb-fdw` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-duckdb` |
| [`pg_parquet`](/ext/e/pg_parquet) | `0.5.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-parquet` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_fkpart`](/ext/e/pg_fkpart) | `1.7.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-fkpart` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_partman`](/ext/e/pg_partman) | `5.4.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-partman` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plproxy`](/ext/e/plproxy) | `2.11.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-plproxy` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## FEAT

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`age`](/ext/e/age) | `1.7.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-age` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_liquid`](/ext/e/pg_liquid) | `0.1.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-liquid` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`one_sparse`](/ext/e/onesparse) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-onesparse` | {{< pgvers "18" >}} | `libgraphblas10`, `liblagraph1`, `liblagraphx1` |
| [`pgq`](/ext/e/pgq) | `3.5.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgq3` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgmq`](/ext/e/pgmq) | `1.11.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgmq` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgmb`](/ext/e/pgmb) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgmb` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-cron`, `postgresql-$v-http` |
| [`ulak`](/ext/e/ulak) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-ulak` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hll`](/ext/e/hll) | `2.19` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-hll` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`rum`](/ext/e/rum) | `1.3.15` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-rum` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ai_query`](/ext/e/pg_ai_query) | `0.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-ai-query` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ttl_index`](/ext/e/pg_ttl_index) | `3.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-ttl-index` | {{< pgvers "18,17,16,15" >}} | - |
| [`pg_graphql`](/ext/e/pg_graphql) | `1.5.12` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-graphql` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_jsonschema`](/ext/e/pg_jsonschema) | `0.3.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-jsonschema` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`jsquery`](/ext/e/jsquery) | `1.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-jsquery` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_hint_plan`](/ext/e/pg_hint_plan) | `1.8.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-hint-plan` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hypopg`](/ext/e/hypopg) | `1.4.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-hypopg` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`index_advisor`](/ext/e/index_advisor) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-index-advisor` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_plan_filter`](/ext/e/plan_filter) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-plan-filter` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_variables`](/ext/e/pg_variables) | `1.2.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-variables` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`imgsmlr`](/ext/e/imgsmlr) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-imgsmlr` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ivm`](/ext/e/pg_ivm) | `1.14` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-ivm` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_incremental`](/ext/e/pg_incremental) | `1.5.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-incremental` | {{< pgvers "18,17,16" >}} | - |
| [`pg_trickle`](/ext/e/pg_trickle) | `0.40.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-trickle` | {{< pgvers "18" >}} | - |
| [`provsql`](/ext/e/provsql) | `1.2.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-provsql` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`orioledb`](/ext/e/orioledb) | `1.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `oriolepg-$v-orioledb` | {{< pgvers "17" >}} | `oriolepg-$v` |
| [`pg_cardano`](/ext/e/pg_cardano) | `1.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-cardano` | {{< pgvers "18,17,16,15" >}} | - |
| [`rdkit`](/ext/e/rdkit) | `202503.6` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-rdkit` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`omnigres`](/ext/e/omni) | `0.2.14` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-omnigres` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## LANG

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_tle`](/ext/e/pg_tle) | `1.5.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-tle` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plv8`](/ext/e/plv8) | `3.2.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-plv8` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pljs`](/ext/e/pljs) | `1.0.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pljs` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pllua`](/ext/e/pllua) | `2.0.12` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pllua` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plprql`](/ext/e/plprql) | `18.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-plprql` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pldebugger`](/ext/e/pldbgapi) | `1.9` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pldebugger` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plpgsql_check`](/ext/e/plpgsql_check) | `2.8.11` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-plpgsql-check` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plprofiler`](/ext/e/plprofiler) | `4.2.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-plprofiler` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plsh`](/ext/e/plsh) | `1.20220917` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-plsh` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pljava`](/ext/e/pljava) | `1.6.9` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pljava` | {{< pgvers "17,16,15,14" >}} | - |
| [`plr`](/ext/e/plr) | `8.4.8` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-plr` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plxslt`](/ext/e/plxslt) | `0.20140221` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-plxslt` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgtap`](/ext/e/pgtap) | `1.3.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgtap` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_regresql`](/ext/e/pg_regresql) | `2.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-regresql` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## TYPE

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_prefix`](/ext/e/prefix) | `1.2.11` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-prefix` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_semver`](/ext/e/semver) | `0.41.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-semver` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_text_semver`](/ext/e/pg_text_semver) | `1.2.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-text-semver` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgunit`](/ext/e/unit) | `7.10` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-unit` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgpdf`](/ext/e/pgpdf) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgpdf` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pglite_fusion`](/ext/e/pglite_fusion) | `0.0.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pglite-fusion` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`md5hash`](/ext/e/md5hash) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-md5hash` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`asn1oid`](/ext/e/asn1oid) | `1.6` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-asn1oid` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_roaringbitmap`](/ext/e/roaringbitmap) | `1.1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-roaringbitmap` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgfaceting`](/ext/e/pgfaceting) | `0.2.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgfaceting` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsphere`](/ext/e/pg_sphere) | `1.5.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgsphere` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_country`](/ext/e/country) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-country` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_xenophile`](/ext/e/pg_xenophile) | `0.8.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-xenophile` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_currency`](/ext/e/currency) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-currency` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgcollection`](/ext/e/collection) | `2.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-collection` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgmp`](/ext/e/pgmp) | `1.0.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgmp` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`numeral`](/ext/e/numeral) | `1.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-numeral` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_rational`](/ext/e/pg_rational) | `0.0.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-rational` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pguint`](/ext/e/uint) | `1.20250815` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pguint` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_uint128`](/ext/e/uint128) | `1.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-uint128` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hashtypes`](/ext/e/hashtypes) | `0.1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-hashtypes` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ip4r`](/ext/e/ip4r) | `2.4.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-ip4r` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_uri`](/ext/e/uri) | `1.20251029` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-uri` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_emailaddr`](/ext/e/emailaddr) | `0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-emailaddr` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_acl`](/ext/e/acl) | `1.0.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-acl` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`debversion`](/ext/e/debversion) | `1.2.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-debversion` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_duration`](/ext/e/pg_duration) | `1.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-duration` | {{< pgvers "18,17" >}} | - |
| [`pg_bikram_sambat`](/ext/e/pg_bikram_sambat) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-bikram-sambat` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_rrule`](/ext/e/pg_rrule) | `0.3.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-rrule` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgcalendar`](/ext/e/pgcalendar) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgcalendar` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`timestamp9`](/ext/e/timestamp9) | `1.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-timestamp9` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgbson`](/ext/e/pgbson) | `2.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgbson` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`chkpass`](/ext/e/chkpass) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-chkpass` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## UTIL

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_gzip`](/ext/e/gzip) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-gzip` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_bzip`](/ext/e/bzip) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-bzip` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_zstd`](/ext/e/zstd) | `1.1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-zstd` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_http`](/ext/e/http) | `1.7.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-http` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_net`](/ext/e/pg_net) | `0.20.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-net` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_curl`](/ext/e/pg_curl) | `2.4.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-curl` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_retry`](/ext/e/pg_retry) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-retry` | {{< pgvers "18,17" >}} | - |
| [`pg_fsql`](/ext/e/pg_fsql) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-fsql` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_protobuf`](/ext/e/pg_protobuf) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-protobuf` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgproto`](/ext/e/pgproto) | `0.5.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgproto` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pglock`](/ext/e/pglock) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pglock` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-cron` |
| [`pgjq`](/ext/e/pgjq) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgjq` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgjwt`](/ext/e/pgjwt) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgjwt` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_smtp_client`](/ext/e/pg_smtp_client) | `0.2.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-smtp-client` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_html5_email_address`](/ext/e/pg_html5_email_address) | `1.2.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-html5-email-address` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`url_encode`](/ext/e/url_encode) | `1.2.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-url-encode` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsql_tweaks`](/ext/e/pgsql_tweaks) | `1.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgsql-tweaks` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_extra_time`](/ext/e/pg_extra_time) | `2.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-extra-time` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgpcre`](/ext/e/pgpcre) | `0.20190509` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgpcre` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`re2`](/ext/e/re2) | `0.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-re2` | {{< pgvers "18,17,16" >}} | - |
| [`icu_ext`](/ext/e/icu_ext) | `1.10.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-icu-ext` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgqr`](/ext/e/pgqr) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgqr` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_envvar`](/ext/e/envvar) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-envvar` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_byteamagic`](/ext/e/byteamagic) | `0.2.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-byteamagic` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`floatfile`](/ext/e/floatfile) | `1.3.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-floatfile` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`external_file`](/ext/e/external_file) | `1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-external-file` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_render`](/ext/e/pg_render) | `0.1.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-render` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_readme`](/ext/e/pg_readme) | `0.7.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-readme` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ddl_historization`](/ext/e/ddl_historization) | `0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-ddl-historization` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`data_historization`](/ext/e/data_historization) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-data-historization` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_schedoc`](/ext/e/schedoc) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-schedoc` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ddl-historization` |
| [`pg_isok`](/ext/e/pg_isok) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-isok` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_hashlib`](/ext/e/hashlib) | `1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-hashlib` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_xxhash`](/ext/e/xxhash) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-xxhash` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`shacrypt`](/ext/e/shacrypt) | `1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-shacrypt` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`cryptint`](/ext/e/cryptint) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-cryptint` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ecdsa`](/ext/e/pguecc) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-ecdsa` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsparql`](/ext/e/sparql) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgsparql` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## FUNC

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_idkit`](/ext/e/pg_idkit) | `0.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-idkit` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgx_ulid`](/ext/e/pgx_ulid) | `0.2.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgx-ulid` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_uuidv7`](/ext/e/pg_uuidv7) | `1.7.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-uuidv7` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`permuteseq`](/ext/e/permuteseq) | `1.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-permuteseq` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_hashids`](/ext/e/pg_hashids) | `1.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-hashids` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_slug_gen`](/ext/e/pg_slug_gen) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-slug-gen` | {{< pgvers "18,17,16,15" >}} | - |
| [`sequential_uuids`](/ext/e/sequential_uuids) | `1.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-sequential-uuids` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_typeid`](/ext/e/typeid) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-typeid` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`snowflake`](/ext/e/snowflake) | `2.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgedge-$v-snowflake` | {{< pgvers "17" >}} | `pgedge-$v` |
| [`topn`](/ext/e/topn) | `2.7.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-topn` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`quantile`](/ext/e/quantile) | `1.1.8` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-quantile` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`lower_quantile`](/ext/e/lower_quantile) | `1.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-lower-quantile` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`count_distinct`](/ext/e/count_distinct) | `3.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-count-distinct` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`omnisketch`](/ext/e/omnisketch) | `1.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-omnisketch` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ddsketch`](/ext/e/ddsketch) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-ddsketch` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`vasco`](/ext/e/vasco) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-vasco` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgxicor`](/ext/e/xicor) | `0.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgxicor` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_weighted_statistics`](/ext/e/weighted_statistics) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-weighted-statistics` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`datasketches`](/ext/e/datasketches) | `1.7.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-datasketches` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`tdigest`](/ext/e/tdigest) | `1.4.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-tdigest` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`first_last_agg`](/ext/e/first_last_agg) | `0.1.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-first-last-agg` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`extra_window_functions`](/ext/e/extra_window_functions) | `1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-extra-window-functions` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`floatvec`](/ext/e/floatvec) | `1.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-floatvec` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`aggs_for_vecs`](/ext/e/aggs_for_vecs) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-aggs-for-vecs` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`aggs_for_arrays`](/ext/e/aggs_for_arrays) | `1.3.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-aggs-for-arrays` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_csv`](/ext/e/pg_csv) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-csv` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_arraymath`](/ext/e/arraymath) | `1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-arraymath` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_math`](/ext/e/pg_math) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-math` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_random`](/ext/e/random) | `2.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-random` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_base36`](/ext/e/base36) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-base36` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_base62`](/ext/e/base62) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-base62` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_base58`](/ext/e/pg_base58) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-base58` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_financial`](/ext/e/financial) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-financial` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_accumulator`](/ext/e/pg_accumulator) | `1.1.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-accumulator` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_convert`](/ext/e/convert) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-convert` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`parray_gin`](/ext/e/parray_gin) | `1.5.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-parray-gin` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## ADMIN

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_repack`](/ext/e/pg_repack) | `1.5.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-repack` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_rewrite`](/ext/e/pg_rewrite) | `2.1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-rewrite` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_query_rewrite`](/ext/e/pg_query_rewrite) | `0.0.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-query-rewrite` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_squeeze`](/ext/e/pg_squeeze) | `1.9.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-squeeze` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_dirtyread`](/ext/e/pg_dirtyread) | `2.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-dirtyread` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgfincore`](/ext/e/pgfincore) | `1.3.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgfincore` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_cooldown`](/ext/e/pg_cooldown) | `0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-cooldown` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ddlx`](/ext/e/ddlx) | `0.30` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-ddlx` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pglinter`](/ext/e/pglinter) | `1.1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pglinter` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_prioritize`](/ext/e/prioritize) | `1.0.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-prioritize` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_checksums`](/ext/e/pg_checksums) | `1.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-checksums` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_readonly`](/ext/e/pg_readonly) | `1.0.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-readonly` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgdd`](/ext/e/pgdd) | `0.6.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgdd` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_permissions`](/ext/e/pg_permissions) | `1.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-permissions` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgautofailover`](/ext/e/pgautofailover) | `2.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-auto-failover` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_catcheck`](/ext/e/pg_catcheck) | `1.6.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-catcheck` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`preprepare`](/ext/e/pre_prepare) | `0.9` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-preprepare` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_upless`](/ext/e/pg_upless) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-upless` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgcozy`](/ext/e/pgcozy) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgcozy` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_orphaned`](/ext/e/pg_orphaned) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-orphaned` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_crash`](/ext/e/pg_crash) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-crash` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-cheat-funcs` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_fio`](/ext/e/fio) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-fio` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_qos`](/ext/e/qos) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-qos` | {{< pgvers "18,17,16,15" >}} | - |
| [`pg_pathcheck`](/ext/e/pg_pathcheck) | `0.9.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-pathcheck` | {{< pgvers "18,17" >}} | - |
| [`pg_savior`](/ext/e/pg_savior) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-savior` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`safeupdate`](/ext/e/safeupdate) | `1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-safeupdate` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_strict`](/ext/e/pg_strict) | `1.0.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-strict` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_drop_events`](/ext/e/pg_drop_events) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-drop-events` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`table_log`](/ext/e/table_log) | `0.6.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-tablelog` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgelog`](/ext/e/pgelog) | `1.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgelog` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-variables` |
| [`pgagent`](/ext/e/pgagent) | `4.2.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgagent` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgpool`](/ext/e/pgpool_adm) | `4.7.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgpool2` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## STAT

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_profile`](/ext/e/pg_profile) | `4.11` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-profile` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tracing`](/ext/e/pg_tracing) | `0.1.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-tracing` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_stat_ch`](/ext/e/pg_stat_ch) | `0.3.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-stat-ch` | {{< pgvers "18,17,16" >}} | - |
| [`pg_show_plans`](/ext/e/pg_show_plans) | `2.1.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-show-plans` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_stat_kcache`](/ext/e/pg_stat_kcache) | `2.3.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-stat-kcache` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_stat_monitor`](/ext/e/pg_stat_monitor) | `2.3.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-stat-monitor` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_qualstats`](/ext/e/pg_qualstats) | `2.1.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-qualstats` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_store_plans`](/ext/e/pg_store_plans) | `1.10` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-store-plan` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_track_settings`](/ext/e/pg_track_settings) | `2.1.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-track-settings` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_track_optimizer`](/ext/e/pg_track_optimizer) | `0.9.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-track-optimizer` | {{< pgvers "18,17" >}} | - |
| [`pg_wait_sampling`](/ext/e/pg_wait_sampling) | `1.1.9` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-wait-sampling` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_datasentinel`](/ext/e/pg_datasentinel) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-datasentinel` | {{< pgvers "18,17,16,15" >}} | - |
| [`pgsentinel`](/ext/e/pgsentinel) | `1.4.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgsentinel` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`system_stats`](/ext/e/system_stats) | `4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-system-stats` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_meta`](/ext/e/meta) | `0.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-meta` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgnodemx`](/ext/e/pgnodemx) | `1.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgnodemx` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_sqlog`](/ext/e/pg_sqlog) | `1.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-sqlog` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`bgw_replstatus`](/ext/e/bgw_replstatus) | `1.0.8` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-bgw-replstatus` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgmeminfo`](/ext/e/pgmeminfo) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgmeminfo` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`toastinfo`](/ext/e/toastinfo) | `1.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-toastinfo` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_explain_ui`](/ext/e/explain_ui) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-explain-ui` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_relusage`](/ext/e/pg_relusage) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-relusage` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pagevis`](/ext/e/pagevis) | `0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pagevis` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`powa`](/ext/e/powa) | `5.1.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-powa` | {{< pgvers "17,16,15,14" >}} | - |
{.ext-table}


--------

## SEC

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) | `3.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-passwordcheck-cracklib` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`supautils`](/ext/e/supautils) | `3.2.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-supautils` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsodium`](/ext/e/pgsodium) | `3.1.9` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgsodium` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`column_encrypt`](/ext/e/column_encrypt) | `4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-column-encrypt` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_vault`](/ext/e/supabase_vault) | `0.3.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-vault` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_session_jwt`](/ext/e/pg_session_jwt) | `0.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-session-jwt` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_anon`](/ext/e/anon) | `3.0.13` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-anon` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsmcrypto`](/ext/e/pgsmcrypto) | `0.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgsmcrypto` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_enigma`](/ext/e/pg_enigma) | `0.5.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-enigma` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgaudit`](/ext/e/pgaudit) | `18.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgaudit` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgauditlogtofile`](/ext/e/pgauditlogtofile) | `1.8.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgauditlogtofile` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_auditor`](/ext/e/pg_auditor) | `0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-auditor` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`logerrors`](/ext/e/logerrors) | `2.1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-logerrors` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_auth_mon`](/ext/e/pg_auth_mon) | `3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-auth-mon` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_jobmon`](/ext/e/pg_jobmon) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-jobmon` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`credcheck`](/ext/e/credcheck) | `4.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-credcheck` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgcryptokey`](/ext/e/pgcryptokey) | `0.85` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgcryptokey` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_pwhash`](/ext/e/pg_pwhash) | `1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-pwhash` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`login_hook`](/ext/e/login_hook) | `1.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-login-hook` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`set_user`](/ext/e/set_user) | `4.2.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-set-user` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_snakeoil`](/ext/e/pg_snakeoil) | `1.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-snakeoil` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgextwlist`](/ext/e/pgextwlist) | `1.19` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgextwlist` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_command_fw`](/ext/e/pg_command_fw) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-command-fw` | {{< pgvers "18,17,16,15" >}} | - |
| [`block_copy_command`](/ext/e/block_copy_command) | `0.1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-block-copy-command` | {{< pgvers "18,17,16,15,14,13" >}} | - |
| [`sslutils`](/ext/e/sslutils) | `1.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-sslutils` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_noset`](/ext/e/noset) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-noset` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tde`](/ext/e/pg_tde) | `2.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `percona-postgresql-$v` | {{< pgvers "18,17" >}} | - |
{.ext-table}


--------

## FDW

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`wrappers`](/ext/e/wrappers) | `0.6.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-wrappers` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgspider_ext`](/ext/e/pgspider_ext) | `1.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgspider-ext` | {{< pgvers "17,16,15" >}} | - |
| [`mysql_fdw`](/ext/e/mysql_fdw) | `2.9.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-mysql-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`oracle_fdw`](/ext/e/oracle_fdw) | `2.8.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-oracle-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`tds_fdw`](/ext/e/tds_fdw) | `2.0.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-tds-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`sqlite_fdw`](/ext/e/sqlite_fdw) | `2.5.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-sqlite-fdw` | {{< pgvers "17,16,15,14" >}} | - |
| [`etcd_fdw`](/ext/e/etcd_fdw) | `0.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-etcd-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`nominatim_fdw`](/ext/e/nominatim_fdw) | `1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-nominatim-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`redis_fdw`](/ext/e/redis_fdw) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-redis-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_redis_pubsub`](/ext/e/redis) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-redis-pubsub` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`kafka_fdw`](/ext/e/kafka_fdw) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-kafka-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`firebird_fdw`](/ext/e/firebird_fdw) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-firebird-fdw` | {{< pgvers "18,17,16,15,14" >}} | `libfq` |
| [`rdf_fdw`](/ext/e/rdf_fdw) | `2.5.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-rdf-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`aws_s3`](/ext/e/aws_s3) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-aws-s3` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`log_fdw`](/ext/e/log_fdw) | `1.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-log-fdw` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## SIM

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`documentdb`](/ext/e/documentdb) | `0.110` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-documentdb` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-cron`, `postgresql-$v-pgvector`, `postgresql-$v-rum`, `postgresql-$v-postgis-3` |
| [`orafce`](/ext/e/orafce) | `4.16.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-orafce` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgtt`](/ext/e/pgtt) | `4.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgtt` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`session_variable`](/ext/e/session_variable) | `3.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-session-variable` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_statement_rollback`](/ext/e/pg_statement_rollback) | `1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-statement-rollback` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ivorysql`](/ext/e/ivorysql_ora) | `5.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `ivorysql-5` | {{< pgvers "18" >}} | - |
| [`pg_utl_smtp`](/ext/e/pg_utl_smtp) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-utl-smtp` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`babelfish`](/ext/e/babelfishpg_common) | `5.5.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `babelfishpg-$v-babelfish` | {{< pgvers "17" >}} | `babelfishpg-$v`, `libantlr4-runtime413` |
| [`spat`](/ext/e/spat) | `0.1.0a4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-spat` | {{< pgvers "17" >}} | - |
| [`pgmemcache`](/ext/e/pgmemcache) | `2.3.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgmemcache` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`openhalo`](/ext/e/aux_mysql) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `openhalodb-$v` | {{< pgvers "14" >}} | - |
{.ext-table}


--------

## ETL

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pglogical`](/ext/e/pglogical) | `2.4.6` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pglogical` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pglogical_ticker`](/ext/e/pglogical_ticker) | `1.4.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pglogical-ticker` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pglogical` |
| [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) | `2.2.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pgl-ddl-deploy` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-pglogical` |
| [`logical_ddl`](/ext/e/logical_ddl) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-logical-ddl` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_failover_slots`](/ext/e/pg_failover_slots) | `1.2.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-failover-slots` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`db_migrator`](/ext/e/db_migrator) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-db-migrator` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgactive`](/ext/e/pgactive) | `2.1.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgactive` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`spock`](/ext/e/spock) | `5.0.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgedge-$v-spock` | {{< pgvers "17" >}} | `pgedge-$v` |
| [`lolor`](/ext/e/lolor) | `1.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgedge-$v-lolor` | {{< pgvers "17" >}} | `pgedge-$v` |
| [`pgclone`](/ext/e/pgclone) | `4.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgclone` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgmqtt`](/ext/e/pgmqtt) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pgmqtt` | {{< pgvers "18,17,16,15,14,13" >}} | - |
| [`wal2json`](/ext/e/wal2json) | `2.6` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-wal2json` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`wal2mongo`](/ext/e/wal2mongo) | `1.0.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-wal2mongo` | {{< pgvers "16,15,14" >}} | - |
| [`decoderbufs`](/ext/e/decoderbufs) | `3.5.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-decoderbufs` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`decoder_raw`](/ext/e/decoder_raw) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-decoder-raw` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`mimeo`](/ext/e/mimeo) | `1.5.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-mimeo` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`repmgr`](/ext/e/repmgr) | `5.5.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-repmgr` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_fact_loader`](/ext/e/pg_fact_loader) | `2.0.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-$v-pg-fact-loader` | {{< pgvers "17,16,15,14" >}} | - |
| [`pg_bulkload`](/ext/e/pg_bulkload) | `3.1.23` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresql-$v-pg-bulkload` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


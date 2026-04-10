---
title: "RPM 列表"
description: "在 EL 系统上可用的 PostgreSQL 扩展 RPM 二进制包"
weight: 130
icon: fa-brands fa-redhat
---

在 EL 系统上共有 **475** 个 PostgreSQL 扩展可用，共计 **398** 个扩展包。

其中 **15** 个扩展包是 EL 独有，**3** 个 DEB 扩展包缺少对应的 RPM 包。

| **分类** | **All** | **PGDG** | **PIGSTY** | **CONTRIB** | | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--------:|:------:|:--------:|:----------:|:-----------:|:---:|:--------:|:--------:|:--------:|:--------:|:--------:|
| [**EXT**](/ext/rpm) | 475 | 129 | 275 | 71 | | 448 | 459 | 451 | 446 | 432 |
| [**PKG**](/ext/repo) | 398 | 116 | 221 | 0 | | 375 | 387 | 382 | 378 | 367 |
{.ext-table}


--------

## TIME

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`timescaledb`](/ext/e/timescaledb) | `2.26.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `timescaledb-tsl_$v` | {{< pgvers "18,17,16,15" >}} | - |
| [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) | `1.22.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `timescaledb-toolkit_$v` | {{< pgvers "18,17,16,15" >}} | - |
| [`pg_timeseries`](/ext/e/timeseries) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_timeseries_$v` | {{< pgvers "18,17,16,15,14" >}} | `pg_cron_$v`, `pg_partman_$v` |
| [`periods`](/ext/e/periods) | `1.2.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `periods_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`temporal_tables`](/ext/e/temporal_tables) | `1.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `temporal_tables_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`emaj`](/ext/e/emaj) | `4.7.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `e-maj_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`table_version`](/ext/e/table_version) | `1.11.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `table_version_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_cron`](/ext/e/pg_cron) | `1.6.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_cron_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_task`](/ext/e/pg_task) | `2.1.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_task_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_later`](/ext/e/pg_later) | `0.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_later_$v` | {{< pgvers "18,17,16,15,14" >}} | `pgmq_$v` |
| [`pg_dispatch`](/ext/e/pg_dispatch) | `0.1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_dispatch_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_background`](/ext/e/pg_background) | `1.9.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_background_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## GIS

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`postgis`](/ext/e/postgis) | `3.6.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgis36_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgrouting`](/ext/e/pgrouting) | `4.0.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgrouting_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pointcloud`](/ext/e/pointcloud) | `1.2.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pointcloud_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_h3`](/ext/e/h3) | `4.2.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `h3-pg_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`q3c`](/ext/e/q3c) | `2.0.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `q3c_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ogr_fdw`](/ext/e/ogr_fdw) | `1.1.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `ogr_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`geoip`](/ext/e/geoip) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `geoip_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_polyline`](/ext/e/pg_polyline) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_polyline_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_eviltransform`](/ext/e/pg_eviltransform) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_eviltransform_$v` | {{< pgvers "18,17,16,15,14" >}} | `postgis36_$v` |
| [`pg_geohash`](/ext/e/pg_geohash) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_geohash_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tzf`](/ext/e/tzf) | `0.2.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_tzf_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## RAG

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pgvector`](/ext/e/vector) | `0.8.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgvector_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`vchord`](/ext/e/vchord) | `1.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `vchord_$v` | {{< pgvers "18,17,16,15,14" >}} | `pgvector_$v` |
| [`pgvectorscale`](/ext/e/vectorscale) | `0.9.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgvectorscale_$v` | {{< pgvers "18,17,16,15,14" >}} | `pgvector_$v` |
| [`pg_vectorize`](/ext/e/vectorize) | `0.26.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_vectorize_$v` | {{< pgvers "18,17,16,15,14" >}} | `pgmq_$v`, `pg_cron_$v`, `pgvector_$v` |
| [`pg_similarity`](/ext/e/pg_similarity) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_similarity_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`smlar`](/ext/e/smlar) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `smlar_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_summarize`](/ext/e/pg_summarize) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_summarize_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tiktoken`](/ext/e/pg_tiktoken) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_tiktoken_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg4ml`](/ext/e/pg4ml) | `2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg4ml_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgml`](/ext/e/pgml) | `2.10.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgml_$v` | {{< pgvers "17,16,15,14" >}} | - |
{.ext-table}


--------

## FTS

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_search`](/ext/e/pg_search) | `0.22.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_search_$v` | {{< pgvers "18,17,16,15" >}} | - |
| [`pgroonga`](/ext/e/pgroonga) | `4.0.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgroonga_$v` | {{< pgvers "18,17,16,15,14" >}} | `groonga-libs` |
| [`pg_bigm`](/ext/e/pg_bigm) | `1.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_bigm_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`zhparser`](/ext/e/zhparser) | `2.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `zhparser_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_bestmatch`](/ext/e/pg_bestmatch) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_bestmatch_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`vchord_bm25`](/ext/e/vchord_bm25) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `vchord_bm25_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tokenizer`](/ext/e/pg_tokenizer) | `0.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_tokenizer_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_biscuit`](/ext/e/biscuit) | `2.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_biscuit_$v` | {{< pgvers "18,17,16" >}} | - |
| [`pg_textsearch`](/ext/e/pg_textsearch) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_textsearch_$v` | {{< pgvers "18,17" >}} | - |
| [`pg_pinyin`](/ext/e/pg_pinyin) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_pinyin_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_cs_cz`](/ext/e/hunspell_cs_cz) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_cs_cz_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_de_de`](/ext/e/hunspell_de_de) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_de_de_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_en_us`](/ext/e/hunspell_en_us) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_en_us_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_fr`](/ext/e/hunspell_fr) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_fr_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_ne_np`](/ext/e/hunspell_ne_np) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_ne_np_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_nl_nl`](/ext/e/hunspell_nl_nl) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_nl_nl_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_nn_no`](/ext/e/hunspell_nn_no) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_nn_no_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_pt_pt`](/ext/e/hunspell_pt_pt) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_pt_pt_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_ru_ru`](/ext/e/hunspell_ru_ru) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_ru_ru_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hunspell_ru_ru_aot`](/ext/e/hunspell_ru_ru_aot) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hunspell_ru_ru_aot_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## OLAP

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`citus`](/ext/e/citus) | `14.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `citus_$v` | {{< pgvers "18,17,16" >}} | - |
| [`hydra`](/ext/e/columnar) | `1.1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hydra_$v` | {{< pgvers "16,15,14" >}} | - |
| [`pg_analytics`](/ext/e/pg_analytics) | `0.3.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_analytics_$v` | {{< pgvers "17,16,15,14" >}} | - |
| [`pg_duckdb`](/ext/e/pg_duckdb) | `1.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_duckdb_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_mooncake`](/ext/e/pg_mooncake) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_mooncake_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_clickhouse`](/ext/e/pg_clickhouse) | `0.1.10` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_clickhouse_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`duckdb_fdw`](/ext/e/duckdb_fdw) | `1.1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `duckdb_fdw_$v` | {{< pgvers "17,16,15,14" >}} | `libduckdb` |
| [`pg_parquet`](/ext/e/pg_parquet) | `0.5.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_parquet_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_fkpart`](/ext/e/pg_fkpart) | `1.7.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_fkpart_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_partman`](/ext/e/pg_partman) | `5.4.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_partman_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plproxy`](/ext/e/plproxy) | `2.11.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `plproxy_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_strom`](/ext/e/pg_strom) | `6.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_strom_$v` | {{< pgvers "17,16,15,14" >}} | - |
{.ext-table}


--------

## FEAT

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`age`](/ext/e/age) | `1.7.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `apache-age_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_liquid`](/ext/e/pg_liquid) | `0.1.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_liquid_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hll`](/ext/e/hll) | `2.19` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `hll_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`rum`](/ext/e/rum) | `1.3.15` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `rum_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ai_query`](/ext/e/pg_ai_query) | `0.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_ai_query_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ttl_index`](/ext/e/pg_ttl_index) | `3.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_ttl_index_$v` | {{< pgvers "18,17,16,15" >}} | - |
| [`pg_graphql`](/ext/e/pg_graphql) | `1.5.12` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_graphql_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_jsonschema`](/ext/e/pg_jsonschema) | `0.3.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_jsonschema_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`jsquery`](/ext/e/jsquery) | `1.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `jsquery_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_hint_plan`](/ext/e/pg_hint_plan) | `1.8.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_hint_plan_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hypopg`](/ext/e/hypopg) | `1.4.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `hypopg_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`index_advisor`](/ext/e/index_advisor) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `index_advisor_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_plan_filter`](/ext/e/plan_filter) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_plan_filter_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_variables`](/ext/e/pg_variables) | `1.2.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_variables_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`imgsmlr`](/ext/e/imgsmlr) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `imgsmlr_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ivm`](/ext/e/pg_ivm) | `1.13` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_ivm_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_incremental`](/ext/e/pg_incremental) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_incremental_$v` | {{< pgvers "18,17,16" >}} | `pg_cron_$v` |
| [`pg_trickle`](/ext/e/pg_trickle) | `0.16.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_trickle_$v` | {{< pgvers "18" >}} | - |
| [`pgmb`](/ext/e/pgmb) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgmb_$v` | {{< pgvers "18,17,16,15,14" >}} | `pg_cron_$v`, `pg_http_$v` |
| [`pgmq`](/ext/e/pgmq) | `1.11.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgmq_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgq`](/ext/e/pgq) | `3.5.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgq_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`orioledb`](/ext/e/orioledb) | `1.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `orioledb_$v` | {{< pgvers "17" >}} | `oriolepg_$v` |
| [`pg_cardano`](/ext/e/pg_cardano) | `1.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_cardano_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`omnigres`](/ext/e/omni) | `0.2.14` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `omnigres_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## LANG

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_tle`](/ext/e/pg_tle) | `1.5.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_tle_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plv8`](/ext/e/plv8) | `3.2.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `plv8_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pljs`](/ext/e/pljs) | `1.0.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pljs_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pllua`](/ext/e/pllua) | `2.0.12` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pllua_$v` | {{< pgvers "17,16,15,14" >}} | - |
| [`plprql`](/ext/e/plprql) | `18.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `plprql_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pldebugger`](/ext/e/pldbgapi) | `1.9` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pldebugger_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plpgsql_check`](/ext/e/plpgsql_check) | `2.8.10` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `plpgsql_check_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plprofiler`](/ext/e/plprofiler) | `4.2.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `plprofiler_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plsh`](/ext/e/plsh) | `1.20220917` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `plsh_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pljava`](/ext/e/pljava) | `1.6.10` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pljava_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plr`](/ext/e/plr) | `8.4.8` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `plr_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`plxslt`](/ext/e/plxslt) | `0.20140221` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `plxslt_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgtap`](/ext/e/pgtap) | `1.3.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgtap_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`faker`](/ext/e/faker) | `0.5.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql_faker_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`dbt2`](/ext/e/dbt2) | `0.61.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `dbt2-pg$v-extensions` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_regresql`](/ext/e/pg_regresql) | `2.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_regresql_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## TYPE

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_prefix`](/ext/e/prefix) | `1.2.10` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `prefix_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_semver`](/ext/e/semver) | `0.41.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `semver_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgunit`](/ext/e/unit) | `7.10` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgresql-unit_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgpdf`](/ext/e/pgpdf) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgpdf_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pglite_fusion`](/ext/e/pglite_fusion) | `0.0.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pglite_fusion_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`md5hash`](/ext/e/md5hash) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `md5hash_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`asn1oid`](/ext/e/asn1oid) | `1.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `asn1oid_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_roaringbitmap`](/ext/e/roaringbitmap) | `1.1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_roaringbitmap_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgfaceting`](/ext/e/pgfaceting) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgfaceting_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsphere`](/ext/e/pg_sphere) | `1.5.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgsphere_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_country`](/ext/e/country) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_country_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_xenophile`](/ext/e/pg_xenophile) | `0.8.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_xenophile_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_currency`](/ext/e/currency) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_currency_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgcollection`](/ext/e/collection) | `2.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgcollection_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgmp`](/ext/e/pgmp) | `1.0.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgmp_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`numeral`](/ext/e/numeral) | `1.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `numeral_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_rational`](/ext/e/pg_rational) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_rational_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pguint`](/ext/e/uint) | `1.20250815` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pguint_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_uint128`](/ext/e/uint128) | `1.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_uint128_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hashtypes`](/ext/e/hashtypes) | `0.1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `hashtypes_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ip4r`](/ext/e/ip4r) | `2.4.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `ip4r_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_duration`](/ext/e/pg_duration) | `1.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_duration_$v` | {{< pgvers "18,17" >}} | - |
| [`pg_uri`](/ext/e/uri) | `1.20251029` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_uri_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_emailaddr`](/ext/e/emailaddr) | `0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_emailaddr_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_acl`](/ext/e/acl) | `1.0.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `acl_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_rrule`](/ext/e/pg_rrule) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_rrule_$v` | {{< pgvers "18,17,16,15,14" >}} | `libical` |
| [`pgcalendar`](/ext/e/pgcalendar) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgcalendar_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`timestamp9`](/ext/e/timestamp9) | `1.4.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `timestamp9_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgbson`](/ext/e/pgbson) | `2.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `postgresbson_$v` | {{< pgvers "18,17,16,15,14" >}} | `libbson` |
| [`chkpass`](/ext/e/chkpass) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `chkpass_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## UTIL

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_gzip`](/ext/e/gzip) | `1.0.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_gzip_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_bzip`](/ext/e/bzip) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_bzip_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_zstd`](/ext/e/zstd) | `1.1.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_zstd_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_http`](/ext/e/http) | `1.7.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_http_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_net`](/ext/e/pg_net) | `0.20.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_net_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_curl`](/ext/e/pg_curl) | `2.4.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_curl_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_retry`](/ext/e/pg_retry) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_retry_$v` | {{< pgvers "18,17" >}} | - |
| [`pg_fsql`](/ext/e/pg_fsql) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_fsql_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_protobuf`](/ext/e/pg_protobuf) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_protobuf_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgproto`](/ext/e/pgproto) | `0.2.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgproto_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pglock`](/ext/e/pglock) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pglock_$v` | {{< pgvers "18,17,16,15,14" >}} | `pg_cron_$v` |
| [`pgjq`](/ext/e/pgjq) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgjq_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgjwt`](/ext/e/pgjwt) | `0.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgjwt_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_smtp_client`](/ext/e/pg_smtp_client) | `0.2.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_smtp_client_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_html5_email_address`](/ext/e/pg_html5_email_address) | `1.2.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_html5_email_address_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`url_encode`](/ext/e/url_encode) | `1.2.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `url_encode_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsql_tweaks`](/ext/e/pgsql_tweaks) | `1.0.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgsql_tweaks_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_extra_time`](/ext/e/pg_extra_time) | `2.0.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_extra_time_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgpcre`](/ext/e/pgpcre) | `0.20190509` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgpcre_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`icu_ext`](/ext/e/icu_ext) | `1.10.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `icu_ext_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgqr`](/ext/e/pgqr) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgqr_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_envvar`](/ext/e/envvar) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_envvar_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`floatfile`](/ext/e/floatfile) | `1.3.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `floatfile_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_render`](/ext/e/pg_render) | `0.1.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_render_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_readme`](/ext/e/pg_readme) | `0.7.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_readme_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ddl_historization`](/ext/e/ddl_historization) | `0.0.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `ddl_historization_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`data_historization`](/ext/e/data_historization) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `data_historization_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_schedoc`](/ext/e/schedoc) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_schedoc_$v` | {{< pgvers "18,17,16,15,14" >}} | `ddl_historization_$v` |
| [`pg_hashlib`](/ext/e/hashlib) | `1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_hashlib_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_xxhash`](/ext/e/xxhash) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_xxhash_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`shacrypt`](/ext/e/shacrypt) | `1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `shacrypt_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`cryptint`](/ext/e/cryptint) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `cryptint_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ecdsa`](/ext/e/pguecc) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_ecdsa_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsparql`](/ext/e/sparql) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgsparql_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## FUNC

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_idkit`](/ext/e/pg_idkit) | `0.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_idkit_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgx_ulid`](/ext/e/pgx_ulid) | `0.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgx_ulid_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_uuidv7`](/ext/e/pg_uuidv7) | `1.7.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_uuidv7_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`permuteseq`](/ext/e/permuteseq) | `1.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `permuteseq_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_hashids`](/ext/e/pg_hashids) | `1.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_hashids_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_slug_gen`](/ext/e/pg_slug_gen) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_slug_gen_$v` | {{< pgvers "18,17,16,15" >}} | - |
| [`sequential_uuids`](/ext/e/sequential_uuids) | `1.0.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `sequential_uuids_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_typeid`](/ext/e/typeid) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_typeid_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`snowflake`](/ext/e/snowflake) | `2.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `snowflake_$v` | {{< pgvers "17" >}} | `pgedge_$v` |
| [`topn`](/ext/e/topn) | `2.7.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `topn_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`quantile`](/ext/e/quantile) | `1.1.8` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `quantile_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`lower_quantile`](/ext/e/lower_quantile) | `1.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `lower_quantile_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`count_distinct`](/ext/e/count_distinct) | `3.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `count_distinct_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`omnisketch`](/ext/e/omnisketch) | `1.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `omnisketch_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ddsketch`](/ext/e/ddsketch) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `ddsketch_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`vasco`](/ext/e/vasco) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `vasco_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgxicor`](/ext/e/xicor) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgxicor_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_weighted_statistics`](/ext/e/weighted_statistics) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_weighted_statistics_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`tdigest`](/ext/e/tdigest) | `1.4.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `tdigest_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`first_last_agg`](/ext/e/first_last_agg) | `0.1.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `first_last_agg_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`extra_window_functions`](/ext/e/extra_window_functions) | `1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `extra_window_functions_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`floatvec`](/ext/e/floatvec) | `1.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `floatvec_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`aggs_for_vecs`](/ext/e/aggs_for_vecs) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `aggs_for_vecs_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`aggs_for_arrays`](/ext/e/aggs_for_arrays) | `1.3.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `aggs_for_arrays_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_csv`](/ext/e/pg_csv) | `1.0.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_csv_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_arraymath`](/ext/e/arraymath) | `1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_arraymath_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_math`](/ext/e/pg_math) | `1.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_math_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_random`](/ext/e/random) | `2.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_random_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_base36`](/ext/e/base36) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_base36_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_base62`](/ext/e/base62) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_base62_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_base58`](/ext/e/pg_base58) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_base58_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_financial`](/ext/e/financial) | `1.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_financial_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_convert`](/ext/e/convert) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_convert_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`parray_gin`](/ext/e/parray_gin) | `1.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `parray_gin_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## ADMIN

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_repack`](/ext/e/pg_repack) | `1.5.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_repack_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_rewrite`](/ext/e/pg_rewrite) | `2.1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_rewrite_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_squeeze`](/ext/e/pg_squeeze) | `1.9.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_squeeze_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_dirtyread`](/ext/e/pg_dirtyread) | `2.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_dirtyread_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgfincore`](/ext/e/pgfincore) | `1.3.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgfincore_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_cooldown`](/ext/e/pg_cooldown) | `0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_cooldown_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_ddlx`](/ext/e/ddlx) | `0.30` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `ddlx_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pglinter`](/ext/e/pglinter) | `1.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pglinter_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_prioritize`](/ext/e/prioritize) | `1.0.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_prioritize_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_checksums`](/ext/e/pg_checksums) | `1.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_checksums_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_readonly`](/ext/e/pg_readonly) | `1.0.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_readonly_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgdd`](/ext/e/pgdd) | `0.6.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgdd_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_permissions`](/ext/e/pg_permissions) | `1.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_permissions_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgautofailover`](/ext/e/pgautofailover) | `2.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_auto_failover_$v` | {{< pgvers "17,16,15,14" >}} | - |
| [`pg_catcheck`](/ext/e/pg_catcheck) | `1.6.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_catcheck_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`preprepare`](/ext/e/pre_prepare) | `0.9` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `preprepare_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_upless`](/ext/e/pg_upless) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_upless_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgcozy`](/ext/e/pgcozy) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgcozy_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_orphaned`](/ext/e/pg_orphaned) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_orphaned_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_crash`](/ext/e/pg_crash) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_crash_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_cheat_funcs_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_fio`](/ext/e/fio) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_fio_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_qos`](/ext/e/qos) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_qos_$v` | {{< pgvers "18,17,16,15" >}} | - |
| [`pg_savior`](/ext/e/pg_savior) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_savior_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`safeupdate`](/ext/e/safeupdate) | `1.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `safeupdate_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_strict`](/ext/e/pg_strict) | `1.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_strict_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_drop_events`](/ext/e/pg_drop_events) | `0.1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_drop_events_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`table_log`](/ext/e/table_log) | `0.6.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `table_log_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgelog`](/ext/e/pgelog) | `1.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgelog_$v` | {{< pgvers "18,17,16,15,14" >}} | `postgresql$v-contrib`, `pg_variables_$v` |
| [`pgagent`](/ext/e/pgagent) | `4.2.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgagent_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgpool`](/ext/e/pgpool_adm) | `4.7.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgpool-II-pg$v-extensions` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## STAT

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pg_profile`](/ext/e/pg_profile) | `4.11` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_profile_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tracing`](/ext/e/pg_tracing) | `0.1.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_tracing_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_stat_ch`](/ext/e/pg_stat_ch) | `0.3.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_stat_ch_$v` | {{< pgvers "18,17,16" >}} | - |
| [`pg_show_plans`](/ext/e/pg_show_plans) | `2.1.6` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_show_plans_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_stat_kcache`](/ext/e/pg_stat_kcache) | `2.3.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_stat_kcache_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_stat_monitor`](/ext/e/pg_stat_monitor) | `2.3.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_stat_monitor_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_qualstats`](/ext/e/pg_qualstats) | `2.1.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_qualstats_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_store_plans`](/ext/e/pg_store_plans) | `1.10` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_store_plans_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_track_settings`](/ext/e/pg_track_settings) | `2.1.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_track_settings_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_track_optimizer`](/ext/e/pg_track_optimizer) | `0.9.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_track_optimizer_$v` | {{< pgvers "18,17" >}} | - |
| [`pg_wait_sampling`](/ext/e/pg_wait_sampling) | `1.1.9` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_wait_sampling_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsentinel`](/ext/e/pgsentinel) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgsentinel_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`system_stats`](/ext/e/system_stats) | `4.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `system_stats_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_meta`](/ext/e/meta) | `0.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_meta_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgnodemx`](/ext/e/pgnodemx) | `1.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgnodemx_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_sqlog`](/ext/e/pg_sqlog) | `1.6` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_sqlog_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`bgw_replstatus`](/ext/e/bgw_replstatus) | `1.0.8` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `bgw_replstatus_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgmeminfo`](/ext/e/pgmeminfo) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgmeminfo_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`toastinfo`](/ext/e/toastinfo) | `1.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `toastinfo_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_explain_ui`](/ext/e/explain_ui) | `0.0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_explain_ui_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_relusage`](/ext/e/pg_relusage) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_relusage_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pagevis`](/ext/e/pagevis) | `0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pagevis_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`powa`](/ext/e/powa) | `5.1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `powa_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## SEC

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) | `3.1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `passwordcheck_cracklib_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`supautils`](/ext/e/supautils) | `3.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `supautils_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsodium`](/ext/e/pgsodium) | `3.1.9` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgsodium_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_vault`](/ext/e/supabase_vault) | `0.3.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `vault_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_session_jwt`](/ext/e/pg_session_jwt) | `0.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_session_jwt_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_anon`](/ext/e/anon) | `3.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_anon_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgsmcrypto`](/ext/e/pgsmcrypto) | `0.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgsmcrypto_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_enigma`](/ext/e/pg_enigma) | `0.5.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_enigma_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgaudit`](/ext/e/pgaudit) | `18.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgaudit_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgauditlogtofile`](/ext/e/pgauditlogtofile) | `1.8.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgauditlogtofile_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_auditor`](/ext/e/pg_auditor) | `0.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_auditor_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`logerrors`](/ext/e/logerrors) | `2.1.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `logerrors_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_auth_mon`](/ext/e/pg_auth_mon) | `3.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_auth_mon_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_jobmon`](/ext/e/pg_jobmon) | `1.4.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_jobmon_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`credcheck`](/ext/e/credcheck) | `4.6` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `credcheck_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgcryptokey`](/ext/e/pgcryptokey) | `0.85` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgcryptokey_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_pwhash`](/ext/e/pg_pwhash) | `1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_pwhash_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`login_hook`](/ext/e/login_hook) | `1.7` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `login_hook_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`set_user`](/ext/e/set_user) | `4.2.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `set_user_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_snakeoil`](/ext/e/pg_snakeoil) | `1.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_snakeoil_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgextwlist`](/ext/e/pgextwlist) | `1.19` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgextwlist_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_command_fw`](/ext/e/pg_command_fw) | `0.1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_command_fw_$v` | {{< pgvers "18,17,16,15" >}} | - |
| [`sslutils`](/ext/e/sslutils) | `1.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `sslutils_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_noset`](/ext/e/noset) | `0.3.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `noset_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_tde`](/ext/e/pg_tde) | `2.1.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `percona-postgresql$v` | {{< pgvers "18,17" >}} | - |
{.ext-table}


--------

## FDW

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`wrappers`](/ext/e/wrappers) | `0.5.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `wrappers_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`multicorn`](/ext/e/multicorn) | `3.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `multicorn2_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`odbc_fdw`](/ext/e/odbc_fdw) | `0.5.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `odbc_fdw_$v` | {{< pgvers "17,16,15,14" >}} | `unixODBC` |
| [`jdbc_fdw`](/ext/e/jdbc_fdw) | `0.4.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `jdbc_fdw_$v` | {{< pgvers "16,15,14" >}} | `java-11-openjdk-headless` |
| [`pgspider_ext`](/ext/e/pgspider_ext) | `1.3.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgspider_ext_$v` | {{< pgvers "17,16,15" >}} | - |
| [`mysql_fdw`](/ext/e/mysql_fdw) | `2.9.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `mysql_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`oracle_fdw`](/ext/e/oracle_fdw) | `2.8.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `oracle_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`tds_fdw`](/ext/e/tds_fdw) | `2.0.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `tds_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`db2_fdw`](/ext/e/db2_fdw) | `18.1.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `db2_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`sqlite_fdw`](/ext/e/sqlite_fdw) | `2.5.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `sqlite_fdw_$v` | {{< pgvers "17,16,15,14" >}} | - |
| [`pgbouncer_fdw`](/ext/e/pgbouncer_fdw) | `1.4.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgbouncer_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`etcd_fdw`](/ext/e/etcd_fdw) | `0.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `etcd_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`informix_fdw`](/ext/e/informix_fdw) | `0.6.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `informix_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`nominatim_fdw`](/ext/e/nominatim_fdw) | `1.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `nominatim_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`mongo_fdw`](/ext/e/mongo_fdw) | `5.5.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `mongo_fdw_$v` | {{< pgvers "16,15,14" >}} | - |
| [`redis_fdw`](/ext/e/redis_fdw) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `redis_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_redis_pubsub`](/ext/e/redis) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_redis_pubsub_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`kafka_fdw`](/ext/e/kafka_fdw) | `0.0.3` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `kafka_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`hdfs_fdw`](/ext/e/hdfs_fdw) | `2.3.3` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `hdfs_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`firebird_fdw`](/ext/e/firebird_fdw) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `firebird_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | `libfq` |
| [`rdf_fdw`](/ext/e/rdf_fdw) | `2.4.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `rdf_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`aws_s3`](/ext/e/aws_s3) | `0.0.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `aws_s3_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`log_fdw`](/ext/e/log_fdw) | `1.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `log_fdw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


--------

## SIM

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`documentdb`](/ext/e/documentdb) | `0.109` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `documentdb_$v` | {{< pgvers "18,17,16,15" >}} | `postgresql$v-contrib`, `pg_cron_$v`, `pgvector_$v`, `rum_$v` |
| [`orafce`](/ext/e/orafce) | `4.16.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `orafce_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgtt`](/ext/e/pgtt) | `4.4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgtt_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`session_variable`](/ext/e/session_variable) | `3.4` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `session_variable_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_statement_rollback`](/ext/e/pg_statement_rollback) | `1.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_statement_rollback_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`ivorysql`](/ext/e/ivorysql_ora) | `5.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `ivorysql5` | {{< pgvers "18" >}} | - |
| [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) | `1.0.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_dbms_metadata_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_dbms_lock`](/ext/e/pg_dbms_lock) | `1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_dbms_lock_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_dbms_job`](/ext/e/pg_dbms_job) | `1.5` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_dbms_job_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog) | `2.2` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_dbms_errlog_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_utl_smtp`](/ext/e/pg_utl_smtp) | `1.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_utl_smtp_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`babelfish`](/ext/e/babelfishpg_common) | `5.5.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `babelfish_$v` | {{< pgvers "17" >}} | `babelfishpg_$v`, `antlr4-runtime413` |
| [`spat`](/ext/e/spat) | `0.1.0a4` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `spat_$v` | {{< pgvers "17" >}} | - |
| [`pgmemcache`](/ext/e/pgmemcache) | `2.3.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgmemcache_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`openhalo`](/ext/e/aux_mysql) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `openhalodb_$v` | {{< pgvers "14" >}} | - |
{.ext-table}


--------

## ETL

| **扩展包** | **版本** | **仓库** | **包名** | **PG大版本** | **依赖** |
|:----------|:--------:|:--------:|:---------|:-----------:|:---------|
| [`pglogical`](/ext/e/pglogical) | `2.4.6` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pglogical_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pglogical_ticker`](/ext/e/pglogical_ticker) | `1.4.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pglogical_ticker_$v` | {{< pgvers "18,17,16,15,14" >}} | `pglogical_$v` |
| [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) | `2.2.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pgl_ddl_deploy_$v` | {{< pgvers "17,16,15,14" >}} | `pglogical_$v` |
| [`pg_failover_slots`](/ext/e/pg_failover_slots) | `1.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pg_failover_slots_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`db_migrator`](/ext/e/db_migrator) | `1.0.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `db_migrator_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pgactive`](/ext/e/pgactive) | `2.1.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgactive_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`spock`](/ext/e/spock) | `5.0.5` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `spock_$v` | {{< pgvers "17" >}} | `pgedge_$v` |
| [`lolor`](/ext/e/lolor) | `1.2.2` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `lolor_$v` | {{< pgvers "17" >}} | `pgedge_$v` |
| [`pgclone`](/ext/e/pgclone) | `2.2.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `pgclone_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`wal2json`](/ext/e/wal2json) | `2.6` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `wal2json_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`wal2mongo`](/ext/e/wal2mongo) | `1.0.7` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `wal2mongo_$v` | {{< pgvers "16,15,14" >}} | - |
| [`decoderbufs`](/ext/e/decoderbufs) | `3.4.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `postgres-decoderbufs_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`decoder_raw`](/ext/e/decoder_raw) | `1.0` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `decoder_raw_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`mimeo`](/ext/e/mimeo) | `1.5.1` | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `mimeo_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`repmgr`](/ext/e/repmgr) | `5.5.0` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `repmgr_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_fact_loader`](/ext/e/pg_fact_loader) | `2.0.1` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_fact_loader_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
| [`pg_bulkload`](/ext/e/pg_bulkload) | `3.1.23` | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `pg_bulkload_$v` | {{< pgvers "18,17,16,15,14" >}} | - |
{.ext-table}


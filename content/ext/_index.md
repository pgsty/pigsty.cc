---
title: Pigsty 扩展目录
linkTitle: Pigsty 扩展目录
description: >
  扩展是 PostgreSQL 的灵魂所在，Pigsty 制作、收录、整合了 464 个 PG 生态扩展，供用户开箱即用。
weight: 20
cascade:
  type: docs
---

Pigsty 提供了以下三样基础设施，帮助用户更好的利用 PostgreSQL 扩展生态系统的协同超能力：

- [**扩展目录**](/ext/list)：查阅 [**464**](/ext/list) 个扩展插件的详细信息，使用方法，元数据，下载链接与文档
- [**扩展仓库**](/docs/repo/pgsql)：获取预先打包的 RPM/DEB 二进制包，在 [**14 个 Linux 系统**](/ext/os) 上可用
- [**包管理器**](/docs/pig)：使用 [**`pig`**](/docs/pig) 命令行工具，屏蔽复杂度与操作系统与架构差异

```bash
curl -fsSL https://repo.pigsty.cc/pig | bash  # 安装 pig 命令行工具
pig repo add pigsty pgdg -u                   # 在您的 Linux 发行版上配置软件仓库
pig install pg18                              # 从 PGDG 官方仓库安装 PostgreSQL 18 内核包
pig install pg_duckdb -v 18                   # 例：针对 PG 18 安装 pg_duckdb
```

一切都皆可用 PostgreSQL 解决！请参阅我们的博客文章：[**PostgreSQL 正在吞噬数据库世界！**](/blog/pg/pg-eat-db-world)

![](/img/pigsty/ecosystem.png)


--------

## 核心特点

- **数量**：无与伦比的扩展数量：**464** 个可用扩展，为 PG 扩展生态之最
- **质量**：原生 Linux RPM/DEB 包，完全兼容 PGDG 打包规范
- **易用**：提供包管理器 [**`pig`**](/docs/pig)，屏蔽操作系统与架构差异，开箱即用
- **兼容**：扩展完全兼容 PGDG 打包规范，可与 PGDG 仓库无缝混用
- **分发**：由 Cloudflare CDN 进行全球仓库分发，提供国内 CDN 加速
- **开源**：完全开源，提供便利的构建工具，免费对公众提供服务的软件基础设施


--------

## 扩展统计

| **分类** | **All** | **PGDG** | **PIGSTY** | **CONTRIB** | | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|:---:|:------:|:------:|:------:|:------:|:------:|
| **ALL** | 464 | 162 | 283 | 71 | | 441 | 450 | 441 | 437 | 425 |
| **EL** | 458 | 129 | 258 | 71 | | 431 | 443 | 435 | 431 | 419 |
| **Debian** | 449 | 107 | 271 | 71 | | 426 | 436 | 426 | 422 | 410 |
{.ext-table}

> 详见：[扩展列表](/ext/list)，[RPM 列表](/ext/rpm)，[DEB 列表](/ext/deb)，[归属仓库](/ext/repo)

--------

## 扩展分类


| **分类** | **扩展包** |
|:--|:--|
| <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | [`timescaledb`](/ext/e/timescaledb)  [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit)  [`pg_timeseries`](/ext/e/timeseries)  [`periods`](/ext/e/periods)  [`temporal_tables`](/ext/e/temporal_tables)  [`emaj`](/ext/e/emaj)  [`table_version`](/ext/e/table_version)  [`pg_cron`](/ext/e/pg_cron)  [`pg_task`](/ext/e/pg_task)  [`pg_later`](/ext/e/pg_later)  [`pg_background`](/ext/e/pg_background) |
| <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | [`postgis`](/ext/e/postgis)  [`pgrouting`](/ext/e/pgrouting)  [`pointcloud`](/ext/e/pointcloud)  [`pg_h3`](/ext/e/h3)  [`q3c`](/ext/e/q3c)  [`ogr_fdw`](/ext/e/ogr_fdw)  [`geoip`](/ext/e/geoip)  [`pg_polyline`](/ext/e/pg_polyline)  [`pg_eviltransform`](/ext/e/pg_eviltransform)  [`pg_geohash`](/ext/e/pg_geohash)  [`mobilitydb`](/ext/e/mobilitydb)  [`pg_tzf`](/ext/e/tzf) |
| <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | [`pgvector`](/ext/e/vector)  [`vchord`](/ext/e/vchord)  [`pgvectorscale`](/ext/e/vectorscale)  [`pg_vectorize`](/ext/e/vectorize)  [`pg_similarity`](/ext/e/pg_similarity)  [`smlar`](/ext/e/smlar)  [`pg_summarize`](/ext/e/pg_summarize)  [`pg_tiktoken`](/ext/e/pg_tiktoken)  [`pg4ml`](/ext/e/pg4ml)  [`pgml`](/ext/e/pgml) |
| <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | [`pg_search`](/ext/e/pg_search)  [`pgroonga`](/ext/e/pgroonga)  [`pg_bigm`](/ext/e/pg_bigm)  [`zhparser`](/ext/e/zhparser)  [`pg_bestmatch`](/ext/e/pg_bestmatch)  [`vchord_bm25`](/ext/e/vchord_bm25)  [`pg_tokenizer`](/ext/e/pg_tokenizer)  [`pg_biscuit`](/ext/e/biscuit)  [`pg_textsearch`](/ext/e/pg_textsearch)  [`pg_pinyin`](/ext/e/pg_pinyin)  [`hunspell_cs_cz`](/ext/e/hunspell_cs_cz)  [`hunspell_de_de`](/ext/e/hunspell_de_de)  [`hunspell_en_us`](/ext/e/hunspell_en_us)  [`hunspell_fr`](/ext/e/hunspell_fr)  [`hunspell_ne_np`](/ext/e/hunspell_ne_np)  [`hunspell_nl_nl`](/ext/e/hunspell_nl_nl)  [`hunspell_nn_no`](/ext/e/hunspell_nn_no)  [`hunspell_pt_pt`](/ext/e/hunspell_pt_pt)  [`hunspell_ru_ru`](/ext/e/hunspell_ru_ru)  [`hunspell_ru_ru_aot`](/ext/e/hunspell_ru_ru_aot) |
| <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | [`citus`](/ext/e/citus)  [`hydra`](/ext/e/columnar)  [`pg_analytics`](/ext/e/pg_analytics)  [`pg_duckdb`](/ext/e/pg_duckdb)  [`pg_mooncake`](/ext/e/pg_mooncake)  [`pg_clickhouse`](/ext/e/pg_clickhouse)  [`duckdb_fdw`](/ext/e/duckdb_fdw)  [`pg_parquet`](/ext/e/pg_parquet)  [`pg_fkpart`](/ext/e/pg_fkpart)  [`pg_partman`](/ext/e/pg_partman)  [`plproxy`](/ext/e/plproxy)  [`pg_strom`](/ext/e/pg_strom) |
| <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | [`age`](/ext/e/age)  [`hll`](/ext/e/hll)  [`rum`](/ext/e/rum)  [`pg_ai_query`](/ext/e/pg_ai_query)  [`pg_ttl_index`](/ext/e/pg_ttl_index)  [`pg_graphql`](/ext/e/pg_graphql)  [`pg_jsonschema`](/ext/e/pg_jsonschema)  [`jsquery`](/ext/e/jsquery)  [`pg_hint_plan`](/ext/e/pg_hint_plan)  [`hypopg`](/ext/e/hypopg)  [`index_advisor`](/ext/e/index_advisor)  [`pg_plan_filter`](/ext/e/plan_filter)  [`imgsmlr`](/ext/e/imgsmlr)  [`pg_ivm`](/ext/e/pg_ivm)  [`pg_incremental`](/ext/e/pg_incremental)  [`pgmb`](/ext/e/pgmb)  [`pgmq`](/ext/e/pgmq)  [`pgq`](/ext/e/pgq)  [`orioledb`](/ext/e/orioledb)  [`pg_cardano`](/ext/e/pg_cardano)  [`rdkit`](/ext/e/rdkit)  [`omnigres`](/ext/e/omni) |
| <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | [`pg_tle`](/ext/e/pg_tle)  [`plv8`](/ext/e/plv8)  [`pljs`](/ext/e/pljs)  [`pllua`](/ext/e/pllua)  [`plprql`](/ext/e/plprql)  [`pldebugger`](/ext/e/pldbgapi)  [`plpgsql_check`](/ext/e/plpgsql_check)  [`plprofiler`](/ext/e/plprofiler)  [`plsh`](/ext/e/plsh)  [`pljava`](/ext/e/pljava)  [`plr`](/ext/e/plr)  [`plxslt`](/ext/e/plxslt)  [`pgtap`](/ext/e/pgtap)  [`faker`](/ext/e/faker)  [`dbt2`](/ext/e/dbt2) |
| <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | [`pg_prefix`](/ext/e/prefix)  [`pg_semver`](/ext/e/semver)  [`pgunit`](/ext/e/unit)  [`pgpdf`](/ext/e/pgpdf)  [`pglite_fusion`](/ext/e/pglite_fusion)  [`md5hash`](/ext/e/md5hash)  [`asn1oid`](/ext/e/asn1oid)  [`pg_roaringbitmap`](/ext/e/roaringbitmap)  [`pgfaceting`](/ext/e/pgfaceting)  [`pgsphere`](/ext/e/pg_sphere)  [`pg_country`](/ext/e/country)  [`pg_xenophile`](/ext/e/pg_xenophile)  [`pg_currency`](/ext/e/currency)  [`pgcollection`](/ext/e/collection)  [`pgmp`](/ext/e/pgmp)  [`numeral`](/ext/e/numeral)  [`pg_rational`](/ext/e/pg_rational)  [`pguint`](/ext/e/uint)  [`pg_uint128`](/ext/e/uint128)  [`hashtypes`](/ext/e/hashtypes)  [`ip4r`](/ext/e/ip4r)  [`pg_duration`](/ext/e/pg_duration)  [`pg_uri`](/ext/e/uri)  [`pg_emailaddr`](/ext/e/emailaddr)  [`pg_acl`](/ext/e/acl)  [`debversion`](/ext/e/debversion)  [`pg_rrule`](/ext/e/pg_rrule)  [`timestamp9`](/ext/e/timestamp9)  [`chkpass`](/ext/e/chkpass) |
| <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | [`pg_gzip`](/ext/e/gzip)  [`pg_bzip`](/ext/e/bzip)  [`pg_zstd`](/ext/e/zstd)  [`pg_http`](/ext/e/http)  [`pg_net`](/ext/e/pg_net)  [`pg_curl`](/ext/e/pg_curl)  [`pg_retry`](/ext/e/pg_retry)  [`pgjq`](/ext/e/pgjq)  [`pgjwt`](/ext/e/pgjwt)  [`pg_smtp_client`](/ext/e/pg_smtp_client)  [`pg_html5_email_address`](/ext/e/pg_html5_email_address)  [`url_encode`](/ext/e/url_encode)  [`pgsql_tweaks`](/ext/e/pgsql_tweaks)  [`pg_extra_time`](/ext/e/pg_extra_time)  [`pgpcre`](/ext/e/pgpcre)  [`icu_ext`](/ext/e/icu_ext)  [`pgqr`](/ext/e/pgqr)  [`pg_protobuf`](/ext/e/pg_protobuf)  [`pg_envvar`](/ext/e/envvar)  [`floatfile`](/ext/e/floatfile)  [`pg_render`](/ext/e/pg_render)  [`pg_readme`](/ext/e/pg_readme)  [`ddl_historization`](/ext/e/ddl_historization)  [`data_historization`](/ext/e/data_historization)  [`pg_schedoc`](/ext/e/schedoc)  [`pg_hashlib`](/ext/e/hashlib)  [`pg_xxhash`](/ext/e/xxhash)  [`shacrypt`](/ext/e/shacrypt)  [`cryptint`](/ext/e/cryptint)  [`pg_ecdsa`](/ext/e/pguecc)  [`pgsparql`](/ext/e/sparql) |
| <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | [`pg_idkit`](/ext/e/pg_idkit)  [`pgx_ulid`](/ext/e/pgx_ulid)  [`pg_uuidv7`](/ext/e/pg_uuidv7)  [`permuteseq`](/ext/e/permuteseq)  [`pg_hashids`](/ext/e/pg_hashids)  [`sequential_uuids`](/ext/e/sequential_uuids)  [`pg_typeid`](/ext/e/typeid)  [`snowflake`](/ext/e/snowflake)  [`topn`](/ext/e/topn)  [`quantile`](/ext/e/quantile)  [`lower_quantile`](/ext/e/lower_quantile)  [`count_distinct`](/ext/e/count_distinct)  [`omnisketch`](/ext/e/omnisketch)  [`ddsketch`](/ext/e/ddsketch)  [`vasco`](/ext/e/vasco)  [`pgxicor`](/ext/e/xicor)  [`pg_weighted_statistics`](/ext/e/weighted_statistics)  [`tdigest`](/ext/e/tdigest)  [`first_last_agg`](/ext/e/first_last_agg)  [`extra_window_functions`](/ext/e/extra_window_functions)  [`floatvec`](/ext/e/floatvec)  [`aggs_for_vecs`](/ext/e/aggs_for_vecs)  [`aggs_for_arrays`](/ext/e/aggs_for_arrays)  [`pg_csv`](/ext/e/pg_csv)  [`pg_arraymath`](/ext/e/arraymath)  [`pg_math`](/ext/e/pg_math)  [`pg_random`](/ext/e/random)  [`pg_base36`](/ext/e/base36)  [`pg_base62`](/ext/e/base62)  [`pg_base58`](/ext/e/pg_base58)  [`pg_financial`](/ext/e/financial)  [`pg_convert`](/ext/e/convert) |
| <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | [`pg_repack`](/ext/e/pg_repack)  [`pg_rewrite`](/ext/e/pg_rewrite)  [`pg_squeeze`](/ext/e/pg_squeeze)  [`pg_dirtyread`](/ext/e/pg_dirtyread)  [`pgfincore`](/ext/e/pgfincore)  [`pg_cooldown`](/ext/e/pg_cooldown)  [`pg_ddlx`](/ext/e/ddlx)  [`pglinter`](/ext/e/pglinter)  [`pg_prioritize`](/ext/e/prioritize)  [`pg_checksums`](/ext/e/pg_checksums)  [`pg_readonly`](/ext/e/pg_readonly)  [`pgdd`](/ext/e/pgdd)  [`pg_permissions`](/ext/e/pg_permissions)  [`pgautofailover`](/ext/e/pgautofailover)  [`pg_catcheck`](/ext/e/pg_catcheck)  [`preprepare`](/ext/e/pre_prepare)  [`pg_upless`](/ext/e/pg_upless)  [`pgcozy`](/ext/e/pgcozy)  [`pg_orphaned`](/ext/e/pg_orphaned)  [`pg_crash`](/ext/e/pg_crash)  [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs)  [`pg_fio`](/ext/e/fio)  [`pg_qos`](/ext/e/qos)  [`pg_savior`](/ext/e/pg_savior)  [`safeupdate`](/ext/e/safeupdate)  [`pg_strict`](/ext/e/pg_strict)  [`pg_drop_events`](/ext/e/pg_drop_events)  [`table_log`](/ext/e/table_log)  [`pgagent`](/ext/e/pgagent)  [`pgpool`](/ext/e/pgpool_adm) |
| <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | [`pg_profile`](/ext/e/pg_profile)  [`pg_tracing`](/ext/e/pg_tracing)  [`pg_show_plans`](/ext/e/pg_show_plans)  [`pg_stat_kcache`](/ext/e/pg_stat_kcache)  [`pg_stat_monitor`](/ext/e/pg_stat_monitor)  [`pg_qualstats`](/ext/e/pg_qualstats)  [`pg_store_plans`](/ext/e/pg_store_plans)  [`pg_track_settings`](/ext/e/pg_track_settings)  [`pg_track_optimizer`](/ext/e/pg_track_optimizer)  [`pg_wait_sampling`](/ext/e/pg_wait_sampling)  [`pgsentinel`](/ext/e/pgsentinel)  [`system_stats`](/ext/e/system_stats)  [`pg_meta`](/ext/e/meta)  [`pgnodemx`](/ext/e/pgnodemx)  [`pg_sqlog`](/ext/e/pg_sqlog)  [`bgw_replstatus`](/ext/e/bgw_replstatus)  [`pgmeminfo`](/ext/e/pgmeminfo)  [`toastinfo`](/ext/e/toastinfo)  [`pg_explain_ui`](/ext/e/explain_ui)  [`pg_relusage`](/ext/e/pg_relusage)  [`pagevis`](/ext/e/pagevis)  [`powa`](/ext/e/powa) |
| <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib)  [`supautils`](/ext/e/supautils)  [`pgsodium`](/ext/e/pgsodium)  [`pg_vault`](/ext/e/supabase_vault)  [`pg_session_jwt`](/ext/e/pg_session_jwt)  [`pg_anon`](/ext/e/anon)  [`pgsmcrypto`](/ext/e/pgsmcrypto)  [`pg_enigma`](/ext/e/pg_enigma)  [`pgaudit`](/ext/e/pgaudit)  [`pgauditlogtofile`](/ext/e/pgauditlogtofile)  [`pg_auditor`](/ext/e/pg_auditor)  [`logerrors`](/ext/e/logerrors)  [`pg_auth_mon`](/ext/e/pg_auth_mon)  [`pg_jobmon`](/ext/e/pg_jobmon)  [`credcheck`](/ext/e/credcheck)  [`pgcryptokey`](/ext/e/pgcryptokey)  [`pg_pwhash`](/ext/e/pg_pwhash)  [`login_hook`](/ext/e/login_hook)  [`set_user`](/ext/e/set_user)  [`pg_snakeoil`](/ext/e/pg_snakeoil)  [`pgextwlist`](/ext/e/pgextwlist)  [`sslutils`](/ext/e/sslutils)  [`pg_noset`](/ext/e/noset)  [`pg_tde`](/ext/e/pg_tde) |
| <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | [`wrappers`](/ext/e/wrappers)  [`multicorn`](/ext/e/multicorn)  [`odbc_fdw`](/ext/e/odbc_fdw)  [`jdbc_fdw`](/ext/e/jdbc_fdw)  [`pgspider_ext`](/ext/e/pgspider_ext)  [`mysql_fdw`](/ext/e/mysql_fdw)  [`oracle_fdw`](/ext/e/oracle_fdw)  [`tds_fdw`](/ext/e/tds_fdw)  [`db2_fdw`](/ext/e/db2_fdw)  [`sqlite_fdw`](/ext/e/sqlite_fdw)  [`pgbouncer_fdw`](/ext/e/pgbouncer_fdw)  [`etcd_fdw`](/ext/e/etcd_fdw)  [`informix_fdw`](/ext/e/informix_fdw)  [`nominatim_fdw`](/ext/e/nominatim_fdw)  [`mongo_fdw`](/ext/e/mongo_fdw)  [`redis_fdw`](/ext/e/redis_fdw)  [`pg_redis_pubsub`](/ext/e/redis)  [`kafka_fdw`](/ext/e/kafka_fdw)  [`hdfs_fdw`](/ext/e/hdfs_fdw)  [`firebird_fdw`](/ext/e/firebird_fdw)  [`aws_s3`](/ext/e/aws_s3)  [`log_fdw`](/ext/e/log_fdw) |
| <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | [`documentdb`](/ext/e/documentdb)  [`orafce`](/ext/e/orafce)  [`pgtt`](/ext/e/pgtt)  [`session_variable`](/ext/e/session_variable)  [`pg_statement_rollback`](/ext/e/pg_statement_rollback)  [`ivorysql`](/ext/e/ivorysql_ora)  [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata)  [`pg_dbms_lock`](/ext/e/pg_dbms_lock)  [`pg_dbms_job`](/ext/e/pg_dbms_job)  [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog)  [`pg_utl_smtp`](/ext/e/pg_utl_smtp)  [`babelfish`](/ext/e/babelfishpg_common)  [`spat`](/ext/e/spat)  [`pgmemcache`](/ext/e/pgmemcache)  [`openhalo`](/ext/e/aux_mysql) |
| <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | [`pglogical`](/ext/e/pglogical)  [`pglogical_ticker`](/ext/e/pglogical_ticker)  [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy)  [`pg_failover_slots`](/ext/e/pg_failover_slots)  [`db_migrator`](/ext/e/db_migrator)  [`pgactive`](/ext/e/pgactive)  [`spock`](/ext/e/spock)  [`lolor`](/ext/e/lolor)  [`wal2json`](/ext/e/wal2json)  [`wal2mongo`](/ext/e/wal2mongo)  [`decoderbufs`](/ext/e/decoderbufs)  [`decoder_raw`](/ext/e/decoder_raw)  [`mimeo`](/ext/e/mimeo)  [`repmgr`](/ext/e/repmgr)  [`pg_fact_loader`](/ext/e/pg_fact_loader)  [`pg_bulkload`](/ext/e/pg_bulkload) |
{.ext-table}

| <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--license bsd 0clause" href="/ext/license#bsd0clause">BSD 0-Clause</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> |
|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
{.full-width}

| <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--license mpl20" href="/ext/license#mpl20">MPL-2.0</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--license lgpl21" href="/ext/license#lgpl21">LGPL-2.1</a> | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--license timescale" href="/ext/license#timescale">Timescale</a> |
|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
{.full-width}

| <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | <a class="ext-badge ext-badge--lang java" href="/ext/language#java">Java</a> | <a class="ext-badge ext-badge--lang python" href="/ext/language#python">Python</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> |
|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
{.full-width}



## 兼容系统

| **系统** | **版本** | **x86_64** | **aarch64** | **PG版本** |
|:------:|:------:|:----------:|:-----------:|:--------:|
| `RockyLinux 8` | `8` | [`el8.x86_64`](/ext/os/el8.x86_64) | [`el8.aarch64`](/ext/os/el8.aarch64) | {{< pgvers "18,17,16,15,14" >}} |
| `RockyLinux 9` | `9` | [`el9.x86_64`](/ext/os/el9.x86_64) | [`el9.aarch64`](/ext/os/el9.aarch64) | {{< pgvers "18,17,16,15,14" >}} |
| `RockyLinux 10` | `10` | [`el10.x86_64`](/ext/os/el10.x86_64) | [`el10.aarch64`](/ext/os/el10.aarch64) | {{< pgvers "18,17,16,15,14" >}} |
| `Debian 12` | `12` | [`d12.x86_64`](/ext/os/d12.x86_64) | [`d12.aarch64`](/ext/os/d12.aarch64) | {{< pgvers "18,17,16,15,14" >}} |
| `Debian 13` | `13` | [`d13.x86_64`](/ext/os/d13.x86_64) | [`d13.aarch64`](/ext/os/d13.aarch64) | {{< pgvers "18,17,16,15,14" >}} |
| `Ubuntu 22.04` | `22.04` | [`u22.x86_64`](/ext/os/u22.x86_64) | [`u22.aarch64`](/ext/os/u22.aarch64) | {{< pgvers "18,17,16,15,14" >}} |
| `Ubuntu 24.04` | `24.04` | [`u24.x86_64`](/ext/os/u24.x86_64) | [`u24.aarch64`](/ext/os/u24.aarch64) | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table}

> 详见：[操作系统](/ext/os)，[RPM 列表](/ext/rpm)，[DEB 列表](/ext/deb)



--------

## 合作伙伴

Pigsty 向用户提供无可比拟的 PostgreSQL 扩展交付体验，已有多家 PostgreSQL Vendor 使用它进行交付。

{{< cardpane >}}
{{< card header="[**Pigsty**](https://github.com/pgsty/pigsty)" >}}
开箱即用的开源企业级 PostgreSQL RDS 发行版
{{< /card >}}
{{< card header="[**Omnigres**](https://docs.omnigres.org/quick_start/)" >}}
PostgreSQL as a Platform，在数据库中进行应用开发
{{< /card >}}
{{< card header="[**AutoBase**](https://autobase.tech/docs/extensions/install)" >}}
基于 Ansible 的 PG 集群自动化部署，开源 DBaaS
{{< /card >}}
{{< /cardpane >}}

{{< cardpane >}}
{{< card header="[**TensorChord**](https://github.com/tensorchord)" >}}
云原生 AI 基础设施，开发了多个知名 PG 扩展
{{< /card >}}
{{< card header="[**文武IT**](https://w3.ww-it.cn/)" >}}
企业级 PostgreSQL 服务商
{{< /card >}}
{{< /cardpane >}}


--------

## 关于项目

本项目由 [**PGSTY**](https://github.com/pgsty) / [**VONNG**](https://vonng.com) 开发维护，并使用 [**Apache 2.0**](https://github.com/pgsty/pig/?tab=Apache-2.0-1-ov-file#readme) 许可证开源。

| **仓库** | **说明** |
|:------|:------|
| [pgsty](https://github.com/pgsty) | PGSTY 组织主页 |
| [pgsty/pgext](https://github.com/pgsty/pgext) | 本网站，扩展元数据，以及管理工具 |
| [pgsty/pigsty](https://github.com/pgsty/pigsty) | PostgreSQL 数据库发行版 |
| [pgsty/pig](https://github.com/pgsty/pig) | PostgreSQL 包管理器 |
| [pgsty/rpm](https://github.com/pgsty/rpm) | RPM 构建源代码 |
| [pgsty/deb](https://github.com/pgsty/deb) | DEB 构建源代码 |
| [pgsty/infra-pkg](https://github.com/pgsty/infra-pkg) | 基础设施包仓库 |

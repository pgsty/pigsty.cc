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
| 3280  | [**`plpgsql`**](/ext/e/plpgsql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`plx`](/ext/e/plx) [`plisql`](/ext/e/plisql) [`plpgsql_check`](/ext/e/plpgsql_check) [`pldbgapi`](/ext/e/pldbgapi) [`plpgsql_wrap`](/ext/e/plpgsql_wrap) [`orafce`](/ext/e/orafce) [`plprofiler`](/ext/e/plprofiler) [`plsh`](/ext/e/plsh) [`pljava`](/ext/e/pljava) [`pglinter`](/ext/e/pglinter) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | `bedquilt` [`biscuit`](/ext/e/biscuit) [`cat_tools`](/ext/e/cat_tools) `check_orapg` [`currency`](/ext/e/currency) [`data_historization`](/ext/e/data_historization) [`db2fce`](/ext/e/db2fce) `dbpatch` `dbstat` [`ddl_historization`](/ext/e/ddl_historization) `drop_role_helper` `dsef` `event_manager` `explanation` `firefly` `geekspeak` `generic_plan` `gogudb` `grants_manager` `hello-world` `hybrid_search` `index_analyzer` `istoria` `italian_codes` `job_queue` `json_query` `json_utils` `jsonb_schema` `jx_io` `keyhippo` `kilobase` `kissfft` `lab-orders` `launchql-base32` `launchql-ext-types` `launchql-extension-utils` `launchql-extension-verify` `launchql-inflection` `launchql-jwt-claims` `launchql-stamps` `launchql-totp` `livewire` `medications` `merge_ips` `meta_triggers` `migration` `monitoring_role` `mv_rewrite` `mv_stats` `myhelper` `mypg_sharding` `mysqlcompat` `newsfeeds` `nfiesta_gisdata` `nfiesta_sdesign` `nfiesta_target_data` `nonoms` `norm` `npm` `ollama` `omnidb_plpgsql_debugger` `partman_to_cstore` `pase` `pathman_sharding` `patients` `pg-audit-json` `pg2podg` [`pg4ml`](/ext/e/pg4ml) `pgAutomator` `pg_abris` [`pg_accumulator`](/ext/e/pg_accumulator) `pg_audit` `pg_audit_tools` `pg_biscuit` `pg_bleve` `pg_bm25` `pg_cache_tree` `pg_calcpi` `pg_catalog_get_defs` [`pg_column_tetris`](/ext/e/pg_column_tetris) `pg_credereum` `pg_datatype_password` `pg_dbo_timestamp` `pg_dbwa` `pg_dms` [`pg_drop_events`](/ext/e/pg_drop_events) `pg_dropbuffers` `pg_dropcache` `pg_eyes` `pg_fairmlq` [`pg_fsql`](/ext/e/pg_fsql) `pg_gen_uid` `pg_git` `pg_graphql_server` `pg_gsl` `pg_idm` `pg_idx_advisor` [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) `pg_landmetrics` `pg_ledger` `pg_linegazer` `pg_llm_helper` `pg_lock_pool` `pg_message_queue` `pg_monitoring` `pg_normalize_email` `pg_once` `pg_os` `pg_osgr` `pg_pageprep` `pg_part` `pg_particulous` [`pg_partman`](/ext/e/pg_partman) `pg_pathman` `pg_paxos` `pg_popyramids_datamarts` [`pg_profile`](/ext/e/pg_profile) `pg_prometheus` `pg_prttn_tools` `pg_reversi` `pg_sakila_db` `pg_semantic_cache` `pg_sendmail` `pg_sentence_transformer` `pg_sessions` `pg_shardman` [`pg_statviz`](/ext/e/pg_statviz) `pg_tileless` `pg_tms` `pg_turboquant` `pg_twkb` [`pg_upless`](/ext/e/pg_upless) `pg_zlog` `pgaut` `pgcat` `pgeyes` `pgfsm` [`pgh_consistency`](/ext/e/pgh_consistency) [`pgh_hgm`](/ext/e/pgh_hgm) [`pgh_output`](/ext/e/pgh_output) [`pgh_output_en_au`](/ext/e/pgh_output_en_au) [`pgh_output_pt_br`](/ext/e/pgh_output_pt_br) [`pgh_raster`](/ext/e/pgh_raster) [`pghydro`](/ext/e/pghydro) [`pgmemento`](/ext/e/pgmemento) `pgmock` `pgnats` `pgparts` `pgpm-base32` `pgpm-defaults` `pgpm-faker` `pgpm-inflection` `pgpm-jwt-claims` `pgpm-measurements` `pgpm-types` `pgpm-verify` `pgrao` `pgrollup` [`pgrouting`](/ext/e/pgrouting) [`pgsqlmock`](/ext/e/pgsqlmock) [`pgtap`](/ext/e/pgtap) `pgtap_fixture` `pgtelemetry` `pgvroom` `plparrot` [`plpgsql_check`](/ext/e/plpgsql_check) [`plpgsql_wrap`](/ext/e/plpgsql_wrap) `plrust` `postgres_ci` `postpic` [`powa`](/ext/e/powa) `prescriptions` `qgres` `quria` `range_partitioning` `recall` `recursively_delete` `rep_fdw` `rls_helpers` `roleman` `rpg` `rtiles` `scheduling` `session_variables` `short_ids` `skitch-extension-defaults` `skitch-extension-jobs` `skitch-extension-utils` `skitch-extension-verify` `sphinxlink` `sql_saga` `supa_queue` `supabase` `supabase_auth_apikey` `sys_syn_dblink` `tab_tier` `table_log_pl` [`table_version`](/ext/e/table_version) `tablelog` `telephone` `test_factory` `time_for_keys` `timestampandtz` `town` `types` [`unit`](/ext/e/unit) `units` `us-states` `uuidv7-sql` `variant` `vectors` `vrprouting` `wasm` `webauthn` `xl_global_views` `zombodb` |
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

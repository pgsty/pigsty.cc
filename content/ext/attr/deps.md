---
title: "依赖关系"
linkTitle: "依赖关系"
description: "具有扩展依赖关系的 PostgreSQL 扩展"
weight: 30
---

共有 **105** 个扩展依赖其他扩展，**58** 个扩展被其他扩展所依赖。

## 上游依赖

以下 **105** 个扩展需要先安装其他扩展才能使用：

| **扩展名** | **上游依赖** | **描述** |
|:-----------|:-------------|:---------|
| [`timeseries`](/ext/e/timeseries) | [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) | 时序数据API封装 |
| [`periods`](/ext/e/periods) | [`btree_gist`](/ext/e/btree_gist) | 为 PERIODs 和 SYSTEM VERSIONING 提供标准 SQL 功能 |
| [`emaj`](/ext/e/emaj) | [`dblink`](/ext/e/dblink) [`btree_gist`](/ext/e/btree_gist) | 让数据库的子集具有细粒度日志和时间旅行功能 |
| [`table_version`](/ext/e/table_version) | [`plpgsql`](/ext/e/plpgsql) | PostgreSQL 版本控制表扩展 |
| [`pg_later`](/ext/e/pg_later) | [`pgmq`](/ext/e/pgmq) | 执行查询，并在稍后异步获取查询结果 |
| [`pg_dispatch`](/ext/e/pg_dispatch) | [`pgcrypto`](/ext/e/pgcrypto) [`pg_cron`](/ext/e/pg_cron) | 基于 pg_cron 的异步 SQL 分发器 |
| [`postgis_topology`](/ext/e/postgis_topology) | [`postgis`](/ext/e/postgis) | PostGIS 拓扑空间类型和函数 |
| [`postgis_raster`](/ext/e/postgis_raster) | [`postgis`](/ext/e/postgis) | PostGIS 光栅类型和函数 |
| [`postgis_sfcgal`](/ext/e/postgis_sfcgal) | [`postgis`](/ext/e/postgis) | PostGIS SFCGAL 函数 |
| [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) | [`postgis`](/ext/e/postgis) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) | PostGIS tiger 地理编码器和反向地理编码器 |
| [`pgrouting`](/ext/e/pgrouting) | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) | 提供寻路能力 |
| [`pointcloud_postgis`](/ext/e/pointcloud_postgis) | [`postgis`](/ext/e/postgis) [`pointcloud`](/ext/e/pointcloud) | 将激光雷达点云与PostGIS几何类型相集成 |
| [`h3_postgis`](/ext/e/h3_postgis) | [`h3`](/ext/e/h3) [`postgis`](/ext/e/postgis) [`postgis_raster`](/ext/e/postgis_raster) | H3与PostGIS集成的扩展插件 |
| [`geoip`](/ext/e/geoip) | [`ip4r`](/ext/e/ip4r) | IP 地理位置扩展（围绕 MaxMind GeoLite 数据集的包装器） |
| [`pg_eviltransform`](/ext/e/pg_eviltransform) | [`postgis`](/ext/e/postgis) | 基于PostGIS ST_Transform 的 BD09/GCJ02 坐标转换扩展 |
| [`pghydro`](/ext/e/pghydro) | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) | PostgreSQL/PostGIS 排水网络分析核心扩展 |
| [`pgh_raster`](/ext/e/pgh_raster) | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) [`postgis_raster`](/ext/e/postgis_raster) [`pghydro`](/ext/e/pghydro) | PgHydro 栅格水文分析扩展 |
| [`pgh_hgm`](/ext/e/pgh_hgm) | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) [`postgis_raster`](/ext/e/postgis_raster) [`pghydro`](/ext/e/pghydro) [`pgh_raster`](/ext/e/pgh_raster) | PgHydro 水文地貌分析扩展 |
| [`pgh_output`](/ext/e/pgh_output) | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) [`pghydro`](/ext/e/pghydro) | PgHydro 输出与报表扩展 |
| [`pgh_output_en_au`](/ext/e/pgh_output_en_au) | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) [`pghydro`](/ext/e/pghydro) | PgHydro 澳式英语输出扩展 |
| [`pgh_output_pt_br`](/ext/e/pgh_output_pt_br) | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) [`pghydro`](/ext/e/pghydro) | PgHydro 巴西葡语输出扩展 |
| [`pgh_consistency`](/ext/e/pgh_consistency) | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) [`pghydro`](/ext/e/pghydro) | PgHydro Pfafstetter 一致性检查扩展 |
| [`mobilitydb`](/ext/e/mobilitydb) | [`postgis`](/ext/e/postgis) | MobilityDB地理空间投影数据管理分析平台 |
| [`mobilitydb_datagen`](/ext/e/mobilitydb_datagen) | [`mobilitydb`](/ext/e/mobilitydb) | MobilityDB随机数据生成函数 |
| [`earthdistance`](/ext/e/earthdistance) | [`cube`](/ext/e/cube) | 计算地球表面上的大圆距离 |
| [`vchord`](/ext/e/vchord) | [`vector`](/ext/e/vector) | 使用Rust重写的高性能向量扩展 |
| [`vectorscale`](/ext/e/vectorscale) | [`vector`](/ext/e/vector) | 使用DiskANN算法对向量进行高效索引 |
| [`vectorize`](/ext/e/vectorize) | [`pg_cron`](/ext/e/pg_cron) [`pgmq`](/ext/e/pgmq) [`vector`](/ext/e/vector) | 在PostgreSQL中封装RAG向量检索服务 |
| [`pg4ml`](/ext/e/pg4ml) | [`plpgsql`](/ext/e/plpgsql) [`tablefunc`](/ext/e/tablefunc) [`cube`](/ext/e/cube) [`plpython3u`](/ext/e/plpython3u) | PG4ML是一个机器学习框架 |
| [`biscuit`](/ext/e/biscuit) | [`plpgsql`](/ext/e/plpgsql) | 使用IAM的高性能文本模式匹配 |
| [`pg_mooncake`](/ext/e/pg_mooncake) | [`pg_duckdb`](/ext/e/pg_duckdb) | PostgreSQL列式存储表 |
| [`pg_partman`](/ext/e/pg_partman) | [`plpgsql`](/ext/e/plpgsql) | 用于按时间或 ID 管理分区表的扩展 |
| [`pgmb`](/ext/e/pgmb) | [`pg_cron`](/ext/e/pg_cron) [`http`](/ext/e/http) | 一个简单的PostgreSQL消息代理系统 |
| [`index_advisor`](/ext/e/index_advisor) | [`hypopg`](/ext/e/hypopg) | 查询索引建议器 |
| [`provsql`](/ext/e/provsql) | [`uuid-ossp`](/ext/e/uuid-ossp) | PostgreSQL 半环溯源与不确定性管理扩展 |
| [`omni_auth`](/ext/e/omni_auth) | [`omni_types`](/ext/e/omni_types) [`omni_id`](/ext/e/omni_id) [`pgcrypto`](/ext/e/pgcrypto) [`btree_gist`](/ext/e/btree_gist) [`omni_polyfill`](/ext/e/omni_polyfill) | Omnigres 基础会话认证管理模块 |
| [`omni_aws`](/ext/e/omni_aws) | [`omni_httpc`](/ext/e/omni_httpc) [`pgcrypto`](/ext/e/pgcrypto) [`omni_xml`](/ext/e/omni_xml) [`omni_web`](/ext/e/omni_web) | Omnigres AWS S3 API封装 |
| [`omni_cloudevents`](/ext/e/omni_cloudevents) | [`omni_web`](/ext/e/omni_web) | Omnigres CloudEvents 支持 |
| [`omni_containers`](/ext/e/omni_containers) | [`omni_httpc`](/ext/e/omni_httpc) [`omni_web`](/ext/e/omni_web) | Omnigres Docker容器管理模块 |
| [`omni_credentials`](/ext/e/omni_credentials) | [`pgcrypto`](/ext/e/pgcrypto) [`omni_os`](/ext/e/omni_os) | Omnigres 应用密钥管理模块 |
| [`omni_email`](/ext/e/omni_email) | [`omni_id`](/ext/e/omni_id) [`omni_cloudevents`](/ext/e/omni_cloudevents) [`omni_polyfill`](/ext/e/omni_polyfill) | Omnigres Email 框架 |
| [`omni_httpc`](/ext/e/omni_httpc) | [`omni_http`](/ext/e/omni_http) [`omni_types`](/ext/e/omni_types) | Omnigres HTTP客户端 |
| [`omni_httpd`](/ext/e/omni_httpd) | [`omni_types`](/ext/e/omni_types) [`omni_http`](/ext/e/omni_http) | Omnigres HTTP服务器 |
| [`omni_kube`](/ext/e/omni_kube) | [`omni_httpc`](/ext/e/omni_httpc) [`omni_web`](/ext/e/omni_web) [`omni_var`](/ext/e/omni_var) [`omni_yaml`](/ext/e/omni_yaml) | Omnigres Kubernetes集成模块 |
| [`omni_ledger`](/ext/e/omni_ledger) | [`omni_id`](/ext/e/omni_id) [`omni_polyfill`](/ext/e/omni_polyfill) | Omnigres 金融账本模块 |
| [`omni_python`](/ext/e/omni_python) | [`plpython3u`](/ext/e/plpython3u) | Omnigres 第一类Python支持模块 |
| [`omni_rest`](/ext/e/omni_rest) | [`omni_httpd`](/ext/e/omni_httpd) [`omni_sql`](/ext/e/omni_sql) [`omni_web`](/ext/e/omni_web) [`omni_var`](/ext/e/omni_var) [`pgcrypto`](/ext/e/pgcrypto) | Omnigres REST API 工具包 |
| [`omni_schema`](/ext/e/omni_schema) | [`omni_sql`](/ext/e/omni_sql) [`omni_vfs`](/ext/e/omni_vfs) [`omni_polyfill`](/ext/e/omni_polyfill) [`omni_yaml`](/ext/e/omni_yaml) [`dblink`](/ext/e/dblink) [`postgres_fdw`](/ext/e/postgres_fdw) [`omni_types`](/ext/e/omni_types) [`omni_cloudevents`](/ext/e/omni_cloudevents) | Omnigres 高级模式管理组件 |
| [`omni_session`](/ext/e/omni_session) | [`omni_var`](/ext/e/omni_var) [`omni_id`](/ext/e/omni_id) [`omni_web`](/ext/e/omni_web) [`omni_httpd`](/ext/e/omni_httpd) [`omni_polyfill`](/ext/e/omni_polyfill) | Omnigres 会话管理器 |
| [`omni_test`](/ext/e/omni_test) | [`dblink`](/ext/e/dblink) [`omni_cloudevents`](/ext/e/omni_cloudevents) | Omnigres 测试框架 |
| [`omni_vfs`](/ext/e/omni_vfs) | [`omni_vfs_types_v1`](/ext/e/omni_vfs_types_v1) [`dblink`](/ext/e/dblink) | Omnigres 虚拟文件系统 |
| [`hstore_pllua`](/ext/e/hstore_pllua) | [`hstore`](/ext/e/hstore) [`pllua`](/ext/e/pllua) | Lua 程序语言的Hstore适配扩展 |
| [`hstore_plluau`](/ext/e/hstore_plluau) | [`hstore`](/ext/e/hstore) [`plluau`](/ext/e/plluau) | Lua 程序语言的Hstore适配扩展（不受信任的） |
| [`plpgsql_check`](/ext/e/plpgsql_check) | [`plpgsql`](/ext/e/plpgsql) | 对 plpgsql 函数进行扩展检查 |
| [`pgtap`](/ext/e/pgtap) | [`plpgsql`](/ext/e/plpgsql) | PostgreSQL单元测试框架 |
| [`plperl`](/ext/e/plperl) | [`plperl`](/ext/e/plperl) | PL/Perl 存储过程语言 |
| [`bool_plperl`](/ext/e/bool_plperl) | [`plperl`](/ext/e/plperl) | 在 bool 和 plperl 之间转换 |
| [`hstore_plperl`](/ext/e/hstore_plperl) | [`hstore`](/ext/e/hstore) [`plperl`](/ext/e/plperl) | 在 hstore 和 plperl 之间转换适配类型 |
| [`jsonb_plperl`](/ext/e/jsonb_plperl) | [`plperl`](/ext/e/plperl) | 在 jsonb 和 plperl 之间转换 |
| [`plperlu`](/ext/e/plperlu) | [`plperlu`](/ext/e/plperlu) | PL/PerlU 存储过程语言（未受信/高权限） |
| [`bool_plperlu`](/ext/e/bool_plperlu) | [`plperlu`](/ext/e/plperlu) | 在 bool 和 plperlu 之间转换 |
| [`jsonb_plperlu`](/ext/e/jsonb_plperlu) | [`plperlu`](/ext/e/plperlu) | 在 jsonb 和 plperlu 之间转换 |
| [`hstore_plperlu`](/ext/e/hstore_plperlu) | [`hstore`](/ext/e/hstore) [`plperlu`](/ext/e/plperlu) | 在 hstore 和 plperlu 之间转换适配类型 |
| [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) | [`plpython3u`](/ext/e/plpython3u) | 在 jsonb 和 plpython3u 之间转换 |
| [`ltree_plpython3u`](/ext/e/ltree_plpython3u) | [`ltree`](/ext/e/ltree) [`plpython3u`](/ext/e/plpython3u) | 在 ltree 和 plpython3u 之间转换 |
| [`hstore_plpython3u`](/ext/e/hstore_plpython3u) | [`hstore`](/ext/e/hstore) [`plpython3u`](/ext/e/plpython3u) | 在 hstore 和 plpython3u 之间转换 |
| [`unit`](/ext/e/unit) | [`plpgsql`](/ext/e/plpgsql) | SI 国标单位扩展 |
| [`pgfaceting`](/ext/e/pgfaceting) | [`roaringbitmap`](/ext/e/roaringbitmap) | 使用倒排索引的高速切面查询 |
| [`pg_xenophile`](/ext/e/pg_xenophile) | [`hstore`](/ext/e/hstore) | PostgreSQL i8n与l10n工具包 |
| [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) | [`pg_xenophile`](/ext/e/pg_xenophile) | PostgreSQL l10n 工具包 |
| [`currency`](/ext/e/currency) | [`plpgsql`](/ext/e/plpgsql) | 使用1字节表示的货币数据类型 |
| [`pg_fsql`](/ext/e/pg_fsql) | [`plpgsql`](/ext/e/plpgsql) | 支持 JSONB 驱动执行的递归 SQL 模板引擎 |
| [`pglock`](/ext/e/pglock) | [`pg_cron`](/ext/e/pg_cron) | 在 PostgreSQL 内实现轻量级分布式锁服务 |
| [`pgjwt`](/ext/e/pgjwt) | [`pgcrypto`](/ext/e/pgcrypto) | JSON Web Token API 的PG实现 (supabase) |
| [`pg_readme`](/ext/e/pg_readme) | [`hstore`](/ext/e/hstore) | 为模式与扩展生成Markdown文档 |
| [`pg_readme_test_extension`](/ext/e/pg_readme_test_extension) | [`hstore`](/ext/e/hstore) | 为模式与扩展生成Markdown文档 |
| [`ddl_historization`](/ext/e/ddl_historization) | [`plpgsql`](/ext/e/plpgsql) | 用SQL将所有DDL变更写入到数据库表中 |
| [`data_historization`](/ext/e/data_historization) | [`plpgsql`](/ext/e/plpgsql) | 用SQL将数据变更历史保存到分区表中 |
| [`schedoc`](/ext/e/schedoc) | [`ddl_historization`](/ext/e/ddl_historization) | 在Django与DBT之间通过注释文档交换元数据 |
| [`sparql`](/ext/e/sparql) | [`plperl`](/ext/e/plperl) [`plperlu`](/ext/e/plperlu) | 使用SQL查询SPARQL数据源 |
| [`pgautofailover`](/ext/e/pgautofailover) | [`btree_gist`](/ext/e/btree_gist) | PG 自动故障迁移 |
| [`pg_upless`](/ext/e/pg_upless) | [`plpgsql`](/ext/e/plpgsql) | 检测表上的无用UPDATE |
| [`pgcozy`](/ext/e/pgcozy) | [`pg_buffercache`](/ext/e/pg_buffercache) [`pg_prewarm`](/ext/e/pg_prewarm) | 根据先前的pg_buffercache快照预热内存缓冲区 |
| [`pg_drop_events`](/ext/e/pg_drop_events) | [`plpgsql`](/ext/e/plpgsql) | 记录删表删列删视图的事务号，辅助PITR确定时间点 |
| [`pgelog`](/ext/e/pgelog) | [`dblink`](/ext/e/dblink) [`pg_variables`](/ext/e/pg_variables) | 通过伪自治事务实现扩展日志记录 |
| [`pg_profile`](/ext/e/pg_profile) | [`dblink`](/ext/e/dblink) [`plpgsql`](/ext/e/plpgsql) | PostgreSQL 数据库负载记录与AWR报表工具 |
| [`pg_stat_kcache`](/ext/e/pg_stat_kcache) | [`pg_stat_statements`](/ext/e/pg_stat_statements) | 内核统计信息收集 |
| [`pg_sqlog`](/ext/e/pg_sqlog) | [`file_fdw`](/ext/e/file_fdw) | 提供访问PostgreSQL日志的SQL接口 |
| [`powa`](/ext/e/powa) | [`plpgsql`](/ext/e/plpgsql) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`btree_gist`](/ext/e/btree_gist) | PostgreSQL 工作负载分析器-核心 |
| [`column_encrypt`](/ext/e/column_encrypt) | [`pgcrypto`](/ext/e/pgcrypto) | 透明列级加密扩展，提供 encrypted_text 与 encrypted_bytea 类型 |
| [`supabase_vault`](/ext/e/supabase_vault) | [`pgsodium`](/ext/e/pgsodium) | 在 Vault 中存储加密凭证的扩展 (supabase) |
| [`pg_auditor`](/ext/e/pg_auditor) | [`hstore`](/ext/e/hstore) | 审计数据变更并提供闪回能力 |
| [`pg_jobmon`](/ext/e/pg_jobmon) | [`dblink`](/ext/e/dblink) | 记录和监控函数 |
| [`pgcryptokey`](/ext/e/pgcryptokey) | [`pgcrypto`](/ext/e/pgcrypto) | PG密钥管理 |
| [`pgbouncer_fdw`](/ext/e/pgbouncer_fdw) | [`dblink`](/ext/e/dblink) | 用SQL查询pgbouncer统计信息，并执行pgbouncer命令 |
| [`documentdb`](/ext/e/documentdb) | [`documentdb_core`](/ext/e/documentdb_core) [`pg_cron`](/ext/e/pg_cron) [`postgis`](/ext/e/postgis) [`tsm_system_rows`](/ext/e/tsm_system_rows) [`vector`](/ext/e/vector) | 微软DocumentDB的API层 |
| [`documentdb_distributed`](/ext/e/documentdb_distributed) | [`citus`](/ext/e/citus) [`documentdb_core`](/ext/e/documentdb_core) [`documentdb`](/ext/e/documentdb) | DocumentDB多节点模式的API层 |
| [`ora_btree_gin`](/ext/e/ora_btree_gin) | [`ivorysql_ora`](/ext/e/ivorysql_ora) | Oracle 数据类型 GIN 索引支持 |
| [`ora_btree_gist`](/ext/e/ora_btree_gist) | [`ivorysql_ora`](/ext/e/ivorysql_ora) | Oracle 数据类型 GiST 索引支持 |
| [`pg_utl_smtp`](/ext/e/pg_utl_smtp) | [`plperlu`](/ext/e/plperlu) | Oracle UTL_SMTP 兼容扩展（基于 plperlu） |
| [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | [`babelfishpg_common`](/ext/e/babelfishpg_common) [`uuid-ossp`](/ext/e/uuid-ossp) | SQL Server SQL语法兼容性扩展 |
| [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | SQL Server TDS线缆协议兼容扩展 |
| [`pglogical_ticker`](/ext/e/pglogical_ticker) | [`pglogical`](/ext/e/pglogical) | pglogical复制延迟以秒计的精确视图 |
| [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) | [`pglogical`](/ext/e/pglogical) | 使用 pglogical 执行自动 DDL 部署 |
| [`mimeo`](/ext/e/mimeo) | [`dblink`](/ext/e/dblink) | 在PostgreSQL实例间进行表级复制 |
{.ext-table}

## 下游依赖

以下 **58** 个扩展被其他扩展所依赖：

| **扩展名** | **下游依赖** | **描述** |
|:-----------|:-------------|:---------|
| [`pg_cron`](/ext/e/pg_cron) | [`documentdb`](/ext/e/documentdb) [`pg_incremental`](/ext/e/pg_incremental) [`timeseries`](/ext/e/timeseries) [`vectorize`](/ext/e/vectorize) [`pgmb`](/ext/e/pgmb) | 定时任务调度器 |
| [`postgis`](/ext/e/postgis) | [`documentdb`](/ext/e/documentdb) [`h3_postgis`](/ext/e/h3_postgis) [`mobilitydb`](/ext/e/mobilitydb) [`pgrouting`](/ext/e/pgrouting) [`pointcloud_postgis`](/ext/e/pointcloud_postgis) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`postgis_topology`](/ext/e/postgis_topology) [`pg_eviltransform`](/ext/e/pg_eviltransform) | PostGIS 几何和地理空间扩展 |
| [`postgis_raster`](/ext/e/postgis_raster) | [`h3_postgis`](/ext/e/h3_postgis) | PostGIS 光栅类型和函数 |
| [`pointcloud`](/ext/e/pointcloud) | [`pointcloud_postgis`](/ext/e/pointcloud_postgis) | 提供激光雷达点云数据类型支持 |
| [`h3`](/ext/e/h3) | [`h3_postgis`](/ext/e/h3_postgis) | H3六边形层级索引支持 |
| [`mobilitydb`](/ext/e/mobilitydb) | [`mobilitydb_datagen`](/ext/e/mobilitydb_datagen) | MobilityDB地理空间投影数据管理分析平台 |
| [`vector`](/ext/e/vector) | [`documentdb`](/ext/e/documentdb) [`vchord`](/ext/e/vchord) [`vectorize`](/ext/e/vectorize) [`vectorscale`](/ext/e/vectorscale) | 向量数据类型和 ivfflat / hnsw 访问方法 |
| [`fuzzystrmatch`](/ext/e/fuzzystrmatch) | [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) | 确定字符串之间的相似性和距离 |
| [`citus`](/ext/e/citus) | [`documentdb_distributed`](/ext/e/documentdb_distributed) | Citus 分布式数据库 |
| [`pg_duckdb`](/ext/e/pg_duckdb) | [`pg_mooncake`](/ext/e/pg_mooncake) | 在PostgreSQL中的嵌入式DuckDB扩展 |
| [`pg_partman`](/ext/e/pg_partman) | [`timeseries`](/ext/e/timeseries) | 用于按时间或 ID 管理分区表的扩展 |
| [`tablefunc`](/ext/e/tablefunc) | [`pg4ml`](/ext/e/pg4ml) | 交叉表函数 |
| [`pgmq`](/ext/e/pgmq) | [`pg_later`](/ext/e/pg_later) [`vectorize`](/ext/e/vectorize) | 基于Postgres实现类似AWS SQS/RSMQ的消息队列 |
| [`rum`](/ext/e/rum) | [`documentdb`](/ext/e/documentdb) | RUM 索引访问方法 |
| [`omni_cloudevents`](/ext/e/omni_cloudevents) | [`omni_email`](/ext/e/omni_email) [`omni_schema`](/ext/e/omni_schema) [`omni_test`](/ext/e/omni_test) | Omnigres CloudEvents 支持 |
| [`omni_http`](/ext/e/omni_http) | [`omni_httpc`](/ext/e/omni_httpc) [`omni_httpd`](/ext/e/omni_httpd) | Omnigres 基本HTTP类型 |
| [`omni_httpc`](/ext/e/omni_httpc) | [`omni_aws`](/ext/e/omni_aws) [`omni_containers`](/ext/e/omni_containers) [`omni_kube`](/ext/e/omni_kube) | Omnigres HTTP客户端 |
| [`omni_httpd`](/ext/e/omni_httpd) | [`omni_rest`](/ext/e/omni_rest) [`omni_session`](/ext/e/omni_session) | Omnigres HTTP服务器 |
| [`omni_id`](/ext/e/omni_id) | [`omni_auth`](/ext/e/omni_auth) [`omni_email`](/ext/e/omni_email) [`omni_ledger`](/ext/e/omni_ledger) [`omni_session`](/ext/e/omni_session) | Omnigres ID身份数据类型 |
| [`omni_os`](/ext/e/omni_os) | [`omni_credentials`](/ext/e/omni_credentials) | Omnigres 操作系统集成模块 |
| [`omni_polyfill`](/ext/e/omni_polyfill) | [`omni_auth`](/ext/e/omni_auth) [`omni_email`](/ext/e/omni_email) [`omni_ledger`](/ext/e/omni_ledger) [`omni_schema`](/ext/e/omni_schema) [`omni_session`](/ext/e/omni_session) | Omnigres Postgres多态API |
| [`omni_sql`](/ext/e/omni_sql) | [`omni_rest`](/ext/e/omni_rest) [`omni_schema`](/ext/e/omni_schema) | Omnigres SQL编程组件 |
| [`omni_types`](/ext/e/omni_types) | [`omni_auth`](/ext/e/omni_auth) [`omni_httpc`](/ext/e/omni_httpc) [`omni_httpd`](/ext/e/omni_httpd) [`omni_schema`](/ext/e/omni_schema) | Omnigres 高级数据类型模块 |
| [`omni_var`](/ext/e/omni_var) | [`omni_kube`](/ext/e/omni_kube) [`omni_rest`](/ext/e/omni_rest) [`omni_session`](/ext/e/omni_session) | Omnigres 局部变量模块 |
| [`omni_vfs`](/ext/e/omni_vfs) | [`omni_schema`](/ext/e/omni_schema) | Omnigres 虚拟文件系统 |
| [`omni_vfs_types_v1`](/ext/e/omni_vfs_types_v1) | [`omni_vfs`](/ext/e/omni_vfs) | Omnigres 虚拟文件系统（v1） |
| [`omni_web`](/ext/e/omni_web) | [`omni_aws`](/ext/e/omni_aws) [`omni_cloudevents`](/ext/e/omni_cloudevents) [`omni_containers`](/ext/e/omni_containers) [`omni_kube`](/ext/e/omni_kube) [`omni_rest`](/ext/e/omni_rest) [`omni_session`](/ext/e/omni_session) | Omnigres Web工具箱 |
| [`omni_xml`](/ext/e/omni_xml) | [`omni_aws`](/ext/e/omni_aws) | Omnigres XML工具包 |
| [`omni_yaml`](/ext/e/omni_yaml) | [`omni_kube`](/ext/e/omni_kube) [`omni_schema`](/ext/e/omni_schema) | Omnigres YAML工具包 |
| [`pllua`](/ext/e/pllua) | [`hstore_pllua`](/ext/e/hstore_pllua) | Lua 程序语言 |
| [`plluau`](/ext/e/plluau) | [`hstore_plluau`](/ext/e/hstore_plluau) | Lua 程序语言（不受信任的） |
| [`plperl`](/ext/e/plperl) | [`bool_plperl`](/ext/e/bool_plperl) [`hstore_plperl`](/ext/e/hstore_plperl) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`plperl`](/ext/e/plperl) [`sparql`](/ext/e/sparql) | PL/Perl 存储过程语言 |
| [`plperlu`](/ext/e/plperlu) | [`bool_plperlu`](/ext/e/bool_plperlu) [`hstore_plperlu`](/ext/e/hstore_plperlu) [`jsonb_plperlu`](/ext/e/jsonb_plperlu) [`plperlu`](/ext/e/plperlu) [`pg_utl_smtp`](/ext/e/pg_utl_smtp) [`sparql`](/ext/e/sparql) | PL/PerlU 存储过程语言（未受信/高权限） |
| [`plpgsql`](/ext/e/plpgsql) | [`data_historization`](/ext/e/data_historization) [`ddl_historization`](/ext/e/ddl_historization) [`pg4ml`](/ext/e/pg4ml) [`pg_drop_events`](/ext/e/pg_drop_events) [`pg_profile`](/ext/e/pg_profile) [`pg_upless`](/ext/e/pg_upless) [`plpgsql_check`](/ext/e/plpgsql_check) [`powa`](/ext/e/powa) [`table_version`](/ext/e/table_version) [`unit`](/ext/e/unit) [`biscuit`](/ext/e/biscuit) | PL/pgSQL 程序设计语言 |
| [`plpython3u`](/ext/e/plpython3u) | [`hstore_plpython3u`](/ext/e/hstore_plpython3u) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`ltree_plpython3u`](/ext/e/ltree_plpython3u) [`omni_python`](/ext/e/omni_python) [`pg4ml`](/ext/e/pg4ml) | PL/Python3 存储过程语言（未受信/高权限） |
| [`roaringbitmap`](/ext/e/roaringbitmap) | [`pgfaceting`](/ext/e/pgfaceting) | 支持RoaringBitmap数据类型 |
| [`pg_xenophile`](/ext/e/pg_xenophile) | [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) | PostgreSQL i8n与l10n工具包 |
| [`ip4r`](/ext/e/ip4r) | [`geoip`](/ext/e/geoip) | PostgreSQL 的 IPv4/v6 和 IPv4/v6 范围索引类型 |
| [`cube`](/ext/e/cube) | [`earthdistance`](/ext/e/earthdistance) [`pg4ml`](/ext/e/pg4ml) | 用于存储多维立方体的数据类型 |
| [`ltree`](/ext/e/ltree) | [`ltree_plpython3u`](/ext/e/ltree_plpython3u) | 用于表示分层树状结构的数据类型 |
| [`hstore`](/ext/e/hstore) | [`hstore_pllua`](/ext/e/hstore_pllua) [`hstore_plluau`](/ext/e/hstore_plluau) [`hstore_plpython3u`](/ext/e/hstore_plpython3u) [`pg_readme`](/ext/e/pg_readme) [`pg_readme_test_extension`](/ext/e/pg_readme_test_extension) | 用于存储（键，值）对集合的数据类型 |
| [`pg_net`](/ext/e/pg_net) | [`pgmb`](/ext/e/pgmb) | 用 SQL 进行异步非阻塞HTTP/HTTPS 请求的扩展 (supabase) |
| [`ddl_historization`](/ext/e/ddl_historization) | [`schedoc`](/ext/e/schedoc) | 用SQL将所有DDL变更写入到数据库表中 |
| [`tsm_system_rows`](/ext/e/tsm_system_rows) | [`documentdb`](/ext/e/documentdb) | 接受行数限制的 TABLESAMPLE 方法 |
| [`uuid-ossp`](/ext/e/uuid-ossp) | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | 生成通用唯一标识符（UUIDs） |
| [`btree_gist`](/ext/e/btree_gist) | [`emaj`](/ext/e/emaj) [`omni_auth`](/ext/e/omni_auth) [`periods`](/ext/e/periods) [`pgautofailover`](/ext/e/pgautofailover) [`powa`](/ext/e/powa) | 用GiST索引常见数据类型 |
| [`pg_stat_statements`](/ext/e/pg_stat_statements) | [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`powa`](/ext/e/powa) | 跟踪所有执行的 SQL 语句的计划和执行统计信息 |
| [`pgsodium`](/ext/e/pgsodium) | [`supabase_vault`](/ext/e/supabase_vault) | 表数据加密存储 TDE |
| [`pgcrypto`](/ext/e/pgcrypto) | [`omni_auth`](/ext/e/omni_auth) [`omni_aws`](/ext/e/omni_aws) [`omni_credentials`](/ext/e/omni_credentials) [`omni_rest`](/ext/e/omni_rest) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgjwt`](/ext/e/pgjwt) | 实用加解密函数 |
| [`dblink`](/ext/e/dblink) | [`emaj`](/ext/e/emaj) [`mimeo`](/ext/e/mimeo) [`omni_schema`](/ext/e/omni_schema) [`omni_test`](/ext/e/omni_test) [`omni_vfs`](/ext/e/omni_vfs) [`pg_jobmon`](/ext/e/pg_jobmon) [`pg_profile`](/ext/e/pg_profile) | 从数据库内连接到其他 PostgreSQL 数据库 |
| [`file_fdw`](/ext/e/file_fdw) | [`pg_sqlog`](/ext/e/pg_sqlog) | 访问外部文件的外部数据包装器 |
| [`postgres_fdw`](/ext/e/postgres_fdw) | [`omni_schema`](/ext/e/omni_schema) | 用于远程 PostgreSQL 服务器的外部数据包装器 |
| [`documentdb`](/ext/e/documentdb) | [`documentdb_distributed`](/ext/e/documentdb_distributed) | 微软DocumentDB的API层 |
| [`documentdb_core`](/ext/e/documentdb_core) | [`documentdb`](/ext/e/documentdb) [`documentdb_distributed`](/ext/e/documentdb_distributed) | 微软DocumentDB的核心API层实现 |
| [`ivorysql_ora`](/ext/e/ivorysql_ora) | [`ora_btree_gin`](/ext/e/ora_btree_gin) [`ora_btree_gist`](/ext/e/ora_btree_gist) | Oracle 兼容扩展 |
| [`babelfishpg_common`](/ext/e/babelfishpg_common) | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | SQL Server 数据类型兼容扩展 |
| [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | SQL Server SQL语法兼容性扩展 |
| [`pglogical`](/ext/e/pglogical) | [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`pglogical_ticker`](/ext/e/pglogical_ticker) | PostgreSQL逻辑复制：三方扩展实现 |
{.ext-table}


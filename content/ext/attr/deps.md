---
title: "依赖关系"
linkTitle: "依赖关系"
description: "具有扩展依赖关系的 PostgreSQL 扩展"
weight: 30
---

共有 **129** 个扩展依赖其他扩展，**76** 个扩展被其他扩展所依赖。

## 上游依赖

以下 **129** 个扩展需要先安装其他扩展才能使用：

| **扩展名** | **上游依赖** | **描述** |
|:-----------|:-------------|:---------|
| [`timeseries`](/ext/e/timeseries) | [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) | 时序数据API封装 |
| [`periods`](/ext/e/periods) | [`btree_gist`](/ext/e/btree_gist) | 为 PERIODs 和 SYSTEM VERSIONING 提供标准 SQL 功能 |
| [`emaj`](/ext/e/emaj) | [`btree_gist`](/ext/e/btree_gist) [`dblink`](/ext/e/dblink) | 让数据库的子集具有细粒度日志和时间旅行功能 |
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
| [`qdgc_postgis`](/ext/e/qdgc_postgis) | [`qdgc`](/ext/e/qdgc) [`postgis`](/ext/e/postgis) | 为 QDGC 增加 PostGIS geometry/geography 绑定与区域到网格单元的填充能力。 |
| [`vchord`](/ext/e/vchord) | [`vector`](/ext/e/vector) | 使用Rust重写的高性能向量扩展 |
| [`vectorscale`](/ext/e/vectorscale) | [`vector`](/ext/e/vector) | 使用DiskANN算法对向量进行高效索引 |
| [`vectorize`](/ext/e/vectorize) | [`pg_cron`](/ext/e/pg_cron) [`pgmq`](/ext/e/pgmq) [`vector`](/ext/e/vector) | 在PostgreSQL中封装RAG向量检索服务 |
| [`pg4ml`](/ext/e/pg4ml) | [`plpgsql`](/ext/e/plpgsql) [`tablefunc`](/ext/e/tablefunc) [`cube`](/ext/e/cube) [`plpython3u`](/ext/e/plpython3u) | PG4ML是一个机器学习框架 |
| [`pgmnemo`](/ext/e/pgmnemo) | [`vector`](/ext/e/vector) | PostgreSQL 单计划多模态智能体记忆扩展 |
| [`pgcontext_pgvector`](/ext/e/pgcontext_pgvector) | [`pgcontext`](/ext/e/pgcontext) [`vector`](/ext/e/vector) | pgcontext HNSW 索引的可选 pgvector 兼容桥接扩展。 |
| [`pg_search`](/ext/e/pg_search) | [`vector`](/ext/e/vector) | 使用 BM25 的 PostgreSQL 全文、分面与混合检索扩展 |
| [`biscuit`](/ext/e/biscuit) | [`plpgsql`](/ext/e/plpgsql) | 使用IAM的高性能文本模式匹配 |
| [`pg_mooncake`](/ext/e/pg_mooncake) | [`pg_duckdb`](/ext/e/pg_duckdb) | PostgreSQL列式存储表 |
| [`pg_partman`](/ext/e/pg_partman) | [`plpgsql`](/ext/e/plpgsql) | 用于按时间或 ID 管理分区表的扩展 |
| [`pg_lake`](/ext/e/pg_lake) | [`pg_lake_copy`](/ext/e/pg_lake_copy) [`pg_lake_table`](/ext/e/pg_lake_table) | Snowflake 开源的 PostgreSQL 数据湖与 Iceberg 集成扩展 |
| [`pg_extension_updater`](/ext/e/pg_extension_updater) | [`pg_extension_base`](/ext/e/pg_extension_base) | 在数据库启动时自动执行 ALTER EXTENSION UPDATE 的扩展更新器 |
| [`pg_lake_engine`](/ext/e/pg_lake_engine) | [`pg_extension_base`](/ext/e/pg_extension_base) [`pg_map`](/ext/e/pg_map) | 用于数据湖查询的查询引擎 |
| [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) | [`pg_lake_engine`](/ext/e/pg_lake_engine) [`plpgsql`](/ext/e/plpgsql) | PostgreSQL 中的 Iceberg 实现 |
| [`pg_lake_table`](/ext/e/pg_lake_table) | [`btree_gist`](/ext/e/btree_gist) [`pg_lake_engine`](/ext/e/pg_lake_engine) [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) | 数据湖表和 Iceberg 表 |
| [`pg_lake_copy`](/ext/e/pg_lake_copy) | [`pg_lake_engine`](/ext/e/pg_lake_engine) [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) [`pg_lake_table`](/ext/e/pg_lake_table) | 在 PostgreSQL 与对象存储数据湖文件之间执行 COPY 的扩展 |
| [`pgmb`](/ext/e/pgmb) | [`pg_cron`](/ext/e/pg_cron) [`http`](/ext/e/http) | 一个简单的PostgreSQL消息代理系统 |
| [`fsm_core`](/ext/e/fsm_core) | [`ltree`](/ext/e/ltree) [`pgmq`](/ext/e/pgmq) [`pg_jsonschema`](/ext/e/pg_jsonschema) | PostgreSQL 有限状态机工具包 |
| [`index_advisor`](/ext/e/index_advisor) | [`hypopg`](/ext/e/hypopg) | 查询索引建议器 |
| [`provsql`](/ext/e/provsql) | [`uuid-ossp`](/ext/e/uuid-ossp) | PostgreSQL 半环溯源、概率与不确定性管理扩展 |
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
| [`plpgsql_check`](/ext/e/plpgsql_check) | [`plpgsql`](/ext/e/plpgsql) | PL/pgSQL 函数的附加校验、性能分析与诊断工具 |
| [`pgsqlmock`](/ext/e/pgsqlmock) | [`plpgsql`](/ext/e/plpgsql) [`pgtap`](/ext/e/pgtap) | 为 PostgreSQL 单元测试提供函数 Mock、表和视图伪造能力 |
| [`jsonb_plruby`](/ext/e/jsonb_plruby) | [`plruby`](/ext/e/plruby) | 在 jsonb 与 PL/Ruby 原生 Ruby 数据之间转换 |
| [`hstore_plruby`](/ext/e/hstore_plruby) | [`hstore`](/ext/e/hstore) [`plruby`](/ext/e/plruby) | 在 hstore 与 PL/Ruby 的 Ruby Hash 之间转换 |
| [`ltree_plruby`](/ext/e/ltree_plruby) | [`ltree`](/ext/e/ltree) [`plruby`](/ext/e/plruby) | 在 ltree 与 PL/Ruby 的 Ruby Array 之间转换 |
| [`pgtap`](/ext/e/pgtap) | [`plpgsql`](/ext/e/plpgsql) | PostgreSQL单元测试框架 |
| [`faker`](/ext/e/faker) | [`plpython3u`](/ext/e/plpython3u) | 插入生成的测试伪造数据，Python库的包装 |
| [`bool_plperl`](/ext/e/bool_plperl) | [`plperl`](/ext/e/plperl) | 在 bool 和 plperl 之间转换 |
| [`hstore_plperl`](/ext/e/hstore_plperl) | [`hstore`](/ext/e/hstore) [`plperl`](/ext/e/plperl) | 在 hstore 和 plperl 之间转换适配类型 |
| [`jsonb_plperl`](/ext/e/jsonb_plperl) | [`plperl`](/ext/e/plperl) | 在 jsonb 和 plperl 之间转换 |
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
| [`pg_readme`](/ext/e/pg_readme) | [`hstore`](/ext/e/hstore) | 根据 PostgreSQL COMMENT 对象生成 Markdown README |
| [`ddl_historization`](/ext/e/ddl_historization) | [`plpgsql`](/ext/e/plpgsql) | 用SQL将所有DDL变更写入到数据库表中 |
| [`data_historization`](/ext/e/data_historization) | [`plpgsql`](/ext/e/plpgsql) | 用SQL将数据变更历史保存到分区表中 |
| [`schedoc`](/ext/e/schedoc) | [`ddl_historization`](/ext/e/ddl_historization) | 在Django与DBT之间通过注释文档交换元数据 |
| [`sparql`](/ext/e/sparql) | [`plperl`](/ext/e/plperl) [`plperlu`](/ext/e/plperlu) | 使用SQL查询SPARQL数据源 |
| [`fbsql`](/ext/e/fbsql) | [`plr`](/ext/e/plr) | 在 SQL 中保持关系闭包的公式化统计建模扩展 |
| [`pg_accumulator`](/ext/e/pg_accumulator) | [`plpgsql`](/ext/e/plpgsql) | PostgreSQL 中用于余额与周转跟踪的累积寄存器 |
| [`pgautofailover`](/ext/e/pgautofailover) | [`btree_gist`](/ext/e/btree_gist) | PG 自动故障迁移 |
| [`pg_upless`](/ext/e/pg_upless) | [`plpgsql`](/ext/e/plpgsql) | 检测表上的无用UPDATE |
| [`pgcozy`](/ext/e/pgcozy) | [`pg_buffercache`](/ext/e/pg_buffercache) [`pg_prewarm`](/ext/e/pg_prewarm) | 根据先前的pg_buffercache快照预热内存缓冲区 |
| [`pg_column_tetris`](/ext/e/pg_column_tetris) | [`plpgsql`](/ext/e/plpgsql) | 强制采用最优列对齐顺序，以减少 PostgreSQL 行数据中的填充浪费。 |
| [`cat_tools`](/ext/e/cat_tools) | [`plpgsql`](/ext/e/plpgsql) | 用于操作 PostgreSQL 系统目录的工具集 |
| [`pg_drop_events`](/ext/e/pg_drop_events) | [`plpgsql`](/ext/e/plpgsql) | 记录删表删列删视图的事务号，辅助PITR确定时间点 |
| [`pgelog`](/ext/e/pgelog) | [`dblink`](/ext/e/dblink) [`pg_variables`](/ext/e/pg_variables) | 通过伪自治事务实现扩展日志记录 |
| [`pg_profile`](/ext/e/pg_profile) | [`dblink`](/ext/e/dblink) [`plpgsql`](/ext/e/plpgsql) | PostgreSQL 数据库负载记录与AWR报表工具 |
| [`pgfr_record`](/ext/e/pgfr_record) | [`pg_cron`](/ext/e/pg_cron) | 基于 pg_cron 的服务端 PostgreSQL 性能飞行记录器 |
| [`pgfr_analyze`](/ext/e/pgfr_analyze) | [`pgfr_record`](/ext/e/pgfr_record) | pgfr_record 采集数据的报告与性能分析函数 |
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
| [`documentdb_extended_rum`](/ext/e/documentdb_extended_rum) | [`documentdb`](/ext/e/documentdb) | DocumentDB扩展RUM索引访问方法 |
| [`ora_btree_gin`](/ext/e/ora_btree_gin) | [`ivorysql_ora`](/ext/e/ivorysql_ora) | Oracle 数据类型 GIN 索引支持 |
| [`ora_btree_gist`](/ext/e/ora_btree_gist) | [`ivorysql_ora`](/ext/e/ivorysql_ora) | Oracle 数据类型 GiST 索引支持 |
| [`db2fce`](/ext/e/db2fce) | [`plpgsql`](/ext/e/plpgsql) | 为 PostgreSQL 提供 DB2 兼容函数、类型、操作符与 SYSIBM.SYSDUMMY1。 |
| [`plpgsql_wrap`](/ext/e/plpgsql_wrap) | [`plpgsql`](/ext/e/plpgsql) | Oracle WRAP 等价的 PL/pgSQL 语言处理器，以 AES-256-GCM 加密存储过程源码。 |
| [`pg_dbms_lock`](/ext/e/pg_dbms_lock) | [`pg_background`](/ext/e/pg_background) | 为PG添加对 Oracle DBMS_LOCK 的完整兼容性支持 |
| [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog) | [`pg_statement_rollback`](/ext/e/pg_statement_rollback) | 模仿 Oracle DBMS_ERRLOG 模块来记录特定表的DML错误 |
| [`pg_utl_smtp`](/ext/e/pg_utl_smtp) | [`plperlu`](/ext/e/plperlu) | Oracle UTL_SMTP 兼容扩展（基于 plperlu） |
| [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | [`babelfishpg_common`](/ext/e/babelfishpg_common) [`uuid-ossp`](/ext/e/uuid-ossp) | SQL Server SQL语法兼容性扩展 |
| [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | SQL Server TDS线缆协议兼容扩展 |
| [`pglogical_ticker`](/ext/e/pglogical_ticker) | [`pglogical`](/ext/e/pglogical) | pglogical复制延迟以秒计的精确视图 |
| [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) | [`pglogical`](/ext/e/pglogical) | 使用 pglogical 执行自动 DDL 部署 |
| [`mimeo`](/ext/e/mimeo) | [`dblink`](/ext/e/dblink) | 在PostgreSQL实例间进行表级复制 |
{.ext-table}

## 下游依赖

以下 **76** 个扩展被其他扩展所依赖：

| **扩展名** | **下游依赖** | **描述** |
|:-----------|:-------------|:---------|
| [`pg_cron`](/ext/e/pg_cron) | [`documentdb`](/ext/e/documentdb) [`pg_dispatch`](/ext/e/pg_dispatch) [`pglock`](/ext/e/pglock) [`pgmb`](/ext/e/pgmb) [`timeseries`](/ext/e/timeseries) [`vectorize`](/ext/e/vectorize) | 定时任务调度器 |
| [`postgis`](/ext/e/postgis) | [`documentdb`](/ext/e/documentdb) [`h3_postgis`](/ext/e/h3_postgis) [`mobilitydb`](/ext/e/mobilitydb) [`pg_eviltransform`](/ext/e/pg_eviltransform) [`pgh_consistency`](/ext/e/pgh_consistency) [`pgh_hgm`](/ext/e/pgh_hgm) [`pgh_output`](/ext/e/pgh_output) [`pgh_output_en_au`](/ext/e/pgh_output_en_au) [`pgh_output_pt_br`](/ext/e/pgh_output_pt_br) [`pgh_raster`](/ext/e/pgh_raster) [`pghydro`](/ext/e/pghydro) [`pgrouting`](/ext/e/pgrouting) [`pointcloud_postgis`](/ext/e/pointcloud_postgis) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`postgis_topology`](/ext/e/postgis_topology) | PostGIS 几何和地理空间扩展 |
| [`postgis_raster`](/ext/e/postgis_raster) | [`h3_postgis`](/ext/e/h3_postgis) [`pgh_hgm`](/ext/e/pgh_hgm) [`pgh_raster`](/ext/e/pgh_raster) | PostGIS 光栅类型和函数 |
| [`pointcloud`](/ext/e/pointcloud) | [`pointcloud_postgis`](/ext/e/pointcloud_postgis) | 提供激光雷达点云数据类型支持 |
| [`h3`](/ext/e/h3) | [`h3_postgis`](/ext/e/h3_postgis) | H3六边形层级索引支持 |
| [`pghydro`](/ext/e/pghydro) | [`pgh_consistency`](/ext/e/pgh_consistency) [`pgh_hgm`](/ext/e/pgh_hgm) [`pgh_output`](/ext/e/pgh_output) [`pgh_output_en_au`](/ext/e/pgh_output_en_au) [`pgh_output_pt_br`](/ext/e/pgh_output_pt_br) [`pgh_raster`](/ext/e/pgh_raster) | PostgreSQL/PostGIS 排水网络分析核心扩展 |
| [`pgh_raster`](/ext/e/pgh_raster) | [`pgh_hgm`](/ext/e/pgh_hgm) | PgHydro 栅格水文分析扩展 |
| [`mobilitydb`](/ext/e/mobilitydb) | [`mobilitydb_datagen`](/ext/e/mobilitydb_datagen) | MobilityDB地理空间投影数据管理分析平台 |
| [`qdgc`](/ext/e/qdgc) | [`qdgc_postgis`](/ext/e/qdgc_postgis) | 用纯 SQL 编码、解码、遍历和填充扩展四分之一度网格单元（QDGC）编码。 |
| [`vector`](/ext/e/vector) | [`ai`](/ext/e/ai) [`alloydb_scann`](/ext/e/alloydb_scann) [`avocado`](/ext/e/avocado) [`documentdb`](/ext/e/documentdb) [`embedding_search`](/ext/e/embedding_search) [`hybrid_search`](/ext/e/hybrid_search) [`maludb_core`](/ext/e/maludb_core) [`pg_cuvs`](/ext/e/pg_cuvs) [`pg_diskann`](/ext/e/pg_diskann) [`pg_gembed`](/ext/e/pg_gembed) [`pg_knowledge_graph`](/ext/e/pg_knowledge_graph) [`pg_llm`](/ext/e/pg_llm) [`pg_llm_helper`](/ext/e/pg_llm_helper) [`pg_search`](/ext/e/pg_search) [`pg_semantic_cache`](/ext/e/pg_semantic_cache) [`pg_sentence_transformer`](/ext/e/pg_sentence_transformer) [`pg_splade`](/ext/e/pg_splade) [`pg_turboquant`](/ext/e/pg_turboquant) [`pgcontext_pgvector`](/ext/e/pgcontext_pgvector) [`pgedge_vectorizer`](/ext/e/pgedge_vectorizer) [`pgmnemo`](/ext/e/pgmnemo) [`pgpu`](/ext/e/pgpu) [`pgturbohybrid`](/ext/e/pgturbohybrid) [`pgvecutils`](/ext/e/pgvecutils) [`rag`](/ext/e/rag) [`rag_bge_small_en_v15`](/ext/e/rag_bge_small_en_v15) [`rag_jina_reranker_v1_tiny_en`](/ext/e/rag_jina_reranker_v1_tiny_en) [`rds_ai`](/ext/e/rds_ai) [`rds_embedding`](/ext/e/rds_embedding) [`vchord`](/ext/e/vchord) [`vectorize`](/ext/e/vectorize) [`vectorscale`](/ext/e/vectorscale) | 向量数据类型和 ivfflat / hnsw 访问方法 |
| [`pgcontext`](/ext/e/pgcontext) | [`pgcontext_pgvector`](/ext/e/pgcontext_pgvector) | 在 PostgreSQL 权威数据表上提供向量检索、过滤感知 HNSW 与混合检索。 |
| [`fuzzystrmatch`](/ext/e/fuzzystrmatch) | [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) | 确定字符串之间的相似性和距离 |
| [`citus`](/ext/e/citus) | [`cigration`](/ext/e/cigration) [`documentdb_distributed`](/ext/e/documentdb_distributed) | 将 PostgreSQL 横向扩展为分布式数据库 |
| [`pg_duckdb`](/ext/e/pg_duckdb) | [`pg_mooncake`](/ext/e/pg_mooncake) | 在PostgreSQL中的嵌入式DuckDB扩展 |
| [`pg_partman`](/ext/e/pg_partman) | [`partman_to_cstore`](/ext/e/partman_to_cstore) [`timeseries`](/ext/e/timeseries) | 用于按时间或 ID 管理分区表的扩展 |
| [`pg_extension_base`](/ext/e/pg_extension_base) | [`pg_extension_updater`](/ext/e/pg_extension_updater) [`pg_lake_engine`](/ext/e/pg_lake_engine) | Snowflake 提供的 PostgreSQL 扩展开发基础设施，支持库预加载、扩展生命周期后台工作进程和依赖管理 |
| [`pg_map`](/ext/e/pg_map) | [`pg_lake_engine`](/ext/e/pg_lake_engine) | pg_lake 内置并依赖的 PostgreSQL Map 数据类型。 |
| [`pg_lake_engine`](/ext/e/pg_lake_engine) | [`pg_lake_copy`](/ext/e/pg_lake_copy) [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) [`pg_lake_table`](/ext/e/pg_lake_table) | 用于数据湖查询的查询引擎 |
| [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) | [`pg_lake_copy`](/ext/e/pg_lake_copy) [`pg_lake_table`](/ext/e/pg_lake_table) | PostgreSQL 中的 Iceberg 实现 |
| [`pg_lake_table`](/ext/e/pg_lake_table) | [`pg_lake`](/ext/e/pg_lake) [`pg_lake_copy`](/ext/e/pg_lake_copy) | 数据湖表和 Iceberg 表 |
| [`pg_lake_copy`](/ext/e/pg_lake_copy) | [`pg_lake`](/ext/e/pg_lake) | 在 PostgreSQL 与对象存储数据湖文件之间执行 COPY 的扩展 |
| [`tablefunc`](/ext/e/tablefunc) | [`pg4ml`](/ext/e/pg4ml) | 交叉表函数 |
| [`pgmq`](/ext/e/pgmq) | [`fsm_core`](/ext/e/fsm_core) [`pg_later`](/ext/e/pg_later) [`vectorize`](/ext/e/vectorize) | 基于Postgres实现类似AWS SQS/RSMQ的消息队列 |
| [`pg_jsonschema`](/ext/e/pg_jsonschema) | [`fsm_core`](/ext/e/fsm_core) | 提供JSON Schema校验能力 |
| [`hypopg`](/ext/e/hypopg) | [`index_advisor`](/ext/e/index_advisor) | 假设索引，用于创建一个虚拟索引检验执行计划 |
| [`pg_variables`](/ext/e/pg_variables) | [`pgelog`](/ext/e/pgelog) | 提供标量、数组和记录类型的会话变量 |
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
| [`plruby`](/ext/e/plruby) | [`hstore_plruby`](/ext/e/hstore_plruby) [`jsonb_plruby`](/ext/e/jsonb_plruby) [`ltree_plruby`](/ext/e/ltree_plruby) | 将 MRI Ruby 嵌入 PostgreSQL，提供非可信过程语言 |
| [`plperl`](/ext/e/plperl) | [`bool_plperl`](/ext/e/bool_plperl) [`hstore_plperl`](/ext/e/hstore_plperl) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`sparql`](/ext/e/sparql) | PL/Perl 存储过程语言 |
| [`plperlu`](/ext/e/plperlu) | [`bool_plperlu`](/ext/e/bool_plperlu) [`hstore_plperlu`](/ext/e/hstore_plperlu) [`jsonb_plperlu`](/ext/e/jsonb_plperlu) [`pg_utl_smtp`](/ext/e/pg_utl_smtp) [`sparql`](/ext/e/sparql) | PL/PerlU 存储过程语言（未受信/高权限） |
| [`plpgsql`](/ext/e/plpgsql) | [`bedquilt`](/ext/e/bedquilt) [`biscuit`](/ext/e/biscuit) [`cat_tools`](/ext/e/cat_tools) [`check_orapg`](/ext/e/check_orapg) [`currency`](/ext/e/currency) [`data_historization`](/ext/e/data_historization) [`db2fce`](/ext/e/db2fce) [`dbpatch`](/ext/e/dbpatch) [`dbstat`](/ext/e/dbstat) [`ddl_historization`](/ext/e/ddl_historization) [`drop_role_helper`](/ext/e/drop_role_helper) [`dsef`](/ext/e/dsef) [`event_manager`](/ext/e/event_manager) [`explanation`](/ext/e/explanation) [`firefly`](/ext/e/firefly) [`geekspeak`](/ext/e/geekspeak) [`generic_plan`](/ext/e/generic_plan) [`gogudb`](/ext/e/gogudb) [`grants_manager`](/ext/e/grants_manager) [`hello-world`](/ext/e/hello-world) [`hybrid_search`](/ext/e/hybrid_search) [`index_analyzer`](/ext/e/index_analyzer) [`istoria`](/ext/e/istoria) [`italian_codes`](/ext/e/italian_codes) [`job_queue`](/ext/e/job_queue) [`json_query`](/ext/e/json_query) [`json_utils`](/ext/e/json_utils) [`jsonb_schema`](/ext/e/jsonb_schema) [`jx_io`](/ext/e/jx_io) [`keyhippo`](/ext/e/keyhippo) [`kilobase`](/ext/e/kilobase) [`kissfft`](/ext/e/kissfft) [`lab-orders`](/ext/e/lab-orders) [`launchql-base32`](/ext/e/launchql-base32) [`launchql-ext-types`](/ext/e/launchql-ext-types) [`launchql-extension-utils`](/ext/e/launchql-extension-utils) [`launchql-extension-verify`](/ext/e/launchql-extension-verify) [`launchql-inflection`](/ext/e/launchql-inflection) [`launchql-jwt-claims`](/ext/e/launchql-jwt-claims) [`launchql-stamps`](/ext/e/launchql-stamps) [`launchql-totp`](/ext/e/launchql-totp) [`livewire`](/ext/e/livewire) [`medications`](/ext/e/medications) [`merge_ips`](/ext/e/merge_ips) [`meta_triggers`](/ext/e/meta_triggers) [`migration`](/ext/e/migration) [`monitoring_role`](/ext/e/monitoring_role) [`mv_rewrite`](/ext/e/mv_rewrite) [`mv_stats`](/ext/e/mv_stats) [`myhelper`](/ext/e/myhelper) [`mypg_sharding`](/ext/e/mypg_sharding) [`mysqlcompat`](/ext/e/mysqlcompat) [`newsfeeds`](/ext/e/newsfeeds) [`nfiesta_gisdata`](/ext/e/nfiesta_gisdata) [`nfiesta_sdesign`](/ext/e/nfiesta_sdesign) [`nfiesta_target_data`](/ext/e/nfiesta_target_data) [`nonoms`](/ext/e/nonoms) [`norm`](/ext/e/norm) [`npm`](/ext/e/npm) [`ollama`](/ext/e/ollama) [`omnidb_plpgsql_debugger`](/ext/e/omnidb_plpgsql_debugger) [`partman_to_cstore`](/ext/e/partman_to_cstore) [`pase`](/ext/e/pase) [`pathman_sharding`](/ext/e/pathman_sharding) [`patients`](/ext/e/patients) [`pg-audit-json`](/ext/e/pg-audit-json) [`pg2podg`](/ext/e/pg2podg) [`pg4ml`](/ext/e/pg4ml) [`pgAutomator`](/ext/e/pgAutomator) [`pg_abris`](/ext/e/pg_abris) [`pg_accumulator`](/ext/e/pg_accumulator) [`pg_audit`](/ext/e/pg_audit) [`pg_audit_tools`](/ext/e/pg_audit_tools) [`pg_biscuit`](/ext/e/pg_biscuit) [`pg_bleve`](/ext/e/pg_bleve) [`pg_bm25`](/ext/e/pg_bm25) [`pg_cache_tree`](/ext/e/pg_cache_tree) [`pg_calcpi`](/ext/e/pg_calcpi) [`pg_catalog_get_defs`](/ext/e/pg_catalog_get_defs) [`pg_column_tetris`](/ext/e/pg_column_tetris) [`pg_credereum`](/ext/e/pg_credereum) [`pg_datatype_password`](/ext/e/pg_datatype_password) [`pg_dbo_timestamp`](/ext/e/pg_dbo_timestamp) [`pg_dbwa`](/ext/e/pg_dbwa) [`pg_dms`](/ext/e/pg_dms) [`pg_drop_events`](/ext/e/pg_drop_events) [`pg_dropbuffers`](/ext/e/pg_dropbuffers) [`pg_dropcache`](/ext/e/pg_dropcache) [`pg_eyes`](/ext/e/pg_eyes) [`pg_fairmlq`](/ext/e/pg_fairmlq) [`pg_fsql`](/ext/e/pg_fsql) [`pg_gen_uid`](/ext/e/pg_gen_uid) [`pg_git`](/ext/e/pg_git) [`pg_graphql_server`](/ext/e/pg_graphql_server) [`pg_gsl`](/ext/e/pg_gsl) [`pg_idm`](/ext/e/pg_idm) [`pg_idx_advisor`](/ext/e/pg_idx_advisor) [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) [`pg_landmetrics`](/ext/e/pg_landmetrics) [`pg_ledger`](/ext/e/pg_ledger) [`pg_linegazer`](/ext/e/pg_linegazer) [`pg_llm_helper`](/ext/e/pg_llm_helper) [`pg_lock_pool`](/ext/e/pg_lock_pool) [`pg_message_queue`](/ext/e/pg_message_queue) [`pg_monitoring`](/ext/e/pg_monitoring) [`pg_normalize_email`](/ext/e/pg_normalize_email) [`pg_once`](/ext/e/pg_once) [`pg_os`](/ext/e/pg_os) [`pg_osgr`](/ext/e/pg_osgr) [`pg_pageprep`](/ext/e/pg_pageprep) [`pg_part`](/ext/e/pg_part) [`pg_particulous`](/ext/e/pg_particulous) [`pg_partman`](/ext/e/pg_partman) [`pg_pathman`](/ext/e/pg_pathman) [`pg_paxos`](/ext/e/pg_paxos) [`pg_popyramids_datamarts`](/ext/e/pg_popyramids_datamarts) [`pg_profile`](/ext/e/pg_profile) [`pg_prometheus`](/ext/e/pg_prometheus) [`pg_prttn_tools`](/ext/e/pg_prttn_tools) [`pg_reversi`](/ext/e/pg_reversi) [`pg_sakila_db`](/ext/e/pg_sakila_db) [`pg_semantic_cache`](/ext/e/pg_semantic_cache) [`pg_sendmail`](/ext/e/pg_sendmail) [`pg_sentence_transformer`](/ext/e/pg_sentence_transformer) [`pg_sessions`](/ext/e/pg_sessions) [`pg_shardman`](/ext/e/pg_shardman) [`pg_statviz`](/ext/e/pg_statviz) [`pg_tileless`](/ext/e/pg_tileless) [`pg_tms`](/ext/e/pg_tms) [`pg_turboquant`](/ext/e/pg_turboquant) [`pg_twkb`](/ext/e/pg_twkb) [`pg_upless`](/ext/e/pg_upless) [`pg_zlog`](/ext/e/pg_zlog) [`pgaut`](/ext/e/pgaut) [`pgcat`](/ext/e/pgcat) [`pgeyes`](/ext/e/pgeyes) [`pgfsm`](/ext/e/pgfsm) [`pgh_consistency`](/ext/e/pgh_consistency) [`pgh_hgm`](/ext/e/pgh_hgm) [`pgh_output`](/ext/e/pgh_output) [`pgh_output_en_au`](/ext/e/pgh_output_en_au) [`pgh_output_pt_br`](/ext/e/pgh_output_pt_br) [`pgh_raster`](/ext/e/pgh_raster) [`pghydro`](/ext/e/pghydro) [`pgmemento`](/ext/e/pgmemento) [`pgmock`](/ext/e/pgmock) [`pgnats`](/ext/e/pgnats) [`pgparts`](/ext/e/pgparts) [`pgpm-base32`](/ext/e/pgpm-base32) [`pgpm-defaults`](/ext/e/pgpm-defaults) [`pgpm-faker`](/ext/e/pgpm-faker) [`pgpm-inflection`](/ext/e/pgpm-inflection) [`pgpm-jwt-claims`](/ext/e/pgpm-jwt-claims) [`pgpm-measurements`](/ext/e/pgpm-measurements) [`pgpm-types`](/ext/e/pgpm-types) [`pgpm-verify`](/ext/e/pgpm-verify) [`pgrao`](/ext/e/pgrao) [`pgrollup`](/ext/e/pgrollup) [`pgrouting`](/ext/e/pgrouting) [`pgsqlmock`](/ext/e/pgsqlmock) [`pgtap`](/ext/e/pgtap) [`pgtap_fixture`](/ext/e/pgtap_fixture) [`pgtelemetry`](/ext/e/pgtelemetry) [`pgvroom`](/ext/e/pgvroom) [`plparrot`](/ext/e/plparrot) [`plpgsql_check`](/ext/e/plpgsql_check) [`plpgsql_wrap`](/ext/e/plpgsql_wrap) [`plrust`](/ext/e/plrust) [`postgres_ci`](/ext/e/postgres_ci) [`postpic`](/ext/e/postpic) [`powa`](/ext/e/powa) [`prescriptions`](/ext/e/prescriptions) [`qgres`](/ext/e/qgres) [`quria`](/ext/e/quria) [`range_partitioning`](/ext/e/range_partitioning) [`recall`](/ext/e/recall) [`recursively_delete`](/ext/e/recursively_delete) [`rep_fdw`](/ext/e/rep_fdw) [`rls_helpers`](/ext/e/rls_helpers) [`roleman`](/ext/e/roleman) [`rpg`](/ext/e/rpg) [`rtiles`](/ext/e/rtiles) [`scheduling`](/ext/e/scheduling) [`session_variables`](/ext/e/session_variables) [`short_ids`](/ext/e/short_ids) [`skitch-extension-defaults`](/ext/e/skitch-extension-defaults) [`skitch-extension-jobs`](/ext/e/skitch-extension-jobs) [`skitch-extension-utils`](/ext/e/skitch-extension-utils) [`skitch-extension-verify`](/ext/e/skitch-extension-verify) [`sphinxlink`](/ext/e/sphinxlink) [`sql_saga`](/ext/e/sql_saga) [`supa_queue`](/ext/e/supa_queue) [`supabase`](/ext/e/supabase) [`supabase_auth_apikey`](/ext/e/supabase_auth_apikey) [`sys_syn_dblink`](/ext/e/sys_syn_dblink) [`tab_tier`](/ext/e/tab_tier) [`table_log_pl`](/ext/e/table_log_pl) [`table_version`](/ext/e/table_version) [`tablelog`](/ext/e/tablelog) [`telephone`](/ext/e/telephone) [`test_factory`](/ext/e/test_factory) [`time_for_keys`](/ext/e/time_for_keys) [`timestampandtz`](/ext/e/timestampandtz) [`town`](/ext/e/town) [`types`](/ext/e/types) [`unit`](/ext/e/unit) [`units`](/ext/e/units) [`us-states`](/ext/e/us-states) [`uuidv7-sql`](/ext/e/uuidv7-sql) [`variant`](/ext/e/variant) [`vectors`](/ext/e/vectors) [`vrprouting`](/ext/e/vrprouting) [`wasm`](/ext/e/wasm) [`webauthn`](/ext/e/webauthn) [`xl_global_views`](/ext/e/xl_global_views) [`zombodb`](/ext/e/zombodb) | PL/pgSQL 程序设计语言 |
| [`plpython3u`](/ext/e/plpython3u) | [`hstore_plpython3u`](/ext/e/hstore_plpython3u) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`ltree_plpython3u`](/ext/e/ltree_plpython3u) [`omni_python`](/ext/e/omni_python) [`pg4ml`](/ext/e/pg4ml) | PL/Python3 存储过程语言（未受信/高权限） |
| [`roaringbitmap`](/ext/e/roaringbitmap) | [`pgfaceting`](/ext/e/pgfaceting) | 支持RoaringBitmap数据类型 |
| [`pg_xenophile`](/ext/e/pg_xenophile) | [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) | PostgreSQL i8n与l10n工具包 |
| [`ip4r`](/ext/e/ip4r) | [`geoip`](/ext/e/geoip) | PostgreSQL 的 IPv4/v6 和 IPv4/v6 范围索引类型 |
| [`cube`](/ext/e/cube) | [`earthdistance`](/ext/e/earthdistance) [`pg4ml`](/ext/e/pg4ml) | 用于存储多维立方体的数据类型 |
| [`ltree`](/ext/e/ltree) | [`fsm_core`](/ext/e/fsm_core) [`ltree_plpython3u`](/ext/e/ltree_plpython3u) | 用于表示分层树状结构的数据类型 |
| [`hstore`](/ext/e/hstore) | [`flux`](/ext/e/flux) [`format`](/ext/e/format) [`hstore_hash_ops`](/ext/e/hstore_hash_ops) [`hstore_ops`](/ext/e/hstore_ops) [`hstore_pllua`](/ext/e/hstore_pllua) [`hstore_plluau`](/ext/e/hstore_plluau) [`hstore_plperl`](/ext/e/hstore_plperl) [`hstore_plperlu`](/ext/e/hstore_plperlu) [`hstore_plpython2u`](/ext/e/hstore_plpython2u) [`hstore_plpython3u`](/ext/e/hstore_plpython3u) [`hstore_plpythonu`](/ext/e/hstore_plpythonu) [`hstore_plruby`](/ext/e/hstore_plruby) [`json_enhancements_with_hstore`](/ext/e/json_enhancements_with_hstore) [`mbus`](/ext/e/mbus) [`meta_triggers`](/ext/e/meta_triggers) [`numhstore`](/ext/e/numhstore) [`pg_auditor`](/ext/e/pg_auditor) [`pg_readme`](/ext/e/pg_readme) [`pg_rowalesce`](/ext/e/pg_rowalesce) [`pg_utility_trigger_functions`](/ext/e/pg_utility_trigger_functions) [`pg_xenophile`](/ext/e/pg_xenophile) [`sys_syn_dblink`](/ext/e/sys_syn_dblink) | 用于存储（键，值）对集合的数据类型 |
| [`http`](/ext/e/http) | [`pgmb`](/ext/e/pgmb) | HTTP客户端，允许在数据库内收发HTTP请求 (supabase) |
| [`ddl_historization`](/ext/e/ddl_historization) | [`schedoc`](/ext/e/schedoc) | 用SQL将所有DDL变更写入到数据库表中 |
| [`tsm_system_rows`](/ext/e/tsm_system_rows) | [`documentdb`](/ext/e/documentdb) | 接受行数限制的 TABLESAMPLE 方法 |
| [`uuid-ossp`](/ext/e/uuid-ossp) | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) [`bundle`](/ext/e/bundle) [`datalink`](/ext/e/datalink) [`launchql-extension-verify`](/ext/e/launchql-extension-verify) [`launchql-inflection`](/ext/e/launchql-inflection) [`launchql-jwt-claims`](/ext/e/launchql-jwt-claims) [`npm`](/ext/e/npm) [`pg_abris`](/ext/e/pg_abris) [`pg_dms`](/ext/e/pg_dms) [`provsql`](/ext/e/provsql) [`ruid`](/ext/e/ruid) [`skitch-extension-jobs`](/ext/e/skitch-extension-jobs) [`skitch-extension-verify`](/ext/e/skitch-extension-verify) [`supa_audit`](/ext/e/supa_audit) [`types`](/ext/e/types) | 生成通用唯一标识符（UUIDs） |
| [`btree_gist`](/ext/e/btree_gist) | [`emaj`](/ext/e/emaj) [`omni_auth`](/ext/e/omni_auth) [`periods`](/ext/e/periods) [`pg_lake_table`](/ext/e/pg_lake_table) [`pgautofailover`](/ext/e/pgautofailover) [`powa`](/ext/e/powa) | 用GiST索引常见数据类型 |
| [`cat_tools`](/ext/e/cat_tools) | [`extension_drop`](/ext/e/extension_drop) [`object_reference`](/ext/e/object_reference) | 用于操作 PostgreSQL 系统目录的工具集 |
| [`pg_prewarm`](/ext/e/pg_prewarm) | [`pgcozy`](/ext/e/pgcozy) | 预热关系数据 |
| [`pgfr_record`](/ext/e/pgfr_record) | [`pgfr_analyze`](/ext/e/pgfr_analyze) | 基于 pg_cron 的服务端 PostgreSQL 性能飞行记录器 |
| [`pg_buffercache`](/ext/e/pg_buffercache) | [`pgcozy`](/ext/e/pgcozy) | 检查共享缓冲区缓存 |
| [`pg_stat_statements`](/ext/e/pg_stat_statements) | [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`powa`](/ext/e/powa) | 跟踪所有执行的 SQL 语句的计划和执行统计信息 |
| [`pgsodium`](/ext/e/pgsodium) | [`supabase_vault`](/ext/e/supabase_vault) | 表数据加密存储 TDE |
| [`pgcrypto`](/ext/e/pgcrypto) | [`column_encrypt`](/ext/e/column_encrypt) [`omni_auth`](/ext/e/omni_auth) [`omni_aws`](/ext/e/omni_aws) [`omni_credentials`](/ext/e/omni_credentials) [`omni_rest`](/ext/e/omni_rest) [`pg_dispatch`](/ext/e/pg_dispatch) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgjwt`](/ext/e/pgjwt) | 实用加解密函数 |
| [`dblink`](/ext/e/dblink) | [`emaj`](/ext/e/emaj) [`mimeo`](/ext/e/mimeo) [`omni_schema`](/ext/e/omni_schema) [`omni_test`](/ext/e/omni_test) [`omni_vfs`](/ext/e/omni_vfs) [`pg_jobmon`](/ext/e/pg_jobmon) [`pg_profile`](/ext/e/pg_profile) [`pgbouncer_fdw`](/ext/e/pgbouncer_fdw) [`pgelog`](/ext/e/pgelog) | 从数据库内连接到其他 PostgreSQL 数据库 |
| [`file_fdw`](/ext/e/file_fdw) | [`pg_sqlog`](/ext/e/pg_sqlog) | 访问外部文件的外部数据包装器 |
| [`postgres_fdw`](/ext/e/postgres_fdw) | [`omni_schema`](/ext/e/omni_schema) | 用于远程 PostgreSQL 服务器的外部数据包装器 |
| [`documentdb`](/ext/e/documentdb) | [`documentdb_distributed`](/ext/e/documentdb_distributed) [`documentdb_extended_rum`](/ext/e/documentdb_extended_rum) | 微软DocumentDB的API层 |
| [`documentdb_core`](/ext/e/documentdb_core) | [`documentdb`](/ext/e/documentdb) [`documentdb_distributed`](/ext/e/documentdb_distributed) | 微软DocumentDB的核心API层实现 |
| [`pg_statement_rollback`](/ext/e/pg_statement_rollback) | [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog) | 在服务端提供类似Oracle/DB2的语句级回滚能力 |
| [`ivorysql_ora`](/ext/e/ivorysql_ora) | [`ora_btree_gin`](/ext/e/ora_btree_gin) [`ora_btree_gist`](/ext/e/ora_btree_gist) | Oracle 兼容扩展 |
| [`babelfishpg_common`](/ext/e/babelfishpg_common) | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | SQL Server 数据类型兼容扩展 |
| [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | SQL Server SQL语法兼容性扩展 |
| [`pglogical`](/ext/e/pglogical) | [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`pglogical_ticker`](/ext/e/pglogical_ticker) | PostgreSQL逻辑复制：三方扩展实现 |
{.ext-table}


---
title: "FEAT - 特性"
linkTitle: "FEAT"
description: "功能特性扩展：图数据库，Hyperloglog，Rum索引，GraphQL，JsonSchema，Hint，虚拟索引，增量物化视图，消息队列等等"
weight: 827
icon: fas fa-icons
---

## 扩展列表

共有 **68** 个扩展，位于 **29** 个扩展包中。

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`age`](/ext/e/age) | [`age`](https://github.com/apache/age) | `1.7.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Apache AGE，图数据库扩展 （Deb可用） |
| [`pg_liquid`](/ext/e/pg_liquid) | [`pg_liquid`](https://github.com/michael-golfi/pg_liquid) | `0.1.7` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 受 Liquid 启发的 Datalog 图查询扩展 |
| [`onesparse`](/ext/e/onesparse) | [`one_sparse`](https://github.com/OneSparse/OneSparse) | `1.0.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PostgreSQL 18 的稀疏线性代数与图算法扩展 |
| [`pgq`](/ext/e/pgq) | [`pgq`](https://github.com/pgq/pgq) | `3.5.1` | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 通用队列的PG实现 |
| [`pgmq`](/ext/e/pgmq) | [`pgmq`](https://github.com/pgmq/pgmq) | `1.11.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 基于Postgres实现类似AWS SQS/RSMQ的消息队列 |
| [`pgmb`](/ext/e/pgmb) | [`pgmb`](https://github.com/fraruiz/pgmb) | `1.0.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 一个简单的PostgreSQL消息代理系统 |
| [`ulak`](/ext/e/ulak) | [`ulak`](https://github.com/zeybek/ulak) | `0.0.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 支持可靠异步投递的 PostgreSQL 事务型 Outbox 扩展 |
| [`hll`](/ext/e/hll) | [`hll`](https://github.com/citusdata/postgresql-hll) | `2.19` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | hyperloglog 数据类型 |
| [`rum`](/ext/e/rum) | [`rum`](https://github.com/postgrespro/rum) | `1.3.15` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | RUM 索引访问方法 |
| [`pg_ai_query`](/ext/e/pg_ai_query) | [`pg_ai_query`](https://github.com/benodiwal/pg_ai_query) | `0.1.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | AI驱动的 Postgres SQL 查询生成 |
| [`pg_ttl_index`](/ext/e/pg_ttl_index) | [`pg_ttl_index`](https://github.com/ibrahimkarimeddin/postgres-extensions-pg_ttl) | `3.0.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 基于TTL索引的自动数据过期清理 |
| [`pg_graphql`](/ext/e/pg_graphql) | [`pg_graphql`](https://github.com/supabase/pg_graphql) | `1.5.12` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | PG内的GraphQL支持 |
| [`pg_jsonschema`](/ext/e/pg_jsonschema) | [`pg_jsonschema`](https://github.com/supabase/pg_jsonschema) | `0.3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 提供JSON Schema校验能力 |
| [`jsquery`](/ext/e/jsquery) | [`jsquery`](https://github.com/postgrespro/jsquery) | `1.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于内省 JSONB 数据类型的查询类型 |
| [`pg_hint_plan`](/ext/e/pg_hint_plan) | [`pg_hint_plan`](https://github.com/ossc-db/pg_hint_plan) | `1.8.0` | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 添加强制指定执行计划的能力 |
| [`hypopg`](/ext/e/hypopg) | [`hypopg`](https://github.com/HypoPG/hypopg) | `1.4.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 假设索引，用于创建一个虚拟索引检验执行计划 |
| [`index_advisor`](/ext/e/index_advisor) | [`index_advisor`](https://github.com/supabase/index_advisor) | `0.2.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 查询索引建议器 |
| [`plan_filter`](/ext/e/plan_filter) | [`pg_plan_filter`](https://github.com/pgexperts/pg_plan_filter) | `0.0.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用执行计划代价过滤阻止特定查询语句 |
| [`pg_variables`](/ext/e/pg_variables) | [`pg_variables`](https://github.com/postgrespro/pg_variables) | `1.2.5` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 提供标量、数组和记录类型的会话变量 |
| [`imgsmlr`](/ext/e/imgsmlr) | [`imgsmlr`](https://github.com/postgrespro/imgsmlr) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用Haar小波分析计算图片相似度 |
| [`pg_ivm`](/ext/e/pg_ivm) | [`pg_ivm`](https://github.com/sraoss/pg_ivm) | `1.14` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 增量维护的物化视图 |
| [`pg_incremental`](/ext/e/pg_incremental) | [`pg_incremental`](https://github.com/CrunchyData/pg_incremental) | `1.5.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 增量处理流式事件 |
| [`pg_trickle`](/ext/e/pg_trickle) | [`pg_trickle`](https://github.com/grove/pg-trickle) | `0.31.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 为 PostgreSQL 18 提供流式表与差分视图维护 |
| [`provsql`](/ext/e/provsql) | [`provsql`](https://github.com/PierreSenellart/provsql) | `1.2.3` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | PostgreSQL 半环溯源与不确定性管理扩展 |
| [`orioledb`](/ext/e/orioledb) | [`orioledb`](https://github.com/orioledb/orioledb) | `1.7` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | OrioleDB，下一代事务处理引擎 |
| [`pg_cardano`](/ext/e/pg_cardano) | [`pg_cardano`](https://github.com/Fell-x27/pg_cardano) | `1.2.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | Cardano相关工具包：加密函数，地址编解码，区块链处理 |
| [`rdkit`](/ext/e/rdkit) | [`rdkit`](https://github.com/rdkit/rdkit) | `202503.6` | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | 在PostgreSQL化学领域数据管理功能 |
| [`omni`](/ext/e/omni) | [`omnigres`](https://github.com/omnigres/omnigres) | `0.2.14` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PostgreSQL即平台，Omnigres主扩展与加载器 |
| [`omni_auth`](/ext/e/omni_auth) | [`omnigres`](https://docs.omnigres.org/omni_auth/basics/) | `0.1.3` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 基础会话认证管理模块 |
| [`omni_aws`](/ext/e/omni_aws) | [`omnigres`](https://docs.omnigres.org/omni_aws/s3/) | `0.1.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres AWS S3 API封装 |
| [`omni_cloudevents`](/ext/e/omni_cloudevents) | [`omnigres`](https://docs.omnigres.org/omni_cloudevents/cloud_events/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres CloudEvents 支持 |
| [`omni_containers`](/ext/e/omni_containers) | [`omnigres`](https://docs.omnigres.org/omni_containers/intro/) | `0.2.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres Docker容器管理模块 |
| [`omni_credentials`](/ext/e/omni_credentials) | [`omnigres`](https://docs.omnigres.org/omni_credentials/credentials/) | `0.2.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 应用密钥管理模块 |
| [`omni_csv`](/ext/e/omni_csv) | [`omni_csv`](https://docs.omnigres.org/omni_csv/) | `0.1.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres CSV 工具箱 |
| [`omni_datasets`](/ext/e/omni_datasets) | [`omni_datasets`](https://docs.omnigres.org/omni_datasets/northwind/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 数据库置备工具 |
| [`omni_email`](/ext/e/omni_email) | [`omnigres`](https://docs.omnigres.org/omni_email/reference/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres Email 框架 |
| [`omni_http`](/ext/e/omni_http) | [`omnigres`](https://docs.omnigres.org/omni_httpc/reference/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 基本HTTP类型 |
| [`omni_httpc`](/ext/e/omni_httpc) | [`omnigres`](https://docs.omnigres.org/omni_httpc/reference/) | `0.1.10` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres HTTP客户端 |
| [`omni_httpd`](/ext/e/omni_httpd) | [`omnigres`](https://docs.omnigres.org/omni_httpd/intro/) | `0.4.11` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres HTTP服务器 |
| [`omni_id`](/ext/e/omni_id) | [`omnigres`](https://docs.omnigres.org/omni_id/identity_type/) | `0.4.3` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres ID身份数据类型 |
| [`omni_json`](/ext/e/omni_json) | [`omnigres`](https://docs.omnigres.org/omni_json/table_mapping/) | `0.1.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres JSON工具箱 |
| [`omni_kube`](/ext/e/omni_kube) | [`omnigres`](https://docs.omnigres.org/omni_kube/api/) | `0.4.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres Kubernetes集成模块 |
| [`omni_ledger`](/ext/e/omni_ledger) | [`omnigres`](https://docs.omnigres.org/omni_ledger/basics/) | `0.1.3` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 金融账本模块 |
| [`omni_manifest`](/ext/e/omni_manifest) | [`omnigres`](https://docs.omnigres.org/omni_manifest/usage/) | `0.1.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 包管理清单模块 |
| [`omni_mimetypes`](/ext/e/omni_mimetypes) | [`omnigres`](https://docs.omnigres.org/omni_mimetypes/reference/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres MIME数据类型 |
| [`omni_os`](/ext/e/omni_os) | [`omnigres`](https://docs.omnigres.org/omni_os/intro/) | `0.1.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 操作系统集成模块 |
| [`omni_polyfill`](/ext/e/omni_polyfill) | [`omnigres`](https://docs.omnigres.org/omni_polyfill/polyfills/) | `0.2.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres Postgres多态API |
| [`omni_python`](/ext/e/omni_python) | [`omnigres`](https://docs.omnigres.org/omni_python/intro/) | `0.1.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 第一类Python支持模块 |
| [`omni_regex`](/ext/e/omni_regex) | [`omnigres`](https://docs.omnigres.org/omni_regex/regex/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres PCRE兼容正则表达式模块 |
| [`omni_rest`](/ext/e/omni_rest) | [`omnigres`](https://docs.omnigres.org/omni_rest/protocols/) | `0.1.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres REST API 工具包 |
| [`omni_schema`](/ext/e/omni_schema) | [`omnigres`](https://docs.omnigres.org/omni_schema/reference/) | `0.3.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 高级模式管理组件 |
| [`omni_seq`](/ext/e/omni_seq) | [`omnigres`](https://docs.omnigres.org/omni_seq/id/) | `0.1.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 分布式整型序列号 |
| [`omni_service`](/ext/e/omni_service) | [`omnigres`](https://docs.omnigres.org/omni_service/management/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 服务管理器 |
| [`omni_session`](/ext/e/omni_session) | [`omnigres`](https://docs.omnigres.org/omni_session/session_management/) | `0.2.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 会话管理器 |
| [`omni_shmem`](/ext/e/omni_shmem) | [`omni_shmem`](https://docs.omnigres.org/omni_shmem/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 共享内存管理 |
| [`omni_sql`](/ext/e/omni_sql) | [`omnigres`](https://github.com/omnigres/omnigres) | `0.5.3` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres SQL编程组件 |
| [`omni_sqlite`](/ext/e/omni_sqlite) | [`omnigres`](https://docs.omnigres.org/omni_sqlite/sqlite/) | `0.2.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 嵌入的SQLite支持 |
| [`omni_test`](/ext/e/omni_test) | [`omnigres`](https://docs.omnigres.org/omni_test/guide/) | `0.4.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 测试框架 |
| [`omni_txn`](/ext/e/omni_txn) | [`omnigres`](https://docs.omnigres.org/omni_txn/linearize/) | `0.5.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 事务管理器模块 |
| [`omni_types`](/ext/e/omni_types) | [`omnigres`](https://docs.omnigres.org/omni_types/function_signature_types/) | `0.3.6` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 高级数据类型模块 |
| [`omni_var`](/ext/e/omni_var) | [`omnigres`](https://docs.omnigres.org/omni_var/variables/) | `0.3.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 局部变量模块 |
| [`omni_vfs`](/ext/e/omni_vfs) | [`omnigres`](https://docs.omnigres.org/omni_vfs/reference/) | `0.2.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 虚拟文件系统 |
| [`omni_vfs_types_v1`](/ext/e/omni_vfs_types_v1) | [`omnigres`](https://github.com/omnigres/omnigres) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 虚拟文件系统（v1） |
| [`omni_web`](/ext/e/omni_web) | [`omnigres`](https://docs.omnigres.org/omni_web/intro/) | `0.3.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres Web工具箱 |
| [`omni_worker`](/ext/e/omni_worker) | [`omnigres`](https://docs.omnigres.org/omni_worker/intro/) | `0.2.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres 通用Worker池 |
| [`omni_xml`](/ext/e/omni_xml) | [`omnigres`](https://docs.omnigres.org/omni_xml/overview/) | `0.1.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres XML工具包 |
| [`omni_yaml`](/ext/e/omni_yaml) | [`omnigres`](https://docs.omnigres.org/omni_yaml/yaml/) | `0.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Omnigres YAML工具包 |
| [`bloom`](/ext/e/bloom) | [`bloom`](https://www.postgresql.org/docs/current/bloom.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | bloom 索引-基于指纹的索引 |
{.ext-table}


---------

## age {#age}

[**`age`**](/ext/e/age) - `1.7.0` : Apache AGE，图数据库扩展 （Deb可用）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`age`](/ext/e/age) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`age`](https://github.com/apache/age) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `apache-age_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-age` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_liquid {#pg_liquid}

[**`pg_liquid`**](/ext/e/pg_liquid) - `0.1.7` : 受 Liquid 启发的 Datalog 图查询扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_liquid`](/ext/e/pg_liquid) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_liquid`](https://github.com/michael-golfi/pg_liquid) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_liquid_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-liquid` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## onesparse {#onesparse}

[**`one_sparse`**](/ext/e/onesparse) - `1.0.0` : PostgreSQL 18 的稀疏线性代数与图算法扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`onesparse`](/ext/e/onesparse) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`one_sparse`](https://github.com/OneSparse/OneSparse) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `onesparse_$v` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `postgresql-$v-onesparse` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pgq {#pgq}

[**`pgq`**](/ext/e/pgq) - `3.5.1` : 通用队列的PG实现

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgq`](/ext/e/pgq) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgq`](https://github.com/pgq/pgq) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgq_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgq3` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgmq {#pgmq}

[**`pgmq`**](/ext/e/pgmq) - `1.11.1` : 基于Postgres实现类似AWS SQS/RSMQ的消息队列

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgmq`](/ext/e/pgmq) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgmq`](https://github.com/pgmq/pgmq) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgmq_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgmq` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pgmb {#pgmb}

[**`pgmb`**](/ext/e/pgmb) - `1.0.0` : 一个简单的PostgreSQL消息代理系统

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgmb`](/ext/e/pgmb) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgmb`](https://github.com/fraruiz/pgmb) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgmb_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgmb` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## ulak {#ulak}

[**`ulak`**](/ext/e/ulak) - `0.0.2` : 支持可靠异步投递的 PostgreSQL 事务型 Outbox 扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`ulak`](/ext/e/ulak) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`ulak`](https://github.com/zeybek/ulak) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `ulak_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-ulak` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## hll {#hll}

[**`hll`**](/ext/e/hll) - `2.19` : hyperloglog 数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hll`](/ext/e/hll) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hll`](https://github.com/citusdata/postgresql-hll) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hll_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hll` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## rum {#rum}

[**`rum`**](/ext/e/rum) - `1.3.15` : RUM 索引访问方法

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`rum`](/ext/e/rum) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`rum`](https://github.com/postgrespro/rum) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `rum_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-rum` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_ai_query {#pg_ai_query}

[**`pg_ai_query`**](/ext/e/pg_ai_query) - `0.1.1` : AI驱动的 Postgres SQL 查询生成

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_ai_query`](/ext/e/pg_ai_query) | **el8** | - | - |
| **扩展包** | [`pg_ai_query`](https://github.com/benodiwal/pg_ai_query) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_ai_query_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-ai-query` | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_ttl_index {#pg_ttl_index}

[**`pg_ttl_index`**](/ext/e/pg_ttl_index) - `3.0.0` : 基于TTL索引的自动数据过期清理

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_ttl_index`](/ext/e/pg_ttl_index) | **el8** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **扩展包** | [`pg_ttl_index`](https://github.com/ibrahimkarimeddin/postgres-extensions-pg_ttl) | **el9** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **RPM** | `pg_ttl_index_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-ttl-index` | **d12** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_graphql {#pg_graphql}

[**`pg_graphql`**](/ext/e/pg_graphql) - `1.5.12` : PG内的GraphQL支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_graphql`](/ext/e/pg_graphql) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_graphql`](https://github.com/supabase/pg_graphql) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_graphql_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-graphql` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_jsonschema {#pg_jsonschema}

[**`pg_jsonschema`**](/ext/e/pg_jsonschema) - `0.3.4` : 提供JSON Schema校验能力

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_jsonschema`](/ext/e/pg_jsonschema) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_jsonschema`](https://github.com/supabase/pg_jsonschema) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_jsonschema_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-jsonschema` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## jsquery {#jsquery}

[**`jsquery`**](/ext/e/jsquery) - `1.2` : 用于内省 JSONB 数据类型的查询类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`jsquery`](/ext/e/jsquery) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`jsquery`](https://github.com/postgrespro/jsquery) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `jsquery_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-jsquery` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_hint_plan {#pg_hint_plan}

[**`pg_hint_plan`**](/ext/e/pg_hint_plan) - `1.8.0` : 添加强制指定执行计划的能力

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_hint_plan`](/ext/e/pg_hint_plan) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_hint_plan`](https://github.com/ossc-db/pg_hint_plan) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_hint_plan_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-hint-plan` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hypopg {#hypopg}

[**`hypopg`**](/ext/e/hypopg) - `1.4.2` : 假设索引，用于创建一个虚拟索引检验执行计划

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hypopg`](/ext/e/hypopg) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hypopg`](https://github.com/HypoPG/hypopg) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hypopg_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hypopg` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## index_advisor {#index_advisor}

[**`index_advisor`**](/ext/e/index_advisor) - `0.2.0` : 查询索引建议器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`index_advisor`](/ext/e/index_advisor) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`index_advisor`](https://github.com/supabase/index_advisor) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `index_advisor_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-index-advisor` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## plan_filter {#plan_filter}

[**`pg_plan_filter`**](/ext/e/plan_filter) - `0.0.1` : 使用执行计划代价过滤阻止特定查询语句

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plan_filter`](/ext/e/plan_filter) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_plan_filter`](https://github.com/pgexperts/pg_plan_filter) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_plan_filter_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-plan-filter` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_variables {#pg_variables}

[**`pg_variables`**](/ext/e/pg_variables) - `1.2.5` : 提供标量、数组和记录类型的会话变量

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_variables`](/ext/e/pg_variables) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_variables`](https://github.com/postgrespro/pg_variables) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_variables_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-variables` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## imgsmlr {#imgsmlr}

[**`imgsmlr`**](/ext/e/imgsmlr) - `1.0` : 使用Haar小波分析计算图片相似度

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`imgsmlr`](/ext/e/imgsmlr) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`imgsmlr`](https://github.com/postgrespro/imgsmlr) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `imgsmlr_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-imgsmlr` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_ivm {#pg_ivm}

[**`pg_ivm`**](/ext/e/pg_ivm) - `1.14` : 增量维护的物化视图

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_ivm`](/ext/e/pg_ivm) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_ivm`](https://github.com/sraoss/pg_ivm) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_ivm_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-ivm` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_incremental {#pg_incremental}

[**`pg_incremental`**](/ext/e/pg_incremental) - `1.5.0` : 增量处理流式事件

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_incremental`](/ext/e/pg_incremental) | **el8** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **扩展包** | [`pg_incremental`](https://github.com/CrunchyData/pg_incremental) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_incremental_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-incremental` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_trickle {#pg_trickle}

[**`pg_trickle`**](/ext/e/pg_trickle) - `0.31.0` : 为 PostgreSQL 18 提供流式表与差分视图维护

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_trickle`](/ext/e/pg_trickle) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`pg_trickle`](https://github.com/grove/pg-trickle) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `pg_trickle_$v` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `postgresql-$v-pg-trickle` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## provsql {#provsql}

[**`provsql`**](/ext/e/provsql) - `1.2.3` : PostgreSQL 半环溯源与不确定性管理扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`provsql`](/ext/e/provsql) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`provsql`](https://github.com/PierreSenellart/provsql) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `provsql_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-provsql` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## orioledb {#orioledb}

[**`orioledb`**](/ext/e/orioledb) - `1.7` : OrioleDB，下一代事务处理引擎

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`orioledb`](/ext/e/orioledb) | **el8** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **扩展包** | [`orioledb`](https://github.com/orioledb/orioledb) | **el9** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **RPM** | `orioledb_$v` | **el10** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **DEB** | `oriolepg-$v-orioledb` | **d12** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| | | **u26** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
{.ext-table .ext-table--cate}


---------

## pg_cardano {#pg_cardano}

[**`pg_cardano`**](/ext/e/pg_cardano) - `1.2.0` : Cardano相关工具包：加密函数，地址编解码，区块链处理

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_cardano`](/ext/e/pg_cardano) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_cardano`](https://github.com/Fell-x27/pg_cardano) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_cardano_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-cardano` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## rdkit {#rdkit}

[**`rdkit`**](/ext/e/rdkit) - `202503.6` : 在PostgreSQL化学领域数据管理功能

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`rdkit`](/ext/e/rdkit) | **el8** | - | - |
| **扩展包** | [`rdkit`](https://github.com/rdkit/rdkit) | **el9** | - | - |
| **RPM** | `rdkit_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-rdkit` | **d12** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni {#omni}

[**`omnigres`**](/ext/e/omni) - `0.2.14` : PostgreSQL即平台，Omnigres主扩展与加载器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni`](/ext/e/omni) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://github.com/omnigres/omnigres) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_auth {#omni_auth}

[**`omnigres`**](/ext/e/omni_auth) - `0.1.3` : Omnigres 基础会话认证管理模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_auth`](/ext/e/omni_auth) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_auth/basics/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_aws {#omni_aws}

[**`omnigres`**](/ext/e/omni_aws) - `0.1.2` : Omnigres AWS S3 API封装

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_aws`](/ext/e/omni_aws) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_aws/s3/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_cloudevents {#omni_cloudevents}

[**`omnigres`**](/ext/e/omni_cloudevents) - `0.1.0` : Omnigres CloudEvents 支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_cloudevents`](/ext/e/omni_cloudevents) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_cloudevents/cloud_events/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_containers {#omni_containers}

[**`omnigres`**](/ext/e/omni_containers) - `0.2.0` : Omnigres Docker容器管理模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_containers`](/ext/e/omni_containers) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_containers/intro/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_credentials {#omni_credentials}

[**`omnigres`**](/ext/e/omni_credentials) - `0.2.0` : Omnigres 应用密钥管理模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_credentials`](/ext/e/omni_credentials) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_credentials/credentials/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_csv {#omni_csv}

[**`omni_csv`**](/ext/e/omni_csv) - `0.1.1` : Omnigres CSV 工具箱

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_csv`](/ext/e/omni_csv) | **el8** | - | - |
| **扩展包** | [`omni_csv`](https://docs.omnigres.org/omni_csv/) | **el9** | - | - |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | - | - |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_datasets {#omni_datasets}

[**`omni_datasets`**](/ext/e/omni_datasets) - `0.1.0` : Omnigres 数据库置备工具

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_datasets`](/ext/e/omni_datasets) | **el8** | - | - |
| **扩展包** | [`omni_datasets`](https://docs.omnigres.org/omni_datasets/northwind/) | **el9** | - | - |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | - | - |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_email {#omni_email}

[**`omnigres`**](/ext/e/omni_email) - `0.1.0` : Omnigres Email 框架

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_email`](/ext/e/omni_email) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_email/reference/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_http {#omni_http}

[**`omnigres`**](/ext/e/omni_http) - `0.1.0` : Omnigres 基本HTTP类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_http`](/ext/e/omni_http) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_httpc/reference/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_httpc {#omni_httpc}

[**`omnigres`**](/ext/e/omni_httpc) - `0.1.10` : Omnigres HTTP客户端

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_httpc`](/ext/e/omni_httpc) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_httpc/reference/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_httpd {#omni_httpd}

[**`omnigres`**](/ext/e/omni_httpd) - `0.4.11` : Omnigres HTTP服务器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_httpd`](/ext/e/omni_httpd) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_httpd/intro/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_id {#omni_id}

[**`omnigres`**](/ext/e/omni_id) - `0.4.3` : Omnigres ID身份数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_id`](/ext/e/omni_id) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_id/identity_type/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_json {#omni_json}

[**`omnigres`**](/ext/e/omni_json) - `0.1.1` : Omnigres JSON工具箱

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_json`](/ext/e/omni_json) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_json/table_mapping/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_kube {#omni_kube}

[**`omnigres`**](/ext/e/omni_kube) - `0.4.2` : Omnigres Kubernetes集成模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_kube`](/ext/e/omni_kube) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_kube/api/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_ledger {#omni_ledger}

[**`omnigres`**](/ext/e/omni_ledger) - `0.1.3` : Omnigres 金融账本模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_ledger`](/ext/e/omni_ledger) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_ledger/basics/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_manifest {#omni_manifest}

[**`omnigres`**](/ext/e/omni_manifest) - `0.1.2` : Omnigres 包管理清单模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_manifest`](/ext/e/omni_manifest) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_manifest/usage/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_mimetypes {#omni_mimetypes}

[**`omnigres`**](/ext/e/omni_mimetypes) - `0.1.0` : Omnigres MIME数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_mimetypes`](/ext/e/omni_mimetypes) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_mimetypes/reference/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_os {#omni_os}

[**`omnigres`**](/ext/e/omni_os) - `0.1.1` : Omnigres 操作系统集成模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_os`](/ext/e/omni_os) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_os/intro/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_polyfill {#omni_polyfill}

[**`omnigres`**](/ext/e/omni_polyfill) - `0.2.2` : Omnigres Postgres多态API

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_polyfill`](/ext/e/omni_polyfill) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_polyfill/polyfills/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_python {#omni_python}

[**`omnigres`**](/ext/e/omni_python) - `0.1.1` : Omnigres 第一类Python支持模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_python`](/ext/e/omni_python) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_python/intro/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_regex {#omni_regex}

[**`omnigres`**](/ext/e/omni_regex) - `0.1.0` : Omnigres PCRE兼容正则表达式模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_regex`](/ext/e/omni_regex) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_regex/regex/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_rest {#omni_rest}

[**`omnigres`**](/ext/e/omni_rest) - `0.1.1` : Omnigres REST API 工具包

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_rest`](/ext/e/omni_rest) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_rest/protocols/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_schema {#omni_schema}

[**`omnigres`**](/ext/e/omni_schema) - `0.3.0` : Omnigres 高级模式管理组件

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_schema`](/ext/e/omni_schema) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_schema/reference/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_seq {#omni_seq}

[**`omnigres`**](/ext/e/omni_seq) - `0.1.1` : Omnigres 分布式整型序列号

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_seq`](/ext/e/omni_seq) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_seq/id/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_service {#omni_service}

[**`omnigres`**](/ext/e/omni_service) - `0.1.0` : Omnigres 服务管理器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_service`](/ext/e/omni_service) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_service/management/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_session {#omni_session}

[**`omnigres`**](/ext/e/omni_session) - `0.2.0` : Omnigres 会话管理器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_session`](/ext/e/omni_session) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_session/session_management/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_shmem {#omni_shmem}

[**`omni_shmem`**](/ext/e/omni_shmem) - `0.1.0` : Omnigres 共享内存管理

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_shmem`](/ext/e/omni_shmem) | **el8** | - | - |
| **扩展包** | [`omni_shmem`](https://docs.omnigres.org/omni_shmem/) | **el9** | - | - |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | - | - |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_sql {#omni_sql}

[**`omnigres`**](/ext/e/omni_sql) - `0.5.3` : Omnigres SQL编程组件

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_sql`](/ext/e/omni_sql) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://github.com/omnigres/omnigres) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_sqlite {#omni_sqlite}

[**`omnigres`**](/ext/e/omni_sqlite) - `0.2.2` : Omnigres 嵌入的SQLite支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_sqlite`](/ext/e/omni_sqlite) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_sqlite/sqlite/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_test {#omni_test}

[**`omnigres`**](/ext/e/omni_test) - `0.4.0` : Omnigres 测试框架

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_test`](/ext/e/omni_test) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_test/guide/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_txn {#omni_txn}

[**`omnigres`**](/ext/e/omni_txn) - `0.5.0` : Omnigres 事务管理器模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_txn`](/ext/e/omni_txn) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_txn/linearize/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_types {#omni_types}

[**`omnigres`**](/ext/e/omni_types) - `0.3.6` : Omnigres 高级数据类型模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_types`](/ext/e/omni_types) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_types/function_signature_types/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_var {#omni_var}

[**`omnigres`**](/ext/e/omni_var) - `0.3.0` : Omnigres 局部变量模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_var`](/ext/e/omni_var) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_var/variables/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_vfs {#omni_vfs}

[**`omnigres`**](/ext/e/omni_vfs) - `0.2.2` : Omnigres 虚拟文件系统

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_vfs`](/ext/e/omni_vfs) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_vfs/reference/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_vfs_types_v1 {#omni_vfs_types_v1}

[**`omnigres`**](/ext/e/omni_vfs_types_v1) - `0.1.0` : Omnigres 虚拟文件系统（v1）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_vfs_types_v1`](/ext/e/omni_vfs_types_v1) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://github.com/omnigres/omnigres) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_web {#omni_web}

[**`omnigres`**](/ext/e/omni_web) - `0.3.0` : Omnigres Web工具箱

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_web`](/ext/e/omni_web) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_web/intro/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_worker {#omni_worker}

[**`omnigres`**](/ext/e/omni_worker) - `0.2.1` : Omnigres 通用Worker池

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_worker`](/ext/e/omni_worker) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_worker/intro/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_xml {#omni_xml}

[**`omnigres`**](/ext/e/omni_xml) - `0.1.2` : Omnigres XML工具包

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_xml`](/ext/e/omni_xml) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_xml/overview/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## omni_yaml {#omni_yaml}

[**`omnigres`**](/ext/e/omni_yaml) - `0.1.0` : Omnigres YAML工具包

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`omni_yaml`](/ext/e/omni_yaml) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`omnigres`](https://docs.omnigres.org/omni_yaml/yaml/) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `omnigres_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-omnigres` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## bloom {#bloom}

[**`bloom`**](/ext/e/bloom) - `1.0` : bloom 索引-基于指纹的索引

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`bloom`](/ext/e/bloom) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`bloom`](https://www.postgresql.org/docs/current/bloom.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


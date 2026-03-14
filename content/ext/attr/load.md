---
title: "动态加载"
linkTitle: "动态加载"
description: "需要动态加载的 PostgreSQL 扩展"
weight: 10
---

以下 **87** 个扩展需要在 [`shared_preload_libraries`](https://www.postgresql.org/docs/current/runtime-config-client.html#GUC-SHARED-PRELOAD-LIBRARIES) 中动态加载，才能正常使用。

也就是说，您需要修改 PostgreSQL 配置文件 `postgresql.conf` 中的 [`shared_preload_libraries`](https://www.postgresql.org/docs/current/runtime-config-client.html#GUC-SHARED-PRELOAD-LIBRARIES) 参数，将扩展的库名添加进去，然后重启数据库才能生效。

| **扩展名** | **动态库名** | **描述** |
|:-----------|:-------------|:---------|
| [`timescaledb`](/ext/e/timescaledb) | `timescaledb` | 时序数据库扩展插件 |
| [`pg_cron`](/ext/e/pg_cron) | `pg_cron` | 定时任务调度器 |
| [`pg_task`](/ext/e/pg_task) | `pg_task` | 在特定时间点在后台执行SQL命令 |
| [`pg_later`](/ext/e/pg_later) | `pg_later` | 执行查询，并在稍后异步获取查询结果 |
| [`vchord`](/ext/e/vchord) | `vchord` | 使用Rust重写的高性能向量扩展 |
| [`pgml`](/ext/e/pgml) | `pgml` | PostgresML：用SQL运行机器学习算法并训练模型 |
| [`pg_bigm`](/ext/e/pg_bigm) | `pg_bigm` | 基于二字组的多语言全文检索扩展 |
| [`pg_bestmatch`](/ext/e/pg_bestmatch) | `pg_bestmatch` | 在数据库内生成BM25稀疏向量 |
| [`vchord_bm25`](/ext/e/vchord_bm25) | `vchord_bm25` | BM25排序算法 |
| [`pg_tokenizer`](/ext/e/pg_tokenizer) | `pg_tokenizer` | 用于全文检索的分词器 |
| [`citus`](/ext/e/citus) | `citus` | Citus 分布式数据库 |
| [`pg_analytics`](/ext/e/pg_analytics) | `pg_analytics` | 由 DuckDB 驱动的数据分析引擎 |
| [`pg_duckdb`](/ext/e/pg_duckdb) | `pg_duckdb` | 在PostgreSQL中的嵌入式DuckDB扩展 |
| [`pg_mooncake`](/ext/e/pg_mooncake) | `pg_mooncake` | PostgreSQL列式存储表 |
| [`pg_clickhouse`](/ext/e/pg_clickhouse) | `pg_clickhouse` | 从PostgreSQL中查询ClickHouse的接口 |
| [`pg_parquet`](/ext/e/pg_parquet) | `pg_parquet` | 在PostgreSQL与本地/S3中的Parquet文件复制数据 |
| [`age`](/ext/e/age) | `age` | Apache AGE，图数据库扩展 （Deb可用） |
| [`pg_ttl_index`](/ext/e/pg_ttl_index) | `pg_ttl_index` | 基于TTL索引的自动数据过期清理 |
| [`pg_hint_plan`](/ext/e/pg_hint_plan) | `pg_hint_plan` | 添加强制指定执行计划的能力 |
| [`plan_filter`](/ext/e/plan_filter) | `plan_filter` | 使用执行计划代价过滤阻止特定查询语句 |
| [`pg_ivm`](/ext/e/pg_ivm) | `pg_ivm` | 增量维护的物化视图 |
| [`orioledb`](/ext/e/orioledb) | `orioledb` | OrioleDB，下一代事务处理引擎 |
| [`omni`](/ext/e/omni) | `omni--0.2.14.so` | PostgreSQL即平台，Omnigres主扩展与加载器 |
| [`pg_tle`](/ext/e/pg_tle) | `pg_tle` | AWS 可信语言扩展 |
| [`pldbgapi`](/ext/e/pldbgapi) | `pldbgapi` | 用于调试 PL/pgSQL 函数的服务器端支持 |
| [`plpgsql_check`](/ext/e/plpgsql_check) | `plpgsql_check` | 对 plpgsql 函数进行扩展检查 |
| [`plprofiler`](/ext/e/plprofiler) | `plprofiler` | 剖析 PL/pgSQL 函数 |
| [`pgpdf`](/ext/e/pgpdf) | `pgpdf` | PDF数据类型，管理函数与全文检索 |
| [`pglite_fusion`](/ext/e/pglite_fusion) | `pglite_fusion` | 在PG表中嵌入SQLite数据库作为数据类型 |
| [`pg_net`](/ext/e/pg_net) | `pg_net` | 用 SQL 进行异步非阻塞HTTP/HTTPS 请求的扩展 (supabase) |
| [`pgx_ulid`](/ext/e/pgx_ulid) | `pgx_ulid` | ULID数据类型与函数 |
| [`pg_rewrite`](/ext/e/pg_rewrite) | `pg_rewrite` | 在线重写整表，不阻塞读写 |
| [`pg_squeeze`](/ext/e/pg_squeeze) | `pg_squeeze` | 从关系中删除未使用空间 |
| [`pg_readonly`](/ext/e/pg_readonly) | `pg_readonly` | 将集群设置为只读 |
| [`pgautofailover`](/ext/e/pgautofailover) | `pgautofailover` | PG 自动故障迁移 |
| [`pg_crash`](/ext/e/pg_crash) | `pg_crash` | 向数据库进程随机发送信号模拟故障 |
| [`qos`](/ext/e/qos) | `qos` | PostgreSQL QoS 资源治理扩展（会话与查询限流/隔离） |
| [`safeupdate`](/ext/e/safeupdate) | `safeupdate` | 强制在 UPDATE 和 DELETE 时提供 Where 条件 |
| [`pg_strict`](/ext/e/pg_strict) | `pg_strict` | 防止不带WHERE条件的危险UPDATE和DELETE操作 |
| [`pg_prewarm`](/ext/e/pg_prewarm) | `pg_prewarm` | 预热关系数据 |
| [`pg_tracing`](/ext/e/pg_tracing) | `pg_tracing` | PostgreSQL分布式Tracing |
| [`pg_show_plans`](/ext/e/pg_show_plans) | `pg_show_plans` | 打印所有当前正在运行查询的执行计划 |
| [`pg_stat_kcache`](/ext/e/pg_stat_kcache) | `pg_stat_kcache` | 内核统计信息收集 |
| [`pg_stat_monitor`](/ext/e/pg_stat_monitor) | `pg_stat_monitor` | 提供查询聚合统计、客户端信息、执行计划详细信息和直方图 |
| [`pg_qualstats`](/ext/e/pg_qualstats) | `pg_qualstats` | 收集有关 quals 的统计信息的扩展 |
| [`pg_store_plans`](/ext/e/pg_store_plans) | `pg_store_plans` | 跟踪所有执行的 SQL 语句的计划统计信息 |
| [`pg_track_optimizer`](/ext/e/pg_track_optimizer) | `pg_track_optimizer` | 跟踪规划器决策与实际执行的差距 |
| [`pg_wait_sampling`](/ext/e/pg_wait_sampling) | `pg_wait_sampling` | 基于采样的等待事件统计 |
| [`pgsentinel`](/ext/e/pgsentinel) | `pgsentinel` | 活跃会话历史 |
| [`pgnodemx`](/ext/e/pgnodemx) | `pgnodemx` | 使用SQL查询获取操作系统指标 |
| [`bgw_replstatus`](/ext/e/bgw_replstatus) | `bgw_replstatus` | 用于汇报本机主从状态的后台工作进程 |
| [`pg_relusage`](/ext/e/pg_relusage) | `pg_relusage` | 打印查询引用的表与列 |
| [`pg_overexplain`](/ext/e/pg_overexplain) | `pg_overexplain` | 允许 EXPLAIN 转储更多详细 |
| [`auto_explain`](/ext/e/auto_explain) | `auto_explain` | 提供一种自动记录执行计划的手段 |
| [`pg_stat_statements`](/ext/e/pg_stat_statements) | `pg_stat_statements` | 跟踪所有执行的 SQL 语句的计划和执行统计信息 |
| [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) | `$libdir/passwordcheck_cracklib` | 使用cracklib加固PG用户密码 |
| [`supautils`](/ext/e/supautils) | `supautils` | 用于在云环境中确保数据库集群的安全 |
| [`pgsodium`](/ext/e/pgsodium) | `pgsodium` | 表数据加密存储 TDE |
| [`anon`](/ext/e/anon) | `anon` | 数据匿名化处理工具 |
| [`pgaudit`](/ext/e/pgaudit) | `pgaudit` | 提供审计功能 |
| [`pgauditlogtofile`](/ext/e/pgauditlogtofile) | `pgauditlogtofile` | pgAudit 子扩展，将审计日志写入单独的文件中 |
| [`logerrors`](/ext/e/logerrors) | `logerrors` | 用于收集日志文件中消息统计信息的函数 |
| [`pg_auth_mon`](/ext/e/pg_auth_mon) | `pg_auth_mon` | 监控每个用户的连接尝试 |
| [`credcheck`](/ext/e/credcheck) | `credcheck` | 明文凭证检查器 |
| [`set_user`](/ext/e/set_user) | `set_user` | 增加了日志记录的 SET ROLE |
| [`pg_snakeoil`](/ext/e/pg_snakeoil) | `pg_snakeoil` | PostgreSQL动态链接库反病毒功能 |
| [`pgextwlist`](/ext/e/pgextwlist) | `pgextwlist` | PostgreSQL扩展白名单功能 |
| [`noset`](/ext/e/noset) | `noset` | 阻止非超级用户使用SET/RESET设置变量 |
| [`pg_tde`](/ext/e/pg_tde) | `pg_tde` | Percona加密存储引擎 |
| [`sepgsql`](/ext/e/sepgsql) | `sepgsql` | 基于SELinux标签的强制访问控制 |
| [`auth_delay`](/ext/e/auth_delay) | `auth_delay` | 在返回认证失败前暂停一会，避免爆破 |
| [`passwordcheck`](/ext/e/passwordcheck) | `$libdir/passwordcheck` | 用于强制拒绝修改弱密码的扩展 |
| [`documentdb`](/ext/e/documentdb) | `pg_documentdb,pg_documentdb_core` | 微软DocumentDB的API层 |
| [`documentdb_core`](/ext/e/documentdb_core) | `pg_documentdb,pg_documentdb_core` | 微软DocumentDB的核心API层实现 |
| [`documentdb_distributed`](/ext/e/documentdb_distributed) | `pg_documentdb,pg_documentdb_core` | DocumentDB多节点模式的API层 |
| [`documentdb_extended_rum`](/ext/e/documentdb_extended_rum) | `pg_documentdb_extended_rum` | DocumentDB扩展RUM索引访问方法 |
| [`pgtt`](/ext/e/pgtt) | `pgtt` | 类似Oracle的全局临时表功能 |
| [`pg_statement_rollback`](/ext/e/pg_statement_rollback) | `pg_statement_rollback` | 在服务端提供类似Oracle/DB2的语句级回滚能力 |
| [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog) | `pg_dbms_errlog` | 模仿 Oracle DBMS_ERRLOG 模块来记录特定表的DML错误 |
| [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | `babelfishpg_tds` | SQL Server TDS线缆协议兼容扩展 |
| [`pglogical`](/ext/e/pglogical) | `pglogical` | PostgreSQL逻辑复制：三方扩展实现 |
| [`pglogical_ticker`](/ext/e/pglogical_ticker) | `pglogical_ticker` | pglogical复制延迟以秒计的精确视图 |
| [`pg_failover_slots`](/ext/e/pg_failover_slots) | `pg_failover_slots` | 在Failover过程中保留复制槽 |
| [`pgactive`](/ext/e/pgactive) | `pgactive` | PostgreSQL多主逻辑复制 |
| [`spock`](/ext/e/spock) | `spock` | PostgreSQL 多主逻辑复制扩展 |
| [`decoderbufs`](/ext/e/decoderbufs) | `decoderbufs` | 将WAL逻辑解码为ProtocolBuffer协议的消息 |
| [`repmgr`](/ext/e/repmgr) | `repmgr` | PostgreSQL复制管理组件 |
{.ext-table}


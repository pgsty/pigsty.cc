---
title: "无头扩展"
linkTitle: "无头扩展"
description: "不需要 CREATE EXTENSION 的 PostgreSQL 扩展"
weight: 20
slug: ddl
---

以下 **25** 个扩展不需要执行 `CREATE EXTENSION` 即可使用。

这些扩展通常以共享库（Hook）或独立工具的形式存在，安装后直接通过配置参数启用或自动生效，无需在数据库中显式创建扩展对象。

| **扩展名** | **扩展包名** | **版本** | **属性** | **描述** |
|:-----------|:-------------|:--------:|:--------:|:---------|
| [`pg_task`](/ext/e/pg_task) | [`pg_task`](https://github.com/RekGRpth/pg_task) | `1.0.0` | `--sL---` | 在特定时间点在后台执行SQL命令 |
| [`plan_filter`](/ext/e/plan_filter) | [`pg_plan_filter`](https://github.com/pgexperts/pg_plan_filter) | `0.0.1` | `--sL---` | 使用执行计划代价过滤阻止特定查询语句 |
| [`pg_checksums`](/ext/e/pg_checksums) | [`pg_checksums`](https://github.com/credativ/pg_checksums) | `1.3` | `--s---r` | 在离线模式下激活/启用/禁用数据库集群的校验和功能 |
| [`pg_crash`](/ext/e/pg_crash) | [`pg_crash`](https://github.com/cybertec-postgresql/pg_crash) | `1.0` | `--sL---` | 向数据库进程随机发送信号模拟故障 |
| [`safeupdate`](/ext/e/safeupdate) | [`safeupdate`](https://github.com/eradman/pg-safeupdate) | `1.5` | `--sL---` | 强制在 UPDATE 和 DELETE 时提供 Where 条件 |
| [`basic_archive`](/ext/e/basic_archive) | [`basic_archive`](https://www.postgresql.org/docs/current/basic-archive.html) | `-` | `c-s----` | 归档模块样例 |
| [`basebackup_to_shell`](/ext/e/basebackup_to_shell) | [`basebackup_to_shell`](https://www.postgresql.org/docs/current/basebackup-to-shell.html) | `-` | `c-s----` | 添加一种备份到Shell终端到基础备份方式 |
| [`bgw_replstatus`](/ext/e/bgw_replstatus) | [`bgw_replstatus`](https://github.com/mhagander/bgw_replstatus) | `1.0.8` | `--sL---` | 用于汇报本机主从状态的后台工作进程 |
| [`pg_relusage`](/ext/e/pg_relusage) | [`pg_relusage`](https://github.com/adept/pg_relusage) | `0.0.1` | `--sL---` | 打印查询引用的表与列 |
| [`pg_overexplain`](/ext/e/pg_overexplain) | [`pg_overexplain`](https://www.postgresql.org/docs/devel/pgoverexplain.html) | `1.0` | `c-sL---` | 允许 EXPLAIN 转储更多详细 |
| [`auto_explain`](/ext/e/auto_explain) | [`auto_explain`](https://www.postgresql.org/docs/current/auto-explain.html) | `-` | `c-sL---` | 提供一种自动记录执行计划的手段 |
| [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) | [`passwordcheck_cracklib`](https://github.com/devrimgunduz/passwordcheck_cracklib) | `3.1.0` | `--sL---` | 使用cracklib加固PG用户密码 |
| [`supautils`](/ext/e/supautils) | [`supautils`](https://github.com/supabase/supautils) | `3.2.1` | `--sL---` | 用于在云环境中确保数据库集群的安全 |
| [`pgextwlist`](/ext/e/pgextwlist) | [`pgextwlist`](https://github.com/dimitri/pgextwlist) | `1.19` | `--sL---` | PostgreSQL扩展白名单功能 |
| [`sepgsql`](/ext/e/sepgsql) | [`sepgsql`](https://www.postgresql.org/docs/current/sepgsql.html) | `-` | `c-sL---` | 基于SELinux标签的强制访问控制 |
| [`auth_delay`](/ext/e/auth_delay) | [`auth_delay`](https://www.postgresql.org/docs/current/auth-delay.html) | `-` | `c-sL---` | 在返回认证失败前暂停一会，避免爆破 |
| [`passwordcheck`](/ext/e/passwordcheck) | [`passwordcheck`](https://www.postgresql.org/docs/current/passwordcheck.html) | `-` | `c-sL---` | 用于强制拒绝修改弱密码的扩展 |
| [`pg_statement_rollback`](/ext/e/pg_statement_rollback) | [`pg_statement_rollback`](https://github.com/lzlabs/pg_statement_rollback) | `1.5` | `--sL---` | 在服务端提供类似Oracle/DB2的语句级回滚能力 |
| [`pg_failover_slots`](/ext/e/pg_failover_slots) | [`pg_failover_slots`](https://github.com/EnterpriseDB/pg_failover_slots) | `1.2.1` | `--sL--r` | 在Failover过程中保留复制槽 |
| [`wal2json`](/ext/e/wal2json) | [`wal2json`](https://github.com/eulerto/wal2json) | `2.6` | `--s----` | 用逻辑解码捕获 JSON 格式的 CDC 变更 |
| [`wal2mongo`](/ext/e/wal2mongo) | [`wal2mongo`](https://github.com/HighgoSoftware/wal2mongo) | `1.0.7` | `--s----` | 使用逻辑解码捕获MongoDB JSON格式的CDC变更 |
| [`decoderbufs`](/ext/e/decoderbufs) | [`decoderbufs`](https://github.com/debezium/postgres-decoderbufs) | `3.4.1` | `--sL---` | 将WAL逻辑解码为ProtocolBuffer协议的消息 |
| [`decoder_raw`](/ext/e/decoder_raw) | [`decoder_raw`](https://github.com/michaelpq/pg_plugins/blob/main/decoder_raw/) | `1.0` | `--s----` | 逻辑复制解码输出插件：RAW SQL格式 |
| [`test_decoding`](/ext/e/test_decoding) | [`test_decoding`](https://www.postgresql.org/docs/current/test-decoding.html) | `-` | `c-s----` | 基于SQL的WAL逻辑解码样例 |
| [`pgoutput`](/ext/e/pgoutput) | [`pgoutput`](https://www.postgresql.org/docs/current/protocol-logical-replication.html) | `-` | `c-s----` | PG内置的逻辑解码输出插件 |
{.ext-table}


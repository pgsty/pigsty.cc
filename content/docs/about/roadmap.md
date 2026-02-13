---
title: 发展规划
weight: 121
description: 未来功能的规划，新功能的发布节奏，待办事项列表。
icon: fas fa-map
module: [PIGSTY]
categories: [参考]
---


----------------

## 版本发布策略

Pigsty 使用语义化版本号，`<主版本>.<次版本>.<修订号>`。Alpha / Beta / RC 版本会在版本号后添加后缀，如 `-a1`，`-b1`，`-c1`。

主版本更新意味着不兼容的基础性变化与重大新特性；次版本更新通常表示普通功能特性更新，较小的API变动；修订版本更新意味着 Bug 修复与软件包版本更新。

Pigsty 计划每年发布一次主版本更新，次版本更新通常跟随 PostgreSQL 小版本更新节奏，在 PostgreSQL 新版本发布后最迟一个月内跟进。
Pigsty 通常每年计划 4 - 6 个小版本，完整发布历史请参考 [**发行注记**](/docs/about/release) 。

{{% alert title="使用具体的版本号进行部署" color="primary" %}}
Pigsty 使用 **main** 主干分支进行开发，请始终使用带有版本号的 [**Release**](https://github.com/pgsty/pigsty/releases)。

除非您清楚知道自己在做什么，否则请勿使用 GitHub 的 **main** 分支，总是检出特定版本使用。
{{% /alert %}}



----------------

## 列入考虑的新特性

- [ ] Agent Native CLI - PIG
- [ ] DBA Agent - 基本集成
- [ ] Grafana Dashboard 改进
- [ ] Boar 管理平台

这里是我们的 [**活跃议题**](https://github.com/pgsty/pigsty/issues) 与 [**路线图**](https://github.com/users/Vonng/projects/2/views/3)。



----------

## 扩展插件与软件包

关于扩展支持的路线图，可以在这里找到：https://pgext.cloud/e/roadmap


### 考虑纳入

- PDU : https://github.com/wublabdubdub/PDU-PostgreSQLDataUnloader
- walminer https://gitee.com/movead/XLogMiner
- is_jsonb_valid https://github.com/furstenheim/is_jsonb_valid
- pg_kafka https://github.com/xstevens/pg_kafka
- pg_jieba https://github.com/jaiminpan/pg_jieba
- pg_paxos https://github.com/microsoft/pg_paxos
- OneSparse https://github.com/OneSparse/OneSparse
- PipelineDB https://github.com/pipelinedb/pipelinedb
- SQL Firewall https://github.com/uptimejp/sql_firewall
- zcurve https://github.com/bmuratshin/zcurve
- PG dot net https://github.com/Brick-Abode/pldotnet/releases
- pg_scws: https://github.com/jaiminpan/pg_scws
- themsis: https://github.com/cossacklabs/pg_themis
- pgspeck https://github.com/johto/pgspeck
- lsm3 https://github.com/postgrespro/lsm3
- monq https://github.com/postgrespro/monq
- pg_badplan https://github.com/trustly/pg_badplan
- pg_recall https://github.com/mreithub/pg_recall
- pgfsm https://github.com/michelp/pgfsm
- pg_trgm pro https://github.com/postgrespro/pg_trgm_pro
- pgsql-fio: https://github.com/csimsek/pgsql-fio

### 暂不考虑

- [pg_tier](https://github.com/tembo-io/pg_tier): not ready due to incomplete dep parquet_s3_fdw
- [parquet_s3_fdw](https://github.com/pgspider/parquet_s3_fdw): not ready due to compiler version
- pg_top: not ready due to cmake error
- timestamp9: not ready due to compiler error
- pg_tier obsolete
- pg_timeseries, we already have timescaledb
- pg_quack, we already have a pg_lakehouse
- pg_telemetry, we already have better observability
- pgx_ulid, https://github.com/pksunkara/pgx_ulid, already covered by pg_idkit (MIT, but RUST)
- embedding: obsolete
- FEAT zson https://github.com/postgrespro/zson MIT C (too old)
- GIS pghydro https://github.com/pghydro/pghydro C GPL-2.0 6.6 (no makefile)
- https://github.com/Zeleo/pg_natural_sort_order (too old)
- https://github.com/postgrespro/pg_query_state
- https://github.com/no0p/pgsampler
- pg_lz4 https://github.com/zilder/pg_lz4
- pg_amqp https://github.com/omniti-labs/pg_amqp
- tinyint https://github.com/umitanuki/tinyint-postgresql
- pg_blkchain https://github.com/blkchain/pg_blkchain
- hashtypes https://github.com/pandrewhk/hashtypes
- foreign_table_exposer https://github.com/komamitsu/foreign_table_exposer
- ldap_fdw https://github.com/guedes/ldap_fdw
- pg_backtrace https://github.com/postgrespro/pg_backtrace
- connection_limits https://github.com/tvondra/connection_limits
- fixeddecimal https://github.com/2ndQuadrant/fixeddecimal




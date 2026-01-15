---
title: 实例面板
weight: 30
description: PostgreSQL 实例级别监控面板
---

PostgreSQL 实例级别监控面板，包括：

- [PGSQL Instance](pgsql-instance)：单个 PGSQL 实例的主仪表板
- [PGRDS Instance](pgrds-instance)：PGSQL Instance 的 RDS 版本，专注于 PostgreSQL 本身的指标
- [PGCAT Instance](pgcat-instance)：直接从数据库目录获取的实例信息
- [PGSQL Persist](pgsql-persist)：持久性指标：WAL、XID、检查点、存档、IO
- [PGSQL Proxy](pgsql-proxy)：单个 HAProxy 负载均衡器的详细指标
- [PGSQL Pgbouncer](pgsql-pgbouncer)：单个 Pgbouncer 连接池实例中的指标总览
- [PGSQL Session](pgsql-session)：单个实例中的会话和活动/空闲时间的指标
- [PGSQL Xacts](pgsql-xacts)：关于事务、锁、TPS/QPS 相关的指标
- [PGSQL Exporter](pgsql-exporter)：Postgres 与 Pgbouncer 监控组件自我监控指标

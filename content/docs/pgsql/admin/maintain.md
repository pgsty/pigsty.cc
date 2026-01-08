---
title: 维护保养
weight: 1610
description: 常见系统维护任务
icon: fa-solid fa-broom
module: [PGSQL]
categories: [任务]
---

要确保 Pigsty 与 PostgreSQL 集群健康稳定运行，需要进行一些例行维护保养工作。


--------

## 定期查阅监控

Pigsty 提供了开箱即用的监控平台，我们建议您每天浏览一次监控大盘，关注系统状态。
极端情况下，我们建议您每周至少查阅一次监控，关注出现的告警事件，这样可以提前规避绝大多数故障与问题。

这里列举了 Pigsty 中预先定义的 [告警规则](https://demo.pigsty.cc/alerting/list) 列表。


--------

## 故障切换善后

Pigsty 的高可用架构允许 PostgreSQL 集群自动进行主从切换，这意味着运维与 DBA 无需即时介入与响应。
然而用户仍然需要在合适的时机（例如第二天工作日）进行以下善后工作，包括：

- 调查并确认故障出现的原因，避免再次出现
- 视情况恢复集群原本的主从拓扑，或者修改配置清单以匹配新的主从状态。
- 通过 `bin/pgsql-svc` 刷新负载均衡器配置，更新服务的路由状态
- 通过 `bin/pgsql-hba` 刷新集群的 HBA 规则，避免主从特定的规则漂移
- 如果有必要，使用 `bin/pgsql-rm` 移除故障服务器，并通过 `bin/pgsql-add` 扩容一台新从库


--------

## 表膨胀治理

长时间运行的 PostgreSQL 会出现 "表膨胀" / "索引膨胀" 现象， 导致系统性能劣化。

定期使用 [`pg_repack`](https://reorg.github.io/pg_repack/) 对表与索引进行在线重建，有助于维护 PostgreSQL 的良好性能表现。
Pigsty 已经默认在所有数据库中安装并启用了此扩展，因此您可以直接使用。

您可以通过 Pigsty 的 [PGCAT Database - Table Bloat](https://demo.pigsty.cc/d/pgcat-database) 面板，
确认数据库中的表膨胀情况与索引膨胀情况。并选择膨胀率较高（膨胀率高于 50% 的较大表）的表与索引，使用 `pg_repack` 进行在线重整：

```bash
pg_repack dbname -t schema.table
```

重整期间不会影响正常读写，但重整完毕之后的 **切换瞬间** 需要获取表上的 AccessExclusive 锁阻塞一切访问。
因此对于高吞吐量业务，建议在业务低峰期或者维护窗口进行。更多细节，请参考：[关系膨胀的治理](https://vonng.com/pg/bloat/)


--------

## VACUUM FREEZE

冻结过期事务ID（VACUUM FREEZE）是PostgreSQL重要的维护任务，用于防止事务ID (XID) 用尽导致停机。
尽管 PostgreSQL 已经提供了自动垃圾回收（AutoVacuum）机制，然而对于高标准的生产环境，
我们依然建议结合自动和手动两种方式，定期执行全库级别的 VACUUM FREEZE ，以确保 XID 安全。

您可以使用以下命令手工对数据库执行 VACUUM FREEZE：

```sql
-- 对整个数据库执行 VACUUM FREEZE
VACUUM FREEZE;

-- 对特定表执行 VACUUM FREEZE
VACUUM FREEZE schema.table_name;
```

或者通过 crontab 设置定时任务，例如每周日凌晨执行：

```bash
# 每周日凌晨3点对所有数据库执行 VACUUM FREEZE
0 3 * * 0 postgres psql -c 'VACUUM FREEZE;' dbname
```


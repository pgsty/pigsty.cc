---
title: 误删处理
weight: 1608
description: 处理误删数据，误删表，误删数据库
icon: fa-solid fa-trash
module: [PGSQL]
categories: [任务]
---


## 误删数据

如果是小批量 `DELETE` 误操作，可以考虑使用 [`pg_surgery`](https://pgext.cloud/e/pg_surgery) 或者 [`pg_dirtyread`](https://pgext.cloud/e/pg_dirtyread) 扩展进行原地手术恢复。

```sql
-- 立即关闭此表上的 Auto Vacuum 并中止 Auto Vacuum 本表的 worker 进程
ALTER TABLE public.some_table SET (autovacuum_enabled = off, toast.autovacuum_enabled = off);

CREATE EXTENSION pg_dirtyread;
SELECT * FROM pg_dirtyread('tablename') AS t(col1 type1, col2 type2, ...);
```

如果被删除的数据已经被 VACUUM 回收，那么使用通用的误删处理流程。


## 误删对象

当出现 `DROP/DELETE` 类误操作，通常按照以下流程决定恢复方案。

1. 确认此数据是否可以通过业务系统或其他数据系统找回，如果可以，直接从业务侧修复。
2. 确认是否有延迟从库，如果有，推进延迟从库至误删时间点，查询出来恢复。
3. 如果数据已经确认删除，确认备份信息，恢复范围是否覆盖误删时间点，如果覆盖，开始 PITR
4. 确认是整集群原地 [PITR 回滚](/docs/pgsql/backup/restore)，还是新开服务器重放，还是用从库来重放，并执行恢复策略


## 误删集群

如果出现整个数据库集群通过 Pigsty 管理命令被误删的情况，例如错误的执行 [`pgsql-rm.yml`](/docs/pgsql/playbook#pgsql-rmyml) 剧本或 `bin/pgsql-rm` 命令。
除非您指定了 [`pg_rm_backup`](/docs/pgsql/param#pg_rm_backup) 参数为 `false`，否则备份会与数据库集群一起被删除。

> **警告**：在这种情况，您的数据将无法找回！**请务必三思而后行！**

建议：对于生产环境，您可以在配置清单中全局配置此参数为 `false`，在移除集群时保留备份。


---
title: 克隆数据库集群
weight: 1706
description: 用 PITR 把一个集群的历史状态恢复到另一个集群：找回误删数据、执行恢复演练，以及必不可少的 Stanza 善后。
icon: fa-solid fa-clone
categories: [任务]
---

克隆是恢复能力最有价值的用法：**不动生产集群**，把它的历史状态恢复到另一套集群上。
误删数据后从克隆库中导回、定期演练验证备份可用性、审计取证查看历史状态、把测试环境重置为生产某刻的快照 ——
这些场景的操作方式完全相同，本页给出完整流程。

前提条件只有一个：目标集群能访问源集群的备份仓库。使用集中式仓库（[**MinIO / S3**](/docs/pgsql/backup/repository/)）时天然满足 ——
仓库中以 [**stanza**](/docs/pgsql/backup/mechanism/#stanza集群的备份身份) 隔离的各集群备份，对共享仓库的所有集群可见。


--------

## 克隆现有集群

假设四节点沙箱中有 `pg-meta` 与 `pg-test` 两套集群，共享 MinIO 备份仓库。
要把 `pg-test` 重置为 `pg-meta` 的 **最新状态**，只需在 [**`pg_pitr`**](/docs/pgsql/backup/restore/#pitr-参数定义)
中把恢复来源指向 `pg-meta` 的 stanza：

```bash
./pgsql-pitr.yml -l pg-test -e '{"pg_pitr": { "cluster": "pg-meta" }}'
```

配合恢复目标，可以克隆到备份保留期内的 **任意时间点** —— 例如把 `pg-test` 重置为 `pg-meta`
在 2025 年 12 月 26 日 15:30 的状态：

```bash
./pgsql-pitr.yml -l pg-test -e '{"pg_pitr": { "cluster": "pg-meta", "time": "2025-12-26 15:30:00+08" }}'
```

目标集群也可以是全新创建的空集群：先用标准流程 [**创建集群**](/docs/pgsql/admin/cluster)（如 `pg-meta2`），
再对它执行跨集群 PITR，即完成了"从备份仓库引导新集群"。

pgBackRest 的还原是增量的（`delta`）：只重写与备份不一致的文件。
因此对反复执行的演练、或已通过 [**备份集群**](/docs/pgsql/config/cluster#备份集群)（Standby Cluster）
物理复制拉齐过数据的目标集群，克隆速度会显著快于首次全量还原。

误删数据的典型找回流程到这里只剩最后一步：在克隆集群中验证数据无误后，
用 `pg_dump` 导出受影响的表/库，导回生产集群。全库原地回滚是最后手段，而不是第一反应。


--------

## 克隆善后

克隆出的新集群带着 **源集群的数据**，但备份仓库中它自己的 stanza 仍记录着 **原来的身份**（system-id）。
pgBackRest 写入备份前会核对身份，不一致即拒绝 —— 这个保护机制防止新集群的备份污染源集群的备份历史。

因此，确认克隆结果符合预期后，必须执行三步善后，新集群的备份链路才能恢复正常：

```bash
pb stanza-upgrade                          # 1. 升级 stanza，接纳新集群的 system-id（仅跨集群克隆需要）
psql -c 'ALTER SYSTEM RESET archive_mode;' # 2. 恢复归档（仅当 PITR 时设置了 archive: false）
pg restart pg-test                         #    archive_mode 为 postmaster 参数，重启生效
pg-backup full                             # 3. 全量备份，让新集群从此刻起拥有自己的备份历史
```

跳过善后的后果是可预期的：下一次例行备份会因身份核对失败而报错，
在此期间新集群 **没有备份保护**（如果关闭了归档，也不会产生新的 WAL 归档）：

```bash
postgres@pg-test-1:~$ pb backup
INFO: backup command begin 2.57.0: --annotation=pg_cluster=pg-test ... --stanza=pg-test --start-fast
ERROR: [051]: PostgreSQL version 18, system-id 7588470953413201282 do not match stanza version 18, system-id 7588470974940466058
       HINT: is this the correct stanza?
INFO: backup command end: aborted with exception [051]
```


--------

## 重建备份身份

`stanza-upgrade` 让新集群沿用原 stanza 继续写备份。如果您希望新集群拥有 **全新的备份历史**
（例如克隆出的集群将长期独立演化），也可以选择彻底重建其备份配置 —— 声明式方式：

```bash
./pgsql-rm.yml -t pg_backup -l pg-test -e pg_rm_backup=true   # 删除 pg-test 的 stanza 与旧备份
./pgsql.yml    -t pg_backup -l pg-test                        # 重新配置 pgbackrest，创建全新 stanza
pg-backup full                                                # 建立第一个恢复点
```

或者用 [**pgbackrest 原语**](/docs/pgsql/backup/admin/#stanza-管理) 手动完成同样的事情：

```bash
pb stop --force            # 暂停 pgbackrest 操作
pb stanza-delete --force   # 删除 stanza 及其备份（危险操作，确认无误再执行）
pb start                   # 恢复 pgbackrest 操作
pb stanza-create           # 以当前集群身份重建 stanza
pg-backup full             # 建立第一个恢复点
```


--------

## 在线副本：备份集群

克隆得到的是 **静态的时间点快照**。如果需要的是持续跟随源集群的 **在线副本**，
应使用 [**备份集群**](/docs/pgsql/config/cluster#备份集群)（Standby Cluster，基于流复制）；
需要"一直落后一小时"的快速反悔窗口，则使用 [**延迟集群**](/docs/pgsql/config/cluster#延迟集群)。

三者互为补充：备份集群提供实时副本，延迟集群提供固定延迟的反悔窗口，
PITR 克隆提供保留期内任意时刻的快照 —— 且不需要提前准备。


--------

## 恢复演练

克隆是 **零风险的恢复演练**：全程不触碰生产集群，却端到端验证了备份系统的每个环节。
建议将以下演练纳入例行运维（每季度，或每次重大变更后）：

1. 选定演练目标：生产集群恢复窗口内的某个时间点；
2. 向演练集群执行跨集群 PITR，**记录耗时** —— 这就是实测的 PITR RTO；
3. 验证数据完整性：行数抽查、关键业务表校验、应用连通测试；
4. 执行 [**克隆善后**](#克隆善后)，确认演练集群自身备份恢复正常（验证善后流程本身也是演练的一部分）；
5. 记录结果：恢复耗时、发现的问题、文档与实际操作的出入。

沙箱环境中使用 pgbackrest 原语手工执行恢复的完整教程，参阅 [**手工恢复**](/docs/pgsql/tutorial/pitr)；
在同一台机器上用 XFS 快照快速 Fork 实例的进阶技巧，参阅 [**Fork 实例**](/docs/pgsql/tutorial/pg-fork)。

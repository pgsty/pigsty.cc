---
title: 常见问题
weight: 3470
description: Pigsty etcd 模块常见问题答疑
icon: fa-solid fa-circle-question
module: [PIGSTY]
categories: [参考]
---


--------

## etcd集群起什么作用？

etcd 是一个分布式的、可靠的键-值存储，用于存放系统中最为关键的数据，Pigsty 使用 etcd 作为 Patroni 的 DCS（分布式配置存储）服务，用于存储 PostgreSQL 集群的高可用状态信息。

Patroni 将通过 etcd，实现集群故障检测、自动故障转移、主从切换，集群配置管理等功能。

etcd 对于 PostgreSQL 集群的高可用至关重要，而 etcd 本身的可用性与容灾，是通过使用多个分布式的节点来保证的。





--------

## etcd集群使用多大规模合适？

如果超过集群成员数一半（包括正好一半）的 etcd 实例不可用，那么 etcd 集群将进入不可用状态，拒绝对外提供服务。

例如：使用 3 节点的 etcd 集群允许最多一个节点宕机，而其他两个节点仍然可以正常工作；而使用 5 节点的 etcd 集群则可以容忍 2 节点失效。

请注意，etcd 集群中的 **学习者**（Learner）实例不计入成员数，因此在 3 节点 etcd 集群中，如果有一个学习者实例，那么实际上成员数量为 2，不能容忍任一节点失效。

在生产环境中，我们建议使用奇数个 etcd 实例，对于生产环境，建议使用 3 节点或 5 节点的 etcd 集群部署以确保足够的可靠性。




--------

## etcd集群不可用会有什么影响？

如果 etcd 集群不可用，那么会影响 PostgreSQL 的管控平面，但不会影响数据平面 —— 现有的 PostgreSQL 集群将继续运行，但通过 Patroni 进行的管理操作将无法执行。

etcd 故障期间，PostgreSQL 高可用将无法实现自动故障转移，您也无法使用 `patronictl` 对 PostgreSQL 集群发起管理操作，例如修改配置，执行手动故障转移等。
通过 Ansible 发起的管理命令不受 etcd 故障影响：例如创建数据库，创建用户，刷新 HBA 与 Service 配置等，etcd 故障期间，您依然可以直接操作 PostgreSQL 集群来实现这些功能。

请注意，以上描述的行为仅适用于较新版本的 Patroni (>=3.0，对应 Pigsty >= 2.0)。如果您使用的是较老版本的 Patroni (<3.0，对应 Pigsty 版本为 1.x)，则 etcd / consul 故障会引发极为严重的全局性影响：
所有 PostgreSQL 集群将发生降级：主库将降级为从库，拒绝写请求，etcd 故障将放大为全局性 PostgreSQL 故障。在 Patroni 3.0 引入 DCS Failsafe 功能后，这种情况得到了显著改善。





--------

## etcd集群中存储着什么数据？

在 Pigsty 中，etcd 仅用于 PostgreSQL 高可用，并不会用于存储任何其他配置或状态数据。

而 PG 高可用组件 Patroni 会自动生成并管理 etcd 中的数据，当这些数据在 etcd 中丢失时，Patroni 会自动重建。

因此默认情况下，Pigsty 中的 **etcd** 可以视作 “无状态服务”，可以进行销毁与重建，这为维护工作带来了极大的便利。

如果您将 etcd 用于其他目的，例如作为 Kubernetes 的元数据存储，或自行存储其他数据，那么您需要自行备份 etcd 数据，并在 etcd 集群恢复后进行数据恢复。




--------

## 如何从etcd故障中恢复？

因为 Pigsty 中的 etcd 只用于 PostgreSQL 高可用，本质上是可销毁、可重建的 “无状态服务”，因此在出现故障时，您可以通过 “重启” / “重置” 来进行快速止血。

要 **重启** etcd 集群，您可以使用以下 Ansible 命令：

```bash
./etcd.yml -t etcd_launch
```

要 **重置** etcd 集群，您可以直接执行以下剧本，实现覆盖抹除式重装：

```bash
./etcd.yml
```

如果您自行使用 etcd 存储了其他数据，那么通常需要备份 etcd 数据，并在 etcd 集群恢复后进行数据恢复。




--------

## 维护etcd有什么注意事项？

简单的版本是：**不要写爆 etcd 就好**。

Pigsty v2.6+ 默认启用了 etcd 自动压实（Auto Compact）和 16GB 的后端存储配额，通常无需担心写满 etcd 的问题。

etcd 的 [数据模型](https://etcd.io/docs/v3.5/learning/data_model/) 使得每一次写入都会产生一个新的版本。
因此如果您的 etcd 集群频繁写入，即使只有极个别的 Key，etcd 数据库的大小也可能会不断增长。
当达到容量上限时，etcd 将会拒绝写入请求，这可能导致依赖 etcd 的 PostgreSQL 高可用机制无法正常工作。

Pigsty 默认的 etcd 配置已包含以下优化：

```yaml
auto-compaction-mode: periodic      # 周期性自动压缩
auto-compaction-retention: "24h"    # 保留 24 小时历史
quota-backend-bytes: 17179869184    # 16 GiB 配额
```

更多维护细节请阅读 etcd [官方文档维护指南](https://etcd.io/docs/v3.5/op-guide/maintenance/)。

{{% alert title="提示" color="info" %}}
对于 Pigsty v2.6 之前的版本，请参照下面的说明手动启用 etcd 自动垃圾回收。
{{% /alert %}}




--------

## 如何启动etcd自动垃圾回收？

如果您使用的早先版本的 Pigsty （v2.0 - v2.5），我们强烈建议您通过以下步骤，在生产环境中启用 etcd 的自动压实功能，从而避免 etcd 容量配额写满导致的 etcd 不可用故障。

在 Pigsty 源码目录中，编辑 etcd 配置文件模板：[`roles/etcd/templates/etcd.conf.j2`](https://github.com/pgsty/pigsty/blob/main/roles/etcd/templates/etcd.conf.j2#L30)，添加以下三条配置项：

```yaml
auto-compaction-mode: periodic
auto-compaction-retention: "24h"
quota-backend-bytes: 17179869184
```

然后将所有相关 PostgreSQL 集群设置为 [**维护模式**](/docs/pgsql/admin/patroni#暂停自动切换) 后，重新使用 `./etcd.yml` 覆盖部署 etcd 集群即可。

该配置会将 etcd 默认的容量配额从 2 GiB 提高到 16 GiB，并确保只保留最近一天的写入历史版本，从而避免了 etcd 数据库大小的无限增长。





--------

## etcd中的PostgreSQL高可用数据存储在哪里？

默认情况下，Patroni 使用 [**`pg_namespace`**](/docs/pgsql/param#pg_namespace) 指定的前缀（默认为 `/pg`）作为所有元数据键的前缀，随后是 PostgreSQL 集群名称。
例如，名为 `pg-meta` 的 PG 集群，其元数据键将存储在 `/pg/pg-meta` 下。

```bash
etcdctl get /pg/pg-meta --prefix
```

其中的数据样本如下所示：

```bash
/pg/pg-meta/config
{"ttl":30,"loop_wait":10,"retry_timeout":10,"primary_start_timeout":10,"maximum_lag_on_failover":1048576,"maximum_lag_on_syncnode":-1,"primary_stop_timeout":30,"synchronous_mode":false,"synchronous_mode_strict":false,"failsafe_mode":true,"pg_version":16,"pg_cluster":"pg-meta","pg_shard":"pg-meta","pg_group":0,"postgresql":{"use_slots":true,"use_pg_rewind":true,"remove_data_directory_on_rewind_failure":true,"parameters":{"max_connections":100,"superuser_reserved_connections":10,"max_locks_per_transaction":200,"max_prepared_transactions":0,"track_commit_timestamp":"on","wal_level":"logical","wal_log_hints":"on","max_worker_processes":16,"max_wal_senders":50,"max_replication_slots":50,"password_encryption":"scram-sha-256","ssl":"on","ssl_cert_file":"/pg/cert/server.crt","ssl_key_file":"/pg/cert/server.key","ssl_ca_file":"/pg/cert/ca.crt","shared_buffers":"7969MB","maintenance_work_mem":"1993MB","work_mem":"79MB","max_parallel_workers":8,"max_parallel_maintenance_workers":2,"max_parallel_workers_per_gather":0,"hash_mem_multiplier":8.0,"huge_pages":"try","temp_file_limit":"7GB","vacuum_cost_delay":"20ms","vacuum_cost_limit":2000,"bgwriter_delay":"10ms","bgwriter_lru_maxpages":800,"bgwriter_lru_multiplier":5.0,"min_wal_size":"7GB","max_wal_size":"28GB","max_slot_wal_keep_size":"42GB","wal_buffers":"16MB","wal_writer_delay":"20ms","wal_writer_flush_after":"1MB","commit_delay":20,"commit_siblings":10,"checkpoint_timeout":"15min","checkpoint_completion_target":0.8,"archive_mode":"on","archive_timeout":300,"archive_command":"pgbackrest --stanza=pg-meta archive-push %p","max_standby_archive_delay":"10min","max_standby_streaming_delay":"3min","wal_receiver_status_interval":"1s","hot_standby_feedback":"on","wal_receiver_timeout":"60s","max_logical_replication_workers":8,"max_sync_workers_per_subscription":6,"random_page_cost":1.1,"effective_io_concurrency":1000,"effective_cache_size":"23907MB","default_statistics_target":200,"log_destination":"csvlog","logging_collector":"on","log_directory":"/pg/log/postgres","log_filename":"postgresql-%Y-%m-%d.log","log_checkpoints":"on","log_lock_waits":"on","log_replication_commands":"on","log_statement":"ddl","log_min_duration_statement":100,"track_io_timing":"on","track_functions":"all","track_activity_query_size":8192,"log_autovacuum_min_duration":"1s","autovacuum_max_workers":2,"autovacuum_naptime":"1min","autovacuum_vacuum_cost_delay":-1,"autovacuum_vacuum_cost_limit":-1,"autovacuum_freeze_max_age":1000000000,"deadlock_timeout":"50ms","idle_in_transaction_session_timeout":"10min","shared_preload_libraries":"timescaledb, pg_stat_statements, auto_explain","auto_explain.log_min_duration":"1s","auto_explain.log_analyze":"on","auto_explain.log_verbose":"on","auto_explain.log_timing":"on","auto_explain.log_nested_statements":true,"pg_stat_statements.max":5000,"pg_stat_statements.track":"all","pg_stat_statements.track_utility":"off","pg_stat_statements.track_planning":"off","timescaledb.telemetry_level":"off","timescaledb.max_background_workers":8,"citus.node_conninfo":"sslm
ode=prefer"}}}
/pg/pg-meta/failsafe
{"pg-meta-2":"http://10.10.10.11:8008/patroni","pg-meta-1":"http://10.10.10.10:8008/patroni"}
/pg/pg-meta/initialize
7418384210787662172
/pg/pg-meta/leader
pg-meta-1
/pg/pg-meta/members/pg-meta-1
{"conn_url":"postgres://10.10.10.10:5432/postgres","api_url":"http://10.10.10.10:8008/patroni","state":"running","role":"primary","version":"4.0.1","tags":{"clonefrom":true,"version":"16","spec":"8C.32G.125G","conf":"tiny.yml"},"xlog_location":184549376,"timeline":1}
/pg/pg-meta/members/pg-meta-2
{"conn_url":"postgres://10.10.10.11:5432/postgres","api_url":"http://10.10.10.11:8008/patroni","state":"running","role":"replica","version":"4.0.1","tags":{"clonefrom":true,"version":"16","spec":"8C.32G.125G","conf":"tiny.yml"},"xlog_location":184549376,"replication_state":"streaming","timeline":1}
/pg/pg-meta/status
{"optime":184549376,"slots":{"pg_meta_2":184549376,"pg_meta_1":184549376},"retain_slots":["pg_meta_1","pg_meta_2"]}
```






--------

## 如何使用一个外部的已经存在的 etcd 集群？

配置清单中硬编码了所使用 etcd 的分组名为 `etcd`，这个分组里的成员将被用作 PGSQL 的 DCS 服务器。您可以使用 `etcd.yml` 对它们进行初始化，或直接假设它是一个已存在的外部 etcd 集群。

要使用现有的外部 etcd 集群，只要像往常一样定义它们即可，您可以跳过 `etcd.yml` 剧本的执行，因为集群已经存在，不需要部署。

但用户必须确保 **现有 etcd 集群证书是由 Pigsty 使用的相同 CA 签名颁发的**。否则客户端无法使用 Pigsty 自签名 CA 颁发的证书来访问外部的 etcd 集群。






--------

## 如何向现有etcd集群添加新的成员？

> 详细过程，请参考 [向 etcd 集群添加成员](/docs/etcd/admin#添加成员)

**推荐方式：使用便捷脚本**

```bash
# 首先在配置清单中添加新成员定义，然后执行：
bin/etcd-add <ip>      # 添加单个新成员
bin/etcd-add <ip1>     # 添加多个新成员
```

**手动方式：**

```bash
etcdctl member add <etcd-?> --learner=true --peer-urls=https://<new_ins_ip>:2380 # 宣告新成员加入
./etcd.yml -l <new_ins_ip> -e etcd_init=existing                                 # 初始化新成员
etcdctl member promote <new_ins_server_id>                                       # 提升为正式成员
```

请注意，我们建议一次只添加一个新成员。



--------

## 如何从现有etcd集群中移除成员？

> 详细过程，请参考 [从 etcd 集群中移除成员](/docs/etcd/admin#移除成员)

**推荐方式：使用便捷脚本**

```bash
bin/etcd-rm <ip>              # 移除指定成员
bin/etcd-rm                   # 移除整个 etcd 集群
```

**手动方式：**

```bash
./etcd-rm.yml -l <ins_ip>                    # 使用专用移除剧本
etcdctl member remove <etcd_server_id>       # 从集群中踢出成员
./etcd-rm.yml -l <ins_ip>                    # 清理实例
```



--------

## 如何配置 etcd RBAC 认证？

Pigsty v4.0 默认启用 etcd 的 RBAC 认证。root 用户密码由 [`etcd_root_password`](/docs/etcd/param#etcd_root_password) 参数控制，默认值为 `Etcd.Root`。

**在生产环境中，强烈建议修改默认密码**：

```yaml
all:
  vars:
    etcd_root_password: 'YourSecurePassword'
```

**客户端认证**：

```bash
# 在 etcd 节点上，环境变量已自动配置
source /etc/profile.d/etcdctl.sh
etcdctl member list

# 手动配置认证
export ETCDCTL_USER="root:YourSecurePassword"
export ETCDCTL_CACERT=/etc/etcd/ca.crt
export ETCDCTL_CERT=/etc/etcd/server.crt
export ETCDCTL_KEY=/etc/etcd/server.key
```

更多详情请参考 [RBAC 认证](/docs/etcd/admin#rbac-认证)。

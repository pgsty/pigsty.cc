---
title: 指标列表
weight: 3860
description: REDIS 当前记录规则与原始指标的获取方式、历史抓取样本。
icon: fa-solid fa-list-check
module: [REDIS]
categories: [参考]
---

本页区分 **采集端点的原始指标** 与 **vmalert 计算生成的记录指标**。[**`files/victoria/rules/redis.yml`**](https://github.com/pgsty/pigsty/blob/main/files/victoria/rules/redis.yml) 定义了 **96 条记录规则**；常用示例见下表，完整名称与表达式见 [**记录指标索引**](#记录指标索引)。记录指标应在 VictoriaMetrics 中查询，不在 Exporter 的 `/metrics` 端点中。

原始指标会随软件版本、采集器、权限、实例角色与运行状态变化。页末保留历史抓取样本，仅供识别指标，不代表当前版本的完整接口。

## 当前记录规则

`ins`、`cls`、`env` 分别用于实例、集群与环境层级，实际聚合标签以表达式为准。记录指标与原始指标的类型、计数区别见 [**指标口径**](/docs/infra/metric/#指标口径)。

| 记录指标 | 表达式 | 含义或单位 |
|:---|:---|:---|
| `redis:ins:cpu_usage` | `rate(redis_cpu_sys_seconds_total[1m]) + rate(redis_cpu_user_seconds_total[1m])` | CPU 消耗，CPU 秒/秒 |
| `redis:ins:mem_usage` | `redis_memory_used_bytes / redis_memory_max_bytes` | 已用内存与配置上限之比 |
| `redis:ins:qps` | `rate(redis_commands_processed_total[1m])` | 命令执行速率，次/秒 |
| `redis:cls:qps` | `sum by (job, cls) (redis:ins:qps)` | 集群命令执行速率，次/秒 |
| `redis:ins:key_hit_rate` | `redis:ins:key_hit / (redis:ins:key_hit + redis:ins:key_miss)` | 键查询命中比例 |
| `redis:ins:clients` | `redis_connected_clients` | 已连接客户端数量 |
| `redis:ins:key_miss` | `rate(redis_keyspace_misses_total[1m])` | 键查询未命中速率，次/秒 |
| `redis:ins:lsn_rate` | `rate(redis_master_repl_offset[1m])` | 复制偏移推进速率，字节/秒 |
{.full-width}

## 历史抓取样本

以下保留 **177 个指标名称** 的既有样本，已移除记录规则和告警状态序列。样本未记录抓取时间与软件版本，类型和标签仅供参考；`Unknown` 表示类型元数据缺失。统计方式见 [**指标口径**](/docs/infra/metric/#指标口径)。

| Metric Name                                           | Type    | Labels                                                                                                                                                       | Description                                                     |
|-------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| redis_active_defrag_running                           | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | active_defrag_running metric                                    |
| redis_allocator_active_bytes                          | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | allocator_active_bytes metric                                   |
| redis_allocator_allocated_bytes                       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | allocator_allocated_bytes metric                                |
| redis_allocator_frag_bytes                            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | allocator_frag_bytes metric                                     |
| redis_allocator_frag_ratio                            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | allocator_frag_ratio metric                                     |
| redis_allocator_resident_bytes                        | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | allocator_resident_bytes metric                                 |
| redis_allocator_rss_bytes                             | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | allocator_rss_bytes metric                                      |
| redis_allocator_rss_ratio                             | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | allocator_rss_ratio metric                                      |
| redis_aof_current_rewrite_duration_sec                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | aof_current_rewrite_duration_sec metric                         |
| redis_aof_enabled                                     | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | aof_enabled metric                                              |
| redis_aof_last_bgrewrite_status                       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | aof_last_bgrewrite_status metric                                |
| redis_aof_last_cow_size_bytes                         | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | aof_last_cow_size_bytes metric                                  |
| redis_aof_last_rewrite_duration_sec                   | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | aof_last_rewrite_duration_sec metric                            |
| redis_aof_last_write_status                           | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | aof_last_write_status metric                                    |
| redis_aof_rewrite_in_progress                         | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | aof_rewrite_in_progress metric                                  |
| redis_aof_rewrite_scheduled                           | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | aof_rewrite_scheduled metric                                    |
| redis_blocked_clients                                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | blocked_clients metric                                          |
| redis_client_recent_max_input_buffer_bytes            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | client_recent_max_input_buffer_bytes metric                     |
| redis_client_recent_max_output_buffer_bytes           | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | client_recent_max_output_buffer_bytes metric                    |
| redis_clients_in_timeout_table                        | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | clients_in_timeout_table metric                                 |
| redis_cluster_connections                             | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_connections metric                                      |
| redis_cluster_current_epoch                           | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_current_epoch metric                                    |
| redis_cluster_enabled                                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_enabled metric                                          |
| redis_cluster_known_nodes                             | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_known_nodes metric                                      |
| redis_cluster_messages_received_total                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_messages_received_total metric                          |
| redis_cluster_messages_sent_total                     | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_messages_sent_total metric                              |
| redis_cluster_my_epoch                                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_my_epoch metric                                         |
| redis_cluster_size                                    | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_size metric                                             |
| redis_cluster_slots_assigned                          | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_slots_assigned metric                                   |
| redis_cluster_slots_fail                              | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_slots_fail metric                                       |
| redis_cluster_slots_ok                                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_slots_ok metric                                         |
| redis_cluster_slots_pfail                             | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_slots_pfail metric                                      |
| redis_cluster_state                                   | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_state metric                                            |
| redis_cluster_stats_messages_meet_received            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_stats_messages_meet_received metric                     |
| redis_cluster_stats_messages_meet_sent                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_stats_messages_meet_sent metric                         |
| redis_cluster_stats_messages_ping_received            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_stats_messages_ping_received metric                     |
| redis_cluster_stats_messages_ping_sent                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_stats_messages_ping_sent metric                         |
| redis_cluster_stats_messages_pong_received            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_stats_messages_pong_received metric                     |
| redis_cluster_stats_messages_pong_sent                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cluster_stats_messages_pong_sent metric                         |
| redis_commands_duration_seconds_total                 | counter | `cls`, `cmd`, `ip`, `instance`, `ins`, `job`                                                                                                                 | Total amount of time in seconds spent per command               |
| redis_commands_failed_calls_total                     | counter | `cls`, `cmd`, `ip`, `instance`, `ins`, `job`                                                                                                                 | Total number of errors prior command execution per command      |
| redis_commands_latencies_usec_bucket                  | Unknown | `cls`, `cmd`, `ip`, `le`, `instance`, `ins`, `job`                                                                                                           | N/A                                                             |
| redis_commands_latencies_usec_count                   | Unknown | `cls`, `cmd`, `ip`, `instance`, `ins`, `job`                                                                                                                 | N/A                                                             |
| redis_commands_latencies_usec_sum                     | Unknown | `cls`, `cmd`, `ip`, `instance`, `ins`, `job`                                                                                                                 | N/A                                                             |
| redis_commands_processed_total                        | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | commands_processed_total metric                                 |
| redis_commands_rejected_calls_total                   | counter | `cls`, `cmd`, `ip`, `instance`, `ins`, `job`                                                                                                                 | Total number of errors within command execution per command     |
| redis_commands_total                                  | counter | `cls`, `cmd`, `ip`, `instance`, `ins`, `job`                                                                                                                 | Total number of calls per command                               |
| redis_config_io_threads                               | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | config_io_threads metric                                        |
| redis_config_maxclients                               | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | config_maxclients metric                                        |
| redis_config_maxmemory                                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | config_maxmemory metric                                         |
| redis_connected_clients                               | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | connected_clients metric                                        |
| redis_connected_slave_lag_seconds                     | gauge   | `cls`, `ip`, `slave_ip`, `instance`, `slave_state`, `ins`, `slave_port`, `job`                                                                               | Lag of connected slave                                          |
| redis_connected_slave_offset_bytes                    | gauge   | `cls`, `ip`, `slave_ip`, `instance`, `slave_state`, `ins`, `slave_port`, `job`                                                                               | Offset of connected slave                                       |
| redis_connected_slaves                                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | connected_slaves metric                                         |
| redis_connections_received_total                      | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | connections_received_total metric                               |
| redis_cpu_sys_children_seconds_total                  | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cpu_sys_children_seconds_total metric                           |
| redis_cpu_sys_main_thread_seconds_total               | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cpu_sys_main_thread_seconds_total metric                        |
| redis_cpu_sys_seconds_total                           | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cpu_sys_seconds_total metric                                    |
| redis_cpu_user_children_seconds_total                 | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cpu_user_children_seconds_total metric                          |
| redis_cpu_user_main_thread_seconds_total              | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cpu_user_main_thread_seconds_total metric                       |
| redis_cpu_user_seconds_total                          | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | cpu_user_seconds_total metric                                   |
| redis_db_keys                                         | gauge   | `cls`, `ip`, `instance`, `ins`, `db`, `job`                                                                                                                  | Total number of keys by DB                                      |
| redis_db_keys_expiring                                | gauge   | `cls`, `ip`, `instance`, `ins`, `db`, `job`                                                                                                                  | Total number of expiring keys by DB                             |
| redis_defrag_hits                                     | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | defrag_hits metric                                              |
| redis_defrag_key_hits                                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | defrag_key_hits metric                                          |
| redis_defrag_key_misses                               | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | defrag_key_misses metric                                        |
| redis_defrag_misses                                   | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | defrag_misses metric                                            |
| redis_dump_payload_sanitizations                      | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | dump_payload_sanitizations metric                               |
| redis_errors_total                                    | counter | `cls`, `ip`, `err`, `instance`, `ins`, `job`                                                                                                                 | Total number of errors per error type                           |
| redis_evicted_keys_total                              | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | evicted_keys_total metric                                       |
| redis_expired_keys_total                              | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | expired_keys_total metric                                       |
| redis_expired_stale_percentage                        | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | expired_stale_percentage metric                                 |
| redis_expired_time_cap_reached_total                  | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | expired_time_cap_reached_total metric                           |
| redis_exporter_build_info                             | gauge   | `cls`, `golang_version`, `ip`, `commit_sha`, `instance`, `version`, `ins`, `job`, `build_date`                                                               | redis exporter build_info                                       |
| redis_exporter_last_scrape_connect_time_seconds       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | exporter_last_scrape_connect_time_seconds metric                |
| redis_exporter_last_scrape_duration_seconds           | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | exporter_last_scrape_duration_seconds metric                    |
| redis_exporter_last_scrape_error                      | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | The last scrape error status.                                   |
| redis_exporter_scrape_duration_seconds_count          | Unknown | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | N/A                                                             |
| redis_exporter_scrape_duration_seconds_sum            | Unknown | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | N/A                                                             |
| redis_exporter_scrapes_total                          | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Current total redis scrapes.                                    |
| redis_instance_info                                   | gauge   | `cls`, `ip`, `os`, `role`, `instance`, `run_id`, `redis_version`, `tcp_port`, `process_id`, `ins`, `redis_mode`, `maxmemory_policy`, `redis_build_id`, `job` | Information about the Redis instance                            |
| redis_io_threaded_reads_processed                     | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | io_threaded_reads_processed metric                              |
| redis_io_threaded_writes_processed                    | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | io_threaded_writes_processed metric                             |
| redis_io_threads_active                               | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | io_threads_active metric                                        |
| redis_keyspace_hits_total                             | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | keyspace_hits_total metric                                      |
| redis_keyspace_misses_total                           | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | keyspace_misses_total metric                                    |
| redis_last_key_groups_scrape_duration_milliseconds    | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Duration of the last key group metrics scrape in milliseconds   |
| redis_last_slow_execution_duration_seconds            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | The amount of time needed for last slow execution, in seconds   |
| redis_latency_percentiles_usec                        | summary | `cls`, `cmd`, `ip`, `instance`, `quantile`, `ins`, `job`                                                                                                     | A summary of latency percentile distribution per command        |
| redis_latency_percentiles_usec_count                  | Unknown | `cls`, `cmd`, `ip`, `instance`, `ins`, `job`                                                                                                                 | N/A                                                             |
| redis_latency_percentiles_usec_sum                    | Unknown | `cls`, `cmd`, `ip`, `instance`, `ins`, `job`                                                                                                                 | N/A                                                             |
| redis_latest_fork_seconds                             | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | latest_fork_seconds metric                                      |
| redis_lazyfree_pending_objects                        | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | lazyfree_pending_objects metric                                 |
| redis_loading_dump_file                               | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | loading_dump_file metric                                        |
| redis_master_last_io_seconds_ago                      | gauge   | `cls`, `ip`, `master_host`, `instance`, `ins`, `job`, `master_port`                                                                                          | Master last io seconds ago                                      |
| redis_master_link_up                                  | gauge   | `cls`, `ip`, `master_host`, `instance`, `ins`, `job`, `master_port`                                                                                          | Master link status on Redis slave                               |
| redis_master_repl_offset                              | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | master_repl_offset metric                                       |
| redis_master_sync_in_progress                         | gauge   | `cls`, `ip`, `master_host`, `instance`, `ins`, `job`, `master_port`                                                                                          | Master sync in progress                                         |
| redis_mem_clients_normal                              | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | mem_clients_normal metric                                       |
| redis_mem_clients_slaves                              | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | mem_clients_slaves metric                                       |
| redis_mem_fragmentation_bytes                         | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | mem_fragmentation_bytes metric                                  |
| redis_mem_fragmentation_ratio                         | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | mem_fragmentation_ratio metric                                  |
| redis_mem_not_counted_for_eviction_bytes              | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | mem_not_counted_for_eviction_bytes metric                       |
| redis_memory_max_bytes                                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_max_bytes metric                                         |
| redis_memory_used_bytes                               | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_used_bytes metric                                        |
| redis_memory_used_dataset_bytes                       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_used_dataset_bytes metric                                |
| redis_memory_used_lua_bytes                           | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_used_lua_bytes metric                                    |
| redis_memory_used_overhead_bytes                      | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_used_overhead_bytes metric                               |
| redis_memory_used_peak_bytes                          | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_used_peak_bytes metric                                   |
| redis_memory_used_rss_bytes                           | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_used_rss_bytes metric                                    |
| redis_memory_used_scripts_bytes                       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_used_scripts_bytes metric                                |
| redis_memory_used_startup_bytes                       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | memory_used_startup_bytes metric                                |
| redis_migrate_cached_sockets_total                    | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | migrate_cached_sockets_total metric                             |
| redis_module_fork_in_progress                         | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | module_fork_in_progress metric                                  |
| redis_module_fork_last_cow_size                       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | module_fork_last_cow_size metric                                |
| redis_net_input_bytes_total                           | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | net_input_bytes_total metric                                    |
| redis_net_output_bytes_total                          | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | net_output_bytes_total metric                                   |
| redis_number_of_cached_scripts                        | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | number_of_cached_scripts metric                                 |
| redis_process_id                                      | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | process_id metric                                               |
| redis_pubsub_channels                                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | pubsub_channels metric                                          |
| redis_pubsub_patterns                                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | pubsub_patterns metric                                          |
| redis_pubsubshard_channels                            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | pubsubshard_channels metric                                     |
| redis_rdb_bgsave_in_progress                          | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | rdb_bgsave_in_progress metric                                   |
| redis_rdb_changes_since_last_save                     | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | rdb_changes_since_last_save metric                              |
| redis_rdb_current_bgsave_duration_sec                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | rdb_current_bgsave_duration_sec metric                          |
| redis_rdb_last_bgsave_duration_sec                    | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | rdb_last_bgsave_duration_sec metric                             |
| redis_rdb_last_bgsave_status                          | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | rdb_last_bgsave_status metric                                   |
| redis_rdb_last_cow_size_bytes                         | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | rdb_last_cow_size_bytes metric                                  |
| redis_rdb_last_save_timestamp_seconds                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | rdb_last_save_timestamp_seconds metric                          |
| redis_rejected_connections_total                      | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | rejected_connections_total metric                               |
| redis_repl_backlog_first_byte_offset                  | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | repl_backlog_first_byte_offset metric                           |
| redis_repl_backlog_history_bytes                      | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | repl_backlog_history_bytes metric                               |
| redis_repl_backlog_is_active                          | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | repl_backlog_is_active metric                                   |
| redis_replica_partial_resync_accepted                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | replica_partial_resync_accepted metric                          |
| redis_replica_partial_resync_denied                   | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | replica_partial_resync_denied metric                            |
| redis_replica_resyncs_full                            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | replica_resyncs_full metric                                     |
| redis_replication_backlog_bytes                       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | replication_backlog_bytes metric                                |
| redis_second_repl_offset                              | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | second_repl_offset metric                                       |
| redis_sentinel_master_ckquorum_status                 | gauge   | `cls`, `ip`, `message`, `instance`, `ins`, `master_name`, `job`                                                                                              | Master ckquorum status                                          |
| redis_sentinel_master_ok_sentinels                    | gauge   | `cls`, `ip`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                                       | The number of okay sentinels monitoring this master             |
| redis_sentinel_master_ok_slaves                       | gauge   | `cls`, `ip`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                                       | The number of okay slaves of the master                         |
| redis_sentinel_master_sentinels                       | gauge   | `cls`, `ip`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                                       | The number of sentinels monitoring this master                  |
| redis_sentinel_master_setting_ckquorum                | gauge   | `cls`, `ip`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                                       | Show the current ckquorum config for each master                |
| redis_sentinel_master_setting_down_after_milliseconds | gauge   | `cls`, `ip`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                                       | Show the current down-after-milliseconds config for each master |
| redis_sentinel_master_setting_failover_timeout        | gauge   | `cls`, `ip`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                                       | Show the current failover-timeout config for each master        |
| redis_sentinel_master_setting_parallel_syncs          | gauge   | `cls`, `ip`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                                       | Show the current parallel-syncs config for each master          |
| redis_sentinel_master_slaves                          | gauge   | `cls`, `ip`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                                       | The number of slaves of the master                              |
| redis_sentinel_master_status                          | gauge   | `cls`, `ip`, `master_status`, `instance`, `ins`, `master_address`, `master_name`, `job`                                                                      | Master status on Sentinel                                       |
| redis_sentinel_masters                                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | The number of masters this sentinel is watching                 |
| redis_sentinel_running_scripts                        | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Number of scripts in execution right now                        |
| redis_sentinel_scripts_queue_length                   | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Queue of user scripts to execute                                |
| redis_sentinel_simulate_failure_flags                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Failures simulations                                            |
| redis_sentinel_tilt                                   | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Sentinel is in TILT mode                                        |
| redis_slave_expires_tracked_keys                      | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | slave_expires_tracked_keys metric                               |
| redis_slave_info                                      | gauge   | `cls`, `ip`, `master_host`, `instance`, `read_only`, `ins`, `job`, `master_port`                                                                             | Information about the Redis slave                               |
| redis_slave_priority                                  | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | slave_priority metric                                           |
| redis_slave_repl_offset                               | gauge   | `cls`, `ip`, `master_host`, `instance`, `ins`, `job`, `master_port`                                                                                          | Slave replication offset                                        |
| redis_slowlog_last_id                                 | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Last id of slowlog                                              |
| redis_slowlog_length                                  | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Total slowlog                                                   |
| redis_start_time_seconds                              | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Start time of the Redis instance since unix epoch in seconds.   |
| redis_target_scrape_request_errors_total              | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Errors in requests to the exporter                              |
| redis_total_error_replies                             | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | total_error_replies metric                                      |
| redis_total_reads_processed                           | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | total_reads_processed metric                                    |
| redis_total_system_memory_bytes                       | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | total_system_memory_bytes metric                                |
| redis_total_writes_processed                          | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | total_writes_processed metric                                   |
| redis_tracking_clients                                | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | tracking_clients metric                                         |
| redis_tracking_total_items                            | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | tracking_total_items metric                                     |
| redis_tracking_total_keys                             | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | tracking_total_keys metric                                      |
| redis_tracking_total_prefixes                         | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | tracking_total_prefixes metric                                  |
| redis_unexpected_error_replies                        | counter | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | unexpected_error_replies metric                                 |
| redis_up                                              | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | Information about the Redis instance                            |
| redis_uptime_in_seconds                               | gauge   | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | uptime_in_seconds metric                                        |
| scrape_duration_seconds                               | Unknown | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | N/A                                                             |
| scrape_samples_post_metric_relabeling                 | Unknown | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | N/A                                                             |
| scrape_samples_scraped                                | Unknown | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | N/A                                                             |
| scrape_series_added                                   | Unknown | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | N/A                                                             |
| up                                                    | Unknown | `cls`, `ip`, `instance`, `ins`, `job`                                                                                                                        | N/A                                                             |
{.full-width}

## 记录指标索引

以下按规则文件的分组列出完整名称与表达式，可用页面搜索查找指标。若规则有变，以部署到 `/infra/rules/` 的文件为准。

<details>
<summary>REDIS：96 条记录规则</summary>

| 记录指标 | 表达式 |
|:---|:---|
| `redis:ins` | `max by (id, ins, instance, cls, job) (   label_replace(redis_up, "id", "$1", "ins", "(.+)") OR   label_replace(redis_up, "id", "$1", "instance", "(.+)") )` |
| `redis:node:ip` | `label_replace(redis_up, "ip", "$1", "instance", "(.*)\\:\\d+")` |
| `redis:node:mem_total` | `max by (job,cls,ip) (label_replace(redis_total_system_memory_bytes, "ip", "$1", "instance", "(.*)\\:\\d+"))` |
| `redis:node:mem_alloc` | `sum by (job,cls,ip) (label_replace(redis_config_maxmemory, "ip", "$1", "instance", "(.*)\\:\\d+"))` |
| `redis:node:mem_used` | `sum by (job,cls,ip) (label_replace(redis_memory_used_bytes, "ip", "$1", "instance", "(.*)\\:\\d+"))` |
| `redis:node:qps` | `sum by (job,cls,ip) (label_replace(redis:ins:qps, "ip", "$1", "instance", "(.*)\\:\\d+"))` |
| `redis:ins:cpu_sys` | `rate(redis_cpu_sys_seconds_total[1m])` |
| `redis:ins:cpu_user` | `rate(redis_cpu_user_seconds_total[1m])` |
| `redis:ins:cpu_usage` | `rate(redis_cpu_sys_seconds_total[1m]) + rate(redis_cpu_user_seconds_total[1m])` |
| `redis:cls:cpu_sys` | `avg by (job, cls) (redis:ins:cpu_sys)` |
| `redis:cls:cpu_user` | `avg by (job, cls) (redis:ins:cpu_user)` |
| `redis:cls:cpu_usage` | `avg by (job, cls) (redis:ins:cpu_usage)` |
| `redis:env:cpu_usage` | `avg by (job)(redis:ins:cpu_usage)` |
| `redis:ins:cpu_sys_child` | `rate(redis_cpu_sys_children_seconds_total[1m])` |
| `redis:ins:cpu_user_child` | `rate(redis_cpu_user_children_seconds_total[1m])` |
| `redis:ins:cpu_usage_child` | `rate(redis_cpu_sys_children_seconds_total[1m]) + rate(redis_cpu_user_children_seconds_total[1m])` |
| `redis:cls:cpu_sys_child` | `avg by (job, cls) (redis:ins:cpu_sys_child)` |
| `redis:cls:cpu_user_child` | `avg by (job, cls) (redis:ins:cpu_user_child)` |
| `redis:cls:cpu_usage_child` | `avg by (job, cls) (redis:ins:cpu_usage_child)` |
| `redis:env:cpu_usage_child` | `avg by (job) (redis:ins:cpu_usage_child)` |
| `redis:ins:mem_usage` | `redis_memory_used_bytes / redis_memory_max_bytes` |
| `redis:cls:mem_used` | `sum by (job, cls) (redis_memory_used_bytes)` |
| `redis:cls:mem_max` | `sum by (job, cls) (redis_memory_max_bytes)` |
| `redis:cls:mem_usage` | `redis:cls:mem_used / redis:cls:mem_max` |
| `redis:cls:mem_usage_max` | `max by (job, cls) (redis:ins:mem_usage)` |
| `redis:env:mem_usage` | `sum by (job)(redis:cls:mem_used) / sum by (job)(redis:cls:mem_max)` |
| `redis:ins:rx` | `rate(redis_net_input_bytes_total[1m])` |
| `redis:cls:rx` | `sum by (job, cls) (redis:ins:rx)` |
| `redis:env:rx` | `sum by (job) (redis:cls:rx)` |
| `redis:ins:tx` | `rate(redis_net_output_bytes_total[1m])` |
| `redis:cls:tx` | `sum by (job, cls) (redis:ins:tx)` |
| `redis:env:tx` | `sum by (job) (redis:cls:tx)` |
| `redis:ins:net_traffic` | `redis:ins:rx + redis:ins:tx` |
| `redis:cls:net_traffic` | `redis:cls:rx + redis:cls:tx` |
| `redis:env:net_traffic` | `redis:env:rx + redis:env:tx` |
| `redis:ins:qps_realtime` | `irate(redis_commands_processed_total[1m])` |
| `redis:cls:qps_realtime` | `sum by (job, cls) (redis:ins:qps_realtime)` |
| `redis:env:qps_realtime` | `sum by (job) (redis:cls:qps_realtime)` |
| `redis:ins:qps` | `rate(redis_commands_processed_total[1m])` |
| `redis:cls:qps` | `sum by (job, cls) (redis:ins:qps)` |
| `redis:env:qps` | `sum by (job) (redis:cls:qps)` |
| `redis:ins:qps_mu` | `avg_over_time(redis:ins:qps[30m])` |
| `redis:cls:qps_mu` | `avg_over_time(redis:cls:qps[30m])` |
| `redis:env:qps_mu` | `avg_over_time(redis:env:qps[30m])` |
| `redis:ins:qps_sigma` | `stddev_over_time(redis:ins:qps[30m])` |
| `redis:cls:qps_sigma` | `stddev_over_time(redis:cls:qps[30m])` |
| `redis:env:qps_sigma` | `stddev_over_time(redis:env:qps[30m])` |
| `redis:ins:key_expire` | `rate(redis_expired_keys_total[1m])` |
| `redis:cls:key_expire` | `sum by (job, cls) (redis:ins:key_expire)` |
| `redis:env:key_expire` | `sum by (job) (redis:cls:key_expire)` |
| `redis:ins:key_evict` | `rate(redis_evicted_keys_total[1m])` |
| `redis:cls:key_evict` | `sum by (job, cls) (redis:ins:key_evict)` |
| `redis:env:key_evict` | `sum by (job) (redis:cls:key_evict)` |
| `redis:ins:key_hit` | `rate(redis_keyspace_hits_total[1m])` |
| `redis:cls:key_hit` | `sum by (job, cls) (redis:ins:key_hit)` |
| `redis:env:key_hit` | `sum by (job) (redis:cls:key_hit)` |
| `redis:ins:key_miss` | `rate(redis_keyspace_misses_total[1m])` |
| `redis:cls:key_miss` | `sum by (job, cls) (redis:ins:key_miss)` |
| `redis:env:key_miss` | `sum by (job) (redis:cls:key_miss)` |
| `redis:ins:key_hit_rate` | `redis:ins:key_hit / (redis:ins:key_hit + redis:ins:key_miss)` |
| `redis:cls:key_hit_rate` | `redis:cls:key_hit / (redis:cls:key_hit + redis:cls:key_miss)` |
| `redis:env:key_hit_rate` | `redis:env:key_hit / (redis:env:key_hit + redis:env:key_miss)` |
| `redis:ins:cmd_time` | `rate(redis_commands_duration_seconds_total[1m])` |
| `redis:cls:cmd_time` | `sum by (job,cls,cmd) (redis:ins:cmd_time)` |
| `redis:env:cmd_time` | `sum by (job,cmd) (redis:ins:cmd_time)` |
| `redis:ins:cmd_qps` | `rate(redis_commands_total[1m])` |
| `redis:cls:cmd_qps` | `sum by (job,cls,cmd) (redis:ins:cmd_qps)` |
| `redis:env:cmd_qps` | `sum by (job,cmd) (redis:cls:cmd_qps)` |
| `redis:ins:cmd_rt` | `redis:ins:cmd_time / redis:ins:cmd_qps` |
| `redis:cls:cmd_rt` | `redis:cls:cmd_time / redis:cls:cmd_qps` |
| `redis:env:cmd_rt` | `redis:env:cmd_time / redis:env:cmd_qps` |
| `redis:ins:rt` | `sum without (cmd) (redis:ins:cmd_time) / sum without (cmd) (redis:ins:cmd_qps)` |
| `redis:cls:rt` | `sum without (cmd) (redis:cls:cmd_time) / sum without (cmd) (redis:cls:cmd_qps)` |
| `redis:env:rt` | `sum without (cmd) (redis:env:cmd_time) / sum without (cmd) (redis:env:cmd_qps)` |
| `redis:ins:rt_mu` | `avg_over_time(redis:ins:rt[30m])` |
| `redis:cls:rt_mu` | `avg_over_time(redis:cls:rt[30m])` |
| `redis:env:rt_mu` | `avg_over_time(redis:env:rt[30m])` |
| `redis:ins:rt_sigma` | `stddev_over_time(redis:ins:rt[30m])` |
| `redis:cls:rt_sigma` | `stddev_over_time(redis:cls:rt[30m])` |
| `redis:env:rt_sigma` | `stddev_over_time(redis:env:rt[30m])` |
| `redis:ins:clients` | `redis_connected_clients` |
| `redis:cls:clients` | `sum by (job, cls) (redis:ins:clients)` |
| `redis:env:clients` | `sum by (job)(redis:cls:clients)` |
| `redis:ins:blocked_clients` | `rate(redis_blocked_clients[1m])` |
| `redis:cls:blocked_clients` | `sum by (job, cls) (redis:ins:blocked_clients)` |
| `redis:env:blocked_clients` | `sum by (job)(redis:cls:blocked_clients)` |
| `redis:ins:conn_rate` | `rate(redis_connections_received_total[1m])` |
| `redis:cls:conn_rate` | `sum by (job, cls) (redis:ins:conn_rate)` |
| `redis:env:conn_rate` | `sum by (job)(redis:cls:conn_rate)` |
| `redis:ins:conn_reject` | `rate(redis_rejected_connections_total[1m])` |
| `redis:cls:conn_reject` | `sum by (job, cls) (redis:ins:conn_reject)` |
| `redis:env:conn_reject` | `sum by (job)(redis:cls:conn_reject)` |
| `redis:ins:lsn_rate` | `rate(redis_master_repl_offset[1m])` |
| `redis:cls:fork_time` | `max by (job, cls) (redis_latest_fork_seconds)` |
| `redis:cls:aof_rewrite_time` | `max by (job, cls) (redis_aof_last_rewrite_duration_sec)` |
| `redis:cls:size` | `count by (job, cls) (redis_up)` |
{.full-width}

</details>

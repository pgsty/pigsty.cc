---
title: 指标列表
weight: 4987
description: VAULT 的标签模型、14 条记录规则，以及监控面板使用的 OpenBao 原始指标。
icon: fa-solid fa-list-check
module: [VAULT]
categories: [参考]
---

本页区分 **OpenBao 遥测接口的原始指标** 与 **vmalert 计算生成的记录指标**。当前源码的 [`files/victoria/rules/vault.yml`](https://github.com/pgsty/pigsty/blob/main/files/victoria/rules/vault.yml) 定义了 **14 条记录规则**；记录指标由规则求值得到，不应在 `/v1/sys/metrics` 接口中查找。

原始指标会随 OpenBao 版本、成员角色与运行状态变化。下文列出的是 Vault Overview 面板与记录规则用到的原始指标，并不代表遥测接口的完整输出，完整列表请参考 [OpenBao 遥测指标文档](https://openbao.org/docs/internals/telemetry/metrics/)。


--------

## 标签模型

所有 VAULT 指标都携带统一的标签：

| 标签 | 含义 | 示例 |
|:---|:---|:---|
| `job` | 抓取任务 | `vault` |
| `cls` | 集群名，即 [`vault_cluster`](/docs/vault/param#vault_cluster) | `vault` |
| `ins` | 实例名，即 `<vault_cluster>-<vault_seq>` | `vault-1` |
| `ip` | 成员地址 | `10.10.10.11` |
| `instance` | 抓取地址 | `10.10.10.11:8200` |
{.full-width}

记录规则以 `vault:ins:*`（实例级）与 `vault:cls:*`（集群级）命名。


--------

## 原始指标的特点

OpenBao 沿用了上游 Vault 的 `vault_` 指标前缀，并通过 go-metrics 输出 Prometheus 格式的指标，有几点需要注意：

- **计数器没有 `_total` 后缀**，例如 `vault_raft_apply`、`vault_token_creation`；
- **Summary 的单位是毫秒**，例如 `vault_core_handle_request` 的分位数与 `_sum` 都以毫秒计，记录规则在计算平均延迟时会除以 1000 换算为秒；
- **部分计数器只有在首次发生后才会出现**，例如审计失败计数器 `vault_audit_log_request_failure`，因此记录规则使用 `increase_pure` 从 0 开始计算增量；
- **Autopilot 与 follower 指标只由 leader 上报**，并且在成员卸任 leader 后仍会被保留 24 小时（`prometheus_retention_time`）。因此记录规则只采信当前 active 成员上报的值，并把其中的 `node_id` / `peer_id` 标签映射回 `ins`；
- **用量类指标**（令牌数、KV 机密数、身份实体数）由 OpenBao 每 10 分钟计算一次（`usage_gauge_period`）。


--------

## 当前记录规则

表达式保留源码语义，`ins` 与 `cls` 分别表示实例与集群聚合层级，实际保留的标签以 `by` 与向量匹配子句为准。

| 记录指标 | 说明 | 表达式 |
|:---|:---|:---|
| `vault:ins:req_rps` | 实例的非登录请求速率（次/秒） | `rate(vault_core_handle_request_count{job="vault"}[1m])` |
| `vault:ins:login_rps` | 实例的登录请求速率（次/秒） | `rate(vault_core_handle_login_request_count{job="vault"}[1m])` |
| `vault:ins:req_rt_avg_5m` | 实例 5 分钟平均请求延迟（秒） | `rate(vault_core_handle_request_sum{job="vault"}[5m]) / rate(vault_core_handle_request_count{job="vault"}[5m]) / 1000` |
| `vault:cls:req_rt_avg_5m` | 集群 5 分钟平均请求延迟（秒），按请求量加权 | `sum by (job,cls) (rate(vault_core_handle_request_sum{job="vault"}[5m])) / sum by (job,cls) (rate(vault_core_handle_request_count{job="vault"}[5m])) / 1000` |
| `vault:cls:unsealed` | 集群中已解封的成员数 | `sum by (job,cls) (vault_core_unsealed{job="vault"}) or (0 * count by (job,cls) (up{job="vault"}))` |
| `vault:cls:active` | 集群中 active 成员数，正常应恰好为 1 | `sum by (job,cls) (vault_core_active{job="vault"}) or (0 * count by (job,cls) (up{job="vault"}))` |
| `vault:cls:autopilot_healthy` | active 成员视角的集群健康状态 | `max by (job,cls) (vault_autopilot_healthy{job="vault"} and on(ins) (vault_core_active{job="vault"} == 1))` |
| `vault:cls:failure_tolerance` | active 成员视角的集群容错数 | `max by (job,cls) (vault_autopilot_failure_tolerance{job="vault"} and on(ins) (vault_core_active{job="vault"} == 1))` |
| `vault:ins:autopilot_healthy` | active 成员视角的各成员健康状态 | `max by (job,cls,ins) (label_replace(vault_autopilot_node_healthy{job="vault"} and on(ins) (vault_core_active{job="vault"} == 1), "ins", "$1", "node_id", "(.+)"))` |
| `vault:ins:raft_lag` | follower 已应用索引落后 leader 的日志条数 | `max by (job,cls,ins) (label_replace(vault_raft_storage_follower_applied_index_delta{job="vault"} and on(ins) (vault_core_active{job="vault"} == 1), "ins", "$1", "peer_id", "(.+)"))` |
| `vault:ins:raft_heartbeat_ms` | follower 距离上次心跳的时间（毫秒） | `max by (job,cls,ins) (label_replace(vault_raft_storage_follower_last_heartbeat_ms{job="vault"} and on(ins) (vault_core_active{job="vault"} == 1), "ins", "$1", "peer_id", "(.+)"))` |
| `vault:ins:audit_failure_5m` | 实例 5 分钟内的审计写入失败次数 | `sum by (job,cls,ins,ip,instance) (increase_pure({__name__=~"vault_audit_log_(request\|response)_failure",job="vault"}[5m]))` |
| `vault:ins:backup_time` | 实例最近一次成功快照的 Unix 时间戳 | `max by (ip) (vault_backup_last_success_timestamp_seconds) + on(ip) group_right() vault_up * 0` |
| `vault:ins:backup_size` | 实例最近一次成功快照的大小（字节） | `max by (ip) (vault_backup_size_bytes) + on(ip) group_right() vault_up * 0` |
{.full-width .wide .expand}

在一个时间窗口内没有任何请求时，平均延迟的计算结果为 `0/0 = NaN`，会被丢弃，表现为没有数据。

此外，`vault_up` 来自 INFRA 的 [共享存活记录规则](/docs/infra/metric#共享存活记录规则)（`up{job="vault"}`），不包含在上面的模块规则数量中。它反映的是抓取是否成功，不代表成员已解封或能够正常提供服务。


--------

## 常用原始指标

**状态与请求**

| 指标 | 类型 | 说明 |
|:---|:---|:---|
| `vault_core_unsealed` | Gauge | 成员是否已解封，`1` 为已解封 |
| `vault_core_active` | Gauge | 成员是否为 active，`1` 为 active |
| `vault_core_handle_request` | Summary（毫秒） | 非登录请求的处理耗时，包含分位数、`_sum` 与 `_count` |
| `vault_core_handle_login_request` | Summary（毫秒） | 登录请求的处理耗时 |
| `vault_ha_rpc_client_forward_count` / `_errors` | Summary / Counter | standby 向 active 转发请求的次数与错误 |
| `vault_ha_rpc_client_echo_count` / `_errors` | Summary / Counter | standby 与 active 之间心跳的次数与错误 |
{.full-width}

**Raft 与 Autopilot**

| 指标 | 类型 | 说明 |
|:---|:---|:---|
| `vault_raft_storage_stats_commit_index` | Gauge | 成员的 Raft 提交索引 |
| `vault_raft_storage_stats_applied_index` | Gauge | 成员的 Raft 已应用索引 |
| `vault_raft_storage_stats_fsm_pending` | Gauge | 等待应用到状态机的日志数量 |
| `vault_raft_storage_follower_applied_index_delta` | Gauge | follower 落后 leader 的日志条数，仅由 leader 上报，带 `peer_id` 标签 |
| `vault_raft_storage_follower_last_heartbeat_ms` | Gauge | follower 距上次心跳的毫秒数，仅由 leader 上报，带 `peer_id` 标签 |
| `vault_raft_state_leader` | Counter | 成员成为 leader 的次数，用于观察选举 |
| `vault_raft_peers` | Gauge | Raft 成员数 |
| `vault_raft_apply` | Counter | 写入 Raft 日志的次数 |
| `vault_raft_commitTime` | Summary（毫秒） | Raft 日志提交耗时 |
| `vault_raft_leader_lastContact` | Summary（毫秒） | leader 与 follower 上次联系距今的时间 |
| `vault_raft_storage_bolt_page_bytes_allocated` | Gauge | BoltDB 已分配的页面字节数 |
| `vault_raft_storage_bolt_freelist_used_bytes` | Gauge | BoltDB 空闲列表占用的字节数 |
| `vault_autopilot_healthy` | Gauge | 集群是否健康，仅由 leader 上报 |
| `vault_autopilot_failure_tolerance` | Gauge | 集群容错数，仅由 leader 上报 |
| `vault_autopilot_node_healthy` | Gauge | 各成员是否健康，仅由 leader 上报，带 `node_id` 标签 |
{.full-width}

**机密、令牌与审计**

| 指标 | 类型 | 说明 |
|:---|:---|:---|
| `vault_expire_num_leases` | Gauge | 当前租约数量 |
| `vault_expire_renew_count` / `vault_expire_revoke_count` | Summary | 租约续期与吊销的次数 |
| `vault_token_count` | Gauge | 令牌数量（用量指标） |
| `vault_token_creation` | Counter | 令牌创建次数 |
| `vault_secret_kv_count` | Gauge | KV 机密数量（用量指标） |
| `vault_identity_num_entities` | Gauge | 身份实体数量 |
| `vault_audit_log_request_count` / `vault_audit_log_response_count` | Summary | 审计设备记录请求与响应的次数 |
| `vault_audit_log_request_failure` / `vault_audit_log_response_failure` | Counter | 审计写入失败次数，首次失败后才会出现 |
{.full-width}

**运行时**

| 指标 | 类型 | 说明 |
|:---|:---|:---|
| `vault_runtime_num_goroutines` | Gauge | Goroutine 数量 |
| `vault_runtime_alloc_bytes` / `vault_runtime_sys_bytes` | Gauge | 堆上已分配内存，以及向操作系统申请的内存 |
| `vault_runtime_heap_objects` | Gauge | 堆对象数量 |
| `vault_runtime_total_gc_pause_ns` / `vault_runtime_total_gc_runs` | Gauge | 累计 GC 暂停时间与 GC 次数 |
{.full-width}

**快照备份**（来自 node_exporter 的 textfile 采集器，`job` 为 node 的抓取任务）

| 指标 | 类型 | 说明 |
|:---|:---|:---|
| `vault_backup_last_success_timestamp_seconds` | Gauge | 本机最近一次成功快照的 Unix 时间戳 |
| `vault_backup_size_bytes` | Gauge | 本机最近一次成功快照的大小（字节） |
{.full-width}

这两个指标由 `vault-backup` 脚本在快照成功后写入 `/var/lib/node_exporter/textfile/vault.prom`，只在成功时更新。移除成员时，该文件会一并删除。

---
title: 指标列表
weight: 3670
description: Pigsty MINIO 模块监控 Silo 使用的 Metrics V3 接口、关键指标和稳定标签。
icon: fa-solid fa-list-check
module: [MINIO]
categories: [参考]
---


MINIO 模块通过 `/minio/metrics/v3` 采集 Silo 指标。指标集合会随服务端版本和实际启用功能变化，因此本页列出当前仪表盘与告警依赖的稳定接口，不把某个版本的完整抓取快照当作长期契约。


--------

## 稳定身份标签

所有对象存储目标都使用以下 Pigsty 标签：

| 标签         | 含义                                 | 示例                 |
|:-----------|:-----------------------------------|:-------------------|
| `job`      | 固定模块命名空间                           | `minio`            |
| `flavor`   | 实际后端                               | `silo`             |
| `cls`      | `minio_cluster` 集群标识               | `minio`            |
| `ins`      | `<minio_cluster>-<minio_seq>` 实例标识 | `minio-1`          |
| `ip`       | 清单管理地址                             | `10.10.10.10`      |
| `instance` | 指标目标地址                             | `10.10.10.10:9000` |
{.full-width}

查询与记录规则应优先使用 `cls`、`ins`、`ip` 这些稳定身份标签。


--------

## Silo Metrics V3

每个 Silo 实例只抓取 V3 根端点 `/minio/metrics/v3`。当前关键指标如下：

| 类别  | 关键指标                                                                                                 | 含义                  |
|:----|:-----------------------------------------------------------------------------------------------------|:--------------------|
| 存活  | `minio_up`                                                                                           | Pigsty 对该实例的抓取/健康状态 |
| 节点  | `minio_cluster_health_nodes_online_count`、`minio_cluster_health_nodes_offline_count`                 | 在线与离线节点数            |
| 磁盘  | `minio_cluster_health_drives_online_count`、`minio_cluster_health_drives_offline_count`               | 在线与离线磁盘数            |
| 容量  | `minio_cluster_health_capacity_raw_total_bytes`                                                      | 原始总容量               |
| 容量  | `minio_cluster_health_capacity_usable_total_bytes`、`minio_cluster_health_capacity_usable_free_bytes` | 可用总容量与剩余容量          |
| 对象  | `minio_cluster_usage_objects_count`、`minio_cluster_usage_objects_total_bytes`                        | 对象数量与使用字节数          |
| 存储桶 | `minio_cluster_usage_objects_buckets_count`                                                          | 聚合存储桶数量             |
| 纠删码 | `minio_cluster_erasure_set_overall_health`、`minio_cluster_erasure_set_overall_write_quorum`          | 纠删码集合健康与写入法定人数      |
| API | `minio_api_requests_total`、`minio_api_requests_errors_total`、`minio_api_requests_4xx_errors_total`   | API 请求与错误计数         |
| API | `minio_api_requests_inflight_total`、`minio_api_requests_incoming_total`                              | 并发与进入请求             |
| 流量  | `minio_api_requests_traffic_received_bytes`、`minio_api_requests_traffic_sent_bytes`                  | 收发字节数               |
| 延迟  | `minio_api_requests_ttfb_seconds_distribution`                                                       | 首字节延迟分布             |
| 进程  | `minio_system_process_cpu_total_seconds`、`minio_system_process_resident_memory_bytes`                | 进程 CPU 与常驻内存        |
| 系统  | `minio_system_drive_free_bytes`、`minio_system_drive_used_bytes`、`minio_system_drive_health`          | 单盘容量与健康状态           |
| 审计  | `minio_audit_total_messages`                                                                         | 审计消息计数              |
{.full-width}

Pigsty 在抓取阶段丢弃 `bucket` 标签非空的样本，并且不注册专用 per-bucket 与 replication 端点。这是刻意的基数控制策略；如果业务确实需要逐桶指标，应单独评估时序规模后自行增加采集任务。

---
title: 监控告警
weight: 3660
description: Pigsty 如何监控 Silo、MinIO 与 RustFS，对象存储指标入口、Grafana 面板和告警规则说明。
icon: fa-solid fa-binoculars
module: [MINIO]
categories: [参考]
---


## 管理界面

所选对象存储引擎默认通过 [`minio_admin_port`](/docs/minio/param#minio_admin_port)（`9001`）提供管理界面。Silo/MinIO 可直接访问 `https://<node-ip>:9001`；RustFS 控制台位于同一端口的 `/rustfs/console/`。

部分配置模板还会通过 `m.pigsty` 暴露管理入口。登录凭证由 [`minio_access_key`](/docs/minio/param#minio_access_key) 与 [`minio_secret_key`](/docs/minio/param#minio_secret_key) 指定。

{{% alert title="HTTPS 与证书信任" color="info" %}}
对象存储默认使用 Pigsty CA 签发的 HTTPS 证书。浏览器和容器客户端必须信任该 CA；生产环境不要以忽略证书校验代替正确配置证书信任。
{{% /alert %}}


---------

## 采集链路

三种引擎沿用 `job="minio"`、`cls`、`ins`、`ip`、`instance` 这组稳定身份标签，并用 `flavor` 区分后端：

| 引擎 | 指标链路 | 目标与标签 |
|:---|:---|:---|
| Silo / MinIO | VictoriaMetrics 拉取 `https://<instance>:9000/minio/metrics/v3` | `job=minio`，`flavor=silo` 或 `flavor=minio` |
| RustFS | RustFS 以 OTLP/HTTP 主动推送原生指标；`minio` 抓取任务另经 Blackbox Exporter 探测 `/minio/health/ready` | `job=minio`，`flavor=rustfs` |
{.full-width}

每个实例的 FileSD 目标写入 `/infra/targets/minio/<minio_cluster>-<minio_seq>.yml`。

Silo/MinIO 只注册一个 Metrics V3 根端点。该端点同时提供集群、系统、API 与聚合用量指标；Pigsty 会丢弃 `bucket` 标签非空的样本，不再单独注册按桶和复制端点，以控制时序基数。

RustFS 不暴露 MinIO Metrics V3。默认情况下，它每 15 秒将原生指标推送到清单中第一个 `infra` 节点的 VictoriaMetrics `/opentelemetry/v1/metrics`；可用 [`rustfs_metrics_endpoint`](/docs/minio/param#rustfs_metrics_endpoint) 指向已有的 VictoriaMetrics Cluster/VIP。多个彼此独立的单机 VictoriaMetrics 不会自动复制推送样本，不能用普通负载均衡器假装复制。


---------

## Grafana 面板

Pigsty 为对象存储提供两组面板：

- **MinIO Overview / MinIO Instance**：用于 Silo 与 MinIO 的 Metrics V3 指标
- **RustFS Overview / RustFS Instance**：用于 RustFS 原生 OTLP 指标、就绪状态和结构化日志

[![minio-overview.jpg](/img/dashboard/minio-overview.jpg)](https://demo.pigsty.cc/d/minio-overview)

RustFS 的应用日志默认以 `warn` 级别写入 systemd journal，可由 Pigsty 现有的通用 syslog 链路送入 VictoriaLogs；角色不会额外创建 RustFS 专用 Vector source 或 sink。


---------

## 告警规则

当前 `files/victoria/rules/minio.yml` 为 Silo/MinIO 定义了五条告警：

| 告警 | 条件摘要 | 级别 |
|:---|:---|:---:|
| `MinioServerDown` | `minio_up < 1` 持续 1 分钟 | CRIT |
| `MinioNodeOffline` | 5 分钟平均离线节点数大于 0，持续 3 分钟 | WARN |
| `MinioDiskOffline` | 5 分钟平均离线磁盘数大于 0，持续 3 分钟 | WARN |
| `MinioErasureSetUnhealthy` | 任一纠删码集合总体健康值小于 1，持续 1 分钟 | CRIT |
| `MinioClusterCapacityHigh` | 可用容量使用率超过 90%，持续 15 分钟 | WARN |
{.full-width}

关键表达式使用 Metrics V3 指标名：

```promql
minio_up < 1

max by (cls) (
  avg_over_time(minio_cluster_health_nodes_offline_count{job="minio"}[5m])
) > 0

max by (cls) (
  avg_over_time(minio_cluster_health_drives_offline_count{job="minio"}[5m])
) > 0

min by (cls) (
  minio_cluster_erasure_set_overall_health{job="minio"}
  or (minio_cluster_erasure_set_overall_write_quorum{job="minio"} * 0)
) < 1

max by (cls) (
  1 - (
    (minio_cluster_health_capacity_usable_free_bytes{job="minio"}
     or (minio_cluster_health_capacity_usable_total_bytes{job="minio"} * 0))
    / minio_cluster_health_capacity_usable_total_bytes{job="minio"}
  )
) > 0.90
```

RustFS 的独立 HTTPS 就绪探测记录为 `rustfs_up`，不使用 `minio_up`。`files/victoria/rules/rustfs.yml` 另有十一条专用告警：

| 告警 | 关注点 |
|:---|:---|
| `RustfsServerDown` | HTTPS 就绪探测失败 |
| `RustfsTelemetryMissing` | 服务就绪，但 90 秒内没有新 OTLP 指标 |
| `RustfsRuntimeNotReady` | RustFS 内部就绪指标异常 |
| `RustfsServerOffline` | 集群成员离线 |
| `RustfsDriveOffline` | 磁盘离线 |
| `RustfsErasureSetUnhealthy` | 纠删码集合读或写不健康 |
| `RustfsCapacityHigh` | 可用容量使用率超过 85% |
| `RustfsHttpFailures` | HTTP 失败率持续过高 |
| `RustfsInternodeErrors` | 节点间操作错误率持续过高 |
| `RustfsScannerFailures` | 扫描器周期或存储桶扫描失败 |
| `RustfsTlsHandshakeFailures` | TLS 握手错误超过校准基线 |
{.full-width}

MinIO Metrics V3 与 RustFS 原生指标分别由各自规则处理，不会把另一种后端缺少的指标视为零值故障。

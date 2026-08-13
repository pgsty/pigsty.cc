---
title: 监控告警
weight: 3660
description: Pigsty 如何监控 Silo，包括 Metrics V3 指标入口、Grafana 面板和告警规则。
icon: fa-solid fa-binoculars
module: [MINIO]
categories: [参考]
---


## 管理界面

Silo 默认通过 [`minio_admin_port`](/docs/minio/param#minio_admin_port)（`9001`）提供管理界面，可直接访问 `https://<node-ip>:9001`。

部分配置模板还会通过 `m.pigsty` 暴露管理入口。登录凭证由 [`minio_access_key`](/docs/minio/param#minio_access_key) 与 [`minio_secret_key`](/docs/minio/param#minio_secret_key) 指定。

{{% alert title="HTTPS 与证书信任" color="info" %}}
对象存储默认使用 Pigsty CA 签发的 HTTPS 证书。浏览器和容器客户端必须信任该 CA；生产环境不要以忽略证书校验代替正确配置证书信任。
{{% /alert %}}


---------

## 采集链路

Silo 沿用 `job="minio"`、`cls`、`ins`、`ip`、`instance` 这组稳定身份标签，并使用 `flavor="silo"`：

| 后端   | 指标链路                                                          | 目标与标签                     |
|:-----|:--------------------------------------------------------------|:--------------------------|
| Silo | VictoriaMetrics 拉取 `https://<instance>:9000/minio/metrics/v3` | `job=minio`，`flavor=silo` |
{.full-width}

每个实例的 FileSD 目标写入 `/infra/targets/minio/<minio_cluster>-<minio_seq>.yml`。

Silo 只注册一个 Metrics V3 根端点。该端点同时提供集群、系统、API 与聚合用量指标；Pigsty 会丢弃 `bucket` 标签非空的样本，不再单独注册按桶和复制端点，以控制时序基数。


---------

## Grafana 面板

Pigsty 提供 **MinIO Overview / MinIO Instance** 两个兼容命名的面板，用于展示 Silo Metrics V3 指标、系统日志与实例状态。

[![minio-overview.jpg](/img/dashboard/minio-overview.jpg)](https://demo.pigsty.cc/d/minio-overview)

---------

## 告警规则

当前 `files/victoria/rules/minio.yml` 为 Silo 定义了五条告警：

| 告警                         | 条件摘要                     |  级别  |
|:---------------------------|:-------------------------|:----:|
| `MinioServerDown`          | `minio_up < 1` 持续 1 分钟   | CRIT |
| `MinioNodeOffline`         | 5 分钟平均离线节点数大于 0，持续 3 分钟  | WARN |
| `MinioDiskOffline`         | 5 分钟平均离线磁盘数大于 0，持续 3 分钟  | WARN |
| `MinioErasureSetUnhealthy` | 任一纠删码集合总体健康值小于 1，持续 1 分钟 | CRIT |
| `MinioClusterCapacityHigh` | 可用容量使用率超过 90%，持续 15 分钟   | WARN |
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

---
title: 监控告警
weight: 3660
description: 如何在 Pigsty 中监控 MinIO？如何使用 MinIO 本身的管控面板？有哪些告警规则值得关注？
icon: fa-solid fa-binoculars
module: [MINIO]
categories: [参考]
---


--------

## 内置控制台

MinIO 内置了一个相当不错的管控界面，默认您可以通过任意 MinIO 实例的管控端口 （[`minio_admin_port`](/docs/minio/param#minio_admin_port) ，默认为 `9001`），使用 HTTPS 访问此界面。

在大多数提供 MinIO 服务的配置模板中，MinIO 都会以 `m.pigsty` 的自定义服务对外暴露。在配置域名解析后，您可以通过 `https://m.pigsty` 访问 MinIO 管控界面。

使用 [`minio_access_key`](/docs/minio/param#minio_access_key) 和 [`minio_secret_key`](/docs/minio/param#minio_secret_key) 配置的管理员凭证登录（默认为 `minioadmin` / `S3User.MinIO`）。

{{% alert title="注意：HTTPS 与证书信任" color="info" %}}
MinIO 控制台需要 HTTPS 访问。如果您使用 Pigsty 自签名 CA，需要在浏览器中信任该 CA 证书，或者手动接受安全警告。
{{% /alert %}}



---------

## Pigsty监控

Pigsty 提供了两个与 [`MINIO`](/docs/minio) 模块有关的监控面板：

- [MinIO Overview](https://demo.pigsty.cc/d/minio-overview)：展示 MinIO 集群的整体监控指标，包括集群状态、存储使用量、请求速率等。
- [MinIO Instance](https://demo.pigsty.cc/d/minio-instance)：展示单个 MinIO 实例的监控指标详情，包括 CPU、内存、网络、磁盘等。

[![minio-overview.jpg](/img/dashboard/minio-overview.jpg)](https://demo.pigsty.cc/d/minio-overview)

MinIO 监控指标通过 MinIO 原生的 Prometheus 端点（`/minio/v2/metrics/cluster`）采集，默认由 Victoria Metrics 抓取并存储。




---------

## Pigsty告警

Pigsty 针对 MinIO 提供了以下三条告警规则，分别是：

- MinIO 宕机
- MinIO 节点离线
- MinIO 磁盘离线


```yaml
#==============================================================#
#                         Aliveness                            #
#==============================================================#
# MinIO server instance down
- alert: MinioServerDown
  expr: minio_up < 1
  for: 1m
  labels: { level: 0, severity: CRIT, category: minio }
  annotations:
    summary: "CRIT MinioServerDown {{ $labels.ins }}@{{ $labels.instance }}"
    description: |
      minio_up[ins={{ $labels.ins }}, instance={{ $labels.instance }}] = {{ $value }} < 1
      /ui/d/minio-overview

#==============================================================#
#                         Error                                #
#==============================================================#
# MinIO node offline triggers a p1 alert
- alert: MinioNodeOffline
  expr: avg_over_time(minio_cluster_nodes_offline_total{job="minio"}[5m]) > 0
  for: 3m
  labels: { level: 1, severity: WARN, category: minio }
  annotations:
    summary: "WARN MinioNodeOffline: {{ $labels.cls }} {{ $value }}"
    description: |
      minio_cluster_nodes_offline_total[cls={{ $labels.cls }}] = {{ $value }} > 0
      /ui/d/minio-overview?from=now-5m&to=now&var-cls={{$labels.cls}}

# MinIO disk offline triggers a p1 alert
- alert: MinioDiskOffline
  expr: avg_over_time(minio_cluster_disk_offline_total{job="minio"}[5m]) > 0
  for: 3m
  labels: { level: 1, severity: WARN, category: minio }
  annotations:
    summary: "WARN MinioDiskOffline: {{ $labels.cls }} {{ $value }}"
    description: |
      minio_cluster_disk_offline_total[cls={{ $labels.cls }}] = {{ $value }} > 0
      /ui/d/minio-overview?from=now-5m&to=now&var-cls={{$labels.cls}}
```

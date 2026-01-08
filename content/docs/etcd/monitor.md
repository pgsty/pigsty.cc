---
title: 监控告警
weight: 3450
description: etcd 监控面板，指标，以及告警规则。
icon: fa-solid fa-binoculars
module: [ETCD]
categories: [参考]
---


--------

## 监控面板

ETCD 模块提供了一个监控面板：Etcd Overview。


### ETCD Overview Dashboard

[ETCD Overview](https://demo.pigsty.cc/d/etcd-overview)：ETCD 集群概览

这个监控面板提供了 ETCD 状态的关键信息：最值得关注的是 ETCD Aliveness，它显示了 ETCD 集群整体的服务状态。

红色的条带标识着实例不可用的时间段，而底下蓝灰色的条带标识着整个集群处于不可用的时间段。

[![etcd-overview.jpg](/img/dashboard/etcd-overview.jpg)](https://demo.pigsty.cc/d/etcd-overview)




---------

## 告警规则

Pigsty 针对 Etcd 提供了以下五条预置告警规则，定义于 [`files/prometheus/rules/etcd.yml`](https://github.com/pgsty/pigsty/blob/main/files/prometheus/rules/etcd.yml)

- `EtcdServerDown`：Etcd 节点宕机，严重警报
- `EtcdNoLeader`：Etcd 集群没有领导者，严重警报
- `EtcdQuotaFull`：Etcd 配额使用超过 90%，警告
- `EtcdNetworkPeerRTSlow`：Etcd 网络时延缓慢，提醒
- `EtcdWalFsyncSlow`：Etcd 磁盘刷盘缓慢，提醒


```yaml
#==============================================================#
#                         Aliveness                            #
#==============================================================#
# etcd server instance down
- alert: EtcdServerDown
  expr: etcd_up < 1
  for: 1m
  labels: { level: 0, severity: CRIT, category: etcd }
  annotations:
    summary: "CRIT EtcdServerDown {{ $labels.ins }}@{{ $labels.instance }}"
    description: |
      etcd_up[ins={{ $labels.ins }}, instance={{ $labels.instance }}] = {{ $value }} < 1
      http://g.pigsty/d/etcd-overview

#==============================================================#
#                         Error                                #
#==============================================================#
# Etcd no Leader triggers a P0 alert immediately
# if dcs_failsafe mode is not enabled, this may lead to global outage
- alert: EtcdNoLeader
  expr: min(etcd_server_has_leader) by (cls) < 1
  for: 15s
  labels: { level: 0, severity: CRIT, category: etcd }
  annotations:
    summary: "CRIT EtcdNoLeader: {{ $labels.cls }} {{ $value }}"
    description: |
      etcd_server_has_leader[cls={{ $labels.cls }}] = {{ $value }} < 1
      http://g.pigsty/d/etcd-overview?from=now-5m&to=now&var-cls={{$labels.cls}}

#==============================================================#
#                        Saturation                            #
#==============================================================#
- alert: EtcdQuotaFull
  expr: etcd:cls:quota_usage > 0.90
  for: 1m
  labels: { level: 1, severity: WARN, category: etcd }
  annotations:
    summary: "WARN EtcdQuotaFull: {{ $labels.cls }}"
    description: |
      etcd:cls:quota_usage[cls={{ $labels.cls }}] = {{ $value | printf "%.3f" }} > 90%

#==============================================================#
#                         Latency                              #
#==============================================================#
# etcd network peer rt p95 > 200ms for 1m
- alert: EtcdNetworkPeerRTSlow
  expr: etcd:ins:network_peer_rt_p95_5m > 0.200
  for: 1m
  labels: { level: 2, severity: INFO, category: etcd }
  annotations:
    summary: "INFO EtcdNetworkPeerRTSlow: {{ $labels.cls }} {{ $labels.ins }}"
    description: |
      etcd:ins:network_peer_rt_p95_5m[cls={{ $labels.cls }}, ins={{ $labels.ins }}] = {{ $value }} > 200ms
      http://g.pigsty/d/etcd-instance?from=now-10m&to=now&var-cls={{ $labels.cls }}

# Etcd wal fsync rt p95 > 50ms
- alert: EtcdWalFsyncSlow
  expr: etcd:ins:wal_fsync_rt_p95_5m > 0.050
  for: 1m
  labels: { level: 2, severity: INFO, category: etcd }
  annotations:
    summary: "INFO EtcdWalFsyncSlow: {{ $labels.cls }} {{ $labels.ins }}"
    description: |
      etcd:ins:wal_fsync_rt_p95_5m[cls={{ $labels.cls }}, ins={{ $labels.ins }}] = {{ $value }} > 50ms
      http://g.pigsty/d/etcd-instance?from=now-10m&to=now&var-cls={{ $labels.cls }}
```
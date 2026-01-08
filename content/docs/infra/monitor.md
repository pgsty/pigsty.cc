---
title: 监控告警
weight: 3050
description: 如何在 Pigsty 中对基础设施进行自监控？
icon: fa-solid fa-binoculars
categories: [参考]
---


本文介绍 Pigsty 中 INFRA 模块的监控面板与告警规则。


----------------

## 监控面板

Pigsty 针对 Infra 模块提供了以下监控面板：

| 面板 | 描述 |
|:-----|:-----|
| [Pigsty Home](https://demo.pigsty.cc/d/pigsty) | Pigsty 监控系统主页 |
| [INFRA Overview](https://demo.pigsty.cc/d/infra-overview) | Pigsty 基础设施自监控概览 |
| [Nginx Instance](https://demo.pigsty.cc/d/nginx-instance) | Nginx 监控指标与日志 |
| [Grafana Instance](https://demo.pigsty.cc/d/grafana-instance) | Grafana 监控指标与日志 |
| [VictoriaMetrics Instance](https://demo.pigsty.cc/d/vmetrics-instance) | VictoriaMetrics 抓取/查询状态 |
| [VMAlert Instance](https://demo.pigsty.cc/d/vmalert-instance) | 告警规则执行情况 |
| [Alertmanager Instance](https://demo.pigsty.cc/d/alertmanager-instance) | 告警聚合与通知 |
| [VictoriaLogs Instance](https://demo.pigsty.cc/d/vlogs-instance) | 日志写入、查询与索引 |
| [Logs Instance](https://demo.pigsty.cc/d/logs-instance) | 查阅单个节点上的日志信息 |
| [VictoriaTraces Instance](https://demo.pigsty.cc/d/vtraces-instance) | Trace 存储与查询 |
| [Inventory CMDB](https://demo.pigsty.cc/d/inventory-cmdb) | CMDB 可视化 |
| [ETCD Overview](https://demo.pigsty.cc/d/etcd-overview) | etcd 集群监控 |


----------------

## 告警规则

Pigsty 针对 INFRA 模块提供了以下两条告警规则：

| 告警规则 | 描述 |
|:---------|:-----|
| `InfraDown` | 基础设施组件出现宕机 |
| `AgentDown` | 监控 Agent 代理出现宕机 |

可在 [`files/victoria/rules/infra.yml`](https://github.com/pgsty/pigsty/blob/main/files/victoria/rules/infra.yml) 中修改或添加新的基础设施告警规则。


### 告警规则配置

```yaml
################################################################
#                Infrastructure Alert Rules                    #
################################################################
- name: infra-alert
  rules:

    #==============================================================#
    #                       Infra Aliveness                        #
    #==============================================================#
    # infra components (victoria,grafana) down for 1m triggers a P1 alert
    - alert: InfraDown
      expr: infra_up < 1
      for: 1m
      labels: { level: 0, severity: CRIT, category: infra }
      annotations:
        summary: "CRIT InfraDown {{ $labels.type }}@{{ $labels.instance }}"
        description: |
          infra_up[type={{ $labels.type }}, instance={{ $labels.instance }}] = {{ $value  | printf "%.2f" }} < 1

    #==============================================================#
    #                       Agent Aliveness                        #
    #==============================================================#

    # agent aliveness are determined directly by exporter aliveness
    # including: node_exporter, pg_exporter, pgbouncer_exporter, haproxy_exporter
    - alert: AgentDown
      expr: agent_up < 1
      for: 1m
      labels: { level: 0, severity: CRIT, category: infra }
      annotations:
        summary: 'CRIT AgentDown {{ $labels.ins }}@{{ $labels.instance }}'
        description: |
          agent_up[ins={{ $labels.ins }}, instance={{ $labels.instance }}] = {{ $value  | printf "%.2f" }} < 1
```

---
title: infra
weight: 780
description: 仅安装可观测性基础设施，不包含 PostgreSQL 与 etcd 的专用配置模板
icon: fa-solid fa-tower-observation
categories: [参考]
---

`infra` 配置模板仅部署 Pigsty 的可观测性基础设施组件（VictoriaMetrics/Grafana/Loki/Nginx 等），不包含 PostgreSQL 与 etcd。

适用于需要独立监控栈的场景，例如监控外部 PostgreSQL/RDS 实例或其他数据源。


--------

## 配置概览

- 配置名称： `infra`
- 节点数量： 单节点或多节点
- 配置说明：仅安装可观测性基础设施，不包含 PostgreSQL 与 etcd
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c infra [-i <primary_ip>]
./infra.yml    # 仅执行 infra 剧本
```


--------

## 配置内容

源文件地址：[`pigsty/conf/infra.yml`](https://github.com/pgsty/pigsty/blob/main/conf/infra.yml)

{{< readfile file="yaml/infra.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`infra` 模板是 Pigsty 的 **纯监控栈配置**，专为独立部署可观测性基础设施设计。

**适用场景**：
- 监控外部 PostgreSQL 实例（RDS、自建等）
- 需要独立的监控/告警平台
- 已有 PostgreSQL 集群，仅需添加监控
- 作为多集群监控的中央控制台

**包含组件**：
- **VictoriaMetrics**：时序数据库，存储监控指标
- **VictoriaLogs**：日志聚合系统
- **VictoriaTraces**：链路追踪系统
- **Grafana**：可视化仪表盘
- **Alertmanager**：告警管理
- **Nginx**：反向代理和 Web 入口

**不包含组件**：
- PostgreSQL 数据库集群
- etcd 分布式协调服务
- MinIO 对象存储

**监控外部实例**：
配置完成后，可通过 `pgsql-monitor.yml` 剧本添加外部 PostgreSQL 实例的监控：

```yaml
pg_exporters:
  20001: { pg_cluster: pg-foo, pg_seq: 1, pg_host: 10.10.10.100 }
  20002: { pg_cluster: pg-bar, pg_seq: 1, pg_host: 10.10.10.101 }
```

**注意事项**：
- 此模板不会安装任何数据库
- 如需完整功能，请使用 [`meta`](/docs/conf/meta/) 或 [`rich`](/docs/conf/rich/) 模板
- 可根据需要添加多个 infra 节点实现高可用


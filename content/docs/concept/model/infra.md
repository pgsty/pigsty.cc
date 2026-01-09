---
title: INFRA 集群模型
weight: 1105
description: 介绍 Pigsty 中 INFRA 基础设施节点的实体-关系模型，组件构成与命名规范。
icon: fa-solid fa-bank
module: [INFRA]
categories: [概念]
---


INFRA 模块在 Pigsty 中承担着特殊的角色：它不是传统意义上的"集群"，而是由一组 **基础设施节点** 构成的管理中枢，为整个 Pigsty 部署提供核心服务。
每个 INFRA 节点都是一个**自治**的基础设施服务单元，运行着 Nginx、Grafana、VictoriaMetrics 等核心组件，共同为纳管的数据库集群提供可观测性与管理能力。

在 Pigsty 的 INFRA 模块中有两种核心实体：

- **节点**（Node）：运行基础设施组件的服务器，可以是裸机、VM、容器或 Pod。
- **组件**（Component）：在节点上运行的各类基础设施服务，如 Nginx、Grafana、VictoriaMetrics 等。

INFRA 节点通常承担管理节点（Admin Node）的角色，是 Pigsty 的控制平面所在。



----------------

## 组件构成

每个 INFRA 节点上运行着以下核心组件：

| 组件                                                                 | 端口       | 说明                              |
|:-------------------------------------------------------------------|:---------|:--------------------------------|
| [**Nginx**](/docs/concept/arch/infra#nginx)                        | `80/443` | Web 服务门户，本地软件仓库，统一反向代理入口        |
| [**Grafana**](/docs/concept/arch/infra#grafana)                    | `3000`   | 可视化平台，监控大屏，巡检与数据应用              |
| [**VictoriaMetrics**](/docs/concept/arch/infra#victoriametrics)    | `8428`   | 时序数据库，兼容 Prometheus API         |
| [**VictoriaLogs**](/docs/concept/arch/infra#victorialogs)          | `9428`   | 日志数据库，接收 Vector 推送的结构化日志        |
| [**VictoriaTraces**](/docs/concept/arch/infra#victoriatraces)      | `10428`  | 链路追踪存储，用于慢 SQL / 请求追踪           |
| [**VMAlert**](/docs/concept/arch/infra#vmalert)                    | `8880`   | 告警规则评估器，基于 VictoriaMetrics 触发告警 |
| [**Alertmanager**](/docs/concept/arch/infra#alertmanager)          | `9059`   | 告警聚合与分发                         |
| [**Blackbox Exporter**](/docs/concept/arch/infra#blackboxexporter) | `9115`   | ICMP/TCP/HTTP 黑盒探测              |
| [**DNSMASQ**](/docs/concept/arch/infra#dnsmasq)                    | `53`     | DNS 服务器，提供内部域名解析                |
| [**Chronyd**](/docs/concept/arch/infra#chronyd)                    | `123`    | NTP 时间服务器                       |
{.full-width}

这些组件共同构成了 Pigsty 的可观测性基础设施。



----------------

## 具体样例

让我们来看一个具体的例子，以双节点的 INFRA 部署为例：

```yaml
infra:
  hosts:
    10.10.10.10: { infra_seq: 1 }
    10.10.10.11: { infra_seq: 2 }
```

上面的配置片段定义了一个双节点的 INFRA 部署：

|      <span class="text-secondary">**分组**</span>         | <span class="text-secondary">**Group**</span>   |
|:-------------------------------------------------------:|-------------------------------------------------|
|                       **`infra`**                       | INFRA 基础设施节点分组                                  |
|         <span class="text-danger">**节点**</span>         | <span class="text-danger">**Nodes**</span>      |
|                      **`infra-1`**                      | `10.10.10.10`  1 号 INFRA 节点                     |
|                      **`infra-2`**                      | `10.10.10.11`  2 号 INFRA 节点                     |
{.full-width}

在生产环境中，建议部署至少两个 INFRA 节点，以实现基础设施组件的冗余。



----------------

## 身份参数

Pigsty 使用 [**`INFRA_ID`**](/docs/infra/param#infra_id) 参数组为 INFRA 模块的每个实体赋予确定的身份。以下一项为必选参数：

| 参数                                             |  类型   | 级别 | 说明                | 形式                  |
|:-----------------------------------------------|:-----:|:--:|:------------------|:--------------------|
| [**`infra_seq`**](/docs/infra/param#infra_seq) | `int` | 节点 | INFRA 节点序号，必选身份参数 | 自然数，从 1 开始分配，分组内不重复 |
{.full-width}

只要在节点层面分配了节点序号，Pigsty 就能自动根据规则为每个实体生成唯一标识符。

| 实体     | 生成规则                    | 示例                  |
|--------|:------------------------|:--------------------|
| **节点** | `infra-{{ infra_seq }}` | `infra-1`，`infra-2` |
{.full-width}

INFRA 模块会为节点赋予 `infra-N` 形式的标识，用于监控系统中区分多个基础设施节点。
但这并不改变节点本身的主机名或系统身份，节点仍然使用其原有的主机名或 IP 地址进行标识。



----------------

## 服务门户

INFRA 节点通过 Nginx 提供统一的 Web 服务入口。[**`infra_portal`**](/docs/infra/param#infra_portal) 参数定义了通过 Nginx 暴露的服务列表：

```yaml
infra_portal:
  home         : { domain: i.pigsty }
  grafana      : { domain: g.pigsty, endpoint: "${admin_ip}:3000", websocket: true }
  prometheus   : { domain: p.pigsty, endpoint: "${admin_ip}:8428" }   # VMUI
  alertmanager : { domain: a.pigsty, endpoint: "${admin_ip}:9059" }
```

用户通过访问不同的域名，Nginx 会将请求路由到对应的后端服务：

| 域名            | 服务              | 说明              |
|:--------------|:----------------|:----------------|
| `i.pigsty`    | Home            | Pigsty 首页       |
| `g.pigsty`    | Grafana         | 监控可视化平台         |
| `p.pigsty`    | VictoriaMetrics | 时序数据库 Web UI    |
| `a.pigsty`    | Alertmanager    | 告警管理界面          |
{.full-width}

建议通过域名访问 Pigsty 服务，而不是直接使用 IP + 端口的方式。


----------------

## 部署规模

INFRA 节点的数量取决于部署规模和高可用需求：

| 部署规模  | INFRA 节点数 | 说明                     |
|:------|:----------|:-----------------------|
| 开发测试  | 1         | 单节点部署，所有组件在同一节点        |
| 小规模生产 | 1-2       | 单节点或双节点，可与其他服务共用节点     |
| 中规模生产 | 2-3       | 独立的 INFRA 节点，组件冗余部署    |
| 大规模生产 | 3+        | 多 INFRA 节点，可根据组件分离部署   |
{.full-width}

[**单机部署**](/docs/setup/install) 时，INFRA 组件与 PGSQL、ETCD 等模块共用同一个节点。
通常在小规模部署中，INFRA 节点通常还承担着 “[**管理节点**](/docs/concept/arch/node#admin节点)” / “备用管理节点”，以及本地软件仓库（`/www/pigsty`）的角色。
在更大规模的部署中，这些职责可以剥离至专用节点。


----------------

## 监控标签体系

Pigsty 的监控系统会采集 INFRA 组件自身的指标。与数据库模块不同，INFRA 模块的每个**组件**都被视为独立的监控对象，通过 `cls`（类）标签区分不同组件类型。

| 标签    | 说明                                | 示例              |
|:------|:----------------------------------|:----------------|
| `cls` | 组件类型，每种组件各自构成一个"类"                | `nginx`         |
| `ins` | 实例名，格式为 `{组件类型}-{infra_seq}`      | `nginx-1`       |
| `ip`  | 运行该组件的 INFRA 节点 IP 地址             | `10.10.10.10`   |
| `job` | VictoriaMetrics 采集任务名，固定为 `infra` | `infra`         |
{.full-width}

以双节点 INFRA 部署（`infra_seq: 1` 和 `infra_seq: 2`）为例，各组件的监控标签如下：

| 组件                  | `cls`          | `ins` 示例                          | 端口      |
|:--------------------|:---------------|:----------------------------------|:--------|
| **Nginx**           | `nginx`        | `nginx-1`，`nginx-2`               | `9113`  |
| **Grafana**         | `grafana`      | `grafana-1`，`grafana-2`           | `3000`  |
| **VictoriaMetrics** | `vmetrics`     | `vmetrics-1`，`vmetrics-2`         | `8428`  |
| **VictoriaLogs**    | `vlogs`        | `vlogs-1`，`vlogs-2`               | `9428`  |
| **VictoriaTraces**  | `vtraces`      | `vtraces-1`，`vtraces-2`           | `10428` |
| **VMAlert**         | `vmalert`      | `vmalert-1`，`vmalert-2`           | `8880`  |
| **Alertmanager**    | `alertmanager` | `alertmanager-1`，`alertmanager-2` | `9059`  |
| **Blackbox**        | `blackbox`     | `blackbox-1`，`blackbox-2`         | `9115`  |
{.full-width}

所有 INFRA 组件的监控指标都使用统一的 `job="infra"` 标签，通过 `cls` 标签区分组件类型：

```text
nginx_up{cls="nginx", ins="nginx-1", ip="10.10.10.10", job="infra"}
grafana_info{cls="grafana", ins="grafana-1", ip="10.10.10.10", job="infra"}
vm_app_version{cls="vmetrics", ins="vmetrics-1", ip="10.10.10.10", job="infra"}
vlogs_rows_ingested_total{cls="vlogs", ins="vlogs-1", ip="10.10.10.10", job="infra"}
alertmanager_alerts{cls="alertmanager", ins="alertmanager-1", ip="10.10.10.10", job="infra"}
```



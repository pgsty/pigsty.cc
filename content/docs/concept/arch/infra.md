---
title: INFRA 架构
weight: 202
description: Pigsty 中基础设施模块的架构，组件与功能详解。
icon: fas fa-bank
module: [INFRA]
categories: [概念]
---

运行生产级别高可用 PostgreSQL 集群，通常需要一套完善的基础设施服务（底座）来支撑，例如监控告警、日志收集、时间同步、DNS 解析，本地软件仓库等。
Pigsty 提供了 [**INFRA 模块**](/docs/infra) 来解决这个问题 —— 这是一个 **可选模块**，但我们强烈推荐启用它。

--------

## 概览

下图是 [**单机部署**](/docs/setup/install) 时的架构示意图，图中右半部分即为 [**INFRA 模块**](/docs/infra) 所包含的组件，其中包括：


| 组件                                        | 种类     | 描述                                                                  |
|:------------------------------------------|--------|:--------------------------------------------------------------------|
| [**Nginx**](#nginx)                       | Web服务器 | [**Web 界面**](/docs/setup/webui) 的统一入口，[**本地软件仓库**](#repo)，内部服务的反向代理 |
| [**Repo**](#repo)                         | 软件仓库   | APT / DNF 仓库，下载有所有部署需要的 RPM/DEB 包及其依赖                               |
| [**Grafana**](#Grafana)                   | 可视化平台  | 呈现监控指标、日志与链路追踪，承载监控大屏、巡检报表以及自定义数据应用。                                |
| [**VictoriaMetrics**](#VictoriaMetrics)   | 时序数据库  | 拉取全部监控指标，兼容 Prometheus API，并通过 VMUI 提供查询界面。                         |
| [**VictoriaLogs**](#VictoriaLogs)         | 日志平台   | 集中收集存储日志，所有节点默认运行 Vector，将系统日志与数据库日志推送到此。                           |
| [**VictoriaTraces**](#VictoriaTraces)     | 链路追踪   | 收集慢 SQL、服务链路等追踪数据。                                                  |
| [**VMAlert**](#VMAlert)                   | 告警计算   | 评估告警规则，将事件推送至 Alertmanager。                                         |
| [**AlertManager**](#AlertManager)         | 告警管理   | 聚合告警事件，分发告警通知，支持邮件、Webhook 等渠道。                                     |
| [**BlackboxExporter**](#BlackboxExporter) | 黑盒探测   | 探测各个 IP/VIP/URL 的可达性。                                               |
| [**DNSMASQ**](#DNSMASQ)                   | DNS解析  | 提供 DNS 解析服务，解析 Pigsty 内部使用到的域名。【可选】                                 |
| [**Chronyd**](#Chronyd)                   | 时间同步   | 提供 NTP 时间同步服务，确保所有节点时间一致。 【可选】                                      |
| [**CA**](/docs/concept/sec/ca)            | 证书签发   | 签发环境内的加密证书                                                          |
| [**Ansible**](/docs/setup/playbook)       | 发起管理   | 批量，声明式，无 Agent 管理大量服务器的工具                                           |



[![pigsty-arch](/img/pigsty/arch.png)](/docs/infra/)

----------------

## Nginx

**Nginx** 是 Pigsty 所有 WebUI 类服务的访问入口，默认使用 [**`80`**](/docs/infra/param#nginx_port) / [**`443`**](/docs/infra/param#nginx_ssl_port) 端口对外提供 HTTP / HTTPS 服务。[**在线演示**](https://demo.pigsty.cc/)


|           IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）| 公开演示 |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10`**](http://10.10.10.10) | [**`http://i.pigsty`**](http://i.pigsty/zh) | [**`https://i.pigsty`**](https://i.pigsty/zh) | [**`https://demo.pigsty.cc`**](https://demo.pigsty.cc/zh) |
{.full-width}


带有 WebUI 的基础设施组件可以通过 **Nginx** 统一对外暴露服务，例如 **Grafana**、**VictoriaMetrics**（VMUI）、**AlertManager**，
以及 **HAProxy** 控制台，此外，**本地软件仓库** 等静态文件资源也通过 **Nginx** 对内外提供服务。

**Nginx** 会根据 [**`infra_portal`**](/docs/infra/param/#infra_portal) 中的定义，配置本地 Web 服务器或反向代理服务器。

```yaml
infra_portal:
  home : { domain: i.pigsty }
```

默认情况下将对外暴露 Pigsty 的管理首页：`i.pigsty`，上面不同的端点挂载代理了不同的组件：

| 端点           | 组件                                         | 原生端口     | 备注                 | 公开演示                                                           |
|:-------------|:-------------------------------------------|:---------|:-------------------|----------------------------------------------------------------|
| `/`          | [**Nginx**](/docs/infra/)                  | `80/443` | 首页、本地仓库、文件服务       | [`demo.pigsty.cc/zh/`](https://demo.pigsty.cc/zh/)             |
| `/ui/`       | [**Grafana**](#grafana)                    | `3000`   | Grafana 仪表盘入口      | [`demo.pigsty.cc/ui/`](https://demo.pigsty.cc/ui/)             |
| `/vmetrics/` | [**VictoriaMetrics**](/docs/infra/)        | `8428`   | 时序数据库 Web UI       | [`demo.pigsty.cc/vmetrics/`](https://demo.pigsty.cc/vmetrics/) |
| `/vlogs/`    | [**VictoriaLogs**](/docs/infra/)           | `9428`   | 日志数据库 Web UI       | [`demo.pigsty.cc/vlogs/`](https://demo.pigsty.cc/vlogs/)       |
| `/vtraces/`  | [**VictoriaTraces**](/docs/infra/)         | `10428`  | 链路追踪 Web UI        | [`demo.pigsty.cc/vtraces/`](https://demo.pigsty.cc/vtraces/)   |
| `/vmalert/`  | [**VMAlert**](/docs/infra/)                | `8880`   | 告警规则管理             | [`demo.pigsty.cc/vmalert/`](https://demo.pigsty.cc/vmalert/)   |
| `/alertmgr/` | [**AlertManager**](/docs/infra/)           | `9059`   | 告警管理 Web UI        | [`demo.pigsty.cc/alertmgr/`](https://demo.pigsty.cc/alertmgr/) |
| `/blackbox/` | [**Blackbox**](/docs/infra/)               | `9115`   | 黑盒探测器              |                                                                |
{.full-width}

[![](/img/pigsty/home.png)](https://demo.pigsty.cc/zh)

Pigsty 允许对 **Nginx** 进行丰富的定制，将其作为本地文件服务器，或者反向代理服务器，配置自签名或者真正的 HTTPS 证书。

更多信息，请参阅：[**教程：Nginx：向外代理暴露Web服务**](/docs/infra/admin/portal/) 与 [**教程：Certbot：申请与更新HTTPS证书**](/docs/infra/admin/cert)




----------------

## Repo

Pigsty 会在安装时，默认在 Infra 节点上创建一个 **本地软件仓库**，以加速后续软件安装。[**在线演示**](https://demo.pigsty.cc/pigsty/)

该软件仓库默认位于 [**`/www/pigsty`**](/docs/infra/param#repo_home) 目录，
由 **Nginx** 对外提供服务，挂载在 `/pigsty` 路径上：

|           IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）| 公开演示 |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10/pigsty`**](http://10.10.10.10/pigsty) | [**`http://i.pigsty/pigsty`**](http://i.pigsty/pigsty) | [**`https://i.pigsty/pigsty`**](https://i.pigsty/pigsty) | [**`https://demo.pigsty.cc/pigsty`**](https://demo.pigsty.cc/pigsty) |
{.full-width}


Pigsty 支持 [**离线安装**](/docs/setup/offline)，实质上是将做好的本地软件仓库提前复制到目标环境中。
当 Pigsty 执行生产部署，需要创建本地软件仓库时，如果发现本地已经存在 **`/www/pigsty/repo_complete`** 标记文件，则会跳过从上游下载软件包的步骤，直接使用已有的软件包，避免联网下载。

更多信息，请参阅：[**配置：INFRA - REPO**](/docs/infra/param/#repo)



------

## Grafana

**Grafana** 是 Pigsty 监控系统的核心组件，用于可视化展示监控指标、日志与各种信息。[**在线演示**](https://demo.pigsty.cc/ui/)

**Grafana** 默认监听 `3000` 端口，挂载于 **Nginx** `/ui` 路径点上代理访问：

|          IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）| 公开演示 |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10/ui`**](http://10.10.10.10/ui) | [**`http://i.pigsty/ui`**](http://i.pigsty/ui) | [**`https://i.pigsty/ui`**](https://i.pigsty/ui) | [**`https://demo.pigsty.cc/ui`**](https://demo.pigsty.cc/ui)  |
{.full-width}

Pigsty 预置了基于 **VictoriaMetrics** / **Logs** / **Traces** 的大量监控面板，并通过 URL 跳转实现一键下钻上卷，帮助快速定位故障。

**Grafana** 亦可作为低代码可视化平台使用，因此默认安装 **ECharts**、victoriametrics-datasource、victorialogs-datasource 等插件，
同时将 **Vector** / **Victoria** 数据源统一注册为 `vmetrics-*`、`vlogs-*`、`vtraces-*`，方便扩展自定义仪表板。

更多信息请参阅：[**配置：INFRA - GRAFANA**](/docs/infra/param/#grafana)。



----------------

## VictoriaMetrics

**VictoriaMetrics** 是 Pigsty 的时序数据库，负责拉取并存储所有监控指标。[**在线演示**](https://demo.pigsty.cc/vmetrics/)

默认监听 `8428` 端口，挂载于 **Nginx** `/vmetrics` 路径上，亦可通过 `p.pigsty` 域名直接访问：

|          IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）| 公开演示 |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10/vmetrics`**](http://10.10.10.10/vmetrics) | [**`http://p.pigsty`**](http://p.pigsty) | [**`https://i.pigsty/vmetrics`**](https://i.pigsty/vmetrics) | [**`https://demo.pigsty.cc/vmetrics`**](https://demo.pigsty.cc/vmetrics)  |
{.full-width}

**VictoriaMetrics** 完全兼容 **Prometheus** API，支持 PromQL 查询、远程读写协议以及 Alertmanager API。
内置的 **VMUI** 提供即席查询界面，可直接探索指标数据，也可作为 **Grafana** 的数据源使用。

更多信息请参阅：[**配置：INFRA - VICTORIA**](/docs/infra/param/#victoria)


----------------

## VictoriaLogs

**VictoriaLogs** 是 Pigsty 的日志平台，集中存储来自所有节点的结构化日志。[**在线演示**](https://demo.pigsty.cc/vlogs/)

默认监听 `9428` 端口，挂载于 **Nginx** `/vlogs` 路径上：

|          IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）| 公开演示 |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10/vlogs`**](http://10.10.10.10/vlogs) | [**`http://i.pigsty/vlogs`**](http://i.pigsty/vlogs) | [**`https://i.pigsty/vlogs`**](https://i.pigsty/vlogs) | [**`https://demo.pigsty.cc/vlogs`**](https://demo.pigsty.cc/vlogs)  |
{.full-width}

所有纳管节点默认运行 **Vector** Agent，负责收集系统日志、PostgreSQL 日志、Patroni 日志、Pgbouncer 日志等，结构化处理后推送至 **VictoriaLogs**。
内置 Web UI 支持日志检索与过滤，也可配合 **Grafana** 的 victorialogs-datasource 插件进行可视化分析。

更多信息请参阅：[**配置：INFRA - VICTORIA**](/docs/infra/param/#victoria)


----------------

## VictoriaTraces

**VictoriaTraces** 用于收集链路追踪数据与慢 SQL 记录。[**在线演示**](https://demo.pigsty.cc/vtraces/)

默认监听 `10428` 端口，挂载于 **Nginx** `/vtraces` 路径上：

|          IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）| 公开演示 |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10/vtraces`**](http://10.10.10.10/vtraces) | [**`http://i.pigsty/vtraces`**](http://i.pigsty/vtraces) | [**`https://i.pigsty/vtraces`**](https://i.pigsty/vtraces) | [**`https://demo.pigsty.cc/vtraces`**](https://demo.pigsty.cc/vtraces)  |
{.full-width}

**VictoriaTraces** 提供 **Jaeger** 兼容接口，可用于分析服务调用链路与数据库慢查询。
结合 **Grafana** 面板，能够快速定位性能瓶颈，追溯问题根因。

更多信息请参阅：[**配置：INFRA - VICTORIA**](/docs/infra/param/#victoria)


----------------

## VMAlert

**VMAlert** 是告警规则计算引擎，负责评估告警规则并将触发的事件推送至 **Alertmanager**。[**在线演示**](https://demo.pigsty.cc/vmalert/)

默认监听 `8880` 端口，挂载于 **Nginx** `/vmalert` 路径上：

|          IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）| 公开演示 |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10/vmalert`**](http://10.10.10.10/vmalert) | [**`http://i.pigsty/vmalert`**](http://i.pigsty/vmalert) | [**`https://i.pigsty/vmalert`**](https://i.pigsty/vmalert) | [**`https://demo.pigsty.cc/vmalert`**](https://demo.pigsty.cc/vmalert)  |
{.full-width}

**VMAlert** 从 **VictoriaMetrics** 读取指标数据，周期性执行告警规则评估。
Pigsty 预置了 PGSQL、NODE、REDIS 等模块的告警规则，覆盖常见故障场景，开箱即用。

更多信息请参阅：[**配置：INFRA - PROMETHEUS**](/docs/infra/param/#prometheus)


----------------

## AlertManager

**AlertManager** 负责告警事件的聚合、去重、分组与分发。[**在线演示**](https://demo.pigsty.cc/alertmgr/)

默认监听 `9059` 端口，挂载于 **Nginx** `/alertmgr` 路径上，亦可通过 `a.pigsty` 域名直接访问：

|          IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）| 公开演示 |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10/alertmgr`**](http://10.10.10.10/alertmgr) | [**`http://a.pigsty`**](http://a.pigsty) | [**`https://i.pigsty/alertmgr`**](https://i.pigsty/alertmgr) | [**`https://demo.pigsty.cc/alertmgr`**](https://demo.pigsty.cc/alertmgr)  |
{.full-width}

**AlertManager** 支持多种通知渠道：邮件、Webhook、Slack、PagerDuty、企业微信等。
通过配置告警路由规则，可实现按严重程度、模块类型进行差异化分发，支持静默、抑制等高级功能。

更多信息请参阅：[**配置：INFRA - PROMETHEUS**](/docs/infra/param/#prometheus)


----------------

## BlackboxExporter

**Blackbox Exporter** 用于主动探测目标的可达性，实现黑盒监控。

默认监听 `9115` 端口，挂载于 **Nginx** `/blackbox` 路径上：

|          IP访问（替换）           |     域名（HTTP）      | 域名（HTTPS）|
|:----------------------:|:-----------:|:---------:|:-----------------------:|
| [**`http://10.10.10.10/blackbox`**](http://10.10.10.10/blackbox) | [**`http://i.pigsty/blackbox`**](http://i.pigsty/blackbox) | [**`https://i.pigsty/blackbox`**](https://i.pigsty/blackbox) |
{.full-width}

支持 ICMP Ping、TCP 端口、HTTP/HTTPS 端点等多种探测方式。
可用于监控 VIP 可达性、服务端口存活、外部依赖健康状态等场景，是判断故障影响范围的重要手段。

更多信息请参阅：[**配置：INFRA - PROMETHEUS**](/docs/infra/param/#prometheus)


----------------

## Ansible

**Ansible** 是 Pigsty 的核心编排工具，所有部署、配置、管理操作均通过 Ansible Playbook 完成。

Pigsty 在安装时会自动在管理节点（Infra 节点）上安装 **Ansible**。
它采用声明式配置风格与幂等剧本设计：同一剧本可重复执行，系统会自动收敛至期望状态，无需担心副作用。

**Ansible** 的核心优势：
- **无 Agent**：通过 SSH 远程执行，无需在目标节点安装额外软件。
- **声明式**：描述期望状态，而非执行步骤，配置即文档。
- **幂等性**：多次执行结果一致，支持部分失败后重试。

更多信息请参阅：[**剧本：Pigsty Playbook**](/docs/setup/playbook)


----------------

## DNSMASQ

**DNSMASQ** 提供环境内的 DNS 解析服务，将 Pigsty 内部使用的域名解析到对应 IP 地址。

请注意，DNS 是完全可选的模块，Pigsty 本身不依赖 DNS 即可正常运行。

默认监听 `53` 端口（UDP/TCP），为环境内所有节点提供 DNS 解析：

| 协议      | 端口   | 配置文件目录          |
|:--------|:-----|:----------------|
| UDP/TCP | `53` | `/infra/hosts/` |

其他模块在部署时会自动将域名注册到 INFRA 节点的 **DNSMASQ** 服务中，例如：

客户端节点可将 INFRA 节点配置为 DNS 服务器，即可通过域名访问各服务，无需记忆 IP 地址。

更多信息请参阅：[**配置：INFRA - DNS**](/docs/infra/param/#dns) 与 [**教程：DNS：配置域名解析**](/docs/infra/admin/domain)


----------------

## Chronyd

**Chronyd** 提供 NTP 时间同步服务，确保环境内所有节点时钟一致。

默认监听 `123` 端口（UDP），作为环境内的时间源：

| 协议   | 端口    | 说明              |
|:-----|:------|:----------------|
| UDP  | `123` | NTP 时间同步服务      |

时间同步对分布式系统至关重要：日志排查需要时间戳对齐，证书校验依赖时钟准确，**PostgreSQL** 流复制也对时钟偏移敏感。
在隔离网络环境中，INFRA 节点可作为内部 NTP 服务器，其他节点同步至此。

更多信息请参阅：[**配置：NODE - NTP**](/docs/node/param/#node_time)


----------------

## 节点与Infra的关系



----------------

## 节点关系

普通的节点，会通过 [**`admin_ip`**](/docs/infra/param/#admin_ip) 参数来引用某个 [**INFRA节点**](#infra节点) 作为它们的基础设施提供者。

例如，当你配置了全局的 `admin_ip = 10.10.10.10`，那么通常意味着所有节点都会使用这个 IP 上的基础设施服务。

以下是引用 `${admin_ip}` 的配置参数列表

| 参数                                                                       |             模块             | 默认值                             | 说明             |
|:-------------------------------------------------------------------------|:--------------------------:|---------------------------------|----------------|
| [**`repo_endpoint`**](/docs/infra/param/#repo_endpoint)                  | [**`INFRA`**](/docs/infra) | `http://${admin_ip}:80`         | 软件仓库访问地址       |
| [**`repo_upstream`**](/docs/infra/param/#repo_upstream)`.baseurl`        | [**`INFRA`**](/docs/infra) | `http://${admin_ip}/pigsty`     | 本地软件源 baseurl  |
| [**`infra_portal`**](/docs/infra/param/#infra_portal)`.endpoint`         | [**`INFRA`**](/docs/infra) | `${admin_ip}:<port>`            | Nginx 反向代理后端地址 |
| [**`dns_records`**](/docs/infra/param/#dns_records)                      | [**`INFRA`**](/docs/infra) | `["${admin_ip} i.pigsty", ...]` | DNS 解析记录       |
| [**`node_default_etc_hosts`**](/docs/node/param/#node_default_etc_hosts) |  [**`NODE`**](/docs/node)  | `["${admin_ip} i.pigsty"]`      | 默认静态 DNS 记录    |
| [**`node_etc_hosts`**](/docs/node/param/#node_etc_hosts)                 |  [**`NODE`**](/docs/node)  | `[]`                            | 自定义静态 DNS 记录   |
| [**`node_dns_servers`**](/docs/node/param/#node_dns_servers)             |  [**`NODE`**](/docs/node)  | `["${admin_ip}"]`               | 动态 DNS 服务器地址   |
| [**`node_ntp_servers`**](/docs/node/param/#node_ntp_servers)             |  [**`NODE`**](/docs/node)  | `["${admin_ip}"]`               | NTP 时间服务器（可选）  |
{.full-width}

这是一种弱依赖关系


通常管理节点与基础设施节点（INFRA 节点）重合。若有多个 INFRA 节点，管理节点通常是其中第一个，其他作为备份。

在大规模生产环境部署的时候，您可能会出于各种原因，将安装 Ansible 管理节点与运行 Infra 模块的节点分离开来。
例如，使用 1-2 台迷你的专用主机，归属于 DBA 组，作为整个环境的控制中枢，ADMIN 节点。
使用 2-3 台高配置的物理机，作为整个环境的监控基础设施 `INFRA` 节点。

下表展示了不同规模部署中各类节点的典型数量：

| 部署规模 | ADMIN | INFRA | ETCD | MINIO | PGSQL |
|:----:|:-----:|:-----:|:----:|:-----:|:-----:|
| 单机开发 |   1   |   1   |  1   |   0   |   1   |
| 三节点  |   1   |   3   |  3   |   0   |   3   |
| 小型生产 |   1   |   2   |  3   |   0   |  N    |
| 大型生产 |   2   |   3   |  5   |  4+   |   N   |
{.full-width}


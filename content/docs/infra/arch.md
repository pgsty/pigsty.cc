---
title: 系统架构
weight: 3010
description: 介绍 Pigsty 中 INFRA 模块的整体架构，功能组件与责任分工。
icon: fa-solid fa-archway
categories: [概念]
---

## 架构总览

一套标准的 Pigsty 部署会带有一个 **INFRA** 模块，为纳管的节点与数据库集群提供服务：

- **Nginx**：作为 Web 服务器，提供本地软件仓库服务；作为反向代理，统一收拢 Grafana、VMUI、Alertmanager 等 WebUI 的访问入口。
- **Grafana**：可视化平台，呈现监控指标、日志与链路追踪，承载监控大屏、巡检报表以及自定义数据应用。
- **VictoriaMetrics 套件**：提供统一的可观测性平台。
  - **VictoriaMetrics**：拉取全部监控指标，兼容 Prometheus API，并通过 VMUI 提供查询界面。
  - **VMAlert**：评估告警规则，将事件推送至 Alertmanager。
  - **VictoriaLogs**：集中收集存储日志，所有节点默认运行 Vector，将系统日志与数据库日志推送到此。
  - **VictoriaTraces**：收集慢 SQL、服务链路等追踪数据。
  - **AlertManager**：聚合告警事件，分发告警通知，支持邮件、Webhook 等渠道。
  - **BlackboxExporter**：探测各个 IP/VIP/URL 的可达性。
- **DNSMASQ**：提供 DNS 解析服务，解析 Pigsty 内部使用到的域名。
- **Chronyd**：提供 NTP 时间同步服务，确保所有节点时间一致。

[![pigsty-arch](/img/pigsty/arch.png)](/docs/infra/)

INFRA 模块对于高可用 PostgreSQL 并非必选项，例如在 [**精简安装**](/docs/setup/slim/) 模式下，就不会安装 Infra 模块。
但 INFRA 模块提供了运行生产级高可用 PostgreSQL 集群所需要的支持性服务，通常强烈建议安装启用以获得完整的 Pigsty DBaaS 体验。

如果您已经有自己的基础设施（Nginx，本地仓库，监控系统，DNS，NTP），您也可以停用 INFRA 模块，并通过修改配置来使用现有的基础设施。


|        组件        |    端口    |    默认域名    | 描述                      |
|:----------------:|:--------:|:----------:|-------------------------|
|      Nginx       | `80/443` | `i.pigsty` | Web 服务门户、本地仓库             |
|     Grafana      |  `3000`  | `g.pigsty` | 可视化平台                     |
| VictoriaMetrics  |  `8428`  | `p.pigsty` | 时序数据库（VMUI，兼容 Prometheus） |
|   VictoriaLogs   |  `9428`  |     -      | 日志数据库（接收 Vector 推送）        |
|  VictoriaTraces  | `10428`  |     -      | 链路追踪 / 慢 SQL 存储             |
|     VMAlert      |  `8880`  |     -      | 计算指标、评估告警规则               |
|   AlertManager   |  `9059`  | `a.pigsty` | 告警聚合分发                    |
| BlackboxExporter |  `9115`  |     -      | 黑盒监控探测                    |
|     DNSMasq      |   `53`   |     -      | DNS 服务器                    |
|     Chronyd      |  `123`   |     -      | NTP 时间服务器                  |


----------------

## Nginx

Nginx 是 Pigsty 所有 WebUI 类服务的访问入口，默认使用 80 / 443 端口对外提供 HTTP / HTTPS 服务。

带有 WebUI 的基础设施组件可以通过 Nginx 统一对外暴露服务，例如 Grafana、VictoriaMetrics（VMUI）、AlertManager，
以及 HAProxy 控制台，此外，本地 yum/apt 仓库等静态文件资源也通过 Nginx 对内提供服务。

Nginx 会根据 [`infra_portal`](/docs/infra/param/#nginx) 的定义配置本地 Web 服务器或反向代理服务器。
默认情况下将对外暴露 Pigsty 的管理首页：`i.pigsty`

```yaml
infra_portal:
  home : { domain: i.pigsty }
```

Pigsty 允许对 Nginx 进行丰富的定制，将其作为本地文件服务器，或者反向代理服务器，配置自签名或者真正的 HTTPS 证书。

以下是 Pigsty 公开演示站点 [demo.pigsty.cc](https://demo.pigsty.cc) 使用的 Nginx 配置：
您可以在 Nginx 上监听不同的域名，通过反向代理的方式，使用统一入口对外暴露不同的 Web 服务：

```yaml
infra_portal:                     # domain names and upstream servers
  home         : { domain: home.pigsty.cc                                                 ,certbot: pigsty.demo }
  grafana      : { domain: demo.pigsty.cc ,endpoint: "${admin_ip}:3000", websocket: true  ,certbot: pigsty.demo }
  prometheus   : { domain: p.pigsty.cc    ,endpoint: "${admin_ip}:8428"                   ,certbot: pigsty.demo }
  alertmanager : { domain: a.pigsty.cc    ,endpoint: "${admin_ip}:9059"                   ,certbot: pigsty.demo }
  blackbox     : { endpoint: "${admin_ip}:9115"                                                               }
  vmalert      : { endpoint: "${admin_ip}:8880"                                                               }
  postgrest    : { domain: api.pigsty.cc  ,endpoint: "127.0.0.1:8884"                                         }
  pgadmin      : { domain: adm.pigsty.cc  ,endpoint: "127.0.0.1:8885"                                         }
  pgweb        : { domain: cli.pigsty.cc  ,endpoint: "127.0.0.1:8886"                                         }
  bytebase     : { domain: ddl.pigsty.cc  ,endpoint: "127.0.0.1:8887"                                         }
  jupyter      : { domain: lab.pigsty.cc  ,endpoint: "127.0.0.1:8888"   ,websocket: true                      }
  gitea        : { domain: git.pigsty.cc  ,endpoint: "127.0.0.1:8889"                     ,certbot: pigsty.cc }
  wiki         : { domain: wiki.pigsty.cc ,endpoint: "127.0.0.1:9002"                     ,certbot: pigsty.cc }
  noco         : { domain: noco.pigsty.cc ,endpoint: "127.0.0.1:9003"                     ,certbot: pigsty.cc }
  supa         : { domain: supa.pigsty.cc ,endpoint: "10.2.82.163:8000" ,websocket: true  ,certbot: pigsty.cc }
  dify         : { domain: dify.pigsty.cc ,endpoint: "10.2.82.163:8001" ,websocket: true  ,certbot: pigsty.cc }
  odoo         : { domain: odoo.pigsty.cc ,endpoint: "127.0.0.1:8069"   ,websocket: true  ,certbot: pigsty.cc }
  mm           : { domain: mm.pigsty.cc   ,endpoint: "10.2.82.163:8065" ,websocket: true                      }
  web.io:
    domain: en.pigsty.cc
    path: "/www/web.io"
    certbot: pigsty.doc
    enforce_https: true
    config: |
      # rewrite /zh/ to /
          location /zh/ {
              rewrite ^/zh/(.*)$ /$1 permanent;
          }
  web.cc:
    domain: pigsty.cc
    path: "/www/web.cc"
    domains: [ zh.pigsty.cc ]
    certbot: pigsty.doc
    config: |
      # rewrite /zh/ to /
          location /zh/ {
              rewrite ^/zh/(.*)$ /$1 permanent;
          }
  repo:
    domain: pro.pigsty.cc
    path: "/www/repo"
    index: true
    certbot: pigsty.doc
```

更多信息，请参阅 [教程：Certbot：申请与更新HTTPS证书](/docs/infra/admin/cert)


----------------

## 本地软件仓库

Pigsty 会在安装时，默认在 Infra 节点上创建一个本地软件仓库，以加速后续软件安装。

该软件仓库默认位于 `/www/pigsty` 目录，由 Nginx 提供服务，可以访问 `http://i.pigsty/pigsty` 使用。

Pigsty 的离线软件包是将已经建立好的软件源目录整个打成压缩包：当 Pigsty 尝试构建本地源时，如果发现本地源目录 `/www/pigsty` 已经存在，且带有 `/www/pigsty/repo_complete` 标记文件，则会认为本地源已经构建完成，从而跳过从原始上游下载软件的步骤，消除了对互联网访问的依赖。

Repo 定义文件位于 `/www/pigsty.repo`，默认可以通过 `http://${admin_ip}/pigsty.repo` 获取。

```bash
curl -L http://i.pigsty/pigsty.repo -o /etc/yum.repos.d/pigsty.repo
```

您也可以在没有 Nginx 的情况下直接使用文件本地源：

```ini
[pigsty-local]
name=Pigsty local $releasever - $basearch
baseurl=file:///www/pigsty/
enabled=1
gpgcheck=0
```

更多信息，请参阅：[配置：INFRA - REPO](/docs/infra/param/#repo)


----------------

## Victoria 可观测性套件

Pigsty v4.0 使用 VictoriaMetrics 系列组件取代 Prometheus/Loki，提供统一的可观测性平台：

- **VictoriaMetrics**：默认监听 `8428` 端口，可通过 `http://p.pigsty` 或 `https://i.pigsty/vmetrics/` 访问 VMUI，兼容 PromQL、远程读写协议以及 Alertmanager API。
- **VMAlert**：在 `8880` 端口上运行告警规则，将事件发送至 Alertmanager。
- **VictoriaLogs**：默认监听 `9428` 端口，支持通过 `https://i.pigsty/vlogs/` 检索日志。节点侧 Vector 会将系统日志、PostgreSQL 日志等结构化后推送至此。
- **VictoriaTraces**：监听 `10428` 端口，提供 Jaeger 兼容接口，便于分析慢 SQL 与链路追踪。
- **Alertmanager**：监听 `9059` 端口，可通过 `http://a.pigsty` 或 `https://i.pigsty/alertmgr/` 管理告警路由与通知。
- **Blackbox Exporter**：默认监听 `9115` 端口，负责 ICMP/TCP/HTTP 黑盒探测。

更多信息请参阅：[配置：INFRA - VICTORIA](/docs/infra/param/#victoria) 与 [配置：INFRA - PROMETHEUS](/docs/infra/param/#prometheus)。


----------------

## Grafana

Grafana 是 Pigsty WebUI 的核心，默认监听 `3000` 端口，可通过 `IP:3000` 或 `http://g.pigsty` 访问。

Pigsty 预置了基于 VictoriaMetrics / Logs / Traces 的 Dashboard，并通过 URL 跳转实现一键下钻上卷，帮助快速定位故障。

Grafana 亦可作为低代码可视化平台使用，因此默认安装 ECharts、victoriametrics-datasource、victorialogs-datasource 等插件，同时将 Vector / Victoria 数据源统一注册为 `vmetrics-*`、`vlogs-*`、`vtraces-*`，方便扩展自定义仪表板。

更多信息请参阅：[配置：INFRA - GRAFANA](/docs/infra/param/#grafana)。


----------------

## Ansible

Pigsty 默认会在元节点上安装 Ansible，Ansible 是一个流行的运维工具，采用声明式的配置风格与幂等的剧本设计，可以极大降低系统维护的复杂度。


----------------

## DNSMASQ

DNSMASQ 提供环境内的 DNS 解析服务，其他模块的域名将会注册到 INFRA 节点上的 DNSMASQ 服务中。

DNS 记录默认放置于所有 INFRA 节点的 `/etc/hosts.d/` 目录中。

更多信息，请参阅：[配置：INFRA - DNS](/docs/infra/param/#dns) 与 [教程：DNS：配置域名解析](/docs/infra/admin/domain)


----------------

## Chronyd

NTP 服务用于同步环境内所有节点的时间（可选）。

更多信息，请参阅：[配置：NODES - NTP](/docs/node/param/#node_time)

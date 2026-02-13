---
title: 模块：INFRA
weight: 3000
description: 可独立使用且可选的基础设施，为 PostgreSQL 提供 NTP，DNS，可观测性等基础服务。
icon: fas fa-bank
categories: [参考]
#sidebar_root_for: self
---

[配置](#配置) | [管理](#管理) | [剧本](#剧本) | [监控](#监控) | [参数](#参数)


----------------

## 概览

每一套 Pigsty 部署都会提供一套基础架构组件，为纳管的节点与数据库集群提供服务，组件包括：

| 组件                            | 端口       | 描述                                |
|:------------------------------|:---------|-----------------------------------|
| [Nginx](#nginx)               | `80/443` | Web 服务门户、本地软件仓库与统一入口              |
| [Grafana](#grafana)           | `3000`   | 可视化平台，提供监控大屏、巡检与数据应用              |
| [VictoriaMetrics](#victoria-可观测性套件)  | `8428`   | 时序数据库与 VMUI，可兼容 Prometheus API    |
| [VictoriaLogs](#victoria-可观测性套件)     | `9428`   | 集中式日志数据库，接收 Vector 推送的结构化日志       |
| [VictoriaTraces](#victoria-可观测性套件)   | `10428`  | 链路追踪与事件存储，可用于慢 SQL / 请求追踪         |
| [VMAlert](#victoria-可观测性套件)          | `8880`   | 告警规则评估器，基于 VictoriaMetrics 指标触发告警 |
| [AlertManager](#victoria-可观测性套件)     | `9059`   | 告警聚合与分发，接收 VMAlert 发送的通知          |
| [BlackboxExporter](#victoria-可观测性套件) | `9115`   | ICMP/TCP/HTTP 黑盒探测                |
| [DNSMASQ](#dnsmasq)           | `53`     | DNS 服务器，提供内部域名解析                  |
| [Chronyd](#chronyd)           | `123`    | NTP 时间服务器                         |
| [PostgreSQL](#postgresql)     | `5432`   | CMDB 与默认数据库                       |
| [Ansible](#ansible)           | -        | 运行剧本、编排所有基础设施                     |
{.full-width}




在 Pigsty 中，[PGSQL](/docs/pgsql) 模块会使用到 [**INFRA节点**](/docs/concept/arch/node#infra节点) 上的一些服务，具体来说包括：

* 数据库集群/主机节点的域名，依赖 INFRA 节点的 DNSMASQ **解析**。
* 在数据库节点软件上**安装**，需要用到 INFRA 节点上的 Nginx 托管的本地 yum/apt 软件源。
* 数据库集群/节点的监控**指标**，会被 INFRA 节点上的 VictoriaMetrics 拉取并存储，可通过 VMUI / PromQL 访问。
* 数据库与节点运行日志由 Vector 收集，统一推送到 INFRA 上的 VictoriaLogs，支持在 Grafana 中检索。
* VMAlert 根据 VictoriaMetrics 中的指标**评估**告警规则，并将事件转发到 Alertmanager。
* 用户会从 Infra/Admin 节点上使用 Ansible 或其他工具发起对数据库节点的**管理**：
  * 执行集群创建，扩缩容，实例/集群回收
  * 创建业务用户、业务数据库、修改服务、HBA修改；
  * 执行日志采集、垃圾清理，备份，巡检等
* 数据库节点默认会从 INFRA/ADMIN 节点上的 NTP 服务器同步时间
* 如果没有专用集群，高可用组件 Patroni 会使用 INFRA 节点上的 etcd 作为高可用DCS。
* 如果没有专用集群，备份组件 pgbackrest 会使用 INFRA 节点上的 minio 作为可选的集中备份仓库。


----------------

### Nginx

Nginx是Pigsty所有WebUI类服务的访问入口，默认使用管理节点80端口。

有许多带有 WebUI 的基础设施组件通过 Nginx 对外暴露服务，例如 Grafana、VictoriaMetrics（VMUI）、AlertManager，以及 HAProxy 流量管理页等，此外 yum/apt 仓库等静态文件资源也通过 Nginx 对外提供服务。

Nginx会根据 [`infra_portal`](/docs/infra/param#infra_portal) 的内容，通过**域名**进行区分，将访问请求转发至对应的上游组件处理。如果您使用了其他的域名，或者公网域名，可以在这里进行相应修改：

```yaml
infra_portal:  # domain names and upstream servers
  home         : { domain: i.pigsty }
  grafana      : { domain: g.pigsty ,endpoint: "${admin_ip}:3000" , websocket: true }
  vmetrics     : { domain: p.pigsty ,endpoint: "${admin_ip}:8428" }   # VMUI
  alertmanager : { domain: a.pigsty ,endpoint: "${admin_ip}:9059" }
  blackbox     : { endpoint: "${admin_ip}:9115" }
  vmalert      : { endpoint: "${admin_ip}:8880" }
  #logs         : { domain: logs.pigsty ,endpoint: "${admin_ip}:9428" }
  #minio        : { domain: m.pigsty    ,endpoint: "${admin_ip}:9001" ,scheme: https ,websocket: true }
```

Pigsty强烈建议使用域名访问Pigsty UI系统，而不是直接通过IP+端口的方式访问，基于以下几个理由：
* 使用域名便于启用 HTTPS 流量加密，可以将访问收拢至Nginx，审计一切请求，并方便地集成认证机制。
* 一些组件默认只监听 127.0.0.1 ，因此只能通过Nginx代理访问。
* 域名更容易记忆，并提供了额外的配置灵活性。

如果您没有可用的互联网域名或本地DNS解析，您可以在 `/etc/hosts` （MacOS/Linux）或`C:\Windows\System32\drivers\etc\hosts` （Windows）中添加本地静态解析记录。

Nginx相关配置参数位于：[配置：INFRA - NGINX](/docs/infra/param#nginx)


----------------

### 本地软件仓库

Pigsty会在安装时首先建立一个本地软件源，以加速后续软件安装。

该软件源由Nginx提供服务，默认位于为 `/www/pigsty`，可以访问 `http://i.pigsty/pigsty` 使用。

Pigsty的离线软件包即是将已经建立好的软件源目录（yum/apt）整个打成压缩包，当Pigsty尝试构建本地源时，如果发现本地源目录 `/www/pigsty` 已经存在，
且带有 `/www/pigsty/repo_complete` 标记文件，则会认为本地源已经构建完成，从而跳过从原始上游下载软件的步骤，消除了对互联网访问的依赖。

Repo定义文件位于 `/www/pigsty.repo`，默认可以通过 `http://${admin_ip}/pigsty.repo` 获取

```bash
curl -L http://i.pigsty/pigsty.repo -o /etc/yum.repos.d/pigsty.repo
```

您也可以在没有Nginx的情况下直接使用文件本地源：

```ini
[pigsty-local]
name=Pigsty local $releasever - $basearch
baseurl=file:///www/pigsty/
enabled=1
gpgcheck=0
```

本地软件仓库相关配置参数位于：[配置：INFRA - REPO](/docs/infra/param#repo)


----------------

### Victoria 可观测性套件

Pigsty v4.1 使用 VictoriaMetrics 家族提供统一的监控、日志与链路追踪能力：

* **VictoriaMetrics** 默认监听 `8428` 端口，可通过 `http://p.pigsty` 或 `https://i.pigsty/vmetrics/` 访问 VMUI，兼容 Prometheus API。
* **VMAlert** 负责评估 `/infra/rules/*.yml` 中的告警规则，监听 `8880` 端口，并将告警事件发送到 Alertmanager。
* **VictoriaLogs** 监听 `9428` 端口，支持 `https://i.pigsty/vlogs/` 查询界面。所有节点默认运行 Vector，将系统日志、PostgreSQL 日志等结构化后推送至 VictoriaLogs。
* **VictoriaTraces** 监听 `10428` 端口，用于慢 SQL / Trace 采集，Grafana 以 Jaeger 数据源方式访问。
* **Alertmanager** 监听 `9059` 端口，可通过 `http://a.pigsty` 或 `https://i.pigsty/alertmgr/` 管理告警通知。完成 SMTP、Webhook 等配置后即可推送消息。
* **Blackbox Exporter** 默认监听 `9115` 端口，用于 Ping/TCP/HTTP 探测，可通过 `https://i.pigsty/blackbox/` 访问。

更多信息请参阅：[配置：INFRA - VICTORIA](/docs/infra/param#victoria) 与 [配置：INFRA - PROMETHEUS](/docs/infra/param#prometheus)。



----------------

### Grafana

Grafana 是 Pigsty 的 WebUI 核心，默认监听 `3000` 端口，可以直接通过 `IP:3000` 或域名 `http://g.pigsty` 访问。

Pigsty 预置了针对 VictoriaMetrics / Logs / Traces 的数据源（`vmetrics-*`、`vlogs-*`、`vtraces-*`），以及大量 Dashboard，可通过 URL 进行联动跳转，快速定位问题。

Grafana 也可作为通用低代码可视化平台使用，因此 Pigsty 默认安装了 ECharts、victoriametrics-datasource 等插件，方便构建监控大屏或巡检报表。

Grafana 相关配置参数位于：[配置：INFRA - GRAFANA](/docs/infra/param#grafana)。



----------------

### Ansible

Pigsty默认会在元节点上安装Ansible，Ansible是一个流行的运维工具，采用声明式的配置风格与幂等的剧本设计，可以极大降低系统维护的复杂度。


----------------

### DNSMASQ

DNSMASQ 提供环境内的DNS**解析**服务，其他模块的域名将会注册到 INFRA节点上的 DNSMASQ 服务中。

DNS记录默认放置于所有INFRA节点的 `/etc/hosts.d/` 目录中。

DNSMASQ相关配置参数位于：[配置：INFRA - DNS](/docs/infra/param#dns)




----------------

### Chronyd

NTP服务用于同步环境内所有节点的时间（可选）

NTP相关配置参数位于：[配置：NODES - NTP](/docs/node/param#node_time)

----------------

### PostgreSQL

Pigsty 的元数据库（CMDB）通常使用 PostgreSQL，默认监听 `5432` 端口，用于存储 Pigsty 元数据并支撑部分内置应用。
更多信息请参阅：[PGSQL](/docs/pgsql) 模块与 [配置：INFRA - META](/docs/infra/param#meta)。






----------------

## 配置

要在节点上安装 INFRA 模块，首先需要在配置清单中的 `infra` 分组中将其加入，并分配实例号 [`infra_seq`](/docs/infra/param#infra_seq)

```yaml
# 配置单个 INFRA 节点
infra: { hosts: { 10.10.10.10: { infra_seq: 1 } }}

# 配置两个 INFRA 节点
infra:
  hosts:
    10.10.10.10: { infra_seq: 1 }
    10.10.10.11: { infra_seq: 2 }
```

然后，使用 [`infra.yml`](#infrayml) 剧本在节点上初始化 INFRA 模块即可。



----------------

## 管理

下面是与 INFRA 模块相关的一些管理任务：

----------------

### 安装卸载Infra模块

```bash
./infra.yml     # 在 infra 分组上安装 INFRA 模块
./infra-rm.yml  # 从 infra 分组上卸载 INFRA 模块
```

----------------

### 管理本地软件仓库

您可以使用以下剧本子任务，管理 Infra节点 上的本地yun源：

```bash
./infra.yml -t repo              #从互联网或离线包中创建本地软件源

./infra.yml -t repo_dir          # 创建本地软件源
./infra.yml -t repo_check        # 检查本地软件源是否已经存在？
./infra.yml -t repo_prepare      # 如果存在，直接使用已有的本地软件源
./infra.yml -t repo_build        # 如果不存在，从上游构建本地软件源
./infra.yml     -t repo_upstream     # 处理 /etc/yum.repos.d 中的上游仓库文件
./infra.yml     -t repo_remove       # 如果 repo_remove == true，则删除现有的仓库文件
./infra.yml     -t repo_add          # 将上游仓库文件添加到 /etc/yum.repos.d （或 /etc/apt/sources.list.d）
./infra.yml     -t repo_url_pkg      # 从由 repo_url_packages 定义的互联网下载包
./infra.yml     -t repo_cache        # 使用 yum makecache / apt update 创建上游软件源元数据缓存
./infra.yml     -t repo_boot_pkg     # 安装如 createrepo_c、yum-utils 等的引导包...（或 dpkg-）
./infra.yml     -t repo_pkg          # 从上游仓库下载包 & 依赖项
./infra.yml     -t repo_create       # 使用 createrepo_c & modifyrepo_c 创建本地软件源
./infra.yml     -t repo_use          # 将新建的仓库添加到 /etc/yum.repos.d | /etc/apt/sources.list.d 用起来
./infra.yml -t repo_nginx        # 如果没有 nginx 在服务，启动一个 nginx 作为 Web Server
```

其中最常用的命令为：

```bash
./infra.yml     -t repo_upstream     # 向 INFRA 节点添加 repo_upstream 中定义的上游软件源
./infra.yml     -t repo_pkg          # 从上游仓库下载包及其依赖项。
./infra.yml     -t repo_create       # 使用 createrepo_c & modifyrepo_c 创建/更新本地 yum 仓库
```



----------------

### 管理基础设施组件

您可以使用以下剧本子任务，管理 Infra节点 上的各个基础设施组件

```bash
./infra.yml -t infra           # 配置基础设施
./infra.yml -t infra_env       # 配置管理节点上的环境变量：env_patroni, env_pg, env_pgadmin, env_var
./infra.yml -t infra_pkg       # 安装 INFRA 所需的软件包：infra_packages
./infra.yml -t infra_user      # 设置 infra 操作系统用户组
./infra.yml -t infra_cert      # 为 infra 组件颁发证书
./infra.yml -t dns             # 配置 DNSMasq：dns_config, dns_record, dns_launch
./infra.yml -t nginx           # 配置 Nginx：nginx_config, nginx_cert, nginx_static, nginx_launch, nginx_certbot, nginx_reload, nginx_exporter
./infra.yml -t victoria        # 配置 VictoriaMetrics/Logs/Traces：vmetrics|vlogs|vtraces|vmalert
./infra.yml -t alertmanager    # 配置 AlertManager：alertmanager_config, alertmanager_launch
./infra.yml -t blackbox        # 配置 Blackbox Exporter：blackbox_config, blackbox_launch
./infra.yml -t grafana         # 配置 Grafana：grafana_clean, grafana_config, grafana_launch, grafana_provision
./infra.yml -t infra_register  # 将 infra 组件注册到 VictoriaMetrics / Grafana
```

其他常用的任务包括：

```bash
./infra.yml -t nginx_index                        # 重新渲染 Nginx 首页内容
./infra.yml -t nginx_config,nginx_reload          # 重新渲染 Nginx 网站门户配置，对外暴露新的上游服务。
./infra.yml -t vmetrics_config,vmetrics_launch    # 重新生成 VictoriaMetrics 主配置文件，并重启服务
./infra.yml -t vlogs_config,vlogs_launch          # 重新渲染 VictoriaLogs 配置
./infra.yml -t vmetrics_clean                     # 清理 VictoriaMetrics 存储数据目录
./infra.yml -t grafana_provision                  # 重新加载 Grafana 仪表盘与数据源定义
```


----------------

## 剧本

Pigsty 提供了三个与 INFRA 模块相关的剧本：

- [`infra.yml`](#infrayml) ：在 infra 节点上初始化 pigsty 基础设施
- [`infra-rm.yml`](#infra-rmyml)：从 infra 节点移除基础设施组件
- [`deploy.yml`](#deployyml)：在当前节点上一次性完整安装 Pigsty

----------------

### `infra.yml`

INFRA模块剧本 [`infra.yml`](https://github.com/pgsty/pigsty/blob/main/infra.yml) 用于在 [**Infra节点**](/docs/concept/arch/node#infra节点) 上初始化 pigsty 基础设施

**执行该剧本将完成以下任务**

* 配置元节点的目录与环境变量
* 下载并建立一个本地软件源，加速后续安装。（若使用离线软件包，则跳过下载阶段）
* 将当前元节点作为一个普通节点纳入 Pigsty 管理
* 部署**基础设施**组件，包括 VictoriaMetrics/Logs/Traces、VMAlert、Grafana、Alertmanager、Blackbox Exporter 等

**该剧本默认在 [**INFRA节点**](/docs/concept/arch/node#infra节点) 上执行**

* Pigsty默认将使用**当前执行此剧本的节点**作为Pigsty的 [**Infra节点**](/docs/concept/arch/node#infra节点) 与 [**ADMIN节点**](/docs/concept/arch/node#admin节点)。
* Pigsty在 [配置过程](/docs/setup/install#配置) 中默认会将当前节点标记为Infra/Admin节点，并使用**当前节点首要IP地址**替换配置模板中的占位IP地址`10.10.10.10`。
* 该节点除了可以发起管理，部署有基础设施，与一个部署普通托管节点并无区别。
* 单机安装时，ETCD 也会安装在此节点上，提供 DCS 服务

**本剧本的一些注意事项**

* 本剧本为幂等剧本，重复执行默认不会清理历史数据与 Grafana 数据。
* 如需保留历史监控数据，请先将 `vmetrics_clean`、`vlogs_clean`、`vtraces_clean` 设置为 `false`。
* 如果将 `vmetrics_clean`、`vlogs_clean`、`vtraces_clean`、`grafana_clean` 设为 `true`，对应组件数据会在执行时被清理。
* 当离线软件源 `/www/pigsty/repo_complete` 存在时，本剧本会跳过从互联网下载软件的任务。完整执行该剧本耗时约5-8分钟，视机器配置而异。
* 不使用离线软件包而直接从互联网原始上游下载软件时，可能耗时10-20分钟，根据您的网络条件而异。

[![asciicast](https://asciinema.org/a/566412.svg)](https://asciinema.org/a/566412)


----------------

### `infra-rm.yml`

INFRA模块剧本 [`infra-rm.yml`](https://github.com/pgsty/pigsty/blob/main/infra-rm.yml) 用于从 [**INFRA节点**](/docs/concept/arch/node#infra节点) 上移除 pigsty 基础设施

常用子任务包括：

```bash
./infra-rm.yml               # 移除 INFRA 模块
./infra-rm.yml -t service    # 停止 INFRA 上的基础设施服务
./infra-rm.yml -t data       # 移除 INFRA 上的存留数据
./infra-rm.yml -t package    # 卸载 INFRA 上安装的软件包
```


----------------

### `deploy.yml`

INFRA模块剧本 [`deploy.yml`](https://github.com/pgsty/pigsty/blob/main/deploy.yml) 用于在**所有节点**上一次性完整安装 Pigsty

该剧本在 [剧本：一次性安装](/docs/setup/playbook#部署剧本) 中有更详细的介绍。




----------------

## 监控


[Pigsty Home](https://demo.pigsty.cc/d/pigsty) : Pigsty 监控系统主页

<details><summary>Pigsty Home Dashboard</summary>

[![pigsty.jpg](/img/dashboard/pigsty.jpg)](https://demo.pigsty.cc/d/pigsty/)

</details>


[INFRA Overview](https://demo.pigsty.cc/d/infra-overview) : Pigsty 基础设施自监控概览

<details><summary>INFRA Overview Dashboard</summary>

[![infra-overview.jpg](/img/dashboard/infra-overview.jpg)](https://demo.pigsty.cc/d/infra-overview/)

</details>


[Nginx Instance](https://demo.pigsty.cc/d/nginx-instance) : Nginx 监控指标与日志

<details><summary>Nginx Overview Dashboard</summary>

[![nginx-overview.jpg](/img/dashboard/nginx-overview.jpg)](https://demo.pigsty.cc/d/nginx-overview)

</details>


[Grafana Instance](https://demo.pigsty.cc/d/grafana-instance): Grafana 监控指标与日志

<details><summary>Grafana Overview Dashboard</summary>

[![grafana-overview.jpg](/img/dashboard/grafana-overview.jpg)](https://demo.pigsty.cc/d/grafana-overview)

</details>


[VictoriaMetrics Instance](https://demo.pigsty.cc/d/vmetrics-instance): VictoriaMetrics 抓取、查询与存储指标

[VMAlert Instance](https://demo.pigsty.cc/d/vmalert-instance): 告警规则评估与队列状态

[Alertmanager Instance](https://demo.pigsty.cc/d/alertmanager-instance): 告警聚合、通知管道与 Silences

[VictoriaLogs Instance](https://demo.pigsty.cc/d/vlogs-instance): 日志写入速率、查询负载与索引命中

[VictoriaTraces Instance](https://demo.pigsty.cc/d/vtraces-instance): Trace/KV 存储与 Jaeger 接口


[Logs Instance](https://demo.pigsty.cc/d/logs-instance): 基于 Vector + VictoriaLogs 的节点日志检索

<details><summary>Logs Instance Dashboard</summary>

[![logs-instance.jpg](/img/dashboard/logs-instance.jpg)](https://demo.pigsty.cc/d/logs-instance)

</details>


[CMDB Overview](https://demo.pigsty.cc/d/cmdb-overview): CMDB 可视化

<details><summary>CMDB Overview Dashboard</summary>

[![cmdb-overview.jpg](/img/dashboard/cmdb-overview.jpg)](https://demo.pigsty.cc/d/cmdb-overview)

</details>


[ETCD Overview](https://demo.pigsty.cc/d/etcd-overview): etcd 监控指标与日志

<details><summary>ETCD Overview Dashboard</summary>

[![etcd-overview.jpg](/img/dashboard/etcd-overview.jpg)](https://demo.pigsty.cc/d/etcd-overview)

</details>




----------------

## 参数

[`INFRA`](/docs/infra/param) 模块有下列10个参数组。

- [`META`](/docs/infra/param#meta)：Pigsty元数据
- [`CA`](/docs/infra/param#ca)：自签名公私钥基础设施/CA
- [`INFRA_ID`](/docs/infra/param#infra_id)：基础设施门户，Nginx域名
- [`REPO`](/docs/infra/param#repo)：本地软件源
- [`INFRA_PACKAGE`](/docs/infra/param#infra_package)：基础设施软件包
- [`NGINX`](/docs/infra/param#nginx)：Nginx 网络服务器
- [`DNS`](/docs/infra/param#dns)：DNSMASQ 域名服务器
- [`VICTORIA`](/docs/infra/param#victoria)：VictoriaMetrics / Logs / Traces 套件
- [`PROMETHEUS`](/docs/infra/param#prometheus)：Alertmanager 与 Blackbox Exporter
- [`GRAFANA`](/docs/infra/param#grafana)：Grafana 可观测性全家桶

<details><summary>参数速览</summary>

为保持与 Pigsty 版本一致，请参阅 [《参数列表》](/docs/infra/param/#参数概览) 获取最新的默认值、类型与层级说明。

</details>

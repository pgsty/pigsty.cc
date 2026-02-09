---
title: 从浏览器访问图形用户界面
linkTitle: 图形界面
weight: 260
description: 探索 Pigsty 提供的 Web 图形管理界面，Grafana 大盘，以及如何通过域名和 HTTPS 访问它们。
icon: fa-solid fa-desktop
module: [PIGSTY]
categories: [教程]
---


Pigsty [**单机安装**](/docs/setup/install) 完成后，您在当前节点上将安装有 [**`INFRA`**](/docs/infra/) 模块，它带有一套开箱即用的 Nginx Web 服务器。

其中的默认服务器配置提供了一个 WebUI 图形界面，用于展示监控仪表盘，并统一代理访问其他组件的 Web 界面。


------

## 访问

您可以通过在浏览器中键入部署节点 IP 地址来访问这个图形界面。在默认配置下，Nginx 将通过 `80/443` 标准端口对外提供服务。

|           IP 直接访问           |     域名（HTTP）      | 域名（HTTPS）| Demo |
|:----------------------:|:-----------:|:---------:|:-----------:|:------:|
| [**`http://10.10.10.10`**](http://10.10.10.10) | [**`http://i.pigsty`**](http://i.pigsty) | [**`https://i.pigsty`**](https://i.pigsty) | [**`https://demo.pigsty.cc`**](https://demo.pigsty.cc/zh) |
{.full-width}


[![](/img/pigsty/home.png)](https://demo.pigsty.cc/zh)


------

## 监控

要访问 Pigsty 的监控系统大盘（Grafana），您可以访问服务器的 `/ui` 端点。

|           IP 直接访问           |     域名（HTTP）      | 域名（HTTPS）| Demo |
|:----------------------:|:-----------:|:---------:|:-----------------------:|:----:|
| [**`http://10.10.10.10/ui`**](http://10.10.10.10/ui) | [**`http://i.pigsty/ui`**](http://i.pigsty/ui) | [**`https://i.pigsty/ui`**](https://i.pigsty/ui) | [**`https://demo.pigsty.cc/ui`**](https://demo.pigsty.cc/ui) |
{.full-width}

如果您的服务对互联网与办公网开放，我们建议您通过 [**域名**](/docs/infra/admin/domain/) 访问，并启用 [**HTTPS**](/docs/infra/admin/cert) 加密，只需要少量配置工作即可实现。



---------

## 端点

在默认配置下，Nginx 会在 `80/443` 端口的默认服务器上，通过不同的路径暴露以下端点：

| 端点           | 组件                                         | 原生端口     | 备注                 | 公开演示                                                           |
|:-------------|:-------------------------------------------|:---------|:-------------------|----------------------------------------------------------------|
| `/`          | [**Nginx**](/docs/infra/)                  | `80/443` | 首页、本地仓库、文件服务       | [`demo.pigsty.cc`](https://demo.pigsty.cc)                     |
| `/ui/`       | [**Grafana**](#监控)                       | `3000`   | Grafana 仪表盘入口      | [`demo.pigsty.cc/ui/`](https://demo.pigsty.cc/ui/)             |
| `/vmetrics/` | [**VictoriaMetrics**](/docs/infra/)        | `8428`   | 时序数据库 Web UI       | [`demo.pigsty.cc/vmetrics/`](https://demo.pigsty.cc/vmetrics/) |
| `/vlogs/`    | [**VictoriaLogs**](/docs/infra/)           | `9428`   | 日志数据库 Web UI       | [`demo.pigsty.cc/vlogs/`](https://demo.pigsty.cc/vlogs/)       |
| `/vtraces/`  | [**VictoriaTraces**](/docs/infra/)         | `10428`  | 链路追踪 Web UI        | [`demo.pigsty.cc/vtraces/`](https://demo.pigsty.cc/vtraces/)   |
| `/vmalert/`  | [**VMAlert**](/docs/infra/)                | `8880`   | 告警规则管理             | [`demo.pigsty.cc/vmalert/`](https://demo.pigsty.cc/vmalert/)   |
| `/alertmgr/` | [**AlertManager**](/docs/infra/)           | `9059`   | 告警管理 Web UI        | [`demo.pigsty.cc/alertmgr/`](https://demo.pigsty.cc/alertmgr/) |
| `/blackbox/` | [**Blackbox**](/docs/infra/)               | `9115`   | 黑盒探测器              |                                                                |
| `/haproxy/*` | [**HAProxy**](/docs/node/)                 | `9101`   | 负载均衡管理 Web UI      |                                                                |
| `/pev`       | [**PEV2**](https://github.com/dalibo/pev2) | `80`     | PostgreSQL 执行计划可视化 | [`demo.pigsty.cc/pev`](https://demo.pigsty.cc/pev)             |
| `/nginx`     | [**Nginx**](/docs/infra/)                  | `80`     | Nginx 状态页（指标采集用）   |                                                                |
{.full-width}






----------------

## 域名访问

如果您有自己的域名，可以将其解析到 Pigsty 服务器的 IP 地址，从而通过域名访问 Pigsty 提供的各项服务。

如果您希望启用 HTTPS，则应当修改 [**`infra_portal`**](/docs/infra/param#infra_portal) 参数中 [**`home`**](https://github.com/pgsty/pigsty/blob/main/conf/meta.yml#L139) 服务器的配置：

```yaml
all:
  vars:
    infra_portal:
      home : { domain: i.pigsty } # 将 i.pigsty 替换为你的域名
```

```yaml
all:
  vars:
    infra_portal:  # domain 指定域名  # certbot 参数指定证书名称
      home : { domain: demo.pigsty.cc ,certbot: mycert }
```

您可以在部署完成后，执行 `make cert` 命令为该域名申请免费的 Let's Encrypt 证书。
如果您没有定义 `certbot` 字段，Pigsty 会默认使用本地 CA 签发自签名的 HTTPS 证书，
在这种情况下，您必须首先信任 Pigsty 的自签名 CA 才可以在浏览器中正常访问。

您还可以将本地目录与其他上游服务挂载到 Nginx 上，更多管理预案，请参考 [**INFRA 管理 - Nginx**](/docs/infra/admin/portal)。

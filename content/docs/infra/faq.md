---
title: 常见问题
weight: 3070
description: Pigsty INFRA 基础设施模块常见问题答疑
icon: fa-solid fa-circle-question
module: [PIGSTY]
categories: [参考]
---



----------------

## INFRA 模块中包含了哪些组件？

- **Ansible**：用于自动化配置、部署和日常运维。
- **Nginx**：对外暴露 Grafana、VictoriaMetrics（VMUI）、Alertmanager 等 WebUI，并托管本地 YUM/APT 仓库。
- **自签名 CA**：为 Nginx、Patroni、pgBackRest 等组件签发 SSL/TLS 证书。
- **VictoriaMetrics 套件**：替代 Prometheus/Loki，包含 VictoriaMetrics（TSDB）、VMAlert（告警评估）、VictoriaLogs（集中日志）、VictoriaTraces（链路追踪）。
- **Vector**：节点侧日志采集器，负责将系统/数据库日志推送至 VictoriaLogs。
- **AlertManager**：聚合并分发告警通知。
- **Grafana**：监控/可视化平台，预置大量仪表板和数据源。
- **Chronyd**：提供 NTP 时间同步。
- **DNSMasq**：提供 DNS 注册与解析。
- **ETCD**：作为 PostgreSQL 高可用 DCS（亦可在专用集群部署）。
- **PostgreSQL**：在管理节点上充当 CMDB（可选）。
- **Docker**：在节点上运行无状态工具或应用（可选）。



----------------

## 如何重新向 VictoriaMetrics 注册监控目标？

VictoriaMetrics 通过 `/infra/targets/<job>/*.yml` 目录进行静态服务发现。如果目标文件被误删，可使用如下命令重新注册：

```bash
./infra.yml  -t infra_register   # 重新渲染 infra 自监控目标
./node.yml   -t node_register    # 重新渲染节点 / HAProxy / Vector 目标
./etcd.yml   -t etcd_register    # 重新渲染 etcd 目标
./minio.yml  -t minio_register   # 重新渲染 MinIO 目标
./pgsql.yml  -t pg_register      # 重新渲染 PGSQL/Patroni 目标
./redis.yml  -t redis_register   # 重新渲染 Redis 目标
```

其他模块（如 `pg_monitor.yml`、`mongo.yml`、`mysql.yml`）也提供了对应的 `*_register` 标签，可按需执行。






----------------

## 如何重新向 Grafana 注册 PostgreSQL 数据源？

在 [`pg_databases`](/docs/pgsql/param#pg_databases) 中定义的 PGSQL 数据库默认会被注册为 Grafana 数据源（以供 PGCAT 应用使用）。

如果你不小心删除了在 Grafana 中注册的 postgres 数据源，你可以使用以下命令再次注册它们：


```bash
# 将所有（在 pg_databases 中定义的） pgsql 数据库注册为 grafana 数据源
./pgsql.yml -t register_grafana
```






----------------

## 如何重新向 Nginx 注册节点的 Haproxy 管控界面？

如果你不小心删除了 `/etc/nginx/conf.d/haproxy` 中的已注册 haproxy 代理设置，你可以使用以下命令再次恢复它们：

```bash
./node.yml -t register_nginx     # 在 infra 节点上向 nginx 注册所有 haproxy 管理页面的代理设置
```






----------------

## 如何恢复 DNSMASQ 中的域名注册记录？

PGSQL 集群/实例域名默认注册到 infra 节点的 `/etc/hosts.d/<name>`。你可以使用以下命令再次恢复它们：

```bash
./pgsql.yml -t pg_dns    # 在 infra 节点上向 dnsmasq 注册 pg 的 DNS 名称
```




----------------

## 如何使用Nginx对外暴露新的上游服务？

尽管您可以直接通过 IP:Port 的方式访问服务，但我们依然建议收敛访问入口，使用域名并统一从 Nginx 代理访问各类带有 Web 界面的服务。
这样有利于统一收口访问，减少暴露的端口，便于进行访问控制与审计。

如果你希望通过 Nginx 门户公开新的 WebUI 服务，你可以将服务定义添加到 [`infra_portal`](/docs/infra/param#infra_portal) 参数中。
例如，下面是 Pigsty 官方 Demo 使用的 Infra 门户配置，对外暴露了几种额外的服务：

```yaml
infra_portal:
  home         : { domain: home.pigsty.cc }
  grafana      : { domain: demo.pigsty.cc ,endpoint: "${admin_ip}:3000" ,websocket: true }
  prometheus   : { domain: p.pigsty.cc ,endpoint: "${admin_ip}:8428" }
  alertmanager : { domain: a.pigsty.cc ,endpoint: "${admin_ip}:9059" }
  blackbox     : { endpoint: "${admin_ip}:9115" }
  vmalert      : { endpoint: "${admin_ip}:8880" }
  # 新增的 Web 门户
  minio        : { domain: sss.pigsty  ,endpoint: "${admin_ip}:9001" ,scheme: https ,websocket: true }
  postgrest    : { domain: api.pigsty.cc  ,endpoint: "127.0.0.1:8884"   }
  pgadmin      : { domain: adm.pigsty.cc  ,endpoint: "127.0.0.1:8885"   }
  pgweb        : { domain: cli.pigsty.cc  ,endpoint: "127.0.0.1:8886"   }
  bytebase     : { domain: ddl.pigsty.cc  ,endpoint: "127.0.0.1:8887"   }
  gitea        : { domain: git.pigsty.cc  ,endpoint: "127.0.0.1:8889"   }
  wiki         : { domain: wiki.pigsty.cc ,endpoint: "127.0.0.1:9002"   }
  noco         : { domain: noco.pigsty.cc ,endpoint: "127.0.0.1:9003"   }
  supa         : { domain: supa.pigsty.cc ,endpoint: "127.0.0.1:8000", websocket: true }
```

完成 Nginx 上游服务定义后，使用以下配置与命令，向 Nginx 注册新的服务。

```bash
./infra.yml -t nginx_config           # 重新生成 Nginx 配置文件
./infra.yml -t nginx_launch           # 更新并应用 Nginx 配置。

# 您也可以使用 Ansible 手工重载 Nginx 配置
ansible infra -b -a 'nginx -s reload'  # 重载Nginx配置
```

如果你希望通过 HTTPS 访问，你必须删除 `files/pki/csr/pigsty.csr` 和 `files/pki/nginx/pigsty.{key,crt}` 以强制重新生成 Nginx SSL/TLS 证书以包括新上游的域名。
如果您希望使用权威机构签发的 SSL 证书，而不是 Pigsty 自签名 CA 颁发的证书，可以将其放置于 `/etc/nginx/conf.d/cert/` 目录中并修改相应配置：`/etc/nginx/conf.d/<name>.conf`。



----------------

## 如何手动向节点添加上游仓库的Repo文件？

Pigsty 有一个内置的包装脚本 `bin/repo-add`，它将调用 ansible 剧本 `node.yml` 来将 repo 文件添加到相应的节点。

```bash
bin/repo-add <selector> [modules]
bin/repo-add 10.10.10.10           # 为节点 10.10.10.10 添加 node 源
bin/repo-add infra   node,infra    # 为 infra 分组添加 node 和 infra 源
bin/repo-add infra   node,local    # 为 infra 分组添加节点仓库和本地pigsty源
bin/repo-add pg-test node,pgsql    # 为 pg-test 分组添加 node 和 pgsql 源
```

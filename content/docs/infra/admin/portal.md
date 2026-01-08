---
title: Nginx 管理
weight: 3103
description: Nginx 管理，Web 门户配置，Web Server，暴露上游服务
icon: fa-solid fa-door-open
categories: [任务]
---


Pigsty 在 INFRA 节点上安装 Nginx 作为所有 Web 服务的入口，默认监听在 80/443 标准端口上。

在 Pigsty 中，你可以通过修改配置清单，让 nginx 对外提供多种服务：

- 对外暴露 Grafana、VictoriaMetrics（VMUI）、Alertmanager、VictoriaLogs 等监控组件的 Web 界面
- 提供静态文件服务（如软件仓库、文档站，网站等）
- 代理自定义的应用服务（如内部应用、数据库管理界面，Docker 应用的界面等）
- 自动签发自签名的 HTTPS 证书，或者使用 certbot 申请免费的 Let's Encrypt 证书
- 通过不同的子域名，使用单一端口对外暴露服务


----------------

## 基础配置

您可以通过 [`infra_portal`](/docs/infra/param#infra_portal) 参数定制 Nginx 的行为，

```yaml
infra_portal:
  home: { domain: i.pigsty }
```


----------------

## 服务器参数

### 基本参数

| 参数         | 说明                       |
|------------|--------------------------|
| `domain`   | 可选的代理域名                  |
| `endpoint` | 上游服务地址（IP:PORT 或 socket） |
| `path`     | 静态内容的本地目录                |
| `scheme`   | 协议类型（http/https/tcp/udp） |

### SSL/TLS 选项

| 参数        | 说明                    |
|-----------|-----------------------|
| `certbot` | 启用 Let's Encrypt 证书管理 |
| `cert`    | 自定义证书文件路径             |
| `key`     | 自定义私钥文件路径             |

### 高级设置

| 参数          | 说明              |
|-------------|-----------------|
| `conf`      | 自定义 Nginx 配置模板  |
| `domains`   | 额外的域名列表         |
| `index`     | 启用目录列表          |
| `log`       | 自定义日志文件配置       |
| `websocket` | 启用 WebSocket 支持 |


----------------

## 配置示例

### 静态文件与目录列表

```yaml
repo: { domain: repo.pigsty.cc, path: "/www/repo", index: true }
```

### 自定义 SSL 证书

```yaml
secure_app: {
  domain: secure.pigsty.cc,
  endpoint: "${admin_ip}:8443",
  cert: "/etc/ssl/certs/custom.crt",
  key: "/etc/ssl/private/custom.key"
}
```

### TCP 流代理

```yaml
pg_primary: { domain: pg.pigsty.cc, endpoint: "10.10.10.11:5432", scheme: tcp }
```


----------------

## 管理命令

```bash
./infra.yml -t nginx           # 完整重新配置 Nginx
./infra.yml -t nginx_config    # 重新生成配置文件
./infra.yml -t nginx_launch    # 重启 Nginx 服务
./infra.yml -t nginx_cert      # 重新生成 SSL 证书
```


----------------

## 域名解析

有三种方式将域名解析到 Pigsty 服务器：

1. **公网域名**：通过 DNS 服务商配置
2. **内网 DNS 服务器**：配置内部 DNS 解析
3. **本地 hosts 文件**：修改 `/etc/hosts`

本地开发时，在 `/etc/hosts` 中添加：

```
<your_public_ip_address> i.pigsty g.pigsty p.pigsty a.pigsty
```


----------------

## HTTPS 配置

通过 [`nginx_sslmode`](../param/#nginx_sslmode) 参数配置 HTTPS：

| 模式         | 说明                                |
|------------|-----------------------------------|
| `disable`  | 仅监听 HTTP（`nginx_port`）              |
| `enable`   | 同时监听 HTTPS（`nginx_ssl_port`），默认签发自签名证书 |
| `enforce`  | 强制跳转到 HTTPS，所有 80 端口请求都会 301 重定向   |

对于自签名证书，有以下几种访问方式：
- 在浏览器中信任自签名 CA
- 使用浏览器安全绕过（Chrome 中输入 "thisisunsafe"）
- 为生产环境配置正规 CA 签发的证书


----------------

## 最佳实践

- 使用域名而非 IP:PORT 访问
- 正确配置 DNS 解析或 hosts 文件
- 为实时服务启用 WebSocket
- 生产环境部署 HTTPS
- 使用有意义的子域名组织服务
- 监控证书过期时间
- 集中化代理管理
- 利用静态文件服务托管文档


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


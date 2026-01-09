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

您可以通过 [`infra_portal`](/docs/infra/param#infra_portal) 参数定制 Nginx 的行为：

```yaml
infra_portal:
  home: { domain: i.pigsty }
```

`infra_portal` 是一个字典，每个键定义一个服务，值为服务的配置选项。
只有定义了 `domain` 的服务才会生成对应的 Nginx 配置文件。

- **`home`**：特殊的默认服务器，用于处理首页和内置监控组件的反向代理
- **代理服务**：通过 `endpoint` 指定上游服务地址，进行反向代理
- **静态服务**：通过 `path` 指定本地目录，提供静态文件服务


----------------

## 服务器参数

### 基本参数

| 参数         | 说明                       |
|------------|--------------------------|
| `domain`   | 可选的代理域名                  |
| `endpoint` | 上游服务地址（IP:PORT 或 socket） |
| `path`     | 静态内容的本地目录                |
| `scheme`   | 协议类型（http/https），默认 http |
| `domains`  | 额外的域名列表（别名）              |

### SSL/TLS 选项

| 参数              | 说明                           |
|-----------------|------------------------------|
| `certbot`       | 启用 Let's Encrypt 证书管理，值为证书名称 |
| `cert`          | 自定义证书文件路径                    |
| `key`           | 自定义私钥文件路径                    |
| `enforce_https` | 强制跳转 HTTPS（301 重定向）          |

### 高级设置

| 参数          | 说明               |
|-------------|------------------|
| `config`    | 自定义 Nginx 配置片段   |
| `index`     | 启用目录列表（用于静态服务）   |
| `log`       | 自定义日志文件名称        |
| `websocket` | 启用 WebSocket 支持  |
| `auth`      | 启用 Basic Auth 认证 |
| `realm`     | Basic Auth 认证提示语 |


----------------

## 配置示例

### 反向代理服务

```yaml
grafana: { domain: g.pigsty, endpoint: "${admin_ip}:3000", websocket: true }
pgadmin: { domain: adm.pigsty, endpoint: "127.0.0.1:8885" }
```

### 静态文件与目录列表

```yaml
repo: { domain: repo.pigsty.cc, path: "/www/repo", index: true }
```

### 自定义 SSL 证书

```yaml
secure_app:
  domain: secure.pigsty.cc
  endpoint: "${admin_ip}:8443"
  cert: "/etc/ssl/certs/custom.crt"
  key: "/etc/ssl/private/custom.key"
```

### 使用 Let's Encrypt 证书

```yaml
grafana:
  domain: demo.pigsty.cc
  endpoint: "${admin_ip}:3000"
  websocket: true
  certbot: pigsty.demo    # 证书名称，多个域名可共用同一证书
```

### 强制 HTTPS 跳转

```yaml
web.io:
  domain: en.pigsty.cc
  path: "/www/web.io"
  certbot: pigsty.doc
  enforce_https: true
```

### 自定义配置片段

```yaml
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
```


----------------

## 管理命令

```bash
./infra.yml -t nginx           # 完整重新配置 Nginx
./infra.yml -t nginx_config    # 重新生成配置文件
./infra.yml -t nginx_launch    # 重启 Nginx 服务
./infra.yml -t nginx_cert      # 重新生成 SSL 证书
./infra.yml -t nginx_certbot   # 使用 certbot 签发证书
./infra.yml -t nginx_reload    # 重新加载 Nginx 配置
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

Pigsty 内置了 dnsmasq 服务，可以通过 [`dns_records`](/docs/infra/param#dns_records) 参数配置内部 DNS 解析。


----------------

## HTTPS 配置

通过 [`nginx_sslmode`](/docs/infra/param#nginx_sslmode) 参数配置 HTTPS：

| 模式        | 说明                                     |
|-----------|----------------------------------------|
| `disable` | 仅监听 HTTP（`nginx_port`）                 |
| `enable`  | 同时监听 HTTPS（`nginx_ssl_port`），默认签发自签名证书 |
| `enforce` | 强制跳转到 HTTPS，所有 80 端口请求都会 301 重定向       |

对于自签名证书，有以下几种访问方式：

- 在浏览器中信任自签名 CA（下载地址 `http://<ip>/ca.crt`）
- 使用浏览器安全绕过（Chrome 中输入 "thisisunsafe"）
- 为生产环境配置正规 CA 签发的证书或使用 Let's Encrypt


----------------

## Certbot 证书

Pigsty 支持使用 Certbot 申请免费的 Let's Encrypt 证书。

### 启用 Certbot

1. 在 `infra_portal` 中为服务添加 `certbot` 参数，指定证书名称
2. 配置 [`certbot_email`](/docs/infra/param#certbot_email) 为有效的邮箱地址
3. 设置 [`certbot_sign`](/docs/infra/param#certbot_sign) 为 `true` 在部署时自动签发

```yaml
certbot_sign: true
certbot_email: your@email.com
```

### 手动签发证书

```bash
./infra.yml -t nginx_certbot   # 签发 Let's Encrypt 证书
```

或直接运行服务器上的脚本：

```bash
/etc/nginx/sign-cert           # 签发证书
/etc/nginx/link-cert           # 链接证书到 Nginx 配置目录
```

更多信息，请参阅 [Certbot：申请与更新 HTTPS 证书](/docs/infra/admin/cert)


----------------

## 默认首页

Pigsty 的默认首页 `home` 服务器提供以下内置路由：

| 路径                    | 说明                       |
|-----------------------|--------------------------|
| `/`                   | 首页导航                     |
| `/zh`                 | 中文首页                     |
| `/ui/`                | Grafana 监控面板             |
| `/vmetrics/`          | VictoriaMetrics VMUI     |
| `/vlogs/`             | VictoriaLogs 日志查询        |
| `/vtraces/`           | VictoriaTraces 链路追踪      |
| `/vmalert/`           | VMAlert 告警规则             |
| `/alertmgr/`          | AlertManager 告警管理        |
| `/blackbox/`          | Blackbox Exporter        |
| `/pev`                | PostgreSQL Explain 可视化工具 |
| `/haproxy/<cluster>/` | HAProxy 管理界面（如有）         |

这些路由允许通过单一入口访问所有监控组件，无需配置多个域名。


----------------

## 最佳实践

- 使用域名而非 IP:PORT 访问服务
- 正确配置 DNS 解析或 hosts 文件
- 为实时应用启用 WebSocket（如 Grafana、Jupyter）
- 生产环境启用 HTTPS
- 使用有意义的子域名组织服务
- 监控 Let's Encrypt 证书过期时间
- 利用 `config` 参数添加自定义 Nginx 配置


----------------

## 完整示例

以下是 Pigsty 公开演示站点 [demo.pigsty.cc](https://demo.pigsty.cc) 使用的 Nginx 配置：

```yaml
infra_portal:
  home         : { domain: i.pigsty }
  cc           : { domain: pigsty.cc      ,path: "/www/pigsty.cc"   ,cert: /etc/cert/pigsty.cc.crt ,key: /etc/cert/pigsty.cc.key }
  minio        : { domain: m.pigsty.cc    ,endpoint: "${admin_ip}:9001" ,scheme: https ,websocket: true }
  postgrest    : { domain: api.pigsty.cc  ,endpoint: "127.0.0.1:8884" }
  pgadmin      : { domain: adm.pigsty.cc  ,endpoint: "127.0.0.1:8885" }
  pgweb        : { domain: cli.pigsty.cc  ,endpoint: "127.0.0.1:8886" }
  bytebase     : { domain: ddl.pigsty.cc  ,endpoint: "127.0.0.1:8887" }
  jupyter      : { domain: lab.pigsty.cc  ,endpoint: "127.0.0.1:8888" ,websocket: true }
  gitea        : { domain: git.pigsty.cc  ,endpoint: "127.0.0.1:8889" }
  wiki         : { domain: wiki.pigsty.cc ,endpoint: "127.0.0.1:9002" }
  noco         : { domain: noco.pigsty.cc ,endpoint: "127.0.0.1:9003" }
  supa         : { domain: supa.pigsty.cc ,endpoint: "10.10.10.10:8000" ,websocket: true }
  dify         : { domain: dify.pigsty.cc ,endpoint: "10.10.10.10:8001" ,websocket: true }
  odoo         : { domain: odoo.pigsty.cc ,endpoint: "127.0.0.1:8069"   ,websocket: true }
  mm           : { domain: mm.pigsty.cc   ,endpoint: "10.10.10.10:8065" ,websocket: true }
```



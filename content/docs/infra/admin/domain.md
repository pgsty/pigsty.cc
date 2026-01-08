---
title: 域名管理
weight: 3105
description: 配置本地或公网域名访问 Pigsty 服务
icon: fa-solid fa-globe
categories: [任务]
---


使用域名代替 IP 地址访问 Pigsty 的各项 Web 服务。


----------------

## 快速开始

将以下静态解析记录添加到 `/etc/hosts`：

```
10.10.10.10 i.pigsty g.pigsty p.pigsty a.pigsty
```

将 IP 地址替换为实际 Pigsty 节点的 IP。


----------------

## 为什么使用域名

- 比 IP 地址更易于记忆
- 灵活指向不同 IP
- 通过 Nginx 统一管理服务
- 支持 HTTPS 加密
- 防止某些地区的 ISP 劫持
- 允许通过代理访问内部绑定的服务


----------------

## DNS 机制

**DNS 协议**：将域名解析为 IP 地址。多个域名可以指向同一个 IP。

**HTTP 协议**：使用 Host 头将请求路由到同一端口（80/443）上的不同站点。


----------------

## 默认域名

Pigsty 预定义了以下默认域名：

| 域名         | 服务               | 端口     | 用途                 |
|------------|------------------|--------|--------------------|
| `i.pigsty` | Nginx            | 80/443 | 默认首页、本地仓库与统一入口 |
| `g.pigsty` | Grafana          | 3000   | 监控与可视化           |
| `p.pigsty` | VictoriaMetrics  | 8428   | VMUI/PromQL 入口     |
| `a.pigsty` | AlertManager     | 9059   | 告警路由             |


----------------

## 解析方式

### 本地静态解析

在客户端机器的 `/etc/hosts` 中添加条目：

```bash
# Linux/macOS
sudo vim /etc/hosts

# Windows
notepad C:\Windows\System32\drivers\etc\hosts
```

添加内容：

```
10.10.10.10 i.pigsty g.pigsty p.pigsty a.pigsty
```

### 内网动态解析

在内部 DNS 服务器上配置这些域名记录。

### 公网域名

购买域名并添加 DNS A 记录指向公网 IP。


----------------

## HTTPS 证书

Pigsty 默认使用自签名证书。可选方案包括：

- 忽略警告，使用 HTTP
- 信任自签名 CA 证书
- 使用真实 CA 或通过 Certbot 获取免费公网域名证书

详见 [CA 与证书](./cert/) 文档。


----------------

## 扩展域名

Pigsty 扩展预留了以下域名：

| 域名            | 用途         |
|---------------|------------|
| `adm.pigsty`  | 管理界面       |
| `ddl.pigsty`  | DDL 管理     |
| `cli.pigsty`  | 命令行界面      |
| `api.pigsty`  | API 服务     |
| `lab.pigsty`  | 实验环境       |
| `git.pigsty`  | Git 服务     |
| `wiki.pigsty` | Wiki 文档    |
| `noco.pigsty` | NocoDB     |
| `supa.pigsty` | Supabase   |
| `dify.pigsty` | Dify AI    |
| `odoo.pigsty` | Odoo ERP   |
| `mm.pigsty`   | Mattermost |

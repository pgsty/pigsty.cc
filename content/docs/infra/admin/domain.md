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

| 域名         | 服务              | 端口      | 用途              |
|------------|-----------------|---------|-----------------|
| `i.pigsty` | Nginx           | 80/443  | 默认首页、本地仓库与统一入口  |
| `g.pigsty` | Grafana         | 3000    | 监控与可视化          |
| `p.pigsty` | VictoriaMetrics | 8428    | VMUI/PromQL 入口  |
| `a.pigsty` | AlertManager    | 9059    | 告警路由            |
| `m.pigsty` | MinIO           | 9001    | 对象存储控制台         |
{.full-width}


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
10.10.10.10 i.pigsty g.pigsty p.pigsty a.pigsty m.pigsty
```

### 内网动态解析

Pigsty 内置了 dnsmasq 服务作为内网 DNS 服务器。配置被管理的节点使用 INFRA 节点作为 DNS 服务器：

```yaml
node_dns_servers: ['${admin_ip}']   # 使用 INFRA 节点作为 DNS 服务器
node_dns_method: add                # 将其添加到现有 DNS 服务器列表
```

通过 [`dns_records`](/docs/infra/param#dns_records) 参数配置 dnsmasq 解析的域名记录：

```yaml
dns_records:
  - "${admin_ip} i.pigsty"
  - "${admin_ip} m.pigsty sss.pigsty api.pigsty adm.pigsty cli.pigsty ddl.pigsty"
```

### 公网域名

购买域名并添加 DNS A 记录指向公网 IP：

1. 在域名服务商处购买域名（如 `example.com`）
2. 配置 A 记录指向服务器公网 IP
3. 在 [`infra_portal`](/docs/infra/param#infra_portal) 中使用真实域名


----------------

## 内置 DNS 服务

Pigsty 在 INFRA 节点上运行 dnsmasq 作为 DNS 服务器。

### 相关参数

| 参数                                                     | 默认值             | 说明           |
|--------------------------------------------------------|-----------------|--------------|
| [`dns_enabled`](/docs/infra/param#dns_enabled)         | `true`          | 是否启用 DNS 服务  |
| [`dns_port`](/docs/infra/param#dns_port)               | `53`            | DNS 监听端口     |
| [`dns_records`](/docs/infra/param#dns_records)         | 见下文             | 默认 DNS 记录列表  |
{.full-width}

默认的 DNS 记录：

```yaml
dns_records:
  - "${admin_ip} i.pigsty"
  - "${admin_ip} m.pigsty sss.pigsty api.pigsty adm.pigsty cli.pigsty ddl.pigsty"
```

### 动态 DNS 注册

Pigsty 会自动为 PostgreSQL 集群和实例注册 DNS 记录：

- **实例级 DNS**：`<pg_instance>` 指向实例 IP（如 `pg-meta-1`）
- **集群级 DNS**：`<pg_cluster>` 指向主库 IP 或 VIP（如 `pg-meta`）

集群级 DNS 目标由 [`pg_dns_target`](/docs/pgsql/param#pg_dns_target) 参数控制：

| 值         | 说明                  |
|-----------|---------------------|
| `auto`    | 自动选择：有 VIP 用 VIP，否则用主库 IP |
| `primary` | 始终指向主库 IP            |
| `vip`     | 始终指向 VIP（需启用 VIP）    |
| `none`    | 不注册集群 DNS            |
| `<ip>`    | 指定固定 IP 地址          |
{.full-width}

通过 [`pg_dns_suffix`](/docs/pgsql/param#pg_dns_suffix) 可为集群 DNS 添加后缀。


----------------

## 节点 DNS 配置

Pigsty 管理被纳管节点的 DNS 配置。

### 静态 hosts 记录

通过 [`node_etc_hosts`](/docs/node/param#node_etc_hosts) 配置静态 `/etc/hosts` 记录：

```yaml
node_etc_hosts:
  - "${admin_ip} i.pigsty sss.pigsty"
  - "10.10.10.20 db.example.com"
```

### DNS 服务器配置

| 参数                                                         | 默认值                | 说明              |
|------------------------------------------------------------|--------------------|--------------------|
| [`node_dns_method`](/docs/node/param#node_dns_method)       | `add`              | DNS 配置方式          |
| [`node_dns_servers`](/docs/node/param#node_dns_servers)     | `['${admin_ip}']`  | DNS 服务器列表         |
| [`node_dns_options`](/docs/node/param#node_dns_options)     | 见下文                | resolv.conf 选项    |
{.full-width}

`node_dns_method` 可选值：

| 值           | 说明                  |
|-------------|---------------------|
| `add`       | 添加到现有 DNS 服务器列表前面  |
| `overwrite` | 完全覆盖 DNS 服务器配置     |
| `none`      | 不修改 DNS 配置         |
{.full-width}

默认的 DNS 选项：

```yaml
node_dns_options:
  - options single-request-reopen timeout:1
```


----------------

## HTTPS 证书

Pigsty 默认使用自签名证书。可选方案包括：

- 忽略警告，使用 HTTP
- 信任自签名 CA 证书（下载地址 `http://<ip>/ca.crt`）
- 使用真实 CA 或通过 Certbot 获取免费公网域名证书

详见 [CA 与证书](./cert/) 文档。


----------------

## 扩展域名

Pigsty 扩展预留了以下域名用于各种应用服务：

| 域名            | 用途           |
|---------------|--------------|
| `adm.pigsty`  | PgAdmin 管理界面 |
| `ddl.pigsty`  | Bytebase DDL 管理 |
| `cli.pigsty`  | PgWeb 命令行界面  |
| `api.pigsty`  | PostgREST API 服务 |
| `lab.pigsty`  | Jupyter 实验环境 |
| `git.pigsty`  | Gitea Git 服务 |
| `wiki.pigsty` | Wiki.js 文档   |
| `noco.pigsty` | NocoDB      |
| `supa.pigsty` | Supabase    |
| `dify.pigsty` | Dify AI     |
| `odoo.pigsty` | Odoo ERP    |
| `mm.pigsty`   | Mattermost  |
{.full-width}

使用这些域名需要在 [`infra_portal`](/docs/infra/param#infra_portal) 中配置相应的服务。


----------------

## 管理命令

```bash
./infra.yml -t dns            # 完整配置 DNS 服务
./infra.yml -t dns_config     # 重新生成 dnsmasq 配置
./infra.yml -t dns_record     # 更新默认 DNS 记录
./infra.yml -t dns_launch     # 重启 dnsmasq 服务

./node.yml -t node_hosts      # 配置节点 /etc/hosts
./node.yml -t node_resolv     # 配置节点 DNS 解析器

./pgsql.yml -t pg_dns         # 注册 PostgreSQL DNS 记录
./pgsql.yml -t pg_dns_ins     # 仅注册实例级 DNS
./pgsql.yml -t pg_dns_cls     # 仅注册集群级 DNS
```



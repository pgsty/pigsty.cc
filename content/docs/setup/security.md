---
title: 安全建议
weight: 290
description: 快速上手和单机部署的基本安全检查。
icon: fas fa-shield-halved
module: [PIGSTY]
categories: [教程]
---

默认配置适用于本地演示和受信内网中的开发测试。只要部署可能被其他主机访问，就应至少完成凭据、网络和关键文件三项检查。

生产环境还应参考 [**安全模型**](/docs/concept/sec/level)、[**合规实践**](/docs/concept/sec/compliance) 和 [**安全考量**](/docs/deploy/security/)。


----------------

## 密码

Pigsty 的默认凭据公开记录在源码和文档中，不能直接用于生产。

配置向导可以随机化其识别的内置参数和示例凭据：

```bash
./configure -g
```

`configure -g` 不会替换以下内容：

- pgBackRest 的 `cipher_pass`；
- `ha/safe` 中的 MinIO 用户和部分示例口令；
- 用户自行添加的数据库、对象存储或应用凭据。

生成完成后，应检查 `pigsty.yml`，逐项替换未覆盖的凭据。配置向导会在终端输出生成的密码，因此终端记录和自动化日志也应按敏感信息保护。

完整范围见 [**默认凭据**](/docs/concept/sec/compliance#默认凭据)。


----------------

## 防火墙

[**`node_firewall_mode`**](/docs/node/param#node_firewall_mode) 默认为 `zone`，信任 [**`node_firewall_intranet`**](/docs/node/param#node_firewall_intranet) 定义的内网，并限制公网放行端口。

| 端口 | 服务 | 默认公网状态 |
|:---:|:---|:---|
| `22` | SSH | 放行 |
| `80` | Nginx HTTP | 放行 |
| `443` | Nginx HTTPS | 放行 |
| `5432` | PostgreSQL | 基础默认值不放行；演示配置 `pigsty.yml` 额外放行 |
{.full-width}

生产部署通常应从演示配置中移除 `5432`。如果业务需要直接连接数据库，应在云安全组、防火墙和 HBA 中同时限制来源地址。

还应检查内网定义是否符合实际信任边界。默认 RFC 1918 地址段可能覆盖范围过大，办公网、容器网段和其他租户网络不应自动视为可信。


----------------

## 文件

以下文件和目录包含高敏感信息：

- `pigsty.yml`：系统与业务凭据、节点和服务配置；
- `files/pki/ca/ca.key`：本地 CA 私钥；
- 管理用户 SSH 私钥：用于访问纳管节点；
- `files/pki/misc/*.key`：客户端证书私钥；
- `/pg/tmp/pg-user-*.sql`：用户创建过程中生成的明文口令 SQL。

应限制管理节点和配置仓库访问，避免将完整配置或私钥提交到公开仓库，并为 CA 私钥和必要配置建立受控备份。


----------------

## 相关文档

- [**安全与合规**](/docs/concept/sec/)：安全章节入口
- [**身份认证**](/docs/concept/sec/auth)：HBA、密码与客户端证书
- [**加密通信**](/docs/concept/sec/ca)：CA、TLS 与服务端验证
- [**生产安全考量**](/docs/deploy/security/)：完整上线检查

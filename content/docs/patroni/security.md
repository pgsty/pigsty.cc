---
title: "安全注意事项"
weight: 160
icon: fa-solid fa-lock
description: "DCS、REST API 及凭据处理的安全注意事项。"
module: [PATRONI]
category: [Concept]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/security.html

<a id="security"></a>
Patroni 集群有两个需要防范未授权访问的接口：分布式配置存储（DCS）和 Patroni REST API。

--------

## 保护 DCS

Patroni 和 [**patronictl**](/docs/patroni/patronictl#patronictl) 都会向 DCS 读写数据。

尽管 DCS 本身不包含任何敏感信息，但它允许修改部分 Patroni/PostgreSQL 配置，因此首要保护对象就是 DCS 本身。

具体的保护方式取决于所使用的 DCS 类型。各类 DCS 的认证和加密参数（令牌/基本认证/客户端证书）详见 [**配置说明**](/docs/patroni/config/yaml#yaml)。

通用建议是为所有 DCS 通信启用 TLS。

--------

## 保护 REST API

保护 REST API 是一项更为复杂的任务。

Patroni REST API 的使用方包括：Patroni 自身（领导者竞选期间）、[**patronictl**](/docs/patroni/patronictl#patronictl) 工具（故障转移/主从切换/重新初始化/重启/重载等操作）、HAProxy 或其他负载均衡器（HTTP 健康检查），以及监控系统。

从安全角度来看，REST API 端点分为两类：安全端点（**`GET`** 请求，仅读取信息）和非安全端点（**`PUT`**、**`POST`**、**`PATCH`**、**`DELETE`** 请求，会变更节点状态）。

非安全端点可通过设置 **`restapi.authentication.username`** 和 **`restapi.authentication.password`** 参数启用 HTTP 基本认证加以保护。安全端点在未启用 TLS 的情况下无法得到保护。

当 REST API 启用 TLS 且已建立 PKI 基础设施时，可对 API 服务端和客户端实现所有端点的双向认证。

**`restapi`** 配置节的参数用于配置客户端对服务端的 TLS 认证。**`verify_client`** 参数控制 API 服务端的验证策略：**`required`** 表示对所有 API 调用（含安全与非安全端点）都要求客户端证书验证通过；**`optional`** 表示仅对非安全 API 调用要求；**`none`** 表示对任何调用都不要求。

**`ctl`** 配置节的参数用于配置客户端（即与 patroni 共用同一配置文件的 [**patronictl**](/docs/patroni/patronictl#patronictl) 工具）对服务端的 TLS 认证。将 **`insecure: true`** 可禁用客户端对服务端证书的验证。TLS 客户端参数的详细说明请参阅 [**配置说明**](/docs/patroni/config/yaml#patronictl_settings)。

保护 PostgreSQL 数据库本身免受未授权访问超出了本文档的范围，相关内容请参阅 <https://www.postgresql.org/docs/current/client-authentication.html>。

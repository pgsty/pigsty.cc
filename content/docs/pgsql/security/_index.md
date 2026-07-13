---
title: PostgreSQL 安全
linkTitle: 安全
weight: 1400
description: PostgreSQL 身份认证、访问控制、加密通信、数据保护与安全运维入口。
icon: fa-solid fa-shield-halved
module: [PGSQL]
categories: [参考]
---

PostgreSQL 安全由身份认证、权限控制、网络边界、加密通信、数据保护和运维流程共同构成。Pigsty 提供这些机制的配置入口，但部署方仍需根据环境完成加固、验证和持续审计。


---------------------

## 概念与边界

| 主题 | 内容 |
|:---|:---|
| [**安全与合规**](/docs/concept/sec/) | 默认状态、能力边界与加固路径 |
| [**身份认证**](/docs/concept/sec/auth) | HBA、SCRAM、证书认证与凭据管理 |
| [**访问控制**](/docs/concept/sec/ac) | 内置角色、默认权限、数据库 ACL 与实例访问边界 |
| [**加密通信**](/docs/concept/sec/ca) | CA、TLS、服务端身份验证与证书轮换 |
| [**数据安全**](/docs/concept/sec/data) | 页校验和、复制、备份、PITR、审计与日志 |
| [**合规实践**](/docs/concept/sec/compliance) | 上线检查、控制映射与证据要求 |
{.full-width}


---------------------

## 配置参考

- [**HBA 配置**](/docs/pgsql/config/hba)：声明 PostgreSQL 与 PgBouncer 的认证规则。
- [**访问控制配置**](/docs/pgsql/config/acl)：配置默认角色、业务用户、对象权限与数据库 ACL。
- [**用户配置**](/docs/pgsql/config/user)：定义用户属性、角色成员关系和连接池选项。
- [**CRIT 参数模板**](/docs/pgsql/template/crit)：同步复制、校验和、日志与 watchdog 等关键参数。


---------------------

## 管理与验证

- [**用户管理**](/docs/pgsql/admin/user)：创建、更新和删除用户。
- [**HBA 管理**](/docs/pgsql/admin/hba)：刷新规则、检查生效配置并排查认证问题。
- [**安全考量**](/docs/deploy/security)：生产部署的加固与验收清单。
- [**安全建议**](/docs/setup/security)：安装前最基本的密码、网络和文件检查。

配置清单描述期望状态。验收时还应检查运行节点上的 HBA、证书、监听端口和敏感文件，并通过 PostgreSQL 系统目录核对实际角色与权限。

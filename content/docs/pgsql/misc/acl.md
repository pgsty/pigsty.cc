---
title: 访问控制
weight: 1405
description: PostgreSQL 访问控制的概念、配置与管理入口。
icon: fa-solid fa-lock
module: [PGSQL]
categories: [参考]
---

Pigsty 的访问控制文档已按用途拆分：

- [**访问控制概念**](/docs/concept/sec/ac)：角色模型、默认权限、数据库 ACL 和实例隔离边界。
- [**访问控制配置**](/docs/pgsql/config/acl)：`pg_default_roles`、`pg_users`、`pg_default_privileges` 等参数。
- [**身份认证**](/docs/concept/sec/auth)：HBA、SCRAM、证书认证与凭据管理。
- [**HBA 配置**](/docs/pgsql/config/hba)：PostgreSQL 与 PgBouncer 规则语法。
- [**用户管理**](/docs/pgsql/admin/user)：在现有集群中创建、更新和删除用户。

`dbrole_offline` 只提供独立的只读对象权限，不会自动限制实例范围。若要仅允许其访问离线实例，应为对应 HBA 规则显式设置 `role: offline`，并验证在线与离线实例生成的 `pg_hba.conf`。

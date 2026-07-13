---
title: 访问控制
weight: 233
description: Pigsty 内置四层角色模型与默认权限模板，将最小权限原则落实为可声明、可复用的集群配置。
icon: fa-solid fa-lock
module: [PIGSTY, PGSQL]
categories: [概念]
---

[**认证**](/docs/concept/sec/auth) 回答“你是谁”，授权回答“你能做什么”。

权限失控很少是因为缺少机制 —— PostgreSQL 的 `GRANT` 与 `REVOKE` 足够精细。问题在于缺少一套被默认执行的约定：
业务上线时直接把账号设为属主；临时排障授予超级用户后没有及时回收；新表创建后遗漏授权，最终在生产环境触发权限错误。

Pigsty 提供了一套开箱即用的基础访问控制模型作为起点：**四层角色、默认权限与数据库隔离**。
它减少了逐库手工授权，但仍需要部署方按业务边界分配角色，并定期核对实际权限。

[![pigsty-acl.jpg](/img/pigsty/acl.jpg)](/docs/pgsql/config/acl)


---------------------

<span id="四层角色模型"></span>
<span id="默认角色与系统用户"></span>

## 角色体系

Pigsty 默认创建四个 **业务角色** —— 它们不可登录，作为权限组使用：

| 角色                 | 属性        | 继承                              | 用途                                                   |
|:-------------------|:----------|:--------------------------------|:-----------------------------------------------------|
| `dbrole_readonly`  | `NOLOGIN` | -                               | 全局只读访问                                               |
| `dbrole_readwrite` | `NOLOGIN` | `dbrole_readonly`               | 全局读写（DML），业务账号的默认选择                                  |
| `dbrole_admin`     | `NOLOGIN` | `dbrole_readwrite`、`pg_monitor` | 对象创建（DDL），管理与发布流程使用                                  |
| `dbrole_offline`   | `NOLOGIN` | -                               | 独立只读角色，可配合 [**HBA**](/docs/concept/sec/auth) 限制到离线实例 |
{.full-width}

以及四个 **系统用户**，各自只承担一种职责：

| 用户               | 属性            | 用途                           |
|:-----------------|:--------------|:-----------------------------|
| `postgres`       | `SUPERUSER`   | 数据库超级用户：不设密码，仅限本地 `ident` 登录 |
| `replicator`     | `REPLICATION` | 流复制与备份，附带 `pg_monitor` 与只读权限 |
| `dbuser_dba`     | `SUPERUSER`   | 日常管理用户，继承 `dbrole_admin`     |
| `dbuser_monitor` | -             | 监控用户，仅持有 `pg_monitor` 与只读权限  |
{.full-width}

业务账号通过 `roles` 字段挂载到角色组上，权限随继承而来：

```yaml
pg_users:
  - { name: dbuser_app    ,password: '...' ,roles: [dbrole_readwrite] }  # 常规业务账号
  - { name: dbuser_report ,password: '...' ,roles: [dbrole_readonly]  }  # 报表只读账号
  - { name: dbuser_etl    ,password: '...' ,roles: [dbrole_offline]   }  # 离线 ETL 账号
```

角色体系本身也是声明的一部分（[`pg_default_roles`](/docs/pgsql/param#pg_default_roles)），可以定制。
该参数是一份完整列表；调整时应保留所需的系统用户与默认角色，并同步检查 HBA、默认权限和脚本中的角色引用。


---------------------

<span id="默认权限策略"></span>

## 默认权限

角色解决了“权限授予谁”，还剩下另一半问题：**新创建的对象如何自动获得正确的权限？**

PostgreSQL 的原生答案是 `ALTER DEFAULT PRIVILEGES`。Pigsty 通过 [`pg_default_privileges`](/docs/pgsql/param#pg_default_privileges) 将其声明化：

```yaml
pg_default_privileges:            # 管理身份创建的新对象，自动应用以下权限
  - GRANT USAGE      ON SCHEMAS   TO dbrole_readonly
  - GRANT SELECT     ON TABLES    TO dbrole_readonly
  - GRANT SELECT     ON SEQUENCES TO dbrole_readonly
  - GRANT EXECUTE    ON FUNCTIONS TO dbrole_readonly
  - GRANT USAGE      ON SCHEMAS   TO dbrole_offline
  - GRANT SELECT     ON TABLES    TO dbrole_offline
  - GRANT SELECT     ON SEQUENCES TO dbrole_offline
  - GRANT EXECUTE    ON FUNCTIONS TO dbrole_offline
  - GRANT INSERT     ON TABLES    TO dbrole_readwrite
  - GRANT UPDATE     ON TABLES    TO dbrole_readwrite
  - GRANT DELETE     ON TABLES    TO dbrole_readwrite
  - GRANT USAGE      ON SEQUENCES TO dbrole_readwrite
  - GRANT UPDATE     ON SEQUENCES TO dbrole_readwrite
  - GRANT TRUNCATE   ON TABLES    TO dbrole_admin
  - GRANT REFERENCES ON TABLES    TO dbrole_admin
  - GRANT TRIGGER    ON TABLES    TO dbrole_admin
  - GRANT CREATE     ON SCHEMAS   TO dbrole_admin
```

只读角色获得查询与执行权限，读写角色叠加 DML，管理角色再增加对象管理所需的 DDL 辅助权限。

### 所有权约定

默认权限机制有一个经常被忽略的前提：**它只对配置了默认权限的对象创建者生效**。Pigsty 会为以下身份配置默认权限：

- 数据库系统用户 `pg_dbsu`，默认为 `postgres`；
- 管理用户 `pg_admin_username`，默认为 `dbuser_dba`；
- `dbrole_admin`；
- 每个在 `pg_databases` 中声明的数据库属主。

应用 DDL 通常应使用声明的数据库属主；平台级管理与发布操作可以使用 `dbuser_dba`，或先 `SET ROLE dbrole_admin`。由其他用户直接创建的对象不会自动进入这套默认权限体系，除非另行为该用户配置 `ALTER DEFAULT PRIVILEGES`。

这不是 Pigsty 的限制，而是 PostgreSQL 默认权限机制本身的工作方式：默认权限跟随对象创建者，而不是数据库或会话中的登录用户名自动传播。


---------------------

## 数据库隔离

默认情况下，PostgreSQL 向 `PUBLIC` 授予数据库 `CONNECT` 权限。只要 HBA 同时允许连接，可登录用户就可能进入并不属于自己的数据库；多业务共享集群时尤其需要收敛这一默认值。

在数据库定义中声明 `revokeconn`，即可回收公共连接权限：

```yaml
pg_databases:
  - { name: app_a ,owner: dbuser_a ,revokeconn: true }
  - { name: app_b ,owner: dbuser_b ,revokeconn: true }
```

启用后，该数据库上 `PUBLIC` 的 `CONNECT` 权限被撤销，只显式授予复制、监控、管理用户与数据库属主 ——
属主获得带 `GRANT OPTION` 的连接权限，可以自行决定向谁开放访问。在没有其他角色继承或额外授权的前提下，`app_a` 的账号将无法连接 `app_b`。

与之配套，集群初始化时还会回收数据库与 `public` 模式上 `PUBLIC` 的 `CREATE` 权限：

```sql
REVOKE CREATE ON DATABASE app FROM PUBLIC;
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
```

普通用户不再能在公共数据库或模式中随意创建对象，从而降低不安全 `search_path` 与对象覆盖带来的风险。
PostgreSQL 15 起已经收紧 `public` 模式的默认 `CREATE` 权限；Pigsty 将这项边界统一应用到所有受支持的大版本上。


---------------------

## 离线角色与实例隔离

`dbrole_offline` 的设计用途，是为 ETL、报表和个人查询提供一组独立的只读权限。但角色本身只控制对象权限，并不会自动限制用户连接到哪类实例。

当前默认 HBA 中，`+dbrole_offline` 的内网规则没有设置 `role`，因此会应用到所有实例。要把它限制到 `pg_role: offline` 的专用实例，或标记了 `pg_offline_query: true` 的普通从库，需要在完整的 `pg_default_hba_rules` 列表中修改这一条规则：

```yaml
pg_default_hba_rules:
  # 复制并保留其他默认规则，仅修改离线角色这一条
  - { user: '+dbrole_offline', db: all, addr: intra, auth: pwd, role: offline, order: 650,
      title: 'allow offline users on offline instances' }
```

定义 `pg_default_hba_rules` 会替换整组默认值，不能只保留示例中的一条。只有当 HBA 已按实例角色过滤，且用户没有同时继承其他可登录角色时，这类高消耗查询才会被限制到离线实例。资源隔离还应配合 [**独立服务入口**](/docs/concept/ha/svc)、连接数和查询资源控制。


---------------------

## 数据库之外

最小权限原则同样贯彻到主机层面：

- 超级用户 `postgres` 不设密码，只能本地 `ident` 登录；其 sudo 权限默认限制在数据库相关服务的启停与日志查看（[`pg_dbsu_sudo`](/docs/pgsql/param#pg_dbsu_sudo)：`limit`）。
- 监控用户 `dbuser_monitor` 默认持有 `pg_monitor`、只读角色与专用 `monitor` 模式权限，不具备业务表写权限。
- 复制用户 `replicator` 被显式授予备份恢复所需的目录函数执行权限，而不是笼统的超级用户。


---------------------

## 接下来

- 📖 完整的角色与权限配置参考：[**访问控制**](/docs/pgsql/config/acl)
- 🔑 [**身份认证**](/docs/concept/sec/auth)：进入授权体系之前的第一道闸门
- 🔒 [**数据安全**](/docs/concept/sec/data)：权限之外的数据保护

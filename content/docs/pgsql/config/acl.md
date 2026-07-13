---
title: 访问控制
weight: 70
description: Pigsty 内置角色、用户、默认权限与数据库 ACL 的配置参考。
icon: fa-solid fa-lock
module: [PGSQL]
categories: [参考]
---

> 访问控制由角色、对象权限、数据库 ACL 与 HBA 共同决定。本节聚焦配置参数；设计与边界见 [**访问控制概念**](/docs/concept/sec/ac)。

Pigsty 预置了一套精简的 ACL 模型，通过以下参数描述：

- `pg_default_roles`：系统角色与系统用户。
- `pg_users`：业务用户与角色。
- `pg_default_privileges`：管理员/属主新建对象时的默认权限。
- `pg_revoke_public`、`pg_default_schemas`、`pg_default_extensions`：控制 `template1` 的默认行为。

这些参数应与 HBA 和数据库定义一起管理，形成可复现的访问控制配置。


----------------

## 默认角色体系（pg_default_roles）

默认包含 4 个业务角色 + 4 个系统用户：

| 名称               | 类型      | 说明                                             |
|--------------------|-----------|--------------------------------------------------|
| `dbrole_readonly`  | `NOLOGIN` | 所有业务共用，拥有 SELECT/USAGE                  |
| `dbrole_readwrite` | `NOLOGIN` | 继承只读角色，并拥有 INSERT/UPDATE/DELETE         |
| `dbrole_admin`     | `NOLOGIN` | 继承 `pg_monitor` + 读写角色，可建对象和触发器      |
| `dbrole_offline`   | `NOLOGIN` | 独立只读角色；实例范围需要通过 HBA 显式限制         |
| `postgres`         | 用户      | 系统超级用户，与 `pg_dbsu` 同名                   |
| `replicator`       | 用户      | 用于流复制与备份，继承监控与只读权限                |
| `dbuser_dba`       | 用户      | 主要管理员账号，同时同步到 pgbouncer               |
| `dbuser_monitor`   | 用户      | 监控账号，具备 `pg_monitor` 权限，默认记录慢 SQL     |
{.full-width}

这些定义位于 `pg_default_roles`。该参数是完整列表；自定义时应复制并保留所需的默认角色和系统用户，再按依赖顺序添加新角色。更改角色名称后，还必须同步更新 HBA、默认权限和脚本中的引用。


----------------

## 默认用户与凭据参数

系统用户的用户名/密码由以下参数控制：

| 参数                         | 默认值             | 作用                           |
|------------------------------|--------------------|--------------------------------|
| `pg_dbsu`                    | `postgres`         | 数据库/系统超级用户            |
| `pg_dbsu_password`           | 空字符串           | dbsu 密码（默认不启用）        |
| `pg_replication_username`    | `replicator`       | 复制用户名称                   |
| `pg_replication_password`    | `DBUser.Replicator`| 复制用户密码                   |
| `pg_admin_username`          | `dbuser_dba`       | 管理员用户名                   |
| `pg_admin_password`          | `DBUser.DBA`       | 管理员密码                     |
| `pg_monitor_username`        | `dbuser_monitor`   | 监控用户                       |
| `pg_monitor_password`        | `DBUser.Monitor`   | 监控用户密码                   |
{.full-width}

修改这些参数后，应同步更新 `pg_default_roles` 中对应用户的定义，避免用户名和角色属性不一致。


----------------

## 业务角色与授权（pg_users）

业务用户通过 `pg_users` 声明（详细字段见 [用户配置](/docs/pgsql/config/user)），其中 `roles` 字段控制授予的业务角色。

示例：创建只读/读写用户各一名：

```yaml
pg_users:
  - { name: app_reader,  password: DBUser.Reader,  roles: [dbrole_readonly],  pgbouncer: true }
  - { name: app_writer,  password: DBUser.Writer,  roles: [dbrole_readwrite], pgbouncer: true }
```

业务用户通过继承 `dbrole_*` 获得默认对象权限；数据库 `CONNECT` 权限和 [`pg_hba_rules`](/docs/pgsql/config/hba) 继续控制可连接的数据库和来源。

需要更细粒度的 ACL 时，可在 `baseline` SQL 或后续剧本中使用标准 `GRANT` / `REVOKE`，并将额外授权纳入审查。


----------------

## 默认权限模板（pg_default_privileges）

`pg_default_privileges` 会应用到 `pg_dbsu`、`pg_admin_username`、`dbrole_admin`，并应用到每个已声明的数据库属主。默认模板如下：

```yaml
pg_default_privileges:
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

> 由上述身份创建的对象会自动应用对应权限。其他对象创建者需要单独配置 `ALTER DEFAULT PRIVILEGES`。

额外提示：

- `pg_revoke_public` 默认为 `true`，意味着自动撤销 `PUBLIC` 在数据库和 `public` schema 上的 `CREATE` 权限。
- `pg_default_schemas` 和 `pg_default_extensions` 控制在 `template1/postgres` 中预创建的 schema/扩展，通常用于监控对象（`monitor` schema、`pg_stat_statements` 等）。


----------------

## 常见配置场景

### 为合作方提供只读账号

```yaml
pg_users:
  - name: partner_ro
    password: Partner.Read
    roles: [dbrole_readonly]
pg_hba_rules:
  - { user: partner_ro, db: analytics, addr: 203.0.113.0/24, auth: ssl }
```

该配置为合作方增加一条从指定网段通过 TLS 访问 `analytics` 的 HBA 规则。`pg_hba_rules` 不会删除范围更宽的默认规则；若要求该账号只能访问此数据库，还应收敛默认 HBA，并配置数据库 `CONNECT` 权限。

### 为业务管理员赋予 DDL 能力

```yaml
pg_users:
  - name: app_admin
    password: DBUser.AppAdmin
    roles: [dbrole_admin]
```

> `app_admin` 可以继承 `dbrole_admin` 的 DDL 权限。要让新对象应用 `dbrole_admin` 的默认权限，应先执行 `SET ROLE dbrole_admin`；如果 `app_admin` 是已声明的数据库属主，也可以直接以属主身份创建对象。

### 自定义默认权限

```yaml
pg_default_privileges:
  - GRANT INSERT,UPDATE,DELETE ON TABLES TO dbrole_admin
  - GRANT SELECT,UPDATE ON SEQUENCES TO dbrole_admin
  - GRANT SELECT ON TABLES TO reporting_group
```

该参数会替换完整的默认权限列表。引用的角色必须先创建；变更只影响之后创建的对象，已有对象需要另行授权。


----------------

## 与其他组件的协同

- **HBA 规则**：使用 `pg_hba_rules` 绑定角色、数据库和来源。要限制 `dbrole_offline`，应为其规则设置 `role: offline`。
- **PgBouncer**：`pgbouncer: true` 的用户会被写入 `userlist.txt`，`pool_mode/pool_connlimit` 可以控制连接池层面的配额。
- **数据库监控**：`dbuser_monitor` 的权限来自 `pg_default_roles`。新增监控用户时，应授予 `pg_monitor`，并检查 `monitor` schema 的访问权限。

这些参数可以与配置清单一起版本化；实际权限仍应通过数据库系统目录定期核对。


----------------

## 相关文档

- [**访问控制概念**](/docs/concept/sec/ac)：角色、默认权限与隔离边界
- [**身份认证**](/docs/concept/sec/auth)：HBA、SCRAM 与客户端证书
- [**用户配置**](/docs/pgsql/config/user)：用户与角色字段
- [**HBA 配置**](/docs/pgsql/config/hba)：连接入口规则

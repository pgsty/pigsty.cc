---
title: 访问控制
weight: 1207
description: Pigsty 提供的默认角色系统与权限模型
icon: fa-solid fa-lock
module: [PGSQL]
categories: [参考]
---

> 访问控制由“角色体系 + 权限模板 + HBA”共同决定。本节聚焦于如何通过配置参数声明角色与对象权限。

Pigsty 预置了一套精简的 ACL 模型，全部通过以下参数描述：

- `pg_default_roles`：系统角色与系统用户。
- `pg_users`：业务用户与角色。
- `pg_default_privileges`：管理员/属主新建对象时的默认权限。
- `pg_revoke_public`、`pg_default_schemas`、`pg_default_extensions`：控制 `template1` 的默认行为。

理解这些参数后，你就可以写出完全可复现的权限配置。


----------------

## 默认角色体系（pg_default_roles）

默认包含 4 个业务角色 + 4 个系统用户：

| 名称               | 类型      | 说明                                             |
|--------------------|-----------|--------------------------------------------------|
| `dbrole_readonly`  | `NOLOGIN` | 所有业务共用，拥有 SELECT/USAGE                  |
| `dbrole_readwrite` | `NOLOGIN` | 继承只读角色，并拥有 INSERT/UPDATE/DELETE         |
| `dbrole_admin`     | `NOLOGIN` | 继承 `pg_monitor` + 读写角色，可建对象和触发器      |
| `dbrole_offline`   | `NOLOGIN` | 受限只读角色，仅允许访问离线实例                  |
| `postgres`         | 用户      | 系统超级用户，与 `pg_dbsu` 同名                   |
| `replicator`       | 用户      | 用于流复制与备份，继承监控与只读权限                |
| `dbuser_dba`       | 用户      | 主要管理员账号，同时同步到 pgbouncer               |
| `dbuser_monitor`   | 用户      | 监控账号，具备 `pg_monitor` 权限，默认记录慢 SQL     |
{.full-width}

这些定义位于 `pg_default_roles`，理论上可以自定义，但若要替换名称，必须同步更新 HBA/ACL/脚本中的引用。

示例：为离线任务额外加一个 `dbrole_etl`：

```yaml
pg_default_roles:
  - { name: dbrole_etl, login: false, roles: [dbrole_offline], comment: 'etl read-only role' }
  - { name: dbrole_admin, login: false, roles: [pg_monitor, dbrole_readwrite, dbrole_etl] }
```

> 效果：所有继承 `dbrole_admin` 的用户自动拥有 `dbrole_etl` 权限，可访问 offline 实例并执行 ETL。


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

> 如果修改这些参数，请同步在 `pg_default_roles` 中更新对应用户的定义，以避免角色属性不一致。


----------------

## 业务角色与授权（pg_users）

业务用户通过 `pg_users` 声明（详细字段见 [用户配置](/docs/pgsql/config/user)），其中 `roles` 字段控制授予的业务角色。

示例：创建只读/读写用户各一名：

```yaml
pg_users:
  - { name: app_reader,  password: DBUser.Reader,  roles: [dbrole_readonly],  pgbouncer: true }
  - { name: app_writer,  password: DBUser.Writer,  roles: [dbrole_readwrite], pgbouncer: true }
```

> 通过继承 `dbrole_*` 来控制访问权限，无需为每个库单独 GRANT。配合 [`pg_hba_rules`](/docs/pgsql/config/hba) 即可区分访问来源。

若需要更细粒度的 ACL，可在 `baseline` SQL 中或后续剧本里使用标准 `GRANT/REVOKE`。Pigsty 不会阻止你额外授予权限。


----------------

## 默认权限模板（pg_default_privileges）

`pg_default_privileges` 会在 `postgres`、`dbuser_dba`、`dbrole_admin`（业务管理员 `SET ROLE` 后）上设置 DEFAULT PRIVILEGE。默认模板如下：

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

> 只要对象由上述管理员创建，就会自动携带对应权限，无需人为执行 GRANT。若业务需要自定义模板，直接替换该数组即可。

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

> 效果：合作方账号登录后只具备默认只读权限，并且只能通过 TLS 从指定网段访问 `analytics` 库。

### 为业务管理员赋予 DDL 能力

```yaml
pg_users:
  - name: app_admin
    password: DBUser.AppAdmin
    roles: [dbrole_admin]
```

> 业务管理员通过 `SET ROLE dbrole_admin` 或直接以 `app_admin` 登录，即可继承默认的 DDL 权限模板。

### 自定义默认权限

```yaml
pg_default_privileges:
  - GRANT INSERT,UPDATE,DELETE ON TABLES TO dbrole_admin
  - GRANT SELECT,UPDATE ON SEQUENCES TO dbrole_admin
  - GRANT SELECT ON TABLES TO reporting_group
```

> 替换默认模板后，所有由管理员创建的对象都会携带新的权限定义，避免逐对象授权。


----------------

## 与其他组件的协同

- **HBA 规则**：使用 `pg_hba_rules` 将角色与来源进行绑定（例如只让 `dbrole_offline` 访问离线实例）。
- **Pgbouncer**：`pgbouncer: true` 的用户会被写入 `userlist.txt`，`pool_mode/pool_connlimit` 可以控制连接池层面的配额。
- **Grafana/监控**：`dbuser_monitor` 的权限来自 `pg_default_roles`，如果你新增监控用户，记得赋予 `pg_monitor` + `monitor` schema 的访问权。

通过这些参数，可以让权限体系与代码一起版本化，真正做到“配置即策略”。

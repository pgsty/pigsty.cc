---
title: 用户/角色
weight: 1204
description: 如何通过配置来定制所需 PostgreSQL 用户与角色？
icon: fa-solid fa-users
module: [PGSQL]
categories: [参考]
---


> 在本文中，"用户"（User） 指的是使用 SQL 命令 `CREATE USER/ROLE` 创建的，数据库集簇内的逻辑对象。

在 PostgreSQL 中，用户直接隶属于数据库集簇而非某个具体的数据库。因此在创建业务数据库和业务用户时，应当遵循"先用户，后数据库"的原则。

Pigsty 通过两个配置参数定义数据库集群中的角色与用户：

- [**`pg_default_roles`**](/docs/pgsql/param#pg_default_roles)：定义全局统一使用的角色和用户
- [**`pg_users`**](/docs/pgsql/param#pg_users)：在数据库集群层面定义业务用户和角色

前者用于定义整套环境中共用的角色与用户，后者定义单个集群中特有的业务角色与用户。二者形式相同，均为用户定义对象的数组。
用户/角色按数组顺序逐一创建，因此后定义的用户可以属于先定义的角色。

默认情况下，所有带有 `pgbouncer: true` 标记的用户都会被添加到 [**Pgbouncer**](/docs/concept/arch/pgsql#pgbouncer) 连接池用户列表中。


----------------

## 定义用户

下面是 Pigsty 演示环境中默认集群 `pg-meta` 中的业务用户定义：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - {name: dbuser_meta     ,password: DBUser.Meta     ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: pigsty admin user }
      - {name: dbuser_view     ,password: DBUser.Viewer   ,pgbouncer: true ,roles: [dbrole_readonly] ,comment: read-only viewer for meta database }
      - {name: dbuser_grafana  ,password: DBUser.Grafana  ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: admin user for grafana database    }
      - {name: dbuser_bytebase ,password: DBUser.Bytebase ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: admin user for bytebase database   }
      - {name: dbuser_kong     ,password: DBUser.Kong     ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: admin user for kong api gateway    }
      - {name: dbuser_gitea    ,password: DBUser.Gitea    ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: admin user for gitea service       }
      - {name: dbuser_wiki     ,password: DBUser.Wiki     ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: admin user for wiki.js service     }
      - {name: dbuser_noco     ,password: DBUser.Noco     ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: admin user for nocodb service      }
      - {name: dbuser_remove   ,state: absent }  # 使用 state: absent 删除用户
```

每个用户/角色定义都是一个复杂对象，可能包括以下字段，除了 `name` 字段外，其他字段均为可选字段：

```yaml
- name: dbuser_meta               # 必选，`name` 是用户定义的唯一必选字段
  state: create                   # 可选，用户状态：create（创建，默认）、absent（删除）
  password: DBUser.Meta           # 可选，密码，可以是 scram-sha-256 哈希字符串或明文
  login: true                     # 可选，默认为 true，是否可以登录
  superuser: false                # 可选，默认为 false，是否是超级用户
  createdb: false                 # 可选，默认为 false，是否可以创建数据库
  createrole: false               # 可选，默认为 false，是否可以创建角色
  inherit: true                   # 可选，默认为 true，是否自动继承所属角色权限
  replication: false              # 可选，默认为 false，是否可以发起流复制连接
  bypassrls: false                # 可选，默认为 false，是否可以绕过行级安全
  connlimit: -1                   # 可选，用户连接数限制，默认 -1 不限制
  expire_in: 3650                 # 可选，从创建时起 N 天后过期（优先级比 expire_at 高）
  expire_at: '2030-12-31'         # 可选，过期日期，使用 YYYY-MM-DD 格式（优先级没 expire_in 高）
  comment: pigsty admin user      # 可选，用户备注信息
  roles: [dbrole_admin]           # 可选，所属角色数组
  parameters:                     # 可选，角色级配置参数
    search_path: public
  pgbouncer: true                 # 可选，是否加入连接池用户列表，默认 false
  pool_mode: transaction          # 可选，用户级别的池化模式，默认 transaction
  pool_connlimit: -1              # 可选，用户级别的连接池最大连接数，默认 -1 不限制
```


----------------

## 参数总览

所有参数中唯一 **必选** 的字段是 `name`，它应该是当前 PostgreSQL 集群中有效且唯一的用户名，其他参数都有合理的默认值，均为可选项。

| 字段                                    | 分类  | 类型       | 属性  | 说明                                 |
|---------------------------------------|-----|----------|-----|------------------------------------|
| [**`name`**](#name)                   | 基本  | `string` | 必选  | 用户名，必须是有效且唯一的标识符                   |
| [**`state`**](#state)                 | 基本  | `enum`   | 可选  | 用户状态：`create`（默认）、`absent`         |
| [**`password`**](#password)           | 基本  | `string` | 可变  | 用户密码，明文或哈希                         |
| [**`comment`**](#comment)             | 基本  | `string` | 可变  | 用户备注信息                             |
| [**`login`**](#login)                 | 权限  | `bool`   | 可变  | 是否允许登录，默认 `true`                   |
| [**`superuser`**](#superuser)         | 权限  | `bool`   | 可变  | 是否为超级用户，默认 `false`                 |
| [**`createdb`**](#createdb)           | 权限  | `bool`   | 可变  | 是否可创建数据库，默认 `false`                |
| [**`createrole`**](#createrole)       | 权限  | `bool`   | 可变  | 是否可创建角色，默认 `false`                 |
| [**`inherit`**](#inherit)             | 权限  | `bool`   | 可变  | 是否继承所属角色权限，默认 `true`               |
| [**`replication`**](#replication)     | 权限  | `bool`   | 可变  | 是否可进行复制，默认 `false`                 |
| [**`bypassrls`**](#bypassrls)         | 权限  | `bool`   | 可变  | 是否可绕过行级安全，默认 `false`               |
| [**`connlimit`**](#connlimit)         | 权限  | `int`    | 可变  | 连接数限制，`-1` 表示不限制                   |
| [**`expire_in`**](#expire_in)         | 有效期 | `int`    | 可变  | 从当前日期起 N 天后过期（优先级高于 `expire_at`）   |
| [**`expire_at`**](#expire_at)         | 有效期 | `string` | 可变  | 过期日期，`YYYY-MM-DD` 格式               |
| [**`roles`**](#roles)                 | 角色  | `array`  | 增量  | 所属角色数组，支持字符串或对象格式                  |
| [**`parameters`**](#parameters)       | 参数  | `object` | 可变  | 角色级参数                              |
| [**`pgbouncer`**](#pgbouncer)         | 连接池 | `bool`   | 可变  | 是否加入连接池，默认 `false`                 |
| [**`pool_mode`**](#pool_mode)         | 连接池 | `enum`   | 可变  | 池化模式：`transaction`（默认）             |
| [**`pool_connlimit`**](#pool_connlimit) | 连接池 | `int`    | 可变  | 连接池用户最大连接数                         |
{.full-width}


----------------

## 参数详情

### `name`

字符串，必选参数，表示用户的名称，在一个数据库集群内必须唯一。

用户名必须是有效的 PostgreSQL 标识符，必须匹配正则表达式 **`^[a-z_][a-z0-9_]{0,62}$`**：
以小写字母或下划线开头，只能包含小写字母、数字、下划线，最长 63 个字符。

```yaml
- name: dbuser_app         # 标准命名
- name: app_readonly       # 下划线分隔
- name: _internal          # 下划线开头（用于内部角色）
```

### `state`

枚举值，用于指定要对用户执行的操作，可以是 `create` 或 `absent`，默认值为 `create`。

| 状态       | 说明                          |
|----------|------------------------------|
| `create` | 默认，创建用户，如果已存在则更新属性 |
| `absent` | 删除用户，使用 `DROP ROLE`     |
{.full-width}

```yaml
- name: dbuser_app             # state 默认为 create
- name: dbuser_old
  state: absent                # 删除用户
```

以下系统用户无法通过 `state: absent` 删除，这是为了防止误删关键系统用户导致集群故障：

- `postgres`：数据库超级用户
- `replicator`：复制用户（或 [**`pg_replication_username`**](/docs/pgsql/param#pg_replication_username) 配置的用户）
- `dbuser_dba`：管理员用户（或 [**`pg_admin_username`**](/docs/pgsql/param#pg_admin_username) 配置的用户）
- `dbuser_monitor`：监控用户（或 [**`pg_monitor_username`**](/docs/pgsql/param#pg_monitor_username) 配置的用户）

### `password`

字符串，可变参数，用于设置用户密码，不指定则用户无法使用密码登录。

密码可以是以下格式之一：

| 格式             | 示例                                   | 说明                       |
|----------------|--------------------------------------|--------------------------|
| 明文密码           | `DBUser.Meta`                        | 不推荐，会被记录到配置文件和日志         |
| SCRAM-SHA-256  | `SCRAM-SHA-256$4096:xxx$yyy:zzz`     | 推荐，PostgreSQL 10+ 默认认证方式 |
| MD5 哈希         | `md5...`                             | 兼容旧版本，不推荐新项目使用           |
{.full-width}

```yaml
# 明文密码（不推荐，会被记录到配置和日志中）
- name: dbuser_app
  password: MySecretPassword

# SCRAM-SHA-256 哈希（推荐）
- name: dbuser_app
  password: 'SCRAM-SHA-256$4096:xxx$yyy:zzz'
```

设置密码时，Pigsty 会临时屏蔽当前会话的日志记录以避免密码泄露：

```sql
SET log_statement TO 'none';
ALTER USER "dbuser_app" PASSWORD 'xxx';
SET log_statement TO DEFAULT;
```

如果你不希望在配置文件中记录明文密码，可以使用 `SCRAM-SHA-256` 哈希字符串代替明文密码。生成 SCRAM-SHA-256 哈希的方法：

```bash
# 使用 PostgreSQL 生成（需要先连接到数据库，数据库有 pgcrypto 扩展）
psql -c "SELECT encode(digest('password' || 'username', 'sha256'), 'hex')"
```

### `comment`

字符串，可变参数，用于设置用户的备注信息，如果不指定，默认值为 `business user {name}`。

用户备注信息通过 `COMMENT ON ROLE` 语句设置，支持中文和特殊字符（Pigsty 会自动转义单引号）。

```yaml
- name: dbuser_app
  comment: '业务应用主账号'
```

```sql
COMMENT ON ROLE "dbuser_app" IS '业务应用主账号';
```

### `login`

布尔值，可变参数，用于控制用户是否可以登录，默认值为 `true`。

设置为 `false` 则创建的是无法登陆的 **角色**（Role）而非用户（User），通常用于权限分组。

在 PostgreSQL 中，`CREATE USER` 等价于 `CREATE ROLE ... LOGIN`。

```yaml
# 创建可登录用户
- name: dbuser_app
  login: true

# 创建角色（不可登录，用于权限分组）
- name: dbrole_custom
  login: false
  comment: 自定义权限角色
```

```sql
CREATE USER "dbuser_app" LOGIN;
CREATE USER "dbrole_custom" NOLOGIN;
```

### `superuser`

布尔值，可变参数，用于指定用户是否为超级用户，默认值为 `false`。

超级用户拥有数据库的全部权限，可以绕过所有权限检查。

```yaml
- name: dbuser_admin
  superuser: true            # 危险：拥有全部权限
```

```sql
ALTER USER "dbuser_admin" SUPERUSER;
```

Pigsty 已经提供了默认的超级用户 [**`pg_admin_username`**](/docs/pgsql/param#pg_admin_username) （`dbuser_dba`）
除非绝对必要，否则不应创建额外的超级用户。

### `createdb`

布尔值，可变参数，用于指定用户是否可以创建数据库，默认值为 `false`。

```yaml
- name: dbuser_dev
  createdb: true             # 允许创建数据库
```

```sql
ALTER USER "dbuser_dev" CREATEDB;
```

一些应用软件可能会要求自己创建数据库，例如 `Gitea`，`Odoo` 等，因此您可能需要为这些应用的管理员用户启用 `CREATEDB` 权限。


### `createrole`

布尔值，可变参数，用于指定用户是否可以创建其他角色，默认值为 `false`。

拥有 `CREATEROLE` 权限的用户可以创建、修改、删除其他非超级用户角色。

```yaml
- name: dbuser_admin
  createrole: true           # 允许管理其他角色
```

```sql
ALTER USER "dbuser_admin" CREATEROLE;
```

### `inherit`

布尔值，可变参数，用于控制用户是否自动继承所属角色的权限，默认值为 `true`。

设置为 `false` 时，用户需要通过 `SET ROLE` 显式切换角色才能使用所属角色的权限。

```yaml
# 自动继承角色权限（默认）
- name: dbuser_app
  inherit: true
  roles: [dbrole_readwrite]

# 需要显式切换角色
- name: dbuser_special
  inherit: false
  roles: [dbrole_admin]
```

```sql
ALTER USER "dbuser_special" NOINHERIT;
-- 用户需要执行 SET ROLE dbrole_admin 才能获得该角色权限（必要但不充分）
```

### `replication`

布尔值，可变参数，用于指定用户是否可以发起流复制连接，默认值为 `false`。

通常只有复制用户（如 `replicator`）需要此权限。普通业务用户不应该拥有此权限，除非这是一个逻辑解码订阅者。

```yaml
- name: replicator
  replication: true          # 允许流复制连接
  roles: [pg_monitor, dbrole_readonly]
```

```sql
ALTER USER "replicator" REPLICATION;
```

### `bypassrls`

布尔值，可变参数，用于指定用户是否可以绕过行级安全（RLS）策略，默认值为 `false`。

启用此权限后，用户可以访问所有行，即使表上定义了行级安全策略。此权限通常只授予管理员用户。

```yaml
- name: dbuser_myappadmin
  bypassrls: true            # 绕过行级安全策略
```

```sql
ALTER USER "dbuser_myappadmin" BYPASSRLS;
```

### `connlimit`

整数，可变参数，用于限制用户的最大并发连接数，默认值为 `-1`，表示不限制。

设置为正整数时，会限制该用户同时建立的最大数据库连接数。此限制不影响超级用户。

```yaml
- name: dbuser_app
  connlimit: 100             # 最多 100 个并发连接

- name: dbuser_batch
  connlimit: 10              # 批处理用户限制连接数
```

```sql
ALTER USER "dbuser_app" CONNECTION LIMIT 100;
```

### `expire_in`

整数，可变参数，用于指定用户从当前日期起多少天后过期。

此参数优先级高于 [**`expire_at`**](#expire_at)，如果同时指定两者，只有 `expire_in` 生效。

每次执行剧本时会根据当前日期重新计算过期时间，适合用于临时用户或需要定期续期的场景。

```yaml
- name: temp_user
  expire_in: 30              # 30 天后过期

- name: contractor_user
  expire_in: 90              # 90 天后过期
```

执行时会计算实际过期日期并生成对应的 SQL：

```sql
-- expire_in: 30, 假设当前日期为 2025-01-01
ALTER USER "temp_user" VALID UNTIL '2025-01-31';
```

### `expire_at`

字符串，可变参数，用于指定用户的过期日期，格式为 `YYYY-MM-DD` 或特殊值 `infinity`。

此参数优先级低于 [**`expire_in`**](#expire_in)。使用 `infinity` 表示用户永不过期。

```yaml
- name: contractor_user
  expire_at: '2024-12-31'    # 指定日期过期

- name: permanent_user
  expire_at: 'infinity'      # 永不过期
```

```sql
ALTER USER "contractor_user" VALID UNTIL '2024-12-31';
ALTER USER "permanent_user" VALID UNTIL 'infinity';
```

### `roles`

数组，增量参数，用于定义用户所属的角色。数组元素可以是字符串或对象。

简单格式使用字符串直接指定角色名：

```yaml
- name: dbuser_app
  roles:
    - dbrole_readwrite
    - pg_read_all_data
```

```sql
GRANT "dbrole_readwrite" TO "dbuser_app";
GRANT "pg_read_all_data" TO "dbuser_app";
```

完整格式使用对象定义，支持更精细的角色成员关系控制：

```yaml
- name: dbuser_app
  roles:
    - dbrole_readwrite                            # 简单字符串：GRANT 角色
    - { name: dbrole_admin, admin: true }         # 带 ADMIN OPTION
    - { name: pg_monitor, set: false }            # PG16+: 不允许 SET ROLE
    - { name: pg_signal_backend, inherit: false } # PG16+: 不自动继承权限
    - { name: old_role, state: absent }           # 撤销角色成员关系
```

**对象格式参数说明**：

| 参数        | 类型     | 说明                                                    |
|-----------|--------|-------------------------------------------------------|
| `name`    | string | 角色名称（必选）                                              |
| `state`   | enum   | `grant`（默认）或 `absent`/`revoke`：控制授予或撤销                |
| `admin`   | bool   | `true`：WITH ADMIN OPTION，`false`：REVOKE ADMIN         |
| `set`     | bool   | PG16+：`true`：WITH SET TRUE，`false`：REVOKE SET         |
| `inherit` | bool   | PG16+：`true`：WITH INHERIT TRUE，`false`：REVOKE INHERIT |
{.full-width}

**PostgreSQL 16+ 新特性**：

PostgreSQL 16 引入了更细粒度的角色成员关系控制：

- **ADMIN OPTION**：允许将角色授予其他用户
- **SET OPTION**：允许使用 `SET ROLE` 切换到该角色
- **INHERIT OPTION**：是否自动继承该角色的权限

```yaml
# PostgreSQL 16+ 完整示例
- name: dbuser_app
  roles:
    # 普通成员关系
    - dbrole_readwrite

    # 可以将 dbrole_admin 授予其他用户
    - { name: dbrole_admin, admin: true }

    # 不能 SET ROLE 到 pg_monitor（只能通过继承使用权限）
    - { name: pg_monitor, set: false }

    # 不自动继承 pg_execute_server_program 的权限（需要显式 SET ROLE）
    - { name: pg_execute_server_program, inherit: false }

    # 撤销 old_role 的成员关系
    - { name: old_role, state: absent }
```

`set` 和 `inherit` 选项仅在 PostgreSQL 16+ 中有效，在早期版本会被忽略并在生成的 SQL 中添加警告注释。

### `parameters`

对象，可变参数，用于设置角色级别的配置参数。参数通过 `ALTER ROLE ... SET` 设置，会对该用户的所有会话生效。

```yaml
- name: dbuser_analyst
  parameters:
    work_mem: '256MB'
    statement_timeout: '5min'
    search_path: 'analytics,public'
    log_statement: 'all'
```

```sql
ALTER USER "dbuser_analyst" SET "work_mem" = '256MB';
ALTER USER "dbuser_analyst" SET "statement_timeout" = '5min';
ALTER USER "dbuser_analyst" SET "search_path" = 'analytics,public';
ALTER USER "dbuser_analyst" SET "log_statement" = 'all';
```

使用特殊值 `DEFAULT`（大小写不敏感）可以将参数重置为 PostgreSQL 默认值：

```yaml
- name: dbuser_app
  parameters:
    work_mem: DEFAULT          # 重置为默认值
    statement_timeout: '30s'   # 设置新值
```

```sql
ALTER USER "dbuser_app" SET "work_mem" = DEFAULT;
ALTER USER "dbuser_app" SET "statement_timeout" = '30s';
```

常用角色级参数：

| 参数                                    | 说明          | 示例值            |
|---------------------------------------|-------------|----------------|
| `work_mem`                            | 查询工作内存      | `'64MB'`       |
| `statement_timeout`                   | 语句超时时间      | `'30s'`        |
| `lock_timeout`                        | 锁等待超时       | `'10s'`        |
| `idle_in_transaction_session_timeout` | 空闲事务超时      | `'10min'`      |
| `search_path`                         | Schema 搜索路径 | `'app,public'` |
| `log_statement`                       | 日志记录级别      | `'ddl'`        |
| `temp_file_limit`                     | 临时文件大小限制    | `'10GB'`       |
{.full-width}

您可以从数据库的 [**`pg_db_role_setting`**](https://www.postgresql.org/docs/current/view-pg-db-role-setting.html) 系统视图查询用户级别的参数设置。


### `pgbouncer`

布尔值，可变参数，用于控制是否将用户添加到 Pgbouncer 连接池用户列表，默认值为 `false`。

对于需要通过连接池访问数据库的生产用户，必须显式设置 `pgbouncer: true`。
默认为 `false` 是为了避免意外将内部用户暴露给连接池。

```yaml
# 生产用户：需要连接池
- name: dbuser_app
  password: DBUser.App
  pgbouncer: true

# 内部用户：不需要连接池
- name: dbuser_internal
  password: DBUser.Internal
  pgbouncer: false           # 默认值，可省略
```

设置 `pgbouncer: true` 的用户会被添加到 `/etc/pgbouncer/userlist.txt` 文件中。

### `pool_mode`

枚举值，可变参数，用于设置用户级别的池化模式，可选值为 `transaction`、`session` 或 `statement`，默认值为 `transaction`。

| 模式            | 说明         | 适用场景              |
|---------------|------------|-------------------|
| `transaction` | 事务结束后归还连接  | 大多数 OLTP 应用，默认推荐  |
| `session`     | 会话结束后归还连接  | 需要会话状态的应用（如 SET 命令）|
| `statement`   | 每条语句后归还连接  | 简单无状态查询，极致复用      |
{.full-width}

```yaml
# DBA 用户使用 session 模式（可能需要 SET 命令等会话状态）
- name: dbuser_dba
  pgbouncer: true
  pool_mode: session

# 普通业务用户使用 transaction 模式
- name: dbuser_app
  pgbouncer: true
  pool_mode: transaction
```

用户级别的连接池参数通过 `/etc/pgbouncer/useropts.txt` 文件配置：

```ini
dbuser_dba      = pool_mode=session max_user_connections=16
dbuser_monitor  = pool_mode=session max_user_connections=8
```

### `pool_connlimit`

整数，可变参数，用于设置用户级别的连接池最大连接数，默认值为 `-1`，表示不限制。

```yaml
- name: dbuser_app
  pgbouncer: true
  pool_connlimit: 50         # 此用户最多使用 50 个连接池连接
```


----------------

## ACL 系统

Pigsty 提供了一套内置的、开箱即用的访问控制 / [**ACL**](/docs/concept/sec/ac/#默认角色) 系统，您只需将以下四个默认角色分配给业务用户即可轻松使用：

| 角色                | 权限说明             | 典型使用场景              |
|-------------------|---------------------|---------------------|
| `dbrole_readwrite` | 全局读写访问             | 主属业务的生产账号           |
| `dbrole_readonly`  | 全局只读访问             | 其他业务的只读访问           |
| `dbrole_admin`     | 拥有 DDL 权限           | 业务管理员，需要建表的场景       |
| `dbrole_offline`   | 受限只读访问（仅离线实例）      | 个人用户，ETL/分析任务       |
{.full-width}

```yaml
# 典型业务用户配置
pg_users:
  - name: dbuser_app
    password: DBUser.App
    pgbouncer: true
    roles: [dbrole_readwrite]    # 生产账号，读写权限

  - name: dbuser_readonly
    password: DBUser.Readonly
    pgbouncer: true
    roles: [dbrole_readonly]     # 只读账号

  - name: dbuser_admin
    password: DBUser.Admin
    pgbouncer: true
    roles: [dbrole_admin]        # 管理员，可执行 DDL

  - name: dbuser_etl
    password: DBUser.ETL
    roles: [dbrole_offline]      # 离线分析账号
```

如果您希望重新设计您自己的 ACL 系统，可以考虑定制以下参数和模板：

- [**`pg_default_roles`**](/docs/pgsql/param#pg_default_roles)：系统范围的角色和全局用户
- [**`pg_default_privileges`**](/docs/pgsql/param#pg_default_privileges)：新建对象的默认权限
- [**`pg-init-role.sql`**](https://github.com/Vonng/pigsty/blob/main/roles/pgsql/templates/pg-init-role.sql)：角色创建 SQL 模板
- [**`pg-init-template.sql`**](https://github.com/Vonng/pigsty/blob/main/roles/pgsql/templates/pg-init-template.sql)：权限 SQL 模板


----------------

## Pgbouncer 用户

默认情况下启用 Pgbouncer 作为连接池中间件。Pigsty 默认将 [**`pg_users`**](/docs/pgsql/param#pg_users) 中显式带有 `pgbouncer: true` 标志的所有用户添加到 Pgbouncer 用户列表中。

Pgbouncer 连接池中的用户在 `/etc/pgbouncer/userlist.txt` 中列出：

```ini
"postgres" ""
"dbuser_wiki" "SCRAM-SHA-256$4096:+77dyhrPeFDT/TptHs7/7Q==$KeatuohpKIYzHPCt/tqBu85vI11o9mar/by0hHYM2W8=:X9gig4JtjoS8Y/o1vQsIX/gY1Fns8ynTXkbWOjUfbRQ="
"dbuser_view" "SCRAM-SHA-256$4096:DFoZHU/DXsHL8MJ8regdEw==$gx9sUGgpVpdSM4o6A2R9PKAUkAsRPLhLoBDLBUYtKS0=:MujSgKe6rxcIUMv4GnyXJmV0YNbf39uFRZv724+X1FE="
"dbuser_monitor" "SCRAM-SHA-256$4096:fwU97ZMO/KR0ScHO5+UuBg==$CrNsmGrx1DkIGrtrD1Wjexb/aygzqQdirTO1oBZROPY=:L8+dJ+fqlMQh7y4PmVR/gbAOvYWOr+KINjeMZ8LlFww="
"dbuser_meta" "SCRAM-SHA-256$4096:leB2RQPcw1OIiRnPnOMUEg==$eyC+NIMKeoTxshJu314+BmbMFpCcspzI3UFZ1RYfNyU=:fJgXcykVPvOfro2MWNkl5q38oz21nSl1dTtM65uYR1Q="
```

用户级别的连接池参数使用另一个单独的文件 `/etc/pgbouncer/useropts.txt` 进行维护：

```ini
dbuser_dba      = pool_mode=session max_user_connections=16
dbuser_monitor  = pool_mode=session max_user_connections=8
```

当您 [**创建用户**](/docs/pgsql/admin/user#创建用户) 时，Pgbouncer 的用户列表定义文件将会被刷新，并通过在线重载配置的方式生效，不会影响现有的连接。

Pgbouncer 使用和 PostgreSQL 相同的 `dbsu` 运行，默认为 `postgres` 操作系统用户。您可以使用 `pgb` 别名，使用 dbsu 访问 Pgbouncer 管理功能。

[**`pgbouncer_auth_query`**](/docs/pgsql/param#pgbouncer_auth_query) 参数允许您使用动态查询来完成连接池用户认证，当您不想手动管理连接池中的用户时，这是一种便捷的方案。


----------------

## 相关资源

关于用户管理操作，请参考 [**用户管理**](/docs/pgsql/admin/user) 一节。

关于用户的访问权限，请参考 [**ACL：角色权限**](/docs/concept/sec/ac/#默认角色) 一节。

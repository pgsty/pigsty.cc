---
title: 用户/角色
weight: 1204
description: 用户/角色指的是使用 SQL 命令 `CREATE USER/ROLE` 创建的，数据库集簇内的逻辑对象。
icon: fa-solid fa-users
module: [PGSQL]
categories: [参考]
---


> 在这里的上下文中，用户指的是使用 SQL 命令 `CREATE USER/ROLE` 创建的，数据库集簇内的逻辑对象。

在PostgreSQL中，用户直接隶属于数据库集簇而非某个具体的数据库。因此在创建业务数据库和业务用户时，应当遵循"先用户，后数据库"的原则。


----------------

## 定义用户

Pigsty通过两个配置参数定义数据库集群中的角色与用户：

- [`pg_default_roles`](/docs/pgsql/param#pg_default_roles)：定义全局统一使用的角色和用户
- [`pg_users`](/docs/pgsql/param#pg_users)：在数据库集群层面定义业务用户和角色

前者用于定义了整套环境中共用的角色与用户，后者定义单个集群中特有的业务角色与用户。二者形式相同，均为用户定义对象的数组。

你可以定义多个用户/角色，它们会按照先全局，后集群，最后按数组内排序的顺序依次创建，所以后面的用户可以属于前面定义的角色。

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

每个用户/角色定义都是一个 object，可能包括以下字段，以 `dbuser_meta` 用户为例：

```yaml
- name: dbuser_meta               # 必需，`name` 是用户定义的唯一必选字段
  state: create                   # 可选，用户状态：create（创建，默认）、absent（删除）
  password: DBUser.Meta           # 可选，密码，可以是 scram-sha-256 哈希字符串或明文
  login: true                     # 可选，默认情况下可以登录
  superuser: false                # 可选，默认为 false，是超级用户吗？
  createdb: false                 # 可选，默认为 false，可以创建数据库吗？
  createrole: false               # 可选，默认为 false，可以创建角色吗？
  inherit: true                   # 可选，默认情况下，此角色可以使用继承的权限吗？
  replication: false              # 可选，默认为 false，此角色可以进行复制吗？
  bypassrls: false                # 可选，默认为 false，此角色可以绕过行级安全吗？
  pgbouncer: true                 # 可选，默认为 false，将此用户添加到 pgbouncer 用户列表吗？（使用连接池的生产用户应该显式定义为 true）
  connlimit: -1                   # 可选，用户连接限制，默认 -1 禁用限制
  expire_in: 3650                 # 可选，此角色过期时间：从创建时 + n天计算（优先级比 expire_at 更高）
  expire_at: '2030-12-31'         # 可选，此角色过期的时间点，使用 YYYY-MM-DD 格式的字符串指定一个特定日期（优先级没 expire_in 高）
  comment: pigsty admin user      # 可选，此用户/角色的说明与备注字符串
  roles: [dbrole_admin]           # 可选，所属角色，默认角色为：dbrole_{admin,readonly,readwrite,offline}
  parameters:                     # 可选，使用 `ALTER ROLE SET` 针对这个角色，配置角色级的数据库参数
    search_path: public           # 例如：为用户设置默认 search_path
  pool_mode: transaction          # 可选，默认为 transaction 的 pgbouncer 池模式，用户级别
  pool_connlimit: -1              # 可选，用户级别的最大数据库连接数，默认 -1 禁用限制
```

- 唯一必需的字段是 `name`，它应该是 PostgreSQL 集群中的一个有效且唯一的用户名。
- 用户名必须匹配正则表达式 `^[a-z_][a-z0-9_]{0,62}$`（小写字母、数字、下划线，以字母或下划线开头，最长63字符）。
- 角色不需要 `password`，但对于可登录的业务用户，通常是需要指定一个密码的。
- `password` 可以是明文或 scram-sha-256 / md5 哈希字符串，请最好不要使用明文密码。
- 用户/角色按数组顺序逐一创建，因此，请确保角色/分组的定义在成员之前。
- `login`、`superuser`、`createdb`、`createrole`、`inherit`、`replication`、`bypassrls` 是布尔标志。
- `pgbouncer` 默认是禁用的：要将业务用户添加到 pgbouncer 用户列表，您应当显式将其设置为 `true`。


----------------

## 参数总览

| 字段            | 分类   | 类型       | 可变性 | 说明                                              |
|-----------------|--------|------------|--------|---------------------------------------------------|
| `name`          | 基本   | `string`   | 必选   | 用户名，必须是有效且唯一的标识符                  |
| `state`         | 基本   | `enum`     | 可选   | 用户状态：`create`（默认）、`absent`              |
| `password`      | 基本   | `string`   | 可变   | 用户密码，明文或哈希                              |
| `comment`       | 基本   | `string`   | 可变   | 用户备注信息                                      |
| `login`         | 权限   | `bool`     | 可变   | 是否允许登录，默认 `true`                         |
| `superuser`     | 权限   | `bool`     | 可变   | 是否为超级用户，默认 `false`                      |
| `createdb`      | 权限   | `bool`     | 可变   | 是否可创建数据库，默认 `false`                    |
| `createrole`    | 权限   | `bool`     | 可变   | 是否可创建角色，默认 `false`                      |
| `inherit`       | 权限   | `bool`     | 可变   | 是否继承所属角色权限，默认 `true`                 |
| `replication`   | 权限   | `bool`     | 可变   | 是否可进行复制，默认 `false`                      |
| `bypassrls`     | 权限   | `bool`     | 可变   | 是否可绕过行级安全，默认 `false`                  |
| `connlimit`     | 权限   | `int`      | 可变   | 连接数限制，`-1` 表示不限制                       |
| `expire_in`     | 有效期 | `int`      | 可变   | 从当前日期起 N 天后过期（优先级高于 `expire_at`） |
| `expire_at`     | 有效期 | `string`   | 可变   | 过期日期，`YYYY-MM-DD` 格式                       |
| `roles`         | 角色   | `array`    | 增量   | 所属角色数组，支持字符串或对象格式                |
| `parameters`    | 参数   | `object`   | 可变   | 角色级参数                                        |
| `pgbouncer`     | 连接池 | `bool`     | 可变   | 是否加入连接池，默认 `false`                      |
| `pool_mode`     | 连接池 | `enum`     | 可变   | 池化模式：`transaction`（默认）                   |
| `pool_connlimit`| 连接池 | `int`      | 可变   | 连接池用户最大连接数                              |


### 可变性说明

| 可变性 | 含义                                          |
|--------|-----------------------------------------------|
| 必选   | 必须指定的字段                                |
| 可选   | 可选字段，有默认值                            |
| 可变   | 可通过重新执行剧本修改                        |
| 增量   | 只会添加新内容，不会删除已有内容              |


----------------

## 基本参数

### `name`

- **类型**：`string`
- **可变性**：必选
- **说明**：用户名，集群内唯一标识符

用户名必须是有效的 PostgreSQL 标识符，必须匹配正则表达式 `^[a-z_][a-z0-9_]{0,62}$`：
- 以小写字母或下划线开头
- 只能包含小写字母、数字、下划线
- 最长 63 个字符

```yaml
- name: dbuser_app         # 标准命名
- name: app_readonly       # 下划线分隔
- name: _internal          # 下划线开头（用于内部角色）
```

### `state`

- **类型**：`enum`
- **可变性**：可选
- **默认值**：`create`
- **可选值**：`create`、`absent`
- **说明**：用户目标状态

| 状态     | 说明                                |
|----------|-------------------------------------|
| `create` | 创建用户（默认），已存在则更新属性  |
| `absent` | 删除用户，使用 `DROP ROLE`          |

```yaml
- name: dbuser_app             # state 默认为 create
- name: dbuser_old
  state: absent                # 删除用户
```

**注意**：以下系统用户无法通过 `state: absent` 删除：
- `postgres`（超级用户）
- `replicator`（或 `pg_replication_username` 配置的用户）
- `dbuser_dba`（或 `pg_admin_username` 配置的用户）
- `dbuser_monitor`（或 `pg_monitor_username` 配置的用户）

### `password`

- **类型**：`string`
- **可变性**：可变
- **默认值**：无
- **说明**：用户密码

密码可以是以下格式之一：
- **明文密码**：`DBUser.Meta`（不推荐用于生产环境）
- **SCRAM-SHA-256 哈希**：`SCRAM-SHA-256$4096:...`（推荐）
- **MD5 哈希**：`md5...`（兼容旧版本）

```yaml
# 明文密码（会被记录到配置文件，不推荐）
- name: dbuser_app
  password: MySecretPassword

# SCRAM-SHA-256 哈希（推荐）
- name: dbuser_app
  password: 'SCRAM-SHA-256$4096:xxx$yyy:zzz'
```

**生成 SCRAM-SHA-256 哈希**：

```bash
# 使用 PostgreSQL 生成
psql -c "SELECT 'SCRAM-SHA-256$' || pg_catalog.scram_sha_256('your_password')"

# 或使用 Python
python3 -c "import hashlib, secrets; print('SCRAM-SHA-256$4096:' + ...)"
```

### `comment`

- **类型**：`string`
- **可变性**：可变
- **默认值**：`business user {name}`
- **说明**：用户备注信息

会执行 `COMMENT ON ROLE` 语句。支持中文和特殊字符（会自动转义单引号）。

```yaml
- name: dbuser_app
  comment: '业务应用主账号'
```


----------------

## 权限参数

### `login`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`true`
- **说明**：是否允许登录

设置为 `false` 创建的是**角色**（Role）而非用户（User），通常用于权限分组。

```yaml
# 创建可登录用户
- name: dbuser_app
  login: true

# 创建角色（不可登录）
- name: dbrole_custom
  login: false
```

### `superuser`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`false`
- **说明**：是否为超级用户

{{% alert title="安全警告" color="warning" %}}

超级用户拥有数据库的全部权限，可以绕过所有权限检查。
除非绝对必要，否则不应创建额外的超级用户。

{{% /alert %}}

### `createdb`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`false`
- **说明**：是否可创建数据库

### `createrole`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`false`
- **说明**：是否可创建角色

### `inherit`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`true`
- **说明**：是否自动继承所属角色的权限

设置为 `false` 时，用户需要通过 `SET ROLE` 显式切换角色才能使用继承的权限。

### `replication`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`false`
- **说明**：是否可以发起流复制连接

通常只有复制用户（如 `replicator`）需要此权限。

### `bypassrls`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`false`
- **说明**：是否可以绕过行级安全（RLS）策略

### `connlimit`

- **类型**：`int`
- **可变性**：可变
- **默认值**：`-1`（不限制）
- **说明**：用户最大并发连接数

```yaml
- name: dbuser_app
  connlimit: 100           # 最多 100 个并发连接

- name: dbuser_batch
  connlimit: 10            # 批处理用户限制连接数
```


----------------

## 有效期参数

### `expire_in`

- **类型**：`int`
- **可变性**：可变
- **说明**：从当前日期起 N 天后过期

此参数优先级高于 `expire_at`。每次执行剧本时会重新计算过期时间。

```yaml
- name: temp_user
  expire_in: 30            # 30 天后过期

- name: long_term_user
  expire_in: 3650          # 约 10 年后过期
```

### `expire_at`

- **类型**：`string`
- **可变性**：可变
- **说明**：指定过期日期

格式为 `YYYY-MM-DD` 或特殊值 `infinity`（永不过期）。

```yaml
- name: contractor_user
  expire_at: '2024-12-31'  # 指定日期过期

- name: permanent_user
  expire_at: 'infinity'    # 永不过期
```

**注意**：`expire_in` 优先级高于 `expire_at`，如果同时指定，只有 `expire_in` 生效。


----------------

## 角色成员参数

### `roles`

- **类型**：`array`
- **可变性**：增量
- **说明**：用户所属角色数组

`roles` 数组支持两种格式：

#### 简单格式（字符串）

```yaml
- name: dbuser_app
  roles:
    - dbrole_readwrite
    - pg_read_all_data
```

生成的 SQL：
```sql
GRANT "dbrole_readwrite" TO "dbuser_app";
GRANT "pg_read_all_data" TO "dbuser_app";
```

#### 扩展格式（对象）

对象格式支持更精细的角色成员关系控制：

```yaml
- name: dbuser_app
  roles:
    - dbrole_readwrite                              # 简单字符串：GRANT 角色
    - { name: dbrole_admin, admin: true }           # GRANT WITH ADMIN OPTION
    - { name: pg_monitor, set: false }              # PG16+: REVOKE SET OPTION
    - { name: pg_signal_backend, inherit: false }   # PG16+: REVOKE INHERIT OPTION
    - { name: old_role, state: absent }             # REVOKE 角色成员关系
```

#### 对象格式参数

| 参数      | 类型   | 说明                                              |
|-----------|--------|---------------------------------------------------|
| `name`    | string | 角色名称（必选）                                  |
| `state`   | enum   | `grant`（默认）或 `absent`/`revoke`：控制成员关系 |
| `admin`   | bool   | `true`: WITH ADMIN OPTION / `false`: REVOKE ADMIN |
| `set`     | bool   | PG16+: `true`: WITH SET TRUE / `false`: REVOKE SET |
| `inherit` | bool   | PG16+: `true`: WITH INHERIT TRUE / `false`: REVOKE INHERIT |

#### PostgreSQL 16+ 新特性

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

    # 不能 SET ROLE 到 pg_monitor（只能继承权限）
    - { name: pg_monitor, set: false }

    # 不自动继承 pg_execute_server_program 的权限（需要显式 SET ROLE）
    - { name: pg_execute_server_program, inherit: false }

    # 撤销 old_role 的成员关系
    - { name: old_role, state: absent }
```

**注意**：`set` 和 `inherit` 选项仅在 PostgreSQL 16+ 中有效，在早期版本会被忽略并生成警告注释。


----------------

## 角色级参数

### `parameters`

- **类型**：`object`
- **可变性**：可变
- **说明**：角色级配置参数

通过 `ALTER ROLE ... SET` 设置参数，参数会对该用户的所有会话生效。

```yaml
- name: dbuser_analyst
  parameters:
    work_mem: '256MB'
    statement_timeout: '5min'
    search_path: 'analytics,public'
    log_statement: 'all'
```

生成的 SQL：
```sql
ALTER USER "dbuser_analyst" SET "work_mem" = '256MB';
ALTER USER "dbuser_analyst" SET "statement_timeout" = '5min';
ALTER USER "dbuser_analyst" SET "search_path" = 'analytics,public';
ALTER USER "dbuser_analyst" SET "log_statement" = 'all';
```

#### 重置参数为默认值

使用特殊值 `DEFAULT`（大小写不敏感）可以将参数重置为 PostgreSQL 默认值：

```yaml
- name: dbuser_app
  parameters:
    work_mem: DEFAULT         # 重置为 PostgreSQL 默认值
    statement_timeout: '30s'  # 设置新值
```

生成的 SQL：
```sql
ALTER USER "dbuser_app" SET "work_mem" = DEFAULT;
ALTER USER "dbuser_app" SET "statement_timeout" = '30s';
```

#### 常用角色级参数

| 参数 | 说明 | 示例值 |
|------|------|--------|
| `work_mem` | 查询工作内存 | `'64MB'` |
| `statement_timeout` | 语句超时时间 | `'30s'` |
| `lock_timeout` | 锁等待超时 | `'10s'` |
| `idle_in_transaction_session_timeout` | 空闲事务超时 | `'10min'` |
| `search_path` | Schema 搜索路径 | `'app,public'` |
| `log_statement` | 日志记录级别 | `'ddl'` |
| `temp_file_limit` | 临时文件大小限制 | `'10GB'` |


----------------

## 连接池参数

这些参数控制用户在 Pgbouncer 连接池中的行为。

### `pgbouncer`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`false`
- **说明**：是否将用户添加到 Pgbouncer 用户列表

{{% alert title="重要" color="primary" %}}

对于需要通过连接池访问数据库的生产用户，必须显式设置 `pgbouncer: true`。
默认为 `false` 是为了避免意外将内部用户暴露给连接池。

{{% /alert %}}

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

### `pool_mode`

- **类型**：`enum`
- **可变性**：可变
- **可选值**：`transaction`、`session`、`statement`
- **默认值**：`transaction`
- **说明**：用户级别的池化模式

| 模式          | 说明                     | 适用场景                |
|---------------|--------------------------|-------------------------|
| `transaction` | 事务结束后归还连接（默认） | 大多数 OLTP 应用        |
| `session`     | 会话结束后归还连接       | 需要会话状态的应用      |
| `statement`   | 语句结束后归还连接       | 简单无状态查询          |

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

### `pool_connlimit`

- **类型**：`int`
- **可变性**：可变
- **默认值**：`-1`（不限制）
- **说明**：用户级别的连接池最大连接数

```yaml
- name: dbuser_app
  pgbouncer: true
  pool_connlimit: 50         # 此用户最多使用 50 个连接池连接
```


----------------

## ACL系统

Pigsty 具有一套内置的，开箱即用的访问控制 / [ACL](/docs/pgsql/security/#默认角色) 系统，您只需将以下四个默认角色分配给业务用户即可轻松使用：

- `dbrole_readwrite`：全局读写访问的角色（主属业务使用的生产账号应当具有数据库读写权限）
- `dbrole_readonly`：全局只读访问的角色（如果别的业务想要只读访问，可以使用此角色）
- `dbrole_admin`：拥有DDL权限的角色 （业务管理员，需要在应用中建表的场景）
- `dbrole_offline`：受限的只读访问角色（只能访问 [offline](/docs/pgsql/config#离线从库) 实例，通常是个人用户）

如果您希望重新设计您自己的 ACL 系统，可以考虑定制以下参数和模板：

- [`pg_default_roles`](/docs/pgsql/param#pg_default_roles)：系统范围的角色和全局用户
- [`pg_default_privileges`](/docs/pgsql/param#pg_default_privileges)：新建对象的默认权限
- [`roles/pgsql/templates/pg-init-role.sql`](https://github.com/Vonng/pigsty/blob/main/roles/pgsql/templates/pg-init-role.sql)：角色创建 SQL 模板
- [`roles/pgsql/templates/pg-init-template.sql`](https://github.com/Vonng/pigsty/blob/main/roles/pgsql/templates/pg-init-template.sql)：权限 SQL 模板


----------------

## Pgbouncer用户

默认情况下启用 Pgbouncer，并作为连接池中间件，其用户默认被管理。

Pigsty 默认将 [`pg_users`](/docs/pgsql/param#pg_users) 中显式带有 `pgbouncer: true` 标志的所有用户添加到 pgbouncer 用户列表中。

Pgbouncer 连接池中的用户在 `/etc/pgbouncer/userlist.txt` 中列出：

```ini
"postgres" ""
"dbuser_wiki" "SCRAM-SHA-256$4096:+77dyhrPeFDT/TptHs7/7Q==$KeatuohpKIYzHPCt/tqBu85vI11o9mar/by0hHYM2W8=:X9gig4JtjoS8Y/o1vQsIX/gY1Fns8ynTXkbWOjUfbRQ="
"dbuser_view" "SCRAM-SHA-256$4096:DFoZHU/DXsHL8MJ8regdEw==$gx9sUGgpVpdSM4o6A2R9PKAUkAsRPLhLoBDLBUYtKS0=:MujSgKe6rxcIUMv4GnyXJmV0YNbf39uFRZv724+X1FE="
"dbuser_monitor" "SCRAM-SHA-256$4096:fwU97ZMO/KR0ScHO5+UuBg==$CrNsmGrx1DkIGrtrD1Wjexb/aygzqQdirTO1oBZROPY=:L8+dJ+fqlMQh7y4PmVR/gbAOvYWOr+KINjeMZ8LlFww="
"dbuser_meta" "SCRAM-SHA-256$4096:leB2RQPcw1OIiRnPnOMUEg==$eyC+NIMKeoTxshJu314+BmbMFpCcspzI3UFZ1RYfNyU=:fJgXcykVPvOfro2MWNkl5q38oz21nSl1dTtM65uYR1Q="
```

而用户级别的连接池参数则是使用另一个单独的文件： `/etc/pgbouncer/useropts.txt` 进行维护，比如：

```ini
dbuser_dba                  = pool_mode=session max_user_connections=16
dbuser_monitor              = pool_mode=session max_user_connections=8
```

当您[创建用户](/docs/pgsql/admin/user#创建用户)时，Pgbouncer 的用户列表定义文件将会被刷新，并通过在线重载配置的方式生效，不会影响现有的连接。

Pgbouncer 使用和 PostgreSQL 同样的 `dbsu` 运行，默认为 `postgres` 操作系统用户，您可以使用 `pgb` 别名，使用 dbsu 访问 pgbouncer 管理功能。

请注意，[`pgbouncer_auth_query`](/docs/pgsql/param#pgbouncer_auth_query) 参数允许你使用动态查询来完成连接池用户认证，当您懒得管理连接池中的用户时，这是一种折中的方案。

关于用户管理操作，请参考 [用户管理](/docs/pgsql/admin/user) 一节。

关于用户的访问权限，请参考 [ACL：角色权限](/docs/pgsql/security/#默认角色) 一节。

---
title: 用户管理
weight: 1605
description: 用户管理：创建、修改、删除用户，管理角色成员关系，连接池用户配置
icon: fa-solid fa-users
module: [PGSQL]
categories: [任务]
---

在 Pigsty 中，用户管理采用 IaC 的风格，先在配置清单中定义，然后执行剧本执行。

执行 `pgsql-user.yml` 剧本是幂等的。它会将指定集群中的指定用户调整至配置清单中的目标状态。

- [定义用户](#定义用户)
- [创建用户](#创建用户)
- [修改用户](#修改用户)
- [删除用户](#删除用户)
- [管理角色成员](#管理角色成员)
- [管理用户参数](#管理用户参数)
- [管理用户有效期](#管理用户有效期)
- [连接池用户](#连接池用户)
- [操作速查](#操作速查)

请注意，用户的所有属性都可以通过重新执行剧本进行修改，剧本是幂等的。


----------------

## 定义用户

Pigsty通过两个配置参数定义数据库集群中的角色与用户：

- [`pg_default_roles`](/docs/pgsql/param#pg_default_roles)：定义全局统一使用的角色和用户
- [`pg_users`](/docs/pgsql/param#pg_users)：在数据库集群层面定义业务用户和角色

前者用于定义了整套环境中共用的角色与用户，后者定义单个集群中特有的业务角色与用户。二者形式相同，均为用户定义对象的数组。

下面是 Pigsty 演示环境中默认集群 `pg-meta` 中的业务用户定义：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - { name: meta ,baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty] ,extensions: [{name: postgis, schema: public}, {name: timescaledb}]}
      - { name: grafana  ,owner: dbuser_grafana  ,revokeconn: true ,comment: grafana primary database }
      - { name: bytebase ,owner: dbuser_bytebase ,revokeconn: true ,comment: bytebase primary database }
```

唯一必选的字段是 `name`，它应该是当前 PostgreSQL 集群中有效且唯一的用户名，其他参数都有合理的默认值。
关于用户定义参数的完整参考，请查阅 [用户配置参考](/docs/pgsql/config/user)。


----------------

## 创建用户

要在现有的 PostgreSQL 集群上创建新的业务用户，请将用户定义添加到 `all.children.<cls>.pg_users`，然后执行：

```bash
bin/pgsql-user <cls> <username>    # 等效于：pgsql-user.yml -l <cls> -e username=<username>
```

**示例：创建名为 `dbuser_app` 的业务用户**

1. 在配置文件中添加用户定义：

```yaml
pg-meta:
  vars:
    pg_users:
      - name: dbuser_app
        password: DBUser.App
        pgbouncer: true
        roles: [dbrole_readwrite]
        comment: application user for myapp
```

2. 执行创建命令：

```bash
bin/pgsql-user pg-meta dbuser_app
```

**执行效果：**

- 在主库上创建用户 `dbuser_app`
- 设置用户密码
- 授予 `dbrole_readwrite` 角色
- 将用户添加到 Pgbouncer 连接池用户列表
- 重载 Pgbouncer 配置使其生效


{{% alert title="请使用剧本创建用户" color="secondary" %}}

不建议手工使用 SQL 创建业务用户，特别是需要使用 Pgbouncer 连接池时。
使用 **`bin/pgsql-user`** 工具创建用户会自动处理连接池配置。

{{% /alert %}}


**示例：创建业务用户**

[![asciicast](https://asciinema.org/a/568789.svg)](https://asciinema.org/a/568789)


----------------

## 修改用户

修改用户属性可以通过更新配置并重新执行剧本来完成：

```bash
bin/pgsql-user <cls> <username>    # 幂等操作，可重复执行
```

不同于数据库，创建用户的剧本总是幂等的。当目标用户已经存在时，Pigsty会修改目标用户的属性使其符合配置。

### 可修改属性

所有用户属性都可以通过重新执行剧本进行修改：

| 属性 | 说明 | 示例 |
|------|------|------|
| `password` | 用户密码 | `password: NewPassword` |
| `login` | 是否允许登录 | `login: false` |
| `superuser` | 是否为超级用户 | `superuser: true` |
| `createdb` | 是否可创建数据库 | `createdb: true` |
| `createrole` | 是否可创建角色 | `createrole: true` |
| `inherit` | 是否继承角色权限 | `inherit: false` |
| `replication` | 是否可进行复制 | `replication: true` |
| `bypassrls` | 是否可绕过 RLS | `bypassrls: true` |
| `connlimit` | 连接数限制 | `connlimit: 100` |
| `expire_in` | 过期天数 | `expire_in: 30` |
| `expire_at` | 过期日期 | `expire_at: '2024-12-31'` |
| `comment` | 备注信息 | `comment: 新的备注` |
| `roles` | 角色成员（增量操作） | 见[管理角色成员](#管理角色成员) |
| `parameters` | 角色级参数 | 见[管理用户参数](#管理用户参数) |
| `pgbouncer` | 是否加入连接池 | `pgbouncer: true` |
| `pool_mode` | 连接池模式 | `pool_mode: session` |
| `pool_connlimit` | 连接池连接限制 | `pool_connlimit: 50` |

### 修改密码

```yaml
- name: dbuser_app
  password: NewSecretPassword     # 修改密码
```

```bash
bin/pgsql-user pg-meta dbuser_app
```

执行的 SQL：
```sql
SET log_statement TO 'none';
ALTER USER "dbuser_app" PASSWORD 'NewSecretPassword';
SET log_statement TO DEFAULT;
```

**注意**：密码修改时会临时禁用日志记录，避免密码泄露到日志中。

### 修改权限属性

```yaml
- name: dbuser_app
  createdb: true                  # 允许创建数据库
  connlimit: 50                   # 限制连接数
```

执行的 SQL：
```sql
ALTER USER "dbuser_app" CREATEDB;
ALTER USER "dbuser_app" CONNECTION LIMIT 50;
```

### 修改备注

```yaml
- name: dbuser_app
  comment: '应用主账号 - 已更新'
```

执行的 SQL：
```sql
COMMENT ON ROLE "dbuser_app" IS '应用主账号 - 已更新';
```


----------------

## 删除用户

要删除用户，将其 `state` 设置为 `absent` 并执行剧本：

```yaml
pg_users:
  - name: dbuser_old
    state: absent
```

```bash
bin/pgsql-user <cls> dbuser_old
```

**删除操作会：**

1. 使用 `pg-drop-role` 脚本安全删除用户
2. 自动禁用用户登录，终止活跃连接
3. 自动转移数据库/表空间所有权到 `postgres`
4. 自动处理所有数据库中的对象所有权和权限
5. 撤销所有角色成员关系
6. 创建审计日志以便追溯
7. 从 Pgbouncer 用户列表中移除（如果之前添加过）
8. 重载 Pgbouncer 配置


**受保护的系统用户：**

以下系统用户无法通过 `state: absent` 删除，会被自动跳过：

- `postgres`（超级用户）
- `replicator`（或 `pg_replication_username` 配置的用户）
- `dbuser_dba`（或 `pg_admin_username` 配置的用户）
- `dbuser_monitor`（或 `pg_monitor_username` 配置的用户）


{{% alert title="安全删除" color="primary" %}}

Pigsty 使用 `pg-drop-role` 脚本安全删除用户，该脚本会：

- 自动处理用户拥有的数据库、表空间、Schema、表等对象
- 自动终止用户的活跃连接（使用 `--force`）
- 将对象所有权转移给 `postgres` 用户
- 在 `/tmp/pg_drop_role_<user>_<timestamp>.log` 创建审计日志

无需手动处理依赖对象，脚本会自动完成。

{{% /alert %}}


### pg-drop-role 脚本

`pg-drop-role` 是 Pigsty 提供的安全删除用户脚本，位于 `/pg/bin/pg-drop-role`。

**使用方法：**

```bash
pg-drop-role <role_name> [successor_role] [options]
```

**常用选项：**

| 选项 | 说明 |
|------|------|
| `--check` | 只检查依赖关系，不执行删除 |
| `--dry-run` | 显示将要执行的 SQL，不实际执行 |
| `--force` | 强制终止活跃连接后删除 |
| `-v, --verbose` | 显示详细输出 |
| `-h, --host` | 数据库主机 |
| `-p, --port` | 数据库端口 |

**示例：**

```bash
# 检查用户依赖关系（只读操作）
pg-drop-role dbuser_old --check

# 预览删除操作（不实际执行）
pg-drop-role dbuser_old --dry-run -v

# 删除用户，转移对象给 postgres
pg-drop-role dbuser_old

# 删除用户，转移对象给指定用户
pg-drop-role dbuser_old dbuser_new

# 强制删除（终止活跃连接）
pg-drop-role dbuser_old --force
```

**删除流程：**

1. **预检查** - 验证连接、检查用户存在、检查是否受保护
2. **创建审计快照** - 记录用户的所有依赖关系
3. **禁用登录** - `ALTER ROLE ... NOLOGIN`
4. **终止连接** - 使用 `--force` 时终止活跃连接
5. **转移共享对象** - 转移数据库、表空间所有权
6. **处理各数据库** - 在每个数据库中执行 `REASSIGN OWNED` + `DROP OWNED`
7. **撤销成员关系** - 撤销所有角色成员关系
8. **删除角色** - 执行 `DROP ROLE`


### 手动删除用户

如果需要手动删除用户，可以直接使用 `pg-drop-role` 脚本：

```bash
# 登录到数据库主机
ssh <host>

# 检查依赖关系
sudo -u postgres pg-drop-role dbuser_old --check

# 执行删除
sudo -u postgres pg-drop-role dbuser_old --force
```

或使用传统 SQL 方式：

```sql
-- 查看用户拥有的对象
SELECT n.nspname as schema, c.relname as name, c.relkind as type
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
JOIN pg_roles r ON r.oid = c.relowner
WHERE r.rolname = 'dbuser_old';

-- 转移对象所有权
REASSIGN OWNED BY dbuser_old TO postgres;

-- 删除用户拥有的权限
DROP OWNED BY dbuser_old;

-- 删除用户
DROP ROLE dbuser_old;
```


----------------

## 管理角色成员

角色成员关系通过 `roles` 数组配置，支持简单格式和扩展格式。

### 授予角色

```yaml
- name: dbuser_app
  roles:
    - dbrole_readwrite
    - pg_read_all_data
```

执行的 SQL：
```sql
GRANT "dbrole_readwrite" TO "dbuser_app";
GRANT "pg_read_all_data" TO "dbuser_app";
```

### 授予带选项的角色

使用对象格式可以指定更精细的授权选项：

```yaml
- name: dbuser_admin
  roles:
    # 普通授予
    - dbrole_readwrite

    # 可以将此角色授予其他用户
    - { name: dbrole_admin, admin: true }

    # PG16+: 不能 SET ROLE 到此角色
    - { name: pg_monitor, set: false }

    # PG16+: 不自动继承此角色的权限
    - { name: pg_execute_server_program, inherit: false }
```

生成的 SQL（PostgreSQL 16+）：
```sql
GRANT "dbrole_readwrite" TO "dbuser_admin";
GRANT "dbrole_admin" TO "dbuser_admin" WITH ADMIN TRUE;
GRANT "pg_monitor" TO "dbuser_admin";
REVOKE SET OPTION FOR "pg_monitor" FROM "dbuser_admin";
GRANT "pg_execute_server_program" TO "dbuser_admin";
REVOKE INHERIT OPTION FOR "pg_execute_server_program" FROM "dbuser_admin";
```

### 撤销角色成员关系

使用 `state: absent` 撤销角色成员关系：

```yaml
- name: dbuser_app
  roles:
    - dbrole_readwrite                      # 保留此角色
    - { name: old_role, state: absent }     # 撤销此角色
```

执行的 SQL：
```sql
GRANT "dbrole_readwrite" TO "dbuser_app";
REVOKE "old_role" FROM "dbuser_app";
```

### PostgreSQL 16+ 角色选项

PostgreSQL 16 引入了更细粒度的角色成员关系控制：

| 选项 | 说明 | 用途 |
|------|------|------|
| `admin` | ADMIN OPTION | 允许将角色授予其他用户 |
| `set` | SET OPTION | 允许 SET ROLE 切换到该角色 |
| `inherit` | INHERIT OPTION | 是否自动继承角色权限 |

**注意**：`set` 和 `inherit` 选项仅在 PostgreSQL 16+ 中有效，在早期版本会被忽略并在生成的 SQL 中添加警告注释。


----------------

## 管理用户参数

用户级参数通过 `parameters` 字典配置，会生成 `ALTER USER ... SET` 语句。

### 设置参数

```yaml
- name: dbuser_analyst
  parameters:
    work_mem: '256MB'
    statement_timeout: '5min'
    search_path: 'analytics,public'
```

执行的 SQL：
```sql
ALTER USER "dbuser_analyst" SET "work_mem" = '256MB';
ALTER USER "dbuser_analyst" SET "statement_timeout" = '5min';
ALTER USER "dbuser_analyst" SET "search_path" = 'analytics,public';
```

### 重置参数为默认值

使用特殊值 `DEFAULT`（大小写不敏感）将参数重置为 PostgreSQL 默认值：

```yaml
- name: dbuser_app
  parameters:
    work_mem: DEFAULT             # 重置为默认值
    statement_timeout: DEFAULT
```

执行的 SQL：
```sql
ALTER USER "dbuser_app" SET "work_mem" = DEFAULT;
ALTER USER "dbuser_app" SET "statement_timeout" = DEFAULT;
```

### 常用用户级参数

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

## 管理用户有效期

### 设置相对过期时间

使用 `expire_in` 设置从当前日期起 N 天后过期：

```yaml
- name: temp_user
  expire_in: 30                   # 30 天后过期
```

执行的 SQL（假设当前日期为 2024-01-15）：
```sql
ALTER USER "temp_user" VALID UNTIL '2024-02-14';
```

**注意**：每次执行剧本时会重新计算过期时间，适合需要定期续期的临时用户。

### 设置绝对过期时间

使用 `expire_at` 设置固定的过期日期：

```yaml
- name: contractor_user
  expire_at: '2024-12-31'         # 指定日期过期
```

执行的 SQL：
```sql
ALTER USER "contractor_user" VALID UNTIL '2024-12-31';
```

### 设置永不过期

```yaml
- name: permanent_user
  expire_at: 'infinity'           # 永不过期
```

执行的 SQL：
```sql
ALTER USER "permanent_user" VALID UNTIL 'infinity';
```

### 查看用户过期时间

```sql
SELECT rolname, rolvaliduntil
FROM pg_roles
WHERE rolvaliduntil IS NOT NULL
ORDER BY rolvaliduntil;
```


----------------

## 连接池用户

默认情况下，所有带有 `pgbouncer: true` 标志的用户都会添加到 Pgbouncer 连接池中。

### 添加用户到连接池

```yaml
- name: dbuser_app
  password: DBUser.App
  pgbouncer: true                 # 添加到连接池
  pool_mode: transaction          # 池化模式
  pool_connlimit: 50              # 用户最大连接数
```

**执行效果：**

1. 将用户添加到 `/etc/pgbouncer/userlist.txt`
2. 如果指定了 `pool_mode` 或 `pool_connlimit`，添加到 `/etc/pgbouncer/useropts.txt`
3. 重载 Pgbouncer 配置

### 连接池配置文件

**用户列表** `/etc/pgbouncer/userlist.txt`：

```ini
"postgres" ""
"dbuser_app" "SCRAM-SHA-256$4096:xxx$yyy:zzz"
"dbuser_view" "SCRAM-SHA-256$4096:xxx$yyy:zzz"
```

**用户选项** `/etc/pgbouncer/useropts.txt`：

```ini
dbuser_dba                  = pool_mode=session max_user_connections=16
dbuser_monitor              = pool_mode=session max_user_connections=8
dbuser_app                  = pool_mode=transaction max_user_connections=50
```

### 池化模式说明

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| `transaction` | 事务结束后归还连接（默认） | 大多数 OLTP 应用 |
| `session` | 会话结束后归还连接 | 需要会话状态的应用（如 DBA 操作） |
| `statement` | 语句结束后归还连接 | 无状态简单查询 |

### 从连接池移除用户

当用户设置 `state: absent` 或 `pgbouncer: false` 时，会从连接池中移除。

```yaml
- name: dbuser_old
  state: absent                   # 删除用户时自动从连接池移除
```

或：

```yaml
- name: dbuser_internal
  pgbouncer: false                # 仅从连接池移除，保留用户
```

### 使用 Auth Query 动态认证

如果启用了 [`pgbouncer_auth_query`](/docs/pgsql/param#pgbouncer_auth_query)，可以不在 `userlist.txt` 中维护用户，而是通过查询数据库动态认证。这种方式适合用户数量多、变动频繁的场景。


----------------

## 操作速查

### 常用命令

| 操作 | 命令 |
|------|------|
| 创建用户 | `bin/pgsql-user <cls> <username>` |
| 修改用户 | `bin/pgsql-user <cls> <username>` |
| 删除用户 | 设置 `state: absent` 后执行 `bin/pgsql-user <cls> <username>` |
| 查看用户列表 | `psql -c '\du'` |
| 查看用户详情 | `psql -c '\du+ <username>'` |
| 查看连接池用户 | `cat /etc/pgbouncer/userlist.txt` |
| 查看用户选项 | `cat /etc/pgbouncer/useropts.txt` |

### 常见操作示例

```yaml
# 创建基本业务用户
- name: dbuser_app
  password: DBUser.App
  pgbouncer: true
  roles: [dbrole_readwrite]
  comment: application user

# 创建只读用户
- name: dbuser_readonly
  password: DBUser.Readonly
  pgbouncer: true
  roles: [dbrole_readonly]

# 创建 DBA 用户（使用 session 模式）
- name: dbuser_dba
  password: DBUser.DBA
  pgbouncer: true
  pool_mode: session
  roles: [dbrole_admin]
  parameters:
    log_statement: 'all'

# 创建临时用户（30天后过期）
- name: temp_contractor
  password: TempPassword
  expire_in: 30
  roles: [dbrole_readonly]

# 创建角色（不可登录）
- name: custom_role
  login: false
  comment: custom role for special permissions

# 创建带高级角色选项的用户（PG16+）
- name: dbuser_admin
  password: DBUser.Admin
  pgbouncer: true
  roles:
    - dbrole_readwrite
    - { name: dbrole_admin, admin: true }
    - { name: pg_monitor, set: false }

# 删除用户
- name: dbuser_old
  state: absent
```

### 执行流程

`bin/pgsql-user` 执行时会依次：

1. **验证** - 检查 username 参数和用户定义，验证用户名格式
2. **删除**（如果 state=absent）- 执行 DROP ROLE（跳过受保护的系统用户）
3. **创建/修改** - 执行 CREATE USER 或 ALTER USER
4. **设置密码** - 执行 ALTER USER PASSWORD（临时禁用日志）
5. **设置有效期** - 执行 ALTER USER VALID UNTIL
6. **设置连接限制** - 执行 ALTER USER CONNECTION LIMIT
7. **设置参数** - 执行 ALTER USER SET
8. **设置备注** - 执行 COMMENT ON ROLE
9. **授予角色** - 执行 GRANT/REVOKE 处理角色成员关系
10. **更新连接池** - 刷新 Pgbouncer 用户列表并重载


### SQL 查询参考

```sql
-- 查看所有用户
SELECT rolname, rolsuper, rolinherit, rolcreaterole, rolcreatedb,
       rolcanlogin, rolreplication, rolbypassrls, rolconnlimit, rolvaliduntil
FROM pg_roles
WHERE rolname NOT LIKE 'pg_%'
ORDER BY rolname;

-- 查看用户的角色成员关系
SELECT r.rolname AS member, g.rolname AS role,
       m.admin_option, m.set_option, m.inherit_option
FROM pg_auth_members m
JOIN pg_roles r ON r.oid = m.member
JOIN pg_roles g ON g.oid = m.roleid
WHERE r.rolname = 'dbuser_app';

-- 查看用户级参数设置
SELECT rolname, setconfig
FROM pg_db_role_setting s
JOIN pg_roles r ON r.oid = s.setrole
WHERE s.setdatabase = 0;  -- 0 表示用户级设置

-- 查看用户拥有的对象
SELECT n.nspname AS schema, c.relname AS name,
       CASE c.relkind
         WHEN 'r' THEN 'table'
         WHEN 'v' THEN 'view'
         WHEN 'm' THEN 'materialized view'
         WHEN 'i' THEN 'index'
         WHEN 'S' THEN 'sequence'
         WHEN 'f' THEN 'foreign table'
       END AS type
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
JOIN pg_roles r ON r.oid = c.relowner
WHERE r.rolname = 'dbuser_app'
  AND n.nspname NOT IN ('pg_catalog', 'information_schema');

-- 查看即将过期的用户
SELECT rolname, rolvaliduntil,
       rolvaliduntil - CURRENT_TIMESTAMP AS time_remaining
FROM pg_roles
WHERE rolvaliduntil IS NOT NULL
  AND rolvaliduntil < CURRENT_TIMESTAMP + INTERVAL '30 days'
ORDER BY rolvaliduntil;
```


关于用户定义的完整参数参考，请参考 [用户配置](/docs/pgsql/config/user) 一节。

关于用户的访问权限，请参考 [ACL：角色权限](/docs/pgsql/security/#默认角色) 一节。

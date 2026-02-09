---
title: 管理 PostgreSQL 业务用户
linktitle: 用户管理
weight: 20
description: 用户管理：创建、修改、删除用户，管理角色成员关系，连接池用户配置
icon: fa-solid fa-users
module: [PGSQL]
categories: [任务]
---

## 快速上手

Pigsty 使用声明式管理方式，首先在 [**配置清单**](/docs/concept/iac/inventory) 中 [**定义用户**](/docs/pgsql/config/user)，然后使用 `bin/pgsql-user <cls> <username>` 创建或修改用户。

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_users: [{ name: dbuser_app, password: 'DBUser.App', pgbouncer: true }]  # <--- 在这里定义用户列表！
```


{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-user <cls> <username>    # 在 <cls> 集群上创建/修改 <username> 用户
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-user.yml -l pg-meta -e username=dbuser_app    # 直接使用剧本在 <cls> 集群上创建/修改 <username> 用户
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-user pg-meta dbuser_app    # 在 pg-meta 集群上创建/修改 dbuser_app 用户
```
{{% /tab %}}
{{< /tabpane >}}

关于用户定义参数的完整参考，请查阅 [**用户配置**](/docs/pgsql/config/user)。关于用户的访问权限，请参考 [**ACL：角色权限**](/docs/concept/sec/ac/#默认角色与系统用户)。

请注意，用户的 `name` 字段在创建后无法修改。如需更改用户名，请先删除原用户，再创建新用户。

| 操作                  | 快捷命令                          | 说明                          |
|:--------------------|:------------------------------|:----------------------------|
| [**创建用户**](#创建用户) | `bin/pgsql-user <cls> <user>` | 创建新的业务用户或角色                 |
| [**修改用户**](#修改用户) | `bin/pgsql-user <cls> <user>` | 修改已存在用户的属性                  |
| [**删除用户**](#删除用户) | `bin/pgsql-user <cls> <user>` | 安全删除用户（需设置 `state: absent`） |
{.full-width}


{{< asciinema file="demo/pgsql-user.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}


----------------

## 创建用户

定义在 [**`pg_users`**](/docs/pgsql/param#pg_users) 里面的用户会在 PostgreSQL [**集群创建**](/docs/pgsql/admin/cluster#创建集群) 的时候在 `pg_user` 任务中自动创建。

要在现有的 PostgreSQL 集群上创建新的业务用户，请将 [**用户定义**](/docs/pgsql/config/user) 添加到 `all.children.<cls>.pg_users`，然后执行：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-user <cls> <username>   # 创建用户 <username>
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-user.yml -l <cls> -e username=<username>   # 直接使用 Ansible 剧本创建用户
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-user pg-meta dbuser_app    # 例子，在 pg-meta 集群中创建 dbuser_app 用户
```
{{% /tab %}}
{{< /tabpane >}}

**示例配置：创建名为 `dbuser_app` 的业务用户**

```yaml
#all.children.pg-meta.vars.pg_users: # 省略上级缩进
  - name: dbuser_app
    password: DBUser.App
    pgbouncer: true
    roles: [dbrole_readwrite]
    comment: application user for myapp
```

**执行效果**：在主库上创建用户 `dbuser_app`，设置密码，授予 `dbrole_readwrite` 角色权限，
将用户添加到 Pgbouncer 连接池，在每个实例上重载 Pgbouncer 配置使其立即生效。

{{% alert title="建议使用剧本创建用户" color="secondary" %}}
如果您需要手工创建用户，那么需要自行确保 Pgbouncer 连接池用户列表同步。
{{% /alert %}}


----------------

## 修改用户

修改用户与创建用户使用相同的命令，剧本是幂等的。当目标用户已存在时，Pigsty 会修改目标用户的属性使其符合配置。

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-user <cls> <user>   # 修改用户 <user> 的属性
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-user.yml -l <cls> -e username=<user>   # 幂等操作，可重复执行
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-user pg-meta dbuser_app    # 修改 dbuser_app 用户的属性使其符合配置
```
{{% /tab %}}
{{< /tabpane >}}


**不可修改的属性**：用户的 `name`（名称）在创建后无法修改，需要先删除再创建。

其他属性均可修改，以下是一些常见的修改示例：

**修改密码**：更新配置中的 `password` 字段后执行剧本。密码修改时会临时禁用日志记录，避免密码泄露到日志中。

```yaml
- name: dbuser_app
  password: NewSecretPassword     # 修改密码
```

**修改权限属性**：通过配置相应的布尔标志来修改用户权限。

```yaml
- name: dbuser_app
  superuser: false           # 超级用户（谨慎使用！）
  createdb: true             # 允许创建数据库
  createrole: false          # 允许创建角色
  inherit: true              # 自动继承角色权限
  replication: false         # 允许流复制连接
  bypassrls: false           # 绕过行级安全策略
  connlimit: 50              # 限制连接数，-1 不限制
```

**修改用户有效期**：使用 `expire_in` 设置相对过期时间（N 天后过期），或 `expire_at` 设置绝对过期日期。`expire_in` 优先级更高，每次执行剧本时会重新计算，适合需要定期续期的临时用户。

```yaml
- name: temp_user
  expire_in: 30                   # 30 天后过期（相对时间）

- name: contractor_user
  expire_at: '2024-12-31'         # 指定日期过期（绝对时间）

- name: permanent_user
  expire_at: 'infinity'           # 永不过期
```

**修改角色成员关系**：通过 `roles` 数组配置角色成员关系，支持简单格式和扩展格式。角色成员关系是增量操作，不会移除未声明的现有角色。使用 `state: absent` 可以显式撤销角色。

```yaml
- name: dbuser_app
  roles:
    - dbrole_readwrite                      # 简单形式：授予角色
    - { name: dbrole_admin, admin: true }   # 带 ADMIN OPTION（可以将此角色授予其他用户）
    - { name: pg_monitor, set: false }      # PG16+: 不允许 SET ROLE
    - { name: old_role, state: absent }     # 撤销角色成员关系
```

**管理用户参数**：通过 `parameters` 字典配置用户级参数，会生成 `ALTER USER ... SET` 语句。使用特殊值 `DEFAULT` 可将参数重置为 PostgreSQL 默认值。

```yaml
- name: dbuser_analyst
  parameters:
    work_mem: '256MB'
    statement_timeout: '5min'
    search_path: 'analytics,public'
    log_statement: DEFAULT        # 重置为默认值
```

**连接池配置**：设置 `pgbouncer: true` 将用户添加到连接池，可选配置 `pool_mode`（池化模式：transaction/session/statement）和 `pool_connlimit`（用户最大连接数）。

```yaml
- name: dbuser_app
  pgbouncer: true                 # 添加到连接池
  pool_mode: transaction          # 池化模式
  pool_connlimit: 50              # 用户最大连接数
```


----------------

## 删除用户

要删除用户，将其 `state` 设置为 `absent` 并执行剧本：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-user <cls> <user>   # 删除用户 <user>（需在配置中设置 state: absent）
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-user.yml -l <cls> -e username=<user>   # 直接使用 Ansible 剧本删除用户
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-user pg-meta dbuser_old    # 删除 dbuser_old 用户（配置中已设置 state: absent）
```
{{% /tab %}}
{{< /tabpane >}}

**配置示例**：

```yaml
pg_users:
  - name: dbuser_old
    state: absent
```

**删除操作会**：使用 `pg-drop-role` 脚本安全删除用户，自动禁用用户登录并终止活跃连接，自动转移数据库/表空间所有权到 `postgres`，自动处理所有数据库中的对象所有权和权限，撤销所有角色成员关系，创建审计日志，从 Pgbouncer 用户列表中移除并重载配置。

**保护机制**：以下系统用户无法删除，会被自动跳过：`postgres`（超级用户）、`replicator`（或 [**`pg_replication_username`**](/docs/pgsql/param#pg_replication_username) 配置的用户）、`dbuser_dba`（或 [**`pg_admin_username`**](/docs/pgsql/param#pg_admin_username) 配置的用户）、`dbuser_monitor`（或 [**`pg_monitor_username`**](/docs/pgsql/param#pg_monitor_username) 配置的用户）。

{{% alert title="安全删除" color="primary" %}}
Pigsty 使用 `pg-drop-role` 脚本安全删除用户，该脚本会自动处理用户拥有的数据库、表空间、Schema、表等对象，自动终止用户的活跃连接，将对象所有权转移给 `postgres` 用户，并在 `/tmp/pg_drop_role_<user>_<timestamp>.log` 创建审计日志。无需手动处理依赖对象。
{{% /alert %}}


----------------

## 手工删除用户

如果需要手动删除用户，可以直接使用 `pg-drop-role` 脚本：

```bash
# 检查依赖关系（只读操作）
pg-drop-role dbuser_old --check

# 预览删除操作（不实际执行）
pg-drop-role dbuser_old --dry-run -v

# 删除用户，转移对象给 postgres
pg-drop-role dbuser_old

# 强制删除（终止活跃连接）
pg-drop-role dbuser_old --force

# 删除用户，转移对象给指定用户
pg-drop-role dbuser_old dbuser_new
```


----------------

## 常见用例

下面是一些常见的用户配置示例：

**创建基本业务用户**

```yaml
- name: dbuser_app
  password: DBUser.App
  pgbouncer: true
  roles: [dbrole_readwrite]
  comment: application user
```

**创建只读用户**

```yaml
- name: dbuser_readonly
  password: DBUser.Readonly
  pgbouncer: true
  roles: [dbrole_readonly]
```

**创建管理员用户（可执行 DDL）**

```yaml
- name: dbuser_admin
  password: DBUser.Admin
  pgbouncer: true
  pool_mode: session
  roles: [dbrole_admin]
  parameters:
    log_statement: 'all'
```

**创建临时用户（30天后过期）**

```yaml
- name: temp_contractor
  password: TempPassword
  expire_in: 30
  roles: [dbrole_readonly]
```

**创建角色（不可登录，用于权限分组）**

```yaml
- name: custom_role
  login: false
  comment: custom role for special permissions
```

**创建带高级角色选项的用户（PG16+）**

```yaml
- name: dbuser_special
  password: DBUser.Special
  pgbouncer: true
  roles:
    - dbrole_readwrite
    - { name: dbrole_admin, admin: true }
    - { name: pg_monitor, set: false }
    - { name: pg_execute_server_program, inherit: false }
```


----------------

## 查询用户

以下是一些常用的 SQL 查询，用于查看用户信息：

**查看所有用户**

```sql
SELECT rolname, rolsuper, rolinherit, rolcreaterole, rolcreatedb,
       rolcanlogin, rolreplication, rolbypassrls, rolconnlimit, rolvaliduntil
FROM pg_roles WHERE rolname NOT LIKE 'pg_%' ORDER BY rolname;
```

**查看用户的角色成员关系**

```sql
SELECT r.rolname AS member, g.rolname AS role, m.admin_option, m.set_option, m.inherit_option
FROM pg_auth_members m
JOIN pg_roles r ON r.oid = m.member
JOIN pg_roles g ON g.oid = m.roleid
WHERE r.rolname = 'dbuser_app';
```

**查看用户级参数设置**

```sql
SELECT rolname, setconfig FROM pg_db_role_setting s
JOIN pg_roles r ON r.oid = s.setrole WHERE s.setdatabase = 0;
```

**查看即将过期的用户**

```sql
SELECT rolname, rolvaliduntil, rolvaliduntil - CURRENT_TIMESTAMP AS time_remaining
FROM pg_roles WHERE rolvaliduntil IS NOT NULL
  AND rolvaliduntil < CURRENT_TIMESTAMP + INTERVAL '30 days'
ORDER BY rolvaliduntil;
```


----------------

## 连接池管理

在用户定义中配置的 [**连接池参数**](/docs/pgsql/config/user#pgbouncer) 会在创建/修改用户时应用到 Pgbouncer 连接池中。

设置 `pgbouncer: true` 的用户会被添加到 `/etc/pgbouncer/userlist.txt` 文件中。用户级别的连接池参数（`pool_mode`、`pool_connlimit`）通过 `/etc/pgbouncer/useropts.txt` 文件配置。

您可以使用 `postgres` 操作系统用户，使用 `pgb` 别名访问 Pgbouncer 管理数据库。更多连接池管理操作，请参考 [**Pgbouncer 管理**](/docs/pgsql/admin/pgbouncer)。


----------------

## 管理默认用户密码

要修改普通用户的密码， 按照上面 [**修改用户**](#修改用户) 的说明，更新配置中的 `password` 字段并执行剧本即可。
不过修改 **默认用户** 的密码会稍微复杂一些，因为它们的密码还在多个地方被其他服务引用。

| 参数                                                                         | 默认值                 | 对应用户             | 用途                  |
|:---------------------------------------------------------------------------|:--------------------|:-----------------|:--------------------|
| [**`pg_admin_password`**](/docs/pgsql/param#pg_admin_password)             | `DBUser.DBA`        | `dbuser_dba`     | 管理员用户密码             |
| [**`pg_monitor_password`**](/docs/pgsql/param#pg_monitor_password)         | `DBUser.Monitor`    | `dbuser_monitor` | 监控用户密码              |
| [**`pg_replication_password`**](/docs/pgsql/param#pg_replication_password) | `DBUser.Replicator` | `replicator`     | 复制用户密码              |
{.full-width}

要修改 [**`pg_admin_password`**](/docs/pgsql/param#pg_admin_password)，请执行以下命令：

```bash
# Step 1: 修改配置文件中的密码 pg_admin_password 后（重要！），通过剧本批量修改密码
./pgsql-user.yml -e username=dbuser_dba -e '{"pg_users":[{"name":"dbuser_dba","password":"NewPass123"}]}'

# Step 2: 更新所有 PG 节点的 patroni 配置文件与 .pgpass，然后重载 patroni 配置
./pgsql.yml -t pg_conf,pg_pass,patroni_reload -e pg_reload=true

# Step 3: 刷新 /infra/env/.pgpass 以及 /infra/conf/pg_service.conf 对管理员密码的引用
./infra.yml -t env_pgpass,env_pg_service
```

要修改 [**`pg_monitor_password`**](/docs/pgsql/param#pg_monitor_password)，请执行以下命令：

```bash
# Step 1: 修改配置文件中的密码 pg_monitor_password 后（重要！），通过剧本批量修改密码
./pgsql-user.yml -e username=dbuser_monitor -e '{"pg_users":[{"name":"dbuser_monitor","password":"NewPass123"}]}'

# Step 2: 更新所有 PG 节点的 patroni 配置文件与 .pgpass，然后重载 patroni 配置
./pgsql.yml -t pg_conf,pg_pass,patroni_reload -e pg_reload=true

# Step 3: 刷新 pg_exporter 与 pgbouncer_exporter 配置里面使用的密码，更新 Grafana 监控面板中数据源使用的密码
./pgsql.yml -t pg_exporter,pgbouncer_exporter,add_ds
```

要修改 [**`pg_replication_password`**](/docs/pgsql/param#pg_replication_password)，请执行以下命令：

```bash
# Step 1: 修改配置文件中的密码 pg_replication_password 后（重要！），通过剧本批量修改密码
./pgsql-user.yml -e username=replicator -e '{"pg_users":[{"name":"replicator","password":"NewPass123"}]}'

# Step 2: 更新所有 PG 节点的 patorni 配置文件与 .pgpass，然后重载 patroni 配置
./pgsql.yml -t pg_conf,pg_pass,patroni_reload -e pg_reload=true

# Step 3: 更新 Infra 节点的 .pgpass
./infra.yml -t env_pgpass
```

此外，Patroni 本身 RestAPI 的密码 [**`patroni_password`**](/docs/pgsql/param#patroni_password) 可以通过以下命令进行修改：

```bash
# Step 1: 刷新 patroni 配置文件里面配置的密码，并重载 patroni 配置应用生效
./pgsql.yml -t pg_conf,patroni_reload -e pg_reload=true

# Step 2: 刷新 /infra/conf/patronictl.yml 对 patroni 密码的引用
./infra.yml -t env_patroni
```


> 修改前三个密码前，需先用 SQL 修改对应 PostgreSQL 用户的密码：`ALTER USER <username> PASSWORD '<new_password>';`

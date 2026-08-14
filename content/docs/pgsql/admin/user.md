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

关于用户定义参数的完整参考，请查阅 [**用户配置**](/docs/pgsql/config/user)。角色与权限模型参见 [**访问控制**](/docs/concept/sec/ac#角色体系)，认证与凭据管理参见 [**身份认证**](/docs/concept/sec/auth)。

`name` 是 `pgsql-user.yml` 查找用户定义的键，剧本不会执行角色重命名。需要更名时，应先创建新角色，迁移所有权、成员关系与客户端凭据，完成切换和验证后再删除旧角色；不要把“删除后重建”当作无损的重命名操作。

| 操作                  | 快捷命令                          | 说明                          |
|:--------------------|:------------------------------|:----------------------------|
| [**创建用户**](#创建用户) | `bin/pgsql-user <cls> <user>` | 创建新的业务用户或角色                 |
| [**修改用户**](#修改用户) | `bin/pgsql-user <cls> <user>` | 修改已存在用户的属性                  |
| [**删除用户**](#删除用户) | `bin/pgsql-user <cls> <user>` | 依赖感知的破坏性删除（需设置 `state: absent`） |
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


**不可直接修改的属性**：用户的 `name` 是声明式定义的身份键，剧本不会把一个现有角色重命名为另一个角色。应按“创建新角色 → 迁移所有权/权限与客户端 → 验证 → 删除旧角色”的顺序完成更名。

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

删除用户会终止连接、转移对象所有权、撤销授权并执行 `DROP ROLE`，属于不可逆操作。先确认精确的集群名、用户名、继任所有者与近期备份，再将目标用户的 `state` 设置为 `absent` 并执行实际变更。

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-user <cls> <user>   # 确认后实际删除；配置中必须为 state: absent
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

**删除操作会**：在主库调用 `pg-drop-role <user> postgres --force`，先禁用登录并终止活跃连接，将数据库、表空间以及每个可连接数据库中的对象所有权转移给 `postgres`，执行 `DROP OWNED` 清理授权，撤销角色成员关系，最后执行 `DROP ROLE`。脚本在 `/tmp/pg_drop_role_<user>_<timestamp>.log` 保存执行前的审计快照。

**保护机制**：Ansible 任务会跳过 `postgres` 以及清单中配置的复制、管理和监控用户。直接运行 `pg-drop-role` 时，脚本只硬编码保护默认名称 `postgres`、`replicator`、`dbuser_dba`、`dbuser_monitor`；如果改过系统用户名，直接脚本不会自动识别它们，必须额外谨慎。

{{% alert title="依赖感知，但不是事务性删除" color="warning" %}}
`pg-drop-role` 会在 `REASSIGN OWNED` 失败时跳过对应数据库的 `DROP OWNED`，但整个跨数据库流程不是一个事务；中途失败可能留下 `NOLOGIN`、已转移的部分对象或残余依赖。v4.5 的 Ansible 删除任务还使用 `ignore_errors`，因此剧本最终状态不能代替核验。执行后必须确认角色已消失、继任所有权正确、应用已切换，并检查审计日志。
{{% /alert %}}

v4.5 的 `pgsql-user.yml` 会重载 Pgbouncer，但不会可靠地从 `/etc/pgbouncer/userlist.txt` 清除已删除角色。删除后应在每个集群实例检查：

```bash
sudo -iu postgres psql -AXtwc "SELECT 1 FROM pg_roles WHERE rolname = 'dbuser_old';"
grep -n '^"dbuser_old"[[:space:]]' /etc/pgbouncer/userlist.txt
```

若仍有精确匹配的 Pgbouncer 条目，应在受控变更中移除该行、重载 Pgbouncer 并验证应用连接；不要用模糊匹配批量删除。


----------------

## 手工删除用户

如果需要手动删除用户，可以直接使用 `pg-drop-role` 脚本：

```bash
# 检查依赖关系（只读操作）
pg-drop-role dbuser_old --check

# 预览删除操作（不实际执行）
pg-drop-role dbuser_old --dry-run -v

# 确认近期备份、精确用户名与继任所有者后，才执行实际删除
pg-drop-role dbuser_old dbuser_new

# 仅当已明确同意终止连接时使用 --force
pg-drop-role dbuser_old dbuser_new --force
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

这三个账号属于 [**`pg_default_roles`**](/docs/pgsql/param#pg_default_roles)，不在 `pg_users` 中。`pgsql-user.yml` 只查找 `pg_users`，因此不应通过命令行临时覆盖 `pg_users` 来轮换默认密码：这既会改变本次剧本看到的业务用户列表，也会把明文密码留在 shell 历史中。

使用以下通用顺序一次轮换一个账号：

1. 在 `pigsty.yml`（或实际使用的清单）中持久化新的密码参数，不要把明文密码写进命令行。
2. 在当前主库上以超级用户打开交互式 `psql`，使用 `\password <username>` 修改数据库角色密码；该元命令会交互读取密码。
3. 使用下面对应的刷新剧本，并核对 `-l` 限定的集群/节点。
4. 保留当前管理会话，验证 PostgreSQL 直连、Pgbouncer、复制、Exporter 和 Grafana 数据源，再轮换下一个账号。

```bash
# 在目标集群当前主库上，交互修改数据库角色密码
sudo -iu postgres psql -d postgres
\password dbuser_dba       # 或 dbuser_monitor / replicator
```

随后按账号刷新所有消费者；下列命令中的 `<cls>` 与 `infra` 必须替换/限定为实际目标：

```bash
# 管理员 dbuser_dba：PG 节点 .pgpass、Pgbouncer、Infra 管理端与 pgAdmin 文件
./pgsql.yml -l <cls> -t pg_pass,pgbouncer_user,pgbouncer_reload -e pg_reload=true
./infra.yml -l infra -t env_pgpass,env_pgscv,env_pgadmin

# 监控用户 dbuser_monitor：PG 节点 .pgpass、Pgbouncer、两个 Exporter 与 Grafana 数据源
./pgsql.yml -l <cls> -t pg_pass,pgbouncer_user,pgbouncer_reload,pg_exporter,pgbouncer_exporter,add_ds -e pg_reload=true
./infra.yml -l infra -t env_pgpass

# 复制用户 replicator：Patroni 配置、PG 节点 .pgpass 与 Infra .pgpass
./pgsql.yml -l <cls> -t pg_conf,pg_pass,patroni_reload -e pg_reload=true
./infra.yml -l infra -t env_pgpass
```

复制密码在数据库角色与所有 Patroni 节点之间不一致时，新建复制连接会失败，因此应安排维护窗口并快速完成验证。若部署了 VIBE 等会把管理员连接串写入工作区上下文的模块，还应按模块文档重新渲染对应文件。

{{% alert title="检查 Infra .pgpass 重复项" color="warning" %}}
v4.5 的 `env_pgpass` 使用 `lineinfile` 添加新记录，不会按用户名自动删除旧密码；libpq 又采用第一条匹配记录。刷新后应在每个目标 Infra 节点检查每个系统用户名是否只有一条匹配记录，并通过受控编辑删掉旧项（不要把密码打印到终端或日志）：

```bash
awk -F: '$4=="dbuser_dba" || $4=="dbuser_monitor" || $4=="replicator" {print NR, $4}' ~/.pgpass
```
{{% /alert %}}

Patroni REST API 的 [**`patroni_password`**](/docs/pgsql/param#patroni_password) 不是 PostgreSQL 角色密码。修改清单后，应分别刷新目标 PostgreSQL 集群和 Infra 管理端：

```bash
./pgsql.yml -l <cls> -t pg_conf,patroni_reload -e pg_reload=true
./infra.yml -l infra -t env_patroni
```

执行后用 `patronictl` 或 `pig pg list <cls>` 验证认证与集群状态。

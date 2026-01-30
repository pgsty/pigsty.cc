---
title: 参数配置
weight: 70
description: 如何配置集群、实例、用户和数据库级别的 PostgreSQL 参数
icon: fa-solid fa-sliders
module: [PGSQL]
categories: [参考]
---


PostgreSQL 参数可以在多个层级进行配置，不同层级的参数设置具有不同的作用范围和优先级。
Pigsty 支持在四个层级配置 PostgreSQL 参数，从全局到局部依次为：

| 层级                  | 作用范围             | 配置方式                             | 存储位置                     |
|---------------------|------------------|----------------------------------|--------------------------|
| [**集群级**](#集群级参数)   | 整个集群所有实例         | Patroni DCS / 调优模板               | etcd + `postgresql.conf` |
| [**实例级**](#实例级参数)   | 单个 PostgreSQL 实例 | `pg_parameters` / `ALTER SYSTEM` | `postgresql.auto.conf`   |
| [**数据库级**](#数据库级参数) | 特定数据库的所有会话       | `pg_databases[].parameters`      | `pg_db_role_setting`     |
| [**用户级**](#用户级参数)   | 特定用户的所有会话        | `pg_users[].parameters`          | `pg_db_role_setting`     |
{.full-width}

参数优先级从低到高：**集群级 < 实例级 < 数据库级 < 用户级 < 会话级**（`SET` 命令）。
高优先级的设置会覆盖低优先级的设置。

> 关于 PostgreSQL 参数的完整说明，请参阅 [**PostgreSQL 官方文档：服务器配置**](https://www.postgresql.org/docs/current/runtime-config.html)。


----------------

## 集群级参数

集群级参数是整个 PostgreSQL 集群共享的配置，所有实例（主库和从库）都会使用相同的参数值。
在 Pigsty 中，集群级参数通过 [**Patroni**](/docs/pgsql/admin/patroni) 管理，存储在分布式配置存储（DCS，默认为 etcd）中。

Pigsty 提供了四种预置的 [**Patroni 参数优化模板**](/docs/pgsql/template)，针对不同的使用场景进行了优化，通过 [**`pg_conf`**](/docs/pgsql/param#pg_conf) 参数指定：

| 模板                                          | 适用场景   | 特点               |
|---------------------------------------------|--------|------------------|
| [**`oltp.yml`**](/docs/pgsql/template/oltp) | 在线事务处理 | 低延迟、高并发，默认推荐     |
| [**`olap.yml`**](/docs/pgsql/template/olap) | 在线分析处理 | 大查询、高吞吐，适合数仓     |
| [**`crit.yml`**](/docs/pgsql/template/crit) | 核心金融业务 | 最大持久性，牺牲部分性能换取安全 |
| [**`tiny.yml`**](/docs/pgsql/template/tiny) | 微型实例   | 资源受限环境，适合开发测试    |
{.full-width}

调优模板文件位于 Pigsty 安装目录的 `roles/pgsql/templates/` 目录下，包含了根据硬件规格自动计算的参数值。
这些模板会在集群初始化时渲染为 Patroni 配置文件 `/etc/patroni/patroni.yml`。更多详情请参阅 [**场景模板**](/docs/pgsql/template)。

在集群创建前，您可以通过调整这些 Patroni 配置模板来修改集群的 **初始化参数**。
一旦集群初始化完成，后续的参数修改应通过 Patroni 的 [**配置管理**](/docs/pgsql/admin/patroni) 机制进行。


### Patroni DCS 配置

Patroni 将集群配置存储在 DCS（分布式配置存储，默认为 etcd）中，确保集群所有成员使用一致的配置。

**配置存储结构**：

```
/pigsty/                          # 命名空间（patroni_namespace）
  └── pg-meta/                    # 集群名称（pg_cluster）
      ├── config                  # 集群配置（所有成员共享）
      ├── leader                  # 当前主库信息
      ├── members/                # 成员注册信息
      │   ├── pg-meta-1
      │   └── pg-meta-2
      └── ...
```

**配置渲染流程**：

1. **初始化阶段**：调优模板（如 `oltp.yml`）通过 Jinja2 渲染为 `/etc/patroni/patroni.yml`
2. **启动阶段**：Patroni 读取本地配置，将 PostgreSQL 参数写入 DCS
3. **运行阶段**：Patroni 定期从 DCS 同步配置到本地 PostgreSQL

**本地缓存机制**：

每个 Patroni 实例会在本地缓存 DCS 配置，位于 `/pg/conf/<instance>.yml`：

- 启动时：从 DCS 加载配置，缓存到本地
- 运行时：定期同步 DCS 配置到本地缓存
- DCS 不可用时：使用本地缓存继续运行（但无法进行主从切换）


### 配置文件层次

Patroni 会将 DCS 中的配置渲染到本地 PostgreSQL 配置文件，形成以下层次结构：

```
/pg/data/
├── postgresql.conf          # 主配置文件（由 Patroni 动态管理）
├── postgresql.base.conf     # 基础配置（通过 include 指令加载）
├── postgresql.auto.conf     # 实例级覆盖配置（ALTER SYSTEM 写入）
├── pg_hba.conf              # 客户端认证配置
└── pg_ident.conf            # 用户映射配置
```

**配置加载顺序**（优先级从低到高）：

1. `postgresql.conf`：Patroni 动态生成，包含 DCS 中的集群参数
2. `postgresql.base.conf`：通过 `include` 指令加载，包含静态基础配置
3. `postgresql.auto.conf`：PostgreSQL 自动加载，用于实例级参数覆盖

由于 `postgresql.auto.conf` **最后加载**，其中的参数会覆盖前面文件中的同名参数。





----------------

## 实例级参数

实例级参数仅对单个 PostgreSQL 实例生效，用于覆盖集群级配置或设置实例特定的参数。
实例级参数会写入 `postgresql.auto.conf` 文件，由于该文件最后加载，可以覆盖集群级的任何参数。

这是一项非常有用的技术：您可以为特定实例设置不同于集群的参数值，例如：

- 为从库设置 `hot_standby_feedback = on`
- 为特定实例调整 `work_mem` 或 `maintenance_work_mem`
- 为延迟从库设置 `recovery_min_apply_delay`


### 使用 pg_parameters

在 Pigsty 配置中，使用 [**`pg_parameters`**](/docs/pgsql/param#pg_parameters) 参数定义实例级配置：

```yaml
pg-meta:
  hosts:
    10.10.10.10:
      pg_seq: 1
      pg_role: primary
      pg_parameters:                              # 实例级参数
        log_statement: all                        # 仅此实例记录所有 SQL
  vars:
    pg_cluster: pg-meta
    pg_parameters:                                # 集群默认的实例参数
      log_timezone: Asia/Shanghai
      log_min_duration_statement: 1000
```

使用 `./pgsql.yml -l <cls> -t pg_param` 子任务，可以将参数配置应用生效，这些参数会被渲染到 `postgresql.auto.conf` 文件中。


### 参数覆盖层次

`pg_parameters` 可以在 Ansible 配置的不同层次定义，优先级从低到高：

```yaml
all:
  vars:
    pg_parameters:                    # 全局默认
      log_statement: none

  children:
    pg-meta:
      vars:
        pg_parameters:                # 集群级覆盖
          log_statement: ddl
      hosts:
        10.10.10.10:
          pg_parameters:              # 实例级覆盖（最高优先级）
            log_statement: all
```


### 使用 ALTER SYSTEM

除了通过配置文件，还可以在运行时使用 SQL 命令 [**`ALTER SYSTEM`**](https://www.postgresql.org/docs/current/sql-altersystem.html) 修改实例级参数：

```sql
-- 设置参数
ALTER SYSTEM SET work_mem = '256MB';
ALTER SYSTEM SET log_min_duration_statement = 1000;

-- 重置为默认值
ALTER SYSTEM RESET work_mem;
ALTER SYSTEM RESET ALL;  -- 重置所有 ALTER SYSTEM 设置

-- 重新加载配置使其生效
SELECT pg_reload_conf();
```

`ALTER SYSTEM` 会将参数写入 `postgresql.auto.conf` 文件。

> **注意**：在 Pigsty 管理的集群中，`postgresql.auto.conf` 由 Ansible 通过 `pg_parameters` 管理。
> 手动使用 `ALTER SYSTEM` 修改的参数可能会在下次执行 playbook 时被覆盖。
> 建议通过修改 `pigsty.yml` 中的 `pg_parameters` 来管理实例级参数。



### 列表类型参数

PostgreSQL 中有一类特殊的参数接受逗号分隔的列表值。在 YAML 配置文件中配置这类参数时，
**整个值必须用引号包裹**，否则 YAML 解析器会将其解释为数组而导致错误：

```yaml
# ✓ 正确：用引号包裹整个值
pg_parameters:
  shared_preload_libraries: 'timescaledb, pg_stat_statements'
  search_path: '"$user", public, app'

# ✗ 错误：不加引号会导致 YAML 解析错误
pg_parameters:
  shared_preload_libraries: timescaledb, pg_stat_statements   # YAML 会解析为数组！
```

Pigsty 会自动识别以下列表类型参数，在渲染到配置文件时**不添加外层引号**：

| 参数                          | 说明               | 示例值                                 |
|-----------------------------|------------------|-------------------------------------|
| `shared_preload_libraries`  | 预加载共享库           | `'timescaledb, pg_stat_statements'` |
| `search_path`               | Schema 搜索路径      | `'"$user", public, app'`            |
| `local_preload_libraries`   | 本地预加载库           | `'auto_explain'`                    |
| `session_preload_libraries` | 会话预加载库           | `'pg_hint_plan'`                    |
| `log_destination`           | 日志输出目标           | `'csvlog, stderr'`                  |
| `unix_socket_directories`   | Unix Socket 目录   | `'/var/run/postgresql, /tmp'`       |
| `temp_tablespaces`          | 临时表空间            | `'ssd_space, hdd_space'`            |
| `debug_io_direct`           | 直接 I/O 模式（PG16+） | `'data, wal'`                       |
{.full-width}

**渲染示例**：

```yaml
# pigsty.yml 配置（YAML 中需要引号）
pg_parameters:
  shared_preload_libraries: 'timescaledb, pg_stat_statements'
  search_path: '"$user", public, app'
  work_mem: 64MB
```

```ini
# 渲染后的 postgresql.auto.conf（列表参数无外层引号）
shared_preload_libraries = timescaledb, pg_stat_statements
search_path = "$user", public, app
work_mem = '64MB'
```


----------------

## 数据库级参数

数据库级参数针对特定数据库生效，连接到该数据库的所有会话都会应用这些参数设置。
通过 [**`ALTER DATABASE ... SET`**](https://www.postgresql.org/docs/current/sql-alterdatabase.html) 实现，存储在系统表 `pg_db_role_setting` 中。


### 配置方式

在 [**`pg_databases`**](/docs/pgsql/param#pg_databases) 中使用 `parameters` 字段定义：

```yaml
pg_databases:
  - name: analytics
    owner: dbuser_analyst
    parameters:
      work_mem: 256MB                              # 分析库需要更多内存
      maintenance_work_mem: 1GB                    # 大表维护操作
      statement_timeout: 10min                     # 允许长查询
      search_path: '"$user", public, mart'         # 列表参数需要引号
```

> 与实例级参数相同，列表类型参数值在 YAML 中需要用引号包裹。


### 参数渲染规则

数据库级参数通过 `ALTER DATABASE ... SET` 语句设置。Pigsty 会根据参数类型自动选择正确的语法：

**列表类型参数**（`search_path`、`temp_tablespaces`、`local_preload_libraries`、`session_preload_libraries`、`log_destination`）不加外层引号：

```sql
ALTER DATABASE "analytics" SET "search_path" = "$user", public, mart;
```

**标量参数** 使用引号包裹值：

```sql
ALTER DATABASE "analytics" SET "work_mem" = '256MB';
ALTER DATABASE "analytics" SET "statement_timeout" = '10min';
```

> **注意**：虽然 `log_destination` 在数据库级参数白名单中，但由于其 `context` 为 `sighup`，
> 实际上无法在数据库级别生效。此参数应在实例级（`pg_parameters`）配置。


### 查看数据库参数

```sql
-- 查看特定数据库的参数设置
SELECT datname, unnest(setconfig) AS setting
FROM pg_db_role_setting drs
JOIN pg_database d ON d.oid = drs.setdatabase
WHERE drs.setrole = 0 AND datname = 'analytics';
```


### 手动管理

```sql
-- 设置参数
ALTER DATABASE analytics SET work_mem = '256MB';
ALTER DATABASE analytics SET search_path = "$user", public, myschema;

-- 重置参数
ALTER DATABASE analytics RESET work_mem;
ALTER DATABASE analytics RESET ALL;
```


----------------

## 用户级参数

用户级参数针对特定数据库用户生效，该用户的所有会话都会应用这些参数设置。
通过 [**`ALTER USER ... SET`**](https://www.postgresql.org/docs/current/sql-alterrole.html) 实现，同样存储在系统表 `pg_db_role_setting` 中。


### 配置方式

在 [**`pg_users`**](/docs/pgsql/param#pg_users) 或 [**`pg_default_roles`**](/docs/pgsql/param#pg_default_roles) 中使用 `parameters` 字段定义：

```yaml
pg_users:
  - name: dbuser_analyst
    password: DBUser.Analyst
    parameters:
      work_mem: 256MB                              # 分析查询需要更多内存
      statement_timeout: 5min                      # 允许较长的查询时间
      search_path: '"$user", public, analytics'    # 列表参数需要引号
      log_statement: all                           # 记录所有 SQL
```


### 参数渲染规则

用户级参数的渲染规则与数据库级参数相同：

**列表类型参数**（`search_path`、`temp_tablespaces`、`local_preload_libraries`、`session_preload_libraries`）不加外层引号：

```sql
ALTER USER "dbuser_analyst" SET "search_path" = "$user", public, analytics;
```

**标量参数** 使用引号包裹：

```sql
ALTER USER "dbuser_analyst" SET "work_mem" = '256MB';
ALTER USER "dbuser_analyst" SET "statement_timeout" = '5min';
```


### 特殊值 DEFAULT

使用 `DEFAULT`（大小写不敏感）可以将参数重置为 PostgreSQL 默认值：

```yaml
parameters:
  work_mem: DEFAULT          # 重置为默认值
  statement_timeout: 30s     # 设置具体值
```

```sql
ALTER USER "dbuser_app" SET "work_mem" = DEFAULT;
ALTER USER "dbuser_app" SET "statement_timeout" = '30s';
```


### 查看用户参数

```sql
-- 查看特定用户的参数设置
SELECT rolname, unnest(setconfig) AS setting
FROM pg_db_role_setting drs
JOIN pg_roles r ON r.oid = drs.setrole
WHERE rolname = 'dbuser_analyst';
```


### 手动管理

```sql
-- 设置参数
ALTER USER dbuser_app SET work_mem = '128MB';
ALTER USER dbuser_app SET search_path = "$user", public, myschema;

-- 重置参数
ALTER USER dbuser_app RESET work_mem;
ALTER USER dbuser_app RESET ALL;
```


----------------

## 参数优先级

当同一参数在多个层级设置时，PostgreSQL 按以下优先级应用（从低到高）：

```
postgresql.conf           ← 集群级参数（Patroni DCS）
       ↓
postgresql.auto.conf      ← 实例级参数（pg_parameters / ALTER SYSTEM）
       ↓
数据库级                    ← ALTER DATABASE SET
       ↓
用户级                      ← ALTER USER SET
       ↓
会话级                      ← SET 命令
```

**关于数据库级与用户级的优先级**：

当用户连接到特定数据库时，如果同一参数在数据库级和用户级都有设置，
PostgreSQL 会使用 **用户级参数**，因为用户级优先级更高。

**示例场景**：

```yaml
# 数据库级：analytics 数据库 work_mem = 256MB
pg_databases:
  - name: analytics
    parameters:
      work_mem: 256MB

# 用户级：analyst 用户 work_mem = 512MB
pg_users:
  - name: analyst
    parameters:
      work_mem: 512MB
```

- 当 `analyst` 用户连接到 `analytics` 数据库时：`work_mem = 512MB`（用户级优先）
- 当其他用户连接到 `analytics` 数据库时：`work_mem = 256MB`（数据库级生效）
- 当 `analyst` 用户连接到其他数据库时：`work_mem = 512MB`（用户级生效）

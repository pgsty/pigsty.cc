---
title: 数据库管理
weight: 1601
description: 数据库管理：创建、修改、删除、重建数据库，使用模板克隆数据库
icon: fa-solid fa-coins
module: [PGSQL]
categories: [任务]
---

在 Pigsty 中，数据库管理采用 IaC 的风格，先在配置清单中定义，然后执行剧本执行。

在没有定义 `baseline` SQL 的情况下，执行 `pgsql-db.yml` 剧本是幂等的。
它会将指定集群中的指定数据库调整至配置清单中的目标状态。

- [定义数据库](#定义数据库)
- [创建数据库](#创建数据库)
- [修改数据库](#修改数据库)
- [删除数据库](#删除数据库)
- [重建数据库](#重建数据库)
- [克隆数据库](#克隆数据库)
- [管理参数](#管理参数)
- [管理模式](#管理模式)
- [管理扩展](#管理扩展)
- [连接池配置](#连接池配置)
- [操作速查](#操作速查)

请注意，部分参数仅能在创建时指定。修改这些参数需要先删除再创建数据库（使用 `state: recreate` 重建数据库）。


----------------

## 定义数据库

业务数据库定义在数据库集群参数 [`pg_databases`](/docs/pgsql/param#pg_databases) 中，这是一个数据库定义构成的对象数组。
数组内的数据库按照**定义顺序**依次创建，因此后面定义的数据库可以使用先前定义的数据库作为**模板**。

下面是 Pigsty 演示环境中默认集群 `pg-meta` 中的数据库定义：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_databases:
      - { name: meta ,baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty] ,extensions: [{name: postgis, schema: public}, {name: timescaledb}]}
      - { name: grafana  ,owner: dbuser_grafana  ,revokeconn: true ,comment: grafana primary database }
      - { name: bytebase ,owner: dbuser_bytebase ,revokeconn: true ,comment: bytebase primary database }
      - { name: kong     ,owner: dbuser_kong     ,revokeconn: true ,comment: kong the api gateway database }
      - { name: gitea    ,owner: dbuser_gitea    ,revokeconn: true ,comment: gitea meta database }
      - { name: wiki     ,owner: dbuser_wiki     ,revokeconn: true ,comment: wiki meta database }
      - { name: noco     ,owner: dbuser_noco     ,revokeconn: true ,comment: nocodb database }
```

唯一必选的字段是 `name`，它应该是当前 PostgreSQL 集群中有效且唯一的数据库名称，其他参数都有合理的默认值。
关于数据库定义参数的完整参考，请查阅 [数据库配置参考](/docs/pgsql/config/db)。


----------------

## 创建数据库

要在现有的 PostgreSQL 集群上创建新的业务数据库，请将数据库定义添加到 `all.children.<cls>.pg_databases`，然后执行：

```bash
bin/pgsql-db <cls> <dbname>    # 等效于：pgsql-db.yml -l <cls> -e dbname=<dbname>
```

**示例：创建名为 `myapp` 的业务数据库**

1. 在配置文件中添加数据库定义：

```yaml
pg-meta:
  vars:
    pg_databases:
      - name: myapp
        owner: dbuser_myapp
        schemas: [app]
        extensions:
          - { name: pg_trgm }
          - { name: btree_gin }
        comment: my application database
```

2. 执行创建命令：

```bash
bin/pgsql-db pg-meta myapp
```

**执行效果：**

- 在主库上创建数据库 `myapp`
- 设置数据库所有者为 `dbuser_myapp`
- 创建 schema `app`
- 安装扩展 `pg_trgm` 和 `btree_gin`
- 配置默认权限（dbrole_readonly/readwrite/admin）
- 将数据库添加到 Pgbouncer 连接池
- 将数据库注册到 Grafana 数据源


{{% alert title="请使用剧本创建数据库" color="secondary" %}}

不建议手工使用 SQL 创建业务数据库，特别是需要使用 Pgbouncer 连接池时。
使用 **`bin/pgsql-db`** 工具创建数据库会自动处理连接池配置和监控注册。

{{% /alert %}}


----------------

## 修改数据库

修改数据库属性可以通过更新配置并重新执行剧本来完成：

```bash
bin/pgsql-db <cls> <dbname>    # 幂等操作，可重复执行
```

### 可修改属性

| 属性 | 说明 | 示例 |
|------|------|------|
| `owner` | 数据库属主 | `owner: dbuser_new` |
| `tablespace` | 默认表空间（会触发数据迁移） | `tablespace: fast_ssd` |
| `is_template` | 是否标记为模板数据库 | `is_template: true` |
| `allowconn` | 是否允许连接 | `allowconn: false` |
| `connlimit` | 连接数限制 | `connlimit: 100` |
| `revokeconn` | 是否回收 PUBLIC 的 CONNECT 权限 | `revokeconn: true` |
| `comment` | 备注信息 | `comment: 新的备注` |
| `parameters` | 数据库级参数 | 见下方示例 |
| `schemas` | 添加/删除模式（增量操作） | 见[管理模式](#管理模式) |
| `extensions` | 添加/删除扩展（增量操作） | 见[管理扩展](#管理扩展) |
| `pgbouncer` | 是否加入连接池 | `pgbouncer: false` |
| `pool_*` | 连接池参数 | 见[连接池配置](#连接池配置) |

### 不可修改属性

以下属性在数据库创建后无法修改，需要使用 `state: recreate` 重建数据库：

- `template` - 模板数据库
- `encoding` - 字符编码
- `locale` / `lc_collate` / `lc_ctype` - 本地化设置
- `locale_provider` / `icu_locale` / `icu_rules` / `builtin_locale` - 本地化提供者设置
- `strategy` - 克隆策略

### 修改属主

```yaml
- name: myapp
  owner: dbuser_new_owner     # 修改为新属主
```

```bash
bin/pgsql-db pg-meta myapp
```

执行的 SQL：
```sql
ALTER DATABASE "myapp" OWNER TO "dbuser_new_owner";
GRANT ALL PRIVILEGES ON DATABASE "myapp" TO "dbuser_new_owner";
```

### 修改连接限制

```yaml
- name: myapp
  connlimit: 100              # 限制最大 100 个连接
```

执行的 SQL：
```sql
ALTER DATABASE "myapp" CONNECTION LIMIT 100;
```

### 回收公共连接权限

```yaml
- name: myapp
  owner: dbuser_myapp
  revokeconn: true            # 回收 PUBLIC 的 CONNECT 权限
```

执行的 SQL：
```sql
REVOKE CONNECT ON DATABASE "myapp" FROM PUBLIC;
GRANT CONNECT ON DATABASE "myapp" TO "replicator";
GRANT CONNECT ON DATABASE "myapp" TO "dbuser_monitor";
GRANT CONNECT ON DATABASE "myapp" TO "dbuser_dba" WITH GRANT OPTION;
GRANT CONNECT ON DATABASE "myapp" TO "dbuser_myapp" WITH GRANT OPTION;
```

要恢复公共连接权限，设置 `revokeconn: false`：

```yaml
- name: myapp
  revokeconn: false           # 恢复 PUBLIC 的 CONNECT 权限
```

执行的 SQL：
```sql
GRANT CONNECT ON DATABASE "myapp" TO PUBLIC;
```

### 标记为模板数据库

```yaml
- name: app_template
  is_template: true           # 允许任何有 CREATEDB 权限的用户克隆
```

执行的 SQL：
```sql
ALTER DATABASE "app_template" IS_TEMPLATE true;
```

----------------

## 管理参数

数据库级参数通过 `parameters` 字典配置，会生成 `ALTER DATABASE ... SET` 语句。

### 设置参数

```yaml
- name: myapp
  parameters:
    work_mem: '256MB'
    maintenance_work_mem: '512MB'
    statement_timeout: '30s'
    search_path: 'app,public'
```

执行的 SQL：
```sql
ALTER DATABASE "myapp" SET "work_mem" = '256MB';
ALTER DATABASE "myapp" SET "maintenance_work_mem" = '512MB';
ALTER DATABASE "myapp" SET "statement_timeout" = '30s';
ALTER DATABASE "myapp" SET "search_path" = 'app,public';
```

### 重置参数为默认值

使用特殊值 `DEFAULT`（大小写不敏感）可以将参数重置为 PostgreSQL 默认值：

```yaml
- name: myapp
  parameters:
    work_mem: DEFAULT         # 重置为 PostgreSQL 默认值
    statement_timeout: DEFAULT
```

执行的 SQL：
```sql
ALTER DATABASE "myapp" SET "work_mem" = DEFAULT;
ALTER DATABASE "myapp" SET "statement_timeout" = DEFAULT;
```

### 常用数据库级参数

| 参数 | 说明 | 示例值 |
|------|------|--------|
| `work_mem` | 查询工作内存 | `'64MB'` |
| `maintenance_work_mem` | 维护操作内存 | `'256MB'` |
| `statement_timeout` | 语句超时时间 | `'30s'` |
| `lock_timeout` | 锁等待超时 | `'10s'` |
| `idle_in_transaction_session_timeout` | 空闲事务超时 | `'10min'` |
| `search_path` | Schema 搜索路径 | `'app,public'` |
| `default_tablespace` | 默认表空间 | `'fast_ssd'` |
| `temp_tablespaces` | 临时表空间 | `'temp_ssd'` |
| `log_statement` | 日志记录级别 | `'ddl'` |


----------------

## 管理模式

模式（Schema）通过 `schemas` 数组配置，支持创建、指定属主和删除操作。

### 创建模式

```yaml
- name: myapp
  schemas:
    # 简单形式：只指定模式名
    - app
    - api

    # 完整形式：指定属主
    - { name: core, owner: dbuser_myapp }
```

执行的 SQL：
```sql
CREATE SCHEMA IF NOT EXISTS "app";
CREATE SCHEMA IF NOT EXISTS "api";
CREATE SCHEMA IF NOT EXISTS "core" AUTHORIZATION "dbuser_myapp";
```

### 指定模式属主

使用 `owner` 字段可以为模式指定属主，这在多租户或权限隔离场景中非常有用：

```yaml
- name: multi_tenant_db
  owner: dbuser_admin
  schemas:
    - { name: tenant_a, owner: dbuser_tenant_a }
    - { name: tenant_b, owner: dbuser_tenant_b }
    - { name: shared, owner: dbuser_admin }
```

### 删除模式

使用 `state: absent` 标记要删除的模式：

```yaml
- name: myapp
  schemas:
    - { name: deprecated_schema, state: absent }
```

执行的 SQL：
```sql
DROP SCHEMA IF EXISTS "deprecated_schema" CASCADE;
```

{{% alert title="CASCADE 警告" color="warning" %}}

删除模式使用 `CASCADE` 选项，会同时删除模式内的所有对象（表、视图、函数等）。
请确保理解影响范围后再执行删除操作。

{{% /alert %}}


----------------

## 管理扩展

扩展通过 `extensions` 数组配置，支持安装和卸载操作。

### 安装扩展

```yaml
- name: myapp
  extensions:
    # 简单形式：只指定扩展名
    - postgis
    - pg_trgm

    # 完整形式：指定 schema 和版本
    - { name: vector, schema: public }
    - { name: pg_stat_statements, schema: monitor, version: '1.10' }
```

执行的 SQL：
```sql
CREATE EXTENSION IF NOT EXISTS "postgis" CASCADE;
CREATE EXTENSION IF NOT EXISTS "pg_trgm" CASCADE;
CREATE EXTENSION IF NOT EXISTS "vector" WITH SCHEMA "public" CASCADE;
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "monitor" VERSION '1.10' CASCADE;
```

### 卸载扩展

使用 `state: absent` 标记要卸载的扩展：

```yaml
- name: myapp
  extensions:
    - { name: pg_trgm, state: absent }    # 卸载扩展
    - { name: postgis }                    # 保留扩展
```

执行的 SQL：
```sql
DROP EXTENSION IF EXISTS "pg_trgm" CASCADE;
CREATE EXTENSION IF NOT EXISTS "postgis" CASCADE;
```

{{% alert title="CASCADE 警告" color="warning" %}}

卸载扩展使用 `CASCADE` 选项，会同时删除依赖该扩展的所有对象（视图、函数等）。
请确保理解影响范围后再执行卸载操作。

{{% /alert %}}


----------------

## 删除数据库

要删除数据库，将其 `state` 设置为 `absent` 并执行剧本：

```yaml
pg_databases:
  - name: olddb
    state: absent
```

```bash
bin/pgsql-db <cls> olddb
```

**删除操作会：**

1. 如果数据库标记为 `is_template: true`，先执行 `ALTER DATABASE ... IS_TEMPLATE false`
2. 使用 `DROP DATABASE ... WITH (FORCE)` 强制删除数据库（PG13+）
3. 终止所有到该数据库的活动连接
4. 从 Pgbouncer 连接池中移除该数据库
5. 从 Grafana 数据源中取消注册

**保护机制：**

- 系统数据库 `postgres`、`template0`、`template1` 无法删除
- 删除操作仅在主库上执行，流复制会自动同步到从库


{{% alert title="危险操作警告" color="danger" %}}

删除数据库是**不可逆**操作，会永久删除该数据库中的所有数据。
执行前请确保：
- 已有最新的数据库备份
- 已确认没有业务在使用该数据库
- 已通知相关干系人

{{% /alert %}}


----------------

## 重建数据库

`recreate` 状态用于重建数据库，等效于先删除再创建：

```yaml
pg_databases:
  - name: testdb
    state: recreate
    owner: dbuser_test
    baseline: test_init.sql    # 重建后执行初始化
```

```bash
bin/pgsql-db <cls> testdb
```

**适用场景：**

- 测试环境重置
- 清空开发数据库
- 修改不可变属性（编码、本地化等）
- 恢复数据库到初始状态

**与手动 DROP + CREATE 的区别：**

- 单条命令完成，无需两次操作
- 自动保留 Pgbouncer 和 Grafana 配置
- 执行后自动加载 `baseline` 初始化脚本


----------------

## 克隆数据库

可以使用现有数据库作为模板创建新数据库，实现数据库结构的快速复制。

### 基本克隆

```yaml
pg_databases:
  # 1. 首先定义模板数据库
  - name: app_template
    owner: dbuser_app
    schemas: [core, api]
    extensions: [postgis, pg_trgm]
    baseline: app_schema.sql

  # 2. 使用模板创建业务数据库
  - name: app_prod
    template: app_template
    owner: dbuser_app
```

### 指定克隆策略（PG15+）

```yaml
- name: app_staging
  template: app_template
  strategy: FILE_COPY        # 或 WAL_LOG
  owner: dbuser_app
```

| 策略 | 说明 | 适用场景 |
|------|------|----------|
| `FILE_COPY` | 直接复制数据文件 | 大模板，通用场景 |
| `WAL_LOG` | 通过 WAL 日志复制 | 小模板，不阻塞模板连接 |

### 使用自定义模板数据库

当使用非系统模板（非 `template0`/`template1`）时，Pigsty 会自动终止模板数据库上的连接以允许克隆。

```yaml
- name: new_db
  template: existing_db      # 使用现有业务数据库作为模板
  owner: dbuser_app
```

### 标记为模板数据库

默认只有超级用户或数据库所有者可以使用普通数据库作为模板。
使用 `is_template: true` 可以允许任何有 `CREATEDB` 权限的用户克隆：

```yaml
- name: shared_template
  is_template: true          # 允许任何有 CREATEDB 权限的用户克隆
  owner: dbuser_app
```

### 使用 ICU 本地化提供者

使用 `icu` 本地化提供者时，必须指定 `template: template0`：

```yaml
- name: myapp_icu
  template: template0        # 必须使用 template0
  locale_provider: icu
  icu_locale: en-US
  encoding: UTF8
```


----------------

## 连接池配置

默认情况下，所有业务数据库都会添加到 Pgbouncer 连接池中。

### 数据库级连接池参数

```yaml
- name: myapp
  pgbouncer: true              # 是否加入连接池（默认 true）
  pool_mode: transaction       # 池化模式：transaction/session/statement
  pool_size: 64                # 默认池大小
  pool_size_min: 0             # 最小池大小
  pool_reserve: 32             # 保留连接数
  pool_connlimit: 100          # 最大数据库连接
  pool_auth_user: dbuser_meta  # 认证查询用户
```

### 生成的配置

配置文件位于 `/etc/pgbouncer/database.txt`：

```ini
myapp                       = host=/var/run/postgresql pool_mode=transaction pool_size=64
```

### 隐藏数据库

某些内部数据库可能不需要通过连接池访问：

```yaml
- name: internal_db
  pgbouncer: false           # 不加入连接池
```

### 池化模式说明

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| `transaction` | 事务结束后归还连接（默认） | 大多数 OLTP 应用 |
| `session` | 会话结束后归还连接 | 需要会话状态的应用 |
| `statement` | 语句结束后归还连接 | 无状态查询 |


----------------

## 本地化提供者

PostgreSQL 15+ 引入了 `locale_provider` 参数，支持不同的本地化实现。

### 使用 ICU 提供者（PG15+）

```yaml
- name: myapp_icu
  template: template0        # ICU 必须使用 template0
  locale_provider: icu
  icu_locale: en-US          # ICU 本地化规则
  encoding: UTF8
```

### 使用内置提供者（PG17+）

```yaml
- name: myapp_builtin
  template: template0
  locale_provider: builtin
  builtin_locale: C.UTF-8    # 内置本地化规则
  encoding: UTF8
```

### ICU 排序规则（PG16+）

```yaml
- name: myapp_custom_icu
  template: template0
  locale_provider: icu
  icu_locale: en-US
  icu_rules: '&V << w <<< W'  # 自定义 ICU 排序规则
```

### 提供者对比

| 提供者 | 版本要求 | 特点 |
|--------|----------|------|
| `libc` | - | 传统方式，依赖操作系统 |
| `icu` | PG15+ | 跨平台一致，功能丰富 |
| `builtin` | PG17+ | 最高效的 C/C.UTF-8 排序 |


----------------

## 操作速查

### 常用命令

| 操作 | 命令 |
|------|------|
| 创建数据库 | `bin/pgsql-db <cls> <dbname>` |
| 修改数据库 | `bin/pgsql-db <cls> <dbname>` |
| 删除数据库 | 设置 `state: absent` 后执行 `bin/pgsql-db <cls> <dbname>` |
| 重建数据库 | 设置 `state: recreate` 后执行 `bin/pgsql-db <cls> <dbname>` |
| 查看数据库列表 | `psql -c '\l'` |
| 查看连接池数据库 | `cat /etc/pgbouncer/database.txt` |

### 常见操作示例

```yaml
# 创建基本数据库
- name: myapp
  owner: dbuser_myapp
  comment: my application database

# 创建带扩展的数据库
- name: geodata
  owner: dbuser_geo
  extensions: [postgis, postgis_topology]

# 限制连接的私有数据库
- name: secure_db
  owner: dbuser_secure
  revokeconn: true
  connlimit: 10

# 设置数据库级参数
- name: analytics
  owner: dbuser_analyst
  parameters:
    work_mem: '512MB'
    statement_timeout: '5min'

# 使用 ICU 本地化
- name: i18n_db
  template: template0
  locale_provider: icu
  icu_locale: zh-Hans
  encoding: UTF8

# 删除数据库
- name: old_db
  state: absent

# 重建数据库
- name: test_db
  state: recreate
  baseline: test_init.sql
```

### 执行流程

`bin/pgsql-db` 执行时会依次：

1. **验证** - 检查 dbname 参数和数据库定义
2. **删除**（如果 state=absent/recreate）- 执行 DROP DATABASE
3. **创建**（如果 state=create/recreate）- 执行 CREATE DATABASE
4. **配置** - 执行 ALTER DATABASE 设置属性
5. **初始化** - 创建 schema、安装扩展、执行 baseline
6. **注册** - 更新 Pgbouncer 和 Grafana 数据源

关于数据库的访问权限，请参考 [ACL：数据库权限](/docs/pgsql/security/#数据库权限) 一节。

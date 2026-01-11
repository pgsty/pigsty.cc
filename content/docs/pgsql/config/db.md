---
title: 数据库
weight: 1205
description: 数据库指的是使用 SQL 命令 `CREATE DATABASE` 创建的，数据库集簇内的逻辑对象。
icon: fa-solid fa-coins
module: [PGSQL]
categories: [参考]
---


> 在这里的上下文中，数据库指的是使用 SQL 命令 `CREATE DATABASE` 创建的，数据库集簇内的逻辑对象。

一组 PostgreSQL 服务器可以同时服务于多个 **数据库** （Database）。在 Pigsty 中，你可以在集群配置中[定义](#定义数据库)好所需的数据库。

Pigsty会对默认模板数据库`template1`进行修改与定制，创建默认模式，安装默认扩展，配置默认权限，新创建的数据库默认会从`template1`继承这些设置。

默认情况下，所有业务数据库都会被1:1添加到 Pgbouncer 连接池中；`pg_exporter` 默认会通过 **自动发现** 机制查找所有业务数据库并进行库内对象监控。


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

每个数据库定义都是一个 object，可能包括以下字段，以 `meta` 数据库为例：

```yaml
- name: meta                      # 必选，`name` 是数据库定义的唯一必选字段
  state: create                   # 可选，数据库状态：create（创建，默认）、absent（删除）、recreate（重建）
  baseline: cmdb.sql              # 可选，数据库 sql 的基线定义文件路径（ansible 搜索路径中的相对路径，如 files/）
  pgbouncer: true                 # 可选，是否将此数据库添加到 pgbouncer 数据库列表？默认为 true
  schemas: [pigsty]               # 可选，要创建的附加模式，由模式名称字符串组成的数组
  extensions:                     # 可选，要安装的附加扩展： 扩展对象的数组
    - { name: postgis , schema: public }  # 可以指定将扩展安装到某个模式中，也可以不指定（不指定则安装到 search_path 首位模式中）
    - { name: timescaledb }               # 例如有的扩展会创建并使用固定的模式，就不需要指定模式。
  comment: pigsty meta database   # 可选，数据库的说明与备注信息
  owner: postgres                 # 可选，数据库所有者，不指定则为当前用户
  template: template1             # 可选，要使用的模板，默认为 template1，目标必须是一个模板数据库
  strategy: FILE_COPY             # 可选，克隆策略：FILE_COPY 或 WAL_LOG（PG15+），不指定使用 PG 默认
  encoding: UTF8                  # 可选，不指定则继承模板/集群配置（UTF8）
  locale: C                       # 可选，不指定则继承模板/集群配置（C）
  lc_collate: C                   # 可选，不指定则继承模板/集群配置（C）
  lc_ctype: C                     # 可选，不指定则继承模板/集群配置（C）
  locale_provider: libc           # 可选，本地化提供者：libc、icu、builtin（PG15+）
  icu_locale: en-US               # 可选，ICU 本地化规则（PG15+）
  icu_rules: ''                   # 可选，ICU 排序规则（PG16+）
  builtin_locale: C.UTF-8         # 可选，内置本地化提供者规则（PG17+）
  tablespace: pg_default          # 可选，默认表空间，默认为 'pg_default'
  is_template: false              # 可选，是否标记为模板数据库，允许任何有 CREATEDB 权限的用户克隆
  allowconn: true                 # 可选，是否允许连接，默认为 true。显式设置 false 将完全禁止连接到此数据库
  revokeconn: false               # 可选，撤销公共连接权限。默认为 false，设置为 true 时，属主和管理员之外用户的 CONNECT 权限会被回收
  register_datasource: true       # 可选，是否将此数据库注册到 grafana 数据源？默认为 true，显式设置为 false 会跳过注册
  connlimit: -1                   # 可选，数据库连接限制，默认为 -1 ，不限制，设置为正整数则会限制连接数。
  parameters:                     # 可选，数据库级参数，通过 ALTER DATABASE SET 设置
    work_mem: '64MB'
    statement_timeout: '30s'
  pool_auth_user: dbuser_meta     # 可选，连接到此 pgbouncer 数据库的所有连接都将使用此用户进行验证（启用 pgbouncer_auth_query 才有用）
  pool_mode: transaction          # 可选，数据库级别的 pgbouncer 池化模式，默认为 transaction
  pool_size: 64                   # 可选，数据库级别的 pgbouncer 默认池子大小，默认为 64
  pool_reserve: 32                # 可选，数据库级别的 pgbouncer 池子保留空间，默认为 32，当默认池子不够用时，最多再申请这么多条突发连接。
  pool_size_min: 0                # 可选，数据库级别的 pgbouncer 池的最小大小，默认为 0
  pool_connlimit: 100             # 可选，数据库级别的最大数据库连接数，默认为 100
```

唯一必选的字段是 `name`，它应该是当前 PostgreSQL 集群中有效且唯一的数据库名称，其他参数都有合理的默认值。


----------------

## 参数总览

| 字段                  | 分类   | 类型         | 可变性 | 说明                                              |
|-----------------------|--------|--------------|--------|---------------------------------------------------|
| `name`                | 基本   | `string`     | 必选   | 数据库名称，必须是有效且唯一的标识符              |
| `state`               | 基本   | `enum`       | 可选   | 数据库状态：`create`（默认）、`absent`、`recreate`|
| `owner`               | 基本   | `string`     | 可变   | 数据库属主，不指定则为 `postgres`                 |
| `comment`             | 基本   | `string`     | 可变   | 数据库备注信息                                    |
| `template`            | 模板   | `string`     | 不可变 | 创建时使用的模板数据库，默认 `template1`          |
| `strategy`            | 模板   | `enum`       | 不可变 | 克隆策略：`FILE_COPY` 或 `WAL_LOG`（PG15+）       |
| `encoding`            | 编码   | `string`     | 不可变 | 字符编码，默认继承模板（`UTF8`）                  |
| `locale`              | 编码   | `string`     | 不可变 | 本地化规则，默认继承模板（`C`）                   |
| `lc_collate`          | 编码   | `string`     | 不可变 | 排序规则，默认继承模板（`C`）                     |
| `lc_ctype`            | 编码   | `string`     | 不可变 | 字符分类，默认继承模板（`C`）                     |
| `locale_provider`     | 编码   | `enum`       | 不可变 | 本地化提供者：`libc`、`icu`、`builtin`（PG15+）   |
| `icu_locale`          | 编码   | `string`     | 不可变 | ICU 本地化规则（PG15+）                           |
| `icu_rules`           | 编码   | `string`     | 不可变 | ICU 排序定制规则（PG16+）                         |
| `builtin_locale`      | 编码   | `string`     | 不可变 | 内置本地化规则（PG17+）                           |
| `tablespace`          | 存储   | `string`     | 可变   | 默认表空间，修改会触发数据迁移                    |
| `is_template`         | 权限   | `bool`       | 可变   | 是否标记为模板数据库                              |
| `allowconn`           | 权限   | `bool`       | 可变   | 是否允许连接，默认 `true`                         |
| `revokeconn`          | 权限   | `bool`       | 可变   | 是否回收 PUBLIC 的 CONNECT 权限                   |
| `connlimit`           | 权限   | `int`        | 可变   | 连接数限制，`-1` 表示不限制                       |
| `baseline`            | 初始化 | `string`     | 一次性 | SQL 基线文件路径，仅首次创建时执行                |
| `schemas`             | 初始化 | `(string\|object)[]` | 增量   | 要创建的模式定义数组                              |
| `extensions`          | 初始化 | `object[]`   | 增量   | 要安装的扩展定义数组                              |
| `parameters`          | 初始化 | `object`     | 可变   | 数据库级参数                                      |
| `pgbouncer`           | 连接池 | `bool`       | 可变   | 是否加入连接池，默认 `true`                       |
| `pool_mode`           | 连接池 | `enum`       | 可变   | 池化模式：`transaction`（默认）                   |
| `pool_size`           | 连接池 | `int`        | 可变   | 默认池大小，默认 `64`                             |
| `pool_size_min`       | 连接池 | `int`        | 可变   | 最小池大小，默认 `0`                              |
| `pool_reserve`        | 连接池 | `int`        | 可变   | 保留池大小，默认 `32`                             |
| `pool_connlimit`      | 连接池 | `int`        | 可变   | 最大数据库连接数，默认 `100`                      |
| `pool_auth_user`      | 连接池 | `string`     | 可变   | 认证查询用户                                      |
| `register_datasource` | 监控   | `bool`       | 可变   | 是否注册到 Grafana 数据源，默认 `true`            |


### 可变性说明

| 可变性 | 含义                                          |
|--------|-----------------------------------------------|
| 必选   | 必须指定的字段                                |
| 可选   | 可选字段，有默认值                            |
| 不可变 | 仅在创建时生效，创建后无法修改，需重建数据库  |
| 可变   | 可通过重新执行剧本修改                        |
| 一次性 | 仅在首次创建时执行，已存在的数据库不会重复执行|
| 增量   | 只会添加新内容，不会删除已有内容              |


----------------

## 基本参数

### `name`

- **类型**：`string`
- **可变性**：必选
- **说明**：数据库名称，集群内唯一标识符

数据库名称必须是有效的 PostgreSQL 标识符，建议使用小写字母、数字和下划线，避免使用特殊字符。

```yaml
- name: myapp              # 简单命名
- name: my_application     # 下划线分隔
- name: app_v2             # 包含版本号
```

### `state`

- **类型**：`enum`
- **可变性**：可选
- **默认值**：`create`
- **可选值**：`create`、`absent`、`recreate`
- **说明**：数据库目标状态

| 状态       | 说明                                           |
|------------|------------------------------------------------|
| `create`   | 创建数据库（默认），已存在则跳过               |
| `absent`   | 删除数据库，使用 `DROP DATABASE WITH (FORCE)`  |
| `recreate` | 先删除再创建，用于重置数据库                   |

```yaml
- name: myapp                # state 默认为 create
- name: olddb
  state: absent              # 删除数据库
- name: testdb
  state: recreate            # 重建数据库
```

### `owner`

- **类型**：`string`
- **可变性**：可变
- **默认值**：`postgres`（当前用户）
- **说明**：数据库所有者

指定的用户必须已存在。修改 owner 会执行：

```sql
ALTER DATABASE "myapp" OWNER TO "new_owner";
GRANT ALL PRIVILEGES ON DATABASE "myapp" TO "new_owner";
```

### `comment`

- **类型**：`string`
- **可变性**：可变
- **默认值**：`business database {name}`
- **说明**：数据库备注信息

会执行 `COMMENT ON DATABASE` 语句。支持中文和特殊字符（会自动转义单引号）。


----------------

## 模板与克隆参数

### `template`

- **类型**：`string`
- **可变性**：不可变
- **默认值**：`template1`
- **说明**：创建数据库时使用的模板

常用模板：

| 模板        | 说明                                              |
|-------------|---------------------------------------------------|
| `template1` | 默认模板，包含 Pigsty 预配置的扩展和权限          |
| `template0` | 干净模板，用于指定不同编码或本地化设置时必须使用  |
| 自定义数据库 | 可以使用已有数据库作为模板克隆                   |

**重要**：使用 `icu` 或 `builtin` 本地化提供者时，必须指定 `template: template0`。

```yaml
- name: myapp_icu
  template: template0        # 使用 ICU 时必须
  locale_provider: icu
  icu_locale: en-US
```

### `strategy`

- **类型**：`enum`
- **可变性**：不可变
- **版本要求**：PostgreSQL 15+
- **可选值**：`FILE_COPY`、`WAL_LOG`
- **说明**：从模板克隆数据库的策略

| 策略        | 说明                           | 适用场景              |
|-------------|--------------------------------|-----------------------|
| `FILE_COPY` | 直接复制数据文件（PG15+ 默认） | 大模板，通用场景      |
| `WAL_LOG`   | 通过 WAL 日志复制              | 小模板，不阻塞连接    |

在 PostgreSQL 14 及更早版本中，此参数会被忽略。


----------------

## 编码与本地化参数

### `encoding`

- **类型**：`string`
- **可变性**：不可变
- **默认值**：继承模板（通常为 `UTF8`）
- **说明**：数据库字符编码

常用编码：`UTF8`、`LATIN1`、`SQL_ASCII`

### `locale`

- **类型**：`string`
- **可变性**：不可变
- **默认值**：继承模板（通常为 `C`）
- **说明**：数据库本地化规则，同时设置 `lc_collate` 和 `lc_ctype`

### `lc_collate`

- **类型**：`string`
- **可变性**：不可变
- **默认值**：继承模板（通常为 `C`）
- **说明**：字符串排序规则

常用值：`C`、`C.UTF-8`、`en_US.UTF-8`、`zh_CN.UTF-8`

### `lc_ctype`

- **类型**：`string`
- **可变性**：不可变
- **默认值**：继承模板（通常为 `C`）
- **说明**：字符分类规则（大小写、数字等）

### `locale_provider`

- **类型**：`enum`
- **可变性**：不可变
- **版本要求**：PostgreSQL 15+
- **可选值**：`libc`、`icu`、`builtin`
- **默认值**：`libc`
- **说明**：本地化实现提供者

| 提供者    | 版本   | 说明                                        |
|-----------|--------|---------------------------------------------|
| `libc`    | -      | 使用操作系统 C 库，传统默认方式             |
| `icu`     | PG15+  | 使用 ICU 库，跨平台一致                     |
| `builtin` | PG17+  | PostgreSQL 内置实现，最高效的 C/C.UTF-8     |

**注意**：使用 `icu` 或 `builtin` 时，必须指定 `template: template0`。

### `icu_locale`

- **类型**：`string`
- **可变性**：不可变
- **版本要求**：PostgreSQL 15+
- **说明**：ICU 本地化规则标识符

常用值：

| 值         | 说明           |
|------------|----------------|
| `en-US`    | 美式英语       |
| `en-GB`    | 英式英语       |
| `zh-Hans`  | 简体中文       |
| `zh-Hant`  | 繁体中文       |
| `ja-JP`    | 日语           |
| `ko-KR`    | 韩语           |

```yaml
- name: chinese_db
  template: template0
  locale_provider: icu
  icu_locale: zh-Hans
  encoding: UTF8
```

### `icu_rules`

- **类型**：`string`
- **可变性**：不可变
- **版本要求**：PostgreSQL 16+
- **说明**：ICU 排序定制规则

用于自定义排序行为，使用 ICU 规则语法。

```yaml
- name: custom_sort_db
  template: template0
  locale_provider: icu
  icu_locale: en-US
  icu_rules: '&V << w <<< W'  # 自定义 V/W 排序
```

### `builtin_locale`

- **类型**：`string`
- **可变性**：不可变
- **版本要求**：PostgreSQL 17+
- **可选值**：`C`、`C.UTF-8`
- **说明**：内置本地化提供者的规则

`builtin` 提供者比 `libc` 更快，特别适合只需要 `C` 或 `C.UTF-8` 排序的场景。

```yaml
- name: fast_db
  template: template0
  locale_provider: builtin
  builtin_locale: C.UTF-8
  encoding: UTF8
```


----------------

## 存储与权限参数

### `tablespace`

- **类型**：`string`
- **可变性**：可变
- **默认值**：`pg_default`
- **说明**：数据库默认表空间

修改表空间会触发数据物理迁移，对于大数据库可能需要较长时间。

```yaml
- name: archive_db
  tablespace: slow_hdd       # 归档数据使用慢速存储
```

### `is_template`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`false`
- **说明**：是否标记为模板数据库

设置为 `true` 后，任何有 `CREATEDB` 权限的用户都可以使用此数据库作为模板克隆新数据库。

```yaml
- name: app_template
  is_template: true          # 允许普通用户克隆
  schemas: [core, api]
  extensions: [postgis]
```

**注意**：标记为 `is_template: true` 的数据库删除时，会先执行 `ALTER DATABASE ... IS_TEMPLATE false`。

### `allowconn`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`true`
- **说明**：是否允许连接到此数据库

设置为 `false` 会完全禁止任何用户连接到此数据库（包括超级用户）。

```yaml
- name: archive_db
  allowconn: false           # 禁止连接
```

### `revokeconn`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`false`
- **说明**：是否回收 PUBLIC 的 CONNECT 权限

设置为 `true` 时：
- 回收 PUBLIC 的 CONNECT 权限
- 授予 replicator、monitor 连接权限
- 授予 admin、owner 连接权限（WITH GRANT OPTION）

设置为 `false` 时：
- 恢复 PUBLIC 的 CONNECT 权限

```yaml
- name: secure_db
  owner: dbuser_secure
  revokeconn: true           # 只有指定用户可连接
```

### `connlimit`

- **类型**：`int`
- **可变性**：可变
- **默认值**：`-1`（不限制）
- **说明**：数据库最大连接数限制

```yaml
- name: limited_db
  connlimit: 50              # 最多 50 个并发连接
```


----------------

## 初始化参数

### `baseline`

- **类型**：`string`
- **可变性**：一次性
- **说明**：SQL 基线文件路径

指定在数据库创建后执行的 SQL 文件，用于初始化表结构、数据等。

- 路径是相对于 Ansible 搜索路径（通常是 `files/` 目录）
- 仅在首次创建数据库时执行
- 使用 `state: recreate` 重建时会重新执行

```yaml
- name: myapp
  baseline: myapp_init.sql   # 会查找 files/myapp_init.sql
```

### `schemas`

- **类型**：`(string | object)[]`
- **可变性**：增量
- **说明**：要创建的模式定义数组

支持两种格式：

```yaml
schemas:
  # 简单格式：只指定模式名
  - app
  - api

  # 完整格式：对象定义
  - name: core               # 模式名（必选）
    owner: dbuser_app        # 模式属主（可选）
  - name: old_schema
    state: absent            # 删除模式
```

**模式属主**：使用 `owner` 指定模式属主，会生成 `AUTHORIZATION` 子句：

```yaml
- name: myapp
  owner: dbuser_myapp
  schemas:
    - name: app
      owner: dbuser_myapp    # 模式属主与数据库属主一致
    - name: audit
      owner: dbuser_audit    # 模式属主为其他用户
```

执行的 SQL：
```sql
CREATE SCHEMA IF NOT EXISTS "app" AUTHORIZATION "dbuser_myapp";
CREATE SCHEMA IF NOT EXISTS "audit" AUTHORIZATION "dbuser_audit";
```

**删除模式**：使用 `state: absent` 删除模式：

```yaml
schemas:
  - { name: deprecated_schema, state: absent }
```

执行的 SQL：
```sql
DROP SCHEMA IF EXISTS "deprecated_schema" CASCADE;
```

**注意**：
- 创建操作是增量的，使用 `IF NOT EXISTS`
- 删除操作使用 `CASCADE`，会同时删除模式内的所有对象

### `extensions`

- **类型**：`object[]`
- **可变性**：增量
- **说明**：要安装的扩展定义数组

支持两种格式：

```yaml
extensions:
  # 简单格式：只指定扩展名
  - postgis
  - pg_trgm

  # 完整格式：对象定义
  - name: vector             # 扩展名（必选）
    schema: public           # 安装到指定 schema（可选）
    version: '0.5.1'         # 指定版本（可选）
    state: absent            # 设为 absent 可卸载扩展（可选）
```

**扩展卸载**：使用 `state: absent` 可以卸载扩展：

```yaml
extensions:
  - { name: pg_trgm, state: absent }  # 卸载 pg_trgm
```

卸载会执行 `DROP EXTENSION IF EXISTS "name" CASCADE`，注意 `CASCADE` 会删除依赖对象。

### `parameters`

- **类型**：`object`
- **可变性**：可变
- **说明**：数据库级配置参数

通过 `ALTER DATABASE ... SET` 设置参数，参数会对连接到此数据库的所有会话生效。

```yaml
- name: analytics
  parameters:
    work_mem: '256MB'
    maintenance_work_mem: '512MB'
    statement_timeout: '5min'
    search_path: 'analytics,public'
```

**重置参数**：使用特殊值 `DEFAULT`（大小写不敏感）重置为 PostgreSQL 默认值：

```yaml
- name: myapp
  parameters:
    work_mem: DEFAULT        # 重置为默认值
    statement_timeout: '30s' # 设置新值
```

执行的 SQL：
```sql
ALTER DATABASE "myapp" SET "work_mem" = DEFAULT;
ALTER DATABASE "myapp" SET "statement_timeout" = '30s';
```


----------------

## 连接池参数

这些参数控制数据库在 Pgbouncer 连接池中的行为。

### `pgbouncer`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`true`
- **说明**：是否将数据库添加到 Pgbouncer 连接池

```yaml
- name: internal_db
  pgbouncer: false           # 不通过连接池访问
```

### `pool_mode`

- **类型**：`enum`
- **可变性**：可变
- **可选值**：`transaction`、`session`、`statement`
- **默认值**：`transaction`
- **说明**：数据库级别的池化模式

| 模式          | 说明                     | 适用场景                |
|---------------|--------------------------|-------------------------|
| `transaction` | 事务结束后归还连接       | 大多数 OLTP 应用        |
| `session`     | 会话结束后归还连接       | 需要会话状态的应用      |
| `statement`   | 语句结束后归还连接       | 简单无状态查询          |

### `pool_size`

- **类型**：`int`
- **可变性**：可变
- **默认值**：`64`
- **说明**：数据库默认连接池大小

### `pool_size_min`

- **类型**：`int`
- **可变性**：可变
- **默认值**：`0`
- **说明**：最小连接池大小，预热连接数

### `pool_reserve`

- **类型**：`int`
- **可变性**：可变
- **默认值**：`32`
- **说明**：保留连接数，突发时可额外申请的连接

### `pool_connlimit`

- **类型**：`int`
- **可变性**：可变
- **默认值**：`100`
- **说明**：通过连接池访问此数据库的最大连接数

### `pool_auth_user`

- **类型**：`string`
- **可变性**：可变
- **说明**：认证查询用户

需要启用 [`pgbouncer_auth_query`](/docs/pgsql/param#pgbouncer_auth_query) 后生效。
指定后，所有到此数据库的连接都会使用该用户查询密码。


----------------

## 监控参数

### `register_datasource`

- **类型**：`bool`
- **可变性**：可变
- **默认值**：`true`
- **说明**：是否注册到 Grafana 数据源

设置为 `false` 可以跳过 Grafana 数据源注册，适用于不需要监控的临时数据库。


----------------

## 模板继承

许多参数如果不显式指定，会从模板数据库继承。默认模板是 `template1`，其编码设置由集群初始化参数决定：

| 集群参数                                              | 默认值   | 说明              |
|-------------------------------------------------------|----------|-------------------|
| [`pg_encoding`](/docs/pgsql/param#pg_encoding)        | `UTF8`   | 集群默认字符编码  |
| [`pg_locale`](/docs/pgsql/param#pg_locale)            | `C`      | 集群默认本地化    |
| [`pg_lc_collate`](/docs/pgsql/param#pg_lc_collate)    | `C`      | 集群默认排序规则  |
| [`pg_lc_ctype`](/docs/pgsql/param#pg_lc_ctype)        | `C`      | 集群默认字符分类  |

新创建的数据库默认会从 `template1` 数据库 Fork 出来，这个模版数据库会在 [`PG_PROVISION`](/docs/pgsql/param#pg_provision) 阶段进行定制修改：
配置好扩展、模式以及默认权限，因此新创建的数据库也会继承这些配置，除非您显式使用一个其他的数据库作为模板。

关于数据库管理操作，请参考 [数据库管理](/docs/pgsql/admin/db) 一节。

关于数据库的访问权限，请参考 [ACL：数据库权限](/docs/concept/sec/ac/#数据库权限) 一节。

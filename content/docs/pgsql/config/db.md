---
title: 数据库
weight: 1205
description: 如何通过配置来定制所需 PostgreSQL 数据库？
icon: fa-solid fa-coins
module: [PGSQL]
categories: [参考]
---


> 在本文中，“数据库”（Database） 指的是使用 SQL 命令 `CREATE DATABASE` 创建的，数据库集簇内的逻辑对象。

一组 PostgreSQL 服务器可以同时服务于多个 **数据库** （Database）。在 Pigsty 中，你可以在集群配置中 [**定义**](#定义数据库) 好所需的数据库。

Pigsty会对默认模板数据库`template1`进行修改与定制，创建默认模式，安装默认扩展，配置默认权限，新创建的数据库默认会从`template1`继承这些设置。
您也可以通过 [**`template`**](#template) 参数指定其他模板数据库，实现瞬间 [**数据库克隆**](/docs/pgsql/admin/db#数据库克隆)。

默认情况下，所有业务数据库都会被 1:1 添加到 [**Pgbouncer**](/docs/concept/arch/pgsql#pgbouncer) [**连接池**](#连接池) 中；[**`pg_exporter`**](/docs/concept/arch/pgsql#pg_exporter) 默认会通过 **自动发现** 机制查找所有业务数据库并进行库内对象监控。
所有数据库也会添加到所有 [**INFRA节点**](/docs/concept/arch/node#infra节点) 上的 [**Grafana**](/docs/concept/arch/infra#grafana) 中，
注册为 PostgreSQL 数据源供 PGCAT 监控面板使用。

----------------

## 定义数据库

业务数据库定义在数据库集群参数 [**`pg_databases`**](/docs/pgsql/param#pg_databases) 中，这是一个数据库定义构成的对象数组。
在集群初始化时，数组内的数据库按照 **定义顺序** 依次创建，因此后面定义的数据库可以使用先前定义的数据库作为**模板**。

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

每个数据库定义都是一个复杂对象，可能包括以下字段，除了 `name` 字段外，其他字段均为可选字段：

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




----------------

## 参数总览

所有参数中唯一 **必选** 的字段是 `name`，它应该是当前 PostgreSQL 集群中有效且唯一的数据库名称，其他参数都有合理的默认值，均为可选项。
带有 “**不可变**” 标记的参数仅在数据库创建时生效，创建后无法修改，若需更改则必须删除并重建数据库。

| 字段                                                | 分类  | 类型                   | 属性  | 说明                                     |
|---------------------------------------------------|-----|----------------------|-----|----------------------------------------|
| [**`name`**](#name)                               | 基本  | `string`             | 必选  | 数据库名称，必须是有效且唯一的标识符                     |
| [**`state`**](#state)                             | 基本  | `enum`               | 可选  | 数据库状态：`create`（默认）、`absent`、`recreate` |
| [**`owner`**](#owner)                             | 基本  | `string`             | 可变  | 数据库属主，不指定则为 `postgres`                 |
| [**`comment`**](#comment)                         | 基本  | `string`             | 可变  | 数据库备注信息                                |
| [**`template`**](#template)                       | 模板  | `string`             | 不可变 | 创建时使用的模板数据库，默认 `template1`             |
| [**`strategy`**](#strategy)                       | 模板  | `enum`               | 不可变 | 克隆策略：`FILE_COPY` 或 `WAL_LOG`（PG15+）    |
| [**`encoding`**](#encoding)                       | 编码  | `string`             | 不可变 | 字符编码，默认继承模板（`UTF8`）                    |
| [**`locale`**](#locale)                           | 编码  | `string`             | 不可变 | 本地化规则，默认继承模板（`C`）                      |
| [**`lc_collate`**](#lc_collate)                   | 编码  | `string`             | 不可变 | 排序规则，默认继承模板（`C`）                       |
| [**`lc_ctype`**](#lc_ctype)                       | 编码  | `string`             | 不可变 | 字符分类，默认继承模板（`C`）                       |
| [**`locale_provider`**](#locale_provider)         | 编码  | `enum`               | 不可变 | 本地化提供者：`libc`、`icu`、`builtin`（PG15+）   |
| [**`icu_locale`**](#icu_locale)                   | 编码  | `string`             | 不可变 | ICU 本地化规则（PG15+）                       |
| [**`icu_rules`**](#icu_rules)                     | 编码  | `string`             | 不可变 | ICU 排序定制规则（PG16+）                      |
| [**`builtin_locale`**](#builtin_locale)           | 编码  | `string`             | 不可变 | 内置本地化规则（PG17+）                         |
| [**`tablespace`**](#tablespace)                   | 存储  | `string`             | 可变  | 默认表空间，修改会触发数据迁移                        |
| [**`is_template`**](#is_template)                 | 权限  | `bool`               | 可变  | 是否标记为模板数据库                             |
| [**`allowconn`**](#allowconn)                     | 权限  | `bool`               | 可变  | 是否允许连接，默认 `true`                       |
| [**`revokeconn`**](#revokeconn)                   | 权限  | `bool`               | 可变  | 是否回收 PUBLIC 的 CONNECT 权限               |
| [**`connlimit`**](#connlimit)                     | 权限  | `int`                | 可变  | 连接数限制，`-1` 表示不限制                       |
| [**`baseline`**](#baseline)                       | 初始化 | `string`             | 可变  | SQL 基线文件路径，仅首次创建时执行                    |
| [**`schemas`**](#schemas)                         | 初始化 | `(string\|object)[]` | 可变  | 要创建的模式定义数组                             |
| [**`extensions`**](#extensions)                   | 初始化 | `(string\|object)[]` | 可变  | 要安装的扩展定义数组                             |
| [**`parameters`**](#parameters)                   | 初始化 | `object`             | 可变  | 数据库级参数                                 |
| [**`pgbouncer`**](#pgbouncer)                     | 连接池 | `bool`               | 可变  | 是否加入连接池，默认 `true`                      |
| [**`pool_mode`**](#pool_mode)                     | 连接池 | `enum`               | 可变  | 池化模式：`transaction`（默认）                 |
| [**`pool_size`**](#pool_size)                     | 连接池 | `int`                | 可变  | 默认池大小，默认 `64`                          |
| [**`pool_size_min`**](#pool_size_min)             | 连接池 | `int`                | 可变  | 最小池大小，默认 `0`                           |
| [**`pool_reserve`**](#pool_reserve)               | 连接池 | `int`                | 可变  | 保留池大小，默认 `32`                          |
| [**`pool_connlimit`**](#pool_connlimit)           | 连接池 | `int`                | 可变  | 最大数据库连接数，默认 `100`                      |
| [**`pool_auth_user`**](#pool_auth_user)           | 连接池 | `string`             | 可变  | 认证查询用户                                 |
| [**`register_datasource`**](#register_datasource) | 监控  | `bool`               | 可变  | 是否注册到 Grafana 数据源，默认 `true`            |
{.full-width}


----------------

## 参数详情

### `name`

字符串，必选参数，表示数据库的名称，在一个数据库集群内集群内必须唯一。

数据库名称必须是有效的 PostgreSQL 标识符，长度不超过 63 个字符，不得使用 SQL 关键字，
形式上以字母或下划线开头，后续字符可以是字母、数字或下划线，不能包含空格或特殊字符。
形式应当满足正则表达式：**`^[A-Za-z_][A-Za-z0-9_$]{0,62}$`**

```yaml
- name: myapp              # 简单命名
- name: my_application     # 下划线分隔
- name: app_v2             # 包含版本号
```

### `state`

枚举值，用于指定要对数据库执行的操作，可以是 `create`、`absent` 或 `recreate`，默认值为 `create`。

| 状态         | 说明                                    |
|------------|---------------------------------------|
| `create`   | 默认，创建或修改数据库，如果已经存在，则将可变参数调整到描述的状态     |
| `absent`   | 删除数据库，使用 `DROP DATABASE WITH (FORCE)` |
| `recreate` | 先删除再创建，用于重置数据库                        |
{.full-width}

```yaml
- name: myapp                # state 默认为 create
- name: olddb
  state: absent              # 删除数据库
- name: testdb
  state: recreate            # 重建数据库
```

### `owner`

字符串，指定数据库的属主用户，默认不指定，不指定则为数据库 [**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu)，即 `postgres` 用户。

要指定数据库的 `owner`，被指定的用户必须已存在。修改 owner 会执行：旧 Owner 在数据库上的权限不会被撤回。

数据库属主具有对数据库的完全控制权限，包括创建模式、表、扩展等对象的权限，对于多租户场景尤为有用。

```sql
ALTER DATABASE "myapp" OWNER TO "new_owner";
GRANT ALL PRIVILEGES ON DATABASE "myapp" TO "new_owner";
```

### `comment`

字符串，用于设置数据库的备注信息，如果不指定，默认值为 `business database {name}`。

数据库备注信息通过 `COMMENT ON DATABASE` 语句设置，支持中文和特殊字符（Pigsty 会自动转义单引号）。
备注信息会存储在系统目录 `pg_database.datacl` 中，可以通过 `\l+` 命令查看。

```sql
COMMENT ON DATABASE "myapp" IS '我的应用主数据库';
```

```yaml
- name: myapp
  comment: 我的应用主数据库
```

### `template`

字符串，**不可变参数**，用于指定创建数据库时使用的模板数据库，默认值为 `template1`。

PostgreSQL 的 `CREATE DATABASE` 本质上是对模板数据库进行复制，新数据库会继承模板中的所有对象、扩展、模式、权限设置等。
Pigsty 会在集群初始化阶段对 `template1` 进行定制配置，因此新建数据库默认会继承这些设置。

| 模板          | 说明                             |
|-------------|--------------------------------|
| `template1` | 默认模板，包含 Pigsty 预配置的扩展、模式和权限设置  |
| `template0` | 干净模板，使用不同于集群默认的本地化提供者时，必须使用此模板 |
| 自定义数据库      | 可以使用已有数据库作为模板进行克隆              |
{.full-width}

使用 `icu` 或 `builtin` 本地化提供者时，必须指定 `template: template0`，因为 `template1` 已有本地化设置无法覆盖。
使用其他

```yaml
- name: myapp_icu
  template: template0        # 使用 ICU 时必须指定 template0
  locale_provider: icu
  icu_locale: zh-Hans
```

使用 `template0` 时，监控所需的扩展与 Schema，以及角色的默认权限都不再自动创建，这允许你从一个完全干净的模板开始定制数据库。





### `strategy`

枚举值，不可变参数，用于指定从模板克隆数据库的策略，可选值为 `FILE_COPY` 或 `WAL_LOG`，此参数在 PostgreSQL 15 及以上版本可用。

| 策略          | 说明                | 适用场景          |
|-------------|-------------------|---------------|
| `FILE_COPY` | 直接复制数据文件，PG15+ 默认 | 大模板，通用场景      |
| `WAL_LOG`   | 通过 WAL 日志记录复制     | 小模板，不阻塞模板上的连接 |
{.full-width}

`WAL_LOG` 策略的优势是复制过程中不会阻塞模板数据库上的连接，但对于较大的模板效率不如 `FILE_COPY`。
在 PostgreSQL 14 及更早版本中，此参数会被忽略。

```yaml
- name: cloned_db
  template: source_db
  strategy: WAL_LOG          # 使用 WAL 日志方式克隆
```

### `encoding`

字符串，不可变参数，用于指定数据库的字符编码，如果不指定则继承模板数据库的编码设置，通常为 `UTF8`。

如果没有特殊原因，强烈建议使用 `UTF8` 编码。字符编码在数据库创建后无法修改，如需更改必须重建数据库。

```yaml
- name: legacy_db
  template: template0        # 指定非默认编码时使用 template0
  encoding: LATIN1
```

### `locale`

字符串，不可变参数，用于指定数据库的本地化规则，相当于同时设置 `lc_collate` 和 `lc_ctype`，如果不指定则继承模板数据库的设置，通常为 `C`。

本地化规则决定了字符串的排序顺序和字符分类行为。使用 `C` 或 `POSIX` 可获得最佳性能和跨平台一致性，
使用特定语言的本地化规则（如 `zh_CN.UTF-8`）可以获得符合该语言习惯的排序结果。

```yaml
- name: chinese_db
  template: template0
  locale: zh_CN.UTF-8        # 中文本地化
  encoding: UTF8
```

### `lc_collate`

字符串，不可变参数，用于指定字符串的排序规则，如果不指定则继承模板数据库的设置，通常为 `C`。

排序规则决定了 `ORDER BY` 和比较操作的结果。常用值包括：`C`（字节序，最快）、`C.UTF-8`、`en_US.UTF-8`、`zh_CN.UTF-8`。
此参数在数据库创建后无法修改。

```yaml
- name: myapp
  template: template0
  lc_collate: en_US.UTF-8    # 英文排序规则
  lc_ctype: en_US.UTF-8
```

### `lc_ctype`

字符串，不可变参数，用于指定字符分类规则，决定字符的大小写、数字、字母等分类，如果不指定则继承模板数据库的设置，通常为 `C`。

字符分类规则影响 `upper()`、`lower()`、正则表达式中的 `\w` 等函数的行为。此参数在数据库创建后无法修改。

### `locale_provider`

枚举值，不可变参数，用于指定本地化的实现提供者，可选值为 `libc`、`icu` 或 `builtin`，此参数在 PostgreSQL 15 及以上版本可用，默认值为 `libc`。

| 提供者       | 版本    | 说明                                |
|-----------|-------|-----------------------------------|
| `libc`    | -     | 使用操作系统 C 库，传统默认方式，行为因系统而异         |
| `icu`     | PG15+ | 使用 ICU 库，跨平台一致，支持更多语言             |
| `builtin` | PG17+ | PostgreSQL 内置实现，最高效，仅支持 C/C.UTF-8 |
{.full-width}

使用 `icu` 或 `builtin` 提供者时，必须指定 `template: template0`，并配合相应的 `icu_locale` 或 `builtin_locale` 参数。

```yaml
- name: fast_db
  template: template0
  locale_provider: builtin   # 使用内置提供者，最高效
  builtin_locale: C.UTF-8
```

### `icu_locale`

字符串，不可变参数，用于指定 ICU 本地化规则标识符，此参数在 PostgreSQL 15 及以上版本、且 `locale_provider` 为 `icu` 时可用。

ICU 本地化标识符遵循 BCP 47 标准，常用值包括：

| 值         | 说明   |
|-----------|------|
| `en-US`   | 美式英语 |
| `en-GB`   | 英式英语 |
| `zh-Hans` | 简体中文 |
| `zh-Hant` | 繁体中文 |
| `ja-JP`   | 日语   |
| `ko-KR`   | 韩语   |
{.full-width}

```yaml
- name: chinese_app
  template: template0
  locale_provider: icu
  icu_locale: zh-Hans        # 简体中文 ICU 排序
  encoding: UTF8
```

### `icu_rules`

字符串，不可变参数，用于自定义 ICU 排序规则，此参数在 PostgreSQL 16 及以上版本可用。

ICU 规则允许对默认排序行为进行微调，使用 [**ICU 排序规则语法**](https://unicode-org.github.io/icu/userguide/collation/customization/)。

```yaml
- name: custom_sort_db
  template: template0
  locale_provider: icu
  icu_locale: en-US
  icu_rules: '&V << w <<< W'  # 自定义 V/W 排序顺序
```

### `builtin_locale`

字符串，不可变参数，用于指定内置本地化提供者的规则，此参数在 PostgreSQL 17 及以上版本、且 `locale_provider` 为 `builtin` 时可用，可选值为 `C` 或 `C.UTF-8`。

`builtin` 提供者是 PostgreSQL 17 新增的内置本地化实现，比 `libc` 更快，且行为跨平台完全一致。
适合只需要 `C` 或 `C.UTF-8` 排序规则的场景。

```yaml
- name: fast_db
  template: template0
  locale_provider: builtin
  builtin_locale: C.UTF-8    # 内置 UTF-8 支持
  encoding: UTF8
```

### `tablespace`

字符串，可变参数，用于指定数据库的默认表空间，默认值为 `pg_default`。

修改现有数据库的表空间会触发数据物理迁移，PostgreSQL 会将数据库中的所有对象移动到新表空间，对于大数据库可能需要较长时间，慎用。

```yaml
- name: archive_db
  tablespace: slow_hdd       # 归档数据使用慢速存储
```

```sql
ALTER DATABASE "archive_db" SET TABLESPACE "slow_hdd";
```

### `is_template`

布尔值，可变参数，用于指定是否将数据库标记为模板数据库，默认值为 `false`。

设置为 `true` 后，任何拥有 `CREATEDB` 权限的用户都可以使用此数据库作为模板克隆新数据库。
模板数据库通常用于预装标准模式、扩展和数据，方便快速创建具有相同配置的新数据库。

```yaml
- name: app_template
  is_template: true          # 标记为模板，允许普通用户克隆
  schemas: [core, api]
  extensions: [postgis, pg_trgm]
```

删除标记为 `is_template: true` 的数据库时，Pigsty 会先执行 `ALTER DATABASE ... IS_TEMPLATE false` 取消模板标记，然后再删除。

### `allowconn`

布尔值，可变参数，用于控制是否允许连接到此数据库，默认值为 `true`。

设置为 `false` 会在数据库层面完全禁止连接，任何用户（包括超级用户）都无法连接到此数据库。
此参数通常用于维护或归档用途。

```yaml
- name: archive_db
  allowconn: false           # 禁止任何连接
```

```sql
ALTER DATABASE "archive_db" ALLOW_CONNECTIONS false;
```

### `revokeconn`

布尔值，可变参数，用于控制是否回收 PUBLIC 角色的 `CONNECT` 权限，默认值为 `false`。

设置为 `true` 时，Pigsty 会执行以下权限变更：

- 回收 PUBLIC 的 CONNECT 权限，普通用户将无法连接
- 授予复制用户（`replicator`）和监控用户（`dbuser_monitor`）连接权限
- 授予管理员用户（`dbuser_dba`）和数据库属主连接权限，并附带 `WITH GRANT OPTION`

设置为 `false` 时，会恢复 PUBLIC 的 CONNECT 权限。

```yaml
- name: secure_db
  owner: dbuser_secure
  revokeconn: true           # 回收公共连接权限，只有指定用户可连接
```

### `connlimit`

整数，可变参数，用于限制数据库的最大并发连接数，默认值为 `-1`，表示不限制。

设置为正整数时，会限制同时连接到此数据库的最大会话数。此限制不影响超级用户。

```yaml
- name: limited_db
  connlimit: 50              # 最多允许 50 个并发连接
```

```sql
ALTER DATABASE "limited_db" CONNECTION LIMIT 50;
```

### `baseline`

字符串，一次性参数，用于指定数据库创建后要执行的 SQL 基线文件路径。

基线文件通常包含表结构定义、初始数据、存储过程等，用于初始化新数据库。
路径是相对于 Ansible 搜索路径的相对路径，通常放在 `files/` 目录下。

基线文件仅在首次创建数据库时执行；如果数据库已存在则跳过。使用 `state: recreate` 重建数据库时会重新执行基线文件。

```yaml
- name: myapp
  baseline: myapp_schema.sql  # 会查找 files/myapp_schema.sql
```

### `schemas`

数组，可变参数（支持增删），用于定义要在数据库中创建或删除的模式。数组元素可以是字符串或对象。

简单格式使用字符串直接指定模式名，仅支持创建操作：

```yaml
schemas:
  - app
  - api
  - core
```

完整格式使用对象定义，支持指定模式属主和删除操作：

```yaml
schemas:
  - name: app                # 模式名（必选）
    owner: dbuser_app        # 模式属主（可选），生成 AUTHORIZATION 子句
  - name: deprecated
    state: absent            # 删除模式（使用 CASCADE）
```

创建模式时使用 `IF NOT EXISTS`，已存在则跳过；删除模式时使用 `CASCADE`，会同时删除模式内的所有对象。

```sql
CREATE SCHEMA IF NOT EXISTS "app" AUTHORIZATION "dbuser_app";
DROP SCHEMA IF EXISTS "deprecated" CASCADE;
```

### `extensions`

数组，可变参数（支持增删），用于定义要在数据库中安装或卸载的扩展。数组元素可以是字符串或对象。

简单格式使用字符串直接指定扩展名，仅支持安装操作：

```yaml
extensions:
  - postgis
  - pg_trgm
  - vector
```

完整格式使用对象定义，支持指定安装模式、版本和卸载操作：

```yaml
extensions:
  - name: vector             # 扩展名（必选）
    schema: public           # 安装到指定模式（可选）
    version: '0.5.1'         # 指定版本（可选）
  - name: old_extension
    state: absent            # 卸载扩展（使用 CASCADE）
```

安装扩展时使用 `CASCADE`，如果已存在则会报错但跳过，同时自动安装依赖扩展；卸载扩展时使用 `CASCADE`，会同时删除依赖此扩展的对象。

```sql
CREATE EXTENSION IF NOT EXISTS "vector" WITH SCHEMA "public" VERSION '0.5.1' CASCADE;
DROP EXTENSION IF EXISTS "old_extension" CASCADE;
```

### `parameters`

对象，可变参数，用于设置数据库级别的配置参数。参数通过 `ALTER DATABASE ... SET` 设置，会对连接到此数据库的所有会话生效。

```yaml
- name: analytics
  parameters:
    work_mem: '256MB'
    maintenance_work_mem: '512MB'
    statement_timeout: '5min'
    search_path: 'analytics,public'
```

使用特殊值 `DEFAULT`（大小写不敏感）可以将参数重置为 PostgreSQL 默认值：

```yaml
parameters:
  work_mem: DEFAULT          # 重置为默认值
  statement_timeout: '30s'   # 设置新值
```

```sql
ALTER DATABASE "myapp" SET "work_mem" = DEFAULT;
ALTER DATABASE "myapp" SET "statement_timeout" = '30s';
```

### `pgbouncer`

布尔值，可变参数，用于控制是否将数据库添加到 Pgbouncer 连接池列表，默认值为 `true`。

设置为 `false` 时，数据库不会出现在 Pgbouncer 的数据库列表中，客户端无法通过连接池访问此数据库。
适用于内部管理数据库或需要直连的特殊场景。

```yaml
- name: internal_db
  pgbouncer: false           # 不通过连接池访问
```

### `pool_mode`

枚举值，可变参数，用于设置此数据库在 Pgbouncer 中的池化模式，可选值为 `transaction`、`session` 或 `statement`，默认值为 `transaction`。

| 模式            | 说明        | 适用场景             |
|---------------|-----------|------------------|
| `transaction` | 事务结束后归还连接 | 大多数 OLTP 应用，默认推荐 |
| `session`     | 会话结束后归还连接 | 需要会话级状态的应用       |
| `statement`   | 每条语句后归还连接 | 简单无状态查询，极致复用     |
{.full-width}

```yaml
- name: session_app
  pool_mode: session         # 使用会话级池化
```

### `pool_size`

整数，可变参数，用于设置此数据库在 Pgbouncer 中的默认连接池大小，默认值为 `64`。

连接池大小决定了 Pgbouncer 为此数据库预留的后端连接数量。根据应用负载调整此值。

```yaml
- name: high_load_db
  pool_size: 128             # 高负载应用使用更大的池
```

### `pool_size_min`

整数，可变参数，用于设置此数据库在 Pgbouncer 中的最小连接池大小，默认值为 `0`。

设置大于 0 的值会让 Pgbouncer 预先创建指定数量的后端连接，用于连接预热，减少首次请求的延迟。

```yaml
- name: latency_sensitive
  pool_size_min: 10          # 预热 10 个连接
```

### `pool_reserve`

整数，可变参数，用于设置此数据库在 Pgbouncer 中的保留连接数，默认值为 `32`。

当默认池不够用时，Pgbouncer 最多可以额外申请 `pool_reserve` 个连接来处理突发流量。

```yaml
- name: bursty_db
  pool_size: 64
  pool_reserve: 64           # 允许突发到 128 个连接
```

### `pool_connlimit`

整数，可变参数，用于设置通过 Pgbouncer 连接池访问此数据库的最大连接数，默认值为 `100`。

此限制是 Pgbouncer 层面的限制，与数据库本身的 `connlimit` 参数独立。

```yaml
- name: limited_pool_db
  pool_connlimit: 50         # 连接池最多 50 个连接
```

### `pool_auth_user`

字符串，可变参数，用于指定 Pgbouncer 认证查询使用的用户。

此参数需要配合 [**`pgbouncer_auth_query`**](/docs/pgsql/param#pgbouncer_auth_query) 参数启用才生效。
设置后，所有通过 Pgbouncer 连接到此数据库的请求都会使用指定用户执行认证查询来验证密码。

```yaml
- name: myapp
  pool_auth_user: dbuser_monitor  # 使用监控用户执行认证查询
```

### `register_datasource`

布尔值，可变参数，用于控制是否将此数据库注册到 Grafana 作为 PostgreSQL 数据源，默认值为 `true`。

设置为 `false` 可以跳过 Grafana 数据源注册。适用于临时数据库、测试数据库，或不希望在监控系统中出现的内部数据库。

```yaml
- name: temp_db
  register_datasource: false  # 不注册到 Grafana
```


--------

## 模板继承

许多参数如果不显式指定，会从模板数据库继承。默认模板是 `template1`，其编码设置由集群初始化参数决定：

| 集群参数                                                   | 默认值                    | 说明       |
|--------------------------------------------------------|------------------------|----------|
| [**`pg_encoding`**](/docs/pgsql/param#pg_encoding)     | `UTF8`                 | 集群默认字符编码 |
| [**`pg_locale`**](/docs/pgsql/param#pg_locale)         | `C` / `C-UTF-8` (如果支持) | 集群默认本地化  |
| [**`pg_lc_collate`**](/docs/pgsql/param#pg_lc_collate) | `C` / `C-UTF-8` (如果支持) | 集群默认排序规则 |
| [**`pg_lc_ctype`**](/docs/pgsql/param#pg_lc_ctype)     | `C` / `C-UTF-8` (如果支持) | 集群默认字符分类 |
{.full-width}

新创建的数据库默认会从 `template1` 数据库 Fork 出来，这个模版数据库会在 [`PG_PROVISION`](/docs/pgsql/param#pg_provision) 阶段进行定制修改：
配置好扩展、模式以及默认权限，因此新创建的数据库也会继承这些配置，除非您显式使用一个其他的数据库作为模板。

--------

## 深度定制

Pigsty 提供了丰富的定制参数与配置旋钮，如果你想定制模板数据库，请参考以下资源：

- [**`pg_default_roles`**](/docs/pgsql/param#pg_default_roles)           ：postgres 集群中的默认预定义角色和系统用户
- [**`pg_default_privileges`**](/docs/pgsql/param#pg_default_privileges) ：由管理员用户创建数据库内对象时的默认权限
- [**`pg_default_schemas`**](/docs/pgsql/param#pg_default_schemas)       ：要创建的默认模式列表
- [**`pg_default_extensions`**](/docs/pgsql/param#pg_default_extensions) ：要创建的默认扩展列表
- [**`pg_default_hba_rules`**](/docs/pgsql/param#pg_default_hba_rules)   ：postgres 基于主机的认证规则，全局PG默认HBA
- [**`pgb_default_hba_rules`**](/docs/pgsql/param#pgb_default_hba_rules) ：pgbouncer 默认的基于主机的认证规则，全局PGB默认HBA

如果上面这些配置仍然无法满足您的需求，您可以使用 [**`pg_init`**](/docs/pgsql/param#pg_init) 指定自定义的集群初始化脚本进行定制：

- [**`pg-init`**](https://github.com/pgsty/pigsty/blob/main/roles/pgsql/templates/pg-init) ：集群初始化脚本
- [**`pg-init-template.sql`**](https://github.com/pgsty/pigsty/blob/main/roles/pgsql/templates/pg-init-template.sql)：模板定制 SQL
- [**`pg-init-roles.sql`**](https://github.com/pgsty/pigsty/blob/main/roles/pgsql/templates/pg-init-roles.sql)：定制默认角色的 SQL



----------------

## 本地化提供者

PostgreSQL 15+ 引入了 **`locale_provider`** 参数，支持不同的本地化实现。这些属性只能在数据库创建时指定，之后无法修改。

Pigsty 在 [**`configure`**](/docs/concept/iac/configure) 配置向导中会根据 PG 与操作系统版本，优先使用 PG 内置的 C.UTF-8/C 本地化提供者。
数据库在默认情况下继承集群的本地化设置。如果您要为数据库指定一个不同于集群默认的本地化提供者，则必须使用 `template0` 作为模板数据库。

**使用 ICU 提供者（PG15+）**：

```yaml
- name: myapp_icu
  template: template0        # ICU 必须使用 template0
  locale_provider: icu
  icu_locale: en-US          # ICU 本地化规则
  encoding: UTF8
```

**使用内置提供者（PG17+）**：

```yaml
- name: myapp_builtin
  template: template0
  locale_provider: builtin
  builtin_locale: C.UTF-8    # 内置本地化规则
  encoding: UTF8
```

**提供者对比**：`libc`（传统方式，依赖操作系统）、`icu`（PG15+，跨平台一致，功能丰富）、`builtin`（PG17+，最高效的 C/C.UTF-8 排序）。





--------

## 连接池

[**Pgbouncer**](/docs/concept/arch/pgsql#pgbouncer) 连接池可以优化短连接性能，降低并发征用，以避免过高的连接数冲垮数据库，并在数据库迁移时提供额外的灵活处理空间。

Pigsty 会默认为 PostgreSQL 实例 1:1 配置启用一个连接池，
使用和 PostgreSQL 同样的 [**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu) 运行，默认为 `postgres` 操作系统用户。
连接池与数据库使用 `/var/run/postgresql` Unix Socket 通信。



Pigsty 默认将 [`pg_databases`](/docs/pgsql/param/#pg_databases) 中的所有数据库都添加到 pgbouncer 的数据库列表中。
您可以通过在数据库定义中显式设置 [`pgbouncer: false`](#pgbouncer) 来禁用特定数据库的 pgbouncer 连接池支持。
pgbouncer 数据库列表与其配置参数在 `/etc/pgbouncer/database.txt` 中定义。

```yaml
meta                        = host=/var/run/postgresql mode=session
grafana                     = host=/var/run/postgresql mode=transaction
bytebase                    = host=/var/run/postgresql auth_user=dbuser_meta
kong                        = host=/var/run/postgresql pool_size=32 reserve_pool=64
gitea                       = host=/var/run/postgresql min_pool_size=10
wiki                        = host=/var/run/postgresql
noco                        = host=/var/run/postgresql
mongo                       = host=/var/run/postgresql
```

当您 [**创建数据库**](/docs/pgsql/admin/db#创建数据库)时，Pgbouncer 的数据库列表定义文件将会被刷新，并通过在线重载配置的方式生效，正常不会影响现有的连接。


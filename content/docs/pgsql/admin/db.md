---
title: 管理 PostgreSQL 业务数据库
linktitle: 数据库管理
weight: 30
description: 数据库管理：创建、修改、删除、重建数据库，使用模板克隆数据库
icon: fa-solid fa-coins
module: [PGSQL]
categories: [任务]
---

## 快速上手

Pigsty 使用声明式管理方式，首先在 [**配置清单**](/docs/concept/iac/inventory) 中 [**定义数据库**](/docs/pgsql/config/db)，然后使用 `bin/pgsql-db <cls> <dbname>` 创建或修改数据库。

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_databases: [{ name: some_db }]  # <--- 在这里定义数据库列表！
```


{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-db <cls> <dbname>    # 在 <cls> 集群上创建/修改 <dbname> 数据库
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-db.yml -l pg-meta -e dbname=some_db    # 直接使用剧本在 <cls> 集群上创建/修改 <dbname> 数据库
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-db pg-meta some_db    # 在 pg-meta 集群上创建/修改 some_db 数据库
```
{{% /tab %}}
{{< /tabpane >}}

关于数据库定义参数的完整参考，请查阅 [**数据库配置**](/docs/pgsql/config/db)。关于数据库的访问权限，请参考 [**ACL：数据库权限**](/docs/concept/sec/ac/#数据库权限)。

请注意，部分数据库参数仅能在 **创建时** 指定。修改这些参数需要先删除再创建数据库（使用 `state: recreate` 重建数据库）。

| 操作                  | 快捷命令                      | 说明                          |
|:--------------------|:--------------------------|:----------------------------|
| [**创建数据库**](#创建数据库) | `bin/pgsql-db <cls> <db>` | 创建新的业务数据库                   |
| [**修改数据库**](#修改数据库) | `bin/pgsql-db <cls> <db>` | 修改已存在数据库的属性                 |
| [**删除数据库**](#删除数据库) | `bin/pgsql-db <cls> <db>` | 删除数据库（需设置 `state: absent`）  |
| [**重建数据库**](#重建数据库) | `bin/pgsql-db <cls> <db>` | 先删再建（需设置 `state: recreate`） |
| [**克隆数据库**](#克隆数据库) | `bin/pgsql-db <cls> <db>` | 使用模板克隆数据库                   |
{.full-width}


{{< asciinema file="demo/pgsql-db.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}


----------------

## 创建数据库

定义在 [**`pg_databases`**](/docs/pgsql/param#pg_databases) 里面的数据库会在 PostgreSQL [**集群创建**](/docs/pgsql/admin/cluster#创建集群) 的时候在 `pg_db` 任务中自动创建。

要在现有的 PostgreSQL 集群上创建新的业务数据库，请将 [**数据库定义**](/docs/pgsql/config/db) 添加到 `all.children.<cls>.pg_databases`，然后执行：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-db <cls> <dbname>   # 创建数据库 <dbname>
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-db.yml -l <cls> -e dbname=<dbname>   # 直接使用 Ansible 剧本创建数据库
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-db pg-meta myapp    # 例子，在 pg-meta 集群中创建 myapp 数据库
```
{{% /tab %}}
{{< /tabpane >}}

**示例配置：创建名为 `myapp` 的业务数据库**

```yaml
#all.children.pg-meta.vars.pg_databases: # 省略上级缩进
  - name: myapp
    owner: dbuser_myapp
    schemas: [app]
    extensions:
      - { name: pg_trgm }
      - { name: btree_gin }
    comment: my application database
```

**执行效果**：在主库上创建数据库 `myapp`，设置数据库所有者为 `dbuser_myapp`，创建 schema `app`，
启用扩展 `pg_trgm` 和 `btree_gin`，数据库将默认添加到 Pgbouncer 连接池，并注册为 Grafana PG 数据源。

{{% alert title="建议使用剧本创建数据库" color="secondary" %}}
如果您需要手工创建数据库，那么需要自行确保 pgbouncer 连接池 / grafana 数据源同步。
{{% /alert %}}


----------------

## 修改数据库

修改数据库与创建数据库使用相同的命令，在没有定义 `baseline` SQL 的情况下剧本是幂等的。

当目标数据库已存在时，Pigsty 会修改目标数据库的属性使其符合配置。然而，一些属性只能在数据库创建时设置。

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-db <cls> <db>   # 修改数据库 <db> 的属性
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-db.yml -l <cls> -e dbname=<db>   # 幂等操作，可重复执行
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-db pg-meta myapp    # 修改 myapp 数据库的属性使其符合配置
```
{{% /tab %}}
{{< /tabpane >}}


**不可修改的属性**：以下属性在数据库创建后无法修改，需要使用 `state: recreate` 重建数据库：

- `name`（数据库名称）、`template`（模板数据库）、`strategy`（克隆策略）。
- `encoding`（字符编码）、`locale`/`lc_collate`/`lc_ctype`（本地化设置）、`locale_provider`/`icu_locale`/`icu_rules`/`builtin_locale`（本地化提供者设置）

其他属性均可修改，以下是一些常见的修改示例：

**修改属主**：更新配置中的 `owner` 字段后执行剧本，会执行 `ALTER DATABASE ... OWNER TO` 并授予相应权限。

```yaml
- name: myapp
  owner: dbuser_new_owner     # 修改为新属主
```

**修改连接限制**：通过 `connlimit` 限制数据库的最大连接数。

```yaml
- name: myapp
  connlimit: 100              # 限制最大 100 个连接
```

**回收公共连接权限**：设置 `revokeconn: true` 会回收 PUBLIC 的 CONNECT 权限，仅允许属主、DBA、监控用户和复制用户连接。

```yaml
- name: myapp
  owner: dbuser_myapp
  revokeconn: true            # 回收 PUBLIC 的 CONNECT 权限
```

**管理数据库参数**：通过 `parameters` 字典配置数据库级参数，会生成 `ALTER DATABASE ... SET` 语句。使用特殊值 `DEFAULT` 可将参数重置为默认值。

```yaml
- name: myapp
  parameters:
    work_mem: '256MB'
    maintenance_work_mem: '512MB'
    statement_timeout: '30s'
    search_path: DEFAULT      # 重置为默认值
```

**管理模式（Schema）**：通过 `schemas` 数组配置模式，支持简单格式和指定属主的完整格式。使用 `state: absent` 删除模式（CASCADE）。

```yaml
- name: myapp
  schemas:
    - app                                   # 简单形式
    - { name: core, owner: dbuser_myapp }   # 指定属主
    - { name: deprecated, state: absent }   # 删除模式
```

**管理扩展（Extension）**：通过 `extensions` 数组配置扩展，支持简单格式和指定 schema/版本的完整格式。使用 `state: absent` 卸载扩展（CASCADE）。

```yaml
- name: myapp
  extensions:
    - postgis                                 # 简单形式
    - { name: vector, schema: public }        # 指定 schema
    - { name: pg_trgm, state: absent }        # 卸载扩展
```

{{% alert title="CASCADE 警告" color="warning" %}}
删除模式或卸载扩展使用 `CASCADE` 选项，会同时删除依赖该模式/扩展的所有对象。请确保理解影响范围后再执行删除操作。
{{% /alert %}}

**连接池配置**：默认情况下所有业务数据库都会添加到 Pgbouncer 连接池。可配置 `pgbouncer`（是否加入连接池）、`pool_mode`（池化模式）、`pool_size`（默认池大小）、`pool_reserve`（保留连接数）、`pool_connlimit`（最大数据库连接）等参数。

```yaml
- name: myapp
  pgbouncer: true              # 是否加入连接池（默认 true）
  pool_mode: transaction       # 池化模式：transaction/session/statement
  pool_size: 64                # 默认池大小
  pool_connlimit: 100          # 最大数据库连接
```


----------------

## 删除数据库

要删除数据库，将其 `state` 设置为 `absent` 并执行剧本：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-db <cls> <db>   # 删除数据库 <db>（需在配置中设置 state: absent）
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-db.yml -l <cls> -e dbname=<db>   # 直接使用 Ansible 剧本删除数据库
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-db pg-meta olddb    # 删除 olddb 数据库（配置中已设置 state: absent）
```
{{% /tab %}}
{{< /tabpane >}}

**配置示例**：

```yaml
pg_databases:
  - name: olddb
    state: absent
```

**删除操作会**：如果数据库标记为 `is_template: true`，先执行 `ALTER DATABASE ... IS_TEMPLATE false`；使用 `DROP DATABASE ... WITH (FORCE)` 强制删除数据库（PG13+）并终止所有活动连接；从 Pgbouncer 连接池中移除该数据库；从 Grafana 数据源中取消注册。

**保护机制**：系统数据库 `postgres`、`template0`、`template1` 无法删除。删除操作仅在主库上执行，流复制会自动同步到从库。

{{% alert title="危险操作警告" color="danger" %}}
删除数据库是**不可逆**操作，会永久删除该数据库中的所有数据。执行前请确保：已有最新的数据库备份、已确认没有业务在使用该数据库、已通知相关干系人。
Pigsty 不对任何因删除数据库导致的数据丢失承担责任，使用需自担风险。
{{% /alert %}}


----------------

## 重建数据库

`recreate` 状态用于重建数据库，等效于先删除再创建：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-db <cls> <db>   # 重建数据库 <db>（需在配置中设置 state: recreate）
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-db.yml -l <cls> -e dbname=<db>   # 直接使用 Ansible 剧本重建数据库
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-db pg-meta testdb    # 重建 testdb 数据库（配置中已设置 state: recreate）
```
{{% /tab %}}
{{< /tabpane >}}

**配置示例**：

```yaml
pg_databases:
  - name: testdb
    state: recreate
    owner: dbuser_test
    baseline: test_init.sql    # 重建后执行初始化
```

**适用场景**：测试环境重置、清空开发数据库、修改不可变属性（编码、本地化等）、恢复数据库到初始状态。

**与手动 DROP + CREATE 的区别**：单条命令完成，无需两次操作；自动保留 Pgbouncer 和 Grafana 配置；执行后自动加载 `baseline` 初始化脚本。


----------------

## 克隆数据库

你可以通过 PG 的 template 机制复制一个 PostgreSQL 数据库，在克隆期间，不允许有任何连接到模版数据库的活动连接。

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-db <cls> <db>   # 克隆数据库 <db>（需在配置中指定 template）
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-db.yml -l <cls> -e dbname=<db>   # 直接使用 Ansible 剧本克隆数据库
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-db pg-meta meta_dev    # 克隆创建 meta_dev 数据库（配置中已指定 template: meta）
```
{{% /tab %}}
{{< /tabpane >}}

**配置示例**：

```yaml
pg_databases:
  - name: meta                   # 源数据库

  - name: meta_dev
    template: meta               # 以 meta 作为模板
    strategy: FILE_COPY          # PG15+ 克隆策略，PG18 瞬间生效
```

**瞬间克隆（PG18+）**：如果使用 PostgreSQL 18 以上版本，Pigsty 默认设置了 [**`file_copy_method`**](https://www.postgresql.org/docs/current/runtime-config-resource.html#GUC-FILE-COPY-METHOD)，配合 `strategy: FILE_COPY` 可以在约 200ms 内完成数据库克隆，而不需要复制数据文件。例如克隆一个 30 GB 的数据库，普通克隆用时 18 秒，瞬间克隆仅需 200 毫秒。

**手动克隆**：确保清理掉所有连接到模版数据库的连接后执行：

```sql
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'meta';
CREATE DATABASE meta_dev TEMPLATE meta STRATEGY FILE_COPY;
```

**局限性与注意事项**：瞬间克隆仅在支持的文件系统上可用（xfs，brtfs，zfs，apfs）；不要使用 `postgres` 数据库作为模版数据库进行克隆；在高并发环境中使用瞬间克隆需要谨慎，需在克隆窗口（200ms）内清理掉所有连接到模版数据库的连接。


----------------

## 连接池管理

在数据库定义中配置的 [**连接池参数**](/docs/pgsql/config/db#连接池) 会在创建/修改数据库时应用到 Pgbouncer 连接池中。

默认情况下所有业务数据库都会添加到 Pgbouncer 连接池（`pgbouncer: true`）。数据库会被添加到 `/etc/pgbouncer/database.txt` 文件中，数据库级别的连接池参数（`pool_mode`、`pool_size` 等）通过此文件配置。

您可以使用 `postgres` 操作系统用户，使用 `pgb` 别名访问 Pgbouncer 管理数据库。更多连接池管理操作，请参考 [**Pgbouncer 管理**](/docs/pgsql/admin/pgbouncer)。

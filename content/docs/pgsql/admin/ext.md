---
title: 管理 PostgreSQL 扩展插件
linktitle: 扩展管理
weight: 40
description: 扩展管理：下载、安装、配置、启用、更新、卸载扩展
icon: fas fa-puzzle-piece
module: [PGSQL]
categories: [任务]
---

## 快速上手

Pigsty 提供 [**440+ 扩展**](https://pgext.cloud/zh/list)，使用扩展涉及四个步骤：**下载**、**安装**、**配置**、**启用**。

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_extensions: [ postgis, timescaledb, pgvector ]           # <--- 安装扩展软件包
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain'    # <--- 配置预加载扩展
    pg_databases:
      - name: meta
        extensions: [ postgis, timescaledb, vector ]            # <--- 在数据库中启用
```


{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-ext <cls>           # 在 <cls> 集群上安装配置中定义的扩展
bin/pgsql-ext <cls> [ext...]  # 在 <cls> 集群上安装命令行参数给出的扩展
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l pg-meta -t pg_ext    # 使用剧本安装扩展
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-ext pg-meta                         # 在 pg-meta 集群上安装定义的扩展
bin/pgsql-ext pg-meta pg_duckdb pg_mooncake   # 安装指定扩展
```
{{% /tab %}}
{{< /tabpane >}}

关于扩展的完整参考，请查阅 [**扩展插件**](/docs/pgsql/ext/) 章节。关于可用扩展列表，请参考 [**扩展目录**](https://pgext.cloud/zh/list)。

| 操作                  | 快捷命令                        | 说明                          |
|:--------------------|:----------------------------|:----------------------------|
| [**下载扩展**](#下载扩展)   | `./infra.yml -t repo_build` | 将扩展下载到本地仓库                  |
| [**安装扩展**](#安装扩展)   | `bin/pgsql-ext <cls>`       | 在集群节点上安装扩展软件包               |
| [**配置扩展**](#配置扩展)   | `pg edit-config <cls> -p`   | 将扩展添加到预加载库（需重启）             |
| [**启用扩展**](#启用扩展)   | `psql -c 'CREATE EXT ...'`  | 在数据库中创建扩展对象                 |
| [**更新扩展**](#更新扩展)   | `ALTER EXTENSION UPDATE`    | 更新扩展软件包与扩展对象                |
| [**移除扩展**](#移除扩展)   | `DROP EXTENSION`            | 删除扩展对象，卸载软件包                |
{.full-width}


{{< asciinema file="demo/pgsql-ext.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}





----------------

## 安装扩展

定义在 [**`pg_extensions`**](/docs/pgsql/param#pg_extensions) 里面的扩展会在 PostgreSQL [**集群创建**](/docs/pgsql/admin/cluster#创建集群) 的时候在 `pg_extension` 任务中自动安装。

要在现有的 PostgreSQL 集群上安装扩展，请将扩展添加到 `all.children.<cls>.pg_extensions`，然后执行：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-ext <cls>   # 在 <cls> 集群上安装扩展
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l <cls> -t pg_extension   # 直接使用 Ansible 剧本安装扩展
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-ext pg-meta    # 在 pg-meta 集群上安装配置中定义的扩展
```
{{% /tab %}}
{{< /tabpane >}}

**示例配置：在集群上安装 PostGIS、TimescaleDB 和 PGVector**

```yaml
#all.children.pg-meta.vars: # 省略上级缩进
pg_extensions: [ postgis, timescaledb, pgvector ]
```

**执行效果**：在集群所有节点上安装扩展软件包。Pigsty 会自动将 [**包别名**](/docs/pgsql/config/alias) 翻译为对应操作系统和 PostgreSQL 版本的实际包名。


{{% alert title="安装前，确保软件源可用" color="secondary" %}}
安装扩展前请确保节点已配置正确的软件源 —— 扩展已经在本地仓库中 [**下载好**](#下载扩展)，或者已经 [**配置扩展仓库**](#配置仓库)。
{{% /alert %}}


----------------

## 手工安装

如果您不想使用 Pigsty 配置来管理 PostgreSQL 扩展，可以在命令行中直接传递要安装的扩展列表：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-ext pg-meta pg_duckdb pg_mooncake   # 在 pg-meta 集群上安装指定扩展
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l pg-meta -t pg_ext -e '{"pg_extensions": ["pg_duckdb", "pg_mooncake"]}'
```
{{% /tab %}}

{{< /tabpane >}}

您也可以使用 [**pig**](/docs/pig) 包管理器命令行工具在单个节点上安装扩展，同样会自动进行 [**包别名**](/docs/pgsql/config/alias) 解析。 

```bash
pig install postgis timescaledb       # 安装多个扩展
pig install pgvector -v 17            # 针对特定 PG 大版本安装

ansible pg-test -b -a 'pig install pg_duckdb'   # 使用 Ansible 在集群上批量安装
```

您也可以 **直接使用操作系统包管理器** (`apt/dnf`) 进行安装，但您必须知道具体操作系统/PG下的 RPM/DEB 包名：

```bash
# EL 系统（RHEL、Rocky、Alma、Oracle Linux）
sudo yum install -y pgvector_17*

# Debian / Ubuntu 系统
sudo apt install -y postgresql-17-pgvector
```


----------------

## 下载扩展

要想安装扩展，您需要确保节点上配置的 [**扩展仓库**](/docs/repo/pgsql) 包含待安装的扩展：

- [**单机安装**](/docs/setup/install) 时无需操心，上游仓库已经直接添加到节点上。
- [**离线安装**](/docs/setup/offline) 时无需操心，绝大部分扩展都已经包含在离线安装包里，个别扩展需要在线安装。
- 使用本地仓库的 [**生产多节点部署**](/docs/deploy/install)，要看情况，如果在本地仓库创建的时候 [`repo_packages`](/docs/infra/param/#repo_packages) / [`repo_extra_packages`](/docs/infra/param/#repo_extra_packages) 中包含了扩展包，
  则意味着已经下载到了本地，可以直接安装，否则需要先下载扩展包到本地仓库。或者直接为节点 [**配置上游仓库**](#配置仓库) 在线安装。

Pigsty 的默认配置在安装过程中会自动下载主流扩展到本地仓库。如需额外扩展，添加到 [**`repo_extra_packages`**](/docs/infra/param#repo_extra_packages) 后重建仓库：

```yaml
repo_extra_packages: [ pgvector, postgis, timescaledb ]
```

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
make repo         # 快捷方式 = repo-build + node-repo
make repo-build   # 快捷方式，重建 Infra 上的软件仓库（下载软件包与依赖）
make node-repo    # 快捷方式，刷新节点上的软件源缓存，更新对 Infra 软件仓库的引用
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./deploy.yml -t repo_build,node_repo  # 一次性执行两个任务
./infra.yml -t repo_build     # 重新下载软件包到本地仓库
./node.yml  -t node_repo      # 刷新节点软件源缓存
```
{{% /tab %}}
{{< /tabpane >}}


----------------

## 配置仓库

您也可以选择直接让所有节点都使用上游仓库（生产环境不推荐），跳过下载步骤，直接从互联网 [**上游扩展仓库**](/docs/repo/pgsql) 安装

```bash
./node.yml -t node_repo -e node_repo_modules=node,pgsql   # 添加 PGDG 与 Pigsty 上游仓库
```

----------------

## 配置扩展

部分扩展需要预加载到 [**`shared_preload_libraries`**](https://www.postgresql.org/docs/9.0/runtime-config-resource.html#GUC-SHARED-PRELOAD-LIBRARIES) 才能使用，修改后需要 **重启数据库** 生效。

您可以用 [**`pg_libs`**](/docs/pgsql/param#pg_libs) 参数作为它的默认值，在配置预加载的扩展，但是这个参数只在集群初始化时生效，后面修改就无效了。

```yaml
pg-meta:
  vars:
    pg_cluster: pg-meta
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain'   # 预加载扩展
    pg_extensions: [ timescaledb, postgis, pgvector ]          # 安装扩展包
```


对于已有集群，您可以参考 [**修改配置**](/docs/pgsql/admin/patroni#修改配置) 的介绍，修改 `shared_preload_libraries`参数：

```bash
pg edit-config pg-meta --force -p shared_preload_libraries='timescaledb, pg_stat_statements, auto_explain'
pg restart pg-meta   # 修改 pg-meta 集群的参数，并重启集群使配置生效
```

请确保扩展软件包已正确安装后再添加预加载配置，如果 `shared_preload_libraries` 中的扩展不存在或加载失败，PostgreSQL 将 **无法启动**。
此外，请通过 Patroni 管理集群的配置变更，避免使用 `ALTER SYSTEM` 或者 [**`pg_parameters`**](/docs/pgsql/param#pg_parameters) 单独修改实例配置。
如果主库和从库配置不一致，可能导致启动失败或复制中断。




----------------

## 启用扩展

安装扩展软件包后，需要在数据库中执行 `CREATE EXTENSION` 才能使用扩展提供的功能。

**集群初始化时启用**

在 [**数据库定义**](/docs/pgsql/config/db) 中通过 `extensions` 数组声明要启用的扩展：

```yaml
pg_databases:
  - name: meta
    extensions:
      - vector                             # 简单形式
      - { name: postgis, schema: public }  # 指定 Schema
```

**手动启用**

{{< tabpane text=true persist=header >}}
{{% tab header="SQL" %}}
```sql
CREATE EXTENSION vector;                      -- 创建扩展
CREATE EXTENSION postgis SCHEMA public;       -- 指定 Schema
CREATE EXTENSION IF NOT EXISTS vector;        -- 幂等创建
CREATE EXTENSION postgis_topology CASCADE;    -- 自动安装依赖
```
{{% /tab %}}
{{% tab header="psql" %}}
```bash
psql -d meta -c 'CREATE EXTENSION vector;'                  # 在 meta 数据库创建扩展
psql -d meta -c 'CREATE EXTENSION postgis SCHEMA public;'   # 指定 Schema
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
# 修改数据库定义后使用剧本启用扩展
bin/pgsql-db pg-meta meta    # 创建/修改数据库会自动启用定义的扩展
```
{{% /tab %}}
{{< /tabpane >}}

**执行效果**：在数据库中创建扩展对象（函数、类型、操作符、索引方法等），之后即可使用扩展提供的功能。


----------------

## 更新扩展

扩展更新涉及两个层面：**软件包更新** 和 **扩展对象更新**。

**更新软件包**

{{< tabpane text=true persist=header >}}
{{% tab header="pig" %}}
```bash
pig update pgvector                           # 使用 pig 更新扩展
```
{{% /tab %}}
{{% tab header="yum" %}}
```bash
sudo yum update pgvector_18 # EL
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
sudo apt upgrade postgresql-18-pgvector  # Debian/Ubuntu
```
{{% /tab %}}
{{< /tabpane >}}

**更新扩展对象**

```sql
-- 查看可升级的扩展
SELECT name, installed_version, default_version FROM pg_available_extensions
WHERE installed_version IS NOT NULL AND installed_version <> default_version;

-- 更新扩展到最新版本
ALTER EXTENSION vector UPDATE;

-- 更新到指定版本
ALTER EXTENSION vector UPDATE TO '0.8.1';
```

{{% alert title="更新注意事项" color="info" %}}
更新扩展前建议备份数据库。预加载扩展更新后可能需要重启 PostgreSQL。某些扩展版本升级可能不兼容，请查阅扩展文档。
{{% /alert %}}


----------------

## 移除扩展

移除扩展涉及两个层面：**删除扩展对象** 和 **卸载软件包**。

**删除扩展对象**

```sql
DROP EXTENSION vector;              -- 删除扩展
DROP EXTENSION vector CASCADE;      -- 级联删除（删除依赖对象）
```

**移除预加载**

如果是预加载扩展，需从 `shared_preload_libraries` 中移除并重启：

```bash
pg edit-config pg-meta --force -p shared_preload_libraries='pg_stat_statements, auto_explain'
pg restart pg-meta   # 重启使配置生效
```

**卸载软件包（可选）**

{{< tabpane text=true persist=header >}}
{{% tab header="pig" %}}
```bash
pig remove pgvector                           # 使用 pig 卸载
```
{{% /tab %}}
{{% tab header="yum" %}}
```bash
sudo yum remove pgvector_17*                  # EL 系统
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
sudo apt remove postgresql-17-pgvector        # Debian/Ubuntu
```
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="CASCADE 警告" color="warning" %}}
使用 `CASCADE` 删除扩展会同时删除所有依赖该扩展的对象（表、索引、视图等）。请先检查依赖关系再执行删除。
{{% /alert %}}


----------------

## 查询扩展

以下是一些常用的 SQL 查询，用于查看扩展信息：

**查看已启用的扩展**

```sql
SELECT extname, extversion, nspname AS schema
FROM pg_extension e JOIN pg_namespace n ON e.extnamespace = n.oid
ORDER BY extname;
```

**查看可用扩展**

```sql
SELECT name, default_version, installed_version, comment
FROM pg_available_extensions
WHERE installed_version IS NOT NULL   -- 仅显示已安装的
ORDER BY name;
```

**检查扩展是否可用**

```sql
SELECT * FROM pg_available_extensions WHERE name = 'vector';
```

**查看扩展依赖关系**

```sql
SELECT e.extname, d.refobjid::regclass AS depends_on
FROM pg_extension e
JOIN pg_depend d ON d.objid = e.oid
WHERE d.deptype = 'e' AND e.extname = 'postgis_topology';
```

**查看扩展对象**

```sql
SELECT classid::regclass, objid, deptype
FROM pg_depend
WHERE refobjid = (SELECT oid FROM pg_extension WHERE extname = 'vector');
```

**psql 快捷命令**

```bash
\dx                    # 列出已启用的扩展
\dx+ vector            # 显示扩展详情
```


----------------

## 添加仓库

如需直接从上游安装扩展，可手动添加软件仓库。

**使用 Pigsty 剧本添加**

```bash
./node.yml -t node_repo -e node_repo_modules=node,pgsql        # 添加 PGDG 与 Pigsty 仓库
./node.yml -t node_repo -e node_repo_modules=node,pgsql,local  # 包括本地仓库
```

**YUM 仓库（EL 系统）**

```bash
# Pigsty 仓库
curl -fsSL https://repo.pigsty.io/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null
curl -fsSL https://repo.pigsty.io/yum/repo | sudo tee /etc/yum.repos.d/pigsty.repo >/dev/null

# 中国大陆镜像
curl -fsSL https://repo.pigsty.cc/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null
curl -fsSL https://repo.pigsty.cc/yum/repo | sudo tee /etc/yum.repos.d/pigsty.repo >/dev/null
```

**APT 仓库（Debian/Ubuntu）**

```bash
curl -fsSL https://repo.pigsty.io/key | sudo gpg --dearmor -o /etc/apt/keyrings/pigsty.gpg
sudo tee /etc/apt/sources.list.d/pigsty.list > /dev/null <<EOF
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/infra generic main
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/pgsql $(lsb_release -cs) main
EOF
sudo apt update

# 中国大陆镜像：将 repo.pigsty.io 替换为 repo.pigsty.cc
```


----------------

## 常见问题

**扩展名与包名的区别**

| 名称    | 说明                                          | 示例                                     |
|:------|:--------------------------------------------|:---------------------------------------|
| 扩展名   | `CREATE EXTENSION` 使用的名称                    | `vector`                               |
| 包别名   | Pigsty 配置中使用的标准化名称                          | `pgvector`                             |
| 包名    | 操作系统实际的包名                                   | `pgvector_17*` 或 `postgresql-17-pgvector` |
{.full-width}

**预加载扩展无法启动**

如果 `shared_preload_libraries` 中的扩展不存在或加载失败，PostgreSQL 将无法启动。解决方法：

1. 确保扩展软件包已正确安装
2. 或从 `shared_preload_libraries` 中移除该扩展（编辑 `/pg/data/postgresql.conf`）

**扩展依赖问题**

某些扩展依赖于其他扩展，需按顺序创建或使用 `CASCADE`：

```sql
CREATE EXTENSION postgis;                    -- 先创建基础扩展
CREATE EXTENSION postgis_topology;           -- 再创建依赖扩展
-- 或
CREATE EXTENSION postgis_topology CASCADE;   -- 自动创建依赖
```

**扩展版本不兼容**

查看当前 PostgreSQL 版本支持的扩展版本：

```sql
SELECT * FROM pg_available_extension_versions WHERE name = 'vector';
```


----------------

## 相关资源

- [**扩展插件**](/docs/pgsql/ext/)：扩展管理的详细文档
- [**扩展目录**](https://pgext.cloud/zh/list)：查阅 440+ 可用扩展
- [**pig 包管理器**](https://pgext.cloud/pig)：扩展安装命令行工具
- [**数据库管理**](/docs/pgsql/admin/db/)：在数据库中启用扩展

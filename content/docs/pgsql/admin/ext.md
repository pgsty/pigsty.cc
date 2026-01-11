---
title: 管理 PostgreSQL 中的扩展插件
linkTitle: 扩展管理
weight: 40
description: PostgreSQL 扩展的下载、安装、配置、启用、更新与移除
icon: fas fa-puzzle-piece
module: [PGSQL]
categories: [任务]
---

管理 PostgreSQL 扩展的完整流程包括：**下载**、**安装**、**配置**、**启用**、**更新**、**移除**。


--------

## 速查手册

| 操作 | 声明式配置 | 命令式操作 |
|:-----|:----------|:----------|
| 下载 | [`repo_extra_packages`](/docs/infra/param#repo_extra_packages) | `./infra.yml -t repo_build` |
| 安装 | [`pg_extensions`](/docs/pgsql/param#pg_extensions) | `./pgsql.yml -l <cls> -t pg_extension` |
| 配置 | [`pg_libs`](/docs/pgsql/param#pg_libs) | `pg edit-config <cls> -p shared_preload_libraries='...'` |
| 启用 | [`pg_databases.extensions`](/docs/pgsql/config/db) | `psql -c 'CREATE EXTENSION <name>;'` |
| 更新 | - | `ALTER EXTENSION <name> UPDATE;` |
| 移除 | - | `DROP EXTENSION <name>;` |
{.full-width}

> 详细说明请参阅 [**扩展插件**](/docs/pgsql/ext/) 章节。




--------

## 安装扩展

要在集群中安装扩展，在 [**`pg_extensions`**](/docs/pgsql/param#pg_extensions) 参数中添加扩展名称，集群会在初始化的时候自动安装这些扩展：

```yaml
all:
  children:
    pg-meta:
      hosts:
        10.10.10.10: { pg_seq: 1 , pg_role: primary }
      vars:
        pg_cluster: pg-meta
        pg_extensions: [ pgvector, vchord ]   # <----  # 添加扩展
```

如果集群已经创建，你可以使用 [**`pgsql.yml`**](/docs/pgsql/playbook/#pgsqlyml) 剧本的 `pg_ext` 子任务标签来安装扩展：

```bash
./pgsql.yml -l pg-meta -t pg_ext
```

如果您不想在配置文件中添加扩展，可以在命令行中通过 `-e` 选项传递要安装的扩展列表：

```bash
./pgsql.yml -l pg-meta -t pg_ext -e {"pg_extensions": ["pg_duckdb", "pg_mooncake"]}
```

要安装扩展，您需要确保

- 您已经正确配置了软件仓库，例如 [**`node_repo_modules`**](/docs/node/param#node_repo_modules) 包含 `node,pgsql` 这两个仓库模块。
- 如果您没有配置上游仓库，但是离线安装包，或者构建的本地软件仓库中已经包含有这个扩展（通常 [**rich**](/docs/conf/rich) 模板会下载大部分扩展）。
- 这个扩展在当前 PostgreSQL 大版本和 Linux 操作系统的组合中可用（查阅 [**PGEXT.CLOUD**](https://pgext.cloud/list) 扩展列表）


--------

## 添加扩展仓库

如果您不是使用离线安装包，或者构建本地软件仓库的 [**生产部署**](/docs/deploy/install) 模式，将扩展提前下载到本地仓库。

可以使用以下命令，手动将扩展所需的仓库添加到节点上：

```bash
./node.yml -t node_repo -e node_repo_modules=node,pgsql,infra           # 安装扩展所需的仓库 
./node.yml -t node_repo -e node_repo_modules=node,pgsql,infra,local     # 包括本地仓库
```



--------

## 下载扩展

Pigsty 在安装过程中会自动下载主流扩展到本地仓库。如需额外扩展，添加到配置后重建仓库：

```yaml
repo_extra_packages: [ pgvector, postgis, timescaledb, pg_duckdb ]
```

```bash
./infra.yml -t repo_build      # 重新下载软件包到本地仓库
./node.yml -t node_repo        # 刷新节点软件源缓存
```

也可以直接使用上游仓库，无需预先下载：

```bash
./node.yml -t node_repo -e node_repo_modules=node,pgsql  # 添加 PGDG 与 Pigsty 上游仓库
```


--------

## 安装扩展

### 集群初始化时

在集群配置中声明扩展，初始化时自动安装：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_extensions: [ postgis, timescaledb, pgvector, pg_duckdb ]
```

### 已有集群安装

```bash
# 使用 Pigsty 剧本
./pgsql.yml -l pg-meta -t pg_extension -e '{"pg_extensions":["pgvector"]}'

# 使用 pig 包管理器
pig install pgvector

# 直接使用包管理器（EL）
sudo yum install -y pgvector_17*

# 直接使用包管理器（Debian/Ubuntu）
sudo apt install -y postgresql-17-pgvector
```

### 包别名

Pigsty 支持包别名，自动翻译为对应操作系统和 PG 版本的包名：

```yaml
pg_extensions:
  - pgvector      # 自动翻译为 pgvector_17* 或 postgresql-17-pgvector
  - pgsql-gis     # 类别别名，安装整个 GIS 类别的扩展
```


--------

## 配置扩展

部分扩展需要预加载到 `shared_preload_libraries`，修改后需**重启数据库**。

### 需要预加载的常见扩展

| 扩展 | 说明 |
|:-----|:-----|
| `timescaledb` | 时序数据库，必须放在最前面 |
| `citus` | 分布式数据库，必须放在最前面 |
| `pg_cron` | 定时任务调度 |
| `pg_stat_statements` | SQL 语句统计（默认启用） |
| `auto_explain` | 慢查询执行计划（默认启用） |
{.full-width}

### 集群初始化时配置

```yaml
pg-meta:
  vars:
    pg_cluster: pg-meta
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain'
    pg_extensions: [ timescaledb, postgis, pgvector ]
```

### 已有集群修改配置

```bash
pg edit-config pg-meta --force -p shared_preload_libraries='timescaledb, pg_stat_statements, auto_explain'
pg restart pg-meta   # 重启使配置生效
```


--------

## 启用扩展

安装扩展软件包后，需要在数据库中执行 `CREATE EXTENSION` 才能使用。

### 集群初始化时启用

```yaml
pg_databases:
  - name: meta
    extensions:
      - { name: vector }
      - { name: postgis, schema: public }
```

### 手动启用

```sql
CREATE EXTENSION vector;                      -- 创建扩展
CREATE EXTENSION postgis SCHEMA public;       -- 指定 Schema
CREATE EXTENSION IF NOT EXISTS vector;        -- 幂等创建
CREATE EXTENSION postgis_topology CASCADE;    -- 自动安装依赖
```

### 查看扩展状态

```sql
SELECT * FROM pg_available_extensions WHERE name = 'vector';  -- 查看可用扩展
SELECT * FROM pg_extension;                                   -- 查看已启用扩展
\dx                                                           -- psql 快捷命令
```


--------

## 更新扩展

扩展更新涉及两个层面：**软件包更新** 和 **扩展对象更新**。

### 更新软件包

```bash
sudo yum update pgvector_17*                  # EL 系统
sudo apt update && sudo apt upgrade postgresql-17-pgvector  # Debian/Ubuntu
pig update pgvector                           # 使用 pig
```

### 更新扩展对象

```sql
-- 查看可升级的扩展
SELECT name, installed_version, default_version
FROM pg_available_extensions
WHERE installed_version IS NOT NULL AND installed_version <> default_version;

-- 更新扩展
ALTER EXTENSION vector UPDATE;
ALTER EXTENSION vector UPDATE TO '0.8.0';     -- 更新到指定版本
```

> **注意**：更新前建议备份数据库，预加载扩展更新后可能需要重启。


--------

## 移除扩展

移除扩展涉及两个层面：**删除扩展对象** 和 **卸载软件包**。

### 删除扩展对象

```sql
DROP EXTENSION vector;              -- 删除扩展
DROP EXTENSION vector CASCADE;      -- 级联删除（谨慎使用）
```

### 检查依赖关系

```sql
SELECT classid::regclass, objid, deptype
FROM pg_depend
WHERE refobjid = (SELECT oid FROM pg_extension WHERE extname = 'vector');
```

### 移除预加载

如果是预加载扩展，需从 `shared_preload_libraries` 中移除：

```bash
pg edit-config pg-meta --force -p shared_preload_libraries='pg_stat_statements, auto_explain'
pg restart pg-meta
```

### 卸载软件包（可选）

```bash
sudo yum remove pgvector_17*                  # EL 系统
sudo apt remove postgresql-17-pgvector        # Debian/Ubuntu
pig remove pgvector                           # 使用 pig
```


--------

## 添加扩展仓库

如需直接从上游安装扩展，可手动添加仓库。

### YUM 仓库（EL 系统）

```bash
# Pigsty 仓库
curl -fsSL https://repo.pigsty.io/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null
curl -fsSL https://repo.pigsty.io/yum/repo | sudo tee /etc/yum.repos.d/pigsty.repo >/dev/null

# 中国大陆镜像
curl -fsSL https://repo.pigsty.cc/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null
curl -fsSL https://repo.pigsty.cc/yum/repo | sudo tee /etc/yum.repos.d/pigsty.repo >/dev/null
```

### APT 仓库（Debian/Ubuntu）

```bash
curl -fsSL https://repo.pigsty.io/key | sudo gpg --dearmor -o /etc/apt/keyrings/pigsty.gpg
distro_codename=$(lsb_release -cs)
sudo tee /etc/apt/sources.list.d/pigsty.list > /dev/null <<EOF
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/infra generic main
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/pgsql ${distro_codename} main
EOF
sudo apt update

# 中国大陆镜像：将 repo.pigsty.io 替换为 repo.pigsty.cc
```

### 使用 Pigsty 剧本添加仓库

```bash
./node.yml -t node_repo -e node_repo_modules=node,pgsql        # 添加 PGDG 与 Pigsty 仓库
./node.yml -t node_repo -e node_repo_modules=node,pgsql,local  # 包括本地仓库
```


--------

## 常见问题

### 扩展名与包名的区别

- **扩展名**：`CREATE EXTENSION` 使用的名称，如 `vector`
- **包别名**：Pigsty 配置使用的名称，如 `pgvector`
- **包名**：操作系统实际的包名，如 `pgvector_17*` 或 `postgresql-17-pgvector`

### 预加载扩展无法启动

如果 `shared_preload_libraries` 中的扩展不存在或加载失败，PostgreSQL 将无法启动。解决方法：

1. 确保扩展已正确安装
2. 或从 `shared_preload_libraries` 中移除该扩展

### 扩展依赖

某些扩展依赖于其他扩展，需按顺序创建或使用 `CASCADE`：

```sql
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;
-- 或
CREATE EXTENSION postgis_topology CASCADE;
```


--------

## 相关资源

- [**扩展插件**](/docs/pgsql/ext/)：扩展管理的详细文档
- [**扩展目录**](https://pgext.cloud/zh/list)：查阅 400+ 可用扩展
- [**pig 包管理器**](https://pgext.cloud/pig)：扩展安装工具

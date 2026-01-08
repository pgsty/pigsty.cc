---
title: 安装扩展
weight: 2205
description: 在集群节点上安装扩展软件包
icon: fas fa-box-open
module: [PGSQL]
categories: [教程]
---

Pigsty 使用操作系统的包管理器（yum/apt）安装扩展软件包。


--------

## 相关参数

两个参数用于指定要安装的扩展：

| 参数 | 用途 | 默认行为 |
|:-----|:-----|:---------|
| [`pg_packages`](/docs/pgsql/param#pg_packages) | 全局通用软件包 | 确保存在（不升级） |
| [`pg_extensions`](/docs/pgsql/param#pg_extensions) | 集群特定扩展 | 安装最新版本 |

`pg_packages` 通常用于指定所有集群都需要的基础组件（PostgreSQL 内核、Patroni、pgBouncer 等）和必选扩展。

`pg_extensions` 用于指定特定集群需要的扩展。

```yaml
pg_packages:                           # 全局基础包
  - pgsql-main pgsql-common
pg_extensions:                         # 集群扩展
  - postgis timescaledb pgvector
```


--------

## 集群初始化时安装

在集群配置中声明扩展，初始化时自动安装：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_extensions: [ postgis, timescaledb, pgvector, pg_duckdb ]
```

执行 `./pgsql.yml` 初始化集群时，扩展会自动安装。


--------

## 已有集群安装扩展

对于已初始化的集群，有多种方式安装扩展：

### 使用 Pigsty 剧本

```bash
# 修改配置后使用剧本安装
./pgsql.yml -l pg-meta -t pg_extension

# 或直接在命令行指定扩展
./pgsql.yml -l pg-meta -t pg_extension -e '{"pg_extensions":["pg_duckdb"]}'
```

### 使用 pig 包管理器

```bash
# 使用 pig 安装扩展
pig install pg_duckdb

# 批量安装
ansible pg-meta -b -a 'pig install pg_duckdb pgvector'
```

### 直接使用包管理器

```bash
# EL 系统
sudo yum install -y pg_duckdb_18*

# Debian/Ubuntu 系统
sudo apt install -y postgresql-18-pg-duckdb
```


--------

## 使用包别名

Pigsty 支持使用标准化的包别名，自动翻译为对应 PG 版本的包名：

```yaml
pg_extensions:
  - pgvector           # 自动翻译为 pgvector_18* (EL) 或 postgresql-18-pgvector (Debian)
  - postgis            # 自动翻译为 postgis36_18* (EL) 或 postgresql-18-postgis-3* (Debian)
  - pgsql-gis          # 类别别名，安装整个 GIS 类别的扩展
```

也可以直接使用原始包名：

```yaml
pg_extensions:
  - pgvector_18*                    # EL 系统的原始包名
  - postgresql-18-pgvector          # Debian 系统的原始包名
```

包别名定义参见：

- [EL8 扩展列表](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el8.x86_64.yml)
- [EL9 扩展列表](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el9.x86_64.yml)
- [D12 扩展列表](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d12.x86_64.yml)
- [U22 扩展列表](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u22.x86_64.yml)
- [U24 扩展列表](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u24.x86_64.yml)


--------

## 验证安装

安装后可在数据库中验证：

```sql
-- 查看已安装的扩展
SELECT * FROM pg_available_extensions WHERE name = 'vector';

-- 查看扩展文件是否存在
\dx
```


---
title: 快速开始
weight: 2201
description: 使用扩展的四步流程速览
icon: fa-solid fa-rocket
module: [PGSQL]
categories: [教程]
---

在 Pigsty 中使用扩展需要四个步骤：**下载**、**安装**、**配置**、**启用**。

1. **下载**：将扩展软件包下载到本地仓库（Pigsty 默认已下载主流扩展）
2. **安装**：在集群节点上安装扩展软件包
3. **配置**：部分扩展需要预加载或配置参数
4. **启用**：在数据库中执行 `CREATE EXTENSION` 创建扩展


--------

## 声明式配置

在 Pigsty 配置清单中声明扩展，集群初始化时自动完成安装与启用：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_databases:
      - name: meta
        extensions: [ postgis, timescaledb, vector ]   # 在数据库中启用扩展
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain' # 预加载扩展库
    pg_extensions: [ postgis, timescaledb, pgvector ]  # 安装扩展软件包
```

执行 `./pgsql.yml` 初始化集群后，`postgis`、`timescaledb`、`vector` 三个扩展即在 `meta` 数据库中可用。


--------

## 命令式操作

对于已有集群，可以使用命令行方式添加扩展：

```bash
# 1. 安装扩展软件包
./pgsql.yml -l pg-meta -t pg_extension -e '{"pg_extensions":["pgvector"]}'

# 2. 预加载扩展（如需要，修改后需重启）
pg edit-config pg-meta --force -p shared_preload_libraries='timescaledb, pg_stat_statements, auto_explain'

# 3. 在数据库中启用扩展
psql -d meta -c 'CREATE EXTENSION vector;'
```

也可以使用 [pig](https://pgext.cloud/pig) 包管理器直接安装：

```bash
pig install pgvector        # 安装扩展包
pig extension create vector  # 在数据库中启用
```


--------

## 流程速查

| 步骤 | 参数/命令 | 说明 |
|:----:|:----------|:-----|
| 下载 | [`repo_extra_packages`](/docs/infra/param#repo_extra_packages) | 指定下载到本地仓库的扩展包 |
| 安装 | [`pg_extensions`](/docs/pgsql/param#pg_extensions) | 指定集群要安装的扩展包 |
| 配置 | [`pg_libs`](/docs/pgsql/param#pg_libs) | 预加载扩展到 `shared_preload_libraries` |
| 启用 | [`pg_databases.extensions`](/docs/pgsql/config/db) | 在数据库中自动执行 `CREATE EXTENSION` |

> 详细说明请参阅各子章节：[下载](download)、[安装](install)、[配置](config)、[启用](create)


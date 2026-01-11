---
title: 管理 PostgreSQL 集群中的扩展插件
linkTitle: 扩展管理
weight: 40
description: 在数据库中创建和启用扩展
icon: fas fa-plus-circle
module: [PGSQL]
categories: [任务]
---

## 速查手册

| 操作   | 命令 |
|------|----|
| 安装扩展 |    |
| 下载扩展 |    |
| 配置扩展 |    |
| 启用扩展 |    |
| 升级扩展 |    |
| 卸载扩展 |    |
{.full-width}


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

## 创建扩展


--------

## 移除扩展


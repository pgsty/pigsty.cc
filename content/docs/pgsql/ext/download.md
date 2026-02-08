---
title: 下载扩展
weight: 2204
description: 从软件仓库下载扩展包到本地
icon: fas fa-download
module: [PGSQL]
categories: [参考]
---

在安装扩展前，需要确保扩展软件包已下载到本地仓库或可从上游获取。


--------

## 默认行为

Pigsty 在安装过程中会自动下载默认 PostgreSQL 版本可用的主流扩展到本地软件仓库。

使用本地仓库的优势：
- 加速安装，避免重复下载
- 减少网络流量消耗
- 提高交付可靠性
- 确保版本一致性


--------

## 下载新扩展

要下载额外的扩展，将其添加到 [`repo_extra_packages`](/docs/infra/param#repo_extra_packages) 并重建仓库：

```yaml
all:
  vars:
    repo_extra_packages: [ pgvector, postgis, timescaledb, pg_duckdb ]
```

```bash
# 重新下载软件包到本地仓库
./infra.yml -t repo_build

# 刷新所有节点的软件源缓存
./node.yml -t node_repo
```


--------

## 使用上游仓库

也可以直接从互联网上游仓库安装，无需预先下载：

```bash
# 在节点上添加上游软件源
./node.yml -t node_repo -e node_repo_modules=node,pgsql
```

这种方式适合：
- 快速测试最新版本
- 安装冷门扩展
- 网络条件良好的环境

但可能面临：
- 网络不稳定影响安装
- 版本不一致风险


--------

## 扩展来源

扩展软件包来自两个主要源：

| 仓库 | 说明 |
|:-----|:-----|
| **PGDG** | PostgreSQL 官方仓库，提供核心扩展 |
| **Pigsty** | Pigsty 补充仓库，提供额外扩展 |
{.full-width}

Pigsty 仓库只收录 PGDG 仓库中不存在的扩展。一旦某扩展进入 PGDG 仓库，Pigsty 仓库会移除或与其保持一致。

仓库地址：
- PGDG YUM: https://download.postgresql.org/pub/repos/yum/
- PGDG APT: https://apt.postgresql.org/pub/repos/apt/
- Pigsty YUM: https://repo.pigsty.io/yum/
- Pigsty APT: https://repo.pigsty.io/apt/

详细的仓库配置请参阅 [扩展仓库](/docs/pgsql/ext/repo/)。


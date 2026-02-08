---
title: 扩展插件
weight: 2100
description: 利用 PostgreSQL 扩展的协同超能力
icon: fas fa-puzzle-piece
module: [PGSQL]
categories: [参考]
---

Pigsty 提供 [**444** 扩展](https://pgext.cloud/zh/list)，覆盖时序、地理、向量、全文检索、分析、特性增强等 16 大类别，开箱即用。

在 Pigsty 中使用扩展涉及四个核心步骤：[**下载**](/docs/pgsql/ext/download)、[**安装**](/docs/pgsql/ext/install)、[**配置/加载**](/docs/pgsql/ext/config) 与 [**启用**](/docs/pgsql/ext/create)。

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_databases:
      - name: meta
        extensions: [ postgis, timescaledb, vector ]   # 启用：在数据库中创建扩展
    pg_libs: 'timescaledb, pg_stat_statements, auto_explain' # 配置：预加载扩展库
    pg_extensions: [ postgis, timescaledb, pgvector ]  # 安装：安装扩展软件包
```

![](/img/pigsty/ecosystem.gif)


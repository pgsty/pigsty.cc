---
title: Percona
weight: 2108
description: 支持 TDE 透明加密的 Percona Postgres 发行版
icon: fa-solid fa-lock
module: [PGSQL]
categories: [概念]
---

[Percona Postgres](https://www.percona.com/postgresql/software/postgresql-distribution) 是一个带有 [`pg_tde`](https://docs.percona.com/pg-tde/index.html)（透明数据加密）扩展的补丁 Postgres 内核。

它与 PostgreSQL 18.1 兼容，在所有 Pigsty 支持的平台上都可用。

- [Percona 透明数据加密（TDE）性能测试](https://andreas.scherbaum.la/post/2025-06-30_performance-test-for-percona-transparent-data-encryption-tde/)


------

## 快速开始

使用 Pigsty [**标准安装流程**](/docs/setup/install)，配合 [`pgtde`](https://github.com/pgsty/pigsty/blob/main/conf/pgtde.yml) 配置模板。

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty;
./configure -c pgtde     # 使用 percona postgres 内核
./deploy.yml             # 使用 pigsty 设置一切
```



------

## 配置

需要调整以下参数来部署 Percona 集群：

```yaml
pg-meta:
  hosts:
    10.10.10.10: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - { name: dbuser_meta ,password: DBUser.Meta   ,pgbouncer: true ,roles: [dbrole_admin   ] ,comment: pigsty admin user }
      - { name: dbuser_view ,password: DBUser.Viewer ,pgbouncer: true ,roles: [dbrole_readonly] ,comment: read-only viewer  }
    pg_databases:
      - name: meta
        baseline: cmdb.sql
        comment: pigsty tde database
        schemas: [pigsty]
        extensions: [ vector, postgis, pg_tde ,pgaudit, { name: pg_stat_monitor, schema: monitor } ]
    pg_hba_rules:
      - { user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes' }
    node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ] # 每天凌晨 1 点进行全量备份

    # Percona PostgreSQL TDE 临时设置
    pg_packages: [ percona-main, pgsql-common ]  # 安装 percona postgres 包
    pg_libs: 'pg_tde, pgaudit, pg_stat_statements, pg_stat_monitor, auto_explain'
```


------

## 扩展

Percona 提供了 80 个可用的扩展，包括 `pg_tde`, `pgvector`, `postgis`, `pgaudit`, `set_user`, `pg_stat_monitor` 等实用三方扩展。

| 扩展名 | 版本 | 说明 |
|--------|------|------|
| pg_tde | 2.1 | Percona 透明数据加密访问方法 |
| vector | 0.8.1 | 向量数据类型及 ivfflat 和 hnsw 访问方法 |
| postgis | 3.5.4 | PostGIS 几何和地理空间类型及函数 |
| pgaudit | 18.0 | 提供审计功能 |
| pg_stat_monitor | 2.3 | PostgreSQL 查询性能监控工具 |
| set_user | 4.2.0 | 类似 SET ROLE 但带有额外日志记录 |
| pg_repack | 1.5.3 | 以最小锁定重组 PostgreSQL 数据库中的表 |
| hstore | 1.8 | 用于存储(键,值)对集合的数据类型 |
| ltree | 1.3 | 用于层次树状结构的数据类型 |
| pg_trgm | 1.6 | 基于三元组的文本相似度测量和索引搜索 |
{.full-width}

完整的 80 个扩展列表请参考 [Percona Postgres 官方文档](https://docs.percona.com/postgresql/18/extensions.html)。


------

## 关键特性

- **透明数据加密**：使用 pg_tde 扩展提供静态数据加密
- **PostgreSQL 18 兼容**：基于最新 PostgreSQL 18 版本
- **企业级扩展**：包含 pgaudit、pg_stat_monitor 等企业级功能
- **完整生态**：支持 pgvector、PostGIS 等流行扩展

> **注意**：目前处于稳定阶段 - 在生产使用前请彻底评估。


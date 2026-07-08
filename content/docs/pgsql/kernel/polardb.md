---
title: PolarDB PG
weight: 2106
description: 使用阿里云开源的 PolarDB for PostgreSQL 内核提供国产信创资质支持，与类似 Oracle RAC 的使用体验。
icon: fas fa-paw
module: [PGSQL]
categories: [概念]
---



--------

## 概览

Pigsty 允许使用 PolarDB 创建带有 “国产化信创资质” 的 PostgreSQL 集群！

PolarDB for PostgreSQL 当前以 PostgreSQL 17 为基线，Pigsty 中的 `polar` 模板、默认路径与扩展说明也已经同步到 PG17。任何兼容 PostgreSQL 线缆协议的客户端工具都可以访问 PolarDB 集群。

Pigsty 的 PGSQL 仓库中提供了 PolarDB PG 开源版安装包，但不会在 Pigsty 安装时下载到本地软件仓库。


![](/img/pigsty/polar.jpg)


--------

## 安装

使用 Pigsty 内置模板：

```bash
./configure -c polar
./deploy.yml
```

--------

## 变更摘要

从 Pigsty v4.4 开始，PolarDB PG 内核将直接使用 pigsty 构建打包的版本，主要变化如下：

| 项目            | 旧文档 / 旧默认值                  | 当前值                                |
|---------------|-----------------------------|------------------------------------|
| 内核基线          | PostgreSQL 15               | PostgreSQL 17                      |
| 默认 PolarDB 路径 | `/u01/polardb_pg`           | `/usr/polar-17`                    |
| 支持架构          | `x86_64`                    | `x86_64`, `aarch64`                |
| 可用扩展数         | 旧文档正文写为 61                  | `pg_available_extensions` 查询结果为 93，过滤 contrib 后为 34 |
| 复制用户要求        | `replicator` 需要 `SUPERUSER` | 保持不变                               |
{.full-width}

--------

## 配置

以下参数需要针对 PolarDB 数据库集群进行特殊配置：

```yaml
#----------------------------------#
# PGSQL & PolarDB
#----------------------------------#
pg_version: 17
pg_mode: polar
pg_packages: [ polardb, pgsql-common ]
pg_exporter_exclude_database: 'template0,template1,postgres,polardb_admin'
pg_default_roles:
  - { name: dbrole_readonly  ,login: false ,comment: role for global read-only access     }
  - { name: dbrole_offline   ,login: false ,comment: role for restricted read-only access }
  - { name: dbrole_readwrite ,login: false ,roles: [dbrole_readonly] ,comment: role for global read-write access }
  - { name: dbrole_admin     ,login: false ,roles: [pg_monitor, dbrole_readwrite] ,comment: role for object creation }
  - { name: postgres     ,superuser: true  ,comment: system superuser }
  - { name: replicator   ,superuser: true  ,replication: true ,roles: [pg_monitor, dbrole_readonly] ,comment: system replicator } # <- superuser is required for replication
  - { name: dbuser_dba   ,superuser: true  ,roles: [dbrole_admin]  ,pgbouncer: true ,pool_mode: session, pool_connlimit: 16 ,comment: pgsql admin user }
  - { name: dbuser_monitor ,roles: [pg_monitor] ,pgbouncer: true ,parameters: {log_min_duration_statement: 1000 } ,pool_mode: session ,pool_connlimit: 8 ,comment: pgsql monitor user }
```

默认 `polar` 内核安装目录已调整为 `/usr/polar-17`。这里特别注意，PolarDB PG 要求 `replicator` 复制用户为 `SUPERUSER`，与原生 PG 不同。





--------

## 扩展列表

PolarDB PG 内核共有 **93** 个可用扩展，去除 PG Contrib 自带扩展之后，还有以下额外扩展：

| 扩展名                                                       | 版本号       | 说明                                                                   |
|:----------------------------------------------------------|:----------|:---------------------------------------------------------------------|
| [hll](/ext/e/hll)                                         | `2.18`    | type for storing hyperloglog data                                    |
| [ip4r](/ext/e/ip4r)                                       | `2.4`     |                                                                      |
| [log_fdw](/ext/e/log_fdw)                                 | `1.4`     | foreign-data wrapper for Postgres log file access                    |
| pase                                                      | `0.0.1`   | ant ai similarity search                                             |
| [pg_bigm](/ext/e/pg_bigm)                                 | `1.2`     | text similarity measurement and index searching based on bigrams     |
| [pg_cron](/ext/e/pg_cron)                                 | `1.5`     | Job scheduler for PostgreSQL                                         |
| pg_cron_preload                                           | `1.0`     | polardb pg extend catalog                                            |
| [pg_hint_plan](/ext/e/pg_hint_plan)                       | `1.7.0`   | optimizer hints for PostgreSQL                                       |
| pg_jieba                                                  | `1.1.0`   | a parser for full-text search of Chinese                             |
| [pg_partman](/ext/e/pg_partman)                           | `5.2.4`   | Extension to manage partitioned tables by time or ID                 |
| [pg_profile](/ext/e/pg_profile)                           | `4.10`    | PostgreSQL load profile repository and report builder                |
| [pg_repack](/ext/e/pg_repack)                             | `1.5.1-1` | Reorganize tables in PostgreSQL databases with minimal locks         |
| [pg_similarity](/ext/e/pg_similarity)                     | `1.0`     | support similarity queries                                           |
| [pg_squeeze](/ext/e/pg_squeeze)                           | `1.9`     | A tool to remove unused space from a relation.                       |
| [pg_stat_kcache](/ext/e/pg_stat_kcache)                   | `2.3.0`   | Kernel statistics gathering                                          |
| [pgaudit](/ext/e/pgaudit)                                 | `17.1`    | provides auditing functionality                                      |
| [pgtap](/ext/e/pgtap)                                     | `1.3.3`   | Unit testing for PostgreSQL                                          |
| [pldbgapi](/ext/e/pldbgapi)                               | `1.1`     | server-side support for debugging PL/pgSQL functions                 |
| polar_advisor                                             | `1.1`     | polar_advisor                                                        |
| polar_feature_utils                                       | `1.0`     | PolarDB feature utilization                                          |
| polar_io_stat                                             | `1.0`     | polar io stat in multi dimension                                     |
| polar_monitor                                             | `1.3`     | monitor functions for PolarDB                                        |
| polar_monitor_preload                                     | `1.0`     | examine the polardb information                                      |
| polar_parameter_manager                                   | `1.2`     | Extension to select parameters for manger.                           |
| polar_proxy_utils                                         | `1.0`     | Extension to provide operations about proxy.                         |
| polar_resource_manager                                    | `1.0`     | a background process that forcibly frees user session process memory |
| polar_smgrperf                                            | `1.0`     | smgr perf test extension                                             |
| polar_tde_utils                                           | `1.0`     | Internal extension for TDE                                           |
| polar_vfs                                                 | `1.0`     | polar virtual file system for different storage                      |
| polar_worker                                              | `1.1`     | polar_worker                                                         |
| [prefix](/ext/e/prefix)                                   | `1.2.0`   | Prefix Range module for PostgreSQL                                   |
| [roaringbitmap](/ext/e/roaringbitmap)                     | `0.5`     | support for Roaring Bitmaps                                          |
| [sequential_uuids](/ext/e/sequential_uuids)               | `1.0.3`   | generator of sequential UUIDs                                        |
| varbitx                                                   | `1.1`     | varbit functions pack                                                |
{.full-width}

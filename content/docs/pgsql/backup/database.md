---
title: 备份数据库
weight: 1709
description: 如何在现有 PostgreSQL 集群中，克隆现有数据库，并利用 xfs 瞬间完成
icon: fa-solid fa-rotate-left
categories: [任务]
---



## 克隆数据库

你可以通过 template 机制复制一个 PostgreSQL 数据库，但在此期间不允许有任何连接到模版数据库的活动连接。

假设你想要克隆 `postgres` 数据库，那么必须一次性同时执行下面两条语句。
确保清理掉所有连接到 `postgres` 数据库的连接后执行 Clone

```sql
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'postgres'; 
CREATE DATABASE pgcopy TEMPLATE postgres STRATEGY FILE_COPY;
```


### 瞬间克隆

如果你使用的是 PostgreSQL 18 以上的版本，Pigsty 默认为您设置了 [`file_copy_method`](https://www.postgresql.org/docs/current/runtime-config-resource.html#GUC-FILE-COPY-METHOD)。
该参数允许你以 O(1) （约 200ms）的时间复杂度克隆一个数据库，而不需要复制数据文件。

但是您必须显式使用 [`FILE_COPY`](https://www.postgresql.org/docs/current/sql-createdatabase.html#CREATE-DATABASE-STRATEGY) 策略来创建数据库。
`CREATE DATABASE` 的 `STRATEGY` 参数自 PostgreSQL 15 引入以来的默认值为 `WAL_LOG`，你需要显式指定 `FILE_COPY` 来进行瞬间克隆。

```sql
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'meta';
CREATE DATABASE pgcopy TEMPLATE meta STRATEGY FILE_COPY;
```

例如，克隆一个 30 GB 的数据库，普通克隆（`WAL_LOG`）用时 18 秒，而瞬间克隆（`FILE_COPY`）仅需常数时间 200 毫秒。

但是，您仍然需要确保在克隆期间没有任何连接到模版数据库的活动连接，但这个时间可以非常短暂，因此具有生产环境的实用性。
如果您需要一个新的数据库副本用于测试或开发，瞬间克隆是一个非常好的选择。它并不会引入额外的存储开销，因为它使用了文件系统的 CoW（Copy on Write）机制。

Pigsty v4.0 起，您可以在 [`pg_databases`](/docs/pgsql/param#pg_databases/) 参数中使用 `strategy: FILE_COPY` 来实现瞬间克隆数据库。

```yaml
    pg-meta:
      hosts:
        10.10.10.10: { pg_seq: 1, pg_role: primary }
      vars:
        pg_cluster: pg-meta
        pg_version: 18
        pg_databases:

          - name: meta

          - name: meta_dev
            template: meta
            strategy: FILE_COPY         # <---- PG 15 引入， PG18 瞬间生效 
            #comment: "meta clone"      # <---- 数据库注释
            #pgbouncer: false           # <---- 不加入 连接池？
            #register_datasource: false # <---- 不加入 Grafana 数据源？        
```

配置完毕后，使用标准数据库创建 SOP 创建该数据库即可：

```bash
bin/pgsql-db pg-meta meta_dev
```


### 局限性与注意事项

请注意，这个特性仅在支持的文件系统上可用（xfs，brtfs，zfs，apfs），如果文件系统不支持，PostgreSQL 将会报错失败。
默认情况下，主流操作系统发行版的 xfs 都已经默认启用 reflink=1 选项，因此大多数情况下您不需要担心这个问题。
OpenZFS 需要显式配置才能支持 CoW，但因为存在数据损坏的先例，不建议将此特性用于生产。

如果您使用的 PostgreSQL 版本低于 15，指定 `strategy` 不会有任何效果。

请不要使用 `postgres` 数据库作为模版数据库进行克隆，因为管理链接通常会连接到 `postgres` 数据库，这阻止了克隆操作的进行。
如果您确实需要克隆 `postgres` 数据库，请你手动连接到其他数据库上后，自行执行 SQL 实现。

在极高并发/吞吐的生产环境中使用瞬间克隆需要谨慎，它需要在克隆窗口（200ms）内清理掉所有连接到模版数据库的连接，否则克隆会失败。



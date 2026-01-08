---
title: Babelfish
weight: 2104
description: 使用 WiltonDB 与 Babelfish 创建兼容 Microsoft SQL Server 的 PostgreSQL 数据库集群！（线缆协议级仿真）
icon: fab fa-microsoft
module: [PGSQL]
categories: [概念]
---

> [Babelfish](https://babelfishpg.org/) 是一个基于 PostgreSQL 的 MSSQL（微软 SQL Server）兼容性方案，由 AWS 开源。


--------

## 概览

Pigsty 允许用户使用 Babelfish 与 WiltonDB 创建 Microsoft SQL Server 兼容的 PostgreSQL 集群！

- [Babelfish](https://babelfishpg.org/) ：一个由 AWS 开源的 MSSQL（微软 SQL Server） 兼容性扩展插件
- [WiltonDB](https://github.com/wiltondb/wiltondb)： 一个专注于整合 Babelfish 的 PostgreSQL 内核发行版

Babelfish 是一个 PostgreSQL 扩展插件，但只能在一个轻微修改过的 PostgreSQL 内核 Fork 上工作，WiltonDB 在 EL/Ubuntu 系统下提供了编译后的Fork内核二进制与扩展二进制软件包。

Pigsty 可以使用 WiltonDB 替代原生的 PostgreSQL 内核，提供开箱即用的 MSSQL 兼容集群。MSSQL集群使用与管理与一套标准的 PostgreSQL 15 集群并无差异，您可以使用 Pigsty 提供的所有功能，如高可用，备份，监控等。

WiltonDB 带有包括 Babelfish 在内的若干扩展插件，但不能使用 PostgreSQL 原生的扩展插件。

MSSQL 兼容集群在启动后，除了监听 PostgreSQL 默认的端口外，还会监听 MSSQL 默认的 `1433` 端口，并在此端口上通过 TDS WireProtocol 提供 MSSQL 服务。 
您可以用任何 MSSQL 客户端连接至 Pigsty 提供的 MSSQL 服务，如 SQL Server Management Studio，或者使用 `sqlcmd` 命令行工具。

![](/img/pigsty/mssql.jpg)


--------

## 安装

WiltonDB 与原生 PostgreSQL 内核冲突，在一个节点上只能选择一个内核进行安装，使用以下命令在线安装 WiltonDB 内核。

```bash
./node.yml -t node_install -e '{"node_repo_modules":"local,mssql","node_packages":["wiltondb"]}'
```

请注意 WiltonDB 仅在 EL 与 Ubuntu 系统中可用，目前尚未提供 Debian 支持。

Pigsty 专业版提供了 WiltonDB 离线安装包，可以从本地软件源安装 WiltonDB。



--------

## 配置

在安装部署 MSSQL 模块时需要特别注意以下事项：

- WiltonDB 在 EL (7/8/9) 和 Ubuntu (20.04/22.04) 中可用，**在Debian系统中不可用**。
- WiltonDB 目前基于 PostgreSQL 15 编译，因此需要指定 `pg_version: 15` 。
- 在 EL 系统上，`wiltondb` 的二进制默认会安装至 `/usr/bin/` 目录下，而在 Ubuntu 系统上则会安装至 `/usr/lib/postgresql/15/bin/` 目录下，与 PostgreSQL 官方二进制文件放置位置不同。
- WiltonDB 兼容模式下，HBA 密码认证规则需要使用 `md5`，而非 `scram-sha-256`，因此需要覆盖 Pigsty 默认的 HBA 规则集，将 SQL Server 需要的 `md5` 认证规则，插入到 `dbrole_readonly` 通配认证规则之前
- WiltonDB 只能针对一个首要数据库启用，同时应当指定一个用户作为 Babelfish 的超级用户，以便 Babelfish 可以创建数据库和用户，默认为 `mssql` 与 `dbuser_myssql`，如果修改，请一并修改 `files/mssql.sql` 中的用户。
- WiltonDB TDS 线缆协议兼容插件 `babelfishpg_tds` 需要在 `shared_preload_libraries` 中启用
- WiltonDB 扩展在启用后，默认监听 MSSQL `1433` 端口，您可以覆盖 Pigsty 默认的服务定义，将 `primary` 与 `replica` 服务的端口指向 `1433` ，而不是 `5432` / `6432` 端口。 

以下参数需要针对 MSSQL 数据库集群进行配置：

```yaml
#----------------------------------#
# PGSQL & MSSQL (Babelfish & Wilton)
#----------------------------------#
# PG Installation
node_repo_modules: local,node,mssql # add mssql and os upstream repos
pg_mode: mssql                      # Microsoft SQL Server Compatible Mode
pg_libs: 'babelfishpg_tds, pg_stat_statements, auto_explain' # add timescaledb to shared_preload_libraries
pg_version: 15                      # The current WiltonDB major version is 15
pg_packages:
  - wiltondb                        # install forked version of postgresql with babelfishpg support
  - patroni pgbouncer pgbackrest pg_exporter pgbadger vip-manager
pg_extensions: []                   # do not install any vanilla postgresql extensions

# PG Provision
pg_default_hba_rules:               # overwrite default HBA rules for babelfish cluster
- {user: '${dbsu}'    ,db: all         ,addr: local     ,auth: ident ,title: 'dbsu access via local os user ident'  }
- {user: '${dbsu}'    ,db: replication ,addr: local     ,auth: ident ,title: 'dbsu replication from local os ident' }
- {user: '${repl}'    ,db: replication ,addr: localhost ,auth: pwd   ,title: 'replicator replication from localhost'}
- {user: '${repl}'    ,db: replication ,addr: intra     ,auth: pwd   ,title: 'replicator replication from intranet' }
- {user: '${repl}'    ,db: postgres    ,addr: intra     ,auth: pwd   ,title: 'replicator postgres db from intranet' }
- {user: '${monitor}' ,db: all         ,addr: localhost ,auth: pwd   ,title: 'monitor from localhost with password' }
- {user: '${monitor}' ,db: all         ,addr: infra     ,auth: pwd   ,title: 'monitor from infra host with password'}
- {user: '${admin}'   ,db: all         ,addr: infra     ,auth: ssl   ,title: 'admin @ infra nodes with pwd & ssl'   }
- {user: '${admin}'   ,db: all         ,addr: world     ,auth: ssl   ,title: 'admin @ everywhere with ssl & pwd'    }
- {user: dbuser_mssql ,db: mssql       ,addr: intra     ,auth: md5   ,title: 'allow mssql dbsu intranet access'     } # <--- use md5 auth method for mssql user
- {user: '+dbrole_readonly',db: all    ,addr: localhost ,auth: pwd   ,title: 'pgbouncer read/write via local socket'}
- {user: '+dbrole_readonly',db: all    ,addr: intra     ,auth: pwd   ,title: 'read/write biz user via password'     }
- {user: '+dbrole_offline' ,db: all    ,addr: intra     ,auth: pwd   ,title: 'allow etl offline tasks from intranet'}
pg_default_services:                # route primary & replica service to mssql port 1433
- { name: primary ,port: 5433 ,dest: 1433  ,check: /primary   ,selector: "[]" }
- { name: replica ,port: 5434 ,dest: 1433  ,check: /read-only ,selector: "[]" , backup: "[? pg_role == `primary` || pg_role == `offline` ]" }
- { name: default ,port: 5436 ,dest: postgres ,check: /primary   ,selector: "[]" }
- { name: offline ,port: 5438 ,dest: postgres ,check: /replica   ,selector: "[? pg_role == `offline` || pg_offline_query ]" , backup: "[? pg_role == `replica` && !pg_offline_query]"}

```

您可以定义 MSSQL 业务数据库与业务用户：

```yaml
#----------------------------------#
# pgsql (singleton on current node)
#----------------------------------#
# this is an example single-node postgres cluster with postgis & timescaledb installed, with one biz database & two biz users
pg-meta:
  hosts:
    10.10.10.10: { pg_seq: 1, pg_role: primary } # <---- primary instance with read-write capability
  vars:
    pg_cluster: pg-test
    pg_users:                           # create MSSQL superuser
      - {name: dbuser_mssql ,password: DBUser.MSSQL ,superuser: true, pgbouncer: true ,roles: [dbrole_admin], comment: superuser & owner for babelfish  }
    pg_primary_db: mssql                # use `mssql` as the primary sql server database
    pg_databases:
      - name: mssql
        baseline: mssql.sql             # init babelfish database & user
        extensions:
          - { name: uuid-ossp          }
          - { name: babelfishpg_common }
          - { name: babelfishpg_tsql   }
          - { name: babelfishpg_tds    }
          - { name: babelfishpg_money  }
          - { name: pg_hint_plan       }
          - { name: system_stats       }
          - { name: tds_fdw            }
        owner: dbuser_mssql
        parameters: { 'babelfishpg_tsql.migration_mode' : 'multi-db' }
        comment: babelfish cluster, a MSSQL compatible pg cluster
```



--------

## 访问

您可以使用任何 SQL Server 兼容的客户端工具来访问这个数据库集群。

Microsoft 提供了 [sqlcmd](https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-use-utility?view=sql-server-ver16) 作为官方的命令行工具。

除此之外，他们还提供了一个 Go 语言版本的命令行工具 [go-sqlcmd](https://github.com/microsoft/go-sqlcmd)。

安装 `go-sqlcmd`:

```bash
curl -LO https://github.com/microsoft/go-sqlcmd/releases/download/v1.4.0/sqlcmd-v1.4.0-linux-amd64.tar.bz2
tar xjvf sqlcmd-v1.4.0-linux-amd64.tar.bz2
sudo mv sqlcmd* /usr/bin/
```

快速上手 `go-sqlcmd`

```bash
$ sqlcmd -S 10.10.10.10,1433 -U dbuser_mssql -P DBUser.MSSQL
1> select @@version
2> go
version                                                                                                                                                                                                                                                         
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Babelfish for PostgreSQL with SQL Server Compatibility - 12.0.2000.8
Oct 22 2023 17:48:32
Copyright (c) Amazon Web Services
PostgreSQL 15.4 (EL 1:15.4.wiltondb3.3_2-2.el8) on x86_64-redhat-linux-gnu (Babelfish 3.3.0)                                        

(1 row affected)
```

使用 Pigsty 提供的服务机制，可以使用 5433 / 5434 端口始终连接到主库/从库上的 1433 端口。

```bash
# 访问任意集群成员上的 5433 端口，指向主库上的 1433 MSSQL 端口 
sqlcmd -S 10.10.10.11,5433 -U dbuser_mssql -P DBUser.MSSQL

# 访问任意集群成员上的 5434 端口，指向任意可读库上的 1433 MSSQL 端口
sqlcmd -S 10.10.10.11,5434 -U dbuser_mssql -P DBUser.MSSQL
```



--------

## 扩展

绝大多数 **PGSQL** 模块的 [**扩展插件**](/docs/pgsql/ext/)（非纯 SQL 类）都无法直接在 MSSQL 模块的 WiltonDB 内核上使用，需要重新编译。

目前 WiltonDB 自带了以下扩展插件，除了 PostgreSQL Contrib 扩展，四个 BabelfishPG 核心扩展之外，还提供了 `pg_hint_pan`，`tds_fdw`，以及 `system_stats` 三个第三方扩展。

| 扩展名                | 版本    | 说明                                                                                |
|--------------------|-------|-----------------------------------------------------------------------------------|
| dblink             | 1.2   | connect to other PostgreSQL databases from within a database                      |
| adminpack          | 2.1   | administrative functions for PostgreSQL                                           |
| dict_int           | 1.0   | text search dictionary template for integers                                      |
| intagg             | 1.1   | integer aggregator and enumerator (obsolete)                                      |
| dict_xsyn          | 1.0   | text search dictionary template for extended synonym processing                   |
| amcheck            | 1.3   | functions for verifying relation integrity                                        |
| autoinc            | 1.0   | functions for autoincrementing fields                                             |
| bloom              | 1.0   | bloom access method - signature file based index                                  |
| fuzzystrmatch      | 1.1   | determine similarities and distance between strings                               |
| intarray           | 1.5   | functions, operators, and index support for 1-D arrays of integers                |
| btree_gin          | 1.3   | support for indexing common datatypes in GIN                                      |
| btree_gist         | 1.7   | support for indexing common datatypes in GiST                                     |
| hstore             | 1.8   | data type for storing sets of (key, value) pairs                                  |
| hstore_plperl      | 1.0   | transform between hstore and plperl                                               |
| isn                | 1.2   | data types for international product numbering standards                          |
| hstore_plperlu     | 1.0   | transform between hstore and plperlu                                              |
| jsonb_plperl       | 1.0   | transform between jsonb and plperl                                                |
| citext             | 1.6   | data type for case-insensitive character strings                                  |
| jsonb_plperlu      | 1.0   | transform between jsonb and plperlu                                               |
| jsonb_plpython3u   | 1.0   | transform between jsonb and plpython3u                                            |
| cube               | 1.5   | data type for multidimensional cubes                                              |
| hstore_plpython3u  | 1.0   | transform between hstore and plpython3u                                           |
| earthdistance      | 1.1   | calculate great-circle distances on the surface of the Earth                      |
| lo                 | 1.1   | Large Object maintenance                                                          |
| file_fdw           | 1.0   | foreign-data wrapper for flat file access                                         |
| insert_username    | 1.0   | functions for tracking who changed a table                                        |
| ltree              | 1.2   | data type for hierarchical tree-like structures                                   |
| ltree_plpython3u   | 1.0   | transform between ltree and plpython3u                                            |
| pg_walinspect      | 1.0   | functions to inspect contents of PostgreSQL Write-Ahead Log                       |
| moddatetime        | 1.0   | functions for tracking last modification time                                     |
| old_snapshot       | 1.0   | utilities in support of old_snapshot_threshold                                    |
| pgcrypto           | 1.3   | cryptographic functions                                                           |
| pgrowlocks         | 1.2   | show row-level locking information                                                |
| pageinspect        | 1.11  | inspect the contents of database pages at a low level                             |
| pg_surgery         | 1.0   | extension to perform surgery on a damaged relation                                |
| seg                | 1.4   | data type for representing line segments or floating-point intervals              |
| pgstattuple        | 1.5   | show tuple-level statistics                                                       |
| pg_buffercache     | 1.3   | examine the shared buffer cache                                                   |
| pg_freespacemap    | 1.2   | examine the free space map (FSM)                                                  |
| postgres_fdw       | 1.1   | foreign-data wrapper for remote PostgreSQL servers                                |
| pg_prewarm         | 1.2   | prewarm relation data                                                             |
| tcn                | 1.0   | Triggered change notifications                                                    |
| pg_trgm            | 1.6   | text similarity measurement and index searching based on trigrams                 |
| xml2               | 1.1   | XPath querying and XSLT                                                           |
| refint             | 1.0   | functions for implementing referential integrity (obsolete)                       |
| pg_visibility      | 1.2   | examine the visibility map (VM) and page-level visibility info                    |
| pg_stat_statements | 1.10  | track planning and execution statistics of all SQL statements executed            |
| sslinfo            | 1.2   | information about SSL certificates                                                |
| tablefunc          | 1.0   | functions that manipulate whole tables, including crosstab                        |
| tsm_system_rows    | 1.0   | TABLESAMPLE method which accepts number of rows as a limit                        |
| tsm_system_time    | 1.0   | TABLESAMPLE method which accepts time in milliseconds as a limit                  |
| unaccent           | 1.1   | text search dictionary that removes accents                                       |
| uuid-ossp          | 1.1   | generate universally unique identifiers (UUIDs)                                   |
| plpgsql            | 1.0   | PL/pgSQL procedural language                                                      |
| babelfishpg_money  | 1.1.0 | babelfishpg_money                                                                 |
| system_stats       | 2.0   | EnterpriseDB system statistics for PostgreSQL                                     |
| tds_fdw            | 2.0.3 | Foreign data wrapper for querying a TDS database (Sybase or Microsoft SQL Server) |
| babelfishpg_common | 3.3.3 | Transact SQL Datatype Support                                                     |
| babelfishpg_tds    | 1.0.0 | TDS protocol extension                                                            |
| pg_hint_plan       | 1.5.1 |                                                                                   |
| babelfishpg_tsql   | 3.3.1 | Transact SQL compatibility                                                        |


- Pigsty 专业版提供离线安装 MSSQL 兼容模块的能力
- Pigsty [**专业版**](/docs/about/service/) 提供可选的 MSSQL 兼容内核扩展移植定制服务，可以将 PGSQL 模块中可用的 [**扩展**](/docs/pgsql/ext/) 移植到 MSSQL 集群中。 






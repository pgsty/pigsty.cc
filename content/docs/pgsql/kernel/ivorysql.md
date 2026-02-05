---
title: IvorySQL
weight: 2105
description: 使用瀚高开源的 IvorySQL 内核，基于 PostgreSQL 集群实现 Oracle 语法/PLSQL 兼容性。
icon: fas fa-server
module: [PGSQL]
categories: [概念]
---

[IvorySQL](https://www.ivorysql.org/) 是一个开源的，旨在基于 PG 提供 “Oracle兼容性” 的 PostgreSQL 内核分支。


--------

## 概览

IvorySQL 内核支持在 Pigsty 开源版本中提供，您的服务器需要互联网访问，直接从 IvorySQL 的官方仓库下载相关软件包。

请注意，直接将 IvorySQL 加入 Pigsty 默认软件仓库中会影响原生 PostgreSQL 内核的安装。Pigsty 专业版提供包括 IvorySQL 内核在内的离线安装解决方案。


![](/img/pigsty/ivory.jpg)

当前 IvorySQL 的最新版本为 **5.0**，对应的 PostgreSQL 版本为 **18**。请注意，IvorySQL 当前仅在 EL8/EL9 上可用。

> 最后一个支持 EL7 的 IvorySQL 版本为 3.3，对应 PostgreSQL 16.3；最后一个基于 PostgreSQL 17 的版本为 IvorySQL 4.4



--------

## 安装

如果您的环境有互联网访问，您可以使用以下方式，直接将 IvorySQL 仓库加入到节点上，然后执行 PGSQL 剧本进行安装

```bash
./node.yml -t node_repo -e '{"node_repo_modules":"local,node,pgsql,ivory"}'
```


--------

## 配置

以下参数需要针对 IvorySQL 数据库集群进行配置：

```yaml
#----------------------------------#
# Ivory SQL Configuration
#----------------------------------#
node_repo_modules: local,node,pgsql,ivory  # add ivorysql upstream repo
pg_mode: ivory                    # IvorySQL Oracle Compatible Mode
pg_packages: [ 'ivorysql patroni pgbouncer pgbackrest pg_exporter pgbadger vip-manager' ]
pg_libs: 'liboracle_parser, pg_stat_statements, auto_explain'
pg_extensions: [ ]                # do not install any vanilla postgresql extensions
```

> 使用 Oracle 兼容性模式时，需要动态加载 `liboracle_parser` 扩展插件。


--------

## 客户端访问

IvorySQL 等效于 PostgreSQL 16，任何兼容 PostgreSQL 线缆协议的客户端工具都可以访问 IvorySQL 集群。

--------

## 扩展列表

绝大多数 **PGSQL** 模块的 [**扩展插件**](/docs/pgsql/ext/) （非纯 SQL 类）都无法直接在 IvorySQL 内核上使用，如果需要使用，请针对新内核从源码重新编译安装。

目前 IvorySQL 内核自带了以下 **101** 个扩展插件。

| name                 | version | comment                                                                |
|----------------------|---------|------------------------------------------------------------------------|
| hstore_plperl        | 1.0     | transform between hstore and plperl                                    |
| plisql               | 1.0     | PL/iSQL procedural language                                            |
| hstore_plperlu       | 1.0     | transform between hstore and plperlu                                   |
| adminpack            | 2.1     | administrative functions for PostgreSQL                                |
| insert_username      | 1.0     | functions for tracking who changed a table                             |
| dblink               | 1.2     | connect to other PostgreSQL databases from within a database           |
| dict_int             | 1.0     | text search dictionary template for integers                           |
| amcheck              | 1.3     | functions for verifying relation integrity                             |
| intagg               | 1.1     | integer aggregator and enumerator (obsolete)                           |
| autoinc              | 1.0     | functions for autoincrementing fields                                  |
| bloom                | 1.0     | bloom access method - signature file based index                       |
| dict_xsyn            | 1.0     | text search dictionary template for extended synonym processing        |
| btree_gin            | 1.3     | support for indexing common datatypes in GIN                           |
| earthdistance        | 1.1     | calculate great-circle distances on the surface of the Earth           |
| file_fdw             | 1.0     | foreign-data wrapper for flat file access                              |
| fuzzystrmatch        | 1.2     | determine similarities and distance between strings                    |
| btree_gist           | 1.7     | support for indexing common datatypes in GiST                          |
| intarray             | 1.5     | functions, operators, and index support for 1-D arrays of integers     |
| citext               | 1.6     | data type for case-insensitive character strings                       |
| isn                  | 1.2     | data types for international product numbering standards               |
| ivorysql_ora         | 1.0     | Oracle Compatible extenison on Postgres Database                       |
| jsonb_plperl         | 1.0     | transform between jsonb and plperl                                     |
| cube                 | 1.5     | data type for multidimensional cubes                                   |
| dummy_index_am       | 1.0     | dummy_index_am - index access method template                          |
| dummy_seclabel       | 1.0     | Test code for SECURITY LABEL feature                                   |
| hstore               | 1.8     | data type for storing sets of (key, value) pairs                       |
| jsonb_plperlu        | 1.0     | transform between jsonb and plperlu                                    |
| lo                   | 1.1     | Large Object maintenance                                               |
| ltree                | 1.2     | data type for hierarchical tree-like structures                        |
| moddatetime          | 1.0     | functions for tracking last modification time                          |
| old_snapshot         | 1.0     | utilities in support of old_snapshot_threshold                         |
| ora_btree_gin        | 1.0     | support for indexing oracle datatypes in GIN                           |
| pg_trgm              | 1.6     | text similarity measurement and index searching based on trigrams      |
| ora_btree_gist       | 1.0     | support for oracle indexing common datatypes in GiST                   |
| pg_visibility        | 1.2     | examine the visibility map (VM) and page-level visibility info         |
| pg_walinspect        | 1.1     | functions to inspect contents of PostgreSQL Write-Ahead Log            |
| pgcrypto             | 1.3     | cryptographic functions                                                |
| pgstattuple          | 1.5     | show tuple-level statistics                                            |
| pageinspect          | 1.12    | inspect the contents of database pages at a low level                  |
| pgrowlocks           | 1.2     | show row-level locking information                                     |
| pg_buffercache       | 1.4     | examine the shared buffer cache                                        |
| pg_stat_statements   | 1.10    | track planning and execution statistics of all SQL statements executed |
| pg_freespacemap      | 1.2     | examine the free space map (FSM)                                       |
| plsample             | 1.0     | PL/Sample                                                              |
| pg_prewarm           | 1.2     | prewarm relation data                                                  |
| pg_surgery           | 1.0     | extension to perform surgery on a damaged relation                     |
| seg                  | 1.4     | data type for representing line segments or floating-point intervals   |
| postgres_fdw         | 1.1     | foreign-data wrapper for remote PostgreSQL servers                     |
| refint               | 1.0     | functions for implementing referential integrity (obsolete)            |
| test_ext_req_schema1 | 1.0     | Required extension to be referenced                                    |
| spgist_name_ops      | 1.0     | Test opclass for SP-GiST                                               |
| test_ext_req_schema2 | 1.0     | Test schema referencing of required extensions                         |
| test_shm_mq          | 1.0     | Test code for shared memory message queues                             |
| sslinfo              | 1.2     | information about SSL certificates                                     |
| test_slru            | 1.0     | Test code for SLRU                                                     |
| tablefunc            | 1.0     | functions that manipulate whole tables, including crosstab             |
| bool_plperl          | 1.0     | transform between bool and plperl                                      |
| tcn                  | 1.0     | Triggered change notifications                                         |
| test_ext_req_schema3 | 1.0     | Test schema referencing of 2 required extensions                       |
| test_bloomfilter     | 1.0     | Test code for Bloom filter library                                     |
| test_copy_callbacks  | 1.0     | Test code for COPY callbacks                                           |
| test_ginpostinglist  | 1.0     | Test code for ginpostinglist.c                                         |
| test_custom_rmgrs    | 1.0     | Test code for custom WAL resource managers                             |
| test_integerset      | 1.0     | Test code for integerset                                               |
| test_ddl_deparse     | 1.0     | Test code for DDL deparse feature                                      |
| tsm_system_rows      | 1.0     | TABLESAMPLE method which accepts number of rows as a limit             |
| test_ext1            | 1.0     | Test extension 1                                                       |
| tsm_system_time      | 1.0     | TABLESAMPLE method which accepts time in milliseconds as a limit       |
| test_ext2            | 1.0     | Test extension 2                                                       |
| unaccent             | 1.1     | text search dictionary that removes accents                            |
| test_ext3            | 1.0     | Test extension 3                                                       |
| test_ext4            | 1.0     | Test extension 4                                                       |
| uuid-ossp            | 1.1     | generate universally unique identifiers (UUIDs)                        |
| test_ext5            | 1.0     | Test extension 5                                                       |
| worker_spi           | 1.0     | Sample background worker                                               |
| test_ext6            | 1.0     | test_ext6                                                              |
| test_lfind           | 1.0     | Test code for optimized linear search functions                        |
| xml2                 | 1.1     | XPath querying and XSLT                                                |
| test_ext7            | 1.0     | Test extension 7                                                       |
| plpgsql              | 1.0     | PL/pgSQL procedural language                                           |
| test_ext8            | 1.0     | Test extension 8                                                       |
| test_parser          | 1.0     | example of a custom parser for full-text search                        |
| test_pg_dump         | 1.0     | Test pg_dump with an extension                                         |
| test_ext_cine        | 1.0     | Test extension using CREATE IF NOT EXISTS                              |
| test_predtest        | 1.0     | Test code for optimizer/util/predtest.c                                |
| test_ext_cor         | 1.0     | Test extension using CREATE OR REPLACE                                 |
| test_rbtree          | 1.0     | Test code for red-black tree library                                   |
| test_ext_cyclic1     | 1.0     | Test extension cyclic 1                                                |
| test_ext_cyclic2     | 1.0     | Test extension cyclic 2                                                |
| test_ext_extschema   | 1.0     | test @extschema@                                                       |
| test_regex           | 1.0     | Test code for backend/regex/                                           |
| test_ext_evttrig     | 1.0     | Test extension - event trigger                                         |
| bool_plperlu         | 1.0     | transform between bool and plperlu                                     |
| plperl               | 1.0     | PL/Perl procedural language                                            |
| plperlu              | 1.0     | PL/PerlU untrusted procedural language                                 |
| hstore_plpython3u    | 1.0     | transform between hstore and plpython3u                                |
| jsonb_plpython3u     | 1.0     | transform between jsonb and plpython3u                                 |
| ltree_plpython3u     | 1.0     | transform between ltree and plpython3u                                 |
| plpython3u           | 1.0     | PL/Python3U untrusted procedural language                              |
| pltcl                | 1.0     | PL/Tcl procedural language                                             |
| pltclu               | 1.0     | PL/TclU untrusted procedural language                                  |
{.full-width}

请注意，Pigsty 不对使用 IvorySQL 内核承担任何质保责任，使用此内核遇到的任何问题与需求请联系原厂解决。

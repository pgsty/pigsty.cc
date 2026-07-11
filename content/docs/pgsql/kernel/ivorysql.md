---
title: IvorySQL
weight: 2105
description: 使用瀚高开源的 IvorySQL 内核，基于 PostgreSQL 集群实现 Oracle 语法/PLSQL 兼容性。
icon: fas fa-server
module: [PGSQL]
categories: [概念]
---

[IvorySQL](https://www.ivorysql.org/) 是一个开源的，旨在基于 PG 提供 “Oracle 兼容性” 的 PostgreSQL 内核分支。


--------

## 概览

Pigsty PGSQL 仓库直接提供 IvorySQL 5.4 软件包，兼容 PostgreSQL 18.4，并覆盖当前支持的 EL、Debian、Ubuntu 与双架构平台。
在线安装使用 Pigsty 的 `pgsql` 仓库；商业版同时提供对应平台的离线交付方案。


![](/img/pigsty/ivory.jpg)

当前 Pigsty 的 `ivorysql` 包别名指向 IvorySQL 5，兼容 PostgreSQL 18。不同发行版的真实包名由 `roles/node_id/vars/` 中的平台变量映射，例如 EL 使用 `ivorysql5`，Debian/Ubuntu 使用 `ivorysql-5`。

> 最后一个支持 EL7 的 IvorySQL 版本为 3.3，对应 PostgreSQL 16.3；最后一个基于 PostgreSQL 17 的版本为 IvorySQL 4.4



--------

## 安装

使用 Pigsty 内置的 `ivory` 配置模板安装：

```bash
./configure -c ivory
./deploy.yml
```


--------

## 配置

以下参数需要针对 IvorySQL 数据库集群进行配置：

```yaml
#----------------------------------#
# Ivory SQL Configuration
#----------------------------------#
node_repo_modules: node,infra,pgsql       # use Pigsty node/infra/pgsql repos
pg_mode: ivory                    # IvorySQL Oracle Compatible Mode
pg_packages: [ ivorysql, pgsql-common ]
pg_libs: 'liboracle_parser, pg_stat_statements, auto_explain'
pg_extensions: [ ]                # do not install any vanilla postgresql extensions
```

> 使用 Oracle 兼容性模式时，需要动态加载 `liboracle_parser` 扩展插件。


--------

## 客户端访问

IvorySQL 5 等效于 PostgreSQL 18，任何兼容 PostgreSQL 线缆协议的客户端工具都可以访问 IvorySQL 集群。

--------

## 可用扩展

IvorySQL 内核共有 **95** 个可用扩展，去除 PG Contrib 自带扩展之后，还有以下额外扩展：

| 扩展名                                                                 | 版本号     | 说明                                                                                                                                                                                                                                                        |
|:--------------------------------------------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [address_standardizer](/ext/e/address_standardizer)                 | `3.5.4` | Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.                                                                                                                                       |
| [address_standardizer_data_us](/ext/e/address_standardizer_data_us) | `3.5.4` | Address Standardizer US dataset example                                                                                                                                                                                                                   |
| [age](/ext/e/age)                                                   | `1.7.0` | AGE database extension                                                                                                                                                                                                                                    |
| [ddlx](/ext/e/ddlx)                                                 | `0.31`  | DDL eXtractor functions                                                                                                                                                                                                                                   |
| [gb18030_2022](/ext/e/gb18030_2022)                                 | `1.0`   | support gb18030 2022 with extension                                                                                                                                                                                                                       |
| [http](/ext/e/http)                                                 | `1.7`   | HTTP client for PostgreSQL, allows web page retrieval inside the database.                                                                                                                                                                                |
| [ivorysql_ora](/ext/e/ivorysql_ora)                                 | `1.0`   | Oracle Compatible extenison on Postgres Database                                                                                                                                                                                                          |
| [ora_btree_gin](/ext/e/ora_btree_gin)                               | `1.0`   | support for indexing oracle datatypes in GIN                                                                                                                                                                                                              |
| [ora_btree_gist](/ext/e/ora_btree_gist)                             | `1.0`   | support for oracle indexing common datatypes in GiST                                                                                                                                                                                                      |
| [pg_bigm](/ext/e/pg_bigm)                                           | `1.2`   | text similarity measurement and index searching based on bigrams                                                                                                                                                                                          |
| [pg_cron](/ext/e/pg_cron)                                           | `1.6`   | Job scheduler for PostgreSQL                                                                                                                                                                                                                              |
| [pg_curl](/ext/e/pg_curl)                                           | `2.4`   | PostgreSQL cURL allows most curl actions, including data transfer with URL syntax via HTTP, HTTPS, FTP, FTPS, GOPHER, TFTP, SCP, SFTP, SMB, TELNET, DICT, LDAP, LDAPS, FILE, IMAP, SMTP, POP3, RTSP and RTMP                                              |
| [pg_get_functiondef](/ext/e/pg_get_functiondef)                     | `1.0`   | Get function's definition                                                                                                                                                                                                                                 |
| [pg_hint_plan](/ext/e/pg_hint_plan)                                 | `1.8.0` | optimizer hints for PostgreSQL                                                                                                                                                                                                                            |
| pg_jieba                                                            | `1.1.1` | a parser for full-text search of Chinese                                                                                                                                                                                                                  |
| [pg_partman](/ext/e/pg_partman)                                     | `5.3.1` | Extension to manage partitioned tables by time or ID                                                                                                                                                                                                      |
| [pg_show_plans](/ext/e/pg_show_plans)                               | `2.1`   | show query plans of all currently running SQL statements                                                                                                                                                                                                  |
| [pg_stat_monitor](/ext/e/pg_stat_monitor)                           | `2.3`   | The pg_stat_monitor is a PostgreSQL Query Performance Monitoring tool, based on PostgreSQL contrib module pg_stat_statements. pg_stat_monitor provides aggregated statistics, client information, plan details including plan, and histogram information. |
| [pg_textsearch](/ext/e/pg_textsearch)                               | `0.1.0` | Full-text search with BM25 ranking                                                                                                                                                                                                                        |
| [pgagent](/ext/e/pgagent)                                           | `4.2`   | A PostgreSQL job scheduler                                                                                                                                                                                                                                |
| [pgaudit](/ext/e/pgaudit)                                           | `18.0`  | provides auditing functionality                                                                                                                                                                                                                           |
| [pgroonga](/ext/e/pgroonga)                                         | `4.0.4` | Super fast and all languages supported full text search index based on Groonga                                                                                                                                                                            |
| [pgroonga_database](/ext/e/pgroonga_database)                       | `4.0.4` | PGroonga database management module                                                                                                                                                                                                                       |
| [pgrouting](/ext/e/pgrouting)                                       | `3.8.0` | pgRouting Extension                                                                                                                                                                                                                                       |
| [plisql](/ext/e/plisql)                                             | `1.0`   | PL/iSQL procedural language                                                                                                                                                                                                                               |
| [plpgsql_check](/ext/e/plpgsql_check)                               | `2.8`   | extended check for plpgsql functions                                                                                                                                                                                                                      |
| [postgis](/ext/e/postgis)                                           | `3.5.4` | PostGIS geometry and geography spatial types and functions                                                                                                                                                                                                |
| [postgis_raster](/ext/e/postgis_raster)                             | `3.5.4` | PostGIS raster types and functions                                                                                                                                                                                                                        |
| [postgis_sfcgal](/ext/e/postgis_sfcgal)                             | `3.5.4` | PostGIS SFCGAL functions                                                                                                                                                                                                                                  |
| [postgis_tiger_geocoder](/ext/e/postgis_tiger_geocoder)             | `3.5.4` | PostGIS tiger geocoder and reverse geocoder                                                                                                                                                                                                               |
| [postgis_topology](/ext/e/postgis_topology)                         | `3.5.4` | PostGIS topology spatial types and functions                                                                                                                                                                                                              |
| [redis_fdw](/ext/e/redis_fdw)                                       | `1.0`   | Foreign data wrapper for querying a Redis server                                                                                                                                                                                                          |
| [system_stats](/ext/e/system_stats)                                 | `3.0`   | EnterpriseDB system statistics for PostgreSQL                                                                                                                                                                                                             |
| [vector](/ext/e/vector)                                             | `0.8.1` | vector data type and ivfflat and hnsw access methods                                                                                                                                                                                                      |
| [zhparser](/ext/e/zhparser)                                         | `2.3`   | a parser for full-text search of Chinese                                                                                                                                                                                                                  |
{.full-width}

请注意，Pigsty 不对使用 IvorySQL 内核承担任何质保责任，使用此内核遇到的任何问题与需求请联系原厂解决。

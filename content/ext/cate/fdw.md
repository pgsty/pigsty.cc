---
title: "FDW - 外部数据"
linkTitle: "FDW"
description: "外部数据源包装器：FDW开发框架 Wrappers，Multicorn，访问外部的 Mongo，MySQL，SQLite，HDFS，MSSQL，Oracle，DB2，……"
weight: 885
icon: fas fa-file-import
---

## 扩展列表

共有 **26** 个扩展，位于 **26** 个扩展包中。

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`wrappers`](/ext/e/wrappers) | [`wrappers`](https://github.com/supabase/wrappers) | `0.5.7` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | Supabase提供的外部数据源包装器捆绑包 |
| [`multicorn`](/ext/e/multicorn) | [`multicorn`](https://github.com/pgsql-io/multicorn2) | `3.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用Python编写自定义的外部数据源包装器 |
| [`odbc_fdw`](/ext/e/odbc_fdw) | [`odbc_fdw`](https://github.com/CartoDB/odbc_fdw) | `0.5.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 访问ODBC可访问的任何外部数据源 |
| [`jdbc_fdw`](/ext/e/jdbc_fdw) | [`jdbc_fdw`](https://github.com/pgspider/jdbc_fdw) | `0.4.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 访问JDBC可访问的任何外部数据源 |
| [`pgspider_ext`](/ext/e/pgspider_ext) | [`pgspider_ext`](https://github.com/pgspider/pgspider_ext) | `1.3.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用多种FDW访问远程数据库服务器 |
| [`mysql_fdw`](/ext/e/mysql_fdw) | [`mysql_fdw`](https://github.com/EnterpriseDB/mysql_fdw) | `2.9.3` | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | MySQL外部数据包装器 |
| [`oracle_fdw`](/ext/e/oracle_fdw) | [`oracle_fdw`](https://github.com/laurenz/oracle_fdw) | `2.8.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 提供对Oracle的外部数据源包装器 |
| [`tds_fdw`](/ext/e/tds_fdw) | [`tds_fdw`](https://github.com/tds-fdw/tds_fdw) | `2.0.5` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | TDS 数据库（Sybase/SQL Server）外部数据包装器 |
| [`db2_fdw`](/ext/e/db2_fdw) | [`db2_fdw`](https://github.com/wolfgangbrandl/db2_fdw) | `18.1.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 提供对DB2的外部数据源包装器 |
| [`sqlite_fdw`](/ext/e/sqlite_fdw) | [`sqlite_fdw`](https://github.com/pgspider/sqlite_fdw) | `2.5.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQLite 外部数据包装器 |
| [`pgbouncer_fdw`](/ext/e/pgbouncer_fdw) | [`pgbouncer_fdw`](https://github.com/CrunchyData/pgbouncer_fdw) | `1.4.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 用SQL查询pgbouncer统计信息，并执行pgbouncer命令 |
| [`etcd_fdw`](/ext/e/etcd_fdw) | [`etcd_fdw`](https://github.com/cybertec-postgresql/etcd_fdw) | `0.0.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | etcd分布式键值存储外部数据包装器 |
| [`informix_fdw`](/ext/e/informix_fdw) | [`informix_fdw`](https://github.com/credativ/informix_fdw) | `0.6.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Informix 外部数据包装器 |
| [`nominatim_fdw`](/ext/e/nominatim_fdw) | [`nominatim_fdw`](https://github.com/jimjonesbr/nominatim_fdw) | `1.2` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Nominatim 地理编码接口的 FDW 扩展 |
| [`mongo_fdw`](/ext/e/mongo_fdw) | [`mongo_fdw`](https://github.com/EnterpriseDB/mongo_fdw) | `5.5.3` | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | MongoDB 外部数据包装器 |
| [`redis_fdw`](/ext/e/redis_fdw) | [`redis_fdw`](https://github.com/pg-redis-fdw/redis_fdw) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 查询外部Redis数据源 |
| [`redis`](/ext/e/redis) | [`pg_redis_pubsub`](https://github.com/brettlaforge/pg_redis_pubsub) | `0.0.1` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 从PG向Redis发送Pub/Sub消息 |
| [`kafka_fdw`](/ext/e/kafka_fdw) | [`kafka_fdw`](https://github.com/adjust/kafka_fdw) | `0.0.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Kafka外部数据源包装器 |
| [`hdfs_fdw`](/ext/e/hdfs_fdw) | [`hdfs_fdw`](https://github.com/EnterpriseDB/hdfs_fdw) | `2.3.3` | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | hdfs 外部数据包装器 |
| [`firebird_fdw`](/ext/e/firebird_fdw) | [`firebird_fdw`](https://github.com/ibarwick/firebird_fdw) | `1.4.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Firebird外部数据源包装器 |
| [`rdf_fdw`](/ext/e/rdf_fdw) | [`rdf_fdw`](https://github.com/jimjonesbr/rdf_fdw) | `2.4.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 通过 SPARQL 端点访问 RDF 三元组存储的 FDW |
| [`aws_s3`](/ext/e/aws_s3) | [`aws_s3`](https://github.com/chimpler/postgres-aws-s3) | `0.0.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 从S3导入导出数据的外部数据源包装器 |
| [`log_fdw`](/ext/e/log_fdw) | [`log_fdw`](https://github.com/aws/postgresql-logfdw) | `1.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 访问PostgreSQL日志文件的FDW |
| [`dblink`](/ext/e/dblink) | [`dblink`](https://www.postgresql.org/docs/current/dblink.html) | `1.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 从数据库内连接到其他 PostgreSQL 数据库 |
| [`file_fdw`](/ext/e/file_fdw) | [`file_fdw`](https://www.postgresql.org/docs/current/file-fdw.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 访问外部文件的外部数据包装器 |
| [`postgres_fdw`](/ext/e/postgres_fdw) | [`postgres_fdw`](https://www.postgresql.org/docs/current/postgres-fdw.html) | `1.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于远程 PostgreSQL 服务器的外部数据包装器 |
{.ext-table}


---------

## wrappers {#wrappers}

[**`wrappers`**](/ext/e/wrappers) - `0.5.7` : Supabase提供的外部数据源包装器捆绑包

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`wrappers`](/ext/e/wrappers) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`wrappers`](https://github.com/supabase/wrappers) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `wrappers_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-wrappers` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## multicorn {#multicorn}

[**`multicorn`**](/ext/e/multicorn) - `3.2` : 用Python编写自定义的外部数据源包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`multicorn`](/ext/e/multicorn) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`multicorn`](https://github.com/pgsql-io/multicorn2) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `multicorn2_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## odbc_fdw {#odbc_fdw}

[**`odbc_fdw`**](/ext/e/odbc_fdw) - `0.5.1` : 访问ODBC可访问的任何外部数据源

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`odbc_fdw`](/ext/e/odbc_fdw) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`odbc_fdw`](https://github.com/CartoDB/odbc_fdw) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `odbc_fdw_$v` | **el10** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## jdbc_fdw {#jdbc_fdw}

[**`jdbc_fdw`**](/ext/e/jdbc_fdw) - `0.4.0` : 访问JDBC可访问的任何外部数据源

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`jdbc_fdw`](/ext/e/jdbc_fdw) | **el8** | {{< pgvers "16,15,14" >}} | - |
| **扩展包** | [`jdbc_fdw`](https://github.com/pgspider/jdbc_fdw) | **el9** | {{< pgvers "16,15,14" >}} | - |
| **RPM** | `jdbc_fdw_$v` | **el10** | - | - |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## pgspider_ext {#pgspider_ext}

[**`pgspider_ext`**](/ext/e/pgspider_ext) - `1.3.0` : 使用多种FDW访问远程数据库服务器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgspider_ext`](/ext/e/pgspider_ext) | **el8** | {{< pgvers "17,16,15" >}} | {{< pgvers "17,16,15" >}} |
| **扩展包** | [`pgspider_ext`](https://github.com/pgspider/pgspider_ext) | **el9** | {{< pgvers "17,16,15" >}} | {{< pgvers "17,16,15" >}} |
| **RPM** | `pgspider_ext_$v` | **el10** | {{< pgvers "17,16,15" >}} | {{< pgvers "17,16,15" >}} |
| **DEB** | `postgresql-$v-pgspider-ext` | **d12** | {{< pgvers "17,16,15" >}} | {{< pgvers "17,16,15" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "17,16,15" >}} | {{< pgvers "17,16,15" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "17,16,15" >}} | {{< pgvers "17,16,15" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "17,16,15" >}} | {{< pgvers "17,16,15" >}} |
{.ext-table .ext-table--cate}


---------

## mysql_fdw {#mysql_fdw}

[**`mysql_fdw`**](/ext/e/mysql_fdw) - `2.9.3` : MySQL外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`mysql_fdw`](/ext/e/mysql_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`mysql_fdw`](https://github.com/EnterpriseDB/mysql_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `mysql_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-mysql-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## oracle_fdw {#oracle_fdw}

[**`oracle_fdw`**](/ext/e/oracle_fdw) - `2.8.0` : 提供对Oracle的外部数据源包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`oracle_fdw`](/ext/e/oracle_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | - |
| **扩展包** | [`oracle_fdw`](https://github.com/laurenz/oracle_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | - |
| **RPM** | `oracle_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | - |
| **DEB** | `postgresql-$v-oracle-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## tds_fdw {#tds_fdw}

[**`tds_fdw`**](/ext/e/tds_fdw) - `2.0.5` : TDS 数据库（Sybase/SQL Server）外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`tds_fdw`](/ext/e/tds_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`tds_fdw`](https://github.com/tds-fdw/tds_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `tds_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-tds-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## db2_fdw {#db2_fdw}

[**`db2_fdw`**](/ext/e/db2_fdw) - `18.1.1` : 提供对DB2的外部数据源包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`db2_fdw`](/ext/e/db2_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | - |
| **扩展包** | [`db2_fdw`](https://github.com/wolfgangbrandl/db2_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | - |
| **RPM** | `db2_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | - |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## sqlite_fdw {#sqlite_fdw}

[**`sqlite_fdw`**](/ext/e/sqlite_fdw) - `2.5.0` : SQLite 外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`sqlite_fdw`](/ext/e/sqlite_fdw) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`sqlite_fdw`](https://github.com/pgspider/sqlite_fdw) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `sqlite_fdw_$v` | **el10** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **DEB** | `postgresql-$v-sqlite-fdw` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgbouncer_fdw {#pgbouncer_fdw}

[**`pgbouncer_fdw`**](/ext/e/pgbouncer_fdw) - `1.4.0` : 用SQL查询pgbouncer统计信息，并执行pgbouncer命令

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgbouncer_fdw`](/ext/e/pgbouncer_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgbouncer_fdw`](https://github.com/CrunchyData/pgbouncer_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgbouncer_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## etcd_fdw {#etcd_fdw}

[**`etcd_fdw`**](/ext/e/etcd_fdw) - `0.0.0` : etcd分布式键值存储外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`etcd_fdw`](/ext/e/etcd_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`etcd_fdw`](https://github.com/cybertec-postgresql/etcd_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `etcd_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-etcd-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## informix_fdw {#informix_fdw}

[**`informix_fdw`**](/ext/e/informix_fdw) - `0.6.3` : Informix 外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`informix_fdw`](/ext/e/informix_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | - |
| **扩展包** | [`informix_fdw`](https://github.com/credativ/informix_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | - |
| **RPM** | `informix_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | - |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## nominatim_fdw {#nominatim_fdw}

[**`nominatim_fdw`**](/ext/e/nominatim_fdw) - `1.2` : Nominatim 地理编码接口的 FDW 扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`nominatim_fdw`](/ext/e/nominatim_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`nominatim_fdw`](https://github.com/jimjonesbr/nominatim_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `nominatim_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-nominatim-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## mongo_fdw {#mongo_fdw}

[**`mongo_fdw`**](/ext/e/mongo_fdw) - `5.5.3` : MongoDB 外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`mongo_fdw`](/ext/e/mongo_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`mongo_fdw`](https://github.com/EnterpriseDB/mongo_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `mongo_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## redis_fdw {#redis_fdw}

[**`redis_fdw`**](/ext/e/redis_fdw) - `1.0` : 查询外部Redis数据源

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`redis_fdw`](/ext/e/redis_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`redis_fdw`](https://github.com/pg-redis-fdw/redis_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `redis_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-redis-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## redis {#redis}

[**`pg_redis_pubsub`**](/ext/e/redis) - `0.0.1` : 从PG向Redis发送Pub/Sub消息

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`redis`](/ext/e/redis) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_redis_pubsub`](https://github.com/brettlaforge/pg_redis_pubsub) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_redis_pubsub_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-redis-pubsub` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## kafka_fdw {#kafka_fdw}

[**`kafka_fdw`**](/ext/e/kafka_fdw) - `0.0.3` : Kafka外部数据源包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`kafka_fdw`](/ext/e/kafka_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`kafka_fdw`](https://github.com/adjust/kafka_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `kafka_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-kafka-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hdfs_fdw {#hdfs_fdw}

[**`hdfs_fdw`**](/ext/e/hdfs_fdw) - `2.3.3` : hdfs 外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hdfs_fdw`](/ext/e/hdfs_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hdfs_fdw`](https://github.com/EnterpriseDB/hdfs_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hdfs_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## firebird_fdw {#firebird_fdw}

[**`firebird_fdw`**](/ext/e/firebird_fdw) - `1.4.1` : Firebird外部数据源包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`firebird_fdw`](/ext/e/firebird_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`firebird_fdw`](https://github.com/ibarwick/firebird_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `firebird_fdw_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-firebird-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## rdf_fdw {#rdf_fdw}

[**`rdf_fdw`**](/ext/e/rdf_fdw) - `2.4.0` : 通过 SPARQL 端点访问 RDF 三元组存储的 FDW

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`rdf_fdw`](/ext/e/rdf_fdw) | **el8** | - | - |
| **扩展包** | [`rdf_fdw`](https://github.com/jimjonesbr/rdf_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `rdf_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-rdf-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## aws_s3 {#aws_s3}

[**`aws_s3`**](/ext/e/aws_s3) - `0.0.1` : 从S3导入导出数据的外部数据源包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`aws_s3`](/ext/e/aws_s3) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`aws_s3`](https://github.com/chimpler/postgres-aws-s3) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `aws_s3_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-aws-s3` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## log_fdw {#log_fdw}

[**`log_fdw`**](/ext/e/log_fdw) - `1.4` : 访问PostgreSQL日志文件的FDW

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`log_fdw`](/ext/e/log_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`log_fdw`](https://github.com/aws/postgresql-logfdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `log_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-log-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## dblink {#dblink}

[**`dblink`**](/ext/e/dblink) - `1.2` : 从数据库内连接到其他 PostgreSQL 数据库

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`dblink`](/ext/e/dblink) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`dblink`](https://www.postgresql.org/docs/current/dblink.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## file_fdw {#file_fdw}

[**`file_fdw`**](/ext/e/file_fdw) - `1.0` : 访问外部文件的外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`file_fdw`](/ext/e/file_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`file_fdw`](https://www.postgresql.org/docs/current/file-fdw.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## postgres_fdw {#postgres_fdw}

[**`postgres_fdw`**](/ext/e/postgres_fdw) - `1.1` : 用于远程 PostgreSQL 服务器的外部数据包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`postgres_fdw`](/ext/e/postgres_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`postgres_fdw`](https://www.postgresql.org/docs/current/postgres-fdw.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


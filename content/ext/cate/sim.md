---
title: "SIM - 兼容模拟"
linkTitle: "SIM"
description: "数据库兼容扩展：仿真其他 DBMS 的行为：MySQL，Memcache，Mongo，Oracle，Babelfish for Microsoft SQL Server……"
weight: 890
icon: fas fa-user-ninja
---

## 扩展列表

共有 **26** 个扩展，位于 **15** 个扩展包中。

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`documentdb`](/ext/e/documentdb) | [`documentdb`](https://github.com/documentdb/documentdb) | `0.109` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 微软DocumentDB的API层 |
| [`documentdb_core`](/ext/e/documentdb_core) | [`documentdb`](https://github.com/documentdb/documentdb) | `0.109` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 微软DocumentDB的核心API层实现 |
| [`documentdb_distributed`](/ext/e/documentdb_distributed) | [`documentdb`](https://github.com/documentdb/documentdb) | `0.109` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | DocumentDB多节点模式的API层 |
| [`documentdb_extended_rum`](/ext/e/documentdb_extended_rum) | [`documentdb`](https://github.com/documentdb/documentdb) | `0.109` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | DocumentDB扩展RUM索引访问方法 |
| [`orafce`](/ext/e/orafce) | [`orafce`](https://github.com/orafce/orafce) | `4.16.5` | <a class="ext-badge ext-badge--license bsd 0clause" href="/ext/license#bsd0clause">BSD 0-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 模拟 Oracle RDBMS 的一部分函数和包的函数和运算符 |
| [`pgtt`](/ext/e/pgtt) | [`pgtt`](https://github.com/darold/pgtt) | `4.4` | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 类似Oracle的全局临时表功能 |
| [`session_variable`](/ext/e/session_variable) | [`session_variable`](https://github.com/splendiddata/session_variable) | `3.4` | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Oracle兼容的会话变量/常量操作函数 |
| [`pg_statement_rollback`](/ext/e/pg_statement_rollback) | [`pg_statement_rollback`](https://github.com/lzlabs/pg_statement_rollback) | `1.5` | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在服务端提供类似Oracle/DB2的语句级回滚能力 |
| [`ivorysql_ora`](/ext/e/ivorysql_ora) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ivorysql_ora) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Oracle 兼容扩展 |
| [`ora_btree_gin`](/ext/e/ora_btree_gin) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ora_btree_gin) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Oracle 数据类型 GIN 索引支持 |
| [`ora_btree_gist`](/ext/e/ora_btree_gist) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ora_btree_gist) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Oracle 数据类型 GiST 索引支持 |
| [`pg_get_functiondef`](/ext/e/pg_get_functiondef) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/pg_get_functiondef) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 获取函数定义 |
| [`plisql`](/ext/e/plisql) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/src/pl/plisql) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/iSQL 过程语言 |
| [`gb18030_2022`](/ext/e/gb18030_2022) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/gb18030_2022) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 支持 GB18030-2022 与 UTF-8 编码转换 |
| [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) | [`pg_dbms_metadata`](https://github.com/HexaCluster/pg_dbms_metadata) | `1.0.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 添加 Oracle DBMS_METADATA 兼容性支持的扩展 |
| [`pg_dbms_lock`](/ext/e/pg_dbms_lock) | [`pg_dbms_lock`](https://github.com/HexaCluster/pg_dbms_lock) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 为PG添加对 Oracle DBMS_LOCK 的完整兼容性支持 |
| [`pg_dbms_job`](/ext/e/pg_dbms_job) | [`pg_dbms_job`](https://github.com/MigOpsRepos/pg_dbms_job) | `1.5` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 添加 Oracle DBMS_JOB 兼容性支持的扩展 |
| [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog) | [`pg_dbms_errlog`](https://github.com/HexaCluster/pg_dbms_errlog) | `2.2` | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 模仿 Oracle DBMS_ERRLOG 模块来记录特定表的DML错误 |
| [`pg_utl_smtp`](/ext/e/pg_utl_smtp) | [`pg_utl_smtp`](https://github.com/hexacluster/pg_utl_smtp) | `1.0.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | Oracle UTL_SMTP 兼容扩展（基于 plperlu） |
| [`babelfishpg_common`](/ext/e/babelfishpg_common) | [`babelfish`](https://babelfishpg.org/) | `5.5.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQL Server 数据类型兼容扩展 |
| [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | [`babelfish`](https://babelfishpg.org/) | `5.5.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQL Server SQL语法兼容性扩展 |
| [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | [`babelfish`](https://babelfishpg.org/) | `1.0.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQL Server TDS线缆协议兼容扩展 |
| [`babelfishpg_money`](/ext/e/babelfishpg_money) | [`babelfish`](https://babelfishpg.org/) | `1.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQL Server 货币数据类型兼容扩展 |
| [`spat`](/ext/e/spat) | [`spat`](https://github.com/Florents-Tselai/spat) | `0.1.0a4` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在PG中嵌入Redis风格的内存数据库 |
| [`pgmemcache`](/ext/e/pgmemcache) | [`pgmemcache`](https://github.com/ohmu/pgmemcache) | `2.3.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 为PG提供memcached兼容接口 |
| [`aux_mysql`](/ext/e/aux_mysql) | [`openhalo`](https://github.com/HaloTech-Co-Ltd/openHalo) | `1.5` | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | MySQL兼容辅助扩展模块 |
{.ext-table}


---------

## documentdb {#documentdb}

[**`documentdb`**](/ext/e/documentdb) - `0.109` : 微软DocumentDB的API层

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`documentdb`](/ext/e/documentdb) | **el8** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **扩展包** | [`documentdb`](https://github.com/documentdb/documentdb) | **el9** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **RPM** | `documentdb_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-documentdb` | **d12** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
{.ext-table .ext-table--cate}


---------

## documentdb_core {#documentdb_core}

[**`documentdb`**](/ext/e/documentdb_core) - `0.109` : 微软DocumentDB的核心API层实现

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`documentdb_core`](/ext/e/documentdb_core) | **el8** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **扩展包** | [`documentdb`](https://github.com/documentdb/documentdb) | **el9** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **RPM** | `documentdb_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-documentdb` | **d12** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
{.ext-table .ext-table--cate}


---------

## documentdb_distributed {#documentdb_distributed}

[**`documentdb`**](/ext/e/documentdb_distributed) - `0.109` : DocumentDB多节点模式的API层

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`documentdb_distributed`](/ext/e/documentdb_distributed) | **el8** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **扩展包** | [`documentdb`](https://github.com/documentdb/documentdb) | **el9** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **RPM** | `documentdb_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-documentdb` | **d12** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
{.ext-table .ext-table--cate}


---------

## documentdb_extended_rum {#documentdb_extended_rum}

[**`documentdb`**](/ext/e/documentdb_extended_rum) - `0.109` : DocumentDB扩展RUM索引访问方法

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`documentdb_extended_rum`](/ext/e/documentdb_extended_rum) | **el8** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **扩展包** | [`documentdb`](https://github.com/documentdb/documentdb) | **el9** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **RPM** | `documentdb_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-documentdb` | **d12** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
{.ext-table .ext-table--cate}


---------

## orafce {#orafce}

[**`orafce`**](/ext/e/orafce) - `4.16.5` : 模拟 Oracle RDBMS 的一部分函数和包的函数和运算符

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`orafce`](/ext/e/orafce) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`orafce`](https://github.com/orafce/orafce) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `orafce_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-orafce` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 0clause" href="/ext/license#bsd0clause">BSD 0-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgtt {#pgtt}

[**`pgtt`**](/ext/e/pgtt) - `4.4` : 类似Oracle的全局临时表功能

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgtt`](/ext/e/pgtt) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgtt`](https://github.com/darold/pgtt) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgtt_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgtt` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## session_variable {#session_variable}

[**`session_variable`**](/ext/e/session_variable) - `3.4` : Oracle兼容的会话变量/常量操作函数

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`session_variable`](/ext/e/session_variable) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`session_variable`](https://github.com/splendiddata/session_variable) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `session_variable_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-session-variable` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_statement_rollback {#pg_statement_rollback}

[**`pg_statement_rollback`**](/ext/e/pg_statement_rollback) - `1.5` : 在服务端提供类似Oracle/DB2的语句级回滚能力

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_statement_rollback`](/ext/e/pg_statement_rollback) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_statement_rollback`](https://github.com/lzlabs/pg_statement_rollback) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_statement_rollback_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-statement-rollback` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## ivorysql_ora {#ivorysql_ora}

[**`ivorysql`**](/ext/e/ivorysql_ora) - `1.0` : Oracle 兼容扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`ivorysql_ora`](/ext/e/ivorysql_ora) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ivorysql_ora) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `ivorysql5` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `ivorysql-5` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
{.ext-table .ext-table--cate}


---------

## ora_btree_gin {#ora_btree_gin}

[**`ivorysql`**](/ext/e/ora_btree_gin) - `1.0` : Oracle 数据类型 GIN 索引支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`ora_btree_gin`](/ext/e/ora_btree_gin) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ora_btree_gin) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `ivorysql5` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `ivorysql-5` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
{.ext-table .ext-table--cate}


---------

## ora_btree_gist {#ora_btree_gist}

[**`ivorysql`**](/ext/e/ora_btree_gist) - `1.0` : Oracle 数据类型 GiST 索引支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`ora_btree_gist`](/ext/e/ora_btree_gist) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ora_btree_gist) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `ivorysql5` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `ivorysql-5` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
{.ext-table .ext-table--cate}


---------

## pg_get_functiondef {#pg_get_functiondef}

[**`ivorysql`**](/ext/e/pg_get_functiondef) - `1.0` : 获取函数定义

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_get_functiondef`](/ext/e/pg_get_functiondef) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/pg_get_functiondef) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `ivorysql5` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `ivorysql-5` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
{.ext-table .ext-table--cate}


---------

## plisql {#plisql}

[**`ivorysql`**](/ext/e/plisql) - `1.0` : PL/iSQL 过程语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plisql`](/ext/e/plisql) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/src/pl/plisql) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `ivorysql5` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `ivorysql-5` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
{.ext-table .ext-table--cate}


---------

## gb18030_2022 {#gb18030_2022}

[**`ivorysql`**](/ext/e/gb18030_2022) - `1.0` : 支持 GB18030-2022 与 UTF-8 编码转换

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`gb18030_2022`](/ext/e/gb18030_2022) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/gb18030_2022) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `ivorysql5` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `ivorysql-5` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
{.ext-table .ext-table--cate}


---------

## pg_dbms_metadata {#pg_dbms_metadata}

[**`pg_dbms_metadata`**](/ext/e/pg_dbms_metadata) - `1.0.0` : 添加 Oracle DBMS_METADATA 兼容性支持的扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,14" >}} |
| **扩展包** | [`pg_dbms_metadata`](https://github.com/HexaCluster/pg_dbms_metadata) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_dbms_metadata_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_dbms_lock {#pg_dbms_lock}

[**`pg_dbms_lock`**](/ext/e/pg_dbms_lock) - `1.0` : 为PG添加对 Oracle DBMS_LOCK 的完整兼容性支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_dbms_lock`](/ext/e/pg_dbms_lock) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_dbms_lock`](https://github.com/HexaCluster/pg_dbms_lock) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_dbms_lock_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_dbms_job {#pg_dbms_job}

[**`pg_dbms_job`**](/ext/e/pg_dbms_job) - `1.5` : 添加 Oracle DBMS_JOB 兼容性支持的扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_dbms_job`](/ext/e/pg_dbms_job) | **el8** | - | - |
| **扩展包** | [`pg_dbms_job`](https://github.com/MigOpsRepos/pg_dbms_job) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_dbms_job_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_dbms_errlog {#pg_dbms_errlog}

[**`pg_dbms_errlog`**](/ext/e/pg_dbms_errlog) - `2.2` : 模仿 Oracle DBMS_ERRLOG 模块来记录特定表的DML错误

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_dbms_errlog`](https://github.com/HexaCluster/pg_dbms_errlog) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_dbms_errlog_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_utl_smtp {#pg_utl_smtp}

[**`pg_utl_smtp`**](/ext/e/pg_utl_smtp) - `1.0.0` : Oracle UTL_SMTP 兼容扩展（基于 plperlu）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_utl_smtp`](/ext/e/pg_utl_smtp) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_utl_smtp`](https://github.com/hexacluster/pg_utl_smtp) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_utl_smtp_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-utl-smtp` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## babelfishpg_common {#babelfishpg_common}

[**`babelfish`**](/ext/e/babelfishpg_common) - `5.5.0` : SQL Server 数据类型兼容扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`babelfishpg_common`](/ext/e/babelfishpg_common) | **el8** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **扩展包** | [`babelfish`](https://babelfishpg.org/) | **el9** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **RPM** | `babelfish_$v` | **el10** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **DEB** | `babelfishpg-$v-babelfish` | **d12** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
{.ext-table .ext-table--cate}


---------

## babelfishpg_tsql {#babelfishpg_tsql}

[**`babelfish`**](/ext/e/babelfishpg_tsql) - `5.5.0` : SQL Server SQL语法兼容性扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | **el8** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **扩展包** | [`babelfish`](https://babelfishpg.org/) | **el9** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **RPM** | `babelfish_$v` | **el10** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **DEB** | `babelfishpg-$v-babelfish` | **d12** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
{.ext-table .ext-table--cate}


---------

## babelfishpg_tds {#babelfishpg_tds}

[**`babelfish`**](/ext/e/babelfishpg_tds) - `1.0.0` : SQL Server TDS线缆协议兼容扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | **el8** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **扩展包** | [`babelfish`](https://babelfishpg.org/) | **el9** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **RPM** | `babelfish_$v` | **el10** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **DEB** | `babelfishpg-$v-babelfish` | **d12** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
{.ext-table .ext-table--cate}


---------

## babelfishpg_money {#babelfishpg_money}

[**`babelfish`**](/ext/e/babelfishpg_money) - `1.1.0` : SQL Server 货币数据类型兼容扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`babelfishpg_money`](/ext/e/babelfishpg_money) | **el8** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **扩展包** | [`babelfish`](https://babelfishpg.org/) | **el9** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **RPM** | `babelfish_$v` | **el10** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **DEB** | `babelfishpg-$v-babelfish` | **d12** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
{.ext-table .ext-table--cate}


---------

## spat {#spat}

[**`spat`**](/ext/e/spat) - `0.1.0a4` : 在PG中嵌入Redis风格的内存数据库

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`spat`](/ext/e/spat) | **el8** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **扩展包** | [`spat`](https://github.com/Florents-Tselai/spat) | **el9** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **RPM** | `spat_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-spat` | **d12** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "17" >}} | {{< pgvers "17" >}} |
{.ext-table .ext-table--cate}


---------

## pgmemcache {#pgmemcache}

[**`pgmemcache`**](/ext/e/pgmemcache) - `2.3.0` : 为PG提供memcached兼容接口

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgmemcache`](/ext/e/pgmemcache) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16" >}} |
| **扩展包** | [`pgmemcache`](https://github.com/ohmu/pgmemcache) | **el9** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pgmemcache_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgmemcache` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## aux_mysql {#aux_mysql}

[**`openhalo`**](/ext/e/aux_mysql) - `1.5` : MySQL兼容辅助扩展模块

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`aux_mysql`](/ext/e/aux_mysql) | **el8** | {{< pgvers "14" >}} | {{< pgvers "14" >}} |
| **扩展包** | [`openhalo`](https://github.com/HaloTech-Co-Ltd/openHalo) | **el9** | {{< pgvers "14" >}} | {{< pgvers "14" >}} |
| **RPM** | `openhalodb_$v` | **el10** | {{< pgvers "14" >}} | {{< pgvers "14" >}} |
| **DEB** | `openhalodb-$v` | **d12** | {{< pgvers "14" >}} | {{< pgvers "14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "14" >}} | {{< pgvers "14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "14" >}} | {{< pgvers "14" >}} |
| **协议** | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | **u24** | {{< pgvers "14" >}} | {{< pgvers "14" >}} |
{.ext-table .ext-table--cate}


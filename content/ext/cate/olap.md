---
title: "OLAP - 数据分析"
linkTitle: "OLAP"
description: "分析能力扩展：列式存储，DuckDB与外部数据源包装器，Parquet S3，数据冷热分级存储，分布式计算，透明分片，GPU加速"
weight: 824
icon: fas fa-chart-line
---

## 扩展列表

共有 **14** 个扩展，位于 **13** 个扩展包中。

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`citus`](/ext/e/citus) | [`citus`](https://github.com/citusdata/citus) | `14.0.0` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Citus 分布式数据库 |
| [`citus_columnar`](/ext/e/citus_columnar) | [`citus`](https://github.com/citusdata/citus) | `14.0.0` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Citus 列式存储引擎 |
| [`columnar`](/ext/e/columnar) | [`hydra`](https://github.com/hydradatabase/hydra) | `1.1.2` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 开源列式存储扩展 |
| [`pg_analytics`](/ext/e/pg_analytics) | [`pg_analytics`](https://github.com/paradedb/pg_analytics) | `0.3.7` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 由 DuckDB 驱动的数据分析引擎 |
| [`pg_duckdb`](/ext/e/pg_duckdb) | [`pg_duckdb`](https://github.com/duckdb/pg_duckdb) | `1.1.1` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | 在PostgreSQL中的嵌入式DuckDB扩展 |
| [`pg_mooncake`](/ext/e/pg_mooncake) | [`pg_mooncake`](https://github.com/Mooncake-Labs/pg_mooncake) | `0.2.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | PostgreSQL列式存储表 |
| [`pg_clickhouse`](/ext/e/pg_clickhouse) | [`pg_clickhouse`](https://github.com/ClickHouse/pg_clickhouse) | `0.1.10` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | 从PostgreSQL中查询ClickHouse的接口 |
| [`duckdb_fdw`](/ext/e/duckdb_fdw) | [`duckdb_fdw`](https://github.com/alitrack/duckdb_fdw) | `1.1.2` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | DuckDB 外部数据源包装器 |
| [`pg_parquet`](/ext/e/pg_parquet) | [`pg_parquet`](https://github.com/CrunchyData/pg_parquet/) | `0.5.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 在PostgreSQL与本地/S3中的Parquet文件复制数据 |
| [`pg_fkpart`](/ext/e/pg_fkpart) | [`pg_fkpart`](https://github.com/lemoineat/pg_fkpart) | `1.7.0` | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 按外键实用程序进行表分区的扩展 |
| [`pg_partman`](/ext/e/pg_partman) | [`pg_partman`](https://github.com/pgpartman/pg_partman) | `5.4.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于按时间或 ID 管理分区表的扩展 |
| [`plproxy`](/ext/e/plproxy) | [`plproxy`](https://github.com/plproxy/plproxy) | `2.11.0` | <a class="ext-badge ext-badge--license bsd 0clause" href="/ext/license#bsd0clause">BSD 0-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 作为过程语言实现的数据库分区 |
| [`pg_strom`](/ext/e/pg_strom) | [`pg_strom`](https://github.com/heterodb/pg-strom) | `6.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用GPU与NVMe加速大数据处理 |
| [`tablefunc`](/ext/e/tablefunc) | [`tablefunc`](https://www.postgresql.org/docs/current/tablefunc.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 交叉表函数 |
{.ext-table}


---------

## citus {#citus}

[**`citus`**](/ext/e/citus) - `14.0.0` : Citus 分布式数据库

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`citus`](/ext/e/citus) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`citus`](https://github.com/citusdata/citus) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `citus_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-citus` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## citus_columnar {#citus_columnar}

[**`citus`**](/ext/e/citus_columnar) - `14.0.0` : Citus 列式存储引擎

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`citus_columnar`](/ext/e/citus_columnar) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`citus`](https://github.com/citusdata/citus) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `citus_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-citus` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## columnar {#columnar}

[**`hydra`**](/ext/e/columnar) - `1.1.2` : 开源列式存储扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`columnar`](/ext/e/columnar) | **el8** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **扩展包** | [`hydra`](https://github.com/hydradatabase/hydra) | **el9** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **RPM** | `hydra_$v` | **el10** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **DEB** | `postgresql-$v-hydra` | **d12** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_analytics {#pg_analytics}

[**`pg_analytics`**](/ext/e/pg_analytics) - `0.3.7` : 由 DuckDB 驱动的数据分析引擎

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_analytics`](/ext/e/pg_analytics) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`pg_analytics`](https://github.com/paradedb/pg_analytics) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `pg_analytics_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-pg-analytics` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_duckdb {#pg_duckdb}

[**`pg_duckdb`**](/ext/e/pg_duckdb) - `1.1.1` : 在PostgreSQL中的嵌入式DuckDB扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_duckdb`](/ext/e/pg_duckdb) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_duckdb`](https://github.com/duckdb/pg_duckdb) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_duckdb_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-duckdb` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_mooncake {#pg_mooncake}

[**`pg_mooncake`**](/ext/e/pg_mooncake) - `0.2.0` : PostgreSQL列式存储表

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_mooncake`](/ext/e/pg_mooncake) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_mooncake`](https://github.com/Mooncake-Labs/pg_mooncake) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_mooncake_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-mooncake` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_clickhouse {#pg_clickhouse}

[**`pg_clickhouse`**](/ext/e/pg_clickhouse) - `0.1.10` : 从PostgreSQL中查询ClickHouse的接口

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_clickhouse`](/ext/e/pg_clickhouse) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_clickhouse`](https://github.com/ClickHouse/pg_clickhouse) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_clickhouse_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-clickhouse` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## duckdb_fdw {#duckdb_fdw}

[**`duckdb_fdw`**](/ext/e/duckdb_fdw) - `1.1.2` : DuckDB 外部数据源包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`duckdb_fdw`](/ext/e/duckdb_fdw) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **扩展包** | [`duckdb_fdw`](https://github.com/alitrack/duckdb_fdw) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **RPM** | `duckdb_fdw_$v` | **el10** | - | - |
| **DEB** | `postgresql-$v-duckdb-fdw` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_parquet {#pg_parquet}

[**`pg_parquet`**](/ext/e/pg_parquet) - `0.5.1` : 在PostgreSQL与本地/S3中的Parquet文件复制数据

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_parquet`](/ext/e/pg_parquet) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_parquet`](https://github.com/CrunchyData/pg_parquet/) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_parquet_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-parquet` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_fkpart {#pg_fkpart}

[**`pg_fkpart`**](/ext/e/pg_fkpart) - `1.7.0` : 按外键实用程序进行表分区的扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_fkpart`](/ext/e/pg_fkpart) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_fkpart`](https://github.com/lemoineat/pg_fkpart) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_fkpart_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-fkpart` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_partman {#pg_partman}

[**`pg_partman`**](/ext/e/pg_partman) - `5.4.3` : 用于按时间或 ID 管理分区表的扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_partman`](/ext/e/pg_partman) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_partman`](https://github.com/pgpartman/pg_partman) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_partman_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-partman` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plproxy {#plproxy}

[**`plproxy`**](/ext/e/plproxy) - `2.11.0` : 作为过程语言实现的数据库分区

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plproxy`](/ext/e/plproxy) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plproxy`](https://github.com/plproxy/plproxy) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plproxy_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plproxy` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 0clause" href="/ext/license#bsd0clause">BSD 0-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_strom {#pg_strom}

[**`pg_strom`**](/ext/e/pg_strom) - `6.1` : 使用GPU与NVMe加速大数据处理

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_strom`](/ext/e/pg_strom) | **el8** | {{< pgvers "18,17,16,15,14" >}} | - |
| **扩展包** | [`pg_strom`](https://github.com/heterodb/pg-strom) | **el9** | {{< pgvers "18,17,16,15,14" >}} | - |
| **RPM** | `pg_strom_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | - |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
{.ext-table .ext-table--cate}


---------

## tablefunc {#tablefunc}

[**`tablefunc`**](/ext/e/tablefunc) - `1.0` : 交叉表函数

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`tablefunc`](/ext/e/tablefunc) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`tablefunc`](https://www.postgresql.org/docs/current/tablefunc.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


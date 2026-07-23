---
title: "OLAP - 数据分析"
linkTitle: "OLAP"
description: "分析能力扩展：列式存储，DuckDB与外部数据源包装器，Parquet S3，数据冷热分级存储，分布式计算，透明分片，GPU加速"
weight: 824
icon: fas fa-chart-line
---

## 扩展列表

共有 **25** 个扩展，位于 **17** 个扩展包中。

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`citus`](/ext/e/citus) | [`citus`](https://github.com/citusdata/citus) | `14.1.0` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Citus 分布式数据库 |
| [`citus_columnar`](/ext/e/citus_columnar) | [`citus`](https://github.com/citusdata/citus) | `14.1.0` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Citus 列式存储引擎 |
| [`columnar`](/ext/e/columnar) | [`hydra`](https://github.com/hydradatabase/hydra) | `1.1.2` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 开源列式存储扩展 |
| [`pg_duckdb`](/ext/e/pg_duckdb) | [`pg_duckdb`](https://github.com/duckdb/pg_duckdb) | `1.1.1` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | 在PostgreSQL中的嵌入式DuckDB扩展 |
| [`pg_mooncake`](/ext/e/pg_mooncake) | [`pg_mooncake`](https://github.com/Mooncake-Labs/pg_mooncake) | `0.2.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | PostgreSQL列式存储表 |
| [`storage_engine`](/ext/e/storage_engine) | [`storage_engine`](https://github.com/saulojb/storage_engine) | `2.4.0` | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 带向量化执行的 colcompress 与 rowcompress 表访问方法 |
| [`pg_clickhouse`](/ext/e/pg_clickhouse) | [`pg_clickhouse`](https://github.com/ClickHouse/pg_clickhouse) | `0.3.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | 从PostgreSQL中查询ClickHouse的接口 |
| [`duckdb_fdw`](/ext/e/duckdb_fdw) | [`duckdb_fdw`](https://github.com/alitrack/duckdb_fdw) | `1.4.3` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | DuckDB 外部数据源包装器 |
| [`pg_parquet`](/ext/e/pg_parquet) | [`pg_parquet`](https://github.com/CrunchyData/pg_parquet/) | `0.5.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 在PostgreSQL与本地/S3中的Parquet文件复制数据 |
| [`pg_ducklake`](/ext/e/pg_ducklake) | [`pg_ducklake`](https://github.com/relytcloud/pg_ducklake) | `1.0.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | 基于 DuckDB 与 Parquet 的 DuckLake 湖仓一体扩展 |
| [`pg_fkpart`](/ext/e/pg_fkpart) | [`pg_fkpart`](https://github.com/lemoineat/pg_fkpart) | `1.7.0` | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 按外键实用程序进行表分区的扩展 |
| [`pg_partman`](/ext/e/pg_partman) | [`pg_partman`](https://github.com/pgpartman/pg_partman) | `5.4.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于按时间或 ID 管理分区表的扩展 |
| [`plproxy`](/ext/e/plproxy) | [`plproxy`](https://github.com/plproxy/plproxy) | `2.12.0` | <a class="ext-badge ext-badge--license 0bsd" href="/ext/license#0bsd">0BSD</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 作为过程语言实现的数据库分区 |
| [`pg_strom`](/ext/e/pg_strom) | [`pg_strom`](https://github.com/heterodb/pg-strom) | `6.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用GPU与NVMe加速大数据处理 |
| [`pg_orca`](/ext/e/pg_orca) | [`pg_orca`](https://github.com/quantumiodb/pgorca) | `1.0.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | PostgreSQL ORCA 查询优化器扩展 |
| [`pg_sorted_heap`](/ext/e/pg_sorted_heap) | [`pg_sorted_heap`](https://github.com/skuznetsov/pg_sorted_heap) | `0.14.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 带 zone map 剪枝和内置向量搜索的有序堆表访问方法 |
| [`pg_lake`](/ext/e/pg_lake) | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake) | `3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Snowflake 开源的 PostgreSQL 数据湖与 Iceberg 集成扩展 |
| [`pg_extension_base`](/ext/e/pg_extension_base) | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_extension_base) | `3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Snowflake 提供的 PostgreSQL 扩展开发基础设施，支持库预加载、扩展生命周期后台工作进程和依赖管理 |
| [`pg_extension_updater`](/ext/e/pg_extension_updater) | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_extension_updater) | `3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在数据库启动时自动执行 ALTER EXTENSION UPDATE 的扩展更新器 |
| [`pg_map`](/ext/e/pg_map) | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_map) | `3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | pg_lake 内置并依赖的 PostgreSQL Map 数据类型。 |
| [`pg_lake_engine`](/ext/e/pg_lake_engine) | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_lake_engine) | `3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于数据湖查询的查询引擎 |
| [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_lake_iceberg) | `3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PostgreSQL 中的 Iceberg 实现 |
| [`pg_lake_table`](/ext/e/pg_lake_table) | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_lake_table) | `3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 数据湖表和 Iceberg 表 |
| [`pg_lake_copy`](/ext/e/pg_lake_copy) | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_lake_copy) | `3.4` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 PostgreSQL 与对象存储数据湖文件之间执行 COPY 的扩展 |
| [`tablefunc`](/ext/e/tablefunc) | [`tablefunc`](https://www.postgresql.org/docs/current/tablefunc.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 交叉表函数 |
{.ext-table}


---------

## citus {#citus}

[**`citus`**](/ext/e/citus) - `14.1.0` : Citus 分布式数据库

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`citus`](/ext/e/citus) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`citus`](https://github.com/citusdata/citus) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `citus_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-citus` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## citus_columnar {#citus_columnar}

[**`citus`**](/ext/e/citus_columnar) - `14.1.0` : Citus 列式存储引擎

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`citus_columnar`](/ext/e/citus_columnar) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`citus`](https://github.com/citusdata/citus) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `citus_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-citus` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
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
| | | **u26** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
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
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
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
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## storage_engine {#storage_engine}

[**`storage_engine`**](/ext/e/storage_engine) - `2.4.0` : 带向量化执行的 colcompress 与 rowcompress 表访问方法

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`storage_engine`](/ext/e/storage_engine) | **el8** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **扩展包** | [`storage_engine`](https://github.com/saulojb/storage_engine) | **el9** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **RPM** | `storage_engine_$v` | **el10** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15" >}} |
| **DEB** | `postgresql-$v-storage-engine` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_clickhouse {#pg_clickhouse}

[**`pg_clickhouse`**](/ext/e/pg_clickhouse) - `0.3.2` : 从PostgreSQL中查询ClickHouse的接口

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_clickhouse`](/ext/e/pg_clickhouse) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_clickhouse`](https://github.com/ClickHouse/pg_clickhouse) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_clickhouse_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-clickhouse` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## duckdb_fdw {#duckdb_fdw}

[**`duckdb_fdw`**](/ext/e/duckdb_fdw) - `1.4.3` : DuckDB 外部数据源包装器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`duckdb_fdw`](/ext/e/duckdb_fdw) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`duckdb_fdw`](https://github.com/alitrack/duckdb_fdw) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `duckdb_fdw_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-duckdb-fdw` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
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
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_ducklake {#pg_ducklake}

[**`pg_ducklake`**](/ext/e/pg_ducklake) - `1.0.0` : 基于 DuckDB 与 Parquet 的 DuckLake 湖仓一体扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_ducklake`](/ext/e/pg_ducklake) | **el8** | - | - |
| **扩展包** | [`pg_ducklake`](https://github.com/relytcloud/pg_ducklake) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_ducklake_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-ducklake` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
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
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
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
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plproxy {#plproxy}

[**`plproxy`**](/ext/e/plproxy) - `2.12.0` : 作为过程语言实现的数据库分区

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plproxy`](/ext/e/plproxy) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plproxy`](https://github.com/plproxy/plproxy) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plproxy_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plproxy` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license 0bsd" href="/ext/license#0bsd">0BSD</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_strom {#pg_strom}

[**`pg_strom`**](/ext/e/pg_strom) - `6.1` : 使用GPU与NVMe加速大数据处理

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_strom`](/ext/e/pg_strom) | **el8** | {{< pgvers "18,17,16,15,14" >}} | - |
| **扩展包** | [`pg_strom`](https://github.com/heterodb/pg-strom) | **el9** | {{< pgvers "18,17,16,15,14" >}} | - |
| **RPM** | `pg_strom_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | - |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_orca {#pg_orca}

[**`pg_orca`**](/ext/e/pg_orca) - `1.0.0` : PostgreSQL ORCA 查询优化器扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_orca`](/ext/e/pg_orca) | **el8** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **扩展包** | [`pg_orca`](https://github.com/quantumiodb/pgorca) | **el9** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **RPM** | `pg_orca_$v` | **el10** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **DEB** | `postgresql-$v-pg-orca` | **d12** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
| | | **u26** | {{< pgvers "18" >}} | {{< pgvers "18" >}} |
{.ext-table .ext-table--cate}


---------

## pg_sorted_heap {#pg_sorted_heap}

[**`pg_sorted_heap`**](/ext/e/pg_sorted_heap) - `0.14.0` : 带 zone map 剪枝和内置向量搜索的有序堆表访问方法

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_sorted_heap`](/ext/e/pg_sorted_heap) | **el8** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **扩展包** | [`pg_sorted_heap`](https://github.com/skuznetsov/pg_sorted_heap) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_sorted_heap_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-sorted-heap` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
{.ext-table .ext-table--cate}


---------

## pg_lake {#pg_lake}

[**`pg_lake`**](/ext/e/pg_lake) - `3.4` : Snowflake 开源的 PostgreSQL 数据湖与 Iceberg 集成扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_lake`](/ext/e/pg_lake) | **el8** | - | - |
| **扩展包** | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_lake_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-lake` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
{.ext-table .ext-table--cate}


---------

## pg_extension_base {#pg_extension_base}

[**`pg_lake`**](/ext/e/pg_extension_base) - `3.4` : Snowflake 提供的 PostgreSQL 扩展开发基础设施，支持库预加载、扩展生命周期后台工作进程和依赖管理

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_extension_base`](/ext/e/pg_extension_base) | **el8** | - | - |
| **扩展包** | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_extension_base) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_lake_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-lake` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
{.ext-table .ext-table--cate}


---------

## pg_extension_updater {#pg_extension_updater}

[**`pg_lake`**](/ext/e/pg_extension_updater) - `3.4` : 在数据库启动时自动执行 ALTER EXTENSION UPDATE 的扩展更新器

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_extension_updater`](/ext/e/pg_extension_updater) | **el8** | - | - |
| **扩展包** | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_extension_updater) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_lake_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-lake` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
{.ext-table .ext-table--cate}


---------

## pg_map {#pg_map}

[**`pg_lake`**](/ext/e/pg_map) - `3.4` : pg_lake 内置并依赖的 PostgreSQL Map 数据类型。

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_map`](/ext/e/pg_map) | **el8** | - | - |
| **扩展包** | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_map) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_lake_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-lake` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
{.ext-table .ext-table--cate}


---------

## pg_lake_engine {#pg_lake_engine}

[**`pg_lake`**](/ext/e/pg_lake_engine) - `3.4` : 用于数据湖查询的查询引擎

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_lake_engine`](/ext/e/pg_lake_engine) | **el8** | - | - |
| **扩展包** | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_lake_engine) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_lake_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-lake` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
{.ext-table .ext-table--cate}


---------

## pg_lake_iceberg {#pg_lake_iceberg}

[**`pg_lake`**](/ext/e/pg_lake_iceberg) - `3.4` : PostgreSQL 中的 Iceberg 实现

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_lake_iceberg`](/ext/e/pg_lake_iceberg) | **el8** | - | - |
| **扩展包** | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_lake_iceberg) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_lake_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-lake` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
{.ext-table .ext-table--cate}


---------

## pg_lake_table {#pg_lake_table}

[**`pg_lake`**](/ext/e/pg_lake_table) - `3.4` : 数据湖表和 Iceberg 表

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_lake_table`](/ext/e/pg_lake_table) | **el8** | - | - |
| **扩展包** | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_lake_table) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_lake_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-lake` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
{.ext-table .ext-table--cate}


---------

## pg_lake_copy {#pg_lake_copy}

[**`pg_lake`**](/ext/e/pg_lake_copy) - `3.4` : 在 PostgreSQL 与对象存储数据湖文件之间执行 COPY 的扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_lake_copy`](/ext/e/pg_lake_copy) | **el8** | - | - |
| **扩展包** | [`pg_lake`](https://github.com/Snowflake-Labs/pg_lake/tree/main/pg_lake_copy) | **el9** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **RPM** | `pg_lake_$v` | **el10** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **DEB** | `postgresql-$v-pg-lake` | **d12** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
| | | **u26** | {{< pgvers "18,17,16" >}} | {{< pgvers "18,17,16" >}} |
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
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---
title: "多扩展包"
linkTitle: "多扩展包"
description: "包含多个扩展的 PostgreSQL 扩展包"
weight: 40
---

以下 **20** 个扩展包中包含多个扩展，共计 **97** 个扩展。

在安装这些包时，您将同时获得包中的所有扩展。主扩展用粗体标出。

### postgis

[`postgis`](/ext/e/postgis) 扩展包共有 **7** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 1500 | [**`postgis`**](/ext/e/postgis) | `3.6.2` | `--s-d--` | - | PostGIS 几何和地理空间扩展 |
| 1501 | [`postgis_topology`](/ext/e/postgis_topology) | `3.6.2` | `--s-d--` | `topology` | PostGIS 拓扑空间类型和函数 |
| 1502 | [`postgis_raster`](/ext/e/postgis_raster) | `3.6.2` | `--s-d--` | - | PostGIS 光栅类型和函数 |
| 1503 | [`postgis_sfcgal`](/ext/e/postgis_sfcgal) | `3.6.2` | `--s-d-r` | - | PostGIS SFCGAL 函数 |
| 1504 | [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) | `3.6.2` | `--s-dt-` | `tiger` | PostGIS tiger 地理编码器和反向地理编码器 |
| 1505 | [`address_standardizer`](/ext/e/address_standardizer) | `3.6.2` | `--s-d-r` | - | 地址标准化函数。 |
| 1506 | [`address_standardizer_data_us`](/ext/e/address_standardizer_data_us) | `3.6.2` | `--s-d-r` | - | 地址标准化函数：美国数据集示例 |
{.ext-table}

### pointcloud

[`pointcloud`](/ext/e/pointcloud) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 1520 | [**`pointcloud`**](/ext/e/pointcloud) | `1.2.5` | `--s-d--` | - | 提供激光雷达点云数据类型支持 |
| 1521 | [`pointcloud_postgis`](/ext/e/pointcloud_postgis) | `1.2.5` | `--s-dt-` | - | 将激光雷达点云与PostGIS几何类型相集成 |
{.ext-table}

### pg_h3

[`pg_h3`](/ext/e/h3) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 1530 | [**`h3`**](/ext/e/h3) | `4.2.3` | `--s-d-r` | - | H3六边形层级索引支持 |
| 1531 | [`h3_postgis`](/ext/e/h3_postgis) | `4.2.3` | `--s-d-r` | - | H3与PostGIS集成的扩展插件 |
{.ext-table}

### mobilitydb

[`mobilitydb`](/ext/e/mobilitydb) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 1650 | [**`mobilitydb`**](/ext/e/mobilitydb) | `1.3.0` | `--s-d-r` | - | MobilityDB地理空间投影数据管理分析平台 |
| 1651 | [`mobilitydb_datagen`](/ext/e/mobilitydb_datagen) | `1.3.0` | `----d-r` | - | MobilityDB随机数据生成函数 |
{.ext-table}

### pgroonga

[`pgroonga`](/ext/e/pgroonga) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 2110 | [**`pgroonga`**](/ext/e/pgroonga) | `4.0.4` | `--s-dtr` | - | 使用Groonga，面向所有语言的高速全文检索平台 |
| 2111 | [`pgroonga_database`](/ext/e/pgroonga_database) | `4.0.4` | `--s-dtr` | - | PGGroonga 数据库管理模块 |
{.ext-table}

### citus

[`citus`](/ext/e/citus) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 2400 | [**`citus`**](/ext/e/citus) | `14.0.0` | `--sLd--` | `pg_catalog` | Citus 分布式数据库 |
| 2401 | [`citus_columnar`](/ext/e/citus_columnar) | `14.0.0` | `--s-d--` | `pg_catalog` | Citus 列式存储引擎 |
{.ext-table}

### omnigres

[`omnigres`](/ext/e/omni) 扩展包共有 **37** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 2940 | [**`omni`**](/ext/e/omni) | `0.2.14` | `--sLd--` | `omni` | PostgreSQL即平台，Omnigres主扩展与加载器 |
| 2941 | [`omni_auth`](/ext/e/omni_auth) | `0.1.3` | `----d--` | `omni_auth` | Omnigres 基础会话认证管理模块 |
| 2942 | [`omni_aws`](/ext/e/omni_aws) | `0.1.2` | `----dt-` | `omni_aws` | Omnigres AWS S3 API封装 |
| 2943 | [`omni_cloudevents`](/ext/e/omni_cloudevents) | `0.1.0` | `----dt-` | `omni_cloudevents` | Omnigres CloudEvents 支持 |
| 2944 | [`omni_containers`](/ext/e/omni_containers) | `0.2.0` | `--s-d--` | `omni_containers` | Omnigres Docker容器管理模块 |
| 2945 | [`omni_credentials`](/ext/e/omni_credentials) | `0.2.0` | `----d--` | `omni_credentials` | Omnigres 应用密钥管理模块 |
| 2948 | [`omni_email`](/ext/e/omni_email) | `0.1.0` | `----d--` | `omni_email` | Omnigres Email 框架 |
| 2949 | [`omni_http`](/ext/e/omni_http) | `0.1.0` | `----d--` | `omni_http` | Omnigres 基本HTTP类型 |
| 2950 | [`omni_httpc`](/ext/e/omni_httpc) | `0.1.10` | `--s-d--` | `omni_httpc` | Omnigres HTTP客户端 |
| 2951 | [`omni_httpd`](/ext/e/omni_httpd) | `0.4.11` | `--s-d--` | `omni_httpd` | Omnigres HTTP服务器 |
| 2952 | [`omni_id`](/ext/e/omni_id) | `0.4.3` | `--s-d-r` | - | Omnigres ID身份数据类型 |
| 2953 | [`omni_json`](/ext/e/omni_json) | `0.1.1` | `----dt-` | `omni_json` | Omnigres JSON工具箱 |
| 2954 | [`omni_kube`](/ext/e/omni_kube) | `0.4.2` | `--s-d--` | `omni_kube` | Omnigres Kubernetes集成模块 |
| 2955 | [`omni_ledger`](/ext/e/omni_ledger) | `0.1.3` | `--s-d--` | `omni_ledger` | Omnigres 金融账本模块 |
| 2956 | [`omni_manifest`](/ext/e/omni_manifest) | `0.1.2` | `----d--` | `omni_manifest` | Omnigres 包管理清单模块 |
| 2957 | [`omni_mimetypes`](/ext/e/omni_mimetypes) | `0.1.0` | `----d--` | `omni_mimetypes` | Omnigres MIME数据类型 |
| 2958 | [`omni_os`](/ext/e/omni_os) | `0.1.1` | `--s-d--` | `omni_os` | Omnigres 操作系统集成模块 |
| 2959 | [`omni_polyfill`](/ext/e/omni_polyfill) | `0.2.2` | `--s-d--` | `omni_polyfill` | Omnigres Postgres多态API |
| 2960 | [`omni_python`](/ext/e/omni_python) | `0.1.1` | `--s-d--` | `omni_python` | Omnigres 第一类Python支持模块 |
| 2961 | [`omni_regex`](/ext/e/omni_regex) | `0.1.0` | `--s-d-r` | - | Omnigres PCRE兼容正则表达式模块 |
| 2962 | [`omni_rest`](/ext/e/omni_rest) | `0.1.1` | `----d--` | `omni_rest` | Omnigres REST API 工具包 |
| 2963 | [`omni_schema`](/ext/e/omni_schema) | `0.3.0` | `----d--` | `omni_schema` | Omnigres 高级模式管理组件 |
| 2964 | [`omni_seq`](/ext/e/omni_seq) | `0.1.1` | `--s-d--` | `omni_seq` | Omnigres 分布式整型序列号 |
| 2965 | [`omni_service`](/ext/e/omni_service) | `0.1.0` | `----d--` | `omni_service` | Omnigres 服务管理器 |
| 2966 | [`omni_session`](/ext/e/omni_session) | `0.2.0` | `----d--` | `omni_session` | Omnigres 会话管理器 |
| 2968 | [`omni_sql`](/ext/e/omni_sql) | `0.5.3` | `--s-d--` | `omni_sql` | Omnigres SQL编程组件 |
| 2969 | [`omni_sqlite`](/ext/e/omni_sqlite) | `0.2.2` | `--s-d--` | `omni_sqlite` | Omnigres 嵌入的SQLite支持 |
| 2970 | [`omni_test`](/ext/e/omni_test) | `0.4.0` | `----d--` | `omni_test` | Omnigres 测试框架 |
| 2971 | [`omni_txn`](/ext/e/omni_txn) | `0.5.0` | `--s-d--` | `omni_txn` | Omnigres 事务管理器模块 |
| 2972 | [`omni_types`](/ext/e/omni_types) | `0.3.6` | `--s-d--` | `omni_types` | Omnigres 高级数据类型模块 |
| 2973 | [`omni_var`](/ext/e/omni_var) | `0.3.0` | `--s-d--` | `omni_var` | Omnigres 局部变量模块 |
| 2974 | [`omni_vfs`](/ext/e/omni_vfs) | `0.2.2` | `--s-d--` | `omni_vfs` | Omnigres 虚拟文件系统 |
| 2975 | [`omni_vfs_types_v1`](/ext/e/omni_vfs_types_v1) | `0.1.0` | `----d--` | `omni_vfs_types_v1` | Omnigres 虚拟文件系统（v1） |
| 2976 | [`omni_web`](/ext/e/omni_web) | `0.3.0` | `--s-d--` | `omni_web` | Omnigres Web工具箱 |
| 2977 | [`omni_worker`](/ext/e/omni_worker) | `0.2.1` | `--s-d--` | `omni_worker` | Omnigres 通用Worker池 |
| 2978 | [`omni_xml`](/ext/e/omni_xml) | `0.1.2` | `--s-d--` | `omni_xml` | Omnigres XML工具包 |
| 2979 | [`omni_yaml`](/ext/e/omni_yaml) | `0.1.0` | `--s-d--` | `omni_yaml` | Omnigres YAML工具包 |
{.ext-table}

### pllua

[`pllua`](/ext/e/pllua) 扩展包共有 **4** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 3020 | [**`pllua`**](/ext/e/pllua) | `2.0.12` | `--s-d--` | `pg_catalog` | Lua 程序语言 |
| 3021 | [`hstore_pllua`](/ext/e/hstore_pllua) | `2.0.12` | `--s-d-r` | - | Lua 程序语言的Hstore适配扩展 |
| 3030 | [`plluau`](/ext/e/plluau) | `2.0.12` | `--s-d--` | `pg_catalog` | Lua 程序语言（不受信任的） |
| 3031 | [`hstore_plluau`](/ext/e/hstore_plluau) | `2.0.12` | `--s-d-r` | `pg_catalog` | Lua 程序语言的Hstore适配扩展（不受信任的） |
{.ext-table}

### pltcl

[`pltcl`](/ext/e/pltcl) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 3240 | [**`pltcl`**](/ext/e/pltcl) | `1.0` | `c-s-dt-` | `pg_catalog` | PL/TCL 存储过程语言 |
| 3250 | [`pltclu`](/ext/e/pltclu) | `1.0` | `c---d--` | `pg_catalog` | PL/TCL 存储过程语言（未受信/高权限） |
{.ext-table}

### plperl

[`plperl`](/ext/e/plperl) 扩展包共有 **4** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 3260 | [**`plperl`**](/ext/e/plperl) | `1.0` | `c-s-dt-` | `pg_catalog` | PL/Perl 存储过程语言 |
| 3261 | [`bool_plperl`](/ext/e/bool_plperl) | `1.0` | `c-s-dt-` | - | 在 bool 和 plperl 之间转换 |
| 3262 | [`hstore_plperl`](/ext/e/hstore_plperl) | `1.0` | `c-s-d--` | - | 在 hstore 和 plperl 之间转换适配类型 |
| 3263 | [`jsonb_plperl`](/ext/e/jsonb_plperl) | `1.0` | `c---dt-` | - | 在 jsonb 和 plperl 之间转换 |
{.ext-table}

### plperlu

[`plperlu`](/ext/e/plperlu) 扩展包共有 **4** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 3270 | [**`plperlu`**](/ext/e/plperlu) | `1.0` | `c-s-d--` | `pg_catalog` | PL/PerlU 存储过程语言（未受信/高权限） |
| 3271 | [`bool_plperlu`](/ext/e/bool_plperlu) | `1.0` | `c---d--` | - | 在 bool 和 plperlu 之间转换 |
| 3272 | [`jsonb_plperlu`](/ext/e/jsonb_plperlu) | `1.0` | `c---d--` | - | 在 jsonb 和 plperlu 之间转换 |
| 3273 | [`hstore_plperlu`](/ext/e/hstore_plperlu) | `1.0` | `c---d--` | - | 在 hstore 和 plperlu 之间转换适配类型 |
{.ext-table}

### plpython3u

[`plpython3u`](/ext/e/plpython3u) 扩展包共有 **4** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 3290 | [**`plpython3u`**](/ext/e/plpython3u) | `1.0` | `c-s-d--` | `pg_catalog` | PL/Python3 存储过程语言（未受信/高权限） |
| 3291 | [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) | `1.0` | `c---d-r` | - | 在 jsonb 和 plpython3u 之间转换 |
| 3292 | [`ltree_plpython3u`](/ext/e/ltree_plpython3u) | `1.0` | `c-s-d-r` | - | 在 ltree 和 plpython3u 之间转换 |
| 3293 | [`hstore_plpython3u`](/ext/e/hstore_plpython3u) | `1.0` | `c---d-r` | - | 在 hstore 和 plpython3u 之间转换 |
{.ext-table}

### pg_xenophile

[`pg_xenophile`](/ext/e/pg_xenophile) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 3610 | [**`pg_xenophile`**](/ext/e/pg_xenophile) | `0.8.3` | `----d--` | `xeno` | PostgreSQL i8n与l10n工具包 |
| 3611 | [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) | `0.8.3` | `----d-r` | - | PostgreSQL l10n 工具包 |
{.ext-table}

### pg_readme

[`pg_readme`](/ext/e/pg_readme) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 4300 | [**`pg_readme`**](/ext/e/pg_readme) | `0.7.0` | `----d-r` | - | 为模式与扩展生成Markdown文档 |
| 4301 | [`pg_readme_test_extension`](/ext/e/pg_readme_test_extension) | `0.7.0` | `----d-r` | - | 为模式与扩展生成Markdown文档 |
{.ext-table}

### pgpool

[`pgpool`](/ext/e/pgpool_adm) 扩展包共有 **3** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 5900 | [**`pgpool_adm`**](/ext/e/pgpool_adm) | `4.7.1` | `----d--` | - | PGPool 管理函数 |
| 5910 | [`pgpool_recovery`](/ext/e/pgpool_recovery) | `4.7.1` | `----d--` | - | PGPool辅助扩展，从v4.3提供的恢复函数 |
| 5920 | [`pgpool_regclass`](/ext/e/pgpool_regclass) | `4.7.1` | `----d--` | - | PGPool辅助扩展，RegClass替代 |
{.ext-table}

### pgnodemx

[`pgnodemx`](/ext/e/pgnodemx) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 6440 | [**`pgnodemx`**](/ext/e/pgnodemx) | `1.7` | `--sLd-r` | - | 使用SQL查询获取操作系统指标 |
| 6450 | [`pg_proctab`](/ext/e/pg_proctab) | `1.7` | `--s-d-r` | - | 通过SQL接口访问操作系统进程表 |
{.ext-table}

### documentdb

[`documentdb`](/ext/e/documentdb) 扩展包共有 **4** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 9000 | [**`documentdb`**](/ext/e/documentdb) | `0.109` | `--sLd--` | - | 微软DocumentDB的API层 |
| 9010 | [`documentdb_core`](/ext/e/documentdb_core) | `0.109` | `--sLd--` | - | 微软DocumentDB的核心API层实现 |
| 9020 | [`documentdb_distributed`](/ext/e/documentdb_distributed) | `0.109` | `--sLd--` | - | DocumentDB多节点模式的API层 |
| 9030 | [`documentdb_extended_rum`](/ext/e/documentdb_extended_rum) | `0.109` | `--sLd-r` | - | DocumentDB扩展RUM索引访问方法 |
{.ext-table}

### ivorysql

[`ivorysql`](/ext/e/ivorysql_ora) 扩展包共有 **6** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 9140 | [**`ivorysql_ora`**](/ext/e/ivorysql_ora) | `1.0` | `--s-d--` | `sys` | Oracle 兼容扩展 |
| 9150 | [`ora_btree_gin`](/ext/e/ora_btree_gin) | `1.0` | `--s-dt-` | `sys` | Oracle 数据类型 GIN 索引支持 |
| 9160 | [`ora_btree_gist`](/ext/e/ora_btree_gist) | `1.0` | `--s-dt-` | `sys` | Oracle 数据类型 GiST 索引支持 |
| 9170 | [`pg_get_functiondef`](/ext/e/pg_get_functiondef) | `1.0` | `--s-dt-` | - | 获取函数定义 |
| 9180 | [`plisql`](/ext/e/plisql) | `1.0` | `--s-dt-` | `pg_catalog` | PL/iSQL 过程语言 |
| 9190 | [`gb18030_2022`](/ext/e/gb18030_2022) | `1.0` | `--s-dt-` | `pg_catalog` | 支持 GB18030-2022 与 UTF-8 编码转换 |
{.ext-table}

### babelfish

[`babelfish`](/ext/e/babelfishpg_common) 扩展包共有 **4** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 9300 | [**`babelfishpg_common`**](/ext/e/babelfishpg_common) | `5.5.0` | `--s-d-r` | - | SQL Server 数据类型兼容扩展 |
| 9310 | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | `5.5.0` | `--s-d-r` | - | SQL Server SQL语法兼容性扩展 |
| 9320 | [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | `1.0.0` | `--sLd-r` | - | SQL Server TDS线缆协议兼容扩展 |
| 9330 | [`babelfishpg_money`](/ext/e/babelfishpg_money) | `1.1.0` | `--s-dt-` | - | SQL Server 货币数据类型兼容扩展 |
{.ext-table}

### pglogical

[`pglogical`](/ext/e/pglogical) 扩展包共有 **2** 个扩展：

| **ID** | **扩展名** | **版本** | **属性** | **模式** | **描述** |
|:------:|:-----------|:--------:|:--------:|:---------|:---------|
| 9500 | [**`pglogical`**](/ext/e/pglogical) | `2.4.6` | `--sLd--` | `pglogical` | PostgreSQL逻辑复制：三方扩展实现 |
| 9501 | [`pglogical_origin`](/ext/e/pglogical_origin) | `2.4.6` | `--s-d--` | `pglogical_origin` | 用于从 Postgres 9.4 升级时的兼容性虚拟扩展 |
{.ext-table}


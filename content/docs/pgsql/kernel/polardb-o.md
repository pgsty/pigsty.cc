---
title: PolarDB Oracle
weight: 2107
description: 使用阿里云商业版本的 PolarDB for Oracle 内核（闭源，PG14，仅在特殊企业版定制中可用）
icon: fas fa-paw
module: [PGSQL]
categories: [概念]
---


Pigsty 允许使用 PolarDB 创建带有 “国产化信创资质” 的 PolarDB for Oracle 集群！

根据 【[安全可靠测评结果公告（2023年第1号）](http://www.itsec.gov.cn/aqkkcp/cpgg/202312/t20231226_162074.html)】，附表三、集中式数据库。PolarDB v2.0 属于自主可控，安全可靠的国产信创数据库。

PolarDB for Oracle 是基于 PolarDB for PostgreSQL 进行二次开发的 Oracle 兼容版本，两者共用同一套内核，通过 `--compatibility-mode` 参数进行区分。 

我们与阿里云内核团队合作，提供基于 PolarDB v2.0 内核与 Pigsty v3.0 RDS 的完整数据库解决方案，请联系销售咨询，或在阿里云市场自行采购。

PolarDB for Oracle 内核目前仅在 EL 系统中可用。

![](/img/pigsty/polar.jpg)

--------

## 扩展

目前 PolarDB 2.0 (Oracle兼容) 内核自带了以下 **188** 个扩展插件：

| name                           | default_version | comment                                                                                                                    |
|--------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------|
| cube                           | 1.5             | data type for multidimensional cubes                                                                                       |
| ip4r                           | 2.4             | NULL                                                                                                                       |
| adminpack                      | 2.1             | administrative functions for PostgreSQL                                                                                    |
| dict_xsyn                      | 1.0             | text search dictionary template for extended synonym processing                                                            |
| amcheck                        | 1.4             | functions for verifying relation integrity                                                                                 |
| autoinc                        | 1.0             | functions for autoincrementing fields                                                                                      |
| hstore                         | 1.8             | data type for storing sets of (key, value) pairs                                                                           |
| bloom                          | 1.0             | bloom access method - signature file based index                                                                           |
| earthdistance                  | 1.1             | calculate great-circle distances on the surface of the Earth                                                               |
| hstore_plperl                  | 1.0             | transform between hstore and plperl                                                                                        |
| bool_plperl                    | 1.0             | transform between bool and plperl                                                                                          |
| file_fdw                       | 1.0             | foreign-data wrapper for flat file access                                                                                  |
| bool_plperlu                   | 1.0             | transform between bool and plperlu                                                                                         |
| fuzzystrmatch                  | 1.1             | determine similarities and distance between strings                                                                        |
| hstore_plperlu                 | 1.0             | transform between hstore and plperlu                                                                                       |
| btree_gin                      | 1.3             | support for indexing common datatypes in GIN                                                                               |
| hstore_plpython2u              | 1.0             | transform between hstore and plpython2u                                                                                    |
| btree_gist                     | 1.6             | support for indexing common datatypes in GiST                                                                              |
| hll                            | 2.17            | type for storing hyperloglog data                                                                                          |
| hstore_plpython3u              | 1.0             | transform between hstore and plpython3u                                                                                    |
| citext                         | 1.6             | data type for case-insensitive character strings                                                                           |
| hstore_plpythonu               | 1.0             | transform between hstore and plpythonu                                                                                     |
| hypopg                         | 1.3.1           | Hypothetical indexes for PostgreSQL                                                                                        |
| insert_username                | 1.0             | functions for tracking who changed a table                                                                                 |
| dblink                         | 1.2             | connect to other PostgreSQL databases from within a database                                                               |
| decoderbufs                    | 0.1.0           | Logical decoding plugin that delivers WAL stream changes using a Protocol Buffer format                                    |
| intagg                         | 1.1             | integer aggregator and enumerator (obsolete)                                                                               |
| dict_int                       | 1.0             | text search dictionary template for integers                                                                               |
| intarray                       | 1.5             | functions, operators, and index support for 1-D arrays of integers                                                         |
| isn                            | 1.2             | data types for international product numbering standards                                                                   |
| jsonb_plperl                   | 1.0             | transform between jsonb and plperl                                                                                         |
| jsonb_plperlu                  | 1.0             | transform between jsonb and plperlu                                                                                        |
| jsonb_plpython2u               | 1.0             | transform between jsonb and plpython2u                                                                                     |
| jsonb_plpython3u               | 1.0             | transform between jsonb and plpython3u                                                                                     |
| jsonb_plpythonu                | 1.0             | transform between jsonb and plpythonu                                                                                      |
| lo                             | 1.1             | Large Object maintenance                                                                                                   |
| log_fdw                        | 1.0             | foreign-data wrapper for csvlog                                                                                            |
| ltree                          | 1.2             | data type for hierarchical tree-like structures                                                                            |
| ltree_plpython2u               | 1.0             | transform between ltree and plpython2u                                                                                     |
| ltree_plpython3u               | 1.0             | transform between ltree and plpython3u                                                                                     |
| ltree_plpythonu                | 1.0             | transform between ltree and plpythonu                                                                                      |
| moddatetime                    | 1.0             | functions for tracking last modification time                                                                              |
| old_snapshot                   | 1.0             | utilities in support of old_snapshot_threshold                                                                             |
| oracle_fdw                     | 1.2             | foreign data wrapper for Oracle access                                                                                     |
| oss_fdw                        | 1.1             | foreign-data wrapper for OSS access                                                                                        |
| pageinspect                    | 2.1             | inspect the contents of database pages at a low level                                                                      |
| pase                           | 0.0.1           | ant ai similarity search                                                                                                   |
| pg_bigm                        | 1.2             | text similarity measurement and index searching based on bigrams                                                           |
| pg_freespacemap                | 1.2             | examine the free space map (FSM)                                                                                           |
| pg_hint_plan                   | 1.4             | controls execution plan with hinting phrases in comment of special form                                                    |
| pg_buffercache                 | 1.5             | examine the shared buffer cache                                                                                            |
| pg_prewarm                     | 1.2             | prewarm relation data                                                                                                      |
| pg_repack                      | 1.4.8-1         | Reorganize tables in PostgreSQL databases with minimal locks                                                               |
| pg_sphere                      | 1.0             | spherical objects with useful functions, operators and index support                                                       |
| pg_cron                        | 1.5             | Job scheduler for PostgreSQL                                                                                               |
| pg_jieba                       | 1.1.0           | a parser for full-text search of Chinese                                                                                   |
| pg_stat_kcache                 | 2.2.1           | Kernel statistics gathering                                                                                                |
| pg_stat_statements             | 1.9             | track planning and execution statistics of all SQL statements executed                                                     |
| pg_surgery                     | 1.0             | extension to perform surgery on a damaged relation                                                                         |
| pg_trgm                        | 1.6             | text similarity measurement and index searching based on trigrams                                                          |
| pg_visibility                  | 1.2             | examine the visibility map (VM) and page-level visibility info                                                             |
| pg_wait_sampling               | 1.1             | sampling based statistics of wait events                                                                                   |
| pgaudit                        | 1.6.2           | provides auditing functionality                                                                                            |
| pgcrypto                       | 1.3             | cryptographic functions                                                                                                    |
| pgrowlocks                     | 1.2             | show row-level locking information                                                                                         |
| pgstattuple                    | 1.5             | show tuple-level statistics                                                                                                |
| pgtap                          | 1.2.0           | Unit testing for PostgreSQL                                                                                                |
| pldbgapi                       | 1.1             | server-side support for debugging PL/pgSQL functions                                                                       |
| plperl                         | 1.0             | PL/Perl procedural language                                                                                                |
| plperlu                        | 1.0             | PL/PerlU untrusted procedural language                                                                                     |
| plpgsql                        | 1.0             | PL/pgSQL procedural language                                                                                               |
| plpython2u                     | 1.0             | PL/Python2U untrusted procedural language                                                                                  |
| plpythonu                      | 1.0             | PL/PythonU untrusted procedural language                                                                                   |
| plsql                          | 1.0             | Oracle compatible PL/SQL procedural language                                                                               |
| pltcl                          | 1.0             | PL/Tcl procedural language                                                                                                 |
| pltclu                         | 1.0             | PL/TclU untrusted procedural language                                                                                      |
| polar_bfile                    | 1.0             | The BFILE data type enables access to binary file LOBs that are stored in file systems outside Database                    |
| polar_bpe                      | 1.0             | polar_bpe                                                                                                                  |
| polar_builtin_cast             | 1.1             | Internal extension for builtin casts                                                                                       |
| polar_builtin_funcs            | 2.0             | implement polar builtin functions                                                                                          |
| polar_builtin_type             | 1.5             | polar_builtin_type for PolarDB                                                                                             |
| polar_builtin_view             | 1.5             | polar_builtin_view                                                                                                         |
| polar_catalog                  | 1.2             | polardb pg extend catalog                                                                                                  |
| polar_channel                  | 1.0             | polar_channel                                                                                                              |
| polar_constraint               | 1.0             | polar_constraint                                                                                                           |
| polar_csn                      | 1.0             | polar_csn                                                                                                                  |
| polar_dba_views                | 1.0             | polar_dba_views                                                                                                            |
| polar_dbms_alert               | 1.2             | implement polar_dbms_alert - supports asynchronous notification of database events.                                        |
| polar_dbms_application_info    | 1.0             | implement polar_dbms_application_info - record names of executing modules or transactions in the database.                 |
| polar_dbms_pipe                | 1.1             | implements polar_dbms_pipe - package lets two or more sessions in the same instance communicate.                           |
| polar_dbms_aq                  | 1.2             | implement dbms_aq - provides an interface to Advanced Queuing.                                                             |
| polar_dbms_lob                 | 1.3             | implement dbms_lob - provides subprograms to operate on BLOBs, CLOBs, and NCLOBs.                                          |
| polar_dbms_output              | 1.2             | implement polar_dbms_output - enables you to send messages from stored procedures.                                         |
| polar_dbms_lock                | 1.0             | implement polar_dbms_lock - provides an interface to Oracle Lock Management services.                                      |
| polar_dbms_aqadm               | 1.3             | polar_dbms_aqadm - procedures to manage Advanced Queuing configuration and administration information.                     |
| polar_dbms_assert              | 1.0             | implement polar_dbms_assert - provide an interface to validate properties of the input value.                              |
| polar_dbms_metadata            | 1.0             | implement polar_dbms_metadata - provides a way for you to retrieve metadata from the database dictionary.                  |
| polar_dbms_random              | 1.0             | implement polar_dbms_random - a built-in random number generator, not intended for cryptography                            |
| polar_dbms_crypto              | 1.1             | implement dbms_crypto - provides an interface to encrypt and decrypt stored data.                                          |
| polar_dbms_redact              | 1.0             | implement polar_dbms_redact - provides an interface to mask data from queries by an application.                           |
| polar_dbms_debug               | 1.1             | server-side support for debugging PL/SQL functions                                                                         |
| polar_dbms_job                 | 1.0             | polar_dbms_job                                                                                                             |
| polar_dbms_mview               | 1.1             | implement polar_dbms_mview - enables to refresh materialized views.                                                        |
| polar_dbms_job_preload         | 1.0             | polar_dbms_job_preload                                                                                                     |
| polar_dbms_obfuscation_toolkit | 1.1             | implement polar_dbms_obfuscation_toolkit - enables an application to get data md5.                                         |
| polar_dbms_rls                 | 1.1             | implement polar_dbms_rls - a fine-grained access control administrative built-in package                                   |
| polar_multi_toast_utils        | 1.0             | polar_multi_toast_utils                                                                                                    |
| polar_dbms_session             | 1.2             | implement polar_dbms_session - support to set preferences and security levels.                                             |
| polar_odciconst                | 1.0             | implement ODCIConst - Provide some built-in constants in Oracle.                                                           |
| polar_dbms_sql                 | 1.2             | implement polar_dbms_sql - provides an interface to execute dynamic SQL.                                                   |
| polar_osfs_toolkit             | 1.0             | osfs library tools and functions extension                                                                                 |
| polar_dbms_stats               | 14.0            | stabilize plans by fixing statistics                                                                                       |
| polar_monitor                  | 1.5             | monitor functions for PolarDB                                                                                              |
| polar_osfs_utils               | 1.0             | osfs library utils extension                                                                                               |
| polar_dbms_utility             | 1.3             | implement polar_dbms_utility - provides various utility subprograms.                                                       |
| polar_parameter_check          | 1.0             | kernel extension for parameter validation                                                                                  |
| polar_dbms_xmldom              | 1.0             | implement dbms_xmldom and dbms_xmlparser - support standard DOM interface and xml parser object                            |
| polar_parameter_manager        | 1.1             | Extension to select parameters for manger.                                                                                 |
| polar_faults                   | 1.0.0           | simulate some database faults for end user or testing system.                                                              |
| polar_monitor_preload          | 1.1             | examine the polardb information                                                                                            |
| polar_proxy_utils              | 1.0             | Extension to provide operations about proxy.                                                                               |
| polar_feature_utils            | 1.2             | PolarDB feature utilization                                                                                                |
| polar_global_awr               | 1.0             | PolarDB Global AWR Report                                                                                                  |
| polar_publication              | 1.0             | support polardb pg logical replication                                                                                     |
| polar_global_cache             | 1.0             | polar_global_cache                                                                                                         |
| polar_px                       | 1.0             | Parallel Execution extension                                                                                               |
| polar_serverless               | 1.0             | polar serverless extension                                                                                                 |
| polar_resource_manager         | 1.0             | a background process that forcibly frees user session process memory                                                       |
| polar_sys_context              | 1.1             | implement polar_sys_context - returns the value of parameter associated with the context namespace at the current instant. |
| polar_gpc                      | 1.3             | polar_gpc                                                                                                                  |
| polar_tde_utils                | 1.0             | Internal extension for TDE                                                                                                 |
| polar_gtt                      | 1.1             | polar_gtt                                                                                                                  |
| polar_utl_encode               | 1.2             | implement polar_utl_encode - provides functions that encode RAW data into a standard encoded format                        |
| polar_htap                     | 1.1             | extension for PolarDB HTAP                                                                                                 |
| polar_htap_db                  | 1.0             | extension for PolarDB HTAP database level operation                                                                        |
| polar_io_stat                  | 1.0             | polar io stat in multi dimension                                                                                           |
| polar_utl_file                 | 1.0             | implement utl_file - support PL/SQL programs can read and write operating system text files                                |
| polar_ivm                      | 1.0             | polar_ivm                                                                                                                  |
| polar_sql_mapping              | 1.2             | Record error sqls and mapping them to correct one                                                                          |
| polar_stat_sql                 | 1.0             | Kernel statistics gathering, and sql plan nodes information gathering                                                      |
| tds_fdw                        | 2.0.2           | Foreign data wrapper for querying a TDS database (Sybase or Microsoft SQL Server)                                          |
| xml2                           | 1.1             | XPath querying and XSLT                                                                                                    |
| polar_upgrade_catalogs         | 1.1             | Upgrade catalogs for old version instance                                                                                  |
| polar_utl_i18n                 | 1.1             | polar_utl_i18n                                                                                                             |
| polar_utl_raw                  | 1.0             | implement utl_raw - provides SQL functions for manipulating RAW datatypes.                                                 |
| timescaledb                    | 2.9.2           | Enables scalable inserts and complex queries for time-series data                                                          |
| polar_vfs                      | 1.0             | polar virtual file system for different storage                                                                            |
| polar_worker                   | 1.0             | polar_worker                                                                                                               |
| postgres_fdw                   | 1.1             | foreign-data wrapper for remote PostgreSQL servers                                                                         |
| refint                         | 1.0             | functions for implementing referential integrity (obsolete)                                                                |
| roaringbitmap                  | 0.5             | support for Roaring Bitmaps                                                                                                |
| tsm_system_time                | 1.0             | TABLESAMPLE method which accepts time in milliseconds as a limit                                                           |
| vector                         | 0.5.0           | vector data type and ivfflat and hnsw access methods                                                                       |
| rum                            | 1.3             | RUM index access method                                                                                                    |
| unaccent                       | 1.1             | text search dictionary that removes accents                                                                                |
| seg                            | 1.4             | data type for representing line segments or floating-point intervals                                                       |
| sequential_uuids               | 1.0.2           | generator of sequential UUIDs                                                                                              |
| uuid-ossp                      | 1.1             | generate universally unique identifiers (UUIDs)                                                                            |
| smlar                          | 1.0             | compute similary of any one-dimensional arrays                                                                             |
| varbitx                        | 1.1             | varbit functions pack                                                                                                      |
| sslinfo                        | 1.2             | information about SSL certificates                                                                                         |
| tablefunc                      | 1.0             | functions that manipulate whole tables, including crosstab                                                                 |
| tcn                            | 1.0             | Triggered change notifications                                                                                             |
| zhparser                       | 1.0             | a parser for full-text search of Chinese                                                                                   |
| address_standardizer           | 3.3.2           | Ganos PostGIS address standardizer                                                                                         |
| address_standardizer_data_us   | 3.3.2           | Ganos PostGIS  address standardizer data us                                                                                |
| ganos_fdw                      | 6.0             | Ganos Spatial FDW extension for POLARDB                                                                                    |
| ganos_geometry                 | 6.0             | Ganos geometry lite extension for POLARDB                                                                                  |
| ganos_geometry_pyramid         | 6.0             | Ganos Geometry Pyramid extension for POLARDB                                                                               |
| ganos_geometry_sfcgal          | 6.0             | Ganos geometry lite sfcgal extension for POLARDB                                                                           |
| ganos_geomgrid                 | 6.0             | Ganos geometry grid extension for POLARDB                                                                                  |
| ganos_importer                 | 6.0             | Ganos Spatial importer extension for POLARDB                                                                               |
| ganos_networking               | 6.0             | Ganos networking                                                                                                           |
| ganos_pointcloud               | 6.0             | Ganos pointcloud extension For POLARDB                                                                                     |
| ganos_pointcloud_geometry      | 6.0             | Ganos_pointcloud LIDAR data and ganos_geometry data for POLARDB                                                            |
| ganos_raster                   | 6.0             | Ganos raster extension for POLARDB                                                                                         |
| ganos_scene                    | 6.0             | Ganos scene extension for POLARDB                                                                                          |
| ganos_sfmesh                   | 6.0             | Ganos surface mesh extension for POLARDB                                                                                   |
| ganos_spatialref               | 6.0             | Ganos spatial reference extension for POLARDB                                                                              |
| ganos_trajectory               | 6.0             | Ganos trajectory extension for POLARDB                                                                                     |
| ganos_vomesh                   | 6.0             | Ganos volumn mesh extension for POLARDB                                                                                    |
| postgis_tiger_geocoder         | 3.3.2           | Ganos PostGIS tiger geocoder                                                                                               |
| postgis_topology               | 3.3.2           | Ganos PostGIS topology                                                                                                     |
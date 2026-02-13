---
title: 扩展列表
weight: 465
description: 本文列出了 Pigsty 支持的 PostgreSQL 扩展插件，以及这些插件在不同系统下的支持情况。
icon: fa-brands fa-usb
module: [PGSQL]
categories: [参考]
hide: True
---

Pigsty 扩展完整信息请见 [**PGEXT.CLOUD**](https://pgext.cloud/zh/list/)。

当前共有 **451** 个可用 PostgreSQL 扩展。

### TIME

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [timescaledb](https://pgext.cloud/zh/e/timescaledb/) | `2.25.0` | `TIME` | 时序数据库扩展插件 |
| [timescaledb_toolkit](https://pgext.cloud/zh/e/timescaledb_toolkit/) | `1.22.0` | `TIME` | 超表分析查询，时间序列流式处理，以及其他SQL工具 |
| [timeseries](https://pgext.cloud/zh/e/timeseries/) | `0.2.0` | `TIME` | 时序数据API封装 |
| [periods](https://pgext.cloud/zh/e/periods/) | `1.2.3` | `TIME` | 为 PERIODs 和 SYSTEM VERSIONING 提供标准 SQL 功能 |
| [temporal_tables](https://pgext.cloud/zh/e/temporal_tables/) | `1.2.2` | `TIME` | 时态表功能支持 |
| [emaj](https://pgext.cloud/zh/e/emaj/) | `4.7.1` | `TIME` | 让数据库的子集具有细粒度日志和时间旅行功能 |
| [table_version](https://pgext.cloud/zh/e/table_version/) | `1.11.1` | `TIME` | PostgreSQL 版本控制表扩展 |
| [pg_cron](https://pgext.cloud/zh/e/pg_cron/) | `1.6.7` | `TIME` | 定时任务调度器 |
| [pg_task](https://pgext.cloud/zh/e/pg_task/) | `1.0.0` | `TIME` | 在特定时间点在后台执行SQL命令 |
| [pg_later](https://pgext.cloud/zh/e/pg_later/) | `0.4.0` | `TIME` | 执行查询，并在稍后异步获取查询结果 |
| [pg_background](https://pgext.cloud/zh/e/pg_background/) | `1.6` | `TIME` | 在后台运行 SQL 查询 |

### GIS

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [postgis](https://pgext.cloud/zh/e/postgis/) | `3.6.2` | `GIS` | PostGIS 几何和地理空间扩展 |
| [postgis_topology](https://pgext.cloud/zh/e/postgis_topology/) | `3.6.2` | `GIS` | PostGIS 拓扑空间类型和函数 |
| [postgis_raster](https://pgext.cloud/zh/e/postgis_raster/) | `3.6.2` | `GIS` | PostGIS 光栅类型和函数 |
| [postgis_sfcgal](https://pgext.cloud/zh/e/postgis_sfcgal/) | `3.6.2` | `GIS` | PostGIS SFCGAL 函数 |
| [postgis_tiger_geocoder](https://pgext.cloud/zh/e/postgis_tiger_geocoder/) | `3.6.2` | `GIS` | PostGIS tiger 地理编码器和反向地理编码器 |
| [address_standardizer](https://pgext.cloud/zh/e/address_standardizer/) | `3.6.2` | `GIS` | 地址标准化函数。 |
| [address_standardizer_data_us](https://pgext.cloud/zh/e/address_standardizer_data_us/) | `3.6.2` | `GIS` | 地址标准化函数：美国数据集示例 |
| [pgrouting](https://pgext.cloud/zh/e/pgrouting/) | `4.0.1` | `GIS` | 提供寻路能力 |
| [pointcloud](https://pgext.cloud/zh/e/pointcloud/) | `1.2.5` | `GIS` | 提供激光雷达点云数据类型支持 |
| [pointcloud_postgis](https://pgext.cloud/zh/e/pointcloud_postgis/) | `1.2.5` | `GIS` | 将激光雷达点云与PostGIS几何类型相集成 |
| [h3](https://pgext.cloud/zh/e/h3/) | `4.2.3` | `GIS` | H3六边形层级索引支持 |
| [h3_postgis](https://pgext.cloud/zh/e/h3_postgis/) | `4.2.3` | `GIS` | H3与PostGIS集成的扩展插件 |
| [q3c](https://pgext.cloud/zh/e/q3c/) | `2.0.1` | `GIS` | Q3C天空索引插件 |
| [ogr_fdw](https://pgext.cloud/zh/e/ogr_fdw/) | `1.1.7` | `GIS` | GIS 数据外部数据源包装器 |
| [geoip](https://pgext.cloud/zh/e/geoip/) | `0.3.0` | `GIS` | IP 地理位置扩展（围绕 MaxMind GeoLite 数据集的包装器） |
| [pg_polyline](https://pgext.cloud/zh/e/pg_polyline/) | `0.0.1` | `GIS` | Google快速Polyline编码解码扩展 |
| [pg_geohash](https://pgext.cloud/zh/e/pg_geohash/) | `1.0` | `GIS` | 使用GeoHash处理空间坐标的函数包 |
| [mobilitydb](https://pgext.cloud/zh/e/mobilitydb/) | `1.3.0` | `GIS` | MobilityDB地理空间投影数据管理分析平台 |
| [mobilitydb_datagen](https://pgext.cloud/zh/e/mobilitydb_datagen/) | `1.3.0` | `GIS` | MobilityDB随机数据生成函数 |
| [tzf](https://pgext.cloud/zh/e/tzf/) | `0.2.3` | `GIS` | 快速根据GPS经纬度坐标查找时区 |
| [earthdistance](https://pgext.cloud/zh/e/earthdistance/) | `1.2` | `GIS` | 计算地球表面上的大圆距离 |

### RAG

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [vector](https://pgext.cloud/zh/e/vector/) | `0.8.1` | `RAG` | 向量数据类型和 ivfflat / hnsw 访问方法 |
| [vchord](https://pgext.cloud/zh/e/vchord/) | `1.1.0` | `RAG` | 使用Rust重写的高性能向量扩展 |
| [vectorscale](https://pgext.cloud/zh/e/vectorscale/) | `0.9.0` | `RAG` | 使用DiskANN算法对向量进行高效索引 |
| [vectorize](https://pgext.cloud/zh/e/vectorize/) | `0.26.0` | `RAG` | 在PostgreSQL中封装RAG向量检索服务 |
| [pg_similarity](https://pgext.cloud/zh/e/pg_similarity/) | `1.0` | `RAG` | 提供17种距离度量函数 |
| [smlar](https://pgext.cloud/zh/e/smlar/) | `1.0` | `RAG` | 高效的相似度搜索函数 |
| [pg_summarize](https://pgext.cloud/zh/e/pg_summarize/) | `0.0.1` | `RAG` | 使用LLM对文本字段进行总结 |
| [pg_tiktoken](https://pgext.cloud/zh/e/pg_tiktoken/) | `0.0.1` | `RAG` | 在PostgreSQL中计算OpenAI使用的Token数 |
| [pg4ml](https://pgext.cloud/zh/e/pg4ml/) | `2.0` | `RAG` | PG4ML是一个机器学习框架 |
| [pgml](https://pgext.cloud/zh/e/pgml/) | `2.10.0` | `RAG` | PostgresML：用SQL运行机器学习算法并训练模型 |

### FTS

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [pg_search](https://pgext.cloud/zh/e/pg_search/) | `0.21.7` | `FTS` | ParadeDB BM25算法全文检索插件，ES全文检索 |
| [pgroonga](https://pgext.cloud/zh/e/pgroonga/) | `4.0.4` | `FTS` | 使用Groonga，面向所有语言的高速全文检索平台 |
| [pgroonga_database](https://pgext.cloud/zh/e/pgroonga_database/) | `4.0.4` | `FTS` | PGGroonga 数据库管理模块 |
| [pg_bigm](https://pgext.cloud/zh/e/pg_bigm/) | `1.2` | `FTS` | 基于二字组的多语言全文检索扩展 |
| [zhparser](https://pgext.cloud/zh/e/zhparser/) | `2.3` | `FTS` | 中文分词，全文搜索解析器 |
| [pg_bestmatch](https://pgext.cloud/zh/e/pg_bestmatch/) | `0.0.2` | `FTS` | 在数据库内生成BM25稀疏向量 |
| [vchord_bm25](https://pgext.cloud/zh/e/vchord_bm25/) | `0.3.0` | `FTS` | BM25排序算法 |
| [pg_tokenizer](https://pgext.cloud/zh/e/pg_tokenizer/) | `0.1.1` | `FTS` | 用于全文检索的分词器 |
| [biscuit](https://pgext.cloud/zh/e/biscuit/) | `2.2.2` | `FTS` | 使用IAM的高性能文本模式匹配 |
| [pg_textsearch](https://pgext.cloud/zh/e/pg_textsearch/) | `0.5.0` | `FTS` | 带有BM25排序的全文搜索扩展 |
| [hunspell_cs_cz](https://pgext.cloud/zh/e/hunspell_cs_cz/) | `1.0` | `FTS` | Hunspell捷克语全文检索词典 |
| [hunspell_de_de](https://pgext.cloud/zh/e/hunspell_de_de/) | `1.0` | `FTS` | Hunspell德语全文检索词典 |
| [hunspell_en_us](https://pgext.cloud/zh/e/hunspell_en_us/) | `1.0` | `FTS` | Hunspell英语全文检索词典 |
| [hunspell_fr](https://pgext.cloud/zh/e/hunspell_fr/) | `1.0` | `FTS` | Hunspell法语全文检索词典 |
| [hunspell_ne_np](https://pgext.cloud/zh/e/hunspell_ne_np/) | `1.0` | `FTS` | Hunspell尼泊尔语全文检索词典 |
| [hunspell_nl_nl](https://pgext.cloud/zh/e/hunspell_nl_nl/) | `1.0` | `FTS` | Hunspell荷兰语全文检索词典 |
| [hunspell_nn_no](https://pgext.cloud/zh/e/hunspell_nn_no/) | `1.0` | `FTS` | Hunspell挪威语全文检索词典 |
| [hunspell_pt_pt](https://pgext.cloud/zh/e/hunspell_pt_pt/) | `1.0` | `FTS` | Hunspell葡萄牙语全文检索词典 |
| [hunspell_ru_ru](https://pgext.cloud/zh/e/hunspell_ru_ru/) | `1.0` | `FTS` | Hunspell俄语全文检索词典 |
| [hunspell_ru_ru_aot](https://pgext.cloud/zh/e/hunspell_ru_ru_aot/) | `1.0` | `FTS` | Hunspell俄语全文检索词典（来自AOT.ru小组） |
| [fuzzystrmatch](https://pgext.cloud/zh/e/fuzzystrmatch/) | `1.2` | `FTS` | 确定字符串之间的相似性和距离 |
| [pg_trgm](https://pgext.cloud/zh/e/pg_trgm/) | `1.6` | `FTS` | 文本相似度测量函数与模糊检索 |

### OLAP

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [citus](https://pgext.cloud/zh/e/citus/) | `14.0.0` | `OLAP` | Citus 分布式数据库 |
| [citus_columnar](https://pgext.cloud/zh/e/citus_columnar/) | `14.0.0` | `OLAP` | Citus 列式存储引擎 |
| [columnar](https://pgext.cloud/zh/e/columnar/) | `1.1.2` | `OLAP` | 开源列式存储扩展 |
| [pg_analytics](https://pgext.cloud/zh/e/pg_analytics/) | `0.3.7` | `OLAP` | 由 DuckDB 驱动的数据分析引擎 |
| [pg_duckdb](https://pgext.cloud/zh/e/pg_duckdb/) | `1.1.1` | `OLAP` | 在PostgreSQL中的嵌入式DuckDB扩展 |
| [pg_mooncake](https://pgext.cloud/zh/e/pg_mooncake/) | `0.2.0` | `OLAP` | PostgreSQL列式存储表 |
| [pg_clickhouse](https://pgext.cloud/zh/e/pg_clickhouse/) | `0.1.3` | `OLAP` | 从PostgreSQL中查询ClickHouse的接口 |
| [duckdb_fdw](https://pgext.cloud/zh/e/duckdb_fdw/) | `1.1.2` | `OLAP` | DuckDB 外部数据源包装器 |
| [pg_parquet](https://pgext.cloud/zh/e/pg_parquet/) | `0.5.1` | `OLAP` | 在PostgreSQL与本地/S3中的Parquet文件复制数据 |
| [pg_fkpart](https://pgext.cloud/zh/e/pg_fkpart/) | `1.7.0` | `OLAP` | 按外键实用程序进行表分区的扩展 |
| [pg_partman](https://pgext.cloud/zh/e/pg_partman/) | `5.4.1` | `OLAP` | 用于按时间或 ID 管理分区表的扩展 |
| [plproxy](https://pgext.cloud/zh/e/plproxy/) | `2.11.0` | `OLAP` | 作为过程语言实现的数据库分区 |
| [pg_strom](https://pgext.cloud/zh/e/pg_strom/) | `6.1` | `OLAP` | 使用GPU与NVMe加速大数据处理 |
| [tablefunc](https://pgext.cloud/zh/e/tablefunc/) | `1.0` | `OLAP` | 交叉表函数 |

### FEAT

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [age](https://pgext.cloud/zh/e/age/) | `1.7.0` | `FEAT` | Apache AGE，图数据库扩展 （Deb可用） |
| [hll](https://pgext.cloud/zh/e/hll/) | `2.19` | `FEAT` | hyperloglog 数据类型 |
| [rum](https://pgext.cloud/zh/e/rum/) | `1.3.15` | `FEAT` | RUM 索引访问方法 |
| [pg_ai_query](https://pgext.cloud/zh/e/pg_ai_query/) | `0.1.1` | `FEAT` | AI驱动的 Postgres SQL 查询生成 |
| [pg_ttl_index](https://pgext.cloud/zh/e/pg_ttl_index/) | `2.0.0` | `FEAT` | 基于TTL索引的自动数据过期清理 |
| [pg_graphql](https://pgext.cloud/zh/e/pg_graphql/) | `1.5.12` | `FEAT` | PG内的GraphQL支持 |
| [pg_jsonschema](https://pgext.cloud/zh/e/pg_jsonschema/) | `0.3.4` | `FEAT` | 提供JSON Schema校验能力 |
| [jsquery](https://pgext.cloud/zh/e/jsquery/) | `1.2` | `FEAT` | 用于内省 JSONB 数据类型的查询类型 |
| [pg_hint_plan](https://pgext.cloud/zh/e/pg_hint_plan/) | `1.8.0` | `FEAT` | 添加强制指定执行计划的能力 |
| [hypopg](https://pgext.cloud/zh/e/hypopg/) | `1.4.2` | `FEAT` | 假设索引，用于创建一个虚拟索引检验执行计划 |
| [index_advisor](https://pgext.cloud/zh/e/index_advisor/) | `0.2.0` | `FEAT` | 查询索引建议器 |
| [plan_filter](https://pgext.cloud/zh/e/plan_filter/) | `0.0.1` | `FEAT` | 使用执行计划代价过滤阻止特定查询语句 |
| [imgsmlr](https://pgext.cloud/zh/e/imgsmlr/) | `1.0` | `FEAT` | 使用Haar小波分析计算图片相似度 |
| [pg_ivm](https://pgext.cloud/zh/e/pg_ivm/) | `1.13` | `FEAT` | 增量维护的物化视图 |
| [pg_incremental](https://pgext.cloud/zh/e/pg_incremental/) | `1.4.1` | `FEAT` | 增量处理流式事件 |
| [pgmb](https://pgext.cloud/zh/e/pgmb/) | `1.0.0` | `FEAT` | 一个简单的PostgreSQL消息代理系统 |
| [pgmq](https://pgext.cloud/zh/e/pgmq/) | `1.10.0` | `FEAT` | 基于Postgres实现类似AWS SQS/RSMQ的消息队列 |
| [pgq](https://pgext.cloud/zh/e/pgq/) | `3.5.1` | `FEAT` | 通用队列的PG实现 |
| [orioledb](https://pgext.cloud/zh/e/orioledb/) | `1.5` | `FEAT` | OrioleDB，下一代事务处理引擎 |
| [pg_cardano](https://pgext.cloud/zh/e/pg_cardano/) | `1.1.1` | `FEAT` | Cardano相关工具包：加密函数，地址编解码，区块链处理 |
| [rdkit](https://pgext.cloud/zh/e/rdkit/) | `202503.1` | `FEAT` | 在PostgreSQL化学领域数据管理功能 |
| [omni](https://pgext.cloud/zh/e/omni/) | `0.2.14` | `FEAT` | PostgreSQL即平台，Omnigres主扩展与加载器 |
| [omni_auth](https://pgext.cloud/zh/e/omni_auth/) | `0.1.3` | `FEAT` | Omnigres 基础会话认证管理模块 |
| [omni_aws](https://pgext.cloud/zh/e/omni_aws/) | `0.1.2` | `FEAT` | Omnigres AWS S3 API封装 |
| [omni_cloudevents](https://pgext.cloud/zh/e/omni_cloudevents/) | `0.1.0` | `FEAT` | Omnigres CloudEvents 支持 |
| [omni_containers](https://pgext.cloud/zh/e/omni_containers/) | `0.2.0` | `FEAT` | Omnigres Docker容器管理模块 |
| [omni_credentials](https://pgext.cloud/zh/e/omni_credentials/) | `0.2.0` | `FEAT` | Omnigres 应用密钥管理模块 |
| [omni_csv](https://pgext.cloud/zh/e/omni_csv/) | `0.1.1` | `FEAT` | Omnigres CSV 工具箱 |
| [omni_datasets](https://pgext.cloud/zh/e/omni_datasets/) | `0.1.0` | `FEAT` | Omnigres 数据库置备工具 |
| [omni_email](https://pgext.cloud/zh/e/omni_email/) | `0.1.0` | `FEAT` | Omnigres Email 框架 |
| [omni_http](https://pgext.cloud/zh/e/omni_http/) | `0.1.0` | `FEAT` | Omnigres 基本HTTP类型 |
| [omni_httpc](https://pgext.cloud/zh/e/omni_httpc/) | `0.1.10` | `FEAT` | Omnigres HTTP客户端 |
| [omni_httpd](https://pgext.cloud/zh/e/omni_httpd/) | `0.4.11` | `FEAT` | Omnigres HTTP服务器 |
| [omni_id](https://pgext.cloud/zh/e/omni_id/) | `0.4.3` | `FEAT` | Omnigres ID身份数据类型 |
| [omni_json](https://pgext.cloud/zh/e/omni_json/) | `0.1.1` | `FEAT` | Omnigres JSON工具箱 |
| [omni_kube](https://pgext.cloud/zh/e/omni_kube/) | `0.4.2` | `FEAT` | Omnigres Kubernetes集成模块 |
| [omni_ledger](https://pgext.cloud/zh/e/omni_ledger/) | `0.1.3` | `FEAT` | Omnigres 金融账本模块 |
| [omni_manifest](https://pgext.cloud/zh/e/omni_manifest/) | `0.1.2` | `FEAT` | Omnigres 包管理清单模块 |
| [omni_mimetypes](https://pgext.cloud/zh/e/omni_mimetypes/) | `0.1.0` | `FEAT` | Omnigres MIME数据类型 |
| [omni_os](https://pgext.cloud/zh/e/omni_os/) | `0.1.1` | `FEAT` | Omnigres 操作系统集成模块 |
| [omni_polyfill](https://pgext.cloud/zh/e/omni_polyfill/) | `0.2.2` | `FEAT` | Omnigres Postgres多态API |
| [omni_python](https://pgext.cloud/zh/e/omni_python/) | `0.1.1` | `FEAT` | Omnigres 第一类Python支持模块 |
| [omni_regex](https://pgext.cloud/zh/e/omni_regex/) | `0.1.0` | `FEAT` | Omnigres PCRE兼容正则表达式模块 |
| [omni_rest](https://pgext.cloud/zh/e/omni_rest/) | `0.1.1` | `FEAT` | Omnigres REST API 工具包 |
| [omni_schema](https://pgext.cloud/zh/e/omni_schema/) | `0.3.0` | `FEAT` | Omnigres 高级模式管理组件 |
| [omni_seq](https://pgext.cloud/zh/e/omni_seq/) | `0.1.1` | `FEAT` | Omnigres 分布式整型序列号 |
| [omni_service](https://pgext.cloud/zh/e/omni_service/) | `0.1.0` | `FEAT` | Omnigres 服务管理器 |
| [omni_session](https://pgext.cloud/zh/e/omni_session/) | `0.2.0` | `FEAT` | Omnigres 会话管理器 |
| [omni_shmem](https://pgext.cloud/zh/e/omni_shmem/) | `0.1.0` | `FEAT` | Omnigres 共享内存管理 |
| [omni_sql](https://pgext.cloud/zh/e/omni_sql/) | `0.5.3` | `FEAT` | Omnigres SQL编程组件 |
| [omni_sqlite](https://pgext.cloud/zh/e/omni_sqlite/) | `0.2.2` | `FEAT` | Omnigres 嵌入的SQLite支持 |
| [omni_test](https://pgext.cloud/zh/e/omni_test/) | `0.4.0` | `FEAT` | Omnigres 测试框架 |
| [omni_txn](https://pgext.cloud/zh/e/omni_txn/) | `0.5.0` | `FEAT` | Omnigres 事务管理器模块 |
| [omni_types](https://pgext.cloud/zh/e/omni_types/) | `0.3.6` | `FEAT` | Omnigres 高级数据类型模块 |
| [omni_var](https://pgext.cloud/zh/e/omni_var/) | `0.3.0` | `FEAT` | Omnigres 局部变量模块 |
| [omni_vfs](https://pgext.cloud/zh/e/omni_vfs/) | `0.2.2` | `FEAT` | Omnigres 虚拟文件系统 |
| [omni_vfs_types_v1](https://pgext.cloud/zh/e/omni_vfs_types_v1/) | `0.1.0` | `FEAT` | Omnigres 虚拟文件系统（v1） |
| [omni_web](https://pgext.cloud/zh/e/omni_web/) | `0.3.0` | `FEAT` | Omnigres Web工具箱 |
| [omni_worker](https://pgext.cloud/zh/e/omni_worker/) | `0.2.1` | `FEAT` | Omnigres 通用Worker池 |
| [omni_xml](https://pgext.cloud/zh/e/omni_xml/) | `0.1.2` | `FEAT` | Omnigres XML工具包 |
| [omni_yaml](https://pgext.cloud/zh/e/omni_yaml/) | `0.1.0` | `FEAT` | Omnigres YAML工具包 |
| [bloom](https://pgext.cloud/zh/e/bloom/) | `1.0` | `FEAT` | bloom 索引-基于指纹的索引 |

### LANG

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [pg_tle](https://pgext.cloud/zh/e/pg_tle/) | `1.5.2` | `LANG` | AWS 可信语言扩展 |
| [plv8](https://pgext.cloud/zh/e/plv8/) | `3.2.4` | `LANG` | PL/JavaScript (v8) 可信过程程序语言 |
| [pljs](https://pgext.cloud/zh/e/pljs/) | `1.0.5` | `LANG` | PL/JS 可信过程程序语言 |
| [pllua](https://pgext.cloud/zh/e/pllua/) | `2.0.12` | `LANG` | Lua 程序语言 |
| [hstore_pllua](https://pgext.cloud/zh/e/hstore_pllua/) | `2.0.12` | `LANG` | Lua 程序语言的Hstore适配扩展 |
| [plluau](https://pgext.cloud/zh/e/plluau/) | `2.0.12` | `LANG` | Lua 程序语言（不受信任的） |
| [hstore_plluau](https://pgext.cloud/zh/e/hstore_plluau/) | `2.0.12` | `LANG` | Lua 程序语言的Hstore适配扩展（不受信任的） |
| [plprql](https://pgext.cloud/zh/e/plprql/) | `18.0.1` | `LANG` | 在PostgreSQL使用PRQL——管线式关系查询语言 |
| [pldbgapi](https://pgext.cloud/zh/e/pldbgapi/) | `1.9` | `LANG` | 用于调试 PL/pgSQL 函数的服务器端支持 |
| [plpgsql_check](https://pgext.cloud/zh/e/plpgsql_check/) | `2.8.8` | `LANG` | 对 plpgsql 函数进行扩展检查 |
| [plprofiler](https://pgext.cloud/zh/e/plprofiler/) | `4.2.5` | `LANG` | 剖析 PL/pgSQL 函数 |
| [plsh](https://pgext.cloud/zh/e/plsh/) | `1.20220917` | `LANG` | PL/sh 程序语言 |
| [pljava](https://pgext.cloud/zh/e/pljava/) | `1.6.10` | `LANG` | Java 程序语言 |
| [plr](https://pgext.cloud/zh/e/plr/) | `8.4.8` | `LANG` | 从数据库中加载R语言解释器并执行R脚本 |
| [plxslt](https://pgext.cloud/zh/e/plxslt/) | `0.20140221` | `LANG` | XSLT 存储过程语言 |
| [pgtap](https://pgext.cloud/zh/e/pgtap/) | `1.3.4` | `LANG` | PostgreSQL单元测试框架 |
| [faker](https://pgext.cloud/zh/e/faker/) | `0.5.3` | `LANG` | 插入生成的测试伪造数据，Python库的包装 |
| [dbt2](https://pgext.cloud/zh/e/dbt2/) | `0.61.7` | `LANG` | OSDL-DBT-2 测试组件 |
| [pltcl](https://pgext.cloud/zh/e/pltcl/) | `1.0` | `LANG` | PL/TCL 存储过程语言 |
| [pltclu](https://pgext.cloud/zh/e/pltclu/) | `1.0` | `LANG` | PL/TCL 存储过程语言（未受信/高权限） |
| [plperl](https://pgext.cloud/zh/e/plperl/) | `1.0` | `LANG` | PL/Perl 存储过程语言 |
| [bool_plperl](https://pgext.cloud/zh/e/bool_plperl/) | `1.0` | `LANG` | 在 bool 和 plperl 之间转换 |
| [hstore_plperl](https://pgext.cloud/zh/e/hstore_plperl/) | `1.0` | `LANG` | 在 hstore 和 plperl 之间转换适配类型 |
| [jsonb_plperl](https://pgext.cloud/zh/e/jsonb_plperl/) | `1.0` | `LANG` | 在 jsonb 和 plperl 之间转换 |
| [plperlu](https://pgext.cloud/zh/e/plperlu/) | `1.0` | `LANG` | PL/PerlU 存储过程语言（未受信/高权限） |
| [bool_plperlu](https://pgext.cloud/zh/e/bool_plperlu/) | `1.0` | `LANG` | 在 bool 和 plperlu 之间转换 |
| [jsonb_plperlu](https://pgext.cloud/zh/e/jsonb_plperlu/) | `1.0` | `LANG` | 在 jsonb 和 plperlu 之间转换 |
| [hstore_plperlu](https://pgext.cloud/zh/e/hstore_plperlu/) | `1.0` | `LANG` | 在 hstore 和 plperlu 之间转换适配类型 |
| [plpgsql](https://pgext.cloud/zh/e/plpgsql/) | `1.0` | `LANG` | PL/pgSQL 程序设计语言 |
| [plpython3u](https://pgext.cloud/zh/e/plpython3u/) | `1.0` | `LANG` | PL/Python3 存储过程语言（未受信/高权限） |
| [jsonb_plpython3u](https://pgext.cloud/zh/e/jsonb_plpython3u/) | `1.0` | `LANG` | 在 jsonb 和 plpython3u 之间转换 |
| [ltree_plpython3u](https://pgext.cloud/zh/e/ltree_plpython3u/) | `1.0` | `LANG` | 在 ltree 和 plpython3u 之间转换 |
| [hstore_plpython3u](https://pgext.cloud/zh/e/hstore_plpython3u/) | `1.0` | `LANG` | 在 hstore 和 plpython3u 之间转换 |

### TYPE

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [prefix](https://pgext.cloud/zh/e/prefix/) | `1.2.10` | `TYPE` | 前缀树数据类型 |
| [semver](https://pgext.cloud/zh/e/semver/) | `0.41.0` | `TYPE` | 语义版本号数据类型 |
| [unit](https://pgext.cloud/zh/e/unit/) | `7.10` | `TYPE` | SI 国标单位扩展 |
| [pgpdf](https://pgext.cloud/zh/e/pgpdf/) | `0.1.0` | `TYPE` | PDF数据类型，管理函数与全文检索 |
| [pglite_fusion](https://pgext.cloud/zh/e/pglite_fusion/) | `0.0.6` | `TYPE` | 在PG表中嵌入SQLite数据库作为数据类型 |
| [md5hash](https://pgext.cloud/zh/e/md5hash/) | `1.0.1` | `TYPE` | 提供128位MD5的原生数据类型 |
| [asn1oid](https://pgext.cloud/zh/e/asn1oid/) | `1.6` | `TYPE` | ASN1OID数据类型支持 |
| [roaringbitmap](https://pgext.cloud/zh/e/roaringbitmap/) | `1.1.0` | `TYPE` | 支持RoaringBitmap数据类型 |
| [pgfaceting](https://pgext.cloud/zh/e/pgfaceting/) | `0.2.0` | `TYPE` | 使用倒排索引的高速切面查询 |
| [pg_sphere](https://pgext.cloud/zh/e/pg_sphere/) | `1.5.2` | `TYPE` | 球面对象函数、运算符与索引支持 |
| [country](https://pgext.cloud/zh/e/country/) | `0.0.3` | `TYPE` | 国家代码数据类型，遵循ISO 3166-1标准 |
| [pg_xenophile](https://pgext.cloud/zh/e/pg_xenophile/) | `0.8.3` | `TYPE` | PostgreSQL i8n与l10n工具包 |
| [l10n_table_dependent_extension](https://pgext.cloud/zh/e/l10n_table_dependent_extension/) | `0.8.3` | `TYPE` | PostgreSQL l10n 工具包 |
| [currency](https://pgext.cloud/zh/e/currency/) | `0.0.3` | `TYPE` | 使用1字节表示的货币数据类型 |
| [collection](https://pgext.cloud/zh/e/collection/) | `1.1.1` | `TYPE` | 在PlPGSQL中使用的内存优化高性能集合数据结构 |
| [pgmp](https://pgext.cloud/zh/e/pgmp/) | `1.0.5` | `TYPE` | 多精度算术扩展 |
| [numeral](https://pgext.cloud/zh/e/numeral/) | `1.3` | `TYPE` | 数值类型扩展 |
| [pg_rational](https://pgext.cloud/zh/e/pg_rational/) | `0.0.2` | `TYPE` | 使用BIGINT表示的有理数数据类型 |
| [uint](https://pgext.cloud/zh/e/uint/) | `1.20250815` | `TYPE` | 无符号整型数据类型 |
| [uint128](https://pgext.cloud/zh/e/uint128/) | `1.2.0` | `TYPE` | 原生128位无符号整型数据类型 |
| [hashtypes](https://pgext.cloud/zh/e/hashtypes/) | `0.1.5` | `TYPE` | 包括SHA1，MD5在内的多种哈希数据类型 |
| [ip4r](https://pgext.cloud/zh/e/ip4r/) | `2.4.2` | `TYPE` | PostgreSQL 的 IPv4/v6 和 IPv4/v6 范围索引类型 |
| [pg_duration](https://pgext.cloud/zh/e/pg_duration/) | `1.0.2` | `TYPE` | 用于表示时间段的强化数据类型 |
| [uri](https://pgext.cloud/zh/e/uri/) | `1.20251029` | `TYPE` | URI数据类型 |
| [emailaddr](https://pgext.cloud/zh/e/emailaddr/) | `0` | `TYPE` | Email地址数据类型 |
| [acl](https://pgext.cloud/zh/e/acl/) | `1.0.4` | `TYPE` | ACL数据类型 |
| [debversion](https://pgext.cloud/zh/e/debversion/) | `1.2.0` | `TYPE` | Debian版本号数据类型 |
| [pg_rrule](https://pgext.cloud/zh/e/pg_rrule/) | `0.3.0` | `TYPE` | 日历重复规则RRULE数据类型 |
| [timestamp9](https://pgext.cloud/zh/e/timestamp9/) | `1.4.0` | `TYPE` | 纳秒分辨率时间戳 |
| [chkpass](https://pgext.cloud/zh/e/chkpass/) | `1.0` | `TYPE` | 数据类型：自动加密的密码 |
| [isn](https://pgext.cloud/zh/e/isn/) | `1.2` | `TYPE` | 用于国际产品编号标准的数据类型 |
| [seg](https://pgext.cloud/zh/e/seg/) | `1.4` | `TYPE` | 表示线段或浮点间隔的数据类型 |
| [cube](https://pgext.cloud/zh/e/cube/) | `1.5` | `TYPE` | 用于存储多维立方体的数据类型 |
| [ltree](https://pgext.cloud/zh/e/ltree/) | `1.3` | `TYPE` | 用于表示分层树状结构的数据类型 |
| [hstore](https://pgext.cloud/zh/e/hstore/) | `1.8` | `TYPE` | 用于存储（键，值）对集合的数据类型 |
| [citext](https://pgext.cloud/zh/e/citext/) | `1.6` | `TYPE` | 提供大小写不敏感的字符串类型 |
| [xml2](https://pgext.cloud/zh/e/xml2/) | `1.1` | `TYPE` | XPath 查询和 XSLT |

### UTIL

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [gzip](https://pgext.cloud/zh/e/gzip/) | `1.0.0` | `UTIL` | 使用SQL执行Gzip压缩与解压缩 |
| [bzip](https://pgext.cloud/zh/e/bzip/) | `1.0.0` | `UTIL` | BZIP压缩解压缩函数包 |
| [zstd](https://pgext.cloud/zh/e/zstd/) | `1.1.2` | `UTIL` | ZSTD压缩解压缩函数包 |
| [http](https://pgext.cloud/zh/e/http/) | `1.7.0` | `UTIL` | HTTP客户端，允许在数据库内收发HTTP请求 (supabase) |
| [pg_net](https://pgext.cloud/zh/e/pg_net/) | `0.20.2` | `UTIL` | 用 SQL 进行异步非阻塞HTTP/HTTPS 请求的扩展 (supabase) |
| [pg_curl](https://pgext.cloud/zh/e/pg_curl/) | `2.4.5` | `UTIL` | 封装CURL，执行各种用URL传输数据的操作 |
| [pg_retry](https://pgext.cloud/zh/e/pg_retry/) | `1.0.0` | `UTIL` | 在临时错误中使用指数退避重试语句 |
| [pgjq](https://pgext.cloud/zh/e/pgjq/) | `0.1.0` | `UTIL` | 在Postgres中使用jq查询JSON |
| [pgjwt](https://pgext.cloud/zh/e/pgjwt/) | `0.2.0` | `UTIL` | JSON Web Token API 的PG实现 (supabase) |
| [pg_smtp_client](https://pgext.cloud/zh/e/pg_smtp_client/) | `0.2.1` | `UTIL` | 使用SMTP从PostgreSQL内发送邮件的客户端扩展 |
| [pg_html5_email_address](https://pgext.cloud/zh/e/pg_html5_email_address/) | `1.2.3` | `UTIL` | 验证Email是否符合HTML5规范的扩展 |
| [url_encode](https://pgext.cloud/zh/e/url_encode/) | `1.2.5` | `UTIL` | 提供URL编码解码函数 |
| [pgsql_tweaks](https://pgext.cloud/zh/e/pgsql_tweaks/) | `1.0.2` | `UTIL` | 一些日常会用到的便利函数与视图 |
| [pg_extra_time](https://pgext.cloud/zh/e/pg_extra_time/) | `2.0.0` | `UTIL` | 一些关于日期与时间的扩展函数 |
| [pgpcre](https://pgext.cloud/zh/e/pgpcre/) | `0.20190509` | `UTIL` | PCRE/Perl风格的正则表达式支持 |
| [icu_ext](https://pgext.cloud/zh/e/icu_ext/) | `1.10.0` | `UTIL` | 访问ICU库提供的函数 |
| [pgqr](https://pgext.cloud/zh/e/pgqr/) | `1.0` | `UTIL` | 从数据库中直接生成QR二维码 |
| [pg_protobuf](https://pgext.cloud/zh/e/pg_protobuf/) | `1.0` | `UTIL` | 提供Protobuf函数支持 |
| [envvar](https://pgext.cloud/zh/e/envvar/) | `1.0.1` | `UTIL` | 获取环境变量的函数 |
| [floatfile](https://pgext.cloud/zh/e/floatfile/) | `1.3.1` | `UTIL` | 将浮点数组存储到文件中而不是堆表中 |
| [pg_render](https://pgext.cloud/zh/e/pg_render/) | `0.1.3` | `UTIL` | 使用SQL渲染HTML页面 |
| [pg_readme](https://pgext.cloud/zh/e/pg_readme/) | `0.7.0` | `UTIL` | 为模式与扩展生成Markdown文档 |
| [pg_readme_test_extension](https://pgext.cloud/zh/e/pg_readme_test_extension/) | `0.7.0` | `UTIL` | 为模式与扩展生成Markdown文档 |
| [ddl_historization](https://pgext.cloud/zh/e/ddl_historization/) | `0.0.7` | `UTIL` | 用SQL将所有DDL变更写入到数据库表中 |
| [data_historization](https://pgext.cloud/zh/e/data_historization/) | `1.1.0` | `UTIL` | 用SQL将数据变更历史保存到分区表中 |
| [schedoc](https://pgext.cloud/zh/e/schedoc/) | `0.0.1` | `UTIL` | 在Django与DBT之间通过注释文档交换元数据 |
| [hashlib](https://pgext.cloud/zh/e/hashlib/) | `1.1` | `UTIL` | 稳定哈希函数包 |
| [xxhash](https://pgext.cloud/zh/e/xxhash/) | `0.0.1` | `UTIL` | xxhash哈希函数包 |
| [shacrypt](https://pgext.cloud/zh/e/shacrypt/) | `1.1` | `UTIL` | 实现SHA256-CRYPT与SHA512-CRYPT密钥加密算法 |
| [cryptint](https://pgext.cloud/zh/e/cryptint/) | `1.0.0` | `UTIL` | 加密INT与BIGINT类型 |
| [pguecc](https://pgext.cloud/zh/e/pguecc/) | `1.0` | `UTIL` | PostgreSQL的uECC绑定，椭圆曲线加解密函数包 |
| [sparql](https://pgext.cloud/zh/e/sparql/) | `1.0` | `UTIL` | 使用SQL查询SPARQL数据源 |

### FUNC

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [pg_idkit](https://pgext.cloud/zh/e/pg_idkit/) | `0.4.0` | `FUNC` | 生成各式各样的唯一标识符：UUIDv6, ULID, KSUID |
| [pgx_ulid](https://pgext.cloud/zh/e/pgx_ulid/) | `0.2.2` | `FUNC` | ULID数据类型与函数 |
| [pg_uuidv7](https://pgext.cloud/zh/e/pg_uuidv7/) | `1.7.0` | `FUNC` | UUIDv7 支持 |
| [permuteseq](https://pgext.cloud/zh/e/permuteseq/) | `1.2.2` | `FUNC` | 伪随机数ID置换生成器 |
| [pg_hashids](https://pgext.cloud/zh/e/pg_hashids/) | `1.3` | `FUNC` | 加盐将整型ID转为短字符串ID |
| [sequential_uuids](https://pgext.cloud/zh/e/sequential_uuids/) | `1.0.3` | `FUNC` | 生成连续生成的UUID |
| [typeid](https://pgext.cloud/zh/e/typeid/) | `0.3.0` | `FUNC` | PG原生TypeID类型与函数 |
| [topn](https://pgext.cloud/zh/e/topn/) | `2.7.0` | `FUNC` | top-n JSONB 的类型 |
| [quantile](https://pgext.cloud/zh/e/quantile/) | `1.1.8` | `FUNC` | Quantile聚合函数 |
| [lower_quantile](https://pgext.cloud/zh/e/lower_quantile/) | `1.0.3` | `FUNC` | Lower Quantile 聚合函数 |
| [count_distinct](https://pgext.cloud/zh/e/count_distinct/) | `3.0.2` | `FUNC` | COUNT(DISTINCT …) 聚合的替代方案 |
| [omnisketch](https://pgext.cloud/zh/e/omnisketch/) | `1.0.2` | `FUNC` | 实现OmniSketch数据结构，实现近似摘要聚合 |
| [ddsketch](https://pgext.cloud/zh/e/ddsketch/) | `1.0.1` | `FUNC` | 实现DDSketch数据结构，实现在线的Quantile聚合 |
| [vasco](https://pgext.cloud/zh/e/vasco/) | `0.1.0` | `FUNC` | 使用MIC发现数据中隐含的关联 |
| [xicor](https://pgext.cloud/zh/e/xicor/) | `0.1.0` | `FUNC` | 在PG中计算XI相关系数 |
| [weighted_statistics](https://pgext.cloud/zh/e/weighted_statistics/) | `1.0.0` | `FUNC` | 针对稀疏数据的高性能加权统计量计算 |
| [tdigest](https://pgext.cloud/zh/e/tdigest/) | `1.4.3` | `FUNC` | tdigest 聚合函数 |
| [first_last_agg](https://pgext.cloud/zh/e/first_last_agg/) | `0.1.4` | `FUNC` | first() 与 last() 聚合函数 |
| [extra_window_functions](https://pgext.cloud/zh/e/extra_window_functions/) | `1.0` | `FUNC` | 额外的窗口函数 |
| [floatvec](https://pgext.cloud/zh/e/floatvec/) | `1.1.1` | `FUNC` | 数组类型数学运算扩展 |
| [aggs_for_vecs](https://pgext.cloud/zh/e/aggs_for_vecs/) | `1.4.0` | `FUNC` | 针对数组类型的聚合函数集合扩展 |
| [aggs_for_arrays](https://pgext.cloud/zh/e/aggs_for_arrays/) | `1.3.3` | `FUNC` | 计算数组聚合统计值的函数包 |
| [pg_csv](https://pgext.cloud/zh/e/pg_csv/) | `1.0.1` | `FUNC` | 灵活的CSV聚合处理函数 |
| [arraymath](https://pgext.cloud/zh/e/arraymath/) | `1.1` | `FUNC` | 数组逐元素数学运算符包 |
| [pg_math](https://pgext.cloud/zh/e/pg_math/) | `1.1.0` | `FUNC` | 使用GSL库的数学统计函数 |
| [random](https://pgext.cloud/zh/e/random/) | `2.0.0` | `FUNC` | 随机数生成器 |
| [base36](https://pgext.cloud/zh/e/base36/) | `1.0.0` | `FUNC` | Base36编码解码扩展 |
| [base62](https://pgext.cloud/zh/e/base62/) | `0.0.1` | `FUNC` | Base62编码解码扩展 |
| [pg_base58](https://pgext.cloud/zh/e/pg_base58/) | `0.0.1` | `FUNC` | Base58 编码/解码函数 |
| [financial](https://pgext.cloud/zh/e/financial/) | `1.0.1` | `FUNC` | 金融领域聚合函数 |
| [convert](https://pgext.cloud/zh/e/convert/) | `0.1.0` | `FUNC` | 用于空间里程等的公英制转换函数 |
| [refint](https://pgext.cloud/zh/e/refint/) | `1.0` | `FUNC` | 实现引用完整性的函数 |
| [autoinc](https://pgext.cloud/zh/e/autoinc/) | `1.0` | `FUNC` | 用于自动递增字段的函数 |
| [insert_username](https://pgext.cloud/zh/e/insert_username/) | `1.0` | `FUNC` | 用于跟踪谁更改了表的函数 |
| [moddatetime](https://pgext.cloud/zh/e/moddatetime/) | `1.0` | `FUNC` | 跟踪最后修改时间 |
| [tsm_system_time](https://pgext.cloud/zh/e/tsm_system_time/) | `1.0` | `FUNC` | 接受毫秒数限制的 TABLESAMPLE 方法 |
| [dict_xsyn](https://pgext.cloud/zh/e/dict_xsyn/) | `1.0` | `FUNC` | 用于扩展同义词处理的文本搜索字典模板 |
| [tsm_system_rows](https://pgext.cloud/zh/e/tsm_system_rows/) | `1.0` | `FUNC` | 接受行数限制的 TABLESAMPLE 方法 |
| [tcn](https://pgext.cloud/zh/e/tcn/) | `1.0` | `FUNC` | 用触发器通知变更 |
| [uuid-ossp](https://pgext.cloud/zh/e/uuid-ossp/) | `1.1` | `FUNC` | 生成通用唯一标识符（UUIDs） |
| [btree_gist](https://pgext.cloud/zh/e/btree_gist/) | `1.7` | `FUNC` | 用GiST索引常见数据类型 |
| [btree_gin](https://pgext.cloud/zh/e/btree_gin/) | `1.3` | `FUNC` | 用GIN索引常见数据类型 |
| [intarray](https://pgext.cloud/zh/e/intarray/) | `1.5` | `FUNC` | 1维整数数组的额外函数、运算符和索引支持 |
| [intagg](https://pgext.cloud/zh/e/intagg/) | `1.1` | `FUNC` | 整数聚合器和枚举器（过时） |
| [dict_int](https://pgext.cloud/zh/e/dict_int/) | `1.0` | `FUNC` | 用于整数的文本搜索字典模板 |
| [unaccent](https://pgext.cloud/zh/e/unaccent/) | `1.1` | `FUNC` | 删除重音的文本搜索字典 |

### ADMIN

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [pg_repack](https://pgext.cloud/zh/e/pg_repack/) | `1.5.3` | `ADMIN` | 在线垃圾清理与表膨胀治理 |
| [pg_rewrite](https://pgext.cloud/zh/e/pg_rewrite/) | `2.0.0` | `ADMIN` | 在线重写整表，不阻塞读写 |
| [pg_squeeze](https://pgext.cloud/zh/e/pg_squeeze/) | `1.9.1` | `ADMIN` | 从关系中删除未使用空间 |
| [pg_dirtyread](https://pgext.cloud/zh/e/pg_dirtyread/) | `2.7` | `ADMIN` | 从表中读取尚未垃圾回收的行 |
| [pgfincore](https://pgext.cloud/zh/e/pgfincore/) | `1.3.1` | `ADMIN` | 检查和管理操作系统缓冲区缓存 |
| [pg_cooldown](https://pgext.cloud/zh/e/pg_cooldown/) | `0.1` | `ADMIN` | 从缓冲区中移除特定关系的页面 |
| [ddlx](https://pgext.cloud/zh/e/ddlx/) | `0.30` | `ADMIN` | 提取数据库对象的DDL |
| [pglinter](https://pgext.cloud/zh/e/pglinter/) | `1.1.0` | `ADMIN` | PG数据库规则检查插件 |
| [prioritize](https://pgext.cloud/zh/e/prioritize/) | `1.0.4` | `ADMIN` | 获取和设置 PostgreSQL 后端的优先级 |
| [pg_checksums](https://pgext.cloud/zh/e/pg_checksums/) | `1.3` | `ADMIN` | 在离线模式下激活/启用/禁用数据库集群的校验和功能 |
| [pg_readonly](https://pgext.cloud/zh/e/pg_readonly/) | `1.0.4` | `ADMIN` | 将集群设置为只读 |
| [pgdd](https://pgext.cloud/zh/e/pgdd/) | `0.6.1` | `ADMIN` | 提供通过标准SQL查询数据库目录集簇的能力 |
| [pg_permissions](https://pgext.cloud/zh/e/pg_permissions/) | `1.4` | `ADMIN` | 查看对象权限并将其与期望状态进行比较 |
| [pgautofailover](https://pgext.cloud/zh/e/pgautofailover/) | `2.2` | `ADMIN` | PG 自动故障迁移 |
| [pg_catcheck](https://pgext.cloud/zh/e/pg_catcheck/) | `1.6.0` | `ADMIN` | 用于诊断系统目录是否损坏的工具 |
| [pre_prepare](https://pgext.cloud/zh/e/pre_prepare/) | `0.9` | `ADMIN` | 在服务端预先准备好PreparedStatement备用 |
| [pg_upless](https://pgext.cloud/zh/e/pg_upless/) | `0.0.3` | `ADMIN` | 检测表上的无用UPDATE |
| [pgcozy](https://pgext.cloud/zh/e/pgcozy/) | `1.0` | `ADMIN` | 根据先前的pg_buffercache快照预热内存缓冲区 |
| [pg_orphaned](https://pgext.cloud/zh/e/pg_orphaned/) | `1.0` | `ADMIN` | 处理孤儿文件的扩展插件 |
| [pg_crash](https://pgext.cloud/zh/e/pg_crash/) | `1.0` | `ADMIN` | 向数据库进程随机发送信号模拟故障 |
| [pg_cheat_funcs](https://pgext.cloud/zh/e/pg_cheat_funcs/) | `1.0` | `ADMIN` | 一些超级实用的作弊函数 |
| [fio](https://pgext.cloud/zh/e/fio/) | `1.0` | `ADMIN` | PostgreSQL文件IO函数包 |
| [pg_savior](https://pgext.cloud/zh/e/pg_savior/) | `0.0.1` | `ADMIN` | 阻止不带条件的全表更新以避免意外事故 |
| [safeupdate](https://pgext.cloud/zh/e/safeupdate/) | `1.5` | `ADMIN` | 强制在 UPDATE 和 DELETE 时提供 Where 条件 |
| [pg_strict](https://pgext.cloud/zh/e/pg_strict/) | `1.0.2` | `ADMIN` | 防止不带WHERE条件的危险UPDATE和DELETE操作 |
| [pg_drop_events](https://pgext.cloud/zh/e/pg_drop_events/) | `0.1.0` | `ADMIN` | 记录删表删列删视图的事务号，辅助PITR确定时间点 |
| [table_log](https://pgext.cloud/zh/e/table_log/) | `0.6.4` | `ADMIN` | 记录某张表的修改日志并做表/行级时间点恢复 |
| [pgagent](https://pgext.cloud/zh/e/pgagent/) | `4.2.3` | `ADMIN` | PostgreSQL任务调度工具，与PGADMIN配合使用 |
| [pg_prewarm](https://pgext.cloud/zh/e/pg_prewarm/) | `1.2` | `ADMIN` | 预热关系数据 |
| [pgpool_adm](https://pgext.cloud/zh/e/pgpool_adm/) | `4.7.0` | `ADMIN` | PGPool 管理函数 |
| [pgpool_recovery](https://pgext.cloud/zh/e/pgpool_recovery/) | `4.7.0` | `ADMIN` | PGPool辅助扩展，从v4.3提供的恢复函数 |
| [pgpool_regclass](https://pgext.cloud/zh/e/pgpool_regclass/) | `4.7.0` | `ADMIN` | PGPool辅助扩展，RegClass替代 |
| [lo](https://pgext.cloud/zh/e/lo/) | `1.1` | `ADMIN` | 大对象维护 |
| [basic_archive](https://pgext.cloud/zh/e/basic_archive/) | `-` | `ADMIN` | 归档模块样例 |
| [basebackup_to_shell](https://pgext.cloud/zh/e/basebackup_to_shell/) | `-` | `ADMIN` | 添加一种备份到Shell终端到基础备份方式 |
| [old_snapshot](https://pgext.cloud/zh/e/old_snapshot/) | `1.0` | `ADMIN` | 支持 old_snapshot_threshold 的实用程序 |
| [adminpack](https://pgext.cloud/zh/e/adminpack/) | `2.1` | `ADMIN` | PostgreSQL 管理函数集合 |
| [amcheck](https://pgext.cloud/zh/e/amcheck/) | `1.4` | `ADMIN` | 校验关系完整性 |
| [pg_surgery](https://pgext.cloud/zh/e/pg_surgery/) | `1.0` | `ADMIN` | 对损坏的关系进行手术 |

### STAT

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [pg_profile](https://pgext.cloud/zh/e/pg_profile/) | `4.11` | `STAT` | PostgreSQL 数据库负载记录与AWR报表工具 |
| [pg_tracing](https://pgext.cloud/zh/e/pg_tracing/) | `0.1.3` | `STAT` | PostgreSQL分布式Tracing |
| [pg_show_plans](https://pgext.cloud/zh/e/pg_show_plans/) | `2.1.7` | `STAT` | 打印所有当前正在运行查询的执行计划 |
| [pg_stat_kcache](https://pgext.cloud/zh/e/pg_stat_kcache/) | `2.3.1` | `STAT` | 内核统计信息收集 |
| [pg_stat_monitor](https://pgext.cloud/zh/e/pg_stat_monitor/) | `2.3.1` | `STAT` | 提供查询聚合统计、客户端信息、执行计划详细信息和直方图 |
| [pg_qualstats](https://pgext.cloud/zh/e/pg_qualstats/) | `2.1.3` | `STAT` | 收集有关 quals 的统计信息的扩展 |
| [pg_store_plans](https://pgext.cloud/zh/e/pg_store_plans/) | `1.9` | `STAT` | 跟踪所有执行的 SQL 语句的计划统计信息 |
| [pg_track_settings](https://pgext.cloud/zh/e/pg_track_settings/) | `2.1.2` | `STAT` | 跟踪设置更改 |
| [pg_track_optimizer](https://pgext.cloud/zh/e/pg_track_optimizer/) | `0.9.1` | `STAT` | 跟踪规划器决策与实际执行的差距 |
| [pg_wait_sampling](https://pgext.cloud/zh/e/pg_wait_sampling/) | `1.1.9` | `STAT` | 基于采样的等待事件统计 |
| [pgsentinel](https://pgext.cloud/zh/e/pgsentinel/) | `1.4.0` | `STAT` | 活跃会话历史 |
| [system_stats](https://pgext.cloud/zh/e/system_stats/) | `3.2` | `STAT` | PostgreSQL 的系统统计函数 |
| [meta](https://pgext.cloud/zh/e/meta/) | `0.4.0` | `STAT` | 标准化，更友好的PostgreSQL系统目录视图 |
| [pgnodemx](https://pgext.cloud/zh/e/pgnodemx/) | `1.7` | `STAT` | 使用SQL查询获取操作系统指标 |
| [pg_proctab](https://pgext.cloud/zh/e/pg_proctab/) | `1.7` | `STAT` | 通过SQL接口访问操作系统进程表 |
| [pg_sqlog](https://pgext.cloud/zh/e/pg_sqlog/) | `1.6` | `STAT` | 提供访问PostgreSQL日志的SQL接口 |
| [bgw_replstatus](https://pgext.cloud/zh/e/bgw_replstatus/) | `1.0.8` | `STAT` | 用于汇报本机主从状态的后台工作进程 |
| [pgmeminfo](https://pgext.cloud/zh/e/pgmeminfo/) | `1.0.0` | `STAT` | 显示内存使用情况 |
| [toastinfo](https://pgext.cloud/zh/e/toastinfo/) | `1.5` | `STAT` | 显示TOAST字段的详细信息 |
| [explain_ui](https://pgext.cloud/zh/e/explain_ui/) | `0.0.2` | `STAT` | 快速跳转至PEV查阅可视化执行计划 |
| [pg_relusage](https://pgext.cloud/zh/e/pg_relusage/) | `0.0.1` | `STAT` | 打印查询引用的表与列 |
| [pagevis](https://pgext.cloud/zh/e/pagevis/) | `0.1` | `STAT` | 使用ASCII字符可视化数据库物理页面布局 |
| [powa](https://pgext.cloud/zh/e/powa/) | `5.1.1` | `STAT` | PostgreSQL 工作负载分析器-核心 |
| [pg_overexplain](https://pgext.cloud/zh/e/pg_overexplain/) | `1.0` | `STAT` | 允许 EXPLAIN 转储更多详细 |
| [pg_logicalinspect](https://pgext.cloud/zh/e/pg_logicalinspect/) | `1.0` | `STAT` | 检视逻辑解码组件详情 |
| [pageinspect](https://pgext.cloud/zh/e/pageinspect/) | `1.12` | `STAT` | 检查数据库页面二进制内容 |
| [pgrowlocks](https://pgext.cloud/zh/e/pgrowlocks/) | `1.2` | `STAT` | 显示行级锁信息 |
| [sslinfo](https://pgext.cloud/zh/e/sslinfo/) | `1.2` | `STAT` | 关于 SSL 证书的信息 |
| [pg_buffercache](https://pgext.cloud/zh/e/pg_buffercache/) | `1.5` | `STAT` | 检查共享缓冲区缓存 |
| [pg_walinspect](https://pgext.cloud/zh/e/pg_walinspect/) | `1.1` | `STAT` | 用于检查 PostgreSQL WAL 日志内容的函数 |
| [pg_freespacemap](https://pgext.cloud/zh/e/pg_freespacemap/) | `1.2` | `STAT` | 检查自由空间映射的内容（FSM） |
| [pg_visibility](https://pgext.cloud/zh/e/pg_visibility/) | `1.2` | `STAT` | 检查可见性图（VM）和页面级可见性信息 |
| [pgstattuple](https://pgext.cloud/zh/e/pgstattuple/) | `1.5` | `STAT` | 显示元组级统计信息 |
| [auto_explain](https://pgext.cloud/zh/e/auto_explain/) | `-` | `STAT` | 提供一种自动记录执行计划的手段 |
| [pg_stat_statements](https://pgext.cloud/zh/e/pg_stat_statements/) | `1.11` | `STAT` | 跟踪所有执行的 SQL 语句的计划和执行统计信息 |

### SEC

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [passwordcheck_cracklib](https://pgext.cloud/zh/e/passwordcheck_cracklib/) | `3.1.0` | `SEC` | 使用cracklib加固PG用户密码 |
| [supautils](https://pgext.cloud/zh/e/supautils/) | `3.1.0` | `SEC` | 用于在云环境中确保数据库集群的安全 |
| [pgsodium](https://pgext.cloud/zh/e/pgsodium/) | `3.1.9` | `SEC` | 表数据加密存储 TDE |
| [supabase_vault](https://pgext.cloud/zh/e/supabase_vault/) | `0.3.1` | `SEC` | 在 Vault 中存储加密凭证的扩展 (supabase) |
| [pg_session_jwt](https://pgext.cloud/zh/e/pg_session_jwt/) | `0.4.0` | `SEC` | 使用JWT进行会话认证 |
| [anon](https://pgext.cloud/zh/e/anon/) | `3.0.1` | `SEC` | 数据匿名化处理工具 |
| [pgsmcrypto](https://pgext.cloud/zh/e/pgsmcrypto/) | `0.1.1` | `SEC` | 为PostgreSQL提供商密算法支持：SM2,SM3,SM4 |
| [pg_enigma](https://pgext.cloud/zh/e/pg_enigma/) | `0.5.0` | `SEC` | PostgreSQL 加密数据类型 |
| [pgaudit](https://pgext.cloud/zh/e/pgaudit/) | `18.0` | `SEC` | 提供审计功能 |
| [pgauditlogtofile](https://pgext.cloud/zh/e/pgauditlogtofile/) | `1.7.6` | `SEC` | pgAudit 子扩展，将审计日志写入单独的文件中 |
| [pg_auditor](https://pgext.cloud/zh/e/pg_auditor/) | `0.2` | `SEC` | 审计数据变更并提供闪回能力 |
| [logerrors](https://pgext.cloud/zh/e/logerrors/) | `2.1.5` | `SEC` | 用于收集日志文件中消息统计信息的函数 |
| [pg_auth_mon](https://pgext.cloud/zh/e/pg_auth_mon/) | `3.0` | `SEC` | 监控每个用户的连接尝试 |
| [pg_jobmon](https://pgext.cloud/zh/e/pg_jobmon/) | `1.4.1` | `SEC` | 记录和监控函数 |
| [credcheck](https://pgext.cloud/zh/e/credcheck/) | `4.5` | `SEC` | 明文凭证检查器 |
| [pgcryptokey](https://pgext.cloud/zh/e/pgcryptokey/) | `0.85` | `SEC` | PG密钥管理 |
| [pg_pwhash](https://pgext.cloud/zh/e/pg_pwhash/) | `1.0` | `SEC` | PostgreSQL 高级密码哈希扩展（Argon2/scrypt/yescrypt） |
| [login_hook](https://pgext.cloud/zh/e/login_hook/) | `1.7` | `SEC` | 在用户登陆时执行login_hook.login()函数 |
| [set_user](https://pgext.cloud/zh/e/set_user/) | `4.2.0` | `SEC` | 增加了日志记录的 SET ROLE |
| [pg_snakeoil](https://pgext.cloud/zh/e/pg_snakeoil/) | `1.4` | `SEC` | PostgreSQL动态链接库反病毒功能 |
| [pgextwlist](https://pgext.cloud/zh/e/pgextwlist/) | `1.19` | `SEC` | PostgreSQL扩展白名单功能 |
| [sslutils](https://pgext.cloud/zh/e/sslutils/) | `1.4` | `SEC` | 使用SQL管理SSL证书 |
| [noset](https://pgext.cloud/zh/e/noset/) | `0.3.0` | `SEC` | 阻止非超级用户使用SET/RESET设置变量 |
| [pg_tde](https://pgext.cloud/zh/e/pg_tde/) | `1.0` | `SEC` | Percona加密存储引擎 |
| [sepgsql](https://pgext.cloud/zh/e/sepgsql/) | `-` | `SEC` | 基于SELinux标签的强制访问控制 |
| [auth_delay](https://pgext.cloud/zh/e/auth_delay/) | `-` | `SEC` | 在返回认证失败前暂停一会，避免爆破 |
| [pgcrypto](https://pgext.cloud/zh/e/pgcrypto/) | `1.3` | `SEC` | 实用加解密函数 |
| [passwordcheck](https://pgext.cloud/zh/e/passwordcheck/) | `-` | `SEC` | 用于强制拒绝修改弱密码的扩展 |

### FDW

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [wrappers](https://pgext.cloud/zh/e/wrappers/) | `0.5.7` | `FDW` | Supabase提供的外部数据源包装器捆绑包 |
| [multicorn](https://pgext.cloud/zh/e/multicorn/) | `3.2` | `FDW` | 用Python编写自定义的外部数据源包装器 |
| [odbc_fdw](https://pgext.cloud/zh/e/odbc_fdw/) | `0.5.1` | `FDW` | 访问ODBC可访问的任何外部数据源 |
| [jdbc_fdw](https://pgext.cloud/zh/e/jdbc_fdw/) | `0.4.0` | `FDW` | 访问JDBC可访问的任何外部数据源 |
| [pgspider_ext](https://pgext.cloud/zh/e/pgspider_ext/) | `1.3.0` | `FDW` | 使用多种FDW访问远程数据库服务器 |
| [mysql_fdw](https://pgext.cloud/zh/e/mysql_fdw/) | `2.9.3` | `FDW` | MySQL外部数据包装器 |
| [oracle_fdw](https://pgext.cloud/zh/e/oracle_fdw/) | `2.8.0` | `FDW` | 提供对Oracle的外部数据源包装器 |
| [tds_fdw](https://pgext.cloud/zh/e/tds_fdw/) | `2.0.5` | `FDW` | TDS 数据库（Sybase/SQL Server）外部数据包装器 |
| [db2_fdw](https://pgext.cloud/zh/e/db2_fdw/) | `18.1.1` | `FDW` | 提供对DB2的外部数据源包装器 |
| [sqlite_fdw](https://pgext.cloud/zh/e/sqlite_fdw/) | `2.5.0` | `FDW` | SQLite 外部数据包装器 |
| [pgbouncer_fdw](https://pgext.cloud/zh/e/pgbouncer_fdw/) | `1.4.0` | `FDW` | 用SQL查询pgbouncer统计信息，并执行pgbouncer命令 |
| [etcd_fdw](https://pgext.cloud/zh/e/etcd_fdw/) | `0.0.0` | `FDW` | etcd分布式键值存储外部数据包装器 |
| [informix_fdw](https://pgext.cloud/zh/e/informix_fdw/) | `0.6.3` | `FDW` | Informix 外部数据包装器 |
| [nominatim_fdw](https://pgext.cloud/zh/e/nominatim_fdw/) | `1.1.0` | `FDW` | Nominatim 地理编码接口的 FDW 扩展 |
| [mongo_fdw](https://pgext.cloud/zh/e/mongo_fdw/) | `5.5.3` | `FDW` | MongoDB 外部数据包装器 |
| [redis_fdw](https://pgext.cloud/zh/e/redis_fdw/) | `1.0` | `FDW` | 查询外部Redis数据源 |
| [redis](https://pgext.cloud/zh/e/redis/) | `0.0.1` | `FDW` | 从PG向Redis发送Pub/Sub消息 |
| [kafka_fdw](https://pgext.cloud/zh/e/kafka_fdw/) | `0.0.3` | `FDW` | Kafka外部数据源包装器 |
| [hdfs_fdw](https://pgext.cloud/zh/e/hdfs_fdw/) | `2.3.3` | `FDW` | hdfs 外部数据包装器 |
| [firebird_fdw](https://pgext.cloud/zh/e/firebird_fdw/) | `1.4.1` | `FDW` | Firebird外部数据源包装器 |
| [aws_s3](https://pgext.cloud/zh/e/aws_s3/) | `0.0.1` | `FDW` | 从S3导入导出数据的外部数据源包装器 |
| [log_fdw](https://pgext.cloud/zh/e/log_fdw/) | `1.4` | `FDW` | 访问PostgreSQL日志文件的FDW |
| [dblink](https://pgext.cloud/zh/e/dblink/) | `1.2` | `FDW` | 从数据库内连接到其他 PostgreSQL 数据库 |
| [file_fdw](https://pgext.cloud/zh/e/file_fdw/) | `1.0` | `FDW` | 访问外部文件的外部数据包装器 |
| [postgres_fdw](https://pgext.cloud/zh/e/postgres_fdw/) | `1.1` | `FDW` | 用于远程 PostgreSQL 服务器的外部数据包装器 |

### SIM

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [documentdb](https://pgext.cloud/zh/e/documentdb/) | `0.109` | `SIM` | 微软DocumentDB的API层 |
| [documentdb_core](https://pgext.cloud/zh/e/documentdb_core/) | `0.109` | `SIM` | 微软DocumentDB的核心API层实现 |
| [documentdb_distributed](https://pgext.cloud/zh/e/documentdb_distributed/) | `0.109` | `SIM` | DocumentDB多节点模式的API层 |
| [documentdb_extended_rum](https://pgext.cloud/zh/e/documentdb_extended_rum/) | `0.109` | `SIM` | DocumentDB扩展RUM索引访问方法 |
| [orafce](https://pgext.cloud/zh/e/orafce/) | `4.16.3` | `SIM` | 模拟 Oracle RDBMS 的一部分函数和包的函数和运算符 |
| [pgtt](https://pgext.cloud/zh/e/pgtt/) | `4.4` | `SIM` | 类似Oracle的全局临时表功能 |
| [session_variable](https://pgext.cloud/zh/e/session_variable/) | `3.4` | `SIM` | Oracle兼容的会话变量/常量操作函数 |
| [pg_statement_rollback](https://pgext.cloud/zh/e/pg_statement_rollback/) | `1.5` | `SIM` | 在服务端提供类似Oracle/DB2的语句级回滚能力 |
| [pg_dbms_metadata](https://pgext.cloud/zh/e/pg_dbms_metadata/) | `1.0.0` | `SIM` | 添加 Oracle DBMS_METADATA 兼容性支持的扩展 |
| [pg_dbms_lock](https://pgext.cloud/zh/e/pg_dbms_lock/) | `1.0` | `SIM` | 为PG添加对 Oracle DBMS_LOCK 的完整兼容性支持 |
| [pg_dbms_job](https://pgext.cloud/zh/e/pg_dbms_job/) | `1.5` | `SIM` | 添加 Oracle DBMS_JOB 兼容性支持的扩展 |
| [pg_dbms_errlog](https://pgext.cloud/zh/e/pg_dbms_errlog/) | `2.2` | `SIM` | 模仿 Oracle DBMS_ERRLOG 模块来记录特定表的DML错误 |
| [pg_utl_smtp](https://pgext.cloud/zh/e/pg_utl_smtp/) | `1.0.0` | `SIM` | Oracle UTL_SMTP 兼容扩展（基于 plperlu） |
| [babelfishpg_common](https://pgext.cloud/zh/e/babelfishpg_common/) | `3.3.3` | `SIM` | SQL Server 数据类型兼容扩展 |
| [babelfishpg_tsql](https://pgext.cloud/zh/e/babelfishpg_tsql/) | `3.3.1` | `SIM` | SQL Server SQL语法兼容性扩展 |
| [babelfishpg_tds](https://pgext.cloud/zh/e/babelfishpg_tds/) | `1.0.0` | `SIM` | SQL Server TDS线缆协议兼容扩展 |
| [babelfishpg_money](https://pgext.cloud/zh/e/babelfishpg_money/) | `1.1.0` | `SIM` | SQL Server 货币数据类型兼容扩展 |
| [spat](https://pgext.cloud/zh/e/spat/) | `0.1.0a4` | `SIM` | 在PG中嵌入Redis风格的内存数据库 |
| [pgmemcache](https://pgext.cloud/zh/e/pgmemcache/) | `2.3.0` | `SIM` | 为PG提供memcached兼容接口 |

### ETL

| 扩展版名称 | 版本号 | 分类 | 说明 |
|:---|:---|:---:|:---|
| [pglogical](https://pgext.cloud/zh/e/pglogical/) | `2.4.6` | `ETL` | PostgreSQL逻辑复制：三方扩展实现 |
| [pglogical_origin](https://pgext.cloud/zh/e/pglogical_origin/) | `2.4.6` | `ETL` | 用于从 Postgres 9.4 升级时的兼容性虚拟扩展 |
| [pglogical_ticker](https://pgext.cloud/zh/e/pglogical_ticker/) | `1.4.1` | `ETL` | pglogical复制延迟以秒计的精确视图 |
| [pgl_ddl_deploy](https://pgext.cloud/zh/e/pgl_ddl_deploy/) | `2.2.1` | `ETL` | 使用 pglogical 执行自动 DDL 部署 |
| [pg_failover_slots](https://pgext.cloud/zh/e/pg_failover_slots/) | `1.2.0` | `ETL` | 在Failover过程中保留复制槽 |
| [db_migrator](https://pgext.cloud/zh/e/db_migrator/) | `1.0.0` | `ETL` | 使用FDW从其他DBMS迁移到PostgreSQL |
| [pgactive](https://pgext.cloud/zh/e/pgactive/) | `2.1.7` | `ETL` | PostgreSQL多主逻辑复制 |
| [wal2json](https://pgext.cloud/zh/e/wal2json/) | `2.6` | `ETL` | 用逻辑解码捕获 JSON 格式的 CDC 变更 |
| [wal2mongo](https://pgext.cloud/zh/e/wal2mongo/) | `1.0.7` | `ETL` | 使用逻辑解码捕获MongoDB JSON格式的CDC变更 |
| [decoderbufs](https://pgext.cloud/zh/e/decoderbufs/) | `3.4.0` | `ETL` | 将WAL逻辑解码为ProtocolBuffer协议的消息 |
| [decoder_raw](https://pgext.cloud/zh/e/decoder_raw/) | `1.0` | `ETL` | 逻辑复制解码输出插件：RAW SQL格式 |
| [mimeo](https://pgext.cloud/zh/e/mimeo/) | `1.5.1` | `ETL` | 在PostgreSQL实例间进行表级复制 |
| [repmgr](https://pgext.cloud/zh/e/repmgr/) | `5.5.0` | `ETL` | PostgreSQL复制管理组件 |
| [pg_fact_loader](https://pgext.cloud/zh/e/pg_fact_loader/) | `2.0.1` | `ETL` | 在 Postgres 中构建事实表 |
| [pg_bulkload](https://pgext.cloud/zh/e/pg_bulkload/) | `3.1.23` | `ETL` | 向 PostgreSQL 中高速加载数据 |
| [test_decoding](https://pgext.cloud/zh/e/test_decoding/) | `-` | `ETL` | 基于SQL的WAL逻辑解码样例 |
| [pgoutput](https://pgext.cloud/zh/e/pgoutput/) | `-` | `ETL` | PG内置的逻辑解码输出插件 |

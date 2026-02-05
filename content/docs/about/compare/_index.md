---
title: 同类对比
weight: 170
description: 本文列出了与 Pigsty 生态位有重叠的产品与项目，并比较其在特性上的差异。
icon: fa-solid fa-circle-half-stroke
module: [INFRA]
categories: [参考]
---


------------------

## 与 RDS 对比

[Pigsty](https://pigsty.io) 是使用 Apache-2.0 开源的本地优先 RDS 替代，可以部署在您自己的物理机/虚拟机上，也可以部署在云服务器上。

因此，我们选择了全球份额第一的亚马逊云 [AWS RDS for PostgreSQL](https://aws.amazon.com/cn/rds/postgresql/)，以及中国市场份额第一的阿里云 [RDS for PostgreSQL](https://www.alibabacloud.com/zh/product/apsaradb-for-rds-postgresql) 作为参照对象。

阿里云 RDS 与 AWS RDS 均为闭源云数据库服务，通过租赁模式，仅在公有云上对外提供，以下对比基于最新的 PostgreSQL 16 主干版本进行，对比截止日期为 2024 年 2 月份。  


-----------

### 功能特性

| **指标** | **Pigsty**                                                                  | **Aliyun RDS**                                                             | **AWS RDS**                                                                      |
|--------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| 大版本支持  | 13 - 18                                                                     | 13 - 18                                                                    | 13 - 18                                                                          |
| 只读从库   | <i class="fas fa-circle-check text-success"></i> 支持任意数量只读从库                 | <i class="fas fa-circle-xmark text-danger"></i> 备实例不对用户开放                  | <i class="fas fa-circle-xmark text-danger"></i> 备实例不对用户开放                        |
| 读写分离   | <i class="fas fa-circle-check text-success"></i> 支持端口区分读写流量                 | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 独立收费组件     | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 独立收费组件           |
| 快慢分离   | <i class="fas fa-circle-check text-success"></i> 支持离线 ETL 实例                | <i class="fas fa-circle-xmark text-danger"></i> 未见相关特性                     | <i class="fas fa-circle-xmark text-danger"></i> 未见相关特性                           |
| 异地灾备   | <i class="fas fa-circle-check text-success"></i> 支持备份集群                     | <i class="fas fa-circle-check text-success"></i> 支持多可用区部署                  | <i class="fas fa-circle-check text-success"></i> 支持多可用区部署                        |
| 延迟从库   | <i class="fas fa-circle-check text-success"></i> 支持延迟实例                     | <i class="fas fa-circle-xmark text-danger"></i> 未见相关特性                     | <i class="fas fa-circle-xmark text-danger"></i> 未见相关特性                           |
| 负载均衡   | <i class="fas fa-circle-check text-success"></i> HAProxy / LVS              | <i class="fas fa-circle-check text-success"></i> 独立收费组件                    | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 独立收费组件           |
| 连接池    | <i class="fas fa-circle-check text-success"></i> Pgbouncer                  | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 独立收费组件：RDS | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 独立收费组件：RDS Proxy |
| 高可用    | <i class="fas fa-circle-check text-success"></i> Patroni / etcd             | <i class="fas fa-circle-check text-success"></i> 需高可用版提供支持                 | <i class="fas fa-circle-check text-success"></i> 需高可用版提供支持                       |
| 时间点恢复  | <i class="fas fa-circle-check text-success"></i> pgBackRest / MinIO         | <i class="fas fa-circle-check text-success"></i> 提供备份支持                    | <i class="fas fa-circle-check text-success"></i> 提供备份支持                          |
| 指标监控   | <i class="fas fa-circle-check text-success"></i> VictoriaMetrics / Exporter | <i class="fas fa-circle-check text-secondary"></i> 免费基础版/收费进阶版             | <i class="fas fa-circle-check text-secondary"></i>  免费基础版/收费进阶版                  |
| 日志采集   | <i class="fas fa-circle-check text-success"></i> VictoriaLogs / Vector      | <i class="fas fa-circle-check text-success"></i>  基础支持                     | <i class="fas fa-circle-check text-success"></i> 基础支持                            |
| 可视化系统  | <i class="fas fa-circle-check text-success"></i> Grafana / Echarts          | <i class="fas fa-circle-check text-secondary"></i> 提供基本监控                  | <i class="fas fa-circle-check text-secondary"></i> 提供基本监控                        |
| 告警聚合通知 | <i class="fas fa-circle-check text-success"></i> AlterManager               | <i class="fas fa-circle-check text-success"></i> 基础支持                      | <i class="fas fa-circle-check text-success"></i> 基础支持                            |
{.full-width}


----------

### 重要扩展

这里列出了一些重要扩展，对比基于最新的 PostgreSQL 16 主干版本进行，截止至 2024-02-28

- [**Pigsty 扩展列表**](https://pgext.cloud/zh/list/)
- [**AWS RDS 扩展列表**](https://docs.aws.amazon.com/AmazonRDS/latest/PostgreSQLReleaseNotes/postgresql-extensions.html):
- [**阿里云 RDS 扩展列表**](https://help.aliyun.com/zh/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql)

| **扩展名称** | **Pigsty RDS** / PGDG 官方仓库                                                      |                                **阿里云 RDS**                                 |                           **AWS RDS**                            |
|----------|---------------------------------------------------------------------------------|:--------------------------------------------------------------------------:|:----------------------------------------------------------------:|
| 加装扩展     | <i class="fas fa-circle-check text-success"></i> 自由加装                           |            <i class="fas fa-circle-xmark text-danger"></i> 不允许             |       <i class="fas fa-circle-xmark text-danger"></i> 不允许        |
| 地理空间     | <i class="fas fa-circle-check text-success"></i> PostGIS 3.4.2                  | <i class="fas fa-circle-check text-success"></i> PostGIS 3.3.4 / Ganos 6.1 |  <i class="fas fa-circle-check text-success"></i> PostGIS 3.4.1  |
| 雷达点云     | <i class="fas fa-circle-check text-success"></i> PG PointCloud 1.2.5            |   <i class="fas fa-circle-check text-success"></i> Ganos PointCloud 6.1    |         <i class="fas fa-circle-xmark text-danger"></i>          |
| 向量嵌入     | <i class="fas fa-circle-check text-success"></i> PGVector 0.6.1 / Svector 0.5.6 |   <i class="fas fa-triangle-exclamation text-secondary"></i> pase 0.0.1    |  <i class="fas fa-circle-check text-success"></i> PGVector 0.6   |
| 机器学习     | <i class="fas fa-circle-check text-success"></i> PostgresML 2.8.1               |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| 时序扩展     | <i class="fas fa-circle-check text-success"></i> TimescaleDB 2.14.2             |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| 水平分布式    | <i class="fas fa-circle-check text-success"></i> Citus 12.1                     |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| 列存扩展     | <i class="fas fa-circle-check text-success"></i> Hydra 1.1.1                    |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| 全文检索     | <i class="fas fa-circle-check text-success"></i> pg_bm25 0.5.6<br />            |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| 图数据库     | <i class="fas fa-circle-check text-success"></i> Apache AGE 1.5.0               |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| GraphQL  | <i class="fas fa-circle-check text-success"></i> PG GraphQL 1.5.0               |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| OLAP     | <i class="fas fa-circle-check text-success"></i> pg_analytics 0.5.6             |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| 消息队列     | <i class="fas fa-circle-check text-success"></i> pgq 3.5.0                      |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| DuckDB   | <i class="fas fa-circle-check text-success"></i> duckdb_fdw 1.1                 |              <i class="fas fa-circle-xmark text-danger"></i>               |         <i class="fas fa-circle-xmark text-danger"></i>          |
| 模糊分词     | <i class="fas fa-circle-check text-success"></i> zhparser 1.1 / pg_bigm 1.2     |  <i class="fas fa-circle-check text-success"></i> zhparser 1.0 / pg_jieba  |   <i class="fas fa-circle-check text-success"></i> pg_bigm 1.2   |
| CDC抽取    | <i class="fas fa-circle-check text-success"></i> wal2json 2.5.3                 |              <i class="fas fa-circle-xmark text-danger"></i>               |  <i class="fas fa-circle-check text-success"></i> wal2json 2.5   |
| 膨胀治理     | <i class="fas fa-circle-check text-success"></i> pg_repack 1.5.0                |      <i class="fas fa-circle-check text-success"></i> pg_repack 1.4.8      | <i class="fas fa-circle-check text-success"></i> pg_repack 1.5.0 |
{.full-width}

<details><summary>AWS RDS PG 可用扩展</summary>

AWS RDS for PostgreSQL 16 可用扩展（已刨除PG自带扩展）

| name                 | pg16 | pg15 | pg14 | pg13 | pg12 | pg11 | pg10 |
|:---------------------|:-----|:-----|:-----|:-----|:-----|:-----|:-----|
| amcheck              | 1.3  | 1.3  | 1.3  | 1.2  | 1.2  | yes  | 1    |
| auto\_explain        | yes  | yes  | yes  | yes  | yes  | yes  | yes  |
| autoinc              | 1    | 1    | 1    | 1    | null | null | null |
| bloom                | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| bool\_plperl         | 1    | 1    | 1    | 1    | null | null | null |
| btree\_gin           | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.2  |
| btree\_gist          | 1.7  | 1.7  | 1.6  | 1.5  | 1.5  | 1.5  | 1.5  |
| citext               | 1.6  | 1.6  | 1.6  | 1.6  | 1.6  | 1.5  | 1.4  |
| cube                 | 1.5  | 1.5  | 1.5  | 1.4  | 1.4  | 1.4  | 1.2  |
| dblink               | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  |
| dict\_int            | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| dict\_xsyn           | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| earthdistance        | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  |
| fuzzystrmatch        | 1.2  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  |
| hstore               | 1.8  | 1.8  | 1.8  | 1.7  | 1.6  | 1.5  | 1.4  |
| hstore\_plperl       | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| insert\_username     | 1    | 1    | 1    | 1    | null | null | null |
| intagg               | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  |
| intarray             | 1.5  | 1.5  | 1.5  | 1.3  | 1.2  | 1.2  | 1.2  |
| isn                  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.1  |
| jsonb\_plperl        | 1    | 1    | 1    | 1    | 1    | null | null |
| lo                   | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  |
| ltree                | 1.2  | 1.2  | 1.2  | 1.2  | 1.1  | 1.1  | 1.1  |
| moddatetime          | 1    | 1    | 1    | 1    | null | null | null |
| old\_snapshot        | 1    | 1    | 1    | null | null | null | null |
| pageinspect          | 1.12 | 1.11 | 1.9  | 1.8  | 1.7  | 1.7  | 1.6  |
| pg\_buffercache      | 1.4  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  |
| pg\_freespacemap     | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  |
| pg\_prewarm          | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.1  |
| pg\_stat\_statements | 1.1  | 1.1  | 1.9  | 1.8  | 1.7  | 1.6  | 1.6  |
| pg\_trgm             | 1.6  | 1.6  | 1.6  | 1.5  | 1.4  | 1.4  | 1.3  |
| pg\_visibility       | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  |
| pg\_walinspect       | 1.1  | 1    | null | null | null | null | null |
| pgcrypto             | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  |
| pgrowlocks           | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  |
| pgstattuple          | 1.5  | 1.5  | 1.5  | 1.5  | 1.5  | 1.5  | 1.5  |
| plperl               | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| plpgsql              | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| pltcl                | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| postgres\_fdw        | 1.1  | 1.1  | 1.1  | 1    | 1    | 1    | 1    |
| refint               | 1    | 1    | 1    | 1    | null | null | null |
| seg                  | 1.4  | 1.4  | 1.4  | 1.3  | 1.3  | 1.3  | 1.1  |
| sslinfo              | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  |
| tablefunc            | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| tcn                  | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
| tsm\_system\_rows    | 1    | 1    | 1    | 1    | 1    | 1    | 1.1  |
| tsm\_system\_time    | 1    | 1    | 1    | 1    | 1    | 1    | 1.1  |
| unaccent             | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  |
| uuid-ossp            | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  |


</details>


<details><summary>Aliyun RDS PG 可用扩展</summary>

阿里云 RDS for PostgreSQL 16 可用扩展（已刨除PG自带扩展） 

| name                 | pg16 | pg15 | pg14 | pg13 | pg12 | pg11 | pg10 | ali\_desc                                |
|:---------------------|:-----|:-----|:-----|:-----|:-----|:-----|:-----|:-----------------------------------------|
| bloom                | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 提供一种基于布鲁姆过滤器的索引访问方法。                     |
| btree\_gin           | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.2  | 提供一个为多种数据类型和所有enum类型实现B树等价行为的GIN操作符类示例。  |
| btree\_gist          | 1.7  | 1.7  | 1.6  | 1.5  | 1.5  | 1.5  | 1.5  | 提供一个为多种数据类型和所有enum类型实现B树等价行为的GiST操作符类示例。 |
| citext               | 1.6  | 1.6  | 1.6  | 1.6  | 1.6  | 1.5  | 1.4  | 提供一种大小写不敏感的字符串类型。                        |
| cube                 | 1.5  | 1.5  | 1.5  | 1.4  | 1.4  | 1.4  | 1.2  | 提供一种数据类型来表示多维立方体。                        |
| dblink               | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 跨库操作表。                                   |
| dict\_int            | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 附加全文搜索词典模板的示例。                           |
| earthdistance        | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 提供两种不同的方法来计算地球表面的大圆距离。                   |
| fuzzystrmatch        | 1.2  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 判断字符串之间的相似性和距离。                          |
| hstore               | 1.8  | 1.8  | 1.8  | 1.7  | 1.6  | 1.5  | 1.4  | 在单一PostgreSQL值中存储键值对。                    |
| intagg               | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 提供一个整数聚集器和一个枚举器。                         |
| intarray             | 1.5  | 1.5  | 1.5  | 1.3  | 1.2  | 1.2  | 1.2  | 提供一些有用的函数和操作符来操纵不含空值的整数数组。               |
| isn                  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.1  | 按照一个硬编码的前缀列表对输入进行验证，也被用来在输出时连接号码。        |
| ltree                | 1.2  | 1.2  | 1.2  | 1.2  | 1.1  | 1.1  | 1.1  | 用于表示存储在一个层次树状结构中的数据的标签。                  |
| pg\_buffercache      | 1.4  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 提供一种方法实时检查共享缓冲区。                         |
| pg\_freespacemap     | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 检查空闲空间映射（FSM）。                           |
| pg\_prewarm          | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.1  | 提供一种方便的方法把数据载入到操作系统缓冲区或者PostgreSQL缓冲区。   |
| pg\_stat\_statements | 1.1  | 1.1  | 1.9  | 1.8  | 1.7  | 1.6  | 1.6  | 提供一种方法追踪服务器执行的所有SQL语句的执行统计信息。            |
| pg\_trgm             | 1.6  | 1.6  | 1.6  | 1.5  | 1.4  | 1.4  | 1.3  | 提供字母数字文本相似度的函数和操作符，以及支持快速搜索相似字符串的索引操作符类。 |
| pgcrypto             | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 1.3  | 为PostgreSQL提供了密码函数。                      |
| pgrowlocks           | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 提供一个函数来显示一个指定表的行锁定信息。                    |
| pgstattuple          | 1.5  | 1.5  | 1.5  | 1.5  | 1.5  | 1.5  | 1.5  | 提供多种函数来获得元组层的统计信息。                       |
| plperl               | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 提供perl过程语言。                              |
| plpgsql              | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 提供SQL过程语言。                               |
| pltcl                | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 提供tcl过程语言。                               |
| postgres\_fdw        | 1.1  | 1.1  | 1.1  | 1    | 1    | 1    | 1    | 跨库操作表。                                   |
| sslinfo              | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 1.2  | 提供当前客户端提供的 SSL 证书的有关信息。                  |
| tablefunc            | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 包括多个返回表的函数。                              |
| tsm\_system\_rows    | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 提供表采样方法SYSTEM\_ROWS。                     |
| tsm\_system\_time    | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 提供了表采样方法SYSTEM\_TIME。                    |
| unaccent             | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 文本搜索字典，它能从词位中移除重音（附加符号）。                 |
| uuid-ossp            | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 提供函数使用几种标准算法之一产生通用唯一标识符（UUID）。           |
| xml2                 | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 1.1  | 提供XPath查询和XSLT功能。                        |


</details>




-----------

### 性能对比

| **指标**       | **Pigsty**                                                                                   | **Aliyun RDS**                                                                                          | **AWS RDS**                                                                                                                                                         |
|--------------|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 最佳性能         | [PGTPC on NVME SSD 评测](https://github.com/Vonng/pgtpc/tree/master/sysbench) sysbench oltp_rw | [RDS PG 性能白皮书](https://help.aliyun.com/document_detail/101470.html) sysbench oltp 场景 每核 QPS 4000 ~ 8000 |                                                                                                                                                                     |
| 存储规格：最高档容量   | 32TB / [NVME SSD](https://en.shannon-sys.com/product.html?name=gen_4)                        | 32 TB / **ESSD PL3**                                                                                    | 64 TB / **io2** [EBS](https://aws.amazon.com/cn/blogs/storage/achieve-higher-database-performance-using-amazon-ebs-io2-block-express-volumes/) Block Express        |
| 存储规格：最高档IOPS | 4K随机读：最大3M，随机写 2000~350K                                                                     | 4K随机读：最大 1M                                                                                             | 16K随机IOPS： 256K                                                                                                                                                     |
| 存储规格：最高档延迟   | 4K随机读：75µs，随机写 15µs                                                                          | 4K随机读：200µs                                                                                             | 500µs / 推断为16K随机IO                                                                                                                                                  |
| 存储规格：最高档可靠性  | UBER < 1e-18，折合18个9 MTBF: 200万小时 5DWPD，持续三年                                                  | 可靠性 9个9， 合 UBER 1e-9 [存储与数据可靠性](https://help.aliyun.com/document_detail/476273.html)                    | **持久性**：99.999%，5个9 （0.001% 年故障率） [io2 说明](https://aws.amazon.com/cn/blogs/storage/achieve-higher-database-performance-using-amazon-ebs-io2-block-express-volumes/) |
| 存储规格：最高档成本   | 31.5 ¥/TB·月 ( 5年质保均摊 / 3.2T / 企业级 / MLC )                                                    | 3200¥/TB·月 （原价 6400¥，包月4000¥） 3年预付整体打5折才有此价格                                                            | 1900 ¥/TB·月 使用最大规格 65536GB / 256K IOPS 最大优惠                                                                                                                         |
{.full-width}

-----------

### 可观测性

Pigsty 提供了近 3000 类监控指标，提供了 50+ 监控面板，覆盖了数据库监控、主机监控、连接池监控、负载均衡监控等方方面面，为用户提供无与伦比的可观测性体验。

![](/img/pigsty/dashboard.jpg)

Pigsty 提供了 638 与 PostgreSQL 有关的监控指标，而 AWS RDS 只有 99 个，阿里云 RDS 更是只有个位数指标：

![](/img/docs/compare/aliyun.png)

此外，也有一些项目提供了监控 PostgreSQL 的能力，但都相对比较简单初级：

- [pgwatch](https://pgwatch.com/)： 123 类指标
- [pgmonitor](https://github.com/CrunchyData/pgmonitor) ： 156 类指标
- [datadog](https://docs.datadoghq.com/integrations/postgres) ： 69 类指标
- [pgDash](https://pgdash.io/)
- [ClusterControl](https://severalnines.com/product/clustercontrol)
- [pganalyze](https://pganalyze.com/)
- [Aliyun RDS](https://help.aliyun.com/document_detail/102748.html) ： 8 类指标
- [AWS RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html) ： 99 类指标
- [Azure RDS](https://docs.microsoft.com/en-us/azure/postgresql/)


-----------

### 可维护性

| **指标**        | **Pigsty**                              | **Aliyun RDS**                                                                                                        | **AWS RDS**   |
|---------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------|---------------|
| 系统易用性         | 简单                                      | 简单                                                                                                                    | 简单            |
| 配置管理          | 配置文件 / CMDB 基于 Ansible Inventory        | 可使用 Terraform                                                                                                         | 可使用 Terraform |
| 变更方式          | 幂等剧本 基于 Ansible Playbook                | 控制台点击操作                                                                                                               | 控制台点击操作       |
| 参数调优          | 自动根据节点适配 四种预置模板 OLTP, OLAP, TINY, CRIT  |                                                                                                                       |               |
| Infra as Code | 原生支持                                    | 可使用 Terraform                                                                                                         | 可使用 Terraform |
| 可定制参数点        | [Pigsty Parameters](/docs/conf) 283 个   |                                                                                                                       |               |
| 服务与支持         | 提供商业订阅支持兜底                              | 提供售后工单支持                                                                                                              | 提供售后工单支持      |
| 无互联网部署        | 可离线安装部署                                 | N/A                                                                                                                   | N/A           |
| 数据库迁移         | 提供从现有v10+ PG实例基于逻辑复制不停机迁移至Pigsty托管实例的剧本 | 提供上云辅助迁移 [Aliyun RDS 数据同步](https://help.aliyun.com/document_detail/322179.html?spm=a2c4g.11186623.0.0.5fb374c9OOi4Dm) |               |
{.full-width}

-----------

### 成本

经验上看，软硬件资源的部分 RDS 单位成本是自建的 5 ～ 15 倍，租售比通常在一个月。详情请参考 [**成本分析**](/docs/about/compare/cost/)。

| 要素 | **指标**    | **Pigsty**           | **Aliyun RDS**  | **AWS RDS**      |
|----|-----------|----------------------|-----------------|------------------|
| 成本 | 软件授权/服务费用 | 免费，硬件约 20 - 40 ¥/核·月 | 200 ～ 400 ¥/核·月 | 400 ~ 1300 ¥/核·月 |
|    | 服务支持费用    | 服务约 100 ¥/ 核·月       | 包含在 RDS 成本中     |                  |
{.full-width}

------------------

## 其他本地数据库管控软件

一些提供管理 PostgreSQL 能力的软件与供应商

- [Aiven](https://aiven.io/)： 闭源商业云托管方案
- [Percona](https://www.percona.com/software/postgresql-distribution)： 商业咨询，简易PG发行版
- [ClusterControl](https://docs.severalnines.com/docs/clustercontrol/)：商业数据库管控软件

------------------

## 其他 Kubernetes Operator

Pigsty 拒绝在生产环境中使用 Kubernetes 管理数据库，因此与这些方案在生态位上存在差异。

- PGO
- StackGres
- CloudNativePG
- TemboOperator
- PostgresOperator
- PerconaOperator
- Kubegres
- KubeDB
- KubeBlocks

更多信息请参阅：

- 《[将数据库放入K8S中是一个好主意吗？](/blog/db/db-in-k8s/)》
- 《[将数据库放入容器中是一个好主意吗？](/blog/db/pg-in-docker/)》
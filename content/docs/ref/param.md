---
title: 参数列表
weight: 475
description: Pigsty 配置参数总览与导航
icon: fa-solid fa-sliders
categories: [参考]
---

Pigsty 提供了约 **380+** 个配置参数，分布在 8 个默认模块中，用于精细控制系统的各个方面。

## 总览

本页面提供 Pigsty 所有配置参数的导航与概览，点击模块名称可以跳转到对应的详细参数文档。

| 模块                               | 参数组 | 参数总数 | 说明                                |
|:---------------------------------|:---:|:----:|:----------------------------------|
| [**PGSQL**](/docs/pgsql/param)   |  9  | 125  | PostgreSQL 数据库集群的核心配置             |
| [**INFRA**](/docs/infra/param)   | 10  |  82  | 基础设施组件：软件源、Nginx、DNS、监控、Grafana 等 |
| [**NODE**](/docs/node/param)     | 11  |  83  | 主机节点调优：身份、DNS、包、调优、安全、管理员、时间、VIP等 |
| [**ETCD**](/docs/etcd/param)     |  2  |  13  | 分布式配置存储与服务发现                      |
| [**REDIS**](/docs/redis/param)   |  1  |  21  | Redis 缓存与数据结构服务器                  |
| [**MINIO**](/docs/minio/param)   |  2  |  21  | S3 兼容对象存储服务                       |
| [**FERRET**](/docs/ferret/param) |  1  |  9   | MongoDB 兼容数据库 FerretDB            |
| [**DOCKER**](/docs/docker/param) |  1  |  8   | Docker 容器引擎                       |
{.stretch-last}

--------

## PGSQL

[`PGSQL`](/docs/pgsql) 模块提供了 **9 组共 125 个** PostgreSQL 相关配置参数。

| 参数组                                              | 参数数 | 说明                             |
|:-------------------------------------------------|:---:|:-------------------------------|
| [`PG_ID`](/docs/pgsql/param#pg_id)               | 11  | PostgreSQL 集群与实例的身份标识参数        |
| [`PG_BUSINESS`](/docs/pgsql/param#pg_business)   | 13  | 业务用户、数据库、服务与访问控制规则定义           |
| [`PG_INSTALL`](/docs/pgsql/param#pg_install)     | 10  | PostgreSQL 安装相关：版本、路径、软件包      |
| [`PG_BOOTSTRAP`](/docs/pgsql/param#pg_bootstrap) | 39  | PostgreSQL 集群初始化引导：Patroni 高可用 |
| [`PG_PROVISION`](/docs/pgsql/param#pg_provision) |  8  | PostgreSQL 集群模板置备：角色、权限、扩展     |
| [`PG_BACKUP`](/docs/pgsql/param#pg_backup)       |  6  | pgBackRest 备份与恢复配置             |
| [`PG_ACCESS`](/docs/pgsql/param#pg_access)       | 17  | 服务暴露、连接池、VIP、DNS 等客户端访问配置      |
| [`PG_MONITOR`](/docs/pgsql/param#pg_monitor)     | 17  | PostgreSQL 监控 Exporter 配置      |
| [`PG_REMOVE`](/docs/pgsql/param#pg_remove)       |  4  | PostgreSQL 实例清理与卸载配置           |
{.stretch-last}

--------

## INFRA

[`INFRA`](/docs/infra) 模块提供了 **10 组共 82 个** 基础设施相关配置参数。

| 参数组                                                    | 参数数 | 说明                                      |
|:-------------------------------------------------------|:---:|:----------------------------------------|
| [`META`](/docs/infra/param#meta)                       |  5  | Pigsty 元信息：版本、管理IP、区域、语言、代理             |
| [`CA`](/docs/infra/param#ca)                           |  3  | 自签名 CA 证书管理                             |
| [`INFRA_ID`](/docs/infra/param#infra_id)               |  3  | 基础设施节点身份标识与服务门户                         |
| [`REPO`](/docs/infra/param#repo)                       | 10  | 本地软件仓库配置                                |
| [`INFRA_PACKAGE`](/docs/infra/param#infra_package)     |  2  | 基础设施节点软件包安装                             |
| [`NGINX`](/docs/infra/param#nginx)                     | 14  | Nginx Web服务器与反向代理配置                     |
| [`DNS`](/docs/infra/param#dns)                         |  3  | DNSMasq 域名解析服务配置                        |
| [`VICTORIA`](/docs/infra/param#victoria)               | 19  | VictoriaMetrics/Logs/Traces 可观测性套件      |
| [`PROMETHEUS`](/docs/infra/param#prometheus)           |  7  | Alertmanager 与 Blackbox Exporter        |
| [`GRAFANA`](/docs/infra/param#grafana)                 |  8  | Grafana 可视化平台配置                         |
{.stretch-last}

--------

## NODE

[`NODE`](/docs/node) 模块提供了 **11 组共 82 个** 主机节点相关配置参数。

| 参数组                                                   | 参数数 | 说明                    |
|:------------------------------------------------------|:---:|:----------------------|
| [`NODE_ID`](/docs/node/param#node_id)                 |  5  | NODE_ID 相关参数          |
| [`NODE_DNS`](/docs/node/param#node_dns)               |  6  | NODE_DNS 相关参数         |
| [`NODE_PACKAGE`](/docs/node/param#node_package)       |  4  | NODE_PACKAGE 相关参数     |
| [`NODE_TUNE`](/docs/node/param#node_tune)             | 10  | NODE_TUNE 相关参数        |
| [`NODE_SEC`](/docs/node/param#node_sec)               |  4  | NODE_SEC 安全相关参数       |
| [`NODE_ADMIN`](/docs/node/param#node_admin)           |  9  | NODE_ADMIN 相关参数       |
| [`NODE_TIME`](/docs/node/param#node_time)             |  5  | NODE_TIME 相关参数        |
| [`NODE_VIP`](/docs/node/param#node_vip)               |  8  | NODE_VIP 相关参数         |
| [`HAPROXY`](/docs/node/param#haproxy)                 | 10  | HAPROXY 相关参数          |
| [`NODE_EXPORTER`](/docs/node/param#node_exporter)     |  3  | NODE_EXPORTER 相关参数    |
| [`VECTOR`](/docs/node/param#vector)                   |  6  | VECTOR 日志收集相关参数        |
{.stretch-last}

--------

## ETCD

[`ETCD`](/docs/etcd) 模块提供了 **2 组共 13 个** 分布式配置存储相关参数。

| 参数组                                           | 参数数 | 说明                       |
|:----------------------------------------------|:---:|:-------------------------|
| [`ETCD`](/docs/etcd/param#etcd)               | 10  | etcd 集群的部署与配置            |
| [`ETCD_REMOVE`](/docs/etcd/param#etcd_remove) |  3  | etcd 集群的移除行为：防误删保险、数据清理等 |
{.stretch-last}

--------

## REDIS

[`REDIS`](/docs/redis) 模块提供了 **21 个** Redis 相关配置参数。

| 参数组                                 | 参数数 | 说明                     |
|:------------------------------------|:---:|:-----------------------|
| [`REDIS`](/docs/redis/param#redis)  | 21  | Redis 集群的部署与配置         |
{.stretch-last}

--------

## MINIO

[`MINIO`](/docs/minio) 模块提供了 **2 组共 21 个** MinIO 对象存储相关参数。

| 参数组                                              | 参数数 | 参数说明                      |
|:-------------------------------------------------|:---:|:--------------------------|
| [`MINIO`](/docs/minio/param#minio)               | 18  | MinIO 集群的部署与配置            |
| [`MINIO_REMOVE`](/docs/minio/param#minio_remove) |  3  | MinIO 集群的移除行为：防误删保险、数据清理等 |
{.stretch-last}

--------

## FERRET

[`FERRET`](/docs/ferret) 模块提供了 **9 个** FerretDB 相关配置参数。

| 参数组                                   | 参数数 | 说明                  |
|:--------------------------------------|:---:|:--------------------|
| [`FERRET`](/docs/ferret/param#ferret) |  9  | FerretDB 部署与配置      |
{.stretch-last}

--------

## DOCKER

[`DOCKER`](/docs/docker) 模块提供了 **8 个** Docker 容器引擎相关配置参数。

| 参数组                                   | 参数数 | 说明              |
|:--------------------------------------|:---:|:----------------|
| [`DOCKER`](/docs/docker/param#docker) |  8  | Docker 容器引擎配置   |
{.stretch-last}

--------

## 参数总览

以下是所有模块的参数汇总表格，按模块分类列出。

### PGSQL 参数

[`PG_ID`](/docs/pgsql/param#pg_id) 参数组用于定义 PostgreSQL 集群与实例的身份标识，包括集群名称、实例序号、角色、分片等核心身份参数。

| 参数                                      |    类型    | 说明                                                           |
|:----------------------------------------|:--------:|:-------------------------------------------------------------|
| [`pg_mode`](/docs/pgsql/param#pg_mode)                   |  `enum`  | pgsql 集群模式: pgsql,citus,mssql,mysql,polar,ivory,oracle,gpsql |
| [`pg_cluster`](/docs/pgsql/param#pg_cluster)             | `string` | pgsql 集群名称, 必选身份参数                                           |
| [`pg_seq`](/docs/pgsql/param#pg_seq)                     |  `int`   | pgsql 实例号, 必选身份参数                                            |
| [`pg_role`](/docs/pgsql/param#pg_role)                   |  `enum`  | pgsql 实例角色, 必选身份参数, 可为 primary，replica，offline               |
| [`pg_instances`](/docs/pgsql/param#pg_instances)         |  `dict`  | 在一个节点上定义多个 pg 实例，使用 `{port:ins_vars}` 格式                     |
| [`pg_upstream`](/docs/pgsql/param#pg_upstream)           |   `ip`   | 级联从库或备份集群或的复制上游节点IP地址                                        |
| [`pg_shard`](/docs/pgsql/param#pg_shard)                 | `string` | pgsql 分片名，对 citus 与 gpsql 等水平分片集群为必选身份参数                     |
| [`pg_group`](/docs/pgsql/param#pg_group)                 |  `int`   | pgsql 分片号，正整数，对 citus 与 gpsql 等水平分片集群为必选身份参数                 |
| [`gp_role`](/docs/pgsql/param#gp_role)                   |  `enum`  | 这个集群的 greenplum 角色，可以是 master 或 segment                      |
| [`pg_exporters`](/docs/pgsql/param#pg_exporters)         |  `dict`  | 在该节点上设置额外的 pg_exporters 用于监控远程 postgres 实例                   |
| [`pg_offline_query`](/docs/pgsql/param#pg_offline_query) |  `bool`  | 设置为 true 将此只读实例标记为特殊的离线从库，承载 Offline 服务，允许离线查询               |
{.stretch-last}

[`PG_BUSINESS`](/docs/pgsql/param#pg_business) 参数组用于定义业务用户、数据库、服务与访问控制规则，以及默认的系统用户凭据。

| 参数                                                                     |      类型      | 说明                                    |
|:-----------------------------------------------------------------------|:------------:|:--------------------------------------|
| [`pg_users`](/docs/pgsql/param#pg_users)                               |   `user[]`   | postgres 业务用户                         |
| [`pg_databases`](/docs/pgsql/param#pg_databases)                       | `database[]` | postgres 业务数据库                        |
| [`pg_services`](/docs/pgsql/param#pg_services)                         | `service[]`  | postgres 业务服务                         |
| [`pg_hba_rules`](/docs/pgsql/param#pg_hba_rules)                       |   `hba[]`    | postgres 的业务 hba 规则                   |
| [`pgb_hba_rules`](/docs/pgsql/param#pgb_hba_rules)                     |   `hba[]`    | pgbouncer 的业务 hba 规则                  |
| [`pg_crontab`](/docs/pgsql/param#pg_crontab)                           | `string[]`   | postgres dbsu 的定时任务                   |
| [`pg_replication_username`](/docs/pgsql/param#pg_replication_username) |  `username`  | postgres 复制用户名，默认为 `replicator`       |
| [`pg_replication_password`](/docs/pgsql/param#pg_replication_password) |  `password`  | postgres 复制密码，默认为 `DBUser.Replicator` |
| [`pg_admin_username`](/docs/pgsql/param#pg_admin_username)             |  `username`  | postgres 管理员用户名，默认为 `dbuser_dba`      |
| [`pg_admin_password`](/docs/pgsql/param#pg_admin_password)             |  `password`  | postgres 管理员明文密码，默认为 `DBUser.DBA`     |
| [`pg_monitor_username`](/docs/pgsql/param#pg_monitor_username)         |  `username`  | postgres 监控用户名，默认为 `dbuser_monitor`   |
| [`pg_monitor_password`](/docs/pgsql/param#pg_monitor_password)         |  `password`  | postgres 监控密码，默认为 `DBUser.Monitor`    |
| [`pg_dbsu_password`](/docs/pgsql/param#pg_dbsu_password)               |  `password`  | dbsu 密码，默认为空字符串意味着不设置 dbsu 密码，最好不要设置。 |
{.stretch-last}

[`PG_INSTALL`](/docs/pgsql/param#pg_install) 参数组用于配置 PostgreSQL 安装相关选项，包括版本、路径、软件包与扩展插件。

| 参数                                                               |     类型     | 说明                                            |
|:-----------------------------------------------------------------|:----------:|:----------------------------------------------|
| [`pg_dbsu`](/docs/pgsql/param#pg_dbsu)                           | `username` | 操作系统 dbsu 名称，默认为 postgres，最好不要更改              |
| [`pg_dbsu_uid`](/docs/pgsql/param#pg_dbsu_uid)                   |   `int`    | 操作系统 dbsu uid 和 gid，对于默认的 postgres 用户和组为 26   |
| [`pg_dbsu_sudo`](/docs/pgsql/param#pg_dbsu_sudo)                 |   `enum`   | dbsu sudo 权限, none,limit,all,nopass，默认为 limit |
| [`pg_dbsu_home`](/docs/pgsql/param#pg_dbsu_home)                 |   `path`   | postgresql 主目录，默认为 `/var/lib/pgsql`           |
| [`pg_dbsu_ssh_exchange`](/docs/pgsql/param#pg_dbsu_ssh_exchange) |   `bool`   | 在 pgsql 集群之间交换 postgres dbsu ssh 密钥           |
| [`pg_version`](/docs/pgsql/param#pg_version)                     |   `enum`   | 要安装的 postgres 主版本，默认为 18                      |
| [`pg_bin_dir`](/docs/pgsql/param#pg_bin_dir)                     |   `path`   | postgres 二进制目录，默认为 `/usr/pgsql/bin`           |
| [`pg_log_dir`](/docs/pgsql/param#pg_log_dir)                     |   `path`   | postgres 日志目录，默认为 `/pg/log/postgres`          |
| [`pg_packages`](/docs/pgsql/param#pg_packages)                   | `string[]` | 要安装的 pg 包，`${pg_version}` 将被替换为实际主版本号         |
| [`pg_extensions`](/docs/pgsql/param#pg_extensions)               | `string[]` | 要安装的 pg 扩展，`${pg_version}` 将被替换为实际主版本号        |
{.stretch-last}

[`PG_BOOTSTRAP`](/docs/pgsql/param#pg_bootstrap) 参数组用于配置 PostgreSQL 集群初始化引导，包括 Patroni 高可用、数据目录、存储、连接、编码等核心设置。

| 参数                                                                   |     类型     | 说明                                                    |
|:---------------------------------------------------------------------|:----------:|:------------------------------------------------------|
| [`pg_data`](/docs/pgsql/param#pg_data)                               |   `path`   | postgres 数据目录，默认为 `/pg/data`                          |
| [`pg_fs_main`](/docs/pgsql/param#pg_fs_main)                         |   `path`   | postgres 主数据的挂载点/路径，默认为 `/data/postgres`              |
| [`pg_fs_backup`](/docs/pgsql/param#pg_fs_backup)                     |   `path`   | pg 备份数据的挂载点/路径，默认为 `/data/backups`                    |
| [`pg_storage_type`](/docs/pgsql/param#pg_storage_type)               |   `enum`   | pg 主数据的存储类型，SSD、HDD，默认为 SSD，影响自动优化的参数。                |
| [`pg_dummy_filesize`](/docs/pgsql/param#pg_dummy_filesize)           |   `size`   | `/pg/dummy` 的大小，默认保留 64MB 磁盘空间用于紧急抢修                  |
| [`pg_listen`](/docs/pgsql/param#pg_listen)                           |  `ip(s)`   | postgres/pgbouncer 的监听地址，用逗号分隔的IP列表，默认为 `0.0.0.0`     |
| [`pg_port`](/docs/pgsql/param#pg_port)                               |   `port`   | postgres 监听端口，默认为 5432                                |
| [`pg_localhost`](/docs/pgsql/param#pg_localhost)                     |   `path`   | postgres 的 Unix 套接字目录，用于本地连接                          |
| [`pg_namespace`](/docs/pgsql/param#pg_namespace)                     |   `path`   | 在 etcd 中的顶级键命名空间，被 patroni & vip 用于高可用管理              |
| [`patroni_enabled`](/docs/pgsql/param#patroni_enabled)               |   `bool`   | 如果禁用，初始化期间不会创建 postgres 集群                            |
| [`patroni_mode`](/docs/pgsql/param#patroni_mode)                     |   `enum`   | patroni 工作模式：default,pause,remove                     |
| [`patroni_port`](/docs/pgsql/param#patroni_port)                     |   `port`   | patroni 监听端口，默认为 8008                                 |
| [`patroni_log_dir`](/docs/pgsql/param#patroni_log_dir)               |   `path`   | patroni 日志目录，默认为 `/pg/log/patroni`                    |
| [`patroni_ssl_enabled`](/docs/pgsql/param#patroni_ssl_enabled)       |   `bool`   | 使用 SSL 保护 patroni RestAPI 通信？                         |
| [`patroni_watchdog_mode`](/docs/pgsql/param#patroni_watchdog_mode)   |   `enum`   | patroni 看门狗模式：automatic,required,off，默认为 off          |
| [`patroni_username`](/docs/pgsql/param#patroni_username)             | `username` | patroni restapi 用户名，默认为 `postgres`                    |
| [`patroni_password`](/docs/pgsql/param#patroni_password)             | `password` | patroni restapi 密码，默认为 `Patroni.API`                  |
| [`pg_primary_db`](/docs/pgsql/param#pg_primary_db)                   |  `string`  | 指定集群中首要使用的数据库名，Citus等模式会用到，默认为 `postgres`             |
| [`pg_parameters`](/docs/pgsql/param#pg_parameters)                   |   `dict`   | 覆盖 postgresql.auto.conf 中的 PostgreSQL 参数              |
| [`pg_files`](/docs/pgsql/param#pg_files)                             |  `path[]`  | 拷贝至PGDATA目录中的额外文件列表 (例如许可证文件)                         |
| [`pg_conf`](/docs/pgsql/param#pg_conf)                               |   `enum`   | 配置模板：oltp,olap,crit,tiny，默认为 `oltp.yml`               |
| [`pg_max_conn`](/docs/pgsql/param#pg_max_conn)                       |   `int`    | postgres 最大连接数，`auto` 将使用推荐值                          |
| [`pg_shared_buffer_ratio`](/docs/pgsql/param#pg_shared_buffer_ratio) |  `float`   | postgres 共享缓冲区内存比率，默认为 0.25，范围 0.1~0.4                |
| [`pg_rto`](/docs/pgsql/param#pg_rto)                                 |   `enum`   | RTO 模式：`fast`,`norm`,`safe`,`wide`，默认 `norm`          |
| [`pg_rto_plan`](/docs/pgsql/param#pg_rto_plan)                       |   `dict`   | RTO 预设配置，定义 Patroni HA 与 HAProxy 健康检查的超时参数            |
| [`pg_rpo`](/docs/pgsql/param#pg_rpo)                                 |   `int`    | 恢复点目标（字节），默认为 `1MiB`                                  |
| [`pg_libs`](/docs/pgsql/param#pg_libs)                               |  `string`  | 预加载的库，默认为 `pg_stat_statements,auto_explain`           |
| [`pg_delay`](/docs/pgsql/param#pg_delay)                             | `interval` | 备份集群主库的WAL重放应用延迟，用于制备延迟从库                             |
| [`pg_checksum`](/docs/pgsql/param#pg_checksum)                       |   `bool`   | 为 postgres 集群启用数据校验和？                                 |
| [`pg_pwd_enc`](/docs/pgsql/param#pg_pwd_enc)                         |   `enum`   | 密码加密算法：固定为 scram-sha-256                              |
| [`pg_encoding`](/docs/pgsql/param#pg_encoding)                       |   `enum`   | 数据库集群编码，默认为 `UTF8`                                    |
| [`pg_locale`](/docs/pgsql/param#pg_locale)                           |   `enum`   | 数据库集群本地化设置，默认为 `C`                                    |
| [`pg_lc_collate`](/docs/pgsql/param#pg_lc_collate)                   |   `enum`   | 数据库集群排序，默认为 `C`                                       |
| [`pg_lc_ctype`](/docs/pgsql/param#pg_lc_ctype)                       |   `enum`   | 数据库字符类型，默认为 `C`                                       |
| [`pg_io_method`](/docs/pgsql/param#pg_io_method)                     |   `enum`   | PostgreSQL IO 方法：`auto`, `sync`, `worker`, `io_uring` |
| [`pg_etcd_password`](/docs/pgsql/param#pg_etcd_password)             | `password` | 此 PostgreSQL 集群在 etcd 中使用的密码，默认使用集群名                  |
| [`pgsodium_key`](/docs/pgsql/param#pgsodium_key)                     |  `string`  | pgsodium 加密主密钥，64 位十六进制数字，默认使用 sha256(pg_cluster)     |
| [`pgsodium_getkey_script`](/docs/pgsql/param#pgsodium_getkey_script) |   `path`   | pgsodium 获取密钥脚本路径，默认使用模板中的 pgsodium_getkey            |
{.stretch-last}

[`PG_PROVISION`](/docs/pgsql/param#pg_provision) 参数组用于配置 PostgreSQL 集群模板置备，包括默认角色、权限、模式、扩展与 HBA 规则。

| 参数                                                |      类型       | 说明                                |
|:--------------------------------------------------|:-------------:|:----------------------------------|
| [`pg_provision`](/docs/pgsql/param#pg_provision)                   |    `bool`     | 在引导后置备 postgres 集群内部的业务对象？        |
| [`pg_init`](/docs/pgsql/param#pg_init)                             |   `string`    | 为集群模板提供初始化脚本，默认为 `pg-init`        |
| [`pg_default_roles`](/docs/pgsql/param#pg_default_roles)           |   `role[]`    | postgres 集群中的默认预定义角色和系统用户         |
| [`pg_default_privileges`](/docs/pgsql/param#pg_default_privileges) |  `string[]`   | 由管理员用户创建数据库内对象时的默认权限              |
| [`pg_default_schemas`](/docs/pgsql/param#pg_default_schemas)       |  `string[]`   | 要创建的默认模式列表                        |
| [`pg_default_extensions`](/docs/pgsql/param#pg_default_extensions) | `extension[]` | 要创建的默认扩展列表                        |
| [`pg_reload`](/docs/pgsql/param#pg_reload)                         |    `bool`     | 更改HBA后，是否立即重载 postgres 配置         |
| [`pg_default_hba_rules`](/docs/pgsql/param#pg_default_hba_rules)   |    `hba[]`    | postgres 基于主机的认证规则，全局PG默认HBA      |
| [`pgb_default_hba_rules`](/docs/pgsql/param#pgb_default_hba_rules) |    `hba[]`    | pgbouncer 默认的基于主机的认证规则，全局PGB默认HBA |
{.stretch-last}

[`PG_BACKUP`](/docs/pgsql/param#pg_backup) 参数组用于配置 pgBackRest 备份与恢复，包括仓库类型、路径、保留策略等。

| 参数                                                  |   类型   | 说明                                       |
|:----------------------------------------------------|:------:|:-----------------------------------------|
| [`pgbackrest_enabled`](/docs/pgsql/param#pgbackrest_enabled)         | `bool` | 在 pgsql 主机上启用 pgbackrest？                |
| [`pgbackrest_clean`](/docs/pgsql/param#pgbackrest_clean)             | `bool` | 在初始化时删除以前的 pg 备份数据？                      |
| [`pgbackrest_log_dir`](/docs/pgsql/param#pgbackrest_log_dir)         | `path` | pgbackrest 日志目录，默认为 `/pg/log/pgbackrest` |
| [`pgbackrest_method`](/docs/pgsql/param#pgbackrest_method)           | `enum` | pgbackrest 使用的仓库：local,minio,等...        |
| [`pgbackrest_init_backup`](/docs/pgsql/param#pgbackrest_init_backup) | `bool` | pgbackrest 初始化完成后是否立即执行全量备份？默认为 `true`   |
| [`pgbackrest_repo`](/docs/pgsql/param#pgbackrest_repo)               | `dict` | pgbackrest 仓库定义                          |
{.stretch-last}

[`PG_ACCESS`](/docs/pgsql/param#pg_access) 参数组用于配置服务暴露、连接池、VIP、DNS 等客户端访问相关选项。

| 参数                                                    |     类型      | 说明                                                  |
|:------------------------------------------------------|:-----------:|:----------------------------------------------------|
| [`pgbouncer_enabled`](/docs/pgsql/param#pgbouncer_enabled)             |   `bool`    | 如果禁用，则不会配置 pgbouncer 连接池                            |
| [`pgbouncer_port`](/docs/pgsql/param#pgbouncer_port)                   |   `port`    | pgbouncer 监听端口，默认为 6432                             |
| [`pgbouncer_log_dir`](/docs/pgsql/param#pgbouncer_log_dir)             |   `path`    | pgbouncer 日志目录，默认为 `/pg/log/pgbouncer`              |
| [`pgbouncer_auth_query`](/docs/pgsql/param#pgbouncer_auth_query)       |   `bool`    | 使用 AuthQuery 来从 postgres 获取未列出的业务用户？                |
| [`pgbouncer_poolmode`](/docs/pgsql/param#pgbouncer_poolmode)           |   `enum`    | 池化模式：transaction,session,statement，默认为 transaction  |
| [`pgbouncer_sslmode`](/docs/pgsql/param#pgbouncer_sslmode)             |   `enum`    | pgbouncer 客户端 SSL 模式，默认为禁用                          |
| [`pgbouncer_ignore_param`](/docs/pgsql/param#pgbouncer_ignore_param)   | `string[]`  | pgbouncer 忽略的启动参数列表                                 |
| [`pg_weight`](/docs/pgsql/param#pg_weight)                             |    `int`    | 在服务中的相对负载均衡权重，默认为 100，范围 0-255                      |
| [`pg_service_provider`](/docs/pgsql/param#pg_service_provider)         |  `string`   | 专用的 haproxy 节点组名称，或默认空字符，使用本地节点上的 haproxy           |
| [`pg_default_service_dest`](/docs/pgsql/param#pg_default_service_dest) |   `enum`    | 如果 svc.dest='default'，默认服务指向哪里？postgres 或 pgbouncer |
| [`pg_default_services`](/docs/pgsql/param#pg_default_services)         | `service[]` | postgres 默认服务定义列表，全局共用。                             |
| [`pg_vip_enabled`](/docs/pgsql/param#pg_vip_enabled)                   |   `bool`    | 是否为 pgsql 主节点启用 L2 VIP？默认不启用                        |
| [`pg_vip_address`](/docs/pgsql/param#pg_vip_address)                   |   `cidr4`   | vip 地址的格式为 `<ipv4>/<mask>`，启用 vip 时为必选参数            |
| [`pg_vip_interface`](/docs/pgsql/param#pg_vip_interface)               |  `string`   | 监听的 vip 网络接口，默认为 eth0                               |
| [`pg_dns_suffix`](/docs/pgsql/param#pg_dns_suffix)                     |  `string`   | pgsql dns 后缀，默认为空                                   |
| [`pg_dns_target`](/docs/pgsql/param#pg_dns_target)                     |   `enum`    | PG DNS 解析到哪里？auto、primary、vip、none 或者特定的 IP 地址      |
{.stretch-last}

[`PG_MONITOR`](/docs/pgsql/param#pg_monitor) 参数组用于配置 PostgreSQL 监控 Exporter，包括 pg_exporter、pgbouncer_exporter 和 pgbackrest_exporter。

| 参数                                                              |    类型    | 说明                                       |
|:----------------------------------------------------------------|:--------:|:-----------------------------------------|
| [`pg_exporter_enabled`](/docs/pgsql/param#pg_exporter_enabled)                   |  `bool`  | 在 pgsql 主机上启用 pg_exporter 吗？             |
| [`pg_exporter_config`](/docs/pgsql/param#pg_exporter_config)                     | `string` | pg_exporter 配置文件/模板名称                    |
| [`pg_exporter_cache_ttls`](/docs/pgsql/param#pg_exporter_cache_ttls)             | `string` | pg_exporter 收集器阶梯TTL配置，默认为 '1,10,60,300' |
| [`pg_exporter_port`](/docs/pgsql/param#pg_exporter_port)                         |  `port`  | pg_exporter 监听端口，默认为 9630                |
| [`pg_exporter_params`](/docs/pgsql/param#pg_exporter_params)                     | `string` | pg_exporter dsn 中传入的额外 URL 参数            |
| [`pg_exporter_url`](/docs/pgsql/param#pg_exporter_url)                           | `pgurl`  | 如果指定，则覆盖自动生成的 postgres DSN 连接串           |
| [`pg_exporter_auto_discovery`](/docs/pgsql/param#pg_exporter_auto_discovery)     |  `bool`  | 监控是否启用自动数据库发现？默认启用                       |
| [`pg_exporter_exclude_database`](/docs/pgsql/param#pg_exporter_exclude_database) | `string` | 启用自动发现时，排除在外的数据库名称列表，用逗号分隔               |
| [`pg_exporter_include_database`](/docs/pgsql/param#pg_exporter_include_database) | `string` | 启用自动发现时，只监控这个列表中的数据库，名称用逗号分隔             |
| [`pg_exporter_connect_timeout`](/docs/pgsql/param#pg_exporter_connect_timeout)   |  `int`   | pg_exporter 连接超时，单位毫秒，默认为 200            |
| [`pg_exporter_options`](/docs/pgsql/param#pg_exporter_options)                   |  `arg`   | pg_exporter 的额外命令行参数选项                   |
| [`pgbouncer_exporter_enabled`](/docs/pgsql/param#pgbouncer_exporter_enabled)     |  `bool`  | 在 pgsql 主机上启用 pgbouncer_exporter 吗？      |
| [`pgbouncer_exporter_port`](/docs/pgsql/param#pgbouncer_exporter_port)           |  `port`  | pgbouncer_exporter 监听端口，默认为 9631         |
| [`pgbouncer_exporter_url`](/docs/pgsql/param#pgbouncer_exporter_url)             | `pgurl`  | 如果指定，则覆盖自动生成的 pgbouncer dsn 连接串          |
| [`pgbouncer_exporter_options`](/docs/pgsql/param#pgbouncer_exporter_options)     |  `arg`   | pgbouncer_exporter 的额外命令行参数选项            |
| [`pgbackrest_exporter_enabled`](/docs/pgsql/param#pgbackrest_exporter_enabled)   |  `bool`  | 在 pgsql 主机上启用 pgbackrest_exporter 吗？     |
| [`pgbackrest_exporter_port`](/docs/pgsql/param#pgbackrest_exporter_port)         |  `port`  | pgbackrest_exporter 监听端口，默认为 9854        |
| [`pgbackrest_exporter_options`](/docs/pgsql/param#pgbackrest_exporter_options)   |  `arg`   | pgbackrest_exporter 的额外命令行参数选项           |
{.stretch-last}

[`PG_REMOVE`](/docs/pgsql/param#pg_remove) 参数组用于配置 PostgreSQL 实例清理与卸载行为，包括数据目录、备份、软件包的删除控制。

| 参数                              |  类型   | 说明                               |
|:--------------------------------|:-----:|:---------------------------------|
| [`pg_rm_data`](/docs/pgsql/param#pg_rm_data)     | `bool` | 删除 pgsql 实例时是否清理 postgres 数据目录？  |
| [`pg_rm_backup`](/docs/pgsql/param#pg_rm_backup) | `bool` | 删除主库时是否一并清理 pgbackrest 备份？       |
| [`pg_rm_pkg`](/docs/pgsql/param#pg_rm_pkg)       | `bool` | 删除 pgsql 实例时是否卸载相关软件包？           |
| [`pg_safeguard`](/docs/pgsql/param#pg_safeguard) | `bool` | 防误删保险，阻止误执行 pgsql 清理操作？默认为 false |
{.stretch-last}

--------

### INFRA 参数

[`META`](/docs/infra/param#meta) 参数组用于定义 Pigsty 的元信息，包括版本号、管理节点 IP、软件源区域、默认语言以及代理设置。

| 参数                              |      类型      | 说明                          |
|:--------------------------------|:------------:|:----------------------------|
| [`version`](/docs/infra/param#version)           |   `string`   | pigsty 版本字符串                |
| [`admin_ip`](/docs/infra/param#admin_ip)         |     `ip`     | 管理节点 IP 地址                  |
| [`region`](/docs/infra/param#region)             |    `enum`    | 上游镜像区域：default,china,europe |
| [`language`](/docs/infra/param#language)         |    `enum`    | 默认语言，en 或 zh                |
| [`proxy_env`](/docs/infra/param#proxy_env)       |    `dict`    | 下载包时使用的全局代理环境变量             |
{.stretch-last}

[`CA`](/docs/infra/param#ca) 参数组用于配置 Pigsty 自签名 CA 证书管理，包括是否创建 CA、CA 名称以及证书有效期。

| 参数                                  |     类型      | 说明                     |
|:------------------------------------|:-----------:|:-----------------------|
| [`ca_create`](/docs/infra/param#ca_create)           |   `bool`    | 不存在时是否创建 CA？默认为 true   |
| [`ca_cn`](/docs/infra/param#ca_cn)                   |  `string`   | CA CN名称，固定为 pigsty-ca  |
| [`cert_validity`](/docs/infra/param#cert_validity)   | `interval`  | 证书有效期，默认为 20 年         |
{.stretch-last}

[`INFRA_ID`](/docs/infra/param#infra_id) 参数组用于定义基础设施节点的身份标识，包括节点序号、服务门户配置以及数据目录。

| 参数                                |    类型    | 说明                       |
|:----------------------------------|:--------:|:-------------------------|
| [`infra_seq`](/docs/infra/param#infra_seq)         |  `int`   | 基础设施节点序号，必选身份参数          |
| [`infra_portal`](/docs/infra/param#infra_portal)   |  `dict`  | 通过 Nginx 门户暴露的基础设施服务列表   |
| [`infra_data`](/docs/infra/param#infra_data)       |  `path`  | 基础设施数据目录，默认为 /data/infra |
{.stretch-last}

[`REPO`](/docs/infra/param#repo) 参数组用于配置本地软件仓库，包括仓库启用开关、目录路径、上游源定义以及要下载的软件包列表。

| 参数                                            |      类型       | 说明                    |
|:----------------------------------------------|:-------------:|:----------------------|
| [`repo_enabled`](/docs/infra/param#repo_enabled)               |    `bool`     | 在此基础设施节点上创建软件仓库？      |
| [`repo_home`](/docs/infra/param#repo_home)                     |    `path`     | 软件仓库主目录，默认为`/www`     |
| [`repo_name`](/docs/infra/param#repo_name)                     |   `string`    | 软件仓库名称，默认为 pigsty     |
| [`repo_endpoint`](/docs/infra/param#repo_endpoint)             |     `url`     | 仓库的访问点：域名或 `ip:port` 格式 |
| [`repo_remove`](/docs/infra/param#repo_remove)                 |    `bool`     | 构建本地仓库时是否移除现有上游仓库源定义文件？ |
| [`repo_modules`](/docs/infra/param#repo_modules)               |   `string`    | 启用的上游仓库模块列表，用逗号分隔     |
| [`repo_upstream`](/docs/infra/param#repo_upstream)             | `upstream[]`  | 上游仓库源定义：从哪里下载上游包？     |
| [`repo_packages`](/docs/infra/param#repo_packages)             |  `string[]`   | 从上游仓库下载哪些软件包？         |
| [`repo_extra_packages`](/docs/infra/param#repo_extra_packages) |  `string[]`   | 从上游仓库下载哪些额外的软件包？      |
| [`repo_url_packages`](/docs/infra/param#repo_url_packages)     |  `string[]`   | 使用URL下载的额外软件包列表       |
{.stretch-last}

[`INFRA_PACKAGE`](/docs/infra/param#infra_package) 参数组用于定义在基础设施节点上安装的软件包，包括 RPM/DEB 包和 PIP 包。

| 参数                                          |     类型      | 说明                    |
|:--------------------------------------------|:-----------:|:----------------------|
| [`infra_packages`](/docs/infra/param#infra_packages)         | `string[]`  | 在基础设施节点上要安装的软件包       |
| [`infra_packages_pip`](/docs/infra/param#infra_packages_pip) |  `string`   | 在基础设施节点上使用 pip 安装的包   |
{.stretch-last}

[`NGINX`](/docs/infra/param#nginx) 参数组用于配置 Nginx Web 服务器与反向代理，包括启用开关、端口、SSL 模式、证书以及基础认证。

| 参数                                                                   |     类型     | 说明                                    |
|:---------------------------------------------------------------------|:----------:|:--------------------------------------|
| [`nginx_enabled`](/docs/infra/param#nginx_enabled)                   |   `bool`   | 在此基础设施节点上启用 nginx？                    |
| [`nginx_clean`](/docs/infra/param#nginx_clean)                       |   `bool`   | 初始化时清理现有 nginx 配置？                    |
| [`nginx_exporter_enabled`](/docs/infra/param#nginx_exporter_enabled) |   `bool`   | 在此基础设施节点上启用 nginx_exporter？           |
| [`nginx_exporter_port`](/docs/infra/param#nginx_exporter_port)       |   `port`   | nginx_exporter 监听端口，默认为 9113          |
| [`nginx_sslmode`](/docs/infra/param#nginx_sslmode)                   |   `enum`   | nginx SSL模式？disable,enable,enforce    |
| [`nginx_cert_validity`](/docs/infra/param#nginx_cert_validity)       | `duration` | nginx 自签名证书有效期，默认为 397d               |
| [`nginx_home`](/docs/infra/param#nginx_home)                         |   `path`   | nginx 内容目录，默认为 `/www`，软链接到 nginx_data |
| [`nginx_data`](/docs/infra/param#nginx_data)                         |   `path`   | nginx 实际数据目录，默认为 /data/nginx          |
| [`nginx_users`](/docs/infra/param#nginx_users)                       |   `dict`   | nginx 基础认证用户：用户名和密码字典                 |
| [`nginx_port`](/docs/infra/param#nginx_port)                         |   `port`   | nginx 监听端口，默认为 80                     |
| [`nginx_ssl_port`](/docs/infra/param#nginx_ssl_port)                 |   `port`   | nginx SSL监听端口，默认为 443                 |
| [`certbot_sign`](/docs/infra/param#certbot_sign)                     |   `bool`   | 是否使用 certbot 签署证书？                    |
| [`certbot_email`](/docs/infra/param#certbot_email)                   |  `string`  | certbot 通知邮箱地址                        |
| [`certbot_options`](/docs/infra/param#certbot_options)               |  `string`  | certbot 额外的命令行参数                      |
{.stretch-last}

[`DNS`](/docs/infra/param#dns) 参数组用于配置 DNSMasq 域名解析服务，包括启用开关、监听端口以及动态 DNS 记录。

| 参数                            |     类型      | 说明                     |
|:------------------------------|:-----------:|:-----------------------|
| [`dns_enabled`](/docs/infra/param#dns_enabled) |   `bool`    | 在此基础设施节点上设置dnsmasq？    |
| [`dns_port`](/docs/infra/param#dns_port)       |   `port`    | DNS 服务器监听端口，默认为 53     |
| [`dns_records`](/docs/infra/param#dns_records) | `string[]`  | 由 dnsmasq 解析的动态 DNS 记录 |

[`VICTORIA`](/docs/infra/param#victoria) 参数组用于配置 VictoriaMetrics/Logs/Traces 可观测性套件，包括启用开关、端口、数据保留策略等。

| 参数                                                      |     类型     | 说明                          |
|:--------------------------------------------------------|:----------:|:----------------------------|
| [`vmetrics_enabled`](/docs/infra/param#vmetrics_enabled)                 |   `bool`   | 在此基础设施节点上启用 VictoriaMetrics？ |
| [`vmetrics_clean`](/docs/infra/param#vmetrics_clean)                     |   `bool`   | 初始化时清理 VictoriaMetrics 数据？  |
| [`vmetrics_port`](/docs/infra/param#vmetrics_port)                       |   `port`   | VictoriaMetrics 监听端口，默认为 8428 |
| [`vmetrics_scrape_interval`](/docs/infra/param#vmetrics_scrape_interval) | `interval` | 全局抓取间隔，默认为 10s              |
| [`vmetrics_scrape_timeout`](/docs/infra/param#vmetrics_scrape_timeout)   | `interval` | 全局抓取超时，默认为 8s               |
| [`vmetrics_options`](/docs/infra/param#vmetrics_options)                 |   `arg`    | VictoriaMetrics 额外命令行参数     |
| [`vlogs_enabled`](/docs/infra/param#vlogs_enabled)                       |   `bool`   | 在此基础设施节点上启用 VictoriaLogs？   |
| [`vlogs_clean`](/docs/infra/param#vlogs_clean)                           |   `bool`   | 初始化时清理 VictoriaLogs 数据？     |
| [`vlogs_port`](/docs/infra/param#vlogs_port)                             |   `port`   | VictoriaLogs 监听端口，默认为 9428  |
| [`vlogs_options`](/docs/infra/param#vlogs_options)                       |   `arg`    | VictoriaLogs 额外命令行参数        |
| [`vtraces_enabled`](/docs/infra/param#vtraces_enabled)                   |   `bool`   | 在此基础设施节点上启用 VictoriaTraces？ |
| [`vtraces_clean`](/docs/infra/param#vtraces_clean)                       |   `bool`   | 初始化时清理 VictoriaTraces 数据？   |
| [`vtraces_port`](/docs/infra/param#vtraces_port)                         |   `port`   | VictoriaTraces 监听端口，默认为 10428 |
| [`vtraces_options`](/docs/infra/param#vtraces_options)                   |   `arg`    | VictoriaTraces 额外命令行参数      |
| [`vmalert_enabled`](/docs/infra/param#vmalert_enabled)                   |   `bool`   | 在此基础设施节点上启用 VMAlert？        |
| [`vmalert_port`](/docs/infra/param#vmalert_port)                         |   `port`   | VMAlert 监听端口，默认为 8880       |
| [`vmalert_options`](/docs/infra/param#vmalert_options)                   |   `arg`    | VMAlert 额外命令行参数             |

[`PROMETHEUS`](/docs/infra/param#prometheus) 参数组用于配置 Alertmanager 与 Blackbox Exporter，提供告警管理和网络探测功能。

| 参数                                              |    类型    | 说明                          |
|:------------------------------------------------|:--------:|:----------------------------|
| [`blackbox_enabled`](/docs/infra/param#blackbox_enabled)         |  `bool`  | 在此基础设施节点上设置 blackbox_exporter？ |
| [`blackbox_port`](/docs/infra/param#blackbox_port)               |  `port`  | blackbox_exporter 监听端口，默认为 9115 |
| [`blackbox_options`](/docs/infra/param#blackbox_options)         |  `arg`   | blackbox_exporter 额外的命令行参数选项 |
| [`alertmanager_enabled`](/docs/infra/param#alertmanager_enabled) |  `bool`  | 在此基础设施节点上设置 alertmanager？   |
| [`alertmanager_port`](/docs/infra/param#alertmanager_port)       |  `port`  | AlertManager 监听端口，默认为 9059  |
| [`alertmanager_options`](/docs/infra/param#alertmanager_options) |  `arg`   | alertmanager 额外的命令行参数选项     |
| [`exporter_metrics_path`](/docs/infra/param#exporter_metrics_path) |  `path`  | exporter 指标路径，默认为 /metrics  |

[`GRAFANA`](/docs/infra/param#grafana) 参数组用于配置 Grafana 可视化平台，包括启用开关、端口、管理员凭据以及数据源配置。

| 参数                                              |     类型     | 说明                         |
|:------------------------------------------------|:----------:|:---------------------------|
| [`grafana_enabled`](/docs/infra/param#grafana_enabled)           |   `bool`   | 在此基础设施节点上启用 Grafana？       |
| [`grafana_port`](/docs/infra/param#grafana_port)                 |   `port`   | Grafana 监听端口，默认为 3000      |
| [`grafana_clean`](/docs/infra/param#grafana_clean)               |   `bool`   | 初始化Grafana期间清除数据？          |
| [`grafana_admin_username`](/docs/infra/param#grafana_admin_username) | `username` | Grafana 管理员用户名，默认为 `admin` |
| [`grafana_admin_password`](/docs/infra/param#grafana_admin_password) | `password` | Grafana 管理员密码，默认为 `pigsty` |
| [`grafana_auth_proxy`](/docs/infra/param#grafana_auth_proxy)     |   `bool`   | 启用 Grafana 身份代理？           |
| [`grafana_pgurl`](/docs/infra/param#grafana_pgurl)               |   `url`    | 外部 PostgreSQL 数据库 URL（用于Grafana持久化） |
| [`grafana_view_password`](/docs/infra/param#grafana_view_password) | `password` | Grafana 元数据库 PG 数据源密码      |

--------

### NODE 参数

[`NODE_ID`](/docs/node/param#node_id) 参数组用于定义节点的身份标识参数，包括节点名称、集群名称，以及是否从 PostgreSQL 借用身份。

| 参数                                              |     类型      | 说明                            |
|:------------------------------------------------|:-----------:|:------------------------------|
| [`nodename`](/docs/node/param#nodename)                         |  `string`   | node 实例标识，如缺失则使用主机名，可选        |
| [`node_cluster`](/docs/node/param#node_cluster)                 |  `string`   | node 集群标识，如缺失则使用默认值'nodes'，可选 |
| [`nodename_overwrite`](/docs/node/param#nodename_overwrite)     |   `bool`    | 用 nodename 覆盖节点的主机名吗？         |
| [`nodename_exchange`](/docs/node/param#nodename_exchange)       |   `bool`    | 在剧本主机之间交换 nodename 吗？         |
| [`node_id_from_pg`](/docs/node/param#node_id_from_pg)           |   `bool`    | 如果可行，是否借用 postgres 身份作为节点身份？  |

[`NODE_DNS`](/docs/node/param#node_dns) 参数组用于配置节点的 DNS 解析，包括静态 hosts 记录与动态 DNS 服务器。

| 参数                                                  |     类型      | 说明                              |
|:----------------------------------------------------|:-----------:|:--------------------------------|
| [`node_write_etc_hosts`](/docs/node/param#node_write_etc_hosts)     |   `bool`    | 是否修改目标节点上的 `/etc/hosts`？        |
| [`node_default_etc_hosts`](/docs/node/param#node_default_etc_hosts) | `string[]`  | /etc/hosts 中的静态 DNS 记录          |
| [`node_etc_hosts`](/docs/node/param#node_etc_hosts)                 | `string[]`  | /etc/hosts 中的额外静态 DNS 记录        |
| [`node_dns_method`](/docs/node/param#node_dns_method)               |   `enum`    | 如何处理现有DNS服务器：add,none,overwrite |
| [`node_dns_servers`](/docs/node/param#node_dns_servers)             | `string[]`  | /etc/resolv.conf 中的动态域名服务器列表    |
| [`node_dns_options`](/docs/node/param#node_dns_options)             | `string[]`  | /etc/resolv.conf 中的DNS解析选项      |

[`NODE_PACKAGE`](/docs/node/param#node_package) 参数组用于配置节点的软件源与软件包安装。

| 参数                                              |     类型      | 说明                       |
|:------------------------------------------------|:-----------:|:-------------------------|
| [`node_repo_modules`](/docs/node/param#node_repo_modules)       |   `enum`    | 在节点上启用哪些软件源模块？默认为 local  |
| [`node_repo_remove`](/docs/node/param#node_repo_remove)         |   `bool`    | 配置节点软件仓库时，删除节点上现有的仓库吗？   |
| [`node_packages`](/docs/node/param#node_packages)               | `string[]`  | 要在当前节点上安装的软件包列表          |
| [`node_default_packages`](/docs/node/param#node_default_packages) | `string[]`  | 默认在所有节点上安装的软件包列表         |

[`NODE_TUNE`](/docs/node/param#node_tune) 参数组用于配置节点的内核参数、特性开关与性能调优模板。

| 参数                                              |     类型      | 说明                                      |
|:------------------------------------------------|:-----------:|:----------------------------------------|
| [`node_disable_numa`](/docs/node/param#node_disable_numa)       |   `bool`    | 禁用节点 numa，禁用需要重启                        |
| [`node_disable_swap`](/docs/node/param#node_disable_swap)       |   `bool`    | 禁用节点 Swap，谨慎使用                          |
| [`node_static_network`](/docs/node/param#node_static_network)   |   `bool`    | 重启后保留 DNS 解析器设置，即静态网络，默认启用              |
| [`node_disk_prefetch`](/docs/node/param#node_disk_prefetch)     |   `bool`    | 在 HDD 上配置磁盘预取以提高性能                      |
| [`node_kernel_modules`](/docs/node/param#node_kernel_modules)   | `string[]`  | 在此节点上启用的内核模块列表                          |
| [`node_hugepage_count`](/docs/node/param#node_hugepage_count)   |    `int`    | 主机节点分配的 2MB 大页数量，优先级比比例更高               |
| [`node_hugepage_ratio`](/docs/node/param#node_hugepage_ratio)   |   `float`   | 主机节点分配的内存大页占总内存比例，0 默认禁用                |
| [`node_overcommit_ratio`](/docs/node/param#node_overcommit_ratio) |   `float`   | 节点内存允许的 OverCommit 超额比率 (50-100)，0 默认禁用 |
| [`node_tune`](/docs/node/param#node_tune)                       |   `enum`    | 节点调优配置文件：无，oltp,olap,crit,tiny          |
| [`node_sysctl_params`](/docs/node/param#node_sysctl_params)     |   `dict`    | 额外的 sysctl 配置参数，k:v 格式                  |

[`NODE_SEC`](/docs/node/param#node_sec) 参数组用于配置节点的安全相关选项，包括 SELinux、防火墙等。

| 参数                                                        |     类型      | 说明                                         |
|:----------------------------------------------------------|:-----------:|:-------------------------------------------|
| [`node_selinux_mode`](/docs/node/param#node_selinux_mode)                 |   `enum`    | SELinux 模式：disabled, permissive, enforcing |
| [`node_firewall_mode`](/docs/node/param#node_firewall_mode)               |   `enum`    | 防火墙模式：none, off, zone                      |
| [`node_firewall_intranet`](/docs/node/param#node_firewall_intranet)       |  `cidr[]`   | 内网 CIDR 列表，用于配置防火墙规则                       |
| [`node_firewall_public_port`](/docs/node/param#node_firewall_public_port) |  `port[]`   | 公网开放端口列表，默认为 [22, 80, 443, 5432]           |

[`NODE_ADMIN`](/docs/node/param#node_admin) 参数组用于配置节点的管理员用户、数据目录与命令别名。

| 参数                                                    |     类型      | 说明                                       |
|:------------------------------------------------------|:-----------:|:-----------------------------------------|
| [`node_data`](/docs/node/param#node_data)                             |   `path`    | 节点主数据目录，默认为 `/data`                      |
| [`node_admin_enabled`](/docs/node/param#node_admin_enabled)           |   `bool`    | 在目标节点上创建管理员用户吗？                          |
| [`node_admin_uid`](/docs/node/param#node_admin_uid)                   |    `int`    | 节点管理员用户的 uid 和 gid                       |
| [`node_admin_username`](/docs/node/param#node_admin_username)         | `username`  | 节点管理员用户的名称，默认为 `dba`                     |
| [`node_admin_sudo`](/docs/node/param#node_admin_sudo)                 |   `enum`    | 管理员用户的 sudo 权限：limited, nopass, all, none |
| [`node_admin_ssh_exchange`](/docs/node/param#node_admin_ssh_exchange) |   `bool`    | 是否在节点集群之间交换管理员 ssh 密钥                    |
| [`node_admin_pk_current`](/docs/node/param#node_admin_pk_current)     |   `bool`    | 将当前用户的 ssh 公钥添加到管理员的 authorized_keys 中吗？ |
| [`node_admin_pk_list`](/docs/node/param#node_admin_pk_list)           | `string[]`  | 要添加到管理员用户的 ssh 公钥                        |
| [`node_aliases`](/docs/node/param#node_aliases)                       |   `dict`    | 配置主机上的 Shell Alias 命令，KV字典               |

[`NODE_TIME`](/docs/node/param#node_time) 参数组用于配置节点的时区、NTP 时间同步与定时任务。

| 参数                                                  |     类型      | 说明                            |
|:----------------------------------------------------|:-----------:|:------------------------------|
| [`node_timezone`](/docs/node/param#node_timezone)                   |  `string`   | 设置主机节点时区，空字符串跳过               |
| [`node_ntp_enabled`](/docs/node/param#node_ntp_enabled)             |   `bool`    | 启用 chronyd 时间同步服务吗？           |
| [`node_ntp_servers`](/docs/node/param#node_ntp_servers)             | `string[]`  | /etc/chrony.conf 中的 ntp 服务器列表 |
| [`node_crontab_overwrite`](/docs/node/param#node_crontab_overwrite) |   `bool`    | 写入 /etc/crontab 时，追加写入还是全部覆盖？ |
| [`node_crontab`](/docs/node/param#node_crontab)                     | `string[]`  | 在 /etc/crontab 中的 crontab 条目  |

[`NODE_VIP`](/docs/node/param#node_vip) 参数组用于配置节点集群的 L2 VIP，由 keepalived 实现。

| 参数                                        |     类型      | 说明                              |
|:------------------------------------------|:-----------:|:--------------------------------|
| [`vip_enabled`](/docs/node/param#vip_enabled)             |   `bool`    | 在此节点集群上启用 L2 vip 吗？             |
| [`vip_address`](/docs/node/param#vip_address)             |    `ip`     | 节点 vip 地址的 ipv4 格式，启用 vip 时为必要参数 |
| [`vip_vrid`](/docs/node/param#vip_vrid)                   |    `int`    | 所需的整数，1-254，在同一 VLAN 中应唯一       |
| [`vip_role`](/docs/node/param#vip_role)                   |   `enum`    | 可选，master/backup，默认为 backup    |
| [`vip_preempt`](/docs/node/param#vip_preempt)             |   `bool`    | 可选，true/false，默认为 false，启用 vip 抢占 |
| [`vip_interface`](/docs/node/param#vip_interface)         |  `string`   | 节点 vip 网络接口监听，默认为 eth0          |
| [`vip_dns_suffix`](/docs/node/param#vip_dns_suffix)       |  `string`   | 节点 vip DNS 名称后缀，默认为空字符串         |
| [`vip_auth_pass`](/docs/node/param#vip_auth_pass)         | `password`  | VRRP 认证密码，空则使用 `<cls>-<vrid>` 作为默认值 |
| [`vip_exporter_port`](/docs/node/param#vip_exporter_port) |   `port`    | keepalived exporter 监听端口，默认为 9650 |

[`HAPROXY`](/docs/node/param#haproxy) 参数组用于配置节点上的 HAProxy 负载均衡器与服务暴露。

| 参数                                                  |     类型      | 说明                        |
|:----------------------------------------------------|:-----------:|:--------------------------|
| [`haproxy_enabled`](/docs/node/param#haproxy_enabled)               |   `bool`    | 在此节点上启用 haproxy 吗？        |
| [`haproxy_clean`](/docs/node/param#haproxy_clean)                   |   `bool`    | 清除所有现有的 haproxy 配置吗？      |
| [`haproxy_reload`](/docs/node/param#haproxy_reload)                 |   `bool`    | 配置后重新加载 haproxy 吗？        |
| [`haproxy_auth_enabled`](/docs/node/param#haproxy_auth_enabled)     |   `bool`    | 启用 haproxy 管理页面的身份验证？     |
| [`haproxy_admin_username`](/docs/node/param#haproxy_admin_username) | `username`  | haproxy 管理用户名，默认为 `admin` |
| [`haproxy_admin_password`](/docs/node/param#haproxy_admin_password) | `password`  | haproxy 管理密码，默认为 `pigsty` |
| [`haproxy_exporter_port`](/docs/node/param#haproxy_exporter_port)   |   `port`    | haproxy exporter 的端口，默认为 9101 |
| [`haproxy_client_timeout`](/docs/node/param#haproxy_client_timeout) | `interval`  | haproxy 客户端连接超时，默认为 24h   |
| [`haproxy_server_timeout`](/docs/node/param#haproxy_server_timeout) | `interval`  | haproxy 服务器端连接超时，默认为 24h  |
| [`haproxy_services`](/docs/node/param#haproxy_services)             | `service[]` | 要在节点上对外暴露的 haproxy 服务列表   |

[`NODE_EXPORTER`](/docs/node/param#node_exporter) 参数组用于配置节点监控 Exporter。

| 参数                                              |     类型      | 说明                         |
|:------------------------------------------------|:-----------:|:---------------------------|
| [`node_exporter_enabled`](/docs/node/param#node_exporter_enabled) |   `bool`    | 在此节点上配置 node_exporter 吗？   |
| [`node_exporter_port`](/docs/node/param#node_exporter_port)     |   `port`    | node exporter 监听端口，默认为 9100 |
| [`node_exporter_options`](/docs/node/param#node_exporter_options) |    `arg`    | node_exporter 的额外服务器选项     |

[`VECTOR`](/docs/node/param#vector) 参数组用于配置 Vector 日志收集器。

| 参数                                        |     类型      | 说明                       |
|:------------------------------------------|:-----------:|:-------------------------|
| [`vector_enabled`](/docs/node/param#vector_enabled)       |   `bool`    | 启用 vector 日志收集器吗？        |
| [`vector_clean`](/docs/node/param#vector_clean)           |   `bool`    | 初始化期间清除 vector 数据目录吗？    |
| [`vector_data`](/docs/node/param#vector_data)             |   `path`    | vector 数据目录，默认为 /data/vector |
| [`vector_port`](/docs/node/param#vector_port)             |   `port`    | vector 指标监听端口，默认为 9598   |
| [`vector_read_from`](/docs/node/param#vector_read_from)   |   `enum`    | vector 从头还是从尾开始读取日志      |
| [`vector_log_endpoint`](/docs/node/param#vector_log_endpoint) | `string[]`  | 日志发送目标端点，默认发送至 infra 组   |

--------

### ETCD 参数

[`ETCD`](/docs/etcd/param#etcd) 参数组用于 etcd 集群的部署与配置，包括实例标识、集群名称、数据目录、端口以及认证密码。

| 参数                                                    |     类型     | 说明                         |
|:------------------------------------------------------|:----------:|:---------------------------|
| [`etcd_seq`](/docs/etcd/param#etcd_seq)                               |   `int`    | etcd 实例标识符，必填              |
| [`etcd_cluster`](/docs/etcd/param#etcd_cluster)                       |  `string`  | etcd 集群名，默认固定为 etcd        |
| [`etcd_learner`](/docs/etcd/param#etcd_learner)                       |   `bool`   | 是否以 learner 模式初始化 etcd 实例？ |
| [`etcd_data`](/docs/etcd/param#etcd_data)                             |   `path`   | etcd 数据目录，默认为 /data/etcd   |
| [`etcd_port`](/docs/etcd/param#etcd_port)                             |   `port`   | etcd 客户端端口，默认为 2379        |
| [`etcd_peer_port`](/docs/etcd/param#etcd_peer_port)                   |   `port`   | etcd 同伴端口，默认为 2380         |
| [`etcd_init`](/docs/etcd/param#etcd_init)                             |   `enum`   | etcd 初始集群状态，新建或已存在         |
| [`etcd_election_timeout`](/docs/etcd/param#etcd_election_timeout)     |   `int`    | etcd 选举超时，默认为 1000ms       |
| [`etcd_heartbeat_interval`](/docs/etcd/param#etcd_heartbeat_interval) |   `int`    | etcd 心跳间隔，默认为 100ms        |
| [`etcd_root_password`](/docs/etcd/param#etcd_root_password)           | `password` | etcd root 用户密码，用于 RBAC 认证  |

[`ETCD_REMOVE`](/docs/etcd/param#etcd_remove) 参数组控制 etcd 集群的移除行为，包括防误删保险、数据清理以及软件包卸载。

| 参数                                  |   类型   | 说明                            |
|:------------------------------------|:------:|:------------------------------|
| [`etcd_safeguard`](/docs/etcd/param#etcd_safeguard) | `bool` | etcd 防误删保险，阻止清除正在运行的 etcd 实例？ |
| [`etcd_rm_data`](/docs/etcd/param#etcd_rm_data)     | `bool` | 移除时是否删除 etcd 数据？默认为 true      |
| [`etcd_rm_pkg`](/docs/etcd/param#etcd_rm_pkg)       | `bool` | 移除时是否卸载 etcd 软件包？默认为 false    |

--------

### REDIS 参数

[`REDIS`](/docs/redis/param#redis) 参数组用于 Redis 集群的部署与配置，包括身份标识、实例定义、工作模式、内存配置、持久化以及监控。

| 参数                                                  |     类型     | 说明                                    |
|:----------------------------------------------------|:----------:|:--------------------------------------|
| [`redis_cluster`](/docs/redis/param#redis_cluster)                   |  `string`  | Redis数据库集群名称，必选身份参数                   |
| [`redis_instances`](/docs/redis/param#redis_instances)               |   `dict`   | Redis节点上的实例定义                         |
| [`redis_node`](/docs/redis/param#redis_node)                         |   `int`    | Redis节点编号，正整数，集群内唯一，必选身份参数            |
| [`redis_fs_main`](/docs/redis/param#redis_fs_main)                   |   `path`   | Redis主数据目录，默认为 `/data`                |
| [`redis_exporter_enabled`](/docs/redis/param#redis_exporter_enabled) |   `bool`   | Redis Exporter 是否启用？                  |
| [`redis_exporter_port`](/docs/redis/param#redis_exporter_port)       |   `port`   | Redis Exporter监听端口                    |
| [`redis_exporter_options`](/docs/redis/param#redis_exporter_options) |  `string`  | Redis Exporter命令参数                    |
| [`redis_safeguard`](/docs/redis/param#redis_safeguard)               |   `bool`   | 禁止抹除现存的Redis                          |
| [`redis_clean`](/docs/redis/param#redis_clean)                       |   `bool`   | 初始化Redis是否抹除现存实例                      |
| [`redis_rmdata`](/docs/redis/param#redis_rmdata)                     |   `bool`   | 移除Redis实例时是否一并移除数据？                   |
| [`redis_mode`](/docs/redis/param#redis_mode)                         |   `enum`   | Redis集群模式：sentinel，cluster，standalone |
| [`redis_conf`](/docs/redis/param#redis_conf)                         |  `string`  | Redis配置文件模板，sentinel 除外               |
| [`redis_bind_address`](/docs/redis/param#redis_bind_address)         |    `ip`    | Redis监听地址，默认留空则会绑定主机IP                |
| [`redis_max_memory`](/docs/redis/param#redis_max_memory)             |   `size`   | Redis可用的最大内存                          |
| [`redis_mem_policy`](/docs/redis/param#redis_mem_policy)             |   `enum`   | Redis内存逐出策略                           |
| [`redis_password`](/docs/redis/param#redis_password)                 | `password` | Redis密码，默认留空则禁用密码                     |
| [`redis_rdb_save`](/docs/redis/param#redis_rdb_save)                 | `string[]` | Redis RDB 保存指令，字符串列表，空数组则禁用RDB        |
| [`redis_aof_enabled`](/docs/redis/param#redis_aof_enabled)           |   `bool`   | Redis AOF 是否启用？                       |
| [`redis_rename_commands`](/docs/redis/param#redis_rename_commands)   |   `dict`   | Redis危险命令重命名列表                        |
| [`redis_cluster_replicas`](/docs/redis/param#redis_cluster_replicas) |   `int`    | Redis原生集群中每个主库配几个从库？                  |
| [`redis_sentinel_monitor`](/docs/redis/param#redis_sentinel_monitor) | `master[]` | Redis哨兵监控的主库列表，只在哨兵集群上使用              |

--------

### MINIO 参数

[`MINIO`](/docs/minio/param#minio) 参数组用于 MinIO 集群的部署与配置，包括身份标识、存储路径、端口、认证凭据以及存储桶和用户的置备。

| 参数                                      |    类型    | 说明                              |
|:----------------------------------------|:--------:|:--------------------------------|
| [`minio_seq`](/docs/minio/param#minio_seq)               |  `int`   | minio 实例标识符，必填                  |
| [`minio_cluster`](/docs/minio/param#minio_cluster)       | `string` | minio 集群名称，默认为 minio            |
| [`minio_user`](/docs/minio/param#minio_user)             | `username` | minio 操作系统用户，默认为 `minio`        |
| [`minio_https`](/docs/minio/param#minio_https)           |  `bool`  | 是否为 MinIO 启用 HTTPS？默认为 true     |
| [`minio_node`](/docs/minio/param#minio_node)             | `string` | minio 节点名模式                     |
| [`minio_data`](/docs/minio/param#minio_data)             |  `path`  | minio 数据目录，使用 `{x...y}` 指定多个磁盘  |
| [`minio_volumes`](/docs/minio/param#minio_volumes)       | `string` | minio 核心参数，指定成员节点与磁盘，默认不指定      |
| [`minio_domain`](/docs/minio/param#minio_domain)         | `string` | minio 外部域名，默认为 `sss.pigsty`     |
| [`minio_port`](/docs/minio/param#minio_port)             |  `port`  | minio 服务端口，默认为 9000             |
| [`minio_admin_port`](/docs/minio/param#minio_admin_port) |  `port`  | minio 控制台端口，默认为 9001            |
| [`minio_access_key`](/docs/minio/param#minio_access_key) | `username` | 根访问密钥，默认为 `minioadmin`          |
| [`minio_secret_key`](/docs/minio/param#minio_secret_key) | `password` | 根密钥，默认为 `S3User.MinIO`          |
| [`minio_extra_vars`](/docs/minio/param#minio_extra_vars) | `string` | minio 服务器的额外环境变量                |
| [`minio_provision`](/docs/minio/param#minio_provision)   |  `bool`  | 是否执行 minio 资源置备任务？默认为 true      |
| [`minio_alias`](/docs/minio/param#minio_alias)           | `string` | minio 部署的客户端别名                  |
| [`minio_endpoint`](/docs/minio/param#minio_endpoint)     | `string` | minio 部署的客户端别名对应的端点             |
| [`minio_buckets`](/docs/minio/param#minio_buckets)       | `bucket[]` | 待创建的 minio 存储桶列表                |
| [`minio_users`](/docs/minio/param#minio_users)           | `user[]` | 待创建的 minio 用户列表                 |

[`MINIO_REMOVE`](/docs/minio/param#minio_remove) 参数组控制 MinIO 集群的移除行为，包括防误删保险、数据清理以及软件包卸载。

| 参数                                    |   类型   | 说明                        |
|:--------------------------------------|:------:|:--------------------------|
| [`minio_safeguard`](/docs/minio/param#minio_safeguard) | `bool` | 防止意外删除？默认为 false          |
| [`minio_rm_data`](/docs/minio/param#minio_rm_data)     | `bool` | 移除时是否删除 minio 数据？默认为 true |
| [`minio_rm_pkg`](/docs/minio/param#minio_rm_pkg)       | `bool` | 移除时是否卸载 minio 软件包？默认为 false |

--------

### FERRET 参数

[`FERRET`](/docs/ferret/param#ferret) 参数组用于 FerretDB 部署与配置，包括身份标识、底层 PostgreSQL 连接、监听端口以及 SSL 设置。

| 参数                                            |    类型    | 说明                       |
|:----------------------------------------------|:--------:|:-------------------------|
| [`mongo_seq`](/docs/ferret/param#mongo_seq)                     |  `int`   | mongo 实例号，必选身份参数         |
| [`mongo_cluster`](/docs/ferret/param#mongo_cluster)             | `string` | mongo 集群名，必选身份参数         |
| [`mongo_pgurl`](/docs/ferret/param#mongo_pgurl)                 | `pgurl`  | FerretDB 底层使用的 PGURL 连接串 |
| [`mongo_ssl_enabled`](/docs/ferret/param#mongo_ssl_enabled)     |  `bool`  | 是否启用 SSL？默认为 `false`     |
| [`mongo_listen`](/docs/ferret/param#mongo_listen)               |   `ip`   | 监听地址，默认留空则监听所有地址         |
| [`mongo_port`](/docs/ferret/param#mongo_port)                   |  `port`  | 服务端口，默认使用 `27017`        |
| [`mongo_ssl_port`](/docs/ferret/param#mongo_ssl_port)           |  `port`  | TLS 监听端口，默认使用 `27018`    |
| [`mongo_exporter_port`](/docs/ferret/param#mongo_exporter_port) |  `port`  | Exporter 端口，默认使用 `9216`  |
| [`mongo_extra_vars`](/docs/ferret/param#mongo_extra_vars)       | `string` | 额外环境变量，默认为空白字符串          |

--------

### DOCKER 参数

[`DOCKER`](/docs/docker/param#docker) 参数组用于 Docker 容器引擎的部署与配置，包括启用开关、数据目录、存储驱动、镜像加速以及监控。

| 参数                                                    |     类型     | 说明                                         |
|:------------------------------------------------------|:----------:|:-------------------------------------------|
| [`docker_enabled`](/docs/docker/param#docker_enabled)                   |   `bool`   | 在当前节点上启用 Docker？默认不启用                      |
| [`docker_data`](/docs/docker/param#docker_data)                         |   `path`   | Docker 数据目录，默认为 `/data/docker`             |
| [`docker_storage_driver`](/docs/docker/param#docker_storage_driver)     |   `enum`   | Docker 存储驱动，默认为 `overlay2`                 |
| [`docker_cgroups_driver`](/docs/docker/param#docker_cgroups_driver)     |   `enum`   | Docker CGroup 文件系统驱动：cgroupfs,systemd      |
| [`docker_registry_mirrors`](/docs/docker/param#docker_registry_mirrors) | `string[]` | Docker 仓库镜像列表                              |
| [`docker_exporter_port`](/docs/docker/param#docker_exporter_port)       |   `port`   | Docker 监控指标导出端口，默认为 `9323`                 |
| [`docker_image`](/docs/docker/param#docker_image)                       | `string[]` | Docker 待拉取的镜像列表，默认为空列表                     |
| [`docker_image_cache`](/docs/docker/param#docker_image_cache)           |   `path`   | Docker 待导入的镜像压缩包路径，默认为 `/tmp/docker/*.tgz` |

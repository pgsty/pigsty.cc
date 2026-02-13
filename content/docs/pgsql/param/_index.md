---
title: 参数列表
weight: 2000
description: PGSQL 模块提供的 PostgreSQL 相关配置参数详解
icon: fa-solid fa-sliders
categories: [参考]
---


[`PGSQL`](/docs/pgsql) 模块需要在 Pigsty 管理的节点上安装（即节点已经配置了 [`NODE`](/docs/node) 模块），同时还要求您的部署中有一套可用的 [`ETCD`](/docs/etcd) 集群来存储集群元数据。

在单个节点上安装 `PGSQL` 模块将创建一个独立的 PGSQL 服务器/实例，即 [主实例](/docs/pgsql/config/cluster#读写主库)。
在额外节点上安装将创建 [只读副本](/docs/pgsql/config/cluster#只读从库)，可以作为备用实例，并用于承载分担只读请求。
您还可以创建用于 ETL/OLAP/交互式查询的 [离线](/docs/pgsql/config/cluster#离线从库) 实例， 使用 [同步备库](/docs/pgsql/config/cluster#同步备库) 和 [法定人数提交](/docs/pgsql/config/cluster#法定人数提交) 来提高数据一致性，
甚至搭建 [备份集群](/docs/pgsql/config/cluster#备份集群) 和 [延迟集群](/docs/pgsql/config/cluster#延迟集群) 以快速应对人为失误与软件缺陷导致的数据损失。

您可以定义多个 PGSQL 集群并进一步组建一个水平分片集群： Pigsty 支持原生的 [citus 集群组](/docs/pgsql/config/cluster#citus集群)，可以将您的标准 PGSQL 集群原地升级为一个分布式的数据库集群。

> Pigsty v4.0 默认使用 PostgreSQL 18，并新增了 `pg_io_method`、`pgbackrest_exporter` 等参数。


------------------------------


| 参数组                             | 功能说明                           |
|:--------------------------------|:-------------------------------|
| [`PG_ID`](#pg_id)               | PostgreSQL 集群与实例的身份标识参数        |
| [`PG_BUSINESS`](#pg_business)   | 业务用户、数据库、服务与访问控制规则定义           |
| [`PG_INSTALL`](#pg_install)     | PostgreSQL 安装相关：版本、路径、软件包      |
| [`PG_BOOTSTRAP`](#pg_bootstrap) | PostgreSQL 集群初始化引导：Patroni 高可用 |
| [`PG_PROVISION`](#pg_provision) | PostgreSQL 集群模板置备：角色、权限、扩展     |
| [`PG_BACKUP`](#pg_backup)       | pgBackRest 备份与恢复配置             |
| [`PG_ACCESS`](#pg_access)       | 服务暴露、连接池、VIP、DNS 等客户端访问配置      |
| [`PG_MONITOR`](#pg_monitor)     | PostgreSQL 监控 Exporter 配置      |
| [`PG_REMOVE`](#pg_remove)       | PostgreSQL 实例清理与卸载配置           |
{.full-width}


----------------

## 参数概览

--------

[`PG_ID`](#pg_id) 参数组用于定义 PostgreSQL 集群与实例的身份标识，包括集群名称、实例序号、角色、分片等核心身份参数。

| 参数                                      |    类型    | 级别  | 说明                                                           |
|:----------------------------------------|:--------:|:---:|:-------------------------------------------------------------|
| [`pg_mode`](#pg_mode)                   |  `enum`  | `C` | pgsql 集群模式: pgsql,citus,mssql,mysql,polar,ivory,oracle,gpsql |
| [`pg_cluster`](#pg_cluster)             | `string` | `C` | pgsql 集群名称, 必选身份参数                                           |
| [`pg_seq`](#pg_seq)                     |  `int`   | `I` | pgsql 实例号, 必选身份参数                                            |
| [`pg_role`](#pg_role)                   |  `enum`  | `I` | pgsql 实例角色, 必选身份参数, 可为 primary，replica，offline               |
| [`pg_instances`](#pg_instances)         |  `dict`  | `I` | 在一个节点上定义多个 pg 实例，使用 `{port:ins_vars}` 格式                     |
| [`pg_upstream`](#pg_upstream)           |   `ip`   | `I` | 级联从库或备份集群或的复制上游节点IP地址                                        |
| [`pg_shard`](#pg_shard)                 | `string` | `C` | pgsql 分片名，对 citus 与 gpsql 等水平分片集群为必选身份参数                     |
| [`pg_group`](#pg_group)                 |  `int`   | `C` | pgsql 分片号，正整数，对 citus 与 gpsql 等水平分片集群为必选身份参数                 |
| [`gp_role`](#gp_role)                   |  `enum`  | `C` | 这个集群的 greenplum 角色，可以是 master 或 segment                      |
| [`pg_exporters`](#pg_exporters)         |  `dict`  | `C` | 在该节点上设置额外的 pg_exporters 用于监控远程 postgres 实例                   |
| [`pg_offline_query`](#pg_offline_query) |  `bool`  | `I` | 设置为 true 将此只读实例标记为特殊的离线从库，承载 Offline 服务，允许离线查询               |
{.full-width}

--------

[`PG_BUSINESS`](#pg_business) 参数组用于定义业务用户、数据库、服务与访问控制规则，以及默认的系统用户凭据。

| 参数                                                    |      类型       |   级别   | 说明                                         |
|:------------------------------------------------------|:-------------:|:------:|:-------------------------------------------|
| [`pg_users`](#pg_users)                               |   `user[]`    |  `C`   | postgres 业务用户                              |
| [`pg_databases`](#pg_databases)                       | `database[]`  |  `C`   | postgres 业务数据库                             |
| [`pg_services`](#pg_services)                         |  `service[]`  |  `C`   | postgres 业务服务                              |
| [`pg_hba_rules`](#pg_hba_rules)                       |    `hba[]`    |  `C`   | postgres 的业务 hba 规则                        |
| [`pgb_hba_rules`](#pgb_hba_rules)                     |    `hba[]`    |  `C`   | pgbouncer 的业务 hba 规则                       |
| [`pg_crontab`](#pg_crontab)                           |  `string[]`   |  `C`   | postgres dbsu 的定时任务                        |
| [`pg_replication_username`](#pg_replication_username) |  `username`   |  `G`   | postgres 复制用户名，默认为 `replicator`            |
| [`pg_replication_password`](#pg_replication_password) |  `password`   |  `G`   | postgres 复制密码，默认为 `DBUser.Replicator`      |
| [`pg_admin_username`](#pg_admin_username)             |  `username`   |  `G`   | postgres 管理员用户名，默认为 `dbuser_dba`           |
| [`pg_admin_password`](#pg_admin_password)             |  `password`   |  `G`   | postgres 管理员明文密码，默认为 `DBUser.DBA`          |
| [`pg_monitor_username`](#pg_monitor_username)         |  `username`   |  `G`   | postgres 监控用户名，默认为 `dbuser_monitor`        |
| [`pg_monitor_password`](#pg_monitor_password)         |  `password`   |  `G`   | postgres 监控密码，默认为 `DBUser.Monitor`         |
| [`pg_dbsu_password`](#pg_dbsu_password)               |  `password`   | `G/C`  | dbsu 密码，默认为空字符串意味着不设置 dbsu 密码，最好不要设置。      |
{.full-width}

--------

[`PG_INSTALL`](#pg_install) 参数组用于配置 PostgreSQL 安装相关选项，包括版本、路径、软件包与扩展插件。

| 参数                                              |      类型       |   级别   | 说明                                            |
|:------------------------------------------------|:-------------:|:------:|:----------------------------------------------|
| [`pg_dbsu`](#pg_dbsu)                           |  `username`   |  `C`   | 操作系统 dbsu 名称，默认为 postgres，最好不要更改              |
| [`pg_dbsu_uid`](#pg_dbsu_uid)                   |     `int`     |  `C`   | 操作系统 dbsu uid 和 gid，对于默认的 postgres 用户和组为 26   |
| [`pg_dbsu_sudo`](#pg_dbsu_sudo)                 |    `enum`     |  `C`   | dbsu sudo 权限, none,limit,all,nopass，默认为 limit |
| [`pg_dbsu_home`](#pg_dbsu_home)                 |    `path`     |  `C`   | postgresql 主目录，默认为 `/var/lib/pgsql`           |
| [`pg_dbsu_ssh_exchange`](#pg_dbsu_ssh_exchange) |    `bool`     |  `C`   | 在 pgsql 集群之间交换 postgres dbsu ssh 密钥           |
| [`pg_version`](#pg_version)                     |    `enum`     |  `C`   | 要安装的 postgres 主版本，默认为 18                      |
| [`pg_bin_dir`](#pg_bin_dir)                     |    `path`     |  `C`   | postgres 二进制目录，默认为 `/usr/pgsql/bin`           |
| [`pg_log_dir`](#pg_log_dir)                     |    `path`     |  `C`   | postgres 日志目录，默认为 `/pg/log/postgres`          |
| [`pg_packages`](#pg_packages)                   |  `string[]`   |  `C`   | 要安装的 pg 包，`${pg_version}` 将被替换为实际主版本号         |
| [`pg_extensions`](#pg_extensions)               |  `string[]`   |  `C`   | 要安装的 pg 扩展，`${pg_version}` 将被替换为实际主版本号        |
{.full-width}

--------

[`PG_BOOTSTRAP`](#pg_bootstrap) 参数组用于配置 PostgreSQL 集群初始化引导，包括 Patroni 高可用、数据目录、存储、连接、编码等核心设置。

| 参数                                                  |     类型     |  级别   | 说明                                                    |
|:----------------------------------------------------|:----------:|:-----:|:------------------------------------------------------|
| [`pg_data`](#pg_data)                               |   `path`   |  `C`  | postgres 数据目录，默认为 `/pg/data`                          |
| [`pg_fs_main`](#pg_fs_main)                         |   `path`   |  `C`  | postgres 主数据的挂载点/路径，默认为 `/data/postgres`              |
| [`pg_fs_backup`](#pg_fs_backup)                     |   `path`   |  `C`  | pg 备份数据的挂载点/路径，默认为 `/data/backups`                    |
| [`pg_storage_type`](#pg_storage_type)               |   `enum`   |  `C`  | pg 主数据的存储类型，SSD、HDD，默认为 SSD，影响自动优化的参数。                |
| [`pg_dummy_filesize`](#pg_dummy_filesize)           |   `size`   |  `C`  | `/pg/dummy` 的大小，默认保留 64MB 磁盘空间用于紧急抢修                  |
| [`pg_listen`](#pg_listen)                           |  `ip(s)`   | `C/I` | postgres/pgbouncer 的监听地址，用逗号分隔的IP列表，默认为 `0.0.0.0`     |
| [`pg_port`](#pg_port)                               |   `port`   |  `C`  | postgres 监听端口，默认为 5432                                |
| [`pg_localhost`](#pg_localhost)                     |   `path`   |  `C`  | postgres 的 Unix 套接字目录，用于本地连接                          |
| [`pg_namespace`](#pg_namespace)                     |   `path`   |  `C`  | 在 etcd 中的顶级键命名空间，被 patroni & vip 用于高可用管理              |
| [`patroni_enabled`](#patroni_enabled)               |   `bool`   |  `C`  | 如果禁用，初始化期间不会创建 postgres 集群                            |
| [`patroni_mode`](#patroni_mode)                     |   `enum`   |  `C`  | patroni 工作模式：default,pause,remove                     |
| [`patroni_port`](#patroni_port)                     |   `port`   |  `C`  | patroni 监听端口，默认为 8008                                 |
| [`patroni_log_dir`](#patroni_log_dir)               |   `path`   |  `C`  | patroni 日志目录，默认为 `/pg/log/patroni`                    |
| [`patroni_ssl_enabled`](#patroni_ssl_enabled)       |   `bool`   |  `G`  | 使用 SSL 保护 patroni RestAPI 通信？                         |
| [`patroni_watchdog_mode`](#patroni_watchdog_mode)   |   `enum`   |  `C`  | patroni 看门狗模式：automatic,required,off，默认为 off          |
| [`patroni_username`](#patroni_username)             | `username` |  `C`  | patroni restapi 用户名，默认为 `postgres`                    |
| [`patroni_password`](#patroni_password)             | `password` |  `C`  | patroni restapi 密码，默认为 `Patroni.API`                  |
| [`pg_primary_db`](#pg_primary_db)                   |  `string`  |  `C`  | 指定集群中首要使用的数据库名，Citus等模式会用到，默认为 `postgres`             |
| [`pg_parameters`](#pg_parameters)                   |   `dict`   |  `C`  | 覆盖 postgresql.auto.conf 中的 PostgreSQL 参数              |
| [`pg_files`](#pg_files)                             |  `path[]`  |  `C`  | 拷贝至PGDATA目录中的额外文件列表 (例如许可证文件)                         |
| [`pg_conf`](#pg_conf)                               |   `enum`   |  `C`  | 配置模板：oltp,olap,crit,tiny，默认为 `oltp.yml`               |
| [`pg_max_conn`](#pg_max_conn)                       |   `int`    |  `C`  | postgres 最大连接数，`auto` 将使用推荐值                          |
| [`pg_shared_buffer_ratio`](#pg_shared_buffer_ratio) |  `float`   |  `C`  | postgres 共享缓冲区内存比率，默认为 0.25，范围 0.1~0.4                |
| [`pg_rto`](#pg_rto)                                 |   `enum`   |  `C`  | RTO 模式：`fast`,`norm`,`safe`,`wide`，默认 `norm`          |
| [`pg_rto_plan`](#pg_rto_plan)                       |   `dict`   |  `G`  | RTO 预设配置，定义 Patroni HA 与 HAProxy 健康检查的超时参数            |
| [`pg_rpo`](#pg_rpo)                                 |   `int`    |  `C`  | 恢复点目标（字节），默认为 `1MiB`                                  |
| [`pg_libs`](#pg_libs)                               |  `string`  |  `C`  | 预加载的库，默认为 `pg_stat_statements,auto_explain`           |
| [`pg_delay`](#pg_delay)                             | `interval` |  `I`  | 备份集群主库的WAL重放应用延迟，用于制备延迟从库                             |
| [`pg_checksum`](#pg_checksum)                       |   `bool`   |  `C`  | 为 postgres 集群启用数据校验和？                                 |
| [`pg_pwd_enc`](#pg_pwd_enc)                         |   `enum`   |  `C`  | 密码加密算法：固定为 scram-sha-256                              |
| [`pg_encoding`](#pg_encoding)                       |   `enum`   |  `C`  | 数据库集群编码，默认为 `UTF8`                                    |
| [`pg_locale`](#pg_locale)                           |   `enum`   |  `C`  | 数据库集群本地化设置，默认为 `C`                                    |
| [`pg_lc_collate`](#pg_lc_collate)                   |   `enum`   |  `C`  | 数据库集群排序，默认为 `C`                                       |
| [`pg_lc_ctype`](#pg_lc_ctype)                       |   `enum`   |  `C`  | 数据库字符类型，默认为 `C`                                       |
| [`pg_io_method`](#pg_io_method)                     |   `enum`   |  `C`  | PostgreSQL IO 方法：`auto`, `sync`, `worker`, `io_uring` |
| [`pg_etcd_password`](#pg_etcd_password)             | `password` |  `C`  | 此 PostgreSQL 集群在 etcd 中使用的密码，默认使用集群名                  |
| [`pgsodium_key`](#pgsodium_key)                     |  `string`  |  `C`  | pgsodium 加密主密钥，64 位十六进制数字，默认使用 sha256(pg_cluster)     |
| [`pgsodium_getkey_script`](#pgsodium_getkey_script) |   `path`   |  `C`  | pgsodium 获取密钥脚本路径，默认使用模板中的 pgsodium_getkey            |
{.full-width}

--------

[`PG_PROVISION`](#pg_provision) 参数组用于配置 PostgreSQL 集群模板置备，包括默认角色、权限、模式、扩展与 HBA 规则。

| 参数                                                |      类型       |  级别   | 说明                                |
|:--------------------------------------------------|:-------------:|:-----:|:----------------------------------|
| [`pg_provision`](#pg_provision)                   |    `bool`     |  `C`  | 在引导后置备 postgres 集群内部的业务对象？        |
| [`pg_init`](#pg_init)                             |   `string`    | `G/C` | 为集群模板提供初始化脚本，默认为 `pg-init`        |
| [`pg_default_roles`](#pg_default_roles)           |   `role[]`    | `G/C` | postgres 集群中的默认预定义角色和系统用户         |
| [`pg_default_privileges`](#pg_default_privileges) |  `string[]`   | `G/C` | 由管理员用户创建数据库内对象时的默认权限              |
| [`pg_default_schemas`](#pg_default_schemas)       |  `string[]`   | `G/C` | 要创建的默认模式列表                        |
| [`pg_default_extensions`](#pg_default_extensions) | `extension[]` | `G/C` | 要创建的默认扩展列表                        |
| [`pg_reload`](#pg_reload)                         |    `bool`     |  `A`  | 更改HBA后，是否立即重载 postgres 配置         |
| [`pg_default_hba_rules`](#pg_default_hba_rules)   |    `hba[]`    | `G/C` | postgres 基于主机的认证规则，全局PG默认HBA      |
| [`pgb_default_hba_rules`](#pgb_default_hba_rules) |    `hba[]`    | `G/C` | pgbouncer 默认的基于主机的认证规则，全局PGB默认HBA |
{.full-width}

--------

[`PG_BACKUP`](#pg_backup) 参数组用于配置 pgBackRest 备份与恢复，包括仓库类型、路径、保留策略等。

| 参数                                                  |   类型   |  级别   | 说明                                       |
|:----------------------------------------------------|:------:|:-----:|:-----------------------------------------|
| [`pgbackrest_enabled`](#pgbackrest_enabled)         | `bool` |  `C`  | 在 pgsql 主机上启用 pgbackrest？                |
| [`pgbackrest_clean`](#pgbackrest_clean)             | `bool` |  `C`  | 在初始化时删除以前的 pg 备份数据？                      |
| [`pgbackrest_log_dir`](#pgbackrest_log_dir)         | `path` |  `C`  | pgbackrest 日志目录，默认为 `/pg/log/pgbackrest` |
| [`pgbackrest_method`](#pgbackrest_method)           | `enum` |  `C`  | pgbackrest 使用的仓库：local,minio,等...        |
| [`pgbackrest_init_backup`](#pgbackrest_init_backup) | `bool` |  `C`  | pgbackrest 初始化完成后是否立即执行全量备份？默认为 `true`   |
| [`pgbackrest_repo`](#pgbackrest_repo)               | `dict` | `G/C` | pgbackrest 仓库定义                          |
{.full-width}

--------

[`PG_ACCESS`](#pg_access) 参数组用于配置服务暴露、连接池、VIP、DNS 等客户端访问相关选项。

| 参数                                                    |     类型      |  级别   | 说明                                                  |
|:------------------------------------------------------|:-----------:|:-----:|:----------------------------------------------------|
| [`pgbouncer_enabled`](#pgbouncer_enabled)             |   `bool`    |  `C`  | 如果禁用，则不会配置 pgbouncer 连接池                            |
| [`pgbouncer_port`](#pgbouncer_port)                   |   `port`    |  `C`  | pgbouncer 监听端口，默认为 6432                             |
| [`pgbouncer_log_dir`](#pgbouncer_log_dir)             |   `path`    |  `C`  | pgbouncer 日志目录，默认为 `/pg/log/pgbouncer`              |
| [`pgbouncer_auth_query`](#pgbouncer_auth_query)       |   `bool`    |  `C`  | 使用 AuthQuery 来从 postgres 获取未列出的业务用户？                |
| [`pgbouncer_poolmode`](#pgbouncer_poolmode)           |   `enum`    |  `C`  | 池化模式：transaction,session,statement，默认为 transaction  |
| [`pgbouncer_sslmode`](#pgbouncer_sslmode)             |   `enum`    |  `C`  | pgbouncer 客户端 SSL 模式，默认为禁用                          |
| [`pgbouncer_ignore_param`](#pgbouncer_ignore_param)   | `string[]`  |  `C`  | pgbouncer 忽略的启动参数列表                                 |
| [`pg_weight`](#pg_weight)                             |    `int`    |  `I`  | 在服务中的相对负载均衡权重，默认为 100，范围 0-255                      |
| [`pg_service_provider`](#pg_service_provider)         |  `string`   | `G/C` | 专用的 haproxy 节点组名称，或默认空字符，使用本地节点上的 haproxy           |
| [`pg_default_service_dest`](#pg_default_service_dest) |   `enum`    | `G/C` | 如果 svc.dest='default'，默认服务指向哪里？postgres 或 pgbouncer |
| [`pg_default_services`](#pg_default_services)         | `service[]` | `G/C` | postgres 默认服务定义列表，全局共用。                             |
| [`pg_vip_enabled`](#pg_vip_enabled)                   |   `bool`    |  `C`  | 是否为 pgsql 主节点启用 L2 VIP？默认不启用                        |
| [`pg_vip_address`](#pg_vip_address)                   |   `cidr4`   |  `C`  | vip 地址的格式为 `<ipv4>/<mask>`，启用 vip 时为必选参数            |
| [`pg_vip_interface`](#pg_vip_interface)               |  `string`   | `C/I` | 监听的 vip 网络接口，默认为 eth0                               |
| [`pg_dns_suffix`](#pg_dns_suffix)                     |  `string`   |  `C`  | pgsql dns 后缀，默认为空                                   |
| [`pg_dns_target`](#pg_dns_target)                     |   `enum`    |  `C`  | PG DNS 解析到哪里？auto、primary、vip、none 或者特定的 IP 地址      |
{.full-width}

--------

[`PG_MONITOR`](#pg_monitor) 参数组用于配置 PostgreSQL 监控 Exporter，包括 pg_exporter、pgbouncer_exporter 和 pgbackrest_exporter。

| 参数                                                              |    类型    | 级别  | 说明                                       |
|:----------------------------------------------------------------|:--------:|:---:|:-----------------------------------------|
| [`pg_exporter_enabled`](#pg_exporter_enabled)                   |  `bool`  | `C` | 在 pgsql 主机上启用 pg_exporter 吗？             |
| [`pg_exporter_config`](#pg_exporter_config)                     | `string` | `C` | pg_exporter 配置文件/模板名称                    |
| [`pg_exporter_cache_ttls`](#pg_exporter_cache_ttls)             | `string` | `C` | pg_exporter 收集器阶梯TTL配置，默认为 '1,10,60,300' |
| [`pg_exporter_port`](#pg_exporter_port)                         |  `port`  | `C` | pg_exporter 监听端口，默认为 9630                |
| [`pg_exporter_params`](#pg_exporter_params)                     | `string` | `C` | pg_exporter dsn 中传入的额外 URL 参数            |
| [`pg_exporter_url`](#pg_exporter_url)                           | `pgurl`  | `C` | 如果指定，则覆盖自动生成的 postgres DSN 连接串           |
| [`pg_exporter_auto_discovery`](#pg_exporter_auto_discovery)     |  `bool`  | `C` | 监控是否启用自动数据库发现？默认启用                       |
| [`pg_exporter_exclude_database`](#pg_exporter_exclude_database) | `string` | `C` | 启用自动发现时，排除在外的数据库名称列表，用逗号分隔               |
| [`pg_exporter_include_database`](#pg_exporter_include_database) | `string` | `C` | 启用自动发现时，只监控这个列表中的数据库，名称用逗号分隔             |
| [`pg_exporter_connect_timeout`](#pg_exporter_connect_timeout)   |  `int`   | `C` | pg_exporter 连接超时，单位毫秒，默认为 200            |
| [`pg_exporter_options`](#pg_exporter_options)                   |  `arg`   | `C` | pg_exporter 的额外命令行参数选项                   |
| [`pgbouncer_exporter_enabled`](#pgbouncer_exporter_enabled)     |  `bool`  | `C` | 在 pgsql 主机上启用 pgbouncer_exporter 吗？      |
| [`pgbouncer_exporter_port`](#pgbouncer_exporter_port)           |  `port`  | `C` | pgbouncer_exporter 监听端口，默认为 9631         |
| [`pgbouncer_exporter_url`](#pgbouncer_exporter_url)             | `pgurl`  | `C` | 如果指定，则覆盖自动生成的 pgbouncer dsn 连接串          |
| [`pgbouncer_exporter_options`](#pgbouncer_exporter_options)     |  `arg`   | `C` | pgbouncer_exporter 的额外命令行参数选项            |
| [`pgbackrest_exporter_enabled`](#pgbackrest_exporter_enabled)   |  `bool`  | `C` | 在 pgsql 主机上启用 pgbackrest_exporter 吗？     |
| [`pgbackrest_exporter_port`](#pgbackrest_exporter_port)         |  `port`  | `C` | pgbackrest_exporter 监听端口，默认为 9854        |
| [`pgbackrest_exporter_options`](#pgbackrest_exporter_options)   |  `arg`   | `C` | pgbackrest_exporter 的额外命令行参数选项           |
{.full-width}


--------

[`PG_REMOVE`](#pg_remove) 参数组用于配置 PostgreSQL 实例清理与卸载行为，包括数据目录、备份、软件包的删除控制。

| 参数                              |      类型       |    级别    | 说明                               |
|:--------------------------------|:-------------:|:--------:|:---------------------------------|
| [`pg_rm_data`](#pg_rm_data)     |    `bool`     | `G/C/A`  | 删除 pgsql 实例时是否清理 postgres 数据目录？  |
| [`pg_rm_backup`](#pg_rm_backup) |    `bool`     | `G/C/A`  | 删除主库时是否一并清理 pgbackrest 备份？       |
| [`pg_rm_pkg`](#pg_rm_pkg)       |    `bool`     | `G/C/A`  | 删除 pgsql 实例时是否卸载相关软件包？           |
| [`pg_safeguard`](#pg_safeguard) |    `bool`     | `G/C/A`  | 防误删保险，阻止误执行 pgsql 清理操作？默认为 false |
{.full-width}


------------------------------

## `PG_ID`

以下是一些常用的参数，用于标识 PGSQL 模块中的 [实体](/docs/concept/model/pgsql)：集群、实例、服务等...


```yaml
# pg_cluster:           #CLUSTER  # pgsql 集群名称，必需的标识参数
# pg_seq: 0             #INSTANCE # pgsql 实例序列号，必需的标识参数
# pg_role: replica      #INSTANCE # pgsql 角色，必需的，可以是 primary,replica,offline
# pg_instances: {}      #INSTANCE # 在节点上定义多个 pg 实例，使用 `{port:ins_vars}` 格式
# pg_upstream:          #INSTANCE # 备用集群或级联副本的 repl 上游 ip 地址
# pg_shard:             #CLUSTER  # pgsql 分片名称，分片集群的可选标识
# pg_group: 0           #CLUSTER  # pgsql 分片索引号，分片集群的可选标识
# gp_role: master       #CLUSTER  # 此集群的 greenplum 角色，可以是 master 或 segment
pg_offline_query: false #INSTANCE # 设置为 true 以在此实例上启用离线查询
```

您必须显式指定这些**身份参数**，它们没有默认值：

|             名称              |    类型    |  级别   | 扩展说明            |
|:---------------------------:|:--------:|:-----:|-----------------|
| [`pg_cluster`](#pg_cluster) | `string` | **C** | **PG 数据库集群名称**  |
|     [`pg_seq`](#pg_seq)     | `number` | **I** | **PG 数据库实例 ID** |
|    [`pg_role`](#pg_role)    |  `enum`  | **I** | **PG 数据库实例角色**  |
|   [`pg_shard`](#pg_shard)   | `string` | **C** | **数据库分片名称**     |
|   [`pg_group`](#pg_group)   | `number` | **C** | **数据库分片序号**     |
{.full-width}

- [`pg_cluster`](#pg_cluster): 它标识集群的名称，该名称在集群级别配置。
- [`pg_role`](#pg_role): 在实例级别配置，标识 ins 的角色。只有 `primary` 角色会特别处理。如果不填写，默认为 `replica` 角色和特殊的 `delayed` 和 `offline` 角色。
- [`pg_seq`](#pg_seq): 用于在集群内标识 ins，通常是从 0 或 1 递增的整数，一旦分配就不会更改。
- `{{ pg_cluster }}-{{ pg_seq }}` 用于唯一标识 ins，即 `pg_instance`。
- `{{ pg_cluster }}-{{ pg_role }}` 用于标识集群内的服务，即 `pg_service`。
- [`pg_shard`](#pg_shard) 和 [`pg_group`](#pg_group) 用于水平分片集群，仅用于 citus、greenplum 和 matrixdb。

[`pg_cluster`](#pg_cluster)、[`pg_role`](#pg_role)、[`pg_seq`](#pg_seq) 是核心**标识参数**，对于任何 Postgres 集群都是**必选**的，并且必须显式指定。以下是一个示例：

```yaml
pg-test:
  hosts:
    10.10.10.11: {pg_seq: 1, pg_role: replica}
    10.10.10.12: {pg_seq: 2, pg_role: primary}
    10.10.10.13: {pg_seq: 3, pg_role: replica}
  vars:
    pg_cluster: pg-test
```

所有其他参数都可以从全局配置或默认配置继承，但标识参数必须**明确指定**和**手动分配**。



### `pg_mode`

参数名称： `pg_mode`， 类型： `enum`， 层次：`C`

PostgreSQL 集群模式，默认值为 `pgsql`，即标准的 PostgreSQL 集群。

可用的模式选项包括：

- `pgsql`：标准的 PostgreSQL 集群
- `citus`：Citus 分布式数据库集群
- `mssql`：Babelfish MSSQL 线缆协议兼容内核
- `mysql`：OpenHalo/HaloDB MySQL 线协议兼容内核
- `ivory`：IvorySQL Oracle 兼容内核
- `polar`：PolarDB for PostgreSQL 内核
- `oracle`：PolarDB for Oracle 内核
- `gpsql`：Greenplum 并行数据库集群（监控）

如果 `pg_mode` 设置为 `citus` 或 `gpsql`，则需要两个额外的必选身份参数 [`pg_shard`](#pg_shard) 和 [`pg_group`](#pg_group) 来定义水平分片集群的身份。

在这两种情况下，每一个 PostgreSQL 集群都是一组更大的业务单元的一部分。




### `pg_cluster`

参数名称： `pg_cluster`， 类型： `string`， 层次：`C`

PostgreSQL 集群名称，必选的身份标识参数，没有默认值

集群名将用作资源的命名空间。

集群命名需要遵循特定的命名模式：`[a-z][a-z0-9-]*`，即，只使用数字与小写字母，且不以数字开头，以符合标识上的不同约束的要求。




### `pg_seq`

参数名称： `pg_seq`， 类型： `int`， 层次：`I`

PostgreSQL 实例序列号，必选的身份标识参数，无默认值。

此实例的序号，在其**集群**内是唯一分配的，通常使用自然数，从0或1开始分配，通常不会回收重用。




### `pg_role`

参数名称： `pg_role`， 类型： `enum`， 层次：`I`

PostgreSQL 实例角色，必选的身份标识参数，无默认值。取值可以是：`primary`, `replica`, `offline`

PGSQL 实例的角色，可以是：`primary`、`replica`、`standby` 或 `offline`。

- `primary`: 主实例，在集群中有且仅有一个。
- `replica`: 用于承载在线只读流量的副本，高负载下可能会有轻微复制延迟（10ms~100ms, 100KB）。
- `offline`: 用于处理离线只读流量的离线副本，如统计分析/ETL/个人查询等。





### `pg_instances`

参数名称： `pg_instances`， 类型： `dict`， 层次：`I`

使用 `{port:ins_vars}` 的形式在一台主机上定义多个 PostgreSQL 实例。

此参数是为在单个节点上的多实例部署保留的参数，Pigsty 尚未实现此功能，并强烈建议独占节点部署。





### `pg_upstream`

参数名称： `pg_upstream`， 类型： `ip`， 层次：`I`

[备份集群](/docs/pgsql/config/cluster#备份集群) 或级联从库的上游实例 IP 地址。

在集群的 `primary` 实例上设置 `pg_upstream` ，表示此集群是一个 [备份集群](/docs/pgsql/config/cluster#备份集群)，该实例将作为 `standby leader`，从上游集群接收并应用更改。

对非 `primary` 实例设置 `pg_upstream` 参数将指定一个具体实例作为物理复制的上游，如果与主实例 ip 地址不同，此实例将成为 **级联副本** 。确保上游 IP 地址是同一集群中的另一个实例是用户的责任。





### `pg_shard`

参数名称： `pg_shard`， 类型： `string`， 层次：`C`

PostgreSQL 水平分片名称，对于分片集群来说（例如 citus 集群），这是的必选标识参数。

当多个标准的 PostgreSQL 集群一起以水平分片方式为同一业务提供服务时，Pigsty 将此组集群标记为 **水平分片集群**。

[`pg_shard`](#pg_shard) 是分片组名称。它通常是 [`pg_cluster`](#pg_cluster) 的前缀。

例如，如果我们有一个分片组 `pg-citus`，并且其中有4个集群，它们的标识参数将是：

```
cls pg_shard: pg-citus
cls pg_group = 0:   pg-citus0
cls pg_group = 1:   pg-citus1
cls pg_group = 2:   pg-citus2
cls pg_group = 3:   pg-citus3
```





### `pg_group`

参数名称： `pg_group`， 类型： `int`， 层次：`C`

PostgreSQL 水平分片集群的分片索引号，对于分片集群来说（例如 citus 集群），这是的必选标识参数。

此参数与 [pg_shard](#pg_shard) 配对使用，通常可以使用非负整数作为索引号。







### `gp_role`

参数名称： `gp_role`， 类型： `enum`， 层次：`C`

PostgreSQL 集群的 Greenplum/Matrixdb 角色，可以是 `master` 或 `segment`。

- `master`: 标记 postgres 集群为 greenplum 主实例（协调节点），这是默认值。
- `segment` 标记 postgres 集群为 greenplum 段集群（数据节点）。

此参数仅用于 Greenplum/MatrixDB 数据库 （[`pg_mode`](#pg_mode) 为 `gpsql`），对于普通的 PostgreSQL 集群没有意义。






### `pg_exporters`

参数名称： `pg_exporters`， 类型： `dict`， 层次：`C`

额外用于 [监控](/docs/pgsql/monitor) 远程 PostgreSQL 实例的 Exporter 定义，默认值：`{}`

如果您希望监控远程 PostgreSQL 实例，请在监控系统所在节点（Infra节点）集群上的 `pg_exporters` 参数中定义它们，并使用 [`pgsql-monitor.yml`](/docs/pgsql/playbook#pgsql-monitoryml) 剧本来完成部署。

```yaml
pg_exporters: # list all remote instances here, alloc a unique unused local port as k
    20001: { pg_cluster: pg-foo, pg_seq: 1, pg_host: 10.10.10.10 }
    20004: { pg_cluster: pg-foo, pg_seq: 2, pg_host: 10.10.10.11 }
    20002: { pg_cluster: pg-bar, pg_seq: 1, pg_host: 10.10.10.12 }
    20003: { pg_cluster: pg-bar, pg_seq: 1, pg_host: 10.10.10.13 }
```






### `pg_offline_query`

参数名称： `pg_offline_query`， 类型： `bool`， 层次：`I`

设置为 `true` 以在此实例上启用离线查询，默认为 `false`。

当某个 PostgreSQL 实例启用此参数时， 属于 `dbrole_offline` 分组的用户可以直接连接到该 PostgreSQL 实例上执行离线查询（慢查询，交互式查询，ETL/分析类查询）。

带有此标记的实例在效果上类似于为实例设置 `pg_role` = `offline` ，唯一的区别在于 `offline` 实例默认不会承载 `replica` 服务的请求，是作为专用的离线/分析从库实例而存在的。

如果您没有富余的实例可以专门用于此目的，则可以挑选一台普通的从库，在实例层次启用此参数，以便在需要时承载离线查询。









------------------------------

## `PG_BUSINESS`

定制集群模板：用户，数据库，服务，权限规则。

用户需**重点关注**此部分参数，因为这里是业务声明自己所需数据库对象的地方。

* 业务用户定义： [**`pg_users`**](#pg_users)
* 业务数据库定义： [**`pg_databases`**](#pg_databases)
* 集群专有服务定义： [**`pg_services`**](#pg_services) （全局定义：[**`pg_default_services`**](#pg_default_services)）
* PostgreSQL集群/实例特定的HBA规则： [**`pg_hba_rules`**](#pg_hba_rules)
* Pgbouncer连接池特定HBA规则： [**`pgb_hba_rules`**](#pgb_hba_rules)
* 定时任务（crontab）定义： [**`pg_crontab`**](#pg_crontab)

[默认](/docs/concept/sec/ac/#默认角色与系统用户) 的数据库用户及其凭据，强烈建议在生产环境中修改这些用户的密码。

* PG管理员用户：[`pg_admin_username`](#pg_admin_username) / [`pg_admin_password`](#pg_admin_password)
* PG复制用户： [`pg_replication_username`](#pg_replication_username) / [`pg_replication_password`](#pg_replication_password)
* PG监控用户：[`pg_monitor_username`](#pg_monitor_username) / [`pg_monitor_password`](#pg_monitor_password)

```yaml
# postgres business object definition, overwrite in group vars
pg_users: []                      # postgres business users
pg_databases: []                  # postgres business databases
pg_services: []                   # postgres business services
pg_hba_rules: []                  # business hba rules for postgres
pgb_hba_rules: []                 # business hba rules for pgbouncer
pg_crontab: []                    # crontab entries for postgres dbsu
# global credentials, overwrite in global vars
pg_dbsu_password: ''              # dbsu password, empty string means no dbsu password by default
pg_replication_username: replicator
pg_replication_password: DBUser.Replicator
pg_admin_username: dbuser_dba
pg_admin_password: DBUser.DBA
pg_monitor_username: dbuser_monitor
pg_monitor_password: DBUser.Monitor
```




### `pg_users`

参数名称： `pg_users`， 类型： `user[]`， 层次：`C`

PostgreSQL 业务用户列表，需要在 PG 集群层面进行定义。默认值为：`[]` 空列表。

每一个数组元素都是一个 [**用户/角色**](/docs/pgsql/config/user) 定义，例如：

```yaml
- name: dbuser_meta               # 必选，`name` 是用户定义的唯一必选字段
  state: create                   # 可选，用户状态：create（创建，默认）、absent（删除）
  password: DBUser.Meta           # 可选，密码，可以是 scram-sha-256 哈希字符串或明文
  login: true                     # 可选，默认为 true，是否可以登录
  superuser: false                # 可选，默认为 false，是否是超级用户
  createdb: false                 # 可选，默认为 false，是否可以创建数据库
  createrole: false               # 可选，默认为 false，是否可以创建角色
  inherit: true                   # 可选，默认为 true，是否自动继承所属角色权限
  replication: false              # 可选，默认为 false，是否可以发起流复制连接
  bypassrls: false                # 可选，默认为 false，是否可以绕过行级安全
  connlimit: -1                   # 可选，用户连接数限制，默认 -1 不限制
  expire_in: 3650                 # 可选，从创建时起 N 天后过期（优先级比 expire_at 高）
  expire_at: '2030-12-31'         # 可选，过期日期，使用 YYYY-MM-DD 格式（优先级没 expire_in 高）
  comment: pigsty admin user      # 可选，用户备注信息
  roles: [dbrole_admin]           # 可选，所属角色数组
  parameters:                     # 可选，角色级配置参数
    search_path: public
  pgbouncer: true                 # 可选，是否加入连接池用户列表，默认 false
  pool_mode: transaction          # 可选，用户级别的池化模式，默认 transaction
  pool_connlimit: -1              # 可选，用户级别的连接池最大连接数，默认 -1 不限制
```

> 用户级连接池限额字段统一使用 `pool_connlimit`（对应 Pgbouncer `max_user_connections`）。





### `pg_databases`

参数名称： `pg_databases`， 类型： `database[]`， 层次：`C`

PostgreSQL 业务数据库列表，需要在 PG 集群层面进行定义。默认值为：`[]` 空列表。

每一个数组元素都是一个 [**业务数据库**](/docs/pgsql/config/db) 定义，例如：

```yaml
- name: meta                      # 必选，`name` 是数据库定义的唯一必选字段
  state: create                   # 可选，数据库状态：create（创建，默认）、absent（删除）、recreate（重建）
  baseline: cmdb.sql              # 可选，数据库 sql 的基线定义文件路径（ansible 搜索路径中的相对路径，如 files/）
  pgbouncer: true                 # 可选，是否将此数据库添加到 pgbouncer 数据库列表？默认为 true
  schemas: [pigsty]               # 可选，要创建的附加模式，由模式名称字符串组成的数组
  extensions:                     # 可选，要安装的附加扩展：扩展对象的数组
    - { name: postgis , schema: public }  # 可以指定将扩展安装到某个模式中，也可以不指定（不指定则安装到 search_path 首位模式中）
    - { name: timescaledb }               # 例如有的扩展会创建并使用固定的模式，就不需要指定模式。
  comment: pigsty meta database   # 可选，数据库的说明与备注信息
  owner: postgres                 # 可选，数据库所有者，不指定则为当前用户
  template: template1             # 可选，要使用的模板，默认为 template1，目标必须是一个模板数据库
  strategy: FILE_COPY             # 可选，克隆策略：FILE_COPY 或 WAL_LOG（PG15+），不指定使用 PG 默认
  encoding: UTF8                  # 可选，不指定则继承模板/集群配置（UTF8）
  locale: C                       # 可选，不指定则继承模板/集群配置（C）
  lc_collate: C                   # 可选，不指定则继承模板/集群配置（C）
  lc_ctype: C                     # 可选，不指定则继承模板/集群配置（C）
  locale_provider: libc           # 可选，本地化提供者：libc、icu、builtin（PG15+）
  icu_locale: en-US               # 可选，ICU 本地化规则（PG15+）
  icu_rules: ''                   # 可选，ICU 排序规则（PG16+）
  builtin_locale: C.UTF-8         # 可选，内置本地化提供者规则（PG17+）
  tablespace: pg_default          # 可选，默认表空间，默认为 'pg_default'
  is_template: false              # 可选，是否标记为模板数据库，允许任何有 CREATEDB 权限的用户克隆
  allowconn: true                 # 可选，是否允许连接，默认为 true。显式设置 false 将完全禁止连接到此数据库
  revokeconn: false               # 可选，撤销公共连接权限。默认为 false，设置为 true 时，属主和管理员之外用户的 CONNECT 权限会被回收
  register_datasource: true       # 可选，是否将此数据库注册到 grafana 数据源？默认为 true，显式设置为 false 会跳过注册
  connlimit: -1                   # 可选，数据库连接限制，默认为 -1 ，不限制，设置为正整数则会限制连接数
  parameters:                     # 可选，数据库级参数，通过 ALTER DATABASE SET 设置
    work_mem: '64MB'
    statement_timeout: '30s'
  pool_auth_user: dbuser_meta     # 可选，连接到此 pgbouncer 数据库的所有连接都将使用此用户进行验证（启用 pgbouncer_auth_query 才有用）
  pool_mode: transaction          # 可选，数据库级别的 pgbouncer 池化模式，默认为 transaction
  pool_size: 64                   # 可选，数据库级别的 pgbouncer 默认池子大小，默认为 64
  pool_reserve: 32                # 可选，数据库级别的 pgbouncer 池子保留空间，默认为 32，当默认池子不够用时，最多再申请这么多条突发连接
  pool_size_min: 0                # 可选，数据库级别的 pgbouncer 池的最小大小，默认为 0
  pool_connlimit: 100             # 可选，数据库级别的最大数据库连接数，默认为 100
```

> 自 Pigsty `v4.1.0` 起，数据库连接池参数统一使用 `pool_reserve` 与 `pool_connlimit`，旧别名 `pool_size_reserve` / `pool_max_db_conn` 已收敛。

在每个数据库定义对象中，只有 `name` 是必选字段，其他的字段都是可选项。







### `pg_services`

参数名称： `pg_services`， 类型： `service[]`， 层次：`C`

PostgreSQL 服务列表，需要在 PG 集群层面进行定义。默认值为：`[]` ，空列表。

用于在数据库集群层面定义额外的服务，数组中的每一个对象定义了一个 [**服务**](/docs/pgsql/service/#定义服务)，一个完整的服务定义样例如下：


```yaml
- name: standby                   # 必选，服务名称，最终的 svc 名称会使用 `pg_cluster` 作为前缀，例如：pg-meta-standby
  port: 5435                      # 必选，暴露的服务端口（作为 kubernetes 服务节点端口模式）
  ip: "*"                         # 可选，服务绑定的 IP 地址，默认情况下为所有 IP 地址
  selector: "[]"                  # 必选，服务成员选择器，使用 JMESPath 来筛选配置清单
  backup: "[? pg_role == `primary`]"  # 可选，服务成员选择器（备份），也就是当默认选择器选中的实例都宕机后，服务才会由这里选中的实例成员来承载
  dest: default                   # 可选，目标端口，default|postgres|pgbouncer|<port_number>，默认为 'default'，Default的意思就是使用 pg_default_service_dest 的取值来最终决定
  check: /sync                    # 可选，健康检查 URL 路径，默认为 /，这里使用 Patroni API：/sync ，只有同步备库和主库才会返回 200 健康状态码
  maxconn: 5000                   # 可选，允许的前端连接最大数，默认为5000
  balance: roundrobin             # 可选，haproxy 负载均衡算法（默认为 roundrobin，其他选项：leastconn）
  #options: 'inter 3s fastinter 1s downinter 5s rise 3 fall 3 on-marked-down shutdown-sessions slowstart 30s maxconn 3000 maxqueue 128 weight 100'
  # 注意：健康检查相关参数（inter, fastinter, downinter, rise, fall）现在由 pg_rto_plan 统一控制
  # 默认 norm 模式参数：inter 2s fastinter 1s downinter 2s rise 3 fall 3
```

请注意，本参数用于在集群层面添加额外的服务。如果您想在全局定义所有 PostgreSQL 数据库都要提供的服务，可以使用 [`pg_default_services`](#pg_default_services) 参数。





### `pg_hba_rules`

参数名称： `pg_hba_rules`， 类型： `hba[]`， 层次：`C`

数据库集群/实例的客户端IP黑白名单规则。默认为：`[]` 空列表。

对象数组，每一个对象都代表一条规则， [hba](/docs/pgsql/config/hba#规则字段) 规则对象的定义形式如下：

```yaml
- title: allow intranet password access
  role: common
  rules:
    - host   all  all  10.0.0.0/8      md5
    - host   all  all  172.16.0.0/12   md5
    - host   all  all  192.168.0.0/16  md5
```

* `title`： 规则的标题名称，会被渲染为 HBA 文件中的注释。
* `rules`：规则数组，每个元素是一条标准的 HBA 规则字符串。
* `role`：规则的应用范围，哪些实例角色会启用这条规则？
    * `common`：对于所有实例生效
    * `primary`, `replica`,`offline`： 只针对特定的角色 [`pg_role`](#pg_role) 实例生效。
    * 特例：`role: 'offline'` 的规则除了会应用在 `pg_role : offline` 的实例上，对于带有 [`pg_offline_query`](#pg_offline_query) 标记的实例也生效。

除了上面这种原生 HBA 规则定义形式，Pigsty 还提供了另外一种更为简便的别名形式：

```yaml
- addr: 'intra'    # world|intra|infra|admin|local|localhost|cluster|<cidr>
  auth: 'pwd'      # trust|pwd|ssl|cert|deny|<official auth method>
  user: 'all'      # all|${dbsu}|${repl}|${admin}|${monitor}|<user>|<group>
  db: 'all'        # all|replication|....
  rules: []        # raw hba string precedence over above all
  title: allow intranet password access
```

[`pg_default_hba_rules`](#pg_default_hba_rules) 与本参数基本类似，但它是用于定义全局的 HBA 规则，而本参数通常用于定制某个集群/实例的 HBA 规则。







### `pgb_hba_rules`

参数名称： `pgb_hba_rules`， 类型： `hba[]`， 层次：`C`

Pgbouncer 业务HBA规则，默认值为： `[]`， 空数组。

此参数与 [`pg_hba_rules`](#pg_hba_rules) 基本类似，都是 [hba](/docs/pgsql/config/hba#规则字段) 规则对象的数组，区别在于本参数是为 Pgbouncer 准备的。

[`pgb_default_hba_rules`](#pgb_default_hba_rules) 与本参数基本类似，但它是用于定义全局连接池 HBA 规则，而本参数通常用于定制某个连接池集群/实例的 HBA 规则。




### `pg_crontab`

参数名称： `pg_crontab`， 类型： `string[]`， 层次：`C`

PostgreSQL 数据库超级用户（dbsu，默认 `postgres`）的定时任务列表，默认值为：`[]` 空数组。

每个数组元素是一行 crontab 条目，使用标准的用户 crontab 格式：`分 时 日 月 周 命令`（**无需指定用户名**）。

```yaml
pg_crontab:
  - '00 01 * * * /pg/bin/pg-backup full'      # 每天凌晨 1 点全量备份
  - '00 13 * * * /pg/bin/pg-backup'           # 每天下午 1 点增量备份
```

此参数会将定时任务写入 postgres 用户的个人 crontab 文件：
- EL 系统：`/var/spool/cron/postgres`
- Debian 系统：`/var/spool/cron/crontabs/postgres`

> **注意**：此参数用于取代在 [`node_crontab`](/docs/node/param#node_crontab) 中配置 postgres 用户任务的旧做法。
> 因为 `node_crontab` 在 NODE 初始化阶段写入 `/etc/crontab`，此时 `postgres` 用户可能尚未创建，会导致 cron 报错。

移除集群时，此 crontab 文件会被一并删除。




### `pg_replication_username`

参数名称： `pg_replication_username`， 类型： `username`， 层次：`G`

PostgreSQL 物理复制用户名，默认使用 `replicator`，不建议修改此参数。






### `pg_replication_password`

参数名称： `pg_replication_password`， 类型： `password`， 层次：`G`

PostgreSQL 物理复制用户密码，默认值为：`DBUser.Replicator`。

> 警告：请在生产环境中修改此密码！





### `pg_admin_username`

参数名称： `pg_admin_username`， 类型： `username`， 层次：`G`

PostgreSQL / Pgbouncer 管理员名称，默认为：`dbuser_dba`。

这是全局使用的数据库管理员，具有数据库的 Superuser 权限与连接池的流量管理权限，请务必控制使用范围。





### `pg_admin_password`

参数名称： `pg_admin_password`， 类型： `password`， 层次：`G`

PostgreSQL / Pgbouncer 管理员密码，默认为： `DBUser.DBA`。

> 警告：请在生产环境中修改此密码！





### `pg_monitor_username`

参数名称： `pg_monitor_username`， 类型： `username`， 层次：`G`

PostgreSQL/Pgbouncer 监控用户名，默认为：`dbuser_monitor`。

这是一个用于监控的数据库/连接池用户，不建议修改此用户名。

但如果您的现有数据库使用了不同的监控用户，可以在指定监控目标时使用此参数传入使用的监控用户名。






### `pg_monitor_password`

参数名称： `pg_monitor_password`， 类型： `password`， 层次：`G`

PostgreSQL/Pgbouncer 监控用户使用的密码，默认为：`DBUser.Monitor`。

请尽可能不要在密码中使用 `@:/` 这些容易与 URL 分隔符混淆的字符，减少不必要的麻烦。

> 警告：请在生产环境中修改此密码！




### `pg_dbsu_password`

参数名称： `pg_dbsu_password`， 类型： `password`， 层次：`G/C`

PostgreSQL [`pg_dbsu`](#pg_dbsu) 超级用户密码，默认是空字符串，即不为其设置密码。

我们不建议为 dbsu 配置密码登陆，这会增大攻击面。例外情况是：[`pg_mode`](#pg_mode) = `citus`，这时候需要为每个分片集群的 dbsu 配置密码，以便在分片集群内部进行连接。







------------------------------

## `PG_INSTALL`

本节负责安装 PostgreSQL 及其扩展。如果您希望安装不同大版本与扩展插件，修改 [`pg_version`](#pg_version) 与 [`pg_extensions`](#pg_extensions) 即可，不过请注意，并不是所有扩展都在所有大版本可用。


```yaml
pg_dbsu: postgres                 # os 数据库超级用户名称，默认为 postgres，最好不要更改
pg_dbsu_uid: 26                   # os 数据库超级用户 uid 和 gid，默认为 26，适用于默认的 postgres 用户和组
pg_dbsu_sudo: limit               # 数据库超级用户 sudo 权限，可选 none,limit,all,nopass。默认为 limit
pg_dbsu_home: /var/lib/pgsql      # postgresql 主目录，默认为 `/var/lib/pgsql`
pg_dbsu_ssh_exchange: true        # 是否在相同的 pgsql 集群中交换 postgres 数据库超级用户的 ssh 密钥
pg_version: 18                    # 要安装的 postgres 主版本，默认为 18
pg_bin_dir: /usr/pgsql/bin        # postgres 二进制目录，默认为 `/usr/pgsql/bin`
pg_log_dir: /pg/log/postgres      # postgres 日志目录，默认为 `/pg/log/postgres`
pg_packages:                      # pg packages to be installed, alias can be used
  - pgsql-main pgsql-common
pg_extensions: []                 # pg extensions to be installed, alias can be used
```



### `pg_dbsu`

参数名称： `pg_dbsu`， 类型： `username`， 层次：`C`

PostgreSQL 使用的操作系统 dbsu 用户名， 默认为 `postgres`，改这个用户名是不太明智的。

不过在特定情况下，您可能会使用到不同于 `postgres` 的用户名，例如在安装配置 Greenplum / MatrixDB 时，需要使用 `gpadmin` / `mxadmin` 作为相应的操作系统超级用户。





### `pg_dbsu_uid`

参数名称： `pg_dbsu_uid`， 类型： `int`， 层次：`C`

操作系统数据库超级用户的 uid 和 gid，`26` 是 PGDG RPM 默认的 postgres 用户 UID/GID。

对于 Debian/Ubuntu 系统，没有默认值，且 `26` 号用户经常被占用。因此Pigsty 在检测到安装环境为 Debian 系，且 uid 为 `26` 时，会自动使用替换的 `pg_dbsu_uid = 543`。







### `pg_dbsu_sudo`

参数名称： `pg_dbsu_sudo`， 类型： `enum`， 层次：`C`

数据库超级用户的 sudo 权限，可以是 `none`、`limit`、`all` 或 `nopass`。默认为 `limit`

- `none`: 无 Sudo 权限
- `limit`: 有限的 sudo 权限，用于执行与数据库相关的组件的 `systemctl` 命令（默认选项）。
- `all`: 完全的 `sudo` 权限，需要密码。
- `nopass`: 不需要密码的完全 `sudo` 权限（不推荐）。

- 默认值为 `limit`，只允许执行 `sudo systemctl <start|stop|reload> <postgres|patroni|pgbouncer|...> `。




### `pg_dbsu_home`

参数名称： `pg_dbsu_home`， 类型： `path`， 层次：`C`

postgresql 主目录，默认为 `/var/lib/pgsql`，与官方的 pgdg RPM 保持一致。






### `pg_dbsu_ssh_exchange`

参数名称： `pg_dbsu_ssh_exchange`， 类型： `bool`， 层次：`C`

是否在同一 PostgreSQL 集群中交换操作系统 dbsu 的 ssh 密钥？

默认值为 `true`，意味着同一集群中的数据库超级用户可以互相 ssh 访问。






### `pg_version`

参数名称： `pg_version`， 类型： `enum`， 层次：`C`

要安装的 postgres 主版本，默认为 `18`。

请注意，PostgreSQL 的物理流复制不能跨主要版本，因此最好不要在实例级别上配置此项。

您可以使用 [`pg_packages`](#pg_packages) 和 [`pg_extensions`](#pg_extensions) 中的参数来为特定的 PG 大版本安装不同的软件包与扩展。





### `pg_bin_dir`

参数名称： `pg_bin_dir`， 类型： `path`， 层次：`C`

PostgreSQL 二进制程序目录，默认为 `/usr/pgsql/bin`。

默认值是在安装过程中手动创建的软链接，指向安装的特定的 Postgres 版本目录。

例如 `/usr/pgsql -> /usr/pgsql-15`。在 Ubuntu/Debian 上则指向 `/usr/lib/postgresql/15/bin`。

更多详细信息，请查看 [PGSQL 文件结构](/docs/ref/fhs#postgres-fhs)。





### `pg_log_dir`

参数名称： `pg_log_dir`， 类型： `path`， 层次：`C`

PostgreSQL 日志目录，默认为：`/pg/log/postgres`，Vector 日志代理会使用此变量收集 PostgreSQL 日志。

请注意，如果日志目录 [`pg_log_dir`](#pg_log_dir) 以数据库目录 [`pg_data`](#pg_data) 作为前缀，则不会显式创建（数据库目录初始化时自动创建）。






### `pg_packages`

参数名称： `pg_packages`， 类型： `string[]`， 层次：`C`

要安装的 PostgreSQL 软件包（RPM/DEB），这是一个包名数组，元素可以是空格或逗号分隔的包别名。

Pigsty v4 将默认值收敛为两个别名：

```yaml
pg_packages:
  - pgsql-main pgsql-common
```

- `pgsql-main`：映射到当前平台上的 PostgreSQL 内核、客户端、PL 语言以及 `pg_repack`、`wal2json`、`pgvector` 等核心扩展。
- `pgsql-common`：映射到运行数据库必需的配套组件，例如 Patroni、Pgbouncer、pgBackRest、pg_exporter、vip-manager 等守护进程。

别名的具体定义可以在 [`roles/node_id/vars/`](https://github.com/Vonng/pigsty/tree/main/roles/node_id/vars) 中的 `pg_package_map` 查到，Pigsty 会先根据操作系统和架构解析别名，再将 `$v`/`${pg_version}` 替换为实际主版本 [`pg_version`](#pg_version)，最后安装真实的软件包。这样可以屏蔽不同发行版之间的包名差异。

如果需要额外的软件包（例如特定 FDW 或扩展），可以直接在 `pg_packages` 中追加别名或真实包名。但请记得保留 `pgsql-main pgsql-common`，否则会缺失核心组件。






### `pg_extensions`

参数名称： `pg_extensions`， 类型： `string[]`， 层次：`G/C`

要安装的 PostgreSQL 扩展包（RPM/DEB），这是一个由扩展包名或别名组成的数组。

从 v4 开始默认值为空列表 `[]`，Pigsty 不再强制安装大体量扩展，用户可以按需选择，避免占用额外的磁盘与依赖。

如果需要安装扩展，请像下面这样填充：

```yaml
pg_extensions:
  - postgis timescaledb pgvector
  - pgsql-fdw     # 使用别名一次性安装常用 FDW
```

`pg_package_map` 中提供了大量别名，方便在不同发行版之间屏蔽包名差异。以下是 EL9 平台可用的扩展组合供参考（按需挑选即可）：

```bash
pg_extensions: # extensions to be installed on this cluster
  - timescaledb periods temporal_tables emaj table_version pg_cron pg_later pg_background pg_timetable
  - postgis pgrouting pointcloud pg_h3 q3c ogr_fdw geoip #pg_geohash #mobilitydb
  - pgvector pgvectorscale pg_vectorize pg_similarity pg_tiktoken pgml #smlar
  - pg_search pg_bigm zhparser hunspell
  - hydra pg_analytics pg_lakehouse pg_duckdb duckdb_fdw pg_fkpart pg_partman plproxy #pg_strom citus
  - pg_hint_plan age hll rum pg_graphql pg_jsonschema jsquery index_advisor hypopg imgsmlr pg_ivm pgmq pgq #rdkit
  - pg_tle plv8 pllua plprql pldebugger plpgsql_check plprofiler plsh #pljava plr pgtap faker dbt2
  - prefix semver pgunit md5hash asn1oid roaringbitmap pgfaceting pgsphere pg_country pg_currency pgmp numeral pg_rational pguint ip4r timestamp9 chkpass #pg_uri #pgemailaddr #acl #debversion #pg_rrule
  - topn pg_gzip pg_http pg_net pg_html5_email_address pgsql_tweaks pg_extra_time pg_timeit count_distinct extra_window_functions first_last_agg tdigest aggs_for_arrays pg_arraymath pg_idkit pg_uuidv7 permuteseq pg_hashids
  - sequential_uuids pg_math pg_random pg_base36 pg_base62 floatvec pg_financial pgjwt pg_hashlib shacrypt cryptint pg_ecdsa pgpcre icu_ext envvar url_encode #pg_zstd #aggs_for_vecs #quantile #lower_quantile #pgqr #pg_protobuf
  - pg_repack pg_squeeze pg_dirtyread pgfincore pgdd ddlx pg_prioritize pg_checksums pg_readonly safeupdate pg_permissions pgautofailover pg_catcheck preprepare pgcozy pg_orphaned pg_crash pg_cheat_funcs pg_savior table_log pg_fio #pgpool pgagent
  - pg_profile pg_show_plans pg_stat_kcache pg_stat_monitor pg_qualstats pg_store_plans pg_track_settings pg_wait_sampling system_stats pg_meta pgnodemx pg_sqlog bgw_replstatus pgmeminfo toastinfo pagevis powa pg_top #pg_statviz #pgexporter_ext #pg_mon
  - passwordcheck supautils pgsodium pg_vault anonymizer pg_tde pgsmcrypto pgaudit pgauditlogtofile pg_auth_mon credcheck pgcryptokey pg_jobmon logerrors login_hook set_user pg_snakeoil pgextwlist pg_auditor noset #sslutils
  - wrappers multicorn odbc_fdw mysql_fdw tds_fdw sqlite_fdw pgbouncer_fdw mongo_fdw redis_fdw pg_redis_pubsub kafka_fdw hdfs_fdw firebird_fdw aws_s3 log_fdw #oracle_fdw #db2_fdw #jdbc_fdw
  - orafce pgtt session_variable pg_statement_rollback pg_dbms_metadata pg_dbms_lock pgmemcache #pg_dbms_job #wiltondb
  - pglogical pgl_ddl_deploy pg_failover_slots wal2json wal2mongo decoderbufs decoder_raw mimeo pgcopydb pgloader pg_fact_loader pg_bulkload pg_comparator pgimportdoc pgexportdoc #repmgr #slony
  - gis-stack rag-stack fdw-stack fts-stack etl-stack feat-stack olap-stack supa-stack stat-stack json-stack
```

完整列表请参考：[`roles/node_id/vars`](https://github.com/Vonng/pigsty/blob/main/roles/node_id/vars/)





------------------------------

## `PG_BOOTSTRAP`


使用 Patroni 引导拉起 PostgreSQL 集群，并设置 1:1 对应的 Pgbouncer 连接池。

它还会使用 [`PG_PROVISION`](#pg_provision) 中定义的默认角色、用户、权限、模式、扩展来初始化数据库集群


```yaml
pg_data: /pg/data                 # postgres data directory, `/pg/data` by default
pg_fs_main: /data/postgres        # postgres main data directory, `/data/postgres` by default
pg_fs_backup: /data/backups       # postgres backup data directory, `/data/backups` by default
pg_storage_type: SSD              # storage type for pg main data, SSD,HDD, SSD by default
pg_dummy_filesize: 64MiB          # size of `/pg/dummy`, hold 64MB disk space for emergency use
pg_listen: '0.0.0.0'              # postgres/pgbouncer listen addresses, comma separated list
pg_port: 5432                     # postgres listen port, 5432 by default
pg_localhost: /var/run/postgresql # postgres unix socket dir for localhost connection
patroni_enabled: true             # if disabled, no postgres cluster will be created during init
patroni_mode: default             # patroni working mode: default,pause,remove
pg_namespace: /pg                 # top level key namespace in etcd, used by patroni & vip
patroni_port: 8008                # patroni listen port, 8008 by default
patroni_log_dir: /pg/log/patroni  # patroni log dir, `/pg/log/patroni` by default
patroni_ssl_enabled: false        # secure patroni RestAPI communications with SSL?
patroni_watchdog_mode: off        # patroni watchdog mode: automatic,required,off. off by default
patroni_username: postgres        # patroni restapi username, `postgres` by default
patroni_password: Patroni.API     # patroni restapi password, `Patroni.API` by default
pg_etcd_password: ''              # etcd password for this pg cluster, '' to use pg_cluster
pg_primary_db: postgres           # primary database name, used by citus,etc... ,postgres by default
pg_parameters: {}                 # extra parameters in postgresql.auto.conf
pg_files: []                      # extra files to be copied to postgres data directory (e.g. license)
pg_conf: oltp.yml                 # config template: oltp,olap,crit,tiny. `oltp.yml` by default
pg_max_conn: auto                 # postgres max connections, `auto` will use recommended value
pg_shared_buffer_ratio: 0.25      # postgres shared buffers ratio, 0.25 by default, 0.1~0.4
pg_io_method: worker              # io method for postgres, auto,fsync,worker,io_uring, worker by default
pg_rto: norm                      # shared rto mode: fast,norm,safe,wide (or seconds for compatibility)
pg_rpo: 1048576                   # recovery point objective in bytes, `1MiB` at most by default
pg_libs: 'pg_stat_statements, auto_explain'  # preloaded libraries, `pg_stat_statements,auto_explain` by default
pg_delay: 0                       # replication apply delay for standby cluster leader
pg_checksum: true                 # enable data checksum for postgres cluster?
pg_pwd_enc: scram-sha-256         # passwords encryption algorithm: fixed to scram-sha-256
pg_encoding: UTF8                 # database cluster encoding, `UTF8` by default
pg_locale: C                      # database cluster local, `C` by default
pg_lc_collate: C                  # database cluster collate, `C` by default
pg_lc_ctype: C                    # database character type, `C` by default
#pgsodium_key: ""                 # pgsodium key, 64 hex digit, default to sha256(pg_cluster)
#pgsodium_getkey_script: ""       # pgsodium getkey script path, pgsodium_getkey by default
```



### `pg_data`

参数名称： `pg_data`， 类型： `path`， 层次：`C`

Postgres 数据目录，默认为 `/pg/data`。

这是一个指向底层实际数据目录的符号链接，在多处被使用，请不要修改它。参阅 [PGSQL文件结构](/docs/ref/fhs) 获取详细信息。





### `pg_fs_main`

参数名称： `pg_fs_main`， 类型： `path`， 层次：`C`

PostgreSQL 主数据盘的挂载点/文件系统路径，默认为`/data/postgres`。

默认值：`/data/postgres`，它将直接用作 PostgreSQL 主数据目录的父目录。

建议使用 NVME SSD 作为 PostgreSQL 主数据存储，Pigsty默认为SSD存储进行了优化，但是也支持HDD。

您可以更改 [`pg_storage_type`](#pg_storage_type) 为 `HDD` 以针对HDD存储进行优化。





### `pg_fs_backup`

参数名称： `pg_fs_backup`， 类型： `path`， 层次：`C`

PostgreSQL 备份数据盘的挂载点/文件系统路径，默认为`/data/backups`。

如果您使用的是默认的 [`pgbackrest_method`](#pgbackrest_method) = `local`，建议为备份存储使用一个单独的磁盘。

备份磁盘应足够大，以容纳所有的备份，至少足以容纳3个基础备份+2天的WAL归档。 通常容量不是什么大问题，因为您可以使用便宜且大的机械硬盘作为备份盘。

建议为备份存储使用一个单独的磁盘，否则 Pigsty 将回退到主数据磁盘，并占用主数据盘的容量与IO。





### `pg_storage_type`

参数名称： `pg_storage_type`， 类型： `enum`， 层次：`C`

PostgreSQL 数据存储介质的类型：`SSD`或`HDD`，默认为`SSD`。

默认值：`SSD`，它会影响一些调优参数，如 `random_page_cost` 和 `effective_io_concurrency` 。




### `pg_dummy_filesize`

参数名称： `pg_dummy_filesize`， 类型： `size`， 层次：`C`

`/pg/dummy`的大小，默认值为`64MiB`，用于紧急使用的64MB磁盘空间。

当磁盘已满时，删除占位符文件可以为紧急使用释放一些空间，建议生产使用至少`8GiB`。





### `pg_listen`

参数名称： `pg_listen`， 类型： `ip`， 层次：`C`

PostgreSQL / Pgbouncer 的监听地址，默认为`0.0.0.0`（所有ipv4地址）。

您可以在此变量中使用占位符，例如：`'${ip},${lo}'`或`'${ip},${vip},${lo}'`：

- `${ip}`：转换为 `inventory_hostname`，它是配置清单中定义的首要内网IP地址。
- `${vip}`：如果启用了 [`pg_vip_enabled`](#pg_vip_enabled)，将使用 [`pg_vip_address`](#pg_vip_address) 的主机部分。
- `${lo}`：将替换为`127.0.0.1`

对于高安全性要求的生产环境，建议限制监听的IP地址。




### `pg_port`

参数名称： `pg_port`， 类型： `port`， 层次：`C`

PostgreSQL 服务器监听的端口，默认为 `5432`。





### `pg_localhost`

参数名称： `pg_localhost`， 类型： `path`， 层次：`C`

本地主机连接 PostgreSQL 使用的 Unix套接字目录，默认值为`/var/run/postgresql`。

PostgreSQL 和 Pgbouncer 本地连接的Unix套接字目录，[`pg_exporter`](/docs/concept/arch/pgsql#pg_exporter) 和 patroni 都会优先使用 Unix 套接字访问 PostgreSQL。




### `pg_namespace`

参数名称： `pg_namespace`， 类型： `path`， 层次：`C`

在 [etcd](/docs/concept/arch/pgsql#etcd) 中使用的顶级命名空间，由 patroni 和 vip-manager 使用，默认值是：`/pg`，不建议更改。





### `patroni_enabled`

参数名称： `patroni_enabled`， 类型： `bool`， 层次：`C`

是否启用 Patroni ？默认值为：`true`。

如果禁用，则在初始化期间不会创建Postgres集群。Pigsty将跳过拉起 patroni的任务，当试图向现有的postgres实例添加一些组件时，可以使用此参数。




### `patroni_mode`

参数名称： `patroni_mode`， 类型： `enum`， 层次：`C`

Patroni 工作模式：`default`，`pause`，`remove`。默认值：`default`。

- `default`：正常使用 Patroni 引导 PostgreSQL 集群
- `pause`：与`default`相似，但在引导后进入维护模式
- `remove`：使用Patroni初始化集群，然后删除Patroni并使用原始 PostgreSQL。




### `patroni_port`

参数名称： `patroni_port`， 类型： `port`， 层次：`C`

patroni监听端口，默认为`8008`，不建议更改。

Patroni API服务器在此端口上监听健康检查和API请求。




### `patroni_log_dir`

参数名称： `patroni_log_dir`， 类型： `path`， 层次：`C`

patroni 日志目录，默认为 `/pg/log/patroni`，由 Vector 日志代理收集。







### `patroni_ssl_enabled`

参数名称： `patroni_ssl_enabled`， 类型： `bool`， 层次：`G`

使用SSL保护patroni RestAPI通信吗？默认值为`false`。

此参数是一个全局标志，只能在部署之前预先设置。因为如果为 patroni 启用了SSL，您将必须使用 HTTPS 而不是 HTTP 执行健康检查、获取指标，调用API。





### `patroni_watchdog_mode`

参数名称： `patroni_watchdog_mode`， 类型： `string`， 层次：`C`

patroni看门狗模式：`automatic`，`required`，`off`，默认值为 `off`。

在主库故障的情况下，Patroni 可以使用 [**看门狗**](https://patroni.readthedocs.io/en/latest/watchdog.html) 来强制关机旧主库节点以避免脑裂。

- `off`：不使用`看门狗`。完全不进行 Fencing （默认行为）
- `automatic`：如果内核启用了`softdog`模块并且看门狗属于dbsu，则启用 `watchdog`。
- `required`：强制启用 `watchdog`，如果`softdog`不可用则拒绝启动 Patroni/PostgreSQL。

默认值为`off`，您不应该在 Infra节点 启用看门狗，数据一致性优先于可用性的关键系统，特别是与钱有关的业务集群可以考虑打开此选项。

> **注意**：当使用 [`pg_conf`](#pg_conf) = `crit` 配置模板时，`off` 会被自动提升为 `automatic`，以确保关键业务系统的数据一致性。

请注意，如果您的所有访问流量都使用 HAproxy 健康检查 [**服务接入**](/docs/pgsql/service/#接入服务)，正常是不存在脑裂风险的。





### `patroni_username`

参数名称： `patroni_username`， 类型： `username`， 层次：`C`

Patroni REST API 用户名，默认为 `postgres`，与 [`patroni_password`](#patroni_password) 配对使用。

Patroni的危险 REST API （比如重启集群）由额外的用户名/密码保护，查看 [配置集群](/docs/pgsql/admin/cluster#配置集群) 和 [Patroni RESTAPI](https://patroni.readthedocs.io/en/latest/rest_api.html) 以获取详细信息。





### `patroni_password`

参数名称： `patroni_password`， 类型： `password`， 层次：`C`

Patroni REST API 密码，默认为`Patroni.API`。

> 警告：务必生产环境中修改此参数！





### `pg_primary_db`

参数名称： `pg_primary_db`， 类型： `string`， 层次：`C`

指定集群中的主数据库名称，用于 citus 等业务数据库，默认为 `postgres`。

例如，在使用 Patroni 管理高可用的 Citus 集群时，您必须选择一个 “主数据库”。

此外，在这里指定的数据库名称，将在 PGSQL 模块安装完成后，显示在打印的连接串中。






### `pg_parameters`

参数名称： `pg_parameters`， 类型： `dict`， 层次：`G/C/I`

可用于指定并管理 `postgresql.auto.conf` 中的配置参数。

当集群所有实例完成初始化后，`pg_param` 任务将会把本字典中的 key / value 键值对依次覆盖写入 `/pg/data/postgresql.auto.conf` 中。

> 注意：请不要手工修改该配置文件，或通过 `ALTER SYSTEM` 修改集群配置参数，修改会在下一次配置同步时被覆盖。

该变量的优先级大于 Patroni / DCS 中的集群配置（即优先级高于集群配置，由 Patroni `edit-config` 编辑的配置），因此通常可以在实例级别覆盖集群默认参数。

当您的集群成员有着不同的规格（不推荐的行为！）时，您可以通过本参数对每个实例的配置进行精细化管理。

```yaml
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary , pg_parameters: { shared_buffers: '5GB' } }
    10.10.10.12: { pg_seq: 2, pg_role: replica , pg_parameters: { shared_buffers: '4GB' } }
    10.10.10.13: { pg_seq: 3, pg_role: replica , pg_parameters: { shared_buffers: '3GB' } }
```

请注意，一些 [重要的集群参数](https://patroni.readthedocs.io/en/latest/patroni_configuration.html#important-rules)（对主从库参数值有要求）是 Patroni 直接通过命令行参数管理的，具有最高优先级，无法通过此方式覆盖，对于这些参数，您必须使用 Patroni `edit-config` 进行管理与配置。

在主从上必须保持一致的 PostgreSQL 参数（不一致会导致从库无法启动！）：

- `wal_level`
- `max_connections`
- `max_locks_per_transaction`
- `max_worker_processes`
- `max_prepared_transactions`
- `track_commit_timestamp`

在主从上最好保持一致的参数（考虑到主从切换的可能性）：

- `listen_addresses`
- `port`
- `cluster_name`
- `hot_standby`
- `wal_log_hints`
- `max_wal_senders`
- `max_replication_slots`
- `wal_keep_segments`
- `wal_keep_size`

您可以设置不存在的参数（例如来自扩展的 GUC，从而配置 `ALTER SYSTEM` 无法修改的“尚未存在”的参数），但将现有配置修改为非法值可能会导致 PostgreSQL 无法启动，请谨慎配置！






### `pg_files`

参数名称： `pg_files`， 类型： `path[]`， 层次：`C`

用于指定需要拷贝至PGDATA目录的文件列表，默认为空数组：`[]`

在本参数中指定的文件将会被拷贝至 `{{ pg_data }}` 目录下，这主要用于下发特殊商业版本 PostgreSQL 内核要求的 License 文件。

目前仅有 PolarDB （Oracle兼容）内核需要许可证文件，例如，您可以将 `license.lic` 文件放置在 `files/` 目录下，并在 `pg_files` 中指定：

```yaml
pg_files: [ license.lic ]
```






### `pg_conf`

参数名称： `pg_conf`， 类型： `enum`， 层次：`C`

配置模板：`{oltp,olap,crit,tiny}.yml`，默认为`oltp.yml`。

- `tiny.yml`：为小节点、虚拟机、小型演示优化（1-8核，1-16GB）
- `oltp.yml`：为OLTP工作负载和延迟敏感应用优化（4C8GB+）（默认模板）
- `olap.yml`：为OLAP工作负载和吞吐量优化（4C8G+）
- `crit.yml`：为数据一致性和关键应用优化（4C8G+）

默认值：`oltp.yml`，但是 [配置](/docs/setup/install#配置) 程序将在当前节点为小节点时将此值设置为 `tiny.yml`。

您可以拥有自己的模板，只需将其放在`templates/<mode>.yml`下，并将此值设置为模板名称即可使用。




### `pg_max_conn`

参数名称： `pg_max_conn`， 类型： `int`， 层次：`C`

PostgreSQL 服务器最大连接数。你可以选择一个介于 50 到 5000 之间的值，或使用 `auto` 选择推荐值。

默认值为 `auto`，会根据 [`pg_conf`](#pg_conf) 和 [`pg_default_service_dest`](#pg_default_service_dest) 来设定最大连接数。

- tiny: 100
- olap: 200
- oltp: 200 (pgbouncer) / 1000 (postgres)
    - pg_default_service_dest = pgbouncer : 200
    - pg_default_service_dest = postgres : 1000
- crit: 200 (pgbouncer) / 1000 (postgres)
    - pg_default_service_dest = pgbouncer : 200
    - pg_default_service_dest = postgres : 1000

不建议将此值设定为超过 5000，否则你还需要手动增加 haproxy 服务的连接限制。

Pgbouncer 的事务池可以缓解过多的 OLTP 连接问题，因此默认情况下不建议设置很大的连接数。

对于 OLAP 场景， [`pg_default_service_dest`](#pg_default_service_dest) 修改为 `postgres` 可以绕过连接池。





### `pg_shared_buffer_ratio`

参数名称： `pg_shared_buffer_ratio`， 类型： `float`， 层次：`C`

Postgres 共享缓冲区内存比例，默认为 `0.25`，正常范围在 `0.1`~`0.4` 之间。

默认值：`0.25`，意味着节点内存的 25% 将被用作 PostgreSQL 的分片缓冲区。如果您想为 PostgreSQL 启用大页，那么此参数值应当适当小于 [`node_hugepage_ratio`](/docs/node/param#node_hugepage_ratio)。

将此值设定为大于 0.4（40%）通常不是好主意，但在极端情况下可能有用。

注意，共享缓冲区只是 PostgreSQL 中共享内存的一部分，要计算总共享内存，使用 `show shared_memory_size_in_huge_pages;`。





### `pg_rto`

参数名称： `pg_rto`， 类型： `enum`， 层次：`C`

恢复时间目标（RTO）模式，用于控制 Patroni 与 HAProxy 的超时参数，默认为 `norm`。

Pigsty 提供四种预设的 RTO 模式，分别针对不同的网络条件与部署场景进行了优化：

| 模式     | 适用场景     | 网络条件          | 平均 RTO  | 最坏 RTO   | 误切风险 |
|:-------|:---------|:--------------|:--------|:---------|:-----|
| `fast` | 同机柜/同交换机 | < 1ms，极稳定     | **14s** | **29s**  | 较高   |
| `norm` | 同机房（默认）  | 1-5ms，正常      | **21s** | **43s**  | 中等   |
| `safe` | 同省跨机房    | 10-50ms，跨机房   | **43s** | **91s**  | 较低   |
| `wide` | 跨地域/跨洲   | 100-200ms，公网  | **92s** | **207s** | 极低   |

减小 RTO 可以加快故障恢复速度，但会增加误切风险（网络抖动被误判为故障）。您需要根据实际网络条件选择合适的模式。
更多详情请参阅 [**RTO 利弊权衡**](/docs/concept/ha/rto/) 文档。

为了向后兼容，也支持直接指定秒数，系统会自动映射到最接近的模式：`< 30` → `fast`，`30-44` → `norm`，`45-89` → `safe`，`≥ 90` → `wide`。

```yaml
pg_rto: norm   # 默认模式，适合同机房部署
pg_rto: safe   # 跨机房部署推荐
pg_rto: 30     # 兼容旧版写法，等效于 norm
```




### `pg_rto_plan`

参数名称： `pg_rto_plan`， 类型： `dict`， 层次：`G`

RTO 预设配置字典，定义了 Patroni 高可用与 HAProxy 健康检查的具体超时参数，默认值包含四种预设模式：

```yaml
pg_rto_plan:  # [ttl, loop, retry, start, margin, inter, fastinter, downinter, rise, fall]
  fast: [ 20  ,5  ,5  ,15 ,5  ,'1s' ,'0.5s' ,'1s' ,3 ,3 ]  # rto < 30s
  norm: [ 30  ,5  ,10 ,25 ,5  ,'2s' ,'1s'   ,'2s' ,3 ,3 ]  # rto < 45s
  safe: [ 60  ,10 ,20 ,45 ,10 ,'3s' ,'1.5s' ,'3s' ,3 ,3 ]  # rto < 90s
  wide: [ 120 ,20 ,30 ,95 ,15 ,'4s' ,'2s'   ,'4s' ,3 ,3 ]  # rto < 150s
```

每个模式是一个包含 10 个参数的数组，用于同时控制 Patroni 和 HAProxy 的超时行为：

| 索引 | 参数名                     | 组件      | 说明                     |
|:--:|:------------------------|:--------|:-----------------------|
| 0  | `ttl`                   | Patroni | 主库锁 TTL（秒）             |
| 1  | `loop_wait`             | Patroni | 主循环休眠间隔（秒）             |
| 2  | `retry_timeout`         | Patroni | DCS/PostgreSQL 重试超时    |
| 3  | `primary_start_timeout` | Patroni | 主库恢复等待时间               |
| 4  | `safety_margin`         | Patroni | Watchdog 安全边界          |
| 5  | `inter`                 | HAProxy | 健康检查间隔                 |
| 6  | `fastinter`             | HAProxy | 状态变化时的快速检查间隔           |
| 7  | `downinter`             | HAProxy | 服务器宕机时的检查间隔            |
| 8  | `rise`                  | HAProxy | 标记为 UP 所需的连续成功检查次数     |
| 9  | `fall`                  | HAProxy | 标记为 DOWN 所需的连续失败检查次数   |

此参数允许用户通过覆盖默认值来自定义 RTO 行为，或添加新的 RTO 模式。例如，如果您需要一个更激进的 RTO 配置：

```yaml
pg_rto_plan:
  ultra: [ 10, 2, 3, 8, 2, '0.5s', '0.25s', '0.5s', 2, 2 ]  # 极速模式，仅限低延迟环境
```

> **注意**：修改此参数需要谨慎，不恰当的超时配置可能导致集群不稳定或频繁误切换。




### `pg_rpo`

参数名称： `pg_rpo`， 类型： `int`， 层次：`C`

以字节为单位的恢复点目标（RPO），默认值：`1048576`。

默认为 1MiB，这意味着在故障转移期间最多可以容忍 1MiB 的数据丢失。

当主节点宕机并且所有副本都滞后时，你必须做出一个艰难的选择，**在可用性和一致性之间进行权衡**：

- 提升一个从库成为新的主库，并尽快将系统恢复服务，但要付出可接受的数据丢失代价（例如，少于 1MB）。
- 等待主库重新上线（可能永远不会），或人工干预以避免任何数据丢失。

你可以使用 `crit.yml` [conf](#pg_conf) 模板来确保在故障转移期间没有数据丢失，但这会牺牲一些性能。





### `pg_libs`

参数名称： `pg_libs`， 类型： `string`， 层次：`C`

预加载的动态共享库，默认为 `pg_stat_statements,auto_explain`，这是两个 PostgreSQL 自带的扩展，强烈建议启用。

对于现有集群，您可以直接 [配置集群](/docs/pgsql/admin/cluster#配置集群) 的 `shared_preload_libraries` 参数并应用生效。

如果您想使用 TimescaleDB 或 Citus 扩展，您需要将 `timescaledb` 或 `citus` 添加到此列表中。`timescaledb` 和 `citus` 应当放在这个列表的最前面，例如：

```
citus,timescaledb,pg_stat_statements,auto_explain
```

其他需要动态加载的扩展也可以添加到这个列表中，例如 `pg_cron`， `pgml` 等，通常 `citus` 和 `timescaledb` 有着最高的优先级，应该添加到列表的最前面。






### `pg_delay`

参数名称： `pg_delay`， 类型： `interval`， 层次：`I`

延迟备库复制延迟，默认值：`0`。

如果此值被设置为一个正值，备用集群主库在应用 WAL 变更之前将被延迟这个时间。设置为 `1h` 意味着该集群中的数据将始终滞后原集群一个小时。

查看 [延迟备用集群](/docs/pgsql/config/cluster#延迟集群) 以获取详细信息。





### `pg_checksum`

参数名称： `pg_checksum`， 类型： `bool`， 层次：`C`

为 PostgreSQL 集群启用数据校验和吗？默认值是 `true`，启用。

这个参数只能在 PGSQL 部署之前设置（但你可以稍后手动启用它）。

数据校验和可以帮助检测磁盘损坏和硬件故障，从 Pigsty v3.5 开始默认启用此功能以确保数据完整性。





### `pg_pwd_enc`

参数名称： `pg_pwd_enc`， 类型： `enum`， 层次：`C`

密码加密算法，Pigsty v4 以后固定为 `scram-sha-256`。

所有新建用户都会使用 SCRAM 凭据。`md5` 已被淘汰，如需兼容旧客户端，请在业务连接池或客户端驱动中升级至 SCRAM。




### `pg_encoding`

参数名称： `pg_encoding`， 类型： `enum`， 层次：`C`

数据库集群编码，默认为 `UTF8`。

不建议使用其他非 `UTF8` 系编码。




### `pg_locale`

参数名称： `pg_locale`， 类型： `enum`， 层次：`C`

数据库集群本地化规则集 (Locale)，默认为 `C`。

此参数控制数据库的默认 Locale 设置，影响排序规则、字符分类等行为。使用 `C` 或 `POSIX` 可以获得最佳的性能和可预测的排序行为。

如果您需要特定语言的本地化支持，可以设置为相应的 Locale，例如 `en_US.UTF-8` 或 `zh_CN.UTF-8`。请注意，Locale 设置会影响索引的排序顺序，因此在集群初始化后无法更改。




### `pg_lc_collate`

参数名称： `pg_lc_collate`， 类型： `enum`， 层次：`C`

数据库集群本地化排序规则，默认为 `C`。

除非您知道自己在做什么，否则不建议修改集群级别的本地排序规则设置。





### `pg_lc_ctype`

参数名称： `pg_lc_ctype`， 类型： `enum`， 层次：`C`

数据库字符集 CTYPE，默认为 `C`。

从 Pigsty v3.5 开始，为了与 `pg_lc_collate` 保持一致，默认值改为 `C`。






### `pg_io_method`

参数名称： `pg_io_method`， 类型： `enum`， 层次：`C`

PostgreSQL 的 IO 方法，默认为 `worker`。可选值包括：

- `auto`：根据操作系统自动选择，在 Debian 系列或 EL 10+ 上使用 `io_uring`，否则使用 `worker`
- `sync`：使用传统的同步 IO 方式
- `worker`：使用后台工作进程处理 IO（默认选项）
- `io_uring`：使用 Linux 的 io_uring 异步 IO 接口

此参数仅适用于 PostgreSQL 17 及以上版本，控制 PostgreSQL 数据块层的 IO 策略。

- 在 PostgreSQL 17 中，`io_uring` 可以提供更高的 IO 性能，但需要操作系统内核支持（Linux 5.1+）并安装 `liburing` 库。
- 在 PostgreSQL 18 中，默认 IO 方法已从 `sync` 改为 `worker`，使用后台工作进程处理异步 IO，无需额外依赖。
- 如果您使用 Debian 12/Ubuntu 22+ 或 EL 10+ 系统，并希望获得最佳 IO 性能，可以考虑设置为 `io_uring`。

请注意，在不支持 `io_uring` 的系统上设置此值可能导致 PostgreSQL 启动失败，因此 `auto` 或 `worker` 是更安全的选择。




### `pg_etcd_password`

参数名称： `pg_etcd_password`， 类型： `password`， 层次：`C`

此 PostgreSQL 集群在 etcd 中使用的密码，默认为空字符串 `''`。

如果设置为空字符串，则会使用 [`pg_cluster`](#pg_cluster) 参数值作为密码（对于 Citus 集群则使用 [`pg_shard`](#pg_shard) 参数值）。

此密码用于 Patroni 连接 etcd 以及 vip-manager 访问 etcd 时的认证。




### `pgsodium_key`

参数名称： `pgsodium_key`， 类型： `string`， 层次：`C`

用于 pgsodium 扩展的加密主密钥，由 64 位十六进制数字组成。

默认不设置此参数，如果未指定，Pigsty 会使用 `sha256(pg_cluster)` 的值自动生成一个确定性的密钥。

[pgsodium](https://github.com/michelp/pgsodium) 是一个基于 libsodium 的 PostgreSQL 扩展，提供加密函数和透明列加密功能。
如果您需要使用 pgsodium 的加密功能，建议显式指定一个安全的随机密钥，并妥善保管。

生成随机密钥的命令示例：

```bash
openssl rand -hex 32   # 生成 64 位十六进制密钥
```



### `pgsodium_getkey_script`

参数名称： `pgsodium_getkey_script`， 类型： `path`， 层次：`C`

pgsodium 获取密钥脚本的路径，默认使用 Pigsty 模板中的 `pgsodium_getkey` 脚本。

此脚本用于在 PostgreSQL 启动时获取 pgsodium 的主密钥。默认脚本会从环境变量或配置文件中读取密钥。

如果您有自定义的密钥管理需求（如使用 HashiCorp Vault、AWS KMS 等），可以提供自定义脚本路径。


## `PG_PROVISION`


如果说 [`PG_BOOTSTRAP`](#pg_bootstrap) 是创建一个新的集群，那么 PG_PROVISION 就是在集群中创建默认的对象，包括：

* [默认角色](/docs/concept/sec/ac/#默认角色与系统用户)
* [默认用户](/docs/concept/sec/ac/#默认角色与系统用户)
* [默认权限](/docs/concept/sec/ac/#默认权限策略)
* [默认HBA规则](/docs/pgsql/config/hba#pg_default_hba_rules)
* 默认模式
* 默认扩展



```yaml
pg_provision: true                # 在引导后提供postgres集群
pg_init: pg-init                  # 集群模板的初始化脚本，默认为`pg-init`
pg_default_roles:                 # postgres集群中的默认角色和用户
  - { name: dbrole_readonly  ,login: false ,comment: role for global read-only access     }
  - { name: dbrole_offline   ,login: false ,comment: role for restricted read-only access }
  - { name: dbrole_readwrite ,login: false ,roles: [dbrole_readonly] ,comment: role for global read-write access }
  - { name: dbrole_admin     ,login: false ,roles: [pg_monitor, dbrole_readwrite] ,comment: role for object creation }
  - { name: postgres     ,superuser: true  ,comment: system superuser }
  - { name: replicator ,replication: true  ,roles: [pg_monitor, dbrole_readonly] ,comment: system replicator }
  - { name: dbuser_dba   ,superuser: true  ,roles: [dbrole_admin]  ,pgbouncer: true ,pool_mode: session, pool_connlimit: 16 ,comment: pgsql admin user }
  - { name: dbuser_monitor ,roles: [pg_monitor, dbrole_readonly] ,pgbouncer: true ,parameters: {log_min_duration_statement: 1000 } ,pool_mode: session ,pool_connlimit: 8 ,comment: pgsql monitor user }
pg_default_privileges:            # 管理员用户创建时的默认权限
  - GRANT USAGE      ON SCHEMAS   TO dbrole_readonly
  - GRANT SELECT     ON TABLES    TO dbrole_readonly
  - GRANT SELECT     ON SEQUENCES TO dbrole_readonly
  - GRANT EXECUTE    ON FUNCTIONS TO dbrole_readonly
  - GRANT USAGE      ON SCHEMAS   TO dbrole_offline
  - GRANT SELECT     ON TABLES    TO dbrole_offline
  - GRANT SELECT     ON SEQUENCES TO dbrole_offline
  - GRANT EXECUTE    ON FUNCTIONS TO dbrole_offline
  - GRANT INSERT     ON TABLES    TO dbrole_readwrite
  - GRANT UPDATE     ON TABLES    TO dbrole_readwrite
  - GRANT DELETE     ON TABLES    TO dbrole_readwrite
  - GRANT USAGE      ON SEQUENCES TO dbrole_readwrite
  - GRANT UPDATE     ON SEQUENCES TO dbrole_readwrite
  - GRANT TRUNCATE   ON TABLES    TO dbrole_admin
  - GRANT REFERENCES ON TABLES    TO dbrole_admin
  - GRANT TRIGGER    ON TABLES    TO dbrole_admin
  - GRANT CREATE     ON SCHEMAS   TO dbrole_admin
pg_default_schemas: [ monitor ]   # 默认模式
pg_default_extensions:            # 默认扩展
  - { name: pg_stat_statements ,schema: monitor }
  - { name: pgstattuple        ,schema: monitor }
  - { name: pg_buffercache     ,schema: monitor }
  - { name: pageinspect        ,schema: monitor }
  - { name: pg_prewarm         ,schema: monitor }
  - { name: pg_visibility      ,schema: monitor }
  - { name: pg_freespacemap    ,schema: monitor }
  - { name: postgres_fdw       ,schema: public  }
  - { name: file_fdw           ,schema: public  }
  - { name: btree_gist         ,schema: public  }
  - { name: btree_gin          ,schema: public  }
  - { name: pg_trgm            ,schema: public  }
  - { name: intagg             ,schema: public  }
  - { name: intarray           ,schema: public  }
  - { name: pg_repack }
pg_reload: true                   # HBA变化后是否重载配置？
pg_default_hba_rules:             # postgres 默认 HBA 规则集，按 order 排序
  - {user: '${dbsu}'    ,db: all         ,addr: local     ,auth: ident ,title: 'dbsu access via local os user ident'  ,order: 100}
  - {user: '${dbsu}'    ,db: replication ,addr: local     ,auth: ident ,title: 'dbsu replication from local os ident' ,order: 150}
  - {user: '${repl}'    ,db: replication ,addr: localhost ,auth: pwd   ,title: 'replicator replication from localhost',order: 200}
  - {user: '${repl}'    ,db: replication ,addr: intra     ,auth: pwd   ,title: 'replicator replication from intranet' ,order: 250}
  - {user: '${repl}'    ,db: postgres    ,addr: intra     ,auth: pwd   ,title: 'replicator postgres db from intranet' ,order: 300}
  - {user: '${monitor}' ,db: all         ,addr: localhost ,auth: pwd   ,title: 'monitor from localhost with password' ,order: 350}
  - {user: '${monitor}' ,db: all         ,addr: infra     ,auth: pwd   ,title: 'monitor from infra host with password',order: 400}
  - {user: '${admin}'   ,db: all         ,addr: infra     ,auth: ssl   ,title: 'admin @ infra nodes with pwd & ssl'   ,order: 450}
  - {user: '${admin}'   ,db: all         ,addr: world     ,auth: ssl   ,title: 'admin @ everywhere with ssl & pwd'    ,order: 500}
  - {user: '+dbrole_readonly',db: all    ,addr: localhost ,auth: pwd   ,title: 'pgbouncer read/write via local socket',order: 550}
  - {user: '+dbrole_readonly',db: all    ,addr: intra     ,auth: pwd   ,title: 'read/write biz user via password'     ,order: 600}
  - {user: '+dbrole_offline' ,db: all    ,addr: intra     ,auth: pwd   ,title: 'allow etl offline tasks from intranet',order: 650}
pgb_default_hba_rules:            # pgbouncer 默认 HBA 规则集，按 order 排序
  - {user: '${dbsu}'    ,db: pgbouncer   ,addr: local     ,auth: peer  ,title: 'dbsu local admin access with os ident',order: 100}
  - {user: 'all'        ,db: all         ,addr: localhost ,auth: pwd   ,title: 'allow all user local access with pwd' ,order: 150}
  - {user: '${monitor}' ,db: pgbouncer   ,addr: intra     ,auth: pwd   ,title: 'monitor access via intranet with pwd' ,order: 200}
  - {user: '${monitor}' ,db: all         ,addr: world     ,auth: deny  ,title: 'reject all other monitor access addr' ,order: 250}
  - {user: '${admin}'   ,db: all         ,addr: intra     ,auth: pwd   ,title: 'admin access via intranet with pwd'   ,order: 300}
  - {user: '${admin}'   ,db: all         ,addr: world     ,auth: deny  ,title: 'reject all other admin access addr'   ,order: 350}
  - {user: 'all'        ,db: all         ,addr: intra     ,auth: pwd   ,title: 'allow all user intra access with pwd' ,order: 400}
```


### `pg_provision`

参数名称： `pg_provision`， 类型： `bool`， 层次：`C`

在集群拉起后，完整本节定义的 PostgreSQL 集群置备工作。默认值为`true`。

如果禁用，不会置备 PostgreSQL 集群。对于一些特殊的 "PostgreSQL" 集群，比如 Greenplum，可以关闭此选项跳过置备阶段。




### `pg_init`

参数名称： `pg_init`， 类型： `string`， 层次：`G/C`

用于初始化数据库模板的Shell脚本位置，默认为 `pg-init`，该脚本会被拷贝至`/pg/bin/pg-init`后执行。

该脚本位于 [`roles/pgsql/templates/pg-init`](https://github.com/Vonng/pigsty/blob/main/roles/pgsql/templates/pg-init)

你可以在该脚本中添加自己的逻辑，或者提供一个新的脚本放置在 `templates/` 目录下，并将 `pg_init` 设置为新的脚本名称。使用自定义脚本时请保留现有的初始化逻辑。








### `pg_default_roles`

参数名称： `pg_default_roles`， 类型： `role[]`， 层次：`G/C`

Postgres 集群中的默认角色和用户。

Pigsty有一个内置的角色系统，请查看 [PGSQL访问控制：角色系统](/docs/concept/sec/ac/#四层角色模型) 了解详情。

```yaml
pg_default_roles:                 # postgres集群中的默认角色和用户
  - { name: dbrole_readonly  ,login: false ,comment: role for global read-only access     }
  - { name: dbrole_offline   ,login: false ,comment: role for restricted read-only access }
  - { name: dbrole_readwrite ,login: false ,roles: [dbrole_readonly]               ,comment: role for global read-write access }
  - { name: dbrole_admin     ,login: false ,roles: [pg_monitor, dbrole_readwrite]  ,comment: role for object creation }
  - { name: postgres     ,superuser: true                                          ,comment: system superuser }
  - { name: replicator ,replication: true  ,roles: [pg_monitor, dbrole_readonly]   ,comment: system replicator }
  - { name: dbuser_dba   ,superuser: true  ,roles: [dbrole_admin]  ,pgbouncer: true ,pool_mode: session, pool_connlimit: 16 , comment: pgsql admin user }
  - { name: dbuser_monitor   ,roles: [pg_monitor, dbrole_readonly] ,pgbouncer: true ,parameters: {log_min_duration_statement: 1000 } ,pool_mode: session ,pool_connlimit: 8 ,comment: pgsql monitor user }
```




### `pg_default_privileges`

参数名称： `pg_default_privileges`， 类型： `string[]`， 层次：`G/C`

每个数据库中的默认权限（`DEFAULT PRIVILEGE`）设置：

```yaml
pg_default_privileges:            # 管理员用户创建时的默认权限
  - GRANT USAGE      ON SCHEMAS   TO dbrole_readonly
  - GRANT SELECT     ON TABLES    TO dbrole_readonly
  - GRANT SELECT     ON SEQUENCES TO dbrole_readonly
  - GRANT EXECUTE    ON FUNCTIONS TO dbrole_readonly
  - GRANT USAGE      ON SCHEMAS   TO dbrole_offline
  - GRANT SELECT     ON TABLES    TO dbrole_offline
  - GRANT SELECT     ON SEQUENCES TO dbrole_offline
  - GRANT EXECUTE    ON FUNCTIONS TO dbrole_offline
  - GRANT INSERT     ON TABLES    TO dbrole_readwrite
  - GRANT UPDATE     ON TABLES    TO dbrole_readwrite
  - GRANT DELETE     ON TABLES    TO dbrole_readwrite
  - GRANT USAGE      ON SEQUENCES TO dbrole_readwrite
  - GRANT UPDATE     ON SEQUENCES TO dbrole_readwrite
  - GRANT TRUNCATE   ON TABLES    TO dbrole_admin
  - GRANT REFERENCES ON TABLES    TO dbrole_admin
  - GRANT TRIGGER    ON TABLES    TO dbrole_admin
  - GRANT CREATE     ON SCHEMAS   TO dbrole_admin
```

Pigsty 基于默认角色系统提供了相应的默认权限设置，请查看 [PGSQL访问控制：权限](/docs/concept/sec/ac/#默认权限策略) 了解详情。






### `pg_default_schemas`

参数名称： `pg_default_schemas`， 类型： `string[]`， 层次：`G/C`

要创建的默认模式，默认值为：`[ monitor ]`，这将在所有数据库上创建一个`monitor`模式，用于放置各种监控扩展、表、视图、函数。






### `pg_default_extensions`

参数名称： `pg_default_extensions`， 类型： `extension[]`， 层次：`G/C`

要在所有数据库中默认创建启用的扩展列表，默认值：

```yaml
pg_default_extensions: # default extensions to be created
  - { name: pg_stat_statements ,schema: monitor }
  - { name: pgstattuple        ,schema: monitor }
  - { name: pg_buffercache     ,schema: monitor }
  - { name: pageinspect        ,schema: monitor }
  - { name: pg_prewarm         ,schema: monitor }
  - { name: pg_visibility      ,schema: monitor }
  - { name: pg_freespacemap    ,schema: monitor }
  - { name: postgres_fdw       ,schema: public  }
  - { name: file_fdw           ,schema: public  }
  - { name: btree_gist         ,schema: public  }
  - { name: btree_gin          ,schema: public  }
  - { name: pg_trgm            ,schema: public  }
  - { name: intagg             ,schema: public  }
  - { name: intarray           ,schema: public  }
  - { name: pg_repack }
```

唯一的三方扩展是 `pg_repack`，这对于数据库维护很重要，所有其他扩展都是内置的 PostgreSQL Contrib 扩展插件。

监控相关的扩展默认安装在 `monitor` 模式中，该模式由 [`pg_default_schemas`](#pg_default_schemas) 创建。





### `pg_reload`

参数名称： `pg_reload`， 类型： `bool`， 层次：`A`

在hba更改后重新加载 PostgreSQL，默认值为`true`

当您想在应用HBA更改之前进行检查时，将其设置为`false`以禁用自动重新加载配置。





### `pg_default_hba_rules`

参数名称： `pg_default_hba_rules`， 类型： `hba[]`， 层次：`G/C`

PostgreSQL 基于主机的认证规则，全局默认规则定义。默认值为：


```yaml
pg_default_hba_rules:             # postgres default host-based authentication rules, order by `order`
  - {user: '${dbsu}'    ,db: all         ,addr: local     ,auth: ident ,title: 'dbsu access via local os user ident'  ,order: 100}
  - {user: '${dbsu}'    ,db: replication ,addr: local     ,auth: ident ,title: 'dbsu replication from local os ident' ,order: 150}
  - {user: '${repl}'    ,db: replication ,addr: localhost ,auth: pwd   ,title: 'replicator replication from localhost',order: 200}
  - {user: '${repl}'    ,db: replication ,addr: intra     ,auth: pwd   ,title: 'replicator replication from intranet' ,order: 250}
  - {user: '${repl}'    ,db: postgres    ,addr: intra     ,auth: pwd   ,title: 'replicator postgres db from intranet' ,order: 300}
  - {user: '${monitor}' ,db: all         ,addr: localhost ,auth: pwd   ,title: 'monitor from localhost with password' ,order: 350}
  - {user: '${monitor}' ,db: all         ,addr: infra     ,auth: pwd   ,title: 'monitor from infra host with password',order: 400}
  - {user: '${admin}'   ,db: all         ,addr: infra     ,auth: ssl   ,title: 'admin @ infra nodes with pwd & ssl'   ,order: 450}
  - {user: '${admin}'   ,db: all         ,addr: world     ,auth: ssl   ,title: 'admin @ everywhere with ssl & pwd'    ,order: 500}
  - {user: '+dbrole_readonly',db: all    ,addr: localhost ,auth: pwd   ,title: 'pgbouncer read/write via local socket',order: 550}
  - {user: '+dbrole_readonly',db: all    ,addr: intra     ,auth: pwd   ,title: 'read/write biz user via password'     ,order: 600}
  - {user: '+dbrole_offline' ,db: all    ,addr: intra     ,auth: pwd   ,title: 'allow etl offline tasks from intranet',order: 650}
```

默认值为常见场景提供了足够的安全级别，请查看 [PGSQL身份验证](/docs/pgsql/config/hba) 了解详情。

本参数为 [HBA](/docs/pgsql/config/hba#规则字段) 规则对象组成的数组，在形式上与 [`pg_hba_rules`](#pg_hba_rules) 完全一致。
建议在全局配置统一的 [`pg_default_hba_rules`](#pg_default_hba_rules)，针对特定集群使用 [`pg_hba_rules`](#pg_hba_rules) 进行额外定制。两个参数中的规则都会依次应用，后者优先级更高。




### `pgb_default_hba_rules`

参数名称： `pgb_default_hba_rules`， 类型： `hba[]`， 层次：`G/C`

pgbouncer default host-based authentication rules, array or [hba](/docs/pgsql/config/hba#规则字段) rule object.

default value provides a fair enough security level for common scenarios, check [PGSQL Authentication](/docs/pgsql/config/hba) for details.

```yaml
pgb_default_hba_rules:            # pgbouncer default host-based authentication rules, order by `order`
  - {user: '${dbsu}'    ,db: pgbouncer   ,addr: local     ,auth: peer  ,title: 'dbsu local admin access with os ident',order: 100}
  - {user: 'all'        ,db: all         ,addr: localhost ,auth: pwd   ,title: 'allow all user local access with pwd' ,order: 150}
  - {user: '${monitor}' ,db: pgbouncer   ,addr: intra     ,auth: pwd   ,title: 'monitor access via intranet with pwd' ,order: 200}
  - {user: '${monitor}' ,db: all         ,addr: world     ,auth: deny  ,title: 'reject all other monitor access addr' ,order: 250}
  - {user: '${admin}'   ,db: all         ,addr: intra     ,auth: pwd   ,title: 'admin access via intranet with pwd'   ,order: 300}
  - {user: '${admin}'   ,db: all         ,addr: world     ,auth: deny  ,title: 'reject all other admin access addr'   ,order: 350}
  - {user: 'all'        ,db: all         ,addr: intra     ,auth: pwd   ,title: 'allow all user intra access with pwd' ,order: 400}
```

默认的Pgbouncer HBA规则很简单：

1. 允许从**本地**使用密码登陆
2. 允许从内网网断使用密码登陆

用户可以按照自己的需求进行定制。

本参数在形式上与 [`pgb_hba_rules`](#pgb_hba_rules) 完全一致，建议在全局配置统一的 [`pgb_default_hba_rules`](#pgb_default_hba_rules)，针对特定集群使用 [`pgb_hba_rules`](#pgb_hba_rules) 进行额外定制。两个参数中的规则都会依次应用，后者优先级更高。






------------------------------

## `PG_BACKUP`

本节定义了用于 [pgBackRest](https://pgbackrest.org/) 的变量，它被用于 PGSQL 时间点恢复 PITR 。

查看 [PGSQL 备份 & PITR](/docs/pgsql/tutorial/pitr) 以获取详细信息。


```yaml
pgbackrest_enabled: true          # 在 pgsql 主机上启用 pgBackRest 吗？
pgbackrest_clean: true            # 初始化时删除 pg 备份数据？
pgbackrest_log_dir: /pg/log/pgbackrest # pgbackrest 日志目录，默认为 `/pg/log/pgbackrest`
pgbackrest_method: local          # pgbackrest 仓库方法：local, minio, [用户定义...]
pgbackrest_init_backup: true      # pgbackrest 初始化完成后是否立即执行全量备份？
pgbackrest_repo:                  # pgbackrest 仓库：https://pgbackrest.org/configuration.html#section-repository
  local:                          # 默认使用本地 posix 文件系统的 pgbackrest 仓库
    path: /pg/backup              # 本地备份目录，默认为 `/pg/backup`
    retention_full_type: count    # 按计数保留完整备份
    retention_full: 2             # 使用本地文件系统仓库时，最多保留 3 个完整备份，至少保留 2 个
  minio:                          # pgbackrest 的可选 minio 仓库
    type: s3                      # minio 是与 s3 兼容的，所以使用 s3
    s3_endpoint: sss.pigsty       # minio 端点域名，默认为 `sss.pigsty`
    s3_region: us-east-1          # minio 区域，默认为 us-east-1，对 minio 无效
    s3_bucket: pgsql              # minio 桶名称，默认为 `pgsql`
    s3_key: pgbackrest            # pgbackrest 的 minio 用户访问密钥
    s3_key_secret: S3User.Backup  # pgbackrest 的 minio 用户秘密密钥
    s3_uri_style: path            # 对 minio 使用路径风格的 uri，而不是主机风格
    path: /pgbackrest             # minio 备份路径，默认为 `/pgbackrest`
    storage_port: 9000            # minio 端口，默认为 9000
    storage_ca_file: /etc/pki/ca.crt  # minio ca 文件路径，默认为 `/etc/pki/ca.crt`
    block: y                      # 启用块级增量备份（pgBackRest 2.46+）
    bundle: y                     # 将小文件打包成一个文件
    bundle_limit: 20MiB           # 对象存储文件打包阈值，默认 20MiB
    bundle_size: 128MiB           # 对象存储文件打包目标大小，默认 128MiB
    cipher_type: aes-256-cbc      # 为远程备份仓库启用 AES 加密
    cipher_pass: pgBackRest       # AES 加密密码，默认为 'pgBackRest'
    retention_full_type: time     # 在 minio 仓库上按时间保留完整备份
    retention_full: 14            # 保留过去 14 天的完整备份
```



### `pgbackrest_enabled`

参数名称： `pgbackrest_enabled`， 类型： `bool`， 层次：`C`

是否在 PGSQL 节点上启用 pgBackRest？默认值为： `true`

在使用本地文件系统备份仓库（`local`）时，只有集群主库才会真正启用 `pgbackrest`。其他实例只会初始化一个空仓库。





### `pgbackrest_clean`

参数名称： `pgbackrest_clean`， 类型： `bool`， 层次：`C`

初始化时删除 PostgreSQL 备份数据吗？默认值为 `true`。




### `pgbackrest_log_dir`

参数名称： `pgbackrest_log_dir`， 类型： `path`， 层次：`C`

pgBackRest 日志目录，默认为 `/pg/log/pgbackrest`，Vector 日志代理会引用此参数收集日志。





### `pgbackrest_method`

参数名称： `pgbackrest_method`， 类型： `enum`， 层次：`C`

pgBackRest 仓库方法：默认可选项为：`local`、`minio` 或其他用户定义的方法，默认为 `local`。

此参数用于确定用于 pgBackRest 的仓库，所有可用的仓库方法都在 [`pgbackrest_repo`](#pgbackrest_repo) 中定义。

Pigsty 默认使用 `local` 备份仓库，这将在主实例的 `/pg/backup` 目录上创建一个备份仓库。底层存储路径由 [`pg_fs_backup`](#pg_fs_backup) 指定。






### `pgbackrest_init_backup`

参数名称： `pgbackrest_init_backup`， 类型： `bool`， 层次：`C`

在 pgBackRest 初始化完成后是否立即执行一次全量备份？默认为 `true`。

此操作仅在集群主库（primary）且非级联从库（无 [`pg_upstream`](#pg_upstream) 定义）时执行。启用此参数可以确保在集群初始化后立即拥有一个基础备份，以便在需要时进行恢复。




### `pgbackrest_repo`

参数名称： `pgbackrest_repo`， 类型： `dict`， 层次：`G/C`

pgBackRest 仓库文档：https://pgbackrest.org/configuration.html#section-repository

默认值包括两种仓库方法：`local` 和 `minio`，定义如下：

```yaml
pgbackrest_repo:                  # pgbackrest 仓库：https://pgbackrest.org/configuration.html#section-repository
  local:                          # 默认使用本地 posix 文件系统的 pgbackrest 仓库
    path: /pg/backup              # 本地备份目录，默认为 `/pg/backup`
    retention_full_type: count    # 按计数保留完整备份
    retention_full: 2             # 使用本地文件系统仓库时，最多保留 3 个完整备份，至少保留 2 个
  minio:                          # pgbackrest 的可选 minio 仓库
    type: s3                      # minio 是与 s3 兼容的，所以使用 s3
    s3_endpoint: sss.pigsty       # minio 端点域名，默认为 `sss.pigsty`
    s3_region: us-east-1          # minio 区域，默认为 us-east-1，对 minio 无效
    s3_bucket: pgsql              # minio 桶名称，默认为 `pgsql`
    s3_key: pgbackrest            # pgbackrest 的 minio 用户访问密钥
    s3_key_secret: S3User.Backup  # pgbackrest 的 minio 用户秘密密钥
    s3_uri_style: path            # 对 minio 使用路径风格的 uri，而不是主机风格
    path: /pgbackrest             # minio 备份路径，默认为 `/pgbackrest`
    storage_port: 9000            # minio 端口，默认为 9000
    storage_ca_file: /etc/pki/ca.crt  # minio ca 文件路径，默认为 `/etc/pki/ca.crt`
    block: y                      # 启用块级增量备份（pgBackRest 2.46+）
    bundle: y                     # 将小文件打包成一个文件
    bundle_limit: 20MiB           # 对象存储文件打包阈值，默认 20MiB
    bundle_size: 128MiB           # 对象存储文件打包目标大小，默认 128MiB
    cipher_type: aes-256-cbc      # 为远程备份仓库启用 AES 加密
    cipher_pass: pgBackRest       # AES 加密密码，默认为 'pgBackRest'
    retention_full_type: time     # 在 minio 仓库上按时间保留完整备份
    retention_full: 14            # 保留过去 14 天的完整备份
```

您可以定义新的备份仓库，例如使用 AWS S3，GCP 或其他云供应商的 S3 兼容存储服务。

**块级增量备份 (Block Incremental Backup)**：从 pgBackRest 2.46 版本开始支持 `block: y` 选项，可以实现块级增量备份。
这意味着在增量备份时，pgBackRest 只会备份发生变化的数据块，而不是整个变化的文件，从而大幅减少备份数据量和备份时间。
此功能对于大型数据库特别有用，建议在对象存储仓库上启用此选项。





------------------------------

## `PG_ACCESS`

本节负责数据库访问路径，包括：

- 在每个 PGSQL 节点上部署 Pgbouncer 连接池并设定默认行为
- 通过本地或专用 haproxy 节点发布服务端口
- 绑定可选的 L2 VIP、注册 DNS 记录

```yaml
pgbouncer_enabled: true           # if disabled, pgbouncer will not be launched on pgsql host
pgbouncer_port: 6432              # pgbouncer listen port, 6432 by default
pgbouncer_log_dir: /pg/log/pgbouncer  # pgbouncer log dir, `/pg/log/pgbouncer` by default
pgbouncer_auth_query: false       # query postgres to retrieve unlisted business users?
pgbouncer_poolmode: transaction   # pooling mode: transaction,session,statement, transaction by default
pgbouncer_sslmode: disable        # pgbouncer client ssl mode, disable by default
pgbouncer_ignore_param: [ extra_float_digits, application_name, TimeZone, DateStyle, IntervalStyle, search_path ]
pg_weight: 100          #INSTANCE # relative load balance weight in service, 100 by default, 0-255
pg_service_provider: ''           # dedicate haproxy node group name, or empty string for local nodes by default
pg_default_service_dest: pgbouncer # default service destination if svc.dest='default'
pg_default_services:              # postgres default service definitions
  - { name: primary ,port: 5433 ,dest: default  ,check: /primary   ,selector: "[]" }
  - { name: replica ,port: 5434 ,dest: default  ,check: /read-only ,selector: "[]" , backup: "[? pg_role == `primary` || pg_role == `offline` ]" }
  - { name: default ,port: 5436 ,dest: postgres ,check: /primary   ,selector: "[]" }
  - { name: offline ,port: 5438 ,dest: postgres ,check: /replica   ,selector: "[? pg_role == `offline` || pg_offline_query ]" , backup: "[? pg_role == `replica` && !pg_offline_query]"}
pg_vip_enabled: false             # enable a l2 vip for pgsql primary? false by default
pg_vip_address: 127.0.0.1/24      # vip address in `<ipv4>/<mask>` format, require if vip is enabled
pg_vip_interface: eth0            # vip network interface to listen, eth0 by default
pg_dns_suffix: ''                 # pgsql dns suffix, '' by default
pg_dns_target: auto               # auto, primary, vip, none, or ad hoc ip
```



### `pgbouncer_enabled`

参数名称： `pgbouncer_enabled`， 类型： `bool`， 层次：`C`

默认值为 `true`，如果禁用，将不会在 [**PGSQL节点**](/docs/concept/arch/node#pgsql节点) 上配置连接池 Pgbouncer。






### `pgbouncer_port`

参数名称： `pgbouncer_port`， 类型： `port`， 层次：`C`

Pgbouncer 监听端口，默认为 `6432`。






### `pgbouncer_log_dir`

参数名称： `pgbouncer_log_dir`， 类型： `path`， 层次：`C`

Pgbouncer 日志目录，默认为 `/pg/log/pgbouncer`，Vector 日志代理会根据此参数收集 Pgbouncer 日志。






### `pgbouncer_auth_query`

参数名称： `pgbouncer_auth_query`， 类型： `bool`， 层次：`C`

是否允许 Pgbouncer 查询 PostgreSQL，以允许未显式列出的用户通过连接池访问 PostgreSQL？默认值是 `false`。

如果启用，pgbouncer 用户将使用 `SELECT username, password FROM monitor.pgbouncer_auth($1)` 对 postgres 数据库进行身份验证，否则，只有带有 `pgbouncer: true` 的业务用户才被允许连接到 Pgbouncer 连接池。






### `pgbouncer_poolmode`

参数名称： `pgbouncer_poolmode`， 类型： `enum`， 层次：`C`

Pgbouncer 连接池池化模式：`transaction`,`session`,`statement`，默认为 `transaction`。

- `session`：会话级池化，具有最佳的功能兼容性。
- `transaction`：事务级池化，具有更好的性能（许多小连接），可能会破坏某些会话级特性，如`NOTIFY/LISTEN` 等...
- `statements`：语句级池化，用于简单的只读查询。

如果您的应用出现功能兼容性问题，可以考虑修改此参数为 `session`。




### `pgbouncer_sslmode`

参数名称： `pgbouncer_sslmode`， 类型： `enum`， 层次：`C`

Pgbouncer 客户端 ssl 模式，默认为 `disable`。

注意，启用 SSL 可能会对你的 pgbouncer 产生巨大的性能影响。

- `disable`：如果客户端请求 TLS 则忽略（默认）
- `allow`：如果客户端请求 TLS 则使用。如果没有则使用纯TCP。不验证客户端证书。
- `prefer`：与 allow 相同。
- `require`：客户端必须使用 TLS。如果没有则拒绝客户端连接。不验证客户端证书。
- `verify-ca`：客户端必须使用有效的客户端证书的TLS。
- `verify-full`：与 verify-ca 相同。




### `pgbouncer_ignore_param`

参数名称： `pgbouncer_ignore_param`， 类型： `string[]`， 层次：`C`

PgBouncer 忽略的启动参数列表，默认值为：

```yaml
[ extra_float_digits, application_name, TimeZone, DateStyle, IntervalStyle, search_path ]
```

这些参数会被配置到 PgBouncer 配置文件中的 `ignore_startup_parameters` 选项。当客户端连接时设置这些参数时，PgBouncer 不会因为连接池中的连接参数不匹配而创建新的连接。

这允许不同的客户端使用相同的连接池，即使它们设置了不同的这些参数值。此参数在 Pigsty v3.5 中新增。







------------------------------

### `pg_weight`

参数名称： `pg_weight`， 类型： `int`， 层次：`I`

服务中的相对负载均衡权重，默认为100，范围0-255。

默认值： `100`。您必须在实例变量中定义它，并 [重载服务](/docs/pgsql/admin/cluster#刷新服务) 以生效。





### `pg_service_provider`

参数名称： `pg_service_provider`， 类型： `string`， 层次：`G/C`

专用的haproxy节点组名，或默认为本地节点的空字符串。

如果指定，PostgreSQL服务将注册到专用的haproxy节点组，而不是当下的 PGSQL 集群节点。

请记住为每个服务在专用的 haproxy 节点上分配**唯一**的端口！

例如，如果我们在3节点的 `pg-test` 集群上定义以下参数：

```yaml
pg_service_provider: infra       # use load balancer on group `infra`
pg_default_services:             # alloc port 10001 and 10002 for pg-test primary/replica service  
  - { name: primary ,port: 10001 ,dest: postgres  ,check: /primary   ,selector: "[]" }
  - { name: replica ,port: 10002 ,dest: postgres  ,check: /read-only ,selector: "[]" , backup: "[? pg_role == `primary` || pg_role == `offline` ]" }
```




### `pg_default_service_dest`

参数名称： `pg_default_service_dest`， 类型： `enum`， 层次：`G/C`

当定义一个 [服务](/docs/pgsql/service#定义服务) 时，如果 `svc.dest='default'`，此参数将用作默认值。

默认值： `pgbouncer`，意味着5433主服务和5434副本服务将默认将流量路由到 pgbouncer。

如果您不想使用pgbouncer，将其设置为`postgres`。流量将直接路由到 postgres。






### `pg_default_services`

参数名称： `pg_default_services`， 类型： `service[]`， 层次：`G/C`

postgres默认服务定义

默认值是四个默认服务定义，如 [PGSQL Service](/docs/pgsql/service/#服务概述) 所述

```yaml
pg_default_services:               # postgres default service definitions
  - { name: primary ,port: 5433 ,dest: default  ,check: /primary   ,selector: "[]" }
  - { name: replica ,port: 5434 ,dest: default  ,check: /read-only ,selector: "[]" , backup: "[? pg_role == `primary` || pg_role == `offline` ]" }
  - { name: default ,port: 5436 ,dest: postgres ,check: /primary   ,selector: "[]" }
  - { name: offline ,port: 5438 ,dest: postgres ,check: /replica   ,selector: "[? pg_role == `offline` || pg_offline_query ]" , backup: "[? pg_role == `replica` && !pg_offline_query]"}
```






### `pg_vip_enabled`

参数名称： `pg_vip_enabled`， 类型： `bool`， 层次：`C`

为 PGSQL 集群启用 L2 VIP吗？默认值是`false`，表示不创建 L2 VIP。

启用 L2 VIP 后，会有一个 VIP 绑定在集群主实例节点上，由 `vip-manager` 管理，根据 `etcd` 中的数据进行判断。

L2 VIP只能在相同的L2网络中使用，这可能会对您的网络拓扑产生额外的限制。





### `pg_vip_address`

参数名称： `pg_vip_address`， 类型： `cidr4`， 层次：`C`

如果启用vip，则需要`<ipv4>/<mask>`格式的vip地址。

默认值： `127.0.0.1/24`。这个值由两部分组成：`ipv4`和`mask`，用`/`分隔。





### `pg_vip_interface`

参数名称： `pg_vip_interface`， 类型： `string`， 层次：`C/I`

vip network interface to listen, `eth0` by default.

L2 VIP 监听的网卡接口，默认为 `eth0`。

它应该是您节点的首要网卡名，即您在配置清单中使用的IP地址。

如果您的节点有多块名称不同的网卡，您可以在实例变量上进行覆盖：

```yaml
pg-test:
    hosts:
        10.10.10.11: {pg_seq: 1, pg_role: replica ,pg_vip_interface: eth0 }
        10.10.10.12: {pg_seq: 2, pg_role: primary ,pg_vip_interface: eth1 }
        10.10.10.13: {pg_seq: 3, pg_role: replica ,pg_vip_interface: eth2 }
    vars:
      pg_vip_enabled: true          # 为这个集群启用L2 VIP，默认绑定到主实例
      pg_vip_address: 10.10.10.3/24 # L2网络CIDR: 10.10.10.0/24, vip地址: 10.10.10.3
      # pg_vip_interface: eth1      # 如果您的节点有统一的接口，您可以在这里定义它
```




### `pg_dns_suffix`

参数名称： `pg_dns_suffix`， 类型： `string`， 层次：`C`

PostgreSQL DNS 名称后缀，默认为空字符串。

在默认情况下，PostgreQL 集群名会作为 DNS 域名注册到 Infra 节点的 `dnsmasq` 中对外提供解析。

您可以通过本参数指定一个域名后缀，这样会使用 `{{ pg_cluster }}{{ pg_dns_suffix }}` 作为集群 DNS 名称。

例如，如果您将 `pg_dns_suffix` 设置为 `.db.vip.company.tld`，那么 `pg-test` 的集群 DNS 名称将是 `pg-test.db.vip.company.tld`





### `pg_dns_target`

参数名称： `pg_dns_target`， 类型： `enum`， 层次：`C`

Could be: `auto`, `primary`, `vip`, `none`, or an ad hoc ip address, which will be the target IP address of cluster DNS record.

default values: `auto` , which will bind to `pg_vip_address` if `pg_vip_enabled`, or fallback to cluster primary instance ip address.

* `vip`: bind to `pg_vip_address`
* `primary`: resolve to cluster primary instance ip address
* `auto`: resolve to `pg_vip_address` if `pg_vip_enabled`, or fallback to cluster primary instance ip address.
* `none`: do not bind to any ip address
* `<ipv4>`: bind to the given IP address


可以是：`auto`、`primary`、`vip`、`none`或一个特定的IP地址，它将是集群DNS记录的解析目标IP地址。

默认值： `auto`，如果`pg_vip_enabled`，将绑定到`pg_vip_address`，否则会回退到集群主实例的 IP 地址。

- `vip`：绑定到`pg_vip_address`
- `primary`：解析为集群主实例IP地址
- `auto`：如果 [`pg_vip_enabled`](#pg_vip_enabled)，解析为 [`pg_vip_address`](#pg_vip_address)，或回退到集群主实例ip地址。
- `none`：不绑定到任何ip地址
- `<ipv4>`：绑定到指定的IP地址






------------------------------

## `PG_MONITOR`

PG_MONITOR 组的参数用于监控 PostgreSQL 数据库、Pgbouncer 连接池与 pgBackRest 备份系统的状态。

此参数组定义了三个 Exporter 的配置：`pg_exporter` 用于监控 PostgreSQL，`pgbouncer_exporter` 用于监控连接池，`pgbackrest_exporter` 用于监控备份状态。

```yaml
pg_exporter_enabled: true              # 在 pgsql 主机上启用 pg_exporter 吗？
pg_exporter_config: pg_exporter.yml    # pg_exporter 配置文件名
pg_exporter_cache_ttls: '1,10,60,300'  # pg_exporter 收集器 ttl 阶段（秒），默认为 '1,10,60,300'
pg_exporter_port: 9630                 # pg_exporter 监听端口，默认为 9630
pg_exporter_params: 'sslmode=disable'  # pg_exporter dsn 的额外 url 参数
pg_exporter_url: ''                    # 如果指定，将覆盖自动生成的 pg dsn
pg_exporter_auto_discovery: true       # 启用自动数据库发现？默认启用
pg_exporter_exclude_database: 'template0,template1,postgres' # 在自动发现过程中不会被监控的数据库的 csv 列表
pg_exporter_include_database: ''       # 在自动发现过程中将被监控的数据库的 csv 列表
pg_exporter_connect_timeout: 200       # pg_exporter 连接超时（毫秒），默认为 200
pg_exporter_options: ''                # 覆盖 pg_exporter 的额外选项
pgbouncer_exporter_enabled: true       # 在 pgsql 主机上启用 pgbouncer_exporter 吗？
pgbouncer_exporter_port: 9631          # pgbouncer_exporter 监听端口，默认为 9631
pgbouncer_exporter_url: ''             # 如果指定，将覆盖自动生成的 pgbouncer dsn
pgbouncer_exporter_options: ''         # 覆盖 pgbouncer_exporter 的额外选项
pgbackrest_exporter_enabled: true      # 在 pgsql 主机上启用 pgbackrest_exporter 吗？
pgbackrest_exporter_port: 9854         # pgbackrest_exporter 监听端口，默认为 9854
pgbackrest_exporter_options: ''        # 覆盖 pgbackrest_exporter 的额外选项
```



### `pg_exporter_enabled`

参数名称： `pg_exporter_enabled`， 类型： `bool`， 层次：`C`

是否在 PGSQL 节点上启用 pg_exporter？默认值为：`true`。

PG Exporter 用于监控 PostgreSQL 数据库实例，如果不想安装 pg_exporter 可以设置为 `false`。






### `pg_exporter_config`

参数名称： `pg_exporter_config`， 类型： `string`， 层次：`C`

pg_exporter 配置文件名，PG Exporter 和 PGBouncer Exporter 都会使用这个配置文件。默认值：`pg_exporter.yml`。

如果你想使用自定义配置文件，你可以在这里定义它。你的自定义配置文件应当放置于 `files/<name>.yml`。

例如，当您希望监控一个远程的 PolarDB 数据库实例时，可以使用样例配置：`files/polar_exporter.yml`。





### `pg_exporter_cache_ttls`

参数名称： `pg_exporter_cache_ttls`， 类型： `string`， 层次：`C`

pg_exporter 收集器 TTL 阶梯（秒），默认为 '1,10,60,300'

默认值：`1,10,60,300`，它将为不同的度量收集器使用不同的TTL值： 1s, 10s, 60s, 300s。

PG Exporter 内置了缓存机制，避免多个 Prometheus 重复抓取对数据库产生不当影响，所有指标收集器按 TTL 分为四类：

```yaml
ttl_fast: "{{ pg_exporter_cache_ttls.split(',')[0]|int }}"         # critical queries
ttl_norm: "{{ pg_exporter_cache_ttls.split(',')[1]|int }}"         # common queries
ttl_slow: "{{ pg_exporter_cache_ttls.split(',')[2]|int }}"         # slow queries (e.g table size)
ttl_slowest: "{{ pg_exporter_cache_ttls.split(',')[3]|int }}"      # ver slow queries (e.g bloat)
```

例如，在默认配置下，存活类指标默认最多缓存 `1s`，大部分普通指标会缓存 `10s`（应当与监控抓取间隔 [`vmetrics_scrape_interval`](/docs/infra/param#vmetrics_scrape_interval) 相同）。
少量变化缓慢的查询会有 `60s` 的TTL，极个别大开销监控查询会有 `300s` 的TTL。






### `pg_exporter_port`

参数名称： `pg_exporter_port`， 类型： `port`， 层次：`C`

pg_exporter 监听端口号，默认值为：`9630`





### `pg_exporter_params`

参数名称： `pg_exporter_params`， 类型： `string`， 层次：`C`

pg_exporter 所使用 DSN 中额外的 URL PATH 参数。

默认值：`sslmode=disable`，它将禁用用于监控连接的 SSL（因为默认使用本地 unix 套接字）。





### `pg_exporter_url`

参数名称： `pg_exporter_url`， 类型： `pgurl`， 层次：`C`

如果指定了本参数，将会覆盖自动生成的 PostgreSQL DSN，使用指定的 DSN 连接 PostgreSQL 。默认值为空字符串。

如果没有指定此参数，PG Exporter 默认会使用以下的连接串访问 PostgreSQL ：

```
postgres://{{ pg_monitor_username }}:{{ pg_monitor_password }}@{{ pg_host }}:{{ pg_port }}/postgres{% if pg_exporter_params != '' %}?{{ pg_exporter_params }}{% endif %}
```

当您想监控一个远程的 PostgreSQL 实例时，或者需要使用不同的监控用户/密码，配置选项时，可以使用这个参数。




### `pg_exporter_auto_discovery`

参数名称： `pg_exporter_auto_discovery`， 类型： `bool`， 层次：`C`

启用自动数据库发现吗？ 默认启用：`true`。

PG Exporter 默认会连接到 DSN 中指定的数据库 （默认为管理数据库 `postgres`） 收集全局指标，如果您希望收集所有业务数据库的指标，可以开启此选项。
PG Exporter 会自动发现目标 PostgreSQL 实例中的所有数据库，并在这些数据库中收集 **库级监控指标**。




### `pg_exporter_exclude_database`

参数名称： `pg_exporter_exclude_database`， 类型： `string`， 层次：`C`

如果启用了数据库自动发现（默认启用），在这个参数指定的列表中的数据库将不会被监控。
默认值为： `template0,template1,postgres`，即管理数据库 `postgres` 与模板数据库会被排除在自动监控的数据库之外。

作为例外，DSN 中指定的数据库不受此参数影响，例如，PG Exporter 如果连接的是 `postgres` 数据库，那么即使 `postgres` 在此列表中，也会被监控。





### `pg_exporter_include_database`

参数名称： `pg_exporter_include_database`， 类型： `string`， 层次：`C`

如果启用了数据库自动发现（默认启用），在这个参数指定的列表中的数据库才会被监控。默认值为空字符串，即不启用此功能。

参数的形式是由逗号分隔的数据库名称列表，例如：`db1,db2,db3`。

此参数相对于 [`pg_exporter_exclude_database`] 有更高的优先级，相当于白名单模式。如果您只希望监控特定的数据库，可以使用此参数。





### `pg_exporter_connect_timeout`

参数名称： `pg_exporter_connect_timeout`， 类型： `int`， 层次：`C`

pg_exporter 连接超时（毫秒），默认为 `200` （单位毫秒）

当 PG Exporter 尝试连接到 PostgreSQL 数据库时，最多会等待多长时间？超过这个时间，PG Exporter 将会放弃连接并报错。

默认值 200毫秒 对于绝大多数场景（例如：同可用区监控）都是足够的，但是如果您监控的远程 PostgreSQL 位于另一个大洲，您可能需要增加此值以避免连接超时。






### `pg_exporter_options`

参数名称： `pg_exporter_options`， 类型： `arg`， 层次：`C`

传给 PG Exporter 的命令行参数，默认值为：`""` 空字符串。

当使用空字符串时，会使用默认的命令参数：

```bash
{% if pg_exporter_port != '' %}
PG_EXPORTER_OPTS='--web.listen-address=:{{ pg_exporter_port }} {{ pg_exporter_options }}'
{% else %}
PG_EXPORTER_OPTS='--web.listen-address=:{{ pg_exporter_port }} --log.level=info'
{% endif %}
```

注意，请不要在本参数中覆盖 [`pg_exporter_port`](#pg_exporter_port) 的端口配置。





### `pgbouncer_exporter_enabled`

参数名称： `pgbouncer_exporter_enabled`， 类型： `bool`， 层次：`C`

在 PGSQL 节点上，是否启用 pgbouncer_exporter ？默认值为：`true`。





### `pgbouncer_exporter_port`

参数名称： `pgbouncer_exporter_port`， 类型： `port`， 层次：`C`

pgbouncer_exporter 监听端口号，默认值为：`9631`





### `pgbouncer_exporter_url`

参数名称： `pgbouncer_exporter_url`， 类型： `pgurl`， 层次：`C`

如果指定了本参数，将会覆盖自动生成的 pgbouncer DSN，使用指定的 DSN 连接 pgbouncer。默认值为空字符串。

如果没有指定此参数，Pgbouncer Exporter 默认会使用以下的连接串访问 Pgbouncer：

```
postgres://{{ pg_monitor_username }}:{{ pg_monitor_password }}@:{{ pgbouncer_port }}/pgbouncer?host={{ pg_localhost }}&sslmode=disable
```

当您想监控一个远程的 Pgbouncer 实例时，或者需要使用不同的监控用户/密码，配置选项时，可以使用这个参数。






### `pgbouncer_exporter_options`

参数名称： `pgbouncer_exporter_options`， 类型： `arg`， 层次：`C`

传给 Pgbouncer Exporter 的命令行参数，默认值为：`""` 空字符串。

当使用空字符串时，会使用默认的命令参数：

```bash
{% if pgbouncer_exporter_options != '' %}
PG_EXPORTER_OPTS='--web.listen-address=:{{ pgbouncer_exporter_port }} {{ pgbouncer_exporter_options }}'
{% else %}
PG_EXPORTER_OPTS='--web.listen-address=:{{ pgbouncer_exporter_port }} --log.level=info'
{% endif %}
```

注意，请不要在本参数中覆盖 [`pgbouncer_exporter_port`](#pgbouncer_exporter_port) 的端口配置。




### `pgbackrest_exporter_enabled`

参数名称： `pgbackrest_exporter_enabled`， 类型： `bool`， 层次：`C`

是否在 PGSQL 节点上启用 pgbackrest_exporter？默认值为：`true`。

pgbackrest_exporter 用于监控 pgBackRest 备份系统的状态，包括备份的大小、时间、类型、持续时长等关键指标。




### `pgbackrest_exporter_port`

参数名称： `pgbackrest_exporter_port`， 类型： `port`， 层次：`C`

pgbackrest_exporter 监听端口号，默认值为：`9854`。

此端口需要在 Prometheus 服务发现配置中引用，用于抓取备份相关的监控指标。




### `pgbackrest_exporter_options`

参数名称： `pgbackrest_exporter_options`， 类型： `arg`， 层次：`C`

传给 pgbackrest_exporter 的命令行参数，默认值为：`""` 空字符串。

当使用空字符串时，会使用默认的命令参数配置。您可以在此指定额外的参数选项来调整 exporter 的行为。



------------------------------

## `PG_REMOVE`

[`pgsql-rm.yml`](/docs/pgsql/playbook#pgsql-rmyml) 会调用 `pg_remove` 角色来安全地移除 PostgreSQL 实例。本节参数用于控制清理行为，避免误删。

```yaml
pg_rm_data: true                  # remove postgres data during remove? true by default
pg_rm_backup: true                # remove pgbackrest backup during primary remove? true by default
pg_rm_pkg: true                   # uninstall postgres packages during remove? true by default
pg_safeguard: false               # stop pg_remove running if pg_safeguard is enabled, false by default
```




### `pg_rm_data`

参数名称： `pg_rm_data`， 类型： `bool`， 层次：`G/C/A`

删除 PGSQL 实例时是否清理 [`pg_data`](#pg_data) 以及软链，默认值 `true`。

该开关既影响 `pgsql-rm.yml`，也影响其他触发 `pg_remove` 的场景。设为 `false` 可以保留数据目录，便于手动检查或重新挂载。




### `pg_rm_backup`

参数名称： `pg_rm_backup`， 类型： `bool`， 层次：`G/C/A`

删除主库时是否一并清理 pgBackRest 仓库与配置，默认值 `true`。

该参数仅对 `pg_role=primary` 的主实例生效：`pg_remove` 会先停止 pgBackRest、删除当前集群的 stanza，并在 `pgbackrest_method == 'local'` 时移除 [`pg_fs_backup`](#pg_fs_backup) 中的数据。备用集群或上游备份不会受到影响。




### `pg_rm_pkg`

参数名称： `pg_rm_pkg`， 类型： `bool`， 层次：`G/C/A`

在清理 PGSQL 实例时是否卸载 [`pg_packages`](#pg_packages) 安装的所有软件包，默认值 `true`。

如果只想暂时停机并保留二进制文件，可将其设为 `false`，否则 `pg_remove` 会调用系统包管理器彻底卸载 PostgreSQL 相关组件。




### `pg_safeguard`

参数名称： `pg_safeguard`， 类型： `bool`， 层次：`G/C/A`

防误删保险，默认值为 `false`。当显式设置为 `true` 时，`pg_remove` 会立即终止并提示，必须使用 `-e pg_safeguard=false` 或在变量中关闭后才会继续。

建议在生产环境批量清理前先开启此开关，确认命令与目标节点无误后再解除，以避免误操作导致实例被删除。

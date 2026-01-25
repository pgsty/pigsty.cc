---
title: 模块：MySQL
weight: 5030
description: 使用 Pigsty 拉起过气的 MySQL 集群，用于测试，迁移，性能评估等目的。
icon: fas fa-fish
module: [MYSQL]
categories: [参考]
---

> [MySQL](https://mysql.apache.org/) 曾经是“世界上最流行的开源关系型数据库”。 [安装](#安装) | [配置](#配置) | [管理](#管理) | [剧本](#剧本) | [监控](#监控) | [参数](#参数)


--------

## 概览

MySQL 模块本身目前仅在 Pigsty 专业版中提供 Beta 试用预览，注意，请不要将这里的 MySQL 用于生产环境。


--------

## 安装

您可以直接使用以下命令，在 Pigsty 管理的节点上，直接从官方软件源安装 MySQL 8.0 (EL系统)

```bash
# el 7,8,9
./node.yml -t node_install -e '{"node_repo_modules":"node,mysql","node_packages":["mysql-community-server,mysql-community-client"]}'

# debian / ubuntu
./node.yml -t node_install -e '{"node_repo_modules":"node,mysql","node_packages":["mysql-server"]}'
```

您也可以将 MySQL 软件包加入本地软件源后，使用 MySQL 剧本 `mysql.yml` 进行生产环境部署。



--------

## 配置

以下配置片段定义了一个单节点的 MySQL 实例，以及其中的 Database 与 User。

```yaml
my-test:
  hosts: { 10.10.10.10: { mysql_seq: 1, mysql_role: primary } }
  vars:
    mysql_cluster: my-test
    mysql_databases:
      - { name: meta }
    mysql_users:
      - { name: dbuser_meta    ,host: '%' ,password: 'dbuesr_meta'    ,priv: { "*.*": "SELECT, UPDATE, DELETE, INSERT" } }
      - { name: dbuser_dba     ,host: '%' ,password: 'DBUser.DBA'     ,priv: { "*.*": "ALL PRIVILEGES" } }
      - { name: dbuser_monitor ,host: '%' ,password: 'DBUser.Monitor' ,priv: { "*.*": "SELECT, PROCESS, REPLICATION CLIENT" } ,connlimit: 3 }  
```


---------

## 管理

以下是基本的 MySQL 集群基本管理操作：

使用 `mysql.yml` 创建 MySQL 集群：

```bash
./mysql.yml -l my-test
```





----------------

## 剧本

Pigsty 提供了一个与 MYSQL 模块相关的剧本，用于部署 MySQL 集群

* [`mysql.yml`](#mysqlyml)： 根据配置清单部署 MySQL




----------------

### `mysql.yml`

用于部署 MySQL 模式集群的 [`mysql.yml`](https://github.com/vonng/pigsty/blob/main/mysql.yml) 剧本包含以下子任务：

```bash
mysql-id       : generate mysql instance identity
mysql_clean    : remove existing mysql instance (DANGEROUS)
mysql_dbsu     : create os user mysql
mysql_install  : install mysql rpm/deb packages
mysql_dir      : create mysql data & conf dir
mysql_config   : generate mysql config file
mysql_boot     : bootstrap mysql cluster
mysql_launch   : launch mysql service
mysql_pass     : write mysql password
mysql_db       : create mysql biz database
mysql_user     : create mysql biz user
mysql_exporter : launch mysql exporter
mysql_register : register mysql service to prometheus
```






----------------

## 监控

Pigsty 提供了两个与 [`MYSQL`](/docs/pilot/mysql) 模块有关的监控面板：

[MYSQL Overview](https://demo.pigsty.cc/d/mysql-overview) 展示了 MySQL 集群的整体监控指标。

[MYSQL Instance](https://demo.pigsty.cc/d/mysql-instance) 展示了单个 MySQL 实例的监控指标详情





--------

## 参数

MySQL 的可用配置项：

```yaml
#-----------------------------------------------------------------
# MYSQL_IDENTITY
#-----------------------------------------------------------------
# mysql_cluster:           #CLUSTER  # mysql cluster name, required identity parameter
# mysql_role: replica      #INSTANCE # mysql role, required, could be primary,replica
# mysql_seq: 0             #INSTANCE # mysql instance seq number, required identity parameter

#-----------------------------------------------------------------
# MYSQL_BUSINESS
#-----------------------------------------------------------------
# mysql business object definition, overwrite in group vars
mysql_users: []                      # mysql business users
mysql_databases: []                  # mysql business databases
mysql_services: []                   # mysql business services

# global credentials, overwrite in global vars
mysql_root_username: root
mysql_root_password: DBUser.Root
mysql_replication_username: replicator
mysql_replication_password: DBUser.Replicator
mysql_admin_username: dbuser_dba
mysql_admin_password: DBUser.DBA
mysql_monitor_username: dbuser_monitor
mysql_monitor_password: DBUser.Monitor

#-----------------------------------------------------------------
# MYSQL_INSTALL
#-----------------------------------------------------------------
# - install - #
mysql_dbsu: mysql                    # os dbsu name, mysql by default, better not change it
mysql_dbsu_uid: 27                   # os dbsu uid and gid, 306 for default mysql users and groups
mysql_dbsu_home: /var/lib/mysql      # mysql home directory, `/var/lib/mysql` by default
mysql_dbsu_ssh_exchange: true        # exchange mysql dbsu ssh key among same mysql cluster
mysql_packages:                      # mysql packages to be installed, `mysql-community*` by default
  - mysql-community*
  - mysqld_exporter

# - bootstrap - #
mysql_data: /data/mysql              # mysql data directory, `/data/mysql` by default
mysql_listen: '0.0.0.0'              # mysql listen addresses, comma separated IP list
mysql_port: 3306                     # mysql listen port, 3306 by default
mysql_sock: /var/lib/mysql/mysql.sock # mysql socket dir, `/var/lib/mysql/mysql.sock` by default
mysql_pid: /var/run/mysqld/mysqld.pid # mysql pid file, `/var/run/mysqld/mysqld.pid` by default
mysql_conf: /etc/my.cnf              # mysql config file, `/etc/my.cnf` by default
mysql_log_dir: /var/log              # mysql log dir, `/var/log/mysql` by default

mysql_exporter_port: 9104            # mysqld_exporter listen port, 9104 by default

mysql_parameters: {}                 # extra parameters for mysqld
mysql_default_parameters:            # default parameters for mysqld

```




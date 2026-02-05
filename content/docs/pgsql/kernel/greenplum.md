---
title: Greenplum
weight: 2111
description: 使用 Pigsty 部署/监控 Greenplum 集群，构建大规模并行处理（MPP）的 PostgreSQL 数据仓库集群！
icon: fas fa-leaf
module: [PGSQL]
categories: [概念]
toc_hide: True
---

Pigsty 支持部署 Greenplum 集群，及其衍生发行版 YMatrixDB，并提供了将现有 Greenplum 部署纳入 Pigsty 监控的能力。

--------

## 概览

Greenplum / YMatrix 集群部署能力仅在专业版本/企业版本中提供，目前不对外开源。





--------

## 安装

Pigsty 提供了 Greenplum 6 (@el7) 与 Greenplum 7 (@el8) 的安装包，开源版本用户可以自行安装配置。

```bash
# EL 7 Only (Greenplum6)
./node.yml -t node_install  -e '{"node_repo_modules":"pgsql","node_packages":["open-source-greenplum-db-6"]}'

# EL 8 Only (Greenplum7)
./node.yml -t node_install  -e '{"node_repo_modules":"pgsql","node_packages":["open-source-greenplum-db-7"]}'
```

--------

## 配置

要定义 Greenplum 集群，需要用到 `pg_mode` = `gpsql`，并使用额外的身份参数 `pg_shard` 与 `gp_role`。  

```yaml
#================================================================#
#                        GPSQL Clusters                          #
#================================================================#

#----------------------------------#
# cluster: mx-mdw (gp master)
#----------------------------------#
mx-mdw:
  hosts:
    10.10.10.10: { pg_seq: 1, pg_role: primary , nodename: mx-mdw-1 }
  vars:
    gp_role: master          # this cluster is used as greenplum master
    pg_shard: mx             # pgsql sharding name & gpsql deployment name
    pg_cluster: mx-mdw       # this master cluster name is mx-mdw
    pg_databases:
      - { name: matrixmgr , extensions: [ { name: matrixdbts } ] }
      - { name: meta }
    pg_users:
      - { name: meta , password: DBUser.Meta , pgbouncer: true }
      - { name: dbuser_monitor , password: DBUser.Monitor , roles: [ dbrole_readonly ], superuser: true }

    pgbouncer_enabled: true                # enable pgbouncer for greenplum master
    pgbouncer_exporter_enabled: false      # enable pgbouncer_exporter for greenplum master
    pg_exporter_params: 'host=127.0.0.1&sslmode=disable'  # use 127.0.0.1 as local monitor host

#----------------------------------#
# cluster: mx-sdw (gp master)
#----------------------------------#
mx-sdw:
  hosts:
    10.10.10.11:
      nodename: mx-sdw-1        # greenplum segment node
      pg_instances:             # greenplum segment instances
        6000: { pg_cluster: mx-seg1, pg_seq: 1, pg_role: primary , pg_exporter_port: 9633 }
        6001: { pg_cluster: mx-seg2, pg_seq: 2, pg_role: replica , pg_exporter_port: 9634 }
    10.10.10.12:
      nodename: mx-sdw-2
      pg_instances:
        6000: { pg_cluster: mx-seg2, pg_seq: 1, pg_role: primary , pg_exporter_port: 9633  }
        6001: { pg_cluster: mx-seg3, pg_seq: 2, pg_role: replica , pg_exporter_port: 9634  }
    10.10.10.13:
      nodename: mx-sdw-3
      pg_instances:
        6000: { pg_cluster: mx-seg3, pg_seq: 1, pg_role: primary , pg_exporter_port: 9633 }
        6001: { pg_cluster: mx-seg1, pg_seq: 2, pg_role: replica , pg_exporter_port: 9634 }
  vars:
    gp_role: segment               # these are nodes for gp segments
    pg_shard: mx                   # pgsql sharding name & gpsql deployment name
    pg_cluster: mx-sdw             # these segment clusters name is mx-sdw
    pg_preflight_skip: true        # skip preflight check (since pg_seq & pg_role & pg_cluster not exists)
    pg_exporter_config: pg_exporter_basic.yml                             # use basic config to avoid segment server crash
    pg_exporter_params: 'options=-c%20gp_role%3Dutility&sslmode=disable'  # use gp_role = utility to connect to segments

```

此外，PG Exporter 需要额外的连接参数，才能连接到 Greenplum Segment 实例上采集监控指标。

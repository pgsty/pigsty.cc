---
title: Citus
weight: 2103
description: 使用 Pigsty 部署原生高可用的 Citus 水平分片集群，将 PostgreSQL 无缝伸缩到多套分片并加速 OLTP/OLAP 查询。
icon: fas fa-lemon
module: [PGSQL]
categories: [概念]
---


Pigsty 原生支持 Citus。这是一个基于原生 PostgreSQL 内核的分布式水平扩展插件。

![](/img/pigsty/citus.jpg)


--------

## 安装

Citus 是一个 PostgreSQL [扩展插件](/docs/pgsql/ext/)，可以按照标准插件安装的流程，在原生 PostgreSQL 集群上加装启用。

```bash
./pgsql.yml -t pg_extension -e '{"pg_extensions":["citus"]}'
```

--------

## 配置

要定义一个 citus 集群，您需要指定以下参数：

- [`pg_mode`](/docs/pgsql/param#pg_mode) 必须设置为 `citus`，而不是默认的 `pgsql`
- 在每个分片集群上都必须定义分片名 [`pg_shard`](/docs/pgsql/param#pg_shard) 和分片号 [`pg_group`](/docs/pgsql/param#pg_group)
- 必须定义 [`pg_primary_db`](/docs/pgsql/param#pg_primary_db) 来指定由 Patroni 管理的 Citus 数据库。
- 如果您想使用 [`pg_dbsu`](/docs/pgsql/param#pg_dbsu) 的 `postgres` 而不是默认的 [`pg_admin_username`](/docs/pgsql/param#pg_admin_username) 来执行管理命令，那么 [`pg_dbsu_password`](/docs/pgsql/param#pg_dbsu_password) 必须设置为非空的纯文本密码

此外，还需要额外的 hba 规则，允许从本地和其他数据节点进行 SSL 访问。

您可以将每个 Citus 集群分别定义为独立的分组，像标准的 PostgreSQL 集群一样，如 [`conf/dbms/citus.yml`](https://github.com/Vonng/pigsty/blob/main/conf/citus.yml) 所示：

```yaml
all:
  children:
    pg-citus0: # citus 0号分片
      hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
      vars: { pg_cluster: pg-citus0 , pg_group: 0 }
    pg-citus1: # citus 1号分片
      hosts: { 10.10.10.11: { pg_seq: 1, pg_role: primary } }
      vars: { pg_cluster: pg-citus1 , pg_group: 1 }
    pg-citus2: # citus 2号分片
      hosts: { 10.10.10.12: { pg_seq: 1, pg_role: primary } }
      vars: { pg_cluster: pg-citus2 , pg_group: 2 }
    pg-citus3: # citus 3号分片
      hosts:
        10.10.10.13: { pg_seq: 1, pg_role: primary }
        10.10.10.14: { pg_seq: 2, pg_role: replica }
      vars: { pg_cluster: pg-citus3 , pg_group: 3 }
  vars:                               # 所有 Citus 集群的全局参数
    pg_mode: citus                    # pgsql 集群模式需要设置为： citus
    pg_shard: pg-citus                # citus 水平分片名称： pg-citus
    pg_primary_db: meta               # citus 数据库名称：meta
    pg_dbsu_password: DBUser.Postgres # 如果使用 dbsu ，那么需要为其配置一个密码
    pg_users: [ { name: dbuser_meta ,password: DBUser.Meta ,pgbouncer: true ,roles: [ dbrole_admin ] } ]
    pg_databases: [ { name: meta ,extensions: [ { name: citus }, { name: postgis }, { name: timescaledb } ] } ]
    pg_hba_rules:
      - { user: 'all' ,db: all  ,addr: 127.0.0.1/32 ,auth: ssl ,title: 'all user ssl access from localhost' }
      - { user: 'all' ,db: all  ,addr: intra        ,auth: ssl ,title: 'all user ssl access from intranet'  }
```

您也可以在一个分组内指定所有 Citus 集群成员的身份参数，如 [`prod.yml`](https://github.com/Vonng/pigsty/blob/main/conf/prod.yml#L298) 所示：

```yaml
#==========================================================#
# pg-citus: 10 node citus cluster (5 x primary-replica pair)
#==========================================================#
pg-citus: # citus group
  hosts:
    10.10.10.50: { pg_group: 0, pg_cluster: pg-citus0 ,pg_vip_address: 10.10.10.60/24 ,pg_seq: 0, pg_role: primary }
    10.10.10.51: { pg_group: 0, pg_cluster: pg-citus0 ,pg_vip_address: 10.10.10.60/24 ,pg_seq: 1, pg_role: replica }
    10.10.10.52: { pg_group: 1, pg_cluster: pg-citus1 ,pg_vip_address: 10.10.10.61/24 ,pg_seq: 0, pg_role: primary }
    10.10.10.53: { pg_group: 1, pg_cluster: pg-citus1 ,pg_vip_address: 10.10.10.61/24 ,pg_seq: 1, pg_role: replica }
    10.10.10.54: { pg_group: 2, pg_cluster: pg-citus2 ,pg_vip_address: 10.10.10.62/24 ,pg_seq: 0, pg_role: primary }
    10.10.10.55: { pg_group: 2, pg_cluster: pg-citus2 ,pg_vip_address: 10.10.10.62/24 ,pg_seq: 1, pg_role: replica }
    10.10.10.56: { pg_group: 3, pg_cluster: pg-citus3 ,pg_vip_address: 10.10.10.63/24 ,pg_seq: 0, pg_role: primary }
    10.10.10.57: { pg_group: 3, pg_cluster: pg-citus3 ,pg_vip_address: 10.10.10.63/24 ,pg_seq: 1, pg_role: replica }
    10.10.10.58: { pg_group: 4, pg_cluster: pg-citus4 ,pg_vip_address: 10.10.10.64/24 ,pg_seq: 0, pg_role: primary }
    10.10.10.59: { pg_group: 4, pg_cluster: pg-citus4 ,pg_vip_address: 10.10.10.64/24 ,pg_seq: 1, pg_role: replica }
  vars:
    pg_mode: citus                    # pgsql cluster mode: citus
    pg_shard: pg-citus                # citus shard name: pg-citus
    pg_primary_db: test               # primary database used by citus
    pg_dbsu_password: DBUser.Postgres # all dbsu password access for citus cluster
    pg_vip_enabled: true
    pg_vip_interface: eth1
    pg_extensions: [ 'citus postgis timescaledb pgvector' ]
    pg_libs: 'citus, timescaledb, pg_stat_statements, auto_explain' # citus will be added by patroni automatically
    pg_users: [ { name: test ,password: test ,pgbouncer: true ,roles: [ dbrole_admin ] } ]
    pg_databases: [ { name: test ,owner: test ,extensions: [ { name: citus }, { name: postgis } ] } ]
    pg_hba_rules:
      - { user: 'all' ,db: all  ,addr: 10.10.10.0/24 ,auth: trust ,title: 'trust citus cluster members'        }
      - { user: 'all' ,db: all  ,addr: 127.0.0.1/32  ,auth: ssl   ,title: 'all user ssl access from localhost' }
      - { user: 'all' ,db: all  ,addr: intra         ,auth: ssl   ,title: 'all user ssl access from intranet'  }
```


--------

## 使用

您可以像访问普通集群一样，访问任意节点：

```bash
pgbench -i postgres://test:test@pg-citus0/test
pgbench -nv -P1 -T1000 -c 2 postgres://test:test@pg-citus0/test
```

默认情况下，您对某一个 Shard 进行的变更，都只发生在这套集群上，而不会同步到其他 Shard。

如果你希望将写入分布到所有 Shard，可以使用 Citus 提供的 API 函数，将表标记为：

- **水平分片表**（自动分区，需要指定分区键）
- **引用表**（全量复制：不需要指定分区键）：

从 Citus 11.2 开始，任何 Citus 数据库节点都可以扮演协调者的角色，即，任意一个主节点都可以写入：

```bash
psql -h pg-citus0 -d test -c "SELECT create_distributed_table('pgbench_accounts', 'aid'); SELECT truncate_local_data_after_distributing_table('public.pgbench_accounts');"
psql -h pg-citus0 -d test -c "SELECT create_reference_table('pgbench_branches')         ; SELECT truncate_local_data_after_distributing_table('public.pgbench_branches');"
psql -h pg-citus0 -d test -c "SELECT create_reference_table('pgbench_history')          ; SELECT truncate_local_data_after_distributing_table('public.pgbench_history');"
psql -h pg-citus0 -d test -c "SELECT create_reference_table('pgbench_tellers')          ; SELECT truncate_local_data_after_distributing_table('public.pgbench_tellers');"
```

将表分布出去后，你可以在其他节点上也访问到：

```bash
psql -h pg-citus1 -d test -c '\dt+'
```

例如，全表扫描可以发现执行计划已经变为分布式计划

```bash
vagrant@meta-1:~$ psql -h pg-citus3 -d test -c 'explain select * from pgbench_accounts'
                                               QUERY PLAN
---------------------------------------------------------------------------------------------------------
 Custom Scan (Citus Adaptive)  (cost=0.00..0.00 rows=100000 width=352)
   Task Count: 32
   Tasks Shown: One of 32
   ->  Task
         Node: host=10.10.10.52 port=5432 dbname=test
         ->  Seq Scan on pgbench_accounts_102008 pgbench_accounts  (cost=0.00..81.66 rows=3066 width=97)
(6 rows)
```

你可以从几个不同的主节点发起写入：

```bash
pgbench -nv -P1 -T1000 -c 2 postgres://test:test@pg-citus1/test
pgbench -nv -P1 -T1000 -c 2 postgres://test:test@pg-citus2/test
pgbench -nv -P1 -T1000 -c 2 postgres://test:test@pg-citus3/test
pgbench -nv -P1 -T1000 -c 2 postgres://test:test@pg-citus4/test
```

当某个节点出现故障时，Patroni 提供的原生高可用支持会将备用节点提升并自动顶上。

```bash
test=# select * from  pg_dist_node;
 nodeid | groupid |  nodename   | nodeport | noderack | hasmetadata | isactive | noderole | nodecluster | metadatasynced | shouldhaveshards
--------+---------+-------------+----------+----------+-------------+----------+----------+-------------+----------------+------------------
      1 |       0 | 10.10.10.51 |     5432 | default  | t           | t        | primary  | default     | t              | f
      2 |       2 | 10.10.10.54 |     5432 | default  | t           | t        | primary  | default     | t              | t
      5 |       1 | 10.10.10.52 |     5432 | default  | t           | t        | primary  | default     | t              | t
      3 |       4 | 10.10.10.58 |     5432 | default  | t           | t        | primary  | default     | t              | t
      4 |       3 | 10.10.10.56 |     5432 | default  | t           | t        | primary  | default     | t              | t
```

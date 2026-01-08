---
title: Citus 集群部署
weight: 2003
date: 2025-01-11
description: 如何部署 Citus 高可用分布式集群？
icon: fa-solid fa-arrow-right-from-bracket
module: [PGSQL]
categories: [任务, 教程, 概念]
---

Citus 是一个 PostgreSQL 扩展，可以将 PostgreSQL 原地转换为一个分布式数据库，并实现在多个节点上水平扩展，以处理大量数据和大量查询。

Patroni 在 v3.0 后，提供了对 Citus 原生高可用的支持，简化了 Citus 集群的搭建，Pigsty 也对此提供了原生支持。

- [Citus 是什么](https://docs.citusdata.com/en/stable/get_started/what_is_citus.html)
- [Patroni Citus 支持](https://patroni.readthedocs.io/en/latest/citus.html)

> 注意：Citus 当前最新版本（12.1.6） 支持 PostgreSQL 16，15，14 三个大版本，尚不支持 PostgreSQL 17，且没有官方 ARM64 支持。 Pigsty 扩展仓库提供了 Citus ARM64 软件包，但在 ARM 架构下请谨慎使用。


--------

## Citus集群

Pigsty 原生支持 Citus。可以参考 [`conf/citus.yml`](https://github.com/pgsty/pigsty/blob/main/conf/citus.yml)

这里使用 Pigsty 四节点沙箱，定义了一个 Citus 集群 `pg-citus`，其中包括一个两节点的协调者集群 `pg-citus0`，
以及两个 Worker 集群 `pg-citus1`，`pg-citus2`。

```yaml
pg-citus:
  hosts:
    10.10.10.10: { pg_group: 0, pg_cluster: pg-citus0 ,pg_vip_address: 10.10.10.2/24 ,pg_seq: 1, pg_role: primary }
    10.10.10.11: { pg_group: 0, pg_cluster: pg-citus0 ,pg_vip_address: 10.10.10.2/24 ,pg_seq: 2, pg_role: replica }
    10.10.10.12: { pg_group: 1, pg_cluster: pg-citus1 ,pg_vip_address: 10.10.10.3/24 ,pg_seq: 1, pg_role: primary }
    10.10.10.13: { pg_group: 2, pg_cluster: pg-citus2 ,pg_vip_address: 10.10.10.4/24 ,pg_seq: 1, pg_role: primary }
  vars:
    pg_mode: citus                            # pgsql cluster mode: citus
    pg_version: 16                            # citus does not have pg16 available
    pg_shard: pg-citus                        # citus shard name: pg-citus
    pg_primary_db: citus                      # primary database used by citus
    pg_vip_enabled: true                      # enable vip for citus cluster
    pg_vip_interface: eth1                    # vip interface for all members
    pg_dbsu_password: DBUser.Postgres         # all dbsu password access for citus cluster
    pg_extensions: [ citus, postgis, pgvector, topn, pg_cron, hll ]  # install these extensions
    pg_libs: 'citus, pg_cron, pg_stat_statements' # citus will be added by patroni automatically
    pg_users: [{ name: dbuser_citus ,password: DBUser.Citus ,pgbouncer: true ,roles: [ dbrole_admin ]    }]
    pg_databases: [{ name: citus ,owner: dbuser_citus ,extensions: [ citus, vector, topn, pg_cron, hll ] }]
    pg_parameters:
      cron.database_name: citus
      citus.node_conninfo: 'sslmode=require sslrootcert=/pg/cert/ca.crt sslmode=verify-full'
    pg_hba_rules:
      - { user: 'all' ,db: all  ,addr: 127.0.0.1/32  ,auth: ssl   ,title: 'all user ssl access from localhost' }
      - { user: 'all' ,db: all  ,addr: intra         ,auth: ssl   ,title: 'all user ssl access from intranet'  }
```

相比标准 PostgreSQL 集群，Citus 集群的配置有一些特殊之处，首先，你需要确保 Citus 扩展被下载，安装，加载并启用，这涉及到以下四个参数

- [`repo_packages`](/docs/infra/param#repo_packages)：必须包含 `citus` 扩展，或者你需要使用带有 Citus 扩展的 PostgreSQL 离线安装包。
- [`pg_extensions`](/docs/pgsql/param#pg_extensions)：必须包含 `citus` 扩展，即你必须在每个节点上安装 `citus` 扩展。
- [`pg_libs`](/docs/pgsql/param#pg_libs)：必须包含 `citus` 扩展，而且首位必须为 `citus`，但现在 Patroni 会自动完成这件事了。
- [`pg_databases`](/docs/pgsql/param#pg_databases)： 这里要定义一个首要数据库，该数据库必须安装 `citus` 扩展。

其次，你需要确保 Citus 集群的配置正确：

- [`pg_mode`](/docs/pgsql/param#pg_mode)： 必须设置为 `citus`，从而告知 Patroni 使用 Citus 模式。
- [`pg_primary_db`](/docs/pgsql/param#pg_primary_db)：必须指定一个首要数据库的名称，该数据库必须安装 `citus` 扩展，这里名为 `citus`。
- [`pg_shard`](/docs/pgsql/param#pg_shard)：必须指定一个统一的名称，字符串，作为所有水平分片PG集群的集群名称前缀，这里为 `pg-citus`。
- [`pg_group`](/docs/pgsql/param#pg_group)：必须指定一个分片号，从零开始依次分配的整数，`0` 号固定代表协调者集群，其他为 Worker 集群。
- [`pg_cluster`](/docs/pgsql/param#pg_cluster) 必须与 [`pg_shard`](/docs/pgsql/param#pg_shard) 和 [`pg_group`](/docs/pgsql/param#pg_group) 组合后的结果对应。
- [`pg_dbsu_password`](/docs/pgsql/param#pg_dbsu_password)：必须设置为非空的纯文本密码，否则 Citus 无法正常工作。
- [`pg_parameters`](/docs/pgsql/param#pg_parameters)：建议设置 `citus.node_conninfo` 参数，强制要求 SSL 访问并要求节点间验证客户端证书。

配置完成后，您可以像创建普通 PostgreSQL 集群一样，使用 `pgsql.yml` 部署 Citus 集群。


--------

## 管理Citus集群

定义好 Citus 集群后，部署 Citus 集群同样使用的剧本 `pgsql.yml`：

```bash
./pgsql.yml -l pg-citus    # 部署 Citus 集群 pg-citus
```

使用任意成员的 DBSU（`postgres`）用户，都能通过 `patronictl` （`alias: pg`） 列出 Citus 集群的状态：

```bash
$ pg list
+ Citus cluster: pg-citus ----------+---------+-----------+----+-----------+--------------------+
| Group | Member      | Host        | Role    | State     | TL | Lag in MB | Tags               |
+-------+-------------+-------------+---------+-----------+----+-----------+--------------------+
|     0 | pg-citus0-1 | 10.10.10.10 | Leader  | running   |  1 |           | clonefrom: true    |
|       |             |             |         |           |    |           | conf: tiny.yml     |
|       |             |             |         |           |    |           | spec: 20C.40G.125G |
|       |             |             |         |           |    |           | version: '16'      |
+-------+-------------+-------------+---------+-----------+----+-----------+--------------------+
|     1 | pg-citus1-1 | 10.10.10.11 | Leader  | running   |  1 |           | clonefrom: true    |
|       |             |             |         |           |    |           | conf: tiny.yml     |
|       |             |             |         |           |    |           | spec: 10C.20G.125G |
|       |             |             |         |           |    |           | version: '16'      |
+-------+-------------+-------------+---------+-----------+----+-----------+--------------------+
|     2 | pg-citus2-1 | 10.10.10.12 | Leader  | running   |  1 |           | clonefrom: true    |
|       |             |             |         |           |    |           | conf: tiny.yml     |
|       |             |             |         |           |    |           | spec: 10C.20G.125G |
|       |             |             |         |           |    |           | version: '16'      |
+-------+-------------+-------------+---------+-----------+----+-----------+--------------------+
|     2 | pg-citus2-2 | 10.10.10.13 | Replica | streaming |  1 |         0 | clonefrom: true    |
|       |             |             |         |           |    |           | conf: tiny.yml     |
|       |             |             |         |           |    |           | spec: 10C.20G.125G |
|       |             |             |         |           |    |           | version: '16'      |
+-------+-------------+-------------+---------+-----------+----+-----------+--------------------+
```

您可以将每个水平分片集群视为一个独立的 PGSQL 集群，使用 `pg` (`patronictl`) 命令管理它们。
但是务必注意，当你使用 `pg` 命令管理 Citus 集群时，需要额外使用 `--group` 参数指定集群分片号

```bash
pg list pg-citus --group 0   # 需要使用 --group 0 指定集群分片号
```

Citus 中有一个名为 `pg_dist_node` 的系统表，用于记录 Citus 集群的节点信息，Patroni 会自动维护该表。

```bash
PGURL=postgres://postgres:DBUser.Postgres@10.10.10.10/citus

psql $PGURL -c 'SELECT * FROM pg_dist_node;'       # 查看节点信息
 nodeid | groupid |  nodename   | nodeport | noderack | hasmetadata | isactive | noderole  | nodecluster | metadatasynced | shouldhaveshards
--------+---------+-------------+----------+----------+-------------+----------+-----------+-------------+----------------+------------------
      1 |       0 | 10.10.10.10 |     5432 | default  | t           | t        | primary   | default     | t              | f
      4 |       1 | 10.10.10.12 |     5432 | default  | t           | t        | primary   | default     | t              | t
      5 |       2 | 10.10.10.13 |     5432 | default  | t           | t        | primary   | default     | t              | t
      6 |       0 | 10.10.10.11 |     5432 | default  | t           | t        | secondary | default     | t              | f
```

此外，你还可以查看用户认证信息（仅限超级用户访问）：

```bash
$ psql $PGURL -c 'SELECT * FROM pg_dist_authinfo;'   # 查看节点认证信息（仅限超级用户访问）
```

然后，你可以使用普通业务用户（例如，具有 DDL 权限的 `dbuser_citus`）来访问 Citus 集群：

```bash
psql postgres://dbuser_citus:DBUser.Citus@10.10.10.10/citus -c 'SELECT * FROM pg_dist_node;'
```




--------

## 使用Citus集群

在使用 Citus 集群时，我们强烈建议您先阅读 [Citus 官方文档](https://docs.citusdata.com/en/stable/get_started/concepts.html)，了解其架构设计与核心概念。

其中核心是了解 Citus 中的五种表，以及其特点与应用场景：

- 分布式表（Distributed Table）
- 参考表（Reference Table）
- 本地表（Local Table）
- 本地管理表（Local Management Table）
- 架构表（Schema Table）

在协调者节点上，您可以创建分布式表和引用表，并从任何数据节点查询它们。从 11.2 开始，任何 Citus 数据库节点都可以扮演协调者的角色了。

我们可以使用 pgbench 来创建一些表，并将其中的主表（`pgbench_accounts`）分布到各个节点上，然后将其他小表作为引用表：

```bash
PGURL=postgres://dbuser_citus:DBUser.Citus@10.10.10.10/citus
pgbench -i $PGURL

psql $PGURL <<-EOF
SELECT create_distributed_table('pgbench_accounts', 'aid'); SELECT truncate_local_data_after_distributing_table('public.pgbench_accounts');
SELECT create_reference_table('pgbench_branches')         ; SELECT truncate_local_data_after_distributing_table('public.pgbench_branches');
SELECT create_reference_table('pgbench_history')          ; SELECT truncate_local_data_after_distributing_table('public.pgbench_history');
SELECT create_reference_table('pgbench_tellers')          ; SELECT truncate_local_data_after_distributing_table('public.pgbench_tellers');
EOF
```

执行读写测试：

```bash
pgbench -nv -P1 -c10 -T500 postgres://dbuser_citus:DBUser.Citus@10.10.10.10/citus      # 直连协调者 5432 端口
pgbench -nv -P1 -c10 -T500 postgres://dbuser_citus:DBUser.Citus@10.10.10.10:6432/citus # 通过连接池，减少客户端连接数压力，可以有效提高整体吞吐。
pgbench -nv -P1 -c10 -T500 postgres://dbuser_citus:DBUser.Citus@10.10.10.13/citus      # 任意 primary 节点都可以作为 coordinator
pgbench --select-only -nv -P1 -c10 -T500 postgres://dbuser_citus:DBUser.Citus@10.10.10.11/citus # 可以发起只读查询
```


--------

## 更严肃的生产部署

要将 Citus 用于生产环境，您通常需要为 Coordinator 和每个 Worker 集群设置流复制物理副本。

例如，在 [`simu.yml`](https://github.com/pgsty/pigsty/blob/main/conf/simu.yml) 中定义了一个 10 节点的 Citus 集群。

```yaml
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
    pg_mode: citus                            # pgsql cluster mode: citus
    pg_version: 16                            # citus does not have pg16 available
    pg_shard: pg-citus                        # citus shard name: pg-citus
    pg_primary_db: citus                      # primary database used by citus
    pg_vip_enabled: true                      # enable vip for citus cluster
    pg_vip_interface: eth1                    # vip interface for all members
    pg_dbsu_password: DBUser.Postgres         # enable dbsu password access for citus
    pg_extensions: [ citus, postgis, pgvector, topn, pg_cron, hll ]  # install these extensions
    pg_libs: 'citus, pg_cron, pg_stat_statements' # citus will be added by patroni automatically
    pg_users: [{ name: dbuser_citus ,password: DBUser.Citus ,pgbouncer: true ,roles: [ dbrole_admin ]    }]
    pg_databases: [{ name: citus ,owner: dbuser_citus ,extensions: [ citus, vector, topn, pg_cron, hll ] }]
    pg_parameters:
      cron.database_name: citus
      citus.node_conninfo: 'sslrootcert=/pg/cert/ca.crt sslmode=verify-full'
    pg_hba_rules:
      - { user: 'all' ,db: all  ,addr: 127.0.0.1/32  ,auth: ssl   ,title: 'all user ssl access from localhost' }
      - { user: 'all' ,db: all  ,addr: intra         ,auth: ssl   ,title: 'all user ssl access from intranet'  }
```

我们将在后续教程中覆盖一系列关于 Citus 的高级主题

- 读写分离
- 故障处理
- 一致性备份与恢复
- 高级监控与问题诊断
- 连接池
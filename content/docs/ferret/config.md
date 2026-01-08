---
title: 集群配置
weight: 4020
description: 配置 FerretDB 模块，定义集群拓扑
icon: fa-solid fa-code
categories: [参考]
linkTitle: 集群配置
---

在部署 FerretDB 集群之前，您需要使用相关 [参数](/docs/ferret/param) 在配置清单中定义它。


----------------

## FerretDB 集群

以下示例使用默认的单节点 `pg-meta` 集群的 `meta` 数据库作为 FerretDB 的底层存储：

```yaml
all:
  children:

    #----------------------------------#
    # ferretdb for mongodb on postgresql
    #----------------------------------#
    # ./mongo.yml -l ferret
    ferret:
      hosts:
        10.10.10.10: { mongo_seq: 1 }
      vars:
        mongo_cluster: ferret
        mongo_pgurl: 'postgres://mongod:DBUser.Mongo@10.10.10.10:5432/meta'
```

这里，[`mongo_cluster`](/docs/ferret/param#mongo_cluster) 和 [`mongo_seq`](/docs/ferret/param#mongo_seq) 是基本的身份参数。对于 FerretDB，还需要 [`mongo_pgurl`](/docs/ferret/param#mongo_pgurl) 来指定底层 PostgreSQL 的位置。

请注意，`mongo_pgurl` 参数需要一个 PostgreSQL **超级用户**。在此示例中，为 FerretDB 定义了一个专用的 `mongod` 超级用户。

请注意，FerretDB 的 [身份验证](https://docs.ferretdb.io/security/authentication/) 完全基于 PostgreSQL。您可以使用 FerretDB 或 PostgreSQL 创建其他常规用户。


----------------

## PostgreSQL 集群

FerretDB 2.0+ 需要一个扩展：[DocumentDB](https://pgext.cloud/e/documentdb)，它依赖于几个其他扩展。以下是为 FerretDB 创建 PostgreSQL 集群的模板：

```yaml
all:
  children:

    #----------------------------------#
    # pgsql (singleton on current node)
    #----------------------------------#
    # postgres cluster: pg-meta
    pg-meta:
      hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
      vars:
        pg_cluster: pg-meta
        pg_users:
          - { name: mongod      ,password: DBUser.Mongo  ,pgbouncer: true ,roles: [dbrole_admin ] ,superuser: true ,comment: ferretdb super user }
          - { name: dbuser_meta ,password: DBUser.Meta   ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: pigsty admin user }
          - { name: dbuser_view ,password: DBUser.Viewer ,pgbouncer: true ,roles: [dbrole_readonly] ,comment: read-only viewer for meta database }
        pg_databases:
          - {name: meta, owner: mongod ,baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty] ,extensions: [ documentdb, postgis, vector, pg_cron, rum ]}
        pg_hba_rules:
          - { user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes' }
          - { user: mongod      , db: all ,addr: world ,auth: pwd ,title: 'mongodb password access from everywhere' }
        pg_extensions:
          - documentdb, citus, postgis, pgvector, pg_cron, rum
        pg_parameters:
          cron.database_name: meta
        pg_libs: 'pg_documentdb, pg_documentdb_core, pg_cron, pg_stat_statements, auto_explain'
```

关键配置要点：

- **用户配置**：需要创建一个具有超级用户权限的 `mongod` 用户，供 FerretDB 使用
- **数据库配置**：数据库需要安装 `documentdb` 扩展及其依赖
- **HBA 规则**：允许 `mongod` 用户从任意地址通过密码认证连接
- **共享库**：需要在 `pg_libs` 中预加载 `pg_documentdb` 和 `pg_documentdb_core`


----------------

## 高可用性

您可以使用 [服务](/docs/pgsql/service/) 连接到高可用的 PostgreSQL 集群，并部署多个 FerretDB 实例副本，并为 FerretDB 层绑定 L2 VIP 以实现高可用性。

```yaml
ferret:
  hosts:
    10.10.10.45: { mongo_seq: 1 }
    10.10.10.46: { mongo_seq: 2 }
    10.10.10.47: { mongo_seq: 3 }
  vars:
    mongo_cluster: ferret
    mongo_pgurl: 'postgres://mongod:DBUser.Mongo@10.10.10.3:5436/test'
    vip_enabled: true
    vip_vrid: 128
    vip_address: 10.10.10.99
    vip_interface: eth1
```

在这个高可用配置中：

- **多实例部署**：在三个节点上部署 FerretDB 实例，所有实例连接到同一个 PostgreSQL 后端
- **VIP 配置**：使用 Keepalived 绑定虚拟 IP `10.10.10.99`，实现 FerretDB 层的故障转移
- **服务地址**：使用 PostgreSQL 的服务地址（端口 5436 通常是主库服务），确保连接到正确的主库

这样配置后，客户端可以通过 VIP 地址连接到 FerretDB，即使某个 FerretDB 实例故障，VIP 也会自动漂移到其他可用实例。

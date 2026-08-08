---
title: DocumentDB
weight: 2117
description: DocumentDB + FerretDB 组合提供 MongoDB 线协议兼容能力
icon: fa-solid fa-leaf
module: [PGSQL]
categories: [概念]
aliases: [/docs/ferret/]
---

[**DocumentDB**](/ext/e/documentdb) 是微软开源维护的 PostgreSQL 文档数据库扩展，[**FerretDB**](https://github.com/FerretDB/FerretDB) 是构建在其上的无状态协议转换代理。
两者组合，让标准 PostgreSQL 内核对外提供 MongoDB 线协议兼容端点——使用 MongoDB 驱动的应用程序可以直接对接，请求被转换为对 PostgreSQL 的操作。

与其他内核分支不同，这不是一个独立的 PostgreSQL 分叉：数据层运行原生 PostgreSQL 16 - 18 内核，由标准 `PGSQL` 模块管理，
持久化、事务、高可用、备份、监控与访问控制均由 PostgreSQL 侧负责；FerretDB 以 Pigsty Docker APP 的形式部署，只承担协议转换。

Pigsty 是 FerretDB 社区的合作伙伴，提供 FerretDB 与 DocumentDB 扩展的二进制打包，
并通过 [**`mongo`**](/docs/conf/mongo/) 配置模板开箱即用地交付整套组合。


------

## 快速开始

使用 Pigsty 的 [**标准安装流程**](/docs/setup/install) 和 [`mongo`](/docs/conf/mongo/) 配置模板：

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty;
./configure -c mongo    # 使用 Mongo（DocumentDB + FerretDB）配置模板
./deploy.yml            # 安装，生产部署请先在 pigsty.yml 中修改密码
./docker.yml -l pg-meta # 在 pg-meta 节点上安装 Docker
./app.yml -l pg-meta    # 部署 FerretDB Docker APP
```

FerretDB 默认监听本机回环地址的 `27017` 端口，使用 `mongosh` 或任意 MongoDB 兼容客户端即可访问：

```bash
mongosh 'mongodb://mongod:DBUser.Mongo@127.0.0.1:27017/'
```


------

## 配置

源文件：[`pigsty/conf/mongo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/mongo.yml)，完整模板说明见 [**Mongo 配置模板**](/docs/conf/mongo/) 文档。

PostgreSQL 侧的关键配置是 `documentdb` 扩展及其预加载库，以及供 FerretDB 使用的后端超级用户：

```yaml
pg-meta:
  hosts:
    10.10.10.10: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - { name: mongod ,password: DBUser.Mongo ,superuser: true ,comment: FerretDB backend user }
    pg_databases:
      - { name: postgres, extensions: [ documentdb, postgis, vector, pg_cron, rum ]}
    pg_extensions: [ documentdb, postgis, pgvector, pg_cron, rum ]
    pg_libs: 'pg_documentdb, pg_documentdb_core, pg_documentdb_extended_rum, pg_cron, pg_stat_statements, auto_explain'
```

FerretDB 作为 Docker APP 部署，参数是 `apps.ferretdb.conf` 下的普通覆盖项，
容器通过 `host.docker.internal` 连接本机 `5436` 主库直连服务：

```yaml
docker_enabled: true
app: ferretdb
apps:
  ferretdb:
    conf:
      FERRETDB_IMAGE: ghcr.io/ferretdb/ferretdb:2.7.0
      FERRETDB_POSTGRESQL_URL: 'postgres://mongod:DBUser.Mongo@host.docker.internal:5436/postgres?pool_min_conns=1&pool_max_conns=20'
      FERRETDB_BIND_ADDR: 127.0.0.1
      FERRETDB_PORT: 27017
      FERRETDB_AUTH: true
      FERRETDB_TELEMETRY: disabled
```


------

## 高可用

因为 FerretDB 完全无状态，高可用拓扑与标准 PostgreSQL 集群一致：模板中保留了注释状态的三节点 `pg-mongo` 示例，
每个节点各跑一个 FerretDB 容器（绑定本机 `27018`），由 HAProxy 汇聚为浮动端点 `10.10.10.4:27017`（`mongo.pigsty`）对外服务。

PostgreSQL 侧的故障转移仍由 Patroni 与 etcd 负责，Mongo 端点在主库切换后自动恢复可用。


------

## 注意事项

- FerretDB 默认启用认证（`FERRETDB_AUTH: true`），但尚未实现 MongoDB 授权角色体系，真正的安全边界仍是 PostgreSQL 的用户与 HBA 规则。
- 默认未启用客户端 MongoDB TLS，Mongo 端点也不会暴露到网络；确有远程访问需求时才应修改 `FERRETDB_BIND_ADDR`。
- 后端集群统一使用标准 PostgreSQL 参数、剧本与仪表盘，不存在独立的 FERRET 模块或 `mongo_*` 参数组。
- FerretDB 或 DocumentDB 升级后，建议重新执行一次带认证的 CRUD 冒烟测试。

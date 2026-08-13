---
title: FerretDB：MongoDB 协议
weight: 568
description: 在 Pigsty 托管的 PostgreSQL 与 DocumentDB 之上部署无状态 FerretDB 代理。
module: [SOFTWARE]
categories: [参考]
---

[**FerretDB**](https://www.ferretdb.com/) 在 PostgreSQL 与 DocumentDB 扩展之上提供 MongoDB 兼容协议。Pigsty 的 `app/ferretdb` 只运行无状态协议代理；PostgreSQL、`postgres` 数据库、DocumentDB 扩展与后端登录用户必须预先存在，[`mongo` 配置模板](/docs/conf/mongo/) 会一次性准备这些依赖。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c mongo
./deploy.yml
./docker.yml -l pg-meta
./app.yml -l pg-meta
```

另行安装 `mongosh` 或其他 MongoDB 兼容客户端后，使用模板声明的专用登录连接：

```bash
mongosh 'mongodb://mongod:DBUser.Mongo@127.0.0.1:27017/'
```

## 关键配置

请通过清单中的 `apps.ferretdb.conf` 覆盖模板变量，不要直接修改部署到 `/opt/ferretdb/.env` 的文件：

```yaml
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

端口 `5436` 是 Pigsty 直连当前 PostgreSQL 主库的服务。Linux `host-gateway` 映射让容器通过本机接入，同时保留 Pigsty 的主库路由。MongoDB 端口默认只监听回环地址；远程客户端确有需要时再显式修改 `FERRETDB_BIND_ADDR`。

FerretDB 通过 PostgreSQL 验证用户身份，但目前不实现 MongoDB 授权语义，因此 MongoDB 角色不能提供访问隔离。模板也没有启用客户端 MongoDB TLS；将服务暴露到不可信网络前，必须配置证书与 `FERRETDB_LISTEN_TLS*` 变量。

FerretDB 发行版会指定首选 DocumentDB 版本，而 Pigsty 可能提供更新的兼容软件包。任一组件升级后，都应重新执行一次带身份验证的 CRUD 冒烟测试。

## 可选三节点拓扑

[`mongo` 模板](/docs/conf/mongo/) 包含一段默认注释的三节点 PostgreSQL / DocumentDB 集群：每个节点运行一个 FerretDB 容器，由 HAProxy 通过浮动入口 `10.10.10.4:27017`（`mongo.pigsty`）暴露标准端口。启用完整的 `pg-mongo` 与额外 etcd 成员后执行：

```bash
./configure -c mongo
./deploy.yml
./docker.yml -l pg-mongo
./app.yml -l pg-mongo
mongosh 'mongodb://mongod:DBUser.Mongo@10.10.10.4:27017/'
```

HAProxy 使用 TCP 级健康检查剔除停止或不可达的 FerretDB 进程；容器镜像内置的健康检查继续验证后端连接。生产部署还应使用共享的 Silo 或外部 S3 兼容 pgBackRest 仓库，确保 PostgreSQL 主库切换后仍能访问同一份备份历史。

## 参考

- [PostgreSQL Mongo 配置模板](/docs/conf/mongo/)
- [Pigsty FerretDB 模板源码](https://github.com/pgsty/pigsty/tree/main/app/ferretdb)
- [FerretDB 官方文档](https://docs.ferretdb.io/)

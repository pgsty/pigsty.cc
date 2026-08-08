---
title: PostgreSQL Mongo 模式
linkTitle: Mongo
weight: 500
description: 使用 DocumentDB 与 FerretDB Docker APP，让 PostgreSQL 提供 MongoDB 协议兼容能力。
icon: fa-solid fa-database
module: [PGSQL]
categories: [参考, 概念]
aliases:  # /docs/ferret/ 根路径重定向到内核页 /docs/pgsql/kernel/documentdb
  - /docs/ferret/admin/
  - /docs/ferret/config/
  - /docs/ferret/faq/
  - /docs/ferret/metric/
  - /docs/ferret/monitor/
  - /docs/ferret/param/
  - /docs/ferret/playbook/
  - /docs/ferret/usage/
---

`mongo` 配置模板是一个 **PostgreSQL 部署模式**，而不是独立的 Pigsty 模块。它由以下组件组成：

- 由标准 `PGSQL` 模块管理的 PostgreSQL 18
- `documentdb` 扩展及其预加载库
- 通过 Pigsty Docker APP 工作流部署的无状态 FerretDB 代理

所有数据、高可用、备份、监控与生命周期管理仍由 PostgreSQL 负责；FerretDB 只提供 MongoDB 线协议兼容端点。


--------

## 快速开始

模板默认部署在单节点 `10.10.10.10` 上，FerretDB 默认只监听本机回环地址。

如果尚未安装 `mongosh`，请单独安装，或使用其他兼容 MongoDB 协议的客户端。

```bash
./configure -c mongo
./deploy.yml
./docker.yml -l pg-meta
./app.yml -l pg-meta
mongosh 'mongodb://mongod:DBUser.Mongo@127.0.0.1:27017/'
```

模板声明了专用的 PostgreSQL 用户 `mongod`。FerretDB 默认启用认证，但尚未实现 MongoDB 授权角色；真正的安全边界仍然是 PostgreSQL。


--------

## 架构

| 层次 | 实现 | 职责 |
|:-----|:-----|:-----|
| 数据层 | PostgreSQL + DocumentDB | 持久化、事务、高可用、PITR、ACL 与监控 |
| 协议层 | FerretDB Docker APP | 无状态的 MongoDB 线协议兼容 |
| 访问层 | 默认 `127.0.0.1:27017` | 本机 MongoDB 客户端入口 |

容器通过 `host.docker.internal` 连接 Pigsty 本机的 `5436` 主库服务。默认 Mongo 端点不会暴露到网络；只有确实需要远程访问时才应修改 `FERRETDB_BIND_ADDR`。


--------

## 配置

源文件：[`pigsty/conf/mongo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/mongo.yml)

{{< readfile file="yaml/mongo.yml" code="true" lang="yaml" >}}

FerretDB 参数是 `apps.ferretdb.conf` 下的普通 APP 覆盖项：

```yaml
app: ferretdb
apps:
  ferretdb:
    conf:
      FERRETDB_IMAGE: ghcr.io/ferretdb/ferretdb:2.7.0
      FERRETDB_POSTGRESQL_URL: 'postgres://mongod:DBUser.Mongo@host.docker.internal:5436/postgres'
      FERRETDB_BIND_ADDR: 127.0.0.1
      FERRETDB_PORT: 27017
      FERRETDB_AUTH: true
      FERRETDB_TELEMETRY: disabled
```

后端集群统一使用标准 PostgreSQL 参数、剧本、仪表盘和管理流程；不再存在 `mongo_*` 参数组或独立的 `mongo.yml` 剧本。


--------

## 可选高可用拓扑

模板中保留了注释状态的三节点 `pg-mongo` 示例。需要时取消该区块以及两个额外 etcd 成员的注释即可。

HA 模式下，每个 FerretDB 容器绑定 `{{ inventory_hostname }}:27018`，HAProxy 通过浮动端点 `10.10.10.4:27017`（`mongo.pigsty`）暴露三个后端。PostgreSQL 故障转移仍由 Patroni 负责，FerretDB 始终保持无状态。


--------

## 注意事项

- 模板包含方便开发测试的 HBA 示例，生产环境请收紧。
- 默认未启用客户端 MongoDB TLS。
- 后端使用标准 PostgreSQL 与 Docker 仪表盘监控；不再提供独立 FERRET 模块或模块仪表盘。
- FerretDB 或 DocumentDB 升级后应重新执行一次带认证的 CRUD 冒烟测试。

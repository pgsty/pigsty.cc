---
title: 常见问题
weight: 4080
description: FerretDB 与 DocumentDB 模块常见问题答疑
icon: fa-solid fa-circle-question
categories: [参考]
linkTitle: 常见问题
---

----------------

## 为什么要使用 FerretDB？

[MongoDB](https://www.mongodb.com/licensing/server-side-public-license/faq) **曾经** 是一项令人惊叹的技术，让开发者能够抛开关系型数据库的"模式束缚"，快速构建应用程序。
然而随着时间推移，MongoDB 放弃了它的开源本质，将许可证更改为 SSPL，这使得许多开源项目和早期商业项目无法使用它。
大多数 MongoDB 用户其实并不需要 MongoDB 提供的高级功能，但他们确实需要一个易于使用的开源文档数据库解决方案。为了填补这个空白，[FerretDB](https://ferretdb.io) 应运而生。

PostgreSQL 的 JSON 功能支持已经足够完善了：二进制存储 JSONB，GIN 任意字段索引，各种 JSON 处理函数，JSON PATH 和 JSON Schema，它早已是一个功能完备，性能强大的文档数据库。
但是提供替代的功能，与 **直接仿真** 还是不一样的。FerretDB 可以为使用 MongoDB 驱动的应用程序提供一个丝滑迁移到 PostgreSQL 的过渡方案。


----------------

## Pigsty 对 FerretDB 的支持历史？

Pigsty 从 1.x 开始就提供了基于 Docker 的 FerretDB 模板，在 v2.3 中提供了原生部署支持。
它作为一个选装项，对丰富 PostgreSQL 生态大有裨益。Pigsty 社区已经与 FerretDB 社区成为了合作伙伴，后续将进行深度的合作与适配支持。

**FERRET** 是 Pigsty 中的一个 **可选** 模块。自 v2.0 以来，它需要 [`documentdb`](https://pgext.cloud/e/documentdb) 扩展才能工作。
Pigsty 已经打包了这个扩展，并提供了一个 [`mongo.yml`](https://github.com/pgsty/pigsty/blob/v4.1.0/conf/mongo.yml) 模板，帮助您轻松部署 FerretDB 集群。


----------------

## 安装 MongoSH

您可以使用 [MongoSH](https://www.mongodb.com/docs/mongodb-shell/) 作为客户端工具访问 FerretDB 集群。

推荐使用 `pig` 命令添加 MongoDB 仓库并安装：

```bash
pig repo add mongo -u   # 添加 MongoDB 官方仓库
yum install mongodb-mongosh   # RHEL/CentOS/Rocky/Alma
apt install mongodb-mongosh   # Debian/Ubuntu
```

您也可以手动添加 MongoDB 仓库：

```bash
# RHEL/CentOS 系
cat > /etc/yum.repos.d/mongo.repo <<EOF
[mongodb-org-7.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/\$releasever/mongodb-org/7.0/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-7.0.asc
EOF
yum install -y mongodb-mongosh
```


----------------

## 认证方式

FerretDB 的身份验证完全基于底层 PostgreSQL。Pigsty 管理的 PostgreSQL 集群默认使用 `scram-sha-256`，FerretDB 2.x 对应使用 `SCRAM-SHA-256`。通常客户端会自动协商，如遇认证协商失败可显式指定机制：

```bash
mongosh 'mongodb://user:password@host:27017'
mongosh 'mongodb://user:password@host:27017/?authMechanism=SCRAM-SHA-256'
```


----------------

## 与 MongoDB 的兼容性

FerretDB 实现了 MongoDB 的线协议，但底层使用 PostgreSQL 存储。这意味着：

- 大多数基本的 CRUD 操作与 MongoDB 兼容
- 某些高级功能可能不支持或有差异
- 聚合管道支持有限

详细的兼容性信息请参阅：
- [FerretDB 支持的命令](https://docs.ferretdb.io/reference/supported-commands/)
- [与 MongoDB 的差异](https://docs.ferretdb.io/diff/)


----------------

## 为什么需要超级用户

FerretDB 2.0+ 使用 `documentdb` 扩展，该扩展需要超级用户权限来创建和管理内部结构。因此，在 [`mongo_pgurl`](/docs/ferret/param#mongo_pgurl) 中指定的用户必须是 PostgreSQL 超级用户。

建议创建一个专用的 `mongod` 超级用户供 FerretDB 使用，而不是使用默认的 `postgres` 用户。


----------------

## 如何实现高可用

FerretDB 本身是无状态的，所有数据都存储在底层的 PostgreSQL 中。要实现高可用：

1. **PostgreSQL 层**：使用 Pigsty 的 PGSQL 模块部署高可用 PostgreSQL 集群
2. **FerretDB 层**：部署多个 FerretDB 实例，使用 VIP 或负载均衡器

详细配置请参阅 [高可用配置](/docs/ferret/config#高可用性)。


----------------

## 性能如何

FerretDB 的性能取决于底层的 PostgreSQL 集群。由于需要将 MongoDB 命令翻译为 SQL，会有一定的性能开销。对于大多数 OLTP 场景，性能是可接受的。

如果您需要更高的性能，可以：
- 使用更快的存储（NVMe SSD）
- 增加 PostgreSQL 的资源配置
- 优化 PostgreSQL 参数
- 使用连接池减少连接开销

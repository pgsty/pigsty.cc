---
title: 管理预案
weight: 4040
description: 创建、移除、扩展、收缩、升级 FerretDB 集群
icon: fa-solid fa-building-columns
categories: [任务]
linkTitle: 管理预案
---

本文档介绍 FerretDB 集群的日常管理操作。


----------------

## 创建 FerretDB 集群

在 [配置清单](/docs/setup/config) 中 [定义](/docs/ferret/config) FerretDB 集群后，您可以使用以下命令安装它：

```bash
./mongo.yml -l ferret   # 在 ferret 分组上安装 FerretDB
```

由于 FerretDB 使用 PostgreSQL 作为其底层存储，多次运行此剧本通常是安全的（幂等性）。

FerretDB 服务配置了失败自动重启（`Restart=on-failure`），为这个无状态代理层提供了基本的容错能力。


----------------

## 移除 FerretDB 集群

要移除 FerretDB 集群，请使用 `mongo_purge` 参数运行 [`mongo.yml`](/docs/ferret/playbook#mongoyml) 剧本的 `mongo_purge` 子任务：

```bash
./mongo.yml -l ferret -e mongo_purge=true -t mongo_purge
```

**重要**：请务必使用 `-l <cluster>` 参数限制执行范围，避免误删其他集群。

此命令将会：
- 停止 FerretDB 服务
- 移除 systemd 服务文件
- 清理配置文件和证书
- 从 Prometheus 监控中注销


----------------

## 连接到 FerretDB

您可以使用 MongoDB 连接串，用任何语言的 MongoDB 驱动访问 FerretDB。以下是使用 [`mongosh`](/docs/ferret/usage#安装客户端工具) 命令行工具的示例：

```bash
mongosh 'mongodb://dbuser_meta:DBUser.Meta@10.10.10.10:27017'
mongosh 'mongodb://test:test@10.10.10.11:27017/test'
```

Pigsty 管理的 PostgreSQL 集群默认使用 `scram-sha-256` 作为默认的认证方式，因此，您必须使用 `PLAIN` 认证方式连接至 FerretDB。参阅 [FerretDB：认证](https://docs.ferretdb.io/security/authentication/) 获取详细信息。

您也可以使用其他 PostgreSQL 用户来访问 FerretDB，只要在连接串中指定即可：

```bash
mongosh 'mongodb://dbuser_dba:DBUser.DBA@10.10.10.10:27017'
```


----------------

## 快速上手

连接到 FerretDB 后，您可以像使用 MongoDB 一样进行操作：

```bash
$ mongosh 'mongodb://dbuser_meta:DBUser.Meta@10.10.10.10:27017'
```

MongoDB 的命令会被翻译为 SQL 命令，在底层的 PostgreSQL 中执行：

```javascript
use test                            // CREATE SCHEMA test;
db.dropDatabase()                   // DROP SCHEMA test;
db.createCollection('posts')        // CREATE TABLE posts(_data JSONB,...)
db.posts.insert({                   // INSERT INTO posts VALUES(...);
    title: 'Post One',
    body: 'Body of post one',
    category: 'News',
    tags: ['news', 'events'],
    user: {name: 'John Doe', status: 'author'},
    date: Date()
})
db.posts.find().limit(2).pretty()   // SELECT * FROM posts LIMIT 2;
db.posts.createIndex({ title: 1 })  // CREATE INDEX ON posts(_data->>'title');
```

如果您不熟悉 MongoDB，这里有一个快速上手教程，同样适用于 FerretDB：[Perform CRUD Operations with MongoDB Shell](https://www.mongodb.com/docs/mongodb-shell/crud/)


----------------

## 压力测试

如果您希望生成一些样例负载，可以使用 `mongosh` 执行以下简易测试脚本：

```bash
cat > benchmark.js <<'EOF'
const coll = "testColl";
const numDocs = 10000;

for (let i = 0; i < numDocs; i++) {  // insert
  db.getCollection(coll).insert({ num: i, name: "MongoDB Benchmark Test" });
}

for (let i = 0; i < numDocs; i++) {  // select
  db.getCollection(coll).find({ num: i });
}

for (let i = 0; i < numDocs; i++) {  // update
  db.getCollection(coll).update({ num: i }, { $set: { name: "Updated" } });
}

for (let i = 0; i < numDocs; i++) {  // delete
  db.getCollection(coll).deleteOne({ num: i });
}
EOF

mongosh 'mongodb://dbuser_meta:DBUser.Meta@10.10.10.10:27017' benchmark.js
```

您可以查阅 FerretDB 支持的 [MongoDB 命令](https://docs.ferretdb.io/reference/supported-commands/)，同时还有一些 [已知的区别](https://docs.ferretdb.io/diff/)。对于基本的使用来说，这些差异通常不是什么大问题。

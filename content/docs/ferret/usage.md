---
title: 使用方法
weight: 4010
description: 安装客户端工具，连接并使用 FerretDB
icon: fa-solid fa-rocket
categories: [参考]
linkTitle: 使用方法
---

本文档介绍如何安装 MongoDB 客户端工具并连接到 FerretDB。


----------------

## 安装客户端工具

您可以使用 MongoDB 的命令行工具 [MongoSH](https://www.mongodb.com/docs/mongodb-shell/) 来访问 FerretDB。

使用 `pig` 命令添加 MongoDB 仓库，然后使用 `yum` 或 `apt` 安装 `mongosh`：

```bash
pig repo add mongo -u         # 添加 MongoDB 官方仓库
yum install mongodb-mongosh   # RHEL/CentOS/Rocky/Alma
apt install mongodb-mongosh   # Debian/Ubuntu
```

安装完成后，您可以使用 `mongosh` 命令连接到 FerretDB。


----------------

## 连接到 FerretDB

您可以使用任何语言的 MongoDB 驱动程序通过 MongoDB 连接字符串访问 FerretDB。以下是使用 `mongosh` CLI 工具的示例：

```bash
$ mongosh 'mongodb://postgres:DBUser.Postgres@10.10.10.10:27017'
Current Mongosh Log ID:	696b5bb93441875f86284d0b
Connecting to:		mongodb://<credentials>@10.10.10.10:27017/?directConnection=true&appName=mongosh+2.6.0
Using MongoDB:		7.0.77
Using Mongosh:		2.6.0

test>
```

### 使用连接字符串

FerretDB 的身份验证完全基于 PostgreSQL。Pigsty 默认使用 `scram-sha-256`，在 FerretDB 2.x 中对应 `SCRAM-SHA-256` 认证。通常客户端会自动协商，你可以直接使用 PostgreSQL 用户名与密码。

```bash
mongosh 'mongodb://postgres:DBUser.Postgres@10.10.10.10:27017'
# 若客户端认证协商失败，可显式指定：
mongosh 'mongodb://postgres:DBUser.Postgres@10.10.10.10:27017/?authMechanism=SCRAM-SHA-256'
```

连接字符串格式：

```bash
mongodb://<username>:<password>@<host>:<port>/<database>[?authMechanism=SCRAM-SHA-256]
```

### 使用不同的用户

您可以使用任何已在 PostgreSQL 中创建的用户连接到 FerretDB：

```bash
# 使用超级管理员用户
mongosh 'mongodb://dbuser_dba:DBUser.DBA@10.10.10.10:27017'

# 使用普通管理员用户
mongosh 'mongodb://dbuser_meta:DBUser.Meta@10.10.10.10:27017'

# 使用普通只读用户
mongosh 'mongodb://dbuser_view:DBUser.Viewer@10.10.10.10:27017'
```


----------------

## 基本操作

连接到 FerretDB 后，您可以像使用 MongoDB 一样进行操作。以下是一些基本操作示例：

### 数据库操作

```js
// 显示所有数据库
show dbs

// 显示所有集合
show collections

// 切换/创建数据库
use mydb

// 删除当前数据库
db.dropDatabase();
```

### 集合操作

```javascript
db.createCollection('users');     // 创建集合
db.users.drop();                  // 删除集合
```

### 文档操作

```javascript
// 插入单个文档
db.users.insertOne({
    name: 'Alice', age: 30, email: 'alice@example.com'
});

// 插入多个文档
db.users.insertMany([
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
]);

// 查询文档
db.users.find();
db.users.find({ age: { $gt: 25 } });
db.users.findOne({ name: 'Alice' });

// 更新文档
db.users.updateOne(
    { name: 'Alice' },
    { $set: { age: 31 } }
);

// 删除文档
db.users.deleteOne({ name: 'Bob' });
db.users.deleteMany({ age: { $lt: 30 } });
```

### 索引操作

```javascript
// 创建索引
db.users.createIndex({ age: -1 });

// 查看索引
db.users.getIndexes();

// 删除索引
db.users.dropIndex('name_1');
```


----------------

## 与 MongoDB 的差异

FerretDB 实现了 MongoDB 的线协议，但底层使用 PostgreSQL 存储数据。这意味着：

- MongoDB 命令会被翻译为 SQL 语句执行
- 大多数基本操作与 MongoDB 兼容
- 某些高级功能可能有差异或不支持

您可以查阅以下资源了解详细信息：

- [FerretDB 支持的命令](https://docs.ferretdb.io/reference/supported-commands/)
- [与 MongoDB 的差异](https://docs.ferretdb.io/diff/)
- [FerretDB 认证机制](https://docs.ferretdb.io/security/authentication/)


----------------

## 程序语言驱动

除了 `mongosh` 命令行工具，您还可以使用各种编程语言的 MongoDB 驱动程序连接到 FerretDB：

### Python

```python
from pymongo import MongoClient

client = MongoClient('mongodb://dbuser_dba:DBUser.DBA@10.10.10.10:27017')
db = client.test
collection = db.users
collection.insert_one({'name': 'Alice', 'age': 30})
```

### Node.js

```javascript
const { MongoClient } = require('mongodb');

const uri = 'mongodb://dbuser_meta:DBUser.Meta@10.10.10.10:27017';
const client = new MongoClient(uri);

async function run() {
    await client.connect();
    const db = client.db('test');
    const collection = db.collection('users');
    await collection.insertOne({ name: 'Alice', age: 30 });
}
```

### Go

```go
import (
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

uri := "mongodb://dbuser_meta:DBUser.Meta@10.10.10.10:27017"
client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
```

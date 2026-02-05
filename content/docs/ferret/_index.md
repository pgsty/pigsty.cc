---
title: 模块：FERRET
weight: 4000
description: 使用 FerretDB 为 PostgreSQL 添加 MongoDB 兼容的协议支持
icon: fas fa-leaf
categories: [参考]
linkTitle: 模块：FERRET
---

**FERRET** 是 Pigsty 中的一个 **可选** 模块，用于部署 [**FerretDB**](https://github.com/FerretDB/FerretDB) —— 
这是一个构建在 PostgreSQL 内核与 [DocumentDB](https://pgext.cloud/e/documentdb) 扩展之上的协议转换中间件。
能够对接使用 MongoDB 驱动的应用程序，并将这些请求转换为对 PostgreSQL 的操作。

Pigsty 是 FerretDB 社区的合作伙伴，我们制作了 [**FerretDB**](https://github.com/FerretDB/FerretDB) 与 [**DocumentDB**](https://github.com/FerretDB/documentdb) (ferretdb 专用分支) 的二进制包，
并提供了开箱即用的配置模板 [`mongo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/mongo.yml)，帮助您轻松部署企业级质量的 FerretDB 集群。

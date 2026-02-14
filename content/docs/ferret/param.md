---
title: 参数列表
weight: 4030
description: 使用 9 个参数自定义 FerretDB 组件
icon: fa-solid fa-sliders
categories: [参考]
linkTitle: 参数列表
---

## 参数概览

**`FERRET`** 参数组用于 FerretDB 部署与配置，包括身份标识、底层 PostgreSQL 连接、监听端口以及 SSL 设置。

| 参数                                            |    类型    |  级别   | 说明                       |
|:----------------------------------------------|:--------:|:-----:|:-------------------------|
| [`mongo_seq`](#mongo_seq)                     |  `int`   |  `I`  | mongo 实例号，必选身份参数         |
| [`mongo_cluster`](#mongo_cluster)             | `string` |  `C`  | mongo 集群名，必选身份参数         |
| [`mongo_pgurl`](#mongo_pgurl)                 | `pgurl`  | `C/I` | FerretDB 底层使用的 PGURL 连接串 |
| [`mongo_ssl_enabled`](#mongo_ssl_enabled)     |  `bool`  |  `C`  | 是否启用 SSL？默认为 `false`     |
| [`mongo_listen`](#mongo_listen)               |   `ip`   |  `C`  | 监听地址，默认留空则监听所有地址         |
| [`mongo_port`](#mongo_port)                   |  `port`  |  `C`  | 服务端口，默认使用 `27017`        |
| [`mongo_ssl_port`](#mongo_ssl_port)           |  `port`  |  `C`  | TLS 监听端口，默认使用 `27018`    |
| [`mongo_exporter_port`](#mongo_exporter_port) |  `port`  |  `C`  | Exporter 端口，默认使用 `9216`  |
| [`mongo_extra_vars`](#mongo_extra_vars)       | `string` |  `C`  | 额外环境变量，默认为空白字符串          |
{.full-width}


----------------

## 默认值

默认参数定义在 [`roles/ferret/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/v4.1.0/roles/ferret/defaults/main.yml) 中：

```yaml
# mongo_cluster:        #CLUSTER  # mongo 集群名称，必选身份参数
# mongo_seq: 0          #INSTANCE # mongo 实例序列号，必选身份参数
# mongo_pgurl: 'postgres:///'     # mongo/ferretdb 底层 postgresql url，必选
mongo_ssl_enabled: false          # mongo/ferretdb ssl 启用，默认为 false
mongo_listen: ''                  # mongo/ferretdb 监听地址，'' 表示所有地址
mongo_port: 27017                 # mongo/ferretdb 监听端口，默认为 27017
mongo_ssl_port: 27018             # mongo/ferretdb tls 监听端口，默认为 27018
mongo_exporter_port: 9216         # mongo/ferretdb exporter 端口，默认为 9216
mongo_extra_vars: ''              # mongo/ferretdb 的额外环境变量
```


----------------

## `mongo_cluster`

参数名称：`mongo_cluster`，类型：`string`，级别：`C`

mongo 集群名称，必选身份参数。

没有默认值，您必须为生产环境显式定义它。

集群名称需要符合正则表达式 `[a-z][a-z0-9-]*`，建议使用描述性名称。


----------------

## `mongo_seq`

参数名称：`mongo_seq`，类型：`int`，级别：`I`

mongo 实例序列号，集群内需要唯一的整数标识。

您必须为每个 mongo 实例显式定义序列号，整数从 0 或 1 开始。


----------------

## `mongo_pgurl`

参数名称：`mongo_pgurl`，类型：`pgurl`，级别：`C/I`

FerretDB 连接的底层 PostgreSQL URL，必选参数。

没有默认值，您必须显式定义它。这是 FerretDB 将用作其后端存储的 PostgreSQL 数据库连接串。

格式：`postgres://username:password@host:port/database`

请注意：
- 用户需要是 PostgreSQL 超级用户
- 目标数据库需要安装 `documentdb` 扩展
- 建议使用专用的 `mongod` 用户


----------------

## `mongo_ssl_enabled`

参数名称：`mongo_ssl_enabled`，类型：`bool`，级别：`C`

是否为 FerretDB 启用 SSL/TLS 加密。

默认值为 `false`。设置为 `true` 以启用 mongo 连接的 SSL/TLS 加密。

启用后，FerretDB 将会：
- 生成并签发 SSL 证书
- 在 [`mongo_ssl_port`](#mongo_ssl_port) 端口上监听加密连接


----------------

## `mongo_listen`

参数名称：`mongo_listen`，类型：`ip`，级别：`C`

mongo 绑定的监听地址。

默认值为空字符串 `''`，这意味着监听所有可用地址（`0.0.0.0`）。您可以指定特定的 IP 地址进行绑定。


----------------

## `mongo_port`

参数名称：`mongo_port`，类型：`port`，级别：`C`

mongo 客户端连接的服务端口。

默认值为 `27017`，这是标准的 MongoDB 端口。如果您需要避免端口冲突或有安全考虑，可以更改此端口。


----------------

## `mongo_ssl_port`

参数名称：`mongo_ssl_port`，类型：`port`，级别：`C`

mongo 加密连接的 TLS 监听端口。

默认值为 `27018`。当通过 [`mongo_ssl_enabled`](#mongo_ssl_enabled) 启用 SSL/TLS 时，FerretDB 将在此端口上接受加密连接。


----------------

## `mongo_exporter_port`

参数名称：`mongo_exporter_port`，类型：`port`，级别：`C`

mongo 指标收集的 Exporter 端口。

默认值为 `9216`。此端口由 FerretDB 内置的指标导出器使用，向 Prometheus 暴露监控指标。


----------------

## `mongo_extra_vars`

参数名称：`mongo_extra_vars`，类型：`string`，级别：`C`

FerretDB 服务器的额外环境变量。

默认值为空字符串 `''`。您可以指定将传递给 FerretDB 进程的额外环境变量，格式为 `KEY=VALUE`，多个变量用空格分隔。

例如：

```yaml
mongo_extra_vars: 'FERRETDB_LOG_LEVEL=debug FERRETDB_TELEMETRY=disable'
```

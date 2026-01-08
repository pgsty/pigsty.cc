---
title: "快速上手 PostgreSQL"
linkTitle: 使用 PG
weight: 265
description: 快速上手 PostgreSQL，使用命令行与图形客户端连接上 PostgreSQL 并开始使用。
icon: fa-solid fa-database
module: [PGSQL]
categories: [教程]
---


[**PostgreSQL**](https://www.postgresql.org/)（简称 PG）是世界上最先进、最流行的开源关系型数据库，你可以用它来存储和检索多模态数据。

本指南面向有基础 Linux 基本命令行操作经验、但对 PostgreSQL 不太熟悉的开发者，带你快速上手 Pigsty 中的 PG。

我们假设您是个人用户，使用默认单机模式进行部署。关于生产环境多节点高可用集群的使用，请参考 [**生产服务接入**](/docs/pgsql/service/)。

--------

## 基本知识

默认 [**单机安装**](/docs/setup/install) 模板下，您将在当前节点上创建一个名为 `pg-meta` 的 PostgreSQL 数据库集群，只有一个主库实例。

PostgreSQL 监听在 `5432` 端口，集群中带有一个预置的数据库 `meta` 可供使用。

您可以在安装完毕后退出当前管理用户 ssh 会话，并重新登陆刷新环境变量后，
通过简单地敲一个 `p` 回车，通过命令行工具 `psql` 访问该数据库集群：

```bash
vagrant@pg-meta-1:~$ p
psql (18.1 (Ubuntu 18.1-1.pgdg24.04+2))
Type "help" for help.

postgres=#
```

您也可以切换为操作系统的 `postgres` 用户，直接执行 `psql` 命令，即可连接到默认的 `postgres` 管理数据库上。



--------

## 连接数据库

想要访问 PostgreSQL 数据库，您需要使用 命令行工具 或者 图形化客户端 工具，填入 PostgreSQL 的 **连接字符串**：

```bash
postgres://username:password@host:port/dbname
```

一些驱动和工具也可能会要求你分别填写这些参数，通常以下五项为必选项：

| 参数         | 说明       | 示例值           | 备注                          |
|------------|----------|---------------|-----------------------------|
| `host`     | 数据库服务器地址 | `10.10.10.10` | 换为你的节点 IP 地址或域名，本机可以省略      |
| `port`     | 端口号      | `5432`        | PG 默认端口，可以省略                |
| `username` | 用户名      | `dbuser_dba`  | Pigsty 默认的数据库管理员            |
| `password` | 密码       | `DBUser.DBA`  | Pigsty 默认的管理员密码，（**请修改密码**） |
| `dbname`   | 数据库名     | `meta`        | 默认模板的数据库名称                  |
{.full-width}

个人使用时可以直接使用 Pigsty 默认的数据库超级用户 `dbuser_dba` 进行连接和管理，数据库管理用户 `dbuser_dba` 拥有数据库的全部权限。
默认情况下，如果您在配置 Pigsty 时指定了 `configure -g` 参数，密码会随机生成，并保存在 `~/pigsty/pigsty.yml` 文件中，可以通过以下命令查看：

```bash
cat ~/pigsty/pigsty.yml | grep pg_admin_password
```

--------

## 默认账号密码

Pigsty 的默认 [**单机模板**](/docs/conf/meta) 默认配置预置了以下数据库用户，可以开箱即用：

| 用户名           | 密码              | 角色    | 用途               |
|---------------|-----------------|-------|------------------|
| `dbuser_dba`  | `DBUser.DBA`    | 超级用户  | 数据库管理（**请修改密码**） |
| `dbuser_meta` | `DBUser.Meta`   | 业务管理员 | 应用读写（**请修改密码**）  |
| `dbuser_view` | `DBUser.Viewer` | 只读用户  | 数据查阅（**请修改密码**）  |
{.full-width}

例如，你可以通过三个不同的连接串，使用三个不同的用户连接到 `pg-meta` 集群的 `meta` 数据库：

```bash
postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta
postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
postgres://dbuser_view:DBUser.View@10.10.10.10:5432/meta
```

请注意，这些默认密码会在 `configure -g` 时自动被替换为随机强密码，请注意将 IP 地址和密码替换为实际值。


--------

## 使用命令行工具

`psql` 是 PostgreSQL 官方命令行客户端工具，功能强大，是 DBA 和开发者的首选工具。

在部署了 Pigsty 的服务器上，你可以直接使用 `psql` 连接本地数据库：

```bash
# 最简单的方式：使用 postgres 系统用户本地连接（无需密码）
sudo -u postgres psql

# 使用连接字符串（推荐，通用性最好）
psql 'postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta'

# 使用参数形式
psql -h 10.10.10.10 -p 5432 -U dbuser_dba -d meta

# 使用环境变量避免密码出现在命令行
export PGPASSWORD='DBUser.DBA'
psql -h 10.10.10.10 -p 5432 -U dbuser_dba -d meta
```

成功连接后，你会看到类似这样的提示符：

```bash
psql (18.1)
Type "help" for help.

meta=#
```

**常用 psql 命令**

进入 psql 后，可以执行 SQL 语句，也可以使用以 `\` 开头的元命令：

| 命令         | 说明        | 命令          | 说明          |
|------------|-----------|-------------|-------------|
| `Ctrl+C`   | 中断查询      | `Ctrl+D`    | 退出 psql     |
| `\?`       | 显示所有元命令帮助 | `\h`        | 显示 SQL 命令帮助 |
| `\l`       | 列出所有数据库   | `\c dbname` | 切换到指定数据库    |
| `\d table` | 查看表结构     | `\d+ table` | 查看表的详细信息    |
| `\du`      | 列出所有用户/角色 | `\dx`       | 列出已安装的扩展    |
| `\dn`      | 列出所有的模式   | `\dt`       | 列出所有表       |

**执行 SQL**

在 `psql` 中直接输入 SQL 语句，以分号 `;` 结尾：

```sql
-- 查看 PostgreSQL 版本
SELECT version();

-- 查看当前时间
SELECT now();

-- 创建一张测试表
CREATE TABLE test (id SERIAL PRIMARY KEY, name TEXT, created_at TIMESTAMPTZ DEFAULT now());

-- 插入数据
INSERT INTO test (name) VALUES ('hello'), ('world');

-- 查询数据
SELECT * FROM test;

-- 删除测试表
DROP TABLE test;
```


--------

## 使用图形客户端

如果你更喜欢图形界面，以下是几款流行的 PostgreSQL 客户端：

**Grafana**

Pigsty [**`INFRA`**](/docs/infra) 模块中自带了 [**Grafana**](/docs/infra)，并预先配置好了 PostgreSQL 数据源（Meta）。
您可以直接通过 [**浏览器图形界面**](/docs/setup/webui)，从 Grafana Explore 面板中使用 SQL 查询数据库，无需额外安装客户端工具。

Grafana 默认的用户名是 **`admin`**，密码可以在 [**配置清单**](/docs/concept/iac/inventory) 中的 [**`grafana_admin_password`**](/docs/infra/param#grafana_admin_password) 字段找到（默认 `pigsty`）。

**DataGrip**

[**DataGrip**](https://www.jetbrains.com/datagrip/) 是 JetBrains 出品的专业数据库 IDE，功能强大。
Intellij IDEA 自带的 Database Console 也可以使用类似的方式连接 PostgreSQL。

**DBeaver**

[**DBeaver**](https://dbeaver.io/) 是免费开源的通用数据库工具，支持几乎所有主流数据库。这是一个多平台可用的桌面客户端。

**pgAdmin**

[**pgAdmin**](https://www.pgadmin.org/) 是 PGDG 官方提供的 PostgreSQL 专用 GUI 工具，可以通过浏览器使用，也有桌面客户端版本。

Pigsty 在 [**软件模板：pgAdmin**](/docs/app/pgadmin) 中提供了使用 Docker 一键部署 pgAdmin 服务的配置模板。


--------

## 查阅监控大盘

Pigsty 提供了许多 PostgreSQL [**监控面板**](/docs/pgsql/monitor/dashboard)，覆盖从集群总览到单表分析的各个层面：

推荐先从 **PGSQL Overview** 开始浏览，面板中的许多元素都可以点击，您可以逐层深入，查阅每个集群、实例、数据库甚至是表，索引，函数等数据库内对象的详情信息。



--------

## 尝试扩展插件

PostgreSQL 最强大的特性之一是其 [**扩展生态系统**](/docs/pgsql/ext)。扩展可以为数据库添加新的数据类型、函数、索引方法等能力。

Pigsty 提供了 PG 生态中独一无二的 [**440+ 扩展**](https://pgext.cloud/zh/list)，涵盖时序、地理、向量、全文检索等 16 大类别，一键安装即可使用。
你可以先从三个最强大常用的功能扩展开始，这三个扩展是 Pigsty [**默认配置模板**](/docs/conf/meta) 中自动安装的，你还可以继续 [**加装**](/docs/pgsql/ext/install) 更多需要的扩展。

- [**`postgis`**](https://pgext.cloud/e/postgis) ：地理信息系统，处理地图、位置数据
- [**`pgvector`**](https://pgext.cloud/e/vector) ： 向量数据库，支持 AI 嵌入向量相似度搜索
- [**`timescaledb`**](https://pgext.cloud/e/timescaledb) ：时序数据库，高效存储和查询时间序列数据

```sql
\dx                            -- psql 元命令，列出已经安装的扩展
TABLE pg_available_extensions; -- 查询已经安装，可以启用的扩展
CREATE EXTENSION postgis;      --  启用 postgis 扩展
```



--------

## 下一步

恭喜你完成了 PostgreSQL 的基础上手！下一步，你可以开始对你的数据库进行一些 [**配置与定制**](/docs/setup/config)。

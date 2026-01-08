---
title: ByteBase：模式迁移
weight: 625
date: 2022-05-20
description: 使用Docker拉起Bytebase，对PG的模式进行版本化管理
module: [SOFTWARE]
categories: [任务]
---


## ByteBase

[ByteBase](https://bytebase.com/)是一个进行数据库模式变更的工具，以下命令将在元节点 8887 端口启动一个ByteBase。

```
mkdir -p /data/bytebase/data;
docker run --init --name bytebase --restart always --detach --publish 8887:8887 --volume /data/bytebase/data:/var/opt/bytebase \
    bytebase/bytebase:1.0.4 --data /var/opt/bytebase --host http://ddl.pigsty --port 8887
```

访问 http://10.10.10.10:8887/ 或 [http://ddl.pigsty](http://ddl.pigsty/) 即可使用 ByteBase，您需要依次创建项目、环境、实例、数据库，即可开始进行模式变更。 公开Demo地址： http://ddl.pigsty.cc





公开Demo地址：[http://ddl.pigsty.cc](http://ddl.pigsty.cc)

默认用户名与密码： `admin` / `pigsty` 

![](/img/docs/app/bytebase.jpeg)


## Bytebase概览

Schema Migrator for PostgreSQL

```bash
cd app/bytebase; make up
```

Visit [http://ddl.pigsty](http://ddl.pigsty) or http://10.10.10.10:8887


```bash
make up         # pull up bytebase with docker-compose in minimal mode
make run        # launch bytebase with docker , local data dir and external PostgreSQL
make view       # print bytebase access point
make log        # tail -f bytebase logs
make info       # introspect bytebase with jq
make stop       # stop bytebase container
make clean      # remove bytebase container
make pull       # pull latest bytebase image
make rmi        # remove bytebase image
make save       # save bytebase image to /tmp/bytebase.tgz
make load       # load bytebase image from /tmp
```



## 使用外部的PostgreSQL

Bytebase use its internal PostgreSQL database by default, You can use external PostgreSQL for higher durability.

```yaml
# postgres://dbuser_bytebase:DBUser.Bytebase@10.10.10.10:5432/bytebase
db:   { name: bytebase, owner: dbuser_bytebase, comment: bytebase primary database }
user: { name: dbuser_bytebase , password: DBUser.Bytebase, roles: [ dbrole_admin ] }
```

if you wish to user an external PostgreSQL, drop monitor extensions and views & pg_repack

```bash
DROP SCHEMA monitor CASCADE;
DROP EXTENSION pg_repack;
```

After bytebase initialized, you can create them back with `/pg/tmp/pg-init-template.sql`

```bash
psql bytebase < /pg/tmp/pg-init-template.sql
```
---
title: PGWeb：网页客户端
weight: 635
date: 2022-03-18
description: 使用Docker拉起PGWEB，以便从浏览器进行小批量在线数据查询
module: [SOFTWARE]
categories: [参考]
---

## PGWeb客户端工具

[PGWeb](https://github.com/sosedoff/pgweb)是一款基于浏览器的PG客户端工具，使用以下命令，在元节点上拉起PGWEB服务，默认为主机`8886`端口。可使用域名： http://cli.pigsty 访问，公开Demo：http://cli.pigsty.cc。

```bash
# docker stop pgweb; docker rm pgweb
docker run --init --name pgweb --restart always --detach --publish 8886:8081 sosedoff/pgweb
```

用户需要自行填写数据库连接串，例如默认CMDB的连接串：

`postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta?sslmode=disable`



公开Demo地址：[http://cli.pigsty.cc](http://cli.pigsty.cc)

![](/img/docs/app/pgweb.jpeg)


使用Docker Compose拉起PGWEB容器：

```bash
cd ~/pigsty/app/pgweb ; docker-compose up -d
```

接下来，访问您本机的 8886 端口，即可看到 PGWEB 的UI界面： http://10.10.10.10:8886
 
您可以尝试使用下面的URL连接串，通过 PGWEB 连接至数据库实例并进行探索。

```bash
postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta?sslmode=disable
postgres://test:test@10.10.10.11:5432/test?sslmode=disable
```

## 快捷方式

```bash
make up         # pull up pgweb with docker-compose
make run        # launch pgweb with docker
make view       # print pgweb access point
make log        # tail -f pgweb logs
make info       # introspect pgweb with jq
make stop       # stop pgweb container
make clean      # remove pgweb container
make pull       # pull latest pgweb image
make rmi        # remove pgweb image
make save       # save pgweb image to /tmp/pgweb.tgz
make load       # load pgweb image from /tmp
```

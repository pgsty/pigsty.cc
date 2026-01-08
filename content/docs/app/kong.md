---
title: Kong：API 网关
weight: 610
date: 2022-05-21
description: 拉起基于 Nginx 与 OpenResty 的强力开源 API 网关，并使用 PostgreSQL 与 Redis 作为其后端状态存储
module: [SOFTWARE]
categories: [参考]
---


![](/img/docs/app/kong.jpeg)

## TL;DR

```bash
cd app/kong ; docker-compose up -d
```

```bash
make up         # pull up kong with docker-compose
make ui         # run swagger ui container
make log        # tail -f kong logs
make info       # introspect kong with jq
make stop       # stop kong container
make clean      # remove kong container
make rmui       # remove swagger ui container
make pull       # pull latest kong image
make rmi        # remove kong image
make save       # save kong image to /tmp/kong.tgz
make load       # load kong image from /tmp
```


## Scripts

* Default Port: 8000
* Default SSL Port: 8443
* Default Admin Port: 8001
* Default Postgres Database: `postgres://dbuser_kong:DBUser.Kong@10.10.10.10:5432/kong`

```yaml
# postgres://dbuser_kong:DBUser.Kong@10.10.10.10:5432/kong
- { name: kong, owner: dbuser_kong, revokeconn: true , comment: kong the api gateway database }
- { name: dbuser_kong, password: DBUser.Kong , pgbouncer: true , roles: [ dbrole_admin ] }
```

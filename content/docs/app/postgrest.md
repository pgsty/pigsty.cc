---
title: PostgREST：自动 API
weight: 640
date: 2022-05-21
description: 使用Docker拉起PostgREST，自动根据PostgreSQL模式生成后端REST API
module: [SOFTWARE]
categories: [参考]
---



## PostgREST

[PostgREST](https://postgrest.org/en/stable/index.html)是一个自动根据 PostgreSQL 数据库模式生成 REST API的二进制组件。

例如，以下命令将使用docker拉起 postgrest （本地 8884 端口，使用默认管理员用户，暴露Pigsty CMDB模式）

```bash
docker run --init --name postgrest --restart always --detach --publish 8884:8081 postgrest/postgrest
```

访问 [http://10.10.10.10:8884](http://10.10.10.10:8884/) 会展示所有自动生成API的定义，并自动使用 [Swagger Editor](http://home.pigsty.cc:8883) 暴露API文档。

如果您想要进行增删改查，设计更精细的权限控制，请参考 [Tutorial 1 - The Golden Key](https://postgrest.org/en/stable/tutorials/tut1.html)，生成一个签名JWT。



![](/img/docs/app/postgrest.jpeg)


This is an example of creating pigsty cmdb API with PostgREST

```bash
cd ~/pigsty/app/postgrest ; docker-compose up -d
```

http://10.10.10.10:8884 is the default endpoint for PostgREST

http://10.10.10.10:8883 is the default api docs for PostgREST


```bash
make up         # pull up postgrest with docker-compose
make run        # launch postgrest with docker
make ui         # run swagger ui container
make view       # print postgrest access point
make log        # tail -f postgrest logs
make info       # introspect postgrest with jq
make stop       # stop postgrest container
make clean      # remove postgrest container
make rmui       # remove swagger ui container
make pull       # pull latest postgrest image
make rmi        # remove postgrest image
make save       # save postgrest image to /tmp/postgrest.tgz
make load       # load postgrest image from /tmp
```


## Swagger UI

Launch a swagger OpenAPI UI and visualize PostgREST API on 8883 with:

```bash
docker run --init --name postgrest --name swagger -p 8883:8080 -e API_URL=http://10.10.10.10:8884 swaggerapi/swagger-ui
# docker run -d -e API_URL=http://10.10.10.10:8884 -p 8883:8080 swaggerapi/swagger-editor # swagger editor
```

Check [http://10.10.10.10:8883/](http://10.10.10.10:8883/)

---
title: Wiki.js：维基百科站
weight: 590
date: 2022-05-25
description: 如何使用 Wiki.js 搭建你自己的开源维基百科，并使用 Pigsty 管理的 PG 作为持久数据存储
module: [SOFTWARE]
categories: [参考]
---

公开 Demo 地址：[http://wiki.pigsty.cc](http://wiki.pigsty.cc)

![Wiki.js](/img/docs/app/wiki.jpg)

当前 Compose 跟随 Wiki.js 的 `2` 主版本标签（`requarks/wiki:2`，2026-11-06 解析为 2.5.317）；稳定 2.x 发布维护在 [`requarks/wiki-v2`](https://github.com/requarks/wiki-v2/releases)。Wiki.js 3.0 已于 2026 年 11 月正式发布（`3` 标签），这是一次大版本重写，有独立的 [环境要求](https://docs.js.wiki/setup/requirements) 与 [升级流程](https://docs.js.wiki/setup/upgrade)，不要通过修改镜像标签直接把现有 2.x 部署切到 3.x。生产升级前应记录并核对实际镜像版本。


## 太长;不看

```bash
cd ~/pigsty/app/wiki && docker compose up -d
```

## 准备数据库

```yaml
# postgres://dbuser_wiki:DBUser.Wiki@10.10.10.10:5432/wiki
- { name: wiki, owner: dbuser_wiki, revokeconn: true , comment: wiki the api gateway database }
- { name: dbuser_wiki, password: DBUser.Wiki , pgbouncer: true , roles: [ dbrole_admin ] }
```

```bash
bin/pgsql-user pg-meta dbuser_wiki
bin/pgsql-db   pg-meta wiki
```

## 容器配置

```yaml
services:
  wiki:
    container_name: wiki
    image: requarks/wiki:2
    environment:
      DB_TYPE: postgres
      DB_HOST: 10.10.10.10
      DB_PORT: 5432
      DB_USER: dbuser_wiki
      DB_PASS: DBUser.Wiki
      DB_NAME: wiki
    restart: unless-stopped
    ports:
      - "9002:3000"
```

## Access

* Default Port for wiki: 9002

```yaml
infra_portal:
  wiki: { domain: wiki.pigsty.cc, endpoint: "127.0.0.1:9002" }
```

```bash
./infra.yml -t nginx_config,nginx_reload -l infra
```

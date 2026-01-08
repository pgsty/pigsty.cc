---
title: Gitea：自建简易代码托管平台
linkTitle: Gitea：简易代码托管
weight: 585
date: 2022-05-25
description: 使用Docker拉起Gitea，并使用Pigsty的PG作为外部的元数据库
module: [SOFTWARE]
categories: [参考]
---

公开Demo地址：[http://git.pigsty.cc](http://git.pigsty.cc)

![](/img/docs/app/gitea.jpeg)


## 太长；不看

```bash
cd ~/pigsty/app/gitea; make up
```

在本例中，Gitea 默认使用 8889 端口，您可以访问以下位置：

[http://git.pigsty](http://git.pigsty) 或 http://10.10.10.10:8889

```bash
make up      # pull up gitea with docker-compose in minimal mode
make run     # launch gitea with docker , local data dir and external PostgreSQL
make view    # print gitea access point
make log     # tail -f gitea logs
make info    # introspect gitea with jq
make stop    # stop gitea container
make clean   # remove gitea container
make pull    # pull latest gitea image
make rmi     # remove gitea image
make save    # save gitea image to /tmp/gitea.tgz
make load    # load gitea image from /tmp
```

## 使用外部的PostgreSQL

Pigsty默认使用容器内的 Sqlite 作为元数据存储，您可以让 Gitea 通过连接串环境变量使用外部的PostgreSQL

```yaml
# postgres://dbuser_gitea:DBUser.gitea@10.10.10.10:5432/gitea
db:   { name: gitea, owner: dbuser_gitea, comment: gitea primary database }
user: { name: dbuser_gitea , password: DBUser.gitea, roles: [ dbrole_admin ] }
```


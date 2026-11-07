---
title: app/discourse
weight: 905
description: 使用 Pigsty 托管的 PostgreSQL 部署 Discourse 社区论坛，应用容器内嵌 Redis
icon: fa-solid fa-comment-dots
categories: [参考]
---

`app/discourse` 配置模板提供 Discourse 社区论坛的单节点参考配置：PostgreSQL 由 Pigsty 托管，Redis 内嵌在应用容器中，经 Pigsty Nginx 与 Unix Socket 对外提供服务。

该模板在 v4.5.0 发布后加入，需配套同版本的 `app/discourse/` 与 `files/discourse.sql`，不能只复制下方 YAML。

更多细节，请参考 **[Discourse 部署教程](/docs/app/discourse/)**


--------

## 配置概览

- 配置名称： `app/discourse`
- 节点数量： 单节点
- 配置说明：使用 Pigsty 托管的 PostgreSQL 部署 Discourse 论坛，Redis 内嵌在应用容器中
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`（上游 Launcher 将 ARM64 支持描述为实验性）
- 相关配置：[`app/odoo`](/docs/conf/odoo/)、[`app/mattermost`](/docs/conf/mattermost/)

启用方式：

```bash
./configure -c app/discourse [-i <primary_ip>]
vi pigsty.yml              # 修改密码、域名与 SMTP
./deploy.yml
./docker.yml
./app.yml -l discourse
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/discourse.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/discourse.yml)

{{< include file="yaml/app/discourse.yml" code=true lang="yaml" >}}


--------

## 配置解读

此单节点模板使用官方经典 Launcher 在本地构建 Discourse 镜像，由 Docker Compose 运行，PostgreSQL 由 Pigsty 管理。

**关键特性**：

- `apps.discourse.dest` 为 `/data/app/discourse`，管理文件与 `shared/` 下的持久化数据位于同一目录
- `DISCOURSE_DOCKER_REF` 固定 Launcher 提交，`DISCOURSE_VERSION` 默认跟随官方 `tests-passed` 通道
- 独立的 `pg-discourse` 集群使用 PostgreSQL 18，安装 `pgvector`；`discourse` 数据库启用 `hstore`、`pg_trgm`、`unaccent`、`vector` 扩展，并应用 `discourse.sql` 基线
- `discourse` 用户撤销 `dbrole_admin`，用户与数据库均不接入 PgBouncer
- HBA 只允许 `discourse` 用户从 `172.16.0.0/12` Docker 网段访问 `discourse` 数据库
- Nginx 门户 `ask.pigsty` 转发到 `unix:/data/app/discourse/shared/nginx.http.sock`，启用 WebSocket，并设置 `client_max_body_size 10m`
- 内嵌 Redis 的内存上限为 `REDIS_MAX_MEMORY: 512mb`
- 每天凌晨 1 点执行一次全量备份

**访问方式**：

```bash
http://ask.pigsty
```

模板通过 `node_etc_hosts` 在本机将 `ask.pigsty` 解析到管理节点；其他客户端需自行将该域名解析到 Nginx 主机。

**注意事项**：

- 部署前修改 `PG_PASSWORD` 与 `pg_users` 中的密码（两处保持一致），以及管理员邮箱与 SMTP 参数；示例 SMTP 主机会使构建失败
- 公开部署使用真实域名与可信证书，并设置 `DISCOURSE_FORCE_HTTPS: true`
- Discourse 使用 advisory lock，需直连 PostgreSQL，不能使用 PgBouncer 事务池；高可用部署改用只指向主库的直连入口
- 已有 Pigsty 环境只合并应用、用户、数据库与门户定义，不要重新运行 `configure` 或重复初始化集群
- Redis 持久化需要 `vm.overcommit_memory=1`，而 `node_tune: oltp` 对应的 Tuned 配置为 `0`，模板尚未处理，需自行配置持久化覆盖

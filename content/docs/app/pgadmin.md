---
title: pgAdmin：PostgreSQL 图形管理工具
weight: 630
date: 2022-04-25
lastmod: 2026-08-14
description: 使用 Pigsty 的 Docker Compose 应用模板部署 pgAdmin4，并安全加载 PostgreSQL 服务器清单。
module: [SOFTWARE]
categories: [任务]
---

[pgAdmin](https://www.pgadmin.org/) 是 PostgreSQL 的开源图形管理与开发工具。Pigsty v4.5.0 提供 `app/pgadmin` Docker Compose 模板，并可从当前清单生成服务器列表与密码文件。

> [!WARNING] 先修改默认凭据
> 模板默认登录名为 `admin@pigsty.cc`、密码为 `pigsty`，只适合本地演示。部署到共享网络或公网前，必须修改登录凭据、限制端口访问并配置 HTTPS。

--------

## 快速开始

`conf/meta.yml` 默认在 `app` 组声明 pgAdmin。使用明确限定的目标执行部署：

```bash
./docker.yml -l app
./app.yml -l app -e app=pgadmin
```

默认端口为 `8885`，可从 `http://<app_ip>:8885` 访问。只有在 `infra_portal`、Nginx 与 DNS 已配置时，`http://adm.pigsty` 才是有效入口。

容器首次启动可能需要几十秒，可在应用节点检查：

```bash
cd /opt/pgadmin
make info
make log
```

--------

## 应用配置

推荐在 `pigsty.yml` 的 `app` 组通过 `apps.pgadmin.conf` 覆盖 `.env`：

```yaml
all:
  children:
    app:
      hosts: { 10.10.10.10: {} }
      vars:
        docker_enabled: true
        app: pgadmin
        apps:
          pgadmin:
            conf:
              PGADMIN_DEFAULT_EMAIL: dba@example.com
              PGADMIN_DEFAULT_PASSWORD: <strong-random-password>
              PGADMIN_LISTEN_ADDRESS: 0.0.0.0
              PGADMIN_PORT: 8885
              PGADMIN_SERVER_JSON_FILE: /pgadmin4/servers.json
              PGADMIN_REPLACE_SERVERS_ON_STARTUP: true
```

`app.yml` 会把模板复制到 `/opt/pgadmin` 并将覆盖项写入 `/opt/pgadmin/.env`。该文件包含登录密码，权限应保持为 `0600`。

当前模板使用未固定标签的 `dpage/pgadmin4` 镜像。生产环境应在 `docker-compose.yml` 中固定经过验证的版本或镜像摘要，并把镜像升级当作独立变更验证。

--------

## 加载服务器列表

`env_pgadmin` 根据清单生成：

- `/infra/pgadmin/servers.json`：PostgreSQL 实例列表
- `/infra/pgadmin/pgpass`：数据库管理员密码文件

默认 `conf/meta.yml` 中 `infra` 与 `app` 组指向同一台主机，因此 pgAdmin 可以直接只读挂载这两个文件。如果 pgAdmin 与 Infra 分离部署，应用节点不会自动拥有 `/infra/pgadmin/`；必须另行安全分发等价文件或自定义挂载，不能假设跨主机共享本地路径。

在默认同机拓扑中，可先重新生成列表，再让已启动的容器导入列表与密码：

```bash
./infra.yml -l infra -t env_pgadmin

./app.yml -l app -e app=pgadmin -t app_launch -e app_args=reload
```

`pgpass` 包含 `pg_admin_username` 的数据库凭据。请限制文件、备份和应用主机的访问范围；若不希望 pgAdmin 持有 DBA 凭据，应自行生成最小权限的连接定义。

--------

## 域名与 HTTPS

在 [`infra_portal`](/docs/infra/param/#infra_portal) 中添加入口：

```yaml
all:
  vars:
    infra_portal:
      pgadmin:
        domain: adm.pigsty
        endpoint: "10.10.10.10:8885"
```

在明确限定的 Infra 组上更新 Nginx：

```bash
./infra.yml -l infra -t nginx
```

公网真实域名还需 DNS 指向服务器，并在 portal 条目中设置 `certbot`：

```yaml
infra_portal:
  pgadmin:
    domain: adm.example.com
    endpoint: "10.10.10.10:8885"
    certbot: adm.example.com
```

```bash
./infra.yml -l infra -t nginx_certbot,nginx_reload -e certbot_sign=true
```

证书前置条件与续期方式参见 [CA 与证书](/docs/infra/admin/cert/)。不要把直接暴露的 `8885` 端口视为 HTTPS 入口。

--------

## 状态与管理

在 `/opt/pgadmin` 中可使用：

```bash
make up       # docker compose up -d
make view     # 显示访问地址
make log      # 跟随容器日志
make info     # docker inspect
make conf     # 重新导入服务器列表与 pgpass
make stop     # 停止容器
make restart  # 重启容器
```

Compose 模板没有为 `/var/lib/pgadmin` 配置持久卷。服务器清单可从 Pigsty 文件重新导入，但在 pgAdmin UI 中新增的偏好、用户与其他内部状态可能随容器重建而丢失；如需保留，应在变更模板后为该目录配置受保护的持久卷并纳入备份。

![pgAdmin](/img/docs/app/pgadmin.jpeg)

--------

## 安全检查

- 修改默认 pgAdmin 登录名与密码，不在脚本、截图或工单中传播真实凭据。
- 默认端口映射会监听主机网络；用防火墙限制来源，公网入口使用 Nginx 与有效 HTTPS 证书。
- 保护 `/infra/pgadmin/pgpass` 与 `/opt/pgadmin/.env`，优先使用最小权限数据库角色。
- 固定并验证容器镜像版本，备份任何新增的 pgAdmin 持久状态。
- pgAdmin 能执行高权限 SQL；删除数据库、表或数据前仍需独立确认目标与近期备份。

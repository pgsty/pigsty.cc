---
title: pgAdmin：PostgreSQL 图形管理工具
weight: 630
date: 2022-04-25
lastmod: 2026-10-13
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
              PGPASS_FILE: /pgadmin4/pgpass
              PGADMIN_REPLACE_SERVERS_ON_STARTUP: 'False'
```

`app.yml` 会把模板复制到 `/opt/pgadmin` 并将覆盖项写入 `/opt/pgadmin/.env`。该文件包含登录密码，权限应保持为 `0600`。

`PGADMIN_DEFAULT_EMAIL` 与 `PGADMIN_DEFAULT_PASSWORD` 只初始化新用户，不会重置持久卷中已有账号的密码。`PGADMIN_SERVER_JSON_FILE` 与 `PGPASS_FILE` 都是容器内绝对路径，对应只读挂载会随参数调整。

当前模板使用未固定标签的 `dpage/pgadmin4` 镜像。生产环境应在 `docker-compose.yml` 中固定经过验证的版本或镜像摘要，并把镜像升级当作独立变更验证。

--------

## 加载服务器列表

`env_pgadmin` 根据清单生成：

- `/infra/pgadmin/servers.json`：PostgreSQL 实例列表
- `/infra/pgadmin/pgpass`：数据库管理员密码文件

默认 `conf/meta.yml` 中 `infra` 与 `app` 组指向同一台主机，因此 pgAdmin 可以直接只读挂载这两个文件。如果 pgAdmin 与 Infra 分离部署，应用节点不会自动拥有 `/infra/pgadmin/`；必须另行安全分发等价文件或自定义挂载，不能假设跨主机共享本地路径。

原生密码加载器仅在首次初始化时复制 `.pgpass`。在默认同机拓扑中，轮换数据库凭据后，重新生成 Infra 文件并刷新密码文件：

```bash
./infra.yml -l infra -t env_pgadmin

./app.yml -l app -e app=pgadmin -t app_launch -e app_args=pass
```

清单按每个 PostgreSQL 实例的主机、端口与管理员配置生成凭据，并处理 libpq 所需的冒号、反斜杠转义。服务器定义使用 `PassFile: "/.pgpass"`；升级旧部署时应先重新运行 `env_pgadmin`，避免继续使用旧模板生成的路径与凭据。

`make up`、`make start` 与 `make restart` 会刷新 `.pgpass`，直接使用 `docker compose` 启动时需另行执行 `make pass`。这些目标需要 Docker 主机安装 `jq`，并读取当前宿主机文件，以处理 Ansible 原子替换后旧单文件挂载仍指向旧内容的情况。

首次初始化会导入服务器列表。日常启动默认 `PGADMIN_REPLACE_SERVERS_ON_STARTUP=False`，保留用户在界面中添加的服务器。启动完成后，`make list` 可再次导入定义，`make reload` 会同时导入列表与刷新密码；重复追加可能产生重复条目。

只有明确需要替换该 pgAdmin 用户的全部服务器定义时，才将 `apps.pgadmin.conf.PGADMIN_REPLACE_SERVERS_ON_STARTUP` 设为带引号的字符串 `'True'` 并重建容器。上游仅接受大小写精确的 `True`；YAML 布尔值 `true` 会输出为小写，不能启用替换。

`pgpass` 包含各实例的数据库管理员凭据。请限制文件、备份和应用主机的访问范围；若不希望 pgAdmin 持有 DBA 凭据，应自行生成最小权限的连接定义。

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
make pass     # 只刷新密码，不修改服务器列表
make stop     # 停止容器
make restart  # 重启容器
```

Compose 使用 `pgadmin-data` 命名卷持久化 `/var/lib/pgadmin`，保留配置数据库、用户文件与界面设置。升级旧的无卷部署前，先备份原容器中的该目录，再将所需状态恢复到新卷；直接挂入空卷不会自动保留旧容器状态。常规备份也应覆盖该卷。

![pgAdmin](/img/docs/app/pgadmin.jpeg)

--------

## 安全检查

- 修改默认 pgAdmin 登录名与密码，不在脚本、截图或工单中传播真实凭据。
- 默认端口映射会监听主机网络；用防火墙限制来源，公网入口使用 Nginx 与有效 HTTPS 证书。
- 保护 `/infra/pgadmin/pgpass` 与 `/opt/pgadmin/.env`，优先使用最小权限数据库角色。
- 固定并验证容器镜像版本，备份任何新增的 pgAdmin 持久状态。
- pgAdmin 能执行高权限 SQL；删除数据库、表或数据前仍需独立确认目标与近期备份。

---
title: JumpServer：开源堡垒机
weight: 618
description: 使用 Pigsty 自建 JumpServer 社区版，并将 PostgreSQL 后端数据库、备份、入口与运维纳入 Pigsty 管理。
module: [SOFTWARE]
categories: [参考]
---

[**JumpServer**](https://www.jumpserver.com/) 是开源 PAM / 堡垒机系统，用于集中管理 SSH、RDP、数据库与 Web 资产访问。
Pigsty 的 `app/jumpserver` 模板使用 Docker Compose 运行 JumpServer 社区版应用层，并使用 Pigsty 托管的 PostgreSQL 作为持久后端数据库。

当前模板基于 JumpServer `v4.10.16-ce`，保留社区版 `core`、`celery`、`koko`、`lion`、`chen`、`web` 与本地 Redis，移除上游安装器中的内置 PostgreSQL 服务。
PostgreSQL、备份、监控、Nginx 入口和数据库生命周期由 Pigsty 管理。

------

## 快速开始

在运行 [兼容操作系统](/docs/deploy/prepare/) 的全新 Linux x86 / ARM 服务器上执行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/jumpserver
vi pigsty.yml                 # 必改：密码、密钥、域名、IP

./deploy.yml                  # 安装 Pigsty、Infra、Etcd、PostgreSQL
./docker.yml                  # 安装 Docker 和 Compose
./app.yml                     # 安装 JumpServer
```

容器启动后执行一次数据库迁移：

```bash
cd /opt/jumpserver
make migrate
make health
```

默认入口：

```text
http://jump.pigsty
http://10.10.10.10:8080
ssh -p 2222 admin@10.10.10.10
```

默认 Web 登录：

```text
admin / ChangeMe
```

首次登录后应立即修改管理员密码。

------

## 部署前检查

- [ ] 准备一台新 Linux 服务器，建议至少 `2C4G`，生产环境建议更大内存并配置 Swap。
- [ ] 确认服务器 IP、DNS、NTP、SSH 与 sudo 可用。
- [ ] 确认能访问 Docker Hub，或已经配置 `docker_registry_mirrors` / `proxy_env`。
- [ ] 执行 `./configure -c app/jumpserver` 后，修改 `pigsty.yml` 中的默认密码、`SECRET_KEY`、`BOOTSTRAP_TOKEN` 与 `DOMAINS`。
- [ ] 确认 `DOMAINS` 包含浏览器实际访问的主机名或 IP，例如 `10.10.10.10:8080`。
- [ ] 确认 PostgreSQL 备份任务正常，部署后检查 `pig pb info` 或 `pgbackrest info`。

------

## 配置模板

[`conf/app/jumpserver.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/jumpserver.yml) 定义了单节点 JumpServer 自建模板。默认拓扑包括：

- `jumpserver`：JumpServer 应用容器与本地 Redis 所在节点。
- `pg-jumpserver`：Pigsty 托管的 PostgreSQL 数据库集群。
- `infra`：Nginx 入口、Grafana、VictoriaMetrics 等基础设施。
- `etcd`：Patroni 所需的分布式配置存储。

`app.yml` 会将 `app/jumpserver` 复制到 `/opt/jumpserver`，使用 `apps.jumpserver.conf` 覆盖 `/opt/jumpserver/.env`，然后执行 `docker compose up -d`。

核心应用服务：

- `jms_core`：Django API / Web 后端，监听容器内 `8080`。
- `jms_celery`：异步任务、定时任务与后台队列。
- `jms_web`：Nginx Web 入口，默认映射宿主机 `8080`。
- `jms_koko`：SSH / SFTP 终端入口，默认映射宿主机 `2222`。
- `jms_lion`：Web Terminal 组件。
- `jms_chen`：WebSocket / 数据库终端支持组件。
- `jms_redis`：本地 Redis，用于缓存、队列与 Channels 后端。

------

## 关键参数

常见参数如下：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `JUMPSERVER_VERSION` | `v4.10.16-ce` | JumpServer 社区版镜像版本 |
| `JUMPSERVER_DATA` | `/data/jumpserver` | 应用持久化目录 |
| `DOMAINS` | `10.10.10.10:8080,10.10.10.10,jump.pigsty` | 允许登录的可信访问域名 / IP |
| `SECRET_KEY` | 示例值 | 加密密钥，生产必须替换且长期保存 |
| `BOOTSTRAP_TOKEN` | 示例值 | 组件注册令牌，生产必须替换且长期保存 |
| `DB_HOST` / `DB_PORT` | `10.10.10.10` / `5432` | Pigsty PostgreSQL 入口 |
| `DB_USER` / `DB_NAME` | `jumpserver` / `jumpserver` | 业务用户与业务数据库 |
| `DB_PASSWORD` | `DBUser.JumpServer` | 业务用户密码，生产必须替换 |
| `DOCKER_SUBNET` | `192.168.250.0/24` | JumpServer Compose 内部网段 |
| `REDIS_HOST` | `192.168.250.2` | 本地 Redis 容器固定 IP |
| `CORE_HOST` | `http://192.168.250.4:8080` | JumpServer core 内部入口 |
| `HTTP_PORT` | `8080` | Web 入口端口 |
| `SSH_PORT` | `2222` | Koko SSH/SFTP 入口端口 |
| `CORE_WORKER` | `2` | core Gunicorn worker 数，适配 2C4G 沙箱 |
| `CELERY_WORKER_COUNT` | `2` | 每个 Celery 队列 worker 并发数 |

生成生产密钥示例：

```bash
openssl rand -base64 36 | tr -dc A-Za-z0-9 | head -c 48; echo
openssl rand -base64 24 | tr -dc A-Za-z0-9 | head -c 24; echo
```

{{% alert title="生产密钥必须稳定" color="warning" %}}
`SECRET_KEY` 与 `BOOTSTRAP_TOKEN` 在生产数据存在后不要再更改。它们必须与数据库备份、`/data/jumpserver`、`/opt/jumpserver/.env` 一起保存；丢失原始 `SECRET_KEY` 后，数据库中的加密账号密钥可能无法恢复。
{{% /alert %}}

{{% alert title="密码字符限制" color="warning" %}}
`DB_PASSWORD` 与 `REDIS_PASSWORD` 不要包含单引号或双引号，这与 JumpServer 官方安装器行为一致。
{{% /alert %}}

------

## 登录与 DOMAINS

JumpServer 会在登录流程中检查可信访问域名。`DOMAINS` 必须包含浏览器实际访问的 Host：

```ini
DOMAINS=10.10.10.10:8080,10.10.10.10,jump.pigsty
```

正常登录 URL：

```text
http://10.10.10.10:8080/core/auth/login/?admin=1
```

如果登录页显示：

```text
配置文件有问题，无法登录...
DOMAINS=10.10.10.10:8080
```

请检查 `/opt/jumpserver/.env` 与容器环境：

```bash
cd /opt/jumpserver
grep '^DOMAINS=' .env
docker exec jms_core env | grep '^DOMAINS='
```

修正后需要重建 `core` 容器：

```bash
sudo sed -i 's#^DOMAINS=.*#DOMAINS=10.10.10.10:8080,10.10.10.10,jump.pigsty#' /opt/jumpserver/.env
docker compose up -d --force-recreate core
```

同时修改 `pigsty.yml` 或 `conf/app/jumpserver.yml`，否则下次执行 `./app.yml` 会再次覆盖 `/opt/jumpserver/.env`。

不要用带 `csrf_failure=1` 的旧 URL 判断配置是否仍然错误；该页面会按照失败请求上下文显示 `DOMAINS=...` 提示。应使用正常登录页重新测试，必要时打开无痕窗口。

------

## Docker 网络

模板使用固定 Docker bridge 网段：

```ini
DOCKER_SUBNET=192.168.250.0/24
REDIS_IP=192.168.250.2
CELERY_IP=192.168.250.3
CORE_IP=192.168.250.4
LION_IP=192.168.250.5
CHEN_IP=192.168.250.6
KOKO_IP=192.168.250.7
WEB_IP=192.168.250.8
```

固定 IP 有两个目的：

- 避免 JumpServer Python / Java 组件启动时遇到 Docker DNS 临时解析失败。
- 让 PostgreSQL HBA 规则可以精确放行应用网段。

PostgreSQL 看到的容器客户端来源是 `192.168.250.0/24`，因此模板包含：

```yaml
pg_hba_rules:
  - { user: jumpserver ,db: jumpserver ,addr: 192.168.250.0/24 ,auth: pwd ,order: 560 ,title: 'allow jumpserver access from docker bridge' }
pgb_hba_rules:
  - { user: jumpserver ,db: jumpserver ,addr: 192.168.250.0/24 ,auth: pwd ,order: 390 ,title: 'allow jumpserver pgbouncer access from docker bridge' }
```

如果 `192.168.250.0/24` 与现有网络冲突，需要同时修改：

- `DOCKER_SUBNET` 与各组件固定 IP。
- `REDIS_HOST`、`CORE_HOST`。
- `pg_hba_rules.addr` 与 `pgb_hba_rules.addr`。
- 重新创建 Compose 网络与容器。

不要把 `DB_HOST` 设置为 `127.0.0.1`；在容器里这指向容器自身。请使用宿主机内网 IP 或 Pigsty L2 VIP。

------

## PostgreSQL

JumpServer 4.x 使用 PostgreSQL，并要求 PostgreSQL 16 或更新版本。模板使用 Pigsty 创建数据库、用户、HBA、备份计划和可选 PgBouncer 入口。

应用数据库不需要额外 PostgreSQL 扩展：

```yaml
pg_extensions: []
pg_users:
  - { name: jumpserver ,password: DBUser.JumpServer ,pgbouncer: true ,pool_mode: session ,roles: [ dbrole_admin ] }
pg_databases:
  - { name: jumpserver ,owner: jumpserver }
```

模板中的 `pg_version` 可以按环境固定为 16、17 或更新主版本；JumpServer 的下限是 PostgreSQL 16。若使用高可用数据库形态，可以参考模板中注释的 `pg_vip_enabled` 示例，将应用侧 `DB_HOST` 指向主库 VIP。

{{% alert title="不要使用 PgBouncer transaction pooling" color="warning" %}}
JumpServer 的 Django 迁移与 Celery Beat 不适合 PgBouncer transaction pooling。默认使用 PostgreSQL `5432` 直连；如需通过 PgBouncer，请为 `jumpserver` 用户使用 session pooling。
{{% /alert %}}

------

## 部署验证

安装后执行：

```bash
cd /opt/jumpserver
make status
make health
make migrate
```

期望：

- `jms_core`、`jms_celery`、`jms_web`、`jms_redis`、`jms_koko`、`jms_lion`、`jms_chen` 均为 `healthy`。
- `make health` 返回 `status=true`、`db_status=true`、`redis_status=true`。
- `make migrate` 输出 `No migrations to apply`，或完成缺失迁移。

数据库侧检查：

```bash
sudo -iu postgres patronictl -c /etc/patroni/patroni.yml list
sudo -iu postgres psql -Atqc "select current_setting('server_version'), count(*) from information_schema.tables where table_schema='public'" jumpserver
sudo -iu postgres pgbackrest --stanza=pg-jumpserver info
```

期望：

- Patroni 集群 Leader `running`。
- PostgreSQL 版本为 16 或更新。
- JumpServer 迁移后 public schema 中有约 168 张表。
- pgBackRest stanza 状态为 `ok`。

------

## 常见问题

### 登录页提示 DOMAINS 配置错误

确认两层配置一致：

```bash
cd /opt/jumpserver
grep '^DOMAINS=' .env
docker exec jms_core env | grep '^DOMAINS='
```

修改 `.env` 后必须重建 `core` 容器：

```bash
docker compose up -d --force-recreate core
```

同时修改 Pigsty inventory 中的 `apps.jumpserver.conf.DOMAINS`，否则下次 `./app.yml` 会覆盖。

### `admin / ChangeMe` 无法登录

先区分两类错误：

- 页面顶部是 `DOMAINS=...` 红框：这是域名 / CSRF 配置问题，不是密码问题。
- 表单提示用户名或密码错误：才是账号密码问题。

可在容器内验证默认密码是否仍然有效：

```bash
docker exec -w /opt/jumpserver/apps jms_core python -c '
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "jumpserver.settings")
import django; django.setup()
from django.contrib.auth import get_user_model
u = get_user_model().objects.get(username="admin")
print(u.is_active, u.check_password("ChangeMe"))
'
```

### Web 返回 502

检查 core 与 web：

```bash
cd /opt/jumpserver
docker compose ps
docker logs --tail 100 jms_core
docker logs --tail 100 jms_web
```

如果是首次启动时 core 日志目录竞争，确认 `/data/jumpserver/core/data/logs` 已存在。模板已预创建该目录。

### 容器反复重启或健康检查超时

2C4G 节点上 JumpServer 较吃内存，模板默认使用：

```ini
CORE_WORKER=2
CELERY_WORKER_COUNT=2
```

如果仍然出现 Gunicorn worker timeout、SIGKILL 或系统内存不足，请增加内存 / Swap，或继续降低 worker 数。查看资源：

```bash
free -h
docker stats --no-stream
```

------

## 运维命令

安装后进入 `/opt/jumpserver`：

```bash
cd /opt/jumpserver

make up        # 启动 JumpServer
make down      # 停止 JumpServer
make restart   # 重启容器
make status    # 查看容器状态
make log       # 跟随日志
make health    # 检查 HTTP / DB / Redis 健康
make migrate   # 执行 ./jms upgrade_db
make exec      # 进入 core 容器
```

升级 JumpServer 时不要只修改镜像标签，必须执行数据库迁移：

```bash
cd /opt/jumpserver
make pull
make down
docker compose up -d redis core
make migrate
make up
```

升级期间保持 `SECRET_KEY` 与 `BOOTSTRAP_TOKEN` 不变。

------

## 备份与恢复

JumpServer 状态分为两层：

- PostgreSQL 数据库：使用 Pigsty pgBackRest / PITR 备份。
- 应用文件：`/data/jumpserver` 与 `/opt/jumpserver/.env`，包含日志、录像、组件数据、Redis 持久化和密钥。

恢复时应使用同一环境中的数据库、`.env` 与文件目录：

```bash
# 1. 使用 Pigsty pgBackRest / PITR 恢复 PostgreSQL
# 2. 恢复 /opt/jumpserver/.env 与 /data/jumpserver
# 3. 启动容器并执行迁移
cd /opt/jumpserver
make up
make migrate
make health
```

只恢复 PostgreSQL 而没有原始 `SECRET_KEY`，会导致 JumpServer 中加密保存的账号密钥无法正常解密。

------

## 社区版边界

本模板使用 PostgreSQL 作为 JumpServer 自身后端数据库，属于社区版自建部署路径。JumpServer 中“数据库资产管理”是另一项产品能力，和这里的后端数据库不是同一件事，请不要混淆。

------

## 参考

- JumpServer 项目： https://github.com/jumpserver/jumpserver
- JumpServer 安装器： https://github.com/jumpserver/installer
- Pigsty JumpServer 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/jumpserver.yml
- [Pigsty Docker 模块](/docs/docker/)
- [Pigsty Nginx 入口](/docs/infra/admin/portal/)

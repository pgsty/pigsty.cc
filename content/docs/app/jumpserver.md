---
title: JumpServer：开源堡垒机
weight: 618
description: 使用 Pigsty 自建 JumpServer 社区版，并将 PostgreSQL 后端数据库、备份、入口与运维纳入 Pigsty 管理。
module: [SOFTWARE]
categories: [参考]
---

[**JumpServer**](https://www.jumpserver.com/) 是开源 PAM / 堡垒机系统，用于集中管理 SSH、RDP、数据库与 Web 资产访问。
Pigsty 的 `app/jumpserver` 模板使用 Docker Compose 运行 JumpServer 社区版应用层，并使用 Pigsty 托管的 PostgreSQL 作为持久后端数据库。

当前模板基于 JumpServer `v5.0.0-ce`，保留社区版 `core`、`celery`、`koko`、`kael`、`chen`、`web` 与本地 Redis，移除上游安装器中的内置 PostgreSQL 服务。
PostgreSQL、备份、监控、Nginx 入口和数据库生命周期由 Pigsty 管理。

镜像组合按 [官方 v5.0.0 安装器](https://github.com/jumpserver/installer/tree/33785347d95677ad87c0cc2f754d4f671b4e086f) 校准，核验日期为 2026-10-08。当天 Docker Hub 的 Core、KoKo、Chen、Web `v5.0.0-ce` 标签返回 `MANIFEST_UNKNOWN`，官方阿里云命名空间提供完整组合，故模板使用 `IMAGE_PULL_PREFIX`。不要混搭组件版本或仅替换 Core 标签。

------

## 快速开始

在运行 [兼容操作系统](/docs/deploy/prepare/) 的全新 Linux x86_64 服务器上执行。当前镜像组合与实测平台为 `linux/amd64`，未验证 ARM64：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/jumpserver
vi pigsty.yml                 # 必改：密码、密钥、域名、IP

./deploy.yml                  # 安装 Pigsty、Infra、Etcd、PostgreSQL
./docker.yml                  # 安装 Docker 和 Compose
./app.yml                     # 安装 JumpServer
```

一次性 `init` 服务先执行数据库迁移，再用独立 Django 进程创建缺失的终端主机密钥并验证它；已有密钥不会被替换。只有初始化成功，Core 才会启动，Celery 与连接组件随后等待 Core 健康。检查启动结果：

```bash
cd /opt/jumpserver
make status
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

- [ ] 准备一台新 Linux 服务器，至少 `4C8G`、100 GB 磁盘；生产环境按并发与录像保留量增加资源。
- [ ] 确认服务器 IP、DNS、NTP、SSH 与 sudo 可用。
- [ ] 确认 Docker daemon 能拉取 `IMAGE_PULL_PREFIX` 指定的镜像仓库；默认使用官方阿里云镜像。代理应在实际执行拉取的 daemon 上配置，容器内 `127.0.0.1` 指向容器自身。
- [ ] 执行 `./configure -c app/jumpserver` 后，修改 `pigsty.yml` 中的默认密码、`SECRET_KEY`、`BOOTSTRAP_TOKEN`、`CHAT_AI_DELEGATION_SECRET` 与 `DOMAINS`。
- [ ] 确认 `DOMAINS` 包含浏览器实际访问的主机名或 IP，例如 `10.10.10.10:8080`。
- [ ] 确认 PostgreSQL 备份任务正常，部署后检查 `pig pb info` 或 `pgbackrest info`。

------

## 配置模板

[`conf/app/jumpserver.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/jumpserver.yml) 定义了单节点 JumpServer 自建模板。默认拓扑包括：

- `jumpserver`：JumpServer 应用容器与本地 Redis 所在节点。
- `pg-jumpserver`：Pigsty 托管的 PostgreSQL 数据库集群。
- `infra`：Nginx 入口、Grafana、VictoriaMetrics 等基础设施。
- `etcd`：Patroni 所需的分布式配置存储。

`app.yml` 会将 `app/jumpserver` 复制到 `/opt/jumpserver`，使用 `apps.jumpserver.conf` 更新 `/opt/jumpserver/.env` 中的配置项，然后执行 `docker compose up -d`。

核心应用服务：

- `jms_core`：Django API / Web 后端，监听容器内 `8080`。
- `jms_celery`：异步任务、定时任务与后台队列。
- `jms_web`：Nginx Web 入口，默认映射宿主机 `8080`。
- `jms_koko`：SSH / SFTP 终端入口，默认映射宿主机 `2222`。
- `jms_kael`：5.x 社区版 AI 网关，内部端口 `8083`，通过 Web 的 `/kael/` 访问。
- `jms_chen`：Web 数据库连接组件，内部端口 `8082`。
- `jms_init`：一次性迁移与终端密钥验证；正常完成后状态为 `Exited (0)`。
- `jms_redis`：本地 Redis，用于缓存、队列与 Channels 后端。

------

## 关键参数

常见参数如下：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `IMAGE_PULL_PREFIX` | `registry.cn-beijing.aliyuncs.com/jumpservice` | 完整官方镜像命名空间 |
| `JUMPSERVER_VERSION` | `v5.0.0-ce` | 所有 JumpServer 组件使用同一社区版版本 |
| `REDIS_VERSION` | `7.4.11-bookworm` | 本地 Redis 镜像版本 |
| `JUMPSERVER_DATA` | `/data/jumpserver` | 应用持久化目录 |
| `DOMAINS` | `10.10.10.10:8080,10.10.10.10,jump.pigsty` | 允许登录的可信访问域名 / IP |
| `SECRET_KEY` | 示例值 | 加密密钥，生产必须替换且长期保存 |
| `BOOTSTRAP_TOKEN` | 示例值 | 组件注册令牌，生产必须替换且长期保存 |
| `CHAT_AI_DELEGATION_SECRET` | 示例值 | Core / Kael 委托密钥，生成后长期保存 |
| `DB_HOST` / `DB_PORT` | `10.10.10.10` / `5432` | Pigsty PostgreSQL 入口 |
| `DB_USER` / `DB_NAME` | `jumpserver` / `jumpserver` | 业务用户与业务数据库 |
| `DB_PASSWORD` | `DBUser.JumpServer` | 业务用户密码，生产必须替换 |
| `DOCKER_SUBNET` | `192.168.250.0/24` | JumpServer Compose 内部网段 |
| `REDIS_HOST` | `192.168.250.2` | 本地 Redis 容器固定 IP |
| `CORE_HOST` | `http://192.168.250.4:8080` | JumpServer core 内部入口 |
| `HTTP_PORT` | `8080` | Web 入口端口 |
| `SSH_PORT` | `2222` | KoKo 宿主机 SSH/SFTP 端口；容器内固定 `2222` |
| `KOKO_WEB_PROXY_PORT` | `5001` | KoKo 网站代理端口 |
| `KOKO_PRIVILEGED` | `true` | 保留上游 KoKo 权限默认值；SSH 路径也验证了关闭此选项 |
| `WEB_PROXY_ALLOWED_HOSTS` | `localhost,127.0.0.1` | 网站资产目标主机的允许列表；保留回环地址供 KoKo 控制 API 使用 |
| `ANSIBLE_DOCKER_ENABLED` | `false` | 在 Celery 容器内执行 Ansible，使用当前数据目录布局 |
| `CORE_WORKER` | `2` | Core Gunicorn worker 数 |
| `CELERY_WORKER_COUNT` | `2` | 每个 Celery 队列 worker 并发数 |

使用网站资产代理时，在 `WEB_PROXY_ALLOWED_HOSTS` 中添加目标网站的主机名或 IP，并保留 `localhost,127.0.0.1`。JumpServer Endpoint 中的网站代理端口应与 `KOKO_WEB_PROXY_PORT` 一致。

生成生产密钥示例：

```bash
openssl rand -base64 36 | tr -dc A-Za-z0-9 | head -c 48; echo
openssl rand -base64 24 | tr -dc A-Za-z0-9 | head -c 24; echo
openssl rand -hex 32           # CHAT_AI_DELEGATION_SECRET
```

> [!WARNING] 生产密钥必须稳定
> `SECRET_KEY`、`BOOTSTRAP_TOKEN` 与 `CHAT_AI_DELEGATION_SECRET` 生成后长期保存；升级时保留原始值。它们必须与数据库备份、`/data/jumpserver`、`/opt/jumpserver/.env` 一起保存；丢失原始 `SECRET_KEY` 后，数据库中的加密账号密钥可能无法恢复。

> [!WARNING] 密码字符限制
> `DB_PASSWORD` 与 `REDIS_PASSWORD` 不要包含单引号或双引号，这与 JumpServer 官方安装器行为一致。

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
KAEL_IP=192.168.250.5
CHEN_IP=192.168.250.6
KOKO_IP=192.168.250.7
WEB_IP=192.168.250.8
INIT_IP=192.168.250.9
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

- `DOCKER_SUBNET` 与各组件固定 IP，包括 `INIT_IP`。
- `REDIS_HOST`、`CORE_HOST`。
- `pg_hba_rules.addr` 与 `pgb_hba_rules.addr`。
- 重新创建 Compose 网络与容器。

不要把 `DB_HOST` 设置为 `127.0.0.1`；在容器里这指向容器自身。请使用宿主机内网 IP 或 Pigsty L2 VIP。

------

## PostgreSQL

上游默认关闭作业中心。如需使用，在“系统设置 → 功能设置”启用作业中心，并保持“Ansible Docker 隔离”关闭。本模板使用 `ANSIBLE_DOCKER_ENABLED=false` 和现有数据目录；若数据库中已有该设置，其值优先于 `.env`，升级后应检查。启用 Docker 隔离需要额外的执行器镜像、宿主机 Docker 控制权和对应路径，不能仅切换一个变量。

JumpServer 5.x 使用 PostgreSQL，并要求 PostgreSQL 16 或更新版本。模板使用 Pigsty 创建数据库、用户、HBA、备份计划和可选 PgBouncer 入口。

应用数据库不需要额外 PostgreSQL 扩展：

```yaml
pg_extensions: []
pg_users:
  - { name: jumpserver ,password: DBUser.JumpServer ,pgbouncer: true ,pool_mode: session ,roles: [ dbrole_admin ] }
pg_databases:
  - { name: jumpserver ,owner: jumpserver }
```

模板默认 PostgreSQL 18；本次在外部 PostgreSQL 18.6 上验证。上游要求 PostgreSQL 16 或更新版本，其他主版本需按环境验证。若使用高可用数据库形态，可以参考模板中注释的 `pg_vip_enabled` 示例，将应用侧 `DB_HOST` 指向主库 VIP。

> [!WARNING] 不要使用 PgBouncer transaction pooling
> JumpServer 的 Django 迁移与 Celery Beat 不适合 PgBouncer transaction pooling。默认使用 PostgreSQL `5432` 直连；如需通过 PgBouncer，请为 `jumpserver` 用户使用 session pooling。

------

## 部署验证

安装后执行：

```bash
cd /opt/jumpserver
make status
make health
docker compose logs init
```

期望：

- `jms_core`、`jms_celery`、`jms_web`、`jms_redis`、`jms_koko`、`jms_kael`、`jms_chen` 均为 `healthy`。
- `make health` 返回 `status=true`、`db_status=true`、`redis_status=true`。
- `jms_init` 正常退出为 `Exited (0)`；日志显示迁移完成与终端公钥指纹。初始化失败时 Core 不启动。
- 实际登录，创建测试资产与授权，执行安全命令，并检查审计和录像。健康检查不等于全部功能通过。

数据库侧检查：

```bash
sudo -iu postgres patronictl -c /etc/patroni/patroni.yml list
sudo -iu postgres psql -Atqc "select current_setting('server_version'), count(*) from django_migrations" jumpserver
sudo -iu postgres pgbackrest --stanza=pg-jumpserver info
```

期望：

- Patroni 集群 Leader `running`。
- PostgreSQL 版本为 16 或更新。
- `django_migrations` 中存在已应用的迁移记录；不要用固定表数量判断安装是否完成。
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

JumpServer 建议至少 4C8G；模板默认使用：

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
make restart   # 停止后通过 init 依赖顺序重新启动（有短暂中断）
make status    # 查看容器状态
make log       # 跟随日志
make health    # 检查 HTTP / DB / Redis 健康
make migrate   # 与 restart 相同，维护窗口内重跑 init 并重新启动
make exec      # 进入 core 容器
```

### 从 4.10.19 升级到 5.0.0

[官方 v5.0.0 升级脚本](https://github.com/jumpserver/installer/blob/33785347d95677ad87c0cc2f754d4f671b4e086f/scripts/7_upgrade.sh) 接受 `v3.10.11` 及更新源版本；本模板实测路径为 `v4.10.19-ce → v5.0.0-ce`，没有额外的中间版本。其他旧版本应先按官方升级指南确认路径。

1. 确认 PostgreSQL 备份可恢复，安排维护窗口，并停止旧栈。
2. 同时备份数据库、整个 `/opt/jumpserver` 与 `/data/jumpserver`，在独立数据库和目录实际恢复验证。
3. 更新完整 Compose、`init.sh`、Makefile 和 `.env`；所有组件统一到 `v5.0.0-ce`。保留原始 `SECRET_KEY`、`BOOTSTRAP_TOKEN`、数据库与 Redis 密码，新增随机 `CHAT_AI_DELEGATION_SECRET`。
4. 将 `LION_IP` 改为 `KAEL_IP`，创建 Kael 持久化目录。停止并移除旧 Lion 容器或解除其网络连接，避免占用 Kael 的固定 IP；保留旧数据目录和备份。
5. 检查镜像前缀、代理、网段与端口，拉取整套镜像后启动：

```bash
cd /opt/jumpserver
make pull
make up        # init 完成迁移及密钥验证后才启动 Core
make status
make health
docker compose logs init
```

复验原账号登录、资产与授权、凭据解密、主机公钥指纹、真实会话和历史录像。`make restart`、`make migrate` 和 `make upgrade-db` 都先停止服务，再通过同一个初始化依赖顺序启动。不要用 `docker compose restart` 并行重启 init 与 Core。

若 init 失败，保留日志并修复原因后重试。数据库已执行 5.x 迁移后，不能仅改回 4.x 镜像；回退必须恢复升级前数据库、应用文件和原始密钥。

------

## 备份与恢复

升级备份应在应用停止写入后，将数据库快照、整个 `/opt/jumpserver` 和 `/data/jumpserver` 保存在同一检查点，备份文件权限应限制为管理员可读。恢复验证使用独立数据库、文件目录、Compose 项目名、网段和端口，避免覆盖在线实例。Kael 的普通会话历史保存在 Core 数据库；Terminal AI 与组件状态保存在应用目录，需要同时备份。

JumpServer 状态分为两层：

- PostgreSQL 数据库：使用 Pigsty pgBackRest / PITR 备份。
- 应用文件：`/data/jumpserver` 与 `/opt/jumpserver/.env`，包含日志、录像、组件数据、Redis 持久化和密钥。

恢复时应使用同一环境中的数据库、`.env` 与文件目录：

```bash
# 1. 使用 Pigsty pgBackRest / PITR 恢复 PostgreSQL
# 2. 恢复 /opt/jumpserver/.env 与 /data/jumpserver
# 3. 使用备份对应版本的完整 Compose，启动前由 init 执行迁移
cd /opt/jumpserver
make up
make health
```

只恢复 PostgreSQL 而没有原始 `SECRET_KEY`，会导致 JumpServer 中加密保存的账号密钥无法正常解密。

------

## 社区版边界

本模板使用 JumpServer 5.0.0 社区版的 Core、Celery、KoKo、Chen、Kael 和 Web，另有一次性 init 与本地 Redis。5.x 不再部署独立 Lion 容器，其远程桌面实现已整合到 KoKo。JumpServer 项目采用 GPLv3，Pigsty 模板采用 Apache-2.0。

外部 PostgreSQL 18 后端与 PostgreSQL 数据库资产是两条独立连接路径。实测范围见下表；RDP/VNC、原生客户端、ARM64、企业版组件和外部模型推理不在本次验收范围内。Kael 的登录鉴权、会话存储与权限隔离可以在未配置模型提供商时验证，模型推理仍需另行配置和验证。上游仅持久保存含消息的普通会话，空白会话草稿在重启后不保留。Core / Kael 委托认证也已验证，成功加载 952 项操作定义。

| 验证路径 | 5.x 新装 | 4.10.19 → 5.0.0 |
|----------|----------|-------------------|
| 外部 PostgreSQL 18.6、普通应用角色 | 通过 | 通过 |
| API 与网页登录、越权拒绝 | 通过 | 通过，保留原始用户与权限 |
| 用户/资产/账号/授权完整 CRUD | 通过，独立临时对象增删改查 | 通过，原有对象保持一致 |
| KoKo SSH 与终端 WebSocket 安全命令 | 通过 | 通过，保留主机密钥 |
| 会话审计、命令记录、录像下载 | 通过 | 通过，历史录像校验值一致 |
| Chen PostgreSQL 资产查询 | 通过，返回版本 180006 与合成值 42 | 通过 |
| Celery 凭据验证 | 通过 | 通过 |
| Kael 登录鉴权、含消息会话持久化、权限隔离 | 通过 | 通过 |

升级前备份已恢复到独立 PostgreSQL 数据库与应用目录，原密文、主机密钥和录像通过比对。验收使用 M3 隔离 VM 内的合成用户、资产和数据。

------

## 参考

- [JumpServer v5.0.0 官方发布](https://github.com/jumpserver/jumpserver/releases/tag/v5.0.0)
- [固定版本安装器](https://github.com/jumpserver/installer/tree/33785347d95677ad87c0cc2f754d4f671b4e086f)
- [官方升级指南](https://docs.jumpserver.org/zh/v4/installation/upgrade/)
- JumpServer 项目： https://github.com/jumpserver/jumpserver
- JumpServer 安装器： https://github.com/jumpserver/installer
- Pigsty JumpServer 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/jumpserver.yml
- [Pigsty Docker 模块](/docs/docker/)
- [Pigsty Nginx 入口](/docs/infra/admin/portal/)

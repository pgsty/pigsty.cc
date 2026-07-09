---
title: Maybe：自建个人财务
weight: 600
description: 使用 Pigsty 自建 Maybe 个人财务管理应用，并将 PostgreSQL 数据库、备份、监控与入口交给 Pigsty 管理。
module: [SOFTWARE]
categories: [参考]
---

[**Maybe**](https://github.com/maybe-finance/maybe) 是一个开源个人财务管理应用，可以用于维护账户、交易、预算、投资与家庭财务视图。Maybe 是典型的 Rails Web 应用，生产环境使用 PostgreSQL 保存业务数据，并使用 Redis 处理后台任务队列。

Pigsty 提供 `app/maybe` 模板，将 Maybe 的无状态 Web / Worker 容器接入 Pigsty 托管的 PostgreSQL，并用本地 Redis 承载 Sidekiq 队列。这样您可以把最重要的财务数据放在可备份、可监控、可恢复的 PostgreSQL 集群中，而不是放在一个临时 Docker 数据卷里。

> Maybe 上游仓库已经归档，最新 release 为 `v0.6.0`。GHCR 目前发布 `stable` 与 `latest` 镜像标签；Pigsty 默认使用 `stable`，即最新 release 语义的镜像。

------

## 快速开始

在运行 [兼容操作系统](/docs/deploy/prepare/) 的全新 Linux x86 / ARM 服务器上执行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap                # 安装 Pigsty 依赖
./configure -c app/maybe   # 使用 Maybe 配置模板
vi pigsty.yml              # 必改：SECRET_KEY_BASE、数据库密码、域名

./deploy.yml               # 安装 Pigsty、Infra、Etcd、PostgreSQL
./docker.yml               # 安装 Docker 和 Compose
./app.yml                  # 安装 Maybe
```

Maybe 默认监听 `5002` 端口。安装完成后，您可以通过以下地址访问：

- `http://<your_ip_address>:5002`
- `http://maybe.pigsty`

首次访问时，在登录页面选择创建账号，注册您的第一个家庭账户即可开始使用。

如果您希望通过 `maybe.pigsty` 访问，请在浏览器所在主机的 `/etc/hosts` 中添加解析：

```bash
10.10.10.10 maybe.pigsty
```

如果要对公网暴露服务，建议使用真实域名与 HTTPS 证书，并按下文修改 `infra_portal`。

------

## 检查清单

- [ ] 准备一台全新 Linux 服务器，建议至少 `2C4G`，磁盘使用 SSD/NVMe。
- [ ] 确认服务器拥有静态内网 IPv4 地址，并能访问 GHCR / Docker Hub 或已配置镜像站。
- [ ] 执行 `./configure -c app/maybe` 后，修改 `pigsty.yml` 中的默认密码、域名和密钥。
- [ ] 用 `openssl rand -hex 64` 生成新的 `SECRET_KEY_BASE`。
- [ ] 将 `POSTGRES_PASSWORD` 与 `pg_users` 中的 `maybe` 用户密码保持一致。
- [ ] 如果通过公网访问，配置真实域名、HTTPS 证书和防火墙访问策略。
- [ ] 确认 PostgreSQL 备份任务正常，部署后检查 `pig pb info`。

------

## 配置模板

[`conf/app/maybe.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/maybe.yml) 定义了单节点 Maybe 自建模板。默认拓扑包括：

- `maybe`：Maybe Web / Worker / Redis 容器所在节点。
- `pg-maybe`：Pigsty 托管的 PostgreSQL 数据库集群。
- `infra`：Nginx 入口、Grafana、VictoriaMetrics 等基础设施。
- `etcd`：Patroni 所需的分布式配置存储。

关键配置摘录如下：

```yaml
maybe:
  hosts: { 10.10.10.10: {} }
  vars:
    app: maybe
    apps:
      maybe:
        file:
          - { path: /data/maybe             ,state: directory ,mode: 0755 }
          - { path: /data/maybe/storage     ,state: directory ,owner: 1000 ,group: 1000 ,mode: 0755 }
          - { path: /data/maybe/redis       ,state: directory ,mode: 0755 }
        conf:
          MAYBE_IMAGE: ghcr.io/maybe-finance/maybe
          MAYBE_VERSION: stable
          MAYBE_PORT: 5002
          MAYBE_DATA: /data/maybe
          APP_DOMAIN: maybe.pigsty
          SECRET_KEY_BASE: 2f1e4c3d5b6a79808796a5b4c3d2e1f00123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef01234567
          DB_HOST: 10.10.10.10
          DB_PORT: 5432
          POSTGRES_USER: maybe
          POSTGRES_PASSWORD: MaybeFinance2026
          POSTGRES_DB: maybe_production
          REDIS_VERSION: 7-alpine

pg-maybe:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-maybe
    pg_users:
      - { name: maybe ,password: MaybeFinance2026 ,pgbouncer: true ,roles: [ dbrole_admin ] ,comment: admin user for maybe service }
    pg_databases:
      - { name: maybe_production ,owner: maybe ,revokeconn: true ,comment: maybe main database }
    pg_hba_rules:
      - { user: maybe ,db: maybe_production ,addr: 172.16.0.0/12 ,auth: pwd ,title: 'allow maybe access from local docker network' }
    pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ]
```

这里的 `maybe_production` 是 Maybe / Rails 上游默认的生产数据库名称。您也可以改成 `maybe`，但必须同时修改 `POSTGRES_DB`、`pg_databases.name`、`pg_hba_rules.db` 与所有文档/运维脚本中的引用。

------

## 重要参数

`app.yml` 会把 `app/maybe` 目录复制到 `/opt/maybe`，并用 `apps.maybe.conf` 覆盖 `/opt/maybe/.env`。常见参数如下：

| 参数                    | 默认值                           | 说明                        |
|-----------------------|-------------------------------|---------------------------|
| `MAYBE_IMAGE`         | `ghcr.io/maybe-finance/maybe` | Maybe 镜像仓库                |
| `MAYBE_VERSION`       | `stable`                      | 镜像标签，建议生产保持 `stable`      |
| `MAYBE_PORT`          | `5002`                        | 宿主机暴露端口                   |
| `MAYBE_DATA`          | `/data/maybe`                 | 宿主机持久化目录                  |
| `APP_DOMAIN`          | `maybe.pigsty`                | Maybe 的默认入口域名占位           |
| `SECRET_KEY_BASE`     | 示例随机串                         | Rails 加密签名密钥，生产必须替换       |
| `DB_HOST` / `DB_PORT` | `10.10.10.10` / `5432`        | Pigsty PostgreSQL 入口      |
| `POSTGRES_USER`       | `maybe`                       | Maybe 连接 PostgreSQL 的业务用户 |
| `POSTGRES_PASSWORD`   | `MaybeFinance2026`            | 业务用户密码，生产必须替换             |
| `POSTGRES_DB`         | `maybe_production`            | Maybe 生产数据库               |
| `REDIS_VERSION`       | `7-alpine`                    | 本地 Redis 镜像标签             |

生成生产密钥：

```bash
openssl rand -hex 64
```

修改密码时，请保证应用与数据库定义同步。例如：

```yaml
apps:
  maybe:
    conf:
      POSTGRES_PASSWORD: <new-password>

pg_users:
  - { name: maybe ,password: <new-password> ,pgbouncer: true ,roles: [ dbrole_admin ] }
```

------

## 域名与入口

模板默认在 `infra_portal` 中增加 Maybe 入口：

```yaml
infra_portal:
  home  : { domain: i.pigsty }
  maybe:
    domain: maybe.pigsty
    endpoint: "10.10.10.10:5002"
    websocket: true
```

如果您使用真实域名，例如 `finance.example.com`，可以批量替换：

```bash
sed -ie 's/maybe.pigsty/finance.example.com/g' pigsty.yml
```

然后应用 Nginx 入口配置：

```bash
./infra.yml -t nginx
```

如需申请 HTTPS 证书，请先确保域名解析到当前节点，再在 `infra_portal.maybe` 中加入 `certbot`：

```yaml
maybe:
  domain: finance.example.com
  endpoint: "10.10.10.10:5002"
  websocket: true
  certbot: finance.example.com
```

随后执行：

```bash
make cert
./infra.yml -t nginx
```

------

## 运维命令

Maybe 安装后位于 `/opt/maybe`，常用命令如下：

```bash
cd /opt/maybe

make up        # 启动 Maybe
make run       # 前台启动并查看日志
make restart   # 重启容器
make down      # 停止容器
make status    # 查看容器状态
make log       # 跟随日志
make health    # 检查 Rails /up 健康端点
make migrate   # 手动执行 Rails db:prepare
make console   # 进入 Rails console
make exec      # 进入 maybe-web 容器 shell
```

`web` 容器启动时会自动执行 `db:prepare`，通常不需要手工迁移。升级镜像后，如果启动日志提示数据库迁移问题，可以先查看日志，再执行：

```bash
cd /opt/maybe
make pull
make up
make log
```

------

## 数据与备份

Maybe 的状态分为两类：

- 业务数据：存放在 Pigsty PostgreSQL 数据库 `maybe_production` 中。
- 附件/缓存：宿主机目录 `/data/maybe/storage` 与 `/data/maybe/redis`。

模板默认配置每日凌晨 1 点执行一次 PostgreSQL 全量备份：

```yaml
pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ]
```

部署后建议检查备份状态：

```bash
pig pb info
```

如果您在生产环境中使用 Maybe 记录真实财务数据，请至少做到：

- 定期检查 PostgreSQL 备份是否成功。
- 将 pgBackRest 仓库放到可靠磁盘或对象存储中。
- 将 `/data/maybe/storage` 纳入文件级备份，您可以使用 restic 备份到 s3
- 不要把 `SECRET_KEY_BASE`、数据库密码、API Key 泄露到公开仓库。

------

## 安全建议

Maybe 用于个人/家庭财务管理，数据敏感度很高。生产使用时建议：

- 修改所有 Pigsty 默认密码，尤其是 `pg_admin_password`、`pg_monitor_password`、`patroni_password`、`haproxy_admin_password`。
- 修改 Maybe 数据库用户密码 `POSTGRES_PASSWORD`。
- 使用新的 `SECRET_KEY_BASE`，不要沿用模板示例值。
- 对公网开放时启用 HTTPS，并限制管理端口访问。
- 如启用 `OPENAI_ACCESS_TOKEN` 或 `SYNTH_API_KEY`，请评估外部 API 成本与数据暴露边界。

Maybe 上游已经归档，适合对现有功能满意、偏本地长期自持的用户。如果您需要持续演进的新功能或银行自动同步能力，应提前评估上游维护状态。

------

## 参考

- Maybe 项目： https://github.com/maybe-finance/maybe
- Maybe Docker 自建文档： https://github.com/maybe-finance/maybe/blob/main/docs/hosting/docker.md
- Pigsty Maybe 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/maybe.yml
- [Pigsty Docker 模块](/docs/docker/)
- [Pigsty Nginx 入口](/docs/infra/admin/portal/)

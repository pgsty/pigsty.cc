---
title: InsForge：AI 后端即服务
weight: 566
description: 使用 Pigsty 自建 InsForge OSS，并将 PostgreSQL 数据库、备份、监控与入口交给 Pigsty 管理。
module: [SOFTWARE]
categories: [参考]
---

[**InsForge**](https://github.com/InsForge/InsForge) 是面向 AI 编程代理的开源 Backend-as-a-Service 平台。它以 PostgreSQL 为核心，提供认证、数据库 API、文件存储、模型网关、边缘函数、站点部署和支付集成等能力，让应用可以跳过大部分后端样板代码。

Pigsty 提供 `app/insforge` 配置模板，将 InsForge OSS 的无状态服务运行在 Docker Compose 中，并把最关键的状态放入 Pigsty 托管的 PostgreSQL。这样可以继续使用 Pigsty 的高可用、备份恢复、监控、入口域名与基础设施能力，而不是把数据库藏在临时容器卷里。

当前模板面向 InsForge OSS `v2.2.6`，使用外部 PostgreSQL，默认暴露 InsForge Dashboard/API、PostgREST 和 Deno Runtime 三个服务。

------

## 快速开始

在运行 [兼容操作系统](/docs/deploy/prepare/) 的全新 Linux x86 / ARM 服务器上执行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap                  # 安装 Pigsty 依赖
./configure -c app/insforge  # 使用 InsForge 配置模板
vi pigsty.yml                # 必改：密钥、管理员账号、数据库密码、域名

./deploy.yml                 # 安装 Pigsty、Infra、Etcd、PostgreSQL
./docker.yml                 # 安装 Docker 和 Compose
./app.yml                    # 安装 InsForge
```

安装完成后，默认访问地址为：

- `http://<your_ip_address>:7130`
- `http://isf.pigsty`

默认管理员账号为 `admin@example.com` / `pigsty`。生产环境必须修改管理员账号、管理员密码、JWT 密钥、加密密钥和数据库密码。

如果您希望通过 `isf.pigsty` 访问，请在浏览器所在主机的 `/etc/hosts` 中添加解析：

```bash
10.10.10.10 isf.pigsty
```

如果要对公网暴露服务，建议使用真实域名与 HTTPS 证书，并按下文修改 `infra_portal`。

------

## 检查清单

- [ ] 准备一台全新 Linux 服务器，建议至少 `2C4G`，磁盘使用 SSD/NVMe。
- [ ] 确认服务器拥有静态内网 IPv4 地址，并能访问 GHCR / Docker Hub 或已配置镜像站。
- [ ] 执行 `./configure -c app/insforge` 后，修改 `pigsty.yml` 中的默认密码、域名和密钥。
- [ ] 用 `openssl rand -base64 32` 分别生成新的 `JWT_SECRET` 与 `ENCRYPTION_KEY`。
- [ ] 将 `POSTGRES_PASSWORD` 与 `pg_users` 中的 `dbuser_insforge` 用户密码保持一致。
- [ ] 如果通过公网访问，配置真实域名、HTTPS 证书和防火墙访问策略。
- [ ] 确认 PostgreSQL 扩展包安装正常，部署后检查 `pig pb info`。

------

## 架构

InsForge 模板默认将数据库和应用容器分离：

```text
                    ┌──────────────────────────────────────────────┐
                    │                 InsForge Stack               │
┌──────────┐       │  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  Nginx   │──────▶│  │ InsForge │  │PostgREST │  │   Deno    │  │
│ (Pigsty) │  :7130│  │ App+Web  │  │ REST API │  │  Runtime  │  │
└──────────┘       │  │  :7130   │  │  :5430   │  │   :7133   │  │
                    │  └────┬─────┘  └────┬─────┘  └─────┬─────┘  │
                    │       │             │              │         │
                    └───────┼─────────────┼──────────────┼─────────┘
                            │             │              │
                            ▼             ▼              ▼
                    ┌──────────────────────────────────────────────┐
                    │  PostgreSQL (Pigsty Managed HA Cluster)      │
                    │  Patroni + pgBackRest + pgBouncer + HAProxy  │
                    └──────────────────────────────────────────────┘
```

组件说明：

- **InsForge App**：`ghcr.io/insforge/insforge-oss:v2.2.6`，提供 Dashboard 和主 API，监听 `7130`。
- **PostgREST**：`postgrest/postgrest:v12.2.12`，从 PostgreSQL schema 自动生成 REST API，宿主机端口为 `5430`。
- **Deno Runtime**：`ghcr.io/insforge/deno-runtime:latest`，用于边缘函数运行时，监听 `7133`。
- **PostgreSQL**：由 Pigsty 管理，负责持久化状态、备份、监控和高可用。

------

## 配置模板

[`conf/app/insforge.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/insforge.yml) 定义了单节点 InsForge 自建模板。默认拓扑包括：

- `insforge`：InsForge、PostgREST、Deno Runtime 容器所在节点。
- `pg-meta`：Pigsty 托管的 PostgreSQL 数据库集群，包含 InsForge 所需角色、数据库和扩展。
- `infra`：Nginx 入口、Grafana、VictoriaMetrics 等基础设施。
- `etcd`：Patroni 所需的分布式配置存储。

关键配置摘录如下：

```yaml
insforge:
  hosts: { 10.10.10.10: {} }
  vars:
    app: insforge
    apps:
      insforge:
        conf:
          JWT_SECRET: your-secret-key-here-must-be-32-char-or-above
          ENCRYPTION_KEY: your-encryption-key-here-must-be-32-char-or-above
          ROOT_ADMIN_USERNAME: admin@example.com
          ROOT_ADMIN_PASSWORD: pigsty
          POSTGRES_HOST: 10.10.10.10
          POSTGRES_PORT: 5432
          POSTGRES_DB: insforge
          POSTGRES_USER: dbuser_insforge
          POSTGRES_PASSWORD: DBUser.Insforge

pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - { name: dbuser_insforge ,password: DBUser.Insforge ,pgbouncer: true ,roles: [dbrole_admin] ,superuser: true ,comment: 'insforge superuser' }
      - { name: anon            ,login: false ,comment: 'insforge anonymous role for PostgREST' }
      - { name: authenticated   ,login: false ,comment: 'insforge authenticated role' }
      - { name: project_admin   ,login: false ,bypassrls: true ,comment: 'insforge project admin with RLS bypass' }
    pg_databases:
      - name: insforge
        owner: dbuser_insforge
        baseline: insforge.sql
        extensions: [pgcrypto, http, pg_cron]
    pg_libs: 'pg_cron, pg_stat_statements, auto_explain'
    pg_parameters:
      cron.database_name: insforge
      app.encryption_key: your-encryption-key-here-must-be-32-char-or-above
      insforge.policy_grant_role: project_admin
      insforge.internal_schemas: 'ai,auth,compute,deployments,email,functions,memory,payments,realtime,schedules,storage,system'
    pg_extensions: [ pg_cron, pg_http ]
    pg_hba_rules:
      - { user: dbuser_insforge ,db: all ,addr: 172.16.0.0/12 ,auth: pwd ,title: 'allow insforge access from local docker networks' }
```

------

## 重要参数

`app.yml` 会把 `app/insforge` 目录复制到 `/opt/insforge`，并用 `apps.insforge.conf` 覆盖 `/opt/insforge/.env`。常见参数如下：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `JWT_SECRET` | 示例密钥 | JWT 签名密钥，生产必须替换，建议 32 字符以上随机值 |
| `ENCRYPTION_KEY` | 示例密钥 | 用于加密运行时凭据，生产必须替换，并与 `JWT_SECRET` 分开管理 |
| `ROOT_ADMIN_USERNAME` | `admin@example.com` | Root 管理员账号 |
| `ROOT_ADMIN_PASSWORD` | `pigsty` | Root 管理员密码，生产必须替换 |
| `POSTGRES_HOST` / `POSTGRES_PORT` | `10.10.10.10` / `5432` | Pigsty PostgreSQL 入口 |
| `POSTGRES_DB` | `insforge` | InsForge 数据库 |
| `POSTGRES_USER` | `dbuser_insforge` | InsForge 连接 PostgreSQL 的业务用户 |
| `POSTGRES_PASSWORD` | `DBUser.Insforge` | 业务用户密码，生产必须替换 |
| `INSFORGE_VERSION` | `v2.2.6` | InsForge OSS 镜像标签 |
| `DENO_RUNTIME_VERSION` | `latest` | Deno Runtime 镜像标签 |
| `APP_PORT` | `7130` | InsForge App 对外端口 |
| `POSTGREST_PORT` | `5430` | PostgREST 对外端口 |
| `DENO_PORT` | `7133` | Deno Runtime 对外端口 |
| `ACCESS_API_KEY` | 空 | 可选 MCP / API 访问密钥，为空时由 InsForge 生成 |
| `ACCESS_ANON_KEY` | 空 | 可选前端匿名访问密钥，设置时应以 `anon_` 开头 |
| `OPENROUTER_API_KEY` | 空 | 可选 OpenRouter 模型网关密钥 |
| `AWS_S3_BUCKET` / `S3_*` | 空 | 可选对象存储配置 |
| `DENO_DEPLOY_TOKEN` | 空 | 可选 Deno Deploy 集成 |
| `VERCEL_TOKEN` / `FLY_API_TOKEN` | 空 | 可选站点部署与计算平台集成 |
| `STRIPE_*` / `RAZORPAY_*` | 空 | 可选支付集成 |

生成生产密钥：

```bash
openssl rand -base64 32
```

修改数据库密码时，请保证应用与数据库定义同步。例如：

```yaml
apps:
  insforge:
    conf:
      POSTGRES_PASSWORD: <new-password>

pg_users:
  - { name: dbuser_insforge ,password: <new-password> ,pgbouncer: true ,roles: [dbrole_admin] ,superuser: true }
```

`ENCRYPTION_KEY` 一旦用于生产数据后应保持稳定。更换它可能导致已经加密保存的 API Key、OAuth Token、函数密钥等运行时凭据无法解密。

------

## 数据库与权限

InsForge 数据库默认名为 `insforge`，所有者为 `dbuser_insforge`。模板会创建以下角色：

| 角色 | 登录 | 用途 |
|------|------|------|
| `dbuser_insforge` | 是 | InsForge 应用连接 PostgreSQL 的业务用户，模板中授予 superuser |
| `anon` | 否 | PostgREST 匿名角色 |
| `authenticated` | 否 | PostgREST 已认证用户角色 |
| `project_admin` | 否 | 服务密钥语义的管理角色，带 `BYPASSRLS` |

`files/insforge.sql` 会设置 PostgREST 角色权限、默认权限、`project_admin` 的 ACL，以及 `public.reload_postgrest_schema()` 辅助函数。该函数会执行：

```sql
NOTIFY pgrst, 'reload schema';
```

用于通知 PostgREST 重新加载 schema。

InsForge 上游的 PostgreSQL 镜像会预置 `insforge_pg_utils`。Pigsty 当前模板没有依赖这个扩展包，而是使用 Pigsty 已提供的 `pgcrypto`、`http`、`pg_cron`，并让 InsForge 应用迁移负责运行时 schema。

------

## 服务端口与持久化

默认 Docker Compose 服务如下：

| 服务 | 容器 | 宿主机端口 | 说明 |
|------|------|------------|------|
| InsForge App | `insforge` | `7130` | Dashboard 与主 API |
| PostgREST | `insforge-postgrest` | `5430` | 自动生成 REST API |
| Deno Runtime | `insforge-deno` | `7133` | 边缘函数运行时 |

默认 Docker 卷如下：

| 卷 | 挂载点 | 说明 |
|----|--------|------|
| `storage-data` | `/insforge-storage` | 本地文件存储 |
| `insforge-logs` | `/insforge-logs` | 应用日志 |
| `deno_cache` | `/deno-dir` | Deno 模块缓存 |

数据库连接默认来自 Docker 容器到 Pigsty 节点 `10.10.10.10:5432`。模板的 HBA 规则允许 `172.16.0.0/12`，覆盖 Docker 默认 bridge 与常见自定义 bridge 地址段。

------

## 域名与入口

模板默认在 `infra_portal` 中增加 InsForge 入口：

```yaml
infra_portal:
  home    : { domain: i.pigsty }
  insforge:
    domain: isf.pigsty
    endpoint: "10.10.10.10:7130"
    websocket: true
    certbot: isf.pigsty
```

如果您使用真实域名，例如 `insforge.example.com`，可以批量替换：

```bash
sed -ie 's/isf.pigsty/insforge.example.com/g' pigsty.yml
```

然后应用 Nginx 入口配置：

```bash
./infra.yml -t nginx
```

如需申请 HTTPS 证书，请先确保域名解析到当前节点，再在 `infra_portal.insforge` 中加入或修改 `certbot`：

```yaml
insforge:
  domain: insforge.example.com
  endpoint: "10.10.10.10:7130"
  websocket: true
  certbot: insforge.example.com
```

随后执行：

```bash
make cert
./infra.yml -t nginx
```

------

## 运维命令

InsForge 安装后位于 `/opt/insforge`，常用命令如下：

```bash
cd /opt/insforge

make up       # 启动服务
make view     # 打印访问地址
make info     # 查看容器状态
make log      # 跟随日志
make restart  # 重启容器
make down     # 停止容器
make clean    # 删除已停止容器
make edit     # 编辑 .env
```

离线环境可以提前保存镜像：

```bash
cd /opt/insforge
make pull
make save
make tarball
```

默认产物位置：

- `/tmp/docker/insforge/postgrest.tgz`
- `/tmp/docker/insforge/insforge.tgz`
- `/tmp/docker/insforge/deno.tgz`
- `/tmp/insforge.tgz`

在目标机器上加载镜像：

```bash
cd /opt/insforge
make load
make up
```

------

## 数据与备份

InsForge 的状态分为两类：

- 业务数据、用户、项目元数据、权限等：存放在 Pigsty PostgreSQL 数据库 `insforge` 中。
- 本地文件与日志：存放在 Docker 卷 `storage-data` 与 `insforge-logs` 中。

模板默认配置每日凌晨 1 点执行一次 PostgreSQL 全量备份：

```yaml
pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ]
```

部署后建议检查备份状态：

```bash
pig pb info
```

如果您将文件存储配置为 S3 / MinIO，文件对象由对应对象存储系统承载；如果保持本地卷，需要另外纳入主机层备份策略。

------

## 排障

查看容器状态：

```bash
cd /opt/insforge
make info
```

查看日志：

```bash
sudo docker logs insforge
sudo docker logs insforge-postgrest
sudo docker logs insforge-deno
```

检查 PostgreSQL 是否能从容器访问：

```bash
sudo docker exec insforge-postgrest bash -c '</dev/tcp/10.10.10.10/5432'
```

检查 HBA 规则是否包含 Docker 网段：

```bash
sudo -iu postgres psql -d insforge -c "TABLE pg_hba_file_rules;"
```

检查角色是否存在：

```bash
sudo -iu postgres psql -d insforge -c "SELECT rolname, rolcanlogin, rolbypassrls FROM pg_roles WHERE rolname IN ('anon','authenticated','project_admin');"
```

检查端口占用：

```bash
ss -tlnp | grep -E '7130|7133|5430'
```

常见问题：

- 无法登录：确认 `ROOT_ADMIN_USERNAME` / `ROOT_ADMIN_PASSWORD` 是否已被模板写入 `/opt/insforge/.env`，并检查 `insforge` 容器日志。
- PostgREST 启动失败：确认 `anon`、`authenticated`、`project_admin` 角色存在，并确认 `JWT_SECRET` 与 InsForge App 一致。
- 数据库连接失败：确认 `POSTGRES_HOST`、`POSTGRES_PORT`、`POSTGRES_PASSWORD` 与 `pg_users` 中的配置一致，并检查 HBA 是否允许 Docker 网段。
- 上传或下载文件异常：如果使用 S3 / MinIO，检查 `AWS_S3_BUCKET`、`S3_ENDPOINT_URL`、`S3_FORCE_PATH_STYLE` 与访问密钥配置。

------

## 参考

- InsForge 项目： https://github.com/InsForge/InsForge
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/insforge.yml
- Docker Compose： https://github.com/pgsty/pigsty/blob/main/app/insforge/docker-compose.yml
- 数据库 baseline： https://github.com/pgsty/pigsty/blob/main/files/insforge.sql

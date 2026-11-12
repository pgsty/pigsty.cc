---
title: Discourse：开源社区论坛
weight: 596
date: 2026-10-14
description: 使用 Pigsty 托管的 PostgreSQL 部署 Discourse 社区论坛，应用容器内嵌单实例 Redis。
module: [SOFTWARE]
categories: [参考]
---

[**Discourse**](https://www.discourse.org/) 是开源社区论坛软件。Pigsty 提供 `app/discourse` 模板：使用官方经典 [`discourse_docker`](https://github.com/discourse/discourse_docker) Launcher 在本地构建应用镜像，由 Docker Compose 管理运行；数据库使用 Pigsty 托管的外部 PostgreSQL，Redis 以单实例形式内嵌在应用容器中。

模板沿用 Pigsty 常规的 `app.yml` → 应用目录 → `.env` → `make` 工作流。`apps.discourse.dest` 为 `/data/app/discourse`，管理文件与持久化文件位于同一目录，便于整体迁移。部署时应使用同版本 Pigsty 中的 `app/discourse/`、`conf/app/discourse.yml` 与 `files/discourse.sql`。

| 项目 | 默认值 |
|------|--------|
| 论坛域名 | `ask.pigsty` |
| PostgreSQL | `10.10.10.10:5432`，数据库与用户均为 `discourse` |
| Redis | 应用容器内单实例，`127.0.0.1:6379` |
| 公网 HTTP/HTTPS | Pigsty Nginx，`80` / `443` |
| Nginx 上游 | `unix:/data/app/discourse/shared/nginx.http.sock` |
| 应用与管理文件 | `/data/app/discourse` |
{.wide .expand}

模板不创建 PostgreSQL 容器，Docker 也不发布 Redis 与 HTTP 端口。Pigsty Nginx 通过 Unix Socket 转发请求，避免与其自身的 80 端口冲突。Redis 只绑定容器回环地址，不与其他应用或 Pigsty 原生 Redis 服务共享。构建与运行使用同一个 Docker 默认 bridge，数据库可达性与来源地址保持一致。

------

## 快速开始

在运行兼容操作系统的 **全新主机** 上执行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap                    # 安装 Ansible
./configure -c app/discourse   # 使用 Discourse 配置模板
vi pigsty.yml                  # 修改密码、域名与 SMTP
./deploy.yml                   # 安装 Pigsty 与 PostgreSQL
./docker.yml                   # 安装 Docker 与 Compose
./app.yml -l discourse         # 构建并启动 Discourse
```

将 `ask.pigsty` 解析到 Nginx 所在主机后访问 `http://ask.pigsty`；模板通过 `node_etc_hosts` 在本机写入了该解析。`ask.pigsty` 仅用于本地测试，不是公开证书名称。

在 **已有 Pigsty 部署** 上，将 `discourse` 应用定义、`discourse` 用户与数据库、门户合并到当前配置清单，保留原有的集群名、主机、用户、数据库与其他门户。不要在线上清单上重新运行 `configure`，也不要重复初始化运行中的集群。核对合并后的配置，只创建新的数据库与用户，按需安装 `pgvector`，应用 HBA 与新门户，再启动应用。

------

## 配置模板

模板源文件为 [`conf/app/discourse.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/discourse.yml)，完整内容见 [`app/discourse` 配置模板](/docs/conf/discourse/)。`app.yml` 会把 `app/discourse` 复制到 `/data/app/discourse`，并用 `apps.discourse.conf` 覆盖其中的 `.env`。常见参数如下：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `DISCOURSE_DATA` | `/data/app/discourse` | 应用目录，与 `dest` 保持一致 |
| `DISCOURSE_HOSTNAME` | `ask.pigsty` | 论坛域名，只填写 DNS 名称，不带 URL 或端口 |
| `DISCOURSE_VERSION` | `f00f07d62728d646642cd2185cc077ad84a60fa8` | 固定的 Discourse 应用提交 SHA |
| `DISCOURSE_DOCKER_REF` | `0ba1841d589e77df3bc923774abca2720a320ec2` | 固定的经典 Launcher 与模板提交 SHA |
| `PG_HOST` / `PG_PORT` | `10.10.10.10` / `5432` | 直连 PostgreSQL 入口，不能使用 `localhost` |
| `PG_DBNAME` / `PG_USERNAME` | `discourse` / `discourse` | 数据库与属主 |
| `PG_PASSWORD` | `DBUser.Discourse` | 与 `pg_users` 中的密码保持一致，生产必须替换 |
| `UNICORN_WORKERS` | `2` | Web worker 数 |
| `UNICORN_SIDEKIQS` | `1` | Sidekiq 进程数 |
| `DISCOURSE_SIDEKIQ_WORKERS` | `5` | 后台任务线程数 |
| `DISCOURSE_DB_POOL` | `8` | 每个进程的数据库连接池，不是整个应用的总数 |
| `REDIS_MAX_MEMORY` | `512mb` | 内嵌 Redis 的 `maxmemory` |
| `DISCOURSE_FORCE_HTTPS` | `false` | 配置可信 HTTPS 门户后设为 `true` |
| `DISCOURSE_DEVELOPER_EMAILS` | `admin@example.com` | 管理员邮箱，部署前修改 |
| `DISCOURSE_SMTP_ADDRESS` / `DISCOURSE_SMTP_PORT` | `smtp.example.com` / `587` | SMTP 服务器，部署前修改 |
| `DISCOURSE_NOTIFICATION_EMAIL` | `noreply@example.com` | 通知发件地址，部署前修改 |
| `DISCOURSE_SKIP_EMAIL_SETUP` | `0` | 仅在隔离测试中设为 `1` |
| `DISCOURSE_IMAGE` | `local_discourse/discourse:latest` | Launcher 在本地构建的镜像名 |
{.wide .expand}

启动前配置 SMTP 与管理员邮箱。示例 SMTP 主机会故意让构建失败，替换后才能完成构建。仅在隔离测试中可设置 `DISCOURSE_SKIP_EMAIL_SETUP=1`，这不会提供可用的邮件功能。公开部署应使用真实域名与有效 TLS 证书，并设置 `DISCOURSE_FORCE_HTTPS=true`。

------

## 数据库要求

数据库需要 PostgreSQL **18**、UTF8 编码，以及 `hstore`、`pg_trgm`、`unaccent`、`vector` 扩展。Pigsty 以 DBA 身份创建这些扩展；`discourse` 属主执行应用迁移，不需要 SUPERUSER、CREATEDB 或共享管理角色，模板撤销了其 `dbrole_admin` 成员资格。`files/discourse.sql` 基线为该属主覆盖共享的默认 ACL。

```yaml
pg_users:
  - name: discourse
    password: DBUser.Discourse  # CHANGE ME, same as PG_PASSWORD above
    pgbouncer: false
    roles: [{ name: dbrole_admin, state: revoke }]
    comment: Discourse database owner
pg_databases:
  - name: discourse
    owner: discourse
    encoding: UTF8
    revokeconn: true
    pgbouncer: false
    baseline: discourse.sql
    extensions: [ hstore, pg_trgm, unaccent, vector ]
    comment: Discourse forum
pg_hba_rules:
  - { user: discourse ,db: discourse ,addr: 172.16.0.0/12 ,auth: pwd ,title: 'Discourse from local Docker bridges' }
```

请直连 PostgreSQL，不要使用 PgBouncer 事务池模式：Discourse 依赖 advisory lock。高可用部署时，改用只指向主库的直连 PostgreSQL 入口，并让备份入口指向同一写入端；固定节点的 `5432` 不会跟随故障切换。

默认的 Docker HBA 规则只允许该用户从 Docker bridge 地址访问该数据库。已有防火墙需放行应用 bridge 到数据库的访问；模板不修改防火墙规则，也不改动无关的演示路由。

------

## 镜像构建与运维

```bash
cd /data/app/discourse
make config      # 查看 Launcher 定义，密钥已脱敏
make up          # 首次构建，然后启动并等待 HTTP 健康检查
make view        # 打印访问地址与 Nginx 上游
make health      # 通过 Unix Socket 检查 /srv/status
make log         # 持续查看容器日志
make stop        # 停止容器
make start       # 启动先前构建且配置未变的镜像
make rebuild     # 停止、重新构建/迁移，然后启动
make clean       # 移除容器，保留文件与 PostgreSQL
make save        # 保存镜像到 /tmp/docker/discourse.tgz
make load        # 从 /tmp/docker/discourse.tgz 加载镜像
```

固定的 `DISCOURSE_DOCKER_REF` 同时选定经典 Launcher 及其模板，`DISCOURSE_VERSION` 默认同样固定为经过验证的确切应用提交，保证跨节点与跨时间的构建结果一致。本地构建记录与解析后的配置一致时，`make up` 复用已有镜像；更新固定提交（或显式改用浮动分支后刷新引用）请使用 `make rebuild`。升级时同时检查两个提交引用及所需的 PostgreSQL 主版本。

生成的 `launcher/containers/discourse.yml` 为 JSON 格式（同样是合法 YAML），权限为 `0600`。它使用 Redis、Web、限流与 socket 模板，不使用 PostgreSQL、SSL 或 Let's Encrypt 模板。应用镜像在本地构建，不使用实验性的预构建镜像 `discourse/discourse`。

构建会在 bootstrap **之前** 停止旧应用，因为 bootstrap 也会在共享数据目录上启动 Redis。不要针对正在使用的 `shared/redis_data` 引导另一个实例，不要同时启动两份本应用，也不要在这种内嵌 Redis 布局下使用 Launcher V2 的外部数据库自动重建。构建失败后旧应用保持停止状态，先排查并解决错误，再考虑针对可能已迁移的数据库启动镜像。

构建需要 Linux、Docker、Compose v2.20+、Git 与 Python 3。Launcher 支持 x86-64；上游将 ARM64 支持描述为实验性。首次构建需要访问 Docker Hub、GitHub、gems 与前端依赖，并预留临时的 CPU、内存与磁盘余量。默认配置为 2 个 Web worker、1 个 Sidekiq 进程、5 个任务线程，每个进程的连接池为 8。8 GiB 主机可以与 Pigsty 一起运行小型论坛，但需为监控与构建预留空间；如需更多维护余量，建议使用 16 GiB。

------

## 持久化数据与备份

```text
/data/app/discourse/
├── launcher/                      # 固定的上游源码与私有应用定义
├── .build.json                    # 配置指纹、镜像 ID 与确切源码提交
└── shared/
    ├── uploads/                   # 原始文件、附件与派生图片
    ├── redis_data/                # RDB / 完整的 AOF 文件集
    ├── backups/default/           # Discourse 应用归档
    ├── log/                       # Rails、Sidekiq、Redis 与系统日志
    ├── state/                     # logrotate / anacron 状态
    └── tmp/                       # 备份与恢复工作目录
```

Redis 同时保存后台队列与缓存，配置为 `maxmemory 512mb`、`noeviction`、AOF `everysec` 并保留上游 RDB 快照，不是可以随意丢弃的缓存。内存上限并不限制总 RSS 或重写峰值，请监控内存、任务延迟、持久化失败与磁盘用量。

PostgreSQL 通过 Pigsty/pgBackRest 备份；另外创建包含上传文件的 Discourse 归档，并保留一份独立的异机副本。在线复制单个 `.aof` 文件不是多段 AOF 的有效备份，应使用稳定的 RDB 或一致的完整文件集。隔离恢复测试需要独立的数据库、Redis 与 `shared` 目录，并关闭外发邮件：Discourse 的恢复过程会清空 Redis 与队列。

默认使用本地上传。核对端点与存储桶的 DNS、TLS、CORS 及私有上传权限后，可再配置 MinIO/Silo/S3。除非显式配置，S3 上传不包含在归档中，需要单独备份这些对象。

------

## 迁移应用

1. 记录正在运行的镜像 ID 与源码版本，并备份数据库。
2. 停止旧应用，确认所有 Web、Sidekiq 与 Redis 进程均已退出。
3. 通过私有通道复制 `/data/app/discourse`，保留属主与权限，排除临时的 Nginx socket。
4. 使用 `make save` / `make load` 导出并加载同一镜像。`/tmp/docker/discourse.tgz` 属于私有文件：Launcher 构建的镜像包含应用配置，不要放入 Git 或公共镜像仓库。
5. 在新主机上配置数据库连通性与 Nginx socket 上游。在配置与镜像均不变的情况下使用 `make start`，验证登录、发帖、上传、邮件、后台任务与备份后，再切换公网代理；旧应用保持停止。

如果数据库入口或其他配置发生变化，请保持 `DISCOURSE_VERSION` 与 `DISCOURSE_DOCKER_REF` 与旧构建记录中的确切提交一致，再用 `make up` 重新构建同一应用版本，避免在迁移的同时夹带应用版本升级。

PostgreSQL 保持不动时，此次迁移无需执行 Discourse 恢复。迁移或下线数据库主机属于单独的 Pigsty 切换或恢复操作。切勿把在线 PGDATA 当作应用目录的一部分复制。

------

## 已知限制

- 重建失败后，旧的 `.build.json` 仍可能让 `make up` 或 `make start` 用旧镜像连接可能已迁移的数据库。在核对数据库模式与镜像状态之前，不要用这两个命令从失败的 bootstrap 中恢复。依赖此流程进行生产升级前，需要先修复构建记录失效问题。
- `files/discourse.sql` 假定数据库与属主均名为 `discourse`。请保留这两个名称，或同步修改 SQL、配置清单与 `.env`。部署后确认基线执行成功：数据库剧本目前会忽略基线错误，可能遗留共享角色授权。
- 默认的 `oltp` Tuned 配置设置 `vm.overcommit_memory=0`，而 Redis 持久化需要 `1`。请配置持久化的覆盖，并在重启 Tuned 或主机后复查；应用模板尚未处理此项。

------

## 验证记录

2026-10-14，在隔离的 Linux ARM64 Docker 环境中，使用固定的 Launcher 构建应用提交 `3279b67fba94db51b9a545b90f8eaf4352cae0bb`，连接外部 PostgreSQL 18.6。数据库模式迁移、初始安装页与健康检查端点均通过渲染后的 Pigsty Nginx socket 门户验证；Redis 以单进程、回环绑定、AOF、`noeviction` 与 512 MB 上限运行，测试键在删除并重建应用容器后仍然保留。数据库基线通过了重复执行测试，并拒绝共享角色访问属主新建的对象。

同日的原生 x86-64 部署使用相同的应用与 Launcher 提交，连接 Pigsty PostgreSQL 18.6，验证了公网 HTTPS、中文资源、管理员登录与 API、Redis 持久化配置，以及应用的 Ruby SMTP TLS/认证检查。应用归档包含 SQL 与本地上传，异机副本的 SHA-256 一致；重复执行 `make up` 时复用了已构建镜像。

真实收件、完整的普通用户发帖与上传流程、负载容量、备份恢复与故障切换尚未验证。

------

## 参考

- [官方 Docker 部署与模板](https://github.com/discourse/discourse_docker)
- [使用独立 PostgreSQL 服务器](https://meta.discourse.org/t/configure-discourse-to-use-a-separate-postgresql-server/46375)
- [与 Nginx 共存及 Unix Socket](https://meta.discourse.org/t/run-other-websites-on-the-same-machine-as-discourse/17247)
- [Sidekiq Redis 持久化与内存策略](https://github.com/sidekiq/sidekiq/wiki/Using-Redis)
- [Pigsty 应用模板](https://github.com/pgsty/pigsty/tree/main/app/discourse)
- [Pigsty Nginx 入口](/docs/infra/admin/portal/)

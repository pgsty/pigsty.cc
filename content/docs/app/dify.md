---
title: Dify：AI 工作流平台
weight: 565
date: 2024-06-23
description: 如何使用 Pigsty 自建 AI Workflow LLMOps 平台 —— Dify，并使用外部 PostgreSQL，PGVector，Redis 作为存储？
module: [SOFTWARE]
categories: [参考]
---

[**Dify**](https://dify.ai/zh) 是一个生成式 AI 应用创新引擎和开源 LLM 应用开发平台。它提供从 Agent 构建到 AI 工作流编排、RAG 检索和模型管理的能力，帮助用户轻松构建和运营生成式 AI 原生应用程序。

Pigsty 提供对自托管 Dify 的支持，允许您使用单个命令部署 Dify，同时将关键状态存储在外部管理的 PostgreSQL 中。您可以在同一个 PostgreSQL 实例中使用 pgvector 作为向量数据库，进一步简化部署。

- [快速开始](#快速开始)
- [为什么要自托管](#为什么要自托管)
- [安装](#安装)
- [配置](#配置)
- [检查清单](#检查清单)
- [域名和 SSL](#域名和-ssl)
- [文件备份](#文件备份)

> `app/dify` 模板最后验证的 Dify 版本：`v1.15.0`（2026-07-09）。模板包含一份针对 PostgreSQL 18 内置 `uuidv7()` 的 Dify 迁移脚本兼容补丁。

------

## 快速开始

在运行 [**兼容操作系统**](/docs/deploy/prepare) 的全新 Linux x86 / ARM 服务器上执行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap                # 安装 Pigsty 依赖
./configure -c app/dify    # 使用 Dify 配置模板
vi pigsty.yml              # 编辑密码、域名、密钥等

./deploy.yml               # 安装 Pigsty
./docker.yml               # 安装 Docker 和 Compose
./app.yml                  # 安装 Dify
```

Dify 默认监听端口 `5001`。您可以通过浏览器访问 `http://<ip>:5001` 并设置您的初始用户凭据来登录。

Dify 启动后，您可以安装各种扩展、配置系统模型并开始使用它！

------

## 为什么要自托管

自托管 Dify 有很多原因，但主要动机是数据安全。Dify 提供的 DockerCompose 模板使用基本的默认数据库镜像，缺乏企业级功能，如高可用性、灾难恢复、监控、IaC 和 PITR 能力。

Pigsty 为 Dify 提供声明式部署，并可使用镜像解决中国地区的镜像访问问题。模板将 PostgreSQL 与 pgvector 交给 Pigsty 管理，
部署 Compose Redis、VictoriaMetrics/Grafana 监控与 Nginx 反向代理；满足公网 DNS、端口和 Certbot 配置后，还可申请 Let's Encrypt 证书。
文件默认保存到 `DIFY_DATA`（`/data/dify`），也可按需接入 Silo/S3 对象存储。

当前模板把 PostgreSQL/pgvector 放在 Pigsty 管理的外部数据库中，并把 API 文件与插件数据定向到 `DIFY_DATA`（默认 `/data/dify`）。但 Compose 内置 Redis 的数据仍位于 `/opt/dify/volumes/redis/data`，Sandbox 依赖与 Certbot 数据也位于 `/opt/dify/volumes/`，因此整套应用并非完全无状态，备份时不能只保留数据库。

------

## 安装

让我们从单节点 Dify 部署开始。我们稍后将介绍生产高可用部署方法。

首先，使用 Pigsty 的 [标准安装过程](/docs/setup/install) 安装 Dify 所需的 PostgreSQL 实例：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap               # 准备 Pigsty 依赖
./configure -c app/dify   # 使用 Dify 应用程序模板
vi pigsty.yml             # 编辑配置文件，修改域名和密码
./deploy.yml              # 安装 Pigsty 和各种数据库
```

当您使用 `./configure -c app/dify` 命令时，Pigsty 会根据 [`conf/app/dify.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/dify.yml) 模板和您当前的环境自动生成配置文件。
您应该根据实际需要在生成的 `pigsty.yml` 配置文件中修改密码、域名和其他相关参数，然后使用 `./deploy.yml` 执行标准安装过程。

接下来，运行 [`docker.yml`](https://github.com/pgsty/pigsty/blob/main/docker.yml) 安装 Docker 和 Docker Compose，然后使用 [`app.yml`](https://github.com/pgsty/pigsty/blob/main/app.yml) 完成 Dify 部署：

```bash
./docker.yml -l dify      # 在 Dify 节点安装 Docker 和 Docker Compose
./app.yml -l dify         # 使用 Docker 部署 Dify 应用组件
```

您可以在本地网络上通过 `http://<your_ip_address>:5001` 访问 Dify Web 管理界面。

首次登录时会提示设置默认用户名、邮箱和密码。

您也可以使用本地解析的占位符域名 `dify.pigsty`，或按照下面的配置使用带有 HTTPS 证书的真实域名。

------

## 配置

当您使用 `./configure -c app/dify` 命令进行配置时，Pigsty 会根据 [`conf/app/dify.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/dify.yml) 模板和当前环境生成配置文件。以下快照与 v4.5.0 源模板同步：

{{< include file="/docs/conf/yaml/app/dify.yml" code=true lang="yaml" >}}

------

## 检查清单

以下是您需要关注的配置项检查清单：

- 硬件/软件：[准备所需的机器资源](/docs/deploy/prepare)：Linux `x86_64/arm64` 服务器，[主流 Linux 操作系统](/docs/deploy/prepare) 的全新安装
- 网络/权限：[SSH](/docs/deploy/admin#ssh) 免密登录访问权限，用户具有 [免密 sudo 权限](/docs/deploy/admin#sudo)
- 确保机器在内网中有静态 IPv4 网络地址且可访问互联网
- 如果通过公网访问，确保您有可用的域名指向当前节点的 **公网 IP 地址**
- 确保使用 `app/dify` 配置模板并根据需要修改参数
  - `configure -c app/dify`，并输入节点的内网主 IP 地址，或通过 `-i <primary_ip>` 命令行参数指定
- 在生产环境中，您是否已经修改全部示例密码、应用密钥与数据库凭据？【必需】
  - [`grafana_admin_password`](/docs/infra/param/#grafana_admin_password)：`pigsty`，Grafana 管理员密码
  - [`pg_admin_password`](/docs/pgsql/param/#pg_admin_password)：`DBUser.DBA`，PG 超级用户密码
  - [`pg_monitor_password`](/docs/pgsql/param/#pg_monitor_password)：`DBUser.Monitor`，PG 监控用户密码
  - [`pg_replication_password`](/docs/pgsql/param/#pg_replication_password)：`DBUser.Replicator`，PG 复制用户密码
  - [`patroni_password`](/docs/pgsql/param/#patroni_password)：`Patroni.API`，Patroni HA 组件密码
  - [`haproxy_admin_password`](/docs/node/param/#haproxy_admin_password)：`pigsty`，负载均衡器管理密码
- 您是否修改了 PostgreSQL 集群业务用户密码和使用这些密码的应用程序配置？
  - 默认用户名 `dify` 和密码 `difyai123456` 是 Pigsty 为 Dify 生成的，请根据实际情况修改
  - 在 Dify 的配置块中，请相应修改 `DB_USERNAME`、`DB_PASSWORD`、`PGVECTOR_USER`、`PGVECTOR_PASSWORD` 等参数
- 您是否修改了 Dify 的默认加密密钥？
  - 您可以使用 `openssl rand -base64 42` 随机生成密码字符串并填入 `SECRET_KEY` 参数
- 您是否修改了 Dify 使用的域名？
  - 将占位符域名 `dify.pigsty` 替换为您的实际域名，例如 `dify.pigsty.cc`
  - 您可以使用 `sed -ie 's/dify.pigsty/dify.pigsty.cc/g' pigsty.yml` 修改 Dify 的域名

------

## 域名和 SSL

如果您想使用带有 HTTPS 证书的真实域名，需要在 `pigsty.yml` 配置文件中修改：

- [`infra_portal`](/docs/infra/param/#infra_portal) 参数的 `dify` 域名
- 最好指定一个邮箱地址 [`certbot_email`](/docs/infra/param/#certbot_email) 用于接收证书过期通知
- 配置 Dify 的 `NGINX_SERVER_NAME` 参数来指定您的实际域名

```yaml
all:
  children:                            # 集群定义
    dify:                              # Dify 组
      vars:                            # Dify 组变量
        apps:                          # 应用程序配置
          dify:                        # Dify 应用程序定义
            conf:                      # Dify 应用程序配置
              NGINX_SERVER_NAME: dify.pigsty

  vars:                                # 全局参数
    #certbot_sign: true                # 使用 Certbot 申请免费 HTTPS 证书
    certbot_email: your@email.com      # 证书申请邮箱，用于过期通知，可选
    infra_portal:                      # 配置 Nginx 服务器
      dify:                            # Dify 服务器定义
        domain: dify.pigsty            # 请在此处替换为您自己的域名！
        endpoint: "10.10.10.10:5001"   # 请在此处指定 Dify 的 IP 和端口（默认自动配置）
        websocket: true                # Dify 需要启用 websocket
        certbot: dify.pigsty           # 指定 Certbot 证书名称
```

使用以下命令申请 Nginx 证书：

```bash
# 在明确限定的 infra 组上申请并加载证书
./infra.yml -l infra -t nginx_certbot,nginx_reload -e certbot_sign=true
```

执行 `app.yml` 剧本重新部署 Dify 服务以使 `NGINX_SERVER_NAME` 配置生效。

```bash
./app.yml -l dify -t app_config,app_launch
```

------

## 文件备份

您可以使用 `restic` 备份 Dify 的文件状态。当前模板至少需要保留 `/data/dify`、`/opt/dify/.env` 与 `/opt/dify/volumes/`；其中后者包含 Compose Redis、Sandbox 依赖和可能存在的 Certbot 数据。PostgreSQL 中的 Dify 数据仍应使用 Pigsty/pgBackRest 单独备份。

```bash
export RESTIC_REPOSITORY=/data/backups/dify   # 指定 dify 备份目录
export RESTIC_PASSWORD=some-strong-password   # 指定备份加密密码
mkdir -p ${RESTIC_REPOSITORY}                 # 创建 dify 备份目录
restic init
```

创建 Restic 备份仓库后，您可以使用以下命令备份 Dify：

```bash
export RESTIC_REPOSITORY=/data/backups/dify   # 指定 dify 备份目录
export RESTIC_PASSWORD=some-strong-password   # 指定备份加密密码

restic backup /data/dify /opt/dify/.env /opt/dify/volumes
restic snapshots                              # 查看备份快照列表
restic restore 0b11f778 --target /tmp/dify-restore  # 先恢复到临时目录，核对后再回填
restic check                                  # 定期检查仓库完整性
```

另一种方案是把 `/data/dify` 放在由 [`JUICE`](/docs/juice/) 模块管理的共享文件系统上。文件数据可以位于 Silo/S3，也可以位于 PostgreSQL 的 `jfs_blob` 表；后者并不是“大对象”存储。

若使用 PostgreSQL 同时保存 JuiceFS 元数据和文件数据，请先在 `pg_databases` 中声明并创建专用数据库和最小权限用户，再在 Dify 节点上声明实例。以下示例中的密码只是占位符，不能直接用于生产环境：

```yaml
pg_databases:
  - { name: dify_fs, owner: dify, comment: JuiceFS metadata and data for Dify }

juice_instances:
  dify:
    path: /data/dify
    meta: postgres://dify:<password>@10.10.10.10:5432/dify_fs
    data: --storage postgres --bucket 10.10.10.10:5432/dify_fs --access-key dify --secret-key <password>
    owner: 1001
    group: 1001
    port: 9567
```

先分别对数据库创建与 JUICE 部署做检查，确认精确目标后再执行实际 playbook：

```bash
./pgsql-db.yml -l pg-meta -e dbname=dify_fs
./juice.yml -l dify -e fsname=dify
```

数据库创建、文件系统首次格式化和挂载都会改变目标环境，实际执行前必须确认备份、数据库名和主机组。部署后再启动 Dify，参见 [JUICE 配置](/docs/juice/config/) 与 [PITR 一致性边界](/docs/juice/admin/#pitr-恢复)。直接挂载到已有非空的 `/data/dify` 之前，还必须先停止 Dify 并规划现有文件迁移。

------

## 参考

[Dify 自托管常见问题](https://docs.dify.ai/learn-more/faq/install-faq)

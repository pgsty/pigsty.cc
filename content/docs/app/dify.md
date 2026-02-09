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

> 当前 Pigsty v4.0 支持 Dify 版本：v1.8.1

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

Pigsty 为 Dify 优雅地解决了这些问题，基于配置文件使用单个命令部署所有组件，并使用镜像解决中国地区访问挑战。这使得 Dify 部署和交付变得非常顺畅。它一次性处理 PostgreSQL 主数据库、PGVector 向量数据库、MinIO 对象存储、Redis、Prometheus 监控、Grafana 可视化、Nginx 反向代理和免费 HTTPS 证书。

Pigsty 确保所有 Dify 状态都存储在外部管理的服务中，包括 PostgreSQL 中的元数据和文件系统中的其他数据。通过 Docker Compose 启动的 Dify 实例成为可以随时销毁和重建的无状态应用程序，大大简化了运维。

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
./docker.yml              # 安装 Docker 和 Docker Compose
./app.yml                 # 使用 Docker 部署 Dify 无状态组件
```

您可以在本地网络上通过 `http://<your_ip_address>:5001` 访问 Dify Web 管理界面。

首次登录时会提示设置默认用户名、邮箱和密码。

您也可以使用本地解析的占位符域名 `dify.pigsty`，或按照下面的配置使用带有 HTTPS 证书的真实域名。

------

## 配置

当您使用 `./configure -c app/dify` 命令进行配置时，Pigsty 会根据 [`conf/app/dify.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/dify.yml) 模板和您当前的环境自动生成配置文件。以下是默认配置的详细说明：

```yaml
all:
  children:

    # Dify 应用程序
    dify:
      hosts: { 10.10.10.10: {} }
      vars:
        app: dify   # 指定要安装的应用程序名称（在 apps 中）
        apps:       # 定义所有应用程序
          dify:     # 应用程序名称，应该有对应的 ~/pigsty/app/dify 文件夹
            file:   # 要创建的数据目录
              - { path: /data/dify ,state: directory ,mode: 0755 }
            conf:   # 覆盖 /opt/dify/.env 配置文件

              # 更改域名、镜像、代理、密钥
              NGINX_SERVER_NAME: dify.pigsty
              # 用于签名和加密的密钥，使用 `openssl rand -base64 42` 生成（务必更改！）
              SECRET_KEY: sk-somerandomkey
              # 默认使用端口 5001 暴露 DIFY nginx 服务
              DIFY_PORT: 5001
              # dify 文件存储位置？默认是 ./volume，我们将使用上面创建的另一个卷
              DIFY_DATA: /data/dify

              # 代理和镜像设置
              #PIP_MIRROR_URL: https://pypi.tuna.tsinghua.edu.cn/simple
              #SANDBOX_HTTP_PROXY: http://10.10.10.10:12345
              #SANDBOX_HTTPS_PROXY: http://10.10.10.10:12345

              # 数据库凭据
              DB_USERNAME: dify
              DB_PASSWORD: difyai123456
              DB_HOST: 10.10.10.10
              DB_PORT: 5432
              DB_DATABASE: dify
              VECTOR_STORE: pgvector
              PGVECTOR_HOST: 10.10.10.10
              PGVECTOR_PORT: 5432
              PGVECTOR_USER: dify
              PGVECTOR_PASSWORD: difyai123456
              PGVECTOR_DATABASE: dify
              PGVECTOR_MIN_CONNECTION: 2
              PGVECTOR_MAX_CONNECTION: 10

    pg-meta:
      hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
      vars:
        pg_cluster: pg-meta
        pg_users:
          - { name: dify ,password: difyai123456 ,pgbouncer: true ,roles: [ dbrole_admin ] ,superuser: true ,comment: dify superuser }
        pg_databases:
          - { name: dify        ,owner: dify ,revokeconn: true ,comment: dify main database  }
          - { name: dify_plugin ,owner: dify ,revokeconn: true ,comment: dify plugin_daemon database }
        pg_hba_rules:
          - { user: dify ,db: all ,addr: 172.17.0.0/16  ,auth: pwd ,title: 'allow dify access from local docker network' }
        node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ] # 每天凌晨 1 点进行完整备份

    infra: { hosts: { 10.10.10.10: { infra_seq: 1 } } }
    etcd:  { hosts: { 10.10.10.10: { etcd_seq: 1 } }, vars: { etcd_cluster: etcd } }
    #minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio } }

  vars:                               # 全局变量
    version: v4.0.0                   # pigsty 版本字符串
    admin_ip: 10.10.10.10             # 管理节点 ip 地址
    region: default                   # 上游镜像区域：default|china|europe
    node_tune: oltp                   # 节点调优规格：oltp,olap,tiny,crit
    pg_conf: oltp.yml                 # pgsql 调优规格：{oltp,olap,tiny,crit}.yml

    docker_enabled: true              # 在应用程序组上启用 docker
    #docker_registry_mirrors: ["https://docker.1panel.live","https://docker.1ms.run","https://docker.xuanyuan.me","https://registry-1.docker.io"]

    proxy_env:                        # 下载包和拉取 docker 镜像时的全局代理环境
      no_proxy: "localhost,127.0.0.1,10.0.0.0/8,192.168.0.0/16,*.pigsty,*.aliyun.com,mirrors.*,*.tsinghua.edu.cn"
      #http_proxy:  127.0.0.1:12345   # 在此处添加代理环境以下载包或拉取镜像
      #https_proxy: 127.0.0.1:12345   # 通常代理格式为 http://user:pass@proxy.xxx.com
      #all_proxy:   127.0.0.1:12345

    infra_portal:                      # 域名和上游服务器
      home  : { domain: i.pigsty }
      #minio : { domain: m.pigsty ,endpoint: "${admin_ip}:9001" ,scheme: https ,websocket: true }
      dify:                            # dify 的 nginx 服务器配置
        domain: dify.pigsty            # 替换为您自己的域名！
        endpoint: "10.10.10.10:5001"   # dify 服务端点：IP:PORT
        websocket: true                # 添加 websocket 支持
        certbot: dify.pigsty           # certbot 证书名称，使用 `make cert` 申请

    repo_enabled: false
    node_repo_modules: node,infra,pgsql
    pg_version: 18

    #----------------------------------#
    # 凭据：务必更改这些密码！
    #----------------------------------#
    grafana_admin_password: pigsty
    grafana_view_password: DBUser.Viewer
    pg_admin_password: DBUser.DBA
    pg_monitor_password: DBUser.Monitor
    pg_replication_password: DBUser.Replicator
    patroni_password: Patroni.API
    haproxy_admin_password: pigsty
    minio_secret_key: S3User.MinIO
    etcd_root_password: Etcd.Root
```

------

## 检查清单

以下是您需要关注的配置项检查清单：

- 硬件/软件：[准备所需的机器资源](/docs/deploy/prepare)：Linux `x86_64/arm64` 服务器，[主流 Linux 操作系统](/docs/deploy/prepare) 的全新安装
- 网络/权限：[SSH](/docs/deploy/admin#ssh) 免密登录访问权限，用户具有 [免密 sudo 权限](/docs/deploy/admin#sudo)
- 确保机器在内网中有静态 IPv4 网络地址且可访问互联网
- 如果通过公网访问，确保您有可用的域名指向当前节点的 **公网 IP 地址**
- 确保使用 `app/dify` 配置模板并根据需要修改参数
  - `configure -c app/dify`，并输入节点的内网主 IP 地址，或通过 `-i <primary_ip>` 命令行参数指定
- 您是否修改了所有密码相关的配置参数？【可选】
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
# 申请证书，也可以手动执行 /etc/nginx/sign-cert 脚本
make cert

# 上述 Makefile 快捷命令实际执行以下剧本任务：
./infra.yml -t nginx_certbot,nginx_reload -e certbot_sign=true
```

执行 `app.yml` 剧本重新部署 Dify 服务以使 `NGINX_SERVER_NAME` 配置生效。

```bash
./app.yml
```

------

## 文件备份

您可以使用 `restic` 备份 Dify 的文件存储（默认位于 `/data/dify` 目录），使用以下命令进行备份：

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

restic backup /data/dify                      # 将 /dify 数据目录备份到仓库
restic snapshots                              # 查看备份快照列表
restic restore -t /data/dify 0b11f778         # 将快照 xxxxxx 恢复到 /data/dify
restic check                                  # 定期检查仓库完整性
```

另一种更可靠的方法是使用 JuiceFS 将 MinIO 对象存储挂载到 `/data/dify` 目录，这样您就可以使用 MinIO/S3 存储文件状态。

如果您想将所有数据存储在 PostgreSQL 中，请考虑"使用 JuiceFS 将文件系统数据存储在 PostgreSQL 中"

例如，您可以创建另一个 `dify_fs` 数据库并将其用作 JuiceFS 的元数据存储：

```bash
METAURL=postgres://dify:difyai123456@:5432/dify_fs
OPTIONS=(
  --storage postgres
  --bucket :5432/dify_fs
  --access-key dify
  --secret-key difyai123456
  ${METAURL}
  jfs
)
juicefs format "${OPTIONS[@]}"         # 创建 PG 文件系统
juicefs mount ${METAURL} /data/dify -d # 后台挂载到 /data/dify 目录
juicefs bench /data/dify               # 测试性能
juicefs umount /data/dify              # 停止挂载
```

------

## 参考

[Dify 自托管常见问题](https://docs.dify.ai/learn-more/faq/install-faq)

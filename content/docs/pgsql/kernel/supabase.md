---
title: Supabase
weight: 2102
date: 2024-06-23
description: 如何使用Pigsty自建Supabase，一键拉起开源Firebase替代，后端全栈全家桶。
icon: fas fa-bolt
module: [SOFTWARE]
categories: [概念]
---

> [Supabase](https://supabase.com/) —— Build in a weekend, Scale to millions

Supabase 是一个开源的 Firebase 替代，对 PostgreSQL 进行了封装，并提供了认证，开箱即用的 API，边缘函数，实时订阅，对象存储，向量嵌入能力。
这是一个低代码的一站式后端平台，能让你几乎告别大部分后端开发的工作，只需要懂数据库设计与前端即可快速出活！

Supabase 的口号是：“**花个周末写写，随便扩容至百万**”。诚然，在小微规模（4c8g）内的 Supabase [极有性价比](https://supabase.com/pricing)，堪称赛博菩萨。
—— 但当你真的增长到百万用户时 —— 确实应该认真考虑托管自建 Supabase 了 —— 无论是出于功能，性能，还是成本上的考虑。

Pigsty 为您提供完整的 Supabase 一键自建方案。自建的 Supabase 可以享受完整的 PostgreSQL 监控，IaC，PITR 与高可用，
而且相比 Supabase 云服务，提供了多达 [**440**](https://pgext.cloud) 个开箱即用的 PostgreSQL 扩展，并能够更充分地利用现代硬件的性能与成本优势。

完整自建教程，请参考：《[**Supabase自建手册**](/blog/db/supabase)》


-------

## 快速上手

Pigsty 默认提供的 [`supa.yml`](https://github.com/Vonng/pigsty/blob/main/conf/supa.yml) 配置模板定义了一套单节点 Supabase。

首先，使用 Pigsty [标准安装流程](/docs/setup/install) 安装 Supabase 所需的 MinIO 与 PostgreSQL 实例：

```bash
 curl -fsSL https://repo.pigsty.io/get | bash
./bootstrap          # 环境检查，安装依赖
./configure -c supa  # 重要：请在配置文件中修改密码等关键信息！
./deploy.yml         # 安装 Pigsty，拉起 PGSQL 与 MINIO！
```

请在部署 Supabase 前，根据您的实际情况，修改 `pigsty.yml` 配置文件中[关于 Supabase 的参数](#配置细节)（主要是密码！）

然后，运行 [`supabase.yml`](https://github.com/Vonng/pigsty/blob/main/supabase.yml) 完成剩余的工作，拉起 Supabase 容器

```bash
./supabase.yml       # 安装 Docker 并拉起 Supabase 无状态部分！
```

中国区域用户注意，请您配置合适的 Docker 镜像站点或代理服务器绕过 GFW 以拉取 DockerHub 镜像。
对于 [专业订阅](/docs/about/service) ，我们提供在没有互联网访问的情况下，[离线安装](/docs/setup/offline) Pigsty 与 Supabase 的能力。

Pigsty 默认通过管理节点/INFRA节点上的 Nginx 对外暴露 Web 服务，您可以在本地添加 `supa.pigsty` 的 DNS 解析指向该节点，
然后通过浏览器访问 `https://supa.pigsty` 即可进入 Supabase Studio 管理界面。

> 默认用户名与密码：supabase / pigsty

[![asciicast](https://asciinema.org/a/692194.svg)](https://asciinema.org/a/692194)


-------

## 架构概览



Pigsty 以 Supabase 提供的 Docker Compose 模板为蓝本，提取了其中的无状态部分，由 Docker Compose 负责处理。而有状态的数据库和对象存储容器则替换为外部由 Pigsty 托管的 PostgreSQL 集群与 MinIO 服务。

> [Supabase: 使用 Docker 自建](https://supabase.com/docs/guides/self-hosting/docker)
 
经过改造后，Supabase 本体是无状态的，因此您可以随意运行，停止，甚至在同一套 PGSQL/MINIO 上同时运行多个无状态 Supabase 容器以实现扩容。

![](https://supabase.com/docs/_next/image?url=%2Fdocs%2Fimg%2Fsupabase-architecture--light.svg&w=1920&q=75&dpl=dpl_DvE3RFyspEh3ueQLYomwedpVK8e2)

Pigsty 默认使用本机上的单机 [PostgreSQL](/docs/pgsql) 实例作为 Supabase 的核心后端数据库。对于严肃的生产部署，我们建议使用 Pigsty 部署一套至少由三节点的 PG 高可用集群。或至少使用外部对象存储作为 PITR 备份仓库，提供兜底。

Pigsty 默认使用本机上的 [SNSD](/docs/minio/config#单机单盘) MinIO 服务作为文件存储。对于严肃的生产环境部署，您可以使用外部的 S3 兼容对象存储服务，或者使用其他由 Pigsty 独立部署的 [多机多盘](/docs/minio/config#多机多盘) MinIO 集群。


-------

## 配置细节

自建 Supabase 时，包含 Docker Compose 所需资源的目录 [`app/supabase`](https://github.com/Vonng/pigsty/tree/main/app/supabase) 会被整个拷贝到目标节点（默认为 `supabase` 分组）上的 `/opt/supabase`，并使用 `docker compose up -d` 在后台拉起。

所有配置参数都定义在 [`.env`](https://github.com/Vonng/pigsty/blob/main/app/supabase/.env) 文件与 [`docker-compose.yml`](https://github.com/Vonng/pigsty/blob/main/app/supabase/docker-compose.yml) 模板中。
但您通常不需要直接修改这两个模板，你可以在 `supa_config` 中指定 `.env` 中的参数，这些配置会自动覆盖或追加到最终的 `/opt/supabase/.env` 核心配置文件中。

这里最关键的参数是 `jwt_secret`，以及对应的 `anon_key` 与 `service_role_key`。对于严肃的生产使用，**请您务必参考[Supabase自建手册](https://supabase.com/docs/guides/self-hosting/docker#securing-your-services)中的说明与工具设置**。
如果您希望使用域名对外提供服务，您可以在 `site_url`， `api_external_url`，以及 `supabase_public_url` 中指定您的域名。

Pigsty 默认使用本机 MinIO，如果您希望使用 S3 或 MinIO 作为文件存储，您需要配置 `s3_bucket`，`s3_endpoint`，`s3_access_key`，`s3_secret_key` 等参数。

通常来说，您还需要使用一个外部的 SMTP 服务来发送邮件，邮件服务不建议自建，请考虑使用成熟的第三方服务，如 Mailchimp，Aliyun 邮件推送等。

对于中国大陆用户来说，我们建议您配置 [`docker_registry_mirrors`](/docs/docker/param#docker_registry_mirrors) 镜像站点，或使用 [`proxy_env`](/docs/infra/param#proxy_env) 指定可用的代理服务器翻墙，否则从 DockerHub 上拉取镜像可能会失败或极为缓慢！

```yaml
# launch supabase stateless part with docker compose:
# ./supabase.yml
supabase:
  hosts:
    10.10.10.10: { supa_seq: 1 }  # instance id
  vars:
    supa_cluster: supa            # cluster name
    docker_enabled: true          # enable docker

    # use these to pull docker images via proxy and mirror registries
    #docker_registry_mirrors: ['https://docker.xxxxx.io']
    #proxy_env:   # add [OPTIONAL] proxy env to /etc/docker/daemon.json configuration file
    #  no_proxy: "localhost,127.0.0.1,10.0.0.0/8,192.168.0.0/16,*.pigsty,*.aliyun.com,mirrors.*,*.myqcloud.com,*.tsinghua.edu.cn"
    #  #all_proxy: http://user:pass@host:port

    # these configuration entries will OVERWRITE or APPEND to /opt/supabase/.env file (src template: app/supabase/.env)
    # check https://github.com/Vonng/pigsty/blob/main/app/supabase/.env for default values
    supa_config:

      # IMPORTANT: CHANGE JWT_SECRET AND REGENERATE CREDENTIAL ACCORDING!!!!!!!!!!!
      # https://supabase.com/docs/guides/self-hosting/docker#securing-your-services
      jwt_secret: your-super-secret-jwt-token-with-at-least-32-characters-long
      anon_key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE
      service_role_key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJzZXJ2aWNlX3JvbGUiLAogICAgImlzcyI6ICJzdXBhYmFzZS1kZW1vIiwKICAgICJpYXQiOiAxNjQxNzY5MjAwLAogICAgImV4cCI6IDE3OTk1MzU2MDAKfQ.DaYlNEoUrrEn2Ig7tqibS-PHK5vgusbcbo7X36XVt4Q
      dashboard_username: supabase
      dashboard_password: pigsty

      # postgres connection string (use the correct ip and port)
      postgres_host: 10.10.10.10
      postgres_port: 5436             # access via the 'default' service, which always route to the primary postgres
      postgres_db: postgres
      postgres_password: DBUser.Supa  # password for supabase_admin and multiple supabase users

      # expose supabase via domain name
      site_url: http://supa.pigsty
      api_external_url: http://supa.pigsty
      supabase_public_url: http://supa.pigsty

      # if using s3/minio as file storage
      s3_bucket: supa
      s3_endpoint: https://sss.pigsty:9000
      s3_access_key: supabase
      s3_secret_key: S3User.Supabase
      s3_force_path_style: true
      s3_protocol: https
      s3_region: stub
      minio_domain_ip: 10.10.10.10  # sss.pigsty domain name will resolve to this ip statically

      # if using SMTP (optional)
      #smtp_admin_email: admin@example.com
      #smtp_host: supabase-mail
      #smtp_port: 2500
      #smtp_user: fake_mail_user
      #smtp_pass: fake_mail_password
      #smtp_sender_name: fake_sender
      #enable_anonymous_users: false
```


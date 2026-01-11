---
title: Odoo：自建开源 ERP
weight: 560
date: 2024-06-23
description: 如何拉起开箱即用的企业级应用全家桶 Odoo，并使用 Pigsty 管理其后端 PostgreSQL 数据库。
module: [SOFTWARE]
categories: [参考]
---

[Odoo](https://www.odoo.com/) 是一个开源企业资源规划 (ERP) 软件，提供一整套业务应用程序，包括 CRM、销售、采购、库存、生产、会计和其他管理功能。Odoo 是一个典型的 Web 应用程序，使用 PostgreSQL 作为底层数据库。

> 您的所有业务，都在一个平台上，简单、高效且实惠

公开演示（不一定开放）：http://odoo.pigsty.io, 用户名: `test@pigsty.io`, 密码: `pigsty`



--------

## 快速开始

在运行兼容操作系统的全新 Linux x86 / ARM 服务器上执行：

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty
./bootstrap                # 安装 ansible
./configure -c app/odoo    # 使用 odoo 配置（请在 pigsty.yml 中更改凭据）
./deploy.yml               # 安装 pigsty
./docker.yml               # 安装 docker compose
./app.yml                  # 使用 docker 启动 odoo 无状态部分
```

Odoo 默认监听在 8069 端口，您可以通过浏览器访问 `http://<ip>:8069`。默认的用户名和密码都是 `admin`。

您可以在浏览器所在主机（`/etc/hosts`）添加一条解析记录 `odoo.pigsty` 指向您的服务器，这样您就可以通过 `http://odoo.pigsty` 访问 Odoo 网络界面了。

如果您想要通过 SSL/HTTPS 访问 Odoo，您需要使用真正的 SSL 证书，或者信任 Pigsty 自动生成的自签名 CA 证书。（当然，在 Chrome 浏览器中，您也可以使用敲击键入 `thisisunsafe` 来绕过证书验证）




--------

## 配置模板

[`conf/app/odoo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/odoo.yml) 定义了一个模板配置文件，包含单个 Odoo 实例所需的资源。

```yaml
all:
  children:

    # Odoo 应用程序（默认用户名和密码：admin/admin）
    odoo:
      hosts: { 10.10.10.10: {} }
      vars:
        app: odoo   # 指定要安装的应用程序名称（在 apps 中）
        apps:       # 定义所有应用程序
          odoo:     # 应用程序名称，应该有对应的 ~/pigsty/app/odoo 文件夹
            file:   # 要创建的可选目录
              - { path: /data/odoo         ,state: directory, owner: 100, group: 101 }
              - { path: /data/odoo/webdata ,state: directory, owner: 100, group: 101 }
              - { path: /data/odoo/addons  ,state: directory, owner: 100, group: 101 }
            conf:   # 覆盖 /opt/<app>/.env 配置文件
              PG_HOST: 10.10.10.10            # postgres 主机
              PG_PORT: 5432                   # postgres 端口
              PG_USERNAME: odoo               # postgres 用户
              PG_PASSWORD: DBUser.Odoo        # postgres 密码
              ODOO_PORT: 8069                 # odoo 应用程序端口
              ODOO_DATA: /data/odoo/webdata   # odoo webdata
              ODOO_ADDONS: /data/odoo/addons  # odoo 插件
              ODOO_DBNAME: odoo               # odoo 数据库名称
              ODOO_VERSION: 19.0              # odoo 镜像版本

    # Odoo 数据库
    pg-odoo:
      hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
      vars:
        pg_cluster: pg-odoo
        pg_users:
          - { name: odoo    ,password: DBUser.Odoo ,pgbouncer: true ,roles: [ dbrole_admin ] ,createdb: true ,comment: admin user for odoo service }
          - { name: odoo_ro ,password: DBUser.Odoo ,pgbouncer: true ,roles: [ dbrole_readonly ]  ,comment: read only user for odoo service  }
          - { name: odoo_rw ,password: DBUser.Odoo ,pgbouncer: true ,roles: [ dbrole_readwrite ] ,comment: read write user for odoo service }
        pg_databases:
          - { name: odoo ,owner: odoo ,revokeconn: true ,comment: odoo main database  }
        pg_hba_rules:
          - { user: all ,db: all ,addr: 172.17.0.0/16  ,auth: pwd ,title: 'allow access from local docker network' }
          - { user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes' }
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
      minio : { domain: m.pigsty ,endpoint: "${admin_ip}:9001" ,scheme: https ,websocket: true }
      odoo:                            # nginx server config for odoo
        domain: odoo.pigsty            # 替换为您自己的域名！
        endpoint: "10.10.10.10:8069"   # odoo 服务端点：IP:PORT
        websocket: true                # 添加 websocket 支持
        certbot: odoo.pigsty           # certbot 证书名称，使用 `make cert` 申请

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

--------

## 基础

检查 `.env` 文件中的可配置环境变量：

```bash
# https://hub.docker.com/_/odoo#
PG_HOST=10.10.10.10
PG_PORT=5432
PG_USER=dbuser_odoo
PG_PASS=DBUser.Odoo
ODOO_PORT=8069
```

然后使用以下命令启动 odoo：

```bash
make up  # docker compose up
```

访问 [http://ddl.pigsty](http://ddl.pigsty/) 或 http://10.10.10.10:8887

## Makefile

```bash
make up         # 在最小模式下使用 docker compose 启动 odoo
make run        # 使用 docker 启动 odoo，本地数据目录和外部 PostgreSQL
make view       # 打印 odoo 访问点
make log        # tail -f odoo 日志
make info       # 使用 jq 检查 odoo
make stop       # 停止 odoo 容器
make clean      # 移除 odoo 容器
make pull       # 拉取最新的 odoo 镜像
make rmi        # 移除 odoo 镜像
make save       # 保存 odoo 镜像到 /tmp/docker/odoo.tgz
make load       # 从 /tmp/docker/odoo.tgz 加载 odoo 镜像
```

--------

## 使用外部 PostgreSQL

您可以为 Odoo 使用外部 PostgreSQL。Odoo 将在设置期间创建自己的数据库，因此您不需要这样做

```yaml
pg_users: [ { name: dbuser_odoo ,password: DBUser.Odoo ,pgbouncer: true ,roles: [ dbrole_admin ]    ,comment: admin user for odoo database } ]
pg_databases: [ { name: odoo ,owner: dbuser_odoo ,revokeconn: true ,comment: odoo primary database } ]
```

并使用以下命令创建业务用户和数据库：

```bash
bin/pgsql-user  pg-meta  dbuser_odoo
#bin/pgsql-db    pg-meta  odoo     # odoo 将在设置期间创建数据库
```

检查连接性：

```bash
psql postgres://dbuser_odoo:DBUser.Odoo@10.10.10.10:5432/odoo
```

------

## 暴露 Odoo 服务

通过 nginx 门户 [暴露](/docs/infra/admin/portal/) odoo Web 服务：

```yaml
    infra_portal:                     # 域名和上游服务器
      home         : { domain: h.pigsty }
      grafana      : { domain: g.pigsty    ,endpoint: "${admin_ip}:3000" , websocket: true }
      vmetrics     : { domain: v.pigsty    ,endpoint: "${admin_ip}:8428" }
      alertmanager : { domain: a.pigsty    ,endpoint: "${admin_ip}:9059" }
      blackbox     : { endpoint: "${admin_ip}:9115" }
      vlogs        : { endpoint: "${admin_ip}:9428" }
      odoo         : { domain: odoo.pigsty, endpoint: "127.0.0.1:8069", websocket: true }  # <------ 添加这一行
./infra.yml -t nginx   # 设置 nginx 基础设施门户
```

------

## Odoo 插件

社区中有很多 Odoo 模块可用，您可以通过下载并将它们放在 `addons` 文件夹中来安装它们。

```yaml
volumes:
  - ./addons:/mnt/extra-addons
```

您可以将 `./addons` 目录挂载到容器中的 `/mnt/extra-addons`，然后下载并解压到 `addons` 文件夹，

要启用插件模块，首先进入 [开发者模式](https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html)

> 设置 -> 通用设置 -> 开发者工具 -> 激活开发者模式

然后转到 > 应用程序 -> 更新应用程序列表，然后您可以找到额外的插件并从面板安装。

常用的 [免费](https://apps.odoo.com/apps/modules/browse?order=Downloads) 插件：[会计套件](https://apps.odoo.com/apps/modules/19.0/base_accounting_kit/)

------

## 演示

查看公共演示：[http://odoo.pigsty.io](http://odoo.pigsty.io/)，用户名：`test@pigsty.io`，密码：`pigsty`

如果您想通过 SSL 访问 odoo，您必须在浏览器中信任 `files/pki/ca/ca.crt`（或在 chrome 中使用肮脏的黑客 `thisisunsafe`）


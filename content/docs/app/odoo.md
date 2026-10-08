---
title: Odoo：自建开源 ERP
weight: 560
date: 2024-06-23
description: 使用 Pigsty 托管的 PostgreSQL 部署 Odoo Community 19。
module: [SOFTWARE]
categories: [参考]
---

[Odoo](https://www.odoo.com/) 是开源 ERP 软件，提供 CRM、销售、库存等业务应用。本模板使用 Odoo Community `19.0` 和 PostgreSQL 18，保持 19 系列插件兼容性。

Odoo 19 要求 PostgreSQL 13 或更高版本、Python 3.10 或更高版本；官方 Docker 镜像提供 Python。

## 快速开始

在运行兼容操作系统的全新 Linux x86_64 / ARM64 服务器上执行：

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty
./bootstrap                # 安装 Ansible
./configure -c app/odoo    # 生成 Odoo 配置
vi pigsty.yml              # 修改默认密码
./deploy.yml               # 安装 Pigsty 和 PostgreSQL
./docker.yml               # 安装 Docker Compose
./app.yml                  # 初始化 Odoo 数据库并启动 Web 容器
```

默认监听所有宿主机地址的 8069 端口，可直接访问 `http://<ip>:8069`。应用初始登录为 `admin` / `admin`，首次登录后修改密码。

模板预建 `odoo` 数据库，关闭数据库管理页面。`ODOO_ADMIN_PASSWORD` 是数据库管理主密码，与应用登录密码不同。

## 配置模板

源文件：[`conf/app/odoo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/odoo.yml)。

```yaml
all:
  children:

    # the odoo application (default username & password: admin/admin)
    odoo:
      hosts: { 10.10.10.10: {} }
      vars:
        app: odoo   # specify app name to be installed (in the apps)
        apps:       # define all applications
          odoo:     # app name, should have corresponding ~/pigsty/app/odoo folder
            file:   # optional directory to be created
              - { path: /data/odoo         ,state: directory, owner: 100, group: 101 }
              - { path: /data/odoo/webdata ,state: directory, owner: 100, group: 101 }
              - { path: /data/odoo/addons  ,state: directory, owner: 100, group: 101 }
            conf:   # override /opt/<app>/.env config file
              PG_HOST: 10.10.10.10            # postgres host
              PG_PORT: 5432                   # postgres port
              PG_USERNAME: odoo               # postgres user
              PG_PASSWORD: DBUser.Odoo        # postgres password
              ODOO_PORT: 8069                 # published HTTP port on all host interfaces
              ODOO_PROXY_MODE: true           # trust this node's Nginx forwarded headers
              ODOO_DATA: /data/odoo/webdata    # filestore and sessions
              ODOO_ADDONS: /data/odoo/addons   # Odoo 19 addons
              ODOO_DBNAME: odoo               # odoo database name
              ODOO_ADMIN_PASSWORD: change-this-master-password # CHANGE ME: database manager master password
              ODOO_VERSION: "19.0"            # stay on Odoo 19 for addon compatibility

    # the odoo database
    pg-odoo:
      hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
      vars:
        pg_cluster: pg-odoo
        pg_users:
          - { name: odoo    ,password: DBUser.Odoo ,pgbouncer: true ,roles: [ dbrole_admin ] ,comment: admin user for odoo service }
          - { name: odoo_ro ,password: DBUser.Odoo ,pgbouncer: true ,roles: [ dbrole_readonly ]  ,comment: read only user for odoo service  }
          - { name: odoo_rw ,password: DBUser.Odoo ,pgbouncer: true ,roles: [ dbrole_readwrite ] ,comment: read write user for odoo service }
        pg_databases:
          - { name: odoo ,owner: odoo ,revokeconn: true ,extensions: [unaccent, pg_trgm] ,comment: odoo main database }
        pg_hba_rules:
          - { user: odoo ,db: odoo ,addr: 172.16.0.0/12 ,auth: pwd ,title: 'allow odoo access from local docker networks' }
          - { user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes' }
        pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ] # make a full backup every 1am

    infra: { hosts: { 10.10.10.10: { infra_seq: 1 } } }
    etcd:  { hosts: { 10.10.10.10: { etcd_seq: 1 } }, vars: { etcd_cluster: etcd } }
    #minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio } }

  vars:                               # global variables
    version: v4.5.0                   # pigsty version string
    admin_ip: 10.10.10.10             # admin node ip address
    region: default                   # upstream mirror region: default|china|europe
    node_tune: oltp                   # node tuning specs: oltp,olap,tiny,crit
    pg_conf: oltp.yml                 # pgsql tuning specs: {oltp,olap,tiny,crit}.yml

    docker_enabled: true              # enable docker on app group
    #docker_registry_mirrors: ["https://docker.1panel.live","https://docker.1ms.run","https://docker.xuanyuan.me","https://registry-1.docker.io"]

    proxy_env:                        # global proxy env when downloading packages & pull docker images
      no_proxy: "localhost,127.0.0.1,10.0.0.0/8,192.168.0.0/16,*.pigsty,*.aliyun.com,mirrors.*,*.tsinghua.edu.cn"
      #http_proxy:  127.0.0.1:12345 # add your proxy env here for downloading packages or pull images
      #https_proxy: 127.0.0.1:12345 # usually the proxy is format as http://user:pass@proxy.xxx.com
      #all_proxy:   127.0.0.1:12345

    infra_portal:                     # domain names and upstream servers
      home  : { domain: i.pigsty }
      minio : { domain: m.pigsty ,endpoint: "${admin_ip}:9001" ,scheme: https ,websocket: true }
      odoo:                           # nginx server config for odoo
        domain: odoo.pigsty           # REPLACE WITH YOUR OWN DOMAIN!
        endpoint: "10.10.10.10:8069"  # Odoo host IP and published HTTP port
        websocket: true               # HTTP and WebSocket share 8069 with the default workers=0
        certbot: odoo.pigsty          # cert name; use your real domain for public certificates

    repo_enabled: false
    node_repo_modules: node,infra,pgsql
    pg_version: 18                    # Odoo 19 requires PostgreSQL 13 or later

    #----------------------------------------------#
    # PASSWORD : https://pigsty.io/docs/setup/security/
    #----------------------------------------------#
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

## 基础

部署配置位于 `/opt/odoo/.env`：

```bash
PG_HOST=10.10.10.10
PG_PORT=5432
PG_USERNAME=odoo
ODOO_DBNAME=odoo
PG_PASSWORD=DBUser.Odoo
ODOO_PORT=8069
ODOO_PROXY_MODE=true
ODOO_DATA=/data/odoo/webdata
ODOO_ADDONS=/data/odoo/addons
ODOO_ADMIN_PASSWORD=change-this-master-password
ODOO_VERSION=19.0
```

`ODOO_PORT` 只填写宿主机发布端口号，Compose 通过 `"${ODOO_PORT}:8069"` 映射到容器内固定的 8069 端口。`ODOO_DBNAME` 指定单个数据库，名称不含逗号。

手动部署时，先创建数据库角色、数据库及扩展，再在 Docker 主机上执行以下命令。Make 工具需要 Docker Compose、`jq` 和设置目录权限的权限。

```bash
cd /opt/odoo
make init  # 初始化已有空库
make up    # 启动 Web 服务
```

## Makefile

```bash
make            # 初始化成功后启动服务，并打印访问地址
make init       # 准备目录，初始化已有空库
make up         # 启动或重新创建 Web 容器
make view       # 打印访问地址
make logs       # 持续查看容器日志
make info       # 查看容器详情
make stop       # 停止容器
make down       # 移除 Compose 容器和网络
make pull       # 拉取 ODOO_VERSION 指定的镜像
make restart    # 重启现有容器
make port       # 查看发布端口
make save       # 保存镜像到 /tmp/docker/odoo.tgz
make load       # 从 /tmp/docker/odoo.tgz 加载镜像
```

## 使用外部 PostgreSQL

支持 PostgreSQL 13 及以上版本。请先创建专用角色、数据库及 `unaccent`、`pg_trgm` 扩展：

```yaml
pg_users: [ { name: odoo ,password: DBUser.Odoo ,roles: [ dbrole_admin ] ,comment: admin user for odoo service } ]
pg_databases: [ { name: odoo ,owner: odoo ,revokeconn: true ,extensions: [unaccent, pg_trgm] ,comment: odoo main database } ]
```

将以下命令中的 `pg-meta` 替换为实际数据库集群名：

```bash
bin/pgsql-user  pg-meta  odoo
bin/pgsql-db    pg-meta  odoo
```

将 `.env` 的 `PG_HOST`、`PG_PORT`、`PG_USERNAME`、`PG_PASSWORD` 指向该数据库，并配置 HBA 允许应用访问。此单库模板无需授予 Odoo 角色 `CREATEDB` 或 `SUPERUSER`。

检查连接（按提示输入密码）：

```bash
psql -h 10.10.10.10 -p 5432 -U odoo -d odoo -W -c 'SELECT version();'
```

## 暴露 Odoo 服务

也可通过 Nginx [门户](/docs/infra/admin/portal/) 访问 Odoo。代理访问使用 `ODOO_PROXY_MODE=true`，仅直连时设为 `false`；修改 `.env` 后运行 `make up` 应用配置。

```yaml
infra_portal:
  odoo:
    domain: odoo.pigsty
    endpoint: "10.10.10.10:8069"
    websocket: true
    certbot: odoo.pigsty  # 申请公开证书时使用真实域名
```

将 `domain` 解析到 Nginx 主机，将 `endpoint` 指向 Odoo 主机和发布端口。修改 `ODOO_PORT` 后，同步调整此处的端口。

```bash
./infra.yml -t nginx   # 更新 Nginx 门户配置
```

默认 `workers=0`，HTTP 与 WebSocket 共用 8069。启用多进程后需另行配置 8072 和 `/websocket` 转发，参见 [Odoo 19 部署说明](https://www.odoo.com/documentation/19.0/administration/on_premise/deploy.html)。

生产环境使用 HTTPS，并在客户端信任 Pigsty 的 `files/pki/ca/ca.crt`，或配置公开可信的证书。

## Odoo 插件

选择适配 Odoo 19 的插件，将其解压到 `/data/odoo/addons`（容器内为 `/mnt/extra-addons`），并安装所需依赖。目录权限为 uid=100、gid=101。

修改插件代码后运行 `make restart`。启用 [开发者模式](https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html)，在“应用程序 → 更新应用程序列表”中刷新并安装插件。更多插件见 [Odoo Apps](https://apps.odoo.com/apps/modules/browse?order=Downloads)。

## 更新与备份

更新 Odoo 19 镜像时，运行 `make pull`，再运行 `make up`。`make restart` 不应用新镜像或环境变量。需要固定版本时，将 `ODOO_VERSION` 设为已发布的 19.0 日期标签。跨主版本升级需要数据库迁移和插件适配。

数据库由 Pigsty/pgBackRest 备份；文件存储和插件目录由用户自行使用 Restic 或 PGFS 备份。

## 演示

公共演示（不一定开放）：[http://odoo.pigsty.io](http://odoo.pigsty.io/)，用户名 `test@pigsty.io`，密码 `pigsty`。

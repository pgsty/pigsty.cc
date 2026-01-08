---
title: OpenHalo
weight: 2110
description: MySQL 兼容的 Postgres 14 分支
icon: fa-solid fa-sync
module: [PGSQL]
categories: [概念]
---

[OpenHalo](https://www.openhalo.org/) 是一个开源的 PostgreSQL 内核，提供 MySQL 线协议兼容性。

OpenHalo 基于 PostgreSQL 14.10 内核版本，提供与 MySQL 5.7.32-log / 8.0 版本的线协议兼容性。

Pigsty 在所有支持的 Linux 平台上为 OpenHalo 提供部署支持。


------

## 快速开始

使用 Pigsty 的 [**标准安装流程**](/docs/setup/install) 和 [`mysql`](https://github.com/pgsty/pigsty/blob/main/conf/mysql.yml) 配置模板。

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty;
./configure -c mysql    # 使用 MySQL（openHalo）配置模板
./deploy.yml            # 安装，生产部署请先在 pigsty.yml 中修改密码
```

对于生产部署，请确保在运行安装剧本之前修改 `pigsty.yml` 配置文件中的密码参数。


------

## 配置

```yaml
pg-meta:
  hosts:
    10.10.10.10: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - {name: dbuser_meta ,password: DBUser.Meta   ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: pigsty admin user }
      - {name: dbuser_view ,password: DBUser.Viewer ,pgbouncer: true ,roles: [dbrole_readonly] ,comment: read-only viewer for meta database }
    pg_databases:
      - {name: postgres, extensions: [aux_mysql]} # mysql 兼容数据库
      - {name: meta ,baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty]}
    pg_hba_rules:
      - {user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes'}
    node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ] # 每天凌晨 1 点进行全量备份

    # OpenHalo 临时设置
    pg_mode: mysql                    # HaloDB 的 MySQL 兼容模式
    pg_version: 14                    # 当前 HaloDB 兼容 PG 主版本 14
    pg_packages: [ openhalodb, pgsql-common ]  # 安装 openhalodb 而不是 postgresql 内核
```


------

## 使用

访问 MySQL 时，实际连接使用的是 `postgres` 数据库。请注意，MySQL 中的"数据库"概念实际上对应于 PostgreSQL 中的"Schema"。因此，`use mysql` 实际上使用的是 `postgres` 数据库内的 `mysql` Schema。

用于 MySQL 的用户名和密码与 PostgreSQL 中的相同。您可以使用标准的 PostgreSQL 方法管理用户和权限。

### 客户端访问

OpenHalo 提供 MySQL 线协议兼容性，默认监听端口 3306，允许 MySQL 客户端和驱动程序直接连接。

Pigsty 的 [`conf/mysql`](https://github.com/pgsty/pigsty/blob/main/conf/mysql.yml) 配置默认安装 `mysql` 客户端工具。

您可以使用以下命令访问 MySQL：

```bash
mysql -h 127.0.0.1 -u dbuser_dba
```

目前，OpenHalo 官方确保 Navicat 可以正常访问此 MySQL 端口，但 Intellij IDEA 的 DataGrip 访问会导致错误。


------

## 修改说明

Pigsty 安装的 [OpenHalo](https://github.com/pgsty/openHalo) 内核基于 [HaloTech-Co-Ltd/openHalo](https://github.com/HaloTech-Co-Ltd/openHalo) 内核进行了少量修改：

- 将默认数据库名称从 `halo0root` 改回 `postgres`
- 从默认版本号中删除 `1.0.` 前缀，恢复为 `14.10`
- 修改默认配置文件以启用 MySQL 兼容性并默认监听端口 `3306`

请注意，Pigsty 不为使用 OpenHalo 内核提供任何保证。使用此内核时遇到的任何问题或需求应与原始供应商联系。

> **警告**：目前处于实验阶段 - 在生产使用前请彻底评估。


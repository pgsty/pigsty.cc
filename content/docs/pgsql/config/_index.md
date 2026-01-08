---
title: 集群配置
weight: 1200
description: 根据需求场景选择合适的实例与集群类型，配置出满足需求的 PostgreSQL 数据库集群。
icon: fa-solid fa-code
module: [PGSQL]
categories: [参考]
---

Pigsty 是一个“配置驱动”的 PostgreSQL 平台：所有行为都来自 `~/pigsty/conf/*.yml` 清单与 [`PGSQL` 参数](/docs/pgsql/param) 的组合。
只要写好配置，你就能在几分钟内复刻出一套包含实例、用户、数据库、访问控制、扩展与调优策略的定制集群。


---------------------

## 配置入口

1. **准备清单**：复制 `pigsty/conf/*.yml` 模板或从零开始编写 Ansible Inventory，将集群分组（`all.children.<cls>.hosts`）与全局变量（`all.vars`）写入同一个文件。
2. **定义参数**：在 `vars` 区块中覆盖需要的 [`PGSQL` 参数](/docs/pgsql/param)。全局 → 集群 → 主机的覆盖顺序决定了最终值。
3. **应用配置**：运行 `./configure -c <conf>` 或 `bin/pgsql-add <cls>` 等剧本让配置落地。Pigsty 会根据参数生成 Patroni/pgbouncer/pgbackrest 等服务所需的配置文件。

Pigsty 默认的 Demo 清单 `conf/pgsql.yml` 就是一份最小化示例：一个 `pg-meta` 集群、全局 `pg_version: 18`、少量业务用户与数据库定义。你可以在此基础上扩展更多集群。


---------------------

## 关注点与文档索引

Pigsty 的 PostgreSQL 配置可以从以下几个维度组合，后续文档会逐一展开“如何配置”：

- **[集群实例](/docs/pgsql/config/cluster)**：通过 `pg_cluster / pg_role / pg_seq / pg_upstream` 定义实例拓扑（单机、主从、备份集群、延迟集群、Citus 等）。
- **[内核版本](/docs/pgsql/config/kernel)**：使用 `pg_version`、`pg_mode`、`pg_packages`、`pg_extensions`、`pg_conf` 等参数挑选核心版本、风味和调优模板。
- **[用户/角色](/docs/pgsql/config/user)**：在 `pg_default_roles` 与 `pg_users` 中声明系统角色、业务账号、密码策略以及连接池属性。
- **[数据库对象](/docs/pgsql/config/db)**：借助 `pg_databases`、`baseline`、`schemas`、`extensions`、`pool_*` 字段按需创建数据库并自动接入 pgbouncer/Grafana。
- **[访问控制 (HBA)](/docs/pgsql/config/hba)**：利用 `pg_default_hba_rules` 与 `pg_hba_rules` 维护主机级认证策略，保证不同角色/网络的访问边界。
- **[权限模型 (ACL)](/docs/pgsql/config/acl)**：通过 `pg_default_privileges`、`pg_default_roles`、`pg_revoke_public` 等参数收敛对象权限，开箱即用地提供分层角色体系。

理解这些参数之后，你就可以针对任意业务需求写出“配置即基础设施”的声明式清单，Pigsty 会负责执行并确保幂等。


---------------------

## 一个典型示例

下面的片段展示了如何在同一个配置文件中同时控制实例拓扑、内核版本、扩展、用户以及数据库：

```yaml
all:
  children:
    pg-analytics:
      hosts:
        10.10.10.11: { pg_seq: 1, pg_role: primary }
        10.10.10.12: { pg_seq: 2, pg_role: replica, pg_offline_query: true }
      vars:
        pg_cluster: pg-analytics
        pg_conf: olap.yml
        pg_extensions: [ postgis, timescaledb, pgvector ]
        pg_databases:
          - { name: bi, owner: dbuser_bi, schemas: [mart], extensions: [timescaledb], pool_mode: session }
        pg_users:
          - { name: dbuser_bi, password: DBUser.BI, roles: [dbrole_admin], pgbouncer: true }
  vars:
    pg_version: 17
    pg_packages: [ pgsql-main pgsql-common ]
    pg_hba_rules:
      - { user: dbuser_bi, db: bi, addr: intra, auth: ssl, title: 'BI 只允许内网 SSL 访问' }
```

- `pg-analytics` 集群包含一个主库和一个离线副本。
- 全局指定 `pg_version: 17` 与一套扩展示例，并加载 `olap.yml` 调优。
- 在 `pg_databases` 与 `pg_users` 中声明业务对象，自动生成 schema/extension 与连接池条目。
- 附加的 `pg_hba_rules` 限制了访问来源与认证方式。

修改并应用这份清单即可得到一套定制化的 PostgreSQL 集群，而无需手工逐项配置。

---
title: 安全合规
weight: 230
description: Pigsty 以安全即代码的方式管理认证、授权、加密、审计与备份恢复，并提供从默认配置到生产加固的清晰路径。
icon: fa-solid fa-shield-halved
module: [PIGSTY, PGSQL]
categories: [概念]
---

数据库通常是信息系统中最敏感的组件：它保存着最有价值的数据，也因此是攻击与故障后果最严重的地方。
数据库安全并不是某个可以一键开启的功能，而是一系列问题的答案之和：谁能连进来？连进来能做什么？流量会不会被窃听？操作有没有留痕？数据坏了、丢了、被删了，还能不能恢复？

Pigsty 把这些问题的答案沉淀为一套 **开箱即用的安全基线**，并用 [**声明式配置**](/docs/concept/iac/) 的方式加以管理：
[**HBA 规则**](/docs/concept/sec/auth)、[**角色与权限**](/docs/concept/sec/ac)、证书与加密、备份与审计策略，全部以 [**参数**](/docs/concept/iac/parameter) 的形式在 [**配置清单**](/docs/concept/iac/inventory) 中声明，由幂等剧本渲染落地。

这种 **安全即代码**（Security as Code）的做法本身就是一项重要的安全实践：安全策略可以被版本控制、评审与回溯，配置清单为多实例环境提供统一基线。
当审计者问“谁能访问这个数据库”时，可以先从一份可读的 YAML 声明出发，再用实际生成的 HBA 与数据库授权验证它是否已经生效。


----------------

## 安全即代码

在传统运维中，安全配置散落在各个角落：某台服务器上的 `pg_hba.conf`，某位 DBA 手工执行过的 `GRANT` 语句，某次应急时临时放开的防火墙规则。
时间一长，文档与实际状态容易出现偏差，也很难快速确认各实例正在使用哪一版规则。

Pigsty 的做法不同：安全策略是集群定义的一部分，与集群的其他属性写在一起。

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_users:                     # 谁可以登录：账号、角色与过期时间
      - { name: dbuser_app ,password: '<独立随机口令>' ,roles: [dbrole_readwrite] ,expire_in: 365 }
    pg_databases:                 # 数据库及其隔离策略
      - { name: app ,owner: dbuser_app ,revokeconn: true }
    pg_hba_rules:                 # 谁能从哪里、以何种方式连接
      - { user: dbuser_app ,db: app ,addr: 10.1.0.0/16 ,auth: ssl ,order: 50 ,title: 'app access via ssl' }
```

用户、权限、HBA 规则以声明的方式描述，剧本负责把它们幂等地应用到集群的每个实例上：
新加入的实例可以沿用同一套策略，git 提交历史也可以记录安全配置的变更。手工执行的 `GRANT`、运行时参数修改和节点文件变更仍可能造成漂移，因此生产环境还需要定期核对实际状态。


----------------

## 默认安全基线

合理的默认值可以减少遗漏。以下能力在 Pigsty 默认配置下即处于启用状态：

| 能力          | 默认行为                                    | 相关参数                                                             |
|:------------|:----------------------------------------|:-----------------------------------------------------------------|
| 密码哈希        | 新设置或更新的 PostgreSQL 口令使用 SCRAM-SHA-256   | [`pg_pwd_enc`](/docs/pgsql/param#pg_pwd_enc)                     |
| 数据校验和       | 集群初始化时启用页级校验和，捕获静默数据损坏                  | [`pg_checksum`](/docs/pgsql/param#pg_checksum)                   |
| 服务端 TLS     | PostgreSQL 服务器证书就位并启用 `ssl`，可以接受 TLS 连接 | -                                                                |
| 本地 CA       | 自动创建自签名 CA，为受管组件签发证书                    | [`ca_create`](/docs/infra/param#ca_create)                       |
| [**etcd**](/docs/concept/model/etcd) 加密认证   | 客户端与对等通信 TLS，RBAC 密码认证                  | [`etcd_root_password`](/docs/etcd/param#etcd_root_password)      |
| [**MinIO**](/docs/concept/model/minio) HTTPS | 备份存储流量默认走 HTTPS                         | [`minio_https`](/docs/minio/param#minio_https)                   |
| [**Nginx**](/docs/concept/arch/infra#nginx) HTTPS | Web 入口默认同时监听 80、443                     | [`nginx_sslmode`](/docs/infra/param#nginx_sslmode)               |
| HBA 规则集     | 分层放行：本地 ident，内网口令，公网管理员强制 SSL          | [`pg_default_hba_rules`](/docs/pgsql/param#pg_default_hba_rules) |
| 角色与权限       | 四层角色模型与默认权限模板，提供最小权限基线                  | [`pg_default_roles`](/docs/pgsql/param#pg_default_roles)         |
| 备份恢复        | [**pgBackRest**](/docs/concept/arch/pgsql#pgbackrest) 默认启用，本地仓库保留两份全量备份            | [`pgbackrest_enabled`](/docs/pgsql/param#pgbackrest_enabled)     |
| 防火墙         | zone 模式：信任内网网段，公网仅放行必要端口                | [`node_firewall_mode`](/docs/node/param#node_firewall_mode)      |
| 受限 sudo     | 数据库系统用户的 sudo 被限制在必要命令集内                | [`pg_dbsu_sudo`](/docs/pgsql/param#pg_dbsu_sudo)                 |
{.full-width}


----------------

## 有所取舍的加固项

默认配置面向运行在受信内网中的部署，一部分安全能力需要显式启用 —— 它们或有性能与兼容性代价，或需要用户提供额外的决策：

- 默认配置与示例模板包含 **文档公开的默认密码**，方便快速上手与本地测试。生产部署应先用 `./configure -g` 随机化其支持的凭据，再检查 pgBackRest 加密口令、`ha/safe` 中的 MinIO 用户和自定义值。
- [**Patroni REST API**](/docs/concept/arch/pgsql#patroni) 与 [**PgBouncer**](/docs/concept/arch/pgsql#pgbouncer) 的 TLS 默认未启用（[`patroni_ssl_enabled`](/docs/pgsql/param#patroni_ssl_enabled)、[`pgbouncer_sslmode`](/docs/pgsql/param#pgbouncer_sslmode)），可以使用已经签发的证书显式开启。
- **密码强度检查**（[**`passwordcheck`**](/ext/e/passwordcheck/)）与 **审计扩展**（[**`pgaudit`**](/ext/e/pgaudit/)）默认未启用；使用前应确认软件包可用，再完成预加载与策略配置。
- **SELinux** 默认处于 `permissive` 模式；演示配置的防火墙额外放行了 `5432` 端口，生产环境应当移除。
- 本地备份仓库默认 **不加密**；MinIO 备份仓库默认启用 AES-256 加密，但需要修改默认加密口令。

安全加固模板 [**`ha/safe`**](/docs/conf/safe) 将 TLS、证书认证、密码检查和备份加密等配置组合在一起，
并配合面向一致性优先业务的 [**CRIT 参数模板**](/docs/pgsql/template/crit) 给出一份可直接修改的示例。模板中的公开凭据、审计扩展与故障模型仍需逐项确认。
完整的升级路径见 [**安全模型**](/docs/concept/sec/level#加固梯度)。


----------------

## 本章内容

| 章节                                       | 回答的问题                       |
|:-----------------------------------------|:----------------------------|
| [**安全模型**](/docs/concept/sec/level)      | 信任的根在哪里？防线有几道？如何从默认基线逐步加固？  |
| [**身份认证**](/docs/concept/sec/auth)       | 谁能连进来？如何证明身份？HBA 规则如何声明与生效？ |
| [**访问控制**](/docs/concept/sec/ac)         | 连进来之后能做什么？最小权限如何成为默认行为？     |
| [**加密通信**](/docs/concept/sec/ca)         | 流量如何加密？证书由谁签发、如何分发与轮换？      |
| [**数据安全**](/docs/concept/sec/data)       | 数据如何保证完整、可恢复、保密、可追溯？        |
| [**合规实践**](/docs/concept/sec/compliance) | 如何把安全能力映射到等保与 SOC 2 的控制要求？  |
{.full-width}


----------------

## 相关话题

概念层之外，以下页面提供操作层面的安全内容：

- 🔰 [**安全建议**](/docs/setup/security)：单机快速上手场景的最小加固动作
- 🛡️ [**安全考量**](/docs/deploy/security)：生产部署的安全加固检查清单
- 📄 [**`ha/safe` 模板**](/docs/conf/safe)：安全加固配置模板完整参考
- 🔑 [**HBA 规则**](/docs/pgsql/config/hba)：PGSQL 模块 HBA 配置详解
- 👤 [**访问控制**](/docs/pgsql/config/acl)：角色与权限参数参考
- ♾️ [**高可用**](/docs/concept/ha/)：业务连续性保障
- ⏰ [**时间点恢复**](/docs/concept/pitr/)：PITR 原理与灾难恢复；操作见 [**PGSQL 备份恢复**](/docs/pgsql/backup/)

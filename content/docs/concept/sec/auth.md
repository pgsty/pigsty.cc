---
title: 身份认证
weight: 232
description: Pigsty 以声明式方式管理 PostgreSQL 与 PgBouncer 的 HBA 规则，配合 SCRAM 密码与客户端证书，回答“谁能连进来、如何证明身份”。
icon: fa-solid fa-id-card
module: [PIGSTY, PGSQL]
categories: [概念]
---

PostgreSQL 使用 `pg_hba.conf` 进行 **基于主机的认证**（Host-Based Authentication）：谁（用户）、从哪里（来源地址）、访问什么（数据库）、需要以何种方式证明身份（认证方法）。

这套机制足够强大，但在集群环境中手工维护的成本很高：主库与从库可能需要不同规则，配置文件又分布在每个实例的数据目录中。
如果缺少统一声明和刷新流程，各实例的规则很容易发生漂移。

Pigsty 的答案与 [**声明式配置**](/docs/concept/iac/) 一脉相承：HBA 规则是配置清单的一部分，由剧本统一渲染与下发。


---------------------

## HBA 即代码

集群的 HBA 规则由两组参数拼接而成：全局默认规则 [`pg_default_hba_rules`](/docs/pgsql/param#pg_default_hba_rules) 与集群自定义规则 [`pg_hba_rules`](/docs/pgsql/param#pg_hba_rules)；
[**PgBouncer 连接池**](/docs/concept/arch/pgsql#pgbouncer) 另有独立的两组对应参数（[`pgb_default_hba_rules`](/docs/pgsql/param#pgb_default_hba_rules) 与 [`pgb_hba_rules`](/docs/pgsql/param#pgb_hba_rules)）。

每条规则可以用两种形式书写。**别名形式** 是推荐的方式，一条规则一行，语义一目了然：

```yaml
pg_hba_rules:
  - { user: dbuser_app ,db: app ,addr: 10.1.0.0/16 ,auth: ssl ,order: 50 ,title: 'app user access via ssl' }
```

**原始形式** 则直接给出 `pg_hba.conf` 的原文，用于表达别名覆盖不了的特殊规则。

除了四要素之外，规则还有两个控制字段：

- **`order`**：渲染顺序。HBA 按“先匹配先生效”的原则工作，顺序即优先级。约定 `0-99` 保留给用户的高优先级规则，`100-999` 是默认规则集，未指定 `order` 的规则排在最后。
- **`role`**：实例角色过滤。`common` 与 `default` 规则对所有实例生效；`primary`、`replica`、`offline`、`standby`、`delayed` 规则仅在对应角色的实例上启用；
  `role: offline` 的规则还会额外下发给标记了 `pg_offline_query` 的实例。同一份声明渲染到不同实例，得到的是各自角色对应的规则 —— 主从差异不再需要手工维护。

修改声明后，使用封装好的脚本应用变更，规则会被重新渲染并重载生效：

```bash
bin/pgsql-hba pg-meta          # 重新渲染并应用 pg-meta 集群的 HBA 规则
```

`pg_hba_rules` 用于追加规则，不会自动收窄范围更宽的默认规则。需要建立更严格的边界时，应同时审查 `pg_default_hba_rules`，并在变更后检查各实例实际生成的 `pg_hba.conf`。


---------------------

## 地址与认证别名

别名形式的价值在于把常见场景抽象为语义化的词汇。`addr` 字段的别名展开为具体的地址块：

| 别名          | 展开为                                           | 含义                                                                              |
|:------------|:----------------------------------------------|:--------------------------------------------------------------------------------|
| `local`     | Unix Socket                                   | 仅本地套接字                                                                          |
| `localhost` | Unix Socket、`127.0.0.1/32` 与 `::1/128`        | 本机                                                                              |
| `admin`     | `<admin_ip>/32`                               | [**管理节点**](/docs/concept/arch/node#admin节点)                                     |
| `infra`     | 各 INFRA 节点的 `/32` 地址                          | [**基础设施节点**](/docs/concept/arch/node#infra节点)                                   |
| `cluster`   | 集群各成员的 `/32` 地址                               | 集群内部                                                                            |
| `intra`     | `10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16` | 内网网段，可通过 [`node_firewall_intranet`](/docs/node/param#node_firewall_intranet) 定制 |
| `world`     | `0.0.0.0/0` 与 `::/0`                          | 任意地址                                                                            |
| CIDR 地址     | 原样保留                                          | 自定义网段                                                                           |
{.full-width}

`auth` 字段的别名决定认证方法，以及是否强制 TLS 连接：

| 别名           | 认证方法                         | 说明                                                         |
|:-------------|:-----------------------------|:-----------------------------------------------------------|
| `deny`       | `reject`                     | 显式拒绝                                                       |
| `trust`      | `trust`                      | 无条件放行，慎用                                                   |
| `pwd`        | `scram-sha-256` 或 `md5`      | 依 [`pg_pwd_enc`](/docs/pgsql/param#pg_pwd_enc) 而定，默认 SCRAM |
| `sha`        | `scram-sha-256`              | 强制 SCRAM                                                   |
| `md5`        | `md5`                        | 兼容旧客户端                                                     |
| `ssl`        | `hostssl` 与密码认证              | 密码认证，且必须走 TLS                                              |
| `ssl-sha`    | `hostssl` 与 `scram-sha-256`  | TLS 与强制 SCRAM                                              |
| `cert`       | `hostssl` 与 `cert`           | 客户端证书认证                                                    |
| `ident`、`os` | `ident`（PgBouncer 中为 `peer`） | 操作系统用户映射                                                   |
| `peer`       | `peer`                       | 本地操作系统用户                                                   |
{.full-width}

用户字段支持四个占位符，渲染时替换为实际用户名：`${dbsu}`（超级用户）、`${repl}`（复制用户）、`${monitor}`（监控用户）、`${admin}`（管理用户）；
`+role` 前缀表示匹配该角色的所有成员。

这里还要区分两件事：`auth: ssl` 只要求连接使用 TLS，并不要求客户端验证服务端身份。安全敏感的客户端还应使用 `sslmode=verify-full` 和可信 CA，详见 [**加密通信**](/docs/concept/sec/ca#客户端验证服务端)。


---------------------

## 默认规则解读

Pigsty 的默认 HBA 规则集体现了一个简单的原则：**来源越远，要求越严**。以下是 PostgreSQL 侧的默认规则（源码原文）：

```yaml
pg_default_hba_rules:             # postgres default host-based authentication rules, order by `order`
  - {user: '${dbsu}'    ,db: all         ,addr: local     ,auth: ident ,title: 'dbsu access via local os user ident'  ,order: 100}
  - {user: '${dbsu}'    ,db: replication ,addr: local     ,auth: ident ,title: 'dbsu replication from local os ident' ,order: 150}
  - {user: '${repl}'    ,db: replication ,addr: localhost ,auth: pwd   ,title: 'replicator replication from localhost',order: 200}
  - {user: '${repl}'    ,db: replication ,addr: intra     ,auth: pwd   ,title: 'replicator replication from intranet' ,order: 250}
  - {user: '${repl}'    ,db: postgres    ,addr: intra     ,auth: pwd   ,title: 'replicator postgres db from intranet' ,order: 300}
  - {user: '${monitor}' ,db: all         ,addr: localhost ,auth: pwd   ,title: 'monitor from localhost with password' ,order: 350}
  - {user: '${monitor}' ,db: all         ,addr: infra     ,auth: pwd   ,title: 'monitor from infra host with password',order: 400}
  - {user: '${admin}'   ,db: all         ,addr: infra     ,auth: ssl   ,title: 'admin @ infra nodes with pwd & ssl'   ,order: 450}
  - {user: '${admin}'   ,db: all         ,addr: world     ,auth: ssl   ,title: 'admin @ everywhere with ssl & pwd'    ,order: 500}
  - {user: '+dbrole_readonly',db: all    ,addr: localhost ,auth: pwd   ,title: 'pgbouncer read/write via local socket',order: 550}
  - {user: '+dbrole_readonly',db: all    ,addr: intra     ,auth: pwd   ,title: 'read/write biz user via password'     ,order: 600}
  - {user: '+dbrole_offline' ,db: all    ,addr: intra     ,auth: pwd   ,title: 'allow etl offline tasks from intranet',order: 650}
```

逐层来看：

- **本地最受信任**：超级用户 `postgres` 只能通过本地 Unix Socket 以 `ident` 方式进入 —— 不需要密码，但也无法在远程使用。这就是为什么 dbsu 默认不设密码：不存在可以被窃取的口令。
- **内网次之**：复制与业务账号在内网使用 SCRAM 口令认证；监控和管理用户的远程访问主要面向 INFRA 节点。
- **公网最严**：默认只有管理员可以从任意地址访问，且必须同时提供口令与 TLS 连接。

PgBouncer 侧的默认规则更保守一层：监控与管理账号从公网访问连接池会被显式 `deny`，业务用户则限定在本机与内网。

需要特别说明，默认 `+dbrole_offline` 规则没有设置 `role`，因此会应用到所有实例。要把离线用户限制到 `pg_role: offline` 或设置了 `pg_offline_query: true` 的实例，必须在对应 HBA 规则上显式增加 `role: offline`。

这份默认规则集是“可用性优先”的取舍：业务账号在内网使用口令认证即可接入。
[**`ha/safe`**](/docs/conf/safe) 模板将主要 TCP 规则改为 `ssl`，管理员从非内网位置访问必须持有客户端证书（`cert`）；本地 `ident` 与部分 localhost 口令规则仍然保留。


---------------------

## 密码策略

Pigsty 默认使用 PostgreSQL 官方推荐的 `scram-sha-256` 算法存储密码（[`pg_pwd_enc`](/docs/pgsql/param#pg_pwd_enc)），仅在需要兼容老旧客户端时才应降级为 `md5`。

密码处理链路会在执行 `ALTER USER ... PASSWORD` 前临时关闭语句日志（`SET log_statement TO 'none'`），避免口令进入 PostgreSQL 日志。
但明文口令仍会出现在配置清单中，渲染后的用户 SQL 也会以 `0640` 权限写入 `/pg/tmp/pg-user-<name>.sql`；相关任务没有完整使用 Ansible `no_log`。因此应限制管理节点、配置仓库和自动化输出的访问，并避免对含凭据任务使用 `--diff`。

密码强度默认不做强制，需要时可以预加载 [**`passwordcheck`**](/ext/e/passwordcheck/) 扩展，或使用规则更丰富的 [**`credcheck`**](/ext/e/credcheck/) 扩展：

```yaml
pg_libs: '$libdir/passwordcheck, pg_stat_statements, auto_explain'   # 拒绝弱密码
```

`ha/safe` 模板显式设置了上述 `pg_libs`；单独选择 CRIT 参数模板不会自动加载 `passwordcheck`。

账号有效期通过用户定义中的 `expire_in`（自创建起天数）或 `expire_at`（截止日期）声明，配合组织的密码轮换制度使用：

```yaml
pg_users:
  - { name: dbuser_app ,password: '<独立随机口令>' ,roles: [dbrole_readwrite] ,expire_in: 365 }
```


---------------------

## 证书认证

口令终究可能被钓鱼、复用或撞库。对管理员这样的高权限账号，可以在 HBA 中使用 `auth: cert` 要求 **客户端证书认证**：
客户端必须持有由本地 CA 签发、CN 与数据库用户名一致的证书才能建立连接。在 HBA 仅接受 `cert` 的前提下，单独泄露口令不足以通过认证。

使用内置的 `cert.yml` 剧本签发客户端证书：

```bash
./cert.yml -e cn=dbuser_dba            # 为 dbuser_dba 签发客户端证书，默认有效期 20 年
./cert.yml -e cn=dbuser_dba -e expire=365d   # 或指定较短的有效期
```

签发的证书位于 `files/pki/misc/<cn>.key` 与 `files/pki/misc/<cn>.crt`。客户端私钥应通过受控渠道交付；客户端仍需使用 `verify-full` 验证数据库服务端，证书体系详见 [**加密通信**](/docs/concept/sec/ca)。


---------------------

## 连接池与组件 API

数据库本体之外，还有两类入口需要认证：

**PgBouncer 连接池** 使用独立的 HBA 规则集与用户列表。默认关闭 `pgbouncer_auth_query`，此时只有声明了 `pgbouncer: true` 的用户才会进入 `userlist.txt` 并通过连接池认证；启用动态认证查询后，应重新评估可登录用户范围。

[**Patroni REST API**](/docs/concept/arch/pgsql#patroni) 承载高可用控制指令（重启、切换、重载配置），写操作要求 HTTP Basic 认证（[`patroni_username`](/docs/pgsql/param#patroni_username) 与 [`patroni_password`](/docs/pgsql/param#patroni_password)），
且来源受地址白名单限制；启用 [`patroni_ssl_enabled`](/docs/pgsql/param#patroni_ssl_enabled) 后 API 全程走 HTTPS。

Grafana、HAProxy 管理界面、MinIO、etcd 等组件的凭证同样在配置清单中声明，完整清单与修改方式见 [**合规实践**](/docs/concept/sec/compliance#默认凭证清单)。


---------------------

## 接下来

- 📖 完整的 HBA 配置参考：[**HBA 规则**](/docs/pgsql/config/hba)
- 👤 [**访问控制**](/docs/concept/sec/ac)：认证之后的授权边界
- 🔐 [**加密通信**](/docs/concept/sec/ca)：TLS 与客户端证书体系

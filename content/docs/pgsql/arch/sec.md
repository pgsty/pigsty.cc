---
title: 安全与合规
weight: 1106
description: Pigsty 中 PostgreSQL 集群的安全特性与合规能力详解
icon: fa-solid fa-scale-balanced
module: [PGSQL]
categories: [概念]
---

Pigsty v4.0 提供了 **企业级** 的 PostgreSQL 安全配置，涵盖身份鉴别、访问控制、通信加密、审计日志、数据完整性、备份恢复等多个维度。

本文档以 **中国等保三级**（GB/T 22239-2019）和 **SOC 2 Type II** 安全合规要求为参照，逐项对比验证 Pigsty 的安全能力。

每个安全维度包含两部分说明：

- **默认配置**：使用 `conf/meta.yml` 及默认参数时的安全合规状态 （个人使用）
- **可用配置**：通过调整 Pigsty 参数可达到的增强安全状态 （企业级配置可达）

------

## 合规对照总结

### 等保三级核心要求对照

| 要求项    | 默认满足 | 配置可达 | 说明                                      |
|:-------|:----:|:----:|:----------------------------------------|
| 身份唯一性  |  ✅   |  ✅   | 角色系统保证用户唯一标识                            |
| 口令复杂度  |  ⚠️  |  ✅   | 可启用 passwordcheck / credcheck 强制执行密码复杂度 |
| 口令定期更换 |  ⚠️  |  ✅   | 通过 expire_in/expire_at 设置用户有效期并定时刷新     |
| 登录失败处理 |  ⚠️  |  ✅   | 日志中记录失败的登陆请求，可配合 fail2ban 自动封禁          |
| 双因素认证  |  ⚠️  |  ✅   | 密码 + 客户端 SSL 证书认证                       |
| 访问控制   |  ✅   |  ✅   | HBA规则 + RBAC + SELinux                  |
| 最小权限   |  ✅   |  ✅   | 分层角色体系                                  |
| 权限分离   |  ✅   |  ✅   | DBA / Monitor / 应用读/写/ETL/个人用户分离        |
| 通信加密   |  ✅   |  ✅   | 默认启用并使用 SSL，可强制 SSL                     |
| 数据完整性  |  ✅   |  ✅   | 数据校验和默认启用                               |
| 存储加密   |  ⚠️  |  ✅   | 备份加密 + Percona TDE 内核支持                 |
| 审计日志   |  ✅   |  ✅   | 日志记录 DDL 与敏感操作，可记录所有操作。                 |
| 日志保护   |  ✅   |  ✅   | 文件权限隔离，VictoriaLogs 集中收集防篡改             |
| 备份恢复   |  ✅   |  ✅   | pgBackRest 自动备份                         |
| 网络隔离   |  ✅   |  ✅   | 防火墙 + HBA                               |


### SOC 2 Type II 控制点对照

| 控制点          | 默认满足 | 配置可达 | 说明                                         |
|:-------------|:----:|:----:|:-------------------------------------------|
| CC6.1 逻辑访问控制 |  ✅   |  ✅   | HBA + RBAC + SELinux                       |
| CC6.2 用户注册授权 |  ✅   |  ✅   | Ansible声明式管理                               |
| CC6.3 最小权限   |  ✅   |  ✅   | 分层角色                                       |
| CC6.6 传输加密   |  ✅   |  ✅   | SSL/TLS 全局启用                               |
| CC6.7 静态加密   |  ⚠️  |  ✅   | 可使用 Percona PGTDE 内核，以及 pgsodium/valut 等扩展 |
| CC6.8 恶意软件防护 |  ⚠️  |  ✅   | 最小安装 + 审计                                  |
| CC7.1 入侵检测   |  ⚠️  |  ✅   | 设置日志 Auth Fail 监控告警规则                      |
| CC7.2 系统监控   |  ✅   |  ✅   | VictoriaMetrics + Grafana                  |
| CC7.3 事件响应   |  ✅   |  ✅   | Alertmanager                               |
| CC9.1 业务连续性  |  ✅   |  ✅   | HA + 自动故障转移                                |
| A1.2 数据恢复    |  ✅   |  ✅   | PITR备份恢复                                   |

**图例**：✅ 默认满足  ⚠️ 需要额外配置




------

## 身份鉴别

> **等保要求**：应对登录的用户进行身份标识和鉴别，身份标识具有唯一性；应采用口令、密码技术、生物技术等两种或两种以上组合的鉴别技术。
>
> **SOC 2**：CC6.1 - 逻辑和物理访问控制；用户身份验证机制。


### 用户身份标识

PostgreSQL 通过角色（Role）系统实现用户身份标识，每个用户具有唯一的角色名。

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`pg_default_roles`](/docs/pgsql/param/#pg_default_roles) | 4个默认角色 + 4个系统用户 | 预定义角色体系 |
| [`pg_users`](/docs/pgsql/param/#pg_users) | `[]` | 业务用户定义列表 |

**默认配置**：Pigsty 预置了分层的角色体系：

```yaml
pg_default_roles:
  - { name: dbrole_readonly  ,login: false ,comment: '全局只读角色' }
  - { name: dbrole_offline   ,login: false ,comment: '受限只读角色（离线查询）' }
  - { name: dbrole_readwrite ,login: false ,roles: [dbrole_readonly] ,comment: '全局读写角色' }
  - { name: dbrole_admin     ,login: false ,roles: [pg_monitor,dbrole_readwrite] ,comment: '对象管理角色' }
  - { name: postgres         ,superuser: true  ,comment: '系统超级用户' }
  - { name: replicator       ,replication: true,roles: [pg_monitor,dbrole_readonly] ,comment: '复制用户' }
  - { name: dbuser_dba       ,superuser: true  ,roles: [dbrole_admin] ,pgbouncer: true ,comment: '管理员用户' }
  - { name: dbuser_monitor   ,roles: [pg_monitor,dbrole_readonly] ,pgbouncer: true ,comment: '监控用户' }
```

**可用配置**：用户可通过 `pg_users` 定义业务用户，支持设置账户有效期、连接限制等：

```yaml
pg_users:
  - name: dbuser_app
    password: 'SecurePass123!'
    roles: [dbrole_readwrite]
    expire_in: 365           # 365天后过期
    connlimit: 100           # 最大100个连接
    comment: '应用程序用户'
```


### 密码策略

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`pg_pwd_enc`](/docs/pgsql/param/#pg_pwd_enc) | `scram-sha-256` | 密码加密算法 |
| [`pg_dbsu_password`](/docs/pgsql/param/#pg_dbsu_password) | `''`（空） | 数据库超级用户密码 |

**默认配置**：

- 密码加密采用 **SCRAM-SHA-256** 算法，这是目前 PostgreSQL 支持的最安全的密码哈希算法
- 密码在设置时自动使用 `SET log_statement TO 'none'` 防止明文泄露到日志
- 数据库超级用户 `postgres` 默认无密码，仅允许通过本地 Unix Socket 使用 `ident` 认证

**可用配置**：

- 启用 [`passwordcheck`](https://www.postgresql.org/docs/current/passwordcheck.html) 扩展强制密码复杂度：

  ```yaml
  pg_libs: 'passwordcheck, pg_stat_statements, auto_explain'
  ```

- 使用 [`credcheck`](https://github.com/MigOpsRepos/credcheck) 扩展实现更丰富的密码策略（长度、复杂度、历史记录等）

- 设置用户账户有效期：

  ```yaml
  pg_users:
    - { name: temp_user, password: 'xxx', expire_in: 30 }  # 30天后过期
    - { name: temp_user, password: 'xxx', expire_at: '2025-12-31' }  # 指定日期过期
  ```


### 认证机制

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`pg_default_hba_rules`](/docs/pgsql/param/#pg_default_hba_rules) | 12条规则 | 默认HBA认证规则 |
| [`pg_hba_rules`](/docs/pgsql/param/#pg_hba_rules) | `[]` | 业务HBA规则 |

**默认配置**：Pigsty 实现了基于来源地址的分层认证策略：

```yaml
pg_default_hba_rules:
  - {user: '${dbsu}'    ,db: all         ,addr: local     ,auth: ident ,title: 'dbsu本地ident认证'}
  - {user: '${dbsu}'    ,db: replication ,addr: local     ,auth: ident ,title: 'dbsu本地复制'}
  - {user: '${repl}'    ,db: replication ,addr: localhost ,auth: pwd   ,title: '复制用户本地密码认证'}
  - {user: '${repl}'    ,db: replication ,addr: intra     ,auth: pwd   ,title: '复制用户内网密码认证'}
  - {user: '${repl}'    ,db: postgres    ,addr: intra     ,auth: pwd   ,title: '复制用户内网访问postgres'}
  - {user: '${monitor}' ,db: all         ,addr: localhost ,auth: pwd   ,title: '监控用户本地密码认证'}
  - {user: '${monitor}' ,db: all         ,addr: infra     ,auth: pwd   ,title: '监控用户从基础设施节点访问'}
  - {user: '${admin}'   ,db: all         ,addr: infra     ,auth: ssl   ,title: '管理员SSL+密码认证'}
  - {user: '${admin}'   ,db: all         ,addr: world     ,auth: ssl   ,title: '管理员全局SSL+密码认证'}
  - {user: '+dbrole_readonly',db: all    ,addr: localhost ,auth: pwd   ,title: '只读角色本地密码认证'}
  - {user: '+dbrole_readonly',db: all    ,addr: intra     ,auth: pwd   ,title: '只读角色内网密码认证'}
  - {user: '+dbrole_offline' ,db: all    ,addr: intra     ,auth: pwd   ,title: '离线角色内网密码认证'}
```

支持的认证方法别名：

| 别名 | 实际方法 | 说明 |
|:-----|:--------|:-----|
| `deny` | `reject` | 拒绝连接 |
| `pwd` | `scram-sha-256` | 密码认证（默认加密） |
| `ssl` | `scram-sha-256` + `hostssl` | SSL + 密码认证 |
| `cert` | `cert` | 客户端证书认证 |
| `os`/`ident`/`peer` | `ident`/`peer` | 操作系统用户映射 |
| `trust` | `trust` | 无条件信任（不推荐） |

**可用配置**：

- 启用客户端证书认证实现双因素认证：

  ```yaml
  pg_hba_rules:
    - {user: 'secure_user', db: all, addr: world, auth: cert, title: '证书认证用户'}
  ```

- 限制特定用户只能从指定 IP 访问：

  ```yaml
  pg_hba_rules:
    - {user: 'app_user', db: 'appdb', addr: '192.168.1.100/32', auth: ssl}
  ```


------

## 访问控制

> **等保要求**：应授予管理用户所需的最小权限，实现管理用户的权限分离；应由授权主体配置访问控制策略。
>
> **SOC 2**：CC6.3 - 基于角色的访问控制和最小权限原则。


### 权限分离

**默认配置**：Pigsty 实现了清晰的职责分离模型：

| 角色 | 权限 | 用途 |
|:----|:-----|:----|
| `postgres` | SUPERUSER | 系统超级用户，仅限本地OS认证 |
| `dbuser_dba` | SUPERUSER + dbrole_admin | 数据库管理员 |
| `replicator` | REPLICATION + pg_monitor | 复制和监控 |
| `dbuser_monitor` | pg_monitor + dbrole_readonly | 只读监控 |
| `dbrole_admin` | CREATE + dbrole_readwrite | 对象管理（DDL） |
| `dbrole_readwrite` | INSERT/UPDATE/DELETE + dbrole_readonly | 数据读写 |
| `dbrole_readonly` | SELECT | 只读访问 |
| `dbrole_offline` | SELECT（受限） | 离线/ETL查询 |

**可用配置**：

- 细粒度权限控制通过 `pg_default_privileges` 实现：

  ```yaml
  pg_default_privileges:
    - GRANT USAGE      ON SCHEMAS   TO dbrole_readonly
    - GRANT SELECT     ON TABLES    TO dbrole_readonly
    - GRANT SELECT     ON SEQUENCES TO dbrole_readonly
    - GRANT EXECUTE    ON FUNCTIONS TO dbrole_readonly
    - GRANT INSERT     ON TABLES    TO dbrole_readwrite
    - GRANT UPDATE     ON TABLES    TO dbrole_readwrite
    - GRANT DELETE     ON TABLES    TO dbrole_readwrite
    - GRANT TRUNCATE   ON TABLES    TO dbrole_admin
    - GRANT CREATE     ON SCHEMAS   TO dbrole_admin
  ```


### 操作系统层面权限

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`pg_dbsu`](/docs/pgsql/param/#pg_dbsu) | `postgres` | 数据库超级用户OS账号 |
| [`pg_dbsu_sudo`](/docs/pgsql/param/#pg_dbsu_sudo) | `limit` | sudo权限级别 |
| [`node_admin_sudo`](/docs/pgsql/param/#node_admin_sudo) | `nopass` | 管理员sudo权限 |

**默认配置**：

- 数据库超级用户 `postgres` 的 sudo 权限为 `limit`，仅允许执行特定的服务管理命令：
  - 启动/停止/重启 PostgreSQL 相关服务
  - 加载 softdog 内核模块（用于 watchdog）

```bash
%postgres ALL=NOPASSWD: /bin/systemctl stop postgres
%postgres ALL=NOPASSWD: /bin/systemctl start postgres
%postgres ALL=NOPASSWD: /bin/systemctl reload patroni
# ... 等受限命令
```

**可用配置**：

- `pg_dbsu_sudo: none` - 完全禁用 sudo 权限（最严格）
- `pg_dbsu_sudo: all` - 需要密码的完整 sudo（平衡方案）
- `pg_dbsu_sudo: nopass` - 无密码完整 sudo（不推荐）


### 行级安全策略（RLS）

PostgreSQL 原生支持行级安全策略（Row Level Security），可通过 `pg_users` 设置用户属性：

```yaml
pg_users:
  - name: secure_user
    bypassrls: false  # 不允许绕过RLS
    roles: [dbrole_readwrite]
```

配合数据库内的 RLS 策略，可实现细粒度的数据访问控制。


------

## 通信安全

> **等保要求**：应采用密码技术保证通信过程中数据的完整性和保密性。
>
> **SOC 2**：CC6.6 - 数据传输安全；CC6.7 - 加密控制。


### SSL/TLS 加密

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| `ssl` (postgresql.conf) | `on` | 服务端 SSL 开关 |
| [`patroni_ssl_enabled`](/docs/pgsql/param/#patroni_ssl_enabled) | `false` | Patroni API SSL |
| [`pgbouncer_sslmode`](/docs/pgsql/param/#pgbouncer_sslmode) | `disable` | PgBouncer 客户端 SSL |
| [`nginx_sslmode`](/docs/pgsql/param/#nginx_sslmode) | `enable` | Nginx HTTPS |

**默认配置**：

- PostgreSQL 服务端 **默认启用 SSL**，支持加密连接
- 管理员用户（`${admin}`）强制使用 `hostssl` 连接
- 自动生成并分发 SSL 证书到所有数据库节点

```yaml
# patroni.yml 中的 SSL 配置
ssl: 'on'
ssl_cert_file: '/pg/cert/server.crt'
ssl_key_file: '/pg/cert/server.key'
ssl_ca_file: '/pg/cert/ca.crt'
```

**可用配置**：

- 启用 Patroni REST API SSL 加密：

  ```yaml
  patroni_ssl_enabled: true
  ```

- 启用 PgBouncer 客户端 SSL：

  ```yaml
  pgbouncer_sslmode: require  # 或 verify-ca, verify-full
  ```

- 强制所有连接使用 SSL：

  ```yaml
  pg_hba_rules:
    - {user: all, db: all, addr: world, auth: ssl, title: '强制SSL'}
  ```


### PKI 证书管理

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`cert_validity`](/docs/pgsql/param/#cert_validity) | `7300d` | 证书有效期（20年） |
| CA 证书有效期 | 100年 | 自签名 CA 有效期 |

**默认配置**：

Pigsty 使用自建 PKI 体系，自动管理证书生命周期：

```
files/pki/
├── ca/           # CA 根证书
│   ├── ca.crt    # CA 公钥证书
│   └── ca.key    # CA 私钥
├── csr/          # 证书签名请求
├── pgsql/        # PostgreSQL 集群证书
├── etcd/         # ETCD 集群证书
├── infra/        # 基础设施节点证书
└── minio/        # MinIO 证书
```

- 每个 PostgreSQL 集群共享一个私钥，每个实例有独立的证书
- 证书包含正确的 SAN（Subject Alternative Name）配置
- CA 证书自动分发到 `/etc/pki/ca.crt` 和 `/pg/cert/ca.crt`

**可用配置**：

- 使用外部 CA 签发的证书：将证书放入 `files/pki/` 目录，设置 `ca_create: false`
- 调整证书有效期：`cert_validity: 365d`（1年）


### ETCD 通信安全

ETCD 作为 Patroni 的 DCS（分布式配置存储），默认使用 mTLS（双向 TLS）认证：

```yaml
etcd3:
  hosts: '10.10.10.10:2379'
  protocol: https
  cacert: /pg/cert/ca.crt
  cert:   /pg/cert/server.crt
  key:    /pg/cert/server.key
  username: 'pg-meta'        # 集群专用账号
  password: 'pg-meta'        # 默认与集群名相同
```


------

## 数据加密

> **等保要求**：应采用密码技术保证重要数据在存储过程中的保密性。
>
> **SOC 2**：CC6.1 - 数据加密存储。


### 备份加密

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| `cipher_type` | `aes-256-cbc` | 备份加密算法（MinIO仓库） |
| `cipher_pass` | `pgBackRest` | 加密密码（需修改） |

**默认配置**：

- 本地备份（`pgbackrest_method: local`）默认不加密
- 远程对象存储备份支持 AES-256-CBC 加密

**可用配置**：

启用备份加密（推荐用于远程存储）：

```yaml
pgbackrest_method: minio
pgbackrest_repo:
  minio:
    type: s3
    s3_endpoint: sss.pigsty
    s3_bucket: pgsql
    s3_key: pgbackrest
    s3_key_secret: S3User.Backup
    cipher_type: aes-256-cbc
    cipher_pass: 'YourSecureBackupPassword!'  # 务必修改！
    retention_full_type: time
    retention_full: 14
```


### 透明数据加密（TDE）

PostgreSQL 社区版本不支持原生 TDE，但可通过以下方式实现存储加密：

- **文件系统级加密**：使用 LUKS/dm-crypt 加密存储卷
- **pgsodium 扩展**：支持列级加密

```yaml
# 启用 pgsodium 列级加密
pg_libs: 'pgsodium, pg_stat_statements, auto_explain'

# 自定义加密密钥（64位十六进制）
pgsodium_key: 'a1b2c3d4e5f6...'  # 或使用外部密钥管理脚本
```


### 数据完整性校验

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`pg_checksum`](/docs/pgsql/param/#pg_checksum) | `true` | 数据校验和 |

**默认配置**：

- **数据校验和默认启用**，可检测存储层数据损坏
- `crit.yml` 模板强制启用数据校验和
- 支持 `pg_rewind` 进行故障恢复

```yaml
pg_checksum: true  # 强烈建议保持启用
```


------

## 安全审计

> **等保要求**：应启用安全审计功能，审计覆盖到每个用户，对重要的用户行为和重要安全事件进行审计。
>
> **SOC 2**：CC7.2 - 系统监控和日志记录；CC7.3 - 安全事件检测。


### 数据库审计日志

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| `logging_collector` | `on` | 启用日志收集器 |
| `log_destination` | `csvlog` | CSV格式日志 |
| `log_statement` | `ddl` | 记录DDL语句 |
| `log_min_duration_statement` | `100ms` | 慢查询阈值 |
| `log_connections` | `authorization` (PG18) / `on` | 连接审计 |
| `log_disconnections` | `on` (crit模板) | 断开连接审计 |
| `log_checkpoints` | `on` | 检查点日志 |
| `log_lock_waits` | `on` | 锁等待日志 |
| `log_replication_commands` | `on` | 复制命令日志 |

**默认配置**：

```yaml
# oltp.yml 模板的审计配置
log_destination: csvlog
logging_collector: 'on'
log_directory: /pg/log/postgres
log_filename: 'postgresql-%a.log'    # 按星期轮转
log_file_mode: '0640'                # 限制日志文件权限
log_rotation_age: '1d'
log_truncate_on_rotation: 'on'
log_checkpoints: 'on'
log_lock_waits: 'on'
log_replication_commands: 'on'
log_statement: ddl                   # 记录所有DDL
log_min_duration_statement: 100      # 记录慢查询 >100ms
```

**可用配置（crit.yml 关键业务模板）**：

```yaml
# crit.yml 提供更全面的审计
log_connections: 'receipt,authentication,authorization'  # PG18完整连接审计
log_disconnections: 'on'             # 记录断开连接
log_lock_failures: 'on'              # 记录锁失败（PG18）
track_activity_query_size: 32768     # 完整查询记录
```

启用 `pgaudit` 扩展实现细粒度审计：

```yaml
pg_libs: 'pgaudit, pg_stat_statements, auto_explain'
pg_parameters:
  pgaudit.log: 'all'
  pgaudit.log_catalog: 'on'
  pgaudit.log_relation: 'on'
```


### 性能与执行审计

| 扩展 | 默认启用 | 说明 |
|:----|:--------|:----|
| `pg_stat_statements` | 是 | SQL统计信息 |
| `auto_explain` | 是 | 慢查询执行计划 |
| `pg_wait_sampling` | 配置可用 | 等待事件采样 |

**默认配置**：

```yaml
pg_libs: 'pg_stat_statements, auto_explain'

# auto_explain 配置
auto_explain.log_min_duration: 1s    # 记录>1s的查询计划
auto_explain.log_analyze: 'on'
auto_explain.log_verbose: 'on'
auto_explain.log_timing: 'on'

# pg_stat_statements 配置
pg_stat_statements.max: 10000
pg_stat_statements.track: all
```


### 日志集中管理

**默认配置**：

- PostgreSQL 日志：`/pg/log/postgres/`
- Patroni 日志：`/pg/log/patroni/`
- PgBouncer 日志：`/pg/log/pgbouncer/`
- pgBackRest 日志：`/pg/log/pgbackrest/`

**可用配置**：

通过 Vector 将日志发送到 VictoriaLogs 集中存储：

```yaml
# 日志自动收集到 VictoriaLogs
vlogs_enabled: true
vlogs_port: 9428
vlogs_options: >-
  -retentionPeriod=15d
  -retention.maxDiskSpaceUsageBytes=50GiB
```


------

## 网络安全

> **等保要求**：应在网络边界部署访问控制设备，对进出网络的数据流实现访问控制。
>
> **SOC 2**：CC6.1 - 边界保护和网络安全。


### 防火墙配置

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`node_firewall_mode`](/docs/pgsql/param/#node_firewall_mode) | `zone` | 防火墙模式 |
| [`node_firewall_intranet`](/docs/pgsql/param/#node_firewall_intranet) | RFC1918网段 | 内网CIDR |
| [`node_firewall_public_port`](/docs/pgsql/param/#node_firewall_public_port) | `[22,80,443,5432]` | 公网开放端口 |

**默认配置**：

```yaml
node_firewall_mode: zone             # 启用区域防火墙
node_firewall_intranet:              # 定义内网地址
  - 10.0.0.0/8
  - 192.168.0.0/16
  - 172.16.0.0/12
node_firewall_public_port:           # 公网开放端口
  - 22    # SSH
  - 80    # HTTP
  - 443   # HTTPS
  - 5432  # PostgreSQL（谨慎开放）
```

防火墙规则：
- 内网地址自动加入 `trusted` 区域
- 仅指定端口对外开放
- 支持 firewalld（RHEL系）和 ufw（Debian系）

**可用配置**：

- `node_firewall_mode: off` - 禁用防火墙（不推荐）
- `node_firewall_mode: none` - 不修改现有配置
- 移除5432端口，仅允许内网访问数据库


### 服务访问控制

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| `pg_listen` | `0.0.0.0` | PostgreSQL监听地址 |
| `patroni_allowlist` | infra + cluster | Patroni API白名单 |

**默认配置**：

Patroni REST API 仅允许来自以下地址的访问：

```yaml
# 自动计算的白名单
pg_allow_list = [admin_ip] + pg_cluster_members + groups["infra"]
```

**可用配置**：

限制 PostgreSQL 只监听特定网卡：

```yaml
pg_listen: '${ip}'  # 仅监听主机IP，不监听0.0.0.0
```


### SELinux

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`node_selinux_mode`](/docs/pgsql/param/#node_selinux_mode) | `permissive` | SELinux模式 |

**默认配置**：SELinux 设为 `permissive` 模式（记录但不阻止）

**可用配置**：

```yaml
node_selinux_mode: enforcing  # 强制模式（需要额外配置策略）
```


------

## 可用性与恢复

> **等保要求**：应提供数据备份与恢复功能；应提供自动故障恢复功能。
>
> **SOC 2**：CC9.1 - 业务连续性；A1.2 - 数据备份和恢复。


### 高可用架构

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`patroni_enabled`](/docs/pgsql/param/#patroni_enabled) | `true` | 启用Patroni HA |
| [`pg_rto`](/docs/pgsql/param/#pg_rto) | `30` | 恢复时间目标（秒） |
| [`pg_rpo`](/docs/pgsql/param/#pg_rpo) | `1048576` | 恢复点目标（1MB） |

**默认配置**：

- Patroni 自动故障检测与切换（RTO < 30秒）
- 异步复制，最大数据丢失 1MB（RPO）
- `failsafe_mode: true` 防止脑裂

**可用配置**：

启用同步复制实现 RPO = 0：

```yaml
pg_rpo: 0                    # 零数据丢失
pg_conf: crit.yml            # 使用关键业务模板
# crit.yml 自动启用 synchronous_mode: true
```

启用硬件看门狗：

```yaml
patroni_watchdog_mode: automatic  # 或 required
```


### 备份恢复

| 配置项 | 默认值 | 说明 |
|:------|:------|:-----|
| [`pgbackrest_enabled`](/docs/pgsql/param/#pgbackrest_enabled) | `true` | 启用pgBackRest |
| [`pgbackrest_method`](/docs/pgsql/param/#pgbackrest_method) | `local` | 备份存储方式 |
| `retention_full` | `2` | 保留完整备份数量 |

**默认配置**：

```yaml
pgbackrest_enabled: true
pgbackrest_method: local
pgbackrest_repo:
  local:
    path: /pg/backup
    retention_full_type: count
    retention_full: 2            # 保留2个完整备份
```

**可用配置**：

异地备份到对象存储：

```yaml
pgbackrest_method: minio
pgbackrest_repo:
  minio:
    type: s3
    s3_endpoint: sss.pigsty
    s3_bucket: pgsql
    cipher_type: aes-256-cbc     # 加密备份
    retention_full_type: time
    retention_full: 14           # 保留14天
    block: y                     # 块级增量备份
    bundle: y                    # 小文件合并
```

定时备份策略：

```yaml
node_crontab:
  - '00 01 * * * postgres /pg/bin/pg-backup full'   # 每日1点全量备份
  - '00 */4 * * * postgres /pg/bin/pg-backup diff'  # 每4小时差异备份
```


------

## 入侵防范

> **等保要求**：应遵循最小安装的原则，仅安装需要的组件和应用程序；应能够检测到对重要节点进行入侵的行为，并在发生严重入侵事件时提供报警。
>
> **SOC 2**：CC6.8 - 恶意软件防护；CC7.1 - 入侵检测。


### 最小化安装

**默认配置**：

- 仅安装必要的 PostgreSQL 组件和扩展
- 通过 `pg_packages` 和 `pg_extensions` 精确控制安装内容
- 生产系统不安装开发工具和调试符号

```yaml
pg_packages: [ pgsql-main, pgsql-common ]  # 最小化安装
pg_extensions: []                          # 按需添加扩展
```


### 安全扩展

Pigsty 提供以下 [**安全相关扩展**](https://pgext.cloud/zh/list/cate/#sec)，可按需安装启用：

| 扩展/包                                                                   | 版本    | 描述                              |
|:-----------------------------------------------------------------------|:------|:--------------------------------|
| [passwordcheck_cracklib](https://pgext.cloud/e/passwordcheck_cracklib) | 3.1.0 | 使用 cracklib 加固 PG 用户密码          |
| [supautils](https://pgext.cloud/e/supautils)                           | 3.0.2 | 用于在云环境中确保数据库集群的安全               |
| [pgsodium](https://pgext.cloud/e/pgsodium)                             | 3.1.9 | 表数据加密存储 TDE                     |
| [supabase_vault / pg_vault](https://pgext.cloud/e/supabase_vault)      | 0.3.1 | 在 Vault 中存储加密凭证的扩展 (supabase)   |
| [pg_session_jwt](https://pgext.cloud/e/pg_session_jwt)                 | 0.4.0 | 使用JWT进行会话认证                     |
| [anon](https://pgext.cloud/e/anon)                                     | 2.5.1 | 数据匿名化处理工具                       |
| [pgsmcrypto](https://pgext.cloud/e/pgsmcrypto)                         | 0.1.1 | 为PostgreSQL提供商密算法支持：SM2,SM3,SM4 |
| [pg_enigma](https://pgext.cloud/e/pg_enigma)                           | 0.5.0 | PostgreSQL 加密数据类型               |
| [pgaudit](https://pgext.cloud/e/pgaudit)                               | 18.0  | 提供审计功能                          |
| [pgauditlogtofile](https://pgext.cloud/e/pgauditlogtofile)             | 1.7.6 | pgAudit 子扩展，将审计日志写入单独的文件中       |
| [pg_auditor](https://pgext.cloud/e/pg_auditor)                         | 0.2   | 审计数据变更并提供闪回能力                   |
| [logerrors](https://pgext.cloud/e/logerrors)                           | 2.1.5 | 用于收集日志文件中消息统计信息的函数              |
| [pg_auth_mon](https://pgext.cloud/e/pg_auth_mon)                       | 3.0   | 监控每个用户的连接尝试                     |
| [pg_jobmon](https://pgext.cloud/e/pg_jobmon)                           | 1.4.1 | 记录和监控函数                         |
| [credcheck](https://pgext.cloud/e/credcheck)                           | 4.2   | 明文凭证检查器                         |
| [pgcryptokey](https://pgext.cloud/e/pgcryptokey)                       | 0.85  | PG密钥管理                          |
| [login_hook](https://pgext.cloud/e/login_hook)                         | 1.7   | 在用户登陆时执行login_hook.login()函数    |
| [set_user](https://pgext.cloud/e/set_user)                             | 4.2.0 | 增加了日志记录的 SET ROLE               |
| [pg_snakeoil](https://pgext.cloud/e/pg_snakeoil)                       | 1.4   | PostgreSQL动态链接库反病毒功能            |
| [pgextwlist](https://pgext.cloud/e/pgextwlist)                         | 1.19  | PostgreSQL扩展白名单功能               |
| [sslutils](https://pgext.cloud/e/sslutils)                             | 1.4   | 使用SQL管理SSL证书                    |
| [noset](https://pgext.cloud/e/noset)                                   | 0.3.0 | 阻止非超级用户使用SET/RESET设置变量          |
| [pg_tde](https://pgext.cloud/e/pg_tde)                                 | 1.0   | Percona加密存储引擎                   |
| [sepgsql](https://pgext.cloud/e/sepgsql)                               | -     | 基于SELinux标签的强制访问控制              |
| [auth_delay](https://pgext.cloud/e/auth_delay)                         | -     | 在返回认证失败前暂停一会，避免爆破               |
| [pgcrypto](https://pgext.cloud/e/pgcrypto)                             | 1.3   | 实用加解密函数                         |
| [passwordcheck](https://pgext.cloud/e/passwordcheck)                   | -     | 用于强制拒绝修改弱密码的扩展                  |

安装所有安全扩展包：

```yaml
pg_extensions: [ pg18-sec ]  # 安装安全类扩展组
```


### 告警与监控

**默认配置**：

- VictoriaMetrics + Alertmanager 提供监控告警
- 预置 PostgreSQL 告警规则
- Grafana 可视化仪表板

关键安全相关告警：
- 认证失败次数过多
- 复制延迟过大
- 备份失败
- 磁盘空间不足
- 连接数耗尽




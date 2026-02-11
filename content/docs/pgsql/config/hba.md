---
title: HBA 规则
weight: 60
description: Pigsty 中 PostgreSQL 与 Pgbouncer 的 HBA（Host-Based Authentication）规则配置详解。
icon: fa-solid fa-key
module: [PGSQL]
categories: [配置]
---

## 概述

HBA（Host-Based Authentication）控制"谁可以从哪里、以什么方式连接到数据库"。
Pigsty 通过 [**`pg_default_hba_rules`**](#pg_default_hba_rules) 与 [**`pg_hba_rules`**](#pg_hba_rules) 让 HBA 规则也能以声明式配置形式管理。

Pigsty 在集群初始化或 HBA 刷新时渲染以下配置文件：

| 配置文件           | 路径                            | 说明                     |
|:---------------|:------------------------------|:-----------------------|
| PostgreSQL HBA | `/pg/data/pg_hba.conf`        | PostgreSQL 服务器的 HBA 规则 |
| Pgbouncer HBA  | `/etc/pgbouncer/pgb_hba.conf` | 连接池 Pgbouncer 的 HBA 规则 |

HBA 规则由以下参数控制：

| 参数                                                | 层级    | 说明                     |
|:--------------------------------------------------|:------|:-----------------------|
| [`pg_default_hba_rules`](#pg_default_hba_rules)   | G     | PostgreSQL 全局默认 HBA 规则 |
| [`pg_hba_rules`](#pg_hba_rules)                   | G/C/I | PostgreSQL 集群/实例级追加规则  |
| [`pgb_default_hba_rules`](#pgb_default_hba_rules) | G     | Pgbouncer 全局默认 HBA 规则  |
| [`pgb_hba_rules`](#pgb_hba_rules)                 | G/C/I | Pgbouncer 集群/实例级追加规则   |

规则支持以下特性：

- **按角色过滤**：规则支持 `role` 字段，根据实例的 `pg_role` 自动筛选生效
- **按顺序排序**：规则支持 `order` 字段，控制规则在最终配置文件中的位置
- **两种写法**：支持别名形式（简化语法）和原始形式（直接 HBA 文本）


----------------

## 刷新 HBA

修改配置后，需要重新渲染配置文件并让服务重载：

```bash
bin/pgsql-hba <cls>                   # 刷新整个集群的 HBA 规则（推荐）
bin/pgsql-hba <cls> <ip>...           # 刷新集群中指定实例的 HBA 规则
```

脚本内部执行以下剧本命令：

```bash
./pgsql.yml -l <cls> -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload -e pg_reload=true
```

**仅刷新 PostgreSQL**：`./pgsql.yml -l <cls> -t pg_hba,pg_reload -e pg_reload=true`

**仅刷新 Pgbouncer**：`./pgsql.yml -l <cls> -t pgbouncer_hba,pgbouncer_reload`

{{% alert title="不要直接编辑配置文件" color="warning" %}}
不要直接编辑 `/pg/data/pg_hba.conf` 或 `/etc/pgbouncer/pgb_hba.conf`，下次执行 playbook 时会被覆盖。
所有变更应在 `pigsty.yml` 中进行，然后执行 `bin/pgsql-hba` 刷新。
{{% /alert %}}


----------------

## 参数详解

### `pg_default_hba_rules`

PostgreSQL 全局默认 HBA 规则列表，通常定义在 `all.vars` 中，为所有 PostgreSQL 集群提供基础访问控制。

- 类型：`rule[]`，层级：全局 (G)

```yaml
pg_default_hba_rules:
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

### `pg_hba_rules`

PostgreSQL 集群/实例级 HBA 追加规则，可在集群或实例级别覆盖，与默认规则合并后按 `order` 排序。

- 类型：`rule[]`，层级：全局/集群/实例 (G/C/I)，默认值：`[]`

```yaml
pg_hba_rules:
  - {user: app_user, db: app_db, addr: intra, auth: pwd, title: 'app user access'}
```

### `pgb_default_hba_rules`

Pgbouncer 全局默认 HBA 规则列表，通常定义在 `all.vars` 中。

- 类型：`rule[]`，层级：全局 (G)

```yaml
pgb_default_hba_rules:
  - {user: '${dbsu}'    ,db: pgbouncer   ,addr: local     ,auth: peer  ,title: 'dbsu local admin access with os ident',order: 100}
  - {user: 'all'        ,db: all         ,addr: localhost ,auth: pwd   ,title: 'allow all user local access with pwd' ,order: 150}
  - {user: '${monitor}' ,db: pgbouncer   ,addr: intra     ,auth: pwd   ,title: 'monitor access via intranet with pwd' ,order: 200}
  - {user: '${monitor}' ,db: all         ,addr: world     ,auth: deny  ,title: 'reject all other monitor access addr' ,order: 250}
  - {user: '${admin}'   ,db: all         ,addr: intra     ,auth: pwd   ,title: 'admin access via intranet with pwd'   ,order: 300}
  - {user: '${admin}'   ,db: all         ,addr: world     ,auth: deny  ,title: 'reject all other admin access addr'   ,order: 350}
  - {user: 'all'        ,db: all         ,addr: intra     ,auth: pwd   ,title: 'allow all user intra access with pwd' ,order: 400}
```

### `pgb_hba_rules`

Pgbouncer 集群/实例级 HBA 追加规则。

- 类型：`rule[]`，层级：全局/集群/实例 (G/C/I)，默认值：`[]`

> **注意**：Pgbouncer HBA 不支持 `db: replication`。


----------------

## 规则字段

每条 HBA 规则是一个 YAML 字典，支持以下字段：

| 字段 | 类型 | 必需 | 默认值 | 说明 |
|:-----|:-----|:-----|:-------|:-----|
| `user` | string | 否 | `all` | 用户名，支持 `all`、变量占位符、`+rolename` 等 |
| `db` | string | 否 | `all` | 数据库名，支持 `all`、`replication`、具体库名 |
| `addr` | string | 是* | - | 地址别名或 CIDR，见 [**地址别名**](#地址别名) |
| `auth` | string | 否 | `pwd` | 认证方式别名，见 [**认证方式**](#认证方式) |
| `title` | string | 否 | - | 规则说明/注释，会渲染为配置文件中的注释 |
| `role` | string | 否 | `common` | 实例角色过滤，见 [**角色过滤**](#角色过滤) |
| `order` | int | 否 | `1000` | 排序权重，数字小的排前面，见 [**排序机制**](#排序机制) |
| `rules` | list | 是* | - | 原始 HBA 文本行列表，与 `addr` 二选一 |

> `addr` 和 `rules` 必须指定其一。使用 `rules` 时可以直接写原始 HBA 格式。


----------------

## 地址别名

Pigsty 提供地址别名，简化 HBA 规则编写：

| 别名 | 展开为 | 说明 |
|:-----|:-------|:-----|
| `local` | Unix socket | 本地 Unix 套接字连接 |
| `localhost` | Unix socket + `127.0.0.1/32` + `::1/128` | 本地回环地址 |
| `admin` | `${admin_ip}/32` | 管理员 IP 地址 |
| `infra` | 所有 infra 组节点 IP | 基础设施节点列表 |
| `cluster` | 当前集群所有成员 IP | 同一集群内的所有实例 |
| `intra` / `intranet` | `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` | 内网 CIDR 网段 |
| `world` / `all` | `0.0.0.0/0` + `::/0` | 任意地址（IPv4 + IPv6） |
| `<CIDR>` | 直接使用 | 如 `192.168.1.0/24`、`10.1.1.100/32` |

内网 CIDR 可通过 `node_firewall_intranet` 参数自定义：

```yaml
node_firewall_intranet:
  - 10.0.0.0/8
  - 172.16.0.0/12
  - 192.168.0.0/16
```


----------------

## 认证方式

Pigsty 提供认证方式别名，简化配置：

| 别名 | 实际方式 | 连接类型 | 说明 |
|:-----|:---------|:---------|:-----|
| `pwd` | `scram-sha-256` 或 `md5` | `host` | 根据 `pg_pwd_enc` 自动选择 |
| `ssl` | `scram-sha-256` 或 `md5` | `hostssl` | 强制 SSL + 密码 |
| `ssl-sha` | `scram-sha-256` | `hostssl` | 强制 SSL + SCRAM-SHA-256 |
| `ssl-md5` | `md5` | `hostssl` | 强制 SSL + MD5 |
| `cert` | `cert` | `hostssl` | 客户端证书认证 |
| `trust` | `trust` | `host` | 无条件信任（危险） |
| `deny` / `reject` | `reject` | `host` | 拒绝连接 |
| `ident` | `ident` | `host` | OS 用户映射（PostgreSQL） |
| `peer` | `peer` | `local` | OS 用户映射（Pgbouncer/本地） |

> `pg_pwd_enc` 默认为 `scram-sha-256`，可设为 `md5` 以兼容老客户端。


----------------

## 用户变量

HBA 规则支持以下用户占位符，渲染时自动替换为实际用户名：

| 占位符 | 默认值 | 对应参数 |
|:-------|:-------|:---------|
| `${dbsu}` | `postgres` | `pg_dbsu` |
| `${repl}` | `replicator` | `pg_replication_username` |
| `${monitor}` | `dbuser_monitor` | `pg_monitor_username` |
| `${admin}` | `dbuser_dba` | `pg_admin_username` |


----------------

## 角色过滤

HBA 规则的 `role` 字段控制规则在哪些实例上生效：

| 角色 | 说明 |
|:-----|:-----|
| `common` | 默认值，所有实例都生效 |
| `primary` | 仅主库实例生效 |
| `replica` | 仅从库实例生效 |
| `offline` | 仅离线实例生效（`pg_role: offline` 或 `pg_offline_query: true`） |
| `standby` | 备库实例 |
| `delayed` | 延迟从库实例 |

角色过滤基于实例的 `pg_role` 变量进行匹配，不匹配的规则会被注释掉（以 `#` 开头）。

```yaml
pg_hba_rules:
  # 仅在主库生效：写入用户只能连主库
  - {user: writer, db: all, addr: intra, auth: pwd, role: primary, title: 'writer only on primary'}

  # 仅在离线实例生效：ETL 任务专用网络
  - {user: '+dbrole_offline', db: all, addr: '172.20.0.0/16', auth: ssl, role: offline, title: 'offline dedicated'}
```


----------------

## 排序机制

PostgreSQL HBA 是 **首条匹配生效**，规则顺序至关重要。Pigsty 通过 `order` 字段控制规则渲染顺序。

**Order 区间约定**

| 区间 | 用途 |
|:-----|:-----|
| `0 - 99` | 用户高优先规则（在所有默认规则之前） |
| `100 - 650` | 默认规则区（间隔 50，便于插入） |
| `1000+` | 用户规则默认值（不填 `order` 时追加到最后） |

**PostgreSQL 默认规则 Order 分配**

| Order | 规则说明 |
|:------|:---------|
| 100 | dbsu local ident |
| 150 | dbsu replication local |
| 200 | replicator localhost |
| 250 | replicator intra replication |
| 300 | replicator intra postgres |
| 350 | monitor localhost |
| 400 | monitor infra |
| 450 | admin infra ssl |
| 500 | admin world ssl |
| 550 | dbrole_readonly localhost |
| 600 | dbrole_readonly intra |
| 650 | dbrole_offline intra |

**Pgbouncer 默认规则 Order 分配**

| Order | 规则说明 |
|:------|:---------|
| 100 | dbsu local peer |
| 150 | all localhost pwd |
| 200 | monitor pgbouncer intra |
| 250 | monitor world deny |
| 300 | admin intra pwd |
| 350 | admin world deny |
| 400 | all intra pwd |


----------------

## 写法示例

**别名形式**：使用 Pigsty 提供的简化语法

```yaml
pg_hba_rules:
  - title: allow grafana view access
    role: primary
    user: dbuser_view
    db: meta
    addr: infra
    auth: ssl
```

渲染结果：

```ini
# allow grafana view access [primary]
hostssl  meta               dbuser_view        10.10.10.10/32     scram-sha-256
```

**原始形式**：直接使用 PostgreSQL HBA 语法

```yaml
pg_hba_rules:
  - title: allow intranet password access
    role: common
    rules:
      - host all all 10.0.0.0/8 scram-sha-256
      - host all all 172.16.0.0/12 scram-sha-256
      - host all all 192.168.0.0/16 scram-sha-256
```

渲染结果：

```ini
# allow intranet password access [common]
host all all 10.0.0.0/8 scram-sha-256
host all all 172.16.0.0/12 scram-sha-256
host all all 192.168.0.0/16 scram-sha-256
```


----------------

## 常见配置场景

**黑名单 IP**：使用 `order: 0` 确保最先匹配

```yaml
pg_hba_rules:
  - {user: all, db: all, addr: '10.1.1.100/32', auth: deny, order: 0, title: 'block bad ip'}
```

**白名单应用服务器**：高优先级允许特定 IP

```yaml
pg_hba_rules:
  - {user: app_user, db: app_db, addr: '192.168.1.10/32', auth: ssl, order: 50, title: 'app server'}
```

**管理员强制证书**：覆盖默认的 SSL 密码认证

```yaml
pg_hba_rules:
  - {user: '${admin}', db: all, addr: world, auth: cert, order: 10, title: 'admin cert only'}
```

**离线实例专用网络**：仅在 offline 实例生效

```yaml
pg_hba_rules:
  - {user: '+dbrole_offline', db: all, addr: '172.20.0.0/16', auth: ssl-sha, role: offline, title: 'etl network'}
```

**按数据库限制访问**：敏感库仅允许特定网段

```yaml
pg_hba_rules:
  - {user: fin_user, db: finance_db, addr: '10.20.0.0/16', auth: ssl, title: 'finance only'}
  - {user: hr_user, db: hr_db, addr: '10.30.0.0/16', auth: ssl, title: 'hr only'}
```

**Pgbouncer 专用规则**：注意不支持 `db: replication`

```yaml
pgb_hba_rules:
  - {user: '+dbrole_readwrite', db: all, addr: world, auth: ssl, title: 'app via pgbouncer'}
```


----------------

## 完整集群示例

```yaml
pg-prod:
  hosts:
    10.10.10.11: {pg_seq: 1, pg_role: primary}
    10.10.10.12: {pg_seq: 2, pg_role: replica}
    10.10.10.13: {pg_seq: 3, pg_role: offline}
  vars:
    pg_cluster: pg-prod

    pg_hba_rules:
      # 黑名单：已知恶意 IP（最高优先级）
      - {user: all, db: all, addr: '10.1.1.100/32', auth: deny, order: 0, title: 'blacklist'}

      # 应用服务器白名单（高优先级）
      - {user: app_user, db: app_db, addr: '192.168.1.0/24', auth: ssl, order: 50, title: 'app servers'}

      # ETL 任务：仅离线实例
      - {user: etl_user, db: all, addr: '172.20.0.0/16', auth: pwd, role: offline, title: 'etl tasks'}

      # 集群内监控访问
      - {user: '${monitor}', db: all, addr: cluster, auth: pwd, order: 380, title: 'cluster monitor'}

    pgb_hba_rules:
      # 应用通过连接池
      - {user: '+dbrole_readwrite', db: all, addr: '192.168.1.0/24', auth: ssl, title: 'app via pgbouncer'}
```


----------------

## 验证与排查

**查看当前 HBA 规则**

```bash
psql -c "TABLE pg_hba_file_rules"         # 通过 SQL 查看（推荐）
cat /pg/data/pg_hba.conf                  # 查看 PostgreSQL HBA 文件
cat /etc/pgbouncer/pgb_hba.conf           # 查看 Pgbouncer HBA 文件
grep '^#' /pg/data/pg_hba.conf | head -20 # 查看规则标题（验证 order）
```

**测试连接认证**

```bash
psql -h <host> -p 5432 -U <user> -d <db> -c "SELECT 1"
```

**常见问题排查**

| 错误信息 | 可能原因 | 解决方案 |
|:---------|:---------|:---------|
| `no pg_hba.conf entry for host...` | 没有匹配的 HBA 规则 | 添加对应规则并刷新 |
| `password authentication failed` | 密码错误或加密方式不兼容 | 检查密码和 `pg_pwd_enc` |
| 规则不生效 | 未刷新或 order 被覆盖 | 执行 `bin/pgsql-hba` 并检查顺序 |


----------------

## 注意事项

1. **顺序敏感**：PostgreSQL HBA 首条匹配生效，善用 `order` 字段
2. **角色匹配**：确保 `role` 字段与目标实例的 `pg_role` 一致
3. **地址格式**：CIDR 必须正确，如 `10.0.0.0/8` 而非 `10.0.0.0/255.0.0.0`
4. **Pgbouncer 限制**：不支持 `db: replication`
5. **SSL 前提**：使用 `ssl`、`cert` 认证前确保 SSL 已正确配置
6. **测试优先**：修改 HBA 前建议先在测试环境验证
7. **扩缩容刷新**：使用 `addr: cluster` 的规则在集群成员变化后需要刷新


----------------

## 相关文档

- [**HBA 管理**](/docs/pgsql/misc/hba/)：HBA 规则的日常管理操作与故障排查
- [**用户配置**](/docs/pgsql/config/user/)：用户与角色配置
- [**访问控制**](/docs/pgsql/config/acl/)：角色体系与权限模型
- [**安全与合规**](/docs/concept/sec/)：PostgreSQL 集群的安全特性

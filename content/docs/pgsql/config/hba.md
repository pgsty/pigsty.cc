---
title: HBA 规则
weight: 1206
description: Pigsty 中 PostgreSQL 与 Pgbouncer 的 HBA（Host-Based Authentication）规则配置详解。
icon: fa-solid fa-key
module: [PGSQL]
categories: [配置]
---

> HBA（Host-Based Authentication）控制"谁可以从哪里、以什么方式连接到数据库"。
> Pigsty 通过 `pg_default_hba_rules` 与 `pg_hba_rules` 让 HBA 规则也能以声明式配置形式管理。


----------------

## 概述

Pigsty 在集群初始化或 HBA 刷新时渲染以下配置文件：

| 配置文件 | 路径 | 说明 |
|---------|------|------|
| PostgreSQL HBA | `/pg/data/pg_hba.conf` | PostgreSQL 服务器的 HBA 规则 |
| Pgbouncer HBA | `/etc/pgbouncer/pgb_hba.conf` | 连接池 Pgbouncer 的 HBA 规则 |

HBA 规则由以下参数控制：

| 参数 | 层级 | 说明 |
|------|------|------|
| [`pg_default_hba_rules`](#pg_default_hba_rules) | G | PostgreSQL 全局默认 HBA 规则 |
| [`pg_hba_rules`](#pg_hba_rules) | G/C/I | PostgreSQL 集群/实例级追加规则 |
| [`pgb_default_hba_rules`](#pgb_default_hba_rules) | G | Pgbouncer 全局默认 HBA 规则 |
| [`pgb_hba_rules`](#pgb_hba_rules) | G/C/I | Pgbouncer 集群/实例级追加规则 |

规则特性：

- **按角色过滤**：规则支持 `role` 字段，根据实例的 `pg_role` 自动筛选生效
- **按顺序排序**：规则支持 `order` 字段，控制规则在最终配置文件中的位置
- **两种写法**：支持别名形式（简化语法）和原始形式（直接 HBA 文本）


----------------

## 参数详解


### `pg_default_hba_rules`

PostgreSQL 全局默认 HBA 规则列表，通常定义在 `all.vars` 中，为所有 PostgreSQL 集群提供基础访问控制。

- 类型：`rule[]`
- 层级：全局 (G)
- 默认值：见下文

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

- 类型：`rule[]`
- 层级：全局/集群/实例 (G/C/I)
- 默认值：`[]`

```yaml
pg_hba_rules:
  - {user: app_user, db: app_db, addr: intra, auth: pwd, title: 'app user access'}
```


### `pgb_default_hba_rules`

Pgbouncer 全局默认 HBA 规则列表，通常定义在 `all.vars` 中。

- 类型：`rule[]`
- 层级：全局 (G)
- 默认值：见下文

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

- 类型：`rule[]`
- 层级：全局/集群/实例 (G/C/I)
- 默认值：`[]`

> **注意**：Pgbouncer HBA 不支持 `db: replication`。


----------------

## 规则字段

每条 HBA 规则是一个 YAML 字典，支持以下字段：

| 字段 | 类型 | 必需 | 默认值 | 说明 |
|------|------|------|--------|------|
| `user` | string | 否 | `all` | 用户名，支持 `all`、变量占位符、`+rolename` 等 |
| `db` | string | 否 | `all` | 数据库名，支持 `all`、`replication`、具体库名 |
| `addr` | string | 是* | - | 地址别名或 CIDR，见[地址别名](#地址别名) |
| `auth` | string | 否 | `pwd` | 认证方式别名，见[认证方式](#认证方式) |
| `title` | string | 否 | - | 规则说明/注释，会渲染为配置文件中的注释 |
| `role` | string | 否 | `common` | 实例角色过滤，见[角色过滤](#角色过滤) |
| `order` | int | 否 | `1000` | 排序权重，数字小的排前面，见[排序机制](#排序机制) |
| `rules` | list | 是* | - | 原始 HBA 文本行列表，与 `addr` 二选一 |

> `addr` 和 `rules` 必须指定其一。使用 `rules` 时可以直接写原始 HBA 格式。


----------------

## 地址别名

Pigsty 提供地址别名，简化 HBA 规则编写：

| 别名 | 展开为 | 说明 |
|------|--------|------|
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
|------|----------|----------|------|
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

| 占位符 | 默认值 | 说明 |
|--------|--------|------|
| `${dbsu}` | `postgres` | 数据库超级用户 |
| `${repl}` | `replicator` | 复制用户 |
| `${monitor}` | `dbuser_monitor` | 监控用户 |
| `${admin}` | `dbuser_dba` | 管理员用户 |

这些变量的实际值由对应参数控制：

```yaml
pg_dbsu: postgres
pg_replication_username: replicator
pg_monitor_username: dbuser_monitor
pg_admin_username: dbuser_dba
```


----------------

## 角色过滤

HBA 规则的 `role` 字段控制规则在哪些实例上生效：

| 角色 | 说明 |
|------|------|
| `common` | 默认值，所有实例都生效 |
| `primary` | 仅主库实例生效 |
| `replica` | 仅从库实例生效 |
| `offline` | 仅离线实例生效（`pg_role: offline` 或 `pg_offline_query: true`） |
| `standby` | 备库实例 |
| `delayed` | 延迟从库实例 |

角色过滤基于实例的 `pg_role` 变量进行匹配。不匹配的规则会被注释掉（以 `#` 开头）。

```yaml
pg_hba_rules:
  # 仅在主库生效
  - {user: writer, db: all, addr: intra, auth: pwd, role: primary, title: 'writer only on primary'}

  # 仅在离线实例生效
  - {user: '+dbrole_offline', db: all, addr: '172.20.0.0/16', auth: ssl, role: offline, title: 'offline dedicated'}
```


----------------

## 排序机制

PostgreSQL HBA 是**首条匹配生效**，规则顺序至关重要。Pigsty 通过 `order` 字段控制规则渲染顺序。

### Order 区间约定

| 区间 | 用途 |
|------|------|
| `0 - 99` | 用户高优先规则（在所有默认规则之前） |
| `100 - 650` | 默认规则区（间隔 50，便于插入） |
| `1000+` | 用户规则默认值（不填 `order` 时追加到最后） |

### 默认规则 Order 分配

**PostgreSQL 默认规则**：

| Order | 规则说明 |
|-------|----------|
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

**Pgbouncer 默认规则**：

| Order | 规则说明 |
|-------|----------|
| 100 | dbsu local peer |
| 150 | all localhost pwd |
| 200 | monitor pgbouncer intra |
| 250 | monitor world deny |
| 300 | admin intra pwd |
| 350 | admin world deny |
| 400 | all intra pwd |

### 排序示例

```yaml
pg_hba_rules:
  # order: 0，在所有默认规则之前（黑名单）
  - {user: all, db: all, addr: '10.1.1.100/32', auth: deny, order: 0, title: 'blacklist bad ip'}

  # order: 120，在 dbsu(100) 和 replicator(200) 之间
  - {user: auditor, db: all, addr: local, auth: ident, order: 120, title: 'auditor access'}

  # order: 420，在 monitor(400) 和 admin(450) 之间
  - {user: exporter, db: all, addr: infra, auth: pwd, order: 420, title: 'prometheus exporter'}

  # 不填 order，默认 1000，追加到所有默认规则之后
  - {user: app_user, db: app_db, addr: intra, auth: pwd, title: 'app user access'}
```


----------------

## 写法示例

### 别名形式

使用 Pigsty 提供的简化语法：

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

```
# allow grafana view access [primary]
hostssl  meta               dbuser_view        10.10.10.10/32     scram-sha-256
```

### 原始形式

直接使用 PostgreSQL HBA 语法：

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

```
# allow intranet password access [common]
host all all 10.0.0.0/8 scram-sha-256
host all all 172.16.0.0/12 scram-sha-256
host all all 192.168.0.0/16 scram-sha-256
```


----------------

## 常见配置示例

### 1. 内网密码访问业务库

```yaml
pg_hba_rules:
  - title: 'intra readwrite access'
    role: common
    user: '+dbrole_readwrite'
    db: all
    addr: intra
    auth: pwd
```

> 效果：所有业务读写角色可以从内网网段使用密码访问任意数据库。


### 2. 离线实例专用网络

```yaml
pg_hba_rules:
  - title: 'offline replica dedicated network'
    role: offline
    user: '+dbrole_offline'
    db: all
    addr: 172.20.0.0/16
    auth: ssl-sha
```

> 效果：仅 `pg_role: offline` 或 `pg_offline_query: true` 的实例启用该规则。


### 3. 黑名单 IP

```yaml
pg_hba_rules:
  - user: all
    db: all
    addr: '10.1.1.100/32'
    auth: deny
    order: 0
    title: 'block compromised host'
```

> 效果：`order: 0` 排在所有默认规则（100+）之前，优先匹配并拒绝。


### 4. 白名单特定应用

```yaml
pg_hba_rules:
  - title: 'allow app server access'
    user: app_user
    db: app_db
    addr: '192.168.1.10/32'
    auth: ssl
    order: 50
```

> 效果：特定应用服务器使用 SSL 连接，高优先级（50）确保在默认规则之前匹配。


### 5. 管理员强制证书认证

```yaml
pg_hba_rules:
  - title: 'admin cert access'
    role: common
    user: '${admin}'
    db: all
    addr: world
    auth: cert
    order: 10
```

> 效果：管理员必须携带客户端证书才能连接，`order: 10` 优先于默认的 ssl 规则（450/500）。


### 6. 允许外网只读访问

```yaml
pg_hba_rules:
  - title: 'readonly from internet'
    role: replica
    user: '+dbrole_readonly'
    db: all
    addr: world
    auth: ssl
```

> 效果：只读用户可从外网通过 SSL 连接从库。


### 7. Pgbouncer 专用规则

```yaml
pgb_hba_rules:
  - title: 'app via pgbouncer'
    role: common
    user: '+dbrole_readwrite'
    db: all
    addr: world
    auth: ssl
```

> 注意：Pgbouncer HBA 不支持 `db: replication`。


### 8. 多条件组合

```yaml
pg_hba_rules:
  # 开发环境：信任本地连接
  - {user: all, db: all, addr: local, auth: trust, title: 'dev trust local'}

  # 生产环境：严格 SSL
  - {user: '+dbrole_readwrite', db: all, addr: intra, auth: ssl-sha, title: 'prod ssl only'}

  # 监控专用：从 Prometheus 节点
  - {user: '${monitor}', db: all, addr: infra, auth: pwd, order: 380, title: 'prometheus access'}
```


### 9. 按数据库限制访问

```yaml
pg_hba_rules:
  # 财务系统：仅允许特定网段
  - {user: fin_user, db: finance_db, addr: '10.20.0.0/16', auth: ssl, title: 'finance restricted'}

  # HR 系统：仅允许 HR 网段
  - {user: hr_user, db: hr_db, addr: '10.30.0.0/16', auth: ssl, title: 'hr restricted'}
```


### 10. 完整集群配置示例

```yaml
pg-prod:
  hosts:
    10.10.10.11: {pg_seq: 1, pg_role: primary}
    10.10.10.12: {pg_seq: 2, pg_role: replica}
    10.10.10.13: {pg_seq: 3, pg_role: offline}
  vars:
    pg_cluster: pg-prod

    pg_hba_rules:
      # 黑名单：已知恶意 IP
      - {user: all, db: all, addr: '10.1.1.100/32', auth: deny, order: 0, title: 'blacklist'}

      # 应用服务器白名单
      - {user: app_user, db: app_db, addr: '192.168.1.0/24', auth: ssl, order: 50, title: 'app servers'}

      # ETL 任务：仅离线实例
      - {user: etl_user, db: all, addr: '172.20.0.0/16', auth: pwd, role: offline, title: 'etl tasks'}

      # 监控增强
      - {user: '${monitor}', db: all, addr: cluster, auth: pwd, order: 380, title: 'cluster monitor'}

    pgb_hba_rules:
      # 应用通过连接池
      - {user: '+dbrole_readwrite', db: all, addr: '192.168.1.0/24', auth: ssl, title: 'app via pgbouncer'}
```


----------------

## 渲染原理

Pigsty 使用 Jinja2 模板渲染 HBA 配置文件：

1. **合并规则**：`pg_default_hba_rules` + `pg_hba_rules`
2. **排序规则**：按 `order` 字段升序排列（无 `order` 的规则追加到最后）
3. **角色过滤**：根据实例 `pg_role` 筛选，不匹配的规则被注释
4. **变量替换**：`${dbsu}` 等占位符替换为实际用户名
5. **地址展开**：`intra`、`infra` 等别名展开为实际 IP/CIDR
6. **认证映射**：`pwd`、`ssl` 等别名映射为实际认证方式

模板位置：
- PostgreSQL：`roles/pgsql/templates/pg_hba.conf`
- Pgbouncer：`roles/pgsql/templates/pgbouncer.hba`


----------------

## 注意事项

1. **顺序敏感**：PostgreSQL HBA 首条匹配生效，规则顺序很重要
2. **角色匹配**：确保 `role` 字段与目标实例的 `pg_role` 一致
3. **地址验证**：CIDR 格式必须正确，如 `10.0.0.0/8` 而非 `10.0.0.0/255.0.0.0`
4. **Pgbouncer 限制**：不支持 `db: replication`
5. **变量作用域**：用户变量仅限预定义的四个（`${dbsu}`, `${repl}`, `${monitor}`, `${admin}`）
6. **SSL 配置**：使用 `ssl`、`cert` 认证方式前确保 SSL 已正确配置
7. **测试优先**：修改 HBA 前建议先在测试环境验证


----------------

## 测试与验证

Pigsty 提供了 HBA order 排序功能的测试工具，可在部署前验证配置正确性：

### 运行排序逻辑测试

```bash
# 在 pigsty 目录下运行排序逻辑测试
./files/test-hba-order.yml
```

该测试验证：
- 规则按 `order` 字段正确排序
- 无 `order` 字段的规则追加到末尾
- 相同 `order` 值的规则保持原始顺序（稳定排序）
- 向后兼容性（旧配置无需修改）

### 运行模板渲染测试

```bash
# 在目标服务器上测试 HBA 模板渲染
./files/test-hba-render.yml -l 10.10.10.10
```

该测试在目标服务器上渲染 HBA 模板，验证：
- 模板语法正确
- 规则顺序符合预期
- 高优先级规则出现在前面

### 验证渲染结果

```bash
# 查看渲染后的 PostgreSQL HBA
cat /pg/data/pg_hba.conf

# 查看规则标题顺序（验证 order 生效）
grep '^#' /pg/data/pg_hba.conf | grep -v '^#=' | head -20

# 验证首条规则是否为预期的高优先级规则
head -30 /pg/data/pg_hba.conf
```


----------------

## 相关参数

| 参数                        | 说明                                |
|---------------------------|-----------------------------------|
| `pg_pwd_enc`              | 密码加密方式：`scram-sha-256`（默认）或 `md5` |
| `pg_dbsu`                 | 数据库超级用户名                          |
| `pg_replication_username` | 复制用户名                             |
| `pg_monitor_username`     | 监控用户名                             |
| `pg_admin_username`       | 管理员用户名                            |
| `node_firewall_intranet`  | 内网 CIDR 定义                        |


----------------

## 相关文档

- [**HBA 管理**](/docs/pgsql/admin/hba/)：HBA 规则的日常管理操作
- [**用户配置**](/docs/pgsql/config/user/)：用户与角色配置
- [**访问控制**](/docs/pgsql/config/acl/)：角色体系与权限模型
- [**安全与合规**](/docs/concept/sec/)：PostgreSQL 集群的安全特性

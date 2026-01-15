---
title: 管理 PostgreSQL HBA 认证规则
linkTitle: HBA 管理
weight: 50
draft: true
description: HBA 管理：刷新规则、验证配置、故障排查、Pgbouncer HBA
icon: fa-solid fa-key
module: [PGSQL]
categories: [任务]
---

## 快速上手

Pigsty 使用声明式管理方式，首先在 [**配置清单**](/docs/concept/iac/inventory) 中 [**定义 HBA 规则**](/docs/pgsql/config/hba)，然后使用 `bin/pgsql-hba <cls>` 刷新规则。

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_hba_rules:                            # <--- 在这里定义 HBA 规则列表！
      - {user: dbuser_app, db: app, addr: intra, auth: pwd, title: 'app access'}
      - {user: dbuser_api, db: all, addr: world, auth: ssl, title: 'api ssl access'}
```


{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-hba <cls>              # 刷新集群的 PostgreSQL 和 Pgbouncer HBA 规则
bin/pgsql-hba <cls> <ip>...      # 刷新集群中特定实例的 HBA 规则
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l <cls> -t pg_hba,pg_reload                 # 仅刷新 PostgreSQL HBA
./pgsql.yml -l <cls> -t pgbouncer_hba,pgbouncer_reload   # 仅刷新 Pgbouncer HBA
./pgsql.yml -l <cls> -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload  # 同时刷新两者
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-hba pg-meta                      # 刷新 pg-meta 集群的 HBA 规则
bin/pgsql-hba pg-meta 10.10.10.10          # 仅刷新特定实例
bin/pgsql-hba pg-meta 10.10.10.11 10.10.10.12  # 刷新多个实例
```
{{% /tab %}}
{{< /tabpane >}}

关于 HBA 规则定义参数的完整参考，请查阅 [**HBA 配置**](/docs/pgsql/config/hba)。关于访问控制的整体设计，请参考 [**安全与合规**](/docs/concept/sec/)。

| 操作                          | 说明                      | 风险  |
|:----------------------------|:------------------------|:---:|
| [**刷新 HBA 规则**](#刷新-hba-规则) | 重新渲染配置文件并重载服务           | 低   |
| [**验证 HBA 规则**](#验证-hba-规则) | 查看当前生效规则，测试连接认证         | 只读  |
| [**常见管理场景**](#常见管理场景)       | 添加规则、封禁 IP、角色区分、扩容刷新    | 低   |
| [**故障排查**](#故障排查)           | 连接被拒绝、认证失败、规则未生效        | -   |
| [**Pgbouncer HBA**](#pgbouncer-hba) | Pgbouncer 连接池的 HBA 管理 | 低   |
{.full-width}


{{< asciinema file="demo/pgsql-hba.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}


----------------

## 刷新 HBA 规则

修改 `pigsty.yml` 中的 HBA 规则后，需要重新渲染配置文件并让服务重载。

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-hba <cls>              # 刷新整个集群的 HBA 规则（PostgreSQL + Pgbouncer）
bin/pgsql-hba <cls> <ip>...      # 刷新特定实例（多个 IP 空格分隔）
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l <cls> -t pg_hba,pg_reload                 # 仅刷新 PostgreSQL HBA
./pgsql.yml -l <cls> -t pgbouncer_hba,pgbouncer_reload   # 仅刷新 Pgbouncer HBA
./pgsql.yml -l <cls> -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload  # 同时刷新两者
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-hba pg-meta                      # 刷新 pg-meta 集群
bin/pgsql-hba pg-meta 10.10.10.10          # 仅刷新 10.10.10.10 实例
```
{{% /tab %}}
{{< /tabpane >}}

**执行效果**：根据配置清单中的 HBA 规则定义，渲染 PostgreSQL 和 Pgbouncer 的 HBA 配置文件，然后重载服务使配置生效。

**配置文件位置**

| 服务         | 配置文件路径                        | 模板文件                                  |
|:-----------|:------------------------------|:--------------------------------------|
| PostgreSQL | `/pg/data/pg_hba.conf`        | `roles/pgsql/templates/pg_hba.conf`   |
| Pgbouncer  | `/etc/pgbouncer/pgb_hba.conf` | `roles/pgsql/templates/pgbouncer.hba` |
{.full-width}

{{% alert title="不要直接编辑配置文件" color="warning" %}}
直接编辑 `/pg/data/pg_hba.conf` 或 `/etc/pgbouncer/pgb_hba.conf` 虽然可以临时生效，但下次执行 Ansible 剧本时会被覆盖。所有 HBA 规则变更应在 `pigsty.yml` 中进行，然后执行 `bin/pgsql-hba` 刷新。
{{% /alert %}}

**相关 Tags**

| Tag                | 说明                                     |
|:-------------------|:---------------------------------------|
| `pg_hba`           | 渲染 PostgreSQL HBA 配置文件                 |
| `pg_reload`        | 重载 PostgreSQL 配置（需配合 `pg_reload=true`） |
| `pgbouncer_hba`    | 渲染 Pgbouncer HBA 配置文件                  |
| `pgbouncer_reload` | 重载 Pgbouncer 配置                        |
{.full-width}


----------------

## 验证 HBA 规则

刷新 HBA 规则后，可以通过以下方式验证配置是否正确生效。

**查看当前生效的 HBA 规则**

{{< tabpane text=true persist=header >}}
{{% tab header="SQL" %}}
```sql
-- 查看 PostgreSQL HBA 规则（推荐）
TABLE pg_hba_file_rules;

-- 查看特定数据库的匹配规则
SELECT * FROM pg_hba_file_rules WHERE database @> ARRAY['mydb']::text[];
```
{{% /tab %}}
{{% tab header="Bash" %}}
```bash
# 查看 PostgreSQL HBA 配置文件
cat /pg/data/pg_hba.conf

# 查看 Pgbouncer HBA 配置文件
cat /etc/pgbouncer/pgb_hba.conf

# 查看配置文件头部（确认是否更新）
head -20 /pg/data/pg_hba.conf
```
{{% /tab %}}
{{% tab header="测试连接" %}}
```bash
# 测试特定用户从特定地址的连接
psql -h <host> -p 5432 -U <user> -d <database> -c "SELECT 1"

# 测试通过 Pgbouncer 连接
psql -h <host> -p 6432 -U <user> -d <database> -c "SELECT 1"
```
{{% /tab %}}
{{< /tabpane >}}

**检查 HBA 配置语法**

```bash
# 重载配置（会验证语法）
psql -c "SELECT pg_reload_conf()"

# 如果有语法错误，查看日志
tail -f /pg/log/postgresql-*.log
```


----------------

## 常见管理场景

### 添加新的 HBA 规则

在集群配置的 `pg_hba_rules` 中添加规则，然后执行刷新：

```yaml
pg-meta:
  vars:
    pg_hba_rules:
      - {user: new_user, db: new_db, addr: '192.168.1.0/24', auth: pwd, title: 'new app access'}
```

```bash
bin/pgsql-hba pg-meta
```


### 紧急封禁 IP

当发现恶意 IP 时，可以添加高优先级（`order: 0`）的拒绝规则：

```yaml
pg_hba_rules:
  - {user: all, db: all, addr: '10.1.1.100/32', auth: deny, order: 0, title: 'emergency block'}
```

```bash
bin/pgsql-hba pg-meta    # 立即刷新生效
```


### 按角色区分规则

为主库和从库配置不同的 HBA 规则，使用 `role` 参数：

```yaml
pg_hba_rules:
  # 仅主库允许写入用户
  - {user: writer, db: all, addr: intra, auth: pwd, role: primary, title: 'writer on primary'}
  # 从库允许只读用户
  - {user: reader, db: all, addr: world, auth: ssl, role: replica, title: 'reader on replica'}
```

执行刷新后，规则会根据实例的 `pg_role` 自动启用或禁用。


### 集群扩容后刷新 HBA

当集群新增实例后，使用 `addr: cluster` 的规则需要刷新才能包含新成员：

```bash
./pgsql.yml -l 10.10.10.14       # 扩容新实例
bin/pgsql-hba pg-meta            # 刷新所有实例的 HBA（包含新成员 IP）
```


### 主从切换后刷新 HBA

Patroni 故障转移后，实例的 `pg_role` 可能与配置不一致。如果 HBA 规则使用了 `role` 过滤，需要更新配置并刷新：

```bash
# 更新 pigsty.yml 中的角色定义后刷新
bin/pgsql-hba pg-meta
```


----------------

## 故障排查

### 连接被拒绝

**症状**：`FATAL: no pg_hba.conf entry for host "x.x.x.x", user "xxx", database "xxx"`

**排查步骤**：

1. 检查当前 HBA 规则，确认是否有匹配的规则：
```bash
psql -c "TABLE pg_hba_file_rules"
```

2. 确认客户端 IP、用户名、数据库是否匹配任何规则

3. 检查规则顺序（HBA 是首条匹配生效）

4. 在配置清单中添加对应规则并刷新：
```bash
bin/pgsql-hba <cls>
```


### 认证失败

**症状**：`FATAL: password authentication failed for user "xxx"`

**排查步骤**：

1. 确认密码正确
2. 检查密码加密方式（[**`pg_pwd_enc`**](/docs/pgsql/param#pg_pwd_enc)）与客户端兼容性
3. 检查用户是否存在：
```sql
SELECT * FROM pg_roles WHERE rolname = 'xxx';
```


### HBA 规则未生效

**排查步骤**：

1. 确认已执行刷新命令
2. 检查 Ansible 执行是否成功
3. 确认 PostgreSQL 已重载：
```bash
psql -c "SELECT pg_reload_conf()"
```

4. 检查配置文件是否更新：
```bash
head -20 /pg/data/pg_hba.conf
```


### 规则顺序问题

HBA 是首条匹配生效，如果规则未按预期工作：

1. 检查规则定义中的 `order` 值
2. 使用 `psql -c "TABLE pg_hba_file_rules"` 查看实际顺序
3. 调整 `order` 值（数字越小优先级越高）


----------------

## Pgbouncer HBA

Pgbouncer 的 HBA 管理与 PostgreSQL 类似，但有一些差异。

**配置差异**

| 差异点   | PostgreSQL               | Pgbouncer                 |
|:------|:-------------------------|:--------------------------|
| 配置文件  | `/pg/data/pg_hba.conf`   | `/etc/pgbouncer/pgb_hba.conf` |
| 复制连接  | 支持 `db: replication`    | 不支持                       |
| 本地认证  | 使用 `ident`              | 使用 `peer`                 |
{.full-width}

**刷新 Pgbouncer HBA**

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-hba <cls>    # 同时刷新 PostgreSQL 和 Pgbouncer
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l <cls> -t pgbouncer_hba,pgbouncer_reload   # 仅刷新 Pgbouncer HBA
```
{{% /tab %}}
{{% tab header="查看" %}}
```bash
cat /etc/pgbouncer/pgb_hba.conf    # 查看 Pgbouncer HBA 规则
```
{{% /tab %}}
{{< /tabpane >}}


----------------

## 最佳实践

1. **始终在配置文件中管理**：不要直接编辑 `pg_hba.conf`，所有变更通过 `pigsty.yml`
2. **测试环境先验证**：HBA 变更可能导致连接问题，先在测试环境验证
3. **使用 order 控制优先级**：黑名单规则使用 `order: 0`，确保优先匹配
4. **及时刷新**：添加/删除实例、主从切换后及时刷新 HBA
5. **最小权限原则**：只开放必要的访问，避免使用 `addr: world` + `auth: trust`
6. **监控认证失败**：关注 `pg_stat_activity` 中的认证失败记录
7. **备份配置**：重要变更前备份 `pigsty.yml`


----------------

## 相关文档

- [**HBA 配置**](/docs/pgsql/config/hba/)：HBA 规则的配置语法与参数详解
- [**用户管理**](/docs/pgsql/admin/user/)：用户与角色的管理操作
- [**访问控制**](/docs/pgsql/config/acl/)：角色体系与权限模型
- [**安全与合规**](/docs/concept/sec/)：PostgreSQL 集群的安全特性


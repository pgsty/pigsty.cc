---
title: 管理 PostgreSQL HBA 认证规则
linkTitle: HBA 管理
weight: 50
description: PostgreSQL 与 Pgbouncer HBA 规则的日常管理操作：刷新、重载、验证与故障排查。
icon: fa-solid fa-key
module: [PGSQL]
categories: [任务]
---

> HBA 规则的变更需要重新渲染配置文件并重载服务。本文介绍 HBA 规则的日常管理操作。

--------

## 速查手册

| 操作              | 命令                                                       |
|-----------------|----------------------------------------------------------|
| 刷新集群 HBA        | `bin/pgsql-hba <cls>`                                    |
| 刷新特定实例          | `bin/pgsql-hba <cls> <ip>...`                            |
| 仅刷新 PostgreSQL  | `./pgsql.yml -l <cls> -t pg_hba,pg_reload`               |
| 仅刷新 Pgbouncer   | `./pgsql.yml -l <cls> -t pgbouncer_hba,pgbouncer_reload` |
| 查看当前 HBA (BASH) | `cat /pg/data/pg_hba.conf`                               |
| 查看当前 HBA (SQL)  | `psql -c "TABLE pg_hba_file_rules"`                      |
| 重载 HBA 配置       | `psql -c "SELECT pg_reload_conf()"`                      |
{.full-width}

----------------

## 刷新 HBA 规则

修改 `pigsty.yml` 中的 HBA 规则后，需要重新渲染配置文件并让服务重载。


### 使用管理脚本

推荐使用 `bin/pgsql-hba` 脚本，一键完成 PostgreSQL 和 Pgbouncer 的 HBA 刷新：

```bash
# 刷新整个集群的 HBA 规则
bin/pgsql-hba pg-meta

# 刷新特定实例（多个 IP 空格分隔）
bin/pgsql-hba pg-meta 10.10.10.10
bin/pgsql-hba pg-meta 10.10.10.11 10.10.10.12

# 查看脚本帮助
bin/pgsql-hba --help
```

脚本内部执行：

```bash
./pgsql.yml -l <cluster> -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload
```


### 使用 Ansible Playbook

直接使用 `pgsql.yml` playbook 的相关 tags：

```bash
# 刷新 PostgreSQL HBA 并重载
./pgsql.yml -l pg-meta -t pg_hba,pg_reload

# 刷新 Pgbouncer HBA 并重载
./pgsql.yml -l pg-meta -t pgbouncer_hba,pgbouncer_reload

# 同时刷新两者
./pgsql.yml -l pg-meta -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload

# 使用额外变量强制重载
./pgsql.yml -l pg-meta -e pg_reload=true -t pg_hba,pg_reload
```


### 相关 Tags

| Tag                | 说明                                     |
|--------------------|----------------------------------------|
| `pg_hba`           | 渲染 PostgreSQL HBA 配置文件                 |
| `pg_reload`        | 重载 PostgreSQL 配置（需配合 `pg_reload=true`） |
| `pgbouncer_hba`    | 渲染 Pgbouncer HBA 配置文件                  |
| `pgbouncer_reload` | 重载 Pgbouncer 配置                        |
{.full-width}


----------------

## 配置文件位置

HBA 配置文件由 Ansible 渲染生成：

| 服务         | 配置文件路径                        | 模板文件                                  |
|------------|-------------------------------|---------------------------------------|
| PostgreSQL | `/pg/data/pg_hba.conf`        | `roles/pgsql/templates/pg_hba.conf`   |
| Pgbouncer  | `/etc/pgbouncer/pgb_hba.conf` | `roles/pgsql/templates/pgbouncer.hba` |
{.full-width}

> **警告**：不要直接编辑这些文件，下次执行 playbook 时会被覆盖。所有变更应在 `pigsty.yml` 中进行。


----------------

## 验证 HBA 规则

### 查看当前生效的 HBA 规则

```bash
# 使用 psql 查看 PostgreSQL HBA 规则
psql -c "TABLE pg_hba_file_rules"

# 或者直接查看配置文件
cat /pg/data/pg_hba.conf

# 查看 Pgbouncer HBA 规则
cat /etc/pgbouncer/pgb_hba.conf
```

### 检查 HBA 配置语法

```bash
# PostgreSQL 重载配置（会验证语法）
psql -c "SELECT pg_reload_conf()"

# 如果有语法错误，查看日志
tail -f /pg/log/postgresql-*.log
```

### 测试连接认证

```bash
# 测试特定用户从特定地址的连接
psql -h <host> -p 5432 -U <user> -d <database> -c "SELECT 1"

# 查看连接被哪条 HBA 规则匹配
psql -c "SELECT * FROM pg_hba_file_rules WHERE database @> ARRAY['<dbname>']::text[]"
```


----------------

## 常见管理场景

### 添加新的 HBA 规则

1. 编辑 `pigsty.yml`，在集群的 `pg_hba_rules` 中添加规则：

```yaml
pg-meta:
  vars:
    pg_hba_rules:
      - {user: new_user, db: new_db, addr: '192.168.1.0/24', auth: pwd, title: 'new app access'}
```

2. 执行刷新：

```bash
bin/pgsql-hba pg-meta
```


### 紧急封禁 IP

当发现恶意 IP 时，可以快速添加黑名单规则：

1. 添加高优先级（`order: 0`）的拒绝规则：

```yaml
pg_hba_rules:
  - {user: all, db: all, addr: '10.1.1.100/32', auth: deny, order: 0, title: 'emergency block'}
```

2. 立即刷新：

```bash
bin/pgsql-hba pg-meta
```


### 按角色区分规则

为主库和从库配置不同的 HBA 规则：

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
# 扩容新实例
./pgsql.yml -l 10.10.10.14

# 刷新所有实例的 HBA（包含新成员 IP）
bin/pgsql-hba pg-meta
```


### 主从切换后刷新 HBA

Patroni 故障转移后，实例的 `pg_role` 可能与配置不一致。如果 HBA 规则使用了 `role` 过滤，需要：

1. 更新 `pigsty.yml` 中的角色定义
2. 刷新 HBA 规则

```bash
# 更新配置文件中的角色后刷新
bin/pgsql-hba pg-meta
```


----------------

## 故障排查

### 连接被拒绝

**症状**：`FATAL: no pg_hba.conf entry for host "x.x.x.x", user "xxx", database "xxx"`

**排查步骤**：

1. 检查当前 HBA 规则：
```bash
psql -c "TABLE pg_hba_file_rules"
```

2. 确认客户端 IP、用户名、数据库是否匹配任何规则

3. 检查规则顺序（首条匹配生效）

4. 添加对应规则并刷新


### 认证失败

**症状**：`FATAL: password authentication failed for user "xxx"`

**排查步骤**：

1. 确认密码正确
2. 检查密码加密方式（`pg_pwd_enc`）与客户端兼容性
3. 检查用户是否存在：`\du` 或 `SELECT * FROM pg_roles WHERE rolname = 'xxx'`


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

1. 检查 `order` 值
2. 使用 `psql -c "TABLE pg_hba_file_rules"` 查看实际顺序
3. 调整 `order` 值或规则位置


----------------

## 在线修改 HBA（不推荐）

虽然可以直接编辑 `/pg/data/pg_hba.conf` 并重载，但**不推荐**这样做：

```bash
# 直接编辑（不推荐）
vi /pg/data/pg_hba.conf

# 重载配置
psql -c "SELECT pg_reload_conf()"
# 或
pg_ctl reload -D /pg/data
# 或
systemctl reload postgresql
```

**问题**：下次执行 Ansible playbook 时，手动修改会被覆盖。

**正确做法**：始终在 `pigsty.yml` 中修改，然后执行 `bin/pgsql-hba` 刷新。


----------------

## Pgbouncer HBA 管理

Pgbouncer 的 HBA 管理与 PostgreSQL 类似，但有一些差异：

### 配置差异

- 配置文件：`/etc/pgbouncer/pgb_hba.conf`
- 不支持 `db: replication`
- 认证方式：本地连接使用 `peer` 而非 `ident`

### 刷新命令

```bash
# 仅刷新 Pgbouncer HBA
./pgsql.yml -l pg-meta -t pgbouncer_hba,pgbouncer_reload

# 或使用统一脚本（同时刷新 PostgreSQL 和 Pgbouncer）
bin/pgsql-hba pg-meta
```

### 查看 Pgbouncer HBA

```bash
cat /etc/pgbouncer/pgb_hba.conf
```


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

## 相关命令速查

```bash
# 刷新 HBA（推荐）
bin/pgsql-hba <cluster>

# 查看 PostgreSQL HBA
psql -c "TABLE pg_hba_file_rules"
cat /pg/data/pg_hba.conf

# 查看 Pgbouncer HBA
cat /etc/pgbouncer/pgb_hba.conf

# 重载 PostgreSQL 配置
psql -c "SELECT pg_reload_conf()"

# 测试连接
psql -h <host> -U <user> -d <db> -c "SELECT 1"

# 查看认证失败日志
tail -f /pg/log/postgresql-*.log | grep -i auth
```


----------------

## 相关文档

- [**HBA 配置**](/docs/pgsql/config/hba/)：HBA 规则的配置语法与参数详解
- [**用户管理**](/docs/pgsql/admin/user/)：用户与角色的管理操作
- [**访问控制**](/docs/pgsql/config/acl/)：角色体系与权限模型
- [**安全与合规**](/docs/concept/sec/)：PostgreSQL 集群的安全特性

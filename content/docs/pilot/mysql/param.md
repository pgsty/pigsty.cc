---
title: 参数参考
weight: 5012
description: MYSQL 模块 13 项公开参数：11 项部署参数、2 项受保护移除参数，以及固定平台约定。
icon: fa-solid fa-sliders
module: [MYSQL]
categories: [参考]
---

MYSQL 部署角色刻意只公开 11 项参数，移除角色另有 2 项受保护运维参数。软件版本、端口、目录、字符集、TLS 路径与定时器表达式由角色统一固定，内存基线按节点规格推导；需要调整服务器行为时使用 [`mysql_parameters`](#mysql_parameters)。


--------

## 参数概览

| 参数 | 层级 | 默认值 | 说明 |
|:---|:---:|:---|:---|
| [`mysql_cluster`](#mysql_cluster) | 集群 | 必填 | 集群名与身份 |
| [`mysql_seq`](#mysql_seq) | 实例 | 必填 | 单机 `1`；HA 连续 `1..3` |
| [`mysql_root_password`](#mysql_root_password) | 集群 | `DBUser.Root` | 本地 root 密码 |
| [`mysql_monitor_password`](#mysql_monitor_password) | 集群 | `DBUser.Monitor` | Exporter 监控身份密码 |
| [`mysql_cluster_password`](#mysql_cluster_password) | 集群 | `DBUser.Cluster` | AdminAPI/Router/备份身份密码 |
| [`mysql_databases`](#mysql_databases) | 集群 | `[]` | 增量收敛的业务数据库 |
| [`mysql_users`](#mysql_users) | 集群 | `[]` | 增量收敛的业务用户与授权 |
| [`mysql_parameters`](#mysql_parameters) | 集群/实例 | `{}` | `[mysqld]` 参数覆盖 |
| [`mysql_backup_enabled`](#mysql_backup_enabled) | 集群 | `true` | 每日全量备份定时器 |
| [`mysql_backup_repo`](#mysql_backup_repo) | 集群 | 见下文 | 本地备份目录与保留份数 |
| [`mysql_exporter_enabled`](#mysql_exporter_enabled) | 集群 | `true` | Exporter 与监控 Target |
{.full-width}

移除参数由 `mysql-rm.yml` 使用：

| 参数 | 层级 | 默认值 | 说明 |
|:---|:---:|:---|:---|
| [`mysql_safeguard`](#mysql_safeguard) | 全局/集群/命令行 | `true` | 默认拒绝执行移除 |
| [`mysql_rm_confirm`](#mysql_rm_confirm) | 命令行 | `''` | 必须精确匹配实例名或集群名 |
{.full-width}

旧版页面曾出现的 `mysql_role`、`mysql_services`、`mysql_packages`、`mysql_data`、`mysql_port`、`mysql_replication_*`、`mysql_*_username` 等变量已不属于公开接口，请勿使用。


--------

## 身份参数

### `mysql_cluster`

必填的集群身份，必须与清单分组名一致（预检要求成员位于同名分组）。字母、数字或下划线开头，可含 `._-`，最长 63 字符：

```yaml
mysql_cluster: my-test
```

用于生成实例名（`my-test-1`）、MGR Group UUID（由集群名确定性推导）、备份目录（`<repo>/my-test/`）与监控标签 `cls`。

### `mysql_seq`

必填的实例序号。单机为 `1`；三节点必须是连续的 `1、2、3`，并直接作为 `server_id`：

```yaml
10.10.10.11: { mysql_seq: 1 }
```

`mysql_seq=1` 仅表示首次引导时的协调者；运行时主库由 MGR 选举决定，重跑剧本不会迁回主库。


--------

## 凭据参数

### `mysql_root_password`

本地 `root@'localhost'` 密码，仅限本机使用（套接字或回环地址）。不能包含换行，不能保留 `CHANGE_ME` 前缀：

```yaml
mysql_root_password: MySQL.Root
```

首次启动时设置；此后如果现场密码与声明不一致，任务会 **拒绝隐式重置** 并明确报错——修改 root 密码需要先手工 `ALTER USER` 再同步清单。

### `mysql_monitor_password`

`dbuser_monitor@'127.0.0.1'` 密码，供 mysqld_exporter 使用，仅限本机回环地址、最多 3 连接、只读权限：

```yaml
mysql_monitor_password: MySQL.Monitor
```

### `mysql_cluster_password`

`dbuser_cluster@'%'`（要求 TLS）与 `dbuser_backup@'localhost'` 共用的平台密码，用于 AdminAPI 集群管理、Router 引导与 XtraBackup：

```yaml
mysql_cluster_password: MySQL.Cluster
```

HA 集群中该密码写入集群 Metadata 与 Router 密钥环，**不能通过普通重跑轮换**：现场值与声明不一致时预检直接拒绝。单机实例无此绑定，改清单重跑即生效。


--------

## 业务对象

### `mysql_databases`

增量收敛的业务数据库列表，字段 `name / encoding / collate / encrypt`：

```yaml
mysql_databases:
  - { name: app }
  - { name: app2, encoding: utf8mb4, collate: utf8mb4_general_ci, encrypt: false }
```

只创建与更新，不会因移除条目而删除数据库。写法与校验规则见 [集群配置](/docs/pilot/mysql/config#业务数据库)。

### `mysql_users`

增量收敛的业务用户列表，字段 `name / host / password / connlimit / priv`：

```yaml
mysql_users:
  - name: app
    host: '%'
    password: DBUser.App
    connlimit: 20
    priv: { 'app.*': 'ALL PRIVILEGES' }
```

授权只增不减（移除映射不会 REVOKE）；平台身份（root、monitor、cluster、backup）不可声明。写法与校验规则见 [集群配置](/docs/pilot/mysql/config#业务用户)。


--------

## `mysql_parameters`

`[mysqld]` 段参数覆盖字典，渲染在托管配置末尾，同名参数后写生效：

```yaml
mysql_parameters:
  max_connections: 500
  long_query_time: 2
  innodb_buffer_pool_size: 2G
  innodb_print_all_deadlocks: true    # true/false 渲染为 ON/OFF
```

约束与行为：

- 键名 `[A-Za-z][A-Za-z0-9_.-]{0,63}`，值为单行标量；渲染后仍经 `mysqld --validate-config` 校验，写错参数在部署阶段失败而不影响运行中的实例；
- **保留参数拒绝覆盖**（`-`/`_` 写法同判）：`user`、`pid_file`、`server_id`、`datadir`、`socket`、`port`、`bind_address`、`mysqlx_bind_address`、`report_host`、`gtid_mode`、`enforce_gtid_consistency`、`log_bin`、`relay_log`、`plugin_load_add`，以及 `group_replication_*` 与 TLS 相关（`require_secure_transport`、`ssl_*`）全族；
- 变更后重跑 `mysql.yml` 触发编排式滚动重启（从库先行、主库殿后），HA 集群预期仅主库切换瞬间有秒级写中断；
- 平台默认值中可覆盖的典型项：`sql_require_primary_key`（默认 `ON`）、`long_query_time`（默认 `1`）、`binlog_expire_logs_seconds`（默认 7 天）、内存类参数。

会话级动态参数（AdminAPI 通过 `SET PERSIST` 管理的少数复制参数）以运行时为准；角色会在每次收敛时把 `group_replication_group_seeds` 钉回声明成员表，避免持久化漂移。


--------

## 备份参数

### `mysql_backup_enabled`

是否启用每日备份定时器（`mysql-backup.timer`，每日触发、随机延迟 30 分钟内）：

```yaml
mysql_backup_enabled: true
```

设为 `false` 停用定时器，但保留备份脚本与配置。注意：若备份目录从未创建过（备份从未启用），手工触发会因目录缺失直接退出。

### `mysql_backup_repo`

本地备份仓库定义，当前只支持 `local` 一种方式：

```yaml
mysql_backup_repo:
  local:
    path: /data/backups/mysql     # 绝对路径，不能与数据目录重叠
    retention: 7                  # 保留最近 N 份已提交全量（1-9999）
```

目录布局与恢复流程见 [日常管理](/docs/pilot/mysql/admin#管理备份)。


--------

## 监控参数

### `mysql_exporter_enabled`

是否启用 mysqld_exporter 与 VictoriaMetrics Target 注册：

```yaml
mysql_exporter_enabled: true
```

设为 `false` 时停用 Exporter 服务，并将 `/infra/targets/mysql/<实例>.yml` 收敛为空列表（不删除文件；文件只由 `mysql-rm.yml` 删除）。


--------

## 移除参数

### `mysql_safeguard`

受保护移除的保险开关，默认值为 `true`。执行 `mysql-rm.yml` 时必须显式设置为 `false`，否则角色会拒绝继续：

```bash
./mysql-rm.yml -l my-test -e mysql_safeguard=false -e mysql_rm_confirm=my-test
```

### `mysql_rm_confirm`

目标名称确认字符串，默认值为空。移除单个成员时必须精确等于实例名（例如 `my-test-3`）；移除完整集群或单机实例时必须精确等于 `mysql_cluster`。该参数与 `mysql_safeguard=false` 缺一不可。


--------

## 固定平台约定

以下值由角色固定或推导，**不是** 清单参数，列出供运维参考：

| 项目 | 值 |
|:---|:---|
| 软件版本 | MySQL Server/Client/Shell/Router 8.4 LTS、Percona XtraBackup 8.4 |
| 端口 | `3306`（Classic）、`33060`（X Protocol，单机仅回环）、`33061`（MGR）、`6446/6447`（Router RW/RO）、`9104`（Exporter） |
| 数据目录 | `/var/lib/mysql`（Binlog 于 `binlog/` 子目录，7 天过期） |
| 配置文件 | EL：`/etc/my.cnf.d/pigsty.cnf`；Debian/Ubuntu：`/etc/mysql/mysql.conf.d/pigsty.cnf` |
| 服务单元 | MySQL：EL 为 `mysqld`，Debian/Ubuntu 为 `mysql`；Router：`mysqlrouter`；Exporter：`mysqld_exporter` |
| 凭据与脚本 | `/etc/mysql/pigsty/`（root 属主：目录 `0700`、文件 `0600`） |
| 日志 | 错误日志 `/var/log/mysql/error.log` 并镜像到 Journald；慢查询 `/var/log/mysql/slow.log`（阈值 1s） |
| TLS | 强制加密（`require_secure_transport=ON`）；CA `/etc/pki/ca.crt`，叶证书 `/etc/mysql/pki/` |
| 字符集 | `utf8mb4` / `utf8mb4_0900_ai_ci` |
| 内存基线 | 缓冲池 = max(节点内存 × 25%, 256MB)；Redo = clamp(缓冲池 × 50%, 128MB, 4GB) |
| 复制 | GTID 强制、`sql_require_primary_key=ON`、MGR 单主、故障切换读一致性 `BEFORE_ON_PRIMARY_FAILOVER` |
| 数据目录标记 | `.pigsty-mysql-initialized`（属主校验）与 `.pigsty-mysql-retired`（退役防护） |
{.full-width}

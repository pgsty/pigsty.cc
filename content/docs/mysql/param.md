---
title: 参数参考
weight: 5012
description: MYSQL 模块 16 项公开参数：13 项部署参数、3 项受保护移除参数，以及固定平台约定。
icon: fa-solid fa-sliders
module: [MYSQL]
categories: [参考]
---

MYSQL 部署角色公开 **13 项** 参数，移除角色另有 **3 项** 受保护运维参数（合计 **16 项**）。软件版本、端口、字符集、TLS 路径与定时器表达式由角色统一固定，内存基线按节点规格与是否混部 PG 自动推导；需要调整服务器行为时使用 [`mysql_parameters`](#mysql_parameters)。


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
| [`mysql_data`](#mysql_data) | 集群/实例 | `/data/mysql` | MySQL 数据目录（含 `binlog/` 与 `tmp/`） |
| [`mysql_backup_enabled`](#mysql_backup_enabled) | 集群 | `true` | 每日全量备份定时器 |
| [`mysql_backup_dir`](#mysql_backup_dir) | 集群 | `/data/backups/mysql` | 本地物理备份根目录 |
| [`mysql_backup_retention`](#mysql_backup_retention) | 集群 | `3` | 本地保留的全量备份份数 |
| [`mysql_exporter_enabled`](#mysql_exporter_enabled) | 集群 | `true` | Exporter 与监控 Target |
{.full-width .wide .expand}

移除参数由 `mysql-rm.yml` 使用：

| 参数 | 层级 | 默认值 | 说明 |
|:---|:---:|:---|:---|
| [`mysql_safeguard`](#mysql_safeguard) | 全局/集群/命令行 | `true` | 防误删保险，默认拒绝执行移除 |
| [`mysql_rm_data`](#mysql_rm_data) | 全局/集群/命令行 | `true` | 是否清理数据目录与受管配置（始终保留备份目录） |
| [`mysql_rm_pkg`](#mysql_rm_pkg) | 全局/集群/命令行 | `false` | 是否一并卸载 MySQL / Router / XtraBackup / Exporter 软件包 |
{.full-width .wide .expand}

旧版曾出现的 `mysql_backup_repo`（已被预检显式拦截拒绝）、`mysql_rm_confirm`、`mysql_role`、`mysql_services`、`mysql_packages`、`mysql_port`、`mysql_replication_*`、`mysql_*_username` 等变量不属于当前公开接口，请勿使用。


--------

## 身份参数

### `mysql_cluster`

必填的集群身份，必须与清单分组名一致（预检要求成员位于同名分组）。字母、数字或下划线开头，可含 `._-`，最长 63 字符：

```yaml
mysql_cluster: my-test
```

用于生成实例名（`my-test-1`）、AdminAPI 集群名、备份子目录（`<mysql_backup_dir>/my-test/`）与监控标签 `cls`（MGR Group UUID 由 AdminAPI 在建群时自动生成并由集群自行持有）。

### `mysql_seq`

必填的实例序号。单机为 `1`；三节点必须是连续的 `1、2、3`：

```yaml
10.10.10.11: { mysql_seq: 1 }
```

`mysql_seq=1` 仅表示首次引导时的协调者；运行时主库由 MGR 选举决定，重跑剧本不会迁回主库。注意 `mysql_seq` 不直接作为 `server_id`（`server_id` 由成员 IPv4 地址按 32 位无符号整数自动推导）。


--------

## 凭据参数

### `mysql_root_password`

本地 `root@'localhost'` 密码，仅限本机使用（套接字或回环地址）。不能包含换行，不能保留 `CHANGE_ME` 前缀：

默认值为 `DBUser.Root`：

```yaml
mysql_root_password: DBUser.Root
```

首次启动时设置；此后如果现场密码与声明不一致，任务会 **拒绝隐式重置** 并明确报错——修改 root 密码需要先手工 `ALTER USER` 再同步清单。

### `mysql_monitor_password`

`dbuser_monitor@'127.0.0.1'` 密码，供 `mysqld_exporter` 使用，仅限本机回环地址、最多 3 连接、只读权限。默认值为 `DBUser.Monitor`：

```yaml
mysql_monitor_password: DBUser.Monitor
```

该密码渲染至 Go INI 格式的 `/etc/mysqld_exporter.cnf`（模板会将 `$` 转义为 `$$`），**禁止包含 `%(...)s` 形式的 INI 插值语法**（如 `%(host)s`），否则预检会直接拒绝。

### `mysql_cluster_password`

`dbuser_cluster@'%'`（要求 TLS）与 `dbuser_backup@'localhost'` 共用的平台密码，用于 AdminAPI 集群管理、Router 引导与 XtraBackup：

默认值为 `DBUser.Cluster`：

```yaml
mysql_cluster_password: DBUser.Cluster
```

HA 集群中该密码写入集群 Metadata 与 Router 密钥环，**不能通过普通重跑轮换**：现场值与声明不一致时预检直接拒绝。单机实例无此绑定，改清单重跑即生效。


--------

## 业务对象

### `mysql_databases`

增量收敛的业务数据库列表，仅接受 `name / encoding / collate` 三个字段：

```yaml
mysql_databases:
  - { name: app }
  - { name: app2, encoding: utf8mb4, collate: utf8mb4_general_ci }
```

只创建与更新，不会因移除条目而删除数据库。写法与校验规则见 [集群配置](/docs/mysql/config#业务数据库)。

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

授权只增不减（移除映射不会 REVOKE）；平台身份（root、monitor、cluster、backup）不可声明。写法与校验规则见 [集群配置](/docs/mysql/config#业务用户)。


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
- **保留参数拒绝覆盖**（`-`/`_` 写法同判，校验前还会剥离 `loose_`、`skip_`、`disable_`、`enable_` 前缀及其组合）：`user`、`pid_file`、`server_id`、`datadir`、`socket`、`port`、`bind_address`、`mysqlx_bind_address`、`report_host`、`gtid_mode`、`enforce_gtid_consistency`、`log_bin`、`relay_log`、`require_secure_transport`、`ssl_ca`、`ssl_cert`、`ssl_key`、`plugin_load`、`plugin_load_add`、`clone`、`plugin_clone`、`mysqlx`、`plugin_mysqlx`，以及 `group_replication_*`、`plugin_group_replication*`、`plugin_mysqlx_bind_address` 与 `ssl_*` 全族；
- 变更后重跑 `mysql.yml` 触发编排式滚动重启（从库先行、主库殿后），HA 集群预期仅主库切换瞬间有秒级写中断；
- 平台默认值中可覆盖的典型项：`sql_require_primary_key`（默认 `ON`）、`long_query_time`（默认 `1`）、`binlog_expire_logs_seconds`（默认 7 天）、内存类参数。

会话级动态参数（AdminAPI 通过 `SET PERSIST` 管理的少数复制参数）以运行时为准；角色会在每次收敛时把 `group_replication_group_seeds` 钉回声明成员表，避免持久化漂移。


--------

## 存储与备份参数

### `mysql_data`

MySQL 数据目录路径，默认值为 `/data/mysql`（Binlog 与临时目录分别位于其下 `binlog/` 与 `tmp/` 子目录）：

```yaml
mysql_data: /data/mysql
```

约束与平台行为：

- 必须为多级绝对路径，不能与 `mysql_backup_dir` 相等或互相嵌套，也不能位于 `/etc`、`/usr`、`/var`、`/tmp` 等系统保留路径下（唯一例外是原地纳管旧版 `/var/lib/mysql`）；
- 若节点 `/var/lib/mysql` 下已存在初始化过的系统库而 `mysql_data` 被设为其他路径，预检会主动拒绝，防止在旧数据旁误拉起空库；
- Debian/Ubuntu 节点会自动维护 `/etc/apparmor.d/local/usr.sbin.mysqld` 本地放行规则，EL 节点会自动执行 `restorecon -RF`。

### `mysql_backup_enabled`

是否启用每日备份定时器（`mysql-backup.timer`，每日触发、随机延迟 30 分钟内）：

```yaml
mysql_backup_enabled: true
```

启用时，若 `<mysql_backup_dir>/<mysql_cluster>/latest/backup.ok` 尚不存在，`mysql_backup` 阶段会自动在当前可写主库上执行一次初始基线备份。设为 `false` 时停用定时器并移除 `/var/lib/node_exporter/textfile/mysql.prom` 备份指标文件，但保留已有备份与脚本。

### `mysql_backup_dir`

本地物理全量备份根目录，默认值为 `/data/backups/mysql`：

```yaml
mysql_backup_dir: /data/backups/mysql
```

必须为非系统保留区的多级绝对路径，且不能与 `mysql_data` 重叠。集群备份实际落盘在 `<mysql_backup_dir>/<mysql_cluster>/` 下，即使是销毁数据的 `mysql-rm.yml` 也 **绝不删除** 该备份目录。注意旧版结构化参数 `mysql_backup_repo` 已废弃并会被预检断言拒绝。

### `mysql_backup_retention`

本地保留的已提交全量物理备份份数（`1..9999`），默认值为 `3`：

```yaml
mysql_backup_retention: 3
```

每次新备份完成 `--prepare` 并原子更新 `latest` 软链后，脚本会自动清理超出保留份数的旧备份目录。目录布局与恢复流程见 [日常管理](/docs/mysql/admin#管理备份)。


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

受保护移除的防误删保险开关，默认值为 `true`（与 [`VAULT`](/docs/vault/param#vault_safeguard) 模块的 `vault_safeguard` 一样默认开启）。执行 `mysql-rm.yml` 时必须显式传入 `-e mysql_safeguard=false`，否则剧本在预检阶段拒绝执行：

```bash
./mysql-rm.yml -l my-test -e mysql_safeguard=false
```

### `mysql_rm_data`

移除时是否销毁数据目录与受管配置文件，默认值为 `true`：

```yaml
mysql_rm_data: true
```

- 默认 `true`：在停止服务并注销监控后，彻底删除 `mysql_data`、`/etc/mysql/pigsty`、`/etc/mysql/pki`、`pigsty.cnf`、Router 配置与密钥环、Exporter 配置、systemd 覆写与备份单元、`/var/lib/pigsty/mysql-backup`、`/var/lib/node_exporter/textfile/mysql.prom` 及 `/etc/profile.d/mysql.sh`，**但始终保留 `mysql_backup_dir` 备份目录**；
- 设为 `false`：**仅整集群下线支持**（`-l <cluster> -e mysql_safeguard=false -e mysql_rm_data=false`），只停止服务并摘除监控注册，原样保留数据目录与配置，后续执行 `./mysql.yml -l <cluster>` 即可原地拉起并恢复集群；单成员摘除强制要求 `mysql_rm_data=true`。

### `mysql_rm_pkg`

移除时是否一并卸载 MySQL Server/Client/Shell/Router、Percona XtraBackup 与 `mysqld_exporter` 软件包，默认值为 `false`：

```yaml
mysql_rm_pkg: false
```


--------

## 固定平台约定

以下值由角色固定或推导，**不是** 清单参数，列出供运维参考：

| 项目 | 值 |
|:---|:---|
| 软件版本 | MySQL Server/Client/Shell/Router 8.4 LTS、Percona XtraBackup 8.4 |
| 端口与 VIP | `3306`（Classic）、`33060`（X Protocol，单机仅回环）、`33061`（MGR）、`6446/6447`（Router RW/RO，启用 `NODE` 二层 VIP 时同步暴露 `<vip>:6446/6447`）、`9104`（Exporter） |
| 身份推导 | `server_id` 由成员 IPv4 地址按 32 位无符号整数自动推导（非 IPv4 取 SHA-1 前 32 位）；MGR Group UUID 由 AdminAPI 自动生成 |
| 配置文件 | EL：`/etc/my.cnf.d/pigsty.cnf`；Debian/Ubuntu：`/etc/mysql/mysql.conf.d/pigsty.cnf`（另自动维护 AppArmor 本地规则） |
| 服务单元 | MySQL：EL 为 `mysqld`，Debian/Ubuntu 为 `mysql`；Router：`mysqlrouter`；Exporter：`mysqld_exporter`；备份：`mysql-backup.{service,timer}` |
| 凭据与快捷命令 | `/etc/mysql/pigsty/`（root 属主：目录 `0700`、文件 `0600`）；`/etc/profile.d/mysql.sh` 提供 `my` 与 `mysh` 快捷命令 |
| 日志与备份状态 | 错误日志 `/var/log/mysql/error.log` 并镜像到 Journald；慢查询 `/var/log/mysql/slow.log`（阈值 1s）；备份失败工作日志 `/var/lib/pigsty/mysql-backup/`；备份指标 `/var/lib/node_exporter/textfile/mysql.prom` |
| TLS | 强制加密（`require_secure_transport=ON`）；CA `/etc/pki/ca.crt`，叶证书 `/etc/mysql/pki/`（自动包含节点地址与可选 `NODE` VIP SAN） |
| 字符集 | `utf8mb4` / `utf8mb4_0900_ai_ci` |
| 内存与连接基线 | 缓冲池 = 独占节点 50% 内存 / 与 PG 混部（定义 `pg_cluster`）25% 内存（预留至少 1 GiB 系统内存，下限 256 MiB）；Redo = `clamp(缓冲池 × 50%, 128 MiB, 4 GiB)`；`max_connections` = `1000` |
| 复制 | GTID 强制、`sql_require_primary_key=ON`、MGR 单主、故障切换读一致性 `BEFORE_ON_PRIMARY_FAILOVER` |
| 数据目录标记 | `<mysql_data>/.pigsty-mysql-initialized`（记录 `version`、`cluster`、`instance`、`topology` 用于属主校验） |
{.full-width .wide .expand}

---
title: 集群配置
weight: 5011
description: 规划 MySQL 拓扑与身份，声明业务数据库、用户、参数覆盖与备份策略。
icon: fa-solid fa-code
module: [MYSQL]
categories: [参考]
---

MYSQL 模块通过清单（Inventory）声明集群，`mysql.yml` 将现场收敛到声明状态。本页介绍拓扑规划与全部配置项的写法；参数细节见[参数参考](/docs/pilot/mysql/param)。


--------

## 部署前检查

- 目标节点已完成 [`NODE`](/docs/node) 纳管，共享 CA 已安装到 `/etc/pki/ca.crt`（由 `node_ca` 负责，MySQL 角色只签发叶证书）；
- 软件仓库包含 `mysql` 模块：`node_repo_modules: node,infra,mysql`，或本地仓库已缓存 `repo_extra_packages: [mysql]`；
- 平台在支持矩阵内：`x86_64` 的 EL 8/9/10、Debian 12/13、Ubuntu 22/24，或 `aarch64` 的 EL 9/10；
- 三个平台密码（`mysql_root_password`、`mysql_monitor_password`、`mysql_cluster_password`）已改为生产值——预检会拒绝 `CHANGE_ME` 开头的占位密码。


--------

## 身份参数

每套集群由清单分组声明，两个身份参数必填：

| 参数 | 层级 | 说明 |
|:---|:---:|:---|
| `mysql_cluster` | 集群 | 集群名，必须与清单分组名一致（成员须位于同名分组）；也是备份目录与监控 `cls` 标签 |
| `mysql_seq` | 实例 | 单机为 `1`；HA 为连续的 `1..3`，同时作为 `server_id` |
{.full-width}

拓扑由成员数量决定：**1 个成员是单机，3 个成员是 InnoDB Cluster**，其他数量会被预检拒绝。`mysql_seq=1` 只是首次引导协调者，不代表运行时主库。

实例名为 `{{ mysql_cluster }}-{{ mysql_seq }}`（如 `my-test-1`）。清单中的主机地址（IP 或可解析主机名）就是 MySQL 与 MGR 的通告地址，部署后不可通过普通重跑变更。


--------

## 单机实例

最小可用的单机声明：

```yaml
my-meta:
  hosts:
    10.10.10.10: { mysql_seq: 1 }
  vars:
    mysql_cluster: my-meta
```

单机没有 Router（`6446/6447` 不存在），客户端直连 `3306`。备份、监控、TLS 与 HA 模式完全一致。


--------

## 三节点 InnoDB Cluster

```yaml
my-test:
  hosts:
    10.10.10.11: { mysql_seq: 1 }
    10.10.10.12: { mysql_seq: 2 }
    10.10.10.13: { mysql_seq: 3 }
  vars:
    mysql_cluster: my-test
    mysql_databases:
      - { name: app }
    mysql_users:
      - name: app
        host: '%'
        password: DBUser.App
        connlimit: 20
        priv: { 'app.*': 'ALL PRIVILEGES' }
```

部署后形成单主 MGR：一个 PRIMARY 可写，两个 SECONDARY 只读，容忍一台故障。每个成员运行 Router，从任一成员的 `6446` 都能到达当前主库。

{{% alert title="每次操作都要选择完整集群" color="warning" %}}
所有 `mysql.yml` 操作必须用 `-l` 选中该集群的**全部成员**（或不加 `-l` 收敛所有 MySQL 集群）。部分成员选择会在预检阶段被拒绝，这是防止拓扑分歧的刻意设计。
{{% /alert %}}


--------

## 业务数据库

`mysql_databases` 是增量声明的数据库列表：

```yaml
mysql_databases:
  - { name: app }                                              # 默认 utf8mb4 / utf8mb4_0900_ai_ci
  - { name: app2, encoding: utf8mb4, collate: utf8mb4_general_ci }
```

| 字段 | 默认值 | 说明 |
|:---|:---|:---|
| `name` | 必填 | 库名，`[A-Za-z0-9_$-]`，不能使用系统库名 |
| `encoding` | `utf8mb4` | 字符集 |
| `collate` | `utf8mb4_0900_ai_ci` | 排序规则 |
| `encrypt` | `false` | 库级 `DEFAULT ENCRYPTION`；需自行配置 InnoDB Keyring 组件（平台未预置，未配置时建表会失败） |
{.full-width}

声明是**增量收敛**：重跑会创建缺失的库，但从列表删除条目不会 DROP 数据库。删除数据属于手工运维操作。

{{% alert title="所有表都必须有主键" color="info" %}}
平台默认启用 `sql_require_primary_key=ON`：创建无主键表会报 `ERROR 3750`。这不是刁难——无主键表在 MGR 下只读不可写，还会在灾难恢复时阻塞 AdminAPI 重建集群。请为所有表定义主键（或使用不可见列主键）；确有特殊需要时可通过 `mysql_parameters` 关闭。
{{% /alert %}}


--------

## 业务用户

`mysql_users` 是增量声明的用户与授权列表：

```yaml
mysql_users:
  - name: app                        # 用户名
    host: '%'                        # 授权来源，默认 '%'
    password: DBUser.App             # 必填，支持特殊字符
    connlimit: 20                    # MAX_USER_CONNECTIONS，0 为不限
    priv:                            # 授权映射：'库.表' -> 权限列表
      'app.*': 'ALL PRIVILEGES'
      'app2.*': 'SELECT, INSERT, UPDATE, DELETE'
```

授权范围写作 `'库.表'`，两侧都可以用 `*` 通配（如 `'*.*'`、`'app.*'`）；权限值为逗号分隔的权限名。预检会校验用户名、host、权限范围与权限词的合法性，拒绝畸形声明。

行为约定：

- 用户不存在则创建，存在则按声明更新密码与连接数上限；
- `priv` 中的授权会被执行（GRANT），但**移除映射不会自动 REVOKE**；
- 不能声明 `root`、`dbuser_monitor`、`dbuser_cluster`、`dbuser_backup` 这些平台身份；
- 服务端强制 TLS：客户端默认的 `PREFERRED` 模式会自动协商加密，明文连接（`DISABLED`）会被拒绝；建议显式使用 `VERIFY_CA` 校验证书。


--------

## 参数覆盖

`mysql_parameters` 用于覆盖 `[mysqld]` 配置，追加渲染在托管配置末尾（同名参数后写生效）：

```yaml
my-test:
  vars:
    mysql_cluster: my-test
    mysql_parameters:
      max_connections: 500
      long_query_time: 2
      innodb_print_all_deadlocks: true   # 布尔渲染为 ON/OFF
```

规则与安全边界：

- 键名须为普通选项名（字母开头，可含 `._-`），值必须是单行标量；
- 渲染后的配置仍会经过 `mysqld --validate-config` 校验，非法参数在部署阶段即失败，不会影响运行中的服务；
- **平台保留参数不可覆盖**：身份（`server_id`、`datadir`、`port`、`socket`、`bind_address`、`report_host` 等）、复制（`gtid_mode`、`log_bin`、`group_replication_*`）与 TLS（`require_secure_transport`、`ssl_*`）由角色统一管理，声明即拒绝；
- 参数变更会触发[编排式滚动重启](/docs/pilot/mysql/admin#修改集群参数)：从库先行、主库殿后。

内存基线无需配置：缓冲池为节点内存的 25%（下限 256MB），Redo 容量为缓冲池一半（128MB–4GB），复制并行度按 CPU 推导。需要精确控制时用 `mysql_parameters` 覆盖 `innodb_buffer_pool_size` 等参数即可。


--------

## 备份配置

```yaml
mysql_backup_enabled: true            # 默认开启每日备份
mysql_backup_repo:
  local:
    path: /data/backups/mysql         # 本地备份根目录
    retention: 7                      # 保留最近 7 份全量
```

备份契约（详见[日常管理](/docs/pilot/mysql/admin#管理备份)）：

- 每日一次 XtraBackup **全量物理备份**，备份后立即 prepare，产出可直接恢复的目录；
- 单机在本机备份；HA 由每个成员的定时器各自触发，但**只有当前 PRIMARY 真正执行**，其余成员自动跳过；
- 目录布局 `<path>/<cluster>/<UTC 时间戳>/`，`latest` 符号链接原子指向最新一份，按 `retention` 剪枝；
- 没有增量链、Binlog 归档与 PITR；单机场景的恢复点就是最近一次备份。

{{% alert title="备份位置跟随主库" color="warning" %}}
HA 集群发生主从切换后，新备份会落在新主库的本地磁盘上。恢复前请在**所有成员**上检查 `latest` 指向的时间戳，取最新的一份。异地容灾请自行同步备份目录（如 rclone/rsync 定时任务）。
{{% /alert %}}


--------

## 平台凭据

```yaml
mysql_root_password: MySQL.Root          # 本地 root（root@localhost，仅本机套接字）
mysql_monitor_password: MySQL.Monitor    # Exporter 监控身份
mysql_cluster_password: MySQL.Cluster    # AdminAPI / Router / 备份身份
```

凭据的生命周期约定：

- 密码不能包含换行，不能保留 `CHANGE_ME` 前缀，预检强制校验；
- **HA 集群的 `mysql_cluster_password` 不能通过普通重跑轮换**：它已写入集群 Metadata 与 Router 密钥环，隐式轮换会被预检拒绝（单机实例无此绑定，改清单重跑即生效）；
- **`mysql_root_password` 同样不能隐式重置**：现场 root 密码与声明不一致时任务会明确报错，避免误配置静默改密。

凭据材料落盘在 `/etc/mysql/pigsty/`（root 属主：目录 `0700`、文件 `0600`），包括 root 与集群身份的客户端配置文件，可供本机运维直接使用：

```bash
mysql --defaults-extra-file=/etc/mysql/pigsty/root.cnf        # 本机 root 会话
mysql --defaults-extra-file=/etc/mysql/pigsty/cluster.cnf     # 经本机 Router 的集群会话（仅 HA 成员）
```


--------

## 完整示例

单机加三节点的完整参考（对应四节点沙箱）：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10: { infra_seq: 1 }

    my-meta:
      hosts:
        10.10.10.10: { mysql_seq: 1 }
      vars: { mysql_cluster: my-meta, node_cluster: my-meta }

    my-test:
      hosts:
        10.10.10.11: { mysql_seq: 1 }
        10.10.10.12: { mysql_seq: 2 }
        10.10.10.13: { mysql_seq: 3 }
      vars:
        mysql_cluster: my-test
        node_cluster: my-test
        mysql_databases:
          - { name: app }
        mysql_users:
          - { name: app, password: DBUser.App, priv: { 'app.*': 'ALL PRIVILEGES' } }
        mysql_parameters:
          max_connections: 500

  vars:
    version: v4.5.0
    admin_ip: 10.10.10.10
    region: china                        # 中国大陆使用 USTC/腾讯镜像
    node_repo_modules: node,infra,mysql
    node_tune: oltp

    mysql_root_password: MySQL.Root
    mysql_monitor_password: MySQL.Monitor
    mysql_cluster_password: MySQL.Cluster
```

完整模板见 [`conf/demo/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/mysql.yml)。注意 [`conf/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/mysql.yml) 是 OpenHalo（PostgreSQL 内核的 MySQL 兼容方案）模板，与本模块无关。

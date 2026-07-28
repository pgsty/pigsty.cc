---
title: 模块：MySQL
weight: 5010
description: 使用 Pigsty 部署原生 MySQL 8.4 单机或三节点 InnoDB Cluster。
icon: fas fa-fish
module: [MYSQL]
categories: [参考]
---

> [MySQL](https://www.mysql.com/) 模块用于部署固定的原生 MySQL 8.4 平台，包括单机与三节点单主 InnoDB Cluster。该模块当前仍处于 **PILOT** 阶段。


--------

## 能力与边界

当前 `roles/mysql` 在每个节点管理一个 MySQL 实例，只接受两种拓扑：

- **1 个成员**：独立 MySQL；
- **3 个成员**：使用 Group Replication 的单主 InnoDB Cluster。

服务端、客户端、MySQL Shell、MySQL Router 与 XtraBackup 固定使用 8.4 系列。该角色不是通用 MySQL 安装器，软件版本、端口、目录、字符集、TLS 路径、内存大小和定时器表达式都不是公开参数。

三节点模式由 MySQL Shell AdminAPI 创建并收敛集群。`mysql_seq=1` 只表示首次引导协调者；后续运行会发现现场 PRIMARY，不会强制把主库切回 1 号节点。每个 HA 成员都运行 MySQL Router。

当前原生软件包平台门禁为：

| 架构 | 支持的系统 |
|:---|:---|
| `x86_64` | EL 8/9/10、Debian 12/13、Ubuntu 22/24 |
| `aarch64` | EL 9/10 |
{.full-width}

Debian/Ubuntu ARM64 当前会被拒绝，因为 Oracle APT 的 MySQL 8.4 组件没有相应的 `arm64` 载荷。


--------

## 前置条件

目标节点应先完成 NODE 初始化，并安装 Pigsty 共享 CA 到 `/etc/pki/ca.crt`。软件仓库应包含 `mysql` 模块：

```yaml
node_repo_modules: node,infra,mysql
```

MySQL 角色只签发并安装节点叶证书，不会代替 `node_ca` 创建共享 CA。


--------

## 公开参数

清单只应使用以下 10 个公开参数：

| 参数                       | 默认值              | 说明                     |
|:-------------------------|:-----------------|:-----------------------|
| `mysql_cluster`          | 必填               | 集群名，通常与清单分组名一致         |
| `mysql_seq`              | 必填               | 单机为 `1`；HA 为连续的 `1..3` |
| `mysql_root_password`    | `DBUser.Root`    | 本地 root 密码             |
| `mysql_monitor_password` | `DBUser.Monitor` | Exporter 监控账号密码        |
| `mysql_cluster_password` | `DBUser.Cluster` | AdminAPI 与备份身份密码       |
| `mysql_databases`        | `[]`             | 增量收敛的业务数据库声明           |
| `mysql_users`            | `[]`             | 增量收敛的业务用户与授权声明         |
| `mysql_backup_enabled`   | `true`           | 启用每日一次的全量物理备份          |
| `mysql_backup_repo`      | 见下文              | 本地备份目录与保留份数            |
| `mysql_exporter_enabled` | `true`           | 启用 Exporter 与监控 Target |
{.full-width}

默认备份仓库为：

```yaml
mysql_backup_repo:
  local: { path: /data/backups/mysql, retention: 7 }
```

不要继续使用旧页面曾列出的 `mysql_role`、`mysql_services`、`mysql_packages`、`mysql_data`、`mysql_port`、`mysql_replication_*` 或 `mysql_*_username` 等变量；它们不属于当前公开接口。


--------

## 配置示例

下面同时定义一个单机集群与一个三节点 InnoDB Cluster：

```yaml
all:
  children:
    my-meta:
      hosts:
        10.10.10.10: { mysql_seq: 1 }
      vars:
        mysql_cluster: my-meta

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

  vars:
    mysql_root_password: DBUser.Root
    mysql_monitor_password: DBUser.Monitor
    mysql_cluster_password: DBUser.Cluster
```

生产配置必须替换示例密码。`mysql_databases` 与 `mysql_users` 是增量声明：角色会创建或更新声明对象，但从列表删除条目不会自动删除数据库、用户或回收授权。

完整模板见 [`conf/demo/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/mysql.yml)。


--------

## 部署与收敛

每次 HA 操作都必须用 `-l` 选择该集群的全部三个清单成员；角色会拒绝部分成员选择。

```bash
./node.yml  -l my-test             # NODE 与共享 CA 前置条件
./mysql.yml -l my-test --check     # 预检完整三节点集群
./mysql.yml -l my-test             # 经确认后执行真实收敛

./mysql.yml -l my-meta --check     # 预检单机
./mysql.yml -l my-meta             # 部署或收敛单机
```

普通收敛会拒绝未知数据目录、属于其他集群/实例的 Pigsty 标记、外来的 InnoDB Cluster Metadata、对非新成员执行破坏性 Clone，以及完全停机集群的自动恢复。HA 环境也不能通过普通重跑隐式轮换 `mysql_cluster_password`。


--------

## 组件与端口

| 组件 | 用途 | 固定端点 |
|:---|:---|:---|
| `mysqld` | 单机服务或 MGR 成员 | Classic `3306`、X Protocol `33060` |
| Group Replication | 三节点复制与共识 | `33061` |
| MySQL Router | HA 拓扑感知入口，每个成员均部署 | RW `6446`、RO `6447` |
| MySQL Shell | AdminAPI 生命周期管理 | 本机控制面 |
| XtraBackup | 每日全量物理备份 | 本地备份仓库 |
| `mysqld_exporter` | MySQL 与 MGR 指标 | `9104` |
{.full-width}

角色创建并管理三个平台身份：

- `dbuser_cluster@'%'`：要求 TLS 的 AdminAPI 身份；
- `dbuser_monitor@'127.0.0.1'`：最小权限 Exporter 身份；
- `dbuser_backup@'localhost'`：本地 XtraBackup 身份。


--------

## 剧本任务

[`mysql.yml`](https://github.com/pgsty/pigsty/blob/main/mysql.yml) 的当前任务层级为：

```text
mysql
├── mysql_check       # 校验身份、平台、范围、凭据与保留状态
├── mysql_install     # 安装固定的 MySQL 8.4 平台软件包
├── mysql_bootstrap
│   ├── mysql_cert    # 签发并安装节点 TLS 证书
│   ├── mysql_config  # 渲染配置，只初始化空数据目录
│   ├── mysql_launch  # 启动 mysqld 并准备 AdminAPI 身份
│   └── mysql_cluster # 收敛三节点 InnoDB Cluster
├── mysql_access
│   └── mysql_router  # 在 HA 成员上收敛 Router
├── mysql_provision   # 收敛平台身份与声明的业务对象
├── mysql_backup      # 配置每日全量备份
├── mysql_monitor     # 配置 Exporter 与文件发现 Target
└── mysql_done        # 输出实例摘要
```

旧角色中的 `mysql_clean`、`mysql_dbsu`、`mysql_boot`、`mysql_pass` 等任务不属于当前实现。


--------

## 备份

当前备份契约有意保持精简：

- 只提供固定的每日 Systemd Timer；
- 只执行 XtraBackup 全量物理备份；
- 单机在本机备份，HA 只在当前 PRIMARY 上备份；
- 只支持 `mysql_backup_repo.local` 中的本地目录与保留份数。

当前角色不提供公开的调度表达式、增量备份链、连续 Binlog 归档、PITR 或自动恢复。物理恢复属于需要单独审批和验证近期备份的破坏性运维流程。


--------

## 监控

每个节点在 Infra 上生成一个 VictoriaMetrics 文件发现文档：

```text
/infra/targets/mysql/<mysql_instance>.yml
```

当前随 Pigsty 提供 5 个 MySQL Dashboard：

- [MySQL Overview](https://demo.pigsty.cc/ui/d/mysql-overview)：集群与实例总览；
- [MySQL Cluster](https://demo.pigsty.cc/ui/d/mysql-cluster)：集群级工作负载与状态；
- [MySQL Instance](https://demo.pigsty.cc/ui/d/mysql-instance)：单实例指标；
- [MySQL Group Replication](https://demo.pigsty.cc/ui/d/mysql-replication)：MGR 拓扑与复制状态；
- [MySQL Alert](https://demo.pigsty.cc/ui/d/mysql-alert)：MySQL 告警汇总。


--------

## 安全退役

退役使用独立的 [`mysql-rm.yml`](https://github.com/pgsty/pigsty/blob/main/mysql-rm.yml)，每次都必须同时满足：

- 显式设置 `mysql_safeguard=false`；
- `mysql_rm_confirm` 精确等于目标实例名或整个集群名。

预览并退役一个三节点集群中的 SECONDARY：

```bash
./mysql-rm.yml -l 10.10.10.12 --check \
  -e mysql_safeguard=false -e mysql_rm_confirm=my-test-2

./mysql-rm.yml -l 10.10.10.12 \
  -e mysql_safeguard=false -e mysql_rm_confirm=my-test-2
```

单成员退役只接受健康集群中的 `ONLINE SECONDARY`，并使用 AdminAPI `force: false` 摘除。当前替换契约要求在新机器上复用同一个服务地址，然后对完整三节点集群重新执行 `mysql.yml`；普通替换不支持改变成员地址，也不支持长期两节点拓扑。

预览并退役整个单机或 HA 集群：

```bash
./mysql-rm.yml -l my-test --check \
  -e mysql_safeguard=false -e mysql_rm_confirm=my-test
```

`mysql-rm.yml` 只会停止入口/服务、注销 Exporter Target 并写入持久退役标记；它不会删除数据目录、备份、配置、证书、软件包、Metadata Schema 或 Router 身份。退役标记会阻止普通 `mysql.yml` 重新接管；清除标记或销毁保留数据必须使用另行审批的操作手册。

---
title: 预置剧本
weight: 5014
description: 使用 mysql.yml 与 mysql-rm.yml 完成部署、收敛、参数变更、成员退役与集群下线。
icon: fa-solid fa-scroll
module: [MYSQL]
categories: [参考]
---

MYSQL 模块提供两个剧本：[`mysql.yml`](https://github.com/pgsty/pigsty/blob/main/mysql.yml) 负责部署与收敛，[`mysql-rm.yml`](https://github.com/pgsty/pigsty/blob/main/mysql-rm.yml) 负责受保护的退役与下线。前者重复执行会向声明状态收敛；后者是独立的生命周期操作，每次真实执行前都必须重新核对范围、备份与精确确认值。


--------

## `mysql.yml`

对选中集群执行「检查 → 安装 → 引导 → 接入 → 业务对象 → 备份 → 监控」的完整收敛：

```bash
./mysql.yml -l my-test --check     # 预检：校验声明与现场，不做变更
./mysql.yml -l my-test             # 收敛一个集群（必须选中全部成员）
./mysql.yml                        # 收敛清单中所有 MySQL 集群
```

使用约定：

- **默认要求整簇选择，局部阶段支持单节点 `-l`**：完整运行或涉及引导、配置、集群拓扑协调时，`-l` 必须选中该集群的全部成员（防止拓扑分歧）；但单成员独立阶段 `-t mysql_provision`（含 `mysql_db`、`mysql_user`，要求当前运行时 PRIMARY 在 `-l` 范围内）、`-t mysql_backup` 与 `-t mysql_monitor` 允许仅针对部分存活成员执行；
- **内置故障自愈**：对完整三节点执行 `mysql.yml` 时，若三台均可达且全部处于 `OFFLINE`（如机房断电恢复或停服保数据后重启），剧本会自动在最高 GTID 成员上以 `force: false` 执行 `rebootClusterFromCompleteOutage` 重建仲裁；若某台死机节点已用同 IP 新机重装替换，剧本会自动执行 `rescan` 清理陈旧成员注册并通过 Clone 重建入组；
- **幂等**：现场已符合声明时重跑为 `changed=0`，秒级完成；AdminAPI 成员操作（rejoin/Clone）之后的下一次运行可能出现一次收敛性 `changed`（复制种子钉回声明值），属预期行为；
- **check 模式**：对全新节点只能预演到软件包安装（后续步骤依赖已安装的现场），对已部署集群可完整预演；
- 首次三节点部署约 2 分钟：证书签发 → 配置初始化 → AdminAPI 建群 → 两个从库 Clone → 每成员 Router 引导 → 业务对象 → 初始基线备份与监控注册。


--------

## 执行阶段与任务标签

```text
id (node-id)          # 计算节点身份与硬件规格事实
mysql
├── mysql_check       # 校验身份、平台、凭据、参数与数据目录属主（always）
├── mysql_install     # 安装固定的 MySQL 8.4 平台软件包与 /etc/profile.d/mysql.sh
├── mysql_bootstrap
│   ├── mysql_cert    # 签发并安装节点 TLS 叶证书（含可选 NODE VIP SAN）
│   ├── mysql_config  # 渲染配置（mysql_config_file）与初始化空数据目录（mysql_init）
│   ├── mysql_launch  # 启动/滚动重启 mysqld，收敛 root 与 AdminAPI 身份
│   └── mysql_cluster # 建立、自愈或收敛三节点 InnoDB Cluster（mysql_cluster_manage / mysql_cluster_verify）
├── mysql_access
│   └── mysql_router  # 在 HA 成员上引导并校验 Router
├── mysql_provision   # 收敛平台身份（mysql_platform_user）、业务库（mysql_db）与用户（mysql_user）
├── mysql_backup      # 安装脚本、渲染单元、启用定时器并完成首次基线备份（mysql_backup_install/config/timer/init）
├── mysql_monitor     # 配置 Exporter（mysql_exporter）并注册监控 Target（mysql_register / register / add_metrics；别名 monitor）
└── mysql_done        # 输出实例与接入地址摘要
```

常用标签化运行（以下局部标签均支持对降级集群的存活子集使用 `-l`）：

```bash
./mysql.yml -l my-test -t mysql_provision    # 只收敛业务库与用户（局部 -l 需包含当前 PRIMARY）
./mysql.yml -l my-test -t mysql_db           # 只收敛业务数据库
./mysql.yml -l my-test -t mysql_user         # 只收敛业务用户与授权
./mysql.yml -l my-test -t mysql_backup       # 只收敛备份脚本、定时器与初始备份
./mysql.yml -l my-test -t mysql_monitor      # 只收敛 Exporter 与监控注册
```

参数与配置变更建议执行完整剧本（涉及滚动重启编排，见下节）。


--------

## 配置变更与滚动重启

`mysql_launch` 阶段包含变更编排逻辑，当配置文件、证书或 systemd 单元发生变化时：

1. **健康前置检查**：HA 集群必须 3 成员 `ONLINE` 才允许滚动重启，降级集群直接拒绝（先修复后变更）；
2. **从库先行**：按当前运行时角色（而非 `mysql_seq`）排序，从库逐台重启并等待回归 `ONLINE`；
3. **主库殿后**：最后重启主库，触发一次自动切换（秒级写中断）。

单机集群直接原地重启。配置渲染阶段的 `mysqld --validate-config` 保证非法参数在触碰服务之前失败。


--------

## 安全护栏

`mysql.yml` 的预检与收敛在以下情况 **主动拒绝**，错误信息会说明原因与处置：

| 拒绝场景 | 说明 |
|:---|:---|
| 部分成员选择 | 引导、配置与集群阶段必须选中全部成员（仅 `mysql_provision`、`mysql_db`、`mysql_user`、`mysql_backup`、`mysql_monitor` 例外） |
| 非法拓扑 | 成员数只能是 1 或 3，`mysql_seq` 必须连续 |
| 平台不支持 | 架构/系统不在支持矩阵（如 Ubuntu ARM64） |
| 占位或非法密码 | `CHANGE_ME` 前缀未替换，或 `mysql_monitor_password` 含 `%(...)s` INI 插值 |
| 数据目录不属主或旧库共存 | 数据目录缺失 `.pigsty-mysql-initialized` 标记、标记身份不匹配，或 `/var/lib/mysql` 存在旧库而 `mysql_data` 指向其他路径 |
| 废弃备份参数 | 清单仍定义已废弃的 `mysql_backup_repo`（应改用 `mysql_backup_dir` 与 `mysql_backup_retention`） |
| 隐式密码变更 | HA 的 `mysql_cluster_password` 或现场 root 密码与声明不一致 |
| 非法参数覆盖 | `mysql_parameters` 含保留参数、畸形键名或多行值 |
| 降级集群滚动重启 | 少于 3 成员 ONLINE 时拒绝配置类滚动重启 |
| 非全新 Clone 目标 | 更换的成员必须是空数据目录的全新机器 |
| 不完整停机（部分失联） | 集群无在线仲裁且部分成员不可达时拒绝自动重建（三台全部可达时自动选最高 GTID 重建） |
{.full-width .wide .expand}

这些护栏能显著降低误操作风险，但不构成“绝不丢数据”的保证。绕过护栏的每个动作（如清理残留数据目录）都必须是经过备份验证与精确范围确认的人工决定。


--------

## `mysql-rm.yml`

移除剧本显式要求通过 `-l` 指定目标范围（单个 HA 成员，或完整集群 / 单机实例；拒绝同时选中三节点中的两个）并传入 `-e mysql_safeguard=false`：

```bash
# 摘除并销毁 HA 集群中的一个成员（若目标为 PRIMARY 会自动先切主；强制要求 mysql_rm_data=true）
./mysql-rm.yml -l 10.10.10.13 --check -e mysql_safeguard=false
./mysql-rm.yml -l 10.10.10.13         -e mysql_safeguard=false

# 彻底销毁整个集群（默认 mysql_rm_data=true，清理数据与受管配置，但保留备份目录）
./mysql-rm.yml -l my-test -e mysql_safeguard=false

# 整集群停服保数据（仅停服务并摘监控，保留数据目录与配置，重跑 mysql.yml 即可恢复）
./mysql-rm.yml -l my-test -e mysql_safeguard=false -e mysql_rm_data=false

# 销毁集群并一并卸载软件包
./mysql-rm.yml -l my-meta -e mysql_safeguard=false -e mysql_rm_pkg=true
```

`mysql-rm.yml` 任务标签结构：

| 标签 | 说明 |
|:---|:---|
| `mysql_remove` | 角色根标签，执行完整移除流程 |
| `mysql_safeguard` | 校验 `-l` 范围、`mysql_safeguard=false`、参数合法性与数据目录属主标记 |
| `mysql_leave` | 单成员摘除：委派至存活成员执行 `cluster-leave.js`（若目标为 PRIMARY 先自动切主，再以 `force: false` 摘除） |
| `mysql_deregister` | 从 Infra 节点删除 `/infra/targets/mysql/<ins>.yml`（别名：`deregister`、`rm_metrics`） |
| `mysql` | 停止并禁用 `mysql-backup.timer/service`、`mysqlrouter`、`mysqld_exporter` 与 `mysqld` |
| `mysql_data` | 当 `mysql_rm_data=true` 时清理 `mysql_data` 与全部受管配置/证书/状态文件（单独指定 `-t mysql_data` 也会先执行属主检查、退群与停服） |
| `mysql_pkg` | 当 `mysql_rm_pkg=true` 时卸载 MySQL / Router / XtraBackup / Exporter 软件包 |
{.full-width .wide .expand}

执行语义与安全边界：

- **默认销毁数据与配置，始终保留备份**：`mysql_rm_data` 默认为 `true`，会删除 `mysql_data`、`/etc/mysql/pigsty`、`/etc/mysql/pki`、`pigsty.cnf`、Router 状态与密钥环、Exporter 配置、备份单元/脚本/状态、`/var/lib/node_exporter/textfile/mysql.prom` 与 `/etc/profile.d/mysql.sh`，但 **绝不触碰 `mysql_backup_dir`（`/data/backups/mysql`）**；
- **单成员优雅摘除（自动切主）**：通过存活成员远程执行 AdminAPI，要求目标成员当前 `ONLINE` 且 `mysql_rm_data=true`；若目标恰好是当前 `PRIMARY`，脚本会先自动调用 `setPrimaryInstance()` 将主库移交给存活成员，再执行 `removeInstance(..., {force: false, timeout: 60})` 并清理目标机本地数据与服务；
- **整集群停服保数据**：仅在选中完整集群时支持 `-e mysql_rm_data=false`（停服并摘除监控，不写任何退役锁文件）；此后随时执行 `./mysql.yml -l <cluster>` 即可重新拉起服务并自动完成仲裁恢复。

预览模式（`--check`）会完整校验护栏并展示将要发生的动作而不触碰现场。


--------

## 剧本边界

以下操作 **不属于** 剧本自动职责，对应的人工流程见 [日常管理](/docs/mysql/admin)：

- 计划内手工指定主库切换（`mysh 'dba.getCluster().setPrimaryInstance(...)'`）；
- 不足三台可达时的不完整停机手工仲裁恢复，或不替换机器时强制摘除永久失联死机成员（`removeInstance(..., {force: true})`；若直接用同 IP 新机替换死机节点，整簇运行 `mysql.yml` 可自动清理并 Clone）；
- 物理备份回拷恢复（XtraBackup `--copy-back` 手册）；
- 清理 `mysql_backup_dir` 历史备份仓库；
- 拓扑变形（1→3、3→5）与成员改址。

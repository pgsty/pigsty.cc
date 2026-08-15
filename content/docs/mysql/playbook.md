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

- **HA 集群必须整簇选择**：`-l` 只选中部分成员会在预检被拒绝（防止拓扑分歧）；可以同时选中多个完整集群或不加 `-l`；
- **幂等**：现场已符合声明时重跑为 `changed=0`，秒级完成；AdminAPI 成员操作（rejoin/Clone）之后的下一次运行可能出现一次收敛性 `changed`（复制种子钉回声明值），属预期行为；
- **check 模式**：对全新节点只能预演到软件包安装（后续步骤依赖已安装的现场），对已部署集群可完整预演；
- 首次三节点部署约 2 分钟：证书签发 → 配置初始化 → AdminAPI 建群 → 两个从库 Clone → 每成员 Router 引导 → 业务对象 → 备份与监控注册。


--------

## 执行阶段与任务标签

```text
mysql
├── mysql_check       # 校验身份、平台、凭据、参数与数据目录属主（always）
├── mysql_install     # 安装固定的 MySQL 8.4 平台软件包
├── mysql_bootstrap
│   ├── mysql_cert    # 签发并安装节点 TLS 叶证书
│   ├── mysql_config  # 渲染配置（含 mysql_parameters）、初始化空数据目录
│   ├── mysql_launch  # 启动/滚动重启 mysqld，收敛 root 与 AdminAPI 身份
│   └── mysql_cluster # 建立或收敛三节点 InnoDB Cluster（rejoin/Clone）
├── mysql_access
│   └── mysql_router  # 在 HA 成员上引导并校验 Router
├── mysql_provision   # 收敛平台身份与声明的业务库、用户
├── mysql_backup      # 安装备份脚本与每日定时器
├── mysql_monitor     # 配置 Exporter 并注册监控 Target
└── mysql_done        # 输出实例摘要
```

常用标签化运行：

```bash
./mysql.yml -l my-test -t mysql_provision    # 只收敛业务库与用户
./mysql.yml -l my-test -t mysql_backup       # 只收敛备份配置与定时器
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
| 部分成员选择 | HA 操作必须选中全部成员 |
| 非法拓扑 | 成员数只能是 1 或 3，`mysql_seq` 必须连续 |
| 平台不支持 | 架构/系统不在支持矩阵（如 Ubuntu ARM64） |
| 占位密码 | `CHANGE_ME` 前缀密码未替换 |
| 数据目录不属主 | 数据目录缺失 Pigsty 标记，或标记属于其他集群/实例/拓扑 |
| 退役标记存在 | `mysql-rm.yml` 下线过的实例，防止误复活 |
| 隐式密码变更 | `mysql_cluster_password` 或现场 root 密码与声明不一致 |
| 非法参数覆盖 | `mysql_parameters` 含保留参数、畸形键名或多行值 |
| 降级集群滚动重启 | 少于 3 成员 ONLINE 时拒绝配置类重启 |
| 非全新 Clone 目标 | 更换的成员必须是空数据目录的全新机器 |
| 完全停机 | 不自动重建仲裁，报错给出手工恢复指引 |
{.full-width}

这些护栏能显著降低误操作风险，但不构成“绝不丢数据”的保证。绕过护栏的每个动作（如删除标记或清理数据目录）都必须是经过备份验证与精确范围确认的人工决定。


--------

## `mysql-rm.yml`

退役剧本接受三种范围，全部需要双重确认（`mysql_safeguard=false` + `mysql_rm_confirm` 精确等于目标名）：

```bash
# 退役 HA 集群中的一个成员（目标须可达：在线 SECONDARY 或已脱离集群的成员）
./mysql-rm.yml -l 10.10.10.13 --check -e mysql_safeguard=false -e mysql_rm_confirm=my-test-3
./mysql-rm.yml -l 10.10.10.13         -e mysql_safeguard=false -e mysql_rm_confirm=my-test-3

# 下线整个 HA 集群
./mysql-rm.yml -l my-test -e mysql_safeguard=false -e mysql_rm_confirm=my-test

# 下线单机实例
./mysql-rm.yml -l my-meta -e mysql_safeguard=false -e mysql_rm_confirm=my-meta
```

执行内容与边界：

- 单成员退役：用 AdminAPI（`force: false`）从集群摘除 `ONLINE SECONDARY`（或确认已脱离集群成员的摘除状态），随后停止本机服务。摘除脚本在目标机上执行，因此 **要求目标可达**；机器已死亡时改用手工强制摘除（见 [替换故障成员](/docs/mysql/admin#替换故障成员)）。**不允许直接退役主库**（先 [`setPrimaryInstance`](/docs/mysql/admin#主从切换) 切走），也不允许一次退役 3 成员中的 2 个；
- 整簇下线：停止 Router 与备份定时器 → 从库先停、主库最后 → 注销 Exporter 与监控 Target；
- 每个数据目录写入退役标记 `.pigsty-mysql-retired`，阻止普通 `mysql.yml` 重新接管；
- **保留一切数据**：数据目录、备份、配置、证书、软件包、Metadata、Router 身份全部原样保留。彻底销毁是另一件事，请在确认备份后手工执行。

预览模式（`--check`）会完整展示将要发生的动作而不触碰现场。


--------

## 剧本边界

以下操作 **不属于** 剧本职责，对应的人工流程见 [日常管理](/docs/mysql/admin)：

- 计划内主从切换（`setPrimaryInstance`）；
- 不可达死机成员的强制摘除（`removeInstance` + `force: true`）；
- 完全停机后的仲裁重建（`rebootClusterFromCompleteOutage`）；
- 物理备份恢复（XtraBackup copy-back 手册）；
- 删除数据目录 / 备份 / 退役标记等销毁类动作；
- 拓扑变形（1→3、3→5）与成员改址。

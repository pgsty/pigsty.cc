---
title: demo/mysql
weight: 1047
description: 原生 MySQL 8.4 试点模板：单节点实例与三节点 InnoDB Cluster
icon: fa-solid fa-database
categories: [参考]
---

`demo/mysql` 是原生 MySQL 8.4 LTS 模块的四节点示例，与 [`conf/fork/halo.yml`](/docs/conf/mysql/) 中通过 OpenHalo 提供 MySQL 协议兼容的 PostgreSQL 内核不是同一实现。

`./configure -c mysql` 与 `./configure -c demo/mysql` 都选择此模板；OpenHalo 使用 `-c halo`。


--------

## 配置概览

- 配置名称：`demo/mysql`（裸名别名：`mysql`）
- 节点数量：4 个
- `my-meta`：单节点 MySQL 8.4
- `my-test`：三节点、单主模式 InnoDB Cluster，每个成员运行 MySQL Router
- 模块：MYSQL，限定原生 MySQL 8.4
- 平台边界：支持 EL8/9/10、Debian 12/13、Ubuntu 22/24 `x86_64`，以及 EL9/EL10 `aarch64`；Ubuntu 26 和 Debian/Ubuntu ARM 会被前置检查拒绝

模板中的所有 `CHANGE_ME` 值必须替换（使用 `./configure -c mysql -g` 会一并随机生成 `mysql_root_password`、`mysql_monitor_password` 与 `mysql_cluster_password`），且真实部署需要明确审批。先做只读预检：

```bash
ansible-playbook -i conf/demo/mysql.yml mysql.yml -l my-meta --check
ansible-playbook -i conf/demo/mysql.yml mysql.yml -l my-test --check
```

确认要写入活动清单后，再执行 `./configure -c demo/mysql`，并对完整集群范围依次运行 `node.yml` 与 `mysql.yml` 的 `--check` 和真实收敛。常规收敛要求包含三节点集群的全部成员；仅 `-t mysql_provision`（范围须包含当前运行 PRIMARY）、`-t mysql_backup` 与 `-t mysql_monitor` 白名单标签允许部分成员 `-l` 范围。


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/mysql.yml)

{{< include file="yaml/demo/mysql.yml" code=true lang="yaml" >}}


--------

## 配置解读

- MySQL 服务端、客户端、Shell、Router 与 XtraBackup 固定为 8.4 平台；默认数据目录为 `mysql_data: /data/mysql`（同时承载 binlog 与临时目录）。
- 单节点使用 `3306`；三节点还使用 Group Replication `33061`，并在每个成员提供 Router RW `6446` 与 RO `6447`。可在 `my-test` 节点集群启用二层 VIP（`vip_enabled`、`vip_address`、`vip_vrid`），对外提供统一的 `<vip>:6446`（读写）与 `<vip>:6447`（只读）路由入口，VIP 会自动写入节点 TLS 证书 SAN。
- 当三节点声明成员全部可达时，常规 `mysql.yml` 收敛支持两类确定性自动恢复：同地址替换的新节点自动清理残留注册并 Clone 回集群，以及全集群掉线重启后通过 AdminAPI（`rebootClusterFromCompleteOutage`）从位点最新的成员安全重引导。若有成员不可达则停止自动恢复，交由人工裁决。
- 默认启用 `mysqld_exporter`（`9104`）及每天一次本地全量物理备份（`mysql_backup_dir: /data/backups/mysql`，默认保留最近 `mysql_backup_retention: 3` 份已 prepare 全量备份）；当前不提供连续 binlog 归档或 PITR。
- `node.yml` 负责安装共享信任锚 `/etc/pki/ca.crt`；MySQL 角色只签发并安装叶子证书。
- 移除集群或单成员使用 `mysql-rm.yml`，默认受 `mysql_safeguard: true` 保护（需显式传入 `-e mysql_safeguard=false`），并通过 `mysql_rm_data: true` 控制数据与状态清理（`mysql_backup_dir` 下的备份不会被自动删除）。

完整约束与移除流程参见 [原生 MySQL 试点文档](/docs/mysql/)。

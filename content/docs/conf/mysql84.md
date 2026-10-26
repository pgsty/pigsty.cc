---
title: demo/mysql
weight: 1047
description: 原生 MySQL 8.4 试点模板：单节点实例与三节点 InnoDB Cluster
icon: fa-solid fa-database
categories: [参考]
---

`demo/mysql` 是原生 MySQL 8.4 LTS 试点模块的四节点示例，与 [`conf/mysql.yml`](/docs/conf/mysql/) 中通过 OpenHalo 提供 MySQL 协议兼容的 PostgreSQL 内核不是同一实现。


--------

## 配置概览

- 配置名称：`demo/mysql`
- 节点数量：4 个
- `my-meta`：单节点 MySQL 8.4
- `my-test`：三节点、单主模式 InnoDB Cluster，每个成员运行 MySQL Router
- 模块状态：MYSQL PILOT，不计入正式模块数量
- 平台边界：支持声明的 x86_64 RPM/DEB 平台及 EL9/EL10 aarch64；Oracle APT 当前没有 arm64 组件，因此 Debian/Ubuntu ARM 会被前置检查拒绝

模板中的所有 `CHANGE_ME` 值必须替换，且真实部署需要明确审批。先做只读预检：

```bash
ansible-playbook -i conf/demo/mysql.yml mysql.yml -l my-meta --check
ansible-playbook -i conf/demo/mysql.yml mysql.yml -l my-test --check
```

确认要写入活动清单后，再执行 `./configure -c demo/mysql`，并对相同的完整集群范围依次运行 `node.yml` 与 `mysql.yml` 的 `--check` 和真实收敛。三节点集群不接受部分成员范围。


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/mysql.yml)

{{< include file="yaml/demo/mysql.yml" code=true lang="yaml" >}}


--------

## 配置解读

- MySQL 服务端、客户端、Shell、Router 与 XtraBackup 固定为 8.4 平台，不提供任意版本安装器。
- 单节点使用 `3306`；三节点还使用 Group Replication `33061`，并在每个成员提供 Router RW `6446` 与 RO `6447`。
- 默认启用每天一次的本地全量 XtraBackup 与 `mysqld_exporter`；当前试点不提供连续 binlog 归档、PITR 或自动恢复。
- `node.yml` 负责安装共享信任锚 `/etc/pki/ca.crt`；MySQL 角色只签发并安装叶子证书。

完整约束与移除确认流程参见 [原生 MySQL 试点文档](/docs/mysql/)。

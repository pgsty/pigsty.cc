---
title: 集群配置
weight: 3410
description: 根据需求场景选择合适的 Etcd 集群规模，并对外提供可靠的接入。
icon: fa-solid fa-code
module: [ETCD]
categories: [参考]
---

在部署 Etcd 之前，你需要在 [配置清单](/docs/setup/config) 中定义一个 Etcd 集群，通常来说，你可以选择：

- [单节点](#单节点)：没有高可用性，适用于开发、测试、演示，或者依赖外部 S3 备份进行 PITR 的无高可用单机部署
- [三节点](#三节点)：具有基本的高可用性，可以容忍一个节点的故障，适用于中小规模的生产环境
- [五节点](#五节点)：具有更好的高可用性，可以容忍两个节点的故障，适用于大规模生产环境

偶数节点的 Etcd 集群没有意义，超过五节点的 Etcd 集群并不常见，因此通常使用的规格就是单节点、三节点、五节点。

| 集群规模 | 仲裁数 | 容忍故障数 | 适用场景     |
|:-----|:----|:------|:---------|
| 1 节点 | 1   | 0     | 开发、测试、演示 |
| 3 节点 | 2   | 1     | 中小规模生产环境 |
| 5 节点 | 3   | 2     | 大规模生产环境  |
| 7 节点 | 4   | 3     | 特殊高可用需求  |


--------

## 单节点

在 Pigsty 中，定义一个单例 Etcd 实例非常简单，只需要一行配置即可：

```yaml
etcd: { hosts: { 10.10.10.10: { etcd_seq: 1 } }, vars: { etcd_cluster: etcd } }
```

在 Pigsty 提供的所有单机配置模板中，都有这样一项，其中的占位 IP 地址：`10.10.10.10` 默认会被替换为当前管理节点的 IP。 

除了 IP 地址外，这里唯一必要的参数是 [`etcd_seq`](param#etcd_seq) 和 [`etcd_cluster`](param#etcd_cluster)，它们会唯一标识每一个 Etcd 实例。



--------

## 三节点

三节点的 Etcd 集群最为常见，它可以容忍一个节点的故障，适用于中小规模的生产环境。

例如，Pigsty 的三节点模板：[`trio`](/docs/conf/trio) 和 [`safe`](/docs/conf/safe) 就使用了三节点的 Etcd 集群，如下所示： 

```yaml
etcd: 
  hosts:
    10.10.10.10: { etcd_seq: 1 }  # etcd_seq （etcd实例号）是必须指定的身份参数
    10.10.10.11: { etcd_seq: 2 }  # 实例号是正整数，一般从 0 或 1 开始依次分配
    10.10.10.12: { etcd_seq: 3 }  # 实例号应当终生不可变，一旦分配就不再回收使用。
  vars: # 集群层面的参数
    etcd_cluster: etcd    # 默认情况下，etcd 集群名就叫 etcd， 除非您想要部署多套 etcd 集群，否则不要改这个名字
    etcd_safeguard: false # 是否打开 etcd 的防误删安全保险？ 在生产环境初始化完成后，可以考虑打开这个选项，避免误删。
    etcd_clean: true      # 在初始化过程中，是否强制移除现有的 etcd 实例？测试的时候可以打开，这样剧本就是真正幂等的。
```



----------------

## 五节点

五节点的 Etcd 集群可以容忍两个节点的故障，适用于大规模生产环境。

例如，Pigsty 的生产仿真模板：[`prod`](/docs/conf/pro) 中就使用了一个五节点的 Etcd 集群：

```yaml
etcd:
  hosts:
    10.10.10.21 : { etcd_seq: 1 }
    10.10.10.22 : { etcd_seq: 2 }
    10.10.10.23 : { etcd_seq: 3 }
    10.10.10.24 : { etcd_seq: 4 }
    10.10.10.25 : { etcd_seq: 5 }
  vars: { etcd_cluster: etcd    }
```


----------------

## 使用 etcd 的服务

目前 Pigsty 中使用 etcd 的服务有：

| 服务 | 用途 | 配置文件 |
|:----|:----|:--------|
| **Patroni** | PostgreSQL 高可用，存储集群状态和配置 | `/pg/bin/patroni.yml` |
| **VIP-Manager** | 在 PostgreSQL 集群上绑定 L2 VIP | `/etc/default/vip-manager` |

当 etcd 集群的成员信息发生永久性变更时，您应当 [重载相关服务的配置](admin#重载配置)，以确保服务能够正确访问 Etcd 集群。

**更新 Patroni 的 etcd 端点引用**：

```bash
./pgsql.yml -t pg_conf                            # 重新生成 patroni 配置
ansible all -f 1 -b -a 'systemctl reload patroni' # 重新加载 patroni 配置
```

**更新 VIP-Manager 的 etcd 端点引用**（仅当使用 PGSQL L2 VIP 时需要）：

```bash
./pgsql.yml -t pg_vip_config                           # 重新生成 vip-manager 配置
ansible all -f 1 -b -a 'systemctl restart vip-manager' # 重启 vip-manager
```



----------------

## RBAC 认证配置

Pigsty v4.0 默认启用 etcd 的 RBAC 认证机制。相关配置参数：

| 参数 | 说明 | 默认值 |
|:----|:----|:------|
| [`etcd_root_password`](param#etcd_root_password) | etcd root 用户密码 | `Etcd.Root` |
| [`pg_etcd_password`](/docs/pgsql/param#pg_etcd_password) | Patroni 连接 etcd 的密码 | 空（使用集群名） |

**生产环境建议**：

```yaml
all:
  vars:
    etcd_root_password: 'YourSecureEtcdPassword'  # 修改默认密码

etcd:
  hosts:
    10.10.10.10: { etcd_seq: 1 }
    10.10.10.11: { etcd_seq: 2 }
    10.10.10.12: { etcd_seq: 3 }
  vars:
    etcd_cluster: etcd
    etcd_safeguard: true    # 生产环境开启防误删保护
```



----------------

## 文件系统布局

etcd 模块在目标主机上创建以下目录和文件：

| 路径                                 | 用途         | 权限              |
|:-----------------------------------|:-----------|:----------------|
| `/etc/etcd/`                       | 配置目录       | 0750, etcd:etcd |
| `/etc/etcd/etcd.conf`              | 主配置文件      | 0644, etcd:etcd |
| `/etc/etcd/etcd.pass`              | root 密码文件  | 0640, root:etcd |
| `/etc/etcd/ca.crt`                 | CA 证书      | 0644, etcd:etcd |
| `/etc/etcd/server.crt`             | 服务器证书      | 0644, etcd:etcd |
| `/etc/etcd/server.key`             | 服务器私钥      | 0600, etcd:etcd |
| `/var/lib/etcd/`                   | 备用数据目录     | 0770, etcd:etcd |
| `/data/etcd/`                      | 主数据目录（可配置） | 0700, etcd:etcd |
| `/etc/profile.d/etcdctl.sh`        | 客户端环境变量    | 0755, root:root |
| `/etc/systemd/system/etcd.service` | Systemd 服务 | 0644, root:root |



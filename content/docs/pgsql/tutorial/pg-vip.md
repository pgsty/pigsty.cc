---
title: 使用 VIP-Manager 为 PostgreSQL 集群配置二层 VIP
linkTitle: "配置 PG VIP"
weight: 2002
icon: fa-solid fa-arrows-split-up-and-left
module: [PGSQL]
categories: [任务, 参考]
---


您可以在 PostgreSQL 集群上绑定一个可选的 L2 VIP —— 前提条件是：集群中的所有节点都在一个二层网络中。

这个 L2 VIP 强制使用 Master - Backup 模式，Master 始终指向在数据库集群主库实例所在的节点。

这个 VIP 由 [VIP-Manager](https://github.com/cybertec-postgresql/vip-manager) 组件管理，它会从 DCS （etcd） 中直接读取由 Patroni 写入的 Leader Key，从而判断自己是否是 Master。

------

## 启用VIP

在 PostgreSQL 集群上定义 [`pg_vip_enabled`](/docs/pgsql/param#pg_vip_enabled) 参数为 `true`，即可在集群上启用 VIP 组件。当然您也可以在全局配置中启用此配置项。

```bash
# pgsql 3 node ha cluster: pg-test
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }   # primary instance, leader of cluster
    10.10.10.12: { pg_seq: 2, pg_role: replica }   # replica instance, follower of leader
    10.10.10.13: { pg_seq: 3, pg_role: replica, pg_offline_query: true } # replica with offline access
  vars:
    pg_cluster: pg-test           # define pgsql cluster name
    pg_users:  [{ name: test , password: test , pgbouncer: true , roles: [ dbrole_admin ] }]
    pg_databases: [{ name: test }]

    # 启用 L2 VIP
    pg_vip_enabled: true
    pg_vip_address: 10.10.10.3/24
    pg_vip_interface: eth1
```

请注意，[`pg_vip_address`](/docs/pgsql/param#pg_vip_address) 必须是一个合法的 IP 地址，带有网段，且在当前二层网络中可用。

请注意，[`pg_vip_interface`](/docs/pgsql/param#pg_vip_interface) 必须是一个合法的网络接口名，并且应当是与 inventory 中使用 IPv4 地址一致的网卡。
如果集群成员的网卡名不一样，用户应当为每个实例显式指定 `pg_vip_interface` 参数，例如：

```yaml
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary , pg_vip_interface: eth0  }
    10.10.10.12: { pg_seq: 2, pg_role: replica , pg_vip_interface: eth1  }
    10.10.10.13: { pg_seq: 3, pg_role: replica , pg_vip_interface: ens33 }
  vars:
    pg_cluster: pg-test           # define pgsql cluster name
    pg_users:  [{ name: test , password: test , pgbouncer: true , roles: [ dbrole_admin ] }]
    pg_databases: [{ name: test }]

    # 启用 L2 VIP
    pg_vip_enabled: true
    pg_vip_address: 10.10.10.3/24
    #pg_vip_interface: eth1
```

使用以下命令，刷新 PG 的 vip-manager 配置并重启生效：

```bash
./pgsql.yml -t pg_vip 
```

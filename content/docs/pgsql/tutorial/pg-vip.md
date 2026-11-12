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
    #pg_vip_interface: auto
```

请注意，[`pg_vip_address`](/docs/pgsql/param#pg_vip_address) 必须是一个合法的 IP 地址，带有网段，且在当前二层网络中可用。

[`pg_vip_interface`](/docs/pgsql/param#pg_vip_interface) 默认为 `auto`，
此时 Pigsty 会根据 inventory 中的 IPv4 地址自动探测各实例使用的网卡。
如果自动探测不适用于非标准路由或策略路由环境，可以为每个实例显式指定合法的网卡名称，例如：

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
```

使用以下命令，刷新 PG 的 vip-manager 配置并重启生效：

```bash
./pgsql.yml -t pg_vip
```

------

## TLS 证书与 SAN

在集群首次初始化签发 `/pg/cert/server.crt` 时，若已启用 `pg_vip_enabled` 并设置 `pg_vip_address`（或节点启用了 `vip_enabled` / `vip_address`），Pigsty 会自动将不带掩码的 VIP 地址写入 PostgreSQL 服务端证书的 `Subject Alternative Name`（SAN），以便客户端通过 `sslmode=verify-full` 安全连接 VIP。

由于证书任务默认在管理节点已存在 `files/pki/pgsql/<cls>-<seq>.crt` 时跳过重签，若您在 **集群初始化之后** 新增或修改了 `pg_vip_address`，需要先在管理节点删除该集群各实例的旧证书文件，再重新签发下发并重载 PostgreSQL：

```bash
# 在管理节点移除目标集群旧服务端证书（将 pg-test-* 替换为实际实例前缀）
rm -f files/pki/pgsql/pg-test-*.{key,crt} files/pki/csr/pg-test-*.csr

# 重新签发分发证书并刷新 VIP 配置
./pgsql.yml -l pg-test -t pg_cert,pg_vip

# 重载 PostgreSQL 使新服务端证书生效
ansible pg-test -b -m shell -a 'su - postgres -c "pg_ctl -D /pg/data reload"'
```

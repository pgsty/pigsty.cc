---
title: 参数列表
weight: 4982
description: VAULT 模块提供了 8 个配置参数，其余约定一律固定，由拓扑推导。
icon: fa-solid fa-sliders
module: [VAULT]
categories: [参考]
---

VAULT 模块的参数列表，共有 **8** 个参数，分为两个部分：

- [**`VAULT`**](#vault)：5 个参数，用于 VAULT 集群的部署与配置
- [**`VAULT_REMOVE`**](#vault_remove)：3 个参数，控制 VAULT 集群的移除

VAULT 刻意只开放很少的参数：集群模式由成员数推导，高可用入口复用 NODE 模块的 [VIP 参数](#相关参数)，其余端口、目录、引擎与备份策略都是 [固定约定](#固定约定)。


----------------

## 参数概览

[`VAULT`](#vault) 参数组用于 VAULT 集群的部署与配置，包括实例标识、集群名称、数据目录、端口以及服务域名。

| 参数 | 类型 | 级别 | 说明 |
|:---|:---:|:---:|:---|
| [`vault_seq`](#vault_seq) | `int` | `I` | VAULT 实例标识符，必填 |
| [`vault_cluster`](#vault_cluster) | `string` | `C` | VAULT 集群名，默认为 `vault` |
| [`vault_data`](#vault_data) | `path` | `C` | VAULT 数据目录，默认为 `/data/vault` |
| [`vault_port`](#vault_port) | `port` | `G` | VAULT API 端口，默认为 `8200` |
| [`vault_domain`](#vault_domain) | `string` | `G` | VAULT 服务域名，默认为 `vault.pigsty` |
{.full-width .wide .expand}

[`VAULT_REMOVE`](#vault_remove) 参数组控制 VAULT 集群的移除行为，包括防误删保险、数据清理以及软件包卸载。

| 参数 | 类型 | 级别 | 说明 |
|:---|:---:|:---:|:---|
| [`vault_safeguard`](#vault_safeguard) | `bool` | `G/C/A` | 防误删保险，**默认为 `true`**，阻止移除操作 |
| [`vault_rm_data`](#vault_rm_data) | `bool` | `G/C/A` | 移除时是否删除 VAULT 数据？默认为 `true` |
| [`vault_rm_pkg`](#vault_rm_pkg) | `bool` | `G/C/A` | 移除时是否卸载 `openbao` 软件包？默认为 `false` |
{.full-width}



--------

## `VAULT`

本节包含 [`vault`](https://github.com/pgsty/pigsty/blob/main/roles/vault) 角色的参数，
这些是 [`vault.yml`](/docs/vault/playbook#vaultyml) 剧本使用的参数。

相关参数定义于 [`roles/vault/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/vault/defaults/main.yml)

```yaml
#vault_seq: 1                     # vault 实例标识符，必填
vault_cluster: vault              # vault 集群名，默认为 vault
vault_data: /data/vault           # vault 数据目录：raft 存储与本地快照
vault_port: 8200                  # vault api 端口，raft 集群端口为端口号 +1
vault_domain: vault.pigsty        # vault 服务域名，用于证书 SAN 与所有客户端
```



### `vault_seq`

参数名称： `vault_seq`， 类型： `int`， 层次：`I`

VAULT 实例标号，这是必选参数，必须为每一个 VAULT 成员指定一个在组内唯一的非负整数。

实例名由集群名与实例号组成：`<vault_cluster>-<vault_seq>`，例如 `vault-1`。实例名同时用作 Raft 节点 ID、服务端证书的 CN 与监控标签 `ins`。

`vault_seq` **最小** 的成员负责集群的首次初始化。实例号应当终生不变：一旦分配就不再修改，也不要回收给其他节点复用。

```yaml
vault:
  hosts:
    10.10.10.11: { vault_seq: 1 }  # 实例 vault-1，负责首次初始化
    10.10.10.12: { vault_seq: 2 }  # 实例 vault-2
    10.10.10.13: { vault_seq: 3 }  # 实例 vault-3
```

剧本会校验：`vault_seq` 必须是非负整数，且在 `vault` 分组内不能重复，否则立即中止。




### `vault_cluster`

参数名称： `vault_cluster`， 类型： `string`， 层次：`C`

VAULT 集群名称，默认值为 `vault`。

它用作实例名前缀、OpenBao 的 `cluster_name` 与监控标签 `cls`，也参与解封密钥 ID 的生成。

请注意，VAULT 成员所在的 Ansible 分组名是硬编码的 `vault`，与 `vault_cluster` 无关；每套 Pigsty 部署只有一套 VAULT 集群。通常无需修改此参数。




### `vault_data`

参数名称： `vault_data`， 类型： `path`， 层次：`C`

VAULT 数据目录，默认为 `/data/vault`。

该目录下包含两个子目录：`raft/` 存放 Raft 存储，`backup/` 存放本地快照。

它必须是一个 **专用** 的绝对路径，且至少有两级（例如 `/data/vault`），不能包含 `..`。移除剧本会删除整个目录，因此请不要把它指向 `/var/lib` 这类共享的父目录。




### `vault_port`

参数名称： `vault_port`， 类型： `port`， 层次：`G`

VAULT API 端口，默认为 `8200`。

Raft 集群端口固定为 `vault_port + 1`，即默认的 `8201`，这是 OpenBao 自身的约定，因此没有单独的参数。

客户端、HAProxy 入口与监控抓取都使用这个端口。集群创建后请不要修改它。




### `vault_domain`

参数名称： `vault_domain`， 类型： `string`， 层次：`G`

VAULT 服务域名，默认为 `vault.pigsty`。

该域名会写入每个成员服务端证书的 SAN，所有客户端都应通过 `https://<vault_domain>:<vault_port>` 访问 VAULT。

Pigsty 不会自动解析这个域名，您需要通过 [`node_etc_hosts`](/docs/node/param#node_etc_hosts) 将它指向单节点集群的成员，或者三节点集群的 VIP，参见 [服务域名](/docs/vault/config#服务域名)。




--------

## `VAULT_REMOVE`

本节包含 [`vault_remove`](https://github.com/pgsty/pigsty/blob/main/roles/vault_remove) 角色的参数，
这些是 [`vault-rm.yml`](/docs/vault/playbook#vault-rmyml) 剧本使用的参数。

相关参数定义于 [`roles/vault_remove/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/vault_remove/defaults/main.yml)

```yaml
vault_safeguard: true             # 防误删保险，默认为 true
vault_rm_data: true               # 移除时是否删除 vault 数据与配置？默认为 true
vault_rm_pkg: false               # 移除时是否卸载 openbao 软件包？默认为 false
```



### `vault_safeguard`

参数名称： `vault_safeguard`， 类型： `bool`， 层次：`G/C/A`

VAULT 防误删保险参数，**默认为 `true`**。为 `true` 时，`vault-rm.yml` 会在执行任何操作之前直接中止。

这是 Pigsty 中唯一默认开启的删除保险。删除 VAULT 等于删除了其中保存的全部密钥：使用这些密钥加密的数据库、对象以及它们的 **全部备份**，都将永久无法解密。

要执行移除，必须在命令行中显式覆盖：

```bash
./vault-rm.yml -l <exact-target> -e vault_safeguard=false   # 确认目标与快照后才覆盖
```




### `vault_rm_data`

参数名称： `vault_rm_data`， 类型： `bool`， 层次：`G/C/A`

移除时是否删除 VAULT 数据与配置？默认为 `true`。

启用时会删除成员上的 `/etc/openbao`（包括 TLS 证书、解封密钥与备份令牌的节点副本）、[`vault_data`](#vault_data) 目录（**包括其中的本地快照**）、systemd 单元、客户端环境文件、日志轮转配置与 `vault-backup` 脚本。

移除整个集群且此参数启用时，剧本会先拍摄一份最终快照并回收到管理节点的 `files/pki/vault/backup/`，失败则中止。

无论此参数取值如何，管理节点上的 `files/pki/vault/` 与成员上的审计日志 `/var/log/openbao/` 都不会被删除。

```bash
./vault-rm.yml -l 10.10.10.13 -e vault_safeguard=false -e vault_rm_data=false  # 仅停止服务，保留数据
```




### `vault_rm_pkg`

参数名称： `vault_rm_pkg`， 类型： `bool`， 层次：`G/C/A`

移除时是否卸载 `openbao` 软件包？默认为 `false`。

```bash
./vault-rm.yml -l vault -e vault_safeguard=false -e vault_rm_pkg=true  # 移除时同时卸载软件包
```




--------

## 相关参数

VAULT 的高可用入口与域名解析直接复用其他模块的已有参数，不新增参数：

| 参数 | 模块 | 在 VAULT 中的作用 |
|:---|:---|:---|
| [`vip_enabled`](/docs/node/param#vip_enabled) | NODE | 在 `vault` 节点集群上启用 L2 VIP，同时启用 HAProxy 入口与证书中的 VIP SAN |
| [`vip_address`](/docs/node/param#vip_address) | NODE | VIP 地址，`vault.pigsty` 应当解析到这里 |
| [`vip_vrid`](/docs/node/param#vip_vrid) | NODE | VRRP 路由器 ID，在同一 L2 网络内必须唯一 |
| [`node_cluster`](/docs/node/param#node_cluster) | NODE | 成员应使用相同的节点集群名，以生成一致的 VRRP 认证 |
| [`node_etc_hosts`](/docs/node/param#node_etc_hosts) | NODE | 将 `vault_domain` 写入所有节点的 `/etc/hosts` |
| [`haproxy_enabled`](/docs/node/param#haproxy_enabled) | NODE | 为 `false` 时不生成 VAULT 的 HAProxy 入口 |
| [`cert_validity`](/docs/infra/param#cert_validity) | INFRA | 服务端证书有效期，默认为 20 年 |
{.full-width}



--------

## 固定约定

以下事项在 VAULT 中是固定约定，不提供参数：

| 事项 | 约定 |
|:---|:---|
| 分组名 / 实例名 | 固定分组 `vault`，实例名 `<vault_cluster>-<vault_seq>` |
| 集群模式 | 由成员数推导：1 个为实验，3 个为生产 |
| 端口 | API `vault_port`（8200），Raft `vault_port + 1`（8201） |
| 服务 / 用户 / 命令 | `openbao.service` / `openbao` / `bao`，均来自上游软件包 |
| 软件版本 | 由 Pigsty Infra 仓库中的 `openbao` 软件包决定 |
| 解封方式 | static seal，密钥为管理节点上的 `files/pki/vault/unseal.key` |
| 初始化参数 | 5 份恢复密钥，阈值为 3 |
| 默认引擎 | `secret/`（KV v2）、`transit/`、`auth/approle` |
| 令牌 | `token/` 认证方式的最长租期为 10 年（87600h），备份令牌有效期 10 年 |
| 审计 | 文件审计设备，写入 `/var/log/openbao/audit.log`，每天轮转，保留 7 份 |
| 备份 | 每个成员每天 3 点拍摄快照，分钟数为 `(vault_seq × 10) % 60` 以错开执行，本地保留 7 份 |
| TLS | Pigsty CA 签发证书，最低 TLS 1.3 |
| 遥测 | 节点 IP 监听器上允许免认证读取 `/v1/sys/metrics`，回环监听器不开放 |
{.full-width}

---
title: 集群配置
weight: 4981
description: 根据场景选择单节点或三节点 VAULT 集群，配置 VIP 高可用入口与服务域名解析。
icon: fa-solid fa-code
module: [VAULT]
categories: [参考]
---

在部署 VAULT 之前，你需要在 [配置清单](/docs/setup/config) 中定义固定名称的 `vault` 分组。VAULT 没有 profile 一类的模式参数，**集群模式完全由 `vault` 分组的成员数推导**：

- [单节点](#单节点)：没有高可用，适用于开发、测试、演示与沙箱
- [三节点](#三节点)：可以容忍一个成员故障，配合 L2 VIP 提供高可用入口，适用于生产环境
- [两节点](#两节点)：可以运行，但没有容错能力，按单节点对待

| 成员数 | 仲裁数 | 容忍故障数 | 模式 | 服务入口 |
|:----|:----|:------|:-----|:-----|
| 1 | 1 | 0 | 实验 | `vault.pigsty` 指向该成员 |
| 2 | 2 | 0 | 警告 | 任意一个成员故障都会失去仲裁 |
| 3 | 2 | 1 | 生产 | `vault.pigsty` 指向 VIP，HAProxy 转发到 active 成员 |
{.full-width}

VAULT 使用 OpenBao 内置的 Raft 存储，同一时刻只有一个 **active** 成员处理写请求，其余成员为 **standby**，会把收到的请求转发给 active 成员。


--------

## 单节点

单节点 VAULT 只需要一行配置：

```yaml
vault: { hosts: { 10.10.10.10: { vault_seq: 1 } }, vars: { vault_cluster: vault } }
```

除了 IP 地址外，唯一必要的参数是 [`vault_seq`](/docs/vault/param#vault_seq)，它决定实例名 `vault-<seq>`，也决定由哪个成员负责集群的首次初始化（`vault_seq` 最小的成员）。

单节点模式下 VAULT 通常与 INFRA、ETCD、PGSQL 部署在同一台机器上，**做不到“密钥与数据分离”**：拿到这台机器的磁盘，就同时拿到了加密数据与解开它的密钥。它适合开发与演示，不应作为生产环境透明加密的密钥来源。



--------

## 三节点

三节点 VAULT 可以容忍一个成员故障。生产环境建议在 `vault` 分组上启用 NODE 模块的 L2 VIP，这样服务入口本身也具备高可用：

```yaml
vault:
  hosts:
    10.10.10.11: { vault_seq: 1 }   # vault_seq 是必选的身份参数，实例名为 vault-1
    10.10.10.12: { vault_seq: 2 }   # 实例号为非负整数，在组内唯一
    10.10.10.13: { vault_seq: 3 }   # 实例号应当终生不变，seq 最小的成员负责首次初始化
  vars:
    vault_cluster: vault            # 集群名，用作监控标签与实例名前缀
    node_cluster: vault             # 成员使用相同的节点集群名，以生成一致的 VRRP 认证
    vip_enabled: true               # 在 vault 节点集群上启用 L2 VIP
    vip_vrid: 129                   # VRRP 路由器 ID，1-254，在同一 L2 网络内必须唯一
    vip_address: 10.10.10.8         # VIP 地址，vault.pigsty 应当解析到这里

all:
  vars:
    node_etc_hosts: [ '10.10.10.8 vault.pigsty' ]   # 所有节点通过 VIP 访问 vault
```

部署后的拓扑如下：

```text
                  vault.pigsty -> 10.10.10.8 (VIP, node_etc_hosts)
                                   |
        +--------------------------+--------------------------+
        |    keepalived VIP + haproxy :8200 (check /v1/sys/health == 200)
   vault-1 10.10.10.11      vault-2 10.10.10.12      vault-3 10.10.10.13
   openbao :8200/:8201      openbao :8200/:8201      openbao :8200/:8201
        +------------- Raft（仲裁数 2，容忍 1 个成员故障）--------------+
```

当 `vip_enabled` 为 `true` 且成员数大于 1 时，[`vault.yml`](/docs/vault/playbook#vaultyml) 会在每个成员上生成 HAProxy 服务配置 `/etc/haproxy/conf.d/vault.cfg`：

- 绑定 `<VIP>:8200`，以 TCP 模式工作，**TLS 透传**，证书校验仍由客户端与 OpenBao 完成
- 使用 `GET /v1/sys/health` 做健康检查：active 返回 `200`，standby 返回 `429`，被封印返回 `503`，未初始化返回 `501`；只有返回 `200` 的成员会接收流量
- 健康检查本身也走 HTTPS，并使用 `/etc/pki/ca.crt` 校验成员证书
- 不持有 VIP 的成员也要绑定 `<VIP>:8200`，这依赖内核参数 `net.ipv4.ip_nonlocal_bind=1`：NODE 的各个 tuned 模板都已设置；如果使用 `node_tune: none`，请自行设置，否则剧本会在此处中止

启用 VIP 后，成员的服务端证书 SAN 中也会包含 VIP 地址。成员的 [`node_cluster`](/docs/node/param#node_cluster) 应当保持一致，否则 NODE 会为它们推导出不同的 VRRP 认证信息，导致 VIP 无法正常漂移。

> [!TIP] 不启用 VIP 的三节点集群
> 三节点集群也可以不启用 VIP：把 `vault.pigsty` 解析到其中一个成员，standby 收到的请求会被转发给 active 成员。
> 这样集群本身仍然可以容忍一个成员故障，但被域名指向的那个成员成为入口单点。

> [!NOTE] HAProxy 配置被清空
> 如果您在 vault 节点上以 `haproxy_clean=true` 重跑了 `node.yml`，`/etc/haproxy/conf.d/` 下的配置会被清空。此时请执行 `./vault.yml -l vault -t vault_haproxy` 重新生成 VAULT 入口。



--------

## 两节点

两节点 Raft 集群的仲裁数是 2，容忍故障数是 0：任何一个成员故障都会导致整个集群不可用，可用性甚至比单节点更低。

VAULT 不会拒绝部署两节点集群，但会在执行剧本时打印警告。请将它视为扩缩容过程中的临时状态，而不是长期拓扑。

Raft 支持更多成员，但 VAULT 的设计目标与验收范围是 1 个或 3 个成员。



--------

## 服务域名

所有客户端都应通过 [`vault_domain`](/docs/vault/param#vault_domain)（默认为 `vault.pigsty`）访问 VAULT，完整地址为：

```bash
https://vault.pigsty:8200
```

使用域名而不是 IP 地址的原因是：`pg_tde` 等消费者会把 KMS 地址持久化到自己的元数据中。只要客户端使用域名，从单节点迁移到三节点、或者更换 VIP 时，只需修改 `/etc/hosts`，而不必逐个修改消费者的配置。

域名解析通过 NODE 模块的 [`node_etc_hosts`](/docs/node/param#node_etc_hosts) 参数写入每个节点的 `/etc/hosts`，**不依赖** INFRA 节点上的 DNS 服务。这样即使 INFRA 节点不可用，数据库在启动时依然能够找到 KMS。

```bash
./node.yml -t node_hosts           # 修改 node_etc_hosts 后，刷新所有节点的 /etc/hosts
```

服务端证书由 Pigsty CA 签发，每个 Pigsty 纳管节点上都有 CA 证书 `/etc/pki/ca.crt`，客户端使用它校验 VAULT 的身份即可。



--------

## 部署位置

在生产环境中，建议把 VAULT 部署在独立的节点上，或者与 ETCD、INFRA 等管控组件共置，**不要与使用其密钥的 PostgreSQL 或 Silo 数据节点共置**。
透明加密的价值在于密钥与数据分离：数据盘、数据库备份与对象存储泄露时，攻击者无法从同一个地方拿到密钥。

VAULT 自身的资源需求很低，对磁盘的主要要求是低延迟：Raft 日志的每次提交都需要落盘。



--------

## 密钥材料

VAULT 的全部信任根都保存在管理节点的 `files/pki/vault/` 目录中，与 Pigsty CA 放在一起（`files/pki/` 默认被 Git 忽略）：

| 文件 | 内容 | 说明 |
|:---|:---|:---|
| `unseal.key` | 32 字节 static seal 解封密钥 | 首次部署时生成，此后绝不覆盖；各成员凭它自动解封 |
| `init.json` | root token 与 5 份恢复密钥（阈值 3） | `bao operator init` 的输出，是全部管理权限的根 |
| `backup.token` | 只能读取快照的备份令牌 | `vault-backup` 脚本使用，有效期 10 年 |
| `backup/*.snap` | 集群首次初始化后的初始快照，以及整集群移除前的最终快照 | 文件权限 `0600` |
| `vault-<seq>.crt` / `.key` | 各成员的服务端证书与私钥 | 由 Pigsty CA 签发，有效期由 [`cert_validity`](/docs/infra/param#cert_validity) 决定 |
{.full-width}

> [!WARNING] 请务必备份 files/pki
> 一份 Raft 快照加上对应的 `unseal.key`，就能恢复出全部加密存储；`init.json` 中的 root token 与恢复密钥则是恢复后取得管理权限所必需的。
> 丢失 `unseal.key` 意味着所有快照都无法解开。请把 `files/pki/` 目录与快照一起，妥善保存到异地。

由于每个成员上都有一份 `unseal.key` 的副本，Pigsty 在分发前会比对校验和：如果某个成员上已有的密钥与管理节点上的不一致，剧本会立即中止，避免用错误的密钥封装数据。



--------

## 文件系统布局

VAULT 模块在成员节点上创建以下目录和文件：

| 路径 | 用途 | 权限 |
|:---|:---|:---|
| `/etc/openbao/` | 配置目录 | `0750`，`root:openbao` |
| `/etc/openbao/openbao.hcl` | OpenBao 主配置文件 | `0640`，`root:openbao` |
| `/etc/openbao/tls/` | CA 证书、服务端证书与私钥 | 目录 `0750`、文件 `0640`，`root:openbao` |
| `/etc/openbao/unseal.key` | static seal 解封密钥的节点副本 | `0640`，`root:openbao` |
| `/etc/openbao/backup.token` | 备份令牌的节点副本 | `0600`，`root:root` |
| `/data/vault/raft/` | Raft 数据目录（可配置） | `0700`，`openbao:openbao` |
| `/data/vault/backup/` | 本地快照目录，保留 7 份（含并发互斥锁 `.backup.lock`） | `0700`，`root:root` |
| `/var/log/openbao/` | 审计日志 `audit.log`，每天轮转，保留 7 份 | `0750`，`openbao:openbao` |
| `/etc/systemd/system/openbao.service` | systemd 服务定义 | `0644`，`root:root` |
| `/etc/profile.d/bao.sh` | `bao` 客户端环境变量 | `0644`，`root:root` |
| `/etc/logrotate.d/openbao` | 审计日志轮转配置 | `0644`，`root:root` |
| `/usr/local/bin/vault-backup` | 快照脚本 | `0755`，`root:root` |
| `/etc/cron.d/vault-backup` | 每日快照定时任务 | `0644`，`root:root` |
| `/var/lib/node_exporter/textfile/vault.prom` | 最近一次快照的成功时间与大小 | 由 node_exporter 采集 |
| `/etc/haproxy/conf.d/vault.cfg` | VIP 上的 HAProxy 入口（仅启用 VIP 时） | `0644`，`root:root` |
{.full-width .wide .expand}

此外，INFRA 节点上的 `/infra/targets/vault/<vault_cluster>-<vault_seq>.yml` 是该成员的监控抓取目标。

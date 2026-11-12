---
title: 常见问题
weight: 4988
description: Pigsty VAULT 模块常见问题答疑
icon: fa-solid fa-circle-question
module: [VAULT]
categories: [参考]
---


--------

## VAULT 模块起什么作用？

VAULT 是整套 Pigsty 部署的 KMS（密钥管理服务）与机密存储。它主要服务于三类场景：

- **透明数据加密**：为 PGSQL `pg_tde` 保存主密钥，数据盘与数据库备份泄露时，没有 VAULT 中的密钥就无法解密；
- **对象存储加密**：为 MINIO（Silo）的 KES 服务端加密保存密钥；
- **业务机密管理**：业务应用通过 KV、Transit 与 AppRole 保存与使用密码、API 密钥，或者调用加密服务。

前两种接入目前还需要手工配置，自动接入尚在开发中；第三种在部署完成后即可直接使用，参见 [使用方法](/docs/vault/usage)。




--------

## 为什么使用 OpenBao，而不是 HashiCorp Vault？

2023 年，HashiCorp 将 Vault 的许可证改为 BSL，此后的版本不再是开源软件，Pigsty 无法将其打包分发。
OpenBao 是在许可证变更之前分叉出来的社区版本，由 Linux 基金会托管，使用 MPL-2.0 许可证，API 与 Vault 基本兼容，Vault 的客户端库、工具与大部分文档都可以直接参考。

模块名使用 VAULT 而不是 OPENBAO，是因为它描述的是“密钥保险库”这一能力，而不是某个具体的引擎，这与 MINIO 模块使用 Silo 引擎的做法一致。




--------

## VAULT 集群使用多大规模合适？

开发、测试与演示使用 1 个成员即可；生产环境使用 3 个成员，并启用 L2 VIP 作为高可用入口，参见 [集群配置](/docs/vault/config)。

VAULT 使用 Raft 共识，超过半数（包括正好一半）的成员不可用时，集群将无法提供服务。3 个成员可以容忍 1 个成员故障。
2 个成员的集群不能容忍任何故障，可用性比单节点更低，剧本会打印警告，请把它当作扩缩容过程中的临时状态。




--------

## VAULT 不可用会有什么影响？

影响取决于消费者如何使用密钥：

- 已经在运行、并且已在内存中缓存了密钥的消费者，通常可以继续工作；
- 需要重新获取密钥的操作会失败：例如 `pg_tde` 加密的 PostgreSQL 重启，或者 KES 需要获取新的数据密钥时；
- 业务应用的机密读取与加解密请求都会失败。

因此，生产环境中 VAULT 的可用性应当不低于依赖它的数据库。VAULT 的告警 `VaultDown` 与 `VaultNoLeader` 都是 CRIT 级别。




--------

## 自动解封安全吗？

VAULT 使用 OpenBao 的 static seal：一把 32 字节的解封密钥保存在管理节点的 `files/pki/vault/unseal.key`，并分发到每个成员的 `/etc/openbao/unseal.key`，成员重启后自动解封，不需要人工输入密钥分片。

| 场景 | 能否防护 |
|:---|:---|
| 数据库磁盘、数据库备份、对象存储磁盘泄露 | **能**，没有 VAULT 中的密钥无法解密，这也是“密钥与数据分离”的核心 |
| VAULT 快照泄露 | **能**，没有 `unseal.key` 无法解开快照 |
| VAULT 成员节点被攻破 | 不能，自动解封的密钥就在节点上；没有 HSM 时，任何自动解封方案都是如此 |
| 管理节点被攻破 | 不能，这与 Pigsty 的现状一致，CA 私钥与全部密码本来就在管理节点上 |
| 数据库运行时被拿到 root 或超级用户权限 | 不能，透明加密只保护静态数据 |
{.full-width}

这是在可运维性与安全性之间的取舍：数据库重启不必等待人工解封。如果您的合规要求更严格，可以在部署后自行改用人工解封或外部 KMS 作为 seal，但这超出了当前 VAULT 模块的自动化范围。




--------

## 哪些文件必须备份？

请备份管理节点上的整个 `files/pki/` 目录，并把 VAULT 快照复制到异地：

- `files/pki/vault/unseal.key`：解封密钥，**丢失后所有快照都无法解开**；
- `files/pki/vault/init.json`：root token 与恢复密钥，是恢复后取得管理权限的凭据；
- `files/pki/ca/`：Pigsty CA，VAULT 的服务端证书由它签发；
- 任意一份较新的 Raft 快照：各成员的 `/data/vault/backup/`，或管理节点的 `files/pki/vault/backup/`。

快照本身已经加密，可以放心复制到其他存储，但请把它与 `unseal.key` 分开保存。详见 [备份](/docs/vault/admin#备份) 与 [恢复快照](/docs/vault/admin#恢复快照)。




--------

## 为什么执行 bao status 报 permission denied？

`bao` 的环境变量 `BAO_CACERT` 指向 `/etc/openbao/tls/ca.crt`，该目录只对 root 与 `openbao` 组可读，普通用户执行时会报错：

```text
failed to read environment: Error loading CA File: open /etc/openbao/tls/ca.crt: permission denied
```

请以 root 身份执行（`sudo -i`），或者改用全局可读的 Pigsty CA：`export BAO_CACERT=/etc/pki/ca.crt`。




--------

## 为什么 vault.yml 拒绝初始化集群？

`vault.yml` 只在全部条件满足时才会初始化集群，常见的拒绝原因有两种：

- **有成员不可达**：剧本无法确认集群是否已经初始化，为避免分裂出两套集群而中止。请先恢复所有成员的网络与服务，再重新执行；
- **所有成员都未初始化，但管理节点上存在 `files/pki/vault/init.json`**：这说明集群曾经初始化过，而数据已经丢失。如果需要找回数据，请参考 [从快照重建集群](/docs/vault/admin#从快照重建集群数据全部丢失)；如果确实要创建一套全新的空集群，请先归档 `init.json`，参见 [销毁集群](/docs/vault/admin#销毁集群)。




--------

## 为什么 vault-rm.yml 默认会被中止？

[`vault_safeguard`](/docs/vault/param#vault_safeguard) 与 `MYSQL` 模块的 `mysql_safeguard` 一样默认为 `true`。删除 VAULT 意味着删除其中全部密钥，使用这些密钥加密的数据与 **全部备份** 都会永久无法解密，影响范围远大于删除任何单个数据库集群。

确认目标与快照之后，请在命令行显式覆盖：`./vault-rm.yml -l <exact-target> -e vault_safeguard=false`，或者使用 `bin/vault-rm` 脚本。




--------

## 为什么指标抓取不需要令牌，又为什么走 HTTPS？

OpenBao 的 `/v1/sys/metrics` 默认需要令牌。VAULT 在节点 IP 的监听器上开启了 `unauthenticated_metrics_access`，这样监控系统不需要持有任何 VAULT 凭据；回环地址的监听器则不开放免认证的指标访问。
指标中只包含计数与状态，不包含任何机密内容。

OpenBao 的监听器只提供 TLS，指标与业务 API 共用 `8200` 端口。为了指标单独开放一个明文端口既增加暴露面，也没有必要，因此 VictoriaMetrics 直接使用 Pigsty CA 通过 HTTPS 抓取。




--------

## 为什么会出现 VaultBackupStale 告警？

每个成员每天会执行一次 `vault-backup`。当某个成员超过 26 小时没有成功的快照（或者从未成功）时，就会触发该告警。常见原因：

- 定时任务执行失败：查看 `journalctl -t vault-backup`，例如备份令牌无效、找不到 active 成员、磁盘写满；
- node_exporter 没有启用 textfile 采集器：该采集器目录由较新版本的 NODE 模块配置，旧节点可以重跑 `./node.yml -l vault -t node_exporter` 刷新；
- 备份令牌已经失效（例如刚从快照恢复了集群）：执行 `./vault.yml -l vault -t vault_provision,vault_backup`，剧本会检测令牌是否有效，必要时重新签发并分发到各成员。

修复后，可以在成员上手工执行一次 `vault-backup`，告警会在下一次评估时恢复。




--------

## leader 频繁切换怎么办？

Raft 的 leader 依靠心跳维持任期，心跳超时就会触发重新选举。常见原因是成员之间网络抖动、磁盘延迟过高，或者宿主机负载过高导致进程长时间得不到调度（在资源超卖的虚拟机上尤其常见）。

可以在 Vault Overview 面板的 **Leader Elections**、**Follower Last Heartbeat** 与 **Raft Commit Time** 中观察选举次数、心跳间隔与提交延迟，再结合节点的 CPU、磁盘与网络监控定位原因。
偶尔的 leader 切换不会影响数据一致性，HAProxy 入口会自动转向新的 active 成员。




--------

## 审计日志在哪里？

每个成员都启用了文件审计设备，审计日志写入本地的 `/var/log/openbao/audit.log`，由 logrotate 每天轮转、保留 7 份。审计日志中的敏感字段会由 OpenBao 进行 HMAC 处理。

standby 将业务请求转发给 active，由 active 记录审计；尚未担任过 active 的成员可能还没有 `audit.log`，这不表示审计配置失效。

审计日志不会被采集到 VictoriaLogs，删除 VAULT 时也不会被删除。如果审计设备无法写入，OpenBao 会拒绝所有请求，此时会触发 `VaultAuditFailure` 告警，请优先检查磁盘空间。




--------

## 可以使用外部已有的 Vault 吗？

目前不可以。VAULT 模块只管理由 Pigsty 部署的 OpenBao 集群，不支持接入外部或托管的 HashiCorp Vault、OpenBao 以及云厂商 KMS。

当然，业务应用可以继续直接访问您已有的 Vault 服务；只是 Pigsty 的部署、监控与后续的消费者自动接入不会覆盖它。

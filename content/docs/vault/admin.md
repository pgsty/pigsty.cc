---
title: 管理预案
weight: 4984
description: VAULT 集群管理 SOP：创建、检查、扩缩容、重建成员、更新配置与证书、备份、恢复、升级与销毁。
icon: fa-solid fa-building-columns
module: [VAULT]
categories: [任务]
---

以下是一些常见的 VAULT 管理任务 SOP（预案）：

- [创建集群](#创建集群)：如何初始化 VAULT 集群？
- [检查状态](#检查状态)：如何查看集群、成员与 Raft 的状态？
- [管理员凭据](#管理员凭据)：如何安全地使用 root token？
- [添加成员](#添加成员)：如何向现有集群添加新成员，或从单节点扩容到三节点？
- [移除成员](#移除成员)：如何从集群中摘除老成员？
- [重建成员](#重建成员)：成员数据损坏或更换硬件时如何处理？
- [更新配置](#更新配置)：如何刷新配置与证书？
- [备份](#备份)：快照如何生成，如何手工备份与异地保存？
- [恢复快照](#恢复快照)：如何回滚数据，或在数据全部丢失后重建集群？
- [升级版本](#升级版本)：如何升级 OpenBao 软件包？
- [销毁集群](#销毁集群)：如何销毁 VAULT 集群，以及之后如何重新创建？

更多问题请参考 [FAQ：VAULT](/docs/vault/faq)。


------

## 创建集群

要创建一个集群，首先需要在 [配置清单](/docs/setup/config) 中定义 `vault` 分组，并通过 `node_etc_hosts` 解析服务域名（完整说明见 [集群配置](/docs/vault/config)）：

```yaml
vault:
  hosts:
    10.10.10.11: { vault_seq: 1 }
    10.10.10.12: { vault_seq: 2 }
    10.10.10.13: { vault_seq: 3 }
  vars: { vault_cluster: vault, node_cluster: vault, vip_enabled: true, vip_vrid: 129, vip_address: 10.10.10.8 }
```

确保这些节点已经完成 NODE 纳管（包括 VIP），然后执行 [`vault.yml`](/docs/vault/playbook#vaultyml) 剧本即可：

```bash
./node.yml  -l vault               # 纳管节点，并在 vault 节点集群上配置 L2 VIP
./node.yml  -t node_hosts          # 将 vault.pigsty 写入所有节点的 /etc/hosts
./vault.yml -l vault               # 创建 vault 集群，也可以使用 bin/vault-add
```

剧本完成后，管理节点的 `files/pki/vault/` 中会生成解封密钥、初始化材料、备份令牌与初始快照。**请立即把整个 `files/pki/` 目录备份到安全的位置**。





------

## 检查状态

`bao` 客户端的环境变量由 `/etc/profile.d/bao.sh` 设置：`BAO_ADDR` 指向本机的 `https://127.0.0.1:8200`，`BAO_CACERT` 指向 `/etc/openbao/tls/ca.crt`。
由于 TLS 目录只对 root 与 `openbao` 组可读，请在成员节点上以 root 身份执行 `bao` 命令：

```bash
sudo -i                            # 切换到 root，自动加载 /etc/profile.d/bao.sh
bao status                         # 无需令牌：初始化、封印、HA 角色与 Raft 索引
```

一个正常的 standby 成员会输出类似如下的信息：

```text
Key                      Value
---                      -----
Seal Type                static
Recovery Seal Type       shamir
Initialized              true
Sealed                   false
Total Recovery Shares    5
Threshold                3
Version                  2.7.2
Storage Type             raft
Cluster Name             vault
HA Enabled               true
HA Mode                  standby
Active Node Address      https://10.10.10.13:8200
Raft Committed Index     1150
Raft Applied Index       1150
```

如果需要以普通用户执行，可以改用全局可读的 Pigsty CA：`export BAO_CACERT=/etc/pki/ca.crt`。

查看 Raft 成员与 Autopilot 健康状态需要管理员令牌（参见 [管理员凭据](#管理员凭据)）：

```bash
bao operator raft list-peers                 # Raft 成员列表：node_id、地址、角色、是否 voter
bao operator raft autopilot state            # Autopilot 视角：集群健康、容错数、各成员健康状态
```

健康检查接口无需令牌，任何纳管节点都可以通过服务域名访问：

```bash
curl -s --cacert /etc/pki/ca.crt https://vault.pigsty:8200/v1/sys/health   # active 返回 200
curl -s --cacert /etc/pki/ca.crt https://vault.pigsty:8200/v1/sys/leader   # 当前 active 成员地址
```

在 Grafana 中，**Vault Overview** 面板展示了成员列表、角色、封印状态、Raft 复制延迟、快照时间等关键信息，参见 [监控告警](/docs/vault/monitor)。





------

## 管理员凭据

集群初始化时生成的 root token 与恢复密钥保存在管理节点的 `files/pki/vault/init.json` 中：

```bash
jq -r .root_token ~/pigsty/files/pki/vault/init.json   # 在管理节点上读取 root token
```

在成员节点上使用 root token 时，建议通过交互输入设置环境变量，避免它出现在命令行参数与 shell 历史中：

```bash
sudo -i
read -rs BAO_TOKEN && export BAO_TOKEN      # 粘贴 root token 后回车，输入不回显
bao operator raft list-peers
```

root token 拥有全部权限，请只在管理操作中短暂使用。日常给业务应用发放凭据时，请创建权限最小的 policy 与 AppRole，参见 [使用方法](/docs/vault/usage#为应用发放凭据)。

恢复密钥（5 份，阈值 3）在 auto-unseal 模式下 **不能用来解封**，它们用于 `bao operator generate-root` 等需要法定人数授权的操作，例如在 root token 遗失时重新生成一个。





------

## 添加成员

### 推荐方式：使用便捷脚本

```bash
# 首先在配置清单的 vault 分组中添加新成员定义（vault_seq 不能与现有成员重复），然后执行：
bin/vault-add 10.10.10.14
```

脚本会执行 `./vault.yml -l 10.10.10.14`：新成员签发证书、获取解封密钥，通过 Raft `retry_join` 加入现有集群并自动解封，同时注册到监控系统。
新成员不是 `vault_seq` 最小的成员，所以绝不会执行初始化。

完成后，刷新现有成员的配置（`retry_join` 成员列表）与 HAProxy 入口：

```bash
./vault.yml -l 'vault,!10.10.10.14' -t vault_haproxy,vault_conf
```

`retry_join` 只在进程启动时使用，因此这里不需要重启现有成员，配置会在它们下次重启时生效。


### 从单节点扩容到三节点

从单节点扩容到生产三节点时，服务入口也会从“域名指向成员”变成“域名指向 VIP”，现有成员的证书需要加入 VIP 地址：

1. 在配置清单中添加两个新成员，并在 `vault` 分组上配置 `node_cluster`、`vip_enabled`、`vip_vrid` 与 `vip_address`；
2. 纳管新节点并配置 VIP：`./node.yml -l vault`（已纳管的节点只需执行 `./node.yml -l vault -t node_vip`）；
3. 添加新成员：`bin/vault-add 10.10.10.12 10.10.10.13`；
4. 刷新原有成员的证书、配置与入口，证书变化会触发它的重启：

   ```bash
   ./vault.yml -l 10.10.10.11 -t vault_cert,vault_conf,vault_launch,vault_haproxy
   ```

5. 将 `node_etc_hosts` 中的 `vault.pigsty` 改为指向 VIP，然后执行 `./node.yml -t node_hosts` 刷新所有节点；
6. 检查 `bao operator raft list-peers` 中有三个 voter，`curl` 通过 VIP 访问 `/v1/sys/health` 返回 `200`。

证书是否已经包含 VIP，可以在成员上用 `openssl x509 -in /etc/openbao/tls/server.crt -noout -ext subjectAltName` 检查（需要 root 权限）。
如果没有，删除管理节点上对应的 `files/pki/vault/vault-<seq>.crt` 后重新执行第 4 步。





------

## 移除成员

### 推荐方式：使用便捷脚本

```bash
bin/vault-rm 10.10.10.13          # 从集群中摘除 10.10.10.13
```

脚本会执行 `./vault-rm.yml -l 10.10.10.13 -e vault_safeguard=false`，依次完成：注销监控目标，在存活成员上执行 `bao operator raft remove-peer vault-3`，停止服务，删除本机数据与配置。

**执行期间，被移除的成员必须仍在配置清单的 `vault` 分组中**：剧本需要从清单中找到存活成员来执行摘除操作。如果摘除失败（例如管理员令牌无效），剧本会立即中止，不会删除任何数据。

成功后，编辑配置清单删除该成员，再刷新其余成员的配置与 HAProxy 入口：

```bash
vi pigsty.yml                                             # 从 vault 分组中删除 10.10.10.13
./vault.yml -l vault -t vault_haproxy,vault_conf          # 刷新剩余成员的配置与入口
```

> [!WARNING] 注意容错能力
> 从三节点集群中摘除一个成员后，剩下的两个成员 **没有任何容错能力**。如果是为了替换故障节点，请尽快补充新成员；
> 生产环境更稳妥的做法是先添加新成员（临时变成四节点），再摘除老成员。


### 手工方式：分步操作

如果需要保留被移除成员的本地数据与快照：

```bash
./vault-rm.yml -l 10.10.10.13 -e vault_safeguard=false -e vault_rm_data=false   # 摘除并停服，保留数据
```





------

## 重建成员

当某个成员的数据目录损坏、或者需要在同一地址上更换硬件时，先把它从集群中摘除，再作为新成员加入。**这期间不要从配置清单中删除它**：

```bash
bin/vault-rm  10.10.10.13          # 从 raft 中摘除，停服并清理本机数据
bin/vault-add 10.10.10.13          # 以同样的 vault_seq 重新加入集群
```

以上做法只适用于多成员集群：单节点集群的唯一成员一旦执行 `bin/vault-rm`，就等于销毁整个集群，请改用 [恢复快照](#恢复快照) 的流程。

重建出来的成员会从 active 成员同步全部数据。即使重建的是 `vault_seq` 最小的成员，由于其他成员已经初始化，剧本也不会执行初始化。

如果成员所在的主机已经彻底不可用、无法执行 `vault-rm.yml`，可以在一个存活成员上以管理员令牌手工摘除它，再执行添加：

```bash
bao operator raft remove-peer vault-3      # 在存活成员上，以 root 身份并设置 BAO_TOKEN 后执行
```





------

## 更新配置

VAULT 的配置都由剧本生成，请修改配置清单后重跑剧本，不要手工修改 `/etc/openbao/openbao.hcl`。

```bash
./vault.yml -l vault -t vault_conf,vault_launch     # 刷新配置文件，变化时逐个重启成员
```

`vault_launch` 只在证书、解封密钥、配置文件或 systemd 单元发生变化时才重启成员，并且一次只重启一个：等待该成员重新找到 leader 之后，才会处理下一个。因此在三节点集群上，整个过程中始终有多数成员在线。

**更新证书**：服务端证书默认有效期为 20 年。如需重新签发（例如更换了 VIP 或域名），删除管理节点上对应的证书后重新执行：

```bash
rm -f files/pki/vault/vault-*.crt                   # 删除旧证书（私钥保留）
./vault.yml -l vault -t vault_cert,vault_launch     # 重新签发、分发，并逐个重启成员
```

**刷新 HAProxy 入口**：启用或关闭 VIP、增减成员后，或者 `node.yml` 以 `haproxy_clean=true` 清空了 HAProxy 配置后执行：

```bash
./vault.yml -l vault -t vault_haproxy
```





------

## 备份

**每日快照**：每个成员每天 3 点执行一次 `vault-backup`，从 **active** 成员拉取一份 Raft 快照，保存到本地的 `/data/vault/backup/`，保留最近 7 份。各成员的执行时间按 `vault_seq` 错开。
因此，三节点集群的每个成员上都有一份完整的快照副本。

脚本使用的备份令牌只拥有 `sys/storage/raft/snapshot` 的读取权限。每次成功后，脚本会将快照的完成时间与大小写入 node_exporter 的 textfile 目录，超过 26 小时没有成功快照时会触发 [`VaultBackupStale`](/docs/vault/monitor#告警规则) 告警。

```bash
vault-backup                       # 以 root 身份手工拍摄一份快照，最后一行输出快照路径
vault-backup 14                    # 拍摄快照，并保留最近 14 份
journalctl -t vault-backup         # 查看定时任务的执行日志
```

**初始快照**：集群首次初始化后，剧本会立即拍摄一份快照，回收到管理节点的 `files/pki/vault/backup/` 目录。

**异地保存**：定时快照只保存在各成员本地，复制到异地属于运维职责。快照由 OpenBao 的 barrier key 加密，没有 `unseal.key` 无法解开，可以放心复制到其他存储；但请把 `files/pki/vault/` 与快照 **分开保存**。
例如，在管理节点上取回某个成员最新的快照：

```bash
(umask 077; ssh 10.10.10.11 "sudo bash -c 'cat \$(ls -t /data/vault/backup/*.snap | head -1)'" \
  > files/pki/vault/backup/vault-$(date +%Y%m%d).snap)
```

> [!CAUTION] 避免循环依赖
> 如果对象存储使用 KES 加密，而 KES 的密钥又保存在 VAULT 中，就不要只把 VAULT 快照保存在这套对象存储里：恢复时会出现“先有鸡还是先有蛋”的问题。





------

## 恢复快照

恢复需要三样东西：**一份快照**、**对应的 `files/pki/vault/unseal.key`**，以及 **原来的 `files/pki/vault/init.json`**（恢复之后，原来的 root token 与恢复密钥重新生效）。

> [!WARNING] 手工流程
> 快照恢复是破坏性的手工操作：恢复之后，快照时间点之后创建的所有密钥、令牌与租约都会丢失。请先在隔离环境中演练，并在操作前再拍摄一份当前状态的快照。

### 回滚到快照（集群仍然可用）

集群仍然正常运行，只是需要把数据回滚到某个快照（例如误删了密钥）时，在 **active** 成员上以 root 身份执行：

```bash
read -rs BAO_TOKEN && export BAO_TOKEN                          # 输入 root token
vault-backup                                                    # 先为当前状态拍一份快照
bao operator raft snapshot restore /data/vault/backup/vault-<时间>.snap
```

Raft 会把恢复后的状态复制到其余成员。完成后检查 `bao status` 与业务密钥是否符合预期。

### 从快照重建集群（数据全部丢失）

如果所有成员的数据都已丢失，直接执行 `vault.yml` 会被拒绝：剧本发现所有成员都未初始化、而管理节点上存在 `init.json`，判定这是一套曾经初始化过、数据已经丢失的集群。
此时需要先引导一套临时的空集群，再用快照覆盖它：

1. 准备好要恢复的快照文件，并确认管理节点上的 `files/pki/vault/unseal.key` 就是生成该快照时使用的那一把；
2. 归档原来的初始化材料，否则剧本会拒绝初始化：

   ```bash
   mkdir -p files/pki/vault/orig
   mv files/pki/vault/init.json files/pki/vault/orig/
   ```

3. 引导临时集群，剧本会生成新的 `init.json`。原来的 `backup.token` 在临时集群中无效，剧本会自动重新签发，并将旧文件备份为 `backup.token.*~`：

   ```bash
   ./vault.yml -l vault
   ```

4. 将快照复制到临时集群的 active 成员上（`bao status` 中 `HA Mode` 为 `active`），例如 `/tmp/restore.snap`，然后使用 **临时集群** 的 root token 强制恢复（`-force` 用于恢复来自另一套集群的快照）：

   ```bash
   sudo -i
   read -rs BAO_TOKEN && export BAO_TOKEN    # 输入新 init.json 中的 root token
   bao operator raft snapshot restore -force /tmp/restore.snap
   ```

5. 恢复之后，原来的 root token 重新生效，临时集群的凭据全部作废。放回原来的 `init.json`，再执行令牌签发与备份任务：剧本发现当前的备份令牌已经无效，会重新签发并分发到各成员：

   ```bash
   mv -f files/pki/vault/orig/init.json files/pki/vault/
   ./vault.yml -l vault -t vault_provision,vault_backup
   ```

6. 使用原来的 root token 检查 `bao operator raft list-peers`、业务密钥，并在每个成员上手工执行一次 `vault-backup` 确认备份链路恢复正常。

快照中也保存了审计设备的配置，OpenBao 在解封后会尝试写入原来的审计路径 `/var/log/openbao/audit.log`。如果该路径不可写，解封后的初始化会失败，请检查目录权限，**不要通过关闭审计来绕过问题**。

如果 VAULT 中保存着其他组件的密钥，请按照依赖顺序依次恢复：VAULT → KES → Silo → pgBackRest → PostgreSQL。





------

## 升级版本

`openbao` 软件包由 Pigsty Infra 仓库提供。升级是手工流程，请先更新本地软件仓库，并拍摄一份快照：

1. 在任意成员上执行 `vault-backup`，并将快照复制到安全位置；
2. 先逐个升级 **standby** 成员：升级软件包，`systemctl restart openbao`，等待 `bao status` 显示已解封，`bao operator raft autopilot state` 显示该成员健康，再处理下一个；
3. 最后升级 **active** 成员。它重启时，集群会选出新的 active 成员，VIP 入口随之切换。

```bash
ansible 10.10.10.12 -b -m package -a 'name=openbao state=latest'   # 升级单个成员的软件包
ansible 10.10.10.12 -b -m systemd -a 'name=openbao state=restarted'
```

跨大版本升级前，请阅读 [OpenBao 的发布说明](https://openbao.org/docs/release-notes/) 与升级指南。





------

## 销毁集群

要销毁整个 VAULT 集群，请使用 [`vault-rm.yml`](/docs/vault/playbook#vault-rmyml) 剧本或 `bin/vault-rm` 脚本。

> [!CAUTION] 危险操作
> 销毁 VAULT 等于销毁其中保存的 **全部密钥**：使用它们加密的数据库、对象及其全部备份都将永久无法解密。
> 执行前请确认：没有任何消费者仍在使用 VAULT；管理节点上的 `files/pki/vault/` 完好；最新的快照已经复制到成员之外的安全位置（本地快照会随数据目录一起删除）。

```bash
bin/vault-rm                                        # 需要手工输入集群名 vault 确认
./vault-rm.yml -l vault -e vault_safeguard=false    # 与上一条等价
```

移除整个集群时，剧本会先列出现存的 `tde/*` 与 `kes/*` 消费者，暂停 5 秒，然后注销监控、停止服务并删除数据。它不会执行 `raft remove-peer`，也不会删除管理节点上的 `files/pki/vault/` 与成员上的审计日志。

**重新创建空集群**：销毁之后，如果要创建一套全新的 **空** 集群（而不是从快照恢复），需要先归档旧集群的初始化材料，否则 `vault.yml` 会拒绝初始化：

```bash
mkdir -p files/pki/vault/archive-$(date +%Y%m%d)
mv files/pki/vault/init.json files/pki/vault/archive-$(date +%Y%m%d)/
./vault.yml -l vault
```

旧集群留下的 `backup.token` 在新集群中无效，剧本会自动重新签发，并将旧文件备份为 `backup.token.*~`。

`unseal.key` 可以保留在原处继续使用。旧快照仍然只能用它解开，请不要删除。

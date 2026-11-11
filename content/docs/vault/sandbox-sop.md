---
title: 沙箱测试与恢复预案
weight: 4990
description: VAULT Beta 四节点沙箱的部署检查、故障注入、备份与恢复操作手册。
icon: fas fa-flask
module: [VAULT]
categories: [任务]
draft: true
---

适用版本：Pigsty 提交 `f0fb2cb3`，OpenBao 2.7.2。该提交修复了基线测试发现的三项问题；基线结果与候选修复验证见 [**2026-11-11 测试报告**](/docs/vault/test-report-20261111/)。本文用于已授权的测试集群；移除和恢复会改变密钥、令牌及租约状态，不能直接照搬到业务集群。

## 1. 范围与隔离

四节点沙箱：`10.10.10.11–13` 部署 VAULT，`10.10.10.10` 作客户端，入口为 `10.10.10.8:8200`。不修改共享仓库的 `pigsty.yml`，不操作 PostgreSQL、Redis 等其他模块。

在管理机创建私有实验目录，固定源码版本，复制清单和现有 VAULT 恢复材料：

```bash
cd ~/pigsty
umask 077
VAULT_REPO=$PWD
VAULT_LAB_DIR=$(mktemp -d "${TMPDIR:-/tmp}/vault-lab.XXXXXX")
mkdir -p "$VAULT_LAB_DIR/source" "$VAULT_LAB_DIR/logs" "$VAULT_LAB_DIR/recovery"
git rev-parse HEAD > "$VAULT_LAB_DIR/baseline.txt"
git archive HEAD | tar -x -C "$VAULT_LAB_DIR/source"
cp pigsty.yml "$VAULT_LAB_DIR/source/"
mkdir -p "$VAULT_LAB_DIR/source/files/pki"
cp -Rp files/pki/vault "$VAULT_LAB_DIR/source/files/pki/"
ln -s "$VAULT_REPO/files/pki/ca" "$VAULT_LAB_DIR/source/files/pki/ca"
barn status
barn ssh-config > "$VAULT_LAB_DIR/barn_ssh_config"
```

源码副本只包含指定提交，不包含其他人的未提交修改。上述命令假定已有 VAULT 材料；真正首次部署时省略对应的 `cp`。CA 只交给签发任务使用，不显示私钥内容。实验目录、日志和恢复材料均不进入 Git。

创建 `$VAULT_LAB_DIR/vault-inv.yml`：

```yaml
all:
  children:
    vault:
      hosts:
        10.10.10.11: { vault_seq: 1 }
        10.10.10.12: { vault_seq: 2 }
        10.10.10.13: { vault_seq: 3 }
      vars:
        node_cluster: vault
        vip_enabled: true
        vip_vrid: 129
        vip_address: 10.10.10.8
```

三台使用相同 `node_cluster`，让 NODE 的 VRRP 配置一致。VIP/HAProxy 是 NODE 的前置设施；单独执行 `vault.yml` 不会安装 keepalived。

```bash
cd "$VAULT_LAB_DIR/source"
export ANSIBLE_CONFIG="$PWD/ansible.cfg"
export ANSIBLE_SSH_ARGS="-F $VAULT_LAB_DIR/barn_ssh_config -o ControlMaster=auto -o ControlPersist=60s"
VAULT_INV="$VAULT_LAB_DIR/vault-inv.yml"

vault-play() {
    local playbook=$1
    shift
    ansible 10.10.10.10 -i pigsty.yml -i "$VAULT_INV" -m ping || return
    ansible-playbook "$playbook" -i pigsty.yml -i "$VAULT_INV" "$@"
}
```

每次 playbook 前先 ping 管理节点，是为了预热 barn 的 SSH 转发；`banner exchange / Broken pipe` 应先按连接故障排查。本轮沙箱没有完整 INFRA，因此部署时跳过 `vault_register`，监控使用独立的临时采集器和规则求值器。

## 2. 健康判定

操作前检查服务、API、实际 Raft 成员和测试数据，不能仅凭端口开放或 `/sys/leader` 返回了地址判断恢复成功。

在成员上执行以下命令。root token 交互输入，不放进命令行、清单、终端回显或报告：

```bash
sudo -i
export BAO_ADDR=https://127.0.0.1:8200
export BAO_CACERT=/etc/openbao/tls/ca.crt
read -rs -p 'Root token: ' BAO_TOKEN
export BAO_TOKEN
printf '\n'
systemctl is-active openbao haproxy keepalived
bao status
bao operator raft list-peers
bao operator raft autopilot state
```

三节点健康应同时满足：

- 三台均 initialized、unsealed，cluster ID 相同；Raft 列表是三个 voter、一个 leader。
- Autopilot 的成员健康状态恢复正常，复制进度追平；新加入节点不能长期停留在 non-voter。
- `/v1/sys/health` 为一个 `200`、两个 `429`；`503` 表示 sealed，`501` 表示未初始化。不要对 standby 的 `429` 直接使用 `curl -f` 判断服务宕机。
- 写入专用测试路径后，从三台成员及 VIP 读回相同内容。先读测试路径，不枚举业务密钥。
- VIP 只有一个持有者，HAProxy 可连接 active。OpenBao active 与 VIP 持有者可以是不同节点。

```bash
# 成员上，已设置 BAO_*；只写入测试对象
bao kv put secret/qa-vault-sop marker=before-fault counter=1
bao kv get -field=marker secret/qa-vault-sop

# 管理机：只复制公有 CA 到客户端，再登录客户端
scp -F "$VAULT_LAB_DIR/barn_ssh_config" files/pki/ca/ca.crt 10.10.10.10:/tmp/vault-qa-ca.crt
ssh -F "$VAULT_LAB_DIR/barn_ssh_config" 10.10.10.10

# 在 .10 客户端：访问沙箱网络，打印健康状态码并校验 CA
for ip in 10.10.10.11 10.10.10.12 10.10.10.13 10.10.10.8; do
    curl -sS --max-time 5 --cacert /tmp/vault-qa-ca.crt \
      -o /dev/null -w "$ip %{http_code}\n" "https://$ip:8200/v1/sys/health"
done
```

## 3. 备份是破坏性测试的前置条件

每个破坏性阶段前，在健康成员上生成新快照并校验；将快照和对应的 `unseal.key`、`init.json`、配置/TLS 材料一起保存在管理机的私有目录。仅有 `.snap` 不构成完整恢复材料。

```bash
# 成员上，以 root 执行
snap=$(/usr/local/bin/vault-backup)
gzip -t "$snap"
stat -c '%a %s %n' "$snap"    # 期望 600
sha256sum "$snap"
```

再用 Ansible `fetch`（`-b`）回收该明确路径，管理机文件设为 `0600`，复核 SHA-256。`gzip -t` 只验证压缩文件完整性；真正的恢复演练才验证密钥和数据可恢复。

同一节点的 `vault-backup` 使用本地文件锁串行执行，手工备份与 cron 重叠时，后来的调用等待前一个完成。锁覆盖快照保存、指标更新与保留清理；不同成员各自备份，不共享锁或本地文件。后续备份仍可能按保留策略清理已返回的旧快照，需保留的文件应及时回收。

成员默认保留 7 份。管理机只自动回收初始和最终快照，不自动清理；日常快照的异机备份及管理机保留策略由操作者负责。`fetch + become` 不适合用本轮几 MiB 的测试结果推断 GiB 级快照的内存需求。

## 4. 部署、重跑与更新

```bash
vault-play vault.yml -l vault --check --skip-tags vault_register
vault-play vault.yml -l vault         --skip-tags vault_register
vault-play vault.yml -l vault         --skip-tags vault_register   # 检查幂等
```

首次初始化应包含组内最小 `vault_seq` 的成员。所有节点数据丢失但管理机仍有 `init.json` 时，剧本应拒绝重新初始化，不要为了让部署变绿而删除旧密钥材料。

配置更新和启动应在同一轮执行，以保留本轮模板变更的注册结果：

```bash
vault-play vault.yml -l vault --check -t vault_config,vault_launch,vault_init
vault-play vault.yml -l vault         -t vault_config,vault_launch,vault_init
```

服务原先未运行时，本轮只启动一次；原先已运行且配置发生变化时，逐个重启成员。初始化阶段等待成员解封且已知 leader 后，才继续配置权限和执行备份。这些等待不能替代第 2 节的集群与数据检查。

## 5. 故障注入和回收

一次只引入一个故障；记录开始时间、实际目标、VIP 请求成功/失败及延迟，恢复后重新检查第 2 节的全部条件。节点地址按当时的角色选择，不固定假设 `.11` 是 active。

| 场景 | 注入方法 | 恢复与观察 |
|---|---|---|
| 停 standby | 对一个 standby 执行 `systemctl stop openbao` | 启动该成员；服务应继续可用 |
| 停 active | 对 active 执行 `systemctl stop openbao` | 观察新 leader 与 VIP 请求；再启动原成员 |
| 杀进程 | `systemctl kill --kill-who=main --signal=SIGKILL openbao` | 观察 systemd 重启、Raft 选举、数据恢复 |
| 单成员分区 | 仅阻断该节点与其他 VAULT 成员间 TCP 8200/8201 | 使用专用规则注释，按原规则逐条删除；不清空整张防火墙表 |
| 两成员停机/全停 | 停止已确认的成员 | 使用下面的 `vault_launch,vault_init`，不手工重新 init |
| 封印 active | 在 active 上执行 `bao operator seal` | 检查 503、切换；重启被封印成员后自动解封 |
| 停 VIP 持有者的 HAProxy | `systemctl stop haproxy` | VIP 不会因 HAProxy 停止而迁移；启动 HAProxy 恢复入口 |
| 停 VIP 持有者的 keepalived | `systemctl stop keepalived` | 检查新的唯一 VIP 持有者及入口请求；再启动 keepalived |

OpenBao 2.7.2 拒绝直接 seal standby；这不是 Pigsty 剧本故障。`systemctl kill` 在本沙箱应指定 `--kill-who=main`，否则可能在发出信号后又因辅助进程返回错误。

```bash
vault-play vault.yml -l vault --check -t vault_launch,vault_init
vault-play vault.yml -l vault         -t vault_launch,vault_init
```

备份写满和审计写满应使用小型临时 tmpfs，不填满共享节点真实磁盘。设置无条件清理：解除挂载、恢复目录、启动服务，再检查业务探针。审计失败时请求应失败；不要用永久关闭审计来“恢复”。

## 6. 成员移除与重加

移除前备份，清单中保留完整的真实成员集合，使用 `-l` 指定目标。剧本需要据此区分局部移除与整组移除；不能为了删除一个成员而先把 inventory 改成只剩它。

```bash
vault-play vault-rm.yml -l 10.10.10.13 --check -e vault_safeguard=false
vault-play vault-rm.yml -l 10.10.10.13         -e vault_safeguard=false
```

局部移除在存活成员上执行 `raft remove-peer`，成功后才注销监控和删除目标数据。检查剩余 Raft 列表，再重加原节点。三减二是无故障容忍的过渡状态，应尽快恢复三 voter；常规 SOP 建议逐个操作。

如果首次加入长期停在 `initialized=false`、`sealed=true`，日志持续出现 `error bootstrapping cluster: cluster already has state`：

1. 确认其他成员仍有可用 leader，先从健康成员备份并回收。
2. 检查该成员是否已被加入为 non-voter；不要对它执行 `bao operator init`。
3. 仅移除这个未完成加入的成员，再使用 `vault-play vault.yml -l <该成员地址> --skip-tags vault_register` 重新部署，执行前先加 `--check` 验证；不要清空整组数据。
4. 等到三 voter、一个 leader、每成员及 VIP 的测试读写都通过后才结束。

保留数据停用整个集群：

```bash
vault-play vault-rm.yml -l vault --check -e vault_safeguard=false -e vault_rm_data=false
vault-play vault-rm.yml -l vault         -e vault_safeguard=false -e vault_rm_data=false
```

该方式保留数据、配置和服务 unit，停止并禁用服务，移除 cron、备份指标和 HAProxy 入口；不拍最终快照。再次完整部署后检查 cluster ID 和原数据，不能只检查进程启动。

## 7. 最终快照与销毁

```bash
vault-play vault-rm.yml -l vault --check -e vault_safeguard=false
vault-play vault-rm.yml -l vault         -e vault_safeguard=false
```

预期顺序：最终快照 → 管理机回收并设为 `0600` → 注销监控 → 停服务 → 删数据/unit → daemon-reload。整组移除不执行 `raft remove-peer`。

快照在第一个 play 主机上执行。即使其他成员仍有 quorum，这台的 OpenBao 关闭也会中止删除；这是当前有意采用的保守边界。快照成功但管理机无法接收文件，也必须中止。

只有明确要丢弃的空集群或损坏测试集群，且已有需要保留的恢复材料，才使用显式绕过：

```bash
vault-play vault-rm.yml -l vault -e vault_safeguard=false --skip-tags vault_snapshot
```

管理机密钥/快照和成员审计日志不会被删除。任何节点不可达时，应先恢复连接；不要为了绕过保护随意缩小清单，造成残留成员与误判整组删除。

## 8. 从最终快照恢复

本轮恢复了整个集群删除前的 cluster ID、测试值及 4 MiB 合成数据。恢复前先验证快照完整性、匹配的 static seal key 和原 `init.json`，保留服务/TLS 配置与审计目录的创建方式。

1. 将当前状态的备份另存；归档原初始化材料，让临时空集群能够 bootstrap。保留原来的 `unseal.key`，不生成另一把密钥。

   ```bash
   umask 077
   VAULT_RESTORE_ARCHIVE="files/pki/vault/restore-$(date +%Y%m%d-%H%M%S)"
   mkdir -p "$VAULT_RESTORE_ARCHIVE"
   cp -p files/pki/vault/unseal.key "$VAULT_RESTORE_ARCHIVE/"
   mv files/pki/vault/init.json "$VAULT_RESTORE_ARCHIVE/original-init.json"
   ```

2. 先 dry-run，再部署临时集群。原 backup.token 无效时剧本会重新签发，并保留旧文件备份。部署成功后核验真实 leader 可服务，再做恢复。若部署失败，先核对服务日志、leader 和匹配的恢复材料，不要更换正确的 unseal key。

   ```bash
   vault-play vault.yml -l vault --check --skip-tags vault_register
   vault-play vault.yml -l vault         --skip-tags vault_register
   ```

3. 将待恢复快照放到临时集群的 active，权限设为 0600。使用**临时集群**的 root token，在该 active 上执行：

   ```bash
   gzip -t /var/tmp/restore.snap
   bao operator raft snapshot restore /var/tmp/restore.snap
   ```

   本轮 temporary cluster 与原 cluster 的 ID 不同，但 static seal key 相同，**不加 `-force` 即成功**。不要把“来自另一集群”直接等同于“必须强制恢复”；检查拒绝时先核对快照和匹配材料。`-force` 会绕过相关校验，不是修复错误密钥的办法。

4. 保存临时 root 材料，再恢复原 root 材料。恢复请求返回并不表示所有成员和 VIP 已瞬时可用。

   ```bash
   mv files/pki/vault/init.json "$VAULT_RESTORE_ARCHIVE/bootstrap-init.json"
   cp -p "$VAULT_RESTORE_ARCHIVE/original-init.json" files/pki/vault/init.json
   chmod 0600 files/pki/vault/init.json
   ```

5. 检查原 cluster ID、三个 voter/一个 leader、每台的测试值、VIP 读写，以及快照前的 Transit/访问策略。使用与临时集群不同的数据标记或版本值，避免把“新空集群可访问”误当成恢复成功。本轮验证的是 counter 从临时集群的 0 回到原来的 2，并读取只有原快照中才有的大值。

6. 确认集群可用后刷新备份令牌，并在每个成员重新生成、校验、回收快照：

   ```bash
   vault-play vault.yml -l vault --check -t vault_provision,vault_backup
   vault-play vault.yml -l vault         -t vault_provision,vault_backup
   ```

快照中包含审计配置；先保证 `/var/log/openbao` 可写。若恢复后个别成员长期不健康，先看其服务日志、密钥是否一致、复制/voter 状态；不要因 `/sys/leader` 留有地址就继续下一步。本轮无需额外重启即可恢复全部成员，不能据此保证每次恢复都无需人工处理。

单节点 Lab 将 `VAULT_INV` 指向只包含 `.11`、设置 `vip_enabled: false` 的清单。Ansible 的多个 inventory 会合并组成员，不能再叠加一个只含 `.11` 的清单来“删掉” `.12/.13`。单节点验证完后换回三节点清单，再扩容、验收；真实 VIP 的验证单独在三节点场景进行。

## 9. 验收收尾

- 恢复三 voter、一个 leader、同一 cluster ID；读回销毁前的专用测试标记，并验证 Transit/访问策略。
- 每台成员生成并回收一份新快照，确认最新备份指标及文件权限。
- 清除故障注入的防火墙规则、tmpfs 挂载、错误 sysctl 值；确认 OpenBao、HAProxy、keepalived 已恢复。
- 停止本轮额外创建的 `vault-qa-*` 临时监控服务；保留日志、测试脚本和完整恢复材料。
- 区分模块缺陷、平台行为、已知设计边界、测试脚本自身错误；退出码为 0 不自动等于场景通过。
- 报告实测版本、源码 SHA、命令、结果与未覆盖范围；不要把一次探针的恢复时间写成可用性 SLA。

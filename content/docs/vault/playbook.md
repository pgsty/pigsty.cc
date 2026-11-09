---
title: 预置剧本
weight: 4983
description: 如何使用预置的 Ansible 剧本管理 VAULT 集群，常用管理命令速查。
icon: fa-solid fa-scroll
module: [VAULT]
categories: [任务]
---

VAULT 模块提供了两个剧本：[`vault.yml`](#vaultyml) 用于创建、更新与扩容 VAULT 集群，[`vault-rm.yml`](#vault-rmyml) 用于移除 VAULT 成员或整个集群。
此外还有两个便捷脚本 [`bin/vault-add`](#便捷脚本) 与 [`bin/vault-rm`](#便捷脚本)，对剧本做了简单封装。


--------

## `vault.yml`

剧本原始文件：[`vault.yml`](https://github.com/pgsty/pigsty/blob/main/vault.yml)

执行本剧本，将会在硬编码的固定分组 `vault` 上安装、配置并启动 OpenBao 集群。剧本是幂等的：重复执行只会收敛配置差异，不会重新初始化集群。

在 [`vault.yml`](https://github.com/pgsty/pigsty/blob/main/vault.yml) 中，提供了以下可用的任务子集：

- `vault_assert`：校验 `vault_seq` 与 `vault_data`，推导实例名、成员列表与 VIP（总是执行）
- `vault_install`：安装 `openbao` 软件包，确保 `openbao` 系统用户存在
- `vault_dir`：创建配置、数据、快照与审计日志目录
- `vault_config`：生成 VAULT 配置
  - `vault_cert`：签发并分发 TLS 证书
    - `vault_cert_issue`：在管理节点上用 Pigsty CA 签发服务端证书
    - `vault_cert_copy`：将 CA 证书、服务端证书与私钥复制到成员
  - `vault_seal`：生成并分发 static seal 解封密钥；成员上已有的密钥与管理节点不一致时立即中止
  - `vault_conf`：渲染 `openbao.hcl`、systemd 单元、`bao` 客户端环境与日志轮转配置
- `vault_launch`：逐个启动成员；仅当证书、解封密钥、配置或单元变化时才重启，并等待成员重新入群
- `vault_init`：在 `vault_seq` 最小的成员上执行一次性初始化，随后等待所有成员解封
- `vault_provision`：启用 `secret/`、`transit/` 与 `approle`；签发备份令牌，已有的令牌无效时（例如上一套集群遗留的）自动重新签发
- `vault_haproxy`：启用 VIP 时在各成员上生成 `<VIP>:8200` 的 HAProxy 入口，否则移除该入口
- `vault_backup`：安装 `vault-backup` 脚本、每日定时任务，并拍摄第一份快照
- `vault_register`：将 VAULT 成员注册到 VictoriaMetrics 监控

`vault_init` 只有在以下条件 **全部** 满足时才会执行 `bao operator init`：

1. 当前成员的 `vault_seq` 在 `vault` 分组中最小；
2. 所有成员均可访问，且都报告“尚未初始化”；
3. 管理节点上不存在 `files/pki/vault/init.json`。

因此，使用 `-l <ip>` 扩容或者重建单个成员时，永远不会引导出第二套空集群：新成员会通过 Raft `retry_join` 加入已有集群，并用同一把解封密钥自动解封。
如果有成员不可达，导致集群的初始化状态无法确定，剧本会中止；如果所有成员都未初始化、但管理节点上存在 `init.json`，说明这套集群曾经初始化过而数据已经丢失，剧本同样会中止，请参考 [恢复快照](/docs/vault/admin#恢复快照)。

初始化生成的 root token 与恢复密钥会保存到管理节点的 `files/pki/vault/init.json`。如果保存失败，它们会暂存在该成员的 `/root/vault-init.json` 中，剧本随后中止，请手工将其移动到管理节点。



--------

## `vault-rm.yml`

剧本原始文件：[`vault-rm.yml`](https://github.com/pgsty/pigsty/blob/main/vault-rm.yml)

用于移除 VAULT 成员或整个集群的专用剧本。在 [`vault-rm.yml`](https://github.com/pgsty/pigsty/blob/main/vault-rm.yml) 中，提供了以下可用的任务子集：

- `vault_safeguard`：检查防误删保险，**默认开启**，开启时直接中止执行
- `vault_consumer`：移除整个集群时，列出 `tde/*` 与 `kes/*` 消费者，提示哪些数据将永久无法解密
- `vault_pause`：暂停 5 秒，允许用户使用 Ctrl-C 中止执行
- `vault_deregister`：从 VictoriaMetrics 监控目标中移除成员
- `vault_leave`：仅移除部分成员时，在一个存活成员上执行 `bao operator raft remove-peer`；**失败则中止**，不会继续删除数据
- `vault_svc`：删除备份定时任务与备份指标，停止并禁用 `openbao` 服务，移除 HAProxy 入口
- `vault_data`：删除数据、配置、TLS 证书、解封密钥与备份令牌的节点副本，以及本地快照（可通过 `vault_rm_data=false` 禁用）
- `vault_pkg`：卸载 `openbao` 软件包（需通过 `vault_rm_pkg=true` 显式启用）

移除剧本使用 [`vault_remove`](https://github.com/pgsty/pigsty/blob/main/roles/vault_remove) 角色，支持以下可配置参数：

- [`vault_safeguard`](/docs/vault/param#vault_safeguard)：设置为 `true` 时阻止移除，默认为 `true`
- [`vault_rm_data`](/docs/vault/param#vault_rm_data)：控制是否删除 VAULT 数据，默认为 `true`
- [`vault_rm_pkg`](/docs/vault/param#vault_rm_pkg)：控制是否卸载 `openbao` 软件包，默认为 `false`

剧本判断移除范围的方式是：如果本次执行覆盖了 `vault` 分组的全部成员，就视为移除整个集群；否则视为移除部分成员，需要先将它们从 Raft 中摘除。
摘除操作使用管理节点 `init.json` 中的 root token，因此被移除的成员在执行期间 **必须仍然保留在配置清单的 `vault` 分组中**。

> [!CAUTION] 危险操作
> 移除整个 VAULT 集群，等于销毁其中保存的全部密钥：使用这些密钥加密的数据库、对象及其 **全部备份** 都将永久无法解密，除非您能用快照与 `files/pki/vault/unseal.key` 恢复 VAULT。
> `vault_rm_data` 默认为 `true`，成员上的本地快照会随数据目录一起删除。执行前请确认管理节点上的 `files/pki/vault/` 完好，并把最新的快照复制到安全位置。

管理节点上的 `files/pki/vault/`（解封密钥、初始化材料、初始快照）与成员上的审计日志 `/var/log/openbao/`，在任何情况下都不会被删除。



--------

## 命令速查

**VAULT 安装与配置：**

```bash
./vault.yml -l vault                              # 创建或更新 vault 集群
./vault.yml -l vault --check                      # 预检：查看将要发生的变更
./vault.yml -l vault -t vault_conf,vault_launch   # 刷新配置，按需逐个重启成员
./vault.yml -l vault -t vault_cert,vault_launch   # 重新签发并分发证书，按需逐个重启成员
./vault.yml -l vault -t vault_haproxy             # 刷新 VIP 上的 HAProxy 入口
./vault.yml -l vault -t vault_backup              # 刷新快照脚本、定时任务与备份令牌
./vault.yml -l vault -t vault_register            # 重新注册监控目标
./vault.yml -l 10.10.10.14                        # 扩容：将新成员加入现有集群
```

**VAULT 移除与清理：**

```bash
./vault-rm.yml -l 10.10.10.13 -e vault_safeguard=false                       # 摘除成员，停服并删除本机数据
./vault-rm.yml -l 10.10.10.13 -e vault_safeguard=false -e vault_rm_data=false # 摘除成员并停服，保留本机数据
./vault-rm.yml -l vault -e vault_safeguard=false                             # 销毁整个 vault 集群
./vault-rm.yml -l vault -e vault_safeguard=false -e vault_rm_pkg=true        # 销毁集群，同时卸载软件包
```



--------

## 便捷脚本

```bash
bin/vault-add                  # 创建或更新整个 vault 集群，等价于 ./vault.yml -l vault
bin/vault-add 10.10.10.14      # 向现有集群添加新成员（可指定多个 IP）
bin/vault-rm                   # 销毁整个 vault 集群，需要手工输入集群名 vault 确认
bin/vault-rm 10.10.10.13       # 从集群中摘除指定成员（可指定多个 IP）
```

两个脚本都只接受完整的 IPv4 地址作为参数，带有倒计时，并在完成后提示后续操作。
例如，添加或摘除成员后，脚本会提示刷新其余成员的配置与 HAProxy 入口：

```bash
./vault.yml -l 'vault,!10.10.10.14' -t vault_haproxy,vault_conf
```



--------

## 保护机制

VAULT 在部署与移除两个方向上都设置了护栏：

| 护栏 | 作用 |
|:---|:---|
| 初始化保护 | 仅在全部成员可达、全部未初始化且没有 `init.json` 时才初始化，避免分裂出空集群 |
| 解封密钥校验 | 成员上已有的解封密钥与管理节点不一致时立即中止，避免用错误的密钥封装数据 |
| 串行重启 | 一次只重启一个成员，等它重新入群后再处理下一个，保证集群始终有多数成员在线 |
| 防误删保险 | `vault_safeguard` 默认为 `true`，必须在命令行显式覆盖才能移除 |
| 消费者提示 | 移除整个集群前列出 `tde/*` 与 `kes/*` 消费者 |
| 摘除失败即中止 | `raft remove-peer` 失败时不再删除数据，避免残留的死成员悄悄吃掉集群的容错能力 |
| 信任根不删除 | 移除剧本永远不碰管理节点上的 `files/pki/vault/` |
{.full-width}

无论保护开关取值如何，真实运行后都要重新检查 `bao status`、Raft 成员列表与集群的容错能力；剧本返回成功不能替代这些运行态验收。

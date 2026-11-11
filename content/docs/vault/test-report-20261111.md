---
title: 四节点沙箱测试报告（2026-11-11）
weight: 4991
description: VAULT Beta 在四节点沙箱中的功能、故障注入与恢复测试结果，以及三项最小修复的验证证据。
icon: fas fa-clipboard-check
module: [VAULT]
categories: [参考]
draft: true
---

日期：2026-11-11。操作手册见 [**沙箱测试与恢复预案**](/docs/vault/sandbox-sop/)。

## 结论

正常服务、故障切换、防误删除及备份恢复的主要路径可用，但基线不能判为“全部通过”：本轮实测发现 **首次加入被重复重启打断、冷启动未等待 leader、同节点并发备份竞争** 三项问题。下述小修已在后续提交 `f0fb2cb3` 中采用；无需新增公开参数、通用重试框架或自动恢复编排。

测试期间，三个候选修法分别在独立实验目录验证，未改动共享仓库中的模块实现；测试结束后才整理并提交修复。候选试验与基线试验在下文分别标记，不能把候选通过算作基线通过。合并三项修复后的版本通过了 `bash -n`、两个剧本的 `--syntax-check`，以及 `vault.yml -l vault --check --skip-tags vault_register`；三节点均 `failed=0`、`unreachable=0`。检查日志保存在实验目录的 `delivery/` 下，未重新执行整套故障注入测试。

## 环境、范围与证据

| 项目 | 实际环境 |
|---|---|
| 源码 | `38a67d469844364ea6805b38e4843aabb4b05713`，通过 `git archive` 固定 |
| 管理机 | macOS，ansible-core 2.21.5，控制机 Python 3.14.8 |
| 沙箱 | `10.10.10.10–13`，Ubuntu 24.04.5 LTS，aarch64，每台 2 CPU / 4 GiB |
| 服务 | OpenBao 2.7.2；`.11–13` 三成员，`.10` 客户端；真实 VIP `10.10.10.8` |
| 临时监控 | Ubuntu 的 VictoriaMetrics/vmalert 1.79.14 包解包运行；`.10:18428/18480` 仅回环监听；成员临时 textfile exporter 19100 |
| 监控配置 | 基线 `files/victoria/rules/vault.yml` 原样求值，补充 `vault_up = up{job="vault"}`；通知仅发给本地空接收器 |
| 数据 | 只访问本轮 `qa-20261111*` 测试对象及系统状态；不读业务密钥、不操作 PGSQL/其他模块 |

完整私有实验目录：

```text
vault-lab-20261111-155237/
├── baseline.json                 # 源码 SHA、时间、来源
├── source/                       # 固定源码与独立的清单/VAULT 材料副本
├── vault-inv.yml                 # 三节点叠加清单
├── vault-single-inv.yml          # 单节点清单，替换三节点叠加清单使用
├── results.jsonl                 # 每次执行的时间、退出码、耗时、日志路径
├── logs/<测试ID>.log             # 含精确执行命令、任务输出、recap
├── playbooks/                    # 故障注入与断言任务
├── phase*.py / lab.py            # 测试驱动与辅助程序
└── recovery/                    # 快照、原始/临时集群恢复材料；不可进 Git
```

实验目录为 `0700`，日志和回收快照为 `0600`。正文只列测试 ID，按上述规则即可定位完整证据。`results.jsonl` 记录的是执行动作，包含准备、预期失败和恢复；**不能按退出码为零的条数计算通过率**。

测试前先 dry-run；破坏性阶段前生成并回收可校验的新快照，所有操作显式限制到 VAULT 测试节点。共享仓库的清单、密钥材料与其他人的修改保持原状。除短暂候选试验外，部署使用固定基线；候选试验结束即恢复实验源码。

## 结果矩阵

| 场景 | 结果 | 证据与边界 |
|---|---|---|
| 三 voter、单 leader、同一 cluster ID | 通过 | E02、N01；每次故障后继续做 API/成员检查 |
| 每成员写入后，三成员及真实 VIP 一致读回 | 通过 | N01，禁用 standby reads 的实际业务路径 |
| Transit 跨成员加解密 | 通过 | N01 |
| AppRole 登录、允许读、拒绝写、撤销令牌 | 通过 | N01；拒绝写为 HTTP 403 |
| TLS 域名 SAN、可信 CA；拒绝 TLS 1.2 和未知 CA | 通过 | N05；分别观察到 curl 35、60 |
| 备份专用令牌不能读取 KV 数据 | 通过 | N06，HTTP 403 |
| 完整部署重跑幂等 | 通过 | N04，三台 `changed=0` |
| 默认删除保险 | 通过 | G01，退出码 2，删除前中止 |
| 全组/局部删除 dry-run | 通过 | G02、G03，无实际快照或 remove-peer |
| 危险数据目录、路径穿越、负编号、无效端口、空 VIP | 通过 | G04 各子场景、G05；按预期拒绝 |
| 选中成员 SSH 不可达 | 通过 | G06，退出码 4，node_id 阶段中止 |
| 已有 init.json，但控制机 unseal.key 丢失 | 通过 | G07；拒绝生成替代随机密钥，随后恢复原文件 |
| 控制机与成员 unseal.key 不同 | 通过 | G08；分发前拒绝 |
| root token 无效 | 通过 | G09；错误可读，令牌不回显 |
| 局部删除的 root token 无效 | 安全中止 | G10；`no_log` 使具体原因不可见，是可诊断性限制 |
| backup.token 空白、空文件、无效 | 通过 | G11、G12；重新签发、分发，三成员备份恢复 |
| nonlocal_bind=0，check 模式也检查 | 通过 | G13–G16；HAProxy 开启时拒绝，关闭时跳过，最后恢复为 1 |
| 每成员生成、gzip 校验、回收快照 | 通过 | B01、G12、R02 等；回收文件 0600 |
| 非法 keep 值不删除快照；串行保留 7 份 | 通过 | B02；0、-1、foo 被拒绝；连续 9 次后 7 份 |
| 同节点 8 次并发备份 | **失败** | B02，5 次成功，3 次因共享临时文件/清理竞争失败 |
| 加文件锁的候选备份脚本 | 候选通过 | B11b，8/8 成功，7 份有效 0600 快照；仅安装到 `/var/tmp/` |
| 备份文件系统写满 | 通过 | B03，小 tmpfs；命令失败，成功指标保持原值 |
| 第一个 play 主机 OpenBao 停止，但其他成员有 quorum | 安全中止 | B05、B06；最终快照失败，配置/数据/cron 未删除 |
| 最终快照已生成，但管理机 fetch 目的地不可写入 | 安全中止 | B08、B09；三台服务/数据保留 |
| 停 active / standby、杀 active、单成员网络分区 | 通过 | H01–H03、H22b；故障撤销后 API 与数据校验通过 |
| 封印 active，再重启自动解封 | 通过 | H04b；封印节点健康码 503，随后恢复 |
| 封印 standby | 平台拒绝 | H04a，OpenBao 返回“cannot seal when in standby mode”；不计为模块缺陷 |
| 停 VIP 持有者的 HAProxy | 已知边界 | H05；入口持续失败到服务恢复，VIP 不自动迁移 |
| 停 VIP 持有者的 keepalived | 通过 | H06；VIP 探针未观察到失败，仍可能有小于超时的延迟 |
| 配置变化的串行滚动重启 | 通过 | H25–H27；三台实际执行重启，独立观测窗口，数据校验通过 |
| 两成员停机后恢复 quorum | 通过 | H10–H15；`vault_launch,vault_init` 恢复后数据完整 |
| 全停后 `vault_launch,vault_init` 冷启动 | 通过 | H16–H20；随后等待真实 API 就绪并核验数据 |
| 保留数据停用后，直接完整部署 | **首次失败，重跑恢复** | T05；正确保留数据/配置/unit，但尚无 leader 时先进入 provision/backup |
| 在现有 init 等待条件补 leader 的候选 | 候选通过 | C07–C10；同样停用/冷启动场景一次完成，三台首次备份成功 |
| standby 移除后重加 | 通过 | T02；恢复三 voter、同一 cluster ID 和测试数据 |
| active 移除 | 通过 | T03-remove；新 leader 继续服务 |
| 移除后重加该成员 | **失败** | T03-readd；首次加入后立即重启，形成未初始化的残留 Raft 状态 |
| 仅重启上述故障成员 | 未恢复 | T03i、T03j；不是简单增加一次重试即可处理 |
| 跳过刚启动成员重复重启的候选 | 候选通过 | C01–C06；清理未完成加入的成员后重建成功；运行中但 disabled 的成员仍按需重启 |
| 同时移除两个成员，再重加 | 通过 | T04，使用基线；说明首次加入竞态不是每次发生 |
| 三台全部停止的监控 | 通过 | M11、M12；active 回落为 0，`VaultNoLeader` firing |
| 成员长期停机、备份时间过期 | 通过 | M14、M15；`VaultDown`、`VaultBackupStale` firing；注入时间戳后等待真实 for 时长，最后还原 |
| 丢失一成员后的容错告警 | 部分验证 | M14；failure tolerance 降低，`VaultNoFailureTolerance` pending；未单独等到 firing |
| 规则求值与看板指标查询 | 通过（查询层） | M06、M09、M17；无规则错误；77 条不同指标查询无语法错误，48 条当时有数据 |
| 审计文件轮转 | 通过（已存在文件） | L01；audit.log 保持 0600、openbao:openbao，服务存活 |
| 审计盘写满，拒绝请求并告警 | 通过 | L02；单节点的独立 tmpfs 写满，三次 KV 读取均 500，`VaultAuditFailure` firing；卸载后恢复可读 |
| 单节点 Lab 初始化及 KV/Transit/AppRole | 通过 | S01–S03；独立单节点清单，禁用 VIP，只有 `.11` 被测 |
| 单节点扩成三节点 | 通过 | S04–S06；同一个临时 cluster ID，三个 voter，单 leader，真实 VIP 读写通过 |
| 16 个合成大值，共 4 MiB，跨成员 checksum 校验 | 通过 | R01、R02、R09；不是 GiB 级快照压力测试 |
| 截断损坏快照的恢复 | 通过 | R04、R05；恢复被拒绝，原数据仍可读 |
| 同集群回滚到快照 | 通过 | R06–R09；counter 999 回到 2，快照后字段消失，大值 checksum 全部正确 |
| 整组真实删除、自动最终快照 | 通过 | R10–R12；4,241,753 字节，gzip 校验通过，管理机文件 0600；成员数据/配置被删，审计目录保留 |
| 数据全失而原 init.json 仍在 | 通过 | R13；拒绝重新 bootstrap 空集群 |
| 从未初始化的测试集群显式跳过快照删除 | 通过 | R14；使用 `--skip-tags vault_snapshot` |
| 从最终快照恢复到另一套临时集群 | 通过 | R15–R19；同一 static seal key，不加 `-force`，恢复原 cluster ID、counter=2 和全部大值 checksum |
| 恢复后令牌刷新与每成员备份 | 通过 | R20、R21；旧 root 生效，临时备份令牌自动替换，新快照全部校验通过 |
| 恢复后完整重跑、API、审计轮转 | 通过 | F01–F05、L03；完整重跑三台 changed=0，三台 audit.log 均 0600、openbao:openbao |
| 撤销所有注入并清理临时服务 | 通过 | F06–F14；无测试防火墙规则/挂载，sysctl=1，VIP 唯一，额外监控服务 inactive，VAULT 仍正常 |

## 实测中断窗口

客户端从 `.10` 对真实 VIP 每约 250 ms 发起一次新的 HTTPS KV 读取，单请求超时 2 秒。数字是单次试验中“首次失败样本到下一成功样本”的观测窗口，不是精确故障持续时间或 SLA；没有失败也不意味着没有延迟。样本总数随请求超时而变化。

| 场景 | 成功/总样本 | 最大观测中断 |
|---|---:|---:|
| 停 active（H01） | 117/119 | 2.506 s |
| 停 standby（H02） | 97/97 | 未观察到失败 |
| active 与 peers 的 8200/8201 分区（H03） | 106/116 | 12.567 s |
| 封印 active（H04b） | 66/85 | 6.272 s |
| VIP 持有者 HAProxy 停止约 10 秒（H05） | 59/99 | 10.120 s |
| VIP 持有者 keepalived 停止（H06） | 93/93 | 未观察到失败 |
| SIGKILL active 主进程（H22b） | 84/113 | 11.388 s |
| 独立观测的滚动更新（H25–H26） | 157/159 | 2.261 s |

H08 的早期滚动探针覆盖了随后两成员停机/全停阶段，**已弃用其恢复时间**，使用 H25–H26 重测结果。

## 必要的小修

以下文件与行号对应测试基线 `38a67d46`。三项修改已收录于 `f0fb2cb3`，保留候选测试编号以便追溯。

### P1：刚启动的新成员被立即重复重启

位置：`roles/vault/tasks/main.yml:94`、`roles/vault/tasks/launch.yml:22`。

`start vault members` 先启动所有成员；新成员的配置当然属于 changed，于是后面的串行任务又立刻 restart。T03 中 `.11` 在 `08:27:25.380Z` 记录成功加入，**同一秒收到 shutdown**；下一个进程持续报 `error bootstrapping cluster: cluster already has state`。它在 leader 列表中是 non-voter，本机却 `initialized=false, sealed=true`；24 次等待后部署失败，额外重启也未恢复。

最小修法：记录已有 start 任务的结果，仅重启启动前已经 active 的成员。

```yaml
# tasks/main.yml，原有 systemd start 任务
register: vault_start

# tasks/launch.yml，原有 restart 任务
when:
  - hostvars[vault_launch_host].vault_restart_required|bool
  - hostvars[vault_launch_host].vault_start.status.ActiveState == 'active'
```

不能简单使用 `not vault_start.changed`：一个正在运行但被手工 disable 的服务，重新 enable 也会 changed，仍可能需要应用配置重启。C04–C06 专门覆盖了此边界。当前 Ansible 的 systemd 返回 `status` 来自操作前查询；旧版本未在本轮做完整集成复验。

证据：T03-readd、T03d–T03j、C01–C06；候选文件 `candidate-skip-double-start.patch`。

### P2：完整冷启动先做 provision，leader 尚未就绪

位置：`roles/vault/tasks/init.yml:86`。

现有等待只检查 initialized/unsealed。T05 的数据保留重装中，三台均解封，但选举尚未完成：正确的 root token lookup 返回 `local node not active but active cluster node not found`，其他两台的首次备份返回 `no active vault member found`。等选举完成后重跑即可恢复，数据没有丢失。

最小修法是在**已有的 until** 中再加一个条件：

```yaml
and (vault_status.stdout|from_json).leader_address|default('') != ''
```

无需给 token 检查和备份分别添加重试。C07–C10 重复相同停用/完整启动流程，一次通过。这个轻量检查不等于严格的全组健康证明；恢复验收仍要看 voter、复制状态和真实数据。

证据：T05-reinstall、T05d–T05f、C07–C10；候选文件 `candidate-wait-leader.patch`。

### P2：同节点并发备份竞争

位置：`roles/vault/templates/vault-backup:52`、`:59`。

8 次并发中，3 次分别遇到 `vault.prom.tmp` 已被另一个进程移动、`unlink` 的快照已被另一个进程删除、排序过程中 `stat` 的文件已消失。快照可能已生成，但命令返回失败；如果与最终快照重叠，会使删除在保护门处中止。

最小修法：在查询 leader 之前创建备份目录并锁住整个脚本，删除后面重复的 mkdir。

```bash
mkdir -p "${BACKUP_DIR}"
exec 9>"${BACKUP_DIR}/.backup.lock"
flock 9
```

一次锁住保存、指标更新与保留清理，不为三个竞争点分别补 try/except。B11b 的独立候选脚本 8/8 成功，最终 7 份快照均可 gzip 校验且为 0600。这里验证的是脚本调用之间的互斥，不保证已经返回的旧路径永远不受后续保留清理影响。

## 不应扩张成新框架的边界

- 第一个 play 主机本地 API 不可用时最终快照中止，即使其他节点有 quorum；目前无需增加自动选点/重试编排。
- VIP 不跟踪 HAProxy/OpenBao 的进程健康，本轮已实证；这属于 NODE 策略与部署预期，不应在 VAULT 中再建一套 VIP 管理。
- `vault_leave` 的失败细节被 no_log 隐藏，安全性正确，可诊断性较弱；如需改善，只输出经过筛选的 stderr，不解除整个任务的保护。
- 管理机快照无自动保留清理、fetch+become 的大文件内存成本、手工灾难恢复、root token 自动化，仍按 Beta 的既定边界处理。
- 没有因本轮测试引入 PROXY protocol、消费者接入、审计集中采集、密钥轮换框架或新的参数。
- 文档可以收紧默认使用 `restore -force` 的建议：R16 证明，相同 static seal key 下，即使临时集群 ID 不同，不带 force 也能恢复。SOP 已改为先使用常规恢复，不能泛化成任何跨 seal 配置都可直接恢复。

## 测试工具自身的偏差

- H04 最初对 standby 执行 seal，平台明确拒绝；改测 active 后成功，不算产品回归。
- H22 最初 `systemctl kill` 未指定 main，辅助进程信号路径报错；改成 `--kill-who=main` 后完成。
- B11 的首次候选测试脚本受 Ansible free-form shell 参数解析影响，Python 缩进丢失；改用结构化 `shell.cmd` 后 B11b 通过。
- T05 最初错误地断言 rm_data=false 会删除 unit；实际代码应保留。修正断言后的真正问题是启动未等 leader，二者不能混为一谈。
- S02 使用的通用辅助程序仍打印了“VIP”字样，但当时 `QA_VIP=''`，实际只测单节点地址；本报告不把它列为单节点 VIP 验证。

## 最终状态与交付

收尾记录位于 `final-manifest.json`。原集群 `a308966c-74ec-d5cc-72f5-511d372264c1` 已恢复，`.11` active，`.12/.13` standby，三个 voter。F07 验证 VIP 只有一个持有者；F12 验证临时监控停止后，三成员和 VIP 的测试数据仍可读。

M18 收尾时 active=1、unsealed=3、autopilot healthy=1、failure tolerance=1，规则无求值错误且无活动告警。M19 随后的原始指标检查已观察到 `vault_raft_peers=3`、`vault_expire_num_leases=6`；早先的空查询不能一概认定为不存在的指标。

原始、临时和最终恢复材料均保留在私有实验目录，仓库原有 `files/pki/vault/` 未被替换。最终材料的 unseal key 与 root token 已和实验前材料核对一致。已扫描 227 份运行日志，未发现本轮使用的已知 VAULT 凭据原文；这不代表日志可不加审查地公开。

| 材料 | 位置（相对实验目录） | 校验 |
|---|---|---|
| 实际删除前的最终快照 | `recovery/R-final.snap` | 4,241,753 字节，0600，SHA-256 `9b7e484a91294c0c26433d72847dac1c8487b6b916f3e9b374b9bc33cadb58ff` |
| 恢复后每成员的新快照 | `recovery/F04-final-off-node-backups-10.10.10.{11,12,13}.snap` | 每份 4,246,873 字节，0600，gzip 校验通过；各自 SHA-256 在 manifest 中 |
| 与最终快照配套的密钥/凭据 | `recovery/final-material/` | 私有保存，不提交 |
| 三项最小修改的实验补丁 | `minimal-fixes.patch` | 已采用至 `f0fb2cb3`；仅修改 4 个实现文件，无新增 task、公开参数或依赖框架 |

中文 SOP 和本报告保存在文档站 VAULT 目录，均设为 `draft: true`，不随正式站点发布。源码仓库仅提交三项实现修复；测试脚本、原始日志、下载的工具、快照和凭据均保留在仓库外的私有实验目录。

## 尚未验证

- EL8/9/10、Debian12/13、x86_64；本轮不能扩大为全平台结论。
- 旧版 Ansible 的完整集成；本轮候选补丁只在 core 2.21.5 验证。
- Grafana 页面渲染、导入和面板交互；只验证 JSON 与 77 条指标查询。3 条 VictoriaLogs 查询、完整 INFRA 注册/采集/通知链路未覆盖。
- 29 条查询在检查时无数据，包含空告警、未发生的操作和周期性 gauge；不把“查询能执行”写成每个面板数据语义均已验收。
- 长时间负载、跨机房/高延迟网络、内核/整机宕机、GiB 级快照、真实磁盘损坏及掉电一致性。
- root/recovery key 轮换、跨版本升级、真正丢失 unseal.key 后的恢复；本轮保留了全部匹配材料。

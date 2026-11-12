---
title: 监控告警
weight: 4986
description: VAULT 监控面板、指标采集方式、日志查询，以及告警规则。
icon: fa-solid fa-binoculars
module: [VAULT]
categories: [参考]
---

VAULT 模块复用 Pigsty 的可观测性基座：OpenBao 指标经 HTTPS 采集进入 VictoriaMetrics，服务日志与备份日志经 Journald / Vector 进入 VictoriaLogs，
vmalert 加载 14 条记录规则与 6 条告警规则，Grafana 提供一个 Vault Overview 监控面板。


--------

## 监控面板

VAULT 模块提供了一个监控面板：Vault Overview。

### Vault Overview Dashboard

Vault Overview：VAULT 集群概览，路径为 `/ui/d/vault-overview`，可以通过顶部的 `Cluster` 变量切换集群。

[![vault-overview.jpg](/img/dashboard/vault-overview.jpg)](/img/dashboard/vault-overview.jpg)

首屏 **Overview** 给出集群状态的关键信息：

- **Vault Spec**：成员数、已解封成员数、仲裁数与容错数；**Vault Members**：每个成员当前的角色（Active / Standby / Sealed / Down）
- **Vault Member List**：成员列表，包括存活、封印、角色、Autopilot 健康、Raft 已应用索引、复制延迟、租约与令牌数，以及距上次快照的时间
- **Vault Health**：Autopilot 视角的集群健康状态；**Has Leader**：是否恰好有一个 active 成员；**Backup Age**：在各成员最近一次成功的快照中，最久的那一份距今的时间
- **Vault Aliveness**：最值得关注的时间线，上方条带表示集群是否恰好有一个 active 成员，下方每个成员一条，按 Active / Standby / Sealed 着色，红色表示成员不可用
- **Leader Elections**、Raft 统计、请求速率、平均延迟、审计失败、租约与机密数量，以及当前触发的告警

其余分组展开后可以查看更多细节：

| 分组 | 内容 |
|:---|:---|
| Requests | 请求与登录速率、请求延迟分位数、按请求量加权的平均延迟 |
| Raft Storage | Raft 提交与应用索引、FSM 积压、follower 复制延迟与心跳、提交耗时、BoltDB 大小、容错数与成员数 |
| Secrets & Leases | 租约、令牌、令牌与租约操作、KV 机密与身份实体数量 |
| Audit | 审计日志写入速率与写入失败次数 |
| Runtime | Goroutine、内存、GC 暂停与堆对象 |
| HA Forwarding | standby 向 active 转发请求的速率与错误 |
| Backup | 各成员的快照时间、快照大小与备份日志 |
| Logs | OpenBao 服务日志的速率（按日志级别）与日志明细 |
{.full-width}


--------

## 指标采集

每个成员在注册监控时，会在 INFRA 节点上生成一个文件发现目标，VictoriaMetrics 的 `vault` 抓取任务消费该目录：

```yaml
# /infra/targets/vault/vault-1.yml
- labels: { ip: 10.10.10.11 , ins: vault-1 , cls: vault }
  targets: [ 10.10.10.11:8200 ]
```

抓取任务直接访问 OpenBao 的遥测接口 `https://<ip>:8200/v1/sys/metrics?format=prometheus`，使用 Pigsty CA 校验成员证书。指标接口与业务 API 共用同一个端口，不需要额外部署 Exporter：

- OpenBao 只在节点 IP 的监听器上开启了 `unauthenticated_metrics_access`，因此抓取 **不需要令牌**；回环地址的监听器不开放免认证的指标访问；
- 抓取走 HTTPS 而不是 HTTP：OpenBao 的监听器只提供 TLS，为指标单独开放明文端口没有必要；
- 被封印的成员依然可以被抓取，因此 `vault_up` 反映的是进程与网络是否可达，封印状态由 `vault_core_unsealed` 单独反映。

快照相关的两个指标由 `vault-backup` 脚本在每次成功后写入 `/var/lib/node_exporter/textfile/vault.prom`，经 node_exporter 的 textfile 采集器上报，再按 `ip` 关联到 VAULT 实例。

所有 VAULT 指标都带有 `job="vault"`、`cls`、`ins`、`ip`、`instance` 标签，指标的完整说明参见 [指标列表](/docs/vault/metric)。


--------

## 日志

OpenBao 服务以 systemd 运行，服务日志写入 Journald，由节点上的 Vector 采集到 VictoriaLogs；`vault-backup` 定时任务的输出通过 `logger -t vault-backup` 写入 Journald，走同一条链路。
在 Grafana 中可以使用以下 LogsQL 查询：

```bash
job:syslog unit:openbao                  # OpenBao 服务日志
job:syslog app:="vault-backup"           # 快照备份日志
```

审计日志写入成员本地的 `/var/log/openbao/audit.log`，每天轮转、保留 7 份，**不会** 被采集到 VictoriaLogs。审计日志中包含请求路径与客户端信息，如需集中保存，请按照合规要求自行接入。

如果审计设备无法写入（例如磁盘写满），OpenBao 会拒绝所有请求。这种情况由 `VaultAuditFailure` 告警覆盖。


--------

## 告警规则

Pigsty 针对 VAULT 提供了以下六条预置告警规则，定义于 [`files/victoria/rules/vault.yml`](https://github.com/pgsty/pigsty/blob/main/files/victoria/rules/vault.yml)：

| 告警 | 级别 | 触发条件 | 说明 |
|:---|:---:|:---|:---|
| `VaultDown` | CRIT | `vault_up < 1` 持续 1 分钟 | 成员指标无法抓取：进程退出或网络不可达 |
| `VaultSealed` | WARN | `vault_core_unsealed < 1` 持续 1 分钟 | 成员处于封印状态，无法提供密钥；单节点集群被封印时由 `VaultNoLeader` 报 CRIT |
| `VaultNoLeader` | CRIT | `vault:cls:active != 1` 持续 30 秒 | 集群没有、或者不止一个 active 成员 |
| `VaultAuditFailure` | CRIT | 5 分钟内审计写入失败次数大于 0，持续 1 分钟 | 审计设备无法写入时 OpenBao 拒绝请求，请检查磁盘 |
| `VaultNoFailureTolerance` | WARN | 三成员及以上的集群容错数小于 1，持续 2 分钟 | 再失去一个成员就会失去仲裁 |
| `VaultBackupStale` | WARN | 成员超过 26 小时没有成功的快照（或从未成功），持续 5 分钟 | 检查 `journalctl -t vault-backup` 与 node_exporter |
{.full-width}

此外，INFRA 模块的通用告警 `AgentDown` 已排除 `vault` 任务，避免与 `VaultDown` 重复告警。

以下片段原样反映当前规则源码：

```yaml

# metrics scrape failure: process down or unreachable (sealed members are still scraped)
- alert: VaultDown
  expr: vault_up < 1
  for: 1m
  labels: { level: 0, severity: CRIT, category: vault }
  annotations:
    summary: "CRIT VaultDown {{ $labels.ins }}@{{ $labels.instance }}"
    description: |
      vault_up[ins={{ $labels.ins }}, instance={{ $labels.instance }}] = {{ $value }} < 1
      metrics of the member can not be scraped: check openbao service on {{ $labels.ip }}
      /ui/d/vault-overview?var-cls={{ $labels.cls }}

# member reports itself sealed: a sealed single node also triggers VaultNoLeader
- alert: VaultSealed
  expr: vault_core_unsealed{job="vault"} < 1
  for: 1m
  labels: { level: 1, severity: WARN, category: vault }
  annotations:
    summary: "WARN VaultSealed {{ $labels.ins }}@{{ $labels.instance }}"
    description: |
      vault_core_unsealed[ins={{ $labels.ins }}] = {{ $value }} < 1
      the member is sealed and can not serve keys: check `bao status` on {{ $labels.ip }}
      /ui/d/vault-overview?var-cls={{ $labels.cls }}

# not exactly one active member observed: kms outage for cache misses & restarts
- alert: VaultNoLeader
  expr: vault:cls:active != 1
  for: 30s
  labels: { level: 0, severity: CRIT, category: vault }
  annotations:
    summary: "CRIT VaultNoLeader: {{ $labels.cls }} {{ $value }}"
    description: |
      vault:cls:active[cls={{ $labels.cls }}] = {{ $value }} != 1
      /ui/d/vault-overview?from=now-5m&to=now&var-cls={{ $labels.cls }}

# audit device rejects writes: openbao rejects requests, check disk
- alert: VaultAuditFailure
  expr: vault:ins:audit_failure_5m > 0
  for: 1m
  labels: { level: 0, severity: CRIT, category: vault }
  annotations:
    summary: "CRIT VaultAuditFailure: {{ $labels.cls }} {{ $labels.ins }}"
    description: |
      vault:ins:audit_failure_5m[ins={{ $labels.ins }}] = {{ $value | printf "%.0f" }} > 0
      requests are rejected while the audit log can not be written, check disk on {{ $labels.ip }}
      /ui/d/vault-overview?var-cls={{ $labels.cls }}

# production cluster (3+ members) can not survive another member failure
- alert: VaultNoFailureTolerance
  expr: >-
    (vault:cls:failure_tolerance < 1)
    and on (job,cls) (count by (job,cls) (vault_up) >= 3)
  for: 2m
  labels: { level: 1, severity: WARN, category: vault }
  annotations:
    summary: "WARN VaultNoFailureTolerance: {{ $labels.cls }} {{ $value }}"
    description: |
      vault:cls:failure_tolerance[cls={{ $labels.cls }}] = {{ $value }} < 1
      losing one more member loses quorum
      /ui/d/vault-overview?var-cls={{ $labels.cls }}

# no successful local snapshot on the member for 26h (or never)
- alert: VaultBackupStale
  expr: time() - (vault:ins:backup_time or vault_up * 0) > 26 * 3600
  for: 5m
  labels: { level: 1, severity: WARN, category: vault }
  annotations:
    summary: "WARN VaultBackupStale {{ $labels.ins }}@{{ $labels.instance }}"
    description: |
      last successful snapshot of {{ $labels.ins }} is {{ $value | humanizeDuration }} ago (or never)
      check `journalctl -t vault-backup` and node_exporter on {{ $labels.ip }}
      /ui/d/vault-overview?var-cls={{ $labels.cls }}
```

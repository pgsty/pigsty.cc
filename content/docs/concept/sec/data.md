---
title: 数据安全
weight: 235
description: 使用校验和、备份与 PITR、加密和审计日志保护 PostgreSQL 数据的完整性、可恢复性、保密性与可追溯性。
icon: fa-solid fa-database
module: [PIGSTY, PGSQL]
categories: [概念]
---

[**网络边界**](/docs/concept/sec/level#网络边界)、[**身份认证**](/docs/concept/sec/auth) 和 [**权限控制**](/docs/concept/sec/ac) 用于降低事件发生的概率；当硬件损坏、口令泄露或误操作已经发生时，还需要依靠数据层机制控制影响并完成恢复。

数据安全要回答四个问题：数据是 **完整** 的吗？丢了能 **恢复** 吗？被拿走了会 **泄密** 吗？发生了什么能 **查清** 吗？


---------------------

## 完整性

磁盘坏块、内存位翻转、存储固件缺陷，都可能造成 **静默数据损坏**：数据坏了，但没有任何报错。
Pigsty 默认启用页级数据校验和（[`pg_checksum`](/docs/pgsql/param#pg_checksum)：`true`），
集群初始化时以 `data-checksums` 建库，PostgreSQL 会在页面写入时计算校验和，并在读取时检查页面损坏。

页校验和主要发现存储介质、I/O 路径或写入后发生的页面损坏，不能检测所有内存错误、逻辑错误或应用写入的错误数据，也不能替代备份。

[**CRIT 参数模板**](/docs/pgsql/template/crit) 更进一步：校验和强制启用，不受参数影响；
同时启用 [**严格同步复制**](/docs/concept/ha/rpo)（`synchronous_mode_strict`），在没有可用同步副本时阻塞需要同步确认的写入。
该模式以不丢失已确认事务为目标，但仍依赖客户端没有降低 `synchronous_commit`、同步副本正常参与提交，以及故障切换只选择包含所需 WAL 的节点。RPO 需要通过目标拓扑上的故障演练验证。


---------------------

## 可恢复性

副本主要处理节点故障，备份则处理误删除、逻辑错误、集群损坏和更大范围的灾难。
[**高可用**](/docs/concept/ha/) 可以缩短主库故障造成的中断，但如果有人误删了数据，复制也会把误操作同步到其他副本。备份因此无可替代。

Pigsty 默认启用 [**pgBackRest**](/docs/concept/arch/pgsql#pgbackrest)（[`pgbackrest_enabled`](/docs/pgsql/param#pgbackrest_enabled)）：
基础备份加上持续归档的 WAL，构成 [**时间点恢复**](/docs/concept/pitr/)（PITR）能力，可以将集群恢复到备份与 WAL 保留窗口内的目标时刻。

备份仓库由 [`pgbackrest_method`](/docs/pgsql/param#pgbackrest_method) 选择：

| 仓库          | 位置                                               | 默认保留策略     | 加密          |
|:------------|:-------------------------------------------------|:-----------|:------------|
| `local`（默认） | 本地 `/pg/backup` 目录                               | 最近 2 份全量备份 | 无           |
| `minio`     | [**MinIO**](/docs/concept/model/minio) 或 S3 对象存储 | 14 天       | AES-256-CBC |
{.full-width}

对于防误删场景，还有两项辅助机制：

- [**延迟从库**](/docs/pgsql/config/cluster#延迟集群)：为关键集群声明一个 `pg_delay: 1h` 的延迟副本。在错误操作尚未回放前，可以暂停复制并提取数据。延迟副本最终仍会追上主库，不能代替备份。
- **移除保护**：[`pg_safeguard`](/docs/pgsql/param#pg_safeguard) 与 [`etcd_safeguard`](/docs/etcd/param#etcd_safeguard) 开启后，对应的移除剧本会拒绝执行，降低误删集群的风险。

备份的存在不等于恢复的能力。恢复演练应当成为例行工作：原理与决策见 [**时间点恢复**](/docs/concept/pitr/)，配置与操作见 [**PGSQL 备份恢复**](/docs/pgsql/backup/)。


---------------------

## 保密性

静态数据的保密性分三层展开：

**备份加密**。MinIO 备份仓库默认启用 AES-256-CBC 加密，但默认加密口令（`pgBackRest`）是公开的，生产环境必须修改。
[**`ha/safe`**](/docs/conf/safe) 模板按集群名称区分加密口令：

```yaml
pgbackrest_repo:
  minio:
    cipher_type: aes-256-cbc
    cipher_pass: 'pgBR.${pg_cluster}'   # 示例值，部署前必须替换
```

`pgBR.${pg_cluster}` 是可预测的示例值，`configure -g` 也不会替换它。生产环境应使用独立随机口令，并与备份分开保存；口令丢失会导致备份无法恢复。

本地备份仓库默认不加密。加密可以降低备份文件被单独复制或介质被盗时的泄露风险，但如果密钥与备份位于同一主机，保护效果仍会受到限制。

**传输加密**。备份上传 MinIO 走 HTTPS，PostgreSQL 客户端与流复制可以通过 HBA 强制 SSL。客户端还应验证服务端证书，详见 [**加密通信**](/docs/concept/sec/ca#客户端验证服务端)。

**静态加密**。PostgreSQL 上游内核目前没有通用的内置透明数据加密（TDE），Pigsty 提供两条现实路径：
使用 Percona PostgreSQL 内核的 `pg_tde` 扩展实现表级透明加密（参见 [**pgtde 配置模板**](/docs/conf/pgtde)）；
或使用 `pgsodium`、`pgcrypto`、`anonymizer` 等 [**安全扩展**](/ext/cate/sec/) 在列级实现加密与脱敏 —— safe 模板已预装这一类扩展。
此外，全盘加密（LUKS、dm-crypt）在操作系统层解决介质被盗问题，与数据库层方案互补。


---------------------

## 审计与追溯

出了问题，要能回答“谁在什么时候做了什么”。Pigsty 的日志审计分层递进：

**默认基线**：所有 DDL 语句被记录（`log_statement: ddl`），执行超过 100ms 的查询被记录（`log_min_duration_statement: 100`），
PostgreSQL 18 及以上版本还会记录连接授权事件。

**CRIT 模板**：记录连接与断开事件（`log_connections` 与 `log_disconnections`）；PostgreSQL 18 还会区分连接接收、认证与授权阶段。

**[pgaudit 扩展](/ext/e/pgaudit/)**：需要语句级的细粒度审计（对象级读写、按角色审计）时，安装 `pgaudit` 并加入 [`pg_libs`](/docs/pgsql/param#pg_libs) 预加载。
safe 模板已预装该扩展，加载与审计策略需按需求显式声明。

启用 INFRA 日志组件并完成 [**Vector**](/docs/concept/arch/pgsql#vector) 配置后，PostgreSQL 日志会汇入 [**VictoriaLogs**](/docs/concept/arch/infra#victorialogs) 集中存储（默认保留 15 天，可按合规要求调整）。
日志和指标为安全事件的检索、告警与回溯提供输入，但事件判定、响应和证据保全仍需要配套流程。


---------------------

## 接下来

- ⏰ [**备份恢复**](/docs/concept/pitr/)：PITR 的原理与实践
- ♾️ [**高可用**](/docs/concept/ha/)：副本与备份的双层兜底
- ✅ [**合规实践**](/docs/concept/sec/compliance)：审计日志作为合规证据

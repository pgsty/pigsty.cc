---
title: 备份恢复
weight: 1600
description: 配置备份策略与备份仓库，管理备份，执行时间点恢复：pgBackRest 引擎与 Pigsty 封装层的完整实操手册。
icon: fa-solid fa-clock-rotate-left
categories: [任务]
---

Pigsty 使用 [**pgBackRest**](/docs/pgbackrest/) 管理 PostgreSQL 备份 —— 这可能是 PostgreSQL 生态中最强大的开源备份工具，
支持增量备份、并行处理、加密、[**MinIO**](/docs/minio)/S3 对象存储等众多特性。
每个 [**PGSQL**](/docs/pgsql) 集群默认都预配置了备份与 WAL 归档，开箱即用。

本章是备份恢复的 **实操手册**：配置方法、管理命令、恢复操作与演练教程。
设计理念与心智模型（为什么、如何权衡）请参阅概念层文档 [**时间点恢复**](/docs/concept/pitr/)。

所有的备份恢复操作，最终都会落实为 pgBackRest 命令。Pigsty 在它之上提供了三层封装，按需选用：

| 层次 | 接口 | 形态 | 适用场景 |
|:---|:---|:---|:---|
| 集群编排 | [**`pg_pitr`**](/docs/pgsql/backup/restore/#pitr-参数定义) 参数 + `pgsql-pitr.yml` 剧本 | Ansible 剧本 | 生产集群恢复：编排 HA、etcd 与多节点 |
| 实例编排 | [**`pig pitr`**](/docs/pig/pitr) | 命令行工具 | 单节点恢复：在数据库节点上直接编排执行 |
| 命令原语 | [**`pig pb`**](/docs/pig/pb) / `pb` 别名 / `pg-backup` 脚本 | pgBackRest 封装 | 备份、查询、清理，以及非托管实例的裸恢复 |
| 底层引擎 | [**`pgbackrest`**](/docs/pgbackrest/) | 原生命令 | 一切封装的最终执行者 |
{.full-width}

| 章节 | 内容 |
|:---|:---|
| [**机制**](/docs/pgsql/backup/mechanism) | pgBackRest 核心概念（stanza / 仓库 / 保留 / 时间线）与 Pigsty 的封装映射 |
| [**策略**](/docs/pgsql/backup/policy) | 设计备份策略：调度计划、恢复窗口与磁盘空间规划 |
| [**仓库**](/docs/pgsql/backup/repository) | 配置备份仓库：本地、MinIO、S3，加密、版本控制与锁定 |
| [**管理**](/docs/pgsql/backup/admin) | 备份管理命令手册：启停、手动备份、查看、清理、Stanza 管理 |
| [**恢复**](/docs/pgsql/backup/restore) | 执行时间点恢复：恢复目标、分步执行、参数参考 |
| [**克隆**](/docs/pgsql/backup/cluster) | 用 PITR 克隆数据库集群：找回数据、恢复演练 |
| [**示例**](/docs/pgsql/tutorial/pitr) | 沙箱教程：使用 pgBackRest 原语手工执行恢复 |
{.full-width}


{{% alert color="warning" title="免责声明" %}}

> Pigsty 尽最大努力提供可靠的 PITR 解决方案，但我们不对 PITR 操作导致的数据丢失承担任何责任，使用需自担风险。如需专业支持，请考虑我们的 [专业服务](/docs/about/service)。

{{% /alert %}}


--------

## 快速上手

1. [**设计备份策略**](/docs/pgsql/backup/policy)：用 `pg_crontab` 声明定时备份计划，用 `pgbackrest_repo` 选择备份仓库
2. [**管理备份**](/docs/pgsql/backup/admin)：用 `pg-backup` 手动备份，用 `pb info` 查看备份状态
3. [**执行恢复**](/docs/pgsql/backup/restore)：用 `pg_pitr` 参数声明恢复目标，运行 `pgsql-pitr.yml` 剧本

```yaml title="每天凌晨1点全量备份"
pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ]
```

```bash title="恢复到指定时间点"
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": { "time": "2025-07-13 10:00:00+00", "action": "promote" }}'
```

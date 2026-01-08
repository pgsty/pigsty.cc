---
title: 备份恢复
weight: 1600
description: 时间点恢复（PITR）备份与恢复
icon: fa-solid fa-clock-rotate-left
categories: [任务, 参考]
---

Pigsty 使用 [pgBackRest](https://pgbackrest.org/) 管理 PostgreSQL 备份，这可能是生态系统中最强大的开源备份工具。
它支持增量/并行备份与恢复、加密、[MinIO](/docs/minio)/S3 等众多特性。Pigsty 默认为每个 [PGSQL](/docs/pgsql) 集群预配置了备份功能。

| 章节                        | 内容                                   |
|---------------------------|--------------------------------------|
| [机制](mechanism)           | 备份脚本、定时任务、pgbackrest、仓库与管理           |
| [策略](policy)              | 备份策略、磁盘规划、恢复窗口权衡                     |
| [仓库](repository)          | 配置备份仓库：本地、MinIO、S3                   |
| [管理](admin)               | 常用备份管理命令                             |
| [恢复](restore)             | 使用剧本恢复到特定时间点                         |
| [示例](example)             | 沙箱示例：手工执行恢复操作                        |


{{% alert color="warning" title="免责声明" %}}

> Pigsty 尽最大努力提供可靠的 PITR 解决方案，但我们不对 PITR 操作导致的数据丢失承担任何责任，使用需自担风险。如需专业支持，请考虑我们的[专业服务](/docs/about/service)。

{{% /alert %}}


--------

## 快速上手

1. [备份策略](mechanism)：使用 Crontab 调度基础备份
2. [WAL 归档](policy)：持续记录写入活动
3. [恢复与还原](restore)：从备份和 WAL 归档中恢复

```yaml title="每天凌晨1点全量备份"
node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ]
```

```bash title="恢复到指定时间点"
./pgsql-pitr.yml -e '{"pg_pitr": { "time": "2025-07-13 10:00:00+00" }}'
```

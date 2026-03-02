---
title: "常见问题解答"
linkTitle: "常见问题"
weight: 70
description: "关于 pgBackRest 备份、恢复、配置与故障排查的常见问题解答。"
icon: fa-solid fa-circle-question
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： <https://pgbackrest.org/faq.html>

--------

## 简介

常见问题解答旨在针对一些具体问题提供详细说明，这些问题可能未在用户指南、配置参考或命令参考中涵盖。如果在此处找不到您的问题，pgBackRest 在 GitHub 上的 [**Issues List**](https://github.com/pgbackrest/pgbackrest/issues) 也是一个宝贵的资源。


--------

## 遇到"could not find WAL segment"错误该怎么办？

此错误可能有多种原因，包括但不限于：

- `archive_command` 配置错误
- pgBackRest 配置文件配置错误
- 网络或权限问题
- 第三方产品（如 S3、Swift 或 MinIO）配置问题
- 大量 WAL 积压等待归档

建议按以下步骤排查：

- 检查 PostgreSQL 中的 `archive_command` 配置
- 检查每台主机上的 pgBackRest 配置（例如，`pg*` 系列选项应配置在仓库主机上，`repo*` 系列选项应配置在数据库主机上）
- 使用比配置文件（或默认值）更大的 `--archive-timeout` 值运行 `check` 命令，判断 WAL 队列是否需要更长时间才能清空。若系统产生大量 WAL，可考虑配置 [**异步归档**](/docs/pgbackrest/user-guide/#异步归档)。


--------

## 如何手动清除一个备份集？

可以使用 `--set` 选项手动使某个全量备份集过期，详见 [**命令参考：expire**](/docs/pgbackrest/command/expire/)。


--------

## 如何为每个命令独立配置选项？

pgBackRest 支持在配置文件中为每个命令单独设置选项。 [**配置集群 stanza**](/docs/pgbackrest/user-guide/#配置集群-stanza) 章节详细介绍了此功能及选项优先级规则。

例如，可以针对每个命令分别优化 `process-max` 选项：

```ini
[global]
# 未被覆盖时的通用配置
process-max=2

[global:backup]
# 备份时使用更多核心
process-max=4

[global:restore]
# 恢复时使用全部核心
process-max=8

[global:archive-push]
# 归档推送时使用更多核心
process-max=3

[global:archive-get]
# 归档获取时使用较少核心
process-max=1
```


--------

## S3 存储桶名称中可以使用点号（句点）吗？

不可以。RFC-2818 不允许通配符匹配点号（.），因此 S3 存储桶名称不得包含点号。若存储桶名称中含有点号，将会出现类似"unable to find hostname 'my.backup.bucket.s3.amazonaws.com' in certificate common name or subject alternative names"的错误。


--------

## 在哪里可以找到旧版本 pgBackRest 的软件包？

[**apt.postgresql.org**](https://apt.postgresql.org) 仓库维护了一个 [**旧版本归档**](https://apt-archive.postgresql.org)。Debian 也维护了所有测试构建版本的 [**快照**](https://snapshot.debian.org/binary/pgbackrest/)。


--------

## 为什么当 `backup-standby=y` 且备库宕机时，备份会失败？

从备库执行备份，初衷通常是减轻主库的压力。因此，当备库宕机时将备份切换到主库往往适得其反——系统已出现故障，不建议此时再增加主库负担。只要有相对新鲜的备份，备份本身并不紧迫；更重要的是保持 WAL 归档持续进行。等系统恢复稳定后再补做备份，时间仍然充裕。

如果确实需要立即执行备份，可以增加备库数量，或移除 `backup-standby` 配置。也可以在命令行使用 `--no-backup-standby` 临时覆盖，无需修改配置文件即可执行一次性备份。


--------

## 是否应该将仓库部署在备库主机上？

不应该。同时配置了主库和备库时，pgBackRest 的配置文件应保持对称，以便在故障切换后无缝衔接。若配置不对称，故障切换后需要手动修改配置，否则可能引发更多问题。

详情请参阅用户指南中的 [**专用仓库主机**](/docs/pgbackrest/user-guide/#专用仓库主机) 章节。


--------

## 基于时间的时间点恢复（PITR）似乎不起作用，为什么？

使用基于时间的 PITR 时，最常见的错误是忘记选择目标时间点之前的备份集。若未指定 `--set` 选项，pgBackRest 会从 `--target=` 所指定的时间点往前查找可用的备份集；若找不到合适的备份集，则默认使用最新备份。然而，若最新备份的时间晚于目标时间，PostgreSQL 会认为 `--target=` 指定的时间无效而忽略它，最终恢复到可用的最新时间点。

要使用 `--set` 选项，请先运行 `info` 命令查看备份列表，找到停止时间戳早于目标时间的备份集，然后在执行恢复时指定 `--set=BACKUP_LABEL`，其中 `BACKUP_LABEL` 为所选备份集的标签。

详情请参阅用户指南中的 [**时间点恢复**](/docs/pgbackrest/user-guide/#时间点恢复) 章节。


--------

## WAL 归档文件的后缀是什么含义？

该后缀是用于验证文件完整性的 SHA1 校验和，不可省略。


--------

## 不同备份类型（全量、差异、增量）的恢复时间是否有差异？

各种备份类型所需的恢复时间相同。恢复操作依据清单文件（manifest）检索文件，对于增量备份或差异备份，该清单可能引用之前备份中的文件。尽管*创建*备份所需时间因类型而异，但恢复时间主要取决于数据库大小（在磁盘 I/O、网络 I/O 等条件相同的情况下）。


--------

## 如何将备份导出到网络隔离的环境中使用？

pgBackRest 不仅使用仓库存储备份和 WAL 归档，还依赖仓库维护压缩、加密、文件捆绑等功能所需的关键元数据。因此，除非满足非常严格且特定的条件，否则单纯复制备份文件和部分 WAL 文件通常行不通。

如果目的是创建一个可转移的自包含数据库副本（例如通过 USB 传输），可以采用如下变通方法：使用启用了 [`--archive-copy`](/docs/pgbackrest/command/backup/#归档复制选项archive-copy) 选项的 `backup` 命令，确保所需的 WAL 段随备份一同存储；然后使用 [`--type=none`](/docs/pgbackrest/command/restore/#类型选项type) 配合 `--pg1-path=/your/target/path` 执行恢复。这将生成一个已恢复的 PostgreSQL 数据目录，所有必要的 WAL 文件已就位于 `pg_wal` 中，效果类似于 `pg_basebackup` 的输出结果。

之后可将该目录复制到另一台系统，PostgreSQL 无需访问 pgBackRest 仓库即可从中启动。

请注意，从此备份恢复不会产生时间线切换，这意味着新集群不应向导出源所在的原始仓库推送 WAL。若新集群处于网络隔离环境中，这一点通常不成问题。

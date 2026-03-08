---
title: "命令参考"
linkTitle: "命令参考"
weight: 40
description: "pgBackRest 命令参考手册，包含备份、恢复、归档及管理操作的全部选项。"
icon: fa-solid fa-terminal
sidebar_expanded: true
module: [PGBACKREST]
categories: [参考]
---

> 原始页面： <https://pgbackrest.org/command.html>

## 简介

pgBackRest 通过命令来执行各项功能。本文档对每个命令的选项进行了详尽列举——即每个适用于某命令的选项都会随该命令一并列出，即便该选项同样适用于其他命令。所有可在 `pgbackrest.conf` 中配置的选项均包含在内。

在 `pgbackrest.conf` 中配置的非布尔型选项，可在命令行上使用 `reset-` 前缀将其重置为默认值。这一功能在直接于仓库主机上执行恢复时很有用。通常情况下，pgBackRest 检测到数据库主机是远程主机后会报错，因为恢复操作无法远程执行。在命令行添加 `--reset-pg1-host` 后，pgBackRest 将忽略远程数据库主机并在本地执行恢复。此时可能还需要传入新的 `--pg1-path`，将恢复操作强制指向特定路径，而非使用数据库主机上的原有路径。

在命令行上，可使用 `no-` 前缀将布尔型选项设置为 `false`。

任何选项均可通过环境变量设置，方法是加上 `PGBACKREST_` 前缀，将选项名称全部大写，并将 `-` 替换为 `_`，例如 `pg1-path` 对应 `PGBACKREST_PG1_PATH`，`stanza` 对应 `PGBACKREST_STANZA`。布尔型选项的表示方式与配置文件中相同，例如 `PGBACKREST_COMPRESS="n"`，且不支持 `reset-*` 变体。可在命令行或配置文件中多次指定的选项，可通过冒号分隔多个值来设置，例如 `PGBACKREST_DB_INCLUDE="db1:db2"`。

命令行选项优先于环境变量选项，环境变量选项优先于配置文件选项。

关于选项类型的说明，请参阅 [**配置简介**](/docs/pgbackrest/configuration/#简介)。

## 命令列表

| 命令 | 简介 |
|------|------|
| [**`annotate`**](/docs/pgbackrest/command/annotate/) | 在备份创建后，添加、修改或删除备份注解。 |
| [**`archive-get`**](/docs/pgbackrest/command/archive-get/) | 获取已归档的 WAL 段，用于恢复、PITR 或副本恢复。 |
| [**`archive-push`**](/docs/pgbackrest/command/archive-push/) | 接收来自 PostgreSQL 的 WAL 段并推送到已配置的仓库。 |
| [**`backup`**](/docs/pgbackrest/command/backup/) | 将备份创建到目标仓库（默认为优先级最高的仓库）。 |
| [**`check`**](/docs/pgbackrest/command/check/) | 验证 stanza 备份/归档配置及 WAL 归档健康状态。 |
| [**`expire`**](/docs/pgbackrest/command/expire/) | 根据已配置的保留策略，过期备份和已归档的 WAL。 |
| [**`help`**](/docs/pgbackrest/command/help/) | 在通用、命令或选项级别显示帮助信息。 |
| [**`info`**](/docs/pgbackrest/command/info/) | 以文本或 JSON 格式显示 stanza 和备份的状态/元数据。 |
| [**`repo-get`**](/docs/pgbackrest/command/repo-get/) | 读取仓库文件（类似 `cat`），用于管理、排查和测试。 |
| [**`repo-ls`**](/docs/pgbackrest/command/repo-ls/) | 列出仓库文件/路径（类似 `ls`），用于管理、排查和测试。 |
| [**`restore`**](/docs/pgbackrest/command/restore/) | 从备份恢复（默认为最新备份），支持可选的时间点恢复。 |
| [**`server`**](/docs/pgbackrest/command/server/) | 运行 pgBackRest TLS 服务器，实现无需 SSH 的远程主机访问。 |
| [**`server-ping`**](/docs/pgbackrest/command/server-ping/) | 向 pgBackRest TLS 服务器发送 ping，验证其是否正在接受连接。 |
| [**`stanza-create`**](/docs/pgbackrest/command/stanza-create/) | 在所有已配置的仓库中创建 stanza 元数据。 |
| [**`stanza-delete`**](/docs/pgbackrest/command/stanza-delete/) | 永久删除某个 stanza 的所有备份和归档。 |
| [**`stanza-upgrade`**](/docs/pgbackrest/command/stanza-upgrade/) | 在 PostgreSQL 主版本升级后，升级 stanza 元数据。 |
| [**`start`**](/docs/pgbackrest/command/start/) | 在执行过 `stop` 命令后，重新允许 pgBackRest 进程运行。 |
| [**`stop`**](/docs/pgbackrest/command/stop/) | 阻止新的 pgBackRest 进程启动，并可选择强制停止正在运行的进程。 |
| [**`verify`**](/docs/pgbackrest/command/verify/) | 验证仓库中的备份和归档数据是否有效。 |
| [**`version`**](/docs/pgbackrest/command/version/) | 显示已安装的 pgBackRest 版本。 |
{.full-width}

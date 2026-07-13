---
title: 管理命令
weight: 1704
description: 备份管理命令手册：启用与移除备份，手动备份，查看与清理，Stanza 管理，日志排查，以及替代备份工具。
icon: fa-solid fa-terminal
categories: [任务]
---

备份管理命令应以数据库超级用户（[**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu)，默认 `postgres`）身份在数据库节点上执行。
您可以按习惯选择三种等价的入口：

- **`pig pb`**：[**pig 命令行工具**](/docs/pig/pb) 的封装 —— 自动检测 stanza、自动切换 DBSU 身份、带安全检查，**推荐使用**
- **`pb`**：登录 shell 的别名函数，自动填充 `--stanza` 后转发给 pgbackrest
- **`pgbackrest`**：原生命令，完整选项参阅 [**pgBackRest 命令参考**](/docs/pgbackrest/command/)


--------

## 命令一览

| pig 命令                           |  别名  | 对应 pgbackrest 命令                                                | 说明                                                                      |
|:---------------------------------|:----:|:----------------------------------------------------------------|:------------------------------------------------------------------------|
| `pig pb info`                    | `i`  | [**`info`**](/docs/pgbackrest/command/info)                     | 查看备份与归档状态                                                               |
| `pig pb list`                    | `ls` | —                                                               | 列出仓库中的 stanza 与备份                                                       |
| `pig pb backup [full/diff/incr]` | `b`  | [**`backup`**](/docs/pgbackrest/command/backup)                 | 执行备份（自动检查主库角色）                                                          |
| `pig pb restore`                 | `r`  | [**`restore`**](/docs/pgbackrest/command/restore)               | 恢复（显示计划并确认，详见 [**恢复操作**](/docs/pgsql/backup/restore/#原语pig-pb-restore)） |
| `pig pb expire`                  | `e`  | [**`expire`**](/docs/pgbackrest/command/expire)                 | 按保留策略清理过期备份（`--plan` 预览）                                                |
| `pig pb create`                  | `c`  | [**`stanza-create`**](/docs/pgbackrest/command/stanza-create)   | 创建 stanza                                                               |
| `pig pb upgrade`                 | `u`  | [**`stanza-upgrade`**](/docs/pgbackrest/command/stanza-upgrade) | 升级 stanza（版本升级或克隆善后）                                                    |
| `pig pb delete`                  | `d`  | [**`stanza-delete`**](/docs/pgbackrest/command/stanza-delete)   | 删除 stanza 及其全部备份                                                        |
| `pig pb check`                   | `ck` | [**`check`**](/docs/pgbackrest/command/check)                   | 校验备份配置与归档链路                                                             |
| `pig pb start`                   | `up` | [**`start`**](/docs/pgbackrest/command/start)                   | 恢复 pgbackrest 操作                                                        |
| `pig pb stop`                    | `dw` | [**`stop`**](/docs/pgbackrest/command/stop)                     | 暂停 pgbackrest 操作                                                        |
| `pig pb log [list/show/tail]`    | `l`  | —                                                               | 查看 pgbackrest 日志                                                        |
{.full-width}


--------

## 启用备份

如果集群创建时 [**`pgbackrest_enabled`**](/docs/pgsql/param/#pgbackrest_enabled) 为 `true`（默认），备份已自动启用。
若创建时禁用了备份，或修改了仓库配置，可用 `pg_backup` 子任务补充配置：

```bash
./pgsql.yml -t pg_backup -l pg-meta   # 配置 pgbackrest，创建 stanza
```

集群初始化后 Pigsty 会自动执行一次初始全量备份（标记文件 `/etc/pgbackrest/initial.done`）；
定时备份计划通过 [**`pg_crontab`**](/docs/pgsql/param#pg_crontab) 声明，详见 [**备份策略**](/docs/pgsql/backup/policy/)。


--------

## 移除备份

移除主实例（[**`pg_role`**](/docs/pgsql/param/#pg_role) = `primary`）时，Pigsty 默认一并删除该集群的备份 stanza：

```bash
./pgsql-rm.yml                          # 移除集群（含备份）
./pgsql-rm.yml -e pg_rm_backup=false    # 移除集群，但保留备份
./pgsql-rm.yml -t pg_backup             # 仅删除备份，保留集群
```

使用 [**`pg_rm_backup`**](/docs/pgsql/param/#pg_rm_backup)（设为 `false`）保留备份，使用 `pg_backup` 子任务只删备份。
如果备份仓库启用了 [**对象锁定**](/docs/pgsql/backup/repository/#仓库锁定)，删除操作将失败 —— 这正是锁定的设计目的。

{{% alert color="warning" title="备份删除" %}}
删除备份可能导致永久性数据丢失，这是一个危险操作，请务必谨慎。
{{% /alert %}}


--------

## 手动备份

crontab 之外，随时可以手动触发备份。`pg-backup` 脚本与 `pig pb backup` 都带主库角色检查，在从库上执行会直接退出，不会产生错误的备份：

```bash
pg-backup            # 增量备份（仓库中无全量备份时自动升级为全量）
pg-backup full       # 全量备份
pg-backup diff       # 差异备份（相对最近一次全量）
pg-backup incr       # 增量备份（相对最近一次任意备份）

pig pb backup full   # 等价：pig 封装，自动检测 stanza 与 DBSU
```

备份期间会显著占用磁盘 I/O 与网络带宽（并行度已限制在 2～4 进程），建议安排在业务低峰执行。


--------

## 查看备份

`pb info` 列出仓库中当前 stanza 的备份与 WAL 归档状态：

```bash
pb info          # = pgbackrest --stanza=pg-meta info
pig pb info      # 等价
pig pb list      # 列出仓库中所有 stanza
```

输出解读的关键是 [**备份标签**](/docs/pgsql/backup/mechanism/#备份链与备份标签)：
`20250715-013657F` 为全量备份（`F`），`..._20250715-013724D` 为差异备份（`D`），`..._20250715-013730I` 为增量备份（`I`）——
下划线前的部分标识备份链所依附的全量备份。`wal archive min/max` 显示归档的连续范围，
它与最早的全量备份共同决定了 [**恢复窗口**](/docs/concept/pitr/mechanism/#恢复窗口)。

监控系统同样提供备份状态的持续观测：`pgbackrest_exporter`（端口 `9854`）导出的
[**指标**](/docs/pgbackrest/metric) 覆盖最近备份时间、类型、大小与错误状态，可直接用于告警。


--------

## 清理过期备份

保留策略默认在每次备份后自动执行（`expire-auto`）。手动触发或预览清理计划：

```bash
pig pb expire --plan    # 预览将被清理的备份（dry-run，不实际删除）
pig pb expire           # 按保留策略执行清理
```


--------

## Stanza 管理

[**Stanza**](/docs/pgsql/backup/mechanism/#stanza集群的备份身份) 记录集群的备份身份（system-id 与主版本），
以下场景需要手动管理：

```bash
pig pb create    # 创建 stanza：新仓库初始化（Pigsty 集群初始化时自动执行）
pig pb upgrade   # 升级 stanza：PostgreSQL 大版本升级后，或克隆恢复出新集群后
pig pb delete    # 删除 stanza：连同其所有备份与归档一并删除，危险操作！
```

最常见的手动场景是 [**克隆集群的善后**](/docs/pgsql/backup/cluster/#克隆善后)：
从其他集群的备份恢复出新集群后，stanza 中记录的 system-id 与新集群不符，
必须执行 `stanza-upgrade` 之后，新集群的备份才能写入仓库。


--------

## 检查与启停

```bash
pig pb check     # 端到端校验：配置、归档推送、仓库可达性
pig pb stop      # 暂停 pgbackrest 操作（维护窗口，阻止新备份/归档启动）
pig pb start     # 恢复 pgbackrest 操作
```

`check` 命令会实际推送一个 WAL 段并确认其到达仓库，是排查"归档不工作"问题的第一步。


--------

## 查看日志

```bash
pig pb log           # 列出日志文件
pig pb log tail      # 跟踪最新日志
ls /pg/log/pgbackrest/   # 日志目录：备份、归档、恢复各有独立日志文件
```

PITR 过程中 PostgreSQL 的恢复日志位于 `/pg/tmp/recovery.log`。


--------

## 替代备份工具

### pg-basebackup

Pigsty 另备有不依赖 pgbackrest 的独立备份脚本 `/pg/bin/pg-basebackup`，
它使用原生 `pg_basebackup` 生成单文件物理备份（`lz4` 压缩 tarball），默认写入 `/pg/backup`。
适合在不便使用备份仓库时快速留存一份物理副本：

```bash
pg-basebackup                        # 生成 /pg/backup/backup_<tag>_<date>.tar.lz4
pg-basebackup --dst /tmp --file backup.tar.lz4   # 指定输出位置与文件名

mkdir -p /tmp/data                   # 解压提取
cat /pg/backup/backup_pg-meta_20250713.tar.lz4 | unlz4 -d -c | tar -xC /tmp/data
```

{{% alert color="warning" title="加密选项为遗留实现" %}}
`pg-basebackup -e` 使用 OpenSSL **RC4** 加密 —— 这是一个已被淘汰的弱加密算法，仅作混淆用途，
不应作为机密性保障。需要加密备份时，请使用 pgbackrest 仓库的 AES-256 加密（`cipher_type: aes-256-cbc`）。
{{% /alert %}}

### 逻辑备份

`pg_dump` 生成的逻辑备份 **不能** 用于 PITR，但它是跨大版本迁移、导出部分数据、长期归档快照的正确工具。
物理备份与逻辑备份互为补充，严肃的生产环境通常两者兼备。这是 PostgreSQL 自带的工具，请参阅 [官方文档](https://pg.center/docs/18/backup-dump.html)

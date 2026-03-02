---
title: "备份命令（backup）"
linkTitle: "backup"
weight: 40
description: "pgBackRest `backup` 命令的选项与行为参考。"
icon: fa-solid fa-box-archive
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： [pgBackRest Command Docs: backup](https://pgbackrest.org/command.html#command-backup)

配置多个仓库时，pgBackRest 默认备份到优先级最高的仓库（如 `repo1`），除非通过 `--repo` 选项明确指定目标仓库。

pgBackRest 本身不内置调度器，建议通过 cron 或其他调度机制触发备份。

详情与示例请参见 [**执行备份**](/docs/pgbackrest/user-guide/#执行备份)。

## 命令选项

### 备份注解选项（`--annotation`）

为备份附加用户自定义的键值对注解。

可为备份附加任意键值对信息，此选项可多次使用以添加多个注解。

通过 `--set` 指定备份时，`info` 命令的文本输出会显示注解；JSON 输出则始终包含注解信息。

```yaml
example: --annotation=source="Sunday backup for website database"
```

### 归档检查选项（`--archive-check`）

备份完成前检查 WAL 段是否已写入归档。

此选项验证备份一致性所需的全部 WAL 段都已存在于 WAL 归档中。除非使用了其他归档方法，否则建议保留默认值。

若启用了 `archive-copy`，则必须同时启用此选项。

```yaml
default: y
example: --no-archive-check
```

### 归档复制选项（`--archive-copy`）

将一致性所需的 WAL 段直接复制到备份中。

这是一个相对保守的选项，通过将一致性所需的 WAL 段直接存入备份，防范 WAL 归档损坏。WAL 段仍会写入归档，因此此选项会额外占用存储空间。

使用此选项时，建议 `archive-push` 和 `backup` 命令采用相同的压缩类型（如 `lz4`）。否则，WAL 段需要按备份所用的压缩类型重新压缩，这取决于备份期间产生的 WAL 量，代价可能较高。

恢复时，WAL 段位于 `pg_xlog/pg_wal` 目录中，PostgreSQL 会优先使用这些文件，而不调用 `restore_command`。

若启用 `archive-copy`，则必须同时启用 `archive-check` 选项。

```yaml
default: n
example: --archive-copy
```

### 归档模式检查选项（`--archive-mode-check`）

检查 PostgreSQL 的 `archive_mode` 设置。

此选项默认启用，会禁止使用 PostgreSQL 的 `archive_mode=always` 配置。

从备库推送的 WAL 段与从主库推送的 WAL 段在逻辑上可能相同，但校验和不同。建议禁用多源归档以避免冲突。

注意：

禁用此选项时，务必确保只有一个归档进程通过 `archive-push` 命令向仓库写入数据。

```yaml
default: y
example: --no-archive-mode-check
```

### 归档超时选项（`--archive-timeout`）

归档超时时间。

设置等待每个 WAL 段到达 pgBackRest 归档仓库的最长时间（秒）。`check` 和 `backup` 命令等待备份一致性所需的 WAL 段完成归档时，此超时时间生效。

```yaml
default: 1m
allowed: [100ms, 1d]
example: --archive-timeout=30
```

### 从备库备份选项（`--backup-standby`）

从备库集群执行备份。

从备库备份可降低主库负载。使用此选项时，主库和备库主机都必须已完成配置。

支持以下模式：

- `y` — 必须从备库执行备份。
- `prefer` — 优先从备库备份，备库不可用时转为从主库备份。
- `n` — 仅从主库备份。

```yaml
default: n
example: --backup-standby=y
```

### 页面校验和选项（`--checksum-page`）

验证数据页面校验和。

指示 pgBackRest 在备份集群时验证所有数据页面的校验和。当集群启用了数据页面校验和时，此选项自动开启。

校验和验证失败不会中止备份，而是在日志中（默认也在控制台）输出警告，并将无效页面列表记录到备份的清单文件（manifest）中。

```yaml
example: --no-checksum-page
```

### 路径/文件排除选项（`--exclude`）

从备份中排除指定的路径或文件。

所有排除规则均相对于 `$PGDATA`。若排除规则以 `/` 结尾，则仅排除该目录下的文件，例如 `--exclude=junk/` 会排除 `$PGDATA/junk` 目录中的所有文件，但目录本身会保留。若不以 `/` 结尾，则精确匹配该文件名或追加 `/` 后匹配，例如 `--exclude=junk` 会排除 `$PGDATA/junk` 目录及其所有文件。

**请谨慎使用此功能——极易误排除关键文件，导致备份不一致。务必测试恢复！**

所有被排除的文件都会以 `info` 级别写入日志，并注明排除规则。请仔细审查被排除的文件列表，确认没有意外排除重要内容。

> **注意：** delta 恢复不遵循排除规则。备份时被排除的文件/目录，在 delta 恢复时会被*删除*。

不应使用此选项排除 PostgreSQL 日志。可通过 PostgreSQL 的 `log_directory` 参数将日志目录移到 `PGDATA` 之外，这样还能在恢复后保留日志。

可在命令行或配置文件中指定多个排除规则。

```yaml
example: --exclude=junk/
```

### 自动过期选项（`--expire-auto`）

备份成功完成后自动执行 `expire` 命令。

此选项默认启用。禁用时需谨慎，因为这会导致所有备份和归档无限期保留，可能耗尽仓库空间。禁用后需定期手动运行 `expire` 命令以避免空间不足。

```yaml
default: y
example: --expire-auto
```

### 强制选项（`--force`）

强制执行离线备份。

与 `--no-start-stop` 配合使用时，即使 pgBackRest 判断 PostgreSQL 正在运行，也会强制执行备份。**此选项风险极高，极可能产生损坏的备份，请极度谨慎使用。**

某些特殊场景下，此类条件下的备份可能仍有价值。例如，服务器崩溃后数据库集群卷只能以只读方式挂载时，即使存在 `postmaster.pid` 文件，也值得做一次备份。此时更好的做法是回退到上一个备份并重放 WAL，但如果某个未完成归档的 WAL 段中包含非常重要的事务，强制备份也是一种选择。

```yaml
default: n
example: --force
```

### 清单保存阈值选项（`--manifest-save-threshold`）

备份过程中清单文件（manifest）的保存阈值。

定义备份期间保存清单文件的频率。保存清单文件非常重要，因为它存储了校验和并使续传功能高效工作。实际使用的阈值取备份大小的 1% 与 `manifest-save-threshold` 中的较大值。

```yaml
default: 1GiB
allowed: [1B, 1TiB]
example: --manifest-save-threshold=8GiB
```

### 在线备份选项（`--online`）

执行在线备份。

指定 `--no-online` 会阻止 pgBackRest 在数据库集群上执行备份启动/停止函数。要使此选项生效，PostgreSQL 必须已关闭，否则 pgBackRest 会报错。

此选项的用途是支持离线备份。`pg_xlog`/`pg_wal` 目录会原样复制，且 `archive-check` 会为该次备份自动禁用。

```yaml
default: y
example: --no-online
```

### 续传选项（`--resume`）

允许续传失败的备份。

定义是否启用续传功能。续传功能可大幅减少同类型备份在上次失败后重新运行所需的时间。在不需要此功能的环境中，可以考虑禁用以降低复杂性。

```yaml
default: y
example: --no-resume
```

### 快速启动选项（`--start-fast`）

强制执行检查点以快速启动备份。

通过向备份启动函数的 `fast` 参数传入 `y` 来强制执行检查点，使备份立即开始。否则备份将等到下一个常规检查点后才开始。

```yaml
default: n
example: --start-fast
```

### 类型选项（`--type`）

备份类型。

支持以下备份类型：

- `full` — 全量备份（full backup），复制所有数据库集群文件，不依赖之前的任何备份。
- `incr` — 增量备份（incremental backup），基于最近一次成功的备份。
- `diff` — 差异备份（differential backup），类似增量备份，但始终基于最近一次全量备份。

```yaml
default: incr
example: --type=full
```

## 通用选项

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

用于复制、压缩、加密等操作的缓冲区大小。实际使用的缓冲区数量取决于具体选项，每个操作可能会占用额外内存，例如 `gz` 压缩可能额外使用 256KiB 内存。

允许值为 `16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```yaml
default: 1MiB
example: --buffer-size=2MiB
```

### pgBackRest 命令选项（`--cmd`）

pgBackRest 命令路径。

pgBackRest 有时需要生成命令字符串，例如 `restore` 命令生成 `restore_command` 配置时。若未提供 `cmd` 选项，则使用当前运行 pgBackRest 进程的命令路径。

注意：

包装 pgBackRest 命令可能导致不可预期的行为，不建议这样做。

```yaml
default: [path of executed pgbackrest binary]
example: --cmd=/var/lib/pgsql/bin/pgbackrest_wrapper.sh
```

### SSH 客户端命令选项（`--cmd-ssh`）

SSH 客户端命令。

当需要使用特定 SSH 客户端，或 `ssh` 命令不在 `$PATH` 中时，可通过此选项指定。

```yaml
default: ssh
example: --cmd-ssh=/usr/bin/ssh
```

### 压缩选项（`--compress`）

启用文件压缩。

备份文件与命令行压缩工具兼容。

此选项现已弃用，请改用 `compress-type` 选项。

```yaml
default: y
example: --no-compress
```

### 压缩级别选项（`--compress-level`）

文件压缩级别。

当 `compress-type` 不等于 `none` 或使用已弃用的 `compress=y` 时，指定文件压缩级别。

```yaml
default (depending on compress-type):
   bz2 - 9
   gz - 6
   lz4 - 1
   zst - 3

allow range (depending on compress-type):
   bz2 - [1, 9]
   gz - [-1, 9]
   lz4 - [-5, 12]
   zst - [-7, 22]

example: --compress-level=9
```

### 网络压缩级别选项（`--compress-level-network`）

网络压缩级别。

当 `compress-type=none` 且命令不在仓库所在主机上运行时，指定网络压缩级别，用于减少网络流量。当 `compress-type` 不等于 `none` 时，此选项会被忽略，转而使用 `compress-level`，以避免文件被压缩两次。

```yaml
default: 1
allowed: [-5, 12]
example: --compress-level-network=1
```

### 压缩类型选项（`--compress-type`）

文件压缩类型。

支持以下压缩类型：

- `none` — 不压缩
- `bz2` — bzip2 压缩格式
- `gz` — gzip 压缩格式
- `lz4` — lz4 压缩格式（并非所有平台都支持）
- `zst` — Zstandard 压缩格式（并非所有平台都支持）

```yaml
default: gz
example: --compress-type=none
```

### 配置文件选项（`--config`）

pgBackRest 配置文件。

使用此选项指定非默认位置的配置文件。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --config=/conf/pgbackrest/pgbackrest.conf
```

### 配置包含路径选项（`--config-include-path`）

附加 pgBackRest 配置文件的路径。

指定路径下扩展名为 `.conf` 的配置文件将与主配置文件拼接，合并为一个完整的配置文件。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --config-include-path=/conf/pgbackrest/conf.d
```

### 配置基础路径选项（`--config-path`）

pgBackRest 配置文件的基础路径。

用于覆盖 `--config` 和 `--config-include-path` 选项的默认基础路径，前提是这两个选项未在命令行中显式指定。

例如，仅传入 `--config-path=/conf/pgbackrest` 时，`--config` 的默认值将变为 `/conf/pgbackrest/pgbackrest.conf`，`--config-include-path` 的默认值将变为 `/conf/pgbackrest/conf.d`。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --config-path=/conf/pgbackrest
```

### 数据库超时选项（`--db-timeout`）

数据库查询超时时间。

设置对数据库执行查询的超时时间（秒）。这包括备份的启动/停止函数，这些函数各自可能耗时较长。因此，除非可以确定这些函数会很快返回（例如设置了 `start-fast=y` 且备份期间集群不会产生大量 WAL 段），否则应将此超时时间设置得较大。

> **注意：** `db-timeout` 的值必须小于 `protocol-timeout` 的值。

```yaml
default: 30m
allowed: [100ms, 7d]
example: --db-timeout=600
```

### Delta 选项（`--delta`）

使用校验和进行恢复或备份。

恢复时，默认情况下 PostgreSQL 数据目录和表空间目录应已存在但为空。此选项启用基于校验和的 delta 恢复。

备份时，此选项使用校验和而非时间戳来判断哪些文件需要复制。

```yaml
default: n
example: --delta
```

### I/O 超时选项（`--io-timeout`）

I/O 超时时间。

连接及读写操作的超时时间（秒）。

注意，整个读写操作不必在此超时时间内完成，但必须有*一定*进展，哪怕只是传输了一个字节。

```yaml
default: 1m
allowed: [100ms, 1h]
example: --io-timeout=120
```

### 锁文件路径选项（`--lock-path`）

锁文件的存储路径。

pgBackRest 使用锁文件防止并发执行相互冲突的操作。

```yaml
default: /tmp/pgbackrest
example: --lock-path=/backup/db/lock
```

### 中性 umask 选项（`--neutral-umask`）

使用中性 umask。

将 umask 设置为 0000，使仓库中创建的文件和目录具有合理的权限。默认目录模式为 0750，文件模式为 0640；锁文件和日志目录的目录模式为 0770，文件模式为 0660。

如需改用执行用户的 umask，可在配置文件中设置 `neutral-umask=n`，或在命令行使用 `--no-neutral-umask`。

```yaml
default: y
example: --no-neutral-umask
```

### 进程优先级选项（`--priority`）

设置进程优先级。

定义内核调度器分配给该进程的优先级（即 niceness 值）。正值降低优先级，负值提升优先级。大多数情况下，进程没有权限提升自身优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### 最大进程数选项（`--process-max`）

压缩/传输使用的最大进程数。

每个进程负责压缩和传输，进程数越多命令运行越快，但不要将 `process-max` 设置得过高，以免影响数据库性能。

```yaml
default: 1
allowed: [1, 999]
example: --process-max=4
```

### 协议超时选项（`--protocol-timeout`）

协议超时时间。

设置本地或远程进程在协议层等待新消息的最长时间（秒），以防止进程无限期地等待。

> **注意：** `protocol-timeout` 的值必须大于 `db-timeout` 的值。

```yaml
default: 31m
allowed: [100ms, 7d]
example: --protocol-timeout=630
```

### 保活选项（`--sck-keep-alive`）

启用保活机制。

在 socket 连接上启用保活消息。

```yaml
default: y
example: --no-sck-keep-alive
```

### Stanza 选项（`--stanza`）

定义 stanza（stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称）。

一个 stanza 包含某个 PostgreSQL 数据库集群的完整配置，定义了集群的位置、备份方式、归档选项等。大多数数据库主机只有一个 PostgreSQL 集群，因此只有一个 stanza；而备份服务器通常为每个需要备份的数据库集群单独配置一个 stanza。

命名 stanza 时，常见做法是以主集群名称命名，但更好的方式是以集群中承载的业务来命名。由于 stanza 名称同时适用于主库和所有副本，选择能反映集群实际功能的名称（如 `app` 或 `dw`）比使用本地集群名称（如 `main` 或 `prod`）更为合适。

```yaml
example: --stanza=main
```

### 保活计数选项（`--tcp-keep-alive-count`）

保活计数。

指定连接被判定为断开之前，允许丢失的 TCP 保活消息数量。

此选项仅在系统支持 `TCP_KEEPCNT` socket 选项时可用。

```yaml
allowed: [1, 32]
example: --tcp-keep-alive-count=3
```

### 保活空闲时间选项（`--tcp-keep-alive-idle`）

保活空闲时间。

指定操作系统在多少秒无网络活动后，应发送 TCP 保活消息。

此选项仅在系统支持 `TCP_KEEPIDLE` socket 选项时可用。

```yaml
allowed: [1, 3600]
example: --tcp-keep-alive-idle=60
```

### 保活间隔选项（`--tcp-keep-alive-interval`）

保活重传间隔时间。

指定未收到确认的 TCP 保活消息多少秒后进行重传。

此选项仅在系统支持 `TCP_KEEPINTVL` socket 选项时可用。

```yaml
allowed: [1, 900]
example: --tcp-keep-alive-interval=30
```

### TLSv1.2 密码套件选项（`--tls-cipher-12`）

允许的 TLSv1.2 密码套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均已加密。默认情况下，到对象存储（如 S3）的连接也经过加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整可接受的密码套件。示例值是合理的选择，除非有特定安全需求。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 密码套件选项（`--tls-cipher-13`）

允许的 TLSv1.3 密码套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均已加密。默认情况下，到对象存储（如 S3）的连接也经过加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整可接受的密码套件。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-13=TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256
```

## 日志选项

### 控制台日志级别选项（`--log-level-console`）

控制台日志级别。

支持以下日志级别：

- `off` — 不记录任何日志（不推荐）
- `error` — 仅记录错误
- `warn` — 记录警告和错误
- `info` — 记录信息、警告和错误
- `detail` — 记录详细信息、信息、警告和错误
- `debug` — 记录调试信息、详细信息、信息、警告和错误
- `trace` — 记录跟踪信息（极详细的调试输出）、调试信息、信息、警告和错误

```yaml
default: warn
example: --log-level-console=error
```

### 文件日志级别选项（`--log-level-file`）

文件日志级别。

支持以下日志级别：

- `off` — 不记录任何日志（不推荐）
- `error` — 仅记录错误
- `warn` — 记录警告和错误
- `info` — 记录信息、警告和错误
- `detail` — 记录详细信息、信息、警告和错误
- `debug` — 记录调试信息、详细信息、信息、警告和错误
- `trace` — 记录跟踪信息（极详细的调试输出）、调试信息、信息、警告和错误

```yaml
default: info
example: --log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

stderr 日志级别。

指定哪些日志级别的内容输出到 `stderr` 而非 `stdout`（`stdout` 由 `log-level-console` 控制）。输出到 `stderr` 的内容不含时间戳和进程信息。

支持以下日志级别：

- `off` — 不记录任何日志（不推荐）
- `error` — 仅记录错误
- `warn` — 记录警告和错误
- `info` — 记录信息、警告和错误
- `detail` — 记录详细信息、信息、警告和错误
- `debug` — 记录调试信息、详细信息、信息、警告和错误
- `trace` — 记录跟踪信息（极详细的调试输出）、调试信息、信息、警告和错误

```yaml
default: off
example: --log-level-stderr=error
```

### 日志路径选项（`--log-path`）

日志文件的存储路径。

pgBackRest 将日志文件存储在此路径下。注意，若 `log-level-file=off`，则无需配置日志路径。

```yaml
default: /var/log/pgbackrest
example: --log-path=/backup/db/log
```

### 子进程日志选项（`--log-subprocess`）

在子进程中启用日志记录。

对该进程创建的所有子进程启用文件日志，日志级别使用 `log-level-file` 指定的级别。

```yaml
default: n
example: --log-subprocess
```

### 日志时间戳选项（`--log-timestamp`）

在日志中启用时间戳。

在控制台和文件日志中启用时间戳。此选项在某些特殊场景（如生成文档）中会被禁用。

```yaml
default: y
example: --no-log-timestamp
```

## 维护者选项

### 页面头检查选项（`--page-header-check`）

检查 PostgreSQL 页面头。

此选项默认启用，会添加页面头检查。

除非必要（例如页面已加密），否则不建议禁用此选项。

```yaml
default: y
example: --no-page-header-check
```

### 强制指定 PostgreSQL 版本选项（`--pg-version-force`）

强制指定 PostgreSQL 版本。

使用指定的 PostgreSQL 版本，而非通过读取 `pg_control` 或 WAL 头自动检测的版本。此选项主要适用于 PostgreSQL 的分支版本或开发版本，因为这些版本的版本号可能与发行版本不同。PostgreSQL 通过 `server_version_num` 报告的版本号必须与强制指定的版本号一致。

警告：

使用此选项时请谨慎，因为 `pg_control` 和 WAL 头仍会按指定版本的预期格式读取，即官方开源 PostgreSQL 版本的格式。如果分支版本或开发版本修改了 pgBackRest 所依赖字段的格式，将导致不可预期的行为。通常，只有当分支版本将所有自定义结构成员添加在标准 PostgreSQL 成员*之后*时，此选项才能按预期工作。

```yaml
example: --pg-version-force=15
```

## 仓库选项

### 设置仓库选项（`--repo`）

指定操作仓库。

指定命令操作的目标仓库。

例如，可用此选项从特定仓库执行恢复，而不是由 pgBackRest 自动选择。

```yaml
allowed: [1, 256]
example: --repo=1
```

### Azure 仓库容器选项（`--repo-azure-container`）

Azure 仓库容器。

用于存储仓库的 Azure 容器。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在容器根目录，但通常建议指定一个前缀路径（如 `/repo`），以便日志和其他 Azure 生成的内容也能存放在该容器中。

```yaml
example: --repo1-azure-container=pg-backup
```

### Azure 仓库密钥类型选项（`--repo-azure-key-type`）

Azure 仓库密钥类型。

支持以下授权类型：

- `shared` — 共享密钥
- `sas` — 共享访问签名
- `auto` — 使用 Azure 托管标识自动授权

```yaml
default: shared
example: --repo1-azure-key-type=sas
```

### Azure 仓库 URI 风格选项（`--repo-azure-uri-style`）

Azure URI 风格。

支持以下 URI 风格：

- `host` — 连接到 `account.endpoint` 主机。
- `path` — 连接到 `endpoint` 主机并在 URI 前添加账户名。

```yaml
default: host
example: --repo1-azure-uri-style=path
```

### 块级增量备份选项（`--repo-block`）

启用块级增量备份（block incremental backup）。

块级备份将文件拆分为可独立备份的块，实现更细粒度的备份。这不仅节省仓库空间，还能提升 delta 恢复性能，因为可以直接获取单个块，而无需从仓库读取整个文件。

> **注意：** 必须先启用 `repo-bundle` 选项，才能启用 `repo-block`。

文件的块大小根据文件大小和使用时间确定。通常，越旧/越大的文件使用越大的块。若文件足够旧，则不会使用块级增量备份。

块级备份在对所有备份类型（包括全量备份）启用时最为高效。这会使全量备份稍大，但后续的差异备份和增量备份可以利用全量备份生成的块映射来节省空间。

```yaml
default: n
example: --repo1-block
```

### 仓库包（bundle）选项（`--repo-bundle`）

在仓库中将文件打包（bundle）存储。

将小文件合并打包存储，以减少写入仓库的文件总数。写入文件数量更少通常效率更高，尤其是在 S3 等对象存储上。此外，零长度文件不会存储（清单文件除外），可节省时间和空间。

```yaml
default: n
example: --repo1-bundle
```

### 仓库包大小限制选项（`--repo-bundle-limit`）

文件包的大小限制。

指定纳入包中的文件大小上限，超过此大小的文件将单独存储。

打包的文件在备份续传时无法复用，因此此选项控制了可续传的文件范围——值越大，可续传的文件越少。

```yaml
default: 2MiB
allowed: [8KiB, 1PiB]
example: --repo1-bundle-limit=10MiB
```

### 仓库包目标大小选项（`--repo-bundle-size`）

文件包的目标大小。

定义单个包中文件的总大小目标。大多数包会小于此值，但部分包可能略超此值，因此不要将此选项设置为文件系统允许的最大值。

通常不建议将此值设置得过高，因为重试时需要重做整个包。

```yaml
default: 20MiB
allowed: [1MiB, 1PiB]
example: --repo1-bundle-size=10MiB
```

### 仓库加密类型选项（`--repo-cipher-type`）

用于加密仓库的加密算法。

支持以下加密类型：

- `none` — 仓库不加密
- `aes-256-cbc` — 使用 256 位密钥的高级加密标准

注意，即使仓库类型（如 S3）本身支持加密，加密也始终在客户端执行。

```yaml
default: none
example: --repo1-cipher-type=aes-256-cbc
```

### GCS 仓库存储桶选项（`--repo-gcs-bucket`）

GCS 仓库存储桶。

用于存储仓库的 GCS 存储桶。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录，但通常建议指定一个前缀路径（如 `/repo`），以便日志和其他 GCS 生成的内容也能存放在该存储桶中。

```yaml
example: --repo1-gcs-bucket=/pg-backup
```

### GCS 仓库端点选项（`--repo-gcs-endpoint`）

GCS 仓库端点。

用于连接存储服务的端点，可修改为使用本地 GCS 服务器或备用端点。

```yaml
default: storage.googleapis.com
example: --repo1-gcs-endpoint=localhost
```

### GCS 仓库密钥类型选项（`--repo-gcs-key-type`）

GCS 仓库密钥类型。

支持以下授权类型：

- `auto` — 使用实例服务账号自动授权。
- `service` — 使用本地存储的服务账号密钥文件。
- `token` — 用于本地测试，例如 `fakegcs`。

当 `repo-gcs-key-type=service` 时，认证令牌续期时会重新加载凭证。

```yaml
default: service
example: --repo1-gcs-key-type=auto
```

### GCS 仓库项目 ID 选项（`--repo-gcs-user-project`）

GCS 项目 ID。

用于确定请求计费的 GCS 项目 ID。

```yaml
example: --repo1-gcs-user-project=my-project
```

### 仓库硬链接选项（`--repo-hardlink`）

在仓库中对备份文件创建硬链接。

为差异备份和增量备份中的文件创建指向其对应全量备份的硬链接，使每个备份在文件系统层面看起来都像一个完整的全量备份。但请注意，修改硬链接文件会影响同一备份集中的所有备份。

```yaml
default: n
example: --repo1-hardlink
```

已弃用名称：hardlink

### 仓库主机选项（`--repo-host`）

远程操作时的仓库主机。

若备份和归档使用本地挂载的文件系统，则无需配置此选项。

```yaml
example: --repo1-host=repo1.domain.com
```

已弃用名称：backup-host

### 仓库主机证书颁发机构文件选项（`--repo-host-ca-file`）

仓库主机的证书颁发机构文件。

连接仓库主机时使用非系统默认的 CA 文件。

```yaml
example: --repo1-host-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

### 仓库主机证书颁发机构路径选项（`--repo-host-ca-path`）

仓库主机的证书颁发机构路径。

连接仓库主机时使用非系统默认的 CA 路径。

```yaml
example: --repo1-host-ca-path=/etc/pki/tls/certs
```

### 仓库主机证书文件选项（`--repo-host-cert-file`）

仓库主机的证书文件。

发送给仓库主机以证明客户端身份。

```yaml
example: --repo1-host-cert-file=/path/to/client.crt
```

### 仓库主机命令选项（`--repo-host-cmd`）

仓库主机上的 pgBackRest 命令路径。

仅当本地主机与仓库主机上的 pgBackRest 命令路径不同时才需要配置。若未定义，仓库主机命令将与本地命令相同。

```yaml
default: [path of executed pgbackrest binary]
example: --repo1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：backup-cmd

### 仓库主机配置文件选项（`--repo-host-config`）

pgBackRest 仓库主机配置文件。

设置仓库主机上配置文件的位置。仅当仓库主机的配置文件位置与本地配置文件位置不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --repo1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：backup-config

### 仓库主机配置包含路径选项（`--repo-host-config-include-path`）

pgBackRest 仓库主机配置包含路径。

设置仓库主机上配置包含路径的位置。仅当仓库主机的配置包含路径与本地配置包含路径不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --repo1-host-config-include-path=/conf/pgbackrest/conf.d
```

### 仓库主机配置路径选项（`--repo-host-config-path`）

pgBackRest 仓库主机配置路径。

设置仓库主机上配置路径的位置。仅当仓库主机的配置路径与本地配置路径不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --repo1-host-config-path=/conf/pgbackrest
```

### 仓库主机密钥文件选项（`--repo-host-key-file`）

仓库主机的密钥文件。

证明客户端证书由其所有者发送。

```yaml
example: --repo1-host-key-file=/path/to/client.key
```

### 仓库主机端口选项（`--repo-host-port`）

设置 `repo-host` 时使用的仓库主机端口。

使用此选项为仓库主机协议指定非默认端口。

> **注意：** 当 `repo-host-type=ssh` 时，`repo-host-port` 没有默认值，实际使用的端口由 `cmd-ssh` 指定的命令配置决定。

```yaml
default (depending on repo-host-type):
   tls - 8432

allowed: [0, 65535]
example: --repo1-host-port=25
```

已弃用名称：backup-ssh-port

### 仓库主机协议类型选项（`--repo-host-type`）

仓库主机协议类型。

支持以下协议类型：

- `ssh` — 安全外壳协议（Secure Shell）。
- `tls` — pgBackRest TLS 服务器。

```yaml
default: ssh
example: --repo1-host-type=tls
```

### 仓库主机用户选项（`--repo-host-user`）

设置 `repo-host` 时使用的仓库主机用户。

定义在仓库主机上执行操作所使用的用户。建议不使用 `postgres` 用户，而改用专用用户（如 `pgbackrest`）。若 PostgreSQL 也运行在仓库主机上，可将 `postgres` 用户加入 `pgbackrest` 组，使其拥有仓库的读权限，同时避免意外损坏仓库内容。

```yaml
default: pgbackrest
example: --repo1-host-user=repo-user
```

已弃用名称：backup-user

### 仓库路径选项（`--repo-path`）

备份和归档的存储路径。

仓库是 pgBackRest 存储备份和归档 WAL 段的位置。

预先估算所需空间可能比较困难。建议先执行若干次备份，记录不同类型备份（全量/增量/差异）的大小，并测量每天产生的 WAL 量，以此对所需空间有一个大致判断。随着数据库的演进，需求也会随时间变化。

```yaml
default: /var/lib/pgbackrest
example: --repo1-path=/backup/db/backrest
```

### 归档保留选项（`--repo-retention-archive`）

连续 WAL 保留的备份数量。

> **注意：** 无论此选项如何配置，确保备份一致性所需的 WAL 段始终会保留到备份过期为止。

若未设置此值且 `repo-retention-full-type` 为 `count`（默认值），则归档过期默认值为 `repo-retention-full`（或 `repo-retention-diff`）对应 `repo-retention-archive-type`（设置为 `full` 或 `diff`）的值，确保 WAL 仅在对应备份过期后才会过期。若 `repo-retention-full-type` 为 `time`，则此值默认为移除早于满足 `repo-retention-full` 设置后保留的最旧全量备份的归档。

若 `repo-retention-archive-type` 设置为 `incr`，则必须设置此选项。在磁盘空间极为紧张时，可结合 `repo-retention-archive-type` 使用此选项激进地清理 WAL 段。但这样做会导致无法从已清理 WAL 的备份执行 PITR，因此**不推荐**。

```yaml
allowed: [1, 9999999]
example: --repo1-retention-archive=2
```

已弃用名称：retention-archive

### 归档保留类型选项（`--repo-retention-archive-type`）

WAL 保留的备份类型。

若设置为 `full`，pgBackRest 将按 `repo-retention-archive` 定义的全量备份数量保留归档日志。若设置为 `diff`（差异备份），则按 `repo-retention-archive` 定义的全量备份和差异备份数量保留归档日志，如果最后一次备份是全量备份，它将被视为差异备份计入 `repo-retention-archive`。若设置为 `incr`（增量备份），则按 `repo-retention-archive` 定义的全量、差异和增量备份数量保留归档日志。建议不要修改此选项的默认值，即仅在过期全量备份的同时过期对应的 WAL。

```yaml
default: full
example: --repo1-retention-archive-type=diff
```

已弃用名称：retention-archive-type

### 差异备份保留选项（`--repo-retention-diff`）

保留的差异备份数量。

差异备份过期时，与之关联的所有增量备份也会一同过期。若未定义，所有差异备份将保留到其所依赖的全量备份过期为止。

注意，计算过期时，全量备份会被纳入差异备份数量的统计，这在大多数情况下会略微减少需要保留的差异备份数量。

```yaml
allowed: [1, 9999999]
example: --repo1-retention-diff=3
```

已弃用名称：retention-diff

### 全量备份保留选项（`--repo-retention-full`）

全量备份的保留数量/时间。

全量备份过期时，与之关联的所有差异备份和增量备份也会一同过期。若未定义此选项，将会发出警告。如果希望无限期保留，可将此选项设置为最大值。

```yaml
allowed: [1, 9999999]
example: --repo1-retention-full=2
```

已弃用名称：retention-full

### 全量备份保留类型选项（`--repo-retention-full-type`）

全量备份的保留类型。

决定 `repo-retention-full` 表示时间周期（天数）还是保留的全量备份数量。

若设置为 `time`，则超过 `repo-retention-full` 天的全量备份将被删除，前提是至少存在一个不早于 `repo-retention-full` 天的备份。例如，若 `repo-retention-full` 为 30（天），且有 2 个全量备份，分别为 25 天前和 35 天前创建，则两个备份均不会过期——因为删除 35 天前的备份将只剩 25 天前的备份，不满足"至少保留一个 30 天以内的备份"的策略要求。早于保留的最旧全量备份的归档 WAL 将自动过期，除非显式设置了 `repo-retention-archive-type` 和 `repo-retention-archive`。

若设置为 `count`，则超过 `repo-retention-full` 数量的全量备份将过期。例如，若 `repo-retention-full` 为 `4` 且第五个全量备份完成，则最旧的全量备份将过期以保持数量为 4。

注意，备份必须成功完成后才会被纳入保留策略的考量。例如，若 `repo-retention-full-type` 为 `count` 且 `repo-retention-full` 为 `2`，则必须有 3 个完整的全量备份，最旧的才会过期。

```yaml
default: count
example: --repo1-retention-full-type=time
```

### 备份历史保留选项（`--repo-retention-history`）

备份历史清单文件的保留天数。

备份完成时，清单文件（manifest）的副本会存储在 `backup.history` 路径下。默认情况下这些文件永不过期，因为它们对数据挖掘（如统计备份和 WAL 增长趋势）很有价值。

通过设置 `repo-retention-history`，可以定义保留备份历史清单文件的天数。未过期的备份始终保留在备份历史中。设置 `repo-retention-history=0` 可仅为未过期的备份保留备份历史。

全量备份历史清单文件过期时，与之关联的所有差异备份和增量备份历史清单文件也会一同过期。

```yaml
allowed: [0, 9999999]
example: --repo1-retention-history=365
```

### S3 仓库存储桶选项（`--repo-s3-bucket`）

S3 仓库存储桶。

用于存储仓库的 S3 存储桶。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录，但通常建议指定一个前缀路径（如 `/repo`），以便日志和其他 AWS 生成的内容也能存放在该存储桶中。

```yaml
example: --repo1-s3-bucket=pg-backup
```

### S3 仓库端点选项（`--repo-s3-endpoint`）

S3 仓库端点。

AWS 端点应与所选区域匹配。

对于自定义或测试配置，可使用 `repo-storage-ca-file`、`repo-storage-ca-path`、`repo-storage-host`、`repo-storage-port` 和 `repo-storage-verify-tls` 等选项。

```yaml
example: --repo1-s3-endpoint=s3.amazonaws.com
```

### S3 仓库密钥类型选项（`--repo-s3-key-type`）

S3 仓库密钥类型。

支持以下类型：

- `shared` — 共享密钥
- `auto` — 自动获取临时凭证
- `web-id` — 自动获取 Web 身份凭证

```yaml
default: shared
example: --repo1-s3-key-type=auto
```

### S3 仓库 KMS 密钥 ID 选项（`--repo-s3-kms-key-id`）

S3 仓库 KMS 密钥。

使用指定的 AWS 密钥管理服务密钥启用 S3 服务端加密。

```yaml
example: --repo1-s3-kms-key-id=bceb4f13-6939-4be3-910d-df54dee817b7
```

### S3 仓库区域选项（`--repo-s3-region`）

S3 仓库区域。

创建存储桶所在的 AWS 区域。

```yaml
example: --repo1-s3-region=us-east-1
```

### S3 仓库请求方付费选项（`--repo-s3-requester-pays`）

S3 仓库请求方付费。

启用 S3 请求方付费功能。

```yaml
default: n
example: --no-repo1-s3-requester-pays
```

### S3 仓库角色选项（`--repo-s3-role`）

S3 仓库角色。

当 `repo-s3-key-type=auto` 时，用于获取临时凭证的 AWS 角色名称（非完整 ARN）。

```yaml
example: --repo1-s3-role=authrole
```

### S3 仓库 URI 风格选项（`--repo-s3-uri-style`）

S3 URI 风格。

支持以下 URI 风格：

- `host` — 连接到 `bucket.endpoint` 主机。
- `path` — 连接到 `endpoint` 主机并在 URI 前添加存储桶名称。

```yaml
default: host
example: --repo1-s3-uri-style=path
```

### SFTP 仓库主机选项（`--repo-sftp-host`）

SFTP 仓库主机。

存放仓库的 SFTP 主机。

```yaml
example: --repo1-sftp-host=sftprepo.domain
```

### SFTP 仓库主机指纹选项（`--repo-sftp-host-fingerprint`）

SFTP 仓库主机指纹。

SFTP 仓库主机指纹的生成方式应与 `repo-sftp-host-key-hash-type` 匹配。通过以下命令生成指纹：`awk '{print $2}' ssh_host_xxx_key.pub | base64 -d | (md5sum or sha1sum) -b`。SSH 主机密钥通常位于 `/etc/ssh` 目录下。

```yaml
example: --repo1-sftp-host-fingerprint=f84e172dfead7aeeeae6c1fdfb5aa8cf
```

### SFTP 主机密钥检查类型选项（`--repo-sftp-host-key-check-type`）

SFTP 主机密钥检查类型。

支持以下 SFTP 主机密钥检查类型：

- `strict` — pgBackRest 不会自动将主机密钥添加到 `~/.ssh/known_hosts` 文件，并拒绝连接到主机密钥已更改或未在已知主机文件中找到的主机。此选项要求用户手动添加所有新主机。
- `accept-new` — pgBackRest 会自动将新主机密钥添加到用户的已知主机文件，但不允许连接到主机密钥已更改的主机。
- `fingerprint` — pgBackRest 将根据 `repo-sftp-host-fingerprint` 选项指定的指纹验证主机密钥。
- `none` — 不执行主机密钥检查。

```yaml
default: strict
example: --repo1-sftp-host-key-check-type=accept-new
```

### SFTP 仓库主机密钥哈希类型选项（`--repo-sftp-host-key-hash-type`）

SFTP 仓库主机密钥哈希类型。

声明在 SSH 启动时用于计算远程系统主机密钥摘要的哈希类型。较新版本的 `libssh2` 除 md5 和 sha1 外，还支持 `sha256`。

```yaml
example: --repo1-sftp-host-key-hash-type=sha256
```

### SFTP 仓库主机端口选项（`--repo-sftp-host-port`）

SFTP 仓库主机端口。

SFTP 仓库主机的端口号。

```yaml
default: 22
allowed: [1, 65535]
example: --repo1-sftp-host-port=22
```

### SFTP 仓库主机用户选项（`--repo-sftp-host-user`）

SFTP 仓库主机用户。

存储仓库的主机上的用户名。

```yaml
example: --repo1-sftp-host-user=pg-backup
```

### SFTP 已知主机文件选项（`--repo-sftp-known-host`）

SFTP 已知主机文件。

身份验证时用于查找 SFTP 主机匹配的已知主机文件。若未指定，pgBackRest 默认依次搜索 `~/.ssh/known_hosts`、`~/.ssh/known_hosts2`、`/etc/ssh/ssh_known_hosts` 和 `/etc/ssh/ssh_known_hosts2`。若配置了一个或多个文件路径，pgBackRest 将在这些文件中搜索匹配项。文件路径必须为完整路径或以波浪号（`~`）开头的路径。可多次传入 `repo-sftp-known-host` 选项以指定多个已知主机文件。使用已知主机文件检查时，不能指定 `repo-sftp-host-fingerprint`。另请参见 `repo-sftp-host-check-type` 选项。

```yaml
example: --repo1-sftp-known-host=/home/postgres/.ssh/known_hosts
```

### SFTP 仓库私钥文件选项（`--repo-sftp-private-key-file`）

SFTP 私钥文件。

用于身份验证的 SFTP 私钥文件。

```yaml
example: --repo1-sftp-private-key-file=~/.ssh/id_ed25519
```

### SFTP 仓库公钥文件选项（`--repo-sftp-public-key-file`）

SFTP 公钥文件。

用于身份验证的 SFTP 公钥文件。若使用 OpenSSL 编译则为可选，若使用其他库编译则为必需。

```yaml
example: --repo1-sftp-public-key-file=~/.ssh/id_ed25519.pub
```

### 仓库存储 CA 文件选项（`--repo-storage-ca-file`）

仓库存储 CA 文件。

为存储（如 S3、Azure）证书使用非系统默认的 CA 文件。

```yaml
example: --repo1-storage-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

已弃用名称：repo-azure-ca-file、repo-s3-ca-file

### 仓库存储 TLS CA 路径选项（`--repo-storage-ca-path`）

仓库存储 CA 路径。

为存储（如 S3、Azure）证书使用非系统默认的 CA 路径。

```yaml
example: --repo1-storage-ca-path=/etc/pki/tls/certs
```

已弃用名称：repo-azure-ca-path、repo-s3-ca-path

### 仓库存储主机选项（`--repo-storage-host`）

仓库存储主机。

连接到存储（如 S3、Azure）端点以外的主机，通常用于测试。

```yaml
example: --repo1-storage-host=127.0.0.1
```

已弃用名称：repo-azure-host、repo-s3-host

### 仓库存储端口选项（`--repo-storage-port`）

仓库存储端口。

连接存储（如 S3、Azure）端点（或指定主机）时使用的端口。

```yaml
default: 443
allowed: [1, 65535]
example: --repo1-storage-port=9000
```

已弃用名称：repo-azure-port、repo-s3-port

### 仓库存储标签选项（`--repo-storage-tag`）

仓库存储标签。

当仓库为对象存储（如 S3）时，指定要添加到对象上的标签。此选项可重复使用以添加多个标签。

pgBackRest 不提供修改这些标签的功能，因此请在运行 `stanza-create` 之前正确设置，以确保整个仓库的标签一致。

```yaml
example: --repo1-storage-tag=key1=value1
```

### 仓库存储上传分块大小选项（`--repo-storage-upload-chunk-size`）

仓库存储上传分块大小。

当文件过大无法完整存入内存时，S3 等对象存储支持分块上传。即使文件可以存入内存，限制上传所用的内存量也更为高效。

分块大小越大，通常性能越好，因为可以减少上传请求数量，允许在单次请求中上传更多数据。缺点是内存占用更高；`process-max` 值较大时，每个进程都需要分配分块缓冲区，整体内存消耗更多。

请注意，有效的分块大小因存储类型和平台而异。例如，AWS S3 的最小分块大小为 5MiB。不同存储类型对分块大小的术语也不同：AWS S3 称之为"part size"（分片大小），GCS 称之为"chunk size"（分块大小），Azure 称之为"block size"（块大小）。

若文件大于 1GiB（PostgreSQL 默认最大创建文件大小），则分块大小会逐步增大至允许的最大值，以完成文件上传。

```yaml
default (depending on repo-type):
   azure - 4MiB
   gcs - 4MiB
   s3 - 5MiB

allow range (depending on repo-type):
   azure - [4MiB, 1GiB]
   gcs - [4MiB, 1GiB]
   s3 - [5MiB, 1GiB]

example: --repo1-storage-upload-chunk-size=16MiB
```

### 仓库存储证书验证选项（`--repo-storage-verify-tls`）

仓库存储证书验证。

提供启用/禁用存储（如 S3、Azure）服务器 TLS 证书验证的能力。仅在测试或使用自签名证书等特殊场景下才应禁用验证。

```yaml
default: y
example: --no-repo1-storage-verify-tls
```

已弃用名称：repo-azure-verify-tls、repo-s3-verify-ssl、repo-s3-verify-tls

### 仓库符号链接选项（`--repo-symlink`）

在仓库中创建符号链接。

启用 `latest` 和表空间符号链接的创建。这些符号链接在使用快照对仓库进行原地恢复时最为有用，但这是较少见的使用场景。

尽管此功能对大多数用户可能没有实际用处，但为了兼容性默认保持启用。对于不支持符号链接的 POSIX 类存储，禁用符号链接可能是有益的。

```yaml
default: y
example: --no-repo1-symlink
```

### 仓库类型选项（`--repo-type`）

仓库所使用的存储类型。

支持以下仓库类型：

- `azure` — Azure Blob 存储服务
- `cifs` — 类似 `posix`，但禁用链接和目录 fsync
- `gcs` — Google Cloud 存储
- `posix` — 符合 POSIX 标准的文件系统
- `s3` — AWS 简单存储服务
- `sftp` — 安全文件传输协议

当 NFS 挂载作为 `posix` 类型仓库使用时，适用 PostgreSQL 文档中描述的相同规则：[创建数据库集群 - 文件系统](https://www.postgresql.org/docs/current/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM)。

```yaml
default: posix
example: --repo1-type=cifs
```

## Stanza 选项

### PostgreSQL 数据库选项（`--pg-database`）

PostgreSQL 数据库名。

连接 PostgreSQL 时使用的数据库名称。默认值通常即可，但某些安装可能不包含此数据库。

注意，出于历史兼容原因，`PGDATABASE` 环境变量的设置会被忽略。

```yaml
default: postgres
example: --pg1-database=backupdb
```

### PostgreSQL 主机选项（`--pg-host`）

远程操作时的 PostgreSQL 主机。

用于 PostgreSQL 主机与仓库主机不在同一台机器上的备份场景。

```yaml
example: --pg1-host=db.domain.com
```

已弃用名称：db-host

### PostgreSQL 主机证书颁发机构文件选项（`--pg-host-ca-file`）

PostgreSQL 主机的证书颁发机构文件。

连接 PostgreSQL 主机时使用非系统默认的 CA 文件。

```yaml
example: --pg1-host-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

### PostgreSQL 主机证书颁发机构路径选项（`--pg-host-ca-path`）

PostgreSQL 主机的证书颁发机构路径。

连接 PostgreSQL 主机时使用非系统默认的 CA 路径。

```yaml
example: --pg1-host-ca-path=/etc/pki/tls/certs
```

### PostgreSQL 主机证书文件选项（`--pg-host-cert-file`）

PostgreSQL 主机的证书文件。

发送给 PostgreSQL 主机以证明客户端身份。

```yaml
example: --pg1-host-cert-file=/path/to/client.crt
```

### PostgreSQL 主机命令选项（`--pg-host-cmd`）

PostgreSQL 主机上的 pgBackRest 命令路径。

仅当本地主机与 PostgreSQL 主机上的 pgBackRest 命令路径不同时才需要配置。若未定义，PostgreSQL 主机命令将与本地命令相同。

```yaml
default: [path of executed pgbackrest binary]
example: --pg1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：db-cmd

### PostgreSQL 主机配置文件选项（`--pg-host-config`）

pgBackRest 数据库主机配置文件。

设置 PostgreSQL 主机上配置文件的位置。仅当 PostgreSQL 主机的配置文件位置与本地配置文件位置不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --pg1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：db-config

### PostgreSQL 主机配置包含路径选项（`--pg-host-config-include-path`）

pgBackRest 数据库主机配置包含路径。

设置 PostgreSQL 主机上配置包含路径的位置。仅当 PostgreSQL 主机的配置包含路径与本地配置包含路径不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --pg1-host-config-include-path=/conf/pgbackrest/conf.d
```

### PostgreSQL 主机配置路径选项（`--pg-host-config-path`）

pgBackRest 数据库主机配置路径。

设置 PostgreSQL 主机上配置路径的位置。仅当 PostgreSQL 主机的配置路径与本地配置路径不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --pg1-host-config-path=/conf/pgbackrest
```

### PostgreSQL 主机密钥文件选项（`--pg-host-key-file`）

PostgreSQL 主机的密钥文件。

证明客户端证书由其所有者发送。

```yaml
example: --pg1-host-key-file=/path/to/client.key
```

### PostgreSQL 主机端口选项（`--pg-host-port`）

设置 `pg-host` 时使用的 PostgreSQL 主机端口。

使用此选项为 PostgreSQL 主机协议指定非默认端口。

> **注意：** 当 `pg-host-type=ssh` 时，`pg-host-port` 没有默认值，实际使用的端口由 `cmd-ssh` 指定的命令配置决定。

```yaml
default (depending on pg-host-type):
   tls - 8432

allowed: [0, 65535]
example: --pg1-host-port=25
```

已弃用名称：db-ssh-port

### PostgreSQL 主机协议类型选项（`--pg-host-type`）

PostgreSQL 主机协议类型。

支持以下协议类型：

- `ssh` — 安全外壳协议（Secure Shell）。
- `tls` — pgBackRest TLS 服务器。

```yaml
default: ssh
example: --pg1-host-type=tls
```

### PostgreSQL 主机用户选项（`--pg-host-user`）

设置 `pg-host` 时使用的 PostgreSQL 主机登录用户。

该用户同时拥有远程 pgBackRest 进程，并负责发起与 PostgreSQL 的连接。为使其正常工作，此用户应为 PostgreSQL 数据库集群的所有者，通常为默认值 `postgres`。

```yaml
default: postgres
example: --pg1-host-user=db_owner
```

已弃用名称：db-user

### PostgreSQL 数据目录选项（`--pg-path`）

PostgreSQL 数据目录。

应与 PostgreSQL 报告的 `data_directory` 一致。尽管可以从多处读取此值，但建议在配置文件中显式设置，以防在恢复或离线备份场景中这些来源不可用。

每次在线备份时，`pg-path` 选项都会与 PostgreSQL 报告的值进行核对，因此应始终保持最新。

```yaml
example: --pg1-path=/data/db
```

已弃用名称：db-path

### PostgreSQL 端口选项（`--pg-port`）

PostgreSQL 端口。

PostgreSQL 运行的端口。大多数 PostgreSQL 集群使用默认端口，通常无需指定此选项。

```yaml
default: 5432
allowed: [0, 65535]
example: --pg1-port=6543
```

已弃用名称：db-port

### PostgreSQL Socket 路径选项（`--pg-socket-path`）

PostgreSQL Unix socket 路径。

启动 PostgreSQL 时指定的 Unix socket 目录。pgBackRest 会自动查找操作系统的标准位置，通常无需配置此选项，除非通过 `postgresql.conf` 中的 `unix_socket_directories` 参数显式修改了 socket 目录。

```yaml
example: --pg1-socket-path=/var/run/postgresql
```

已弃用名称：db-socket-path

### PostgreSQL 数据库用户选项（`--pg-user`）

PostgreSQL 数据库用户。

连接 PostgreSQL 时使用的数据库用户名。若未指定，pgBackRest 将使用本地操作系统用户或 `PGUSER` 环境变量。

```yaml
example: --pg1-user=backupuser
```

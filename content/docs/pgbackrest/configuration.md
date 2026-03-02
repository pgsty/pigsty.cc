---
title: "配置参考"
linkTitle: "Configuration"
weight: 50
description: "pgBackRest 完整配置参考，涵盖归档、备份、仓库、云存储等所有配置项。"
icon: fa-solid fa-code
module: [PGBACKREST]
category: [Reference]
---

--------

## 简介

pgBackRest 可以完全通过命令行参数使用，但当配置较为复杂或需要设置大量选项时，使用配置文件更为实用。配置文件的默认路径为 `/etc/pgbackrest/pgbackrest.conf`。若该路径下不存在配置文件，则会检查旧的默认路径 `/etc/pgbackrest.conf`。

以下是支持的选项类型：

**String（字符串）**：文本字符串，常见用途包括标识符、密码等。

命令行示例：`--stanza=demo`<br/>配置文件示例：`repo1-cipher-pass=zWaf6XtpjIVZC5444yXB...`

**Path（路径）**：用于唯一标识目录结构中某个位置。路径必须以 `/` 开头，不允许使用双斜杠 `//`，且末尾不应有 `/`。

命令行示例：`--repo1-path=/var/lib/pgbackrest`<br/>配置文件示例：`repo1-path=/var/lib/pgbackrest`

**Boolean（布尔值）**：启用或禁用某个选项。参数值只接受 `y` 或 `n`。

命令行示例：`--start-fast`、`--no-start-fast`、`--start-fast=y`、`--start-fast=n`<br/>配置文件示例：`start-fast=y`、`start-fast=n`

**Integer（整数）**：用于端口号、保留策略/重试次数、并行进程数等。

命令行示例：`--compress-level=3`<br/>配置文件示例：`pg1-port=5432`

**Size（大小）**：用于缓冲区大小、磁盘用量等。大小可以字节（默认）或 KiB、MiB、GiB、TiB、PiB 为单位，倍数为 1024 的幂次。例如，不区分大小写的值 `5GiB`（或 `5GB`、`5g`）等同于 5368709120。不允许使用小数值（如 2.5GiB），请改用 2560MiB。

命令行示例：`--archive-get-queue-max=1GiB`<br/>配置文件示例：`buffer-size=2MiB`

**Time（时间）**：以秒为单位的时间值。

命令行示例：`--io-timeout=90`<br/>配置文件示例：`db-timeout=600`

**List（列表）**：该选项可指定多次。

命令行示例：`--db-exclude=db1 --db-exclude=db2 --db-exclude=db5`<br/>配置文件示例，每项单独占一行：`db-exclude=db1 db-exclude=db2 db-exclude=db5`

**Key/Value（键值对）**：该选项可以 `key=value` 的形式指定多次。

命令行示例：`--tablespace-map=ts_01=/db/ts_01 --tablespace-map=ts_02=/db/ts_02`<br/>配置文件示例，每项单独占一行：`tablespace-map=ts_01=/db/ts_01 tablespace-map=ts_02=/db/ts_02`

--------

## 归档选项

`archive` 部分定义了 `archive-push` 和 `archive-get` 命令的选项。

### 异步归档选项（`--archive-async`）

以异步方式推送/获取 WAL 段。

为 `archive-push` 和 `archive-get` 命令启用异步操作。

异步操作效率更高，可复用连接并利用并行处理优势。详情请参阅 `spool-path`、`archive-get-queue-max` 和 `archive-push-queue-max` 选项。

```
default: n
example: archive-async=y
```

### 最大 archive-get 队列大小选项（`--archive-get-queue-max`）

`archive-get` 队列的最大容量。

启用 `archive-async` 时，指定 `archive-get` 队列的最大大小。队列存储在 `spool-path` 中，用于加速向 PostgreSQL 提供 WAL。

```
default: 128MiB
allowed: [0B, 4PiB]
example: archive-get-queue-max=1GiB
```

### 重试缺失 WAL 段选项（`--archive-missing-retry`）

重试缺失的 WAL 段。

在异步模式下，对之前由 `archive-get` 命令报告为缺失的 WAL 段进行重试。这可以防止将缓冲区路径中来自先前恢复操作的通知文件用于当前操作，从而避免在尚未达到一致性时导致恢复失败。

禁用此选项可让 PostgreSQL 更可靠地识别归档中 WAL 的末尾，从而切换到从主库进行流式复制。若持续启用重试，连续不断的 WAL 归档流会导致 PostgreSQL 继续从归档获取 WAL，而不是切换到流式复制。

禁用此选项时，务必确保 stanza 的缓冲区路径为空。若在恢复时配置了缓冲区路径，`restore` 命令会自动清空该路径；否则需要用户手动清空。

```
default: y
example: archive-missing-retry=n
```

### 最大 archive-push 队列大小选项（`--archive-push-queue-max`）

PostgreSQL 归档队列的最大大小。

达到限制后，将发生以下情况：

- pgBackRest 会通知 PostgreSQL WAL 已成功归档，然后将其**丢弃**。
- 会在 PostgreSQL 日志中输出一条警告。

若发生此情况，归档日志流将被中断，此后将无法执行 PITR。需要执行新的备份才能恢复完整的恢复能力。

在异步模式下，整个队列将被清空，以防止在队列再次超出限制之前出现短暂的 WAL 写入。

此功能的目的是防止日志卷被写满——日志卷写满会导致 PostgreSQL 完全停止。宁可丢失备份，也好过让 PostgreSQL 宕机。

```
allowed: [0B, 4PiB]
example: archive-push-queue-max=1TiB
```

Deprecated Name: archive-queue-max

### 归档超时选项（`--archive-timeout`）

归档超时时间。

设置等待每个 WAL 段到达 pgBackRest 归档仓库的最长时间（秒）。该超时适用于 `check` 和 `backup` 命令等待备份一致性所需的 WAL 段完成归档的场景。

```
default: 1m
allowed: [100ms, 1d]
example: archive-timeout=30
```

--------

## 备份选项

`backup` 部分定义了与备份相关的设置。

### 备份注解选项（`--annotation`）

为备份附加用户自定义键值对注解。

用户可为备份附加信息性键值对。此选项可多次使用，以添加多条注解。

注解会在 `info` 命令通过 `--set` 指定备份时以文本形式输出，并始终出现在 JSON 输出中。

```
example: annotation=source="Sunday backup for website database"
```

### 归档检查选项（`--archive-check`）

在备份完成前检查 WAL 段是否已存在于归档中。

检查使备份一致所需的所有 WAL 段是否都已存在于 WAL 归档中。除非使用了其他归档方式，否则建议保留默认值。

若启用了 `archive-copy`，则必须同时启用此选项。

```
default: y
example: archive-check=n
```

### 归档复制选项（`--archive-copy`）

将保证一致性所需的 WAL 段复制到备份中。

此选项较为严格，通过将保证备份一致性所需的 WAL 段直接存储在备份中，防止因 WAL 段归档损坏而导致问题。WAL 段仍会存储在归档中，因此该选项会占用额外空间。

使用此选项时，最好让 `archive-push` 和 `backup` 命令使用相同的 `compress-type`（如 `lz4`）。否则，WAL 段需要使用备份所用的 `compress-type` 重新压缩，根据备份期间生成的 WAL 量，这可能代价较高。

恢复时，WAL 段将出现在 `pg_xlog/pg_wal` 中，PostgreSQL 会优先使用它们，而不是调用 `restore_command`。

若启用了 `archive-copy`，则必须同时启用 `archive-check` 选项。

```
default: n
example: archive-copy=y
```

### 归档模式检查选项（`--archive-mode-check`）

检查 PostgreSQL 的 `archive_mode` 设置。

默认启用，此选项禁止 PostgreSQL 使用 `archive_mode=always`。

从备库推送的 WAL 段在逻辑上可能与从主库推送的 WAL 段相同，但校验和不同。为避免冲突，建议禁止来自多个来源的归档。

注意：

若禁用此选项，则必须确保只有一个归档进程通过 `archive-push` 命令向仓库写入数据。

```
default: y
example: archive-mode-check=n
```

### 从备库备份选项（`--backup-standby`）

从备库执行备份。

启用从备库备份，以降低主库负载。此选项要求同时配置主库和备库主机。

支持以下模式：

- `y` - 备份必须从备库执行。
- `prefer` - 优先从备库备份，若备库不可用则从主库备份。
- `n` - 仅从主库备份。

```
default: n
example: backup-standby=y
```

### 页面校验和选项（`--checksum-page`）

验证数据页面校验和。

指示 pgBackRest 在备份集群时验证所有数据页面的校验和。当集群启用了数据页面校验和时，此选项会自动启用。

校验和验证失败不会中止备份，而是会在日志中（以及使用默认设置时在控制台中）输出警告，并将无效页面列表存储在备份的清单文件（manifest）中。

```
example: checksum-page=n
```

### 路径/文件排除选项（`--exclude`）

从备份中排除路径或文件。

所有排除路径均相对于 `$PGDATA`。若排除路径以 `/` 结尾，则仅排除指定目录中的文件，例如 `--exclude=junk/` 将排除 `$PGDATA/junk` 目录中的所有文件，但保留该目录本身。若排除路径不以 `/` 结尾，则文件名可以精确匹配该排除路径，或匹配在其后追加 `/` 的路径，例如 `--exclude=junk` 将排除 `$PGDATA/junk` 目录及其所有文件。

**请谨慎使用此功能——非常容易误排除关键内容而导致备份不一致。务必测试你的恢复流程！**

所有被排除的文件都会以 `info` 级别记录到日志中，并附带排除规则。请务必审查被排除文件的列表，确认没有意外排除任何内容。

注意：

delta 恢复中不遵守排除规则。备份中被排除的文件/目录在 delta 恢复时将被*删除*。

不建议使用此选项来排除 PostgreSQL 日志文件。可以通过 PostgreSQL 的 `log_directory` 设置将日志移出 `PGDATA` 目录，这还有一个好处，即恢复后日志仍可保留。

可以在命令行或配置文件中指定多个排除规则。

```
example: exclude=junk/
```

### 自动过期选项（`--expire-auto`）

在成功备份后自动执行 `expire` 命令。

此设置默认启用。禁用时请谨慎，因为这将导致所有备份和归档被无限期保留，可能耗尽仓库空间。禁用后需定期手动执行 `expire` 命令以防止此情况发生。

```
default: y
example: expire-auto=y
```

### 清单保存阈值选项（`--manifest-save-threshold`）

备份期间保存清单文件（manifest）的阈值。

定义备份过程中清单文件的保存频率。定期保存清单文件非常重要，因为它存储了校验和信息，使断点续传功能能够高效工作。实际使用的阈值为备份大小的 1% 与 `manifest-save-threshold` 中的较大值。

```
default: 1GiB
allowed: [1B, 1TiB]
example: manifest-save-threshold=8GiB
```

### 断点续传选项（`--resume`）

允许从失败的备份处断点续传。

定义是否启用断点续传功能。断点续传可以大幅减少在相同类型的上一次备份失败后重新执行备份所需的时间。但它也增加了复杂性，因此在不需要此功能的环境中可以选择禁用。

```
default: y
example: resume=n
```

### 快速启动选项（`--start-fast`）

强制执行检查点以快速启动备份。

通过强制执行检查点（向备份启动函数的 `fast` 参数传入 `y`），使备份立即开始，而不是等待下一个常规检查点。

```
default: n
example: start-fast=y
```

--------

## 通用选项

`general` 部分定义了许多命令共用的选项。

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

用于复制、压缩、加密及其他操作的缓冲区大小。实际使用的缓冲区数量取决于具体选项，每个操作可能会使用额外内存，例如 `gz` 压缩可能额外使用 256KiB 内存。

允许的值为：`16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```
default: 1MiB
example: buffer-size=2MiB
```

### pgBackRest 命令选项（`--cmd`）

pgBackRest 可执行文件路径。

pgBackRest 在某些情况下需要生成命令字符串，例如 `restore` 命令生成 `restore_command` 设置时。此时将使用运行 pgBackRest 进程的命令，除非显式提供了 `cmd` 选项。

注意：

对 pgBackRest 命令进行包装可能导致不可预期的行为，不建议这样做。

```
default: [path of executed pgbackrest binary]
example: cmd=/var/lib/pgsql/bin/pgbackrest_wrapper.sh
```

### SSH 客户端命令选项（`--cmd-ssh`）

SSH 客户端命令。

当需要使用特定的 SSH 客户端，或 `ssh` 命令不在 `$PATH` 中时，使用此选项指定 SSH 客户端命令。

```
default: ssh
example: cmd-ssh=/usr/bin/ssh
```

### 压缩选项（`--compress`）

启用文件压缩。

备份文件与命令行压缩工具兼容。

此选项已弃用，请改用 `compress-type` 选项。

```
default: y
example: compress=n
```

### 压缩级别选项（`--compress-level`）

文件压缩级别。

当 `compress-type` 不等于 `none` 或使用（已弃用的）`compress=y` 时，设置文件压缩所使用的级别。

```
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

example: compress-level=9
```

### 网络压缩级别选项（`--compress-level-network`）

网络传输压缩级别。

当 `compress-type=none` 且命令不在与仓库相同的主机上运行时，设置网络传输的压缩级别，以减少网络流量。当 `compress-type` 不等于 `none` 时，此设置将被忽略，改用 `compress-level`，从而只对文件压缩一次。

```
default: 1
allowed: [-5, 12]
example: compress-level-network=1
```

### 压缩类型选项（`--compress-type`）

文件压缩类型。

支持以下压缩类型：

- `none` - 不压缩
- `bz2` - bzip2 压缩格式
- `gz` - gzip 压缩格式
- `lz4` - lz4 压缩格式（并非所有平台均可用）
- `zst` - Zstandard 压缩格式（并非所有平台均可用）

```
default: gz
example: compress-type=none
```

### 数据库超时选项（`--db-timeout`）

数据库查询超时时间。

设置对数据库执行查询的超时时间（秒）。这包括备份启动/停止函数，这些函数各自可能耗费相当长的时间。因此，除非确信这些函数会快速返回（例如设置了 `start-fast=y` 且数据库集群在备份期间不会生成大量 WAL 段），否则应将此超时设置得较大。

注意：

`db-timeout` 选项的值必须小于 `protocol-timeout` 选项的值。

```
default: 30m
allowed: [100ms, 7d]
example: db-timeout=600
```

### Delta 选项（`--delta`）

使用校验和进行恢复或备份。

执行恢复时，默认情况下 PostgreSQL 数据目录和表空间目录应已存在但为空。启用此选项后将使用校验和执行 delta 恢复。

执行备份时，此选项将使用校验和而非时间戳来判断文件是否需要复制。

```
default: n
example: delta=y
```

### I/O 超时选项（`--io-timeout`）

I/O 超时时间。

用于连接及读写操作的超时时间（秒）。

注意，整个读写操作不需要在此超时时间内完成，但必须有*一定*进展，哪怕只是传输了一个字节。

```
default: 1m
allowed: [100ms, 1h]
example: io-timeout=120
```

### 锁文件路径选项（`--lock-path`）

锁文件存储路径。

pgBackRest 将锁文件存放在此路径下，以防止并发运行相互冲突的操作。

```
default: /tmp/pgbackrest
example: lock-path=/backup/db/lock
```

### 中性 umask 选项（`--neutral-umask`）

使用中性 umask。

将 umask 设置为 0000，以便以合理的方式创建仓库中的文件权限。默认目录权限为 0750，默认文件权限为 0640。锁文件和日志目录的目录权限和文件权限分别设置为 0770 和 0660。

若要使用运行用户自身的 umask，请在配置文件中指定 `neutral-umask=n`，或在命令行中使用 `--no-neutral-umask`。

```
default: y
example: neutral-umask=n
```

### 设置进程优先级选项（`--priority`）

设置进程优先级（nice 值）。

定义内核调度器为进程分配的优先级（即 nice 值）。正值降低优先级，负值提高优先级。大多数情况下，进程没有权限提高自身优先级。

```
allowed: [-20, 19]
example: priority=19
```

### 最大进程数选项（`--process-max`）

用于压缩/传输的最大进程数。

每个进程都会执行压缩和传输操作以加快命令运行速度，但不要将 `process-max` 设置得过高，以免影响数据库性能。

```
default: 1
allowed: [1, 999]
example: process-max=4
```

### 协议超时选项（`--protocol-timeout`）

协议超时时间。

设置本地或远程进程在协议层等待接收新消息的超时时间（秒），以防止进程无限期地等待消息。

注意：

`protocol-timeout` 选项的值必须大于 `db-timeout` 选项的值。

```
default: 31m
allowed: [100ms, 7d]
example: protocol-timeout=630
```

### 保持连接活跃选项（`--sck-keep-alive`）

启用 keep-alive。

在套接字连接上启用 keep-alive 消息。

```
default: y
example: sck-keep-alive=n
```

### 缓冲区路径选项（`--spool-path`）

临时数据存储路径。

此路径用于存储异步 `archive-push` 和 `archive-get` 命令的数据。

异步 `archive-push` 命令在成功将 WAL 存储到归档后，会向缓冲区路径写入确认信息（失败时写入错误信息），以便前台进程快速通知 PostgreSQL。确认文件非常小（成功时为零字节，错误时为几百字节）。

异步 `archive-get` 命令会将 WAL 缓存到缓冲区路径，以便在 PostgreSQL 请求时快速提供。当缓冲区路径与 `pg_xlog`/`pg_wal` 在同一文件系统上时，文件传输效率最高。但不建议将缓冲区路径放置在 `pg_xlog`/`pg_wal` 目录*内部*，这可能会给 `pg_rewind` 等 PostgreSQL 工具带来问题。

存储在缓冲区路径中的数据并非严格意义上的临时数据，因为它可以且应该在系统重启后保留。但缓冲区路径中的数据丢失也不会造成问题——pgBackRest 只需重新检查每个 WAL 段，以确保 `archive-push` 操作安全归档，并为 `archive-get` 重建队列。

缓冲区路径应位于本地 Posix 兼容文件系统上，而非 NFS 或 CIFS 等远程文件系统。

```
default: /var/spool/pgbackrest
example: spool-path=/backup/db/spool
```

### keep-alive 计数选项（`--tcp-keep-alive-count`）

keep-alive 探测包数量。

指定在连接被认为断开之前，可以丢失的 TCP keep-alive 消息数量。

此选项在支持 `TCP_KEEPCNT` 套接字选项的系统上可用。

```
allowed: [1, 32]
example: tcp-keep-alive-count=3
```

### keep-alive 空闲时间选项（`--tcp-keep-alive-idle`）

keep-alive 空闲等待时间。

指定在没有网络活动的情况下，操作系统发送 TCP keep-alive 消息之前的等待时间（秒）。

此选项在支持 `TCP_KEEPIDLE` 套接字选项的系统上可用。

```
allowed: [1, 3600]
example: tcp-keep-alive-idle=60
```

### keep-alive 间隔选项（`--tcp-keep-alive-interval`）

keep-alive 重传间隔时间。

指定在未收到确认的情况下，TCP keep-alive 消息被重新发送之前的等待时间（秒）。

此选项在支持 `TCP_KEEPINTVL` 套接字选项的系统上可用。

```
allowed: [1, 900]
example: tcp-keep-alive-interval=30
```

### TLSv1.2 密码套件选项（`--tls-cipher-12`）

允许的 TLSv1.2 密码套件。

pgBackRest 客户端与服务端之间的所有 TLS 连接均已加密。默认情况下，连接到对象存储（如 S3）也会加密。

注意：

任何传输连接的最低安全级别为 TLSv1.2。

可以根据需要调整可接受的密码套件。除非有特定的安全要求，示例中的值是合理的选择。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```
example: tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 密码套件选项（`--tls-cipher-13`）

允许的 TLSv1.3 密码套件。

pgBackRest 客户端与服务端之间的所有 TLS 连接均已加密。默认情况下，连接到对象存储（如 S3）也会加密。

注意：

任何传输连接的最低安全级别为 TLSv1.2。

可以根据需要调整可接受的密码套件。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```
example: tls-cipher-13=TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256
```

--------

## 日志选项

`log` 部分定义了与日志相关的设置。

注意：

Trace 级别日志可能会暴露密钥和密码等敏感信息，请谨慎使用！

### 控制台日志级别选项（`--log-level-console`）

控制台日志级别。

支持以下日志级别：

- `off` - 不记录任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详细信息、信息、警告和错误
- `debug` - 记录调试、详细信息、信息、警告和错误
- `trace` - 记录追踪（非常详细的调试）、调试、信息、警告和错误

```
default: warn
example: log-level-console=error
```

### 文件日志级别选项（`--log-level-file`）

文件日志级别。

支持以下日志级别：

- `off` - 不记录任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详细信息、信息、警告和错误
- `debug` - 记录调试、详细信息、信息、警告和错误
- `trace` - 记录追踪（非常详细的调试）、调试、信息、警告和错误

```
default: info
example: log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

stderr 日志级别。

指定哪些日志级别将输出到 `stderr` 而不是 `stdout`（由 `log-level-console` 指定）。输出到 `stderr` 的日志不包含时间戳和进程信息。

支持以下日志级别：

- `off` - 不记录任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详细信息、信息、警告和错误
- `debug` - 记录调试、详细信息、信息、警告和错误
- `trace` - 记录追踪（非常详细的调试）、调试、信息、警告和错误

```
default: off
example: log-level-stderr=error
```

### 日志路径选项（`--log-path`）

日志文件存储路径。

pgBackRest 将日志文件存放在此路径下。注意，若 `log-level-file=off`，则不需要日志路径。

```
default: /var/log/pgbackrest
example: log-path=/backup/db/log
```

### 子进程日志选项（`--log-subprocess`）

启用子进程日志记录。

为此进程创建的所有子进程启用文件日志记录，日志级别由 `log-level-file` 指定。

```
default: n
example: log-subprocess=y
```

### 日志时间戳选项（`--log-timestamp`）

启用日志时间戳。

在控制台和文件日志中启用时间戳。此选项在生成文档等特殊情况下会被禁用。

```
default: y
example: log-timestamp=n
```

--------

## 维护者选项

维护者选项旨在支持 PostgreSQL 分支版本。正确的设置应由分支维护者确定，然后告知该分支的用户。

警告：

不当使用这些选项可能导致意外行为或数据损坏。

分支维护者有责任使用所需选项测试 pgBackRest 的兼容性。pgBackRest 不保证与任何分支版本的兼容性。

### WAL 头部检查选项（`--archive-header-check`）

检查 WAL 头部中的 PostgreSQL 版本/ID。

默认启用，此选项会将 WAL 头部与 PostgreSQL 版本和系统标识符进行比对，以确保 WAL 被复制到正确的 stanza。这是在检查 `pg_control` 与 stanza 的匹配性、以及验证 WAL 来自 `pg_control` 所在的同一 PostgreSQL 数据目录之外的额外校验。

因此，禁用此检查相对安全，但仅在必要时才应禁用，例如 WAL 已加密的情况。

```
default: y
example: archive-header-check=n
```

### 页头检查选项（`--page-header-check`）

检查 PostgreSQL 页头。

默认启用，此选项添加页头检查。

除非必要（例如页面已加密），否则应避免禁用此选项。

```
default: y
example: page-header-check=n
```

### 强制 PostgreSQL 版本选项（`--pg-version-force`）

强制指定 PostgreSQL 版本。

使用指定的 PostgreSQL 版本，而不是通过读取 `pg_control` 或 WAL 头部自动检测的版本。主要适用于 PostgreSQL 分支版本或开发版本，这些版本中的值可能与发行版本不同。PostgreSQL 通过 `server_version_num` 报告的版本必须与强制指定的版本匹配。

警告：

使用此选项时请谨慎，因为 `pg_control` 和 WAL 头部仍将按照指定版本的预期格式（即官方开源 PostgreSQL 版本的格式）进行读取。如果分支或开发版本更改了 pgBackRest 所依赖字段的格式，将导致意外行为。总体而言，此选项只有在分支将所有自定义结构成员添加在标准 PostgreSQL 成员*之后*时，才能按预期工作。

```
example: pg-version-force=15
```

--------

## 仓库选项

`repository` 部分定义了用于配置仓库的选项。

**索引**：所有 `repo-` 选项均带有索引，以支持配置多个仓库。例如，单个仓库通过 `repo1-path`、`repo1-host` 等选项进行配置。若配置了多个仓库且命令未指定 `--repo` 选项，则按优先级从高到低依次操作各仓库（例如先 repo1 再 repo2）。

`repo-retention-*` 选项定义备份的保留时长。过期操作仅在完整备份数量超过允许的保留数量时才会发生。换言之，若 `repo1-retention-full-type` 设置为 `count`（默认），且 `repo1-retention-full` 设置为 2，则必须存在 3 个完整备份才会使最旧的备份过期。若 `repo1-retention-full-type` 设置为 `time`，则 `repo1-retention-full` 表示天数，只有当全量备份的累计天数超过此值时才会触发过期。请确保始终为"保留数量 + 1"个备份预留足够的存储空间。

### Azure 仓库账户选项（`--repo-azure-account`）

Azure 仓库账户。

用于存储仓库的 Azure 账户。

```
example: repo1-azure-account=pg-backup
```

### Azure 仓库容器选项（`--repo-azure-container`）

Azure 仓库容器。

用于存储仓库的 Azure 容器。

通过设置 `repo-path=/`，pgBackRest 仓库可以存储在容器根目录下，但通常最好指定一个前缀（如 `/repo`），以便日志和其他 Azure 生成的内容也能存储在该容器中。

```
example: repo1-azure-container=pg-backup
```

### Azure 仓库端点选项（`--repo-azure-endpoint`）

Azure 仓库端点。

用于连接 Blob 服务的端点。除非使用 Azure Government，否则默认值通常是正确的。

对于自定义/测试配置，`repo-storage-ca-file`、`repo-storage-ca-path`、`repo-storage-host`、`repo-storage-port` 和 `repo-storage-verify-tls` 等选项可能很有用。

```
default: blob.core.windows.net
example: repo1-azure-endpoint=blob.core.usgovcloudapi.net
```

### Azure 仓库密钥选项（`--repo-azure-key`）

Azure 仓库密钥。

根据 `repo-azure-key-type` 选项的设置，此选项为共享密钥或共享访问签名。

```
example: repo1-azure-key=T+9+aov82qNhrcXSNGZCzm9mjd4d75/oxxOr6r1JVpgTLA==
```

### Azure 仓库密钥类型选项（`--repo-azure-key-type`）

Azure 仓库密钥类型。

支持以下授权类型：

- `shared` - 共享密钥
- `sas` - 共享访问签名
- `auto` - 使用 Azure 托管标识自动授权

```
default: shared
example: repo1-azure-key-type=sas
```

### Azure 仓库 URI 风格选项（`--repo-azure-uri-style`）

Azure URI 风格。

支持以下 URI 风格：

- `host` - 连接到 `account.endpoint` 主机。
- `path` - 连接到 `endpoint` 主机，并在 URI 中添加账户前缀。

```
default: host
example: repo1-azure-uri-style=path
```

### 块增量备份选项（`--repo-block`）

启用块级增量备份。

块级备份通过将文件拆分为可独立备份的块，实现更细粒度的备份。这可以节省仓库空间，并在 delta 恢复时提升性能，因为可以直接获取单个块而无需从仓库读取整个文件。

注意：

必须先启用 `repo-bundle` 选项，才能启用 `repo-block`。

文件的块大小根据文件大小和存在时间确定。通常，较旧/较大的文件会获得更大的块大小。若文件足够旧，则不会使用块级增量备份。

块级增量备份在为所有备份类型（包括全量备份）启用时效率最高。这会使全量备份稍大，但后续的差异备份和增量备份可以利用全量备份生成的块映射来节省空间。

```
default: n
example: repo1-block=y
```

### 仓库包（Bundle）选项（`--repo-bundle`）

在仓库中将文件打包。

将较小的文件打包（合并）在一起，以减少写入仓库的文件总数。写入更少的文件通常效率更高，尤其是在 S3 等对象存储上。此外，零字节文件不会被存储（清单文件中除外），从而节省时间和空间。

```
default: n
example: repo1-bundle=y
```

### 仓库包大小限制选项（`--repo-bundle-limit`）

文件包的大小上限。

指定将被纳入包中的文件大小上限。超过此大小的文件将单独存储。

打包后的文件在备份断点续传时无法被复用，因此此选项控制哪些文件可以断点续传——较高的值意味着可续传的文件更少。

```
default: 2MiB
allowed: [8KiB, 1PiB]
example: repo1-bundle-limit=10MiB
```

### 仓库包目标大小选项（`--repo-bundle-size`）

文件包的目标大小。

定义添加到单个包中的文件总大小上限。大多数包会小于此大小，但某些包可能略大，因此不要将此选项设置为文件系统允许的最大值。

通常不建议将此选项设置得过高，因为重试时需要重新执行整个包的操作。

```
default: 20MiB
allowed: [1MiB, 1PiB]
example: repo1-bundle-size=10MiB
```

### 仓库加密密码选项（`--repo-cipher-pass`）

仓库加密密码。

用于加密/解密仓库文件的密码。

```
example: repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
```

### 仓库加密类型选项（`--repo-cipher-type`）

仓库加密算法类型。

支持以下加密类型：

- `none` - 仓库不加密
- `aes-256-cbc` - 256 位密钥长度的高级加密标准

注意，即使仓库类型（如 S3）支持加密，加密操作始终在客户端执行。

```
default: none
example: repo1-cipher-type=aes-256-cbc
```

### GCS 仓库存储桶选项（`--repo-gcs-bucket`）

GCS 仓库存储桶。

用于存储仓库的 GCS 存储桶。

通过设置 `repo-path=/`，pgBackRest 仓库可以存储在存储桶根目录下，但通常最好指定一个前缀（如 `/repo`），以便日志和其他 GCS 生成的内容也能存储在该存储桶中。

```
example: repo1-gcs-bucket=/pg-backup
```

### GCS 仓库端点选项（`--repo-gcs-endpoint`）

GCS 仓库端点。

用于连接存储服务的端点。可以更新为使用本地 GCS 服务器或备用端点。

```
default: storage.googleapis.com
example: repo1-gcs-endpoint=localhost
```

### GCS 仓库密钥选项（`--repo-gcs-key`）

GCS 仓库密钥。

根据 `repo-gcs-key-type` 选项的设置，此选项为令牌或服务密钥文件。

```
example: repo1-gcs-key=/etc/pgbackrest/gcs-key.json
```

### GCS 仓库密钥类型选项（`--repo-gcs-key-type`）

GCS 仓库密钥类型。

支持以下授权类型：

- `auto` - 使用实例服务账户授权。
- `service` - 使用本地存储的服务账户密钥。
- `token` - 用于本地测试，例如 `fakegcs`。

当 `repo-gcs-key-type=service` 时，身份验证令牌续期时将重新加载凭据。

```
default: service
example: repo1-gcs-key-type=auto
```

### GCS 仓库项目 ID 选项（`--repo-gcs-user-project`）

GCS 项目 ID。

用于确定请求计费的 GCS 项目 ID。

```
example: repo1-gcs-user-project=my-project
```

### 仓库硬链接选项（`--repo-hardlink`）

在仓库中为备份之间的文件创建硬链接。

为差异备份和增量备份中的文件与其对应的全量备份启用硬链接。这在文件系统层面使每个备份看起来都像一个全量备份。但请注意，修改硬链接的文件会影响集合中的所有备份。

```
default: n
example: repo1-hardlink=y
```

Deprecated Name: hardlink

### 仓库主机选项（`--repo-host`）

远程操作时的仓库主机。

若备份和归档到本地挂载的文件系统，则不需要此设置。

```
example: repo1-host=repo1.domain.com
```

Deprecated Name: backup-host

### 仓库主机证书颁发机构文件选项（`--repo-host-ca-file`）

仓库主机证书颁发机构文件。

连接到仓库主机时，使用非系统默认的 CA 文件。

```
example: repo1-host-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

### 仓库主机证书颁发机构路径选项（`--repo-host-ca-path`）

仓库主机证书颁发机构路径。

连接到仓库主机时，使用非系统默认的 CA 路径。

```
example: repo1-host-ca-path=/etc/pki/tls/certs
```

### 仓库主机证书文件选项（`--repo-host-cert-file`）

仓库主机证书文件。

发送给仓库主机以证明客户端身份。

```
example: repo1-host-cert-file=/path/to/client.crt
```

### 仓库主机命令选项（`--repo-host-cmd`）

仓库主机上的 pgBackRest 命令路径。

仅当本地主机和仓库主机上的 pgBackRest 命令路径不同时才需要设置。若未定义，仓库主机命令将与本地命令相同。

```
default: [path of executed pgbackrest binary]
example: repo1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

Deprecated Name: backup-cmd

### 仓库主机配置选项（`--repo-host-config`）

仓库主机上的 pgBackRest 配置文件路径。

设置仓库主机上配置文件的位置。仅当仓库主机上的配置文件与本地配置文件位于不同位置时才需要设置。

```
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: repo1-host-config=/conf/pgbackrest/pgbackrest.conf
```

Deprecated Name: backup-config

### 仓库主机配置包含路径选项（`--repo-host-config-include-path`）

仓库主机上的 pgBackRest 配置包含路径。

设置仓库主机上配置包含路径的位置。仅当仓库主机上的配置包含路径与本地配置包含路径位于不同位置时才需要设置。

```
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: repo1-host-config-include-path=/conf/pgbackrest/conf.d
```

### 仓库主机配置路径选项（`--repo-host-config-path`）

仓库主机上的 pgBackRest 配置路径。

设置仓库主机上配置路径的位置。仅当仓库主机上的配置路径与本地配置路径位于不同位置时才需要设置。

```
default: CFGOPTDEF_CONFIG_PATH
example: repo1-host-config-path=/conf/pgbackrest
```

### 仓库主机密钥文件选项（`--repo-host-key-file`）

仓库主机密钥文件。

证明客户端证书由所有者发送。

```
example: repo1-host-key-file=/path/to/client.key
```

### 仓库主机端口选项（`--repo-host-port`）

仓库主机端口。

设置 `repo-host` 时，使用此选项为仓库主机协议指定非默认端口。

注意：

当 `repo-host-type=ssh` 时，`repo-host-port` 没有默认值。此时端口将使用 `cmd-ssh` 指定命令所配置的端口。

```
default (depending on repo-host-type):
   tls - 8432

allowed: [0, 65535]
example: repo1-host-port=25
```

Deprecated Name: backup-ssh-port

### 仓库主机协议类型选项（`--repo-host-type`）

仓库主机协议类型。

支持以下协议类型：

- `ssh` - 安全外壳协议（Secure Shell）。
- `tls` - pgBackRest TLS 服务端。

```
default: ssh
example: repo1-host-type=tls
```

### 仓库主机用户选项（`--repo-host-user`）

仓库主机登录用户。

设置 `repo-host` 时，定义在仓库主机上执行操作的用户。最好不要使用 `postgres` 用户，而是使用 `pgbackrest` 等其他用户。若 PostgreSQL 运行在仓库主机上，可以将 `postgres` 用户加入 `pgbackrest` 组，使其对仓库拥有读取权限，同时避免意外损坏仓库内容。

```
default: pgbackrest
example: repo1-host-user=repo-user
```

Deprecated Name: backup-user

### 仓库路径选项（`--repo-path`）

备份和归档的存储路径。

仓库是 pgBackRest 存储备份和归档 WAL 段的地方。

提前估算所需空间可能比较困难。最好的方法是先执行一些备份，然后记录不同类型备份（全量/增量/差异）的大小，并测量每天生成的 WAL 量。这可以让你对所需空间有一个大致了解，当然随着数据库的增长，需求也会随时间变化。

```
default: /var/lib/pgbackrest
example: repo1-path=/backup/db/backrest
```

### 归档保留选项（`--repo-retention-archive`）

保留连续 WAL 归档所对应的备份数量。

注意：

使备份保持一致性所需的 WAL 段，无论此选项如何配置，在备份过期之前都会始终保留。

若未设置此值且 `repo-retention-full-type` 为 `count`（默认），则归档过期策略将默认使用与 `repo-retention-archive-type` 对应的 `repo-retention-full`（或 `repo-retention-diff`）值（若类型为 `full` 或 `diff`）。这将确保 WAL 仅在对应备份已过期后才过期。若 `repo-retention-full-type` 为 `time`，则此值将默认删除早于满足 `repo-retention-full` 设置后所保留的最旧全量备份的归档。

若 `repo-retention-archive-type` 设置为 `incr`，则必须设置此选项。若磁盘空间紧张，可以结合 `repo-retention-archive-type` 使用此选项来积极清理 WAL 段。但这样做会使具有已过期 WAL 的备份无法执行 PITR，因此**不**推荐这样做。

```
allowed: [1, 9999999]
example: repo1-retention-archive=2
```

Deprecated Name: retention-archive

### 归档保留类型选项（`--repo-retention-archive-type`）

WAL 归档保留所依据的备份类型。

若设置为 `full`，pgBackRest 将为 `repo-retention-archive` 定义的全量备份数量保留归档日志。若设置为 `diff`（差异），pgBackRest 将为 `repo-retention-archive` 定义的全量备份和差异备份数量保留归档日志，即若最近一次备份是全量备份，则在计算 repo-retention 时将其视为差异备份。若设置为 `incr`（增量），pgBackRest 将为 `repo-retention-archive` 定义的全量、差异和增量备份数量保留归档日志。建议保留此设置的默认值——默认行为仅在全量备份过期时才清理 WAL。

```
default: full
example: repo1-retention-archive-type=diff
```

Deprecated Name: retention-archive-type

### 差异备份保留选项（`--repo-retention-diff`）

保留的差异备份数量。

差异备份过期时，与该差异备份关联的所有增量备份也会一并过期。若未定义此选项，则所有差异备份将保留至其依赖的全量备份过期为止。

注意，在计算过期时，全量备份也会被计入差异备份的数量。这在大多数情况下会略微减少需要保留的差异备份数量。

```
allowed: [1, 9999999]
example: repo1-retention-diff=3
```

Deprecated Name: retention-diff

### 全量备份保留选项（`--repo-retention-full`）

全量备份保留数量或时间。

全量备份过期时，与该全量备份关联的所有差异和增量备份也会一并过期。若未定义此选项，将发出警告。若希望永久保留，可将此选项设置为最大值。

```
allowed: [1, 9999999]
example: repo1-retention-full=2
```

Deprecated Name: retention-full

### 全量备份保留类型选项（`--repo-retention-full-type`）

全量备份的保留类型。

确定 `repo-retention-full` 设置表示时间周期（天数）还是要保留的全量备份数量。

若设置为 `time`，则早于 `repo-retention-full` 天数的全量备份将从仓库中删除，前提是至少还存在另一个满足或超过 `repo-retention-full` 设置的备份。例如，若 `repo-retention-full` 为 30（天），且存在两个全量备份：一个 25 天前，一个 35 天前，则不会过期任何全量备份，因为使 35 天前的备份过期将只剩下 25 天前的备份，违反了在过期较旧备份之前至少保留一个 30 天备份的策略。早于保留的最旧全量备份的归档 WAL 将自动过期，除非显式设置了 `repo-retention-archive-type` 和 `repo-retention-archive`。

若设置为 `count`，则超过 `repo-retention-full` 数量的全量备份将过期。例如，若 `repo-retention-full` 为 `4`，完成第五个全量备份后，最旧的全量备份将过期，使数量保持在 4 个。

注意，备份必须成功完成后才会纳入保留计算。例如，若 `repo-retention-full-type` 为 `count` 且 `repo-retention-full` 为 `2`，则必须有 3 个完整的全量备份，最旧的才会过期。

```
default: count
example: repo1-retention-full-type=time
```

### 备份历史保留选项（`--repo-retention-history`）

备份历史清单的保留天数。

备份完成时，备份清单文件（manifest）的副本将存储在 `backup.history` 路径中。默认情况下，这些文件永不过期，因为它们对数据分析（例如测量备份和 WAL 的增长趋势）很有价值。

设置 `repo-retention-history` 以定义保留备份历史清单的天数。未过期的备份始终保留在备份历史中。指定 `repo-retention-history=0` 仅为未过期的备份保留备份历史。

当全量备份历史清单过期时，与该全量备份关联的所有差异和增量备份历史清单也会一并过期。

```
allowed: [0, 9999999]
example: repo1-retention-history=365
```

### S3 仓库存储桶选项（`--repo-s3-bucket`）

S3 仓库存储桶。

用于存储仓库的 S3 存储桶。

通过设置 `repo-path=/`，pgBackRest 仓库可以存储在存储桶根目录下，但通常最好指定一个前缀（如 `/repo`），以便日志和其他 AWS 生成的内容也能存储在该存储桶中。

```
example: repo1-s3-bucket=pg-backup
```

### S3 仓库端点选项（`--repo-s3-endpoint`）

S3 仓库端点。

AWS 端点应与所选区域匹配。

对于自定义/测试配置，`repo-storage-ca-file`、`repo-storage-ca-path`、`repo-storage-host`、`repo-storage-port` 和 `repo-storage-verify-tls` 等选项可能很有用。

```
example: repo1-s3-endpoint=s3.amazonaws.com
```

### S3 仓库访问密钥选项（`--repo-s3-key`）

S3 仓库访问密钥。

用于访问此存储桶的 AWS 密钥。

```
example: repo1-s3-key=AKIAIOSFODNN7EXAMPLE
```

### S3 仓库秘密访问密钥选项（`--repo-s3-key-secret`）

S3 仓库秘密访问密钥。

用于访问此存储桶的 AWS 秘密密钥。

```
example: repo1-s3-key-secret=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

### S3 仓库密钥类型选项（`--repo-s3-key-type`）

S3 仓库密钥类型。

支持以下类型：

- `shared` - 共享密钥
- `auto` - 自动获取临时凭据
- `web-id` - 自动获取 Web 身份凭据

```
default: shared
example: repo1-s3-key-type=auto
```

### S3 仓库 KMS 密钥 ID 选项（`--repo-s3-kms-key-id`）

S3 仓库 KMS 密钥。

使用指定的 AWS 密钥管理服务密钥启用 S3 服务端加密。

```
example: repo1-s3-kms-key-id=bceb4f13-6939-4be3-910d-df54dee817b7
```

### S3 仓库区域选项（`--repo-s3-region`）

S3 仓库区域。

创建存储桶所在的 AWS 区域。

```
example: repo1-s3-region=us-east-1
```

### S3 仓库请求者付费选项（`--repo-s3-requester-pays`）

S3 请求者付费模式。

启用 S3 请求者付费模式。

```
default: n
example: repo1-s3-requester-pays=n
```

### S3 仓库角色选项（`--repo-s3-role`）

S3 仓库 IAM 角色。

当 `repo-s3-key-type=auto` 时，用于获取临时凭据的 AWS 角色名称（非完整 ARN）。

```
example: repo1-s3-role=authrole
```

### S3 仓库 SSE 客户密钥选项（`--repo-s3-sse-customer-key`）

S3 仓库 SSE 客户密钥。

使用指定的客户密钥启用 S3 服务端加密。

```
example: repo1-s3-sse-customer-key=bceb4f13-6939-4be3-910d-df54dee817b7
```

### S3 仓库安全令牌选项（`--repo-s3-token`）

S3 仓库安全令牌。

与临时凭据一起使用的 AWS 安全令牌。

```
example: repo1-s3-token=AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22 ...
```

### S3 仓库 URI 风格选项（`--repo-s3-uri-style`）

S3 URI 风格。

支持以下 URI 风格：

- `host` - 连接到 `bucket.endpoint` 主机。
- `path` - 连接到 `endpoint` 主机，并在 URI 中添加存储桶前缀。

```
default: host
example: repo1-s3-uri-style=path
```

### SFTP 仓库主机选项（`--repo-sftp-host`）

SFTP 仓库主机。

包含仓库的 SFTP 主机。

```
example: repo1-sftp-host=sftprepo.domain
```

### SFTP 仓库主机指纹选项（`--repo-sftp-host-fingerprint`）

SFTP 仓库主机指纹。

SFTP 仓库主机指纹的生成方式应与 `repo-sftp-host-key-hash-type` 匹配。可通过 `awk '{print $2}' ssh_host_xxx_key.pub | base64 -d | (md5sum or sha1sum) -b` 生成指纹。SSH 主机密钥通常位于 `/etc/ssh` 目录中。

```
example: repo1-sftp-host-fingerprint=f84e172dfead7aeeeae6c1fdfb5aa8cf
```

### SFTP 主机密钥检查类型选项（`--repo-sftp-host-key-check-type`）

SFTP 主机密钥检查类型。

支持以下 SFTP 主机密钥检查类型：

- `strict` - pgBackRest 永远不会自动将主机密钥添加到 `~/.ssh/known_hosts` 文件中，并拒绝连接到主机密钥已更改或在已知主机文件中未找到的主机。此选项要求用户手动添加所有新主机。
- `accept-new` - pgBackRest 会自动将新主机密钥添加到用户的已知主机文件中，但不允许连接到主机密钥已更改的主机。
- `fingerprint` - pgBackRest 将根据 `repo-sftp-host-fingerprint` 选项指定的指纹检查主机密钥。
- `none` - 不执行主机密钥检查。

```
default: strict
example: repo1-sftp-host-key-check-type=accept-new
```

### SFTP 仓库主机密钥哈希类型选项（`--repo-sftp-host-key-hash-type`）

SFTP 仓库主机密钥哈希类型。

声明在 SSH 启动时用于计算远程系统主机密钥摘要的哈希类型。较新版本的 `libssh2` 除 md5 和 sha1 外，还支持 `sha256`。

```
example: repo1-sftp-host-key-hash-type=sha256
```

### SFTP 仓库主机端口选项（`--repo-sftp-host-port`）

SFTP 仓库主机端口。

```
default: 22
allowed: [1, 65535]
example: repo1-sftp-host-port=22
```

### SFTP 仓库主机用户选项（`--repo-sftp-host-user`）

SFTP 仓库主机用户。

用于存储仓库的主机上的用户。

```
example: repo1-sftp-host-user=pg-backup
```

### SFTP 已知主机文件选项（`--repo-sftp-known-host`）

SFTP 已知主机文件。

身份验证期间，在此文件中搜索 SFTP 主机匹配项。若未指定，pgBackRest 默认搜索 `~/.ssh/known_hosts`、`~/.ssh/known_hosts2`、`/etc/ssh/ssh_known_hosts` 和 `/etc/ssh/ssh_known_hosts2`。若配置了一个或多个文件路径，pgBackRest 将在这些路径中搜索匹配项。文件路径必须是完整路径或以波浪号开头的路径。此选项可以多次传入，以指定多个已知主机文件进行搜索。要使用已知主机文件检查，不得指定 `repo-sftp-host-fingerprint`。另请参阅 `repo-sftp-host-check-type` 选项。

```
example: repo1-sftp-known-host=/home/postgres/.ssh/known_hosts
```

### SFTP 仓库私钥文件选项（`--repo-sftp-private-key-file`）

SFTP 私钥文件。

用于身份验证的 SFTP 私钥文件。

```
example: repo1-sftp-private-key-file=~/.ssh/id_ed25519
```

### SFTP 仓库私钥密码选项（`--repo-sftp-private-key-passphrase`）

SFTP 私钥密码。

用于访问私钥的密码。在创建 SSH 公钥/私钥对时，这是一个可选功能。

```
example: repo1-sftp-private-key-passphrase=BeSureToGenerateAndUseASecurePassphrase
```

### SFTP 仓库公钥文件选项（`--repo-sftp-public-key-file`）

SFTP 公钥文件。

用于身份验证的 SFTP 公钥文件。若针对 OpenSSL 编译，此项为可选；若针对其他库编译，则为必填。

```
example: repo1-sftp-public-key-file=~/.ssh/id_ed25519.pub
```

### 仓库存储 CA 文件选项（`--repo-storage-ca-file`）

仓库存储 CA 文件。

连接存储（如 S3、Azure）时，使用非系统默认的 CA 文件。

```
example: repo1-storage-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

Deprecated Names: repo-azure-ca-file, repo-s3-ca-file

### 仓库存储 TLS CA 路径选项（`--repo-storage-ca-path`）

仓库存储 CA 路径。

连接存储（如 S3、Azure）时，使用非系统默认的 CA 路径。

```
example: repo1-storage-ca-path=/etc/pki/tls/certs
```

Deprecated Names: repo-azure-ca-path, repo-s3-ca-path

### 仓库存储主机选项（`--repo-storage-host`）

仓库存储主机。

连接到存储（如 S3、Azure）端点之外的其他主机。通常用于测试。

```
example: repo1-storage-host=127.0.0.1
```

Deprecated Names: repo-azure-host, repo-s3-host

### 仓库存储端口选项（`--repo-storage-port`）

仓库存储端口。

连接到存储（如 S3、Azure）端点（或指定主机）时使用的端口。

```
default: 443
allowed: [1, 65535]
example: repo1-storage-port=9000
```

Deprecated Names: repo-azure-port, repo-s3-port

### 仓库存储标签选项（`--repo-storage-tag`）

仓库存储标签。

当仓库为对象存储（如 S3）时，指定添加到对象上的标签。可重复使用此选项以添加多个标签。

pgBackRest 没有提供修改这些标签的功能，因此请在运行 `stanza-create` 之前正确设置，以确保整个仓库的标签统一。

```
example: repo1-storage-tag=key1=value1
```

### 仓库存储上传块大小选项（`--repo-storage-upload-chunk-size`）

仓库存储上传块大小。

当文件过大无法完全存储在内存中时，S3 等对象存储允许分块上传文件。即使文件可以存储在内存中，限制上传所用的内存量也更为高效。

较大的块大小通常可以提升性能，因为它会减少上传请求次数，并允许在单个请求中上传更多文件而非分块上传。缺点是内存使用量会更高——由于块缓冲区需要按进程分配，较大的 `process-max` 值将导致整体内存消耗更多。

请注意，有效的块大小因存储类型和平台而异。例如，AWS S3 的最小块大小为 5MiB。块大小的术语因存储类型而异，因此在搜索最小/最大值时，AWS S3 使用"part size"，GCS 使用"chunk size"，Azure 使用"block size"。

若文件大于 1GiB（PostgreSQL 默认创建的最大文件大小），则块大小将逐步增加直至允许的最大值，以完成文件上传。

```
default (depending on repo-type):
   azure - 4MiB
   gcs - 4MiB
   s3 - 5MiB

allow range (depending on repo-type):
   azure - [4MiB, 1GiB]
   gcs - [4MiB, 1GiB]
   s3 - [5MiB, 1GiB]

example: repo1-storage-upload-chunk-size=16MiB
```

### 仓库存储证书验证选项（`--repo-storage-verify-tls`）

仓库存储证书验证。

启用或禁用对存储（如 S3、Azure）服务端 TLS 证书的验证。禁用此选项仅应用于测试场景或使用自签名证书的情况。

```
default: y
example: repo1-storage-verify-tls=n
```

Deprecated Names: repo-azure-verify-tls, repo-s3-verify-ssl, repo-s3-verify-tls

### 仓库符号链接选项（`--repo-symlink`）

在仓库中创建符号链接。

启用 `latest` 和表空间符号链接的创建。这些符号链接在使用快照进行原地恢复时最为有用，这是一种不常见的使用场景。

此功能对绝大多数用户可能没有实际用途，但出于历史兼容性原因仍默认启用。对于不支持符号链接的类 Posix 存储，禁用符号链接可能是有益的。

```
default: y
example: repo1-symlink=n
```

### 仓库目标时间选项（`--repo-target-time`）

仓库的目标时间点。

目标时间定义了命令用于读取版本化存储上仓库的时间点。这允许命令以某个历史时间点的视角读取仓库，以恢复被用户误操作或恶意软件删除或损坏的数据。

版本化存储由 S3、GCS 和 Azure 支持，但通常默认不启用。除了启用版本控制外，为 S3 启用对象锁定，以及为 GCS 或 Azure 启用软删除也可能很有用。

指定 `repo-target-time` 选项时，必须同时提供 `repo` 选项。通常并非所有仓库类型都支持版本控制，一般建议针对单个仓库进行恢复。

注意，与存储时间戳的比较为小于等于（<=）所提供的时间戳，且提供的时间戳中的毫秒部分将被截断。

```
example: repo-target-time=2024-08-08 12:12:12+00
```

### 仓库类型选项（`--repo-type`）

仓库使用的存储类型。

支持以下仓库类型：

- `azure` - Azure Blob 存储服务
- `cifs` - 类似 `posix`，但禁用链接和目录 fsync
- `gcs` - Google Cloud Storage
- `posix` - 符合 Posix 规范的文件系统
- `s3` - AWS 简单存储服务（Simple Storage Service）
- `sftp` - 安全文件传输协议（SFTP）

当使用 NFS 挂载作为 `posix` 仓库时，适用于 pgBackRest 的规则与 PostgreSQL 文档中描述的相同，请参阅： [Creating a Database Cluster - File Systems](https://www.postgresql.org/docs/current/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM)。

```
default: posix
example: repo1-type=cifs
```

--------

## 恢复选项

`restore` 部分定义了用于恢复备份的设置。

### 归档模式选项（`--archive-mode`）

在已恢复的集群上保留或禁用归档。

此选项允许在已恢复的集群上保留或禁用归档。当集群必须被提升以执行某些操作，但不打算成为新的主库时，此选项很有用。在这种情况下，不应从该集群向仓库推送 WAL。

支持以下模式：

- `off` - 通过设置 `archive_mode=off` 禁用归档。
- `preserve` - 保留当前的 `archive_mode` 设置。

**注意**：此选项在 PostgreSQL 12 以下版本不可用。

```
default: preserve
example: archive-mode=off
```

### 排除数据库选项（`--db-exclude`）

排除指定数据库进行恢复。

被排除的数据库将以稀疏零填充文件的形式恢复，以节省空间，同时仍允许 PostgreSQL 执行恢复。恢复完成后，这些数据库将无法访问，但可以使用 `drop database` 命令将其删除。此选项可以多次传入，以指定多个要排除的数据库。

与 `--db-include` 选项一起使用时，`--db-exclude` 仅适用于标准系统数据库（`template0`、`template1` 和 `postgres`）。

```
example: db-exclude=db_main
```

### 包含数据库选项（`--db-include`）

仅恢复指定的数据库。

此功能允许仅恢复选定的数据库。未明确包含的数据库将以稀疏零填充文件的形式恢复，以节省空间，同时仍允许 PostgreSQL 执行恢复。恢复完成后，未包含的数据库将无法访问，但可以使用 `drop database` 命令将其删除。

注意：

内置数据库（`template0`、`template1` 和 `postgres`）始终会被恢复，除非被明确排除。

此选项可以多次传入，以指定多个要包含的数据库。

详细信息和注意事项请参阅 [**选择性数据库恢复**](/docs/pgbackrest/user-guide/#restore-selected-databases)。

```
example: db-include=db_main
```

### 链接全部选项（`--link-all`）

恢复所有符号链接。

默认情况下，符号链接的目录和文件在 `$PGDATA` 中被恢复为普通目录和文件。这是因为在不同于原始备份执行的系统上，将符号链接恢复到其原始目标位置可能不安全。此选项将完全按照原始系统中的状态恢复所有符号链接。

```
default: n
example: link-all=y
```

### 链接映射选项（`--link-map`）

修改符号链接的目标路径。

允许在恢复时更改符号链接的目标文件或路径。当恢复目标系统的存储布局与原始备份系统不同时，此选项很有用。

```
example: link-map=pg_xlog=/data/xlog
```

### 恢复选项设置（`--recovery-option`）

在 `postgresql.auto.conf` 或 `recovery.conf` 中设置选项。

有关 `postgresql.auto.conf` 或 `recovery.conf` 选项的详情，请参阅 [Server Configuration](https://www.postgresql.org/docs/current/runtime-config.html)（请选择对应的 PostgreSQL 版本）。此选项可以多次使用。

对于 PostgreSQL >= 12，选项将写入 `postgresql.auto.conf`。对于所有其他版本，选项将写入 `recovery.conf`。

注意：

`restore_command` 选项将自动生成，但可以通过此选项覆盖。请谨慎指定自定义 `restore_command`，因为 pgBackRest 本身已设计为处理此项。目标恢复选项（`recovery_target_name`、`recovery_target_time` 等）由 pgBackRest 自动生成，不应通过此选项设置。

由于 pgBackRest 在写入 `postgresql.auto.conf` 或 `recovery.conf` 文件后不会启动 PostgreSQL，因此在手动重启之前，始终可以编辑/检查 `postgresql.auto.conf` 或 `recovery.conf`。

```
example: recovery-option=primary_conninfo=db.mydomain.com
```

### 表空间映射选项（`--tablespace-map`）

将表空间恢复到指定目录。

在恢复期间将表空间移动到新位置。当副本或升级后的系统挂载点不同时，此功能很有用。

表空间位置不存储在 `pg_tablespace` 中，因此可以随意移动表空间。但不建议将表空间移动到 `data_directory`，这可能会导致问题。有关移动表空间的更多信息，http://www.databasesoup.com/2013/11/moving-tablespaces.html 是一个很好的参考资源。

```
example: tablespace-map=ts_01=/db/ts_01
```

### 所有表空间映射选项（`--tablespace-map-all`）

将所有表空间恢复到指定目录。

默认情况下，表空间被恢复到其原始位置。可以使用 `tablespace-map` 选项为每个表空间单独修改此行为，但有时将所有表空间一次性重新映射到新目录更为方便。这在开发或测试环境中尤为有用，因为这些环境的存储布局可能与生产环境不同。

指定的路径将作为父路径，用于创建备份中的所有表空间。

注意：

备份启动后创建的表空间将不会被映射。若需要表空间映射，请在创建表空间后执行新的备份。

```
example: tablespace-map-all=/data/tablespace
```

--------

## 服务端选项

`server` 部分定义了用于配置 TLS 服务端的选项。

### TLS 服务端地址选项（`--tls-server-address`）

TLS 服务端监听地址。

服务端监听客户端请求的 IP 地址。

```
default: localhost
example: tls-server-address=*
```

### TLS 服务端授权客户端选项（`--tls-server-auth`）

TLS 服务端授权客户端列表。

服务端通过验证客户端证书，将客户端证书 CN（Common Name，通用名称）与 `tls-server-auth` 选项配置的列表进行比对，来完成客户端授权。

可以通过向 `tls-server-auth` 选项提供逗号分隔的列表，为一个客户端 CN 授权多个 stanza；也可以通过指定 `tls-server-auth=client-cn=*` 授权所有 stanza。客户端 CN 不支持通配符。

```
example: tls-server-auth=client-cn=stanza1,stanza2
```

### TLS 服务端证书颁发机构选项（`--tls-server-ca-file`）

TLS 服务端证书颁发机构文件。

验证客户端证书是否由受信任的证书颁发机构签名。

```
example: tls-server-ca-file=/path/to/server.ca
```

### TLS 服务端证书选项（`--tls-server-cert-file`）

TLS 服务端证书文件。

发送给客户端以展示服务端身份。

```
example: tls-server-cert-file=/path/to/server.crt
```

### TLS 服务端密钥选项（`--tls-server-key-file`）

TLS 服务端密钥文件。

证明服务端证书由所有者发送。

```
example: tls-server-key-file=/path/to/server.key
```

### TLS 服务端端口选项（`--tls-server-port`）

TLS 服务端监听端口。

服务端监听客户端请求的端口。

```
default: 8432
allowed: [1, 65535]
example: tls-server-port=8000
```

--------

## Stanza 选项

stanza（stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称）定义了特定 PostgreSQL 数据库集群的备份配置。stanza 部分必须定义数据库集群路径，若数据库集群为远程，则还需定义主机/用户信息。此外，任何全局配置部分均可被覆盖，以定义 stanza 特定的设置。

**索引**：所有 `pg-` 选项均带有索引，以支持配置多个 PostgreSQL 主机。例如，单个主库通过 `pg1-path`、`pg1-port` 等选项进行配置。若配置了备库，则在仓库主机上将 `pg-` 选项索引为 `pg2-`（如 `pg2-host`、`pg2-path` 等）。

### PostgreSQL 数据库选项（`--pg-database`）

连接 PostgreSQL 时使用的数据库名称。

默认值通常是最佳选择，但某些安装可能不包含此数据库。

注意，出于历史兼容性原因，`PGDATABASE` 环境变量的设置将被忽略。

```
default: postgres
example: pg1-database=backupdb
```

### PostgreSQL 主机选项（`--pg-host`）

远程操作时的 PostgreSQL 主机。

用于 PostgreSQL 主机与仓库主机不同的备份场景。

```
example: pg1-host=db.domain.com
```

Deprecated Name: db-host

### PostgreSQL 主机证书颁发机构文件选项（`--pg-host-ca-file`）

PostgreSQL 主机证书颁发机构文件。

连接到 PostgreSQL 主机时，使用非系统默认的 CA 文件。

```
example: pg1-host-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

### PostgreSQL 主机证书颁发机构路径选项（`--pg-host-ca-path`）

PostgreSQL 主机证书颁发机构路径。

连接到 PostgreSQL 主机时，使用非系统默认的 CA 路径。

```
example: pg1-host-ca-path=/etc/pki/tls/certs
```

### PostgreSQL 主机证书文件选项（`--pg-host-cert-file`）

PostgreSQL 主机证书文件。

发送给 PostgreSQL 主机以证明客户端身份。

```
example: pg1-host-cert-file=/path/to/client.crt
```

### PostgreSQL 主机命令选项（`--pg-host-cmd`）

PostgreSQL 主机上的 pgBackRest 命令路径。

仅当本地主机和 PostgreSQL 主机上的 pgBackRest 命令路径不同时才需要设置。若未定义，PostgreSQL 主机命令将与本地命令相同。

```
default: [path of executed pgbackrest binary]
example: pg1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

Deprecated Name: db-cmd

### PostgreSQL 主机配置选项（`--pg-host-config`）

PostgreSQL 主机上的 pgBackRest 配置文件路径。

设置 PostgreSQL 主机上配置文件的位置。仅当 PostgreSQL 主机上的配置文件与本地配置文件位于不同位置时才需要设置。

```
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: pg1-host-config=/conf/pgbackrest/pgbackrest.conf
```

Deprecated Name: db-config

### PostgreSQL 主机配置包含路径选项（`--pg-host-config-include-path`）

PostgreSQL 主机上的 pgBackRest 配置包含路径。

设置 PostgreSQL 主机上配置包含路径的位置。仅当 PostgreSQL 主机上的配置包含路径与本地配置包含路径位于不同位置时才需要设置。

```
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: pg1-host-config-include-path=/conf/pgbackrest/conf.d
```

### PostgreSQL 主机配置路径选项（`--pg-host-config-path`）

PostgreSQL 主机上的 pgBackRest 配置路径。

设置 PostgreSQL 主机上配置路径的位置。仅当 PostgreSQL 主机上的配置路径与本地配置路径位于不同位置时才需要设置。

```
default: CFGOPTDEF_CONFIG_PATH
example: pg1-host-config-path=/conf/pgbackrest
```

### PostgreSQL 主机密钥文件选项（`--pg-host-key-file`）

PostgreSQL 主机密钥文件。

证明客户端证书由所有者发送。

```
example: pg1-host-key-file=/path/to/client.key
```

### PostgreSQL 主机端口选项（`--pg-host-port`）

PostgreSQL 主机端口。

设置 `pg-host` 时，使用此选项为 PostgreSQL 主机协议指定非默认端口。

注意：

当 `pg-host-type=ssh` 时，`pg-host-port` 没有默认值。此时端口将使用 `cmd-ssh` 指定命令所配置的端口。

```
default (depending on pg-host-type):
   tls - 8432

allowed: [0, 65535]
example: pg1-host-port=25
```

Deprecated Name: db-ssh-port

### PostgreSQL 主机协议类型选项（`--pg-host-type`）

PostgreSQL 主机协议类型。

支持以下协议类型：

- `ssh` - 安全外壳协议（Secure Shell）。
- `tls` - pgBackRest TLS 服务端。

```
default: ssh
example: pg1-host-type=tls
```

### PostgreSQL 主机用户选项（`--pg-host-user`）

PostgreSQL 主机登录用户。

设置 `pg-host` 时，指定此用户。该用户还将拥有远程 pgBackRest 进程，并将发起到 PostgreSQL 的连接。为使其正常工作，该用户应为 PostgreSQL 数据库集群的所有者，通常为 `postgres`（即默认值）。

```
default: postgres
example: pg1-host-user=db_owner
```

Deprecated Name: db-user

### PostgreSQL 路径选项（`--pg-path`）

PostgreSQL 数据目录。

应与 PostgreSQL 报告的 `data_directory` 相同。尽管可以从多处读取此值，但为防止在恢复或离线备份场景中这些资源不可用，建议在配置文件中明确设置。

每次在线备份时，`pg-path` 选项都会与 PostgreSQL 报告的值进行比对，因此应始终保持最新。

```
example: pg1-path=/data/db
```

Deprecated Name: db-path

### PostgreSQL 端口选项（`--pg-port`）

PostgreSQL 端口。

PostgreSQL 运行的端口。由于大多数 PostgreSQL 集群使用默认端口，通常不需要指定此选项。

```
default: 5432
allowed: [0, 65535]
example: pg1-port=6543
```

Deprecated Name: db-port

### PostgreSQL Unix 套接字路径选项（`--pg-socket-path`）

PostgreSQL Unix 套接字目录路径。

启动 PostgreSQL 时指定的 Unix 套接字目录。pgBackRest 会自动查找操作系统的标准位置，因此通常不需要指定此设置，除非通过 `postgresql.conf` 中的 `unix_socket_directories` 显式修改了套接字目录。

```
example: pg1-socket-path=/var/run/postgresql
```

Deprecated Name: db-socket-path

### PostgreSQL 数据库用户选项（`--pg-user`）

连接 PostgreSQL 时使用的数据库用户名。

若未指定，pgBackRest 将使用本地操作系统用户或 `PGUSER` 进行连接。

```
example: pg1-user=backupuser
```

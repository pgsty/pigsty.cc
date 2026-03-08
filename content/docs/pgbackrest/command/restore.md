---
title: "恢复命令（restore）"
linkTitle: "restore"
weight: 110
description: "pgBackRest `restore` 命令的选项与行为参考。"
icon: fa-solid fa-clock-rotate-left
module: [PGBACKREST]
categories: [参考]
---

> Source: [pgBackRest Command Docs: restore](https://pgbackrest.org/command.html#command-restore)

`restore` 命令默认从第一个存有备份的仓库中自动选取最新备份（参见 [**快速开始 - 恢复备份**](/docs/pgbackrest/user-guide/#恢复备份)）。仓库的检查顺序由 `pgbackrest.conf` 决定（例如先检查 repo1，再检查 repo2）。若要从特定仓库恢复，可使用 `--repo` 选项（例如 `--repo=1`）。若需恢复非最新的备份，可传入 `--set` 选项。

使用 `--type=time` 或 `--type=lsn` 进行 PITR（时间点恢复）时，必须通过 `--target` 选项指定目标时间或目标 LSN。若未通过 `--set` 选项指定备份集，系统将依次检查各仓库，查找包含所请求时间或 LSN 的备份。若未找到匹配备份，`--type=time` 将使用第一个存有备份的仓库中的最新备份，而 `--type=lsn` 则不会选择任何备份。对于其他类型的 PITR（如 `xid`），若目标早于最新备份，则必须通过 `--set` 选项明确指定备份集。详情及示例请参见 [**时间点恢复**](/docs/pgbackrest/user-guide/#时间点恢复)。

按照 PostgreSQL 的建议，复制槽不包含在恢复中。更多信息请参阅 PostgreSQL 文档中的 [**Backing Up The Data Directory**](https://www.postgresql.org/docs/current/continuous-archiving.html#BACKUP-LOWLEVEL-BASE-BACKUP-DATA)。

## 命令选项

### 归档模式选项（`--archive-mode`）

恢复后集群的归档模式设置。

此选项用于在恢复后的集群上保留或禁用归档功能。当集群必须被提升（promote）以执行某些操作，但并非打算成为新主库时，此选项非常有用——在这种情况下，将 WAL 从该集群推送到仓库并不合适。

支持以下模式：

- `off` - 通过设置 `archive_mode=off` 禁用归档。
- `preserve` - 保留当前的 `archive_mode` 设置。

> **注意：** 此选项不适用于 PostgreSQL < 12。

```yaml
default: preserve
example: --archive-mode=off
```

### 排除数据库选项（`--db-exclude`）

恢复时排除指定的数据库。

被排除的数据库将以稀疏清零文件的形式恢复，以节省空间，但仍允许 PostgreSQL 完成恢复过程。恢复完成后，这些数据库将无法访问，但可以用 `drop database` 命令将其删除。可多次传入 `--db-exclude` 选项以排除多个数据库。

与 `--db-include` 选项组合使用时，`--db-exclude` 仅适用于标准系统数据库（`template0`、`template1` 和 `postgres`）。

```yaml
example: --db-exclude=db_main
```

### 包含数据库选项（`--db-include`）

仅恢复指定的数据库。

此功能允许只恢复选定的数据库。未明确包含的数据库将以稀疏清零文件的形式恢复，以节省空间，但仍允许 PostgreSQL 完成恢复过程。恢复完成后，未包含的数据库将无法访问，但可以用 `drop database` 命令将其删除。

> **注意：** 内置数据库（`template0`、`template1` 和 `postgres`）始终会被恢复，除非被明确排除。

可多次传入 `--db-include` 选项以包含多个数据库。

更多信息及注意事项请参见 [**选择性数据库恢复**](/docs/pgbackrest/user-guide/#选择性数据库恢复)。

```yaml
example: --db-include=db_main
```

### 强制选项（`--force`）

强制执行恢复。

单独使用时，此选项将强制完全覆盖 PostgreSQL 数据目录及表空间路径。与 `--delta` 组合使用时，将基于时间戳/大小执行差量比对，而非使用校验和。

```yaml
default: n
example: --force
```

### 恢复全部链接选项（`--link-all`）

恢复所有符号链接。

默认情况下，链接的目录和文件将作为普通目录和文件恢复到 `$PGDATA` 中。这是因为在与原始备份环境不同的系统上，将符号链接恢复到其原始目标可能并不安全。启用此选项后，所有符号链接将按原始备份系统的方式完整恢复。

```yaml
default: n
example: --link-all
```

### 链接映射选项（`--link-map`）

修改符号链接的目标路径。

恢复时允许修改符号链接所指向的文件或路径。当恢复目标系统的存储布局与原始备份系统不同时，此选项非常有用。

```yaml
example: --link-map=pg_xlog=/data/xlog
```

### 恢复选项（`--recovery-option`）

在 `postgresql.auto.conf` 或 `recovery.conf` 中设置选项。

各选项的详细说明请参阅 PostgreSQL 的 [**服务器配置**](https://www.postgresql.org/docs/current/runtime-config.html) 文档（请确保选择对应的 PostgreSQL 版本）。此选项可多次使用。

对于 PostgreSQL >= 12，选项将写入 `postgresql.auto.conf`；对于旧版本，选项将写入 `recovery.conf`。

> **注意：** `restore_command` 选项由 pgBackRest 自动生成，但可通过此选项覆盖。请谨慎手动指定 `restore_command`，因为 pgBackRest 本身就是为处理该事项而设计的。目标恢复选项（`recovery_target_name`、`recovery_target_time` 等）由 pgBackRest 自动生成，不应通过此选项手动设置。

由于 pgBackRest 写入 `postgresql.auto.conf` 或 `recovery.conf` 文件后不会自动启动 PostgreSQL，在手动重启之前始终可以编辑或检查这些文件。

```yaml
example: --recovery-option=primary_conninfo=db.mydomain.com
```

### 备份集选项（`--set`）

要恢复的备份集。

指定要恢复的备份集。`latest` 表示恢复最新备份，否则请提供具体的备份名称。

```yaml
default: latest
example: --set=20150131-153358F_20150131-153401I
```

### 表空间映射选项（`--tablespace-map`）

将表空间恢复到指定目录。

恢复时将表空间移动到新位置。当备库或已升级系统上的表空间路径与原始系统不同时，此选项非常有用。

表空间位置不存储在 `pg_tablespace` 中，因此可以随意移动。但不建议将表空间移动到 `data_directory`，这可能会引发问题。关于移动表空间的更多信息，可参考 http://www.databasesoup.com/2013/11/moving-tablespaces.html。

```yaml
example: --tablespace-map=ts_01=/db/ts_01
```

### 映射全部表空间选项（`--tablespace-map-all`）

将所有表空间恢复到指定目录。

默认情况下，表空间将恢复到其原始位置。可通过 `--tablespace-map` 选项为每个表空间单独修改，但有时将所有表空间一次性重新映射到同一个新目录更为方便，在存储布局与原始备份系统不同的开发或测试环境中尤为如此。

指定的路径将作为父路径，备份中所有表空间的子目录都将在其下创建。

注意：

备份启动后创建的表空间不会被映射。如有表空间映射需求，请在创建表空间后重新进行一次备份。

```yaml
example: --tablespace-map-all=/data/tablespace
```

### 目标选项（`--target`）

恢复目标。

当 `--type` 为 `lsn`、`name`、`xid` 或 `time` 时，用于定义恢复目标。若目标早于最新备份且 `--type` 不是 `time` 或 `lsn`，则需使用 `--set` 选项指定备份集。

```yaml
example: --target=2015-01-30 14:15:11 EST
```

### 目标动作选项（`--target-action`）

到达恢复目标时的动作。

当 `hot_standby=on`（PostgreSQL 10 起的默认值）时，此选项统一控制集群在到达目标或归档中没有更多 WAL 时的行为。

当 PostgreSQL >= 12 且 `hot_standby=off` 时，`pause` 的行为等同于 `shutdown`。当 PostgreSQL < 12 且 `hot_standby=off` 时，`pause` 的行为等同于 `promote`。

支持以下动作：

- `pause` - 到达恢复目标时暂停。
- `promote` - 到达恢复目标时提升并切换时间线。
- `shutdown` - 到达恢复目标时关闭服务器（PostgreSQL >= 9.5）。

```yaml
default: pause
example: --target-action=promote
```

### 目标排他选项（`--target-exclusive`）

在到达恢复目标之前停止。

定义是否以排他方式恢复到目标（默认为包含目标），仅在 `--type` 为 `lsn`、`time` 或 `xid` 时有效。例如，当 `--type=xid` 且 `--target=1007` 时，指定 `--target-exclusive` 将排除事务 `1007` 的内容。更多信息请参阅 PostgreSQL 文档中的 `recovery_target_inclusive` 选项。

```yaml
default: n
example: --no-target-exclusive
```

### 目标时间线选项（`--target-timeline`）

沿指定时间线进行恢复。

更多信息请参阅 PostgreSQL 文档中的 `recovery_target_timeline`。

```yaml
example: --target-timeline=3
```

### 类型选项（`--type`）

恢复类型。

支持以下恢复类型：

- `default` - 恢复到归档流的末尾。
- `immediate` - 仅恢复到数据库达到一致性状态为止。
- `lsn` - 恢复到 `--target` 中指定的 LSN（日志序列号），仅支持 PostgreSQL >= 10。
- `name` - 恢复到 `--target` 中指定的恢复点名称。
- `xid` - 恢复到 `--target` 中指定的事务 ID。
- `time` - 恢复到 `--target` 中指定的时间。
- `preserve` - 保留现有的 `postgresql.auto.conf` 或 `recovery.conf` 文件。
- `standby` - 向 `postgresql.auto.conf` 或 `recovery.conf` 文件中添加 `standby_mode=on`，使集群以备库模式启动。
- `none` - 不写入 `postgresql.auto.conf` 或 `recovery.conf` 文件，PostgreSQL 将尝试使用 `pg_xlog`/`pg_wal` 中已有的 WAL 段达到一致性。请预先提供所需的 WAL 段，或通过 `archive-copy` 设置将其包含在备份中。

警告：

应避免使用 `type=none`，因为恢复结束时时间线不会递增。这可能导致 PostgreSQL 尝试归档重复的 WAL 段（会被拒绝），进而耗尽磁盘空间并引发 PostgreSQL panic。此外，`pg_rewind` 等工具可能无法正常工作，甚至可能造成数据损坏。

请注意，离线备份的默认恢复 `type` 为 `none`，因为当 `wal_level=minimal` 时无法进行时间点恢复。若明确设置了 `type`，则以该设置为准，因为只要 `wal_level > minimal`，即可从离线备份执行时间点恢复。

```yaml
default: default
example: --type=xid
```

## 通用选项

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

用于复制、压缩、加密等操作的缓冲区大小。实际使用的缓冲区数量取决于选项配置，每个操作可能占用额外内存，例如 `gz` 压缩可能额外使用 256KiB 内存。

允许值为 `16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```yaml
default: 1MiB
example: --buffer-size=2MiB
```

### pgBackRest 命令选项（`--cmd`）

pgBackRest 命令。

pgBackRest 在某些情况下需要生成命令字符串，例如 `restore` 命令生成 `restore_command` 设置时。此时将使用运行当前 pgBackRest 进程的命令，除非通过 `--cmd` 选项另行指定。

注意：

对 pgBackRest 命令进行封装可能导致不可预期的行为，不建议这样做。

```yaml
default: [path of executed pgbackrest binary]
example: --cmd=/var/lib/pgsql/bin/pgbackrest_wrapper.sh
```

### SSH 客户端命令选项（`--cmd-ssh`）

SSH 客户端命令。

当需要使用其他 SSH 客户端，或 `ssh` 命令不在 `$PATH` 中时，使用此选项指定特定的 SSH 客户端命令。

```yaml
default: ssh
example: --cmd-ssh=/usr/bin/ssh
```

### 网络压缩级别选项（`--compress-level-network`）

网络压缩级别。

当 `compress-type=none` 且命令不在仓库所在主机上运行时，设置网络传输的压缩级别。压缩用于减少网络流量。当 `compress-type` 不等于 `none` 时，`compress-level-network` 设置将被忽略，改用 `compress-level`，以避免文件被压缩两次。

```yaml
default: 1
allowed: [-5, 12]
example: --compress-level-network=1
```

### 配置文件选项（`--config`）

pgBackRest 配置文件。

使用此选项指定与默认路径不同的配置文件。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --config=/conf/pgbackrest/pgbackrest.conf
```

### 配置包含路径选项（`--config-include-path`）

附加 pgBackRest 配置文件的路径。

该路径下扩展名为 `.conf` 的配置文件将与 pgBackRest 主配置文件合并，形成完整的配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --config-include-path=/conf/pgbackrest/conf.d
```

### 配置基础路径选项（`--config-path`）

pgBackRest 配置文件的基础路径。

此设置用于覆盖 `--config` 和 `--config-include-path` 选项的默认基础路径，前提是这两个选项未在命令行中被显式指定。

例如，仅传入 `--config-path=/conf/pgbackrest` 时，`--config` 的默认值将变为 `/conf/pgbackrest/pgbackrest.conf`，`--config-include-path` 的默认值将变为 `/conf/pgbackrest/conf.d`。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --config-path=/conf/pgbackrest
```

### Delta 选项（`--delta`）

使用校验和进行恢复或备份。

恢复时，默认要求 PostgreSQL 数据目录和表空间目录已存在且为空。启用此选项后，将使用校验和执行差量恢复。

备份时，启用此选项将使用校验和而非时间戳来判断是否需要复制文件。

```yaml
default: n
example: --delta
```

### I/O 超时选项（`--io-timeout`）

I/O 超时时间。

连接及读/写操作的超时时间（秒）。

请注意，整个读/写操作不必在此超时时间内完成，但必须有*一定*进展，哪怕只传输了一个字节。

```yaml
default: 1m
allowed: [100ms, 1h]
example: --io-timeout=120
```

### 锁文件路径选项（`--lock-path`）

锁文件存储路径。

pgBackRest 将锁文件存储在此路径下，以防止并发运行相互冲突的操作。

```yaml
default: /tmp/pgbackrest
example: --lock-path=/backup/db/lock
```

### 中性 umask 选项（`--neutral-umask`）

使用中性 umask。

将 umask 设置为 0000，以合理的方式创建仓库中的文件权限。默认目录模式为 0750，默认文件模式为 0640。锁文件和日志目录的目录及文件模式分别为 0770 和 0660。

若要使用当前执行用户的 umask，请在配置文件中设置 `neutral-umask=n`，或在命令行中使用 `--no-neutral-umask`。

```yaml
default: y
example: --no-neutral-umask
```

### 进程优先级选项（`--priority`）

设置进程优先级。

定义内核调度器分配给该进程的优先级（即 niceness 值）。正值降低优先级，负值提高优先级。在大多数情况下，进程没有权限提高自身优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### 最大进程数选项（`--process-max`）

压缩/传输使用的最大进程数。

每个进程将执行压缩和传输以加快命令运行速度，但不要将 `process-max` 设置过高，以免影响数据库性能。

```yaml
default: 1
allowed: [1, 999]
example: --process-max=4
```

### 协议超时选项（`--protocol-timeout`）

协议超时时间。

本地或远程进程在协议层等待接收新消息的超时时间（秒）。此设置可防止进程无限期等待消息。

> **注意：** `--protocol-timeout` 选项的值必须大于 `--db-timeout` 选项的值。

```yaml
default: 31m
allowed: [100ms, 7d]
example: --protocol-timeout=630
```

### 保活选项（`--sck-keep-alive`）

启用保活（keep-alive）。

在套接字连接上启用保活消息。

```yaml
default: y
example: --no-sck-keep-alive
```

### Stanza 选项（`--stanza`）

定义 stanza。

stanza（stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称）是对一个 PostgreSQL 数据库集群的配置，定义了集群所在位置、备份方式、归档选项等。大多数数据库服务器只有一个 PostgreSQL 集群，因此只有一个 stanza；备份服务器则为每个需要备份的集群各配置一个 stanza。

stanza 命名时容易直接使用主集群名称，但更好的做法是使用描述该集群中数据库用途的名称。由于 stanza 名称同时用于主库和所有副本，选择一个描述集群实际功能的名称（如 `app` 或 `dw`）比使用本地集群名称（如 `main` 或 `prod`）更为合适。

```yaml
example: --stanza=main
```

### TCP 保活计数选项（`--tcp-keep-alive-count`）

保活计数。

指定在连接被判定为失效之前，可以丢失的 TCP 保活消息数量。

此选项在支持 `TCP_KEEPCNT` 套接字选项的系统上可用。

```yaml
allowed: [1, 32]
example: --tcp-keep-alive-count=3
```

### TCP 保活空闲时间选项（`--tcp-keep-alive-idle`）

保活空闲时间。

指定在无网络活动持续多少秒后，操作系统应发送 TCP 保活消息。

此选项在支持 `TCP_KEEPIDLE` 套接字选项的系统上可用。

```yaml
allowed: [1, 3600]
example: --tcp-keep-alive-idle=60
```

### TCP 保活间隔选项（`--tcp-keep-alive-interval`）

保活间隔时间。

指定未收到确认的 TCP 保活消息在多少秒后应重新发送。

此选项在支持 `TCP_KEEPINTVL` 套接字选项的系统上可用。

```yaml
allowed: [1, 900]
example: --tcp-keep-alive-interval=30
```

### TLSv1.2 加密套件选项（`--tls-cipher-12`）

允许的 TLSv1.2 加密套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均已加密。默认情况下，与对象存储（如 S3）的连接也会加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整接受的加密套件。示例中的配置是合理的选择，除非有特定安全要求。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 加密套件选项（`--tls-cipher-13`）

允许的 TLSv1.3 加密套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均已加密。默认情况下，与对象存储（如 S3）的连接也会加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整接受的加密套件。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-13=TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256
```

## 日志选项

### 控制台日志级别选项（`--log-level-console`）

控制台日志级别。

支持以下日志级别：

- `off` - 不记录任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详情、信息、警告和错误
- `debug` - 记录调试信息、详情、信息、警告和错误
- `trace` - 记录跟踪信息（非常详细的调试信息）、调试信息、信息、警告和错误

```yaml
default: warn
example: --log-level-console=error
```

### 文件日志级别选项（`--log-level-file`）

文件日志级别。

支持以下日志级别：

- `off` - 不记录任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详情、信息、警告和错误
- `debug` - 记录调试信息、详情、信息、警告和错误
- `trace` - 记录跟踪信息（非常详细的调试信息）、调试信息、信息、警告和错误

```yaml
default: info
example: --log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

标准错误输出日志级别。

指定哪些日志级别输出到 `stderr` 而非 `stdout`（由 `--log-level-console` 指定）。时间戳和进程信息不会输出到 `stderr`。

支持以下日志级别：

- `off` - 不记录任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详情、信息、警告和错误
- `debug` - 记录调试信息、详情、信息、警告和错误
- `trace` - 记录跟踪信息（非常详细的调试信息）、调试信息、信息、警告和错误

```yaml
default: off
example: --log-level-stderr=error
```

### 日志路径选项（`--log-path`）

日志文件存储路径。

pgBackRest 将日志文件存储在此路径下。请注意，若 `log-level-file=off`，则无需配置日志路径。

```yaml
default: /var/log/pgbackrest
example: --log-path=/backup/db/log
```

### 子进程日志选项（`--log-subprocess`）

启用子进程日志记录。

为当前进程创建的所有子进程启用文件日志记录，日志级别使用 `--log-level-file` 指定的值。

```yaml
default: n
example: --log-subprocess
```

### 日志时间戳选项（`--log-timestamp`）

启用日志时间戳。

在控制台和文件日志中启用时间戳。此选项在生成文档等特殊场景下会被禁用。

```yaml
default: y
example: --no-log-timestamp
```

## 维护者选项

### 强制指定 PostgreSQL 版本选项（`--pg-version-force`）

强制指定 PostgreSQL 版本。

使用指定的 PostgreSQL 版本，而非通过读取 `pg_control` 或 WAL 头部自动检测到的版本。此选项主要用于 PostgreSQL 分支版本或开发版本，因为这些版本中上述值可能与正式发布版本不同。PostgreSQL 通过 `server_version_num` 报告的版本必须与强制指定的版本一致。

警告：

使用此选项时需谨慎，因为 `pg_control` 和 WAL 头部仍将按指定版本的预期格式读取，即来自官方开源 PostgreSQL 版本的格式。若分支版本或开发版本更改了 pgBackRest 所依赖字段的格式，将导致不可预期的行为。一般而言，只有当分支在标准 PostgreSQL 成员*之后*添加所有自定义结构成员时，此选项才能按预期工作。

```yaml
example: --pg-version-force=15
```

## 仓库选项

### 指定仓库选项（`--repo`）

设置仓库。

指定命令操作的目标仓库。

例如，可使用此选项从特定仓库执行恢复，而非让 pgBackRest 自动选择。

```yaml
allowed: [1, 256]
example: --repo=1
```

### Azure 仓库容器选项（`--repo-azure-container`）

Azure 仓库容器。

用于存储仓库的 Azure 容器。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在容器根目录，但通常建议指定一个前缀（如 `/repo`），以便日志和其他 Azure 生成的内容也可以存储在同一容器中。

```yaml
example: --repo1-azure-container=pg-backup
```

### Azure 仓库密钥类型选项（`--repo-azure-key-type`）

Azure 仓库密钥类型。

支持以下授权类型：

- `shared` - 共享密钥
- `sas` - 共享访问签名
- `auto` - 使用 Azure 托管标识自动授权

```yaml
default: shared
example: --repo1-azure-key-type=sas
```

### Azure 仓库 URI 风格选项（`--repo-azure-uri-style`）

Azure URI 风格。

支持以下 URI 风格：

- `host` - 连接到 `account.endpoint` 主机。
- `path` - 连接到 `endpoint` 主机并在 URI 中添加账户前缀。

```yaml
default: host
example: --repo1-azure-uri-style=path
```

### 仓库加密类型选项（`--repo-cipher-type`）

用于加密仓库的加密算法。

支持以下加密类型：

- `none` - 仓库不加密
- `aes-256-cbc` - 256 位密钥长度的高级加密标准

请注意，即使仓库类型（如 S3）本身支持加密，加密也始终在客户端执行。

```yaml
default: none
example: --repo1-cipher-type=aes-256-cbc
```

### GCS 仓库存储桶选项（`--repo-gcs-bucket`）

GCS 仓库存储桶。

用于存储仓库的 GCS 存储桶。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录，但通常建议指定一个前缀（如 `/repo`），以便日志和其他 GCS 生成的内容也可以存储在同一存储桶中。

```yaml
example: --repo1-gcs-bucket=/pg-backup
```

### GCS 仓库端点选项（`--repo-gcs-endpoint`）

GCS 仓库端点。

用于连接存储服务的端点。可更新为使用本地 GCS 服务器或备用端点。

```yaml
default: storage.googleapis.com
example: --repo1-gcs-endpoint=localhost
```

### GCS 仓库密钥类型选项（`--repo-gcs-key-type`）

GCS 仓库密钥类型。

支持以下授权类型：

- `auto` - 使用实例服务账号自动授权。
- `service` - 使用本地存储的密钥文件中的服务账号。
- `token` - 用于本地测试，如 `fakegcs`。

当 `repo-gcs-key-type=service` 时，凭据将在身份验证令牌续期时重新加载。

```yaml
default: service
example: --repo1-gcs-key-type=auto
```

### GCS 仓库项目 ID 选项（`--repo-gcs-user-project`）

GCS 项目 ID。

用于确定请求计费归属的 GCS 项目 ID。

```yaml
example: --repo1-gcs-user-project=my-project
```

### 仓库主机选项（`--repo-host`）

远程操作时的仓库主机。

备份和归档到本地挂载的文件系统时，无需此设置。

```yaml
example: --repo1-host=repo1.domain.com
```

已弃用名称：backup-host

### 仓库主机证书颁发机构文件选项（`--repo-host-ca-file`）

仓库主机证书颁发机构文件。

连接仓库主机时使用非系统默认的 CA 文件。

```yaml
example: --repo1-host-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

### 仓库主机证书颁发机构路径选项（`--repo-host-ca-path`）

仓库主机证书颁发机构路径。

连接仓库主机时使用非系统默认的 CA 路径。

```yaml
example: --repo1-host-ca-path=/etc/pki/tls/certs
```

### 仓库主机证书文件选项（`--repo-host-cert-file`）

仓库主机证书文件。

发送给仓库主机以证明客户端身份。

```yaml
example: --repo1-host-cert-file=/path/to/client.crt
```

### 仓库主机命令选项（`--repo-host-cmd`）

仓库主机 pgBackRest 命令。

仅当本地主机与仓库主机上的 pgBackRest 命令路径不同时才需要设置。若未定义，仓库主机命令将与本地命令相同。

```yaml
default: [path of executed pgbackrest binary]
example: --repo1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：backup-cmd

### 仓库主机配置文件选项（`--repo-host-config`）

pgBackRest 仓库主机配置文件。

设置仓库主机上配置文件的位置。仅当仓库主机上的配置文件与本地配置文件位于不同路径时才需要此设置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --repo1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：backup-config

### 仓库主机配置包含路径选项（`--repo-host-config-include-path`）

pgBackRest 仓库主机配置包含路径。

设置仓库主机上配置包含路径的位置。仅当仓库主机上的配置包含路径与本地配置包含路径不同时才需要此设置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --repo1-host-config-include-path=/conf/pgbackrest/conf.d
```

### 仓库主机配置路径选项（`--repo-host-config-path`）

pgBackRest 仓库主机配置路径。

设置仓库主机上配置路径的位置。仅当仓库主机上的配置路径与本地配置路径不同时才需要此设置。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --repo1-host-config-path=/conf/pgbackrest
```

### 仓库主机密钥文件选项（`--repo-host-key-file`）

仓库主机密钥文件。

与客户端证书配合使用，证明证书由所有者发送。

```yaml
example: --repo1-host-key-file=/path/to/client.key
```

### 仓库主机端口选项（`--repo-host-port`）

设置了 `--repo-host` 时的仓库主机端口。

使用此选项为仓库主机协议指定非默认端口。

> **注意：** 当 `repo-host-type=ssh` 时，`--repo-host-port` 没有默认值，端口将使用 `--cmd-ssh` 指定命令所配置的端口。

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

- `ssh` - 安全外壳协议。
- `tls` - pgBackRest TLS 服务器。

```yaml
default: ssh
example: --repo1-host-type=tls
```

### 仓库主机用户选项（`--repo-host-user`）

设置了 `--repo-host` 时的仓库主机用户。

定义在仓库主机上执行操作所使用的用户。建议不要使用 `postgres` 用户，而改用 `pgbackrest` 等专用用户。若 PostgreSQL 运行在仓库主机上，可将 `postgres` 用户加入 `pgbackrest` 组，使其对仓库具有读权限，同时避免意外损坏仓库内容。

```yaml
default: pgbackrest
example: --repo1-host-user=repo-user
```

已弃用名称：backup-user

### 仓库路径选项（`--repo-path`）

备份和归档的存储路径。

仓库是 pgBackRest 存储备份和归档 WAL 段的位置。

提前估算所需空间可能比较困难。建议先进行几次备份，记录不同类型备份（全量/增量/差异）的大小，并测量每天产生的 WAL 量。这将给出大致的空间需求，但实际需求会随数据库的演变而变化。

```yaml
default: /var/lib/pgbackrest
example: --repo1-path=/backup/db/backrest
```

### S3 仓库存储桶选项（`--repo-s3-bucket`）

S3 仓库存储桶。

用于存储仓库的 S3 存储桶。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录，但通常建议指定一个前缀（如 `/repo`），以便日志和其他 AWS 生成的内容也可以存储在同一存储桶中。

```yaml
example: --repo1-s3-bucket=pg-backup
```

### S3 仓库端点选项（`--repo-s3-endpoint`）

S3 仓库端点。

AWS 端点应与所选区域匹配。

对于自定义或测试配置，可使用 `--repo-storage-ca-file`、`--repo-storage-ca-path`、`--repo-storage-host`、`--repo-storage-port` 和 `--repo-storage-verify-tls` 选项。

```yaml
example: --repo1-s3-endpoint=s3.amazonaws.com
```

### S3 仓库密钥类型选项（`--repo-s3-key-type`）

S3 仓库密钥类型。

支持以下类型：

- `shared` - 共享密钥
- `auto` - 自动获取临时凭据
- `web-id` - 自动获取 Web 身份凭据

```yaml
default: shared
example: --repo1-s3-key-type=auto
```

### S3 仓库 KMS 密钥 ID 选项（`--repo-s3-kms-key-id`）

S3 仓库 KMS 密钥。

使用指定的 AWS 密钥管理服务密钥启用 S3 服务器端加密。

```yaml
example: --repo1-s3-kms-key-id=bceb4f13-6939-4be3-910d-df54dee817b7
```

### S3 仓库区域选项（`--repo-s3-region`）

S3 仓库区域。

创建存储桶时所在的 AWS 区域。

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

当 `repo-s3-key-type=auto` 时，用于获取临时凭据的 AWS 角色名称（非完整 ARN）。

```yaml
example: --repo1-s3-role=authrole
```

### S3 仓库 URI 风格选项（`--repo-s3-uri-style`）

S3 URI 风格。

支持以下 URI 风格：

- `host` - 连接到 `bucket.endpoint` 主机。
- `path` - 连接到 `endpoint` 主机并在 URI 中添加存储桶前缀。

```yaml
default: host
example: --repo1-s3-uri-style=path
```

### SFTP 仓库主机选项（`--repo-sftp-host`）

SFTP 仓库主机。

包含仓库的 SFTP 主机。

```yaml
example: --repo1-sftp-host=sftprepo.domain
```

### SFTP 仓库主机指纹选项（`--repo-sftp-host-fingerprint`）

SFTP 仓库主机指纹。

SFTP 仓库主机指纹的生成方式应与 `--repo-sftp-host-key-hash-type` 匹配。通过以下命令生成指纹：`awk '{print $2}' ssh_host_xxx_key.pub | base64 -d | (md5sum or sha1sum) -b`。SSH 主机密钥通常位于 `/etc/ssh` 目录中。

```yaml
example: --repo1-sftp-host-fingerprint=f84e172dfead7aeeeae6c1fdfb5aa8cf
```

### SFTP 主机密钥检查类型选项（`--repo-sftp-host-key-check-type`）

SFTP 主机密钥检查类型。

支持以下 SFTP 主机密钥检查类型：

- `strict` - pgBackRest 不会自动将主机密钥添加到 `~/.ssh/known_hosts` 文件，且拒绝连接主机密钥已更改或不在已知主机文件中的主机。此选项强制用户手动添加所有新主机。
- `accept-new` - pgBackRest 将自动将新主机密钥添加到用户的已知主机文件，但不允许连接主机密钥已更改的主机。
- `fingerprint` - pgBackRest 将根据 `--repo-sftp-host-fingerprint` 选项指定的指纹来验证主机密钥。
- `none` - 不执行主机密钥检查。

```yaml
default: strict
example: --repo1-sftp-host-key-check-type=accept-new
```

### SFTP 仓库主机密钥哈希类型选项（`--repo-sftp-host-key-hash-type`）

SFTP 仓库主机密钥哈希类型。

声明在 SSH 启动时用于计算远程系统主机密钥摘要的哈希类型。较新版本的 `libssh2` 除支持 md5 和 sha1 外，还支持 `sha256`。

```yaml
example: --repo1-sftp-host-key-hash-type=sha256
```

### SFTP 仓库主机端口选项（`--repo-sftp-host-port`）

SFTP 仓库主机端口。

```yaml
default: 22
allowed: [1, 65535]
example: --repo1-sftp-host-port=22
```

### SFTP 仓库主机用户选项（`--repo-sftp-host-user`）

SFTP 仓库主机用户。

用于存储仓库的主机上的用户名。

```yaml
example: --repo1-sftp-host-user=pg-backup
```

### SFTP 已知主机文件选项（`--repo-sftp-known-host`）

SFTP 已知主机文件。

身份验证期间用于搜索 SFTP 主机匹配项的已知主机文件。若未指定，pgBackRest 将默认搜索 `~/.ssh/known_hosts`、`~/.ssh/known_hosts2`、`/etc/ssh/ssh_known_hosts` 和 `/etc/ssh/ssh_known_hosts2`。若配置了一个或多个文件路径，pgBackRest 将在这些路径中搜索匹配项。文件路径必须是完整路径或以波浪号开头的路径。可多次传入 `--repo-sftp-known-host` 选项以指定多个已知主机文件。使用已知主机文件检查时，不得同时指定 `--repo-sftp-host-fingerprint`。另请参阅 `--repo-sftp-host-check-type` 选项。

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

用于身份验证的 SFTP 公钥文件。针对 OpenSSL 编译时为可选，针对其他库编译时为必填。

```yaml
example: --repo1-sftp-public-key-file=~/.ssh/id_ed25519.pub
```

### 仓库存储 CA 文件选项（`--repo-storage-ca-file`）

仓库存储 CA 文件。

为存储（如 S3、Azure）证书使用非系统默认的 CA 文件。

```yaml
example: --repo1-storage-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

已弃用名称：repo-azure-ca-file, repo-s3-ca-file

### 仓库存储 TLS CA 路径选项（`--repo-storage-ca-path`）

仓库存储 CA 路径。

为存储（如 S3、Azure）证书使用非系统默认的 CA 路径。

```yaml
example: --repo1-storage-ca-path=/etc/pki/tls/certs
```

已弃用名称：repo-azure-ca-path, repo-s3-ca-path

### 仓库存储主机选项（`--repo-storage-host`）

仓库存储主机。

连接到存储（如 S3、Azure）端点以外的主机，通常用于测试目的。

```yaml
example: --repo1-storage-host=127.0.0.1
```

已弃用名称：repo-azure-host, repo-s3-host

### 仓库存储端口选项（`--repo-storage-port`）

仓库存储端口。

连接到存储（如 S3、Azure）端点（或指定主机）时使用的端口。

```yaml
default: 443
allowed: [1, 65535]
example: --repo1-storage-port=9000
```

已弃用名称：repo-azure-port, repo-s3-port

### 仓库存储标签选项（`--repo-storage-tag`）

仓库存储标签。

当仓库为对象存储（如 S3）时，指定添加到对象上的标签。可重复使用此选项添加多个标签。

pgBackRest 不提供修改这些标签的功能，因此请在运行 `stanza-create` 之前确保标签已正确设置，以保证整个仓库的标签统一。

```yaml
example: --repo1-storage-tag=key1=value1
```

### 仓库存储上传分块大小选项（`--repo-storage-upload-chunk-size`）

仓库存储上传分块大小。

对象存储（如 S3）允许在文件过大无法存入内存时分块上传。即使文件可以存入内存，限制单次上传占用的内存量也更为高效。

较大的块大小通常可以带来更好的性能，因为它减少了上传请求数量，允许在单个请求中上传更多数据而非分块处理。其缺点是内存占用更高——由于块缓冲区必须按进程分配，`--process-max` 值越大，整体内存消耗越多。

请注意，有效的块大小因存储类型和平台而异。例如，AWS S3 的最小块大小为 5MiB。各存储类型对块大小的术语也不同，因此搜索最小/最大值时，AWS S3 请使用"part size"，GCS 请使用"chunk size"，Azure 请使用"block size"。

如果文件大于 1GiB（PostgreSQL 默认创建的最大文件大小），块大小将逐步增加到允许的最大值，以完成文件上传。

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

启用或禁用存储（如 S3、Azure）服务器的 TLS 证书验证。仅在测试场景或使用自签名证书时才应禁用验证。

```yaml
default: y
example: --no-repo1-storage-verify-tls
```

已弃用名称：repo-azure-verify-tls, repo-s3-verify-ssl, repo-s3-verify-tls

### 仓库目标时间选项（`--repo-target-time`）

仓库目标时间。

定义命令读取版本化存储上的仓库所使用的时间点。这允许命令读取某个历史时间点的仓库状态，以便恢复因用户误操作或恶意软件而被删除或损坏的数据。

S3、GCS 和 Azure 均支持版本化存储，但通常默认不启用。除启用版本控制外，还可以考虑为 S3 启用对象锁定，为 GCS 或 Azure 启用软删除。

指定 `--repo-target-time` 时，还必须提供 `--repo` 选项。并非所有仓库类型都支持版本控制，通常针对单个仓库进行恢复更为合理。

请注意，与存储时间戳的比较使用 `<=` 关系，且提供的时间戳中的毫秒部分将被截断。

```yaml
example: --repo-target-time=2024-08-08 12:12:12+00
```

### 仓库类型选项（`--repo-type`）

仓库使用的存储类型。

支持以下仓库类型：

- `azure` - Azure Blob 存储服务
- `cifs` - 类似 `posix`，但禁用链接和目录 fsync
- `gcs` - Google Cloud Storage
- `posix` - 符合 POSIX 标准的文件系统
- `s3` - AWS 简单存储服务
- `sftp` - 安全文件传输协议

使用 NFS 挂载作为 `posix` 仓库时，适用规则与 PostgreSQL 文档中描述的相同：[**创建数据库集群 - 文件系统**](https://www.postgresql.org/docs/current/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM)。

```yaml
default: posix
example: --repo1-type=cifs
```

## Stanza 选项

### PostgreSQL 路径选项（`--pg-path`）

PostgreSQL 数据目录。

此路径应与 PostgreSQL 报告的 `data_directory` 一致。尽管可以从多处读取此值，但在恢复或离线备份场景中这些来源可能不可用，因此建议在配置文件中明确设置。

`--pg-path` 选项在每次在线备份时都会与 PostgreSQL 报告的值进行验证，因此应始终保持最新。

```yaml
example: --pg1-path=/data/db
```

已弃用名称：db-path

---
title: "归档获取命令（archive-get）"
linkTitle: "archive-get"
weight: 20
description: "pgBackRest `archive-get` 命令的选项与行为参考。"
icon: fa-solid fa-cloud-arrow-down
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： [pgBackRest Command Docs: archive-get](https://pgbackrest.org/command.html#command-archive-get)

PostgreSQL 通过此命令执行备份恢复、PITR，或将其作为流复制的替代方式来维持副本同步。WAL 段是 PostgreSQL 执行恢复或维护副本的必要条件。

配置多个仓库时，pgBackRest 按优先级顺序（如 `repo1`、`repo2` 等）依次从各仓库获取 WAL。速度更快或成本更低的存储应配置更高的优先级。若通过 `--repo` 选项指定了某个仓库，则仅从该仓库中查找。

`archive-get` 命令由 pgBackRest 在恢复过程中自动配置并生成，供 PostgreSQL 使用。相关示例请参见 [**时间点恢复**](/docs/pgbackrest/user-guide/#时间点恢复)。

## 命令选项

### 异步归档选项（`--archive-async`）

异步推送/获取 WAL 段。

启用 `archive-push` 和 `archive-get` 命令的异步操作模式。

异步模式效率更高，可复用连接并充分利用并行处理。更多信息请参见 `spool-path`、`archive-get-queue-max` 和 `archive-push-queue-max` 选项。

```yaml
default: n
example: --archive-async
```

### 归档获取最大队列大小选项（`--archive-get-queue-max`）

`archive-get` 队列的最大容量。

指定启用 `archive-async` 时 `archive-get` 队列的最大容量。队列存储在 `spool-path` 中，用于加速向 PostgreSQL 提供 WAL。

```yaml
default: 128MiB
allowed: [0B, 4PiB]
example: --archive-get-queue-max=1GiB
```

### 重试缺失 WAL 段选项（`--archive-missing-retry`）

重试缺失的 WAL 段。

在异步模式下，对之前被 `archive-get` 命令标记为缺失的 WAL 段进行重试。此选项可防止使用缓冲区路径中来自先前恢复的通知，避免在尚未达到一致性状态时导致恢复失败。

禁用此选项后，PostgreSQL 可以更可靠地识别归档中 WAL 的结束位置，从而切换到从主库进行流复制。若启用重试，持续的 WAL 归档流会使 PostgreSQL 继续从归档获取 WAL，而不切换到流复制。

禁用此选项时，务必确保 stanza 的缓冲区路径为空。若恢复时已配置缓冲区路径，`restore` 命令会自动清空；否则需要手动清空。

```yaml
default: y
example: --no-archive-missing-retry
```

### 归档超时选项（`--archive-timeout`）

归档超时时间。

设置等待每个 WAL 段到达 pgBackRest 归档仓库的最长时间（秒）。此超时适用于 `check` 和 `backup` 命令在等待备份一致性所需的 WAL 段完成归档时。

```yaml
default: 1m
allowed: [100ms, 1d]
example: --archive-timeout=30
```

## 通用选项

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

用于复制、压缩、加密等操作的缓冲区大小。实际占用的缓冲区数量取决于具体选项，每个操作可能额外消耗内存，例如 `gz` 压缩可能额外占用 256KiB 内存。

允许的值为：`16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```yaml
default: 1MiB
example: --buffer-size=2MiB
```

### pgBackRest 命令选项（`--cmd`）

pgBackRest 命令路径。

pgBackRest 在某些场景下需要生成命令字符串，例如 `restore` 命令生成 `restore_command` 配置时。若未提供 `cmd` 选项，则使用当前运行的 pgBackRest 进程路径。

注意：

对 pgBackRest 命令进行包装可能导致不可预期的行为，不建议使用。

```yaml
default: [path of executed pgbackrest binary]
example: --cmd=/var/lib/pgsql/bin/pgbackrest_wrapper.sh
```

### SSH 客户端命令选项（`--cmd-ssh`）

SSH 客户端命令。

当需要使用特定的 SSH 客户端，或 `ssh` 命令不在 $PATH 中时，使用此选项指定。

```yaml
default: ssh
example: --cmd-ssh=/usr/bin/ssh
```

### 网络压缩级别选项（`--compress-level-network`）

网络压缩级别。

当 `compress-type=none` 且命令不在仓库所在主机上运行时，通过此选项设置网络传输的压缩级别，以减少网络流量。若 `compress-type` 不等于 `none`，则忽略 `compress-level-network`，改用 `compress-level`，避免对文件进行二次压缩。

```yaml
default: 1
allowed: [-5, 12]
example: --compress-level-network=1
```

### 配置文件选项（`--config`）

pgBackRest 配置文件路径。

使用此选项指定非默认路径的配置文件。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --config=/conf/pgbackrest/pgbackrest.conf
```

### 配置包含路径选项（`--config-include-path`）

附加 pgBackRest 配置文件的目录路径。

该路径下扩展名为 `.conf` 的配置文件将与主配置文件合并，形成一份完整的配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --config-include-path=/conf/pgbackrest/conf.d
```

### 配置基础路径选项（`--config-path`）

pgBackRest 配置文件的基础路径。

用于覆盖 `--config` 和 `--config-include-path` 选项的默认基础路径，除非这两个选项已在命令行中显式指定。

例如，仅传入 `--config-path=/conf/pgbackrest` 时，`--config` 的默认值将变为 `/conf/pgbackrest/pgbackrest.conf`，`--config-include-path` 的默认值将变为 `/conf/pgbackrest/conf.d`。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --config-path=/conf/pgbackrest
```

### I/O 超时选项（`--io-timeout`）

I/O 超时时间。

用于连接及读/写操作的超时时间（秒）。

注意：整个读/写操作不必在此超时内全部完成，但**必须**持续有进展，哪怕每次只传输一个字节。

```yaml
default: 1m
allowed: [100ms, 1h]
example: --io-timeout=120
```

### 锁文件路径选项（`--lock-path`）

锁文件的存储路径。

pgBackRest 在此路径下创建锁文件，以防止冲突操作并发运行。

```yaml
default: /tmp/pgbackrest
example: --lock-path=/backup/db/lock
```

### 中性 umask 选项（`--neutral-umask`）

使用中性 umask。

将 umask 设置为 0000，使仓库中的文件和目录以合理的权限创建。默认目录权限为 0750，默认文件权限为 0640，锁文件和日志目录的权限分别为 0770 和 0660。

如需使用执行用户自身的 umask，请在配置文件中设置 `neutral-umask=n`，或在命令行使用 `--no-neutral-umask`。

```yaml
default: y
example: --no-neutral-umask
```

### 进程优先级选项（`--priority`）

设置进程优先级。

定义内核调度器赋予该进程的优先级（即 niceness 值）。正值降低优先级，负值提升优先级。普通进程在大多数情况下没有权限提升自身优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### 最大进程数选项（`--process-max`）

用于压缩/传输的最大进程数。

每个进程负责压缩和传输，可加快命令执行速度。但不应将 `process-max` 设置过高，以免影响数据库性能。

```yaml
default: 1
allowed: [1, 999]
example: --process-max=4
```

### 协议超时选项（`--protocol-timeout`）

协议超时时间。

设置本地或远端进程在协议层等待新消息的最长时间（秒），防止进程无限期阻塞等待。

> **注意：** `protocol-timeout` 选项的值必须大于 `db-timeout` 选项的值。

```yaml
default: 31m
allowed: [100ms, 7d]
example: --protocol-timeout=630
```

### 保活选项（`--sck-keep-alive`）

启用 keep-alive。

在 socket 连接上启用 keep-alive 消息。

```yaml
default: y
example: --no-sck-keep-alive
```

### 缓冲区路径选项（`--spool-path`）

临时数据的存储路径。

该路径用于存储异步 `archive-push` 和 `archive-get` 命令的数据。

异步 `archive-push` 命令在成功将 WAL 存入归档后，向缓冲区路径写入确认文件（失败时写入错误信息），以便前台进程快速通知 PostgreSQL。确认文件非常小——成功时为零字节，失败时仅几百字节。

异步 `archive-get` 命令会将 WAL 预取至缓冲区路径，以便在 PostgreSQL 请求时快速响应。缓冲区路径与 `pg_xlog`/`pg_wal` 位于同一文件系统时，文件移动效率最高。但不建议将缓冲区路径设置在 `pg_xlog`/`pg_wal` **目录内部**，否则可能导致 `pg_rewind` 等 PostgreSQL 工具出现问题。

缓冲区路径中存储的数据并非严格意义上的临时数据，重启后应当保留。不过，即使数据丢失也不成问题——pgBackRest 会重新检查每个 WAL 段以确认 `archive-push` 的归档安全性，并为 `archive-get` 重建队列。

缓冲区路径应位于本地 Posix 兼容文件系统上，而非 NFS 或 CIFS 等远程文件系统。

```yaml
default: /var/spool/pgbackrest
example: --spool-path=/backup/db/spool
```

### Stanza 选项（`--stanza`）

定义 stanza。

stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称，定义了集群的位置、备份方式、归档选项等。大多数数据库服务器只有一个 PostgreSQL 集群，因此只有一个 stanza；备份服务器则为每个需要备份的集群各配置一个 stanza。

命名 stanza 时，以主集群名称命名虽然直观，但更好的做法是描述集群所承载的业务内容。由于 stanza 名称同时用于主库和所有副本，选用描述集群实际功能的名称（如 `app` 或 `dw`）比使用本地集群名称（如 `main` 或 `prod`）更为合适。

```yaml
example: --stanza=main
```

### TCP 保活计数选项（`--tcp-keep-alive-count`）

Keep-Alive 探测包数量。

指定连接被判定为断开之前，允许丢失的 TCP keep-alive 消息数量。

此选项仅在支持 `TCP_KEEPCNT` socket 选项的系统上可用。

```yaml
allowed: [1, 32]
example: --tcp-keep-alive-count=3
```

### TCP 保活空闲时间选项（`--tcp-keep-alive-idle`）

Keep-Alive 空闲时间。

指定在无网络活动多少秒后，操作系统应发送 TCP keep-alive 消息。

此选项仅在支持 `TCP_KEEPIDLE` socket 选项的系统上可用。

```yaml
allowed: [1, 3600]
example: --tcp-keep-alive-idle=60
```

### TCP 保活间隔选项（`--tcp-keep-alive-interval`）

Keep-Alive 重传间隔。

指定未收到确认的 TCP keep-alive 消息在多少秒后进行重传。

此选项仅在支持 `TCP_KEEPINTVL` socket 选项的系统上可用。

```yaml
allowed: [1, 900]
example: --tcp-keep-alive-interval=30
```

### TLSv1.2 加密套件选项（`--tls-cipher-12`）

允许使用的 TLSv1.2 加密套件。

pgBackRest 客户端与服务端之间的所有 TLS 连接均已加密，默认情况下与对象存储（如 S3）的连接也使用加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许使用的加密套件。示例中的配置是合理选择，除非有特定安全要求。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 加密套件选项（`--tls-cipher-13`）

允许使用的 TLSv1.3 加密套件。

pgBackRest 客户端与服务端之间的所有 TLS 连接均已加密，默认情况下与对象存储（如 S3）的连接也使用加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许使用的加密套件。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-13=TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256
```

## 日志选项

### 控制台日志级别选项（`--log-level-console`）

控制台日志输出级别。

支持以下日志级别：

- `off` - 不输出任何日志（不推荐）
- `error` - 仅输出错误
- `warn` - 输出警告和错误
- `info` - 输出信息、警告和错误
- `detail` - 输出详情、信息、警告和错误
- `debug` - 输出调试、详情、信息、警告和错误
- `trace` - 输出追踪（极详细的调试信息）、调试、信息、警告和错误

```yaml
default: warn
example: --log-level-console=error
```

### 文件日志级别选项（`--log-level-file`）

文件日志输出级别。

支持以下日志级别：

- `off` - 不输出任何日志（不推荐）
- `error` - 仅输出错误
- `warn` - 输出警告和错误
- `info` - 输出信息、警告和错误
- `detail` - 输出详情、信息、警告和错误
- `debug` - 输出调试、详情、信息、警告和错误
- `trace` - 输出追踪（极详细的调试信息）、调试、信息、警告和错误

```yaml
default: info
example: --log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

stderr 日志输出级别。

指定哪些日志级别输出到 `stderr`（而非 `stdout`，后者由 `log-level-console` 控制）。时间戳和进程信息不会输出到 `stderr`。

支持以下日志级别：

- `off` - 不输出任何日志（不推荐）
- `error` - 仅输出错误
- `warn` - 输出警告和错误
- `info` - 输出信息、警告和错误
- `detail` - 输出详情、信息、警告和错误
- `debug` - 输出调试、详情、信息、警告和错误
- `trace` - 输出追踪（极详细的调试信息）、调试、信息、警告和错误

```yaml
default: off
example: --log-level-stderr=error
```

### 日志路径选项（`--log-path`）

日志文件的存储路径。

pgBackRest 将日志文件存储在此路径下。注意：若设置了 `log-level-file=off`，则无需配置日志路径。

```yaml
default: /var/log/pgbackrest
example: --log-path=/backup/db/log
```

### 子进程日志选项（`--log-subprocess`）

启用子进程日志记录。

为当前进程创建的子进程启用文件日志，使用 `log-level-file` 指定的日志级别。

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

使用指定的 PostgreSQL 版本，而非通过读取 `pg_control` 或 WAL 头部自动检测到的版本。此选项主要用于 PostgreSQL 分支版本或开发版本——这些版本中的相关值可能与正式发行版不同。PostgreSQL 通过 `server_version_num` 报告的版本必须与强制指定的版本一致。

警告：

使用此选项需谨慎。`pg_control` 和 WAL 头部仍会按指定版本的预期格式（即 PostgreSQL 官方开源版本的格式）进行读取。若分支或开发版本修改了 pgBackRest 所依赖字段的格式，将导致不可预期的行为。通常只有当分支在标准 PostgreSQL 成员**之后**添加自定义结构体成员时，此选项才能正常工作。

```yaml
example: --pg-version-force=15
```

## 仓库选项

### 指定仓库选项（`--repo`）

指定操作的目标仓库。

指定命令所操作的仓库。例如，可使用此选项从特定仓库执行恢复，而不是由 pgBackRest 自动选择。

```yaml
allowed: [1, 256]
example: --repo=1
```

### Azure 仓库容器选项（`--repo-azure-container`）

Azure 仓库容器名称。

用于存储仓库的 Azure 容器。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在容器根目录，但通常建议指定前缀（如 `/repo`），以便日志及其他 Azure 生成的内容也能存储在同一容器中。

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
- `path` - 连接到 `endpoint` 主机并在 URI 前添加账户名。

```yaml
default: host
example: --repo1-azure-uri-style=path
```

### 仓库加密类型选项（`--repo-cipher-type`）

仓库加密所用的密码算法。

支持以下加密类型：

- `none` - 仓库不加密
- `aes-256-cbc` - 256 位密钥长度的高级加密标准

注意：即使仓库类型（如 S3）本身支持加密，pgBackRest 的加密也始终在客户端执行。

```yaml
default: none
example: --repo1-cipher-type=aes-256-cbc
```

### GCS 仓库存储桶选项（`--repo-gcs-bucket`）

GCS 仓库存储桶名称。

用于存储仓库的 GCS 存储桶。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录，但通常建议指定前缀（如 `/repo`），以便日志及其他 GCS 生成的内容也能存储在同一存储桶中。

```yaml
example: --repo1-gcs-bucket=/pg-backup
```

### GCS 仓库端点选项（`--repo-gcs-endpoint`）

GCS 仓库端点地址。

用于连接存储服务的端点，可更新为本地 GCS 服务器或备用端点。

```yaml
default: storage.googleapis.com
example: --repo1-gcs-endpoint=localhost
```

### GCS 仓库密钥类型选项（`--repo-gcs-key-type`）

GCS 仓库密钥类型。

支持以下授权类型：

- `auto` - 使用实例服务账号授权。
- `service` - 使用本地存储的服务账号密钥。
- `token` - 用于本地测试，例如 `fakegcs`。

设置 `repo-gcs-key-type=service` 时，认证令牌续期时会重新加载凭证。

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

远程操作时的仓库主机地址。

若备份和归档目标为本地挂载的文件系统，则无需配置此选项。

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

向仓库主机发送，用于证明客户端身份。

```yaml
example: --repo1-host-cert-file=/path/to/client.crt
```

### 仓库主机命令选项（`--repo-host-cmd`）

仓库主机上的 pgBackRest 命令路径。

仅当本地主机与仓库主机上的 pgBackRest 命令路径不同时才需要配置。若未定义，仓库主机命令将与本地命令保持一致。

```yaml
default: [path of executed pgbackrest binary]
example: --repo1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：backup-cmd

### 仓库主机配置文件选项（`--repo-host-config`）

pgBackRest 仓库主机配置文件路径。

设置仓库主机上的配置文件位置。仅当仓库主机上的配置文件路径与本地不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --repo1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：backup-config

### 仓库主机配置包含路径选项（`--repo-host-config-include-path`）

pgBackRest 仓库主机配置包含路径。

设置仓库主机上配置包含路径的位置。仅当仓库主机上的配置包含路径与本地不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --repo1-host-config-include-path=/conf/pgbackrest/conf.d
```

### 仓库主机配置路径选项（`--repo-host-config-path`）

pgBackRest 仓库主机配置路径。

设置仓库主机上配置路径的位置。仅当仓库主机上的配置路径与本地不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --repo1-host-config-path=/conf/pgbackrest
```

### 仓库主机密钥文件选项（`--repo-host-key-file`）

仓库主机密钥文件。

用于证明客户端证书由所有者发送。

```yaml
example: --repo1-host-key-file=/path/to/client.key
```

### 仓库主机端口选项（`--repo-host-port`）

设置了 `repo-host` 时使用的仓库主机端口。

使用此选项为仓库主机协议指定非默认端口。

> **注意：** 当 `repo-host-type=ssh` 时，`repo-host-port` 没有默认值，端口由 `cmd-ssh` 指定的命令配置决定。

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

- `ssh` - 安全外壳协议（SSH）。
- `tls` - pgBackRest TLS 服务器。

```yaml
default: ssh
example: --repo1-host-type=tls
```

### 仓库主机用户选项（`--repo-host-user`）

设置了 `repo-host` 时使用的仓库主机用户。

定义在仓库主机上执行操作的用户。建议使用非 `postgres` 的专用用户（如 `pgbackrest`）。若 PostgreSQL 运行在仓库主机上，可将 `postgres` 用户加入 `pgbackrest` 组，使其具有仓库读取权限，同时避免意外损坏仓库内容。

```yaml
default: pgbackrest
example: --repo1-host-user=repo-user
```

已弃用名称：backup-user

### 仓库路径选项（`--repo-path`）

备份和归档的存储路径。

pgBackRest 在此仓库中存储备份并归档 WAL 段。

预估所需空间并不容易。建议先执行几次备份，记录不同类型备份（全量/增量/差异）的大小，并统计每天产生的 WAL 量，从而大致估算所需空间。随着数据库规模增长，需求也会随之变化。

```yaml
default: /var/lib/pgbackrest
example: --repo1-path=/backup/db/backrest
```

### S3 仓库存储桶选项（`--repo-s3-bucket`）

S3 仓库存储桶名称。

用于存储仓库的 S3 存储桶。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录，但通常建议指定前缀（如 `/repo`），以便日志及其他 AWS 生成的内容也能存储在同一存储桶中。

```yaml
example: --repo1-s3-bucket=pg-backup
```

### S3 仓库端点选项（`--repo-s3-endpoint`）

S3 仓库端点地址。

AWS 端点应与所选区域匹配。

对于自定义或测试配置，`repo-storage-ca-file`、`repo-storage-ca-path`、`repo-storage-host`、`repo-storage-port` 和 `repo-storage-verify-tls` 选项可能有所帮助。

```yaml
example: --repo1-s3-endpoint=s3.amazonaws.com
```

### S3 仓库密钥类型选项（`--repo-s3-key-type`）

S3 仓库密钥类型。

支持以下类型：

- `shared` - 共享密钥
- `auto` - 自动获取临时凭证
- `web-id` - 自动获取 Web 身份凭证

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

- `host` - 连接到 `bucket.endpoint` 主机。
- `path` - 连接到 `endpoint` 主机并在 URI 前添加存储桶名。

```yaml
default: host
example: --repo1-s3-uri-style=path
```

### SFTP 仓库主机选项（`--repo-sftp-host`）

SFTP 仓库主机地址。

包含仓库的 SFTP 主机。

```yaml
example: --repo1-sftp-host=sftprepo.domain
```

### SFTP 仓库主机指纹选项（`--repo-sftp-host-fingerprint`）

SFTP 仓库主机指纹。

SFTP 仓库主机指纹的生成方式应与 `repo-sftp-host-key-hash-type` 匹配。可通过以下命令生成指纹：

```
awk '{print $2}' ssh_host_xxx_key.pub | base64 -d | (md5sum or sha1sum) -b
```

SSH 主机密钥通常位于 `/etc/ssh` 目录下。

```yaml
example: --repo1-sftp-host-fingerprint=f84e172dfead7aeeeae6c1fdfb5aa8cf
```

### SFTP 主机密钥检查类型选项（`--repo-sftp-host-key-check-type`）

SFTP 主机密钥检查类型。

支持以下检查类型：

- `strict` - pgBackRest 不会自动将主机密钥添加到 `~/.ssh/known_hosts` 文件，且拒绝连接主机密钥已更改或未在已知主机文件中找到的主机。此选项要求用户手动添加所有新主机。
- `accept-new` - pgBackRest 会自动将新主机密钥添加到用户的已知主机文件，但不允许连接主机密钥已更改的主机。
- `fingerprint` - pgBackRest 将根据 `repo-sftp-host-fingerprint` 选项指定的指纹检查主机密钥。
- `none` - 不执行主机密钥检查。

```yaml
default: strict
example: --repo1-sftp-host-key-check-type=accept-new
```

### SFTP 仓库主机密钥哈希类型选项（`--repo-sftp-host-key-hash-type`）

SFTP 仓库主机密钥哈希类型。

声明在 SSH 启动时计算远端系统主机密钥摘要所使用的哈希类型。较新版本的 `libssh2` 除支持 md5 和 sha1 外，还支持 `sha256`。

```yaml
example: --repo1-sftp-host-key-hash-type=sha256
```

### SFTP 仓库主机端口选项（`--repo-sftp-host-port`）

SFTP 仓库主机端口。

SFTP 仓库主机的连接端口。

```yaml
default: 22
allowed: [1, 65535]
example: --repo1-sftp-host-port=22
```

### SFTP 仓库主机用户选项（`--repo-sftp-host-user`）

SFTP 仓库主机用户。

用于存储仓库的主机上的用户。

```yaml
example: --repo1-sftp-host-user=pg-backup
```

### SFTP 已知主机文件选项（`--repo-sftp-known-host`）

SFTP 已知主机文件。

身份验证时用于查找 SFTP 主机匹配项的已知主机文件。若未指定，pgBackRest 默认搜索 `~/.ssh/known_hosts`、`~/.ssh/known_hosts2`、`/etc/ssh/ssh_known_hosts` 和 `/etc/ssh/ssh_known_hosts2`。若配置了一个或多个文件路径，pgBackRest 将仅在这些路径中查找匹配项。文件路径必须为完整路径或以波浪号开头的路径。可多次传入 `repo-sftp-known-host` 以指定多个已知主机文件。使用已知主机文件检查时，不得同时指定 `repo-sftp-host-fingerprint`。另请参见 `repo-sftp-host-check-type` 选项。

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

用于身份验证的 SFTP 公钥文件。若编译时使用 OpenSSL 则为可选，若使用其他库则为必填。

```yaml
example: --repo1-sftp-public-key-file=~/.ssh/id_ed25519.pub
```

### 仓库存储 CA 文件选项（`--repo-storage-ca-file`）

仓库存储 CA 文件。

连接存储（如 S3、Azure）时使用非系统默认的 CA 文件。

```yaml
example: --repo1-storage-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

已弃用名称：repo-azure-ca-file, repo-s3-ca-file

### 仓库存储 TLS CA 路径选项（`--repo-storage-ca-path`）

仓库存储 CA 路径。

连接存储（如 S3、Azure）时使用非系统默认的 CA 路径。

```yaml
example: --repo1-storage-ca-path=/etc/pki/tls/certs
```

已弃用名称：repo-azure-ca-path, repo-s3-ca-path

### 仓库存储主机选项（`--repo-storage-host`）

仓库存储主机。

连接到存储（如 S3、Azure）端点以外的主机，通常用于测试。

```yaml
example: --repo1-storage-host=127.0.0.1
```

已弃用名称：repo-azure-host, repo-s3-host

### 仓库存储端口选项（`--repo-storage-port`）

仓库存储端口。

连接存储（如 S3、Azure）端点（或指定主机）时使用的端口。

```yaml
default: 443
allowed: [1, 65535]
example: --repo1-storage-port=9000
```

已弃用名称：repo-azure-port, repo-s3-port

### 仓库存储标签选项（`--repo-storage-tag`）

仓库存储标签。

当仓库为对象存储（如 S3）时，为对象添加指定标签。此选项可重复使用以添加多个标签。

pgBackRest 不提供修改标签的功能，因此请在运行 `stanza-create` 之前确保标签设置正确，以保证整个仓库标签的一致性。

```yaml
example: --repo1-storage-tag=key1=value1
```

### 仓库存储上传分块大小选项（`--repo-storage-upload-chunk-size`）

仓库存储上传分块大小。

当文件过大无法全部存入内存时，S3 等对象存储支持分块上传。即使文件能够存入内存，限制上传内存用量也更为高效。

较大的分块大小通常可提升性能，因为它能减少上传请求次数，让更多文件在单次请求中完成上传，而非分块传输。缺点是内存占用更高——由于分块缓冲区需按进程分配，`process-max` 值越大，总体内存消耗越多。

注意，有效的分块大小因存储类型和平台而异。例如，AWS S3 的最小分块大小为 5MiB。各存储类型对分块大小的术语也不同：AWS S3 称为"part size"，GCS 称为"chunk size"，Azure 称为"block size"。

若文件大于 1GiB（PostgreSQL 默认创建文件的最大大小），则分块大小将递增至允许的最大值，以完成文件上传。

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

启用或禁用对存储（如 S3、Azure）服务器 TLS 证书的验证。仅在测试或使用自签名证书的场景下才应禁用验证。

```yaml
default: y
example: --no-repo1-storage-verify-tls
```

已弃用名称：repo-azure-verify-tls, repo-s3-verify-ssl, repo-s3-verify-tls

### 仓库目标时间选项（`--repo-target-time`）

仓库目标时间。

目标时间定义了命令读取版本化存储上仓库时所参照的时间点。通过此选项，命令可以读取某一历史时间点的仓库状态，从而恢复因用户误操作或恶意软件导致删除或损坏的数据。

S3、GCS 和 Azure 均支持版本化存储，但通常默认未启用。除了启用版本化，还可以考虑为 S3 启用对象锁定，为 GCS 或 Azure 启用软删除功能。

指定 `repo-target-time` 时，还必须同时提供 `repo` 选项。通常并非所有仓库类型都支持版本化功能，因此建议针对单个仓库进行恢复。

注意：与存储时间戳的比较采用小于等于（<=）的方式，且时间戳中的毫秒部分在比较时会被截断。

```yaml
example: --repo-target-time=2024-08-08 12:12:12+00
```

### 仓库类型选项（`--repo-type`）

仓库所使用的存储类型。

支持以下仓库类型：

- `azure` - Azure Blob 存储服务
- `cifs` - 类似 `posix`，但禁用链接和目录 fsync
- `gcs` - Google Cloud Storage
- `posix` - 符合 Posix 标准的文件系统
- `s3` - AWS Simple Storage Service
- `sftp` - 安全文件传输协议

将 NFS 挂载用作 `posix` 仓库时，适用于 pgBackRest 的规则与 PostgreSQL 文档中描述的规则相同，请参见 [**Creating a Database Cluster - File Systems**](https://www.postgresql.org/docs/current/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM)。

```yaml
default: posix
example: --repo1-type=cifs
```

## Stanza 选项

### PostgreSQL 路径选项（`--pg-path`）

PostgreSQL 数据目录。

应与 PostgreSQL 报告的 `data_directory` 一致。尽管此值可从多处读取，但建议明确配置，以防在恢复或离线备份场景中相关资源不可用。

`pg-path` 选项在每次在线备份时都会与 PostgreSQL 报告的值进行校验，因此应始终保持最新。

```yaml
example: --pg1-path=/data/db
```

已弃用名称：db-path

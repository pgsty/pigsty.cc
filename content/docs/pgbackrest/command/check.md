---
title: "检查命令（check）"
linkTitle: "check"
weight: 50
description: "pgBackRest `check` 命令的选项与行为参考。"
icon: fa-solid fa-circle-check
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： [pgBackRest Command Docs: check](https://pgbackrest.org/command.html#command-check)

`check` 命令用于验证 pgBackRest 及 `archive_command` 的配置是否正确，确保指定 stanza（stanza 是 pgBackRest 中用于标识 PostgreSQL 集群备份配置的逻辑名称）的归档与备份能够正常运作。该命令会对当前主机上为该 stanza 配置的所有仓库和数据库逐一检查，可检测出配置错误——尤其是归档配置问题，此类问题会导致所需的 WAL 段无法进入归档，从而造成备份不完整。此命令可在 PostgreSQL 主机或仓库主机上运行；也可在备库主机上运行，但由于备库无法执行 `pg_switch_xlog()`/`pg_switch_wal()`，命令仅会测试仓库配置。

请注意，该命令会调用 `pg_create_restore_point('pgBackRest Archive Check')` 和 `pg_switch_xlog()`/`pg_switch_wal()` 来强制 PostgreSQL 归档一个 WAL 段。

## 命令选项

### 检查归档选项（`--archive-check`）

在备份完成前检查 WAL 段是否已进入归档。

此选项会验证使备份达到一致状态所需的全部 WAL 段是否均已存在于归档中。建议保持默认值，除非你通过其他方式管理归档。

若启用了 `archive-copy`，则必须同时启用此选项。

```yaml
default: y
example: --no-archive-check
```

### 检查归档模式选项（`--archive-mode-check`）

检查 PostgreSQL 的 `archive_mode` 设置。

此选项默认启用，作用是禁止 PostgreSQL 使用 `archive_mode=always`。

从备库推送的 WAL 段与从主库推送的 WAL 段在逻辑上可能相同，但校验和不同。禁止多源归档可以避免潜在冲突。

注意：

若禁用此选项，必须确保只有一个归档进程通过 `archive-push` 命令向仓库写入数据。

```yaml
default: y
example: --no-archive-mode-check
```

### 归档超时选项（`--archive-timeout`）

归档超时时间。

设置等待每个 WAL 段进入 pgBackRest 归档仓库的最长时间（秒）。此超时适用于 `check` 和 `backup` 命令等待备份一致性所需 WAL 段完成归档的场景。

```yaml
default: 1m
allowed: [100ms, 1d]
example: --archive-timeout=30
```

### 从备库备份选项（`--backup-standby`）

从备库集群进行备份。

从备库备份可降低主库的负载。此选项要求同时配置主库和备库主机。

支持以下模式：

- `y` - 必须使用备库进行备份。
- `prefer` - 优先从备库备份，备库不可用时自动切换到主库。
- `n` - 仅从主库备份。

```yaml
default: n
example: --backup-standby=y
```

## 通用选项

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

用于复制、压缩、加密等操作的缓冲区大小。实际使用的缓冲区数量取决于具体选项，每个操作可能会额外占用内存，例如 `gz` 压缩可能额外使用 256KiB 内存。

允许的值为 `16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```yaml
default: 1MiB
example: --buffer-size=2MiB
```

### SSH 客户端命令选项（`--cmd-ssh`）

SSH 客户端命令。

当需要使用特定 SSH 客户端，或 `ssh` 命令不在 $PATH 中时，使用此选项指定。

```yaml
default: ssh
example: --cmd-ssh=/usr/bin/ssh
```

### 网络压缩级别选项（`--compress-level-network`）

网络压缩级别。

当 `compress-type=none` 且命令不在仓库所在主机上运行时，此选项设置网络传输的压缩级别。压缩可减少网络流量。当 `compress-type` 不为 `none` 时，`compress-level-network` 将被忽略，转而使用 `compress-level`，以避免对文件进行二次压缩。

```yaml
default: 1
allowed: [-5, 12]
example: --compress-level-network=1
```

### 配置文件选项（`--config`）

pgBackRest 配置文件。

使用此选项指定非默认路径的配置文件。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --config=/conf/pgbackrest/pgbackrest.conf
```

### 配置包含路径选项（`--config-include-path`）

附加 pgBackRest 配置文件的路径。

指定路径下扩展名为 `.conf` 的配置文件将与主配置文件合并，构成完整的配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --config-include-path=/conf/pgbackrest/conf.d
```

### 配置路径选项（`--config-path`）

pgBackRest 配置文件的基础路径。

此设置用于覆盖 `--config` 和 `--config-include-path` 的默认基础路径，前提是这两个选项未在命令行中显式指定。

例如，仅传入 `--config-path=/conf/pgbackrest` 时，`--config` 的默认值将变为 `/conf/pgbackrest/pgbackrest.conf`，`--config-include-path` 的默认值将变为 `/conf/pgbackrest/conf.d`。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --config-path=/conf/pgbackrest
```

### 数据库超时选项（`--db-timeout`）

数据库查询超时时间。

设置对数据库执行查询的超时时间（秒）。涉及备份启动/停止函数的查询各自可能耗时较长，因此除非你确定这些函数会快速返回（例如已设置 `start-fast=y`，且数据库集群在备份期间不会产生大量 WAL 段），否则应将此超时设为较大值。

> **注意：** `db-timeout` 选项的值必须小于 `protocol-timeout` 选项的值。

```yaml
default: 30m
allowed: [100ms, 7d]
example: --db-timeout=600
```

### I/O 超时选项（`--io-timeout`）

I/O 超时时间。

用于连接和读写操作的超时时间（秒）。

请注意，整个读写操作无需在此时间内完成，但*必须*持续有所进展，哪怕每次只传输一个字节。

```yaml
default: 1m
allowed: [100ms, 1h]
example: --io-timeout=120
```

### 中性 umask 选项（`--neutral-umask`）

使用中性 umask。

将 umask 设为 0000，使仓库中的文件和目录以合理的权限模式创建。默认目录权限为 0750，文件权限为 0640。锁文件和日志目录的权限分别为 0770（目录）和 0660（文件）。

若要改用当前运行用户的 umask，请在配置文件中指定 `neutral-umask=n`，或在命令行中使用 `--no-neutral-umask`。

```yaml
default: y
example: --no-neutral-umask
```

### 设置进程优先级选项（`--priority`）

设置进程优先级。

定义内核调度器赋予该进程的优先级（即 nice 值）。正值降低优先级，负值提高优先级。大多数情况下，进程没有权限提高自身优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### 协议超时选项（`--protocol-timeout`）

协议超时时间。

设置本地或远程进程在协议层等待新消息的超时时间（秒），防止进程无限期阻塞。

> **注意：** `protocol-timeout` 选项的值必须大于 `db-timeout` 选项的值。

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

定义 stanza。

stanza 是 PostgreSQL 数据库集群的配置，定义了集群的位置、备份方式、归档选项等。大多数数据库服务器只有一个 PostgreSQL 集群，因此只有一个 stanza；而备份服务器则需要为每个待备份的数据库集群分别配置一个 stanza。

命名 stanza 时，很容易直接使用主集群的名称，但更好的做法是根据集群承载的数据库功能来命名。由于 stanza 名称同时用于主库和所有副本，建议选择能描述集群实际用途的名称（如 `app` 或 `dw`），而非本地集群名称（如 `main` 或 `prod`）。

```yaml
example: --stanza=main
```

### TCP 保活计数选项（`--tcp-keep-alive-count`）

保活数据包计数。

指定连接被判定为断开前，可丢失的 TCP 保活消息数量。

此选项仅在支持 `TCP_KEEPCNT` socket 选项的系统上可用。

```yaml
allowed: [1, 32]
example: --tcp-keep-alive-count=3
```

### TCP 保活空闲时间选项（`--tcp-keep-alive-idle`）

保活空闲时间。

指定无网络活动持续多少秒后，操作系统开始发送 TCP 保活消息。

此选项仅在支持 `TCP_KEEPIDLE` socket 选项的系统上可用。

```yaml
allowed: [1, 3600]
example: --tcp-keep-alive-idle=60
```

### TCP 保活间隔选项（`--tcp-keep-alive-interval`）

保活消息重传间隔。

指定未收到确认的 TCP 保活消息在多少秒后重新发送。

此选项仅在支持 `TCP_KEEPINTVL` socket 选项的系统上可用。

```yaml
allowed: [1, 900]
example: --tcp-keep-alive-interval=30
```

### TLSv1.2 加密套件选项（`--tls-cipher-12`）

允许的 TLSv1.2 加密套件。

pgBackRest 客户端与服务端之间的所有 TLS 连接均已加密。默认情况下，与对象存储（如 S3）的连接也会加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整可接受的加密套件列表。示例为合理选择，除非有特定安全需求。若未设置（默认），则使用底层 OpenSSL 库的默认配置。

```yaml
example: --tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 加密套件选项（`--tls-cipher-13`）

允许的 TLSv1.3 加密套件。

pgBackRest 客户端与服务端之间的所有 TLS 连接均已加密。默认情况下，与对象存储（如 S3）的连接也会加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整可接受的加密套件列表。若未设置（默认），则使用底层 OpenSSL 库的默认配置。

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
- `debug` - 记录调试、详情、信息、警告和错误
- `trace` - 记录跟踪（非常详细的调试信息）、调试、信息、警告和错误

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
- `debug` - 记录调试、详情、信息、警告和错误
- `trace` - 记录跟踪（非常详细的调试信息）、调试、信息、警告和错误

```yaml
default: info
example: --log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

stderr 日志级别。

指定哪些日志级别输出到 `stderr` 而非 `stdout`（由 `log-level-console` 控制）。输出到 `stderr` 的内容不包含时间戳和进程信息。

支持以下日志级别：

- `off` - 不记录任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详情、信息、警告和错误
- `debug` - 记录调试、详情、信息、警告和错误
- `trace` - 记录跟踪（非常详细的调试信息）、调试、信息、警告和错误

```yaml
default: off
example: --log-level-stderr=error
```

### 日志路径选项（`--log-path`）

日志文件存储路径。

指定 pgBackRest 日志文件的存储位置。若 `log-level-file=off`，则无需配置此路径。

```yaml
default: /var/log/pgbackrest
example: --log-path=/backup/db/log
```

### 子进程日志选项（`--log-subprocess`）

启用子进程日志记录。

为当前进程创建的子进程启用文件日志记录，日志级别由 `log-level-file` 指定。

```yaml
default: n
example: --log-subprocess
```

### 日志时间戳选项（`--log-timestamp`）

启用日志时间戳。

在控制台和文件日志中附加时间戳。生成文档等特殊场景下此选项会被禁用。

```yaml
default: y
example: --no-log-timestamp
```

## 维护者选项

### 强制指定 PostgreSQL 版本选项（`--pg-version-force`）

强制指定 PostgreSQL 版本。

使用此选项指定的 PostgreSQL 版本，而不依赖从 `pg_control` 或 WAL 头部自动检测的版本。此选项主要用于 PostgreSQL 分支版本或开发版本——在这些版本中，自动检测值可能与正式发行版本不同。PostgreSQL 通过 `server_version_num` 报告的版本必须与强制指定的版本一致。

警告：

使用此选项须格外谨慎。`pg_control` 和 WAL 头部仍会按指定版本的预期格式读取，即官方开源 PostgreSQL 的格式。若分支版本或开发版本修改了 pgBackRest 所依赖的字段格式，将导致不可预期的行为。通常只有在分支版本于标准 PostgreSQL 结构成员*之后*追加自定义成员时，此选项才能正常工作。

```yaml
example: --pg-version-force=15
```

## 仓库选项

### Azure 仓库容器选项（`--repo-azure-container`）

Azure 仓库容器。

用于存储仓库的 Azure 容器。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在容器根目录，但通常建议指定前缀（如 `/repo`），以便日志和其他 Azure 生成的内容也能存储在同一容器中。

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
- `path` - 连接到 `endpoint` 主机，并在 URI 中添加账户前缀。

```yaml
default: host
example: --repo1-azure-uri-style=path
```

### 仓库加密类型选项（`--repo-cipher-type`）

用于加密仓库的加密算法。

支持以下加密类型：

- `none` - 仓库不加密
- `aes-256-cbc` - 256 位密钥长度的高级加密标准

请注意，即使仓库类型（如 S3）本身支持加密，pgBackRest 的加密也始终在客户端执行。

```yaml
default: none
example: --repo1-cipher-type=aes-256-cbc
```

### GCS 仓库存储桶选项（`--repo-gcs-bucket`）

GCS 仓库存储桶。

用于存储仓库的 GCS 存储桶。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录，但通常建议指定前缀（如 `/repo`），以便日志和其他 GCS 生成的内容也能存储在同一存储桶中。

```yaml
example: --repo1-gcs-bucket=/pg-backup
```

### GCS 仓库端点选项（`--repo-gcs-endpoint`）

GCS 仓库端点。

用于连接存储服务的端点。可更新为本地 GCS 服务器或备用端点。

```yaml
default: storage.googleapis.com
example: --repo1-gcs-endpoint=localhost
```

### GCS 仓库密钥类型选项（`--repo-gcs-key-type`）

GCS 仓库密钥类型。

支持以下授权类型：

- `auto` - 使用实例服务账号授权。
- `service` - 使用本地存储的服务账号密钥。
- `token` - 用于本地测试，如 `fakegcs`。

当 `repo-gcs-key-type=service` 时，认证令牌续期时会重新加载凭据。

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

### 仓库主机选项（`--repo-host`）

远程操作时的仓库主机。

若备份和归档使用本地挂载的文件系统，则无需此设置。

```yaml
example: --repo1-host=repo1.domain.com
```

已弃用名称：backup-host

### 仓库主机证书颁发机构文件选项（`--repo-host-ca-file`）

仓库主机证书颁发机构文件。

连接仓库主机时，使用非系统默认的 CA 文件。

```yaml
example: --repo1-host-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

### 仓库主机证书颁发机构路径选项（`--repo-host-ca-path`）

仓库主机证书颁发机构路径。

连接仓库主机时，使用非系统默认的 CA 路径。

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

仓库主机上的 pgBackRest 命令。

仅当 pgBackRest 在本地主机与仓库主机上的路径不同时才需要此选项。若未定义，仓库主机命令将与本地命令相同。

```yaml
default: [path of executed pgbackrest binary]
example: --repo1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：backup-cmd

### 仓库主机配置文件选项（`--repo-host-config`）

pgBackRest 仓库主机配置文件。

设置仓库主机上配置文件的位置。仅当仓库主机上的配置文件路径与本地不同时才需要此选项。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --repo1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：backup-config

### 仓库主机配置包含路径选项（`--repo-host-config-include-path`）

pgBackRest 仓库主机配置包含路径。

设置仓库主机上配置包含路径的位置。仅当仓库主机上的配置包含路径与本地不同时才需要此选项。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --repo1-host-config-include-path=/conf/pgbackrest/conf.d
```

### 仓库主机配置路径选项（`--repo-host-config-path`）

pgBackRest 仓库主机配置路径。

设置仓库主机上配置路径的位置。仅当仓库主机上的配置路径与本地不同时才需要此选项。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --repo1-host-config-path=/conf/pgbackrest
```

### 仓库主机密钥文件选项（`--repo-host-key-file`）

仓库主机密钥文件。

证明客户端证书由其所有者发送。

```yaml
example: --repo1-host-key-file=/path/to/client.key
```

### 仓库主机端口选项（`--repo-host-port`）

`repo-host` 已设置时的仓库主机端口。

使用此选项为仓库主机协议指定非默认端口。

> **注意：** 当 `repo-host-type=ssh` 时，`repo-host-port` 无默认值，端口由 `cmd-ssh` 指定的命令配置决定。

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

- `ssh` - 安全外壳协议（Secure Shell）。
- `tls` - pgBackRest TLS 服务端。

```yaml
default: ssh
example: --repo1-host-type=tls
```

### 仓库主机用户选项（`--repo-host-user`）

`repo-host` 已设置时的仓库主机用户。

定义在仓库主机上执行操作所用的用户。建议不要使用 `postgres` 用户，而是使用专用用户（如 `pgbackrest`）。若 PostgreSQL 运行在仓库主机上，可将 `postgres` 用户加入 `pgbackrest` 组，使其对仓库拥有读取权限，但无法意外损坏仓库内容。

```yaml
default: pgbackrest
example: --repo1-host-user=repo-user
```

已弃用名称：backup-user

### 仓库路径选项（`--repo-path`）

备份和归档的存储路径。

仓库是 pgBackRest 存储备份和归档 WAL 段的地方。

预先估算所需空间可能比较困难。建议先执行若干次备份，记录不同备份类型（全量/增量/差异）的大小，并衡量每天产生的 WAL 量，从而得出大致的空间需求。随着数据库持续增长，需求也会相应变化。

```yaml
default: /var/lib/pgbackrest
example: --repo1-path=/backup/db/backrest
```

### S3 仓库存储桶选项（`--repo-s3-bucket`）

S3 仓库存储桶。

用于存储仓库的 S3 存储桶。

通过设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录，但通常建议指定前缀（如 `/repo`），以便日志和其他 AWS 生成的内容也能存储在同一存储桶中。

```yaml
example: --repo1-s3-bucket=pg-backup
```

### S3 仓库端点选项（`--repo-s3-endpoint`）

S3 仓库端点。

AWS 端点应与所选区域匹配。

对于自定义或测试配置，`repo-storage-ca-file`、`repo-storage-ca-path`、`repo-storage-host`、`repo-storage-port` 和 `repo-storage-verify-tls` 选项可能有用。

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

当 `repo-s3-key-type=auto` 时，用于获取临时凭据的 AWS 角色名称（非完整 ARN）。

```yaml
example: --repo1-s3-role=authrole
```

### S3 仓库 URI 风格选项（`--repo-s3-uri-style`）

S3 URI 风格。

支持以下 URI 风格：

- `host` - 连接到 `bucket.endpoint` 主机。
- `path` - 连接到 `endpoint` 主机，并在 URI 中添加存储桶前缀。

```yaml
default: host
example: --repo1-s3-uri-style=path
```

### SFTP 仓库主机选项（`--repo-sftp-host`）

SFTP 仓库主机。

存储仓库的 SFTP 主机。

```yaml
example: --repo1-sftp-host=sftprepo.domain
```

### SFTP 仓库主机指纹选项（`--repo-sftp-host-fingerprint`）

SFTP 仓库主机指纹。

主机指纹的生成方式应与 `repo-sftp-host-key-hash-type` 一致，通过 `awk '{print $2}' ssh_host_xxx_key.pub | base64 -d | (md5sum or sha1sum) -b` 命令生成。SSH 主机密钥通常位于 `/etc/ssh` 目录下。

```yaml
example: --repo1-sftp-host-fingerprint=f84e172dfead7aeeeae6c1fdfb5aa8cf
```

### SFTP 主机密钥检查类型选项（`--repo-sftp-host-key-check-type`）

SFTP 主机密钥检查类型。

支持以下 SFTP 主机密钥检查类型：

- `strict` - pgBackRest 不会自动将主机密钥添加到 `~/.ssh/known_hosts` 文件，并拒绝连接到主机密钥已更改或不在已知主机文件中的主机。此模式强制用户手动添加所有新主机。
- `accept-new` - pgBackRest 会自动将新主机密钥添加到用户的已知主机文件，但不允许连接到主机密钥已更改的主机。
- `fingerprint` - pgBackRest 将主机密钥与 `repo-sftp-host-fingerprint` 选项指定的指纹进行比对。
- `none` - 不执行主机密钥检查。

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

用于存储仓库的主机上的用户。

```yaml
example: --repo1-sftp-host-user=pg-backup
```

### SFTP 已知主机文件选项（`--repo-sftp-known-host`）

SFTP 已知主机文件。

认证过程中用于搜索 SFTP 主机匹配的已知主机文件。若未指定，pgBackRest 默认搜索 `~/.ssh/known_hosts`、`~/.ssh/known_hosts2`、`/etc/ssh/ssh_known_hosts` 和 `/etc/ssh/ssh_known_hosts2`。若配置了一个或多个文件路径，pgBackRest 将只在这些文件中搜索匹配项。文件路径必须为完整路径或以波浪号开头的路径。此选项可多次传入以指定多个已知主机文件。使用已知主机文件检查时，不得同时指定 `repo-sftp-host-fingerprint`。另请参阅 `repo-sftp-host-check-type` 选项。

```yaml
example: --repo1-sftp-known-host=/home/postgres/.ssh/known_hosts
```

### SFTP 仓库私钥文件选项（`--repo-sftp-private-key-file`）

SFTP 私钥文件。

用于认证的 SFTP 私钥文件。

```yaml
example: --repo1-sftp-private-key-file=~/.ssh/id_ed25519
```

### SFTP 仓库公钥文件选项（`--repo-sftp-public-key-file`）

SFTP 公钥文件。

用于认证的 SFTP 公钥文件。使用 OpenSSL 编译时为可选；使用其他库编译时为必需。

```yaml
example: --repo1-sftp-public-key-file=~/.ssh/id_ed25519.pub
```

### 仓库存储 CA 文件选项（`--repo-storage-ca-file`）

仓库存储 CA 文件。

连接存储（如 S3、Azure）时，使用非系统默认的 CA 文件。

```yaml
example: --repo1-storage-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

已弃用名称：repo-azure-ca-file, repo-s3-ca-file

### 仓库存储 TLS CA 路径选项（`--repo-storage-ca-path`）

仓库存储 CA 路径。

连接存储（如 S3、Azure）时，使用非系统默认的 CA 路径。

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

指定在仓库为对象存储（如 S3）时添加到对象上的标签。可多次使用此选项以添加多个标签。

pgBackRest 不提供修改这些标签的功能，因此请在运行 `stanza-create` 之前确保标签设置正确，以保证整个仓库标签的一致性。

```yaml
example: --repo1-storage-tag=key1=value1
```

### 仓库存储上传块大小选项（`--repo-storage-upload-chunk-size`）

仓库存储上传块大小。

S3 等对象存储支持在文件过大无法全部载入内存时分块上传。即使文件能全部载入内存，限制上传所用内存量也更为高效。

较大的块大小通常能提升性能，因为它可以减少上传请求数量，使更多文件在单次请求中完成上传而无需分块处理。其代价是内存占用更高，且由于块缓冲区需按进程分配，`process-max` 值越大，整体内存消耗越多。

请注意，有效的块大小因存储类型和平台而异。例如，AWS S3 的最小块大小为 5MiB。各存储类型对块大小的叫法不同，查找最小/最大值时请参考：AWS S3 用"part size"，GCS 用"chunk size"，Azure 用"block size"。

若文件大小超过 1GiB（PostgreSQL 默认创建文件的上限），块大小将逐步增大至允许的最大值，以完成文件上传。

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

启用或禁用对存储（如 S3、Azure）服务端 TLS 证书的验证。禁用验证仅应用于测试或使用自签名证书的场景。

```yaml
default: y
example: --no-repo1-storage-verify-tls
```

已弃用名称：repo-azure-verify-tls, repo-s3-verify-ssl, repo-s3-verify-tls

### 仓库类型选项（`--repo-type`）

仓库使用的存储类型。

支持以下仓库类型：

- `azure` - Azure Blob 存储服务
- `cifs` - 类似 `posix`，但禁用链接和目录 fsync
- `gcs` - Google Cloud 存储
- `posix` - 符合 POSIX 标准的文件系统
- `s3` - AWS 简单存储服务
- `sftp` - 安全文件传输协议

将 NFS 挂载用作 `posix` 仓库时，适用于 pgBackRest 的规则与 PostgreSQL 文档中描述的相同，详见 [创建数据库集群 - 文件系统](https://www.postgresql.org/docs/current/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM)。

```yaml
default: posix
example: --repo1-type=cifs
```

## Stanza 选项

### PostgreSQL 数据库选项（`--pg-database`）

PostgreSQL 数据库。

连接 PostgreSQL 时使用的数据库名称。默认值通常是最佳选择，但某些安装可能不包含此数据库。

请注意，出于历史原因，`PGDATABASE` 环境变量的设置将被忽略。

```yaml
default: postgres
example: --pg1-database=backupdb
```

### PostgreSQL 主机选项（`--pg-host`）

远程操作时的 PostgreSQL 主机。

用于 PostgreSQL 主机与仓库主机分离的备份场景。

```yaml
example: --pg1-host=db.domain.com
```

已弃用名称：db-host

### PostgreSQL 主机证书颁发机构文件选项（`--pg-host-ca-file`）

PostgreSQL 主机证书颁发机构文件。

连接 PostgreSQL 主机时，使用非系统默认的 CA 文件。

```yaml
example: --pg1-host-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

### PostgreSQL 主机证书颁发机构路径选项（`--pg-host-ca-path`）

PostgreSQL 主机证书颁发机构路径。

连接 PostgreSQL 主机时，使用非系统默认的 CA 路径。

```yaml
example: --pg1-host-ca-path=/etc/pki/tls/certs
```

### PostgreSQL 主机证书文件选项（`--pg-host-cert-file`）

PostgreSQL 主机证书文件。

发送给 PostgreSQL 主机以证明客户端身份。

```yaml
example: --pg1-host-cert-file=/path/to/client.crt
```

### PostgreSQL 主机命令选项（`--pg-host-cmd`）

PostgreSQL 主机上的 pgBackRest 命令。

仅当 pgBackRest 在本地主机与 PostgreSQL 主机上的路径不同时才需要此选项。若未定义，PostgreSQL 主机命令将与本地命令相同。

```yaml
default: [path of executed pgbackrest binary]
example: --pg1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：db-cmd

### PostgreSQL 主机配置文件选项（`--pg-host-config`）

pgBackRest 数据库主机配置文件。

设置 PostgreSQL 主机上配置文件的位置。仅当 PostgreSQL 主机上的配置文件路径与本地不同时才需要此选项。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --pg1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：db-config

### PostgreSQL 主机配置包含路径选项（`--pg-host-config-include-path`）

pgBackRest 数据库主机配置包含路径。

设置 PostgreSQL 主机上配置包含路径的位置。仅当 PostgreSQL 主机上的配置包含路径与本地不同时才需要此选项。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --pg1-host-config-include-path=/conf/pgbackrest/conf.d
```

### PostgreSQL 主机配置路径选项（`--pg-host-config-path`）

pgBackRest 数据库主机配置路径。

设置 PostgreSQL 主机上配置路径的位置。仅当 PostgreSQL 主机上的配置路径与本地不同时才需要此选项。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --pg1-host-config-path=/conf/pgbackrest
```

### PostgreSQL 主机密钥文件选项（`--pg-host-key-file`）

PostgreSQL 主机密钥文件。

证明客户端证书由其所有者发送。

```yaml
example: --pg1-host-key-file=/path/to/client.key
```

### PostgreSQL 主机端口选项（`--pg-host-port`）

`pg-host` 已设置时的 PostgreSQL 主机端口。

使用此选项为 PostgreSQL 主机协议指定非默认端口。

> **注意：** 当 `pg-host-type=ssh` 时，`pg-host-port` 无默认值，端口由 `cmd-ssh` 指定的命令配置决定。

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

- `ssh` - 安全外壳协议（Secure Shell）。
- `tls` - pgBackRest TLS 服务端。

```yaml
default: ssh
example: --pg1-host-type=tls
```

### PostgreSQL 主机用户选项（`--pg-host-user`）

`pg-host` 已设置时的 PostgreSQL 主机登录用户。

此用户还将作为远程 pgBackRest 进程的所有者，并负责发起到 PostgreSQL 的连接。为使其正常工作，该用户应为 PostgreSQL 数据库集群的所有者，通常即默认值 `postgres`。

```yaml
default: postgres
example: --pg1-host-user=db_owner
```

已弃用名称：db-user

### PostgreSQL 路径选项（`--pg-path`）

PostgreSQL 数据目录。

此路径应与 PostgreSQL 报告的 `data_directory` 一致。尽管该值可从多处读取，但在恢复或离线备份场景下这些资源可能不可用，因此建议显式设置。

每次在线备份时，`pg-path` 选项都会与 PostgreSQL 报告的值进行核对，因此应始终保持最新。

```yaml
example: --pg1-path=/data/db
```

已弃用名称：db-path

### PostgreSQL 端口选项（`--pg-port`）

PostgreSQL 端口。

PostgreSQL 运行的端口号。大多数 PostgreSQL 集群使用默认端口，通常无需指定此选项。

```yaml
default: 5432
allowed: [0, 65535]
example: --pg1-port=6543
```

已弃用名称：db-port

### PostgreSQL Socket 路径选项（`--pg-socket-path`）

PostgreSQL Unix socket 路径。

启动 PostgreSQL 时指定的 Unix socket 目录。pgBackRest 会自动查找当前操作系统的标准位置，通常无需指定此选项，除非在 `postgresql.conf` 中通过 `unix_socket_directories` 显式修改了 socket 目录。

```yaml
example: --pg1-socket-path=/var/run/postgresql
```

已弃用名称：db-socket-path

### PostgreSQL 数据库用户选项（`--pg-user`）

PostgreSQL 数据库用户。

连接 PostgreSQL 时使用的数据库用户名。若未指定，pgBackRest 将使用本地操作系统用户或 `PGUSER`。

```yaml
example: --pg1-user=backupuser
```

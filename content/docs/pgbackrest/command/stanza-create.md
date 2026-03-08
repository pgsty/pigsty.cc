---
title: "Stanza 创建命令（stanza-create）"
linkTitle: "stanza-create"
weight: 140
description: "pgBackRest `stanza-create` 命令的选项与行为参考。"
icon: fa-solid fa-square-plus
module: [PGBACKREST]
categories: [参考]
---

> 原始页面： [pgBackRest Command Docs: stanza-create](https://pgbackrest.org/command.html#command-stanza-create)

`stanza-create` 命令须在 `pgbackrest.conf` 中完成 stanza 配置后再执行（stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称）。若配置了多个仓库，`stanza-create` 会在每个仓库上分别建立 stanza。已创建的 stanza 会被跳过，因此即便新增了仓库，也可以随时安全地重复执行 `stanza-create`。

更多信息和示例，请参见 [**创建 Stanza**](/docs/pgbackrest/user-guide/#创建-stanza)。

## 命令选项

### 在线选项（`--online`）

在在线集群上创建 stanza。

指定 `--no-online` 可阻止 pgBackRest 在创建 stanza 时连接 PostgreSQL。

```yaml
default: y
example: --no-online
```

## 通用选项

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

该缓冲区用于复制、压缩、加密等操作。实际使用的缓冲区数量取决于所启用的选项，每个操作还可能额外占用内存，例如 `gz` 压缩可能额外使用约 256KiB 内存。

允许值为：`16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```yaml
default: 1MiB
example: --buffer-size=2MiB
```

### SSH 客户端命令选项（`--cmd-ssh`）

SSH 客户端命令。

需要使用特定 SSH 客户端，或 `ssh` 命令不在 `$PATH` 中时，可通过此选项指定。

```yaml
default: ssh
example: --cmd-ssh=/usr/bin/ssh
```

### 网络压缩级别选项（`--compress-level-network`）

网络压缩级别。

当 `compress-type=none` 且命令不在仓库所在主机上运行时，通过此选项设置网络传输的压缩级别，以降低网络流量。若 `compress-type` 不等于 `none`，则忽略 `compress-level-network`，转而使用 `compress-level`，避免对文件进行二次压缩。

```yaml
default: 1
allowed: [-5, 12]
example: --compress-level-network=1
```

### 配置文件选项（`--config`）

pgBackRest 配置文件。

指定与默认值不同的配置文件路径。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --config=/conf/pgbackrest/pgbackrest.conf
```

### 配置包含路径选项（`--config-include-path`）

附加 pgBackRest 配置文件的路径。

该路径下以 `.conf` 为扩展名的配置文件将与主配置文件合并，形成完整配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --config-include-path=/conf/pgbackrest/conf.d
```

### 配置基础路径选项（`--config-path`）

pgBackRest 配置文件的基础路径。

用于覆盖 `--config` 和 `--config-include-path` 的默认基础路径；若这两个选项已在命令行中显式指定，则此设置不生效。

例如，仅传入 `--config-path=/conf/pgbackrest` 时，`--config` 的默认值将变为 `/conf/pgbackrest/pgbackrest.conf`，`--config-include-path` 的默认值将变为 `/conf/pgbackrest/conf.d`。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --config-path=/conf/pgbackrest
```

### 数据库超时选项（`--db-timeout`）

数据库查询超时时间。

设置对数据库执行查询的超时时长（单位：秒）。这包括备份启动和停止函数——两者各自可能需要较长时间。因此，除非明确知道这些函数会很快返回（例如已设置 `start-fast=y`，且备份期间数据库集群不会产生大量 WAL 段），否则应将此超时值设置得较高。

> **注意：** `db-timeout` 的值必须小于 `protocol-timeout`。

```yaml
default: 30m
allowed: [100ms, 7d]
example: --db-timeout=600
```

### I/O 超时选项（`--io-timeout`）

I/O 超时时间。

连接及读/写操作的超时时长（单位：秒）。

注意，整个读/写操作无需在此超时时间内全部完成，但必须持续有进展，哪怕每次仅传输一个字节。

```yaml
default: 1m
allowed: [100ms, 1h]
example: --io-timeout=120
```

### 锁文件路径选项（`--lock-path`）

锁文件的存储路径。

pgBackRest 将锁文件存放于此路径，用于防止相互冲突的操作并发执行。

```yaml
default: /tmp/pgbackrest
example: --lock-path=/backup/db/lock
```

### 中性 umask 选项（`--neutral-umask`）

使用中性 umask。

将 umask 设置为 `0000`，使仓库中的文件和目录拥有合理的权限。默认目录权限为 `0750`，默认文件权限为 `0640`；锁文件目录和日志目录的目录权限为 `0770`，文件权限为 `0660`。

若要改用执行用户自身的 umask，可在配置文件中指定 `neutral-umask=n`，或在命令行中使用 `--no-neutral-umask`。

```yaml
default: y
example: --no-neutral-umask
```

### 进程优先级选项（`--priority`）

设置进程优先级。

定义内核调度器为该进程分配的优先级（即 niceness 值）。正值降低优先级，负值提升优先级。普通进程通常没有权限提升自身优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### 协议超时选项（`--protocol-timeout`）

协议超时时间。

设置本地或远程进程在协议层等待新消息的超时时长（单位：秒），防止进程无限期等待。

> **注意：** `protocol-timeout` 的值必须大于 `db-timeout`。

```yaml
default: 31m
allowed: [100ms, 7d]
example: --protocol-timeout=630
```

### 保活选项（`--sck-keep-alive`）

启用 keep-alive。

在套接字连接上启用 keep-alive 消息。

```yaml
default: y
example: --no-sck-keep-alive
```

### Stanza 选项（`--stanza`）

定义 stanza。

stanza 是对一个 PostgreSQL 数据库集群的备份配置，定义了集群的位置、备份方式及归档选项等内容。大多数数据库服务器只有一个 PostgreSQL 集群，因此只需配置一个 stanza；备份服务器则需要为每个待备份的数据库集群各配置一个 stanza。

命名 stanza 时，用主集群名称命名看似直观，但更好的做法是用名称描述集群中存储的数据库。由于 stanza 名称同时用于主库和所有副本，选用描述集群实际用途的名称（如 `app` 或 `dw`）比使用本地集群名称（如 `main` 或 `prod`）更为合适。

```yaml
example: --stanza=main
```

### TCP 保活计数选项（`--tcp-keep-alive-count`）

TCP 保活计数。

指定在连接被判定为断开之前，允许丢失的 TCP 保活消息数量。

此选项仅在系统支持 `TCP_KEEPCNT` 套接字选项时可用。

```yaml
allowed: [1, 32]
example: --tcp-keep-alive-count=3
```

### TCP 保活空闲时间选项（`--tcp-keep-alive-idle`）

TCP 保活空闲时间。

指定网络空闲多少秒后，操作系统应开始发送 TCP 保活消息。

此选项仅在系统支持 `TCP_KEEPIDLE` 套接字选项时可用。

```yaml
allowed: [1, 3600]
example: --tcp-keep-alive-idle=60
```

### TCP 保活间隔选项（`--tcp-keep-alive-interval`）

TCP 保活间隔时间。

指定在未收到确认的情况下，TCP 保活消息的重传间隔（单位：秒）。

此选项仅在系统支持 `TCP_KEEPINTVL` 套接字选项时可用。

```yaml
allowed: [1, 900]
example: --tcp-keep-alive-interval=30
```

### TLSv1.2 加密套件选项（`--tls-cipher-12`）

允许使用的 TLSv1.2 加密套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均经过加密，与对象存储（如 S3）的连接默认也会加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许使用的加密套件。示例值是合理的选择，除非有特殊安全需求。未设置时（默认行为），使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 加密套件选项（`--tls-cipher-13`）

允许使用的 TLSv1.3 加密套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均经过加密，与对象存储（如 S3）的连接默认也会加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许使用的加密套件。未设置时（默认行为），使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-13=TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256
```

## 日志选项

### 控制台日志级别选项（`--log-level-console`）

控制台日志的输出级别。

支持以下日志级别：

- `off` - 不输出任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详细信息、信息、警告和错误
- `debug` - 记录调试、详细信息、信息、警告和错误
- `trace` - 记录跟踪（非常详细的调试信息）、调试、信息、警告和错误

```yaml
default: warn
example: --log-level-console=error
```

### 文件日志级别选项（`--log-level-file`）

文件日志的输出级别。

支持以下日志级别：

- `off` - 不输出任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详细信息、信息、警告和错误
- `debug` - 记录调试、详细信息、信息、警告和错误
- `trace` - 记录跟踪（非常详细的调试信息）、调试、信息、警告和错误

```yaml
default: info
example: --log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

stderr 的日志输出级别。

指定哪些日志级别输出到 `stderr` 而非 `stdout`（由 `log-level-console` 控制）。时间戳和进程信息不会输出到 `stderr`。

支持以下日志级别：

- `off` - 不输出任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详细信息、信息、警告和错误
- `debug` - 记录调试、详细信息、信息、警告和错误
- `trace` - 记录跟踪（非常详细的调试信息）、调试、信息、警告和错误

```yaml
default: off
example: --log-level-stderr=error
```

### 日志路径选项（`--log-path`）

日志文件的存储路径。

pgBackRest 将日志文件存放于此路径。注意，若 `log-level-file=off`，则无需配置此选项。

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

在控制台和文件日志中启用时间戳。该选项在生成文档等特殊场景下会被禁用。

```yaml
default: y
example: --no-log-timestamp
```

## 维护者选项

### 强制指定 PostgreSQL 版本选项（`--pg-version-force`）

强制指定 PostgreSQL 版本。

使用指定的 PostgreSQL 版本，而非通过读取 `pg_control` 或 WAL 头部自动检测到的版本。此选项主要用于 PostgreSQL 分支版本或开发版本——这些版本中的相关值可能与发行版本不同。PostgreSQL 通过 `server_version_num` 报告的版本必须与强制指定的版本一致。

警告：

使用此选项须谨慎，因为 `pg_control` 和 WAL 头部仍将按照所指定版本对应的官方 PostgreSQL 格式读取。若分支版本或开发版本修改了 pgBackRest 所依赖字段的格式，将导致不可预期的行为。通常，只有当分支在标准 PostgreSQL 结构成员*之后*追加自定义成员时，此选项才能正常工作。

```yaml
example: --pg-version-force=15
```

## 仓库选项

### Azure 仓库容器选项（`--repo-azure-container`）

Azure 仓库容器。

用于存储仓库的 Azure 容器。

设置 `repo-path=/` 可将 pgBackRest 仓库存储在容器根目录下，但通常建议指定一个前缀路径（如 `/repo`），以便日志等 Azure 生成的内容也能存储在同一容器中。

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
- `path` - 连接到 `endpoint` 主机，并在 URI 中前置账户名。

```yaml
default: host
example: --repo1-azure-uri-style=path
```

### 仓库加密类型选项（`--repo-cipher-type`）

仓库加密算法。

支持以下加密类型：

- `none` - 仓库不加密
- `aes-256-cbc` - 256 位密钥的高级加密标准

注意，即使仓库类型（如 S3）本身支持加密，pgBackRest 的加密操作始终在客户端执行。

```yaml
default: none
example: --repo1-cipher-type=aes-256-cbc
```

### GCS 仓库存储桶选项（`--repo-gcs-bucket`）

GCS 仓库存储桶。

用于存储仓库的 GCS 存储桶。

设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录下，但通常建议指定一个前缀路径（如 `/repo`），以便日志等 GCS 生成的内容也能存储在同一存储桶中。

```yaml
example: --repo1-gcs-bucket=/pg-backup
```

### GCS 仓库端点选项（`--repo-gcs-endpoint`）

GCS 仓库端点。

连接存储服务的端点，可修改为本地 GCS 服务器地址或其他备用端点。

```yaml
default: storage.googleapis.com
example: --repo1-gcs-endpoint=localhost
```

### GCS 仓库密钥类型选项（`--repo-gcs-key-type`）

GCS 仓库密钥类型。

支持以下授权类型：

- `auto` - 使用实例服务账号自动授权。
- `service` - 使用本地存储的服务账号密钥文件。
- `token` - 用于本地测试，例如 `fakegcs`。

当 `repo-gcs-key-type=service` 时，认证令牌续期时将重新加载凭据。

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

远程操作时使用的仓库主机。

若备份和归档存储在本地挂载的文件系统上，则无需配置此选项。

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

发送给仓库主机，用于验证客户端身份。

```yaml
example: --repo1-host-cert-file=/path/to/client.crt
```

### 仓库主机命令选项（`--repo-host-cmd`）

仓库主机上的 pgBackRest 命令路径。

仅当本地主机与仓库主机上的 pgBackRest 命令路径不同时才需要配置。若未定义，仓库主机命令与本地命令相同。

```yaml
default: [path of executed pgbackrest binary]
example: --repo1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：backup-cmd

### 仓库主机配置文件选项（`--repo-host-config`）

pgBackRest 仓库主机配置文件。

设置仓库主机上配置文件的位置。仅当仓库主机上的配置文件路径与本地不同时才需要配置。

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

用于证明客户端证书由其所有者发送。

```yaml
example: --repo1-host-key-file=/path/to/client.key
```

### 仓库主机端口选项（`--repo-host-port`）

仓库主机端口。

设置 `repo-host` 时，通过此选项为仓库主机协议指定非默认端口。

> **注意：** 当 `repo-host-type=ssh` 时，`repo-host-port` 没有默认值，端口以 `cmd-ssh` 所指定命令的配置为准。

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

仓库主机用户。

设置 `repo-host` 时，定义在仓库主机上执行操作所使用的用户。建议使用专用用户（如 `pgbackrest`）而非 `postgres`。若 PostgreSQL 也运行在仓库主机上，可将 `postgres` 用户加入 `pgbackrest` 组，使其对仓库具有读取权限，同时避免意外损坏仓库内容。

```yaml
default: pgbackrest
example: --repo1-host-user=repo-user
```

已弃用名称：backup-user

### 仓库路径选项（`--repo-path`）

备份和归档的存储路径。

仓库是 pgBackRest 存放备份文件和归档 WAL 段的位置。

提前估算所需空间可能较为困难。建议先执行几次备份，记录不同备份类型（全量/增量/差异）的大小，并测量每日产生的 WAL 量，以此大致了解所需空间。随着数据库的增长，需求也会随时间变化。

```yaml
default: /var/lib/pgbackrest
example: --repo1-path=/backup/db/backrest
```

### S3 仓库存储桶选项（`--repo-s3-bucket`）

S3 仓库存储桶。

用于存储仓库的 S3 存储桶。

设置 `repo-path=/` 可将 pgBackRest 仓库存储在存储桶根目录下，但通常建议指定一个前缀路径（如 `/repo`），以便日志等 AWS 生成的内容也能存储在同一存储桶中。

```yaml
example: --repo1-s3-bucket=pg-backup
```

### S3 仓库端点选项（`--repo-s3-endpoint`）

S3 仓库端点。

AWS 端点应与所选区域对应。

对于自定义或测试配置，`repo-storage-ca-file`、`repo-storage-ca-path`、`repo-storage-host`、`repo-storage-port` 和 `repo-storage-verify-tls` 选项可能会有所帮助。

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
- `path` - 连接到 `endpoint` 主机，并在 URI 中前置存储桶名。

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

主机指纹的生成方式应与 `repo-sftp-host-key-hash-type` 一致。可通过以下命令生成：`awk '{print $2}' ssh_host_xxx_key.pub | base64 -d | (md5sum or sha1sum) -b`。SSH 主机密钥文件通常位于 `/etc/ssh` 目录下。

```yaml
example: --repo1-sftp-host-fingerprint=f84e172dfead7aeeeae6c1fdfb5aa8cf
```

### SFTP 主机密钥检查类型选项（`--repo-sftp-host-key-check-type`）

SFTP 主机密钥检查类型。

支持以下检查类型：

- `strict` - pgBackRest 不会自动将主机密钥添加到 `~/.ssh/known_hosts`，并拒绝连接主机密钥已变更或在已知主机文件中不存在的主机。此选项要求用户手动添加所有新主机。
- `accept-new` - pgBackRest 将自动将新主机密钥添加到已知主机文件，但不允许连接主机密钥已变更的主机。
- `fingerprint` - pgBackRest 将对照 `repo-sftp-host-fingerprint` 选项指定的指纹验证主机密钥。
- `none` - 不执行主机密钥检查。

```yaml
default: strict
example: --repo1-sftp-host-key-check-type=accept-new
```

### SFTP 仓库主机密钥哈希类型选项（`--repo-sftp-host-key-hash-type`）

SFTP 仓库主机密钥哈希类型。

声明 SSH 启动时用于计算远程系统主机密钥摘要的哈希类型。较新版本的 `libssh2` 除支持 `md5` 和 `sha1` 外，还支持 `sha256`。

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

存储仓库的主机上所使用的用户。

```yaml
example: --repo1-sftp-host-user=pg-backup
```

### SFTP 已知主机文件选项（`--repo-sftp-known-host`）

SFTP 已知主机文件。

用于在认证过程中查找 SFTP 主机匹配条目的已知主机文件。若未指定，pgBackRest 默认搜索 `~/.ssh/known_hosts`、`~/.ssh/known_hosts2`、`/etc/ssh/ssh_known_hosts` 和 `/etc/ssh/ssh_known_hosts2`。若配置了一个或多个文件路径，pgBackRest 将在这些路径中查找匹配项；文件路径必须是绝对路径或以波浪号开头的路径。此选项可多次传入，以指定多个已知主机文件。使用已知主机文件检查时，不得同时指定 `repo-sftp-host-fingerprint`。另请参见 `repo-sftp-host-check-type` 选项。

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

用于认证的 SFTP 公钥文件。编译时链接了 OpenSSL 时为可选项；链接了其他库时为必填项。

```yaml
example: --repo1-sftp-public-key-file=~/.ssh/id_ed25519.pub
```

### 仓库存储 CA 文件选项（`--repo-storage-ca-file`）

仓库存储 CA 文件。

连接存储服务（如 S3、Azure）时，使用非系统默认的 CA 文件验证证书。

```yaml
example: --repo1-storage-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

已弃用名称：repo-azure-ca-file、repo-s3-ca-file

### 仓库存储 TLS CA 路径选项（`--repo-storage-ca-path`）

仓库存储 CA 路径。

连接存储服务（如 S3、Azure）时，使用非系统默认的 CA 路径验证证书。

```yaml
example: --repo1-storage-ca-path=/etc/pki/tls/certs
```

已弃用名称：repo-azure-ca-path、repo-s3-ca-path

### 仓库存储主机选项（`--repo-storage-host`）

仓库存储主机。

连接到存储服务（如 S3、Azure）端点以外的主机，通常用于测试场景。

```yaml
example: --repo1-storage-host=127.0.0.1
```

已弃用名称：repo-azure-host、repo-s3-host

### 仓库存储端口选项（`--repo-storage-port`）

仓库存储端口。

连接存储服务（如 S3、Azure）端点或指定主机时使用的端口。

```yaml
default: 443
allowed: [1, 65535]
example: --repo1-storage-port=9000
```

已弃用名称：repo-azure-port、repo-s3-port

### 仓库存储标签选项（`--repo-storage-tag`）

仓库存储标签。

指定当仓库为对象存储（如 S3）时，附加到对象上的标签。可重复使用此选项以添加多个标签。

pgBackRest 没有提供修改这些标签的机制，因此请在运行 `stanza-create` 之前确认标签设置正确，以保证整个仓库的标签一致。

```yaml
example: --repo1-storage-tag=key1=value1
```

### 仓库存储上传分块大小选项（`--repo-storage-upload-chunk-size`）

仓库存储上传分块大小。

当文件过大无法全部载入内存时，对象存储（如 S3）支持以分块方式上传。即使文件可以全部载入内存，限制上传所用内存也更为高效。

较大的分块大小通常能提升性能，因为它可减少上传请求次数，并允许在单次请求中传输更多数据。代价是内存占用更高——分块缓冲区按进程分配，`process-max` 值越大，总体内存消耗也越多。

注意，有效的分块大小因存储类型和平台而异。例如，AWS S3 的最小分块大小为 5MiB。各存储类型对分块大小的术语不同：AWS S3 称之为"part size"，GCS 称之为"chunk size"，Azure 称之为"block size"。

若文件大于 1GiB（PostgreSQL 默认创建的最大文件大小），分块大小将逐步增加至允许的最大值，以完成文件上传。

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

启用或禁用对存储服务（如 S3、Azure）服务器 TLS 证书的验证。禁用验证仅应用于测试环境或使用自签名证书的场景。

```yaml
default: y
example: --no-repo1-storage-verify-tls
```

已弃用名称：repo-azure-verify-tls、repo-s3-verify-ssl、repo-s3-verify-tls

### 仓库类型选项（`--repo-type`）

仓库使用的存储类型。

支持以下仓库类型：

- `azure` - Azure Blob Storage 服务
- `cifs` - 类似 `posix`，但禁用链接和目录 fsync
- `gcs` - Google Cloud Storage
- `posix` - 符合 POSIX 规范的文件系统
- `s3` - AWS Simple Storage Service
- `sftp` - 安全文件传输协议

以 NFS 挂载作为 `posix` 类型仓库时，适用于 pgBackRest 的规则与 PostgreSQL 文档中描述的规则相同，详见 [Creating a Database Cluster - File Systems](https://www.postgresql.org/docs/current/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM)。

```yaml
default: posix
example: --repo1-type=cifs
```

## Stanza 选项

### PostgreSQL 数据库选项（`--pg-database`）

PostgreSQL 数据库名称。

连接 PostgreSQL 时使用的数据库名称。默认值通常可正常使用，但某些安装环境中可能不包含此数据库。

注意，出于历史原因，`PGDATABASE` 环境变量的设置将被忽略。

```yaml
default: postgres
example: --pg1-database=backupdb
```

### PostgreSQL 主机选项（`--pg-host`）

远程操作时使用的 PostgreSQL 主机。

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

发送给 PostgreSQL 主机，用于验证客户端身份。

```yaml
example: --pg1-host-cert-file=/path/to/client.crt
```

### PostgreSQL 主机命令选项（`--pg-host-cmd`）

PostgreSQL 主机上的 pgBackRest 命令路径。

仅当本地主机与 PostgreSQL 主机上的 pgBackRest 命令路径不同时才需要配置。若未定义，PostgreSQL 主机命令与本地命令相同。

```yaml
default: [path of executed pgbackrest binary]
example: --pg1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：db-cmd

### PostgreSQL 主机配置文件选项（`--pg-host-config`）

pgBackRest 数据库主机配置文件。

设置 PostgreSQL 主机上配置文件的位置。仅当 PostgreSQL 主机上的配置文件路径与本地不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --pg1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：db-config

### PostgreSQL 主机配置包含路径选项（`--pg-host-config-include-path`）

pgBackRest 数据库主机配置包含路径。

设置 PostgreSQL 主机上配置包含路径的位置。仅当 PostgreSQL 主机上的配置包含路径与本地不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --pg1-host-config-include-path=/conf/pgbackrest/conf.d
```

### PostgreSQL 主机配置路径选项（`--pg-host-config-path`）

pgBackRest 数据库主机配置路径。

设置 PostgreSQL 主机上配置路径的位置。仅当 PostgreSQL 主机上的配置路径与本地不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --pg1-host-config-path=/conf/pgbackrest
```

### PostgreSQL 主机密钥文件选项（`--pg-host-key-file`）

PostgreSQL 主机密钥文件。

用于证明客户端证书由其所有者发送。

```yaml
example: --pg1-host-key-file=/path/to/client.key
```

### PostgreSQL 主机端口选项（`--pg-host-port`）

PostgreSQL 主机端口。

设置 `pg-host` 时，通过此选项为 PostgreSQL 主机协议指定非默认端口。

> **注意：** 当 `pg-host-type=ssh` 时，`pg-host-port` 没有默认值，端口以 `cmd-ssh` 所指定命令的配置为准。

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

- `ssh` - 安全外壳协议（SSH）。
- `tls` - pgBackRest TLS 服务器。

```yaml
default: ssh
example: --pg1-host-type=tls
```

### PostgreSQL 主机用户选项（`--pg-host-user`）

PostgreSQL 主机登录用户。

设置 `pg-host` 时，该用户同时拥有远程 pgBackRest 进程，并负责发起与 PostgreSQL 的连接。为确保其正常工作，该用户通常应为 PostgreSQL 数据库集群的所有者，默认为 `postgres`。

```yaml
default: postgres
example: --pg1-host-user=db_owner
```

已弃用名称：db-user

### PostgreSQL 路径选项（`--pg-path`）

PostgreSQL 数据目录。

此路径应与 PostgreSQL 报告的 `data_directory` 一致。尽管该值可从多处获取，但为了在恢复或离线备份场景下这些资源不可用时仍能正常工作，建议明确配置此项。

`pg-path` 在每次在线备份时都会与 PostgreSQL 报告的值进行核对，应始终保持最新。

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

PostgreSQL Unix 套接字路径。

PostgreSQL 启动时指定的 Unix 套接字目录。pgBackRest 会自动查找操作系统标准位置，通常无需配置此选项，除非通过 `postgresql.conf` 中的 `unix_socket_directories` 显式修改了套接字目录。

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

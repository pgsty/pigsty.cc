---
title: "仓库列表命令（repo-ls）"
linkTitle: "repo-ls"
weight: 100
description: "pgBackRest `repo-ls` 命令的选项与行为参考。"
icon: fa-solid fa-list
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： [pgBackRest Command Docs: repo-ls](https://pgbackrest.org/command.html#command-repo-ls)

`repo-ls` 类似于 Unix 的 `ls` 命令，但支持所有 pgBackRest 仓库类型。该命令接受一个路径参数，可以是绝对路径，也可以是相对于 `--repo-path` 所定义的仓库根路径的相对路径。此命令主要用于管理、排查和测试场景，并非常规部署的必要命令。

默认以文本格式输出，每行一个文件名。指定 `--output=json` 可切换为 JSON 格式。

若配置了多个仓库，默认操作优先级最高的仓库（如 `repo1`），如需指定特定仓库，请使用 `--repo` 选项。

## 命令选项

### 过滤输出选项（`--filter`）

使用正则表达式过滤输出。

过滤器在输出文件名或路径名之前生效。

```yaml
example: --filter="(F|D|I)$"
```

### 输出格式选项（`--output`）

输出格式。

支持以下输出类型：

- `text` — 简单列表，每行一个文件、链接或路径名。
- `json` — 以 JSON 格式输出文件、链接或路径的详细信息。

JSON 格式包含以下字段：

- `name` — 文件、链接或路径名（递归时包含部分路径）。
- `type` — `file`（文件）、`path`（路径）或 `link`（链接）。
- `size` — 字节大小（仅限文件）。
- `time` — 最后修改时间（仅限文件）。
- `destination` — 链接目标（仅限链接）。

```yaml
default: text
example: --output=json
```

### 递归子路径选项（`--recurse`）

在输出中包含所有子路径。

输出将递归包含所有子路径及其下的文件。

```yaml
default: n
example: --recurse
```

### 排序输出选项（`--sort`）

按升序、降序或不排序输出。

支持以下排序类型：

- `asc` — 升序。
- `desc` — 降序。
- `none` — 不排序。

```yaml
default: asc
example: --sort=desc
```

## 通用选项

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

该缓冲区用于复制、压缩、加密等操作。实际使用的缓冲区数量取决于具体选项，每种操作可能额外占用内存，例如 `gz` 压缩最多可额外使用 256KiB 内存。

允许的值为 `16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```yaml
default: 1MiB
example: --buffer-size=2MiB
```

### SSH 客户端命令选项（`--cmd-ssh`）

SSH 客户端命令。

如需使用特定的 SSH 客户端，或 `ssh` 命令不在 $PATH 中，可通过此选项指定。

```yaml
default: ssh
example: --cmd-ssh=/usr/bin/ssh
```

### 网络压缩级别选项（`--compress-level-network`）

网络压缩级别。

当 `compress-type=none` 且命令不在仓库所在主机上执行时，此选项设置网络传输的压缩级别，以减少网络流量。若 `compress-type` 不等于 `none`，则忽略此设置，改用 `compress-level`，避免对文件进行二次压缩。

```yaml
default: 1
allowed: [-5, 12]
example: --compress-level-network=1
```

### 配置文件选项（`--config`）

pgBackRest 配置文件。

通过此选项可指定非默认路径的配置文件。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --config=/conf/pgbackrest/pgbackrest.conf
```

### 配置包含路径选项（`--config-include-path`）

附加配置文件的目录路径。

该目录下扩展名为 `.conf` 的文件将与 pgBackRest 主配置文件合并，共同构成最终的配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --config-include-path=/conf/pgbackrest/conf.d
```

### 配置路径选项（`--config-path`）

pgBackRest 配置文件的基础路径。

此设置覆盖 `--config` 和 `--config-include-path` 的默认基础路径，前提是这两个选项未在命令行中显式指定。

例如，仅传入 `--config-path=/conf/pgbackrest` 时，`--config` 的默认值将变为 `/conf/pgbackrest/pgbackrest.conf`，`--config-include-path` 的默认值将变为 `/conf/pgbackrest/conf.d`。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --config-path=/conf/pgbackrest
```

### I/O 超时选项（`--io-timeout`）

I/O 超时。

连接、读写操作的超时时间（秒）。

注意，整个读写操作不必在此超时内完成，但必须持续有进展，哪怕每次只传输一个字节。

```yaml
default: 1m
allowed: [100ms, 1h]
example: --io-timeout=120
```

### 中立 umask 选项（`--neutral-umask`）

使用中立 umask。

将 umask 设为 0000，确保仓库中的文件以合理的权限创建。默认目录模式为 0750，文件模式为 0640；锁目录和日志目录的目录模式为 0770，文件模式为 0660。

如需沿用执行用户自身的 umask，请在配置文件中设置 `neutral-umask=n`，或在命令行中使用 `--no-neutral-umask`。

```yaml
default: y
example: --no-neutral-umask
```

### 进程优先级选项（`--priority`）

设置进程优先级。

指定内核调度器为该进程分配的 niceness 值。正值降低优先级，负值提高优先级。大多数情况下，进程没有权限自行提升优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### 协议超时选项（`--protocol-timeout`）

协议超时。

设置本地或远程进程在协议层等待新消息的超时时间（秒），防止进程无限期挂起。

> **注意：** `protocol-timeout` 的值必须大于 `db-timeout`。

```yaml
default: 31m
allowed: [100ms, 7d]
example: --protocol-timeout=630
```

### Keep-Alive 选项（`--sck-keep-alive`）

启用 keep-alive。

在套接字连接上启用 keep-alive 消息。

```yaml
default: y
example: --no-sck-keep-alive
```

### Stanza 选项（`--stanza`）

定义 stanza。

stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称，定义了集群的位置、备份方式、归档选项等。大多数数据库主机只有一个 PostgreSQL 集群，因此只有一个 stanza；备份服务器则会为每个需要备份的集群各配置一个 stanza。

stanza 名称很容易直接使用主库集群名，但更好的做法是用名称描述集群中所包含的数据库内容。由于该名称同时用于主库和所有副本，选择能体现集群实际用途的名称（如 `app` 或 `dw`）比使用本地集群名称（如 `main` 或 `prod`）更为合适。

```yaml
example: --stanza=main
```

### Keep-Alive 计数选项（`--tcp-keep-alive-count`）

Keep-alive 计数。

指定在判定连接断开之前，允许丢失的 TCP keep-alive 消息数量。

此选项仅在系统支持 `TCP_KEEPCNT` 套接字选项时有效。

```yaml
allowed: [1, 32]
example: --tcp-keep-alive-count=3
```

### Keep-Alive 空闲时间选项（`--tcp-keep-alive-idle`）

Keep-alive 空闲时间。

指定在无网络活动达到多少秒后，操作系统开始发送 TCP keep-alive 消息。

此选项仅在系统支持 `TCP_KEEPIDLE` 套接字选项时有效。

```yaml
allowed: [1, 3600]
example: --tcp-keep-alive-idle=60
```

### Keep-Alive 间隔选项（`--tcp-keep-alive-interval`）

Keep-alive 间隔时间。

指定未收到确认的 TCP keep-alive 消息重新发送前的等待秒数。

此选项仅在系统支持 `TCP_KEEPINTVL` 套接字选项时有效。

```yaml
allowed: [1, 900]
example: --tcp-keep-alive-interval=30
```

### TLSv1.2 加密套件选项（`--tls-cipher-12`）

允许的 TLSv1.2 加密套件。

pgBackRest 客户端与服务端之间的所有 TLS 连接均已加密，默认情况下与对象存储（如 S3）的连接也会加密。

> **注意：** 所有传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许的加密套件。示例中的配置是合理的选择，除非有特定安全要求。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 加密套件选项（`--tls-cipher-13`）

允许的 TLSv1.3 加密套件。

pgBackRest 客户端与服务端之间的所有 TLS 连接均已加密，默认情况下与对象存储（如 S3）的连接也会加密。

> **注意：** 所有传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许的加密套件。若未设置（默认），则使用底层 OpenSSL 库的默认值。

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
- `detail` — 记录详情、信息、警告和错误
- `debug` — 记录调试、详情、信息、警告和错误
- `trace` — 记录跟踪（极详细的调试信息）、调试、信息、警告和错误

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
- `detail` — 记录详情、信息、警告和错误
- `debug` — 记录调试、详情、信息、警告和错误
- `trace` — 记录跟踪（极详细的调试信息）、调试、信息、警告和错误

```yaml
default: info
example: --log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

stderr 日志级别。

指定哪些级别的日志输出到 `stderr` 而非 `stdout`（由 `log-level-console` 控制）。时间戳和进程信息不会输出到 `stderr`。

支持以下日志级别：

- `off` — 不记录任何日志（不推荐）
- `error` — 仅记录错误
- `warn` — 记录警告和错误
- `info` — 记录信息、警告和错误
- `detail` — 记录详情、信息、警告和错误
- `debug` — 记录调试、详情、信息、警告和错误
- `trace` — 记录跟踪（极详细的调试信息）、调试、信息、警告和错误

```yaml
default: off
example: --log-level-stderr=error
```

### 日志路径选项（`--log-path`）

日志文件存储路径。

pgBackRest 将日志文件保存到此路径。注意，若 `log-level-file=off`，则无需配置此项。

```yaml
default: /var/log/pgbackrest
example: --log-path=/backup/db/log
```

### 子进程日志选项（`--log-subprocess`）

启用子进程日志记录。

为该进程创建的所有子进程启用文件日志记录，使用 `log-level-file` 指定的日志级别。

```yaml
default: n
example: --log-subprocess
```

### 日志时间戳选项（`--log-timestamp`）

在日志中启用时间戳。

在控制台和文件日志中输出时间戳。某些特殊场景（如生成文档）下会禁用此选项。

```yaml
default: y
example: --no-log-timestamp
```

## 仓库选项

### 指定仓库选项（`--repo`）

指定仓库。

指定命令操作的目标仓库。

例如，可通过此选项指定从特定仓库执行恢复，而非由 pgBackRest 自动选择。

```yaml
allowed: [1, 256]
example: --repo=1
```

### Azure 仓库容器选项（`--repo-azure-container`）

Azure 仓库容器。

用于存储仓库的 Azure 容器。

pgBackRest 仓库可通过设置 `repo-path=/` 存储在容器根目录，但通常建议指定一个前缀（如 `/repo`），这样日志及其他 Azure 生成的内容也可存放在同一容器中。

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
- `path` — 连接到 `endpoint` 主机，并在 URI 中添加账户前缀。

```yaml
default: host
example: --repo1-azure-uri-style=path
```

### 仓库加密类型选项（`--repo-cipher-type`）

仓库加密算法。

支持以下加密类型：

- `none` — 不加密
- `aes-256-cbc` — 256 位密钥的 AES 加密标准

注意，即使仓库存储类型（如 S3）本身支持加密，pgBackRest 的加密始终在客户端执行。

```yaml
default: none
example: --repo1-cipher-type=aes-256-cbc
```

### GCS 仓库存储桶选项（`--repo-gcs-bucket`）

GCS 仓库存储桶。

用于存储仓库的 GCS 存储桶。

pgBackRest 仓库可通过设置 `repo-path=/` 存储在存储桶根目录，但通常建议指定一个前缀（如 `/repo`），这样日志及其他 GCS 生成的内容也可存放在同一存储桶中。

```yaml
example: --repo1-gcs-bucket=/pg-backup
```

### GCS 仓库端点选项（`--repo-gcs-endpoint`）

GCS 仓库端点。

用于连接存储服务的端点地址，可替换为本地 GCS 服务器或其他备用端点。

```yaml
default: storage.googleapis.com
example: --repo1-gcs-endpoint=localhost
```

### GCS 仓库密钥类型选项（`--repo-gcs-key-type`）

GCS 仓库密钥类型。

支持以下授权类型：

- `auto` — 使用实例服务账号授权。
- `service` — 使用本地存储的服务账号密钥。
- `token` — 用于本地测试，如 `fakegcs`。

当 `repo-gcs-key-type=service` 时，认证令牌续期时会重新加载身份凭据。

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

若备份和归档存储在本地挂载的文件系统中，则无需此设置。

```yaml
example: --repo1-host=repo1.domain.com
```

已弃用名称：backup-host

### 仓库主机 CA 文件选项（`--repo-host-ca-file`）

仓库主机证书颁发机构文件。

连接仓库主机时，使用指定的 CA 文件替代系统默认值。

```yaml
example: --repo1-host-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

### 仓库主机 CA 路径选项（`--repo-host-ca-path`）

仓库主机证书颁发机构路径。

连接仓库主机时，使用指定的 CA 路径替代系统默认值。

```yaml
example: --repo1-host-ca-path=/etc/pki/tls/certs
```

### 仓库主机证书文件选项（`--repo-host-cert-file`）

仓库主机证书文件。

向仓库主机发送此证书以证明客户端身份。

```yaml
example: --repo1-host-cert-file=/path/to/client.crt
```

### 仓库主机命令选项（`--repo-host-cmd`）

仓库主机上的 pgBackRest 命令。

仅当仓库主机上的 pgBackRest 命令路径与本地不同时才需要配置。若未定义，将沿用本地命令路径。

```yaml
default: [path of executed pgbackrest binary]
example: --repo1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：backup-cmd

### 仓库主机配置文件选项（`--repo-host-config`）

pgBackRest 仓库主机配置文件。

设置仓库主机上配置文件的路径。仅当仓库主机的配置文件路径与本地不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --repo1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：backup-config

### 仓库主机配置包含路径选项（`--repo-host-config-include-path`）

pgBackRest 仓库主机配置包含路径。

设置仓库主机上配置包含路径的位置。仅当仓库主机的配置包含路径与本地不同时才需要配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --repo1-host-config-include-path=/conf/pgbackrest/conf.d
```

### 仓库主机配置路径选项（`--repo-host-config-path`）

pgBackRest 仓库主机配置路径。

设置仓库主机上配置路径的位置。仅当仓库主机的配置路径与本地不同时才需要配置。

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

`repo-host` 已设置时的仓库主机端口。

通过此选项为仓库主机协议指定非默认端口。

> **注意：** 当 `repo-host-type=ssh` 时，`repo-host-port` 没有默认值，端口由 `cmd-ssh` 所指定命令的配置决定。

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

- `ssh` — 安全外壳协议。
- `tls` — pgBackRest TLS 服务器。

```yaml
default: ssh
example: --repo1-host-type=tls
```

### 仓库主机用户选项（`--repo-host-user`）

`repo-host` 已设置时的仓库主机用户。

定义在仓库主机上执行操作所使用的用户。建议使用专用用户（如 `pgbackrest`）而非 `postgres`。若 PostgreSQL 运行在仓库主机上，可将 `postgres` 用户加入 `pgbackrest` 组，使其对仓库拥有读取权限，同时避免意外损坏仓库内容。

```yaml
default: pgbackrest
example: --repo1-host-user=repo-user
```

已弃用名称：backup-user

### 仓库路径选项（`--repo-path`）

备份和归档的存储路径。

仓库是 pgBackRest 存储备份和归档 WAL 段的位置。

预先估算所需空间可能比较困难。建议先执行几次备份，分别记录全量、增量、差异备份的大小，并统计每天的 WAL 生成量，从而大致估算所需空间。随着数据库的演进，空间需求也会持续变化。

```yaml
default: /var/lib/pgbackrest
example: --repo1-path=/backup/db/backrest
```

### S3 仓库存储桶选项（`--repo-s3-bucket`）

S3 仓库存储桶。

用于存储仓库的 S3 存储桶。

pgBackRest 仓库可通过设置 `repo-path=/` 存储在存储桶根目录，但通常建议指定一个前缀（如 `/repo`），这样日志及其他 AWS 生成的内容也可存放在同一存储桶中。

```yaml
example: --repo1-s3-bucket=pg-backup
```

### S3 仓库端点选项（`--repo-s3-endpoint`）

S3 仓库端点。

AWS 端点应与存储桶所在区域匹配。

自定义或测试配置时，`repo-storage-ca-file`、`repo-storage-ca-path`、`repo-storage-host`、`repo-storage-port` 和 `repo-storage-verify-tls` 等选项可能有所帮助。

```yaml
example: --repo1-s3-endpoint=s3.amazonaws.com
```

### S3 仓库密钥类型选项（`--repo-s3-key-type`）

S3 仓库密钥类型。

支持以下类型：

- `shared` — 共享密钥
- `auto` — 自动获取临时凭据
- `web-id` — 自动获取 Web 身份凭据

```yaml
default: shared
example: --repo1-s3-key-type=auto
```

### S3 仓库 KMS 密钥 ID 选项（`--repo-s3-kms-key-id`）

S3 仓库 KMS 密钥。

使用指定的 AWS KMS 密钥启用 S3 服务端加密。

```yaml
example: --repo1-s3-kms-key-id=bceb4f13-6939-4be3-910d-df54dee817b7
```

### S3 仓库区域选项（`--repo-s3-region`）

S3 仓库区域。

存储桶所在的 AWS 区域。

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

- `host` — 连接到 `bucket.endpoint` 主机。
- `path` — 连接到 `endpoint` 主机，并在 URI 中添加存储桶前缀。

```yaml
default: host
example: --repo1-s3-uri-style=path
```

### SFTP 仓库主机选项（`--repo-sftp-host`）

SFTP 仓库主机。

存放仓库的 SFTP 主机地址。

```yaml
example: --repo1-sftp-host=sftprepo.domain
```

### SFTP 仓库主机指纹选项（`--repo-sftp-host-fingerprint`）

SFTP 仓库主机指纹。

指纹的生成方式须与 `repo-sftp-host-key-hash-type` 保持一致。可通过以下命令生成：`awk '{print $2}' ssh_host_xxx_key.pub | base64 -d | (md5sum or sha1sum) -b`。SSH 主机密钥通常位于 `/etc/ssh` 目录下。

```yaml
example: --repo1-sftp-host-fingerprint=f84e172dfead7aeeeae6c1fdfb5aa8cf
```

### SFTP 主机密钥检查类型选项（`--repo-sftp-host-key-check-type`）

SFTP 主机密钥检查类型。

支持以下检查类型：

- `strict` — pgBackRest 不会自动将主机密钥添加到 `~/.ssh/known_hosts`，并拒绝连接密钥已变更或不在已知主机文件中的主机。此选项要求手动添加所有新主机。
- `accept-new` — pgBackRest 自动将新主机密钥添加到已知主机文件，但不允许连接密钥已变更的主机。
- `fingerprint` — 根据 `repo-sftp-host-fingerprint` 指定的指纹验证主机密钥。
- `none` — 不执行主机密钥检查。

```yaml
default: strict
example: --repo1-sftp-host-key-check-type=accept-new
```

### SFTP 仓库主机密钥哈希类型选项（`--repo-sftp-host-key-hash-type`）

SFTP 仓库主机密钥哈希类型。

声明 SSH 握手时计算远程主机密钥摘要所用的哈希算法。较新版本的 `libssh2` 在 md5 和 sha1 之外还支持 `sha256`。

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

存储仓库的主机上对应的用户名。

```yaml
example: --repo1-sftp-host-user=pg-backup
```

### SFTP 已知主机文件选项（`--repo-sftp-known-host`）

SFTP 已知主机文件。

认证时用于匹配 SFTP 主机的已知主机文件。若未指定，pgBackRest 默认搜索 `~/.ssh/known_hosts`、`~/.ssh/known_hosts2`、`/etc/ssh/ssh_known_hosts` 和 `/etc/ssh/ssh_known_hosts2`。若指定了一个或多个文件路径，pgBackRest 将仅在这些文件中查找匹配项。路径必须为完整路径或以波浪号（`~`）开头的路径。此选项可多次传入以指定多个文件。使用已知主机文件检查时，不得同时指定 `repo-sftp-host-fingerprint`。另请参阅 `repo-sftp-host-check-type` 选项。

```yaml
example: --repo1-sftp-known-host=/home/postgres/.ssh/known_hosts
```

### SFTP 仓库私钥文件选项（`--repo-sftp-private-key-file`）

SFTP 私钥文件。

用于认证的 SFTP 私钥文件路径。

```yaml
example: --repo1-sftp-private-key-file=~/.ssh/id_ed25519
```

### SFTP 仓库公钥文件选项（`--repo-sftp-public-key-file`）

SFTP 公钥文件。

用于认证的 SFTP 公钥文件路径。若编译时链接的是 OpenSSL，则此项可选；若链接的是其他库，则为必填。

```yaml
example: --repo1-sftp-public-key-file=~/.ssh/id_ed25519.pub
```

### 仓库存储 CA 文件选项（`--repo-storage-ca-file`）

仓库存储 CA 文件。

连接对象存储（如 S3、Azure）时，使用指定的 CA 文件替代系统默认值。

```yaml
example: --repo1-storage-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

已弃用名称：repo-azure-ca-file, repo-s3-ca-file

### 仓库存储 TLS CA 路径选项（`--repo-storage-ca-path`）

仓库存储 CA 路径。

连接对象存储（如 S3、Azure）时，使用指定的 CA 路径替代系统默认值。

```yaml
example: --repo1-storage-ca-path=/etc/pki/tls/certs
```

已弃用名称：repo-azure-ca-path, repo-s3-ca-path

### 仓库存储主机选项（`--repo-storage-host`）

仓库存储主机。

连接到非标准存储端点（如 S3、Azure）的主机地址，通常用于测试。

```yaml
example: --repo1-storage-host=127.0.0.1
```

已弃用名称：repo-azure-host, repo-s3-host

### 仓库存储端口选项（`--repo-storage-port`）

仓库存储端口。

连接对象存储端点（或指定主机）时使用的端口。

```yaml
default: 443
allowed: [1, 65535]
example: --repo1-storage-port=9000
```

已弃用名称：repo-azure-port, repo-s3-port

### 仓库存储标签选项（`--repo-storage-tag`）

仓库存储标签。

当仓库使用对象存储（如 S3）时，为对象添加的标签。此选项可多次指定以添加多个标签。

pgBackRest 不提供修改已有标签的功能，因此请在执行 `stanza-create` 之前确认标签设置正确，以保证整个仓库的标签一致性。

```yaml
example: --repo1-storage-tag=key1=value1
```

### 仓库存储上传块大小选项（`--repo-storage-upload-chunk-size`）

仓库存储上传块大小。

S3 等对象存储在文件过大无法整体载入内存时，支持分块上传。即使文件能放入内存，限制单次上传的内存用量也更为高效。

较大的块大小通常有助于提升性能，因为它能减少上传请求次数，在单个请求中传输更多数据。但代价是内存占用更高，且块缓冲区按进程分配，`process-max` 越大，总内存消耗越多。

不同存储类型和平台对块大小的有效范围要求不同。例如，AWS S3 的最小块大小为 5MiB。各存储类型对此的术语也有差异：AWS S3 称为 "part size"，GCS 称为 "chunk size"，Azure 称为 "block size"。

若文件超过 1GiB（PostgreSQL 默认的单文件上限），块大小将自动逐步增大直至允许的最大值，以确保文件能够上传完成。

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

控制是否验证对象存储（如 S3、Azure）服务器的 TLS 证书。仅在测试或使用自签名证书等特殊场景下才应禁用验证。

```yaml
default: y
example: --no-repo1-storage-verify-tls
```

已弃用名称：repo-azure-verify-tls, repo-s3-verify-ssl, repo-s3-verify-tls

### 仓库目标时间选项（`--repo-target-time`）

仓库目标时间。

指定读取版本化存储上仓库时所参照的时间点，从而访问某一历史时刻的仓库状态，用于恢复因误操作或恶意软件导致删除或损坏的数据。

S3、GCS 和 Azure 均支持版本化存储，但通常默认未启用。除启用版本控制外，还可以考虑为 S3 启用对象锁定，为 GCS 或 Azure 启用软删除。

使用 `repo-target-time` 时，必须同时指定 `repo` 选项。并非所有仓库类型都支持版本控制，通常针对单个仓库进行恢复最为合理。

注意，时间戳比较使用 `<=` 关系，且提供的时间戳中的毫秒部分会被截断。

```yaml
example: --repo-target-time=2024-08-08 12:12:12+00
```

### 仓库类型选项（`--repo-type`）

仓库使用的存储类型。

支持以下仓库类型：

- `azure` — Azure Blob 存储服务
- `cifs` — 类似 `posix`，但禁用链接和目录 fsync
- `gcs` — Google Cloud 存储
- `posix` — 符合 POSIX 规范的文件系统
- `s3` — AWS 简单存储服务
- `sftp` — 安全文件传输协议

将 NFS 挂载用作 `posix` 类型仓库时，适用于 pgBackRest 的规则与 PostgreSQL 文档中的描述相同，详见 [Creating a Database Cluster - File Systems](https://www.postgresql.org/docs/current/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM)。

```yaml
default: posix
example: --repo1-type=cifs
```

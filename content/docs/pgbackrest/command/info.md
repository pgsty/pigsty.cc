---
title: "Info 命令（info）"
linkTitle: "info"
weight: 80
description: "pgBackRest `info` 命令选项与行为参考。"
icon: fa-solid fa-circle-info
module: [PGBACKREST]
categories: [参考]
---

> 原始页面： [pgBackRest Command Docs: info](https://pgbackrest.org/command.html#command-info)

`info` 命令可查询单个 stanza（stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称）或所有 stanza 的信息。默认输出为文本格式，以人类可读的摘要展示所请求 stanza 的备份信息。该格式可能随版本更新而变化。

如需机器可读输出，请使用 `--output=json`。JSON 输出包含的信息远多于文本格式，且除非发现缺陷，其格式保持稳定。

若只需快速查看进度信息，可指定 `--detail-level=progress`。注意此模式会跳过 stanza 可用性检查以外的所有检查。

每个 stanza 占独立的输出区块，可使用 `--stanza` 选项将输出限定到单个 stanza。stanza 的 `status` 字段简要反映其健康状态：`ok` 表示 pgBackRest 运行正常。若配置了多个仓库，`mixed` 状态表示该 stanza 在一个或多个仓库上存在异常，此时会按仓库分别显示详细状态。若某仓库发生了未知错误代码的错误，将使用 `other` 作为错误码，并附上完整的错误详情。`wal archive min/max` 显示当前归档中最小和最大 WAL 段；配置多个仓库时，除非指定了 `--repo` 选项，否则将跨所有仓库汇总报告。注意，由于归档保留策略或其他原因，归档中可能存在间隙。

若主机上正在运行 `backup`/`expire` 或 `restore` 命令，`status` 信息旁边将分别显示 `backup/expire running` 和/或 `restore running`。

备份按从旧到新的顺序列出。最旧的备份*始终*是全量备份（标签末尾以 `F` 标识），最新的备份可以是全量备份、差异备份（末尾以 `D` 标识）或增量备份（末尾以 `I` 标识）。

`timestamp start/stop` 定义了备份运行的时间段。`timestamp stop` 可用于确定时间点恢复（PITR）所需的目标备份。更多关于时间点恢复的信息，请参见 [**时间点恢复**](/docs/pgbackrest/user-guide/#时间点恢复) 章节。

`wal start/stop` 定义了恢复时将数据库恢复到一致状态所需的 WAL 范围。`backup` 命令完成前会确保该 WAL 范围已存在于归档中。

`database size` 是数据库未压缩的完整大小，`database backup size` 是本次备份实际需要备份的数据量（全量备份时两者相同）。

`repo` 表示该备份所在的仓库。`backup set size` 包含该备份及仓库中恢复数据库所需引用的所有备份文件，`backup size` 仅包含本次备份中的文件（全量备份时两者相同）。若 pgBackRest 启用了压缩，仓库大小反映压缩后的文件大小。

`backup reference total` 汇总了恢复该备份时所需引用的其他备份数量。使用 `--set` 选项可显示完整的引用列表。

## 命令选项

### 详细级别选项（`--detail-level`）

输出详细级别。

支持以下级别：

- `progress` - 仅输出当前备份/expire 的进度信息。此级别不能与 `--set` 选项同时使用。
- `full` - 输出完整信息。

```yaml
default: full
example: --detail-level=progress
```

### 输出格式选项（`--output`）

输出格式。

支持以下输出类型：

- `text` - 备份信息的人类可读摘要。
- `json` - JSON 格式的完整机器可读备份信息。

```yaml
default: text
example: --output=json
```

### 备份集选项（`--set`）

要查看详情的备份集。

详情包括：恢复该备份所需引用的其他备份完整列表、备份集中的数据库列表（含 OID，不含模板数据库）、表空间（含 OID）及其默认恢复目标路径，以及指定 `--link-all` 时符号链接的恢复目标路径。

```yaml
example: --set=20150131-153358F_20150131-153401I
```

### 类型选项（`--type`）

按备份类型过滤。

使用以下备份类型之一过滤输出：

- `full` - 仅输出全量备份。
- `diff` - 仅输出差异备份。
- `incr` - 仅输出增量备份。

```yaml
example: --type=full
```

## 通用选项

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

用于复制、压缩、加密等操作的缓冲区大小。实际使用的缓冲区数量取决于具体选项，每个操作可能还会使用额外内存，例如 `gz` 压缩可能额外使用 256KiB 内存。

允许的值为 `16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```yaml
default: 1MiB
example: --buffer-size=2MiB
```

### SSH 客户端命令选项（`--cmd-ssh`）

SSH 客户端命令。

如需使用其他 SSH 客户端，或 `ssh` 命令不在 $PATH 中，可通过此选项指定具体路径。

```yaml
default: ssh
example: --cmd-ssh=/usr/bin/ssh
```

### 网络压缩级别选项（`--compress-level-network`）

网络压缩级别。

当 `compress-type=none` 且命令不在仓库所在主机上运行时，设置网络传输的压缩级别。压缩用于减少网络流量。当 `compress-type` 不等于 `none` 时，将忽略 `compress-level-network`，转而使用 `compress-level`，以避免文件被压缩两次。

```yaml
default: 1
allowed: [-5, 12]
example: --compress-level-network=1
```

### 配置文件选项（`--config`）

pgBackRest 配置文件。

使用此选项指定非默认的配置文件路径。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --config=/conf/pgbackrest/pgbackrest.conf
```

### 配置包含路径选项（`--config-include-path`）

额外 pgBackRest 配置文件的路径。

该路径下扩展名为 `.conf` 的配置文件将与 pgBackRest 主配置文件合并，形成完整的配置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --config-include-path=/conf/pgbackrest/conf.d
```

### 配置基础路径选项（`--config-path`）

pgBackRest 配置文件的基础路径。

用于覆盖 `--config` 和 `--config-include-path` 选项的默认基础路径，除非这两个选项已在命令行中显式设置。

例如，仅传入 `--config-path=/conf/pgbackrest` 时，`--config` 的默认值将变为 `/conf/pgbackrest/pgbackrest.conf`，`--config-include-path` 的默认值将变为 `/conf/pgbackrest/conf.d`。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --config-path=/conf/pgbackrest
```

### I/O 超时选项（`--io-timeout`）

I/O 超时时间。

连接及读/写操作的超时时间（秒）。

注意，整个读/写操作无需在此超时时间内完成，但*必须*有所进展，哪怕只传输了一个字节。

```yaml
default: 1m
allowed: [100ms, 1h]
example: --io-timeout=120
```

### 锁文件路径选项（`--lock-path`）

锁文件的存储路径。

pgBackRest 使用此路径下的锁文件防止冲突操作并发执行。

```yaml
default: /tmp/pgbackrest
example: --lock-path=/backup/db/lock
```

### 进程优先级选项（`--priority`）

设置进程优先级。

定义内核调度器为进程分配的优先级（即 niceness 值）。正值降低优先级，负值提高优先级。大多数情况下，进程没有权限提高自身优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### 协议超时选项（`--protocol-timeout`）

协议超时时间。

本地或远程进程在协议层等待新消息的超时时间（秒），防止进程无限期等待。

> **注意：** `protocol-timeout` 选项的值必须大于 `db-timeout` 选项的值。

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

stanza 是 PostgreSQL 数据库集群的配置单元，定义了集群的位置、备份方式、归档选项等。大多数数据库主机只有一个 PostgreSQL 集群，因此只有一个 stanza；备份服务器则为每个需要备份的数据库集群各配置一个 stanza。

命名 stanza 时，虽然容易以主集群名称命名，但更好的做法是以集群所承载数据库的功能来命名。由于 stanza 名称同时适用于主库和所有副本，选择能描述集群实际用途的名称（如 `app` 或 `dw`）比使用本地集群名称（如 `main` 或 `prod`）更为合适。

```yaml
example: --stanza=main
```

### TCP 保活计数选项（`--tcp-keep-alive-count`）

保活（keep-alive）计数。

在判定连接已断开之前，允许丢失的 TCP 保活消息数量。

此选项仅在支持 `TCP_KEEPCNT` 套接字选项的系统上可用。

```yaml
allowed: [1, 32]
example: --tcp-keep-alive-count=3
```

### TCP 保活空闲时间选项（`--tcp-keep-alive-idle`）

保活（keep-alive）空闲时间。

无网络活动持续多少秒后，操作系统开始发送 TCP 保活消息。

此选项仅在支持 `TCP_KEEPIDLE` 套接字选项的系统上可用。

```yaml
allowed: [1, 3600]
example: --tcp-keep-alive-idle=60
```

### TCP 保活间隔选项（`--tcp-keep-alive-interval`）

保活（keep-alive）间隔时间。

未收到确认的 TCP 保活消息在多少秒后重新发送。

此选项仅在支持 `TCP_KEEPINTVL` 套接字选项的系统上可用。

```yaml
allowed: [1, 900]
example: --tcp-keep-alive-interval=30
```

### TLSv1.2 加密套件选项（`--tls-cipher-12`）

允许使用的 TLSv1.2 加密套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均已加密。默认情况下，到对象存储（如 S3）的连接也经过加密。

> **注意：** 所有传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许使用的加密套件。示例中的配置是合理的选择，除非有特殊安全要求。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 加密套件选项（`--tls-cipher-13`）

允许使用的 TLSv1.3 加密套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均已加密。默认情况下，到对象存储（如 S3）的连接也经过加密。

> **注意：** 所有传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许使用的加密套件。若未设置（默认），则使用底层 OpenSSL 库的默认值。

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
- `trace` - 记录跟踪信息（非常详细的调试）、调试、信息、警告和错误

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
- `trace` - 记录跟踪信息（非常详细的调试）、调试、信息、警告和错误

```yaml
default: info
example: --log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

stderr 日志级别。

指定哪些日志级别输出到 `stderr` 而非 `stdout`（由 `log-level-console` 控制）。输出到 `stderr` 的日志不含时间戳和进程信息。

支持以下日志级别：

- `off` - 不记录任何日志（不推荐）
- `error` - 仅记录错误
- `warn` - 记录警告和错误
- `info` - 记录信息、警告和错误
- `detail` - 记录详情、信息、警告和错误
- `debug` - 记录调试、详情、信息、警告和错误
- `trace` - 记录跟踪信息（非常详细的调试）、调试、信息、警告和错误

```yaml
default: off
example: --log-level-stderr=error
```

### 日志路径选项（`--log-path`）

日志文件的存储路径。

pgBackRest 将日志文件存储在此路径下。注意，若 `log-level-file=off`，则无需设置日志路径。

```yaml
default: /var/log/pgbackrest
example: --log-path=/backup/db/log
```

### 子进程日志选项（`--log-subprocess`）

启用子进程日志记录。

为该进程创建的所有子进程启用文件日志记录，日志级别由 `log-level-file` 指定。

```yaml
default: n
example: --log-subprocess
```

### 日志时间戳选项（`--log-timestamp`）

在日志中启用时间戳。

在控制台和文件日志中启用时间戳。在生成文档等特殊情况下，此选项会被禁用。

```yaml
default: y
example: --no-log-timestamp
```

## 仓库选项

### 指定仓库选项（`--repo`）

设置仓库。

指定命令操作的目标仓库。

例如，可使用此选项从特定仓库执行恢复，而不是让 pgBackRest 自动选择。

```yaml
allowed: [1, 256]
example: --repo=1
```

### Azure 仓库容器选项（`--repo-azure-container`）

Azure 仓库容器。

用于存储仓库的 Azure 容器。

pgBackRest 仓库可通过设置 `repo-path=/` 存储在容器根目录下，但通常建议指定一个前缀路径（如 `/repo`），以便日志和其他 Azure 生成的内容也能存储在同一容器中。

```yaml
example: --repo1-azure-container=pg-backup
```

### Azure 仓库密钥类型选项（`--repo-azure-key-type`）

Azure 仓库密钥类型。

支持以下授权类型：

- `shared` - 共享密钥
- `sas` - 共享访问签名
- `auto` - 使用 Azure 托管身份自动授权

```yaml
default: shared
example: --repo1-azure-key-type=sas
```

### Azure 仓库 URI 风格选项（`--repo-azure-uri-style`）

Azure URI 风格。

支持以下 URI 风格：

- `host` - 连接到 `account.endpoint` 主机。
- `path` - 连接到 `endpoint` 主机，并在 URI 前添加账户前缀。

```yaml
default: host
example: --repo1-azure-uri-style=path
```

### 仓库加密类型选项（`--repo-cipher-type`）

用于加密仓库的加密算法。

支持以下加密类型：

- `none` - 仓库不加密
- `aes-256-cbc` - 256 位密钥长度的高级加密标准

注意，即使仓库类型（如 S3）支持服务端加密，pgBackRest 也始终在客户端执行加密。

```yaml
default: none
example: --repo1-cipher-type=aes-256-cbc
```

### GCS 仓库存储桶选项（`--repo-gcs-bucket`）

GCS 仓库存储桶。

用于存储仓库的 GCS 存储桶。

pgBackRest 仓库可通过设置 `repo-path=/` 存储在存储桶根目录下，但通常建议指定一个前缀路径（如 `/repo`），以便日志和其他 GCS 生成的内容也能存储在同一存储桶中。

```yaml
example: --repo1-gcs-bucket=/pg-backup
```

### GCS 仓库端点选项（`--repo-gcs-endpoint`）

GCS 仓库端点。

用于连接存储服务的端点。可更新为使用本地 GCS 服务器或其他端点。

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

当 `repo-gcs-key-type=service` 时，认证令牌续期时将重新加载凭证。

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

当备份和归档到本地挂载的文件系统时，无需设置此选项。

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

仓库主机上的 pgBackRest 命令路径。

仅当仓库主机上的 pgBackRest 命令路径与本地不同时才需要设置。若未定义，仓库主机命令将与本地命令保持一致。

```yaml
default: [path of executed pgbackrest binary]
example: --repo1-host-cmd=/usr/lib/backrest/bin/pgbackrest
```

已弃用名称：backup-cmd

### 仓库主机配置文件选项（`--repo-host-config`）

pgBackRest 仓库主机配置文件。

设置仓库主机上配置文件的位置。仅当仓库主机上的配置文件路径与本地不同时才需要设置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --repo1-host-config=/conf/pgbackrest/pgbackrest.conf
```

已弃用名称：backup-config

### 仓库主机配置包含路径选项（`--repo-host-config-include-path`）

pgBackRest 仓库主机配置包含路径。

设置仓库主机上配置包含路径的位置。仅当仓库主机上的配置包含路径与本地不同时才需要设置。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --repo1-host-config-include-path=/conf/pgbackrest/conf.d
```

### 仓库主机配置路径选项（`--repo-host-config-path`）

pgBackRest 仓库主机配置路径。

设置仓库主机上配置路径的位置。仅当仓库主机上的配置路径与本地不同时才需要设置。

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

设置了 `repo-host` 时仓库主机使用的端口。

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

- `ssh` - Secure Shell。
- `tls` - pgBackRest TLS 服务器。

```yaml
default: ssh
example: --repo1-host-type=tls
```

### 仓库主机用户选项（`--repo-host-user`）

设置了 `repo-host` 时仓库主机使用的用户。

定义在仓库主机上执行操作的用户。建议使用非 `postgres` 用户，例如 `pgbackrest`。如果 PostgreSQL 运行在仓库主机上，可将 `postgres` 用户加入 `pgbackrest` 组，使其对仓库拥有只读权限，避免意外损坏仓库内容。

```yaml
default: pgbackrest
example: --repo1-host-user=repo-user
```

已弃用名称：backup-user

### 仓库路径选项（`--repo-path`）

备份和归档的存储路径。

仓库是 pgBackRest 存储备份和归档 WAL 段的地方。

事先估算所需空间可能比较困难。最佳做法是先执行几次备份，记录不同备份类型（全量/增量/差异）的大小，并测量每天生成的 WAL 量，以此作为空间规划的参考。随着数据库的演进，需求也会随时间变化。

```yaml
default: /var/lib/pgbackrest
example: --repo1-path=/backup/db/backrest
```

### S3 仓库存储桶选项（`--repo-s3-bucket`）

S3 仓库存储桶。

用于存储仓库的 S3 存储桶。

pgBackRest 仓库可通过设置 `repo-path=/` 存储在存储桶根目录下，但通常建议指定一个前缀路径（如 `/repo`），以便日志和其他 AWS 生成的内容也能存储在同一存储桶中。

```yaml
example: --repo1-s3-bucket=pg-backup
```

### S3 仓库端点选项（`--repo-s3-endpoint`）

S3 仓库端点。

AWS 端点应与所选区域匹配。

对于自定义/测试配置，`repo-storage-ca-file`、`repo-storage-ca-path`、`repo-storage-host`、`repo-storage-port` 和 `repo-storage-verify-tls` 选项可能会有用。

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

创建存储桶时所在的 AWS 区域。

```yaml
example: --repo1-s3-region=us-east-1
```

### S3 仓库请求方付费选项（`--repo-s3-requester-pays`）

S3 仓库请求方付费。

启用 S3 请求方付费模式。

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
- `path` - 连接到 `endpoint` 主机，并在 URI 前添加存储桶前缀。

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

指纹的生成方式应与 `repo-sftp-host-key-hash-type` 一致。可通过以下命令生成：`awk '{print $2}' ssh_host_xxx_key.pub | base64 -d | (md5sum or sha1sum) -b`。SSH 主机密钥通常位于 `/etc/ssh` 目录下。

```yaml
example: --repo1-sftp-host-fingerprint=f84e172dfead7aeeeae6c1fdfb5aa8cf
```

### SFTP 主机密钥检查类型选项（`--repo-sftp-host-key-check-type`）

SFTP 主机密钥检查类型。

支持以下检查类型：

- `strict` - pgBackRest 不会自动将主机密钥添加到 `~/.ssh/known_hosts`，并拒绝连接到主机密钥已更改或未在已知主机文件中找到的主机。此选项要求用户手动添加所有新主机。
- `accept-new` - pgBackRest 会自动将新主机密钥添加到用户的已知主机文件中，但不允许连接到主机密钥已更改的主机。
- `fingerprint` - pgBackRest 将根据 `repo-sftp-host-fingerprint` 选项指定的指纹验证主机密钥。
- `none` - 不执行主机密钥检查。

```yaml
default: strict
example: --repo1-sftp-host-key-check-type=accept-new
```

### SFTP 仓库主机密钥哈希类型选项（`--repo-sftp-host-key-hash-type`）

SFTP 仓库主机密钥哈希类型。

声明 SSH 启动时用于计算远程系统主机密钥摘要的哈希类型。较新版本的 `libssh2` 除支持 md5 和 sha1 外，还支持 `sha256`。

```yaml
example: --repo1-sftp-host-key-hash-type=sha256
```

### SFTP 仓库主机端口选项（`--repo-sftp-host-port`）

SFTP 仓库主机端口。

SFTP 仓库主机端口。

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

认证期间用于搜索 SFTP 主机匹配项的已知主机文件。若未指定，pgBackRest 默认搜索 `~/.ssh/known_hosts`、`~/.ssh/known_hosts2`、`/etc/ssh/ssh_known_hosts` 和 `/etc/ssh/ssh_known_hosts2`。若配置了一个或多个文件路径，pgBackRest 将在这些路径中搜索匹配项。文件路径必须是完整路径或以波浪号（~）开头的路径。该选项可多次传入以指定多个已知主机文件。使用已知主机文件检查时，不得同时指定 `repo-sftp-host-fingerprint`。另请参见 `repo-sftp-host-check-type` 选项。

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

用于认证的 SFTP 公钥文件。编译时使用 OpenSSL 则为可选，使用其他库则为必填。

```yaml
example: --repo1-sftp-public-key-file=~/.ssh/id_ed25519.pub
```

### 仓库存储 CA 文件选项（`--repo-storage-ca-file`）

仓库存储 CA 文件。

连接存储（如 S3、Azure）时使用非系统默认的 CA 文件。

```yaml
example: --repo1-storage-ca-file=/etc/pki/tls/certs/ca-bundle.crt
```

已弃用名称：repo-azure-ca-file、repo-s3-ca-file

### 仓库存储 TLS CA 路径选项（`--repo-storage-ca-path`）

仓库存储 CA 路径。

连接存储（如 S3、Azure）时使用非系统默认的 CA 路径。

```yaml
example: --repo1-storage-ca-path=/etc/pki/tls/certs
```

已弃用名称：repo-azure-ca-path、repo-s3-ca-path

### 仓库存储主机选项（`--repo-storage-host`）

仓库存储主机。

连接到存储（如 S3、Azure）端点以外的主机。通常用于测试。

```yaml
example: --repo1-storage-host=127.0.0.1
```

已弃用名称：repo-azure-host、repo-s3-host

### 仓库存储端口选项（`--repo-storage-port`）

仓库存储端口。

连接存储（如 S3、Azure）端点（或指定的主机）时使用的端口。

```yaml
default: 443
allowed: [1, 65535]
example: --repo1-storage-port=9000
```

已弃用名称：repo-azure-port、repo-s3-port

### 仓库存储标签选项（`--repo-storage-tag`）

仓库存储标签。

当仓库为对象存储（如 S3）时，指定添加到对象上的标签。可重复使用此选项以添加多个标签。

pgBackRest 不提供修改这些标签的功能，因此请在运行 `stanza-create` 之前正确设置，以确保整个仓库的标签一致。

```yaml
example: --repo1-storage-tag=key1=value1
```

### 仓库存储上传分块大小选项（`--repo-storage-upload-chunk-size`）

仓库存储上传分块大小。

当文件过大而无法完整存入内存时，S3 等对象存储支持分块上传。即使文件能够存入内存，限制上传所用内存量也更为高效。

较大的分块大小通常能提升性能，因为可以减少上传请求次数，并允许在单次请求中上传更多数据而无需分块。缺点是内存占用更高，且由于分块缓冲区必须按进程分配，较大的 `process-max` 值会导致整体内存消耗增加。

注意，有效的分块大小因存储类型和平台而异。例如，AWS S3 的最小分块大小为 5MiB。各存储类型对分块大小的术语不同：AWS S3 使用 "part size"，GCS 使用 "chunk size"，Azure 使用 "block size"。

若文件大于 1GiB（PostgreSQL 默认创建的最大文件大小），分块大小将逐步增大至允许的最大值，以完成文件上传。

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

启用或禁用对存储（如 S3、Azure）服务器 TLS 证书的验证。仅在测试场景或使用自签名证书时才应禁用验证。

```yaml
default: y
example: --no-repo1-storage-verify-tls
```

已弃用名称：repo-azure-verify-tls、repo-s3-verify-ssl、repo-s3-verify-tls

### 仓库目标时间选项（`--repo-target-time`）

仓库的目标时间。

目标时间定义了命令读取版本化存储上的仓库所使用的时间点。通过此选项，命令可以读取某一历史时刻的仓库状态，从而恢复因用户误操作或恶意软件导致被删除或损坏的数据。

S3、GCS 和 Azure 均支持版本化存储，但通常默认不启用。除了启用版本控制外，还可考虑为 S3 启用对象锁定，为 GCS 或 Azure 启用软删除。

使用 `repo-target-time` 选项时，还必须同时指定 `repo` 选项。并非所有仓库类型都支持版本控制，通常针对单个仓库进行恢复更为合理。

注意，与存储时间戳的比较为 <=（小于等于）所提供的时间戳，且提供的时间戳中的毫秒部分将被截断。

```yaml
example: --repo-target-time=2024-08-08 12:12:12+00
```

### 仓库类型选项（`--repo-type`）

仓库使用的存储类型。

支持以下仓库类型：

- `azure` - Azure Blob 存储服务
- `cifs` - 类似 `posix`，但禁用链接和目录 fsync
- `gcs` - Google Cloud 存储
- `posix` - 符合 POSIX 标准的文件系统
- `s3` - AWS 简单存储服务
- `sftp` - 安全文件传输协议

将 NFS 挂载用作 `posix` 仓库时，pgBackRest 遵循的规则与 PostgreSQL 文档中描述的相同，详见 [Creating a Database Cluster - File Systems](https://www.postgresql.org/docs/current/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM)。

```yaml
default: posix
example: --repo1-type=cifs
```

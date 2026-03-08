---
title: "服务器心跳命令（server-ping）"
linkTitle: "server-ping"
weight: 130
description: "pgBackRest `server-ping` 命令选项与行为参考。"
icon: fa-solid fa-heart-pulse
module: [PGBACKREST]
categories: [参考]
---

> 原始页面： [pgBackRest Command Docs: server-ping](https://pgbackrest.org/command.html#command-server-ping)

向 pgBackRest TLS 服务器发送 ping，确认其正在接受连接。此命令仅作为存活性检查，不进行身份验证。

若命令行中未指定主机，则使用 `tls-server-host` 选项的值。

## 命令选项

### TLS 服务器地址选项（`--tls-server-address`）

TLS 服务器地址。

服务器监听客户端请求的 IP 地址。

```yaml
default: localhost
example: --tls-server-address=*
```

### TLS 服务器端口选项（`--tls-server-port`）

TLS 服务器端口。

服务器监听客户端请求的端口号。

```yaml
default: 8432
allowed: [1, 65535]
example: --tls-server-port=8000
```

## 通用选项

### 缓冲区大小选项（`--buffer-size`）

I/O 操作的缓冲区大小。

用于复制、压缩、加密等操作的缓冲区大小。实际使用的缓冲区数量取决于具体选项，每个操作可能会额外消耗内存，例如 `gz` 压缩可能额外占用 256KiB 内存。

允许的值为：`16KiB`、`32KiB`、`64KiB`、`128KiB`、`256KiB`、`512KiB`、`1MiB`、`2MiB`、`4MiB`、`8MiB` 和 `16MiB`。

```yaml
default: 1MiB
example: --buffer-size=2MiB
```

### 配置文件选项（`--config`）

pgBackRest 配置文件。

使用此选项可以指定非默认的配置文件。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_FILE
example: --config=/conf/pgbackrest/pgbackrest.conf
```

### 配置包含路径选项（`--config-include-path`）

附加 pgBackRest 配置文件的路径。

该路径下扩展名为 `.conf` 的配置文件将与主配置文件合并，形成统一的配置文件。

```yaml
default: CFGOPTDEF_CONFIG_PATH "/" PROJECT_CONFIG_INCLUDE_PATH
example: --config-include-path=/conf/pgbackrest/conf.d
```

### 配置基础路径选项（`--config-path`）

pgBackRest 配置文件的基础路径。

此设置用于覆盖 `--config` 和 `--config-include-path` 选项的默认基础路径，但若这两个选项已在命令行中显式指定，则此设置不生效。

例如，仅传入 `--config-path=/conf/pgbackrest` 时，`--config` 的默认值将变为 `/conf/pgbackrest/pgbackrest.conf`，`--config-include-path` 的默认值将变为 `/conf/pgbackrest/conf.d`。

```yaml
default: CFGOPTDEF_CONFIG_PATH
example: --config-path=/conf/pgbackrest
```

### I/O 超时选项（`--io-timeout`）

I/O 超时时间。

连接及读写操作的超时时间（单位：秒）。

注意，整个读写操作无需在超时时间内全部完成，但必须有*一定*进展，哪怕只传输了一个字节。

```yaml
default: 1m
allowed: [100ms, 1h]
example: --io-timeout=120
```

### 进程优先级选项（`--priority`）

设置进程优先级。

定义内核调度器为进程分配的优先级（即 niceness 值）。正值降低优先级，负值提高优先级。大多数情况下，进程没有权限提高自身优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### 保活选项（`--sck-keep-alive`）

启用 keep-alive。

在 socket 连接上启用 keep-alive 消息。

```yaml
default: y
example: --no-sck-keep-alive
```

### TCP 保活计数选项（`--tcp-keep-alive-count`）

keep-alive 探测次数。

指定在判定连接已断开之前，允许丢失的 TCP keep-alive 消息数量。

此选项仅在支持 `TCP_KEEPCNT` socket 选项的系统上可用。

```yaml
allowed: [1, 32]
example: --tcp-keep-alive-count=3
```

### TCP 保活空闲时间选项（`--tcp-keep-alive-idle`）

keep-alive 空闲时间。

指定在多长时间无网络活动后（单位：秒），操作系统开始发送 TCP keep-alive 消息。

此选项仅在支持 `TCP_KEEPIDLE` socket 选项的系统上可用。

```yaml
allowed: [1, 3600]
example: --tcp-keep-alive-idle=60
```

### TCP 保活间隔选项（`--tcp-keep-alive-interval`）

keep-alive 重传间隔时间。

指定未收到确认的 TCP keep-alive 消息在多长时间后重传（单位：秒）。

此选项仅在支持 `TCP_KEEPINTVL` socket 选项的系统上可用。

```yaml
allowed: [1, 900]
example: --tcp-keep-alive-interval=30
```

### TLSv1.2 加密套件选项（`--tls-cipher-12`）

允许使用的 TLSv1.2 加密套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均经过加密。默认情况下，与对象存储（如 S3）的连接也会加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许的加密套件。除非有特定的安全要求，否则示例值是一个合理的选择。若未设置（默认），则使用底层 OpenSSL 库的默认值。

```yaml
example: --tls-cipher-12=HIGH:MEDIUM:+3DES:!aNULL
```

### TLSv1.3 加密套件选项（`--tls-cipher-13`）

允许使用的 TLSv1.3 加密套件。

pgBackRest 客户端与服务器之间的所有 TLS 连接均经过加密。默认情况下，与对象存储（如 S3）的连接也会加密。

> **注意：** 任何传输连接的最低安全级别为 TLSv1.2。

如有需要，可调整允许的加密套件。若未设置（默认），则使用底层 OpenSSL 库的默认值。

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
- `detail` - 记录详情、信息、警告和错误
- `debug` - 记录调试、详情、信息、警告和错误
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
- `detail` - 记录详情、信息、警告和错误
- `debug` - 记录调试、详情、信息、警告和错误
- `trace` - 记录跟踪（非常详细的调试信息）、调试、信息、警告和错误

```yaml
default: info
example: --log-level-file=debug
```

### 标准错误日志级别选项（`--log-level-stderr`）

stderr 的日志输出级别。

指定哪些日志级别将输出到 `stderr` 而非 `stdout`（后者由 `log-level-console` 控制）。时间戳和进程信息不会输出到 `stderr`。

支持以下日志级别：

- `off` - 不输出任何日志（不推荐）
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

日志文件的存储路径。

pgBackRest 将日志文件写入此路径。注意，若 `log-level-file=off`，则无需配置日志路径。

```yaml
default: /var/log/pgbackrest
example: --log-path=/backup/db/log
```

### 日志时间戳选项（`--log-timestamp`）

在日志中启用时间戳。

在控制台和文件日志中启用时间戳输出。某些特殊场景（如生成文档时）会禁用此选项。

```yaml
default: y
example: --no-log-timestamp
```

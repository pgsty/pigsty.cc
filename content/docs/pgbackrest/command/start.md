---
title: "启动命令（start）"
linkTitle: "start"
weight: 170
description: "pgBackRest `start` 命令选项与行为参考。"
icon: fa-solid fa-play
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： [pgBackRest Command Docs: start](https://pgbackrest.org/command.html#command-start)

如果 pgBackRest 进程之前已通过 `stop` 命令停止，可使用 `start` 命令重新允许它们运行。注意，此命令不会立即启动任何 pgBackRest 进程，只是解除运行限制。详情与示例请参见 [**启动与停止**](/docs/pgbackrest/user-guide/#启动与停止)。

## 通用选项

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

### 锁文件路径选项（`--lock-path`）

锁文件的存储路径。

pgBackRest 使用锁文件防止并发执行相互冲突的操作，此选项指定锁文件的存放位置。

```yaml
default: /tmp/pgbackrest
example: --lock-path=/backup/db/lock
```

### 中性 umask 选项（`--neutral-umask`）

使用中性 umask。

将 umask 设置为 0000，以便以合理的权限创建仓库中的文件。目录的默认权限为 0750，文件的默认权限为 0640。锁文件和日志目录的目录及文件权限分别为 0770 和 0660。

如需使用运行用户自身的 umask，请在配置文件中设置 `neutral-umask=n`，或在命令行中使用 `--no-neutral-umask`。

```yaml
default: y
example: --no-neutral-umask
```

### 进程优先级选项（`--priority`）

设置进程优先级。

定义内核调度器为进程分配的优先级（即 niceness 值）。正值降低优先级，负值提高优先级。大多数情况下，进程没有权限提高自身优先级。

```yaml
allowed: [-20, 19]
example: --priority=19
```

### Stanza 选项（`--stanza`）

定义 stanza。

stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称，包括集群位置、备份方式、归档选项等。大多数数据库主机只有一个 PostgreSQL 集群，因此只有一个 stanza；备份服务器则需要为每个待备份的集群分别配置一个 stanza。

命名 stanza 时，以主集群名称命名看似直观，但更好的做法是用集群所承载数据库的功能来命名。由于 stanza 名称会同时用于主库和所有副本，因此选择能描述集群实际用途的名称（如 `app` 或 `dw`）比使用本地集群名称（如 `main` 或 `prod`）更为合适。

```yaml
example: --stanza=main
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

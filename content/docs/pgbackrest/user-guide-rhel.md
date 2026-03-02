---
title: "用户指南（RHEL/Rocky/CentOS）"
linkTitle: "User Guide (EL)"
weight: 30
description: "面向 RHEL、Rocky Linux 和 AlmaLinux 系统的 pgBackRest 安装配置与使用指南，按步骤逐一讲解。"
icon: fa-brands fa-redhat
module: [PGBACKREST]
category: [Tutorial]
---

--------

## 简介

本用户指南设计为从头到尾顺序阅读——每个章节都依赖前一章节的内容。例如， [恢复](#恢复-1) 章节依赖 [快速开始](#快速开始) 章节中完成的配置。熟悉 pgBackRest 之后可以跳章查阅，但初次阅读建议按顺序跟随本指南。

本指南的示例基于 RHEL 和 PostgreSQL 13，但迁移到其他 Unix 发行版或 PostgreSQL 版本并不困难。与操作系统相关的命令，仅限于创建、启动、停止和删除 PostgreSQL 集群的部分；pgBackRest 命令在所有 Unix 系统上均相同，只是可执行文件的路径可能有所不同。pgBackRest 致力于在各 PostgreSQL 版本间保持一致的行为，但不同版本间存在细微差异，这些差异可能体现在本指南的部分示例中，例如 PostgreSQL 路径、文件名和配置项。

有关 PostgreSQL 的配置信息和文档，请参阅 PostgreSQL [**手册**](http://www.postgresql.org/docs/13/static/index.html)。

本用户指南在文档方面采用了一种较为新颖的方式：每条命令在从 XML 源构建文档时都会在虚拟机上实际执行，因此可以高度相信这些命令按照所呈现的顺序正确运行。命令的输出在相关时会显示在命令下方；若未包含输出，则是因为其与说明无关或会干扰行文。

所有命令均预期以具有 `root` 和 `postgres` 用户 sudo 权限的非特权用户身份运行。也可以直接以对应用户身份运行命令，此时去掉 `sudo` 即可。

--------

## 核心概念

以下概念的定义与 pgBackRest、PostgreSQL 以及本用户指南密切相关。

### 备份

备份是数据库集群的一致性副本，可用于从硬件故障中恢复、执行时间点恢复（PITR），或启动新的备库。

**全量备份（full backup）**：pgBackRest 将数据库集群的全部内容复制到备份中。数据库集群的第一次备份始终是全量备份。pgBackRest 始终能够直接恢复全量备份。全量备份的一致性不依赖于备份外部的任何文件。

**差异备份（differential backup）**：pgBackRest 仅复制自上次全量备份以来发生变化的数据库集群文件。pgBackRest 通过复制所选差异备份中的所有文件以及上一次全量备份中相应的未变化文件来恢复差异备份。差异备份的优点是比全量备份占用更少的磁盘空间，但差异备份和全量备份必须都有效才能恢复差异备份。

**增量备份（incremental backup）**：pgBackRest 仅复制自上次备份（可以是另一次增量备份、差异备份或全量备份）以来发生变化的数据库集群文件。由于增量备份只包含自上次备份以来发生变化的文件，因此通常比全量备份或差异备份小得多。与差异备份一样，增量备份依赖于其他备份的有效性才能恢复。由于增量备份只包含自上次备份以来发生变化的文件，因此恢复增量备份需要所有上一次差异备份之前的增量备份、上一次差异备份以及上一次全量备份都有效。如果不存在差异备份，则恢复增量备份需要回溯到上一次全量备份的所有增量备份以及全量备份本身都有效。

### 恢复

恢复是将备份复制到某个系统并将其作为活跃数据库集群启动的过程。恢复需要备份文件和一个或多个 WAL 段才能正确运行。

### 预写日志（WAL）

WAL 是 PostgreSQL 确保已提交更改不会丢失的机制。事务按顺序写入 WAL，待这些写入刷盘后，事务即视为已提交。随后，后台进程将变更写入主数据库集群文件（即堆）。发生崩溃时，PostgreSQL 会重放 WAL 以恢复数据库一致性。

WAL 在概念上是连续无限的，但在实践中被切分为每个 16MB 的独立文件，称为 WAL 段。WAL 段遵循 `0000000100000A1E000000FE` 这样的命名约定，其中前 8 个十六进制数字表示时间线，后 16 位是逻辑序列号（LSN）。

### 加密

加密是将数据转换为无法识别格式的过程，只有提供正确的密码（口令）才能还原。

pgBackRest 使用用户提供的密码对仓库进行加密，防止未经授权的访问。

--------

## 升级 pgBackRest

### 从 v1 升级到 v2

从 v1 升级到 v2 相当简单。仓库格式没有改变，v1 中所有未弃用的选项都被接受，因此对于大多数安装来说，只需安装新版本即可。

但有几点注意事项：

- 已弃用的 `thread-max` 选项不再有效，请改用 `process-max`。
- 已弃用的 `archive-max-mb` 选项不再有效，该选项已被语义不同的 `archive-push-queue-max` 选项取代。
- `backup-user` 选项的默认值已从 `backrest` 改为 `pgbackrest`。
- 在 v2.02 中，pgBackRest 配置文件的默认位置从 `/etc/pgbackrest.conf` 更改为 `/etc/pgbackrest/pgbackrest.conf`。如果 `/etc/pgbackrest/pgbackrest.conf` 不存在，则会加载 `/etc/pgbackrest.conf` 文件（如果存在）。

许多选项名称已更改以提高一致性，但 v1 中的旧名称仍然被接受。一般来说，`db-*` 选项已重命名为 `pg-*`，`backup-*`/`retention-*` 选项在适当的情况下已重命名为 `repo-*`。

使用 v2 中引入的新名称时，PostgreSQL 和仓库选项必须使用索引，例如 `pg1-host`、`pg1-path`、`repo1-path`、`repo1-type` 等。

### 从 v2.x 升级到 v2.y

从 v2.x 升级到 v2.y 非常简单。仓库格式没有改变，因此对于大多数安装来说，只需安装新版本的二进制文件即可。如果你没有使用旧版本不支持的新功能，也可以降级。

重要提示：

本地和远程 pgBackRest 版本必须完全匹配，因此应一起升级。如果版本不匹配，WAL 归档和备份将无法正常工作，直到版本匹配为止。在这种情况下，将报告以下错误：`[ProtocolError] expected value '2.x' for greeting key 'version' but got '2.y'`。

--------

## 编译构建

推荐通过包安装 pgBackRest，而非从源码构建。有关包的更多信息，请参阅 [**安装**](#安装)。

如需从源码构建，建议使用专用构建主机而非在生产环境中操作，因为构建所需的许多工具不应安装在生产服务器上。pgBackRest 只有单个可执行文件，构建完成后可轻松复制到目标主机。

build **⇒** 将 pgBackRest 版本 `2.58.0` 下载到 `/build` 路径

```bash
mkdir -p /build
wget -q -O - \
       https://github.com/pgbackrest/pgbackrest/archive/release/2.58.0.tar.gz | \
       tar zx -C /build
```

build **⇒** 安装构建依赖

```bash
sudo yum install meson gcc postgresql13-devel openssl-devel \
       libxml2-devel lz4-devel libzstd-devel bzip2-devel libyaml-devel libssh2-devel
```

build **⇒** 配置并编译 pgBackRest

```bash
meson setup /build/pgbackrest /build/pgbackrest-release-2.58.0
ninja -C /build/pgbackrest
```

--------

## 安装

创建一台名为 pg-primary 的新主机，用于承载演示集群并运行 pgBackRest 示例。

推荐通过包安装 pgBackRest，而非从源码构建。通过包安装时，本节后续步骤通常不需要手动执行，但某些包可能会跳过创建目录或权限设置有误。遇到这种情况时，手动创建目录或更新权限即可。

RHEL 平台的 pgBackRest 包可在 [yum.postgresql.org](http://yum.postgresql.org) 获取。

如果所用发行版/版本没有提供包，可以 [从源码构建](#编译构建) 后手动安装，步骤如下。

pg-primary **⇒** 安装依赖项

```bash
sudo yum install postgresql-libs libssh2
```

pg-primary **⇒** 从构建主机复制 pgBackRest 二进制文件

```bash
sudo scp build:/build/pgbackrest/src/pgbackrest /usr/bin
sudo chmod 755 /usr/bin/pgbackrest
```

pgBackRest 需要日志目录、配置目录和配置文件。

pg-primary **⇒** 创建 pgBackRest 配置文件和目录

```bash
sudo mkdir -p -m 770 /var/log/pgbackrest
sudo chown postgres:postgres /var/log/pgbackrest
sudo mkdir -p /etc/pgbackrest
sudo mkdir -p /etc/pgbackrest/conf.d
sudo touch /etc/pgbackrest/pgbackrest.conf
sudo chmod 640 /etc/pgbackrest/pgbackrest.conf
sudo chown postgres:postgres /etc/pgbackrest/pgbackrest.conf
```

pgBackRest 现在应已正确安装，建议验证一下。若有依赖项缺失，在命令行运行 pgBackRest 时会出现相应错误。

pg-primary **⇒** 确认安装成功

```bash
sudo -u postgres pgbackrest

pgBackRest 2.58.0 - General help

Usage:
    pgbackrest [options] [command]

Commands:
    annotate        add or modify backup annotation
    archive-get     get a WAL segment from the archive
    archive-push    push a WAL segment to the archive
    backup          backup a database cluster
    check           check the configuration
    expire          expire backups that exceed retention
    help            get help
    info            retrieve information about backups
    repo-get        get a file from a repository
    repo-ls         list files in a repository
    restore         restore a database cluster
    server          pgBackRest server
    server-ping     ping pgBackRest server
    stanza-create   create the required stanza data
    stanza-delete   delete a stanza
    stanza-upgrade  upgrade a stanza
    start           allow pgBackRest processes to run
    stop            stop pgBackRest processes from running
    verify          verify contents of a repository
    version         get version

Use 'pgbackrest help [command]' for more information.
```

--------

## 快速开始

本章介绍 pgBackRest 和 PostgreSQL 的基本配置，并演示 `backup`、`restore` 和 `info` 命令的用法。

### 创建演示集群

创建演示集群是可选的，但强烈推荐——尤其对新用户而言，因为本指南的所有示例命令都引用该演示集群，且假设它运行在默认端口（5432）上。由于还有一些配置工作要完成，集群将在后续章节中才会启动。

pg-primary **⇒** 创建演示集群

```bash
sudo -u postgres /usr/pgsql-13/bin/initdb \
       -D /var/lib/pgsql/13/data -k -A peer
```

RHEL 默认在日志文件名中包含星期几。这使用户指南变得复杂，因此将 `log_filename` 设置为固定值。

pg-primary:`/var/lib/pgsql/13/data/postgresql.conf` **⇒** 设置 log_filename

```ini
log_filename = 'postgresql.log'
```

### 配置集群 Stanza

stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称，定义了集群的位置、备份方式、归档选项等。大多数数据库服务器只有一个 PostgreSQL 集群，因此只有一个 stanza；备份服务器则为每个需要备份的数据库集群各配置一个 stanza。

命名 stanza 时，以主集群名称命名是常见做法，但更好的方式是描述集群所承载的业务数据。由于 stanza 名称会同时用于主库和所有副本，选择描述集群功能的名称（如 `app` 或 `dw`）比使用本地集群名称（如 `main` 或 `prod`）更为合适。

`demo` 准确描述了该集群的用途，因此也是一个恰当的 stanza 名称。

pgBackRest 需要知道 PostgreSQL 集群数据目录的位置。该路径可以直接从 PostgreSQL 获取，但在恢复场景中 PostgreSQL 进程不可用。备份过程中，pgBackRest 会将配置中的路径与 PostgreSQL 实际运行的路径进行比较，两者必须完全一致，否则备份会报错。请确保 `pg-path` 与 PostgreSQL 报告的 `data_directory` 完全匹配。

RHEL 默认将集群数据存储在 `/var/lib/pgsql/[version]/data`，因此数据目录路径很容易确定。

创建 `/etc/pgbackrest/pgbackrest.conf` 时，必须赋予数据库所有者（通常是 `postgres`）读取权限。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 PostgreSQL 集群数据目录

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
```

pgBackRest 配置文件采用类 Windows INI 的格式。节（section）以方括号中的文本表示，键/值对包含在各节中。以 `#` 开头的行被视为注释而忽略。不支持引号，键和值会自动去除首尾空白。同一节若出现多次，将被合并处理。

pgBackRest 配置文件有多种加载方式：

- `config` 和 `config-include-path` 均为默认值：若默认配置文件存在则加载，若默认配置包含路径存在则追加其中的 `*.conf` 文件。
- 指定了 `config` 选项：仅加载指定的配置文件，该文件必须存在。
- 指定了 `config-include-path`：加载该路径下的 `*.conf` 文件，路径必须存在；同时若默认配置文件存在也会加载。如只希望加载指定路径中的文件，可同时传递 `--no-config` 选项。
- 同时指定了 `config` 和 `config-include-path`：使用用户指定的值，加载配置文件并追加指定包含路径中的 `*.conf` 文件，这些文件均预期存在。
- 指定了 `config-path`：此设置会覆盖配置文件默认基路径和/或默认 `config-include-path` 的基路径，除非显式设置了 `config` 和/或 `config-include-path` 选项。

所有配置文件会被拼接，相当于一个大文件，每个文件必须各自有效。这意味着需要在每个文件中为所需的键/值对指定对应的节。顺序不影响结果，但节有基于类型的优先级。优先级从高到低为：

- [*stanza*:*command*]
- [*stanza*]
- [global:*command*]
- [global]

注意：

`--config`、`--config-include-path` 和 `--config-path` 仅是命令行选项。

pgBackRest 也可以通过环境变量进行配置（如下示例所示），适用于 [`backup`](/docs/pgbackrest/command/backup/)、[`restore`](/docs/pgbackrest/command/restore/) 和 [`archive-push`](/docs/pgbackrest/command/archive-push/) 等命令。

pg-primary **⇒** 使用环境变量配置 `log-path`

```bash
sudo -u postgres bash -c ' \
       export PGBACKREST_LOG_PATH=/path/set/by/env && \
       pgbackrest --log-level-console=error help backup log-path'

pgBackRest 2.58.0 - 'backup' command - 'log-path' option help

Path where log files are stored.

The log path provides a location for pgBackRest to store log files. Note that
if log-level-file=off then no log path is required.

```

```
current: /path/set/by/env

default: /var/log/pgbackrest
```

### 创建仓库

仓库是 pgBackRest 存储备份和归档 WAL 段的位置。

提前精确估算所需空间并不容易。较好的做法是先执行几次备份，记录不同类型备份（full/incr/diff）的大小，并统计每日产生的 WAL 量，由此对空间需求有大致的判断——尽管随着数据库的演变，需求会随时间变化。

本演示将仓库存储在与 PostgreSQL 服务器相同的主机上。这是最简单的配置，适用于通过传统备份软件对数据库主机进行整机备份的场景。

pg-primary **⇒** 创建 pgBackRest 仓库

```bash
sudo mkdir -p /var/lib/pgbackrest
sudo chmod 750 /var/lib/pgbackrest
sudo chown postgres:postgres /var/lib/pgbackrest
```

需要配置仓库路径，让 pgBackRest 知道仓库的位置。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 pgBackRest 仓库路径

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-path=/var/lib/pgbackrest
```

也可以配置多个仓库，详见 [**多仓库**](#多仓库) 章节。

### 配置归档

备份正在运行的 PostgreSQL 集群需要启用 WAL 归档。`%p` 是 PostgreSQL 传递待归档 WAL 段路径的占位符。请注意，即使没有对集群进行显式写入，备份过程中也会生成*至少*一个 WAL 段。

pg-primary:`/var/lib/pgsql/13/data/postgresql.conf` **⇒** 配置归档设置

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
log_filename = 'postgresql.log'
```

完成以上更改后，必须重启 PostgreSQL 集群才能使配置生效。

pg-primary **⇒** 重启演示集群

```bash
sudo systemctl restart postgresql-13.service
```

如果归档单个 WAL 段预计超过 60 秒（默认值）才能到达仓库，应适当增大 pgBackRest 的 `archive-timeout` 选项。注意，此选项与 PostgreSQL 的 `archive_timeout` 不同——后者用于强制切换 WAL 段，适用于长时间没有写入的数据库。有关 PostgreSQL `archive_timeout` 的更多信息，请参阅 PostgreSQL [**预写日志**](https://www.postgresql.org/docs/current/static/runtime-config-wal.html) 文档。

`archive-push` 命令可以单独配置选项。例如，可以为归档设置较低的压缩级别以加快速度，而不影响备份使用的压缩设置。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `archive-push` 使用较低的压缩级别

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-path=/var/lib/pgbackrest
[global:archive-push]
compress-level=3
```

这种配置方式适用于任何命令，也可以针对特定 stanza 细化，例如 `demo:archive-push`。

### 配置保留策略

pgBackRest 根据保留策略选项对备份执行过期（轮转）操作。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置保留 2 个全量备份

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
[global:archive-push]
compress-level=3
```

有关保留策略的更多信息，请参阅 [**保留策略**](#保留策略) 章节。

### 配置仓库加密

本节将为仓库配置加密类型和密钥，以演示加密功能。无论仓库类型（如 S3 或其他对象存储）是否自带加密，pgBackRest 的加密始终在客户端执行。

密钥应使用长随机口令。生成口令的推荐方式是运行：`openssl rand -base64 48`。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 pgBackRest 仓库加密

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
[global:archive-push]
compress-level=3
```

仓库完成配置、stanza 创建并检查完毕后，加密设置将无法更改。

### 创建 Stanza

需要运行 `stanza-create` 命令来初始化 stanza。建议在 `stanza-create` 之后运行 `check` 命令，验证归档和备份配置是否正确。

pg-primary **⇒** 创建 stanza 并检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info stanza-create
```

```
P00   INFO: stanza-create command begin 2.58.0: --exec-id=1001-c0a11b26 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --stanza=demo
P00   INFO: stanza-create for stanza 'demo' on repo1

P00   INFO: stanza-create command end: completed successfully
```

### 检查配置

`check` 命令验证 pgBackRest 和 `archive_command` 是否为指定 stanza 正确配置了归档和备份。它会检查运行该命令的主机上配置的所有仓库和数据库，并能发现配置错误——尤其是因所需 WAL 段未能到达归档而导致备份不完整的问题。该命令可在 PostgreSQL 主机或仓库主机上运行。也可以在备库主机上运行，但由于备库无法执行 `pg_switch_xlog()`/`pg_switch_wal()`，此时只会测试仓库配置。

注意：`check` 命令会调用 `pg_create_restore_point('pgBackRest Archive Check')` 和 `pg_switch_xlog()`/`pg_switch_wal()`，以强制 PostgreSQL 归档一个 WAL 段。

pg-primary **⇒** 检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=1029-7fad2b46 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --stanza=demo
P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 000000010000000000000001 successfully archived to '/var/lib/pgbackrest/archive/demo/13-1/0000000100000000/000000010000000000000001-7f6faa2bdee862515d964b0dac87805c5f762965.gz' on repo1

P00   INFO: check command end: completed successfully
```

### 性能调优

pgBackRest 有许多性能选项，为保持仓库的向后兼容性，这些选项默认未启用。创建新仓库时，建议启用以下选项。这些选项也可用于现有仓库，但需注意较旧版本的 pgBackRest 将无法读取该仓库——具体兼容性取决于各功能的引入版本，详见下列说明。

- `compress-type` — 决定 `backup` 和 `archive-push` 命令使用的压缩算法。默认为 `gz`（Gzip），但推荐使用 `zst`（Zstandard），后者速度更快，压缩率与 `gz` 相近。`zst` 自 [v2.27](/docs/pgbackrest/release/#v227-release-notes) 起受 `compress-type` 支持。详见 [**压缩类型**](/docs/pgbackrest/configuration/#compress-type-option---compress-type)。
- `repo-bundle` — 备份时将小文件合并打包，节省空间并提升 `backup` 和 `restore` 的速度，在 S3 等对象存储上效果尤为明显。该选项在 [v2.39](/docs/pgbackrest/release/#v239-release-notes) 中引入。详见 [**文件打包**](#文件打包)。
- `repo-block` — 执行 `diff`/`incr` 备份时，仅存储文件中发生变化的部分，而非整个文件，从而节省空间并提升备份速度。该选项在 [v2.46](/docs/pgbackrest/release/#v246-release-notes) 中引入，但建议至少使用 [v2.52.1](/docs/pgbackrest/release/#v2521-release-notes)。详见 [**块级增量备份**](#块级增量备份)。

还有一些性能选项默认未启用，原因是需要额外配置，或默认值虽安全但并非最优。这些选项在所有 v2 版本中均可用。

- `process-max` — 控制命令使用的进程数，默认值为 1，几乎在任何场景下都不是合适的值。各命令对 `process-max` 的使用方式不同，详见各命令的文档。
- `archive-async` — 批量将 WAL 文件归档到仓库，大幅提升归档吞吐量。默认未启用，因为需要额外创建缓冲区目录。详见 [**异步归档**](#异步归档)。
- `backup-standby` — 在备库而非主库上执行备份，以减轻主库负载。默认未启用，因为需要额外配置，并且要求存在一个或多个备库。详见 [**从备库备份**](#从备库备份)。

### 执行备份

默认情况下，pgBackRest 会等待下一个定期检查点完成后才开始备份。根据 PostgreSQL 的 `checkpoint_timeout` 和 `checkpoint_segments` 设置，检查点可能需要较长时间，备份才能开始。通常建议设置 `start-fast=y`，让备份立即启动——这会强制执行一次检查点，但由于备份一般每天只运行一次，额外的检查点对性能的影响可以忽略不计。不过，对于负载极高的集群，最好按需在命令行传递 `--start-fast`。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置备份快速启动

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
[global:archive-push]
compress-level=3
```

对 PostgreSQL 集群执行备份，运行 pgBackRest 的 `backup` 命令即可。

pg-primary **⇒** 备份演示集群

```bash
sudo -u postgres pgbackrest --stanza=demo \
       --log-level-console=info backup
```

```
P00   INFO: backup command begin 2.58.0: --exec-id=1102-82fc2007 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-full=2 --stanza=demo --start-fast

P00   WARN: no prior backup exists, incr backup has been changed to full

P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 000000010000000000000002, lsn = 0/2000028
       [filtered 3 lines of output]
P00   INFO: check archive for segment(s) 000000010000000000000002:000000010000000000000003
P00   INFO: new backup label = 20260119-092100F

P00   INFO: full backup size = 23.2MB, file total = 936

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=1102-82fc2007 --log-level-console=info --no-log-timestamp --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-full=2 --stanza=demo
```

默认情况下，pgBackRest 会尝试执行增量备份。但增量备份必须基于全量备份，由于尚无全量备份，pgBackRest 自动改为执行全量备份。

`type` 选项可用于指定备份类型（全量或差异）。

pg-primary **⇒** 对演示集群执行差异备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=diff \
       --log-level-console=info backup
```

```
       [filtered 7 lines of output]
P00   INFO: check archive for segment(s) 000000010000000000000004:000000010000000000000005
P00   INFO: new backup label = 20260119-092100F_20260119-092102D

P00   INFO: diff backup size = 9.1KB, file total = 936

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=1163-a7659621 --log-level-console=info --no-log-timestamp --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-full=2 --stanza=demo
```

这次没有出现警告，因为全量备份已经存在。增量备份可以基于全量备份*或*差异备份，而差异备份只能基于全量备份。执行全量备份时，使用 `--type=full` 选项运行 `backup` 命令即可。

在线备份期间，pgBackRest 会等待备份一致性所需的 WAL 段完成归档。等待时间由 `archive-timeout` 选项控制，默认为 60 秒。如果已知单个 WAL 段的归档需要更长时间，应适当增大此选项的值。

### 制定备份计划

可以使用 cron 等工具来调度备份。

在下面的示例中，配置了两个 cron 任务：每周日早上 6:30 运行全量备份，周一至周六早上 6:30 运行差异备份。如果此 crontab 是在周中首次安装，那么 pgBackRest 在差异任务第一次执行时会运行全量备份，第二天再运行差异备份。

```bash
#m h   dom mon dow   command
30 06  *   *   0     pgbackrest --type=full --stanza=demo backup
30 06  *   *   1-6   pgbackrest --type=diff --stanza=demo backup
```

备份计划确定后，务必配置保留策略，以便定期过期备份，详见 [保留策略](#保留策略)。

### 备份信息

使用 `info` 命令获取备份信息。

pg-primary **⇒** 获取演示集群的信息

```bash
sudo -u postgres pgbackrest info
```

```
stanza: demo
    status: ok
    cipher: aes-256-cbc

    db (current)
        wal archive min/max (13): 000000010000000000000001/000000010000000000000005

        full backup: 20260119-092100F

            timestamp start/stop: 2026-01-19 09:21:00+00 / 2026-01-19 09:21:02+00
            wal start/stop: 000000010000000000000002 / 000000010000000000000003
            database size: 23.2MB, database backup size: 23.2MB
            repo1: backup set size: 2.9MB, backup size: 2.9MB

        diff backup: 20260119-092100F_20260119-092102D

            timestamp start/stop: 2026-01-19 09:21:02+00 / 2026-01-19 09:21:03+00
            wal start/stop: 000000010000000000000004 / 000000010000000000000005
            database size: 23.2MB, database backup size: 9.1KB
            repo1: backup set size: 2.9MB, backup size: 880B
            backup reference total: 1 full
```

`info` 命令可操作单个 stanza 或所有 stanza。文本输出是默认格式，为请求的 stanza 提供人类可读的备份摘要。此格式可能随任何版本发布而变化。

如需机器可读输出，请使用 `--output=json`。JSON 输出包含比文本输出更多的信息，并在未发现 bug 的情况下保持稳定。

要加快执行速度，可以通过指定 `--detail-level=progress` 将输出限制为仅进度信息。请注意，这会跳过除 stanza 可用性之外的所有检查。

每个 stanza 有一个单独的节，可以使用 `--stanza` 选项将输出限制到单个 stanza。stanza 的 `status` 给出了 stanza 健康状况的简要说明。如果是 `ok`，则 pgBackRest 运行正常。如果有多个仓库，`mixed` 状态表明 stanza 在一个或多个仓库上不健康；在这种情况下，stanza 的状态将按仓库详细列出。对于仓库上发生的不属于已知错误码的错误，将使用错误码 `other` 并提供完整的错误详情。`wal archive min/max` 显示归档中当前存储的最小和最大 WAL，在有多个仓库的情况下，会跨所有仓库报告，除非设置了 `--repo` 选项。请注意，由于归档保留策略或其他原因，可能存在间隙。

如果这些命令中的任何一个当前在主机上运行，`backup/expire running` 和/或 `restore running` 消息将出现在 `status` 信息旁边。

备份按从旧到新的顺序显示。最旧的备份*始终*是全量备份（标签末尾有 `F`），但最新的备份可以是全量备份、差异备份（末尾有 `D`）或增量备份（末尾有 `I`）。

`timestamp start/stop` 定义了备份运行的时间段。`timestamp stop` 可用于确定执行时间点恢复时要使用的备份。有关时间点恢复的更多信息，请参阅 [时间点恢复](#时间点恢复) 章节。

`wal start/stop` 定义了恢复时使数据库一致所需的 WAL 范围。`backup` 命令将确保此 WAL 范围在完成之前已在归档中。

`database size` 是数据库的完整未压缩大小，而 `database backup size` 是数据库中实际需要备份的数据量（对于全量备份，这两个值相同）。

`repo` 指示此备份所在的仓库。`backup set size` 包括此备份和仓库中从此备份恢复数据库所需的任何引用备份中的所有文件，而 `backup size` 只包括此备份中的文件（对于全量备份，这两个值也相同）。如果 pgBackRest 启用了压缩，仓库大小反映压缩后的文件大小。

`backup reference total` 汇总了恢复此备份所需的额外备份列表。使用 `--set` 选项可显示完整的引用列表。

### 恢复备份

备份可以保护你免受多种灾难场景的影响，最常见的是硬件故障和数据损坏。模拟数据损坏最简单的方法是删除一个重要的 PostgreSQL 集群文件。

pg-primary **⇒** 停止演示集群并删除 `pg_control` 文件

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres rm /var/lib/pgsql/13/data/global/pg_control
```

在没有这个重要文件的情况下启动集群将导致错误。

pg-primary **⇒** 尝试启动已损坏的演示集群

```bash
sudo systemctl start postgresql-13.service
sudo systemctl status postgresql-13.service
```

```
postgresql-13.service - PostgreSQL 13 database server
    Loaded: loaded (/usr/lib/systemd/system/postgresql-13.service, disabled)

    Active: failed (failed)
```

要恢复 PostgreSQL 集群的备份，使用 `restore` 命令运行 pgBackRest。集群需要处于停止状态（在本例中已经停止），并且必须从 PostgreSQL 数据目录中删除所有文件。

pg-primary **⇒** 从演示集群中删除旧文件

```bash
sudo -u postgres find /var/lib/pgsql/13/data -mindepth 1 -delete
```

pg-primary **⇒** 恢复演示集群并启动 PostgreSQL

```bash
sudo -u postgres pgbackrest --stanza=demo restore
sudo systemctl start postgresql-13.service
```

这次集群成功启动，因为恢复操作替换了缺失的 `pg_control` 文件。

有关 `restore` 命令的更多信息，请参阅 [恢复](#恢复-1) 章节。

--------

## 监控

监控是任何生产系统的重要组成部分。市面上有许多可用工具，稍加处理就可以在其中任何一个工具上监控 pgBackRest。

pgBackRest 可以以 JSON 格式输出仓库信息，其中包括每个 stanza 的所有备份列表和 WAL 归档信息。

### 在 PostgreSQL 中

PostgreSQL 的 `COPY` 命令允许将 pgBackRest 信息加载到表中。以下示例将该逻辑封装在一个函数中，可用于执行实时查询。

pg-primary **⇒** 为 PostgreSQL 加载 pgBackRest info 函数

```bash
sudo -u postgres cat \
       /var/lib/pgsql/pgbackrest/doc/example/pgsql-pgbackrest-info.sql
```

```sql
-- An example of monitoring pgBackRest from within PostgreSQL
--
-- Use copy to export data from the pgBackRest info command into the jsonb
-- type so it can be queried directly by PostgreSQL.

-- Create monitor schema
create schema monitor;

-- Get pgBackRest info in JSON format
create function monitor.pgbackrest_info()
    returns jsonb AS $$
declare
    data jsonb;
begin
    -- Create a temp table to hold the JSON data
    create temp table temp_pgbackrest_data (data text);

    -- Copy data into the table directly from the pgBackRest info command
    copy temp_pgbackrest_data (data)
        from program
            'pgbackrest --output=json info' (format text);

    select replace(temp_pgbackrest_data.data, E'\n', '\n')::jsonb
      into data
      from temp_pgbackrest_data;

    drop table temp_pgbackrest_data;

    return data;
end $$ language plpgsql;
```

```bash
sudo -u postgres psql -f \
       /var/lib/pgsql/pgbackrest/doc/example/pgsql-pgbackrest-info.sql
```

现在可以使用 `monitor.pgbackrest_info()` 函数来确定某个 stanza 的上次成功备份时间和归档的 WAL。

pg-primary **⇒** 查询上次成功备份时间和归档的 WAL

```bash
sudo -u postgres cat \
       /var/lib/pgsql/pgbackrest/doc/example/pgsql-pgbackrest-query.sql
```

```sql
-- Get last successful backup for each stanza
--
-- Requires the monitor.pgbackrest_info function.
with stanza as
(
    select data->'name' as name,
           data->'backup'->(
               jsonb_array_length(data->'backup') - 1) as last_backup,
           data->'archive'->(
               jsonb_array_length(data->'archive') - 1) as current_archive
      from jsonb_array_elements(monitor.pgbackrest_info()) as data
)
select name,
       to_timestamp(
           (last_backup->'timestamp'->>'stop')::numeric) as last_successful_backup,
       current_archive->>'max' as last_archived_wal
  from stanza;
```

```bash
sudo -u postgres psql -f \
       /var/lib/pgsql/pgbackrest/doc/example/pgsql-pgbackrest-query.sql
```

```
  name  | last_successful_backup |    last_archived_wal
--------+------------------------+--------------------------
 "demo" | 2026-01-19 09:21:03+00 | 000000010000000000000005
(1 row)
```

--------

## 备份

当配置了多个仓库时，pgBackRest 将备份到最高优先级的仓库（如 `repo1`），除非指定了 `--repo` 选项。

pgBackRest 没有内置调度器，因此最好从 cron 或其他调度机制中运行它。

详情和示例请参阅 [执行备份](#执行备份)。

### 文件打包

在仓库中将文件打包在一起可以节省备份时间和仓库空间。这在仓库存储于对象存储（如 S3）或具有大块大小的文件系统上时尤为明显。对象存储上每个文件的创建时间较高，非常小的文件存储成本可能与较大的文件一样高。

文件打包功能通过 `repo-bundle` 选项启用。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-bundle`

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
[global:archive-push]
compress-level=3
```

不使用文件打包的全量备份在备份路径中会有 1000 多个文件，但使用打包后文件总数大大减少。另一个好处是，零长度文件不会被存储（除非在清单文件（manifest）中），而在普通备份中，每个零长度文件都单独存储。

pg-primary **⇒** 执行全量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=full backup
```

pg-primary **⇒** 检查文件总数

```bash
sudo -u postgres find /var/lib/pgbackrest/backup/demo/latest/ -type f | wc -l
```

```
5
```

`repo-bundle-size` 和 `repo-bundle-limit` 选项可用于调优，但在大多数情况下默认值应该是最优的。

虽然文件打包通常更高效，但缺点是从仓库手动检索文件变得更加困难。对于去重存储，它可能不是理想的，因为每次全量备份都会以不同方式在包中排列文件。最后，文件包不能断点续传，所以不要将 `repo-bundle-limit` 设置得太高。

### 块级增量备份

块级增量备份通过只存储文件中自上次备份以来发生变化的部分，而不是存储整个文件，来节省空间。

块级增量备份功能通过 `repo-block` 选项启用，并且在为所有备份类型启用时效果最佳。文件打包也必须同时启用。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-block`

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-block=y
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
[global:archive-push]
compress-level=3
```

### 备份注解

用户可以为备份附加信息性的键/值对。此选项可多次使用以附加多个注解。

pg-primary **⇒** 执行带注解的全量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --annotation=source="demo backup" \
       --annotation=key=value --type=full backup
```

当使用 `--set` 指定备份时，`info` 命令的文本输出中会显示注解，JSON 输出中也始终包含注解。

pg-primary **⇒** 获取演示集群的信息

```bash
sudo -u postgres pgbackrest --stanza=demo --set=20260119-092115F info
```

```
stanza: demo
    status: ok
    cipher: aes-256-cbc

    db (current)
        wal archive min/max (13): 000000020000000000000007/000000020000000000000009

        full backup: 20260119-092115F
            timestamp start/stop: 2026-01-19 09:21:15+00 / 2026-01-19 09:21:16+00
            wal start/stop: 000000020000000000000008 / 000000020000000000000009
            lsn start/stop: 0/8000028 / 0/9000050
            database size: 23.2MB, database backup size: 23.2MB
            repo1: backup size: 2.9MB
            database list: postgres (13383)

            annotation(s)

                key: value
                source: demo backup
```

使用 `backup` 命令附加的注解可以在之后使用 `annotate` 命令添加、修改或删除。

pg-primary **⇒** 修改备份注解

```bash
sudo -u postgres pgbackrest --stanza=demo --set=20260119-092115F \
       --annotation=key= --annotation=new_key=new_value annotate

sudo -u postgres pgbackrest --stanza=demo --set=20260119-092115F info
```

```
stanza: demo
    status: ok
    cipher: aes-256-cbc

    db (current)
        wal archive min/max (13): 000000020000000000000007/000000020000000000000009

        full backup: 20260119-092115F
            timestamp start/stop: 2026-01-19 09:21:15+00 / 2026-01-19 09:21:16+00
            wal start/stop: 000000020000000000000008 / 000000020000000000000009
            lsn start/stop: 0/8000028 / 0/9000050
            database size: 23.2MB, database backup size: 23.2MB
            repo1: backup size: 2.9MB
            database list: postgres (13383)

            annotation(s)

                new_key: new_value
                source: demo backup
```

--------

## 保留策略

通常来说，保留尽可能多的备份有助于提供更大的 [时间点恢复](#时间点恢复) 窗口，但也必须兼顾磁盘空间等实际限制。保留策略选项会在旧备份不再需要时将其删除。

pgBackRest 根据保留策略类型（可以是数量或时间段）对全量备份进行轮转。当指定数量时，过期逻辑不关心备份的创建时间，而只关注需要保留多少个。差异备份基于数量进行管理，但当其依赖的全量备份过期时，差异备份也会随之过期。增量备份不会被保留策略独立过期——它们始终随其关联的全量备份或差异备份一起过期。详情与示例请参见 [全量备份保留策略](#全量备份保留策略) 和 [差异备份保留策略](#差异备份保留策略) 章节。

归档的 WAL 默认会随未过期的备份一起保留；但若有特殊需求，可通过各仓库的 retention-archive 选项修改此计划（不推荐）。详情与示例请参见 [归档保留策略](#归档保留策略) 章节。

`expire` 命令会在每次备份成功后自动运行，用户也可以手动执行。由用户运行时，过期操作将按照各已配置仓库的保留策略设置执行。若提供了 `--repo` 选项，则过期操作仅针对指定的仓库。用户还可以通过 `--set` 选项将过期操作限定在特定备份集上；除非同时指定了 `--repo` 选项，否则会搜索所有仓库，并对符合条件的备份集执行过期操作。需要注意的是，每次运行 `expire` 命令时都会检查并执行归档保留计划。

### 全量备份保留策略

`repo1-retention-full-type` 决定了 `repo1-retention-full` 选项的解释方式：可以是要保留的全量备份数量，也可以是保留全量备份的天数。只有在新备份完成后才会触发过期操作——即若 `repo1-retention-full-type=count` 且 `repo1-retention-full=2`，则需要存储三个全量备份后才会过期最旧的一个；若 `repo1-retention-full-type=time` 且 `repo1-retention-full=20`，则至少要有一个全量备份已经超过 20 天，才会触发过期操作。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-retention-full`

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-block=y
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
[global:archive-push]
compress-level=3
```

已配置 `repo1-retention-full=2`，但当前只有一个全量备份，因此下次执行全量备份时不会过期任何全量备份。

pg-primary **⇒** 执行全量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=full \
       --log-level-console=detail backup
```

```
       [filtered 948 lines of output]
P00   INFO: repo1: remove expired backup 20260119-092113F
P00 DETAIL: repo1: 13-1 archive retention on backup 20260119-092115F, start = 000000020000000000000008

P00   INFO: repo1: 13-1 remove archive, start = 000000020000000000000007, stop = 000000020000000000000007

P00   INFO: expire command end: completed successfully
```

归档*确实*被过期了，因为那些 WAL 段是在最旧备份之前生成的。这些 WAL 段对恢复没有用处——只有在备份之后生成的 WAL 段才能用于恢复该备份。

pg-primary **⇒** 执行全量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=full \
       --log-level-console=info backup
```

```
       [filtered 11 lines of output]
P00   INFO: repo1: expire full backup 20260119-092115F
P00   INFO: repo1: remove expired backup 20260119-092115F

P00   INFO: repo1: 13-1 remove archive, start = 000000020000000000000008, stop = 000000020000000000000009

P00   INFO: expire command end: completed successfully
```

全量备份 `20260119-092100F` 已被过期，归档保留策略现在基于 `20260119-092118F`，该备份是当前最旧的全量备份。

### 差异备份保留策略

将 `repo1-retention-diff` 设置为所需保留的差异备份数量。差异备份仅依赖于之前的全量备份，因此可以创建最近一天或更长时间内的"滚动"差异备份集合。这既能支持快速恢复到近期时间点，又能降低整体空间占用。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-retention-diff`

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-block=y
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-diff=1
repo1-retention-full=2
start-fast=y
[global:archive-push]
compress-level=3
```

已配置 `repo1-retention-diff=1`，因此需要执行两次差异备份才会过期一个。这里添加一个增量备份，以演示增量备份的过期逻辑——在本例中，增量备份的过期依赖于差异备份的过期。

pg-primary **⇒** 执行差异备份和增量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=diff backup
sudo -u postgres pgbackrest --stanza=demo --type=incr backup
```

现在执行一次差异备份，将过期之前的差异备份和增量备份，只保留一个差异备份。

pg-primary **⇒** 执行差异备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=diff \
       --log-level-console=info backup
```

```
       [filtered 10 lines of output]
P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=2196-f736765b --log-level-console=info --no-log-timestamp --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-diff=1 --repo1-retention-full=2 --stanza=demo

P00   INFO: repo1: expire diff backup set 20260119-092120F_20260119-092122D, 20260119-092120F_20260119-092123I

P00   INFO: repo1: remove expired backup 20260119-092120F_20260119-092123I
P00   INFO: repo1: remove expired backup 20260119-092120F_20260119-092122D
P00   INFO: expire command end: completed successfully
```

### 归档保留策略

虽然 pgBackRest 在过期备份时会自动删除归档的 WAL 段（默认根据 `repo1-retention-full` 选项过期全量备份对应的 WAL），但有时可能需要更激进地过期归档以节省磁盘空间。需要注意，在差异归档保留策略中，全量备份被视为差异备份处理。

过期归档时，永远不会删除那些使备份保持一致性所必需的 WAL 段。然而，由于时间点恢复（PITR）只能在连续的 WAL 流上进行，因此在正常备份过期流程之外激进地过期归档时需格外谨慎。若要在不实际执行过期操作的情况下查看哪些内容将被过期，可在执行 `expire` 命令时在命令行中提供 `dry-run` 选项。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-retention-diff`

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-block=y
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-diff=2
repo1-retention-full=2
start-fast=y
[global:archive-push]
compress-level=3
```

pg-primary **⇒** 执行差异备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=diff \
       --log-level-console=info backup
```

```
       [filtered 6 lines of output]
P00   INFO: backup stop archive = 000000020000000000000017, lsn = 0/17000050
P00   INFO: check archive for segment(s) 000000020000000000000016:000000020000000000000017

P00   INFO: new backup label = 20260119-092120F_20260119-092126D

P00   INFO: diff backup size = 11.6KB, file total = 936
P00   INFO: backup command end: completed successfully
       [filtered 2 lines of output]
```

pg-primary **⇒** 过期归档

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=detail \
       --repo1-retention-archive-type=diff --repo1-retention-archive=1 expire
```

```
P00   INFO: expire command begin 2.58.0: --exec-id=2392-b81327e6 --log-level-console=detail --no-log-timestamp --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-archive=1 --repo1-retention-archive-type=diff --repo1-retention-diff=2 --repo1-retention-full=2 --stanza=demo
P00 DETAIL: repo1: 13-1 archive retention on backup 20260119-092118F, start = 00000002000000000000000A, stop = 00000002000000000000000B
P00 DETAIL: repo1: 13-1 archive retention on backup 20260119-092120F, start = 00000002000000000000000C, stop = 00000002000000000000000D

P00 DETAIL: repo1: 13-1 archive retention on backup 20260119-092120F_20260119-092124D, start = 000000020000000000000012, stop = 000000020000000000000013

P00 DETAIL: repo1: 13-1 archive retention on backup 20260119-092120F_20260119-092126D, start = 000000020000000000000016

P00   INFO: repo1: 13-1 remove archive, start = 00000002000000000000000E, stop = 000000020000000000000011
P00   INFO: repo1: 13-1 remove archive, start = 000000020000000000000014, stop = 000000020000000000000015

P00   INFO: expire command end: completed successfully
```

差异备份 `20260119-092120F_20260119-092124D` 中保存了一些 WAL 段，即便这些 WAL 段无法用于更早的备份的 PITR 向前回放，也必须保留以确保旧备份的一致性。在 `20260119-092120F_20260119-092124D` 之后、`20260119-092120F_20260119-092126D` 之前生成的 WAL 段已被删除。新备份 `20260119-092120F_20260119-092126D` 之后生成的 WAL 段依然保留，可用于 PITR。

由于在差异归档保留策略中，全量备份被视为差异备份，若以相同设置执行一次全量备份，则只会保留该全量备份对应的归档用于 PITR。

--------
## 恢复-1

`restore` 命令默认从第一个存在备份的仓库中自动选取最新备份（参见 [快速开始 - 恢复备份](#恢复备份)）。检查仓库的顺序由 `pgbackrest.conf` 决定（例如，repo1 先于 repo2 被检查）。若要从特定仓库选取，可传入 `--repo` 选项（例如 `--repo=1`）。若需要选取非最新的备份，可传入 `--set` 选项。

当指定 PITR 类型为 `--type=time` 或 `--type=lsn` 时，必须通过 `--target` 选项指定目标时间或目标 lsn。若未通过 `--set` 选项指定备份，则会按顺序检查已配置的各仓库，寻找包含所请求时间或 lsn 的备份。若未找到匹配的备份，对于 `--type=time` 将使用第一个含有备份的仓库中的最新备份；而对于 `--type=lsn` 则不会选取任何备份。对于其他 PITR 类型（如 `xid`），若目标在最新备份之前，则必须提供 `--set` 选项。详情与示例请参见 [时间点恢复](#时间点恢复)。

根据 PostgreSQL 的建议，复制槽不包含在备份中。更多信息请参阅 PostgreSQL 文档中的 [备份数据目录](https://www.postgresql.org/docs/current/continuous-archiving.html#BACKUP-LOWLEVEL-BASE-BACKUP-DATA) 章节。

以下各节介绍 `restore` 命令的更多功能。

### 文件所有权

若 `restore` 以非 root 用户运行（这是典型场景），则所有被恢复的文件都将归执行 pgBackRest 的用户/组所有。若现有文件不属于执行用户/组，且无法将所有权更新为执行用户/组，则会报错。此时需要由特权用户先更新文件所有权，才能重新尝试恢复。

若 `restore` 以 `root` 用户运行，pgBackRest 将尝试按照备份时清单文件（manifest）中记录的所有权重建文件归属。清单中只存储用户/组的**名称**，因此恢复主机上必须存在相同的名称才能正常工作。若在本地找不到对应的用户/组名称，则使用 PostgreSQL 数据目录的用户/组；若数据目录的用户/组也无法映射到名称，则最终使用 `root`。

### Delta 选项

[快速开始](#快速开始) 中的 [恢复备份](#恢复备份) 章节要求在执行 `restore` 前先清空数据库集群目录。`delta` 选项允许 pgBackRest 自动判断数据库集群目录中哪些文件可以保留、哪些需要从备份中恢复——它还会*删除*不在备份清单中的文件，从而清除差异变更。该功能通过计算数据库集群目录中每个文件的 [SHA-1](https://en.wikipedia.org/wiki/SHA-1) 加密哈希来实现。若 SHA-1 哈希与备份中存储的哈希不匹配，则该文件将被恢复。与 `process-max` 选项结合使用时，此操作非常高效。由于恢复期间 PostgreSQL 服务器已关闭，可以使用比备份时（PostgreSQL 服务器运行时）更多的进程数。

pg-primary **⇒** 停止 demo 集群，执行 delta 恢复

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres pgbackrest --stanza=demo --delta \
       --log-level-console=detail restore
```

```
       [filtered 2 lines of output]
P00 DETAIL: check '/var/lib/pgsql/13/data' exists
P00 DETAIL: remove 'global/pg_control' so cluster will not start if restore does not complete

P00   INFO: remove invalid files/links/paths from '/var/lib/pgsql/13/data'

P00 DETAIL: remove invalid file '/var/lib/pgsql/13/data/backup_label.old'
P00 DETAIL: remove invalid file '/var/lib/pgsql/13/data/base/13383/pg_internal.init'
       [filtered 981 lines of output]
```

pg-primary **⇒** 重启 PostgreSQL

```bash
sudo systemctl start postgresql-13.service
```

### 选择性数据库恢复

在某些情况下，可能需要从集群备份中有选择地恢复特定数据库。这样做可以出于性能方面的考虑，或者用于将选定的数据库迁移到没有足够空间恢复整个集群备份的机器上。

为演示此功能，创建两个数据库：test1 和 test2。

pg-primary **⇒** 创建两个测试数据库

```bash
sudo -u postgres psql -c "create database test1;"
```

```sql
CREATE DATABASE
```

```bash
sudo -u postgres psql -c "create database test2;"
```

```sql
CREATE DATABASE
```

每个测试数据库将填充表和数据，以演示选择性恢复后的恢复效果。

pg-primary **⇒** 在每个数据库中创建测试表

```bash
sudo -u postgres psql -c "create table test1_table (id int); \
       insert into test1_table (id) values (1);" test1
```

```sql
INSERT 0 1
```

```bash
sudo -u postgres psql -c "create table test2_table (id int); \
       insert into test2_table (id) values (2);" test2
```

```sql
INSERT 0 1
```

执行一次新的备份，让 pgBackRest 感知到新建的数据库。

pg-primary **⇒** 执行备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=incr backup
```

使用选择性恢复的主要原因之一是节省空间。此处展示 test1 数据库所占用的空间大小，以便与选择性恢复后的磁盘用量进行对比。

pg-primary **⇒** 查看 test1 数据库占用的空间

```bash
sudo -u postgres du -sh /var/lib/pgsql/13/data/base/32768
```

```
7.8M	/var/lib/pgsql/13/data/base/32768
```

若不清楚要恢复的数据库名称，可使用 `info` 命令的 `set` 选项查看属于该备份集的数据库列表。

pg-primary **⇒** 查看备份的数据库列表

```bash
sudo -u postgres pgbackrest --stanza=demo \
       --set=20260119-092120F_20260119-092135I info
```

```
       [filtered 12 lines of output]
            repo1: backup size: 1.9MB
            backup reference list: 20260119-092120F, 20260119-092120F_20260119-092126D

            database list: postgres (13383), test1 (32768), test2 (32769)
```

停止集群，仅恢复 test2 数据库。内置数据库（`template0`、`template1` 和 `postgres`）始终会被恢复。

警告：

除非指定 `--type=immediate`，否则恢复可能会报错。这是因为在达到一致性点之后，PostgreSQL 会将清零页标记为错误，即使是完整页写入也不例外。对于 PostgreSQL 13 及以上版本，可使用 `ignore_invalid_pages` 参数忽略无效页面。在这种情况下，恢复完成后务必检查日志，确认所选数据库中没有无效页面的报告。

pg-primary **⇒** 从最新备份恢复，仅包含 test2 数据库

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres pgbackrest --stanza=demo --delta \
       --db-include=test2 --type=immediate --target-action=promote restore

sudo systemctl start postgresql-13.service
```

恢复完成后，test2 数据库将包含之前创建的所有表和数据。

pg-primary **⇒** 验证 test2 数据库已成功恢复

```bash
sudo -u postgres psql -c "select * from test2_table;" test2
```

```
 id
----
  2
(1 row)
```

test1 数据库尽管恢复成功，但无法访问。这是因为整个数据库是以稀疏清零文件的形式恢复的。PostgreSQL 可以在清零文件上成功应用 WAL，但整个数据库并不有效，因为关键文件中不含任何数据。这是有意为之，目的是防止在数据库可能含有 WAL 回放期间写入的部分数据时被意外使用。

pg-primary **⇒** 尝试连接 test1 数据库将产生错误

```bash
sudo -u postgres psql -c "select * from test1_table;" test1
psql: error: connection to server on socket "/run/postgresql/.s.PGSQL.5432" failed: FATAL:  relation mapping file "base/32768/pg_filenode.map" contains invalid data
```

由于 test1 数据库以稀疏清零文件恢复，其所占空间仅相当于恢复期间写入的 WAL 量。虽然备份期间生成并在恢复期间应用的 WAL 量可能相当可观，但通常只是数据库总大小的一小部分，在大型数据库中尤为明显——而这正是此功能最有价值的场景。

显然，选择性恢复后 test1 数据库所占磁盘空间远少于完整恢复时的占用量。

pg-primary **⇒** 查看恢复后 test1 数据库占用的空间

```bash
sudo -u postgres du -sh /var/lib/pgsql/13/data/base/32768
```

```
8.0K	/var/lib/pgsql/13/data/base/32768
```

此时对无效的 test1 数据库唯一可执行的操作是 `drop database`。pgBackRest 不会自动删除该数据库，因为此操作必须在恢复完成且集群可访问后才能进行。

pg-primary **⇒** 删除 test1 数据库

```bash
sudo -u postgres psql -c "drop database test1;"
```

```sql
DROP DATABASE
```

删除无效的 test1 数据库后，只剩下 test2 和内置数据库。

pg-primary **⇒** 列出剩余数据库

```bash
sudo -u postgres psql -c "select oid, datname from pg_database order by oid;"
```

```
  oid  |  datname
-------+-----------
     1 | template1
 13382 | template0
 13383 | postgres

 32769 | test2

(4 rows)
```

--------

## 时间点恢复

[快速开始](#快速开始) 中的 [恢复备份](#恢复备份) 执行的是默认恢复，即将 WAL 一路回放至末尾。对于硬件故障，这通常是最佳选择；但对于数据损坏场景（无论是机器原因还是人为原因），时间点恢复（PITR）往往更为合适。

时间点恢复（PITR）允许从备份中将 WAL 回放至指定的 lsn、时间、事务 id 或恢复点。在常见的恢复场景中，基于时间的恢复可以说是最实用的。典型的恢复场景是恢复意外删除的表或意外删除的数据。恢复被删除的表更具代表性，因此以此为例进行演示，但被删除的数据可以用完全相同的方式恢复。

pg-primary **⇒** 创建一张存有重要数据的表

```bash
sudo -u postgres psql -c "begin; \
       create table important_table (message text); \
       insert into important_table values ('Important Data'); \
       commit; \
       select * from important_table;"
```

```
    message
----------------

 Important Data

(1 row)
```

以 PostgreSQL 的时间为准进行记录非常重要，且必须包含时区偏移量。这样可以减少意外时区转换的可能性，避免出现意外的恢复结果。

pg-primary **⇒** 从 PostgreSQL 获取当前时间

```bash
sudo -u postgres psql -Atc "select current_timestamp"
```

```
2026-01-19 09:21:46.275227+00
```

记录时间后，删除该表。实际操作中，找到表被删除的确切时间远比此示例困难。可能无法找到确切时间，但通过一些取证工作应该能接近实际时间。

pg-primary **⇒** 删除重要表

```bash
sudo -u postgres psql -c "begin; \
       drop table important_table; \
       commit; \
       select * from important_table;"
```

```
ERROR:  relation "important_table" does not exist

LINE 1: ...le important_table;     commit;     select * from important_...
                                                             ^
```

若选择了错误的备份进行恢复，则恢复至所需时间目标将失败。为演示这一点，在 `important_table` 不存在的情况下执行一次新的增量备份。

pg-primary **⇒** 执行增量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=incr backup
sudo -u postgres pgbackrest info
```

```
       [filtered 38 lines of output]
            backup reference total: 1 full, 1 diff

        incr backup: 20260119-092120F_20260119-092147I

            timestamp start/stop: 2026-01-19 09:21:47+00 / 2026-01-19 09:21:48+00
            wal start/stop: 00000004000000000000001A / 00000004000000000000001A
       [filtered 2 lines of output]
```

由于 PostgreSQL 只能向前回放，无法向后回放，因此无法从这个备份中恢复丢失的表。

pg-primary **⇒** 尝试从错误的备份中恢复

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres pgbackrest --stanza=demo --delta \
       --set=20260119-092120F_20260119-092147I --target-timeline=current \
       --type=time "--target=2026-01-19 09:21:46.275227+00" --target-action=promote restore

sudo systemctl start postgresql-13.service
sudo -u postgres cat /var/lib/pgsql/13/data/log/postgresql.log
```

```
       [filtered 11 lines of output]
LOG:  database system is ready to accept read only connections
LOG:  redo done at 0/1A000100

FATAL:  recovery ended before configured recovery target was reached

LOG:  startup process (PID 3390) exited with exit code 1
LOG:  terminating any other active server processes
```

一种可靠的方法是让 pgBackRest 自动选择能够恢复到时间目标的备份，即在指定时间之前完成的备份。

注意：

当恢复类型为 `xid` 或 `name` 时，pgBackRest 无法自动选择备份。

pg-primary **⇒** 将 demo 集群恢复至 `2026-01-19 09:21:46.275227+00`

```bash
sudo -u postgres pgbackrest --stanza=demo --delta \
       --type=time "--target=2026-01-19 09:21:46.275227+00" \
       --target-action=promote restore

sudo -u postgres cat /var/lib/pgsql/13/data/postgresql.auto.conf
```

```
       [filtered 9 lines of output]
# Recovery settings generated by pgBackRest restore on 2026-01-19 09:21:53
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
```

```ini
recovery_target_time = '2026-01-19 09:21:46.275227+00'
recovery_target_action = 'promote'
```

pgBackRest 已在 `postgresql.auto.conf` 中生成恢复设置，因此 PostgreSQL 可以立即启动。`%f` 是 PostgreSQL 指定所需 WAL 段的方式，`%p` 是该段应被复制到的位置。PostgreSQL 完成恢复后，该表将重新存在，并可被查询。

pg-primary **⇒** 启动 PostgreSQL 并验证重要表是否存在

```bash
sudo systemctl start postgresql-13.service
sudo -u postgres psql -c "select * from important_table"
```

```
    message
----------------

 Important Data

(1 row)
```

PostgreSQL 日志中也包含有价值的信息，它会指明恢复停止的时间和事务，并给出最后一个被应用的事务的时间。

pg-primary **⇒** 查看 PostgreSQL 日志输出

```bash
sudo -u postgres cat /var/lib/pgsql/13/data/log/postgresql.log
```

```
       [filtered 5 lines of output]
LOG:  database system was interrupted; last known up at 2026-01-19 09:21:35 UTC
LOG:  restored log file "00000004.history" from archive

LOG:  starting point-in-time recovery to 2026-01-19 09:21:46.275227+00

LOG:  restored log file "00000004.history" from archive
LOG:  restored log file "000000040000000000000019" from archive
       [filtered 2 lines of output]
LOG:  consistent recovery state reached at 0/19000100
LOG:  database system is ready to accept read only connections

LOG:  recovery stopping before commit of transaction 495, time 2026-01-19 09:21:47.553454+00

LOG:  redo done at 0/1901E348

LOG:  last completed transaction was at log time 2026-01-19 09:21:44.998203+00

LOG:  selected new timeline ID: 5
LOG:  archive recovery complete
LOG:  database system is ready to accept connections
```

--------

## 删除 Stanza

`stanza-delete` 命令用于删除仓库中与某个 stanza 关联的数据。

警告：

请谨慎使用此命令——它将永久删除 pgBackRest 仓库中指定 stanza 的所有备份和归档。

删除 stanza 的步骤如下：

- 关闭与该 stanza 关联的 PostgreSQL 集群（或使用 `--force` 强制覆盖）。
- 在将要运行 `stanza-delete` 命令的主机上执行 `stop` 命令。
- 运行 `stanza-delete` 命令。

命令成功完成后，用户有责任从所有 pgBackRest 配置文件和/或环境变量中删除该 stanza 的配置。

每次只能从一个仓库中删除 stanza。若要从多个仓库中删除该 stanza，需要在指定 `--repo` 选项的情况下，对每个仓库重复执行 `stanza-delete` 命令。

pg-primary **⇒** 停止待删除的 PostgreSQL 集群

```bash
sudo systemctl stop postgresql-13.service
```

pg-primary **⇒** 停止该 stanza 的 pgBackRest

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info stop
```

```
P00   INFO: stop command begin 2.58.0: --exec-id=3691-ad85dcc9 --log-level-console=info --no-log-timestamp --stanza=demo

P00   INFO: stop command end: completed successfully
```

pg-primary **⇒** 从一个仓库中删除 stanza

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=1 \
       --log-level-console=info stanza-delete
```

```
P00   INFO: stanza-delete command begin 2.58.0: --exec-id=3718-4fafd9b4 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo=1 --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --stanza=demo

P00   INFO: stanza-delete command end: completed successfully
```

--------

## 多仓库

如 [S3 兼容对象存储支持](#s3-兼容对象存储支持) 所示，可以配置多个仓库。潜在的优势在于能够同时拥有一个用于快速恢复的本地仓库和一个用于冗余的远程仓库。

某些命令（例如 [`stanza-create`](/docs/pgbackrest/command/stanza-create/) 和 [`stanza-upgrade`](/docs/pgbackrest/command/stanza-upgrade/)）会自动作用于所有已配置的仓库，而其他命令（例如 [`stanza-delete`](/docs/pgbackrest/command/stanza-delete/)）则需要使用 `repo` 选项指定仓库。

需要注意，当仅配置了 `repo1` 时，`repo` 选项不是必需的，这是为了保持向后兼容性。但是，当单个仓库被配置为如 `repo2` 时，`repo` 选项则是必需的，以防止在后续添加新仓库时导致命令失效。

`archive-push` 命令始终会将 WAL 推送到所有已配置仓库的归档中。当某个仓库不可达时，WAL 仍会被推送到其他仓库。但为使此功能有效运作，必须启用 `archive-async=y`；否则，其他仓库只能比不可达的仓库多存一个 WAL 段。另请注意，若 WAL 无法推送到任何仓库，PostgreSQL 将不会从 `pg_wal` 目录中删除它，这可能导致该卷空间耗尽。

备份需要为每个仓库单独调度。在很多情况下，这是可取的，因为不同仓库的备份类型和保留策略可能不同。同样，恢复时也必须指定仓库。通常最好选择延迟/成本较低的仓库进行恢复，即使这意味着更长的恢复时间。只有通过实际的恢复测试才能确定哪个仓库效率最高。

--------

## Azure 兼容对象存储支持

pgBackRest 支持将仓库存放在 Azure 兼容的对象存储中。用于存储仓库的容器必须提前创建——pgBackRest 不会自动创建它。仓库可以放置在容器根目录（`/`），但通常最好将其放置在子路径中，以便对象存储日志或其他数据也能存储在容器中而不产生冲突。

警告：

请勿启用"分层命名空间"，否则在执行 expire 时会导致错误。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 Azure

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-block=y
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-diff=2
repo1-retention-full=2
repo2-azure-account=pgbackrest
repo2-azure-container=demo-container
repo2-azure-key=YXpLZXk=
repo2-path=/demo-repo
repo2-retention-full=4
repo2-type=azure
start-fast=y
[global:archive-push]
compress-level=3
```

可通过将 `repo2-azure-key-type` 选项设置为 `sas`，并将 `repo2-azure-key` 选项设置为共享访问签名令牌，从而使用共享访问签名（SAS）。

命令的运行方式与仓库存储在本地磁盘上完全相同。

pg-primary **⇒** 创建 stanza

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info stanza-create
```

```
P00   INFO: stanza-create command begin 2.58.0: --exec-id=3889-dc76115c --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo2-type=azure --stanza=demo
P00   INFO: stanza-create for stanza 'demo' on repo1
P00   INFO: stanza-create for stanza 'demo' on repo2

P00   INFO: stanza-create command end: completed successfully
```

由于在 Azure 中创建文件相对较慢，启用 [文件打包](#文件打包) 可以提升 `backup`/`restore` 的性能。

pg-primary **⇒** 备份 demo 集群

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=2 \
       --log-level-console=info backup
```

```
P00   INFO: backup command begin 2.58.0: --exec-id=3917-455d2c05 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo=2 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-block --repo1-bundle --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo2-type=azure --stanza=demo --start-fast

P00   WARN: no prior backup exists, incr backup has been changed to full

P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 00000005000000000000001B, lsn = 0/1B000028
       [filtered 3 lines of output]
P00   INFO: check archive for segment(s) 00000005000000000000001B:00000005000000000000001B
P00   INFO: new backup label = 20260119-092208F

P00   INFO: full backup size = 30.8MB, file total = 1229

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=3917-455d2c05 --log-level-console=info --no-log-timestamp --repo=2 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo2-type=azure --stanza=demo
```

--------

## S3 兼容对象存储支持

pgBackRest 支持将仓库存放在 S3 兼容的对象存储中。用于存储仓库的存储桶必须提前创建——pgBackRest 不会自动创建它。仓库可以放置在存储桶根目录（`/`），但通常最好将其放置在子路径中，以便对象存储日志或其他数据也能存储在存储桶中而不产生冲突。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 S3

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-block=y
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-diff=2
repo1-retention-full=2
repo2-azure-account=pgbackrest
repo2-azure-container=demo-container
repo2-azure-key=YXpLZXk=
repo2-path=/demo-repo
repo2-retention-full=4
repo2-type=azure
repo3-path=/demo-repo
repo3-retention-full=4
repo3-s3-bucket=demo-bucket
repo3-s3-endpoint=s3.us-east-1.amazonaws.com
repo3-s3-key=accessKey1
repo3-s3-key-secret=verySecretKey1
repo3-s3-region=us-east-1
repo3-type=s3
start-fast=y
[global:archive-push]
compress-level=3
```

注意：

需要将 region 和 endpoint 配置为存储桶所在的位置。此处给出的值适用于 `us-east-1` 区域。

应创建一个专用角色来运行 pgBackRest，并尽可能严格地设置存储桶权限。若该角色与 AWS 中的实例关联，则当设置 `repo3-s3-key-type=auto` 时，pgBackRest 将自动获取临时凭证，这意味着无需在 `/etc/pgbackrest/pgbackrest.conf` 中显式设置密钥。

以下 Amazon S3 策略示例将所有对存储桶和仓库路径的读写操作限制在最小范围内。

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::demo-bucket"
            ],
            "Condition": {
                "StringEquals": {
                    "s3:prefix": [
                        "",
                        "demo-repo"
                    ],
                    "s3:delimiter": [
                        "/"
                    ]
                }
            }
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::demo-bucket"
            ],
            "Condition": {
                "StringLike": {
                    "s3:prefix": [
                        "demo-repo/*"
                    ]
                }
            }
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectTagging",
                "s3:GetObject",
                "s3:GetObjectVersion",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::demo-bucket/demo-repo/*"
            ]
        }
    ]
}
```

命令的运行方式与仓库存储在本地磁盘上完全相同。

pg-primary **⇒** 创建 stanza

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info stanza-create
```

```
       [filtered 4 lines of output]
P00   INFO: stanza 'demo' already exists on repo2 and is valid
P00   INFO: stanza-create for stanza 'demo' on repo3

P00   INFO: stanza-create command end: completed successfully
```

由于在 S3 中创建文件相对较慢，启用 [文件打包](#文件打包) 可以提升 `backup`/`restore` 的性能。

pg-primary **⇒** 备份 demo 集群

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=3 \
       --log-level-console=info backup
```

```
P00   INFO: backup command begin 2.58.0: --exec-id=4045-563092b9 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo=3 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-block --repo1-bundle --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo3-retention-full=4 --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo2-type=azure --repo3-type=s3 --stanza=demo --start-fast

P00   WARN: no prior backup exists, incr backup has been changed to full

P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 00000005000000000000001C, lsn = 0/1C000028
       [filtered 3 lines of output]
P00   INFO: check archive for segment(s) 00000005000000000000001C:00000005000000000000001D
P00   INFO: new backup label = 20260119-092215F

P00   INFO: full backup size = 30.8MB, file total = 1229

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=4045-563092b9 --log-level-console=info --no-log-timestamp --repo=3 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo3-retention-full=4 --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo2-type=azure --repo3-type=s3 --stanza=demo
```

--------

## SFTP 支持

pgBackRest 支持将仓库存储在 SFTP 主机上。SFTP 文件传输相对较慢，因此建议通过增大 `process-max` 来并行化文件传输，以提升命令性能。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 SFTP

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
process-max=4
repo1-block=y
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-diff=2
repo1-retention-full=2
repo2-azure-account=pgbackrest
repo2-azure-container=demo-container
repo2-azure-key=YXpLZXk=
repo2-path=/demo-repo
repo2-retention-full=4
repo2-type=azure
repo3-path=/demo-repo
repo3-retention-full=4
repo3-s3-bucket=demo-bucket
repo3-s3-endpoint=s3.us-east-1.amazonaws.com
repo3-s3-key=accessKey1
repo3-s3-key-secret=verySecretKey1
repo3-s3-region=us-east-1
repo3-type=s3
repo4-bundle=y
repo4-path=/demo-repo
repo4-sftp-host=sftp-server
repo4-sftp-host-key-hash-type=sha1
repo4-sftp-host-user=pgbackrest
repo4-sftp-private-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp
repo4-sftp-public-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp.pub
repo4-type=sftp
start-fast=y
[global:archive-push]
compress-level=3
```

使用 SFTP 时，若 libssh2 是基于 OpenSSH 编译的，则 `repo4-sftp-public-key-file` 为可选项。

pg-primary **⇒** 为 SFTP 备份生成 SSH 密钥对

```bash
sudo -u postgres mkdir -m 750 -p /var/lib/pgsql/.ssh
sudo -u postgres ssh-keygen -f /var/lib/pgsql/.ssh/id_rsa_sftp \
       -t rsa -b 4096 -N "" -m PEM
```

sftp-server **⇒** 将 pg-primary 的 SFTP 备份公钥复制到 sftp-server

```bash
sudo -u pgbackrest mkdir -m 750 -p /home/pgbackrest/.ssh

(sudo ssh root@pg-primary cat /var/lib/pgsql/.ssh/id_rsa_sftp.pub) | \
       sudo -u pgbackrest tee -a /home/pgbackrest/.ssh/authorized_keys
```

命令的运行方式与仓库存储在本地磁盘上时完全相同。

pg-primary **⇒** 将 sftp-server 的指纹添加到 known_hosts 文件，因为 `repo4-sftp-host-key-check-type` 默认为 "strict"

```bash
ssh-keyscan -H sftp-server >> /var/lib/pgsql/.ssh/known_hosts 2>/dev/null
```

pg-primary **⇒** 创建 stanza

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info stanza-create
```

```
       [filtered 6 lines of output]
P00   INFO: stanza 'demo' already exists on repo3 and is valid
P00   INFO: stanza-create for stanza 'demo' on repo4

P00   INFO: stanza-create command end: completed successfully
```

pg-primary **⇒** 备份 demo 集群

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=4 \
       --log-level-console=info backup
```

```
P00   INFO: backup command begin 2.58.0: --exec-id=4286-e118cc78 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --process-max=4 --repo=4 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-block --repo1-bundle --repo4-bundle --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo4-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo3-retention-full=4 --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo4-sftp-host=sftp-server --repo4-sftp-host-key-hash-type=sha1 --repo4-sftp-host-user=pgbackrest --repo4-sftp-private-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp --repo4-sftp-public-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp.pub --repo2-type=azure --repo3-type=s3 --repo4-type=sftp --stanza=demo --start-fast
P00   WARN: option 'repo4-retention-full' is not set for 'repo4-retention-full-type=count', the repository may run out of space
            HINT: to retain full backups indefinitely (without warning), set option 'repo4-retention-full' to the maximum.

P00   WARN: no prior backup exists, incr backup has been changed to full

P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 00000005000000000000001E, lsn = 0/1E000028
       [filtered 3 lines of output]
P00   INFO: check archive for segment(s) 00000005000000000000001E:00000005000000000000001F
P00   INFO: new backup label = 20260119-092223F

P00   INFO: full backup size = 30.8MB, file total = 1229

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=4286-e118cc78 --log-level-console=info --no-log-timestamp --repo=4 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo4-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo3-retention-full=4 --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo4-sftp-host=sftp-server --repo4-sftp-host-key-hash-type=sha1 --repo4-sftp-host-user=pgbackrest --repo4-sftp-private-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp --repo4-sftp-public-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp.pub --repo2-type=azure --repo3-type=s3 --repo4-type=sftp --stanza=demo
P00   INFO: expire command end: completed successfully
```

--------

## GCS 兼容对象存储支持

pgBackRest 支持将仓库存储在 GCS 兼容的对象存储中。用于存储仓库的存储桶必须提前创建好——pgBackRest 不会自动创建。仓库可以存放在存储桶根目录（`/`），但通常最好将其放在某个子路径下，以便对象存储日志或其他数据也可以存储在同一存储桶中而不产生冲突。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 GCS

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
process-max=4
repo1-block=y
repo1-bundle=y
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-diff=2
repo1-retention-full=2
repo2-azure-account=pgbackrest
repo2-azure-container=demo-container
repo2-azure-key=YXpLZXk=
repo2-path=/demo-repo
repo2-retention-full=4
repo2-type=azure
repo3-path=/demo-repo
repo3-retention-full=4
repo3-s3-bucket=demo-bucket
repo3-s3-endpoint=s3.us-east-1.amazonaws.com
repo3-s3-key=accessKey1
repo3-s3-key-secret=verySecretKey1
repo3-s3-region=us-east-1
repo3-type=s3
repo4-bundle=y
repo4-path=/demo-repo
repo4-sftp-host=sftp-server
repo4-sftp-host-key-hash-type=sha1
repo4-sftp-host-user=pgbackrest
repo4-sftp-private-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp
repo4-sftp-public-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp.pub
repo4-type=sftp
repo5-gcs-bucket=demo-bucket
repo5-gcs-key=/etc/pgbackrest/gcs-key.json
repo5-path=/demo-repo
repo5-type=gcs
start-fast=y
[global:archive-push]
compress-level=3
```

在 GCE 中运行时，设置 `repo5-gcs-key-type=auto` 可使用实例服务账号自动完成身份验证。

命令的运行方式与仓库存储在本地磁盘上时完全相同。

GCS 中的文件创建速度相对较慢，因此启用 [文件打包](#文件打包) 可以提升 `backup`/`restore` 的性能。

--------

## 仓库目标时间

目标时间定义了命令读取版本化存储上仓库时所使用的时间点。这允许命令以某个历史时间点的状态读取仓库，以便恢复因用户误操作或恶意软件而被删除或损坏的数据。

版本化存储受 S3、GCS 和 Azure 支持，但通常默认未启用。除了启用版本控制之外，还可以考虑为 S3 启用对象锁定（object locking），为 GCS 或 Azure 启用软删除（soft delete）。

当指定 `repo-target-time` 选项时，还必须同时提供 `repo` 选项。通常并非所有仓库类型都支持版本控制，因此针对单个仓库进行恢复是合理的做法。

请注意，与存储时间戳的比较为 <= 所提供的时间戳，且提供时间戳中的毫秒部分会被截断。

为演示此功能，将删除 S3 仓库中 `demo` stanza 的数据。

pg-primary **⇒** 删除 S3 仓库中的 stanza

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres pgbackrest --stanza=demo stop
sudo -u postgres pgbackrest --stanza=demo --repo=3 stanza-delete
```

stanza 删除后，`info` 命令将显示仓库处于错误状态。

pg-primary **⇒** info 命令报错

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=3 info
```

```
stanza: demo

    status: error (missing stanza data)

    cipher: none
```

然而，由于存储是版本化的，可以查看 stanza 被删除之前某个时间点的仓库状态。找到合适的目标时间可能比较棘手，但在本例中，可以通过检查 `backup.info` 被删除的时间来确定目标时间。

s3-server **⇒** 使用 `mc` 列出存储桶中 `backup.info` 的版本信息

```bash
mc ls --versions s3/demo-bucket/demo-repo/backup/demo/backup.info
```

```
[2026-01-19 09:22:30 UTC]     0B STANDARD 7933eae9-2226-4dc3-aa14-02cc52e0fb4f v3 DEL backup.info
[2026-01-19 09:22:20 UTC] 1.0KiB STANDARD 78f325bc-a340-4c8b-b423-8409b3a1cc91 v2 PUT backup.info
[2026-01-19 09:22:15 UTC]   372B STANDARD 6e6603b7-b30b-4aab-a3ef-42f95184034a v1 PUT backup.info

[2026-01-19 09:22:30 UTC]     0B STANDARD fa5ded47-c1e2-4672-b5d9-2874e4841d91 v3 DEL backup.info.copy
[2026-01-19 09:22:20 UTC] 1.0KiB STANDARD 69453b85-7d97-4e61-81d0-d8a3ad6cfea6 v2 PUT backup.info.copy
```

现在可以使用目标时间运行 `info` 命令，以查看仓库被删除之前的状态。

pg-primary **⇒** 带目标时间的 info 命令

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=3 \
       --repo-target-time="2026-01-19 09:22:20+00" info
```

```
       [filtered 5 lines of output]
        wal archive min/max (13): 00000005000000000000001C/00000005000000000000001D

        full backup: 20260119-092215F

            timestamp start/stop: 2026-01-19 09:22:15+00 / 2026-01-19 09:22:20+00
            wal start/stop: 00000005000000000000001C / 00000005000000000000001D
            repo3: backup set size: 3.8MB, backup size: 3.8MB
```

如果 `info` 命令显示了所需的备份，则可以使用相同的目标时间进行恢复。

pg-primary **⇒** 带目标时间的 restore 命令

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=3 --delta \
       --repo-target-time="2026-01-19 09:22:20+00" --log-level-console=info restore
```

```
P00   INFO: restore command begin 2.58.0: --delta --exec-id=4527-3f625708 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --process-max=4 --repo=3 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo5-gcs-bucket=demo-bucket --repo5-gcs-key= --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo4-path=/demo-repo --repo5-path=/demo-repo --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo4-sftp-host=sftp-server --repo4-sftp-host-key-hash-type=sha1 --repo4-sftp-host-user=pgbackrest --repo4-sftp-private-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp --repo4-sftp-public-key-file=/var/lib/pgsql/.ssh/id_rsa_sftp.pub --repo-target-time="2026-01-19 09:22:20+00" --repo2-type=azure --repo3-type=s3 --repo4-type=sftp --repo5-type=gcs --stanza=demo

P00   INFO: repo3: restore backup set 20260119-092215F, recovery will start at 2026-01-19 09:22:15

P00   INFO: remove invalid files/links/paths from '/var/lib/pgsql/13/data'
P00   INFO: write updated /var/lib/pgsql/13/data/postgresql.auto.conf
       [filtered 2 lines of output]
```

```bash
sudo systemctl start postgresql-13.service
```

--------
## 专用仓库主机

[快速入门](#快速入门quick-start) 中描述的配置适用于简单安装场景，但对于企业级配置，更典型的做法是使用专用仓库主机来存储备份和 WAL 归档文件。这样可以将备份和 WAL 归档与数据库服务器分离，从而降低数据库主机故障的影响。仍然建议使用传统备份软件对仓库主机进行备份。

在 PostgreSQL 主机上，`pg1-path` 必须是本地 PostgreSQL 集群的路径，且不应配置 `pg1-host`。在配置仓库主机时，pgbackrest 配置文件必须通过 `pg-host` 选项来连接主库和备库（如有）。仓库主机是唯一需要感知多个 PostgreSQL 主机的 pgbackrest 配置节点。顺序无关紧要，例如 pg1-path/pg1-host、pg2-path/pg2-host 可以是主库或备库。

### 安装

创建一台名为 repository 的新主机，用于存储集群备份。

注意：

仓库主机上安装的 pgBackRest 版本必须与 PostgreSQL 主机上安装的版本完全一致。

创建 `pgbackrest` 用户来管理 pgBackRest 仓库。仓库可以由任何用户管理，但最好不要使用 `postgres`（如果存在的话），以避免混淆。

repository **⇒** 创建 `pgbackrest` 用户

```bash
sudo groupadd pgbackrest
sudo adduser -gpgbackrest -n pgbackrest
```

从软件包安装 pgBackRest 优于从源码编译。通过软件包安装时，本节后续步骤通常不需要执行，但某些软件包可能会跳过创建某些目录或应用错误的权限。在这种情况下，可能需要手动创建目录或更新权限。

RHEL 平台的 pgBackRest 软件包可在 [yum.postgresql.org](http://yum.postgresql.org) 获取。

如果您的发行版/版本没有提供软件包，可以 [从源码编译](#从源码编译build) 后按如下所示手动安装。

repository **⇒** 安装依赖

```bash
sudo yum install postgresql-libs libssh2
```

repository **⇒** 从构建主机复制 pgBackRest 二进制文件

```bash
sudo scp build:/build/pgbackrest/src/pgbackrest /usr/bin
sudo chmod 755 /usr/bin/pgbackrest
```

pgBackRest 需要日志目录、配置目录以及配置文件。

repository **⇒** 创建 pgBackRest 配置文件和目录

```bash
sudo mkdir -p -m 770 /var/log/pgbackrest
sudo chown pgbackrest:pgbackrest /var/log/pgbackrest
sudo mkdir -p /etc/pgbackrest
sudo mkdir -p /etc/pgbackrest/conf.d
sudo touch /etc/pgbackrest/pgbackrest.conf
sudo chmod 640 /etc/pgbackrest/pgbackrest.conf
sudo chown pgbackrest:pgbackrest /etc/pgbackrest/pgbackrest.conf
```

repository **⇒** 创建 pgBackRest 仓库

```bash
sudo mkdir -p /var/lib/pgbackrest
sudo chmod 750 /var/lib/pgbackrest
sudo chown pgbackrest:pgbackrest /var/lib/pgbackrest
```

### 配置

pgBackRest 可以使用 TLS 客户端证书来实现主机间通信。也可以使用 SSH，请参见 [配置免密 SSH](/docs/pgbackrest/user-guide/#setup-passwordless-ssh)。

pgBackRest 期望客户端/服务器证书的生成方式与 PostgreSQL 相同。有关生成证书的详细说明，请参见 [使用 TLS 的安全 TCP/IP 连接](https://www.postgresql.org/docs/current/ssl-tcp.html)。

仓库主机必须配置 pg-primary 的主机/用户和数据库路径。主库将被配置为 `pg1`，以便后续可以添加备库。

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `pg1-host`/`pg1-host-user` 和 `pg1-path`

```ini
[demo]
pg1-host=pg-primary
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
tls-server-address=*
tls-server-auth=pgbackrest-client=*
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

数据库主机必须配置仓库主机/用户。`repo1-host-user` 选项的默认值为 `pgbackrest`。如果 `postgres` 用户在仓库主机上执行恢复操作，最好不要同时允许 `postgres` 用户执行备份。不过，如果 `postgres` 用户与 `pgbackrest` 用户属于同一用户组，则可以直接读取仓库。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-host`/`repo1-host-user`

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
log-level-file=detail
repo1-host=repository
repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt
repo1-host-cert-file=/etc/pgbackrest/cert/client.crt
repo1-host-key-file=/etc/pgbackrest/cert/client.key
repo1-host-type=tls
tls-server-address=*
tls-server-auth=pgbackrest-client=demo
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

PostgreSQL 的配置可以参见 [配置归档](#配置归档configure-archiving) 章节。

命令的运行方式与单主机配置相同，但 `backup` 和 `expire` 等命令需要在仓库主机上运行，而不是在数据库主机上。

### 配置 TLS 服务器

pgBackRest TLS 服务器必须在每台主机上进行配置并启动。

repository **⇒** 配置 pgBackRest 服务器

```bash
sudo cat /etc/systemd/system/pgbackrest.service
```

```ini
[Unit]
Description=pgBackRest Server
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
Restart=always
RestartSec=1
User=pgbackrest
ExecStart=/usr/bin/pgbackrest server
ExecStartPost=/bin/sleep 3
ExecStartPost=/bin/bash -c "[ ! -z $MAINPID ]"
ExecReload=/bin/kill -HUP $MAINPID
[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable pgbackrest
sudo systemctl start pgbackrest
```

pg-primary **⇒** 配置 pgBackRest 服务器

```bash
sudo cat /etc/systemd/system/pgbackrest.service
```

```ini
[Unit]
Description=pgBackRest Server
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
Restart=always
RestartSec=1
User=postgres
ExecStart=/usr/bin/pgbackrest server
ExecStartPost=/bin/sleep 3
ExecStartPost=/bin/bash -c "[ ! -z $MAINPID ]"
ExecReload=/bin/kill -HUP $MAINPID
[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable pgbackrest
sudo systemctl start pgbackrest
```

### 创建并检查 Stanza

在新仓库中创建 stanza。

repository **⇒** 创建 stanza

```bash
sudo -u pgbackrest pgbackrest --stanza=demo stanza-create
```

在数据库主机和仓库主机上分别检查配置是否正确。关于 `check` 命令的更多信息，请参见 [检查配置](#检查配置check-the-configuration)。

pg-primary **⇒** 检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo check
```

repository **⇒** 检查配置

```bash
sudo -u pgbackrest pgbackrest --stanza=demo check
```

### 执行备份

要对 PostgreSQL 集群执行备份，请在仓库主机上使用 `backup` 命令运行 pgBackRest。

repository **⇒** 备份 demo 集群

```bash
sudo -u pgbackrest pgbackrest --stanza=demo backup
```

```
P00   WARN: no prior backup exists, incr backup has been changed to full
```

由于在仓库主机上创建了新仓库，因此会出现增量备份变更为全量备份的警告信息。

### 恢复备份

要对 PostgreSQL 集群执行恢复，请在数据库主机上使用 `restore` 命令运行 pgBackRest。

pg-primary **⇒** 停止 demo 集群、执行恢复并重启 PostgreSQL

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres pgbackrest --stanza=demo --delta restore
sudo systemctl start postgresql-13.service
```

--------

## 并行备份与恢复

pgBackRest 提供并行处理功能，以提升压缩和传输的性能。使用 `--process-max` 选项设置用于此功能的进程数量。

对于 `backup` 命令，通常最好不要使用超过可用 CPU 数量的 25%。只要定期执行备份，备份速度不必太快，并且备份过程应尽量不影响数据库性能。

`restore` 命令可以也应该使用所有可用的 CPU，因为在恢复期间 PostgreSQL 集群处于关闭状态，主机上通常没有其他重要工作在进行。如果主机包含多个集群，则在设置恢复并行度时应予以考虑。

repository **⇒** 使用单进程执行备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo --type=full backup
```

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 pgBackRest 使用多个 `backup` 进程

```ini
[demo]
pg1-host=pg-primary
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/13/data
[global]
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
tls-server-address=*
tls-server-auth=pgbackrest-client=*
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

repository **⇒** 使用多进程执行备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo --type=full backup
```

repository **⇒** 获取 demo 集群的备份信息

```bash
sudo -u pgbackrest pgbackrest info
```

```
stanza: demo
    status: ok
    cipher: none

    db (current)
        wal archive min/max (13): 000000070000000000000023/000000070000000000000025

        full backup: 20260119-092306F

            timestamp start/stop: 2026-01-19 09:23:06+00 / 2026-01-19 09:23:08+00

            wal start/stop: 000000070000000000000023 / 000000070000000000000023
            database size: 30.8MB, database backup size: 30.8MB
            repo1: backup set size: 3.8MB, backup size: 3.8MB

        full backup: 20260119-092309F

            timestamp start/stop: 2026-01-19 09:23:09+00 / 2026-01-19 09:23:11+00

            wal start/stop: 000000070000000000000024 / 000000070000000000000025
            database size: 30.8MB, database backup size: 30.8MB
            repo1: backup set size: 3.8MB, backup size: 3.8MB
```

与单进程备份相比，使用多进程应能提升最后一次备份的性能。对于非常小的备份，差异可能不太明显，但随着数据库规模增大，节省的时间也会相应增加。

--------

## 启动与停止

如果备库被提升用于测试，或者测试集群从生产备份中恢复，那么最好阻止这些集群向 pgBackRest 仓库写入数据。这可以通过 `stop` 命令来实现。

会写入数据且被 `stop` 阻止的命令有：`archive-push`、`backup`、`expire`、`stanza-create` 和 `stanza-upgrade`。注意，`stanza-delete` 是例外（详情参见 [删除 Stanza](#删除-stanzadelete-a-stanza)）。

pg-primary **⇒** 停止 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest stop
```

新的 pgBackRest 写入命令将不再运行。

repository **⇒** 尝试执行备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo backup
```

```
P00   WARN: unable to check pg1: [StopError] raised from remote-0 tls protocol on 'pg-primary': stop file exists for all stanzas

P00  ERROR: [056]: unable to find primary cluster - cannot proceed
            HINT: are all available clusters in recovery?
```

指定 `--force` 选项可以终止当前正在运行的 pgBackRest 写入命令，包括异步 archive-get（但如果 PostgreSQL 需要，它会再次运行）。如果 pgBackRest 已经处于停止状态，则再次停止会生成警告。

pg-primary **⇒** 再次停止 pgBackRest 服务

```bash
sudo -u postgres pgbackrest stop
```

```
P00   WARN: stop file already exists for all stanzas
```

使用 `start` 命令重新启动 pgBackRest 写入命令。在停止之前正在进行的写入命令不会自动重新启动，但现在允许它们重新开始。

pg-primary **⇒** 启动 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest start
```

也可以仅停止某个特定 stanza 的 pgBackRest 写入命令。

pg-primary **⇒** 停止 `demo` stanza 的 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest --stanza=demo stop
```

指定 stanza 的新 pgBackRest 写入命令将不再运行。

repository **⇒** 尝试执行备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo backup
```

```
P00   WARN: unable to check pg1: [StopError] raised from remote-0 tls protocol on 'pg-primary': stop file exists for stanza demo

P00  ERROR: [056]: unable to find primary cluster - cannot proceed
            HINT: are all available clusters in recovery?
```

针对单个 stanza 启动 pgBackRest 写入命令时，也必须指定该 stanza。

pg-primary **⇒** 启动 `demo` stanza 的 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest --stanza=demo start
```

--------

## 复制

复制允许从单个主库创建多个 PostgreSQL 集群副本（称为备库）。备库可用于分担读取负载，并在主库主机发生故障时提供冗余。

### 安装

创建一台名为 pg-standby 的新主机来运行备库。

从软件包安装 pgBackRest 优于从源码编译。通过软件包安装时，本节后续步骤通常不需要执行，但某些软件包可能会跳过创建某些目录或应用错误的权限。在这种情况下，可能需要手动创建目录或更新权限。

RHEL 平台的 pgBackRest 软件包可在 [yum.postgresql.org](http://yum.postgresql.org) 获取。

如果您的发行版/版本没有提供软件包，可以 [从源码编译](#从源码编译build) 后手动安装。

pg-standby **⇒** 安装依赖

```bash
sudo yum install postgresql-libs libssh2
```

pg-standby **⇒** 从构建主机复制 pgBackRest 二进制文件

```bash
sudo scp build:/build/pgbackrest/src/pgbackrest /usr/bin
sudo chmod 755 /usr/bin/pgbackrest
```

pgBackRest 需要日志目录、配置目录以及配置文件。

pg-standby **⇒** 创建 pgBackRest 配置文件和目录

```bash
sudo mkdir -p -m 770 /var/log/pgbackrest
sudo chown postgres:postgres /var/log/pgbackrest
sudo mkdir -p /etc/pgbackrest
sudo mkdir -p /etc/pgbackrest/conf.d
sudo touch /etc/pgbackrest/pgbackrest.conf
sudo chmod 640 /etc/pgbackrest/pgbackrest.conf
sudo chown postgres:postgres /etc/pgbackrest/pgbackrest.conf
```

### 热备库

热备库通过 WAL 归档进行复制，并允许只读查询。

pgBackRest 的配置与 pg-primary 非常相似，区别在于使用 `standby` 恢复类型来使集群在到达 WAL 流末尾时保持在恢复模式。

pg-standby:`/etc/pgbackrest/pgbackrest.conf` **⇒** 在备库上配置 pgBackRest

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
log-level-file=detail
repo1-host=repository
repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt
repo1-host-cert-file=/etc/pgbackrest/cert/client.crt
repo1-host-key-file=/etc/pgbackrest/cert/client.key
repo1-host-type=tls
tls-server-address=*
tls-server-auth=pgbackrest-client=demo
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

pg-standby **⇒** 配置 pgBackRest 服务器

```bash
sudo cat /etc/systemd/system/pgbackrest.service
```

```ini
[Unit]
Description=pgBackRest Server
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
Restart=always
RestartSec=1
User=postgres
ExecStart=/usr/bin/pgbackrest server
ExecStartPost=/bin/sleep 3
ExecStartPost=/bin/bash -c "[ ! -z $MAINPID ]"
ExecReload=/bin/kill -HUP $MAINPID
[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable pgbackrest
sudo systemctl start pgbackrest
```

创建 PostgreSQL 将要恢复到的路径。

pg-standby **⇒** 创建 PostgreSQL 路径

```bash
sudo -u postgres mkdir -p -m 700 /var/lib/pgsql/13/data
```

现在可以使用 `restore` 命令创建备库。

重要提示：

如果集群要在不成为新主库的情况下被提升（例如用于报表或测试），请使用 `--archive-mode=off` 或在 `postgresql.conf` 中设置 `archive_mode=off` 来禁用归档。如果不禁用归档，仓库中可能会被污染大量 WAL，从而使后续恢复变得更加困难。

pg-standby **⇒** 恢复 demo 备库集群

```bash
sudo -u postgres pgbackrest --stanza=demo --type=standby restore
sudo -u postgres cat /var/lib/pgsql/13/data/postgresql.auto.conf

# Do not edit this file manually!
# It will be overwritten by the ALTER SYSTEM command.

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:21:08
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:21:29
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:21:53
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
# Removed by pgBackRest restore on 2026-01-19 09:22:32 # recovery_target_time = '2026-01-19 09:21:46.275227+00'
# Removed by pgBackRest restore on 2026-01-19 09:22:32 # recovery_target_action = 'promote'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:22:32
restore_command = 'pgbackrest --repo=3 --repo-target-time="2026-01-19 09:22:20+00" --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:23:01
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:23:27
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
```

在启动 PostgreSQL 之前，必须启用 `hot_standby` 设置，以允许在 pg-standby 上进行只读连接。否则，连接尝试将被拒绝。其余配置是为备库被提升为主库做准备。

pg-standby:`/var/lib/pgsql/13/data/postgresql.conf` **⇒** 配置 PostgreSQL

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
hot_standby = on
log_filename = 'postgresql.log'
```

pg-standby **⇒** 启动 PostgreSQL

```bash
sudo systemctl start postgresql-13.service
```

PostgreSQL 日志提供了关于恢复的重要信息。特别注意集群已进入备库模式并准备好接受只读连接。

pg-standby **⇒** 检查 PostgreSQL 日志中表示成功的日志消息

```bash
sudo -u postgres cat /var/lib/pgsql/13/data/log/postgresql.log
```

```
       [filtered 4 lines of output]
LOG:  listening on Unix socket "/tmp/.s.PGSQL.5432"
LOG:  database system was interrupted; last known up at 2026-01-19 09:23:09 UTC

LOG:  entering standby mode

LOG:  restored log file "00000007.history" from archive
LOG:  restored log file "000000070000000000000024" from archive
LOG:  redo starts at 0/24000028
LOG:  restored log file "000000070000000000000025" from archive
LOG:  consistent recovery state reached at 0/25000050

LOG:  database system is ready to accept read only connections
```

测试复制是否正确配置的一个简单方法是在 pg-primary 上创建一张表。

pg-primary **⇒** 在主库上创建新表

```bash
sudo -u postgres psql -c " \
       begin; \
       create table replicated_table (message text); \
       insert into replicated_table values ('Important Data'); \
       commit; \
       select * from replicated_table";
```

```
    message
----------------

 Important Data

(1 row)
```

然后在 pg-standby 上查询同一张表。

pg-standby **⇒** 在备库上查询新表

```bash
sudo -u postgres psql -c "select * from replicated_table;"
```

```
ERROR:  relation "replicated_table" does not exist

LINE 1: select * from replicated_table;
                      ^
```

那么，出了什么问题？由于 PostgreSQL 是从归档中拉取 WAL 段来执行复制的，因此在包含这些更改的 WAL 段从 pg-primary 推送过来之前，备库上不会看到这些更改。

可以手动调用 `pg_switch_wal()` 来解决这个问题，该函数会将当前 WAL 段推送到归档（并创建一个新的 WAL 段来存放后续更改）。

pg-primary **⇒** 调用 `pg_switch_wal()`

```bash
sudo -u postgres psql -c "select *, current_timestamp from pg_switch_wal()";
```

```
 pg_switch_wal |       current_timestamp
---------------+-------------------------------
 0/26017738    | 2026-01-19 09:23:33.308165+00
(1 row)
```

稍等片刻后，表将出现在 pg-standby 上。

pg-standby **⇒** 新表现在已出现在备库上（可能需要重试几次）

```bash
sudo -u postgres psql -c " \
       select *, current_timestamp from replicated_table"
```

```
    message     |       current_timestamp
----------------+-------------------------------

 Important Data | 2026-01-19 09:23:34.570736+00

(1 row)
```

检查备库配置对仓库的访问权限。

pg-standby **⇒** 检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=1105-680ac4e9 --log-level-console=info --log-level-file=detail --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --stanza=demo
P00   INFO: check repo1 (standby)

P00   INFO: switch wal not performed because this is a standby

P00   INFO: check command end: completed successfully
```

### 流复制

流复制不仅仅依赖 WAL 归档，而是直接连接到主库，并在主库上发生更改时立即应用。这使得主库与备库之间的延迟大大降低。

流复制需要一个具有复制权限的用户。

pg-primary **⇒** 创建复制用户

```bash
sudo -u postgres psql -c " \
       create user replicator password 'jw8s0F4' replication";
```

```sql
CREATE ROLE
```

必须更新 `pg_hba.conf` 文件以允许备库以复制用户身份连接。请务必将下面的 IP 地址替换为您 pg-standby 的实际 IP 地址。修改 `pg_hba.conf` 文件后需要重新加载配置。

pg-primary **⇒** 为复制用户创建 `pg_hba.conf` 条目

```bash
sudo -u postgres sh -c 'echo \
       "host    replication     replicator      172.17.0.8/32           md5" \
       >> /var/lib/pgsql/13/data/pg_hba.conf'

sudo systemctl reload postgresql-13.service
```

备库需要知道如何连接到主库，因此将在 pgBackRest 中配置 `primary_conninfo` 设置。

pg-standby:`/etc/pgbackrest/pgbackrest.conf` **⇒** 设置 primary_conninfo

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
recovery-option=primary_conninfo=host=172.17.0.6 port=5432 user=replicator
[global]
log-level-file=detail
repo1-host=repository
repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt
repo1-host-cert-file=/etc/pgbackrest/cert/client.crt
repo1-host-key-file=/etc/pgbackrest/cert/client.key
repo1-host-type=tls
tls-server-address=*
tls-server-auth=pgbackrest-client=demo
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

可以在 `primary_conninfo` 设置中配置密码，但使用 `.pgpass` 文件更加灵活和安全。

pg-standby **⇒** 在 `.pgpass` 文件中配置复制密码

```bash
sudo -u postgres sh -c 'echo \
       "172.17.0.6:*:replication:replicator:jw8s0F4" \
       >> /var/lib/pgsql/.pgpass'

sudo -u postgres chmod 600 /var/lib/pgsql/.pgpass
```

现在可以使用 `restore` 命令创建备库。

pg-standby **⇒** 停止 PostgreSQL 并恢复 demo 备库集群

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres pgbackrest --stanza=demo --delta --type=standby restore
sudo -u postgres cat /var/lib/pgsql/13/data/postgresql.auto.conf

# Do not edit this file manually!
# It will be overwritten by the ALTER SYSTEM command.

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:21:08
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:21:29
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:21:53
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
# Removed by pgBackRest restore on 2026-01-19 09:22:32 # recovery_target_time = '2026-01-19 09:21:46.275227+00'
# Removed by pgBackRest restore on 2026-01-19 09:22:32 # recovery_target_action = 'promote'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:22:32
restore_command = 'pgbackrest --repo=3 --repo-target-time="2026-01-19 09:22:20+00" --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:23:01
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:23:39
primary_conninfo = 'host=172.17.0.6 port=5432 user=replicator'
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
```

注意：

`primary_conninfo` 设置已被写入 `postgresql.auto.conf` 文件，因为它在 `pgbackrest.conf` 中被配置为 `recovery-option`。如果希望保留现有的 `postgresql.auto.conf` 文件，可以在 `restore` 时使用 `--type=preserve` 选项。

默认情况下，RHEL 将 `postgresql.conf` 文件存储在 PostgreSQL 数据目录中。这意味着对 `postgresql.conf` 所做的更改在最近一次恢复时被覆盖，因此必须重新启用 `hot_standby` 设置。解决此问题的其他方案是将 `postgresql.conf` 文件存储在其他位置，或在 pg-primary 主机上启用 `hot_standby` 设置（在主库上该设置会被忽略）。

pg-standby:`/var/lib/pgsql/13/data/postgresql.conf` **⇒** 启用 hot_standby

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
hot_standby = on
log_filename = 'postgresql.log'
```

pg-standby **⇒** 启动 PostgreSQL

```bash
sudo systemctl start postgresql-13.service
```

PostgreSQL 日志将确认流复制已启动。

pg-standby **⇒** 检查 PostgreSQL 日志中表示成功的日志消息

```bash
sudo -u postgres cat /var/lib/pgsql/13/data/log/postgresql.log
```

```
       [filtered 12 lines of output]
LOG:  database system is ready to accept read only connections
LOG:  restored log file "000000070000000000000026" from archive

LOG:  started streaming WAL from primary at 0/27000000 on timeline 7
```

现在，在 pg-primary 上创建表后，它将很快出现在 pg-standby 上，无需调用 `pg_switch_wal()`。

pg-primary **⇒** 在主库上创建新表

```bash
sudo -u postgres psql -c " \
       begin; \
       create table stream_table (message text); \
       insert into stream_table values ('Important Data'); \
       commit; \
       select *, current_timestamp from stream_table";
```

```
    message     |       current_timestamp
----------------+-------------------------------

 Important Data | 2026-01-19 09:23:44.896378+00

(1 row)
```

pg-standby **⇒** 在备库上查询表

```bash
sudo -u postgres psql -c " \
       select *, current_timestamp from stream_table"
```

```
    message     |      current_timestamp
----------------+------------------------------

 Important Data | 2026-01-19 09:23:45.09247+00

(1 row)
```

--------
## 多 Stanza 配置

pgBackRest 支持多个 stanza（stanza 是 pgBackRest 中用于标识一个 PostgreSQL 集群备份配置的逻辑名称）。最常见的用法是在多个 stanza 之间共享一台仓库主机。

### 安装

创建一台名为 pg-alt 的新主机，用于运行新的主库。

从软件包安装 pgBackRest 优于从源码编译。通过软件包安装时，本节中的其余步骤通常不是必需的，但某个软件包可能会跳过创建某些目录或设置了错误的权限。在这种情况下，可能需要手动创建目录或更新权限。

RHEL 平台的 pgBackRest 软件包可在 [yum.postgresql.org](http://yum.postgresql.org) 获取。

如果您的发行版/版本没有提供软件包，可以 [从源码编译](#从源码编译build) 并按如下方式手动安装。

pg-alt **⇒** 安装依赖

```bash
sudo yum install postgresql-libs libssh2
```

pg-alt **⇒** 从构建主机复制 pgBackRest 二进制文件

```bash
sudo scp build:/build/pgbackrest/src/pgbackrest /usr/bin
sudo chmod 755 /usr/bin/pgbackrest
```

pgBackRest 需要日志目录、配置目录以及配置文件。

pg-alt **⇒** 创建 pgBackRest 配置文件和目录

```bash
sudo mkdir -p -m 770 /var/log/pgbackrest
sudo chown postgres:postgres /var/log/pgbackrest
sudo mkdir -p /etc/pgbackrest
sudo mkdir -p /etc/pgbackrest/conf.d
sudo touch /etc/pgbackrest/pgbackrest.conf
sudo chmod 640 /etc/pgbackrest/pgbackrest.conf
sudo chown postgres:postgres /etc/pgbackrest/pgbackrest.conf
```

### 配置

pgBackRest 的配置与 pg-primary 几乎相同，区别在于使用 `demo-alt` stanza，以便将备份和归档存储在单独的位置。

pg-alt:`/etc/pgbackrest/pgbackrest.conf` **⇒** 在新主库上配置 pgBackRest

```ini
[demo-alt]
pg1-path=/var/lib/pgsql/13/data
[global]
log-level-file=detail
repo1-host=repository
repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt
repo1-host-cert-file=/etc/pgbackrest/cert/client.crt
repo1-host-key-file=/etc/pgbackrest/cert/client.key
repo1-host-type=tls
tls-server-address=*
tls-server-auth=pgbackrest-client=demo-alt
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `pg1-host`/`pg1-host-user` 和 `pg1-path`

```ini
[demo]
pg1-host=pg-primary
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/13/data
[demo-alt]
pg1-host=pg-alt
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/13/data
[global]
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
tls-server-address=*
tls-server-auth=pgbackrest-client=*
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

pg-alt **⇒** 配置 pgBackRest 服务器

```bash
sudo cat /etc/systemd/system/pgbackrest.service
```

```ini
[Unit]
Description=pgBackRest Server
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
Restart=always
RestartSec=1
User=postgres
ExecStart=/usr/bin/pgbackrest server
ExecStartPost=/bin/sleep 3
ExecStartPost=/bin/bash -c "[ ! -z $MAINPID ]"
ExecReload=/bin/kill -HUP $MAINPID
[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable pgbackrest
sudo systemctl start pgbackrest
```

### 初始化演示集群

pg-alt **⇒** 创建演示集群

```bash
sudo -u postgres /usr/pgsql-13/bin/initdb \
       -D /var/lib/pgsql/13/data -k -A peer
```

pg-alt:`/var/lib/pgsql/13/data/postgresql.conf` **⇒** 配置 PostgreSQL 设置

```ini
archive_command = 'pgbackrest --stanza=demo-alt archive-push %p'
archive_mode = on
log_filename = 'postgresql.log'
```

pg-alt **⇒** 启动演示集群

```bash
sudo systemctl restart postgresql-13.service
```

### 创建 Stanza 并检查配置

必须运行 `stanza-create` 命令来初始化 stanza。建议在 `stanza-create` 之后运行 `check` 命令，以确认归档和备份配置正确。

pg-alt **⇒** 创建 stanza 并检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo-alt --log-level-console=info stanza-create
```

```
P00   INFO: stanza-create command begin 2.58.0: --exec-id=808-80d5cc1a --log-level-console=info --log-level-file=detail --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --stanza=demo-alt
P00   INFO: stanza-create for stanza 'demo-alt' on repo1

P00   INFO: stanza-create command end: completed successfully
```

```bash
sudo -u postgres pgbackrest --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=836-0d0cd439 --log-level-console=info --log-level-file=detail --no-log-timestamp --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls

P00   INFO: check stanza 'demo-alt'

P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 000000010000000000000001 successfully archived to '/var/lib/pgbackrest/archive/demo-alt/13-1/0000000100000000/000000010000000000000001-6682d48b9456c97a63b86fb052e926912686d78a.gz' on repo1

P00   INFO: check command end: completed successfully
```

如果从仓库主机运行 `check` 命令，则会检查所有 stanza。

repository **⇒** 检查所有 stanza 的配置

```bash
sudo -u pgbackrest pgbackrest --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=1188-a5806db7 --log-level-console=info --no-log-timestamp --repo1-path=/var/lib/pgbackrest

P00   INFO: check stanza 'demo'

P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 000000070000000000000027 successfully archived to '/var/lib/pgbackrest/archive/demo/13-1/0000000700000000/000000070000000000000027-ab9de60f70c5f849d29e55b1104aae9c6dfee0dc.gz' on repo1
P00   INFO: check stanza 'demo-alt'

P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 000000010000000000000002 successfully archived to '/var/lib/pgbackrest/archive/demo-alt/13-1/0000000100000000/000000010000000000000002-1cfb636b14b524bd3cf014e32ec3211fcf7ea48e.gz' on repo1

P00   INFO: check command end: completed successfully
```

--------

## 异步归档

通过 `archive-async` 选项可启用异步归档。该选项同时对 `archive-push` 和 `archive-get` 命令生效。

异步归档需要配置缓冲区路径（spool path）。两个命令都会在此处存储临时数据，但各自的工作方式有所不同，因此缓冲区路径的使用方式会在各节中详细说明。

pg-primary **⇒** 创建缓冲区目录

```bash
sudo mkdir -p -m 750 /var/spool/pgbackrest
sudo chown postgres:postgres /var/spool/pgbackrest
```

pg-standby **⇒** 创建缓冲区目录

```bash
sudo mkdir -p -m 750 /var/spool/pgbackrest
sudo chown postgres:postgres /var/spool/pgbackrest
```

必须配置缓冲区路径并启用异步归档。异步归档通过减少远程存储的连接次数来自动带来一定的性能提升，但配置 `process-max` 可以通过并行化操作大幅提升性能。注意不要将 `process-max` 设置得过高，以免影响正常的数据库操作。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置缓冲区路径和异步归档

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
archive-async=y
log-level-file=detail
repo1-host=repository
repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt
repo1-host-cert-file=/etc/pgbackrest/cert/client.crt
repo1-host-key-file=/etc/pgbackrest/cert/client.key
repo1-host-type=tls
spool-path=/var/spool/pgbackrest
tls-server-address=*
tls-server-auth=pgbackrest-client=demo
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
[global:archive-get]
process-max=2
[global:archive-push]
process-max=2
```

pg-standby:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置缓冲区路径和异步归档

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
recovery-option=primary_conninfo=host=172.17.0.6 port=5432 user=replicator
[global]
archive-async=y
log-level-file=detail
repo1-host=repository
repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt
repo1-host-cert-file=/etc/pgbackrest/cert/client.crt
repo1-host-key-file=/etc/pgbackrest/cert/client.key
repo1-host-type=tls
spool-path=/var/spool/pgbackrest
tls-server-address=*
tls-server-auth=pgbackrest-client=demo
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
[global:archive-get]
process-max=2
[global:archive-push]
process-max=2
```

注意：

`process-max` 通过命令专属配置节（command sections）来设置，这样该选项就不会被备份和恢复操作所使用。这也允许为 `archive-push` 和 `archive-get` 设置不同的值。

为演示目的，将通过中断流复制来强制 PostgreSQL 使用 `restore_command` 获取 WAL。

pg-primary **⇒** 通过更改复制密码来中断流复制

```bash
sudo -u postgres psql -c "alter user replicator password 'bogus'"
```

```sql
ALTER ROLE
```

pg-standby **⇒** 重启备库以中断连接

```bash
sudo systemctl restart postgresql-13.service
```

### 归档推送（Archive Push）

异步 `archive-push` 命令将 WAL 归档工作卸载给独立的进程（或多个进程），以提升吞吐量。其工作原理是"向前预读"，查看除 PostgreSQL 当前通过 `archive_command` 请求之外，哪些 WAL 段已准备好进行归档。WAL 段直接从 `pg_xlog`/`pg_wal` 目录传输到归档存储，只有当 WAL 段已安全存入归档后，`archive_command` 才会返回成功。

缓冲区路径保存当前 WAL 归档的状态。写入缓冲区目录的状态文件通常长度为零，占用的空间极少（最多几 MB），且 IO 开销很小。该目录中的所有信息均可重建，因此在将集群迁移到新硬件时无需保留缓冲区目录。

重要提示：

在异步归档的早期实现中，WAL 段在压缩和传输前会先复制到缓冲区目录。新实现直接从 `pg_xlog` 目录复制 WAL。如果在 v1.12 或更早版本中使用了异步归档，请在升级前仔细阅读 v1.13 的发版说明。

可通过 `[stanza]-archive-push-async.log` 文件监控异步进程的活动。一个好的测试方法是快速推送多个 WAL 段。

pg-primary **⇒** 测试并行异步归档

```bash
sudo -u postgres psql -c " \
       select pg_create_restore_point('test async push'); select pg_switch_wal(); \
       select pg_create_restore_point('test async push'); select pg_switch_wal(); \
       select pg_create_restore_point('test async push'); select pg_switch_wal(); \
       select pg_create_restore_point('test async push'); select pg_switch_wal(); \
       select pg_create_restore_point('test async push'); select pg_switch_wal();"

sudo -u postgres pgbackrest --stanza=demo --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=5533-a10d780a --log-level-console=info --log-level-file=detail --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --stanza=demo
P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 00000007000000000000002D successfully archived to '/var/lib/pgbackrest/archive/demo/13-1/0000000700000000/00000007000000000000002D-68fdc910d7c6f88b37ea66c55abbb15619fc23e4.gz' on repo1

P00   INFO: check command end: completed successfully
```

现在日志文件中将包含并行异步活动的记录。

pg-primary **⇒** 查看日志中的结果

```bash
sudo -u postgres cat /var/log/pgbackrest/demo-archive-push-async.log
```

```
-------------------PROCESS START-------------------
P00   INFO: archive-push:async command begin 2.58.0: [/var/lib/pgsql/13/data/pg_wal] --archive-async --exec-id=5499-311a72c4 --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --process-max=2 --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --spool-path=/var/spool/pgbackrest --stanza=demo

P00   INFO: push 1 WAL file(s) to archive: 000000070000000000000028
P01 DETAIL: pushed WAL file '000000070000000000000028' to the archive

P00 DETAIL: statistics: {"socket.client":{"total":1},"socket.session":{"total":1},"tls.client":{"total":1},"tls.session":{"total":1}}
P00   INFO: archive-push:async command end: completed successfully

-------------------PROCESS START-------------------
P00   INFO: archive-push:async command begin 2.58.0: [/var/lib/pgsql/13/data/pg_wal] --archive-async --exec-id=5522-2bee2531 --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --process-max=2 --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --spool-path=/var/spool/pgbackrest --stanza=demo

P00   INFO: push 4 WAL file(s) to archive: 000000070000000000000029...00000007000000000000002C
P01 DETAIL: pushed WAL file '000000070000000000000029' to the archive
P02 DETAIL: pushed WAL file '00000007000000000000002A' to the archive
P01 DETAIL: pushed WAL file '00000007000000000000002B' to the archive
P02 DETAIL: pushed WAL file '00000007000000000000002C' to the archive

P00 DETAIL: statistics: {"socket.client":{"total":1},"socket.session":{"total":1},"tls.client":{"total":1},"tls.session":{"total":1}}
P00   INFO: archive-push:async command end: completed successfully

-------------------PROCESS START-------------------
P00   INFO: archive-push:async command begin 2.58.0: [/var/lib/pgsql/13/data/pg_wal] --archive-async --exec-id=5540-4b5e5f9b --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --process-max=2 --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --spool-path=/var/spool/pgbackrest --stanza=demo

P00   INFO: push 1 WAL file(s) to archive: 00000007000000000000002D
P01 DETAIL: pushed WAL file '00000007000000000000002D' to the archive

P00 DETAIL: statistics: {"socket.client":{"total":1},"socket.session":{"total":1},"tls.client":{"total":1},"tls.session":{"total":1}}
P00   INFO: archive-push:async command end: completed successfully
```

### 归档获取（Archive Get）

异步 `archive-get` 命令维护一个本地 WAL 队列以提升吞吐量。如果在队列中找不到某个 WAL 段，则会从仓库中获取该段以及足够数量的连续 WAL 来填满队列。队列的最大容量由 `archive-get-queue-max` 定义。每当队列容量不足一半时，就会获取更多 WAL 来填充它。

在 WAL 生成量较大或与仓库存储（如 S3 或其他对象存储）连接延迟较高的环境中，异步操作最为有用。在高延迟连接的情况下，适当增大 `process-max` 可能是个好主意。

可通过 `[stanza]-archive-get-async.log` 文件监控异步进程的活动。

pg-standby **⇒** 查看日志中的结果

```bash
sudo -u postgres cat /var/log/pgbackrest/demo-archive-get-async.log
```

```
-------------------PROCESS START-------------------
P00   INFO: archive-get:async command begin 2.58.0: [000000070000000000000024, 000000070000000000000025, 000000070000000000000026, 000000070000000000000027, 000000070000000000000028, 000000070000000000000029, 00000007000000000000002A, 00000007000000000000002B] --archive-async --exec-id=1655-39b5c501 --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --process-max=2 --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --spool-path=/var/spool/pgbackrest --stanza=demo
P00   INFO: get 8 WAL file(s) from archive: 000000070000000000000024...00000007000000000000002B

P02 DETAIL: found 000000070000000000000025 in the repo1: 13-1 archive
P01 DETAIL: found 000000070000000000000024 in the repo1: 13-1 archive
P02 DETAIL: found 000000070000000000000026 in the repo1: 13-1 archive
P01 DETAIL: found 000000070000000000000027 in the repo1: 13-1 archive

P00 DETAIL: unable to find 000000070000000000000028 in the archive
P00 DETAIL: statistics: {"socket.client":{"total":1},"socket.session":{"total":1},"tls.client":{"total":1},"tls.session":{"total":1}}
       [filtered 24 lines of output]
P00   INFO: archive-get:async command begin 2.58.0: [000000070000000000000028, 000000070000000000000029, 00000007000000000000002A, 00000007000000000000002B, 00000007000000000000002C, 00000007000000000000002D, 00000007000000000000002E, 00000007000000000000002F] --archive-async --exec-id=1705-617957e3 --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/pgsql/13/data --process-max=2 --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --spool-path=/var/spool/pgbackrest --stanza=demo
P00   INFO: get 8 WAL file(s) from archive: 000000070000000000000028...00000007000000000000002F

P02 DETAIL: found 000000070000000000000029 in the repo1: 13-1 archive
P01 DETAIL: found 000000070000000000000028 in the repo1: 13-1 archive
P02 DETAIL: found 00000007000000000000002A in the repo1: 13-1 archive
P01 DETAIL: found 00000007000000000000002B in the repo1: 13-1 archive
P02 DETAIL: found 00000007000000000000002C in the repo1: 13-1 archive
P01 DETAIL: found 00000007000000000000002D in the repo1: 13-1 archive

P00 DETAIL: unable to find 00000007000000000000002E in the archive
P00 DETAIL: statistics: {"socket.client":{"total":1},"socket.session":{"total":1},"tls.client":{"total":1},"tls.session":{"total":1}}
       [filtered 7 lines of output]
```

pg-primary **⇒** 通过更改复制密码恢复流复制

```bash
sudo -u postgres psql -c "alter user replicator password 'jw8s0F4'"
```

```sql
ALTER ROLE
```

--------

## 从备库备份

pgBackRest 可以在备库而非主库上执行备份。从备库备份需要配置 pg-standby 主机，并启用 `backup-standby` 选项。如果配置了多个备库，则会使用找到的第一个正在运行的备库进行备份。

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `pg2-host`/`pg2-host-user` 和 `pg2-path`

```ini
[demo]
pg1-host=pg-primary
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/13/data
pg2-host=pg-standby
pg2-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg2-host-cert-file=/etc/pgbackrest/cert/client.crt
pg2-host-key-file=/etc/pgbackrest/cert/client.key
pg2-host-type=tls
pg2-path=/var/lib/pgsql/13/data
[demo-alt]
pg1-host=pg-alt
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/13/data
[global]
backup-standby=y
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
tls-server-address=*
tls-server-auth=pgbackrest-client=*
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

执行备份时，主库和备库都必须在线，但绝大多数文件将从备库复制，以减轻主库的负载。数据库主机可以按任意顺序配置，pgBackRest 会自动判断哪个是主库，哪个是备库。

repository **⇒** 从 pg2 备份演示集群

```bash
sudo -u pgbackrest pgbackrest --stanza=demo --log-level-console=detail backup
```

```
       [filtered 2 lines of output]
P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 00000007000000000000002F, lsn = 0/2F000028

P00   INFO: wait for replay on the standby to reach 0/2F000028
P00   INFO: replay on the standby reached 0/2F000028

P00   INFO: check archive for prior segment 00000007000000000000002E

P01 DETAIL: backup file pg-primary:/var/lib/pgsql/13/data/log/postgresql.log (11KB, 0.48%) checksum c9e618ab29ad21e5a3e14a5c02cead1a9506adc5
P01 DETAIL: backup file pg-primary:/var/lib/pgsql/13/data/global/pg_control (8KB, 0.83%) checksum 8f43c919dede7e23f0a104a7ad769cf5ff365daa
P01 DETAIL: backup file pg-primary:/var/lib/pgsql/13/data/pg_hba.conf (4.5KB, 1.02%) checksum 65e54ae24bda87b2542351cb16a7fecc7e5aceeb

P01 DETAIL: match file from prior backup pg-primary:/var/lib/pgsql/13/data/current_logfiles (26B, 1.02%) checksum 78a9f5c10960f0d91fcd313937469824861795a2
P01 DETAIL: match file from prior backup pg-primary:/var/lib/pgsql/13/data/pg_logical/replorigin_checkpoint (8B, 1.02%) checksum 347fc8f2df71bd4436e38bd1516ccd7ea0d46532
       [filtered 1243 lines of output]
```

此增量备份表明，大部分文件从 pg-standby 主机复制，只有少数文件从 pg-primary 主机复制。

pgBackRest 创建的备库备份与在主库上执行的备份完全相同。其实现方式是：在 pg-primary 主机上启动/停止备份，从 pg-standby 主机复制已复制的文件，然后从 pg-primary 主机复制剩余的少量文件。这意味着主库的日志和统计信息也会包含在备份中。

--------

## 升级 PostgreSQL

将 PostgreSQL 升级到新的主版本后，必须立即将所有 pgBackRest 配置中的 `pg-path` 更新为新的数据库路径，并运行 `stanza-upgrade` 命令。如果主机上配置了多个仓库，则每个仓库上的 stanza 都会被升级。如果数据库处于离线状态，请使用 `--no-online` 选项。

以下说明并非 PostgreSQL 升级的完整指南，而是概述了升级主库和备库的一般流程，重点演示重新配置 pgBackRest 所需的步骤。建议在升级前先执行一次备份。

pg-primary **⇒** 停止旧集群

```bash
sudo systemctl stop postgresql-13.service
```

由于备库将从新升级的集群恢复，因此也需要停止备库上的旧集群。

pg-standby **⇒** 停止旧集群

```bash
sudo systemctl stop postgresql-13.service
```

创建新集群并执行升级。

pg-primary **⇒** 创建新集群并执行升级

```bash
sudo -u postgres /usr/pgsql-14/bin/initdb \
       -D /var/lib/pgsql/14/data -k -A peer

sudo -u postgres sh -c 'cd /var/lib/pgsql && \
       /usr/pgsql-14/bin/pg_upgrade \
       --old-bindir=/usr/pgsql-13/bin \
       --new-bindir=/usr/pgsql-14/bin \
       --old-datadir=/var/lib/pgsql/13/data \
       --new-datadir=/var/lib/pgsql/14/data \
       --old-options=" -c config_file=/var/lib/pgsql/13/data/postgresql.conf" \
       --new-options=" -c config_file=/var/lib/pgsql/14/data/postgresql.conf"'
```

```
       [filtered 69 lines of output]
Checking for extension updates                              ok

Upgrade Complete

----------------
Optimizer statistics are not transferred by pg_upgrade.
       [filtered 4 lines of output]
```

配置新集群的设置和端口。

pg-primary:`/var/lib/pgsql/14/data/postgresql.conf` **⇒** 配置 PostgreSQL

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
log_filename = 'postgresql.log'
```

更新所有系统上的 pgBackRest 配置，使其指向新集群。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 升级 `pg1-path`

```ini
[demo]
pg1-path=/var/lib/pgsql/14/data
[global]
archive-async=y
log-level-file=detail
repo1-host=repository
repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt
repo1-host-cert-file=/etc/pgbackrest/cert/client.crt
repo1-host-key-file=/etc/pgbackrest/cert/client.key
repo1-host-type=tls
spool-path=/var/spool/pgbackrest
tls-server-address=*
tls-server-auth=pgbackrest-client=demo
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
[global:archive-get]
process-max=2
[global:archive-push]
process-max=2
```

pg-standby:`/etc/pgbackrest/pgbackrest.conf` **⇒** 升级 `pg-path`

```ini
[demo]
pg1-path=/var/lib/pgsql/14/data
recovery-option=primary_conninfo=host=172.17.0.6 port=5432 user=replicator
[global]
archive-async=y
log-level-file=detail
repo1-host=repository
repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt
repo1-host-cert-file=/etc/pgbackrest/cert/client.crt
repo1-host-key-file=/etc/pgbackrest/cert/client.key
repo1-host-type=tls
spool-path=/var/spool/pgbackrest
tls-server-address=*
tls-server-auth=pgbackrest-client=demo
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
[global:archive-get]
process-max=2
[global:archive-push]
process-max=2
```

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 升级 `pg1-path` 和 `pg2-path`，禁用从备库备份

```ini
[demo]
pg1-host=pg-primary
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/14/data
pg2-host=pg-standby
pg2-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg2-host-cert-file=/etc/pgbackrest/cert/client.crt
pg2-host-key-file=/etc/pgbackrest/cert/client.key
pg2-host-type=tls
pg2-path=/var/lib/pgsql/14/data
[demo-alt]
pg1-host=pg-alt
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/13/data
[global]
backup-standby=n
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
tls-server-address=*
tls-server-auth=pgbackrest-client=*
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

pg-primary **⇒** 复制 hba 配置文件

```bash
sudo cp /var/lib/pgsql/13/data/pg_hba.conf \
       /var/lib/pgsql/14/data/pg_hba.conf
```

在启动新集群之前，必须先运行 `stanza-upgrade` 命令。

pg-primary **⇒** 升级 stanza

```bash
sudo -u postgres pgbackrest --stanza=demo --no-online \
       --log-level-console=info stanza-upgrade
```

```
P00   INFO: stanza-upgrade command begin 2.58.0: --exec-id=6060-3d1ec838 --log-level-console=info --log-level-file=detail --no-log-timestamp --no-online --pg1-path=/var/lib/pgsql/14/data --repo1-host=repository --repo1-host-ca-file=/etc/pgbackrest/cert/ca.crt --repo1-host-cert-file=/etc/pgbackrest/cert/client.crt --repo1-host-key-file=/etc/pgbackrest/cert/client.key --repo1-host-type=tls --stanza=demo
P00   INFO: stanza-upgrade for stanza 'demo' on repo1

P00   INFO: stanza-upgrade command end: completed successfully
```

启动新集群并确认安装成功。

pg-primary **⇒** 启动新集群

```bash
sudo systemctl start postgresql-14.service
```

使用 `check` 命令测试配置。

pg-primary **⇒** 检查配置

```bash
sudo systemctl status postgresql-14.service
sudo -u postgres pgbackrest --stanza=demo check
```

删除旧集群。

pg-primary **⇒** 删除旧集群

```bash
sudo rm -rf /var/lib/pgsql/13/data
```

在备库上安装新的 PostgreSQL 二进制文件并创建集群。

pg-standby **⇒** 删除旧集群并创建新集群

```bash
sudo rm -rf /var/lib/pgsql/13/data
sudo -u postgres mkdir -p -m 700 /usr/pgsql-14/bin
```

在仓库主机上运行 `check` 命令。由于备库集群已停止，关于备库不可用的警告是预期的。运行此命令表明仓库服务器已知晓备库的存在，并且已正确为主库服务器进行了配置。

repository **⇒** 检查配置

```bash
sudo -u pgbackrest pgbackrest --stanza=demo check
```

```
P00   WARN: unable to check pg2: [DbConnectError] raised from remote-0 tls protocol on 'pg-standby': unable to connect to 'dbname='postgres' port=5432': could not connect to server: No such file or directory
            	Is the server running locally and accepting
            	connections on Unix domain socket "/run/postgresql/.s.PGSQL.5432"?
```

对新集群运行全量备份，然后从备份恢复备库。如果请求 `incr` 或 `diff` 类型，备份类型将自动变更为 `full`。

repository **⇒** 运行全量备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo --type=full backup
```

pg-standby **⇒** 恢复演示备库集群

```bash
sudo -u postgres pgbackrest --stanza=demo --type=standby restore
```

pg-standby:`/var/lib/pgsql/14/data/postgresql.conf` **⇒** 配置 PostgreSQL

```ini
hot_standby = on
```

pg-standby **⇒** 启动 PostgreSQL 并检查 pgBackRest 配置

```bash
sudo systemctl start postgresql-14.service
sudo -u postgres pgbackrest --stanza=demo check
```

备库恢复完成后，即可重新启用从备库备份功能。

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 重新启用从备库备份

```ini
[demo]
pg1-host=pg-primary
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/14/data
pg2-host=pg-standby
pg2-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg2-host-cert-file=/etc/pgbackrest/cert/client.crt
pg2-host-key-file=/etc/pgbackrest/cert/client.key
pg2-host-type=tls
pg2-path=/var/lib/pgsql/14/data
[demo-alt]
pg1-host=pg-alt
pg1-host-ca-file=/etc/pgbackrest/cert/ca.crt
pg1-host-cert-file=/etc/pgbackrest/cert/client.crt
pg1-host-key-file=/etc/pgbackrest/cert/client.key
pg1-host-type=tls
pg1-path=/var/lib/pgsql/13/data
[global]
backup-standby=y
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
tls-server-address=*
tls-server-auth=pgbackrest-client=*
tls-server-ca-file=/etc/pgbackrest/cert/ca.crt
tls-server-cert-file=/etc/pgbackrest/cert/server.crt
tls-server-key-file=/etc/pgbackrest/cert/server.key
```

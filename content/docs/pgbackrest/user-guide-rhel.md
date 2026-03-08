---
title: "用户指南（RHEL/Rocky/CentOS）"
linkTitle: "用户指南（EL）"
weight: 30
description: "面向 RHEL、Rocky Linux 和 AlmaLinux 系统的 pgBackRest 安装配置与使用指南，按步骤逐一讲解。"
icon: fa-brands fa-redhat
module: [PGBACKREST]
categories: [教程]
---

> 原始页面： <https://pgbackrest.org/user-guide-rhel.html>

--------

## 简介

本用户指南设计为从头到尾顺序阅读——每个章节都依赖前一章节的内容。例如， [**恢复**](#恢复-1) 章节依赖 [**快速开始**](#快速开始) 章节中完成的配置。熟悉 pgBackRest 之后可以跳章查阅，但初次阅读建议按顺序跟随。

本指南的示例基于 RHEL 和 PostgreSQL 13，但迁移到其他 Unix 发行版或 PostgreSQL 版本并不困难。与操作系统相关的命令仅限于创建、启动、停止和删除 PostgreSQL 集群的部分；pgBackRest 命令在所有 Unix 系统上均相同，只是可执行文件路径可能有所不同。pgBackRest 致力于在各 PostgreSQL 版本间保持一致的行为，但不同版本间存在细微差异，这些差异可能体现在本指南的部分示例中，例如 PostgreSQL 路径、文件名和配置项。

有关 PostgreSQL 的配置信息，请参阅 PostgreSQL [**手册**](http://www.postgresql.org/docs/13/static/index.html)。

本指南在文档方面采用了一种较为新颖的方式：每条命令在从 XML 源构建文档时都会在虚拟机上实际执行，因此可以确信这些命令按照所呈现的顺序正确运行。相关命令的输出会显示在命令下方；若未包含输出，则是因为其与说明无关或会干扰行文。

所有命令均预期以具有 `root` 和 `postgres` 用户 sudo 权限的非特权用户身份运行。也可以直接以对应用户身份运行，去掉 `sudo` 即可。

--------

## 核心概念

以下概念与 pgBackRest、PostgreSQL 以及本用户指南密切相关。

### 备份

备份是数据库集群的一致性副本，可用于从硬件故障中恢复、执行时间点恢复（PITR），或启动新的备库。

**全量备份（full backup）**：pgBackRest 将数据库集群的全部内容复制到备份中。数据库集群的第一次备份始终是全量备份。pgBackRest 始终能够直接恢复全量备份。全量备份的一致性不依赖于备份外部的任何文件。

**差异备份（differential backup）**：pgBackRest 仅复制自上次全量备份以来发生变化的数据库集群文件。pgBackRest 通过复制所选差异备份中的所有文件以及上一次全量备份中相应的未变化文件来恢复差异备份。差异备份的优点是比全量备份占用更少的磁盘空间，但差异备份和全量备份必须都有效才能恢复差异备份。

**增量备份（incremental backup）**：pgBackRest 仅复制自上次备份（可以是另一次增量备份、差异备份或全量备份）以来发生变化的文件，因此通常比全量备份或差异备份小得多。与差异备份一样，增量备份依赖于其他备份的有效性才能恢复。恢复增量备份需要：所有在上一次差异备份之前的增量备份、上一次差异备份以及上一次全量备份都有效。若不存在差异备份，则需要追溯到上一次全量备份的所有增量备份以及全量备份本身都有效。

### 恢复

恢复是将备份复制到某个系统并作为活跃数据库集群启动的过程，需要备份文件和一个或多个 WAL 段才能正确完成。

### 预写日志（WAL）

WAL 是 PostgreSQL 确保已提交更改不会丢失的机制。事务按顺序写入 WAL，待这些写入刷盘后，事务即视为已提交。随后，后台进程将变更写入主数据库集群文件（即堆）。发生崩溃时，PostgreSQL 会重放 WAL 以恢复数据库一致性。

WAL 在概念上是连续无限的，但在实践中被切分为每个 16MB 的独立文件，称为 WAL 段。WAL 段遵循 `0000000100000A1E000000FE` 这样的命名约定，其中前 8 个十六进制数字表示时间线，后 16 位是逻辑序列号（LSN）。

### 加密

加密是将数据转换为无法识别格式的过程，只有提供正确的密码（口令）才能还原。

pgBackRest 使用用户提供的密码对仓库进行加密，防止未经授权的访问。

--------

## 升级 pgBackRest

### 从 v1 升级到 v2

从 v1 升级到 v2 相当简单。仓库格式没有改变，v1 中所有未弃用的选项均被接受，因此大多数安装只需安装新版本即可。

但有几点注意事项：

- 已弃用的 `thread-max` 选项不再有效，请改用 `process-max`。
- 已弃用的 `archive-max-mb` 选项不再有效，该选项已被语义不同的 `archive-push-queue-max` 选项取代。
- `backup-user` 选项的默认值已从 `backrest` 改为 `pgbackrest`。
- 在 v2.02 中，pgBackRest 配置文件的默认位置从 `/etc/pgbackrest.conf` 更改为 `/etc/pgbackrest/pgbackrest.conf`。如果 `/etc/pgbackrest/pgbackrest.conf` 不存在，则会加载 `/etc/pgbackrest.conf` 文件（如果存在）。

许多选项名称已更改以提高一致性，但 v1 中的旧名称仍然被接受。一般来说，`db-*` 选项已重命名为 `pg-*`，`backup-*`/`retention-*` 选项在适当的情况下已重命名为 `repo-*`。

使用 v2 中引入的新名称时，PostgreSQL 和仓库选项必须使用索引，例如 `pg1-host`、`pg1-path`、`repo1-path`、`repo1-type` 等。

### 从 v2.x 升级到 v2.y

从 v2.x 升级到 v2.y 非常简单。仓库格式没有改变，大多数安装只需替换新版本的二进制文件即可。若没有用到旧版本不支持的新功能，也可以降级。

重要提示：

本地和远程 pgBackRest 版本必须完全匹配，因此应一起升级。若版本不匹配，WAL 归档和备份将无法正常工作，直到版本一致为止，此时会报告以下错误：`[ProtocolError] expected value '2.x' for greeting key 'version' but got '2.y'`。

--------

## 编译构建

推荐通过包安装 pgBackRest，而非从源码构建，详见 [**安装**](#安装)。

如需从源码构建，建议使用专用构建主机而非在生产环境中操作，因为构建所需的许多工具不应安装在生产服务器上。pgBackRest 只有单个可执行文件，构建完成后可直接复制到目标主机。

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

如果所用发行版/版本没有提供包，可以 [**从源码构建**](#编译构建) 后手动安装，步骤如下。

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

pgBackRest 现在应已正确安装，建议验证一下。若有依赖项缺失，命令行运行 pgBackRest 时会出现相应错误。

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

RHEL 默认在日志文件名中包含星期几，这会使用户指南的示例变得复杂，因此将 `log_filename` 设置为固定值。

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

提前精确估算所需空间并不容易。较好的做法是先执行几次备份，记录不同类型备份（full/incr/diff）的大小，并统计每日产生的 WAL 量，由此对空间需求形成大致判断——尽管随着数据库的演变，需求会随时间变化。

本演示将仓库存储在与 PostgreSQL 服务器相同的主机上，这是最简单的配置，适用于通过传统备份软件对数据库主机进行整机备份的场景。

pg-primary **⇒** 创建 pgBackRest 仓库

```bash
sudo mkdir -p /var/lib/pgbackrest
sudo chmod 750 /var/lib/pgbackrest
sudo chown postgres:postgres /var/lib/pgbackrest
```

需要配置仓库路径，以便 pgBackRest 知道仓库的位置。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 pgBackRest 仓库路径

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-path=/var/lib/pgbackrest
```

也可以配置多个仓库，详见 [**多仓库**](#多仓库) 章节。

### 配置归档

备份正在运行的 PostgreSQL 集群需要启用 WAL 归档。`%p` 是 PostgreSQL 传递待归档 WAL 段路径的占位符。注意，即使没有对集群进行显式写入，备份过程中也会生成*至少*一个 WAL 段。

pg-primary:`/var/lib/pgsql/13/data/postgresql.conf` **⇒** 配置归档设置

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
log_filename = 'postgresql.log'
```

完成以上更改后，必须重启 PostgreSQL 集群使配置生效。

pg-primary **⇒** 重启演示集群

```bash
sudo systemctl restart postgresql-13.service
```

若归档单个 WAL 段预计超过 60 秒（默认值）才能到达仓库，应适当增大 pgBackRest 的 `archive-timeout` 选项。注意，此选项与 PostgreSQL 的 `archive_timeout` 不同——后者用于强制切换 WAL 段，适用于长时间没有写入的数据库。有关 PostgreSQL `archive_timeout` 的更多信息，请参阅 PostgreSQL [**预写日志**](https://www.postgresql.org/docs/current/static/runtime-config-wal.html) 文档。

`archive-push` 命令可以单独配置选项。例如，可以为归档设置较低的压缩级别以提升速度，而不影响备份的压缩设置。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `archive-push` 使用较低的压缩级别

```ini
[demo]
pg1-path=/var/lib/pgsql/13/data
[global]
repo1-path=/var/lib/pgbackrest
[global:archive-push]
compress-level=3
```

这种配置方式适用于任何命令，也可以针对特定 stanza 进一步细化，例如 `demo:archive-push`。

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

本节为仓库配置加密类型和密钥，演示加密功能。无论仓库类型（如 S3 或其他对象存储）是否自带加密，pgBackRest 的加密始终在客户端执行。

密钥应使用长随机口令，推荐通过 `openssl rand -base64 48` 生成。

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

仓库完成配置、stanza 创建并检查完毕后，加密设置不可更改。

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

默认情况下，pgBackRest 会等待下一个定期检查点完成后才开始备份。根据 PostgreSQL 的 `checkpoint_timeout` 和 `checkpoint_segments` 设置，等待时间可能较长。通常建议设置 `start-fast=y`，让备份立即启动——这会强制执行一次检查点，但由于备份一般每天只运行一次，额外的检查点对性能几乎没有影响。对于负载极高的集群，建议按需在命令行传递 `--start-fast`。

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

运行 pgBackRest 的 `backup` 命令即可对 PostgreSQL 集群执行备份。

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

默认情况下，pgBackRest 尝试执行增量备份。增量备份必须基于全量备份，由于尚无全量备份，pgBackRest 自动改为执行全量备份。

`type` 选项用于指定备份类型（全量或差异）。

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

这次没有出现警告，因为全量备份已经存在。增量备份可以基于全量备份*或*差异备份，而差异备份只能基于全量备份。若要执行全量备份，加上 `--type=full` 选项即可。

在线备份期间，pgBackRest 会等待备份一致性所需的 WAL 段完成归档。等待时间由 `archive-timeout` 选项控制，默认为 60 秒。若已知单个 WAL 段的归档需要更长时间，应适当增大此值。

### 制定备份计划

可以使用 cron 等工具调度备份。

以下示例配置了两个 cron 任务：每周日早上 6:30 运行全量备份，周一至周六早上 6:30 运行差异备份。若此 crontab 在周中首次安装，pgBackRest 会在差异任务首次执行时自动改为运行全量备份，第二天再运行差异备份。

```bash
#m h   dom mon dow   command
30 06  *   *   0     pgbackrest --type=full --stanza=demo backup
30 06  *   *   1-6   pgbackrest --type=diff --stanza=demo backup
```

确定备份计划后，务必配置保留策略以定期清理旧备份，详见 [**保留策略**](#保留策略)。

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

`info` 命令可查询单个 stanza 或所有 stanza。默认输出为文本格式，以人类可读的方式显示备份摘要，该格式可能随版本发布而变化。

如需机器可读输出，请使用 `--output=json`。JSON 输出包含比文本格式更多的信息，且在未发现 bug 的情况下保持稳定。

若要加快执行速度，可指定 `--detail-level=progress` 将输出限制为仅进度信息，但这会跳过除 stanza 可用性之外的所有检查。

输出中每个 stanza 对应一个独立的节，可使用 `--stanza` 选项将输出限制为单个 stanza。`status` 字段简要说明 stanza 的健康状况：`ok` 表示运行正常；存在多个仓库时，`mixed` 表示 stanza 在一个或多个仓库上存在异常，此时会按仓库逐一列出状态；若仓库出现未知错误码的错误，将使用 `other` 并附上完整错误详情。`wal archive min/max` 显示归档中当前存储的最小和最大 WAL，若有多个仓库则跨所有仓库汇总报告（除非指定了 `--repo`）。注意，由于归档保留策略或其他原因，WAL 序列中可能存在间隙。

若有上述命令正在主机上运行，`status` 信息旁会出现 `backup/expire running` 和/或 `restore running` 提示。

备份按从旧到新的顺序显示。最旧的备份*始终*是全量备份（标签末尾为 `F`），最新的备份则可能是全量备份、差异备份（末尾为 `D`）或增量备份（末尾为 `I`）。

`timestamp start/stop` 定义了备份的执行时间段。`timestamp stop` 可用于判断时间点恢复时应选择哪个备份。有关时间点恢复的更多信息，请参阅 [**时间点恢复**](#时间点恢复) 章节。

`wal start/stop` 定义了恢复时使数据库达到一致性所需的 WAL 范围，`backup` 命令在完成前会确保此范围内的 WAL 已全部归档。

`database size` 是数据库的完整未压缩大小，`database backup size` 是实际需要备份的数据量（全量备份时两者相同）。

`repo` 标识备份所在的仓库。`backup set size` 包含该备份及恢复所需的所有引用备份中的文件总量，`backup size` 仅包含该备份自身的文件（全量备份时两者相同）。若启用了压缩，仓库大小反映压缩后的大小。

`backup reference total` 汇总了恢复该备份所需的其他备份。使用 `--set` 选项可显示完整的引用列表。

### 恢复备份

备份可以防范多种灾难场景，最常见的是硬件故障和数据损坏。模拟数据损坏最简单的方法是删除某个关键的 PostgreSQL 集群文件。

pg-primary **⇒** 停止演示集群并删除 `pg_control` 文件

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres rm /var/lib/pgsql/13/data/global/pg_control
```

缺少这个关键文件时，集群将无法启动。

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

恢复 PostgreSQL 集群的备份，使用 pgBackRest 的 `restore` 命令即可。集群必须处于停止状态（本例已停止），且需先清空 PostgreSQL 数据目录中的所有文件。

pg-primary **⇒** 从演示集群中删除旧文件

```bash
sudo -u postgres find /var/lib/pgsql/13/data -mindepth 1 -delete
```

pg-primary **⇒** 恢复演示集群并启动 PostgreSQL

```bash
sudo -u postgres pgbackrest --stanza=demo restore
sudo systemctl start postgresql-13.service
```

这次集群成功启动，因为恢复操作已补回了缺失的 `pg_control` 文件。

有关 `restore` 命令的更多信息，请参阅 [**恢复**](#恢复-1) 章节。

--------

## 监控

监控是任何生产系统的重要组成部分。市面上有众多监控工具，稍加处理即可将 pgBackRest 集成进去。

pgBackRest 可以 JSON 格式输出仓库信息，包含每个 stanza 的所有备份列表和 WAL 归档信息。

### 在 PostgreSQL 中

PostgreSQL 的 `COPY` 命令可将 pgBackRest 信息加载到表中。以下示例将该逻辑封装成函数，便于执行实时查询。

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

现在可以使用 `monitor.pgbackrest_info()` 函数查询某个 stanza 的上次成功备份时间和最新归档 WAL。

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

### 使用 jq

jq 是一款命令行工具，可方便地从 JSON 中提取数据。

pg-primary **⇒** 安装 jq 工具

```bash
sudo yum install jq
```

现在可以使用 jq 查询指定 stanza 的上次成功备份时间。

pg-primary **⇒** 查询上次成功备份时间

```bash
sudo -u postgres pgbackrest --output=json --stanza=demo info | \
       jq '.[0] | .backup[-1] | .timestamp.stop'
```

```
1768814896
```

或查询最后归档的 WAL。

pg-primary **⇒** 查询最后归档的 WAL

```bash
sudo -u postgres pgbackrest --output=json --stanza=demo info | \
       jq '.[0] | .archive[-1] | .max'
```

```
"000000010000000000000005"
```

注意：

此语法需要 jq v1.5 及以上版本。

注意：

jq 可能会对系统标识符等大整数进行四舍五入，请仔细测试你的查询。

--------

## 备份

配置了多个仓库时，pgBackRest 默认备份到优先级最高的仓库（如 `repo1`），除非指定了 `--repo` 选项。

pgBackRest 没有内置调度器，建议通过 cron 或其他调度机制运行备份。

详情和示例请参阅 [**执行备份**](#执行备份)。

### 文件打包

将仓库中的文件打包在一起可以节省备份时间和仓库空间，在对象存储（如 S3）或块大小较大的文件系统上效果尤为明显。对象存储上每个文件的创建开销较高，极小文件的存储成本可能与大文件相当。

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

不使用文件打包时，全量备份路径中会有 1000 多个文件；启用打包后文件总数大幅减少。另一个好处是，零长度文件不再单独存储（仅记录在清单（manifest）中），而普通备份中每个零长度文件都会独立占用一个文件。

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

`repo-bundle-size` 和 `repo-bundle-limit` 选项可用于调优，但大多数情况下默认值已是最优。

文件打包虽然通常更高效，但也有一些缺点：从仓库手动检索文件变得更困难；对去重存储可能并不理想，因为每次全量备份的文件在包中排列方式都不同；文件包不支持断点续传，因此不宜将 `repo-bundle-limit` 设置过高。

### 块级增量备份

块级增量备份只存储文件中自上次备份以来发生变化的部分，而非整个文件，从而节省存储空间。

通过 `repo-block` 选项启用块级增量备份，对所有备份类型都启用时效果最佳，且必须同时启用文件打包功能。

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

用户可以为备份附加键/值对形式的注解，此选项可多次使用以添加多条注解。

pg-primary **⇒** 执行带注解的全量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --annotation=source="demo backup" \
       --annotation=key=value --type=full backup
```

通过 `--set` 指定备份时，`info` 命令的文本输出会显示注解；JSON 输出中则始终包含注解。

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

备份时附加的注解，之后可使用 `annotate` 命令添加、修改或删除。

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

通常，保留尽可能多的备份有助于提供更大的 [**时间点恢复**](#时间点恢复) 窗口，但也必须兼顾磁盘空间等实际限制。保留策略选项负责在旧备份不再需要时将其删除。

pgBackRest 根据保留策略类型（数量或时间段）对全量备份进行轮转。指定数量时，过期逻辑只关注需保留多少个备份，与创建时间无关。差异备份也按数量管理，当其依赖的全量备份过期时，差异备份随之过期。增量备份不会被保留策略单独过期，始终随关联的全量备份或差异备份一起过期。详情与示例请参见 [**全量备份保留策略**](#全量备份保留策略) 和 [**差异备份保留策略**](#差异备份保留策略) 章节。

归档 WAL 默认与未过期备份一起保留；如有特殊需求，可通过各仓库的 `retention-archive` 选项调整此策略（不推荐）。详情与示例请参见 [**归档保留策略**](#归档保留策略) 章节。

`expire` 命令会在每次备份成功后自动运行，也可手动执行。手动运行时，会按各已配置仓库的保留策略执行过期操作。若指定了 `--repo` 选项，则仅对该仓库执行。还可以通过 `--set` 选项将过期操作限定到特定备份集；若未同时指定 `--repo`，则会搜索所有仓库并对符合条件的备份集执行过期。每次运行 `expire` 命令时都会检查并执行归档保留计划。

### 全量备份保留策略

`repo1-retention-full-type` 决定 `repo1-retention-full` 的解释方式：可以是保留的全量备份数量，也可以是保留天数。过期操作仅在新备份完成后触发。例如，若 `repo1-retention-full-type=count` 且 `repo1-retention-full=2`，则需要存储了三个全量备份之后才会过期最旧的那个；若 `repo1-retention-full-type=time` 且 `repo1-retention-full=20`，则只有当至少一个全量备份的存储时间超过 20 天时，才会触发过期操作。

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

目前已配置 `repo1-retention-full=2`，但当前只有一个全量备份，因此下次执行全量备份时不会过期任何旧备份。

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

归档*确实*被过期了，因为这些 WAL 段生成于最旧备份之前，对恢复没有意义——只有备份之后生成的 WAL 段才能用于恢复该备份。

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

全量备份 `20260119-092100F` 已被过期，归档保留策略现在以 `20260119-092118F`（当前最旧的全量备份）为基准。

### 差异备份保留策略

`repo1-retention-diff` 设置为需要保留的差异备份数量。差异备份只依赖于之前的全量备份，因此可以维护最近一天或更长时间内的"滚动"差异备份集合，既支持快速恢复到近期时间点，又能控制整体空间占用。

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

已配置 `repo1-retention-diff=1`，因此需要执行两次差异备份才会过期其中一个。这里额外创建一个增量备份，用于演示增量备份的过期逻辑——本例中，增量备份随差异备份一起被过期。

pg-primary **⇒** 执行差异备份和增量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=diff backup
sudo -u postgres pgbackrest --stanza=demo --type=incr backup
```

再执行一次差异备份，之前的差异备份和增量备份将被过期，只保留最新的差异备份。

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

pgBackRest 在过期备份时会自动删除对应的归档 WAL（默认按 `repo1-retention-full` 过期全量备份的 WAL），但有时可能需要更激进地过期归档以节省磁盘空间。需要注意，在差异归档保留策略中，全量备份被视为差异备份处理。

过期归档时，pgBackRest 永远不会删除维持备份一致性所必需的 WAL 段。但由于时间点恢复（PITR）只能在连续的 WAL 流上进行，在正常备份过期流程之外激进地过期归档时需格外谨慎。若要在不实际执行过期的情况下预览哪些内容将被删除，可在执行 `expire` 命令时添加 `dry-run` 选项。

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

差异备份 `20260119-092120F_20260119-092124D` 中保留了一些 WAL 段——尽管这些段无法用于更早备份的 PITR 向前回放，但必须保留以确保旧备份的一致性。`20260119-092120F_20260119-092124D` 之后、`20260119-092120F_20260119-092126D` 之前生成的 WAL 段已被删除。`20260119-092120F_20260119-092126D` 之后生成的 WAL 段仍然保留，可用于 PITR。

在差异归档保留策略中，全量备份被视为差异备份，因此若以相同设置执行全量备份，则只会保留该全量备份之后的归档用于 PITR。

--------

## 恢复

`restore` 命令默认从第一个存在备份的仓库中自动选取最新备份（参见 [**快速开始 - 恢复备份**](#恢复备份)）。仓库的检查顺序由 `pgbackrest.conf` 决定（如 repo1 先于 repo2）。若要从特定仓库恢复，可传入 `--repo` 选项（如 `--repo=1`）；若要恢复非最新的备份，可传入 `--set` 选项。

指定 PITR 类型为 `--type=time` 或 `--type=lsn` 时，必须通过 `--target` 选项指定目标时间或 LSN。若未通过 `--set` 指定备份，pgBackRest 会按顺序检查各仓库，寻找包含所请求时间或 LSN 的备份。若未找到匹配备份：`--type=time` 时会使用第一个含备份仓库中的最新备份；`--type=lsn` 时则不选取任何备份。对于其他 PITR 类型（如 `xid`），若目标早于最新备份，则必须提供 `--set` 选项。详情与示例请参见 [**时间点恢复**](#时间点恢复)。

根据 PostgreSQL 的建议，复制槽不包含在备份中，更多信息请参阅 PostgreSQL 文档中的 [**备份数据目录**](https://www.postgresql.org/docs/current/continuous-archiving.html#BACKUP-LOWLEVEL-BASE-BACKUP-DATA) 章节。

以下各节介绍 `restore` 命令的更多功能。

### 文件所有权

若 `restore` 以非 root 用户运行（典型场景），所有恢复的文件都将归执行 pgBackRest 的用户/组所有。若现有文件不属于该用户/组且无法更新所有权，则会报错。此时需由特权用户先更新文件所有权，再重新尝试恢复。

若 `restore` 以 `root` 用户运行，pgBackRest 会尝试按照备份时清单（manifest）中记录的所有权信息重建文件归属。清单中只存储用户/组的**名称**，恢复主机上必须存在相同的名称才能正常映射。若找不到对应的用户/组名称，则使用 PostgreSQL 数据目录的用户/组；若仍无法映射，则最终回退到 `root`。

### Delta 选项

[**快速开始**](#快速开始) 中的 [**恢复备份**](#恢复备份) 章节要求在执行 `restore` 前先清空数据库集群目录。`delta` 选项让 pgBackRest 自动判断集群目录中哪些文件可以保留、哪些需要从备份恢复——同时还会*删除*不在备份清单中的文件，从而清除无关变更。该功能通过计算集群目录中每个文件的 [SHA-1](https://en.wikipedia.org/wiki/SHA-1) 加密哈希来实现，若哈希值与备份中存储的不匹配，则恢复该文件。配合 `process-max` 使用时效率极高。由于恢复期间 PostgreSQL 已关闭，可以使用比备份时更多的进程数。

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

某些场景下，可能需要从集群备份中有选择地恢复特定数据库——原因可能是性能考量，也可能是目标机器空间不足以恢复整个集群，只需迁移部分数据库。

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

在每个测试数据库中创建表并填充数据，用于演示选择性恢复。

pg-primary **⇒** 在每个数据库中创建测试表

```bash
sudo -u postgres psql -c "create table test1_table (id int); \
       insert into test1_table (id) values (1);" test1
```

```sql
CREATE TABLE
INSERT 0 1
```

```bash
sudo -u postgres psql -c "create table test2_table (id int); \
       insert into test2_table (id) values (2);" test2
```

```sql
CREATE TABLE
INSERT 0 1
```

执行一次新备份，让 pgBackRest 感知到新建的数据库。

pg-primary **⇒** 执行备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=incr backup
```

选择性恢复的主要用途之一是节省空间。先记录 test1 当前占用的空间，以便与选择性恢复后进行对比。

pg-primary **⇒** 查看 test1 数据库占用的空间

```bash
sudo -u postgres du -sh /var/lib/pgsql/13/data/base/32768
```

```
7.8M	/var/lib/pgsql/13/data/base/32768
```

若不清楚需要恢复的数据库名称，可使用 `info` 命令配合 `--set` 选项，查看该备份集中包含的数据库列表。

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

停止集群，仅恢复 test2 数据库。内置数据库（`template0`、`template1`、`postgres`）始终会被恢复。

警告：

除非指定 `--type=immediate`，否则恢复可能会报错。原因是：达到一致性点之后，PostgreSQL 会将清零页标记为错误，即使是完整页写入也不例外。对于 PostgreSQL 13 及以上版本，可使用 `ignore_invalid_pages` 参数忽略无效页面。采用此方案时，恢复完成后务必检查日志，确认所选数据库中没有无效页面的报告。

pg-primary **⇒** 从最新备份恢复，仅包含 test2 数据库

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres pgbackrest --stanza=demo --delta \
       --db-include=test2 --type=immediate --target-action=promote restore

sudo systemctl start postgresql-13.service
```

恢复完成后，test2 数据库中将包含之前创建的表和数据。

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

test1 数据库虽然恢复成功，但无法访问。这是因为整个数据库以稀疏清零文件的形式恢复，关键文件中不含任何实际数据。PostgreSQL 可以在清零文件上应用 WAL，但数据库本身并不有效。这是有意为之——目的是防止该数据库在可能包含 WAL 回放期间写入的部分数据时被意外访问。

pg-primary **⇒** 尝试连接 test1 数据库将产生错误

```bash
sudo -u postgres psql -c "select * from test1_table;" test1
psql: error: connection to server on socket "/run/postgresql/.s.PGSQL.5432" failed: FATAL:  relation mapping file "base/32768/pg_filenode.map" contains invalid data
```

由于 test1 数据库以稀疏清零文件恢复，其占用空间仅相当于恢复期间写入的 WAL 量。备份期间生成、恢复期间应用的 WAL 量虽可能不少，但通常只是数据库总大小的一小部分——大型数据库中尤为如此，这正是此功能最有价值的场景。

因此，选择性恢复后 test1 数据库占用的磁盘空间远少于完整恢复时的用量。

pg-primary **⇒** 查看恢复后 test1 数据库占用的空间

```bash
sudo -u postgres du -sh /var/lib/pgsql/13/data/base/32768
```

```
8.0K	/var/lib/pgsql/13/data/base/32768
```

此时对无效的 test1 数据库唯一可执行的操作是 `drop database`。pgBackRest 不会自动删除它，删除操作必须在恢复完成且集群可访问后手动执行。

pg-primary **⇒** 删除 test1 数据库

```bash
sudo -u postgres psql -c "drop database test1;"
```

```sql
DROP DATABASE
```

删除无效的 test1 数据库后，只剩下 test2 和内置系统数据库。

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

[**快速开始**](#快速开始) 中的 [**恢复备份**](#恢复备份) 执行的是默认恢复，即将 WAL 一路回放至末尾。对于硬件故障，这通常是最佳选择；但对于数据损坏场景（无论是程序错误还是人为误操作），时间点恢复（PITR）往往更为合适。

PITR 允许将 WAL 从备份回放至指定的 LSN、时间、事务 ID 或恢复点。常见恢复场景中，基于时间的恢复最为实用。典型场景是恢复意外删除的表或数据——以下以恢复误删表为例，误删数据的恢复方式完全相同。

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

记录时间时务必以 PostgreSQL 的时间为准，并包含时区偏移量，以免时区转换错误导致恢复结果与预期不符。

pg-primary **⇒** 从 PostgreSQL 获取当前时间

```bash
sudo -u postgres psql -Atc "select current_timestamp"
```

```
2026-01-19 09:21:46.275227+00
```

记录时间后删除该表。实际操作中，找到表被删除的确切时间远比示例困难，可能无法获得精确时间，但通过一些取证工作通常能大致确定。

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

若选择了错误的备份，恢复到所需时间目标将会失败。为演示这一点，在 `important_table` 不存在的情况下执行一次增量备份。

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

由于 PostgreSQL 只能向前回放 WAL，无法向后回放，因此无法从该备份中恢复丢失的表。

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

更可靠的方法是让 pgBackRest 自动选择能够恢复到时间目标的备份，即在指定时间之前完成的那个备份。

注意：

当恢复类型为 `xid` 或 `name` 时，pgBackRest 无法自动选择备份，必须手动指定 `--set`。

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

pgBackRest 已将恢复设置写入 `postgresql.auto.conf`，PostgreSQL 可以直接启动。其中 `%f` 是 PostgreSQL 指定所需 WAL 段名称的占位符，`%p` 是该段的目标路径。PostgreSQL 完成恢复后，该表将重新存在，可正常查询。

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

PostgreSQL 日志中也包含有价值的信息，记录了恢复停止的时间和事务，以及最后应用的事务时间。

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

`stanza-delete` 命令用于删除仓库中与某个 stanza 关联的全部数据。

警告：

请谨慎使用此命令——它将**永久删除** pgBackRest 仓库中指定 stanza 的所有备份和归档，且无法恢复。

删除 stanza 的步骤如下：

1. 关闭与该 stanza 关联的 PostgreSQL 集群（或使用 `--force` 强制覆盖）。
2. 在将要运行 `stanza-delete` 命令的主机上执行 `stop` 命令。
3. 运行 `stanza-delete` 命令。

命令成功完成后，需手动从所有 pgBackRest 配置文件和/或环境变量中删除该 stanza 的配置。

每次只能从一个仓库中删除 stanza。若要从多个仓库中删除，需指定 `--repo` 选项，并对每个仓库分别执行一次 `stanza-delete`。

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

如 [**S3 兼容对象存储支持**](#s3-兼容对象存储支持) 所示，可以配置多个仓库。主要优势在于可以同时拥有一个用于快速恢复的本地仓库和一个用于冗余的远程仓库。

某些命令（如 [`stanza-create`](/docs/pgbackrest/command/stanza-create/) 和 [`stanza-upgrade`](/docs/pgbackrest/command/stanza-upgrade/)）会自动作用于所有已配置的仓库，而另一些命令（如 [`stanza-delete`](/docs/pgbackrest/command/stanza-delete/)）则需要通过 `--repo` 选项指定仓库。

注意：仅配置了 `repo1` 时，`--repo` 选项不是必需的，这是为了保持向后兼容。但若单个仓库配置为 `repo2`，则必须指定 `--repo`，以防止后续添加新仓库时改变命令行为。

`archive-push` 命令始终将 WAL 推送到所有已配置仓库的归档。某个仓库不可达时，WAL 仍会被推送到其他仓库。但要使此功能有效，必须启用 `archive-async=y`；否则其他仓库只能比不可达的仓库多存一个 WAL 段。另需注意，若 WAL 无法推送到任何仓库，PostgreSQL 将不会从 `pg_wal` 目录中删除它，可能导致磁盘空间耗尽。

各仓库的备份需要单独调度，这在多数情况下是合理的，因为不同仓库的备份类型和保留策略可能不同。恢复时同样必须指定仓库，通常建议优先选择延迟较低或成本较低的仓库，哪怕恢复时间更长。只有通过实际恢复测试才能确定哪个仓库效率最高。

--------

## Azure 兼容对象存储支持

pgBackRest 支持将仓库存放在 Azure 兼容的对象存储中。容器必须提前创建，pgBackRest 不会自动创建。仓库可以放在容器根目录（`/`），但通常建议放在子路径下，以便对象存储日志或其他数据也能存放在同一容器中而不产生冲突。

警告：

请勿启用"分层命名空间"，否则执行 `expire` 时会报错。

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

若要使用共享访问签名（SAS），将 `repo2-azure-key-type` 设置为 `sas`，并将 `repo2-azure-key` 设置为对应的共享访问签名令牌即可。

命令的运行方式与本地磁盘仓库完全相同。

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

由于在 Azure 中创建文件相对较慢，建议启用 [**文件打包**](#文件打包) 以提升 `backup`/`restore` 的性能。

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

pgBackRest 支持将仓库存放在 S3 兼容的对象存储中。存储桶必须提前创建，pgBackRest 不会自动创建。仓库可以放在存储桶根目录（`/`），但通常建议放在子路径下，以便对象存储日志或其他数据也能存放在同一存储桶中而不产生冲突。

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

需要将 region 和 endpoint 配置为存储桶所在的区域。此处给出的值适用于 `us-east-1` 区域。

建议创建专用角色来运行 pgBackRest，并尽可能严格地限制存储桶权限。若该角色与 AWS 实例关联，设置 `repo3-s3-key-type=auto` 后 pgBackRest 将自动获取临时凭证，无需在 `/etc/pgbackrest/pgbackrest.conf` 中显式配置密钥。

以下 Amazon S3 策略示例将存储桶和仓库路径的读写权限限制在最小必要范围内。

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

命令的运行方式与本地磁盘仓库完全相同。

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

由于在 S3 中创建文件相对较慢，建议启用 [**文件打包**](#文件打包) 以提升 `backup`/`restore` 的性能。

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

使用 SFTP 时，若 libssh2 基于 OpenSSH 编译，则 `repo4-sftp-public-key-file` 为可选项。

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

命令的运行方式与本地磁盘仓库完全相同。

pg-primary **⇒** 将 sftp-server 的指纹添加到 known_hosts（`repo4-sftp-host-key-check-type` 默认为 `strict`）

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

pgBackRest 支持将仓库存储在 GCS 兼容的对象存储中。存储桶必须提前创建，pgBackRest 不会自动创建。仓库可以放在存储桶根目录（`/`），但通常建议放在子路径下，以便对象存储日志或其他数据也能存放在同一存储桶中而不产生冲突。

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

在 GCE 中运行时，设置 `repo5-gcs-key-type=auto` 可利用实例服务账号自动完成身份验证。

命令的运行方式与本地磁盘仓库完全相同。

GCS 中的文件创建速度相对较慢，建议启用 [**文件打包**](#文件打包) 以提升 `backup`/`restore` 的性能。

--------

## 仓库目标时间

目标时间（repo target time）定义了命令读取版本化存储上仓库时所用的历史时间点。通过指定目标时间，命令可以查看仓库在某个历史时刻的状态，从而恢复因用户误操作或恶意软件导致被删除或损坏的数据。

版本化存储受 S3、GCS 和 Azure 支持，但通常默认未启用。除了启用版本控制之外，还可以考虑为 S3 启用对象锁定（object locking），为 GCS 或 Azure 启用软删除（soft delete）。

指定 `repo-target-time` 时，必须同时提供 `--repo` 选项。由于并非所有仓库类型都支持版本控制，针对单个仓库进行恢复是合理的做法。

注意：时间戳比较使用 <= 逻辑（即小于等于所提供的时间戳），且所提供时间戳的毫秒部分会被截断。

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

由于存储是版本化的，仍可查看 stanza 被删除之前某个时间点的仓库状态。确定合适的目标时间可能有些棘手，本例中可通过查找 `backup.info` 被删除的时间来确定。

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

现在可以使用目标时间运行 `info` 命令，查看 stanza 被删除之前的仓库状态。

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

若 `info` 命令显示了所需的备份，便可使用相同的目标时间进行恢复。

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

[**快速开始**](#快速开始) 中描述的配置适用于简单安装场景，但在企业级部署中，更常见的做法是使用专用仓库主机存储备份和 WAL 归档。这样可以将备份与数据库服务器分离，降低数据库主机故障的影响。建议仍使用传统备份软件对仓库主机本身进行备份。

在 PostgreSQL 主机上，`pg1-path` 必须是本地集群的数据目录路径，且不应配置 `pg1-host`。在仓库主机上配置 pgBackRest 时，必须通过 `pg-host` 选项指定主库和备库（如有）的连接信息。仓库主机是唯一需要感知多个 PostgreSQL 主机的节点。配置顺序无关紧要，`pg1-path`/`pg1-host`、`pg2-path`/`pg2-host` 可以分别对应主库或备库。

### 安装

创建一台名为 repository 的新主机，用于存储集群备份。

注意：

仓库主机上安装的 pgBackRest 版本必须与 PostgreSQL 主机上安装的版本完全一致。

创建专用的 `pgbackrest` 用户来管理仓库。仓库可以由任何用户管理，但建议不要使用 `postgres`（若存在），以避免混淆。

repository **⇒** 创建 `pgbackrest` 用户

```bash
sudo groupadd pgbackrest
sudo adduser -gpgbackrest -n pgbackrest
```

推荐通过软件包安装 pgBackRest，而非从源码编译。通过软件包安装时，本节后续步骤通常不需要手动执行，但某些软件包可能会跳过创建目录或权限设置有误。遇到这种情况，手动创建目录或更新权限即可。

RHEL 平台的 pgBackRest 软件包可在 [yum.postgresql.org](http://yum.postgresql.org) 获取。

如果所用发行版/版本没有提供软件包，可以 [**编译构建**](#编译构建) 后手动安装，步骤如下。

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

pgBackRest 可以使用 TLS 客户端证书实现主机间通信，也可以使用 SSH，请参见 [**配置免密 SSH**](/docs/pgbackrest/user-guide/#配置免密-ssh)。

pgBackRest 期望客户端/服务器证书的生成方式与 PostgreSQL 相同。有关证书生成的详细说明，请参见 PostgreSQL 文档中的 [**使用 TLS 的安全 TCP/IP 连接**](https://www.postgresql.org/docs/current/ssl-tcp.html)。

仓库主机必须配置 pg-primary 的主机/用户和数据库路径。主库将配置为 `pg1`，以便后续可以添加备库。

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

数据库主机需要配置仓库主机/用户信息。`repo1-host-user` 选项的默认值为 `pgbackrest`。若 `postgres` 用户需要在仓库主机上执行恢复，最好不要同时允许其执行备份。不过，若 `postgres` 用户与 `pgbackrest` 用户属于同一用户组，则可以直接读取仓库。

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

PostgreSQL 的归档配置请参见 [**配置归档**](#配置归档) 章节。

命令的运行方式与单主机配置相同，但 `backup` 和 `expire` 等命令需要在仓库主机上运行，而非数据库主机上。

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

在数据库主机和仓库主机上分别验证配置是否正确。关于 `check` 命令的更多信息，请参见 [**检查配置**](#检查配置)。

pg-primary **⇒** 检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo check
```

repository **⇒** 检查配置

```bash
sudo -u pgbackrest pgbackrest --stanza=demo check
```

### 执行备份

在仓库主机上运行 pgBackRest 的 `backup` 命令，对 PostgreSQL 集群执行备份。

repository **⇒** 备份 demo 集群

```bash
sudo -u pgbackrest pgbackrest --stanza=demo backup
```

```
P00   WARN: no prior backup exists, incr backup has been changed to full
```

由于仓库主机上为新仓库，因此出现增量备份自动变更为全量备份的警告。

### 恢复备份

在数据库主机上运行 `restore` 命令，对 PostgreSQL 集群执行恢复。

pg-primary **⇒** 停止 demo 集群、执行恢复并重启 PostgreSQL

```bash
sudo systemctl stop postgresql-13.service
sudo -u postgres pgbackrest --stanza=demo --delta restore
sudo systemctl start postgresql-13.service
```

--------

## 并行备份与恢复

pgBackRest 提供并行处理功能，可提升压缩和传输的性能。通过 `--process-max` 选项设置并发进程数。

对于 `backup` 命令，通常建议不超过可用 CPU 数量的 25%。备份只要定期执行即可，速度不需要很快，且备份过程应尽量不影响数据库性能。

`restore` 命令可以也应该使用所有可用的 CPU——恢复期间 PostgreSQL 已关闭，主机上通常没有其他重要工作在运行。若主机上有多个集群，设置恢复并行度时需相应考虑。

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

与单进程备份相比，多进程应能提升最后一次备份的速度。对于极小的备份，差距可能不明显，但随着数据库规模增大，节省的时间也会相应增加。

--------

## 启动与停止

若备库被提升用于测试，或测试集群从生产备份恢复，最好阻止这些集群向 pgBackRest 仓库写入数据，`stop` 命令可以实现这一点。

会写入数据且受 `stop` 约束的命令包括：`archive-push`、`backup`、`expire`、`stanza-create` 和 `stanza-upgrade`。`stanza-delete` 是例外，详见 [**删除 Stanza**](#删除-stanza) 章节。

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

指定 `--force` 选项可以终止当前正在运行的 pgBackRest 写入命令，包括异步 `archive-get`（但若 PostgreSQL 需要，它会再次启动）。若 pgBackRest 已处于停止状态，再次执行 `stop` 会产生警告。

pg-primary **⇒** 再次停止 pgBackRest 服务

```bash
sudo -u postgres pgbackrest stop
```

```
P00   WARN: stop file already exists for all stanzas
```

使用 `start` 命令恢复 pgBackRest 写入命令。停止前正在进行的写入命令不会自动重新启动，但之后允许重新运行。

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

针对单个 stanza 启动时，同样必须指定该 stanza。

pg-primary **⇒** 启动 `demo` stanza 的 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest --stanza=demo start
```

--------

## 复制

复制允许从单个主库派生出多个 PostgreSQL 集群副本（备库），用于分担读取负载，并在主库故障时提供冗余。

### 安装

创建一台名为 pg-standby 的新主机来运行备库。

推荐通过软件包安装 pgBackRest，而非从源码编译。通过软件包安装时，本节后续步骤通常不需要手动执行，但某些软件包可能会跳过创建目录或权限设置有误。遇到这种情况，手动创建目录或更新权限即可。

RHEL 平台的 pgBackRest 软件包可在 [yum.postgresql.org](http://yum.postgresql.org) 获取。

如果所用发行版/版本没有提供软件包，可以 [**编译构建**](#编译构建) 后手动安装。

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

备库上的 pgBackRest 配置与 pg-primary 非常相似，区别在于使用 `standby` 恢复类型，使集群在到达 WAL 流末尾时保持在恢复模式而不切换为主库。

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

如果集群被提升后不会成为新主库（例如用于报表或测试），请使用 `--archive-mode=off` 或在 `postgresql.conf` 中设置 `archive_mode=off` 来禁用归档。若不禁用归档，仓库中可能积累大量无用 WAL，使后续恢复更加困难。

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

启动 PostgreSQL 之前，必须启用 `hot_standby` 设置，以允许在 pg-standby 上建立只读连接，否则连接请求将被拒绝。其余配置是为备库日后晋升为主库做准备。

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

验证复制是否配置正确，最简单的方法是在 pg-primary 上创建一张表。

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

这是为什么？由于 PostgreSQL 通过从归档拉取 WAL 段来执行复制，包含这些变更的 WAL 段还未从 pg-primary 推送过来，备库自然看不到这些变更。

手动调用 `pg_switch_wal()` 可以解决这个问题，该函数会将当前 WAL 段推送到归档（并创建新 WAL 段以存放后续变更）。

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

稍等片刻，该表就会出现在 pg-standby 上。

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

流复制不依赖 WAL 归档，而是直接连接到主库，变更发生后即刻应用，主备延迟因此大幅降低。

流复制需要一个具有复制权限的数据库用户。

pg-primary **⇒** 创建复制用户

```bash
sudo -u postgres psql -c " \
       create user replicator password 'jw8s0F4' replication";
```

```sql
CREATE ROLE
```

需要更新 `pg_hba.conf` 文件，允许备库以复制用户身份连接。请将下面的 IP 地址替换为 pg-standby 的实际地址，修改后需重新加载配置。

pg-primary **⇒** 为复制用户创建 `pg_hba.conf` 条目

```bash
sudo -u postgres sh -c 'echo \
       "host    replication     replicator      172.17.0.8/32           md5" \
       >> /var/lib/pgsql/13/data/pg_hba.conf'

sudo systemctl reload postgresql-13.service
```

备库需要知道如何连接主库，因此在 pgBackRest 中配置 `primary_conninfo` 设置。

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

密码可以写在 `primary_conninfo` 中，但使用 `.pgpass` 文件更灵活、更安全。

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

`primary_conninfo` 之所以写入了 `postgresql.auto.conf`，是因为它在 `pgbackrest.conf` 中被配置为 `recovery-option`。若希望保留现有的 `postgresql.auto.conf`，可在 `restore` 时使用 `--type=preserve` 选项。

RHEL 默认将 `postgresql.conf` 存放在数据目录中，因此每次恢复都会覆盖其中的更改，`hot_standby` 设置也需要重新启用。解决办法是：将 `postgresql.conf` 存放到其他位置，或在 pg-primary 上启用 `hot_standby`（主库上该设置会被忽略）。

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

现在在 pg-primary 上创建表后，无需调用 `pg_switch_wal()`，它会很快出现在 pg-standby 上。

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

pgBackRest 支持多个 stanza，最常见的用法是多个 stanza 共用同一台仓库主机。

### 安装

创建一台名为 pg-alt 的新主机，用于运行新的主库。

推荐通过软件包安装 pgBackRest，而非从源码编译。软件包安装时，本节后续步骤通常无需手动执行，但个别软件包可能漏建某些目录或权限设置有误，此时需手动创建目录或修正权限。

RHEL 平台的 pgBackRest 软件包可在 [yum.postgresql.org](http://yum.postgresql.org) 获取。

若您的发行版没有提供现成软件包，可参考 [**编译构建**](#编译构建) 手动安装。

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

pg-alt 的 pgBackRest 配置与 pg-primary 基本相同，区别在于使用 `demo-alt` stanza，备份和归档因此存储在独立的位置。

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

需运行 `stanza-create` 命令初始化 stanza，之后建议运行 `check` 命令，确认归档和备份配置正确。

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

在仓库主机上运行 `check` 命令时，会检查所有 stanza。

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

通过 `archive-async` 选项可启用异步归档，该选项同时适用于 `archive-push` 和 `archive-get` 命令。

异步归档需要配置缓冲区路径（spool path）。两个命令都会在此存储临时数据，但工作方式各有不同，具体用法将在各节中详细说明。

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

需配置缓冲区路径并启用异步归档。异步归档通过减少远程存储的连接次数自动带来一定的性能提升，配置 `process-max` 还可通过并行化操作大幅提升吞吐量。注意不要将 `process-max` 设置过高，以免影响正常数据库操作。

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

`process-max` 通过命令专属配置节（command sections）设置，这样备份和恢复操作就不会受其影响，同时也允许为 `archive-push` 和 `archive-get` 分别设置不同的值。

为演示效果，下面通过中断流复制，强制 PostgreSQL 使用 `restore_command` 获取 WAL。

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

异步 `archive-push` 命令将 WAL 归档工作交给独立进程（或多个进程）处理，以提升吞吐量。其工作原理是"向前预读"——在 PostgreSQL 当前通过 `archive_command` 请求的 WAL 段之外，预先查找并归档其他已就绪的 WAL 段。WAL 段直接从 `pg_xlog`/`pg_wal` 目录传输到归档存储，只有 WAL 段安全入库后，`archive_command` 才返回成功。

缓冲区路径保存当前 WAL 归档的状态。写入其中的状态文件通常长度为零，占用空间极少（最多几 MB），IO 开销也很小。目录中的所有信息均可重建，因此将集群迁移到新硬件时无需保留缓冲区目录。

重要提示：

早期实现中，WAL 段在压缩和传输之前会先复制到缓冲区目录；新实现直接从 `pg_xlog` 目录复制 WAL。如果曾在 v1.12 或更早版本中使用过异步归档，请在升级前仔细阅读 v1.13 的发版说明。

可通过 `[stanza]-archive-push-async.log` 文件监控异步进程的活动。一个简单的测试方法是连续快速推送多个 WAL 段。

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

异步 `archive-get` 命令通过维护本地 WAL 队列来提升吞吐量。若队列中找不到某个 WAL 段，会从仓库获取该段及足够多的连续 WAL 段填满队列，队列最大容量由 `archive-get-queue-max` 定义。当队列容量低于一半时，会自动获取更多 WAL 进行填充。

在 WAL 生成量较大、或与仓库存储（如 S3 等对象存储）连接延迟较高的环境中，异步操作最为有益。延迟较高时，适当增大 `process-max` 也有帮助。

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

pgBackRest 支持在备库而非主库上执行备份。从备库备份需要配置 pg-standby 主机并启用 `backup-standby` 选项。若配置了多个备库，将使用第一个处于运行状态的备库。

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

备份时主库和备库都必须在线，但绝大多数文件从备库复制，从而减轻主库的负载。数据库主机可以按任意顺序配置，pgBackRest 会自动识别主备角色。

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

从此增量备份可以看出，大部分文件从 pg-standby 复制，只有少数文件来自 pg-primary。

pgBackRest 从备库创建的备份与在主库上执行的备份完全等价。其实现方式是：在 pg-primary 上启动/停止备份，从 pg-standby 复制已完成复制的文件，再从 pg-primary 补充少量剩余文件。因此主库的日志和统计信息也会包含在备份中。

--------

## 升级 PostgreSQL

将 PostgreSQL 升级到新主版本后，必须立即将所有 pgBackRest 配置中的 `pg-path` 更新为新路径，并运行 `stanza-upgrade` 命令。若主机上配置了多个仓库，每个仓库上的 stanza 都会被升级。若数据库处于离线状态，请使用 `--no-online` 选项。

以下说明并非 PostgreSQL 升级的完整指南，而是概述升级主库和备库的一般流程，重点演示重新配置 pgBackRest 所需的步骤。建议升级前先执行一次备份。

pg-primary **⇒** 停止旧集群

```bash
sudo systemctl stop postgresql-13.service
```

备库将从新升级的集群恢复，因此也需要停止旧集群。

pg-standby **⇒** 停止旧集群

```bash
sudo systemctl stop postgresql-13.service
```

初始化新集群并执行升级。

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

配置新集群的相关参数。

pg-primary:`/var/lib/pgsql/14/data/postgresql.conf` **⇒** 配置 PostgreSQL

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
log_filename = 'postgresql.log'
```

更新所有主机上的 pgBackRest 配置，使其指向新集群。

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

启动新集群前，必须先运行 `stanza-upgrade` 命令。

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

启动新集群并验证安装成功。

pg-primary **⇒** 启动新集群

```bash
sudo systemctl start postgresql-14.service
```

用 `check` 命令测试配置。

pg-primary **⇒** 检查配置

```bash
sudo systemctl status postgresql-14.service
sudo -u postgres pgbackrest --stanza=demo check
```

清理旧集群。

pg-primary **⇒** 删除旧集群

```bash
sudo rm -rf /var/lib/pgsql/13/data
```

在备库上安装新版 PostgreSQL 并准备集群目录。

pg-standby **⇒** 删除旧集群并创建新集群

```bash
sudo rm -rf /var/lib/pgsql/13/data
sudo -u postgres mkdir -p -m 700 /usr/pgsql-14/bin
```

在仓库主机上运行 `check` 命令。由于备库集群已停止，出现备库不可用的警告是正常现象。此命令说明仓库服务器已感知到备库的存在，且已为主库服务器正确配置。

repository **⇒** 检查配置

```bash
sudo -u pgbackrest pgbackrest --stanza=demo check
```

```
P00   WARN: unable to check pg2: [DbConnectError] raised from remote-0 tls protocol on 'pg-standby': unable to connect to 'dbname='postgres' port=5432': could not connect to server: No such file or directory
            	Is the server running locally and accepting
            	connections on Unix domain socket "/run/postgresql/.s.PGSQL.5432"?
```

对新集群执行全量备份，然后从备份恢复备库。若请求 `incr` 或 `diff` 类型，备份类型将自动升级为 `full`。

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

备库恢复完成后，即可重新启用从备库备份。

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

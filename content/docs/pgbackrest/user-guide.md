---
title: "用户指南（Debian/Ubuntu）"
linkTitle: "用户指南（Deb）"
weight: 20
description: "面向 Debian 和 Ubuntu 系统的 pgBackRest 安装配置与使用指南，按步骤逐一讲解。"
icon: fa-brands fa-ubuntu
module: [PGBACKREST]
category: [Tutorial]
---

> 原始页面： <https://pgbackrest.org/user-guide.html>

--------

## 简介

本用户指南适合从头到尾顺序阅读——每章内容均依赖前一章的配置基础。例如， [**恢复**](#恢复-1) 章节依赖 [**快速开始**](#快速开始) 章节中已完成的配置。pgBackRest 运行起来之后，跳章阅读也无妨，但建议初次阅读时按顺序跟随本指南。

本指南的示例基于 Debian/Ubuntu 和 PostgreSQL 16，但移植到其他 Unix 发行版和 PostgreSQL 版本并不困难。与操作系统相关的命令仅限于创建、启动、停止和删除 PostgreSQL 集群的部分；pgBackRest 命令在各 Unix 系统上完全相同，只是可执行文件路径可能有所不同。pgBackRest 致力于在各 PostgreSQL 版本间保持一致的行为，但不同版本在路径、文件名和配置项等细节上存在细微差异，这些差异可能在本指南的某些示例中有所体现。

PostgreSQL 配置信息和文档，请参阅 PostgreSQL [**手册**](http://www.postgresql.org/docs/16/static/index.html)。

本用户指南在文档方式上颇具特色：每条命令在从 XML 源构建文档时都会在虚拟机上实际执行。因此，你可以充分相信这些命令按照呈现的顺序能够正确运行。命令执行后如有相关输出，将显示在命令下方；若未附输出，则说明该输出与叙述无关或有所干扰。

所有命令均以具有 `root` 和 `postgres` 用户 sudo 权限的非特权用户身份运行。也可以直接以对应用户身份运行，无需任何修改，此时去掉 `sudo` 即可。


--------

## 核心概念

以下概念的定义与 pgBackRest、PostgreSQL 及本用户指南密切相关。


### 备份

备份是数据库集群的一致性副本，可用于从硬件故障中恢复、执行时间点恢复（PITR）或启动新的备库。

**全量备份（full backup）**：将数据库集群的全部内容复制到备份中。第一次备份始终是全量备份。全量备份可直接恢复，其一致性不依赖于任何外部文件。

**差异备份（differential backup）**：仅复制自上次全量备份以来发生变化的文件。恢复时，pgBackRest 将差异备份中的所有文件与上一次全量备份中未变化的文件合并。差异备份占用的磁盘空间少于全量备份，但恢复时差异备份和对应的全量备份必须同时有效。

**增量备份（incremental backup）**：仅复制自上次备份（可以是增量备份、差异备份或全量备份）以来发生变化的文件，因此通常比全量备份或差异备份小得多。与差异备份类似，增量备份的恢复依赖于其他备份的有效性。具体而言，恢复增量备份需要：该增量备份之前同一差异备份周期内的所有增量备份、上一次差异备份，以及上一次全量备份，全部有效。若不存在差异备份，则需要追溯至上一次全量备份的全部增量备份及全量备份本身。


### 恢复

恢复是将备份复制到目标系统并将其作为活跃数据库集群启动的过程。恢复需要备份文件以及一个或多个 WAL 段。


### 预写日志（WAL）

WAL 是 PostgreSQL 用于确保已提交事务不丢失的机制。事务按顺序写入 WAL，写入刷盘后该事务即视为已提交。此后，后台进程再将变更写入主数据库集群文件（即堆文件）。发生崩溃时，PostgreSQL 会重放 WAL 以恢复数据库一致性。

WAL 在概念上是无限的，但实际中会被切分为每个 16MB 的独立文件，称为 WAL 段。WAL 段遵循 `0000000100000A1E000000FE` 这样的命名约定，其中前 8 个十六进制数字表示时间线，后 16 位是逻辑序列号（LSN）。


### 加密

加密是将数据转换为不可识别格式的过程，只有提供正确的密码（口令）才能还原。

pgBackRest 根据用户提供的密码对仓库进行加密，防止未经授权的访问。


--------

## 升级 pgBackRest


### 从 v1 升级到 v2

从 v1 升级到 v2 相当简单。仓库格式没有变化，v1 中所有未弃用的选项均可继续使用，大多数情况下只需安装新版本即可。

但有几点需要注意：

- 已弃用的 `thread-max` 选项不再有效，请改用 `process-max`。
- 已弃用的 `archive-max-mb` 选项不再有效，已被语义不同的 `archive-push-queue-max` 选项取代。
- `backup-user` 选项的默认值已从 `backrest` 改为 `pgbackrest`。
- 自 v2.02 起，pgBackRest 配置文件的默认位置从 `/etc/pgbackrest.conf` 变更为 `/etc/pgbackrest/pgbackrest.conf`。若 `/etc/pgbackrest/pgbackrest.conf` 不存在，则尝试加载 `/etc/pgbackrest.conf`（如果存在）。

许多选项已改名以提高一致性，但 v1 的旧名称仍被接受。总体而言，`db-*` 选项已重命名为 `pg-*`，`backup-*`/`retention-*` 选项在适当情况下已重命名为 `repo-*`。

使用 v2 引入的新名称时，PostgreSQL 和仓库选项必须带索引，例如 `pg1-host`、`pg1-path`、`repo1-path`、`repo1-type` 等。


### 从 v2.x 升级到 v2.y

从 v2.x 升级到 v2.y 非常简单。仓库格式没有变化，大多数情况下只需安装新版本的二进制文件即可。如果未使用旧版本不支持的新功能，也可以回滚降级。

重要提示：

本地与远程的 pgBackRest 版本必须完全一致，因此应同步升级。版本不一致时，WAL 归档和备份将无法正常工作，并报告如下错误：`[ProtocolError] expected value '2.x' for greeting key 'version' but got '2.y'`。


--------

## 编译构建

推荐通过软件包安装 pgBackRest，而非从源码构建。有关软件包的更多信息，请参阅 [**安装**](#安装) 章节。

如需从源码构建，建议在专用构建主机上进行，而非生产环境——构建所需的许多工具不应出现在生产系统上。pgBackRest 由单个可执行文件构成，构建完成后可方便地复制到目标主机。

build **⇒** 将 pgBackRest 版本 `2.58.0` 下载到 `/build` 路径

```bash
mkdir -p /build
wget -q -O - \
       https://github.com/pgbackrest/pgbackrest/archive/release/2.58.0.tar.gz | \
       tar zx -C /build
```

build **⇒** 安装构建依赖

```bash
sudo apt-get install python3-distutils meson gcc libpq-dev libssl-dev libxml2-dev \
       pkg-config liblz4-dev libzstd-dev libbz2-dev libz-dev libyaml-dev libssh2-1-dev
```

build **⇒** 配置并编译 pgBackRest

```bash
meson setup /build/pgbackrest /build/pgbackrest-release-2.58.0
ninja -C /build/pgbackrest
```


--------

## 安装

创建一台名为 pg-primary 的新主机，用于承载演示集群并运行 pgBackRest 示例。

推荐通过软件包安装 pgBackRest。使用软件包时，本节后续步骤通常不必手动执行，但个别软件包可能遗漏某个目录的创建或权限设置有误，此时需要手动创建目录或修正权限。

Debian/Ubuntu 的 pgBackRest 软件包可在 [apt.postgresql.org](https://www.postgresql.org/download/linux/ubuntu/) 获取。

如果当前发行版没有提供软件包，可以 [**从源码构建**](#编译构建) 后手动安装，步骤如下。

pg-primary **⇒** 安装依赖项

```bash
sudo apt-get install postgresql-client libxml2 libssh2-1
```

pg-primary **⇒** 从构建主机复制 pgBackRest 二进制文件

```bash
sudo scp build:/build/pgbackrest/src/pgbackrest /usr/bin
sudo chmod 755 /usr/bin/pgbackrest
```

pgBackRest 运行需要日志目录、配置目录和配置文件。

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

pgBackRest 此时应已正确安装，建议进行验证。若有依赖项缺失，命令行运行 pgBackRest 时会报错。

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

本章介绍 pgBackRest 和 PostgreSQL 的基本配置，并演示 `backup`、`restore` 和 `info` 命令的基本用法。


### 创建演示集群

创建演示集群是可选步骤，但强烈推荐，尤其是对新用户而言——用户指南中的示例命令均引用该演示集群，且假设其运行在默认端口（5432）上。由于还有一些配置工作需要完成，集群将在后续章节中启动。

pg-primary **⇒** 创建演示集群

```bash
sudo -u postgres /usr/lib/postgresql/16/bin/initdb \
       -D /var/lib/postgresql/16/demo -k -A peer

sudo pg_createcluster 16 demo
```

```
Configuring already existing cluster (configuration: /etc/postgresql/16/demo, data: /var/lib/postgresql/16/demo, owner: 102:103)
Ver Cluster Port Status Owner    Data directory              Log file
16  demo    5432 down   postgres /var/lib/postgresql/16/demo /var/log/postgresql/postgresql-16-demo.log
```


### 配置集群 Stanza

stanza 是 pgBackRest 中标识一个 PostgreSQL 集群备份配置的逻辑名称，定义了数据库集群的位置、备份方式和归档选项等配置。大多数数据库服务器只有一个 PostgreSQL 集群，因此只有一个 stanza；备份服务器则为每个需要备份的集群各配置一个 stanza。

为 stanza 命名时，容易直接使用主集群名，但更好的做法是用能描述集群所承载业务的名称。由于 stanza 名称同时用于主库和所有副本，选择能反映集群实际用途的名称（如 `app` 或 `dw`）比使用本地集群名（如 `main` 或 `prod`）更为合适。

`demo` 准确描述了该集群的用途，因此也是一个合适的 stanza 名称。

pgBackRest 需要知道 PostgreSQL 集群数据目录的位置。该路径通常可从 PostgreSQL 直接获取，但在恢复场景中 PostgreSQL 进程不可用。备份过程中，pgBackRest 会将配置的路径与 PostgreSQL 实际运行的路径进行比对，两者必须完全一致，否则备份会报错。请确保 `pg-path` 与 PostgreSQL 报告的 `data_directory` 完全匹配。

Debian/Ubuntu 默认将集群存储在 `/var/lib/postgresql/[version]/[cluster]`，数据目录路径易于确定。

`/etc/pgbackrest/pgbackrest.conf` 文件必须对数据库所有者（通常为 `postgres`）授予读取权限。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 PostgreSQL 集群数据目录

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
```

pgBackRest 配置文件采用类 Windows INI 的格式。节（section）以方括号内的文本标识，键/值对包含在各节中。以 `#` 开头的行为注释，会被忽略。不支持引号，键和值会自动去除首尾空白。若同一节出现多次，内容将被合并。

pgBackRest 配置文件支持多种加载方式：

- `config` 和 `config-include-path` 均使用默认值：若存在则加载默认配置文件，若存在则追加默认配置包含路径中的 `*.conf` 文件。
- 指定了 `config` 选项：仅加载指定的配置文件，且该文件必须存在。
- 指定了 `config-include-path`：加载该路径中的所有 `*.conf` 文件（路径必须存在），同时加载默认配置文件（若存在）。若只想加载指定路径中的文件，可额外传入 `--no-config` 选项。
- 同时指定了 `config` 和 `config-include-path`：使用用户指定的值，加载配置文件并追加包含路径中的 `*.conf` 文件，这些文件必须存在。
- 指定了 `config-path`：此设置将覆盖配置文件默认位置的基路径和/或 `config-include-path` 的默认基路径，除非已显式设置 `config` 或 `config-include-path`。

所有配置文件会被拼接为一个整体，每个文件须各自有效。这意味着每个文件中需要为相应的键/值对声明所属节。节的顺序不影响最终结果，但存在基于节的优先级。优先级从高到低为：

- [*stanza*:*command*]
- [*stanza*]
- [global:*command*]
- [global]

注意：

`--config`、`--config-include-path` 和 `--config-path` 仅为命令行选项。

pgBackRest 也支持通过环境变量进行配置（见下方示例）；环境变量适用于 [`backup`](/docs/pgbackrest/command/backup/)、[`restore`](/docs/pgbackrest/command/restore/) 和 [`archive-push`](/docs/pgbackrest/command/archive-push/) 等命令。

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

提前准确估算所需空间并不容易。最好的做法是先执行几次备份，记录各类备份（full/incr/diff）的大小，并测量每天产生的 WAL 量，从而得出大致的空间需求——随着数据库的增长，这一需求也会随时间变化。

本演示中，仓库与 PostgreSQL 服务器存放在同一台主机上。这是最简单的配置，适合已用传统备份软件备份数据库主机的场景。

pg-primary **⇒** 创建 pgBackRest 仓库

```bash
sudo mkdir -p /var/lib/pgbackrest
sudo chmod 750 /var/lib/pgbackrest
sudo chown postgres:postgres /var/lib/pgbackrest
```

必须配置仓库路径，pgBackRest 才能找到它。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 pgBackRest 仓库路径

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
[global]
repo1-path=/var/lib/pgbackrest
```

pgBackRest 也支持配置多个仓库，详见 [**多仓库**](#多仓库) 章节。


### 配置归档

备份正在运行的 PostgreSQL 集群需要启用 WAL 归档。其中 `%p` 是 PostgreSQL 传递待归档 WAL 段路径的方式。请注意，即使没有对集群进行显式写入，备份过程中也至少会生成一个 WAL 段。

pg-primary:`/etc/postgresql/16/demo/postgresql.conf` **⇒** 配置归档设置

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
```

完成上述配置修改后，必须重启 PostgreSQL 集群方可执行备份。

pg-primary **⇒** 重启演示集群

```bash
sudo pg_ctlcluster 16 demo restart
```

如果归档单个 WAL 段预计耗时超过 60 秒（默认超时），应适当增大 pgBackRest 的 `archive-timeout` 选项。注意，该选项与 PostgreSQL 的 `archive_timeout` 不同，后者用于强制切换 WAL 段，适合长时间处于非活跃状态的数据库。关于 PostgreSQL `archive_timeout` 的详细说明，请参阅 PostgreSQL [**预写日志**](https://www.postgresql.org/docs/current/static/runtime-config-wal.html) 文档。

`archive-push` 命令支持单独配置选项。例如，可以为其设置较低的压缩级别以加速归档，而不影响备份使用的压缩配置。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `archive-push` 使用较低的压缩级别

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
[global]
repo1-path=/var/lib/pgbackrest
[global:archive-push]
compress-level=3
```

这种配置方式适用于任何命令，也可以针对特定 stanza，例如 `demo:archive-push`。


### 配置保留策略

pgBackRest 根据保留策略选项对备份执行到期清理操作。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置保留 2 个全量备份

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
[global]
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
[global:archive-push]
compress-level=3
```

有关保留策略的更多信息，请参阅 [**保留策略**](#保留策略) 章节。


### 配置仓库加密

本节将为仓库配置加密类型和密钥以演示加密功能。无论仓库类型（如 S3 或其他对象存储）本身是否支持加密，pgBackRest 的加密始终在客户端执行。

建议为密钥使用足够长的随机口令，可通过以下命令生成：`openssl rand -base64 48`。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 pgBackRest 仓库加密

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
[global]
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
[global:archive-push]
compress-level=3
```

仓库配置完成、stanza 创建并检查通过后，仓库加密设置将无法再更改。


### 创建 Stanza

需要运行 `stanza-create` 命令来初始化 stanza。建议在 `stanza-create` 之后运行 `check` 命令，验证归档和备份配置是否正确。

pg-primary **⇒** 创建 stanza 并检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info stanza-create
```

```
P00   INFO: stanza-create command begin 2.58.0: --exec-id=1060-8b7025bb --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --stanza=demo
P00   INFO: stanza-create for stanza 'demo' on repo1

P00   INFO: stanza-create command end: completed successfully
```


### 检查配置

`check` 命令用于验证 pgBackRest 和 `archive_command` 是否为指定 stanza 的归档和备份正确配置。它会检查运行该命令的主机上所有已配置的仓库和数据库，可发现配置错误——尤其是因所需 WAL 段未能到达归档而导致备份不完整的问题。该命令可在 PostgreSQL 主机或仓库主机上运行，也可在备库主机上运行，但由于备库无法执行 `pg_switch_xlog()`/`pg_switch_wal()`，在备库上仅能测试仓库配置。

注意：执行该命令时，pgBackRest 会调用 `pg_create_restore_point('pgBackRest Archive Check')` 和 `pg_switch_xlog()`/`pg_switch_wal()` 来强制 PostgreSQL 归档一个 WAL 段。

pg-primary **⇒** 检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=1069-d864650d --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --stanza=demo
P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 000000010000000000000001 successfully archived to '/var/lib/pgbackrest/archive/demo/16-1/0000000100000000/000000010000000000000001-b2bbfb2253a998ecb763348c553b8d2c8a31ca0b.gz' on repo1

P00   INFO: check command end: completed successfully
```


### 性能调优

pgBackRest 提供了许多性能选项，为保持仓库的向后兼容性，这些选项默认未启用。但对于新建仓库，推荐开启以下选项。这些选项也可用于现有仓库，但请注意，开启后旧版本 pgBackRest 将无法读取该仓库，具体的兼容性边界取决于各功能的引入版本，详见下方列表。

- `compress-type` — 控制 `backup` 和 `archive-push` 命令使用的压缩算法。默认为 `gz`（Gzip），推荐改用 `zst`（Zstandard），速度更快且压缩率与 `gz` 相当。`zst` 自 [v2.27](/docs/pgbackrest/release/#v227-release-notes) 起支持。详情请参阅 [**压缩类型**](/docs/pgbackrest/configuration/#压缩类型选项--compress-type)。
- `repo-bundle` — 备份时将小文件合并打包，节省空间并提升 `backup` 和 `restore` 速度，在 S3 等对象存储上效果尤为明显。`repo-bundle` 选项在 [v2.39](/docs/pgbackrest/release/#v239-release-notes) 中引入。详情请参阅 [**文件打包**](#文件打包)。
- `repo-block` — 执行 `diff`/`incr` 备份时，仅存储文件中发生变化的数据块，而非整个文件，从而节省空间并提升备份速度。`repo-block` 选项在 [v2.46](/docs/pgbackrest/release/#v246-release-notes) 中引入，建议至少使用 [v2.52.1](/docs/pgbackrest/release/#v2521-release-notes)。详情请参阅 [**块级增量备份**](#块级增量备份)。

还有一些性能选项因需要额外配置或默认值已足够安全（但未必最优）而默认未启用，这些选项在所有 v2 版本中均可用：

- `process-max` — 控制命令使用的进程数，默认为 1，几乎在任何场景下都不是最优值。各命令对 `process-max` 的使用方式不同，请参阅对应命令的文档。
- `archive-async` — 批量将 WAL 文件归档到仓库，大幅提升归档速度，默认未启用（需要创建缓冲区路径）。详情请参阅 [**异步归档**](#异步归档)。
- `backup-standby` — 在备库而非主库上执行备份，降低主库负载，默认未启用（需要额外配置且依赖备库的存在）。详情请参阅 [**从备库备份**](#从备库备份)。


### 执行备份

默认情况下，pgBackRest 会等待下一个定期检查点完成后再开始备份。根据 PostgreSQL 的 `checkpoint_timeout` 和 `checkpoint_segments` 设置，检查点可能需要较长时间，从而延迟备份启动。通常建议设置 `start-fast=y`，使备份立即开始——这会强制触发一次检查点，但由于备份通常每天只运行一次，额外的检查点对性能影响可以忽略不计。对于极其繁忙的集群，可以根据需要在命令行临时传入 `--start-fast`。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置备份快速启动

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
[global]
repo1-cipher-pass=zWaf6XtpjIVZC5444yXB+cgFDFl7MxGlgkZSaoPvTGirhPygu4jOKOXf9LO4vjfO
repo1-cipher-type=aes-256-cbc
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
[global:archive-push]
compress-level=3
```

使用 `backup` 命令对 PostgreSQL 集群执行备份。

pg-primary **⇒** 备份演示集群

```bash
sudo -u postgres pgbackrest --stanza=demo \
       --log-level-console=info backup
```

```
P00   INFO: backup command begin 2.58.0: --exec-id=1097-1bd2b5f6 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-full=2 --stanza=demo --start-fast

P00   WARN: no prior backup exists, incr backup has been changed to full

P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 000000010000000000000002, lsn = 0/2000028
       [filtered 3 lines of output]
P00   INFO: check archive for segment(s) 000000010000000000000002:000000010000000000000003
P00   INFO: new backup label = 20260119-092813F

P00   INFO: full backup size = 22MB, file total = 963

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=1097-1bd2b5f6 --log-level-console=info --no-log-timestamp --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-full=2 --stanza=demo
```

默认情况下，pgBackRest 会尝试执行增量备份。由于增量备份必须基于全量备份，而此时不存在全量备份，pgBackRest 自动改为执行全量备份。

可通过 `type` 选项指定备份类型为全量备份或差异备份。

pg-primary **⇒** 对演示集群执行差异备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=diff \
       --log-level-console=info backup
```

```
       [filtered 7 lines of output]
P00   INFO: check archive for segment(s) 000000010000000000000004:000000010000000000000005
P00   INFO: new backup label = 20260119-092813F_20260119-092815D

P00   INFO: diff backup size = 8.3KB, file total = 963

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=1124-89578f42 --log-level-console=info --no-log-timestamp --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-full=2 --stanza=demo
```

这次未出现警告，因为全量备份已存在。增量备份可以基于全量备份*或*差异备份，而差异备份只能基于全量备份。可通过 `--type=full` 选项执行全量备份。

在线备份期间，pgBackRest 会等待备份一致性所需的 WAL 段完成归档。等待超时由 `archive-timeout` 选项控制，默认为 60 秒。若已知归档单个 WAL 段需要更长时间，应适当增大该选项的值。


### 制定备份计划

可以使用 cron 等工具调度备份任务。

下面的示例配置了两个 cron 任务：每周日早上 6:30 执行全量备份，周一至周六早上 6:30 执行差异备份。若该 crontab 在周中首次安装，pgBackRest 会在差异任务首次执行时自动改为执行全量备份，次日再执行差异备份。

```bash
#m h   dom mon dow   command
30 06  *   *   0     pgbackrest --type=full --stanza=demo backup
30 06  *   *   1-6   pgbackrest --type=diff --stanza=demo backup
```

确定备份计划后，务必配置保留策略，以便定期清理过期备份，详见 [**保留策略**](#保留策略)。


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
        wal archive min/max (16): 000000010000000000000001/000000010000000000000005

        full backup: 20260119-092813F

            timestamp start/stop: 2026-01-19 09:28:13+00 / 2026-01-19 09:28:15+00
            wal start/stop: 000000010000000000000002 / 000000010000000000000003
            database size: 22MB, database backup size: 22MB
            repo1: backup set size: 2.9MB, backup size: 2.9MB

        diff backup: 20260119-092813F_20260119-092815D

            timestamp start/stop: 2026-01-19 09:28:15+00 / 2026-01-19 09:28:16+00
            wal start/stop: 000000010000000000000004 / 000000010000000000000005
            database size: 22MB, database backup size: 8.3KB
            repo1: backup set size: 2.9MB, backup size: 448B
            backup reference total: 1 full
```

`info` 命令可操作单个 stanza 或所有 stanza。默认为文本格式，以人类可读的摘要展示所请求 stanza 的备份信息，此格式可能随版本变化。

如需机器可读的输出，请使用 `--output=json`。JSON 输出比文本格式包含更多信息，在无 bug 的情况下格式保持稳定。

如需加快执行速度，可指定 `--detail-level=progress`，将输出限制为仅进度信息，但注意这会跳过除 stanza 可用性以外的所有检查。

输出中每个 stanza 对应一个独立区块，可通过 `--stanza` 选项限制仅显示指定 stanza。`status` 字段简要描述 stanza 的健康状态：`ok` 表示正常；若有多个仓库，`mixed` 表示 stanza 在一个或多个仓库上存在问题，此时会按仓库逐一列出详细状态；对于不属于已知错误码的仓库错误，将使用 `other` 错误码并附上完整错误信息。`wal archive min/max` 显示归档中当前存储的最小和最大 WAL，有多个仓库时跨所有仓库汇总报告（可通过 `--repo` 选项限制到特定仓库）。注意，由于归档保留策略或其他原因，WAL 序列中可能存在间隙。

若当前主机上有备份/过期或恢复操作正在运行，`status` 信息旁会出现 `backup/expire running` 和/或 `restore running` 提示。

备份按从旧到新的顺序排列。最旧的备份*始终*是全量备份（标签末尾带 `F`），最新的备份可以是全量备份、差异备份（末尾带 `D`）或增量备份（末尾带 `I`）。

`timestamp start/stop` 定义了备份的运行时间范围，`timestamp stop` 可用于确定时间点恢复所选用的备份。详见 [**时间点恢复**](#时间点恢复) 章节。

`wal start/stop` 定义了恢复时使数据库达到一致状态所需的 WAL 范围，`backup` 命令会确保该范围内的 WAL 在备份完成前已归档。

`database size` 是数据库的完整未压缩大小，`database backup size` 是本次实际备份的数据量（全量备份时两者相同）。

`repo` 标识此备份所在的仓库。`backup set size` 包含恢复该备份所需的本备份及所有引用备份的全部文件，`backup size` 则仅包含本次备份的文件（全量备份时两者相同）。若启用了压缩，仓库大小反映的是压缩后的文件大小。

`backup reference total` 汇总了恢复此备份所依赖的其他备份。使用 `--set` 选项可显示完整的引用列表。


### 恢复备份

备份可以防范多种灾难场景，最常见的是硬件故障和数据损坏。模拟数据损坏最简单的方法是删除一个关键的 PostgreSQL 集群文件。

pg-primary **⇒** 停止演示集群并删除 `pg_control` 文件

```bash
sudo pg_ctlcluster 16 demo stop
sudo -u postgres rm /var/lib/postgresql/16/demo/global/pg_control
```

缺少该关键文件时，启动集群将报错。

pg-primary **⇒** 尝试启动已损坏的演示集群

```bash
sudo pg_ctlcluster 16 demo start
```

```
Error: /usr/lib/postgresql/16/bin/pg_ctl /usr/lib/postgresql/16/bin/pg_ctl start -D /var/lib/postgresql/16/demo -l /var/log/postgresql/postgresql-16-demo.log -s -o  -c config_file="/etc/postgresql/16/demo/postgresql.conf"  exited with status 1:

postgres: could not find the database system

Expected to find it in the directory "/var/lib/postgresql/16/demo",
but could not open file "/var/lib/postgresql/16/demo/global/pg_control": No such file or directory
Examine the log output.
```

使用 `restore` 命令恢复 PostgreSQL 集群备份。执行前集群必须处于停止状态（本例中已停止），并且需要清空 PostgreSQL 数据目录中的所有文件。

pg-primary **⇒** 从演示集群中删除旧文件

```bash
sudo -u postgres find /var/lib/postgresql/16/demo -mindepth 1 -delete
```

pg-primary **⇒** 恢复演示集群并启动 PostgreSQL

```bash
sudo -u postgres pgbackrest --stanza=demo restore
sudo pg_ctlcluster 16 demo start
```

这次集群成功启动，因为恢复操作已补全缺失的 `pg_control` 文件。

有关 `restore` 命令的更多信息，请参阅 [**恢复**](#恢复-1) 章节。


--------

## 监控

监控是任何生产系统不可或缺的组成部分。市面上有许多可用的监控工具，稍加处理即可将 pgBackRest 纳入其中。

pgBackRest 支持以 JSON 格式输出仓库信息，包含每个 stanza 的完整备份列表和 WAL 归档信息。


### 在 PostgreSQL 中

PostgreSQL 的 `COPY` 命令可将 pgBackRest 信息加载到表中。以下示例将该逻辑封装为一个函数，供实时查询使用。

pg-primary **⇒** 为 PostgreSQL 加载 pgBackRest info 函数

```bash
sudo -u postgres cat \
       /var/lib/postgresql/pgbackrest/doc/example/pgsql-pgbackrest-info.sql
```

```sql
-- 在 PostgreSQL 内部监控 pgBackRest 的示例
--
-- 使用 copy 命令将 pgBackRest info 命令的输出导出为 jsonb 类型，
-- 以便 PostgreSQL 直接查询。

-- 创建 monitor schema
create schema monitor;

-- 以 JSON 格式获取 pgBackRest info
create function monitor.pgbackrest_info()
    returns jsonb AS $$
declare
    data jsonb;
begin
    -- 创建临时表以存储 JSON 数据
    create temp table temp_pgbackrest_data (data text);

    -- 直接从 pgBackRest info 命令将数据写入临时表
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
       /var/lib/postgresql/pgbackrest/doc/example/pgsql-pgbackrest-info.sql
```

现在可以使用 `monitor.pgbackrest_info()` 函数查询指定 stanza 的上次成功备份时间和已归档的 WAL。

pg-primary **⇒** 查询上次成功备份时间和归档的 WAL

```bash
sudo -u postgres cat \
       /var/lib/postgresql/pgbackrest/doc/example/pgsql-pgbackrest-query.sql
```

```sql
-- 获取每个 stanza 的最近一次成功备份时间
--
-- 依赖 monitor.pgbackrest_info 函数。
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
       /var/lib/postgresql/pgbackrest/doc/example/pgsql-pgbackrest-query.sql
```

```
  name  | last_successful_backup |    last_archived_wal
--------+------------------------+--------------------------
 "demo" | 2026-01-19 09:28:16+00 | 000000010000000000000005
(1 row)
```


### 使用 jq

jq 是一款命令行工具，可方便地从 JSON 中提取数据。

pg-primary **⇒** 安装 jq 工具

```bash
sudo apt-get install jq
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

配置了多个仓库时，pgBackRest 默认备份到最高优先级的仓库（如 `repo1`），可通过 `--repo` 选项指定目标仓库。

pgBackRest 没有内置调度器，建议通过 cron 或其他调度机制运行备份任务。

详情与示例请参阅 [**执行备份**](#执行备份)。


### 文件打包

将仓库中的文件打包在一起可以节省备份时间和仓库空间，在对象存储（如 S3）或大块大小的文件系统上尤为明显。对象存储的每个文件创建开销较高，非常小的文件与较大文件的存储成本相差无几。

文件打包功能通过 `repo-bundle` 选项启用。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-bundle`

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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

不使用文件打包时，全量备份路径下通常有 1000 多个文件；启用打包后文件总数大幅减少。另一个好处是，零长度文件不再单独存储（仅记录在清单文件（manifest）中），而普通备份中每个零长度文件都会占用独立存储条目。

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

`repo-bundle-size` 和 `repo-bundle-limit` 选项可用于调优，大多数情况下默认值即为最优。

文件打包虽然通常更高效，但也有一些不足：手动从仓库检索文件变得更加困难；对于去重存储，由于每次全量备份中文件在包内的排列方式不同，去重效果可能不理想；此外，文件包不支持断点续传，因此不应将 `repo-bundle-limit` 设置过高。


### 块级增量备份

块级增量备份仅存储文件中自上次备份以来发生变化的数据块，而非整个文件，从而节省存储空间。

块级增量备份通过 `repo-block` 选项启用，对所有备份类型均启用时效果最佳，且必须同时启用文件打包功能。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-block`

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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

用户可以为备份附加键/值形式的注解信息，该选项可多次使用以添加多个注解。

pg-primary **⇒** 执行带注解的全量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --annotation=source="demo backup" \
       --annotation=key=value --type=full backup
```

通过 `--set` 指定备份时，`info` 命令的文本输出会显示注解；JSON 格式输出中始终包含注解信息。

pg-primary **⇒** 获取演示集群的信息

```bash
sudo -u postgres pgbackrest --stanza=demo --set=20260119-092829F info
```

```
stanza: demo
    status: ok
    cipher: aes-256-cbc

    db (current)
        wal archive min/max (16): 000000020000000000000007/000000020000000000000009

        full backup: 20260119-092829F
            timestamp start/stop: 2026-01-19 09:28:29+00 / 2026-01-19 09:28:30+00
            wal start/stop: 000000020000000000000008 / 000000020000000000000009
            lsn start/stop: 0/8000028 / 0/9000050
            database size: 22MB, database backup size: 22MB
            repo1: backup size: 2.9MB
            database list: postgres (5)

            annotation(s)

                key: value
                source: demo backup
```

备份时通过 `backup` 命令添加的注解，可在事后使用 `annotate` 命令进行添加、修改或删除。

pg-primary **⇒** 修改备份注解

```bash
sudo -u postgres pgbackrest --stanza=demo --set=20260119-092829F \
       --annotation=key= --annotation=new_key=new_value annotate

sudo -u postgres pgbackrest --stanza=demo --set=20260119-092829F info
```

```
stanza: demo
    status: ok
    cipher: aes-256-cbc

    db (current)
        wal archive min/max (16): 000000020000000000000007/000000020000000000000009

        full backup: 20260119-092829F
            timestamp start/stop: 2026-01-19 09:28:29+00 / 2026-01-19 09:28:30+00
            wal start/stop: 000000020000000000000008 / 000000020000000000000009
            lsn start/stop: 0/8000028 / 0/9000050
            database size: 22MB, database backup size: 22MB
            repo1: backup size: 2.9MB
            database list: postgres (5)

            annotation(s)

                new_key: new_value
                source: demo backup
```


--------
## 保留策略

一般来说，保留尽可能多的备份可以扩大 [**时间点恢复**](#时间点恢复) 窗口，但也必须兼顾磁盘空间等实际限制。保留策略选项负责在旧备份不再需要时将其删除。

pgBackRest 根据保留策略类型（数量或时间段）对全量备份进行轮转。按数量时，过期逻辑只关注应保留多少个，而不关心备份的创建时间。差异备份按数量管理，但当依赖的全量备份过期时，差异备份也随之过期。增量备份不会被保留策略单独过期——始终随其关联的全量备份或差异备份一起过期。详情与示例请参见 [**全量备份保留策略**](#全量备份保留策略) 和 [**差异备份保留策略**](#差异备份保留策略) 章节。

归档的 WAL 默认随未过期的备份一起保留；如有特殊需求，可通过各仓库的 `retention-archive` 选项调整（不推荐）。详情与示例请参见 [**归档保留策略**](#归档保留策略) 章节。

`expire` 命令在每次备份成功后自动运行，也可手动触发。手动运行时，过期操作按各已配置仓库的保留策略执行；若指定了 `--repo` 选项，则仅对该仓库执行。还可通过 `--set` 选项将过期操作限定在特定备份集上——若未同时指定 `--repo`，则会搜索所有仓库并对匹配的备份集执行过期。注意，每次运行 `expire` 命令都会检查并执行归档保留计划。


### 全量备份保留策略

`repo1-retention-full-type` 决定 `repo1-retention-full` 的解释方式：可以是保留的全量备份数量，也可以是保留全量备份的天数。过期操作只在新备份完成后触发——若 `repo1-retention-full-type=count` 且 `repo1-retention-full=2`，则需要存储第三个全量备份时才会过期最旧的一个；若 `repo1-retention-full-type=time` 且 `repo1-retention-full=20`，则至少要有一个全量备份已经超过 20 天才会触发过期。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-retention-full`

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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

目前已配置 `repo1-retention-full=2`，但当前只有一个全量备份，因此下次执行全量备份时不会触发任何过期操作。

pg-primary **⇒** 执行全量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=full \
       --log-level-console=detail backup
```

```
       [filtered 975 lines of output]
P00   INFO: repo1: remove expired backup 20260119-092827F
P00 DETAIL: repo1: 16-1 archive retention on backup 20260119-092829F, start = 000000020000000000000008

P00   INFO: repo1: 16-1 remove archive, start = 000000020000000000000007, stop = 000000020000000000000007

P00   INFO: expire command end: completed successfully
```

归档*确实*被过期了，因为这些 WAL 段是在最旧备份之前生成的，对恢复没有意义——只有备份开始之后生成的 WAL 段才能用于该备份的恢复。

pg-primary **⇒** 执行全量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=full \
       --log-level-console=info backup
```

```
       [filtered 11 lines of output]
P00   INFO: repo1: expire full backup 20260119-092829F
P00   INFO: repo1: remove expired backup 20260119-092829F

P00   INFO: repo1: 16-1 remove archive, start = 000000020000000000000008, stop = 000000020000000000000009

P00   INFO: expire command end: completed successfully
```

全量备份 `20260119-092813F` 已被过期，归档保留策略现在以 `20260119-092831F` 为基准——该备份是当前最旧的全量备份。


### 差异备份保留策略

将 `repo1-retention-diff` 设置为需要保留的差异备份数量。由于差异备份只依赖于前一次全量备份，可以维护一个最近数天的"滚动"差异备份集合，既能快速恢复到近期某个时间点，又能降低整体空间占用。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-retention-diff`

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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

已配置 `repo1-retention-diff=1`，因此需要执行第二次差异备份时才会过期第一个。下面再添加一个增量备份，以演示增量备份的过期逻辑——本例中，增量备份的过期依赖于所属差异备份的过期。

pg-primary **⇒** 执行差异备份和增量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=diff backup
sudo -u postgres pgbackrest --stanza=demo --type=incr backup
```

现在执行一次差异备份，将过期之前的差异备份和增量备份，只保留最新的一个差异备份。

pg-primary **⇒** 执行差异备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=diff \
       --log-level-console=info backup
```

```
       [filtered 10 lines of output]
P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=1601-86e69e59 --log-level-console=info --no-log-timestamp --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-diff=1 --repo1-retention-full=2 --stanza=demo

P00   INFO: repo1: expire diff backup set 20260119-092833F_20260119-092835D, 20260119-092833F_20260119-092836I

P00   INFO: repo1: remove expired backup 20260119-092833F_20260119-092836I
P00   INFO: repo1: remove expired backup 20260119-092833F_20260119-092835D
P00   INFO: expire command end: completed successfully
```


### 归档保留策略

pgBackRest 在过期备份时会自动删除对应的归档 WAL 段（默认根据 `repo1-retention-full` 过期全量备份对应的 WAL），但有时可能需要更激进地清理归档以节省磁盘空间。注意，在差异归档保留策略中，全量备份被视为差异备份处理。

过期归档时，维持备份一致性所必需的 WAL 段永远不会被删除。但由于 PITR 只能在连续的 WAL 流上进行，在正常备份过期流程之外激进地清理归档时需格外谨慎。若要在不实际执行过期操作的情况下预览将被清理的内容，可在 `expire` 命令中传入 `--dry-run` 选项。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-retention-diff`

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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

P00   INFO: new backup label = 20260119-092833F_20260119-092839D

P00   INFO: diff backup size = 8.3KB, file total = 963
P00   INFO: backup command end: completed successfully
       [filtered 2 lines of output]
```

pg-primary **⇒** 过期归档

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=detail \
       --repo1-retention-archive-type=diff --repo1-retention-archive=1 expire
```

```
P00   INFO: expire command begin 2.58.0: --exec-id=1685-5edd5b29 --log-level-console=detail --no-log-timestamp --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo1-retention-archive=1 --repo1-retention-archive-type=diff --repo1-retention-diff=2 --repo1-retention-full=2 --stanza=demo
P00 DETAIL: repo1: 16-1 archive retention on backup 20260119-092831F, start = 00000002000000000000000A, stop = 00000002000000000000000B
P00 DETAIL: repo1: 16-1 archive retention on backup 20260119-092833F, start = 00000002000000000000000C, stop = 00000002000000000000000D

P00 DETAIL: repo1: 16-1 archive retention on backup 20260119-092833F_20260119-092837D, start = 000000020000000000000012, stop = 000000020000000000000013

P00 DETAIL: repo1: 16-1 archive retention on backup 20260119-092833F_20260119-092839D, start = 000000020000000000000016

P00   INFO: repo1: 16-1 remove archive, start = 00000002000000000000000E, stop = 000000020000000000000011
P00   INFO: repo1: 16-1 remove archive, start = 000000020000000000000014, stop = 000000020000000000000015

P00   INFO: expire command end: completed successfully
```

差异备份 `20260119-092833F_20260119-092837D` 保留了部分 WAL 段，即使这些 WAL 段无法用于更早备份的 PITR 向前回放，也必须保留以确保旧备份的一致性。`20260119-092833F_20260119-092837D` 之后、`20260119-092833F_20260119-092839D` 之前生成的 WAL 段已被删除。最新备份 `20260119-092833F_20260119-092839D` 之后生成的 WAL 段仍然保留，可用于 PITR。

由于差异归档保留策略中全量备份被视为差异备份，若以相同设置执行一次全量备份，则只保留该全量备份对应的归档用于 PITR。


--------

## 恢复

`restore` 命令默认从第一个存在备份的仓库中自动选取最新备份（参见 [**快速开始 - 恢复备份**](#恢复备份)）。检查仓库的顺序由 `pgbackrest.conf` 决定（如 repo1 先于 repo2 被检查）。若要从特定仓库选取备份，可传入 `--repo` 选项（如 `--repo=1`）；若需选取非最新的备份，可传入 `--set` 选项。

当 PITR 类型为 `--type=time` 或 `--type=lsn` 时，必须通过 `--target` 选项指定目标时间或 lsn。若未通过 `--set` 指定备份，pgBackRest 会按顺序检查各已配置仓库，寻找包含所请求时间或 lsn 的备份。若未找到匹配备份，`--type=time` 会使用第一个有备份的仓库中的最新备份，而 `--type=lsn` 则不会选取任何备份。对于其他 PITR 类型（如 `xid`），若目标在最新备份之前，则必须提供 `--set` 选项。详情与示例请参见 [**时间点恢复**](#时间点恢复)。

按照 PostgreSQL 的建议，复制槽不包含在备份中。详情请参阅 PostgreSQL 文档的 [**备份数据目录**](https://www.postgresql.org/docs/current/continuous-archiving.html#BACKUP-LOWLEVEL-BASE-BACKUP-DATA) 章节。

以下各节介绍 `restore` 命令的更多功能。


### 文件所有权

以非 root 用户运行 `restore`（典型场景）时，所有恢复的文件都将归执行 pgBackRest 的用户/组所有。若现有文件不属于该用户/组，且无法更新所有权，则会报错——此时需要由特权用户先修正文件所有权，再重试恢复。

以 `root` 用户运行 `restore` 时，pgBackRest 会尝试按照备份清单文件（manifest）中记录的所有权来恢复文件归属。清单中只存储用户/组的**名称**，因此恢复主机上必须存在同名的用户/组。若本地找不到对应名称，则使用 PostgreSQL 数据目录的用户/组；若数据目录的用户/组也无法映射到名称，则最终回退为 `root`。


### Delta 选项

[**快速开始**](#快速开始) 中的 [**恢复备份**](#恢复备份) 章节要求在执行 `restore` 前先清空数据库集群目录。`delta` 选项允许 pgBackRest 自动判断哪些文件可以保留、哪些需要从备份中恢复——同时*删除*不在备份清单中的文件，从而清除差异变更。该功能通过计算集群目录中每个文件的 [SHA-1](https://en.wikipedia.org/wiki/SHA-1) 哈希来实现，若哈希与备份中存储的不匹配，则恢复该文件。与 `process-max` 选项结合使用时效率极高。恢复期间 PostgreSQL 服务器已关闭，因此可以使用比备份时更多的并行进程。

pg-primary **⇒** 停止 demo 集群，执行 delta 恢复

```bash
sudo pg_ctlcluster 16 demo stop
sudo -u postgres pgbackrest --stanza=demo --delta \
       --log-level-console=detail restore
```

```
       [filtered 2 lines of output]
P00 DETAIL: check '/var/lib/postgresql/16/demo' exists
P00 DETAIL: remove 'global/pg_control' so cluster will not start if restore does not complete

P00   INFO: remove invalid files/links/paths from '/var/lib/postgresql/16/demo'

P00 DETAIL: remove invalid file '/var/lib/postgresql/16/demo/backup_label.old'
P00 DETAIL: remove invalid file '/var/lib/postgresql/16/demo/base/1/pg_internal.init'
       [filtered 769 lines of output]
P01 DETAIL: restore file /var/lib/postgresql/16/demo/base/1/113 - exists and matches backup (bundle 20260119-092833F/1/2736168, 8KB, 88.04%) checksum 9bbd4f25b106d88a2c938f5c0d57c390e7ca9d63
P01 DETAIL: restore file /var/lib/postgresql/16/demo/base/1/112 - exists and matches backup (bundle 20260119-092833F/1/2736256, 8KB, 88.08%) checksum 482d3ba07134400f1f78d634db79caf025cbd7a5

P01 DETAIL: restore file /var/lib/postgresql/16/demo/PG_VERSION - exists and matches backup (bundle 20260119-092833F/1/2736344, 3B, 88.08%) checksum 3596ea087bfdaf52380eae441077572ed289d657

P01 DETAIL: restore file /var/lib/postgresql/16/demo/base/5/2608_fsm - exists and matches backup (bundle 20260119-092833F/1/2736368, 24KB, 88.18%) checksum cd30d4d0be58b99bf5929fb2c3afc2550f710741
P01 DETAIL: restore file /var/lib/postgresql/16/demo/postgresql.auto.conf - exists and matches backup (bundle 20260119-092833F/1/2736608, 229B, 88.18%) checksum abe90322c61a48f660b6b471e0bc12fc9aa21780
       [filtered 232 lines of output]
```

pg-primary **⇒** 重启 PostgreSQL

```bash
sudo pg_ctlcluster 16 demo start
```


### 选择性数据库恢复

某些情况下，可能只需要从集群备份中恢复特定数据库——出于性能考虑，或是将选定数据库迁移到磁盘空间不足以恢复整个集群的机器上。

为演示此功能，先创建两个数据库：test1 和 test2。

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

向每个测试数据库填充表和数据，以便演示选择性恢复的效果。

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

使用选择性恢复的主要原因之一是节省空间。先记录 test1 数据库当前的磁盘占用，以便与选择性恢复后进行对比。

pg-primary **⇒** 查看 test1 数据库占用的空间

```bash
sudo -u postgres du -sh /var/lib/postgresql/16/demo/base/32768
```

```
7.4M	/var/lib/postgresql/16/demo/base/32768
```

若不清楚要恢复的数据库名称，可使用 `info` 命令的 `--set` 选项查看该备份集包含的数据库列表。

pg-primary **⇒** 查看备份的数据库列表

```bash
sudo -u postgres pgbackrest --stanza=demo \
       --set=20260119-092833F_20260119-092846I info
```

```
       [filtered 12 lines of output]
            repo1: backup size: 2MB
            backup reference list: 20260119-092833F, 20260119-092833F_20260119-092839D

            database list: postgres (5), test1 (32768), test2 (32769)
```

停止集群，仅恢复 test2 数据库。内置数据库（`template0`、`template1` 和 `postgres`）始终会被恢复。

警告：

除非指定 `--type=immediate`，否则恢复可能会报错。原因是在达到一致性点之后，PostgreSQL 会将清零页标记为错误，即使是完整页写入也不例外。对于 PostgreSQL 13 及以上版本，可通过 `ignore_invalid_pages` 参数忽略无效页面。此时恢复完成后务必检查日志，确认所选数据库中没有无效页面的报告。

pg-primary **⇒** 从最新备份恢复，仅包含 test2 数据库

```bash
sudo pg_ctlcluster 16 demo stop
sudo -u postgres pgbackrest --stanza=demo --delta \
       --db-include=test2 --type=immediate --target-action=promote restore

sudo pg_ctlcluster 16 demo start
```

恢复完成后，test2 数据库将包含之前创建的所有表和数据，可正常访问。

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

test1 数据库虽然恢复成功，但无法访问。这是因为该数据库以稀疏清零文件的形式恢复——PostgreSQL 可以在清零文件上成功应用 WAL，但整个数据库并不有效，关键文件中不含任何实际数据。这是有意为之的设计，目的是防止在数据库可能包含 WAL 回放期间写入的部分数据时被意外访问。

pg-primary **⇒** 尝试连接 test1 数据库将产生错误

```bash
sudo -u postgres psql -c "select * from test1_table;" test1
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  relation mapping file "base/32768/pg_filenode.map" contains invalid data
```

由于 test1 以稀疏清零文件恢复，其占用空间仅相当于恢复期间写入的 WAL 量。备份期间生成并在恢复期间应用的 WAL 可能相当可观，但通常只是数据库总大小的一小部分——对于大型数据库而言尤为明显，这正是选择性恢复最有价值的场景。

可以看到，选择性恢复后 test1 的磁盘占用远小于完整恢复时的大小。

pg-primary **⇒** 查看恢复后 test1 数据库占用的空间

```bash
sudo -u postgres du -sh /var/lib/postgresql/16/demo/base/32768
```

```
8.0K	/var/lib/postgresql/16/demo/base/32768
```

此时对无效的 test1 数据库唯一可执行的操作是 `drop database`。pgBackRest 不会自动删除该数据库，因为这一操作必须在恢复完成、集群可访问之后才能进行。

pg-primary **⇒** 删除 test1 数据库

```bash
sudo -u postgres psql -c "drop database test1;"
```

```sql
DROP DATABASE
```

删除无效的 test1 后，只剩下 test2 和内置数据库。

pg-primary **⇒** 列出剩余数据库

```bash
sudo -u postgres psql -c "select oid, datname from pg_database order by oid;"
```

```
  oid  |  datname
-------+-----------
     1 | template1
     4 | template0
     5 | postgres

 32769 | test2

(4 rows)
```


--------

## 时间点恢复

[**快速开始**](#快速开始) 中的 [**恢复备份**](#恢复备份) 执行的是默认恢复，即将 WAL 一路回放至末尾。对于硬件故障，这通常是最佳选择；但对于数据损坏场景（无论是机器原因还是人为误操作），PITR 往往更为合适。

PITR 允许将 WAL 回放至指定的 lsn、时间戳、事务 ID 或恢复点。在常见恢复场景中，基于时间的恢复最为实用。典型场景是恢复意外删除的表或数据——下面以恢复被删除的表为例进行演示，被删除的数据可以用完全相同的方式恢复。

pg-primary **⇒** 创建一张存有重要数据的表

```bash
sudo -u postgres psql -c "begin; \
       create table important_table (message text); \
       insert into important_table values ('Important Data'); \
       commit; \
       select * from important_table;"
```

```
       [filtered 4 lines of output]
    message
----------------

 Important Data

(1 row)
```

记录时间时应以 PostgreSQL 返回的时间为准，且必须包含时区偏移量。这样可以避免时区转换导致意外的恢复结果。

pg-primary **⇒** 从 PostgreSQL 获取当前时间

```bash
sudo -u postgres psql -Atc "select current_timestamp"
```

```
2026-01-19 09:28:56.893848+00
```

记录时间后，删除该表。实际场景中，找到表被删除的确切时间远比此示例困难——可能无法精确定位，但通过一些排查工作通常能接近实际时间。

pg-primary **⇒** 删除重要表

```bash
sudo -u postgres psql -c "begin; \
       drop table important_table; \
       commit; \
       select * from important_table;"
```

```sql
BEGIN
DROP TABLE
```

```
COMMITERROR:  relation "important_table" does not exist

LINE 1: ...le important_table;     commit;     select * from important_...
                                                             ^
```

若选择了错误的备份进行恢复，则无法恢复到所需的时间目标。为演示这一点，在 `important_table` 不存在的情况下执行一次新的增量备份。

pg-primary **⇒** 执行增量备份

```bash
sudo -u postgres pgbackrest --stanza=demo --type=incr backup
sudo -u postgres pgbackrest info
```

```
       [filtered 38 lines of output]
            backup reference total: 1 full, 1 diff

        incr backup: 20260119-092833F_20260119-092858I

            timestamp start/stop: 2026-01-19 09:28:58+00 / 2026-01-19 09:28:59+00
            wal start/stop: 00000004000000000000001A / 00000004000000000000001A
       [filtered 2 lines of output]
```

由于 PostgreSQL 只能向前回放 WAL，无法向后回放，因此无法从这个备份中恢复已删除的表。

pg-primary **⇒** 尝试从错误的备份中恢复

```bash
sudo pg_ctlcluster 16 demo stop
sudo -u postgres pgbackrest --stanza=demo --delta \
       --set=20260119-092833F_20260119-092858I --target-timeline=current \
       --type=time "--target=2026-01-19 09:28:56.893848+00" --target-action=promote restore

sudo pg_ctlcluster 16 demo start
```

```
       [filtered 13 lines of output]
LOG:  database system is ready to accept read-only connections
LOG:  redo done at 0/1A000100 system usage: CPU: user: 0.00 s, system: 0.00 s, elapsed: 0.02 s

FATAL:  recovery ended before configured recovery target was reached

LOG:  startup process (PID 2087) exited with exit code 1
LOG:  terminating any other active server processes
       [filtered 3 lines of output]
```

一种可靠的方法是让 pgBackRest 自动选择能够恢复到目标时间的备份，即在指定时间之前完成的备份。

注意：

当恢复类型为 `xid` 或 `name` 时，pgBackRest 无法自动选择备份，必须手动指定。

pg-primary **⇒** 将 demo 集群恢复至 `2026-01-19 09:28:56.893848+00`

```bash
sudo -u postgres pgbackrest --stanza=demo --delta \
       --type=time "--target=2026-01-19 09:28:56.893848+00" \
       --target-action=promote restore

sudo -u postgres cat /var/lib/postgresql/16/demo/postgresql.auto.conf
```

```
       [filtered 9 lines of output]
# Recovery settings generated by pgBackRest restore on 2026-01-19 09:29:01
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
```

```ini
recovery_target_time = '2026-01-19 09:28:56.893848+00'
recovery_target_action = 'promote'
```

pgBackRest 已将恢复配置写入 `postgresql.auto.conf`，PostgreSQL 可以直接启动恢复。其中 `%f` 是 PostgreSQL 传递所需 WAL 段名称的方式，`%p` 是该段的目标路径。恢复完成后，被删除的表将重新存在，可以正常查询。

pg-primary **⇒** 启动 PostgreSQL 并验证重要表是否存在

```bash
sudo pg_ctlcluster 16 demo start
sudo -u postgres psql -c "select * from important_table"
```

```
    message
----------------

 Important Data

(1 row)
```

PostgreSQL 日志中也包含有价值的信息，记录了恢复停止的时间和事务，以及最后一个被应用事务的时间。

pg-primary **⇒** 查看 PostgreSQL 日志输出

```bash
sudo -u postgres cat /var/log/postgresql/postgresql-16-demo.log
```

```
       [filtered 4 lines of output]
LOG:  database system was interrupted; last known up at 2026-01-19 09:28:46 UTC
LOG:  restored log file "00000004.history" from archive

LOG:  starting point-in-time recovery to 2026-01-19 09:28:56.893848+00

LOG:  starting backup recovery with redo LSN 0/19000028, checkpoint LSN 0/19000060, on timeline ID 3
LOG:  restored log file "00000004.history" from archive
       [filtered 5 lines of output]
LOG:  database system is ready to accept read-only connections
LOG:  restored log file "00000004000000000000001A" from archive

LOG:  recovery stopping before commit of transaction 740, time 2026-01-19 09:28:58.178129+00

LOG:  redo done at 0/19026050 system usage: CPU: user: 0.00 s, system: 0.01 s, elapsed: 0.08 s

LOG:  last completed transaction was at log time 2026-01-19 09:28:55.619384+00

LOG:  restored log file "000000040000000000000019" from archive
LOG:  selected new timeline ID: 5
       [filtered 5 lines of output]
```


--------

## 删除 Stanza

`stanza-delete` 命令用于删除仓库中与某个 stanza 关联的所有数据。

警告：

请谨慎使用此命令——它将永久删除 pgBackRest 仓库中指定 stanza 的所有备份和归档。

删除 stanza 的步骤如下：

- 关闭与该 stanza 关联的 PostgreSQL 集群（或使用 `--force` 强制跳过此检查）。
- 在将要执行 `stanza-delete` 的主机上先运行 `stop` 命令。
- 运行 `stanza-delete` 命令。

命令成功完成后，用户需自行从所有 pgBackRest 配置文件和/或环境变量中删除该 stanza 的相关配置。

每次只能从一个仓库中删除 stanza。若要从多个仓库中删除，需指定 `--repo` 选项，对每个仓库分别执行 `stanza-delete`。

pg-primary **⇒** 停止待删除的 PostgreSQL 集群

```bash
sudo pg_ctlcluster 16 demo stop
```

pg-primary **⇒** 停止该 stanza 的 pgBackRest

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info stop
```

```
P00   INFO: stop command begin 2.58.0: --exec-id=2218-8ca4f1b4 --log-level-console=info --no-log-timestamp --stanza=demo

P00   INFO: stop command end: completed successfully
```

pg-primary **⇒** 从一个仓库中删除 stanza

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=1 \
       --log-level-console=info stanza-delete
```

```
P00   INFO: stanza-delete command begin 2.58.0: --exec-id=2226-48f6922d --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo=1 --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --stanza=demo

P00   INFO: stanza-delete command end: completed successfully
```


--------

## 多仓库

如 [**S3 兼容对象存储支持**](#s3-兼容对象存储支持) 所示，pgBackRest 支持配置多个仓库。这样做的潜在优势在于：可以同时拥有一个用于快速恢复的本地仓库和一个用于冗余的远程仓库。

某些命令（如 [`stanza-create`](/docs/pgbackrest/command/stanza-create/) 和 [`stanza-upgrade`](/docs/pgbackrest/command/stanza-upgrade/)）会自动作用于所有已配置的仓库，而另一些命令（如 [`stanza-delete`](/docs/pgbackrest/command/stanza-delete/)）则需要通过 `--repo` 选项指定仓库。

注意，当仅配置了 `repo1` 时，`--repo` 选项不是必需的——这是为了保持向后兼容。但若单个仓库被配置为 `repo2` 等非默认索引，则必须指定 `--repo`，以防后续新增仓库时命令行为发生变化。

`archive-push` 命令始终将 WAL 推送到所有已配置仓库的归档。当某个仓库不可达时，WAL 仍会被推送到其他可达的仓库。但要使此功能有效运作，必须启用 `archive-async=y`；否则，其他仓库相比不可达的仓库也只能多归档一个 WAL 段。此外，若 WAL 无法推送到任何仓库，PostgreSQL 不会将其从 `pg_wal` 目录中删除，可能导致该卷空间耗尽。

备份需要为每个仓库单独调度，这在很多情况下是合理的，因为不同仓库可能采用不同的备份类型和保留策略。同样，恢复时也必须指定仓库。通常建议优先选择延迟低/成本低的仓库进行恢复，即使这意味着恢复时间较长——具体哪个仓库效率最高，只有通过实际恢复测试才能确定。


--------

## Azure 兼容对象存储支持

pgBackRest 支持将仓库存放在 Azure 兼容的对象存储中。存储仓库的容器必须提前创建——pgBackRest 不会自动创建。仓库可以放置在容器根目录（`/`），但通常建议放在子路径下，以便对象存储日志或其他数据也能存储在同一容器中而不产生冲突。

警告：

请勿启用"分层命名空间"，否则执行 `expire` 时会报错。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 Azure

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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

将 `repo2-azure-key-type` 设置为 `sas`、将 `repo2-azure-key` 设置为共享访问签名令牌，即可使用共享访问签名（SAS）认证。

命令的运行方式与仓库存储在本地磁盘上完全相同。

pg-primary **⇒** 创建 stanza

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info stanza-create
```

```
P00   INFO: stanza-create command begin 2.58.0: --exec-id=2308-b4d7b69d --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo2-type=azure --stanza=demo
P00   INFO: stanza-create for stanza 'demo' on repo1
P00   INFO: stanza-create for stanza 'demo' on repo2

P00   INFO: stanza-create command end: completed successfully
```

由于在 Azure 中创建文件相对较慢，启用 [**文件打包**](#文件打包) 可以提升 `backup`/`restore` 的性能。

pg-primary **⇒** 备份 demo 集群

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=2 \
       --log-level-console=info backup
```

```
P00   INFO: backup command begin 2.58.0: --exec-id=2317-4e42a3a2 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo=2 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-block --repo1-bundle --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo2-type=azure --stanza=demo --start-fast

P00   WARN: no prior backup exists, incr backup has been changed to full

P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 00000005000000000000001B, lsn = 0/1B000028
       [filtered 3 lines of output]
P00   INFO: check archive for segment(s) 00000005000000000000001B:00000005000000000000001B
P00   INFO: new backup label = 20260119-092914F

P00   INFO: full backup size = 29.2MB, file total = 1265

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=2317-4e42a3a2 --log-level-console=info --no-log-timestamp --repo=2 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo2-type=azure --stanza=demo
```


--------

## S3 兼容对象存储支持

pgBackRest 支持将仓库存放在 S3 兼容的对象存储中。存储仓库的存储桶必须提前创建——pgBackRest 不会自动创建。仓库可以放置在存储桶根目录（`/`），但通常建议放在子路径下，以便对象存储日志或其他数据也能存储在同一存储桶中而不产生冲突。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 S3

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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

`region` 和 `endpoint` 需配置为存储桶所在的位置，此处给出的值适用于 `us-east-1` 区域。

建议创建专用角色来运行 pgBackRest，并尽可能收紧存储桶权限。若该角色与 AWS 实例关联，设置 `repo3-s3-key-type=auto` 后 pgBackRest 将自动获取临时凭证，无需在 `/etc/pgbackrest/pgbackrest.conf` 中显式配置密钥。

以下 Amazon S3 策略示例将存储桶和仓库路径的读写权限限制在最小范围。

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

由于在 S3 中创建文件相对较慢，启用 [**文件打包**](#文件打包) 可以提升 `backup`/`restore` 的性能。

pg-primary **⇒** 备份 demo 集群

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=3 \
       --log-level-console=info backup
```

```
P00   INFO: backup command begin 2.58.0: --exec-id=2369-53f55626 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo=3 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-block --repo1-bundle --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo3-retention-full=4 --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo2-type=azure --repo3-type=s3 --stanza=demo --start-fast

P00   WARN: no prior backup exists, incr backup has been changed to full

P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 00000005000000000000001C, lsn = 0/1C000028
       [filtered 3 lines of output]
P00   INFO: check archive for segment(s) 00000005000000000000001C:00000005000000000000001D
P00   INFO: new backup label = 20260119-092920F

P00   INFO: full backup size = 29.2MB, file total = 1265

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=2369-53f55626 --log-level-console=info --no-log-timestamp --repo=3 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo3-retention-full=4 --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo2-type=azure --repo3-type=s3 --stanza=demo
```


--------
## SFTP 支持

pgBackRest 支持将仓库存储在 SFTP 主机上。SFTP 文件传输相对较慢，建议增大 `process-max` 以并行化文件传输，从而提升命令性能。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 SFTP

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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
repo4-sftp-private-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp
repo4-sftp-public-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp.pub
repo4-type=sftp
start-fast=y
[global:archive-push]
compress-level=3
```

使用 SFTP 时，若 libssh2 基于 OpenSSH 编译，则 `repo4-sftp-public-key-file` 为可选项。

pg-primary **⇒** 为 SFTP 备份生成 SSH 密钥对

```bash
sudo -u postgres mkdir -m 750 -p /var/lib/postgresql/.ssh
sudo -u postgres ssh-keygen -f /var/lib/postgresql/.ssh/id_rsa_sftp \
       -t rsa -b 4096 -N "" -m PEM
```

sftp-server **⇒** 将 pg-primary 的 SFTP 备份公钥复制到 sftp-server

```bash
sudo -u pgbackrest mkdir -m 750 -p /home/pgbackrest/.ssh

(sudo ssh root@pg-primary cat /var/lib/postgresql/.ssh/id_rsa_sftp.pub) | \
       sudo -u pgbackrest tee -a /home/pgbackrest/.ssh/authorized_keys
```

命令的运行方式与仓库存储在本地磁盘上时完全相同。

pg-primary **⇒** 将 sftp-server 的指纹添加到 known_hosts 文件（`repo4-sftp-host-key-check-type` 默认为 "strict"）

```bash
ssh-keyscan -H sftp-server >> /var/lib/postgresql/.ssh/known_hosts 2>/dev/null
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
P00   INFO: backup command begin 2.58.0: --exec-id=2456-cb9d7447 --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --process-max=4 --repo=4 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-block --repo1-bundle --repo4-bundle --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo4-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo3-retention-full=4 --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo4-sftp-host=sftp-server --repo4-sftp-host-key-hash-type=sha1 --repo4-sftp-host-user=pgbackrest --repo4-sftp-private-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp --repo4-sftp-public-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp.pub --repo2-type=azure --repo3-type=s3 --repo4-type=sftp --stanza=demo --start-fast
P00   WARN: option 'repo4-retention-full' is not set for 'repo4-retention-full-type=count', the repository may run out of space
            HINT: to retain full backups indefinitely (without warning), set option 'repo4-retention-full' to the maximum.

P00   WARN: no prior backup exists, incr backup has been changed to full

P00   INFO: execute backup start: backup begins after the requested immediate checkpoint completes
P00   INFO: backup start archive = 00000005000000000000001E, lsn = 0/1E000028
       [filtered 3 lines of output]
P00   INFO: check archive for segment(s) 00000005000000000000001E:00000005000000000000001F
P00   INFO: new backup label = 20260119-092928F

P00   INFO: full backup size = 29.2MB, file total = 1265

P00   INFO: backup command end: completed successfully
P00   INFO: expire command begin 2.58.0: --exec-id=2456-cb9d7447 --log-level-console=info --no-log-timestamp --repo=4 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo4-path=/demo-repo --repo1-retention-diff=2 --repo1-retention-full=2 --repo2-retention-full=4 --repo3-retention-full=4 --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo4-sftp-host=sftp-server --repo4-sftp-host-key-hash-type=sha1 --repo4-sftp-host-user=pgbackrest --repo4-sftp-private-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp --repo4-sftp-public-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp.pub --repo2-type=azure --repo3-type=s3 --repo4-type=sftp --stanza=demo
P00   INFO: expire command end: completed successfully
```


--------

## GCS 兼容对象存储支持

pgBackRest 支持将仓库存储在 GCS 兼容的对象存储中。存储仓库的存储桶必须提前创建——pgBackRest 不会自动创建。仓库可以存放在存储桶根目录（`/`），但通常建议放在子路径下，以便对象存储日志或其他数据也能存储在同一存储桶中而不产生冲突。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 GCS

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
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
repo4-sftp-private-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp
repo4-sftp-public-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp.pub
repo4-type=sftp
repo5-gcs-bucket=demo-bucket
repo5-gcs-key=/etc/pgbackrest/gcs-key.json
repo5-path=/demo-repo
repo5-type=gcs
start-fast=y
[global:archive-push]
compress-level=3
```

在 GCE 中运行时，设置 `repo5-gcs-key-type=auto` 可使用实例服务账号自动完成身份验证，无需手动配置密钥文件。

命令的运行方式与仓库存储在本地磁盘上时完全相同。

GCS 中文件创建速度相对较慢，启用 [**文件打包**](#文件打包) 可以提升 `backup`/`restore` 的性能。


--------

## 仓库目标时间

目标时间定义了命令读取版本化存储上仓库时所使用的时间点，允许以历史某一时刻的状态读取仓库，以便恢复因用户误操作或恶意软件而被删除或损坏的数据。

版本化存储受 S3、GCS 和 Azure 支持，但通常默认未启用。除了启用版本控制之外，还可以考虑为 S3 启用对象锁定（object locking），为 GCS 或 Azure 启用软删除（soft delete）。

指定 `--repo-target-time` 选项时，必须同时提供 `--repo` 选项。由于并非所有仓库类型都支持版本控制，针对单个仓库进行恢复是合理的做法。

注意，时间戳的比较采用 `<=` 关系，且所提供时间戳中的毫秒部分会被截断。

为演示此功能，先删除 S3 仓库中 `demo` stanza 的数据。

pg-primary **⇒** 删除 S3 仓库中的 stanza

```bash
sudo pg_ctlcluster 16 demo stop
sudo -u postgres pgbackrest --stanza=demo stop
sudo -u postgres pgbackrest --stanza=demo --repo=3 stanza-delete
```

stanza 删除后，`info` 命令会显示仓库处于错误状态。

pg-primary **⇒** info 命令报错

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=3 info
```

```
stanza: demo

    status: error (missing stanza data)

    cipher: none
```

由于存储是版本化的，可以查看 stanza 被删除之前某个时间点的仓库状态。确定合适的目标时间可能并不容易，但在本例中，可以通过检查 `backup.info` 被删除的时间来确定。

s3-server **⇒** 使用 `mc` 列出存储桶中 `backup.info` 的版本信息

```bash
mc ls --versions s3/demo-bucket/demo-repo/backup/demo/backup.info
```

```
[2026-01-19 09:29:33 UTC]     0B STANDARD e60f13be-eb40-4101-a5f4-a733ec515b72 v3 DEL backup.info
[2026-01-19 09:29:25 UTC] 1.0KiB STANDARD 6c12779b-6620-4c0d-b185-9d4a73fa76e3 v2 PUT backup.info
[2026-01-19 09:29:20 UTC]   372B STANDARD cd7d190f-8734-4fd7-a188-cfab6ed47edc v1 PUT backup.info

[2026-01-19 09:29:33 UTC]     0B STANDARD 90efc3d6-9b35-424a-bc43-63ec11104bba v3 DEL backup.info.copy
[2026-01-19 09:29:25 UTC] 1.0KiB STANDARD a1929d2f-d190-4b23-b528-234df9f367cc v2 PUT backup.info.copy
```

现在可以使用目标时间运行 `info` 命令，查看仓库被删除之前的状态。

pg-primary **⇒** 带目标时间的 info 命令

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=3 \
       --repo-target-time="2026-01-19 09:29:25+00" info
```

```
       [filtered 5 lines of output]
        wal archive min/max (16): 00000005000000000000001C/00000005000000000000001D

        full backup: 20260119-092920F

            timestamp start/stop: 2026-01-19 09:29:20+00 / 2026-01-19 09:29:25+00
            wal start/stop: 00000005000000000000001C / 00000005000000000000001D
            repo3: backup set size: 3.9MB, backup size: 3.9MB
```

若 `info` 命令显示了所需的备份，即可使用相同的目标时间进行恢复。

pg-primary **⇒** 带目标时间的 restore 命令

```bash
sudo -u postgres pgbackrest --stanza=demo --repo=3 --delta \
       --repo-target-time="2026-01-19 09:29:25+00" --log-level-console=info restore
```

```
P00   INFO: restore command begin 2.58.0: --delta --exec-id=2539-eda692fe --log-level-console=info --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --process-max=4 --repo=3 --repo2-azure-account= --repo2-azure-container=demo-container --repo2-azure-key= --repo1-cipher-pass= --repo1-cipher-type=aes-256-cbc --repo5-gcs-bucket=demo-bucket --repo5-gcs-key= --repo1-path=/var/lib/pgbackrest --repo2-path=/demo-repo --repo3-path=/demo-repo --repo4-path=/demo-repo --repo5-path=/demo-repo --repo3-s3-bucket=demo-bucket --repo3-s3-endpoint=s3.us-east-1.amazonaws.com --repo3-s3-key= --repo3-s3-key-secret= --repo3-s3-region=us-east-1 --repo4-sftp-host=sftp-server --repo4-sftp-host-key-hash-type=sha1 --repo4-sftp-host-user=pgbackrest --repo4-sftp-private-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp --repo4-sftp-public-key-file=/var/lib/postgresql/.ssh/id_rsa_sftp.pub --repo-target-time="2026-01-19 09:29:25+00" --repo2-type=azure --repo3-type=s3 --repo4-type=sftp --repo5-type=gcs --stanza=demo

P00   INFO: repo3: restore backup set 20260119-092920F, recovery will start at 2026-01-19 09:29:20

P00   INFO: remove invalid files/links/paths from '/var/lib/postgresql/16/demo'
P00   INFO: write updated /var/lib/postgresql/16/demo/postgresql.auto.conf
       [filtered 2 lines of output]
```

```bash
sudo pg_ctlcluster 16 demo start
```


--------

## 专用仓库主机

[**快速开始**](#快速开始) 中描述的配置适合简单安装场景，但对于企业级配置，更典型的做法是使用专用仓库主机来存储备份和 WAL 归档。这样可以将备份与数据库服务器解耦，降低数据库主机故障的影响。仍然建议使用传统备份软件对仓库主机本身进行备份。

在 PostgreSQL 主机上，`pg1-path` 必须设置为本地 PostgreSQL 集群的路径，且不应配置 `pg1-host`。在仓库主机的配置中，pgBackRest 配置文件必须通过 `pg-host` 选项连接主库和备库（如有）。仓库主机是唯一需要感知多个 PostgreSQL 主机的配置节点。顺序无关紧要，`pg1-path`/`pg1-host`、`pg2-path`/`pg2-host` 可以分别对应主库或备库。


### 安装

创建一台名为 repository 的新主机，用于存储集群备份。

注意：

仓库主机上安装的 pgBackRest 版本必须与 PostgreSQL 主机上安装的版本完全一致。

创建 `pgbackrest` 用户来管理 pgBackRest 仓库。仓库可以由任何用户管理，但建议不要使用 `postgres`（若存在），以避免混淆。

repository **⇒** 创建 `pgbackrest` 用户

```bash
sudo adduser --disabled-password --gecos "" pgbackrest
```

推荐通过软件包安装 pgBackRest，而非从源码编译。使用软件包时，本节后续步骤通常不必手动执行，但个别软件包可能遗漏某个目录的创建或权限设置有误，此时需要手动创建目录或修正权限。

Debian/Ubuntu 的 pgBackRest 软件包可在 [apt.postgresql.org](https://www.postgresql.org/download/linux/ubuntu/) 获取。

如果当前发行版没有提供软件包，可以 [**从源码构建**](#编译构建) 后手动安装，步骤如下。

repository **⇒** 安装依赖

```bash
sudo apt-get install postgresql-client libxml2 libssh2-1
```

repository **⇒** 从构建主机复制 pgBackRest 二进制文件

```bash
sudo scp build:/build/pgbackrest/src/pgbackrest /usr/bin
sudo chmod 755 /usr/bin/pgbackrest
```

pgBackRest 运行需要日志目录、配置目录以及配置文件。

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


### 配置免密 SSH

pgBackRest 支持使用免密 SSH 实现主机间通信。也可以使用 TLS，请参见 [**配置 TLS**](/docs/pgbackrest/user-guide-rhel/#配置)。

repository **⇒** 创建仓库主机密钥对

```bash
sudo -u pgbackrest mkdir -m 750 /home/pgbackrest/.ssh
sudo -u pgbackrest ssh-keygen -f /home/pgbackrest/.ssh/id_rsa \
       -t rsa -b 4096 -N ""
```

pg-primary **⇒** 创建 pg-primary 主机密钥对

```bash
sudo -u postgres mkdir -m 750 -p /var/lib/postgresql/.ssh
sudo -u postgres ssh-keygen -f /var/lib/postgresql/.ssh/id_rsa \
       -t rsa -b 4096 -N ""
```

在 repository 和 pg-primary 之间互换公钥。

repository **⇒** 将 pg-primary 公钥复制到 repository

```bash
(echo -n 'no-agent-forwarding,no-X11-forwarding,no-port-forwarding,' && \
       echo -n 'command="/usr/bin/pgbackrest ${SSH_ORIGINAL_COMMAND#* }" ' && \
       sudo ssh root@pg-primary cat /var/lib/postgresql/.ssh/id_rsa.pub) | \
       sudo -u pgbackrest tee -a /home/pgbackrest/.ssh/authorized_keys
```

pg-primary **⇒** 将 repository 公钥复制到 pg-primary

```bash
(echo -n 'no-agent-forwarding,no-X11-forwarding,no-port-forwarding,' && \
       echo -n 'command="/usr/bin/pgbackrest ${SSH_ORIGINAL_COMMAND#* }" ' && \
       sudo ssh root@repository cat /home/pgbackrest/.ssh/id_rsa.pub) | \
       sudo -u postgres tee -a /var/lib/postgresql/.ssh/authorized_keys
```

验证 repository 到 pg-primary 以及反向的 SSH 连接是否正常。

repository **⇒** 测试从 repository 到 pg-primary 的连接

```bash
sudo -u pgbackrest ssh postgres@pg-primary
```

pg-primary **⇒** 测试从 pg-primary 到 repository 的连接

```bash
sudo -u postgres ssh pgbackrest@repository
```

注意：

SSH 已配置为仅允许通过免密 SSH 运行 pgBackRest，这可以在服务账号被劫持时增强安全性。


### 配置

仓库主机必须配置 pg-primary 的主机/用户及数据库路径。主库配置为 `pg1`，以便后续添加备库。

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `pg1-host`/`pg1-host-user` 和 `pg1-path`

```ini
[demo]
pg1-host=pg-primary
pg1-path=/var/lib/postgresql/16/demo
[global]
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
```

数据库主机必须配置仓库主机/用户。`repo1-host-user` 选项的默认值为 `pgbackrest`。若 `postgres` 用户需要在仓库主机上执行恢复操作，最好不要同时允许其执行备份。不过，若 `postgres` 用户与 `pgbackrest` 用户属于同一用户组，则可以直接读取仓库。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `repo1-host`/`repo1-host-user`

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
[global]
log-level-file=detail
repo1-host=repository
```

PostgreSQL 的配置可以参见 [**配置归档**](#配置归档) 章节。

命令的运行方式与单主机配置相同，但 `backup` 和 `expire` 等命令需要在仓库主机上运行，而非数据库主机。


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

在仓库主机上使用 `backup` 命令对 PostgreSQL 集群执行备份。

repository **⇒** 备份 demo 集群

```bash
sudo -u pgbackrest pgbackrest --stanza=demo backup
```

```
P00   WARN: no prior backup exists, incr backup has been changed to full
```

由于仓库主机上的仓库是新建的，因此出现增量备份自动转为全量备份的警告。


### 恢复备份

在数据库主机上使用 `restore` 命令恢复 PostgreSQL 集群。

pg-primary **⇒** 停止 demo 集群、执行恢复并重启 PostgreSQL

```bash
sudo pg_ctlcluster 16 demo stop
sudo -u postgres pgbackrest --stanza=demo --delta restore
sudo pg_ctlcluster 16 demo start
```


--------

## 并行备份与恢复

pgBackRest 提供并行处理功能，可以提升压缩和传输性能。通过 `--process-max` 选项设置并行进程数。

对于 `backup` 命令，通常建议不超过可用 CPU 数量的 25%。只要定期执行备份，速度并不需要太快，且备份过程应尽量不影响数据库性能。

对于 `restore` 命令，可以也应该使用全部可用 CPU，因为恢复期间 PostgreSQL 集群处于关闭状态，主机上通常没有其他关键任务在运行。若主机上有多个集群，设置恢复并行度时需相应考虑。

repository **⇒** 使用单进程执行备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo --type=full backup
```

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 pgBackRest 使用多个 `backup` 进程

```ini
[demo]
pg1-host=pg-primary
pg1-path=/var/lib/postgresql/16/demo
[global]
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
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
        wal archive min/max (16): 000000070000000000000023/000000070000000000000025

        full backup: 20260119-093003F

            timestamp start/stop: 2026-01-19 09:30:03+00 / 2026-01-19 09:30:06+00

            wal start/stop: 000000070000000000000023 / 000000070000000000000023
            database size: 29.2MB, database backup size: 29.2MB
            repo1: backup set size: 3.9MB, backup size: 3.9MB

        full backup: 20260119-093007F

            timestamp start/stop: 2026-01-19 09:30:07+00 / 2026-01-19 09:30:11+00

            wal start/stop: 000000070000000000000024 / 000000070000000000000025
            database size: 29.2MB, database backup size: 29.2MB
            repo1: backup set size: 3.9MB, backup size: 3.9MB
```

与单进程备份相比，多进程备份应有明显的性能提升。对于非常小的备份，差异可能不明显，但随着数据库规模增大，节省的时间也会相应增加。


--------

## 启动与停止

若备库被提升用于测试，或测试集群从生产备份中恢复，应阻止这些集群向 pgBackRest 仓库写入数据，这可以通过 `stop` 命令实现。

会向仓库写入数据且会被 `stop` 阻止的命令有：`archive-push`、`backup`、`expire`、`stanza-create` 和 `stanza-upgrade`。注意，`stanza-delete` 是例外（详情参见 [**删除 Stanza**](#删除-stanza)）。

pg-primary **⇒** 停止 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest stop
```

此后新的 pgBackRest 写入命令将不再被执行。

repository **⇒** 尝试执行备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo backup
```

```
P00   WARN: unable to check pg1: [StopError] raised from remote-0 ssh protocol on 'pg-primary': stop file exists for all stanzas

P00  ERROR: [056]: unable to find primary cluster - cannot proceed
            HINT: are all available clusters in recovery?
```

指定 `--force` 选项可以终止当前正在运行的 pgBackRest 写入命令，包括异步 `archive-get`（如果 PostgreSQL 需要，它会再次启动）。若 pgBackRest 已处于停止状态，再次执行 `stop` 将产生警告。

pg-primary **⇒** 再次停止 pgBackRest 服务

```bash
sudo -u postgres pgbackrest stop
```

```
P00   WARN: stop file already exists for all stanzas
```

使用 `start` 命令重新允许 pgBackRest 写入命令运行。停止之前正在进行的写入命令不会自动重启，但现在可以重新运行。

pg-primary **⇒** 启动 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest start
```

也可以仅停止特定 stanza 的 pgBackRest 写入命令。

pg-primary **⇒** 停止 `demo` stanza 的 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest --stanza=demo stop
```

指定 stanza 的新写入命令将不再被执行。

repository **⇒** 尝试执行备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo backup
```

```
P00   WARN: unable to check pg1: [StopError] raised from remote-0 ssh protocol on 'pg-primary': stop file exists for stanza demo

P00  ERROR: [056]: unable to find primary cluster - cannot proceed
            HINT: are all available clusters in recovery?
```

针对单个 stanza 重新启动写入命令时，也必须指定该 stanza。

pg-primary **⇒** 启动 `demo` stanza 的 pgBackRest 写入命令

```bash
sudo -u postgres pgbackrest --stanza=demo start
```


--------

## 复制

复制允许从单个主库创建多个 PostgreSQL 集群副本（即备库）。备库可用于分担读取负载，并在主库主机发生故障时提供冗余。


### 安装

创建一台名为 pg-standby 的新主机来运行备库。

推荐通过软件包安装 pgBackRest，而非从源码编译。使用软件包时，本节后续步骤通常不必手动执行，但个别软件包可能遗漏目录创建或权限设置有误，此时需要手动处理。

Debian/Ubuntu 的 pgBackRest 软件包可在 [apt.postgresql.org](https://www.postgresql.org/download/linux/ubuntu/) 获取。

如果当前发行版没有提供软件包，可以 [**从源码构建**](#编译构建) 后手动安装。

pg-standby **⇒** 安装依赖

```bash
sudo apt-get install postgresql-client libxml2 libssh2-1
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


### 配置免密 SSH

pgBackRest 支持使用免密 SSH 实现主机间通信。也可以使用 TLS，请参见 [**配置 TLS**](/docs/pgbackrest/user-guide-rhel/#配置)。

pg-standby **⇒** 创建 pg-standby 主机密钥对

```bash
sudo -u postgres mkdir -m 750 -p /var/lib/postgresql/.ssh
sudo -u postgres ssh-keygen -f /var/lib/postgresql/.ssh/id_rsa \
       -t rsa -b 4096 -N ""
```

在 repository 和 pg-standby 之间互换公钥。

repository **⇒** 将 pg-standby 公钥复制到 repository

```bash
(echo -n 'no-agent-forwarding,no-X11-forwarding,no-port-forwarding,' && \
       echo -n 'command="/usr/bin/pgbackrest ${SSH_ORIGINAL_COMMAND#* }" ' && \
       sudo ssh root@pg-standby cat /var/lib/postgresql/.ssh/id_rsa.pub) | \
       sudo -u pgbackrest tee -a /home/pgbackrest/.ssh/authorized_keys
```

pg-standby **⇒** 将 repository 公钥复制到 pg-standby

```bash
(echo -n 'no-agent-forwarding,no-X11-forwarding,no-port-forwarding,' && \
       echo -n 'command="/usr/bin/pgbackrest ${SSH_ORIGINAL_COMMAND#* }" ' && \
       sudo ssh root@repository cat /home/pgbackrest/.ssh/id_rsa.pub) | \
       sudo -u postgres tee -a /var/lib/postgresql/.ssh/authorized_keys
```

验证 repository 到 pg-standby 以及反向的 SSH 连接是否正常。

repository **⇒** 测试从 repository 到 pg-standby 的连接

```bash
sudo -u pgbackrest ssh postgres@pg-standby
```

pg-standby **⇒** 测试从 pg-standby 到 repository 的连接

```bash
sudo -u postgres ssh pgbackrest@repository
```


### 热备库

热备库通过 WAL 归档进行复制，并允许只读查询。

pgBackRest 的配置与 pg-primary 非常相似，区别在于使用 `standby` 恢复类型，使集群在到达 WAL 流末尾时保持在恢复模式而不退出。

pg-standby:`/etc/pgbackrest/pgbackrest.conf` **⇒** 在备库上配置 pgBackRest

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
[global]
log-level-file=detail
repo1-host=repository
```

必须先创建 demo 集群（即使恢复时会被覆盖），以便生成 PostgreSQL 配置文件。

pg-standby **⇒** 创建 demo 集群

```bash
sudo pg_createcluster 16 demo
```

现在可以使用 `restore` 命令创建备库。

重要提示：

若集群要在不成为新主库的情况下被提升（例如用于报表或测试），请使用 `--archive-mode=off` 或在 `postgresql.conf` 中设置 `archive_mode=off` 来禁用归档。若不禁用归档，仓库中可能会被大量 WAL 污染，使后续恢复更加困难。

pg-standby **⇒** 恢复 demo 备库集群

```bash
sudo -u postgres pgbackrest --stanza=demo --delta --type=standby restore
sudo -u postgres cat /var/lib/postgresql/16/demo/postgresql.auto.conf

# Do not edit this file manually!
# It will be overwritten by the ALTER SYSTEM command.

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:28:18
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:28:41
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:29:01
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
# Removed by pgBackRest restore on 2026-01-19 09:29:35 # recovery_target_time = '2026-01-19 09:28:56.893848+00'
# Removed by pgBackRest restore on 2026-01-19 09:29:35 # recovery_target_action = 'promote'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:29:35
restore_command = 'pgbackrest --repo=3 --repo-target-time="2026-01-19 09:29:25+00" --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:29:57
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:30:25
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
```

启动 PostgreSQL 之前，必须启用 `hot_standby` 设置以允许 pg-standby 接受只读连接，否则连接请求将被拒绝。其余配置是为备库被提升为主库做准备。

pg-standby:`/etc/postgresql/16/demo/postgresql.conf` **⇒** 配置 PostgreSQL

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
hot_standby = on
```

pg-standby **⇒** 启动 PostgreSQL

```bash
sudo pg_ctlcluster 16 demo start
```

PostgreSQL 日志提供了恢复过程的重要信息，请注意确认集群已进入备库模式并准备好接受只读连接。

pg-standby **⇒** 检查 PostgreSQL 日志中表示成功的日志消息

```bash
sudo -u postgres cat /var/log/postgresql/postgresql-16-demo.log
```

```
       [filtered 3 lines of output]
LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
LOG:  database system was interrupted; last known up at 2026-01-19 09:30:07 UTC

LOG:  entering standby mode

LOG:  starting backup recovery with redo LSN 0/24000028, checkpoint LSN 0/24000060, on timeline ID 7
LOG:  restored log file "00000007.history" from archive
       [filtered 6 lines of output]
```

验证复制是否正确配置的简单方法是在 pg-primary 上创建一张表。

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
       [filtered 4 lines of output]
    message
----------------

 Important Data

(1 row)
```

然后在 pg-standby 上查询同一张表，验证数据是否已同步。

pg-standby **⇒** 在备库上查询新表

```bash
sudo -u postgres psql -c "select * from replicated_table;"
```

```
ERROR:  relation "replicated_table" does not exist

LINE 1: select * from replicated_table;
                      ^
```

为什么没有数据？因为 PostgreSQL 从归档中拉取 WAL 段来执行复制，包含这些更改的 WAL 段尚未从 pg-primary 推送到归档，所以备库还看不到这些更改。

可以手动调用 `pg_switch_wal()` 解决这一问题——该函数会将当前 WAL 段推送到归档（并创建新的 WAL 段来存放后续更改）。

pg-primary **⇒** 调用 `pg_switch_wal()`

```bash
sudo -u postgres psql -c "select *, current_timestamp from pg_switch_wal()";
```

```
 pg_switch_wal |       current_timestamp
---------------+-------------------------------
 0/2601A870    | 2026-01-19 09:30:32.338412+00
(1 row)
```

稍等片刻后，表将出现在 pg-standby 上（可能需要等待 WAL 段完成归档和应用）。

pg-standby **⇒** 新表现在已出现在备库上（可能需要重试几次）

```bash
sudo -u postgres psql -c " \
       select *, current_timestamp from replicated_table"
```

```
    message     |      current_timestamp
----------------+------------------------------

 Important Data | 2026-01-19 09:30:33.80566+00

(1 row)
```

验证备库配置对仓库的访问是否正常。

pg-standby **⇒** 检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=1159-e47628bc --log-level-console=info --log-level-file=detail --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo1-host=repository --stanza=demo
P00   INFO: check repo1 (standby)

P00   INFO: switch wal not performed because this is a standby

P00   INFO: check command end: completed successfully
```


### 流复制

流复制不仅依赖 WAL 归档，而是直接连接到主库，在主库发生更改时立即应用，从而大幅降低主备延迟。

流复制需要一个具有复制权限的用户。

pg-primary **⇒** 创建复制用户

```bash
sudo -u postgres psql -c " \
       create user replicator password 'jw8s0F4' replication";
```

```sql
CREATE ROLE
```

需要更新 `pg_hba.conf` 文件以允许备库以复制用户身份连接。请将下面的 IP 地址替换为实际的 pg-standby IP 地址。修改 `pg_hba.conf` 后需重新加载配置。

pg-primary **⇒** 为复制用户创建 `pg_hba.conf` 条目

```bash
sudo -u postgres sh -c 'echo \
       "host    replication     replicator      172.17.0.8/32           md5" \
       >> /etc/postgresql/16/demo/pg_hba.conf'

sudo pg_ctlcluster 16 demo reload
```

备库需要知道如何连接到主库，因此在 pgBackRest 配置中设置 `primary_conninfo`。

pg-standby:`/etc/pgbackrest/pgbackrest.conf` **⇒** 设置 primary_conninfo

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
recovery-option=primary_conninfo=host=172.17.0.6 port=5432 user=replicator
[global]
log-level-file=detail
repo1-host=repository
```

密码可以直接写入 `primary_conninfo`，但使用 `.pgpass` 文件更灵活、更安全。

pg-standby **⇒** 在 `.pgpass` 文件中配置复制密码

```bash
sudo -u postgres sh -c 'echo \
       "172.17.0.6:*:replication:replicator:jw8s0F4" \
       >> /var/lib/postgresql/.pgpass'

sudo -u postgres chmod 600 /var/lib/postgresql/.pgpass
```

现在可以使用 `restore` 命令创建备库。

pg-standby **⇒** 停止 PostgreSQL，恢复 demo 备库集群

```bash
sudo pg_ctlcluster 16 demo stop
sudo -u postgres pgbackrest --stanza=demo --delta --type=standby restore
sudo -u postgres cat /var/lib/postgresql/16/demo/postgresql.auto.conf

# Do not edit this file manually!
# It will be overwritten by the ALTER SYSTEM command.

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:28:18
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:28:41
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:29:01
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
# Removed by pgBackRest restore on 2026-01-19 09:29:35 # recovery_target_time = '2026-01-19 09:28:56.893848+00'
# Removed by pgBackRest restore on 2026-01-19 09:29:35 # recovery_target_action = 'promote'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:29:35
restore_command = 'pgbackrest --repo=3 --repo-target-time="2026-01-19 09:29:25+00" --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:29:57
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'

# Recovery settings generated by pgBackRest restore on 2026-01-19 09:30:36
primary_conninfo = 'host=172.17.0.6 port=5432 user=replicator'
restore_command = 'pgbackrest --stanza=demo archive-get %f "%p"'
```

注意：

`primary_conninfo` 设置已写入 `postgresql.auto.conf`，因为它在 `pgbackrest.conf` 中通过 `recovery-option` 方式配置。若希望保留现有的 `postgresql.auto.conf` 文件，可在 `restore` 时使用 `--type=preserve` 选项。

pg-standby **⇒** 启动 PostgreSQL

```bash
sudo pg_ctlcluster 16 demo start
```

PostgreSQL 日志将确认流复制已成功启动。

pg-standby **⇒** 检查 PostgreSQL 日志中表示成功的日志消息

```bash
sudo -u postgres cat /var/log/postgresql/postgresql-16-demo.log
```

```
       [filtered 13 lines of output]
LOG:  consistent recovery state reached at 0/25000050
LOG:  database system is ready to accept read-only connections

LOG:  started streaming WAL from primary at 0/27000000 on timeline 7
```

现在在 pg-primary 上创建表后，无需调用 `pg_switch_wal()`，数据将很快出现在 pg-standby 上。

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
       [filtered 4 lines of output]
    message     |       current_timestamp
----------------+-------------------------------

 Important Data | 2026-01-19 09:30:43.211099+00

(1 row)
```

pg-standby **⇒** 在备库上查询表

```bash
sudo -u postgres psql -c " \
       select *, current_timestamp from stream_table"
```

```
    message     |       current_timestamp
----------------+-------------------------------

 Important Data | 2026-01-19 09:30:43.388694+00

(1 row)
```


--------
## 多 Stanza 配置

pgBackRest 支持多个 stanza，最常见的用法是多个 stanza 共享同一台仓库主机。


### 安装

创建一台名为 pg-alt 的新主机，用于运行新的主库。

推荐优先从软件包安装 pgBackRest，而非从源码构建。使用软件包安装时，本节中的其余步骤通常可以跳过，但某些软件包可能会遗漏目录创建或权限设置，届时需要手动补全。

Debian/Ubuntu 平台的 pgBackRest 软件包可在 [apt.postgresql.org](https://www.postgresql.org/download/linux/ubuntu/) 获取。

如果当前发行版没有提供适用的软件包，可以参考 [**编译构建**](#编译构建) 一节从源码构建，并按如下方式手动安装。

pg-alt **⇒** 安装依赖

```bash
sudo apt-get install postgresql-client libxml2 libssh2-1
```

pg-alt **⇒** 从编译主机复制 pgBackRest 二进制文件

```bash
sudo scp build:/build/pgbackrest/src/pgbackrest /usr/bin
sudo chmod 755 /usr/bin/pgbackrest
```

pgBackRest 需要创建日志目录、配置目录和配置文件。

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


### 配置免密 SSH

pgBackRest 支持使用免密 SSH 实现主机间通信，也可以改用 TLS，详见 [**配置 TLS**](/docs/pgbackrest/user-guide-rhel/#配置)。

pg-alt **⇒** 创建 pg-alt 主机密钥对

```bash
sudo -u postgres mkdir -m 750 -p /var/lib/postgresql/.ssh
sudo -u postgres ssh-keygen -f /var/lib/postgresql/.ssh/id_rsa \
       -t rsa -b 4096 -N ""
```

交换仓库主机与 pg-alt 之间的 SSH 公钥。

repository **⇒** 将 pg-alt 公钥复制到仓库主机

```bash
(echo -n 'no-agent-forwarding,no-X11-forwarding,no-port-forwarding,' && \
       echo -n 'command="/usr/bin/pgbackrest ${SSH_ORIGINAL_COMMAND#* }" ' && \
       sudo ssh root@pg-alt cat /var/lib/postgresql/.ssh/id_rsa.pub) | \
       sudo -u pgbackrest tee -a /home/pgbackrest/.ssh/authorized_keys
```

pg-alt **⇒** 将仓库主机公钥复制到 pg-alt

```bash
(echo -n 'no-agent-forwarding,no-X11-forwarding,no-port-forwarding,' && \
       echo -n 'command="/usr/bin/pgbackrest ${SSH_ORIGINAL_COMMAND#* }" ' && \
       sudo ssh root@repository cat /home/pgbackrest/.ssh/id_rsa.pub) | \
       sudo -u postgres tee -a /var/lib/postgresql/.ssh/authorized_keys
```

验证仓库主机到 pg-alt 及 pg-alt 到仓库主机的双向 SSH 连接。

repository **⇒** 测试从仓库主机到 pg-alt 的连接

```bash
sudo -u pgbackrest ssh postgres@pg-alt
```

pg-alt **⇒** 测试从 pg-alt 到仓库主机的连接

```bash
sudo -u postgres ssh pgbackrest@repository
```


### 配置

pg-alt 上的 pgBackRest 配置与 pg-primary 基本相同，区别在于使用 `demo-alt` stanza，从而将备份和归档存储在独立的位置。

pg-alt:`/etc/pgbackrest/pgbackrest.conf` **⇒** 在新主库上配置 pgBackRest

```ini
[demo-alt]
pg1-path=/var/lib/postgresql/16/demo
[global]
log-level-file=detail
repo1-host=repository
```

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `pg1-host`/`pg1-host-user` 和 `pg1-path`

```ini
[demo]
pg1-host=pg-primary
pg1-path=/var/lib/postgresql/16/demo
[demo-alt]
pg1-host=pg-alt
pg1-path=/var/lib/postgresql/16/demo
[global]
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
```


### 初始化演示集群

pg-alt **⇒** 创建演示集群

```bash
sudo -u postgres /usr/lib/postgresql/16/bin/initdb \
       -D /var/lib/postgresql/16/demo -k -A peer

sudo pg_createcluster 16 demo
```

```
Configuring already existing cluster (configuration: /etc/postgresql/16/demo, data: /var/lib/postgresql/16/demo, owner: 102:103)
Ver Cluster Port Status Owner    Data directory              Log file
16  demo    5432 down   postgres /var/lib/postgresql/16/demo /var/log/postgresql/postgresql-16-demo.log
```

pg-alt:`/etc/postgresql/16/demo/postgresql.conf` **⇒** 配置 PostgreSQL 设置

```ini
archive_command = 'pgbackrest --stanza=demo-alt archive-push %p'
archive_mode = on
```

pg-alt **⇒** 启动演示集群

```bash
sudo pg_ctlcluster 16 demo restart
```


### 创建 Stanza 并检查配置

必须运行 `stanza-create` 命令初始化 stanza。建议随后运行 `check` 命令，确认归档与备份配置均正确无误。

pg-alt **⇒** 创建 stanza 并检查配置

```bash
sudo -u postgres pgbackrest --stanza=demo-alt --log-level-console=info stanza-create
```

```
P00   INFO: stanza-create command begin 2.58.0: --exec-id=1027-863103d1 --log-level-console=info --log-level-file=detail --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo1-host=repository --stanza=demo-alt
P00   INFO: stanza-create for stanza 'demo-alt' on repo1

P00   INFO: stanza-create command end: completed successfully
```

```bash
sudo -u postgres pgbackrest --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=1037-dcb84d90 --log-level-console=info --log-level-file=detail --no-log-timestamp --repo1-host=repository

P00   INFO: check stanza 'demo-alt'

P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 000000010000000000000001 successfully archived to '/var/lib/pgbackrest/archive/demo-alt/16-1/0000000100000000/000000010000000000000001-d581f9c024aa57fd11caaf7b1d0142d6eb7e6c98.gz' on repo1

P00   INFO: check command end: completed successfully
```

在仓库主机上运行 `check` 命令时，会同时检查所有 stanza。

repository **⇒** 检查所有 stanza 的配置

```bash
sudo -u pgbackrest pgbackrest --log-level-console=info check
```

```
P00   INFO: check command begin 2.58.0: --exec-id=1919-952717d9 --log-level-console=info --no-log-timestamp --repo1-path=/var/lib/pgbackrest

P00   INFO: check stanza 'demo'

P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 000000070000000000000027 successfully archived to '/var/lib/pgbackrest/archive/demo/16-1/0000000700000000/000000070000000000000027-943c372700ab056ed6f01bd2fe5cc4b05f22be52.gz' on repo1
P00   INFO: check stanza 'demo-alt'

P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 000000010000000000000002 successfully archived to '/var/lib/pgbackrest/archive/demo-alt/16-1/0000000100000000/000000010000000000000002-74201c5f0512a2313d44b325bc97b774ada813e2.gz' on repo1

P00   INFO: check command end: completed successfully
```


--------

## 异步归档

通过 `archive-async` 选项可启用异步归档，该选项对 `archive-push` 和 `archive-get` 命令均生效。

异步归档需要配置缓冲区路径（spool path）。两个命令都会在此路径下存储临时数据，但工作方式各有不同，具体用法将在各小节中分别说明。

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

配置缓冲区路径并启用异步归档后，pgBackRest 会通过减少远程存储的连接次数自动获得一定的性能提升。进一步配置 `process-max` 可通过并行化操作大幅提升性能，但不宜设置过高，以免影响正常的数据库运行。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置缓冲区路径和异步归档

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
[global]
archive-async=y
log-level-file=detail
repo1-host=repository
spool-path=/var/spool/pgbackrest
[global:archive-get]
process-max=2
[global:archive-push]
process-max=2
```

pg-standby:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置缓冲区路径和异步归档

```ini
[demo]
pg1-path=/var/lib/postgresql/16/demo
recovery-option=primary_conninfo=host=172.17.0.6 port=5432 user=replicator
[global]
archive-async=y
log-level-file=detail
repo1-host=repository
spool-path=/var/spool/pgbackrest
[global:archive-get]
process-max=2
[global:archive-push]
process-max=2
```

注意：

`process-max` 通过命令专属配置节（command sections）来设置，使其不会被备份和恢复操作所继承，同时也允许为 `archive-push` 和 `archive-get` 分别指定不同的值。

为便于演示，这里通过中断流复制，强制 PostgreSQL 使用 `restore_command` 从归档获取 WAL。

pg-primary **⇒** 通过更改复制密码来中断流复制

```bash
sudo -u postgres psql -c "alter user replicator password 'bogus'"
```

```sql
ALTER ROLE
```

pg-standby **⇒** 重启备库以中断连接

```bash
sudo pg_ctlcluster 16 demo restart
```


### 归档推送（Archive Push）

异步 `archive-push` 命令将 WAL 归档工作转交给独立进程（或多进程）处理，以提升吞吐量。其工作原理是"向前预读"——扫描除 PostgreSQL 当前通过 `archive_command` 请求的文件外，还有哪些 WAL 段已就绪可归档。WAL 段直接从 `pg_xlog`/`pg_wal` 目录传输到归档存储，只有确认 WAL 段已安全入库后，`archive_command` 才返回成功。

缓冲区路径用于记录当前 WAL 归档的状态。写入其中的状态文件通常为零字节，整体占用空间极少（最多几 MB），IO 开销也很小。目录中的所有信息均可重建，因此将集群迁移到新硬件时无需保留缓冲区目录。

重要提示：

早期实现中，WAL 段会先复制到缓冲区目录再进行压缩和传输；新实现则直接从 `pg_xlog` 目录读取 WAL。如果曾在 v1.12 或更早版本中使用异步归档，请在升级前仔细阅读 v1.13 的发版说明。

可通过 `[stanza]-archive-push-async.log` 文件监控异步进程的活动。快速连续推送多个 WAL 段是验证并行归档的好方法。

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
P00   INFO: check command begin 2.58.0: --exec-id=3183-d3ffb6cd --log-level-console=info --log-level-file=detail --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --repo1-host=repository --stanza=demo
P00   INFO: check repo1 configuration (primary)
P00   INFO: check repo1 archive for WAL (primary)

P00   INFO: WAL segment 00000007000000000000002D successfully archived to '/var/lib/pgbackrest/archive/demo/16-1/0000000700000000/00000007000000000000002D-b22834a2d3306ded7a39c8982af40c38d01d1595.gz' on repo1

P00   INFO: check command end: completed successfully
```

此时日志文件中将包含并行异步归档的详细记录。

pg-primary **⇒** 查看日志中的结果

```bash
sudo -u postgres cat /var/log/pgbackrest/demo-archive-push-async.log
```

```
-------------------PROCESS START-------------------
P00   INFO: archive-push:async command begin 2.58.0: [/var/lib/postgresql/16/demo/pg_wal] --archive-async --exec-id=3169-08eec32e --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --process-max=2 --repo1-host=repository --spool-path=/var/spool/pgbackrest --stanza=demo

P00   INFO: push 1 WAL file(s) to archive: 000000070000000000000028
P01 DETAIL: pushed WAL file '000000070000000000000028' to the archive

P00   INFO: archive-push:async command end: completed successfully

-------------------PROCESS START-------------------
P00   INFO: archive-push:async command begin 2.58.0: [/var/lib/postgresql/16/demo/pg_wal] --archive-async --exec-id=3187-9a196906 --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --process-max=2 --repo1-host=repository --spool-path=/var/spool/pgbackrest --stanza=demo

P00   INFO: push 5 WAL file(s) to archive: 000000070000000000000029...00000007000000000000002D
P02 DETAIL: pushed WAL file '00000007000000000000002A' to the archive
P01 DETAIL: pushed WAL file '000000070000000000000029' to the archive
P01 DETAIL: pushed WAL file '00000007000000000000002C' to the archive
P02 DETAIL: pushed WAL file '00000007000000000000002B' to the archive
P01 DETAIL: pushed WAL file '00000007000000000000002D' to the archive

P00   INFO: archive-push:async command end: completed successfully
```


### 归档获取（Archive Get）

异步 `archive-get` 命令通过维护本地 WAL 队列来提升吞吐量。若队列中找不到所需的 WAL 段，则会从仓库获取该段及足够多的后续 WAL 来填满队列。队列的最大容量由 `archive-get-queue-max` 定义，当队列剩余容量不足一半时，会自动补充获取。

在 WAL 生成量较大、或与仓库存储（如 S3 等对象存储）连接延迟较高的环境中，异步模式的收益最为显著。高延迟场景下，适当调大 `process-max` 通常有助于进一步提升性能。

可通过 `[stanza]-archive-get-async.log` 文件监控异步进程的活动。

pg-standby **⇒** 查看日志中的结果

```bash
sudo -u postgres cat /var/log/pgbackrest/demo-archive-get-async.log
```

```
-------------------PROCESS START-------------------
P00   INFO: archive-get:async command begin 2.58.0: [000000070000000000000024, 000000070000000000000025, 000000070000000000000026, 000000070000000000000027, 000000070000000000000028, 000000070000000000000029, 00000007000000000000002A, 00000007000000000000002B] --archive-async --exec-id=1380-8760a6e0 --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --process-max=2 --repo1-host=repository --spool-path=/var/spool/pgbackrest --stanza=demo
P00   INFO: get 8 WAL file(s) from archive: 000000070000000000000024...00000007000000000000002B

P01 DETAIL: found 000000070000000000000024 in the repo1: 16-1 archive
P02 DETAIL: found 000000070000000000000025 in the repo1: 16-1 archive
P01 DETAIL: found 000000070000000000000026 in the repo1: 16-1 archive
P02 DETAIL: found 000000070000000000000027 in the repo1: 16-1 archive

P00 DETAIL: unable to find 000000070000000000000028 in the archive
P00   INFO: archive-get:async command end: completed successfully
       [filtered 14 lines of output]
P00   INFO: archive-get:async command begin 2.58.0: [000000070000000000000028, 000000070000000000000029, 00000007000000000000002A, 00000007000000000000002B, 00000007000000000000002C, 00000007000000000000002D, 00000007000000000000002E, 00000007000000000000002F] --archive-async --exec-id=1431-a78c4f0a --log-level-console=off --log-level-file=detail --log-level-stderr=off --no-log-timestamp --pg1-path=/var/lib/postgresql/16/demo --process-max=2 --repo1-host=repository --spool-path=/var/spool/pgbackrest --stanza=demo
P00   INFO: get 8 WAL file(s) from archive: 000000070000000000000028...00000007000000000000002F

P02 DETAIL: found 000000070000000000000029 in the repo1: 16-1 archive
P01 DETAIL: found 000000070000000000000028 in the repo1: 16-1 archive
P02 DETAIL: found 00000007000000000000002A in the repo1: 16-1 archive
P01 DETAIL: found 00000007000000000000002B in the repo1: 16-1 archive
P02 DETAIL: found 00000007000000000000002C in the repo1: 16-1 archive
P01 DETAIL: found 00000007000000000000002D in the repo1: 16-1 archive

P00 DETAIL: unable to find 00000007000000000000002E in the archive
P00   INFO: archive-get:async command end: completed successfully
       [filtered 11 lines of output]
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

pgBackRest 支持从备库而非主库执行备份。从备库备份需要配置 pg-standby 主机并启用 `backup-standby` 选项。若配置了多个备库，则使用第一个处于运行状态的备库进行备份。

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 配置 `pg2-host`/`pg2-host-user` 和 `pg2-path`

```ini
[demo]
pg1-host=pg-primary
pg1-path=/var/lib/postgresql/16/demo
pg2-host=pg-standby
pg2-path=/var/lib/postgresql/16/demo
[demo-alt]
pg1-host=pg-alt
pg1-path=/var/lib/postgresql/16/demo
[global]
backup-standby=y
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
```

执行备份时，主库和备库均须在线，但绝大多数文件将从备库复制，以减轻主库的 I/O 压力。数据库主机可按任意顺序配置，pgBackRest 会自动识别主库和备库的角色。

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

P01 DETAIL: backup file pg-primary:/var/lib/postgresql/16/demo/global/pg_control (8KB, 0.53%) checksum c9b694b7e3af23be6834c24b23bb1a43d8fb22f4

P01 DETAIL: match file from prior backup pg-primary:/var/lib/postgresql/16/demo/pg_logical/replorigin_checkpoint (8B, 0.53%) checksum 347fc8f2df71bd4436e38bd1516ccd7ea0d46532
P02 DETAIL: backup file pg-standby:/var/lib/postgresql/16/demo/base/5/1249 (464KB, 31.38%) checksum c32e73e05783bcad1a0107e7b5462117b2906d5e
       [filtered 1278 lines of output]
```

从该增量备份的输出可以看出，绝大多数文件从 pg-standby 主机复制，只有极少数文件来自 pg-primary。

pgBackRest 从备库创建的备份与在主库上创建的备份完全等效。其实现方式为：在 pg-primary 上执行备份的启动和停止操作，从 pg-standby 复制已复制的文件，再从 pg-primary 补充少量剩余文件。因此，主库的日志和统计信息也会完整纳入备份。


--------

## 升级 PostgreSQL

将 PostgreSQL 升级到新的主版本后，必须立即将所有 pgBackRest 配置中的 `pg-path` 更新为新的数据目录路径，并运行 `stanza-upgrade` 命令。若主机上配置了多个仓库，则每个仓库上的 stanza 都会一并升级。若数据库处于离线状态，请加上 `--no-online` 选项。

以下步骤并非 PostgreSQL 升级的完整指南，而是概要介绍了升级主库和备库的一般流程，重点展示重新配置 pgBackRest 所需的操作。建议在升级前先执行一次全量备份。

pg-primary **⇒** 停止旧集群

```bash
sudo pg_ctlcluster 16 demo stop
```

由于备库将从升级后的新集群恢复，因此备库上的旧集群也需要一并停止。

pg-standby **⇒** 停止旧集群

```bash
sudo pg_ctlcluster 16 demo stop
```

初始化新版本的集群并执行升级。

pg-primary **⇒** 创建新集群并执行升级

```bash
sudo -u postgres /usr/lib/postgresql/17/bin/initdb \
       -D /var/lib/postgresql/17/demo -k -A peer

sudo pg_createcluster 17 demo
sudo -u postgres sh -c 'cd /var/lib/postgresql && \
       /usr/lib/postgresql/17/bin/pg_upgrade \
       --old-bindir=/usr/lib/postgresql/16/bin \
       --new-bindir=/usr/lib/postgresql/17/bin \
       --old-datadir=/var/lib/postgresql/16/demo \
       --new-datadir=/var/lib/postgresql/17/demo \
       --old-options=" -c config_file=/etc/postgresql/16/demo/postgresql.conf" \
       --new-options=" -c config_file=/etc/postgresql/17/demo/postgresql.conf"'
```

```
       [filtered 41 lines of output]
Checking for extension updates                                ok

Upgrade Complete

----------------
Optimizer statistics are not transferred by pg_upgrade.
       [filtered 3 lines of output]
```

配置新集群的参数。

pg-primary:`/etc/postgresql/17/demo/postgresql.conf` **⇒** 配置 PostgreSQL

```ini
archive_command = 'pgbackrest --stanza=demo archive-push %p'
archive_mode = on
```

更新所有主机上的 pgBackRest 配置，将 `pg-path` 指向新集群的数据目录。

pg-primary:`/etc/pgbackrest/pgbackrest.conf` **⇒** 升级 `pg1-path`

```ini
[demo]
pg1-path=/var/lib/postgresql/17/demo
[global]
archive-async=y
log-level-file=detail
repo1-host=repository
spool-path=/var/spool/pgbackrest
[global:archive-get]
process-max=2
[global:archive-push]
process-max=2
```

pg-standby:`/etc/pgbackrest/pgbackrest.conf` **⇒** 升级 `pg-path`

```ini
[demo]
pg1-path=/var/lib/postgresql/17/demo
recovery-option=primary_conninfo=host=172.17.0.6 port=5432 user=replicator
[global]
archive-async=y
log-level-file=detail
repo1-host=repository
spool-path=/var/spool/pgbackrest
[global:archive-get]
process-max=2
[global:archive-push]
process-max=2
```

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 升级 `pg1-path` 和 `pg2-path`，禁用从备库备份

```ini
[demo]
pg1-host=pg-primary
pg1-path=/var/lib/postgresql/17/demo
pg2-host=pg-standby
pg2-path=/var/lib/postgresql/17/demo
[demo-alt]
pg1-host=pg-alt
pg1-path=/var/lib/postgresql/16/demo
[global]
backup-standby=n
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
```

pg-primary **⇒** 复制 hba 配置文件

```bash
sudo cp /etc/postgresql/16/demo/pg_hba.conf \
       /etc/postgresql/17/demo/pg_hba.conf
```

启动新集群前，必须先运行 `stanza-upgrade` 命令完成 stanza 升级。

pg-primary **⇒** 升级 stanza

```bash
sudo -u postgres pgbackrest --stanza=demo --no-online \
       --log-level-console=info stanza-upgrade
```

```
P00   INFO: stanza-upgrade command begin 2.58.0: --exec-id=3590-c2882bfe --log-level-console=info --log-level-file=detail --no-log-timestamp --no-online --pg1-path=/var/lib/postgresql/17/demo --repo1-host=repository --stanza=demo
P00   INFO: stanza-upgrade for stanza 'demo' on repo1

P00   INFO: stanza-upgrade command end: completed successfully
```

启动新集群并验证配置。

pg-primary **⇒** 启动新集群

```bash
sudo pg_ctlcluster 17 demo start
```

使用 `check` 命令验证配置。

pg-primary **⇒** 检查配置

```bash
sudo pg_lsclusters
sudo -u postgres pgbackrest --stanza=demo check
```

确认无误后，删除旧版本集群。

pg-primary **⇒** 删除旧集群

```bash
sudo pg_dropcluster 16 demo
```

在备库上安装新版本的 PostgreSQL 并创建集群。

pg-standby **⇒** 删除旧集群并创建新集群

```bash
sudo pg_dropcluster 16 demo
sudo pg_createcluster 17 demo
```

在仓库主机上运行 `check` 命令。由于备库集群尚未启动，出现备库不可用的警告属于预期行为。执行此命令是为了确认仓库主机已感知到备库的存在，且主库端配置正确。

repository **⇒** 检查配置

```bash
sudo -u pgbackrest pgbackrest --stanza=demo check
```

```
P00   WARN: unable to check pg2: [DbConnectError] raised from remote-0 ssh protocol on 'pg-standby': unable to connect to 'dbname='postgres' port=5432': connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: No such file or directory
            	Is the server running locally and accepting connections on that socket?
```

对新集群执行全量备份，再从备份中恢复备库。若指定 `incr` 或 `diff` 类型，pgBackRest 会自动将其升级为 `full`。

repository **⇒** 运行全量备份

```bash
sudo -u pgbackrest pgbackrest --stanza=demo --type=full backup
```

pg-standby **⇒** 恢复演示备库集群

```bash
sudo -u postgres pgbackrest --stanza=demo --delta --type=standby restore
```

pg-standby:`/etc/postgresql/17/demo/postgresql.conf` **⇒** 配置 PostgreSQL

```ini
hot_standby = on
```

pg-standby **⇒** 启动 PostgreSQL 并检查 pgBackRest 配置

```bash
sudo pg_ctlcluster 17 demo start
sudo -u postgres pgbackrest --stanza=demo check
```

备库恢复并正常运行后，即可重新启用从备库备份功能。

repository:`/etc/pgbackrest/pgbackrest.conf` **⇒** 重新启用从备库备份

```ini
[demo]
pg1-host=pg-primary
pg1-path=/var/lib/postgresql/17/demo
pg2-host=pg-standby
pg2-path=/var/lib/postgresql/17/demo
[demo-alt]
pg1-host=pg-alt
pg1-path=/var/lib/postgresql/16/demo
[global]
backup-standby=y
process-max=3
repo1-path=/var/lib/pgbackrest
repo1-retention-full=2
start-fast=y
```

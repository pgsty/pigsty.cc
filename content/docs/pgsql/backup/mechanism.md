---
title: 备份机制
weight: 1702
description: 备份脚本、定时任务、备份仓库与基础设施
icon: fa-solid fa-gears
categories: [任务, 概念]
---


备份可以通过内置 [脚本](#脚本) 调用，使用节点 [crontab](#定时备份) 定时执行，
由 [pgbackrest](https://pgbackrest.org/) 管理，存储在备份仓库中，
仓库可以是本地磁盘文件系统或 MinIO / S3，并支持不同的 [保留](/docs/pgsql/backup/repository#仓库保留策略) 策略。


--------

## 脚本

您可以使用 [`pg_dbsu`](/docs/pgsql/param#pg_dbsu) 用户（默认为 `postgres`）执行 `pgbackrest` 命令创建备份：

{{< tabpane persist="disabled" >}}
{{% tab header="备份命令" disabled=true /%}}
{{< tab header="backup" lang="bash" >}}
pgbackrest --stanza=pg-meta --type=full backup   # 为集群 pg-meta 创建全量备份
{{< /tab >}}
{{< tab header="full" lang="bash" >}}
$ pgbackrest --stanza=pg-meta --type=full backup
2025-07-15 01:36:57.007 P00   INFO: backup command begin 2.54.2: --annotation=pg_cluster=pg-meta ...
2025-07-15 01:36:57.030 P00   INFO: execute non-exclusive backup start: backup begins after the requested immediate checkpoint completes
2025-07-15 01:36:57.105 P00   INFO: backup start archive = 000000010000000000000006, lsn = 0/6000028
2025-07-15 01:36:58.540 P00   INFO: new backup label = 20250715-013657F
2025-07-15 01:36:58.588 P00   INFO: full backup size = 44.5MB, file total = 1437
2025-07-15 01:36:58.589 P00   INFO: backup command end: completed successfully (1584ms)
{{< /tab >}}
{{< tab header="diff" lang="bash" >}}
$ pgbackrest --stanza=pg-meta --type=diff backup
2025-07-15 01:37:24.952 P00   INFO: backup command begin 2.54.2: ...
2025-07-15 01:37:24.985 P00   INFO: last backup label = 20250715-013657F, version = 2.54.2
2025-07-15 01:37:26.337 P00   INFO: new backup label = 20250715-013657F_20250715-013724D
2025-07-15 01:37:26.381 P00   INFO: diff backup size = 424.3KB, file total = 1437
2025-07-15 01:37:26.381 P00   INFO: backup command end: completed successfully (1431ms)
{{< /tab >}}
{{< tab header="incr" lang="bash" >}}
$ pgbackrest --stanza=pg-meta --type=incr backup
2025-07-15 01:37:30.305 P00   INFO: backup command begin 2.54.2: ...
2025-07-15 01:37:30.337 P00   INFO: last backup label = 20250715-013657F_20250715-013724D, version = 2.54.2
2025-07-15 01:37:31.356 P00   INFO: new backup label = 20250715-013657F_20250715-013730I
2025-07-15 01:37:31.403 P00   INFO: incr backup size = 8.3KB, file total = 1437
2025-07-15 01:37:31.403 P00   INFO: backup command end: completed successfully (1099ms)
{{< /tab >}}
{{< tab header="info" lang="bash" >}}
$ pgbackrest --stanza=pg-meta info
stanza: pg-meta
    status: ok
    cipher: aes-256-cbc

    db (current)
        wal archive min/max (17): 000000010000000000000001/00000001000000000000000A

        full backup: 20250715-013657F
            timestamp start/stop: 2025-07-15 01:36:57+00 / 2025-07-15 01:36:58+00
            wal start/stop: 000000010000000000000006 / 000000010000000000000006
            database size: 44.5MB, database backup size: 44.5MB
            repo1: backup size: 8.7MB

        diff backup: 20250715-013657F_20250715-013724D
            timestamp start/stop: 2025-07-15 01:37:24+00 / 2025-07-15 01:37:26+00
            database size: 44.5MB, database backup size: 424.3KB
            repo1: backup size: 94KB
            backup reference total: 1 full

        incr backup: 20250715-013657F_20250715-013730I
            timestamp start/stop: 2025-07-15 01:37:30+00 / 2025-07-15 01:37:31+00
            database size: 44.5MB, database backup size: 8.3KB
            repo1: backup size: 504B
            backup reference total: 1 full, 1 diff
{{< /tab >}}
{{< /tabpane >}}

这里的 `stanza` 是数据库集群名称：[`pg_cluster`](/docs/pgsql/param#pg_cluster)，在默认配置中为 `pg-meta`。

Pigsty 提供了 `pb` 别名和 `pg-backup` 包装脚本，会自动填充当前集群名称作为 stanza：

```bash title="别名"
function pb() {
    local stanza=$(grep -o '\[[^][]*]' /etc/pgbackrest/pgbackrest.conf | head -n1 | sed 's/.*\[\([^]]*\)].*/\1/')
    pgbackrest --stanza=$stanza $@
}
pb ...    # pgbackrest --stanza=pg-meta ...
pb info   # pgbackrest --stanza=pg-meta info
pb backup # pgbackrest --stanza=pg-meta backup
```

```bash title="脚本"
pg-backup full   # 执行全量备份         = pgbackrest --stanza=pg-meta --type=full backup
pg-backup incr   # 执行增量备份         = pgbackrest --stanza=pg-meta --type=incr backup
pg-backup diff   # 执行差异备份         = pgbackrest --stanza=pg-meta --type=diff backup
```


--------

## 定时备份

Pigsty 利用 Linux crontab 来调度备份任务。您可以用它定义备份策略。

例如，大多数单节点配置模板都有以下用于备份的 [`node_crontab`](/docs/node/param#node_crontab)：

```yaml title="每天凌晨1点全量备份"
node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ]
```

您可以使用 crontab 和 `pg-backup` 脚本设计更复杂的备份策略，例如：

```yaml title="周一全量备份，工作日增量备份"
node_crontab:  # 周一凌晨1点全量备份，工作日增量备份
  - '00 01 * * 1 postgres /pg/bin/pg-backup full'
  - '00 01 * * 2,3,4,5,6,7 postgres /pg/bin/pg-backup'
```

要应用 crontab 变更，使用 [`node.yml`](/docs/node/playbook/#nodeyml) 更新所有节点的 crontab：

```bash title="应用 crontab"
./node.yml -t node_crontab -l pg-meta    # 将 crontab 变更应用到 pg-meta 组
```


--------

## pgbackrest

以下是 Pigsty 对 pgbackrest 的配置细节：

- pgbackrest 备份工具默认已启用并配置（[`pgbackrest_enabled`](/docs/pgsql/param/#pgbackrest_enabled)）
- 在 [`pgsql.yml`](/docs/pgsql/playbook/#pgsqlyml) 剧本的 `pg_install` 任务中安装，定义在 [`pg_packages`](/docs/pgsql/param/#pg_packages)
- 在 [`pgsql.yml`](/docs/pgsql/playbook/#pgsqlyml) 剧本的 `pg_backup` 任务中配置，参见 [参数：PG_BACKUP](/docs/pgsql/param/#pg_backup)
- 在 `pgbackrest_init` 任务中初始化备份仓库，如果仓库已存在会失败（错误可忽略）
- 在 `pgbackrest_backup` 任务中创建初始备份，由 [`pgbackrest_init_backup`](/docs/pgsql/param/#pgbackrest_init_backup) 控制

### 文件层次结构

- bin：`/usr/bin/pgbackrest`，来自 PGDG 的 `pgbackrest` 包，在组别名 `pgsql-common` 中。
- conf：`/etc/pgbackrest`，主配置文件是 [`/etc/pgbackrest/pgbackrest.conf`](https://github.com/pgsty/pigsty/blob/main/roles/pgsql/templates/pgbackrest.conf)。
- logs：`/pg/log/pgbackrest/*`，由 [`pgbackrest_log_dir`](/docs/pgsql/param/#pgbackrest_log_dir) 控制
- tmp：`/pg/spool` 用作 pgbackrest 的临时 spool 目录
- data：`/pg/backup` 用于存储数据（当选择默认的 `local` 文件系统备份仓库时）

此外，在 [PITR 恢复](/docs/pgsql/backup/restore) 过程中，Pigsty 会创建临时的 `/pg/conf/pitr.conf` pgbackrest 配置文件，
并将 postgres 恢复日志写入 `/pg/tmp/recovery.log` 文件。

### 监控

有一个 `pgbackrest_exporter` 服务运行在 [`pgbackrest_exporter_port`](/docs/pgsql/param/#pgbackrest_exporter_port)（`9854`）端口上，用于导出 pgbackrest 指标。
您可以通过 [`pgbackrest_exporter_options`](/docs/pgsql/param/#pgbackrest_exporter_options) 自定义它，
或将 [`pgbackrest_exporter_enabled`](/docs/pgsql/param/#pgbackrest_exporter_enabled) 设置为 `false` 来禁用它。

### 初始备份

当创建 postgres 集群时，Pigsty 会自动创建初始备份。
由于新集群几乎为空，这是一个很小的备份。
它会留下一个 `/etc/pgbackrest/initial.done` 标记文件，以避免重复创建初始备份。
如果不需要初始备份，请将 [`pgbackrest_init_backup`](/docs/pgsql/param/#pgbackrest_init_backup) 设置为 `false`。


--------

## 管理

### 启用备份

如果数据库集群创建时 [`pgbackrest_enabled`](/docs/pgsql/param/#pgbackrest_enabled) 设置为 `true`，备份将自动启用。

如果创建时该值为 `false`，您可以使用以下命令启用 pgbackrest 组件：

```bash
./pgsql.yml -t pg_backup    # 运行 pgbackrest 子任务
```

### 删除备份

当移除主实例（[`pg_role`](/docs/pgsql/param/#pg_role) = `primary`）时，Pigsty 会删除 pgbackrest 备份 stanza。

```bash
./pgsql-rm.yml
./pgsql-rm.yml -e pg_rm_backup=false   # 保留备份
./pgsql-rm.yml -t pg_backup            # 仅删除备份
```

使用 `pg_backup` 子任务仅删除备份，使用 [`pg_rm_backup`](/docs/pgsql/param/#pg_rm_backup) 参数（设为 `false`）保留备份。

如果您的备份仓库被**锁定**（例如 S3 / MinIO 有锁定选项），此操作将失败。

{{% alert color="warning" title="备份删除" %}}
删除备份可能导致永久性数据丢失，这是一个危险操作，请务必谨慎。
{{% /alert %}}


### 列出备份

此命令将列出 pgbackrest 仓库中的所有备份（所有集群共享）

```bash
pgbackrest info
````

### 手动备份

Pigsty 提供了内置脚本 `/pg/bin/pg-backup`，封装了 `pgbackrest` 备份命令。

```bash
pg-backup        # 执行增量备份
pg-backup full   # 执行全量备份
pg-backup incr   # 执行增量备份
pg-backup diff   # 执行差异备份
```

### 基础备份

Pigsty 提供了一个替代备份脚本 `/pg/bin/pg-basebackup`，它不依赖 `pgbackrest`，直接提供数据库集群的物理副本。
默认备份目录为 `/pg/backup`。

{{< tabpane persist="disabled" >}}
{{% tab header="pg-basebackup" disabled=true /%}}
{{< tab header="help" lang="bash" >}}
NAME
  pg-basebackup  -- make base backup from PostgreSQL instance

SYNOPSIS
  pg-basebackup -sdfeukr
  pg-basebackup --src postgres:/// --dst . --file backup.tar.lz4

DESCRIPTION
-s, --src, --url     备份源 URL，可选，默认为 "postgres:///"，如需密码应在 url、ENV 或 .pgpass 中提供
-d, --dst, --dir     备份文件存放位置，默认为 "/pg/backup"
-f, --file           覆盖默认备份文件名，"backup_${tag}_${date}.tar.lz4"
-r, --remove         删除 n 分钟前的 .lz4 文件，默认 1200（20小时）
-t, --tag            备份文件标签，未设置时使用目标集群名或本地 IP 地址，也用于默认文件名
-k, --key            指定 --encrypt 时的加密密钥，默认密钥为 ${tag}
-u, --upload         上传备份文件到云存储（需自行实现）
-e, --encryption     使用 OpenSSL RC4 加密，未指定密钥时使用 tag 作为密钥
-h, --help           打印此帮助信息
{{< /tab >}}
{{< tab header="backup" lang="bash" >}}
postgres@pg-meta-1:~$ pg-basebackup
[2025-07-13 06:16:05][INFO] ================================================================
[2025-07-13 06:16:05][INFO] [INIT] pg-basebackup begin, checking parameters
[2025-07-13 06:16:05][DEBUG] [INIT] filename  (-f)    :   backup_pg-meta_20250713.tar.lz4
[2025-07-13 06:16:05][DEBUG] [INIT] src       (-s)    :   postgres:///
[2025-07-13 06:16:05][DEBUG] [INIT] dst       (-d)    :   /pg/backup
[2025-07-13 06:16:05][INFO] [LOCK] lock acquired success on /tmp/backup.lock, pid=107417
[2025-07-13 06:16:05][INFO] [BKUP] backup begin, from postgres:/// to /pg/backup/backup_pg-meta_20250713.tar.lz4
pg_basebackup: initiating base backup, waiting for checkpoint to complete
pg_basebackup: checkpoint completed
pg_basebackup: write-ahead log start point: 0/7000028 on timeline 1
pg_basebackup: write-ahead log end point: 0/7000FD8
pg_basebackup: syncing data to disk ...
pg_basebackup: base backup completed
[2025-07-13 06:16:06][INFO] [BKUP] backup complete!
[2025-07-13 06:16:06][INFO] [DONE] backup procedure complete!
[2025-07-13 06:16:06][INFO] ================================================================
{{< /tab >}}
{{< /tabpane >}}

备份使用 `lz4` 压缩。您可以使用以下命令解压并提取 tarball：

```bash
mkdir -p /tmp/data   # 将备份提取到此目录
cat /pg/backup/backup_pg-meta_20250713.tar.lz4 | unlz4 -d -c | tar -xC /tmp/data
```

### 逻辑备份

您也可以使用 `pg_dump` 命令执行逻辑备份。

逻辑备份不能用于 PITR（时间点恢复），但对于在不同主版本之间迁移数据或实现灵活的数据导出逻辑非常有用。


### 从仓库引导

假设您有一个现有集群 `pg-meta`，想要将其**克隆**为 `pg-meta2`：

您需要创建新的 `pg-meta2` 集群分支，然后在其上运行 `pitr`。

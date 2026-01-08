---
title: 管理命令
weight: 1704
description: 管理备份仓库和备份
icon: fa-solid fa-terminal
categories: [任务]
---


## 启用备份

如果数据库集群创建时 [`pgbackrest_enabled`](/docs/pgsql/param/#pgbackrest_enabled) 设置为 `true`，备份将自动启用。

如果创建时该值为 `false`，您可以使用以下命令启用 pgbackrest 组件：

```bash
./pgsql.yml -t pg_backup    # 运行 pgbackrest 子任务
```


--------

## 删除备份

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


--------

## 列出备份

此命令将列出 pgbackrest 仓库中的所有备份（所有集群共享）

```bash
pgbackrest info
````


--------

## 手动备份

Pigsty 提供了内置脚本 `/pg/bin/pg-backup`，封装了 `pgbackrest` 备份命令。

```bash
pg-backup        # 执行增量备份
pg-backup full   # 执行全量备份
pg-backup incr   # 执行增量备份
pg-backup diff   # 执行差异备份
```


--------

## 基础备份

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


--------

## 逻辑备份

您也可以使用 `pg_dump` 命令执行逻辑备份。

逻辑备份不能用于 PITR（时间点恢复），但对于在不同主版本之间迁移数据或实现灵活的数据导出逻辑非常有用。


--------

## 从仓库引导

假设您有一个现有集群 `pg-meta`，想要将其**克隆**为 `pg-meta2`：

您需要创建新的 `pg-meta2` 集群分支，然后在其上运行 `pitr`。

---
title: 备份仓库
weight: 1703
description: PostgreSQL 备份存储仓库配置
icon: fa-solid fa-box-archive
categories: [任务]
---


您可以通过指定 [`pgbackrest_repo`](/docs/pgsql/param/#pgbackrest_repo) 参数来配置备份**存储位置**。
您可以在此定义多个仓库，Pigsty 会根据 [`pgbackrest_method`](/docs/pgsql/param/#pgbackrest_method) 的值选择使用哪个。


## 默认仓库

默认情况下，Pigsty 提供两个默认备份仓库定义：`local` 和 `minio` 备份仓库。

- `local`：**默认选项**，使用本地 `/pg/backup` 目录（软链接指向 [`pg_fs_backup`](/docs/pgsql/param/#pg_fs_backup)：`/data/backups`）
- `minio`：使用 SNSD 单节点 MinIO 集群（Pigsty 支持，但默认不启用）

```yaml
pgbackrest_method: local          # 选择备份仓库方法：`local`、`minio` 或其他自定义仓库
pgbackrest_repo:                  # pgbackrest 仓库配置: https://pgbackrest.org/configuration.html#section-repository
  local:                          # 使用本地 POSIX 文件系统的默认 pgbackrest 仓库
    path: /pg/backup              # 本地备份目录，默认为 `/pg/backup`
    retention_full_type: count    # 按数量保留全量备份
    retention_full: 2             # 使用本地文件系统仓库时，保留2个，最多3个全量备份
  minio:                          # 可选的 minio 仓库
    type: s3                      # minio 兼容 S3 协议
    s3_endpoint: sss.pigsty       # minio 端点域名，默认为 `sss.pigsty`
    s3_region: us-east-1          # minio 区域，默认 us-east-1，对 minio 无实际意义
    s3_bucket: pgsql              # minio 桶名，默认为 `pgsql`
    s3_key: pgbackrest            # pgbackrest 的 minio 用户访问密钥
    s3_key_secret: S3User.Backup  # pgbackrest 的 minio 用户密钥
    s3_uri_style: path            # minio 使用路径风格 URI 而非主机风格
    path: /pgbackrest             # minio 备份路径，默认为 `/pgbackrest`
    storage_port: 9000            # minio 端口，默认 9000
    storage_ca_file: /etc/pki/ca.crt  # minio CA 证书路径，默认 `/etc/pki/ca.crt`
    block: y                      # 启用块级增量备份
    bundle: y                     # 将小文件打包成单个文件
    bundle_limit: 20MiB           # 文件包大小限制，对象存储建议 20MiB
    bundle_size: 128MiB           # 文件包目标大小，对象存储建议 128MiB
    cipher_type: aes-256-cbc      # 为远程备份仓库启用 AES 加密
    cipher_pass: pgBackRest       # AES 加密密码，默认为 'pgBackRest'
    retention_full_type: time     # 按时间保留全量备份
    retention_full: 14            # 保留最近 14 天的全量备份
```


--------

## 仓库保留策略

如果每天备份但不删除旧备份，备份仓库会不断增长并耗尽磁盘空间。
您需要定义保留策略，只保留有限数量的备份。

默认备份策略定义在 [`pgbackrest_repo`](/docs/pgsql/param/#pgbackrest_repo) 参数中，可按需调整。

- `local`：保留最近 **2** 个全量备份，备份期间最多允许 3 个
- `minio`：保留最近 **14** 天的所有全量备份


--------

## 空间规划

对象存储提供几乎无限的存储容量，因此无需担心磁盘空间。
您可以使用混合的全量 + 差异备份策略来优化空间使用。

对于本地磁盘备份仓库，Pigsty 建议使用保留最近 **2** 个全量备份的策略，
这意味着磁盘上保留两个最新的全量备份（运行新备份时可能存在第三个副本）。

这可保证至少 24 小时的恢复窗口。详情请参阅 [备份策略](policy)。


--------

## 其他仓库选项

您也可以使用其他服务作为备份仓库，详情请参阅 [pgbackrest 文档](https://pgbackrest.org/user-guide.html)：

- [S3 兼容对象存储](https://pgbackrest.org/user-guide.html#s3-support)
- [Azure 兼容对象存储](https://pgbackrest.org/user-guide.html#azure-support)
- [GCS 兼容对象存储](https://pgbackrest.org/user-guide.html#gcs-support)
- [SFTP 支持](https://pgbackrest.org/user-guide.html#sftp-support)


--------

## 仓库版本控制

您甚至可以指定 [repo target time](https://pgbackrest.org/user-guide.html#sftp-support#repo-target-time) 来获取对象存储的快照。

您可以通过在 [`minio_buckets`](/docs/minio/param#minio_buckets) 中添加 `versioning` 标志来启用 MinIO 版本控制：

```yaml
minio_buckets:
  - { name: pgsql ,versioning: true }
  - { name: meta  ,versioning: true }
  - { name: data }
```


--------

## 仓库锁定

某些对象存储服务（S3、MinIO 等）支持**锁定**功能，可以防止备份被删除，即使是 DBA 本人也无法删除。

- [MinIO 对象锁定](https://min.io/docs/minio/linux/administration/object-management/object-retention.html)
- [AWS S3：使用 Object Lock 锁定对象](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)

您可以通过在 [`minio_buckets`](/docs/minio/param#minio_buckets) 中添加 `lock` 标志来启用 MinIO 锁定功能：

```yaml
minio_buckets:
  - { name: pgsql , lock: true }
  - { name: meta ,versioning: true  }
  - { name: data }
```


--------

## 使用对象存储

对象存储服务提供几乎无限的存储容量，并为您的系统提供远程容灾能力。
如果您没有对象存储服务，Pigsty 内置了 [MinIO](/docs/minio) 支持。

### MinIO

您可以通过取消注释以下设置来启用 MinIO 备份仓库。
请注意 pgbackrest 只支持 HTTPS / 域名，因此您必须使用域名和 HTTPS 端点运行 MinIO。

```yaml
all:
  vars:
    pgbackrest_method: minio      # 使用 minio 作为默认备份仓库
  children:                       # 定义一个单节点 minio SNSD 集群
    minio: { hosts: { 10.10.10.10: { minio_seq: 1 }} ,vars: { minio_cluster: minio }}
```

### S3

如果您只有**一个**节点，有意义的备份策略可以是使用云厂商的对象存储服务，如 AWS S3、阿里云 OSS 或 Google Cloud 等。
为此，您可以定义一个新仓库：

```yaml
pgbackrest_method: s3             # 使用 'pgbackrest_repo.s3' 作为备份仓库
pgbackrest_repo:                  # pgbackrest 仓库配置: https://pgbackrest.org/configuration.html#section-repository

  s3:                             # 阿里云 OSS（S3 兼容）对象存储服务
    type: s3                      # oss 兼容 S3 协议
    s3_endpoint: oss-cn-beijing-internal.aliyuncs.com
    s3_region: oss-cn-beijing
    s3_bucket: <your_bucket_name>
    s3_key: <your_access_key>
    s3_key_secret: <your_secret_key>
    s3_uri_style: host
    path: /pgbackrest
    bundle: y                     # 将小文件打包成单个文件
    bundle_limit: 20MiB           # 文件包大小限制，对象存储建议 20MiB
    bundle_size: 128MiB           # 文件包目标大小，对象存储建议 128MiB
    cipher_type: aes-256-cbc      # 为远程备份仓库启用 AES 加密
    cipher_pass: pgBackRest       # AES 加密密码，默认为 'pgBackRest'
    retention_full_type: time     # 按时间保留全量备份
    retention_full: 14            # 保留最近 14 天的全量备份

  local:                          # 使用本地 POSIX 文件系统的默认 pgbackrest 仓库
    path: /pg/backup              # 本地备份目录，默认为 `/pg/backup`
    retention_full_type: count    # 按数量保留全量备份
    retention_full: 2             # 使用本地文件系统仓库时，保留2个，最多3个全量备份
```


--------

## 管理备份

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

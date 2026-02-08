---
title: 备份策略
weight: 1701
description: 根据您的需求设计备份策略
icon: fa-solid fa-clipboard-list
categories: [任务]
---


- **何时**：备份策略
- **何处**：备份仓库
- **如何**：备份方法


--------

## 何时备份

第一个问题是**何时**备份您的数据库——这是备份频率和恢复时间之间的权衡。
由于您需要从上一次备份开始重放 WAL 日志到恢复目标点，备份越频繁，需要重放的 WAL 日志就越少，恢复速度就越快。


### 每日全量备份

对于生产数据库，建议从最简单的每日全量备份策略开始。
这也是 Pigsty 的默认备份策略，通过 [crontab](/docs/pgsql/backup/mechanism#定时备份) 实现。

```yaml title="每天凌晨1点全量备份"
node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ]
pgbackrest_method: local          # 选择备份仓库方法：`local`、`minio` 或其他自定义仓库
pgbackrest_repo:                  # pgbackrest 仓库配置: https://pgbackrest.org/configuration.html#section-repository
  local:                          # 使用本地 POSIX 文件系统的默认 pgbackrest 仓库
    path: /pg/backup              # 本地备份目录，默认为 `/pg/backup`
    retention_full_type: count    # 按数量保留全量备份
    retention_full: 2             # 使用本地文件系统仓库时，保留2个，最多3个全量备份
```

配合默认的 `local` 本地文件系统备份仓库使用时，可提供 24~48 小时的恢复窗口。

![pitr-scope](/img/pigsty/pitr-scope.png)

假设您的数据库大小为 100GB，每天写入 10GB 数据，则备份大小如下：

![pitr-space](/img/pigsty/pitr-space.png)

这将消耗数据库大小的 `2~3` 倍空间，再加上 2 天的 WAL 日志。
因此在实践中，您可能需要准备至少 `3~5` 倍数据库大小的备份磁盘才能使用默认备份策略。


### 全量 + 增量备份

您可以通过调整这些参数来优化备份空间使用。

如果使用 MinIO / S3 作为集中式备份仓库，您可以使用超出本地磁盘限制的存储空间。
此时可以考虑使用全量 + 增量备份配合 2 周保留策略：

```yaml
node_crontab:  # 周一凌晨1点全量备份，工作日增量备份
  - '00 01 * * 1 postgres /pg/bin/pg-backup full'
  - '00 01 * * 2,3,4,5,6,7 postgres /pg/bin/pg-backup'
pgbackrest_method: minio
pgbackrest_repo:                  # pgbackrest 仓库配置: https://pgbackrest.org/configuration.html#section-repository
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

配合内置的 `minio` 备份仓库使用时，可提供保证 1 周的 PITR 恢复窗口。

![pitr-scope2](/img/pigsty/pitr-scope2.png)

假设您的数据库大小为 100GB，每天写入 10GB 数据，则备份大小如下：

![pitr-space2](/img/pigsty/pitr-space2.png)


--------

## 备份位置

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

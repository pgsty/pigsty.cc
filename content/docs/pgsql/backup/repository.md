---
title: 备份仓库
weight: 1703
description: 配置备份存储仓库：本地磁盘、MinIO 与 S3 对象存储，保留策略、加密、版本控制与对象锁定。
icon: fa-solid fa-box-archive
categories: [任务]
---

备份存储在哪里，由两个参数决定：[**`pgbackrest_repo`**](/docs/pgsql/param/#pgbackrest_repo) 定义所有候选仓库，
[**`pgbackrest_method`**](/docs/pgsql/param/#pgbackrest_method) 选择实际使用哪一个。
仓库定义中的键值会 [**按固定规则**](/docs/pgsql/backup/mechanism/#配置如何渲染) 渲染为 pgbackrest 的 `repo1-*` 配置项，
因此 [**pgBackRest 支持的任何仓库选项**](/docs/pgbackrest/configuration) 都可以直接写入。


--------

## 默认仓库

Pigsty 预置了两个仓库定义：`local` 与 `minio`。

- `local`：**默认选项**，使用本地 `/pg/backup` 目录（软链接指向 [**`pg_fs_backup`**](/docs/pgsql/param/#pg_fs_backup)：`/data/backups`）
- `minio`：使用专用 MinIO 集群或任意 S3 兼容对象存储（Pigsty 支持，默认不启用）

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

两套仓库的预置策略有意不同：`local` 不加密、不打包、按份数保留，追求简单与恢复速度；
`minio` 加密（AES-256-CBC）、打包（bundle）、块级增量（block）、按时间保留两周，面向生产容灾。

{{% alert color="warning" title="生产环境请修改默认密码" %}}
使用远程仓库时，请务必修改默认的 `cipher_pass` 加密密码与 `s3_key_secret` 访问密钥。
加密密码一旦遗失，仓库中的备份将无法解密恢复 —— 请妥善保管。
{{% /alert %}}


--------

## 保留策略

如果只备份不清理，仓库迟早被撑爆。保留策略在仓库定义中声明，由 pgBackRest 在每次备份后自动执行清理
（全量备份过期时，依附它的差异/增量备份与对应 WAL 归档一并清除）：

- `retention_full_type: count` + `retention_full: 2`：按份数保留 —— 保留最近 2 个全量备份（新备份完成前短暂存在第 3 个）
- `retention_full_type: time` + `retention_full: 14`：按时间保留 —— 保留最近 14 天内的全量备份

保留策略与恢复窗口、空间占用的量化关系，请参阅 [**备份策略**](/docs/pgsql/backup/policy/)；
手动清理过期备份的方法，请参阅 [**管理命令**](/docs/pgsql/backup/admin/#清理过期备份)。


--------

## 使用 MinIO 仓库

[**MinIO**](/docs/minio) 是 Pigsty 内置支持的 S3 兼容对象存储，作为集中备份仓库使用时，
为备份提供独立于数据库主机的故障域。启用方式：部署 MinIO 集群，然后将备份方法切换为 `minio`：

```yaml
all:
  vars:
    pgbackrest_method: minio      # 使用 minio 作为默认备份仓库
  children:                       # 定义一个单节点 minio SNSD 集群
    minio: { hosts: { 10.10.10.10: { minio_seq: 1 }} ,vars: { minio_cluster: minio }}
```

注意：pgbackrest 只支持通过 **HTTPS 与域名** 访问对象存储，因此 MinIO 必须以域名（默认 `sss.pigsty`）
和 HTTPS 端点提供服务 —— Pigsty 的默认配置已用自签名 CA（`/etc/pki/ca.crt`）打通这条链路。
默认的 `pgsql` 桶与 `pgbackrest` 访问用户在 MinIO 集群初始化时自动创建。

对于严肃的生产部署，建议使用多节点 MinIO 集群（MNMD，纠删码容错），参阅 [**MinIO 配置**](/docs/minio)。


--------

## 使用 S3 / 云对象存储

如果您只有一个节点，最有意义的备份策略就是使用云厂商的对象存储服务（AWS S3、阿里云 OSS 等），
以极低的成本获得异地容灾能力。定义一个新仓库并切换过去即可：

```yaml
pgbackrest_method: s3             # 使用 'pgbackrest_repo.s3' 作为备份仓库
pgbackrest_repo:                  # pgbackrest 仓库配置: https://pgbackrest.org/configuration.html#section-repository

  s3:                             # 阿里云 OSS（S3 兼容）对象存储服务示例
    type: s3                      # oss 兼容 S3 协议
    s3_endpoint: oss-cn-beijing-internal.aliyuncs.com
    s3_region: oss-cn-beijing
    s3_bucket: <your_bucket_name>
    s3_key: <your_access_key>
    s3_key_secret: <your_secret_key>
    s3_uri_style: host            # 云厂商对象存储通常使用主机风格 URI
    path: /pgbackrest
    bundle: y                     # 将小文件打包成单个文件
    bundle_limit: 20MiB           # 文件包大小限制，对象存储建议 20MiB
    bundle_size: 128MiB           # 文件包目标大小，对象存储建议 128MiB
    cipher_type: aes-256-cbc      # 为远程备份仓库启用 AES 加密
    cipher_pass: pgBackRest       # AES 加密密码，务必修改！
    retention_full_type: time     # 按时间保留全量备份
    retention_full: 14            # 保留最近 14 天的全量备份

  local:                          # 保留默认本地仓库定义，便于随时切换
    path: /pg/backup
    retention_full_type: count
    retention_full: 2
```

除 S3 兼容存储外，pgBackRest 还支持以下后端，配置方式参阅官方用户指南：

- [Azure 兼容对象存储](https://pgbackrest.org/user-guide.html#azure-support)
- [GCS 兼容对象存储](https://pgbackrest.org/user-guide.html#gcs-support)
- [SFTP 远程文件系统](https://pgbackrest.org/user-guide.html#sftp-support)


--------

## 多集群共享仓库

一个集中式仓库可以同时服务多套 PostgreSQL 集群：pgBackRest 用 [**stanza**](/docs/pgsql/backup/mechanism/#stanza集群的备份身份)
（即 [**`pg_cluster`**](/docs/pgsql/param#pg_cluster)）隔离各集群的备份与归档，互不干扰。
这也是 [**克隆集群**](/docs/pgsql/backup/cluster/) 的基础 —— 新集群可以直接从共享仓库中读取源集群的备份进行恢复。

因此，请确保同一仓库下的集群名称 **全局唯一**，即使它们分属不同的部署环境。


--------

## 仓库版本控制

对象存储的 **版本控制**（Versioning）为仓库提供了"备份的备份"：即使备份文件被覆盖或删除，历史版本仍可找回。
您可以在 [**`minio_buckets`**](/docs/minio/param#minio_buckets) 中为桶添加 `versioning` 标志启用：

```yaml
minio_buckets:
  - { name: pgsql ,versioning: true }
  - { name: meta  ,versioning: true }
  - { name: data }
```

配合 pgBackRest 的 [**`repo-target-time`**](https://pgbackrest.org/user-guide.html#repo-target-time) 选项，
甚至可以把整个仓库"回滚"到过去某一时刻的状态读取 —— 相当于对备份系统本身做时间点恢复。


--------

## 仓库锁定

部分对象存储（S3、MinIO 等）支持 **对象锁定**（Object Lock / WORM）：写入后在保留期内不可修改、不可删除 ——
即使攻击者拿到了数据库主机与备份凭据的完整权限，也无法销毁已有备份。这是对抗勒索攻击的关键防线。

- [MinIO 对象锁定](https://min.io/docs/minio/linux/administration/object-management/object-retention.html)
- [AWS S3：使用 Object Lock 锁定对象](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)

在 [**`minio_buckets`**](/docs/minio/param#minio_buckets) 中添加 `lock` 标志即可启用 MinIO 锁定：

```yaml
minio_buckets:
  - { name: pgsql ,lock: true }
  - { name: meta  ,versioning: true }
  - { name: data }
```

注意：锁定的仓库同样会拒绝 **您自己** 的删除操作 —— [**移除集群备份**](/docs/pgsql/backup/admin/#移除备份)
在锁定仓库上会失败，这正是它的设计目的。


--------

## 切换仓库

变更仓库定义或切换 `pgbackrest_method` 后，需要重新渲染配置、初始化 stanza，并尽快建立新仓库中的恢复起点：

```bash
./pgsql.yml -t pg_backup -l pg-meta   # 重新配置 pgbackrest 并创建 stanza
pg-backup full                        # 立即执行全量备份，建立新仓库中的第一个恢复点
```

旧仓库中的备份不会自动迁移，但在其保留期内仍可作为恢复来源使用（通过 [**`pg_pitr.repo`**](/docs/pgsql/backup/restore/#pitr-参数定义) 指定）。

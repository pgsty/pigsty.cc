---
title: 时间点恢复
weight: 210
description: Pigsty 使用 pgBackRest 实现了 PostgreSQL 时间点恢复，允许用户回滚至备份策略容许范围内的任意时间点。
icon: fa-solid fa-clock-rotate-left
module: [PGSQL]
categories: [概念]
---


> 当您不小心删除了数据、表、甚至整个数据库时，PITR 能力让您回到过去任意时刻，避免软件缺陷与人为失误导致的数据损失。
>
> —— 这个曾经只有资深 DBA 才能施展的『魔法』，现在对所有用户都可以轻松做到零配置开箱即用。

------

## 概览

Pigsty 的 PostgreSQL 集群带有自动配置的时间点恢复（PITR）方案，基于 [**pgBackRest**](https://pgbackrest.org/) 与可选的对象存储仓库 [**MinIO**](https://min.io/) 提供。

[**高可用方案**](/docs/concept/ha) 可以解决硬件故障，但却对软件缺陷与人为失误导致的数据删除/覆盖写入/删库等问题却无能为力。
对于这种情况，Pigsty 提供了开箱即用的 **时间点恢复**（Point in Time Recovery, PITR）能力，无需额外配置即默认启用。

Pigsty 为您提供了基础备份与 WAL 归档的默认配置，您可以使用本地目录与磁盘，亦或专用的 MinIO 集群或 S3 对象存储服务来存储备份并实现异地容灾。
当您使用本地磁盘时，默认保留恢复至过去一天内的任意时间点的能力。当您使用 MinIO 或 S3 时，默认保留恢复至过去一周内的任意时间点的能力。
只要存储空间管够，您尽可保留任意长地可恢复时间段，丰俭由人。

------

### 时间点恢复解决什么问题？

* 容灾能⼒增强：**RPO** 从 ∞ 降⾄ ⼗⼏MB， **RTO** 从 ∞ 降⾄ ⼏⼩时/⼏刻钟。
* 确保数据安全：C/I/A 中的 **数据完整性**：避免误删导致的数据⼀致性问题。
* 确保数据安全：C/I/A 中的 **数据可⽤性**：提供对“永久不可⽤”这种灾难情况的兜底

| 单实例配置策略                                                                                                               | 事件 | RTO                                                                             | RPO                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------|:--:|---------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| <i class="fa-solid fa-music text-danger"></i> 什么也不做                                                                   | 宕机 | <i class="fas fa-circle-xmark text-danger"></i> **永久丢失**                        | <i class="fas fa-circle-xmark text-danger"></i> **全部丢失**                             |
| <i class="fa-solid fa-copy text-secondary"></i> 基础备份                                                                  | 宕机 | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 取决于备份大小与带宽（几小时） | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 丢失上一次备份后的数据（几个小时到几天） |
| <i class="fa-solid fa-copy text-primary"></i> 基础备份 + <i class="fa-solid fa-clock-rotate-left text-primary"></i> WAL归档 | 宕机 | <i class="fa-solid fa-triangle-exclamation text-primary"></i> 取决于备份大小与带宽（几小时）   | <i class="fa-solid fa-triangle-exclamation text-primary"></i> 丢失最后尚未归档的数据（几十MB）      |
{.full-width}


### 时间点恢复有什么代价？

* 降低数据安全中的 C：**机密性**，产生额外泄漏点，需要额外对备份进⾏保护。
* 额外的资源消耗：本地存储或⽹络流量 / 带宽开销，通常并不是⼀个问题。
* 复杂度代价升⾼：⽤户需要付出备份管理成本。

### 时间点恢复的局限性

如果只有 PITR 用于故障恢复，则 RTO 与 RPO 指标相比 [**高可用方案**](/docs/concept/ha/) 更为逊色，通常应两者组合使用。

* **RTO**：如果只有单机 + PITR，恢复时长取决于备份大小与网络/磁盘带宽，从十几分钟到几小时，几天不等。
* **RPO**：如果只有单机 + PITR，宕机时可能丢失少量数据，一个或几个 WAL 日志段文件可能尚未归档，损失 16 MB 到⼏⼗ MB 不等的数据。

除了 [**PITR**](/docs/concept/pitr) 之外，您还可以在 Pigsty 中使用 [**延迟集群**](/docs/pgsql/config/cluster#延迟集群) 来解决人为失误或软件缺陷导致的数据误删误改问题。




----------------

## 原理

时间点恢复允许您将集群恢复回滚至过去的“任意时刻”，避免软件缺陷与人为失误导致的数据损失。要做到这一点，首先需要做好两样准备工作：[**基础备份**](#基础备份) 与 [**WAL归档**](#wal归档)。
拥有 **基础备份**，允许用户将数据库恢复至备份时的状态，而同时拥有从某个基础备份开始的 **WAL归档**，允许用户将数据库恢复至基础备份时刻之后的任意时间点。

详细原理，请参阅：[**基础备份与时间点恢复**](/blog/pg/backup-overview/)；具体操作，请参考 [**PGSQL管理：备份恢复**](/docs/pgsql/backup/)。

### 基础备份

Pigsty 使用 pgbackrest 管理 PostgreSQL 备份。pgBackRest 将在所有集群实例上初始化空仓库，但只会在集群主库上实际使用仓库。

pgBackRest 支持三种备份模式：**全量备份**，**增量备份**，差异备份，其中前两者最为常用。
全量备份将对数据库集群取一个当前时刻的全量物理快照，增量备份会记录当前数据库集群与上一次全量备份之间的差异。

Pigsty 为备份提供了封装命令：`/pg/bin/pg-backup [full|incr]`。您可以通过 Crontab 或任何其他任务调度系统，按需定期制作基础备份。


### WAL归档

Pigsty 默认在集群主库上启⽤了 WAL 归档，并使⽤ `pgbackrest` 命令行工具持续推送 WAL 段⽂件至备份仓库。

pgBackRest 会⾃动管理所需的 WAL ⽂件，并根据备份的保留策略及时清理过期的备份，与其对应的 WAL 归档⽂件。

如果您不需要 PITR 功能，可以通过 [**配置集群**](/docs/pgsql/admin/cluster#配置集群)： `archive_mode: off` 来关闭 WAL 归档，移除 [`node_crontab`](/docs/node/param#node_crontab) 来停止定期备份任务。




----------------

## 实现

默认情况下，Pigsty提供了两种预置 [备份策略](/docs/pgsql/backup/policy)：默认使用本地文件系统备份仓库，在这种情况下每天进行一次全量备份，确保用户任何时候都能回滚至一天内的任意时间点。备选策略使用专用的 MinIO 集群或S3存储备份，每周一全备，每天一增备，默认保留两周的备份与WAL归档。

Pigsty 使用 pgBackRest 管理备份，接收 WAL 归档，执行 PITR。备份仓库可以进行灵活配置（[`pgbackrest_repo`](/docs/pgsql/param#pgbackrest_repo)）：默认使用主库本地文件系统（`local`），但也可以使用其他磁盘路径，或使用自带的可选 [MinIO](/docs/minio) 服务（`minio`）与云上 S3 服务。

```yaml
pgbackrest_enabled: true          # 在 pgsql 主机上启用 pgBackRest 吗？
pgbackrest_clean: true            # 初始化时删除 pg 备份数据？
pgbackrest_log_dir: /pg/log/pgbackrest # pgbackrest 日志目录，默认为 `/pg/log/pgbackrest`
pgbackrest_method: local          # pgbackrest 仓库方法：local, minio, [用户定义...]
pgbackrest_repo:                  # pgbackrest 仓库：https://pgbackrest.org/configuration.html#section-repository
  local:                          # 默认使用本地 posix 文件系统的 pgbackrest 仓库
    path: /pg/backup              # 本地备份目录，默认为 `/pg/backup`
    retention_full_type: count    # 按计数保留完整备份
    retention_full: 2             # 使用本地文件系统仓库时，最多保留 3 个完整备份，至少保留 2 个
  minio:                          # pgbackrest 的可选 minio 仓库
    type: s3                      # minio 是与 s3 兼容的，所以使用 s3
    s3_endpoint: sss.pigsty       # minio 端点域名，默认为 `sss.pigsty`
    s3_region: us-east-1          # minio 区域，默认为 us-east-1，对 minio 无效
    s3_bucket: pgsql              # minio 桶名称，默认为 `pgsql`
    s3_key: pgbackrest            # pgbackrest 的 minio 用户访问密钥
    s3_key_secret: S3User.Backup  # pgbackrest 的 minio 用户秘密密钥
    s3_uri_style: path            # 对 minio 使用路径风格的 uri，而不是主机风格
    path: /pgbackrest             # minio 备份路径，默认为 `/pgbackrest`
    storage_port: 9000            # minio 端口，默认为 9000
    storage_ca_file: /etc/pki/ca.crt  # minio ca 文件路径，默认为 `/etc/pki/ca.crt`
    bundle: y                     # 将小文件打包成一个文件
    cipher_type: aes-256-cbc      # 为远程备份仓库启用 AES 加密
    cipher_pass: pgBackRest       # AES 加密密码，默认为 'pgBackRest'
    retention_full_type: time     # 在 minio 仓库上按时间保留完整备份
    retention_full: 14            # 保留过去 14 天的完整备份
  # 您还可以添加其他的可选备份仓库，例如 S3，用于异地容灾
```

Pigsty 参数 [`pgbackrest_repo`](/docs/pgsql/param#pgbackrest_repo) 中的目标仓库会被转换为 `/etc/pgbackrest/pgbackrest.conf` 配置文件中的仓库定义。
例如，如果您定义了一个美西区的 S3 仓库用于存储冷备份，可以使用下面的参考配置。

```yaml
s3:    # ------> /etc/pgbackrest/pgbackrest.conf
  repo1-type: s3                                   # ----> repo1-type=s3
  repo1-s3-region: us-west-1                       # ----> repo1-s3-region=us-west-1
  repo1-s3-endpoint: s3-us-west-1.amazonaws.com    # ----> repo1-s3-endpoint=s3-us-west-1.amazonaws.com
  repo1-s3-key: '<your_access_key>'                # ----> repo1-s3-key=<your_access_key>
  repo1-s3-key-secret: '<your_secret_key>'         # ----> repo1-s3-key-secret=<your_secret_key>
  repo1-s3-bucket: pgsql                           # ----> repo1-s3-bucket=pgsql
  repo1-s3-uri-style: host                         # ----> repo1-s3-uri-style=host
  repo1-path: /pgbackrest                          # ----> repo1-path=/pgbackrest
  repo1-bundle: y                                  # ----> repo1-bundle=y
  repo1-cipher-type: aes-256-cbc                   # ----> repo1-cipher-type=aes-256-cbc
  repo1-cipher-pass: pgBackRest                    # ----> repo1-cipher-pass=pgBackRest
  repo1-retention-full-type: time                  # ----> repo1-retention-full-type=time
  repo1-retention-full: 90                         # ----> repo1-retention-full=90
```


----------------

## 恢复

您可以直接使用以下封装命令可以用于 PostgreSQL 数据库集群的 [时间点恢复](https://pgbackrest.org/command.html#command-restore)。

Pigsty 默认使用增量差分并行恢复，允许您以最快速度恢复到指定时间点。

```bash
pg-pitr                                 # 恢复到WAL存档流的结束位置（例如在整个数据中心故障的情况下使用）
pg-pitr -i                              # 恢复到最近备份完成的时间（不常用）
pg-pitr --time="2022-12-30 14:44:44+08" # 恢复到指定的时间点（在删除数据库或表的情况下使用）
pg-pitr --name="my-restore-point"       # 恢复到使用 pg_create_restore_point 创建的命名恢复点
pg-pitr --lsn="0/7C82CB8" -X            # 在LSN之前立即恢复
pg-pitr --xid="1234567" -X -P           # 在指定的事务ID之前立即恢复，然后将集群直接提升为主库
pg-pitr --backup=latest                 # 恢复到最新的备份集
pg-pitr --backup=20221108-105325        # 恢复到特定备份集，备份集可以使用 pgbackrest info 列出

pg-pitr                                 # pgbackrest --stanza=pg-meta restore
pg-pitr -i                              # pgbackrest --stanza=pg-meta --type=immediate restore
pg-pitr -t "2022-12-30 14:44:44+08"     # pgbackrest --stanza=pg-meta --type=time --target="2022-12-30 14:44:44+08" restore
pg-pitr -n "my-restore-point"           # pgbackrest --stanza=pg-meta --type=name --target=my-restore-point restore
pg-pitr -b 20221108-105325F             # pgbackrest --stanza=pg-meta --type=name --set=20221230-120101F restore
pg-pitr -l "0/7C82CB8" -X               # pgbackrest --stanza=pg-meta --type=lsn --target="0/7C82CB8" --target-exclusive restore
pg-pitr -x 1234567 -X -P                # pgbackrest --stanza=pg-meta --type=xid --target="0/7C82CB8" --target-exclusive --target-action=promote restore
```

在执行 PITR 时，您可以使用 Pigsty 监控系统观察集群 LSN 位点状态，判断是否成功恢复到指定的时间点，事务点，LSN位点，或其他点位。

![pitr](/img/docs/concept/pitr.png)


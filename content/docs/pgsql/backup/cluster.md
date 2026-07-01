---
title: 克隆数据库集群
weight: 1707
description: 如何利用 PITR 创建一个新的 PostgreSQL 集群，并恢复到指定时间点？
icon: fa-solid fa-rotate-left
categories: [任务]
---


## 快速上手

- 利用 Standby Cluster 创建现有集群的在线副本
- 利用 PITR 创建现有集群的时间点快照
- 在 PITR 完成后进行善后，确保新集群的备份流程正常运行

您可以使用 PG PITR 机制克隆整个数据库集群。



## 重置一个集群的状态

您也可以考虑创建一个全新的空集群，然后利用 PITR，将其重置为 `pg-meta` 集群的特定状态。

利用这种技术，您可以将现有集群 `pg-meta` 的任意时间点（备份保留期内）状态克隆到一个新的集群中。

我们依然以 Pigsty 4 节点沙箱环境为例，使用以下命令将 `pg-test` 集群重置为 `pg-meta` 集群的最新状态：

```bash
./pgsql-pitr.yml -l pg-test -e '{"pg_pitr": { "cluster": "pg-meta" }}'
```


## PITR 善后工作

当你使用 PITR 从其他集群恢复出一个新集群后，备份仓库中的 stanza 仍然可能记录着源集群的 system-id。
如果直接对新集群做备份，pgBackRest 会拒绝写入，避免污染源集群的备份历史。

因此，当你确认这个 PITR 恢复出来的新集群状态符合预期后，你需要执行以下善后工作。

- 升级备份仓库 Stanza，允许它接纳新集群的 system-id（仅当从别的集群恢复时）。
- 如果 PITR 时显式设置了 `archive: false`，重置 `archive_mode` 并重启集群。
- 执行一个新的全量备份，确保新集群的数据被纳入（可选，也可以等 crontab 定时执行）

```bash
pb stanza-upgrade
psql -c 'ALTER SYSTEM RESET archive_mode;'
pg restart <cls>       # 仅当 archive_mode 被关闭时需要
pg-backup full
```

通过这些操作，你的新集群将从第一次全量备份开始时，拥有自己的备份历史。
如果你跳过这些步骤，新集群本身的备份可能无法写入目标仓库；如果 PITR 时关闭了归档，也不会产生新的 WAL 归档。



## 不善后的后果

假设您在 `pg-test` 集群上执行了 PITR 恢复，使用了另外一个集群 `pg-meta` 的数据，但没有进行善后工作。

那么在下一次例行备份的时候，你会看到下面的错误：

```bash
postgres@pg-test-1:~$ pb backup
2025-12-27 10:20:29.336 P00   INFO: backup command begin 2.57.0: --annotation=pg_cluster=pg-test --compress-type=lz4 --delta --exec-id=21034-171fb30b --expire-auto --log-level-console=info --log-level-file=info --log-path=/pg/log/pgbackrest --pg1-path=/pg/data --pg1-port=5432 --repo1-block --repo1-bundle --repo1-bundle-limit=20MiB --repo1-bundle-size=128MiB --repo1-cipher-pass=<redacted> --repo1-cipher-type=aes-256-cbc --repo1-path=/pgbackrest --repo1-retention-full=14 --repo1-retention-full-type=time --repo1-s3-bucket=pgsql --repo1-s3-endpoint=sss.pigsty --repo1-s3-key=<redacted> --repo1-s3-key-secret=<redacted> --repo1-s3-region=us-east-1 --repo1-s3-uri-style=path --repo1-storage-ca-file=/etc/pki/ca.crt --repo1-storage-port=9000 --repo1-type=s3 --stanza=pg-test --start-fast
2025-12-27 10:20:29.357 P00  ERROR: [051]: PostgreSQL version 18, system-id 7588470953413201282 do not match stanza version 18, system-id 7588470974940466058
                                    HINT: is this the correct stanza?
2025-12-27 10:20:29.357 P00   INFO: backup command end: aborted with exception [051]
postgres@pg-test-1:~$
```

在完成 stanza 善后前，新集群的备份无法写入目标仓库；如果 PITR 时关闭了归档，也不会产生新的 WAL 归档。








## 克隆一个新集群

例如，假设您有一个集群 `pg-meta`，现在你想要从 `pg-meta` 克隆一个 `pg-meta2` 的新集群。

您可以考虑使用 [**备份集群**](/docs/pgsql/config/cluster#备份集群) 的方式创建一个新的集群 `pg-meta2`。

pgBackrest 支持增量备份/还原，因此如果您已经通过物理复制拉取了 `pg-meta` 的数据，通常增量 PITR 还原会非常快。


```bash

pb stop --force
pb stanza-delete --force
pb start
pb stanza-create
```


```bash
./pgsql-rm.yml -t pg_backup -l pg-test -e pg_rm_backup=true
./pgsql.yml    -t pg_backup -l pg-test
```


如果您想要将 `pg-test` 集群重置为 `pg-meta` 集群在 2025 年 12 月 26 日 15:30 的状态，可以使用以下命令：

```bash
./pgsql-pitr.yml -l pg-test -e '{"pg_pitr": { "cluster": "pg-meta", "time": "2025-12-27 17:50:00+08" ,archive: true }}'
```


当然，您也可以直接创建一个全新的集群，然后使用 `pgsql-pitr.yml` 剧本从 `pg-meta` 恢复数据到新集群 `pg-meta2` 并顶替新集群的数据目录。



使用这种技术，您不仅可以克隆 `pg-meta` 集群的最新状态，还可以克隆到任意时间点，例如：






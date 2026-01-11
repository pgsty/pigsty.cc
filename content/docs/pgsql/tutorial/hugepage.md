---
title: 为 PostgreSQL 集群启用 HugePage
linkTitle: 启用大页支持 
weight: 1708
description: 为 PostgreSQL 集群启用大页，减少大内存实例的页表开销并提高性能
icon: fa-solid fa-file-circle-plus
categories: [任务]
---



> 使用 `node_hugepage_count` 和 `node_hugepage_ratio` 或 `/pg/bin/pg-tune-hugepage`

如果你计划启用大页（HugePage），请考虑使用 [`node_hugepage_count`](/docs/node/param#node_hugepage_count) 和 [`node_hugepage_ratio`](/docs/node/param#node_hugepage_ratio)，并配合 `./node.yml -t node_tune` 进行应用。

大页对于数据库来说有利有弊，利是内存是专门管理的，不用担心被挪用，降低数据库 OOM 风险。缺点是某些场景下可能对性能由负面影响。

在 PostgreSQL 启动前，您需要分配 **足够多的** 大页，浪费的部分可以使用 `pg-tune-hugepage` 脚本对其进行回收，不过此脚本仅 PostgreSQL 15+ 可用。

如果你的 PostgreSQL 已经在运行，你可以使用下面的办法启动大页（仅 PG15+ 可用）：

```bash
sync; echo 3 > /proc/sys/vm/drop_caches   # 刷盘，释放系统缓存（请做好数据库性能受到冲击的准备）
sudo /pg/bin/pg-tune-hugepage             # 将 nr_hugepages 写入 /etc/sysctl.d/hugepage.conf
pg restart <cls>                          # 重启 postgres 以使用 hugepage
```

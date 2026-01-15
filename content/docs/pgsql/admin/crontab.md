---
title: 管理 PostgreSQL 定时任务
linktitle: 任务管理
weight: 80
description: 配置 Crontab 定期调度 PostgreSQL 备份任务，执行备份 / Vacuum Freeze / Analyze 任务，以及处理表膨胀
icon: fa-solid fa-clock-rotate-left
module: [PGSQL]
categories: [任务]
---

Pigsty 使用 crontab 来管理定时任务，用于执行例行备份，冻结老化事务，重整膨胀表索引等维护工作。


## 速查手册

| 操作                          | 快捷命令                                     | 说明                   |
|:----------------------------|:-----------------------------------------|:---------------------|
| [**配置定时任务**](#配置定时任务)       | `./pgsql.yml -t pg_crontab -l <cls>`     | 应用 pg_crontab 配置     |
| [**查看定时任务**](#查看定时任务)       | `crontab -l`                             | 以 postgres 用户查看      |
| [**物理备份**](#pg-backup)      | `pg-backup [full\|diff\|incr]`           | 使用 pgBackRest 执行备份   |
| [**事务冻结**](#pg-vacuum)      | `pg-vacuum [database...]`                | 冻结老化事务，预防 XID 回卷     |
| [**膨胀治理**](#pg-repack)      | `pg-repack [database...]`                | 在线重整膨胀的表与索引          |
{.full-width}

其他管理任务，请参考：[**备份管理**](/docs/pgsql/backup/)，[**监控系统**](/docs/pgsql/monitor/)，[**高可用管理**](/docs/pgsql/admin/patroni)。


----------------

## 配置定时任务

使用 [**`pg_crontab`**](/docs/pgsql/param/#pg_crontab) 参数配置 PostgreSQL 数据库超级用户（[**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu)，默认 `postgres`）的定时任务。

下面 `pg-meta` 集群配置了每天凌晨1点进行全量备份的定时任务，`pg-test` 配置了每周一全量备份，其余日期增量备份的定时任务。

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_crontab:
      - '00 01 * * * /pg/bin/pg-backup'
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
  vars:
    pg_cluster: pg-test
    pg_crontab:
      - '00 01 * * 1            /pg/bin/pg-backup full'
      - '00 01 * * 2,3,4,5,6,7  /pg/bin/pg-backup'
```

**推荐的维护计划**

```yaml
pg_crontab:
  - '00 01 * * * /pg/bin/pg-backup full'    # 每天凌晨1点全量备份
  - '00 03 * * 0 /pg/bin/pg-vacuum'         # 每周日凌晨3点执行 vacuum freeze
  - '00 04 * * 1 /pg/bin/pg-repack'         # 每周一凌晨4点执行 repack
```

| 任务          | 频率    | 时机    | 说明                |
|:------------|:------|:------|:------------------|
| `pg-backup` | 每天    | 凌晨    | 全量或增量备份，视业务需求而定   |
| `pg-vacuum` | 每周一次  | 周日凌晨  | 冻结老化事务，预防 XID 回卷  |
| `pg-repack` | 每周/每月 | 业务低峰期 | 重整膨胀表索引，回收空间      |
{.full-width}

{{% alert title="仅在主库执行" color="secondary" %}}
`pg-backup`、`pg-vacuum`、`pg-repack` 脚本会自动检测当前节点角色，只有主库才会实际执行，从库会直接退出。

因此可以安全地在所有节点配置相同的定时任务，故障切换后新主库会自动继续执行维护任务。
{{% /alert %}}


----------------

## 应用定时任务

定时任务会在 [**`pgsql.yml`**](/docs/pgsql/playbook#pgsqlyml) 剧本执行时（`pg_crontab` 任务）自动写入对应操作系统发行版的默认位置：

- EL（RHEL/Rocky/Alma）：`/var/spool/cron/postgres`
- Debian/Ubuntu：`/var/spool/cron/crontabs/postgres`

{{< tabpane text=true persist=header >}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l pg-meta -t pg_crontab     # 应用 pg_crontab 配置到指定集群
./pgsql.yml -l 10.10.10.10 -t pg_crontab # 仅针对特定主机
```
{{% /tab %}}
{{% tab header="手工" %}}
```bash
# 以 postgres 用户编辑定时任务
sudo -u postgres crontab -e

# 或直接编辑 crontab 文件
sudo vi /var/spool/cron/postgres           # EL 系列
sudo vi /var/spool/cron/crontabs/postgres  # Debian/Ubuntu
```
{{% /tab %}}
{{< /tabpane >}}

每次执行剧本都会 **全量覆盖刷新** 定时任务配置。


----------------

## 查看定时任务

使用 [**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu) 操作系统用户执行以下命令查看定时任务：

```bash
crontab -l

# Pigsty Managed Crontab for postgres
SHELL=/bin/bash
PATH=/usr/pgsql/bin:/pg/bin:/usr/local/bin:/usr/bin:/usr/sbin:/bin:/sbin
MAILTO=""
00 01 * * * /pg/bin/pg-backup
```

如果您不熟悉 Crontab 的语法，可以参考 [Crontab Guru](https://crontab.guru/) 的解释。


----------------

## pg-backup

`pg-backup` 是 Pigsty 提供的物理备份脚本，基于 [**pgBackRest**](https://pgbackrest.org/) 实现，支持全量、差异、增量三种备份模式。

**基本用法**

```bash
pg-backup                # 执行增量备份（默认），如果没有全量备份则自动执行全量备份
pg-backup full           # 执行全量备份
pg-backup diff           # 执行差异备份（基于最近的全量备份）
pg-backup incr           # 执行增量备份（基于最近的任意备份）
```

**备份类型说明**

| 类型   | 参数     | 说明                        |
|:-----|:-------|:--------------------------|
| 全量备份 | `full` | 完整备份所有数据，恢复时只需要该备份        |
| 差异备份 | `diff` | 备份自上次全量备份以来的变更，恢复时需要全量+差异 |
| 增量备份 | `incr` | 备份自上次任意备份以来的变更，恢复时需要完整链路  |
{.full-width}

**执行条件**

- 脚本必须在 **主库** 上以 **postgres** 用户身份运行
- 脚本会自动检测当前节点角色，从库执行时会直接退出（exit 1）
- 从 `/etc/pgbackrest/pgbackrest.conf` 中自动获取 stanza 名称

**常用定时任务配置**

{{< tabpane text=true persist=header >}}
{{% tab header="每日全量" %}}
```yaml
pg_crontab:
  - '00 01 * * * /pg/bin/pg-backup full'    # 每天凌晨1点全量备份
```
{{% /tab %}}
{{% tab header="周全量+日增量" %}}
```yaml
pg_crontab:
  - '00 01 * * 1            /pg/bin/pg-backup full'  # 周一全量备份
  - '00 01 * * 2,3,4,5,6,7  /pg/bin/pg-backup'       # 其他日期增量备份
```
{{% /tab %}}
{{% tab header="周全量+日差异" %}}
```yaml
pg_crontab:
  - '00 01 * * 1            /pg/bin/pg-backup full'  # 周一全量备份
  - '00 01 * * 2,3,4,5,6,7  /pg/bin/pg-backup diff'  # 其他日期差异备份
```
{{% /tab %}}
{{< /tabpane >}}

更多备份恢复操作，请参考 [**备份管理**](/docs/pgsql/backup/) 章节。


----------------

## pg-vacuum

`pg-vacuum` 是 Pigsty 提供的事务冻结脚本，用于执行 `VACUUM FREEZE` 操作，防止事务ID（XID）回卷导致数据库停机。

**基本用法**

{{< tabpane text=true persist=header >}}
{{% tab header="基本" %}}
```bash
pg-vacuum                    # 冻结所有数据库中的老化表
pg-vacuum mydb               # 仅处理指定数据库
```
{{% /tab %}}
{{% tab header="选项" %}}
```bash
pg-vacuum -n mydb            # 空跑模式，只显示不执行
pg-vacuum -a 80000000 mydb   # 使用自定义年龄阈值（默认1亿）
pg-vacuum -r 50 mydb         # 使用自定义老化比例阈值（默认40%）
```
{{% /tab %}}
{{% tab header="手工SQL" %}}
```sql
-- 对整个数据库执行 VACUUM FREEZE
VACUUM FREEZE;

-- 对特定表执行 VACUUM FREEZE
VACUUM FREEZE schema.table_name;
```
{{% /tab %}}
{{< /tabpane >}}

**命令选项**

| 选项              | 说明                | 默认值       |
|:----------------|:------------------|:----------|
| `-h, --help`    | 显示帮助信息            | -         |
| `-n, --dry-run` | 空跑模式，只显示不执行       | false     |
| `-a, --age`     | 年龄阈值，超过此值的表需要冻结   | 100000000 |
| `-r, --ratio`   | 老化比例阈值，超过则全库冻结（%） | 40        |
{.full-width}

**工作逻辑**

1. 检查数据库的 `datfrozenxid` 年龄，如果低于阈值则跳过该库
2. 计算老化页面比例（超过年龄阈值的表页面占总页面的百分比）
3. 如果老化比例 > 40%，执行全库 `VACUUM FREEZE ANALYZE`
4. 否则，仅对超过年龄阈值的表执行 `VACUUM FREEZE ANALYZE`

脚本会设置 `vacuum_cost_limit = 10000` 和 `vacuum_cost_delay = 1ms` 以控制 I/O 影响。

**执行条件**

- 脚本必须在 **主库** 上以 [**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu) **postgres** 用户身份运行
- 使用文件锁 `/tmp/pg-vacuum.lock` 防止并发执行
- 自动跳过 `template0`、`template1`、`postgres` 系统数据库

**常用定时任务配置**

建议将 vacuum 任务与备份/Repack 任务分开执行，避免冲突。

```yaml
pg_crontab:
  - '00 03 * * 0 /pg/bin/pg-vacuum'     # 每周日凌晨3点执行
```


----------------

## pg-repack

`pg-repack` 是 Pigsty 提供的膨胀治理脚本，基于 [**pg_repack**](https://reorg.github.io/pg_repack/) 扩展实现，用于在线重整膨胀的表与索引。

**基本用法**

{{< tabpane text=true persist=header >}}
{{% tab header="基本" %}}
```bash
pg-repack                    # 重整所有数据库中的膨胀表与索引
pg-repack mydb               # 仅重整指定数据库
pg-repack mydb1 mydb2        # 重整多个数据库
```
{{% /tab %}}
{{% tab header="选项" %}}
```bash
pg-repack -n mydb            # 空跑模式，只显示不执行
pg-repack -t mydb            # 仅重整表
pg-repack -i mydb            # 仅重整索引
pg-repack -T 30 -j 4 mydb    # 自定义锁超时(秒)和并行度
```
{{% /tab %}}
{{% tab header="手工" %}}
```bash
# 直接使用 pg_repack 命令重整特定表
pg_repack dbname -t schema.table

# 直接使用 pg_repack 命令重整特定索引
pg_repack dbname -i schema.index
```
{{% /tab %}}
{{< /tabpane >}}

**命令选项**

| 选项              | 说明               | 默认值   |
|:----------------|:-----------------|:------|
| `-h, --help`    | 显示帮助信息           | -     |
| `-n, --dry-run` | 空跑模式，只显示不执行      | false |
| `-t, --table`   | 仅重整表             | false |
| `-i, --index`   | 仅重整索引            | false |
| `-T, --timeout` | 锁等待超时时间（秒）       | 10    |
| `-j, --jobs`    | 并行作业数            | 2     |
{.full-width}

**自动选择阈值**

脚本会根据表和索引的大小与膨胀率，自动选择需要重整的对象：

**表膨胀阈值**

| 大小范围        | 膨胀率阈值 | 最大数量 |
|:------------|:-----:|:----:|
| < 256MB     | > 40% |  64  |
| 256MB - 2GB | > 30% |  16  |
| 2GB - 8GB   | > 20% |  4   |
| 8GB - 64GB  | > 15% |  1   |
{.full-width}

**索引膨胀阈值**

| 大小范围        | 膨胀率阈值 | 最大数量 |
|:------------|:-----:|:----:|
| < 128MB     | > 40% |  64  |
| 128MB - 1GB | > 35% |  16  |
| 1GB - 8GB   | > 30% |  4   |
| 8GB - 64GB  | > 20% |  1   |
{.full-width}

超过 64GB 的巨型表/索引会被跳过并给出提示，需要手动处理。

**执行条件**

- 脚本必须在 **主库** 上以 **postgres** 用户身份运行
- 需要安装 `pg_repack` 扩展（Pigsty 默认安装）
- 需要 `monitor` schema 中的 `pg_table_bloat` 和 `pg_index_bloat` 视图
- 使用文件锁 `/tmp/pg-repack.lock` 防止并发执行
- 自动跳过 `template0`、`template1`、`postgres` 系统数据库

{{% alert title="锁等待" color="info" %}}
重整期间不会影响正常读写，但重整完毕的 **切换瞬间** 需要获取表上的 AccessExclusive 锁阻塞一切访问。对于高吞吐量业务，建议在业务低峰期或维护窗口进行。
{{% /alert %}}

**常用定时任务配置**

```yaml
pg_crontab:
  - '00 04 * * 1 /pg/bin/pg-repack'     # 每周一凌晨4点执行
```

您可以通过 Pigsty 的 [**PGCAT Database - Table Bloat**](https://demo.pigsty.cc/d/pgcat-database) 面板确认数据库中的膨胀情况，并选择膨胀率较高的表与索引进行重整。

更多细节请参考：[**关系膨胀的治理**](https://vonng.com/pg/bloat/)


----------------

## 移除定时任务

当使用 [**`pgsql-rm.yml`**](/docs/pgsql/playbook#pgsql-rmyml) 剧本移除 PostgreSQL 集群时，会自动删除 postgres 用户的 crontab 文件。

```bash
./pgsql-rm.yml -l <cls> -t pg_crontab    # 仅移除定时任务
./pgsql-rm.yml -l <cls>                  # 移除整个集群（包含定时任务）
```


----------------

## 相关文档

- [**备份管理**](/docs/pgsql/backup/)：PostgreSQL 备份与恢复
- [**监控系统**](/docs/pgsql/monitor/)：PostgreSQL 监控与告警
- [**集群管理**](/docs/pgsql/admin/cluster/)：集群的创建、扩缩容、销毁
- [**Patroni 管理**](/docs/pgsql/admin/patroni/)：高可用集群管理

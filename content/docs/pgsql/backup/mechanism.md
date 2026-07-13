---
title: 备份机制
weight: 1701
description: pgBackRest 的概念体系（stanza、仓库、备份链、保留策略、时间线）与 Pigsty 封装层的参数映射：理解每条命令背后发生了什么。
icon: fa-solid fa-gears
categories: [任务]
---

Pigsty 的备份恢复功能，最终都会落实为 [**pgBackRest**](/docs/pgbackrest/) 命令的执行。
所以要真正掌握这套系统，需要理解两件事：**pgBackRest 本身的概念体系**（stanza、仓库、备份链、保留、时间线），
以及 **Pigsty 各层封装如何映射到它**（参数如何变成命令行选项）。本页依次讲清这两部分。


--------

## pgBackRest 核心概念

### Stanza：集群的备份身份

**Stanza**（节）是 pgBackRest 中一套 PostgreSQL 集群备份配置的名称，也是仓库内隔离不同集群的命名空间。
Pigsty 将 stanza 直接映射为集群名 [**`pg_cluster`**](/docs/pgsql/param#pg_cluster)：
集群 `pg-meta` 的备份就存储在仓库的 `backup/pg-meta/` 与 `archive/pg-meta/` 目录下，
多套集群可以安全共享同一个仓库。

Stanza 记录着源集群的 system-id 与主版本号，写入备份前会核对身份 —— 这正是
[**克隆集群**](/docs/pgsql/backup/cluster) 后需要 `stanza-upgrade` 善后的原因。
Stanza 由 [**`stanza-create`**](/docs/pgbackrest/command/stanza-create) 创建（Pigsty 在集群初始化时自动完成），
版本升级后用 [**`stanza-upgrade`**](/docs/pgbackrest/command/stanza-upgrade) 更新。

### 仓库：备份存放在哪里

**仓库**（Repository）是备份与 WAL 归档的存储后端，在配置中以 `repo1-*` 系列选项定义：
`repo1-type` 决定类型（POSIX 文件系统、S3、Azure、GCS、SFTP），`repo1-path` 决定路径，
`repo1-cipher-*` 决定加密，`repo1-retention-*` 决定保留策略。
Pigsty 通过 [**`pgbackrest_repo`**](/docs/pgsql/param#pgbackrest_repo) 参数生成这些配置，详见 [**备份仓库**](/docs/pgsql/backup/repository)。

### 备份链与备份标签

pgBackRest 支持三种备份类型，后两种依赖前面的备份构成 **备份链**：

| 类型         | 内容                  | 标签后缀 |
|:-----------|:--------------------|:----:|
| 全量备份（full） | 完整复制数据库集群           | `F`  |
| 差异备份（diff） | 相对最近一次 **全量** 的变化   | `D`  |
| 增量备份（incr） | 相对最近一次 **任意备份** 的变化 | `I`  |
{.full-width}

每个备份都有唯一的 **备份标签**（label），命名规则本身就描述了备份链：
`20250715-013657F` 是一个全量备份，`20250715-013657F_20250715-013724D` 是基于它的差异备份，
`20250715-013657F_20250715-013730I` 是增量备份 —— 下划线前的部分标识它所依附的全量备份。
恢复时用 `--set` 指定从哪个备份集开始还原，默认自动选择目标时间点前最近的一个。

### 保留策略：仓库如何不被撑爆

**保留策略**（Retention）决定旧备份何时被清除。`repo1-retention-full` 配合
`repo1-retention-full-type`（`count` 按份数 / `time` 按天数）控制全量备份的保留；
全量备份过期时，依附它的差异/增量备份与对应的 WAL 归档一并清除。
Pigsty 默认启用 `expire-auto`，每次备份完成后自动执行过期清理，也可用
[**`expire`**](/docs/pgbackrest/command/expire) 命令手动触发。

### WAL 归档：连续的历史

PostgreSQL 的 `archive_command` 在每个 WAL 段写满（或 `archive_timeout` 超时）后触发，
Pigsty 将其配置为 [**`archive-push`**](/docs/pgbackrest/command/archive-push)，把 WAL 推入仓库；
恢复时则由 `restore_command` 调用 [**`archive-get`**](/docs/pgbackrest/command/archive-get) 按需拉取。
Pigsty 启用了异步归档（`archive-async=y`），经由 `/pg/spool` 假脱机目录批量推送，避免归档拖慢主库。

### 时间线：分叉的历史

每次恢复提升（或故障切换）都会开启一条新的 **时间线**（Timeline），旧时间线的 WAL 仍保留在仓库中。
恢复时可用 `--target-timeline` 指定沿哪条时间线重放（默认 `latest`），
这使得"恢复错了再恢复一次"成为可能。完整心智模型见概念层 [**工作原理**](/docs/concept/pitr/mechanism/#时间线)。

### 恢复机制：restore 命令做了什么

理解 [**`restore`**](/docs/pgbackrest/command/restore) 命令的行为，就理解了 PITR 的执行过程。它做两件事：

1. **重建数据目录**：从备份集还原数据文件。带 `--delta` 选项（Pigsty 默认启用）时执行增量还原 ——
   校验现有文件，只重写与备份不一致的部分，大幅缩短大库的还原时间。
2. **写入恢复配置**：生成 `recovery.signal` 标记与恢复参数（`restore_command`、`recovery_target_*`），
   使 PostgreSQL 下次启动时进入恢复模式，从仓库拉取 WAL 重放至目标点。

因此 `restore` 命令返回成功只是完成了一半：真正的恢复发生在 PostgreSQL 启动之后的 WAL 重放阶段。
重放到达目标后的行为由 `--target-action` 决定：`pause` 暂停等待检查、`promote` 提升开启新时间线、`shutdown` 停机。

恢复目标的参数组合是固定句式：`--type` 指定目标类型，`--target` 给出目标值，
可选的 `--target-exclusive` 控制边界、`--target-timeline` 选择时间线、`--set` 指定起点备份：

```bash
pgbackrest --stanza=pg-meta restore                                        # 恢复到 WAL 归档末尾
pgbackrest --stanza=pg-meta --type=immediate restore                       # 恢复到最近一致点
pgbackrest --stanza=pg-meta --type=time --target='2025-07-13 10:00:00+00' restore
pgbackrest --stanza=pg-meta --type=xid  --target='250000' --target-exclusive restore
pgbackrest --stanza=pg-meta --type=name --target='my-restore-point' restore
pgbackrest --stanza=pg-meta --type=lsn  --target='0/4001C80' --target-action=promote restore
```


--------

## 实际观察

您可以使用 [**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu) 用户（默认 `postgres`）直接执行 pgbackrest 命令，
观察上述概念的实际形态 —— 注意备份标签的命名、备份大小的差异，以及 `info` 输出中的备份链引用关系：

{{< tabpane persist="disabled" >}}
{{% tab header="备份命令" disabled=true /%}}
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


--------

## Pigsty 的封装层次

在原生命令之上，Pigsty 提供了逐层升高的封装，每一层都只是对下一层的参数化调用，没有黑魔法：

| 层次   | 接口                                                   | 它实际做什么                                                                       |
|:-----|:-----------------------------------------------------|:-----------------------------------------------------------------------------|
| 集群编排 | `pg_pitr` + `pgsql-pitr.yml`                         | 编排整个集群的恢复：暂停 HA → 停库 → 渲染配置并调用 `pgbackrest restore` → 重放验证 → 清理 etcd → 拉起 HA |
| 实例编排 | [**`pig pitr`**](/docs/pig/pitr)                     | 单节点上的同等编排：预检 → 停 Patroni/PG → 调用 `pgbackrest restore` → 拉起 → 指引              |
| 命令原语 | [**`pig pb`**](/docs/pig/pb) / `pb` 别名 / `pg-backup` | 自动填充 `--stanza` 与 DBSU 身份，转发给 pgbackrest 对应子命令                               |
| 底层引擎 | [**`pgbackrest`**](/docs/pgbackrest/)                | 读取 `/etc/pgbackrest/pgbackrest.conf`，实际执行备份/归档/恢复                            |
{.full-width}

### 命令原语层

`pb` 是登录 shell 内置的别名函数：从配置文件解析出 stanza 后转发，让您少敲一个参数：

```bash
function pb() {
    local stanza=$(grep -o '\[[^][]*]' /etc/pgbackrest/pgbackrest.conf | head -n1 | sed 's/.*\[\([^]]*\)].*/\1/')
    pgbackrest --stanza=$stanza $@
}
pb info     # = pgbackrest --stanza=pg-meta info
pb backup   # = pgbackrest --stanza=pg-meta backup
```

`pg-backup` 脚本在此基础上增加了 **角色检查**（只在主库执行，从库直接退出），供 crontab 安全调用：

```bash
pg-backup full   # = pgbackrest --stanza=pg-meta --type=full backup（仅主库执行）
pg-backup diff   # = pgbackrest --stanza=pg-meta --type=diff backup
pg-backup incr   # = pgbackrest --stanza=pg-meta --type=incr backup（默认，无全量时自动升级为全量）
```

[**`pig pb`**](/docs/pig/pb) 提供了更完善的封装：自动检测 stanza、自动以 DBSU 身份执行（root 下 `su`、普通用户 `sudo`）、
备份前检查主库角色、恢复前显示执行计划并要求确认。完整子命令表见 [**管理命令**](/docs/pgsql/backup/admin/#命令一览)。

### 参数如何映射

Pigsty 恢复接口的每个参数，都对应一个 pgbackrest 选项 —— 三层接口共用同一套语义：

| `pg_pitr` 字段                       | `pig pitr` 选项                     | pgbackrest 选项                   | 含义                               |
|:-----------------------------------|:----------------------------------|:--------------------------------|:---------------------------------|
| `cluster`                          | `--stanza`                        | `--stanza`                      | 从哪个集群的备份恢复（源 stanza）             |
| `type` + `time`/`xid`/`lsn`/`name` | `--time`/`--xid`/`--lsn`/`--name` | `--type` + `--target`           | 恢复目标                             |
| （type: default）                    | `--default`                       | 不传 `--type`/`--target`          | 重放到 WAL 归档末尾                     |
| （type: immediate）                  | `--immediate`                     | `--type=immediate`              | 恢复到最近一致点                         |
| `exclusive`                        | `--exclusive` / `-X`              | `--target-exclusive`            | 停在目标之前（排除目标点）                    |
| `action`                           | `--target-action`                 | `--target-action`               | 到达目标后：pause / promote / shutdown |
| `timeline`                         | `--target-timeline` / `-T`        | `--target-timeline`             | 目标时间线，默认 latest                  |
| `set`                              | `--set` / `-b`                    | `--set`                         | 从哪个备份集开始还原                       |
| `db_include` / `db_exclude`        | —                                 | `--db-include` / `--db-exclude` | 选择性恢复部分数据库                       |
| `link_map`                         | —                                 | `--link-map`                    | 表空间/目录软链接映射                      |
| `process`                          | —                                 | `process-max`                   | 恢复并行进程数                          |
| `data`                             | `--data` / `-D`                   | `--pg1-path`                    | 恢复到哪个数据目录                        |
| `repo`                             | `--repo`                          | `repo1-*`（渲染临时配置）               | 覆盖备份仓库定义                         |
{.full-width}

### 配置如何渲染

[**`pgbackrest_repo`**](/docs/pgsql/param#pgbackrest_repo) 中被 [**`pgbackrest_method`**](/docs/pgsql/param#pgbackrest_method)
选中的仓库定义，会按简单规则渲染进 `/etc/pgbackrest/pgbackrest.conf`：
键名的下划线替换为连字符，加上 `repo1-` 前缀 —— 因此 [**pgBackRest 支持的任何配置项**](/docs/pgbackrest/configuration)
都可以直接写入参数：

```yaml
pgbackrest_repo:
  minio:
    type: s3                  # ----> repo1-type=s3
    s3_endpoint: sss.pigsty   # ----> repo1-s3-endpoint=sss.pigsty
    cipher_type: aes-256-cbc  # ----> repo1-cipher-type=aes-256-cbc
    retention_full: 14        # ----> repo1-retention-full=14
```

执行 PITR 时，Pigsty 会另行渲染一份临时配置 `/pg/conf/pitr.conf`（避免污染常规配置），
恢复期间的 PostgreSQL 日志写入 `/pg/tmp/recovery.log`。


--------

## 定时备份

Pigsty 使用 Linux crontab 调度备份任务：[**`pg_crontab`**](/docs/pgsql/param#pg_crontab) 参数中的条目
会写入 `postgres` 用户的 crontab。因为 `pg-backup` 自带角色检查，同一份 crontab 可以安全地下发到集群所有节点 ——
故障切换后新主库的定时备份自动生效。

```yaml title="每天凌晨1点全量备份"
pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ]
```

```yaml title="周一全量备份，其余每日增量"
pg_crontab:
  - '00 01 * * 1 /pg/bin/pg-backup full'
  - '00 01 * * 2,3,4,5,6,7 /pg/bin/pg-backup'
```

修改后用剧本应用变更：

```bash
./pgsql.yml -t pg_crontab -l pg-meta    # 更新 pg-meta 集群的 crontab
```

如何选择备份频率与保留策略，请参阅 [**备份策略**](/docs/pgsql/backup/policy)。


--------

## 部署细节

pgBackRest 组件在 [**`pgsql.yml`**](/docs/pgsql/playbook/#pgsqlyml) 剧本中完成安装与配置：

- 随 [**`pg_packages`**](/docs/pgsql/param#pg_packages) 中的 `pgsql-common` 组安装，二进制位于 `/usr/bin/pgbackrest`
- `pg_backup` 子任务负责渲染配置、创建 stanza；由 [**`pgbackrest_enabled`**](/docs/pgsql/param#pgbackrest_enabled) 控制（默认启用）
- 集群初始化后自动执行一次 **初始全量备份**，留下 `/etc/pgbackrest/initial.done` 标记防止重复；
  由 [**`pgbackrest_init_backup`**](/docs/pgsql/param#pgbackrest_init_backup) 控制

### 文件层次

| 路径                                | 用途                                                                          |
|:----------------------------------|:----------------------------------------------------------------------------|
| `/usr/bin/pgbackrest`             | 二进制，来自 PGDG 仓库的 `pgbackrest` 包                                              |
| `/etc/pgbackrest/pgbackrest.conf` | 主配置文件（stanza + 仓库定义）                                                        |
| `/pg/backup`                      | 本地仓库数据目录（`local` 仓库时使用）                                                     |
| `/pg/spool`                       | 异步归档的假脱机目录                                                                  |
| `/pg/log/pgbackrest/`             | 备份/归档/恢复日志，[**`pgbackrest_log_dir`**](/docs/pgsql/param#pgbackrest_log_dir) |
| `/pg/conf/pitr.conf`              | PITR 过程中的临时 pgbackrest 配置                                                   |
| `/pg/tmp/recovery.log`            | PITR 过程中的 PostgreSQL 恢复日志                                                   |
{.full-width}

### 监控

每个节点运行 `pgbackrest_exporter` 服务（端口 [**`pgbackrest_exporter_port`**](/docs/pgsql/param#pgbackrest_exporter_port)：`9854`），
将备份状态导出为监控指标（参见 [**pgBackRest 监控指标**](/docs/pgbackrest/metric)）。
可通过 [**`pgbackrest_exporter_options`**](/docs/pgsql/param#pgbackrest_exporter_options) 定制，
或将 [**`pgbackrest_exporter_enabled`**](/docs/pgsql/param#pgbackrest_exporter_enabled) 设为 `false` 禁用。

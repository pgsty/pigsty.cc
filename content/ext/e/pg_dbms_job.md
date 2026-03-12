---
title: "pg_dbms_job"
linkTitle: "pg_dbms_job"
description: "添加 Oracle DBMS_JOB 兼容性支持的扩展"
weight: 9260
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/MigOpsRepos/pg_dbms_job">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">MigOpsRepos/pg_dbms_job</div>
    <div class="ext-card__desc">https://github.com/MigOpsRepos/pg_dbms_job</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_dbms_job`**](/ext/e/pg_dbms_job) | `1.5` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9260  | [**`pg_dbms_job`**](/ext/e/pg_dbms_job) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`pgagent`](/ext/e/pgagent) [`pg_jobmon`](/ext/e/pg_jobmon) [`oracle_fdw`](/ext/e/oracle_fdw) [`orafce`](/ext/e/orafce) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_dbms_job` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_dbms_job_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | BREAK PGDG 1.5 1 | BREAK PGDG 1.5 1 | BREAK PGDG 1.5 1 | BREAK PGDG 1.5 1 | BREAK PGDG 1.5 3 |
| el8.aarch64 | BREAK PGDG 1.5 1 | BREAK PGDG 1.5 1 | BREAK PGDG 1.5 1 | BREAK PGDG 1.5 1 | BREAK PGDG 1.5 1 |
| el9.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 3 |
| el9.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| el10.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| el10.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 pg_dbms_job_18 pg_dbms_job_18-1.5-5PGDG.rhel8.x86_64.rpm pgdg 1.5 26.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_dbms_job_18-1.5-5PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_dbms_job_18 pg_dbms_job_18-1.5-5PGDG.rhel8.aarch64.rpm pgdg 1.5 26.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_dbms_job_18-1.5-5PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_dbms_job_18 pg_dbms_job_18-1.5-5PGDG.rhel9.x86_64.rpm pgdg 1.5 26.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_dbms_job_18-1.5-5PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_dbms_job_18 pg_dbms_job_18-1.5-5PGDG.rhel9.aarch64.rpm pgdg 1.5 26.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_dbms_job_18-1.5-5PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_dbms_job_18 pg_dbms_job_18-1.5-5PGDG.rhel10.x86_64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_dbms_job_18-1.5-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_dbms_job_18 pg_dbms_job_18-1.5-5PGDG.rhel10.aarch64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_job_18-1.5-5PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 pg_dbms_job_17 pg_dbms_job_17-1.5-3PGDG.rhel8.x86_64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_dbms_job_17-1.5-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_dbms_job_17 pg_dbms_job_17-1.5-3PGDG.rhel8.aarch64.rpm pgdg 1.5 26.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_dbms_job_17-1.5-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_dbms_job_17 pg_dbms_job_17-1.5-3PGDG.rhel9.x86_64.rpm pgdg 1.5 26.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_dbms_job_17-1.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_dbms_job_17 pg_dbms_job_17-1.5-3PGDG.rhel9.aarch64.rpm pgdg 1.5 26.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_dbms_job_17-1.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_dbms_job_17 pg_dbms_job_17-1.5-5PGDG.rhel10.x86_64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_dbms_job_17-1.5-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_dbms_job_17 pg_dbms_job_17-1.5-5PGDG.rhel10.aarch64.rpm pgdg 1.5 26.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_job_17-1.5-5PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 pg_dbms_job_16 pg_dbms_job_16-1.5-3PGDG.rhel8.x86_64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_dbms_job_16-1.5-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_dbms_job_16 pg_dbms_job_16-1.5-3PGDG.rhel8.aarch64.rpm pgdg 1.5 26.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_dbms_job_16-1.5-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_dbms_job_16 pg_dbms_job_16-1.5-3PGDG.rhel9.x86_64.rpm pgdg 1.5 26.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_dbms_job_16-1.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_dbms_job_16 pg_dbms_job_16-1.5-3PGDG.rhel9.aarch64.rpm pgdg 1.5 26.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_dbms_job_16-1.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_dbms_job_16 pg_dbms_job_16-1.5-5PGDG.rhel10.x86_64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_dbms_job_16-1.5-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_dbms_job_16 pg_dbms_job_16-1.5-5PGDG.rhel10.aarch64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_job_16-1.5-5PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 pg_dbms_job_15 pg_dbms_job_15-1.5-1.rhel8.x86_64.rpm pgdg 1.5 26.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_dbms_job_15-1.5-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_dbms_job_15 pg_dbms_job_15-1.5-1.rhel8.aarch64.rpm pgdg 1.5 26.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_dbms_job_15-1.5-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_dbms_job_15 pg_dbms_job_15-1.5-1.rhel9.x86_64.rpm pgdg 1.5 25.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_dbms_job_15-1.5-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_dbms_job_15 pg_dbms_job_15-1.5-1.rhel9.aarch64.rpm pgdg 1.5 25.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_dbms_job_15-1.5-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_dbms_job_15 pg_dbms_job_15-1.5-5PGDG.rhel10.x86_64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_dbms_job_15-1.5-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_dbms_job_15 pg_dbms_job_15-1.5-5PGDG.rhel10.aarch64.rpm pgdg 1.5 26.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_job_15-1.5-5PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 pg_dbms_job_14 pg_dbms_job_14-1.5-1.rhel8.x86_64.rpm pgdg 1.5 26.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_dbms_job_14-1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_dbms_job_14 pg_dbms_job_14-1.4.0-1.rhel8.x86_64.rpm pgdg 1.4.0 26.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_dbms_job_14-1.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_dbms_job_14 pg_dbms_job_14-1.2.0-1.rhel8.x86_64.rpm pgdg 1.2.0 25.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_dbms_job_14-1.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_dbms_job_14 pg_dbms_job_14-1.5-1.rhel8.aarch64.rpm pgdg 1.5 26.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_dbms_job_14-1.5-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_dbms_job_14 pg_dbms_job_14-1.5-1.rhel9.x86_64.rpm pgdg 1.5 25.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_dbms_job_14-1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_dbms_job_14 pg_dbms_job_14-1.4.0-1.rhel9.x86_64.rpm pgdg 1.4.0 25.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_dbms_job_14-1.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_dbms_job_14 pg_dbms_job_14-1.2.0-1.rhel9.x86_64.rpm pgdg 1.2.0 24.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_dbms_job_14-1.2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_dbms_job_14 pg_dbms_job_14-1.5-1.rhel9.aarch64.rpm pgdg 1.5 25.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_dbms_job_14-1.5-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_dbms_job_14 pg_dbms_job_14-1.5-5PGDG.rhel10.x86_64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_dbms_job_14-1.5-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_dbms_job_14 pg_dbms_job_14-1.5-5PGDG.rhel10.aarch64.rpm pgdg 1.5 26.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_dbms_job_14-1.5-5PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_dbms_job` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_dbms_job;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_dbms_job -v 18  # PG 18
pig ext install -y pg_dbms_job -v 17  # PG 17
pig ext install -y pg_dbms_job -v 16  # PG 16
pig ext install -y pg_dbms_job -v 15  # PG 15
pig ext install -y pg_dbms_job -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_dbms_job_18       # PG 18
dnf install -y pg_dbms_job_17       # PG 17
dnf install -y pg_dbms_job_16       # PG 16
dnf install -y pg_dbms_job_15       # PG 15
dnf install -y pg_dbms_job_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_dbms_job;
```



## 用法

> [pg_dbms_job: 为 PostgreSQL 添加 Oracle DBMS_JOB 完整兼容的扩展](https://github.com/MigOpsRepos/pg_dbms_job)

### 启用

```sql
CREATE EXTENSION pg_dbms_job;
```

需要为每个数据库运行专用调度守护进程：

```bash
pg_dbms_job -c /etc/pg_dbms_job/mydb-dbms_job.conf
```

### SUBMIT - 调度作业

```sql
BEGIN;
-- 调度作业：每天运行一个过程
CALL dbms_job.submit(
    job       => jobid,
    what      => 'CALL my_procedure();',
    next_date => current_timestamp + interval '1 minute',
    interval  => 'current_timestamp + ''1 day''::interval'
);
COMMIT;
```

省略 `next_date` 和 `interval` 时，作业立即异步执行。

### BROKEN - 禁用/启用作业

```sql
BEGIN;
CALL dbms_job.broken(12345, true);   -- 禁用作业
CALL dbms_job.broken(12345, false);  -- 重新启用作业
COMMIT;
```

### CHANGE - 修改作业

```sql
BEGIN;
CALL dbms_job.change(12345, null, null, 'current_timestamp + ''3 days''::interval');
COMMIT;
```

### INTERVAL - 更改执行间隔

```sql
BEGIN;
CALL dbms_job.interval(12345, 'current_timestamp + ''1 hour''::interval');
COMMIT;
```

### NEXT_DATE - 更改下次执行日期

```sql
BEGIN;
CALL dbms_job.next_date(12345, current_timestamp + interval '30 minutes');
COMMIT;
```

### WHAT - 更改作业代码

```sql
BEGIN;
CALL dbms_job.what(12345, 'CALL new_procedure();');
COMMIT;
```

### REMOVE - 删除作业

```sql
BEGIN;
CALL dbms_job.remove(12345);
COMMIT;
```

### RUN - 立即执行

```sql
CALL dbms_job.run(12345);
```

### 查看作业

```sql
SELECT * FROM dbms_job.all_jobs;
```

### 执行历史

```sql
SELECT * FROM dbms_job.all_scheduler_job_run_details;
```

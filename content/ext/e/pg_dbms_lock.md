---
title: "pg_dbms_lock"
linkTitle: "pg_dbms_lock"
description: "为PG添加对 Oracle DBMS_LOCK 的完整兼容性支持"
weight: 9250
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HexaCluster/pg_dbms_lock">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HexaCluster/pg_dbms_lock</div>
    <div class="ext-card__desc">https://github.com/HexaCluster/pg_dbms_lock</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_dbms_lock`**](/ext/e/pg_dbms_lock) | `1.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9250  | [**`pg_dbms_lock`**](/ext/e/pg_dbms_lock) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `dbms_lock` |
{.ext-table}

| **相关扩展** | [`orafce`](/ext/e/orafce) [`session_variable`](/ext/e/session_variable) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_dbms_job`](/ext/e/pg_dbms_job) [`oracle_fdw`](/ext/e/oracle_fdw) [`pgtt`](/ext/e/pgtt) [`pg_statement_rollback`](/ext/e/pg_statement_rollback) [`mysql_fdw`](/ext/e/mysql_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_dbms_lock` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_dbms_lock_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el8.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el9.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el9.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el10.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el10.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 pg_dbms_lock_18 pg_dbms_lock_18-1.0-3PGDG.rhel8.noarch.rpm pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_dbms_lock_18-1.0-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_dbms_lock_18 pg_dbms_lock_18-1.0-3PGDG.rhel8.noarch.rpm pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_dbms_lock_18-1.0-3PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_dbms_lock_18 pg_dbms_lock_18-1.0-3PGDG.rhel9.noarch.rpm pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_dbms_lock_18-1.0-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_dbms_lock_18 pg_dbms_lock_18-1.0-3PGDG.rhel9.noarch.rpm pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_dbms_lock_18-1.0-3PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_dbms_lock_18 pg_dbms_lock_18-1.0-3PGDG.rhel10.noarch.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_dbms_lock_18-1.0-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_dbms_lock_18 pg_dbms_lock_18-1.0-3PGDG.rhel10.noarch.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_lock_18-1.0-3PGDG.rhel10.noarch.rpm
@ el8.x86_64 17 pg_dbms_lock_17 pg_dbms_lock_17-1.0-1PGDG.rhel8.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_dbms_lock_17-1.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pg_dbms_lock_17 pg_dbms_lock_17-1.0-1PGDG.rhel8.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_dbms_lock_17-1.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pg_dbms_lock_17 pg_dbms_lock_17-1.0-1PGDG.rhel9.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_dbms_lock_17-1.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pg_dbms_lock_17 pg_dbms_lock_17-1.0-1PGDG.rhel9.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_dbms_lock_17-1.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pg_dbms_lock_17 pg_dbms_lock_17-1.0-2PGDG.rhel10.noarch.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_dbms_lock_17-1.0-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_dbms_lock_17 pg_dbms_lock_17-1.0-2PGDG.rhel10.noarch.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_lock_17-1.0-2PGDG.rhel10.noarch.rpm
@ el8.x86_64 16 pg_dbms_lock_16 pg_dbms_lock_16-1.0-1PGDG.rhel8.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_dbms_lock_16-1.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_dbms_lock_16 pg_dbms_lock_16-1.0-1PGDG.rhel8.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_dbms_lock_16-1.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_dbms_lock_16 pg_dbms_lock_16-1.0-1PGDG.rhel9.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_dbms_lock_16-1.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_dbms_lock_16 pg_dbms_lock_16-1.0-1PGDG.rhel9.noarch.rpm pgdg 1.0 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_dbms_lock_16-1.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_dbms_lock_16 pg_dbms_lock_16-1.0-2PGDG.rhel10.noarch.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_dbms_lock_16-1.0-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_dbms_lock_16 pg_dbms_lock_16-1.0-2PGDG.rhel10.noarch.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_lock_16-1.0-2PGDG.rhel10.noarch.rpm
@ el8.x86_64 15 pg_dbms_lock_15 pg_dbms_lock_15-1.0-1PGDG.rhel8.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_dbms_lock_15-1.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_dbms_lock_15 pg_dbms_lock_15-1.0-1PGDG.rhel8.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_dbms_lock_15-1.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_dbms_lock_15 pg_dbms_lock_15-1.0-1PGDG.rhel9.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_dbms_lock_15-1.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_dbms_lock_15 pg_dbms_lock_15-1.0-1PGDG.rhel9.noarch.rpm pgdg 1.0 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_dbms_lock_15-1.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_dbms_lock_15 pg_dbms_lock_15-1.0-2PGDG.rhel10.noarch.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_dbms_lock_15-1.0-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_dbms_lock_15 pg_dbms_lock_15-1.0-2PGDG.rhel10.noarch.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_lock_15-1.0-2PGDG.rhel10.noarch.rpm
@ el8.x86_64 14 pg_dbms_lock_14 pg_dbms_lock_14-1.0-1PGDG.rhel8.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_dbms_lock_14-1.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_dbms_lock_14 pg_dbms_lock_14-1.0-1PGDG.rhel8.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_dbms_lock_14-1.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_dbms_lock_14 pg_dbms_lock_14-1.0-1PGDG.rhel9.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_dbms_lock_14-1.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_dbms_lock_14 pg_dbms_lock_14-1.0-1PGDG.rhel9.noarch.rpm pgdg 1.0 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_dbms_lock_14-1.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_dbms_lock_14 pg_dbms_lock_14-1.0-2PGDG.rhel10.noarch.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_dbms_lock_14-1.0-2PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_dbms_lock_14 pg_dbms_lock_14-1.0-2PGDG.rhel10.noarch.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_dbms_lock_14-1.0-2PGDG.rhel10.noarch.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_dbms_lock` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_dbms_lock;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_dbms_lock -v 18  # PG 18
pig ext install -y pg_dbms_lock -v 17  # PG 17
pig ext install -y pg_dbms_lock -v 16  # PG 16
pig ext install -y pg_dbms_lock -v 15  # PG 15
pig ext install -y pg_dbms_lock -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_dbms_lock_18       # PG 18
dnf install -y pg_dbms_lock_17       # PG 17
dnf install -y pg_dbms_lock_16       # PG 16
dnf install -y pg_dbms_lock_15       # PG 15
dnf install -y pg_dbms_lock_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_dbms_lock;
```



## 用法

> [pg_dbms_lock: 为 PostgreSQL 添加 Oracle DBMS_LOCK 完整兼容的扩展](https://github.com/HexaCluster/pg_dbms_lock)

使用 PostgreSQL 咨询锁模拟 Oracle DBMS_LOCK 行为。

### 启用

```sql
CREATE EXTENSION pg_dbms_lock;
```

### ALLOCATE_UNIQUE

为命名锁分配唯一锁标识符：

```sql
DO $$
DECLARE
    lockhandle varchar;
BEGIN
    CALL dbms_lock.allocate_unique(
        lockname => 'printer_lock',
        lockhandle => lockhandle
    );
    RAISE NOTICE 'Handle: %', lockhandle;
END;
$$;
```

### REQUEST

以指定模式请求锁（Exclusive=6，Shared=4）：

```sql
DO $$
DECLARE
    lock_res int;
BEGIN
    lock_res := dbms_lock.request(
        id => 123,
        lockmode => 6,           -- 排他锁
        timeout => 300,
        release_on_commit => false
    );
    IF lock_res <> 0 THEN
        RAISE EXCEPTION 'Lock request failed: %', lock_res;
    END IF;
END;
$$;
```

返回值：0=成功，1=超时，3=参数错误，4=已持有锁，5=非法句柄。

### RELEASE

显式释放之前获取的锁：

```sql
DO $$
DECLARE
    lock_res int;
BEGIN
    lock_res := dbms_lock.release(id => 123);
    IF lock_res <> 0 THEN
        RAISE EXCEPTION 'Release failed: %', lock_res;
    END IF;
END;
$$;
```

### SLEEP

暂停会话指定时长：

```sql
CALL dbms_lock.sleep(0.70);  -- 休眠 0.7 秒
```

### 完整示例

```sql
DO $$
DECLARE
    lock_res int;
    printer_lockhandle varchar;
BEGIN
    CALL dbms_lock.allocate_unique('printer_lock', printer_lockhandle);
    lock_res := dbms_lock.request(lockhandle => printer_lockhandle, lockmode => 6, timeout => 5);
    IF lock_res <> 0 THEN
        RAISE EXCEPTION 'REQUEST failed: %', lock_res;
    END IF;
    -- 在此执行排他操作
    lock_res := dbms_lock.release(lockhandle => printer_lockhandle);
END;
$$;
```

---
title: "pg_proctab"
linkTitle: "pg_proctab"
description: "通过SQL接口访问操作系统进程表"
weight: 6450
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/markwkm/pg_proctab">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">markwkm/pg_proctab</div>
    <div class="ext-card__desc">https://github.com/markwkm/pg_proctab</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgnodemx-1.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgnodemx-1.7.tar.gz</div>
    <div class="ext-card__desc">pgnodemx-1.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgnodemx`**](/ext/e/pgnodemx) | `1.7` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6440  | [**`pgnodemx`**](/ext/e/pgnodemx) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 6450  | [**`pg_proctab`**](/ext/e/pg_proctab) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prioritize`](/ext/e/prioritize) [`system_stats`](/ext/e/system_stats) [`pg_background`](/ext/e/pg_background) [`pg_wait_sampling`](/ext/e/pg_wait_sampling) [`pgmeminfo`](/ext/e/pgmeminfo) [`pgsentinel`](/ext/e/pgsentinel) [`pg_profile`](/ext/e/pg_profile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> from pgnodemx


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `pgnodemx` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `pgnodemx_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgnodemx` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el8.aarch64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el9.x86_64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el9.aarch64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el10.x86_64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el10.aarch64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| d12.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| d12.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| d13.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| d13.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u22.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u22.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u24.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u24.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u26.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u26.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgnodemx` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgnodemx         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgnodemx` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgnodemx;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgnodemx -v 18  # PG 18
pig ext install -y pgnodemx -v 17  # PG 17
pig ext install -y pgnodemx -v 16  # PG 16
pig ext install -y pgnodemx -v 15  # PG 15
pig ext install -y pgnodemx -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgnodemx_18       # PG 18
dnf install -y pgnodemx_17       # PG 17
dnf install -y pgnodemx_16       # PG 16
dnf install -y pgnodemx_15       # PG 15
dnf install -y pgnodemx_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgnodemx   # PG 18
apt install -y postgresql-17-pgnodemx   # PG 17
apt install -y postgresql-16-pgnodemx   # PG 16
apt install -y postgresql-15-pgnodemx   # PG 15
apt install -y postgresql-14-pgnodemx   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_proctab;
```




## 用法

> [pg_proctab: 从 PostgreSQL 访问操作系统进程表](https://github.com/markwkm/pg_proctab)

pg_proctab 允许在 PostgreSQL 内部通过 SQL 函数查询操作系统的进程、CPU、内存、磁盘和负载统计信息。

### 函数

**进程信息** (`pg_proctab()`)：

```sql
-- 所有 PostgreSQL 进程信息
SELECT pid, comm, state, utime, stime, vsize, rss, reads, writes
FROM pg_proctab();

-- 与 pg_stat_activity 关联获取每个查询的资源使用情况
SELECT a.pid, a.query, p.utime, p.stime, p.vsize, p.rss
FROM pg_stat_activity a
JOIN pg_proctab() p ON a.pid = p.pid;
```

返回每个进程的信息：`pid`、`comm`、`fullcomm`、`state`、`ppid`、`utime`、`stime`、`priority`、`nice`、`num_threads`、`vsize`、`rss`、`processor`、`uid`、`username`、`rchar`、`wchar`、`reads`、`writes` 等。

**CPU 时间** (`pg_cputime()`)：

```sql
SELECT "user", nice, system, idle, iowait FROM pg_cputime();
```

**负载均值** (`pg_loadavg()`)：

```sql
SELECT load1, load5, load15, last_pid FROM pg_loadavg();
```

**内存使用** (`pg_memusage()`)：

```sql
SELECT memused, memfree, memshared, membuffers, memcached,
       swapused, swapfree, swapcached
FROM pg_memusage();
```

**磁盘使用** (`pg_diskusage()`)：

```sql
SELECT devname, reads_completed, writes_completed,
       sectors_read, sectors_written
FROM pg_diskusage();
```

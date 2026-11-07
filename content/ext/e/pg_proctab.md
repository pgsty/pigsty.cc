---
title: "pg_proctab"
linkTitle: "pg_proctab"
description: "通过SQL接口访问操作系统进程表"
weight: 6460
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrunchyData/pgnodemx">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrunchyData/pgnodemx</div>
    <div class="ext-card__desc">https://github.com/CrunchyData/pgnodemx</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgnodemx-2.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgnodemx-2.0.1.tar.gz</div>
    <div class="ext-card__desc">pgnodemx-2.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgnodemx`**](/ext/e/pgnodemx) | `2.0.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6450  | [**`pgnodemx`**](/ext/e/pgnodemx) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 6460  | [**`pg_proctab`**](/ext/e/pg_proctab) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pgnodemx`](/ext/e/pgnodemx) [`system_stats`](/ext/e/system_stats) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pgmeminfo`](/ext/e/pgmeminfo) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Compatibility stub; PGDG RPM incomplete.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pgnodemx` | `pgnodemx` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pgnodemx_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgnodemx` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.1 3 | AVAIL PIGSTY 2.0.1 3 | AVAIL PIGSTY 2.0.1 3 | AVAIL PIGSTY 2.0.1 3 | AVAIL PIGSTY 2.0.1 3 |
| el8.aarch64 | AVAIL PIGSTY 2.0.1 3 | AVAIL PIGSTY 2.0.1 3 | AVAIL PIGSTY 2.0.1 3 | AVAIL PIGSTY 2.0.1 3 | AVAIL PIGSTY 2.0.1 3 |
| el9.x86_64 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 |
| el9.aarch64 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 |
| el10.x86_64 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 |
| el10.aarch64 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 | AVAIL PIGSTY 2.0.1 4 |
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgnodemx;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgnodemx -v 18  # PG 18
pig ext install -y pgnodemx -v 17  # PG 17
pig ext install -y pgnodemx -v 16  # PG 16
pig ext install -y pgnodemx -v 15  # PG 15
pig ext install -y pgnodemx -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgnodemx_18       # PG 18
dnf install -y pgnodemx_17       # PG 17
dnf install -y pgnodemx_16       # PG 16
dnf install -y pgnodemx_15       # PG 15
dnf install -y pgnodemx_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgnodemx   # PG 18
apt install -y postgresql-17-pgnodemx   # PG 17
apt install -y postgresql-16-pgnodemx   # PG 16
apt install -y postgresql-15-pgnodemx   # PG 15
apt install -y postgresql-14-pgnodemx   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_proctab CASCADE;  -- 依赖: pgnodemx
```

## 用法

来源：

- [pgnodemx 2.0.1 文档](https://github.com/pgnodemx/pgnodemx/blob/v2.0.1/README.md)
- [兼容层控制文件](https://github.com/pgnodemx/pgnodemx/blob/v2.0.1/pg_proctab.control)
- [兼容层 SQL](https://github.com/pgnodemx/pgnodemx/blob/v2.0.1/pg_proctab--0.0.10-compat.sql)

`pgnodemx` 包中的 `pg_proctab` 提供五个 SQL 包装函数，兼容旧的进程监控接口。它依赖 `pgnodemx`；软件包版本为 2.0.1，SQL 安装版本为 `0.0.10-compat`。

### 启用

保留 `shared_preload_libraries` 中已有的条目，加入 `pgnodemx`，然后重启 PostgreSQL：

```ini
shared_preload_libraries = 'pgnodemx'
```

使用超级用户将两个扩展安装到同一模式：

```sql
CREATE EXTENSION pgnodemx;
CREATE EXTENSION pg_proctab VERSION '0.0.10-compat';
```

主控制文件没有默认版本，因此必须显式指定版本。本轮核验的 PGDG RPM 缺少该主控制文件，执行此命令前需安装包含它的软件包。查询底层操作系统指标需要超级用户权限或 `pg_monitor` 成员资格。

### 查询

```sql
SELECT a.pid, a.query, p.utime, p.stime, p.vsize, p.rss
FROM pg_stat_activity a
JOIN pg_proctab() p ON a.pid = p.pid;

SELECT "user", nice, system, idle, iowait FROM pg_cputime();
SELECT load1, load5, load15, last_pid FROM pg_loadavg();
SELECT memused, memfree, memshared, membuffers, memcached,
       swapused, swapfree, swapcached
FROM pg_memusage();
SELECT devname, reads_completed, writes_completed,
       sectors_read, sectors_written
FROM pg_diskusage();
```

这些函数读取 PostgreSQL 服务端可见的 Linux 进程与系统统计信息，容器命名空间和操作系统权限会影响可见范围。在此兼容层中，`rss` 使用 KiB，内存汇总值使用 MiB，`memshared` 来自 `Shmem`。

---
title: "pg_statviz"
linkTitle: "pg_statviz"
description: "采集 PostgreSQL 统计快照，用于时序分析与可视化"
weight: 6080
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/vyruss/pg_statviz">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">vyruss/pg_statviz</div>
    <div class="ext-card__desc">https://github.com/vyruss/pg_statviz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_statviz`**](/ext/e/pg_statviz) | `1.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6080  | [**`pg_statviz`**](/ext/e/pg_statviz) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgstatviz` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) `pgsampler` [`pgmonitor`](/ext/e/pgmonitor) `pg_mon` [`timescaledb`](/ext/e/timescaledb) `town` [`pg_stl`](/ext/e/pg_stl) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Cataloged but hidden from default package groups. GitHub release and control are 1.1 while PGXN still serves 1.0. PGDG DEB 1.1 covers active PG14-18 except Ubuntu 22.04 and recommends the separate Python utility, so a normal APT install can pull its Python stack. PGDG RPM remains at 0.9, lacks PG17, and provides PG18 only on EL10; its metadata declares no PostgreSQL dependency, labels GPLv2+ although upstream uses the PostgreSQL License, and describes a CLI although the subpackage contains only extension SQL and control files. The extension itself is pure SQL and PL/pgSQL and needs no preload.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_statviz` | `plpgsql` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.9` | {{< pgvers "18,16,15,14" >}} | `pg_statviz_extension_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-statviz` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 0.9 2 | AVAIL PGDG 0.9 4 | AVAIL PGDG 0.9 4 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 0.9 2 | AVAIL PGDG 0.9 4 | AVAIL PGDG 0.9 4 |
| el9.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 0.9 3 | AVAIL PGDG 0.9 5 | AVAIL PGDG 0.9 5 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 0.9 3 | AVAIL PGDG 0.9 5 | AVAIL PGDG 0.9 5 |
| el10.x86_64 | AVAIL PGDG 0.9 3 | MISS PGDG - 0 | AVAIL PGDG 0.9 4 | AVAIL PGDG 0.9 4 | AVAIL PGDG 0.9 4 |
| el10.aarch64 | AVAIL PGDG 0.9 2 | MISS PGDG - 0 | AVAIL PGDG 0.9 3 | AVAIL PGDG 0.9 3 | AVAIL PGDG 0.9 3 |
| d12.x86_64 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 |
| d12.aarch64 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 |
| d13.x86_64 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 |
| d13.aarch64 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 |
| u24.aarch64 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 |
| u26.x86_64 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 |
| u26.aarch64 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 | AVAIL PGDG 1.1 3 |
@ el10.x86_64 18 pg_statviz_extension_18 pg_statviz_extension_18-0.9-1PGDG.rhel10.2.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_statviz_extension_18-0.9-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 18 pg_statviz_extension_18 pg_statviz_extension_18-0.9-1PGDG.rhel10.1.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_statviz_extension_18-0.9-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 18 pg_statviz_extension_18 pg_statviz_extension_18-0.9-1PGDG.rhel10.0.noarch.rpm pgdg 0.9 15.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_statviz_extension_18-0.9-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 18 pg_statviz_extension_18 pg_statviz_extension_18-0.9-1PGDG.rhel10.1.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_statviz_extension_18-0.9-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 18 pg_statviz_extension_18 pg_statviz_extension_18-0.9-1PGDG.rhel10.0.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_statviz_extension_18-0.9-1PGDG.rhel10.0.noarch.rpm
@ d12.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.1-1.pgdg12+1_all.deb
@ d12.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-2.pgdg12+1_all.deb
@ d12.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-1.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.1-1.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-2.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-1.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.1-1.pgdg13+1_all.deb
@ d13.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-2.pgdg13+1_all.deb
@ d13.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-1.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.1-1.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-2.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-1.pgdg13+1_all.deb
@ u24.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-1.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-1.pgdg24.04+1_all.deb
@ u26.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.x86_64 18 postgresql-18-statviz postgresql-18-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-1.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-statviz postgresql-18-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-18-statviz_1.0-1.pgdg26.04+1_all.deb
@ d12.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.1-1.pgdg12+1_all.deb
@ d12.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-2.pgdg12+1_all.deb
@ d12.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-1.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.1-1.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-2.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-1.pgdg12+1_all.deb
@ d13.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.1-1.pgdg13+1_all.deb
@ d13.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-2.pgdg13+1_all.deb
@ d13.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-1.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.1-1.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-2.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-1.pgdg13+1_all.deb
@ u24.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-1.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-1.pgdg24.04+1_all.deb
@ u26.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.x86_64 17 postgresql-17-statviz postgresql-17-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-1.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-statviz postgresql-17-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-17-statviz_1.0-1.pgdg26.04+1_all.deb
@ el8.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel8.10.noarch.rpm pgdg 0.9 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_statviz_extension_16-0.9-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.6-1PGDG.rhel8.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_statviz_extension_16-0.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel8.10.noarch.rpm pgdg 0.9 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_statviz_extension_16-0.9-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.6-1PGDG.rhel8.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_statviz_extension_16-0.6-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel9.7.noarch.rpm pgdg 0.9 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_statviz_extension_16-0.9-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel9.6.noarch.rpm pgdg 0.9 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_statviz_extension_16-0.9-1PGDG.rhel9.6.noarch.rpm
@ el9.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.6-1PGDG.rhel9.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_statviz_extension_16-0.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel9.7.noarch.rpm pgdg 0.9 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_statviz_extension_16-0.9-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel9.6.noarch.rpm pgdg 0.9 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_statviz_extension_16-0.9-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.6-1PGDG.rhel9.noarch.rpm pgdg 0.6 11.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_statviz_extension_16-0.6-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel10.2.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_statviz_extension_16-0.9-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel10.1.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_statviz_extension_16-0.9-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel10.0.noarch.rpm pgdg 0.9 15.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_statviz_extension_16-0.9-1PGDG.rhel10.0.noarch.rpm
@ el10.x86_64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.6-1PGDG.rhel10.noarch.rpm pgdg 0.6 12.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_statviz_extension_16-0.6-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel10.1.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_statviz_extension_16-0.9-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.9-1PGDG.rhel10.0.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_statviz_extension_16-0.9-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 16 pg_statviz_extension_16 pg_statviz_extension_16-0.6-1PGDG.rhel10.noarch.rpm pgdg 0.6 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_statviz_extension_16-0.6-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.1-1.pgdg12+1_all.deb
@ d12.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-2.pgdg12+1_all.deb
@ d12.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-1.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.1-1.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-2.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-1.pgdg12+1_all.deb
@ d13.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.1-1.pgdg13+1_all.deb
@ d13.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-2.pgdg13+1_all.deb
@ d13.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-1.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.1-1.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-2.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-1.pgdg13+1_all.deb
@ u24.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-1.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-1.pgdg24.04+1_all.deb
@ u26.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.x86_64 16 postgresql-16-statviz postgresql-16-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-1.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-statviz postgresql-16-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-16-statviz_1.0-1.pgdg26.04+1_all.deb
@ el8.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel8.10.noarch.rpm pgdg 0.9 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_statviz_extension_15-0.9-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.6-1PGDG.rhel8.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_statviz_extension_15-0.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.5-1PGDG.rhel8.noarch.rpm pgdg 0.5 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_statviz_extension_15-0.5-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.4-1PGDG.rhel8.noarch.rpm pgdg 0.4 11.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_statviz_extension_15-0.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel8.10.noarch.rpm pgdg 0.9 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_statviz_extension_15-0.9-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.6-1PGDG.rhel8.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_statviz_extension_15-0.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.5-1PGDG.rhel8.noarch.rpm pgdg 0.5 11.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_statviz_extension_15-0.5-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.4-1PGDG.rhel8.noarch.rpm pgdg 0.4 11.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_statviz_extension_15-0.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel9.7.noarch.rpm pgdg 0.9 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statviz_extension_15-0.9-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel9.6.noarch.rpm pgdg 0.9 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statviz_extension_15-0.9-1PGDG.rhel9.6.noarch.rpm
@ el9.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.6-1PGDG.rhel9.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statviz_extension_15-0.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.5-1PGDG.rhel9.noarch.rpm pgdg 0.5 11.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statviz_extension_15-0.5-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.4-1PGDG.rhel9.noarch.rpm pgdg 0.4 11.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statviz_extension_15-0.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel9.7.noarch.rpm pgdg 0.9 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statviz_extension_15-0.9-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel9.6.noarch.rpm pgdg 0.9 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statviz_extension_15-0.9-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.6-1PGDG.rhel9.noarch.rpm pgdg 0.6 11.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statviz_extension_15-0.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.5-1PGDG.rhel9.noarch.rpm pgdg 0.5 11.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statviz_extension_15-0.5-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.4-1PGDG.rhel9.noarch.rpm pgdg 0.4 11.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statviz_extension_15-0.4-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel10.2.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_statviz_extension_15-0.9-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel10.1.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_statviz_extension_15-0.9-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel10.0.noarch.rpm pgdg 0.9 15.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_statviz_extension_15-0.9-1PGDG.rhel10.0.noarch.rpm
@ el10.x86_64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.6-1PGDG.rhel10.noarch.rpm pgdg 0.6 12.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_statviz_extension_15-0.6-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel10.1.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_statviz_extension_15-0.9-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.9-1PGDG.rhel10.0.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_statviz_extension_15-0.9-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 15 pg_statviz_extension_15 pg_statviz_extension_15-0.6-1PGDG.rhel10.noarch.rpm pgdg 0.6 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_statviz_extension_15-0.6-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.1-1.pgdg12+1_all.deb
@ d12.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-2.pgdg12+1_all.deb
@ d12.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-1.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.1-1.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-2.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-1.pgdg12+1_all.deb
@ d13.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.1-1.pgdg13+1_all.deb
@ d13.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-2.pgdg13+1_all.deb
@ d13.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-1.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.1-1.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-2.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-1.pgdg13+1_all.deb
@ u24.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-1.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-1.pgdg24.04+1_all.deb
@ u26.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.x86_64 15 postgresql-15-statviz postgresql-15-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-1.pgdg26.04+1_all.deb
@ u26.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.aarch64 15 postgresql-15-statviz postgresql-15-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-15-statviz_1.0-1.pgdg26.04+1_all.deb
@ el8.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel8.10.noarch.rpm pgdg 0.9 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_statviz_extension_14-0.9-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.6-1PGDG.rhel8.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_statviz_extension_14-0.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.5-1PGDG.rhel8.noarch.rpm pgdg 0.5 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_statviz_extension_14-0.5-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.4-1PGDG.rhel8.noarch.rpm pgdg 0.4 11.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_statviz_extension_14-0.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel8.10.noarch.rpm pgdg 0.9 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_statviz_extension_14-0.9-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.6-1PGDG.rhel8.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_statviz_extension_14-0.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.5-1PGDG.rhel8.noarch.rpm pgdg 0.5 11.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_statviz_extension_14-0.5-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.4-1PGDG.rhel8.noarch.rpm pgdg 0.4 11.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_statviz_extension_14-0.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel9.7.noarch.rpm pgdg 0.9 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_statviz_extension_14-0.9-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel9.6.noarch.rpm pgdg 0.9 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_statviz_extension_14-0.9-1PGDG.rhel9.6.noarch.rpm
@ el9.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.6-1PGDG.rhel9.noarch.rpm pgdg 0.6 11.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_statviz_extension_14-0.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.5-1PGDG.rhel9.noarch.rpm pgdg 0.5 11.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_statviz_extension_14-0.5-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.4-1PGDG.rhel9.noarch.rpm pgdg 0.4 11.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_statviz_extension_14-0.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel9.7.noarch.rpm pgdg 0.9 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statviz_extension_14-0.9-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel9.6.noarch.rpm pgdg 0.9 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statviz_extension_14-0.9-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.6-1PGDG.rhel9.noarch.rpm pgdg 0.6 11.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statviz_extension_14-0.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.5-1PGDG.rhel9.noarch.rpm pgdg 0.5 11.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statviz_extension_14-0.5-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.4-1PGDG.rhel9.noarch.rpm pgdg 0.4 11.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statviz_extension_14-0.4-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel10.2.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_statviz_extension_14-0.9-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel10.1.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_statviz_extension_14-0.9-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel10.0.noarch.rpm pgdg 0.9 15.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_statviz_extension_14-0.9-1PGDG.rhel10.0.noarch.rpm
@ el10.x86_64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.6-1PGDG.rhel10.noarch.rpm pgdg 0.6 12.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_statviz_extension_14-0.6-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel10.1.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_statviz_extension_14-0.9-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.9-1PGDG.rhel10.0.noarch.rpm pgdg 0.9 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_statviz_extension_14-0.9-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 14 pg_statviz_extension_14 pg_statviz_extension_14-0.6-1PGDG.rhel10.noarch.rpm pgdg 0.6 12.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_statviz_extension_14-0.6-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.1-1.pgdg12+1_all.deb
@ d12.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-2.pgdg12+1_all.deb
@ d12.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-1.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.1-1.pgdg12+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.1-1.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.0-2.pgdg12+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-2.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.0-1.pgdg12+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-1.pgdg12+1_all.deb
@ d13.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.1-1.pgdg13+1_all.deb
@ d13.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-2.pgdg13+1_all.deb
@ d13.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-1.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.1-1.pgdg13+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.1-1.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.0-2.pgdg13+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-2.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.0-1.pgdg13+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-1.pgdg13+1_all.deb
@ u24.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-1.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.1-1.pgdg24.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.1-1.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.0-2.pgdg24.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-2.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.0-1.pgdg24.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-1.pgdg24.04+1_all.deb
@ u26.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.x86_64 14 postgresql-14-statviz postgresql-14-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-1.pgdg26.04+1_all.deb
@ u26.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.1-1.pgdg26.04+1_all.deb pgdg 1.1 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.1-1.pgdg26.04+1_all.deb
@ u26.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.0-2.pgdg26.04+1_all.deb pgdg 1.0 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-2.pgdg26.04+1_all.deb
@ u26.aarch64 14 postgresql-14-statviz postgresql-14-statviz_1.0-1.pgdg26.04+1_all.deb pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-statviz/postgresql-14-statviz_1.0-1.pgdg26.04+1_all.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_statviz` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_statviz;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_statviz -v 18  # PG 18
pig ext install -y pg_statviz -v 17  # PG 17
pig ext install -y pg_statviz -v 16  # PG 16
pig ext install -y pg_statviz -v 15  # PG 15
pig ext install -y pg_statviz -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_statviz_extension_18       # PG 18
dnf install -y pg_statviz_extension_17       # PG 17
dnf install -y pg_statviz_extension_16       # PG 16
dnf install -y pg_statviz_extension_15       # PG 15
dnf install -y pg_statviz_extension_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-statviz   # PG 18
apt install -y postgresql-17-statviz   # PG 17
apt install -y postgresql-16-statviz   # PG 16
apt install -y postgresql-15-statviz   # PG 15
apt install -y postgresql-14-statviz   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_statviz CASCADE;  -- 依赖: plpgsql
```

## 用法

来源：

- [pg_statviz v1.1 发行说明](https://github.com/vyruss/pg_statviz/releases/tag/v1.1)
- [pg_statviz v1.1 README](https://github.com/vyruss/pg_statviz/blob/v1.1/README.md)
- [pg_statviz v1.1 安装 SQL](https://github.com/vyruss/pg_statviz/blob/v1.1/pg_statviz--1.1.sql)
- [pg_statviz v1.1 控制文件](https://github.com/vyruss/pg_statviz/blob/v1.1/pg_statviz.control)
- [pg_statviz v1.1 元数据](https://github.com/vyruss/pg_statviz/blob/v1.1/META.json)
- [pg_statviz v1.1 Python 软件包元数据](https://github.com/vyruss/pg_statviz/blob/v1.1/pyproject.toml)
- [pg_statviz v1.1 AI 服务商实现](https://github.com/vyruss/pg_statviz/blob/v1.1/src/pg_statviz/libs/ai.py)
- [正式 PGXN 分发](https://pgxn.org/dist/pg_statviz/)

`pg_statviz` v1.1 由一个纯 SQL 与 PL/pgSQL 的统计快照扩展和一个单独安装的 Python 可视化工具组成。扩展把 PostgreSQL 的累积及动态统计保存在固定的 `pgstatviz` 模式中；工具读取选定时间范围，并生成图表或可选的 AI 辅助 HTML 报告。它要求 PostgreSQL 13 或以上版本，不需要 `shared_preload_libraries`，也无需重启。工具要求 Python 3.11 或以上版本。

### 采集并保留快照

由管理员安装扩展，然后让专用采集角色继承 `pg_monitor`，再通过 cron 或其他外部作业运行器定期调用 `pgstatviz.snapshot()`。

```sql
CREATE EXTENSION pg_statviz;

GRANT pg_monitor TO stats_collector;

SELECT pgstatviz.snapshot();

DELETE FROM pgstatviz.snapshots
WHERE snapshot_tstamp < CURRENT_DATE - 90;
```

删除父表行会级联删除相应样本；`pgstatviz.delete_snapshots()` 则会截断全部历史。应根据需要观测的最短事件与相应表增长量选择采集间隔和保留窗口；PostgreSQL 原始计数器是累积值且可能独立重置，因此应分析带时间戳的增量，不能把存储值直接当作速率。

### 存储数据与版本边界

主要关系包括 `pgstatviz.snapshots`、`pgstatviz.buf`、`pgstatviz.conf`、`pgstatviz.conn`、`pgstatviz.db`、`pgstatviz.io`、`pgstatviz.lock`、`pgstatviz.repl`、`pgstatviz.slru`、`pgstatviz.wait` 和 `pgstatviz.wal`。样本会包含配置值、连接用户名与时长、复制应用及槽名称、等待、锁、I/O、数据库计数器和 WAL 计数器。应把这些表、转储、图表与报告作为运维数据加以保护。

配置只在发生变化时保存，因此 `pgstatviz.conf` 不一定对应每次快照都有一行。PostgreSQL 14 及以上版本采集 `pg_stat_wal`，PostgreSQL 16 及以上版本采集 `pg_stat_io`，并单独处理 PostgreSQL 18 基于字节的字段。较早的受支持版本仍会创建这些表，但会跳过不可用的采集器。

扩展把快照表标记为可感知扩展的转储对象，因此可以用 `pg_dump` 搬迁历史，但仍需主动限制保留量与备份大小。

### 可视化时间范围

可视化工具需要单独安装，并接受常规 libpq 连接选项。`analyze` 命令会运行全部分析模块；只需要较窄的报告时，可以选择 `conn`、`io`、`wait` 和 `wal` 等单个模块。

```bash
pip install pg_statviz

pg_statviz analyze \
  -h /var/run/postgresql -d mydb -U stats_reader \
  -D 2026-08-01T00:00 2026-08-02T00:00 \
  -O /srv/pg_statviz/reports
```

应限制数据库凭据与报告目录的访问权限。可视化角色只需读取已采集模式，不需要采集或删除快照的权限。

### 权限边界

v1.1 安装 SQL 会向 `pg_monitor` 的所有成员授予模式使用权、函数执行权，以及全部 `pgstatviz` 表上的 `SELECT`、`INSERT`、`DELETE` 与 `TRUNCATE`。因此，该成员身份同时允许采集快照，并能通过 `pgstatviz.delete_snapshots()` 删除全部历史；它并不是只读可视化角色。

如果必须分离采集、可视化和保留管理，应在安装后修订默认授权，只向专用角色授予所需函数与表权限。扩展升级后应再次检查这些授权。

### 可选 AI 与云端数据审查

普通图表生成不会请求 LLM。AI 模式需要可选的 `pg_statviz[ai]` 依赖，并显式使用 `--ai` 参数。Claude 是默认云服务商并读取 `ANTHROPIC_API_KEY`；Gemini 读取 `GOOGLE_API_KEY`；`--ai local` 使用本地 Ollama 服务。当前默认模型为 `claude-sonnet-4-6`、`gemini-2.5-flash` 与 `gemma4:e4b`；这些只是实现默认值，并不保证服务商账户或本地运行时会持续提供相应模型。

```bash
pip install 'pg_statviz[ai]'

pg_statviz analyze \
  -h /var/run/postgresql -d mydb -U stats_reader \
  -D 2026-08-01T00:00 2026-08-02T00:00 \
  -O /srv/pg_statviz/reports \
  --ai gemini
```

使用云服务商时，请求可能包含图表图像和汇总时间序列，以及采集到的 PostgreSQL 版本、主库/备库角色、主机名、相关配置值、确定性检查结果、用户或角色名称和复制标识符。应把这视为一次明确的运维数据导出：审查服务商保留与区域政策，缩小所选时间范围，保护生成的 HTML 与 PNG 文件，并使用获准的出站路径。提示词中的数据封装可以降低提示注入风险，但不提供机密性或授权能力，也不能替代服务商治理。

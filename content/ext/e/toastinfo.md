---
title: "toastinfo"
linkTitle: "toastinfo"
description: "显示TOAST字段的详细信息"
weight: 6530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/credativ/toastinfo">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">credativ/toastinfo</div>
    <div class="ext-card__desc">https://github.com/credativ/toastinfo</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/toastinfo-1.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">toastinfo-1.5.tar.gz</div>
    <div class="ext-card__desc">toastinfo-1.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`toastinfo`**](/ext/e/toastinfo) | `1.5` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6530  | [**`toastinfo`**](/ext/e/toastinfo) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) [`pgstattuple`](/ext/e/pgstattuple) [`amcheck`](/ext/e/amcheck) [`pg_relusage`](/ext/e/pg_relusage) [`pg_buffercache`](/ext/e/pg_buffercache) [`pg_freespacemap`](/ext/e/pg_freespacemap) [`pg_repack`](/ext/e/pg_repack) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `toastinfo` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `toastinfo_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-toastinfo` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| el8.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| el9.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| el9.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| el10.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| el10.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| d12.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| d12.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| d13.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| d13.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| u22.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| u22.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| u24.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| u24.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| u26.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| u26.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
@ el8.x86_64 18 toastinfo_18 toastinfo_18-1.5-1PIGSTY.el8.x86_64.rpm pigsty 1.5 13.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_18-1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 toastinfo_18 toastinfo_18-1.5-1PIGSTY.el8.aarch64.rpm pigsty 1.5 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_18-1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 toastinfo_18 toastinfo_18-1.5-1PIGSTY.el9.x86_64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_18-1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 toastinfo_18 toastinfo_18-1.5-1PIGSTY.el9.aarch64.rpm pigsty 1.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_18-1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 toastinfo_18 toastinfo_18-1.5-1PIGSTY.el10.x86_64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_18-1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 toastinfo_18 toastinfo_18-1.5-1PIGSTY.el10.aarch64.rpm pigsty 1.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_18-1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 toastinfo_17 toastinfo_17-1.5-1PIGSTY.el8.x86_64.rpm pigsty 1.5 13.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_17-1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 toastinfo_17 toastinfo_17-1.5-1PIGSTY.el8.aarch64.rpm pigsty 1.5 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_17-1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 toastinfo_17 toastinfo_17-1.5-1PIGSTY.el9.x86_64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_17-1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 toastinfo_17 toastinfo_17-1.5-1PIGSTY.el9.aarch64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_17-1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 toastinfo_17 toastinfo_17-1.5-1PIGSTY.el10.x86_64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_17-1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 toastinfo_17 toastinfo_17-1.5-1PIGSTY.el10.aarch64.rpm pigsty 1.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_17-1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 toastinfo_16 toastinfo_16-1.5-1PIGSTY.el8.x86_64.rpm pigsty 1.5 13.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_16-1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 toastinfo_16 toastinfo_16-1.5-1PIGSTY.el8.aarch64.rpm pigsty 1.5 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_16-1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 toastinfo_16 toastinfo_16-1.5-1PIGSTY.el9.x86_64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_16-1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 toastinfo_16 toastinfo_16-1.5-1PIGSTY.el9.aarch64.rpm pigsty 1.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_16-1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 toastinfo_16 toastinfo_16-1.5-1PIGSTY.el10.x86_64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_16-1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 toastinfo_16 toastinfo_16-1.5-1PIGSTY.el10.aarch64.rpm pigsty 1.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_16-1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 toastinfo_15 toastinfo_15-1.5-1PIGSTY.el8.x86_64.rpm pigsty 1.5 13.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_15-1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 toastinfo_15 toastinfo_15-1.5-1PIGSTY.el8.aarch64.rpm pigsty 1.5 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_15-1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 toastinfo_15 toastinfo_15-1.5-1PIGSTY.el9.x86_64.rpm pigsty 1.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_15-1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 toastinfo_15 toastinfo_15-1.5-1PIGSTY.el9.aarch64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_15-1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 toastinfo_15 toastinfo_15-1.5-1PIGSTY.el10.x86_64.rpm pigsty 1.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_15-1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 toastinfo_15 toastinfo_15-1.5-1PIGSTY.el10.aarch64.rpm pigsty 1.5 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_15-1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 toastinfo_14 toastinfo_14-1.5-1PIGSTY.el8.x86_64.rpm pigsty 1.5 13.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_14-1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 toastinfo_14 toastinfo_14-1.5-1PIGSTY.el8.aarch64.rpm pigsty 1.5 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_14-1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 toastinfo_14 toastinfo_14-1.5-1PIGSTY.el9.x86_64.rpm pigsty 1.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_14-1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 toastinfo_14 toastinfo_14-1.5-1PIGSTY.el9.aarch64.rpm pigsty 1.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_14-1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 toastinfo_14 toastinfo_14-1.5-1PIGSTY.el10.x86_64.rpm pigsty 1.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_14-1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 toastinfo_14 toastinfo_14-1.5-1PIGSTY.el10.aarch64.rpm pigsty 1.5 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_14-1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `toastinfo` 扩展的 RPM 包：

```bash
pig build pkg toastinfo         # 构建 RPM 包
```


## 安装

您可以直接安装 `toastinfo` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install toastinfo;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y toastinfo -v 18  # PG 18
pig ext install -y toastinfo -v 17  # PG 17
pig ext install -y toastinfo -v 16  # PG 16
pig ext install -y toastinfo -v 15  # PG 15
pig ext install -y toastinfo -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y toastinfo_18       # PG 18
dnf install -y toastinfo_17       # PG 17
dnf install -y toastinfo_16       # PG 16
dnf install -y toastinfo_15       # PG 15
dnf install -y toastinfo_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-toastinfo   # PG 18
apt install -y postgresql-17-toastinfo   # PG 17
apt install -y postgresql-16-toastinfo   # PG 16
apt install -y postgresql-15-toastinfo   # PG 15
apt install -y postgresql-14-toastinfo   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION toastinfo;
```




## 用法

> [toastinfo: 检查 varlena 列的 TOAST 存储详情](https://github.com/credativ/toastinfo)

toastinfo 暴露变长（varlena）数据类型的内部存储形式，显示 PostgreSQL 如何存储每个数据。

### 函数

**`pg_toastinfo(anyelement)`** -- 描述数据的存储形式：

```sql
SELECT a, length(b), pg_column_size(b), pg_toastinfo(b), pg_toastpointer(b)
FROM t;

        a         | length  | pg_column_size |              pg_toastinfo              | pg_toastpointer
------------------+---------+----------------+----------------------------------------+-----------------
 null             |       * |              * | null                                   |               *
 default          |       7 |              8 | short inline varlena                   |               *
 external-200     |     200 |            204 | long inline varlena, uncompressed      |               *
 external-10000   |   10000 |          10000 | toasted varlena, uncompressed          |           16427
 extended-10000   |   10000 |            125 | long inline varlena, compressed (pglz) |               *
 extended-1000000 | 1000000 |          11452 | toasted varlena, compressed (pglz)     |           16429
 extended-1000000 | 1000000 |           3936 | toasted varlena, compressed (lz4)      |           16430
```

可能的存储形式：
- `null` -- NULL 值
- `ordinary` -- 非 varlena 数据类型
- `short inline varlena` -- 最多 126 字节（1 字节头）
- `long inline varlena, (un)compressed` -- 最大 1GiB（4 字节头）
- `toasted varlena, (un)compressed` -- 最大 1GiB，存储在 TOAST 表中
- 压缩的 varlena 在 PG14+ 上显示压缩方法（`pglz`、`lz4`）

**`pg_toastpointer(anyelement)`** -- 返回 TOAST 表中的 `chunk_id` OID，非 TOAST 数据返回 NULL：

```sql
SELECT pg_toastpointer(large_column) FROM my_table;
```

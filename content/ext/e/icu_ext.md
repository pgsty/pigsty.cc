---
title: "icu_ext"
linkTitle: "icu_ext"
description: "访问ICU库提供的函数"
weight: 4240
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dverite/icu_ext">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dverite/icu_ext</div>
    <div class="ext-card__desc">https://github.com/dverite/icu_ext</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/icu_ext-1.10.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">icu_ext-1.10.0.tar.gz</div>
    <div class="ext-card__desc">icu_ext-1.10.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`icu_ext`**](/ext/e/icu_ext) | `1.10.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4240  | [**`icu_ext`**](/ext/e/icu_ext) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgpcre`](/ext/e/pgpcre) [`pg_xenophile`](/ext/e/pg_xenophile) [`unaccent`](/ext/e/unaccent) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.10.0` | {{< pgvers "18,17,16,15,14" >}} | `icu_ext` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10.0` | {{< pgvers "18,17,16,15,14" >}} | `icu_ext_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.10.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-icu-ext` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 |
| el8.aarch64 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 |
| el9.x86_64 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 |
| el9.aarch64 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 |
| el10.x86_64 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 |
| el10.aarch64 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 | AVAIL PIGSTY 1.10.0 2 |
| d12.x86_64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| d12.aarch64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| d13.x86_64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| d13.aarch64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| u22.x86_64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| u22.aarch64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| u24.x86_64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| u24.aarch64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| u26.x86_64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
| u26.aarch64 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 | AVAIL PGDG 1.10.0 1 |
@ el8.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_18-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel8.x86_64.rpm pgdg 1.10.0 47.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/icu_ext_18-1.10.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_18-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel8.aarch64.rpm pgdg 1.10.0 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/icu_ext_18-1.10.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 49.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_18-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel9.x86_64.rpm pgdg 1.10.0 48.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/icu_ext_18-1.10.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 47.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_18-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel9.aarch64.rpm pgdg 1.10.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/icu_ext_18-1.10.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_18-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel10.x86_64.rpm pgdg 1.10.0 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/icu_ext_18-1.10.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_18-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel10.aarch64.rpm pgdg 1.10.0 47.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/icu_ext_18-1.10.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 95.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_17-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel8.x86_64.rpm pgdg 1.9.0 46.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/icu_ext_17-1.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_17-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel8.aarch64.rpm pgdg 1.9.0 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/icu_ext_17-1.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 49.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_17-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel9.x86_64.rpm pgdg 1.9.0 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/icu_ext_17-1.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 47.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_17-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel9.aarch64.rpm pgdg 1.9.0 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/icu_ext_17-1.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_17-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel10.x86_64.rpm pgdg 1.9.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/icu_ext_17-1.9.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_17-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel10.aarch64.rpm pgdg 1.9.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/icu_ext_17-1.9.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 50.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_16-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel8.x86_64.rpm pgdg 1.9.0 46.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/icu_ext_16-1.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_16-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel8.aarch64.rpm pgdg 1.9.0 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/icu_ext_16-1.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 49.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_16-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel9.x86_64.rpm pgdg 1.9.0 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/icu_ext_16-1.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 47.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_16-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel9.aarch64.rpm pgdg 1.9.0 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/icu_ext_16-1.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_16-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel10.x86_64.rpm pgdg 1.9.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/icu_ext_16-1.9.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_16-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel10.aarch64.rpm pgdg 1.9.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/icu_ext_16-1.9.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_15-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel8.x86_64.rpm pgdg 1.9.0 46.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/icu_ext_15-1.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_15-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel8.aarch64.rpm pgdg 1.9.0 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/icu_ext_15-1.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_15-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel9.x86_64.rpm pgdg 1.9.0 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/icu_ext_15-1.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 48.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_15-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel9.aarch64.rpm pgdg 1.9.0 46.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/icu_ext_15-1.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_15-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel10.x86_64.rpm pgdg 1.9.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/icu_ext_15-1.9.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_15-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel10.aarch64.rpm pgdg 1.9.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/icu_ext_15-1.9.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 51.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_14-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel8.x86_64.rpm pgdg 1.9.0 46.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/icu_ext_14-1.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_14-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel8.aarch64.rpm pgdg 1.9.0 45.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/icu_ext_14-1.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_14-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel9.x86_64.rpm pgdg 1.9.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/icu_ext_14-1.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 48.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_14-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel9.aarch64.rpm pgdg 1.9.0 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/icu_ext_14-1.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_14-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel10.x86_64.rpm pgdg 1.9.0 48.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/icu_ext_14-1.9.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_14-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel10.aarch64.rpm pgdg 1.9.0 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/icu_ext_14-1.9.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 104.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 95.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 92.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `icu_ext` 扩展的 RPM 包：

```bash
pig build pkg icu_ext         # 构建 RPM 包
```


## 安装

您可以直接安装 `icu_ext` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install icu_ext;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y icu_ext -v 18  # PG 18
pig ext install -y icu_ext -v 17  # PG 17
pig ext install -y icu_ext -v 16  # PG 16
pig ext install -y icu_ext -v 15  # PG 15
pig ext install -y icu_ext -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y icu_ext_18       # PG 18
dnf install -y icu_ext_17       # PG 17
dnf install -y icu_ext_16       # PG 16
dnf install -y icu_ext_15       # PG 15
dnf install -y icu_ext_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-icu-ext   # PG 18
apt install -y postgresql-17-icu-ext   # PG 17
apt install -y postgresql-16-icu-ext   # PG 16
apt install -y postgresql-15-icu-ext   # PG 15
apt install -y postgresql-14-icu-ext   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION icu_ext;
```



## 用法

> [icu_ext: PostgreSQL 的 ICU 扩展函数](https://github.com/dverite/icu_ext)

将 [ICU](https://icu.unicode.org/) 功能暴露给 PostgreSQL。需要 PostgreSQL 11+ 且编译时启用了 ICU（`--with-icu`）。

### 版本信息

```sql
SELECT icu_version();           -- ICU 库版本
SELECT icu_unicode_version();   -- Unicode 标准版本
```

### 区域设置函数

```sql
SELECT * FROM icu_locales_list() WHERE name LIKE 'es%' LIMIT 5;
SELECT icu_default_locale();
SELECT icu_set_default_locale('en');
```

### 排序规则属性

```sql
SELECT * FROM icu_collation_attributes('fr-u-ks-level2-kn');
```

### 字符串比较

```sql
-- 大小写敏感、重音不敏感的比较：
SELECT icu_compare('abce', 'abce', 'en-u-ks-level1-kc-true');  -- 0
SELECT icu_compare('Abce', 'abce', 'en-u-ks-level1-kc-true');  -- 1
```

### 排序键（用于唯一索引）

```sql
CREATE UNIQUE INDEX idx ON my_table((icu_sort_key(name, 'fr-u-ks-level1')));
```

### 文本边界分析

```sql
SELECT * FROM icu_character_boundaries('Hello', 'en');
SELECT * FROM icu_word_boundaries('I like books', 'en');
SELECT * FROM icu_sentence_boundaries('Mr. Smith went home. He was tired.', 'en');
SELECT * FROM icu_line_boundaries('Long text here', 'en');
```

### Unicode 规范化与转换

```sql
SELECT icu_normalize('text', 'NFC');
SELECT icu_is_normalized('text', 'NFC');
SELECT icu_transform('Hello', 'Latin-Cyrillic');
SELECT * FROM icu_transforms_list();
```

### 数字拼读

```sql
SELECT icu_number_spellout(42, 'en');   -- 'forty-two'
SELECT icu_number_spellout(42, 'fr');   -- 'quarante-deux'
```

### 欺骗与混淆检测

```sql
SELECT icu_spoof_check('paypal');
SELECT icu_confusable_strings_check('google', 'gооgle');
```

### 字符信息

```sql
SELECT icu_char_name('A');
SELECT icu_char_type('A');
```

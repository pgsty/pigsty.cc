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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/icu_ext-1.11.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">icu_ext-1.11.0.tar.gz</div>
    <div class="ext-card__desc">icu_ext-1.11.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`icu_ext`**](/ext/e/icu_ext) | `1.11.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `icu_ext` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `icu_ext_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-icu-ext` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| el8.aarch64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| el9.x86_64 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 |
| el9.aarch64 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 |
| el10.x86_64 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 |
| el10.aarch64 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 | AVAIL PGDG 1.11.0 4 |
| d12.x86_64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| d12.aarch64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| d13.x86_64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| d13.aarch64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| u22.x86_64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| u22.aarch64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| u24.x86_64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| u24.aarch64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| u26.x86_64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
| u26.aarch64 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 | AVAIL PGDG 1.11.0 3 |
@ el8.x86_64 18 icu_ext_18 icu_ext_18-1.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.11.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/icu_ext_18-1.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_18-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel8.x86_64.rpm pgdg 1.10.0 47.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/icu_ext_18-1.10.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 icu_ext_18 icu_ext_18-1.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.11.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/icu_ext_18-1.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_18-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel8.aarch64.rpm pgdg 1.10.0 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/icu_ext_18-1.10.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 icu_ext_18 icu_ext_18-1.11.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.11.0 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/icu_ext_18-1.11.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.10.0 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/icu_ext_18-1.10.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 49.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_18-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel9.x86_64.rpm pgdg 1.10.0 48.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/icu_ext_18-1.10.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 icu_ext_18 icu_ext_18-1.11.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.11.0 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/icu_ext_18-1.11.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.10.0 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/icu_ext_18-1.10.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 47.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_18-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel9.aarch64.rpm pgdg 1.10.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/icu_ext_18-1.10.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 icu_ext_18 icu_ext_18-1.11.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.11.0 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/icu_ext_18-1.11.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.10.0 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/icu_ext_18-1.10.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_18-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel10.x86_64.rpm pgdg 1.10.0 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/icu_ext_18-1.10.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 icu_ext_18 icu_ext_18-1.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.11.0 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/icu_ext_18-1.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.10.0 47.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/icu_ext_18-1.10.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_18-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 icu_ext_18 icu_ext_18-1.10.0-1PGDG.rhel10.aarch64.rpm pgdg 1.10.0 47.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/icu_ext_18-1.10.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg12+1_amd64.deb pgdg 1.11.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg12+1_amd64.deb pgdg 1.10.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg12+1_arm64.deb pgdg 1.11.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg12+1_arm64.deb pgdg 1.10.0 92.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg13+1_amd64.deb pgdg 1.11.0 94.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg13+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg13+1_arm64.deb pgdg 1.11.0 92.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg13+1_arm64.deb pgdg 1.10.0 92.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb pgdg 1.11.0 95.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb pgdg 1.10.0 95.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 95.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb pgdg 1.11.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb pgdg 1.10.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb pgdg 1.11.0 94.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb pgdg 1.11.0 92.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb pgdg 1.11.0 93.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb pgdg 1.10.0 93.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb pgdg 1.11.0 91.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-icu-ext postgresql-18-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-18-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 icu_ext_17 icu_ext_17-1.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.11.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/icu_ext_17-1.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_17-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel8.x86_64.rpm pgdg 1.9.0 46.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/icu_ext_17-1.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 icu_ext_17 icu_ext_17-1.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.11.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/icu_ext_17-1.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_17-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel8.aarch64.rpm pgdg 1.9.0 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/icu_ext_17-1.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 icu_ext_17 icu_ext_17-1.11.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.11.0 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/icu_ext_17-1.11.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 icu_ext_17 icu_ext_17-1.10.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.10.0 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/icu_ext_17-1.10.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 49.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_17-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel9.x86_64.rpm pgdg 1.9.0 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/icu_ext_17-1.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 icu_ext_17 icu_ext_17-1.11.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.11.0 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/icu_ext_17-1.11.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 icu_ext_17 icu_ext_17-1.10.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.10.0 47.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/icu_ext_17-1.10.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 47.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_17-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel9.aarch64.rpm pgdg 1.9.0 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/icu_ext_17-1.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 icu_ext_17 icu_ext_17-1.11.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.11.0 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/icu_ext_17-1.11.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 icu_ext_17 icu_ext_17-1.10.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.10.0 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/icu_ext_17-1.10.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_17-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel10.x86_64.rpm pgdg 1.9.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/icu_ext_17-1.9.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 icu_ext_17 icu_ext_17-1.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.11.0 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/icu_ext_17-1.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 icu_ext_17 icu_ext_17-1.10.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.10.0 47.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/icu_ext_17-1.10.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 icu_ext_17 icu_ext_17-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_17-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 icu_ext_17 icu_ext_17-1.9.0-1PGDG.rhel10.aarch64.rpm pgdg 1.9.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/icu_ext_17-1.9.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg12+1_amd64.deb pgdg 1.11.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg12+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg12+1_arm64.deb pgdg 1.11.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg12+1_arm64.deb pgdg 1.10.0 92.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg13+1_amd64.deb pgdg 1.11.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg13+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg13+1_arm64.deb pgdg 1.11.0 92.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg13+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb pgdg 1.11.0 106.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb pgdg 1.11.0 103.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb pgdg 1.11.0 94.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb pgdg 1.11.0 92.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb pgdg 1.11.0 93.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb pgdg 1.10.0 93.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb pgdg 1.11.0 91.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-icu-ext postgresql-17-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-17-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 icu_ext_16 icu_ext_16-1.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.11.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/icu_ext_16-1.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 50.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_16-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel8.x86_64.rpm pgdg 1.9.0 46.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/icu_ext_16-1.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 icu_ext_16 icu_ext_16-1.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.11.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/icu_ext_16-1.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_16-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel8.aarch64.rpm pgdg 1.9.0 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/icu_ext_16-1.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 icu_ext_16 icu_ext_16-1.11.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.11.0 49.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/icu_ext_16-1.11.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 icu_ext_16 icu_ext_16-1.10.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.10.0 48.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/icu_ext_16-1.10.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 49.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_16-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel9.x86_64.rpm pgdg 1.9.0 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/icu_ext_16-1.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 icu_ext_16 icu_ext_16-1.11.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.11.0 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/icu_ext_16-1.11.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 icu_ext_16 icu_ext_16-1.10.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.10.0 47.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/icu_ext_16-1.10.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 47.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_16-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel9.aarch64.rpm pgdg 1.9.0 45.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/icu_ext_16-1.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 icu_ext_16 icu_ext_16-1.11.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.11.0 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/icu_ext_16-1.11.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 icu_ext_16 icu_ext_16-1.10.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.10.0 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/icu_ext_16-1.10.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_16-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel10.x86_64.rpm pgdg 1.9.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/icu_ext_16-1.9.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 icu_ext_16 icu_ext_16-1.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.11.0 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/icu_ext_16-1.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 icu_ext_16 icu_ext_16-1.10.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.10.0 47.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/icu_ext_16-1.10.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 icu_ext_16 icu_ext_16-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_16-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 icu_ext_16 icu_ext_16-1.9.0-1PGDG.rhel10.aarch64.rpm pgdg 1.9.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/icu_ext_16-1.9.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg12+1_amd64.deb pgdg 1.11.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg12+1_amd64.deb pgdg 1.10.0 94.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg12+1_arm64.deb pgdg 1.11.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg12+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg13+1_amd64.deb pgdg 1.11.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg13+1_amd64.deb pgdg 1.10.0 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg13+1_arm64.deb pgdg 1.11.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg13+1_arm64.deb pgdg 1.10.0 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb pgdg 1.11.0 106.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb pgdg 1.11.0 104.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb pgdg 1.11.0 94.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb pgdg 1.11.0 92.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb pgdg 1.11.0 93.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb pgdg 1.10.0 93.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb pgdg 1.11.0 91.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-icu-ext postgresql-16-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-16-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 icu_ext_15 icu_ext_15-1.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.11.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/icu_ext_15-1.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 51.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_15-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel8.x86_64.rpm pgdg 1.9.0 46.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/icu_ext_15-1.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 icu_ext_15 icu_ext_15-1.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.11.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/icu_ext_15-1.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_15-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel8.aarch64.rpm pgdg 1.9.0 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/icu_ext_15-1.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 icu_ext_15 icu_ext_15-1.11.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.11.0 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/icu_ext_15-1.11.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 icu_ext_15 icu_ext_15-1.10.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.10.0 49.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/icu_ext_15-1.10.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_15-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel9.x86_64.rpm pgdg 1.9.0 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/icu_ext_15-1.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 icu_ext_15 icu_ext_15-1.11.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.11.0 47.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/icu_ext_15-1.11.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 icu_ext_15 icu_ext_15-1.10.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.10.0 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/icu_ext_15-1.10.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 48.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_15-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel9.aarch64.rpm pgdg 1.9.0 46.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/icu_ext_15-1.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 icu_ext_15 icu_ext_15-1.11.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.11.0 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/icu_ext_15-1.11.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 icu_ext_15 icu_ext_15-1.10.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.10.0 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/icu_ext_15-1.10.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_15-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel10.x86_64.rpm pgdg 1.9.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/icu_ext_15-1.9.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 icu_ext_15 icu_ext_15-1.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.11.0 47.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/icu_ext_15-1.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 icu_ext_15 icu_ext_15-1.10.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.10.0 47.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/icu_ext_15-1.10.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 icu_ext_15 icu_ext_15-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_15-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 icu_ext_15 icu_ext_15-1.9.0-1PGDG.rhel10.aarch64.rpm pgdg 1.9.0 46.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/icu_ext_15-1.9.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg12+1_amd64.deb pgdg 1.11.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg12+1_amd64.deb pgdg 1.10.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg12+1_arm64.deb pgdg 1.11.0 92.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg12+1_arm64.deb pgdg 1.10.0 92.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg13+1_amd64.deb pgdg 1.11.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg13+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg13+1_arm64.deb pgdg 1.11.0 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg13+1_arm64.deb pgdg 1.10.0 92.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb pgdg 1.11.0 106.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 106.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb pgdg 1.11.0 103.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 103.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb pgdg 1.11.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb pgdg 1.11.0 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb pgdg 1.11.0 93.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb pgdg 1.10.0 93.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb pgdg 1.11.0 91.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-icu-ext postgresql-15-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-15-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 icu_ext_14 icu_ext_14-1.11.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.11.0 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/icu_ext_14-1.11.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el8.x86_64.rpm pigsty 1.10.0 51.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/icu_ext_14-1.10.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel8.x86_64.rpm pgdg 1.9.0 46.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/icu_ext_14-1.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 icu_ext_14 icu_ext_14-1.11.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.11.0 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/icu_ext_14-1.11.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el8.aarch64.rpm pigsty 1.10.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/icu_ext_14-1.10.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel8.aarch64.rpm pgdg 1.9.0 45.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/icu_ext_14-1.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 icu_ext_14 icu_ext_14-1.11.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.11.0 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/icu_ext_14-1.11.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 icu_ext_14 icu_ext_14-1.10.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.10.0 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/icu_ext_14-1.10.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el9.x86_64.rpm pigsty 1.10.0 50.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/icu_ext_14-1.10.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel9.x86_64.rpm pgdg 1.9.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/icu_ext_14-1.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 icu_ext_14 icu_ext_14-1.11.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.11.0 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/icu_ext_14-1.11.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 icu_ext_14 icu_ext_14-1.10.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.10.0 47.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/icu_ext_14-1.10.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el9.aarch64.rpm pigsty 1.10.0 48.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/icu_ext_14-1.10.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel9.aarch64.rpm pgdg 1.9.0 46.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/icu_ext_14-1.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 icu_ext_14 icu_ext_14-1.11.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.11.0 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/icu_ext_14-1.11.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 icu_ext_14 icu_ext_14-1.10.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.10.0 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/icu_ext_14-1.10.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el10.x86_64.rpm pigsty 1.10.0 49.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/icu_ext_14-1.10.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel10.x86_64.rpm pgdg 1.9.0 48.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/icu_ext_14-1.9.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 icu_ext_14 icu_ext_14-1.11.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.11.0 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/icu_ext_14-1.11.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 icu_ext_14 icu_ext_14-1.10.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.10.0 47.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/icu_ext_14-1.10.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 icu_ext_14 icu_ext_14-1.10.0-1PIGSTY.el10.aarch64.rpm pigsty 1.10.0 48.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/icu_ext_14-1.10.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 icu_ext_14 icu_ext_14-1.9.0-1PGDG.rhel10.aarch64.rpm pgdg 1.9.0 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/icu_ext_14-1.9.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg12+1_amd64.deb pgdg 1.11.0 94.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg12+1_amd64.deb pgdg 1.10.0 95.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg12+1_amd64.deb pgdg 1.10.0 94.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg12+1_arm64.deb pgdg 1.11.0 92.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg12+1_arm64.deb pgdg 1.10.0 92.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg12+1_arm64.deb pgdg 1.10.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg13+1_amd64.deb pgdg 1.11.0 95.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg13+1_amd64.deb pgdg 1.10.0 94.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg13+1_amd64.deb pgdg 1.10.0 94.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg13+1_arm64.deb pgdg 1.11.0 92.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg13+1_arm64.deb pgdg 1.10.0 92.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg13+1_arm64.deb pgdg 1.10.0 92.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb pgdg 1.11.0 107.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb pgdg 1.10.0 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb pgdg 1.10.0 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb pgdg 1.11.0 104.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb pgdg 1.10.0 104.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb pgdg 1.10.0 104.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb pgdg 1.11.0 94.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb pgdg 1.10.0 95.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb pgdg 1.10.0 95.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb pgdg 1.11.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb pgdg 1.10.0 92.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb pgdg 1.11.0 94.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb pgdg 1.10.0 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb pgdg 1.11.0 91.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.11.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb pgdg 1.10.0 91.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-4.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-icu-ext postgresql-14-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb pgdg 1.10.0 92.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/icu-ext/postgresql-14-icu-ext_1.10.0-3.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `icu_ext` 扩展的 RPM 包：

```bash
pig build pkg icu_ext         # 构建 RPM 包
```


## 安装

您可以直接安装 `icu_ext` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
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

> 来源：[README](https://github.com/dverite/icu_ext/blob/master/README.md), [datetime docs](https://github.com/dverite/icu_ext/blob/master/README-datetime.md), [v1.10.0 release](https://github.com/dverite/icu_ext/releases/tag/v1.10.0)

`icu_ext` 将 [ICU](https://icu.unicode.org/) 功能暴露给 PostgreSQL。上游要求 PostgreSQL 11+ 且编译时启用 ICU（`--with-icu`）；pgext 目录记录的版本是 `1.10.0`，覆盖 PostgreSQL 14-18，v1.10.0 release 说明中提到 PostgreSQL 18 兼容性。

### 启用扩展

```sql
CREATE EXTENSION icu_ext;
```

### 版本信息

```sql
SELECT icu_version();           -- ICU library version
SELECT icu_unicode_version();   -- Unicode standard version
```

### Locale 函数

```sql
SELECT * FROM icu_locales_list() WHERE name LIKE 'es%' LIMIT 5;
SELECT icu_default_locale();
SELECT icu_set_default_locale('en');
```

### Collation 属性

```sql
SELECT * FROM icu_collation_attributes('fr-u-ks-level2-kn');
```

### 字符串比较

```sql
-- Case-sensitive, accent-insensitive comparison:
SELECT icu_compare('abce', 'abce', 'en-u-ks-level1-kc-true');  -- 0
SELECT icu_compare('Abce', 'abce', 'en-u-ks-level1-kc-true');  -- 1
```

### 排序键与语言学搜索

```sql
CREATE UNIQUE INDEX idx ON my_table((icu_sort_key(name, 'fr-u-ks-level1')));

SELECT icu_strpos('Jean-Rene Dupont', 'jeanrene', 'fr-u-ks-level1-ka-shifted');
SELECT icu_replace('Jean-Rene Dupont', 'jeanrene', '{firstname}', 'fr-u-ks-level1-ka-shifted');
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

### 日期与时间本地化

```sql
SET icu_ext.locale TO '@calendar=buddhist';

SELECT icu_format_date('2020-12-31'::date, '{medium}', 'en@calendar=ethiopic');
SELECT icu_parse_date('25/09/2566', 'dd/MM/yyyy');
SELECT icu_format_datetime(now(), 'GGGG dd/MMMM/yyyy HH:mm:ss.SSS z', 'fr@calendar=buddhist');
```

datetime 文档还定义了 `icu_date`、`icu_timestamptz` 和 `icu_interval`，以及用于本地化输入/输出和感知日历算术的 `icu_ext.locale`、`icu_ext.date_format`、`icu_ext.timestamptz_format` 设置。

### 数字拼写

```sql
SELECT icu_number_spellout(42, 'en');   -- 'forty-two'
SELECT icu_number_spellout(42, 'fr');   -- 'quarante-deux'
```

### 欺骗与混淆检测

```sql
SELECT icu_spoof_check('paypal');
SELECT icu_confusable_strings_check('google', 'gооgle');
SELECT icu_confusable_string_skeleton('phi1');
```

### 字符信息

```sql
SELECT icu_char_name('A');
SELECT icu_char_type('A');
SELECT icu_char_ublock_id('A');
SELECT * FROM icu_unicode_blocks() WHERE block_name = 'Basic_Latin';
```

### 注意事项

- 依赖 ICU collation 或 Unicode 数据的函数，在链接的 ICU 库变化后行为可能改变。
- `icu_sort_key()` 适合用于索引，但基于排序键构建的索引在 ICU 升级后应复核。

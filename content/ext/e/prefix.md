---
title: "prefix"
linkTitle: "prefix"
description: "前缀树数据类型"
weight: 3500
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dimitri/prefix">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dimitri/prefix</div>
    <div class="ext-card__desc">https://github.com/dimitri/prefix</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/prefix-1.2.11.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">prefix-1.2.11.tar.gz</div>
    <div class="ext-card__desc">prefix-1.2.11.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_prefix`**](/ext/e/prefix) | `1.2.11` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3500  | [**`prefix`**](/ext/e/prefix) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`semver`](/ext/e/semver) [`ltree`](/ext/e/ltree) [`citext`](/ext/e/citext) [`pg_trgm`](/ext/e/pg_trgm) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.11` | {{< pgvers "18,17,16,15,14" >}} | `pg_prefix` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.11` | {{< pgvers "18,17,16,15,14" >}} | `prefix_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.11` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-prefix` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 3 | AVAIL PGDG 1.2.11 3 |
| el8.aarch64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 3 | AVAIL PGDG 1.2.11 3 |
| el9.x86_64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 3 | AVAIL PGDG 1.2.11 2 |
| el9.aarch64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 3 | AVAIL PGDG 1.2.11 3 |
| el10.x86_64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| el10.aarch64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| d12.x86_64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| d12.aarch64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| d13.x86_64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| d13.aarch64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| u22.x86_64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| u22.aarch64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| u24.x86_64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| u24.aarch64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| u26.x86_64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
| u26.aarch64 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 | AVAIL PGDG 1.2.11 2 |
@ el8.x86_64 18 prefix_18 prefix_18-1.2.11-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.11 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/prefix_18-1.2.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 prefix_18 prefix_18-1.2.10-1PIGSTY.el8.x86_64.rpm pigsty 1.2.10 29.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/prefix_18-1.2.10-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 prefix_18 prefix_18-1.2.11-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.11 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/prefix_18-1.2.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 prefix_18 prefix_18-1.2.10-1PIGSTY.el8.aarch64.rpm pigsty 1.2.10 27.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/prefix_18-1.2.10-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 prefix_18 prefix_18-1.2.11-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2.11 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/prefix_18-1.2.11-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 prefix_18 prefix_18-1.2.10-1PIGSTY.el9.x86_64.rpm pigsty 1.2.10 27.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/prefix_18-1.2.10-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 prefix_18 prefix_18-1.2.11-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2.11 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/prefix_18-1.2.11-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 prefix_18 prefix_18-1.2.10-1PIGSTY.el9.aarch64.rpm pigsty 1.2.10 26.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/prefix_18-1.2.10-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 prefix_18 prefix_18-1.2.11-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2.11 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/prefix_18-1.2.11-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 prefix_18 prefix_18-1.2.10-1PIGSTY.el10.x86_64.rpm pigsty 1.2.10 27.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/prefix_18-1.2.10-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 prefix_18 prefix_18-1.2.11-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2.11 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/prefix_18-1.2.11-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 prefix_18 prefix_18-1.2.10-1PIGSTY.el10.aarch64.rpm pigsty 1.2.10 27.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/prefix_18-1.2.10-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg12+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg12+1_amd64.deb pgdg 1.2.10 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg12+1_arm64.deb pgdg 1.2.11 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg12+1_arm64.deb pgdg 1.2.10 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg13+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg13+1_amd64.deb pgdg 1.2.10 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg13+1_arm64.deb pgdg 1.2.11 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg13+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg22.04+1_amd64.deb pgdg 1.2.11 42.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg22.04+1_amd64.deb pgdg 1.2.10 42.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg22.04+1_arm64.deb pgdg 1.2.11 41.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg22.04+1_arm64.deb pgdg 1.2.10 41.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg24.04+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg24.04+1_amd64.deb pgdg 1.2.10 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg24.04+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg24.04+1_arm64.deb pgdg 1.2.10 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg26.04+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg26.04+1_amd64.deb pgdg 1.2.10 40.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.11-1.pgdg26.04+1_arm64.deb pgdg 1.2.11 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.11-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-prefix postgresql-18-prefix_1.2.10-4.pgdg26.04+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-18-prefix_1.2.10-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 prefix_17 prefix_17-1.2.11-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.11 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/prefix_17-1.2.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 prefix_17 prefix_17-1.2.10-2PGDG.rhel8.x86_64.rpm pgdg 1.2.10 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/prefix_17-1.2.10-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 prefix_17 prefix_17-1.2.11-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.11 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/prefix_17-1.2.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 prefix_17 prefix_17-1.2.10-2PGDG.rhel8.aarch64.rpm pgdg 1.2.10 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/prefix_17-1.2.10-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 prefix_17 prefix_17-1.2.11-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2.11 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/prefix_17-1.2.11-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 prefix_17 prefix_17-1.2.10-2PGDG.rhel9.x86_64.rpm pgdg 1.2.10 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/prefix_17-1.2.10-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 prefix_17 prefix_17-1.2.11-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2.11 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/prefix_17-1.2.11-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 prefix_17 prefix_17-1.2.10-2PGDG.rhel9.aarch64.rpm pgdg 1.2.10 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/prefix_17-1.2.10-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 prefix_17 prefix_17-1.2.11-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2.11 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/prefix_17-1.2.11-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 prefix_17 prefix_17-1.2.10-3PGDG.rhel10.x86_64.rpm pgdg 1.2.10 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/prefix_17-1.2.10-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 prefix_17 prefix_17-1.2.11-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2.11 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/prefix_17-1.2.11-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 prefix_17 prefix_17-1.2.10-3PGDG.rhel10.aarch64.rpm pgdg 1.2.10 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/prefix_17-1.2.10-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg12+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg12+1_amd64.deb pgdg 1.2.10 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg12+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg12+1_arm64.deb pgdg 1.2.10 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg13+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg13+1_amd64.deb pgdg 1.2.10 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg13+1_arm64.deb pgdg 1.2.11 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg13+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg22.04+1_amd64.deb pgdg 1.2.11 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg22.04+1_amd64.deb pgdg 1.2.10 43.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg22.04+1_arm64.deb pgdg 1.2.11 42.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg22.04+1_arm64.deb pgdg 1.2.10 42.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg24.04+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg24.04+1_amd64.deb pgdg 1.2.10 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg24.04+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg24.04+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg26.04+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg26.04+1_amd64.deb pgdg 1.2.10 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.11-1.pgdg26.04+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.11-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-prefix postgresql-17-prefix_1.2.10-4.pgdg26.04+1_arm64.deb pgdg 1.2.10 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-17-prefix_1.2.10-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 prefix_16 prefix_16-1.2.11-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.11 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/prefix_16-1.2.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 prefix_16 prefix_16-1.2.10-1PGDG.rhel8.x86_64.rpm pgdg 1.2.10 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/prefix_16-1.2.10-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 prefix_16 prefix_16-1.2.11-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.11 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/prefix_16-1.2.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 prefix_16 prefix_16-1.2.10-1PGDG.rhel8.aarch64.rpm pgdg 1.2.10 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/prefix_16-1.2.10-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 prefix_16 prefix_16-1.2.11-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2.11 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/prefix_16-1.2.11-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 prefix_16 prefix_16-1.2.10-1PGDG.rhel9.x86_64.rpm pgdg 1.2.10 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/prefix_16-1.2.10-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 prefix_16 prefix_16-1.2.11-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2.11 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/prefix_16-1.2.11-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 prefix_16 prefix_16-1.2.10-1PGDG.rhel9.aarch64.rpm pgdg 1.2.10 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/prefix_16-1.2.10-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 prefix_16 prefix_16-1.2.11-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2.11 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/prefix_16-1.2.11-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 prefix_16 prefix_16-1.2.10-3PGDG.rhel10.x86_64.rpm pgdg 1.2.10 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/prefix_16-1.2.10-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 prefix_16 prefix_16-1.2.11-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2.11 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/prefix_16-1.2.11-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 prefix_16 prefix_16-1.2.10-3PGDG.rhel10.aarch64.rpm pgdg 1.2.10 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/prefix_16-1.2.10-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg12+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg12+1_amd64.deb pgdg 1.2.10 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg12+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg12+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg13+1_amd64.deb pgdg 1.2.11 40.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg13+1_amd64.deb pgdg 1.2.10 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg13+1_arm64.deb pgdg 1.2.11 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg13+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg22.04+1_amd64.deb pgdg 1.2.11 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg22.04+1_amd64.deb pgdg 1.2.10 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg22.04+1_arm64.deb pgdg 1.2.11 42.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg22.04+1_arm64.deb pgdg 1.2.10 42.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg24.04+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg24.04+1_amd64.deb pgdg 1.2.10 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg24.04+1_arm64.deb pgdg 1.2.11 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg24.04+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg26.04+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg26.04+1_amd64.deb pgdg 1.2.10 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.11-1.pgdg26.04+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.11-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-prefix postgresql-16-prefix_1.2.10-4.pgdg26.04+1_arm64.deb pgdg 1.2.10 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-16-prefix_1.2.10-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 prefix_15 prefix_15-1.2.11-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.11 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/prefix_15-1.2.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 prefix_15 prefix_15-1.2.10-1PGDG.rhel8.x86_64.rpm pgdg 1.2.10 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/prefix_15-1.2.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 prefix_15 prefix_15-1.2.9-3.rhel8.x86_64.rpm pgdg 1.2.9 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/prefix_15-1.2.9-3.rhel8.x86_64.rpm
@ el8.aarch64 15 prefix_15 prefix_15-1.2.11-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.11 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/prefix_15-1.2.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 prefix_15 prefix_15-1.2.10-1PGDG.rhel8.aarch64.rpm pgdg 1.2.10 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/prefix_15-1.2.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 prefix_15 prefix_15-1.2.9-3.rhel8.aarch64.rpm pgdg 1.2.9 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/prefix_15-1.2.9-3.rhel8.aarch64.rpm
@ el9.x86_64 15 prefix_15 prefix_15-1.2.11-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2.11 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/prefix_15-1.2.11-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 prefix_15 prefix_15-1.2.10-1PGDG.rhel9.x86_64.rpm pgdg 1.2.10 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/prefix_15-1.2.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 prefix_15 prefix_15-1.2.9-3.rhel9.x86_64.rpm pgdg 1.2.9 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/prefix_15-1.2.9-3.rhel9.x86_64.rpm
@ el9.aarch64 15 prefix_15 prefix_15-1.2.11-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2.11 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/prefix_15-1.2.11-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 prefix_15 prefix_15-1.2.10-1PGDG.rhel9.aarch64.rpm pgdg 1.2.10 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/prefix_15-1.2.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 prefix_15 prefix_15-1.2.9-3.rhel9.aarch64.rpm pgdg 1.2.9 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/prefix_15-1.2.9-3.rhel9.aarch64.rpm
@ el10.x86_64 15 prefix_15 prefix_15-1.2.11-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2.11 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/prefix_15-1.2.11-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 prefix_15 prefix_15-1.2.10-3PGDG.rhel10.x86_64.rpm pgdg 1.2.10 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/prefix_15-1.2.10-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 prefix_15 prefix_15-1.2.11-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2.11 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/prefix_15-1.2.11-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 prefix_15 prefix_15-1.2.10-3PGDG.rhel10.aarch64.rpm pgdg 1.2.10 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/prefix_15-1.2.10-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg12+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg12+1_amd64.deb pgdg 1.2.10 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg12+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg12+1_arm64.deb pgdg 1.2.10 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg13+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg13+1_amd64.deb pgdg 1.2.10 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg13+1_arm64.deb pgdg 1.2.11 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg13+1_arm64.deb pgdg 1.2.10 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg22.04+1_amd64.deb pgdg 1.2.11 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg22.04+1_amd64.deb pgdg 1.2.10 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg22.04+1_arm64.deb pgdg 1.2.11 42.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg22.04+1_arm64.deb pgdg 1.2.10 42.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg24.04+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg24.04+1_amd64.deb pgdg 1.2.10 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg24.04+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg24.04+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg26.04+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg26.04+1_amd64.deb pgdg 1.2.10 40.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.11-1.pgdg26.04+1_arm64.deb pgdg 1.2.11 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.11-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-prefix postgresql-15-prefix_1.2.10-4.pgdg26.04+1_arm64.deb pgdg 1.2.10 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-15-prefix_1.2.10-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 prefix_14 prefix_14-1.2.11-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.11 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/prefix_14-1.2.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 prefix_14 prefix_14-1.2.10-1PGDG.rhel8.x86_64.rpm pgdg 1.2.10 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/prefix_14-1.2.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 prefix_14 prefix_14-1.2.9-3.rhel8.x86_64.rpm pgdg 1.2.9 51.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/prefix_14-1.2.9-3.rhel8.x86_64.rpm
@ el8.aarch64 14 prefix_14 prefix_14-1.2.11-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.11 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/prefix_14-1.2.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 prefix_14 prefix_14-1.2.10-1PGDG.rhel8.aarch64.rpm pgdg 1.2.10 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/prefix_14-1.2.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 prefix_14 prefix_14-1.2.9-3.rhel8.aarch64.rpm pgdg 1.2.9 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/prefix_14-1.2.9-3.rhel8.aarch64.rpm
@ el9.x86_64 14 prefix_14 prefix_14-1.2.11-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2.11 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/prefix_14-1.2.11-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 prefix_14 prefix_14-1.2.10-1PGDG.rhel9.x86_64.rpm pgdg 1.2.10 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/prefix_14-1.2.10-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 prefix_14 prefix_14-1.2.11-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2.11 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/prefix_14-1.2.11-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 prefix_14 prefix_14-1.2.10-1PGDG.rhel9.aarch64.rpm pgdg 1.2.10 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/prefix_14-1.2.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 prefix_14 prefix_14-1.2.9-3.rhel9.aarch64.rpm pgdg 1.2.9 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/prefix_14-1.2.9-3.rhel9.aarch64.rpm
@ el10.x86_64 14 prefix_14 prefix_14-1.2.11-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2.11 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/prefix_14-1.2.11-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 prefix_14 prefix_14-1.2.10-3PGDG.rhel10.x86_64.rpm pgdg 1.2.10 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/prefix_14-1.2.10-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 prefix_14 prefix_14-1.2.11-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2.11 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/prefix_14-1.2.11-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 prefix_14 prefix_14-1.2.10-3PGDG.rhel10.aarch64.rpm pgdg 1.2.10 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/prefix_14-1.2.10-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg12+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg12+1_amd64.deb pgdg 1.2.10 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg12+1_arm64.deb pgdg 1.2.11 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg12+1_arm64.deb pgdg 1.2.10 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg13+1_amd64.deb pgdg 1.2.11 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg13+1_amd64.deb pgdg 1.2.10 40.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg13+1_arm64.deb pgdg 1.2.11 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg13+1_arm64.deb pgdg 1.2.10 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg22.04+1_amd64.deb pgdg 1.2.11 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg22.04+1_amd64.deb pgdg 1.2.10 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg22.04+1_arm64.deb pgdg 1.2.11 42.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg22.04+1_arm64.deb pgdg 1.2.10 42.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg24.04+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg24.04+1_amd64.deb pgdg 1.2.10 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg24.04+1_arm64.deb pgdg 1.2.11 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg24.04+1_arm64.deb pgdg 1.2.10 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg26.04+1_amd64.deb pgdg 1.2.11 40.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg26.04+1_amd64.deb pgdg 1.2.10 40.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.11-1.pgdg26.04+1_arm64.deb pgdg 1.2.11 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.11-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-prefix postgresql-14-prefix_1.2.10-4.pgdg26.04+1_arm64.deb pgdg 1.2.10 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/prefix/postgresql-14-prefix_1.2.10-4.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_prefix` 扩展的 RPM 包：

```bash
pig build pkg pg_prefix         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_prefix` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_prefix;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_prefix -v 18  # PG 18
pig ext install -y pg_prefix -v 17  # PG 17
pig ext install -y pg_prefix -v 16  # PG 16
pig ext install -y pg_prefix -v 15  # PG 15
pig ext install -y pg_prefix -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y prefix_18       # PG 18
dnf install -y prefix_17       # PG 17
dnf install -y prefix_16       # PG 16
dnf install -y prefix_15       # PG 15
dnf install -y prefix_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-prefix   # PG 18
apt install -y postgresql-17-prefix   # PG 17
apt install -y postgresql-16-prefix   # PG 16
apt install -y postgresql-15-prefix   # PG 15
apt install -y postgresql-14-prefix   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION prefix;
```



## 用法

> [prefix: 用于电话号码路由的前缀范围类型](https://github.com/dimitri/prefix)

`prefix` 扩展提供了 `prefix_range` 数据类型，用于高效的前缀匹配，尤其适用于电话呼叫路由场景。

### 数据类型

使用构造函数或文本转换创建 `prefix_range` 值：

```sql
CREATE EXTENSION prefix;

SELECT prefix_range('123');           -- 123
SELECT prefix_range('123', '4', '5'); -- 123[4-5]
SELECT '123'::prefix_range;           -- 123
```

### 运算符

| 运算符 | 说明 |
|----------|-------------|
| `@>` | 包含（前缀包含值） |
| `<@` | 被包含于 |
| `&&` | 重叠 |
| `\|` | 并集 |
| `&` | 交集 |
| `=`, `<>`, `<`, `>`, `<=`, `>=` | 比较 |

### 示例

```sql
-- 查找电话号码的最长匹配前缀
SELECT * FROM prefixes
WHERE prefix @> '0123456789'
ORDER BY length(prefix) DESC
LIMIT 1;

-- 包含检查
SELECT '123'::prefix_range @> '123456';     -- true

-- 交集
SELECT '123[4-5]' & '123[2-7]';            -- 123[4-5]

-- 并集
SELECT '123' | '124';                       -- 12[3-4]
```

### 索引支持

创建 GiST 索引以实现高效的前缀查找：

```sql
CREATE INDEX idx_prefix ON prefixes USING gist(prefix);
```

该索引可加速 `@>`、`<@`、`&&` 和 `=` 运算符。

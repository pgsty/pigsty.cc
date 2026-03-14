---
title: "pg_checksums"
linkTitle: "pg_checksums"
description: "在离线模式下激活/启用/禁用数据库集群的校验和功能"
weight: 5110
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/credativ/pg_checksums">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">credativ/pg_checksums</div>
    <div class="ext-card__desc">https://github.com/credativ/pg_checksums</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_checksums-1.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_checksums-1.3.tar.gz</div>
    <div class="ext-card__desc">pg_checksums-1.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_checksums`**](/ext/e/pg_checksums) | `1.3` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5110  | [**`pg_checksums`**](/ext/e/pg_checksums) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_catcheck`](/ext/e/pg_catcheck) [`amcheck`](/ext/e/amcheck) [`pg_surgery`](/ext/e/pg_surgery) [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) [`pgstattuple`](/ext/e/pgstattuple) [`pg_repack`](/ext/e/pg_repack) [`pg_squeeze`](/ext/e/pg_squeeze) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_checksums` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_checksums_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-checksums` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 2 | AVAIL PGDG 1.3 3 | AVAIL PGDG 1.3 3 |
| el8.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 2 | AVAIL PGDG 1.3 3 | AVAIL PGDG 1.3 3 |
| el9.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 2 | AVAIL PGDG 1.3 3 | AVAIL PGDG 1.3 3 |
| el9.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 2 | AVAIL PGDG 1.3 3 | AVAIL PGDG 1.3 3 |
| el10.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 2 | AVAIL PGDG 1.3 2 | AVAIL PGDG 1.3 2 |
| el10.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 2 | AVAIL PGDG 1.3 2 | AVAIL PGDG 1.3 2 |
| d12.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| d12.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| d13.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| d13.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u22.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u22.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u24.x86_64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
| u24.aarch64 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 | AVAIL PGDG 1.3 1 |
@ el8.x86_64 18 pg_checksums_18 pg_checksums_18-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_checksums_18-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_checksums_18 pg_checksums_18-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 46.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_checksums_18-1.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_checksums_18 pg_checksums_18-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_checksums_18-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_checksums_18 pg_checksums_18-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_checksums_18-1.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_checksums_18 pg_checksums_18-1.3-1PGDG.rhel10.x86_64.rpm pgdg 1.3 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_checksums_18-1.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_checksums_18 pg_checksums_18-1.3-1PGDG.rhel10.aarch64.rpm pgdg 1.3 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_checksums_18-1.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-checksums postgresql-18-pg-checksums_1.3-2.pgdg12+1_amd64.deb pgdg 1.3 36.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-18-pg-checksums_1.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-checksums postgresql-18-pg-checksums_1.3-2.pgdg12+1_arm64.deb pgdg 1.3 35.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-18-pg-checksums_1.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-checksums postgresql-18-pg-checksums_1.3-2.pgdg13+1_amd64.deb pgdg 1.3 37.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-18-pg-checksums_1.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-checksums postgresql-18-pg-checksums_1.3-2.pgdg13+1_arm64.deb pgdg 1.3 35.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-18-pg-checksums_1.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-checksums postgresql-18-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb pgdg 1.3 37.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-18-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-checksums postgresql-18-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb pgdg 1.3 36.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-18-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-checksums postgresql-18-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb pgdg 1.3 36.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-18-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-checksums postgresql-18-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb pgdg 1.3 35.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-18-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_checksums_17 pg_checksums_17-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 47.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_checksums_17-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_checksums_17 pg_checksums_17-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 47.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_checksums_17-1.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_checksums_17 pg_checksums_17-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_checksums_17-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_checksums_17 pg_checksums_17-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 40.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_checksums_17-1.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_checksums_17 pg_checksums_17-1.3-1PGDG.rhel10.x86_64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_checksums_17-1.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_checksums_17 pg_checksums_17-1.3-1PGDG.rhel10.aarch64.rpm pgdg 1.3 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_checksums_17-1.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-checksums postgresql-17-pg-checksums_1.3-2.pgdg12+1_amd64.deb pgdg 1.3 36.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-17-pg-checksums_1.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-checksums postgresql-17-pg-checksums_1.3-2.pgdg12+1_arm64.deb pgdg 1.3 35.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-17-pg-checksums_1.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-checksums postgresql-17-pg-checksums_1.3-2.pgdg13+1_amd64.deb pgdg 1.3 36.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-17-pg-checksums_1.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-checksums postgresql-17-pg-checksums_1.3-2.pgdg13+1_arm64.deb pgdg 1.3 36.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-17-pg-checksums_1.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-checksums postgresql-17-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb pgdg 1.3 37.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-17-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-checksums postgresql-17-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb pgdg 1.3 36.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-17-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-checksums postgresql-17-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb pgdg 1.3 36.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-17-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-checksums postgresql-17-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb pgdg 1.3 36.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-17-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_checksums_16 pg_checksums_16-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 45.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_checksums_16-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_checksums_16 pg_checksums_16-1.1-3PGDG.rhel8.x86_64.rpm pgdg 1.1 45.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_checksums_16-1.1-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_checksums_16 pg_checksums_16-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_checksums_16-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_checksums_16 pg_checksums_16-1.1-3PGDG.rhel8.aarch64.rpm pgdg 1.1 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_checksums_16-1.1-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_checksums_16 pg_checksums_16-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_checksums_16-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_checksums_16 pg_checksums_16-1.1-3PGDG.rhel9.x86_64.rpm pgdg 1.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_checksums_16-1.1-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_checksums_16 pg_checksums_16-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 39.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_checksums_16-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_checksums_16 pg_checksums_16-1.1-3PGDG.rhel9.aarch64.rpm pgdg 1.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_checksums_16-1.1-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_checksums_16 pg_checksums_16-1.3-1PGDG.rhel10.x86_64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_checksums_16-1.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_checksums_16 pg_checksums_16-1.2-1PGDG.rhel10.x86_64.rpm pgdg 1.2 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_checksums_16-1.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_checksums_16 pg_checksums_16-1.3-1PGDG.rhel10.aarch64.rpm pgdg 1.3 40.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_checksums_16-1.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_checksums_16 pg_checksums_16-1.2-1PGDG.rhel10.aarch64.rpm pgdg 1.2 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_checksums_16-1.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-checksums postgresql-16-pg-checksums_1.3-2.pgdg12+1_amd64.deb pgdg 1.3 34.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-16-pg-checksums_1.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-checksums postgresql-16-pg-checksums_1.3-2.pgdg12+1_arm64.deb pgdg 1.3 33.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-16-pg-checksums_1.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-checksums postgresql-16-pg-checksums_1.3-2.pgdg13+1_amd64.deb pgdg 1.3 34.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-16-pg-checksums_1.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-checksums postgresql-16-pg-checksums_1.3-2.pgdg13+1_arm64.deb pgdg 1.3 34.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-16-pg-checksums_1.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-checksums postgresql-16-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb pgdg 1.3 35.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-16-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-checksums postgresql-16-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb pgdg 1.3 34.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-16-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-checksums postgresql-16-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb pgdg 1.3 34.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-16-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-checksums postgresql-16-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb pgdg 1.3 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-16-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_checksums_15 pg_checksums_15-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 44.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_checksums_15-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_checksums_15 pg_checksums_15-1.1-3PGDG.rhel8.x86_64.rpm pgdg 1.1 45.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_checksums_15-1.1-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_checksums_15 pg_checksums_15-1.1-1.rhel8.x86_64.rpm pgdg 1.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_checksums_15-1.1-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_checksums_15 pg_checksums_15-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_checksums_15-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_checksums_15 pg_checksums_15-1.1-3PGDG.rhel8.aarch64.rpm pgdg 1.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_checksums_15-1.1-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_checksums_15 pg_checksums_15-1.1-1.rhel8.aarch64.rpm pgdg 1.1 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_checksums_15-1.1-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_checksums_15 pg_checksums_15-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_checksums_15-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_checksums_15 pg_checksums_15-1.1-3PGDG.rhel9.x86_64.rpm pgdg 1.1 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_checksums_15-1.1-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_checksums_15 pg_checksums_15-1.1-1.rhel9.x86_64.rpm pgdg 1.1 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_checksums_15-1.1-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_checksums_15 pg_checksums_15-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_checksums_15-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_checksums_15 pg_checksums_15-1.1-3PGDG.rhel9.aarch64.rpm pgdg 1.1 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_checksums_15-1.1-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_checksums_15 pg_checksums_15-1.1-1.rhel9.aarch64.rpm pgdg 1.1 40.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_checksums_15-1.1-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_checksums_15 pg_checksums_15-1.3-1PGDG.rhel10.x86_64.rpm pgdg 1.3 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_checksums_15-1.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_checksums_15 pg_checksums_15-1.2-1PGDG.rhel10.x86_64.rpm pgdg 1.2 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_checksums_15-1.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_checksums_15 pg_checksums_15-1.3-1PGDG.rhel10.aarch64.rpm pgdg 1.3 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_checksums_15-1.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_checksums_15 pg_checksums_15-1.2-1PGDG.rhel10.aarch64.rpm pgdg 1.2 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_checksums_15-1.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-checksums postgresql-15-pg-checksums_1.3-2.pgdg12+1_amd64.deb pgdg 1.3 34.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-15-pg-checksums_1.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-checksums postgresql-15-pg-checksums_1.3-2.pgdg12+1_arm64.deb pgdg 1.3 33.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-15-pg-checksums_1.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-checksums postgresql-15-pg-checksums_1.3-2.pgdg13+1_amd64.deb pgdg 1.3 34.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-15-pg-checksums_1.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-checksums postgresql-15-pg-checksums_1.3-2.pgdg13+1_arm64.deb pgdg 1.3 34.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-15-pg-checksums_1.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-checksums postgresql-15-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb pgdg 1.3 35.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-15-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-checksums postgresql-15-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb pgdg 1.3 34.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-15-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-checksums postgresql-15-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb pgdg 1.3 34.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-15-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-checksums postgresql-15-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb pgdg 1.3 33.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-15-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_checksums_14 pg_checksums_14-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_checksums_14-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_checksums_14 pg_checksums_14-1.1-3PGDG.rhel8.x86_64.rpm pgdg 1.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_checksums_14-1.1-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_checksums_14 pg_checksums_14-1.1-1.rhel8.x86_64.rpm pgdg 1.1 43.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_checksums_14-1.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_checksums_14 pg_checksums_14-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_checksums_14-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_checksums_14 pg_checksums_14-1.1-3PGDG.rhel8.aarch64.rpm pgdg 1.1 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_checksums_14-1.1-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_checksums_14 pg_checksums_14-1.1-1.rhel8.aarch64.rpm pgdg 1.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_checksums_14-1.1-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_checksums_14 pg_checksums_14-1.3-1PGDG.rhel9.x86_64.rpm pgdg 1.3 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_checksums_14-1.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_checksums_14 pg_checksums_14-1.1-3PGDG.rhel9.x86_64.rpm pgdg 1.1 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_checksums_14-1.1-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_checksums_14 pg_checksums_14-1.1-1.rhel9.x86_64.rpm pgdg 1.1 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_checksums_14-1.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_checksums_14 pg_checksums_14-1.3-1PGDG.rhel9.aarch64.rpm pgdg 1.3 39.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_checksums_14-1.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_checksums_14 pg_checksums_14-1.1-3PGDG.rhel9.aarch64.rpm pgdg 1.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_checksums_14-1.1-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_checksums_14 pg_checksums_14-1.1-1.rhel9.aarch64.rpm pgdg 1.1 40.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_checksums_14-1.1-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_checksums_14 pg_checksums_14-1.3-1PGDG.rhel10.x86_64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_checksums_14-1.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_checksums_14 pg_checksums_14-1.2-1PGDG.rhel10.x86_64.rpm pgdg 1.2 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_checksums_14-1.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_checksums_14 pg_checksums_14-1.3-1PGDG.rhel10.aarch64.rpm pgdg 1.3 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_checksums_14-1.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_checksums_14 pg_checksums_14-1.2-1PGDG.rhel10.aarch64.rpm pgdg 1.2 40.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_checksums_14-1.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-checksums postgresql-14-pg-checksums_1.3-2.pgdg12+1_amd64.deb pgdg 1.3 33.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-14-pg-checksums_1.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-checksums postgresql-14-pg-checksums_1.3-2.pgdg12+1_arm64.deb pgdg 1.3 33.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-14-pg-checksums_1.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-checksums postgresql-14-pg-checksums_1.3-2.pgdg13+1_amd64.deb pgdg 1.3 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-14-pg-checksums_1.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-checksums postgresql-14-pg-checksums_1.3-2.pgdg13+1_arm64.deb pgdg 1.3 33.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-14-pg-checksums_1.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-checksums postgresql-14-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb pgdg 1.3 34.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-14-pg-checksums_1.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-checksums postgresql-14-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb pgdg 1.3 33.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-14-pg-checksums_1.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-checksums postgresql-14-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb pgdg 1.3 34.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-14-pg-checksums_1.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-checksums postgresql-14-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb pgdg 1.3 33.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-checksums/postgresql-14-pg-checksums_1.3-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_checksums` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_checksums;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_checksums -v 18  # PG 18
pig ext install -y pg_checksums -v 17  # PG 17
pig ext install -y pg_checksums -v 16  # PG 16
pig ext install -y pg_checksums -v 15  # PG 15
pig ext install -y pg_checksums -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_checksums_18       # PG 18
dnf install -y pg_checksums_17       # PG 17
dnf install -y pg_checksums_16       # PG 16
dnf install -y pg_checksums_15       # PG 15
dnf install -y pg_checksums_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-checksums   # PG 18
apt install -y postgresql-17-pg-checksums   # PG 17
apt install -y postgresql-16-pg-checksums   # PG 16
apt install -y postgresql-15-pg-checksums   # PG 15
apt install -y postgresql-14-pg-checksums   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}

> 此扩展不需要执行 `CREATE EXTENSION` 语句



## 用法

> [pg_checksums: 在离线 Postgres 集群中激活/停用/验证校验和](https://github.com/credativ/pg_checksums)

`pg_checksums_ext` 是一个命令行工具（基于 PostgreSQL 内置的 `pg_checksums`），可以验证、激活或停用 PostgreSQL 集群的页级校验和。它扩展了内置工具，增加了在线验证、`SIGUSR1` 进度切换、精细进度报告和 I/O 速率限制功能。

### 验证校验和（可在线执行）

```bash
pg_checksums_ext -D /path/to/data --check
```

### 启用校验和（需要干净关闭）

```bash
pg_checksums_ext -D /path/to/data --enable
```

### 禁用校验和（需要干净关闭）

```bash
pg_checksums_ext -D /path/to/data --disable
```

### 其他选项

- `-D, --pgdata` -- 数据目录路径
- `--check` / `--enable` / `--disable` -- 操作模式
- `--progress` -- 显示进度报告
- `--filenode` -- 仅检查特定 filenode
- `--no-sync` -- 跳过 fsync
- `--verbose` -- 详细输出
- `--debug` -- 调试输出
- 发送 `SIGUSR1` 可在操作期间切换进度报告

---
title: "pg_rrule"
linkTitle: "pg_rrule"
description: "日历重复规则RRULE数据类型"
weight: 3880
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/petropavel13/pg_rrule">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">petropavel13/pg_rrule</div>
    <div class="ext-card__desc">https://github.com/petropavel13/pg_rrule</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_rrule-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_rrule-0.3.0.tar.gz</div>
    <div class="ext-card__desc">pg_rrule-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_rrule`**](/ext/e/pg_rrule) | `0.3.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3880  | [**`pg_rrule`**](/ext/e/pg_rrule) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require libical


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_rrule` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_rrule_$v` | `libical` |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-rrule` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.x86_64 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 |
| d12.aarch64 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 |
| d13.x86_64 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 |
| d13.aarch64 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 |
| u22.x86_64 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 |
| u22.aarch64 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 |
| u24.x86_64 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 |
| u24.aarch64 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 | AVAIL PGDG 0.3.0 1 |
@ el8.x86_64 18 pg_rrule_18 pg_rrule_18-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrule_18-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_rrule_18 pg_rrule_18-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrule_18-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_rrule_18 pg_rrule_18-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrule_18-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_rrule_18 pg_rrule_18-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrule_18-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_rrule_18 pg_rrule_18-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrule_18-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_rrule_18 pg_rrule_18-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrule_18-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-rrule postgresql-18-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-18-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-rrule postgresql-18-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb pgdg 0.3.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-18-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-rrule postgresql-18-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb pgdg 0.3.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-18-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-rrule postgresql-18-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb pgdg 0.3.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-18-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-rrule postgresql-18-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb pgdg 0.3.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-18-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-rrule postgresql-18-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb pgdg 0.3.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-18-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-rrule postgresql-18-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-18-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-rrule postgresql-18-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb pgdg 0.3.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-18-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_rrule_17 pg_rrule_17-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrule_17-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_rrule_17 pg_rrule_17-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrule_17-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_rrule_17 pg_rrule_17-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrule_17-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_rrule_17 pg_rrule_17-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrule_17-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_rrule_17 pg_rrule_17-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrule_17-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_rrule_17 pg_rrule_17-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrule_17-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-rrule postgresql-17-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb pgdg 0.3.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-17-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-rrule postgresql-17-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb pgdg 0.3.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-17-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-rrule postgresql-17-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-17-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-rrule postgresql-17-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb pgdg 0.3.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-17-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-rrule postgresql-17-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb pgdg 0.3.0 25.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-17-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-rrule postgresql-17-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb pgdg 0.3.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-17-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-rrule postgresql-17-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-17-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-rrule postgresql-17-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb pgdg 0.3.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-17-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_rrule_16 pg_rrule_16-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrule_16-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_rrule_16 pg_rrule_16-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrule_16-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_rrule_16 pg_rrule_16-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrule_16-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_rrule_16 pg_rrule_16-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrule_16-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_rrule_16 pg_rrule_16-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 18.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrule_16-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_rrule_16 pg_rrule_16-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrule_16-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-rrule postgresql-16-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-16-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-rrule postgresql-16-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb pgdg 0.3.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-16-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-rrule postgresql-16-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-16-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-rrule postgresql-16-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb pgdg 0.3.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-16-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-rrule postgresql-16-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb pgdg 0.3.0 25.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-16-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-rrule postgresql-16-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb pgdg 0.3.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-16-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-rrule postgresql-16-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-16-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-rrule postgresql-16-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb pgdg 0.3.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-16-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_rrule_15 pg_rrule_15-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 19.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrule_15-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_rrule_15 pg_rrule_15-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrule_15-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_rrule_15 pg_rrule_15-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrule_15-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_rrule_15 pg_rrule_15-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 18.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrule_15-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_rrule_15 pg_rrule_15-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrule_15-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_rrule_15 pg_rrule_15-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrule_15-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-rrule postgresql-15-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-15-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-rrule postgresql-15-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb pgdg 0.3.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-15-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-rrule postgresql-15-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb pgdg 0.3.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-15-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-rrule postgresql-15-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb pgdg 0.3.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-15-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-rrule postgresql-15-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb pgdg 0.3.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-15-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-rrule postgresql-15-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb pgdg 0.3.0 24.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-15-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-rrule postgresql-15-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb pgdg 0.3.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-15-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-rrule postgresql-15-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb pgdg 0.3.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-15-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_rrule_14 pg_rrule_14-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 19.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rrule_14-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_rrule_14 pg_rrule_14-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rrule_14-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_rrule_14 pg_rrule_14-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rrule_14-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_rrule_14 pg_rrule_14-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 18.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rrule_14-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_rrule_14 pg_rrule_14-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rrule_14-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_rrule_14 pg_rrule_14-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rrule_14-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-rrule postgresql-14-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-14-pg-rrule_0.3.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-rrule postgresql-14-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb pgdg 0.3.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-14-pg-rrule_0.3.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-rrule postgresql-14-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb pgdg 0.3.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-14-pg-rrule_0.3.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-rrule postgresql-14-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb pgdg 0.3.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-14-pg-rrule_0.3.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-rrule postgresql-14-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb pgdg 0.3.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-14-pg-rrule_0.3.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-rrule postgresql-14-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb pgdg 0.3.0 24.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-14-pg-rrule_0.3.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-rrule postgresql-14-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb pgdg 0.3.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-14-pg-rrule_0.3.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-rrule postgresql-14-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb pgdg 0.3.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rrule/postgresql-14-pg-rrule_0.3.0-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_rrule` 扩展的 RPM 包：

```bash
pig build pkg pg_rrule         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_rrule` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_rrule;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_rrule -v 18  # PG 18
pig ext install -y pg_rrule -v 17  # PG 17
pig ext install -y pg_rrule -v 16  # PG 16
pig ext install -y pg_rrule -v 15  # PG 15
pig ext install -y pg_rrule -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_rrule_18       # PG 18
dnf install -y pg_rrule_17       # PG 17
dnf install -y pg_rrule_16       # PG 16
dnf install -y pg_rrule_15       # PG 15
dnf install -y pg_rrule_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-rrule   # PG 18
apt install -y postgresql-17-pg-rrule   # PG 17
apt install -y postgresql-16-pg-rrule   # PG 16
apt install -y postgresql-15-pg-rrule   # PG 15
apt install -y postgresql-14-pg-rrule   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_rrule;
```



## 用法

> [pg_rrule: PostgreSQL 的 iCalendar RRULE 重复规则类型](https://github.com/petropavel13/pg_rrule)

`pg_rrule` 扩展提供了 RRULE 数据类型，用于解析和展开 iCalendar 重复规则（RFC 5545）。

```sql
CREATE EXTENSION pg_rrule;
```

### 参数提取

```sql
-- 获取频率
SELECT get_freq('FREQ=WEEKLY;INTERVAL=1;WKST=MO;UNTIL=20200101T045102Z'::rrule);
-- WEEKLY

-- 获取星期几（数字数组）
SELECT get_byday('FREQ=WEEKLY;BYDAY=MO,TH,SU'::rrule);
-- {2,5,1}
```

### 生成重复事件

```sql
-- 从 RRULE 生成重复事件
SELECT unnest(get_occurrences(
    'FREQ=DAILY;INTERVAL=1;UNTIL=20200105T000000Z'::rrule,
    '2020-01-01 00:00:00'::timestamp
));
```

`get_occurrences()` 函数将 RRULE 定义展开为具体的时间戳序列，支持带时区和不带时区的时间戳参数。

### 依赖

需要 `libical` 库以符合 iCalendar 标准。

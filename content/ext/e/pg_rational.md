---
title: "pg_rational"
linkTitle: "pg_rational"
description: "使用BIGINT表示的有理数数据类型"
weight: 3720
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/begriffs/pg_rational">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">begriffs/pg_rational</div>
    <div class="ext-card__desc">https://github.com/begriffs/pg_rational</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_rational-0.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_rational-0.0.2.tar.gz</div>
    <div class="ext-card__desc">pg_rational-0.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_rational`**](/ext/e/pg_rational) | `0.0.2` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3720  | [**`pg_rational`**](/ext/e/pg_rational) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_rational` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_rational_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-rational` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 | AVAIL PIGSTY 0.0.2 1 |
| d12.x86_64 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 |
| d12.aarch64 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 |
| d13.x86_64 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 |
| d13.aarch64 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 |
| u22.x86_64 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 |
| u22.aarch64 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 |
| u24.x86_64 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 |
| u24.aarch64 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 | AVAIL PGDG 0.0.2 1 |
@ el8.x86_64 18 pg_rational_18 pg_rational_18-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 19.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_rational_18-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_rational_18 pg_rational_18-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 18.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_rational_18-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_rational_18 pg_rational_18-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_rational_18-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_rational_18 pg_rational_18-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_rational_18-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_rational_18 pg_rational_18-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_rational_18-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_rational_18 pg_rational_18-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_rational_18-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 24.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 23.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-rational postgresql-18-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-18-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_rational_17 pg_rational_17-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 19.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_rational_17-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_rational_17 pg_rational_17-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_rational_17-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_rational_17 pg_rational_17-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_rational_17-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_rational_17 pg_rational_17-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_rational_17-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_rational_17 pg_rational_17-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_rational_17-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_rational_17 pg_rational_17-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_rational_17-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 23.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 25.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 24.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-rational postgresql-17-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-17-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_rational_16 pg_rational_16-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 19.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_rational_16-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_rational_16 pg_rational_16-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 18.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_rational_16-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_rational_16 pg_rational_16-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_rational_16-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_rational_16 pg_rational_16-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_rational_16-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_rational_16 pg_rational_16-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_rational_16-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_rational_16 pg_rational_16-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_rational_16-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 23.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 25.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 24.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-rational postgresql-16-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-16-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_rational_15 pg_rational_15-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 19.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_rational_15-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_rational_15 pg_rational_15-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 18.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_rational_15-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_rational_15 pg_rational_15-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 18.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_rational_15-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_rational_15 pg_rational_15-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_rational_15-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_rational_15 pg_rational_15-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_rational_15-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_rational_15 pg_rational_15-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_rational_15-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 23.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 25.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 24.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-rational postgresql-15-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-15-rational_0.0.2-8.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_rational_14 pg_rational_14-0.0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.0.2 19.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_rational_14-0.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_rational_14 pg_rational_14-0.0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_rational_14-0.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_rational_14 pg_rational_14-0.0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.0.2 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_rational_14-0.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_rational_14 pg_rational_14-0.0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.0.2 18.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_rational_14-0.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_rational_14 pg_rational_14-0.0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_rational_14-0.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_rational_14 pg_rational_14-0.0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.0.2 18.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_rational_14-0.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg12+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg12+1_arm64.deb pgdg 0.0.2 23.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg13+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg13+1_arm64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg22.04+1_amd64.deb pgdg 0.0.2 25.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg22.04+1_arm64.deb pgdg 0.0.2 24.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg24.04+1_amd64.deb pgdg 0.0.2 24.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-rational postgresql-14-rational_0.0.2-8.pgdg24.04+1_arm64.deb pgdg 0.0.2 24.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-rational/postgresql-14-rational_0.0.2-8.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_rational` 扩展的 RPM 包：

```bash
pig build pkg pg_rational         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_rational` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_rational;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_rational -v 18  # PG 18
pig ext install -y pg_rational -v 17  # PG 17
pig ext install -y pg_rational -v 16  # PG 16
pig ext install -y pg_rational -v 15  # PG 15
pig ext install -y pg_rational -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_rational_18       # PG 18
dnf install -y pg_rational_17       # PG 17
dnf install -y pg_rational_16       # PG 16
dnf install -y pg_rational_15       # PG 15
dnf install -y pg_rational_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-rational   # PG 18
apt install -y postgresql-17-rational   # PG 17
apt install -y postgresql-16-rational   # PG 16
apt install -y postgresql-15-rational   # PG 15
apt install -y postgresql-14-rational   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_rational;
```



## 用法

> [pg_rational: 64 位精确分数运算](https://github.com/begriffs/pg_rational)

`pg_rational` 扩展提供了以 64 位（与 float 大小相同）存储的精确分数运算，并支持使用 Stern-Brocot 树查找中间分数。

```sql
CREATE EXTENSION pg_rational;
```

### 数据类型

- **`rational`**：分数类型（分子/分母）
- **`ratt`**：用于元组转换的辅助类型

### 基本运算

```sql
SELECT '1/3'::rational + '2/7'::rational;  -- 13/21
SELECT '3/4'::rational * '2/3'::rational;  -- 1/2
```

### 函数

```sql
-- 化简分数
SELECT rational_simplify('36/12');  -- 3/1

-- 查找中间分数（Stern-Brocot 树）
SELECT rational_intermediate('1/2', '2/3');  -- 3/5
```

### 类型转换

```sql
SELECT 0.263157894737::float::rational;  -- 5/19
SELECT '-1/2'::rational::float;          -- -0.5
SELECT 1::rational;                       -- 1/1
```

### 动态行排序

一个核心使用场景是在不重新编号的情况下维护可排序的行顺序：

```sql
CREATE TABLE todos (
    prio rational UNIQUE DEFAULT nextval('todos_seq')::integer,
    what text NOT NULL
);

-- 在优先级 1 和 2 之间插入
INSERT INTO todos VALUES (rational_intermediate('1', '2'), 'new task');
-- prio 变为 3/2，其他行不受影响
```

### 索引支持

`rational` 列支持 Btree 和 Hash 索引。

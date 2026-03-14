---
title: "emailaddr"
linkTitle: "emailaddr"
description: "Email地址数据类型"
weight: 3850
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/petere/pgemailaddr">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">petere/pgemailaddr</div>
    <div class="ext-card__desc">https://github.com/petere/pgemailaddr</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgemailaddr-0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgemailaddr-0.tar.gz</div>
    <div class="ext-card__desc">pgemailaddr-0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_emailaddr`**](/ext/e/emailaddr) | `0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3850  | [**`emailaddr`**](/ext/e/emailaddr) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> +varatt.h


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0` | {{< pgvers "18,17,16,15,14" >}} | `pg_emailaddr` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0` | {{< pgvers "18,17,16,15,14" >}} | `pg_emailaddr_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-emailaddr` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| el8.aarch64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| el9.x86_64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| el9.aarch64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| el10.x86_64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| el10.aarch64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| d12.x86_64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| d12.aarch64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| d13.x86_64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| d13.aarch64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| u22.x86_64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| u22.aarch64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| u24.x86_64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
| u24.aarch64 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 | AVAIL PIGSTY 0 1 |
@ el8.x86_64 18 pg_emailaddr_18 pg_emailaddr_18-0-1PIGSTY.el8.x86_64.rpm pigsty 0 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_emailaddr_18-0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_emailaddr_18 pg_emailaddr_18-0-1PIGSTY.el8.aarch64.rpm pigsty 0 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_emailaddr_18-0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_emailaddr_18 pg_emailaddr_18-0-1PIGSTY.el9.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_emailaddr_18-0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_emailaddr_18 pg_emailaddr_18-0-1PIGSTY.el9.aarch64.rpm pigsty 0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_emailaddr_18-0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_emailaddr_18 pg_emailaddr_18-0-1PIGSTY.el10.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_emailaddr_18-0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_emailaddr_18 pg_emailaddr_18-0-1PIGSTY.el10.aarch64.rpm pigsty 0 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_emailaddr_18-0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-emailaddr postgresql-18-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-18-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-emailaddr postgresql-18-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-18-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-emailaddr postgresql-18-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-18-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-emailaddr postgresql-18-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb pigsty 0 12.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-18-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-emailaddr postgresql-18-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb pigsty 0 12.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-18-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-emailaddr postgresql-18-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb pigsty 0 12.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-18-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-emailaddr postgresql-18-pg-emailaddr_0-2PIGSTY~noble_amd64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-18-pg-emailaddr_0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-emailaddr postgresql-18-pg-emailaddr_0-2PIGSTY~noble_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-18-pg-emailaddr_0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_emailaddr_17 pg_emailaddr_17-0-1PIGSTY.el8.x86_64.rpm pigsty 0 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_emailaddr_17-0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_emailaddr_17 pg_emailaddr_17-0-1PIGSTY.el8.aarch64.rpm pigsty 0 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_emailaddr_17-0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_emailaddr_17 pg_emailaddr_17-0-1PIGSTY.el9.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_emailaddr_17-0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_emailaddr_17 pg_emailaddr_17-0-1PIGSTY.el9.aarch64.rpm pigsty 0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_emailaddr_17-0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_emailaddr_17 pg_emailaddr_17-0-1PIGSTY.el10.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_emailaddr_17-0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_emailaddr_17 pg_emailaddr_17-0-1PIGSTY.el10.aarch64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_emailaddr_17-0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-emailaddr postgresql-17-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-17-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-emailaddr postgresql-17-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-17-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-emailaddr postgresql-17-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-17-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-emailaddr postgresql-17-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb pigsty 0 12.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-17-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-emailaddr postgresql-17-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb pigsty 0 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-17-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-emailaddr postgresql-17-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-17-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-emailaddr postgresql-17-pg-emailaddr_0-2PIGSTY~noble_amd64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-17-pg-emailaddr_0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-emailaddr postgresql-17-pg-emailaddr_0-2PIGSTY~noble_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-17-pg-emailaddr_0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_emailaddr_16 pg_emailaddr_16-0-1PIGSTY.el8.x86_64.rpm pigsty 0 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_emailaddr_16-0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_emailaddr_16 pg_emailaddr_16-0-1PIGSTY.el8.aarch64.rpm pigsty 0 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_emailaddr_16-0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_emailaddr_16 pg_emailaddr_16-0-1PIGSTY.el9.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_emailaddr_16-0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_emailaddr_16 pg_emailaddr_16-0-1PIGSTY.el9.aarch64.rpm pigsty 0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_emailaddr_16-0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_emailaddr_16 pg_emailaddr_16-0-1PIGSTY.el10.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_emailaddr_16-0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_emailaddr_16 pg_emailaddr_16-0-1PIGSTY.el10.aarch64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_emailaddr_16-0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-emailaddr postgresql-16-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-16-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-emailaddr postgresql-16-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-16-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-emailaddr postgresql-16-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-16-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-emailaddr postgresql-16-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb pigsty 0 12.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-16-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-emailaddr postgresql-16-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb pigsty 0 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-16-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-emailaddr postgresql-16-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-16-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-emailaddr postgresql-16-pg-emailaddr_0-2PIGSTY~noble_amd64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-16-pg-emailaddr_0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-emailaddr postgresql-16-pg-emailaddr_0-2PIGSTY~noble_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-16-pg-emailaddr_0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_emailaddr_15 pg_emailaddr_15-0-1PIGSTY.el8.x86_64.rpm pigsty 0 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_emailaddr_15-0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_emailaddr_15 pg_emailaddr_15-0-1PIGSTY.el8.aarch64.rpm pigsty 0 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_emailaddr_15-0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_emailaddr_15 pg_emailaddr_15-0-1PIGSTY.el9.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_emailaddr_15-0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_emailaddr_15 pg_emailaddr_15-0-1PIGSTY.el9.aarch64.rpm pigsty 0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_emailaddr_15-0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_emailaddr_15 pg_emailaddr_15-0-1PIGSTY.el10.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_emailaddr_15-0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_emailaddr_15 pg_emailaddr_15-0-1PIGSTY.el10.aarch64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_emailaddr_15-0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-emailaddr postgresql-15-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-15-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-emailaddr postgresql-15-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-15-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-emailaddr postgresql-15-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-15-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-emailaddr postgresql-15-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb pigsty 0 12.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-15-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-emailaddr postgresql-15-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb pigsty 0 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-15-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-emailaddr postgresql-15-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-15-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-emailaddr postgresql-15-pg-emailaddr_0-2PIGSTY~noble_amd64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-15-pg-emailaddr_0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-emailaddr postgresql-15-pg-emailaddr_0-2PIGSTY~noble_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-15-pg-emailaddr_0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_emailaddr_14 pg_emailaddr_14-0-1PIGSTY.el8.x86_64.rpm pigsty 0 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_emailaddr_14-0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_emailaddr_14 pg_emailaddr_14-0-1PIGSTY.el8.aarch64.rpm pigsty 0 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_emailaddr_14-0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_emailaddr_14 pg_emailaddr_14-0-1PIGSTY.el9.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_emailaddr_14-0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_emailaddr_14 pg_emailaddr_14-0-1PIGSTY.el9.aarch64.rpm pigsty 0 13.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_emailaddr_14-0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_emailaddr_14 pg_emailaddr_14-0-1PIGSTY.el10.x86_64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_emailaddr_14-0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_emailaddr_14 pg_emailaddr_14-0-1PIGSTY.el10.aarch64.rpm pigsty 0 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_emailaddr_14-0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-emailaddr postgresql-14-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-14-pg-emailaddr_0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-emailaddr postgresql-14-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-emailaddr/postgresql-14-pg-emailaddr_0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-emailaddr postgresql-14-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb pigsty 0 12.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-14-pg-emailaddr_0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-emailaddr postgresql-14-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb pigsty 0 12.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-emailaddr/postgresql-14-pg-emailaddr_0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-emailaddr postgresql-14-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb pigsty 0 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-14-pg-emailaddr_0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-emailaddr postgresql-14-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-emailaddr/postgresql-14-pg-emailaddr_0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-emailaddr postgresql-14-pg-emailaddr_0-2PIGSTY~noble_amd64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-14-pg-emailaddr_0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-emailaddr postgresql-14-pg-emailaddr_0-2PIGSTY~noble_arm64.deb pigsty 0 13.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-emailaddr/postgresql-14-pg-emailaddr_0-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_emailaddr` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_emailaddr         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_emailaddr` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_emailaddr;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_emailaddr -v 18  # PG 18
pig ext install -y pg_emailaddr -v 17  # PG 17
pig ext install -y pg_emailaddr -v 16  # PG 16
pig ext install -y pg_emailaddr -v 15  # PG 15
pig ext install -y pg_emailaddr -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_emailaddr_18       # PG 18
dnf install -y pg_emailaddr_17       # PG 17
dnf install -y pg_emailaddr_16       # PG 16
dnf install -y pg_emailaddr_15       # PG 15
dnf install -y pg_emailaddr_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-emailaddr   # PG 18
apt install -y postgresql-17-pg-emailaddr   # PG 17
apt install -y postgresql-16-pg-emailaddr   # PG 16
apt install -y postgresql-15-pg-emailaddr   # PG 15
apt install -y postgresql-14-pg-emailaddr   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION emailaddr;
```



## 用法

> [emailaddr: PostgreSQL 的电子邮件地址数据类型](https://github.com/petere/pgemailaddr)

`emailaddr` 扩展提供了一种数据类型，用于存储和验证符合 RFC 5322 中 `addr-spec` 格式定义的电子邮件地址。

```sql
CREATE EXTENSION emailaddr;

CREATE TABLE accounts (
    id    int PRIMARY KEY,
    name  text,
    email emailaddr
);

INSERT INTO accounts VALUES (1, 'Peter Eisentraut', 'peter@eisentraut.org');
```

### 数据类型

`emailaddr` 类型在输入时按照 RFC 5322 `addr-spec` 规则验证电子邮件地址。接受 `user@domain.com` 等简单格式，不支持 `"User Name" <user@domain.com>` 等显示名称语法。

### 运算符

支持标准比较运算符：`=`、`<>`、`<`、`>`、`<=`、`>=`。

### 索引支持

可使用 Btree 索引对 `emailaddr` 列进行高效查找和排序。

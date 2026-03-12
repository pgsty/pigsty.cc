---
title: "bzip"
linkTitle: "bzip"
description: "BZIP压缩解压缩函数包"
weight: 4020
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/steve-chavez/pg_bzip">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">steve-chavez/pg_bzip</div>
    <div class="ext-card__desc">https://github.com/steve-chavez/pg_bzip</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_bzip-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_bzip-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_bzip-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_bzip`**](/ext/e/bzip) | `1.0.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4020  | [**`bzip`**](/ext/e/bzip) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`gzip`](/ext/e/gzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) [`pgjq`](/ext/e/pgjq) [`pgjwt`](/ext/e/pgjwt) [`pg_smtp_client`](/ext/e/pg_smtp_client) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_bzip` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_bzip_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-bzip` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pg_bzip_18 pg_bzip_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bzip_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_bzip_18 pg_bzip_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bzip_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_bzip_18 pg_bzip_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bzip_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_bzip_18 pg_bzip_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bzip_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_bzip_18 pg_bzip_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bzip_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_bzip_18 pg_bzip_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bzip_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-bzip postgresql-18-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-18-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-bzip postgresql-18-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-18-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-bzip postgresql-18-bzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-18-bzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-bzip postgresql-18-bzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-18-bzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-bzip postgresql-18-bzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 14.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-18-bzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-bzip postgresql-18-bzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-18-bzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-bzip postgresql-18-bzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 14.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-18-bzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-bzip postgresql-18-bzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 14.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-18-bzip_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_bzip_17 pg_bzip_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bzip_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_bzip_17 pg_bzip_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bzip_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_bzip_17 pg_bzip_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bzip_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_bzip_17 pg_bzip_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bzip_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_bzip_17 pg_bzip_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bzip_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_bzip_17 pg_bzip_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bzip_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-bzip postgresql-17-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-17-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-bzip postgresql-17-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-17-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-bzip postgresql-17-bzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-17-bzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-bzip postgresql-17-bzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-17-bzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-bzip postgresql-17-bzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 14.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-17-bzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-bzip postgresql-17-bzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 14.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-17-bzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-bzip postgresql-17-bzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 14.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-17-bzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-bzip postgresql-17-bzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 14.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-17-bzip_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_bzip_16 pg_bzip_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bzip_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_bzip_16 pg_bzip_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bzip_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_bzip_16 pg_bzip_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bzip_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_bzip_16 pg_bzip_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bzip_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_bzip_16 pg_bzip_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bzip_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_bzip_16 pg_bzip_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bzip_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-bzip postgresql-16-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-16-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-bzip postgresql-16-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-16-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-bzip postgresql-16-bzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-16-bzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-bzip postgresql-16-bzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-16-bzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-bzip postgresql-16-bzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 14.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-16-bzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-bzip postgresql-16-bzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 14.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-16-bzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-bzip postgresql-16-bzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 14.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-16-bzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-bzip postgresql-16-bzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 14.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-16-bzip_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_bzip_15 pg_bzip_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bzip_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_bzip_15 pg_bzip_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bzip_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_bzip_15 pg_bzip_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bzip_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_bzip_15 pg_bzip_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bzip_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_bzip_15 pg_bzip_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bzip_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_bzip_15 pg_bzip_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bzip_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-bzip postgresql-15-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-15-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-bzip postgresql-15-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-15-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-bzip postgresql-15-bzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-15-bzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-bzip postgresql-15-bzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-15-bzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-bzip postgresql-15-bzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 14.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-15-bzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-bzip postgresql-15-bzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 14.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-15-bzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-bzip postgresql-15-bzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 14.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-15-bzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-bzip postgresql-15-bzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 14.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-15-bzip_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_bzip_14 pg_bzip_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_bzip_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_bzip_14 pg_bzip_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_bzip_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_bzip_14 pg_bzip_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_bzip_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_bzip_14 pg_bzip_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_bzip_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_bzip_14 pg_bzip_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_bzip_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_bzip_14 pg_bzip_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_bzip_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-bzip postgresql-14-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-14-bzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-bzip postgresql-14-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-bzip/postgresql-14-bzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-bzip postgresql-14-bzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-14-bzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-bzip postgresql-14-bzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-bzip/postgresql-14-bzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-bzip postgresql-14-bzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 14.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-14-bzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-bzip postgresql-14-bzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 14.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-bzip/postgresql-14-bzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-bzip postgresql-14-bzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 14.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-14-bzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-bzip postgresql-14-bzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 14.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-bzip/postgresql-14-bzip_1.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_bzip` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_bzip         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_bzip` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_bzip;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_bzip -v 18  # PG 18
pig ext install -y pg_bzip -v 17  # PG 17
pig ext install -y pg_bzip -v 16  # PG 16
pig ext install -y pg_bzip -v 15  # PG 15
pig ext install -y pg_bzip -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_bzip_18       # PG 18
dnf install -y pg_bzip_17       # PG 17
dnf install -y pg_bzip_16       # PG 16
dnf install -y pg_bzip_15       # PG 15
dnf install -y pg_bzip_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-bzip   # PG 18
apt install -y postgresql-17-bzip   # PG 17
apt install -y postgresql-16-bzip   # PG 16
apt install -y postgresql-15-bzip   # PG 15
apt install -y postgresql-14-bzip   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION bzip;
```



## 用法

> [bzip: Bzip 压缩与解压缩](https://github.com/steve-chavez/pg_bzip)

### 函数

- `bzcat(data bytea) returns bytea` -- 解压 bzip2 数据，类似于 `bzcat` 命令。
- `bzip2(data bytea, compression_level int default 9) returns bytea` -- 使用 bzip2 压缩数据。

### 示例

解压 bzip2 压缩的文件：

```sql
SELECT convert_from(bzcat(pg_read_binary_file('/path/to/data.csv.bz2')), 'utf8') AS contents;
```

使用 bzip2 压缩数据：

```sql
SELECT bzip2(repeat('my text to be compressed', 1000)::bytea) AS compressed;
```

使用自定义压缩级别（1-9）进行压缩：

```sql
SELECT bzip2('some data'::bytea, 5);
```

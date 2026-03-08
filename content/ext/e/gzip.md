---
title: "gzip"
linkTitle: "gzip"
description: "使用SQL执行Gzip压缩与解压缩"
weight: 4010
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pramsey/pgsql-gzip">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pramsey/pgsql-gzip</div>
    <div class="ext-card__desc">https://github.com/pramsey/pgsql-gzip</div>
  </a>
  <a class="ext-card ext-card--source" href="pgsql-gzip-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsql-gzip-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pgsql-gzip-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_gzip`**](/ext/e/gzip) | `1.0.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4010  | [**`gzip`**](/ext/e/gzip) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) [`pgjq`](/ext/e/pgjq) [`pgjwt`](/ext/e/pgjwt) [`pg_smtp_client`](/ext/e/pg_smtp_client) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_gzip` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_gzip_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-gzip` | - |
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
@ el8.x86_64 18 pg_gzip_18 pg_gzip_18-1.0.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_gzip_18-1.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_gzip_18 pg_gzip_18-1.0.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0.0 13.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_gzip_18-1.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_gzip_18 pg_gzip_18-1.0.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_gzip_18-1.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_gzip_18 pg_gzip_18-1.0.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_gzip_18-1.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_gzip_18 pg_gzip_18-1.0.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_gzip_18-1.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_gzip_18 pg_gzip_18-1.0.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_gzip_18-1.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-gzip postgresql-18-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-18-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-gzip postgresql-18-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-18-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-gzip postgresql-18-gzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-18-gzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-gzip postgresql-18-gzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-18-gzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-gzip postgresql-18-gzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-18-gzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-gzip postgresql-18-gzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 12.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-18-gzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-gzip postgresql-18-gzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-18-gzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-gzip postgresql-18-gzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-18-gzip_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_gzip_17 pg_gzip_17-1.0.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_gzip_17-1.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_gzip_17 pg_gzip_17-1.0.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0.0 13.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_gzip_17-1.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_gzip_17 pg_gzip_17-1.0.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_gzip_17-1.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_gzip_17 pg_gzip_17-1.0.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_gzip_17-1.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_gzip_17 pg_gzip_17-1.0.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_gzip_17-1.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_gzip_17 pg_gzip_17-1.0.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_gzip_17-1.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-gzip postgresql-17-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-17-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-gzip postgresql-17-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-17-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-gzip postgresql-17-gzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-17-gzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-gzip postgresql-17-gzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-17-gzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-gzip postgresql-17-gzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-17-gzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-gzip postgresql-17-gzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 13.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-17-gzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-gzip postgresql-17-gzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-17-gzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-gzip postgresql-17-gzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-17-gzip_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_gzip_16 pg_gzip_16-1.0.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_gzip_16-1.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_gzip_16 pg_gzip_16-1.0.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0.0 13.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_gzip_16-1.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_gzip_16 pg_gzip_16-1.0.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_gzip_16-1.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_gzip_16 pg_gzip_16-1.0.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_gzip_16-1.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_gzip_16 pg_gzip_16-1.0.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_gzip_16-1.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_gzip_16 pg_gzip_16-1.0.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_gzip_16-1.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-gzip postgresql-16-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-16-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-gzip postgresql-16-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-16-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-gzip postgresql-16-gzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-16-gzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-gzip postgresql-16-gzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-16-gzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-gzip postgresql-16-gzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-16-gzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-gzip postgresql-16-gzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 13.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-16-gzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-gzip postgresql-16-gzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-16-gzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-gzip postgresql-16-gzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-16-gzip_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_gzip_15 pg_gzip_15-1.0.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_gzip_15-1.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_gzip_15 pg_gzip_15-1.0.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0.0 13.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_gzip_15-1.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_gzip_15 pg_gzip_15-1.0.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_gzip_15-1.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_gzip_15 pg_gzip_15-1.0.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_gzip_15-1.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_gzip_15 pg_gzip_15-1.0.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_gzip_15-1.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_gzip_15 pg_gzip_15-1.0.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_gzip_15-1.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-gzip postgresql-15-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-15-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-gzip postgresql-15-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-15-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-gzip postgresql-15-gzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-15-gzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-gzip postgresql-15-gzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-15-gzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-gzip postgresql-15-gzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-15-gzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-gzip postgresql-15-gzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 13.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-15-gzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-gzip postgresql-15-gzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-15-gzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-gzip postgresql-15-gzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-15-gzip_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_gzip_14 pg_gzip_14-1.0.0-2PIGSTY.el8.x86_64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_gzip_14-1.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_gzip_14 pg_gzip_14-1.0.0-2PIGSTY.el8.aarch64.rpm pigsty 1.0.0 13.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_gzip_14-1.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_gzip_14 pg_gzip_14-1.0.0-2PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_gzip_14-1.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_gzip_14 pg_gzip_14-1.0.0-2PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_gzip_14-1.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_gzip_14 pg_gzip_14-1.0.0-2PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_gzip_14-1.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_gzip_14 pg_gzip_14-1.0.0-2PIGSTY.el10.aarch64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_gzip_14-1.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-gzip postgresql-14-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-14-gzip_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-gzip postgresql-14-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-gzip/postgresql-14-gzip_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-gzip postgresql-14-gzip_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 12.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-14-gzip_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-gzip postgresql-14-gzip_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 12.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-gzip/postgresql-14-gzip_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-gzip postgresql-14-gzip_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-14-gzip_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-gzip postgresql-14-gzip_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 13.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-gzip/postgresql-14-gzip_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-gzip postgresql-14-gzip_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 12.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-14-gzip_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-gzip postgresql-14-gzip_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 12.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-gzip/postgresql-14-gzip_1.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_gzip` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_gzip         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_gzip` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_gzip;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_gzip -v 18  # PG 18
pig ext install -y pg_gzip -v 17  # PG 17
pig ext install -y pg_gzip -v 16  # PG 16
pig ext install -y pg_gzip -v 15  # PG 15
pig ext install -y pg_gzip -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_gzip_18       # PG 18
dnf install -y pg_gzip_17       # PG 17
dnf install -y pg_gzip_16       # PG 16
dnf install -y pg_gzip_15       # PG 15
dnf install -y pg_gzip_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-gzip   # PG 18
apt install -y postgresql-17-gzip   # PG 17
apt install -y postgresql-16-gzip   # PG 16
apt install -y postgresql-15-gzip   # PG 15
apt install -y postgresql-14-gzip   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION gzip;
```



## 用法

有时需要在将 `bytea` 对象返回给客户端之前对其进行压缩。

有时从客户端接收到压缩过的 `bytea`，需要先解压才能进行处理。

本扩展正是为此而设计的。

本扩展**不适用于**存储压缩场景。PostgreSQL 本身已经具备[元组压缩](https://www.postgresql.org/docs/current/storage-toast.html)机制，当元组足够大时会自动进行压缩，手动使用本函数预压缩数据并不会进一步减小存储空间。


* `gzip(uncompressed BYTEA, [compression_level INTEGER])` 返回 `BYTEA`
* `gzip(uncompressed TEXT, [compression_level INTEGER])` 返回 `BYTEA`
* `gunzip(compressed BYTEA)` 返回 `BYTEA`


### 示例

    > SELECT gzip('this is my this is my this is my this is my text');

                                       gzip
    --------------------------------------------------------------------------
     \x1f8b08000000000000132bc9c82c5600a2dc4a851282ccd48a12002e7a22ff30000000

等等，压缩后的输出怎么反而更长了？！其实并非如此，只是**看起来**更长罢了，因为十六进制表示中每个字节需要两个十六进制字符。原始字符串的十六进制表示如下：

    > SELECT 'this is my this is my this is my this is my text'::bytea;

                                                   bytea
    ----------------------------------------------------------------------------------------------------
     \x74686973206973206d792074686973206973206d792074686973206973206d792074686973206973206d792074657874

对于真正较长且重复度高的内容，压缩效果自然非常显著：

    > SELECT gzip(repeat('this is my ', 100));

                                                   bytea
    ----------------------------------------------------------------------------------------------------
     \x1f8b08000000000000132bc9c82c5600a2dc4a859251e628739439ca24970900d1341c5c4c040000

要将 `bytea` 转换回等价的 `text`，必须使用 `encode()` 函数并指定 `escape` 编码方式。

    > SELECT encode('test text'::bytea, 'escape');
       encode
    -----------
     test text

    > SELECT encode(gunzip(gzip('this text has been compressed and then decompressed')), 'escape')

                          encode
    -----------------------------------------------------
     this text has been compressed and then decompressed

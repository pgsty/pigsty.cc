---
title: "zstd"
linkTitle: "zstd"
description: "ZSTD压缩解压缩函数包"
weight: 4030
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/grahamedgecombe/pgzstd">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">grahamedgecombe/pgzstd</div>
    <div class="ext-card__desc">https://github.com/grahamedgecombe/pgzstd</div>
  </a>
  <a class="ext-card ext-card--source" href="pgzstd-1.1.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgzstd-1.1.2.tar.gz</div>
    <div class="ext-card__desc">pgzstd-1.1.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_zstd`**](/ext/e/zstd) | `1.1.2` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4030  | [**`zstd`**](/ext/e/zstd) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) [`pgjq`](/ext/e/pgjq) [`pgjwt`](/ext/e/pgjwt) [`pg_smtp_client`](/ext/e/pg_smtp_client) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> +varatt.h


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_zstd` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_zstd_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-zstd` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
@ el8.x86_64 18 pg_zstd_18 pg_zstd_18-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_zstd_18-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_zstd_18 pg_zstd_18-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_zstd_18-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_zstd_18 pg_zstd_18-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 11.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_zstd_18-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_zstd_18 pg_zstd_18-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 11.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_zstd_18-1.1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_zstd_18 pg_zstd_18-1.1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.1.2 11.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_zstd_18-1.1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_zstd_18 pg_zstd_18-1.1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.1.2 11.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_zstd_18-1.1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-zstd postgresql-18-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-18-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-zstd postgresql-18-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-18-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-zstd postgresql-18-zstd_1.1.2-2PIGSTY~trixie_amd64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-18-zstd_1.1.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-zstd postgresql-18-zstd_1.1.2-2PIGSTY~trixie_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-18-zstd_1.1.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-zstd postgresql-18-zstd_1.1.2-2PIGSTY~jammy_amd64.deb pigsty 1.1.2 12.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-18-zstd_1.1.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-zstd postgresql-18-zstd_1.1.2-2PIGSTY~jammy_arm64.deb pigsty 1.1.2 12.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-18-zstd_1.1.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-zstd postgresql-18-zstd_1.1.2-2PIGSTY~noble_amd64.deb pigsty 1.1.2 12.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-18-zstd_1.1.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-zstd postgresql-18-zstd_1.1.2-2PIGSTY~noble_arm64.deb pigsty 1.1.2 12.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-18-zstd_1.1.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_zstd_17 pg_zstd_17-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_zstd_17-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_zstd_17 pg_zstd_17-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_zstd_17-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_zstd_17 pg_zstd_17-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 12.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_zstd_17-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_zstd_17 pg_zstd_17-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 11.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_zstd_17-1.1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_zstd_17 pg_zstd_17-1.1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.1.2 11.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_zstd_17-1.1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_zstd_17 pg_zstd_17-1.1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.1.2 12.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_zstd_17-1.1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-zstd postgresql-17-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-17-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-zstd postgresql-17-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-17-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-zstd postgresql-17-zstd_1.1.2-2PIGSTY~trixie_amd64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-17-zstd_1.1.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-zstd postgresql-17-zstd_1.1.2-2PIGSTY~trixie_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-17-zstd_1.1.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-zstd postgresql-17-zstd_1.1.2-2PIGSTY~jammy_amd64.deb pigsty 1.1.2 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-17-zstd_1.1.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-zstd postgresql-17-zstd_1.1.2-2PIGSTY~jammy_arm64.deb pigsty 1.1.2 12.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-17-zstd_1.1.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-zstd postgresql-17-zstd_1.1.2-2PIGSTY~noble_amd64.deb pigsty 1.1.2 12.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-17-zstd_1.1.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-zstd postgresql-17-zstd_1.1.2-2PIGSTY~noble_arm64.deb pigsty 1.1.2 12.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-17-zstd_1.1.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_zstd_16 pg_zstd_16-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_zstd_16-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_zstd_16 pg_zstd_16-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_zstd_16-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_zstd_16 pg_zstd_16-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 12.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_zstd_16-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_zstd_16 pg_zstd_16-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 11.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_zstd_16-1.1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_zstd_16 pg_zstd_16-1.1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.1.2 11.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_zstd_16-1.1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_zstd_16 pg_zstd_16-1.1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.1.2 11.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_zstd_16-1.1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-zstd postgresql-16-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-16-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-zstd postgresql-16-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-16-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-zstd postgresql-16-zstd_1.1.2-2PIGSTY~trixie_amd64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-16-zstd_1.1.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-zstd postgresql-16-zstd_1.1.2-2PIGSTY~trixie_arm64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-16-zstd_1.1.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-zstd postgresql-16-zstd_1.1.2-2PIGSTY~jammy_amd64.deb pigsty 1.1.2 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-16-zstd_1.1.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-zstd postgresql-16-zstd_1.1.2-2PIGSTY~jammy_arm64.deb pigsty 1.1.2 12.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-16-zstd_1.1.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-zstd postgresql-16-zstd_1.1.2-2PIGSTY~noble_amd64.deb pigsty 1.1.2 12.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-16-zstd_1.1.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-zstd postgresql-16-zstd_1.1.2-2PIGSTY~noble_arm64.deb pigsty 1.1.2 12.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-16-zstd_1.1.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_zstd_15 pg_zstd_15-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_zstd_15-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_zstd_15 pg_zstd_15-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_zstd_15-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_zstd_15 pg_zstd_15-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 12.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_zstd_15-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_zstd_15 pg_zstd_15-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 11.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_zstd_15-1.1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_zstd_15 pg_zstd_15-1.1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.1.2 11.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_zstd_15-1.1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_zstd_15 pg_zstd_15-1.1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.1.2 11.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_zstd_15-1.1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-zstd postgresql-15-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-15-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-zstd postgresql-15-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-15-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-zstd postgresql-15-zstd_1.1.2-2PIGSTY~trixie_amd64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-15-zstd_1.1.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-zstd postgresql-15-zstd_1.1.2-2PIGSTY~trixie_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-15-zstd_1.1.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-zstd postgresql-15-zstd_1.1.2-2PIGSTY~jammy_amd64.deb pigsty 1.1.2 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-15-zstd_1.1.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-zstd postgresql-15-zstd_1.1.2-2PIGSTY~jammy_arm64.deb pigsty 1.1.2 12.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-15-zstd_1.1.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-zstd postgresql-15-zstd_1.1.2-2PIGSTY~noble_amd64.deb pigsty 1.1.2 12.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-15-zstd_1.1.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-zstd postgresql-15-zstd_1.1.2-2PIGSTY~noble_arm64.deb pigsty 1.1.2 12.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-15-zstd_1.1.2-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_zstd_14 pg_zstd_14-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_zstd_14-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_zstd_14 pg_zstd_14-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 12.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_zstd_14-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_zstd_14 pg_zstd_14-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 12.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_zstd_14-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_zstd_14 pg_zstd_14-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 11.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_zstd_14-1.1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_zstd_14 pg_zstd_14-1.1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.1.2 11.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_zstd_14-1.1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_zstd_14 pg_zstd_14-1.1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.1.2 11.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_zstd_14-1.1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-zstd postgresql-14-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-14-zstd_1.1.2-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-zstd postgresql-14-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-zstd/postgresql-14-zstd_1.1.2-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-zstd postgresql-14-zstd_1.1.2-2PIGSTY~trixie_amd64.deb pigsty 1.1.2 11.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-14-zstd_1.1.2-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-zstd postgresql-14-zstd_1.1.2-2PIGSTY~trixie_arm64.deb pigsty 1.1.2 11.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-zstd/postgresql-14-zstd_1.1.2-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-zstd postgresql-14-zstd_1.1.2-2PIGSTY~jammy_amd64.deb pigsty 1.1.2 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-14-zstd_1.1.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-zstd postgresql-14-zstd_1.1.2-2PIGSTY~jammy_arm64.deb pigsty 1.1.2 12.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-zstd/postgresql-14-zstd_1.1.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-zstd postgresql-14-zstd_1.1.2-2PIGSTY~noble_amd64.deb pigsty 1.1.2 12.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-14-zstd_1.1.2-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-zstd postgresql-14-zstd_1.1.2-2PIGSTY~noble_arm64.deb pigsty 1.1.2 12.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-zstd/postgresql-14-zstd_1.1.2-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_zstd` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_zstd         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_zstd` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_zstd;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_zstd -v 18  # PG 18
pig ext install -y pg_zstd -v 17  # PG 17
pig ext install -y pg_zstd -v 16  # PG 16
pig ext install -y pg_zstd -v 15  # PG 15
pig ext install -y pg_zstd -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_zstd_18       # PG 18
dnf install -y pg_zstd_17       # PG 17
dnf install -y pg_zstd_16       # PG 16
dnf install -y pg_zstd_15       # PG 15
dnf install -y pg_zstd_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-zstd   # PG 18
apt install -y postgresql-17-zstd   # PG 17
apt install -y postgresql-16-zstd   # PG 16
apt install -y postgresql-15-zstd   # PG 15
apt install -y postgresql-14-zstd   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION zstd;
```


## 用法

| 函数                                                                                 | 返回类型    |
|--------------------------------------------------------------------------------------|-------------|
| <code>zstd_compress(*data* bytea [, *dictionary* bytea [, *level* integer ]])</code> | `bytea`     |
| <code>zstd_decompress(*data* bytea [, *dictionary* bytea ])</code>                   | `bytea`     |
| <code>zstd_length(*data* bytea)</code>                                               | `integer`   |

`zstd_compress` 对提供的 `data` 进行压缩，返回一个 Zstandard 帧。可以选择提供预设的 `dictionary`（字典）。也可以覆盖默认的压缩 `level`（级别），有效值范围为 `1`（最快速度）到 `22`（最高压缩率），默认级别为 `3`。

如果需要在不使用字典的情况下覆盖压缩级别，请将 `dictionary` 设置为 `NULL`。

`zstd_decompress` 对 `data` 中提供的 Zstandard 帧进行解压缩，返回解压后的数据。可以选择提供与压缩时相同的预设 `dictionary`（字典）。

`zstd_length` 返回给定 Zstandard 帧的解压后长度。如果 `ZSTD_getFrameContentSize()` 可用，当长度未知时返回 `NULL`。如果该函数不可用，则无法区分错误、未知解压长度和零解压长度这几种情况。


### 示例

基本的压缩/解压缩示例：

```sql
CREATE EXTENSION zstd;

SELECT zstd_compress('hello world');
-- zstd_compress
-- --------------------------------------------
-- \x28b52ffd200b59000068656c6c6f20776f726c64

SELECT convert_from(zstd_decompress('\x28b52ffd200b59000068656c6c6f20776f726c64'), 'utf-8');
-- convert_from
-- --------------
--  hello world
```

指定压缩级别（`1` 为最快速度，`22` 为最高压缩率，默认为 `3`）

```sql
CREATE EXTENSION zstd;

SELECT zstd_compress('hello world',  NULL, 10);
-- zstd_compress
-- --------------------------------------------
-- \x28b52ffd200b59000068656c6c6f20776f726c64

SELECT convert_from(zstd_decompress('\x28b52ffd200b59000068656c6c6f20776f726c64'), 'utf-8');
-- convert_from
-- --------------
--  hello world
```

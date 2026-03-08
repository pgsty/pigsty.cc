---
title: "pg_protobuf"
linkTitle: "pg_protobuf"
description: "提供Protobuf函数支持"
weight: 4260
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/afiskon/pg_protobuf">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">afiskon/pg_protobuf</div>
    <div class="ext-card__desc">https://github.com/afiskon/pg_protobuf</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_protobuf-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_protobuf-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_protobuf-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_protobuf`**](/ext/e/pg_protobuf) | `1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4260  | [**`pg_protobuf`**](/ext/e/pg_protobuf) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgjq`](/ext/e/pgjq) [`pgqr`](/ext/e/pgqr) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_protobuf` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_protobuf_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-protobuf` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 pg_protobuf_18 pg_protobuf_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_protobuf_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_protobuf_18 pg_protobuf_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_protobuf_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_protobuf_18 pg_protobuf_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_protobuf_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_protobuf_18 pg_protobuf_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_protobuf_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_protobuf_18 pg_protobuf_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_protobuf_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_protobuf_18 pg_protobuf_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_protobuf_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-protobuf postgresql-18-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 40.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-18-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-protobuf postgresql-18-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 41.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-18-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-protobuf postgresql-18-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 40.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-18-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-protobuf postgresql-18-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 41.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-18-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-protobuf postgresql-18-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 44.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-18-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-protobuf postgresql-18-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 44.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-18-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-protobuf postgresql-18-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 42.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-18-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-protobuf postgresql-18-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 42.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-18-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_protobuf_17 pg_protobuf_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_protobuf_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_protobuf_17 pg_protobuf_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_protobuf_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_protobuf_17 pg_protobuf_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_protobuf_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_protobuf_17 pg_protobuf_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_protobuf_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_protobuf_17 pg_protobuf_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_protobuf_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_protobuf_17 pg_protobuf_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_protobuf_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-protobuf postgresql-17-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 40.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-17-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-protobuf postgresql-17-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 40.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-17-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-protobuf postgresql-17-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 39.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-17-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-protobuf postgresql-17-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 40.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-17-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-protobuf postgresql-17-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 44.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-17-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-protobuf postgresql-17-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 44.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-17-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-protobuf postgresql-17-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 41.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-17-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-protobuf postgresql-17-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 42.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-17-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_protobuf_16 pg_protobuf_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_protobuf_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_protobuf_16 pg_protobuf_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_protobuf_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_protobuf_16 pg_protobuf_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_protobuf_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_protobuf_16 pg_protobuf_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_protobuf_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_protobuf_16 pg_protobuf_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_protobuf_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_protobuf_16 pg_protobuf_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_protobuf_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-protobuf postgresql-16-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 39.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-16-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-protobuf postgresql-16-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 40.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-16-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-protobuf postgresql-16-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 39.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-16-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-protobuf postgresql-16-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 40.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-16-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-protobuf postgresql-16-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 44.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-16-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-protobuf postgresql-16-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 44.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-16-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-protobuf postgresql-16-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 41.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-16-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-protobuf postgresql-16-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 41.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-16-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_protobuf_15 pg_protobuf_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_protobuf_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_protobuf_15 pg_protobuf_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_protobuf_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_protobuf_15 pg_protobuf_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_protobuf_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_protobuf_15 pg_protobuf_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_protobuf_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_protobuf_15 pg_protobuf_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_protobuf_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_protobuf_15 pg_protobuf_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_protobuf_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-protobuf postgresql-15-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 38.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-15-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-protobuf postgresql-15-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 39.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-15-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-protobuf postgresql-15-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 38.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-15-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-protobuf postgresql-15-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 39.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-15-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-protobuf postgresql-15-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 43.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-15-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-protobuf postgresql-15-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 43.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-15-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-protobuf postgresql-15-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 40.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-15-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-protobuf postgresql-15-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 41.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-15-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_protobuf_14 pg_protobuf_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_protobuf_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_protobuf_14 pg_protobuf_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_protobuf_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_protobuf_14 pg_protobuf_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_protobuf_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_protobuf_14 pg_protobuf_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_protobuf_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_protobuf_14 pg_protobuf_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 14.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_protobuf_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_protobuf_14 pg_protobuf_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_protobuf_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-protobuf postgresql-14-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 38.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-14-pg-protobuf_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-protobuf postgresql-14-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 39.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-protobuf/postgresql-14-pg-protobuf_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-protobuf postgresql-14-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 38.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-14-pg-protobuf_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-protobuf postgresql-14-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 39.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-protobuf/postgresql-14-pg-protobuf_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-protobuf postgresql-14-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 43.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-14-pg-protobuf_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-protobuf postgresql-14-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 43.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-protobuf/postgresql-14-pg-protobuf_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-protobuf postgresql-14-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 40.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-14-pg-protobuf_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-protobuf postgresql-14-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 40.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-protobuf/postgresql-14-pg-protobuf_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_protobuf` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_protobuf         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_protobuf` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_protobuf;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_protobuf -v 18  # PG 18
pig ext install -y pg_protobuf -v 17  # PG 17
pig ext install -y pg_protobuf -v 16  # PG 16
pig ext install -y pg_protobuf -v 15  # PG 15
pig ext install -y pg_protobuf -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_protobuf_18       # PG 18
dnf install -y pg_protobuf_17       # PG 17
dnf install -y pg_protobuf_16       # PG 16
dnf install -y pg_protobuf_15       # PG 15
dnf install -y pg_protobuf_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-protobuf   # PG 18
apt install -y postgresql-17-pg-protobuf   # PG 17
apt install -y postgresql-16-pg-protobuf   # PG 16
apt install -y postgresql-15-pg-protobuf   # PG 15
apt install -y postgresql-14-pg-protobuf   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_protobuf;
```

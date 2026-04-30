---
title: "uri"
linkTitle: "uri"
description: "URI数据类型"
weight: 3840
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/petere/pguri">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">petere/pguri</div>
    <div class="ext-card__desc">https://github.com/petere/pguri</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pguri-1.20251029.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pguri-1.20251029.tar.gz</div>
    <div class="ext-card__desc">pguri-1.20251029.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_uri`**](/ext/e/uri) | `1.20251029` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3840  | [**`uri`**](/ext/e/uri) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> +int flag


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.20251029` | {{< pgvers "18,17,16,15,14" >}} | `pg_uri` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.20251029` | {{< pgvers "18,17,16,15,14" >}} | `pg_uri_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.20251029` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-uri` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| el8.aarch64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| el9.x86_64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| el9.aarch64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| el10.x86_64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| el10.aarch64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| d12.x86_64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| d12.aarch64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| d13.x86_64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| d13.aarch64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| u22.x86_64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| u22.aarch64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| u24.x86_64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| u24.aarch64 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 | AVAIL PIGSTY 1.20251029 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_uri_18 pg_uri_18-1.20251029-1PIGSTY.el8.x86_64.rpm pigsty 1.20251029 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uri_18-1.20251029-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_uri_18 pg_uri_18-1.20251029-1PIGSTY.el8.aarch64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uri_18-1.20251029-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_uri_18 pg_uri_18-1.20251029-1PIGSTY.el9.x86_64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uri_18-1.20251029-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_uri_18 pg_uri_18-1.20251029-1PIGSTY.el9.aarch64.rpm pigsty 1.20251029 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uri_18-1.20251029-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_uri_18 pg_uri_18-1.20251029-1PIGSTY.el10.x86_64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uri_18-1.20251029-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_uri_18 pg_uri_18-1.20251029-1PIGSTY.el10.aarch64.rpm pigsty 1.20251029 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uri_18-1.20251029-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-uri postgresql-18-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb pigsty 1.20251029 21.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-18-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-uri postgresql-18-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb pigsty 1.20251029 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-18-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-uri postgresql-18-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb pigsty 1.20251029 21.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-18-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-uri postgresql-18-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb pigsty 1.20251029 21.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-18-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-uri postgresql-18-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb pigsty 1.20251029 22.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-18-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-uri postgresql-18-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb pigsty 1.20251029 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-18-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-uri postgresql-18-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb pigsty 1.20251029 22.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-18-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-uri postgresql-18-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb pigsty 1.20251029 22.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-18-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_uri_17 pg_uri_17-1.20251029-1PIGSTY.el8.x86_64.rpm pigsty 1.20251029 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uri_17-1.20251029-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_uri_17 pg_uri_17-1.20251029-1PIGSTY.el8.aarch64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uri_17-1.20251029-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_uri_17 pg_uri_17-1.20251029-1PIGSTY.el9.x86_64.rpm pigsty 1.20251029 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uri_17-1.20251029-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_uri_17 pg_uri_17-1.20251029-1PIGSTY.el9.aarch64.rpm pigsty 1.20251029 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uri_17-1.20251029-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_uri_17 pg_uri_17-1.20251029-1PIGSTY.el10.x86_64.rpm pigsty 1.20251029 19.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uri_17-1.20251029-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_uri_17 pg_uri_17-1.20251029-1PIGSTY.el10.aarch64.rpm pigsty 1.20251029 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uri_17-1.20251029-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-uri postgresql-17-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb pigsty 1.20251029 21.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-17-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-uri postgresql-17-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb pigsty 1.20251029 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-17-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-uri postgresql-17-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb pigsty 1.20251029 21.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-17-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-uri postgresql-17-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb pigsty 1.20251029 21.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-17-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-uri postgresql-17-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb pigsty 1.20251029 23.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-17-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-uri postgresql-17-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb pigsty 1.20251029 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-17-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-uri postgresql-17-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb pigsty 1.20251029 22.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-17-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-uri postgresql-17-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb pigsty 1.20251029 22.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-17-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_uri_16 pg_uri_16-1.20251029-1PIGSTY.el8.x86_64.rpm pigsty 1.20251029 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uri_16-1.20251029-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_uri_16 pg_uri_16-1.20251029-1PIGSTY.el8.aarch64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uri_16-1.20251029-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_uri_16 pg_uri_16-1.20251029-1PIGSTY.el9.x86_64.rpm pigsty 1.20251029 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uri_16-1.20251029-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_uri_16 pg_uri_16-1.20251029-1PIGSTY.el9.aarch64.rpm pigsty 1.20251029 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uri_16-1.20251029-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_uri_16 pg_uri_16-1.20251029-1PIGSTY.el10.x86_64.rpm pigsty 1.20251029 19.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uri_16-1.20251029-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_uri_16 pg_uri_16-1.20251029-1PIGSTY.el10.aarch64.rpm pigsty 1.20251029 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uri_16-1.20251029-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-uri postgresql-16-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb pigsty 1.20251029 21.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-16-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-uri postgresql-16-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb pigsty 1.20251029 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-16-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-uri postgresql-16-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb pigsty 1.20251029 21.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-16-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-uri postgresql-16-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb pigsty 1.20251029 21.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-16-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-uri postgresql-16-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb pigsty 1.20251029 23.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-16-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-uri postgresql-16-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb pigsty 1.20251029 23.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-16-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-uri postgresql-16-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb pigsty 1.20251029 22.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-16-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-uri postgresql-16-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb pigsty 1.20251029 22.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-16-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_uri_15 pg_uri_15-1.20251029-1PIGSTY.el8.x86_64.rpm pigsty 1.20251029 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uri_15-1.20251029-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_uri_15 pg_uri_15-1.20251029-1PIGSTY.el8.aarch64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uri_15-1.20251029-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_uri_15 pg_uri_15-1.20251029-1PIGSTY.el9.x86_64.rpm pigsty 1.20251029 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uri_15-1.20251029-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_uri_15 pg_uri_15-1.20251029-1PIGSTY.el9.aarch64.rpm pigsty 1.20251029 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uri_15-1.20251029-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_uri_15 pg_uri_15-1.20251029-1PIGSTY.el10.x86_64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uri_15-1.20251029-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_uri_15 pg_uri_15-1.20251029-1PIGSTY.el10.aarch64.rpm pigsty 1.20251029 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uri_15-1.20251029-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-uri postgresql-15-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb pigsty 1.20251029 21.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-15-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-uri postgresql-15-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb pigsty 1.20251029 21.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-15-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-uri postgresql-15-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb pigsty 1.20251029 21.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-15-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-uri postgresql-15-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb pigsty 1.20251029 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-15-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-uri postgresql-15-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb pigsty 1.20251029 23.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-15-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-uri postgresql-15-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb pigsty 1.20251029 23.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-15-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-uri postgresql-15-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb pigsty 1.20251029 22.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-15-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-uri postgresql-15-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb pigsty 1.20251029 22.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-15-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_uri_14 pg_uri_14-1.20251029-1PIGSTY.el8.x86_64.rpm pigsty 1.20251029 19.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uri_14-1.20251029-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_uri_14 pg_uri_14-1.20251029-1PIGSTY.el8.aarch64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uri_14-1.20251029-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_uri_14 pg_uri_14-1.20251029-1PIGSTY.el9.x86_64.rpm pigsty 1.20251029 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uri_14-1.20251029-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_uri_14 pg_uri_14-1.20251029-1PIGSTY.el9.aarch64.rpm pigsty 1.20251029 18.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uri_14-1.20251029-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_uri_14 pg_uri_14-1.20251029-1PIGSTY.el10.x86_64.rpm pigsty 1.20251029 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uri_14-1.20251029-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_uri_14 pg_uri_14-1.20251029-1PIGSTY.el10.aarch64.rpm pigsty 1.20251029 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uri_14-1.20251029-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-uri postgresql-14-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb pigsty 1.20251029 21.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-14-pg-uri_1.20251029-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-uri postgresql-14-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb pigsty 1.20251029 21.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uri/postgresql-14-pg-uri_1.20251029-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-uri postgresql-14-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb pigsty 1.20251029 21.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-14-pg-uri_1.20251029-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-uri postgresql-14-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb pigsty 1.20251029 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uri/postgresql-14-pg-uri_1.20251029-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-uri postgresql-14-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb pigsty 1.20251029 23.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-14-pg-uri_1.20251029-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-uri postgresql-14-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb pigsty 1.20251029 22.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uri/postgresql-14-pg-uri_1.20251029-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-uri postgresql-14-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb pigsty 1.20251029 22.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-14-pg-uri_1.20251029-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-uri postgresql-14-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb pigsty 1.20251029 22.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uri/postgresql-14-pg-uri_1.20251029-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_uri` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_uri         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_uri` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_uri;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_uri -v 18  # PG 18
pig ext install -y pg_uri -v 17  # PG 17
pig ext install -y pg_uri -v 16  # PG 16
pig ext install -y pg_uri -v 15  # PG 15
pig ext install -y pg_uri -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_uri_18       # PG 18
dnf install -y pg_uri_17       # PG 17
dnf install -y pg_uri_16       # PG 16
dnf install -y pg_uri_15       # PG 15
dnf install -y pg_uri_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-uri   # PG 18
apt install -y postgresql-17-pg-uri   # PG 17
apt install -y postgresql-16-pg-uri   # PG 16
apt install -y postgresql-15-pg-uri   # PG 15
apt install -y postgresql-14-pg-uri   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION uri;
```



## 用法

> [uri: 支持验证和组件提取的 URI 数据类型](https://github.com/petere/pguri)

`uri` 扩展提供了一种用于存储 URI 的数据类型，支持 RFC 3986 语法验证、组件提取函数和人性化排序。

```sql
CREATE EXTENSION uri;

CREATE TABLE links (
    id   int PRIMARY KEY,
    link uri
);

INSERT INTO links VALUES (1, 'https://github.com/petere/pguri');
```

### 组件提取函数

| 函数 | 返回类型 | 描述 |
|------|---------|------|
| `uri_scheme(uri)` | `text` | 协议（http、ftp、mailto） |
| `uri_userinfo(uri)` | `text` | 用户信息；不存在时返回 NULL |
| `uri_host(uri)` | `text` | 主机名或 IP 地址 |
| `uri_host_inet(uri)` | `inet` | IP 主机转为 inet 类型；非 IP 时返回 NULL |
| `uri_port(uri)` | `integer` | 端口号；未指定时返回 NULL |
| `uri_path(uri)` | `text` | 路径组件（不会为 NULL） |
| `uri_path_array(uri)` | `text[]` | 按 `/` 分割的路径 |
| `uri_query(uri)` | `text` | 查询字符串；不存在时返回 NULL |
| `uri_fragment(uri)` | `text` | 片段标识；不存在时返回 NULL |

### 工具函数

```sql
-- 按 RFC 3986 标准化 URI
SELECT uri_normalize('HTTP://Example.COM/foo/../bar');

-- 百分号编码文本
SELECT uri_escape('hello world', true, false);  -- hello+world

-- 解码百分号编码文本
SELECT uri_unescape('hello+world', true, false);  -- hello world
```

### 示例

```sql
SELECT uri_scheme(link), uri_host(link), uri_path(link)
FROM links
WHERE uri_host(link) = 'github.com';
```

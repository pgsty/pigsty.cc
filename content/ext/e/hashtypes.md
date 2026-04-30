---
title: "hashtypes"
linkTitle: "hashtypes"
description: "包括SHA1，MD5在内的多种哈希数据类型"
weight: 3750
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adjust/hashtypes/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adjust/hashtypes</div>
    <div class="ext-card__desc">https://github.com/adjust/hashtypes/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/hashtypes-0.1.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">hashtypes-0.1.5.tar.gz</div>
    <div class="ext-card__desc">hashtypes-0.1.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`hashtypes`**](/ext/e/hashtypes) | `0.1.5` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3750  | [**`hashtypes`**](/ext/e/hashtypes) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `hashtypes` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `hashtypes_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-hashtypes` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 hashtypes_18 hashtypes_18-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 26.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hashtypes_18-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 hashtypes_18 hashtypes_18-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 25.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hashtypes_18-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 hashtypes_18 hashtypes_18-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 24.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hashtypes_18-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 hashtypes_18 hashtypes_18-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 23.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hashtypes_18-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 hashtypes_18 hashtypes_18-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 24.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hashtypes_18-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 hashtypes_18 hashtypes_18-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 24.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hashtypes_18-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-hashtypes postgresql-18-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-18-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-hashtypes postgresql-18-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-18-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-hashtypes postgresql-18-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-18-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-hashtypes postgresql-18-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 33.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-18-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-hashtypes postgresql-18-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 35.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-18-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-hashtypes postgresql-18-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 35.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-18-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-hashtypes postgresql-18-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-18-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-hashtypes postgresql-18-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 35.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-18-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 hashtypes_17 hashtypes_17-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 26.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hashtypes_17-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 hashtypes_17 hashtypes_17-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 25.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hashtypes_17-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 hashtypes_17 hashtypes_17-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 24.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hashtypes_17-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 hashtypes_17 hashtypes_17-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 23.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hashtypes_17-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 hashtypes_17 hashtypes_17-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 24.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hashtypes_17-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 hashtypes_17 hashtypes_17-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 24.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hashtypes_17-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-hashtypes postgresql-17-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-17-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-hashtypes postgresql-17-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-17-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-hashtypes postgresql-17-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 33.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-17-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-hashtypes postgresql-17-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 33.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-17-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-hashtypes postgresql-17-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-17-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-hashtypes postgresql-17-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 35.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-17-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-hashtypes postgresql-17-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-17-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-hashtypes postgresql-17-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 35.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-17-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 hashtypes_16 hashtypes_16-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 26.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hashtypes_16-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 hashtypes_16 hashtypes_16-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 25.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hashtypes_16-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 hashtypes_16 hashtypes_16-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 24.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hashtypes_16-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 hashtypes_16 hashtypes_16-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 23.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hashtypes_16-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 hashtypes_16 hashtypes_16-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 24.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hashtypes_16-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 hashtypes_16 hashtypes_16-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 24.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hashtypes_16-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-hashtypes postgresql-16-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-16-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-hashtypes postgresql-16-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 33.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-16-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-hashtypes postgresql-16-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-16-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-hashtypes postgresql-16-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 33.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-16-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-hashtypes postgresql-16-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-16-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-hashtypes postgresql-16-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 35.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-16-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-hashtypes postgresql-16-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-16-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-hashtypes postgresql-16-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-16-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 hashtypes_15 hashtypes_15-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 26.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hashtypes_15-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 hashtypes_15 hashtypes_15-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 25.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hashtypes_15-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 hashtypes_15 hashtypes_15-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 24.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hashtypes_15-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 hashtypes_15 hashtypes_15-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 24.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hashtypes_15-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 hashtypes_15 hashtypes_15-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 24.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hashtypes_15-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 hashtypes_15 hashtypes_15-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 24.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hashtypes_15-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-hashtypes postgresql-15-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-15-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-hashtypes postgresql-15-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-15-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-hashtypes postgresql-15-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 33.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-15-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-hashtypes postgresql-15-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-15-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-hashtypes postgresql-15-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 36.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-15-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-hashtypes postgresql-15-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 36.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-15-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-hashtypes postgresql-15-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 35.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-15-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-hashtypes postgresql-15-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-15-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 hashtypes_14 hashtypes_14-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 26.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hashtypes_14-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 hashtypes_14 hashtypes_14-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 25.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hashtypes_14-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 hashtypes_14 hashtypes_14-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 24.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hashtypes_14-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 hashtypes_14 hashtypes_14-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 24.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hashtypes_14-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 hashtypes_14 hashtypes_14-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 24.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hashtypes_14-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 hashtypes_14 hashtypes_14-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 24.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hashtypes_14-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-hashtypes postgresql-14-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 33.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-14-hashtypes_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-hashtypes postgresql-14-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 33.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hashtypes/postgresql-14-hashtypes_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-hashtypes postgresql-14-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 33.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-14-hashtypes_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-hashtypes postgresql-14-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 33.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hashtypes/postgresql-14-hashtypes_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-hashtypes postgresql-14-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 36.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-14-hashtypes_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-hashtypes postgresql-14-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 36.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hashtypes/postgresql-14-hashtypes_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-hashtypes postgresql-14-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 34.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-14-hashtypes_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-hashtypes postgresql-14-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hashtypes/postgresql-14-hashtypes_0.1.5-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `hashtypes` 扩展的 RPM / DEB 包：

```bash
pig build pkg hashtypes         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `hashtypes` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install hashtypes;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y hashtypes -v 18  # PG 18
pig ext install -y hashtypes -v 17  # PG 17
pig ext install -y hashtypes -v 16  # PG 16
pig ext install -y hashtypes -v 15  # PG 15
pig ext install -y hashtypes -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y hashtypes_18       # PG 18
dnf install -y hashtypes_17       # PG 17
dnf install -y hashtypes_16       # PG 16
dnf install -y hashtypes_15       # PG 15
dnf install -y hashtypes_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-hashtypes   # PG 18
apt install -y postgresql-17-hashtypes   # PG 17
apt install -y postgresql-16-hashtypes   # PG 16
apt install -y postgresql-15-hashtypes   # PG 15
apt install -y postgresql-14-hashtypes   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION hashtypes;
```



## 用法

> [hashtypes: 哈希与校验和数据类型（SHA、CRC32）](https://github.com/adjust/hashtypes/)

`hashtypes` 扩展提供了原生数据类型，用于以二进制形式存储哈希值和校验和，相比文本存储更节省空间。

```sql
CREATE EXTENSION hashtypes;
```

### 数据类型

| 类型 | 存储大小 | 描述 |
|------|---------|------|
| `sha1` | 20 字节 | SHA-1 哈希（160 位） |
| `sha224` | 28 字节 | SHA-224 哈希（224 位） |
| `sha256` | 32 字节 | SHA-256 哈希（256 位） |
| `sha384` | 48 字节 | SHA-384 哈希（384 位） |
| `sha512` | 64 字节 | SHA-512 哈希（512 位） |
| `crc32` | 4 字节 | CRC-32 校验和 |

### 用法

```sql
CREATE TABLE objects (
    hash sha256 PRIMARY KEY,
    data bytea
);

INSERT INTO objects VALUES (
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    '\x'
);

SELECT * FROM objects WHERE hash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
```

### 运算符

所有类型均支持比较运算符：`=`、`<>`、`<`、`>`、`<=`、`>=`。

### 索引支持

所有类型均提供 Btree 和 Hash 索引运算符类。

### 类型转换

所有类型均支持与 `text` 和 `bytea` 之间的双向转换。

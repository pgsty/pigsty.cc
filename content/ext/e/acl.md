---
title: "acl"
linkTitle: "acl"
description: "ACL数据类型"
weight: 3860
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/arkhipov/acl">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">arkhipov/acl</div>
    <div class="ext-card__desc">https://github.com/arkhipov/acl</div>
  </a>
  <a class="ext-card ext-card--source" href="acl-1.0.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">acl-1.0.4.tar.gz</div>
    <div class="ext-card__desc">acl-1.0.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_acl`**](/ext/e/acl) | `1.0.4` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3860  | [**`acl`**](/ext/e/acl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> +cast pg_uuid_t


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_acl` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `acl_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-acl` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
@ el8.x86_64 18 acl_18 acl_18-1.0.4-1PIGSTY.el8.x86_64.rpm pigsty 1.0.4 28.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/acl_18-1.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 acl_18 acl_18-1.0.4-1PIGSTY.el8.aarch64.rpm pigsty 1.0.4 27.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/acl_18-1.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 acl_18 acl_18-1.0.4-1PIGSTY.el9.x86_64.rpm pigsty 1.0.4 27.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/acl_18-1.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 acl_18 acl_18-1.0.4-1PIGSTY.el9.aarch64.rpm pigsty 1.0.4 27.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/acl_18-1.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 acl_18 acl_18-1.0.4-1PIGSTY.el10.x86_64.rpm pigsty 1.0.4 27.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/acl_18-1.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 acl_18 acl_18-1.0.4-1PIGSTY.el10.aarch64.rpm pigsty 1.0.4 27.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/acl_18-1.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-acl postgresql-18-acl_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 45.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-18-acl_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-acl postgresql-18-acl_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 44.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-18-acl_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-acl postgresql-18-acl_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 45.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-18-acl_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-acl postgresql-18-acl_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 44.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-18-acl_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-acl postgresql-18-acl_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 47.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-18-acl_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-acl postgresql-18-acl_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 47.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-18-acl_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-acl postgresql-18-acl_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 47.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-18-acl_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-acl postgresql-18-acl_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 46.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-18-acl_1.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 acl_17 acl_17-1.0.4-1PIGSTY.el8.x86_64.rpm pigsty 1.0.4 28.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/acl_17-1.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 acl_17 acl_17-1.0.4-1PIGSTY.el8.aarch64.rpm pigsty 1.0.4 27.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/acl_17-1.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 acl_17 acl_17-1.0.4-1PIGSTY.el9.x86_64.rpm pigsty 1.0.4 27.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/acl_17-1.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 acl_17 acl_17-1.0.4-1PIGSTY.el9.aarch64.rpm pigsty 1.0.4 27.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/acl_17-1.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 acl_17 acl_17-1.0.4-1PIGSTY.el10.x86_64.rpm pigsty 1.0.4 27.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/acl_17-1.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 acl_17 acl_17-1.0.4-1PIGSTY.el10.aarch64.rpm pigsty 1.0.4 27.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/acl_17-1.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-acl postgresql-17-acl_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 45.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-17-acl_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-acl postgresql-17-acl_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 44.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-17-acl_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-acl postgresql-17-acl_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 45.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-17-acl_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-acl postgresql-17-acl_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 44.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-17-acl_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-acl postgresql-17-acl_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 50.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-17-acl_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-acl postgresql-17-acl_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 50.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-17-acl_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-acl postgresql-17-acl_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 47.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-17-acl_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-acl postgresql-17-acl_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 46.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-17-acl_1.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 acl_16 acl_16-1.0.4-1PIGSTY.el8.x86_64.rpm pigsty 1.0.4 28.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/acl_16-1.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 acl_16 acl_16-1.0.4-1PIGSTY.el8.aarch64.rpm pigsty 1.0.4 27.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/acl_16-1.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 acl_16 acl_16-1.0.4-1PIGSTY.el9.x86_64.rpm pigsty 1.0.4 27.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/acl_16-1.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 acl_16 acl_16-1.0.4-1PIGSTY.el9.aarch64.rpm pigsty 1.0.4 27.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/acl_16-1.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 acl_16 acl_16-1.0.4-1PIGSTY.el10.x86_64.rpm pigsty 1.0.4 27.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/acl_16-1.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 acl_16 acl_16-1.0.4-1PIGSTY.el10.aarch64.rpm pigsty 1.0.4 27.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/acl_16-1.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-acl postgresql-16-acl_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 45.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-16-acl_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-acl postgresql-16-acl_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 44.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-16-acl_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-acl postgresql-16-acl_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 45.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-16-acl_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-acl postgresql-16-acl_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 44.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-16-acl_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-acl postgresql-16-acl_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 50.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-16-acl_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-acl postgresql-16-acl_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 50.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-16-acl_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-acl postgresql-16-acl_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 47.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-16-acl_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-acl postgresql-16-acl_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 46.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-16-acl_1.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 acl_15 acl_15-1.0.4-1PIGSTY.el8.x86_64.rpm pigsty 1.0.4 28.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/acl_15-1.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 acl_15 acl_15-1.0.4-1PIGSTY.el8.aarch64.rpm pigsty 1.0.4 27.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/acl_15-1.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 acl_15 acl_15-1.0.4-1PIGSTY.el9.x86_64.rpm pigsty 1.0.4 27.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/acl_15-1.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 acl_15 acl_15-1.0.4-1PIGSTY.el9.aarch64.rpm pigsty 1.0.4 27.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/acl_15-1.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 acl_15 acl_15-1.0.4-1PIGSTY.el10.x86_64.rpm pigsty 1.0.4 27.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/acl_15-1.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 acl_15 acl_15-1.0.4-1PIGSTY.el10.aarch64.rpm pigsty 1.0.4 27.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/acl_15-1.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-acl postgresql-15-acl_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 45.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-15-acl_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-acl postgresql-15-acl_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 44.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-15-acl_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-acl postgresql-15-acl_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 45.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-15-acl_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-acl postgresql-15-acl_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 44.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-15-acl_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-acl postgresql-15-acl_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 50.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-15-acl_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-acl postgresql-15-acl_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 49.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-15-acl_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-acl postgresql-15-acl_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 46.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-15-acl_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-acl postgresql-15-acl_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 46.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-15-acl_1.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 acl_14 acl_14-1.0.4-1PIGSTY.el8.x86_64.rpm pigsty 1.0.4 28.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/acl_14-1.0.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 acl_14 acl_14-1.0.4-1PIGSTY.el8.aarch64.rpm pigsty 1.0.4 27.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/acl_14-1.0.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 acl_14 acl_14-1.0.4-1PIGSTY.el9.x86_64.rpm pigsty 1.0.4 27.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/acl_14-1.0.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 acl_14 acl_14-1.0.4-1PIGSTY.el9.aarch64.rpm pigsty 1.0.4 27.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/acl_14-1.0.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 acl_14 acl_14-1.0.4-1PIGSTY.el10.x86_64.rpm pigsty 1.0.4 27.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/acl_14-1.0.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 acl_14 acl_14-1.0.4-1PIGSTY.el10.aarch64.rpm pigsty 1.0.4 27.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/acl_14-1.0.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-acl postgresql-14-acl_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 45.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-14-acl_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-acl postgresql-14-acl_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 44.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/a/acl/postgresql-14-acl_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-acl postgresql-14-acl_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 45.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-14-acl_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-acl postgresql-14-acl_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 44.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/a/acl/postgresql-14-acl_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-acl postgresql-14-acl_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 50.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-14-acl_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-acl postgresql-14-acl_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 49.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/a/acl/postgresql-14-acl_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-acl postgresql-14-acl_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 46.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-14-acl_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-acl postgresql-14-acl_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 46.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/a/acl/postgresql-14-acl_1.0.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_acl` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_acl         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_acl` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_acl;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_acl -v 18  # PG 18
pig ext install -y pg_acl -v 17  # PG 17
pig ext install -y pg_acl -v 16  # PG 16
pig ext install -y pg_acl -v 15  # PG 15
pig ext install -y pg_acl -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y acl_18       # PG 18
dnf install -y acl_17       # PG 17
dnf install -y acl_16       # PG 16
dnf install -y acl_15       # PG 15
dnf install -y acl_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-acl   # PG 18
apt install -y postgresql-17-acl   # PG 17
apt install -y postgresql-16-acl   # PG 16
apt install -y postgresql-15-acl   # PG 15
apt install -y postgresql-14-acl   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION acl;
```

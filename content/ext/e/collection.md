---
title: "collection"
linkTitle: "collection"
description: "在PlPGSQL中使用的内存优化高性能集合数据结构"
weight: 3630
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/aws/pgcollection">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">aws/pgcollection</div>
    <div class="ext-card__desc">https://github.com/aws/pgcollection</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgcollection-1.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgcollection-1.1.1.tar.gz</div>
    <div class="ext-card__desc">pgcollection-1.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgcollection`**](/ext/e/collection) | `1.1.1` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3630  | [**`collection`**](/ext/e/collection) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pgcollection` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pgcollection_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-collection` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
@ el8.x86_64 18 pgcollection_18 pgcollection_18-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 43.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcollection_18-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgcollection_18 pgcollection_18-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 42.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcollection_18-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgcollection_18 pgcollection_18-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 42.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcollection_18-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgcollection_18 pgcollection_18-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcollection_18-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgcollection_18 pgcollection_18-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 43.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcollection_18-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgcollection_18 pgcollection_18-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 41.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcollection_18-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-collection postgresql-18-collection_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 84.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-18-collection_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-collection postgresql-18-collection_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 82.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-18-collection_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-collection postgresql-18-collection_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 84.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-18-collection_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-collection postgresql-18-collection_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 82.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-18-collection_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-collection postgresql-18-collection_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 94.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-18-collection_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-collection postgresql-18-collection_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 93.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-18-collection_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-collection postgresql-18-collection_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 89.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-18-collection_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-collection postgresql-18-collection_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 87.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-18-collection_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgcollection_17 pgcollection_17-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 43.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcollection_17-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgcollection_17 pgcollection_17-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 42.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcollection_17-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgcollection_17 pgcollection_17-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 42.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcollection_17-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgcollection_17 pgcollection_17-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcollection_17-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgcollection_17 pgcollection_17-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 43.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcollection_17-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgcollection_17 pgcollection_17-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 41.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcollection_17-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-collection postgresql-17-collection_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 84.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-17-collection_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-collection postgresql-17-collection_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 82.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-17-collection_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-collection postgresql-17-collection_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 84.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-17-collection_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-collection postgresql-17-collection_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 82.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-17-collection_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-collection postgresql-17-collection_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 104.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-17-collection_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-collection postgresql-17-collection_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 103.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-17-collection_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-collection postgresql-17-collection_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 89.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-17-collection_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-collection postgresql-17-collection_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 88.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-17-collection_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgcollection_16 pgcollection_16-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 42.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcollection_16-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgcollection_16 pgcollection_16-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 42.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcollection_16-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgcollection_16 pgcollection_16-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 42.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcollection_16-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgcollection_16 pgcollection_16-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 41.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcollection_16-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgcollection_16 pgcollection_16-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 43.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcollection_16-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgcollection_16 pgcollection_16-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 41.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcollection_16-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-collection postgresql-16-collection_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 82.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-16-collection_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-collection postgresql-16-collection_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 81.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-16-collection_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-collection postgresql-16-collection_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 83.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-16-collection_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-collection postgresql-16-collection_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 81.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-16-collection_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-collection postgresql-16-collection_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 102.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-16-collection_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-collection postgresql-16-collection_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 101.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-16-collection_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-collection postgresql-16-collection_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 87.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-16-collection_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-collection postgresql-16-collection_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 86.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-16-collection_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgcollection_15 pgcollection_15-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 43.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcollection_15-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgcollection_15 pgcollection_15-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 42.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcollection_15-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgcollection_15 pgcollection_15-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 42.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcollection_15-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgcollection_15 pgcollection_15-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcollection_15-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgcollection_15 pgcollection_15-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 43.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcollection_15-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgcollection_15 pgcollection_15-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 41.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcollection_15-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-collection postgresql-15-collection_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 83.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-15-collection_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-collection postgresql-15-collection_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 81.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-15-collection_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-collection postgresql-15-collection_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 83.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-15-collection_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-collection postgresql-15-collection_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 81.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-15-collection_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-collection postgresql-15-collection_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 102.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-15-collection_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-collection postgresql-15-collection_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 102.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-15-collection_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-collection postgresql-15-collection_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 87.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-15-collection_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-collection postgresql-15-collection_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 87.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-15-collection_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgcollection_14 pgcollection_14-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 43.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgcollection_14-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgcollection_14 pgcollection_14-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 42.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgcollection_14-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgcollection_14 pgcollection_14-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 42.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgcollection_14-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgcollection_14 pgcollection_14-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgcollection_14-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgcollection_14 pgcollection_14-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 43.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgcollection_14-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgcollection_14 pgcollection_14-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 41.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgcollection_14-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-collection postgresql-14-collection_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 83.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-14-collection_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-collection postgresql-14-collection_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 81.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/collection/postgresql-14-collection_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-collection postgresql-14-collection_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 83.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-14-collection_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-collection postgresql-14-collection_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/collection/postgresql-14-collection_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-collection postgresql-14-collection_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 102.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-14-collection_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-collection postgresql-14-collection_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 101.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/collection/postgresql-14-collection_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-collection postgresql-14-collection_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 87.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-14-collection_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-collection postgresql-14-collection_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 87.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/collection/postgresql-14-collection_1.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgcollection` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgcollection         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgcollection` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgcollection;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgcollection -v 18  # PG 18
pig ext install -y pgcollection -v 17  # PG 17
pig ext install -y pgcollection -v 16  # PG 16
pig ext install -y pgcollection -v 15  # PG 15
pig ext install -y pgcollection -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgcollection_18       # PG 18
dnf install -y pgcollection_17       # PG 17
dnf install -y pgcollection_16       # PG 16
dnf install -y pgcollection_15       # PG 15
dnf install -y pgcollection_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-collection   # PG 18
apt install -y postgresql-17-collection   # PG 17
apt install -y postgresql-16-collection   # PG 16
apt install -y postgresql-15-collection   # PG 15
apt install -y postgresql-14-collection   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION collection;
```



## 用法

> [collection: 用于 PL/pgSQL 的键值集合数据类型](https://github.com/aws/pgcollection)

`collection` 扩展提供了两种内存优化的集合数据类型，用于 PL/pgSQL 函数中。

```sql
CREATE EXTENSION collection;
```

### 数据类型

- **`collection`**：文本键的键值对（最长 32,767 字符），按创建顺序存储
- **`icollection`**：64 位整数键的键值对，支持稀疏数组

两种类型都支持类型修饰符来指定元素类型：

```sql
DECLARE
    c1  collection('date');
    ic1 icollection('int4');
```

### 下标访问

```sql
DO $$
DECLARE t_capital collection;
BEGIN
    t_capital['USA'] := 'Washington, D.C.';
    t_capital['Japan'] := 'Tokyo';
    RAISE NOTICE '%', t_capital['USA'];  -- Washington, D.C.
END $$;
```

### 核心函数

| 函数 | 说明 |
|----------|-------------|
| `add(coll, key, value)` | 添加元素 |
| `count(coll)` | 元素数量 |
| `delete(coll, key)` | 删除元素 |
| `exist(coll, key)` | 检查键是否存在 |
| `find(coll, key)` | 获取值 |
| `first(coll)` | 将迭代器移至起始位置 |
| `last(coll)` | 将迭代器移至末尾位置 |
| `next(coll)` | 迭代器前进 |
| `prev(coll)` | 迭代器后退 |
| `key(coll)` | 当前键 |
| `value(coll)` | 当前值 |
| `copy(coll)` | 创建副本 |
| `sort(coll)` | 按键排序 |
| `keys_to_table(coll)` | 所有键作为集合返回 |
| `values_to_table(coll)` | 所有值作为集合返回 |
| `to_table(coll)` | 键值对作为表返回 |

### 迭代器示例

```sql
DO $$
DECLARE t_capital collection;
BEGIN
    t_capital['USA'] := 'Washington, D.C.';
    t_capital['United Kingdom'] := 'London';
    t_capital['Japan'] := 'Tokyo';

    t_capital := first(t_capital);
    WHILE NOT isnull(t_capital) LOOP
        RAISE NOTICE 'Capital of % is %', key(t_capital), value(t_capital);
        t_capital := next(t_capital);
    END LOOP;
END $$;
```

### 稀疏数组（icollection）

`icollection` 支持非连续整数索引，并能区分 NULL 值和未初始化的键：

```sql
DECLARE sparse icollection;
BEGIN
    sparse[1] := 'first';
    sparse[1000000] := 'millionth';  -- 间隙不会浪费内存
END;
```

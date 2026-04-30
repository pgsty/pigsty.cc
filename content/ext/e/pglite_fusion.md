---
title: "pglite_fusion"
linkTitle: "pglite_fusion"
description: "在PG表中嵌入SQLite数据库作为数据类型"
weight: 3590
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/frectonz/pglite-fusion">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">frectonz/pglite-fusion</div>
    <div class="ext-card__desc">https://github.com/frectonz/pglite-fusion</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pglite-fusion-0.0.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pglite-fusion-0.0.6.tar.gz</div>
    <div class="ext-card__desc">pglite-fusion-0.0.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pglite_fusion`**](/ext/e/pglite_fusion) | `0.0.6` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3590  | [**`pglite_fusion`**](/ext/e/pglite_fusion) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`duckdb_fdw`](/ext/e/duckdb_fdw) [`sqlite_fdw`](/ext/e/sqlite_fdw) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.6` | {{< pgvers "18,17,16,15,14" >}} | `pglite_fusion` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.6` | {{< pgvers "18,17,16,15,14" >}} | `pglite_fusion_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pglite-fusion` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pglite_fusion_18 pglite_fusion_18-0.0.6-2PIGSTY.el8.x86_64.rpm pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglite_fusion_18-0.0.6-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pglite_fusion_18 pglite_fusion_18-0.0.6-2PIGSTY.el8.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglite_fusion_18-0.0.6-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pglite_fusion_18 pglite_fusion_18-0.0.6-2PIGSTY.el9.x86_64.rpm pigsty 0.0.6 1.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglite_fusion_18-0.0.6-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pglite_fusion_18 pglite_fusion_18-0.0.6-2PIGSTY.el9.aarch64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglite_fusion_18-0.0.6-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pglite_fusion_18 pglite_fusion_18-0.0.6-2PIGSTY.el10.x86_64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglite_fusion_18-0.0.6-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pglite_fusion_18 pglite_fusion_18-0.0.6-2PIGSTY.el10.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglite_fusion_18-0.0.6-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pglite-fusion postgresql-18-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-18-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pglite-fusion postgresql-18-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb pigsty 0.0.6 951.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-18-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pglite-fusion postgresql-18-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-18-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pglite-fusion postgresql-18-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb pigsty 0.0.6 974.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-18-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pglite-fusion postgresql-18-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-18-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pglite-fusion postgresql-18-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-18-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pglite-fusion postgresql-18-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-18-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pglite-fusion postgresql-18-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-18-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pglite_fusion_17 pglite_fusion_17-0.0.6-2PIGSTY.el8.x86_64.rpm pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglite_fusion_17-0.0.6-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pglite_fusion_17 pglite_fusion_17-0.0.6-2PIGSTY.el8.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglite_fusion_17-0.0.6-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pglite_fusion_17 pglite_fusion_17-0.0.6-2PIGSTY.el9.x86_64.rpm pigsty 0.0.6 1.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglite_fusion_17-0.0.6-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pglite_fusion_17 pglite_fusion_17-0.0.6-2PIGSTY.el9.aarch64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglite_fusion_17-0.0.6-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pglite_fusion_17 pglite_fusion_17-0.0.6-2PIGSTY.el10.x86_64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglite_fusion_17-0.0.6-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pglite_fusion_17 pglite_fusion_17-0.0.6-2PIGSTY.el10.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglite_fusion_17-0.0.6-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pglite-fusion postgresql-17-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-17-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pglite-fusion postgresql-17-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb pigsty 0.0.6 951.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-17-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pglite-fusion postgresql-17-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-17-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pglite-fusion postgresql-17-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb pigsty 0.0.6 974.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-17-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pglite-fusion postgresql-17-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-17-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pglite-fusion postgresql-17-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-17-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pglite-fusion postgresql-17-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-17-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pglite-fusion postgresql-17-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-17-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pglite_fusion_16 pglite_fusion_16-0.0.6-2PIGSTY.el8.x86_64.rpm pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglite_fusion_16-0.0.6-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pglite_fusion_16 pglite_fusion_16-0.0.6-2PIGSTY.el8.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglite_fusion_16-0.0.6-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pglite_fusion_16 pglite_fusion_16-0.0.6-2PIGSTY.el9.x86_64.rpm pigsty 0.0.6 1.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglite_fusion_16-0.0.6-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pglite_fusion_16 pglite_fusion_16-0.0.6-2PIGSTY.el9.aarch64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglite_fusion_16-0.0.6-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pglite_fusion_16 pglite_fusion_16-0.0.6-2PIGSTY.el10.x86_64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglite_fusion_16-0.0.6-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pglite_fusion_16 pglite_fusion_16-0.0.6-2PIGSTY.el10.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglite_fusion_16-0.0.6-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pglite-fusion postgresql-16-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-16-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pglite-fusion postgresql-16-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb pigsty 0.0.6 951.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-16-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pglite-fusion postgresql-16-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-16-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pglite-fusion postgresql-16-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb pigsty 0.0.6 974.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-16-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pglite-fusion postgresql-16-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-16-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pglite-fusion postgresql-16-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-16-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pglite-fusion postgresql-16-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-16-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pglite-fusion postgresql-16-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-16-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pglite_fusion_15 pglite_fusion_15-0.0.6-2PIGSTY.el8.x86_64.rpm pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglite_fusion_15-0.0.6-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pglite_fusion_15 pglite_fusion_15-0.0.6-2PIGSTY.el8.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglite_fusion_15-0.0.6-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pglite_fusion_15 pglite_fusion_15-0.0.6-2PIGSTY.el9.x86_64.rpm pigsty 0.0.6 1.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglite_fusion_15-0.0.6-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pglite_fusion_15 pglite_fusion_15-0.0.6-2PIGSTY.el9.aarch64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglite_fusion_15-0.0.6-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pglite_fusion_15 pglite_fusion_15-0.0.6-2PIGSTY.el10.x86_64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglite_fusion_15-0.0.6-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pglite_fusion_15 pglite_fusion_15-0.0.6-2PIGSTY.el10.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglite_fusion_15-0.0.6-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pglite-fusion postgresql-15-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-15-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pglite-fusion postgresql-15-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb pigsty 0.0.6 951.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-15-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pglite-fusion postgresql-15-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-15-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pglite-fusion postgresql-15-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb pigsty 0.0.6 974.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-15-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pglite-fusion postgresql-15-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-15-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pglite-fusion postgresql-15-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-15-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pglite-fusion postgresql-15-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-15-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pglite-fusion postgresql-15-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-15-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pglite_fusion_14 pglite_fusion_14-0.0.6-2PIGSTY.el8.x86_64.rpm pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglite_fusion_14-0.0.6-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pglite_fusion_14 pglite_fusion_14-0.0.6-2PIGSTY.el8.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglite_fusion_14-0.0.6-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pglite_fusion_14 pglite_fusion_14-0.0.6-2PIGSTY.el9.x86_64.rpm pigsty 0.0.6 1.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglite_fusion_14-0.0.6-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pglite_fusion_14 pglite_fusion_14-0.0.6-2PIGSTY.el9.aarch64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglite_fusion_14-0.0.6-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pglite_fusion_14 pglite_fusion_14-0.0.6-2PIGSTY.el10.x86_64.rpm pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglite_fusion_14-0.0.6-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pglite_fusion_14 pglite_fusion_14-0.0.6-2PIGSTY.el10.aarch64.rpm pigsty 0.0.6 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglite_fusion_14-0.0.6-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pglite-fusion postgresql-14-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-14-pglite-fusion_0.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pglite-fusion postgresql-14-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb pigsty 0.0.6 951.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglite-fusion/postgresql-14-pglite-fusion_0.0.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pglite-fusion postgresql-14-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-14-pglite-fusion_0.0.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pglite-fusion postgresql-14-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb pigsty 0.0.6 974.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglite-fusion/postgresql-14-pglite-fusion_0.0.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pglite-fusion postgresql-14-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-14-pglite-fusion_0.0.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pglite-fusion postgresql-14-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglite-fusion/postgresql-14-pglite-fusion_0.0.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pglite-fusion postgresql-14-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb pigsty 0.0.6 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-14-pglite-fusion_0.0.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pglite-fusion postgresql-14-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb pigsty 0.0.6 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglite-fusion/postgresql-14-pglite-fusion_0.0.6-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pglite_fusion` 扩展的 RPM / DEB 包：

```bash
pig build pkg pglite_fusion         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pglite_fusion` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pglite_fusion;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pglite_fusion -v 18  # PG 18
pig ext install -y pglite_fusion -v 17  # PG 17
pig ext install -y pglite_fusion -v 16  # PG 16
pig ext install -y pglite_fusion -v 15  # PG 15
pig ext install -y pglite_fusion -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pglite_fusion_18       # PG 18
dnf install -y pglite_fusion_17       # PG 17
dnf install -y pglite_fusion_16       # PG 16
dnf install -y pglite_fusion_15       # PG 15
dnf install -y pglite_fusion_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pglite-fusion   # PG 18
apt install -y postgresql-17-pglite-fusion   # PG 17
apt install -y postgresql-16-pglite-fusion   # PG 16
apt install -y postgresql-15-pglite-fusion   # PG 15
apt install -y postgresql-14-pglite-fusion   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pglite_fusion';
```


**创建扩展**：

```sql
CREATE EXTENSION pglite_fusion;
```



## 用法

> https://github.com/frectonz/pglite-fusion/blob/main/README.md


以下是一些使用示例。

```sql
-- 加载 PG 扩展
CREATE EXTENSION pglite_fusion;

-- 创建一个包含 SQLite 列的表
CREATE TABLE people (
                        name     TEXT NOT NULL,
                        database SQLITE DEFAULT init_sqlite('CREATE TABLE todos (task TEXT)')
);

-- 向 people 表中插入一行数据
INSERT INTO people VALUES ('frectonz');

-- 为 "frectonz" 创建一条待办事项
UPDATE people
SET database = execute_sqlite(
        database,
        'INSERT INTO todos VALUES (''solve multitenancy'')'
               )
WHERE name = 'frectonz';

-- 为 "frectonz" 创建一条待办事项
UPDATE people
SET database = execute_sqlite(
        database,
        'INSERT INTO todos VALUES (''buy milk'')'
               )
WHERE name = 'frectonz';

-- 查询 frectonz 的信息
SELECT
    name,
    (
        SELECT json_agg(get_sqlite_text(sqlite_row, 0))
        FROM query_sqlite(
                database,
                'SELECT * FROM todos'
             )
    ) AS todos
FROM
    people
WHERE
    name = 'frectonz';
```


--------

## API 文档


### `empty_sqlite`

创建一个空的 SQLite 数据库，并将其作为二进制对象返回。可用于在 PostgreSQL 列中初始化一个空的 SQLite 数据库。

#### 使用示例：

```sql
SELECT empty_sqlite();
```

-----

### `query_sqlite`

对存储为二进制对象的 SQLite 数据库执行 SQL 查询，并将结果以 JSON 编码的行集合形式返回。该函数适用于查询存储在 PostgreSQL 列中的 SQLite 数据库。

#### 参数：

- `sqlite`：要查询的 SQLite 数据库，以二进制对象形式存储。
- `query`：要在 SQLite 数据库上执行的 SQL 查询字符串。

#### 使用示例：

```sql
SELECT * FROM query_sqlite(
        database,
        'SELECT * FROM todos'
              );
```

-----

### `execute_sqlite`

对存储为二进制对象的 SQLite 数据库执行 SQL 语句（如 `INSERT`、`UPDATE` 或 `DELETE`）。更新后的 SQLite 数据库将作为二进制对象返回，以便后续继续操作。

#### 参数：

- `sqlite`：要执行 SQL 语句的 SQLite 数据库，以二进制对象形式存储。
- `query`：要在 SQLite 数据库上执行的 SQL 语句。

##### 使用示例：

```sql
UPDATE people
SET database = execute_sqlite(
        database,
        'INSERT INTO todos VALUES (''solve multitenancy'')'
               )
WHERE name = 'frectonz';
```

-----

### `init_sqlite`

创建一个 SQLite 数据库，并在其上执行指定的初始化查询。可用于初始化一个已包含所需表结构的 SQLite 数据库。

#### 参数：

- `query`：要在 SQLite 数据库上执行的 SQL 语句。

##### 使用示例：

```sql

CREATE TABLE people (
                        name     TEXT NOT NULL,
                        database SQLITE DEFAULT init_sqlite('CREATE TABLE todos (task TEXT)')
);
```

-----

### `get_sqlite_text`
从 `query_sqlite` 返回的行中提取指定列的文本值。使用此函数可从查询结果中获取文本类型的值。

#### 参数：

- `sqlite_row`：`query_sqlite` 返回的结果行。
- `index`：要从行中提取的列索引。

#### 使用示例：

```sql
SELECT get_sqlite_text(sqlite_row, 0)
FROM query_sqlite(database, 'SELECT * FROM todos');
```

----

### `get_sqlite_integer`

从 `query_sqlite` 返回的行中提取指定列的整数值。使用此函数可从查询结果中获取整数类型的值。

#### 参数：

- `sqlite_row`：`query_sqlite` 返回的结果行。
- `index`：要从行中提取的列索引。

#### 使用示例：

```sql
SELECT get_sqlite_integer(sqlite_row, 1)
FROM query_sqlite(database, 'SELECT * FROM todos');
```

----

### `get_sqlite_real`

从 `query_sqlite` 返回的行中提取指定列的实数（浮点数）值。使用此函数可从查询结果中获取实数类型的值。

#### 参数：

- `sqlite_row`：`query_sqlite` 返回的结果行。
- `index`：要从行中提取的列索引。

#### 使用示例：

```sql
SELECT get_sqlite_real(sqlite_row, 2)
FROM query_sqlite(database, 'SELECT * FROM todos');
```
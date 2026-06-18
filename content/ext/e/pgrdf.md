---
title: "pgrdf"
linkTitle: "pgrdf"
description: "PostgreSQL 内 RDF、SPARQL、SHACL 与 OWL 推理扩展"
weight: 2640
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/styk-tv/pgRDF">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">styk-tv/pgRDF</div>
    <div class="ext-card__desc">https://github.com/styk-tv/pgRDF</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgrdf-0.6.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgrdf-0.6.4.tar.gz</div>
    <div class="ext-card__desc">pgrdf-0.6.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgrdf`**](/ext/e/pgrdf) | `0.6.4` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2640  | [**`pgrdf`**](/ext/e/pgrdf) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgrdf` |
{.ext-table}

| **相关扩展** | [`rdf_fdw`](/ext/e/rdf_fdw) [`pg_sparql`](/ext/e/pg_sparql) [`rdkit`](/ext/e/rdkit) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG14-17 only; production hook/cache deployments should preload pgrdf; pgrx patched to 0.18.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.4` | {{< pgvers "14,15,16,17" >}} | `pgrdf` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.4` | {{< pgvers "14,15,16,17" >}} | `pgrdf_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.4` | {{< pgvers "14,15,16,17" >}} | `postgresql-$v-pgrdf` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el8.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el9.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el9.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el10.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| el10.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| d13.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| d13.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| u26.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
| u26.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 | AVAIL PIGSTY 0.6.4 1 |
@ el8.x86_64 17 pgrdf_17 pgrdf_17-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 7.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_17-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgrdf_17 pgrdf_17-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_17-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgrdf_17 pgrdf_17-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_17-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgrdf_17 pgrdf_17-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_17-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgrdf_17 pgrdf_17-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 7.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_17-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgrdf_17 pgrdf_17-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_17-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~bookworm_amd64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~bookworm_arm64.deb pigsty 0.6.4 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~trixie_amd64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~trixie_arm64.deb pigsty 0.6.4 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~jammy_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~jammy_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~noble_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~noble_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~resolute_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.4-1PIGSTY~resolute_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgrdf_16 pgrdf_16-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 7.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_16-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgrdf_16 pgrdf_16-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_16-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgrdf_16 pgrdf_16-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_16-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgrdf_16 pgrdf_16-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_16-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgrdf_16 pgrdf_16-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 7.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_16-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgrdf_16 pgrdf_16-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_16-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~bookworm_amd64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~bookworm_arm64.deb pigsty 0.6.4 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~trixie_amd64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~trixie_arm64.deb pigsty 0.6.4 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~jammy_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~jammy_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~noble_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~noble_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~resolute_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.4-1PIGSTY~resolute_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgrdf_15 pgrdf_15-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 7.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_15-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgrdf_15 pgrdf_15-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 6.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_15-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgrdf_15 pgrdf_15-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_15-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgrdf_15 pgrdf_15-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 7.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_15-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgrdf_15 pgrdf_15-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 7.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_15-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgrdf_15 pgrdf_15-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_15-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~bookworm_amd64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~bookworm_arm64.deb pigsty 0.6.4 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~trixie_amd64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~trixie_arm64.deb pigsty 0.6.4 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~jammy_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~jammy_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~noble_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~noble_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~resolute_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.4-1PIGSTY~resolute_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgrdf_14 pgrdf_14-0.6.4-1PIGSTY.el8.x86_64.rpm pigsty 0.6.4 7.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_14-0.6.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgrdf_14 pgrdf_14-0.6.4-1PIGSTY.el8.aarch64.rpm pigsty 0.6.4 6.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_14-0.6.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgrdf_14 pgrdf_14-0.6.4-1PIGSTY.el9.x86_64.rpm pigsty 0.6.4 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_14-0.6.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgrdf_14 pgrdf_14-0.6.4-1PIGSTY.el9.aarch64.rpm pigsty 0.6.4 6.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_14-0.6.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgrdf_14 pgrdf_14-0.6.4-1PIGSTY.el10.x86_64.rpm pigsty 0.6.4 7.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_14-0.6.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgrdf_14 pgrdf_14-0.6.4-1PIGSTY.el10.aarch64.rpm pigsty 0.6.4 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_14-0.6.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~bookworm_amd64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~bookworm_arm64.deb pigsty 0.6.4 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~trixie_amd64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~trixie_arm64.deb pigsty 0.6.4 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~jammy_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~jammy_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~noble_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~noble_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~resolute_amd64.deb pigsty 0.6.4 6.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.4-1PIGSTY~resolute_arm64.deb pigsty 0.6.4 6.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.4-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgrdf` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgrdf         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgrdf` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgrdf;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgrdf -v 17  # PG 17
pig ext install -y pgrdf -v 16  # PG 16
pig ext install -y pgrdf -v 15  # PG 15
pig ext install -y pgrdf -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgrdf_17       # PG 17
dnf install -y pgrdf_16       # PG 16
dnf install -y pgrdf_15       # PG 15
dnf install -y pgrdf_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-pgrdf   # PG 17
apt install -y postgresql-16-pgrdf   # PG 16
apt install -y postgresql-15-pgrdf   # PG 15
apt install -y postgresql-14-pgrdf   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgrdf';
```


**创建扩展**：

```sql
CREATE EXTENSION pgrdf;
```


## 用法

> 来源：[pgRDF upstream README](https://github.com/styk-tv/pgRDF)、[pgRDF user guide](https://github.com/styk-tv/pgRDF/tree/main/guide)、[local metadata](../db/extension.csv)。

`pgRDF` 在 PostgreSQL 内存储 RDF 数据，并提供可从 SQL 调用的辅助函数，用于加载 Turtle/TriG/N-Quads、执行 SPARQL 查询与更新、管理命名图、做 SHACL 校验，以及执行 RDFS/OWL 2 RL 物化推理。

```sql
CREATE EXTENSION pgrdf;
SELECT pgrdf.version();
```

### 预加载与 PostgreSQL 版本注意事项

本地 Pigsty 元数据只为 PostgreSQL 14、15、16 和 17 打包 `pgrdf`。上游文档也说明支持 PostgreSQL 14-17；由于仍固定在 `pgrx` 0.16，PostgreSQL 18 支持暂缓。

`pgrdf` 必须在 PostgreSQL 启动前加入 `shared_preload_libraries`。如果没有预加载，上游文档说明共享内存字典和计划缓存原子量不会初始化，第一次调用 pgRDF 时可能失败。

```conf
shared_preload_libraries = 'pgrdf'
```

修改该设置后重启 PostgreSQL，然后验证：

```sql
SHOW shared_preload_libraries;

SELECT pgrdf.parse_turtle(
  '@prefix ex: <http://example.org/> . ex:t a ex:T .',
  1::bigint,
  'http://example.org/'
);
```

### 加载 RDF

内联 Turtle 载荷使用 `parse_turtle`，服务器端文件使用 `load_turtle`。图 ID 是 `bigint` 值；命名图辅助函数负责在 ID 和 IRI 之间建立映射。

```sql
SELECT pgrdf.add_graph(100::bigint, 'http://example.org/graph/main');

SELECT pgrdf.parse_turtle(
  '@prefix ex: <http://example.org/> .
   ex:alice ex:knows ex:bob .
   ex:alice ex:name "Alice" .',
  100::bigint,
  'http://example.org/graph/main'
);

SELECT pgrdf.load_turtle('/srv/rdf/foaf.ttl', 100::bigint);
SELECT pgrdf.count_quads(100::bigint);
```

上游文档列出的相关导入和图管理函数包括 `parse_trig`、`parse_nquads`、`add_graph`、`drop`、`clear`、`copy`、`move_graph`、`graph_id` 和 `graph_iri`。

### 使用 SPARQL 查询

`pgrdf.sparql(text)` 将 SPARQL 结果作为 SQL 行返回。上游 v0.5 接口包含 `SELECT` 和 `ASK`、过滤、排序、限制、`OPTIONAL`、`UNION`、`MINUS`、聚合、`VALUES`、`BIND`、`CONSTRUCT`、`DESCRIBE`、命名图 `GRAPH` 子句以及属性路径。

```sql
SELECT *
FROM pgrdf.sparql(
  'PREFIX ex: <http://example.org/>
   SELECT ?person ?name
   WHERE {
     ?person ex:name ?name .
     FILTER(REGEX(?name, "^A", "i"))
   }
   ORDER BY ?name
   LIMIT 20'
);
```

命名图查询可以绑定图 IRI：

```sql
SELECT *
FROM pgrdf.sparql(
  'PREFIX ex: <http://example.org/>
   SELECT ?g (COUNT(*) AS ?n)
   WHERE { GRAPH ?g { ?s ex:name ?name } }
   GROUP BY ?g
   ORDER BY ?g'
);
```

### 更新图

上游 v0.5 接口包含 `INSERT DATA`、`DELETE DATA`、`INSERT/DELETE WHERE`、`DELETE+INSERT WHERE` 等 SPARQL Update 形式，以及图生命周期语句。

```sql
SELECT pgrdf.sparql(
  'PREFIX ex: <http://example.org/>
   INSERT DATA {
     GRAPH <http://example.org/graph/main> {
       ex:bob ex:name "Bob" .
     }
   }'
);
```

### 推理与校验

使用 `pgrdf.materialize(graph_id, profile)` 为 `rdfs` 或 `owl-rl` profile 写入推导出的三元组。物化操作设计为可重复执行；上游文档说明，在写入新的闭包前会先删除之前的推导行。

```sql
SELECT pgrdf.parse_turtle(
  '@prefix ex:   <http://example.com/> .
   @prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
   @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
   ex:Engineer rdfs:subClassOf ex:Person .
   ex:Person   rdfs:subClassOf ex:Agent .
   ex:alice    rdf:type        ex:Engineer .',
  100::bigint
);

SELECT pgrdf.materialize(100::bigint, 'owl-rl');

SELECT *
FROM pgrdf.sparql(
  'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX ex:  <http://example.com/>
   SELECT ?class WHERE { ex:alice rdf:type ?class }'
);
```

使用 `pgrdf.validate(data, shapes, mode)` 做 SHACL 校验；上游文档说明其输出为 JSONB `sh:ValidationReport`，并原生支持 SHACL Core。上游还说明 SHACL-SPARQL 约束执行受其 RDF 库依赖控制，因此应将 `mode => 'sparql'` 视为高级接口，并以实际安装版本验证。

### 运维辅助函数

上游文档列出的常用内省和缓存管理函数包括：

| 函数 | 用途 |
|----------|-----|
| `pgrdf.stats()` | 查看运行时计数器和缓存状态 |
| `pgrdf.shmem_reset()` | 重置共享内存字典/缓存状态 |
| `pgrdf.plan_cache_clear()` | 清除预备 SPARQL 计划缓存 |
| `pgrdf.sparql_parse(text)` | 查看解析后的 SPARQL 而不执行 |

`pgrdf.path_max_depth` 设置用于限制属性路径展开深度。

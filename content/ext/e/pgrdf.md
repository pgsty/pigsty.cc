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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgrdf-0.6.39.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgrdf-0.6.39.tar.gz</div>
    <div class="ext-card__desc">pgrdf-0.6.39.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgrdf`**](/ext/e/pgrdf) | `0.6.39` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2640  | [**`pgrdf`**](/ext/e/pgrdf) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgrdf` |
{.ext-table}

| **相关扩展** | [`sparql`](/ext/e/sparql) [`rdf_fdw`](/ext/e/rdf_fdw) [`age`](/ext/e/age) [`pg_liquid`](/ext/e/pg_liquid) [`onesparse`](/ext/e/onesparse) [`graph`](/ext/e/graph) [`ltree`](/ext/e/ltree) [`xml2`](/ext/e/xml2) [`plxslt`](/ext/e/plxslt) [`omni_xml`](/ext/e/omni_xml) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Production hook/cache deployments should preload pgrdf.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.39` | {{< pgvers "18,17,16,15,14" >}} | `pgrdf` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.39` | {{< pgvers "18,17,16,15,14" >}} | `pgrdf_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.39` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgrdf` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| el8.aarch64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| el9.x86_64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| el9.aarch64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| el10.x86_64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| el10.aarch64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| d12.x86_64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| d12.aarch64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| d13.x86_64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| d13.aarch64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| u22.x86_64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| u22.aarch64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| u24.x86_64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| u24.aarch64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| u26.x86_64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
| u26.aarch64 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 | AVAIL PIGSTY 0.6.39 1 |
@ el8.x86_64 18 pgrdf_18 pgrdf_18-0.6.39-1PGSTY.el8.x86_64.rpm pigsty 0.6.39 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_18-0.6.39-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgrdf_18 pgrdf_18-0.6.39-1PGSTY.el8.aarch64.rpm pigsty 0.6.39 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_18-0.6.39-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgrdf_18 pgrdf_18-0.6.39-1PGSTY.el9.x86_64.rpm pigsty 0.6.39 6.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_18-0.6.39-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgrdf_18 pgrdf_18-0.6.39-1PGSTY.el9.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_18-0.6.39-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgrdf_18 pgrdf_18-0.6.39-1PGSTY.el10.x86_64.rpm pigsty 0.6.39 6.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_18-0.6.39-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgrdf_18 pgrdf_18-0.6.39-1PGSTY.el10.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_18-0.6.39-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~noble_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~noble_arm64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgrdf postgresql-18-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb pigsty 0.6.39 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-18-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgrdf_17 pgrdf_17-0.6.39-1PGSTY.el8.x86_64.rpm pigsty 0.6.39 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_17-0.6.39-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgrdf_17 pgrdf_17-0.6.39-1PGSTY.el8.aarch64.rpm pigsty 0.6.39 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_17-0.6.39-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgrdf_17 pgrdf_17-0.6.39-1PGSTY.el9.x86_64.rpm pigsty 0.6.39 6.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_17-0.6.39-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgrdf_17 pgrdf_17-0.6.39-1PGSTY.el9.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_17-0.6.39-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgrdf_17 pgrdf_17-0.6.39-1PGSTY.el10.x86_64.rpm pigsty 0.6.39 6.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_17-0.6.39-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgrdf_17 pgrdf_17-0.6.39-1PGSTY.el10.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_17-0.6.39-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~noble_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~noble_arm64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgrdf postgresql-17-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb pigsty 0.6.39 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-17-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgrdf_16 pgrdf_16-0.6.39-1PGSTY.el8.x86_64.rpm pigsty 0.6.39 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_16-0.6.39-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgrdf_16 pgrdf_16-0.6.39-1PGSTY.el8.aarch64.rpm pigsty 0.6.39 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_16-0.6.39-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgrdf_16 pgrdf_16-0.6.39-1PGSTY.el9.x86_64.rpm pigsty 0.6.39 6.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_16-0.6.39-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgrdf_16 pgrdf_16-0.6.39-1PGSTY.el9.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_16-0.6.39-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgrdf_16 pgrdf_16-0.6.39-1PGSTY.el10.x86_64.rpm pigsty 0.6.39 6.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_16-0.6.39-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgrdf_16 pgrdf_16-0.6.39-1PGSTY.el10.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_16-0.6.39-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~noble_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~noble_arm64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgrdf postgresql-16-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb pigsty 0.6.39 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-16-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgrdf_15 pgrdf_15-0.6.39-1PGSTY.el8.x86_64.rpm pigsty 0.6.39 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_15-0.6.39-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgrdf_15 pgrdf_15-0.6.39-1PGSTY.el8.aarch64.rpm pigsty 0.6.39 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_15-0.6.39-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgrdf_15 pgrdf_15-0.6.39-1PGSTY.el9.x86_64.rpm pigsty 0.6.39 6.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_15-0.6.39-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgrdf_15 pgrdf_15-0.6.39-1PGSTY.el9.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_15-0.6.39-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgrdf_15 pgrdf_15-0.6.39-1PGSTY.el10.x86_64.rpm pigsty 0.6.39 6.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_15-0.6.39-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgrdf_15 pgrdf_15-0.6.39-1PGSTY.el10.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_15-0.6.39-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~noble_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~noble_arm64.deb pigsty 0.6.39 5.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgrdf postgresql-15-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb pigsty 0.6.39 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-15-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgrdf_14 pgrdf_14-0.6.39-1PGSTY.el8.x86_64.rpm pigsty 0.6.39 6.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgrdf_14-0.6.39-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgrdf_14 pgrdf_14-0.6.39-1PGSTY.el8.aarch64.rpm pigsty 0.6.39 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgrdf_14-0.6.39-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgrdf_14 pgrdf_14-0.6.39-1PGSTY.el9.x86_64.rpm pigsty 0.6.39 6.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgrdf_14-0.6.39-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgrdf_14 pgrdf_14-0.6.39-1PGSTY.el9.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgrdf_14-0.6.39-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgrdf_14 pgrdf_14-0.6.39-1PGSTY.el10.x86_64.rpm pigsty 0.6.39 6.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgrdf_14-0.6.39-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgrdf_14 pgrdf_14-0.6.39-1PGSTY.el10.aarch64.rpm pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgrdf_14-0.6.39-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb pigsty 0.6.39 5.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb pigsty 0.6.39 6.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb pigsty 0.6.39 5.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~noble_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~noble_arm64.deb pigsty 0.6.39 5.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb pigsty 0.6.39 6.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgrdf postgresql-14-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb pigsty 0.6.39 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgrdf/postgresql-14-pgrdf_0.6.39-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgrdf;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgrdf -v 18  # PG 18
pig ext install -y pgrdf -v 17  # PG 17
pig ext install -y pgrdf -v 16  # PG 16
pig ext install -y pgrdf -v 15  # PG 15
pig ext install -y pgrdf -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgrdf_18       # PG 18
dnf install -y pgrdf_17       # PG 17
dnf install -y pgrdf_16       # PG 16
dnf install -y pgrdf_15       # PG 15
dnf install -y pgrdf_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgrdf   # PG 18
apt install -y postgresql-17-pgrdf   # PG 17
apt install -y postgresql-16-pgrdf   # PG 16
apt install -y postgresql-15-pgrdf   # PG 15
apt install -y postgresql-14-pgrdf   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'pgrdf';
```


**创建扩展**：

```sql
CREATE EXTENSION pgrdf;
```

## 用法

来源：

- [0.6.39 release](https://github.com/styk-tv/pgRDF/releases/tag/v0.6.39)
- [pgrdf.control](https://github.com/styk-tv/pgRDF/blob/a1dce7bd7c4d1138f713c5b73e9d498aa279612b/pgrdf.control)
- [README.md](https://github.com/styk-tv/pgRDF/blob/a1dce7bd7c4d1138f713c5b73e9d498aa279612b/README.md)
- [Cargo.toml](https://github.com/styk-tv/pgRDF/blob/a1dce7bd7c4d1138f713c5b73e9d498aa279612b/Cargo.toml)
- [guide/01-install.md](https://github.com/styk-tv/pgRDF/blob/a1dce7bd7c4d1138f713c5b73e9d498aa279612b/guide/01-install.md)
- [guide/tour.md](https://github.com/styk-tv/pgRDF/blob/a1dce7bd7c4d1138f713c5b73e9d498aa279612b/guide/tour.md)
- [guide/05-graphs.md](https://github.com/styk-tv/pgRDF/blob/a1dce7bd7c4d1138f713c5b73e9d498aa279612b/guide/05-graphs.md)
- [guide/06-validation-recipes.md](https://github.com/styk-tv/pgRDF/blob/a1dce7bd7c4d1138f713c5b73e9d498aa279612b/guide/06-validation-recipes.md)

`pgrdf` 0.6.39 在 PostgreSQL 内保存 RDF 图，支持 Turtle/TriG/N-Quads 导入、SPARQL 查询与更新、SHACL 校验和 RDFS/OWL 推理。先预加载 `pgrdf` 并重启，再由超级用户创建扩展。

### 核心用法

```ini
shared_preload_libraries = 'pgrdf'
```

```sql
CREATE EXTENSION pgrdf;
SELECT pgrdf.add_graph('http://example.org/people');
SELECT pgrdf.parse_turtle(
  '@prefix ex: <http://example.org/> . ex:alice ex:name "Alice" .',
  pgrdf.graph_id('http://example.org/people'));
SELECT * FROM pgrdf.sparql('SELECT ?s ?p ?o WHERE { ?s ?p ?o } LIMIT 10');
SELECT * FROM pgrdf.surface();
```

### 运行边界

固定的 `pgrdf` 模式提供 `add_graph`、`graph_id`、`parse_turtle`、`load_turtle`、`sparql`、`materialize`、`validate`、`stats` 和 `surface`。文件加载器读取服务端路径，应谨慎授权。`can_clear_graphs()` 报告清空图所需权限；非所有者写图仍需文档规定的底层表权限，并遵循图锁。`shacl_capability()` 显示支持的校验范围，路径深度／截断设置限制遍历。源码构建选项覆盖 PostgreSQL 14–18，已发布的 Linux 二进制面向 PG18。0.6.39 使用不复用的序列分配图 ID，图身份由 IRI 确定，编号间隙属于正常情况。安装匹配的库后，在各数据库执行 `ALTER EXTENSION pgrdf UPDATE`；新库遇到旧 SQL 会以 SQLSTATE 55000 拒绝操作。不要使用无法正常构建的 0.6.35–0.6.38 PGXN 源码归档。备份须共同保留并验证图与字典数据。

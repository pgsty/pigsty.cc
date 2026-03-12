---
title: "sparql"
linkTitle: "sparql"
description: "使用SQL查询SPARQL数据源"
weight: 4470
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/lacanoid/pgsparql">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">lacanoid/pgsparql</div>
    <div class="ext-card__desc">https://github.com/lacanoid/pgsparql</div>
  </a>
  <a class="ext-card ext-card--source" href="pgsparql-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsparql-1.0.tar.gz</div>
    <div class="ext-card__desc">pgsparql-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgsparql`**](/ext/e/sparql) | `1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4470  | [**`sparql`**](/ext/e/sparql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `sparql` |
{.ext-table}

| **相关扩展** | [`plperl`](/ext/e/plperl) [`plperlu`](/ext/e/plperlu) [`pgjq`](/ext/e/pgjq) [`pgjwt`](/ext/e/pgjwt) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgsparql` | `plperl`, `plperlu` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgsparql_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgsparql` | - |
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
@ el8.x86_64 18 pgsparql_18 pgsparql_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsparql_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgsparql_18 pgsparql_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsparql_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgsparql_18 pgsparql_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsparql_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgsparql_18 pgsparql_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsparql_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgsparql_18 pgsparql_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsparql_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgsparql_18 pgsparql_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsparql_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgsparql postgresql-18-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-18-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgsparql postgresql-18-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-18-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgsparql postgresql-18-pgsparql_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-18-pgsparql_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgsparql postgresql-18-pgsparql_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-18-pgsparql_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgsparql postgresql-18-pgsparql_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-18-pgsparql_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgsparql postgresql-18-pgsparql_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-18-pgsparql_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgsparql postgresql-18-pgsparql_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-18-pgsparql_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgsparql postgresql-18-pgsparql_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-18-pgsparql_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgsparql_17 pgsparql_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsparql_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgsparql_17 pgsparql_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsparql_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgsparql_17 pgsparql_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsparql_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgsparql_17 pgsparql_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsparql_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgsparql_17 pgsparql_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsparql_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgsparql_17 pgsparql_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsparql_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgsparql postgresql-17-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-17-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgsparql postgresql-17-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-17-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgsparql postgresql-17-pgsparql_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-17-pgsparql_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgsparql postgresql-17-pgsparql_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-17-pgsparql_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgsparql postgresql-17-pgsparql_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-17-pgsparql_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgsparql postgresql-17-pgsparql_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-17-pgsparql_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgsparql postgresql-17-pgsparql_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-17-pgsparql_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgsparql postgresql-17-pgsparql_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-17-pgsparql_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgsparql_16 pgsparql_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsparql_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgsparql_16 pgsparql_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsparql_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgsparql_16 pgsparql_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsparql_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgsparql_16 pgsparql_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsparql_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgsparql_16 pgsparql_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsparql_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgsparql_16 pgsparql_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsparql_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgsparql postgresql-16-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-16-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgsparql postgresql-16-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-16-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgsparql postgresql-16-pgsparql_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-16-pgsparql_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgsparql postgresql-16-pgsparql_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-16-pgsparql_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgsparql postgresql-16-pgsparql_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-16-pgsparql_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgsparql postgresql-16-pgsparql_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-16-pgsparql_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgsparql postgresql-16-pgsparql_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-16-pgsparql_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgsparql postgresql-16-pgsparql_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-16-pgsparql_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgsparql_15 pgsparql_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsparql_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgsparql_15 pgsparql_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsparql_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgsparql_15 pgsparql_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsparql_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgsparql_15 pgsparql_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsparql_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgsparql_15 pgsparql_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsparql_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgsparql_15 pgsparql_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsparql_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgsparql postgresql-15-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-15-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgsparql postgresql-15-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-15-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgsparql postgresql-15-pgsparql_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-15-pgsparql_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgsparql postgresql-15-pgsparql_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-15-pgsparql_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgsparql postgresql-15-pgsparql_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-15-pgsparql_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgsparql postgresql-15-pgsparql_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-15-pgsparql_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgsparql postgresql-15-pgsparql_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-15-pgsparql_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgsparql postgresql-15-pgsparql_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-15-pgsparql_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgsparql_14 pgsparql_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgsparql_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgsparql_14 pgsparql_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 17.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgsparql_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgsparql_14 pgsparql_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgsparql_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgsparql_14 pgsparql_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgsparql_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgsparql_14 pgsparql_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgsparql_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgsparql_14 pgsparql_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 17.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgsparql_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgsparql postgresql-14-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-14-pgsparql_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgsparql postgresql-14-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsparql/postgresql-14-pgsparql_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgsparql postgresql-14-pgsparql_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-14-pgsparql_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgsparql postgresql-14-pgsparql_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsparql/postgresql-14-pgsparql_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgsparql postgresql-14-pgsparql_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-14-pgsparql_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgsparql postgresql-14-pgsparql_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsparql/postgresql-14-pgsparql_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgsparql postgresql-14-pgsparql_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-14-pgsparql_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgsparql postgresql-14-pgsparql_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 10.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsparql/postgresql-14-pgsparql_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgsparql` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgsparql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgsparql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgsparql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgsparql -v 18  # PG 18
pig ext install -y pgsparql -v 17  # PG 17
pig ext install -y pgsparql -v 16  # PG 16
pig ext install -y pgsparql -v 15  # PG 15
pig ext install -y pgsparql -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgsparql_18       # PG 18
dnf install -y pgsparql_17       # PG 17
dnf install -y pgsparql_16       # PG 16
dnf install -y pgsparql_15       # PG 15
dnf install -y pgsparql_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgsparql   # PG 18
apt install -y postgresql-17-pgsparql   # PG 17
apt install -y postgresql-16-pgsparql   # PG 16
apt install -y postgresql-15-pgsparql   # PG 15
apt install -y postgresql-14-pgsparql   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION sparql CASCADE;  -- 依赖: plperl, plperlu
```



## 用法

> [sparql: PostgreSQL 的 SPARQL 查询支持](https://github.com/lacanoid/pgsparql)

从 PostgreSQL 查询 SPARQL 端点（如 DBpedia/Virtuoso）。SPARQL 查询被编译为 PostgreSQL 视图，可在 SQL 中使用。

### 获取资源的属性

```sql
SELECT * FROM sparql.get_properties('dbpedia', 'http://dbpedia.org/resource/Johann_Sebastian_Bach');
```

### 获取资源的引用

```sql
SELECT * FROM sparql.get_references('dbpedia', 'http://dbpedia.org/resource/Johann_Sebastian_Bach');
```

### 将 SPARQL 查询编译为 SQL 视图

```sql
SELECT sparql.compile_query(endpoint, identifier, sparql_query [, grouping]);
```

参数：
- `endpoint` -- 默认 SPARQL 端点名称
- `identifier` -- 创建的函数和视图的 SQL 标识符
- `sparql_query` -- 要编译的 SPARQL 查询
- `grouping` -- 可选的分组标识符数组（未分组的列会被聚合为数组）

### 示例

```sql
SELECT sparql.compile_query('dbpedia', 'ludwig_van', $$
  SELECT ?predicate, ?object
  WHERE {
    <http://dbpedia.org/resource/Ludwig_van_Beethoven> ?predicate ?object.
  }
$$, '{predicate}');

-- 现在可以通过创建的视图进行查询
SELECT * FROM ludwig_van;
```

这将创建一个函数 `ludwig_van()` 和一个视图 `ludwig_van`，用于查询 SPARQL 端点并以 SQL 表的形式返回结果。

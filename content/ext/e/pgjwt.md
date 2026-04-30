---
title: "pgjwt"
linkTitle: "pgjwt"
description: "JSON Web Token API 的PG实现 (supabase)"
weight: 4160
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/michelp/pgjwt">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">michelp/pgjwt</div>
    <div class="ext-card__desc">https://github.com/michelp/pgjwt</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgjwt-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgjwt-0.2.0.tar.gz</div>
    <div class="ext-card__desc">pgjwt-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgjwt`**](/ext/e/pgjwt) | `0.2.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4160  | [**`pgjwt`**](/ext/e/pgjwt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgcrypto`](/ext/e/pgcrypto) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) [`pgjq`](/ext/e/pgjq) [`sparql`](/ext/e/sparql) [`pgcrypto`](/ext/e/pgcrypto) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pgjwt` | `pgcrypto` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pgjwt_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgjwt` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pgjwt_18 pgjwt_18-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjwt_18-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgjwt_18 pgjwt_18-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjwt_18-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgjwt_18 pgjwt_18-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjwt_18-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgjwt_18 pgjwt_18-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjwt_18-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgjwt_18 pgjwt_18-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 9.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjwt_18-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgjwt_18 pgjwt_18-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjwt_18-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgjwt postgresql-18-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-18-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgjwt postgresql-18-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-18-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgjwt postgresql-18-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-18-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgjwt postgresql-18-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-18-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgjwt postgresql-18-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-18-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgjwt postgresql-18-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-18-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgjwt postgresql-18-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-18-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgjwt postgresql-18-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-18-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgjwt_17 pgjwt_17-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjwt_17-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgjwt_17 pgjwt_17-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjwt_17-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgjwt_17 pgjwt_17-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjwt_17-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgjwt_17 pgjwt_17-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjwt_17-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgjwt_17 pgjwt_17-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 9.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjwt_17-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgjwt_17 pgjwt_17-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjwt_17-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgjwt postgresql-17-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-17-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgjwt postgresql-17-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-17-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgjwt postgresql-17-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-17-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgjwt postgresql-17-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-17-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgjwt postgresql-17-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-17-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgjwt postgresql-17-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-17-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgjwt postgresql-17-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-17-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgjwt postgresql-17-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-17-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgjwt_16 pgjwt_16-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjwt_16-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgjwt_16 pgjwt_16-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjwt_16-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgjwt_16 pgjwt_16-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjwt_16-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgjwt_16 pgjwt_16-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjwt_16-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgjwt_16 pgjwt_16-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 9.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjwt_16-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgjwt_16 pgjwt_16-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjwt_16-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgjwt postgresql-16-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-16-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgjwt postgresql-16-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-16-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgjwt postgresql-16-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-16-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgjwt postgresql-16-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-16-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgjwt postgresql-16-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-16-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgjwt postgresql-16-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-16-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgjwt postgresql-16-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-16-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgjwt postgresql-16-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-16-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgjwt_15 pgjwt_15-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjwt_15-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgjwt_15 pgjwt_15-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjwt_15-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgjwt_15 pgjwt_15-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjwt_15-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgjwt_15 pgjwt_15-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjwt_15-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgjwt_15 pgjwt_15-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 9.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjwt_15-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgjwt_15 pgjwt_15-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjwt_15-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgjwt postgresql-15-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-15-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgjwt postgresql-15-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-15-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgjwt postgresql-15-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-15-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgjwt postgresql-15-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-15-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgjwt postgresql-15-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-15-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgjwt postgresql-15-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-15-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgjwt postgresql-15-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-15-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgjwt postgresql-15-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-15-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgjwt_14 pgjwt_14-0.2.0-1PIGSTY.el8.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjwt_14-0.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgjwt_14 pgjwt_14-0.2.0-1PIGSTY.el8.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjwt_14-0.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgjwt_14 pgjwt_14-0.2.0-1PIGSTY.el9.x86_64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjwt_14-0.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgjwt_14 pgjwt_14-0.2.0-1PIGSTY.el9.aarch64.rpm pigsty 0.2.0 9.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjwt_14-0.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgjwt_14 pgjwt_14-0.2.0-1PIGSTY.el10.x86_64.rpm pigsty 0.2.0 9.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjwt_14-0.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgjwt_14 pgjwt_14-0.2.0-1PIGSTY.el10.aarch64.rpm pigsty 0.2.0 9.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjwt_14-0.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgjwt postgresql-14-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-14-pgjwt_0.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgjwt postgresql-14-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjwt/postgresql-14-pgjwt_0.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgjwt postgresql-14-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-14-pgjwt_0.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgjwt postgresql-14-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb pigsty 0.2.0 4.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjwt/postgresql-14-pgjwt_0.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgjwt postgresql-14-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-14-pgjwt_0.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgjwt postgresql-14-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjwt/postgresql-14-pgjwt_0.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgjwt postgresql-14-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-14-pgjwt_0.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgjwt postgresql-14-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb pigsty 0.2.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjwt/postgresql-14-pgjwt_0.2.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgjwt` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgjwt         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgjwt` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgjwt;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgjwt -v 18  # PG 18
pig ext install -y pgjwt -v 17  # PG 17
pig ext install -y pgjwt -v 16  # PG 16
pig ext install -y pgjwt -v 15  # PG 15
pig ext install -y pgjwt -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgjwt_18       # PG 18
dnf install -y pgjwt_17       # PG 17
dnf install -y pgjwt_16       # PG 16
dnf install -y pgjwt_15       # PG 15
dnf install -y pgjwt_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgjwt   # PG 18
apt install -y postgresql-17-pgjwt   # PG 17
apt install -y postgresql-16-pgjwt   # PG 16
apt install -y postgresql-15-pgjwt   # PG 15
apt install -y postgresql-14-pgjwt   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgjwt CASCADE;  -- 依赖: pgcrypto
```



## 用法

> [pgjwt: PostgreSQL 的 JSON Web Token 支持](https://github.com/michelp/pgjwt)

需要 `pgcrypto` 扩展。

### 签发令牌

```sql
SELECT sign(
    '{"sub":"1234567890","name":"John Doe","admin":true}',
    'secret'
);
```

返回一个 JWT 字符串，例如：`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOi...`

### 验证令牌

```sql
SELECT * FROM verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ',
    'secret'
);
```

返回结果：

| header | payload | valid |
|--------|---------|-------|
| `{"alg":"HS256","typ":"JWT"}` | `{"sub":"1234567890","name":"John Doe","admin":true}` | `t` |

### 算法选择

`sign()` 和 `verify()` 接受可选的第三个参数用于指定算法：`'HS256'`（默认）、`'HS384'` 或 `'HS512'`。

```sql
SELECT sign('{"data":"value"}', 'secret', 'HS384');
```

---
title: "plv8"
linkTitle: "plv8"
description: "PL/JavaScript (v8) 可信过程程序语言"
weight: 3010
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/plv8/plv8">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">plv8/plv8</div>
    <div class="ext-card__desc">https://github.com/plv8/plv8</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plv8-3.2.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plv8-3.2.4.tar.gz</div>
    <div class="ext-card__desc">plv8-3.2.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plv8`**](/ext/e/plv8) | `3.2.4` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3010  | [**`plv8`**](/ext/e/plv8) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) [`pg_tle`](/ext/e/pg_tle) [`pllua`](/ext/e/pllua) [`plluau`](/ext/e/plluau) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.4` | {{< pgvers "18,17,16,15,14" >}} | `plv8` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.4` | {{< pgvers "18,17,16,15,14" >}} | `plv8_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plv8` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| el8.aarch64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| el9.x86_64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| el9.aarch64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| el10.x86_64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| el10.aarch64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| d12.x86_64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| d12.aarch64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| d13.x86_64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| d13.aarch64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| u22.x86_64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| u22.aarch64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| u24.x86_64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
| u24.aarch64 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 | AVAIL PIGSTY 3.2.4 1 |
@ el8.x86_64 18 plv8_18 plv8_18-3.2.4-1PIGSTY.el8.x86_64.rpm pigsty 3.2.4 7.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plv8_18-3.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 plv8_18 plv8_18-3.2.4-1PIGSTY.el8.aarch64.rpm pigsty 3.2.4 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plv8_18-3.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 plv8_18 plv8_18-3.2.4-1PIGSTY.el9.x86_64.rpm pigsty 3.2.4 7.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plv8_18-3.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 plv8_18 plv8_18-3.2.4-1PIGSTY.el9.aarch64.rpm pigsty 3.2.4 7.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plv8_18-3.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 plv8_18 plv8_18-3.2.4-2PIGSTY.el10.x86_64.rpm pigsty 3.2.4 4.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plv8_18-3.2.4-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 plv8_18 plv8_18-3.2.4-2PIGSTY.el10.aarch64.rpm pigsty 3.2.4 4.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plv8_18-3.2.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plv8 postgresql-18-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-18-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-plv8 postgresql-18-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-18-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-plv8 postgresql-18-plv8_3.2.4-1PIGSTY~trixie_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-18-plv8_3.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-plv8 postgresql-18-plv8_3.2.4-1PIGSTY~trixie_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-18-plv8_3.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-plv8 postgresql-18-plv8_3.2.4-1PIGSTY~jammy_amd64.deb pigsty 3.2.4 6.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-18-plv8_3.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-plv8 postgresql-18-plv8_3.2.4-1PIGSTY~jammy_arm64.deb pigsty 3.2.4 6.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-18-plv8_3.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-plv8 postgresql-18-plv8_3.2.4-1PIGSTY~noble_amd64.deb pigsty 3.2.4 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-18-plv8_3.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-plv8 postgresql-18-plv8_3.2.4-1PIGSTY~noble_arm64.deb pigsty 3.2.4 6.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-18-plv8_3.2.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 plv8_17 plv8_17-3.2.4-1PIGSTY.el8.x86_64.rpm pigsty 3.2.4 7.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plv8_17-3.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 plv8_17 plv8_17-3.2.4-1PIGSTY.el8.aarch64.rpm pigsty 3.2.4 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plv8_17-3.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 plv8_17 plv8_17-3.2.4-1PIGSTY.el9.x86_64.rpm pigsty 3.2.4 7.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plv8_17-3.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 plv8_17 plv8_17-3.2.4-1PIGSTY.el9.aarch64.rpm pigsty 3.2.4 7.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plv8_17-3.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 plv8_17 plv8_17-3.2.4-2PIGSTY.el10.x86_64.rpm pigsty 3.2.4 4.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plv8_17-3.2.4-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 plv8_17 plv8_17-3.2.4-2PIGSTY.el10.aarch64.rpm pigsty 3.2.4 4.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plv8_17-3.2.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plv8 postgresql-17-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-17-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-plv8 postgresql-17-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-17-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-plv8 postgresql-17-plv8_3.2.4-1PIGSTY~trixie_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-17-plv8_3.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-plv8 postgresql-17-plv8_3.2.4-1PIGSTY~trixie_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-17-plv8_3.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-plv8 postgresql-17-plv8_3.2.4-1PIGSTY~jammy_amd64.deb pigsty 3.2.4 6.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-17-plv8_3.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-plv8 postgresql-17-plv8_3.2.4-1PIGSTY~jammy_arm64.deb pigsty 3.2.4 6.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-17-plv8_3.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-plv8 postgresql-17-plv8_3.2.4-1PIGSTY~noble_amd64.deb pigsty 3.2.4 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-17-plv8_3.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-plv8 postgresql-17-plv8_3.2.4-1PIGSTY~noble_arm64.deb pigsty 3.2.4 6.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-17-plv8_3.2.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 plv8_16 plv8_16-3.2.4-1PIGSTY.el8.x86_64.rpm pigsty 3.2.4 7.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plv8_16-3.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 plv8_16 plv8_16-3.2.4-1PIGSTY.el8.aarch64.rpm pigsty 3.2.4 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plv8_16-3.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 plv8_16 plv8_16-3.2.4-1PIGSTY.el9.x86_64.rpm pigsty 3.2.4 7.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plv8_16-3.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 plv8_16 plv8_16-3.2.4-1PIGSTY.el9.aarch64.rpm pigsty 3.2.4 7.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plv8_16-3.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 plv8_16 plv8_16-3.2.4-2PIGSTY.el10.x86_64.rpm pigsty 3.2.4 4.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plv8_16-3.2.4-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 plv8_16 plv8_16-3.2.4-2PIGSTY.el10.aarch64.rpm pigsty 3.2.4 4.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plv8_16-3.2.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plv8 postgresql-16-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-16-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-plv8 postgresql-16-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-16-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-plv8 postgresql-16-plv8_3.2.4-1PIGSTY~trixie_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-16-plv8_3.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-plv8 postgresql-16-plv8_3.2.4-1PIGSTY~trixie_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-16-plv8_3.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-plv8 postgresql-16-plv8_3.2.4-1PIGSTY~jammy_amd64.deb pigsty 3.2.4 6.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-16-plv8_3.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-plv8 postgresql-16-plv8_3.2.4-1PIGSTY~jammy_arm64.deb pigsty 3.2.4 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-16-plv8_3.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-plv8 postgresql-16-plv8_3.2.4-1PIGSTY~noble_amd64.deb pigsty 3.2.4 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-16-plv8_3.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-plv8 postgresql-16-plv8_3.2.4-1PIGSTY~noble_arm64.deb pigsty 3.2.4 6.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-16-plv8_3.2.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 plv8_15 plv8_15-3.2.4-1PIGSTY.el8.x86_64.rpm pigsty 3.2.4 7.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plv8_15-3.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 plv8_15 plv8_15-3.2.4-1PIGSTY.el8.aarch64.rpm pigsty 3.2.4 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plv8_15-3.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 plv8_15 plv8_15-3.2.4-1PIGSTY.el9.x86_64.rpm pigsty 3.2.4 7.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plv8_15-3.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 plv8_15 plv8_15-3.2.4-1PIGSTY.el9.aarch64.rpm pigsty 3.2.4 7.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plv8_15-3.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 plv8_15 plv8_15-3.2.4-2PIGSTY.el10.x86_64.rpm pigsty 3.2.4 7.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plv8_15-3.2.4-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 plv8_15 plv8_15-3.2.4-2PIGSTY.el10.aarch64.rpm pigsty 3.2.4 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plv8_15-3.2.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plv8 postgresql-15-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-15-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-plv8 postgresql-15-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-15-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-plv8 postgresql-15-plv8_3.2.4-1PIGSTY~trixie_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-15-plv8_3.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-plv8 postgresql-15-plv8_3.2.4-1PIGSTY~trixie_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-15-plv8_3.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-plv8 postgresql-15-plv8_3.2.4-1PIGSTY~jammy_amd64.deb pigsty 3.2.4 6.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-15-plv8_3.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-plv8 postgresql-15-plv8_3.2.4-1PIGSTY~jammy_arm64.deb pigsty 3.2.4 6.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-15-plv8_3.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-plv8 postgresql-15-plv8_3.2.4-1PIGSTY~noble_amd64.deb pigsty 3.2.4 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-15-plv8_3.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-plv8 postgresql-15-plv8_3.2.4-1PIGSTY~noble_arm64.deb pigsty 3.2.4 6.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-15-plv8_3.2.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 plv8_14 plv8_14-3.2.4-1PIGSTY.el8.x86_64.rpm pigsty 3.2.4 7.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plv8_14-3.2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 plv8_14 plv8_14-3.2.4-1PIGSTY.el8.aarch64.rpm pigsty 3.2.4 7.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plv8_14-3.2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 plv8_14 plv8_14-3.2.4-1PIGSTY.el9.x86_64.rpm pigsty 3.2.4 7.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plv8_14-3.2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 plv8_14 plv8_14-3.2.4-1PIGSTY.el9.aarch64.rpm pigsty 3.2.4 7.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plv8_14-3.2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 plv8_14 plv8_14-3.2.4-2PIGSTY.el10.x86_64.rpm pigsty 3.2.4 7.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plv8_14-3.2.4-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 plv8_14 plv8_14-3.2.4-2PIGSTY.el10.aarch64.rpm pigsty 3.2.4 6.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plv8_14-3.2.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plv8 postgresql-14-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-14-plv8_3.2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-plv8 postgresql-14-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plv8/postgresql-14-plv8_3.2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-plv8 postgresql-14-plv8_3.2.4-1PIGSTY~trixie_amd64.deb pigsty 3.2.4 6.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-14-plv8_3.2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-plv8 postgresql-14-plv8_3.2.4-1PIGSTY~trixie_arm64.deb pigsty 3.2.4 5.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plv8/postgresql-14-plv8_3.2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-plv8 postgresql-14-plv8_3.2.4-1PIGSTY~jammy_amd64.deb pigsty 3.2.4 6.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-14-plv8_3.2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-plv8 postgresql-14-plv8_3.2.4-1PIGSTY~jammy_arm64.deb pigsty 3.2.4 6.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plv8/postgresql-14-plv8_3.2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-plv8 postgresql-14-plv8_3.2.4-1PIGSTY~noble_amd64.deb pigsty 3.2.4 6.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-14-plv8_3.2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-plv8 postgresql-14-plv8_3.2.4-1PIGSTY~noble_arm64.deb pigsty 3.2.4 6.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plv8/postgresql-14-plv8_3.2.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plv8` 扩展的 RPM / DEB 包：

```bash
pig build pkg plv8         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `plv8` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plv8;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plv8 -v 18  # PG 18
pig ext install -y plv8 -v 17  # PG 17
pig ext install -y plv8 -v 16  # PG 16
pig ext install -y plv8 -v 15  # PG 15
pig ext install -y plv8 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plv8_18       # PG 18
dnf install -y plv8_17       # PG 17
dnf install -y plv8_16       # PG 16
dnf install -y plv8_15       # PG 15
dnf install -y plv8_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plv8   # PG 18
apt install -y postgresql-17-plv8   # PG 17
apt install -y postgresql-16-plv8   # PG 16
apt install -y postgresql-15-plv8   # PG 15
apt install -y postgresql-14-plv8   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plv8;
```



## 用法

```sql
CREATE EXTENSION plv8;

SELECT plv8_version();
SELECT plv8_info();

DO $$ plv8.elog(NOTICE, plv8.version); $$ LANGUAGE plv8;
```

示例：

```sql
CREATE FUNCTION plv8_test(keys TEXT[], vals TEXT[]) RETURNS JSON AS $$
    var o = {};
    for(var i=0; i<keys.length; i++){
        o[keys[i]] = vals[i];
    }
    return o;
$$ LANGUAGE plv8 IMMUTABLE STRICT;


SELECT plv8_test(ARRAY['name', 'age'], ARRAY['Tom', '29']);
```


## 构建

Plv8 在 EL10（x86/arm）上构建会遇到以下问题：

- 找不到 g++ 的问题
- g++ 14 需要包含 `<algorithm>` 头文件的问题
- LTO 问题，g++14 链接时优化（Link Time Optimization）相关错误




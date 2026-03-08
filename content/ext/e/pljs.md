---
title: "pljs"
linkTitle: "pljs"
description: "PL/JS 可信过程程序语言"
weight: 3011
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/plv8/pljs">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">plv8/pljs</div>
    <div class="ext-card__desc">https://github.com/plv8/pljs</div>
  </a>
  <a class="ext-card ext-card--source" href="pljs-1.0.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pljs-1.0.5.tar.gz</div>
    <div class="ext-card__desc">pljs-1.0.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pljs`**](/ext/e/pljs) | `1.0.5` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3011  | [**`pljs`**](/ext/e/pljs) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`plv8`](/ext/e/plv8) [`jsquery`](/ext/e/jsquery) [`pllua`](/ext/e/pllua) [`pg_tle`](/ext/e/pg_tle) [`plpgsql`](/ext/e/plpgsql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> with submodules, hot fix with CONFIG_VERSION


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `pljs` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `pljs_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pljs` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 | AVAIL PIGSTY 1.0.5 1 |
| d12.x86_64 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 |
| d12.aarch64 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 |
| d13.x86_64 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 |
| d13.aarch64 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 |
| u22.x86_64 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 |
| u22.aarch64 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 |
| u24.x86_64 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 |
| u24.aarch64 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 | AVAIL PGDG 1.0.5 2 |
@ el8.x86_64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 381.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pljs_18-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pljs_18-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 388.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pljs_18-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 370.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pljs_18-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 413.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pljs_18-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 380.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pljs_18-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 410.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 409.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 374.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 428.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 380.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 407.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 434.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 373.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 424.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 408.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 432.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 376.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 422.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 381.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pljs_17-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pljs_17-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 388.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pljs_17-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 370.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pljs_17-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 413.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pljs_17-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 379.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pljs_17-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 410.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 408.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 373.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 427.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 380.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 422.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 450.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 389.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 440.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 407.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 431.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 375.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 422.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 381.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pljs_16-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pljs_16-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 388.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pljs_16-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 370.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pljs_16-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 413.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pljs_16-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 379.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pljs_16-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 410.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 408.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 374.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 427.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 380.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 421.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 449.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 387.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 439.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 408.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 431.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 375.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 422.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 382.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pljs_15-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pljs_15-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 389.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pljs_15-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 372.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pljs_15-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 414.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pljs_15-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 381.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pljs_15-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 409.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 408.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 374.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 428.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 380.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 421.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 449.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 388.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 439.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 408.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 432.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 376.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 423.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 382.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pljs_14-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pljs_14-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 388.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pljs_14-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 372.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pljs_14-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 414.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pljs_14-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 381.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pljs_14-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 410.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 409.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 374.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 428.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 381.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 422.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 450.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 388.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 439.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 408.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 432.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 376.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 423.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pljs` 扩展的 RPM / DEB 包：

```bash
pig build pkg pljs         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pljs` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pljs;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pljs -v 18  # PG 18
pig ext install -y pljs -v 17  # PG 17
pig ext install -y pljs -v 16  # PG 16
pig ext install -y pljs -v 15  # PG 15
pig ext install -y pljs -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pljs_18       # PG 18
dnf install -y pljs_17       # PG 17
dnf install -y pljs_16       # PG 16
dnf install -y pljs_15       # PG 15
dnf install -y pljs_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pljs   # PG 18
apt install -y postgresql-17-pljs   # PG 17
apt install -y postgresql-16-pljs   # PG 16
apt install -y postgresql-15-pljs   # PG 15
apt install -y postgresql-14-pljs   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pljs;
```

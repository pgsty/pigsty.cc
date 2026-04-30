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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pljs-1.0.5.tar.gz">
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
| u26.x86_64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| u26.aarch64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
@ el8.x86_64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 381.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pljs_18-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pljs_18-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 388.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pljs_18-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 370.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pljs_18-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 413.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pljs_18-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pljs_18 pljs_18-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 380.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pljs_18-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 410.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 409.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 374.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 428.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 380.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 407.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 434.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 373.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 424.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 408.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 432.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 376.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 422.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg26.04+1_amd64.deb pgdg 1.0.5 429.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pljs postgresql-18-pljs_1.0.5-1.pgdg26.04+1_arm64.deb pgdg 1.0.5 381.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-18-pljs_1.0.5-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 381.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pljs_17-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pljs_17-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 388.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pljs_17-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 370.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pljs_17-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 413.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pljs_17-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pljs_17 pljs_17-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 379.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pljs_17-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 410.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 408.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 373.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 427.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 380.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 422.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 450.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 389.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 440.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 407.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 431.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 375.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 422.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg26.04+1_amd64.deb pgdg 1.0.5 428.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pljs postgresql-17-pljs_1.0.5-1.pgdg26.04+1_arm64.deb pgdg 1.0.5 382.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-17-pljs_1.0.5-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 381.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pljs_16-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pljs_16-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 388.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pljs_16-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 370.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pljs_16-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 413.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pljs_16-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pljs_16 pljs_16-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 379.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pljs_16-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 410.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 408.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 374.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 427.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 380.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 421.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 449.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 387.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 439.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 408.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 431.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 375.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 422.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg26.04+1_amd64.deb pgdg 1.0.5 428.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pljs postgresql-16-pljs_1.0.5-1.pgdg26.04+1_arm64.deb pgdg 1.0.5 381.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-16-pljs_1.0.5-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 382.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pljs_15-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pljs_15-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 389.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pljs_15-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 372.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pljs_15-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 414.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pljs_15-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pljs_15 pljs_15-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 381.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pljs_15-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 409.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 408.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 374.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 428.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 380.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 421.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 449.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 388.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 439.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 408.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 432.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 376.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 423.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg26.04+1_amd64.deb pgdg 1.0.5 429.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pljs postgresql-15-pljs_1.0.5-1.pgdg26.04+1_arm64.deb pgdg 1.0.5 382.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-15-pljs_1.0.5-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el8.x86_64.rpm pigsty 1.0.5 382.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pljs_14-1.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el8.aarch64.rpm pigsty 1.0.5 349.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pljs_14-1.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el9.x86_64.rpm pigsty 1.0.5 388.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pljs_14-1.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el9.aarch64.rpm pigsty 1.0.5 372.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pljs_14-1.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el10.x86_64.rpm pigsty 1.0.5 414.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pljs_14-1.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pljs_14 pljs_14-1.0.5-1PIGSTY.el10.aarch64.rpm pigsty 1.0.5 381.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pljs_14-1.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg12+1_amd64.deb pgdg 1.0.5 410.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb pigsty 1.0.5 409.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg12+1_arm64.deb pgdg 1.0.5 375.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb pigsty 1.0.5 374.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg13+1_amd64.deb pgdg 1.0.5 429.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~trixie_amd64.deb pigsty 1.0.5 428.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg13+1_arm64.deb pgdg 1.0.5 381.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~trixie_arm64.deb pigsty 1.0.5 381.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg22.04+1_amd64.deb pgdg 1.0.5 422.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~jammy_amd64.deb pigsty 1.0.5 450.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg22.04+1_arm64.deb pgdg 1.0.5 388.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~jammy_arm64.deb pigsty 1.0.5 439.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg24.04+1_amd64.deb pgdg 1.0.5 408.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~noble_amd64.deb pigsty 1.0.5 432.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg24.04+1_arm64.deb pgdg 1.0.5 376.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1PIGSTY~noble_arm64.deb pigsty 1.0.5 423.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg26.04+1_amd64.deb pgdg 1.0.5 429.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pljs postgresql-14-pljs_1.0.5-1.pgdg26.04+1_arm64.deb pgdg 1.0.5 382.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pljs/postgresql-14-pljs_1.0.5-1.pgdg26.04+1_arm64.deb
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



## 用法

> [pljs: PL/JavaScript 可信过程语言](https://github.com/plv8/pljs)

`pljs` 允许使用 QuickJS 引擎在 PostgreSQL 中编写 JavaScript 函数。

```sql
CREATE EXTENSION pljs;
DO $$ pljs.elog(NOTICE, "Hello, World!") $$ LANGUAGE pljs;
```

### 创建函数

```sql
CREATE FUNCTION pljs_add(a int, b int) RETURNS int AS $$
  return a + b;
$$ LANGUAGE pljs;

SELECT pljs_add(1, 2);  -- 3
```

### 数据库访问

```sql
CREATE FUNCTION get_users() RETURNS SETOF json AS $$
  var rows = pljs.execute('SELECT * FROM users');
  for (var i = 0; i < rows.length; i++) {
    pljs.return_next(JSON.stringify(rows[i]));
  }
$$ LANGUAGE pljs;
```

使用参数执行：

```js
var rows = pljs.execute('SELECT * FROM tbl WHERE id = $1', [42]);
var affected = pljs.execute('DELETE FROM tbl WHERE price > $1', [1000]);
```

### 预备语句

```js
var plan = pljs.prepare('SELECT * FROM tbl WHERE col = $1', ['int']);
var rows = plan.execute([1]);
plan.free();
```

### 游标

```js
var plan = pljs.prepare('SELECT * FROM tbl WHERE col = $1', ['int']);
var cursor = plan.cursor([1]);
var row;
while (row = cursor.fetch()) {
    // 处理行
}
cursor.close();
plan.free();
```

### 子事务

```js
try {
  pljs.subtransaction(function() {
    pljs.execute("INSERT INTO tbl VALUES(1)");
    pljs.execute("INSERT INTO tbl VALUES(1/0)"); // 出错 - 回滚
  });
} catch(e) {
  // 处理错误
}
```

### 日志记录

```js
pljs.elog(DEBUG1, 'debug message');
pljs.elog(NOTICE, 'notice message');
pljs.elog(WARNING, 'warning message');
pljs.elog(ERROR, 'error message');
```

### 查找其他 PLJS 函数

```sql
CREATE FUNCTION callee(a int) RETURNS int AS $$ return a * a $$ LANGUAGE pljs;
CREATE FUNCTION caller(a int, t int) RETURNS int AS $$
  var func = pljs.find_function("callee");
  return func(a);
$$ LANGUAGE pljs;
```

### 窗口函数

```sql
CREATE FUNCTION my_window_func(val int) RETURNS int AS $$
  var winobj = pljs.get_window_object();
  var pos = winobj.get_current_position();
  var total = winobj.get_partition_row_count();
  return winobj.get_func_arg_in_current(0);
$$ LANGUAGE pljs WINDOW;
```

窗口对象方法：`get_current_position()`、`get_partition_row_count()`、`set_mark_position(pos)`、`rows_are_peers(pos1, pos2)`、`get_func_arg_in_partition(argno, relpos, seektype, mark_pos)`、`get_func_arg_in_frame(argno, relpos, seektype, mark_pos)`、`get_func_arg_in_current(argno)`、`get_partition_local()`、`set_partition_local(obj)`。

### 实用函数

```sql
SELECT pljs_info();     -- 以 JSON 格式返回内存和栈使用情况
SELECT pljs_version();  -- 扩展版本
```

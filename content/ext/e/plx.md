---
title: "plx"
linkTitle: "plx"
description: "将多种过程语言方言转译为 PL/pgSQL"
weight: 3140
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/commandprompt/plx">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">commandprompt/plx</div>
    <div class="ext-card__desc">https://github.com/commandprompt/plx</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plx-1.3.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plx-1.3.1.tar.gz</div>
    <div class="ext-card__desc">plx-1.3.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plx`**](/ext/e/plx) | `1.3.1` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3140  | [**`plx`**](/ext/e/plx) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`plv8`](/ext/e/plv8) [`pllua`](/ext/e/pllua) [`pljava`](/ext/e/pljava) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) [`plprql`](/ext/e/plprql) [`plsh`](/ext/e/plsh) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Uses PostgreSQL's built-in PL/pgSQL call handler; no control-file dependency is declared.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.1` | {{< pgvers "18,17,16,15,14" >}} | `plx` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.1` | {{< pgvers "18,17,16,15,14" >}} | `plx_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plx` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 | AVAIL PIGSTY 1.3.1 1 |
@ el8.x86_64 18 plx_18 plx_18-1.3.1-1PIGSTY.el8.x86_64.rpm pigsty 1.3.1 103.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plx_18-1.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 plx_18 plx_18-1.3.1-1PIGSTY.el8.aarch64.rpm pigsty 1.3.1 98.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plx_18-1.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 plx_18 plx_18-1.3.1-1PIGSTY.el9.x86_64.rpm pigsty 1.3.1 110.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plx_18-1.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 plx_18 plx_18-1.3.1-1PIGSTY.el9.aarch64.rpm pigsty 1.3.1 106.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plx_18-1.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 plx_18 plx_18-1.3.1-1PIGSTY.el10.x86_64.rpm pigsty 1.3.1 116.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plx_18-1.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 plx_18 plx_18-1.3.1-1PIGSTY.el10.aarch64.rpm pigsty 1.3.1 109.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plx_18-1.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~bookworm_amd64.deb pigsty 1.3.1 307.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~bookworm_arm64.deb pigsty 1.3.1 296.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~trixie_amd64.deb pigsty 1.3.1 309.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~trixie_arm64.deb pigsty 1.3.1 296.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~jammy_amd64.deb pigsty 1.3.1 324.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~jammy_arm64.deb pigsty 1.3.1 320.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~noble_amd64.deb pigsty 1.3.1 321.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~noble_arm64.deb pigsty 1.3.1 315.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~resolute_amd64.deb pigsty 1.3.1 318.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-plx postgresql-18-plx_1.3.1-1PIGSTY~resolute_arm64.deb pigsty 1.3.1 312.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-18-plx_1.3.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 plx_17 plx_17-1.3.1-1PIGSTY.el8.x86_64.rpm pigsty 1.3.1 103.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plx_17-1.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 plx_17 plx_17-1.3.1-1PIGSTY.el8.aarch64.rpm pigsty 1.3.1 98.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plx_17-1.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 plx_17 plx_17-1.3.1-1PIGSTY.el9.x86_64.rpm pigsty 1.3.1 110.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plx_17-1.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 plx_17 plx_17-1.3.1-1PIGSTY.el9.aarch64.rpm pigsty 1.3.1 106.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plx_17-1.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 plx_17 plx_17-1.3.1-1PIGSTY.el10.x86_64.rpm pigsty 1.3.1 116.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plx_17-1.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 plx_17 plx_17-1.3.1-1PIGSTY.el10.aarch64.rpm pigsty 1.3.1 109.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plx_17-1.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~bookworm_amd64.deb pigsty 1.3.1 307.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~bookworm_arm64.deb pigsty 1.3.1 296.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~trixie_amd64.deb pigsty 1.3.1 309.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~trixie_arm64.deb pigsty 1.3.1 296.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~jammy_amd64.deb pigsty 1.3.1 340.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~jammy_arm64.deb pigsty 1.3.1 337.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~noble_amd64.deb pigsty 1.3.1 321.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~noble_arm64.deb pigsty 1.3.1 315.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~resolute_amd64.deb pigsty 1.3.1 317.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-plx postgresql-17-plx_1.3.1-1PIGSTY~resolute_arm64.deb pigsty 1.3.1 312.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-17-plx_1.3.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 plx_16 plx_16-1.3.1-1PIGSTY.el8.x86_64.rpm pigsty 1.3.1 103.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plx_16-1.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 plx_16 plx_16-1.3.1-1PIGSTY.el8.aarch64.rpm pigsty 1.3.1 98.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plx_16-1.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 plx_16 plx_16-1.3.1-1PIGSTY.el9.x86_64.rpm pigsty 1.3.1 110.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plx_16-1.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 plx_16 plx_16-1.3.1-1PIGSTY.el9.aarch64.rpm pigsty 1.3.1 106.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plx_16-1.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 plx_16 plx_16-1.3.1-1PIGSTY.el10.x86_64.rpm pigsty 1.3.1 116.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plx_16-1.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 plx_16 plx_16-1.3.1-1PIGSTY.el10.aarch64.rpm pigsty 1.3.1 109.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plx_16-1.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~bookworm_amd64.deb pigsty 1.3.1 307.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~bookworm_arm64.deb pigsty 1.3.1 296.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~trixie_amd64.deb pigsty 1.3.1 309.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~trixie_arm64.deb pigsty 1.3.1 296.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~jammy_amd64.deb pigsty 1.3.1 339.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~jammy_arm64.deb pigsty 1.3.1 336.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~noble_amd64.deb pigsty 1.3.1 321.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~noble_arm64.deb pigsty 1.3.1 315.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~resolute_amd64.deb pigsty 1.3.1 317.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-plx postgresql-16-plx_1.3.1-1PIGSTY~resolute_arm64.deb pigsty 1.3.1 312.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-16-plx_1.3.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 plx_15 plx_15-1.3.1-1PIGSTY.el8.x86_64.rpm pigsty 1.3.1 104.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plx_15-1.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 plx_15 plx_15-1.3.1-1PIGSTY.el8.aarch64.rpm pigsty 1.3.1 98.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plx_15-1.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 plx_15 plx_15-1.3.1-1PIGSTY.el9.x86_64.rpm pigsty 1.3.1 110.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plx_15-1.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 plx_15 plx_15-1.3.1-1PIGSTY.el9.aarch64.rpm pigsty 1.3.1 106.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plx_15-1.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 plx_15 plx_15-1.3.1-1PIGSTY.el10.x86_64.rpm pigsty 1.3.1 116.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plx_15-1.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 plx_15 plx_15-1.3.1-1PIGSTY.el10.aarch64.rpm pigsty 1.3.1 109.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plx_15-1.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~bookworm_amd64.deb pigsty 1.3.1 308.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~bookworm_arm64.deb pigsty 1.3.1 296.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~trixie_amd64.deb pigsty 1.3.1 309.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~trixie_arm64.deb pigsty 1.3.1 297.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~jammy_amd64.deb pigsty 1.3.1 339.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~jammy_arm64.deb pigsty 1.3.1 336.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~noble_amd64.deb pigsty 1.3.1 321.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~noble_arm64.deb pigsty 1.3.1 315.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~resolute_amd64.deb pigsty 1.3.1 318.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-plx postgresql-15-plx_1.3.1-1PIGSTY~resolute_arm64.deb pigsty 1.3.1 313.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-15-plx_1.3.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 plx_14 plx_14-1.3.1-1PIGSTY.el8.x86_64.rpm pigsty 1.3.1 104.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plx_14-1.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 plx_14 plx_14-1.3.1-1PIGSTY.el8.aarch64.rpm pigsty 1.3.1 98.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plx_14-1.3.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 plx_14 plx_14-1.3.1-1PIGSTY.el9.x86_64.rpm pigsty 1.3.1 110.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plx_14-1.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 plx_14 plx_14-1.3.1-1PIGSTY.el9.aarch64.rpm pigsty 1.3.1 106.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plx_14-1.3.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 plx_14 plx_14-1.3.1-1PIGSTY.el10.x86_64.rpm pigsty 1.3.1 116.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plx_14-1.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 plx_14 plx_14-1.3.1-1PIGSTY.el10.aarch64.rpm pigsty 1.3.1 109.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plx_14-1.3.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~bookworm_amd64.deb pigsty 1.3.1 308.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~bookworm_arm64.deb pigsty 1.3.1 296.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~trixie_amd64.deb pigsty 1.3.1 310.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~trixie_arm64.deb pigsty 1.3.1 297.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~jammy_amd64.deb pigsty 1.3.1 339.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~jammy_arm64.deb pigsty 1.3.1 336.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~noble_amd64.deb pigsty 1.3.1 321.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~noble_arm64.deb pigsty 1.3.1 315.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~resolute_amd64.deb pigsty 1.3.1 318.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-plx postgresql-14-plx_1.3.1-1PIGSTY~resolute_arm64.deb pigsty 1.3.1 313.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plx/postgresql-14-plx_1.3.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plx` 扩展的 RPM / DEB 包：

```bash
pig build pkg plx         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `plx` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plx;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plx -v 18  # PG 18
pig ext install -y plx -v 17  # PG 17
pig ext install -y plx -v 16  # PG 16
pig ext install -y plx -v 15  # PG 15
pig ext install -y plx -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plx_18       # PG 18
dnf install -y plx_17       # PG 17
dnf install -y plx_16       # PG 16
dnf install -y plx_15       # PG 15
dnf install -y plx_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plx   # PG 18
apt install -y postgresql-17-plx   # PG 17
apt install -y postgresql-16-plx   # PG 16
apt install -y postgresql-15-plx   # PG 15
apt install -y postgresql-14-plx   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plx;
```

## 用法

来源：

- [plx 1.3.1 README](https://github.com/commandprompt/plx/blob/v1.3.1/README.md)
- [plx 文档](https://commandprompt.github.io/plx/)
- [plx 用户指南](https://github.com/commandprompt/plx/blob/v1.3.1/doc/USERGUIDE.md)
- [plx 限制](https://github.com/commandprompt/plx/blob/v1.3.1/doc/LIMITATIONS.md)
- [plx 1.3.1 发行版](https://github.com/commandprompt/plx/releases/tag/v1.3.1)

`plx` 提供了熟悉的程序语言方言，当 `CREATE FUNCTION` 执行时会编译为普通的 PL/pgSQL。PostgreSQL 存储并执行生成的 PL/pgSQL，使用其内置的信任处理程序；无需加载 Ruby、PHP、JavaScript、Python、Go、COBOL、Oracle 或 SQL Server 运行时到后端。

```sql
CREATE EXTENSION plx;
```

### 可用方言

| 语言 | 表面语法 |
|---|---|
| `plxruby` | Ruby |
| `plxphp` | PHP |
| `plxjs` | JavaScript |
| `plxts` | TypeScript 注解在 JavaScript 方言之上 |
| `plxpython3` | Python 3 |
| `plxgo` | Go |
| `plxcobol` | ISO COBOL |
| `plxplsql` | Oracle PL/SQL |
| `plxtsql` | Transact-SQL |

所有方言都针对相同的 PL/pgSQL 语句表面，包括赋值、条件判断、循环、查询迭代、动态 SQL、游标、异常处理、触发器和集合返回函数。

### 创建一个函数

在 `LANGUAGE` 子句中选择一种方言，并保持函数签名使用 PostgreSQL 类型：

```sql
CREATE FUNCTION grade(score integer)
RETURNS text
LANGUAGE plxruby
AS $$
  grade #:: text
  if score >= 90
    grade = "A"
  elsif score >= 80
    grade = "B"
  else
    grade = "F"
  end
  return grade
$$;

SELECT grade(85);
```

翻译只会在创建函数时发生一次。存储在 `pg_proc.prosrc` 中的可执行体是普通的 PL/pgSQL，因此可以导出、审查和运行而无需单独的解释器。

### 检查和调试生成代码

```sql
SELECT pg_get_functiondef('grade(integer)'::regprocedure);
SELECT prosrc
FROM pg_proc
WHERE oid = 'grade(integer)'::regprocedure;

SELECT plx_source('grade(integer)'::regprocedure);
```

运行时错误行号指向生成的 PL/pgSQL。使用 `plx_source()` 获取原始嵌入方言体；在与源码相关联时，将其与 `pg_get_functiondef()` 一起使用。

### SQL 和字符串构建

表达式保留 PostgreSQL 的 SQL 语义，而不是模拟完整的源语言运行时环境。对于 SQL 使用每个方言的查询/执行形式，并且非字面量表达式使用显式的 PostgreSQL 类型。`plx_strbuild` 扩展对象辅助函数在 PostgreSQL 18 中加速了重复字符串追加：

```sql
CREATE FUNCTION labels(n integer)
RETURNS text
LANGUAGE plxjs
AS $$
  let out: text = "";
  for (let i = 1; i <= n; i++) {
    out += `item-${i},`;
  }
  return out;
$$;
```

该构建器在 PostgreSQL 13-17 中仍然正确，但其就地优化需要 PostgreSQL 18。

### 边界和注意事项

- plx 实现的是语法表面，而不是源语言的运行时环境：没有 gems、Python 模块、JavaScript 导入、Go 协程、PHP 类或 SQL Server 事务命令。
- 函数在 PL/pgSQL 的信任沙箱中运行，没有任何直接文件系统访问、网络访问、任意本地代码访问或事务控制权限。
- 参数和返回类型必须是 PostgreSQL 类型。局部变量的类型推断有限；对于调用和复合表达式需要显式声明类型。
- SQL 使用三值逻辑和 PostgreSQL 的数值/字符串语义。源语言中的真假性和使用 `+` 进行字符串连接没有被复制。
- 局部变量被提升到一个 PL/pgSQL 的 `DECLARE` 块中，因此块局部作用域和具有不同类型的重新声明不可用。
- 版本 1.3.1 是一个仅包含代码的安全发布：它增加了词法分析/字符串构建容量保护、堆栈深度检查、有限缩进处理以及对原始字符串、PHP 插值和非十进制整数字面量解析的修复。安装二进制文件后，请运行 `ALTER EXTENSION plx UPDATE TO '1.3.1'`。

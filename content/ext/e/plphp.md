---
title: "plphp"
linkTitle: "plphp"
description: "将 PHP 8 嵌入 PostgreSQL，提供非可信过程语言"
weight: 3170
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/commandprompt/plPHP">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">commandprompt/plPHP</div>
    <div class="ext-card__desc">https://github.com/commandprompt/plPHP</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plphp-2.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plphp-2.6.tar.gz</div>
    <div class="ext-card__desc">plphp-2.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plphp`**](/ext/e/plphp) | `2.6` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3170  | [**`plphp`**](/ext/e/plphp) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plruby`](/ext/e/plruby) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) [`pllua`](/ext/e/pllua) [`plv8`](/ext/e/plv8) `jsonb_plphp` `hstore_plphp` `bytea_plphp` |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | `bytea_plphp` `hstore_plphp` `jsonb_plphp` |
{.ext-table .ext-table--rel}


> Uses non-ZTS PHP embed. EL8/EL9 RPMs require the PHP 8.2/8.3 module streams respectively; DEBs pin the matching PHP embed runtime for each OS. No preload or fixed schema. The three optional transforms are not included in this package.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.6` | {{< pgvers "18,17,16,15,14" >}} | `plphp` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.6` | {{< pgvers "18,17,16,15,14" >}} | `plphp_$v` | `php-embedded` |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plphp` | `libphp-embed` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| el8.aarch64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| el9.x86_64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| el9.aarch64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| el10.x86_64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| el10.aarch64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| d12.x86_64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| d12.aarch64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| d13.x86_64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| d13.aarch64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| u22.x86_64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| u22.aarch64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| u24.x86_64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| u24.aarch64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| u26.x86_64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
| u26.aarch64 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 | AVAIL PIGSTY 2.6 1 |
@ el8.x86_64 18 plphp_18 plphp_18-2.6-1PGSTY.el8.x86_64.rpm pigsty 2.6 120.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plphp_18-2.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 plphp_18 plphp_18-2.6-1PGSTY.el8.aarch64.rpm pigsty 2.6 117.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plphp_18-2.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 plphp_18 plphp_18-2.6-1PGSTY.el9.x86_64.rpm pigsty 2.6 123.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plphp_18-2.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 plphp_18 plphp_18-2.6-1PGSTY.el9.aarch64.rpm pigsty 2.6 120.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plphp_18-2.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 plphp_18 plphp_18-2.6-1PGSTY.el10.x86_64.rpm pigsty 2.6 123.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plphp_18-2.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 plphp_18 plphp_18-2.6-1PGSTY.el10.aarch64.rpm pigsty 2.6 121.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plphp_18-2.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~bookworm_amd64.deb pigsty 2.6 114.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~bookworm_arm64.deb pigsty 2.6 110.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~trixie_amd64.deb pigsty 2.6 114.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~trixie_arm64.deb pigsty 2.6 111.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~jammy_amd64.deb pigsty 2.6 117.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~jammy_arm64.deb pigsty 2.6 115.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~noble_amd64.deb pigsty 2.6 114.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~noble_arm64.deb pigsty 2.6 111.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~resolute_amd64.deb pigsty 2.6 112.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-plphp postgresql-18-plphp_2.6-1PGSTY~resolute_arm64.deb pigsty 2.6 109.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-18-plphp_2.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 plphp_17 plphp_17-2.6-1PGSTY.el8.x86_64.rpm pigsty 2.6 120.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plphp_17-2.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 plphp_17 plphp_17-2.6-1PGSTY.el8.aarch64.rpm pigsty 2.6 117.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plphp_17-2.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 plphp_17 plphp_17-2.6-1PGSTY.el9.x86_64.rpm pigsty 2.6 123.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plphp_17-2.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 plphp_17 plphp_17-2.6-1PGSTY.el9.aarch64.rpm pigsty 2.6 120.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plphp_17-2.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 plphp_17 plphp_17-2.6-1PGSTY.el10.x86_64.rpm pigsty 2.6 123.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plphp_17-2.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 plphp_17 plphp_17-2.6-1PGSTY.el10.aarch64.rpm pigsty 2.6 121.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plphp_17-2.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~bookworm_amd64.deb pigsty 2.6 114.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~bookworm_arm64.deb pigsty 2.6 111.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~trixie_amd64.deb pigsty 2.6 114.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~trixie_arm64.deb pigsty 2.6 111.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~jammy_amd64.deb pigsty 2.6 138.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~jammy_arm64.deb pigsty 2.6 136.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~noble_amd64.deb pigsty 2.6 113.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~noble_arm64.deb pigsty 2.6 111.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~resolute_amd64.deb pigsty 2.6 112.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-plphp postgresql-17-plphp_2.6-1PGSTY~resolute_arm64.deb pigsty 2.6 109.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-17-plphp_2.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 plphp_16 plphp_16-2.6-1PGSTY.el8.x86_64.rpm pigsty 2.6 120.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plphp_16-2.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 plphp_16 plphp_16-2.6-1PGSTY.el8.aarch64.rpm pigsty 2.6 117.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plphp_16-2.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 plphp_16 plphp_16-2.6-1PGSTY.el9.x86_64.rpm pigsty 2.6 123.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plphp_16-2.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 plphp_16 plphp_16-2.6-1PGSTY.el9.aarch64.rpm pigsty 2.6 120.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plphp_16-2.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 plphp_16 plphp_16-2.6-1PGSTY.el10.x86_64.rpm pigsty 2.6 123.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plphp_16-2.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 plphp_16 plphp_16-2.6-1PGSTY.el10.aarch64.rpm pigsty 2.6 121.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plphp_16-2.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~bookworm_amd64.deb pigsty 2.6 114.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~bookworm_arm64.deb pigsty 2.6 111.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~trixie_amd64.deb pigsty 2.6 114.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~trixie_arm64.deb pigsty 2.6 111.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~jammy_amd64.deb pigsty 2.6 137.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~jammy_arm64.deb pigsty 2.6 134.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~noble_amd64.deb pigsty 2.6 113.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~noble_arm64.deb pigsty 2.6 111.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~resolute_amd64.deb pigsty 2.6 112.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-plphp postgresql-16-plphp_2.6-1PGSTY~resolute_arm64.deb pigsty 2.6 109.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-16-plphp_2.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 plphp_15 plphp_15-2.6-1PGSTY.el8.x86_64.rpm pigsty 2.6 120.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plphp_15-2.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 plphp_15 plphp_15-2.6-1PGSTY.el8.aarch64.rpm pigsty 2.6 117.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plphp_15-2.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 plphp_15 plphp_15-2.6-1PGSTY.el9.x86_64.rpm pigsty 2.6 123.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plphp_15-2.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 plphp_15 plphp_15-2.6-1PGSTY.el9.aarch64.rpm pigsty 2.6 121.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plphp_15-2.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 plphp_15 plphp_15-2.6-1PGSTY.el10.x86_64.rpm pigsty 2.6 123.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plphp_15-2.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 plphp_15 plphp_15-2.6-1PGSTY.el10.aarch64.rpm pigsty 2.6 121.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plphp_15-2.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~bookworm_amd64.deb pigsty 2.6 114.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~bookworm_arm64.deb pigsty 2.6 111.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~trixie_amd64.deb pigsty 2.6 115.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~trixie_arm64.deb pigsty 2.6 111.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~jammy_amd64.deb pigsty 2.6 137.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~jammy_arm64.deb pigsty 2.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~noble_amd64.deb pigsty 2.6 114.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~noble_arm64.deb pigsty 2.6 112.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~resolute_amd64.deb pigsty 2.6 113.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-plphp postgresql-15-plphp_2.6-1PGSTY~resolute_arm64.deb pigsty 2.6 109.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-15-plphp_2.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 plphp_14 plphp_14-2.6-1PGSTY.el8.x86_64.rpm pigsty 2.6 120.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plphp_14-2.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 plphp_14 plphp_14-2.6-1PGSTY.el8.aarch64.rpm pigsty 2.6 117.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plphp_14-2.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 plphp_14 plphp_14-2.6-1PGSTY.el9.x86_64.rpm pigsty 2.6 123.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plphp_14-2.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 plphp_14 plphp_14-2.6-1PGSTY.el9.aarch64.rpm pigsty 2.6 121.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plphp_14-2.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 plphp_14 plphp_14-2.6-1PGSTY.el10.x86_64.rpm pigsty 2.6 123.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plphp_14-2.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 plphp_14 plphp_14-2.6-1PGSTY.el10.aarch64.rpm pigsty 2.6 121.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plphp_14-2.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~bookworm_amd64.deb pigsty 2.6 117.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~bookworm_arm64.deb pigsty 2.6 114.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~trixie_amd64.deb pigsty 2.6 117.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~trixie_arm64.deb pigsty 2.6 114.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~jammy_amd64.deb pigsty 2.6 140.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~jammy_arm64.deb pigsty 2.6 138.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~noble_amd64.deb pigsty 2.6 116.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~noble_arm64.deb pigsty 2.6 115.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~resolute_amd64.deb pigsty 2.6 115.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-plphp postgresql-14-plphp_2.6-1PGSTY~resolute_arm64.deb pigsty 2.6 112.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plphp/postgresql-14-plphp_2.6-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plphp` 扩展的 RPM / DEB 包：

```bash
pig build pkg plphp         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `plphp` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install plphp;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y plphp -v 18  # PG 18
pig ext install -y plphp -v 17  # PG 17
pig ext install -y plphp -v 16  # PG 16
pig ext install -y plphp -v 15  # PG 15
pig ext install -y plphp -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y plphp_18       # PG 18
dnf install -y plphp_17       # PG 17
dnf install -y plphp_16       # PG 16
dnf install -y plphp_15       # PG 15
dnf install -y plphp_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-plphp   # PG 18
apt install -y postgresql-17-plphp   # PG 17
apt install -y postgresql-16-plphp   # PG 16
apt install -y postgresql-15-plphp   # PG 15
apt install -y postgresql-14-plphp   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION plphp;
```

## 用法

来源：

- [PGXN 2.6.0 README](https://pgxn.org/dist/plphp/2.6.0/README.html)
- [PL/php 语言参考](https://pgxn.org/dist/plphp/2.6.0/doc/plphp.html)
- [plphp 控制文件](https://api.pgxn.org/src/plphp/plphp-2.6.0/plphp.control)
- [PL/php 2.6.0 变更日志](https://api.pgxn.org/src/plphp/plphp-2.6.0/CHANGELOG.md)

`plphp` 把 PHP 作为非可信 PostgreSQL 过程语言嵌入，用于函数、过程、触发器、事件触发器与匿名块。只有在确实需要 PHP API、并能接受代码以 PostgreSQL 服务器操作系统权限运行时才应使用；它不是沙箱语言。

### 核心流程

```sql
CREATE EXTENSION plphp;

CREATE FUNCTION php_square(integer)
RETURNS integer
LANGUAGE plphp
AS $$
    return $args[0] * $args[0];
$$;

SELECT php_square(12);
```

PL/php 2.6 支持使用非 ZTS embed SAPI 的 PHP 8.1 至 8.4，以及 PostgreSQL 11 至 18。由于该语言明确属于非可信语言，安装与创建都需要超级用户。

### 主要接口

- `spi_exec(...)`、`spi_prepare(...)`、`spi_exec_prepared(...)`、`spi_query(...)` 与游标辅助函数通过 SPI 访问 PostgreSQL。
- `return_next()` 从集合返回函数输出行。
- `spi_commit()` 与 `spi_rollback()` 在过程中提供事务控制。
- `subtransaction(...)` 创建可捕获的子事务边界。
- `$_TD` 暴露触发器与事件触发器上下文。
- `$_SHARED` 是会话全局存储，`$_SD` 是每个函数私有的会话存储。
- `plphp.on_init`、`plphp.start_proc` 与 `plphp_modules` 用于初始化会话解释器。

可选的 `jsonb_plphp`、`hstore_plphp` 与 `bytea_plphp` 扩展提供原生转换。函数必须声明 `TRANSFORM FOR TYPE ...` 才会使用转换；安装配套扩展不会自动改变所有 PL/php 函数。

### 安全与运维

PL/php 函数可以读写文件、打开网络连接、调用 PHP 能力，并影响 PostgreSQL 操作系统账户可访问的一切。函数所有权与创建权只能授予等同服务器管理员信任级别的角色。若不得不使用高权限包装器，应按常规加固 `SECURITY DEFINER` 与 `search_path`。

SPI 查询文本、动态标识符、会话初始化代码、加载模块与持久解释器状态都需要审查。长时间运行的 PHP 代码会阻塞 PostgreSQL 后端，`$_SHARED` 或 `$_SD` 中保留的内存会持续到会话结束。对不可信值应使用预备语句，限制资源用量，测试取消与错误路径，并在应用代码保留过多状态时回收会话。

2.6 新增每函数 `$_SD` 与二进制安全的 `bytea_plphp` 转换。PostgreSQL 记录的控制版本是 `2.6`，源码发行包版本是 `2.6.0`。

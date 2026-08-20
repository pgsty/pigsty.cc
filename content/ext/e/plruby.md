---
title: "plruby"
linkTitle: "plruby"
description: "将 MRI Ruby 嵌入 PostgreSQL，提供非可信过程语言"
weight: 3160
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/commandprompt/plruby">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">commandprompt/plruby</div>
    <div class="ext-card__desc">https://github.com/commandprompt/plruby</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plruby-2.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plruby-2.5.0.tar.gz</div>
    <div class="ext-card__desc">plruby-2.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plruby`**](/ext/e/plruby) | `2.5` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3160  | [**`plruby`**](/ext/e/plruby) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3161  | [**`jsonb_plruby`**](/ext/e/jsonb_plruby) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 3162  | [**`hstore_plruby`**](/ext/e/hstore_plruby) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 3163  | [**`ltree_plruby`**](/ext/e/ltree_plruby) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`jsonb_plruby`](/ext/e/jsonb_plruby) [`hstore_plruby`](/ext/e/hstore_plruby) [`ltree_plruby`](/ext/e/ltree_plruby) [`plperl`](/ext/e/plperl) [`plpython3u`](/ext/e/plpython3u) [`pllua`](/ext/e/pllua) [`plv8`](/ext/e/plv8) `plrust` |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`hstore_plruby`](/ext/e/hstore_plruby) [`jsonb_plruby`](/ext/e/jsonb_plruby) [`ltree_plruby`](/ext/e/ltree_plruby) |
{.ext-table .ext-table--rel}


> Extension control default_version is 2.5 while the project and package version is 2.5.0; PL/Ruby embeds MRI Ruby 3.x, is untrusted and superuser-only, and requires no preload. RPM builds also provide an llvmjit subpackage.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5` | {{< pgvers "18,17,16,15,14" >}} | `plruby` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `plruby_$v` | `ruby-libs` |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plruby` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
@ el8.x86_64 18 plruby_18 plruby_18-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 63.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plruby_18-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 plruby_18 plruby_18-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 61.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plruby_18-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 plruby_18 plruby_18-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 62.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plruby_18-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 plruby_18 plruby_18-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 61.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plruby_18-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 plruby_18 plruby_18-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 62.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plruby_18-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 plruby_18 plruby_18-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 61.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plruby_18-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 138.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 135.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 135.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 133.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 151.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 148.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 143.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 141.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 140.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-plruby postgresql-18-plruby_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 139.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-18-plruby_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 plruby_17 plruby_17-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 63.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plruby_17-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 plruby_17 plruby_17-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 61.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plruby_17-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 plruby_17 plruby_17-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 62.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plruby_17-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 plruby_17 plruby_17-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 61.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plruby_17-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 plruby_17 plruby_17-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 62.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plruby_17-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 plruby_17 plruby_17-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 61.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plruby_17-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 138.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 135.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 135.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 132.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 168.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 165.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 142.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 141.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 139.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-plruby postgresql-17-plruby_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 138.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-17-plruby_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 plruby_16 plruby_16-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 63.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plruby_16-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 plruby_16 plruby_16-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 61.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plruby_16-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 plruby_16 plruby_16-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 62.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plruby_16-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 plruby_16 plruby_16-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 61.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plruby_16-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 plruby_16 plruby_16-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 62.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plruby_16-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 plruby_16 plruby_16-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 61.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plruby_16-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 138.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 135.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 134.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 132.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 167.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 164.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 142.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 141.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 139.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-plruby postgresql-16-plruby_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 138.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-16-plruby_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 plruby_15 plruby_15-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plruby_15-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 plruby_15 plruby_15-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 62.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plruby_15-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 plruby_15 plruby_15-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 63.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plruby_15-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 plruby_15 plruby_15-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 62.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plruby_15-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 plruby_15 plruby_15-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 62.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plruby_15-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 plruby_15 plruby_15-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 62.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plruby_15-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 137.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 135.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 134.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 132.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 167.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 165.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 142.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 141.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 139.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-plruby postgresql-15-plruby_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 138.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-15-plruby_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 plruby_14 plruby_14-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 63.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/plruby_14-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 plruby_14 plruby_14-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 62.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/plruby_14-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 plruby_14 plruby_14-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 63.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/plruby_14-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 plruby_14 plruby_14-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 62.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/plruby_14-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 plruby_14 plruby_14-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 62.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/plruby_14-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 plruby_14 plruby_14-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 62.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/plruby_14-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 138.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 135.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 134.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 131.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 164.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 162.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 142.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 141.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 139.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-plruby postgresql-14-plruby_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 138.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plruby/postgresql-14-plruby_2.5.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plruby` 扩展的 RPM / DEB 包：

```bash
pig build pkg plruby         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `plruby` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install plruby;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y plruby -v 18  # PG 18
pig ext install -y plruby -v 17  # PG 17
pig ext install -y plruby -v 16  # PG 16
pig ext install -y plruby -v 15  # PG 15
pig ext install -y plruby -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y plruby_18       # PG 18
dnf install -y plruby_17       # PG 17
dnf install -y plruby_16       # PG 16
dnf install -y plruby_15       # PG 15
dnf install -y plruby_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-plruby   # PG 18
apt install -y postgresql-17-plruby   # PG 17
apt install -y postgresql-16-plruby   # PG 16
apt install -y postgresql-15-plruby   # PG 15
apt install -y postgresql-14-plruby   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION plruby;
```

## 用法

来源：

- [PL/Ruby v2.5.0 README](https://github.com/commandprompt/plruby/blob/v2.5.0/README.md)
- [PL/Ruby 语言参考](https://github.com/commandprompt/plruby/blob/v2.5.0/doc/plruby.md)
- [PL/Ruby 实用手册](https://github.com/commandprompt/plruby/blob/v2.5.0/doc/cookbook.md)
- [PL/Ruby v2.5.0 控制文件](https://github.com/commandprompt/plruby/blob/v2.5.0/plruby.control)
- [PL/Ruby 变更日志](https://github.com/commandprompt/plruby/blob/v2.5.0/CHANGELOG.md)

`plruby` 是由 Command Prompt 维护的过程语言扩展，可将 Ruby 3 嵌入 PostgreSQL。软件包发行版 2.5.0 安装的 SQL 扩展版本为 `2.5`。它支持标量函数和集合返回函数、触发器、事件触发器、过程、匿名 `DO` 块、SPI 查询、游标以及预备计划。

### 创建函数

```sql
CREATE EXTENSION plruby;

CREATE FUNCTION ruby_add(integer, integer)
RETURNS integer
LANGUAGE plruby
AS $$
  args[0] + args[1]
$$;

SELECT ruby_add(2, 3);
```

参数通过 `args` 暴露；Ruby 的最后一个表达式会成为 SQL 返回值。语言参考中记录了 PostgreSQL 标量、数组、复合类型和 record 的转换规则。

### 集合返回函数

使用 `return_next` 从集合返回函数中发出行：

```sql
CREATE FUNCTION ruby_series(integer)
RETURNS SETOF integer
LANGUAGE plruby
AS $$
  1.upto(args[0]) { |n| return_next(n) }
$$;

SELECT * FROM ruby_series(3);
```

### SPI 与数据库操作

PL/Ruby 提供 PostgreSQL 的服务器编程接口，用于执行 SQL、使用预备计划和游标。请通过参数传递 SQL 值，不要将其插入命令文本；当会话不再需要长期存活的游标或预备状态时，应将其释放。

在 PostgreSQL 允许 `COMMIT` 或 `ROLLBACK` 的场景中，过程可以使用文档所述的事务控制接口。函数和触发器仍受 PostgreSQL 常规事务限制约束。

### 触发器与会话状态

触发器函数通过 `$_TD` 接收触发器元数据，并返回 PL/Ruby 文档规定的行操作。它还支持事件触发器、匿名 `DO` 块、后端本地会话数据和共享数据。这些功能在数据库后端内部运行，因此异常、阻塞调用或内存泄漏都会直接影响该后端。

### 版本 2.5.0

- `bytea` 现在映射为原始且能安全包含 NUL 的 Ruby `String`，编码为 `ASCII-8BIT`，而不再映射为 PostgreSQL 十六进制文本。这是一项破坏性转换变更：请审查解析或构造 `\x...` 字符串的函数，并显式构建字节，例如使用 `Array#pack`。
- `$_SD` 新增函数级状态，在同一会话的多次调用之间持续存在，并在函数重新编译时重置。`$_SHARED` 仍是在 PL/Ruby 函数之间共享的会话级状态。
- `spi_colnames`、`spi_coltypes` 和 `spi_coltypmods` 可提供结果列元数据，`ltree_plruby` 则新增可选启用的 `ltree` 转换。
- 安装 2.5.0 共享库和 SQL 文件后，请在每个已经安装该扩展的数据库中运行 `ALTER EXTENSION plruby UPDATE`。

### 安全与要求

- `plruby` 是不受信任的语言。Ruby 3 没有安全的进程内沙箱，因此只有超级用户可以创建 PL/Ruby 函数，代码会以 PostgreSQL 服务器进程的操作系统权限执行。
- 请将所有 PL/Ruby 源码当作特权服务器代码进行审查。绝不能允许租户或普通应用角色提交任意 Ruby 代码。
- 上游 v2.5.0 支持 PostgreSQL 11-18 和 Ruby 3.x。当前 Pigsty 软件包面向 PostgreSQL 14-18。
- 不要求设置 `shared_preload_libraries`。服务器端库被替换后，现有会话必须重新连接，才能确保新的运行时已经生效。
- `jsonb_plruby`、`hstore_plruby` 和 `ltree_plruby` 是配套转换扩展。函数必须显式声明 `TRANSFORM FOR TYPE ...`，才能接收原生 Ruby 结构，而不是走常规 datum 包装器/转换路径。

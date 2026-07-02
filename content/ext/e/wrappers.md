---
title: "wrappers"
linkTitle: "wrappers"
description: "Supabase提供的外部数据源包装器捆绑包"
weight: 8500
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supabase/wrappers">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supabase/wrappers</div>
    <div class="ext-card__desc">https://github.com/supabase/wrappers</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/wrappers-0.6.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">wrappers-0.6.1.tar.gz</div>
    <div class="ext-card__desc">wrappers-0.6.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`wrappers`**](/ext/e/wrappers) | `0.6.1` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8500  | [**`wrappers`**](/ext/e/wrappers) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`multicorn`](/ext/e/multicorn) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`pgspider_ext`](/ext/e/pgspider_ext) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pgrx patched to 0.18.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16,15,14" >}} | `wrappers` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16,15,14" >}} | `wrappers_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-wrappers` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
@ el8.x86_64 18 wrappers_18 wrappers_18-0.6.1-1PIGSTY.el8.x86_64.rpm pigsty 0.6.1 460.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_18-0.6.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 wrappers_18 wrappers_18-0.6.1-1PIGSTY.el8.aarch64.rpm pigsty 0.6.1 440.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_18-0.6.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 wrappers_18 wrappers_18-0.6.1-1PIGSTY.el9.x86_64.rpm pigsty 0.6.1 468.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_18-0.6.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 wrappers_18 wrappers_18-0.6.1-1PIGSTY.el9.aarch64.rpm pigsty 0.6.1 465.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_18-0.6.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 wrappers_18 wrappers_18-0.6.1-1PIGSTY.el10.x86_64.rpm pigsty 0.6.1 467.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_18-0.6.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 wrappers_18 wrappers_18-0.6.1-1PIGSTY.el10.aarch64.rpm pigsty 0.6.1 465.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_18-0.6.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 372.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 331.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 372.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 332.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 406.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 388.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 405.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 383.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 400.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 381.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-18-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 wrappers_17 wrappers_17-0.6.1-1PIGSTY.el8.x86_64.rpm pigsty 0.6.1 459.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_17-0.6.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 wrappers_17 wrappers_17-0.6.1-1PIGSTY.el8.aarch64.rpm pigsty 0.6.1 440.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_17-0.6.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 wrappers_17 wrappers_17-0.6.1-1PIGSTY.el9.x86_64.rpm pigsty 0.6.1 466.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_17-0.6.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 wrappers_17 wrappers_17-0.6.1-1PIGSTY.el9.aarch64.rpm pigsty 0.6.1 464.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_17-0.6.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 wrappers_17 wrappers_17-0.6.1-1PIGSTY.el10.x86_64.rpm pigsty 0.6.1 466.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_17-0.6.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 wrappers_17 wrappers_17-0.6.1-1PIGSTY.el10.aarch64.rpm pigsty 0.6.1 464.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_17-0.6.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 371.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 331.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 371.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 331.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 406.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 388.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 405.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 383.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 400.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 381.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-17-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 wrappers_16 wrappers_16-0.6.1-1PIGSTY.el8.x86_64.rpm pigsty 0.6.1 459.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_16-0.6.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 wrappers_16 wrappers_16-0.6.1-1PIGSTY.el8.aarch64.rpm pigsty 0.6.1 439.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_16-0.6.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 wrappers_16 wrappers_16-0.6.1-1PIGSTY.el9.x86_64.rpm pigsty 0.6.1 466.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_16-0.6.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 wrappers_16 wrappers_16-0.6.1-1PIGSTY.el9.aarch64.rpm pigsty 0.6.1 464.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_16-0.6.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 wrappers_16 wrappers_16-0.6.1-1PIGSTY.el10.x86_64.rpm pigsty 0.6.1 466.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_16-0.6.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 wrappers_16 wrappers_16-0.6.1-1PIGSTY.el10.aarch64.rpm pigsty 0.6.1 464.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_16-0.6.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 371.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 332.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 372.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 331.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 406.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 388.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 405.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 383.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 400.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 381.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-16-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 wrappers_15 wrappers_15-0.6.1-1PIGSTY.el8.x86_64.rpm pigsty 0.6.1 454.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_15-0.6.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 wrappers_15 wrappers_15-0.6.1-1PIGSTY.el8.aarch64.rpm pigsty 0.6.1 435.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_15-0.6.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 wrappers_15 wrappers_15-0.6.1-1PIGSTY.el9.x86_64.rpm pigsty 0.6.1 461.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_15-0.6.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 wrappers_15 wrappers_15-0.6.1-1PIGSTY.el9.aarch64.rpm pigsty 0.6.1 460.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_15-0.6.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 wrappers_15 wrappers_15-0.6.1-1PIGSTY.el10.x86_64.rpm pigsty 0.6.1 462.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_15-0.6.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 wrappers_15 wrappers_15-0.6.1-1PIGSTY.el10.aarch64.rpm pigsty 0.6.1 460.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_15-0.6.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 368.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 328.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 368.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 328.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 406.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 385.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 401.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 380.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 400.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 378.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-15-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 wrappers_14 wrappers_14-0.6.1-1PIGSTY.el8.x86_64.rpm pigsty 0.6.1 454.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_14-0.6.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 wrappers_14 wrappers_14-0.6.1-1PIGSTY.el8.aarch64.rpm pigsty 0.6.1 435.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_14-0.6.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 wrappers_14 wrappers_14-0.6.1-1PIGSTY.el9.x86_64.rpm pigsty 0.6.1 461.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_14-0.6.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 wrappers_14 wrappers_14-0.6.1-1PIGSTY.el9.aarch64.rpm pigsty 0.6.1 459.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_14-0.6.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 wrappers_14 wrappers_14-0.6.1-1PIGSTY.el10.x86_64.rpm pigsty 0.6.1 461.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_14-0.6.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 wrappers_14 wrappers_14-0.6.1-1PIGSTY.el10.aarch64.rpm pigsty 0.6.1 460.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_14-0.6.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb pigsty 0.6.1 368.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb pigsty 0.6.1 329.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb pigsty 0.6.1 368.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb pigsty 0.6.1 329.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb pigsty 0.6.1 406.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb pigsty 0.6.1 385.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~noble_amd64.deb pigsty 0.6.1 401.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~noble_arm64.deb pigsty 0.6.1 380.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb pigsty 0.6.1 400.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb pigsty 0.6.1 378.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-14-wrappers_0.6.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `wrappers` 扩展的 RPM / DEB 包：

```bash
pig build pkg wrappers         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `wrappers` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install wrappers;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y wrappers -v 18  # PG 18
pig ext install -y wrappers -v 17  # PG 17
pig ext install -y wrappers -v 16  # PG 16
pig ext install -y wrappers -v 15  # PG 15
pig ext install -y wrappers -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y wrappers_18       # PG 18
dnf install -y wrappers_17       # PG 17
dnf install -y wrappers_16       # PG 16
dnf install -y wrappers_15       # PG 15
dnf install -y wrappers_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-wrappers   # PG 18
apt install -y postgresql-17-wrappers   # PG 17
apt install -y postgresql-16-wrappers   # PG 16
apt install -y postgresql-15-wrappers   # PG 15
apt install -y postgresql-14-wrappers   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION wrappers;
```




## 用法

来源：[official README](https://github.com/supabase/wrappers/blob/v0.6.1/README.md)、[official docs](https://fdw.dev/)、[v0.6.1 release](https://github.com/supabase/wrappers/releases/tag/v0.6.1)

`wrappers` 既是一个用 Rust 编写 PostgreSQL foreign data wrapper 的框架，也是 Supabase 维护的一组 FDW 打包集合。单个扩展会安装多种 wrapper 实现，然后每个 foreign server 再选择自己需要的具体 wrapper 类型。

```sql
CREATE EXTENSION wrappers;
```

### 典型流程

先为某个 wrapper 创建 server，再通过 foreign table 暴露远端数据：

```sql
CREATE SERVER stripe_server
  FOREIGN DATA WRAPPER stripe_wrapper
  OPTIONS (
    api_key_id 'stripe_api_key',
    api_url 'https://api.stripe.com/v1/'
  );

CREATE FOREIGN TABLE stripe_customers (
  id text,
  email text,
  name text,
  description text,
  created timestamp,
  attrs jsonb
)
  SERVER stripe_server
  OPTIONS (
    object 'customers',
    rowid_column 'id'
  );
```

### 覆盖范围

上游提供了用于 BigQuery、ClickHouse、DuckDB、DynamoDB、MySQL/Doris、Redis、S3、S3 Vectors、Stripe、Snowflake、Slack、Notion、OpenAPI、Infura 等数据库与服务的 wrappers。不同 wrapper 的读写支持差异很大，但 `WHERE`、`ORDER BY` 和 `LIMIT` 下推是框架的核心能力。

### 版本说明

`v0.6.1` 保持了相同的扩展模型，但扩展了 wrapper 目录和行为。官方发布说明特别提到：

- 新增 DynamoDB FDW 支持
- 通过 `mysql_fdw` 支持 MySQL/Doris
- `iceberg_fdw` 支持 schema evolution
- `_id` options 可按名称查找 vault secret
- 支持 COUNT、SUM、AVG、MIN 和 MAX 的 aggregate pushdown，包括 MySQL FDW 支持
- parameter-state refresh/rescan 修复和 dependency/security updates

### 注意事项

- 各 wrapper 的选项、支持的对象和写能力差异很大；使用时应查阅官方目录页，确认具体 FDW 的能力。
- 文档警告，如果 materialized view 依赖 foreign table，logical restore 可能失败，因此应避免这种模式，或依赖物理备份。

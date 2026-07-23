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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/wrappers-0.6.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">wrappers-0.6.2.tar.gz</div>
    <div class="ext-card__desc">wrappers-0.6.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`wrappers`**](/ext/e/wrappers) | `0.6.2` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8500  | [**`wrappers`**](/ext/e/wrappers) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`multicorn`](/ext/e/multicorn) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`pgspider_ext`](/ext/e/pgspider_ext) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.2` | {{< pgvers "18,17,16,15,14" >}} | `wrappers` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.2` | {{< pgvers "18,17,16,15,14" >}} | `wrappers_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-wrappers` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| u26.x86_64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
| u26.aarch64 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 | AVAIL PIGSTY 0.6.2 1 |
@ el8.x86_64 18 wrappers_18 wrappers_18-0.6.2-1PIGSTY.el8.x86_64.rpm pigsty 0.6.2 461.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_18-0.6.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 wrappers_18 wrappers_18-0.6.2-1PIGSTY.el8.aarch64.rpm pigsty 0.6.2 440.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_18-0.6.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 wrappers_18 wrappers_18-0.6.2-1PIGSTY.el9.x86_64.rpm pigsty 0.6.2 467.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_18-0.6.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 wrappers_18 wrappers_18-0.6.2-1PIGSTY.el9.aarch64.rpm pigsty 0.6.2 465.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_18-0.6.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 wrappers_18 wrappers_18-0.6.2-1PIGSTY.el10.x86_64.rpm pigsty 0.6.2 466.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_18-0.6.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 wrappers_18 wrappers_18-0.6.2-1PIGSTY.el10.aarch64.rpm pigsty 0.6.2 465.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_18-0.6.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb pigsty 0.6.2 372.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb pigsty 0.6.2 331.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb pigsty 0.6.2 372.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb pigsty 0.6.2 331.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb pigsty 0.6.2 411.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb pigsty 0.6.2 388.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~noble_amd64.deb pigsty 0.6.2 406.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~noble_arm64.deb pigsty 0.6.2 383.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb pigsty 0.6.2 403.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb pigsty 0.6.2 381.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-18-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 wrappers_17 wrappers_17-0.6.2-1PIGSTY.el8.x86_64.rpm pigsty 0.6.2 460.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_17-0.6.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 wrappers_17 wrappers_17-0.6.2-1PIGSTY.el8.aarch64.rpm pigsty 0.6.2 440.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_17-0.6.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 wrappers_17 wrappers_17-0.6.2-1PIGSTY.el9.x86_64.rpm pigsty 0.6.2 466.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_17-0.6.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 wrappers_17 wrappers_17-0.6.2-1PIGSTY.el9.aarch64.rpm pigsty 0.6.2 464.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_17-0.6.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 wrappers_17 wrappers_17-0.6.2-1PIGSTY.el10.x86_64.rpm pigsty 0.6.2 467.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_17-0.6.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 wrappers_17 wrappers_17-0.6.2-1PIGSTY.el10.aarch64.rpm pigsty 0.6.2 465.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_17-0.6.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb pigsty 0.6.2 372.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb pigsty 0.6.2 332.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb pigsty 0.6.2 372.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb pigsty 0.6.2 331.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb pigsty 0.6.2 410.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb pigsty 0.6.2 388.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~noble_amd64.deb pigsty 0.6.2 405.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~noble_arm64.deb pigsty 0.6.2 383.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb pigsty 0.6.2 403.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb pigsty 0.6.2 381.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-17-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 wrappers_16 wrappers_16-0.6.2-1PIGSTY.el8.x86_64.rpm pigsty 0.6.2 459.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_16-0.6.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 wrappers_16 wrappers_16-0.6.2-1PIGSTY.el8.aarch64.rpm pigsty 0.6.2 439.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_16-0.6.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 wrappers_16 wrappers_16-0.6.2-1PIGSTY.el9.x86_64.rpm pigsty 0.6.2 466.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_16-0.6.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 wrappers_16 wrappers_16-0.6.2-1PIGSTY.el9.aarch64.rpm pigsty 0.6.2 464.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_16-0.6.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 wrappers_16 wrappers_16-0.6.2-1PIGSTY.el10.x86_64.rpm pigsty 0.6.2 466.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_16-0.6.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 wrappers_16 wrappers_16-0.6.2-1PIGSTY.el10.aarch64.rpm pigsty 0.6.2 464.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_16-0.6.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb pigsty 0.6.2 372.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb pigsty 0.6.2 332.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb pigsty 0.6.2 371.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb pigsty 0.6.2 332.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb pigsty 0.6.2 410.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb pigsty 0.6.2 388.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~noble_amd64.deb pigsty 0.6.2 405.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~noble_arm64.deb pigsty 0.6.2 383.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb pigsty 0.6.2 403.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb pigsty 0.6.2 381.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-16-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 wrappers_15 wrappers_15-0.6.2-1PIGSTY.el8.x86_64.rpm pigsty 0.6.2 455.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_15-0.6.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 wrappers_15 wrappers_15-0.6.2-1PIGSTY.el8.aarch64.rpm pigsty 0.6.2 435.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_15-0.6.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 wrappers_15 wrappers_15-0.6.2-1PIGSTY.el9.x86_64.rpm pigsty 0.6.2 463.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_15-0.6.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 wrappers_15 wrappers_15-0.6.2-1PIGSTY.el9.aarch64.rpm pigsty 0.6.2 460.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_15-0.6.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 wrappers_15 wrappers_15-0.6.2-1PIGSTY.el10.x86_64.rpm pigsty 0.6.2 462.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_15-0.6.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 wrappers_15 wrappers_15-0.6.2-1PIGSTY.el10.aarch64.rpm pigsty 0.6.2 461.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_15-0.6.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb pigsty 0.6.2 368.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb pigsty 0.6.2 329.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb pigsty 0.6.2 368.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb pigsty 0.6.2 328.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb pigsty 0.6.2 406.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb pigsty 0.6.2 384.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~noble_amd64.deb pigsty 0.6.2 401.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~noble_arm64.deb pigsty 0.6.2 380.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb pigsty 0.6.2 399.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb pigsty 0.6.2 378.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-15-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 wrappers_14 wrappers_14-0.6.2-1PIGSTY.el8.x86_64.rpm pigsty 0.6.2 454.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/wrappers_14-0.6.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 wrappers_14 wrappers_14-0.6.2-1PIGSTY.el8.aarch64.rpm pigsty 0.6.2 435.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/wrappers_14-0.6.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 wrappers_14 wrappers_14-0.6.2-1PIGSTY.el9.x86_64.rpm pigsty 0.6.2 462.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/wrappers_14-0.6.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 wrappers_14 wrappers_14-0.6.2-1PIGSTY.el9.aarch64.rpm pigsty 0.6.2 459.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/wrappers_14-0.6.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 wrappers_14 wrappers_14-0.6.2-1PIGSTY.el10.x86_64.rpm pigsty 0.6.2 462.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/wrappers_14-0.6.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 wrappers_14 wrappers_14-0.6.2-1PIGSTY.el10.aarch64.rpm pigsty 0.6.2 460.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/wrappers_14-0.6.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb pigsty 0.6.2 368.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb pigsty 0.6.2 329.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb pigsty 0.6.2 368.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb pigsty 0.6.2 330.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb pigsty 0.6.2 406.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb pigsty 0.6.2 385.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~noble_amd64.deb pigsty 0.6.2 401.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~noble_arm64.deb pigsty 0.6.2 380.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb pigsty 0.6.2 399.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb pigsty 0.6.2 378.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/w/wrappers/postgresql-14-wrappers_0.6.2-1PIGSTY~resolute_arm64.deb
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

来源：

- [Wrappers v0.6.2 README](https://github.com/supabase/wrappers/blob/v0.6.2/README.md)
- [官方FDW文档](https://fdw.dev/)
- [v0.6.2版本发布说明](https://github.com/supabase/wrappers/releases/tag/v0.6.2)
- [MongoDB FDW文档](https://fdw.dev/catalog/mongodb/)
- [安全指导](https://fdw.dev/guides/security/)

`wrappers` 是一个用 Rust 编写的 PostgreSQL 外部数据封装框架，同时也是一系列由 Supabase 维护的 FDWs 的打包集合。安装一个扩展即可实现多种封装器的实现，每个外部服务器可以选择它需要的具体封装器类型。

```sql
CREATE EXTENSION wrappers;
```

### 通常的工作流程

为一个封装器创建一个服务器，然后通过外部表暴露远程数据：

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

### 包含的内容

上游版本提供了对 BigQuery、ClickHouse、DuckDB、DynamoDB、MySQL/Doris、Redis、S3、S3 Vectors、Stripe、Snowflake、Slack、Notion、OpenAPI、Infura 等数据库和服务的封装器。读写支持因封装器而异，但 `WHERE`、`ORDER BY` 和 `LIMIT` 的下推是框架的核心功能。

### 版本 0.6.2

`v0.6.2`版本保持了相同的扩展模型，并增加了以下内容：

- MongoDB FDW 支持读写操作
- 在 WASM 封装器中使用会话变量凭证进行每次请求的身份验证
- OpenAPI FDW 的 RFC 8288 `Link` 头部分页支持
- 运行时、依赖和封装器特定的修复，详情参见发布说明

每个封装器的具体页面仍然是服务器选项、外部表列、下推和支持写操作的权威来源。

### 注意事项

- 封装器特定的选项、支持的对象以及写操作因封装器而异；请查阅官方目录页面以获取您使用的具体 FDW 的确切信息。
- 文档警告说，当物化视图依赖外部表时，逻辑恢复可能会失败，请避免这种模式或依赖于物理备份。
- 外部表本身不提供安全边界。请将它们保留在私有模式中，并谨慎授予访问权限，使用可用的最小特权远程凭证，并对暴露或缓存远程数据的本地表应用行级安全性。
- 请将 API 密钥和令牌存储在支持的秘密存储中或每次请求的凭据机制中，而不是将其嵌入到版本控制系统中的 SQL 中。

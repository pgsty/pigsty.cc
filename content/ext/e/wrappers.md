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
  <a class="ext-card ext-card--source" href="wrappers-0.5.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">wrappers-0.5.7.tar.gz</div>
    <div class="ext-card__desc">wrappers-0.5.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`wrappers`**](/ext/e/wrappers) | `0.5.7` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8500  | [**`wrappers`**](/ext/e/wrappers) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`multicorn`](/ext/e/multicorn) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`pgspider_ext`](/ext/e/pgspider_ext) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.7` | {{< pgvers "18,17,16,15,14" >}} | `wrappers` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.7` | {{< pgvers "18,17,16,15,14" >}} | `wrappers_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-wrappers` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| el8.aarch64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| el9.x86_64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| el9.aarch64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| el10.x86_64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| el10.aarch64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| d12.x86_64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| d13.aarch64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| u22.x86_64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 | AVAIL PIGSTY 0.5.7 1 |
@ el8.x86_64 18 wrappers_18 wrappers_18-0.5.7-1PIGSTY.el8.x86_64.rpm pigsty 0.5.7 240.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/wrappers_18-0.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 wrappers_18 wrappers_18-0.5.7-1PIGSTY.el8.aarch64.rpm pigsty 0.5.7 155.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/wrappers_18-0.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 wrappers_18 wrappers_18-0.5.7-1PIGSTY.el9.x86_64.rpm pigsty 0.5.7 251.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/wrappers_18-0.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 wrappers_18 wrappers_18-0.5.7-1PIGSTY.el9.aarch64.rpm pigsty 0.5.7 166.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/wrappers_18-0.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 wrappers_18 wrappers_18-0.5.7-1PIGSTY.el10.x86_64.rpm pigsty 0.5.7 250.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/wrappers_18-0.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 wrappers_18 wrappers_18-0.5.7-1PIGSTY.el10.aarch64.rpm pigsty 0.5.7 166.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/wrappers_18-0.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb pigsty 0.5.7 200.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-18-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb pigsty 0.5.7 122.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-18-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb pigsty 0.5.7 200.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-18-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb pigsty 0.5.7 122.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-18-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb pigsty 0.5.7 224.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-18-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb pigsty 0.5.7 141.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-18-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-wrappers postgresql-18-wrappers_0.5.7-1PIGSTY~noble_amd64.deb pigsty 0.5.7 221.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-18-wrappers_0.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-wrappers postgresql-18-wrappers_0.5.7-1PIGSTY~noble_arm64.deb pigsty 0.5.7 139.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-18-wrappers_0.5.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 wrappers_17 wrappers_17-0.5.7-1PIGSTY.el8.x86_64.rpm pigsty 0.5.7 240.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/wrappers_17-0.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 wrappers_17 wrappers_17-0.5.7-1PIGSTY.el8.aarch64.rpm pigsty 0.5.7 155.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/wrappers_17-0.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 wrappers_17 wrappers_17-0.5.7-1PIGSTY.el9.x86_64.rpm pigsty 0.5.7 250.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/wrappers_17-0.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 wrappers_17 wrappers_17-0.5.7-1PIGSTY.el9.aarch64.rpm pigsty 0.5.7 166.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/wrappers_17-0.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 wrappers_17 wrappers_17-0.5.7-1PIGSTY.el10.x86_64.rpm pigsty 0.5.7 250.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/wrappers_17-0.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 wrappers_17 wrappers_17-0.5.7-1PIGSTY.el10.aarch64.rpm pigsty 0.5.7 166.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/wrappers_17-0.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb pigsty 0.5.7 200.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-17-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb pigsty 0.5.7 122.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-17-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb pigsty 0.5.7 200.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-17-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb pigsty 0.5.7 122.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-17-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb pigsty 0.5.7 223.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-17-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb pigsty 0.5.7 141.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-17-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-wrappers postgresql-17-wrappers_0.5.7-1PIGSTY~noble_amd64.deb pigsty 0.5.7 221.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-17-wrappers_0.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-wrappers postgresql-17-wrappers_0.5.7-1PIGSTY~noble_arm64.deb pigsty 0.5.7 140.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-17-wrappers_0.5.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 wrappers_16 wrappers_16-0.5.7-1PIGSTY.el8.x86_64.rpm pigsty 0.5.7 240.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/wrappers_16-0.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 wrappers_16 wrappers_16-0.5.7-1PIGSTY.el8.aarch64.rpm pigsty 0.5.7 155.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/wrappers_16-0.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 wrappers_16 wrappers_16-0.5.7-1PIGSTY.el9.x86_64.rpm pigsty 0.5.7 250.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/wrappers_16-0.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 wrappers_16 wrappers_16-0.5.7-1PIGSTY.el9.aarch64.rpm pigsty 0.5.7 166.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/wrappers_16-0.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 wrappers_16 wrappers_16-0.5.7-1PIGSTY.el10.x86_64.rpm pigsty 0.5.7 250.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/wrappers_16-0.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 wrappers_16 wrappers_16-0.5.7-1PIGSTY.el10.aarch64.rpm pigsty 0.5.7 166.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/wrappers_16-0.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb pigsty 0.5.7 200.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-16-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb pigsty 0.5.7 122.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-16-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb pigsty 0.5.7 200.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-16-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb pigsty 0.5.7 122.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-16-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb pigsty 0.5.7 223.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-16-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb pigsty 0.5.7 141.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-16-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-wrappers postgresql-16-wrappers_0.5.7-1PIGSTY~noble_amd64.deb pigsty 0.5.7 221.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-16-wrappers_0.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-wrappers postgresql-16-wrappers_0.5.7-1PIGSTY~noble_arm64.deb pigsty 0.5.7 140.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-16-wrappers_0.5.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 wrappers_15 wrappers_15-0.5.7-1PIGSTY.el8.x86_64.rpm pigsty 0.5.7 239.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/wrappers_15-0.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 wrappers_15 wrappers_15-0.5.7-1PIGSTY.el8.aarch64.rpm pigsty 0.5.7 155.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/wrappers_15-0.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 wrappers_15 wrappers_15-0.5.7-1PIGSTY.el9.x86_64.rpm pigsty 0.5.7 250.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/wrappers_15-0.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 wrappers_15 wrappers_15-0.5.7-1PIGSTY.el9.aarch64.rpm pigsty 0.5.7 166.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/wrappers_15-0.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 wrappers_15 wrappers_15-0.5.7-1PIGSTY.el10.x86_64.rpm pigsty 0.5.7 250.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/wrappers_15-0.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 wrappers_15 wrappers_15-0.5.7-1PIGSTY.el10.aarch64.rpm pigsty 0.5.7 166.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/wrappers_15-0.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb pigsty 0.5.7 200.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-15-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb pigsty 0.5.7 122.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-15-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb pigsty 0.5.7 200.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-15-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb pigsty 0.5.7 122.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-15-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb pigsty 0.5.7 223.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-15-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb pigsty 0.5.7 141.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-15-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-wrappers postgresql-15-wrappers_0.5.7-1PIGSTY~noble_amd64.deb pigsty 0.5.7 221.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-15-wrappers_0.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-wrappers postgresql-15-wrappers_0.5.7-1PIGSTY~noble_arm64.deb pigsty 0.5.7 139.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-15-wrappers_0.5.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 wrappers_14 wrappers_14-0.5.7-1PIGSTY.el8.x86_64.rpm pigsty 0.5.7 239.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/wrappers_14-0.5.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 wrappers_14 wrappers_14-0.5.7-1PIGSTY.el8.aarch64.rpm pigsty 0.5.7 155.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/wrappers_14-0.5.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 wrappers_14 wrappers_14-0.5.7-1PIGSTY.el9.x86_64.rpm pigsty 0.5.7 250.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/wrappers_14-0.5.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 wrappers_14 wrappers_14-0.5.7-1PIGSTY.el9.aarch64.rpm pigsty 0.5.7 166.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/wrappers_14-0.5.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 wrappers_14 wrappers_14-0.5.7-1PIGSTY.el10.x86_64.rpm pigsty 0.5.7 250.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/wrappers_14-0.5.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 wrappers_14 wrappers_14-0.5.7-1PIGSTY.el10.aarch64.rpm pigsty 0.5.7 166.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/wrappers_14-0.5.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb pigsty 0.5.7 200.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-14-wrappers_0.5.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb pigsty 0.5.7 122.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/w/wrappers/postgresql-14-wrappers_0.5.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb pigsty 0.5.7 200.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-14-wrappers_0.5.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb pigsty 0.5.7 122.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/w/wrappers/postgresql-14-wrappers_0.5.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb pigsty 0.5.7 223.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-14-wrappers_0.5.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb pigsty 0.5.7 141.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/w/wrappers/postgresql-14-wrappers_0.5.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-wrappers postgresql-14-wrappers_0.5.7-1PIGSTY~noble_amd64.deb pigsty 0.5.7 221.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-14-wrappers_0.5.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-wrappers postgresql-14-wrappers_0.5.7-1PIGSTY~noble_arm64.deb pigsty 0.5.7 139.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/w/wrappers/postgresql-14-wrappers_0.5.7-1PIGSTY~noble_arm64.deb
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

> [wrappers: Supabase 开发的外部数据包装器](https://github.com/supabase/wrappers)

Supabase Wrappers 是一个构建 PostgreSQL 外部数据包装器（FDW）的框架，提供 30 多个预构建的连接器，用于云服务、数据库和 API。支持 WHERE、ORDER BY 和 LIMIT 下推，部分包装器还支持数据修改（INSERT/UPDATE/DELETE）。

### 可用包装器

| 类别 | 包装器 |
|----------|----------|
| **数据库** | ClickHouse、BigQuery、Snowflake、DuckDB、SQL Server、Redis、PostgreSQL |
| **存储** | AWS S3、Cloudflare D1、Apache Iceberg |
| **SaaS/API** | Stripe、Firebase、Airtable、Auth0、Notion、Slack、HubSpot、Shopify |
| **认证** | AWS Cognito、Clerk、Auth0 |
| **其他** | OpenAPI、Logflare、Calendly、Cal.com、Paddle、Orb、Infura、Gravatar |

### 示例（Stripe）

```sql
CREATE EXTENSION wrappers;

CREATE SERVER stripe_server
  FOREIGN DATA WRAPPER stripe_wrapper
  OPTIONS (
    api_key_id '<key_ID>',
    api_url 'https://api.stripe.com/v1/',
    api_version '2024-06-20'
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

SELECT id, email, name FROM stripe_customers WHERE email LIKE '%@example.com';
```

`rowid_column` 选项是 INSERT/UPDATE/DELETE 支持所必需的。`attrs` 列提供以 JSON 形式访问额外元数据的能力。

每个包装器使用自己的 `FOREIGN DATA WRAPPER` 名称（例如 `stripe_wrapper`、`firebase_wrapper`、`clickhouse_wrapper`），但它们都通过单一的 `wrappers` 扩展安装。请参阅[文档](https://fdw.dev)了解各包装器的特定选项和支持的对象。

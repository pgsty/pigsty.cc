---
title: "pglinter"
linkTitle: "pglinter"
description: "PG数据库规则检查插件"
weight: 5090
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pmpetit/pglinter">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pmpetit/pglinter</div>
    <div class="ext-card__desc">https://github.com/pmpetit/pglinter</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pglinter-1.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pglinter-1.1.1.tar.gz</div>
    <div class="ext-card__desc">pglinter-1.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pglinter`**](/ext/e/pglinter) | `1.1.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5090  | [**`pglinter`**](/ext/e/pglinter) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`amcheck`](/ext/e/amcheck) [`supautils`](/ext/e/supautils) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pglinter` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pglinter_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pglinter` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
@ el8.x86_64 18 pglinter_18 pglinter_18-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 578.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_18-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pglinter_18 pglinter_18-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 441.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_18-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pglinter_18 pglinter_18-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 593.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_18-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pglinter_18 pglinter_18-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 469.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_18-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pglinter_18 pglinter_18-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 592.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_18-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pglinter_18 pglinter_18-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 469.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_18-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 487.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-18-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 357.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-18-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 487.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-18-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 357.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-18-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 540.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-18-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 416.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-18-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 535.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-18-pglinter_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 410.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-18-pglinter_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pglinter_17 pglinter_17-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 578.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_17-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pglinter_17 pglinter_17-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 442.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_17-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pglinter_17 pglinter_17-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 592.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_17-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pglinter_17 pglinter_17-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 471.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_17-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pglinter_17 pglinter_17-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 592.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_17-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pglinter_17 pglinter_17-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 471.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_17-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 487.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-17-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 358.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-17-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 487.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-17-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 358.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-17-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 540.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-17-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 417.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-17-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 535.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-17-pglinter_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 412.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-17-pglinter_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pglinter_16 pglinter_16-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 578.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_16-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pglinter_16 pglinter_16-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 441.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_16-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pglinter_16 pglinter_16-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 593.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_16-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pglinter_16 pglinter_16-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 469.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_16-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pglinter_16 pglinter_16-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 593.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_16-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pglinter_16 pglinter_16-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 469.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_16-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 487.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-16-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 357.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-16-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 487.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-16-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 358.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-16-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 540.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-16-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 416.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-16-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 535.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-16-pglinter_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 411.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-16-pglinter_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pglinter_15 pglinter_15-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 578.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_15-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pglinter_15 pglinter_15-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 441.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_15-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pglinter_15 pglinter_15-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 592.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_15-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pglinter_15 pglinter_15-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 469.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_15-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pglinter_15 pglinter_15-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 592.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_15-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pglinter_15 pglinter_15-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 469.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_15-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 487.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-15-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 357.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-15-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 487.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-15-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 357.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-15-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 540.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-15-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 416.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-15-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 535.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-15-pglinter_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 410.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-15-pglinter_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pglinter_14 pglinter_14-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 578.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_14-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pglinter_14 pglinter_14-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 441.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_14-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pglinter_14 pglinter_14-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 592.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_14-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pglinter_14 pglinter_14-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 469.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_14-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pglinter_14 pglinter_14-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 592.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_14-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pglinter_14 pglinter_14-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 469.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_14-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 488.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-14-pglinter_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 358.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-14-pglinter_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 487.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-14-pglinter_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 357.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-14-pglinter_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 540.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-14-pglinter_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 416.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-14-pglinter_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 535.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-14-pglinter_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 411.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-14-pglinter_1.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pglinter` 扩展的 RPM / DEB 包：

```bash
pig build pkg pglinter         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pglinter` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pglinter;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pglinter -v 18  # PG 18
pig ext install -y pglinter -v 17  # PG 17
pig ext install -y pglinter -v 16  # PG 16
pig ext install -y pglinter -v 15  # PG 15
pig ext install -y pglinter -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pglinter_18       # PG 18
dnf install -y pglinter_17       # PG 17
dnf install -y pglinter_16       # PG 16
dnf install -y pglinter_15       # PG 15
dnf install -y pglinter_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pglinter   # PG 18
apt install -y postgresql-17-pglinter   # PG 17
apt install -y postgresql-16-pglinter   # PG 16
apt install -y postgresql-15-pglinter   # PG 15
apt install -y postgresql-14-pglinter   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pglinter;
```



## 用法

> [pglinter: PostgreSQL 检查与分析扩展](https://github.com/pmpetit/pglinter)

pglinter 分析你的数据库以发现潜在问题、性能隐患和最佳实践违规。结果以 SARIF 2.1.0 格式输出。

### 运行检查

```sql
SELECT pglinter.check();                                -- 运行所有已启用的规则
SELECT pglinter.check_rule('B001');                     -- 运行特定规则
SELECT pglinter.check('/path/to/results.sarif');        -- 将 SARIF 报告保存到文件
SELECT pglinter.check_rule('B001', '/path/to/b001.sarif');
```

### 规则管理

```sql
SELECT pglinter.show_rules();                -- 显示所有规则及其状态
SELECT pglinter.explain_rule('B001');        -- 获取规则详情和修复建议
SELECT pglinter.enable_rule('B001');         -- 启用特定规则
SELECT pglinter.disable_rule('B001');        -- 禁用特定规则
SELECT pglinter.is_rule_enabled('B001');     -- 检查规则是否已启用
SELECT pglinter.enable_all_rules();
SELECT pglinter.disable_all_rules();
```

### 规则配置

```sql
SELECT pglinter.update_rule_levels('B001', 30, 70);   -- 设置警告/错误阈值
SELECT pglinter.get_rule_levels('B001');               -- 获取当前阈值
SELECT pglinter.export_rules_to_yaml();                -- 将规则导出为 YAML
SELECT pglinter.import_rules_from_yaml('yaml...');     -- 从 YAML 导入规则
```

### 可用规则

**基础（B 系列）：** B001 无主键的表、B002 冗余索引、B003 缺失的外键索引、B004 未使用的索引、B005 大写命名、B006 未使用的表、B007 跨模式外键、B008 外键类型不匹配、B009 共享触发器函数、B010 保留关键字、B011 每个模式多个所有者。

**集群（C 系列）：** C002 不安全的 pg_hba.conf 条目、C003 MD5 密码加密。

**模式（S 系列）：** S001 无默认角色授权、S002 环境前缀/后缀、S003 不安全的 public 模式、S004 系统角色所有权、S005 每个模式多个所有者。

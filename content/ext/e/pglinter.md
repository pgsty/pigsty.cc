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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pglinter-2.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pglinter-2.0.0.tar.gz</div>
    <div class="ext-card__desc">pglinter-2.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pglinter`**](/ext/e/pglinter) | `2.0.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
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
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pglinter` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pglinter_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pglinter` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
@ el8.x86_64 18 pglinter_18 pglinter_18-2.0.0-2PIGSTY.el8.x86_64.rpm pigsty 2.0.0 467.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_18-2.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pglinter_18 pglinter_18-2.0.0-2PIGSTY.el8.aarch64.rpm pigsty 2.0.0 409.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_18-2.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pglinter_18 pglinter_18-2.0.0-2PIGSTY.el9.x86_64.rpm pigsty 2.0.0 470.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_18-2.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pglinter_18 pglinter_18-2.0.0-2PIGSTY.el9.aarch64.rpm pigsty 2.0.0 438.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_18-2.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pglinter_18 pglinter_18-2.0.0-2PIGSTY.el10.x86_64.rpm pigsty 2.0.0 470.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_18-2.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pglinter_18 pglinter_18-2.0.0-2PIGSTY.el10.aarch64.rpm pigsty 2.0.0 439.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_18-2.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 402.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 342.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 402.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 342.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 437.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 399.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 432.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 394.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb pigsty 2.0.0 432.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pglinter postgresql-18-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb pigsty 2.0.0 392.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-18-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pglinter_17 pglinter_17-2.0.0-2PIGSTY.el8.x86_64.rpm pigsty 2.0.0 467.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_17-2.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pglinter_17 pglinter_17-2.0.0-2PIGSTY.el8.aarch64.rpm pigsty 2.0.0 409.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_17-2.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pglinter_17 pglinter_17-2.0.0-2PIGSTY.el9.x86_64.rpm pigsty 2.0.0 470.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_17-2.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pglinter_17 pglinter_17-2.0.0-2PIGSTY.el9.aarch64.rpm pigsty 2.0.0 438.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_17-2.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pglinter_17 pglinter_17-2.0.0-2PIGSTY.el10.x86_64.rpm pigsty 2.0.0 470.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_17-2.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pglinter_17 pglinter_17-2.0.0-2PIGSTY.el10.aarch64.rpm pigsty 2.0.0 438.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_17-2.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 403.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 342.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 403.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 342.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 437.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 398.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 433.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 394.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb pigsty 2.0.0 432.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pglinter postgresql-17-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb pigsty 2.0.0 392.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-17-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pglinter_16 pglinter_16-2.0.0-2PIGSTY.el8.x86_64.rpm pigsty 2.0.0 467.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_16-2.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pglinter_16 pglinter_16-2.0.0-2PIGSTY.el8.aarch64.rpm pigsty 2.0.0 409.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_16-2.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pglinter_16 pglinter_16-2.0.0-2PIGSTY.el9.x86_64.rpm pigsty 2.0.0 470.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_16-2.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pglinter_16 pglinter_16-2.0.0-2PIGSTY.el9.aarch64.rpm pigsty 2.0.0 438.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_16-2.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pglinter_16 pglinter_16-2.0.0-2PIGSTY.el10.x86_64.rpm pigsty 2.0.0 470.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_16-2.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pglinter_16 pglinter_16-2.0.0-2PIGSTY.el10.aarch64.rpm pigsty 2.0.0 438.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_16-2.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 403.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 341.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 403.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 342.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 437.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 398.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 433.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 394.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb pigsty 2.0.0 432.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pglinter postgresql-16-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb pigsty 2.0.0 392.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-16-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pglinter_15 pglinter_15-2.0.0-2PIGSTY.el8.x86_64.rpm pigsty 2.0.0 467.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_15-2.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pglinter_15 pglinter_15-2.0.0-2PIGSTY.el8.aarch64.rpm pigsty 2.0.0 409.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_15-2.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pglinter_15 pglinter_15-2.0.0-2PIGSTY.el9.x86_64.rpm pigsty 2.0.0 470.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_15-2.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pglinter_15 pglinter_15-2.0.0-2PIGSTY.el9.aarch64.rpm pigsty 2.0.0 439.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_15-2.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pglinter_15 pglinter_15-2.0.0-2PIGSTY.el10.x86_64.rpm pigsty 2.0.0 470.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_15-2.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pglinter_15 pglinter_15-2.0.0-2PIGSTY.el10.aarch64.rpm pigsty 2.0.0 439.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_15-2.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 403.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 342.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 403.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 342.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 437.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 398.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 433.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 394.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb pigsty 2.0.0 432.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pglinter postgresql-15-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb pigsty 2.0.0 392.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-15-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pglinter_14 pglinter_14-2.0.0-2PIGSTY.el8.x86_64.rpm pigsty 2.0.0 467.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglinter_14-2.0.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pglinter_14 pglinter_14-2.0.0-2PIGSTY.el8.aarch64.rpm pigsty 2.0.0 408.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglinter_14-2.0.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pglinter_14 pglinter_14-2.0.0-2PIGSTY.el9.x86_64.rpm pigsty 2.0.0 470.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglinter_14-2.0.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pglinter_14 pglinter_14-2.0.0-2PIGSTY.el9.aarch64.rpm pigsty 2.0.0 438.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglinter_14-2.0.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pglinter_14 pglinter_14-2.0.0-2PIGSTY.el10.x86_64.rpm pigsty 2.0.0 470.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglinter_14-2.0.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pglinter_14 pglinter_14-2.0.0-2PIGSTY.el10.aarch64.rpm pigsty 2.0.0 438.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglinter_14-2.0.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb pigsty 2.0.0 403.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb pigsty 2.0.0 342.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb pigsty 2.0.0 403.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb pigsty 2.0.0 341.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb pigsty 2.0.0 437.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb pigsty 2.0.0 398.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~noble_amd64.deb pigsty 2.0.0 433.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~noble_arm64.deb pigsty 2.0.0 393.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb pigsty 2.0.0 432.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pglinter postgresql-14-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb pigsty 2.0.0 392.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglinter/postgresql-14-pglinter_2.0.0-2PIGSTY~resolute_arm64.deb
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

来源：[README](https://github.com/pmpetit/pglinter/blob/2.0.0/README.md)、[how-to](https://github.com/pmpetit/pglinter/blob/2.0.0/docs/how-to/README.md)、[examples](https://github.com/pmpetit/pglinter/blob/2.0.0/docs/examples/README.md)、[rules](https://github.com/pmpetit/pglinter/blob/2.0.0/docs/rules/README.md)、[2.0.0 release](https://github.com/pmpetit/pglinter/releases/tag/2.0.0)

`pglinter` 会分析 PostgreSQL 数据库中的潜在问题、性能问题和最佳实践违规。当前用户文档通过 `pglinter.get_violations()` 暴露检查结果，该函数返回已启用规则的违规行，可过滤，也可连接到 `pg_identify_object()`。

### 运行检查

```sql
SELECT * FROM pglinter.get_violations();
SELECT * FROM pglinter.get_violations() WHERE rule_code = 'B001';

SELECT
  rule_code,
  (pg_identify_object(classid, objid, objsubid)).type AS object_type,
  (pg_identify_object(classid, objid, objsubid)).schema AS object_schema,
  (pg_identify_object(classid, objid, objsubid)).name AS object_name,
  (pg_identify_object(classid, objid, objsubid)).identity AS object_identity
FROM pglinter.get_violations();
```

### 规则管理

```sql
SELECT pglinter.show_rules();                -- Show all rules and their status
SELECT pglinter.explain_rule('B001');        -- Get rule details and suggested fixes
SELECT pglinter.enable_rule('B001');         -- Enable a specific rule
SELECT pglinter.disable_rule('B001');        -- Disable a specific rule
SELECT pglinter.is_rule_enabled('B001');     -- Check if a rule is enabled
SELECT pglinter.enable_all_rules();
SELECT pglinter.disable_all_rules();
SELECT pglinter.show_rule_queries('B001');   -- Inspect the rule query
SELECT pglinter.list_rules();                -- Return a formatted rule list
```

### 规则导入与导出

```sql
SELECT pglinter.export_rules_to_yaml();                -- Export rules to YAML
SELECT pglinter.import_rules_from_yaml('yaml...');     -- Import rules from YAML
SELECT pglinter.export_rules_to_file('/path/to/rules.yaml');
SELECT pglinter.import_rules_from_file('/path/to/rules.yaml');
SELECT pglinter.export_rulemessages_to_yaml();
SELECT pglinter.import_rule_messages_from_yaml('yaml...');
```

### 规则家族

**基础规则（B 系列）：** B001 表缺少主键、B002 冗余索引、B003 外键缺少索引、B004 未使用的索引、B005 大写名称、B006 未使用的表、B007 跨模式外键、B008 外键类型不匹配、B009 共享触发器函数、B010 使用保留关键字、B011 单个模式存在多个所有者、B012 复合主键超过四列、B013 触发器逐行处理且没有 `WHERE` 子句。

**集群规则（C 系列）：** C002 不安全的 pg_hba.conf 条目、C003 使用 MD5 密码加密。

**模式规则（S 系列）：** S001 未设置默认角色授权、S002 名称带环境前缀或后缀、S003 public 模式未加固、S004 对象归系统角色所有、S005 单个模式存在多个所有者。

### 注意事项

版本 `2.0.0` 移除了较旧的 `check()` 和 `check_rule()` 函数；`get_violations()` 现在是唯一的检查 API。当前构建使用 `pgrx` 0.18.1。

上游 `1.1.2` 版本增加了 `B013`。主 README 相比其他文档和导出函数仍有部分滞后，因此本文使用 `get_violations()`，并省略已移除的 `check()` / `check_rule()` 示例。

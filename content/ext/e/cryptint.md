---
title: "cryptint"
linkTitle: "cryptint"
description: "加密INT与BIGINT类型"
weight: 4450
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dverite/cryptint">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dverite/cryptint</div>
    <div class="ext-card__desc">https://github.com/dverite/cryptint</div>
  </a>
  <a class="ext-card ext-card--source" href="cryptint-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">cryptint-1.0.0.tar.gz</div>
    <div class="ext-card__desc">cryptint-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`cryptint`**](/ext/e/cryptint) | `1.0.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4450  | [**`cryptint`**](/ext/e/cryptint) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hashlib`](/ext/e/hashlib) [`shacrypt`](/ext/e/shacrypt) [`pguecc`](/ext/e/pguecc) [`pgcrypto`](/ext/e/pgcrypto) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `cryptint` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `cryptint_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-cryptint` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 cryptint_18 cryptint_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/cryptint_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 cryptint_18 cryptint_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/cryptint_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 cryptint_18 cryptint_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/cryptint_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 cryptint_18 cryptint_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/cryptint_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 cryptint_18 cryptint_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/cryptint_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 cryptint_18 cryptint_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/cryptint_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-cryptint postgresql-18-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-18-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-cryptint postgresql-18-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-18-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-cryptint postgresql-18-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-18-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-cryptint postgresql-18-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-18-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-cryptint postgresql-18-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-18-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-cryptint postgresql-18-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-18-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-cryptint postgresql-18-cryptint_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-18-cryptint_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-cryptint postgresql-18-cryptint_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-18-cryptint_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 cryptint_17 cryptint_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/cryptint_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 cryptint_17 cryptint_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/cryptint_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 cryptint_17 cryptint_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/cryptint_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 cryptint_17 cryptint_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/cryptint_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 cryptint_17 cryptint_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/cryptint_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 cryptint_17 cryptint_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/cryptint_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-cryptint postgresql-17-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-17-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-cryptint postgresql-17-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-17-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-cryptint postgresql-17-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-17-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-cryptint postgresql-17-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-17-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-cryptint postgresql-17-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-17-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-cryptint postgresql-17-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-17-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-cryptint postgresql-17-cryptint_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-17-cryptint_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-cryptint postgresql-17-cryptint_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-17-cryptint_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 cryptint_16 cryptint_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/cryptint_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 cryptint_16 cryptint_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/cryptint_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 cryptint_16 cryptint_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/cryptint_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 cryptint_16 cryptint_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/cryptint_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 cryptint_16 cryptint_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/cryptint_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 cryptint_16 cryptint_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 13.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/cryptint_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-cryptint postgresql-16-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-16-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-cryptint postgresql-16-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-16-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-cryptint postgresql-16-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-16-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-cryptint postgresql-16-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-16-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-cryptint postgresql-16-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-16-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-cryptint postgresql-16-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-16-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-cryptint postgresql-16-cryptint_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-16-cryptint_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-cryptint postgresql-16-cryptint_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-16-cryptint_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 cryptint_15 cryptint_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/cryptint_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 cryptint_15 cryptint_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/cryptint_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 cryptint_15 cryptint_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/cryptint_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 cryptint_15 cryptint_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/cryptint_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 cryptint_15 cryptint_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/cryptint_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 cryptint_15 cryptint_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/cryptint_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-cryptint postgresql-15-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-15-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-cryptint postgresql-15-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-15-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-cryptint postgresql-15-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-15-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-cryptint postgresql-15-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-15-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-cryptint postgresql-15-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-15-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-cryptint postgresql-15-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 14.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-15-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-cryptint postgresql-15-cryptint_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-15-cryptint_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-cryptint postgresql-15-cryptint_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 14.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-15-cryptint_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 cryptint_14 cryptint_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 14.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/cryptint_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 cryptint_14 cryptint_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 14.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/cryptint_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 cryptint_14 cryptint_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/cryptint_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 cryptint_14 cryptint_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 13.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/cryptint_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 cryptint_14 cryptint_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 13.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/cryptint_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 cryptint_14 cryptint_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/cryptint_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-cryptint postgresql-14-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 13.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-14-cryptint_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-cryptint postgresql-14-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/cryptint/postgresql-14-cryptint_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-cryptint postgresql-14-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 13.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-14-cryptint_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-cryptint postgresql-14-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/cryptint/postgresql-14-cryptint_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-cryptint postgresql-14-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-14-cryptint_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-cryptint postgresql-14-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 14.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/cryptint/postgresql-14-cryptint_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-cryptint postgresql-14-cryptint_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-14-cryptint_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-cryptint postgresql-14-cryptint_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 14.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/cryptint/postgresql-14-cryptint_1.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `cryptint` 扩展的 RPM / DEB 包：

```bash
pig build pkg cryptint         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `cryptint` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install cryptint;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y cryptint -v 18  # PG 18
pig ext install -y cryptint -v 17  # PG 17
pig ext install -y cryptint -v 16  # PG 16
pig ext install -y cryptint -v 15  # PG 15
pig ext install -y cryptint -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y cryptint_18       # PG 18
dnf install -y cryptint_17       # PG 17
dnf install -y cryptint_16       # PG 16
dnf install -y cryptint_15       # PG 15
dnf install -y cryptint_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-cryptint   # PG 18
apt install -y postgresql-17-cryptint   # PG 17
apt install -y postgresql-16-cryptint   # PG 16
apt install -y postgresql-15-cryptint   # PG 15
apt install -y postgresql-14-cryptint   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION cryptint;
```

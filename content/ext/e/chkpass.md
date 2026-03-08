---
title: "chkpass"
linkTitle: "chkpass"
description: "数据类型：自动加密的密码"
weight: 3920
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/lacanoid/chkpass">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">lacanoid/chkpass</div>
    <div class="ext-card__desc">https://github.com/lacanoid/chkpass</div>
  </a>
  <a class="ext-card ext-card--source" href="chkpass-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">chkpass-1.0.tar.gz</div>
    <div class="ext-card__desc">chkpass-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`chkpass`**](/ext/e/chkpass) | `1.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3920  | [**`chkpass`**](/ext/e/chkpass) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `chkpass` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `chkpass_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-chkpass` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 chkpass_18 chkpass_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/chkpass_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 chkpass_18 chkpass_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/chkpass_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 chkpass_18 chkpass_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/chkpass_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 chkpass_18 chkpass_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/chkpass_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 chkpass_18 chkpass_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/chkpass_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 chkpass_18 chkpass_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/chkpass_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-chkpass postgresql-18-chkpass_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-18-chkpass_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-chkpass postgresql-18-chkpass_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-18-chkpass_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-chkpass postgresql-18-chkpass_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-18-chkpass_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-chkpass postgresql-18-chkpass_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-18-chkpass_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-chkpass postgresql-18-chkpass_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-18-chkpass_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-chkpass postgresql-18-chkpass_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-18-chkpass_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-chkpass postgresql-18-chkpass_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-18-chkpass_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-chkpass postgresql-18-chkpass_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-18-chkpass_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 chkpass_17 chkpass_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/chkpass_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 chkpass_17 chkpass_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/chkpass_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 chkpass_17 chkpass_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/chkpass_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 chkpass_17 chkpass_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/chkpass_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 chkpass_17 chkpass_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/chkpass_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 chkpass_17 chkpass_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/chkpass_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-chkpass postgresql-17-chkpass_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-17-chkpass_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-chkpass postgresql-17-chkpass_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-17-chkpass_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-chkpass postgresql-17-chkpass_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-17-chkpass_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-chkpass postgresql-17-chkpass_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-17-chkpass_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-chkpass postgresql-17-chkpass_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-17-chkpass_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-chkpass postgresql-17-chkpass_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-17-chkpass_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-chkpass postgresql-17-chkpass_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-17-chkpass_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-chkpass postgresql-17-chkpass_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-17-chkpass_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 chkpass_16 chkpass_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/chkpass_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 chkpass_16 chkpass_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/chkpass_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 chkpass_16 chkpass_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/chkpass_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 chkpass_16 chkpass_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/chkpass_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 chkpass_16 chkpass_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/chkpass_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 chkpass_16 chkpass_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/chkpass_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-chkpass postgresql-16-chkpass_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-16-chkpass_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-chkpass postgresql-16-chkpass_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-16-chkpass_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-chkpass postgresql-16-chkpass_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-16-chkpass_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-chkpass postgresql-16-chkpass_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-16-chkpass_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-chkpass postgresql-16-chkpass_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-16-chkpass_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-chkpass postgresql-16-chkpass_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-16-chkpass_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-chkpass postgresql-16-chkpass_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-16-chkpass_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-chkpass postgresql-16-chkpass_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-16-chkpass_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 chkpass_15 chkpass_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/chkpass_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 chkpass_15 chkpass_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/chkpass_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 chkpass_15 chkpass_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/chkpass_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 chkpass_15 chkpass_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/chkpass_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 chkpass_15 chkpass_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/chkpass_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 chkpass_15 chkpass_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/chkpass_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-chkpass postgresql-15-chkpass_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-15-chkpass_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-chkpass postgresql-15-chkpass_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-15-chkpass_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-chkpass postgresql-15-chkpass_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-15-chkpass_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-chkpass postgresql-15-chkpass_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-15-chkpass_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-chkpass postgresql-15-chkpass_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-15-chkpass_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-chkpass postgresql-15-chkpass_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-15-chkpass_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-chkpass postgresql-15-chkpass_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-15-chkpass_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-chkpass postgresql-15-chkpass_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-15-chkpass_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 chkpass_14 chkpass_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 13.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/chkpass_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 chkpass_14 chkpass_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/chkpass_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 chkpass_14 chkpass_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 13.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/chkpass_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 chkpass_14 chkpass_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/chkpass_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 chkpass_14 chkpass_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/chkpass_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 chkpass_14 chkpass_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 13.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/chkpass_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-chkpass postgresql-14-chkpass_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 10.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-14-chkpass_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-chkpass postgresql-14-chkpass_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 10.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/chkpass/postgresql-14-chkpass_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-chkpass postgresql-14-chkpass_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-14-chkpass_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-chkpass postgresql-14-chkpass_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 10.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/chkpass/postgresql-14-chkpass_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-chkpass postgresql-14-chkpass_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 10.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-14-chkpass_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-chkpass postgresql-14-chkpass_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/chkpass/postgresql-14-chkpass_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-chkpass postgresql-14-chkpass_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-14-chkpass_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-chkpass postgresql-14-chkpass_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/chkpass/postgresql-14-chkpass_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `chkpass` 扩展的 RPM / DEB 包：

```bash
pig build pkg chkpass         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `chkpass` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install chkpass;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y chkpass -v 18  # PG 18
pig ext install -y chkpass -v 17  # PG 17
pig ext install -y chkpass -v 16  # PG 16
pig ext install -y chkpass -v 15  # PG 15
pig ext install -y chkpass -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y chkpass_18       # PG 18
dnf install -y chkpass_17       # PG 17
dnf install -y chkpass_16       # PG 16
dnf install -y chkpass_15       # PG 15
dnf install -y chkpass_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-chkpass   # PG 18
apt install -y postgresql-17-chkpass   # PG 17
apt install -y postgresql-16-chkpass   # PG 16
apt install -y postgresql-15-chkpass   # PG 15
apt install -y postgresql-14-chkpass   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION chkpass;
```

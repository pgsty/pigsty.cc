---
title: "base36"
linkTitle: "base36"
description: "Base36编码解码扩展"
weight: 4800
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adjust/pg-base36">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adjust/pg-base36</div>
    <div class="ext-card__desc">https://github.com/adjust/pg-base36</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg-base36-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-base36-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg-base36-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_base36`**](/ext/e/base36) | `1.0.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4800  | [**`base36`**](/ext/e/base36) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`base62`](/ext/e/base62) [`pg_base58`](/ext/e/pg_base58) [`pg_polyline`](/ext/e/pg_polyline) [`uri`](/ext/e/uri) [`pg_curl`](/ext/e/pg_curl) [`url_encode`](/ext/e/url_encode) [`pg_rewrite`](/ext/e/pg_rewrite) [`sepgsql`](/ext/e/sepgsql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_base36` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_base36_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-base36` | - |
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
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pg_base36_18 pg_base36_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base36_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_base36_18 pg_base36_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base36_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_base36_18 pg_base36_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base36_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_base36_18 pg_base36_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base36_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_base36_18 pg_base36_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base36_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_base36_18 pg_base36_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base36_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 15.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 16.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 16.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 16.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-base36 postgresql-18-base36_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 16.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-18-base36_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_base36_17 pg_base36_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base36_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_base36_17 pg_base36_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base36_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_base36_17 pg_base36_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base36_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_base36_17 pg_base36_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base36_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_base36_17 pg_base36_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base36_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_base36_17 pg_base36_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base36_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 15.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 15.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 15.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 15.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-base36 postgresql-17-base36_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-17-base36_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_base36_16 pg_base36_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base36_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_base36_16 pg_base36_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base36_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_base36_16 pg_base36_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base36_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_base36_16 pg_base36_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base36_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_base36_16 pg_base36_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base36_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_base36_16 pg_base36_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base36_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 15.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 15.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 15.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 15.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-base36 postgresql-16-base36_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-16-base36_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_base36_15 pg_base36_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base36_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_base36_15 pg_base36_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base36_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_base36_15 pg_base36_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base36_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_base36_15 pg_base36_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base36_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_base36_15 pg_base36_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base36_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_base36_15 pg_base36_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base36_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 15.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 15.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 15.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 15.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-base36 postgresql-15-base36_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-15-base36_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_base36_14 pg_base36_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_base36_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_base36_14 pg_base36_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 15.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_base36_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_base36_14 pg_base36_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 14.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_base36_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_base36_14 pg_base36_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 14.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_base36_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_base36_14 pg_base36_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 14.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_base36_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_base36_14 pg_base36_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_base36_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 15.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 15.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 15.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 15.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 16.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-base36 postgresql-14-base36_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 16.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/b/base36/postgresql-14-base36_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_base36` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_base36         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_base36` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_base36;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_base36 -v 18  # PG 18
pig ext install -y pg_base36 -v 17  # PG 17
pig ext install -y pg_base36 -v 16  # PG 16
pig ext install -y pg_base36 -v 15  # PG 15
pig ext install -y pg_base36 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_base36_18       # PG 18
dnf install -y pg_base36_17       # PG 17
dnf install -y pg_base36_16       # PG 16
dnf install -y pg_base36_15       # PG 15
dnf install -y pg_base36_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-base36   # PG 18
apt install -y postgresql-17-base36   # PG 17
apt install -y postgresql-16-base36   # PG 16
apt install -y postgresql-15-base36   # PG 15
apt install -y postgresql-14-base36   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION base36;
```



## 用法

> [base36: PostgreSQL 的 base36 编解码数据类型](https://github.com/adjust/pg-base36)

提供使用 base36 方案进行编码和解码的数据类型，支持 base36 与整数类型之间的转换。

```sql
CREATE EXTENSION base36;
```

### 类型

| 类型 | 存储 | 最大字符串长度 | 最大数值 |
|---|---|---|---|
| `base36` | 4 字节（int） | 6 字符 | 2,147,483,647 |
| `bigbase36` | 8 字节（bigint） | 13 字符 | 9,223,372,036,854,775,807 |

### 示例

```sql
-- 将整数编码为 base36
SELECT 1234567::base36;          -- 'qglj'

-- 将 base36 解码为整数
SELECT 'qglj'::base36::int;     -- 1234567

-- 用于更大数值的 bigbase36
SELECT 9223372036854775807::bigbase36;           -- 'i1y004og0svr'
SELECT 'i1y004og0svr'::bigbase36::bigint;        -- 9223372036854775807
```

---
title: "base62"
linkTitle: "base62"
description: "Base62编码解码扩展"
weight: 4810
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adjust/pg-base62">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adjust/pg-base62</div>
    <div class="ext-card__desc">https://github.com/adjust/pg-base62</div>
  </a>
  <a class="ext-card ext-card--source" href="pg-base62-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-base62-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg-base62-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_base62`**](/ext/e/base62) | `0.0.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4810  | [**`base62`**](/ext/e/base62) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`base36`](/ext/e/base36) [`pg_base58`](/ext/e/pg_base58) [`pg_polyline`](/ext/e/pg_polyline) [`uri`](/ext/e/uri) [`pg_curl`](/ext/e/pg_curl) [`url_encode`](/ext/e/url_encode) [`pg_rewrite`](/ext/e/pg_rewrite) [`sepgsql`](/ext/e/sepgsql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_base62` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_base62_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-base62` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_base62_18 pg_base62_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 19.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_base62_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_base62_18 pg_base62_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_base62_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_base62_18 pg_base62_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_base62_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_base62_18 pg_base62_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_base62_18-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_base62_18 pg_base62_18-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_base62_18-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_base62_18 pg_base62_18-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 19.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_base62_18-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-base62 postgresql-18-base62_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 25.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-18-base62_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-base62 postgresql-18-base62_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 25.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-18-base62_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-base62 postgresql-18-base62_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 25.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-18-base62_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-base62 postgresql-18-base62_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 25.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-18-base62_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-base62 postgresql-18-base62_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 26.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-18-base62_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-base62 postgresql-18-base62_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 26.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-18-base62_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-base62 postgresql-18-base62_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 26.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-18-base62_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-base62 postgresql-18-base62_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 26.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-18-base62_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_base62_17 pg_base62_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 19.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_base62_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_base62_17 pg_base62_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_base62_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_base62_17 pg_base62_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_base62_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_base62_17 pg_base62_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_base62_17-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_base62_17 pg_base62_17-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_base62_17-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_base62_17 pg_base62_17-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 19.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_base62_17-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-base62 postgresql-17-base62_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 25.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-17-base62_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-base62 postgresql-17-base62_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 25.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-17-base62_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-base62 postgresql-17-base62_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 25.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-17-base62_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-base62 postgresql-17-base62_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 25.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-17-base62_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-base62 postgresql-17-base62_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-17-base62_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-base62 postgresql-17-base62_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-17-base62_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-base62 postgresql-17-base62_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-17-base62_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-base62 postgresql-17-base62_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 26.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-17-base62_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_base62_16 pg_base62_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 20.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_base62_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_base62_16 pg_base62_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_base62_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_base62_16 pg_base62_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_base62_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_base62_16 pg_base62_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_base62_16-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_base62_16 pg_base62_16-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_base62_16-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_base62_16 pg_base62_16-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 19.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_base62_16-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-base62 postgresql-16-base62_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 25.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-16-base62_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-base62 postgresql-16-base62_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 25.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-16-base62_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-base62 postgresql-16-base62_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 25.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-16-base62_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-base62 postgresql-16-base62_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 25.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-16-base62_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-base62 postgresql-16-base62_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-16-base62_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-base62 postgresql-16-base62_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-16-base62_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-base62 postgresql-16-base62_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-16-base62_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-base62 postgresql-16-base62_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 26.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-16-base62_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_base62_15 pg_base62_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 20.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_base62_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_base62_15 pg_base62_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_base62_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_base62_15 pg_base62_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_base62_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_base62_15 pg_base62_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_base62_15-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_base62_15 pg_base62_15-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_base62_15-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_base62_15 pg_base62_15-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 19.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_base62_15-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-base62 postgresql-15-base62_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 25.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-15-base62_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-base62 postgresql-15-base62_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 25.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-15-base62_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-base62 postgresql-15-base62_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 25.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-15-base62_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-base62 postgresql-15-base62_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 25.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-15-base62_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-base62 postgresql-15-base62_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-15-base62_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-base62 postgresql-15-base62_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-15-base62_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-base62 postgresql-15-base62_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-15-base62_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-base62 postgresql-15-base62_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-15-base62_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_base62_14 pg_base62_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 19.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_base62_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_base62_14 pg_base62_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 19.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_base62_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_base62_14 pg_base62_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 18.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_base62_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_base62_14 pg_base62_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_base62_14-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_base62_14 pg_base62_14-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 18.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_base62_14-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_base62_14 pg_base62_14-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 19.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_base62_14-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-base62 postgresql-14-base62_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 25.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-14-base62_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-base62 postgresql-14-base62_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 25.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/base62/postgresql-14-base62_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-base62 postgresql-14-base62_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 25.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-14-base62_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-base62 postgresql-14-base62_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 25.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/base62/postgresql-14-base62_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-base62 postgresql-14-base62_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-14-base62_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-base62 postgresql-14-base62_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 27.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/base62/postgresql-14-base62_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-base62 postgresql-14-base62_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 26.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-14-base62_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-base62 postgresql-14-base62_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 26.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/base62/postgresql-14-base62_0.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_base62` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_base62         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_base62` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_base62;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_base62 -v 18  # PG 18
pig ext install -y pg_base62 -v 17  # PG 17
pig ext install -y pg_base62 -v 16  # PG 16
pig ext install -y pg_base62 -v 15  # PG 15
pig ext install -y pg_base62 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_base62_18       # PG 18
dnf install -y pg_base62_17       # PG 17
dnf install -y pg_base62_16       # PG 16
dnf install -y pg_base62_15       # PG 15
dnf install -y pg_base62_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-base62   # PG 18
apt install -y postgresql-17-base62   # PG 17
apt install -y postgresql-16-base62   # PG 16
apt install -y postgresql-15-base62   # PG 15
apt install -y postgresql-14-base62   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION base62;
```

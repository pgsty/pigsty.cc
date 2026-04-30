---
title: "url_encode"
linkTitle: "url_encode"
description: "提供URL编码解码函数"
weight: 4190
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/okbob/url_encode">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">okbob/url_encode</div>
    <div class="ext-card__desc">https://github.com/okbob/url_encode</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/url_encode-1.2.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">url_encode-1.2.5.tar.gz</div>
    <div class="ext-card__desc">url_encode-1.2.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`url_encode`**](/ext/e/url_encode) | `1.2.5` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4190  | [**`url_encode`**](/ext/e/url_encode) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_html5_email_address`](/ext/e/pg_html5_email_address) [`base36`](/ext/e/base36) [`base62`](/ext/e/base62) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `url_encode` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `url_encode_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-url-encode` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 url_encode_18 url_encode_18-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/url_encode_18-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 url_encode_18 url_encode_18-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/url_encode_18-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 url_encode_18 url_encode_18-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/url_encode_18-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 url_encode_18 url_encode_18-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/url_encode_18-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 url_encode_18 url_encode_18-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/url_encode_18-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 url_encode_18 url_encode_18-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/url_encode_18-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-url-encode postgresql-18-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-18-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-url-encode postgresql-18-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-18-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-url-encode postgresql-18-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 12.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-18-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-url-encode postgresql-18-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 13.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-18-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-url-encode postgresql-18-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-18-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-url-encode postgresql-18-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 12.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-18-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-url-encode postgresql-18-url-encode_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-18-url-encode_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-url-encode postgresql-18-url-encode_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-18-url-encode_1.2.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 url_encode_17 url_encode_17-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 13.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/url_encode_17-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 url_encode_17 url_encode_17-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/url_encode_17-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 url_encode_17 url_encode_17-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/url_encode_17-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 url_encode_17 url_encode_17-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/url_encode_17-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 url_encode_17 url_encode_17-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/url_encode_17-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 url_encode_17 url_encode_17-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 13.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/url_encode_17-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-url-encode postgresql-17-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 12.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-17-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-url-encode postgresql-17-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-17-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-url-encode postgresql-17-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 12.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-17-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-url-encode postgresql-17-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 13.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-17-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-url-encode postgresql-17-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-17-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-url-encode postgresql-17-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 12.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-17-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-url-encode postgresql-17-url-encode_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-17-url-encode_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-url-encode postgresql-17-url-encode_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-17-url-encode_1.2.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 url_encode_16 url_encode_16-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/url_encode_16-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 url_encode_16 url_encode_16-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/url_encode_16-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 url_encode_16 url_encode_16-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/url_encode_16-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 url_encode_16 url_encode_16-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/url_encode_16-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 url_encode_16 url_encode_16-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 13.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/url_encode_16-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 url_encode_16 url_encode_16-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/url_encode_16-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-url-encode postgresql-16-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 12.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-16-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-url-encode postgresql-16-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-16-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-url-encode postgresql-16-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 12.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-16-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-url-encode postgresql-16-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 12.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-16-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-url-encode postgresql-16-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 12.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-16-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-url-encode postgresql-16-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 12.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-16-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-url-encode postgresql-16-url-encode_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 12.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-16-url-encode_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-url-encode postgresql-16-url-encode_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 12.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-16-url-encode_1.2.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 url_encode_15 url_encode_15-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/url_encode_15-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 url_encode_15 url_encode_15-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/url_encode_15-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 url_encode_15 url_encode_15-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/url_encode_15-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 url_encode_15 url_encode_15-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/url_encode_15-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 url_encode_15 url_encode_15-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 13.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/url_encode_15-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 url_encode_15 url_encode_15-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/url_encode_15-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-url-encode postgresql-15-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-15-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-url-encode postgresql-15-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-15-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-url-encode postgresql-15-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 12.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-15-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-url-encode postgresql-15-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 12.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-15-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-url-encode postgresql-15-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 12.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-15-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-url-encode postgresql-15-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 12.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-15-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-url-encode postgresql-15-url-encode_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 12.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-15-url-encode_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-url-encode postgresql-15-url-encode_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 12.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-15-url-encode_1.2.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 url_encode_14 url_encode_14-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 13.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/url_encode_14-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 url_encode_14 url_encode_14-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/url_encode_14-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 url_encode_14 url_encode_14-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 13.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/url_encode_14-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 url_encode_14 url_encode_14-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 13.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/url_encode_14-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 url_encode_14 url_encode_14-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 13.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/url_encode_14-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 url_encode_14 url_encode_14-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 13.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/url_encode_14-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-url-encode postgresql-14-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 12.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-14-url-encode_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-url-encode postgresql-14-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 12.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/u/url-encode/postgresql-14-url-encode_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-url-encode postgresql-14-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 12.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-14-url-encode_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-url-encode postgresql-14-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 12.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/u/url-encode/postgresql-14-url-encode_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-url-encode postgresql-14-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 12.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-14-url-encode_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-url-encode postgresql-14-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 12.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/u/url-encode/postgresql-14-url-encode_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-url-encode postgresql-14-url-encode_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 12.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-14-url-encode_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-url-encode postgresql-14-url-encode_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 12.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/u/url-encode/postgresql-14-url-encode_1.2.5-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `url_encode` 扩展的 RPM / DEB 包：

```bash
pig build pkg url_encode         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `url_encode` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install url_encode;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y url_encode -v 18  # PG 18
pig ext install -y url_encode -v 17  # PG 17
pig ext install -y url_encode -v 16  # PG 16
pig ext install -y url_encode -v 15  # PG 15
pig ext install -y url_encode -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y url_encode_18       # PG 18
dnf install -y url_encode_17       # PG 17
dnf install -y url_encode_16       # PG 16
dnf install -y url_encode_15       # PG 15
dnf install -y url_encode_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-url-encode   # PG 18
apt install -y postgresql-17-url-encode   # PG 17
apt install -y postgresql-16-url-encode   # PG 16
apt install -y postgresql-15-url-encode   # PG 15
apt install -y postgresql-14-url-encode   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION url_encode;
```



## 用法

> [url_encode: PostgreSQL 的 URL 编码与解码函数](https://github.com/okbob/url_encode)

### 函数

#### `url_encode(text) returns text`

对字符串进行百分号编码，用于 URL 中：

```sql
SELECT url_encode('Hello World');
-- Hello%20World

SELECT url_encode('Ahoj Svetе');
-- Ahoj%20Sv%C4%9Bte
```

#### `url_decode(text) returns text`

解码百分号编码的字符串：

```sql
SELECT url_decode('Hello%20World');
-- Hello World

SELECT url_decode('Ahoj%20Sv%C4%9Bte');
-- Ahoj Svetе
```

#### `uri_encode(text) returns text`

编码完整的 URI（保留协议、斜杠等）：

```sql
SELECT uri_encode('http://hu.wikipedia.org/wiki/Sao_Paulo');
-- http://hu.wikipedia.org/wiki/S%C3%A3o_Paulo
```

#### `uri_decode(text) returns text`

解码已编码的 URI：

```sql
SELECT uri_decode('http://hu.wikipedia.org/wiki/S%C3%A3o_Paulo');
-- http://hu.wikipedia.org/wiki/Sao_Paulo
```

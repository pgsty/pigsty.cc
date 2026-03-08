---
title: "decoder_raw"
linkTitle: "decoder_raw"
description: "逻辑复制解码输出插件：RAW SQL格式"
weight: 9660
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/michaelpq/pg_plugins/blob/main/decoder_raw/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">main/decoder_raw</div>
    <div class="ext-card__desc">https://github.com/michaelpq/pg_plugins/blob/main/decoder_raw/</div>
  </a>
  <a class="ext-card ext-card--source" href="decoder_raw-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">decoder_raw-1.0.tar.gz</div>
    <div class="ext-card__desc">decoder_raw-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`decoder_raw`**](/ext/e/decoder_raw) | `1.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9660  | [**`decoder_raw`**](/ext/e/decoder_raw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`wal2json`](/ext/e/wal2json) [`decoderbufs`](/ext/e/decoderbufs) [`test_decoding`](/ext/e/test_decoding) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgactive`](/ext/e/pgactive) [`wal2mongo`](/ext/e/wal2mongo) [`pgoutput`](/ext/e/pgoutput) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `decoder_raw` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `decoder_raw_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-decoder-raw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 decoder_raw_18 decoder_raw_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/decoder_raw_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 decoder_raw_18 decoder_raw_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/decoder_raw_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 decoder_raw_18 decoder_raw_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/decoder_raw_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 decoder_raw_18 decoder_raw_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/decoder_raw_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 decoder_raw_18 decoder_raw_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/decoder_raw_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 decoder_raw_18 decoder_raw_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/decoder_raw_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-decoder-raw postgresql-18-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 16.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-18-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-decoder-raw postgresql-18-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-18-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-decoder-raw postgresql-18-decoder-raw_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/decoder-raw/postgresql-18-decoder-raw_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-decoder-raw postgresql-18-decoder-raw_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/decoder-raw/postgresql-18-decoder-raw_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-decoder-raw postgresql-18-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 17.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-18-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-decoder-raw postgresql-18-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 17.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-18-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-decoder-raw postgresql-18-decoder-raw_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 17.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-18-decoder-raw_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-decoder-raw postgresql-18-decoder-raw_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 17.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-18-decoder-raw_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 decoder_raw_17 decoder_raw_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/decoder_raw_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 decoder_raw_17 decoder_raw_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/decoder_raw_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 decoder_raw_17 decoder_raw_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/decoder_raw_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 decoder_raw_17 decoder_raw_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/decoder_raw_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 decoder_raw_17 decoder_raw_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/decoder_raw_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 decoder_raw_17 decoder_raw_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/decoder_raw_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-decoder-raw postgresql-17-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-17-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-decoder-raw postgresql-17-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-17-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-decoder-raw postgresql-17-decoder-raw_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 16.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/decoder-raw/postgresql-17-decoder-raw_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-decoder-raw postgresql-17-decoder-raw_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/decoder-raw/postgresql-17-decoder-raw_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-decoder-raw postgresql-17-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 20.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-17-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-decoder-raw postgresql-17-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 19.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-17-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-decoder-raw postgresql-17-decoder-raw_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 17.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-17-decoder-raw_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-decoder-raw postgresql-17-decoder-raw_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 17.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-17-decoder-raw_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 decoder_raw_16 decoder_raw_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/decoder_raw_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 decoder_raw_16 decoder_raw_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/decoder_raw_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 decoder_raw_16 decoder_raw_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/decoder_raw_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 decoder_raw_16 decoder_raw_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/decoder_raw_16-1.0-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 16 postgresql-16-decoder-raw postgresql-16-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-16-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-decoder-raw postgresql-16-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-16-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 16 postgresql-16-decoder-raw postgresql-16-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 20.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-16-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-decoder-raw postgresql-16-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 19.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-16-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-decoder-raw postgresql-16-decoder-raw_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 17.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-16-decoder-raw_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-decoder-raw postgresql-16-decoder-raw_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 17.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-16-decoder-raw_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 decoder_raw_15 decoder_raw_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/decoder_raw_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 decoder_raw_15 decoder_raw_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/decoder_raw_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 decoder_raw_15 decoder_raw_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 14.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/decoder_raw_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 decoder_raw_15 decoder_raw_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/decoder_raw_15-1.0-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 15 postgresql-15-decoder-raw postgresql-15-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 16.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-15-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-decoder-raw postgresql-15-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 16.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-15-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 15 postgresql-15-decoder-raw postgresql-15-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 19.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-15-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-decoder-raw postgresql-15-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 19.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-15-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-decoder-raw postgresql-15-decoder-raw_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 16.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-15-decoder-raw_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-decoder-raw postgresql-15-decoder-raw_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 17.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-15-decoder-raw_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 decoder_raw_14 decoder_raw_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/decoder_raw_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 decoder_raw_14 decoder_raw_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/decoder_raw_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 decoder_raw_14 decoder_raw_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/decoder_raw_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 decoder_raw_14 decoder_raw_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/decoder_raw_14-1.0-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-decoder-raw postgresql-14-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 16.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-14-decoder-raw_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-decoder-raw postgresql-14-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 16.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/decoder-raw/postgresql-14-decoder-raw_1.0-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 14 postgresql-14-decoder-raw postgresql-14-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 20.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-14-decoder-raw_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-decoder-raw postgresql-14-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 19.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/decoder-raw/postgresql-14-decoder-raw_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-decoder-raw postgresql-14-decoder-raw_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 17.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-14-decoder-raw_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-decoder-raw postgresql-14-decoder-raw_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 17.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/decoder-raw/postgresql-14-decoder-raw_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `decoder_raw` 扩展的 RPM / DEB 包：

```bash
pig build pkg decoder_raw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `decoder_raw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install decoder_raw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y decoder_raw -v 18  # PG 18
pig ext install -y decoder_raw -v 17  # PG 17
pig ext install -y decoder_raw -v 16  # PG 16
pig ext install -y decoder_raw -v 15  # PG 15
pig ext install -y decoder_raw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y decoder_raw_18       # PG 18
dnf install -y decoder_raw_17       # PG 17
dnf install -y decoder_raw_16       # PG 16
dnf install -y decoder_raw_15       # PG 15
dnf install -y decoder_raw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-decoder-raw   # PG 18
apt install -y postgresql-17-decoder-raw   # PG 17
apt install -y postgresql-16-decoder-raw   # PG 16
apt install -y postgresql-15-decoder-raw   # PG 15
apt install -y postgresql-14-decoder-raw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}

> 此扩展不需要执行 `CREATE EXTENSION` 语句

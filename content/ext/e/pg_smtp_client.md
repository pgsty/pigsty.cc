---
title: "pg_smtp_client"
linkTitle: "pg_smtp_client"
description: "使用SMTP从PostgreSQL内发送邮件的客户端扩展"
weight: 4170
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/brianpursley/pg_smtp_client">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">brianpursley/pg_smtp_client</div>
    <div class="ext-card__desc">https://github.com/brianpursley/pg_smtp_client</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_smtp_client-0.2.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_smtp_client-0.2.1.tar.gz</div>
    <div class="ext-card__desc">pg_smtp_client-0.2.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_smtp_client`**](/ext/e/pg_smtp_client) | `0.2.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4170  | [**`pg_smtp_client`**](/ext/e/pg_smtp_client) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `smtp_client` |
{.ext-table}

| **相关扩展** | [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_html5_email_address`](/ext/e/pg_html5_email_address) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`pg_curl`](/ext/e/pg_curl) [`pgjq`](/ext/e/pgjq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_smtp_client` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_smtp_client_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-smtp-client` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_smtp_client_18 pg_smtp_client_18-0.2.1-1PIGSTY.el8.x86_64.rpm pigsty 0.2.1 533.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_smtp_client_18-0.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_smtp_client_18 pg_smtp_client_18-0.2.1-1PIGSTY.el8.aarch64.rpm pigsty 0.2.1 408.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_smtp_client_18-0.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_smtp_client_18 pg_smtp_client_18-0.2.1-1PIGSTY.el9.x86_64.rpm pigsty 0.2.1 553.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_smtp_client_18-0.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_smtp_client_18 pg_smtp_client_18-0.2.1-1PIGSTY.el9.aarch64.rpm pigsty 0.2.1 434.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_smtp_client_18-0.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_smtp_client_18 pg_smtp_client_18-0.2.1-1PIGSTY.el10.x86_64.rpm pigsty 0.2.1 554.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_smtp_client_18-0.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_smtp_client_18 pg_smtp_client_18-0.2.1-1PIGSTY.el10.aarch64.rpm pigsty 0.2.1 434.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_smtp_client_18-0.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-smtp-client postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb pigsty 0.2.1 439.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-smtp-client postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb pigsty 0.2.1 319.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-smtp-client postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb pigsty 0.2.1 440.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-smtp-client postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb pigsty 0.2.1 319.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-smtp-client postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb pigsty 0.2.1 492.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-smtp-client postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb pigsty 0.2.1 374.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-smtp-client postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb pigsty 0.2.1 489.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-smtp-client postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb pigsty 0.2.1 370.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-18-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_smtp_client_17 pg_smtp_client_17-0.2.1-1PIGSTY.el8.x86_64.rpm pigsty 0.2.1 533.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_smtp_client_17-0.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_smtp_client_17 pg_smtp_client_17-0.2.1-1PIGSTY.el8.aarch64.rpm pigsty 0.2.1 408.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_smtp_client_17-0.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_smtp_client_17 pg_smtp_client_17-0.2.1-1PIGSTY.el9.x86_64.rpm pigsty 0.2.1 553.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_smtp_client_17-0.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_smtp_client_17 pg_smtp_client_17-0.2.1-1PIGSTY.el9.aarch64.rpm pigsty 0.2.1 434.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_smtp_client_17-0.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_smtp_client_17 pg_smtp_client_17-0.2.1-1PIGSTY.el10.x86_64.rpm pigsty 0.2.1 554.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_smtp_client_17-0.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_smtp_client_17 pg_smtp_client_17-0.2.1-1PIGSTY.el10.aarch64.rpm pigsty 0.2.1 434.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_smtp_client_17-0.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-smtp-client postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb pigsty 0.2.1 439.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-smtp-client postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb pigsty 0.2.1 319.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-smtp-client postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb pigsty 0.2.1 440.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-smtp-client postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb pigsty 0.2.1 319.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-smtp-client postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb pigsty 0.2.1 492.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-smtp-client postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb pigsty 0.2.1 374.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-smtp-client postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb pigsty 0.2.1 489.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-smtp-client postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb pigsty 0.2.1 369.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-17-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_smtp_client_16 pg_smtp_client_16-0.2.1-1PIGSTY.el8.x86_64.rpm pigsty 0.2.1 533.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_smtp_client_16-0.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_smtp_client_16 pg_smtp_client_16-0.2.1-1PIGSTY.el8.aarch64.rpm pigsty 0.2.1 408.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_smtp_client_16-0.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_smtp_client_16 pg_smtp_client_16-0.2.1-1PIGSTY.el9.x86_64.rpm pigsty 0.2.1 553.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_smtp_client_16-0.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_smtp_client_16 pg_smtp_client_16-0.2.1-1PIGSTY.el9.aarch64.rpm pigsty 0.2.1 434.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_smtp_client_16-0.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_smtp_client_16 pg_smtp_client_16-0.2.1-1PIGSTY.el10.x86_64.rpm pigsty 0.2.1 554.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_smtp_client_16-0.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_smtp_client_16 pg_smtp_client_16-0.2.1-1PIGSTY.el10.aarch64.rpm pigsty 0.2.1 434.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_smtp_client_16-0.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-smtp-client postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb pigsty 0.2.1 439.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-smtp-client postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb pigsty 0.2.1 319.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-smtp-client postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb pigsty 0.2.1 439.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-smtp-client postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb pigsty 0.2.1 319.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-smtp-client postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb pigsty 0.2.1 492.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-smtp-client postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb pigsty 0.2.1 374.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-smtp-client postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb pigsty 0.2.1 489.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-smtp-client postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb pigsty 0.2.1 370.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-16-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_smtp_client_15 pg_smtp_client_15-0.2.1-1PIGSTY.el8.x86_64.rpm pigsty 0.2.1 533.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_smtp_client_15-0.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_smtp_client_15 pg_smtp_client_15-0.2.1-1PIGSTY.el8.aarch64.rpm pigsty 0.2.1 408.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_smtp_client_15-0.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_smtp_client_15 pg_smtp_client_15-0.2.1-1PIGSTY.el9.x86_64.rpm pigsty 0.2.1 552.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_smtp_client_15-0.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_smtp_client_15 pg_smtp_client_15-0.2.1-1PIGSTY.el9.aarch64.rpm pigsty 0.2.1 434.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_smtp_client_15-0.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_smtp_client_15 pg_smtp_client_15-0.2.1-1PIGSTY.el10.x86_64.rpm pigsty 0.2.1 553.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_smtp_client_15-0.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_smtp_client_15 pg_smtp_client_15-0.2.1-1PIGSTY.el10.aarch64.rpm pigsty 0.2.1 434.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_smtp_client_15-0.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-smtp-client postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb pigsty 0.2.1 439.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-smtp-client postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb pigsty 0.2.1 319.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-smtp-client postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb pigsty 0.2.1 439.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-smtp-client postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb pigsty 0.2.1 319.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-smtp-client postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb pigsty 0.2.1 492.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-smtp-client postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb pigsty 0.2.1 374.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-smtp-client postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb pigsty 0.2.1 488.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-smtp-client postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb pigsty 0.2.1 370.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-15-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_smtp_client_14 pg_smtp_client_14-0.2.1-1PIGSTY.el8.x86_64.rpm pigsty 0.2.1 533.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_smtp_client_14-0.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_smtp_client_14 pg_smtp_client_14-0.2.1-1PIGSTY.el8.aarch64.rpm pigsty 0.2.1 408.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_smtp_client_14-0.2.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_smtp_client_14 pg_smtp_client_14-0.2.1-1PIGSTY.el9.x86_64.rpm pigsty 0.2.1 553.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_smtp_client_14-0.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_smtp_client_14 pg_smtp_client_14-0.2.1-1PIGSTY.el9.aarch64.rpm pigsty 0.2.1 434.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_smtp_client_14-0.2.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_smtp_client_14 pg_smtp_client_14-0.2.1-1PIGSTY.el10.x86_64.rpm pigsty 0.2.1 553.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_smtp_client_14-0.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_smtp_client_14 pg_smtp_client_14-0.2.1-1PIGSTY.el10.aarch64.rpm pigsty 0.2.1 434.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_smtp_client_14-0.2.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-smtp-client postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb pigsty 0.2.1 439.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-smtp-client postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb pigsty 0.2.1 319.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-smtp-client/postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-smtp-client postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb pigsty 0.2.1 440.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-smtp-client postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb pigsty 0.2.1 319.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-smtp-client/postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-smtp-client postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb pigsty 0.2.1 492.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-smtp-client postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb pigsty 0.2.1 374.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-smtp-client/postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-smtp-client postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb pigsty 0.2.1 488.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-smtp-client postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb pigsty 0.2.1 370.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-smtp-client/postgresql-14-pg-smtp-client_0.2.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_smtp_client` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_smtp_client         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_smtp_client` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_smtp_client;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_smtp_client -v 18  # PG 18
pig ext install -y pg_smtp_client -v 17  # PG 17
pig ext install -y pg_smtp_client -v 16  # PG 16
pig ext install -y pg_smtp_client -v 15  # PG 15
pig ext install -y pg_smtp_client -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_smtp_client_18       # PG 18
dnf install -y pg_smtp_client_17       # PG 17
dnf install -y pg_smtp_client_16       # PG 16
dnf install -y pg_smtp_client_15       # PG 15
dnf install -y pg_smtp_client_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-smtp-client   # PG 18
apt install -y postgresql-17-pg-smtp-client   # PG 17
apt install -y postgresql-16-pg-smtp-client   # PG 16
apt install -y postgresql-15-pg-smtp-client   # PG 15
apt install -y postgresql-14-pg-smtp-client   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_smtp_client;
```



## 用法

### 启用扩展

连接到 PostgreSQL 并执行以下命令。

```sql
CREATE EXTENSION IF NOT EXISTS pg_smtp_client CASCADE;
```

使用 `smtp_client.send_email()` 函数发送电子邮件。

### 函数参数

| 参数          | 类型    | 说明                                               | 系统配置（可选）                |
|---------------|---------|----------------------------------------------------|---------------------------------|
| subject       | text    | 邮件主题                                           |                                 |
| body          | text    | 邮件正文                                           |                                 |
| html          | boolean | 正文是否为 HTML 格式（true）或纯文本格式（false）  |                                 |
| from_address  | text    | 发件人邮箱地址                                     | `smtp_client.from_address`      |
| recipients    | text[]  | 收件人邮箱地址列表                                 |                                 |
| ccs           | text[]  | 抄送邮箱地址列表                                   |                                 |
| bccs          | text[]  | 密送邮箱地址列表                                   |                                 |
| smtp_server   | text    | 使用的 SMTP 服务器地址                             | `smtp_client.server`            |
| smtp_port     | integer | SMTP 服务器端口                                    | `smtp_client.port`              |
| smtp_tls      | boolean | 是否使用 TLS 加密                                  | `smtp_client.tls`               |
| smtp_username | text    | SMTP 服务器登录用户名                              | `smtp_client.username`          |
| smtp_password | text    | SMTP 服务器登录密码                                | `smtp_client.password`          |

### 默认配置

您可以为上表中标注的部分参数配置系统级默认值，方法如下：

```
ALTER SYSTEM SET smtp_client.server TO 'smtp.example.com';
ALTER SYSTEM SET smtp_client.port TO 587;
ALTER SYSTEM SET smtp_client.tls TO true;
ALTER SYSTEM SET smtp_client.username TO 'MySmtpUsername';
ALTER SYSTEM SET smtp_client.password TO 'MySmtpPassword';
ALTER SYSTEM SET smtp_client.from_address TO 'from@example.com';
SELECT pg_reload_conf();
```

### 使用示例

发送邮件：
```sql
SELECT smtp_client.send_email('test subject', 'test body', false, 'from@example.com', array['to@example.com'], null, null, 'smtp.example.com', 587, true, 'username', 'password');
```

使用已配置的默认值发送邮件：
```sql
SELECT smtp_client.send_email('test subject', 'test body', false, null, array['to@example.com']);
```

或者使用命名参数：
```sql
SELECT smtp_client.send_email('test subject', 'test body', recipients => array['to@example.com']);
```

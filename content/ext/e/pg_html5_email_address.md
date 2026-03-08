---
title: "pg_html5_email_address"
linkTitle: "pg_html5_email_address"
description: "验证Email是否符合HTML5规范的扩展"
weight: 4180
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bigsmoke/pg_html5_email_address">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bigsmoke/pg_html5_email_address</div>
    <div class="ext-card__desc">https://github.com/bigsmoke/pg_html5_email_address</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_html5_email_address-1.2.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_html5_email_address-1.2.3.tar.gz</div>
    <div class="ext-card__desc">pg_html5_email_address-1.2.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_html5_email_address`**](/ext/e/pg_html5_email_address) | `1.2.3` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4180  | [**`pg_html5_email_address`**](/ext/e/pg_html5_email_address) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_smtp_client`](/ext/e/pg_smtp_client) [`url_encode`](/ext/e/url_encode) [`pg_render`](/ext/e/pg_render) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_html5_email_address` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_html5_email_address_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-html5-email-address` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
@ el8.x86_64 18 pg_html5_email_address_18 pg_html5_email_address_18-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_html5_email_address_18-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_html5_email_address_18 pg_html5_email_address_18-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_html5_email_address_18-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_html5_email_address_18 pg_html5_email_address_18-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_html5_email_address_18-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_html5_email_address_18 pg_html5_email_address_18-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 15.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_html5_email_address_18-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_html5_email_address_18 pg_html5_email_address_18-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_html5_email_address_18-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_html5_email_address_18 pg_html5_email_address_18-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_html5_email_address_18-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-html5-email-address postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-html5-email-address postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-html5-email-address postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-html5-email-address postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-html5-email-address postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-html5-email-address postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-html5-email-address postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-html5-email-address postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-18-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_html5_email_address_17 pg_html5_email_address_17-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_html5_email_address_17-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_html5_email_address_17 pg_html5_email_address_17-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_html5_email_address_17-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_html5_email_address_17 pg_html5_email_address_17-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_html5_email_address_17-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_html5_email_address_17 pg_html5_email_address_17-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 15.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_html5_email_address_17-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_html5_email_address_17 pg_html5_email_address_17-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_html5_email_address_17-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_html5_email_address_17 pg_html5_email_address_17-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_html5_email_address_17-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-html5-email-address postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-html5-email-address postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-html5-email-address postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-html5-email-address postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-html5-email-address postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-html5-email-address postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-html5-email-address postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-html5-email-address postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-17-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_html5_email_address_16 pg_html5_email_address_16-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_html5_email_address_16-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_html5_email_address_16 pg_html5_email_address_16-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_html5_email_address_16-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_html5_email_address_16 pg_html5_email_address_16-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_html5_email_address_16-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_html5_email_address_16 pg_html5_email_address_16-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 15.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_html5_email_address_16-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_html5_email_address_16 pg_html5_email_address_16-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_html5_email_address_16-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_html5_email_address_16 pg_html5_email_address_16-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_html5_email_address_16-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-html5-email-address postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-html5-email-address postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-html5-email-address postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-html5-email-address postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-html5-email-address postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-html5-email-address postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-html5-email-address postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-html5-email-address postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-16-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_html5_email_address_15 pg_html5_email_address_15-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_html5_email_address_15-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_html5_email_address_15 pg_html5_email_address_15-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_html5_email_address_15-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_html5_email_address_15 pg_html5_email_address_15-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_html5_email_address_15-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_html5_email_address_15 pg_html5_email_address_15-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 15.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_html5_email_address_15-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_html5_email_address_15 pg_html5_email_address_15-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_html5_email_address_15-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_html5_email_address_15 pg_html5_email_address_15-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_html5_email_address_15-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-html5-email-address postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-html5-email-address postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-html5-email-address postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-html5-email-address postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-html5-email-address postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-html5-email-address postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-html5-email-address postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-html5-email-address postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-15-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_html5_email_address_14 pg_html5_email_address_14-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_html5_email_address_14-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_html5_email_address_14 pg_html5_email_address_14-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_html5_email_address_14-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_html5_email_address_14 pg_html5_email_address_14-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 15.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_html5_email_address_14-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_html5_email_address_14 pg_html5_email_address_14-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 15.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_html5_email_address_14-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_html5_email_address_14 pg_html5_email_address_14-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_html5_email_address_14-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_html5_email_address_14 pg_html5_email_address_14-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 15.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_html5_email_address_14-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-html5-email-address postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-html5-email-address postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-html5-email-address/postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-html5-email-address postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-html5-email-address postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 12.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-html5-email-address/postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-html5-email-address postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-html5-email-address postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-html5-email-address/postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-html5-email-address postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-html5-email-address postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 12.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-html5-email-address/postgresql-14-pg-html5-email-address_1.2.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_html5_email_address` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_html5_email_address         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_html5_email_address` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_html5_email_address;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_html5_email_address -v 18  # PG 18
pig ext install -y pg_html5_email_address -v 17  # PG 17
pig ext install -y pg_html5_email_address -v 16  # PG 16
pig ext install -y pg_html5_email_address -v 15  # PG 15
pig ext install -y pg_html5_email_address -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_html5_email_address_18       # PG 18
dnf install -y pg_html5_email_address_17       # PG 17
dnf install -y pg_html5_email_address_16       # PG 16
dnf install -y pg_html5_email_address_15       # PG 15
dnf install -y pg_html5_email_address_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-html5-email-address   # PG 18
apt install -y postgresql-17-pg-html5-email-address   # PG 17
apt install -y postgresql-16-pg-html5-email-address   # PG 16
apt install -y postgresql-15-pg-html5-email-address   # PG 15
apt install -y postgresql-14-pg-html5-email-address   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_html5_email_address;
```

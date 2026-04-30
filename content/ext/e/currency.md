---
title: "currency"
linkTitle: "currency"
description: "使用1字节表示的货币数据类型"
weight: 3680
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adjust/pg-currency">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adjust/pg-currency</div>
    <div class="ext-card__desc">https://github.com/adjust/pg-currency</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg-currency-0.0.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-currency-0.0.3.tar.gz</div>
    <div class="ext-card__desc">pg-currency-0.0.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_currency`**](/ext/e/currency) | `0.0.3` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3680  | [**`currency`**](/ext/e/currency) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) [`country`](/ext/e/country) [`pg_xenophile`](/ext/e/pg_xenophile) [`numeral`](/ext/e/numeral) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_currency` | `plpgsql` |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_currency_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-currency` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_currency_18 pg_currency_18-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_18-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_currency_18 pg_currency_18-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 17.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_18-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_currency_18 pg_currency_18-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_18-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_currency_18 pg_currency_18-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_18-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_currency_18 pg_currency_18-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_18-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_currency_18 pg_currency_18-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_18-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 19.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 19.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 20.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 20.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 20.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 20.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_currency_17 pg_currency_17-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_17-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_currency_17 pg_currency_17-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 17.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_17-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_currency_17 pg_currency_17-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_17-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_currency_17 pg_currency_17-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_17-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_currency_17 pg_currency_17-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_17-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_currency_17 pg_currency_17-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_17-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 19.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 19.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 22.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 20.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 20.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_currency_16 pg_currency_16-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_16-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_currency_16 pg_currency_16-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 17.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_16-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_currency_16 pg_currency_16-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_16-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_currency_16 pg_currency_16-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_16-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_currency_16 pg_currency_16-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_16-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_currency_16 pg_currency_16-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_16-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 19.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 20.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 20.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_currency_15 pg_currency_15-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_15-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_currency_15 pg_currency_15-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_15-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_currency_15 pg_currency_15-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_15-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_currency_15 pg_currency_15-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_15-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_currency_15 pg_currency_15-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 16.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_15-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_currency_15 pg_currency_15-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_15-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 22.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 20.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 20.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_currency_14 pg_currency_14-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_14-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_currency_14 pg_currency_14-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_14-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_currency_14 pg_currency_14-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_14-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_currency_14 pg_currency_14-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_14-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_currency_14 pg_currency_14-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 16.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_14-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_currency_14 pg_currency_14-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_14-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 19.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 19.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 18.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 19.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 22.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 22.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 20.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 20.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_currency` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_currency         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_currency` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_currency;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_currency -v 18  # PG 18
pig ext install -y pg_currency -v 17  # PG 17
pig ext install -y pg_currency -v 16  # PG 16
pig ext install -y pg_currency -v 15  # PG 15
pig ext install -y pg_currency -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_currency_18       # PG 18
dnf install -y pg_currency_17       # PG 17
dnf install -y pg_currency_16       # PG 16
dnf install -y pg_currency_15       # PG 15
dnf install -y pg_currency_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-currency   # PG 18
apt install -y postgresql-17-pg-currency   # PG 17
apt install -y postgresql-16-pg-currency   # PG 16
apt install -y postgresql-15-pg-currency   # PG 15
apt install -y postgresql-14-pg-currency   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION currency CASCADE;  -- 依赖: plpgsql
```



## 用法

> [currency: ISO 4217 货币代码类型](https://github.com/adjust/pg-currency)

`currency` 扩展提供了 ISO 4217 货币代码数据类型，每个值仅占用一个字节的存储空间。

```sql
CREATE EXTENSION currency;

CREATE TABLE transactions (
    id                serial,
    payment_currency  currency
);

INSERT INTO transactions VALUES (1, 'USD'), (2, 'EUR'), (3, 'USD');

SELECT * FROM transactions ORDER BY payment_currency;
 id | payment_currency
----+------------------
  2 | EUR
  1 | USD
  3 | USD
```

### 运算符

支持标准比较运算符：`=`、`<>`、`<`、`>`、`<=`、`>=`。

内置 B-tree 索引支持，可进行高效排序和查找。

### 函数

```sql
-- 列出所有支持的货币代码
SELECT * FROM supported_currencies() currency ORDER BY currency;
```

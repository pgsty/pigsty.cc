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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg-currency-0.0.6+git20261006.6c91875.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-currency-0.0.6+git20261006.6c91875.tar.gz</div>
    <div class="ext-card__desc">pg-currency-0.0.6+git20261006.6c91875.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_currency`**](/ext/e/currency) | `0.0.6` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3680  | [**`currency`**](/ext/e/currency) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`financial`](/ext/e/financial) [`pg_accumulator`](/ext/e/pg_accumulator) [`omni_ledger`](/ext/e/omni_ledger) [`country`](/ext/e/country) [`isn`](/ext/e/isn) [`pg_xenophile`](/ext/e/pg_xenophile) [`icu_ext`](/ext/e/icu_ext) [`pg_money`](/ext/e/pg_money) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_currency` | `plpgsql` |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_currency_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-currency` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u26.x86_64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
| u26.aarch64 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 | AVAIL PIGSTY 0.0.6 1 |
@ el8.x86_64 18 pg_currency_18 pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm pigsty 0.0.6 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_currency_18 pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm pigsty 0.0.6 28.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_currency_18 pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm pigsty 0.0.6 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_currency_18 pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm pigsty 0.0.6 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_currency_18 pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm pigsty 0.0.6 29.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_currency_18 pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm pigsty 0.0.6 30.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_18-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb pigsty 0.0.6 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb pigsty 0.0.6 19.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb pigsty 0.0.6 19.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb pigsty 0.0.6 19.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb pigsty 0.0.6 21.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb pigsty 0.0.6 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb pigsty 0.0.6 20.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb pigsty 0.0.6 21.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb pigsty 0.0.6 21.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-currency postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb pigsty 0.0.6 21.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-18-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_currency_17 pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm pigsty 0.0.6 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_currency_17 pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm pigsty 0.0.6 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_currency_17 pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm pigsty 0.0.6 29.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_currency_17 pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm pigsty 0.0.6 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_currency_17 pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm pigsty 0.0.6 29.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_currency_17 pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm pigsty 0.0.6 30.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_17-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb pigsty 0.0.6 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb pigsty 0.0.6 19.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb pigsty 0.0.6 19.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb pigsty 0.0.6 19.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb pigsty 0.0.6 23.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb pigsty 0.0.6 23.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb pigsty 0.0.6 20.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb pigsty 0.0.6 21.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb pigsty 0.0.6 21.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-currency postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb pigsty 0.0.6 21.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-17-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_currency_16 pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm pigsty 0.0.6 28.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_currency_16 pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm pigsty 0.0.6 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_currency_16 pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm pigsty 0.0.6 29.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_currency_16 pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm pigsty 0.0.6 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_currency_16 pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm pigsty 0.0.6 29.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_currency_16 pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm pigsty 0.0.6 30.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_16-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb pigsty 0.0.6 19.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb pigsty 0.0.6 19.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb pigsty 0.0.6 19.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb pigsty 0.0.6 19.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb pigsty 0.0.6 23.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb pigsty 0.0.6 23.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb pigsty 0.0.6 20.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb pigsty 0.0.6 21.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb pigsty 0.0.6 21.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-currency postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb pigsty 0.0.6 21.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-16-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_currency_15 pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm pigsty 0.0.6 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_currency_15 pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm pigsty 0.0.6 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_currency_15 pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm pigsty 0.0.6 29.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_currency_15 pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm pigsty 0.0.6 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_currency_15 pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm pigsty 0.0.6 29.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_currency_15 pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm pigsty 0.0.6 30.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_15-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb pigsty 0.0.6 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb pigsty 0.0.6 21.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb pigsty 0.0.6 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb pigsty 0.0.6 19.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb pigsty 0.0.6 23.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb pigsty 0.0.6 23.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb pigsty 0.0.6 20.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb pigsty 0.0.6 21.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb pigsty 0.0.6 21.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-currency postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb pigsty 0.0.6 21.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-15-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_currency_14 pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm pigsty 0.0.6 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_currency_14 pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm pigsty 0.0.6 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_currency_14 pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm pigsty 0.0.6 29.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_currency_14 pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm pigsty 0.0.6 29.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_currency_14 pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm pigsty 0.0.6 29.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_currency_14 pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm pigsty 0.0.6 30.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_currency_14-0.0.6-1.git20261006.6c91875PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb pigsty 0.0.6 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb pigsty 0.0.6 19.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb pigsty 0.0.6 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb pigsty 0.0.6 19.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb pigsty 0.0.6 23.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb pigsty 0.0.6 23.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb pigsty 0.0.6 20.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb pigsty 0.0.6 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb pigsty 0.0.6 21.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-currency postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb pigsty 0.0.6 21.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-currency/postgresql-14-pg-currency_0.0.6+git20261006.6c91875-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_currency;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_currency -v 18  # PG 18
pig ext install -y pg_currency -v 17  # PG 17
pig ext install -y pg_currency -v 16  # PG 16
pig ext install -y pg_currency -v 15  # PG 15
pig ext install -y pg_currency -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_currency_18       # PG 18
dnf install -y pg_currency_17       # PG 17
dnf install -y pg_currency_16       # PG 16
dnf install -y pg_currency_15       # PG 15
dnf install -y pg_currency_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-currency   # PG 18
apt install -y postgresql-17-pg-currency   # PG 17
apt install -y postgresql-16-pg-currency   # PG 16
apt install -y postgresql-15-pg-currency   # PG 15
apt install -y postgresql-14-pg-currency   # PG 14
```


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

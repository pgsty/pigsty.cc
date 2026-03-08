---
title: "country"
linkTitle: "country"
description: "国家代码数据类型，遵循ISO 3166-1标准"
weight: 3600
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adjust/pg-country">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adjust/pg-country</div>
    <div class="ext-card__desc">https://github.com/adjust/pg-country</div>
  </a>
  <a class="ext-card ext-card--source" href="pg-country-0.0.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-country-0.0.3.tar.gz</div>
    <div class="ext-card__desc">pg-country-0.0.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_country`**](/ext/e/country) | `0.0.3` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3600  | [**`country`**](/ext/e/country) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) [`pg_xenophile`](/ext/e/pg_xenophile) [`currency`](/ext/e/currency) [`geoip`](/ext/e/geoip) [`icu_ext`](/ext/e/icu_ext) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_country` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_country_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-country` | - |
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
@ el8.x86_64 18 pg_country_18 pg_country_18-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 19.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_country_18-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_country_18 pg_country_18-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 18.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_country_18-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_country_18 pg_country_18-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_country_18-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_country_18 pg_country_18-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_country_18-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_country_18 pg_country_18-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_country_18-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_country_18 pg_country_18-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_country_18-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-country postgresql-18-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 27.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-18-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-country postgresql-18-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 28.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-18-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-country postgresql-18-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 27.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-18-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-country postgresql-18-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 28.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-18-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-country postgresql-18-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 31.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-18-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-country postgresql-18-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 32.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-18-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-country postgresql-18-pg-country_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 30.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-18-pg-country_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-country postgresql-18-pg-country_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 31.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-18-pg-country_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_country_17 pg_country_17-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 19.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_country_17-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_country_17 pg_country_17-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 18.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_country_17-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_country_17 pg_country_17-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_country_17-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_country_17 pg_country_17-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_country_17-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_country_17 pg_country_17-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_country_17-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_country_17 pg_country_17-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_country_17-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-country postgresql-17-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 28.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-17-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-country postgresql-17-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 28.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-17-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-country postgresql-17-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 27.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-17-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-country postgresql-17-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-17-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-country postgresql-17-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 32.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-17-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-country postgresql-17-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 32.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-17-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-country postgresql-17-pg-country_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 30.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-17-pg-country_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-country postgresql-17-pg-country_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 31.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-17-pg-country_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_country_16 pg_country_16-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 19.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_country_16-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_country_16 pg_country_16-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 18.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_country_16-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_country_16 pg_country_16-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_country_16-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_country_16 pg_country_16-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_country_16-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_country_16 pg_country_16-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_country_16-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_country_16 pg_country_16-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_country_16-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-country postgresql-16-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 28.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-16-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-country postgresql-16-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 28.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-16-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-country postgresql-16-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 28.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-16-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-country postgresql-16-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 28.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-16-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-country postgresql-16-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 32.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-16-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-country postgresql-16-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 32.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-16-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-country postgresql-16-pg-country_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 30.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-16-pg-country_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-country postgresql-16-pg-country_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 31.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-16-pg-country_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_country_15 pg_country_15-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 19.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_country_15-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_country_15 pg_country_15-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 18.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_country_15-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_country_15 pg_country_15-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_country_15-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_country_15 pg_country_15-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_country_15-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_country_15 pg_country_15-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_country_15-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_country_15 pg_country_15-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_country_15-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-country postgresql-15-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 28.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-15-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-country postgresql-15-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 28.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-15-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-country postgresql-15-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 28.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-15-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-country postgresql-15-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 28.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-15-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-country postgresql-15-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 32.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-15-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-country postgresql-15-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 32.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-15-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-country postgresql-15-pg-country_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 30.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-15-pg-country_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-country postgresql-15-pg-country_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 31.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-15-pg-country_0.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_country_14 pg_country_14-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 19.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_country_14-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_country_14 pg_country_14-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 18.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_country_14-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_country_14 pg_country_14-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_country_14-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_country_14 pg_country_14-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 17.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_country_14-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_country_14 pg_country_14-0.0.3-1PIGSTY.el10.x86_64.rpm pigsty 0.0.3 17.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_country_14-0.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_country_14 pg_country_14-0.0.3-1PIGSTY.el10.aarch64.rpm pigsty 0.0.3 17.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_country_14-0.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-country postgresql-14-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb pigsty 0.0.3 28.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-14-pg-country_0.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-country postgresql-14-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb pigsty 0.0.3 28.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-country/postgresql-14-pg-country_0.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-country postgresql-14-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb pigsty 0.0.3 27.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-14-pg-country_0.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-country postgresql-14-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb pigsty 0.0.3 28.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-country/postgresql-14-pg-country_0.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-country postgresql-14-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb pigsty 0.0.3 32.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-14-pg-country_0.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-country postgresql-14-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb pigsty 0.0.3 32.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-country/postgresql-14-pg-country_0.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-country postgresql-14-pg-country_0.0.3-1PIGSTY~noble_amd64.deb pigsty 0.0.3 30.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-14-pg-country_0.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-country postgresql-14-pg-country_0.0.3-1PIGSTY~noble_arm64.deb pigsty 0.0.3 31.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-country/postgresql-14-pg-country_0.0.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_country` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_country         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_country` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_country;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_country -v 18  # PG 18
pig ext install -y pg_country -v 17  # PG 17
pig ext install -y pg_country -v 16  # PG 16
pig ext install -y pg_country -v 15  # PG 15
pig ext install -y pg_country -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_country_18       # PG 18
dnf install -y pg_country_17       # PG 17
dnf install -y pg_country_16       # PG 16
dnf install -y pg_country_15       # PG 15
dnf install -y pg_country_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-country   # PG 18
apt install -y postgresql-17-pg-country   # PG 17
apt install -y postgresql-16-pg-country   # PG 16
apt install -y postgresql-15-pg-country   # PG 15
apt install -y postgresql-14-pg-country   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION country;
```

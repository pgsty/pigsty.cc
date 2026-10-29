---
title: "textsearch_intl"
linkTitle: "textsearch_intl"
description: "结合 ICU 分词、规范化与 n-gram 匹配的多语言全文检索"
weight: 2290
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/benjaminsanborn/textsearch_intl">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">benjaminsanborn/textsearch_intl</div>
    <div class="ext-card__desc">https://github.com/benjaminsanborn/textsearch_intl</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/textsearch_intl-1.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">textsearch_intl-1.0.1.tar.gz</div>
    <div class="ext-card__desc">textsearch_intl-1.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`textsearch_intl`**](/ext/e/textsearch_intl) | `1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2290  | [**`textsearch_intl`**](/ext/e/textsearch_intl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`unaccent`](/ext/e/unaccent) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Renamed from icu_parser; PGXN distribution 1.0.1 retains SQL/control 1.0. No direct upgrade from the old name. PostgreSQL 14-18, UTF8 and unaccent required; rebuild affected indexes after an ICU major-version change. Pigsty RPM and DEB packages are 1.0.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `textsearch_intl` | `unaccent` |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `textsearch_intl_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-textsearch-intl` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
@ el8.x86_64 18 textsearch_intl_18 textsearch_intl_18-1.0.1-1PGSTY.el8.x86_64.rpm pigsty 1.0.1 53.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/textsearch_intl_18-1.0.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 textsearch_intl_18 textsearch_intl_18-1.0.1-1PGSTY.el8.aarch64.rpm pigsty 1.0.1 52.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/textsearch_intl_18-1.0.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 textsearch_intl_18 textsearch_intl_18-1.0.1-1PGSTY.el9.x86_64.rpm pigsty 1.0.1 55.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/textsearch_intl_18-1.0.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 textsearch_intl_18 textsearch_intl_18-1.0.1-1PGSTY.el9.aarch64.rpm pigsty 1.0.1 53.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/textsearch_intl_18-1.0.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 textsearch_intl_18 textsearch_intl_18-1.0.1-1PGSTY.el10.x86_64.rpm pigsty 1.0.1 55.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/textsearch_intl_18-1.0.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 textsearch_intl_18 textsearch_intl_18-1.0.1-1PGSTY.el10.aarch64.rpm pigsty 1.0.1 54.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/textsearch_intl_18-1.0.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb pigsty 1.0.1 45.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb pigsty 1.0.1 44.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb pigsty 1.0.1 45.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb pigsty 1.0.1 44.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb pigsty 1.0.1 47.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb pigsty 1.0.1 46.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb pigsty 1.0.1 47.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb pigsty 1.0.1 46.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb pigsty 1.0.1 47.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-textsearch-intl postgresql-18-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb pigsty 1.0.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-18-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 textsearch_intl_17 textsearch_intl_17-1.0.1-1PGSTY.el8.x86_64.rpm pigsty 1.0.1 53.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/textsearch_intl_17-1.0.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 textsearch_intl_17 textsearch_intl_17-1.0.1-1PGSTY.el8.aarch64.rpm pigsty 1.0.1 52.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/textsearch_intl_17-1.0.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 textsearch_intl_17 textsearch_intl_17-1.0.1-1PGSTY.el9.x86_64.rpm pigsty 1.0.1 55.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/textsearch_intl_17-1.0.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 textsearch_intl_17 textsearch_intl_17-1.0.1-1PGSTY.el9.aarch64.rpm pigsty 1.0.1 53.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/textsearch_intl_17-1.0.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 textsearch_intl_17 textsearch_intl_17-1.0.1-1PGSTY.el10.x86_64.rpm pigsty 1.0.1 55.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/textsearch_intl_17-1.0.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 textsearch_intl_17 textsearch_intl_17-1.0.1-1PGSTY.el10.aarch64.rpm pigsty 1.0.1 54.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/textsearch_intl_17-1.0.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb pigsty 1.0.1 45.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb pigsty 1.0.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb pigsty 1.0.1 45.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb pigsty 1.0.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb pigsty 1.0.1 49.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb pigsty 1.0.1 48.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb pigsty 1.0.1 47.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb pigsty 1.0.1 46.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb pigsty 1.0.1 46.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-textsearch-intl postgresql-17-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb pigsty 1.0.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-17-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 textsearch_intl_16 textsearch_intl_16-1.0.1-1PGSTY.el8.x86_64.rpm pigsty 1.0.1 53.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/textsearch_intl_16-1.0.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 textsearch_intl_16 textsearch_intl_16-1.0.1-1PGSTY.el8.aarch64.rpm pigsty 1.0.1 52.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/textsearch_intl_16-1.0.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 textsearch_intl_16 textsearch_intl_16-1.0.1-1PGSTY.el9.x86_64.rpm pigsty 1.0.1 55.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/textsearch_intl_16-1.0.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 textsearch_intl_16 textsearch_intl_16-1.0.1-1PGSTY.el9.aarch64.rpm pigsty 1.0.1 53.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/textsearch_intl_16-1.0.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 textsearch_intl_16 textsearch_intl_16-1.0.1-1PGSTY.el10.x86_64.rpm pigsty 1.0.1 55.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/textsearch_intl_16-1.0.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 textsearch_intl_16 textsearch_intl_16-1.0.1-1PGSTY.el10.aarch64.rpm pigsty 1.0.1 54.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/textsearch_intl_16-1.0.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb pigsty 1.0.1 45.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb pigsty 1.0.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb pigsty 1.0.1 45.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb pigsty 1.0.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb pigsty 1.0.1 49.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb pigsty 1.0.1 48.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb pigsty 1.0.1 47.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb pigsty 1.0.1 46.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb pigsty 1.0.1 46.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-textsearch-intl postgresql-16-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb pigsty 1.0.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-16-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 textsearch_intl_15 textsearch_intl_15-1.0.1-1PGSTY.el8.x86_64.rpm pigsty 1.0.1 53.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/textsearch_intl_15-1.0.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 textsearch_intl_15 textsearch_intl_15-1.0.1-1PGSTY.el8.aarch64.rpm pigsty 1.0.1 52.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/textsearch_intl_15-1.0.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 textsearch_intl_15 textsearch_intl_15-1.0.1-1PGSTY.el9.x86_64.rpm pigsty 1.0.1 55.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/textsearch_intl_15-1.0.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 textsearch_intl_15 textsearch_intl_15-1.0.1-1PGSTY.el9.aarch64.rpm pigsty 1.0.1 53.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/textsearch_intl_15-1.0.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 textsearch_intl_15 textsearch_intl_15-1.0.1-1PGSTY.el10.x86_64.rpm pigsty 1.0.1 55.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/textsearch_intl_15-1.0.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 textsearch_intl_15 textsearch_intl_15-1.0.1-1PGSTY.el10.aarch64.rpm pigsty 1.0.1 54.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/textsearch_intl_15-1.0.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb pigsty 1.0.1 45.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb pigsty 1.0.1 45.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb pigsty 1.0.1 45.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb pigsty 1.0.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb pigsty 1.0.1 49.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb pigsty 1.0.1 48.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb pigsty 1.0.1 47.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb pigsty 1.0.1 46.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb pigsty 1.0.1 46.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-textsearch-intl postgresql-15-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb pigsty 1.0.1 46.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-15-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 textsearch_intl_14 textsearch_intl_14-1.0.1-1PGSTY.el8.x86_64.rpm pigsty 1.0.1 53.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/textsearch_intl_14-1.0.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 textsearch_intl_14 textsearch_intl_14-1.0.1-1PGSTY.el8.aarch64.rpm pigsty 1.0.1 52.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/textsearch_intl_14-1.0.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 textsearch_intl_14 textsearch_intl_14-1.0.1-1PGSTY.el9.x86_64.rpm pigsty 1.0.1 55.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/textsearch_intl_14-1.0.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 textsearch_intl_14 textsearch_intl_14-1.0.1-1PGSTY.el9.aarch64.rpm pigsty 1.0.1 53.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/textsearch_intl_14-1.0.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 textsearch_intl_14 textsearch_intl_14-1.0.1-1PGSTY.el10.x86_64.rpm pigsty 1.0.1 55.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/textsearch_intl_14-1.0.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 textsearch_intl_14 textsearch_intl_14-1.0.1-1PGSTY.el10.aarch64.rpm pigsty 1.0.1 54.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/textsearch_intl_14-1.0.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb pigsty 1.0.1 45.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb pigsty 1.0.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb pigsty 1.0.1 45.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb pigsty 1.0.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb pigsty 1.0.1 49.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb pigsty 1.0.1 48.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb pigsty 1.0.1 47.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb pigsty 1.0.1 46.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb pigsty 1.0.1 46.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-textsearch-intl postgresql-14-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb pigsty 1.0.1 45.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/t/textsearch-intl/postgresql-14-textsearch-intl_1.0.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `textsearch_intl` 扩展的 RPM / DEB 包：

```bash
pig build pkg textsearch_intl         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `textsearch_intl` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install textsearch_intl;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y textsearch_intl -v 18  # PG 18
pig ext install -y textsearch_intl -v 17  # PG 17
pig ext install -y textsearch_intl -v 16  # PG 16
pig ext install -y textsearch_intl -v 15  # PG 15
pig ext install -y textsearch_intl -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y textsearch_intl_18       # PG 18
dnf install -y textsearch_intl_17       # PG 17
dnf install -y textsearch_intl_16       # PG 16
dnf install -y textsearch_intl_15       # PG 15
dnf install -y textsearch_intl_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-textsearch-intl   # PG 18
apt install -y postgresql-17-textsearch-intl   # PG 17
apt install -y postgresql-16-textsearch-intl   # PG 16
apt install -y postgresql-15-textsearch-intl   # PG 15
apt install -y postgresql-14-textsearch-intl   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION textsearch_intl CASCADE;  -- 依赖: unaccent
```

## 用法

来源：

- [README.md](https://github.com/benjaminsanborn/textsearch_intl/blob/6efb0a28a5f6643b46ecd2e9b8de75c30fb82680/README.md)
- [textsearch_intl--1.0.sql](https://github.com/benjaminsanborn/textsearch_intl/blob/6efb0a28a5f6643b46ecd2e9b8de75c30fb82680/textsearch_intl--1.0.sql)
- [textsearch_intl.control](https://github.com/benjaminsanborn/textsearch_intl/blob/6efb0a28a5f6643b46ecd2e9b8de75c30fb82680/textsearch_intl.control)
- [META.json](https://github.com/benjaminsanborn/textsearch_intl/blob/6efb0a28a5f6643b46ecd2e9b8de75c30fb82680/META.json)
- [LICENSE](https://github.com/benjaminsanborn/textsearch_intl/blob/6efb0a28a5f6643b46ecd2e9b8de75c30fb82680/LICENSE)
- [改名提交](https://github.com/benjaminsanborn/textsearch_intl/commit/b023b27aa16b82fc3c1b80ef0928e9f185e7f43e)
- [PGXN textsearch_intl 1.0.1](https://pgxn.org/dist/textsearch_intl/1.0.1/)

`textsearch_intl` 将 ICU 分词、规范化和 n-gram 匹配组合为多语言全文检索功能。它要求 PostgreSQL 14 或更新版本、UTF8 数据库、ICU 和 `unaccent`；上游 CI 覆盖 PostgreSQL 14–18。

### 名称与版本

项目于 2026-10-09 从 `icu_parser` 改名为 `textsearch_intl` 并重新编号。2026-10-22 已正式发布新的 PGXN 分发 1.0.1；SQL/control 版本仍为 `1.0`，不能把分发版本误作 SQL 升级目标。旧名称没有直接的 SQL 升级脚本，迁移前需检查依赖对象并制定重建步骤。

### 核心用法

```sql
CREATE EXTENSION textsearch_intl CASCADE;
SELECT alias, token FROM ts_debug('intl_simple', '東京駅前ラーメン店 ร้านกาแฟ Café');
SELECT to_tsvector('intl_search', 'Café') @@ phraseto_tsquery('intl_search', 'cafe');
SELECT to_tsvector('intl_search_ngram', '행복한편의점')
       @@ phraseto_tsquery('intl_search_ngram', '편의점');
SELECT intl_icu_version();
```

### 检索配置

- `intl_simple` 使用 `intl` 解析器，保留重音和字符宽度。
- `intl_search` 组合 `intl_normalize`、`unaccent` 与 `intl_join`，进行规范化的整词检索。词语拼接默认关闭。
- `intl_search_ngram` 使用 `intl_runs` 与 `intl_ngram`，匹配韩文、中日文词元内部，以及不带空格的泰文、老挝文、高棉文和缅甸文片段。N-gram 可能增加误匹配和索引体积。

### 运行边界

使用超级用户安装；扩展可迁移，未标记为可信，也不需要预加载。词序重要时优先使用 `phraseto_tsquery()`。`intl_icu_version()` 返回已加载的 ICU 版本；ICU 主版本改变后应重建相关索引。ICU 分词不是日文形态分析，部分 CJK 词前缀查询仍不可靠。

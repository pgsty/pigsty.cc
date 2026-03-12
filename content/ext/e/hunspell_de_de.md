---
title: "hunspell_de_de"
linkTitle: "hunspell_de_de"
description: "Hunspell德语全文检索词典"
weight: 2271
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgrespro/hunspell_dicts">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgrespro/hunspell_dicts</div>
    <div class="ext-card__desc">https://github.com/postgrespro/hunspell_dicts</div>
  </a>
  <a class="ext-card ext-card--source" href="hunspell-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">hunspell-1.0.tar.gz</div>
    <div class="ext-card__desc">hunspell-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`hunspell_de_de`**](/ext/e/hunspell_de_de) | `1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2271  | [**`hunspell_de_de`**](/ext/e/hunspell_de_de) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hunspell_cs_cz`](/ext/e/hunspell_cs_cz) [`hunspell_en_us`](/ext/e/hunspell_en_us) [`hunspell_fr`](/ext/e/hunspell_fr) [`hunspell_nl_nl`](/ext/e/hunspell_nl_nl) [`hunspell_ne_np`](/ext/e/hunspell_ne_np) [`hunspell_nn_no`](/ext/e/hunspell_nn_no) [`hunspell_pt_pt`](/ext/e/hunspell_pt_pt) [`hunspell_ru_ru`](/ext/e/hunspell_ru_ru) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `hunspell_de_de` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `hunspell_de_de_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-hunspell-de-de` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 hunspell_de_de_18 hunspell_de_de_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/hunspell_de_de_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 hunspell_de_de_18 hunspell_de_de_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/hunspell_de_de_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 hunspell_de_de_18 hunspell_de_de_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 958.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/hunspell_de_de_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 hunspell_de_de_18 hunspell_de_de_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 958.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/hunspell_de_de_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 hunspell_de_de_18 hunspell_de_de_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 958.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/hunspell_de_de_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 hunspell_de_de_18 hunspell_de_de_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 958.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/hunspell_de_de_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-hunspell-de-de postgresql-18-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 928.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-18-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-hunspell-de-de postgresql-18-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 928.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-18-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-hunspell-de-de postgresql-18-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 929.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-18-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-hunspell-de-de postgresql-18-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 929.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-18-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-hunspell-de-de postgresql-18-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 951.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-18-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-hunspell-de-de postgresql-18-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 951.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-18-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-hunspell-de-de postgresql-18-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 950.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-18-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-hunspell-de-de postgresql-18-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 950.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-18-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 hunspell_de_de_17 hunspell_de_de_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/hunspell_de_de_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 hunspell_de_de_17 hunspell_de_de_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/hunspell_de_de_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 hunspell_de_de_17 hunspell_de_de_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 958.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/hunspell_de_de_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 hunspell_de_de_17 hunspell_de_de_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 958.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/hunspell_de_de_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 hunspell_de_de_17 hunspell_de_de_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 958.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/hunspell_de_de_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 hunspell_de_de_17 hunspell_de_de_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 958.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/hunspell_de_de_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-hunspell-de-de postgresql-17-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 928.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-17-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-hunspell-de-de postgresql-17-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 928.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-17-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-hunspell-de-de postgresql-17-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 929.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-17-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-hunspell-de-de postgresql-17-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 929.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-17-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-hunspell-de-de postgresql-17-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 952.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-17-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-hunspell-de-de postgresql-17-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 952.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-17-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-hunspell-de-de postgresql-17-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 951.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-17-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-hunspell-de-de postgresql-17-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 951.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-17-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 hunspell_de_de_16 hunspell_de_de_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/hunspell_de_de_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 hunspell_de_de_16 hunspell_de_de_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/hunspell_de_de_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 hunspell_de_de_16 hunspell_de_de_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 958.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/hunspell_de_de_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 hunspell_de_de_16 hunspell_de_de_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 958.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/hunspell_de_de_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 hunspell_de_de_16 hunspell_de_de_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 958.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/hunspell_de_de_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 hunspell_de_de_16 hunspell_de_de_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 958.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/hunspell_de_de_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-hunspell-de-de postgresql-16-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 928.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-16-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-hunspell-de-de postgresql-16-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 928.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-16-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-hunspell-de-de postgresql-16-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 928.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-16-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-hunspell-de-de postgresql-16-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 928.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-16-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-hunspell-de-de postgresql-16-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 952.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-16-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-hunspell-de-de postgresql-16-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 952.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-16-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-hunspell-de-de postgresql-16-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 951.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-16-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-hunspell-de-de postgresql-16-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 951.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-16-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 hunspell_de_de_15 hunspell_de_de_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/hunspell_de_de_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 hunspell_de_de_15 hunspell_de_de_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/hunspell_de_de_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 hunspell_de_de_15 hunspell_de_de_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 958.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/hunspell_de_de_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 hunspell_de_de_15 hunspell_de_de_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 958.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/hunspell_de_de_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 hunspell_de_de_15 hunspell_de_de_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 958.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/hunspell_de_de_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 hunspell_de_de_15 hunspell_de_de_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 958.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/hunspell_de_de_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-hunspell-de-de postgresql-15-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 929.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-15-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-hunspell-de-de postgresql-15-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 929.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-15-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-hunspell-de-de postgresql-15-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 928.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-15-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-hunspell-de-de postgresql-15-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 928.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-15-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-hunspell-de-de postgresql-15-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 952.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-15-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-hunspell-de-de postgresql-15-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 952.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-15-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-hunspell-de-de postgresql-15-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 950.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-15-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-hunspell-de-de postgresql-15-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 950.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-15-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 hunspell_de_de_14 hunspell_de_de_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/hunspell_de_de_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 hunspell_de_de_14 hunspell_de_de_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/hunspell_de_de_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 hunspell_de_de_14 hunspell_de_de_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 958.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/hunspell_de_de_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 hunspell_de_de_14 hunspell_de_de_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 958.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/hunspell_de_de_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 hunspell_de_de_14 hunspell_de_de_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 958.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/hunspell_de_de_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 hunspell_de_de_14 hunspell_de_de_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 958.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/hunspell_de_de_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-hunspell-de-de postgresql-14-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 928.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-14-hunspell-de-de_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-hunspell-de-de postgresql-14-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 928.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/h/hunspell-de-de/postgresql-14-hunspell-de-de_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-hunspell-de-de postgresql-14-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 929.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-14-hunspell-de-de_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-hunspell-de-de postgresql-14-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 929.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/h/hunspell-de-de/postgresql-14-hunspell-de-de_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-hunspell-de-de postgresql-14-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 952.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-14-hunspell-de-de_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-hunspell-de-de postgresql-14-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 952.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/h/hunspell-de-de/postgresql-14-hunspell-de-de_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-hunspell-de-de postgresql-14-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 950.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-14-hunspell-de-de_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-hunspell-de-de postgresql-14-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 950.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/h/hunspell-de-de/postgresql-14-hunspell-de-de_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `hunspell_de_de` 扩展的 RPM / DEB 包：

```bash
pig build pkg hunspell_de_de         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `hunspell_de_de` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install hunspell_de_de;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y hunspell_de_de -v 18  # PG 18
pig ext install -y hunspell_de_de -v 17  # PG 17
pig ext install -y hunspell_de_de -v 16  # PG 16
pig ext install -y hunspell_de_de -v 15  # PG 15
pig ext install -y hunspell_de_de -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y hunspell_de_de_18       # PG 18
dnf install -y hunspell_de_de_17       # PG 17
dnf install -y hunspell_de_de_16       # PG 16
dnf install -y hunspell_de_de_15       # PG 15
dnf install -y hunspell_de_de_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-hunspell-de-de   # PG 18
apt install -y postgresql-17-hunspell-de-de   # PG 17
apt install -y postgresql-16-hunspell-de-de   # PG 16
apt install -y postgresql-15-hunspell-de-de   # PG 15
apt install -y postgresql-14-hunspell-de-de   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION hunspell_de_de;
```



## 用法

> [hunspell_de_de: PostgreSQL 的德语 Hunspell 词典](https://github.com/postgrespro/hunspell_dicts)

用于 PostgreSQL 全文搜索的德语 Hunspell 词典和文本搜索配置。

```sql
CREATE EXTENSION hunspell_de_de;

SELECT ts_lexize('german_hunspell', 'Geschichten');

SELECT to_tsvector('german_hunspell', 'Geschichten');
```

该扩展提供 `german_hunspell` 词典和文本搜索配置。

---
title: "hunspell_ru_ru_aot"
linkTitle: "hunspell_ru_ru_aot"
description: "Hunspell俄语全文检索词典（来自AOT.ru小组）"
weight: 2279
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgrespro/hunspell_dicts">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgrespro/hunspell_dicts</div>
    <div class="ext-card__desc">https://github.com/postgrespro/hunspell_dicts</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/hunspell-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">hunspell-1.0.tar.gz</div>
    <div class="ext-card__desc">hunspell-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`hunspell_ru_ru_aot`**](/ext/e/hunspell_ru_ru_aot) | `1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang data" href="/ext/language#data">Data</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2279  | [**`hunspell_ru_ru_aot`**](/ext/e/hunspell_ru_ru_aot) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hunspell_ne_np`](/ext/e/hunspell_ne_np) [`hunspell_nn_no`](/ext/e/hunspell_nn_no) [`hunspell_pt_pt`](/ext/e/hunspell_pt_pt) [`hunspell_ru_ru`](/ext/e/hunspell_ru_ru) [`hunspell_cs_cz`](/ext/e/hunspell_cs_cz) [`hunspell_de_de`](/ext/e/hunspell_de_de) [`hunspell_en_us`](/ext/e/hunspell_en_us) [`hunspell_fr`](/ext/e/hunspell_fr) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `hunspell_ru_ru_aot` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `hunspell_ru_ru_aot_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-hunspell-ru-ru-aot` | - |
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
@ el8.x86_64 18 hunspell_ru_ru_aot_18 hunspell_ru_ru_aot_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hunspell_ru_ru_aot_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 hunspell_ru_ru_aot_18 hunspell_ru_ru_aot_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hunspell_ru_ru_aot_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 hunspell_ru_ru_aot_18 hunspell_ru_ru_aot_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hunspell_ru_ru_aot_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 hunspell_ru_ru_aot_18 hunspell_ru_ru_aot_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hunspell_ru_ru_aot_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 hunspell_ru_ru_aot_18 hunspell_ru_ru_aot_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hunspell_ru_ru_aot_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 hunspell_ru_ru_aot_18 hunspell_ru_ru_aot_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hunspell_ru_ru_aot_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-hunspell-ru-ru-aot postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-hunspell-ru-ru-aot postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-hunspell-ru-ru-aot postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-hunspell-ru-ru-aot postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-hunspell-ru-ru-aot postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-hunspell-ru-ru-aot postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-hunspell-ru-ru-aot postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-hunspell-ru-ru-aot postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-18-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 hunspell_ru_ru_aot_17 hunspell_ru_ru_aot_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hunspell_ru_ru_aot_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 hunspell_ru_ru_aot_17 hunspell_ru_ru_aot_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hunspell_ru_ru_aot_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 hunspell_ru_ru_aot_17 hunspell_ru_ru_aot_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hunspell_ru_ru_aot_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 hunspell_ru_ru_aot_17 hunspell_ru_ru_aot_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hunspell_ru_ru_aot_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 hunspell_ru_ru_aot_17 hunspell_ru_ru_aot_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hunspell_ru_ru_aot_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 hunspell_ru_ru_aot_17 hunspell_ru_ru_aot_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hunspell_ru_ru_aot_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-hunspell-ru-ru-aot postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-hunspell-ru-ru-aot postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-hunspell-ru-ru-aot postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-hunspell-ru-ru-aot postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-hunspell-ru-ru-aot postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-hunspell-ru-ru-aot postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-hunspell-ru-ru-aot postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-hunspell-ru-ru-aot postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-17-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 hunspell_ru_ru_aot_16 hunspell_ru_ru_aot_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hunspell_ru_ru_aot_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 hunspell_ru_ru_aot_16 hunspell_ru_ru_aot_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hunspell_ru_ru_aot_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 hunspell_ru_ru_aot_16 hunspell_ru_ru_aot_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hunspell_ru_ru_aot_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 hunspell_ru_ru_aot_16 hunspell_ru_ru_aot_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hunspell_ru_ru_aot_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 hunspell_ru_ru_aot_16 hunspell_ru_ru_aot_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hunspell_ru_ru_aot_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 hunspell_ru_ru_aot_16 hunspell_ru_ru_aot_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hunspell_ru_ru_aot_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-hunspell-ru-ru-aot postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-hunspell-ru-ru-aot postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-hunspell-ru-ru-aot postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-hunspell-ru-ru-aot postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-hunspell-ru-ru-aot postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-hunspell-ru-ru-aot postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-hunspell-ru-ru-aot postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-hunspell-ru-ru-aot postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-16-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 hunspell_ru_ru_aot_15 hunspell_ru_ru_aot_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hunspell_ru_ru_aot_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 hunspell_ru_ru_aot_15 hunspell_ru_ru_aot_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hunspell_ru_ru_aot_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 hunspell_ru_ru_aot_15 hunspell_ru_ru_aot_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hunspell_ru_ru_aot_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 hunspell_ru_ru_aot_15 hunspell_ru_ru_aot_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hunspell_ru_ru_aot_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 hunspell_ru_ru_aot_15 hunspell_ru_ru_aot_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hunspell_ru_ru_aot_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 hunspell_ru_ru_aot_15 hunspell_ru_ru_aot_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hunspell_ru_ru_aot_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-hunspell-ru-ru-aot postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-hunspell-ru-ru-aot postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-hunspell-ru-ru-aot postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-hunspell-ru-ru-aot postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-hunspell-ru-ru-aot postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-hunspell-ru-ru-aot postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-hunspell-ru-ru-aot postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-hunspell-ru-ru-aot postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-15-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 hunspell_ru_ru_aot_14 hunspell_ru_ru_aot_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hunspell_ru_ru_aot_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 hunspell_ru_ru_aot_14 hunspell_ru_ru_aot_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hunspell_ru_ru_aot_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 hunspell_ru_ru_aot_14 hunspell_ru_ru_aot_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hunspell_ru_ru_aot_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 hunspell_ru_ru_aot_14 hunspell_ru_ru_aot_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hunspell_ru_ru_aot_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 hunspell_ru_ru_aot_14 hunspell_ru_ru_aot_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hunspell_ru_ru_aot_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 hunspell_ru_ru_aot_14 hunspell_ru_ru_aot_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hunspell_ru_ru_aot_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-hunspell-ru-ru-aot postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-hunspell-ru-ru-aot postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hunspell-ru-ru-aot/postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-hunspell-ru-ru-aot postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-hunspell-ru-ru-aot postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hunspell-ru-ru-aot/postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-hunspell-ru-ru-aot postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-hunspell-ru-ru-aot postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hunspell-ru-ru-aot/postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-hunspell-ru-ru-aot postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-hunspell-ru-ru-aot postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hunspell-ru-ru-aot/postgresql-14-hunspell-ru-ru-aot_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `hunspell_ru_ru_aot` 扩展的 RPM / DEB 包：

```bash
pig build pkg hunspell_ru_ru_aot         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `hunspell_ru_ru_aot` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install hunspell_ru_ru_aot;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y hunspell_ru_ru_aot -v 18  # PG 18
pig ext install -y hunspell_ru_ru_aot -v 17  # PG 17
pig ext install -y hunspell_ru_ru_aot -v 16  # PG 16
pig ext install -y hunspell_ru_ru_aot -v 15  # PG 15
pig ext install -y hunspell_ru_ru_aot -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y hunspell_ru_ru_aot_18       # PG 18
dnf install -y hunspell_ru_ru_aot_17       # PG 17
dnf install -y hunspell_ru_ru_aot_16       # PG 16
dnf install -y hunspell_ru_ru_aot_15       # PG 15
dnf install -y hunspell_ru_ru_aot_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-hunspell-ru-ru-aot   # PG 18
apt install -y postgresql-17-hunspell-ru-ru-aot   # PG 17
apt install -y postgresql-16-hunspell-ru-ru-aot   # PG 16
apt install -y postgresql-15-hunspell-ru-ru-aot   # PG 15
apt install -y postgresql-14-hunspell-ru-ru-aot   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION hunspell_ru_ru_aot;
```



## 用法

> [hunspell_ru_ru_aot: PostgreSQL 的俄语（AOT）Hunspell 词典](https://github.com/postgrespro/hunspell_dicts)

用于 PostgreSQL 全文搜索的俄语（AOT 变体）Hunspell 词典和文本搜索配置。

```sql
CREATE EXTENSION hunspell_ru_ru_aot;

SELECT ts_lexize('russian_aot_hunspell', 'рассказы');

SELECT to_tsvector('russian_aot_hunspell', 'рассказы');
```

该扩展提供 `russian_aot_hunspell` 词典和文本搜索配置。

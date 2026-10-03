---
title: "jev"
linkTitle: "jev"
description: "通过 TypeSafe 实现自然语言行过滤、排序和分类"
weight: 1900
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/realZachi/pg-jev">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">realZachi/pg-jev</div>
    <div class="ext-card__desc">https://github.com/realZachi/pg-jev</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/jev-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">jev-0.2.0.tar.gz</div>
    <div class="ext-card__desc">jev-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`jev`**](/ext/e/jev) | `0.2.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang python" href="/ext/language#python">Python</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1900  | [**`jev`**](/ext/e/jev) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`plpython3u`](/ext/e/plpython3u) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires plpython3u and API credentials; sends row contents to an external model service. PG14-17.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "17,16,15,14" >}} | `jev` | `plpython3u` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "17,16,15,14" >}} | `jev_$v` | `postgresql$v-plpython3` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-jev` | `postgresql-plpython3-$v` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el9.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el9.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el10.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| el10.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d12.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d12.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d13.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| d13.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u22.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u22.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u24.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u24.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u26.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
| u26.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 |
@ el8.x86_64 17 jev_17 jev_17-0.2.0-1PGSTY.el8.noarch.rpm pigsty 0.2.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jev_17-0.2.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 jev_17 jev_17-0.2.0-1PGSTY.el8.noarch.rpm pigsty 0.2.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jev_17-0.2.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 jev_17 jev_17-0.2.0-1PGSTY.el9.noarch.rpm pigsty 0.2.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jev_17-0.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 jev_17 jev_17-0.2.0-1PGSTY.el9.noarch.rpm pigsty 0.2.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jev_17-0.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 jev_17 jev_17-0.2.0-1PGSTY.el10.noarch.rpm pigsty 0.2.0 23.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jev_17-0.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 jev_17 jev_17-0.2.0-1PGSTY.el10.noarch.rpm pigsty 0.2.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jev_17-0.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~bookworm_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~bookworm_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~trixie_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~trixie_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~jammy_all.deb pigsty 0.2.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~jammy_all.deb pigsty 0.2.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~noble_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~noble_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~resolute_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-jev postgresql-17-jev_0.2.0-1PGSTY~resolute_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jev/postgresql-17-jev_0.2.0-1PGSTY~resolute_all.deb
@ el8.x86_64 16 jev_16 jev_16-0.2.0-1PGSTY.el8.noarch.rpm pigsty 0.2.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jev_16-0.2.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 jev_16 jev_16-0.2.0-1PGSTY.el8.noarch.rpm pigsty 0.2.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jev_16-0.2.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 jev_16 jev_16-0.2.0-1PGSTY.el9.noarch.rpm pigsty 0.2.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jev_16-0.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 jev_16 jev_16-0.2.0-1PGSTY.el9.noarch.rpm pigsty 0.2.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jev_16-0.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 jev_16 jev_16-0.2.0-1PGSTY.el10.noarch.rpm pigsty 0.2.0 23.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jev_16-0.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 jev_16 jev_16-0.2.0-1PGSTY.el10.noarch.rpm pigsty 0.2.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jev_16-0.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~bookworm_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~bookworm_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~trixie_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~trixie_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~jammy_all.deb pigsty 0.2.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~jammy_all.deb pigsty 0.2.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~noble_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~noble_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~resolute_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-jev postgresql-16-jev_0.2.0-1PGSTY~resolute_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jev/postgresql-16-jev_0.2.0-1PGSTY~resolute_all.deb
@ el8.x86_64 15 jev_15 jev_15-0.2.0-1PGSTY.el8.noarch.rpm pigsty 0.2.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jev_15-0.2.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 jev_15 jev_15-0.2.0-1PGSTY.el8.noarch.rpm pigsty 0.2.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jev_15-0.2.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 15 jev_15 jev_15-0.2.0-1PGSTY.el9.noarch.rpm pigsty 0.2.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jev_15-0.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 jev_15 jev_15-0.2.0-1PGSTY.el9.noarch.rpm pigsty 0.2.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jev_15-0.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 jev_15 jev_15-0.2.0-1PGSTY.el10.noarch.rpm pigsty 0.2.0 23.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jev_15-0.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 jev_15 jev_15-0.2.0-1PGSTY.el10.noarch.rpm pigsty 0.2.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jev_15-0.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~bookworm_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~bookworm_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~trixie_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~trixie_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~jammy_all.deb pigsty 0.2.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~jammy_all.deb pigsty 0.2.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~noble_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~noble_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~resolute_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-jev postgresql-15-jev_0.2.0-1PGSTY~resolute_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jev/postgresql-15-jev_0.2.0-1PGSTY~resolute_all.deb
@ el8.x86_64 14 jev_14 jev_14-0.2.0-1PGSTY.el8.noarch.rpm pigsty 0.2.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jev_14-0.2.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 14 jev_14 jev_14-0.2.0-1PGSTY.el8.noarch.rpm pigsty 0.2.0 23.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jev_14-0.2.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 14 jev_14 jev_14-0.2.0-1PGSTY.el9.noarch.rpm pigsty 0.2.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jev_14-0.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 14 jev_14 jev_14-0.2.0-1PGSTY.el9.noarch.rpm pigsty 0.2.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jev_14-0.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 14 jev_14 jev_14-0.2.0-1PGSTY.el10.noarch.rpm pigsty 0.2.0 23.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jev_14-0.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 14 jev_14 jev_14-0.2.0-1PGSTY.el10.noarch.rpm pigsty 0.2.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jev_14-0.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~bookworm_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~bookworm_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~trixie_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~trixie_all.deb pigsty 0.2.0 19.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~jammy_all.deb pigsty 0.2.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~jammy_all.deb pigsty 0.2.0 17.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~noble_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~noble_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~resolute_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-jev postgresql-14-jev_0.2.0-1PGSTY~resolute_all.deb pigsty 0.2.0 17.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jev/postgresql-14-jev_0.2.0-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `jev` 扩展的 RPM / DEB 包：

```bash
pig build pkg jev         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `jev` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install jev;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y jev -v 17  # PG 17
pig ext install -y jev -v 16  # PG 16
pig ext install -y jev -v 15  # PG 15
pig ext install -y jev -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y jev_17       # PG 17
dnf install -y jev_16       # PG 16
dnf install -y jev_15       # PG 15
dnf install -y jev_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-17-jev   # PG 17
apt install -y postgresql-16-jev   # PG 16
apt install -y postgresql-15-jev   # PG 15
apt install -y postgresql-14-jev   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION jev CASCADE;  -- 依赖: plpython3u
```

## 用法

来源：

- [PGXN 0.2.0](https://pgxn.org/dist/jev/0.2.0/)

`jev` 使用 TypeSafe API 对自然语言条件求值，实现行过滤、排序和分类。它依赖 `plpython3u`，需要超级用户安装和 API 密钥。上游文档支持 PostgreSQL 14–17，无需预加载。

### 查询数据行

```sql
CREATE EXTENSION jev CASCADE;
SET jev.api_key = 'your-key';
CREATE TABLE jev_demo (id integer, body text);
INSERT INTO jev_demo VALUES (1, 'The customer requests a refund');
SELECT id, jev_prob(jev_demo, 'the customer requests a refund')
FROM jev_demo;
SELECT jev_stats();
```

`jev()` 返回布尔谓词，`jev_prob()` 返回概率；`jev_choice()` 从选项中分类，`jev_score()` 对有序等级评分。缓存和连接池属于会话，`jev_cache_clear()` 清理会话状态。

### 服务与数据边界

扩展会将行内容发送至配置的 API。通过 `jev.api_url` 指定服务，使用 `jev.max_rows_per_statement` 和 `jev.max_chars_per_statement` 限制工作量。API 延迟和费用取决于服务与数据量，API 密钥须按凭据管理。

PL/Python 以数据库服务进程的操作系统权限运行；不提供超级用户或 PL/Python 的托管服务无法运行此扩展。本地包测试使用上游模拟 API，不验证远程模型判断的质量。

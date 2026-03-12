---
title: "pgsql_tweaks"
linkTitle: "pgsql_tweaks"
description: "一些日常会用到的便利函数与视图"
weight: 4200
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/pgsql_tweaks/pgsql_tweaks">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/pgsql_tweaks/pgsql_tweaks</div>
    <div class="ext-card__desc">https://codeberg.org/pgsql_tweaks/pgsql_tweaks</div>
  </a>
  <a class="ext-card ext-card--source" href="pgsql_tweaks-v1.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsql_tweaks-v1.0.2.tar.gz</div>
    <div class="ext-card__desc">pgsql_tweaks-v1.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgsql_tweaks`**](/ext/e/pgsql_tweaks) | `1.0.2` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4200  | [**`pgsql_tweaks`**](/ext/e/pgsql_tweaks) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_extra_time`](/ext/e/pg_extra_time) [`extra_window_functions`](/ext/e/extra_window_functions) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pgsql_tweaks` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `pgsql_tweaks_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgsql-tweaks` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0.2 1 | AVAIL PGDG 1.0.2 7 | AVAIL PGDG 1.0.2 9 | AVAIL PGDG 1.0.2 9 | AVAIL PGDG 1.0.2 11 |
| el8.aarch64 | AVAIL PGDG 1.0.2 1 | AVAIL PGDG 1.0.2 7 | AVAIL PGDG 1.0.2 9 | AVAIL PGDG 1.0.2 9 | AVAIL PGDG 1.0.2 9 |
| el9.x86_64 | AVAIL PGDG 1.0.2 1 | AVAIL PGDG 1.0.2 7 | AVAIL PGDG 1.0.2 9 | AVAIL PGDG 1.0.2 9 | AVAIL PGDG 1.0.2 10 |
| el9.aarch64 | AVAIL PGDG 1.0.2 1 | AVAIL PGDG 1.0.2 7 | AVAIL PGDG 1.0.2 9 | AVAIL PGDG 1.0.2 9 | AVAIL PGDG 1.0.2 9 |
| el10.x86_64 | AVAIL PGDG 1.0.2 1 | AVAIL PGDG 1.0.2 4 | AVAIL PGDG 1.0.2 4 | AVAIL PGDG 1.0.2 4 | AVAIL PGDG 1.0.2 4 |
| el10.aarch64 | AVAIL PGDG 1.0.2 1 | AVAIL PGDG 1.0.2 4 | AVAIL PGDG 1.0.2 4 | AVAIL PGDG 1.0.2 4 | AVAIL PGDG 1.0.2 4 |
| d12.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
@ el8.x86_64 18 pgsql_tweaks_18 pgsql_tweaks_18-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgsql_tweaks_18-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pgsql_tweaks_18 pgsql_tweaks_18-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgsql_tweaks_18-1.0.2-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pgsql_tweaks_18 pgsql_tweaks_18-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgsql_tweaks_18-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pgsql_tweaks_18 pgsql_tweaks_18-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgsql_tweaks_18-1.0.2-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pgsql_tweaks_18 pgsql_tweaks_18-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgsql_tweaks_18-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pgsql_tweaks_18 pgsql_tweaks_18-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgsql_tweaks_18-1.0.2-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgsql-tweaks postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgsql-tweaks postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgsql-tweaks postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgsql-tweaks postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgsql-tweaks postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgsql-tweaks postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgsql-tweaks postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgsql-tweaks postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-18-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgsql_tweaks_17-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 29.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgsql_tweaks_17-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.3-1PGDG.rhel8.noarch.rpm pgdg 0.11.3 27.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgsql_tweaks_17-0.11.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.0-1PGDG.rhel8.noarch.rpm pgdg 0.11.0 27.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgsql_tweaks_17-0.11.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.7-1PGDG.rhel8.noarch.rpm pgdg 0.10.7 24.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgsql_tweaks_17-0.10.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.6-1PGDG.rhel8.noarch.rpm pgdg 0.10.6 24.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgsql_tweaks_17-0.10.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.3-1PGDG.rhel8.noarch.rpm pgdg 0.10.3 23.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgsql_tweaks_17-0.10.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgsql_tweaks_17-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 29.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgsql_tweaks_17-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.3-1PGDG.rhel8.noarch.rpm pgdg 0.11.3 27.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgsql_tweaks_17-0.11.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.0-1PGDG.rhel8.noarch.rpm pgdg 0.11.0 27.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgsql_tweaks_17-0.11.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.7-1PGDG.rhel8.noarch.rpm pgdg 0.10.7 24.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgsql_tweaks_17-0.10.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.6-1PGDG.rhel8.noarch.rpm pgdg 0.10.6 24.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgsql_tweaks_17-0.10.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.3-1PGDG.rhel8.noarch.rpm pgdg 0.10.3 23.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgsql_tweaks_17-0.10.3-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgsql_tweaks_17-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.0-1PGDG.rhel9.noarch.rpm pgdg 1.0.0 27.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgsql_tweaks_17-1.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.3-1PGDG.rhel9.noarch.rpm pgdg 0.11.3 26.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgsql_tweaks_17-0.11.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.0-1PGDG.rhel9.noarch.rpm pgdg 0.11.0 26.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgsql_tweaks_17-0.11.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.7-1PGDG.rhel9.noarch.rpm pgdg 0.10.7 24.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgsql_tweaks_17-0.10.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.6-1PGDG.rhel9.noarch.rpm pgdg 0.10.6 23.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgsql_tweaks_17-0.10.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.3-1PGDG.rhel9.noarch.rpm pgdg 0.10.3 23.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgsql_tweaks_17-0.10.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgsql_tweaks_17-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.0-1PGDG.rhel9.noarch.rpm pgdg 1.0.0 27.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgsql_tweaks_17-1.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.3-1PGDG.rhel9.noarch.rpm pgdg 0.11.3 26.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgsql_tweaks_17-0.11.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.0-1PGDG.rhel9.noarch.rpm pgdg 0.11.0 25.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgsql_tweaks_17-0.11.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.7-1PGDG.rhel9.noarch.rpm pgdg 0.10.7 23.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgsql_tweaks_17-0.10.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.6-1PGDG.rhel9.noarch.rpm pgdg 0.10.6 23.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgsql_tweaks_17-0.10.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.10.3-1PGDG.rhel9.noarch.rpm pgdg 0.10.3 23.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgsql_tweaks_17-0.10.3-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgsql_tweaks_17-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.0-1PGDG.rhel10.noarch.rpm pgdg 1.0.0 28.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgsql_tweaks_17-1.0.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.3-1PGDG.rhel10.noarch.rpm pgdg 0.11.3 26.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgsql_tweaks_17-0.11.3-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.0-1PGDG.rhel10.noarch.rpm pgdg 0.11.0 26.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgsql_tweaks_17-0.11.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgsql_tweaks_17-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-1.0.0-1PGDG.rhel10.noarch.rpm pgdg 1.0.0 28.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgsql_tweaks_17-1.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.3-1PGDG.rhel10.noarch.rpm pgdg 0.11.3 26.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgsql_tweaks_17-0.11.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pgsql_tweaks_17 pgsql_tweaks_17-0.11.0-1PGDG.rhel10.noarch.rpm pgdg 0.11.0 26.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgsql_tweaks_17-0.11.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgsql-tweaks postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgsql-tweaks postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgsql-tweaks postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgsql-tweaks postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgsql-tweaks postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgsql-tweaks postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgsql-tweaks postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgsql-tweaks postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-17-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 29.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.3-1PGDG.rhel8.noarch.rpm pgdg 0.11.3 27.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-0.11.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.0-1PGDG.rhel8.noarch.rpm pgdg 0.11.0 27.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-0.11.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.7-1PGDG.rhel8.noarch.rpm pgdg 0.10.7 24.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-0.10.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.6-1PGDG.rhel8.noarch.rpm pgdg 0.10.6 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-0.10.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.3-1PGDG.rhel8.noarch.rpm pgdg 0.10.3 23.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-0.10.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-0.10.2-1PGDG.rhel7.noarch.rpm
@ el8.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.1-2.rhel7.noarch.rpm pgdg 0.10.1 23.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgsql_tweaks_16-0.10.1-2.rhel7.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 29.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.3-1PGDG.rhel8.noarch.rpm pgdg 0.11.3 27.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-0.11.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.0-1PGDG.rhel8.noarch.rpm pgdg 0.11.0 27.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-0.11.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.7-1PGDG.rhel8.noarch.rpm pgdg 0.10.7 24.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-0.10.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.6-1PGDG.rhel8.noarch.rpm pgdg 0.10.6 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-0.10.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.3-1PGDG.rhel8.noarch.rpm pgdg 0.10.3 23.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-0.10.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-0.10.2-1PGDG.rhel7.noarch.rpm
@ el8.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.1-2.rhel7.noarch.rpm pgdg 0.10.1 23.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgsql_tweaks_16-0.10.1-2.rhel7.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.0-1PGDG.rhel9.noarch.rpm pgdg 1.0.0 27.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-1.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.3-1PGDG.rhel9.noarch.rpm pgdg 0.11.3 26.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-0.11.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.0-1PGDG.rhel9.noarch.rpm pgdg 0.11.0 26.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-0.11.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.7-1PGDG.rhel9.noarch.rpm pgdg 0.10.7 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-0.10.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.6-1PGDG.rhel9.noarch.rpm pgdg 0.10.6 23.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-0.10.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.3-1PGDG.rhel9.noarch.rpm pgdg 0.10.3 23.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-0.10.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-0.10.2-1PGDG.rhel7.noarch.rpm
@ el9.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.1-2.rhel7.noarch.rpm pgdg 0.10.1 23.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgsql_tweaks_16-0.10.1-2.rhel7.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.0-1PGDG.rhel9.noarch.rpm pgdg 1.0.0 27.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-1.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.3-1PGDG.rhel9.noarch.rpm pgdg 0.11.3 26.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-0.11.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.0-1PGDG.rhel9.noarch.rpm pgdg 0.11.0 25.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-0.11.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.7-1PGDG.rhel9.noarch.rpm pgdg 0.10.7 23.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-0.10.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.6-1PGDG.rhel9.noarch.rpm pgdg 0.10.6 23.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-0.10.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.3-1PGDG.rhel9.noarch.rpm pgdg 0.10.3 23.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-0.10.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 22.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-0.10.2-1PGDG.rhel7.noarch.rpm
@ el9.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.10.1-2.rhel7.noarch.rpm pgdg 0.10.1 22.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgsql_tweaks_16-0.10.1-2.rhel7.noarch.rpm
@ el10.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgsql_tweaks_16-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.0-1PGDG.rhel10.noarch.rpm pgdg 1.0.0 28.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgsql_tweaks_16-1.0.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.3-1PGDG.rhel10.noarch.rpm pgdg 0.11.3 26.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgsql_tweaks_16-0.11.3-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.0-1PGDG.rhel10.noarch.rpm pgdg 0.11.0 26.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgsql_tweaks_16-0.11.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgsql_tweaks_16-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-1.0.0-1PGDG.rhel10.noarch.rpm pgdg 1.0.0 28.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgsql_tweaks_16-1.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.3-1PGDG.rhel10.noarch.rpm pgdg 0.11.3 26.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgsql_tweaks_16-0.11.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pgsql_tweaks_16 pgsql_tweaks_16-0.11.0-1PGDG.rhel10.noarch.rpm pgdg 0.11.0 26.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgsql_tweaks_16-0.11.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgsql-tweaks postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgsql-tweaks postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgsql-tweaks postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgsql-tweaks postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgsql-tweaks postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgsql-tweaks postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgsql-tweaks postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgsql-tweaks postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-16-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 29.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.3-1PGDG.rhel8.noarch.rpm pgdg 0.11.3 27.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-0.11.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.0-1PGDG.rhel8.noarch.rpm pgdg 0.11.0 27.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-0.11.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.7-1PGDG.rhel8.noarch.rpm pgdg 0.10.7 24.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-0.10.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.6-1PGDG.rhel8.noarch.rpm pgdg 0.10.6 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-0.10.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.3-1PGDG.rhel8.noarch.rpm pgdg 0.10.3 23.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-0.10.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-0.10.2-1PGDG.rhel7.noarch.rpm
@ el8.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.0-1.rhel7.noarch.rpm pgdg 0.10.0 23.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgsql_tweaks_15-0.10.0-1.rhel7.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 29.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.3-1PGDG.rhel8.noarch.rpm pgdg 0.11.3 27.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-0.11.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.0-1PGDG.rhel8.noarch.rpm pgdg 0.11.0 26.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-0.11.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.7-1PGDG.rhel8.noarch.rpm pgdg 0.10.7 24.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-0.10.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.6-1PGDG.rhel8.noarch.rpm pgdg 0.10.6 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-0.10.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.3-1PGDG.rhel8.noarch.rpm pgdg 0.10.3 23.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-0.10.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-0.10.2-1PGDG.rhel7.noarch.rpm
@ el8.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.1-1.rhel7.noarch.rpm pgdg 0.10.1 23.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgsql_tweaks_15-0.10.1-1.rhel7.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.0-1PGDG.rhel9.noarch.rpm pgdg 1.0.0 27.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-1.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.3-1PGDG.rhel9.noarch.rpm pgdg 0.11.3 26.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-0.11.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.0-1PGDG.rhel9.noarch.rpm pgdg 0.11.0 26.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-0.11.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.7-1PGDG.rhel9.noarch.rpm pgdg 0.10.7 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-0.10.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.6-1PGDG.rhel9.noarch.rpm pgdg 0.10.6 23.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-0.10.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.3-1PGDG.rhel9.noarch.rpm pgdg 0.10.3 23.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-0.10.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-0.10.2-1PGDG.rhel7.noarch.rpm
@ el9.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.0-1.rhel7.noarch.rpm pgdg 0.10.0 22.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgsql_tweaks_15-0.10.0-1.rhel7.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.0-1PGDG.rhel9.noarch.rpm pgdg 1.0.0 27.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-1.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.3-1PGDG.rhel9.noarch.rpm pgdg 0.11.3 26.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-0.11.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.0-1PGDG.rhel9.noarch.rpm pgdg 0.11.0 25.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-0.11.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.7-1PGDG.rhel9.noarch.rpm pgdg 0.10.7 23.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-0.10.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.6-1PGDG.rhel9.noarch.rpm pgdg 0.10.6 23.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-0.10.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.3-1PGDG.rhel9.noarch.rpm pgdg 0.10.3 23.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-0.10.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 22.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-0.10.2-1PGDG.rhel7.noarch.rpm
@ el9.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.10.1-1.rhel7.noarch.rpm pgdg 0.10.1 22.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgsql_tweaks_15-0.10.1-1.rhel7.noarch.rpm
@ el10.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgsql_tweaks_15-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.0-1PGDG.rhel10.noarch.rpm pgdg 1.0.0 28.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgsql_tweaks_15-1.0.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.3-1PGDG.rhel10.noarch.rpm pgdg 0.11.3 26.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgsql_tweaks_15-0.11.3-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.0-1PGDG.rhel10.noarch.rpm pgdg 0.11.0 26.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgsql_tweaks_15-0.11.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgsql_tweaks_15-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-1.0.0-1PGDG.rhel10.noarch.rpm pgdg 1.0.0 28.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgsql_tweaks_15-1.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.3-1PGDG.rhel10.noarch.rpm pgdg 0.11.3 26.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgsql_tweaks_15-0.11.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pgsql_tweaks_15 pgsql_tweaks_15-0.11.0-1PGDG.rhel10.noarch.rpm pgdg 0.11.0 26.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgsql_tweaks_15-0.11.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgsql-tweaks postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgsql-tweaks postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgsql-tweaks postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgsql-tweaks postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgsql-tweaks postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgsql-tweaks postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgsql-tweaks postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgsql-tweaks postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-15-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 29.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.3-1PGDG.rhel8.noarch.rpm pgdg 0.11.3 27.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.11.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.0-1PGDG.rhel8.noarch.rpm pgdg 0.11.0 27.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.11.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.7-1PGDG.rhel8.noarch.rpm pgdg 0.10.7 24.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.10.7-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.6-1PGDG.rhel8.noarch.rpm pgdg 0.10.6 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.10.6-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.3-1PGDG.rhel8.noarch.rpm pgdg 0.10.3 23.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.10.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.10.2-1PGDG.rhel7.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.0-1.rhel7.noarch.rpm pgdg 0.10.0 23.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.10.0-1.rhel7.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.9.1-1.rhel7.noarch.rpm pgdg 0.9.1 22.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.9.1-1.rhel7.noarch.rpm
@ el8.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.8.0-1.rhel7.noarch.rpm pgdg 0.8.0 22.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgsql_tweaks_14-0.8.0-1.rhel7.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.2-1PGDG.rhel8.noarch.rpm pgdg 1.0.2 29.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-1.0.2-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.0-1PGDG.rhel8.noarch.rpm pgdg 1.0.0 29.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-1.0.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.3-1PGDG.rhel8.noarch.rpm pgdg 0.11.3 27.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-0.11.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.0-1PGDG.rhel8.noarch.rpm pgdg 0.11.0 26.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-0.11.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.7-1PGDG.rhel8.noarch.rpm pgdg 0.10.7 24.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-0.10.7-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.6-1PGDG.rhel8.noarch.rpm pgdg 0.10.6 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-0.10.6-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.3-1PGDG.rhel8.noarch.rpm pgdg 0.10.3 23.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-0.10.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-0.10.2-1PGDG.rhel7.noarch.rpm
@ el8.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.1-1.rhel7.noarch.rpm pgdg 0.10.1 23.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgsql_tweaks_14-0.10.1-1.rhel7.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.0-1PGDG.rhel9.noarch.rpm pgdg 1.0.0 27.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-1.0.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.3-1PGDG.rhel9.noarch.rpm pgdg 0.11.3 26.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-0.11.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.0-1PGDG.rhel9.noarch.rpm pgdg 0.11.0 26.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-0.11.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.7-1PGDG.rhel9.noarch.rpm pgdg 0.10.7 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-0.10.7-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.6-1PGDG.rhel9.noarch.rpm pgdg 0.10.6 23.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-0.10.6-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.3-1PGDG.rhel9.noarch.rpm pgdg 0.10.3 23.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-0.10.3-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 23.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-0.10.2-1PGDG.rhel7.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.0-1.rhel7.noarch.rpm pgdg 0.10.0 22.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-0.10.0-1.rhel7.noarch.rpm
@ el9.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.9.1-1.rhel7.noarch.rpm pgdg 0.9.1 22.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgsql_tweaks_14-0.9.1-1.rhel7.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.2-1PGDG.rhel9.noarch.rpm pgdg 1.0.2 27.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-1.0.2-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.0-1PGDG.rhel9.noarch.rpm pgdg 1.0.0 27.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-1.0.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.3-1PGDG.rhel9.noarch.rpm pgdg 0.11.3 26.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-0.11.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.0-1PGDG.rhel9.noarch.rpm pgdg 0.11.0 25.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-0.11.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.7-1PGDG.rhel9.noarch.rpm pgdg 0.10.7 23.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-0.10.7-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.6-1PGDG.rhel9.noarch.rpm pgdg 0.10.6 23.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-0.10.6-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.3-1PGDG.rhel9.noarch.rpm pgdg 0.10.3 23.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-0.10.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.2-1PGDG.rhel7.noarch.rpm pgdg 0.10.2 22.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-0.10.2-1PGDG.rhel7.noarch.rpm
@ el9.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.10.1-1.rhel7.noarch.rpm pgdg 0.10.1 22.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgsql_tweaks_14-0.10.1-1.rhel7.noarch.rpm
@ el10.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgsql_tweaks_14-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.0-1PGDG.rhel10.noarch.rpm pgdg 1.0.0 28.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgsql_tweaks_14-1.0.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.3-1PGDG.rhel10.noarch.rpm pgdg 0.11.3 26.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgsql_tweaks_14-0.11.3-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.0-1PGDG.rhel10.noarch.rpm pgdg 0.11.0 26.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgsql_tweaks_14-0.11.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.2-1PGDG.rhel10.noarch.rpm pgdg 1.0.2 28.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgsql_tweaks_14-1.0.2-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-1.0.0-1PGDG.rhel10.noarch.rpm pgdg 1.0.0 28.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgsql_tweaks_14-1.0.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.3-1PGDG.rhel10.noarch.rpm pgdg 0.11.3 26.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgsql_tweaks_14-0.11.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pgsql_tweaks_14 pgsql_tweaks_14-0.11.0-1PGDG.rhel10.noarch.rpm pgdg 0.11.0 26.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgsql_tweaks_14-0.11.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pgsql-tweaks postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgsql-tweaks postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgsql-tweaks/postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgsql-tweaks postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgsql-tweaks postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 20.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgsql-tweaks/postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgsql-tweaks postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgsql-tweaks postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgsql-tweaks/postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgsql-tweaks postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgsql-tweaks postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 20.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgsql-tweaks/postgresql-14-pgsql-tweaks_1.0.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgsql_tweaks` 扩展的 DEB 包：

```bash
pig build pkg pgsql_tweaks         # 构建 DEB 包
```


## 安装

您可以直接安装 `pgsql_tweaks` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgsql_tweaks;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgsql_tweaks -v 18  # PG 18
pig ext install -y pgsql_tweaks -v 17  # PG 17
pig ext install -y pgsql_tweaks -v 16  # PG 16
pig ext install -y pgsql_tweaks -v 15  # PG 15
pig ext install -y pgsql_tweaks -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgsql_tweaks_18       # PG 18
dnf install -y pgsql_tweaks_17       # PG 17
dnf install -y pgsql_tweaks_16       # PG 16
dnf install -y pgsql_tweaks_15       # PG 15
dnf install -y pgsql_tweaks_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgsql-tweaks   # PG 18
apt install -y postgresql-17-pgsql-tweaks   # PG 17
apt install -y postgresql-16-pgsql-tweaks   # PG 16
apt install -y postgresql-15-pgsql-tweaks   # PG 15
apt install -y postgresql-14-pgsql-tweaks   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgsql_tweaks;
```



## 用法

> [pgsql_tweaks: 为 DBA 日常工作提供的 PostgreSQL 视图与函数](https://codeberg.org/pgsql_tweaks/pgsql_tweaks)

所有对象创建在 `pgsql_tweaks` 模式中。完整文档：[rtfm.pgsql-tweaks.org](https://rtfm.pgsql-tweaks.org)

### 数据类型检查函数

```sql
SELECT pgsql_tweaks.is_date('2024-01-15');       -- true
SELECT pgsql_tweaks.is_integer('42');             -- true
SELECT pgsql_tweaks.is_numeric('3.14');           -- true
SELECT pgsql_tweaks.is_json('{"a":1}');           -- true
SELECT pgsql_tweaks.is_jsonb('{"a":1}');          -- true
SELECT pgsql_tweaks.is_boolean('true');            -- true
SELECT pgsql_tweaks.is_timestamp('2024-01-15 10:30:00');  -- true
SELECT pgsql_tweaks.is_hex('FF');                 -- true
```

### 系统信息函数

```sql
SELECT pgsql_tweaks.pg_schema_size('public');     -- 模式大小（字节）
```

### 聚合函数

- `gap_fill` -- 填充时间序列中的空缺
- `array_min`、`array_max`、`array_avg`、`array_sum` -- 数组聚合

### 转换函数

```sql
SELECT pgsql_tweaks.to_unix_timestamp(now());
SELECT pgsql_tweaks.hex2bigint('FF');
```

### 工具函数

```sql
SELECT pgsql_tweaks.is_empty('');                 -- true
SELECT pgsql_tweaks.array_trim(ARRAY['a','','b']);
```

### 系统信息视图

- `pg_db_views`、`pg_foreign_keys`、`pg_functions`、`pg_active_locks`
- `pg_table_matview_infos`、`pg_object_ownership`、`pg_unused_indexes`
- `pg_bloat_info`、`pg_missing_indexes`、`pg_role_permissions`

### 监控视图

- `monitoring_wal`、`monitoring_active_locks`、`monitoring_replication`
- `monitoring_database_conflicts`、`monitoring_vacuum`
- `statistics_top_ten_query_times`、`statistics_query_activity`

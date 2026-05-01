---
title: "random"
linkTitle: "random"
description: "随机数生成器"
weight: 4790
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/random">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/random</div>
    <div class="ext-card__desc">https://github.com/tvondra/random</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/random-2.0.0-dev.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">random-2.0.0-dev.tar.gz</div>
    <div class="ext-card__desc">random-2.0.0-dev.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_random`**](/ext/e/random) | `2.0.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4790  | [**`random`**](/ext/e/random) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`permuteseq`](/ext/e/permuteseq) [`tsm_system_rows`](/ext/e/tsm_system_rows) [`tsm_system_time`](/ext/e/tsm_system_time) [`pg_idkit`](/ext/e/pg_idkit) [`sequential_uuids`](/ext/e/sequential_uuids) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_random` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_random_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-random` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
@ el8.x86_64 18 pg_random_18 pg_random_18-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_random_18-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_random_18 pg_random_18-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_random_18-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_random_18 pg_random_18-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_random_18-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_random_18 pg_random_18-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_random_18-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_random_18 pg_random_18-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_random_18-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_random_18 pg_random_18-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_random_18-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 20.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 21.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-random postgresql-18-random_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-18-random_2.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_random_17 pg_random_17-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_random_17-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_random_17 pg_random_17-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_random_17-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_random_17 pg_random_17-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_random_17-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_random_17 pg_random_17-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_random_17-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_random_17 pg_random_17-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_random_17-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_random_17 pg_random_17-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_random_17-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 21.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-random postgresql-17-random_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-17-random_2.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_random_16 pg_random_16-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_random_16-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_random_16 pg_random_16-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_random_16-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_random_16 pg_random_16-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_random_16-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_random_16 pg_random_16-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_random_16-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_random_16 pg_random_16-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_random_16-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_random_16 pg_random_16-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_random_16-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 20.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 21.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-random postgresql-16-random_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-16-random_2.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_random_15 pg_random_15-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 17.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_random_15-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_random_15 pg_random_15-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_random_15-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_random_15 pg_random_15-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_random_15-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_random_15 pg_random_15-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_random_15-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_random_15 pg_random_15-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_random_15-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_random_15 pg_random_15-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_random_15-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 21.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 21.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-random postgresql-15-random_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-15-random_2.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_random_14 pg_random_14-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_random_14-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_random_14 pg_random_14-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_random_14-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_random_14 pg_random_14-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_random_14-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_random_14 pg_random_14-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_random_14-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_random_14 pg_random_14-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_random_14-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_random_14 pg_random_14-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_random_14-2.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 20.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 21.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 21.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-random postgresql-14-random_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/random/postgresql-14-random_2.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_random` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_random         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_random` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_random;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_random -v 18  # PG 18
pig ext install -y pg_random -v 17  # PG 17
pig ext install -y pg_random -v 16  # PG 16
pig ext install -y pg_random -v 15  # PG 15
pig ext install -y pg_random -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_random_18       # PG 18
dnf install -y pg_random_17       # PG 17
dnf install -y pg_random_16       # PG 16
dnf install -y pg_random_15       # PG 15
dnf install -y pg_random_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-random   # PG 18
apt install -y postgresql-17-random   # PG 17
apt install -y postgresql-16-random   # PG 16
apt install -y postgresql-15-random   # PG 15
apt install -y postgresql-14-random   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION random;
```



## 用法

> [random: PostgreSQL 的可重现随机数据生成器](https://github.com/tvondra/random)

提供为各种数据类型生成随机值的函数，通过种子控制输出的可重现性。

```sql
CREATE EXTENSION random;
```

### 函数

所有函数接受 `seed`（用于可重现性）和 `nvalues`（不同值的数量）参数。

| 函数 | 说明 |
|---|---|
| `random_string(seed, nvalues, min_length, max_length)` | 随机 ASCII 字符串 |
| `random_bytea(seed, nvalues, min_length, max_length)` | 随机 bytea |
| `random_int(seed, nvalues, min_value, max_value)` | 随机 32 位整数 |
| `random_bigint(seed, nvalues, min_value, max_value)` | 随机 64 位整数 |
| `random_real(seed, nvalues, min_value, max_value)` | 随机 32 位浮点数 |
| `random_double_precision(seed, nvalues, min_value, max_value)` | 随机 64 位浮点数 |
| `random_inet(seed, nvalues)` | 随机 INET 地址（/32 掩码） |
| `random_cnet(seed, nvalues)` | 随机 CIDR，掩码为 8/16/24/32 |
| `random_cnet2(seed, nvalues)` | 随机 CIDR，每个掩码长度均等分配 |
| `random_macaddr(seed, nvalues)` | 随机 6 字节 MAC 地址 |
| `random_macaddr8(seed, nvalues)` | 随机 8 字节 MAC 地址 |

### 示例

```sql
-- 生成可重现的随机整数
SELECT random_int(42, 100, 1, 1000) FROM generate_series(1, 10);

-- 长度为 5-10 的随机字符串
SELECT random_string(42, 1000, 5, 10) FROM generate_series(1, 5);

-- 随机 IP 地址
SELECT random_inet(42, 256) FROM generate_series(1, 5);
```

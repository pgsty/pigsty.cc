---
title: "pg_rusage"
linkTitle: "pg_rusage"
description: "通过显式重置与输出调用测量当前后端的 CPU 消耗"
weight: 6230
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/michaelpq/pg_plugins/tree/ae57c1f3df697fb942f4576f873a655187193ace/pg_rusage">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ae57c1f3df697fb942f4576f873a655187193ace/pg_rusage</div>
    <div class="ext-card__desc">https://github.com/michaelpq/pg_plugins/tree/ae57c1f3df697fb942f4576f873a655187193ace/pg_rusage</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_plugins-ae57c1f3df69.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_plugins-ae57c1f3df69.tar.gz</div>
    <div class="ext-card__desc">pg_plugins-ae57c1f3df69.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_rusage`**](/ext/e/pg_rusage) | `1.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6230  | [**`pg_rusage`**](/ext/e/pg_rusage) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_proctab`](/ext/e/pg_proctab) [`system_stats`](/ext/e/system_stats) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pg_rusage_print() emits the current backend measurement as a WARNING and returns void. No preload; PostgreSQL 14-18 verified in PGSTY builds; upstream declares no major-version matrix.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_rusage` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_rusage_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-rusage` | - |
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
| u26.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 pg_rusage_18 pg_rusage_18-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rusage_18-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_rusage_18 pg_rusage_18-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rusage_18-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_rusage_18 pg_rusage_18-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rusage_18-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_rusage_18 pg_rusage_18-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rusage_18-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_rusage_18 pg_rusage_18-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rusage_18-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_rusage_18 pg_rusage_18-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rusage_18-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 7.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 7.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 7.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-rusage postgresql-18-pg-rusage_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 7.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-18-pg-rusage_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_rusage_17 pg_rusage_17-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rusage_17-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_rusage_17 pg_rusage_17-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rusage_17-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_rusage_17 pg_rusage_17-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rusage_17-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_rusage_17 pg_rusage_17-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rusage_17-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_rusage_17 pg_rusage_17-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rusage_17-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_rusage_17 pg_rusage_17-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rusage_17-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 7.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-rusage postgresql-17-pg-rusage_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 7.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-17-pg-rusage_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_rusage_16 pg_rusage_16-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rusage_16-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_rusage_16 pg_rusage_16-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rusage_16-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_rusage_16 pg_rusage_16-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rusage_16-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_rusage_16 pg_rusage_16-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rusage_16-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_rusage_16 pg_rusage_16-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rusage_16-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_rusage_16 pg_rusage_16-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rusage_16-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-rusage postgresql-16-pg-rusage_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 7.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-16-pg-rusage_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_rusage_15 pg_rusage_15-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rusage_15-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_rusage_15 pg_rusage_15-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 16.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rusage_15-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_rusage_15 pg_rusage_15-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rusage_15-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_rusage_15 pg_rusage_15-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rusage_15-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_rusage_15 pg_rusage_15-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rusage_15-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_rusage_15 pg_rusage_15-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rusage_15-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 7.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 7.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 7.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-rusage postgresql-15-pg-rusage_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 7.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-15-pg-rusage_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_rusage_14 pg_rusage_14-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rusage_14-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_rusage_14 pg_rusage_14-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rusage_14-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_rusage_14 pg_rusage_14-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rusage_14-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_rusage_14 pg_rusage_14-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rusage_14-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_rusage_14 pg_rusage_14-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_rusage_14-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_rusage_14 pg_rusage_14-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 16.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_rusage_14-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 8.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 8.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 8.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 8.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 8.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 8.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-rusage postgresql-14-pg-rusage_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 8.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-rusage/postgresql-14-pg-rusage_1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_rusage` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_rusage         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_rusage` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_rusage;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_rusage -v 18  # PG 18
pig ext install -y pg_rusage -v 17  # PG 17
pig ext install -y pg_rusage -v 16  # PG 16
pig ext install -y pg_rusage -v 15  # PG 15
pig ext install -y pg_rusage -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_rusage_18       # PG 18
dnf install -y pg_rusage_17       # PG 17
dnf install -y pg_rusage_16       # PG 16
dnf install -y pg_rusage_15       # PG 15
dnf install -y pg_rusage_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-rusage   # PG 18
apt install -y postgresql-17-pg-rusage   # PG 17
apt install -y postgresql-16-pg-rusage   # PG 16
apt install -y postgresql-15-pg-rusage   # PG 15
apt install -y postgresql-14-pg-rusage   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_rusage;
```

## 用法

来源：

- [官方上游 README](https://github.com/michaelpq/pg_plugins/blob/626fb56b0a0b833d4f23ca55359ce56d38162864/pg_rusage/README)
- [官方扩展控制文件 (pg_rusage.control)](https://github.com/michaelpq/pg_plugins/blob/626fb56b0a0b833d4f23ca55359ce56d38162864/pg_rusage/pg_rusage.control)
- [官方扩展 SQL (pg_rusage--1.0.sql)](https://github.com/michaelpq/pg_plugins/blob/626fb56b0a0b833d4f23ca55359ce56d38162864/pg_rusage/pg_rusage--1.0.sql)

`pg_rusage` — 这个模块是一个 PostgreSQL 扩展，可以启用 CPU 测量，包含一个用于启用测量的 SQL 函数和一个用于禁用测量的 SQL 函数。在禁用时，现有的累积结果将会显示出来。在收集或解释相应的 PostgreSQL 统计信息时使用它。请使用上述链接的上游固定版本作为 API 边界，并在目标 PostgreSQL 构建中进行测试。

### 核心工作流

```sql
CREATE EXTENSION pg_rusage;
```

在目标数据库中安装扩展，当可用时运行上游示例中的最小示例，并在将其集成到应用程序 SQL 中之前验证安装的版本和返回值。

### 重要对象

- `pg_rusage_print()` 是一个扩展函数，返回 `void`。
- `pg_rusage_reset()` 是一个扩展函数，返回 `void`。

### 要求与注意事项

- 审查后的控制文件声明默认版本为 `1.0`。
- 控制文件将扩展标记为可重定位。
- 在生产使用前，请确认权限、支持的 PostgreSQL 版本、升级行为和失败情况，与固定源进行比对。

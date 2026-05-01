---
title: "pg_bikram_sambat"
linkTitle: "pg_bikram_sambat"
description: "Bikram Sambat 日期类型与公历/尼泊尔历转换函数"
weight: 3860
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/LeohangRai/pg_bikram_sambat">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">LeohangRai/pg_bikram_sambat</div>
    <div class="ext-card__desc">https://github.com/LeohangRai/pg_bikram_sambat</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_bikram_sambat-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_bikram_sambat-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_bikram_sambat-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_bikram_sambat`**](/ext/e/pg_bikram_sambat) | `0.1.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3860  | [**`pg_bikram_sambat`**](/ext/e/pg_bikram_sambat) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_duration`](/ext/e/pg_duration) [`pg_rrule`](/ext/e/pg_rrule) [`pgcalendar`](/ext/e/pgcalendar) [`timestamp9`](/ext/e/timestamp9) [`pg_extra_time`](/ext/e/pg_extra_time) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) [`country`](/ext/e/country) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_bikram_sambat` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_bikram_sambat_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-bikram-sambat` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 pg_bikram_sambat_18 pg_bikram_sambat_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 22.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bikram_sambat_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_bikram_sambat_18 pg_bikram_sambat_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bikram_sambat_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_bikram_sambat_18 pg_bikram_sambat_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 21.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bikram_sambat_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_bikram_sambat_18 pg_bikram_sambat_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 20.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bikram_sambat_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_bikram_sambat_18 pg_bikram_sambat_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bikram_sambat_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_bikram_sambat_18 pg_bikram_sambat_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 21.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bikram_sambat_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 67.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 67.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 67.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 67.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 73.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 73.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 71.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 71.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 71.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-bikram-sambat postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 71.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-18-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_bikram_sambat_17 pg_bikram_sambat_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 22.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bikram_sambat_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_bikram_sambat_17 pg_bikram_sambat_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bikram_sambat_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_bikram_sambat_17 pg_bikram_sambat_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 21.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bikram_sambat_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_bikram_sambat_17 pg_bikram_sambat_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 20.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bikram_sambat_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_bikram_sambat_17 pg_bikram_sambat_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bikram_sambat_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_bikram_sambat_17 pg_bikram_sambat_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 21.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bikram_sambat_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 67.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 67.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 67.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 67.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 74.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 74.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 72.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 71.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 71.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-bikram-sambat postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 71.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-17-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_bikram_sambat_16 pg_bikram_sambat_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 22.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bikram_sambat_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_bikram_sambat_16 pg_bikram_sambat_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 22.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bikram_sambat_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_bikram_sambat_16 pg_bikram_sambat_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 21.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bikram_sambat_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_bikram_sambat_16 pg_bikram_sambat_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 20.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bikram_sambat_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_bikram_sambat_16 pg_bikram_sambat_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bikram_sambat_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_bikram_sambat_16 pg_bikram_sambat_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 21.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bikram_sambat_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 67.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 66.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 67.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 67.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 75.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 75.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 71.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 73.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-bikram-sambat postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 72.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-16-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_bikram_sambat_15 pg_bikram_sambat_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 22.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bikram_sambat_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_bikram_sambat_15 pg_bikram_sambat_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bikram_sambat_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_bikram_sambat_15 pg_bikram_sambat_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 22.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bikram_sambat_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_bikram_sambat_15 pg_bikram_sambat_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 22.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bikram_sambat_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_bikram_sambat_15 pg_bikram_sambat_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 22.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bikram_sambat_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_bikram_sambat_15 pg_bikram_sambat_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 22.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bikram_sambat_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 67.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 67.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 67.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 67.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 68.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 68.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 72.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 71.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 70.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-bikram-sambat postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 70.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-15-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_bikram_sambat_14 pg_bikram_sambat_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 22.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_bikram_sambat_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_bikram_sambat_14 pg_bikram_sambat_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 23.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_bikram_sambat_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_bikram_sambat_14 pg_bikram_sambat_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 22.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_bikram_sambat_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_bikram_sambat_14 pg_bikram_sambat_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_bikram_sambat_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_bikram_sambat_14 pg_bikram_sambat_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 22.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_bikram_sambat_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_bikram_sambat_14 pg_bikram_sambat_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 22.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_bikram_sambat_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 65.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 65.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 66.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 65.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 70.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 70.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 70.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 70.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 69.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-bikram-sambat postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 69.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-bikram-sambat/postgresql-14-pg-bikram-sambat_0.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_bikram_sambat` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_bikram_sambat         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_bikram_sambat` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_bikram_sambat;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_bikram_sambat -v 18  # PG 18
pig ext install -y pg_bikram_sambat -v 17  # PG 17
pig ext install -y pg_bikram_sambat -v 16  # PG 16
pig ext install -y pg_bikram_sambat -v 15  # PG 15
pig ext install -y pg_bikram_sambat -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_bikram_sambat_18       # PG 18
dnf install -y pg_bikram_sambat_17       # PG 17
dnf install -y pg_bikram_sambat_16       # PG 16
dnf install -y pg_bikram_sambat_15       # PG 15
dnf install -y pg_bikram_sambat_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-bikram-sambat   # PG 18
apt install -y postgresql-17-pg-bikram-sambat   # PG 17
apt install -y postgresql-16-pg-bikram-sambat   # PG 16
apt install -y postgresql-15-pg-bikram-sambat   # PG 15
apt install -y postgresql-14-pg-bikram-sambat   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_bikram_sambat;
```

## 用法

来源：[PGXN metadata](https://api.pgxn.org/dist/pg_bikram_sambat.json)、[PGXN source tree](https://api.pgxn.org/src/pg_bikram_sambat/pg_bikram_sambat-0.1.0/)、[type SQL](https://api.pgxn.org/src/pg_bikram_sambat/pg_bikram_sambat-0.1.0/sql/types.sql)、[function SQL](https://api.pgxn.org/src/pg_bikram_sambat/pg_bikram_sambat-0.1.0/sql/functions.sql)、[operator SQL](https://api.pgxn.org/src/pg_bikram_sambat/pg_bikram_sambat-0.1.0/sql/operators.sql)、[cast SQL](https://api.pgxn.org/src/pg_bikram_sambat/pg_bikram_sambat-0.1.0/sql/casts.sql)、[regression examples](https://api.pgxn.org/src/pg_bikram_sambat/pg_bikram_sambat-0.1.0/tests/pg_regress/sql/003_functions.sql)、[TODO](https://api.pgxn.org/src/pg_bikram_sambat/pg_bikram_sambat-0.1.0/todos.txt)

来源说明：CSV 中的 GitHub URL 不可用，因此本文依据官方 PGXN 元数据与源码包 SQL。

`pg_bikram_sambat` 添加 `bs_date` 类型，用于 Bikram Sambat 日期，并提供转换、格式化、比较和 btree 索引支持。按普通 PostgreSQL 扩展安装：

```sql
CREATE EXTENSION pg_bikram_sambat;
```

### 日期类型

`bs_date` 存储 Bikram Sambat 日期，并以 `YYYY-MM-DD` 显示。文本输入接受用 `/`、`-` 或 `.` 分隔的年/月/日值；当年份出现在最后一个字段时，输入解析器也接受日优先字符串。

```sql
SELECT '2057/10/19'::bs_date;
SELECT CAST('2057-10-19' AS bs_date);
SELECT '19.10.2057'::bs_date;
```

像其他 PostgreSQL 类型一样在表中使用：

```sql
CREATE TABLE events (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  ad_date date,
  bs bs_date NOT NULL
);

INSERT INTO events (ad_date, bs)
VALUES
  ('2001-02-01', '2057/10/19'),
  ('1972-02-17', '2028/11/05');
```

### 转换函数

`ad_to_bs(date)` 将 Gregorian `date` 转换为 `bs_date`：

```sql
SELECT ad_to_bs('2001-02-01'::date);  -- 2057-10-19
SELECT ad_to_bs('1972-02-17'::date);  -- 2028-11-05
```

`current_bs_date()` 返回转换为 `bs_date` 的当前事务时间戳，因此同一事务内重复调用是稳定的：

```sql
SELECT current_bs_date();
SELECT pg_typeof(current_bs_date());  -- bs_date
```

版本 `0.1.0` 不暴露 SQL `bs_to_ad()` 函数，也没有直接的 `bs_date` 到 `date` cast；上游 TODO 文件将这些列为后续工作。

### 格式化

该扩展为 `bs_date` 重载 PostgreSQL `to_char`：

```sql
SELECT to_char('2057/10/19'::bs_date, 'YYYY-MM-DD');
SELECT to_char('2057/10/19'::bs_date, 'DD/MM/YYYY');
SELECT to_char('2057/10/19'::bs_date, 'Month DD, YYYY');
SELECT to_char('2057/10/19'::bs_date, 'Day, DD Month YYYY');
```

支持的日期格式 token 为 `YYYY`、`YY`、`Month`、`Mon`、`MM`、`Day`、`Dy` 和 `DD`。月份与星期名称会跟随格式 token 的大小写，因此 `MONTH`、`Month` 和 `month` 分别生成大写、标题式大小写和小写英文名称。

第三个参数传入 `dev` 时，使用 Devanagari 数字、月份名称和星期名称：

```sql
SELECT to_char('2057/10/19'::bs_date, 'YYYY-MM-DD', 'dev');
SELECT to_char('2057/10/19'::bs_date, 'Day, DD Month YYYY', 'dev');
```

### 操作符与索引

`bs_date` 支持比较操作符 `=`、`<>`、`>`、`>=`、`<` 和 `<=`。默认 btree 操作符类 `bs_date_ops` 支持普通 btree 索引、范围谓词和排序：

```sql
CREATE INDEX events_bs_idx ON events (bs);

SELECT * FROM events WHERE bs >= '2057/01/01' ORDER BY bs;
SELECT * FROM events WHERE bs BETWEEN '2056/01/01' AND '2058/12/12';
```

### 注意事项

打包的转换数据集覆盖 BS 年份 `2000` 到 `2100`，并以 `1943-04-14` AD 作为 `2000-01-01` BS 的参考日期。参考日期之前或映射 BS 范围之外的日期会抛出 PostgreSQL 错误。该扩展定义了从 `text` 到 `bs_date` 的隐式 cast，但没有定义从任意数值类型到 `bs_date` 的 cast。

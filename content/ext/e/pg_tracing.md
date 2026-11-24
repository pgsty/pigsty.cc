---
title: "pg_tracing"
linkTitle: "pg_tracing"
description: "PostgreSQL分布式Tracing"
weight: 6010
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/DataDog/pg_tracing">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">DataDog/pg_tracing</div>
    <div class="ext-card__desc">https://github.com/DataDog/pg_tracing</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_tracing-0.1.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_tracing-0.1.3.tar.gz</div>
    <div class="ext-card__desc">pg_tracing-0.1.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tracing`**](/ext/e/pg_tracing) | `0.1.3` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6010  | [**`pg_tracing`**](/ext/e/pg_tracing) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_stat_log`](/ext/e/pg_stat_log) [`pg_stat_backtrace`](/ext/e/pg_stat_backtrace) [`pgfr_record`](/ext/e/pgfr_record) [`logerrors`](/ext/e/logerrors) [`pgelog`](/ext/e/pgelog) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15" >}} | `pg_tracing` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15" >}} | `pg_tracing_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-tracing` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el9.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el9.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el10.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el10.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d12.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d12.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d13.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d13.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u22.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u22.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u24.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u24.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u26.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u26.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
@ el8.x86_64 18 pg_tracing_18 pg_tracing_18-0.1.3-1PGSTY.el8.x86_64.rpm pigsty 0.1.3 117.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_18-0.1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_tracing_18 pg_tracing_18-0.1.3-1PGSTY.el8.aarch64.rpm pigsty 0.1.3 114.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_18-0.1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_tracing_18 pg_tracing_18-0.1.3-1PGSTY.el9.x86_64.rpm pigsty 0.1.3 118.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_18-0.1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_tracing_18 pg_tracing_18-0.1.3-1PGSTY.el9.aarch64.rpm pigsty 0.1.3 117.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_18-0.1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_tracing_18 pg_tracing_18-0.1.3-1PGSTY.el10.x86_64.rpm pigsty 0.1.3 119.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_18-0.1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_tracing_18 pg_tracing_18-0.1.3-1PGSTY.el10.aarch64.rpm pigsty 0.1.3 117.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_18-0.1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~bookworm_amd64.deb pigsty 0.1.3 105.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~bookworm_arm64.deb pigsty 0.1.3 102.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~trixie_amd64.deb pigsty 0.1.3 105.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~trixie_arm64.deb pigsty 0.1.3 103.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~jammy_amd64.deb pigsty 0.1.3 114.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~jammy_arm64.deb pigsty 0.1.3 113.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~noble_amd64.deb pigsty 0.1.3 110.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~noble_arm64.deb pigsty 0.1.3 109.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~resolute_amd64.deb pigsty 0.1.3 109.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-tracing postgresql-18-pg-tracing_0.1.3-1PGSTY~resolute_arm64.deb pigsty 0.1.3 108.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tracing/postgresql-18-pg-tracing_0.1.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_tracing_17 pg_tracing_17-0.1.3-1PGSTY.el8.x86_64.rpm pigsty 0.1.3 117.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_17-0.1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_tracing_17 pg_tracing_17-0.1.3-1PGSTY.el8.aarch64.rpm pigsty 0.1.3 114.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_17-0.1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_tracing_17 pg_tracing_17-0.1.3-1PGSTY.el9.x86_64.rpm pigsty 0.1.3 118.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_17-0.1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_tracing_17 pg_tracing_17-0.1.3-1PGSTY.el9.aarch64.rpm pigsty 0.1.3 117.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_17-0.1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_tracing_17 pg_tracing_17-0.1.3-1PGSTY.el10.x86_64.rpm pigsty 0.1.3 119.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_17-0.1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_tracing_17 pg_tracing_17-0.1.3-1PGSTY.el10.aarch64.rpm pigsty 0.1.3 117.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_17-0.1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~bookworm_amd64.deb pigsty 0.1.3 105.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~bookworm_arm64.deb pigsty 0.1.3 103.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~trixie_amd64.deb pigsty 0.1.3 105.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~trixie_arm64.deb pigsty 0.1.3 103.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~jammy_amd64.deb pigsty 0.1.3 129.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~jammy_arm64.deb pigsty 0.1.3 128.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~noble_amd64.deb pigsty 0.1.3 110.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~noble_arm64.deb pigsty 0.1.3 109.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~resolute_amd64.deb pigsty 0.1.3 109.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-tracing postgresql-17-pg-tracing_0.1.3-1PGSTY~resolute_arm64.deb pigsty 0.1.3 108.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tracing/postgresql-17-pg-tracing_0.1.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_tracing_16 pg_tracing_16-0.1.3-1PGSTY.el8.x86_64.rpm pigsty 0.1.3 117.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_16-0.1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_tracing_16 pg_tracing_16-0.1.3-1PGSTY.el8.aarch64.rpm pigsty 0.1.3 114.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_16-0.1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_tracing_16 pg_tracing_16-0.1.3-1PGSTY.el9.x86_64.rpm pigsty 0.1.3 118.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_16-0.1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_tracing_16 pg_tracing_16-0.1.3-1PGSTY.el9.aarch64.rpm pigsty 0.1.3 116.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_16-0.1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_tracing_16 pg_tracing_16-0.1.3-1PGSTY.el10.x86_64.rpm pigsty 0.1.3 119.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_16-0.1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_tracing_16 pg_tracing_16-0.1.3-1PGSTY.el10.aarch64.rpm pigsty 0.1.3 117.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_16-0.1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~bookworm_amd64.deb pigsty 0.1.3 105.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~bookworm_arm64.deb pigsty 0.1.3 103.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~trixie_amd64.deb pigsty 0.1.3 105.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~trixie_arm64.deb pigsty 0.1.3 103.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~jammy_amd64.deb pigsty 0.1.3 128.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~jammy_arm64.deb pigsty 0.1.3 127.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~noble_amd64.deb pigsty 0.1.3 110.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~noble_arm64.deb pigsty 0.1.3 109.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~resolute_amd64.deb pigsty 0.1.3 109.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-tracing postgresql-16-pg-tracing_0.1.3-1PGSTY~resolute_arm64.deb pigsty 0.1.3 108.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tracing/postgresql-16-pg-tracing_0.1.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_tracing_15 pg_tracing_15-0.1.3-1PGSTY.el8.x86_64.rpm pigsty 0.1.3 119.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_tracing_15-0.1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_tracing_15 pg_tracing_15-0.1.3-1PGSTY.el8.aarch64.rpm pigsty 0.1.3 116.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_tracing_15-0.1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_tracing_15 pg_tracing_15-0.1.3-1PGSTY.el9.x86_64.rpm pigsty 0.1.3 121.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_tracing_15-0.1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_tracing_15 pg_tracing_15-0.1.3-1PGSTY.el9.aarch64.rpm pigsty 0.1.3 120.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_tracing_15-0.1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_tracing_15 pg_tracing_15-0.1.3-1PGSTY.el10.x86_64.rpm pigsty 0.1.3 122.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_tracing_15-0.1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_tracing_15 pg_tracing_15-0.1.3-1PGSTY.el10.aarch64.rpm pigsty 0.1.3 120.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_tracing_15-0.1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~bookworm_amd64.deb pigsty 0.1.3 108.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~bookworm_arm64.deb pigsty 0.1.3 105.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~trixie_amd64.deb pigsty 0.1.3 108.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~trixie_arm64.deb pigsty 0.1.3 106.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~jammy_amd64.deb pigsty 0.1.3 132.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~jammy_arm64.deb pigsty 0.1.3 130.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~noble_amd64.deb pigsty 0.1.3 113.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~noble_arm64.deb pigsty 0.1.3 112.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~resolute_amd64.deb pigsty 0.1.3 112.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-tracing postgresql-15-pg-tracing_0.1.3-1PGSTY~resolute_arm64.deb pigsty 0.1.3 111.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-tracing/postgresql-15-pg-tracing_0.1.3-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tracing` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tracing         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tracing` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_tracing;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_tracing -v 18  # PG 18
pig ext install -y pg_tracing -v 17  # PG 17
pig ext install -y pg_tracing -v 16  # PG 16
pig ext install -y pg_tracing -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_tracing_18       # PG 18
dnf install -y pg_tracing_17       # PG 17
dnf install -y pg_tracing_16       # PG 16
dnf install -y pg_tracing_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-tracing   # PG 18
apt install -y postgresql-17-pg-tracing   # PG 17
apt install -y postgresql-16-pg-tracing   # PG 16
apt install -y postgresql-15-pg-tracing   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_tracing';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_tracing;
```




## 用法

> [pg_tracing: PostgreSQL 分布式追踪](https://github.com/DataDog/pg_tracing)

pg_tracing 生成服务端 Span 用于分布式追踪。它为规划器、执行器、计划节点、嵌套查询、触发器、并行工作进程和事务提交创建 Span。

### 通过 SQLCommenter 传播追踪上下文

将追踪上下文作为 SQL 注释传递。带有采样标志的查询将生成 Span：

```sql
/*traceparent='00-00000000000000000000000000000123-0000000000000123-01'*/ SELECT 1;
```

### 通过 GUC 传播追踪上下文

```sql
BEGIN;
SET LOCAL pg_tracing.trace_context='traceparent=''00-00000000000000000000000000000005-0000000000000005-01''';
UPDATE pgbench_accounts SET abalance=1 WHERE aid=1;
COMMIT;
```

### 独立采样

无需外部追踪上下文，随机采样查询：

```sql
SET pg_tracing.sample_rate = 1.0;  -- 追踪所有查询
SELECT 1;
```

### 查看 Span

```sql
-- 消费 Span（从缓冲区移除）
SELECT trace_id, parent_id, span_id, span_start, span_end, span_type, span_operation
FROM pg_tracing_consume_spans ORDER BY span_start;

-- 查看 Span（非破坏性）
SELECT * FROM pg_tracing_peek_spans;

-- 导出为 OTLP JSON
SELECT pg_tracing_json_spans();
```

### 统计信息

```sql
SELECT * FROM pg_tracing_info;
SELECT pg_tracing_reset();
```

### 发送 Span 到 OpenTelemetry Collector

在 `postgresql.conf` 中配置：

```ini
pg_tracing.otel_endpoint = http://127.0.0.1:4318/v1/traces
pg_tracing.otel_naptime = 2000
```

### 关键 GUC 参数

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pg_tracing.max_span` | 10000 | 共享内存中的最大 Span 数 |
| `pg_tracing.track` | `all` | 追踪哪些语句 |
| `pg_tracing.sample_rate` | 0 | 随机采样查询的比例 |
| `pg_tracing.otel_endpoint` | (空) | 用于 Span 导出的 OTLP HTTP 端点 |

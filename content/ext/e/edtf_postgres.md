---
title: "edtf_postgres"
linkTitle: "edtf_postgres"
description: "EDTF 日期校验、规范化、边界计算与时态关系"
weight: 1130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/monumental-archive/edtf/tree/v1.3.2/crates/edtf-postgres">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">crates/edtf-postgres</div>
    <div class="ext-card__desc">https://github.com/monumental-archive/edtf/tree/v1.3.2/crates/edtf-postgres</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/edtf_postgres-1.3.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">edtf_postgres-1.3.2.tar.gz</div>
    <div class="ext-card__desc">edtf_postgres-1.3.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`edtf_postgres`**](/ext/e/edtf_postgres) | `1.3.2` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license mit or apache20" href="/ext/license#mitorapache20">MIT OR Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1130  | [**`edtf_postgres`**](/ext/e/edtf_postgres) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_when`](/ext/e/pg_when) [`pgcalendar`](/ext/e/pgcalendar) [`pg_rrule`](/ext/e/pg_rrule) [`pg_duration`](/ext/e/pg_duration) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Trusted extension; upstream Cargo requests pgrx 0.19.1; Pigsty builds use the locked pgrx 0.19.3 dependency patch.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.2` | {{< pgvers "18,17,16,15,14" >}} | `edtf_postgres` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.2` | {{< pgvers "18,17,16,15,14" >}} | `edtf_postgres_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-edtf-postgres` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| d12.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| u26.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| u26.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
@ el8.x86_64 18 edtf_postgres_18 edtf_postgres_18-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/edtf_postgres_18-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 edtf_postgres_18 edtf_postgres_18-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/edtf_postgres_18-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 edtf_postgres_18 edtf_postgres_18-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/edtf_postgres_18-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 edtf_postgres_18 edtf_postgres_18-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/edtf_postgres_18-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 edtf_postgres_18 edtf_postgres_18-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/edtf_postgres_18-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 edtf_postgres_18 edtf_postgres_18-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/edtf_postgres_18-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-edtf-postgres postgresql-18-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-18-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 edtf_postgres_17 edtf_postgres_17-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/edtf_postgres_17-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 edtf_postgres_17 edtf_postgres_17-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/edtf_postgres_17-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 edtf_postgres_17 edtf_postgres_17-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/edtf_postgres_17-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 edtf_postgres_17 edtf_postgres_17-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/edtf_postgres_17-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 edtf_postgres_17 edtf_postgres_17-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/edtf_postgres_17-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 edtf_postgres_17 edtf_postgres_17-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/edtf_postgres_17-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-edtf-postgres postgresql-17-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-17-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 edtf_postgres_16 edtf_postgres_16-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/edtf_postgres_16-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 edtf_postgres_16 edtf_postgres_16-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/edtf_postgres_16-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 edtf_postgres_16 edtf_postgres_16-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/edtf_postgres_16-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 edtf_postgres_16 edtf_postgres_16-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/edtf_postgres_16-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 edtf_postgres_16 edtf_postgres_16-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/edtf_postgres_16-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 edtf_postgres_16 edtf_postgres_16-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/edtf_postgres_16-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-edtf-postgres postgresql-16-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-16-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 edtf_postgres_15 edtf_postgres_15-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/edtf_postgres_15-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 edtf_postgres_15 edtf_postgres_15-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/edtf_postgres_15-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 edtf_postgres_15 edtf_postgres_15-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/edtf_postgres_15-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 edtf_postgres_15 edtf_postgres_15-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/edtf_postgres_15-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 edtf_postgres_15 edtf_postgres_15-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/edtf_postgres_15-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 edtf_postgres_15 edtf_postgres_15-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/edtf_postgres_15-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-edtf-postgres postgresql-15-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-15-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 edtf_postgres_14 edtf_postgres_14-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/edtf_postgres_14-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 edtf_postgres_14 edtf_postgres_14-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/edtf_postgres_14-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 edtf_postgres_14 edtf_postgres_14-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/edtf_postgres_14-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 edtf_postgres_14 edtf_postgres_14-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/edtf_postgres_14-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 edtf_postgres_14 edtf_postgres_14-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/edtf_postgres_14-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 edtf_postgres_14 edtf_postgres_14-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/edtf_postgres_14-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-edtf-postgres postgresql-14-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/edtf-postgres/postgresql-14-edtf-postgres_1.3.2-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `edtf_postgres` 扩展的 RPM / DEB 包：

```bash
pig build pkg edtf_postgres         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `edtf_postgres` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install edtf_postgres;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y edtf_postgres -v 18  # PG 18
pig ext install -y edtf_postgres -v 17  # PG 17
pig ext install -y edtf_postgres -v 16  # PG 16
pig ext install -y edtf_postgres -v 15  # PG 15
pig ext install -y edtf_postgres -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y edtf_postgres_18       # PG 18
dnf install -y edtf_postgres_17       # PG 17
dnf install -y edtf_postgres_16       # PG 16
dnf install -y edtf_postgres_15       # PG 15
dnf install -y edtf_postgres_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-edtf-postgres   # PG 18
apt install -y postgresql-17-edtf-postgres   # PG 17
apt install -y postgresql-16-edtf-postgres   # PG 16
apt install -y postgresql-15-edtf-postgres   # PG 15
apt install -y postgresql-14-edtf-postgres   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION edtf_postgres;
```

## 用法

来源：

- [官方扩展 README](https://github.com/monumental-archive/edtf/blob/edtf-postgres-v1.2.3/crates/edtf-postgres/README.md)
- [扩展控制文件](https://github.com/monumental-archive/edtf/blob/edtf-postgres-v1.2.3/crates/edtf-postgres/edtf_postgres.control)
- [pgrx 清单](https://github.com/monumental-archive/edtf/blob/edtf-postgres-v1.2.3/crates/edtf-postgres/Cargo.toml)

`edtf_postgres` 为 ISO 8601-2:2019 Annex A 字符串提供 Extended Date/Time Format 校验、规范化、边界计算与时间关系判断。

### 启用

1.2.3 版本为 amd64 与 arm64 上的 PostgreSQL 14–18 发布构件。安装匹配构件后执行：

```sql
CREATE EXTENSION edtf_postgres;
```

扩展可迁移且为 trusted，因此拥有数据库 `CREATE` 权限的角色可以安装。它不要求预加载。

### 校验与规范形式

接收外部文本前使用 `edtf_valid`，用 `edtf_level` 查看支持的 EDTF 级别，并用 `edtf_canonical` 统一等价表示。

```sql
SELECT edtf_valid('1985-04-12');
SELECT edtf_level('1985-04-12/..');
SELECT edtf_canonical('1985-04-12');
```

`edtf_min` 与 `edtf_max` 返回便于索引的日期边界。`edtf_relation` 比较两个表达式并返回三值时间关系。

```sql
SELECT edtf_min('1985-04'), edtf_max('1985-04');
SELECT edtf_relation('1985', '1986');
```

### 数据建模边界

扩展处理文本与派生日期；它不会代替应用校验，也不会引入持久化 EDTF 基础类型。若不确定性与限定符很重要，应保留原始表达式；只有在查询语义明确时才为派生边界建立索引。

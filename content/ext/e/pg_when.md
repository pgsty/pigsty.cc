---
title: "pg_when"
linkTitle: "pg_when"
description: "PostgreSQL 自然语言时间解析扩展"
weight: 1120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/frectonz/pg-when">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">frectonz/pg-when</div>
    <div class="ext-card__desc">https://github.com/frectonz/pg-when</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_when-0.1.10.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_when-0.1.10.tar.gz</div>
    <div class="ext-card__desc">pg_when-0.1.10.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_when`**](/ext/e/pg_when) | `0.1.10` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1120  | [**`pg_when`**](/ext/e/pg_when) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pgcalendar`](/ext/e/pgcalendar) [`pg_rrule`](/ext/e/pg_rrule) [`cron_utils`](/ext/e/cron_utils) [`pgagent`](/ext/e/pgagent) [`pg_task`](/ext/e/pg_task) [`pg_dbms_job`](/ext/e/pg_dbms_job) [`pg_duration`](/ext/e/pg_duration) [`pg_bikram_sambat`](/ext/e/pg_bikram_sambat) [`pg_dispatch`](/ext/e/pg_dispatch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream 0.1.10 supports PostgreSQL 13-18 and pins pgrx 0.18.1; PIGSTY packages PostgreSQL 14-18 with a locked pgrx 0.19.1 compatibility update.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.10` | {{< pgvers "18,17,16,15,14" >}} | `pg_when` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.10` | {{< pgvers "18,17,16,15,14" >}} | `pg_when_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.10` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-when` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 | AVAIL PIGSTY 0.1.10 1 |
@ el8.x86_64 18 pg_when_18 pg_when_18-0.1.10-1PGSTY.el8.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_18-0.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_when_18 pg_when_18-0.1.10-1PGSTY.el8.aarch64.rpm pigsty 0.1.10 973.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_18-0.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_when_18 pg_when_18-0.1.10-1PGSTY.el9.x86_64.rpm pigsty 0.1.10 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_18-0.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_when_18 pg_when_18-0.1.10-1PGSTY.el9.aarch64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_18-0.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_when_18 pg_when_18-0.1.10-1PGSTY.el10.x86_64.rpm pigsty 0.1.10 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_18-0.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_when_18 pg_when_18-0.1.10-1PGSTY.el10.aarch64.rpm pigsty 0.1.10 1016.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_18-0.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb pigsty 0.1.10 882.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb pigsty 0.1.10 755.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~trixie_amd64.deb pigsty 0.1.10 882.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~trixie_arm64.deb pigsty 0.1.10 756.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~jammy_amd64.deb pigsty 0.1.10 977.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~jammy_arm64.deb pigsty 0.1.10 887.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~noble_amd64.deb pigsty 0.1.10 967.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~noble_arm64.deb pigsty 0.1.10 877.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~resolute_amd64.deb pigsty 0.1.10 964.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-when postgresql-18-pg-when_0.1.10-1PGSTY~resolute_arm64.deb pigsty 0.1.10 875.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-18-pg-when_0.1.10-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_when_17 pg_when_17-0.1.10-1PGSTY.el8.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_17-0.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_when_17 pg_when_17-0.1.10-1PGSTY.el8.aarch64.rpm pigsty 0.1.10 970.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_17-0.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_when_17 pg_when_17-0.1.10-1PGSTY.el9.x86_64.rpm pigsty 0.1.10 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_17-0.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_when_17 pg_when_17-0.1.10-1PGSTY.el9.aarch64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_17-0.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_when_17 pg_when_17-0.1.10-1PGSTY.el10.x86_64.rpm pigsty 0.1.10 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_17-0.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_when_17 pg_when_17-0.1.10-1PGSTY.el10.aarch64.rpm pigsty 0.1.10 1015.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_17-0.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb pigsty 0.1.10 881.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb pigsty 0.1.10 753.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~trixie_amd64.deb pigsty 0.1.10 881.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~trixie_arm64.deb pigsty 0.1.10 754.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~jammy_amd64.deb pigsty 0.1.10 976.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~jammy_arm64.deb pigsty 0.1.10 884.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~noble_amd64.deb pigsty 0.1.10 967.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~noble_arm64.deb pigsty 0.1.10 874.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~resolute_amd64.deb pigsty 0.1.10 962.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-when postgresql-17-pg-when_0.1.10-1PGSTY~resolute_arm64.deb pigsty 0.1.10 873.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-17-pg-when_0.1.10-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_when_16 pg_when_16-0.1.10-1PGSTY.el8.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_16-0.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_when_16 pg_when_16-0.1.10-1PGSTY.el8.aarch64.rpm pigsty 0.1.10 969.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_16-0.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_when_16 pg_when_16-0.1.10-1PGSTY.el9.x86_64.rpm pigsty 0.1.10 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_16-0.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_when_16 pg_when_16-0.1.10-1PGSTY.el9.aarch64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_16-0.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_when_16 pg_when_16-0.1.10-1PGSTY.el10.x86_64.rpm pigsty 0.1.10 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_16-0.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_when_16 pg_when_16-0.1.10-1PGSTY.el10.aarch64.rpm pigsty 0.1.10 1015.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_16-0.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb pigsty 0.1.10 880.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb pigsty 0.1.10 753.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~trixie_amd64.deb pigsty 0.1.10 880.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~trixie_arm64.deb pigsty 0.1.10 754.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~jammy_amd64.deb pigsty 0.1.10 974.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~jammy_arm64.deb pigsty 0.1.10 884.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~noble_amd64.deb pigsty 0.1.10 965.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~noble_arm64.deb pigsty 0.1.10 875.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~resolute_amd64.deb pigsty 0.1.10 961.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-when postgresql-16-pg-when_0.1.10-1PGSTY~resolute_arm64.deb pigsty 0.1.10 872.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-16-pg-when_0.1.10-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_when_15 pg_when_15-0.1.10-1PGSTY.el8.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_15-0.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_when_15 pg_when_15-0.1.10-1PGSTY.el8.aarch64.rpm pigsty 0.1.10 960.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_15-0.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_when_15 pg_when_15-0.1.10-1PGSTY.el9.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_15-0.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_when_15 pg_when_15-0.1.10-1PGSTY.el9.aarch64.rpm pigsty 0.1.10 1022.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_15-0.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_when_15 pg_when_15-0.1.10-1PGSTY.el10.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_15-0.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_when_15 pg_when_15-0.1.10-1PGSTY.el10.aarch64.rpm pigsty 0.1.10 1012.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_15-0.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb pigsty 0.1.10 875.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb pigsty 0.1.10 748.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~trixie_amd64.deb pigsty 0.1.10 874.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~trixie_arm64.deb pigsty 0.1.10 749.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~jammy_amd64.deb pigsty 0.1.10 970.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~jammy_arm64.deb pigsty 0.1.10 877.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~noble_amd64.deb pigsty 0.1.10 959.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~noble_arm64.deb pigsty 0.1.10 868.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~resolute_amd64.deb pigsty 0.1.10 953.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-when postgresql-15-pg-when_0.1.10-1PGSTY~resolute_arm64.deb pigsty 0.1.10 866.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-15-pg-when_0.1.10-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_when_14 pg_when_14-0.1.10-1PGSTY.el8.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_when_14-0.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_when_14 pg_when_14-0.1.10-1PGSTY.el8.aarch64.rpm pigsty 0.1.10 957.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_when_14-0.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_when_14 pg_when_14-0.1.10-1PGSTY.el9.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_when_14-0.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_when_14 pg_when_14-0.1.10-1PGSTY.el9.aarch64.rpm pigsty 0.1.10 1020.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_when_14-0.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_when_14 pg_when_14-0.1.10-1PGSTY.el10.x86_64.rpm pigsty 0.1.10 1.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_when_14-0.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_when_14 pg_when_14-0.1.10-1PGSTY.el10.aarch64.rpm pigsty 0.1.10 1010.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_when_14-0.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb pigsty 0.1.10 872.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb pigsty 0.1.10 746.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~trixie_amd64.deb pigsty 0.1.10 872.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~trixie_arm64.deb pigsty 0.1.10 747.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~jammy_amd64.deb pigsty 0.1.10 965.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~jammy_arm64.deb pigsty 0.1.10 875.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~noble_amd64.deb pigsty 0.1.10 955.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~noble_arm64.deb pigsty 0.1.10 866.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~resolute_amd64.deb pigsty 0.1.10 952.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-when postgresql-14-pg-when_0.1.10-1PGSTY~resolute_arm64.deb pigsty 0.1.10 863.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-when/postgresql-14-pg-when_0.1.10-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_when` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_when         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_when` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_when;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_when -v 18  # PG 18
pig ext install -y pg_when -v 17  # PG 17
pig ext install -y pg_when -v 16  # PG 16
pig ext install -y pg_when -v 15  # PG 15
pig ext install -y pg_when -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_when_18       # PG 18
dnf install -y pg_when_17       # PG 17
dnf install -y pg_when_16       # PG 16
dnf install -y pg_when_15       # PG 15
dnf install -y pg_when_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-when   # PG 18
apt install -y postgresql-17-pg-when   # PG 17
apt install -y postgresql-16-pg-when   # PG 16
apt install -y postgresql-15-pg-when   # PG 15
apt install -y postgresql-14-pg-when   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_when;
```

## 用法

来源：

- [PGXN 上的 pg_when 0.1.10](https://pgxn.org/dist/pg_when/0.1.10/)
- [pg_when 0.1.10 README](https://github.com/frectonz/pg-when/blob/0.1.10/README.md)
- [pg_when 0.1.10 Cargo 清单](https://api.pgxn.org/src/pg_when/pg_when-0.1.10/Cargo.toml)
- [pg_when 0.1.10 control 文件](https://api.pgxn.org/src/pg_when/pg_when-0.1.10/pg_when.control)
- [pg_when 0.1.10 导出函数源码](https://api.pgxn.org/src/pg_when/pg_when-0.1.10/src/when_is.rs)
- [pg_when 0.1.10 相对日期实现](https://api.pgxn.org/src/pg_when/pg_when-0.1.10/src/when_relative_date.rs)

`pg_when` 0.1.10 解析受限的自然语言日期与时间表达式，返回 PostgreSQL `timestamptz`，或按指定精度返回 Unix epoch 值。

```sql
CREATE EXTENSION pg_when;

SELECT when_is('next friday at 8:00 pm in America/New_York');
SELECT seconds_at('5 days ago at this hour in Asia/Tokyo');
SELECT millis_at('in 2 months at midnight in UTC-8');
SELECT micros_at('December 31, 2026 at evening');
SELECT nanos_at('last monday at 22:30');
```

### 查询结构

查询可包含日期、时间和时区，并通过 `at` 与 `in` 连接：

```sql
SELECT when_is('<date> at <time> in <timezone>');
SELECT when_is('<date>');
SELECT when_is('<date> in <timezone>');
SELECT when_is('<time>');
SELECT when_is('<time> in <timezone>');
SELECT when_is('<date> at <time>');
```

省略时区时，解析器使用 UTC。支持的输入包括 `tomorrow`、`last month`、`5 days ago` 等相对日期，常见数字及月份名称形式的准确日期，`noon`、`midnight`、`next hour` 等相对时间，时钟时间、IANA 时区名与 UTC 偏移量。

### 函数索引

- `when_is(text)` 返回 `timestamptz`。
- `seconds_at(text)` 返回 Unix epoch 秒数。
- `millis_at(text)` 返回 Unix epoch 毫秒数。
- `micros_at(text)` 返回 Unix epoch 微秒数。
- `nanos_at(text)` 返回 Unix epoch 纳秒数。

### 兼容性与边界

- 解析器实现的是文档中定义的语法，并非通用自然语言解释器。
- 上游 0.1.10 提供 PostgreSQL 13–18 的构建特性并固定使用 pgrx 0.18.1；Pigsty 软件包覆盖 PostgreSQL 14–18，并应用锁定依赖的 pgrx 0.19.1 兼容更新。
- `pg_when` 不可重定位，其 control 文件要求超级用户执行 `CREATE EXTENSION`。
- 非法文本会触发错误。这五个函数都声明为 `STRICT`，因此空值输入返回空值；当 epoch 纳秒数无法放入 `bigint` 时，`nanos_at(text)` 也会报错。
- 0.1.10 的 SQL 函数声明为 `IMMUTABLE`，但 `now`、`tomorrow`、`5 days ago` 等相对表达式会读取当前时钟。不要把相对输入调用用于表达式索引或生成列，也不要假定它们会在缓存计划中重新求值；只有完整指定日期、时间与时区的输入才与当前时间无关。

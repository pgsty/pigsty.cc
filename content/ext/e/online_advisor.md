---
title: "online_advisor"
linkTitle: "online_advisor"
description: "在线建议缺失索引、扩展统计信息与预备语句"
weight: 5270
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/knizhnik/online_advisor">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">knizhnik/online_advisor</div>
    <div class="ext-card__desc">https://github.com/knizhnik/online_advisor</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/online_advisor-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">online_advisor-1.0.tar.gz</div>
    <div class="ext-card__desc">online_advisor-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`online_advisor`**](/ext/e/online_advisor) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5270  | [**`online_advisor`**](/ext/e/online_advisor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`index_advisor`](/ext/e/index_advisor) [`hypopg`](/ext/e/hypopg) [`pg_qualstats`](/ext/e/pg_qualstats) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires shared_preload_libraries=online_advisor on PostgreSQL 14-16; PGSTY backports upstream PG18 hook compatibility.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `online_advisor` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `online_advisor_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-online-advisor` | - |
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
@ el8.x86_64 18 online_advisor_18 online_advisor_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/online_advisor_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 online_advisor_18 online_advisor_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/online_advisor_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 online_advisor_18 online_advisor_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 21.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/online_advisor_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 online_advisor_18 online_advisor_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/online_advisor_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 online_advisor_18 online_advisor_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/online_advisor_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 online_advisor_18 online_advisor_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 22.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/online_advisor_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 29.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 32.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 30.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-online-advisor postgresql-18-online-advisor_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-18-online-advisor_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 online_advisor_17 online_advisor_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/online_advisor_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 online_advisor_17 online_advisor_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/online_advisor_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 online_advisor_17 online_advisor_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 21.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/online_advisor_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 online_advisor_17 online_advisor_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/online_advisor_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 online_advisor_17 online_advisor_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/online_advisor_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 online_advisor_17 online_advisor_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 22.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/online_advisor_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 29.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 29.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 38.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 30.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-online-advisor postgresql-17-online-advisor_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-17-online-advisor_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 online_advisor_16 online_advisor_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/online_advisor_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 online_advisor_16 online_advisor_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/online_advisor_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 online_advisor_16 online_advisor_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/online_advisor_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 online_advisor_16 online_advisor_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 21.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/online_advisor_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 online_advisor_16 online_advisor_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/online_advisor_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 online_advisor_16 online_advisor_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/online_advisor_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 30.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 38.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 37.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-online-advisor postgresql-16-online-advisor_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 30.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-16-online-advisor_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 online_advisor_15 online_advisor_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/online_advisor_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 online_advisor_15 online_advisor_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/online_advisor_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 online_advisor_15 online_advisor_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/online_advisor_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 online_advisor_15 online_advisor_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 21.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/online_advisor_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 online_advisor_15 online_advisor_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/online_advisor_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 online_advisor_15 online_advisor_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/online_advisor_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 29.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 30.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 37.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 37.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-online-advisor postgresql-15-online-advisor_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 30.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-15-online-advisor_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 online_advisor_14 online_advisor_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/online_advisor_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 online_advisor_14 online_advisor_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 21.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/online_advisor_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 online_advisor_14 online_advisor_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 21.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/online_advisor_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 online_advisor_14 online_advisor_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/online_advisor_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 online_advisor_14 online_advisor_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/online_advisor_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 online_advisor_14 online_advisor_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 22.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/online_advisor_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 29.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 29.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 37.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 37.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 31.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-online-advisor postgresql-14-online-advisor_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/online-advisor/postgresql-14-online-advisor_1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `online_advisor` 扩展的 RPM / DEB 包：

```bash
pig build pkg online_advisor         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `online_advisor` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install online_advisor;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y online_advisor -v 18  # PG 18
pig ext install -y online_advisor -v 17  # PG 17
pig ext install -y online_advisor -v 16  # PG 16
pig ext install -y online_advisor -v 15  # PG 15
pig ext install -y online_advisor -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y online_advisor_18       # PG 18
dnf install -y online_advisor_17       # PG 17
dnf install -y online_advisor_16       # PG 16
dnf install -y online_advisor_15       # PG 15
dnf install -y online_advisor_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-online-advisor   # PG 18
apt install -y postgresql-17-online-advisor   # PG 17
apt install -y postgresql-16-online-advisor   # PG 16
apt install -y postgresql-15-online-advisor   # PG 15
apt install -y postgresql-14-online-advisor   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'online_advisor';
```


**创建扩展**：

```sql
CREATE EXTENSION online_advisor;
```

## 用法

来源：

- [官方1.0版本README](https://github.com/knizhnik/online_advisor/blob/1.0/README.md)
- [扩展控制文件](https://github.com/knizhnik/online_advisor/blob/1.0/online_advisor.control)
- [1.0版本SQL对象](https://github.com/knizhnik/online_advisor/blob/1.0/online_advisor--1.0.sql)
- [示例预加载配置](https://github.com/knizhnik/online_advisor/blob/1.0/online_advisor.conf)

`online_advisor` 观察PostgreSQL执行计划和工作负载时间，然后推荐索引、扩展统计信息或准备语句。它仅报告候选方案；从不自动创建索引或统计对象。

### 核心流程

预加载库并重启PostgreSQL：

```conf
shared_preload_libraries = 'online_advisor'
```

在每个需要观察工作负载的数据库中创建并激活扩展：

```sql
CREATE EXTENSION online_advisor;

-- Calling an extension function activates collection in this database.
SELECT get_executor_stats();
```

运行代表性的工作负载后，检查推荐方案：

```sql
SELECT * FROM proposed_indexes;
SELECT * FROM proposed_statistics;
SELECT * FROM get_executor_stats();

-- Keep separate index candidates instead of combining compatible clauses.
SELECT * FROM propose_indexes(combine => false);
```

在应用生成的 `create_index` 或 `create_statistics` 语句之前，请审查每个建议。在创建索引或统计对象之后运行 `ANALYZE`，以便规划器可以使用当前统计数据。

### 对象和设置

- `proposed_indexes`: `propose_indexes(combine, reset)` 的视图，并带有过滤体积、调用次数、耗时以及候选的 `CREATE INDEX` 语句。
- `proposed_statistics`: `propose_statistics(combine, reset)` 的视图，并带有误估数、调用次数、耗时以及候选的 `CREATE STATISTICS` 语句。
- `get_executor_stats(reset)`: 返回聚合规划和执行时间、查询计数及规划开销比率。
- `online_advisor.filtered_threshold`: 考虑为索引建议的过滤行数最小值，默认值为 `1000`。
- `online_advisor.misestimation_threshold`: 实际到估计行数比值，用于统计；默认值为 `10`。
- `online_advisor.min_rows`: 误估分析中返回的最小行数，默认值为 `1000`。
- `online_advisor.max_index_proposals` 和 `online_advisor.max_stat_proposals`: 建议容量；在激活扩展之前设置它们。
- `online_advisor.do_instrumentation`, `online_advisor.log_duration`, 和 `online_advisor.prepare_threshold`: 控制收集和准备语句建议。

### 注意事项

- 仪器化会增加工作负载开销，请在目标系统上进行测量，并在不需要时禁用数据收集。
- 索引启发式算法不考虑复合索引、连接索引或仅用于避免排序的索引的操作符顺序问题。
- 扩展不会估计建议索引的好处。在构建昂贵的索引之前，使用计划审查或假设性索引工具进行评估。
- 建议是数据库本地的，并依赖于激活或重置以来观察到的工作负载。

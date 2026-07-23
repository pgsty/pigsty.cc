---
title: "pg_roast"
linkTitle: "pg_roast"
description: "覆盖模式设计、安全配置、运行健康与查询行为的数据库审计器"
weight: 7120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/samirketema/pg_roast">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">samirketema/pg_roast</div>
    <div class="ext-card__desc">https://github.com/samirketema/pg_roast</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_roast-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_roast-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_roast-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_roast`**](/ext/e/pg_roast) | `1.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7120  | [**`pg_roast`**](/ext/e/pg_roast) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `roast` |
{.ext-table}

| **相关扩展** | [`pglinter`](/ext/e/pglinter) [`pg_profile`](/ext/e/pg_profile) [`pg_stat_statements`](/ext/e/pg_stat_statements) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream has no release tag; package pins main commit ccbf012. Manual audits work normally; the periodic background worker requires shared_preload_libraries=pg_roast.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_roast` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_roast_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-roast` | - |
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
@ el8.x86_64 18 pg_roast_18 pg_roast_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roast_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_roast_18 pg_roast_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roast_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_roast_18 pg_roast_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roast_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_roast_18 pg_roast_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roast_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_roast_18 pg_roast_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roast_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_roast_18 pg_roast_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roast_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 32.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 32.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-roast postgresql-18-pg-roast_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-18-pg-roast_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_roast_17 pg_roast_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roast_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_roast_17 pg_roast_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roast_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_roast_17 pg_roast_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roast_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_roast_17 pg_roast_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roast_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_roast_17 pg_roast_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roast_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_roast_17 pg_roast_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roast_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 33.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 32.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-roast postgresql-17-pg-roast_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-17-pg-roast_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_roast_16 pg_roast_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roast_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_roast_16 pg_roast_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roast_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_roast_16 pg_roast_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roast_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_roast_16 pg_roast_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roast_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_roast_16 pg_roast_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roast_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_roast_16 pg_roast_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roast_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 33.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 32.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-roast postgresql-16-pg-roast_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-16-pg-roast_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_roast_15 pg_roast_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 31.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roast_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_roast_15 pg_roast_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roast_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_roast_15 pg_roast_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roast_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_roast_15 pg_roast_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roast_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_roast_15 pg_roast_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 31.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roast_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_roast_15 pg_roast_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roast_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 33.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 32.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-roast postgresql-15-pg-roast_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-15-pg-roast_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_roast_14 pg_roast_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 31.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roast_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_roast_14 pg_roast_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roast_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_roast_14 pg_roast_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roast_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_roast_14 pg_roast_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roast_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_roast_14 pg_roast_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 31.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roast_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_roast_14 pg_roast_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roast_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 31.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 33.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 32.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-roast postgresql-14-pg-roast_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-roast/postgresql-14-pg-roast_1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_roast` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_roast         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_roast` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_roast;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_roast -v 18  # PG 18
pig ext install -y pg_roast -v 17  # PG 17
pig ext install -y pg_roast -v 16  # PG 16
pig ext install -y pg_roast -v 15  # PG 15
pig ext install -y pg_roast -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_roast_18       # PG 18
dnf install -y pg_roast_17       # PG 17
dnf install -y pg_roast_16       # PG 16
dnf install -y pg_roast_15       # PG 15
dnf install -y pg_roast_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-roast   # PG 18
apt install -y postgresql-17-pg-roast   # PG 17
apt install -y postgresql-16-pg-roast   # PG 16
apt install -y postgresql-15-pg-roast   # PG 15
apt install -y postgresql-14-pg-roast   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_roast';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_roast;
```

## 用法

来源：

- [上游 README](https://github.com/samirketema/pg_roast/blob/ccbf012d01ebbb8edcb13b02add981705dab2308/README.md)
- [1.0 版安装 SQL](https://github.com/samirketema/pg_roast/blob/ccbf012d01ebbb8edcb13b02add981705dab2308/pg_roast--1.0.sql)
- [后台工作进程实现](https://github.com/samirketema/pg_roast/blob/ccbf012d01ebbb8edcb13b02add981705dab2308/pg_roast_bgw.c)

pg_roast 运行一组带有明确观点的 PostgreSQL 健康检查，并将发现存入其固定的 roast 模式。它检查配置、模式设计、索引、清理与膨胀指标、安全状态、复制、连接和负载信号。1.0 版面向 PostgreSQL 14 及更高版本。

### 手动审计

手动模式不需要预加载：

```sql
CREATE EXTENSION pg_roast;

SELECT * FROM roast.run();
SELECT severity, check_name, object_name, roast
FROM roast.latest
ORDER BY severity, check_name;

SELECT * FROM roast.summary;
```

每次运行都会持久化审计历史与发现。使用 latest 视图查看最新一次运行，使用 summary 视图查看分组结果。

### 定时审计

可选的后台工作进程需要预加载配置与重启：

```ini
shared_preload_libraries = 'pg_roast'
pg_roast.database = 'mydb'
pg_roast.interval = 3600
```

数据库设置在服务器启动时固定。在生产负载上启用自动审计前，应审查上游设置。

### 注意事项

- 发现是启发式建议，并不自动证明存在缺陷。应在应用任何建议前，审查工作负载背景、维护窗口和 PostgreSQL 文档。
- 审计会执行系统目录与统计查询，并写入历史表。应在大型系统目录上测量开销，并防止不可信用户访问 roast 模式。
- 结果可能暴露对象名、配置、安全发现和查询相关运维细节。应实施最小权限与明确的保留策略。
- 手动运行无需预加载，但后台工作进程必须预加载；修改仅启动时设置需要重启。

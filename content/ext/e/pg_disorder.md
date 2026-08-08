---
title: "pg_disorder"
linkTitle: "pg_disorder"
description: "扰动无 ORDER BY 查询的行序以暴露依赖隐式顺序的测试"
weight: 2880
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/viralpraxis/pg_disorder">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">viralpraxis/pg_disorder</div>
    <div class="ext-card__desc">https://github.com/viralpraxis/pg_disorder</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_disorder-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_disorder-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_disorder-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_disorder`**](/ext/e/pg_disorder) | `0.1.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2880  | [**`pg_disorder`**](/ext/e/pg_disorder) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plan_filter`](/ext/e/plan_filter) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`pg_mockable`](/ext/e/pg_mockable) [`pgtap`](/ext/e/pgtap) `pg_simula` `pg_fiu` [`pg_crash`](/ext/e/pg_crash) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Headless loadable module with no control file and no CREATE EXTENSION step; intended only for test databases; load per session with session_preload_libraries and never enable globally in production.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_disorder` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_disorder_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-disorder` | - |
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
@ el8.x86_64 18 pg_disorder_18 pg_disorder_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_disorder_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_disorder_18 pg_disorder_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_disorder_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_disorder_18 pg_disorder_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_disorder_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_disorder_18 pg_disorder_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_disorder_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_disorder_18 pg_disorder_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_disorder_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_disorder_18 pg_disorder_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_disorder_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 22.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 21.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 22.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-disorder postgresql-18-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 21.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-18-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_disorder_17 pg_disorder_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_disorder_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_disorder_17 pg_disorder_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_disorder_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_disorder_17 pg_disorder_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_disorder_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_disorder_17 pg_disorder_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_disorder_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_disorder_17 pg_disorder_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_disorder_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_disorder_17 pg_disorder_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_disorder_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 21.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 25.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 21.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-disorder postgresql-17-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 21.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-17-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_disorder_16 pg_disorder_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_disorder_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_disorder_16 pg_disorder_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_disorder_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_disorder_16 pg_disorder_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_disorder_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_disorder_16 pg_disorder_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_disorder_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_disorder_16 pg_disorder_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_disorder_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_disorder_16 pg_disorder_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_disorder_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 22.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-disorder postgresql-16-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 21.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-16-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_disorder_15 pg_disorder_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_disorder_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_disorder_15 pg_disorder_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_disorder_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_disorder_15 pg_disorder_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_disorder_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_disorder_15 pg_disorder_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_disorder_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_disorder_15 pg_disorder_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_disorder_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_disorder_15 pg_disorder_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_disorder_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 22.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-disorder postgresql-15-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-15-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_disorder_14 pg_disorder_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_disorder_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_disorder_14 pg_disorder_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_disorder_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_disorder_14 pg_disorder_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_disorder_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_disorder_14 pg_disorder_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_disorder_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_disorder_14 pg_disorder_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_disorder_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_disorder_14 pg_disorder_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_disorder_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 21.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 21.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 21.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 22.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 22.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 22.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-disorder postgresql-14-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 21.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-disorder/postgresql-14-pg-disorder_0.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_disorder` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_disorder         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_disorder` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_disorder;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_disorder -v 18  # PG 18
pig ext install -y pg_disorder -v 17  # PG 17
pig ext install -y pg_disorder -v 16  # PG 16
pig ext install -y pg_disorder -v 15  # PG 15
pig ext install -y pg_disorder -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_disorder_18       # PG 18
dnf install -y pg_disorder_17       # PG 17
dnf install -y pg_disorder_16       # PG 16
dnf install -y pg_disorder_15       # PG 15
dnf install -y pg_disorder_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-disorder   # PG 18
apt install -y postgresql-17-pg-disorder   # PG 17
apt install -y postgresql-16-pg-disorder   # PG 16
apt install -y postgresql-15-pg-disorder   # PG 15
apt install -y postgresql-14-pg-disorder   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_disorder';
```


## 用法

来源：

- [pg_disorder 0.1.0 README](https://api.pgxn.org/src/pg_disorder/pg_disorder-0.1.0/README.md)
- [pg_disorder 0.1.0 元数据](https://api.pgxn.org/src/pg_disorder/pg_disorder-0.1.0/META.json)
- [pg_disorder 0.1.0 Makefile](https://api.pgxn.org/src/pg_disorder/pg_disorder-0.1.0/Makefile)

`pg_disorder` 是一个仅用于测试的 PostgreSQL 可加载模块，它会有意改变符合条件的 `SELECT` 查询输出顺序，用于发现无意中依赖未指定行顺序的应用和测试。它是一个无扩展对象的模块：没有控制文件、SQL 安装脚本，也不需要执行 `CREATE EXTENSION pg_disorder`。

### 为测试数据库启用

在会话启动时加载该模块，以便其规划器钩子可用：

```sql
ALTER DATABASE regression_db
  SET session_preload_libraries = 'pg_disorder';

ALTER DATABASE regression_db
  SET pg_disorder.mode = 'reverse';
```

修改 `session_preload_libraries` 后应重新连接。不要将此模块加入生产环境全局的 `shared_preload_libraries` 设置。

### 模式

```sql
SET pg_disorder.mode = 'off';
SET pg_disorder.mode = 'reverse';
SET pg_disorder.mode = 'shuffle';
SET pg_disorder.seed = 42;
SET pg_disorder.force_serial = on;
```

- `off` 不改变执行计划。
- `reverse` 以确定性方式反转符合条件的输出。
- `shuffle` 在会话种子、提交的查询文本和执行计划固定时产生确定性排列。使用默认种子零时，每个会话会先选择并记录一个随机种子。
- `force_serial` 禁止并行计划，使乱序测试能够复现。

修复失败查询时，应添加语义正确的 `ORDER BY`；不要编码在 `off` 模式下偶然观察到的顺序。

### 适用条件与注意事项

该钩子面向没有 `ORDER BY` 的顶层 `SELECT` 语句。它会有意跳过那些重新排序不安全或会改变 SQL 语义的查询形态，包括聚合、分组、`DISTINCT`、集合操作、窗口函数、递归查询、行锁，以及没有 `FROM` 关系的查询。

- `pg_disorder` 是故障注入工具，而不是生产查询功能。
- 乱序测试通过并不能证明每个无序查询都安全；被排除的查询形态和规划器路径不会被重写。
- 软件包仅安装服务器模块。应通过 GUC 或模块加载状态验证是否启用，而不是查看 `pg_extension`。

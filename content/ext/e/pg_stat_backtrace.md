---
title: "pg_stat_backtrace"
linkTitle: "pg_stat_backtrace"
description: "捕获或记录 PostgreSQL 进程的 C 层调用栈"
weight: 6030
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Nickyoung0/pg_stat_backtrace">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Nickyoung0/pg_stat_backtrace</div>
    <div class="ext-card__desc">https://github.com/Nickyoung0/pg_stat_backtrace</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_stat_backtrace-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_stat_backtrace-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_stat_backtrace-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_backtrace`**](/ext/e/pg_stat_backtrace) | `1.0.0` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6030  | [**`pg_stat_backtrace`**](/ext/e/pg_stat_backtrace) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> GitHub v1.0.0; C PGXS extension using ptrace(PTRACE_SEIZE) and libunwind; Linux only; runtime may need kernel.yama.ptrace_scope=0


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_stat_backtrace` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_stat_backtrace_$v` | `libunwind` |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-stat-backtrace` | `libunwind8` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pg_stat_backtrace_18 pg_stat_backtrace_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_backtrace_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_stat_backtrace_18 pg_stat_backtrace_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_backtrace_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_stat_backtrace_18 pg_stat_backtrace_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 31.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_backtrace_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_stat_backtrace_18 pg_stat_backtrace_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_backtrace_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_stat_backtrace_18 pg_stat_backtrace_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_backtrace_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_stat_backtrace_18 pg_stat_backtrace_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 32.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_backtrace_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 17.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-stat-backtrace postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-18-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_stat_backtrace_17 pg_stat_backtrace_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_backtrace_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_stat_backtrace_17 pg_stat_backtrace_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_backtrace_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_stat_backtrace_17 pg_stat_backtrace_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_backtrace_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_stat_backtrace_17 pg_stat_backtrace_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_backtrace_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_stat_backtrace_17 pg_stat_backtrace_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_backtrace_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_stat_backtrace_17 pg_stat_backtrace_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_backtrace_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-stat-backtrace postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-17-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_stat_backtrace_16 pg_stat_backtrace_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_backtrace_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_stat_backtrace_16 pg_stat_backtrace_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_backtrace_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_stat_backtrace_16 pg_stat_backtrace_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_backtrace_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_stat_backtrace_16 pg_stat_backtrace_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_backtrace_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_stat_backtrace_16 pg_stat_backtrace_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_backtrace_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_stat_backtrace_16 pg_stat_backtrace_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_backtrace_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 17.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-stat-backtrace postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-16-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_stat_backtrace_15 pg_stat_backtrace_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_backtrace_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_stat_backtrace_15 pg_stat_backtrace_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_backtrace_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_stat_backtrace_15 pg_stat_backtrace_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 31.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_backtrace_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_stat_backtrace_15 pg_stat_backtrace_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_backtrace_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_stat_backtrace_15 pg_stat_backtrace_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_backtrace_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_stat_backtrace_15 pg_stat_backtrace_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_backtrace_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 17.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-stat-backtrace postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-15-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_stat_backtrace_14 pg_stat_backtrace_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stat_backtrace_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_stat_backtrace_14 pg_stat_backtrace_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stat_backtrace_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_stat_backtrace_14 pg_stat_backtrace_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_backtrace_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_stat_backtrace_14 pg_stat_backtrace_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_backtrace_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_stat_backtrace_14 pg_stat_backtrace_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 32.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_backtrace_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_stat_backtrace_14 pg_stat_backtrace_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 32.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_backtrace_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 17.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 17.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-stat-backtrace postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 17.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-backtrace/postgresql-14-pg-stat-backtrace_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_stat_backtrace` 扩展的 DEB 包：

```bash
pig build pkg pg_stat_backtrace         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_stat_backtrace` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_stat_backtrace;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_stat_backtrace -v 18  # PG 18
pig ext install -y pg_stat_backtrace -v 17  # PG 17
pig ext install -y pg_stat_backtrace -v 16  # PG 16
pig ext install -y pg_stat_backtrace -v 15  # PG 15
pig ext install -y pg_stat_backtrace -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_stat_backtrace_18       # PG 18
dnf install -y pg_stat_backtrace_17       # PG 17
dnf install -y pg_stat_backtrace_16       # PG 16
dnf install -y pg_stat_backtrace_15       # PG 15
dnf install -y pg_stat_backtrace_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-stat-backtrace   # PG 18
apt install -y postgresql-17-pg-stat-backtrace   # PG 17
apt install -y postgresql-16-pg-stat-backtrace   # PG 16
apt install -y postgresql-15-pg-stat-backtrace   # PG 15
apt install -y postgresql-14-pg-stat-backtrace   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_stat_backtrace;
```




## 用法

> 来源：[pg_stat_backtrace upstream README](https://github.com/Nickyoung0/pg_stat_backtrace)、[upstream changelog](https://github.com/Nickyoung0/pg_stat_backtrace/blob/main/CHANGELOG.md)、本地源码归档 `pg_stat_backtrace-1.0.0.tar.gz`。

`pg_stat_backtrace` 用于捕获或记录同一 Linux 主机上 PostgreSQL 后端进程或辅助进程的 C 层调用栈。它使用 `ptrace(PTRACE_SEIZE)` 和 `libunwind`；不需要 `shared_preload_libraries`，也不会向目标进程发送 `SIGSTOP`。

```sql
CREATE EXTENSION pg_stat_backtrace;
```

### 捕获调用栈

先从 PostgreSQL 视图中找到目标进程，再调用 `pg_get_backtrace(pid)`：

```sql
SELECT pid, backend_type, state, wait_event, query
FROM pg_stat_activity
WHERE backend_type = 'autovacuum worker';

SELECT pg_get_backtrace(123456);
```

返回文本采用类似 `pstack(1)` 的格式：

```text
#0  0x00007f5e6c1a4d9e in __epoll_wait+0x4e
#1  0x000055f1a8c2a213 in WaitEventSetWaitBlock+0x83
#2  0x000055f1a8c2a04e in WaitEventSetWait+0xfe
```

### 写入服务器日志

如果希望结果进入常规 PostgreSQL 日志管道，可以使用 `pg_log_backtrace(pid)`：

```sql
SELECT pg_log_backtrace(123456);

SELECT pid, pg_log_backtrace(pid)
FROM pg_stat_activity
WHERE backend_type = 'walsender';
```

该函数成功时返回 `true`。

### 权限

默认情况下，两个函数都会从 `PUBLIC` 撤销执行权限。只应把访问权授予可信的监控角色：

```sql
GRANT EXECUTE ON FUNCTION pg_get_backtrace(int) TO observability;
GRANT EXECUTE ON FUNCTION pg_log_backtrace(int) TO observability;
```

C 代码仍会执行目标检查：

- 超级用户可以定位该实例中的任意 PostgreSQL 进程，包括 `walwriter`、`checkpointer`、`walsender`、autovacuum worker、startup、archiver 等辅助进程。
- 非超级用户只能定位由其成员角色拥有的普通后端进程。
- 辅助进程没有角色所有权，因此非超级用户总会被拒绝。
- 非超级用户不能定位超级用户拥有的后端，即使存在角色成员关系也不行。

### 输入与错误行为

两个函数都是 `VOLATILE STRICT PARALLEL RESTRICTED`。

```sql
SELECT pg_get_backtrace(NULL::int);  -- NULL, no ptrace attempt
SELECT pg_log_backtrace(NULL::int);  -- NULL, no ptrace attempt
SELECT pg_get_backtrace(0);          -- WARNING, then NULL
SELECT pg_log_backtrace(-1);         -- WARNING, then false
```

自我定位会被拒绝，因为 Linux 进程不能 ptrace 自己：

```sql
SELECT pg_get_backtrace(pg_backend_pid());
```

### 运行注意事项

- 版本 1.0.0 支持 PostgreSQL 14-18。上游 1.0.0 同时声明兼容 PostgreSQL 19。
- 该扩展仅支持 Linux，构建和运行时都依赖 `libunwind` / `libunwind-ptrace`。
- 在启用了 Yama ptrace 限制的主机上，后端之间互相捕获调用栈可能需要设置 `kernel.yama.ptrace_scope = 0`。
- 展开调用栈期间，目标进程会被短暂暂停。不要在繁忙主库上对 `walwriter`、`checkpointer` 或同步复制 `walsender` 等关键进程进行紧密循环调用。
- Linux 对每个目标进程只允许一个 tracer。多个会话同时定位同一个 PID 时可能因 `EPERM` 失败；等待正在进行的调用结束后重试。

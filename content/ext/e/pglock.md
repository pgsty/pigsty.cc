---
title: "pglock"
linkTitle: "pglock"
description: "在 PostgreSQL 内实现轻量级分布式锁服务"
weight: 4140
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fraruiz/pglock">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fraruiz/pglock</div>
    <div class="ext-card__desc">https://github.com/fraruiz/pglock</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pglock-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pglock-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pglock-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pglock`**](/ext/e/pglock) | `1.0.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4140  | [**`pglock`**](/ext/e/pglock) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pglock` |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pgmb`](/ext/e/pgmb) [`pgmq`](/ext/e/pgmq) [`pgq`](/ext/e/pgq) [`pg_cron`](/ext/e/pg_cron) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Packaging patches the upstream pgmb.control mismatch and installs the extension as pglock.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pglock` | `pg_cron` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pglock_$v` | `pg_cron_$v` |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pglock` | `postgresql-$v-cron` |
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
@ el8.x86_64 18 pglock_18 pglock_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglock_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pglock_18 pglock_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglock_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pglock_18 pglock_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglock_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pglock_18 pglock_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglock_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pglock_18 pglock_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglock_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pglock_18 pglock_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglock_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pglock postgresql-18-pglock_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-18-pglock_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pglock_17 pglock_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglock_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pglock_17 pglock_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglock_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pglock_17 pglock_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglock_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pglock_17 pglock_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglock_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pglock_17 pglock_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglock_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pglock_17 pglock_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglock_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pglock postgresql-17-pglock_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-17-pglock_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pglock_16 pglock_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglock_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pglock_16 pglock_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglock_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pglock_16 pglock_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglock_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pglock_16 pglock_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglock_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pglock_16 pglock_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglock_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pglock_16 pglock_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglock_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pglock postgresql-16-pglock_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-16-pglock_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pglock_15 pglock_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglock_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pglock_15 pglock_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglock_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pglock_15 pglock_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglock_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pglock_15 pglock_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglock_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pglock_15 pglock_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglock_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pglock_15 pglock_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglock_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pglock postgresql-15-pglock_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-15-pglock_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pglock_14 pglock_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglock_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pglock_14 pglock_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglock_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pglock_14 pglock_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglock_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pglock_14 pglock_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 10.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglock_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pglock_14 pglock_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 10.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglock_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pglock_14 pglock_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 10.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglock_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 4.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pglock postgresql-14-pglock_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 4.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglock/postgresql-14-pglock_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pglock` 扩展的 RPM / DEB 包：

```bash
pig build pkg pglock         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pglock` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pglock;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pglock -v 18  # PG 18
pig ext install -y pglock -v 17  # PG 17
pig ext install -y pglock -v 16  # PG 16
pig ext install -y pglock -v 15  # PG 15
pig ext install -y pglock -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pglock_18       # PG 18
dnf install -y pglock_17       # PG 17
dnf install -y pglock_16       # PG 16
dnf install -y pglock_15       # PG 15
dnf install -y pglock_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pglock   # PG 18
apt install -y postgresql-17-pglock   # PG 17
apt install -y postgresql-16-pglock   # PG 16
apt install -y postgresql-15-pglock   # PG 15
apt install -y postgresql-14-pglock   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pglock CASCADE;  -- 依赖: pg_cron
```

## 用法

- 来源：[README](https://github.com/fraruiz/pglock/blob/master/README.md)

`pglock` 是一个在 PostgreSQL 内实现的轻量分布式锁服务。它把锁状态保存在 `pglock.locks` 中，并通过基于 TTL 的清理来回收陈旧行。

### 创建扩展

```sql
CREATE EXTENSION pglock;
```

上游 README 标明要求 PostgreSQL 9.1+ 和 `plpgsql`。

### 获取与释放锁

```sql
SELECT pglock.lock('worker-1', 'users');
SELECT pglock.unlock('worker-1', 'users');
```

`pglock.lock(id, resource)` 在成功拿到锁时返回 `true`，如果锁已被其他进程持有则返回 `false`。文档说明 `pglock.unlock(id, resource)` 是幂等的。

### 隔离级别与过期

README 建议在并发场景下使用 serializable isolation 以保证正确性：

```sql
SELECT pglock.set_serializable();
```

```sql
BEGIN ISOLATION LEVEL SERIALIZABLE;
SELECT pglock.lock('my-id', 'my-resource');
SELECT pglock.unlock('my-id', 'my-resource');
COMMIT;
```

陈旧锁通过下面的方式过期清理：

```sql
SELECT pglock.ttl();
```

文档给出的默认 TTL 是 5 分钟。如果环境里有 `pg_cron`，README 说明可以每分钟调度一次 `pglock.ttl()`。

### 锁表

上游模式中的锁表是 `pglock.locks`，包含 `id`、`resource`、`locked`、`ttl`、`created_at` 和 `updated_at` 列。主键为 `(id, resource)`。

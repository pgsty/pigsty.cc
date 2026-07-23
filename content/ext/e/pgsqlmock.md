---
title: "pgsqlmock"
linkTitle: "pgsqlmock"
description: "为 PostgreSQL 单元测试提供函数 Mock、表和视图伪造能力"
weight: 3130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/v-maliutin/pgSQLMock">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">v-maliutin/pgSQLMock</div>
    <div class="ext-card__desc">https://github.com/v-maliutin/pgSQLMock</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgsqlmock-1.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsqlmock-1.0.1.tar.gz</div>
    <div class="ext-card__desc">pgsqlmock-1.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgsqlmock`**](/ext/e/pgsqlmock) | `1.0.1` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3130  | [**`pgsqlmock`**](/ext/e/pgsqlmock) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pgtap`](/ext/e/pgtap) [`pgtap`](/ext/e/pgtap) [`pg_mockable`](/ext/e/pg_mockable) [`faker`](/ext/e/faker) [`unit`](/ext/e/unit) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Packaging corrects the upstream control dependency name from pgTap to pgtap and requires pgTAP 1.3.4 or newer.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pgsqlmock` | `plpgsql`, `pgtap` |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pgsqlmock_$v` | `pgtap_$v` |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgsqlmock` | `postgresql-$v-pgtap` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
@ el8.x86_64 18 pgsqlmock_18 pgsqlmock_18-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsqlmock_18-1.0.1-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 pgsqlmock_18 pgsqlmock_18-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsqlmock_18-1.0.1-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 pgsqlmock_18 pgsqlmock_18-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsqlmock_18-1.0.1-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 pgsqlmock_18 pgsqlmock_18-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsqlmock_18-1.0.1-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 pgsqlmock_18 pgsqlmock_18-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsqlmock_18-1.0.1-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 pgsqlmock_18 pgsqlmock_18-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsqlmock_18-1.0.1-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pgsqlmock postgresql-18-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-18-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pgsqlmock_17 pgsqlmock_17-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsqlmock_17-1.0.1-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 pgsqlmock_17 pgsqlmock_17-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsqlmock_17-1.0.1-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 pgsqlmock_17 pgsqlmock_17-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsqlmock_17-1.0.1-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 pgsqlmock_17 pgsqlmock_17-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsqlmock_17-1.0.1-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 pgsqlmock_17 pgsqlmock_17-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsqlmock_17-1.0.1-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 pgsqlmock_17 pgsqlmock_17-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsqlmock_17-1.0.1-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pgsqlmock postgresql-17-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-17-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pgsqlmock_16 pgsqlmock_16-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsqlmock_16-1.0.1-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 pgsqlmock_16 pgsqlmock_16-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsqlmock_16-1.0.1-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 pgsqlmock_16 pgsqlmock_16-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsqlmock_16-1.0.1-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 pgsqlmock_16 pgsqlmock_16-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsqlmock_16-1.0.1-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 pgsqlmock_16 pgsqlmock_16-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsqlmock_16-1.0.1-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 pgsqlmock_16 pgsqlmock_16-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsqlmock_16-1.0.1-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pgsqlmock postgresql-16-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-16-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pgsqlmock_15 pgsqlmock_15-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsqlmock_15-1.0.1-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 pgsqlmock_15 pgsqlmock_15-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsqlmock_15-1.0.1-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pgsqlmock_15 pgsqlmock_15-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsqlmock_15-1.0.1-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 pgsqlmock_15 pgsqlmock_15-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsqlmock_15-1.0.1-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 pgsqlmock_15 pgsqlmock_15-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsqlmock_15-1.0.1-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 pgsqlmock_15 pgsqlmock_15-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsqlmock_15-1.0.1-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pgsqlmock postgresql-15-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-15-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 pgsqlmock_14 pgsqlmock_14-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsqlmock_14-1.0.1-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 pgsqlmock_14 pgsqlmock_14-1.0.1-1PIGSTY.el8.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsqlmock_14-1.0.1-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 pgsqlmock_14 pgsqlmock_14-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsqlmock_14-1.0.1-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 pgsqlmock_14 pgsqlmock_14-1.0.1-1PIGSTY.el9.noarch.rpm pigsty 1.0.1 16.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsqlmock_14-1.0.1-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 pgsqlmock_14 pgsqlmock_14-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsqlmock_14-1.0.1-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 pgsqlmock_14 pgsqlmock_14-1.0.1-1PIGSTY.el10.noarch.rpm pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsqlmock_14-1.0.1-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb pigsty 1.0.1 12.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pgsqlmock postgresql-14-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb pigsty 1.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsqlmock/postgresql-14-pgsqlmock_1.0.1-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgsqlmock` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgsqlmock         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgsqlmock` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgsqlmock;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgsqlmock -v 18  # PG 18
pig ext install -y pgsqlmock -v 17  # PG 17
pig ext install -y pgsqlmock -v 16  # PG 16
pig ext install -y pgsqlmock -v 15  # PG 15
pig ext install -y pgsqlmock -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgsqlmock_18       # PG 18
dnf install -y pgsqlmock_17       # PG 17
dnf install -y pgsqlmock_16       # PG 16
dnf install -y pgsqlmock_15       # PG 15
dnf install -y pgsqlmock_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgsqlmock   # PG 18
apt install -y postgresql-17-pgsqlmock   # PG 17
apt install -y postgresql-16-pgsqlmock   # PG 16
apt install -y postgresql-15-pgsqlmock   # PG 15
apt install -y postgresql-14-pgsqlmock   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgsqlmock CASCADE;  -- 依赖: plpgsql, pgtap
```

## 用法

来源：

- [pgSQLMock 1.0.1 文档](https://github.com/v-maliutin/pgSQLMock/blob/Release_v1.0.1/doc/pgsqlmock.md)
- [pgSQLMock 说明文档](https://github.com/v-maliutin/pgSQLMock/blob/Release_v1.0.1/README.md)
- [pgSQLMock 控制文件](https://github.com/v-maliutin/pgSQLMock/blob/Release_v1.0.1/pgsqlmock.control)
- [pgSQLMock 1.0.1 发行版](https://github.com/v-maliutin/pgSQLMock/releases/tag/Release_v1.0.1)

`pgsqlmock` 扩展了 pgTAP，增加了表模拟、函数和视图模拟、调用次数断言以及调试辅助功能。其辅助功能会修改或替换真实的数据库对象，因此需要在基于事务的测试上下文中使用它们，以便在测试结束后回滚这些更改。

```sql
CREATE EXTENSION pgtap;
CREATE EXTENSION pgsqlmock;
```

### 模拟表

`fake_table(text[], ...)` 可以隔离测试与外键、主键、`NOT NULL` 约束、分区或预存行之间的关系。将模式限定的表名作为 `text[]` 传递：

```sql
SELECT plan(2);

SELECT fake_table(
  _table_ident       => ARRAY['app.accounts', 'app.transactions'],
  _make_table_empty  => true,
  _leave_primary_key => false,
  _drop_not_null     => true
);

INSERT INTO app.transactions(account_id, amount)
VALUES (999, 42.00);

SELECT is(
  (SELECT sum(amount) FROM app.transactions WHERE account_id = 999),
  42.00::numeric,
  'transaction logic is isolated from account fixtures'
);

SELECT * FROM finish();
```

重要选项包括 `make_table_empty`、`leave_primary_key`、`drop_not_null`、`drop_collation` 和 `drop_partitions`。在测试中保留主键同时删除参与列的 `NOT NULL` 约束是矛盾的；对于这种测试形状，需要显式地移除或重新创建该键。

### 模拟函数

`mock_func(schema, name, signature, ...)` 临时替换一个例行程序，但保持其身份不变。提供标量值或 SQL/准备语句文本作为结果集：

```sql
CREATE OR REPLACE FUNCTION app.current_business_time()
RETURNS time LANGUAGE sql AS $$ SELECT current_time $$;

SELECT mock_func(
  'app',
  'current_business_time',
  '()',
  _return_scalar_value => '13:00'::time
);

SELECT is(app.current_business_time(), '13:00'::time, 'clock is deterministic');
```

对于返回集合的例行程序，请传递 `_return_set_value` 作为 SQL 查询或已准备语句的名称。使用 `get_routine_signature()` 来确定在重载或默认参数使存储签名模糊时的存储签名。

### 模拟视图

`mock_view(schema, view_name, return_set_sql)` 替换一个带有受控行数的视图：

```sql
SELECT mock_view(
  'app',
  'active_accounts',
  $$SELECT * FROM (VALUES (1, 'test')) AS v(id, name)$$
);

SELECT results_eq(
  'SELECT id, name FROM app.active_accounts',
  $$VALUES (1, 'test')$$,
  'view consumer sees only the fixture'
);
```

### 调用次数和诊断信息

在使用 `track_functions = 'all'` 断言例行程序被调用的次数之前，请设置 `call_count()`：

```sql
SET LOCAL track_functions = 'all';

SELECT call_count(
  1,
  'app',
  'current_business_time',
  '()'
);
```

`print_table_as_json()` 和 `print_query_as_json()` 通过 `NOTICE` 发出可重复的 SQL/JSON 样式快照，这对于当 pgTAP 的回滚会隐藏失败测试期间创建的状态时非常有用。

### 注意事项

- 只在隔离的测试事务中运行模拟和表模拟；它们会发出真实的 `ALTER`、`DROP` 和替换 DDL。
- pgSQLMock 依赖于 PL/pgSQL 和 pgTAP。在运行其断言之前，请加载 pgTAP。
- `call_count()` 依赖于 PostgreSQL 函数统计信息，因此需要设置 `track_functions = 'all'`。
- 发行版 1.0.1 修复了 `fake_table()` 在没有主键的表上删除 `NOT NULL` 约束的问题。

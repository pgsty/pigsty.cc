---
title: "pg_auditor"
linkTitle: "pg_auditor"
description: "审计数据变更并提供闪回能力"
weight: 7130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/kouber/pg_auditor">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">kouber/pg_auditor</div>
    <div class="ext-card__desc">https://github.com/kouber/pg_auditor</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_auditor-0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_auditor-0.2.tar.gz</div>
    <div class="ext-card__desc">pg_auditor-0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_auditor`**](/ext/e/pg_auditor) | `0.2` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7130  | [**`pg_auditor`**](/ext/e/pg_auditor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_drop_events`](/ext/e/pg_drop_events) [`table_log`](/ext/e/table_log) [`pgaudit`](/ext/e/pgaudit) [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`pg_savior`](/ext/e/pg_savior) [`pg_upless`](/ext/e/pg_upless) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pg15 rpm pkg name is pgaudit17_$v*


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_auditor` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_auditor_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-auditor` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
@ el8.x86_64 18 pg_auditor_18 pg_auditor_18-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_auditor_18-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_auditor_18 pg_auditor_18-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_auditor_18-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_auditor_18 pg_auditor_18-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_auditor_18-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_auditor_18 pg_auditor_18-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_auditor_18-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_auditor_18 pg_auditor_18-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_auditor_18-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_auditor_18 pg_auditor_18-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_auditor_18-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-auditor postgresql-18-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-18-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-auditor postgresql-18-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-18-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-auditor postgresql-18-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-18-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-auditor postgresql-18-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-18-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-auditor postgresql-18-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-18-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-auditor postgresql-18-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-18-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-auditor postgresql-18-pg-auditor_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-18-pg-auditor_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-auditor postgresql-18-pg-auditor_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-18-pg-auditor_0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_auditor_17 pg_auditor_17-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_auditor_17-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_auditor_17 pg_auditor_17-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_auditor_17-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_auditor_17 pg_auditor_17-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_auditor_17-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_auditor_17 pg_auditor_17-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_auditor_17-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_auditor_17 pg_auditor_17-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_auditor_17-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_auditor_17 pg_auditor_17-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_auditor_17-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-auditor postgresql-17-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-17-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-auditor postgresql-17-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-17-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-auditor postgresql-17-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-17-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-auditor postgresql-17-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-17-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-auditor postgresql-17-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-17-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-auditor postgresql-17-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-17-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-auditor postgresql-17-pg-auditor_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-17-pg-auditor_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-auditor postgresql-17-pg-auditor_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-17-pg-auditor_0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_auditor_16 pg_auditor_16-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_auditor_16-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_auditor_16 pg_auditor_16-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_auditor_16-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_auditor_16 pg_auditor_16-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_auditor_16-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_auditor_16 pg_auditor_16-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_auditor_16-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_auditor_16 pg_auditor_16-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_auditor_16-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_auditor_16 pg_auditor_16-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_auditor_16-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-auditor postgresql-16-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-16-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-auditor postgresql-16-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-16-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-auditor postgresql-16-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-16-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-auditor postgresql-16-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-16-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-auditor postgresql-16-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-16-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-auditor postgresql-16-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-16-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-auditor postgresql-16-pg-auditor_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-16-pg-auditor_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-auditor postgresql-16-pg-auditor_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-16-pg-auditor_0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_auditor_15 pg_auditor_15-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_auditor_15-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_auditor_15 pg_auditor_15-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_auditor_15-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_auditor_15 pg_auditor_15-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_auditor_15-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_auditor_15 pg_auditor_15-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_auditor_15-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_auditor_15 pg_auditor_15-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_auditor_15-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_auditor_15 pg_auditor_15-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_auditor_15-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-auditor postgresql-15-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-15-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-auditor postgresql-15-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-15-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-auditor postgresql-15-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-15-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-auditor postgresql-15-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-15-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-auditor postgresql-15-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-15-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-auditor postgresql-15-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-15-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-auditor postgresql-15-pg-auditor_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-15-pg-auditor_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-auditor postgresql-15-pg-auditor_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-15-pg-auditor_0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_auditor_14 pg_auditor_14-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_auditor_14-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_auditor_14 pg_auditor_14-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_auditor_14-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_auditor_14 pg_auditor_14-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_auditor_14-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_auditor_14 pg_auditor_14-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_auditor_14-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_auditor_14 pg_auditor_14-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 11.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_auditor_14-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_auditor_14 pg_auditor_14-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 10.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_auditor_14-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-auditor postgresql-14-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-14-pg-auditor_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-auditor postgresql-14-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-auditor/postgresql-14-pg-auditor_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-auditor postgresql-14-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-14-pg-auditor_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-auditor postgresql-14-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 8.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-auditor/postgresql-14-pg-auditor_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-auditor postgresql-14-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-14-pg-auditor_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-auditor postgresql-14-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-auditor/postgresql-14-pg-auditor_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-auditor postgresql-14-pg-auditor_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-14-pg-auditor_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-auditor postgresql-14-pg-auditor_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 8.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-auditor/postgresql-14-pg-auditor_0.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_auditor` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_auditor         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_auditor` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_auditor;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_auditor -v 18  # PG 18
pig ext install -y pg_auditor -v 17  # PG 17
pig ext install -y pg_auditor -v 16  # PG 16
pig ext install -y pg_auditor -v 15  # PG 15
pig ext install -y pg_auditor -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_auditor_18       # PG 18
dnf install -y pg_auditor_17       # PG 17
dnf install -y pg_auditor_16       # PG 16
dnf install -y pg_auditor_15       # PG 15
dnf install -y pg_auditor_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-auditor   # PG 18
apt install -y postgresql-17-pg-auditor   # PG 17
apt install -y postgresql-16-pg-auditor   # PG 16
apt install -y postgresql-15-pg-auditor   # PG 15
apt install -y postgresql-14-pg-auditor   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_auditor;
```

---
title: "schedoc"
linkTitle: "schedoc"
description: "在Django与DBT之间通过注释文档交换元数据"
weight: 4330
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ZeroGachis/pg_schedoc">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ZeroGachis/pg_schedoc</div>
    <div class="ext-card__desc">https://github.com/ZeroGachis/pg_schedoc</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_schedoc-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_schedoc-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_schedoc-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_schedoc`**](/ext/e/schedoc) | `0.0.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4330  | [**`schedoc`**](/ext/e/schedoc) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`ddl_historization`](/ext/e/ddl_historization) [`pg_readme_test_extension`](/ext/e/pg_readme_test_extension) [`pg_readme`](/ext/e/pg_readme) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_schedoc` | `ddl_historization` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_schedoc_$v` | `ddl_historization_$v` |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-schedoc` | `postgresql-$v-ddl-historization` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_schedoc_18 pg_schedoc_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_schedoc_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_schedoc_18 pg_schedoc_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_schedoc_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_schedoc_18 pg_schedoc_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_schedoc_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_schedoc_18 pg_schedoc_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_schedoc_18-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_schedoc_18 pg_schedoc_18-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_schedoc_18-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_schedoc_18 pg_schedoc_18-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_schedoc_18-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-schedoc postgresql-18-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-18-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-schedoc postgresql-18-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-18-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-schedoc postgresql-18-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-18-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-schedoc postgresql-18-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-18-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-schedoc postgresql-18-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-18-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-schedoc postgresql-18-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-18-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-schedoc postgresql-18-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-18-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-schedoc postgresql-18-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-18-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_schedoc_17 pg_schedoc_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_schedoc_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_schedoc_17 pg_schedoc_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_schedoc_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_schedoc_17 pg_schedoc_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_schedoc_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_schedoc_17 pg_schedoc_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_schedoc_17-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_schedoc_17 pg_schedoc_17-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_schedoc_17-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_schedoc_17 pg_schedoc_17-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_schedoc_17-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-schedoc postgresql-17-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-17-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-schedoc postgresql-17-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-17-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-schedoc postgresql-17-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-17-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-schedoc postgresql-17-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-17-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-schedoc postgresql-17-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-17-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-schedoc postgresql-17-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-17-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-schedoc postgresql-17-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-17-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-schedoc postgresql-17-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-17-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_schedoc_16 pg_schedoc_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_schedoc_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_schedoc_16 pg_schedoc_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_schedoc_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_schedoc_16 pg_schedoc_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_schedoc_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_schedoc_16 pg_schedoc_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_schedoc_16-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_schedoc_16 pg_schedoc_16-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_schedoc_16-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_schedoc_16 pg_schedoc_16-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_schedoc_16-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-schedoc postgresql-16-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-16-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-schedoc postgresql-16-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-16-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-schedoc postgresql-16-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-16-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-schedoc postgresql-16-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-16-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-schedoc postgresql-16-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-16-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-schedoc postgresql-16-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-16-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-schedoc postgresql-16-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-16-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-schedoc postgresql-16-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-16-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_schedoc_15 pg_schedoc_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_schedoc_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_schedoc_15 pg_schedoc_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_schedoc_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_schedoc_15 pg_schedoc_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_schedoc_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_schedoc_15 pg_schedoc_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_schedoc_15-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_schedoc_15 pg_schedoc_15-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_schedoc_15-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_schedoc_15 pg_schedoc_15-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_schedoc_15-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-schedoc postgresql-15-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-15-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-schedoc postgresql-15-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-15-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-schedoc postgresql-15-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-15-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-schedoc postgresql-15-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-15-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-schedoc postgresql-15-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-15-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-schedoc postgresql-15-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-15-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-schedoc postgresql-15-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-15-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-schedoc postgresql-15-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-15-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_schedoc_14 pg_schedoc_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_schedoc_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_schedoc_14 pg_schedoc_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 22.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_schedoc_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_schedoc_14 pg_schedoc_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_schedoc_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_schedoc_14 pg_schedoc_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 22.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_schedoc_14-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_schedoc_14 pg_schedoc_14-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_schedoc_14-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_schedoc_14 pg_schedoc_14-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 22.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_schedoc_14-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-schedoc postgresql-14-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-14-pg-schedoc_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-schedoc postgresql-14-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-schedoc/postgresql-14-pg-schedoc_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-schedoc postgresql-14-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-14-pg-schedoc_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-schedoc postgresql-14-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 4.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-schedoc/postgresql-14-pg-schedoc_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-schedoc postgresql-14-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-14-pg-schedoc_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-schedoc postgresql-14-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-schedoc/postgresql-14-pg-schedoc_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-schedoc postgresql-14-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-14-pg-schedoc_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-schedoc postgresql-14-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 4.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-schedoc/postgresql-14-pg-schedoc_0.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_schedoc` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_schedoc         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_schedoc` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_schedoc;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_schedoc -v 18  # PG 18
pig ext install -y pg_schedoc -v 17  # PG 17
pig ext install -y pg_schedoc -v 16  # PG 16
pig ext install -y pg_schedoc -v 15  # PG 15
pig ext install -y pg_schedoc -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_schedoc_18       # PG 18
dnf install -y pg_schedoc_17       # PG 17
dnf install -y pg_schedoc_16       # PG 16
dnf install -y pg_schedoc_15       # PG 15
dnf install -y pg_schedoc_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-schedoc   # PG 18
apt install -y postgresql-17-pg-schedoc   # PG 17
apt install -y postgresql-16-pg-schedoc   # PG 16
apt install -y postgresql-15-pg-schedoc   # PG 15
apt install -y postgresql-14-pg-schedoc   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION schedoc CASCADE;  -- 依赖: ddl_historization
```



## 用法

> [schedoc: 通过 PostgreSQL 对象的 COMMENT 实现模式文档化](https://github.com/ZeroGachis/pg_schedoc)

从 PostgreSQL 对象的 `COMMENT` 构建自动文档。需要 `ddl_historization` 扩展。

### 安装

```sql
CREATE EXTENSION schedoc CASCADE;
SELECT schedoc_start();
```

### 添加列文档

以 JSON 格式在列上设置注释，包含预定义字段：

```sql
COMMENT ON COLUMN my_table.id IS '{"status": "private"}';
COMMENT ON COLUMN my_table.email IS '{"status": "public"}';
COMMENT ON COLUMN my_table.name IS '{"status": "internal"}';
```

### 查询文档

查询已解析的列注释：

```sql
SELECT * FROM schedoc_column_comments;
```

结果：

```
 databasename | tablename | columnname | status
--------------+-----------+------------+---------
 mydb         | my_table  | id         | private
 mydb         | my_table  | email      | public
 mydb         | my_table  | name       | internal
```

### 使用场景

将列元数据与其他系统（如 Django `db_comment`、DBT docs）进行交叉引用，在开发人员和数据分析师之间定义数据契约。

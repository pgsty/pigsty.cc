---
title: "envvar"
linkTitle: "envvar"
description: "获取环境变量的函数"
weight: 4270
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/theory/pg-envvar">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">theory/pg-envvar</div>
    <div class="ext-card__desc">https://github.com/theory/pg-envvar</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg-envvar-1.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-envvar-1.0.1.tar.gz</div>
    <div class="ext-card__desc">pg-envvar-1.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_envvar`**](/ext/e/envvar) | `1.0.1` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4270  | [**`envvar`**](/ext/e/envvar) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`session_variable`](/ext/e/session_variable) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) [`pgjq`](/ext/e/pgjq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_envvar` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_envvar_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-envvar` | - |
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
@ el8.x86_64 18 pg_envvar_18 pg_envvar_18-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_envvar_18-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_envvar_18 pg_envvar_18-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_envvar_18-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_envvar_18 pg_envvar_18-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_envvar_18-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_envvar_18 pg_envvar_18-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_envvar_18-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_envvar_18 pg_envvar_18-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_envvar_18-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_envvar_18 pg_envvar_18-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_envvar_18-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb pigsty 1.0.1 9.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb pigsty 1.0.1 8.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb pigsty 1.0.1 9.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb pigsty 1.0.1 9.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb pigsty 1.0.1 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-envvar postgresql-18-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb pigsty 1.0.1 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-18-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_envvar_17 pg_envvar_17-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_envvar_17-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_envvar_17 pg_envvar_17-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_envvar_17-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_envvar_17 pg_envvar_17-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_envvar_17-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_envvar_17 pg_envvar_17-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_envvar_17-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_envvar_17 pg_envvar_17-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_envvar_17-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_envvar_17 pg_envvar_17-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_envvar_17-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb pigsty 1.0.1 9.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb pigsty 1.0.1 9.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb pigsty 1.0.1 9.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb pigsty 1.0.1 9.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-envvar postgresql-17-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb pigsty 1.0.1 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-17-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_envvar_16 pg_envvar_16-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_envvar_16-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_envvar_16 pg_envvar_16-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_envvar_16-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_envvar_16 pg_envvar_16-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_envvar_16-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_envvar_16 pg_envvar_16-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_envvar_16-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_envvar_16 pg_envvar_16-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_envvar_16-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_envvar_16 pg_envvar_16-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_envvar_16-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb pigsty 1.0.1 9.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb pigsty 1.0.1 9.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb pigsty 1.0.1 9.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb pigsty 1.0.1 9.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-envvar postgresql-16-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb pigsty 1.0.1 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-16-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_envvar_15 pg_envvar_15-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_envvar_15-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_envvar_15 pg_envvar_15-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_envvar_15-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_envvar_15 pg_envvar_15-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_envvar_15-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_envvar_15 pg_envvar_15-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_envvar_15-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_envvar_15 pg_envvar_15-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_envvar_15-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_envvar_15 pg_envvar_15-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_envvar_15-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb pigsty 1.0.1 9.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb pigsty 1.0.1 9.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb pigsty 1.0.1 9.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb pigsty 1.0.1 9.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-envvar postgresql-15-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb pigsty 1.0.1 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-15-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_envvar_14 pg_envvar_14-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_envvar_14-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_envvar_14 pg_envvar_14-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_envvar_14-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_envvar_14 pg_envvar_14-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_envvar_14-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_envvar_14 pg_envvar_14-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 12.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_envvar_14-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_envvar_14 pg_envvar_14-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_envvar_14-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_envvar_14 pg_envvar_14-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 12.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_envvar_14-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb pigsty 1.0.1 9.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb pigsty 1.0.1 9.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb pigsty 1.0.1 9.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb pigsty 1.0.1 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb pigsty 1.0.1 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb pigsty 1.0.1 9.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-envvar postgresql-14-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb pigsty 1.0.1 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-envvar/postgresql-14-pg-envvar_1.0.1-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_envvar` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_envvar         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_envvar` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_envvar;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_envvar -v 18  # PG 18
pig ext install -y pg_envvar -v 17  # PG 17
pig ext install -y pg_envvar -v 16  # PG 16
pig ext install -y pg_envvar -v 15  # PG 15
pig ext install -y pg_envvar -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_envvar_18       # PG 18
dnf install -y pg_envvar_17       # PG 17
dnf install -y pg_envvar_16       # PG 16
dnf install -y pg_envvar_15       # PG 15
dnf install -y pg_envvar_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-envvar   # PG 18
apt install -y postgresql-17-pg-envvar   # PG 17
apt install -y postgresql-16-pg-envvar   # PG 16
apt install -y postgresql-15-pg-envvar   # PG 15
apt install -y postgresql-14-pg-envvar   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION envvar;
```



## 用法

> [envvar: 从 PostgreSQL 访问环境变量](https://github.com/theory/pg-envvar)

提供一个用于读取数据库服务器环境变量的函数。

### 函数

```sql
get_env(name TEXT) RETURNS TEXT
```

返回数据库服务器上指定环境变量的值，如果未设置则返回 NULL。

### 示例

```sql
SELECT get_env('PGTZ');
-- UTC

SELECT get_env('HOME');
-- /var/lib/postgresql

SELECT get_env('PATH');
-- /usr/local/sbin:/usr/local/bin:...

SELECT get_env('NONEXISTENT');
-- NULL
```

### 模式支持

可以将扩展安装到指定的模式中：

```sql
CREATE SCHEMA env;
CREATE EXTENSION envvar SCHEMA env;

SELECT env.get_env('PGTZ');
```

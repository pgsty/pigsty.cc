---
title: "pg_try_cast"
linkTitle: "pg_try_cast"
description: "文本转换失败时返回 NULL 或指定类型的回退值。"
weight: 4855
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Mazuco/pg_try_cast">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Mazuco/pg_try_cast</div>
    <div class="ext-card__desc">https://github.com/Mazuco/pg_try_cast</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_try_cast-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_try_cast-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_try_cast-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_try_cast`**](/ext/e/pg_try_cast) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4855  | [**`pg_try_cast`**](/ext/e/pg_try_cast) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> Release 1.0.0 installs control/SQL 1.0; META provides.version says 1.0.0. PG16+ required, CI covers 16-18; input types without soft-error support may still raise errors.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "16,17,18" >}} | `pg_try_cast` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "16,17,18" >}} | `pg_try_cast_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "16,17,18" >}} | `postgresql-$v-pg-try-cast` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_try_cast_18 pg_try_cast_18-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_try_cast_18-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_try_cast_18 pg_try_cast_18-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_try_cast_18-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_try_cast_18 pg_try_cast_18-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_try_cast_18-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_try_cast_18 pg_try_cast_18-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 21.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_try_cast_18-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_try_cast_18 pg_try_cast_18-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_try_cast_18-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_try_cast_18 pg_try_cast_18-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_try_cast_18-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 13.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-try-cast postgresql-18-pg-try-cast_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-try-cast/postgresql-18-pg-try-cast_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_try_cast_17 pg_try_cast_17-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_try_cast_17-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_try_cast_17 pg_try_cast_17-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_try_cast_17-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_try_cast_17 pg_try_cast_17-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_try_cast_17-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_try_cast_17 pg_try_cast_17-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_try_cast_17-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_try_cast_17 pg_try_cast_17-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_try_cast_17-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_try_cast_17 pg_try_cast_17-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_try_cast_17-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-try-cast postgresql-17-pg-try-cast_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-try-cast/postgresql-17-pg-try-cast_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_try_cast_16 pg_try_cast_16-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_try_cast_16-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_try_cast_16 pg_try_cast_16-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_try_cast_16-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_try_cast_16 pg_try_cast_16-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_try_cast_16-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_try_cast_16 pg_try_cast_16-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 21.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_try_cast_16-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_try_cast_16 pg_try_cast_16-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 21.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_try_cast_16-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_try_cast_16 pg_try_cast_16-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 21.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_try_cast_16-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 13.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 13.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 13.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-try-cast postgresql-16-pg-try-cast_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 13.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-try-cast/postgresql-16-pg-try-cast_1.0.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_try_cast` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_try_cast         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_try_cast` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_try_cast;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_try_cast -v 18  # PG 18
pig ext install -y pg_try_cast -v 17  # PG 17
pig ext install -y pg_try_cast -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_try_cast_18       # PG 18
dnf install -y pg_try_cast_17       # PG 17
dnf install -y pg_try_cast_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-try-cast   # PG 18
apt install -y postgresql-17-pg-try-cast   # PG 17
apt install -y postgresql-16-pg-try-cast   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_try_cast;
```

## 用法

来源：

- [README.md](https://github.com/Mazuco/pg_try_cast/blob/d8013ce29c39e53c7317725927f003379743292c/README.md)
- [pg_try_cast--1.0.sql](https://github.com/Mazuco/pg_try_cast/blob/d8013ce29c39e53c7317725927f003379743292c/pg_try_cast--1.0.sql)
- [src/pg_try_cast.c](https://github.com/Mazuco/pg_try_cast/blob/d8013ce29c39e53c7317725927f003379743292c/src/pg_try_cast.c)
- [.github/workflows/ci.yml](https://github.com/Mazuco/pg_try_cast/blob/d8013ce29c39e53c7317725927f003379743292c/.github/workflows/ci.yml)
- [pg_try_cast.control](https://github.com/Mazuco/pg_try_cast/blob/d8013ce29c39e53c7317725927f003379743292c/pg_try_cast.control)

`pg_try_cast` 提供 `try_cast` 与 `try_convert`，在受支持的输入转换出错时返回回退值，避免整个查询失败。发布版本 1.0.0 安装的 SQL 版本为 1.0。要求 PostgreSQL 16 或更新版本，上游 CI 覆盖 16–18。扩展可信、可迁移，无需预加载。

### 核心用法

```sql
CREATE EXTENSION pg_try_cast;
SELECT try_cast('42', NULL::integer);
SELECT try_cast('invalid', 0);
SELECT try_convert(NULL::date, '2026-02-30');
```

### 运行边界

`try_cast(value text, fallback anyelement)` 的第二个参数同时决定结果类型和出错回退值；`try_convert(fallback anyelement, value text)` 的参数顺序相反。NULL 输入仍返回 NULL，应为回退值指定明确类型。扩展会检查类型修饰符与域约束。它处理文本输入转换，不涵盖任意原生类型转换。尚未支持软错误机制的输入函数仍可能抛出错误，包括向 regtype 传入格式错误的类型名称。安装文件就绪后，拥有数据库 CREATE 权限的角色可安装此可信扩展。

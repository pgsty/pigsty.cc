---
title: "pg_projection"
linkTitle: "pg_projection"
description: "PostgreSQL JSONB 的 MongoDB 风格投影读取函数"
weight: 9090
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/suissa/pg_projection">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">suissa/pg_projection</div>
    <div class="ext-card__desc">https://github.com/suissa/pg_projection</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_projection-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_projection-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_projection-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_projection`**](/ext/e/pg_projection) | `1.0.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9090  | [**`pg_projection`**](/ext/e/pg_projection) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pgjq`](/ext/e/pgjq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> SQL-only extension.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_projection` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_projection_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pg-projection` | - |
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
@ el8.x86_64 18 pg_projection_18 pg_projection_18-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_projection_18-1.0.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_projection_18 pg_projection_18-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_projection_18-1.0.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_projection_18 pg_projection_18-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_projection_18-1.0.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_projection_18 pg_projection_18-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_projection_18-1.0.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_projection_18 pg_projection_18-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_projection_18-1.0.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_projection_18 pg_projection_18-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_projection_18-1.0.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-projection postgresql-18-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-18-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pg_projection_17 pg_projection_17-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_projection_17-1.0.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_projection_17 pg_projection_17-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_projection_17-1.0.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_projection_17 pg_projection_17-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_projection_17-1.0.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_projection_17 pg_projection_17-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_projection_17-1.0.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_projection_17 pg_projection_17-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_projection_17-1.0.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_projection_17 pg_projection_17-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_projection_17-1.0.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-projection postgresql-17-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-17-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pg_projection_16 pg_projection_16-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_projection_16-1.0.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_projection_16 pg_projection_16-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_projection_16-1.0.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_projection_16 pg_projection_16-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_projection_16-1.0.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_projection_16 pg_projection_16-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_projection_16-1.0.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_projection_16 pg_projection_16-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_projection_16-1.0.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_projection_16 pg_projection_16-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_projection_16-1.0.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-projection postgresql-16-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-16-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pg_projection_15 pg_projection_15-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_projection_15-1.0.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_projection_15 pg_projection_15-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_projection_15-1.0.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_projection_15 pg_projection_15-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_projection_15-1.0.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_projection_15 pg_projection_15-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_projection_15-1.0.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_projection_15 pg_projection_15-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_projection_15-1.0.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_projection_15 pg_projection_15-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_projection_15-1.0.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-projection postgresql-15-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-15-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 pg_projection_14 pg_projection_14-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_projection_14-1.0.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 pg_projection_14 pg_projection_14-1.0.0-1PIGSTY.el8.noarch.rpm pigsty 1.0.0 9.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_projection_14-1.0.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 pg_projection_14 pg_projection_14-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_projection_14-1.0.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 pg_projection_14 pg_projection_14-1.0.0-1PIGSTY.el9.noarch.rpm pigsty 1.0.0 9.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_projection_14-1.0.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 pg_projection_14 pg_projection_14-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_projection_14-1.0.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 pg_projection_14 pg_projection_14-1.0.0-1PIGSTY.el10.noarch.rpm pigsty 1.0.0 10.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_projection_14-1.0.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~trixie_all.deb pigsty 1.0.0 3.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~jammy_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~noble_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pg-projection postgresql-14-pg-projection_1.0.0-1PIGSTY~resolute_all.deb pigsty 1.0.0 3.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-projection/postgresql-14-pg-projection_1.0.0-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_projection` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_projection         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_projection` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_projection;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_projection -v 18  # PG 18
pig ext install -y pg_projection -v 17  # PG 17
pig ext install -y pg_projection -v 16  # PG 16
pig ext install -y pg_projection -v 15  # PG 15
pig ext install -y pg_projection -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_projection_18       # PG 18
dnf install -y pg_projection_17       # PG 17
dnf install -y pg_projection_16       # PG 16
dnf install -y pg_projection_15       # PG 15
dnf install -y pg_projection_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-projection   # PG 18
apt install -y postgresql-17-pg-projection   # PG 17
apt install -y postgresql-16-pg-projection   # PG 16
apt install -y postgresql-15-pg-projection   # PG 15
apt install -y postgresql-14-pg-projection   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_projection;
```

## 用法

- 来源：[pg_projection README](https://github.com/suissa/pg_projection)，[SQL definitions](https://github.com/suissa/pg_projection/blob/main/pg_projection--1.0.sql)，[control file](https://github.com/suissa/pg_projection/blob/main/pg_projection.control)

`pg_projection` 为 PostgreSQL `jsonb` 提供类似 MongoDB 的读取投影能力。1.0 SQL 文件定义了两个函数：`pg_project(jsonb, jsonb)` 用于单个 JSON 文档，`pg_project_set(text, jsonb)` 用于把查询结果转换为 JSON 数组后再做投影。

### 投影单个 JSONB 值

投影值使用数字标志：`1` 表示包含字段，`0` 表示排除字段。

```sql
CREATE EXTENSION pg_projection;

SELECT pg_project(
  '{"_id": 7, "name": "Ada", "email": "ada@example.test", "secret": "x"}'::jsonb,
  '{"name": 1, "email": 1}'::jsonb
);
-- {"_id": 7, "name": "Ada", "email": "ada@example.test"}
```

在包含模式下，如果 `_id` 存在，默认会被保留。调用方只想返回选中字段时，需要显式排除它：

```sql
SELECT pg_project(
  '{"_id": 7, "name": "Ada", "email": "ada@example.test"}'::jsonb,
  '{"_id": 0, "name": 1}'::jsonb
);
-- {"name": "Ada"}
```

### 排除字段

当投影使用 `0` 时，函数会从原始文档出发，移除匹配的顶层 key：

```sql
SELECT pg_project(
  '{"name": "Ada", "internal_id": "a-1", "secret_key": "k"}'::jsonb,
  '{"internal_id": 0, "secret_key": 0}'::jsonb
);
-- {"name": "Ada"}
```

### 投影查询结果

`pg_project_set(query_text, projection_json)` 会执行传入的 SQL 文本，用 `to_jsonb(t)` 转换每一行，应用 `pg_project`，并返回 JSON 数组：

```sql
SELECT pg_project_set(
  'SELECT id, username, password_hash FROM users WHERE active',
  '{"password_hash": 0}'::jsonb
);
```

由于 `query_text` 是动态 SQL，只应传入由你控制的应用代码或迁移代码组装出的可信查询字符串。不要把不可信的用户输入拼接进这个参数。

### 注意事项

- SQL 实现只投影顶层 key；它没有实现 MongoDB 的嵌套路径投影。
- 投影值会在内部转换为整数，因此应使用数字 `0` 和 `1` 标志。
- `pg_project(jsonb, jsonb)` 声明为 `IMMUTABLE STRICT`；`pg_project_set(text, jsonb)` 声明为 `STABLE`。

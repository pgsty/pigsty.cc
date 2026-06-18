---
title: "jsonschema"
linkTitle: "jsonschema"
description: "PostgreSQL JSON Schema 校验函数"
weight: 2760
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/theory/pg-jsonschema-boon">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">theory/pg-jsonschema-boon</div>
    <div class="ext-card__desc">https://github.com/theory/pg-jsonschema-boon</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/jsonschema-0.1.9.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">jsonschema-0.1.9.tar.gz</div>
    <div class="ext-card__desc">jsonschema-0.1.9.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`jsonschema`**](/ext/e/jsonschema) | `0.1.9` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2760  | [**`jsonschema`**](/ext/e/jsonschema) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_graphql`](/ext/e/pg_graphql) [`plv8`](/ext/e/plv8) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Distinct from Supabase pg_jsonschema; pgrx patched to 0.18.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "14,15,16,17,18" >}} | `jsonschema` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "14,15,16,17,18" >}} | `jsonschema_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.9` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-jsonschema` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 | AVAIL PIGSTY 0.1.9 1 |
@ el8.x86_64 18 jsonschema_18 jsonschema_18-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 924.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jsonschema_18-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 jsonschema_18 jsonschema_18-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 806.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jsonschema_18-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 jsonschema_18 jsonschema_18-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 936.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jsonschema_18-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 jsonschema_18 jsonschema_18-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 875.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jsonschema_18-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 jsonschema_18 jsonschema_18-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 933.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jsonschema_18-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 jsonschema_18 jsonschema_18-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 875.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jsonschema_18-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 785.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 664.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 786.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 664.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 873.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 797.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 862.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 782.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb pigsty 0.1.9 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-jsonschema postgresql-18-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb pigsty 0.1.9 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-18-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 jsonschema_17 jsonschema_17-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 924.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jsonschema_17-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 jsonschema_17 jsonschema_17-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 806.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jsonschema_17-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 jsonschema_17 jsonschema_17-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 936.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jsonschema_17-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 jsonschema_17 jsonschema_17-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 875.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jsonschema_17-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 jsonschema_17 jsonschema_17-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 940.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jsonschema_17-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 jsonschema_17 jsonschema_17-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 875.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jsonschema_17-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 787.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 664.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 786.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 664.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 873.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 792.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 866.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 787.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb pigsty 0.1.9 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-jsonschema postgresql-17-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb pigsty 0.1.9 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-17-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 jsonschema_16 jsonschema_16-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 924.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jsonschema_16-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 jsonschema_16 jsonschema_16-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 806.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jsonschema_16-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 jsonschema_16 jsonschema_16-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 936.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jsonschema_16-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 jsonschema_16 jsonschema_16-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 875.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jsonschema_16-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 jsonschema_16 jsonschema_16-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 936.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jsonschema_16-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 jsonschema_16 jsonschema_16-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 875.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jsonschema_16-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 786.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 664.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 785.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 664.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 873.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 792.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 866.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 782.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb pigsty 0.1.9 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-jsonschema postgresql-16-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb pigsty 0.1.9 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-16-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 jsonschema_15 jsonschema_15-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 924.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jsonschema_15-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 jsonschema_15 jsonschema_15-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 807.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jsonschema_15-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 jsonschema_15 jsonschema_15-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 937.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jsonschema_15-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 jsonschema_15 jsonschema_15-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 875.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jsonschema_15-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 jsonschema_15 jsonschema_15-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 936.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jsonschema_15-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 jsonschema_15 jsonschema_15-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 875.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jsonschema_15-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 786.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 665.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 786.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 665.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 873.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 797.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 864.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 786.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb pigsty 0.1.9 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-jsonschema postgresql-15-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb pigsty 0.1.9 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-15-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 jsonschema_14 jsonschema_14-0.1.9-1PIGSTY.el8.x86_64.rpm pigsty 0.1.9 924.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/jsonschema_14-0.1.9-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 jsonschema_14 jsonschema_14-0.1.9-1PIGSTY.el8.aarch64.rpm pigsty 0.1.9 807.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/jsonschema_14-0.1.9-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 jsonschema_14 jsonschema_14-0.1.9-1PIGSTY.el9.x86_64.rpm pigsty 0.1.9 940.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/jsonschema_14-0.1.9-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 jsonschema_14 jsonschema_14-0.1.9-1PIGSTY.el9.aarch64.rpm pigsty 0.1.9 875.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/jsonschema_14-0.1.9-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 jsonschema_14 jsonschema_14-0.1.9-1PIGSTY.el10.x86_64.rpm pigsty 0.1.9 939.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/jsonschema_14-0.1.9-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 jsonschema_14 jsonschema_14-0.1.9-1PIGSTY.el10.aarch64.rpm pigsty 0.1.9 875.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/jsonschema_14-0.1.9-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb pigsty 0.1.9 787.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb pigsty 0.1.9 665.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb pigsty 0.1.9 786.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb pigsty 0.1.9 664.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb pigsty 0.1.9 872.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb pigsty 0.1.9 796.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb pigsty 0.1.9 860.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb pigsty 0.1.9 782.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb pigsty 0.1.9 1.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-jsonschema postgresql-14-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb pigsty 0.1.9 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/j/jsonschema/postgresql-14-jsonschema_0.1.9-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `jsonschema` 扩展的 RPM / DEB 包：

```bash
pig build pkg jsonschema         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `jsonschema` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install jsonschema;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y jsonschema -v 18  # PG 18
pig ext install -y jsonschema -v 17  # PG 17
pig ext install -y jsonschema -v 16  # PG 16
pig ext install -y jsonschema -v 15  # PG 15
pig ext install -y jsonschema -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y jsonschema_18       # PG 18
dnf install -y jsonschema_17       # PG 17
dnf install -y jsonschema_16       # PG 16
dnf install -y jsonschema_15       # PG 15
dnf install -y jsonschema_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-jsonschema   # PG 18
apt install -y postgresql-17-jsonschema   # PG 17
apt install -y postgresql-16-jsonschema   # PG 16
apt install -y postgresql-15-jsonschema   # PG 15
apt install -y postgresql-14-jsonschema   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION jsonschema;
```

来源：[jsonschema v0.1.9 README](https://github.com/theory/pg-jsonschema-boon/blob/v0.1.9/README.md)、[documentation](https://github.com/theory/pg-jsonschema-boon/blob/v0.1.9/doc/jsonschema.md)、[control file](https://github.com/theory/pg-jsonschema-boon/blob/v0.1.9/jsonschema.control)、[SQL definition](https://github.com/theory/pg-jsonschema-boon/blob/v0.1.9/sql/jsonschema--0.1.9.sql)。

## 用法

`jsonschema` 在 PostgreSQL 内根据 JSON Schema 校验 JSON 和 JSONB 值。它是 `theory/pg-jsonschema-boon` 扩展，不同于 Supabase `pg_jsonschema`，但提供了名为 `json_matches_schema()` 和 `jsonb_matches_schema()` 的兼容包装函数。

该扩展通过 Rust `boon` 校验器支持 JSON Schema draft 4、draft 6、draft 7、draft 2019-09 和 draft 2020-12。运行时除了 PostgreSQL 之外没有其他依赖。

### 校验 Schema 与文档

```sql
CREATE EXTENSION IF NOT EXISTS jsonschema;

SELECT jsonschema_is_valid(
  '{
     "type": "object",
     "required": ["name", "email"],
     "properties": {
       "name":  { "type": "string" },
       "age":   { "type": "number", "minimum": 0 },
       "email": { "type": "string", "format": "email" }
     }
   }'::json
);

SELECT jsonschema_validates(
  '{"name":"Amos Burton","email":"amos@rocinante.ship"}'::json,
  '{
     "type": "object",
     "required": ["name", "email"],
     "properties": {
       "name":  { "type": "string" },
       "email": { "type": "string", "format": "email" }
     }
   }'::json
);
```

`jsonschema_is_valid(schema)` 返回 schema 本身是否能够编译，并能按所选 draft 通过校验。`jsonschema_validates(data, schema)` 返回 JSON/JSONB 值是否满足该 schema。

### CHECK 约束

```sql
CREATE TABLE customer_profile (
  id       bigserial PRIMARY KEY,
  profile  jsonb NOT NULL,
  CHECK (
    jsonschema_validates(
      profile,
      '{
         "type": "object",
         "required": ["email"],
         "properties": {
           "email": { "type": "string", "format": "email" },
           "tags":  {
             "type": "array",
             "items": { "type": "string", "maxLength": 16 }
           }
         }
       }'::jsonb
    )
  )
);
```

当数据库需要在写入时拒绝格式错误的 JSON 文档时，可使用约束。

### 组合式 Schema

```sql
SELECT jsonschema_validates(
  jsonb_build_object(
    'first_name', 'Naomi',
    'last_name', 'Nagata',
    'shipping_address', jsonb_build_object(
      'street_address', '1 Rocinante Way',
      'city', 'Ceres Station',
      'state', 'The Belt'
    )
  ),
  'https://example.com/schemas/customer',
  '{
     "$id": "https://example.com/schemas/address",
     "type": "object",
     "required": ["street_address", "city", "state"],
     "properties": {
       "street_address": { "type": "string" },
       "city": { "type": "string" },
       "state": { "type": "string" }
     }
   }'::jsonb,
  '{
     "$id": "https://example.com/schemas/customer",
     "type": "object",
     "required": ["first_name", "last_name", "shipping_address"],
     "properties": {
       "first_name": { "type": "string" },
       "last_name": { "type": "string" },
       "shipping_address": { "$ref": "/schemas/address" }
     }
   }'::jsonb
);
```

带 `id` 的重载允许多个 schema 通过 `$id` 相互引用，适合组件化的 JSON Schema 定义。

### 兼容函数

```sql
SELECT json_matches_schema(
  '{"type":"string","maxLength":4}'::json,
  '"1234"'::json
);

SELECT jsonb_matches_schema(
  '{"type":"object","required":["id"]}'::json,
  '{"id":42}'::jsonb
);
```

这些包装函数沿用常见的 `pg_jsonschema` 参数顺序：schema 在前，instance 在后。

### Draft 版本选择与注意事项

```sql
SET jsonschema.default_draft = 'V2020';
SET jsonschema.default_draft = 'V7';
```

如果 schema 省略 `$schema`，`jsonschema.default_draft` 会控制默认 draft。支持值为 `V4`、`V6`、`V7`、`V2019` 和 `V2020`。

- 如果任一参数为 NULL，`jsonschema_validates(data, schema)` 返回 NULL。
- 无效或无法编译的 schema 可能在校验调用中抛出错误；文档校验失败会返回 `false`，并在 `INFO` 级别记录详情。
- `jsonschema_is_valid(id, VARIADIC schemas)` 和 `jsonschema_validates(data, id, VARIADIC schemas)` 需要匹配的 `$id` 值，才能可靠解析组合式 schema。

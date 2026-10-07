---
title: "pg_json_diff"
linkTitle: "pg_json_diff"
description: "JSONB 差异比较、JSON Patch 与 JSON Merge Patch 函数"
weight: 4160
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/KhaledSMQ/pg-jsondiff">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">KhaledSMQ/pg-jsondiff</div>
    <div class="ext-card__desc">https://github.com/KhaledSMQ/pg-jsondiff</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_json_diff-1.0-95cd668636ce.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_json_diff-1.0-95cd668636ce.tar.gz</div>
    <div class="ext-card__desc">pg_json_diff-1.0-95cd668636ce.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_json_diff`**](/ext/e/pg_json_diff) | `1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4160  | [**`pg_json_diff`**](/ext/e/pg_json_diff) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgjq`](/ext/e/pgjq) [`pgbson`](/ext/e/pgbson) [`jsquery`](/ext/e/jsquery) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Source requires PostgreSQL 12+ and C++17. Packaging removes the unsupported control-file author field; no extension dependency.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_json_diff` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_json_diff_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-json-diff` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 pg_json_diff_18 pg_json_diff_18-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 305.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_json_diff_18-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_json_diff_18 pg_json_diff_18-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 298.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_json_diff_18-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_json_diff_18 pg_json_diff_18-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 313.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_json_diff_18-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_json_diff_18 pg_json_diff_18-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 307.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_json_diff_18-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_json_diff_18 pg_json_diff_18-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 318.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_json_diff_18-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_json_diff_18 pg_json_diff_18-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 310.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_json_diff_18-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 276.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 269.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 285.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 277.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 291.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 288.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 295.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 291.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 296.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-json-diff postgresql-18-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 289.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-18-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_json_diff_17 pg_json_diff_17-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 305.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_json_diff_17-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_json_diff_17 pg_json_diff_17-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 297.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_json_diff_17-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_json_diff_17 pg_json_diff_17-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 312.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_json_diff_17-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_json_diff_17 pg_json_diff_17-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 306.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_json_diff_17-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_json_diff_17 pg_json_diff_17-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 318.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_json_diff_17-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_json_diff_17 pg_json_diff_17-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 309.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_json_diff_17-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 276.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 270.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 285.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 277.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 323.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 321.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 295.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 291.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 296.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-json-diff postgresql-17-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 288.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-17-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_json_diff_16 pg_json_diff_16-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 305.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_json_diff_16-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_json_diff_16 pg_json_diff_16-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 297.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_json_diff_16-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_json_diff_16 pg_json_diff_16-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 312.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_json_diff_16-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_json_diff_16 pg_json_diff_16-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 306.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_json_diff_16-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_json_diff_16 pg_json_diff_16-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 318.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_json_diff_16-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_json_diff_16 pg_json_diff_16-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 309.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_json_diff_16-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 277.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 270.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 285.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 277.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 323.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 321.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 295.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 291.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 296.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-json-diff postgresql-16-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 288.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-16-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_json_diff_15 pg_json_diff_15-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 307.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_json_diff_15-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_json_diff_15 pg_json_diff_15-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 298.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_json_diff_15-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_json_diff_15 pg_json_diff_15-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 313.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_json_diff_15-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_json_diff_15 pg_json_diff_15-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 306.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_json_diff_15-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_json_diff_15 pg_json_diff_15-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 318.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_json_diff_15-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_json_diff_15 pg_json_diff_15-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 310.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_json_diff_15-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 281.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 274.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 289.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 280.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 324.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 321.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 295.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 291.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 296.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-json-diff postgresql-15-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 289.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-15-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_json_diff_14 pg_json_diff_14-1.0-1PGSTY.el8.x86_64.rpm pigsty 1.0 307.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_json_diff_14-1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_json_diff_14 pg_json_diff_14-1.0-1PGSTY.el8.aarch64.rpm pigsty 1.0 298.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_json_diff_14-1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_json_diff_14 pg_json_diff_14-1.0-1PGSTY.el9.x86_64.rpm pigsty 1.0 313.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_json_diff_14-1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_json_diff_14 pg_json_diff_14-1.0-1PGSTY.el9.aarch64.rpm pigsty 1.0 307.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_json_diff_14-1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_json_diff_14 pg_json_diff_14-1.0-1PGSTY.el10.x86_64.rpm pigsty 1.0 319.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_json_diff_14-1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_json_diff_14 pg_json_diff_14-1.0-1PGSTY.el10.aarch64.rpm pigsty 1.0 310.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_json_diff_14-1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb pigsty 1.0 284.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb pigsty 1.0 278.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb pigsty 1.0 293.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb pigsty 1.0 284.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb pigsty 1.0 327.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb pigsty 1.0 324.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~noble_amd64.deb pigsty 1.0 299.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~noble_arm64.deb pigsty 1.0 295.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb pigsty 1.0 300.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-json-diff postgresql-14-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb pigsty 1.0 292.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-json-diff/postgresql-14-pg-json-diff_1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_json_diff` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_json_diff         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_json_diff` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_json_diff;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_json_diff -v 18  # PG 18
pig ext install -y pg_json_diff -v 17  # PG 17
pig ext install -y pg_json_diff -v 16  # PG 16
pig ext install -y pg_json_diff -v 15  # PG 15
pig ext install -y pg_json_diff -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_json_diff_18       # PG 18
dnf install -y pg_json_diff_17       # PG 17
dnf install -y pg_json_diff_16       # PG 16
dnf install -y pg_json_diff_15       # PG 15
dnf install -y pg_json_diff_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-json-diff   # PG 18
apt install -y postgresql-17-pg-json-diff   # PG 17
apt install -y postgresql-16-pg-json-diff   # PG 16
apt install -y postgresql-15-pg-json-diff   # PG 15
apt install -y postgresql-14-pg-json-diff   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_json_diff;
```

## 用法

来源：

- [官方 README](https://github.com/KhaledSMQ/pg-jsondiff/blob/95cd668636ce9c88d2f6ac57d92ac5301a81ed3c/README.md)
- [扩展 SQL](https://github.com/KhaledSMQ/pg-jsondiff/blob/95cd668636ce9c88d2f6ac57d92ac5301a81ed3c/pg_json_diff--1.0.sql)
- [C++ 实现](https://github.com/KhaledSMQ/pg-jsondiff/blob/95cd668636ce9c88d2f6ac57d92ac5301a81ed3c/src/json_diff_impl.cpp)

`pg_json_diff` 1.0 提供三个基于 nlohmann/json 的不可变 JSONB 转换函数：生成 RFC 6902 JSON Patch、应用这种补丁，或应用 RFC 7386 合并补丁。它适合明确的文档转换，不是自动冲突解决器，也不是稳定的审计差异格式。

### 核心流程

先生成补丁，保存或检查它，再验证应用补丁后是否得到预期目标：

```sql
CREATE EXTENSION pg_json_diff;

WITH docs AS (
  SELECT '{"name":"Ada","age":30}'::jsonb AS old_doc,
         '{"name":"Ada","age":31,"city":"London"}'::jsonb AS new_doc
), patch AS (
  SELECT old_doc, new_doc, generate_json_diff(old_doc, new_doc) AS operations
  FROM docs
)
SELECT operations, apply_patch(old_doc, operations) = new_doc AS verified
FROM patch;
```

应用外部提供的补丁前应先验证，并在事务及应用级授权保护下执行转换。

### 函数索引

- `generate_json_diff(source, target)` 返回 RFC 6902 操作数组。
- `apply_patch(document, patch)` 支持添加、删除、替换、移动、复制与测试操作。
- `merge_patch(document, patch)` 递归合并对象；空值成员删除键，数组则整体替换而不是合并。

三个函数都接受并返回 `jsonb`。

### 运维说明

每次调用都会把 PostgreSQL JSONB 序列化为文本，解析成 C++ JSON 值，执行操作，再次序列化并重新解析为 JSONB。因此，大型或深层嵌套文档会产生复制与解析开销。nlohmann/json 与 PostgreSQL JSONB 的数值模型不同，应测试超大整数和高精度小数的保真度。补丁错误会以通用内部错误返回；生成的操作顺序与路径也不应当作规范化的人类审计记录。

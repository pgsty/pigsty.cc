---
title: "is_jsonb_valid"
linkTitle: "is_jsonb_valid"
description: "原生 JSONB 校验，支持 JSON Schema 草案 4 与 7"
weight: 2765
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/furstenheim/is_jsonb_valid">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">furstenheim/is_jsonb_valid</div>
    <div class="ext-card__desc">https://github.com/furstenheim/is_jsonb_valid</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/is_jsonb_valid-0.1.4-1f536758ae06.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">is_jsonb_valid-0.1.4-1f536758ae06.tar.gz</div>
    <div class="ext-card__desc">is_jsonb_valid-0.1.4-1f536758ae06.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`is_jsonb_valid`**](/ext/e/is_jsonb_valid) | `0.1.4` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2765  | [**`is_jsonb_valid`**](/ext/e/is_jsonb_valid) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsonschema`](/ext/e/jsonschema) [`jsquery`](/ext/e/jsquery) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Remote $ref and format validation are unsupported; local $ref resolution is limited. Ships two libraries under one extension identity.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.4` | {{< pgvers "18,17,16,15,14" >}} | `is_jsonb_valid` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.4` | {{< pgvers "18,17,16,15,14" >}} | `is_jsonb_valid_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-is-jsonb-valid` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 | AVAIL PIGSTY 0.1.4 1 |
@ el8.x86_64 18 is_jsonb_valid_18 is_jsonb_valid_18-0.1.4-1PGSTY.el8.x86_64.rpm pigsty 0.1.4 63.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/is_jsonb_valid_18-0.1.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 is_jsonb_valid_18 is_jsonb_valid_18-0.1.4-1PGSTY.el8.aarch64.rpm pigsty 0.1.4 62.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/is_jsonb_valid_18-0.1.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 is_jsonb_valid_18 is_jsonb_valid_18-0.1.4-1PGSTY.el9.x86_64.rpm pigsty 0.1.4 64.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/is_jsonb_valid_18-0.1.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 is_jsonb_valid_18 is_jsonb_valid_18-0.1.4-1PGSTY.el9.aarch64.rpm pigsty 0.1.4 64.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/is_jsonb_valid_18-0.1.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 is_jsonb_valid_18 is_jsonb_valid_18-0.1.4-1PGSTY.el10.x86_64.rpm pigsty 0.1.4 64.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/is_jsonb_valid_18-0.1.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 is_jsonb_valid_18 is_jsonb_valid_18-0.1.4-1PGSTY.el10.aarch64.rpm pigsty 0.1.4 64.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/is_jsonb_valid_18-0.1.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb pigsty 0.1.4 51.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb pigsty 0.1.4 49.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb pigsty 0.1.4 51.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb pigsty 0.1.4 49.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb pigsty 0.1.4 53.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb pigsty 0.1.4 53.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb pigsty 0.1.4 53.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb pigsty 0.1.4 52.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb pigsty 0.1.4 52.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-is-jsonb-valid postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb pigsty 0.1.4 51.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-18-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 is_jsonb_valid_17 is_jsonb_valid_17-0.1.4-1PGSTY.el8.x86_64.rpm pigsty 0.1.4 62.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/is_jsonb_valid_17-0.1.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 is_jsonb_valid_17 is_jsonb_valid_17-0.1.4-1PGSTY.el8.aarch64.rpm pigsty 0.1.4 62.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/is_jsonb_valid_17-0.1.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 is_jsonb_valid_17 is_jsonb_valid_17-0.1.4-1PGSTY.el9.x86_64.rpm pigsty 0.1.4 64.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/is_jsonb_valid_17-0.1.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 is_jsonb_valid_17 is_jsonb_valid_17-0.1.4-1PGSTY.el9.aarch64.rpm pigsty 0.1.4 64.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/is_jsonb_valid_17-0.1.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 is_jsonb_valid_17 is_jsonb_valid_17-0.1.4-1PGSTY.el10.x86_64.rpm pigsty 0.1.4 64.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/is_jsonb_valid_17-0.1.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 is_jsonb_valid_17 is_jsonb_valid_17-0.1.4-1PGSTY.el10.aarch64.rpm pigsty 0.1.4 64.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/is_jsonb_valid_17-0.1.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb pigsty 0.1.4 51.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb pigsty 0.1.4 49.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb pigsty 0.1.4 51.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb pigsty 0.1.4 49.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb pigsty 0.1.4 59.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb pigsty 0.1.4 59.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb pigsty 0.1.4 53.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb pigsty 0.1.4 52.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb pigsty 0.1.4 52.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-is-jsonb-valid postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb pigsty 0.1.4 51.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-17-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 is_jsonb_valid_16 is_jsonb_valid_16-0.1.4-1PGSTY.el8.x86_64.rpm pigsty 0.1.4 62.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/is_jsonb_valid_16-0.1.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 is_jsonb_valid_16 is_jsonb_valid_16-0.1.4-1PGSTY.el8.aarch64.rpm pigsty 0.1.4 62.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/is_jsonb_valid_16-0.1.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 is_jsonb_valid_16 is_jsonb_valid_16-0.1.4-1PGSTY.el9.x86_64.rpm pigsty 0.1.4 64.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/is_jsonb_valid_16-0.1.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 is_jsonb_valid_16 is_jsonb_valid_16-0.1.4-1PGSTY.el9.aarch64.rpm pigsty 0.1.4 64.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/is_jsonb_valid_16-0.1.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 is_jsonb_valid_16 is_jsonb_valid_16-0.1.4-1PGSTY.el10.x86_64.rpm pigsty 0.1.4 64.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/is_jsonb_valid_16-0.1.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 is_jsonb_valid_16 is_jsonb_valid_16-0.1.4-1PGSTY.el10.aarch64.rpm pigsty 0.1.4 64.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/is_jsonb_valid_16-0.1.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb pigsty 0.1.4 51.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb pigsty 0.1.4 49.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb pigsty 0.1.4 51.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb pigsty 0.1.4 49.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb pigsty 0.1.4 59.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb pigsty 0.1.4 59.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb pigsty 0.1.4 53.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb pigsty 0.1.4 52.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb pigsty 0.1.4 52.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-is-jsonb-valid postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb pigsty 0.1.4 51.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-16-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 is_jsonb_valid_15 is_jsonb_valid_15-0.1.4-1PGSTY.el8.x86_64.rpm pigsty 0.1.4 62.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/is_jsonb_valid_15-0.1.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 is_jsonb_valid_15 is_jsonb_valid_15-0.1.4-1PGSTY.el8.aarch64.rpm pigsty 0.1.4 62.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/is_jsonb_valid_15-0.1.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 is_jsonb_valid_15 is_jsonb_valid_15-0.1.4-1PGSTY.el9.x86_64.rpm pigsty 0.1.4 64.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/is_jsonb_valid_15-0.1.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 is_jsonb_valid_15 is_jsonb_valid_15-0.1.4-1PGSTY.el9.aarch64.rpm pigsty 0.1.4 63.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/is_jsonb_valid_15-0.1.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 is_jsonb_valid_15 is_jsonb_valid_15-0.1.4-1PGSTY.el10.x86_64.rpm pigsty 0.1.4 64.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/is_jsonb_valid_15-0.1.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 is_jsonb_valid_15 is_jsonb_valid_15-0.1.4-1PGSTY.el10.aarch64.rpm pigsty 0.1.4 64.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/is_jsonb_valid_15-0.1.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb pigsty 0.1.4 51.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb pigsty 0.1.4 49.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb pigsty 0.1.4 50.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb pigsty 0.1.4 49.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb pigsty 0.1.4 60.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb pigsty 0.1.4 59.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb pigsty 0.1.4 53.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb pigsty 0.1.4 52.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb pigsty 0.1.4 52.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-is-jsonb-valid postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb pigsty 0.1.4 51.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-15-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 is_jsonb_valid_14 is_jsonb_valid_14-0.1.4-1PGSTY.el8.x86_64.rpm pigsty 0.1.4 63.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/is_jsonb_valid_14-0.1.4-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 is_jsonb_valid_14 is_jsonb_valid_14-0.1.4-1PGSTY.el8.aarch64.rpm pigsty 0.1.4 62.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/is_jsonb_valid_14-0.1.4-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 is_jsonb_valid_14 is_jsonb_valid_14-0.1.4-1PGSTY.el9.x86_64.rpm pigsty 0.1.4 64.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/is_jsonb_valid_14-0.1.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 is_jsonb_valid_14 is_jsonb_valid_14-0.1.4-1PGSTY.el9.aarch64.rpm pigsty 0.1.4 64.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/is_jsonb_valid_14-0.1.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 is_jsonb_valid_14 is_jsonb_valid_14-0.1.4-1PGSTY.el10.x86_64.rpm pigsty 0.1.4 64.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/is_jsonb_valid_14-0.1.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 is_jsonb_valid_14 is_jsonb_valid_14-0.1.4-1PGSTY.el10.aarch64.rpm pigsty 0.1.4 64.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/is_jsonb_valid_14-0.1.4-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb pigsty 0.1.4 52.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb pigsty 0.1.4 51.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb pigsty 0.1.4 52.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb pigsty 0.1.4 51.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb pigsty 0.1.4 61.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb pigsty 0.1.4 60.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb pigsty 0.1.4 55.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb pigsty 0.1.4 54.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb pigsty 0.1.4 54.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-is-jsonb-valid postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb pigsty 0.1.4 53.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/is-jsonb-valid/postgresql-14-is-jsonb-valid_0.1.4-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `is_jsonb_valid` 扩展的 RPM / DEB 包：

```bash
pig build pkg is_jsonb_valid         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `is_jsonb_valid` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install is_jsonb_valid;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y is_jsonb_valid -v 18  # PG 18
pig ext install -y is_jsonb_valid -v 17  # PG 17
pig ext install -y is_jsonb_valid -v 16  # PG 16
pig ext install -y is_jsonb_valid -v 15  # PG 15
pig ext install -y is_jsonb_valid -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y is_jsonb_valid_18       # PG 18
dnf install -y is_jsonb_valid_17       # PG 17
dnf install -y is_jsonb_valid_16       # PG 16
dnf install -y is_jsonb_valid_15       # PG 15
dnf install -y is_jsonb_valid_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-is-jsonb-valid   # PG 18
apt install -y postgresql-17-is-jsonb-valid   # PG 17
apt install -y postgresql-16-is-jsonb-valid   # PG 16
apt install -y postgresql-15-is-jsonb-valid   # PG 15
apt install -y postgresql-14-is-jsonb-valid   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION is_jsonb_valid;
```

## 用法

来源：

- [目录源码版本的官方 README](https://github.com/furstenheim/is_jsonb_valid/blob/3afa28d70500791a233dc17c919d6136b83cb2ef/README.md)
- [目录源码版本的扩展控制文件](https://github.com/furstenheim/is_jsonb_valid/blob/3afa28d70500791a233dc17c919d6136b83cb2ef/is_jsonb_valid.control)
- [0.1.4 版扩展 SQL](https://github.com/furstenheim/is_jsonb_valid/blob/3afa28d70500791a233dc17c919d6136b83cb2ef/is_jsonb_valid--0.1.4.sql)
- [PGXN 发行页面](https://pgxn.org/dist/is_jsonb_valid/)

is_jsonb_valid 使用原生代码，根据 JSON Schema Draft 4 或 Draft 7 对 JSONB 值进行布尔校验。它适合只需要通过或失败结果的检查与谓词；校验失败时不会返回路径或关键字诊断信息。

### 核心流程

选择与模式草案匹配的函数，第一个参数传模式，第二个参数传被校验的值。

```sql
CREATE EXTENSION is_jsonb_valid;

SELECT is_jsonb_valid(
    '{"type":"object","required":["id"],"properties":{"id":{"type":"integer"}}}'::jsonb,
    '{"id":42}'::jsonb
);

SELECT is_jsonb_valid_draft_v7(
    '{"if":{"exclusiveMaximum":0},"else":{"multipleOf":2}}'::jsonb,
    '4'::jsonb
);
```

0.1.4 版中的两个函数都具有严格与不可变属性。当模式保持稳定时，可以把它们用于约束和索引。

```sql
CREATE TABLE events (
    payload jsonb NOT NULL,
    CONSTRAINT events_payload_valid CHECK (
        is_jsonb_valid(
            '{"type":"object","required":["id"]}'::jsonb,
            payload
        )
    )
);
```

### 草案边界与限制

基础校验器遵循 Draft 4，名称中明确标出的另一个函数遵循 Draft 7。必须主动选择，因为不同草案中的关键字含义不同，扩展也不会根据模式声明自动推断草案。

在固定的源码版本中，不支持远端引用。本地引用仅限于从模式根可达的定义，也不会解析引用链上的标识符变化。此外不支持格式校验。因此，返回真只说明数据满足已实现的子集，并不代表完整 JSON Schema 规范中的全部行为。

扩展没有声明预加载或重启要求。应把模式字面量与应用预期纳入版本控制，并在约束依赖该扩展时加入有代表性的有效与无效用例。

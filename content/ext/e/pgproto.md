---
title: "pgproto"
linkTitle: "pgproto"
description: "原生 Protobuf 解析、修改、索引与 JSON 转换支持"
weight: 4130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Apaezmx/pgproto">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Apaezmx/pgproto</div>
    <div class="ext-card__desc">https://github.com/Apaezmx/pgproto</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgproto-0.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgproto-0.5.0.tar.gz</div>
    <div class="ext-card__desc">pgproto-0.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgproto`**](/ext/e/pgproto) | `0.5.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4130  | [**`pgproto`**](/ext/e/pgproto) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_protobuf`](/ext/e/pg_protobuf) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`pg_csv`](/ext/e/pg_csv) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> release 0.3.3; SQL v1.0


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pgproto` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pgproto_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgproto` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 | AVAIL PIGSTY 0.5.0 1 |
@ el8.x86_64 18 pgproto_18 pgproto_18-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_18-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgproto_18 pgproto_18-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 31.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_18-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgproto_18 pgproto_18-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 31.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_18-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgproto_18 pgproto_18-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_18-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgproto_18 pgproto_18-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 31.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_18-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgproto_18 pgproto_18-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 30.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_18-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 52.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 50.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 52.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 50.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 54.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 53.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 54.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb pigsty 0.5.0 54.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb pigsty 0.5.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-18-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgproto_17 pgproto_17-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_17-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgproto_17 pgproto_17-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 31.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_17-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgproto_17 pgproto_17-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 31.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_17-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgproto_17 pgproto_17-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_17-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgproto_17 pgproto_17-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 31.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_17-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgproto_17 pgproto_17-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 30.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_17-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 52.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 50.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 52.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 50.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 57.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 56.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 54.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb pigsty 0.5.0 54.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb pigsty 0.5.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-17-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgproto_16 pgproto_16-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_16-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgproto_16 pgproto_16-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 31.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_16-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgproto_16 pgproto_16-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 31.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_16-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgproto_16 pgproto_16-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_16-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgproto_16 pgproto_16-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 31.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_16-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgproto_16 pgproto_16-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 30.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_16-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 52.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 50.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 52.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 50.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 57.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 56.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 54.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb pigsty 0.5.0 54.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb pigsty 0.5.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-16-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgproto_15 pgproto_15-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 32.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_15-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgproto_15 pgproto_15-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_15-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgproto_15 pgproto_15-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_15-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgproto_15 pgproto_15-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 30.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_15-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgproto_15 pgproto_15-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_15-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgproto_15 pgproto_15-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 30.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_15-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 50.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 52.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 51.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 57.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 56.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 54.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb pigsty 0.5.0 54.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb pigsty 0.5.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-15-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgproto_14 pgproto_14-0.5.0-1PIGSTY.el8.x86_64.rpm pigsty 0.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_14-0.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgproto_14 pgproto_14-0.5.0-1PIGSTY.el8.aarch64.rpm pigsty 0.5.0 31.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_14-0.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgproto_14 pgproto_14-0.5.0-1PIGSTY.el9.x86_64.rpm pigsty 0.5.0 31.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_14-0.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgproto_14 pgproto_14-0.5.0-1PIGSTY.el9.aarch64.rpm pigsty 0.5.0 30.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_14-0.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgproto_14 pgproto_14-0.5.0-1PIGSTY.el10.x86_64.rpm pigsty 0.5.0 32.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_14-0.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgproto_14 pgproto_14-0.5.0-1PIGSTY.el10.aarch64.rpm pigsty 0.5.0 30.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_14-0.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb pigsty 0.5.0 52.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb pigsty 0.5.0 50.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb pigsty 0.5.0 52.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb pigsty 0.5.0 51.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb pigsty 0.5.0 57.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb pigsty 0.5.0 56.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~noble_amd64.deb pigsty 0.5.0 54.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~noble_arm64.deb pigsty 0.5.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb pigsty 0.5.0 54.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb pigsty 0.5.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgproto/postgresql-14-pgproto_0.5.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgproto` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgproto         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgproto` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgproto;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgproto -v 18  # PG 18
pig ext install -y pgproto -v 17  # PG 17
pig ext install -y pgproto -v 16  # PG 16
pig ext install -y pgproto -v 15  # PG 15
pig ext install -y pgproto -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgproto_18       # PG 18
dnf install -y pgproto_17       # PG 17
dnf install -y pgproto_16       # PG 16
dnf install -y pgproto_15       # PG 15
dnf install -y pgproto_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgproto   # PG 18
apt install -y postgresql-17-pgproto   # PG 17
apt install -y postgresql-16-pgproto   # PG 16
apt install -y postgresql-15-pgproto   # PG 15
apt install -y postgresql-14-pgproto   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgproto;
```

## 用法

来源：[README](https://github.com/Apaezmx/pgproto/blob/v0.5.0/README.md), [release 0.5.0](https://github.com/Apaezmx/pgproto/releases/tag/v0.5.0), [PGXN 0.5.0](https://pgxn.org/dist/pgproto/0.5.0/), [SQL definitions](https://github.com/Apaezmx/pgproto/blob/v0.5.0/sql/pgproto--1.0.sql), [Makefile](https://github.com/Apaezmx/pgproto/blob/v0.5.0/Makefile), [pgproto.control](https://github.com/Apaezmx/pgproto/blob/v0.5.0/pgproto.control)

`pgproto` 在 PostgreSQL 中以原生 `protobuf` 类型存储 Protocol Buffers `proto3` payload，提供 schema 感知提取、更新辅助函数、包含/索引支持，以及文本/整数路径操作符。上游包版本为 `0.5.0`；扩展 SQL/control 默认版本仍为 `1.0`。

当前上游源码是 C/PGXS 扩展：官方 `Makefile` 设置 `MODULE_big = pgproto`，从 `src/*.o` 构建 C object，并包含 `$(PGXS)`。README 描述该实现为纯 C，不依赖外部 Protobuf 库。

```sql
CREATE EXTENSION pgproto;
```

### Schema 注册与存储

`pgproto` 需要运行时 protobuf descriptor，才能用名称/路径提取解释二进制 payload。可以把序列化后的 `FileDescriptorSet` 注册到 `pb_schemas`，也可以在适合的工作流中调用 SQL 注册辅助函数：

```sql
INSERT INTO pb_schemas (name, data)
VALUES ('MySchema', '\x...');

SELECT pb_register_schema('MySchema', '\x...');
```

把序列化后的 protobuf bytes 存入 `protobuf` 列：

```sql
CREATE TABLE items (
  id serial PRIMARY KEY,
  data protobuf
);

INSERT INTO items (data) VALUES ('\x0a02082a');
```

0.5.0 SQL 还安装了从 `protobuf` 到 `bytea` 的便捷 cast，因此需要时可以使用 `length(data::bytea)` 这类面向 byte 的函数。

### 查询

对嵌套、repeated 和 map 字段使用路径操作符：

```sql
-- Integer accessor: returns int4
SELECT data #> '{Outer, inner, id}'::text[] FROM items;

-- Text accessor: returns text
SELECT data #>> '{Outer, tags, mykey}'::text[] FROM items;

-- Array index lookup
SELECT data #> '{Outer, scores, 0}'::text[] FROM items;
```

扩展定义的其他面向用户的提取辅助函数和操作符包括：

- `pb_get_int32(protobuf, int4)`：按 tag 提取 `int4`。
- `pb_get_int32_by_name(protobuf, text, text)` 与 `pb_get_int32_by_name_dot(protobuf, text)`：按名称提取整数。
- `->`：通过 `pb_get_int32_by_name_dot` 进行 dot-path 整数查找的简写。
- `pb_get_int32_by_path(protobuf, text[])`：支撑 `#>`。
- `pb_get_text_by_path(protobuf, text[])`：支撑 `#>>`。
- `pb_to_json(protobuf, text)`：在提供 message name 时转换为 text JSON。

### 更新与合并

`pb_set`、`pb_insert` 和 `pb_delete` 都是纯函数：它们返回新的 `protobuf` 值，因此需要用 `UPDATE ... SET` 持久化修改。上游 0.5.0 文档说明这些 mutation 会自动 compaction，以移除 stale tags。

```sql
UPDATE items
SET data = pb_set(data, ARRAY['Outer', 'a'], '42');

UPDATE items
SET data = pb_insert(data, ARRAY['Outer', 'scores', '0'], '100');

UPDATE items
SET data = pb_insert(data, ARRAY['Outer', 'tags', 'key1'], 'value1');

UPDATE items
SET data = pb_delete(data, ARRAY['Outer', 'a']);
```

使用 `||` 操作符合并两个 protobuf 值，它会调用 `pb_merge`：

```sql
UPDATE items
SET data = data || other.data
FROM other
WHERE items.id = other.id;
```

### 索引与包含

可以对提取字段建立普通表达式索引：

```sql
CREATE INDEX idx_items_pb_id
ON items ((data #> '{Outer, inner, id}'::text[]));

SELECT *
FROM items
WHERE (data #> '{Outer, inner, id}'::text[]) = 42;
```

SQL definitions 还暴露了 protobuf 包含操作符 `@>`，以及用于 GIN 索引的默认 `protobuf_gin_ops` operator class：

```sql
CREATE INDEX idx_items_data_gin
ON items USING gin (data protobuf_gin_ops);

SELECT * FROM items WHERE data @> '\x0a02082a'::protobuf;
```

### Schema 演进

README 将 schema 演进描述为常规用例：新增字段从旧消息读取为 `NULL`，deprecated 或 unknown 字段会在遍历时跳过，enum 按标准 varint 读取，未设置的 `oneof` 字段返回 `NULL`。

### 注意事项

- schema 感知的路径导航需要运行时 schema；没有已注册 descriptor 时，扩展无法解析 message field name。
- `#>` 返回 `int4`，`#>>` 返回 `text`；应按预期字段类型选择操作符/函数。
- mutation 辅助函数不会原地更新行；必须把返回值赋回列。
- README 中的 benchmark 数字是上游项目 benchmark，不是独立性能保证。

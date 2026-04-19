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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgproto-0.3.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgproto-0.3.3.tar.gz</div>
    <div class="ext-card__desc">pgproto-0.3.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgproto`**](/ext/e/pgproto) | `0.3.3` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.3` | {{< pgvers "18,17,16,15,14" >}} | `pgproto` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.3` | {{< pgvers "18,17,16,15,14" >}} | `pgproto_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgproto` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 | AVAIL PIGSTY 0.3.3 1 |
@ el8.x86_64 18 pgproto_18 pgproto_18-0.3.3-1PIGSTY.el8.x86_64.rpm pigsty 0.3.3 228.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_18-0.3.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgproto_18 pgproto_18-0.3.3-1PIGSTY.el8.aarch64.rpm pigsty 0.3.3 213.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_18-0.3.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgproto_18 pgproto_18-0.3.3-1PIGSTY.el9.x86_64.rpm pigsty 0.3.3 127.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_18-0.3.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgproto_18 pgproto_18-0.3.3-1PIGSTY.el9.aarch64.rpm pigsty 0.3.3 124.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_18-0.3.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgproto_18 pgproto_18-0.3.3-1PIGSTY.el10.x86_64.rpm pigsty 0.3.3 129.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_18-0.3.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgproto_18 pgproto_18-0.3.3-1PIGSTY.el10.aarch64.rpm pigsty 0.3.3 125.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_18-0.3.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb pigsty 0.3.3 697.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-18-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb pigsty 0.3.3 693.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-18-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb pigsty 0.3.3 703.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-18-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb pigsty 0.3.3 696.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-18-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb pigsty 0.3.3 755.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-18-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb pigsty 0.3.3 754.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-18-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgproto postgresql-18-pgproto_0.3.3-1PIGSTY~noble_amd64.deb pigsty 0.3.3 733.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-18-pgproto_0.3.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgproto postgresql-18-pgproto_0.3.3-1PIGSTY~noble_arm64.deb pigsty 0.3.3 742.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-18-pgproto_0.3.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgproto_17 pgproto_17-0.3.3-1PIGSTY.el8.x86_64.rpm pigsty 0.3.3 228.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_17-0.3.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgproto_17 pgproto_17-0.3.3-1PIGSTY.el8.aarch64.rpm pigsty 0.3.3 213.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_17-0.3.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgproto_17 pgproto_17-0.3.3-1PIGSTY.el9.x86_64.rpm pigsty 0.3.3 127.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_17-0.3.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgproto_17 pgproto_17-0.3.3-1PIGSTY.el9.aarch64.rpm pigsty 0.3.3 124.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_17-0.3.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgproto_17 pgproto_17-0.3.3-1PIGSTY.el10.x86_64.rpm pigsty 0.3.3 129.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_17-0.3.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgproto_17 pgproto_17-0.3.3-1PIGSTY.el10.aarch64.rpm pigsty 0.3.3 125.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_17-0.3.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb pigsty 0.3.3 697.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-17-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb pigsty 0.3.3 693.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-17-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb pigsty 0.3.3 702.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-17-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb pigsty 0.3.3 696.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-17-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb pigsty 0.3.3 814.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-17-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb pigsty 0.3.3 812.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-17-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgproto postgresql-17-pgproto_0.3.3-1PIGSTY~noble_amd64.deb pigsty 0.3.3 733.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-17-pgproto_0.3.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgproto postgresql-17-pgproto_0.3.3-1PIGSTY~noble_arm64.deb pigsty 0.3.3 742.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-17-pgproto_0.3.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgproto_16 pgproto_16-0.3.3-1PIGSTY.el8.x86_64.rpm pigsty 0.3.3 228.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_16-0.3.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgproto_16 pgproto_16-0.3.3-1PIGSTY.el8.aarch64.rpm pigsty 0.3.3 213.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_16-0.3.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgproto_16 pgproto_16-0.3.3-1PIGSTY.el9.x86_64.rpm pigsty 0.3.3 127.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_16-0.3.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgproto_16 pgproto_16-0.3.3-1PIGSTY.el9.aarch64.rpm pigsty 0.3.3 124.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_16-0.3.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgproto_16 pgproto_16-0.3.3-1PIGSTY.el10.x86_64.rpm pigsty 0.3.3 129.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_16-0.3.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgproto_16 pgproto_16-0.3.3-1PIGSTY.el10.aarch64.rpm pigsty 0.3.3 125.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_16-0.3.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb pigsty 0.3.3 697.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-16-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb pigsty 0.3.3 693.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-16-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb pigsty 0.3.3 703.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-16-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb pigsty 0.3.3 696.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-16-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb pigsty 0.3.3 814.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-16-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb pigsty 0.3.3 812.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-16-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgproto postgresql-16-pgproto_0.3.3-1PIGSTY~noble_amd64.deb pigsty 0.3.3 733.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-16-pgproto_0.3.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgproto postgresql-16-pgproto_0.3.3-1PIGSTY~noble_arm64.deb pigsty 0.3.3 742.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-16-pgproto_0.3.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgproto_15 pgproto_15-0.3.3-1PIGSTY.el8.x86_64.rpm pigsty 0.3.3 239.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_15-0.3.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgproto_15 pgproto_15-0.3.3-1PIGSTY.el8.aarch64.rpm pigsty 0.3.3 223.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_15-0.3.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgproto_15 pgproto_15-0.3.3-1PIGSTY.el9.x86_64.rpm pigsty 0.3.3 219.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_15-0.3.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgproto_15 pgproto_15-0.3.3-1PIGSTY.el9.aarch64.rpm pigsty 0.3.3 212.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_15-0.3.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgproto_15 pgproto_15-0.3.3-1PIGSTY.el10.x86_64.rpm pigsty 0.3.3 223.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_15-0.3.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgproto_15 pgproto_15-0.3.3-1PIGSTY.el10.aarch64.rpm pigsty 0.3.3 213.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_15-0.3.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb pigsty 0.3.3 707.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-15-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb pigsty 0.3.3 702.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-15-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb pigsty 0.3.3 712.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-15-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb pigsty 0.3.3 705.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-15-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb pigsty 0.3.3 822.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-15-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb pigsty 0.3.3 819.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-15-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgproto postgresql-15-pgproto_0.3.3-1PIGSTY~noble_amd64.deb pigsty 0.3.3 741.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-15-pgproto_0.3.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgproto postgresql-15-pgproto_0.3.3-1PIGSTY~noble_arm64.deb pigsty 0.3.3 749.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-15-pgproto_0.3.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgproto_14 pgproto_14-0.3.3-1PIGSTY.el8.x86_64.rpm pigsty 0.3.3 239.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgproto_14-0.3.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgproto_14 pgproto_14-0.3.3-1PIGSTY.el8.aarch64.rpm pigsty 0.3.3 223.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgproto_14-0.3.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgproto_14 pgproto_14-0.3.3-1PIGSTY.el9.x86_64.rpm pigsty 0.3.3 219.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgproto_14-0.3.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgproto_14 pgproto_14-0.3.3-1PIGSTY.el9.aarch64.rpm pigsty 0.3.3 212.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgproto_14-0.3.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgproto_14 pgproto_14-0.3.3-1PIGSTY.el10.x86_64.rpm pigsty 0.3.3 223.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgproto_14-0.3.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgproto_14 pgproto_14-0.3.3-1PIGSTY.el10.aarch64.rpm pigsty 0.3.3 215.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgproto_14-0.3.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb pigsty 0.3.3 706.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-14-pgproto_0.3.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb pigsty 0.3.3 701.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgproto/postgresql-14-pgproto_0.3.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb pigsty 0.3.3 712.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-14-pgproto_0.3.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb pigsty 0.3.3 705.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgproto/postgresql-14-pgproto_0.3.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb pigsty 0.3.3 822.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-14-pgproto_0.3.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb pigsty 0.3.3 819.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgproto/postgresql-14-pgproto_0.3.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgproto postgresql-14-pgproto_0.3.3-1PIGSTY~noble_amd64.deb pigsty 0.3.3 741.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-14-pgproto_0.3.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgproto postgresql-14-pgproto_0.3.3-1PIGSTY~noble_arm64.deb pigsty 0.3.3 749.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgproto/postgresql-14-pgproto_0.3.3-1PIGSTY~noble_arm64.deb
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

来源：[README](https://github.com/Apaezmx/pgproto/blob/main/README.md), [release 0.3.3](https://github.com/Apaezmx/pgproto/releases/tag/v0.3.3), [pgproto.control](https://github.com/Apaezmx/pgproto/blob/main/pgproto.control)

`pgproto` 增加了 `protobuf` 类型，用于存储二进制 Protocol Buffers，并提供感知 schema 的提取与更新辅助函数。上游最新 release 是 `0.3.3`，而扩展 control 文件声明的 SQL 默认版本为 `1.0`。

```sql
CREATE EXTENSION pgproto;
```

### 基本工作流

先注册 `FileDescriptorSet`，让扩展能够解释消息布局：

```sql
INSERT INTO pb_schemas (name, data) VALUES ('MySchema', '\x...');
```

再把 protobuf payload 存入 `protobuf` 列：

```sql
CREATE TABLE items (
  id serial PRIMARY KEY,
  data protobuf
);
```

### 查询

对嵌套字段使用 PostgreSQL 风格路径操作符：

```sql
SELECT data #> '{Outer, inner, id}'::text[] FROM items;
SELECT data #> '{Outer, tags, mykey}'::text[] FROM items;
```

README 将 `->` 与 `#>` 作为导航嵌套字段、repeated 字段与 map 字段的主要操作符。

### 更新与合并

写辅助函数都是纯函数，会返回新的 protobuf 值：

- `pb_set(...)`
- `pb_insert(...)`
- `pb_delete(...)`
- `||` 用于合并两个同类型消息

```sql
UPDATE items SET data = pb_set(data, ARRAY['Outer', 'a'], '42');
UPDATE items SET data = pb_insert(data, ARRAY['Outer', 'scores', '0'], '100');
UPDATE items SET data = pb_delete(data, ARRAY['Outer', 'a']);
UPDATE items SET data = data || other_data;
```

### 索引与 Schema 演进

可以对提取字段建立表达式索引：

```sql
CREATE INDEX idx_pb_id ON items ((data #> '{Outer, inner, id}'::text[]));
```

README 也把 schema 演进作为一等场景：新增字段向后兼容，已废弃字段在旧 payload 中仍可读取，而用 `ON CONFLICT` 重新注册 schema 是预期更新路径。

### 注意事项

- `pgproto` 依赖已注册的运行时 schema；没有 descriptor set 时，路径提取无法解释 payload。
- 更新辅助函数不会原地修改值，因此必须在 `UPDATE ... SET data = ...` 里使用。

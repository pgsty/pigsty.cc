---
title: "pgqr"
linkTitle: "pgqr"
description: "从数据库中直接生成QR二维码"
weight: 4250
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/AbdulYadi/pgqr">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">AbdulYadi/pgqr</div>
    <div class="ext-card__desc">https://github.com/AbdulYadi/pgqr</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgqr-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgqr-1.0.tar.gz</div>
    <div class="ext-card__desc">pgqr-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgqr`**](/ext/e/pgqr) | `1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4250  | [**`pgqr`**](/ext/e/pgqr) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_protobuf`](/ext/e/pg_protobuf) [`base36`](/ext/e/base36) [`base62`](/ext/e/base62) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgqr` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgqr_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgqr` | - |
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
@ el8.x86_64 18 pgqr_18 pgqr_18-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgqr_18-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgqr_18 pgqr_18-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgqr_18-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgqr_18 pgqr_18-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 24.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgqr_18-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgqr_18 pgqr_18-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 23.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgqr_18-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgqr_18 pgqr_18-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 24.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgqr_18-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgqr_18 pgqr_18-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 23.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgqr_18-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgqr postgresql-18-pgqr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 47.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-18-pgqr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgqr postgresql-18-pgqr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 46.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-18-pgqr_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgqr postgresql-18-pgqr_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 48.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-18-pgqr_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgqr postgresql-18-pgqr_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 46.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-18-pgqr_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgqr postgresql-18-pgqr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 50.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-18-pgqr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgqr postgresql-18-pgqr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 48.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-18-pgqr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgqr postgresql-18-pgqr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 50.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-18-pgqr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgqr postgresql-18-pgqr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 49.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-18-pgqr_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgqr_17 pgqr_17-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgqr_17-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgqr_17 pgqr_17-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgqr_17-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgqr_17 pgqr_17-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 24.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgqr_17-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgqr_17 pgqr_17-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 23.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgqr_17-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgqr_17 pgqr_17-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 24.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgqr_17-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgqr_17 pgqr_17-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 23.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgqr_17-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgqr postgresql-17-pgqr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 47.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-17-pgqr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgqr postgresql-17-pgqr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 46.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-17-pgqr_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgqr postgresql-17-pgqr_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 48.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-17-pgqr_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgqr postgresql-17-pgqr_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 46.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-17-pgqr_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgqr postgresql-17-pgqr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 50.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-17-pgqr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgqr postgresql-17-pgqr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 49.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-17-pgqr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgqr postgresql-17-pgqr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 49.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-17-pgqr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgqr postgresql-17-pgqr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 49.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-17-pgqr_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgqr_16 pgqr_16-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgqr_16-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgqr_16 pgqr_16-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgqr_16-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgqr_16 pgqr_16-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 23.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgqr_16-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgqr_16 pgqr_16-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 23.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgqr_16-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgqr_16 pgqr_16-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 24.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgqr_16-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgqr_16 pgqr_16-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 23.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgqr_16-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgqr postgresql-16-pgqr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 47.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-16-pgqr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgqr postgresql-16-pgqr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 46.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-16-pgqr_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgqr postgresql-16-pgqr_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 48.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-16-pgqr_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgqr postgresql-16-pgqr_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 46.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-16-pgqr_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgqr postgresql-16-pgqr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 50.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-16-pgqr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgqr postgresql-16-pgqr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 49.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-16-pgqr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgqr postgresql-16-pgqr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 50.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-16-pgqr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgqr postgresql-16-pgqr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 49.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-16-pgqr_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgqr_15 pgqr_15-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 24.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgqr_15-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgqr_15 pgqr_15-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 24.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgqr_15-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgqr_15 pgqr_15-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgqr_15-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgqr_15 pgqr_15-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgqr_15-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgqr_15 pgqr_15-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 25.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgqr_15-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgqr_15 pgqr_15-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 25.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgqr_15-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgqr postgresql-15-pgqr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 47.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-15-pgqr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgqr postgresql-15-pgqr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 46.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-15-pgqr_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgqr postgresql-15-pgqr_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 48.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-15-pgqr_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgqr postgresql-15-pgqr_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 46.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-15-pgqr_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgqr postgresql-15-pgqr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 51.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-15-pgqr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgqr postgresql-15-pgqr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 50.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-15-pgqr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgqr postgresql-15-pgqr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 50.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-15-pgqr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgqr postgresql-15-pgqr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 49.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-15-pgqr_1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgqr_14 pgqr_14-1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0 24.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgqr_14-1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgqr_14 pgqr_14-1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0 24.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgqr_14-1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgqr_14 pgqr_14-1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgqr_14-1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgqr_14 pgqr_14-1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0 24.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgqr_14-1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgqr_14 pgqr_14-1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0 25.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgqr_14-1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgqr_14 pgqr_14-1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0 24.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgqr_14-1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgqr postgresql-14-pgqr_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 47.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-14-pgqr_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgqr postgresql-14-pgqr_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 46.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgqr/postgresql-14-pgqr_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgqr postgresql-14-pgqr_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 48.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-14-pgqr_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgqr postgresql-14-pgqr_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 46.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgqr/postgresql-14-pgqr_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgqr postgresql-14-pgqr_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 51.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-14-pgqr_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgqr postgresql-14-pgqr_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 50.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgqr/postgresql-14-pgqr_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgqr postgresql-14-pgqr_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 50.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-14-pgqr_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgqr postgresql-14-pgqr_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 49.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgqr/postgresql-14-pgqr_1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgqr` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgqr         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgqr` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgqr;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgqr -v 18  # PG 18
pig ext install -y pgqr -v 17  # PG 17
pig ext install -y pgqr -v 16  # PG 16
pig ext install -y pgqr -v 15  # PG 15
pig ext install -y pgqr -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgqr_18       # PG 18
dnf install -y pgqr_17       # PG 17
dnf install -y pgqr_16       # PG 16
dnf install -y pgqr_15       # PG 15
dnf install -y pgqr_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgqr   # PG 18
apt install -y postgresql-17-pgqr   # PG 17
apt install -y postgresql-16-pgqr   # PG 16
apt install -y postgresql-15-pgqr   # PG 15
apt install -y postgresql-14-pgqr   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgqr;
```



## 用法

> [pgqr: PostgreSQL 二维码生成](https://github.com/AbdulYadi/pgqr)

### 函数

```sql
pgqr(t text, correction_level integer, model_number integer, scale integer) RETURNS bytea
```

参数：
- `t` -- 要编码到二维码中的文本
- `correction_level` -- 纠错级别：0 到 3
- `model_number` -- 二维码模型编号：0 到 2
- `scale` -- 每个点的像素数（缩放因子）

### 示例

生成单色位图格式的二维码：

```sql
SELECT pgqr('QR Code with PostgreSQL', 0, 0, 4);
```

输出为单色位图图像（BMP 格式），以 `bytea` 类型返回，可直接显示或存储。

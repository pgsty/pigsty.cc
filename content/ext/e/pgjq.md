---
title: "pgjq"
linkTitle: "pgjq"
description: "在Postgres中使用jq查询JSON"
weight: 4150
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Florents-Tselai/pgJQ">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Florents-Tselai/pgJQ</div>
    <div class="ext-card__desc">https://github.com/Florents-Tselai/pgJQ</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgjq-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgjq-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pgjq-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgjq`**](/ext/e/pgjq) | `0.1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4150  | [**`pgjq`**](/ext/e/pgjq) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgjwt`](/ext/e/pgjwt) [`pg_protobuf`](/ext/e/pg_protobuf) [`jsquery`](/ext/e/jsquery) [`sparql`](/ext/e/sparql) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> build with jq-devel


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgjq` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgjq_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgjq` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 pgjq_18 pgjq_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjq_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgjq_18 pgjq_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjq_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgjq_18 pgjq_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjq_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgjq_18 pgjq_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjq_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgjq_18 pgjq_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjq_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgjq_18 pgjq_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjq_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgjq postgresql-18-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-18-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgjq postgresql-18-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-18-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgjq postgresql-18-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-18-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgjq postgresql-18-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-18-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgjq postgresql-18-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 19.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-18-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgjq postgresql-18-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-18-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgjq postgresql-18-pgjq_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-18-pgjq_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgjq postgresql-18-pgjq_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-18-pgjq_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgjq_17 pgjq_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjq_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgjq_17 pgjq_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjq_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgjq_17 pgjq_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjq_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgjq_17 pgjq_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjq_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgjq_17 pgjq_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjq_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgjq_17 pgjq_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjq_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgjq postgresql-17-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-17-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgjq postgresql-17-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-17-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgjq postgresql-17-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-17-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgjq postgresql-17-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-17-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgjq postgresql-17-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-17-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgjq postgresql-17-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-17-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgjq postgresql-17-pgjq_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-17-pgjq_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgjq postgresql-17-pgjq_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-17-pgjq_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgjq_16 pgjq_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjq_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgjq_16 pgjq_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjq_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgjq_16 pgjq_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjq_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgjq_16 pgjq_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjq_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgjq_16 pgjq_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjq_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgjq_16 pgjq_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjq_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgjq postgresql-16-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-16-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgjq postgresql-16-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-16-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgjq postgresql-16-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-16-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgjq postgresql-16-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-16-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgjq postgresql-16-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-16-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgjq postgresql-16-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-16-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgjq postgresql-16-pgjq_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-16-pgjq_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgjq postgresql-16-pgjq_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-16-pgjq_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgjq_15 pgjq_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjq_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgjq_15 pgjq_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjq_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgjq_15 pgjq_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjq_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgjq_15 pgjq_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjq_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgjq_15 pgjq_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjq_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgjq_15 pgjq_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjq_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgjq postgresql-15-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-15-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgjq postgresql-15-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-15-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgjq postgresql-15-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-15-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgjq postgresql-15-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-15-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgjq postgresql-15-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 20.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-15-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgjq postgresql-15-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-15-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgjq postgresql-15-pgjq_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-15-pgjq_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgjq postgresql-15-pgjq_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-15-pgjq_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgjq_14 pgjq_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgjq_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgjq_14 pgjq_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgjq_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgjq_14 pgjq_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgjq_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgjq_14 pgjq_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgjq_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgjq_14 pgjq_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgjq_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgjq_14 pgjq_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgjq_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgjq postgresql-14-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-14-pgjq_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgjq postgresql-14-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgjq/postgresql-14-pgjq_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgjq postgresql-14-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-14-pgjq_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgjq postgresql-14-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgjq/postgresql-14-pgjq_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgjq postgresql-14-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-14-pgjq_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgjq postgresql-14-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 19.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgjq/postgresql-14-pgjq_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgjq postgresql-14-pgjq_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 19.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-14-pgjq_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgjq postgresql-14-pgjq_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 18.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgjq/postgresql-14-pgjq_0.1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgjq` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgjq         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgjq` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgjq;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgjq -v 18  # PG 18
pig ext install -y pgjq -v 17  # PG 17
pig ext install -y pgjq -v 16  # PG 16
pig ext install -y pgjq -v 15  # PG 15
pig ext install -y pgjq -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgjq_18       # PG 18
dnf install -y pgjq_17       # PG 17
dnf install -y pgjq_16       # PG 16
dnf install -y pgjq_15       # PG 15
dnf install -y pgjq_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgjq   # PG 18
apt install -y postgresql-17-pgjq   # PG 17
apt install -y postgresql-16-pgjq   # PG 16
apt install -y postgresql-15-pgjq   # PG 15
apt install -y postgresql-14-pgjq   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgjq;
```



## 用法

> [pgjq: 在 PostgreSQL 中使用 jq JSON 处理语言](https://github.com/Florents-Tselai/pgJQ)

提供 `jqprog` 数据类型和 `jq()` 函数，用于对 `jsonb` 对象执行 jq 程序。

### 基本过滤

```sql
SELECT jq('[{"bar": "baz", "balance": 7.77}]'::jsonb, '.[0].bar');
-- "baz"
```

### 使用 `@@` 运算符

```sql
SELECT '[{"bar": "baz"}]' @@ '.[0].bar'::jqprog;
-- "baz"
```

### 复杂程序

```sql
SELECT jq('[true,false,[5,true,[true,[false]],false]]',
          '(..|select(type=="boolean")) |= if . then 1 else 0 end');
-- [1, 0, [5, 1, [1, [0]], 0]]

SELECT jq('[1,5,3,0,7]', '(.[] | select(. >= 2)) |= empty');
-- [1, 0]
```

### 传递参数

以 `jsonb` 对象传递动态参数，通过 `$var` 引用：

```sql
SELECT jq(
    '{"jobs": [{"id": 9, "ok": true}, {"id": 100, "ok": false}]}'::jsonb,
    '.jobs[] | select(.ok == $ok and .id == 100) | .',
    '{"ok": false}'
);
```

### 与 jsonpath 链式使用

```sql
SELECT jq('[{"cust":"baz","active":true,"trans":{"balance":100}}]',
          '(.[] | select(.active == true))') - '{trans}' @> '{"cust": "baz"}';
-- t
```

### 处理文件

```sql
SELECT jq(pg_read_file('/path/to/data.json'), '.[]');
```

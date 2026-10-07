---
title: "istore"
linkTitle: "istore"
description: "支持算术、聚合与 GIN 索引的整数键值类型"
weight: 3710
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adjust/istore">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adjust/istore</div>
    <div class="ext-card__desc">https://github.com/adjust/istore</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/istore-0.1.12.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">istore-0.1.12.tar.gz</div>
    <div class="ext-card__desc">istore-0.1.12.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`istore`**](/ext/e/istore) | `0.1.12` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3710  | [**`istore`**](/ext/e/istore) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`hstore`](/ext/e/hstore) [`collection`](/ext/e/collection) [`intarray`](/ext/e/intarray) [`aggs_for_arrays`](/ext/e/aggs_for_arrays) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGXN 0.1.12 source requires the PG16+ varatt/Datum compatibility patch. PostgreSQL 14-18 verified across all 16 PGSTY target platforms. Does not require hstore.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.12` | {{< pgvers "18,17,16,15,14" >}} | `istore` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.12` | {{< pgvers "18,17,16,15,14" >}} | `istore_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.12` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-istore` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 | AVAIL PIGSTY 0.1.12 1 |
@ el8.x86_64 18 istore_18 istore_18-0.1.12-1PGSTY.el8.x86_64.rpm pigsty 0.1.12 129.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/istore_18-0.1.12-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 istore_18 istore_18-0.1.12-1PGSTY.el8.aarch64.rpm pigsty 0.1.12 126.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/istore_18-0.1.12-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 istore_18 istore_18-0.1.12-1PGSTY.el9.x86_64.rpm pigsty 0.1.12 133.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/istore_18-0.1.12-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 istore_18 istore_18-0.1.12-1PGSTY.el9.aarch64.rpm pigsty 0.1.12 131.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/istore_18-0.1.12-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 istore_18 istore_18-0.1.12-1PGSTY.el10.x86_64.rpm pigsty 0.1.12 133.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/istore_18-0.1.12-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 istore_18 istore_18-0.1.12-1PGSTY.el10.aarch64.rpm pigsty 0.1.12 132.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/istore_18-0.1.12-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~bookworm_amd64.deb pigsty 0.1.12 109.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~bookworm_arm64.deb pigsty 0.1.12 106.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~trixie_amd64.deb pigsty 0.1.12 109.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~trixie_arm64.deb pigsty 0.1.12 106.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~jammy_amd64.deb pigsty 0.1.12 121.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~jammy_arm64.deb pigsty 0.1.12 119.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~noble_amd64.deb pigsty 0.1.12 118.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~noble_arm64.deb pigsty 0.1.12 117.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~resolute_amd64.deb pigsty 0.1.12 116.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-istore postgresql-18-istore_0.1.12-1PGSTY~resolute_arm64.deb pigsty 0.1.12 115.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-18-istore_0.1.12-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 istore_17 istore_17-0.1.12-1PGSTY.el8.x86_64.rpm pigsty 0.1.12 128.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/istore_17-0.1.12-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 istore_17 istore_17-0.1.12-1PGSTY.el8.aarch64.rpm pigsty 0.1.12 127.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/istore_17-0.1.12-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 istore_17 istore_17-0.1.12-1PGSTY.el9.x86_64.rpm pigsty 0.1.12 132.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/istore_17-0.1.12-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 istore_17 istore_17-0.1.12-1PGSTY.el9.aarch64.rpm pigsty 0.1.12 131.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/istore_17-0.1.12-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 istore_17 istore_17-0.1.12-1PGSTY.el10.x86_64.rpm pigsty 0.1.12 132.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/istore_17-0.1.12-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 istore_17 istore_17-0.1.12-1PGSTY.el10.aarch64.rpm pigsty 0.1.12 132.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/istore_17-0.1.12-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~bookworm_amd64.deb pigsty 0.1.12 108.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~bookworm_arm64.deb pigsty 0.1.12 105.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~trixie_amd64.deb pigsty 0.1.12 108.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~trixie_arm64.deb pigsty 0.1.12 105.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~jammy_amd64.deb pigsty 0.1.12 129.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~jammy_arm64.deb pigsty 0.1.12 127.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~noble_amd64.deb pigsty 0.1.12 117.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~noble_arm64.deb pigsty 0.1.12 116.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~resolute_amd64.deb pigsty 0.1.12 116.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-istore postgresql-17-istore_0.1.12-1PGSTY~resolute_arm64.deb pigsty 0.1.12 114.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-17-istore_0.1.12-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 istore_16 istore_16-0.1.12-1PGSTY.el8.x86_64.rpm pigsty 0.1.12 128.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/istore_16-0.1.12-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 istore_16 istore_16-0.1.12-1PGSTY.el8.aarch64.rpm pigsty 0.1.12 127.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/istore_16-0.1.12-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 istore_16 istore_16-0.1.12-1PGSTY.el9.x86_64.rpm pigsty 0.1.12 132.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/istore_16-0.1.12-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 istore_16 istore_16-0.1.12-1PGSTY.el9.aarch64.rpm pigsty 0.1.12 131.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/istore_16-0.1.12-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 istore_16 istore_16-0.1.12-1PGSTY.el10.x86_64.rpm pigsty 0.1.12 132.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/istore_16-0.1.12-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 istore_16 istore_16-0.1.12-1PGSTY.el10.aarch64.rpm pigsty 0.1.12 132.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/istore_16-0.1.12-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~bookworm_amd64.deb pigsty 0.1.12 108.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~bookworm_arm64.deb pigsty 0.1.12 105.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~trixie_amd64.deb pigsty 0.1.12 108.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~trixie_arm64.deb pigsty 0.1.12 105.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~jammy_amd64.deb pigsty 0.1.12 129.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~jammy_arm64.deb pigsty 0.1.12 127.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~noble_amd64.deb pigsty 0.1.12 117.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~noble_arm64.deb pigsty 0.1.12 116.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~resolute_amd64.deb pigsty 0.1.12 116.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-istore postgresql-16-istore_0.1.12-1PGSTY~resolute_arm64.deb pigsty 0.1.12 114.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-16-istore_0.1.12-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 istore_15 istore_15-0.1.12-1PGSTY.el8.x86_64.rpm pigsty 0.1.12 128.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/istore_15-0.1.12-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 istore_15 istore_15-0.1.12-1PGSTY.el8.aarch64.rpm pigsty 0.1.12 126.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/istore_15-0.1.12-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 istore_15 istore_15-0.1.12-1PGSTY.el9.x86_64.rpm pigsty 0.1.12 129.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/istore_15-0.1.12-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 istore_15 istore_15-0.1.12-1PGSTY.el9.aarch64.rpm pigsty 0.1.12 128.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/istore_15-0.1.12-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 istore_15 istore_15-0.1.12-1PGSTY.el10.x86_64.rpm pigsty 0.1.12 129.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/istore_15-0.1.12-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 istore_15 istore_15-0.1.12-1PGSTY.el10.aarch64.rpm pigsty 0.1.12 128.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/istore_15-0.1.12-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~bookworm_amd64.deb pigsty 0.1.12 107.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~bookworm_arm64.deb pigsty 0.1.12 105.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~trixie_amd64.deb pigsty 0.1.12 108.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~trixie_arm64.deb pigsty 0.1.12 105.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~jammy_amd64.deb pigsty 0.1.12 126.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~jammy_arm64.deb pigsty 0.1.12 123.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~noble_amd64.deb pigsty 0.1.12 113.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~noble_arm64.deb pigsty 0.1.12 112.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~resolute_amd64.deb pigsty 0.1.12 112.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-istore postgresql-15-istore_0.1.12-1PGSTY~resolute_arm64.deb pigsty 0.1.12 110.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-15-istore_0.1.12-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 istore_14 istore_14-0.1.12-1PGSTY.el8.x86_64.rpm pigsty 0.1.12 128.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/istore_14-0.1.12-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 istore_14 istore_14-0.1.12-1PGSTY.el8.aarch64.rpm pigsty 0.1.12 126.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/istore_14-0.1.12-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 istore_14 istore_14-0.1.12-1PGSTY.el9.x86_64.rpm pigsty 0.1.12 129.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/istore_14-0.1.12-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 istore_14 istore_14-0.1.12-1PGSTY.el9.aarch64.rpm pigsty 0.1.12 128.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/istore_14-0.1.12-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 istore_14 istore_14-0.1.12-1PGSTY.el10.x86_64.rpm pigsty 0.1.12 129.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/istore_14-0.1.12-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 istore_14 istore_14-0.1.12-1PGSTY.el10.aarch64.rpm pigsty 0.1.12 128.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/istore_14-0.1.12-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~bookworm_amd64.deb pigsty 0.1.12 111.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~bookworm_arm64.deb pigsty 0.1.12 108.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~trixie_amd64.deb pigsty 0.1.12 111.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~trixie_arm64.deb pigsty 0.1.12 109.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~jammy_amd64.deb pigsty 0.1.12 129.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~jammy_arm64.deb pigsty 0.1.12 127.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~noble_amd64.deb pigsty 0.1.12 117.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~noble_arm64.deb pigsty 0.1.12 115.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~resolute_amd64.deb pigsty 0.1.12 116.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-istore postgresql-14-istore_0.1.12-1PGSTY~resolute_arm64.deb pigsty 0.1.12 114.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/istore/postgresql-14-istore_0.1.12-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `istore` 扩展的 RPM / DEB 包：

```bash
pig build pkg istore         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `istore` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install istore;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y istore -v 18  # PG 18
pig ext install -y istore -v 17  # PG 17
pig ext install -y istore -v 16  # PG 16
pig ext install -y istore -v 15  # PG 15
pig ext install -y istore -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y istore_18       # PG 18
dnf install -y istore_17       # PG 17
dnf install -y istore_16       # PG 16
dnf install -y istore_15       # PG 15
dnf install -y istore_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-istore   # PG 18
apt install -y postgresql-17-istore   # PG 17
apt install -y postgresql-16-istore   # PG 16
apt install -y postgresql-15-istore   # PG 15
apt install -y postgresql-14-istore   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION istore;
```

## 用法

来源：

- [官方 README](https://github.com/adjust/istore/blob/46c1cfeceeea193b75fd3fa11bc6959d8ac4d26f/README.md)
- [官方扩展 SQL](https://github.com/adjust/istore/blob/46c1cfeceeea193b75fd3fa11bc6959d8ac4d26f/istore--0.1.12.sql)
- [官方扩展控制文件](https://github.com/adjust/istore/blob/46c1cfeceeea193b75fd3fa11bc6959d8ac4d26f/istore.control)

`istore` 为 PostgreSQL 提供紧凑的整数键映射。`istore` 类型存储整数值，`bigistore` 存储 bigint 值；两者适用于以整数标识符为键的稀疏计数器、分布与分析聚合。

### 核心流程

文本输入类似 hstore，数组构造函数可以聚合重复键：

```sql
CREATE EXTENSION istore;

SELECT istore(ARRAY[1, 2, 1, 3, 2, 2]);
SELECT '1=>4,2=>5'::istore -> 1;
SELECT '1=>4,2=>5'::istore + '1=>4,3=>6'::istore;

CREATE INDEX metrics_keys_idx
  ON metrics USING gin (values istore_key_ops);
```

键查询使用 `->`；`?`、`?&` 和 `?|` 检查键是否存在。`||` 连接映射，算术操作符则合并匹配键。`istore_key_ops` GIN 操作符类可加速键存在谓词。

### 重要对象与注意事项

构造与转换工具包括 `istore(...)`、`bigistore(...)`、`akeys`、`avals`、`each`、`slice`、`compact`、`fill_gaps`、`accumulate`、`clamp` 和删除辅助函数。`sum_up` 汇总值，SUM 聚合返回 `bigistore`，为总计提供更宽的值类型。扩展也提供逐键最小值和最大值聚合。

从 `istore` 到 `bigistore` 的转换是隐式的；窄化赋值可能溢出。算术与除法仍需应用检查溢出和零除数。大型值可能进入 TOAST，GIN 索引也会增加写入和维护成本，因此应针对实际分布与更新负载进行基准测试，不能把上游示例当作性能保证。

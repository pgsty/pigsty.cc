---
title: "storage_engine"
linkTitle: "storage_engine"
description: "带向量化执行的 colcompress 与 rowcompress 表访问方法"
weight: 2450
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/saulojb/storage_engine">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">saulojb/storage_engine</div>
    <div class="ext-card__desc">https://github.com/saulojb/storage_engine</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/storage_engine-2.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">storage_engine-2.4.0.tar.gz</div>
    <div class="ext-card__desc">storage_engine-2.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`storage_engine`**](/ext/e/storage_engine) | `2.4.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2450  | [**`storage_engine`**](/ext/e/storage_engine) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `engine` |
{.ext-table}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.0` | {{< pgvers "18,17,16,15" >}} | `storage_engine` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.0` | {{< pgvers "18,17,16,15" >}} | `storage_engine_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-storage-engine` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| d12.aarch64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| d13.x86_64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| d13.aarch64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| u22.x86_64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| u22.aarch64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| u24.x86_64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| u24.aarch64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| u26.x86_64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
| u26.aarch64 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 2.4.0 1 | AVAIL PIGSTY 1.3.4 1 |
@ el8.x86_64 18 storage_engine_18 storage_engine_18-2.4.0-1PIGSTY.el8.x86_64.rpm pigsty 2.4.0 302.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_18-2.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 storage_engine_18 storage_engine_18-2.4.0-1PIGSTY.el8.aarch64.rpm pigsty 2.4.0 289.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_18-2.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 storage_engine_18 storage_engine_18-2.4.0-1PIGSTY.el9.x86_64.rpm pigsty 2.4.0 269.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_18-2.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 storage_engine_18 storage_engine_18-2.4.0-1PIGSTY.el9.aarch64.rpm pigsty 2.4.0 262.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_18-2.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 storage_engine_18 storage_engine_18-2.4.0-1PIGSTY.el10.x86_64.rpm pigsty 2.4.0 273.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_18-2.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 storage_engine_18 storage_engine_18-2.4.0-1PIGSTY.el10.aarch64.rpm pigsty 2.4.0 264.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_18-2.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~bookworm_amd64.deb pigsty 2.4.0 242.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~bookworm_arm64.deb pigsty 2.4.0 223.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~trixie_amd64.deb pigsty 2.4.0 243.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~trixie_arm64.deb pigsty 2.4.0 226.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~jammy_amd64.deb pigsty 2.4.0 245.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~jammy_arm64.deb pigsty 2.4.0 241.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~noble_amd64.deb pigsty 2.4.0 242.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~noble_arm64.deb pigsty 2.4.0 235.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~resolute_amd64.deb pigsty 2.4.0 242.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_2.4.0-1PIGSTY~resolute_arm64.deb pigsty 2.4.0 235.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-18-storage-engine_2.4.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 storage_engine_17 storage_engine_17-2.4.0-1PIGSTY.el8.x86_64.rpm pigsty 2.4.0 302.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_17-2.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 storage_engine_17 storage_engine_17-2.4.0-1PIGSTY.el8.aarch64.rpm pigsty 2.4.0 289.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_17-2.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 storage_engine_17 storage_engine_17-2.4.0-1PIGSTY.el9.x86_64.rpm pigsty 2.4.0 268.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_17-2.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 storage_engine_17 storage_engine_17-2.4.0-1PIGSTY.el9.aarch64.rpm pigsty 2.4.0 261.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_17-2.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 storage_engine_17 storage_engine_17-2.4.0-1PIGSTY.el10.x86_64.rpm pigsty 2.4.0 272.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_17-2.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 storage_engine_17 storage_engine_17-2.4.0-1PIGSTY.el10.aarch64.rpm pigsty 2.4.0 264.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_17-2.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~bookworm_amd64.deb pigsty 2.4.0 241.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~bookworm_arm64.deb pigsty 2.4.0 223.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~trixie_amd64.deb pigsty 2.4.0 242.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~trixie_arm64.deb pigsty 2.4.0 225.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~jammy_amd64.deb pigsty 2.4.0 245.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~jammy_arm64.deb pigsty 2.4.0 238.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~noble_amd64.deb pigsty 2.4.0 241.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~noble_arm64.deb pigsty 2.4.0 234.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~resolute_amd64.deb pigsty 2.4.0 241.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_2.4.0-1PIGSTY~resolute_arm64.deb pigsty 2.4.0 235.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-17-storage-engine_2.4.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 storage_engine_16 storage_engine_16-2.4.0-1PIGSTY.el8.x86_64.rpm pigsty 2.4.0 302.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_16-2.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 storage_engine_16 storage_engine_16-2.4.0-1PIGSTY.el8.aarch64.rpm pigsty 2.4.0 289.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_16-2.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 storage_engine_16 storage_engine_16-2.4.0-1PIGSTY.el9.x86_64.rpm pigsty 2.4.0 269.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_16-2.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 storage_engine_16 storage_engine_16-2.4.0-1PIGSTY.el9.aarch64.rpm pigsty 2.4.0 262.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_16-2.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 storage_engine_16 storage_engine_16-2.4.0-1PIGSTY.el10.x86_64.rpm pigsty 2.4.0 272.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_16-2.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 storage_engine_16 storage_engine_16-2.4.0-1PIGSTY.el10.aarch64.rpm pigsty 2.4.0 264.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_16-2.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~bookworm_amd64.deb pigsty 2.4.0 241.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~bookworm_arm64.deb pigsty 2.4.0 223.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~trixie_amd64.deb pigsty 2.4.0 242.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~trixie_arm64.deb pigsty 2.4.0 225.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~jammy_amd64.deb pigsty 2.4.0 245.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~jammy_arm64.deb pigsty 2.4.0 241.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~noble_amd64.deb pigsty 2.4.0 241.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~noble_arm64.deb pigsty 2.4.0 234.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~resolute_amd64.deb pigsty 2.4.0 241.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_2.4.0-1PIGSTY~resolute_arm64.deb pigsty 2.4.0 236.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-16-storage-engine_2.4.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 storage_engine_15 storage_engine_15-2.4.0-1PIGSTY.el8.x86_64.rpm pigsty 2.4.0 293.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_15-2.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 storage_engine_15 storage_engine_15-2.4.0-1PIGSTY.el8.aarch64.rpm pigsty 2.4.0 281.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_15-2.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 storage_engine_15 storage_engine_15-2.4.0-1PIGSTY.el9.x86_64.rpm pigsty 2.4.0 274.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_15-2.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 storage_engine_15 storage_engine_15-2.4.0-1PIGSTY.el9.aarch64.rpm pigsty 2.4.0 268.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_15-2.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 storage_engine_15 storage_engine_15-2.4.0-1PIGSTY.el10.x86_64.rpm pigsty 2.4.0 278.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_15-2.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 storage_engine_15 storage_engine_15-2.4.0-1PIGSTY.el10.aarch64.rpm pigsty 2.4.0 270.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_15-2.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~bookworm_amd64.deb pigsty 2.4.0 234.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~bookworm_arm64.deb pigsty 2.4.0 217.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~trixie_amd64.deb pigsty 2.4.0 235.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~trixie_arm64.deb pigsty 2.4.0 219.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~jammy_amd64.deb pigsty 2.4.0 249.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~jammy_arm64.deb pigsty 2.4.0 246.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~noble_amd64.deb pigsty 2.4.0 245.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~noble_arm64.deb pigsty 2.4.0 240.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~resolute_amd64.deb pigsty 2.4.0 246.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_2.4.0-1PIGSTY~resolute_arm64.deb pigsty 2.4.0 240.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-15-storage-engine_2.4.0-1PIGSTY~resolute_arm64.deb
@ d12.x86_64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb pigsty 1.3.4 477.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb pigsty 1.3.4 463.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb pigsty 1.3.4 479.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb pigsty 1.3.4 466.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb pigsty 1.3.4 586.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb pigsty 1.3.4 578.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb pigsty 1.3.4 501.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb pigsty 1.3.4 494.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb pigsty 1.3.4 500.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-storage-engine postgresql-14-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb pigsty 1.3.4 494.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-14-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `storage_engine` 扩展的 RPM / DEB 包：

```bash
pig build pkg storage_engine         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `storage_engine` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install storage_engine;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y storage_engine -v 18  # PG 18
pig ext install -y storage_engine -v 17  # PG 17
pig ext install -y storage_engine -v 16  # PG 16
pig ext install -y storage_engine -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y storage_engine_18       # PG 18
dnf install -y storage_engine_17       # PG 17
dnf install -y storage_engine_16       # PG 16
dnf install -y storage_engine_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-storage-engine   # PG 18
apt install -y postgresql-17-storage-engine   # PG 17
apt install -y postgresql-16-storage-engine   # PG 16
apt install -y postgresql-15-storage-engine   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'storage_engine';
```


**创建扩展**：

```sql
CREATE EXTENSION storage_engine;
```




## 用法

来源：[README v2.4.0](https://github.com/saulojb/storage_engine/blob/v2.4.0/README.md)、[v2.4.0 版本](https://github.com/saulojb/storage_engine/releases/tag/v2.4.0)、[PGXN 2.4.0](https://pgxn.org/dist/storage_engine/2.4.0/)、[当前 README](https://github.com/saulojb/storage_engine/blob/main/README.md)

`storage_engine` 2.4.0 在 `engine` 模式中提供两种 PostgreSQL 表访问方法：

- `colcompress`：面向列的压缩存储，支持向量化过滤、向量化聚合、并行扫描，以及条带/数据块最小值与最大值裁剪。
- `rowcompress`：面向行批次的压缩存储，支持并行扫描、索引扫描和批次元数据。

```sql
CREATE EXTENSION storage_engine;
```

### 快速开始

可以使用任一访问方法创建表。版本 2.2 及之后可在 `CREATE TABLE ... WITH (...)` 中直接传入逐表选项。

```sql
CREATE TABLE events (
  ts timestamptz NOT NULL,
  user_id bigint,
  event_type text,
  value float8
) USING colcompress
  WITH (compression = 'zstd', compression_level = 9, orderby = 'ts ASC');

CREATE TABLE logs (
  id bigserial,
  logged_at timestamptz NOT NULL,
  message text
) USING rowcompress
  WITH (batch_size = 10000, compression = 'zstd');

SELECT event_type, count(*), avg(value)
FROM events
WHERE ts > now() - interval '1 day'
GROUP BY 1;
```

版本 2.4 保留了 2.3 的向量化聚合能力，并为 TPC-H Q7/Q18/Q20/Q21 以及 Q9 风格的连接后聚合改进了规划器钩子。它还为重复的 `rowcompress` 索引探测和 `colcompress` 扫描增加了后端本地重读缓存。

### 主要调优项

上游文档记录的会话级 GUC 包括：

- `storage_engine.compression`
- `storage_engine.compression_level`
- `storage_engine.stripe_row_limit`
- `storage_engine.chunk_group_row_limit`
- `storage_engine.enable_parallel_execution`
- `storage_engine.min_parallel_processes`
- `storage_engine.enable_vectorization`
- `storage_engine.enable_vectorized_groupagg`
- `storage_engine.enable_automatic_plan`
- `storage_engine.enable_dml`
- `storage_engine.enable_custom_scan`
- `storage_engine.enable_qual_pushdown`
- `storage_engine.qual_pushdown_correlation_threshold`
- `storage_engine.max_custom_scan_paths`
- `storage_engine.enable_engine_index_scan`
- `storage_engine.enable_column_cache`
- `storage_engine.column_cache_size`
- `storage_engine.debug_vectorized_groupagg_fallback`
- `storage_engine.planner_debug_level`
- `storage_engine.maintenance_auto_enabled`
- `storage_engine.maintenance_auto_naptime`
- `storage_engine.maintenance_auto_database`

README 说明这些 GUC 会在共享库加载后可见；如果希望它们在每个会话中立即可用，或需要内置维护后台工作进程，请将 `storage_engine` 加入 `shared_preload_libraries`。

### 类型与操作符

`engine.uint8` 为 `colcompress` 工作负载存储无符号 64 位值，适用于需要完整 `0` 到 `2^64 - 1` 范围的场景。上游记录了比较操作符（`=`、`<>`、`<`、`<=`、`>`、`>=`）、B-tree 和哈希操作符类、与 `bigint`、`numeric`、`text` 的双向类型转换，以及 `engine.min`、`engine.max`、`engine.sum` 聚合函数。向量化规划器可以在 `colcompress` 表上派发 `engine.vmin`、`engine.vmax` 和 `engine.vsum`。

### 常用管理函数

针对 `colcompress` 表：

```sql
SELECT engine.alter_colcompress_table_set(
  'events'::regclass,
  orderby => 'ts ASC, user_id ASC',
  compression => 'zstd',
  compression_level => 9
);

SELECT engine.colcompress_merge('events');
CALL engine.colcompress_repack('events');
CALL engine.colcompress_repack('events', min_fill_ratio => 0.7);
CALL engine.colcompress_merge_incremental('events', max_stripes => 64);
CALL engine.smart_update(
  'events'::regclass,
  'value = value * 1.1',
  'event_type = ''purchase'''
);
```

批量加载后，如果 `orderby` 键需要全局排序以便裁剪，请使用 `engine.colcompress_merge()`。使用 `CALL engine.colcompress_repack()` 压缩低填充率条带；使用 `CALL engine.colcompress_merge_incremental()` 以较低锁级别分批处理脏条带。

针对 `rowcompress` 表：

```sql
SELECT engine.alter_rowcompress_table_set(
  'logs'::regclass,
  batch_size => 10000,
  compression => 'zstd',
  compression_level => 5
);

SELECT engine.rowcompress_repack('logs');
CALL engine.rowcompress_merge_incremental('logs', max_batches => 128);
SELECT * FROM engine.rowcompress_scan_stats();
```

运维视图包括 `engine.colcompress_options`、`engine.colcompress_stripes`、`engine.rowcompress_options`、`engine.rowcompress_batches` 和 `engine.storage_health`。`engine.storage_maintenance_recommendation(table)` 会返回单表健康指标与推荐操作；`CALL engine.storage_maintenance_auto(...)` 可手工或通过内置后台工作进程分发维护任务。在 v2.4 中，重复的 `rowcompress` 探测可以复用后端本地元数据和已解压批次，`engine.rowcompress_scan_stats()` 也能更可靠地报告这些缓存效果。

### 何时使用哪种访问方法

- 对于能够受益于投影、向量化和条带/数据块裁剪的分析扫描、聚合和范围谓词，使用 `colcompress`。
- 对于大量追加的日志或通常一起读取的宽行，如果压缩比列投影更重要，使用 `rowcompress`。
- 对于 `colcompress` 上的点查找，使用逐表的 `index_scan => true` 或会话级 `storage_engine.enable_engine_index_scan = on`；对于分析型范围扫描，优先使用 `index_scan => false`，并配合 `engine.colcompress_merge()` 和 `orderby` 键。

### 注意事项

- 本仓库打包版本为 `2.4.0`，覆盖 PostgreSQL 15 到 18。上游 v2.4 验证也覆盖 PostgreSQL 19 开发版，但 PG19 不在本仓库的软件包矩阵中。PostgreSQL 12、13 和 14 用户应停留在上游 1.3.4。
- 本文遵循 `extension.csv` 与 v2.4.0 版本/PGXN 文档。
- 现有安装使用 `ALTER EXTENSION storage_engine UPDATE TO '2.4.0';` 升级。
- `colcompress` 和 `rowcompress` 不支持外键或 `AFTER ROW` 触发器。
- 这些表访问方法不能使用 `pg_repack`。`engine.colcompress_repack()` 会获取 `AccessExclusiveLock`，因此大表应安排在维护窗口执行；对于脏条带或批次，增量合并过程是锁级别较低的选项。
- 不支持 `VACUUM FULL`、`CLUSTER` 和 `CREATE UNLOGGED TABLE ... USING colcompress`；上游建议改用扩展自带的合并/重打包函数。
- 在 `colcompress` 上，将 `orderby` 与 B-tree 索引组合可能禁用写入时排序路径；有序列上的 B-tree 索引可能削弱范围查询的条带裁剪效果。全局排序重要时，应在加载数据后使用 `engine.colcompress_merge()`；分析型表优先使用 `index_scan => false`。
- 如果同时预加载 `citus` 或 `pg_cron`，上游文档给出的加载顺序是 `shared_preload_libraries = 'pg_cron,citus,storage_engine'`；`citus` 必须出现在 `storage_engine` 之前。

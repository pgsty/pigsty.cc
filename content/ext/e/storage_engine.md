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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/storage_engine-1.3.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">storage_engine-1.3.4.tar.gz</div>
    <div class="ext-card__desc">storage_engine-1.3.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`storage_engine`**](/ext/e/storage_engine) | `1.3.4` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2450  | [**`storage_engine`**](/ext/e/storage_engine) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `engine` |
{.ext-table}


> release 1.2.3; SQL v1.2.1


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.4` | {{< pgvers "18,17,16,15,14" >}} | `storage_engine` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.4` | {{< pgvers "18,17,16,15,14" >}} | `storage_engine_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-storage-engine` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| el8.aarch64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| el9.x86_64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| d12.x86_64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| d12.aarch64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| d13.x86_64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| d13.aarch64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| u22.x86_64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| u22.aarch64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| u24.x86_64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| u24.aarch64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| u26.x86_64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
| u26.aarch64 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 | AVAIL PIGSTY 1.3.4 1 |
@ el8.x86_64 18 storage_engine_18 storage_engine_18-1.3.4-1PIGSTY.el8.x86_64.rpm pigsty 1.3.4 222.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_18-1.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 storage_engine_18 storage_engine_18-1.3.4-1PIGSTY.el8.aarch64.rpm pigsty 1.3.4 212.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_18-1.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 storage_engine_18 storage_engine_18-1.3.4-1PIGSTY.el9.x86_64.rpm pigsty 1.3.4 191.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_18-1.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 storage_engine_18 storage_engine_18-1.3.4-1PIGSTY.el9.aarch64.rpm pigsty 1.3.4 186.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_18-1.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 storage_engine_18 storage_engine_18-1.3.4-1PIGSTY.el10.x86_64.rpm pigsty 1.3.4 194.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_18-1.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 storage_engine_18 storage_engine_18-1.3.4-1PIGSTY.el10.aarch64.rpm pigsty 1.3.4 188.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_18-1.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb pigsty 1.3.4 471.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb pigsty 1.3.4 458.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb pigsty 1.3.4 472.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb pigsty 1.3.4 460.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb pigsty 1.3.4 500.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb pigsty 1.3.4 493.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb pigsty 1.3.4 481.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb pigsty 1.3.4 477.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb pigsty 1.3.4 481.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-storage-engine postgresql-18-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb pigsty 1.3.4 476.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-18-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 storage_engine_17 storage_engine_17-1.3.4-1PIGSTY.el8.x86_64.rpm pigsty 1.3.4 221.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_17-1.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 storage_engine_17 storage_engine_17-1.3.4-1PIGSTY.el8.aarch64.rpm pigsty 1.3.4 212.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_17-1.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 storage_engine_17 storage_engine_17-1.3.4-1PIGSTY.el9.x86_64.rpm pigsty 1.3.4 191.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_17-1.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 storage_engine_17 storage_engine_17-1.3.4-1PIGSTY.el9.aarch64.rpm pigsty 1.3.4 186.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_17-1.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 storage_engine_17 storage_engine_17-1.3.4-1PIGSTY.el10.x86_64.rpm pigsty 1.3.4 194.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_17-1.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 storage_engine_17 storage_engine_17-1.3.4-1PIGSTY.el10.aarch64.rpm pigsty 1.3.4 188.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_17-1.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb pigsty 1.3.4 470.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb pigsty 1.3.4 457.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb pigsty 1.3.4 471.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb pigsty 1.3.4 459.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb pigsty 1.3.4 565.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb pigsty 1.3.4 558.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb pigsty 1.3.4 481.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb pigsty 1.3.4 476.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb pigsty 1.3.4 478.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-storage-engine postgresql-17-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb pigsty 1.3.4 474.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-17-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 storage_engine_16 storage_engine_16-1.3.4-1PIGSTY.el8.x86_64.rpm pigsty 1.3.4 221.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_16-1.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 storage_engine_16 storage_engine_16-1.3.4-1PIGSTY.el8.aarch64.rpm pigsty 1.3.4 212.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_16-1.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 storage_engine_16 storage_engine_16-1.3.4-1PIGSTY.el9.x86_64.rpm pigsty 1.3.4 190.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_16-1.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 storage_engine_16 storage_engine_16-1.3.4-1PIGSTY.el9.aarch64.rpm pigsty 1.3.4 186.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_16-1.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 storage_engine_16 storage_engine_16-1.3.4-1PIGSTY.el10.x86_64.rpm pigsty 1.3.4 193.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_16-1.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 storage_engine_16 storage_engine_16-1.3.4-1PIGSTY.el10.aarch64.rpm pigsty 1.3.4 187.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_16-1.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb pigsty 1.3.4 471.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb pigsty 1.3.4 458.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb pigsty 1.3.4 470.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb pigsty 1.3.4 458.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb pigsty 1.3.4 562.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb pigsty 1.3.4 555.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb pigsty 1.3.4 480.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb pigsty 1.3.4 475.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb pigsty 1.3.4 479.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-storage-engine postgresql-16-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb pigsty 1.3.4 474.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-16-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 storage_engine_15 storage_engine_15-1.3.4-1PIGSTY.el8.x86_64.rpm pigsty 1.3.4 225.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_15-1.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 storage_engine_15 storage_engine_15-1.3.4-1PIGSTY.el8.aarch64.rpm pigsty 1.3.4 216.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_15-1.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 storage_engine_15 storage_engine_15-1.3.4-1PIGSTY.el9.x86_64.rpm pigsty 1.3.4 210.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_15-1.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 storage_engine_15 storage_engine_15-1.3.4-1PIGSTY.el9.aarch64.rpm pigsty 1.3.4 204.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_15-1.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 storage_engine_15 storage_engine_15-1.3.4-1PIGSTY.el10.x86_64.rpm pigsty 1.3.4 212.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_15-1.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 storage_engine_15 storage_engine_15-1.3.4-1PIGSTY.el10.aarch64.rpm pigsty 1.3.4 205.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_15-1.3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb pigsty 1.3.4 476.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb pigsty 1.3.4 462.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb pigsty 1.3.4 478.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb pigsty 1.3.4 464.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb pigsty 1.3.4 584.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb pigsty 1.3.4 576.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb pigsty 1.3.4 500.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb pigsty 1.3.4 493.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb pigsty 1.3.4 499.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-storage-engine postgresql-15-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb pigsty 1.3.4 492.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/storage-engine/postgresql-15-storage-engine_1.3.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 storage_engine_14 storage_engine_14-1.3.4-1PIGSTY.el8.x86_64.rpm pigsty 1.3.4 225.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/storage_engine_14-1.3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 storage_engine_14 storage_engine_14-1.3.4-1PIGSTY.el8.aarch64.rpm pigsty 1.3.4 216.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/storage_engine_14-1.3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 storage_engine_14 storage_engine_14-1.3.4-1PIGSTY.el9.x86_64.rpm pigsty 1.3.4 211.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/storage_engine_14-1.3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 storage_engine_14 storage_engine_14-1.3.4-1PIGSTY.el9.aarch64.rpm pigsty 1.3.4 204.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/storage_engine_14-1.3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 storage_engine_14 storage_engine_14-1.3.4-1PIGSTY.el10.x86_64.rpm pigsty 1.3.4 213.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/storage_engine_14-1.3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 storage_engine_14 storage_engine_14-1.3.4-1PIGSTY.el10.aarch64.rpm pigsty 1.3.4 206.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/storage_engine_14-1.3.4-1PIGSTY.el10.aarch64.rpm
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
pig ext install -y storage_engine -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y storage_engine_18       # PG 18
dnf install -y storage_engine_17       # PG 17
dnf install -y storage_engine_16       # PG 16
dnf install -y storage_engine_15       # PG 15
dnf install -y storage_engine_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-storage-engine   # PG 18
apt install -y postgresql-17-storage-engine   # PG 17
apt install -y postgresql-16-storage-engine   # PG 16
apt install -y postgresql-15-storage-engine   # PG 15
apt install -y postgresql-14-storage-engine   # PG 14
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

来源：[README](https://github.com/saulojb/storage_engine/blob/main/README.md)，[release 1.3.4](https://github.com/saulojb/storage_engine/releases/tag/v1.3.4)，[PGXN 1.3.4](https://pgxn.org/dist/storage_engine/1.3.4/)，[PGXN changelog](https://pgxn.org/dist/storage_engine/1.3.4/CHANGELOG.html)，[META.json](https://github.com/saulojb/storage_engine/blob/main/META.json)

`storage_engine` 在 `engine` schema 中提供两种 PostgreSQL table access method：

- `colcompress`：面向列式压缩存储，支持 vectorized execution、min/max pruning 与 parallel scan。
- `rowcompress`：面向行批压缩，支持 parallel scan。

```sql
CREATE EXTENSION storage_engine;
```

### 快速开始

使用任一 access method 建表：

```sql
CREATE TABLE events (
  ts timestamptz NOT NULL,
  user_id bigint,
  event_type text,
  value float8
) USING colcompress;

CREATE TABLE logs (
  id bigserial,
  logged_at timestamptz NOT NULL,
  message text
) USING rowcompress;
```

### 主要调优旋钮

上游文档列出的 session 级 GUC 包括：

- `storage_engine.enable_parallel_execution`
- `storage_engine.min_parallel_processes`
- `storage_engine.enable_vectorization`
- `storage_engine.enable_custom_scan`
- `storage_engine.enable_column_cache`
- `storage_engine.enable_columnar_index_scan`
- `storage_engine.enable_dml`
- `storage_engine.stripe_row_limit`
- `storage_engine.chunk_group_row_limit`
- `storage_engine.compression_level`

README 说明这些 GUC 会在库被加载后可见；如果希望每个 session 一开始就可用，可把 `storage_engine` 加入 `shared_preload_libraries`。

### 类型与操作符

`engine.uint8` 为需要完整 `0` 到 `2^64 - 1` 范围的 `colcompress` 工作负载存储无符号 64 位值。上游文档列出了 comparison operators（`=`、`<>`、`<`、`<=`、`>`、`>=`）、B-tree 与 hash opclasses、与 `bigint`、`numeric`、`text` 的双向 casts，以及 `engine.min`、`engine.max`、`engine.sum` aggregates。

### 常用管理函数

用于 `colcompress` 表：

```sql
SELECT engine.alter_colcompress_table_set(
  'events'::regclass,
  orderby => 'ts ASC, user_id ASC',
  compression => 'zstd',
  compression_level => 9
);

SELECT engine.colcompress_merge('events');
CALL engine.colcompress_repack('events');
CALL engine.colcompress_repack('events', 0.7);
```

在 1.3.4 中，`engine.colcompress_repack(table_name regclass, min_fill_ratio float8 DEFAULT 0.9)` 是用于 `colcompress` 表在线逐 stripe defragmentation 的 procedure。它会 repack live-row ratio 低于阈值的 stripes。需要按 `orderby` key 做旧式 full-table rewrite 和全局排序时，使用 `engine.colcompress_merge()`。

用于 `rowcompress` 表：

```sql
SELECT engine.alter_rowcompress_table_set(
  'logs'::regclass,
  batch_size => 10000,
  compression => 'zstd',
  compression_level => 5
);

SELECT engine.rowcompress_repack('logs');
```

### 何时选择哪种 AM

- `colcompress` 适合分析扫描、聚合与范围谓词，这类场景能受益于列裁剪、vectorization 以及 stripe/chunk pruning。
- `rowcompress` 适合追加型日志或通常会整行一起读取的宽表，此时压缩收益往往高于列投影。
- 对 `colcompress` 的点查，上游建议启用 `storage_engine.enable_columnar_index_scan` 或 per-table `index_scan`。

### 注意事项

- 使用 `ALTER EXTENSION storage_engine UPDATE TO '1.3.4';` 升级已有安装。
- 旧的 `FUNCTION engine.colcompress_repack(regclass)` alias 在 1.3.4 中已移除。已有调用方应改用 `CALL engine.colcompress_repack('table')` 做 stripe defragmentation，或用 `SELECT engine.colcompress_merge('table')` 执行旧的 full rewrite 行为。
- `colcompress` 与 `rowcompress` 都不支持 foreign key 或 `AFTER ROW` triggers。
- 不支持 `VACUUM FULL`，也不支持 `CREATE UNLOGGED TABLE ... USING colcompress`；上游建议改用扩展自带的 repack 函数。
- 在 `colcompress` 上，`orderby` 与 B-tree index 组合可能禁用 sort-on-write 路径，而 ordered columns 上的 B-tree indexes 可能让 range query 失去 stripe pruning 收益。全局顺序重要时，请在装载数据后运行 `engine.colcompress_merge()`；分析型表优先使用 `index_scan => false`。

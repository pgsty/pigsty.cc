---
title: "orioledb"
linkTitle: "orioledb"
description: "OrioleDB，下一代事务处理引擎"
weight: 2910
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/orioledb/orioledb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">orioledb/orioledb</div>
    <div class="ext-card__desc">https://github.com/orioledb/orioledb</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/orioledb-1.10.3.tar.gz postgres-patches16_50.tar.gz postgres-patches17_23.tar.gz postgres-patches18_4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">orioledb-1.10.3.tar.gz postgres-patches16_50.tar.gz postgres-patches17_23.tar.gz postgres-patches18_4.tar.gz</div>
    <div class="ext-card__desc">orioledb-1.10.3.tar.gz postgres-patches16_50.tar.gz postgres-patches17_23.tar.gz postgres-patches18_4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`orioledb`**](/ext/e/orioledb) | `1.10` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20 or postgresql" href="/ext/license#apache20orpostgresql">Apache-2.0 OR PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2910  | [**`orioledb`**](/ext/e/orioledb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_mooncake`](/ext/e/pg_mooncake) [`storage_engine`](/ext/e/storage_engine) [`columnar`](/ext/e/columnar) [`pg_sorted_heap`](/ext/e/pg_sorted_heap) [`citus_columnar`](/ext/e/citus_columnar) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires patched PG16-18 kernels; experimental.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10` | {{< pgvers "18,17,16" >}} | `orioledb` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10.3` | {{< pgvers "18,17,16" >}} | `orioledb-$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.10.3` | {{< pgvers "18,17,16" >}} | `orioledb-$v` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | AVAIL PIGSTY 1.10.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 orioledb-18 orioledb-18-1.10.3-1PGSTY.el8.x86_64.rpm pigsty 1.10.3 24.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/orioledb-18-1.10.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 orioledb-18 orioledb-18-1.10.3-1PGSTY.el8.aarch64.rpm pigsty 1.10.3 23.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/orioledb-18-1.10.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 orioledb-18 orioledb-18-1.10.3-1PGSTY.el9.x86_64.rpm pigsty 1.10.3 23.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/orioledb-18-1.10.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 orioledb-18 orioledb-18-1.10.3-1PGSTY.el9.aarch64.rpm pigsty 1.10.3 23.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/orioledb-18-1.10.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 orioledb-18 orioledb-18-1.10.3-1PGSTY.el10.x86_64.rpm pigsty 1.10.3 23.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/orioledb-18-1.10.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 orioledb-18 orioledb-18-1.10.3-1PGSTY.el10.aarch64.rpm pigsty 1.10.3 23.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/orioledb-18-1.10.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~bookworm_amd64.deb pigsty 1.10.3 23.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~bookworm_arm64.deb pigsty 1.10.3 22.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~trixie_amd64.deb pigsty 1.10.3 21.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~trixie_arm64.deb pigsty 1.10.3 20.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~jammy_amd64.deb pigsty 1.10.3 25.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~jammy_arm64.deb pigsty 1.10.3 25.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~noble_amd64.deb pigsty 1.10.3 23.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~noble_arm64.deb pigsty 1.10.3 23.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~resolute_amd64.deb pigsty 1.10.3 22.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 orioledb-18 orioledb-18_1.10.3-1PGSTY~resolute_arm64.deb pigsty 1.10.3 22.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/orioledb-18/orioledb-18_1.10.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 orioledb-17 orioledb-17-1.10.3-1PGSTY.el8.x86_64.rpm pigsty 1.10.3 23.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/orioledb-17-1.10.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 orioledb-17 orioledb-17-1.10.3-1PGSTY.el8.aarch64.rpm pigsty 1.10.3 22.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/orioledb-17-1.10.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 orioledb-17 orioledb-17-1.10.3-1PGSTY.el9.x86_64.rpm pigsty 1.10.3 22.6MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/orioledb-17-1.10.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 orioledb-17 orioledb-17-1.10.3-1PGSTY.el9.aarch64.rpm pigsty 1.10.3 22.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/orioledb-17-1.10.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 orioledb-17 orioledb-17-1.10.3-1PGSTY.el10.x86_64.rpm pigsty 1.10.3 22.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/orioledb-17-1.10.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 orioledb-17 orioledb-17-1.10.3-1PGSTY.el10.aarch64.rpm pigsty 1.10.3 22.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/orioledb-17-1.10.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~bookworm_amd64.deb pigsty 1.10.3 22.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~bookworm_arm64.deb pigsty 1.10.3 22.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~trixie_amd64.deb pigsty 1.10.3 20.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~trixie_arm64.deb pigsty 1.10.3 19.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~jammy_amd64.deb pigsty 1.10.3 24.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~jammy_arm64.deb pigsty 1.10.3 24.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~noble_amd64.deb pigsty 1.10.3 22.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~noble_arm64.deb pigsty 1.10.3 22.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~resolute_amd64.deb pigsty 1.10.3 22.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 orioledb-17 orioledb-17_1.10.3-1PGSTY~resolute_arm64.deb pigsty 1.10.3 21.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/orioledb-17/orioledb-17_1.10.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 orioledb-16 orioledb-16-1.10.3-1PGSTY.el8.x86_64.rpm pigsty 1.10.3 22.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/orioledb-16-1.10.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 orioledb-16 orioledb-16-1.10.3-1PGSTY.el8.aarch64.rpm pigsty 1.10.3 22.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/orioledb-16-1.10.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 orioledb-16 orioledb-16-1.10.3-1PGSTY.el9.x86_64.rpm pigsty 1.10.3 21.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/orioledb-16-1.10.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 orioledb-16 orioledb-16-1.10.3-1PGSTY.el9.aarch64.rpm pigsty 1.10.3 21.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/orioledb-16-1.10.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 orioledb-16 orioledb-16-1.10.3-1PGSTY.el10.x86_64.rpm pigsty 1.10.3 21.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/orioledb-16-1.10.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 orioledb-16 orioledb-16-1.10.3-1PGSTY.el10.aarch64.rpm pigsty 1.10.3 21.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/orioledb-16-1.10.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~bookworm_amd64.deb pigsty 1.10.3 21.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~bookworm_arm64.deb pigsty 1.10.3 21.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~trixie_amd64.deb pigsty 1.10.3 19.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~trixie_arm64.deb pigsty 1.10.3 19.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~jammy_amd64.deb pigsty 1.10.3 23.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~jammy_arm64.deb pigsty 1.10.3 23.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~noble_amd64.deb pigsty 1.10.3 21.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~noble_arm64.deb pigsty 1.10.3 21.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~resolute_amd64.deb pigsty 1.10.3 21.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 orioledb-16 orioledb-16_1.10.3-1PGSTY~resolute_arm64.deb pigsty 1.10.3 21.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/o/orioledb-16/orioledb-16_1.10.3-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `orioledb` 扩展的 RPM / DEB 包：

```bash
pig build pkg orioledb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `orioledb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install orioledb;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y orioledb -v 18  # PG 18
pig ext install -y orioledb -v 17  # PG 17
pig ext install -y orioledb -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y orioledb-18       # PG 18
dnf install -y orioledb-17       # PG 17
dnf install -y orioledb-16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y orioledb-18   # PG 18
apt install -y orioledb-17   # PG 17
apt install -y orioledb-16   # PG 16
```


**预加载配置**：

```bash
shared_preload_libraries = 'orioledb';
```


**创建扩展**：

```sql
CREATE EXTENSION orioledb;
```

## 用法

来源：

- [1.10.2 README](https://github.com/orioledb/orioledb/blob/v1.10.2/README.md)
- [1.10.2 release](https://github.com/orioledb/orioledb/releases/tag/v1.10.2)
- [Control file](https://github.com/orioledb/orioledb/blob/v1.10.2/orioledb.control)
- [Patched PostgreSQL](https://github.com/orioledb/postgres)
- [Patched server versions](https://github.com/orioledb/orioledb/blob/v1.10.2/.pgtags)

`orioledb` 是一种替代表存储引擎，采用基于撤销日志的 MVCC、写时复制检查点和行级 WAL。它要求专门打补丁的 PostgreSQL 服务器，目前仍处于公测阶段。

### 配置

在 `postgresql.conf` 中添加（需要重启）：

```ini
shared_preload_libraries = 'orioledb.so'
```

然后启用扩展：

```sql
CREATE EXTENSION orioledb;
```

### 创建表

使用 `USING orioledb` 子句创建采用 OrioleDB 存储引擎的表：

```sql
CREATE TABLE my_table (
    id serial PRIMARY KEY,
    name text,
    value numeric
) USING orioledb;
```

可在上游兼容性限制内对 OrioleDB 表使用普通 DML：

```sql
INSERT INTO my_table (name, value) VALUES ('test', 42);
SELECT * FROM my_table WHERE id = 1;
UPDATE my_table SET value = 100 WHERE id = 1;
DELETE FROM my_table WHERE id = 1;
```

### 排序规则要求

OrioleDB 表仅支持 **ICU**、**C** 和 **POSIX** 排序规则。为避免在每个文本字段上指定 COLLATE，请使用适当的默认值创建数据库：

```sql
CREATE DATABASE mydb LOCALE 'C' TEMPLATE template0;
-- OR
CREATE DATABASE mydb LOCALE_PROVIDER icu ICU_LOCALE 'en' TEMPLATE template0;
```

### 兼容性与 1.10.2 维护说明

本版 `.pgtags` 将 PostgreSQL 16、17、18 分别固定到 `patches16_50`、`patches17_23`、`patches18_4`。普通 PostgreSQL 安装不能满足要求。排序规则仅支持 ICU、C 和 POSIX。撤销日志与页面合并降低了原生表的清理需求，其他 PostgreSQL 表仍需要正常维护。

1.10.2 保持 SQL 版本 `1.10`，不改变存储或 WAL 格式。它修复了 `ORIOLEDB_VERSION` 报告的运行时版本、并发情况下的行版本处理、并发创建索引时捕获更新的问题，以及范围/数组/复合键导致的后台写入进程崩溃、诊断函数的 NULL 处理、表达式索引的内存泄漏和备库表空间移动。

所有节点应使用匹配的服务器补丁与库文件，在备份后遵循对应版本的升级流程。不要指定不存在的 SQL 版本 1.10.2。公测限制仍然适用，上游不建议将其普遍用于生产环境。

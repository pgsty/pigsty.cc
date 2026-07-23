---
title: "pgx_ulid"
linkTitle: "pgx_ulid"
description: "ULID数据类型与函数"
weight: 4510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pksunkara/pgx_ulid">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pksunkara/pgx_ulid</div>
    <div class="ext-card__desc">https://github.com/pksunkara/pgx_ulid</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgx_ulid-0.2.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgx_ulid-0.2.3.tar.gz</div>
    <div class="ext-card__desc">pgx_ulid-0.2.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgx_ulid`**](/ext/e/pgx_ulid) | `0.2.3` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4510  | [**`pgx_ulid`**](/ext/e/pgx_ulid) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`sequential_uuids`](/ext/e/sequential_uuids) [`uuid-ossp`](/ext/e/uuid-ossp) [`pg_hashids`](/ext/e/pg_hashids) [`permuteseq`](/ext/e/permuteseq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> shared_preload_libraries = pgx_ulid is only required for gen_monotonic_ulid(); other functions work without it.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pgx_ulid` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pgx_ulid_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgx-ulid` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u26.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u26.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
@ el8.x86_64 18 pgx_ulid_18 pgx_ulid_18-0.2.3-3PIGSTY.el8.x86_64.rpm pigsty 0.2.3 912.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgx_ulid_18-0.2.3-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgx_ulid_18 pgx_ulid_18-0.2.3-3PIGSTY.el8.aarch64.rpm pigsty 0.2.3 822.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgx_ulid_18-0.2.3-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgx_ulid_18 pgx_ulid_18-0.2.3-3PIGSTY.el9.x86_64.rpm pigsty 0.2.3 922.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgx_ulid_18-0.2.3-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgx_ulid_18 pgx_ulid_18-0.2.3-3PIGSTY.el9.aarch64.rpm pigsty 0.2.3 869.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgx_ulid_18-0.2.3-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgx_ulid_18 pgx_ulid_18-0.2.3-3PIGSTY.el10.x86_64.rpm pigsty 0.2.3 921.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgx_ulid_18-0.2.3-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgx_ulid_18 pgx_ulid_18-0.2.3-3PIGSTY.el10.aarch64.rpm pigsty 0.2.3 849.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgx_ulid_18-0.2.3-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb pigsty 0.2.3 731.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb pigsty 0.2.3 613.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb pigsty 0.2.3 731.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb pigsty 0.2.3 613.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb pigsty 0.2.3 813.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb pigsty 0.2.3 722.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb pigsty 0.2.3 804.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb pigsty 0.2.3 713.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb pigsty 0.2.3 798.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgx-ulid postgresql-18-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb pigsty 0.2.3 710.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-18-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgx_ulid_17 pgx_ulid_17-0.2.3-3PIGSTY.el8.x86_64.rpm pigsty 0.2.3 909.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgx_ulid_17-0.2.3-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgx_ulid_17 pgx_ulid_17-0.2.3-3PIGSTY.el8.aarch64.rpm pigsty 0.2.3 819.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgx_ulid_17-0.2.3-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgx_ulid_17 pgx_ulid_17-0.2.3-3PIGSTY.el9.x86_64.rpm pigsty 0.2.3 916.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgx_ulid_17-0.2.3-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgx_ulid_17 pgx_ulid_17-0.2.3-3PIGSTY.el9.aarch64.rpm pigsty 0.2.3 866.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgx_ulid_17-0.2.3-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgx_ulid_17 pgx_ulid_17-0.2.3-3PIGSTY.el10.x86_64.rpm pigsty 0.2.3 918.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgx_ulid_17-0.2.3-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgx_ulid_17 pgx_ulid_17-0.2.3-3PIGSTY.el10.aarch64.rpm pigsty 0.2.3 849.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgx_ulid_17-0.2.3-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb pigsty 0.2.3 728.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb pigsty 0.2.3 611.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb pigsty 0.2.3 728.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb pigsty 0.2.3 612.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb pigsty 0.2.3 811.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb pigsty 0.2.3 719.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb pigsty 0.2.3 802.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb pigsty 0.2.3 710.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb pigsty 0.2.3 797.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgx-ulid postgresql-17-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb pigsty 0.2.3 709.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-17-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgx_ulid_16 pgx_ulid_16-0.2.3-3PIGSTY.el8.x86_64.rpm pigsty 0.2.3 908.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgx_ulid_16-0.2.3-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgx_ulid_16 pgx_ulid_16-0.2.3-3PIGSTY.el8.aarch64.rpm pigsty 0.2.3 817.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgx_ulid_16-0.2.3-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgx_ulid_16 pgx_ulid_16-0.2.3-3PIGSTY.el9.x86_64.rpm pigsty 0.2.3 918.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgx_ulid_16-0.2.3-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgx_ulid_16 pgx_ulid_16-0.2.3-3PIGSTY.el9.aarch64.rpm pigsty 0.2.3 864.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgx_ulid_16-0.2.3-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgx_ulid_16 pgx_ulid_16-0.2.3-3PIGSTY.el10.x86_64.rpm pigsty 0.2.3 917.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgx_ulid_16-0.2.3-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgx_ulid_16 pgx_ulid_16-0.2.3-3PIGSTY.el10.aarch64.rpm pigsty 0.2.3 848.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgx_ulid_16-0.2.3-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb pigsty 0.2.3 728.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb pigsty 0.2.3 611.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb pigsty 0.2.3 729.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb pigsty 0.2.3 611.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb pigsty 0.2.3 811.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb pigsty 0.2.3 717.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb pigsty 0.2.3 802.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb pigsty 0.2.3 709.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb pigsty 0.2.3 797.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgx-ulid postgresql-16-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb pigsty 0.2.3 708.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-16-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgx_ulid_15 pgx_ulid_15-0.2.3-3PIGSTY.el8.x86_64.rpm pigsty 0.2.3 898.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgx_ulid_15-0.2.3-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgx_ulid_15 pgx_ulid_15-0.2.3-3PIGSTY.el8.aarch64.rpm pigsty 0.2.3 808.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgx_ulid_15-0.2.3-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgx_ulid_15 pgx_ulid_15-0.2.3-3PIGSTY.el9.x86_64.rpm pigsty 0.2.3 907.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgx_ulid_15-0.2.3-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgx_ulid_15 pgx_ulid_15-0.2.3-3PIGSTY.el9.aarch64.rpm pigsty 0.2.3 855.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgx_ulid_15-0.2.3-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgx_ulid_15 pgx_ulid_15-0.2.3-3PIGSTY.el10.x86_64.rpm pigsty 0.2.3 906.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgx_ulid_15-0.2.3-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgx_ulid_15 pgx_ulid_15-0.2.3-3PIGSTY.el10.aarch64.rpm pigsty 0.2.3 844.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgx_ulid_15-0.2.3-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb pigsty 0.2.3 722.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb pigsty 0.2.3 606.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb pigsty 0.2.3 722.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb pigsty 0.2.3 606.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb pigsty 0.2.3 801.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb pigsty 0.2.3 713.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb pigsty 0.2.3 793.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb pigsty 0.2.3 704.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb pigsty 0.2.3 789.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgx-ulid postgresql-15-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb pigsty 0.2.3 702.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-15-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgx_ulid_14 pgx_ulid_14-0.2.3-3PIGSTY.el8.x86_64.rpm pigsty 0.2.3 895.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgx_ulid_14-0.2.3-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgx_ulid_14 pgx_ulid_14-0.2.3-3PIGSTY.el8.aarch64.rpm pigsty 0.2.3 805.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgx_ulid_14-0.2.3-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgx_ulid_14 pgx_ulid_14-0.2.3-3PIGSTY.el9.x86_64.rpm pigsty 0.2.3 904.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgx_ulid_14-0.2.3-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgx_ulid_14 pgx_ulid_14-0.2.3-3PIGSTY.el9.aarch64.rpm pigsty 0.2.3 852.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgx_ulid_14-0.2.3-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgx_ulid_14 pgx_ulid_14-0.2.3-3PIGSTY.el10.x86_64.rpm pigsty 0.2.3 903.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgx_ulid_14-0.2.3-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgx_ulid_14 pgx_ulid_14-0.2.3-3PIGSTY.el10.aarch64.rpm pigsty 0.2.3 841.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgx_ulid_14-0.2.3-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb pigsty 0.2.3 720.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb pigsty 0.2.3 604.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb pigsty 0.2.3 719.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb pigsty 0.2.3 605.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb pigsty 0.2.3 798.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb pigsty 0.2.3 712.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb pigsty 0.2.3 790.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb pigsty 0.2.3 701.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb pigsty 0.2.3 787.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgx-ulid postgresql-14-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb pigsty 0.2.3 700.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgx-ulid/postgresql-14-pgx-ulid_0.2.3-3PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgx_ulid` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgx_ulid         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgx_ulid` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgx_ulid;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgx_ulid -v 18  # PG 18
pig ext install -y pgx_ulid -v 17  # PG 17
pig ext install -y pgx_ulid -v 16  # PG 16
pig ext install -y pgx_ulid -v 15  # PG 15
pig ext install -y pgx_ulid -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgx_ulid_18       # PG 18
dnf install -y pgx_ulid_17       # PG 17
dnf install -y pgx_ulid_16       # PG 16
dnf install -y pgx_ulid_15       # PG 15
dnf install -y pgx_ulid_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgx-ulid   # PG 18
apt install -y postgresql-17-pgx-ulid   # PG 17
apt install -y postgresql-16-pgx-ulid   # PG 16
apt install -y postgresql-15-pgx-ulid   # PG 15
apt install -y postgresql-14-pgx-ulid   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgx_ulid';
```


**创建扩展**：

```sql
CREATE EXTENSION pgx_ulid;
```




## 用法

来源：[README](https://github.com/pksunkara/pgx_ulid/blob/master/README.md), [releases](https://github.com/pksunkara/pgx_ulid/releases)

`pgx_ulid` 提供原生 `ulid` 类型、生成器，以及与 `timestamp` 和 `uuid` 的双向 casts。README 记录了二进制存储和 monotonic ULID 支持。pgext catalog 记录 package 和 extension 名均为 `pgx_ulid`，版本 `0.2.3`，覆盖 PostgreSQL 14-18。

### 启用扩展

```sql
CREATE EXTENSION pgx_ulid;
```

### 生成 ULID

```sql
SELECT gen_ulid();
SELECT gen_monotonic_ulid();
```

`gen_monotonic_ulid()` 需要：

```conf
shared_preload_libraries = 'pgx_ulid'
```

README 明确说明该 preload 要求只影响 `gen_monotonic_ulid()`；扩展其他功能无需 preload。

### 将 `ulid` 用作主键

```sql
CREATE TABLE users (
  id ulid NOT NULL DEFAULT gen_ulid() PRIMARY KEY,
  name text NOT NULL
);

SELECT * FROM users
WHERE id = '01ARZ3NDEKTSV4RRFFQ69G5FAV';
```

### Casts 与范围查询

```sql
ALTER TABLE users
ADD COLUMN created_at timestamp GENERATED ALWAYS AS (id::timestamp) STORED;

SELECT * FROM users
WHERE id BETWEEN '2023-09-15'::timestamp::ulid
            AND '2023-09-16'::timestamp::ulid;
```

README 还记录了 `ulid` 与 `uuid` 之间的 casts。

### 注意事项

- Monotonic ULIDs 使用 shared memory 和 LWLock 来保存上一次生成的值。
- README 提到 monotonic generation 理论上可能 overflow 并抛出错误，虽然它认为实践中可忽略。
- 上游 README 也展示 `CREATE EXTENSION ulid`；此 stub 遵循 `db/extension.csv`，其中 package 和 lead extension 都是 `pgx_ulid`。
- GitHub release page 将 `v0.2.3` 列为最新，且只标为 `Release 0.2.3`，没有单独用户侧 release notes。

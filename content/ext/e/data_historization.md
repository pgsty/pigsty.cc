---
title: "data_historization"
linkTitle: "data_historization"
description: "用SQL将数据变更历史保存到分区表中"
weight: 4320
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rodo/postgresql-data-historization">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rodo/postgresql-data-historization</div>
    <div class="ext-card__desc">https://github.com/rodo/postgresql-data-historization</div>
  </a>
  <a class="ext-card ext-card--source" href="postgresql-data-historization-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgresql-data-historization-1.1.0.tar.gz</div>
    <div class="ext-card__desc">postgresql-data-historization-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`data_historization`**](/ext/e/data_historization) | `1.1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4320  | [**`data_historization`**](/ext/e/data_historization) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`ddl_historization`](/ext/e/ddl_historization) [`temporal_tables`](/ext/e/temporal_tables) [`table_version`](/ext/e/table_version) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `data_historization` | `plpgsql` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `data_historization_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-data-historization` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
@ el8.x86_64 18 data_historization_18 data_historization_18-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/data_historization_18-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 data_historization_18 data_historization_18-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/data_historization_18-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 data_historization_18 data_historization_18-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/data_historization_18-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 data_historization_18 data_historization_18-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/data_historization_18-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 data_historization_18 data_historization_18-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/data_historization_18-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 data_historization_18 data_historization_18-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/data_historization_18-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-data-historization postgresql-18-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-18-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-data-historization postgresql-18-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-18-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-data-historization postgresql-18-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-18-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-data-historization postgresql-18-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-18-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-data-historization postgresql-18-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-18-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-data-historization postgresql-18-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-18-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-data-historization postgresql-18-data-historization_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-18-data-historization_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-data-historization postgresql-18-data-historization_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-18-data-historization_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 data_historization_17 data_historization_17-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/data_historization_17-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 data_historization_17 data_historization_17-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/data_historization_17-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 data_historization_17 data_historization_17-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/data_historization_17-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 data_historization_17 data_historization_17-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/data_historization_17-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 data_historization_17 data_historization_17-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/data_historization_17-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 data_historization_17 data_historization_17-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/data_historization_17-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-data-historization postgresql-17-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-17-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-data-historization postgresql-17-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-17-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-data-historization postgresql-17-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-17-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-data-historization postgresql-17-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-17-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-data-historization postgresql-17-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-17-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-data-historization postgresql-17-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-17-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-data-historization postgresql-17-data-historization_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-17-data-historization_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-data-historization postgresql-17-data-historization_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-17-data-historization_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 data_historization_16 data_historization_16-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/data_historization_16-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 data_historization_16 data_historization_16-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/data_historization_16-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 data_historization_16 data_historization_16-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/data_historization_16-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 data_historization_16 data_historization_16-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/data_historization_16-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 data_historization_16 data_historization_16-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/data_historization_16-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 data_historization_16 data_historization_16-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/data_historization_16-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-data-historization postgresql-16-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-16-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-data-historization postgresql-16-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-16-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-data-historization postgresql-16-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-16-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-data-historization postgresql-16-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-16-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-data-historization postgresql-16-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-16-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-data-historization postgresql-16-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-16-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-data-historization postgresql-16-data-historization_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-16-data-historization_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-data-historization postgresql-16-data-historization_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-16-data-historization_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 data_historization_15 data_historization_15-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/data_historization_15-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 data_historization_15 data_historization_15-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/data_historization_15-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 data_historization_15 data_historization_15-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/data_historization_15-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 data_historization_15 data_historization_15-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/data_historization_15-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 data_historization_15 data_historization_15-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/data_historization_15-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 data_historization_15 data_historization_15-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/data_historization_15-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-data-historization postgresql-15-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-15-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-data-historization postgresql-15-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-15-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-data-historization postgresql-15-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-15-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-data-historization postgresql-15-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-15-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-data-historization postgresql-15-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-15-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-data-historization postgresql-15-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-15-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-data-historization postgresql-15-data-historization_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-15-data-historization_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-data-historization postgresql-15-data-historization_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-15-data-historization_1.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 data_historization_14 data_historization_14-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/data_historization_14-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 data_historization_14 data_historization_14-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 15.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/data_historization_14-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 data_historization_14 data_historization_14-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/data_historization_14-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 data_historization_14 data_historization_14-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 14.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/data_historization_14-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 data_historization_14 data_historization_14-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 15.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/data_historization_14-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 data_historization_14 data_historization_14-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 14.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/data_historization_14-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-data-historization postgresql-14-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-14-data-historization_1.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-data-historization postgresql-14-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/data-historization/postgresql-14-data-historization_1.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-data-historization postgresql-14-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-14-data-historization_1.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-data-historization postgresql-14-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb pigsty 1.1.0 6.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/data-historization/postgresql-14-data-historization_1.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-data-historization postgresql-14-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-14-data-historization_1.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-data-historization postgresql-14-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/data-historization/postgresql-14-data-historization_1.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-data-historization postgresql-14-data-historization_1.1.0-1PIGSTY~noble_amd64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-14-data-historization_1.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-data-historization postgresql-14-data-historization_1.1.0-1PIGSTY~noble_arm64.deb pigsty 1.1.0 5.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/data-historization/postgresql-14-data-historization_1.1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `data_historization` 扩展的 RPM / DEB 包：

```bash
pig build pkg data_historization         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `data_historization` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install data_historization;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y data_historization -v 18  # PG 18
pig ext install -y data_historization -v 17  # PG 17
pig ext install -y data_historization -v 16  # PG 16
pig ext install -y data_historization -v 15  # PG 15
pig ext install -y data_historization -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y data_historization_18       # PG 18
dnf install -y data_historization_17       # PG 17
dnf install -y data_historization_16       # PG 16
dnf install -y data_historization_15       # PG 15
dnf install -y data_historization_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-data-historization   # PG 18
apt install -y postgresql-17-data-historization   # PG 17
apt install -y postgresql-16-data-historization   # PG 16
apt install -y postgresql-15-data-historization   # PG 15
apt install -y postgresql-14-data-historization   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION data_historization CASCADE;  -- 依赖: plpgsql
```



## 用法

> [data_historization: 在分区日志表中跟踪数据变更](https://github.com/rodo/postgresql-data-historization)

用于将数据变更历史化到分区表中的 PL/pgSQL 脚本。

### 初始化历史化

为表设置所需的对象（尚不采集数据）：

```sql
SELECT historize_table_init('public', 'my_table');
```

### 启动历史化

安装触发器，开始将变更收集到 `_log` 表中：

```sql
SELECT historize_table_start('public', 'my_table');
```

### 停止历史化

移除触发器，停止收集变更：

```sql
SELECT historize_table_stop('public', 'my_table');
```

### 重置历史化

移除 cron 条目和在源表上创建的列：

```sql
SELECT historize_table_reset('public', 'my_table');
```

### 清理历史化

完全移除日志表：

```sql
SELECT historize_table_clean('public', 'my_table');
```

### 分区管理

手动创建和删除分区：

```sql
SELECT historize_create_partition('public', 'my_table_log', 0);
SELECT historize_drop_partition('public', 'my_table_log', 0);
```

使用 `pg_cron` 自动化：

```sql
SELECT cron.schedule_in_database(
    'create-partitions', '00 08 * * *',
    $$SELECT historize_create_partition('my_table', generate_series(1, 4))$$,
    'my_database'
);
```

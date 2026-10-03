---
title: "lolor"
linkTitle: "lolor"
description: "让 PostgreSQL 大对象兼容逻辑复制的扩展"
weight: 9580
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgEdge/lolor">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgEdge/lolor</div>
    <div class="ext-card__desc">https://github.com/pgEdge/lolor</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/lolor-1.2.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">lolor-1.2.2.tar.gz</div>
    <div class="ext-card__desc">lolor-1.2.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`lolor`**](/ext/e/lolor) | `1.2.2` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9580  | [**`lolor`**](/ext/e/lolor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `lolor` |
{.ext-table}

| **相关扩展** | [`lo`](/ext/e/lo) [`pglogical`](/ext/e/pglogical) [`spock`](/ext/e/spock) [`mimeo`](/ext/e/mimeo) [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`logical_ddl`](/ext/e/logical_ddl) [`pg_surgery`](/ext/e/pg_surgery) [`pg_repack`](/ext/e/pg_repack) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> works on pgedge kernel fork. Requires lolor.node


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.2` | {{< pgvers "18,17,16,15" >}} | `lolor` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `18.6` | {{< pgvers "18,17,16,15" >}} | `pgedge-$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `18.6` | {{< pgvers "18,17,16,15" >}} | `pgedge-$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 18.6 1 | AVAIL PIGSTY 17.11 1 | AVAIL PIGSTY 16.15 1 | AVAIL PIGSTY 15.19 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pgedge-18 pgedge-18-18.6-2PGSTY.el8.x86_64.rpm pigsty 18.6 12.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgedge-18-18.6-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgedge-18 pgedge-18-18.6-2PGSTY.el8.aarch64.rpm pigsty 18.6 12.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgedge-18-18.6-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgedge-18 pgedge-18-18.6-2PGSTY.el9.x86_64.rpm pigsty 18.6 12.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgedge-18-18.6-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgedge-18 pgedge-18-18.6-2PGSTY.el9.aarch64.rpm pigsty 18.6 11.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgedge-18-18.6-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgedge-18 pgedge-18-18.6-2PGSTY.el10.x86_64.rpm pigsty 18.6 12.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgedge-18-18.6-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgedge-18 pgedge-18-18.6-2PGSTY.el10.aarch64.rpm pigsty 18.6 11.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgedge-18-18.6-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 pgedge-18 pgedge-18_18.6-2PGSTY~bookworm_amd64.deb pigsty 18.6 10.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 pgedge-18 pgedge-18_18.6-2PGSTY~bookworm_arm64.deb pigsty 18.6 9.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 pgedge-18 pgedge-18_18.6-2PGSTY~trixie_amd64.deb pigsty 18.6 10.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~trixie_amd64.deb
@ d13.aarch64 18 pgedge-18 pgedge-18_18.6-2PGSTY~trixie_arm64.deb pigsty 18.6 9.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~trixie_arm64.deb
@ u22.x86_64 18 pgedge-18 pgedge-18_18.6-2PGSTY~jammy_amd64.deb pigsty 18.6 11.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~jammy_amd64.deb
@ u22.aarch64 18 pgedge-18 pgedge-18_18.6-2PGSTY~jammy_arm64.deb pigsty 18.6 11.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~jammy_arm64.deb
@ u24.x86_64 18 pgedge-18 pgedge-18_18.6-2PGSTY~noble_amd64.deb pigsty 18.6 11.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~noble_amd64.deb
@ u24.aarch64 18 pgedge-18 pgedge-18_18.6-2PGSTY~noble_arm64.deb pigsty 18.6 11.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~noble_arm64.deb
@ u26.x86_64 18 pgedge-18 pgedge-18_18.6-2PGSTY~resolute_amd64.deb pigsty 18.6 11.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~resolute_amd64.deb
@ u26.aarch64 18 pgedge-18 pgedge-18_18.6-2PGSTY~resolute_arm64.deb pigsty 18.6 11.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-18/pgedge-18_18.6-2PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgedge-17 pgedge-17-17.11-2PGSTY.el8.x86_64.rpm pigsty 17.11 12.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgedge-17-17.11-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgedge-17 pgedge-17-17.11-2PGSTY.el8.aarch64.rpm pigsty 17.11 11.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgedge-17-17.11-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgedge-17 pgedge-17-17.11-2PGSTY.el9.x86_64.rpm pigsty 17.11 11.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgedge-17-17.11-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgedge-17 pgedge-17-17.11-2PGSTY.el9.aarch64.rpm pigsty 17.11 11.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgedge-17-17.11-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgedge-17 pgedge-17-17.11-2PGSTY.el10.x86_64.rpm pigsty 17.11 11.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgedge-17-17.11-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgedge-17 pgedge-17-17.11-2PGSTY.el10.aarch64.rpm pigsty 17.11 11.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgedge-17-17.11-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 pgedge-17 pgedge-17_17.11-2PGSTY~bookworm_amd64.deb pigsty 17.11 10.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 pgedge-17 pgedge-17_17.11-2PGSTY~bookworm_arm64.deb pigsty 17.11 9.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 pgedge-17 pgedge-17_17.11-2PGSTY~trixie_amd64.deb pigsty 17.11 10.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~trixie_amd64.deb
@ d13.aarch64 17 pgedge-17 pgedge-17_17.11-2PGSTY~trixie_arm64.deb pigsty 17.11 9.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~trixie_arm64.deb
@ u22.x86_64 17 pgedge-17 pgedge-17_17.11-2PGSTY~jammy_amd64.deb pigsty 17.11 11.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~jammy_amd64.deb
@ u22.aarch64 17 pgedge-17 pgedge-17_17.11-2PGSTY~jammy_arm64.deb pigsty 17.11 11.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~jammy_arm64.deb
@ u24.x86_64 17 pgedge-17 pgedge-17_17.11-2PGSTY~noble_amd64.deb pigsty 17.11 11.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~noble_amd64.deb
@ u24.aarch64 17 pgedge-17 pgedge-17_17.11-2PGSTY~noble_arm64.deb pigsty 17.11 11.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~noble_arm64.deb
@ u26.x86_64 17 pgedge-17 pgedge-17_17.11-2PGSTY~resolute_amd64.deb pigsty 17.11 11.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~resolute_amd64.deb
@ u26.aarch64 17 pgedge-17 pgedge-17_17.11-2PGSTY~resolute_arm64.deb pigsty 17.11 10.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-17/pgedge-17_17.11-2PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgedge-16 pgedge-16-16.15-2PGSTY.el8.x86_64.rpm pigsty 16.15 11.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgedge-16-16.15-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgedge-16 pgedge-16-16.15-2PGSTY.el8.aarch64.rpm pigsty 16.15 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgedge-16-16.15-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgedge-16 pgedge-16-16.15-2PGSTY.el9.x86_64.rpm pigsty 16.15 11.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgedge-16-16.15-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgedge-16 pgedge-16-16.15-2PGSTY.el9.aarch64.rpm pigsty 16.15 10.9MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgedge-16-16.15-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgedge-16 pgedge-16-16.15-2PGSTY.el10.x86_64.rpm pigsty 16.15 11.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgedge-16-16.15-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgedge-16 pgedge-16-16.15-2PGSTY.el10.aarch64.rpm pigsty 16.15 11.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgedge-16-16.15-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 pgedge-16 pgedge-16_16.15-2PGSTY~bookworm_amd64.deb pigsty 16.15 9.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 pgedge-16 pgedge-16_16.15-2PGSTY~bookworm_arm64.deb pigsty 16.15 9.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 pgedge-16 pgedge-16_16.15-2PGSTY~trixie_amd64.deb pigsty 16.15 9.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~trixie_amd64.deb
@ d13.aarch64 16 pgedge-16 pgedge-16_16.15-2PGSTY~trixie_arm64.deb pigsty 16.15 9.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~trixie_arm64.deb
@ u22.x86_64 16 pgedge-16 pgedge-16_16.15-2PGSTY~jammy_amd64.deb pigsty 16.15 10.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~jammy_amd64.deb
@ u22.aarch64 16 pgedge-16 pgedge-16_16.15-2PGSTY~jammy_arm64.deb pigsty 16.15 10.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~jammy_arm64.deb
@ u24.x86_64 16 pgedge-16 pgedge-16_16.15-2PGSTY~noble_amd64.deb pigsty 16.15 10.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~noble_amd64.deb
@ u24.aarch64 16 pgedge-16 pgedge-16_16.15-2PGSTY~noble_arm64.deb pigsty 16.15 10.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~noble_arm64.deb
@ u26.x86_64 16 pgedge-16 pgedge-16_16.15-2PGSTY~resolute_amd64.deb pigsty 16.15 10.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~resolute_amd64.deb
@ u26.aarch64 16 pgedge-16 pgedge-16_16.15-2PGSTY~resolute_arm64.deb pigsty 16.15 10.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-16/pgedge-16_16.15-2PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgedge-15 pgedge-15-15.19-2PGSTY.el8.x86_64.rpm pigsty 15.19 10.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgedge-15-15.19-2PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgedge-15 pgedge-15-15.19-2PGSTY.el8.aarch64.rpm pigsty 15.19 9.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgedge-15-15.19-2PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgedge-15 pgedge-15-15.19-2PGSTY.el9.x86_64.rpm pigsty 15.19 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgedge-15-15.19-2PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgedge-15 pgedge-15-15.19-2PGSTY.el9.aarch64.rpm pigsty 15.19 10.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgedge-15-15.19-2PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgedge-15 pgedge-15-15.19-2PGSTY.el10.x86_64.rpm pigsty 15.19 10.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgedge-15-15.19-2PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgedge-15 pgedge-15-15.19-2PGSTY.el10.aarch64.rpm pigsty 15.19 10.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgedge-15-15.19-2PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 pgedge-15 pgedge-15_15.19-2PGSTY~bookworm_amd64.deb pigsty 15.19 8.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 pgedge-15 pgedge-15_15.19-2PGSTY~bookworm_arm64.deb pigsty 15.19 8.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 pgedge-15 pgedge-15_15.19-2PGSTY~trixie_amd64.deb pigsty 15.19 8.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~trixie_amd64.deb
@ d13.aarch64 15 pgedge-15 pgedge-15_15.19-2PGSTY~trixie_arm64.deb pigsty 15.19 8.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~trixie_arm64.deb
@ u22.x86_64 15 pgedge-15 pgedge-15_15.19-2PGSTY~jammy_amd64.deb pigsty 15.19 9.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~jammy_amd64.deb
@ u22.aarch64 15 pgedge-15 pgedge-15_15.19-2PGSTY~jammy_arm64.deb pigsty 15.19 9.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~jammy_arm64.deb
@ u24.x86_64 15 pgedge-15 pgedge-15_15.19-2PGSTY~noble_amd64.deb pigsty 15.19 9.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~noble_amd64.deb
@ u24.aarch64 15 pgedge-15 pgedge-15_15.19-2PGSTY~noble_arm64.deb pigsty 15.19 9.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~noble_arm64.deb
@ u26.x86_64 15 pgedge-15 pgedge-15_15.19-2PGSTY~resolute_amd64.deb pigsty 15.19 9.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~resolute_amd64.deb
@ u26.aarch64 15 pgedge-15 pgedge-15_15.19-2PGSTY~resolute_arm64.deb pigsty 15.19 9.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-15/pgedge-15_15.19-2PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `lolor` 扩展的 RPM / DEB 包：

```bash
pig build pkg lolor         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `lolor` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install lolor;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y lolor -v 18  # PG 18
pig ext install -y lolor -v 17  # PG 17
pig ext install -y lolor -v 16  # PG 16
pig ext install -y lolor -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgedge-18       # PG 18
dnf install -y pgedge-17       # PG 17
dnf install -y pgedge-16       # PG 16
dnf install -y pgedge-15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y pgedge-18   # PG 18
apt install -y pgedge-17   # PG 17
apt install -y pgedge-16   # PG 16
apt install -y pgedge-15   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION lolor;
```

## 用法

来源：

- [v1.2.2 README](https://github.com/pgEdge/lolor/blob/v1.2.2/README.md)
- [Control file](https://github.com/pgEdge/lolor/blob/v1.2.2/lolor.control)
- [Version 1.2.2 migration](https://github.com/pgEdge/lolor/blob/v1.2.2/lolor--1.2.1--1.2.2.sql)
- [Usage reference](https://github.com/pgEdge/lolor/blob/v1.2.2/docs/using_lolor.md)
- [Release notes](https://github.com/pgEdge/lolor/blob/v1.2.2/docs/lolor_release_notes.md)
`lolor` 1.2.2 将大对象的数据块和元数据放到普通表中，使逻辑复制能够包含它们。启用后会替换数据库的原生大对象函数；这是影响整个数据库的行为变化，而不是独立对象存储。

### 配置并启用

在创建大对象前，为每个写入节点分配不同的非零 `lolor.node`；上游文档规定范围为 1 到 2^28。配置服务参数，并在每个参与的数据库中创建扩展：

```conf
lolor.node = 1
```

```sql
CREATE EXTENSION lolor;
SET search_path = lolor, "$user", public, pg_catalog;
```

控制文件固定使用 `lolor` 模式，声明为可信安装，且不允许重定位。上游 README 要求 PostgreSQL 16 或更新版本；当前 Pigsty pgEdge 组合包另外通过了 15–18 的构建测试，但这一打包结果不能证明任意原版 PostgreSQL 15 安装都受支持。

### 大对象工作流

```sql
WITH created AS (
  SELECT lo_from_bytea(0, convert_to('example data', 'UTF8')) AS oid
)
SELECT oid, convert_from(lo_get(oid), 'UTF8') AS contents FROM created;
```

`lo_create()`、`lo_get()`、`lo_put()` 和 `lo_unlink()` 等标准调用使用替换后的函数。通过 `lo_open()`、`loread()`、`lowrite()` 和 `lo_close()` 进行描述符访问时，必须保持在同一个事务内。文件导入和导出操作的是服务端路径，仍受相应函数与文件系统权限限制。

扩展使用 `lolor.pg_largeobject` 和 `lolor.pg_largeobject_metadata` 两张表；原来的系统目录函数会改名保留，使禁用或移除扩展时能够恢复原生函数名称。

### 复制

已有 Spock 复制集时，将两张表都纳入：

```sql
SELECT spock.repset_add_table('default', 'lolor.pg_largeobject');
SELECT spock.repset_add_table('default', 'lolor.pg_largeobject_metadata');
```

在所有节点安装兼容版本，并协调节点标识符与对象所有权。仅创建扩展不会建立逻辑复制拓扑。

### 升级与边界

1.2.2 修复扩展升级和数据库大版本升级行为，并新增 `lolor.disable()`、`lolor.enable()` 和 `lolor.is_enabled()`。应当**先更新 lolor，再运行 pg_upgrade**；该修复不会追溯修复已经用旧扩展文件尝试的大版本升级：

```sql
ALTER EXTENSION lolor UPDATE TO '1.2.2';
SELECT lolor.is_enabled();
```

禁用操作改变当前生效的原生函数名称，不会迁移已存储的大对象。上游不提供原生大对象迁移功能；启用 lolor 时，原生大对象功能和 lolor 存储不能混用。上游不支持 ALTER LARGE OBJECT、GRANT ON LARGE OBJECT、COMMENT ON LARGE OBJECT 和 REVOKE ON LARGE OBJECT。应为两张普通表安排备份、恢复与复制。

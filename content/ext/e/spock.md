---
title: "spock"
linkTitle: "spock"
description: "PostgreSQL 多主逻辑复制扩展"
weight: 9570
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgEdge/spock">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgEdge/spock</div>
    <div class="ext-card__desc">https://github.com/pgEdge/spock</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/spock-5.0.12.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">spock-5.0.12.tar.gz</div>
    <div class="ext-card__desc">spock-5.0.12.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`spock`**](/ext/e/spock) | `5.0.12` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9570  | [**`spock`**](/ext/e/spock) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `spock` |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`pgactive`](/ext/e/pgactive) [`mimeo`](/ext/e/mimeo) [`pgoutput`](/ext/e/pgoutput) [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`logical_ddl`](/ext/e/logical_ddl) [`postgres_fdw`](/ext/e/postgres_fdw) [`lolor`](/ext/e/lolor) [`citus`](/ext/e/citus) [`plproxy`](/ext/e/plproxy) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Bundled with pgEdge 15.19/16.15/17.11/18.6.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.12` | {{< pgvers "18,17,16,15" >}} | `spock` | - |
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

您可以使用 `pig build` 命令构建 `spock` 扩展的 RPM / DEB 包：

```bash
pig build pkg spock         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `spock` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install spock;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y spock -v 18  # PG 18
pig ext install -y spock -v 17  # PG 17
pig ext install -y spock -v 16  # PG 16
pig ext install -y spock -v 15  # PG 15
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


**预加载配置**：

```bash
shared_preload_libraries = 'spock';
```


**创建扩展**：

```sql
CREATE EXTENSION spock;
```

## 用法

来源：

- [Spock v5.0.12 README](https://github.com/pgEdge/spock/blob/v5.0.12/README.md)
- [Getting started](https://github.com/pgEdge/spock/blob/v5.0.12/docs/getting_started.md)
- [Configuration reference](https://github.com/pgEdge/spock/blob/v5.0.12/docs/configuring.md)
- [Limitations](https://github.com/pgEdge/spock/blob/v5.0.12/docs/limitations.md)
- [Release notes](https://github.com/pgEdge/spock/blob/v5.0.12/docs/spock_release_notes.md)

`spock` 为 PostgreSQL 15 至 18 提供了主动-主动逻辑复制。每个参与的数据库都是一个 Spock 节点；通过在节点之间创建有向订阅，形成一个多主拓扑结构。

### 配置

在 `postgresql.conf` 中：

```ini
wal_level = 'logical'
max_worker_processes = 10
max_replication_slots = 10
max_wal_senders = 10
shared_preload_libraries = 'spock'
track_commit_timestamp = on
spock.enable_ddl_replication = on
spock.include_ddl_repset = on
```

### 启用

```sql
CREATE EXTENSION spock;
```

### 创建节点

在每个节点上创建节点身份：

```sql
-- Node 1
SELECT spock.node_create(
    node_name := 'n1',
    dsn := 'host=10.0.0.5 port=5432 dbname=mydb'
);

-- Node 2
SELECT spock.node_create(
    node_name := 'n2',
    dsn := 'host=10.0.0.7 port=5432 dbname=mydb'
);
```

### 创建订阅

对于多主模式，每个节点订阅其他所有节点：

```sql
-- On n1: subscribe to n2
SELECT spock.sub_create(
    subscription_name := 'sub_n1n2',
    provider_dsn := 'host=10.0.0.7 port=5432 dbname=mydb'
);

-- On n2: subscribe to n1
SELECT spock.sub_create(
    subscription_name := 'sub_n2n1',
    provider_dsn := 'host=10.0.0.5 port=5432 dbname=mydb'
);
```

### 复制集管理

```sql
-- Add table to replication
SELECT spock.repset_add_table('default', 'my_table');

-- Remove table from replication
SELECT spock.repset_remove_table('default', 'my_table');

-- Add all tables in a schema
SELECT spock.repset_add_all_tables('default', '{public}');
```

### 关键功能

- 多主（主动-主动）复制
- 自动 DDL 复制
- 使用提交时间戳进行冲突检测和解决
- 行和列过滤
- 支持 PostgreSQL 15、16、17 和 18
- 表必须在所有节点上具有主键且模式匹配

### 操作与注意事项

- 在创建节点或订阅之前，在每个参与的服务器上安装 `spock` 并将其添加到 `shared_preload_libraries` 中。
- 确保各节点上的表定义、数据类型、主键和相关唯一索引一致。即使启用了 DDL 复制，也要协调 DDL 操作。
- 被复制的表需要具有主键或其他可用的副本标识符。临时表和未记录表不是复制目标。
- Spock 是按数据库操作的。对于每个参与的数据库，重复扩展名和拓扑结构设置。
- 主动-主动冲突处理依赖于提交时间戳和策略。在生产使用前，请测试同时插入和更新操作，特别是空值唯一键。
- 上游文档中在 README 中列出了平台/构建要求；请验证每个节点上使用的 PostgreSQL 构建和 Spock 包是兼容的。

### 5.0.12 版本与升级

Spock 要求应用上游 README 中对应版本的 PostgreSQL 内核补丁，仅匹配大版本并不充分。所有节点都应使用兼容内核，例如匹配的 pgEdge 构建。修改共享预加载需要重启。5.0.12 初步支持 PostgreSQL 19，但上游明确不支持将该测试版用于生产；当前 Pigsty pgEdge 构建覆盖 15–18。

带有输出插件安全修复的 PostgreSQL 要求将 `spock_output` 纳入 `output_plugin_libraries`，包括将来可能成为发布端的物理备库。先确认参数是否存在：

```sql
SELECT current_setting('output_plugin_libraries', true);
```

仅当查询返回非空值时才加入插件，并保留其他必需条目：

```conf
output_plugin_libraries = 'pgoutput, test_decoding, spock_output'
```

旧服务器遇到未知参数会无法启动；允许列表检查也作用于已有复制槽恢复解码的过程，因此应在 PostgreSQL 小版本升级前安排这个设置。

5.0.12 补丁没有模式变化。它在不推进复制源位置的情况下重试临时应用错误，修复重放、异常处理和生成列复制，并校验接收到的元组元数据。永久性的模式差异仍须修复；应用进程反复重启不代表复制健康。每个节点升级后，应检查复制延迟、异常状态和订阅。

5.0.11 引入 `spock.use_native_failover_slots`，修改后需要重启；原生复制槽行为依赖 PostgreSQL 17 或更新版本，故障切换配置还须遵循专门的上游操作指南。不能仅因为集群有备库就启用它。

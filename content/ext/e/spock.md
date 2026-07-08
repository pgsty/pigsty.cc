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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/spock-5.0.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">spock-5.0.6.tar.gz</div>
    <div class="ext-card__desc">spock-5.0.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`spock`**](/ext/e/spock) | `5.0.10` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9570  | [**`spock`**](/ext/e/spock) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `spock` |
{.ext-table}

| **相关扩展** | [`lolor`](/ext/e/lolor) [`snowflake`](/ext/e/snowflake) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> works on pgedge kernel fork


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.10` | {{< pgvers "18,17,16,15" >}} | `spock` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.10` | {{< pgvers "18,17,16,15" >}} | `pgedge-$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.10` | {{< pgvers "18,17,16,15" >}} | `pgedge-$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| el8.aarch64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| el9.x86_64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| el9.aarch64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| el10.x86_64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| el10.aarch64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| d12.x86_64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| d12.aarch64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| d13.x86_64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| d13.aarch64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| u22.x86_64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| u22.aarch64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| u24.x86_64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| u24.aarch64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| u26.x86_64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
| u26.aarch64 | FORK PIGSTY 18.4 1 | FORK PIGSTY 17.10 1 | FORK PIGSTY 16.14 1 | FORK PIGSTY 15.18 1 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pgedge-18 pgedge-18-18.4-1PIGSTY.el8.x86_64.rpm pigsty 18.4 13.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgedge-18-18.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgedge-18 pgedge-18-18.4-1PIGSTY.el8.aarch64.rpm pigsty 18.4 12.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgedge-18-18.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgedge-18 pgedge-18-18.4-1PIGSTY.el9.x86_64.rpm pigsty 18.4 12.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgedge-18-18.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgedge-18 pgedge-18-18.4-1PIGSTY.el9.aarch64.rpm pigsty 18.4 11.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgedge-18-18.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgedge-18 pgedge-18-18.4-1PIGSTY.el10.x86_64.rpm pigsty 18.4 12.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgedge-18-18.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgedge-18 pgedge-18-18.4-1PIGSTY.el10.aarch64.rpm pigsty 18.4 12.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgedge-18-18.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~bookworm_amd64.deb pigsty 18.4 10.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~bookworm_arm64.deb pigsty 18.4 10.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~trixie_amd64.deb pigsty 18.4 10.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~trixie_arm64.deb pigsty 18.4 10.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~jammy_amd64.deb pigsty 18.4 11.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~jammy_arm64.deb pigsty 18.4 11.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~noble_amd64.deb pigsty 18.4 11.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~noble_arm64.deb pigsty 18.4 11.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~resolute_amd64.deb pigsty 18.4 11.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 pgedge-18 pgedge-18_18.4-1PIGSTY~resolute_arm64.deb pigsty 18.4 11.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-18/pgedge-18_18.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgedge-17 pgedge-17-17.10-1PIGSTY.el8.x86_64.rpm pigsty 17.10 12.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgedge-17-17.10-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgedge-17 pgedge-17-17.10-1PIGSTY.el8.aarch64.rpm pigsty 17.10 12.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgedge-17-17.10-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgedge-17 pgedge-17-17.10-1PIGSTY.el9.x86_64.rpm pigsty 17.10 11.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgedge-17-17.10-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgedge-17 pgedge-17-17.10-1PIGSTY.el9.aarch64.rpm pigsty 17.10 11.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgedge-17-17.10-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgedge-17 pgedge-17-17.10-1PIGSTY.el10.x86_64.rpm pigsty 17.10 11.8MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgedge-17-17.10-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgedge-17 pgedge-17-17.10-1PIGSTY.el10.aarch64.rpm pigsty 17.10 11.7MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgedge-17-17.10-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~bookworm_amd64.deb pigsty 17.10 10.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~bookworm_arm64.deb pigsty 17.10 9.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~trixie_amd64.deb pigsty 17.10 10.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~trixie_arm64.deb pigsty 17.10 9.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~jammy_amd64.deb pigsty 17.10 11.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~jammy_arm64.deb pigsty 17.10 11.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~noble_amd64.deb pigsty 17.10 11.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~noble_arm64.deb pigsty 17.10 11.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~resolute_amd64.deb pigsty 17.10 11.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 pgedge-17 pgedge-17_17.10-1PIGSTY~resolute_arm64.deb pigsty 17.10 11.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-17/pgedge-17_17.10-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgedge-16 pgedge-16-16.14-1PIGSTY.el8.x86_64.rpm pigsty 16.14 12.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgedge-16-16.14-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgedge-16 pgedge-16-16.14-1PIGSTY.el8.aarch64.rpm pigsty 16.14 11.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgedge-16-16.14-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgedge-16 pgedge-16-16.14-1PIGSTY.el9.x86_64.rpm pigsty 16.14 11.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgedge-16-16.14-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgedge-16 pgedge-16-16.14-1PIGSTY.el9.aarch64.rpm pigsty 16.14 11.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgedge-16-16.14-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgedge-16 pgedge-16-16.14-1PIGSTY.el10.x86_64.rpm pigsty 16.14 11.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgedge-16-16.14-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgedge-16 pgedge-16-16.14-1PIGSTY.el10.aarch64.rpm pigsty 16.14 11.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgedge-16-16.14-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~bookworm_amd64.deb pigsty 16.14 9.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~bookworm_arm64.deb pigsty 16.14 9.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~trixie_amd64.deb pigsty 16.14 9.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~trixie_arm64.deb pigsty 16.14 9.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~jammy_amd64.deb pigsty 16.14 11.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~jammy_arm64.deb pigsty 16.14 10.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~noble_amd64.deb pigsty 16.14 10.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~noble_arm64.deb pigsty 16.14 10.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~resolute_amd64.deb pigsty 16.14 10.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 pgedge-16 pgedge-16_16.14-1PIGSTY~resolute_arm64.deb pigsty 16.14 10.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-16/pgedge-16_16.14-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgedge-15 pgedge-15-15.18-1PIGSTY.el8.x86_64.rpm pigsty 15.18 10.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgedge-15-15.18-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgedge-15 pgedge-15-15.18-1PIGSTY.el8.aarch64.rpm pigsty 15.18 10.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgedge-15-15.18-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgedge-15 pgedge-15-15.18-1PIGSTY.el9.x86_64.rpm pigsty 15.18 10.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgedge-15-15.18-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgedge-15 pgedge-15-15.18-1PIGSTY.el9.aarch64.rpm pigsty 15.18 10.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgedge-15-15.18-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgedge-15 pgedge-15-15.18-1PIGSTY.el10.x86_64.rpm pigsty 15.18 10.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgedge-15-15.18-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgedge-15 pgedge-15-15.18-1PIGSTY.el10.aarch64.rpm pigsty 15.18 10.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgedge-15-15.18-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~bookworm_amd64.deb pigsty 15.18 8.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~bookworm_arm64.deb pigsty 15.18 8.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~trixie_amd64.deb pigsty 15.18 8.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~trixie_arm64.deb pigsty 15.18 8.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~jammy_amd64.deb pigsty 15.18 10.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~jammy_arm64.deb pigsty 15.18 9.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~noble_amd64.deb pigsty 15.18 10.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~noble_arm64.deb pigsty 15.18 9.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~resolute_amd64.deb pigsty 15.18 10.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 pgedge-15 pgedge-15_15.18-1PIGSTY~resolute_arm64.deb pigsty 15.18 9.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgedge-15/pgedge-15_15.18-1PIGSTY~resolute_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install spock;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y spock -v 18  # PG 18
pig ext install -y spock -v 17  # PG 17
pig ext install -y spock -v 16  # PG 16
pig ext install -y spock -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgedge-18       # PG 18
dnf install -y pgedge-17       # PG 17
dnf install -y pgedge-16       # PG 16
dnf install -y pgedge-15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y pgedge-18   # PG 18
apt install -y pgedge-17   # PG 17
apt install -y pgedge-16   # PG 16
apt install -y pgedge-15   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'spock';
```


**创建扩展**：

```sql
CREATE EXTENSION spock;
```




## 用法

> [spock: PostgreSQL 多主逻辑复制扩展](https://github.com/pgEdge/spock)

PostgreSQL 15+ 的多主逻辑复制。每个节点同时充当发布者和订阅者。

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
-- 节点 1
SELECT spock.node_create(
    node_name := 'n1',
    dsn := 'host=10.0.0.5 port=5432 dbname=mydb'
);

-- 节点 2
SELECT spock.node_create(
    node_name := 'n2',
    dsn := 'host=10.0.0.7 port=5432 dbname=mydb'
);
```

### 创建订阅

对于多主，每个节点订阅其他所有节点：

```sql
-- 在 n1 上：订阅 n2
SELECT spock.sub_create(
    subscription_name := 'sub_n1n2',
    provider_dsn := 'host=10.0.0.7 port=5432 dbname=mydb'
);

-- 在 n2 上：订阅 n1
SELECT spock.sub_create(
    subscription_name := 'sub_n2n1',
    provider_dsn := 'host=10.0.0.5 port=5432 dbname=mydb'
);
```

### 复制集管理

```sql
-- 将表添加到复制
SELECT spock.repset_add_table('default', 'my_table');

-- 从复制中移除表
SELECT spock.repset_remove_table('default', 'my_table');

-- 添加模式中的所有表
SELECT spock.repset_add_all_tables('default', '{public}');
```

### 关键特性

- 多主（双活）复制
- 自动 DDL 复制
- 使用提交时间戳进行冲突检测和解决
- 行和列过滤
- 支持 PostgreSQL 15、16、17 和 18
- 表必须有主键且跨节点模式匹配

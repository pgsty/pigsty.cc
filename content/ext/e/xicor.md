---
title: "xicor"
linkTitle: "xicor"
description: "在PG中计算XI相关系数"
weight: 4670
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Florents-Tselai/pgxicor">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Florents-Tselai/pgxicor</div>
    <div class="ext-card__desc">https://github.com/Florents-Tselai/pgxicor</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgxicor-0.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgxicor-0.1.1.tar.gz</div>
    <div class="ext-card__desc">pgxicor-0.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgxicor`**](/ext/e/xicor) | `0.1.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4670  | [**`xicor`**](/ext/e/xicor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`permuteseq`](/ext/e/permuteseq) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pgxicor` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pgxicor_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgxicor` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 | AVAIL PIGSTY 0.1.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pgxicor_18 pgxicor_18-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 27.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgxicor_18-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgxicor_18 pgxicor_18-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgxicor_18-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgxicor_18 pgxicor_18-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgxicor_18-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgxicor_18 pgxicor_18-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 26.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgxicor_18-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgxicor_18 pgxicor_18-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgxicor_18-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgxicor_18 pgxicor_18-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgxicor_18-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgxicor postgresql-18-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-18-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgxicor postgresql-18-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 26.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-18-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgxicor postgresql-18-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-18-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgxicor postgresql-18-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 26.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-18-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgxicor postgresql-18-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 28.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-18-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgxicor postgresql-18-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 28.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-18-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgxicor postgresql-18-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 27.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-18-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgxicor postgresql-18-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 27.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-18-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgxicor_17 pgxicor_17-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 27.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgxicor_17-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgxicor_17 pgxicor_17-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgxicor_17-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgxicor_17 pgxicor_17-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgxicor_17-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgxicor_17 pgxicor_17-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 26.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgxicor_17-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgxicor_17 pgxicor_17-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgxicor_17-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgxicor_17 pgxicor_17-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgxicor_17-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgxicor postgresql-17-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 27.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-17-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgxicor postgresql-17-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 26.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-17-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgxicor postgresql-17-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-17-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgxicor postgresql-17-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 26.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-17-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgxicor postgresql-17-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 29.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-17-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgxicor postgresql-17-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 29.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-17-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgxicor postgresql-17-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 27.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-17-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgxicor postgresql-17-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 27.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-17-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgxicor_16 pgxicor_16-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 27.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgxicor_16-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgxicor_16 pgxicor_16-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgxicor_16-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgxicor_16 pgxicor_16-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgxicor_16-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgxicor_16 pgxicor_16-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 26.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgxicor_16-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgxicor_16 pgxicor_16-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgxicor_16-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgxicor_16 pgxicor_16-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgxicor_16-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgxicor postgresql-16-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 27.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-16-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgxicor postgresql-16-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 26.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-16-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgxicor postgresql-16-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-16-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgxicor postgresql-16-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 26.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-16-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgxicor postgresql-16-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 29.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-16-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgxicor postgresql-16-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 29.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-16-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgxicor postgresql-16-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 27.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-16-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgxicor postgresql-16-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 27.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-16-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgxicor_15 pgxicor_15-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgxicor_15-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgxicor_15 pgxicor_15-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 27.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgxicor_15-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgxicor_15 pgxicor_15-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgxicor_15-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgxicor_15 pgxicor_15-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgxicor_15-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgxicor_15 pgxicor_15-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgxicor_15-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgxicor_15 pgxicor_15-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 27.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgxicor_15-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgxicor postgresql-15-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-15-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgxicor postgresql-15-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 26.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-15-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgxicor postgresql-15-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-15-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgxicor postgresql-15-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 27.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-15-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgxicor postgresql-15-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 30.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-15-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgxicor postgresql-15-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-15-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgxicor postgresql-15-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 28.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-15-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgxicor postgresql-15-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 27.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-15-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgxicor_14 pgxicor_14-0.1.1-1PIGSTY.el8.x86_64.rpm pigsty 0.1.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgxicor_14-0.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgxicor_14 pgxicor_14-0.1.1-1PIGSTY.el8.aarch64.rpm pigsty 0.1.1 27.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgxicor_14-0.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgxicor_14 pgxicor_14-0.1.1-1PIGSTY.el9.x86_64.rpm pigsty 0.1.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgxicor_14-0.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgxicor_14 pgxicor_14-0.1.1-1PIGSTY.el9.aarch64.rpm pigsty 0.1.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgxicor_14-0.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgxicor_14 pgxicor_14-0.1.1-1PIGSTY.el10.x86_64.rpm pigsty 0.1.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgxicor_14-0.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgxicor_14 pgxicor_14-0.1.1-1PIGSTY.el10.aarch64.rpm pigsty 0.1.1 27.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgxicor_14-0.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgxicor postgresql-14-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb pigsty 0.1.1 27.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-14-pgxicor_0.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgxicor postgresql-14-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb pigsty 0.1.1 26.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgxicor/postgresql-14-pgxicor_0.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgxicor postgresql-14-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb pigsty 0.1.1 27.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-14-pgxicor_0.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgxicor postgresql-14-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb pigsty 0.1.1 26.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgxicor/postgresql-14-pgxicor_0.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgxicor postgresql-14-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb pigsty 0.1.1 29.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-14-pgxicor_0.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgxicor postgresql-14-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb pigsty 0.1.1 29.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgxicor/postgresql-14-pgxicor_0.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgxicor postgresql-14-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb pigsty 0.1.1 28.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-14-pgxicor_0.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgxicor postgresql-14-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb pigsty 0.1.1 27.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgxicor/postgresql-14-pgxicor_0.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgxicor` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgxicor         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgxicor` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgxicor;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgxicor -v 18  # PG 18
pig ext install -y pgxicor -v 17  # PG 17
pig ext install -y pgxicor -v 16  # PG 16
pig ext install -y pgxicor -v 15  # PG 15
pig ext install -y pgxicor -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgxicor_18       # PG 18
dnf install -y pgxicor_17       # PG 17
dnf install -y pgxicor_16       # PG 16
dnf install -y pgxicor_15       # PG 15
dnf install -y pgxicor_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgxicor   # PG 18
apt install -y postgresql-17-pgxicor   # PG 17
apt install -y postgresql-16-pgxicor   # PG 16
apt install -y postgresql-15-pgxicor   # PG 15
apt install -y postgresql-14-pgxicor   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION xicor;
```

## 用法

来源：[README](https://github.com/Florents-Tselai/pgxicor/blob/main/README.md), [release 0.1.1](https://github.com/Florents-Tselai/pgxicor/releases/tag/v0.1.1)

`xicor` 将 XI（Chatterjee's xi）相关系数暴露为 PostgreSQL 聚合函数。它适合检测函数依赖，包括 Pearson `corr()` 可能遗漏的非线性关系。

```sql
CREATE EXTENSION xicor;
```

### 主要聚合

```sql
SELECT xicor(x, y) FROM xicor_test;
```

上游示例把它与抛物线数据集上的 `corr()` 对比：`corr()` 接近零，而 `xicor()` 仍然较高。

### 示例

```sql
CREATE TABLE xicor_test (x float8, y float8);
INSERT INTO xicor_test (x, y) VALUES
  (1.0, 2.0),
  (2.5, 3.5),
  (3.0, 4.0),
  (4.5, 5.5),
  (5.0, 6.0);

SELECT xicor(x, y) FROM xicor_test;
```

### 可复现性控制

对于存在 ties 的数据，上游建议开启确定性 tie 处理：

```sql
SET xicor.ties = true;
SET xicor.seed = 42;
```

### 注意事项

- `xicor()` 是双数值输入的聚合函数，不是通用统计框架。
- ties 的处理方式会影响结果；如果需要可复现行为，请启用文档中的 GUC。

---
title: "argm"
linkTitle: "argm"
description: "提供 argmax、argmin 与 anyold 聚合函数"
weight: 4755
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bashtanov/argm">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bashtanov/argm</div>
    <div class="ext-card__desc">https://github.com/bashtanov/argm</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/argm-1.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">argm-1.1.1.tar.gz</div>
    <div class="ext-card__desc">argm-1.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`argm`**](/ext/e/argm) | `1.1.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4755  | [**`argm`**](/ext/e/argm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`first_last_agg`](/ext/e/first_last_agg) [`aggs_for_arrays`](/ext/e/aggs_for_arrays) [`aggs_for_vecs`](/ext/e/aggs_for_vecs) [`topn`](/ext/e/topn) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> fix pg16+ varlena header with patch


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `argm` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `argm_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-argm` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
@ el8.x86_64 18 argm_18 argm_18-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/argm_18-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 argm_18 argm_18-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/argm_18-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 argm_18 argm_18-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/argm_18-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 argm_18 argm_18-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/argm_18-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 argm_18 argm_18-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/argm_18-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 argm_18 argm_18-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/argm_18-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 19.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 20.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 20.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-argm postgresql-18-argm_1.1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-18-argm_1.1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 argm_17 argm_17-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/argm_17-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 argm_17 argm_17-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/argm_17-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 argm_17 argm_17-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/argm_17-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 argm_17 argm_17-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/argm_17-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 argm_17 argm_17-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/argm_17-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 argm_17 argm_17-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 18.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/argm_17-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 19.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 20.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 21.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 20.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-argm postgresql-17-argm_1.1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-17-argm_1.1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 argm_16 argm_16-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/argm_16-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 argm_16 argm_16-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/argm_16-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 argm_16 argm_16-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/argm_16-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 argm_16 argm_16-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/argm_16-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 argm_16 argm_16-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/argm_16-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 argm_16 argm_16-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 18.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/argm_16-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 19.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 20.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 21.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 20.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-argm postgresql-16-argm_1.1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-16-argm_1.1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 argm_15 argm_15-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/argm_15-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 argm_15 argm_15-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/argm_15-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 argm_15 argm_15-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/argm_15-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 argm_15 argm_15-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/argm_15-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 argm_15 argm_15-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/argm_15-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 argm_15 argm_15-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 18.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/argm_15-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 19.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 20.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 21.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 20.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-argm postgresql-15-argm_1.1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1.1 20.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-15-argm_1.1.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 argm_14 argm_14-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/argm_14-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 argm_14 argm_14-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/argm_14-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 argm_14 argm_14-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/argm_14-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 argm_14 argm_14-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/argm_14-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 argm_14 argm_14-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/argm_14-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 argm_14 argm_14-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 18.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/argm_14-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 19.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 19.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 20.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 21.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 20.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~resolute_amd64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-argm postgresql-14-argm_1.1.1-1PIGSTY~resolute_arm64.deb pigsty 1.1.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/a/argm/postgresql-14-argm_1.1.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `argm` 扩展的 RPM / DEB 包：

```bash
pig build pkg argm         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `argm` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install argm;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y argm -v 18  # PG 18
pig ext install -y argm -v 17  # PG 17
pig ext install -y argm -v 16  # PG 16
pig ext install -y argm -v 15  # PG 15
pig ext install -y argm -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y argm_18       # PG 18
dnf install -y argm_17       # PG 17
dnf install -y argm_16       # PG 16
dnf install -y argm_15       # PG 15
dnf install -y argm_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-argm   # PG 18
apt install -y postgresql-17-argm   # PG 17
apt install -y postgresql-16-argm   # PG 16
apt install -y postgresql-15-argm   # PG 15
apt install -y postgresql-14-argm   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION argm;
```

## 用法

来源：

- [argm 1.1.1 README](https://github.com/bashtanov/argm/blob/1.1.1/README.md)
- [Extension control file](https://github.com/bashtanov/argm/blob/1.1.1/argm.control)
- [SQL definitions](https://github.com/bashtanov/argm/blob/1.1.1/argm--1.1.1.sql)

`argm` 提供了多态聚合函数 `argmax`、`argmin` 和 `anyold`。这些函数在分组时返回选定行的值，避免了在行可以通过一个或多个可排序键选择时进行连接或窗口函数处理。

### 核心工作流程

```sql
CREATE EXTENSION argm;

SELECT customer_id,
       argmax(order_id, total, ordered_at) AS largest_order
FROM orders
GROUP BY customer_id;
```

`argmax(value, key...)` 返回属于按字典序最大键元组的 `value`。`argmin` 选择最小的键元组。其他键可以打破平局，而无需构建复合值：

```sql
SELECT device_id,
       argmax(reading, measured_at, sequence_no) AS latest_reading
FROM measurements
GROUP BY device_id;
```

使用 `anyold(value)` 时，任何分组成员都可以接受：

```sql
SELECT account_id, anyold(display_name)
FROM account_aliases
GROUP BY account_id;
```

### 关键对象

- `argmax(value, key [, key ...])` 选择与最大键元组关联的值。
- `argmin(value, key [, key ...])` 选择与最小键元组关联的值。
- `anyold(value)` 返回聚合状态中的任意非空值。

这些聚合函数接受任何数据类型；键类型必须支持排序。SQL 定义是并行安全的，并包括组合和序列化函数以进行部分聚合。

### 语义与注意事项

键元组使用整个元组的一个排序方向和一个排序规则，null 键排在最后。如果完整键元组相等，则选择的值未指定；当需要确定结果时，请添加稳定的最终键。与其他 PostgreSQL 聚合函数一样，空输入返回 `NULL`。

`argm` 1.1.x 版本要求 PostgreSQL 9.6 或更高版本。该扩展可重定位。从 1.0.3 升级到 1.1.x 需要删除并重新创建扩展，因为聚合状态发生了变化；而从 1.1.0 到 1.1.1 的升级不会改变公共 SQL 接口。

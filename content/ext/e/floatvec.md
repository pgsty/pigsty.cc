---
title: "floatvec"
linkTitle: "floatvec"
description: "数组类型数学运算扩展"
weight: 4730
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pjungwir/floatvec">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pjungwir/floatvec</div>
    <div class="ext-card__desc">https://github.com/pjungwir/floatvec</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/floatvec-1.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">floatvec-1.1.1.tar.gz</div>
    <div class="ext-card__desc">floatvec-1.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`floatvec`**](/ext/e/floatvec) | `1.1.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4730  | [**`floatvec`**](/ext/e/floatvec) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_rational`](/ext/e/pg_rational) [`uint`](/ext/e/uint) [`uint128`](/ext/e/uint128) [`numeral`](/ext/e/numeral) [`aggs_for_vecs`](/ext/e/aggs_for_vecs) [`aggs_for_arrays`](/ext/e/aggs_for_arrays) [`arraymath`](/ext/e/arraymath) [`financial`](/ext/e/financial) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `floatvec` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `floatvec_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-floatvec` | - |
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
@ el8.x86_64 18 floatvec_18 floatvec_18-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/floatvec_18-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 floatvec_18 floatvec_18-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/floatvec_18-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 floatvec_18 floatvec_18-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/floatvec_18-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 floatvec_18 floatvec_18-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 19.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/floatvec_18-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 floatvec_18 floatvec_18-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 17.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/floatvec_18-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 floatvec_18 floatvec_18-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/floatvec_18-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-floatvec postgresql-18-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-18-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-floatvec postgresql-18-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-18-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-floatvec postgresql-18-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-18-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-floatvec postgresql-18-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-18-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-floatvec postgresql-18-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 25.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-18-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-floatvec postgresql-18-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 26.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-18-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-floatvec postgresql-18-floatvec_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-18-floatvec_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-floatvec postgresql-18-floatvec_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 26.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-18-floatvec_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 floatvec_17 floatvec_17-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/floatvec_17-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 floatvec_17 floatvec_17-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/floatvec_17-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 floatvec_17 floatvec_17-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/floatvec_17-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 floatvec_17 floatvec_17-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 19.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/floatvec_17-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 floatvec_17 floatvec_17-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 17.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/floatvec_17-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 floatvec_17 floatvec_17-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/floatvec_17-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-floatvec postgresql-17-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-17-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-floatvec postgresql-17-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-17-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-floatvec postgresql-17-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-17-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-floatvec postgresql-17-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 25.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-17-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-floatvec postgresql-17-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 25.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-17-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-floatvec postgresql-17-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 27.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-17-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-floatvec postgresql-17-floatvec_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-17-floatvec_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-floatvec postgresql-17-floatvec_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 26.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-17-floatvec_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 floatvec_16 floatvec_16-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/floatvec_16-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 floatvec_16 floatvec_16-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/floatvec_16-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 floatvec_16 floatvec_16-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/floatvec_16-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 floatvec_16 floatvec_16-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 19.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/floatvec_16-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 floatvec_16 floatvec_16-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/floatvec_16-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 floatvec_16 floatvec_16-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/floatvec_16-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-floatvec postgresql-16-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-16-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-floatvec postgresql-16-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-16-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-floatvec postgresql-16-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-16-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-floatvec postgresql-16-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 25.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-16-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-floatvec postgresql-16-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 25.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-16-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-floatvec postgresql-16-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 27.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-16-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-floatvec postgresql-16-floatvec_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 25.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-16-floatvec_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-floatvec postgresql-16-floatvec_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 26.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-16-floatvec_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 floatvec_15 floatvec_15-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/floatvec_15-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 floatvec_15 floatvec_15-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/floatvec_15-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 floatvec_15 floatvec_15-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 18.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/floatvec_15-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 floatvec_15 floatvec_15-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/floatvec_15-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 floatvec_15 floatvec_15-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/floatvec_15-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 floatvec_15 floatvec_15-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 19.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/floatvec_15-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-floatvec postgresql-15-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-15-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-floatvec postgresql-15-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-15-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-floatvec postgresql-15-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-15-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-floatvec postgresql-15-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 24.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-15-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-floatvec postgresql-15-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-15-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-floatvec postgresql-15-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 26.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-15-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-floatvec postgresql-15-floatvec_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-15-floatvec_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-floatvec postgresql-15-floatvec_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 25.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-15-floatvec_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 floatvec_14 floatvec_14-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 18.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/floatvec_14-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 floatvec_14 floatvec_14-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 19.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/floatvec_14-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 floatvec_14 floatvec_14-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/floatvec_14-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 floatvec_14 floatvec_14-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 18.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/floatvec_14-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 floatvec_14 floatvec_14-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 17.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/floatvec_14-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 floatvec_14 floatvec_14-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 19.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/floatvec_14-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-floatvec postgresql-14-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 23.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-14-floatvec_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-floatvec postgresql-14-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/floatvec/postgresql-14-floatvec_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-floatvec postgresql-14-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 23.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-14-floatvec_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-floatvec postgresql-14-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 24.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/floatvec/postgresql-14-floatvec_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-floatvec postgresql-14-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-14-floatvec_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-floatvec postgresql-14-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 26.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/floatvec/postgresql-14-floatvec_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-floatvec postgresql-14-floatvec_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-14-floatvec_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-floatvec postgresql-14-floatvec_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/floatvec/postgresql-14-floatvec_1.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `floatvec` 扩展的 RPM / DEB 包：

```bash
pig build pkg floatvec         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `floatvec` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install floatvec;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y floatvec -v 18  # PG 18
pig ext install -y floatvec -v 17  # PG 17
pig ext install -y floatvec -v 16  # PG 16
pig ext install -y floatvec -v 15  # PG 15
pig ext install -y floatvec -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y floatvec_18       # PG 18
dnf install -y floatvec_17       # PG 17
dnf install -y floatvec_16       # PG 16
dnf install -y floatvec_15       # PG 15
dnf install -y floatvec_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-floatvec   # PG 18
apt install -y postgresql-17-floatvec   # PG 17
apt install -y postgresql-16-floatvec   # PG 16
apt install -y postgresql-15-floatvec   # PG 15
apt install -y postgresql-14-floatvec   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION floatvec;
```



## 用法

> [floatvec: PostgreSQL 数组的逐元素算术运算](https://github.com/pjungwir/floatvec)

提供将数组视为向量进行基本算术运算的函数。支持 `SMALLINT`、`INTEGER`、`BIGINT`、`REAL` 和 `DOUBLE PRECISION` 类型。

```sql
CREATE EXTENSION floatvec;
```

### 函数

每个函数接受两个相同长度的数组，或一个数组和一个标量，或一个标量和一个数组。两个参数必须是相同类型。

| 函数 | 说明 |
|---|---|
| `vec_add(a, b)` | 逐元素加法 |
| `vec_sub(a, b)` | 逐元素减法 |
| `vec_mul(a, b)` | 逐元素乘法 |
| `vec_div(a, b)` | 逐元素除法 |
| `vec_pow(a, b)` | 逐元素乘方 |

### 示例

```sql
-- 数组 + 数组
SELECT vec_add(ARRAY[1,2,3], ARRAY[10,20,30]);  -- {11,22,33}

-- 数组 * 标量
SELECT vec_mul(ARRAY[1.0, 2.0, 3.0], 2.0);     -- {2.0, 4.0, 6.0}

-- 标量 - 数组
SELECT vec_sub(10, ARRAY[1,2,3]);               -- {9,8,7}
```

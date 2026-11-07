---
title: "qos"
linkTitle: "qos"
description: "PostgreSQL QoS 资源治理扩展（会话与查询限流/隔离）"
weight: 5240
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/appstonia/pg_qos">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">appstonia/pg_qos</div>
    <div class="ext-card__desc">https://github.com/appstonia/pg_qos</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_qos-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_qos-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_qos-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_qos`**](/ext/e/qos) | `1.1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license gpl30orlater" href="/ext/license#gpl30orlater">GPL-3.0-or-later</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5240  | [**`qos`**](/ext/e/qos) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`plan_filter`](/ext/e/plan_filter) [`pg_kpart`](/ext/e/pg_kpart) [`pg_readonly`](/ext/e/pg_readonly) [`prioritize`](/ext/e/prioritize) [`block_copy_command`](/ext/e/block_copy_command) [`safeupdate`](/ext/e/safeupdate) [`pg_command_fw`](/ext/e/pg_command_fw) [`pg_strict`](/ext/e/pg_strict) [`pg_hint_plan`](/ext/e/pg_hint_plan) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Preload; restart on upgrade; Linux affinity.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15" >}} | `pg_qos` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15" >}} | `pg_qos_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-qos` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_qos_18 pg_qos_18-1.1.0-1PGSTY.el8.x86_64.rpm pigsty 1.1.0 99.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_qos_18-1.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_qos_18 pg_qos_18-1.1.0-1PGSTY.el8.aarch64.rpm pigsty 1.1.0 98.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_qos_18-1.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_qos_18 pg_qos_18-1.1.0-1PGSTY.el9.x86_64.rpm pigsty 1.1.0 101.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_qos_18-1.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_qos_18 pg_qos_18-1.1.0-1PGSTY.el9.aarch64.rpm pigsty 1.1.0 100.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_qos_18-1.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_qos_18 pg_qos_18-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 101.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_qos_18-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_qos_18 pg_qos_18-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 100.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_qos_18-1.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 100.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 99.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 100.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 99.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 108.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 107.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 104.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 104.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 104.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-qos postgresql-18-qos_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 103.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qos/postgresql-18-qos_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_qos_17 pg_qos_17-1.1.0-1PGSTY.el8.x86_64.rpm pigsty 1.1.0 99.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_qos_17-1.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_qos_17 pg_qos_17-1.1.0-1PGSTY.el8.aarch64.rpm pigsty 1.1.0 98.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_qos_17-1.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_qos_17 pg_qos_17-1.1.0-1PGSTY.el9.x86_64.rpm pigsty 1.1.0 101.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_qos_17-1.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_qos_17 pg_qos_17-1.1.0-1PGSTY.el9.aarch64.rpm pigsty 1.1.0 100.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_qos_17-1.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_qos_17 pg_qos_17-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 101.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_qos_17-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_qos_17 pg_qos_17-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 101.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_qos_17-1.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 100.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 99.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 100.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 99.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 120.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 119.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 104.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 104.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 104.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-qos postgresql-17-qos_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 103.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qos/postgresql-17-qos_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_qos_16 pg_qos_16-1.1.0-1PGSTY.el8.x86_64.rpm pigsty 1.1.0 99.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_qos_16-1.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_qos_16 pg_qos_16-1.1.0-1PGSTY.el8.aarch64.rpm pigsty 1.1.0 98.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_qos_16-1.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_qos_16 pg_qos_16-1.1.0-1PGSTY.el9.x86_64.rpm pigsty 1.1.0 101.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_qos_16-1.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_qos_16 pg_qos_16-1.1.0-1PGSTY.el9.aarch64.rpm pigsty 1.1.0 100.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_qos_16-1.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_qos_16 pg_qos_16-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 101.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_qos_16-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_qos_16 pg_qos_16-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 100.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_qos_16-1.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 100.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 98.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 100.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 99.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 118.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 117.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 104.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 105.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 104.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-qos postgresql-16-qos_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 103.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qos/postgresql-16-qos_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_qos_15 pg_qos_15-1.1.0-1PGSTY.el8.x86_64.rpm pigsty 1.1.0 99.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_qos_15-1.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_qos_15 pg_qos_15-1.1.0-1PGSTY.el8.aarch64.rpm pigsty 1.1.0 98.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_qos_15-1.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_qos_15 pg_qos_15-1.1.0-1PGSTY.el9.x86_64.rpm pigsty 1.1.0 101.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_qos_15-1.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_qos_15 pg_qos_15-1.1.0-1PGSTY.el9.aarch64.rpm pigsty 1.1.0 101.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_qos_15-1.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_qos_15 pg_qos_15-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 101.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_qos_15-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_qos_15 pg_qos_15-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 101.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_qos_15-1.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 100.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 111.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 100.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 99.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 118.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 118.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 104.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 105.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 104.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-qos postgresql-15-qos_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 103.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/q/qos/postgresql-15-qos_1.1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_qos` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_qos         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_qos` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_qos;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_qos -v 18  # PG 18
pig ext install -y pg_qos -v 17  # PG 17
pig ext install -y pg_qos -v 16  # PG 16
pig ext install -y pg_qos -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_qos_18       # PG 18
dnf install -y pg_qos_17       # PG 17
dnf install -y pg_qos_16       # PG 16
dnf install -y pg_qos_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-qos   # PG 18
apt install -y postgresql-17-qos   # PG 17
apt install -y postgresql-16-qos   # PG 16
apt install -y postgresql-15-qos   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'qos';
```


**创建扩展**：

```sql
CREATE EXTENSION qos;
```

## 用法

来源：

- [README.md](https://github.com/appstonia/pg_qos/blob/fd3462b7fa81f8bb8aed2113a1f75bcf0e5dfe00/README.md)
- [qos.control](https://github.com/appstonia/pg_qos/blob/fd3462b7fa81f8bb8aed2113a1f75bcf0e5dfe00/qos.control)
- [qos--1.0--1.1.sql](https://github.com/appstonia/pg_qos/blob/fd3462b7fa81f8bb8aed2113a1f75bcf0e5dfe00/qos--1.0--1.1.sql)
- [qos--1.1.sql](https://github.com/appstonia/pg_qos/blob/fd3462b7fa81f8bb8aed2113a1f75bcf0e5dfe00/qos--1.1.sql)

`qos` 1.1（发行包 1.1.0）在 PostgreSQL 15+ 上按角色与数据库限制资源。先将 `qos` 加入 `shared_preload_libraries` 并重启，再由管理员创建 SQL 对象。CPU 亲和性限制要求 Linux。

### 配置限制

```sql
CREATE EXTENSION qos;
ALTER ROLE app_user SET qos.work_mem_limit = '32MB';
ALTER ROLE app_user SET qos.max_concurrent_select = '100';
ALTER ROLE app_user SET qos.max_select_rate = '10/500ms';
SELECT * FROM qos_stat_rate;
```

### 限制语义

`qos.work_mem_limit` 限制有效工作内存；`qos.cpu_core_limit` 在 Linux 上控制 CPU 亲和性，在其他平台限制并行工作进程。`qos.max_concurrent_tx`、`qos.max_concurrent_select`、`qos.max_concurrent_update`、`qos.max_concurrent_delete` 与 `qos.max_concurrent_insert` 限制并发操作。

`qos.max_tx_rate`、`qos.max_select_rate`、`qos.max_update_rate`、`qos.max_delete_rate` 与 `qos.max_insert_rate` 使用 100/1s 这样的次数/窗口组合，默认 -1 禁用各项速率限制。窗口为 100 毫秒至一天。速率或并发限制触发 SQLSTATE 54000，客户端应参考重试提示。适用的角色与数据库配置取最严格值，速率组合按规范化速率比较。

### 观测与升级

`qos_stat_rate` 暴露实时窗口，其他 `qos_stat` 视图提供活动与计数器。`qos_prometheus_metrics()` 输出 Prometheus 文本格式，计数器在服务重启后重置。1.1 用这些视图替换旧的占位函数 `qos_get_stats()`。

升级会改变共享内存布局，因此必须替换库并重启 PostgreSQL，再在各数据库执行 `ALTER EXTENSION qos UPDATE TO '1.1'`。新速率限制在配置前保持禁用。这些控制不能替代应用准入限制或操作系统隔离。

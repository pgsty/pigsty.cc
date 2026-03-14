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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_qos-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_qos-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_qos-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_qos`**](/ext/e/qos) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5240  | [**`qos`**](/ext/e/qos) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`prioritize`](/ext/e/prioritize) [`pg_permissions`](/ext/e/pg_permissions) [`pg_readonly`](/ext/e/pg_readonly) [`pg_crash`](/ext/e/pg_crash) [`pg_cooldown`](/ext/e/pg_cooldown) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_repack`](/ext/e/pg_repack) [`pgfincore`](/ext/e/pgfincore) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> requires shared_preload_libraries = 'qos'; official support PG15+


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15" >}} | `pg_qos` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15" >}} | `pg_qos_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-qos` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_qos_18 pg_qos_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_qos_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_qos_18 pg_qos_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 29.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_qos_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_qos_18 pg_qos_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_qos_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_qos_18 pg_qos_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_qos_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_qos_18 pg_qos_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 28.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_qos_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_qos_18 pg_qos_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_qos_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-qos postgresql-18-qos_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 69.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-18-qos_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-qos postgresql-18-qos_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 68.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-18-qos_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-qos postgresql-18-qos_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 69.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-18-qos_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-qos postgresql-18-qos_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 68.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-18-qos_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-qos postgresql-18-qos_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 73.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-18-qos_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-qos postgresql-18-qos_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 73.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-18-qos_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-qos postgresql-18-qos_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-18-qos_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-qos postgresql-18-qos_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 71.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-18-qos_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_qos_17 pg_qos_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_qos_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_qos_17 pg_qos_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 29.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_qos_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_qos_17 pg_qos_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 28.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_qos_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_qos_17 pg_qos_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 28.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_qos_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_qos_17 pg_qos_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_qos_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_qos_17 pg_qos_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_qos_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-qos postgresql-17-qos_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 69.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-17-qos_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-qos postgresql-17-qos_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 68.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-17-qos_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-qos postgresql-17-qos_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 69.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-17-qos_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-qos postgresql-17-qos_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 68.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-17-qos_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-qos postgresql-17-qos_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 81.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-17-qos_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-qos postgresql-17-qos_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 80.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-17-qos_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-qos postgresql-17-qos_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 71.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-17-qos_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-qos postgresql-17-qos_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 71.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-17-qos_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_qos_16 pg_qos_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_qos_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_qos_16 pg_qos_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 28.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_qos_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_qos_16 pg_qos_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_qos_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_qos_16 pg_qos_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_qos_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_qos_16 pg_qos_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_qos_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_qos_16 pg_qos_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 28.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_qos_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-qos postgresql-16-qos_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 69.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-16-qos_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-qos postgresql-16-qos_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 68.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-16-qos_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-qos postgresql-16-qos_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 69.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-16-qos_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-qos postgresql-16-qos_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 68.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-16-qos_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-qos postgresql-16-qos_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 79.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-16-qos_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-qos postgresql-16-qos_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 79.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-16-qos_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-qos postgresql-16-qos_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 71.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-16-qos_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-qos postgresql-16-qos_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 71.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-16-qos_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_qos_15 pg_qos_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 29.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_qos_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_qos_15 pg_qos_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 29.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_qos_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_qos_15 pg_qos_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 29.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_qos_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_qos_15 pg_qos_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 29.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_qos_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_qos_15 pg_qos_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 29.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_qos_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_qos_15 pg_qos_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 29.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_qos_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-qos postgresql-15-qos_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 69.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-15-qos_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-qos postgresql-15-qos_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 68.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/q/qos/postgresql-15-qos_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-qos postgresql-15-qos_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 69.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-15-qos_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-qos postgresql-15-qos_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 68.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/q/qos/postgresql-15-qos_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-qos postgresql-15-qos_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 80.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-15-qos_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-qos postgresql-15-qos_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 80.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/q/qos/postgresql-15-qos_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-qos postgresql-15-qos_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 72.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-15-qos_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-qos postgresql-15-qos_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 71.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/q/qos/postgresql-15-qos_1.0.0-1PIGSTY~noble_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_qos;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_qos -v 18  # PG 18
pig ext install -y pg_qos -v 17  # PG 17
pig ext install -y pg_qos -v 16  # PG 16
pig ext install -y pg_qos -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_qos_18       # PG 18
dnf install -y pg_qos_17       # PG 17
dnf install -y pg_qos_16       # PG 16
dnf install -y pg_qos_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-qos   # PG 18
apt install -y postgresql-17-qos   # PG 17
apt install -y postgresql-16-qos   # PG 16
apt install -y postgresql-15-qos   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'qos';
```


**创建扩展**：

```sql
CREATE EXTENSION qos;
```



## 用法

> [qos: PostgreSQL 会话和查询的 QoS 资源治理扩展](https://github.com/appstonia/pg_qos)

`qos` 扩展为 PostgreSQL 提供服务质量（QoS）资源治理，允许管理员对每个角色和每个数据库设置内存使用、CPU 核心数和并发事务/语句的限制。

### 配置参数

| 参数 | 类型 | 描述 |
|-----------|------|-------------|
| `qos.work_mem_limit` | 字节 | 每个会话的最大有效 `work_mem` |
| `qos.cpu_core_limit` | 整数 | 会话可用的最大 CPU 核心数 |
| `qos.max_concurrent_tx` | 整数 | 最大并发事务数 |
| `qos.max_concurrent_select` | 整数 | 最大并发 SELECT 语句数 |
| `qos.max_concurrent_update` | 整数 | 最大并发 UPDATE 语句数 |
| `qos.max_concurrent_delete` | 整数 | 最大并发 DELETE 语句数 |
| `qos.max_concurrent_insert` | 整数 | 最大并发 INSERT 语句数 |

### 角色级限制

```sql
ALTER ROLE app_user SET qos.work_mem_limit = '32MB';
ALTER ROLE app_user SET qos.cpu_core_limit = '2';
ALTER ROLE app_user SET qos.max_concurrent_select = '100';
```

### 数据库级限制

```sql
ALTER DATABASE appdb SET qos.max_concurrent_tx = '200';
```

### 角色+数据库组合限制

```sql
ALTER ROLE app_user IN DATABASE appdb SET qos.work_mem_limit = '4MB';
ALTER ROLE app_user IN DATABASE appdb SET qos.max_concurrent_update = '10';
```

### 执行行为

- **工作内存**：拦截 `SET work_mem` 并拒绝超过配置限制的值
- **CPU 限制**（仅 Linux）：通过 CPU 亲和性将后端绑定到 N 个 CPU 核心；在非 Linux 平台上改为限制并行工作进程
- **并发**：执行器钩子按类型跟踪活动事务/语句；违规将阻止执行

### 可观测性

```sql
SET client_min_messages = 'debug1';  -- 启用 QoS 事件的调试输出
```

角色级和数据库级设置中最严格的组合生效。需要 `shared_preload_libraries = 'qos'` 和 PostgreSQL 15+。

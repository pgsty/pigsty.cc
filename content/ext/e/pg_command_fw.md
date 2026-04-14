---
title: "pg_command_fw"
linkTitle: "pg_command_fw"
description: "PostgreSQL 的 DDL 与 utility 命令防火墙"
weight: 7400
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rustwizard/pg_command_fw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rustwizard/pg_command_fw</div>
    <div class="ext-card__desc">https://github.com/rustwizard/pg_command_fw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_command_fw-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_command_fw-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_command_fw-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_command_fw`**](/ext/e/pg_command_fw) | `0.1.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license bsd3clause" href="/ext/license#bsd3clause">BSD-3-Clause</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7400  | [**`pg_command_fw`**](/ext/e/pg_command_fw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgaudit`](/ext/e/pgaudit) [`pgextwlist`](/ext/e/pgextwlist) [`login_hook`](/ext/e/login_hook) [`set_user`](/ext/e/set_user) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires shared_preload_libraries = pg_command_fw to activate hooks for all sessions.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15" >}} | `pg_command_fw` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15" >}} | `pg_command_fw_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-command-fw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_command_fw_18 pg_command_fw_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 313.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_command_fw_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_command_fw_18 pg_command_fw_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 204.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_command_fw_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_command_fw_18 pg_command_fw_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 329.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_command_fw_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_command_fw_18 pg_command_fw_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 216.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_command_fw_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_command_fw_18 pg_command_fw_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 329.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_command_fw_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_command_fw_18 pg_command_fw_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 217.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_command_fw_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-command-fw postgresql-18-pg-command-fw_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 255.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-command-fw/postgresql-18-pg-command-fw_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-command-fw postgresql-18-pg-command-fw_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 155.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-command-fw/postgresql-18-pg-command-fw_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-command-fw postgresql-18-pg-command-fw_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 255.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-command-fw/postgresql-18-pg-command-fw_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-command-fw postgresql-18-pg-command-fw_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 155.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-command-fw/postgresql-18-pg-command-fw_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-command-fw postgresql-18-pg-command-fw_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 288.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-command-fw/postgresql-18-pg-command-fw_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-command-fw postgresql-18-pg-command-fw_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 179.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-command-fw/postgresql-18-pg-command-fw_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-command-fw postgresql-18-pg-command-fw_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 286.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-command-fw/postgresql-18-pg-command-fw_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-command-fw postgresql-18-pg-command-fw_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 178.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-command-fw/postgresql-18-pg-command-fw_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_command_fw_17 pg_command_fw_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 313.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_command_fw_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_command_fw_17 pg_command_fw_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 204.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_command_fw_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_command_fw_17 pg_command_fw_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 329.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_command_fw_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_command_fw_17 pg_command_fw_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 216.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_command_fw_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_command_fw_17 pg_command_fw_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 329.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_command_fw_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_command_fw_17 pg_command_fw_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 217.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_command_fw_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-command-fw postgresql-17-pg-command-fw_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 255.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-command-fw/postgresql-17-pg-command-fw_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-command-fw postgresql-17-pg-command-fw_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 155.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-command-fw/postgresql-17-pg-command-fw_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-command-fw postgresql-17-pg-command-fw_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 254.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-command-fw/postgresql-17-pg-command-fw_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-command-fw postgresql-17-pg-command-fw_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 155.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-command-fw/postgresql-17-pg-command-fw_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-command-fw postgresql-17-pg-command-fw_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 288.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-command-fw/postgresql-17-pg-command-fw_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-command-fw postgresql-17-pg-command-fw_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 179.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-command-fw/postgresql-17-pg-command-fw_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-command-fw postgresql-17-pg-command-fw_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 285.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-command-fw/postgresql-17-pg-command-fw_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-command-fw postgresql-17-pg-command-fw_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 178.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-command-fw/postgresql-17-pg-command-fw_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_command_fw_16 pg_command_fw_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 313.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_command_fw_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_command_fw_16 pg_command_fw_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 204.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_command_fw_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_command_fw_16 pg_command_fw_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 329.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_command_fw_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_command_fw_16 pg_command_fw_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 216.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_command_fw_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_command_fw_16 pg_command_fw_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 328.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_command_fw_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_command_fw_16 pg_command_fw_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 217.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_command_fw_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-command-fw postgresql-16-pg-command-fw_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 255.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-command-fw/postgresql-16-pg-command-fw_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-command-fw postgresql-16-pg-command-fw_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 155.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-command-fw/postgresql-16-pg-command-fw_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-command-fw postgresql-16-pg-command-fw_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 255.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-command-fw/postgresql-16-pg-command-fw_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-command-fw postgresql-16-pg-command-fw_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 155.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-command-fw/postgresql-16-pg-command-fw_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-command-fw postgresql-16-pg-command-fw_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 288.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-command-fw/postgresql-16-pg-command-fw_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-command-fw postgresql-16-pg-command-fw_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 179.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-command-fw/postgresql-16-pg-command-fw_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-command-fw postgresql-16-pg-command-fw_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 286.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-command-fw/postgresql-16-pg-command-fw_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-command-fw postgresql-16-pg-command-fw_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 178.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-command-fw/postgresql-16-pg-command-fw_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_command_fw_15 pg_command_fw_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 311.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_command_fw_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_command_fw_15 pg_command_fw_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 202.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_command_fw_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_command_fw_15 pg_command_fw_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 327.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_command_fw_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_command_fw_15 pg_command_fw_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 215.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_command_fw_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_command_fw_15 pg_command_fw_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 327.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_command_fw_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_command_fw_15 pg_command_fw_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 216.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_command_fw_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-command-fw postgresql-15-pg-command-fw_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 254.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-command-fw/postgresql-15-pg-command-fw_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-command-fw postgresql-15-pg-command-fw_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 153.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-command-fw/postgresql-15-pg-command-fw_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-command-fw postgresql-15-pg-command-fw_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 254.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-command-fw/postgresql-15-pg-command-fw_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-command-fw postgresql-15-pg-command-fw_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 153.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-command-fw/postgresql-15-pg-command-fw_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-command-fw postgresql-15-pg-command-fw_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 287.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-command-fw/postgresql-15-pg-command-fw_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-command-fw postgresql-15-pg-command-fw_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 178.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-command-fw/postgresql-15-pg-command-fw_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-command-fw postgresql-15-pg-command-fw_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 284.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-command-fw/postgresql-15-pg-command-fw_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-command-fw postgresql-15-pg-command-fw_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 176.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-command-fw/postgresql-15-pg-command-fw_0.1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_command_fw` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_command_fw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_command_fw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_command_fw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_command_fw -v 18  # PG 18
pig ext install -y pg_command_fw -v 17  # PG 17
pig ext install -y pg_command_fw -v 16  # PG 16
pig ext install -y pg_command_fw -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_command_fw_18       # PG 18
dnf install -y pg_command_fw_17       # PG 17
dnf install -y pg_command_fw_16       # PG 16
dnf install -y pg_command_fw_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-command-fw   # PG 18
apt install -y postgresql-17-pg-command-fw   # PG 17
apt install -y postgresql-16-pg-command-fw   # PG 16
apt install -y postgresql-15-pg-command-fw   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_command_fw';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_command_fw;
```


## 用法

> 语法：
>
> ```sql
> CREATE EXTENSION pg_command_fw;
> ALTER SYSTEM SET pg_command_fw.block_truncate = on;
> ALTER SYSTEM SET pg_command_fw.production_schemas = 'public,payments';
> SELECT pg_reload_conf();
> ```
>
> 来源：[README](https://github.com/rustwizard/pg_command_fw)

`pg_command_fw` 是 PostgreSQL 命令防火墙。它通过 `ProcessUtility` 钩子拦截 DDL 和 utility 命令，并通过 post-parse analyze 钩子拦截部分危险的内置文件读取函数。每个命令类别都由独立的 GUC 控制。

## 安装

扩展必须预加载：

```ini
shared_preload_libraries = 'pg_command_fw'
```

然后在数据库中启用：

```sql
CREATE EXTENSION pg_command_fw;
```

## 命令类别

上游 README 记录了以下防火墙类别：

- `TRUNCATE`
- `DROP TABLE`
- `ALTER SYSTEM`
- `LOAD`
- `COPY ... PROGRAM`
- 普通 `COPY`
- `pg_read_file()`、`pg_read_binary_file()` 和 `pg_stat_file()`

其中部分类别仅阻止非超级用户，另一些则连超级用户也会阻止。只有当超级用户未被列入 `pg_command_fw.blocked_roles` 时，才会免于非超级用户类检查。

## 重要 GUC

- `pg_command_fw.enabled` 用于整体启用或禁用所有检查
- `pg_command_fw.block_truncate`
- `pg_command_fw.block_drop_table`
- `pg_command_fw.production_schemas`
- `pg_command_fw.block_alter_system`
- `pg_command_fw.block_load`
- `pg_command_fw.block_copy_program`
- `pg_command_fw.block_copy`
- `pg_command_fw.block_read_file`
- `pg_command_fw.blocked_roles`
- `pg_command_fw.hint`
- `pg_command_fw.audit_log_enabled`

## 审计日志

扩展会将拦截到的命令写入 `command_fw.audit_log`。README 中描述的字段包括：

- 时间戳
- 会话用户和当前用户
- 原始查询文本
- 命令类型
- 目标模式或对象
- 客户端地址
- 是否被阻止
- 内部阻止原因

## 示例

在生产模式下阻止 `TRUNCATE` 和 `DROP TABLE`：

```sql
ALTER SYSTEM SET pg_command_fw.block_truncate = on;
ALTER SYSTEM SET pg_command_fw.block_drop_table = on;
ALTER SYSTEM SET pg_command_fw.production_schemas = 'public,payments';
ALTER SYSTEM SET pg_command_fw.hint = 'Contact your DBA to request access';
SELECT pg_reload_conf();
```

阻止特定角色执行任何受防火墙管控的命令：

```sql
ALTER SYSTEM SET pg_command_fw.blocked_roles = 'app_deploy';
SELECT pg_reload_conf();
```

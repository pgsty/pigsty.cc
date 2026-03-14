---
title: "session_variable"
linkTitle: "session_variable"
description: "Oracle兼容的会话变量/常量操作函数"
weight: 9120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/splendiddata/session_variable">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">splendiddata/session_variable</div>
    <div class="ext-card__desc">https://github.com/splendiddata/session_variable</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/session_variable-3.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">session_variable-3.4.tar.gz</div>
    <div class="ext-card__desc">session_variable-3.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`session_variable`**](/ext/e/session_variable) | `3.4` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9120  | [**`session_variable`**](/ext/e/session_variable) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `session_variable` |
{.ext-table}

| **相关扩展** | [`orafce`](/ext/e/orafce) [`pgtt`](/ext/e/pgtt) [`pg_statement_rollback`](/ext/e/pg_statement_rollback) [`plpgsql`](/ext/e/plpgsql) [`set_user`](/ext/e/set_user) [`oracle_fdw`](/ext/e/oracle_fdw) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`babelfishpg_common`](/ext/e/babelfishpg_common) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.4` | {{< pgvers "18,17,16,15,14" >}} | `session_variable` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.4` | {{< pgvers "18,17,16,15,14" >}} | `session_variable_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-session-variable` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| el8.aarch64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| el9.x86_64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| el9.aarch64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| el10.x86_64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| el10.aarch64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| d12.x86_64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| d12.aarch64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| d13.x86_64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| d13.aarch64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| u22.x86_64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| u22.aarch64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| u24.x86_64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
| u24.aarch64 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 | AVAIL PIGSTY 3.4 1 |
@ el8.x86_64 18 session_variable_18 session_variable_18-3.4-1PIGSTY.el8.x86_64.rpm pigsty 3.4 35.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_18-3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 session_variable_18 session_variable_18-3.4-1PIGSTY.el8.aarch64.rpm pigsty 3.4 34.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_18-3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 session_variable_18 session_variable_18-3.4-1PIGSTY.el9.x86_64.rpm pigsty 3.4 34.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_18-3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 session_variable_18 session_variable_18-3.4-1PIGSTY.el9.aarch64.rpm pigsty 3.4 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_18-3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 session_variable_18 session_variable_18-3.4-1PIGSTY.el10.x86_64.rpm pigsty 3.4 34.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_18-3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 session_variable_18 session_variable_18-3.4-1PIGSTY.el10.aarch64.rpm pigsty 3.4 34.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_18-3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.4-1PIGSTY~bookworm_amd64.deb pigsty 3.4 62.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-18-session-variable_3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.4-1PIGSTY~bookworm_arm64.deb pigsty 3.4 61.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-18-session-variable_3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.4-1PIGSTY~trixie_amd64.deb pigsty 3.4 62.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-18-session-variable_3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.4-1PIGSTY~trixie_arm64.deb pigsty 3.4 61.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-18-session-variable_3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.4-1PIGSTY~jammy_amd64.deb pigsty 3.4 66.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-18-session-variable_3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.4-1PIGSTY~jammy_arm64.deb pigsty 3.4 66.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-18-session-variable_3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.4-1PIGSTY~noble_amd64.deb pigsty 3.4 65.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-18-session-variable_3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.4-1PIGSTY~noble_arm64.deb pigsty 3.4 64.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-18-session-variable_3.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 session_variable_17 session_variable_17-3.4-1PIGSTY.el8.x86_64.rpm pigsty 3.4 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_17-3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 session_variable_17 session_variable_17-3.4-1PIGSTY.el8.aarch64.rpm pigsty 3.4 34.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_17-3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 session_variable_17 session_variable_17-3.4-1PIGSTY.el9.x86_64.rpm pigsty 3.4 34.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_17-3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 session_variable_17 session_variable_17-3.4-1PIGSTY.el9.aarch64.rpm pigsty 3.4 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_17-3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 session_variable_17 session_variable_17-3.4-1PIGSTY.el10.x86_64.rpm pigsty 3.4 34.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_17-3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 session_variable_17 session_variable_17-3.4-1PIGSTY.el10.aarch64.rpm pigsty 3.4 34.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_17-3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.4-1PIGSTY~bookworm_amd64.deb pigsty 3.4 62.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-17-session-variable_3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.4-1PIGSTY~bookworm_arm64.deb pigsty 3.4 61.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-17-session-variable_3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.4-1PIGSTY~trixie_amd64.deb pigsty 3.4 62.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-17-session-variable_3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.4-1PIGSTY~trixie_arm64.deb pigsty 3.4 61.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-17-session-variable_3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.4-1PIGSTY~jammy_amd64.deb pigsty 3.4 72.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-17-session-variable_3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.4-1PIGSTY~jammy_arm64.deb pigsty 3.4 71.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-17-session-variable_3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.4-1PIGSTY~noble_amd64.deb pigsty 3.4 65.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-17-session-variable_3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.4-1PIGSTY~noble_arm64.deb pigsty 3.4 64.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-17-session-variable_3.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 session_variable_16 session_variable_16-3.4-1PIGSTY.el8.x86_64.rpm pigsty 3.4 35.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_16-3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 session_variable_16 session_variable_16-3.4-1PIGSTY.el8.aarch64.rpm pigsty 3.4 34.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_16-3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 session_variable_16 session_variable_16-3.4-1PIGSTY.el9.x86_64.rpm pigsty 3.4 34.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_16-3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 session_variable_16 session_variable_16-3.4-1PIGSTY.el9.aarch64.rpm pigsty 3.4 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_16-3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 session_variable_16 session_variable_16-3.4-1PIGSTY.el10.x86_64.rpm pigsty 3.4 34.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_16-3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 session_variable_16 session_variable_16-3.4-1PIGSTY.el10.aarch64.rpm pigsty 3.4 34.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_16-3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.4-1PIGSTY~bookworm_amd64.deb pigsty 3.4 62.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-16-session-variable_3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.4-1PIGSTY~bookworm_arm64.deb pigsty 3.4 61.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-16-session-variable_3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.4-1PIGSTY~trixie_amd64.deb pigsty 3.4 62.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-16-session-variable_3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.4-1PIGSTY~trixie_arm64.deb pigsty 3.4 61.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-16-session-variable_3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.4-1PIGSTY~jammy_amd64.deb pigsty 3.4 71.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-16-session-variable_3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.4-1PIGSTY~jammy_arm64.deb pigsty 3.4 71.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-16-session-variable_3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.4-1PIGSTY~noble_amd64.deb pigsty 3.4 65.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-16-session-variable_3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.4-1PIGSTY~noble_arm64.deb pigsty 3.4 64.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-16-session-variable_3.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 session_variable_15 session_variable_15-3.4-1PIGSTY.el8.x86_64.rpm pigsty 3.4 35.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_15-3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 session_variable_15 session_variable_15-3.4-1PIGSTY.el8.aarch64.rpm pigsty 3.4 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_15-3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 session_variable_15 session_variable_15-3.4-1PIGSTY.el9.x86_64.rpm pigsty 3.4 34.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_15-3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 session_variable_15 session_variable_15-3.4-1PIGSTY.el9.aarch64.rpm pigsty 3.4 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_15-3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 session_variable_15 session_variable_15-3.4-1PIGSTY.el10.x86_64.rpm pigsty 3.4 35.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_15-3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 session_variable_15 session_variable_15-3.4-1PIGSTY.el10.aarch64.rpm pigsty 3.4 34.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_15-3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.4-1PIGSTY~bookworm_amd64.deb pigsty 3.4 62.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-15-session-variable_3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.4-1PIGSTY~bookworm_arm64.deb pigsty 3.4 62.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-15-session-variable_3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.4-1PIGSTY~trixie_amd64.deb pigsty 3.4 62.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-15-session-variable_3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.4-1PIGSTY~trixie_arm64.deb pigsty 3.4 62.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-15-session-variable_3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.4-1PIGSTY~jammy_amd64.deb pigsty 3.4 71.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-15-session-variable_3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.4-1PIGSTY~jammy_arm64.deb pigsty 3.4 71.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-15-session-variable_3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.4-1PIGSTY~noble_amd64.deb pigsty 3.4 65.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-15-session-variable_3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.4-1PIGSTY~noble_arm64.deb pigsty 3.4 64.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-15-session-variable_3.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 session_variable_14 session_variable_14-3.4-1PIGSTY.el8.x86_64.rpm pigsty 3.4 35.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_14-3.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 session_variable_14 session_variable_14-3.4-1PIGSTY.el8.aarch64.rpm pigsty 3.4 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_14-3.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 session_variable_14 session_variable_14-3.4-1PIGSTY.el9.x86_64.rpm pigsty 3.4 34.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_14-3.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 session_variable_14 session_variable_14-3.4-1PIGSTY.el9.aarch64.rpm pigsty 3.4 34.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_14-3.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 session_variable_14 session_variable_14-3.4-1PIGSTY.el10.x86_64.rpm pigsty 3.4 35.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_14-3.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 session_variable_14 session_variable_14-3.4-1PIGSTY.el10.aarch64.rpm pigsty 3.4 34.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_14-3.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.4-1PIGSTY~bookworm_amd64.deb pigsty 3.4 62.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-14-session-variable_3.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.4-1PIGSTY~bookworm_arm64.deb pigsty 3.4 62.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-14-session-variable_3.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.4-1PIGSTY~trixie_amd64.deb pigsty 3.4 62.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-14-session-variable_3.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.4-1PIGSTY~trixie_arm64.deb pigsty 3.4 62.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-14-session-variable_3.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.4-1PIGSTY~jammy_amd64.deb pigsty 3.4 70.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-14-session-variable_3.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.4-1PIGSTY~jammy_arm64.deb pigsty 3.4 70.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-14-session-variable_3.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.4-1PIGSTY~noble_amd64.deb pigsty 3.4 65.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-14-session-variable_3.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.4-1PIGSTY~noble_arm64.deb pigsty 3.4 64.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-14-session-variable_3.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `session_variable` 扩展的 RPM / DEB 包：

```bash
pig build pkg session_variable         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `session_variable` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install session_variable;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y session_variable -v 18  # PG 18
pig ext install -y session_variable -v 17  # PG 17
pig ext install -y session_variable -v 16  # PG 16
pig ext install -y session_variable -v 15  # PG 15
pig ext install -y session_variable -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y session_variable_18       # PG 18
dnf install -y session_variable_17       # PG 17
dnf install -y session_variable_16       # PG 16
dnf install -y session_variable_15       # PG 15
dnf install -y session_variable_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-session-variable   # PG 18
apt install -y postgresql-17-session-variable   # PG 17
apt install -y postgresql-16-session-variable   # PG 16
apt install -y postgresql-15-session-variable   # PG 15
apt install -y postgresql-14-session-variable   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION session_variable;
```



## 用法

> [session_variable: 会话变量和常量的注册与操作](https://github.com/splendiddata/session_variable)

### 创建变量和常量

```sql
CREATE EXTENSION session_variable;

-- 创建带初始值的变量
SELECT session_variable.create_variable('my_var', 'text'::regtype, 'initial text'::text);

-- 创建初始值为 NULL 的变量
SELECT session_variable.create_variable('my_date_var', 'date'::regtype);

-- 创建常量（不能通过 set() 更改）
SELECT session_variable.create_constant('my_env', 'text'::regtype, 'Production'::text);
```

### 获取和设置值

```sql
-- 获取变量值（第二个参数是类型提示）
SELECT session_variable.get('my_var', null::text);

-- 设置变量值（返回之前的值）
SELECT session_variable.set('my_var', 'new text'::text);
```

### 在 PL/pgSQL 中使用

```sql
DO $$
DECLARE
    my_field text;
BEGIN
    my_field := session_variable.get('my_var', my_field);
    RAISE NOTICE 'Value: %', my_field;
END
$$ LANGUAGE plpgsql;
```

### 管理函数

```sql
-- 修改初始/常量值（影响新会话）
SELECT session_variable.alter_value('my_env', 'Development'::text);

-- 从数据库定义重新加载所有变量
SELECT session_variable.init();

-- 删除变量或常量
SELECT session_variable.drop('my_var');

-- 检查变量是否存在
SELECT session_variable.exists('my_var');

-- 获取变量类型
SELECT session_variable.type_of('my_var');
```

### 关键行为

- 变量在数据库级别定义；每个会话获取本地副本
- `set()` 仅更改会话本地副本；其他会话不受影响
- `alter_value()` 更改存储的值；新会话将看到它，现有会话需要 `init()` 来刷新
- 常量不能通过 `set()` 更改，只能通过 `alter_value()`
- 变量和常量名称在两种类型之间必须唯一

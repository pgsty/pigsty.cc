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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/session_variable-3.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">session_variable-3.6.tar.gz</div>
    <div class="ext-card__desc">session_variable-3.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`session_variable`**](/ext/e/session_variable) | `3.6` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9120  | [**`session_variable`**](/ext/e/session_variable) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `session_variable` |
{.ext-table}

| **相关扩展** | [`orafce`](/ext/e/orafce) [`db2fce`](/ext/e/db2fce) [`pgtt`](/ext/e/pgtt) [`ivorysql_ora`](/ext/e/ivorysql_ora) [`pg_statement_rollback`](/ext/e/pg_statement_rollback) [`pg_variables`](/ext/e/pg_variables) [`omni_var`](/ext/e/omni_var) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.6` | {{< pgvers "18,17,16,15,14" >}} | `session_variable` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.6` | {{< pgvers "18,17,16,15,14" >}} | `session_variable_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-session-variable` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| el8.aarch64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| el9.x86_64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| el9.aarch64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| el10.x86_64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| el10.aarch64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| d12.x86_64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| d12.aarch64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| d13.x86_64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| d13.aarch64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| u22.x86_64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| u22.aarch64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| u24.x86_64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| u24.aarch64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| u26.x86_64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
| u26.aarch64 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 | AVAIL PIGSTY 3.6 1 |
@ el8.x86_64 18 session_variable_18 session_variable_18-3.6-1PGSTY.el8.x86_64.rpm pigsty 3.6 61.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_18-3.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 session_variable_18 session_variable_18-3.6-1PGSTY.el8.aarch64.rpm pigsty 3.6 60.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_18-3.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 session_variable_18 session_variable_18-3.6-1PGSTY.el9.x86_64.rpm pigsty 3.6 61.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_18-3.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 session_variable_18 session_variable_18-3.6-1PGSTY.el9.aarch64.rpm pigsty 3.6 60.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_18-3.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 session_variable_18 session_variable_18-3.6-1PGSTY.el10.x86_64.rpm pigsty 3.6 61.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_18-3.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 session_variable_18 session_variable_18-3.6-1PGSTY.el10.aarch64.rpm pigsty 3.6 60.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_18-3.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~bookworm_amd64.deb pigsty 3.6 58.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~bookworm_arm64.deb pigsty 3.6 57.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~trixie_amd64.deb pigsty 3.6 58.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~trixie_arm64.deb pigsty 3.6 57.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~jammy_amd64.deb pigsty 3.6 61.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~jammy_arm64.deb pigsty 3.6 61.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~noble_amd64.deb pigsty 3.6 60.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~noble_arm64.deb pigsty 3.6 59.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~resolute_amd64.deb pigsty 3.6 59.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-session-variable postgresql-18-session-variable_3.6-1PGSTY~resolute_arm64.deb pigsty 3.6 58.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-18-session-variable_3.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 session_variable_17 session_variable_17-3.6-1PGSTY.el8.x86_64.rpm pigsty 3.6 61.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_17-3.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 session_variable_17 session_variable_17-3.6-1PGSTY.el8.aarch64.rpm pigsty 3.6 59.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_17-3.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 session_variable_17 session_variable_17-3.6-1PGSTY.el9.x86_64.rpm pigsty 3.6 61.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_17-3.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 session_variable_17 session_variable_17-3.6-1PGSTY.el9.aarch64.rpm pigsty 3.6 60.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_17-3.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 session_variable_17 session_variable_17-3.6-1PGSTY.el10.x86_64.rpm pigsty 3.6 61.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_17-3.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 session_variable_17 session_variable_17-3.6-1PGSTY.el10.aarch64.rpm pigsty 3.6 60.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_17-3.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~bookworm_amd64.deb pigsty 3.6 58.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~bookworm_arm64.deb pigsty 3.6 57.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~trixie_amd64.deb pigsty 3.6 58.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~trixie_arm64.deb pigsty 3.6 57.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~jammy_amd64.deb pigsty 3.6 67.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~jammy_arm64.deb pigsty 3.6 66.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~noble_amd64.deb pigsty 3.6 60.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~noble_arm64.deb pigsty 3.6 59.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~resolute_amd64.deb pigsty 3.6 59.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-session-variable postgresql-17-session-variable_3.6-1PGSTY~resolute_arm64.deb pigsty 3.6 58.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-17-session-variable_3.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 session_variable_16 session_variable_16-3.6-1PGSTY.el8.x86_64.rpm pigsty 3.6 61.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_16-3.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 session_variable_16 session_variable_16-3.6-1PGSTY.el8.aarch64.rpm pigsty 3.6 60.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_16-3.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 session_variable_16 session_variable_16-3.6-1PGSTY.el9.x86_64.rpm pigsty 3.6 61.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_16-3.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 session_variable_16 session_variable_16-3.6-1PGSTY.el9.aarch64.rpm pigsty 3.6 60.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_16-3.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 session_variable_16 session_variable_16-3.6-1PGSTY.el10.x86_64.rpm pigsty 3.6 61.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_16-3.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 session_variable_16 session_variable_16-3.6-1PGSTY.el10.aarch64.rpm pigsty 3.6 60.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_16-3.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~bookworm_amd64.deb pigsty 3.6 58.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~bookworm_arm64.deb pigsty 3.6 57.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~trixie_amd64.deb pigsty 3.6 58.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~trixie_arm64.deb pigsty 3.6 57.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~jammy_amd64.deb pigsty 3.6 66.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~jammy_arm64.deb pigsty 3.6 66.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~noble_amd64.deb pigsty 3.6 60.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~noble_arm64.deb pigsty 3.6 59.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~resolute_amd64.deb pigsty 3.6 59.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-session-variable postgresql-16-session-variable_3.6-1PGSTY~resolute_arm64.deb pigsty 3.6 58.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-16-session-variable_3.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 session_variable_15 session_variable_15-3.6-1PGSTY.el8.x86_64.rpm pigsty 3.6 61.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_15-3.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 session_variable_15 session_variable_15-3.6-1PGSTY.el8.aarch64.rpm pigsty 3.6 60.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_15-3.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 session_variable_15 session_variable_15-3.6-1PGSTY.el9.x86_64.rpm pigsty 3.6 62.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_15-3.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 session_variable_15 session_variable_15-3.6-1PGSTY.el9.aarch64.rpm pigsty 3.6 60.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_15-3.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 session_variable_15 session_variable_15-3.6-1PGSTY.el10.x86_64.rpm pigsty 3.6 62.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_15-3.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 session_variable_15 session_variable_15-3.6-1PGSTY.el10.aarch64.rpm pigsty 3.6 61.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_15-3.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~bookworm_amd64.deb pigsty 3.6 58.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~bookworm_arm64.deb pigsty 3.6 57.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~trixie_amd64.deb pigsty 3.6 58.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~trixie_arm64.deb pigsty 3.6 57.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~jammy_amd64.deb pigsty 3.6 67.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~jammy_arm64.deb pigsty 3.6 66.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~noble_amd64.deb pigsty 3.6 60.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~noble_arm64.deb pigsty 3.6 60.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~resolute_amd64.deb pigsty 3.6 60.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-session-variable postgresql-15-session-variable_3.6-1PGSTY~resolute_arm64.deb pigsty 3.6 59.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-15-session-variable_3.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 session_variable_14 session_variable_14-3.6-1PGSTY.el8.x86_64.rpm pigsty 3.6 61.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/session_variable_14-3.6-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 session_variable_14 session_variable_14-3.6-1PGSTY.el8.aarch64.rpm pigsty 3.6 60.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/session_variable_14-3.6-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 session_variable_14 session_variable_14-3.6-1PGSTY.el9.x86_64.rpm pigsty 3.6 62.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/session_variable_14-3.6-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 session_variable_14 session_variable_14-3.6-1PGSTY.el9.aarch64.rpm pigsty 3.6 60.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/session_variable_14-3.6-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 session_variable_14 session_variable_14-3.6-1PGSTY.el10.x86_64.rpm pigsty 3.6 62.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/session_variable_14-3.6-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 session_variable_14 session_variable_14-3.6-1PGSTY.el10.aarch64.rpm pigsty 3.6 61.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/session_variable_14-3.6-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~bookworm_amd64.deb pigsty 3.6 58.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~bookworm_arm64.deb pigsty 3.6 57.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~trixie_amd64.deb pigsty 3.6 58.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~trixie_arm64.deb pigsty 3.6 57.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~jammy_amd64.deb pigsty 3.6 66.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~jammy_arm64.deb pigsty 3.6 65.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~noble_amd64.deb pigsty 3.6 60.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~noble_arm64.deb pigsty 3.6 59.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~resolute_amd64.deb pigsty 3.6 60.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-session-variable postgresql-14-session-variable_3.6-1PGSTY~resolute_arm64.deb pigsty 3.6 59.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/s/session-variable/postgresql-14-session-variable_3.6-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install session_variable;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y session_variable -v 18  # PG 18
pig ext install -y session_variable -v 17  # PG 17
pig ext install -y session_variable -v 16  # PG 16
pig ext install -y session_variable -v 15  # PG 15
pig ext install -y session_variable -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y session_variable_18       # PG 18
dnf install -y session_variable_17       # PG 17
dnf install -y session_variable_16       # PG 16
dnf install -y session_variable_15       # PG 15
dnf install -y session_variable_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-session-variable   # PG 18
apt install -y postgresql-17-session-variable   # PG 17
apt install -y postgresql-16-session-variable   # PG 16
apt install -y postgresql-15-session-variable   # PG 15
apt install -y postgresql-14-session-variable   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION session_variable;
```

## 用法

来源：

- [3.6 README](https://github.com/splendiddata/session_variable/blob/3.6/README.md)
- [3.6 SQL API](https://github.com/splendiddata/session_variable/blob/3.6/session_variable--3.6.sql)
- [3.6 control file](https://github.com/splendiddata/session_variable/blob/3.6/session_variable.control)
- [3.6 initialization code](https://github.com/splendiddata/session_variable/blob/3.6/session_variable.c)

`session_variable` 定义数据库级变量和常量，并为每个会话保存独立的值。修改会话本地值不会影响其他连接。

### 创建变量和常量

```sql
CREATE EXTENSION session_variable;

-- Create a variable with initial value
SELECT session_variable.create_variable('my_var', 'text'::regtype, 'initial text'::text);

-- Create a variable with NULL initial value
SELECT session_variable.create_variable('my_date_var', 'date'::regtype);

-- Create a constant (cannot be changed via set())
SELECT session_variable.create_constant('my_env', 'text'::regtype, 'Production'::text);
```

### 获取和设置值

```sql
-- Get variable value (second arg is type hint)
SELECT session_variable.get('my_var', null::text);

-- Set variable value (returns true on success)
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
-- Alter the initial/constant value (affects new sessions)
SELECT session_variable.alter_value('my_env', 'Development'::text);

-- Reload all variables from database definitions
SELECT session_variable.init();

-- Drop a variable or constant
SELECT session_variable.drop('my_var');

-- Check if a variable exists
SELECT session_variable.exists('my_var');

-- Get the type of a variable
SELECT session_variable.type_of('my_var');
```

### 关键行为

- 变量在数据库级别定义；每个会话获取本地副本
- `set()` 仅更改会话本地副本；其他会话不受影响
- `alter_value()` 更改存储的值；新会话将看到它，现有会话需要 `init()` 来刷新
- 常量不能通过 `set()` 更改，只能通过 `alter_value()`
- 变量和常量名称在两种类型之间必须唯一

### 权限、读取与版本边界

由超级用户在 `session_variable` 模式中安装这个不可重定位的扩展；上述 SQL 工作流无需共享预加载或重启。管理定义应授予 `session_variable_administrator_role`，普通访问应授予 `session_variable_user_role`。管理员角色包含用户角色。

`session_variable.set` 和 `session_variable.alter_value` 成功时返回布尔值 true，不返回原值。成功修改存储定义后，调用者立即看到变化，提交后启动的会话也能看到变化；已有会话保留本地状态，直到 `session_variable.init()` 重置所有值。定义保存在 `session_variable.variables` 中，并纳入逻辑备份。

`session_variable.get_stable` 可能在语句执行期间缓存结果；如果触发器在同一语句中修改该值，应使用普通读取函数。`session_variable.get_constant` 标记为 IMMUTABLE，在管理员修改常量后可能返回缓存结果；修改期间应使用普通读取函数。

3.6 移除过时的版本 1 初始化支持。此前的 3.5 禁止为 `collection` 和 `icollection` 设置非空初始值，因为从文本初始化可能导致后端崩溃。使用这些类型时，应创建初始值为空的变量，并按源码中的初始化钩子 `session_variable.variable_initialisation()` 设置值；README 中另一个钩子名称与实现不一致。上游列出 PostgreSQL 14-18 支持，以及暂定的 PostgreSQL 19 支持。

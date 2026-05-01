---
title: "pg_variables"
linkTitle: "pg_variables"
description: "提供标量、数组和记录类型的会话变量"
weight: 2820
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgrespro/pg_variables">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgrespro/pg_variables</div>
    <div class="ext-card__desc">https://github.com/postgrespro/pg_variables</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_variables-1.2.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_variables-1.2.5.tar.gz</div>
    <div class="ext-card__desc">pg_variables-1.2.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_variables`**](/ext/e/pg_variables) | `1.2.5` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2820  | [**`pg_variables`**](/ext/e/pg_variables) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`session_variable`](/ext/e/session_variable) [`orafce`](/ext/e/orafce) [`plisql`](/ext/e/plisql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Release tag 1.2.5 still ships extension SQL version 1.2.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_variables` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `pg_variables_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-variables` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u26.x86_64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
| u26.aarch64 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 | AVAIL PIGSTY 1.2.5 1 |
@ el8.x86_64 18 pg_variables_18 pg_variables_18-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 35.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_variables_18-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_variables_18 pg_variables_18-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 34.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_variables_18-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_variables_18 pg_variables_18-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 34.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_variables_18-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_variables_18 pg_variables_18-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 33.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_variables_18-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_variables_18 pg_variables_18-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 35.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_variables_18-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_variables_18 pg_variables_18-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 34.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_variables_18-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 60.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 59.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 60.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 59.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 65.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 65.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 63.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 63.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb pigsty 1.2.5 61.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-variables postgresql-18-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb pigsty 1.2.5 62.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-18-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_variables_17 pg_variables_17-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 35.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_variables_17-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_variables_17 pg_variables_17-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 33.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_variables_17-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_variables_17 pg_variables_17-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 34.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_variables_17-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_variables_17 pg_variables_17-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 33.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_variables_17-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_variables_17 pg_variables_17-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 35.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_variables_17-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_variables_17 pg_variables_17-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 34.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_variables_17-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 59.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 59.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 60.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 59.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 71.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 71.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 62.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 63.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb pigsty 1.2.5 61.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-variables postgresql-17-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb pigsty 1.2.5 62.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-17-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_variables_16 pg_variables_16-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 35.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_variables_16-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_variables_16 pg_variables_16-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 34.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_variables_16-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_variables_16 pg_variables_16-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 34.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_variables_16-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_variables_16 pg_variables_16-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 33.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_variables_16-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_variables_16 pg_variables_16-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 35.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_variables_16-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_variables_16 pg_variables_16-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 34.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_variables_16-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 59.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 59.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 59.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 59.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 70.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 70.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 62.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 63.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb pigsty 1.2.5 61.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-variables postgresql-16-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb pigsty 1.2.5 62.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-16-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_variables_15 pg_variables_15-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 35.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_variables_15-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_variables_15 pg_variables_15-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 34.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_variables_15-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_variables_15 pg_variables_15-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 35.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_variables_15-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_variables_15 pg_variables_15-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 34.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_variables_15-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_variables_15 pg_variables_15-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 35.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_variables_15-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_variables_15 pg_variables_15-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 34.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_variables_15-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 59.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 59.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 59.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 59.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 70.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 71.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 62.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 63.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb pigsty 1.2.5 61.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-variables postgresql-15-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb pigsty 1.2.5 61.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-15-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_variables_14 pg_variables_14-1.2.5-1PIGSTY.el8.x86_64.rpm pigsty 1.2.5 35.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_variables_14-1.2.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_variables_14 pg_variables_14-1.2.5-1PIGSTY.el8.aarch64.rpm pigsty 1.2.5 34.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_variables_14-1.2.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_variables_14 pg_variables_14-1.2.5-1PIGSTY.el9.x86_64.rpm pigsty 1.2.5 35.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_variables_14-1.2.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_variables_14 pg_variables_14-1.2.5-1PIGSTY.el9.aarch64.rpm pigsty 1.2.5 34.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_variables_14-1.2.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_variables_14 pg_variables_14-1.2.5-1PIGSTY.el10.x86_64.rpm pigsty 1.2.5 35.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_variables_14-1.2.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_variables_14 pg_variables_14-1.2.5-1PIGSTY.el10.aarch64.rpm pigsty 1.2.5 34.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_variables_14-1.2.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb pigsty 1.2.5 59.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb pigsty 1.2.5 59.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb pigsty 1.2.5 59.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb pigsty 1.2.5 59.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb pigsty 1.2.5 71.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb pigsty 1.2.5 71.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb pigsty 1.2.5 62.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb pigsty 1.2.5 63.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb pigsty 1.2.5 61.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-variables postgresql-14-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb pigsty 1.2.5 62.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-variables/postgresql-14-pg-variables_1.2.5-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_variables` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_variables         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_variables` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_variables;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_variables -v 18  # PG 18
pig ext install -y pg_variables -v 17  # PG 17
pig ext install -y pg_variables -v 16  # PG 16
pig ext install -y pg_variables -v 15  # PG 15
pig ext install -y pg_variables -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_variables_18       # PG 18
dnf install -y pg_variables_17       # PG 17
dnf install -y pg_variables_16       # PG 16
dnf install -y pg_variables_15       # PG 15
dnf install -y pg_variables_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-variables   # PG 18
apt install -y postgresql-17-pg-variables   # PG 17
apt install -y postgresql-16-pg-variables   # PG 16
apt install -y postgresql-15-pg-variables   # PG 15
apt install -y postgresql-14-pg-variables   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_variables;
```

## 用法

- 来源：[README](https://github.com/postgrespro/pg_variables/blob/master/README.md)，[repository tags](https://github.com/postgrespro/pg_variables/tags)，[control file](https://github.com/postgrespro/pg_variables/blob/master/pg_variables.control)

`pg_variables` 提供按名称 package 分组的会话级变量。变量只存在于当前 session；除非创建时指定 `is_transactional := true`，否则默认不参与事务。

### 基本读写

```sql
CREATE EXTENSION pg_variables;

SELECT pgv_set('vars', 'int1', 101);
SELECT pgv_get('vars', 'int1', NULL::int);
```

事务性变量会参与 savepoint 和 rollback：

```sql
BEGIN;
SELECT pgv_set('vars', 'trans_int', 101, true);
SAVEPOINT sp1;
SELECT pgv_set('vars', 'trans_int', 102, true);
ROLLBACK TO sp1;
COMMIT;
```

### 核心 API

README 记录了通用标量与数组 API：

- `pgv_set(package, name, value, is_transactional default false)`
- `pgv_get(package, name, NULL::type, strict default true)`

同时也记录了面向 record 的 API：

- `pgv_insert()`
- `pgv_update()`
- `pgv_delete()`
- `pgv_select()`

常用的管理辅助函数包括 `pgv_exists()`、`pgv_remove()`、`pgv_free()`、`pgv_list()` 和 `pgv_stats()`。

### 错误与 strict 行为

`pgv_get()` 会同时检查变量是否存在以及类型是否匹配。README 展示了 package 不存在、变量不存在或类型不匹配时会抛错；如果指定 `strict := false`，则在值缺失时返回 `NULL`。

### 已废弃辅助函数与版本说明

上游仍然提供一些已废弃的类型专用辅助函数，例如 `pgv_set_int()` / `pgv_get_int()` 和 `pgv_set_jsonb()` / `pgv_get_jsonb()`，但推荐使用通用的 `pgv_set()` / `pgv_get()`。

仓库 tag 已到 `v1.2.5`，而当前 `pg_variables.control` 仍声明 `default_version = '1.2'`。这与打包说明一致，即 release tag 已前进，但 SQL 扩展版本字符串没有同步变更。

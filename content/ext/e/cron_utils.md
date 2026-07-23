---
title: "cron_utils"
linkTitle: "cron_utils"
description: "解析 Cron 表达式并计算上一次或下一次触发时间"
weight: 1140
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Myshkouski/pg-cron-utils">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Myshkouski/pg-cron-utils</div>
    <div class="ext-card__desc">https://github.com/Myshkouski/pg-cron-utils</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/cron_utils-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">cron_utils-0.1.0.tar.gz</div>
    <div class="ext-card__desc">cron_utils-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`cron_utils`**](/ext/e/cron_utils) | `0.1.0` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1140  | [**`cron_utils`**](/ext/e/cron_utils) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pg_when`](/ext/e/pg_when) [`pgcalendar`](/ext/e/pgcalendar) [`periods`](/ext/e/periods) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> The PGXN 0.1.0 distribution is marked unstable; the control file marks the extension relocatable.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `cron_utils` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `cron_utils_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-cron-utils` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 cron_utils_18 cron_utils_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cron_utils_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 cron_utils_18 cron_utils_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cron_utils_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 cron_utils_18 cron_utils_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cron_utils_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 cron_utils_18 cron_utils_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cron_utils_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 cron_utils_18 cron_utils_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cron_utils_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 cron_utils_18 cron_utils_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cron_utils_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-cron-utils postgresql-18-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-18-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 cron_utils_17 cron_utils_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cron_utils_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 cron_utils_17 cron_utils_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cron_utils_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 cron_utils_17 cron_utils_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cron_utils_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 cron_utils_17 cron_utils_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cron_utils_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 cron_utils_17 cron_utils_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cron_utils_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 cron_utils_17 cron_utils_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cron_utils_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-cron-utils postgresql-17-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-17-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 cron_utils_16 cron_utils_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cron_utils_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 cron_utils_16 cron_utils_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cron_utils_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 cron_utils_16 cron_utils_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cron_utils_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 cron_utils_16 cron_utils_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cron_utils_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 cron_utils_16 cron_utils_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cron_utils_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 cron_utils_16 cron_utils_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cron_utils_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-cron-utils postgresql-16-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-16-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 cron_utils_15 cron_utils_15-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cron_utils_15-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 cron_utils_15 cron_utils_15-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cron_utils_15-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 cron_utils_15 cron_utils_15-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cron_utils_15-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 cron_utils_15 cron_utils_15-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cron_utils_15-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 cron_utils_15 cron_utils_15-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cron_utils_15-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 cron_utils_15 cron_utils_15-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cron_utils_15-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-cron-utils postgresql-15-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-15-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 cron_utils_14 cron_utils_14-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/cron_utils_14-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 cron_utils_14 cron_utils_14-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/cron_utils_14-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 cron_utils_14 cron_utils_14-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/cron_utils_14-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 cron_utils_14 cron_utils_14-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 11.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/cron_utils_14-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 cron_utils_14 cron_utils_14-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/cron_utils_14-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 cron_utils_14 cron_utils_14-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/cron_utils_14-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-cron-utils postgresql-14-cron-utils_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 5.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/cron-utils/postgresql-14-cron-utils_0.1.0-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `cron_utils` 扩展的 RPM / DEB 包：

```bash
pig build pkg cron_utils         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `cron_utils` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install cron_utils;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y cron_utils -v 18  # PG 18
pig ext install -y cron_utils -v 17  # PG 17
pig ext install -y cron_utils -v 16  # PG 16
pig ext install -y cron_utils -v 15  # PG 15
pig ext install -y cron_utils -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y cron_utils_18       # PG 18
dnf install -y cron_utils_17       # PG 17
dnf install -y cron_utils_16       # PG 16
dnf install -y cron_utils_15       # PG 15
dnf install -y cron_utils_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-cron-utils   # PG 18
apt install -y postgresql-17-cron-utils   # PG 17
apt install -y postgresql-16-cron-utils   # PG 16
apt install -y postgresql-15-cron-utils   # PG 15
apt install -y postgresql-14-cron-utils   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION cron_utils;
```

## 用法

来源：

- [pg_cron_utils 0.1.0 README](https://github.com/Myshkouski/pg-cron-utils/blob/v0.1.0/README.md)
- [Extension control file](https://github.com/Myshkouski/pg-cron-utils/blob/v0.1.0/cron_utils.control)
- [SQL definitions](https://github.com/Myshkouski/pg-cron-utils/blob/v0.1.0/cron_utils--0.1.0.sql)

`cron_utils` 解析五字段 cron 表达式并在 PostgreSQL 中计算触发时间戳。它是一个调度工具，而不是作业执行器：使用它可以预览、验证或查询一个计划，并单独使用 `pg_cron` 等调度程序来执行工作。

### 核心流程

```sql
CREATE EXTENSION cron_utils;

-- First trigger at or after the supplied time.
SELECT cron_first_trigger('0 9 * * 1-5', now());

-- Last trigger before the supplied time (strict is true by default).
SELECT cron_last_trigger('0 9 * * 1-5', now());

-- Next five hourly triggers.
SELECT *
FROM cron_iterate_n('0 * * * *', now(), false, 'next', 5);
```

要检查一个限定窗口：

```sql
SELECT *
FROM cron_first_last_triggers(
  '0 0 * * *',
  date_trunc('month', now()),
  date_trunc('month', now()) + interval '1 month'
);
```

当表达式在窗口中没有触发时，返回的边界可以是 `NULL`。

### 重要对象

- `cron_parts` 是分钟、小时、日、月和周字段的解析表示。
- `parse_cron(text)` 解析 `*`、列表、范围以及步进语法。
- `cron_first_trigger(expr, base_time, strict)` 向前搜索。当 `strict = true` 时，会跳过在 `base_time` 精确匹配的情况。
- `cron_last_trigger(expr, base_time, strict)` 向后搜索，默认为严格匹配。
- `cron_first_last_triggers(expr, start_time, end_time)` 返回窗口中的第一个和最后一个匹配项。
- `cron_iterate_n(expr, base_time, strict, direction, max_matches)` 按 `next` 或 `prev` 方向返回连续的匹配项。

### 语义与注意事项

表达式使用标准的五个字段 `minute hour day month dow`；秒不被接受。周字段使用 `1 = Monday` 到 `7 = Sunday` 的表示方式。结果为 `timestamptz`，因此会话时区会影响显示的本地时间，并且对于本地时间计划应测试夏令时转换。

该扩展是纯 SQL/PL/pgSQL 实现的，可重定位且没有依赖于 `pg_cron`。其函数声明为不可变且并行安全。0.1.0 版本在控制元数据中标记为 `unstable`，因此在将其嵌入关键调度程序之前，请锁定行为并重新测试边缘情况。

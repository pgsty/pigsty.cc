---
title: "dbt2"
linkTitle: "dbt2"
description: "OSDL-DBT-2 测试组件"
weight: 3220
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/osdldbt/dbt2">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">osdldbt/dbt2</div>
    <div class="ext-card__desc">https://github.com/osdldbt/dbt2</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/dbt2-0.61.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">dbt2-0.61.7.tar.gz</div>
    <div class="ext-card__desc">dbt2-0.61.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`dbt2`**](/ext/e/dbt2) | `0.61.7` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license artistic20" href="/ext/license#artistic20">Artistic-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3220  | [**`dbt2`**](/ext/e/dbt2) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgtap`](/ext/e/pgtap) [`faker`](/ext/e/faker) [`plpgsql`](/ext/e/plpgsql) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_tle`](/ext/e/pg_tle) [`plv8`](/ext/e/plv8) [`pllua`](/ext/e/pllua) [`hstore_pllua`](/ext/e/hstore_pllua) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Package/source version 0.61.7; SQL extension version 0.45.0. This package contains the PostgreSQL stored-function extension, not the full DBT-2 benchmark toolchain.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.61.7` | {{< pgvers "18,17,16,15,14" >}} | `dbt2` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.61.7` | {{< pgvers "18,17,16,15,14" >}} | `dbt2-pg$v-extensions` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.61.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-dbt2` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PGDG 0.53.7 1 | AVAIL PGDG 0.53.7 5 | AVAIL PGDG 0.53.7 6 |
| el8.aarch64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PGDG 0.53.7 1 | AVAIL PGDG 0.53.7 4 | AVAIL PGDG 0.53.7 4 |
| el9.x86_64 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 3 | AVAIL PGDG 0.61.7 5 | AVAIL PGDG 0.61.7 9 | AVAIL PGDG 0.61.7 8 |
| el9.aarch64 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 3 | AVAIL PGDG 0.61.7 5 | AVAIL PGDG 0.61.7 9 | AVAIL PGDG 0.61.7 9 |
| el10.x86_64 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 3 | AVAIL PGDG 0.61.7 3 | AVAIL PGDG 0.61.7 3 | AVAIL PGDG 0.61.7 3 |
| el10.aarch64 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 3 | AVAIL PGDG 0.61.7 3 | AVAIL PGDG 0.61.7 3 | AVAIL PGDG 0.61.7 3 |
| d12.x86_64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| d13.aarch64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| u22.x86_64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| u26.x86_64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
| u26.aarch64 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 | AVAIL PIGSTY 0.61.7 1 |
@ el8.x86_64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PIGSTY.el8.x86_64.rpm pigsty 0.61.7 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/dbt2-pg18-extensions-0.61.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PIGSTY.el8.aarch64.rpm pigsty 0.61.7 28.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/dbt2-pg18-extensions-0.61.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm pgdg 0.61.7 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/dbt2-pg18-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/dbt2-pg18-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm pgdg 0.61.7 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/dbt2-pg18-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/dbt2-pg18-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm pgdg 0.61.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/dbt2-pg18-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/dbt2-pg18-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm pgdg 0.61.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/dbt2-pg18-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/dbt2-pg18-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb pigsty 0.61.7 178.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb pigsty 0.61.7 176.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb pigsty 0.61.7 177.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb pigsty 0.61.7 176.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb pigsty 0.61.7 201.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb pigsty 0.61.7 200.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~noble_amd64.deb pigsty 0.61.7 194.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~noble_arm64.deb pigsty 0.61.7 193.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb pigsty 0.61.7 196.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-dbt2 postgresql-18-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb pigsty 0.61.7 196.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-18-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PIGSTY.el8.x86_64.rpm pigsty 0.61.7 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/dbt2-pg17-extensions-0.61.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PIGSTY.el8.aarch64.rpm pigsty 0.61.7 28.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/dbt2-pg17-extensions-0.61.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm pgdg 0.61.7 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/dbt2-pg17-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/dbt2-pg17-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm pgdg 0.61.6 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/dbt2-pg17-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm pgdg 0.61.7 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/dbt2-pg17-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/dbt2-pg17-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm pgdg 0.61.6 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/dbt2-pg17-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm pgdg 0.61.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/dbt2-pg17-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/dbt2-pg17-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm pgdg 0.61.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/dbt2-pg17-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm pgdg 0.61.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/dbt2-pg17-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/dbt2-pg17-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm pgdg 0.61.6 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/dbt2-pg17-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb pigsty 0.61.7 177.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb pigsty 0.61.7 176.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb pigsty 0.61.7 177.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb pigsty 0.61.7 176.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb pigsty 0.61.7 215.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb pigsty 0.61.7 214.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~noble_amd64.deb pigsty 0.61.7 193.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~noble_arm64.deb pigsty 0.61.7 192.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb pigsty 0.61.7 193.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-dbt2 postgresql-17-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb pigsty 0.61.7 193.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-17-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/dbt2-pg16-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm pgdg 0.53.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/dbt2-pg16-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm pgdg 0.61.7 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm pgdg 0.61.6 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm pgdg 0.53.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.6-1PGDG.rhel9.x86_64.rpm pgdg 0.53.6 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.53.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm pgdg 0.61.7 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm pgdg 0.61.6 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm pgdg 0.53.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.6-1PGDG.rhel9.aarch64.rpm pgdg 0.53.6 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.53.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm pgdg 0.61.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/dbt2-pg16-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/dbt2-pg16-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm pgdg 0.61.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/dbt2-pg16-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm pgdg 0.61.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/dbt2-pg16-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/dbt2-pg16-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm pgdg 0.61.6 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/dbt2-pg16-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb pigsty 0.61.7 164.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb pigsty 0.61.7 162.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb pigsty 0.61.7 164.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb pigsty 0.61.7 163.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb pigsty 0.61.7 201.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb pigsty 0.61.7 200.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~noble_amd64.deb pigsty 0.61.7 178.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~noble_arm64.deb pigsty 0.61.7 177.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb pigsty 0.61.7 180.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-dbt2 postgresql-16-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb pigsty 0.61.7 179.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-16-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.4-1PGDG.rhel8.x86_64.rpm pgdg 0.53.4 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.53.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.50.1-1.rhel8.x86_64.rpm pgdg 0.50.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.50.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.49.1-1.rhel8.x86_64.rpm pgdg 0.49.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.49.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.7-1.rhel8.x86_64.rpm pgdg 0.48.7 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.48.7-1.rhel8.x86_64.rpm
@ el8.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm pgdg 0.53.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/dbt2-pg15-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.4-1PGDG.rhel8.aarch64.rpm pgdg 0.53.4 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/dbt2-pg15-extensions-0.53.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.50.1-1.rhel8.aarch64.rpm pgdg 0.50.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/dbt2-pg15-extensions-0.50.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.49.1-1.rhel8.aarch64.rpm pgdg 0.49.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/dbt2-pg15-extensions-0.49.1-1.rhel8.aarch64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm pgdg 0.61.7 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm pgdg 0.61.6 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm pgdg 0.53.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.4-1PGDG.rhel9.x86_64.rpm pgdg 0.53.4 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.53.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.50.1-1.rhel9.x86_64.rpm pgdg 0.50.1 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.50.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.49.1-1.rhel9.x86_64.rpm pgdg 0.49.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.49.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.7-1.rhel9.x86_64.rpm pgdg 0.48.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.48.7-1.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.3-2.rhel9.x86_64.rpm pgdg 0.48.3 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.48.3-2.rhel9.x86_64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm pgdg 0.61.7 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm pgdg 0.61.6 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.4-1PGDG.rhel9.aarch64.rpm pgdg 0.53.4 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.53.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.50.1-1.rhel9.aarch64.rpm pgdg 0.50.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.50.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.49.1-1.rhel9.aarch64.rpm pgdg 0.49.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.49.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.7-1.rhel9.aarch64.rpm pgdg 0.48.7 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.48.7-1.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.3-2.rhel9.aarch64.rpm pgdg 0.48.3 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.48.3-2.rhel9.aarch64.rpm
@ el10.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm pgdg 0.61.7 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/dbt2-pg15-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/dbt2-pg15-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm pgdg 0.61.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/dbt2-pg15-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm pgdg 0.61.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/dbt2-pg15-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/dbt2-pg15-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm pgdg 0.61.6 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/dbt2-pg15-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb pigsty 0.61.7 158.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb pigsty 0.61.7 156.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb pigsty 0.61.7 157.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb pigsty 0.61.7 156.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb pigsty 0.61.7 195.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb pigsty 0.61.7 194.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~noble_amd64.deb pigsty 0.61.7 172.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~noble_arm64.deb pigsty 0.61.7 171.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb pigsty 0.61.7 175.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-dbt2 postgresql-15-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb pigsty 0.61.7 174.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-15-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.4-1PGDG.rhel8.x86_64.rpm pgdg 0.53.4 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.53.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.50.1-1.rhel8.x86_64.rpm pgdg 0.50.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.50.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.49.1-1.rhel8.x86_64.rpm pgdg 0.49.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.49.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.7-1.rhel8.x86_64.rpm pgdg 0.48.7 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.48.7-1.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.3-2.rhel8.x86_64.rpm pgdg 0.48.3 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.48.3-2.rhel8.x86_64.rpm
@ el8.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm pgdg 0.53.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/dbt2-pg14-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.4-1PGDG.rhel8.aarch64.rpm pgdg 0.53.4 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/dbt2-pg14-extensions-0.53.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.50.1-1.rhel8.aarch64.rpm pgdg 0.50.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/dbt2-pg14-extensions-0.50.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.49.1-1.rhel8.aarch64.rpm pgdg 0.49.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/dbt2-pg14-extensions-0.49.1-1.rhel8.aarch64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm pgdg 0.61.7 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.61.7-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm pgdg 0.61.6 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm pgdg 0.53.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.4-1PGDG.rhel9.x86_64.rpm pgdg 0.53.4 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.53.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.50.1-1.rhel9.x86_64.rpm pgdg 0.50.1 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.50.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.49.1-1.rhel9.x86_64.rpm pgdg 0.49.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.49.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.7-1.rhel9.x86_64.rpm pgdg 0.48.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.48.7-1.rhel9.x86_64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm pgdg 0.61.7 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.61.7-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm pgdg 0.61.6 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.4-1PGDG.rhel9.aarch64.rpm pgdg 0.53.4 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.53.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.50.1-1.rhel9.aarch64.rpm pgdg 0.50.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.50.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.49.1-1.rhel9.aarch64.rpm pgdg 0.49.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.49.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.7-1.rhel9.aarch64.rpm pgdg 0.48.7 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.48.7-1.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.3-2.rhel9.aarch64.rpm pgdg 0.48.3 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.48.3-2.rhel9.aarch64.rpm
@ el10.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm pgdg 0.61.7 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/dbt2-pg14-extensions-0.61.7-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/dbt2-pg14-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm pgdg 0.61.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/dbt2-pg14-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm pgdg 0.61.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/dbt2-pg14-extensions-0.61.7-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/dbt2-pg14-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm pgdg 0.61.6 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/dbt2-pg14-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb pigsty 0.61.7 139.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb pigsty 0.61.7 137.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb pigsty 0.61.7 138.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb pigsty 0.61.7 137.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb pigsty 0.61.7 166.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb pigsty 0.61.7 164.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~noble_amd64.deb pigsty 0.61.7 151.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~noble_arm64.deb pigsty 0.61.7 150.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb pigsty 0.61.7 155.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-dbt2 postgresql-14-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb pigsty 0.61.7 154.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/dbt2-extensions/postgresql-14-dbt2_0.61.7-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `dbt2` 扩展的 DEB 包：

```bash
pig build pkg dbt2         # 构建 DEB 包
```


## 安装

您可以直接安装 `dbt2` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install dbt2;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y dbt2 -v 18  # PG 18
pig ext install -y dbt2 -v 17  # PG 17
pig ext install -y dbt2 -v 16  # PG 16
pig ext install -y dbt2 -v 15  # PG 15
pig ext install -y dbt2 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y dbt2-pg18-extensions       # PG 18
dnf install -y dbt2-pg17-extensions       # PG 17
dnf install -y dbt2-pg16-extensions       # PG 16
dnf install -y dbt2-pg15-extensions       # PG 15
dnf install -y dbt2-pg14-extensions       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-dbt2   # PG 18
apt install -y postgresql-17-dbt2   # PG 17
apt install -y postgresql-16-dbt2   # PG 16
apt install -y postgresql-15-dbt2   # PG 15
apt install -y postgresql-14-dbt2   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION dbt2;
```




## 用法

> [dbt2: OSDL-DBT-2 测试套件](https://github.com/osdldbt/dbt2)

`dbt2` 是一个面向 PostgreSQL 的 TPC-C 基准测试实现。该扩展提供了实现五种标准 TPC-C 事务类型的存储过程。

```sql
CREATE EXTENSION dbt2;
```

### TPC-C 事务类型

该扩展提供了五种标准 TPC-C 事务的存储过程：

- **新订单（New Order）**：创建包含多个行项目的新订单，并更新库存水平
- **支付（Payment）**：处理客户付款，更新仓库和区域余额
- **订单状态（Order Status）**：查询客户最近一笔订单的状态
- **发货（Delivery）**：处理所有区域中待发货的订单
- **库存水平（Stock Level）**：检查近期售出且库存偏低的商品数量

### 基准测试工作流

`dbt2` 系统由以下部分组成：

1. **数据库扩展**（`dbt2`）：TPC-C 事务的存储过程
2. **数据加载器**：用 TPC-C 数据填充基准测试表
3. **驱动程序**：生成模拟终端用户的事务负载
4. **客户端**：管理驱动程序与数据库之间的连接

### 运行基准测试

基准测试通常使用 `dbt2` 命令行工具运行（与扩展本身分开）：

```bash
# 构建基准测试数据库
dbt2 build --dbms pgsql --warehouses 10

# 运行基准测试
dbt2 run --dbms pgsql --warehouses 10 --duration 300 --connections 10

# 生成报告
dbt2 report --dbms pgsql
```

### TPC-C 模式

基准测试使用以下标准表：`warehouse`、`district`、`customer`、`history`、`new_order`、`orders`、`order_line`、`item` 和 `stock`。

有关详细的配置和调优选项，请参阅仓库中的 `doc/` 目录。

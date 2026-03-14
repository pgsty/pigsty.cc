---
title: "plxslt"
linkTitle: "plxslt"
description: "XSLT 存储过程语言"
weight: 3110
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/petere/plxslt">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">petere/plxslt</div>
    <div class="ext-card__desc">https://github.com/petere/plxslt</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plxslt-0.20140221.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plxslt-0.20140221.tar.gz</div>
    <div class="ext-card__desc">plxslt-0.20140221.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plxslt`**](/ext/e/plxslt) | `0.20140221` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3110  | [**`plxslt`**](/ext/e/plxslt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pgml`](/ext/e/pgml) [`plpython3u`](/ext/e/plpython3u) [`pg_tle`](/ext/e/pg_tle) [`plv8`](/ext/e/plv8) [`pljava`](/ext/e/pljava) [`plperl`](/ext/e/plperl) [`pllua`](/ext/e/pllua) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.20140221` | {{< pgvers "18,17,16,15,14" >}} | `plxslt` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.20140221` | {{< pgvers "18,17,16,15,14" >}} | `plxslt_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.20140221` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plxslt` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 |
| el8.aarch64 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 |
| el9.x86_64 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 |
| el9.aarch64 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 |
| el10.x86_64 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 |
| el10.aarch64 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 | AVAIL PGDG 0.20140221 1 |
| d12.x86_64 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 |
| d12.aarch64 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 |
| d13.x86_64 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 |
| d13.aarch64 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 |
| u22.x86_64 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 |
| u22.aarch64 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 |
| u24.x86_64 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 |
| u24.aarch64 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 | AVAIL PIGSTY 0.20140221 1 |
@ el8.x86_64 18 plxslt_18 plxslt_18-0.20140221-1PGDG.rhel8.x86_64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plxslt_18-0.20140221-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 plxslt_18 plxslt_18-0.20140221-1PGDG.rhel8.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plxslt_18-0.20140221-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 plxslt_18 plxslt_18-0.20140221-1PGDG.rhel9.x86_64.rpm pgdg 0.20140221 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plxslt_18-0.20140221-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 plxslt_18 plxslt_18-0.20140221-1PGDG.rhel9.aarch64.rpm pgdg 0.20140221 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plxslt_18-0.20140221-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 plxslt_18 plxslt_18-0.20140221-1PGDG.rhel10.x86_64.rpm pgdg 0.20140221 15.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plxslt_18-0.20140221-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 plxslt_18 plxslt_18-0.20140221-1PGDG.rhel10.aarch64.rpm pgdg 0.20140221 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plxslt_18-0.20140221-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plxslt postgresql-18-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-18-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-plxslt postgresql-18-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-18-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-plxslt postgresql-18-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-18-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-plxslt postgresql-18-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-18-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-plxslt postgresql-18-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb pigsty 0.20140221 13.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-18-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-plxslt postgresql-18-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb pigsty 0.20140221 13.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-18-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-plxslt postgresql-18-plxslt_0.20140221-1PIGSTY~noble_amd64.deb pigsty 0.20140221 13.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-18-plxslt_0.20140221-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-plxslt postgresql-18-plxslt_0.20140221-1PIGSTY~noble_arm64.deb pigsty 0.20140221 13.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-18-plxslt_0.20140221-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 plxslt_17 plxslt_17-0.20140221-1PGDG.rhel8.x86_64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plxslt_17-0.20140221-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 plxslt_17 plxslt_17-0.20140221-1PGDG.rhel8.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plxslt_17-0.20140221-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 plxslt_17 plxslt_17-0.20140221-1PGDG.rhel9.x86_64.rpm pgdg 0.20140221 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plxslt_17-0.20140221-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 plxslt_17 plxslt_17-0.20140221-1PGDG.rhel9.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plxslt_17-0.20140221-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 plxslt_17 plxslt_17-0.20140221-1PGDG.rhel10.x86_64.rpm pgdg 0.20140221 15.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plxslt_17-0.20140221-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 plxslt_17 plxslt_17-0.20140221-1PGDG.rhel10.aarch64.rpm pgdg 0.20140221 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plxslt_17-0.20140221-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plxslt postgresql-17-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-17-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-plxslt postgresql-17-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-17-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-plxslt postgresql-17-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-17-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-plxslt postgresql-17-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-17-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-plxslt postgresql-17-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb pigsty 0.20140221 14.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-17-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-plxslt postgresql-17-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb pigsty 0.20140221 14.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-17-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-plxslt postgresql-17-plxslt_0.20140221-1PIGSTY~noble_amd64.deb pigsty 0.20140221 13.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-17-plxslt_0.20140221-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-plxslt postgresql-17-plxslt_0.20140221-1PIGSTY~noble_arm64.deb pigsty 0.20140221 13.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-17-plxslt_0.20140221-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 plxslt_16 plxslt_16-0.20140221-1PGDG.rhel8.x86_64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plxslt_16-0.20140221-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 plxslt_16 plxslt_16-0.20140221-1PGDG.rhel8.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plxslt_16-0.20140221-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 plxslt_16 plxslt_16-0.20140221-1PGDG.rhel9.x86_64.rpm pgdg 0.20140221 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plxslt_16-0.20140221-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 plxslt_16 plxslt_16-0.20140221-1PGDG.rhel9.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plxslt_16-0.20140221-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 plxslt_16 plxslt_16-0.20140221-1PGDG.rhel10.x86_64.rpm pgdg 0.20140221 15.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plxslt_16-0.20140221-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 plxslt_16 plxslt_16-0.20140221-1PGDG.rhel10.aarch64.rpm pgdg 0.20140221 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plxslt_16-0.20140221-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plxslt postgresql-16-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-16-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-plxslt postgresql-16-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-16-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-plxslt postgresql-16-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-16-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-plxslt postgresql-16-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-16-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-plxslt postgresql-16-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb pigsty 0.20140221 14.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-16-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-plxslt postgresql-16-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb pigsty 0.20140221 14.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-16-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-plxslt postgresql-16-plxslt_0.20140221-1PIGSTY~noble_amd64.deb pigsty 0.20140221 13.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-16-plxslt_0.20140221-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-plxslt postgresql-16-plxslt_0.20140221-1PIGSTY~noble_arm64.deb pigsty 0.20140221 13.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-16-plxslt_0.20140221-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 plxslt_15 plxslt_15-0.20140221-1PGDG.rhel8.x86_64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plxslt_15-0.20140221-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 plxslt_15 plxslt_15-0.20140221-1PGDG.rhel8.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plxslt_15-0.20140221-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 plxslt_15 plxslt_15-0.20140221-1PGDG.rhel9.x86_64.rpm pgdg 0.20140221 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plxslt_15-0.20140221-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 plxslt_15 plxslt_15-0.20140221-1PGDG.rhel9.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plxslt_15-0.20140221-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 plxslt_15 plxslt_15-0.20140221-1PGDG.rhel10.x86_64.rpm pgdg 0.20140221 15.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plxslt_15-0.20140221-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 plxslt_15 plxslt_15-0.20140221-1PGDG.rhel10.aarch64.rpm pgdg 0.20140221 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plxslt_15-0.20140221-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plxslt postgresql-15-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-15-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-plxslt postgresql-15-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-15-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-plxslt postgresql-15-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-15-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-plxslt postgresql-15-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb pigsty 0.20140221 12.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-15-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-plxslt postgresql-15-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb pigsty 0.20140221 14.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-15-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-plxslt postgresql-15-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb pigsty 0.20140221 14.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-15-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-plxslt postgresql-15-plxslt_0.20140221-1PIGSTY~noble_amd64.deb pigsty 0.20140221 13.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-15-plxslt_0.20140221-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-plxslt postgresql-15-plxslt_0.20140221-1PIGSTY~noble_arm64.deb pigsty 0.20140221 13.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-15-plxslt_0.20140221-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 plxslt_14 plxslt_14-0.20140221-1PGDG.rhel8.x86_64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plxslt_14-0.20140221-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 plxslt_14 plxslt_14-0.20140221-1PGDG.rhel8.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plxslt_14-0.20140221-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 plxslt_14 plxslt_14-0.20140221-1PGDG.rhel9.x86_64.rpm pgdg 0.20140221 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plxslt_14-0.20140221-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 plxslt_14 plxslt_14-0.20140221-1PGDG.rhel9.aarch64.rpm pgdg 0.20140221 14.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plxslt_14-0.20140221-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 plxslt_14 plxslt_14-0.20140221-1PGDG.rhel10.x86_64.rpm pgdg 0.20140221 15.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plxslt_14-0.20140221-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 plxslt_14 plxslt_14-0.20140221-1PGDG.rhel10.aarch64.rpm pgdg 0.20140221 15.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plxslt_14-0.20140221-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plxslt postgresql-14-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-14-plxslt_0.20140221-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-plxslt postgresql-14-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plxslt/postgresql-14-plxslt_0.20140221-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-plxslt postgresql-14-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-14-plxslt_0.20140221-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-plxslt postgresql-14-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb pigsty 0.20140221 12.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plxslt/postgresql-14-plxslt_0.20140221-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-plxslt postgresql-14-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb pigsty 0.20140221 14.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-14-plxslt_0.20140221-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-plxslt postgresql-14-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb pigsty 0.20140221 14.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plxslt/postgresql-14-plxslt_0.20140221-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-plxslt postgresql-14-plxslt_0.20140221-1PIGSTY~noble_amd64.deb pigsty 0.20140221 13.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-14-plxslt_0.20140221-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-plxslt postgresql-14-plxslt_0.20140221-1PIGSTY~noble_arm64.deb pigsty 0.20140221 13.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plxslt/postgresql-14-plxslt_0.20140221-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plxslt` 扩展的 DEB 包：

```bash
pig build pkg plxslt         # 构建 DEB 包
```


## 安装

您可以直接安装 `plxslt` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plxslt;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plxslt -v 18  # PG 18
pig ext install -y plxslt -v 17  # PG 17
pig ext install -y plxslt -v 16  # PG 16
pig ext install -y plxslt -v 15  # PG 15
pig ext install -y plxslt -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plxslt_18       # PG 18
dnf install -y plxslt_17       # PG 17
dnf install -y plxslt_16       # PG 16
dnf install -y plxslt_15       # PG 15
dnf install -y plxslt_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plxslt   # PG 18
apt install -y postgresql-17-plxslt   # PG 17
apt install -y postgresql-16-plxslt   # PG 16
apt install -y postgresql-15-plxslt   # PG 15
apt install -y postgresql-14-plxslt   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plxslt;
```



## 用法

> [plxslt: PostgreSQL 的 XSLT 过程语言](https://github.com/petere/plxslt)

`plxslt` 允许将 PostgreSQL 函数编写为 XSLT 样式表，用于转换 XML 数据。

```sql
CREATE EXTENSION plxslt;
```

### 创建 XSLT 函数

函数体是一个 XSLT 样式表。第一个参数必须是 `xml` 类型，用于接收输入文档：

```sql
CREATE FUNCTION extract_title(xml) RETURNS xml AS $$
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:value-of select="//title"/>
  </xsl:template>
</xsl:stylesheet>
$$ LANGUAGE xslt;

SELECT extract_title('<doc><title>Hello World</title></doc>'::xml);
```

### 返回类型

返回类型必须与样式表的输出方法匹配：

| 输出方法 | 返回类型 |
|----------|----------|
| `xml` | `xml` |
| `text` | `text` 或 `varchar` |
| `html` | `text` 或 `varchar` |

### 传递参数

第一个 `xml` 参数之后的附加函数参数将作为 XSL 样式表参数传递：

```sql
CREATE FUNCTION transform_with_param(xml, text) RETURNS xml AS $$
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:param name="arg2"/>
  <xsl:template match="/">
    <result>
      <xsl:value-of select="$arg2"/>
    </result>
  </xsl:template>
</xsl:stylesheet>
$$ LANGUAGE xslt;
```

### 限制

- 第一个参数必须是 `xml` 类型
- 不支持触发器
- 仅支持 XSLT 1.0 转换（通过 libxslt）

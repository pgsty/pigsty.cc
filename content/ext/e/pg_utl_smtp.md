---
title: "pg_utl_smtp"
linkTitle: "pg_utl_smtp"
description: "Oracle UTL_SMTP 兼容扩展（基于 plperlu）"
weight: 9290
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/hexacluster/pg_utl_smtp">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">hexacluster/pg_utl_smtp</div>
    <div class="ext-card__desc">https://github.com/hexacluster/pg_utl_smtp</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_utl_smtp-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_utl_smtp-1.0.tar.gz</div>
    <div class="ext-card__desc">pg_utl_smtp-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_utl_smtp`**](/ext/e/pg_utl_smtp) | `1.0.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9290  | [**`pg_utl_smtp`**](/ext/e/pg_utl_smtp) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `utl_smtp` |
{.ext-table}

| **相关扩展** | [`plperlu`](/ext/e/plperlu) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> runtime requires plperlu and Perl Net::SMTP


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_utl_smtp` | `plperlu` |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_utl_smtp_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-utl-smtp` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el8.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el9.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el9.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el10.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el10.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pg_utl_smtp_18 pg_utl_smtp_18-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_utl_smtp_18-1.0-2PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pg_utl_smtp_18 pg_utl_smtp_18-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_utl_smtp_18-1.0-2PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 18 pg_utl_smtp_18 pg_utl_smtp_18-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_utl_smtp_18-1.0-2PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 18 pg_utl_smtp_18 pg_utl_smtp_18-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_utl_smtp_18-1.0-2PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 18 pg_utl_smtp_18 pg_utl_smtp_18-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_utl_smtp_18-1.0-2PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 18 pg_utl_smtp_18 pg_utl_smtp_18-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_utl_smtp_18-1.0-2PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 18 postgresql-18-utl-smtp postgresql-18-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-18-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-utl-smtp postgresql-18-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-18-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-utl-smtp postgresql-18-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-18-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-utl-smtp postgresql-18-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-18-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-utl-smtp postgresql-18-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-18-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-utl-smtp postgresql-18-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-18-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-utl-smtp postgresql-18-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-18-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-utl-smtp postgresql-18-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-18-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_utl_smtp_17 pg_utl_smtp_17-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_utl_smtp_17-1.0-2PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pg_utl_smtp_17 pg_utl_smtp_17-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_utl_smtp_17-1.0-2PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 17 pg_utl_smtp_17 pg_utl_smtp_17-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_utl_smtp_17-1.0-2PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 17 pg_utl_smtp_17 pg_utl_smtp_17-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_utl_smtp_17-1.0-2PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 17 pg_utl_smtp_17 pg_utl_smtp_17-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_utl_smtp_17-1.0-2PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 17 pg_utl_smtp_17 pg_utl_smtp_17-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_utl_smtp_17-1.0-2PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 17 postgresql-17-utl-smtp postgresql-17-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-17-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-utl-smtp postgresql-17-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-17-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-utl-smtp postgresql-17-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-17-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-utl-smtp postgresql-17-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-17-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-utl-smtp postgresql-17-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-17-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-utl-smtp postgresql-17-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-17-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-utl-smtp postgresql-17-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-17-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-utl-smtp postgresql-17-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-17-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_utl_smtp_16 pg_utl_smtp_16-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_utl_smtp_16-1.0-2PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pg_utl_smtp_16 pg_utl_smtp_16-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_utl_smtp_16-1.0-2PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 16 pg_utl_smtp_16 pg_utl_smtp_16-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_utl_smtp_16-1.0-2PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 16 pg_utl_smtp_16 pg_utl_smtp_16-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_utl_smtp_16-1.0-2PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 16 pg_utl_smtp_16 pg_utl_smtp_16-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_utl_smtp_16-1.0-2PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 16 pg_utl_smtp_16 pg_utl_smtp_16-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_utl_smtp_16-1.0-2PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 16 postgresql-16-utl-smtp postgresql-16-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-16-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-utl-smtp postgresql-16-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-16-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-utl-smtp postgresql-16-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-16-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-utl-smtp postgresql-16-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-16-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-utl-smtp postgresql-16-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-16-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-utl-smtp postgresql-16-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-16-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-utl-smtp postgresql-16-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-16-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-utl-smtp postgresql-16-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-16-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_utl_smtp_15 pg_utl_smtp_15-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_utl_smtp_15-1.0-2PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pg_utl_smtp_15 pg_utl_smtp_15-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_utl_smtp_15-1.0-2PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 15 pg_utl_smtp_15 pg_utl_smtp_15-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_utl_smtp_15-1.0-2PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 15 pg_utl_smtp_15 pg_utl_smtp_15-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_utl_smtp_15-1.0-2PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 15 pg_utl_smtp_15 pg_utl_smtp_15-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_utl_smtp_15-1.0-2PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 15 pg_utl_smtp_15 pg_utl_smtp_15-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_utl_smtp_15-1.0-2PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 15 postgresql-15-utl-smtp postgresql-15-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-15-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-utl-smtp postgresql-15-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-15-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-utl-smtp postgresql-15-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-15-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-utl-smtp postgresql-15-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-15-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-utl-smtp postgresql-15-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-15-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-utl-smtp postgresql-15-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-15-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-utl-smtp postgresql-15-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-15-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-utl-smtp postgresql-15-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-15-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_utl_smtp_14 pg_utl_smtp_14-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_utl_smtp_14-1.0-2PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 14 pg_utl_smtp_14 pg_utl_smtp_14-1.0-2PGDG.rhel8.10.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_utl_smtp_14-1.0-2PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 14 pg_utl_smtp_14 pg_utl_smtp_14-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_utl_smtp_14-1.0-2PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 14 pg_utl_smtp_14 pg_utl_smtp_14-1.0-2PGDG.rhel9.7.noarch.rpm pgdg 1.0 12.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_utl_smtp_14-1.0-2PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 14 pg_utl_smtp_14 pg_utl_smtp_14-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_utl_smtp_14-1.0-2PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 14 pg_utl_smtp_14 pg_utl_smtp_14-1.0-2PGDG.rhel10.1.noarch.rpm pgdg 1.0 12.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_utl_smtp_14-1.0-2PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 14 postgresql-14-utl-smtp postgresql-14-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-14-utl-smtp_1.0.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-utl-smtp postgresql-14-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-utl-smtp/postgresql-14-utl-smtp_1.0.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-utl-smtp postgresql-14-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-14-utl-smtp_1.0.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-utl-smtp postgresql-14-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-utl-smtp/postgresql-14-utl-smtp_1.0.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-utl-smtp postgresql-14-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-14-utl-smtp_1.0.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-utl-smtp postgresql-14-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-utl-smtp/postgresql-14-utl-smtp_1.0.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-utl-smtp postgresql-14-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-14-utl-smtp_1.0.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-utl-smtp postgresql-14-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb pigsty 1.0.0 7.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-utl-smtp/postgresql-14-utl-smtp_1.0.0-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_utl_smtp` 扩展的 DEB 包：

```bash
pig build pkg pg_utl_smtp         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_utl_smtp` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_utl_smtp;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_utl_smtp -v 18  # PG 18
pig ext install -y pg_utl_smtp -v 17  # PG 17
pig ext install -y pg_utl_smtp -v 16  # PG 16
pig ext install -y pg_utl_smtp -v 15  # PG 15
pig ext install -y pg_utl_smtp -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_utl_smtp_18       # PG 18
dnf install -y pg_utl_smtp_17       # PG 17
dnf install -y pg_utl_smtp_16       # PG 16
dnf install -y pg_utl_smtp_15       # PG 15
dnf install -y pg_utl_smtp_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-utl-smtp   # PG 18
apt install -y postgresql-17-utl-smtp   # PG 17
apt install -y postgresql-16-utl-smtp   # PG 16
apt install -y postgresql-15-utl-smtp   # PG 15
apt install -y postgresql-14-utl-smtp   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_utl_smtp CASCADE;  -- 依赖: plperlu
```



## 用法

> [pg_utl_smtp: PostgreSQL 的 Oracle UTL_SMTP 兼容扩展](https://github.com/hexacluster/pg_utl_smtp)

### 启用

```sql
CREATE EXTENSION plperlu;
CREATE EXTENSION pg_utl_smtp;
```

### 发送邮件

```sql
DO $$
DECLARE
    c utl_smtp.connection;
BEGIN
    c := utl_smtp.open_connection('smtp.example.com', 25);
    CALL utl_smtp.ehlo(c, 'mydomain.com');
    CALL utl_smtp.mail(c, 'sender@example.com');
    CALL utl_smtp.rcpt(c, 'recipient@example.com');
    CALL utl_smtp.open_data(c);
    CALL utl_smtp.write_data(c, 'From: sender@example.com' || E'\r\n');
    CALL utl_smtp.write_data(c, 'To: recipient@example.com' || E'\r\n');
    CALL utl_smtp.write_data(c, 'Subject: Test Email' || E'\r\n');
    CALL utl_smtp.write_data(c, E'\r\n');
    CALL utl_smtp.write_data(c, 'Hello from PostgreSQL!');
    CALL utl_smtp.close_data(c);
    CALL utl_smtp.quit(c);
END;
$$;
```

### 过程

- **OPEN_CONNECTION(host, port, tx_timeout, ...)** - 打开到 SMTP 服务器的连接。返回 `utl_smtp.connection` 类型。通过 `secure_connection_before_smtp` 支持 SSL/TLS。
- **EHLO(c, domain)** / **HELO(c, domain)** - 执行初始 SMTP 握手。
- **MAIL(c, sender)** - 发起邮件事务。
- **RCPT(c, recipient)** - 指定邮件收件人。多个收件人可多次调用。
- **OPEN_DATA(c)** - 发送 DATA 命令开始消息正文。
- **WRITE_DATA(c, data)** - 写入消息正文的一部分。
- **WRITE_RAW_DATA(c, data)** - 向消息正文写入原始数据。
- **CLOSE_DATA(c)** - 关闭数据会话。
- **QUIT(c)** - 终止 SMTP 会话并断开连接。

### 连接类型

```sql
-- utl_smtp.connection 复合类型
(host varchar(255), port integer, tx_timeout integer,
 private_tcp_con integer, private_state integer)
```

### 注意事项

- 需要系统上安装 Perl `Net::SMTP` 模块
- 使用 `E'\r\n'` 作为换行符替代 `utl_tcp.crlf`
- `wallet_path` 和 `wallet_password` 参数未使用

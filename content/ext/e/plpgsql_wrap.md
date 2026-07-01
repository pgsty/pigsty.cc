---
title: "plpgsql_wrap"
linkTitle: "plpgsql_wrap"
description: "Oracle WRAP 等价的 PL/pgSQL 语言处理器，以 AES-256-GCM 加密存储过程源码。"
weight: 9210
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/hexacluster/plpgsql_wrap/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">hexacluster/plpgsql_wrap</div>
    <div class="ext-card__desc">https://github.com/hexacluster/plpgsql_wrap/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/plpgsql_wrap-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">plpgsql_wrap-1.0.tar.gz</div>
    <div class="ext-card__desc">plpgsql_wrap-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plpgsql_wrap`**](/ext/e/plpgsql_wrap) | `1.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9210  | [**`plpgsql_wrap`**](/ext/e/plpgsql_wrap) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`orafce`](/ext/e/orafce) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pgaudit`](/ext/e/pgaudit) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGDG RPM and Pigsty DEB package hexacluster/plpgsql_wrap 1.0; control requires plpgsql and superuser=true; links OpenSSL.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `plpgsql_wrap` | `plpgsql` |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `plpgsql_wrap_$v` | `openssl-libs` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plpgsql-wrap` | `libssl3` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el8.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el9.x86_64 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 |
| el9.aarch64 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 |
| el10.x86_64 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 |
| el10.aarch64 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel8.10.x86_64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plpgsql_wrap_18-1.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel8.10.aarch64.rpm pgdg 1.0 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plpgsql_wrap_18-1.0-2PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel9.8.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_wrap_18-1.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel9.7.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_wrap_18-1.0-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel9.6.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plpgsql_wrap_18-1.0-2PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel9.8.aarch64.rpm pgdg 1.0 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_wrap_18-1.0-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel9.7.aarch64.rpm pgdg 1.0 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_wrap_18-1.0-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel9.6.aarch64.rpm pgdg 1.0 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plpgsql_wrap_18-1.0-2PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel10.2.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_wrap_18-1.0-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel10.1.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_wrap_18-1.0-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel10.0.x86_64.rpm pgdg 1.0 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plpgsql_wrap_18-1.0-2PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel10.2.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_wrap_18-1.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel10.1.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_wrap_18-1.0-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plpgsql_wrap_18 plpgsql_wrap_18-1.0-2PGDG.rhel10.0.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plpgsql_wrap_18-1.0-2PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 32.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 32.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-plpgsql-wrap postgresql-18-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-18-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel8.10.x86_64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plpgsql_wrap_17-1.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel8.10.aarch64.rpm pgdg 1.0 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plpgsql_wrap_17-1.0-2PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel9.8.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_wrap_17-1.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel9.7.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_wrap_17-1.0-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel9.6.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plpgsql_wrap_17-1.0-2PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel9.8.aarch64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_wrap_17-1.0-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel9.7.aarch64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_wrap_17-1.0-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel9.6.aarch64.rpm pgdg 1.0 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plpgsql_wrap_17-1.0-2PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel10.2.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_wrap_17-1.0-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel10.1.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_wrap_17-1.0-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel10.0.x86_64.rpm pgdg 1.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plpgsql_wrap_17-1.0-2PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel10.2.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_wrap_17-1.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel10.1.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_wrap_17-1.0-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plpgsql_wrap_17 plpgsql_wrap_17-1.0-2PGDG.rhel10.0.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plpgsql_wrap_17-1.0-2PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 36.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 37.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-plpgsql-wrap postgresql-17-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-17-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel8.10.x86_64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plpgsql_wrap_16-1.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel8.10.aarch64.rpm pgdg 1.0 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plpgsql_wrap_16-1.0-2PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel9.8.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_wrap_16-1.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel9.7.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_wrap_16-1.0-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel9.6.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plpgsql_wrap_16-1.0-2PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel9.8.aarch64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_wrap_16-1.0-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel9.7.aarch64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_wrap_16-1.0-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel9.6.aarch64.rpm pgdg 1.0 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plpgsql_wrap_16-1.0-2PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel10.2.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_wrap_16-1.0-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel10.1.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_wrap_16-1.0-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel10.0.x86_64.rpm pgdg 1.0 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plpgsql_wrap_16-1.0-2PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel10.2.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_wrap_16-1.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel10.1.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_wrap_16-1.0-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plpgsql_wrap_16 plpgsql_wrap_16-1.0-2PGDG.rhel10.0.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plpgsql_wrap_16-1.0-2PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 36.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-plpgsql-wrap postgresql-16-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-16-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel8.10.x86_64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plpgsql_wrap_15-1.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel8.10.aarch64.rpm pgdg 1.0 22.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plpgsql_wrap_15-1.0-2PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel9.8.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_wrap_15-1.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel9.7.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_wrap_15-1.0-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel9.6.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plpgsql_wrap_15-1.0-2PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel9.8.aarch64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_wrap_15-1.0-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel9.7.aarch64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_wrap_15-1.0-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel9.6.aarch64.rpm pgdg 1.0 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plpgsql_wrap_15-1.0-2PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel10.2.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_wrap_15-1.0-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel10.1.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_wrap_15-1.0-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel10.0.x86_64.rpm pgdg 1.0 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plpgsql_wrap_15-1.0-2PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel10.2.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_wrap_15-1.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel10.1.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_wrap_15-1.0-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plpgsql_wrap_15 plpgsql_wrap_15-1.0-2PGDG.rhel10.0.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plpgsql_wrap_15-1.0-2PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 31.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 30.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 36.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-plpgsql-wrap postgresql-15-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-15-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel8.10.x86_64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plpgsql_wrap_14-1.0-2PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel8.10.aarch64.rpm pgdg 1.0 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plpgsql_wrap_14-1.0-2PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel9.8.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_wrap_14-1.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel9.7.x86_64.rpm pgdg 1.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_wrap_14-1.0-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel9.6.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plpgsql_wrap_14-1.0-2PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel9.8.aarch64.rpm pgdg 1.0 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_wrap_14-1.0-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel9.7.aarch64.rpm pgdg 1.0 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_wrap_14-1.0-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel9.6.aarch64.rpm pgdg 1.0 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plpgsql_wrap_14-1.0-2PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel10.2.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_wrap_14-1.0-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel10.1.x86_64.rpm pgdg 1.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_wrap_14-1.0-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel10.0.x86_64.rpm pgdg 1.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plpgsql_wrap_14-1.0-2PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel10.2.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_wrap_14-1.0-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel10.1.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_wrap_14-1.0-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 plpgsql_wrap_14 plpgsql_wrap_14-1.0-2PGDG.rhel10.0.aarch64.rpm pgdg 1.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plpgsql_wrap_14-1.0-2PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 30.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 30.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 30.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 36.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 32.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 32.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-plpgsql-wrap postgresql-14-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 31.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/plpgsql-wrap/postgresql-14-plpgsql-wrap_1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `plpgsql_wrap` 扩展的 RPM / DEB 包：

```bash
pig build pkg plpgsql_wrap         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `plpgsql_wrap` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plpgsql_wrap;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plpgsql_wrap -v 18  # PG 18
pig ext install -y plpgsql_wrap -v 17  # PG 17
pig ext install -y plpgsql_wrap -v 16  # PG 16
pig ext install -y plpgsql_wrap -v 15  # PG 15
pig ext install -y plpgsql_wrap -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plpgsql_wrap_18       # PG 18
dnf install -y plpgsql_wrap_17       # PG 17
dnf install -y plpgsql_wrap_16       # PG 16
dnf install -y plpgsql_wrap_15       # PG 15
dnf install -y plpgsql_wrap_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plpgsql-wrap   # PG 18
apt install -y postgresql-17-plpgsql-wrap   # PG 17
apt install -y postgresql-16-plpgsql-wrap   # PG 16
apt install -y postgresql-15-plpgsql-wrap   # PG 15
apt install -y postgresql-14-plpgsql-wrap   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plpgsql_wrap CASCADE;  -- 依赖: plpgsql
```

## 用法

来源：[README](https://github.com/HexaCluster/plpgsql_wrap/blob/v1.0/README.md)、[v1.0 release](https://github.com/HexaCluster/plpgsql_wrap/releases/tag/v1.0)、[control file](https://github.com/HexaCluster/plpgsql_wrap/blob/v1.0/plpgsql_wrap.control)

`plpgsql_wrap` 为 PostgreSQL 提供 Oracle WRAP 风格的 procedural language。使用 `LANGUAGE plpgsql_wrap` 编写的函数会先按 PL/pgSQL 校验，然后以 `PLPGSQLWRAP:1:<hex>` 形式加密存储在 `pg_proc.prosrc` 中。

### 带 Key 安装

使用 32-byte AES-256-GCM key 构建扩展：

```bash
export WRAP_KEY_HEX=$(openssl rand -hex 32)
make WRAP_KEY_HEX=$WRAP_KEY_HEX
sudo make install
```

备份该 key。只有正确的 compiled key 可用时，wrapped functions 才能安全 unwrap 或 restore。

在每个需要该 language 的数据库中安装扩展：

```sql
CREATE EXTENSION plpgsql_wrap; -- requires plpgsql
```

### 创建 Wrapped Functions

使用普通 PL/pgSQL 语法，只是 language name 不同：

```sql
CREATE OR REPLACE FUNCTION public.calculate_bonus(emp_id int, yr int)
RETURNS numeric
LANGUAGE plpgsql_wrap
AS $$
DECLARE
  v_salary numeric;
BEGIN
  SELECT salary INTO v_salary FROM employees WHERE id = emp_id;
  RETURN v_salary * 0.15;
END;
$$;
```

存储的函数体不可读：

```sql
SELECT substring(prosrc, 1, 32) AS wrapped_code
FROM pg_proc
WHERE proname = 'calculate_bonus';
```

### Dump、Restore 与 Unwrap

`pg_dump` 会输出加密后的 `PLPGSQLWRAP:1:` blob。在具有相同 compiled key 的服务器上 restore 可以正常工作。不同 key 会保留 blob，但调用时如果 validator/authentication path 无法认证它，就会失败。

superuser 知道 key 时，可以永久 unwrap 一个函数：

```sql
SELECT plpgsql_wrap.unwrap_procedure(
  'myhexkey',
  'public',
  'calculate_bonus',
  'emp_id int, yr int'
);
```

### 注意事项

- 版本 1.0 支持 PostgreSQL 14-18。
- Control file 要求 `plpgsql`，并且需要 superuser installation。
- 这可以防止随意查看源码和 dumps，但 compiled key 是关键 secret。应相应保护 package artifacts 和 build logs。
- 语法会在加密前校验，因此普通 PL/pgSQL syntax errors 会在写入 encrypted storage 前中止 `CREATE FUNCTION`。

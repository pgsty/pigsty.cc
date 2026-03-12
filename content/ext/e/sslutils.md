---
title: "sslutils"
linkTitle: "sslutils"
description: "使用SQL管理SSL证书"
weight: 7410
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/sslutils">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/sslutils</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/sslutils</div>
  </a>
  <a class="ext-card ext-card--source" href="sslutils-1.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">sslutils-1.4.tar.gz</div>
    <div class="ext-card__desc">sslutils-1.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`sslutils`**](/ext/e/sslutils) | `1.4` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7410  | [**`sslutils`**](/ext/e/sslutils) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`sslinfo`](/ext/e/sslinfo) [`pgsodium`](/ext/e/pgsodium) [`pgsmcrypto`](/ext/e/pgsmcrypto) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgcrypto`](/ext/e/pgcrypto) [`pg_tde`](/ext/e/pg_tde) [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`supautils`](/ext/e/supautils) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> no pg15,14 on el9, no pg18 on el8


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `sslutils` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `sslutils_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-sslutils` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el8.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| el9.x86_64 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| el9.aarch64 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| el10.x86_64 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el10.aarch64 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| d12.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
@ el8.x86_64 18 sslutils_18 sslutils_18-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 24.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/sslutils_18-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 sslutils_18 sslutils_18-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 23.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/sslutils_18-1.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 sslutils_18 sslutils_18-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/sslutils_18-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.4 24.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/sslutils_18-1.4-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 sslutils_18 sslutils_18-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/sslutils_18-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.4 23.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/sslutils_18-1.4-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 sslutils_18 sslutils_18-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/sslutils_18-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/sslutils_18-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/sslutils_18-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 sslutils_18 sslutils_18-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/sslutils_18-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 37.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 40.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 38.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-sslutils postgresql-18-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-18-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 24.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/sslutils_17-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 24.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/sslutils_17-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 23.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/sslutils_17-1.4-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 23.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/sslutils_17-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/sslutils_17-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 24.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/sslutils_17-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/sslutils_17-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 sslutils_17 sslutils_17-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 23.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/sslutils_17-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/sslutils_17-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 sslutils_17 sslutils_17-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/sslutils_17-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/sslutils_17-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 sslutils_17 sslutils_17-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/sslutils_17-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 36.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 42.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 41.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-sslutils postgresql-17-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-17-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 24.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/sslutils_16-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.4 24.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/sslutils_16-1.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 23.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/sslutils_16-1.4-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.4 23.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/sslutils_16-1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/sslutils_16-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.4 24.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/sslutils_16-1.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/sslutils_16-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 sslutils_16 sslutils_16-1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.4 23.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/sslutils_16-1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/sslutils_16-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 sslutils_16 sslutils_16-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/sslutils_16-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/sslutils_16-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 sslutils_16 sslutils_16-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/sslutils_16-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 37.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 42.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 41.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-sslutils postgresql-16-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-16-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 24.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/sslutils_15-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 sslutils_15 sslutils_15-1.3-4.rhel8.x86_64.rpm pgdg 1.3 49.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/sslutils_15-1.3-4.rhel8.x86_64.rpm
@ el8.aarch64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 23.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/sslutils_15-1.4-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/sslutils_15-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/sslutils_15-1.4-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/sslutils_15-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 sslutils_15 sslutils_15-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/sslutils_15-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/sslutils_15-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 sslutils_15 sslutils_15-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/sslutils_15-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 37.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 42.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 41.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-sslutils postgresql-15-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-15-sslutils_1.4-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 24.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/sslutils_14-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 sslutils_14 sslutils_14-1.3-4.rhel8.x86_64.rpm pgdg 1.3 48.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/sslutils_14-1.3-4.rhel8.x86_64.rpm
@ el8.aarch64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 23.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/sslutils_14-1.4-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/sslutils_14-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 23.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/sslutils_14-1.4-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 25.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/sslutils_14-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 sslutils_14 sslutils_14-1.4-2PGDG.rhel10.x86_64.rpm pgdg 1.4 25.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/sslutils_14-1.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 sslutils_14 sslutils_14-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 24.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/sslutils_14-1.4-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 sslutils_14 sslutils_14-1.4-2PGDG.rhel10.aarch64.rpm pgdg 1.4 24.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/sslutils_14-1.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~bookworm_amd64.deb pigsty 1.4 37.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~bookworm_arm64.deb pigsty 1.4 35.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~trixie_amd64.deb pigsty 1.4 37.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~trixie_arm64.deb pigsty 1.4 36.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~jammy_amd64.deb pigsty 1.4 42.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~jammy_arm64.deb pigsty 1.4 41.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~noble_amd64.deb pigsty 1.4 39.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-sslutils postgresql-14-sslutils_1.4-2PIGSTY~noble_arm64.deb pigsty 1.4 38.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/sslutils/postgresql-14-sslutils_1.4-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `sslutils` 扩展的 RPM / DEB 包：

```bash
pig build pkg sslutils         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `sslutils` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install sslutils;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y sslutils -v 18  # PG 18
pig ext install -y sslutils -v 17  # PG 17
pig ext install -y sslutils -v 16  # PG 16
pig ext install -y sslutils -v 15  # PG 15
pig ext install -y sslutils -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y sslutils_18       # PG 18
dnf install -y sslutils_17       # PG 17
dnf install -y sslutils_16       # PG 16
dnf install -y sslutils_15       # PG 15
dnf install -y sslutils_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-sslutils   # PG 18
apt install -y postgresql-17-sslutils   # PG 17
apt install -y postgresql-16-sslutils   # PG 16
apt install -y postgresql-15-sslutils   # PG 15
apt install -y postgresql-14-sslutils   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION sslutils;
```



## 用法

> [sslutils: 通过 SQL 管理 SSL 证书](https://github.com/EnterpriseDB/sslutils)

`sslutils` 是一个通过 SQL 命令管理 SSL 证书的 PostgreSQL 扩展。它提供直接在数据库内生成、检查和管理 SSL/TLS 证书的函数。

```sql
CREATE EXTENSION sslutils;
```

### 函数

该扩展提供以下 SSL 证书管理的 SQL 函数：

| 函数 | 描述 |
|----------|-------------|
| `openssl_rsa_generate_key(bits int)` | 生成 RSA 私钥 |
| `openssl_rsa_key_to_csr(key text, cn text, ...)` | 生成证书签名请求 |
| `openssl_csr_to_crt(csr text, ca_key text, ca_crt text)` | 签署 CSR 生成证书 |
| `openssl_rsa_generate_crl(ca_key text, ca_crt text)` | 生成证书吊销列表 |
| `ssl_is_init_fn()` | 检查 SSL 是否已初始化 |
| `ssl_get_cipher_fn()` | 获取当前 SSL 密码套件 |
| `ssl_get_version_fn()` | 获取当前 SSL 版本 |

### 典型工作流程

```sql
-- 生成 CA 私钥
SELECT openssl_rsa_generate_key(2048);

-- 创建自签名 CA 证书
-- 生成服务器密钥和 CSR
-- 使用 CA 签署 CSR
```

该扩展适用于在托管 PostgreSQL 环境中自动化 SSL 证书配置。

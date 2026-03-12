---
title: "pg_readonly"
linkTitle: "pg_readonly"
description: "将集群设置为只读"
weight: 5120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pierreforstmann/pg_readonly">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pierreforstmann/pg_readonly</div>
    <div class="ext-card__desc">https://github.com/pierreforstmann/pg_readonly</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_readonly-1.0.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_readonly-1.0.4.tar.gz</div>
    <div class="ext-card__desc">pg_readonly-1.0.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_readonly`**](/ext/e/pg_readonly) | `1.0.4` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5120  | [**`pg_readonly`**](/ext/e/pg_readonly) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_permissions`](/ext/e/pg_permissions) [`pg_upless`](/ext/e/pg_upless) [`safeupdate`](/ext/e/safeupdate) [`set_user`](/ext/e/set_user) [`pgaudit`](/ext/e/pgaudit) [`noset`](/ext/e/noset) [`sepgsql`](/ext/e/sepgsql) [`login_hook`](/ext/e/login_hook) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_readonly` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_readonly_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-readonly` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 3 | AVAIL PGDG 1.0.4 3 |
| el8.aarch64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 |
| el9.x86_64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 3 | AVAIL PGDG 1.0.4 3 |
| el9.aarch64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 |
| el10.x86_64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 |
| el10.aarch64 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 | AVAIL PGDG 1.0.4 2 |
| d12.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 | AVAIL PIGSTY 1.0.4 1 |
@ el8.x86_64 18 pg_readonly_18 pg_readonly_18-1.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.4 16.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_readonly_18-1.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_readonly_18 pg_readonly_18-1.0.3-5PGDG.rhel8.x86_64.rpm pgdg 1.0.3 16.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_readonly_18-1.0.3-5PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_readonly_18 pg_readonly_18-1.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.4 16.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_readonly_18-1.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_readonly_18 pg_readonly_18-1.0.3-5PGDG.rhel8.aarch64.rpm pgdg 1.0.3 16.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_readonly_18-1.0.3-5PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_readonly_18 pg_readonly_18-1.0.4-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0.4 16.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_readonly_18-1.0.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_readonly_18 pg_readonly_18-1.0.3-5PGDG.rhel9.x86_64.rpm pgdg 1.0.3 16.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_readonly_18-1.0.3-5PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_readonly_18 pg_readonly_18-1.0.4-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0.4 15.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_readonly_18-1.0.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_readonly_18 pg_readonly_18-1.0.3-5PGDG.rhel9.aarch64.rpm pgdg 1.0.3 16.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_readonly_18-1.0.3-5PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_readonly_18 pg_readonly_18-1.0.4-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0.4 16.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_readonly_18-1.0.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_readonly_18 pg_readonly_18-1.0.3-5PGDG.rhel10.x86_64.rpm pgdg 1.0.3 16.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_readonly_18-1.0.3-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_readonly_18 pg_readonly_18-1.0.4-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0.4 16.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_readonly_18-1.0.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_readonly_18 pg_readonly_18-1.0.3-5PGDG.rhel10.aarch64.rpm pgdg 1.0.3 16.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_readonly_18-1.0.3-5PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-readonly postgresql-18-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-18-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-readonly postgresql-18-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-18-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-readonly postgresql-18-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-18-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-readonly postgresql-18-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-18-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-readonly postgresql-18-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 16.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-18-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-readonly postgresql-18-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 16.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-18-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-readonly postgresql-18-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 17.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-18-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-readonly postgresql-18-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 17.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-18-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_readonly_17 pg_readonly_17-1.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.4 16.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_readonly_17-1.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_readonly_17 pg_readonly_17-1.0.3-4PGDG.rhel8.x86_64.rpm pgdg 1.0.3 16.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_readonly_17-1.0.3-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_readonly_17 pg_readonly_17-1.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.4 16.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_readonly_17-1.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_readonly_17 pg_readonly_17-1.0.3-4PGDG.rhel8.aarch64.rpm pgdg 1.0.3 16.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_readonly_17-1.0.3-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_readonly_17 pg_readonly_17-1.0.4-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0.4 16.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_readonly_17-1.0.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_readonly_17 pg_readonly_17-1.0.3-4PGDG.rhel9.x86_64.rpm pgdg 1.0.3 16.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_readonly_17-1.0.3-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_readonly_17 pg_readonly_17-1.0.4-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0.4 15.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_readonly_17-1.0.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_readonly_17 pg_readonly_17-1.0.3-4PGDG.rhel9.aarch64.rpm pgdg 1.0.3 16.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_readonly_17-1.0.3-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_readonly_17 pg_readonly_17-1.0.4-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0.4 16.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_readonly_17-1.0.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_readonly_17 pg_readonly_17-1.0.3-5PGDG.rhel10.x86_64.rpm pgdg 1.0.3 17.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_readonly_17-1.0.3-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_readonly_17 pg_readonly_17-1.0.4-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0.4 16.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_readonly_17-1.0.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_readonly_17 pg_readonly_17-1.0.3-5PGDG.rhel10.aarch64.rpm pgdg 1.0.3 16.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_readonly_17-1.0.3-5PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-readonly postgresql-17-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-17-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-readonly postgresql-17-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-17-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-readonly postgresql-17-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-17-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-readonly postgresql-17-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-17-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-readonly postgresql-17-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 19.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-17-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-readonly postgresql-17-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 19.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-17-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-readonly postgresql-17-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 17.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-17-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-readonly postgresql-17-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 17.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-17-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_readonly_16 pg_readonly_16-1.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.4 16.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_readonly_16-1.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_readonly_16 pg_readonly_16-1.0.3-2.rhel8.1.x86_64.rpm pgdg 1.0.3 16.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_readonly_16-1.0.3-2.rhel8.1.x86_64.rpm
@ el8.aarch64 16 pg_readonly_16 pg_readonly_16-1.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.4 16.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_readonly_16-1.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_readonly_16 pg_readonly_16-1.0.3-2.rhel8.1.aarch64.rpm pgdg 1.0.3 16.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_readonly_16-1.0.3-2.rhel8.1.aarch64.rpm
@ el9.x86_64 16 pg_readonly_16 pg_readonly_16-1.0.4-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0.4 16.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_readonly_16-1.0.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_readonly_16 pg_readonly_16-1.0.3-2.rhel9.1.x86_64.rpm pgdg 1.0.3 16.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_readonly_16-1.0.3-2.rhel9.1.x86_64.rpm
@ el9.aarch64 16 pg_readonly_16 pg_readonly_16-1.0.4-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0.4 15.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_readonly_16-1.0.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_readonly_16 pg_readonly_16-1.0.3-2.rhel9.1.aarch64.rpm pgdg 1.0.3 16.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_readonly_16-1.0.3-2.rhel9.1.aarch64.rpm
@ el10.x86_64 16 pg_readonly_16 pg_readonly_16-1.0.4-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0.4 16.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_readonly_16-1.0.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_readonly_16 pg_readonly_16-1.0.3-5PGDG.rhel10.x86_64.rpm pgdg 1.0.3 17.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_readonly_16-1.0.3-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_readonly_16 pg_readonly_16-1.0.4-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0.4 16.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_readonly_16-1.0.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_readonly_16 pg_readonly_16-1.0.3-5PGDG.rhel10.aarch64.rpm pgdg 1.0.3 16.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_readonly_16-1.0.3-5PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-readonly postgresql-16-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-16-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-readonly postgresql-16-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-16-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-readonly postgresql-16-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-16-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-readonly postgresql-16-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-16-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-readonly postgresql-16-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 19.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-16-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-readonly postgresql-16-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 19.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-16-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-readonly postgresql-16-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 17.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-16-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-readonly postgresql-16-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 17.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-16-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_readonly_15 pg_readonly_15-1.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.4 16.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_readonly_15-1.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_readonly_15 pg_readonly_15-1.0.3-1.rhel8.x86_64.rpm pgdg 1.0.3 30.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_readonly_15-1.0.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_readonly_15 pg_readonly_15-1.0.1-1.rhel8.x86_64.rpm pgdg 1.0.1 29.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_readonly_15-1.0.1-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_readonly_15 pg_readonly_15-1.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.4 16.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_readonly_15-1.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_readonly_15 pg_readonly_15-1.0.3-1.rhel8.aarch64.rpm pgdg 1.0.3 30.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_readonly_15-1.0.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_readonly_15 pg_readonly_15-1.0.4-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0.4 16.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_readonly_15-1.0.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_readonly_15 pg_readonly_15-1.0.3-1.rhel9.x86_64.rpm pgdg 1.0.3 31.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_readonly_15-1.0.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_readonly_15 pg_readonly_15-1.0.1-1.rhel9.x86_64.rpm pgdg 1.0.1 29.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_readonly_15-1.0.1-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_readonly_15 pg_readonly_15-1.0.4-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0.4 15.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_readonly_15-1.0.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_readonly_15 pg_readonly_15-1.0.3-1.rhel9.aarch64.rpm pgdg 1.0.3 31.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_readonly_15-1.0.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_readonly_15 pg_readonly_15-1.0.4-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0.4 16.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_readonly_15-1.0.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_readonly_15 pg_readonly_15-1.0.3-5PGDG.rhel10.x86_64.rpm pgdg 1.0.3 17.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_readonly_15-1.0.3-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_readonly_15 pg_readonly_15-1.0.4-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0.4 16.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_readonly_15-1.0.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_readonly_15 pg_readonly_15-1.0.3-5PGDG.rhel10.aarch64.rpm pgdg 1.0.3 16.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_readonly_15-1.0.3-5PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-readonly postgresql-15-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-15-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-readonly postgresql-15-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 16.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-15-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-readonly postgresql-15-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 16.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-15-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-readonly postgresql-15-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 16.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-15-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-readonly postgresql-15-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 19.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-15-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-readonly postgresql-15-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 19.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-15-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-readonly postgresql-15-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 17.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-15-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-readonly postgresql-15-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 17.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-15-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_readonly_14 pg_readonly_14-1.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.4 16.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_readonly_14-1.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_readonly_14 pg_readonly_14-1.0.3-1.rhel8.x86_64.rpm pgdg 1.0.3 30.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_readonly_14-1.0.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_readonly_14 pg_readonly_14-1.0.1-1.rhel8.x86_64.rpm pgdg 1.0.1 29.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_readonly_14-1.0.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_readonly_14 pg_readonly_14-1.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.4 16.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_readonly_14-1.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_readonly_14 pg_readonly_14-1.0.3-1.rhel8.aarch64.rpm pgdg 1.0.3 30.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_readonly_14-1.0.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_readonly_14 pg_readonly_14-1.0.4-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0.4 16.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_readonly_14-1.0.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_readonly_14 pg_readonly_14-1.0.3-1.rhel9.x86_64.rpm pgdg 1.0.3 31.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_readonly_14-1.0.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_readonly_14 pg_readonly_14-1.0.1-1.rhel9.x86_64.rpm pgdg 1.0.1 29.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_readonly_14-1.0.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_readonly_14 pg_readonly_14-1.0.4-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0.4 15.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_readonly_14-1.0.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_readonly_14 pg_readonly_14-1.0.3-1.rhel9.aarch64.rpm pgdg 1.0.3 30.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_readonly_14-1.0.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_readonly_14 pg_readonly_14-1.0.4-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0.4 16.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_readonly_14-1.0.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_readonly_14 pg_readonly_14-1.0.3-5PGDG.rhel10.x86_64.rpm pgdg 1.0.3 16.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_readonly_14-1.0.3-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_readonly_14 pg_readonly_14-1.0.4-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0.4 16.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_readonly_14-1.0.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_readonly_14 pg_readonly_14-1.0.3-5PGDG.rhel10.aarch64.rpm pgdg 1.0.3 16.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_readonly_14-1.0.3-5PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-readonly postgresql-14-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb pigsty 1.0.4 16.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-14-pg-readonly_1.0.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-readonly postgresql-14-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb pigsty 1.0.4 16.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-readonly/postgresql-14-pg-readonly_1.0.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-readonly postgresql-14-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb pigsty 1.0.4 16.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-14-pg-readonly_1.0.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-readonly postgresql-14-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb pigsty 1.0.4 16.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-readonly/postgresql-14-pg-readonly_1.0.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-readonly postgresql-14-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb pigsty 1.0.4 19.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-14-pg-readonly_1.0.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-readonly postgresql-14-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb pigsty 1.0.4 19.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-readonly/postgresql-14-pg-readonly_1.0.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-readonly postgresql-14-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb pigsty 1.0.4 17.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-14-pg-readonly_1.0.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-readonly postgresql-14-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb pigsty 1.0.4 16.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-readonly/postgresql-14-pg-readonly_1.0.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_readonly` 扩展的 DEB 包：

```bash
pig build pkg pg_readonly         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_readonly` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_readonly;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_readonly -v 18  # PG 18
pig ext install -y pg_readonly -v 17  # PG 17
pig ext install -y pg_readonly -v 16  # PG 16
pig ext install -y pg_readonly -v 15  # PG 15
pig ext install -y pg_readonly -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_readonly_18       # PG 18
dnf install -y pg_readonly_17       # PG 17
dnf install -y pg_readonly_16       # PG 16
dnf install -y pg_readonly_15       # PG 15
dnf install -y pg_readonly_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-readonly   # PG 18
apt install -y postgresql-17-pg-readonly   # PG 17
apt install -y postgresql-16-pg-readonly   # PG 16
apt install -y postgresql-15-pg-readonly   # PG 15
apt install -y postgresql-14-pg-readonly   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_readonly;
```



## 用法

> [pg_readonly: 将集群数据库设置为只读](https://github.com/pierreforstmann/pg_readonly)

pg_readonly 在 SQL 层面将 PostgreSQL 集群中的所有数据库设置为只读模式。必须通过 `shared_preload_libraries` 加载。只读状态在共享内存中通过全局标志管理（重启后不保留）。

### 检查只读状态

```sql
SELECT get_cluster_readonly();
-- 返回 false（可读写）或 true（只读）
```

### 设置集群为只读

```sql
SELECT set_cluster_readonly();
```

在只读模式下，SELECT 语句被允许（除非调用了写入函数），但 DML（INSERT、UPDATE、DELETE）、DDL（包括 TRUNCATE）和 DCL（GRANT、REVOKE）被阻止：

```sql
SELECT * FROM t;              -- 允许
UPDATE t SET x = 33;          -- ERROR: pg_readonly: invalid statement because cluster is read-only
CREATE TABLE tmp(c text);     -- ERROR: pg_readonly: invalid statement because cluster is read-only
```

注意：`set_cluster_readonly()` 会终止所有打开的事务。

### 设置集群为可读写

```sql
SELECT unset_cluster_readonly();
```

注意：后台进程（checkpointer、bgwriter、walwriter、autovacuum）在只读模式下继续运行——限制仅在 SQL 语句层面。

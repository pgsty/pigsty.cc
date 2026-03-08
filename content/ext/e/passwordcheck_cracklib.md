---
title: "passwordcheck_cracklib"
linkTitle: "passwordcheck_cracklib"
description: "使用cracklib加固PG用户密码"
weight: 7000
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/devrimgunduz/passwordcheck_cracklib">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">devrimgunduz/passwordcheck_cracklib</div>
    <div class="ext-card__desc">https://github.com/devrimgunduz/passwordcheck_cracklib</div>
  </a>
  <a class="ext-card ext-card--source" href="passwordcheck_cracklib-3.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">passwordcheck_cracklib-3.1.0.tar.gz</div>
    <div class="ext-card__desc">passwordcheck_cracklib-3.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`passwordcheck_cracklib`**](/ext/e/passwordcheck_cracklib) | `3.1.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license lgpl21" href="/ext/license#lgpl21">LGPL-2.1</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7000  | [**`passwordcheck_cracklib`**](/ext/e/passwordcheck_cracklib) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_auth_mon`](/ext/e/pg_auth_mon) [`credcheck`](/ext/e/credcheck) [`pgaudit`](/ext/e/pgaudit) [`login_hook`](/ext/e/login_hook) [`auth_delay`](/ext/e/auth_delay) [`set_user`](/ext/e/set_user) [`sepgsql`](/ext/e/sepgsql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `3.1.0` | {{< pgvers "18,17,16,15,14" >}} | `passwordcheck_cracklib` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.1.0` | {{< pgvers "18,17,16,15,14" >}} | `passwordcheck_cracklib_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-passwordcheck-cracklib` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.0.0 1 | AVAIL PGDG 3.0.0 1 | AVAIL PGDG 3.0.0 2 |
| el8.aarch64 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.0.0 1 | AVAIL PGDG 3.0.0 1 | AVAIL PGDG 3.0.0 1 |
| el9.x86_64 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.0.0 1 | AVAIL PGDG 3.0.0 1 | AVAIL PGDG 3.0.0 2 |
| el9.aarch64 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.0.0 1 | AVAIL PGDG 3.0.0 1 | AVAIL PGDG 3.0.0 1 |
| el10.x86_64 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 |
| el10.aarch64 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 | AVAIL PGDG 3.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 | AVAIL PIGSTY 3.1.0 1 |
@ el8.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel8.x86_64.rpm pgdg 3.1.0 12.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel8.aarch64.rpm pgdg 3.1.0 12.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel9.x86_64.rpm pgdg 3.1.0 11.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel9.aarch64.rpm pgdg 3.1.0 11.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb pigsty 3.1.0 17.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb pigsty 3.1.0 17.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb pigsty 3.1.0 17.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb pigsty 3.1.0 17.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb pigsty 3.1.0 18.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb pigsty 3.1.0 18.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb pigsty 3.1.0 18.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb pigsty 3.1.0 18.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-2PGDG.rhel8.x86_64.rpm pgdg 3.1.0 12.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/passwordcheck_cracklib_17-3.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-2PGDG.rhel8.aarch64.rpm pgdg 3.1.0 12.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/passwordcheck_cracklib_17-3.1.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-2PGDG.rhel9.x86_64.rpm pgdg 3.1.0 11.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/passwordcheck_cracklib_17-3.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-2PGDG.rhel9.aarch64.rpm pgdg 3.1.0 11.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/passwordcheck_cracklib_17-3.1.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/passwordcheck_cracklib_17-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/passwordcheck_cracklib_17-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb pigsty 3.1.0 17.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb pigsty 3.1.0 17.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb pigsty 3.1.0 17.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb pigsty 3.1.0 17.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb pigsty 3.1.0 18.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb pigsty 3.1.0 18.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb pigsty 3.1.0 18.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb pigsty 3.1.0 18.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.0.0-1.rhel8.1.x86_64.rpm pgdg 3.0.0 11.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/passwordcheck_cracklib_16-3.0.0-1.rhel8.1.x86_64.rpm
@ el8.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.0.0-1.rhel8.1.aarch64.rpm pgdg 3.0.0 11.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/passwordcheck_cracklib_16-3.0.0-1.rhel8.1.aarch64.rpm
@ el9.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.0.0-1.rhel9.1.x86_64.rpm pgdg 3.0.0 11.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/passwordcheck_cracklib_16-3.0.0-1.rhel9.1.x86_64.rpm
@ el9.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.0.0-1.rhel9.1.aarch64.rpm pgdg 3.0.0 10.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/passwordcheck_cracklib_16-3.0.0-1.rhel9.1.aarch64.rpm
@ el10.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/passwordcheck_cracklib_16-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/passwordcheck_cracklib_16-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb pigsty 3.1.0 17.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb pigsty 3.1.0 17.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb pigsty 3.1.0 17.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb pigsty 3.1.0 17.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb pigsty 3.1.0 18.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb pigsty 3.1.0 18.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb pigsty 3.1.0 18.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb pigsty 3.1.0 18.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.0.0-1.rhel8.x86_64.rpm pgdg 3.0.0 11.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/passwordcheck_cracklib_15-3.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.0.0-1.rhel8.aarch64.rpm pgdg 3.0.0 11.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/passwordcheck_cracklib_15-3.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.0.0-1.rhel9.x86_64.rpm pgdg 3.0.0 11.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/passwordcheck_cracklib_15-3.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.0.0-1.rhel9.aarch64.rpm pgdg 3.0.0 10.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/passwordcheck_cracklib_15-3.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/passwordcheck_cracklib_15-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/passwordcheck_cracklib_15-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb pigsty 3.1.0 17.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb pigsty 3.1.0 17.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb pigsty 3.1.0 17.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb pigsty 3.1.0 17.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb pigsty 3.1.0 18.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb pigsty 3.1.0 18.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb pigsty 3.1.0 18.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb pigsty 3.1.0 18.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.0.0-1.rhel8.x86_64.rpm pgdg 3.0.0 11.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/passwordcheck_cracklib_14-3.0.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-2.0.0-1.rhel8.x86_64.rpm pgdg 2.0.0 17.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/passwordcheck_cracklib_14-2.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.0.0-1.rhel8.aarch64.rpm pgdg 3.0.0 11.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/passwordcheck_cracklib_14-3.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.0.0-1.rhel9.x86_64.rpm pgdg 3.0.0 11.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/passwordcheck_cracklib_14-3.0.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-2.0.0-1.rhel9.x86_64.rpm pgdg 2.0.0 16.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/passwordcheck_cracklib_14-2.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.0.0-1.rhel9.aarch64.rpm pgdg 3.0.0 10.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/passwordcheck_cracklib_14-3.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/passwordcheck_cracklib_14-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/passwordcheck_cracklib_14-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb pigsty 3.1.0 17.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb pigsty 3.1.0 17.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb pigsty 3.1.0 17.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb pigsty 3.1.0 17.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb pigsty 3.1.0 18.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb pigsty 3.1.0 18.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb pigsty 3.1.0 18.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb pigsty 3.1.0 18.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.1.0-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `passwordcheck_cracklib` 扩展的 DEB 包：

```bash
pig build pkg passwordcheck_cracklib         # 构建 DEB 包
```


## 安装

您可以直接安装 `passwordcheck_cracklib` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install passwordcheck_cracklib;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y passwordcheck_cracklib -v 18  # PG 18
pig ext install -y passwordcheck_cracklib -v 17  # PG 17
pig ext install -y passwordcheck_cracklib -v 16  # PG 16
pig ext install -y passwordcheck_cracklib -v 15  # PG 15
pig ext install -y passwordcheck_cracklib -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y passwordcheck_cracklib_18       # PG 18
dnf install -y passwordcheck_cracklib_17       # PG 17
dnf install -y passwordcheck_cracklib_16       # PG 16
dnf install -y passwordcheck_cracklib_15       # PG 15
dnf install -y passwordcheck_cracklib_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-passwordcheck-cracklib   # PG 18
apt install -y postgresql-17-passwordcheck-cracklib   # PG 17
apt install -y postgresql-16-passwordcheck-cracklib   # PG 16
apt install -y postgresql-15-passwordcheck-cracklib   # PG 15
apt install -y postgresql-14-passwordcheck-cracklib   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = '$libdir/passwordcheck_cracklib';
```


---
title: "safeupdate"
linkTitle: "safeupdate"
description: "强制在 UPDATE 和 DELETE 时提供 Where 条件"
weight: 5820
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/eradman/pg-safeupdate">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">eradman/pg-safeupdate</div>
    <div class="ext-card__desc">https://github.com/eradman/pg-safeupdate</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg-safeupdate-1.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-safeupdate-1.5.tar.gz</div>
    <div class="ext-card__desc">pg-safeupdate-1.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`safeupdate`**](/ext/e/safeupdate) | `1.5` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5820  | [**`safeupdate`**](/ext/e/safeupdate) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_readonly`](/ext/e/pg_readonly) [`pg_upless`](/ext/e/pg_upless) [`pg_savior`](/ext/e/pg_savior) [`pg_permissions`](/ext/e/pg_permissions) [`pgaudit`](/ext/e/pgaudit) [`set_user`](/ext/e/set_user) [`login_hook`](/ext/e/login_hook) [`noset`](/ext/e/noset) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `safeupdate` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `safeupdate_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-safeupdate` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 2 | AVAIL PGDG 1.5 2 | AVAIL PGDG 1.5 2 |
| el8.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 2 | AVAIL PGDG 1.5 3 | AVAIL PGDG 1.5 3 |
| el9.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 2 | AVAIL PGDG 1.5 3 | AVAIL PGDG 1.5 2 |
| el9.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 2 | AVAIL PGDG 1.5 3 | AVAIL PGDG 1.5 3 |
| el10.x86_64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| el10.aarch64 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 | AVAIL PGDG 1.5 1 |
| d12.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| d12.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| d13.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| d13.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u22.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u22.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u24.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u24.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 safeupdate_18 safeupdate_18-1.5-2PGDG.rhel8.x86_64.rpm pgdg 1.5 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/safeupdate_18-1.5-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 safeupdate_18 safeupdate_18-1.5-2PGDG.rhel8.aarch64.rpm pgdg 1.5 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/safeupdate_18-1.5-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 safeupdate_18 safeupdate_18-1.5-2PGDG.rhel9.x86_64.rpm pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/safeupdate_18-1.5-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 safeupdate_18 safeupdate_18-1.5-2PGDG.rhel9.aarch64.rpm pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/safeupdate_18-1.5-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 safeupdate_18 safeupdate_18-1.5-2PGDG.rhel10.x86_64.rpm pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/safeupdate_18-1.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 safeupdate_18 safeupdate_18-1.5-2PGDG.rhel10.aarch64.rpm pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/safeupdate_18-1.5-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-safeupdate postgresql-18-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-18-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-safeupdate postgresql-18-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 8.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-18-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-safeupdate postgresql-18-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-18-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-safeupdate postgresql-18-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 8.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-18-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-safeupdate postgresql-18-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 8.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-18-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-safeupdate postgresql-18-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 8.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-18-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-safeupdate postgresql-18-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 9.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-18-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-safeupdate postgresql-18-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 9.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-18-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 safeupdate_17 safeupdate_17-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/safeupdate_17-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 safeupdate_17 safeupdate_17-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/safeupdate_17-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 safeupdate_17 safeupdate_17-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/safeupdate_17-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 safeupdate_17 safeupdate_17-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/safeupdate_17-1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 safeupdate_17 safeupdate_17-1.5-2PGDG.rhel10.x86_64.rpm pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/safeupdate_17-1.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 safeupdate_17 safeupdate_17-1.5-2PGDG.rhel10.aarch64.rpm pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/safeupdate_17-1.5-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-safeupdate postgresql-17-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-17-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-safeupdate postgresql-17-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-17-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-safeupdate postgresql-17-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-17-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-safeupdate postgresql-17-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 8.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-17-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-safeupdate postgresql-17-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 9.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-17-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-safeupdate postgresql-17-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 9.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-17-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-safeupdate postgresql-17-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 8.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-17-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-safeupdate postgresql-17-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 9.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-17-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 safeupdate_16 safeupdate_16-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/safeupdate_16-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 safeupdate_16 safeupdate_16-1.4.2-2PGDG.rhel8.x86_64.rpm pgdg 1.4.2 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/safeupdate_16-1.4.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 safeupdate_16 safeupdate_16-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/safeupdate_16-1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 safeupdate_16 safeupdate_16-1.4.2-2PGDG.rhel8.aarch64.rpm pgdg 1.4.2 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/safeupdate_16-1.4.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 safeupdate_16 safeupdate_16-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/safeupdate_16-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 safeupdate_16 safeupdate_16-1.4.2-2PGDG.rhel9.x86_64.rpm pgdg 1.4.2 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/safeupdate_16-1.4.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 safeupdate_16 safeupdate_16-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/safeupdate_16-1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 safeupdate_16 safeupdate_16-1.4.2-2PGDG.rhel9.aarch64.rpm pgdg 1.4.2 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/safeupdate_16-1.4.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 safeupdate_16 safeupdate_16-1.5-2PGDG.rhel10.x86_64.rpm pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/safeupdate_16-1.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 safeupdate_16 safeupdate_16-1.5-2PGDG.rhel10.aarch64.rpm pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/safeupdate_16-1.5-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-safeupdate postgresql-16-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-16-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-safeupdate postgresql-16-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-16-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-safeupdate postgresql-16-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-16-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-safeupdate postgresql-16-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 8.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-16-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-safeupdate postgresql-16-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 9.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-16-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-safeupdate postgresql-16-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 9.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-16-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-safeupdate postgresql-16-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 8.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-16-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-safeupdate postgresql-16-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 8.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-16-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 safeupdate_15 safeupdate_15-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/safeupdate_15-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 safeupdate_15 safeupdate_15-1.4-1.rhel8.x86_64.rpm pgdg 1.4 17.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/safeupdate_15-1.4-1.rhel8.x86_64.rpm
@ el8.aarch64 15 safeupdate_15 safeupdate_15-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/safeupdate_15-1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 safeupdate_15 safeupdate_15-1.4.2-1.rhel8.aarch64.rpm pgdg 1.4.2 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/safeupdate_15-1.4.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 safeupdate_15 safeupdate_15-1.4-1.rhel8.aarch64.rpm pgdg 1.4 17.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/safeupdate_15-1.4-1.rhel8.aarch64.rpm
@ el9.x86_64 15 safeupdate_15 safeupdate_15-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/safeupdate_15-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 safeupdate_15 safeupdate_15-1.4.2-1.rhel9.x86_64.rpm pgdg 1.4.2 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/safeupdate_15-1.4.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 safeupdate_15 safeupdate_15-1.4-1.rhel9.x86_64.rpm pgdg 1.4 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/safeupdate_15-1.4-1.rhel9.x86_64.rpm
@ el9.aarch64 15 safeupdate_15 safeupdate_15-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/safeupdate_15-1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 safeupdate_15 safeupdate_15-1.4.2-1.rhel9.aarch64.rpm pgdg 1.4.2 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/safeupdate_15-1.4.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 safeupdate_15 safeupdate_15-1.4-1.rhel9.aarch64.rpm pgdg 1.4 17.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/safeupdate_15-1.4-1.rhel9.aarch64.rpm
@ el10.x86_64 15 safeupdate_15 safeupdate_15-1.5-2PGDG.rhel10.x86_64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/safeupdate_15-1.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 safeupdate_15 safeupdate_15-1.5-2PGDG.rhel10.aarch64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/safeupdate_15-1.5-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-safeupdate postgresql-15-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-15-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-safeupdate postgresql-15-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-15-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-safeupdate postgresql-15-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-15-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-safeupdate postgresql-15-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 8.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-15-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-safeupdate postgresql-15-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 9.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-15-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-safeupdate postgresql-15-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 9.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-15-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-safeupdate postgresql-15-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 8.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-15-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-safeupdate postgresql-15-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 8.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-15-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 safeupdate_14 safeupdate_14-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/safeupdate_14-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 safeupdate_14 safeupdate_14-1.4-1.rhel8.x86_64.rpm pgdg 1.4 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/safeupdate_14-1.4-1.rhel8.x86_64.rpm
@ el8.aarch64 14 safeupdate_14 safeupdate_14-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/safeupdate_14-1.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 safeupdate_14 safeupdate_14-1.4.2-1.rhel8.aarch64.rpm pgdg 1.4.2 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/safeupdate_14-1.4.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 safeupdate_14 safeupdate_14-1.4-1.rhel8.aarch64.rpm pgdg 1.4 17.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/safeupdate_14-1.4-1.rhel8.aarch64.rpm
@ el9.x86_64 14 safeupdate_14 safeupdate_14-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/safeupdate_14-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 safeupdate_14 safeupdate_14-1.4.2-1.rhel9.x86_64.rpm pgdg 1.4.2 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/safeupdate_14-1.4.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 safeupdate_14 safeupdate_14-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/safeupdate_14-1.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 safeupdate_14 safeupdate_14-1.4.2-1.rhel9.aarch64.rpm pgdg 1.4.2 12.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/safeupdate_14-1.4.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 safeupdate_14 safeupdate_14-1.4-1.rhel9.aarch64.rpm pgdg 1.4 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/safeupdate_14-1.4-1.rhel9.aarch64.rpm
@ el10.x86_64 14 safeupdate_14 safeupdate_14-1.5-2PGDG.rhel10.x86_64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/safeupdate_14-1.5-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 safeupdate_14 safeupdate_14-1.5-2PGDG.rhel10.aarch64.rpm pgdg 1.5 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/safeupdate_14-1.5-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-safeupdate postgresql-14-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-14-pg-safeupdate_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-safeupdate postgresql-14-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-safeupdate/postgresql-14-pg-safeupdate_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-safeupdate postgresql-14-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-14-pg-safeupdate_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-safeupdate postgresql-14-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 8.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-safeupdate/postgresql-14-pg-safeupdate_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-safeupdate postgresql-14-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 9.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-14-pg-safeupdate_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-safeupdate postgresql-14-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 9.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-safeupdate/postgresql-14-pg-safeupdate_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-safeupdate postgresql-14-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 8.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-14-pg-safeupdate_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-safeupdate postgresql-14-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 8.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-safeupdate/postgresql-14-pg-safeupdate_1.5-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `safeupdate` 扩展的 DEB 包：

```bash
pig build pkg safeupdate         # 构建 DEB 包
```


## 安装

您可以直接安装 `safeupdate` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install safeupdate;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y safeupdate -v 18  # PG 18
pig ext install -y safeupdate -v 17  # PG 17
pig ext install -y safeupdate -v 16  # PG 16
pig ext install -y safeupdate -v 15  # PG 15
pig ext install -y safeupdate -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y safeupdate_18       # PG 18
dnf install -y safeupdate_17       # PG 17
dnf install -y safeupdate_16       # PG 16
dnf install -y safeupdate_15       # PG 15
dnf install -y safeupdate_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-safeupdate   # PG 18
apt install -y postgresql-17-pg-safeupdate   # PG 17
apt install -y postgresql-16-pg-safeupdate   # PG 16
apt install -y postgresql-15-pg-safeupdate   # PG 15
apt install -y postgresql-14-pg-safeupdate   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'safeupdate';
```




## 用法

> [safeupdate: 要求 UPDATE 和 DELETE 必须带条件](https://github.com/eradman/pg-safeupdate)

`safeupdate` 扩展通过在执行不带 `WHERE` 子句的 `UPDATE` 或 `DELETE` 语句时抛出错误来防止意外的批量数据变更。

### 激活

```sql
-- 会话级别
LOAD 'safeupdate';

-- 数据库级别（持久化）
ALTER DATABASE mydb SET session_preload_libraries = 'safeupdate';

-- 全局（所有数据库，需要重启）
-- shared_preload_libraries = 'safeupdate'   -- 在 postgresql.conf 中
```

### 行为

```sql
-- 阻止：不带 WHERE 的 UPDATE
UPDATE rack SET fan_speed = 70;
-- ERROR: UPDATE requires a WHERE clause

-- 阻止：不带 WHERE 的 DELETE
DELETE FROM rack;
-- ERROR: DELETE requires a WHERE clause

-- 允许：带 WHERE 子句
UPDATE rack SET fan_speed = 90 WHERE fan_speed = 70;

-- 变通方法：显式的恒真条件
UPDATE rack SET fan_speed = 90 WHERE 1 = 1;
```

### 管理员覆盖

```sql
-- 在当前会话中临时禁用保护
SET safeupdate.enabled = 0;
```

基于 CTE 的不带 WHERE 条件的修改也会被阻止。该扩展对于 PostgREST 或其他提供直接数据库写入访问的系统特别有用。

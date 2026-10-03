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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/passwordcheck_cracklib-3.2.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">passwordcheck_cracklib-3.2.1.tar.gz</div>
    <div class="ext-card__desc">passwordcheck_cracklib-3.2.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`passwordcheck_cracklib`**](/ext/e/passwordcheck_cracklib) | `3.2.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license lgpl21" href="/ext/license#lgpl21">LGPL-2.1</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7000  | [**`passwordcheck_cracklib`**](/ext/e/passwordcheck_cracklib) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_pwhash`](/ext/e/pg_pwhash) [`passwordcheck`](/ext/e/passwordcheck) [`credcheck`](/ext/e/credcheck) [`passwordpolicy`](/ext/e/passwordpolicy) [`chkpass`](/ext/e/chkpass) [`pg_enigma`](/ext/e/pg_enigma) [`column_encrypt`](/ext/e/column_encrypt) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Preload-only; requires cracklib dictionaries.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.1` | {{< pgvers "18,17,16,15,14" >}} | `passwordcheck_cracklib` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.1` | {{< pgvers "18,17,16,15,14" >}} | `passwordcheck_cracklib_$v` | `cracklib-dicts` |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-passwordcheck-cracklib` | `cracklib-runtime`, `libcrack2` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.2.1 2 | AVAIL PIGSTY 3.2.1 2 | AVAIL PIGSTY 3.2.1 2 | AVAIL PIGSTY 3.2.1 2 | AVAIL PIGSTY 3.2.1 3 |
| el8.aarch64 | AVAIL PIGSTY 3.2.1 2 | AVAIL PIGSTY 3.2.1 2 | AVAIL PIGSTY 3.2.1 2 | AVAIL PIGSTY 3.2.1 2 | AVAIL PIGSTY 3.2.1 2 |
| el9.x86_64 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 4 |
| el9.aarch64 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 |
| el10.x86_64 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 |
| el10.aarch64 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 | AVAIL PIGSTY 3.2.1 3 |
| d12.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| d12.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| d13.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| d13.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u22.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u22.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u24.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u24.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u26.x86_64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
| u26.aarch64 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 | AVAIL PIGSTY 3.2.1 1 |
@ el8.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.2.1-1PGSTY.el8.x86_64.rpm pigsty 3.2.1 26.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/passwordcheck_cracklib_18-3.2.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel8.x86_64.rpm pgdg 3.1.0 12.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.2.1-1PGSTY.el8.aarch64.rpm pigsty 3.2.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/passwordcheck_cracklib_18-3.2.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel8.aarch64.rpm pgdg 3.1.0 12.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.2.1-1PGSTY.el9.x86_64.rpm pigsty 3.2.1 26.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/passwordcheck_cracklib_18-3.2.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-5PGDG.rhel9.8.x86_64.rpm pgdg 3.1.0 11.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/passwordcheck_cracklib_18-3.1.0-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel9.x86_64.rpm pgdg 3.1.0 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.2.1-1PGSTY.el9.aarch64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/passwordcheck_cracklib_18-3.2.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-5PGDG.rhel9.8.aarch64.rpm pgdg 3.1.0 11.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/passwordcheck_cracklib_18-3.1.0-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel9.aarch64.rpm pgdg 3.1.0 11.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.2.1-1PGSTY.el10.x86_64.rpm pigsty 3.2.1 26.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/passwordcheck_cracklib_18-3.2.1-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-5PGDG.rhel10.2.x86_64.rpm pgdg 3.1.0 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/passwordcheck_cracklib_18-3.1.0-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.2.1-1PGSTY.el10.aarch64.rpm pigsty 3.2.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/passwordcheck_cracklib_18-3.2.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-5PGDG.rhel10.2.aarch64.rpm pgdg 3.1.0 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/passwordcheck_cracklib_18-3.1.0-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 passwordcheck_cracklib_18 passwordcheck_cracklib_18-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/passwordcheck_cracklib_18-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb pigsty 3.2.1 18.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb pigsty 3.2.1 18.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb pigsty 3.2.1 18.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb pigsty 3.2.1 18.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb pigsty 3.2.1 18.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-passwordcheck-cracklib postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb pigsty 3.2.1 18.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-18-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.2.1-1PGSTY.el8.x86_64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/passwordcheck_cracklib_17-3.2.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-2PGDG.rhel8.x86_64.rpm pgdg 3.1.0 12.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/passwordcheck_cracklib_17-3.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.2.1-1PGSTY.el8.aarch64.rpm pigsty 3.2.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/passwordcheck_cracklib_17-3.2.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-2PGDG.rhel8.aarch64.rpm pgdg 3.1.0 12.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/passwordcheck_cracklib_17-3.1.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.2.1-1PGSTY.el9.x86_64.rpm pigsty 3.2.1 26.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/passwordcheck_cracklib_17-3.2.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-5PGDG.rhel9.8.x86_64.rpm pgdg 3.1.0 11.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/passwordcheck_cracklib_17-3.1.0-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-2PGDG.rhel9.x86_64.rpm pgdg 3.1.0 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/passwordcheck_cracklib_17-3.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.2.1-1PGSTY.el9.aarch64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/passwordcheck_cracklib_17-3.2.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-5PGDG.rhel9.8.aarch64.rpm pgdg 3.1.0 11.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/passwordcheck_cracklib_17-3.1.0-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-2PGDG.rhel9.aarch64.rpm pgdg 3.1.0 11.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/passwordcheck_cracklib_17-3.1.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.2.1-1PGSTY.el10.x86_64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/passwordcheck_cracklib_17-3.2.1-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-5PGDG.rhel10.2.x86_64.rpm pgdg 3.1.0 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/passwordcheck_cracklib_17-3.1.0-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/passwordcheck_cracklib_17-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.2.1-1PGSTY.el10.aarch64.rpm pigsty 3.2.1 26.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/passwordcheck_cracklib_17-3.2.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-5PGDG.rhel10.2.aarch64.rpm pgdg 3.1.0 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/passwordcheck_cracklib_17-3.1.0-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 passwordcheck_cracklib_17 passwordcheck_cracklib_17-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/passwordcheck_cracklib_17-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb pigsty 3.2.1 17.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb pigsty 3.2.1 18.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb pigsty 3.2.1 18.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb pigsty 3.2.1 18.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb pigsty 3.2.1 18.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-passwordcheck-cracklib postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb pigsty 3.2.1 18.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-17-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.2.1-1PGSTY.el8.x86_64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/passwordcheck_cracklib_16-3.2.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.0.0-1.rhel8.1.x86_64.rpm pgdg 3.0.0 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/passwordcheck_cracklib_16-3.0.0-1.rhel8.1.x86_64.rpm
@ el8.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.2.1-1PGSTY.el8.aarch64.rpm pigsty 3.2.1 26.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/passwordcheck_cracklib_16-3.2.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.0.0-1.rhel8.1.aarch64.rpm pgdg 3.0.0 11.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/passwordcheck_cracklib_16-3.0.0-1.rhel8.1.aarch64.rpm
@ el9.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.2.1-1PGSTY.el9.x86_64.rpm pigsty 3.2.1 26.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/passwordcheck_cracklib_16-3.2.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.1.0-5PGDG.rhel9.8.x86_64.rpm pgdg 3.1.0 11.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/passwordcheck_cracklib_16-3.1.0-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.0.0-1.rhel9.1.x86_64.rpm pgdg 3.0.0 11.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/passwordcheck_cracklib_16-3.0.0-1.rhel9.1.x86_64.rpm
@ el9.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.2.1-1PGSTY.el9.aarch64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/passwordcheck_cracklib_16-3.2.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.1.0-5PGDG.rhel9.8.aarch64.rpm pgdg 3.1.0 11.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/passwordcheck_cracklib_16-3.1.0-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.0.0-1.rhel9.1.aarch64.rpm pgdg 3.0.0 10.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/passwordcheck_cracklib_16-3.0.0-1.rhel9.1.aarch64.rpm
@ el10.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.2.1-1PGSTY.el10.x86_64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/passwordcheck_cracklib_16-3.2.1-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.1.0-5PGDG.rhel10.2.x86_64.rpm pgdg 3.1.0 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/passwordcheck_cracklib_16-3.1.0-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/passwordcheck_cracklib_16-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.2.1-1PGSTY.el10.aarch64.rpm pigsty 3.2.1 26.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/passwordcheck_cracklib_16-3.2.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.1.0-5PGDG.rhel10.2.aarch64.rpm pgdg 3.1.0 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/passwordcheck_cracklib_16-3.1.0-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 passwordcheck_cracklib_16 passwordcheck_cracklib_16-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/passwordcheck_cracklib_16-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb pigsty 3.2.1 17.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb pigsty 3.2.1 18.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb pigsty 3.2.1 18.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb pigsty 3.2.1 18.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb pigsty 3.2.1 18.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-passwordcheck-cracklib postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb pigsty 3.2.1 18.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-16-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.2.1-1PGSTY.el8.x86_64.rpm pigsty 3.2.1 26.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/passwordcheck_cracklib_15-3.2.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.0.0-1.rhel8.x86_64.rpm pgdg 3.0.0 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/passwordcheck_cracklib_15-3.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.2.1-1PGSTY.el8.aarch64.rpm pigsty 3.2.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/passwordcheck_cracklib_15-3.2.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.0.0-1.rhel8.aarch64.rpm pgdg 3.0.0 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/passwordcheck_cracklib_15-3.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.2.1-1PGSTY.el9.x86_64.rpm pigsty 3.2.1 26.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/passwordcheck_cracklib_15-3.2.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.1.0-5PGDG.rhel9.8.x86_64.rpm pgdg 3.1.0 11.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/passwordcheck_cracklib_15-3.1.0-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.0.0-1.rhel9.x86_64.rpm pgdg 3.0.0 11.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/passwordcheck_cracklib_15-3.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.2.1-1PGSTY.el9.aarch64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/passwordcheck_cracklib_15-3.2.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.1.0-5PGDG.rhel9.8.aarch64.rpm pgdg 3.1.0 11.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/passwordcheck_cracklib_15-3.1.0-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.0.0-1.rhel9.aarch64.rpm pgdg 3.0.0 10.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/passwordcheck_cracklib_15-3.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.2.1-1PGSTY.el10.x86_64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/passwordcheck_cracklib_15-3.2.1-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.1.0-5PGDG.rhel10.2.x86_64.rpm pgdg 3.1.0 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/passwordcheck_cracklib_15-3.1.0-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/passwordcheck_cracklib_15-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.2.1-1PGSTY.el10.aarch64.rpm pigsty 3.2.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/passwordcheck_cracklib_15-3.2.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.1.0-5PGDG.rhel10.2.aarch64.rpm pgdg 3.1.0 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/passwordcheck_cracklib_15-3.1.0-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 passwordcheck_cracklib_15 passwordcheck_cracklib_15-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/passwordcheck_cracklib_15-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb pigsty 3.2.1 17.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb pigsty 3.2.1 18.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb pigsty 3.2.1 18.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb pigsty 3.2.1 18.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb pigsty 3.2.1 18.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-passwordcheck-cracklib postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb pigsty 3.2.1 18.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-15-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.2.1-1PGSTY.el8.x86_64.rpm pigsty 3.2.1 26.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/passwordcheck_cracklib_14-3.2.1-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.0.0-1.rhel8.x86_64.rpm pgdg 3.0.0 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/passwordcheck_cracklib_14-3.0.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-2.0.0-1.rhel8.x86_64.rpm pgdg 2.0.0 17.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/passwordcheck_cracklib_14-2.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.2.1-1PGSTY.el8.aarch64.rpm pigsty 3.2.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/passwordcheck_cracklib_14-3.2.1-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.0.0-1.rhel8.aarch64.rpm pgdg 3.0.0 11.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/passwordcheck_cracklib_14-3.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.2.1-1PGSTY.el9.x86_64.rpm pigsty 3.2.1 26.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/passwordcheck_cracklib_14-3.2.1-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.1.0-5PGDG.rhel9.8.x86_64.rpm pgdg 3.1.0 11.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/passwordcheck_cracklib_14-3.1.0-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.0.0-1.rhel9.x86_64.rpm pgdg 3.0.0 11.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/passwordcheck_cracklib_14-3.0.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-2.0.0-1.rhel9.x86_64.rpm pgdg 2.0.0 16.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/passwordcheck_cracklib_14-2.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.2.1-1PGSTY.el9.aarch64.rpm pigsty 3.2.1 26.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/passwordcheck_cracklib_14-3.2.1-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.1.0-5PGDG.rhel9.8.aarch64.rpm pgdg 3.1.0 11.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/passwordcheck_cracklib_14-3.1.0-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.0.0-1.rhel9.aarch64.rpm pgdg 3.0.0 10.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/passwordcheck_cracklib_14-3.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.2.1-1PGSTY.el10.x86_64.rpm pigsty 3.2.1 26.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/passwordcheck_cracklib_14-3.2.1-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.1.0-5PGDG.rhel10.2.x86_64.rpm pgdg 3.1.0 11.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/passwordcheck_cracklib_14-3.1.0-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.1.0-3PGDG.rhel10.x86_64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/passwordcheck_cracklib_14-3.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.2.1-1PGSTY.el10.aarch64.rpm pigsty 3.2.1 27.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/passwordcheck_cracklib_14-3.2.1-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.1.0-5PGDG.rhel10.2.aarch64.rpm pgdg 3.1.0 11.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/passwordcheck_cracklib_14-3.1.0-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 passwordcheck_cracklib_14 passwordcheck_cracklib_14-3.1.0-3PGDG.rhel10.aarch64.rpm pgdg 3.1.0 12.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/passwordcheck_cracklib_14-3.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb pigsty 3.2.1 18.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb pigsty 3.2.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb pigsty 3.2.1 18.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb pigsty 3.2.1 18.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb pigsty 3.2.1 18.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb pigsty 3.2.1 18.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb pigsty 3.2.1 18.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb pigsty 3.2.1 18.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-passwordcheck-cracklib postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb pigsty 3.2.1 18.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/passwordcheck-cracklib/postgresql-14-passwordcheck-cracklib_3.2.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `passwordcheck_cracklib` 扩展的 RPM / DEB 包：

```bash
pig build pkg passwordcheck_cracklib         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `passwordcheck_cracklib` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install passwordcheck_cracklib;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y passwordcheck_cracklib -v 18  # PG 18
pig ext install -y passwordcheck_cracklib -v 17  # PG 17
pig ext install -y passwordcheck_cracklib -v 16  # PG 16
pig ext install -y passwordcheck_cracklib -v 15  # PG 15
pig ext install -y passwordcheck_cracklib -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y passwordcheck_cracklib_18       # PG 18
dnf install -y passwordcheck_cracklib_17       # PG 17
dnf install -y passwordcheck_cracklib_16       # PG 16
dnf install -y passwordcheck_cracklib_15       # PG 15
dnf install -y passwordcheck_cracklib_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-passwordcheck-cracklib   # PG 18
apt install -y postgresql-17-passwordcheck-cracklib   # PG 17
apt install -y postgresql-16-passwordcheck-cracklib   # PG 16
apt install -y postgresql-15-passwordcheck-cracklib   # PG 15
apt install -y postgresql-14-passwordcheck-cracklib   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = '$libdir/passwordcheck_cracklib';
```


## 用法

来源：

- [3.2.1 README](https://github.com/devrimgunduz/passwordcheck_cracklib/blob/3.2.1/README.md)
- [3.2.1 password hook](https://github.com/devrimgunduz/passwordcheck_cracklib/blob/3.2.1/passwordcheck_cracklib.c)
- [PostgreSQL passwordcheck manual](https://www.postgresql.org/docs/18/passwordcheck.html)

`passwordcheck_cracklib` 使用 CrackLib 检查通过 `CREATE ROLE` 和 `ALTER ROLE` 设置的密码。它是服务器钩子库，不创建 SQL 扩展对象。

### 启用钩子

将它加入现有预加载列表，然后重启 PostgreSQL：

```ini
shared_preload_libraries = '$libdir/passwordcheck_cracklib'
```

不要执行 `CREATE EXTENSION passwordcheck_cracklib`。PostgreSQL 操作系统账号必须能够使用 CrackLib 库和字典。

### 密码检查

```sql
CREATE ROLE app_user LOGIN PASSWORD 'password123';
```

弱明文密码会触发错误。钩子检查长度、密码与用户名的关系、字符组成以及 CrackLib 字典。通过这些检查并不保证密码能够抵抗所有攻击。

### 安全边界

字典检查要求在修改密码时获得明文密码。如果客户端提交已经计算好的密码散列，模块无法完成完整的强度检查；此时仅能检查密码是否等于用户名。应约束密码修改入口，并保护传输明文密码的连接。

模块不会追溯扫描已有密码。钩子还会调用先前安装的密码检查钩子；同时加载其他凭证策略库前，应检查它们的交互。

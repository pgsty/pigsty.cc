---
title: "emaj"
linkTitle: "emaj"
description: "让数据库的子集具有细粒度日志和时间旅行功能"
weight: 1050
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dalibo/emaj">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dalibo/emaj</div>
    <div class="ext-card__desc">https://github.com/dalibo/emaj</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/emaj-5.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">emaj-5.0.0.tar.gz</div>
    <div class="ext-card__desc">emaj-5.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`emaj`**](/ext/e/emaj) | `5.0.0` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1050  | [**`emaj`**](/ext/e/emaj) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `emaj` |
{.ext-table}

| **相关扩展** | [`btree_gist`](/ext/e/btree_gist) [`dblink`](/ext/e/dblink) [`table_version`](/ext/e/table_version) [`pgmemento`](/ext/e/pgmemento) [`data_historization`](/ext/e/data_historization) [`table_log`](/ext/e/table_log) [`ddl_historization`](/ext/e/ddl_historization) [`periods`](/ext/e/periods) [`temporal_tables`](/ext/e/temporal_tables) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires max_prepared_transactions


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.0` | {{< pgvers "18,17,16,15,14" >}} | `emaj` | `btree_gist`, `dblink` |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.0` | {{< pgvers "18,17,16,15,14" >}} | `e-maj_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-emaj` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 5.0.0 3 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 11 | AVAIL PIGSTY 5.0.0 12 | AVAIL PIGSTY 5.0.0 12 |
| el8.aarch64 | AVAIL PIGSTY 5.0.0 3 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 11 | AVAIL PIGSTY 5.0.0 12 | AVAIL PIGSTY 5.0.0 12 |
| el9.x86_64 | AVAIL PIGSTY 5.0.0 3 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 11 | AVAIL PIGSTY 5.0.0 12 | AVAIL PIGSTY 5.0.0 12 |
| el9.aarch64 | AVAIL PIGSTY 5.0.0 4 | AVAIL PIGSTY 5.0.0 7 | AVAIL PIGSTY 5.0.0 12 | AVAIL PIGSTY 5.0.0 13 | AVAIL PIGSTY 5.0.0 13 |
| el10.x86_64 | AVAIL PIGSTY 5.0.0 4 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 6 |
| el10.aarch64 | AVAIL PIGSTY 5.0.0 4 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 6 | AVAIL PIGSTY 5.0.0 6 |
| d12.x86_64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 | AVAIL PIGSTY 5.0.0 1 |
@ el8.x86_64 18 e-maj_18 e-maj_18-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/e-maj_18-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.x86_64 18 e-maj_18 e-maj_18-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/e-maj_18-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/e-maj_18-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 e-maj_18 e-maj_18-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/e-maj_18-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 e-maj_18 e-maj_18-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/e-maj_18-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/e-maj_18-4.7.1-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 e-maj_18 e-maj_18-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/e-maj_18-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.x86_64 18 e-maj_18 e-maj_18-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/e-maj_18-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/e-maj_18-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 e-maj_18 e-maj_18-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/e-maj_18-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 e-maj_18 e-maj_18-5.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/e-maj_18-5.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 18 e-maj_18 e-maj_18-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/e-maj_18-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/e-maj_18-4.7.1-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 e-maj_18 e-maj_18-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/e-maj_18-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.x86_64 18 e-maj_18 e-maj_18-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/e-maj_18-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 18 e-maj_18 e-maj_18-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/e-maj_18-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/e-maj_18-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 e-maj_18 e-maj_18-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/e-maj_18-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 e-maj_18 e-maj_18-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/e-maj_18-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 e-maj_18 e-maj_18-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/e-maj_18-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 e-maj_18 e-maj_18-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/e-maj_18-4.7.1-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 209.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 209.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-emaj postgresql-18-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-18-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 e-maj_17 e-maj_17-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/e-maj_17-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.x86_64 17 e-maj_17 e-maj_17-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 e-maj_17 e-maj_17-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/e-maj_17-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/e-maj_17-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 e-maj_17 e-maj_17-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/e-maj_17-4.5.0-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/e-maj_17-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 e-maj_17 e-maj_17-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/e-maj_17-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/e-maj_17-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-5.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-5.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 e-maj_17 e-maj_17-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/e-maj_17-4.5.0-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/e-maj_17-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/e-maj_17-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/e-maj_17-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/e-maj_17-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/e-maj_17-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/e-maj_17-4.6.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/e-maj_17-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/e-maj_17-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/e-maj_17-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/e-maj_17-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/e-maj_17-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 e-maj_17 e-maj_17-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/e-maj_17-4.6.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 209.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 209.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-emaj postgresql-17-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-17-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 e-maj_16 e-maj_16-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/e-maj_16-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel8.x86_64.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 e-maj_16 e-maj_16-4.2.0-1.rhel8.x86_64.rpm pgdg 4.2.0 4.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/e-maj_16-4.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/e-maj_16-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel8.aarch64.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 e-maj_16 e-maj_16-4.2.0-1.rhel8.aarch64.rpm pgdg 4.2.0 4.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/e-maj_16-4.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/e-maj_16-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel9.x86_64.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 e-maj_16 e-maj_16-4.2.0-1.rhel9.x86_64.rpm pgdg 4.2.0 4.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/e-maj_16-4.2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/e-maj_16-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-5.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-5.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.3.0-1PGDG.rhel9.aarch64.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 e-maj_16 e-maj_16-4.2.0-1.rhel9.aarch64.rpm pgdg 4.2.0 4.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/e-maj_16-4.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/e-maj_16-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/e-maj_16-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/e-maj_16-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/e-maj_16-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/e-maj_16-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/e-maj_16-4.6.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/e-maj_16-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/e-maj_16-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/e-maj_16-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/e-maj_16-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/e-maj_16-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 e-maj_16 e-maj_16-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/e-maj_16-4.6.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-emaj postgresql-16-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-16-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 e-maj_15 e-maj_15-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/e-maj_15-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel8.x86_64.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.2.0-1.rhel8.x86_64.rpm pgdg 4.2.0 4.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 e-maj_15 e-maj_15-4.1.0-1.rhel8.x86_64.rpm pgdg 4.1.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/e-maj_15-4.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/e-maj_15-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel8.aarch64.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.2.0-1.rhel8.aarch64.rpm pgdg 4.2.0 4.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 e-maj_15 e-maj_15-4.1.0-1.rhel8.aarch64.rpm pgdg 4.1.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/e-maj_15-4.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/e-maj_15-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel9.x86_64.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.2.0-1.rhel9.x86_64.rpm pgdg 4.2.0 4.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 e-maj_15 e-maj_15-4.1.0-1.rhel9.x86_64.rpm pgdg 4.1.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/e-maj_15-4.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/e-maj_15-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-5.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-5.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.3.0-1PGDG.rhel9.aarch64.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.2.0-1.rhel9.aarch64.rpm pgdg 4.2.0 4.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 e-maj_15 e-maj_15-4.1.0-1.rhel9.aarch64.rpm pgdg 4.1.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/e-maj_15-4.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/e-maj_15-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/e-maj_15-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/e-maj_15-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/e-maj_15-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/e-maj_15-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/e-maj_15-4.6.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/e-maj_15-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/e-maj_15-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/e-maj_15-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/e-maj_15-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/e-maj_15-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 e-maj_15 e-maj_15-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/e-maj_15-4.6.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-emaj postgresql-15-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-15-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 e-maj_14 e-maj_14-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/e-maj_14-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel8.x86_64.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.2.0-1.rhel8.x86_64.rpm pgdg 4.2.0 4.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 e-maj_14 e-maj_14-4.1.0-1.rhel8.x86_64.rpm pgdg 4.1.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/e-maj_14-4.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-5.0.0-2PIGSTY.el8.noarch.rpm pigsty 5.0.0 314.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/e-maj_14-5.0.0-2PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-5.0.0-1PGDG.rhel8.10.noarch.rpm pgdg 5.0.0 5.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-5.0.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel8.noarch.rpm pgdg 4.7.1 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.7.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel8.noarch.rpm pgdg 4.7.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.7.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel8.noarch.rpm pgdg 4.6.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.6.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.5.0-1PGDG.rhel8.noarch.rpm pgdg 4.5.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.5.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.4.0-1PGDG.rhel8.noarch.rpm pgdg 4.4.0 5.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.4.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.3.1-1PGDG.rhel8.noarch.rpm pgdg 4.3.1 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.3.1-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel8.noarch.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.3.0-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel8.aarch64.rpm pgdg 4.3.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.2.0-1.rhel8.aarch64.rpm pgdg 4.2.0 4.5MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 e-maj_14 e-maj_14-4.1.0-1.rhel8.aarch64.rpm pgdg 4.1.0 4.6MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/e-maj_14-4.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/e-maj_14-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel9.x86_64.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.2.0-1.rhel9.x86_64.rpm pgdg 4.2.0 4.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 e-maj_14 e-maj_14-4.1.0-1.rhel9.x86_64.rpm pgdg 4.1.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/e-maj_14-4.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-5.0.0-2PIGSTY.el9.noarch.rpm pigsty 5.0.0 219.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/e-maj_14-5.0.0-2PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-5.0.0-1PGDG.rhel9.8.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-5.0.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.7.1-2PGDG.rhel9.8.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.7.1-2PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel9.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.7.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel9.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.7.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel9.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.6.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.5.0-1PGDG.rhel9.noarch.rpm pgdg 4.5.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.5.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.4.0-1PGDG.rhel9.noarch.rpm pgdg 4.4.0 4.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.4.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.3.1-1PGDG.rhel9.noarch.rpm pgdg 4.3.1 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.3.1-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel9.noarch.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.3.0-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.3.0-1PGDG.rhel9.aarch64.rpm pgdg 4.3.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.2.0-1.rhel9.aarch64.rpm pgdg 4.2.0 4.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 e-maj_14 e-maj_14-4.1.0-1.rhel9.aarch64.rpm pgdg 4.1.0 4.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/e-maj_14-4.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/e-maj_14-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/e-maj_14-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/e-maj_14-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/e-maj_14-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/e-maj_14-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/e-maj_14-4.6.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-5.0.0-2PIGSTY.el10.noarch.rpm pigsty 5.0.0 219.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/e-maj_14-5.0.0-2PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-5.0.0-1PGDG.rhel10.2.noarch.rpm pgdg 5.0.0 5.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/e-maj_14-5.0.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-4.7.1-2PGDG.rhel10.2.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/e-maj_14-4.7.1-2PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-4.7.1-1PGDG.rhel10.noarch.rpm pgdg 4.7.1 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/e-maj_14-4.7.1-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-4.7.0-1PGDG.rhel10.noarch.rpm pgdg 4.7.0 5.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/e-maj_14-4.7.0-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 e-maj_14 e-maj_14-4.6.0-1PGDG.rhel10.noarch.rpm pgdg 4.6.0 4.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/e-maj_14-4.6.0-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~bookworm_all.deb pigsty 5.0.0 232.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~trixie_all.deb pigsty 5.0.0 232.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~jammy_all.deb pigsty 5.0.0 210.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 209.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~noble_all.deb pigsty 5.0.0 209.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-emaj postgresql-14-emaj_5.0.0-1PIGSTY~resolute_all.deb pigsty 5.0.0 209.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/e/emaj/postgresql-14-emaj_5.0.0-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `emaj` 扩展的 RPM / DEB 包：

```bash
pig build pkg emaj         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `emaj` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install emaj;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y emaj -v 18  # PG 18
pig ext install -y emaj -v 17  # PG 17
pig ext install -y emaj -v 16  # PG 16
pig ext install -y emaj -v 15  # PG 15
pig ext install -y emaj -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y e-maj_18       # PG 18
dnf install -y e-maj_17       # PG 17
dnf install -y e-maj_16       # PG 16
dnf install -y e-maj_15       # PG 15
dnf install -y e-maj_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-emaj   # PG 18
apt install -y postgresql-17-emaj   # PG 17
apt install -y postgresql-16-emaj   # PG 16
apt install -y postgresql-15-emaj   # PG 15
apt install -y postgresql-14-emaj   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION emaj CASCADE;  -- 依赖: btree_gist, dblink
```

## 用法

来源：

- [E-Maj 5.0.0 README](https://github.com/dalibo/emaj/blob/v5.0.0/README.md)
- [E-Maj 5.0.0 变更日志](https://github.com/dalibo/emaj/blob/v5.0.0/CHANGES.md)
- [E-Maj 快速入门](https://github.com/dalibo/emaj/blob/v5.0.0/docs/en/quickStart.rst)
- [E-Maj 升级指南](https://github.com/dalibo/emaj/blob/v5.0.0/docs/en/upgrade.rst)
- [E-Maj 设置指南](https://github.com/dalibo/emaj/blob/v5.0.0/docs/en/setup.rst)

规范扩展名是 `emaj`；E-Maj 为一个协调表组记录表与序列变更，并可把整个表组回滚到命名标记。它适用于可重复测试、批处理保存点、变更检查与定向恢复，但 E-Maj 回滚不能替代 PostgreSQL 事务回滚或备份。

### 核心流程

```sql
CREATE EXTENSION emaj CASCADE;
GRANT emaj_adm TO app_admin;

SELECT emaj.emaj_create_group('my_group', true);
SELECT emaj.emaj_assign_table('app', 'orders', 'my_group');
SELECT emaj.emaj_assign_sequences('app', '.*', '', 'my_group');

SELECT emaj.emaj_start_group('my_group', 'mark_1');
-- Run application changes.
SELECT emaj.emaj_set_mark_group('my_group', 'mark_2');
-- Run more application changes.

SELECT emaj.emaj_rollback_group('my_group', 'mark_1');
SELECT emaj.emaj_stop_group('my_group');
SELECT emaj.emaj_drop_group('my_group');
```

可回滚表组可以包含多个 schema 中的表与序列，但每张表必须有主键。仅审计表组可记录不可回滚对象的变更。启动和停止表组会锁定其应用表，因此要结合并发流量安排这些操作。

### 重要对象

- `emaj_create_group` 与各类分配函数用于定义表组。
- `emaj_start_group`、`emaj_set_mark_group` 与 `emaj_stop_group` 管理日志会话和标记。
- `emaj_rollback_group` 执行不记日志的回滚；`emaj_logged_rollback_group` 会记录补偿变更。
- 多组变体可在同一时间点操作由组名组成的数组。
- 统计与变更导出函数可检查两个标记之间的变更，或生成用于重放的 SQL。
- `emaj_set_param` 无需直接写内部参数表即可修改或重置 E-Maj 参数。
- `emaj_drop_extension()` 是受支持的完整移除辅助函数。

### 5.0 版本升级

如果 E-Maj 以扩展方式安装且版本不低于 2.3.1，先安装新软件包文件，再执行：

```sql
ALTER EXTENSION emaj UPDATE;
```

文档给出的扩展升级会保留日志，而且表组可以继续处于 LOGGING 状态。切换前应检查以下 5.0 兼容性变化：

- 支持 PostgreSQL 14 到 19；不再支持 PostgreSQL 12 与 13。
- 对 `emaj_param` 的直接 `INSERT`、`UPDATE` 或 `DELETE` 必须改为调用 `emaj_set_param`。
- 幂等启动和停止调用增加了允许已启动或允许已空闲参数；使用命名参数的调用方必须检查参数重命名。
- PHP 命令行客户端与 `emaj_uninstall.sql` 已移除。

通过独立 SQL 脚本安装的环境没有相同的就地扩展升级路径；应遵循官方删除并重装流程。

### 要求与注意事项

标准 `CREATE EXTENSION` 路径需要超级用户权限，并通过 `CASCADE` 安装 `dblink` 与 `btree_gist`。E-Maj 也支持受限的非超级用户脚本安装，其能力限制取决于安装角色。

只有并行回滚客户端需要 `max_prepared_transactions`，其值必须不小于计划使用的会话数；修改后需要重启。大型表组也可能需要更高的 `max_locks_per_transaction`。应把 E-Maj 日志表视为运维数据：明确规划保留策略、监控增长，并继续使用普通备份进行灾难恢复。

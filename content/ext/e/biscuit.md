---
title: "biscuit"
linkTitle: "biscuit"
description: "使用IAM的高性能文本模式匹配"
weight: 2170
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrystallineCore/Biscuit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrystallineCore/Biscuit</div>
    <div class="ext-card__desc">https://github.com/CrystallineCore/Biscuit</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/Biscuit-3.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">Biscuit-3.0.0.tar.gz</div>
    <div class="ext-card__desc">Biscuit-3.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_biscuit`**](/ext/e/biscuit) | `3.0.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2170  | [**`biscuit`**](/ext/e/biscuit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pg_trgm`](/ext/e/pg_trgm) [`pg_similarity`](/ext/e/pg_similarity) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`smlar`](/ext/e/smlar) [`pg_bigm`](/ext/e/pg_bigm) [`pgpcre`](/ext/e/pgpcre) [`re2`](/ext/e/re2) [`pgroonga`](/ext/e/pgroonga) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Latest stable PGXN distribution and packaged extension version are 3.0.0; upgrading from 2.x requires REINDEX; package name is biscuit.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.0` | {{< pgvers "18,17,16" >}} | `pg_biscuit` | `plpgsql` |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.0` | {{< pgvers "18,17,16" >}} | `biscuit_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-biscuit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.0.0 3 | AVAIL PIGSTY 3.0.0 3 | AVAIL PIGSTY 3.0.0 3 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 3.0.0 3 | AVAIL PIGSTY 3.0.0 3 | AVAIL PIGSTY 3.0.0 3 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 3.0.0 5 | AVAIL PIGSTY 3.0.0 5 | AVAIL PIGSTY 3.0.0 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 3.0.0 5 | AVAIL PIGSTY 3.0.0 5 | AVAIL PIGSTY 3.0.0 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 3.0.0 5 | AVAIL PIGSTY 3.0.0 5 | AVAIL PIGSTY 3.0.0 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 3.0.0 5 | AVAIL PIGSTY 3.0.0 5 | AVAIL PIGSTY 3.0.0 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | AVAIL PIGSTY 3.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 biscuit_18 biscuit_18-3.0.0-1PIGSTY.el8.x86_64.rpm pigsty 3.0.0 105.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_18-3.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.0 62.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/biscuit_18-2.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/biscuit_18-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 biscuit_18 biscuit_18-3.0.0-1PIGSTY.el8.aarch64.rpm pigsty 3.0.0 98.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_18-3.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.0 59.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/biscuit_18-2.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/biscuit_18-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-3.0.0-1PIGSTY.el9.x86_64.rpm pigsty 3.0.0 101.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_18-3.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.0 62.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.4.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.2.2 65.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.2.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.6.x86_64.rpm pgdg 2.2.2 65.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.2.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-3.0.0-1PIGSTY.el9.aarch64.rpm pigsty 3.0.0 96.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_18-3.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.0 61.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.4.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.2.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.6.aarch64.rpm pgdg 2.2.2 62.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.2.2-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-3.0.0-1PIGSTY.el10.x86_64.rpm pigsty 3.0.0 102.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_18-3.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.0 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.4.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 67.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.2.2 67.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.2.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.0.x86_64.rpm pgdg 2.2.2 68.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.2.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-3.0.0-1PIGSTY.el10.aarch64.rpm pigsty 3.0.0 98.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_18-3.0.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.0 63.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.4.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.2.2 64.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.2.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.2.2 64.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.2.2-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~bookworm_amd64.deb pigsty 3.0.0 250.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~bookworm_arm64.deb pigsty 3.0.0 242.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~trixie_amd64.deb pigsty 3.0.0 251.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~trixie_arm64.deb pigsty 3.0.0 243.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~jammy_amd64.deb pigsty 3.0.0 258.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~jammy_arm64.deb pigsty 3.0.0 252.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~noble_amd64.deb pigsty 3.0.0 250.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~noble_arm64.deb pigsty 3.0.0 244.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~resolute_amd64.deb pigsty 3.0.0 247.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_3.0.0-1PGSTY~resolute_arm64.deb pigsty 3.0.0 241.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-18-biscuit_3.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 biscuit_17 biscuit_17-3.0.0-1PIGSTY.el8.x86_64.rpm pigsty 3.0.0 105.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_17-3.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.0 62.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/biscuit_17-2.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/biscuit_17-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 biscuit_17 biscuit_17-3.0.0-1PIGSTY.el8.aarch64.rpm pigsty 3.0.0 98.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_17-3.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.0 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/biscuit_17-2.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/biscuit_17-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-3.0.0-1PIGSTY.el9.x86_64.rpm pigsty 3.0.0 101.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_17-3.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.0 62.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.4.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.2.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.6.x86_64.rpm pgdg 2.2.2 65.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.2.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-3.0.0-1PIGSTY.el9.aarch64.rpm pigsty 3.0.0 96.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_17-3.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.0 61.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.4.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.2.2 62.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.2.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.6.aarch64.rpm pgdg 2.2.2 62.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.2.2-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-3.0.0-1PIGSTY.el10.x86_64.rpm pigsty 3.0.0 102.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_17-3.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.0 64.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.4.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.2.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.0.x86_64.rpm pgdg 2.2.2 68.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.2.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-3.0.0-1PIGSTY.el10.aarch64.rpm pigsty 3.0.0 98.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_17-3.0.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.0 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.4.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.2.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.2.2-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~bookworm_amd64.deb pigsty 3.0.0 249.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~bookworm_arm64.deb pigsty 3.0.0 242.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~trixie_amd64.deb pigsty 3.0.0 251.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~trixie_arm64.deb pigsty 3.0.0 242.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~jammy_amd64.deb pigsty 3.0.0 302.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~jammy_arm64.deb pigsty 3.0.0 295.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~noble_amd64.deb pigsty 3.0.0 250.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~noble_arm64.deb pigsty 3.0.0 243.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~resolute_amd64.deb pigsty 3.0.0 246.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_3.0.0-1PGSTY~resolute_arm64.deb pigsty 3.0.0 241.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-17-biscuit_3.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 biscuit_16 biscuit_16-3.0.0-1PIGSTY.el8.x86_64.rpm pigsty 3.0.0 105.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_16-3.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.0 62.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/biscuit_16-2.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/biscuit_16-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 biscuit_16 biscuit_16-3.0.0-1PIGSTY.el8.aarch64.rpm pigsty 3.0.0 98.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_16-3.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.0 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/biscuit_16-2.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/biscuit_16-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-3.0.0-1PIGSTY.el9.x86_64.rpm pigsty 3.0.0 101.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_16-3.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.0 62.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.4.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.2.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.6.x86_64.rpm pgdg 2.2.2 65.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.2.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-3.0.0-1PIGSTY.el9.aarch64.rpm pigsty 3.0.0 96.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_16-3.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.0 61.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.4.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.2.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.6.aarch64.rpm pgdg 2.2.2 62.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.2.2-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-3.0.0-1PIGSTY.el10.x86_64.rpm pigsty 3.0.0 102.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_16-3.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.0 64.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.4.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.2.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.0.x86_64.rpm pgdg 2.2.2 68.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.2.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-3.0.0-1PIGSTY.el10.aarch64.rpm pigsty 3.0.0 98.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_16-3.0.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.0 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.4.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.2.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.2.2-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~bookworm_amd64.deb pigsty 3.0.0 249.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~bookworm_arm64.deb pigsty 3.0.0 242.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~trixie_amd64.deb pigsty 3.0.0 251.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~trixie_arm64.deb pigsty 3.0.0 242.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~jammy_amd64.deb pigsty 3.0.0 301.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~jammy_arm64.deb pigsty 3.0.0 294.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~noble_amd64.deb pigsty 3.0.0 250.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~noble_arm64.deb pigsty 3.0.0 244.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~resolute_amd64.deb pigsty 3.0.0 246.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_3.0.0-1PGSTY~resolute_arm64.deb pigsty 3.0.0 241.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-16-biscuit_3.0.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_biscuit` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_biscuit         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_biscuit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_biscuit;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_biscuit -v 18  # PG 18
pig ext install -y pg_biscuit -v 17  # PG 17
pig ext install -y pg_biscuit -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y biscuit_18       # PG 18
dnf install -y biscuit_17       # PG 17
dnf install -y biscuit_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-biscuit   # PG 18
apt install -y postgresql-17-biscuit   # PG 17
apt install -y postgresql-16-biscuit   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION biscuit CASCADE;  -- 依赖: plpgsql
```

## 用法

来源：

- [PGXN 上的 Biscuit 3.0.0](https://pgxn.org/dist/biscuit/3.0.0/)
- [Biscuit 3.0.0 发行说明](https://github.com/CrystallineCore/Biscuit/releases/tag/v3.0.0)
- [Biscuit 3.0.0 README](https://github.com/CrystallineCore/Biscuit/blob/v3.0.0/README.md)
- [Biscuit 3.0.0 变更日志](https://github.com/CrystallineCore/Biscuit/blob/v3.0.0/CHANGELOG.md)
- [Biscuit 3.0.0 元数据](https://api.pgxn.org/dist/biscuit/3.0.0/META.json)
- [Biscuit 3.0.0 控制文件](https://github.com/CrystallineCore/Biscuit/blob/v3.0.0/biscuit.control)
- [Biscuit 3.0.0 Makefile](https://github.com/CrystallineCore/Biscuit/blob/v3.0.0/Makefile)
- [Biscuit 3.0.0 安装 SQL](https://github.com/CrystallineCore/Biscuit/blob/v3.0.0/sql/biscuit.sql)
- [Biscuit 2.5.0 至 3.0.0 升级 SQL](https://github.com/CrystallineCore/Biscuit/blob/v3.0.0/sql/biscuit--2.5.0--3.0.0.sql)

`biscuit` 3.0.0 是面向 PostgreSQL 16 及以上版本的定位位图索引访问方法，用于精确执行 `LIKE` 与 `ILIKE` 过滤。它尤其适合锚定模式、`_` 通配符、长度谓词和多列合取条件。3.0.0 把索引状态保存在有 WAL 日志的关系页面中，因此崩溃恢复、时间点恢复、物理复制和热备读取都使用 PostgreSQL 的常规恢复路径。它不需要 `shared_preload_libraries`，也无需重启。

项目仍处于积极开发阶段，并建议使用有代表性的负载进行预发布测试。其每连接内存、写放大和缓存重载特性更适合读多写少的分析负载，而不适合持续更新的 OLTP 表或超大连接池。

### 创建并查询索引

应先装载数据，再创建索引。默认 `biscuit_ops` 同时支持区分与不区分大小写的谓词。只需要一种模式时，应使用 `biscuit_like_ops` 或 `biscuit_ilike_ops`，避免构建不使用的结构集合。

```sql
CREATE EXTENSION biscuit;

CREATE INDEX message_body_biscuit_idx
ON message USING biscuit (body biscuit_like_ops);

ANALYZE message;

EXPLAIN (ANALYZE, BUFFERS)
SELECT id, body
FROM message
WHERE body LIKE 'timeout%';
```

它支持表达式索引和多列索引。查询必须使用与所选操作符类兼容的表达式和操作符。装载统计信息后，应检查有代表性的执行计划，尤其是非锚定模式。

### 操作符类与查询边界

- `biscuit_ops` 是默认文本操作符类，索引 `LIKE`、`NOT LIKE`、`ILIKE` 和 `NOT ILIKE`。
- `biscuit_like_ops` 只索引 `LIKE` 和 `NOT LIKE`。
- `biscuit_ilike_ops` 只索引 `ILIKE` 和 `NOT ILIKE`。

Biscuit 返回无需堆表复查的精确结果，但它是过滤索引：不提供有序、反向、仅索引或唯一扫描，不能用于 `CLUSTER`，也不支持正则表达式、相似度搜索、模糊搜索或区域设置感知的排序规则。对选择性前缀查询，带 `text_pattern_ops` 的 B-tree 通常更合适；`pg_trgm` 则专用于非锚定子串、正则表达式和相似度搜索。

### 诊断与配置

重要的检查对象包括 `biscuit_indexes`、`biscuit_status`、`biscuit_index_stats(oid)`、`biscuit_index_memory_size()`、`biscuit_pending_list_stats(oid)` 与 `biscuit_pending_list_usage`。内存函数报告当前后端的会话本地副本。`total_pending_bytes` 在 `VACUUM` 时刷新，因此待处理列表数值最多可能比实时写入落后一个清理周期。

- `biscuit.delta_compaction_slots` 默认为 20000，控制压缩前允许积累的待处理行数。提高它会增加其他会话的重载工作，因此这是受权限控制的设置。
- `biscuit.diag_scan_trace` 默认为关闭，会发出详细的逐扫描候选集统计。只应在聚焦复现问题时启用。

每个后端都会惰性加载自己的索引副本，并在连接生命周期内保留。任一已提交写入都会使其他缓存副本失效；下次访问会重载整个索引，而不是增量刷新。连接池容量必须计入这种内存行为，并应避免把频繁写入与延迟敏感的读取交错在同一索引上。

对现有索引执行 `INSERT` 与 `UPDATE` 会产生大量 WAL；应监控 `pg_wal`、复制延迟与复制槽保留，并考虑设置有限的 `max_slot_wal_keep_size`。先批量装载再建索引的成本低得多。`VACUUM` 会排空待处理工作，但不会缩小索引；回收索引空间需要使用 `REINDEX`。

### 升级至 3.0.0

3.0.0 是不兼容的磁盘格式变更。更新扩展目录不会转换现有索引页面：所有由 2.x 创建的 Biscuit 索引都必须重建。应为重建预留足够的维护时间和 WAL 容量。

```sql
ALTER EXTENSION biscuit UPDATE TO '3.0.0';

SELECT schema_name, index_name
FROM biscuit_indexes;

REINDEX INDEX CONCURRENTLY public.message_body_biscuit_idx;
```

未经修补的上游 3.0.0 归档只携带并安装 `2.5.0--3.0.0` 这一步，而早期稳定软件包暴露的目录版本为 `2.4.0` 或 `2.4.1`。Pigsty 的 3.0.0 RPM 与 DEB 软件包会先恢复缺失的目录升级路径，再应用上游步骤。使用其他源码构建或软件包时，应在 `ALTER EXTENSION` 前检查 `pg_extension_update_paths('biscuit')`；无论 SQL 路径是否可用，强制要求的 `REINDEX` 或 `REINDEX CONCURRENTLY` 都仍是独立的手工操作。

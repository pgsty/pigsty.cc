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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/Biscuit-2.4.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">Biscuit-2.4.3.tar.gz</div>
    <div class="ext-card__desc">Biscuit-2.4.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_biscuit`**](/ext/e/biscuit) | `2.4.3` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2170  | [**`biscuit`**](/ext/e/biscuit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_textsearch`](/ext/e/pg_textsearch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Latest stable PGXN distribution and package release is 2.4.3; 2.5.0 is testing; packaged control and SQL default version remain 2.4.1; package name is biscuit.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.3` | {{< pgvers "18,17,16" >}} | `pg_biscuit` | `plpgsql` |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.3` | {{< pgvers "18,17,16" >}} | `biscuit_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.3` | {{< pgvers "18,17,16" >}} | `postgresql-$v-biscuit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.4.3 3 | AVAIL PIGSTY 2.4.3 3 | AVAIL PIGSTY 2.4.3 3 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 2.4.3 3 | AVAIL PIGSTY 2.4.3 3 | AVAIL PIGSTY 2.4.3 3 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 2.4.3 5 | AVAIL PIGSTY 2.4.3 5 | AVAIL PIGSTY 2.4.3 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 2.4.3 5 | AVAIL PIGSTY 2.4.3 5 | AVAIL PIGSTY 2.4.3 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 2.4.3 5 | AVAIL PIGSTY 2.4.3 5 | AVAIL PIGSTY 2.4.3 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.4.3 5 | AVAIL PIGSTY 2.4.3 5 | AVAIL PIGSTY 2.4.3 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | AVAIL PIGSTY 2.4.3 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 biscuit_18 biscuit_18-2.4.3-1PIGSTY.el8.x86_64.rpm pigsty 2.4.3 64.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_18-2.4.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.0 62.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/biscuit_18-2.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/biscuit_18-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 biscuit_18 biscuit_18-2.4.3-1PIGSTY.el8.aarch64.rpm pigsty 2.4.3 62.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_18-2.4.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.0 59.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/biscuit_18-2.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/biscuit_18-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.4.3-1PIGSTY.el9.x86_64.rpm pigsty 2.4.3 63.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_18-2.4.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.0 62.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.4.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.2.2 65.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.2.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.6.x86_64.rpm pgdg 2.2.2 65.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.2.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.4.3-1PIGSTY.el9.aarch64.rpm pigsty 2.4.3 62.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_18-2.4.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.0 61.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.4.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.2.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.6.aarch64.rpm pgdg 2.2.2 62.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.2.2-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.4.3-1PIGSTY.el10.x86_64.rpm pigsty 2.4.3 65.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_18-2.4.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.0 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.4.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 67.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.2.2 67.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.2.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.0.x86_64.rpm pgdg 2.2.2 68.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.2.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.4.3-1PIGSTY.el10.aarch64.rpm pigsty 2.4.3 64.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_18-2.4.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.4.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.0 63.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.4.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.2.2 64.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.2.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.2.2 64.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.2.2-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~bookworm_amd64.deb pigsty 2.4.3 143.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~bookworm_arm64.deb pigsty 2.4.3 138.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~trixie_amd64.deb pigsty 2.4.3 143.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~trixie_arm64.deb pigsty 2.4.3 138.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~jammy_amd64.deb pigsty 2.4.3 145.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~jammy_arm64.deb pigsty 2.4.3 142.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~noble_amd64.deb pigsty 2.4.3 140.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~noble_arm64.deb pigsty 2.4.3 139.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~resolute_amd64.deb pigsty 2.4.3 140.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.4.3-1PIGSTY~resolute_arm64.deb pigsty 2.4.3 138.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.4.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 biscuit_17 biscuit_17-2.4.3-1PIGSTY.el8.x86_64.rpm pigsty 2.4.3 64.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_17-2.4.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.0 62.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/biscuit_17-2.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/biscuit_17-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 biscuit_17 biscuit_17-2.4.3-1PIGSTY.el8.aarch64.rpm pigsty 2.4.3 61.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_17-2.4.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.0 59.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/biscuit_17-2.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/biscuit_17-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.4.3-1PIGSTY.el9.x86_64.rpm pigsty 2.4.3 63.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_17-2.4.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.0 62.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.4.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.2.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.6.x86_64.rpm pgdg 2.2.2 65.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.2.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.4.3-1PIGSTY.el9.aarch64.rpm pigsty 2.4.3 62.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_17-2.4.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.0 61.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.4.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.2.2 62.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.2.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.6.aarch64.rpm pgdg 2.2.2 62.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.2.2-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.4.3-1PIGSTY.el10.x86_64.rpm pigsty 2.4.3 65.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_17-2.4.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.0 64.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.4.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.2.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.0.x86_64.rpm pgdg 2.2.2 68.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.2.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.4.3-1PIGSTY.el10.aarch64.rpm pigsty 2.4.3 63.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_17-2.4.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.4.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.0 63.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.4.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.2.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.2.2-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~bookworm_amd64.deb pigsty 2.4.3 142.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~bookworm_arm64.deb pigsty 2.4.3 137.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~trixie_amd64.deb pigsty 2.4.3 143.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~trixie_arm64.deb pigsty 2.4.3 138.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~jammy_amd64.deb pigsty 2.4.3 168.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~jammy_arm64.deb pigsty 2.4.3 165.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~noble_amd64.deb pigsty 2.4.3 140.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~noble_arm64.deb pigsty 2.4.3 138.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~resolute_amd64.deb pigsty 2.4.3 140.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.4.3-1PIGSTY~resolute_arm64.deb pigsty 2.4.3 137.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.4.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 biscuit_16 biscuit_16-2.4.3-1PIGSTY.el8.x86_64.rpm pigsty 2.4.3 64.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_16-2.4.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.0 62.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/biscuit_16-2.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/biscuit_16-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 biscuit_16 biscuit_16-2.4.3-1PIGSTY.el8.aarch64.rpm pigsty 2.4.3 61.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_16-2.4.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.0 59.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/biscuit_16-2.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/biscuit_16-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.4.3-1PIGSTY.el9.x86_64.rpm pigsty 2.4.3 63.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_16-2.4.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.0 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.4.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.2.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.6.x86_64.rpm pgdg 2.2.2 65.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.2.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.4.3-1PIGSTY.el9.aarch64.rpm pigsty 2.4.3 62.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_16-2.4.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.0 61.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.4.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.2.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.6.aarch64.rpm pgdg 2.2.2 62.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.2.2-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.4.3-1PIGSTY.el10.x86_64.rpm pigsty 2.4.3 65.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_16-2.4.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.0 64.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.4.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.2.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.0.x86_64.rpm pgdg 2.2.2 68.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.2.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.4.3-1PIGSTY.el10.aarch64.rpm pigsty 2.4.3 63.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_16-2.4.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.4.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.0 63.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.4.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.2.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.2.2-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~bookworm_amd64.deb pigsty 2.4.3 142.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~bookworm_arm64.deb pigsty 2.4.3 137.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~trixie_amd64.deb pigsty 2.4.3 143.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~trixie_arm64.deb pigsty 2.4.3 138.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~jammy_amd64.deb pigsty 2.4.3 168.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~jammy_arm64.deb pigsty 2.4.3 165.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~noble_amd64.deb pigsty 2.4.3 140.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~noble_arm64.deb pigsty 2.4.3 138.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~resolute_amd64.deb pigsty 2.4.3 140.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.4.3-1PIGSTY~resolute_arm64.deb pigsty 2.4.3 137.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.4.3-1PIGSTY~resolute_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

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

- [PGXN biscuit 2.4.3 分发](https://pgxn.org/dist/biscuit/2.4.3/)
- [PGXN 2.4.3 元数据](https://api.pgxn.org/dist/biscuit/2.4.3/META.json)
- [PGXN 2.4.3 控制文件](https://api.pgxn.org/src/biscuit/biscuit-2.4.3/biscuit.control)
- [PGXN 2.4.3 改变日志](https://api.pgxn.org/src/biscuit/biscuit-2.4.3/CHANGELOG.md)
- [官方文档](https://biscuit.readthedocs.io/)

`biscuit` 是一个针对文本模式过滤优化的实验性 PostgreSQL 索引访问方法。它主要针对 `LIKE`, `ILIKE`, `NOT LIKE`, 和 `NOT ILIKE` 预测子，包括多列和表达式索引，同时以增加内存使用和写入工作为代价换取更快的过滤速度。

### 核心流程

```sql
CREATE EXTENSION biscuit;

CREATE INDEX message_body_biscuit_idx
ON message USING biscuit (body);

SELECT id, body
FROM message
WHERE body ILIKE '%timeout%';
```

当查询中使用相同的表达式时，表达式索引可以生效：

```sql
CREATE INDEX customer_email_biscuit_idx
ON customer USING biscuit (lower(email));

SELECT *
FROM customer
WHERE lower(email) LIKE '%@example.com';
```

对于跨越多个索引文本列的预测子，应使用多列索引，并通过在代表性数据上运行 `EXPLAIN (ANALYZE, BUFFERS)` 来确认选择的计划。

### 重要对象

- `biscuit` 是用于 `CREATE INDEX ... USING biscuit` 的索引访问方法。
- `biscuit_operators` 报告支持的操作符。
- `biscuit_version` 和 `biscuit_build_info` 暴露构建信息；`biscuit_build_info_json` 以 JSON 格式返回这些信息。
- `biscuit_status` 报告安装的构建和位图配置。
- `biscuit_index_stats` 和 `biscuit_index_memory_size` 检查索引及其内存占用情况。
- `biscuit_memory_usage` 是扩展内存使用情况视图。
- `biscuit_has_roaring` 和 `biscuit_roaring_version` 报告可选的 Roaring 位图支持。

### 限制和操作

`biscuit` 主要用于过滤，而不是有序索引扫描。它不提供正则表达式或相似性搜索功能。索引可能比 B-树更大且更昂贵；在生产使用前，请先基准测试读取选择性、摄入成本、内存使用情况以及真空行为。保留常规索引以满足排序、等值、唯一性或其他访问方法的需求。

上游项目将 Biscuit 标记为积极开发中。PGXN 发布 `2.4.3` 作为稳定分发，但该存档的改变日志仅止于 `2.4.2`，其元数据和控制文件暴露 SQL 扩展版本 `2.4.1`。将 `2.4.3` 视为分发/包刷新：未声称有额外的 SQL API 变更。材料中的 `2.4.2` 改变修复了索引缓存中的使用后释放漏洞以及编译器警告。

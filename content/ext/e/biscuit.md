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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/Biscuit-2.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">Biscuit-2.3.0.tar.gz</div>
    <div class="ext-card__desc">Biscuit-2.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_biscuit`**](/ext/e/biscuit) | `2.3.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2170  | [**`biscuit`**](/ext/e/biscuit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_textsearch`](/ext/e/pg_textsearch) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> rename from pg_biscuit to biscuit to keep up with PGDG RPM name


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3.0` | {{< pgvers "18,17,16" >}} | `pg_biscuit` | `plpgsql` |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3.0` | {{< pgvers "18,17,16" >}} | `biscuit_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-biscuit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | AVAIL PIGSTY 2.3.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | AVAIL PIGSTY 2.3.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 biscuit_18 biscuit_18-2.3.0-1PIGSTY.el8.x86_64.rpm pigsty 2.3.0 62.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_18-2.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/biscuit_18-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 biscuit_18 biscuit_18-2.3.0-1PIGSTY.el8.aarch64.rpm pigsty 2.3.0 59.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_18-2.3.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/biscuit_18-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.3.0-1PIGSTY.el9.x86_64.rpm pigsty 2.3.0 61.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_18-2.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/biscuit_18-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.3.0-1PIGSTY.el9.aarch64.rpm pigsty 2.3.0 60.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_18-2.3.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/biscuit_18-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.3.0-1PIGSTY.el10.x86_64.rpm pigsty 2.3.0 63.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_18-2.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 67.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/biscuit_18-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.3.0-1PIGSTY.el10.aarch64.rpm pigsty 2.3.0 62.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_18-2.3.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 biscuit_18 biscuit_18-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/biscuit_18-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~bookworm_amd64.deb pigsty 2.3.0 140.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~bookworm_arm64.deb pigsty 2.3.0 135.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~trixie_amd64.deb pigsty 2.3.0 140.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~trixie_arm64.deb pigsty 2.3.0 135.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~jammy_amd64.deb pigsty 2.3.0 143.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~jammy_arm64.deb pigsty 2.3.0 140.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~noble_amd64.deb pigsty 2.3.0 139.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~noble_arm64.deb pigsty 2.3.0 138.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~resolute_amd64.deb pigsty 2.3.0 139.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-biscuit postgresql-18-biscuit_2.3.0-1PIGSTY~resolute_arm64.deb pigsty 2.3.0 136.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-18-biscuit_2.3.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 biscuit_17 biscuit_17-2.3.0-1PIGSTY.el8.x86_64.rpm pigsty 2.3.0 62.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_17-2.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/biscuit_17-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 biscuit_17 biscuit_17-2.3.0-1PIGSTY.el8.aarch64.rpm pigsty 2.3.0 59.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_17-2.3.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/biscuit_17-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.3.0-1PIGSTY.el9.x86_64.rpm pigsty 2.3.0 61.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_17-2.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/biscuit_17-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.3.0-1PIGSTY.el9.aarch64.rpm pigsty 2.3.0 60.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_17-2.3.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/biscuit_17-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.3.0-1PIGSTY.el10.x86_64.rpm pigsty 2.3.0 63.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_17-2.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/biscuit_17-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.3.0-1PIGSTY.el10.aarch64.rpm pigsty 2.3.0 61.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_17-2.3.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 biscuit_17 biscuit_17-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/biscuit_17-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~bookworm_amd64.deb pigsty 2.3.0 140.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~bookworm_arm64.deb pigsty 2.3.0 134.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~trixie_amd64.deb pigsty 2.3.0 140.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~trixie_arm64.deb pigsty 2.3.0 135.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~jammy_amd64.deb pigsty 2.3.0 166.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~jammy_arm64.deb pigsty 2.3.0 163.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~noble_amd64.deb pigsty 2.3.0 139.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~noble_arm64.deb pigsty 2.3.0 137.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~resolute_amd64.deb pigsty 2.3.0 139.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-biscuit postgresql-17-biscuit_2.3.0-1PIGSTY~resolute_arm64.deb pigsty 2.3.0 135.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-17-biscuit_2.3.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 biscuit_16 biscuit_16-2.3.0-1PIGSTY.el8.x86_64.rpm pigsty 2.3.0 62.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/biscuit_16-2.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.2.2 63.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/biscuit_16-2.2.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 biscuit_16 biscuit_16-2.3.0-1PIGSTY.el8.aarch64.rpm pigsty 2.3.0 59.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/biscuit_16-2.3.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.2.2 59.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/biscuit_16-2.2.2-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.3.0-1PIGSTY.el9.x86_64.rpm pigsty 2.3.0 61.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/biscuit_16-2.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2.2 65.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/biscuit_16-2.2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.3.0-1PIGSTY.el9.aarch64.rpm pigsty 2.3.0 60.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/biscuit_16-2.3.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2.2 62.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/biscuit_16-2.2.2-1PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.3.0-1PIGSTY.el10.x86_64.rpm pigsty 2.3.0 63.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/biscuit_16-2.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2.2 68.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/biscuit_16-2.2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.3.0-1PIGSTY.el10.aarch64.rpm pigsty 2.3.0 62.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/biscuit_16-2.3.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 biscuit_16 biscuit_16-2.2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2.2 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/biscuit_16-2.2.2-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~bookworm_amd64.deb pigsty 2.3.0 140.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~bookworm_arm64.deb pigsty 2.3.0 135.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~trixie_amd64.deb pigsty 2.3.0 140.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~trixie_arm64.deb pigsty 2.3.0 135.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~jammy_amd64.deb pigsty 2.3.0 166.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~jammy_arm64.deb pigsty 2.3.0 163.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~noble_amd64.deb pigsty 2.3.0 139.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~noble_arm64.deb pigsty 2.3.0 137.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~resolute_amd64.deb pigsty 2.3.0 139.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-biscuit postgresql-16-biscuit_2.3.0-1PIGSTY~resolute_arm64.deb pigsty 2.3.0 135.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-biscuit/postgresql-16-biscuit_2.3.0-1PIGSTY~resolute_arm64.deb
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

> [README](https://github.com/CrystallineCore/Biscuit) | [Docs](https://biscuit.readthedocs.io/)

`biscuit` 是 PostgreSQL 的一种索引访问方法，专为 `LIKE` 和 `ILIKE` 模式匹配优化，也支持多列检索。上游将其定位为一种确定性的位图索引，可避免基于 trigram 的搜索常见的误命中复查开销。

### 快速上手

创建扩展，并在一个或多个文本列上建立 Biscuit 索引：

```sql
CREATE EXTENSION biscuit;

CREATE INDEX idx_users_name ON users USING biscuit(name);

CREATE INDEX idx_products_search
ON products USING biscuit(name, description, category);
```

带通配符的常见查询同样可以使用该索引：

```sql
SELECT * FROM users WHERE name LIKE '%john%';
SELECT * FROM users WHERE name NOT LIKE 'a%b%c';
SELECT COUNT(*) FROM users WHERE name LIKE '%test%';

SELECT *
FROM products
WHERE name LIKE '%widget%'
  AND description LIKE '%blue%'
  AND category LIKE 'electronics%'
LIMIT 10;
```

## 索引行为

Biscuit 为每个字符串维护位图位置索引，能够同时匹配正向和反向字符位置。上游设计强调：

- 正向索引，用于匹配字符在精确位置上的出现
- 反向索引，用于按字符串末尾倒数位置匹配字符
- `ILIKE` 的大小写不敏感变体
- 用于快速长度过滤的精确长度位图和最小长度位图

对于 `LIKE 'abc%def'` 这类模式，Biscuit 可以把前缀位图、后缀位图以及最小长度过滤合并起来，从而在不执行 heap 复查的情况下得到精确结果。

### 模式类型

上游文档对常见模式给出了优化路径：

- 精确匹配，例如 `'abc'`
- 前缀匹配，例如 `'abc%'`
- 后缀匹配，例如 `'%xyz'`
- 子串匹配，例如 `'%abc%'`
- 多列谓词，Biscuit 会按估计选择性重排谓词顺序

## 性能说明

上游 README 强调了纯位图求值及多项执行优化，包括：

- 中间位图为空时提前结束
- 对稀疏和稠密数据直接使用 roaring bitmap
- 后缀谓词使用反向位置查找
- 对 TID 做排序，以提高 heap 访问局部性
- 对聚合查询和 `LIMIT` 的特殊处理

项目 README 还给出了一个 100 万行测试表的基准方案，用来比较 Biscuit 索引与 trigram 方案。

## 需求

当前上游 README 列出的源码构建要求包括：

- PostgreSQL 16 或更高版本
- 标准构建工具，如 `gcc`、`make` 和 `pg_config`
- 可选的 CRoaring，用于提升性能

该项目通过 [PGXN](https://pgxn.org/dist/biscuit/) 发布包，并在 Read the Docs 上维护独立文档站。

---
title: "pgdd"
linkTitle: "pgdd"
description: "提供通过标准SQL查询数据库目录集簇的能力"
weight: 5130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rustprooflabs/pgdd">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rustprooflabs/pgdd</div>
    <div class="ext-card__desc">https://github.com/rustprooflabs/pgdd</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgdd-0.6.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgdd-0.6.1.tar.gz</div>
    <div class="ext-card__desc">pgdd-0.6.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgdd`**](/ext/e/pgdd) | `0.6.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5130  | [**`pgdd`**](/ext/e/pgdd) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `dd` |
{.ext-table}

| **相关扩展** | [`pg_catcheck`](/ext/e/pg_catcheck) [`pg_orphaned`](/ext/e/pg_orphaned) [`pg_checksums`](/ext/e/pg_checksums) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16,15,14" >}} | `pgdd` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16,15,14" >}} | `pgdd_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgdd` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 |
@ el8.x86_64 18 pgdd_18 pgdd_18-0.6.1-3PIGSTY.el8.x86_64.rpm pigsty 0.6.1 846.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgdd_18-0.6.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgdd_18 pgdd_18-0.6.1-3PIGSTY.el8.aarch64.rpm pigsty 0.6.1 756.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgdd_18-0.6.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgdd_18 pgdd_18-0.6.1-3PIGSTY.el9.x86_64.rpm pigsty 0.6.1 850.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgdd_18-0.6.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgdd_18 pgdd_18-0.6.1-3PIGSTY.el9.aarch64.rpm pigsty 0.6.1 803.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgdd_18-0.6.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgdd_18 pgdd_18-0.6.1-3PIGSTY.el10.x86_64.rpm pigsty 0.6.1 851.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgdd_18-0.6.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgdd_18 pgdd_18-0.6.1-3PIGSTY.el10.aarch64.rpm pigsty 0.6.1 781.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgdd_18-0.6.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb pigsty 0.6.1 673.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb pigsty 0.6.1 561.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb pigsty 0.6.1 672.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb pigsty 0.6.1 562.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb pigsty 0.6.1 746.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb pigsty 0.6.1 664.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~noble_amd64.deb pigsty 0.6.1 739.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~noble_arm64.deb pigsty 0.6.1 654.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb pigsty 0.6.1 736.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgdd postgresql-18-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb pigsty 0.6.1 654.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-18-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgdd_17 pgdd_17-0.6.1-3PIGSTY.el8.x86_64.rpm pigsty 0.6.1 843.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgdd_17-0.6.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgdd_17 pgdd_17-0.6.1-3PIGSTY.el8.aarch64.rpm pigsty 0.6.1 754.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgdd_17-0.6.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgdd_17 pgdd_17-0.6.1-3PIGSTY.el9.x86_64.rpm pigsty 0.6.1 847.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgdd_17-0.6.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgdd_17 pgdd_17-0.6.1-3PIGSTY.el9.aarch64.rpm pigsty 0.6.1 800.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgdd_17-0.6.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgdd_17 pgdd_17-0.6.1-3PIGSTY.el10.x86_64.rpm pigsty 0.6.1 847.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgdd_17-0.6.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgdd_17 pgdd_17-0.6.1-3PIGSTY.el10.aarch64.rpm pigsty 0.6.1 781.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgdd_17-0.6.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb pigsty 0.6.1 670.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb pigsty 0.6.1 560.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb pigsty 0.6.1 670.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb pigsty 0.6.1 560.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb pigsty 0.6.1 743.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb pigsty 0.6.1 663.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~noble_amd64.deb pigsty 0.6.1 738.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~noble_arm64.deb pigsty 0.6.1 653.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb pigsty 0.6.1 731.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgdd postgresql-17-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb pigsty 0.6.1 652.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-17-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgdd_16 pgdd_16-0.6.1-3PIGSTY.el8.x86_64.rpm pigsty 0.6.1 841.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgdd_16-0.6.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgdd_16 pgdd_16-0.6.1-3PIGSTY.el8.aarch64.rpm pigsty 0.6.1 752.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgdd_16-0.6.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgdd_16 pgdd_16-0.6.1-3PIGSTY.el9.x86_64.rpm pigsty 0.6.1 846.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgdd_16-0.6.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgdd_16 pgdd_16-0.6.1-3PIGSTY.el9.aarch64.rpm pigsty 0.6.1 798.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgdd_16-0.6.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgdd_16 pgdd_16-0.6.1-3PIGSTY.el10.x86_64.rpm pigsty 0.6.1 846.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgdd_16-0.6.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgdd_16 pgdd_16-0.6.1-3PIGSTY.el10.aarch64.rpm pigsty 0.6.1 778.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgdd_16-0.6.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb pigsty 0.6.1 669.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb pigsty 0.6.1 559.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb pigsty 0.6.1 669.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb pigsty 0.6.1 559.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb pigsty 0.6.1 744.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb pigsty 0.6.1 662.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~noble_amd64.deb pigsty 0.6.1 736.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~noble_arm64.deb pigsty 0.6.1 652.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb pigsty 0.6.1 732.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgdd postgresql-16-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb pigsty 0.6.1 650.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-16-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgdd_15 pgdd_15-0.6.1-3PIGSTY.el8.x86_64.rpm pigsty 0.6.1 831.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgdd_15-0.6.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgdd_15 pgdd_15-0.6.1-3PIGSTY.el8.aarch64.rpm pigsty 0.6.1 743.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgdd_15-0.6.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgdd_15 pgdd_15-0.6.1-3PIGSTY.el9.x86_64.rpm pigsty 0.6.1 837.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgdd_15-0.6.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgdd_15 pgdd_15-0.6.1-3PIGSTY.el9.aarch64.rpm pigsty 0.6.1 787.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgdd_15-0.6.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgdd_15 pgdd_15-0.6.1-3PIGSTY.el10.x86_64.rpm pigsty 0.6.1 836.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgdd_15-0.6.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgdd_15 pgdd_15-0.6.1-3PIGSTY.el10.aarch64.rpm pigsty 0.6.1 775.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgdd_15-0.6.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb pigsty 0.6.1 660.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb pigsty 0.6.1 555.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb pigsty 0.6.1 663.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb pigsty 0.6.1 555.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb pigsty 0.6.1 737.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb pigsty 0.6.1 657.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~noble_amd64.deb pigsty 0.6.1 730.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~noble_arm64.deb pigsty 0.6.1 646.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb pigsty 0.6.1 724.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgdd postgresql-15-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb pigsty 0.6.1 645.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-15-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgdd_14 pgdd_14-0.6.1-3PIGSTY.el8.x86_64.rpm pigsty 0.6.1 829.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgdd_14-0.6.1-3PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgdd_14 pgdd_14-0.6.1-3PIGSTY.el8.aarch64.rpm pigsty 0.6.1 740.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgdd_14-0.6.1-3PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgdd_14 pgdd_14-0.6.1-3PIGSTY.el9.x86_64.rpm pigsty 0.6.1 834.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgdd_14-0.6.1-3PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgdd_14 pgdd_14-0.6.1-3PIGSTY.el9.aarch64.rpm pigsty 0.6.1 784.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgdd_14-0.6.1-3PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgdd_14 pgdd_14-0.6.1-3PIGSTY.el10.x86_64.rpm pigsty 0.6.1 833.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgdd_14-0.6.1-3PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgdd_14 pgdd_14-0.6.1-3PIGSTY.el10.aarch64.rpm pigsty 0.6.1 775.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgdd_14-0.6.1-3PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb pigsty 0.6.1 660.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb pigsty 0.6.1 553.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb pigsty 0.6.1 660.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb pigsty 0.6.1 554.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb pigsty 0.6.1 735.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb pigsty 0.6.1 656.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~noble_amd64.deb pigsty 0.6.1 727.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~noble_arm64.deb pigsty 0.6.1 645.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb pigsty 0.6.1 724.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgdd postgresql-14-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb pigsty 0.6.1 642.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdd/postgresql-14-pgdd_0.6.1-3PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgdd` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgdd         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgdd` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgdd;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgdd -v 18  # PG 18
pig ext install -y pgdd -v 17  # PG 17
pig ext install -y pgdd -v 16  # PG 16
pig ext install -y pgdd -v 15  # PG 15
pig ext install -y pgdd -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgdd_18       # PG 18
dnf install -y pgdd_17       # PG 17
dnf install -y pgdd_16       # PG 16
dnf install -y pgdd_15       # PG 15
dnf install -y pgdd_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgdd   # PG 18
apt install -y postgresql-17-pgdd   # PG 17
apt install -y postgresql-16-pgdd   # PG 16
apt install -y postgresql-15-pgdd   # PG 15
apt install -y postgresql-14-pgdd   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgdd;
```




## 用法

> [pgdd: 通过标准 SQL 内省 PostgreSQL 数据字典](https://github.com/rustprooflabs/pgdd)

PgDD 在 `dd` 模式中提供数据字典视图，用于通过标准 SQL 内省数据库对象。

### 数据库概览

```sql
SELECT * FROM dd.database;
```

返回：`db_name`、`db_size`、`schema_count`、`table_count`、`size_in_tables`、`view_count`、`size_in_views`、`extension_count`。

### 模式

```sql
SELECT s_name, table_count, view_count, function_count, size_plus_indexes, description
  FROM dd.schemas;
```

### 表

```sql
SELECT t_name, size_pretty, rows, bytes_per_row
  FROM dd.tables
  WHERE s_name = 'public';
```

### 视图

```sql
SELECT s_name, v_name, description FROM dd.views;
```

### 列

```sql
SELECT source_type, s_name, t_name, c_name, data_type
  FROM dd.columns
  WHERE data_type LIKE 'int%';
```

### 函数

```sql
SELECT s_name, f_name, argument_data_types, result_data_types FROM dd.functions;
```

### 分区表

```sql
SELECT * FROM dd.partition_parents WHERE s_name = 'public';
SELECT * FROM dd.partition_children WHERE s_name = 'public';
```

`partition_parents` 视图显示聚合的分区统计信息（数量、总大小、总行数）。`partition_children` 视图显示每个分区的详情及相对于父表的百分比计算。

默认排除系统对象。如需包含系统对象，请直接查询底层函数：`SELECT * FROM dd.tables() WHERE system_object;`

---
title: "uint"
linkTitle: "uint"
description: "无符号整型数据类型"
weight: 3730
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/petere/pguint">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">petere/pguint</div>
    <div class="ext-card__desc">https://github.com/petere/pguint</div>
  </a>
  <a class="ext-card ext-card--source" href="pguint-1.20250815.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pguint-1.20250815.tar.gz</div>
    <div class="ext-card__desc">pguint-1.20250815.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pguint`**](/ext/e/uint) | `1.20250815` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3730  | [**`uint`**](/ext/e/uint) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> no pg14 for el8/el9 pgdg repo


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.20250815` | {{< pgvers "18,17,16,15,14" >}} | `pguint` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.20250815` | {{< pgvers "18,17,16,15,14" >}} | `pguint_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.20250815` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pguint` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.20250815 2 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 4 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 1 |
| el8.aarch64 | AVAIL PIGSTY 1.20250815 2 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 4 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 1 |
| el9.x86_64 | AVAIL PIGSTY 1.20250815 2 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 4 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 1 |
| el9.aarch64 | AVAIL PIGSTY 1.20250815 2 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 4 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 1 |
| el10.x86_64 | AVAIL PIGSTY 1.20250815 2 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 1 |
| el10.aarch64 | AVAIL PIGSTY 1.20250815 2 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 3 | AVAIL PIGSTY 1.20250815 1 |
| d12.x86_64 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 |
| d12.aarch64 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 |
| d13.x86_64 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 |
| d13.aarch64 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 |
| u22.x86_64 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 |
| u22.aarch64 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 |
| u24.x86_64 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 |
| u24.aarch64 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 | AVAIL PIGSTY 1.20250815 1 |
@ el8.x86_64 18 pguint_18 pguint_18-1.20250815-1PIGSTY.el8.x86_64.rpm pigsty 1.20250815 94.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pguint_18-1.20250815-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pguint_18 pguint_18-1.20250815-1PGDG.rhel8.x86_64.rpm pgdg 1.20250815 72.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pguint_18-1.20250815-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pguint_18 pguint_18-1.20250815-1PIGSTY.el8.aarch64.rpm pigsty 1.20250815 82.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pguint_18-1.20250815-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pguint_18 pguint_18-1.20250815-1PGDG.rhel8.aarch64.rpm pgdg 1.20250815 66.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pguint_18-1.20250815-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pguint_18 pguint_18-1.20250815-1PIGSTY.el9.x86_64.rpm pigsty 1.20250815 82.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pguint_18-1.20250815-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pguint_18 pguint_18-1.20250815-1PGDG.rhel9.x86_64.rpm pgdg 1.20250815 75.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pguint_18-1.20250815-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pguint_18 pguint_18-1.20250815-1PIGSTY.el9.aarch64.rpm pigsty 1.20250815 77.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pguint_18-1.20250815-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pguint_18 pguint_18-1.20250815-1PGDG.rhel9.aarch64.rpm pgdg 1.20250815 70.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pguint_18-1.20250815-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pguint_18 pguint_18-1.20250815-1PIGSTY.el10.x86_64.rpm pigsty 1.20250815 82.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pguint_18-1.20250815-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pguint_18 pguint_18-1.20250815-1PGDG.rhel10.x86_64.rpm pgdg 1.20250815 75.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pguint_18-1.20250815-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pguint_18 pguint_18-1.20250815-1PIGSTY.el10.aarch64.rpm pigsty 1.20250815 78.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pguint_18-1.20250815-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pguint_18 pguint_18-1.20250815-1PGDG.rhel10.aarch64.rpm pgdg 1.20250815 72.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pguint_18-1.20250815-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pguint postgresql-18-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb pigsty 1.20250815 159.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-18-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pguint postgresql-18-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb pigsty 1.20250815 156.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-18-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pguint postgresql-18-pguint_1.20250815-1PIGSTY~trixie_amd64.deb pigsty 1.20250815 159.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-18-pguint_1.20250815-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pguint postgresql-18-pguint_1.20250815-1PIGSTY~trixie_arm64.deb pigsty 1.20250815 156.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-18-pguint_1.20250815-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pguint postgresql-18-pguint_1.20250815-1PIGSTY~jammy_amd64.deb pigsty 1.20250815 190.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-18-pguint_1.20250815-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pguint postgresql-18-pguint_1.20250815-1PIGSTY~jammy_arm64.deb pigsty 1.20250815 185.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-18-pguint_1.20250815-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pguint postgresql-18-pguint_1.20250815-1PIGSTY~noble_amd64.deb pigsty 1.20250815 177.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-18-pguint_1.20250815-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pguint postgresql-18-pguint_1.20250815-1PIGSTY~noble_arm64.deb pigsty 1.20250815 175.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-18-pguint_1.20250815-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pguint_17 pguint_17-1.20250815-1PIGSTY.el8.x86_64.rpm pigsty 1.20250815 94.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pguint_17-1.20250815-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pguint_17 pguint_17-1.20250815-1PGDG.rhel8.x86_64.rpm pgdg 1.20250815 72.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pguint_17-1.20250815-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pguint_17 pguint_17-1.20231206-2PGDG.rhel8.x86_64.rpm pgdg 1.20231206 71.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pguint_17-1.20231206-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pguint_17 pguint_17-1.20250815-1PIGSTY.el8.aarch64.rpm pigsty 1.20250815 82.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pguint_17-1.20250815-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pguint_17 pguint_17-1.20250815-1PGDG.rhel8.aarch64.rpm pgdg 1.20250815 66.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pguint_17-1.20250815-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pguint_17 pguint_17-1.20231206-2PGDG.rhel8.aarch64.rpm pgdg 1.20231206 65.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pguint_17-1.20231206-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pguint_17 pguint_17-1.20250815-1PIGSTY.el9.x86_64.rpm pigsty 1.20250815 83.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pguint_17-1.20250815-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pguint_17 pguint_17-1.20250815-1PGDG.rhel9.x86_64.rpm pgdg 1.20250815 75.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pguint_17-1.20250815-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pguint_17 pguint_17-1.20231206-2PGDG.rhel9.x86_64.rpm pgdg 1.20231206 74.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pguint_17-1.20231206-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pguint_17 pguint_17-1.20250815-1PIGSTY.el9.aarch64.rpm pigsty 1.20250815 77.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pguint_17-1.20250815-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pguint_17 pguint_17-1.20250815-1PGDG.rhel9.aarch64.rpm pgdg 1.20250815 70.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pguint_17-1.20250815-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pguint_17 pguint_17-1.20231206-2PGDG.rhel9.aarch64.rpm pgdg 1.20231206 69.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pguint_17-1.20231206-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pguint_17 pguint_17-1.20250815-1PIGSTY.el10.x86_64.rpm pigsty 1.20250815 82.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pguint_17-1.20250815-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pguint_17 pguint_17-1.20250815-1PGDG.rhel10.x86_64.rpm pgdg 1.20250815 75.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pguint_17-1.20250815-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pguint_17 pguint_17-1.20231206-3PGDG.rhel10.x86_64.rpm pgdg 1.20231206 75.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pguint_17-1.20231206-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pguint_17 pguint_17-1.20250815-1PIGSTY.el10.aarch64.rpm pigsty 1.20250815 78.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pguint_17-1.20250815-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pguint_17 pguint_17-1.20250815-1PGDG.rhel10.aarch64.rpm pgdg 1.20250815 72.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pguint_17-1.20250815-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pguint_17 pguint_17-1.20231206-3PGDG.rhel10.aarch64.rpm pgdg 1.20231206 72.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pguint_17-1.20231206-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pguint postgresql-17-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb pigsty 1.20250815 159.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-17-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pguint postgresql-17-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb pigsty 1.20250815 156.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-17-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pguint postgresql-17-pguint_1.20250815-1PIGSTY~trixie_amd64.deb pigsty 1.20250815 158.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-17-pguint_1.20250815-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pguint postgresql-17-pguint_1.20250815-1PIGSTY~trixie_arm64.deb pigsty 1.20250815 156.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-17-pguint_1.20250815-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pguint postgresql-17-pguint_1.20250815-1PIGSTY~jammy_amd64.deb pigsty 1.20250815 193.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-17-pguint_1.20250815-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pguint postgresql-17-pguint_1.20250815-1PIGSTY~jammy_arm64.deb pigsty 1.20250815 188.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-17-pguint_1.20250815-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pguint postgresql-17-pguint_1.20250815-1PIGSTY~noble_amd64.deb pigsty 1.20250815 177.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-17-pguint_1.20250815-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pguint postgresql-17-pguint_1.20250815-1PIGSTY~noble_arm64.deb pigsty 1.20250815 175.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-17-pguint_1.20250815-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pguint_16 pguint_16-1.20250815-1PIGSTY.el8.x86_64.rpm pigsty 1.20250815 94.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pguint_16-1.20250815-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pguint_16 pguint_16-1.20250815-1PGDG.rhel8.x86_64.rpm pgdg 1.20250815 72.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pguint_16-1.20250815-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pguint_16 pguint_16-1.20231206-1PGDG.rhel8.x86_64.rpm pgdg 1.20231206 71.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pguint_16-1.20231206-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pguint_16 pguint_16-1.20220601-3.rhel8.1.x86_64.rpm pgdg 1.20220601 71.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pguint_16-1.20220601-3.rhel8.1.x86_64.rpm
@ el8.aarch64 16 pguint_16 pguint_16-1.20250815-1PIGSTY.el8.aarch64.rpm pigsty 1.20250815 82.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pguint_16-1.20250815-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pguint_16 pguint_16-1.20250815-1PGDG.rhel8.aarch64.rpm pgdg 1.20250815 66.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pguint_16-1.20250815-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pguint_16 pguint_16-1.20231206-1PGDG.rhel8.aarch64.rpm pgdg 1.20231206 65.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pguint_16-1.20231206-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pguint_16 pguint_16-1.20220601-3.rhel8.1.aarch64.rpm pgdg 1.20220601 64.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pguint_16-1.20220601-3.rhel8.1.aarch64.rpm
@ el9.x86_64 16 pguint_16 pguint_16-1.20250815-1PIGSTY.el9.x86_64.rpm pigsty 1.20250815 83.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pguint_16-1.20250815-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pguint_16 pguint_16-1.20250815-1PGDG.rhel9.x86_64.rpm pgdg 1.20250815 75.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pguint_16-1.20250815-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pguint_16 pguint_16-1.20231206-1PGDG.rhel9.x86_64.rpm pgdg 1.20231206 74.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pguint_16-1.20231206-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pguint_16 pguint_16-1.20220601-3.rhel9.1.x86_64.rpm pgdg 1.20220601 74.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pguint_16-1.20220601-3.rhel9.1.x86_64.rpm
@ el9.aarch64 16 pguint_16 pguint_16-1.20250815-1PIGSTY.el9.aarch64.rpm pigsty 1.20250815 77.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pguint_16-1.20250815-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pguint_16 pguint_16-1.20250815-1PGDG.rhel9.aarch64.rpm pgdg 1.20250815 70.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pguint_16-1.20250815-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pguint_16 pguint_16-1.20231206-1PGDG.rhel9.aarch64.rpm pgdg 1.20231206 69.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pguint_16-1.20231206-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pguint_16 pguint_16-1.20220601-3.rhel9.1.aarch64.rpm pgdg 1.20220601 69.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pguint_16-1.20220601-3.rhel9.1.aarch64.rpm
@ el10.x86_64 16 pguint_16 pguint_16-1.20250815-1PIGSTY.el10.x86_64.rpm pigsty 1.20250815 82.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pguint_16-1.20250815-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pguint_16 pguint_16-1.20250815-1PGDG.rhel10.x86_64.rpm pgdg 1.20250815 76.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pguint_16-1.20250815-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pguint_16 pguint_16-1.20231206-3PGDG.rhel10.x86_64.rpm pgdg 1.20231206 75.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pguint_16-1.20231206-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pguint_16 pguint_16-1.20250815-1PIGSTY.el10.aarch64.rpm pigsty 1.20250815 77.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pguint_16-1.20250815-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pguint_16 pguint_16-1.20250815-1PGDG.rhel10.aarch64.rpm pgdg 1.20250815 72.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pguint_16-1.20250815-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pguint_16 pguint_16-1.20231206-3PGDG.rhel10.aarch64.rpm pgdg 1.20231206 72.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pguint_16-1.20231206-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pguint postgresql-16-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb pigsty 1.20250815 159.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-16-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pguint postgresql-16-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb pigsty 1.20250815 155.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-16-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pguint postgresql-16-pguint_1.20250815-1PIGSTY~trixie_amd64.deb pigsty 1.20250815 159.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-16-pguint_1.20250815-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pguint postgresql-16-pguint_1.20250815-1PIGSTY~trixie_arm64.deb pigsty 1.20250815 155.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-16-pguint_1.20250815-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pguint postgresql-16-pguint_1.20250815-1PIGSTY~jammy_amd64.deb pigsty 1.20250815 193.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-16-pguint_1.20250815-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pguint postgresql-16-pguint_1.20250815-1PIGSTY~jammy_arm64.deb pigsty 1.20250815 188.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-16-pguint_1.20250815-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pguint postgresql-16-pguint_1.20250815-1PIGSTY~noble_amd64.deb pigsty 1.20250815 177.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-16-pguint_1.20250815-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pguint postgresql-16-pguint_1.20250815-1PIGSTY~noble_arm64.deb pigsty 1.20250815 175.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-16-pguint_1.20250815-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pguint_15 pguint_15-1.20250815-1PIGSTY.el8.x86_64.rpm pigsty 1.20250815 94.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pguint_15-1.20250815-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pguint_15 pguint_15-1.20250815-1PGDG.rhel8.x86_64.rpm pgdg 1.20250815 72.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pguint_15-1.20250815-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pguint_15 pguint_15-1.20231206-1PGDG.rhel8.x86_64.rpm pgdg 1.20231206 71.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pguint_15-1.20231206-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pguint_15 pguint_15-1.20250815-1PIGSTY.el8.aarch64.rpm pigsty 1.20250815 82.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pguint_15-1.20250815-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pguint_15 pguint_15-1.20250815-1PGDG.rhel8.aarch64.rpm pgdg 1.20250815 66.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pguint_15-1.20250815-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pguint_15 pguint_15-1.20231206-1PGDG.rhel8.aarch64.rpm pgdg 1.20231206 65.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pguint_15-1.20231206-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pguint_15 pguint_15-1.20250815-1PIGSTY.el9.x86_64.rpm pigsty 1.20250815 83.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pguint_15-1.20250815-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pguint_15 pguint_15-1.20250815-1PGDG.rhel9.x86_64.rpm pgdg 1.20250815 75.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pguint_15-1.20250815-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pguint_15 pguint_15-1.20231206-1PGDG.rhel9.x86_64.rpm pgdg 1.20231206 74.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pguint_15-1.20231206-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pguint_15 pguint_15-1.20250815-1PIGSTY.el9.aarch64.rpm pigsty 1.20250815 77.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pguint_15-1.20250815-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pguint_15 pguint_15-1.20250815-1PGDG.rhel9.aarch64.rpm pgdg 1.20250815 70.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pguint_15-1.20250815-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pguint_15 pguint_15-1.20231206-1PGDG.rhel9.aarch64.rpm pgdg 1.20231206 69.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pguint_15-1.20231206-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pguint_15 pguint_15-1.20250815-1PIGSTY.el10.x86_64.rpm pigsty 1.20250815 82.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pguint_15-1.20250815-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pguint_15 pguint_15-1.20250815-1PGDG.rhel10.x86_64.rpm pgdg 1.20250815 75.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pguint_15-1.20250815-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pguint_15 pguint_15-1.20231206-3PGDG.rhel10.x86_64.rpm pgdg 1.20231206 75.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pguint_15-1.20231206-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pguint_15 pguint_15-1.20250815-1PIGSTY.el10.aarch64.rpm pigsty 1.20250815 78.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pguint_15-1.20250815-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pguint_15 pguint_15-1.20250815-1PGDG.rhel10.aarch64.rpm pgdg 1.20250815 72.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pguint_15-1.20250815-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pguint_15 pguint_15-1.20231206-3PGDG.rhel10.aarch64.rpm pgdg 1.20231206 71.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pguint_15-1.20231206-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pguint postgresql-15-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb pigsty 1.20250815 161.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-15-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pguint postgresql-15-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb pigsty 1.20250815 157.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-15-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pguint postgresql-15-pguint_1.20250815-1PIGSTY~trixie_amd64.deb pigsty 1.20250815 160.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-15-pguint_1.20250815-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pguint postgresql-15-pguint_1.20250815-1PIGSTY~trixie_arm64.deb pigsty 1.20250815 157.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-15-pguint_1.20250815-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pguint postgresql-15-pguint_1.20250815-1PIGSTY~jammy_amd64.deb pigsty 1.20250815 192.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-15-pguint_1.20250815-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pguint postgresql-15-pguint_1.20250815-1PIGSTY~jammy_arm64.deb pigsty 1.20250815 187.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-15-pguint_1.20250815-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pguint postgresql-15-pguint_1.20250815-1PIGSTY~noble_amd64.deb pigsty 1.20250815 178.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-15-pguint_1.20250815-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pguint postgresql-15-pguint_1.20250815-1PIGSTY~noble_arm64.deb pigsty 1.20250815 176.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-15-pguint_1.20250815-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pguint_14 pguint_14-1.20250815-1PIGSTY.el8.x86_64.rpm pigsty 1.20250815 94.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pguint_14-1.20250815-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pguint_14 pguint_14-1.20250815-1PIGSTY.el8.aarch64.rpm pigsty 1.20250815 82.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pguint_14-1.20250815-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pguint_14 pguint_14-1.20250815-1PIGSTY.el9.x86_64.rpm pigsty 1.20250815 82.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pguint_14-1.20250815-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pguint_14 pguint_14-1.20250815-1PIGSTY.el9.aarch64.rpm pigsty 1.20250815 77.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pguint_14-1.20250815-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pguint_14 pguint_14-1.20250815-1PIGSTY.el10.x86_64.rpm pigsty 1.20250815 82.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pguint_14-1.20250815-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pguint_14 pguint_14-1.20250815-1PIGSTY.el10.aarch64.rpm pigsty 1.20250815 77.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pguint_14-1.20250815-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pguint postgresql-14-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb pigsty 1.20250815 160.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-14-pguint_1.20250815-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pguint postgresql-14-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb pigsty 1.20250815 156.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pguint/postgresql-14-pguint_1.20250815-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pguint postgresql-14-pguint_1.20250815-1PIGSTY~trixie_amd64.deb pigsty 1.20250815 159.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-14-pguint_1.20250815-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pguint postgresql-14-pguint_1.20250815-1PIGSTY~trixie_arm64.deb pigsty 1.20250815 156.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pguint/postgresql-14-pguint_1.20250815-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pguint postgresql-14-pguint_1.20250815-1PIGSTY~jammy_amd64.deb pigsty 1.20250815 192.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-14-pguint_1.20250815-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pguint postgresql-14-pguint_1.20250815-1PIGSTY~jammy_arm64.deb pigsty 1.20250815 187.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pguint/postgresql-14-pguint_1.20250815-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pguint postgresql-14-pguint_1.20250815-1PIGSTY~noble_amd64.deb pigsty 1.20250815 178.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-14-pguint_1.20250815-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pguint postgresql-14-pguint_1.20250815-1PIGSTY~noble_arm64.deb pigsty 1.20250815 148.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pguint/postgresql-14-pguint_1.20250815-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pguint` 扩展的 RPM / DEB 包：

```bash
pig build pkg pguint         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pguint` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pguint;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pguint -v 18  # PG 18
pig ext install -y pguint -v 17  # PG 17
pig ext install -y pguint -v 16  # PG 16
pig ext install -y pguint -v 15  # PG 15
pig ext install -y pguint -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pguint_18       # PG 18
dnf install -y pguint_17       # PG 17
dnf install -y pguint_16       # PG 16
dnf install -y pguint_15       # PG 15
dnf install -y pguint_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pguint   # PG 18
apt install -y postgresql-17-pguint   # PG 17
apt install -y postgresql-16-pguint   # PG 16
apt install -y postgresql-15-pguint   # PG 15
apt install -y postgresql-14-pguint   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION uint;
```



## 用法

> [uint: PostgreSQL 无符号整数类型](https://github.com/petere/pguint)

`uint` 扩展为 PostgreSQL 添加了无符号整数和小整数类型。

```sql
CREATE EXTENSION uint;
```

### 数据类型

| 类型 | 说明 | 范围 |
|------|-------------|-------|
| `int1` | 有符号 8 位整数 | -128 到 127 |
| `uint1` | 无符号 8 位整数 | 0 到 255 |
| `uint2` | 无符号 16 位整数 | 0 到 65535 |
| `uint4` | 无符号 32 位整数 | 0 到 4294967295 |
| `uint8` | 无符号 64 位整数 | 0 到 18446744073709551615 |

### 用法

```sql
CREATE TABLE foo (
    a uint4,
    b text
);

SELECT * FROM foo WHERE a > 4;
SELECT avg(a) FROM foo;
```

### 运算符和函数

所有类型包含完整的算术运算符（`+`、`-`、`*`、`/`、`%`）、比较运算符（`=`、`<>`、`<`、`>`、`<=`、`>=`）以及各类型组合之间的运算符。同时提供标准聚合函数和索引支持（Btree、Hash）。

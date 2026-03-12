---
title: "semver"
linkTitle: "semver"
description: "语义版本号数据类型"
weight: 3510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/theory/pg-semver">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">theory/pg-semver</div>
    <div class="ext-card__desc">https://github.com/theory/pg-semver</div>
  </a>
  <a class="ext-card ext-card--source" href="pg-semver-0.41.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-semver-0.41.0.tar.gz</div>
    <div class="ext-card__desc">pg-semver-0.41.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_semver`**](/ext/e/semver) | `0.41.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3510  | [**`semver`**](/ext/e/semver) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`ltree`](/ext/e/ltree) [`citext`](/ext/e/citext) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.41.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_semver` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.41.0` | {{< pgvers "18,17,16,15,14" >}} | `semver_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.41.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-semver` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 5 | AVAIL PIGSTY 0.41.0 6 |
| el8.aarch64 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 4 | AVAIL PIGSTY 0.41.0 4 |
| el9.x86_64 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 5 | AVAIL PIGSTY 0.41.0 4 |
| el9.aarch64 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 4 | AVAIL PIGSTY 0.41.0 4 |
| el10.x86_64 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 |
| el10.aarch64 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 | AVAIL PIGSTY 0.41.0 3 |
| d12.x86_64 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 |
| d12.aarch64 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 |
| d13.x86_64 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 |
| d13.aarch64 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 |
| u22.x86_64 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 |
| u22.aarch64 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 |
| u24.x86_64 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 |
| u24.aarch64 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 | AVAIL PGDG 0.41.0 1 |
@ el8.x86_64 18 semver_18 semver_18-0.41.0-1PIGSTY.el8.x86_64.rpm pigsty 0.41.0 27.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/semver_18-0.41.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 semver_18 semver_18-0.41.0-1PGDG.rhel8.10.x86_64.rpm pgdg 0.41.0 28.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/semver_18-0.41.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 semver_18 semver_18-0.40.0-1PGDG.rhel8.x86_64.rpm pgdg 0.40.0 27.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/semver_18-0.40.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 semver_18 semver_18-0.41.0-1PIGSTY.el8.aarch64.rpm pigsty 0.41.0 27.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/semver_18-0.41.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 semver_18 semver_18-0.41.0-1PGDG.rhel8.10.aarch64.rpm pgdg 0.41.0 28.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/semver_18-0.41.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 semver_18 semver_18-0.40.0-1PGDG.rhel8.aarch64.rpm pgdg 0.40.0 27.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/semver_18-0.40.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 semver_18 semver_18-0.41.0-1PIGSTY.el9.x86_64.rpm pigsty 0.41.0 26.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/semver_18-0.41.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 semver_18 semver_18-0.41.0-1PGDG.rhel9.7.x86_64.rpm pgdg 0.41.0 27.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/semver_18-0.41.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 semver_18 semver_18-0.40.0-1PGDG.rhel9.x86_64.rpm pgdg 0.40.0 26.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/semver_18-0.40.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 semver_18 semver_18-0.41.0-1PIGSTY.el9.aarch64.rpm pigsty 0.41.0 26.7KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/semver_18-0.41.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 semver_18 semver_18-0.41.0-1PGDG.rhel9.7.aarch64.rpm pgdg 0.41.0 26.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/semver_18-0.41.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 semver_18 semver_18-0.40.0-1PGDG.rhel9.aarch64.rpm pgdg 0.40.0 26.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/semver_18-0.40.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 semver_18 semver_18-0.41.0-1PIGSTY.el10.x86_64.rpm pigsty 0.41.0 27.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/semver_18-0.41.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 semver_18 semver_18-0.41.0-1PGDG.rhel10.1.x86_64.rpm pgdg 0.41.0 27.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/semver_18-0.41.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 semver_18 semver_18-0.40.0-1PGDG.rhel10.x86_64.rpm pgdg 0.40.0 27.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/semver_18-0.40.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 semver_18 semver_18-0.41.0-1PIGSTY.el10.aarch64.rpm pigsty 0.41.0 27.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/semver_18-0.41.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 semver_18 semver_18-0.41.0-1PGDG.rhel10.1.aarch64.rpm pgdg 0.41.0 27.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/semver_18-0.41.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 semver_18 semver_18-0.40.0-1PGDG.rhel10.aarch64.rpm pgdg 0.40.0 27.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/semver_18-0.40.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-semver postgresql-18-semver_0.41.0-1.pgdg12+1_amd64.deb pgdg 0.41.0 39.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-18-semver_0.41.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-semver postgresql-18-semver_0.41.0-1.pgdg12+1_arm64.deb pgdg 0.41.0 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-18-semver_0.41.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-semver postgresql-18-semver_0.41.0-1.pgdg13+1_amd64.deb pgdg 0.41.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-18-semver_0.41.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-semver postgresql-18-semver_0.41.0-1.pgdg13+1_arm64.deb pgdg 0.41.0 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-18-semver_0.41.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-semver postgresql-18-semver_0.41.0-1.pgdg22.04+1_amd64.deb pgdg 0.41.0 38.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-18-semver_0.41.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-semver postgresql-18-semver_0.41.0-1.pgdg22.04+1_arm64.deb pgdg 0.41.0 38.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-18-semver_0.41.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-semver postgresql-18-semver_0.41.0-1.pgdg24.04+1_amd64.deb pgdg 0.41.0 38.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-18-semver_0.41.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-semver postgresql-18-semver_0.41.0-1.pgdg24.04+1_arm64.deb pgdg 0.41.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-18-semver_0.41.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 semver_17 semver_17-0.41.0-1PIGSTY.el8.x86_64.rpm pigsty 0.41.0 27.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/semver_17-0.41.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 semver_17 semver_17-0.41.0-1PGDG.rhel8.10.x86_64.rpm pgdg 0.41.0 28.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/semver_17-0.41.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 semver_17 semver_17-0.32.1-1PGDG.rhel8.x86_64.rpm pgdg 0.32.1 27.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/semver_17-0.32.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 semver_17 semver_17-0.41.0-1PIGSTY.el8.aarch64.rpm pigsty 0.41.0 27.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/semver_17-0.41.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 semver_17 semver_17-0.41.0-1PGDG.rhel8.10.aarch64.rpm pgdg 0.41.0 28.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/semver_17-0.41.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 semver_17 semver_17-0.32.1-1PGDG.rhel8.aarch64.rpm pgdg 0.32.1 26.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/semver_17-0.32.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 semver_17 semver_17-0.41.0-1PIGSTY.el9.x86_64.rpm pigsty 0.41.0 26.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/semver_17-0.41.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 semver_17 semver_17-0.41.0-1PGDG.rhel9.7.x86_64.rpm pgdg 0.41.0 27.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/semver_17-0.41.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 semver_17 semver_17-0.32.1-1PGDG.rhel9.x86_64.rpm pgdg 0.32.1 26.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/semver_17-0.32.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 semver_17 semver_17-0.41.0-1PIGSTY.el9.aarch64.rpm pigsty 0.41.0 26.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/semver_17-0.41.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 semver_17 semver_17-0.41.0-1PGDG.rhel9.7.aarch64.rpm pgdg 0.41.0 26.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/semver_17-0.41.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 semver_17 semver_17-0.32.1-1PGDG.rhel9.aarch64.rpm pgdg 0.32.1 26.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/semver_17-0.32.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 semver_17 semver_17-0.41.0-1PIGSTY.el10.x86_64.rpm pigsty 0.41.0 26.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/semver_17-0.41.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 semver_17 semver_17-0.41.0-1PGDG.rhel10.1.x86_64.rpm pgdg 0.41.0 27.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/semver_17-0.41.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 semver_17 semver_17-0.40.0-1PGDG.rhel10.x86_64.rpm pgdg 0.40.0 27.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/semver_17-0.40.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 semver_17 semver_17-0.41.0-1PIGSTY.el10.aarch64.rpm pigsty 0.41.0 27.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/semver_17-0.41.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 semver_17 semver_17-0.41.0-1PGDG.rhel10.1.aarch64.rpm pgdg 0.41.0 27.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/semver_17-0.41.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 semver_17 semver_17-0.40.0-1PGDG.rhel10.aarch64.rpm pgdg 0.40.0 27.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/semver_17-0.40.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-semver postgresql-17-semver_0.41.0-1.pgdg12+1_amd64.deb pgdg 0.41.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-17-semver_0.41.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-semver postgresql-17-semver_0.41.0-1.pgdg12+1_arm64.deb pgdg 0.41.0 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-17-semver_0.41.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-semver postgresql-17-semver_0.41.0-1.pgdg13+1_amd64.deb pgdg 0.41.0 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-17-semver_0.41.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-semver postgresql-17-semver_0.41.0-1.pgdg13+1_arm64.deb pgdg 0.41.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-17-semver_0.41.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-semver postgresql-17-semver_0.41.0-1.pgdg22.04+1_amd64.deb pgdg 0.41.0 39.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-17-semver_0.41.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-semver postgresql-17-semver_0.41.0-1.pgdg22.04+1_arm64.deb pgdg 0.41.0 38.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-17-semver_0.41.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-semver postgresql-17-semver_0.41.0-1.pgdg24.04+1_amd64.deb pgdg 0.41.0 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-17-semver_0.41.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-semver postgresql-17-semver_0.41.0-1.pgdg24.04+1_arm64.deb pgdg 0.41.0 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-17-semver_0.41.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 semver_16 semver_16-0.41.0-1PIGSTY.el8.x86_64.rpm pigsty 0.41.0 27.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/semver_16-0.41.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 semver_16 semver_16-0.41.0-1PGDG.rhel8.10.x86_64.rpm pgdg 0.41.0 28.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/semver_16-0.41.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 semver_16 semver_16-0.32.1-1PGDG.rhel8.x86_64.rpm pgdg 0.32.1 27.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/semver_16-0.32.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 semver_16 semver_16-0.41.0-1PIGSTY.el8.aarch64.rpm pigsty 0.41.0 27.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/semver_16-0.41.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 semver_16 semver_16-0.41.0-1PGDG.rhel8.10.aarch64.rpm pgdg 0.41.0 28.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/semver_16-0.41.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 semver_16 semver_16-0.32.1-1PGDG.rhel8.aarch64.rpm pgdg 0.32.1 26.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/semver_16-0.32.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 semver_16 semver_16-0.41.0-1PIGSTY.el9.x86_64.rpm pigsty 0.41.0 26.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/semver_16-0.41.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 semver_16 semver_16-0.41.0-1PGDG.rhel9.7.x86_64.rpm pgdg 0.41.0 27.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/semver_16-0.41.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 semver_16 semver_16-0.32.1-1PGDG.rhel9.x86_64.rpm pgdg 0.32.1 26.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/semver_16-0.32.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 semver_16 semver_16-0.41.0-1PIGSTY.el9.aarch64.rpm pigsty 0.41.0 26.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/semver_16-0.41.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 semver_16 semver_16-0.41.0-1PGDG.rhel9.7.aarch64.rpm pgdg 0.41.0 26.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/semver_16-0.41.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 semver_16 semver_16-0.32.1-1PGDG.rhel9.aarch64.rpm pgdg 0.32.1 25.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/semver_16-0.32.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 semver_16 semver_16-0.41.0-1PIGSTY.el10.x86_64.rpm pigsty 0.41.0 26.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/semver_16-0.41.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 semver_16 semver_16-0.41.0-1PGDG.rhel10.1.x86_64.rpm pgdg 0.41.0 27.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/semver_16-0.41.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 semver_16 semver_16-0.40.0-1PGDG.rhel10.x86_64.rpm pgdg 0.40.0 27.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/semver_16-0.40.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 semver_16 semver_16-0.41.0-1PIGSTY.el10.aarch64.rpm pigsty 0.41.0 27.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/semver_16-0.41.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 semver_16 semver_16-0.41.0-1PGDG.rhel10.1.aarch64.rpm pgdg 0.41.0 27.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/semver_16-0.41.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 semver_16 semver_16-0.40.0-1PGDG.rhel10.aarch64.rpm pgdg 0.40.0 27.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/semver_16-0.40.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-semver postgresql-16-semver_0.41.0-1.pgdg12+1_amd64.deb pgdg 0.41.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-16-semver_0.41.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-semver postgresql-16-semver_0.41.0-1.pgdg12+1_arm64.deb pgdg 0.41.0 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-16-semver_0.41.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-semver postgresql-16-semver_0.41.0-1.pgdg13+1_amd64.deb pgdg 0.41.0 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-16-semver_0.41.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-semver postgresql-16-semver_0.41.0-1.pgdg13+1_arm64.deb pgdg 0.41.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-16-semver_0.41.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-semver postgresql-16-semver_0.41.0-1.pgdg22.04+1_amd64.deb pgdg 0.41.0 39.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-16-semver_0.41.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-semver postgresql-16-semver_0.41.0-1.pgdg22.04+1_arm64.deb pgdg 0.41.0 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-16-semver_0.41.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-semver postgresql-16-semver_0.41.0-1.pgdg24.04+1_amd64.deb pgdg 0.41.0 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-16-semver_0.41.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-semver postgresql-16-semver_0.41.0-1.pgdg24.04+1_arm64.deb pgdg 0.41.0 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-16-semver_0.41.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 semver_15 semver_15-0.41.0-1PIGSTY.el8.x86_64.rpm pigsty 0.41.0 27.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/semver_15-0.41.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 semver_15 semver_15-0.41.0-1PGDG.rhel8.10.x86_64.rpm pgdg 0.41.0 28.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/semver_15-0.41.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 semver_15 semver_15-0.32.1-1PGDG.rhel8.x86_64.rpm pgdg 0.32.1 27.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/semver_15-0.32.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 semver_15 semver_15-0.32.0-1.rhel8.x86_64.rpm pgdg 0.32.0 41.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/semver_15-0.32.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 semver_15 semver_15-0.31.2-1.rhel8.x86_64.rpm pgdg 0.31.2 40.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/semver_15-0.31.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 semver_15 semver_15-0.41.0-1PIGSTY.el8.aarch64.rpm pigsty 0.41.0 27.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/semver_15-0.41.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 semver_15 semver_15-0.41.0-1PGDG.rhel8.10.aarch64.rpm pgdg 0.41.0 28.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/semver_15-0.41.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 semver_15 semver_15-0.32.1-1PGDG.rhel8.aarch64.rpm pgdg 0.32.1 26.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/semver_15-0.32.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 semver_15 semver_15-0.32.0-1.rhel8.aarch64.rpm pgdg 0.32.0 41.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/semver_15-0.32.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 semver_15 semver_15-0.41.0-1PIGSTY.el9.x86_64.rpm pigsty 0.41.0 27.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/semver_15-0.41.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 semver_15 semver_15-0.41.0-1PGDG.rhel9.7.x86_64.rpm pgdg 0.41.0 27.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/semver_15-0.41.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 semver_15 semver_15-0.32.1-1PGDG.rhel9.x86_64.rpm pgdg 0.32.1 26.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/semver_15-0.32.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 semver_15 semver_15-0.32.0-1.rhel9.x86_64.rpm pgdg 0.32.0 42.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/semver_15-0.32.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 semver_15 semver_15-0.31.2-1.rhel9.x86_64.rpm pgdg 0.31.2 40.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/semver_15-0.31.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 semver_15 semver_15-0.41.0-1PIGSTY.el9.aarch64.rpm pigsty 0.41.0 27.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/semver_15-0.41.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 semver_15 semver_15-0.41.0-1PGDG.rhel9.7.aarch64.rpm pgdg 0.41.0 27.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/semver_15-0.41.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 semver_15 semver_15-0.32.1-1PGDG.rhel9.aarch64.rpm pgdg 0.32.1 26.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/semver_15-0.32.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 semver_15 semver_15-0.32.0-1.rhel9.aarch64.rpm pgdg 0.32.0 41.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/semver_15-0.32.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 semver_15 semver_15-0.41.0-1PIGSTY.el10.x86_64.rpm pigsty 0.41.0 27.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/semver_15-0.41.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 semver_15 semver_15-0.41.0-1PGDG.rhel10.1.x86_64.rpm pgdg 0.41.0 27.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/semver_15-0.41.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 semver_15 semver_15-0.40.0-1PGDG.rhel10.x86_64.rpm pgdg 0.40.0 27.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/semver_15-0.40.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 semver_15 semver_15-0.41.0-1PIGSTY.el10.aarch64.rpm pigsty 0.41.0 27.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/semver_15-0.41.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 semver_15 semver_15-0.41.0-1PGDG.rhel10.1.aarch64.rpm pgdg 0.41.0 27.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/semver_15-0.41.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 semver_15 semver_15-0.40.0-1PGDG.rhel10.aarch64.rpm pgdg 0.40.0 27.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/semver_15-0.40.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-semver postgresql-15-semver_0.41.0-1.pgdg12+1_amd64.deb pgdg 0.41.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-15-semver_0.41.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-semver postgresql-15-semver_0.41.0-1.pgdg12+1_arm64.deb pgdg 0.41.0 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-15-semver_0.41.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-semver postgresql-15-semver_0.41.0-1.pgdg13+1_amd64.deb pgdg 0.41.0 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-15-semver_0.41.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-semver postgresql-15-semver_0.41.0-1.pgdg13+1_arm64.deb pgdg 0.41.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-15-semver_0.41.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-semver postgresql-15-semver_0.41.0-1.pgdg22.04+1_amd64.deb pgdg 0.41.0 39.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-15-semver_0.41.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-semver postgresql-15-semver_0.41.0-1.pgdg22.04+1_arm64.deb pgdg 0.41.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-15-semver_0.41.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-semver postgresql-15-semver_0.41.0-1.pgdg24.04+1_amd64.deb pgdg 0.41.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-15-semver_0.41.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-semver postgresql-15-semver_0.41.0-1.pgdg24.04+1_arm64.deb pgdg 0.41.0 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-15-semver_0.41.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 semver_14 semver_14-0.41.0-1PIGSTY.el8.x86_64.rpm pigsty 0.41.0 27.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/semver_14-0.41.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 semver_14 semver_14-0.41.0-1PGDG.rhel8.10.x86_64.rpm pgdg 0.41.0 28.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/semver_14-0.41.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 semver_14 semver_14-0.32.1-1PGDG.rhel8.x86_64.rpm pgdg 0.32.1 27.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/semver_14-0.32.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 semver_14 semver_14-0.32.0-1.rhel8.x86_64.rpm pgdg 0.32.0 41.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/semver_14-0.32.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 semver_14 semver_14-0.31.2-1.rhel8.x86_64.rpm pgdg 0.31.2 40.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/semver_14-0.31.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 semver_14 semver_14-0.31.1-2.rhel8.x86_64.rpm pgdg 0.31.1 39.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/semver_14-0.31.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 semver_14 semver_14-0.41.0-1PIGSTY.el8.aarch64.rpm pigsty 0.41.0 27.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/semver_14-0.41.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 semver_14 semver_14-0.41.0-1PGDG.rhel8.10.aarch64.rpm pgdg 0.41.0 28.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/semver_14-0.41.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 semver_14 semver_14-0.32.1-1PGDG.rhel8.aarch64.rpm pgdg 0.32.1 26.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/semver_14-0.32.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 semver_14 semver_14-0.32.0-1.rhel8.aarch64.rpm pgdg 0.32.0 41.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/semver_14-0.32.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 semver_14 semver_14-0.41.0-1PIGSTY.el9.x86_64.rpm pigsty 0.41.0 27.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/semver_14-0.41.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 semver_14 semver_14-0.41.0-1PGDG.rhel9.7.x86_64.rpm pgdg 0.41.0 27.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/semver_14-0.41.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 semver_14 semver_14-0.32.1-1PGDG.rhel9.x86_64.rpm pgdg 0.32.1 26.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/semver_14-0.32.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 semver_14 semver_14-0.32.0-1.rhel9.x86_64.rpm pgdg 0.32.0 42.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/semver_14-0.32.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 semver_14 semver_14-0.41.0-1PIGSTY.el9.aarch64.rpm pigsty 0.41.0 27.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/semver_14-0.41.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 semver_14 semver_14-0.41.0-1PGDG.rhel9.7.aarch64.rpm pgdg 0.41.0 27.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/semver_14-0.41.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 semver_14 semver_14-0.32.1-1PGDG.rhel9.aarch64.rpm pgdg 0.32.1 26.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/semver_14-0.32.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 semver_14 semver_14-0.32.0-1.rhel9.aarch64.rpm pgdg 0.32.0 41.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/semver_14-0.32.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 semver_14 semver_14-0.41.0-1PIGSTY.el10.x86_64.rpm pigsty 0.41.0 27.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/semver_14-0.41.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 semver_14 semver_14-0.41.0-1PGDG.rhel10.1.x86_64.rpm pgdg 0.41.0 27.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/semver_14-0.41.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 semver_14 semver_14-0.40.0-1PGDG.rhel10.x86_64.rpm pgdg 0.40.0 27.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/semver_14-0.40.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 semver_14 semver_14-0.41.0-1PIGSTY.el10.aarch64.rpm pigsty 0.41.0 27.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/semver_14-0.41.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 semver_14 semver_14-0.41.0-1PGDG.rhel10.1.aarch64.rpm pgdg 0.41.0 27.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/semver_14-0.41.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 semver_14 semver_14-0.40.0-1PGDG.rhel10.aarch64.rpm pgdg 0.40.0 27.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/semver_14-0.40.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-semver postgresql-14-semver_0.41.0-1.pgdg12+1_amd64.deb pgdg 0.41.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-14-semver_0.41.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-semver postgresql-14-semver_0.41.0-1.pgdg12+1_arm64.deb pgdg 0.41.0 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-14-semver_0.41.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-semver postgresql-14-semver_0.41.0-1.pgdg13+1_amd64.deb pgdg 0.41.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-14-semver_0.41.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-semver postgresql-14-semver_0.41.0-1.pgdg13+1_arm64.deb pgdg 0.41.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-14-semver_0.41.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-semver postgresql-14-semver_0.41.0-1.pgdg22.04+1_amd64.deb pgdg 0.41.0 39.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-14-semver_0.41.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-semver postgresql-14-semver_0.41.0-1.pgdg22.04+1_arm64.deb pgdg 0.41.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-14-semver_0.41.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-semver postgresql-14-semver_0.41.0-1.pgdg24.04+1_amd64.deb pgdg 0.41.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-14-semver_0.41.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-semver postgresql-14-semver_0.41.0-1.pgdg24.04+1_arm64.deb pgdg 0.41.0 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-semver/postgresql-14-semver_0.41.0-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_semver` 扩展的 RPM 包：

```bash
pig build pkg pg_semver         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_semver` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_semver;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_semver -v 18  # PG 18
pig ext install -y pg_semver -v 17  # PG 17
pig ext install -y pg_semver -v 16  # PG 16
pig ext install -y pg_semver -v 15  # PG 15
pig ext install -y pg_semver -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y semver_18       # PG 18
dnf install -y semver_17       # PG 17
dnf install -y semver_16       # PG 16
dnf install -y semver_15       # PG 15
dnf install -y semver_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-semver   # PG 18
apt install -y postgresql-17-semver   # PG 17
apt install -y postgresql-16-semver   # PG 16
apt install -y postgresql-15-semver   # PG 15
apt install -y postgresql-14-semver   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION semver;
```



## 用法

> [semver: 语义版本号数据类型](https://github.com/theory/pg-semver)

`semver` 扩展提供了实现[语义版本号 2.0.0](https://semver.org/spec/v2.0.0.html)的数据类型。

```sql
CREATE EXTENSION semver;

SELECT '1.2.1'::semver;
SELECT '1.2.0'::semver > '1.2.0-b1'::semver;  -- true（预发布版 < 正式版）
```

### 运算符

| 运算符 | 说明 | 示例 | 结果 |
|----------|-------------|---------|--------|
| `=` | 等于 | `'1.2.0'::semver = '1.2.00'::semver` | `t` |
| `<>` | 不等于 | `'1.2.0'::semver <> '1.2.00'::semver` | `f` |
| `<` | 小于 | `'3.4.0-b1'::semver < '3.4.0'::semver` | `t` |
| `<=` | 小于等于 | `'3.4.0-b1'::semver <= '3.4.0'::semver` | `t` |
| `>` | 大于 | `'3.4.0-b1'::semver > '3.4.0'::semver` | `f` |
| `>=` | 大于等于 | `'3.4.0-b1'::semver >= '3.4.0'::semver` | `f` |

### 函数

| 函数 | 说明 | 示例 | 结果 |
|----------|-------------|---------|--------|
| `to_semver(text)` | 宽松解析 | `to_semver('1.0')` | `1.0.0` |
| `is_semver(text)` | 验证格式 | `is_semver('1.2.0')` | `true` |
| `semver(text)` | 严格转换 | `semver('1.2.1')` | `1.2.1` |
| `get_semver_major(semver)` | 主版本号 | `get_semver_major('4.2.0')` | `4` |
| `get_semver_minor(semver)` | 次版本号 | `get_semver_minor('4.2.0')` | `2` |
| `get_semver_patch(semver)` | 补丁版本号 | `get_semver_patch('4.2.0')` | `0` |
| `get_semver_prerelease(semver)` | 预发布部分 | `get_semver_prerelease('2.1.0-b2+bfb13')` | `b2` |

支持从 `text`、`numeric`、`real`、`double precision`、`integer`、`bigint`、`smallint` 类型的转换。

### 范围类型

`semverrange` 类型支持标准范围运算符：

```sql
SELECT '1.0.5'::semver <@ '[1.0.0, 2.0.0)'::semverrange;  -- true
```

### 聚合函数

支持 `MIN(semver)` 和 `MAX(semver)`。可使用 Btree 和 Hash 索引。

---
title: "asn1oid"
linkTitle: "asn1oid"
description: "ASN1OID数据类型支持"
weight: 3560
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/df7cb/pgsql-asn1oid">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">df7cb/pgsql-asn1oid</div>
    <div class="ext-card__desc">https://github.com/df7cb/pgsql-asn1oid</div>
  </a>
  <a class="ext-card ext-card--source" href="pgsql-asn1oid-1.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsql-asn1oid-1.6.tar.gz</div>
    <div class="ext-card__desc">pgsql-asn1oid-1.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`asn1oid`**](/ext/e/asn1oid) | `1.6` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3560  | [**`asn1oid`**](/ext/e/asn1oid) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pguecc`](/ext/e/pguecc) [`pgcrypto`](/ext/e/pgcrypto) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.6` | {{< pgvers "18,17,16,15,14" >}} | `asn1oid` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6` | {{< pgvers "18,17,16,15,14" >}} | `asn1oid_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-asn1oid` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el8.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el9.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el9.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el10.x86_64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| el10.aarch64 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 | AVAIL PIGSTY 1.6 1 |
| d12.x86_64 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 |
| d12.aarch64 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 |
| d13.x86_64 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 |
| d13.aarch64 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 |
| u22.x86_64 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 |
| u22.aarch64 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 |
| u24.x86_64 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 |
| u24.aarch64 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 | AVAIL PGDG 1.6 1 |
@ el8.x86_64 18 asn1oid_18 asn1oid_18-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/asn1oid_18-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 asn1oid_18 asn1oid_18-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 13.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/asn1oid_18-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 asn1oid_18 asn1oid_18-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/asn1oid_18-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 asn1oid_18 asn1oid_18-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/asn1oid_18-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 asn1oid_18 asn1oid_18-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/asn1oid_18-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 asn1oid_18 asn1oid_18-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/asn1oid_18-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-asn1oid postgresql-18-asn1oid_1.6-3.pgdg12+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-18-asn1oid_1.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-asn1oid postgresql-18-asn1oid_1.6-3.pgdg12+1_arm64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-18-asn1oid_1.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-asn1oid postgresql-18-asn1oid_1.6-3.pgdg13+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-18-asn1oid_1.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-asn1oid postgresql-18-asn1oid_1.6-3.pgdg13+1_arm64.deb pgdg 1.6 13.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-18-asn1oid_1.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-asn1oid postgresql-18-asn1oid_1.6-3.pgdg22.04+1_amd64.deb pgdg 1.6 13.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-18-asn1oid_1.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-asn1oid postgresql-18-asn1oid_1.6-3.pgdg22.04+1_arm64.deb pgdg 1.6 13.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-18-asn1oid_1.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-asn1oid postgresql-18-asn1oid_1.6-3.pgdg24.04+1_amd64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-18-asn1oid_1.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-asn1oid postgresql-18-asn1oid_1.6-3.pgdg24.04+1_arm64.deb pgdg 1.6 13.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-18-asn1oid_1.6-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 asn1oid_17 asn1oid_17-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/asn1oid_17-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 asn1oid_17 asn1oid_17-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/asn1oid_17-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 asn1oid_17 asn1oid_17-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/asn1oid_17-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 asn1oid_17 asn1oid_17-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/asn1oid_17-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 asn1oid_17 asn1oid_17-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/asn1oid_17-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 asn1oid_17 asn1oid_17-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/asn1oid_17-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-asn1oid postgresql-17-asn1oid_1.6-3.pgdg12+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-17-asn1oid_1.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-asn1oid postgresql-17-asn1oid_1.6-3.pgdg12+1_arm64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-17-asn1oid_1.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-asn1oid postgresql-17-asn1oid_1.6-3.pgdg13+1_amd64.deb pgdg 1.6 12.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-17-asn1oid_1.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-asn1oid postgresql-17-asn1oid_1.6-3.pgdg13+1_arm64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-17-asn1oid_1.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-asn1oid postgresql-17-asn1oid_1.6-3.pgdg22.04+1_amd64.deb pgdg 1.6 13.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-17-asn1oid_1.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-asn1oid postgresql-17-asn1oid_1.6-3.pgdg22.04+1_arm64.deb pgdg 1.6 13.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-17-asn1oid_1.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-asn1oid postgresql-17-asn1oid_1.6-3.pgdg24.04+1_amd64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-17-asn1oid_1.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-asn1oid postgresql-17-asn1oid_1.6-3.pgdg24.04+1_arm64.deb pgdg 1.6 13.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-17-asn1oid_1.6-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 asn1oid_16 asn1oid_16-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/asn1oid_16-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 asn1oid_16 asn1oid_16-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/asn1oid_16-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 asn1oid_16 asn1oid_16-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/asn1oid_16-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 asn1oid_16 asn1oid_16-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/asn1oid_16-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 asn1oid_16 asn1oid_16-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 13.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/asn1oid_16-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 asn1oid_16 asn1oid_16-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/asn1oid_16-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-asn1oid postgresql-16-asn1oid_1.6-3.pgdg12+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-16-asn1oid_1.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-asn1oid postgresql-16-asn1oid_1.6-3.pgdg12+1_arm64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-16-asn1oid_1.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-asn1oid postgresql-16-asn1oid_1.6-3.pgdg13+1_amd64.deb pgdg 1.6 12.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-16-asn1oid_1.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-asn1oid postgresql-16-asn1oid_1.6-3.pgdg13+1_arm64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-16-asn1oid_1.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-asn1oid postgresql-16-asn1oid_1.6-3.pgdg22.04+1_amd64.deb pgdg 1.6 13.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-16-asn1oid_1.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-asn1oid postgresql-16-asn1oid_1.6-3.pgdg22.04+1_arm64.deb pgdg 1.6 13.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-16-asn1oid_1.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-asn1oid postgresql-16-asn1oid_1.6-3.pgdg24.04+1_amd64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-16-asn1oid_1.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-asn1oid postgresql-16-asn1oid_1.6-3.pgdg24.04+1_arm64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-16-asn1oid_1.6-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 asn1oid_15 asn1oid_15-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/asn1oid_15-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 asn1oid_15 asn1oid_15-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/asn1oid_15-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 asn1oid_15 asn1oid_15-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/asn1oid_15-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 asn1oid_15 asn1oid_15-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 13.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/asn1oid_15-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 asn1oid_15 asn1oid_15-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/asn1oid_15-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 asn1oid_15 asn1oid_15-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/asn1oid_15-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-asn1oid postgresql-15-asn1oid_1.6-3.pgdg12+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-15-asn1oid_1.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-asn1oid postgresql-15-asn1oid_1.6-3.pgdg12+1_arm64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-15-asn1oid_1.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-asn1oid postgresql-15-asn1oid_1.6-3.pgdg13+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-15-asn1oid_1.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-asn1oid postgresql-15-asn1oid_1.6-3.pgdg13+1_arm64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-15-asn1oid_1.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-asn1oid postgresql-15-asn1oid_1.6-3.pgdg22.04+1_amd64.deb pgdg 1.6 13.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-15-asn1oid_1.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-asn1oid postgresql-15-asn1oid_1.6-3.pgdg22.04+1_arm64.deb pgdg 1.6 13.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-15-asn1oid_1.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-asn1oid postgresql-15-asn1oid_1.6-3.pgdg24.04+1_amd64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-15-asn1oid_1.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-asn1oid postgresql-15-asn1oid_1.6-3.pgdg24.04+1_arm64.deb pgdg 1.6 13.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-15-asn1oid_1.6-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 asn1oid_14 asn1oid_14-1.6-1PIGSTY.el8.x86_64.rpm pigsty 1.6 13.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/asn1oid_14-1.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 asn1oid_14 asn1oid_14-1.6-1PIGSTY.el8.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/asn1oid_14-1.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 asn1oid_14 asn1oid_14-1.6-1PIGSTY.el9.x86_64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/asn1oid_14-1.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 asn1oid_14 asn1oid_14-1.6-1PIGSTY.el9.aarch64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/asn1oid_14-1.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 asn1oid_14 asn1oid_14-1.6-1PIGSTY.el10.x86_64.rpm pigsty 1.6 13.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/asn1oid_14-1.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 asn1oid_14 asn1oid_14-1.6-1PIGSTY.el10.aarch64.rpm pigsty 1.6 13.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/asn1oid_14-1.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-asn1oid postgresql-14-asn1oid_1.6-3.pgdg12+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-14-asn1oid_1.6-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-asn1oid postgresql-14-asn1oid_1.6-3.pgdg12+1_arm64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-14-asn1oid_1.6-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-asn1oid postgresql-14-asn1oid_1.6-3.pgdg13+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-14-asn1oid_1.6-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-asn1oid postgresql-14-asn1oid_1.6-3.pgdg13+1_arm64.deb pgdg 1.6 12.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-14-asn1oid_1.6-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-asn1oid postgresql-14-asn1oid_1.6-3.pgdg22.04+1_amd64.deb pgdg 1.6 13.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-14-asn1oid_1.6-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-asn1oid postgresql-14-asn1oid_1.6-3.pgdg22.04+1_arm64.deb pgdg 1.6 13.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-14-asn1oid_1.6-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-asn1oid postgresql-14-asn1oid_1.6-3.pgdg24.04+1_amd64.deb pgdg 1.6 12.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-14-asn1oid_1.6-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-asn1oid postgresql-14-asn1oid_1.6-3.pgdg24.04+1_arm64.deb pgdg 1.6 13.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgsql-asn1oid/postgresql-14-asn1oid_1.6-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `asn1oid` 扩展的 RPM 包：

```bash
pig build pkg asn1oid         # 构建 RPM 包
```


## 安装

您可以直接安装 `asn1oid` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install asn1oid;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y asn1oid -v 18  # PG 18
pig ext install -y asn1oid -v 17  # PG 17
pig ext install -y asn1oid -v 16  # PG 16
pig ext install -y asn1oid -v 15  # PG 15
pig ext install -y asn1oid -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y asn1oid_18       # PG 18
dnf install -y asn1oid_17       # PG 17
dnf install -y asn1oid_16       # PG 16
dnf install -y asn1oid_15       # PG 15
dnf install -y asn1oid_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-asn1oid   # PG 18
apt install -y postgresql-17-asn1oid   # PG 17
apt install -y postgresql-16-asn1oid   # PG 16
apt install -y postgresql-15-asn1oid   # PG 15
apt install -y postgresql-14-asn1oid   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION asn1oid;
```

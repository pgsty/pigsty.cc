---
title: "ip4r"
linkTitle: "ip4r"
description: "PostgreSQL 的 IPv4/v6 和 IPv4/v6 范围索引类型"
weight: 3820
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/RhodiumToad/ip4r">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">RhodiumToad/ip4r</div>
    <div class="ext-card__desc">https://github.com/RhodiumToad/ip4r</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ip4r`**](/ext/e/ip4r) | `2.4.2` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3820  | [**`ip4r`**](/ext/e/ip4r) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_net`](/ext/e/pg_net) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`geoip`](/ext/e/geoip) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.2` | {{< pgvers "18,17,16,15,14" >}} | `ip4r` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.2` | {{< pgvers "18,17,16,15,14" >}} | `ip4r_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ip4r` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 2 | AVAIL PGDG 2.4.2 2 |
| el8.aarch64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 2 | AVAIL PGDG 2.4.2 2 |
| el9.x86_64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 2 | AVAIL PGDG 2.4.2 1 |
| el9.aarch64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 2 | AVAIL PGDG 2.4.2 2 |
| el10.x86_64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| el10.aarch64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| d12.x86_64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| d12.aarch64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| d13.x86_64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| d13.aarch64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| u22.x86_64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| u22.aarch64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| u24.x86_64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
| u24.aarch64 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 | AVAIL PGDG 2.4.2 1 |
@ el8.x86_64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel8.x86_64.rpm pgdg 2.4.2 78.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/ip4r_18-2.4.2-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel8.aarch64.rpm pgdg 2.4.2 73.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/ip4r_18-2.4.2-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel9.x86_64.rpm pgdg 2.4.2 76.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.2-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel9.aarch64.rpm pgdg 2.4.2 72.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.2-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 79.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 74.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/ip4r_18-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 180.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 173.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 180.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 175.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 181.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 176.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 176.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 171.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 ip4r_17 ip4r_17-2.4.2-2PGDG.rhel8.x86_64.rpm pgdg 2.4.2 77.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/ip4r_17-2.4.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 ip4r_17 ip4r_17-2.4.2-2PGDG.rhel8.aarch64.rpm pgdg 2.4.2 73.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/ip4r_17-2.4.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.2-2PGDG.rhel9.x86_64.rpm pgdg 2.4.2 76.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.2-2PGDG.rhel9.aarch64.rpm pgdg 2.4.2 72.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 79.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 ip4r_17 ip4r_17-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 74.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/ip4r_17-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 180.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 174.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 180.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 175.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 194.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 189.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 176.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 171.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 ip4r_16 ip4r_16-2.4.2-1PGDG.rhel8.x86_64.rpm pgdg 2.4.2 77.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/ip4r_16-2.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 ip4r_16 ip4r_16-2.4.2-1PGDG.rhel8.aarch64.rpm pgdg 2.4.2 73.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/ip4r_16-2.4.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.2-1PGDG.rhel9.x86_64.rpm pgdg 2.4.2 76.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.2-1PGDG.rhel9.aarch64.rpm pgdg 2.4.2 72.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 78.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 ip4r_16 ip4r_16-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 74.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/ip4r_16-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 180.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 174.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 180.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 175.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 194.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 189.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 176.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 171.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 ip4r_15 ip4r_15-2.4.2-1PGDG.rhel8.x86_64.rpm pgdg 2.4.2 77.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ip4r_15-2.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ip4r_15 ip4r_15-2.4.1-2.rhel8.x86_64.rpm pgdg 2.4.1 208.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/ip4r_15-2.4.1-2.rhel8.x86_64.rpm
@ el8.aarch64 15 ip4r_15 ip4r_15-2.4.2-1PGDG.rhel8.aarch64.rpm pgdg 2.4.2 72.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ip4r_15-2.4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ip4r_15 ip4r_15-2.4.1-2.rhel8.aarch64.rpm pgdg 2.4.1 203.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/ip4r_15-2.4.1-2.rhel8.aarch64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.2-1PGDG.rhel9.x86_64.rpm pgdg 2.4.2 75.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.1-2.rhel9.x86_64.rpm pgdg 2.4.1 209.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.1-2.rhel9.x86_64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.2-1PGDG.rhel9.aarch64.rpm pgdg 2.4.2 71.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.1-2.rhel9.aarch64.rpm pgdg 2.4.1 204.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.1-2.rhel9.aarch64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 78.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 ip4r_15 ip4r_15-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 73.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/ip4r_15-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 179.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 172.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 179.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 173.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 192.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 187.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 175.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 170.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 ip4r_14 ip4r_14-2.4.2-1PGDG.rhel8.x86_64.rpm pgdg 2.4.2 77.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ip4r_14-2.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ip4r_14 ip4r_14-2.4.1-2.rhel8.x86_64.rpm pgdg 2.4.1 210.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/ip4r_14-2.4.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 ip4r_14 ip4r_14-2.4.2-1PGDG.rhel8.aarch64.rpm pgdg 2.4.2 71.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ip4r_14-2.4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ip4r_14 ip4r_14-2.4.1-2.rhel8.aarch64.rpm pgdg 2.4.1 203.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/ip4r_14-2.4.1-2.rhel8.aarch64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.2-1PGDG.rhel9.x86_64.rpm pgdg 2.4.2 75.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.2-1PGDG.rhel9.aarch64.rpm pgdg 2.4.2 71.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.1-2.rhel9.aarch64.rpm pgdg 2.4.1 204.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.1-2.rhel9.aarch64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 78.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 ip4r_14 ip4r_14-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 73.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/ip4r_14-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 179.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 172.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 179.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 173.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 192.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 187.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 175.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 170.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `ip4r` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install ip4r;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y ip4r -v 18  # PG 18
pig ext install -y ip4r -v 17  # PG 17
pig ext install -y ip4r -v 16  # PG 16
pig ext install -y ip4r -v 15  # PG 15
pig ext install -y ip4r -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y ip4r_18       # PG 18
dnf install -y ip4r_17       # PG 17
dnf install -y ip4r_16       # PG 16
dnf install -y ip4r_15       # PG 15
dnf install -y ip4r_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-ip4r   # PG 18
apt install -y postgresql-17-ip4r   # PG 17
apt install -y postgresql-16-ip4r   # PG 16
apt install -y postgresql-15-ip4r   # PG 15
apt install -y postgresql-14-ip4r   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION ip4r;
```

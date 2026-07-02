---
title: "ip4r"
linkTitle: "ip4r"
description: "PostgreSQL 的 IPv4/v6 和 IPv4/v6 范围索引类型"
weight: 3770
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
| [**`ip4r`**](/ext/e/ip4r) | `2.4.3` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3770  | [**`ip4r`**](/ext/e/ip4r) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_net`](/ext/e/pg_net) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`geoip`](/ext/e/geoip) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.3` | {{< pgvers "18,17,16,15,14" >}} | `ip4r` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.3` | {{< pgvers "18,17,16,15,14" >}} | `ip4r_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.4.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ip4r` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 4 | AVAIL PGDG 2.4.3 4 |
| el8.aarch64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 4 | AVAIL PGDG 2.4.3 4 |
| el9.x86_64 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 9 | AVAIL PGDG 2.4.3 8 |
| el9.aarch64 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 9 | AVAIL PGDG 2.4.3 9 |
| el10.x86_64 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 8 | AVAIL PGDG 2.4.3 8 |
| el10.aarch64 | AVAIL PGDG 2.4.3 6 | AVAIL PGDG 2.4.3 6 | AVAIL PGDG 2.4.3 6 | AVAIL PGDG 2.4.3 6 | AVAIL PGDG 2.4.3 6 |
| d12.x86_64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| d12.aarch64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| d13.x86_64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| d13.aarch64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| u22.x86_64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| u22.aarch64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| u24.x86_64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| u24.aarch64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| u26.x86_64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
| u26.aarch64 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 | AVAIL PGDG 2.4.3 3 |
@ el8.x86_64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.3 78.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/ip4r_18-2.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel8.10.x86_64.rpm pgdg 2.4.2 78.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/ip4r_18-2.4.2-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel8.x86_64.rpm pgdg 2.4.2 78.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/ip4r_18-2.4.2-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.3 74.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/ip4r_18-2.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel8.10.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/ip4r_18-2.4.2-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel8.aarch64.rpm pgdg 2.4.2 73.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/ip4r_18-2.4.2-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.3 77.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.4.3 77.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 2.4.3 77.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 77.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.2-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel9.7.x86_64.rpm pgdg 2.4.2 77.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.2-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel9.6.x86_64.rpm pgdg 2.4.2 77.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.2-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.2-5PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 76.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.2-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel9.x86_64.rpm pgdg 2.4.2 76.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ip4r_18-2.4.2-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.3 73.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 2.4.3 73.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 2.4.3 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 73.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.2-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel9.7.aarch64.rpm pgdg 2.4.2 73.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.2-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel9.6.aarch64.rpm pgdg 2.4.2 73.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.2-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.2-5PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 72.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.2-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel9.aarch64.rpm pgdg 2.4.2 72.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ip4r_18-2.4.2-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.3 79.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.4.3 79.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 2.4.3 79.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.2-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel10.1.x86_64.rpm pgdg 2.4.2 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.2-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel10.0.x86_64.rpm pgdg 2.4.2 79.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.2-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.2-5PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.2-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 79.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ip4r_18-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 ip4r_18 ip4r_18-2.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.3 74.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ip4r_18-2.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 74.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ip4r_18-2.4.2-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel10.1.aarch64.rpm pgdg 2.4.2 74.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ip4r_18-2.4.2-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 ip4r_18 ip4r_18-2.4.2-6PGDG.rhel10.0.aarch64.rpm pgdg 2.4.2 74.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ip4r_18-2.4.2-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 ip4r_18 ip4r_18-2.4.2-5PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 74.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ip4r_18-2.4.2-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 ip4r_18 ip4r_18-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 74.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ip4r_18-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg12+1_amd64.deb pgdg 2.4.3 181.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg12+1_amd64.deb pgdg 2.4.2 180.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 180.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg12+1_arm64.deb pgdg 2.4.3 174.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg12+1_arm64.deb pgdg 2.4.2 174.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 173.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg13+1_amd64.deb pgdg 2.4.3 181.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg13+1_amd64.deb pgdg 2.4.2 181.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 180.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg13+1_arm64.deb pgdg 2.4.3 175.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg13+1_arm64.deb pgdg 2.4.2 175.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 175.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb pgdg 2.4.3 182.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb pgdg 2.4.2 181.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 181.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb pgdg 2.4.3 177.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb pgdg 2.4.2 177.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 176.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb pgdg 2.4.3 177.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb pgdg 2.4.2 177.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 176.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb pgdg 2.4.3 172.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb pgdg 2.4.2 172.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 171.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb pgdg 2.4.3 174.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb pgdg 2.4.2 174.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb pgdg 2.4.2 174.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb pgdg 2.4.3 170.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb pgdg 2.4.2 170.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-ip4r postgresql-18-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb pgdg 2.4.2 170.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-18-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.3 78.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ip4r_17-2.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel8.10.x86_64.rpm pgdg 2.4.2 78.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ip4r_17-2.4.2-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 ip4r_17 ip4r_17-2.4.2-2PGDG.rhel8.x86_64.rpm pgdg 2.4.2 77.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ip4r_17-2.4.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.3 74.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ip4r_17-2.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel8.10.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ip4r_17-2.4.2-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 ip4r_17 ip4r_17-2.4.2-2PGDG.rhel8.aarch64.rpm pgdg 2.4.2 73.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ip4r_17-2.4.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.3 77.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.4.3 77.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 2.4.3 77.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 77.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.2-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel9.7.x86_64.rpm pgdg 2.4.2 77.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.2-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel9.6.x86_64.rpm pgdg 2.4.2 77.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.2-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.2-5PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 76.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.2-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 ip4r_17 ip4r_17-2.4.2-2PGDG.rhel9.x86_64.rpm pgdg 2.4.2 76.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ip4r_17-2.4.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.3 73.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 2.4.3 73.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 2.4.3 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.2-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel9.7.aarch64.rpm pgdg 2.4.2 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.2-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel9.6.aarch64.rpm pgdg 2.4.2 73.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.2-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.2-5PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 72.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.2-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 ip4r_17 ip4r_17-2.4.2-2PGDG.rhel9.aarch64.rpm pgdg 2.4.2 72.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ip4r_17-2.4.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.3 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.4.3 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 2.4.3 79.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.2-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel10.1.x86_64.rpm pgdg 2.4.2 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.2-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel10.0.x86_64.rpm pgdg 2.4.2 79.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.2-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.2-5PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.2-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 ip4r_17 ip4r_17-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 79.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ip4r_17-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 ip4r_17 ip4r_17-2.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.3 74.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ip4r_17-2.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 74.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ip4r_17-2.4.2-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel10.1.aarch64.rpm pgdg 2.4.2 74.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ip4r_17-2.4.2-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 ip4r_17 ip4r_17-2.4.2-6PGDG.rhel10.0.aarch64.rpm pgdg 2.4.2 74.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ip4r_17-2.4.2-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 ip4r_17 ip4r_17-2.4.2-5PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 74.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ip4r_17-2.4.2-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 ip4r_17 ip4r_17-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 74.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ip4r_17-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg12+1_amd64.deb pgdg 2.4.3 180.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg12+1_amd64.deb pgdg 2.4.2 180.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 180.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg12+1_arm64.deb pgdg 2.4.3 174.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg12+1_arm64.deb pgdg 2.4.2 174.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 174.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg13+1_amd64.deb pgdg 2.4.3 181.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg13+1_amd64.deb pgdg 2.4.2 180.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 180.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg13+1_arm64.deb pgdg 2.4.3 175.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg13+1_arm64.deb pgdg 2.4.2 175.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 175.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb pgdg 2.4.3 194.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb pgdg 2.4.2 194.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 194.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb pgdg 2.4.3 189.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb pgdg 2.4.2 189.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 189.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb pgdg 2.4.3 177.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb pgdg 2.4.2 177.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 176.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb pgdg 2.4.3 172.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb pgdg 2.4.2 172.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 171.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb pgdg 2.4.3 174.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb pgdg 2.4.2 174.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb pgdg 2.4.2 174.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb pgdg 2.4.3 170.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb pgdg 2.4.2 170.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-ip4r postgresql-17-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb pgdg 2.4.2 170.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-17-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.3 78.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ip4r_16-2.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel8.10.x86_64.rpm pgdg 2.4.2 78.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ip4r_16-2.4.2-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 ip4r_16 ip4r_16-2.4.2-1PGDG.rhel8.x86_64.rpm pgdg 2.4.2 77.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ip4r_16-2.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.3 74.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ip4r_16-2.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel8.10.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ip4r_16-2.4.2-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 ip4r_16 ip4r_16-2.4.2-1PGDG.rhel8.aarch64.rpm pgdg 2.4.2 73.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ip4r_16-2.4.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.3 77.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.4.3 77.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 2.4.3 77.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 77.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.2-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel9.7.x86_64.rpm pgdg 2.4.2 77.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.2-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel9.6.x86_64.rpm pgdg 2.4.2 77.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.2-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.2-5PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 76.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.2-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 ip4r_16 ip4r_16-2.4.2-1PGDG.rhel9.x86_64.rpm pgdg 2.4.2 76.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ip4r_16-2.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.3 73.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 2.4.3 73.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 2.4.3 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.2-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel9.7.aarch64.rpm pgdg 2.4.2 73.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.2-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel9.6.aarch64.rpm pgdg 2.4.2 73.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.2-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.2-5PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 72.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.2-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 ip4r_16 ip4r_16-2.4.2-1PGDG.rhel9.aarch64.rpm pgdg 2.4.2 72.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ip4r_16-2.4.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.3 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.4.3 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 2.4.3 79.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.2-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel10.1.x86_64.rpm pgdg 2.4.2 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.2-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel10.0.x86_64.rpm pgdg 2.4.2 79.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.2-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.2-5PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.2-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 ip4r_16 ip4r_16-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ip4r_16-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 ip4r_16 ip4r_16-2.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.3 74.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ip4r_16-2.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 74.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ip4r_16-2.4.2-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel10.1.aarch64.rpm pgdg 2.4.2 74.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ip4r_16-2.4.2-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 ip4r_16 ip4r_16-2.4.2-6PGDG.rhel10.0.aarch64.rpm pgdg 2.4.2 74.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ip4r_16-2.4.2-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 ip4r_16 ip4r_16-2.4.2-5PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 74.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ip4r_16-2.4.2-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 ip4r_16 ip4r_16-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 74.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ip4r_16-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg12+1_amd64.deb pgdg 2.4.3 180.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg12+1_amd64.deb pgdg 2.4.2 180.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 180.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg12+1_arm64.deb pgdg 2.4.3 174.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg12+1_arm64.deb pgdg 2.4.2 174.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 174.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg13+1_amd64.deb pgdg 2.4.3 180.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg13+1_amd64.deb pgdg 2.4.2 181.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 180.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg13+1_arm64.deb pgdg 2.4.3 175.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg13+1_arm64.deb pgdg 2.4.2 175.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 175.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb pgdg 2.4.3 194.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb pgdg 2.4.2 194.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 194.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb pgdg 2.4.3 189.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb pgdg 2.4.2 189.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 189.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb pgdg 2.4.3 177.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb pgdg 2.4.2 177.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 176.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb pgdg 2.4.3 172.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb pgdg 2.4.2 172.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 171.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb pgdg 2.4.3 174.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb pgdg 2.4.2 174.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb pgdg 2.4.2 175.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb pgdg 2.4.3 170.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb pgdg 2.4.2 169.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-ip4r postgresql-16-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb pgdg 2.4.2 170.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-16-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.3 78.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ip4r_15-2.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel8.10.x86_64.rpm pgdg 2.4.2 77.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ip4r_15-2.4.2-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 ip4r_15 ip4r_15-2.4.2-1PGDG.rhel8.x86_64.rpm pgdg 2.4.2 77.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ip4r_15-2.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ip4r_15 ip4r_15-2.4.1-2.rhel8.x86_64.rpm pgdg 2.4.1 208.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ip4r_15-2.4.1-2.rhel8.x86_64.rpm
@ el8.aarch64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.3 73.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ip4r_15-2.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel8.10.aarch64.rpm pgdg 2.4.2 72.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ip4r_15-2.4.2-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 ip4r_15 ip4r_15-2.4.2-1PGDG.rhel8.aarch64.rpm pgdg 2.4.2 72.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ip4r_15-2.4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ip4r_15 ip4r_15-2.4.1-2.rhel8.aarch64.rpm pgdg 2.4.1 203.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ip4r_15-2.4.1-2.rhel8.aarch64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.3 76.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.4.3 76.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 2.4.3 76.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 76.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.2-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel9.7.x86_64.rpm pgdg 2.4.2 76.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.2-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel9.6.x86_64.rpm pgdg 2.4.2 76.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.2-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.2-5PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 75.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.2-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.2-1PGDG.rhel9.x86_64.rpm pgdg 2.4.2 75.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ip4r_15 ip4r_15-2.4.1-2.rhel9.x86_64.rpm pgdg 2.4.1 209.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ip4r_15-2.4.1-2.rhel9.x86_64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.3 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 2.4.3 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 2.4.3 72.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 71.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.2-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel9.7.aarch64.rpm pgdg 2.4.2 71.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.2-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel9.6.aarch64.rpm pgdg 2.4.2 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.2-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.2-5PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 71.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.2-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.2-1PGDG.rhel9.aarch64.rpm pgdg 2.4.2 71.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ip4r_15 ip4r_15-2.4.1-2.rhel9.aarch64.rpm pgdg 2.4.1 204.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ip4r_15-2.4.1-2.rhel9.aarch64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.3 78.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.4.3 78.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 2.4.3 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.2-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel10.1.x86_64.rpm pgdg 2.4.2 78.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.2-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel10.0.x86_64.rpm pgdg 2.4.2 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.2-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.2-5PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.2-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 ip4r_15 ip4r_15-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 78.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ip4r_15-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 ip4r_15 ip4r_15-2.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.3 74.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ip4r_15-2.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 73.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ip4r_15-2.4.2-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel10.1.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ip4r_15-2.4.2-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 ip4r_15 ip4r_15-2.4.2-6PGDG.rhel10.0.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ip4r_15-2.4.2-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 ip4r_15 ip4r_15-2.4.2-5PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 73.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ip4r_15-2.4.2-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 ip4r_15 ip4r_15-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ip4r_15-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg12+1_amd64.deb pgdg 2.4.3 179.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg12+1_amd64.deb pgdg 2.4.2 179.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 179.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg12+1_arm64.deb pgdg 2.4.3 173.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg12+1_arm64.deb pgdg 2.4.2 172.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 172.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg13+1_amd64.deb pgdg 2.4.3 179.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg13+1_amd64.deb pgdg 2.4.2 179.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 179.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg13+1_arm64.deb pgdg 2.4.3 174.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg13+1_arm64.deb pgdg 2.4.2 173.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 173.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb pgdg 2.4.3 192.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb pgdg 2.4.2 192.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 192.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb pgdg 2.4.3 187.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb pgdg 2.4.2 187.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 187.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb pgdg 2.4.3 175.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb pgdg 2.4.2 175.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 175.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb pgdg 2.4.3 170.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb pgdg 2.4.2 170.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 170.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb pgdg 2.4.3 172.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb pgdg 2.4.2 173.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb pgdg 2.4.2 172.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb pgdg 2.4.3 169.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb pgdg 2.4.2 168.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-ip4r postgresql-15-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb pgdg 2.4.2 169.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-15-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.3 78.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ip4r_14-2.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel8.10.x86_64.rpm pgdg 2.4.2 77.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ip4r_14-2.4.2-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 ip4r_14 ip4r_14-2.4.2-1PGDG.rhel8.x86_64.rpm pgdg 2.4.2 77.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ip4r_14-2.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ip4r_14 ip4r_14-2.4.1-2.rhel8.x86_64.rpm pgdg 2.4.1 210.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ip4r_14-2.4.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.3 72.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ip4r_14-2.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel8.10.aarch64.rpm pgdg 2.4.2 72.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ip4r_14-2.4.2-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 ip4r_14 ip4r_14-2.4.2-1PGDG.rhel8.aarch64.rpm pgdg 2.4.2 71.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ip4r_14-2.4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ip4r_14 ip4r_14-2.4.1-2.rhel8.aarch64.rpm pgdg 2.4.1 203.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ip4r_14-2.4.1-2.rhel8.aarch64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.3 76.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 2.4.3 76.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 2.4.3 76.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 76.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.2-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel9.7.x86_64.rpm pgdg 2.4.2 76.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.2-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel9.6.x86_64.rpm pgdg 2.4.2 76.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.2-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.2-5PGDG.rhel9.8.x86_64.rpm pgdg 2.4.2 75.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.2-5PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 ip4r_14 ip4r_14-2.4.2-1PGDG.rhel9.x86_64.rpm pgdg 2.4.2 75.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ip4r_14-2.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.3 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 2.4.3 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 2.4.3 72.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 72.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.2-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel9.7.aarch64.rpm pgdg 2.4.2 71.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.2-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel9.6.aarch64.rpm pgdg 2.4.2 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.2-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.2-5PGDG.rhel9.8.aarch64.rpm pgdg 2.4.2 71.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.2-5PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.2-1PGDG.rhel9.aarch64.rpm pgdg 2.4.2 71.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ip4r_14 ip4r_14-2.4.1-2.rhel9.aarch64.rpm pgdg 2.4.1 204.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ip4r_14-2.4.1-2.rhel9.aarch64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.3 78.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 2.4.3 78.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 2.4.3 79.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.2-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel10.1.x86_64.rpm pgdg 2.4.2 78.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.2-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel10.0.x86_64.rpm pgdg 2.4.2 79.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.2-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.2-5PGDG.rhel10.2.x86_64.rpm pgdg 2.4.2 78.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.2-5PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 ip4r_14 ip4r_14-2.4.2-3PGDG.rhel10.x86_64.rpm pgdg 2.4.2 78.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ip4r_14-2.4.2-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 ip4r_14 ip4r_14-2.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.3 74.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ip4r_14-2.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ip4r_14-2.4.2-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel10.1.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ip4r_14-2.4.2-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 ip4r_14 ip4r_14-2.4.2-6PGDG.rhel10.0.aarch64.rpm pgdg 2.4.2 73.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ip4r_14-2.4.2-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 ip4r_14 ip4r_14-2.4.2-5PGDG.rhel10.2.aarch64.rpm pgdg 2.4.2 73.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ip4r_14-2.4.2-5PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 ip4r_14 ip4r_14-2.4.2-3PGDG.rhel10.aarch64.rpm pgdg 2.4.2 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ip4r_14-2.4.2-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg12+1_amd64.deb pgdg 2.4.3 179.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg12+1_amd64.deb pgdg 2.4.2 179.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg12+1_amd64.deb pgdg 2.4.2 179.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg12+1_arm64.deb pgdg 2.4.3 173.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg12+1_arm64.deb pgdg 2.4.2 173.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg12+1_arm64.deb pgdg 2.4.2 172.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg13+1_amd64.deb pgdg 2.4.3 179.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg13+1_amd64.deb pgdg 2.4.2 179.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg13+1_amd64.deb pgdg 2.4.2 179.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg13+1_arm64.deb pgdg 2.4.3 174.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg13+1_arm64.deb pgdg 2.4.2 174.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg13+1_arm64.deb pgdg 2.4.2 173.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb pgdg 2.4.3 192.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb pgdg 2.4.2 192.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb pgdg 2.4.2 192.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb pgdg 2.4.3 187.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb pgdg 2.4.2 187.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb pgdg 2.4.2 187.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb pgdg 2.4.3 175.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb pgdg 2.4.2 175.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb pgdg 2.4.2 175.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb pgdg 2.4.3 170.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb pgdg 2.4.2 170.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb pgdg 2.4.2 170.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb pgdg 2.4.3 173.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb pgdg 2.4.2 172.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb pgdg 2.4.2 173.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb pgdg 2.4.3 169.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb pgdg 2.4.2 168.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-ip4r postgresql-14-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb pgdg 2.4.2 168.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/i/ip4r/postgresql-14-ip4r_2.4.2-4.pgdg26.04+1_arm64.deb
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




## 用法

> [ip4r: 支持 GiST 索引的 IPv4/IPv6 地址与范围类型](https://github.com/RhodiumToad/ip4r)

`ip4r` 扩展提供了专用的 IPv4/IPv6 地址和范围数据类型，具有优秀的包含查询索引支持。

```sql
CREATE EXTENSION ip4r;
```

### 数据类型

| 类型 | 描述 |
|------|------|
| `ip4` | 单个 IPv4 地址（32 位） |
| `ip6` | 单个 IPv6 地址（双 64 位） |
| `ip4r` | IPv4 地址范围 |
| `ip6r` | IPv6 地址范围 |
| `ipaddress` | 混合 IPv4/IPv6 地址 |
| `iprange` | 混合 IPv4/IPv6 范围 |

### 地址输入

```sql
SELECT '192.168.1.1'::ip4;
SELECT '2001:db8::1'::ip6;
SELECT '10.0.0.0/24'::ip4r;                   -- CIDR 表示法
SELECT '192.168.1.100-192.168.1.200'::ip4r;   -- 显式范围
```

### 地址运算符

- **比较**：`=`、`<>`、`<`、`>`、`<=`、`>=`
- **算术**：`+`、`-`（与整数运算）
- **位运算**：`&`（AND）、`|`（OR）、`#`（XOR）、`~`（NOT）

### 地址函数

```sql
SELECT family('192.168.1.1'::ipaddress);       -- 4
SELECT ip4_netmask(24);                         -- 255.255.255.0
```

### 范围运算符

| 运算符 | 描述 |
|--------|------|
| `>>=` | 包含或等于 |
| `>>` | 严格包含 |
| `<<=` | 被包含或等于 |
| `<<` | 严格被包含 |
| `&&` | 重叠 |

### 范围函数

```sql
SELECT lower('10.0.0.0/24'::ip4r);           -- 10.0.0.0
SELECT upper('10.0.0.0/24'::ip4r);           -- 10.0.0.255
SELECT is_cidr('10.0.0.0/24'::ip4r);         -- true
SELECT cidr_split('10.0.0.0-10.0.0.5'::ip4r); -- 分解为 CIDR
SELECT @ '10.0.0.0/24'::ip4r;                 -- 近似大小
```

### 索引

```sql
-- 用于包含查询的 GiST 索引
CREATE INDEX idx ON ipranges USING gist (range);

-- 查找包含特定 IP 的范围
SELECT * FROM ipranges WHERE range >>= '10.0.1.15'::ip4;

-- 查找最精确匹配
SELECT * FROM ipranges
WHERE range >>= '10.0.1.15'::ip4
ORDER BY @ range LIMIT 1;
```

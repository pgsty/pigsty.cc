---
title: "timestamp9"
linkTitle: "timestamp9"
description: "纳秒分辨率时间戳"
weight: 3890
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/optiver/timestamp9">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">optiver/timestamp9</div>
    <div class="ext-card__desc">https://github.com/optiver/timestamp9</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/timestamp9-timestamp9-1.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">timestamp9-timestamp9-1.4.0.tar.gz</div>
    <div class="ext-card__desc">timestamp9-timestamp9-1.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`timestamp9`**](/ext/e/timestamp9) | `1.4.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3890  | [**`timestamp9`**](/ext/e/timestamp9) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `timestamp9` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `timestamp9_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-timestamp9` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| el8.aarch64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| el9.x86_64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| el9.aarch64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| el10.x86_64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 |
| el10.aarch64 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 | AVAIL PGDG 1.4.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
@ el8.x86_64 18 timestamp9_18 timestamp9_18-1.4.0-3PGDG.rhel8.x86_64.rpm pgdg 1.4.0 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/timestamp9_18-1.4.0-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 timestamp9_18 timestamp9_18-1.4.0-3PGDG.rhel8.aarch64.rpm pgdg 1.4.0 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/timestamp9_18-1.4.0-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 timestamp9_18 timestamp9_18-1.4.0-3PGDG.rhel9.x86_64.rpm pgdg 1.4.0 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/timestamp9_18-1.4.0-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 timestamp9_18 timestamp9_18-1.4.0-3PGDG.rhel9.aarch64.rpm pgdg 1.4.0 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/timestamp9_18-1.4.0-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 timestamp9_18 timestamp9_18-1.4.0-3PGDG.rhel10.x86_64.rpm pgdg 1.4.0 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/timestamp9_18-1.4.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 timestamp9_18 timestamp9_18-1.4.0-3PGDG.rhel10.aarch64.rpm pgdg 1.4.0 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/timestamp9_18-1.4.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-timestamp9 postgresql-18-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb pigsty 1.4.0 8.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-18-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-timestamp9 postgresql-18-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb pigsty 1.4.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-18-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-timestamp9 postgresql-18-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb pigsty 1.4.0 8.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-18-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-timestamp9 postgresql-18-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb pigsty 1.4.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-18-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-timestamp9 postgresql-18-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb pigsty 1.4.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-18-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-timestamp9 postgresql-18-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb pigsty 1.4.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-18-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-timestamp9 postgresql-18-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb pigsty 1.4.0 9.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-18-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-timestamp9 postgresql-18-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb pigsty 1.4.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-18-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 timestamp9_17 timestamp9_17-1.4.0-2PGDG.rhel8.x86_64.rpm pgdg 1.4.0 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/timestamp9_17-1.4.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 timestamp9_17 timestamp9_17-1.4.0-2PGDG.rhel8.aarch64.rpm pgdg 1.4.0 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/timestamp9_17-1.4.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 timestamp9_17 timestamp9_17-1.4.0-2PGDG.rhel9.x86_64.rpm pgdg 1.4.0 17.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/timestamp9_17-1.4.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 timestamp9_17 timestamp9_17-1.4.0-2PGDG.rhel9.aarch64.rpm pgdg 1.4.0 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/timestamp9_17-1.4.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 timestamp9_17 timestamp9_17-1.4.0-3PGDG.rhel10.x86_64.rpm pgdg 1.4.0 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/timestamp9_17-1.4.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 timestamp9_17 timestamp9_17-1.4.0-3PGDG.rhel10.aarch64.rpm pgdg 1.4.0 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/timestamp9_17-1.4.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-timestamp9 postgresql-17-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb pigsty 1.4.0 8.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-17-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-timestamp9 postgresql-17-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb pigsty 1.4.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-17-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-timestamp9 postgresql-17-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb pigsty 1.4.0 8.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-17-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-timestamp9 postgresql-17-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb pigsty 1.4.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-17-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-timestamp9 postgresql-17-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb pigsty 1.4.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-17-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-timestamp9 postgresql-17-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb pigsty 1.4.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-17-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-timestamp9 postgresql-17-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb pigsty 1.4.0 9.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-17-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-timestamp9 postgresql-17-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb pigsty 1.4.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-17-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 timestamp9_16 timestamp9_16-1.4.0-2PGDG.rhel8.x86_64.rpm pgdg 1.4.0 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/timestamp9_16-1.4.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 timestamp9_16 timestamp9_16-1.4.0-2PGDG.rhel8.aarch64.rpm pgdg 1.4.0 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/timestamp9_16-1.4.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 timestamp9_16 timestamp9_16-1.4.0-2PGDG.rhel9.x86_64.rpm pgdg 1.4.0 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/timestamp9_16-1.4.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 timestamp9_16 timestamp9_16-1.4.0-2PGDG.rhel9.aarch64.rpm pgdg 1.4.0 17.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/timestamp9_16-1.4.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 timestamp9_16 timestamp9_16-1.4.0-3PGDG.rhel10.x86_64.rpm pgdg 1.4.0 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/timestamp9_16-1.4.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 timestamp9_16 timestamp9_16-1.4.0-3PGDG.rhel10.aarch64.rpm pgdg 1.4.0 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/timestamp9_16-1.4.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-timestamp9 postgresql-16-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb pigsty 1.4.0 8.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-16-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-timestamp9 postgresql-16-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb pigsty 1.4.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-16-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-timestamp9 postgresql-16-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb pigsty 1.4.0 8.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-16-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-timestamp9 postgresql-16-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb pigsty 1.4.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-16-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-timestamp9 postgresql-16-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb pigsty 1.4.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-16-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-timestamp9 postgresql-16-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb pigsty 1.4.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-16-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-timestamp9 postgresql-16-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb pigsty 1.4.0 9.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-16-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-timestamp9 postgresql-16-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb pigsty 1.4.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-16-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 timestamp9_15 timestamp9_15-1.3.0-1.rhel8.x86_64.rpm pgdg 1.3.0 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/timestamp9_15-1.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 timestamp9_15 timestamp9_15-1.1.0-1.rhel8.x86_64.rpm pgdg 1.1.0 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/timestamp9_15-1.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 timestamp9_15 timestamp9_15-1.3.0-1.rhel8.aarch64.rpm pgdg 1.3.0 17.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/timestamp9_15-1.3.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 timestamp9_15 timestamp9_15-1.1.0-1.rhel8.aarch64.rpm pgdg 1.1.0 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/timestamp9_15-1.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 timestamp9_15 timestamp9_15-1.3.0-1.rhel9.x86_64.rpm pgdg 1.3.0 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/timestamp9_15-1.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 timestamp9_15 timestamp9_15-1.1.0-1.rhel9.x86_64.rpm pgdg 1.1.0 16.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/timestamp9_15-1.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 timestamp9_15 timestamp9_15-1.3.0-1.rhel9.aarch64.rpm pgdg 1.3.0 17.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/timestamp9_15-1.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 timestamp9_15 timestamp9_15-1.1.0-1.rhel9.aarch64.rpm pgdg 1.1.0 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/timestamp9_15-1.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 timestamp9_15 timestamp9_15-1.4.0-3PGDG.rhel10.x86_64.rpm pgdg 1.4.0 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/timestamp9_15-1.4.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 timestamp9_15 timestamp9_15-1.4.0-3PGDG.rhel10.aarch64.rpm pgdg 1.4.0 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/timestamp9_15-1.4.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-timestamp9 postgresql-15-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb pigsty 1.4.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-15-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-timestamp9 postgresql-15-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb pigsty 1.4.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-15-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-timestamp9 postgresql-15-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb pigsty 1.4.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-15-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-timestamp9 postgresql-15-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb pigsty 1.4.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-15-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-timestamp9 postgresql-15-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb pigsty 1.4.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-15-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-timestamp9 postgresql-15-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb pigsty 1.4.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-15-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-timestamp9 postgresql-15-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb pigsty 1.4.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-15-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-timestamp9 postgresql-15-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb pigsty 1.4.0 9.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-15-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 timestamp9_14 timestamp9_14-1.3.0-1.rhel8.x86_64.rpm pgdg 1.3.0 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/timestamp9_14-1.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 timestamp9_14 timestamp9_14-1.1.0-1.rhel8.x86_64.rpm pgdg 1.1.0 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/timestamp9_14-1.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 timestamp9_14 timestamp9_14-1.3.0-1.rhel8.aarch64.rpm pgdg 1.3.0 17.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/timestamp9_14-1.3.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 timestamp9_14 timestamp9_14-1.1.0-1.rhel8.aarch64.rpm pgdg 1.1.0 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/timestamp9_14-1.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 timestamp9_14 timestamp9_14-1.3.0-1.rhel9.x86_64.rpm pgdg 1.3.0 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/timestamp9_14-1.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 timestamp9_14 timestamp9_14-1.1.0-1.rhel9.x86_64.rpm pgdg 1.1.0 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/timestamp9_14-1.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 timestamp9_14 timestamp9_14-1.3.0-1.rhel9.aarch64.rpm pgdg 1.3.0 16.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/timestamp9_14-1.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 timestamp9_14 timestamp9_14-1.1.0-1.rhel9.aarch64.rpm pgdg 1.1.0 16.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/timestamp9_14-1.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 timestamp9_14 timestamp9_14-1.4.0-3PGDG.rhel10.x86_64.rpm pgdg 1.4.0 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/timestamp9_14-1.4.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 timestamp9_14 timestamp9_14-1.4.0-3PGDG.rhel10.aarch64.rpm pgdg 1.4.0 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/timestamp9_14-1.4.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-timestamp9 postgresql-14-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb pigsty 1.4.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-14-timestamp9_1.4.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-timestamp9 postgresql-14-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb pigsty 1.4.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/t/timestamp9/postgresql-14-timestamp9_1.4.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-timestamp9 postgresql-14-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb pigsty 1.4.0 8.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-14-timestamp9_1.4.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-timestamp9 postgresql-14-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb pigsty 1.4.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/t/timestamp9/postgresql-14-timestamp9_1.4.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-timestamp9 postgresql-14-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb pigsty 1.4.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-14-timestamp9_1.4.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-timestamp9 postgresql-14-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb pigsty 1.4.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/t/timestamp9/postgresql-14-timestamp9_1.4.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-timestamp9 postgresql-14-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb pigsty 1.4.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-14-timestamp9_1.4.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-timestamp9 postgresql-14-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb pigsty 1.4.0 9.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/t/timestamp9/postgresql-14-timestamp9_1.4.0-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `timestamp9` 扩展的 DEB 包：

```bash
pig build pkg timestamp9         # 构建 DEB 包
```


## 安装

您可以直接安装 `timestamp9` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install timestamp9;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y timestamp9 -v 18  # PG 18
pig ext install -y timestamp9 -v 17  # PG 17
pig ext install -y timestamp9 -v 16  # PG 16
pig ext install -y timestamp9 -v 15  # PG 15
pig ext install -y timestamp9 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y timestamp9_18       # PG 18
dnf install -y timestamp9_17       # PG 17
dnf install -y timestamp9_16       # PG 16
dnf install -y timestamp9_15       # PG 15
dnf install -y timestamp9_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-timestamp9   # PG 18
apt install -y postgresql-17-timestamp9   # PG 17
apt install -y postgresql-16-timestamp9   # PG 16
apt install -y postgresql-15-timestamp9   # PG 15
apt install -y postgresql-14-timestamp9   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION timestamp9;
```



## 用法

> [timestamp9: PostgreSQL 的纳秒精度时间戳类型](https://github.com/optiver/timestamp9)

`timestamp9` 扩展提供了纳秒精度的时间戳类型，以 64 位整数存储（自 UNIX 纪元以来的纳秒数）。

```sql
CREATE EXTENSION timestamp9;
```

### 数据类型

`timestamp9` 类型支持从 1970-01-01 到 2262-04-12 的时间戳，精度为纳秒。

### 输入格式

```sql
-- 标准 PostgreSQL 格式
SELECT '2019-09-19 08:30:05'::timestamp9;

-- 带时区的完整纳秒精度
SELECT '2019-09-19 08:30:05.123456789 +0200'::timestamp9;

-- 从 bigint 转换（自纪元以来的纳秒数）
SELECT 1568878205123456789::bigint::timestamp9;
```

### 类型转换

- 与 `timestamp` 和 `timestamptz` 之间的相互转换
- 与 `date` 之间的相互转换

转换过程中保留纳秒精度。

### 运算符

```sql
-- 比较
SELECT '2019-09-19'::timestamp9 > '2019-09-18'::timestamp9;  -- true

-- 与 interval 的算术运算
SELECT '2019-09-19 23:00:00.123456789'::timestamp9 + interval '1 day';

-- 减法
SELECT '2019-09-20'::timestamp9 - '2019-09-19'::timestamp9;
```

### 函数

```sql
SELECT greatest('2019-09-19'::timestamp9, '2019-09-20'::timestamp9);
```

### 索引支持

支持 Btree 和 Hash 索引。

---
title: "pgmp"
linkTitle: "pgmp"
description: "多精度算术扩展"
weight: 3700
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dvarrazzo/pgmp/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dvarrazzo/pgmp</div>
    <div class="ext-card__desc">https://github.com/dvarrazzo/pgmp/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmp-1.0.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmp-1.0.6.tar.gz</div>
    <div class="ext-card__desc">pgmp-1.0.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmp`**](/ext/e/pgmp) | `1.0.6` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3700  | [**`pgmp`**](/ext/e/pgmp) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`numeral`](/ext/e/numeral) [`unit`](/ext/e/unit) [`pguecc`](/ext/e/pguecc) [`pgcrypto`](/ext/e/pgcrypto) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PIGSTY RPM and DEB packages are aligned at 1.0.6 for PostgreSQL 14 through 18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.6` | {{< pgvers "18,17,16,15,14" >}} | `pgmp` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.6` | {{< pgvers "18,17,16,15,14" >}} | `pgmp_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmp` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 |
| el8.aarch64 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 |
| el9.x86_64 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 3 | AVAIL PIGSTY 1.0.6 2 |
| el9.aarch64 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 |
| el10.x86_64 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 |
| el10.aarch64 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 | AVAIL PIGSTY 1.0.6 4 |
| d12.x86_64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| d12.aarch64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| d13.x86_64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| d13.aarch64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| u22.x86_64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| u22.aarch64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| u24.x86_64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| u24.aarch64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| u26.x86_64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
| u26.aarch64 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 | AVAIL PGDG 1.0.6 4 |
@ el8.x86_64 18 pgmp_18 pgmp_18-1.0.6-1PIGSTY.el8.x86_64.rpm pigsty 1.0.6 48.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmp_18-1.0.6-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pgmp_18 pgmp_18-1.0.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.6 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgmp_18-1.0.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel8.x86_64.rpm pgdg 1.0.5 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgmp_18-1.0.5-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgmp_18 pgmp_18-1.0.6-1PIGSTY.el8.aarch64.rpm pigsty 1.0.6 45.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmp_18-1.0.6-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pgmp_18 pgmp_18-1.0.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgmp_18-1.0.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel8.aarch64.rpm pgdg 1.0.5 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgmp_18-1.0.5-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgmp_18 pgmp_18-1.0.6-1PIGSTY.el9.x86_64.rpm pigsty 1.0.6 45.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmp_18-1.0.6-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pgmp_18 pgmp_18-1.0.5-6PGDG.rhel9.8.x86_64.rpm pgdg 1.0.5 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgmp_18-1.0.5-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel9.x86_64.rpm pgdg 1.0.5 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgmp_18-1.0.5-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgmp_18 pgmp_18-1.0.6-1PIGSTY.el9.aarch64.rpm pigsty 1.0.6 43.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmp_18-1.0.6-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pgmp_18 pgmp_18-1.0.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.6 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmp_18-1.0.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgmp_18 pgmp_18-1.0.5-6PGDG.rhel9.8.aarch64.rpm pgdg 1.0.5 41.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmp_18-1.0.5-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel9.aarch64.rpm pgdg 1.0.5 41.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmp_18-1.0.5-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgmp_18 pgmp_18-1.0.6-1PIGSTY.el10.x86_64.rpm pigsty 1.0.6 46.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmp_18-1.0.6-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pgmp_18 pgmp_18-1.0.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.6 44.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmp_18-1.0.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgmp_18 pgmp_18-1.0.5-6PGDG.rhel10.2.x86_64.rpm pgdg 1.0.5 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmp_18-1.0.5-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmp_18-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgmp_18 pgmp_18-1.0.6-1PIGSTY.el10.aarch64.rpm pigsty 1.0.6 44.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmp_18-1.0.6-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pgmp_18 pgmp_18-1.0.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0.6 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmp_18-1.0.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgmp_18 pgmp_18-1.0.5-6PGDG.rhel10.2.aarch64.rpm pgdg 1.0.5 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmp_18-1.0.5-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmp_18-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg12+1_amd64.deb pgdg 1.0.6 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb pigsty 1.0.6 83.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg12+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg12+1_arm64.deb pgdg 1.0.6 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb pigsty 1.0.6 82.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg12+1_arm64.deb pgdg 1.0.5 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg13+1_amd64.deb pgdg 1.0.6 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb pigsty 1.0.6 83.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg13+1_amd64.deb pgdg 1.0.5 100.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg13+1_arm64.deb pgdg 1.0.6 100.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb pigsty 1.0.6 82.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg13+1_arm64.deb pgdg 1.0.5 99.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb pgdg 1.0.6 104.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb pigsty 1.0.6 93.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb pgdg 1.0.5 102.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 102.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb pgdg 1.0.6 102.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb pigsty 1.0.6 91.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb pgdg 1.0.5 100.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 100.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb pgdg 1.0.6 101.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~noble_amd64.deb pigsty 1.0.6 89.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb pgdg 1.0.6 100.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~noble_arm64.deb pigsty 1.0.6 88.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb pgdg 1.0.6 101.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb pigsty 1.0.6 90.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb pgdg 1.0.5 101.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb pgdg 1.0.5 101.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb pgdg 1.0.6 99.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb pigsty 1.0.6 88.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-18-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pgmp_17 pgmp_17-1.0.6-1PIGSTY.el8.x86_64.rpm pigsty 1.0.6 48.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmp_17-1.0.6-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgmp_17 pgmp_17-1.0.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.6 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgmp_17-1.0.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgmp_17 pgmp_17-1.0.5-3PGDG.rhel8.x86_64.rpm pgdg 1.0.5 41.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgmp_17-1.0.5-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgmp_17 pgmp_17-1.0.6-1PIGSTY.el8.aarch64.rpm pigsty 1.0.6 45.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmp_17-1.0.6-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgmp_17 pgmp_17-1.0.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgmp_17-1.0.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgmp_17 pgmp_17-1.0.5-3PGDG.rhel8.aarch64.rpm pgdg 1.0.5 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgmp_17-1.0.5-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgmp_17 pgmp_17-1.0.6-1PIGSTY.el9.x86_64.rpm pigsty 1.0.6 45.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmp_17-1.0.6-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgmp_17 pgmp_17-1.0.5-6PGDG.rhel9.8.x86_64.rpm pgdg 1.0.5 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgmp_17-1.0.5-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgmp_17 pgmp_17-1.0.5-3PGDG.rhel9.x86_64.rpm pgdg 1.0.5 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgmp_17-1.0.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgmp_17 pgmp_17-1.0.6-1PIGSTY.el9.aarch64.rpm pigsty 1.0.6 43.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmp_17-1.0.6-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgmp_17 pgmp_17-1.0.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.6 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmp_17-1.0.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgmp_17 pgmp_17-1.0.5-6PGDG.rhel9.8.aarch64.rpm pgdg 1.0.5 41.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmp_17-1.0.5-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgmp_17 pgmp_17-1.0.5-3PGDG.rhel9.aarch64.rpm pgdg 1.0.5 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmp_17-1.0.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgmp_17 pgmp_17-1.0.6-1PIGSTY.el10.x86_64.rpm pigsty 1.0.6 46.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmp_17-1.0.6-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pgmp_17 pgmp_17-1.0.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.6 45.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmp_17-1.0.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgmp_17 pgmp_17-1.0.5-6PGDG.rhel10.2.x86_64.rpm pgdg 1.0.5 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmp_17-1.0.5-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgmp_17 pgmp_17-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmp_17-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgmp_17 pgmp_17-1.0.6-1PIGSTY.el10.aarch64.rpm pigsty 1.0.6 44.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmp_17-1.0.6-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pgmp_17 pgmp_17-1.0.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0.6 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmp_17-1.0.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgmp_17 pgmp_17-1.0.5-6PGDG.rhel10.2.aarch64.rpm pgdg 1.0.5 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmp_17-1.0.5-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgmp_17 pgmp_17-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmp_17-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg12+1_amd64.deb pgdg 1.0.6 101.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb pigsty 1.0.6 83.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg12+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg12+1_arm64.deb pgdg 1.0.6 99.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb pigsty 1.0.6 82.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg12+1_arm64.deb pgdg 1.0.5 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg13+1_amd64.deb pgdg 1.0.6 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb pigsty 1.0.6 83.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg13+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg13+1_arm64.deb pgdg 1.0.6 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb pigsty 1.0.6 82.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg13+1_arm64.deb pgdg 1.0.5 99.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb pgdg 1.0.6 111.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb pigsty 1.0.6 100.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb pgdg 1.0.5 109.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 109.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb pgdg 1.0.6 109.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb pigsty 1.0.6 98.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb pgdg 1.0.6 101.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~noble_amd64.deb pigsty 1.0.6 89.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb pgdg 1.0.6 100.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~noble_arm64.deb pigsty 1.0.6 88.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb pgdg 1.0.5 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb pgdg 1.0.6 101.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb pigsty 1.0.6 90.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb pgdg 1.0.5 101.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb pgdg 1.0.5 101.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb pgdg 1.0.6 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb pigsty 1.0.6 88.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-17-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pgmp_16 pgmp_16-1.0.6-1PIGSTY.el8.x86_64.rpm pigsty 1.0.6 48.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmp_16-1.0.6-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgmp_16 pgmp_16-1.0.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.6 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgmp_16-1.0.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgmp_16 pgmp_16-1.0.5-1PGDG.rhel8.x86_64.rpm pgdg 1.0.5 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgmp_16-1.0.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgmp_16 pgmp_16-1.0.6-1PIGSTY.el8.aarch64.rpm pigsty 1.0.6 45.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmp_16-1.0.6-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgmp_16 pgmp_16-1.0.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.6 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgmp_16-1.0.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgmp_16 pgmp_16-1.0.5-1PGDG.rhel8.aarch64.rpm pgdg 1.0.5 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgmp_16-1.0.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgmp_16 pgmp_16-1.0.6-1PIGSTY.el9.x86_64.rpm pigsty 1.0.6 45.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmp_16-1.0.6-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgmp_16 pgmp_16-1.0.5-6PGDG.rhel9.8.x86_64.rpm pgdg 1.0.5 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgmp_16-1.0.5-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgmp_16 pgmp_16-1.0.5-1PGDG.rhel9.x86_64.rpm pgdg 1.0.5 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgmp_16-1.0.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgmp_16 pgmp_16-1.0.6-1PIGSTY.el9.aarch64.rpm pigsty 1.0.6 43.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmp_16-1.0.6-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgmp_16 pgmp_16-1.0.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmp_16-1.0.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgmp_16 pgmp_16-1.0.5-6PGDG.rhel9.8.aarch64.rpm pgdg 1.0.5 41.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmp_16-1.0.5-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgmp_16 pgmp_16-1.0.5-1PGDG.rhel9.aarch64.rpm pgdg 1.0.5 41.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmp_16-1.0.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgmp_16 pgmp_16-1.0.6-1PIGSTY.el10.x86_64.rpm pigsty 1.0.6 46.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmp_16-1.0.6-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pgmp_16 pgmp_16-1.0.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.6 44.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmp_16-1.0.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgmp_16 pgmp_16-1.0.5-6PGDG.rhel10.2.x86_64.rpm pgdg 1.0.5 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmp_16-1.0.5-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgmp_16 pgmp_16-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmp_16-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgmp_16 pgmp_16-1.0.6-1PIGSTY.el10.aarch64.rpm pigsty 1.0.6 44.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmp_16-1.0.6-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pgmp_16 pgmp_16-1.0.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0.6 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmp_16-1.0.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgmp_16 pgmp_16-1.0.5-6PGDG.rhel10.2.aarch64.rpm pgdg 1.0.5 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmp_16-1.0.5-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgmp_16 pgmp_16-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmp_16-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg12+1_amd64.deb pgdg 1.0.6 101.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb pigsty 1.0.6 83.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg12+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg12+1_arm64.deb pgdg 1.0.6 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb pigsty 1.0.6 82.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg12+1_arm64.deb pgdg 1.0.5 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg13+1_amd64.deb pgdg 1.0.6 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb pigsty 1.0.6 83.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg13+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg13+1_arm64.deb pgdg 1.0.6 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb pigsty 1.0.6 82.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg13+1_arm64.deb pgdg 1.0.5 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb pgdg 1.0.6 111.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb pigsty 1.0.6 100.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb pgdg 1.0.5 109.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 109.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb pgdg 1.0.6 109.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb pigsty 1.0.6 98.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb pgdg 1.0.6 101.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~noble_amd64.deb pigsty 1.0.6 89.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb pgdg 1.0.6 100.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~noble_arm64.deb pigsty 1.0.6 88.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb pgdg 1.0.5 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb pgdg 1.0.6 101.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb pigsty 1.0.6 90.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb pgdg 1.0.5 100.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb pgdg 1.0.5 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb pgdg 1.0.6 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb pigsty 1.0.6 88.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-16-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pgmp_15 pgmp_15-1.0.6-1PIGSTY.el8.x86_64.rpm pigsty 1.0.6 48.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmp_15-1.0.6-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgmp_15 pgmp_15-1.0.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.6 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgmp_15-1.0.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgmp_15 pgmp_15-1.0.4-4.rhel8.x86_64.rpm pgdg 1.0.4 106.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgmp_15-1.0.4-4.rhel8.x86_64.rpm
@ el8.aarch64 15 pgmp_15 pgmp_15-1.0.6-1PIGSTY.el8.aarch64.rpm pigsty 1.0.6 45.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmp_15-1.0.6-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgmp_15 pgmp_15-1.0.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.6 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgmp_15-1.0.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgmp_15 pgmp_15-1.0.4-4.rhel8.aarch64.rpm pgdg 1.0.4 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgmp_15-1.0.4-4.rhel8.aarch64.rpm
@ el9.x86_64 15 pgmp_15 pgmp_15-1.0.6-1PIGSTY.el9.x86_64.rpm pigsty 1.0.6 45.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmp_15-1.0.6-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgmp_15 pgmp_15-1.0.5-6PGDG.rhel9.8.x86_64.rpm pgdg 1.0.5 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgmp_15-1.0.5-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgmp_15 pgmp_15-1.0.4-4.rhel9.x86_64.rpm pgdg 1.0.4 109.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgmp_15-1.0.4-4.rhel9.x86_64.rpm
@ el9.aarch64 15 pgmp_15 pgmp_15-1.0.6-1PIGSTY.el9.aarch64.rpm pigsty 1.0.6 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmp_15-1.0.6-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgmp_15 pgmp_15-1.0.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.6 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmp_15-1.0.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgmp_15 pgmp_15-1.0.5-6PGDG.rhel9.8.aarch64.rpm pgdg 1.0.5 41.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmp_15-1.0.5-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgmp_15 pgmp_15-1.0.4-4.rhel9.aarch64.rpm pgdg 1.0.4 107.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmp_15-1.0.4-4.rhel9.aarch64.rpm
@ el10.x86_64 15 pgmp_15 pgmp_15-1.0.6-1PIGSTY.el10.x86_64.rpm pigsty 1.0.6 45.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmp_15-1.0.6-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pgmp_15 pgmp_15-1.0.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.6 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmp_15-1.0.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgmp_15 pgmp_15-1.0.5-6PGDG.rhel10.2.x86_64.rpm pgdg 1.0.5 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmp_15-1.0.5-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgmp_15 pgmp_15-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmp_15-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgmp_15 pgmp_15-1.0.6-1PIGSTY.el10.aarch64.rpm pigsty 1.0.6 44.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmp_15-1.0.6-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pgmp_15 pgmp_15-1.0.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0.6 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmp_15-1.0.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgmp_15 pgmp_15-1.0.5-6PGDG.rhel10.2.aarch64.rpm pgdg 1.0.5 42.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmp_15-1.0.5-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgmp_15 pgmp_15-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmp_15-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg12+1_amd64.deb pgdg 1.0.6 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb pigsty 1.0.6 83.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg12+1_amd64.deb pgdg 1.0.5 100.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg12+1_arm64.deb pgdg 1.0.6 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb pigsty 1.0.6 82.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg12+1_arm64.deb pgdg 1.0.5 99.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg13+1_amd64.deb pgdg 1.0.6 101.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb pigsty 1.0.6 84.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg13+1_amd64.deb pgdg 1.0.5 100.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg13+1_arm64.deb pgdg 1.0.6 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb pigsty 1.0.6 82.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg13+1_arm64.deb pgdg 1.0.5 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb pgdg 1.0.6 111.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb pigsty 1.0.6 100.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb pgdg 1.0.5 108.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 108.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb pgdg 1.0.6 109.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb pigsty 1.0.6 98.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb pgdg 1.0.6 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~noble_amd64.deb pigsty 1.0.6 88.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 100.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb pgdg 1.0.6 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~noble_arm64.deb pigsty 1.0.6 88.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb pgdg 1.0.6 100.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb pigsty 1.0.6 88.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb pgdg 1.0.5 100.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb pgdg 1.0.5 100.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb pgdg 1.0.6 99.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb pigsty 1.0.6 88.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-15-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pgmp_14 pgmp_14-1.0.6-1PIGSTY.el8.x86_64.rpm pigsty 1.0.6 48.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmp_14-1.0.6-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgmp_14 pgmp_14-1.0.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0.6 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgmp_14-1.0.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgmp_14 pgmp_14-1.0.4-4.rhel8.x86_64.rpm pgdg 1.0.4 107.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgmp_14-1.0.4-4.rhel8.x86_64.rpm
@ el8.aarch64 14 pgmp_14 pgmp_14-1.0.6-1PIGSTY.el8.aarch64.rpm pigsty 1.0.6 45.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmp_14-1.0.6-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgmp_14 pgmp_14-1.0.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0.6 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgmp_14-1.0.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgmp_14 pgmp_14-1.0.4-4.rhel8.aarch64.rpm pgdg 1.0.4 104.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgmp_14-1.0.4-4.rhel8.aarch64.rpm
@ el9.x86_64 14 pgmp_14 pgmp_14-1.0.6-1PIGSTY.el9.x86_64.rpm pigsty 1.0.6 45.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmp_14-1.0.6-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgmp_14 pgmp_14-1.0.5-6PGDG.rhel9.8.x86_64.rpm pgdg 1.0.5 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgmp_14-1.0.5-6PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 14 pgmp_14 pgmp_14-1.0.6-1PIGSTY.el9.aarch64.rpm pigsty 1.0.6 43.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmp_14-1.0.6-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgmp_14 pgmp_14-1.0.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0.6 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmp_14-1.0.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgmp_14 pgmp_14-1.0.5-6PGDG.rhel9.8.aarch64.rpm pgdg 1.0.5 41.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmp_14-1.0.5-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgmp_14 pgmp_14-1.0.4-4.rhel9.aarch64.rpm pgdg 1.0.4 107.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmp_14-1.0.4-4.rhel9.aarch64.rpm
@ el10.x86_64 14 pgmp_14 pgmp_14-1.0.6-1PIGSTY.el10.x86_64.rpm pigsty 1.0.6 45.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmp_14-1.0.6-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pgmp_14 pgmp_14-1.0.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0.6 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmp_14-1.0.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgmp_14 pgmp_14-1.0.5-6PGDG.rhel10.2.x86_64.rpm pgdg 1.0.5 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmp_14-1.0.5-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgmp_14 pgmp_14-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmp_14-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgmp_14 pgmp_14-1.0.6-1PIGSTY.el10.aarch64.rpm pigsty 1.0.6 44.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmp_14-1.0.6-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pgmp_14 pgmp_14-1.0.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0.6 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmp_14-1.0.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgmp_14 pgmp_14-1.0.5-6PGDG.rhel10.2.aarch64.rpm pgdg 1.0.5 42.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmp_14-1.0.5-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgmp_14 pgmp_14-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmp_14-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg12+1_amd64.deb pgdg 1.0.6 101.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb pigsty 1.0.6 83.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg12+1_amd64.deb pgdg 1.0.5 100.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg12+1_arm64.deb pgdg 1.0.6 99.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb pigsty 1.0.6 82.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg12+1_arm64.deb pgdg 1.0.5 99.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg13+1_amd64.deb pgdg 1.0.6 101.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb pigsty 1.0.6 83.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg13+1_amd64.deb pgdg 1.0.5 100.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg13+1_arm64.deb pgdg 1.0.6 100.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb pigsty 1.0.6 82.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg13+1_arm64.deb pgdg 1.0.5 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb pgdg 1.0.6 111.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb pigsty 1.0.6 100.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb pgdg 1.0.5 108.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 108.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb pgdg 1.0.6 109.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb pigsty 1.0.6 98.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb pgdg 1.0.6 101.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~noble_amd64.deb pigsty 1.0.6 88.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 100.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb pgdg 1.0.6 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~noble_arm64.deb pigsty 1.0.6 88.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb pgdg 1.0.6 100.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb pigsty 1.0.6 88.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb pgdg 1.0.5 100.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb pgdg 1.0.5 100.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb pgdg 1.0.6 99.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb pigsty 1.0.6 87.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmp/postgresql-14-pgmp_1.0.6-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-5.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb pgdg 1.0.5 99.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgmp` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgmp         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgmp` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmp;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmp -v 18  # PG 18
pig ext install -y pgmp -v 17  # PG 17
pig ext install -y pgmp -v 16  # PG 16
pig ext install -y pgmp -v 15  # PG 15
pig ext install -y pgmp -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmp_18       # PG 18
dnf install -y pgmp_17       # PG 17
dnf install -y pgmp_16       # PG 16
dnf install -y pgmp_15       # PG 15
dnf install -y pgmp_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmp   # PG 18
apt install -y postgresql-17-pgmp   # PG 17
apt install -y postgresql-16-pgmp   # PG 16
apt install -y postgresql-15-pgmp   # PG 15
apt install -y postgresql-14-pgmp   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgmp;
```

## 用法

来源：

- [pgmp 1.0.6 README](https://github.com/dvarrazzo/pgmp/blob/rel-1.0.6/README.rst)
- [pgmp 1.0.6 发行说明](https://github.com/dvarrazzo/pgmp/blob/rel-1.0.6/NEWS.rst)
- [pgmp 1.0.6 元数据](https://github.com/dvarrazzo/pgmp/blob/rel-1.0.6/META.json)
- [pgmp 控制文件](https://github.com/dvarrazzo/pgmp/blob/rel-1.0.6/pgmp.control)
- [pgmp 官方文档](https://dvarrazzo.github.io/pgmp/)

`pgmp` 在 PostgreSQL 内提供 GNU MP 算术。它通过 `mpz` 增加任意大小整数，通过 `mpq` 增加精确有理数，并提供类型转换、算术、比较、聚合、数论、位运算与随机数函数。

### 核心流程

```sql
CREATE EXTENSION pgmp;

SELECT '123456789012345678901234567890'::mpz * 2;
SELECT mpq(1::mpz, 3::mpz) + mpq(1::mpz, 6::mpz);
SELECT gcd(48::mpz, 18::mpz);
SELECT nextprime(100000000000000000000::mpz);
```

`mpz` 是任意大小整数类型，但仍受 PostgreSQL 单值大小限制。`mpq` 保存规范化的分子和分母，因此在显式转换为近似类型之前，分数运算保持精确。

### 重要对象

- `mpz(text)` 与类型转换可从十进制或受支持的带基数前缀形式构造整数。
- `mpq(text)` 与 `mpq(mpz, mpz)` 用于构造有理数。
- 两种类型均支持普通比较以及 btree 或 hash 索引。
- 整数辅助函数包括指定舍入方向的除法、幂、开方、素性测试、`gcd`、`lcm`、阶乘、Fibonacci 与 Lucas 数、位运算和随机状态函数。
- 有理数辅助函数包括分子分母访问、求逆、分母限制、算术、比较与聚合。
- `gmp_version()` 与 `gmp_max_bitcnt()` 提供库信息。

需要精确十进制或有理数语义时，不要使用浮点输入；应通过文本、整数，或显式分子和分母构造数值。

### 1.0.6 版本说明

1.0.6 发行版增加 PostgreSQL 19 构建兼容性，在元数据中把 PostgreSQL 14 设为支持下限，并为幂、Fibonacci 与 Lucas 数路径补充缺失的 unsigned-long 范围检查。

上游发行版版本为 1.0.6，但该标签下的 `pgmp.control` 当前声明 SQL 扩展版本为 `1.1`。创建扩展时不要强制版本，并在设计升级前检查数据库实际报告的值：

```sql
SELECT extversion
FROM pg_extension
WHERE extname = 'pgmp';
```

pgmp 依赖 GMP 共享库。GMP 4.1 缺少上游文档列出的少数开方、位运算和随机状态函数；需要这些对象时应使用较新的 GMP。大操作数可能消耗大量后端内存和 CPU，因此面向不可信算术负载时应设置语句超时与输入限制。

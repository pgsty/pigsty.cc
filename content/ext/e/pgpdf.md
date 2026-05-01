---
title: "pgpdf"
linkTitle: "pgpdf"
description: "PDF数据类型，管理函数与全文检索"
weight: 3570
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Florents-Tselai/pgpdf">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Florents-Tselai/pgpdf</div>
    <div class="ext-card__desc">https://github.com/Florents-Tselai/pgpdf</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgpdf-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgpdf-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pgpdf-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgpdf`**](/ext/e/pgpdf) | `0.1.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3570  | [**`pgpdf`**](/ext/e/pgpdf) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgjq`](/ext/e/pgjq) [`pgjwt`](/ext/e/pgjwt) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgpdf` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgpdf_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgpdf` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 | AVAIL PIGSTY 0.1.0 2 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 pgpdf_18 pgpdf_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgpdf_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pgpdf_18 pgpdf_18-0.1.0-1PGDG.rhel8.x86_64.rpm pgdg 0.1.0 15.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgpdf_18-0.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgpdf_18 pgpdf_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgpdf_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pgpdf_18 pgpdf_18-0.1.0-1PGDG.rhel8.aarch64.rpm pgdg 0.1.0 14.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgpdf_18-0.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgpdf_18 pgpdf_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgpdf_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pgpdf_18 pgpdf_18-0.1.0-1PGDG.rhel9.x86_64.rpm pgdg 0.1.0 15.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgpdf_18-0.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgpdf_18 pgpdf_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgpdf_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pgpdf_18 pgpdf_18-0.1.0-1PGDG.rhel9.aarch64.rpm pgdg 0.1.0 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgpdf_18-0.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgpdf_18 pgpdf_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgpdf_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pgpdf_18 pgpdf_18-0.1.0-1PGDG.rhel10.x86_64.rpm pgdg 0.1.0 16.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgpdf_18-0.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgpdf_18 pgpdf_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgpdf_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pgpdf_18 pgpdf_18-0.1.0-1PGDG.rhel10.aarch64.rpm pgdg 0.1.0 15.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgpdf_18-0.1.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 25.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 26.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 26.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 26.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 26.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgpdf postgresql-18-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 26.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-18-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgpdf_17 pgpdf_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgpdf_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgpdf_17 pgpdf_17-0.1.0-1PGDG.rhel8.x86_64.rpm pgdg 0.1.0 15.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpdf_17-0.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgpdf_17 pgpdf_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgpdf_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgpdf_17 pgpdf_17-0.1.0-1PGDG.rhel8.aarch64.rpm pgdg 0.1.0 14.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpdf_17-0.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgpdf_17 pgpdf_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgpdf_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgpdf_17 pgpdf_17-0.1.0-1PGDG.rhel9.x86_64.rpm pgdg 0.1.0 15.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpdf_17-0.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgpdf_17 pgpdf_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgpdf_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgpdf_17 pgpdf_17-0.1.0-1PGDG.rhel9.aarch64.rpm pgdg 0.1.0 15.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpdf_17-0.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgpdf_17 pgpdf_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgpdf_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pgpdf_17 pgpdf_17-0.1.0-1PGDG.rhel10.x86_64.rpm pgdg 0.1.0 16.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpdf_17-0.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgpdf_17 pgpdf_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgpdf_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pgpdf_17 pgpdf_17-0.1.0-1PGDG.rhel10.aarch64.rpm pgdg 0.1.0 15.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpdf_17-0.1.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 25.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 27.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 26.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 26.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgpdf postgresql-17-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 25.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-17-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgpdf_16 pgpdf_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgpdf_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgpdf_16 pgpdf_16-0.1.0-1PGDG.rhel8.x86_64.rpm pgdg 0.1.0 15.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpdf_16-0.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgpdf_16 pgpdf_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 18.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgpdf_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgpdf_16 pgpdf_16-0.1.0-1PGDG.rhel8.aarch64.rpm pgdg 0.1.0 14.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpdf_16-0.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgpdf_16 pgpdf_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgpdf_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgpdf_16 pgpdf_16-0.1.0-1PGDG.rhel9.x86_64.rpm pgdg 0.1.0 15.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpdf_16-0.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgpdf_16 pgpdf_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgpdf_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgpdf_16 pgpdf_16-0.1.0-1PGDG.rhel9.aarch64.rpm pgdg 0.1.0 15.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpdf_16-0.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgpdf_16 pgpdf_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgpdf_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pgpdf_16 pgpdf_16-0.1.0-1PGDG.rhel10.x86_64.rpm pgdg 0.1.0 16.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpdf_16-0.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgpdf_16 pgpdf_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgpdf_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pgpdf_16 pgpdf_16-0.1.0-1PGDG.rhel10.aarch64.rpm pgdg 0.1.0 15.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpdf_16-0.1.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 25.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 27.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 26.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 25.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 26.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgpdf postgresql-16-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 25.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-16-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgpdf_15 pgpdf_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgpdf_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgpdf_15 pgpdf_15-0.1.0-1PGDG.rhel8.x86_64.rpm pgdg 0.1.0 15.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpdf_15-0.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pgpdf_15 pgpdf_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgpdf_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgpdf_15 pgpdf_15-0.1.0-1PGDG.rhel8.aarch64.rpm pgdg 0.1.0 14.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpdf_15-0.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pgpdf_15 pgpdf_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgpdf_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgpdf_15 pgpdf_15-0.1.0-1PGDG.rhel9.x86_64.rpm pgdg 0.1.0 15.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpdf_15-0.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pgpdf_15 pgpdf_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgpdf_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgpdf_15 pgpdf_15-0.1.0-1PGDG.rhel9.aarch64.rpm pgdg 0.1.0 15.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpdf_15-0.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgpdf_15 pgpdf_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgpdf_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pgpdf_15 pgpdf_15-0.1.0-1PGDG.rhel10.x86_64.rpm pgdg 0.1.0 16.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpdf_15-0.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgpdf_15 pgpdf_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgpdf_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pgpdf_15 pgpdf_15-0.1.0-1PGDG.rhel10.aarch64.rpm pgdg 0.1.0 15.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpdf_15-0.1.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 25.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 25.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 27.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 26.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 26.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgpdf postgresql-15-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 25.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-15-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgpdf_14 pgpdf_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 18.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgpdf_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgpdf_14 pgpdf_14-0.1.0-1PGDG.rhel8.x86_64.rpm pgdg 0.1.0 15.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpdf_14-0.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pgpdf_14 pgpdf_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgpdf_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgpdf_14 pgpdf_14-0.1.0-1PGDG.rhel8.aarch64.rpm pgdg 0.1.0 14.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpdf_14-0.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pgpdf_14 pgpdf_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgpdf_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgpdf_14 pgpdf_14-0.1.0-1PGDG.rhel9.x86_64.rpm pgdg 0.1.0 15.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpdf_14-0.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pgpdf_14 pgpdf_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgpdf_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgpdf_14 pgpdf_14-0.1.0-1PGDG.rhel9.aarch64.rpm pgdg 0.1.0 15.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpdf_14-0.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pgpdf_14 pgpdf_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 18.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgpdf_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pgpdf_14 pgpdf_14-0.1.0-1PGDG.rhel10.x86_64.rpm pgdg 0.1.0 16.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpdf_14-0.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgpdf_14 pgpdf_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgpdf_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pgpdf_14 pgpdf_14-0.1.0-1PGDG.rhel10.aarch64.rpm pgdg 0.1.0 15.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpdf_14-0.1.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 25.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 25.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 24.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 27.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 26.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 26.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 26.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgpdf postgresql-14-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 25.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgpdf/postgresql-14-pgpdf_0.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgpdf` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgpdf         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgpdf` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgpdf;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgpdf -v 18  # PG 18
pig ext install -y pgpdf -v 17  # PG 17
pig ext install -y pgpdf -v 16  # PG 16
pig ext install -y pgpdf -v 15  # PG 15
pig ext install -y pgpdf -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgpdf_18       # PG 18
dnf install -y pgpdf_17       # PG 17
dnf install -y pgpdf_16       # PG 16
dnf install -y pgpdf_15       # PG 15
dnf install -y pgpdf_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgpdf   # PG 18
apt install -y postgresql-17-pgpdf   # PG 17
apt install -y postgresql-16-pgpdf   # PG 16
apt install -y postgresql-15-pgpdf   # PG 15
apt install -y postgresql-14-pgpdf   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgpdf';
```


**创建扩展**：

```sql
CREATE EXTENSION pgpdf;
```


## 用法

实际的 PDF 解析由 [poppler](https://poppler.freedesktop.org) 完成。

该扩展允许以符合 ACID 事务的方式处理 PDF 文件。
常见的替代方案依赖于外部脚本或服务，容易导致数据摄取流程变得脆弱，并使原始数据出现不同步的问题。

- [在 Postgres 中对 PDF 进行全文搜索](https://tselai.com/full-text-search-pdf-postgres)
- [pgpdf：Postgres 的 pdf 类型](https://tselai.com/pgpdf-pdf-type-postgres)

下载一些 PDF 文件。

```sh
wget https://wiki.postgresql.org/images/e/ea/PostgreSQL_Introduction.pdf -O /tmp/pgintro.pdf
wget https://pdfobject.com/pdf/sample.pdf -O /tmp/sample.pdf
```

通过将 `text` 类型的文件路径或 `bytea` 列进行类型转换，即可创建 `pdf` 类型。

```sql
CREATE EXTENSION pgpdf;
SELECT '/tmp/pgintro.pdf'::pdf;
```

```sql
                                       pdf
----------------------------------------------------------------------------------
 PostgreSQL Introduction                                                         +
 Digoal.Zhou                                                                     +
 7/20/2011Catalog                                                                +
  PostgreSQL Origin
```

如果文件系统中没有 PDF 文件，但已将其内容存储在 `bytea` 列中，可以直接将其转换为 `pdf` 类型。

```sql
SELECT pg_read_binary_file('/tmp/pgintro.pdf')::bytea::pdf;
```

--------

## 示例

创建一个包含 `pdf` 列的表：

```sql
CREATE TABLE pdfs(name text primary key, doc pdf);

INSERT INTO pdfs VALUES ('pgintro', '/tmp/pgintro.pdf');
INSERT INTO pdfs VALUES ('pgintro', '/tmp/sample.pdf');
```

解析和验证会自动进行。
文件只会从磁盘读取一次！

> [!NOTE]
> 文件路径必须是 `postgres` 进程/用户可访问的！
> 这与运行 psql 的用户不同。
> 如果不确定此处含义，请咨询 DBA！

### 字符串函数和运算符

标准的 PostgreSQL [字符串函数和运算符](https://www.postgresql.org/docs/17/functions-string.html)均可正常使用：

```sql
SELECT 'Below is the PDF we received ' || '/tmp/pgintro.pdf'::pdf;
```

```sql
SELECT upper('/tmp/pgintro.pdf'::pdf::text);
```

```sql
SELECT name
FROM pdfs
WHERE doc::text LIKE '%Postgres%';
```

### 全文搜索（FTS）

由于 `pdf` 文件可以像普通文本一样操作，因此也支持全文搜索（FTS）。

```sql
SELECT '/tmp/pgintro.pdf'::pdf::text @@ to_tsquery('postgres');
```

```sql
 ?column?
----------
 t
(1 row)
```

```sql
SELECT '/tmp/pgintro.pdf'::pdf::text @@ to_tsquery('oracle');
```

```sql
 ?column?
----------
 f
(1 row)
```

### 使用 `pg_trgm` 计算文档相似度

可以使用 [pg_trgm](https://postgresql.org/docs/17/interactive/pgtrgm.html) 计算两个文档之间的相似度：

```sql
CREATE EXTENSION pg_trgm;

SELECT similarity('/tmp/pgintro.pdf'::pdf::text, '/tmp/sample.pdf'::pdf::text);
```

### 元数据

以下函数可用：

- `pdf_title(pdf) → text`
- `pdf_author(pdf) → text`
- `pdf_num_pages(pdf) → integer`

  文档的总页数
- `pdf_page(pdf, integer) → text`

  获取第 i 页的文本内容
- `pdf_creator(pdf) → text`
- `pdf_keywords(pdf) → text`
- `pdf_metadata(pdf) → text`
- `pdf_version(pdf) → text`
- `pdf_subject(pdf) → text`
- `pdf_creation(pdf) → timestamp`
- `pdf_modification(pdf) → timestamp`

```sql
SELECT pdf_title('/tmp/pgintro.pdf');
```

```sql
        pdf_title
-------------------------
 PostgreSQL Introduction
(1 row)
```

```sql
SELECT pdf_author('/tmp/pgintro.pdf');
```

```sql
 pdf_author
------------
 周正中
(1 row)
```

获取部分页面

```sql
SELECT pdf_num_pages('/tmp/pgintro.pdf');
```

```sql
 pdf_num_pages
---------------
            24
(1 row)
```

```sql
SELECT pdf_page('/tmp/pgintro.pdf', 1);
```

```sql
           pdf_page
------------------------------
 Catalog                     +
  PostgreSQL Origin         +
  Layout                    +
  Features                  +
  Enterprise Class Attribute+
  Case
(1 row)
```

```sql
SELECT pdf_subject('/tmp/pgintro.pdf');
```

```sql
 pdf_subject
-------------

(1 row)
```

```sql
SELECT pdf_creation('/tmp/pgintro.pdf');
```

```sql
       pdf_creation
--------------------------
 Wed Jul 20 11:13:37 2011
(1 row)
```

```sql
SELECT pdf_modification('/tmp/pgintro.pdf');
```

```sql
     pdf_modification
--------------------------
 Wed Jul 20 11:13:37 2011
(1 row)
```

```sql
SELECT pdf_creator('/tmp/pgintro.pdf');
```

```sql
            pdf_creator
------------------------------------
 Microsoft® Office PowerPoint® 2007
(1 row)
```

```sql
SELECT pdf_metadata('/tmp/pgintro.pdf');
```

```sql
 pdf_metadata
--------------

(1 row)
```

```sql
SELECT pdf_version('/tmp/pgintro.pdf');
```

```sql
 pdf_version
-------------
 PDF-1.5
(1 row)
```

## 安装

安装 [poppler](https://poppler.freedesktop.org) 依赖

**Linux**
```
sudo apt install -y libpoppler-glib-dev pkg-config
```

**Homebrew/MacOS**

```
brew install poppler pkgconf
```

```
cd /tmp
git clone https://github.com/Florents-Tselai/pgpdf.git
cd pgpdf
make
make install # 可能需要 sudo
```

安装完成后，在数据库会话中执行：

```sql
CREATE EXTENSION pgpdf;
```

### Docker

通过以下命令获取 [Docker 镜像](https://hub.docker.com/r/florents/pgpdf)：

```sh
docker pull florents/pgpdf:pg17
```

此镜像在 [Postgres 镜像](https://hub.docker.com/_/postgres) 基础上添加了 pgpdf（将 `17` 替换为所需的 Postgres 服务器版本，运行方式相同）。

在容器中运行该镜像。

```sh
docker run --name pgpdf -p 5432:5432 -e POSTGRES_PASSWORD=pass florents/pgpdf:pg17
```

通过另一个终端连接到正在运行的服务器（容器）。

```sh
PGPASSWORD=pass psql -h localhost -p 5432 -U postgres
```

> [!WARNING]
> 将任意二进制数据（PDF）读入数据库可能存在安全风险。
> 请仅对可信的文件使用此功能。

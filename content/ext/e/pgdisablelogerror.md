---
title: "pgdisablelogerror"
linkTitle: "pgdisablelogerror"
description: "按 SQLSTATE 错误码禁止部分错误写入 PostgreSQL 服务器日志。"
weight: 5260
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fmbiete/pgdisablelogerror">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fmbiete/pgdisablelogerror</div>
    <div class="ext-card__desc">https://github.com/fmbiete/pgdisablelogerror</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgdisablelogerror-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgdisablelogerror-1.0.tar.gz</div>
    <div class="ext-card__desc">pgdisablelogerror-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgdisablelogerror`**](/ext/e/pgdisablelogerror) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd" href="/ext/license#bsd">BSD</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5260  | [**`pgdisablelogerror`**](/ext/e/pgdisablelogerror) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`logerrors`](/ext/e/logerrors) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGDG RPM and Pigsty DEB package fmbiete/pgdisablelogerror 1.0; control is relocatable=true and requires shared_preload_libraries.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgdisablelogerror` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgdisablelogerror_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgdisablelogerror` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el8.aarch64 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 | AVAIL PGDG 1.0 1 |
| el9.x86_64 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 |
| el9.aarch64 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 |
| el10.x86_64 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 |
| el10.aarch64 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 3 | AVAIL PGDG 1.0 2 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 |
@ el8.x86_64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgdisablelogerror_18-1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgdisablelogerror_18-1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgdisablelogerror_18-1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgdisablelogerror_18-1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgdisablelogerror_18-1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgdisablelogerror_18-1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgdisablelogerror_18-1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgdisablelogerror_18-1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgdisablelogerror_18-1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgdisablelogerror_18-1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.0 13.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgdisablelogerror_18-1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgdisablelogerror_18-1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgdisablelogerror_18-1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgdisablelogerror_18 pgdisablelogerror_18-1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgdisablelogerror_18-1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgdisablelogerror postgresql-18-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-18-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgdisablelogerror_17-1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgdisablelogerror_17-1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgdisablelogerror_17-1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgdisablelogerror_17-1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgdisablelogerror_17-1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgdisablelogerror_17-1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgdisablelogerror_17-1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgdisablelogerror_17-1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgdisablelogerror_17-1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgdisablelogerror_17-1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.0 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgdisablelogerror_17-1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgdisablelogerror_17-1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgdisablelogerror_17-1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgdisablelogerror_17 pgdisablelogerror_17-1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgdisablelogerror_17-1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgdisablelogerror postgresql-17-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-17-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgdisablelogerror_16-1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgdisablelogerror_16-1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgdisablelogerror_16-1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgdisablelogerror_16-1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgdisablelogerror_16-1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgdisablelogerror_16-1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgdisablelogerror_16-1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgdisablelogerror_16-1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgdisablelogerror_16-1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgdisablelogerror_16-1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.0 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgdisablelogerror_16-1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgdisablelogerror_16-1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgdisablelogerror_16-1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgdisablelogerror_16 pgdisablelogerror_16-1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgdisablelogerror_16-1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgdisablelogerror postgresql-16-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-16-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgdisablelogerror_15-1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgdisablelogerror_15-1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgdisablelogerror_15-1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgdisablelogerror_15-1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgdisablelogerror_15-1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgdisablelogerror_15-1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgdisablelogerror_15-1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgdisablelogerror_15-1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgdisablelogerror_15-1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgdisablelogerror_15-1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.0 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgdisablelogerror_15-1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgdisablelogerror_15-1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgdisablelogerror_15-1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgdisablelogerror_15 pgdisablelogerror_15-1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgdisablelogerror_15-1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 12.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgdisablelogerror postgresql-15-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-15-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgdisablelogerror_14-1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgdisablelogerror_14-1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgdisablelogerror_14-1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgdisablelogerror_14-1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgdisablelogerror_14-1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgdisablelogerror_14-1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.0 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgdisablelogerror_14-1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.0 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgdisablelogerror_14-1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgdisablelogerror_14-1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.0 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgdisablelogerror_14-1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.0 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgdisablelogerror_14-1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgdisablelogerror_14-1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgdisablelogerror_14 pgdisablelogerror_14-1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.0 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgdisablelogerror_14-1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0 11.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb pigsty 1.0 11.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb pigsty 1.0 11.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb pigsty 1.0 11.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb pigsty 1.0 11.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb pigsty 1.0 12.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgdisablelogerror postgresql-14-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb pigsty 1.0 12.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgdisablelogerror/postgresql-14-pgdisablelogerror_1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgdisablelogerror` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgdisablelogerror         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgdisablelogerror` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgdisablelogerror;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgdisablelogerror -v 18  # PG 18
pig ext install -y pgdisablelogerror -v 17  # PG 17
pig ext install -y pgdisablelogerror -v 16  # PG 16
pig ext install -y pgdisablelogerror -v 15  # PG 15
pig ext install -y pgdisablelogerror -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgdisablelogerror_18       # PG 18
dnf install -y pgdisablelogerror_17       # PG 17
dnf install -y pgdisablelogerror_16       # PG 16
dnf install -y pgdisablelogerror_15       # PG 15
dnf install -y pgdisablelogerror_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgdisablelogerror   # PG 18
apt install -y postgresql-17-pgdisablelogerror   # PG 17
apt install -y postgresql-16-pgdisablelogerror   # PG 16
apt install -y postgresql-15-pgdisablelogerror   # PG 15
apt install -y postgresql-14-pgdisablelogerror   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = '$libdir/pgdisablelogerror';
```


**创建扩展**：

```sql
CREATE EXTENSION pgdisablelogerror;
```




## 用法

来源：[README](https://github.com/fmbiete/pgdisablelogerror/blob/v1.0/README.md)、[v1.0 release](https://github.com/fmbiete/pgdisablelogerror/releases/tag/v1.0)、[control file](https://github.com/fmbiete/pgdisablelogerror/blob/v1.0/pgdisablelogerror.control)

`pgdisablelogerror` 会抑制配置的 SQLSTATE error codes 在 PostgreSQL server log 中的记录。对于 duplicate-key violations 等预期应用错误过于频繁、污染 server log 的场景，它比较有用。

### 启用 Hook

加载 module 并重启 PostgreSQL：

```conf
shared_preload_libraries = 'pgdisablelogerror'
```

在 `postgres` 数据库中创建一次扩展：

```sql
CREATE EXTENSION pgdisablelogerror;
```

### 配置 SQLSTATE Codes

将 `pgdisablelogerror.sqlerrcode` 设为逗号分隔的 SQLSTATE codes：

```conf
pgdisablelogerror.sqlerrcode = '23505,23503'
```

空值或 NULL 会禁用 suppression：

```conf
pgdisablelogerror.sqlerrcode = ''
```

要在普通 PostgreSQL 日志中识别 SQLSTATE 值，可以在 `log_line_prefix` 中添加 `%e`。

### 注意事项

- 版本 1.0 支持 PostgreSQL 14-18。
- 该扩展影响日志，不影响错误行为。客户端仍会收到原始错误。
- SQLSTATE 列表应尽量窄。抑制过宽的错误类别可能隐藏真实运维问题。

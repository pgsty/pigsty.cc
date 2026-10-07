---
title: "pgexporter_ext"
linkTitle: "pgexporter_ext"
description: "为 pgexporter 提供操作系统与主机指标"
weight: 6430
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgexporter/pgexporter_ext">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgexporter/pgexporter_ext</div>
    <div class="ext-card__desc">https://github.com/pgexporter/pgexporter_ext</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgexporter_ext-0.2.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgexporter_ext-0.2.5.tar.gz</div>
    <div class="ext-card__desc">pgexporter_ext-0.2.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgexporter_ext`**](/ext/e/pgexporter_ext) | `0.2.5` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd3clause" href="/ext/license#bsd3clause">BSD-3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6430  | [**`pgexporter_ext`**](/ext/e/pgexporter_ext) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgnodemx`](/ext/e/pgnodemx) [`system_stats`](/ext/e/system_stats) [`pg_proctab`](/ext/e/pg_proctab) [`pg_statvfs`](/ext/e/pg_statvfs) [`pgmonitor`](/ext/e/pgmonitor) [`pgtelemetry`](/ext/e/pgtelemetry) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Release/control and PIGSTY DEB version are 0.2.5; principal PGDG RPM is 0.2.4, except EL8 PG14-16 at 0.2.3. The guide configures preload, but 0.2.5 metrics work without it (verified). Metric access requires pg_monitor; local build capability does not authorize replacing PGDG packages.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.2.5` | {{< pgvers "18,17,16,15,14" >}} | `pgexporter_ext` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.2.4` | {{< pgvers "18,17,16,15,14" >}} | `pgexporter_ext_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgexporter-ext` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.2.4 1 | AVAIL PGDG 0.2.4 1 | AVAIL PGDG 0.2.3 1 | AVAIL PGDG 0.2.3 2 | AVAIL PGDG 0.2.3 5 |
| el8.aarch64 | AVAIL PGDG 0.2.4 1 | AVAIL PGDG 0.2.4 1 | AVAIL PGDG 0.2.3 1 | AVAIL PGDG 0.2.3 1 | AVAIL PGDG 0.2.3 2 |
| el9.x86_64 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 3 | AVAIL PGDG 0.2.4 5 |
| el9.aarch64 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 3 |
| el10.x86_64 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 |
| el10.aarch64 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 | AVAIL PGDG 0.2.4 2 |
| d12.x86_64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| u26.x86_64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
| u26.aarch64 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 | AVAIL PIGSTY 0.2.5 1 |
@ el8.x86_64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-1PGDG.rhel8.x86_64.rpm pgdg 0.2.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgexporter_ext_18-0.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-1PGDG.rhel8.aarch64.rpm pgdg 0.2.4 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgexporter_ext_18-0.2.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-2PGDG.rhel9.8.x86_64.rpm pgdg 0.2.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgexporter_ext_18-0.2.4-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-1PGDG.rhel9.x86_64.rpm pgdg 0.2.4 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgexporter_ext_18-0.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-2PGDG.rhel9.8.aarch64.rpm pgdg 0.2.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgexporter_ext_18-0.2.4-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-1PGDG.rhel9.aarch64.rpm pgdg 0.2.4 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgexporter_ext_18-0.2.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-2PGDG.rhel10.2.x86_64.rpm pgdg 0.2.4 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgexporter_ext_18-0.2.4-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-1PGDG.rhel10.x86_64.rpm pgdg 0.2.4 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgexporter_ext_18-0.2.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-2PGDG.rhel10.2.aarch64.rpm pgdg 0.2.4 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgexporter_ext_18-0.2.4-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgexporter_ext_18 pgexporter_ext_18-0.2.4-1PGDG.rhel10.aarch64.rpm pgdg 0.2.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgexporter_ext_18-0.2.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb pigsty 0.2.5 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb pigsty 0.2.5 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb pigsty 0.2.5 10.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb pigsty 0.2.5 10.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb pigsty 0.2.5 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb pigsty 0.2.5 11.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgexporter-ext postgresql-18-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb pigsty 0.2.5 11.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-18-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-1PGDG.rhel8.x86_64.rpm pgdg 0.2.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgexporter_ext_17-0.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-1PGDG.rhel8.aarch64.rpm pgdg 0.2.4 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgexporter_ext_17-0.2.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-2PGDG.rhel9.8.x86_64.rpm pgdg 0.2.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgexporter_ext_17-0.2.4-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-1PGDG.rhel9.x86_64.rpm pgdg 0.2.4 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgexporter_ext_17-0.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-2PGDG.rhel9.8.aarch64.rpm pgdg 0.2.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgexporter_ext_17-0.2.4-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-1PGDG.rhel9.aarch64.rpm pgdg 0.2.4 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgexporter_ext_17-0.2.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-2PGDG.rhel10.2.x86_64.rpm pgdg 0.2.4 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgexporter_ext_17-0.2.4-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-1PGDG.rhel10.x86_64.rpm pgdg 0.2.4 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgexporter_ext_17-0.2.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-2PGDG.rhel10.2.aarch64.rpm pgdg 0.2.4 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgexporter_ext_17-0.2.4-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgexporter_ext_17 pgexporter_ext_17-0.2.4-1PGDG.rhel10.aarch64.rpm pgdg 0.2.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgexporter_ext_17-0.2.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb pigsty 0.2.5 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb pigsty 0.2.5 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb pigsty 0.2.5 10.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb pigsty 0.2.5 10.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb pigsty 0.2.5 11.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgexporter-ext postgresql-17-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb pigsty 0.2.5 11.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-17-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.3-1PGDG.rhel8.x86_64.rpm pgdg 0.2.3 22.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgexporter_ext_16-0.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.3-1PGDG.rhel8.aarch64.rpm pgdg 0.2.3 22.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgexporter_ext_16-0.2.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.4-2PGDG.rhel9.8.x86_64.rpm pgdg 0.2.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgexporter_ext_16-0.2.4-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.3-1PGDG.rhel9.x86_64.rpm pgdg 0.2.3 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgexporter_ext_16-0.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.4-2PGDG.rhel9.8.aarch64.rpm pgdg 0.2.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgexporter_ext_16-0.2.4-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.3-1PGDG.rhel9.aarch64.rpm pgdg 0.2.3 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgexporter_ext_16-0.2.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.4-2PGDG.rhel10.2.x86_64.rpm pgdg 0.2.4 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgexporter_ext_16-0.2.4-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.4-1PGDG.rhel10.x86_64.rpm pgdg 0.2.4 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgexporter_ext_16-0.2.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.4-2PGDG.rhel10.2.aarch64.rpm pgdg 0.2.4 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgexporter_ext_16-0.2.4-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgexporter_ext_16 pgexporter_ext_16-0.2.4-1PGDG.rhel10.aarch64.rpm pgdg 0.2.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgexporter_ext_16-0.2.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb pigsty 0.2.5 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb pigsty 0.2.5 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb pigsty 0.2.5 10.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb pigsty 0.2.5 10.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb pigsty 0.2.5 11.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgexporter-ext postgresql-16-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb pigsty 0.2.5 11.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-16-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.3-1PGDG.rhel8.x86_64.rpm pgdg 0.2.3 22.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgexporter_ext_15-0.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgexporter_ext_15 pgexporter_ext_15-0.1.2-1.rhel8.x86_64.rpm pgdg 0.1.2 16.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgexporter_ext_15-0.1.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.3-1PGDG.rhel8.aarch64.rpm pgdg 0.2.3 22.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgexporter_ext_15-0.2.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.4-2PGDG.rhel9.8.x86_64.rpm pgdg 0.2.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgexporter_ext_15-0.2.4-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.3-1PGDG.rhel9.x86_64.rpm pgdg 0.2.3 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgexporter_ext_15-0.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgexporter_ext_15 pgexporter_ext_15-0.1.2-1.rhel9.x86_64.rpm pgdg 0.1.2 16.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgexporter_ext_15-0.1.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.4-2PGDG.rhel9.8.aarch64.rpm pgdg 0.2.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgexporter_ext_15-0.2.4-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.3-1PGDG.rhel9.aarch64.rpm pgdg 0.2.3 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgexporter_ext_15-0.2.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.4-2PGDG.rhel10.2.x86_64.rpm pgdg 0.2.4 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgexporter_ext_15-0.2.4-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.4-1PGDG.rhel10.x86_64.rpm pgdg 0.2.4 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgexporter_ext_15-0.2.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.4-2PGDG.rhel10.2.aarch64.rpm pgdg 0.2.4 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgexporter_ext_15-0.2.4-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgexporter_ext_15 pgexporter_ext_15-0.2.4-1PGDG.rhel10.aarch64.rpm pgdg 0.2.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgexporter_ext_15-0.2.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb pigsty 0.2.5 10.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb pigsty 0.2.5 10.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb pigsty 0.2.5 10.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb pigsty 0.2.5 10.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb pigsty 0.2.5 11.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb pigsty 0.2.5 11.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgexporter-ext postgresql-15-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb pigsty 0.2.5 11.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-15-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.3-1PGDG.rhel8.x86_64.rpm pgdg 0.2.3 22.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgexporter_ext_14-0.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.0-1.rhel8.x86_64.rpm pgdg 0.2.0 22.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgexporter_ext_14-0.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.1.2-1.rhel8.x86_64.rpm pgdg 0.1.2 16.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgexporter_ext_14-0.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.1.1-1.rhel8.x86_64.rpm pgdg 0.1.1 15.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgexporter_ext_14-0.1.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.1.0-1.rhel8.x86_64.rpm pgdg 0.1.0 15.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgexporter_ext_14-0.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.3-1PGDG.rhel8.aarch64.rpm pgdg 0.2.3 22.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgexporter_ext_14-0.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.0-1.rhel8.aarch64.rpm pgdg 0.2.0 22.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgexporter_ext_14-0.2.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.4-2PGDG.rhel9.8.x86_64.rpm pgdg 0.2.4 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgexporter_ext_14-0.2.4-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.3-1PGDG.rhel9.x86_64.rpm pgdg 0.2.3 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgexporter_ext_14-0.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.0-1.rhel9.x86_64.rpm pgdg 0.2.0 22.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgexporter_ext_14-0.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.1.2-1.rhel9.x86_64.rpm pgdg 0.1.2 16.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgexporter_ext_14-0.1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.1.1-1.rhel9.x86_64.rpm pgdg 0.1.1 16.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgexporter_ext_14-0.1.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.4-2PGDG.rhel9.8.aarch64.rpm pgdg 0.2.4 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgexporter_ext_14-0.2.4-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.3-1PGDG.rhel9.aarch64.rpm pgdg 0.2.3 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgexporter_ext_14-0.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.0-1.rhel9.aarch64.rpm pgdg 0.2.0 22.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgexporter_ext_14-0.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.4-2PGDG.rhel10.2.x86_64.rpm pgdg 0.2.4 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgexporter_ext_14-0.2.4-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.4-1PGDG.rhel10.x86_64.rpm pgdg 0.2.4 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgexporter_ext_14-0.2.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.4-2PGDG.rhel10.2.aarch64.rpm pgdg 0.2.4 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgexporter_ext_14-0.2.4-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgexporter_ext_14 pgexporter_ext_14-0.2.4-1PGDG.rhel10.aarch64.rpm pgdg 0.2.4 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgexporter_ext_14-0.2.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb pigsty 0.2.5 11.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb pigsty 0.2.5 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb pigsty 0.2.5 11.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb pigsty 0.2.5 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb pigsty 0.2.5 12.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb pigsty 0.2.5 12.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb pigsty 0.2.5 12.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb pigsty 0.2.5 12.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb pigsty 0.2.5 12.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgexporter-ext postgresql-14-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb pigsty 0.2.5 12.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgexporter-ext/postgresql-14-pgexporter-ext_0.2.5-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgexporter_ext` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgexporter_ext         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgexporter_ext` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgexporter_ext;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgexporter_ext -v 18  # PG 18
pig ext install -y pgexporter_ext -v 17  # PG 17
pig ext install -y pgexporter_ext -v 16  # PG 16
pig ext install -y pgexporter_ext -v 15  # PG 15
pig ext install -y pgexporter_ext -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgexporter_ext_18       # PG 18
dnf install -y pgexporter_ext_17       # PG 17
dnf install -y pgexporter_ext_16       # PG 16
dnf install -y pgexporter_ext_15       # PG 15
dnf install -y pgexporter_ext_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgexporter-ext   # PG 18
apt install -y postgresql-17-pgexporter-ext   # PG 17
apt install -y postgresql-16-pgexporter-ext   # PG 16
apt install -y postgresql-15-pgexporter-ext   # PG 15
apt install -y postgresql-14-pgexporter-ext   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pgexporter_ext;
```

## 用法

来源：

- [0.2.5 版 README](https://github.com/pgexporter/pgexporter_ext/blob/0.2.5/README.md)
- [0.2.5 版配置指南](https://github.com/pgexporter/pgexporter_ext/blob/0.2.5/doc/GETTING_STARTED.md)
- [0.2.5 版 SQL 定义](https://github.com/pgexporter/pgexporter_ext/tree/0.2.5/sql)
- [0.2.3 版 SQL 定义](https://github.com/pgexporter/pgexporter_ext/tree/0.2.3/sql)
- [0.2.4 版 SQL 定义](https://github.com/pgexporter/pgexporter_ext/tree/0.2.4/sql)
- [0.2.5 版文件系统实现](https://github.com/pgexporter/pgexporter_ext/blob/0.2.5/src/pgexporter_ext/utils.c)

`pgexporter_ext` 通过 SQL 提供 Linux 主机与文件系统指标，供 pgexporter 采集。以下示例适用于已打包的 0.2.3–0.2.5 版本 API。函数以 PostgreSQL 操作系统账户的权限访问资源，因此监控角色应只授予可信用户。

### 配置与核心流程

上游配置指南将模块加入 `shared_preload_libraries`，然后重启 PostgreSQL。配置时应保留已有的其他库。

```ini
shared_preload_libraries = 'pgexporter_ext'
```

由有权限的管理员在 `postgres` 数据库安装扩展，并将监控权限授予已有的 exporter 登录角色：

```sql
CREATE EXTENSION pgexporter_ext;
GRANT pg_monitor TO pgexporter;

SET ROLE pgexporter;
SELECT pgexporter_version_ext();
SELECT * FROM pgexporter_get_functions();
SELECT * FROM pgexporter_os_info();
SELECT * FROM pgexporter_load_avg();
RESET ROLE;
```

SQL 脚本撤销公众执行权限，并将执行权限授予 `pg_monitor`。这个预定义角色也提供广泛的 PostgreSQL 监控权限。发行包包含基础安装脚本和升级链；使用 `CREATE EXTENSION` 安装默认版本时，PostgreSQL 可以自动使用这条升级链。

### 指标函数

- `pgexporter_information_ext()` 和 `pgexporter_version_ext()` 返回扩展信息与版本文本。
- `pgexporter_get_functions()` 列出指标名称、是否接受参数、说明与类型；`pgexporter_is_supported(text)` 检查指标名称。
- `pgexporter_os_info()`、`pgexporter_cpu_info()`、`pgexporter_memory_info()`、`pgexporter_network_info()` 和 `pgexporter_load_avg()` 返回主机指标。
- `pgexporter_used_space(text)`、`pgexporter_free_space(text)` 和 `pgexporter_total_space(text)` 返回文件系统路径对应的字节数。

```sql
SELECT pgexporter_is_supported('pgexporter_load_avg');
SELECT pgexporter_free_space('/var/lib/postgresql');
```

应选择服务器上实际存在且操作系统账户可访问的路径。这些版本不提供后续版本中的 FIPS 或日志计数 API。

### 运行边界

文件系统调用使用服务器进程所见的文件系统，容器中看到的可能并非宿主机。已用空间函数会遍历目录，大目录树可能导致较高的采集开销。`pg_monitor` 成员可以检查可访问的路径，因此应限制数据库访问并谨慎选择采集路径。

上游列出的支持范围为 Linux 与 PostgreSQL 13+；本目录提供 PostgreSQL 14–18 软件包。安装时应匹配 PostgreSQL 主版本。RPM 主要由 PGDG 提供 0.2.4（EL8 PostgreSQL 14–16 使用 0.2.3），DEB 则由 Pigsty 提供 0.2.5；按照跨平台安装说明操作时，也需要启用 Pigsty 仓库。

---
title: "nominatim_fdw"
linkTitle: "nominatim_fdw"
description: "Nominatim 地理编码接口的 FDW 扩展"
weight: 8680
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/jimjonesbr/nominatim_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">jimjonesbr/nominatim_fdw</div>
    <div class="ext-card__desc">https://github.com/jimjonesbr/nominatim_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/nominatim_fdw-1.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">nominatim_fdw-1.2.tar.gz</div>
    <div class="ext-card__desc">nominatim_fdw-1.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`nominatim_fdw`**](/ext/e/nominatim_fdw) | `1.3` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8680  | [**`nominatim_fdw`**](/ext/e/nominatim_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `nominatim_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `nominatim_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-nominatim-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 |
| el8.aarch64 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 |
| el9.x86_64 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 |
| el9.aarch64 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 |
| el10.x86_64 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 |
| el10.aarch64 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 | AVAIL PGDG 1.3 4 |
| d12.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u26.x86_64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
| u26.aarch64 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 | AVAIL PIGSTY 1.2 1 |
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/nominatim_fdw_18-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/nominatim_fdw_18-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/nominatim_fdw_18-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/nominatim_fdw_18-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/nominatim_fdw_18-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/nominatim_fdw_18-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 52.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 51.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 52.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 52.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 56.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 56.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 54.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 54.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb pigsty 1.2 54.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb pigsty 1.2 53.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/nominatim_fdw_17-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/nominatim_fdw_17-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/nominatim_fdw_17-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/nominatim_fdw_17-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/nominatim_fdw_17-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/nominatim_fdw_17-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 52.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 51.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 52.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 51.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 64.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 64.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 54.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 53.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb pigsty 1.2 54.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb pigsty 1.2 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/nominatim_fdw_16-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/nominatim_fdw_16-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/nominatim_fdw_16-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/nominatim_fdw_16-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/nominatim_fdw_16-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/nominatim_fdw_16-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 52.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 51.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 52.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 51.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 63.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 63.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 54.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 53.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb pigsty 1.2 53.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb pigsty 1.2 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/nominatim_fdw_15-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/nominatim_fdw_15-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/nominatim_fdw_15-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/nominatim_fdw_15-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/nominatim_fdw_15-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/nominatim_fdw_15-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 52.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 51.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 52.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 51.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 63.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 63.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 54.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 53.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb pigsty 1.2 53.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb pigsty 1.2 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/nominatim_fdw_14-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/nominatim_fdw_14-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/nominatim_fdw_14-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/nominatim_fdw_14-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/nominatim_fdw_14-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/nominatim_fdw_14-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.2 52.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.2 51.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb pigsty 1.2 52.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb pigsty 1.2 51.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb pigsty 1.2 63.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb pigsty 1.2 63.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb pigsty 1.2 54.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb pigsty 1.2 53.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb pigsty 1.2 53.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb pigsty 1.2 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_1.2-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `nominatim_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg nominatim_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `nominatim_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install nominatim_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y nominatim_fdw -v 18  # PG 18
pig ext install -y nominatim_fdw -v 17  # PG 17
pig ext install -y nominatim_fdw -v 16  # PG 16
pig ext install -y nominatim_fdw -v 15  # PG 15
pig ext install -y nominatim_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y nominatim_fdw_18       # PG 18
dnf install -y nominatim_fdw_17       # PG 17
dnf install -y nominatim_fdw_16       # PG 16
dnf install -y nominatim_fdw_15       # PG 15
dnf install -y nominatim_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-nominatim-fdw   # PG 18
apt install -y postgresql-17-nominatim-fdw   # PG 17
apt install -y postgresql-16-nominatim-fdw   # PG 16
apt install -y postgresql-15-nominatim-fdw   # PG 15
apt install -y postgresql-14-nominatim-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION nominatim_fdw;
```

## 用法

来源：[README](https://github.com/jimjonesbr/nominatim_fdw/blob/master/README.md)，[Nominatim API](https://nominatim.org/)

`nominatim_fdw` 是一个面向 Nominatim 地理编码服务的 PostgreSQL foreign data wrapper。上游通过映射到 Nominatim `search`、`reverse` 和 `lookup` 端点的 SQL 函数暴露它，而不是通过 foreign tables。

### 创建服务器

```sql
CREATE EXTENSION nominatim_fdw;

CREATE SERVER osm
FOREIGN DATA WRAPPER nominatim_fdw
OPTIONS (url 'https://nominatim.openstreetmap.org');
```

上游记录的 server 选项包括：

- `url`（必填）
- `http_proxy`
- `connect_timeout`
- `max_connect_retry`
- `max_connect_redirect`

代理凭据应写在 user mapping 中：

```sql
CREATE USER MAPPING FOR pguser
SERVER osm
OPTIONS (proxy_user 'myuser', proxy_password 'mysecret');
```

### 地理编码函数

#### 结构化或自由格式搜索

```sql
SELECT osm_id, ref, lon, lat, boundingbox
FROM nominatim_search(
  server_name => 'osm',
  street => 'Neubrueckenstrasse 63',
  city => 'Muenster',
  country => 'Germany'
);

SELECT osm_id, display_name, lon, lat
FROM nominatim_search(
  server_name => 'osm',
  q => '1600 Pennsylvania Avenue, Washington DC'
);
```

#### 反向查询

```sql
SELECT osm_id, display_name, boundingbox
FROM nominatim_reverse(
  server_name => 'osm',
  lon => -77.0365,
  lat => 38.8977,
  zoom => 18,
  addressdetails => true
);
```

#### OSM 对象查找

```sql
SELECT osm_id, display_name
FROM nominatim_lookup(
  server_name => 'osm',
  osm_ids => 'W121736959,R123456'
);
```

README 说明 OSM ID 需要带类型前缀，例如 `N` 表示 node、`W` 表示 way、`R` 表示 relation。

### 说明

- 上游要求 PostgreSQL 12+、`libxml2` 2.5.0+、`libcurl` 7.74.0+。
- 扩展暴露 `nominatim_fdw_version()` 用于查看版本。
- 当前 README 文档示例已使用 `CREATE EXTENSION ... WITH VERSION '1.3'` 与 `ALTER EXTENSION ... UPDATE TO '1.3'`，说明上游已超出这次 `1.2` 刷新目标。

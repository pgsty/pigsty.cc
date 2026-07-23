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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/nominatim_fdw-2.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">nominatim_fdw-2.0.0.tar.gz</div>
    <div class="ext-card__desc">nominatim_fdw-2.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`nominatim_fdw`**](/ext/e/nominatim_fdw) | `2.0.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8680  | [**`nominatim_fdw`**](/ext/e/nominatim_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> PIGSTY RPM and DEB packages are aligned at 2.0.0 for PostgreSQL 14 through 18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `nominatim_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `nominatim_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-nominatim-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.0 5 | AVAIL PIGSTY 2.0.0 5 | AVAIL PIGSTY 2.0.0 5 | AVAIL PIGSTY 2.0.0 5 | AVAIL PIGSTY 2.0.0 5 |
| el8.aarch64 | AVAIL PIGSTY 2.0.0 5 | AVAIL PIGSTY 2.0.0 5 | AVAIL PIGSTY 2.0.0 5 | AVAIL PIGSTY 2.0.0 5 | AVAIL PIGSTY 2.0.0 5 |
| el9.x86_64 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 |
| el9.aarch64 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 |
| el10.x86_64 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 |
| el10.aarch64 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 | AVAIL PIGSTY 2.0.0 10 |
| d12.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 | AVAIL PIGSTY 2.0.0 1 |
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 34.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/nominatim_fdw_18-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/nominatim_fdw_18-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/nominatim_fdw_18-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/nominatim_fdw_18-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/nominatim_fdw_18-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/nominatim_fdw_18-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/nominatim_fdw_18-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/nominatim_fdw_18-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 35.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/nominatim_fdw_18-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel9.8.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.2 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.1.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/nominatim_fdw_18-1.1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/nominatim_fdw_18-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel9.8.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.2 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.1.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/nominatim_fdw_18-1.1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 35.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/nominatim_fdw_18-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel10.2.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.3-2PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.2 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.1.0 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/nominatim_fdw_18-1.1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/nominatim_fdw_18-2.0.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel10.2.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-2PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.3-2PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.2 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 nominatim_fdw_18 nominatim_fdw_18-1.1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/nominatim_fdw_18-1.1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 62.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 61.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 62.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 60.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 65.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 64.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 62.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 61.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 62.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-nominatim-fdw postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-18-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/nominatim_fdw_17-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/nominatim_fdw_17-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/nominatim_fdw_17-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/nominatim_fdw_17-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 33.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/nominatim_fdw_17-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/nominatim_fdw_17-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/nominatim_fdw_17-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/nominatim_fdw_17-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 35.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/nominatim_fdw_17-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel9.8.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.2 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.1.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/nominatim_fdw_17-1.1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/nominatim_fdw_17-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel9.8.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.1.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/nominatim_fdw_17-1.1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 35.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/nominatim_fdw_17-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel10.2.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.3-2PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.2 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.1.0 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/nominatim_fdw_17-1.1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 35.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/nominatim_fdw_17-2.0.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel10.2.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-2PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.3-2PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 nominatim_fdw_17 nominatim_fdw_17-1.1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/nominatim_fdw_17-1.1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 62.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 61.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 62.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 60.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 72.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 71.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 62.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 62.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-nominatim-fdw postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-17-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/nominatim_fdw_16-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/nominatim_fdw_16-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/nominatim_fdw_16-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/nominatim_fdw_16-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/nominatim_fdw_16-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/nominatim_fdw_16-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/nominatim_fdw_16-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/nominatim_fdw_16-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 35.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/nominatim_fdw_16-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel9.8.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.2 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.1.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/nominatim_fdw_16-1.1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 34.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/nominatim_fdw_16-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel9.8.aarch64.rpm pgdg 1.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.1.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/nominatim_fdw_16-1.1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 35.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/nominatim_fdw_16-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel10.2.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.3-2PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.2 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.1.0 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/nominatim_fdw_16-1.1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 35.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/nominatim_fdw_16-2.0.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel10.2.aarch64.rpm pgdg 1.3 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-2PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.3-2PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 nominatim_fdw_16 nominatim_fdw_16-1.1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.1.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/nominatim_fdw_16-1.1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 62.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 61.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 62.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 60.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 72.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 71.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 63.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 62.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-nominatim-fdw postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-16-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/nominatim_fdw_15-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/nominatim_fdw_15-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/nominatim_fdw_15-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/nominatim_fdw_15-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/nominatim_fdw_15-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/nominatim_fdw_15-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/nominatim_fdw_15-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/nominatim_fdw_15-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 35.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/nominatim_fdw_15-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel9.8.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.2 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.1.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/nominatim_fdw_15-1.1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/nominatim_fdw_15-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel9.8.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.1.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/nominatim_fdw_15-1.1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 35.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/nominatim_fdw_15-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel10.2.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.3-2PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.2 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.1.0 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/nominatim_fdw_15-1.1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 35.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/nominatim_fdw_15-2.0.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel10.2.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-2PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.3-2PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 nominatim_fdw_15 nominatim_fdw_15-1.1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/nominatim_fdw_15-1.1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 62.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 61.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 62.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 60.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 72.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 62.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 61.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 62.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-nominatim-fdw postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-15-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/nominatim_fdw_14-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel8.10.x86_64.rpm pgdg 1.3 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.3 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/nominatim_fdw_14-1.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/nominatim_fdw_14-1.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/nominatim_fdw_14-1.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/nominatim_fdw_14-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel8.10.aarch64.rpm pgdg 1.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.3 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/nominatim_fdw_14-1.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/nominatim_fdw_14-1.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.0 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/nominatim_fdw_14-1.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 35.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/nominatim_fdw_14-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel9.8.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel9.7.x86_64.rpm pgdg 1.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel9.6.x86_64.rpm pgdg 1.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.2 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel9.6.x86_64.rpm pgdg 1.1.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/nominatim_fdw_14-1.1.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 34.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/nominatim_fdw_14-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel9.8.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel9.7.aarch64.rpm pgdg 1.3 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel9.6.aarch64.rpm pgdg 1.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.1.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel9.6.aarch64.rpm pgdg 1.1.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/nominatim_fdw_14-1.1.0-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-2.0.0-1PIGSTY.el10.x86_64.rpm pigsty 2.0.0 35.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/nominatim_fdw_14-2.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel10.2.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.3-2PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel10.1.x86_64.rpm pgdg 1.3 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel10.0.x86_64.rpm pgdg 1.3 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.2 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.2 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.1.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel10.0.x86_64.rpm pgdg 1.1.0 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/nominatim_fdw_14-1.1.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-2.0.0-1PIGSTY.el10.aarch64.rpm pigsty 2.0.0 35.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/nominatim_fdw_14-2.0.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel10.2.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-2PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.3-2PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.3 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 nominatim_fdw_14 nominatim_fdw_14-1.1.0-1PGDG.rhel10.0.aarch64.rpm pgdg 1.1.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/nominatim_fdw_14-1.1.0-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb pigsty 2.0.0 62.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb pigsty 2.0.0 61.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb pigsty 2.0.0 62.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb pigsty 2.0.0 60.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb pigsty 2.0.0 72.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb pigsty 2.0.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb pigsty 2.0.0 62.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb pigsty 2.0.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb pigsty 2.0.0 62.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-nominatim-fdw postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb pigsty 2.0.0 62.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/n/nominatim-fdw/postgresql-14-nominatim-fdw_2.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `nominatim_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg nominatim_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `nominatim_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
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

来源：

- [nominatim_fdw v2.0 README](https://github.com/jimjonesbr/nominatim_fdw/blob/v2.0/README.md)
- [nominatim_fdw v2.0 changelog](https://github.com/jimjonesbr/nominatim_fdw/blob/v2.0/CHANGELOG.md)
- [Extension control file](https://github.com/jimjonesbr/nominatim_fdw/blob/v2.0/nominatim_fdw.control)
- [官方Nominatim API概览](https://nominatim.org/release-docs/develop/api/Overview/)
- [OpenStreetMap Nominatim使用政策](https://operations.osmfoundation.org/policies/nominatim/)

`nominatim_fdw` 从PostgreSQL调用一个Nominatim地理编码服务。与传统的FDW不同，它暴露了用于搜索、逆向地理编码和OSM对象查找的函数；它不会创建可查询的外部表。

### 配置服务器

```sql
CREATE EXTENSION nominatim_fdw;

CREATE SERVER osm
  FOREIGN DATA WRAPPER nominatim_fdw
  OPTIONS (
    url 'https://nominatim.openstreetmap.org',
    connect_timeout '10',
    max_connect_retry '2',
    max_connect_redirect '1',
    accept_language 'en'
  );
```

公共OpenStreetMap端点有一个官方使用政策。对于持续或批量工作负载，请使用授权提供商或运行自己的Nominatim服务，根据要求标识应用程序，并遵守速率限制。

### 核心流程

自由文本搜索：

```sql
SELECT osm_id, display_name, lon, lat
FROM nominatim_search(
  server_name => 'osm',
  q => 'Neubrückenstraße 63, Münster, Germany'
);
```

逆向地理编码和对象查找：

```sql
SELECT osm_id, display_name, addressdetails
FROM nominatim_reverse(
  server_name => 'osm',
  lon => 7.6293,
  lat => 51.9648,
  addressdetails => true
);

SELECT osm_id, display_name
FROM nominatim_lookup(
  server_name => 'osm',
  osm_ids => 'W121736959'
);
```

### 重要对象

- `nominatim_search(...)` 实现了自由文本或结构化前向搜索。
- `nominatim_reverse(...)` 将经度和纬度解析为最近的合适OSM地址。
- `nominatim_lookup(...)` 获取节点、方式或关系标识符，如`N123`、`W456`或`R789`。
- `nominatim_fdw_version()` 报告扩展和主库版本。
- `nominatim_fdw_settings` 以行的形式暴露依赖和构建版本。
- 服务器选项包括`url`、代理配置、超时设置、重试和重定向限制，以及默认的`accept_language`。

所有端点函数都是`STRICT`：显式SQL中的`NULL`参数返回空结果而不发送请求。在2.0中它们正确声明为`VOLATILE`，因为响应是远程的且可以更改。

### 2.0 版本变更和注意事项

2.0版本验证逆向坐标、添加了`email`、`polygon_threshold`和`entrances`，暴露依赖设置，并修复了返回详细字段中的JSON转义。它还具有用户可见的变化：逆向输出使用`display_name`；`addressparts`变为`addressdetails`；地址细节默认为真用于逆向和查找；版本输出更短。在从1.3升级之前，请审查结果列的消费者。

每次调用都会在网络语句中执行网络I/O操作。请使用有限的超时设置，限制谁可以创建或修改服务器，并避免在一个大型查询中的每一行都调用公共服务。上游构建需要PostgreSQL 10或更高版本、libxml2 2.5或更高版本以及libcurl 7.74或更高版本。

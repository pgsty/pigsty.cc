---
title: "multicorn"
linkTitle: "multicorn"
description: "用Python编写自定义的外部数据源包装器"
weight: 8510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgsql-io/multicorn2">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgsql-io/multicorn2</div>
    <div class="ext-card__desc">https://github.com/pgsql-io/multicorn2</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/multicorn2-3.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">multicorn2-3.2.tar.gz</div>
    <div class="ext-card__desc">multicorn2-3.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`multicorn`**](/ext/e/multicorn) | `3.2` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8510  | [**`multicorn`**](/ext/e/multicorn) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`wrappers`](/ext/e/wrappers) [`odbc_fdw`](/ext/e/odbc_fdw) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`pgspider_ext`](/ext/e/pgspider_ext) [`mysql_fdw`](/ext/e/mysql_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`mongo_fdw`](/ext/e/mongo_fdw) [`redis_fdw`](/ext/e/redis_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.2` | {{< pgvers "18,17,16,15,14" >}} | `multicorn` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.2` | {{< pgvers "18,17,16,15,14" >}} | `multicorn2_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-multicorn` | `python3-multicorn` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.2 2 | AVAIL PGDG 3.2 3 | AVAIL PGDG 3.2 3 | AVAIL PGDG 3.2 5 | AVAIL PGDG 3.2 6 |
| el8.aarch64 | AVAIL PGDG 3.2 2 | AVAIL PGDG 3.2 3 | AVAIL PGDG 3.2 3 | AVAIL PGDG 3.2 5 | AVAIL PGDG 3.2 6 |
| el9.x86_64 | AVAIL PGDG 3.2 3 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 6 | AVAIL PGDG 3.2 7 |
| el9.aarch64 | AVAIL PGDG 3.2 3 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 6 | AVAIL PGDG 3.2 7 |
| el10.x86_64 | AVAIL PGDG 3.2 3 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 4 |
| el10.aarch64 | AVAIL PGDG 3.2 3 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 4 | AVAIL PGDG 3.2 4 |
| d12.x86_64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| d12.aarch64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| d13.x86_64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| d13.aarch64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| u22.x86_64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| u22.aarch64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| u24.x86_64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| u24.aarch64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| u26.x86_64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
| u26.aarch64 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 | AVAIL PIGSTY 3.2 1 |
@ el8.x86_64 18 multicorn2_18 multicorn2_18-3.2-1PGDG.rhel8.x86_64.rpm pgdg 3.2 138.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/multicorn2_18-3.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 multicorn2_18 multicorn2_18-3.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/multicorn2_18-3.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 multicorn2_18 multicorn2_18-3.2-1PGDG.rhel8.aarch64.rpm pgdg 3.2 136.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/multicorn2_18-3.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 multicorn2_18 multicorn2_18-3.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1 133.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/multicorn2_18-3.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 multicorn2_18 multicorn2_18-3.2-3PGDG.rhel9.8.x86_64.rpm pgdg 3.2 134.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/multicorn2_18-3.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 multicorn2_18 multicorn2_18-3.2-1PGDG.rhel9.x86_64.rpm pgdg 3.2 134.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/multicorn2_18-3.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 multicorn2_18 multicorn2_18-3.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/multicorn2_18-3.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 multicorn2_18 multicorn2_18-3.2-3PGDG.rhel9.8.aarch64.rpm pgdg 3.2 133.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/multicorn2_18-3.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 multicorn2_18 multicorn2_18-3.2-1PGDG.rhel9.aarch64.rpm pgdg 3.2 133.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/multicorn2_18-3.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 multicorn2_18 multicorn2_18-3.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1 110.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/multicorn2_18-3.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 multicorn2_18 multicorn2_18-3.2-3PGDG.rhel10.2.x86_64.rpm pgdg 3.2 135.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/multicorn2_18-3.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 multicorn2_18 multicorn2_18-3.2-1PGDG.rhel10.x86_64.rpm pgdg 3.2 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/multicorn2_18-3.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 multicorn2_18 multicorn2_18-3.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1 133.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/multicorn2_18-3.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 multicorn2_18 multicorn2_18-3.2-3PGDG.rhel10.2.aarch64.rpm pgdg 3.2 134.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/multicorn2_18-3.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 multicorn2_18 multicorn2_18-3.2-1PGDG.rhel10.aarch64.rpm pgdg 3.2 134.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/multicorn2_18-3.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 multicorn2_18 multicorn2_18-3.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1 131.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/multicorn2_18-3.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~bookworm_amd64.deb pigsty 3.2 81.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~bookworm_arm64.deb pigsty 3.2 79.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~trixie_amd64.deb pigsty 3.2 82.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~trixie_arm64.deb pigsty 3.2 80.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~jammy_amd64.deb pigsty 3.2 87.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~jammy_arm64.deb pigsty 3.2 86.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~noble_amd64.deb pigsty 3.2 85.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~noble_arm64.deb pigsty 3.2 84.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~resolute_amd64.deb pigsty 3.2 84.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-multicorn postgresql-18-multicorn_3.2-1PIGSTY~resolute_arm64.deb pigsty 3.2 83.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-18-multicorn_3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 multicorn2_17 multicorn2_17-3.2-1PGDG.rhel8.x86_64.rpm pgdg 3.2 138.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/multicorn2_17-3.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 multicorn2_17 multicorn2_17-3.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1 135.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/multicorn2_17-3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 multicorn2_17 multicorn2_17-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/multicorn2_17-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 multicorn2_17 multicorn2_17-3.2-1PGDG.rhel8.aarch64.rpm pgdg 3.2 136.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/multicorn2_17-3.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 multicorn2_17 multicorn2_17-3.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1 133.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/multicorn2_17-3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 multicorn2_17 multicorn2_17-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 113.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/multicorn2_17-3.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 multicorn2_17 multicorn2_17-3.2-3PGDG.rhel9.8.x86_64.rpm pgdg 3.2 134.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/multicorn2_17-3.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 multicorn2_17 multicorn2_17-3.2-1PGDG.rhel9.x86_64.rpm pgdg 3.2 134.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/multicorn2_17-3.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 multicorn2_17 multicorn2_17-3.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/multicorn2_17-3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 multicorn2_17 multicorn2_17-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 110.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/multicorn2_17-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 multicorn2_17 multicorn2_17-3.2-3PGDG.rhel9.8.aarch64.rpm pgdg 3.2 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/multicorn2_17-3.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 multicorn2_17 multicorn2_17-3.2-1PGDG.rhel9.aarch64.rpm pgdg 3.2 133.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/multicorn2_17-3.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 multicorn2_17 multicorn2_17-3.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1 109.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/multicorn2_17-3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 multicorn2_17 multicorn2_17-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 109.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/multicorn2_17-3.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 multicorn2_17 multicorn2_17-3.2-3PGDG.rhel10.2.x86_64.rpm pgdg 3.2 135.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/multicorn2_17-3.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 multicorn2_17 multicorn2_17-3.2-1PGDG.rhel10.x86_64.rpm pgdg 3.2 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/multicorn2_17-3.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 multicorn2_17 multicorn2_17-3.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1 132.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/multicorn2_17-3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 multicorn2_17 multicorn2_17-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 132.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/multicorn2_17-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 multicorn2_17 multicorn2_17-3.2-3PGDG.rhel10.2.aarch64.rpm pgdg 3.2 134.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/multicorn2_17-3.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 multicorn2_17 multicorn2_17-3.2-1PGDG.rhel10.aarch64.rpm pgdg 3.2 134.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/multicorn2_17-3.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 multicorn2_17 multicorn2_17-3.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1 132.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/multicorn2_17-3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 multicorn2_17 multicorn2_17-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 131.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/multicorn2_17-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~bookworm_amd64.deb pigsty 3.2 81.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~bookworm_arm64.deb pigsty 3.2 79.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~trixie_amd64.deb pigsty 3.2 82.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~trixie_arm64.deb pigsty 3.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~jammy_amd64.deb pigsty 3.2 106.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~jammy_arm64.deb pigsty 3.2 105.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~noble_amd64.deb pigsty 3.2 85.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~noble_arm64.deb pigsty 3.2 83.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~resolute_amd64.deb pigsty 3.2 84.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-multicorn postgresql-17-multicorn_3.2-1PIGSTY~resolute_arm64.deb pigsty 3.2 83.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-17-multicorn_3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 multicorn2_16 multicorn2_16-3.2-1PGDG.rhel8.x86_64.rpm pgdg 3.2 138.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/multicorn2_16-3.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 multicorn2_16 multicorn2_16-3.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1 135.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/multicorn2_16-3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 multicorn2_16 multicorn2_16-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/multicorn2_16-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 multicorn2_16 multicorn2_16-3.2-1PGDG.rhel8.aarch64.rpm pgdg 3.2 136.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/multicorn2_16-3.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 multicorn2_16 multicorn2_16-3.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1 134.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/multicorn2_16-3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 multicorn2_16 multicorn2_16-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 113.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/multicorn2_16-3.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 multicorn2_16 multicorn2_16-3.2-3PGDG.rhel9.8.x86_64.rpm pgdg 3.2 134.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/multicorn2_16-3.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 multicorn2_16 multicorn2_16-3.2-1PGDG.rhel9.x86_64.rpm pgdg 3.2 134.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/multicorn2_16-3.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 multicorn2_16 multicorn2_16-3.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/multicorn2_16-3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 multicorn2_16 multicorn2_16-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 110.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/multicorn2_16-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 multicorn2_16 multicorn2_16-3.2-3PGDG.rhel9.8.aarch64.rpm pgdg 3.2 133.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/multicorn2_16-3.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 multicorn2_16 multicorn2_16-3.2-1PGDG.rhel9.aarch64.rpm pgdg 3.2 133.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/multicorn2_16-3.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 multicorn2_16 multicorn2_16-3.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1 110.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/multicorn2_16-3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 multicorn2_16 multicorn2_16-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 109.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/multicorn2_16-3.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 multicorn2_16 multicorn2_16-3.2-3PGDG.rhel10.2.x86_64.rpm pgdg 3.2 135.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/multicorn2_16-3.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 multicorn2_16 multicorn2_16-3.2-1PGDG.rhel10.x86_64.rpm pgdg 3.2 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/multicorn2_16-3.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 multicorn2_16 multicorn2_16-3.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1 133.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/multicorn2_16-3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 multicorn2_16 multicorn2_16-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 132.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/multicorn2_16-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 multicorn2_16 multicorn2_16-3.2-3PGDG.rhel10.2.aarch64.rpm pgdg 3.2 134.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/multicorn2_16-3.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 multicorn2_16 multicorn2_16-3.2-1PGDG.rhel10.aarch64.rpm pgdg 3.2 134.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/multicorn2_16-3.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 multicorn2_16 multicorn2_16-3.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1 132.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/multicorn2_16-3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 multicorn2_16 multicorn2_16-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 131.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/multicorn2_16-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~bookworm_amd64.deb pigsty 3.2 81.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~bookworm_arm64.deb pigsty 3.2 79.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~trixie_amd64.deb pigsty 3.2 82.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~trixie_arm64.deb pigsty 3.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~jammy_amd64.deb pigsty 3.2 106.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~jammy_arm64.deb pigsty 3.2 105.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~noble_amd64.deb pigsty 3.2 85.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~noble_arm64.deb pigsty 3.2 84.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~resolute_amd64.deb pigsty 3.2 84.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-multicorn postgresql-16-multicorn_3.2-1PIGSTY~resolute_arm64.deb pigsty 3.2 83.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-16-multicorn_3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 multicorn2_15 multicorn2_15-3.2-1PGDG.rhel8.x86_64.rpm pgdg 3.2 139.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/multicorn2_15-3.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 multicorn2_15 multicorn2_15-3.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1 136.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/multicorn2_15-3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 multicorn2_15 multicorn2_15-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 115.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/multicorn2_15-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 multicorn2_15 multicorn2_15-2.4-2.rhel8.x86_64.rpm pgdg 2.4 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/multicorn2_15-2.4-2.rhel8.x86_64.rpm
@ el8.x86_64 15 multicorn2_15 multicorn2_15-2.4-1.rhel8.x86_64.rpm pgdg 2.4 36.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/multicorn2_15-2.4-1.rhel8.x86_64.rpm
@ el8.aarch64 15 multicorn2_15 multicorn2_15-3.2-1PGDG.rhel8.aarch64.rpm pgdg 3.2 137.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/multicorn2_15-3.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 multicorn2_15 multicorn2_15-3.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1 135.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/multicorn2_15-3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 multicorn2_15 multicorn2_15-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/multicorn2_15-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 multicorn2_15 multicorn2_15-2.4-2.rhel8.aarch64.rpm pgdg 2.4 110.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/multicorn2_15-2.4-2.rhel8.aarch64.rpm
@ el8.aarch64 15 multicorn2_15 multicorn2_15-2.4-1.rhel8.aarch64.rpm pgdg 2.4 35.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/multicorn2_15-2.4-1.rhel8.aarch64.rpm
@ el9.x86_64 15 multicorn2_15 multicorn2_15-3.2-3PGDG.rhel9.8.x86_64.rpm pgdg 3.2 138.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/multicorn2_15-3.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 multicorn2_15 multicorn2_15-3.2-1PGDG.rhel9.x86_64.rpm pgdg 3.2 138.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/multicorn2_15-3.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 multicorn2_15 multicorn2_15-3.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1 114.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/multicorn2_15-3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 multicorn2_15 multicorn2_15-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/multicorn2_15-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 multicorn2_15 multicorn2_15-2.4-2.rhel9.x86_64.rpm pgdg 2.4 109.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/multicorn2_15-2.4-2.rhel9.x86_64.rpm
@ el9.x86_64 15 multicorn2_15 multicorn2_15-2.4-1.rhel9.x86_64.rpm pgdg 2.4 37.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/multicorn2_15-2.4-1.rhel9.x86_64.rpm
@ el9.aarch64 15 multicorn2_15 multicorn2_15-3.2-3PGDG.rhel9.8.aarch64.rpm pgdg 3.2 136.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/multicorn2_15-3.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 multicorn2_15 multicorn2_15-3.2-1PGDG.rhel9.aarch64.rpm pgdg 3.2 136.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/multicorn2_15-3.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 multicorn2_15 multicorn2_15-3.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1 113.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/multicorn2_15-3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 multicorn2_15 multicorn2_15-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 112.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/multicorn2_15-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 multicorn2_15 multicorn2_15-2.4-2.rhel9.aarch64.rpm pgdg 2.4 108.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/multicorn2_15-2.4-2.rhel9.aarch64.rpm
@ el9.aarch64 15 multicorn2_15 multicorn2_15-2.4-1.rhel9.aarch64.rpm pgdg 2.4 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/multicorn2_15-2.4-1.rhel9.aarch64.rpm
@ el10.x86_64 15 multicorn2_15 multicorn2_15-3.2-3PGDG.rhel10.2.x86_64.rpm pgdg 3.2 139.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/multicorn2_15-3.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 multicorn2_15 multicorn2_15-3.2-1PGDG.rhel10.x86_64.rpm pgdg 3.2 139.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/multicorn2_15-3.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 multicorn2_15 multicorn2_15-3.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1 136.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/multicorn2_15-3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 multicorn2_15 multicorn2_15-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 135.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/multicorn2_15-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 multicorn2_15 multicorn2_15-3.2-3PGDG.rhel10.2.aarch64.rpm pgdg 3.2 137.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/multicorn2_15-3.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 multicorn2_15 multicorn2_15-3.2-1PGDG.rhel10.aarch64.rpm pgdg 3.2 137.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/multicorn2_15-3.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 multicorn2_15 multicorn2_15-3.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/multicorn2_15-3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 multicorn2_15 multicorn2_15-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 134.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/multicorn2_15-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~bookworm_amd64.deb pigsty 3.2 82.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~bookworm_arm64.deb pigsty 3.2 80.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~trixie_amd64.deb pigsty 3.2 83.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~trixie_arm64.deb pigsty 3.2 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~jammy_amd64.deb pigsty 3.2 108.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~jammy_arm64.deb pigsty 3.2 106.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~noble_amd64.deb pigsty 3.2 87.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~noble_arm64.deb pigsty 3.2 86.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~resolute_amd64.deb pigsty 3.2 86.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-multicorn postgresql-15-multicorn_3.2-1PIGSTY~resolute_arm64.deb pigsty 3.2 85.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-15-multicorn_3.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 multicorn2_14 multicorn2_14-3.2-1PGDG.rhel8.x86_64.rpm pgdg 3.2 139.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/multicorn2_14-3.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 multicorn2_14 multicorn2_14-3.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1 136.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/multicorn2_14-3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 multicorn2_14 multicorn2_14-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 115.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/multicorn2_14-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 multicorn2_14 multicorn2_14-2.4-2.rhel8.x86_64.rpm pgdg 2.4 111.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/multicorn2_14-2.4-2.rhel8.x86_64.rpm
@ el8.x86_64 14 multicorn2_14 multicorn2_14-2.4-1.rhel8.x86_64.rpm pgdg 2.4 36.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/multicorn2_14-2.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 multicorn2_14 multicorn2_14-2.3-1.rhel8.x86_64.rpm pgdg 2.3 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/multicorn2_14-2.3-1.rhel8.x86_64.rpm
@ el8.aarch64 14 multicorn2_14 multicorn2_14-3.2-1PGDG.rhel8.aarch64.rpm pgdg 3.2 137.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/multicorn2_14-3.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 multicorn2_14 multicorn2_14-3.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1 135.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/multicorn2_14-3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 multicorn2_14 multicorn2_14-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/multicorn2_14-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 multicorn2_14 multicorn2_14-2.4-2.rhel8.aarch64.rpm pgdg 2.4 110.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/multicorn2_14-2.4-2.rhel8.aarch64.rpm
@ el8.aarch64 14 multicorn2_14 multicorn2_14-2.4-1.rhel8.aarch64.rpm pgdg 2.4 35.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/multicorn2_14-2.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 multicorn2_14 multicorn2_14-2.3-1.rhel8.aarch64.rpm pgdg 2.3 113.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/multicorn2_14-2.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 multicorn2_14 multicorn2_14-3.2-3PGDG.rhel9.8.x86_64.rpm pgdg 3.2 138.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/multicorn2_14-3.2-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 multicorn2_14 multicorn2_14-3.2-1PGDG.rhel9.x86_64.rpm pgdg 3.2 138.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/multicorn2_14-3.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 multicorn2_14 multicorn2_14-3.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1 114.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/multicorn2_14-3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 multicorn2_14 multicorn2_14-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 114.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/multicorn2_14-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 multicorn2_14 multicorn2_14-2.4-2.rhel9.x86_64.rpm pgdg 2.4 109.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/multicorn2_14-2.4-2.rhel9.x86_64.rpm
@ el9.x86_64 14 multicorn2_14 multicorn2_14-2.4-1.rhel9.x86_64.rpm pgdg 2.4 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/multicorn2_14-2.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 multicorn2_14 multicorn2_14-2.3-1.rhel9.x86_64.rpm pgdg 2.3 114.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/multicorn2_14-2.3-1.rhel9.x86_64.rpm
@ el9.aarch64 14 multicorn2_14 multicorn2_14-3.2-3PGDG.rhel9.8.aarch64.rpm pgdg 3.2 136.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/multicorn2_14-3.2-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 multicorn2_14 multicorn2_14-3.2-1PGDG.rhel9.aarch64.rpm pgdg 3.2 136.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/multicorn2_14-3.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 multicorn2_14 multicorn2_14-3.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1 113.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/multicorn2_14-3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 multicorn2_14 multicorn2_14-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 112.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/multicorn2_14-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 multicorn2_14 multicorn2_14-2.4-2.rhel9.aarch64.rpm pgdg 2.4 108.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/multicorn2_14-2.4-2.rhel9.aarch64.rpm
@ el9.aarch64 14 multicorn2_14 multicorn2_14-2.4-1.rhel9.aarch64.rpm pgdg 2.4 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/multicorn2_14-2.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 multicorn2_14 multicorn2_14-2.3-1.rhel9.aarch64.rpm pgdg 2.3 113.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/multicorn2_14-2.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 multicorn2_14 multicorn2_14-3.2-3PGDG.rhel10.2.x86_64.rpm pgdg 3.2 139.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/multicorn2_14-3.2-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 multicorn2_14 multicorn2_14-3.2-1PGDG.rhel10.x86_64.rpm pgdg 3.2 139.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/multicorn2_14-3.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 multicorn2_14 multicorn2_14-3.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1 136.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/multicorn2_14-3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 multicorn2_14 multicorn2_14-3.0-2PGDG.rhel10.x86_64.rpm pgdg 3.0 136.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/multicorn2_14-3.0-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 multicorn2_14 multicorn2_14-3.2-3PGDG.rhel10.2.aarch64.rpm pgdg 3.2 137.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/multicorn2_14-3.2-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 multicorn2_14 multicorn2_14-3.2-1PGDG.rhel10.aarch64.rpm pgdg 3.2 137.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/multicorn2_14-3.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 multicorn2_14 multicorn2_14-3.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/multicorn2_14-3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 multicorn2_14 multicorn2_14-3.0-2PGDG.rhel10.aarch64.rpm pgdg 3.0 134.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/multicorn2_14-3.0-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~bookworm_amd64.deb pigsty 3.2 82.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~bookworm_arm64.deb pigsty 3.2 80.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~trixie_amd64.deb pigsty 3.2 83.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~trixie_arm64.deb pigsty 3.2 81.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~jammy_amd64.deb pigsty 3.2 108.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~jammy_arm64.deb pigsty 3.2 107.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~noble_amd64.deb pigsty 3.2 87.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~noble_arm64.deb pigsty 3.2 86.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~resolute_amd64.deb pigsty 3.2 86.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-multicorn postgresql-14-multicorn_3.2-1PIGSTY~resolute_arm64.deb pigsty 3.2 85.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/multicorn/postgresql-14-multicorn_3.2-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `multicorn` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install multicorn;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y multicorn -v 18  # PG 18
pig ext install -y multicorn -v 17  # PG 17
pig ext install -y multicorn -v 16  # PG 16
pig ext install -y multicorn -v 15  # PG 15
pig ext install -y multicorn -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y multicorn2_18       # PG 18
dnf install -y multicorn2_17       # PG 17
dnf install -y multicorn2_16       # PG 16
dnf install -y multicorn2_15       # PG 15
dnf install -y multicorn2_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-multicorn   # PG 18
apt install -y postgresql-17-multicorn   # PG 17
apt install -y postgresql-16-multicorn   # PG 16
apt install -y postgresql-15-multicorn   # PG 15
apt install -y postgresql-14-multicorn   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION multicorn;
```




## 用法

来源：[README](https://github.com/pgsql-io/multicorn2/blob/v3.2/README.md)、[CHANGELOG](https://github.com/pgsql-io/multicorn2/blob/v3.2/CHANGELOG)

Multicorn2 允许您用 Python 编写外部数据包装器。您需要实现一个继承自 `multicorn.ForeignDataWrapper` 的 Python 类，Multicorn 负责将其桥接到 PostgreSQL 的 FDW 接口。版本 3.2 已使用 PostgreSQL 14-18 和 Python 3.9-3.13 测试，不过上游建议近期待发行版兼容性优先使用 Python 3.10-3.12。

### 定义 Python FDW 类

创建一个 PostgreSQL 进程可访问的 Python 模块（例如 `myfdw.py`）：

```python
from multicorn import ForeignDataWrapper

class MyFDW(ForeignDataWrapper):
    def __init__(self, options, columns):
        super().__init__(options, columns)
        self.options = options
        self.columns = columns

    def execute(self, quals, columns):
        """以字典形式返回行。quals 包含 WHERE 下推信息。"""
        yield {"id": 1, "name": "example"}

    def insert(self, new_values):
        """处理 INSERT 操作。"""
        pass

    def update(self, old_values, new_values):
        """处理 UPDATE 操作。"""
        pass

    def delete(self, old_values):
        """处理 DELETE 操作。"""
        pass
```

### 创建服务器和外部表

```sql
CREATE EXTENSION multicorn;

CREATE SERVER multicorn_srv FOREIGN DATA WRAPPER multicorn
  OPTIONS (wrapper 'myfdw.MyFDW');

CREATE FOREIGN TABLE my_table (
  id integer,
  name text
)
SERVER multicorn_srv
OPTIONS (
  option1 'value1'
);

SELECT * FROM my_table;
```

`wrapper` 选项指定完全限定的 Python 类名。任何额外选项都会传递给类构造函数的 `options` 参数。

### 内置 FDW 示例

Multicorn 附带了几个可以直接使用或作为参考的 FDW 实现：

- **CsvFdw** -- 读取 CSV 文件
- **ProcessFdw** -- 执行系统命令并解析输出
- **GCalFdw** -- 访问 Google 日历
- **ImapFdw** -- 查询 IMAP 邮箱
- **RssFdw** -- 读取 RSS/Atom 订阅

```sql
CREATE SERVER csv_srv FOREIGN DATA WRAPPER multicorn
  OPTIONS (wrapper 'multicorn.csvfdw.CsvFdw');

CREATE FOREIGN TABLE csvtest (
  col1 text,
  col2 text
)
SERVER csv_srv
OPTIONS (
  filename '/tmp/data.csv',
  skip_header '1',
  delimiter ','
);
```

### 版本说明

Multicorn 3.2 增加基本 OFFSET/LIMIT pushdown 和 LDAP paging support，并修复 LDAP right-parenthesis escaping。上游 3.1 增加 PostgreSQL 18 和 Python 3.13 支持，同时停止支持 PostgreSQL 14 之前的版本。

### 注意事项

由于 CPython 限制，Multicorn2 和 PL/Python 在 Python 3.12 上不能在同一个 PostgreSQL 数据库中共存。它们可以安装在同一系统上，但避免在同一个数据库里同时启用。

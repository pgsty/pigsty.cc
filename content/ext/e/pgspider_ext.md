---
title: "pgspider_ext"
linkTitle: "pgspider_ext"
description: "使用多种FDW访问远程数据库服务器"
weight: 8540
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgspider/pgspider_ext">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgspider/pgspider_ext</div>
    <div class="ext-card__desc">https://github.com/pgspider/pgspider_ext</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgspider_ext-1.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgspider_ext-1.3.0.tar.gz</div>
    <div class="ext-card__desc">pgspider_ext-1.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgspider_ext`**](/ext/e/pgspider_ext) | `1.3.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8540  | [**`pgspider_ext`**](/ext/e/pgspider_ext) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plproxy`](/ext/e/plproxy) [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`postgres_fdw`](/ext/e/postgres_fdw) [`citus`](/ext/e/citus) [`mysql_fdw`](/ext/e/mysql_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`mongo_fdw`](/ext/e/mongo_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.0` | {{< pgvers "17,16,15" >}} | `pgspider_ext` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.0` | {{< pgvers "17,16,15" >}} | `pgspider_ext_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.0` | {{< pgvers "17,16,15" >}} | `postgresql-$v-pgspider-ext` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | MISS PGDG - 0 |
| el8.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | MISS PGDG - 0 |
| el9.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | MISS PGDG - 0 |
| el9.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | MISS PGDG - 0 |
| el10.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | MISS PGDG - 0 |
| el10.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | AVAIL PGDG 1.3.0 1 | MISS PGDG - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | MISS PIGSTY - 0 |
@ el8.x86_64 17 pgspider_ext_17 pgspider_ext_17-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 28.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgspider_ext_17-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgspider_ext_17 pgspider_ext_17-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgspider_ext_17-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgspider_ext_17 pgspider_ext_17-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgspider_ext_17-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgspider_ext_17 pgspider_ext_17-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgspider_ext_17-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgspider_ext_17 pgspider_ext_17-1.3.0-1PGDG.rhel10.x86_64.rpm pgdg 1.3.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgspider_ext_17-1.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgspider_ext_17 pgspider_ext_17-1.3.0-1PGDG.rhel10.aarch64.rpm pgdg 1.3.0 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgspider_ext_17-1.3.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~bookworm_amd64.deb pigsty 1.3.0 48.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~bookworm_arm64.deb pigsty 1.3.0 47.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~trixie_amd64.deb pigsty 1.3.0 48.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~trixie_arm64.deb pigsty 1.3.0 47.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~jammy_amd64.deb pigsty 1.3.0 61.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~jammy_arm64.deb pigsty 1.3.0 60.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~noble_amd64.deb pigsty 1.3.0 50.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~noble_arm64.deb pigsty 1.3.0 49.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~resolute_amd64.deb pigsty 1.3.0 50.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgspider-ext postgresql-17-pgspider-ext_1.3.0-1PIGSTY~resolute_arm64.deb pigsty 1.3.0 49.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgspider-ext/postgresql-17-pgspider-ext_1.3.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgspider_ext_16 pgspider_ext_16-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 28.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgspider_ext_16-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgspider_ext_16 pgspider_ext_16-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgspider_ext_16-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgspider_ext_16 pgspider_ext_16-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgspider_ext_16-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgspider_ext_16 pgspider_ext_16-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 28.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgspider_ext_16-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgspider_ext_16 pgspider_ext_16-1.3.0-1PGDG.rhel10.x86_64.rpm pgdg 1.3.0 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgspider_ext_16-1.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgspider_ext_16 pgspider_ext_16-1.3.0-1PGDG.rhel10.aarch64.rpm pgdg 1.3.0 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgspider_ext_16-1.3.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~bookworm_amd64.deb pigsty 1.3.0 48.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~bookworm_arm64.deb pigsty 1.3.0 47.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~trixie_amd64.deb pigsty 1.3.0 48.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~trixie_arm64.deb pigsty 1.3.0 47.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~jammy_amd64.deb pigsty 1.3.0 61.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~jammy_arm64.deb pigsty 1.3.0 60.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~noble_amd64.deb pigsty 1.3.0 50.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~noble_arm64.deb pigsty 1.3.0 49.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~resolute_amd64.deb pigsty 1.3.0 50.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgspider-ext postgresql-16-pgspider-ext_1.3.0-1PIGSTY~resolute_arm64.deb pigsty 1.3.0 49.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgspider-ext/postgresql-16-pgspider-ext_1.3.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgspider_ext_15 pgspider_ext_15-1.3.0-1PGDG.rhel8.x86_64.rpm pgdg 1.3.0 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgspider_ext_15-1.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pgspider_ext_15 pgspider_ext_15-1.3.0-1PGDG.rhel8.aarch64.rpm pgdg 1.3.0 28.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgspider_ext_15-1.3.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pgspider_ext_15 pgspider_ext_15-1.3.0-1PGDG.rhel9.x86_64.rpm pgdg 1.3.0 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgspider_ext_15-1.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pgspider_ext_15 pgspider_ext_15-1.3.0-1PGDG.rhel9.aarch64.rpm pgdg 1.3.0 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgspider_ext_15-1.3.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgspider_ext_15 pgspider_ext_15-1.3.0-1PGDG.rhel10.x86_64.rpm pgdg 1.3.0 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgspider_ext_15-1.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgspider_ext_15 pgspider_ext_15-1.3.0-1PGDG.rhel10.aarch64.rpm pgdg 1.3.0 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgspider_ext_15-1.3.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~bookworm_amd64.deb pigsty 1.3.0 48.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~bookworm_arm64.deb pigsty 1.3.0 47.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~trixie_amd64.deb pigsty 1.3.0 49.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~trixie_arm64.deb pigsty 1.3.0 47.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~jammy_amd64.deb pigsty 1.3.0 61.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~jammy_arm64.deb pigsty 1.3.0 60.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~noble_amd64.deb pigsty 1.3.0 51.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~noble_arm64.deb pigsty 1.3.0 49.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~resolute_amd64.deb pigsty 1.3.0 50.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgspider-ext postgresql-15-pgspider-ext_1.3.0-1PIGSTY~resolute_arm64.deb pigsty 1.3.0 49.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgspider-ext/postgresql-15-pgspider-ext_1.3.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgspider_ext` 扩展的 DEB 包：

```bash
pig build pkg pgspider_ext         # 构建 DEB 包
```


## 安装

您可以直接安装 `pgspider_ext` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgspider_ext;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgspider_ext -v 17  # PG 17
pig ext install -y pgspider_ext -v 16  # PG 16
pig ext install -y pgspider_ext -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgspider_ext_17       # PG 17
dnf install -y pgspider_ext_16       # PG 16
dnf install -y pgspider_ext_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-pgspider-ext   # PG 17
apt install -y postgresql-16-pgspider-ext   # PG 16
apt install -y postgresql-15-pgspider-ext   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgspider_ext;
```



## 用法

> [pgspider_ext: 用于远程 PGSpider 服务器的外部数据包装器](https://github.com/pgspider/pgspider_ext)

PGSpider 扩展将 PostgreSQL 变为分布式查询引擎，通过创建虚拟分区表，透明地并行查询多个远程节点的数据。

### 设置子服务器

首先，使用各自的 FDW 为每个数据源创建服务器：

```sql
CREATE EXTENSION pgspider_ext;
CREATE EXTENSION postgres_fdw;

CREATE SERVER pgsrv1 FOREIGN DATA WRAPPER postgres_fdw
  OPTIONS (host '127.0.0.1', port '5433', dbname 'postgres');
CREATE SERVER pgsrv2 FOREIGN DATA WRAPPER postgres_fdw
  OPTIONS (host '127.0.0.1', port '5434', dbname 'postgres');

CREATE USER MAPPING FOR CURRENT_USER SERVER pgsrv1
  OPTIONS (user 'user', password 'pass');
CREATE USER MAPPING FOR CURRENT_USER SERVER pgsrv2
  OPTIONS (user 'user', password 'pass');
```

### 创建子外部表

```sql
CREATE FOREIGN TABLE t1_pg1_child (i int, t text)
  SERVER pgsrv1 OPTIONS (table_name 't1');
CREATE FOREIGN TABLE t1_pg2_child (i int, t text)
  SERVER pgsrv2 OPTIONS (table_name 't1');
```

### 创建 PGSpider 分区表

创建 PGSpider 服务器和带有额外分区键列的分区父表：

```sql
CREATE SERVER spdsrv FOREIGN DATA WRAPPER pgspider_ext;
CREATE USER MAPPING FOR CURRENT_USER SERVER spdsrv;

CREATE TABLE t1 (i int, t text, node text)
  PARTITION BY LIST (node);

CREATE FOREIGN TABLE t1_pg1 PARTITION OF t1
  FOR VALUES IN ('node1') SERVER spdsrv;
CREATE FOREIGN TABLE t1_pg2 PARTITION OF t1
  FOR VALUES IN ('node2') SERVER spdsrv
  OPTIONS (child_name 't1_pg2_child');
```

默认情况下，PGSpider 使用 `[父表名]_child` 模式查找子表。使用 `child_name` 指定不同的名称。

### 跨所有节点查询

```sql
SELECT * FROM t1;
 i  | t | node
----+---+-------
 10 | a | node1
 11 | b | node1
 20 | c | node2
 21 | d | node2
```

查询会自动并行分发到所有子节点。WHERE 子句和聚合函数会下推到子节点：

```sql
SET enable_partitionwise_aggregate TO on;
SELECT count(*), node FROM t1 GROUP BY node;
```

**注意：** 仅支持 SELECT 操作；不支持 INSERT、UPDATE 和 DELETE。

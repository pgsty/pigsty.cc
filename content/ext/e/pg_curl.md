---
title: "pg_curl"
linkTitle: "pg_curl"
description: "封装CURL，执行各种用URL传输数据的操作"
weight: 4090
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/RekGRpth/pg_curl">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">RekGRpth/pg_curl</div>
    <div class="ext-card__desc">https://github.com/RekGRpth/pg_curl</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_curl-2.4.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_curl-2.4.6.tar.gz</div>
    <div class="ext-card__desc">pg_curl-2.4.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_curl`**](/ext/e/pg_curl) | `2.4.6` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4090  | [**`pg_curl`**](/ext/e/pg_curl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`omni_httpc`](/ext/e/omni_httpc) [`pg_graphql`](/ext/e/pg_graphql) [`documentdb`](/ext/e/documentdb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Package 2.4.6; SQL control version 2.4.1. Retains the 2.4 to 2.4.1 SQL compatibility edge.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_curl` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_curl_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-curl` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.4.6 3 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 4 |
| el8.aarch64 | AVAIL PIGSTY 2.4.6 3 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 4 |
| el9.x86_64 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 |
| el9.aarch64 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 |
| el10.x86_64 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 |
| el10.aarch64 | AVAIL PIGSTY 2.4.6 4 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 | AVAIL PIGSTY 2.4.6 5 |
| d12.x86_64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| d12.aarch64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| d13.x86_64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| d13.aarch64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| u22.x86_64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| u22.aarch64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| u24.x86_64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| u24.aarch64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| u26.x86_64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
| u26.aarch64 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 | AVAIL PIGSTY 2.4.6 1 |
@ el8.x86_64 18 pg_curl_18 pg_curl_18-2.4.6-1PGSTY.el8.x86_64.rpm pigsty 2.4.6 124.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_18-2.4.6-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_curl_18-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_curl_18-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_curl_18 pg_curl_18-2.4.6-1PGSTY.el8.aarch64.rpm pigsty 2.4.6 122.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_18-2.4.6-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_curl_18-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_curl_18-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_curl_18 pg_curl_18-2.4.6-1PGSTY.el9.x86_64.rpm pigsty 2.4.6 124.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_18-2.4.6-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_curl_18-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_curl_18-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_curl_18-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_curl_18 pg_curl_18-2.4.6-1PGSTY.el9.aarch64.rpm pigsty 2.4.6 124.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_18-2.4.6-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_curl_18-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_curl_18-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_curl_18-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_curl_18 pg_curl_18-2.4.6-1PGSTY.el10.x86_64.rpm pigsty 2.4.6 126.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_18-2.4.6-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_curl_18-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_curl_18-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_curl_18-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_curl_18 pg_curl_18-2.4.6-1PGSTY.el10.aarch64.rpm pigsty 2.4.6 125.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_18-2.4.6-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_curl_18-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_curl_18-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_curl_18-2.4.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb pigsty 2.4.6 107.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb pigsty 2.4.6 105.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb pigsty 2.4.6 107.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb pigsty 2.4.6 106.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb pigsty 2.4.6 122.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb pigsty 2.4.6 120.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~noble_amd64.deb pigsty 2.4.6 115.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~noble_arm64.deb pigsty 2.4.6 114.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb pigsty 2.4.6 121.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb pigsty 2.4.6 120.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-18-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_curl_17 pg_curl_17-2.4.6-1PGSTY.el8.x86_64.rpm pigsty 2.4.6 124.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_17-2.4.6-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_curl_17-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_curl_17-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_curl_17 pg_curl_17-2.4.3-1PGDG.rhel8.x86_64.rpm pgdg 2.4.3 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_curl_17-2.4.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_curl_17 pg_curl_17-2.4.6-1PGSTY.el8.aarch64.rpm pigsty 2.4.6 122.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_17-2.4.6-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_curl_17-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_curl_17-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_curl_17 pg_curl_17-2.4.3-1PGDG.rhel8.aarch64.rpm pgdg 2.4.3 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_curl_17-2.4.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.6-1PGSTY.el9.x86_64.rpm pigsty 2.4.6 124.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_17-2.4.6-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_curl_17-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_curl_17-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_curl_17-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.3-1PGDG.rhel9.x86_64.rpm pgdg 2.4.3 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_curl_17-2.4.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.6-1PGSTY.el9.aarch64.rpm pigsty 2.4.6 124.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_17-2.4.6-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_curl_17-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_curl_17-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_curl_17-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.3-1PGDG.rhel9.aarch64.rpm pgdg 2.4.3 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_curl_17-2.4.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.6-1PGSTY.el10.x86_64.rpm pigsty 2.4.6 125.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_17-2.4.6-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_curl_17-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_curl_17-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_curl_17-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.3-2PGDG.rhel10.x86_64.rpm pgdg 2.4.3 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_curl_17-2.4.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.6-1PGSTY.el10.aarch64.rpm pigsty 2.4.6 125.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_17-2.4.6-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 46.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_curl_17-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_curl_17-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_curl_17-2.4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.3-2PGDG.rhel10.aarch64.rpm pgdg 2.4.3 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_curl_17-2.4.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb pigsty 2.4.6 107.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb pigsty 2.4.6 105.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb pigsty 2.4.6 109.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb pigsty 2.4.6 106.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb pigsty 2.4.6 125.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb pigsty 2.4.6 123.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~noble_amd64.deb pigsty 2.4.6 115.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~noble_arm64.deb pigsty 2.4.6 114.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb pigsty 2.4.6 121.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb pigsty 2.4.6 120.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-17-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_curl_16 pg_curl_16-2.4.6-1PGSTY.el8.x86_64.rpm pigsty 2.4.6 124.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_16-2.4.6-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_curl_16-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_curl_16-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_curl_16 pg_curl_16-2.4.3-1PGDG.rhel8.x86_64.rpm pgdg 2.4.3 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_curl_16-2.4.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_curl_16 pg_curl_16-2.4.6-1PGSTY.el8.aarch64.rpm pigsty 2.4.6 122.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_16-2.4.6-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_curl_16-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_curl_16-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_curl_16 pg_curl_16-2.4.3-1PGDG.rhel8.aarch64.rpm pgdg 2.4.3 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_curl_16-2.4.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.6-1PGSTY.el9.x86_64.rpm pigsty 2.4.6 124.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_16-2.4.6-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_curl_16-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_curl_16-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_curl_16-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.3-1PGDG.rhel9.x86_64.rpm pgdg 2.4.3 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_curl_16-2.4.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.6-1PGSTY.el9.aarch64.rpm pigsty 2.4.6 124.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_16-2.4.6-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_curl_16-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_curl_16-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_curl_16-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.3-1PGDG.rhel9.aarch64.rpm pgdg 2.4.3 44.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_curl_16-2.4.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.6-1PGSTY.el10.x86_64.rpm pigsty 2.4.6 126.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_16-2.4.6-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_curl_16-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_curl_16-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_curl_16-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.3-2PGDG.rhel10.x86_64.rpm pgdg 2.4.3 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_curl_16-2.4.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.6-1PGSTY.el10.aarch64.rpm pigsty 2.4.6 125.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_16-2.4.6-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 46.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_curl_16-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_curl_16-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_curl_16-2.4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.3-2PGDG.rhel10.aarch64.rpm pgdg 2.4.3 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_curl_16-2.4.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb pigsty 2.4.6 108.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb pigsty 2.4.6 105.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb pigsty 2.4.6 107.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb pigsty 2.4.6 106.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb pigsty 2.4.6 125.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb pigsty 2.4.6 123.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~noble_amd64.deb pigsty 2.4.6 115.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~noble_arm64.deb pigsty 2.4.6 114.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb pigsty 2.4.6 121.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb pigsty 2.4.6 120.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-16-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_curl_15 pg_curl_15-2.4.6-1PGSTY.el8.x86_64.rpm pigsty 2.4.6 124.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_15-2.4.6-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_curl_15-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_curl_15-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_curl_15 pg_curl_15-2.4.3-1PGDG.rhel8.x86_64.rpm pgdg 2.4.3 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_curl_15-2.4.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_curl_15 pg_curl_15-2.4.6-1PGSTY.el8.aarch64.rpm pigsty 2.4.6 122.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_15-2.4.6-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_curl_15-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_curl_15-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_curl_15 pg_curl_15-2.4.3-1PGDG.rhel8.aarch64.rpm pgdg 2.4.3 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_curl_15-2.4.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.6-1PGSTY.el9.x86_64.rpm pigsty 2.4.6 125.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_15-2.4.6-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_curl_15-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_curl_15-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_curl_15-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.3-1PGDG.rhel9.x86_64.rpm pgdg 2.4.3 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_curl_15-2.4.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.6-1PGSTY.el9.aarch64.rpm pigsty 2.4.6 124.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_15-2.4.6-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_curl_15-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_curl_15-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_curl_15-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.3-1PGDG.rhel9.aarch64.rpm pgdg 2.4.3 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_curl_15-2.4.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.6-1PGSTY.el10.x86_64.rpm pigsty 2.4.6 126.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_15-2.4.6-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_curl_15-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_curl_15-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_curl_15-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.3-2PGDG.rhel10.x86_64.rpm pgdg 2.4.3 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_curl_15-2.4.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.6-1PGSTY.el10.aarch64.rpm pigsty 2.4.6 125.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_15-2.4.6-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_curl_15-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_curl_15-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_curl_15-2.4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.3-2PGDG.rhel10.aarch64.rpm pgdg 2.4.3 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_curl_15-2.4.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb pigsty 2.4.6 107.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb pigsty 2.4.6 105.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb pigsty 2.4.6 107.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb pigsty 2.4.6 105.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb pigsty 2.4.6 125.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb pigsty 2.4.6 123.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~noble_amd64.deb pigsty 2.4.6 115.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~noble_arm64.deb pigsty 2.4.6 115.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb pigsty 2.4.6 121.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb pigsty 2.4.6 120.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-15-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_curl_14 pg_curl_14-2.4.6-1PGSTY.el8.x86_64.rpm pigsty 2.4.6 124.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_14-2.4.6-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_curl_14-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_curl_14-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_curl_14 pg_curl_14-2.4.3-1PGDG.rhel8.x86_64.rpm pgdg 2.4.3 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_curl_14-2.4.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_curl_14 pg_curl_14-2.4.6-1PGSTY.el8.aarch64.rpm pigsty 2.4.6 122.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_14-2.4.6-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_curl_14-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_curl_14-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_curl_14 pg_curl_14-2.4.3-1PGDG.rhel8.aarch64.rpm pgdg 2.4.3 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_curl_14-2.4.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.6-1PGSTY.el9.x86_64.rpm pigsty 2.4.6 125.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_14-2.4.6-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_curl_14-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_curl_14-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_curl_14-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.3-1PGDG.rhel9.x86_64.rpm pgdg 2.4.3 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_curl_14-2.4.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.6-1PGSTY.el9.aarch64.rpm pigsty 2.4.6 124.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_14-2.4.6-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_curl_14-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_curl_14-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_curl_14-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.3-1PGDG.rhel9.aarch64.rpm pgdg 2.4.3 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_curl_14-2.4.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.6-1PGSTY.el10.x86_64.rpm pigsty 2.4.6 126.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_14-2.4.6-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_curl_14-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_curl_14-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_curl_14-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.3-2PGDG.rhel10.x86_64.rpm pgdg 2.4.3 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_curl_14-2.4.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.6-1PGSTY.el10.aarch64.rpm pigsty 2.4.6 125.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_14-2.4.6-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 46.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_curl_14-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_curl_14-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_curl_14-2.4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.3-2PGDG.rhel10.aarch64.rpm pgdg 2.4.3 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_curl_14-2.4.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb pigsty 2.4.6 107.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb pigsty 2.4.6 105.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb pigsty 2.4.6 107.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb pigsty 2.4.6 105.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb pigsty 2.4.6 125.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb pigsty 2.4.6 123.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~noble_amd64.deb pigsty 2.4.6 115.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~noble_arm64.deb pigsty 2.4.6 115.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb pigsty 2.4.6 121.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb pigsty 2.4.6 121.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-14-pg-curl_2.4.6-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_curl` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_curl         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_curl` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_curl;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_curl -v 18  # PG 18
pig ext install -y pg_curl -v 17  # PG 17
pig ext install -y pg_curl -v 16  # PG 16
pig ext install -y pg_curl -v 15  # PG 15
pig ext install -y pg_curl -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_curl_18       # PG 18
dnf install -y pg_curl_17       # PG 17
dnf install -y pg_curl_16       # PG 16
dnf install -y pg_curl_15       # PG 15
dnf install -y pg_curl_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-curl   # PG 18
apt install -y postgresql-17-pg-curl   # PG 17
apt install -y postgresql-16-pg-curl   # PG 16
apt install -y postgresql-15-pg-curl   # PG 15
apt install -y postgresql-14-pg-curl   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_curl;
```




## 用法


```sql
CREATE EXTENSION pg_curl;
```

执行 HTTP Get 请求：

```sql
-- 封装 curl http get 请求
CREATE OR REPLACE FUNCTION get(url TEXT) RETURNS TEXT LANGUAGE SQL AS $BODY$
WITH s AS (SELECT
               curl_easy_reset(),
               curl_easy_setopt_url(url),
               curl_easy_perform(),
               curl_easy_getinfo_data_in()
) SELECT convert_from(curl_easy_getinfo_data_in, 'utf-8') FROM s;
$BODY$;


SELECT get('https://www.postgresql.org/');
```


通过 SMTP 发送邮件：

```bash
CREATE OR REPLACE FUNCTION email(url TEXT, username TEXT, password TEXT, subject TEXT, sender TEXT, recipient TEXT, body TEXT, type TEXT) RETURNS TEXT LANGUAGE SQL AS $BODY$
    WITH s AS (SELECT
        curl_easy_reset(),
        curl_easy_setopt_mail_from(sender),
        curl_easy_setopt_password(password),
        curl_easy_setopt_url(url),
        curl_easy_setopt_username(username),
        curl_header_append('From', sender),
        curl_header_append('Subject', subject),
        curl_header_append('To', recipient),
        curl_mime_data(body, type:=type),
        curl_recipient_append(recipient),
        curl_easy_perform(),
        curl_easy_getinfo_header_in()
    ) SELECT curl_easy_getinfo_header_in FROM s;
$BODY$;
```

通过 FTP 下载文件：

```sql
CREATE OR REPLACE FUNCTION download(url TEXT, username TEXT, password TEXT) RETURNS BYTEA LANGUAGE SQL AS $BODY$
    WITH s AS (SELECT
        curl_easy_reset(),
        curl_easy_setopt_password(password),
        curl_easy_setopt_url(url),
        curl_easy_setopt_username(username),
        curl_easy_perform(),
        curl_easy_getinfo_data_in()
    ) SELECT curl_easy_getinfo_data_in FROM s;
$BODY$;
```

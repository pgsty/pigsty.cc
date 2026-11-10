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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_curl-2.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_curl-2.5.0.tar.gz</div>
    <div class="ext-card__desc">pg_curl-2.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_curl`**](/ext/e/pg_curl) | `2.5.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4090  | [**`pg_curl`**](/ext/e/pg_curl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`omni_httpc`](/ext/e/omni_httpc) [`pg_graphql`](/ext/e/pg_graphql) [`documentdb`](/ext/e/documentdb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> SQL 2.5; no upstream 2.4.1 upgrade edge.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_curl` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_curl_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-curl` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.5.0 3 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 4 |
| el8.aarch64 | AVAIL PIGSTY 2.5.0 3 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 4 |
| el9.x86_64 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 |
| el9.aarch64 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 |
| el10.x86_64 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 |
| el10.aarch64 | AVAIL PIGSTY 2.5.0 4 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 | AVAIL PIGSTY 2.5.0 5 |
| d12.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
@ el8.x86_64 18 pg_curl_18 pg_curl_18-2.5.0-2PGSTY.el8.x86_64.rpm pigsty 2.5.0 136.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_18-2.5.0-2PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_curl_18-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_curl_18-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_curl_18 pg_curl_18-2.5.0-2PGSTY.el8.aarch64.rpm pigsty 2.5.0 133.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_18-2.5.0-2PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_curl_18-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_curl_18-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_curl_18 pg_curl_18-2.5.0-2PGSTY.el9.x86_64.rpm pigsty 2.5.0 139.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_18-2.5.0-2PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_curl_18-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_curl_18-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_curl_18-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_curl_18 pg_curl_18-2.5.0-2PGSTY.el9.aarch64.rpm pigsty 2.5.0 137.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_18-2.5.0-2PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_curl_18-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_curl_18-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_curl_18-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_curl_18 pg_curl_18-2.5.0-2PGSTY.el10.x86_64.rpm pigsty 2.5.0 142.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_18-2.5.0-2PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_curl_18-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_curl_18-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_curl_18-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_curl_18 pg_curl_18-2.5.0-2PGSTY.el10.aarch64.rpm pigsty 2.5.0 140.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_18-2.5.0-2PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_curl_18 pg_curl_18-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_curl_18-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_curl_18-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_curl_18 pg_curl_18-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_curl_18-2.4.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb pigsty 2.5.0 122.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb pigsty 2.5.0 120.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb pigsty 2.5.0 123.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb pigsty 2.5.0 120.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb pigsty 2.5.0 138.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb pigsty 2.5.0 135.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~noble_amd64.deb pigsty 2.5.0 131.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~noble_arm64.deb pigsty 2.5.0 130.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb pigsty 2.5.0 133.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-curl postgresql-18-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb pigsty 2.5.0 132.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-18-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_curl_17 pg_curl_17-2.5.0-2PGSTY.el8.x86_64.rpm pigsty 2.5.0 136.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_17-2.5.0-2PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_curl_17-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_curl_17-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_curl_17 pg_curl_17-2.4.3-1PGDG.rhel8.x86_64.rpm pgdg 2.4.3 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_curl_17-2.4.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_curl_17 pg_curl_17-2.5.0-2PGSTY.el8.aarch64.rpm pigsty 2.5.0 133.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_17-2.5.0-2PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_curl_17-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_curl_17-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_curl_17 pg_curl_17-2.4.3-1PGDG.rhel8.aarch64.rpm pgdg 2.4.3 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_curl_17-2.4.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.5.0-2PGSTY.el9.x86_64.rpm pigsty 2.5.0 139.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_17-2.5.0-2PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_curl_17-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_curl_17-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_curl_17-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_curl_17 pg_curl_17-2.4.3-1PGDG.rhel9.x86_64.rpm pgdg 2.4.3 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_curl_17-2.4.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.5.0-2PGSTY.el9.aarch64.rpm pigsty 2.5.0 137.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_17-2.5.0-2PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_curl_17-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_curl_17-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_curl_17-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_curl_17 pg_curl_17-2.4.3-1PGDG.rhel9.aarch64.rpm pgdg 2.4.3 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_curl_17-2.4.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.5.0-2PGSTY.el10.x86_64.rpm pigsty 2.5.0 142.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_17-2.5.0-2PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_curl_17-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_curl_17-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_curl_17-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_curl_17 pg_curl_17-2.4.3-2PGDG.rhel10.x86_64.rpm pgdg 2.4.3 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_curl_17-2.4.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.5.0-2PGSTY.el10.aarch64.rpm pigsty 2.5.0 140.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_17-2.5.0-2PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 46.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_curl_17-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_curl_17-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_curl_17-2.4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_curl_17 pg_curl_17-2.4.3-2PGDG.rhel10.aarch64.rpm pgdg 2.4.3 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_curl_17-2.4.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb pigsty 2.5.0 122.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb pigsty 2.5.0 120.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb pigsty 2.5.0 123.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb pigsty 2.5.0 120.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb pigsty 2.5.0 141.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb pigsty 2.5.0 139.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~noble_amd64.deb pigsty 2.5.0 131.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~noble_arm64.deb pigsty 2.5.0 130.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb pigsty 2.5.0 133.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-curl postgresql-17-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb pigsty 2.5.0 132.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-17-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_curl_16 pg_curl_16-2.5.0-2PGSTY.el8.x86_64.rpm pigsty 2.5.0 136.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_16-2.5.0-2PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_curl_16-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_curl_16-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_curl_16 pg_curl_16-2.4.3-1PGDG.rhel8.x86_64.rpm pgdg 2.4.3 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_curl_16-2.4.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_curl_16 pg_curl_16-2.5.0-2PGSTY.el8.aarch64.rpm pigsty 2.5.0 133.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_16-2.5.0-2PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_curl_16-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_curl_16-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_curl_16 pg_curl_16-2.4.3-1PGDG.rhel8.aarch64.rpm pgdg 2.4.3 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_curl_16-2.4.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.5.0-2PGSTY.el9.x86_64.rpm pigsty 2.5.0 139.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_16-2.5.0-2PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_curl_16-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_curl_16-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_curl_16-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_curl_16 pg_curl_16-2.4.3-1PGDG.rhel9.x86_64.rpm pgdg 2.4.3 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_curl_16-2.4.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.5.0-2PGSTY.el9.aarch64.rpm pigsty 2.5.0 137.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_16-2.5.0-2PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_curl_16-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_curl_16-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_curl_16-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_curl_16 pg_curl_16-2.4.3-1PGDG.rhel9.aarch64.rpm pgdg 2.4.3 44.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_curl_16-2.4.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.5.0-2PGSTY.el10.x86_64.rpm pigsty 2.5.0 142.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_16-2.5.0-2PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_curl_16-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_curl_16-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_curl_16-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_curl_16 pg_curl_16-2.4.3-2PGDG.rhel10.x86_64.rpm pgdg 2.4.3 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_curl_16-2.4.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.5.0-2PGSTY.el10.aarch64.rpm pigsty 2.5.0 140.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_16-2.5.0-2PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 46.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_curl_16-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_curl_16-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_curl_16-2.4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_curl_16 pg_curl_16-2.4.3-2PGDG.rhel10.aarch64.rpm pgdg 2.4.3 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_curl_16-2.4.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb pigsty 2.5.0 122.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb pigsty 2.5.0 120.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb pigsty 2.5.0 123.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb pigsty 2.5.0 120.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb pigsty 2.5.0 141.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb pigsty 2.5.0 139.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~noble_amd64.deb pigsty 2.5.0 131.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~noble_arm64.deb pigsty 2.5.0 130.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb pigsty 2.5.0 133.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-curl postgresql-16-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb pigsty 2.5.0 132.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-16-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_curl_15 pg_curl_15-2.5.0-2PGSTY.el8.x86_64.rpm pigsty 2.5.0 136.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_15-2.5.0-2PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_curl_15-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_curl_15-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_curl_15 pg_curl_15-2.4.3-1PGDG.rhel8.x86_64.rpm pgdg 2.4.3 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_curl_15-2.4.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_curl_15 pg_curl_15-2.5.0-2PGSTY.el8.aarch64.rpm pigsty 2.5.0 133.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_15-2.5.0-2PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_curl_15-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_curl_15-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_curl_15 pg_curl_15-2.4.3-1PGDG.rhel8.aarch64.rpm pgdg 2.4.3 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_curl_15-2.4.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.5.0-2PGSTY.el9.x86_64.rpm pigsty 2.5.0 139.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_15-2.5.0-2PGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_curl_15-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_curl_15-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_curl_15-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_curl_15 pg_curl_15-2.4.3-1PGDG.rhel9.x86_64.rpm pgdg 2.4.3 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_curl_15-2.4.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.5.0-2PGSTY.el9.aarch64.rpm pigsty 2.5.0 138.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_15-2.5.0-2PGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_curl_15-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_curl_15-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_curl_15-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_curl_15 pg_curl_15-2.4.3-1PGDG.rhel9.aarch64.rpm pgdg 2.4.3 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_curl_15-2.4.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.5.0-2PGSTY.el10.x86_64.rpm pigsty 2.5.0 142.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_15-2.5.0-2PGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_curl_15-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_curl_15-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_curl_15-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_curl_15 pg_curl_15-2.4.3-2PGDG.rhel10.x86_64.rpm pgdg 2.4.3 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_curl_15-2.4.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.5.0-2PGSTY.el10.aarch64.rpm pigsty 2.5.0 141.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_15-2.5.0-2PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_curl_15-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_curl_15-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_curl_15-2.4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_curl_15 pg_curl_15-2.4.3-2PGDG.rhel10.aarch64.rpm pgdg 2.4.3 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_curl_15-2.4.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb pigsty 2.5.0 122.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb pigsty 2.5.0 119.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb pigsty 2.5.0 123.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb pigsty 2.5.0 120.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb pigsty 2.5.0 141.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb pigsty 2.5.0 139.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~noble_amd64.deb pigsty 2.5.0 131.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~noble_arm64.deb pigsty 2.5.0 131.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb pigsty 2.5.0 134.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-curl postgresql-15-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb pigsty 2.5.0 132.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-15-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_curl_14 pg_curl_14-2.5.0-2PGSTY.el8.x86_64.rpm pigsty 2.5.0 135.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_curl_14-2.5.0-2PGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.4.5 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_curl_14-2.4.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel8.x86_64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_curl_14-2.4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_curl_14 pg_curl_14-2.4.3-1PGDG.rhel8.x86_64.rpm pgdg 2.4.3 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_curl_14-2.4.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_curl_14 pg_curl_14-2.5.0-2PGSTY.el8.aarch64.rpm pigsty 2.5.0 133.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_curl_14-2.5.0-2PGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.4.5 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_curl_14-2.4.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel8.aarch64.rpm pgdg 2.4.4 42.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_curl_14-2.4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_curl_14 pg_curl_14-2.4.3-1PGDG.rhel8.aarch64.rpm pgdg 2.4.3 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_curl_14-2.4.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.5.0-2PGSTY.el9.x86_64.rpm pigsty 2.5.0 139.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_curl_14-2.5.0-2PGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel9.8.x86_64.rpm pgdg 2.4.5 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_curl_14-2.4.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-3PGDG.rhel9.8.x86_64.rpm pgdg 2.4.4 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_curl_14-2.4.4-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel9.x86_64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_curl_14-2.4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_curl_14 pg_curl_14-2.4.3-1PGDG.rhel9.x86_64.rpm pgdg 2.4.3 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_curl_14-2.4.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.5.0-2PGSTY.el9.aarch64.rpm pigsty 2.5.0 138.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_curl_14-2.5.0-2PGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel9.8.aarch64.rpm pgdg 2.4.5 44.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_curl_14-2.4.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-3PGDG.rhel9.8.aarch64.rpm pgdg 2.4.4 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_curl_14-2.4.4-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel9.aarch64.rpm pgdg 2.4.4 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_curl_14-2.4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_curl_14 pg_curl_14-2.4.3-1PGDG.rhel9.aarch64.rpm pgdg 2.4.3 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_curl_14-2.4.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.5.0-2PGSTY.el10.x86_64.rpm pigsty 2.5.0 142.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_curl_14-2.5.0-2PGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel10.2.x86_64.rpm pgdg 2.4.5 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_curl_14-2.4.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-3PGDG.rhel10.2.x86_64.rpm pgdg 2.4.4 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_curl_14-2.4.4-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel10.x86_64.rpm pgdg 2.4.4 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_curl_14-2.4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_curl_14 pg_curl_14-2.4.3-2PGDG.rhel10.x86_64.rpm pgdg 2.4.3 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_curl_14-2.4.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.5.0-2PGSTY.el10.aarch64.rpm pigsty 2.5.0 141.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_curl_14-2.5.0-2PGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.4.5 46.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_curl_14-2.4.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.4.4 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_curl_14-2.4.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.4-1PGDG.rhel10.aarch64.rpm pgdg 2.4.4 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_curl_14-2.4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_curl_14 pg_curl_14-2.4.3-2PGDG.rhel10.aarch64.rpm pgdg 2.4.3 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_curl_14-2.4.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb pigsty 2.5.0 122.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb pigsty 2.5.0 119.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb pigsty 2.5.0 122.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb pigsty 2.5.0 121.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb pigsty 2.5.0 141.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb pigsty 2.5.0 139.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~noble_amd64.deb pigsty 2.5.0 131.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~noble_arm64.deb pigsty 2.5.0 131.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb pigsty 2.5.0 134.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-curl postgresql-14-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb pigsty 2.5.0 132.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-curl/postgresql-14-pg-curl_2.5.0-1PGSTY~resolute_arm64.deb
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

来源：

- [Official source](https://api.pgxn.org/src/pg_curl/pg_curl-2.5.0/README.md)
- [Official source](https://api.pgxn.org/src/pg_curl/pg_curl-2.5.0/pg_curl.control)
- [Official source](https://api.pgxn.org/src/pg_curl/pg_curl-2.5.0/pg_curl--2.5.sql)
- [Official source](https://api.pgxn.org/src/pg_curl/pg_curl-2.5.0/pg_curl--2.4--2.5.sql)
- [Official source](https://api.pgxn.org/dist/pg_curl/2.5.0/META.json)

`pg_curl` 将 libcurl 传输操作暴露为 SQL 函数。上游发行版 2.5.0 使用 SQL 扩展版本 2.5。请求在数据库后端执行，使用服务器的网络与文件系统权限；安装扩展需要管理员。普通调用无需预加载。

### 在同一事务内执行请求

```sql
CREATE EXTENSION pg_curl;
BEGIN;
SELECT curl_easy_reset();
SELECT curl_easy_setopt_url('https://www.postgresql.org/');
SELECT curl_easy_perform();
SELECT convert_from(curl_easy_getinfo_data_in(), 'UTF8');
COMMIT;
```

`curl_easy_reset` 清理句柄，`curl_easy_setopt_url` 选择目标，`curl_easy_perform` 执行传输。`curl_easy_getinfo_data_in` 返回响应字节，`curl_easy_getinfo_header_in` 返回响应头。`pg_curl.transaction` 默认为 true，句柄会在事务结束时释放，因此多语句请求应放在同一个事务中。SQL 回滚不会撤销网络或文件操作。

### 访问权限与白名单

超级用户可为已有应用角色指定允许的前缀：

```sql
ALTER ROLE app_user SET pg_curl.whitelist = 'https://api.example.com/';
```

重新连接后角色默认值生效。未设置 `pg_curl.whitelist` 时，超级用户不受限制，其他角色默认拒绝访问；设置后也会限制超级用户。白名单生效时只允许匹配的 HTTP、HTTPS 和文件 URL，FTP、SMTP 等其他协议均被拒绝。HTTP 路径按路径段边界匹配，而非任意字符串前缀。

本地文件选项也会检查权限。路径解析后必须已存在，包括用于写出的 cookie-jar 文件。重定向目标会逐个检查，受限情况下跟随重定向要求 libcurl 7.80.0 及以上。受限时禁止显式设置代理和 DNS-over-HTTPS，但服务器环境中的代理仍可能生效。应谨慎限定允许的主机和路径，并保护存储的凭据及服务器本地文件。

### 其他操作与升级

`curl_postfield_append`、`curl_easy_setopt_postfields`、`curl_header_append` 用于构造表单或 JSON 请求。`curl_mime_data` 与 `curl_mime_file` 构造 MIME 部分，2.5 新增 `head text[]` 重载以传入多个头字段。头数组元素不得为 NULL，也不得包含回车或换行。MIME 数据重载接受文本或二进制数据。

升级前检查 `pg_extension.extversion`。本发行包包含 2.4 到 2.5 的升级脚本，没有提供 2.4.1 到 2.5 的路径，因此不能假定报告 2.4.1 的已有安装可自动升级。对于实际 SQL 版本为 2.4 的安装，先安装匹配文件，再执行：

```sql
ALTER EXTENSION pg_curl UPDATE TO '2.5';
```

向应用角色授予执行权限前，应先落实新的白名单规则。确认所用 libcurl 支持的协议，并在各数据库主机使用匹配的库文件。

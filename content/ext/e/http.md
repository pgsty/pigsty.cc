---
title: "http"
linkTitle: "http"
description: "HTTP客户端，允许在数据库内收发HTTP请求 (supabase)"
weight: 4070
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pramsey/pgsql-http">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pramsey/pgsql-http</div>
    <div class="ext-card__desc">https://github.com/pramsey/pgsql-http</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgsql-http-1.7.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsql-http-1.7.1.tar.gz</div>
    <div class="ext-card__desc">pgsql-http-1.7.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_http`**](/ext/e/http) | `1.7.2` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4070  | [**`http`**](/ext/e/http) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) [`pgjwt`](/ext/e/pgjwt) [`pg_smtp_client`](/ext/e/pg_smtp_client) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`pgjq`](/ext/e/pgjq) [`pgmb`](/ext/e/pgmb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pgmb`](/ext/e/pgmb) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_http` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.2` | {{< pgvers "18,17,16,15,14" >}} | `pgsql_http_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-http` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.7.2 3 | AVAIL PGDG 1.7.2 6 | AVAIL PGDG 1.7.2 7 | AVAIL PGDG 1.7.2 7 | AVAIL PGDG 1.7.2 7 |
| el8.aarch64 | AVAIL PGDG 1.7.2 3 | AVAIL PGDG 1.7.2 6 | AVAIL PGDG 1.7.2 7 | AVAIL PGDG 1.7.2 7 | AVAIL PGDG 1.7.2 7 |
| el9.x86_64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 7 | AVAIL PGDG 1.7.2 8 | AVAIL PGDG 1.7.2 8 | AVAIL PGDG 1.7.2 8 |
| el9.aarch64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 7 | AVAIL PGDG 1.7.2 8 | AVAIL PGDG 1.7.2 8 | AVAIL PGDG 1.7.2 8 |
| el10.x86_64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 5 | AVAIL PGDG 1.7.2 5 | AVAIL PGDG 1.7.2 5 | AVAIL PGDG 1.7.2 5 |
| el10.aarch64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 5 | AVAIL PGDG 1.7.2 5 | AVAIL PGDG 1.7.2 5 | AVAIL PGDG 1.7.2 5 |
| d12.x86_64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| d12.aarch64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| d13.x86_64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| d13.aarch64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| u22.x86_64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| u22.aarch64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| u24.x86_64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| u24.aarch64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| u26.x86_64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
| u26.aarch64 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 | AVAIL PGDG 1.7.2 4 |
@ el8.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.2-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.2 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgsql_http_18-1.7.2-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.1-1PIGSTY.el8.x86_64.rpm pigsty 1.7.1 29.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsql_http_18-1.7.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgsql_http_18-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.2-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgsql_http_18-1.7.2-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.1-1PIGSTY.el8.aarch64.rpm pigsty 1.7.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsql_http_18-1.7.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgsql_http_18-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.2-2PGDG.rhel9.8.x86_64.rpm pgdg 1.7.2 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgsql_http_18-1.7.2-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.1-1PIGSTY.el9.x86_64.rpm pigsty 1.7.1 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsql_http_18-1.7.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.7.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgsql_http_18-1.7.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgsql_http_18-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.2-2PGDG.rhel9.8.aarch64.rpm pgdg 1.7.2 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgsql_http_18-1.7.2-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.1-1PIGSTY.el9.aarch64.rpm pigsty 1.7.1 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsql_http_18-1.7.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.7.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgsql_http_18-1.7.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgsql_http_18-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.2-2PGDG.rhel10.2.x86_64.rpm pgdg 1.7.2 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgsql_http_18-1.7.2-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.1-1PIGSTY.el10.x86_64.rpm pigsty 1.7.1 30.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsql_http_18-1.7.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.7.0 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgsql_http_18-1.7.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pgsql_http_18 pgsql_http_18-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgsql_http_18-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.2-2PGDG.rhel10.2.aarch64.rpm pgdg 1.7.2 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgsql_http_18-1.7.2-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.1-1PIGSTY.el10.aarch64.rpm pigsty 1.7.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsql_http_18-1.7.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.7.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgsql_http_18-1.7.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgsql_http_18 pgsql_http_18-1.7.0-1PGDG.rhel10.aarch64.rpm pgdg 1.7.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgsql_http_18-1.7.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg12+1_amd64.deb pgdg 1.7.2 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 44.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg12+1_arm64.deb pgdg 1.7.2 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 42.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg13+1_amd64.deb pgdg 1.7.2 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg13+1_arm64.deb pgdg 1.7.2 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 43.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg22.04+1_amd64.deb pgdg 1.7.2 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 47.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg22.04+1_arm64.deb pgdg 1.7.2 43.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 45.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg24.04+1_amd64.deb pgdg 1.7.2 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 46.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg24.04+1_arm64.deb pgdg 1.7.2 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 45.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg26.04+1_amd64.deb pgdg 1.7.2 51.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 51.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 54.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 51.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-http postgresql-18-http_1.7.2-2.pgdg26.04+1_arm64.deb pgdg 1.7.2 50.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.2-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg26.04+1_arm64.deb pgdg 1.7.1 50.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~resolute_arm64.deb pigsty 1.7.1 52.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg26.04+1_arm64.deb pgdg 1.7.0 49.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.2-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.2 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgsql_http_17-1.7.2-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.1-1PIGSTY.el8.x86_64.rpm pigsty 1.7.1 29.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsql_http_17-1.7.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgsql_http_17-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgsql_http_17 pgsql_http_17-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgsql_http_17-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgsql_http_17 pgsql_http_17-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgsql_http_17-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgsql_http_17 pgsql_http_17-1.6.0-2PGDG.rhel8.x86_64.rpm pgdg 1.6.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgsql_http_17-1.6.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.2-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgsql_http_17-1.7.2-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.1-1PIGSTY.el8.aarch64.rpm pigsty 1.7.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsql_http_17-1.7.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgsql_http_17-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgsql_http_17 pgsql_http_17-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgsql_http_17-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgsql_http_17 pgsql_http_17-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgsql_http_17-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgsql_http_17 pgsql_http_17-1.6.0-2PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgsql_http_17-1.6.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.2-2PGDG.rhel9.8.x86_64.rpm pgdg 1.7.2 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsql_http_17-1.7.2-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.1-1PIGSTY.el9.x86_64.rpm pigsty 1.7.1 29.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsql_http_17-1.7.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.7.0 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsql_http_17-1.7.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsql_http_17-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgsql_http_17 pgsql_http_17-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsql_http_17-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgsql_http_17 pgsql_http_17-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsql_http_17-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgsql_http_17 pgsql_http_17-1.6.0-2PGDG.rhel9.x86_64.rpm pgdg 1.6.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgsql_http_17-1.6.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.2-2PGDG.rhel9.8.aarch64.rpm pgdg 1.7.2 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsql_http_17-1.7.2-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.1-1PIGSTY.el9.aarch64.rpm pigsty 1.7.1 28.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsql_http_17-1.7.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsql_http_17-1.7.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsql_http_17-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgsql_http_17 pgsql_http_17-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsql_http_17-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgsql_http_17 pgsql_http_17-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsql_http_17-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgsql_http_17 pgsql_http_17-1.6.0-2PGDG.rhel9.aarch64.rpm pgdg 1.6.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgsql_http_17-1.6.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.2-2PGDG.rhel10.2.x86_64.rpm pgdg 1.7.2 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsql_http_17-1.7.2-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.1-1PIGSTY.el10.x86_64.rpm pigsty 1.7.1 30.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsql_http_17-1.7.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.7.0 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsql_http_17-1.7.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pgsql_http_17 pgsql_http_17-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsql_http_17-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgsql_http_17 pgsql_http_17-1.6.3-2PGDG.rhel10.x86_64.rpm pgdg 1.6.3 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgsql_http_17-1.6.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.2-2PGDG.rhel10.2.aarch64.rpm pgdg 1.7.2 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsql_http_17-1.7.2-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.1-1PIGSTY.el10.aarch64.rpm pigsty 1.7.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsql_http_17-1.7.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.7.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsql_http_17-1.7.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgsql_http_17 pgsql_http_17-1.7.0-1PGDG.rhel10.aarch64.rpm pgdg 1.7.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsql_http_17-1.7.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgsql_http_17 pgsql_http_17-1.6.3-2PGDG.rhel10.aarch64.rpm pgdg 1.6.3 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgsql_http_17-1.6.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg12+1_amd64.deb pgdg 1.7.2 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 44.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 44.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg12+1_arm64.deb pgdg 1.7.2 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 42.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg13+1_amd64.deb pgdg 1.7.2 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 44.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg13+1_arm64.deb pgdg 1.7.2 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 42.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg22.04+1_amd64.deb pgdg 1.7.2 49.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 49.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 51.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 48.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg22.04+1_arm64.deb pgdg 1.7.2 47.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 47.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 50.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 47.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg24.04+1_amd64.deb pgdg 1.7.2 45.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 46.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg24.04+1_arm64.deb pgdg 1.7.2 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 45.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg26.04+1_amd64.deb pgdg 1.7.2 51.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 51.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 54.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-http postgresql-17-http_1.7.2-2.pgdg26.04+1_arm64.deb pgdg 1.7.2 50.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.2-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg26.04+1_arm64.deb pgdg 1.7.1 50.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~resolute_arm64.deb pigsty 1.7.1 53.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg26.04+1_arm64.deb pgdg 1.7.0 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.2-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.2 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsql_http_16-1.7.2-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.1-1PIGSTY.el8.x86_64.rpm pigsty 1.7.1 29.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsql_http_16-1.7.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsql_http_16-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsql_http_16-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsql_http_16-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.0-2PGDG.rhel8.x86_64.rpm pgdg 1.6.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsql_http_16-1.6.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgsql_http_16-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.2-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.2 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsql_http_16-1.7.2-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.1-1PIGSTY.el8.aarch64.rpm pigsty 1.7.1 28.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsql_http_16-1.7.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsql_http_16-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsql_http_16-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsql_http_16-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.0-2PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsql_http_16-1.6.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgsql_http_16-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.2-2PGDG.rhel9.8.x86_64.rpm pgdg 1.7.2 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsql_http_16-1.7.2-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.1-1PIGSTY.el9.x86_64.rpm pigsty 1.7.1 29.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsql_http_16-1.7.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.7.0 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsql_http_16-1.7.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsql_http_16-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsql_http_16-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsql_http_16-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.0-2PGDG.rhel9.x86_64.rpm pgdg 1.6.0 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsql_http_16-1.6.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgsql_http_16-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.2-2PGDG.rhel9.8.aarch64.rpm pgdg 1.7.2 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsql_http_16-1.7.2-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.1-1PIGSTY.el9.aarch64.rpm pigsty 1.7.1 28.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsql_http_16-1.7.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.7.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsql_http_16-1.7.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsql_http_16-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsql_http_16-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsql_http_16-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.0-2PGDG.rhel9.aarch64.rpm pgdg 1.6.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsql_http_16-1.6.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgsql_http_16-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.2-2PGDG.rhel10.2.x86_64.rpm pgdg 1.7.2 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsql_http_16-1.7.2-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.1-1PIGSTY.el10.x86_64.rpm pigsty 1.7.1 30.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsql_http_16-1.7.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.7.0 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsql_http_16-1.7.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pgsql_http_16 pgsql_http_16-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsql_http_16-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgsql_http_16 pgsql_http_16-1.6.3-2PGDG.rhel10.x86_64.rpm pgdg 1.6.3 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgsql_http_16-1.6.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.2-2PGDG.rhel10.2.aarch64.rpm pgdg 1.7.2 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsql_http_16-1.7.2-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.1-1PIGSTY.el10.aarch64.rpm pigsty 1.7.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsql_http_16-1.7.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.7.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsql_http_16-1.7.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgsql_http_16 pgsql_http_16-1.7.0-1PGDG.rhel10.aarch64.rpm pgdg 1.7.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsql_http_16-1.7.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgsql_http_16 pgsql_http_16-1.6.3-2PGDG.rhel10.aarch64.rpm pgdg 1.6.3 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgsql_http_16-1.6.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg12+1_amd64.deb pgdg 1.7.2 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 43.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg12+1_arm64.deb pgdg 1.7.2 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 42.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg13+1_amd64.deb pgdg 1.7.2 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 44.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg13+1_arm64.deb pgdg 1.7.2 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 42.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg22.04+1_amd64.deb pgdg 1.7.2 49.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 49.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 51.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 48.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg22.04+1_arm64.deb pgdg 1.7.2 47.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 47.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 49.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 47.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg24.04+1_amd64.deb pgdg 1.7.2 44.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 46.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg24.04+1_arm64.deb pgdg 1.7.2 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 44.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg26.04+1_amd64.deb pgdg 1.7.2 51.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 51.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 54.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-http postgresql-16-http_1.7.2-2.pgdg26.04+1_arm64.deb pgdg 1.7.2 49.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.2-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg26.04+1_arm64.deb pgdg 1.7.1 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~resolute_arm64.deb pigsty 1.7.1 52.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg26.04+1_arm64.deb pgdg 1.7.0 50.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.2-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.2 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsql_http_15-1.7.2-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.1-1PIGSTY.el8.x86_64.rpm pigsty 1.7.1 29.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsql_http_15-1.7.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsql_http_15-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsql_http_15-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsql_http_15-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.0-2PGDG.rhel8.x86_64.rpm pgdg 1.6.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsql_http_15-1.6.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgsql_http_15-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.2-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.2 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsql_http_15-1.7.2-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.1-1PIGSTY.el8.aarch64.rpm pigsty 1.7.1 29.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsql_http_15-1.7.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsql_http_15-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsql_http_15-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsql_http_15-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.0-2PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsql_http_15-1.6.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgsql_http_15-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.2-2PGDG.rhel9.8.x86_64.rpm pgdg 1.7.2 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsql_http_15-1.7.2-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.1-1PIGSTY.el9.x86_64.rpm pigsty 1.7.1 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsql_http_15-1.7.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.7.0 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsql_http_15-1.7.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsql_http_15-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsql_http_15-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsql_http_15-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.0-2PGDG.rhel9.x86_64.rpm pgdg 1.6.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsql_http_15-1.6.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgsql_http_15-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.2-2PGDG.rhel9.8.aarch64.rpm pgdg 1.7.2 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsql_http_15-1.7.2-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.1-1PIGSTY.el9.aarch64.rpm pigsty 1.7.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsql_http_15-1.7.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsql_http_15-1.7.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsql_http_15-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsql_http_15-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsql_http_15-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.0-2PGDG.rhel9.aarch64.rpm pgdg 1.6.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsql_http_15-1.6.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgsql_http_15-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.2-2PGDG.rhel10.2.x86_64.rpm pgdg 1.7.2 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsql_http_15-1.7.2-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.1-1PIGSTY.el10.x86_64.rpm pigsty 1.7.1 30.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsql_http_15-1.7.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.7.0 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsql_http_15-1.7.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pgsql_http_15 pgsql_http_15-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsql_http_15-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgsql_http_15 pgsql_http_15-1.6.3-2PGDG.rhel10.x86_64.rpm pgdg 1.6.3 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgsql_http_15-1.6.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.2-2PGDG.rhel10.2.aarch64.rpm pgdg 1.7.2 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsql_http_15-1.7.2-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.1-1PIGSTY.el10.aarch64.rpm pigsty 1.7.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsql_http_15-1.7.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.7.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsql_http_15-1.7.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pgsql_http_15 pgsql_http_15-1.7.0-1PGDG.rhel10.aarch64.rpm pgdg 1.7.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsql_http_15-1.7.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgsql_http_15 pgsql_http_15-1.6.3-2PGDG.rhel10.aarch64.rpm pgdg 1.6.3 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgsql_http_15-1.6.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg12+1_amd64.deb pgdg 1.7.2 45.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 44.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg12+1_arm64.deb pgdg 1.7.2 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 43.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg13+1_amd64.deb pgdg 1.7.2 45.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 45.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 45.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg13+1_arm64.deb pgdg 1.7.2 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 43.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg22.04+1_amd64.deb pgdg 1.7.2 50.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 50.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 52.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg22.04+1_arm64.deb pgdg 1.7.2 48.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 48.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 50.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg24.04+1_amd64.deb pgdg 1.7.2 45.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 47.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 45.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg24.04+1_arm64.deb pgdg 1.7.2 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 45.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg26.04+1_amd64.deb pgdg 1.7.2 52.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 55.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-http postgresql-15-http_1.7.2-2.pgdg26.04+1_arm64.deb pgdg 1.7.2 51.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.2-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg26.04+1_arm64.deb pgdg 1.7.1 51.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~resolute_arm64.deb pigsty 1.7.1 53.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg26.04+1_arm64.deb pgdg 1.7.0 50.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.2-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.2 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsql_http_14-1.7.2-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.1-1PIGSTY.el8.x86_64.rpm pigsty 1.7.1 29.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgsql_http_14-1.7.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsql_http_14-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsql_http_14-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsql_http_14-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.0-2PGDG.rhel8.x86_64.rpm pgdg 1.6.0 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsql_http_14-1.6.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgsql_http_14-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.2-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.2 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsql_http_14-1.7.2-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.1-1PIGSTY.el8.aarch64.rpm pigsty 1.7.1 29.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgsql_http_14-1.7.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsql_http_14-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsql_http_14-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsql_http_14-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.0-2PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsql_http_14-1.6.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgsql_http_14-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.2-2PGDG.rhel9.8.x86_64.rpm pgdg 1.7.2 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsql_http_14-1.7.2-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.1-1PIGSTY.el9.x86_64.rpm pigsty 1.7.1 29.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgsql_http_14-1.7.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.7.0 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsql_http_14-1.7.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsql_http_14-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsql_http_14-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsql_http_14-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.0-2PGDG.rhel9.x86_64.rpm pgdg 1.6.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsql_http_14-1.6.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgsql_http_14-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.2-2PGDG.rhel9.8.aarch64.rpm pgdg 1.7.2 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsql_http_14-1.7.2-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.1-1PIGSTY.el9.aarch64.rpm pigsty 1.7.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgsql_http_14-1.7.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.7.0 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsql_http_14-1.7.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsql_http_14-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsql_http_14-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsql_http_14-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.0-2PGDG.rhel9.aarch64.rpm pgdg 1.6.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsql_http_14-1.6.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgsql_http_14-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.2-2PGDG.rhel10.2.x86_64.rpm pgdg 1.7.2 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsql_http_14-1.7.2-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.1-1PIGSTY.el10.x86_64.rpm pigsty 1.7.1 30.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgsql_http_14-1.7.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.7.0 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsql_http_14-1.7.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pgsql_http_14 pgsql_http_14-1.7.0-1PGDG.rhel10.x86_64.rpm pgdg 1.7.0 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsql_http_14-1.7.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgsql_http_14 pgsql_http_14-1.6.3-2PGDG.rhel10.x86_64.rpm pgdg 1.6.3 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgsql_http_14-1.6.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.2-2PGDG.rhel10.2.aarch64.rpm pgdg 1.7.2 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsql_http_14-1.7.2-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.1-1PIGSTY.el10.aarch64.rpm pigsty 1.7.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgsql_http_14-1.7.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.7.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsql_http_14-1.7.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pgsql_http_14 pgsql_http_14-1.7.0-1PGDG.rhel10.aarch64.rpm pgdg 1.7.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsql_http_14-1.7.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgsql_http_14 pgsql_http_14-1.6.3-2PGDG.rhel10.aarch64.rpm pgdg 1.6.3 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgsql_http_14-1.6.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg12+1_amd64.deb pgdg 1.7.2 45.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 45.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 44.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg12+1_arm64.deb pgdg 1.7.2 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 43.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg13+1_amd64.deb pgdg 1.7.2 45.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 45.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 45.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 45.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg13+1_arm64.deb pgdg 1.7.2 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 43.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg22.04+1_amd64.deb pgdg 1.7.2 50.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 50.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 52.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg22.04+1_arm64.deb pgdg 1.7.2 48.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 48.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 50.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg24.04+1_amd64.deb pgdg 1.7.2 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 47.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 45.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg24.04+1_arm64.deb pgdg 1.7.2 44.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 45.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg26.04+1_amd64.deb pgdg 1.7.2 52.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 52.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 54.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 52.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-http postgresql-14-http_1.7.2-2.pgdg26.04+1_arm64.deb pgdg 1.7.2 50.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.2-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg26.04+1_arm64.deb pgdg 1.7.1 51.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~resolute_arm64.deb pigsty 1.7.1 53.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg26.04+1_arm64.deb pgdg 1.7.0 50.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_http` 扩展的 RPM 包：

```bash
pig build pkg pg_http         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_http` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_http;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_http -v 18  # PG 18
pig ext install -y pg_http -v 17  # PG 17
pig ext install -y pg_http -v 16  # PG 16
pig ext install -y pg_http -v 15  # PG 15
pig ext install -y pg_http -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgsql_http_18       # PG 18
dnf install -y pgsql_http_17       # PG 17
dnf install -y pgsql_http_16       # PG 16
dnf install -y pgsql_http_15       # PG 15
dnf install -y pgsql_http_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-http   # PG 18
apt install -y postgresql-17-http   # PG 17
apt install -y postgresql-16-http   # PG 16
apt install -y postgresql-15-http   # PG 15
apt install -y postgresql-14-http   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION http;
```

## 用法

来源：

- [pgsql-http v1.7.2 README](https://github.com/pramsey/pgsql-http/blob/v1.7.2/README.md)
- [Extension control file](https://github.com/pramsey/pgsql-http/blob/v1.7.2/http.control)
- [v1.7.1 to v1.7.2 comparison](https://github.com/pramsey/pgsql-http/compare/v1.7.1...v1.7.2)

`http` 允许 PostgreSQL 通过 libcurl 发出同步 HTTP 请求。它适用于受控集成和管理调用，但后端会在 SQL 语句和事务内部等待远程服务的响应。限制可以调用它的用户、设置较短的超时时间，并确保不可信输入不会选择任意 URL。

### 核心工作流程

```sql
CREATE EXTENSION http;

SELECT status, content_type, content
FROM http_get('https://httpbingo.org/get');
```

发送 JSON 并检查响应：

```sql
SELECT status, content::jsonb
FROM http_post(
  'https://httpbingo.org/post',
  '{"event":"invoice.paid"}',
  'application/json'
);
```

通用入口点接受完整的请求：

```sql
SELECT (http((
  'GET',
  'https://httpbingo.org/headers',
  http_headers('Authorization', 'Bearer example'),
  NULL,
  NULL
)::http_request)).status;
```

### 重要对象

- `http_request` 包含 `method`, `uri`, `headers`, `content_type`, 和 `content`。
- `http_response` 包含 `status`, `content_type`, `headers`, 和 `content`。
- `http_header`, `http_header(...)`, 和 `http_headers(...)` 构建请求头；`unnest(response.headers)` 将响应头暴露为行。
- `http(...)` 执行完整的 `http_request`。
- `http_get`, `http_post`, `http_put`, `http_patch`, `http_delete`, 和 `http_head` 是方便的包装器。
- `urlencode(text)` 和 `urlencode(jsonb)` 编码查询数据。
- `http_set_curlopt`, `http_list_curlopt`, 和 `http_reset_curlopt` 管理支持的会话级 libcurl 设置。

### 超时、连接和安全性

默认情况下，每个请求使用一个新的连接。在测量后端生命周期和远程服务器行为之后再启用持久连接：

```sql
SET http.curlopt_timeout_ms = 1000;
SET http.curlopt_connecttimeout_ms = 250;
SET http.curlopt_tcp_keepalive = 1;
```

默认请求超时为五秒。超时将引发 SQL 错误，因此调用者必须处理事务回滚。触发器或长时间事务中的网络延迟可能会持有锁并耗尽数据库连接；优先使用外部工作进程进行持久异步传递。

保持 TLS 验证启用、保护包含凭据的 curl 设置、在使用前验证响应状态和内容，并在网络层和 SQL 权限层限制出站目的地。版本 1.7.2 包含相对于 1.7.1 的构建、测试和 curl 选项常量维护；它没有引入实质性 SQL API 变更。控制文件仍然声明 SQL 扩展版本为 1.7。

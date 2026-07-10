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
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_http` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.2` | {{< pgvers "18,17,16,15,14" >}} | `pgsql_http_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-http` | - |
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
| d12.x86_64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| d12.aarch64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| d13.x86_64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| d13.aarch64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| u22.x86_64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| u22.aarch64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| u24.x86_64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| u24.aarch64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| u26.x86_64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
| u26.aarch64 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.7.1 3 |
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
@ d12.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 44.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 42.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 44.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 43.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 47.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 45.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 46.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 45.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 51.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-http postgresql-18-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 54.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-18-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 51.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg26.04+1_amd64.deb
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
@ d12.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 44.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 44.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 42.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 44.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 42.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 49.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 51.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 48.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 47.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 50.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 47.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 46.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 45.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 51.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-http postgresql-17-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 54.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-17-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg26.04+1_amd64.deb
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
@ d12.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 43.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 42.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 44.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 42.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 49.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 51.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 48.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 47.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 49.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 47.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 46.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 44.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 51.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-http postgresql-16-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 54.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-16-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg26.04+1_amd64.deb
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
@ d12.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 44.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 43.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 45.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 45.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 43.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 50.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 52.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 48.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 50.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 47.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 45.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 45.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-http postgresql-15-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 55.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-15-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg26.04+1_amd64.deb
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
@ d12.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg12+1_amd64.deb pgdg 1.7.1 45.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~bookworm_amd64.deb pigsty 1.7.1 44.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg12+1_arm64.deb pgdg 1.7.1 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~bookworm_arm64.deb pigsty 1.7.1 43.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg13+1_amd64.deb pgdg 1.7.1 45.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~trixie_amd64.deb pigsty 1.7.1 45.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 45.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg13+1_arm64.deb pgdg 1.7.1 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~trixie_arm64.deb pigsty 1.7.1 43.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg22.04+1_amd64.deb pgdg 1.7.1 50.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~jammy_amd64.deb pigsty 1.7.1 52.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg22.04+1_arm64.deb pgdg 1.7.1 48.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~jammy_arm64.deb pigsty 1.7.1 50.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg24.04+1_amd64.deb pgdg 1.7.1 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~noble_amd64.deb pigsty 1.7.1 47.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 45.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg24.04+1_arm64.deb pgdg 1.7.1 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~noble_arm64.deb pigsty 1.7.1 45.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1.pgdg26.04+1_amd64.deb pgdg 1.7.1 52.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-http postgresql-14-http_1.7.1-1PIGSTY~resolute_amd64.deb pigsty 1.7.1 54.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgsql-http/postgresql-14-http_1.7.1-1PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg26.04+1_amd64.deb pgdg 1.7.0 52.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg26.04+1_amd64.deb
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

来源：[README](https://github.com/pramsey/pgsql-http/blob/v1.7.1/README.md)、[v1.7.1 release](https://github.com/pramsey/pgsql-http/releases/tag/v1.7.1)

`http` 允许 SQL 代码通过 libcurl 发起 HTTP 请求。它适合受控的集成点，例如触发器通知外部服务、SQL job 拉取小型远程 payload，或数据库侧 webhook 调用。

```sql
CREATE EXTENSION http;
```

### 请求与响应类型

每个请求使用 `http_request`，并返回 `http_response`：

```text
http_request(method http_method, uri varchar, headers http_header[], content_type varchar, content varchar)
http_response(status integer, content_type varchar, headers http_header[], content varchar)
```

便捷包装函数最终调用同一个底层 `http(http_request)` 函数：

- `http_get(uri varchar)`
- `http_get(uri varchar, data jsonb)`
- `http_post(uri varchar, content varchar, content_type varchar)`
- `http_post(uri varchar, data jsonb)`
- `http_put(uri varchar, content varchar, content_type varchar)`
- `http_patch(uri varchar, content varchar, content_type varchar)`
- `http_delete(uri varchar)`
- `http_head(uri varchar)`

### 示例

```sql
SELECT status, content_type, content
FROM http_get('https://httpbun.com/ip');

SELECT content::json->'headers'->>'Authorization'
FROM http((
  'GET',
  'https://httpbun.com/headers',
  http_headers('Authorization', 'Bearer token'),
  NULL,
  NULL
)::http_request);

SELECT status, content::json->'form' AS form
FROM http_post(
  'https://httpbun.com/post',
  jsonb_build_object('myvar', 'myval', 'foo', 'bar')
);

SELECT status, content_type, content::json->>'data' AS data
FROM http_put('https://httpbun.com/put', 'some text', 'text/plain');
```

通过展开 `headers` 数组检查响应头：

```sql
SELECT (unnest(headers)).*
FROM http_get('https://httpbun.com/');
```

### 二进制内容

README 提醒，`varchar::bytea` 对二进制响应体不安全，因为它会在零值字节处停止。读取响应内容时使用 `text_to_bytea(content)`，发送二进制请求体时使用 `bytea_to_text(bytea)`。

```sql
WITH http AS (
  SELECT * FROM http_get('https://httpbingo.org/image/png')
)
SELECT content_type, length(text_to_bytea(content)) AS bytes
FROM http;
```

### 超时与版本说明

`pg_http` 1.7.1 是兼容性和文档版本：增加 timeout examples，增加 PostgreSQL 17 wait-event hooks，并包含 PostgreSQL 19 support fixes。用户可见 SQL API 仍是上面的 README surface。

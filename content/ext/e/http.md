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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgsql-http-1.7.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgsql-http-1.7.0.tar.gz</div>
    <div class="ext-card__desc">pgsql-http-1.7.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_http`**](/ext/e/http) | `1.7.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_http` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_http_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-http` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 | AVAIL PIGSTY 1.7.0 1 |
| d12.x86_64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| d12.aarch64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| d13.x86_64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| d13.aarch64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| u22.x86_64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| u22.aarch64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| u24.x86_64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
| u24.aarch64 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 | AVAIL PGDG 1.7.0 1 |
@ el8.x86_64 18 pg_http_18 pg_http_18-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 29.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_http_18-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_http_18 pg_http_18-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_http_18-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_http_18 pg_http_18-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 29.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_http_18-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_http_18 pg_http_18-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 28.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_http_18-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_http_18 pg_http_18-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 29.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_http_18-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_http_18 pg_http_18-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 28.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_http_18-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 44.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-http postgresql-18-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-18-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_http_17 pg_http_17-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_http_17-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_http_17 pg_http_17-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_http_17-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_http_17 pg_http_17-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 29.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_http_17-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_http_17 pg_http_17-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_http_17-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_http_17 pg_http_17-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 29.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_http_17-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_http_17 pg_http_17-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_http_17-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 48.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 47.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-http postgresql-17-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-17-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_http_16 pg_http_16-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_http_16-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_http_16 pg_http_16-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 28.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_http_16-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_http_16 pg_http_16-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 29.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_http_16-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_http_16 pg_http_16-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 28.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_http_16-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_http_16 pg_http_16-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 29.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_http_16-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_http_16 pg_http_16-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_http_16-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 43.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 48.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 47.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 44.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-http postgresql-16-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 43.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-16-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_http_15 pg_http_15-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 29.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_http_15-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_http_15 pg_http_15-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_http_15-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_http_15 pg_http_15-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_http_15-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_http_15 pg_http_15-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_http_15-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_http_15 pg_http_15-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_http_15-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_http_15 pg_http_15-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 28.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_http_15-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 45.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-http postgresql-15-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-15-http_1.7.0-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_http_14 pg_http_14-1.7.0-1PIGSTY.el8.x86_64.rpm pigsty 1.7.0 29.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_http_14-1.7.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_http_14 pg_http_14-1.7.0-1PIGSTY.el8.aarch64.rpm pigsty 1.7.0 28.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_http_14-1.7.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_http_14 pg_http_14-1.7.0-1PIGSTY.el9.x86_64.rpm pigsty 1.7.0 29.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_http_14-1.7.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_http_14 pg_http_14-1.7.0-1PIGSTY.el9.aarch64.rpm pigsty 1.7.0 28.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_http_14-1.7.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_http_14 pg_http_14-1.7.0-1PIGSTY.el10.x86_64.rpm pigsty 1.7.0 29.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_http_14-1.7.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_http_14 pg_http_14-1.7.0-1PIGSTY.el10.aarch64.rpm pigsty 1.7.0 28.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_http_14-1.7.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg12+1_amd64.deb pgdg 1.7.0 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg12+1_arm64.deb pgdg 1.7.0 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg13+1_amd64.deb pgdg 1.7.0 45.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg13+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg22.04+1_amd64.deb pgdg 1.7.0 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg22.04+1_arm64.deb pgdg 1.7.0 48.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg24.04+1_amd64.deb pgdg 1.7.0 45.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-http postgresql-14-http_1.7.0-3.pgdg24.04+1_arm64.deb pgdg 1.7.0 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-http/postgresql-14-http_1.7.0-3.pgdg24.04+1_arm64.deb
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
dnf install -y pg_http_18       # PG 18
dnf install -y pg_http_17       # PG 17
dnf install -y pg_http_16       # PG 16
dnf install -y pg_http_15       # PG 15
dnf install -y pg_http_14       # PG 14
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

https://github.com/pramsey/pgsql-http

请求 / 响应结构定义：

```
     Composite type "public.http_request"
    Column    |       Type        | Modifiers
--------------+-------------------+-----------
 method       | http_method       |
 uri          | character varying |
 headers      | http_header[]     |
 content_type | character varying |
 content      | character varying |

    Composite type "public.http_response"
    Column    |       Type        | Modifiers
--------------+-------------------+-----------
 status       | integer           |
 content_type | character varying |
 headers      | http_header[]     |
 content      | character varying |
```


### 示例

使用 SQL 发送 HTTP GET 请求

```sql
CREATE EXTENSION http;

-- 获取响应内容
SELECT content FROM http_get('http://httpbun.com/');

-- 获取状态码和内容类型
SELECT status, content_type FROM http_get('http://httpbun.com/');

--  status |       content_type
-- --------+--------------------------
--     200 | text/html; charset=utf-8

-- 获取响应头
SELECT (unnest(headers)).* FROM http_get('http://httpbun.com/');

--             field           |                      value
--  ---------------------------+--------------------------------------------------
--  Location                  | https://httpbun.com/
--  Date                      | Mon, 04 Nov 2024 09:00:36 GMT
--  Content-Length            | 0
--  Connection                | close
--  alt-svc                   | h3=":443"; ma=2592000
--  content-security-policy   | frame-ancestors 'none'
--  content-type              | text/html
--  date                      | Mon, 04 Nov 2024 09:00:37 GMT
--  strict-transport-security | max-age=31536000; includeSubDomains; preload
--  x-content-type-options    | nosniff
--  x-powered-by              | httpbun/af040d24038613575a85f74c2283ae79f8169927
--  (11 rows)
```


```sql
SELECT status, content::json->'form' AS form FROM http_post('http://httpbun.com/post', jsonb_build_object('myvar','myval','foo','bar'));
```

发送 HTTP PUT 请求：

```sql
SELECT status, content_type, content::json->>'data' AS data
  FROM http_put('http://httpbun.com/put', 'some text', 'text/plain');


--  status |   content_type   |   data
-- --------+------------------+-----------
--  200 | application/json | some text
```

发送 HTTP POST 请求：


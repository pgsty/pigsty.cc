---
title: "pg_net"
linkTitle: "pg_net"
description: "用 SQL 进行异步非阻塞HTTP/HTTPS 请求的扩展 (supabase)"
weight: 4080
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/supabase/pg_net">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">supabase/pg_net</div>
    <div class="ext-card__desc">https://github.com/supabase/pg_net</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_net-0.20.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_net-0.20.2.tar.gz</div>
    <div class="ext-card__desc">pg_net-0.20.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_net`**](/ext/e/pg_net) | `0.20.2` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4080  | [**`pg_net`**](/ext/e/pg_net) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `net` |
{.ext-table}

| **相关扩展** | [`http`](/ext/e/http) [`pg_curl`](/ext/e/pg_curl) [`pgjwt`](/ext/e/pgjwt) [`pg_smtp_client`](/ext/e/pg_smtp_client) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`pgjq`](/ext/e/pgjq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pgmb`](/ext/e/pgmb) |
{.ext-table .ext-table--rel}


> patched 0.9.2 on el8/el9


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.20.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_net` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.20.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_net_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.20.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-net` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 |
| el8.aarch64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 |
| el9.x86_64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 |
| el9.aarch64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 |
| el10.x86_64 | AVAIL PIGSTY 0.20.2 3 | AVAIL PIGSTY 0.20.2 11 | AVAIL PIGSTY 0.20.2 11 | AVAIL PIGSTY 0.20.2 11 | AVAIL PIGSTY 0.20.2 11 |
| el10.aarch64 | AVAIL PIGSTY 0.20.2 3 | AVAIL PIGSTY 0.20.2 11 | AVAIL PIGSTY 0.20.2 11 | AVAIL PIGSTY 0.20.2 11 | AVAIL PIGSTY 0.20.2 11 |
| d12.x86_64 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 | AVAIL PIGSTY 0.20.2 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_net_18 pg_net_18-0.9.2-2PIGSTY.el8.x86_64.rpm pigsty 0.9.2 27.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_net_18-0.9.2-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_net_18 pg_net_18-0.9.2-2PIGSTY.el8.aarch64.rpm pigsty 0.9.2 26.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_net_18-0.9.2-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_net_18 pg_net_18-0.9.2-2PIGSTY.el9.x86_64.rpm pigsty 0.9.2 26.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_net_18-0.9.2-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_net_18 pg_net_18-0.9.2-2PIGSTY.el9.aarch64.rpm pigsty 0.9.2 26.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_net_18-0.9.2-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.20.2-1PIGSTY.el10.x86_64.rpm pigsty 0.20.2 36.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_18-0.20.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.20.0-1PGDG.rhel10.x86_64.rpm pgdg 0.20.0 33.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_net_18-0.20.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.19.7-1PGDG.rhel10.x86_64.rpm pgdg 0.19.7 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_net_18-0.19.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.20.2-1PIGSTY.el10.aarch64.rpm pigsty 0.20.2 36.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_18-0.20.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.20.0-1PGDG.rhel10.aarch64.rpm pgdg 0.20.0 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_net_18-0.20.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.19.7-1PGDG.rhel10.aarch64.rpm pgdg 0.19.7 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_net_18-0.19.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb pigsty 0.20.2 60.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-18-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb pigsty 0.20.2 58.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-18-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb pigsty 0.20.2 60.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-18-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb pigsty 0.20.2 58.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-18-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 41.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-18-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 40.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-18-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.2-1PIGSTY~noble_amd64.deb pigsty 0.20.2 62.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-18-pg-net_0.20.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.2-1PIGSTY~noble_arm64.deb pigsty 0.20.2 61.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-18-pg-net_0.20.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_net_17 pg_net_17-0.9.2-2PIGSTY.el8.x86_64.rpm pigsty 0.9.2 27.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_net_17-0.9.2-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_net_17 pg_net_17-0.9.2-2PIGSTY.el8.aarch64.rpm pigsty 0.9.2 26.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_net_17-0.9.2-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_net_17 pg_net_17-0.9.2-2PIGSTY.el9.x86_64.rpm pigsty 0.9.2 26.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_net_17-0.9.2-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_net_17 pg_net_17-0.9.2-2PIGSTY.el9.aarch64.rpm pigsty 0.9.2 26.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_net_17-0.9.2-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.20.2-1PIGSTY.el10.x86_64.rpm pigsty 0.20.2 36.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_17-0.20.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.20.0-1PGDG.rhel10.x86_64.rpm pgdg 0.20.0 33.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.20.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.19.7-1PGDG.rhel10.x86_64.rpm pgdg 0.19.7 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.19.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.19.6-1PGDG.rhel10.x86_64.rpm pgdg 0.19.6 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.19.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.19.5-1PGDG.rhel10.x86_64.rpm pgdg 0.19.5 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.19.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.19.4-1PGDG.rhel10.x86_64.rpm pgdg 0.19.4 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.19.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.19.3-1PGDG.rhel10.x86_64.rpm pgdg 0.19.3 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.19.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.19.1-1PGDG.rhel10.x86_64.rpm pgdg 0.19.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.19.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.19.0-1PGDG.rhel10.x86_64.rpm pgdg 0.19.0 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.19.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.16.0-1PGDG.rhel10.x86_64.rpm pgdg 0.16.0 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.16.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.15.1-1PGDG.rhel10.x86_64.rpm pgdg 0.15.1 28.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.15.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.20.2-1PIGSTY.el10.aarch64.rpm pigsty 0.20.2 36.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_17-0.20.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.20.0-1PGDG.rhel10.aarch64.rpm pgdg 0.20.0 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.20.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.19.7-1PGDG.rhel10.aarch64.rpm pgdg 0.19.7 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.19.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.19.6-1PGDG.rhel10.aarch64.rpm pgdg 0.19.6 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.19.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.19.5-1PGDG.rhel10.aarch64.rpm pgdg 0.19.5 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.19.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.19.4-1PGDG.rhel10.aarch64.rpm pgdg 0.19.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.19.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.19.3-1PGDG.rhel10.aarch64.rpm pgdg 0.19.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.19.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.19.1-1PGDG.rhel10.aarch64.rpm pgdg 0.19.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.19.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.19.0-1PGDG.rhel10.aarch64.rpm pgdg 0.19.0 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.19.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.16.0-1PGDG.rhel10.aarch64.rpm pgdg 0.16.0 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.16.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.15.1-1PGDG.rhel10.aarch64.rpm pgdg 0.15.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.15.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb pigsty 0.20.2 60.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-17-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb pigsty 0.20.2 58.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-17-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb pigsty 0.20.2 60.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-17-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb pigsty 0.20.2 58.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-17-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 44.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-17-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 43.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-17-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.2-1PIGSTY~noble_amd64.deb pigsty 0.20.2 62.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-17-pg-net_0.20.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.2-1PIGSTY~noble_arm64.deb pigsty 0.20.2 61.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-17-pg-net_0.20.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_net_16 pg_net_16-0.9.2-2PIGSTY.el8.x86_64.rpm pigsty 0.9.2 27.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_net_16-0.9.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_net_16 pg_net_16-0.9.2-1PGDG.rhel8.x86_64.rpm pgdg 0.9.2 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_net_16-0.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_net_16 pg_net_16-0.9.1-1PGDG.rhel8.x86_64.rpm pgdg 0.9.1 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_net_16-0.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_net_16 pg_net_16-0.9.2-2PIGSTY.el8.aarch64.rpm pigsty 0.9.2 26.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_net_16-0.9.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_net_16 pg_net_16-0.9.2-1PGDG.rhel8.aarch64.rpm pgdg 0.9.2 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_net_16-0.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_net_16 pg_net_16-0.9.1-1PGDG.rhel8.aarch64.rpm pgdg 0.9.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_net_16-0.9.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_net_16 pg_net_16-0.9.2-2PIGSTY.el9.x86_64.rpm pigsty 0.9.2 26.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_net_16-0.9.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_net_16 pg_net_16-0.9.2-1PGDG.rhel9.x86_64.rpm pgdg 0.9.2 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_net_16-0.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_net_16 pg_net_16-0.9.1-1PGDG.rhel9.x86_64.rpm pgdg 0.9.1 20.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_net_16-0.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_net_16 pg_net_16-0.9.2-2PIGSTY.el9.aarch64.rpm pigsty 0.9.2 26.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_net_16-0.9.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_net_16 pg_net_16-0.9.2-1PGDG.rhel9.aarch64.rpm pgdg 0.9.2 21.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_net_16-0.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_net_16 pg_net_16-0.9.1-1PGDG.rhel9.aarch64.rpm pgdg 0.9.1 20.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_net_16-0.9.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.20.2-1PIGSTY.el10.x86_64.rpm pigsty 0.20.2 36.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_16-0.20.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.20.0-1PGDG.rhel10.x86_64.rpm pgdg 0.20.0 33.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.20.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.19.7-1PGDG.rhel10.x86_64.rpm pgdg 0.19.7 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.19.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.19.6-1PGDG.rhel10.x86_64.rpm pgdg 0.19.6 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.19.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.19.5-1PGDG.rhel10.x86_64.rpm pgdg 0.19.5 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.19.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.19.4-1PGDG.rhel10.x86_64.rpm pgdg 0.19.4 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.19.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.19.3-1PGDG.rhel10.x86_64.rpm pgdg 0.19.3 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.19.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.19.1-1PGDG.rhel10.x86_64.rpm pgdg 0.19.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.19.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.19.0-1PGDG.rhel10.x86_64.rpm pgdg 0.19.0 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.19.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.16.0-1PGDG.rhel10.x86_64.rpm pgdg 0.16.0 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.16.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.15.1-1PGDG.rhel10.x86_64.rpm pgdg 0.15.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.15.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.20.2-1PIGSTY.el10.aarch64.rpm pigsty 0.20.2 36.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_16-0.20.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.20.0-1PGDG.rhel10.aarch64.rpm pgdg 0.20.0 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.20.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.19.7-1PGDG.rhel10.aarch64.rpm pgdg 0.19.7 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.19.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.19.6-1PGDG.rhel10.aarch64.rpm pgdg 0.19.6 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.19.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.19.5-1PGDG.rhel10.aarch64.rpm pgdg 0.19.5 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.19.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.19.4-1PGDG.rhel10.aarch64.rpm pgdg 0.19.4 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.19.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.19.3-1PGDG.rhel10.aarch64.rpm pgdg 0.19.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.19.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.19.1-1PGDG.rhel10.aarch64.rpm pgdg 0.19.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.19.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.19.0-1PGDG.rhel10.aarch64.rpm pgdg 0.19.0 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.19.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.16.0-1PGDG.rhel10.aarch64.rpm pgdg 0.16.0 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.16.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.15.1-1PGDG.rhel10.aarch64.rpm pgdg 0.15.1 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.15.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb pigsty 0.20.2 60.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-16-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb pigsty 0.20.2 58.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-16-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb pigsty 0.20.2 60.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-16-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb pigsty 0.20.2 58.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-16-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 44.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-16-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 43.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-16-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.2-1PIGSTY~noble_amd64.deb pigsty 0.20.2 62.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-16-pg-net_0.20.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.2-1PIGSTY~noble_arm64.deb pigsty 0.20.2 61.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-16-pg-net_0.20.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_net_15 pg_net_15-0.9.2-2PIGSTY.el8.x86_64.rpm pigsty 0.9.2 27.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_net_15-0.9.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_net_15 pg_net_15-0.9.2-1PGDG.rhel8.x86_64.rpm pgdg 0.9.2 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_net_15-0.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_net_15 pg_net_15-0.9.1-1PGDG.rhel8.x86_64.rpm pgdg 0.9.1 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_net_15-0.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_net_15 pg_net_15-0.9.2-2PIGSTY.el8.aarch64.rpm pigsty 0.9.2 27.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_net_15-0.9.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_net_15 pg_net_15-0.9.2-1PGDG.rhel8.aarch64.rpm pgdg 0.9.2 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_net_15-0.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_net_15 pg_net_15-0.9.1-1PGDG.rhel8.aarch64.rpm pgdg 0.9.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_net_15-0.9.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_net_15 pg_net_15-0.9.2-2PIGSTY.el9.x86_64.rpm pigsty 0.9.2 27.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_net_15-0.9.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_net_15 pg_net_15-0.9.2-1PGDG.rhel9.x86_64.rpm pgdg 0.9.2 22.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_net_15-0.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_net_15 pg_net_15-0.9.1-1PGDG.rhel9.x86_64.rpm pgdg 0.9.1 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_net_15-0.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_net_15 pg_net_15-0.9.2-2PIGSTY.el9.aarch64.rpm pigsty 0.9.2 26.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_net_15-0.9.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_net_15 pg_net_15-0.9.2-1PGDG.rhel9.aarch64.rpm pgdg 0.9.2 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_net_15-0.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_net_15 pg_net_15-0.9.1-1PGDG.rhel9.aarch64.rpm pgdg 0.9.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_net_15-0.9.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.20.2-1PIGSTY.el10.x86_64.rpm pigsty 0.20.2 37.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_15-0.20.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.20.0-1PGDG.rhel10.x86_64.rpm pgdg 0.20.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.20.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.19.7-1PGDG.rhel10.x86_64.rpm pgdg 0.19.7 33.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.19.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.19.6-1PGDG.rhel10.x86_64.rpm pgdg 0.19.6 33.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.19.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.19.5-1PGDG.rhel10.x86_64.rpm pgdg 0.19.5 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.19.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.19.4-1PGDG.rhel10.x86_64.rpm pgdg 0.19.4 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.19.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.19.3-1PGDG.rhel10.x86_64.rpm pgdg 0.19.3 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.19.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.19.1-1PGDG.rhel10.x86_64.rpm pgdg 0.19.1 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.19.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.19.0-1PGDG.rhel10.x86_64.rpm pgdg 0.19.0 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.19.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.16.0-1PGDG.rhel10.x86_64.rpm pgdg 0.16.0 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.16.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.15.1-1PGDG.rhel10.x86_64.rpm pgdg 0.15.1 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.15.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.20.2-1PIGSTY.el10.aarch64.rpm pigsty 0.20.2 37.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_15-0.20.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.20.0-1PGDG.rhel10.aarch64.rpm pgdg 0.20.0 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.20.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.19.7-1PGDG.rhel10.aarch64.rpm pgdg 0.19.7 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.19.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.19.6-1PGDG.rhel10.aarch64.rpm pgdg 0.19.6 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.19.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.19.5-1PGDG.rhel10.aarch64.rpm pgdg 0.19.5 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.19.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.19.4-1PGDG.rhel10.aarch64.rpm pgdg 0.19.4 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.19.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.19.3-1PGDG.rhel10.aarch64.rpm pgdg 0.19.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.19.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.19.1-1PGDG.rhel10.aarch64.rpm pgdg 0.19.1 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.19.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.19.0-1PGDG.rhel10.aarch64.rpm pgdg 0.19.0 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.19.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.16.0-1PGDG.rhel10.aarch64.rpm pgdg 0.16.0 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.16.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.15.1-1PGDG.rhel10.aarch64.rpm pgdg 0.15.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.15.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb pigsty 0.20.2 60.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-15-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb pigsty 0.20.2 59.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-15-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb pigsty 0.20.2 60.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-15-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb pigsty 0.20.2 59.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-15-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 44.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-15-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 43.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-15-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.2-1PIGSTY~noble_amd64.deb pigsty 0.20.2 63.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-15-pg-net_0.20.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.2-1PIGSTY~noble_arm64.deb pigsty 0.20.2 62.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-15-pg-net_0.20.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_net_14 pg_net_14-0.9.2-2PIGSTY.el8.x86_64.rpm pigsty 0.9.2 27.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_net_14-0.9.2-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_net_14 pg_net_14-0.9.2-1PGDG.rhel8.x86_64.rpm pgdg 0.9.2 21.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_net_14-0.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_net_14 pg_net_14-0.9.1-1PGDG.rhel8.x86_64.rpm pgdg 0.9.1 21.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_net_14-0.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_net_14 pg_net_14-0.9.2-2PIGSTY.el8.aarch64.rpm pigsty 0.9.2 27.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_net_14-0.9.2-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_net_14 pg_net_14-0.9.2-1PGDG.rhel8.aarch64.rpm pgdg 0.9.2 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_net_14-0.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_net_14 pg_net_14-0.9.1-1PGDG.rhel8.aarch64.rpm pgdg 0.9.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_net_14-0.9.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_net_14 pg_net_14-0.9.2-2PIGSTY.el9.x86_64.rpm pigsty 0.9.2 27.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_net_14-0.9.2-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_net_14 pg_net_14-0.9.2-1PGDG.rhel9.x86_64.rpm pgdg 0.9.2 22.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_net_14-0.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_net_14 pg_net_14-0.9.1-1PGDG.rhel9.x86_64.rpm pgdg 0.9.1 21.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_net_14-0.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_net_14 pg_net_14-0.9.2-2PIGSTY.el9.aarch64.rpm pigsty 0.9.2 26.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_net_14-0.9.2-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_net_14 pg_net_14-0.9.2-1PGDG.rhel9.aarch64.rpm pgdg 0.9.2 21.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_net_14-0.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_net_14 pg_net_14-0.9.1-1PGDG.rhel9.aarch64.rpm pgdg 0.9.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_net_14-0.9.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.20.2-1PIGSTY.el10.x86_64.rpm pigsty 0.20.2 37.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_14-0.20.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.20.0-1PGDG.rhel10.x86_64.rpm pgdg 0.20.0 34.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.20.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.19.7-1PGDG.rhel10.x86_64.rpm pgdg 0.19.7 33.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.19.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.19.6-1PGDG.rhel10.x86_64.rpm pgdg 0.19.6 33.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.19.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.19.5-1PGDG.rhel10.x86_64.rpm pgdg 0.19.5 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.19.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.19.4-1PGDG.rhel10.x86_64.rpm pgdg 0.19.4 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.19.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.19.3-1PGDG.rhel10.x86_64.rpm pgdg 0.19.3 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.19.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.19.1-1PGDG.rhel10.x86_64.rpm pgdg 0.19.1 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.19.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.19.0-1PGDG.rhel10.x86_64.rpm pgdg 0.19.0 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.19.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.16.0-1PGDG.rhel10.x86_64.rpm pgdg 0.16.0 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.16.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.15.1-1PGDG.rhel10.x86_64.rpm pgdg 0.15.1 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.15.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.20.2-1PIGSTY.el10.aarch64.rpm pigsty 0.20.2 37.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_14-0.20.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.20.0-1PGDG.rhel10.aarch64.rpm pgdg 0.20.0 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.20.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.19.7-1PGDG.rhel10.aarch64.rpm pgdg 0.19.7 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.19.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.19.6-1PGDG.rhel10.aarch64.rpm pgdg 0.19.6 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.19.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.19.5-1PGDG.rhel10.aarch64.rpm pgdg 0.19.5 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.19.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.19.4-1PGDG.rhel10.aarch64.rpm pgdg 0.19.4 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.19.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.19.3-1PGDG.rhel10.aarch64.rpm pgdg 0.19.3 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.19.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.19.1-1PGDG.rhel10.aarch64.rpm pgdg 0.19.1 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.19.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.19.0-1PGDG.rhel10.aarch64.rpm pgdg 0.19.0 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.19.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.16.0-1PGDG.rhel10.aarch64.rpm pgdg 0.16.0 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.16.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.15.1-1PGDG.rhel10.aarch64.rpm pgdg 0.15.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.15.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb pigsty 0.20.2 60.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-14-pg-net_0.20.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb pigsty 0.20.2 58.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-14-pg-net_0.20.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb pigsty 0.20.2 60.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-14-pg-net_0.20.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb pigsty 0.20.2 58.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-14-pg-net_0.20.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 44.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-14-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 43.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-14-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.2-1PIGSTY~noble_amd64.deb pigsty 0.20.2 63.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-14-pg-net_0.20.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.2-1PIGSTY~noble_arm64.deb pigsty 0.20.2 62.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-14-pg-net_0.20.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_net` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_net         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_net` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_net;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_net -v 18  # PG 18
pig ext install -y pg_net -v 17  # PG 17
pig ext install -y pg_net -v 16  # PG 16
pig ext install -y pg_net -v 15  # PG 15
pig ext install -y pg_net -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_net_18       # PG 18
dnf install -y pg_net_17       # PG 17
dnf install -y pg_net_16       # PG 16
dnf install -y pg_net_15       # PG 15
dnf install -y pg_net_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-net   # PG 18
apt install -y postgresql-17-pg-net   # PG 17
apt install -y postgresql-16-pg-net   # PG 16
apt install -y postgresql-15-pg-net   # PG 15
apt install -y postgresql-14-pg-net   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_net';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_net;
```



## 用法

> [pg_net: 在 SQL 中发起异步 HTTP/HTTPS 请求](https://github.com/supabase/pg_net)

该扩展需要在 `postgresql.conf` 中设置 `shared_preload_libraries = 'pg_net'`。

### GET 请求

```sql
SELECT net.http_get('https://postman-echo.com/get?foo=bar') AS request_id;
```

使用 URL 编码参数和请求头：

```sql
SELECT net.http_get(
  'https://postman-echo.com/get',
  params := '{"foo": "bar"}'::JSONB,
  headers := '{"API-KEY": "<key>"}'::JSONB
) AS request_id;
```

### POST 请求

```sql
SELECT net.http_post(
    'https://postman-echo.com/post',
    '{"key": "value"}'::JSONB,
    headers := '{"Content-Type": "application/json"}'::JSONB
) AS request_id;
```

将表行作为请求体发送：

```sql
WITH row AS (SELECT * FROM my_table LIMIT 1)
SELECT net.http_post(
    'https://api.example.com/data',
    to_jsonb(row.*)
) AS request_id
FROM row;
```

### DELETE 请求

```sql
SELECT net.http_delete('https://api.example.com/resource/42') AS request_id;
```

### 查看响应

```sql
SELECT * FROM net._http_response;
```

### 配置

```sql
SHOW pg_net.batch_size;       -- 默认值：200，每个处理周期的最大行数
SHOW pg_net.ttl;              -- 默认值：6 小时，响应保留时间
SHOW pg_net.database_name;    -- 默认值：'postgres'
```

修改设置：

```sql
ALTER SYSTEM SET pg_net.ttl TO '1 hour';
ALTER SYSTEM SET pg_net.batch_size TO 500;
SELECT pg_reload_conf();
```

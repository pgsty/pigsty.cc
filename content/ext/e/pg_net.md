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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_net-0.20.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_net-0.20.3.tar.gz</div>
    <div class="ext-card__desc">pg_net-0.20.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_net`**](/ext/e/pg_net) | `0.20.3` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4080  | [**`pg_net`**](/ext/e/pg_net) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `net` |
{.ext-table}

| **相关扩展** | [`http`](/ext/e/http) [`pg_curl`](/ext/e/pg_curl) [`pgjwt`](/ext/e/pgjwt) [`pg_smtp_client`](/ext/e/pg_smtp_client) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`pgjq`](/ext/e/pgjq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pgmb`](/ext/e/pgmb) |
{.ext-table .ext-table--rel}


> 0.20.3 on d12/d13/el10/u24/u26; el8/el9/u22 remain on 0.9.2 due older libcurl.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.20.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_net` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.20.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_net_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.20.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-net` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 |
| el8.aarch64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 |
| el9.x86_64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 |
| el9.aarch64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 | AVAIL PIGSTY 0.9.2 3 |
| el10.x86_64 | AVAIL PGDG 0.20.4 7 | AVAIL PGDG 0.20.4 15 | AVAIL PGDG 0.20.4 15 | AVAIL PGDG 0.20.4 15 | AVAIL PGDG 0.20.4 15 |
| el10.aarch64 | AVAIL PGDG 0.20.4 6 | AVAIL PGDG 0.20.4 14 | AVAIL PGDG 0.20.4 14 | AVAIL PGDG 0.20.4 14 | AVAIL PGDG 0.20.4 14 |
| d12.x86_64 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 | AVAIL PIGSTY 0.9.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 |
| u26.x86_64 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 |
| u26.aarch64 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 | AVAIL PIGSTY 0.20.3 1 |
@ el8.x86_64 18 pg_net_18 pg_net_18-0.9.2-2PIGSTY.el8.x86_64.rpm pigsty 0.9.2 27.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_net_18-0.9.2-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_net_18 pg_net_18-0.9.2-2PIGSTY.el8.aarch64.rpm pigsty 0.9.2 26.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_net_18-0.9.2-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_net_18 pg_net_18-0.9.2-2PIGSTY.el9.x86_64.rpm pigsty 0.9.2 26.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_net_18-0.9.2-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_net_18 pg_net_18-0.9.2-2PIGSTY.el9.aarch64.rpm pigsty 0.9.2 26.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_net_18-0.9.2-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.20.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.4 34.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_net_18-0.20.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.20.3-1PIGSTY.el10.x86_64.rpm pigsty 0.20.3 36.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_18-0.20.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.20.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.3 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_net_18-0.20.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.20.3-1PGDG.rhel10.1.x86_64.rpm pgdg 0.20.3 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_net_18-0.20.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.20.3-1PGDG.rhel10.0.x86_64.rpm pgdg 0.20.3 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_net_18-0.20.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.20.0-1PGDG.rhel10.x86_64.rpm pgdg 0.20.0 33.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_net_18-0.20.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_net_18 pg_net_18-0.19.7-1PGDG.rhel10.x86_64.rpm pgdg 0.19.7 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_net_18-0.19.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.20.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.20.4 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_net_18-0.20.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.20.3-1PIGSTY.el10.aarch64.rpm pigsty 0.20.3 36.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_18-0.20.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.20.3-1PGDG.rhel10.1.aarch64.rpm pgdg 0.20.3 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_net_18-0.20.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.20.3-1PGDG.rhel10.0.aarch64.rpm pgdg 0.20.3 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_net_18-0.20.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.20.0-1PGDG.rhel10.aarch64.rpm pgdg 0.20.0 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_net_18-0.20.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_net_18 pg_net_18-0.19.7-1PGDG.rhel10.aarch64.rpm pgdg 0.19.7 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_net_18-0.19.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb pigsty 0.20.3 60.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-18-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb pigsty 0.20.3 58.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-18-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb pigsty 0.20.3 60.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-18-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb pigsty 0.20.3 59.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-18-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 41.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-18-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 40.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-18-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.3-1PIGSTY~noble_amd64.deb pigsty 0.20.3 62.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-18-pg-net_0.20.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.3-1PIGSTY~noble_arm64.deb pigsty 0.20.3 61.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-18-pg-net_0.20.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb pigsty 0.20.3 62.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-18-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-net postgresql-18-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb pigsty 0.20.3 61.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-18-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_net_17 pg_net_17-0.9.2-2PIGSTY.el8.x86_64.rpm pigsty 0.9.2 27.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_net_17-0.9.2-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_net_17 pg_net_17-0.9.2-2PIGSTY.el8.aarch64.rpm pigsty 0.9.2 26.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_net_17-0.9.2-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_net_17 pg_net_17-0.9.2-2PIGSTY.el9.x86_64.rpm pigsty 0.9.2 26.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_net_17-0.9.2-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_net_17 pg_net_17-0.9.2-2PIGSTY.el9.aarch64.rpm pigsty 0.9.2 26.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_net_17-0.9.2-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.20.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.4 34.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.20.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.20.3-1PIGSTY.el10.x86_64.rpm pigsty 0.20.3 36.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_17-0.20.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.20.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.3 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.20.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.20.3-1PGDG.rhel10.1.x86_64.rpm pgdg 0.20.3 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.20.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_net_17 pg_net_17-0.20.3-1PGDG.rhel10.0.x86_64.rpm pgdg 0.20.3 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_net_17-0.20.3-1PGDG.rhel10.0.x86_64.rpm
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
@ el10.aarch64 17 pg_net_17 pg_net_17-0.20.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.20.4 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.20.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.20.3-1PIGSTY.el10.aarch64.rpm pigsty 0.20.3 36.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_17-0.20.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.20.3-1PGDG.rhel10.1.aarch64.rpm pgdg 0.20.3 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.20.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_net_17 pg_net_17-0.20.3-1PGDG.rhel10.0.aarch64.rpm pgdg 0.20.3 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_net_17-0.20.3-1PGDG.rhel10.0.aarch64.rpm
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
@ d12.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb pigsty 0.20.3 60.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-17-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb pigsty 0.20.3 58.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-17-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb pigsty 0.20.3 60.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-17-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb pigsty 0.20.3 58.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-17-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 44.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-17-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 43.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-17-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.3-1PIGSTY~noble_amd64.deb pigsty 0.20.3 62.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-17-pg-net_0.20.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.3-1PIGSTY~noble_arm64.deb pigsty 0.20.3 61.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-17-pg-net_0.20.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb pigsty 0.20.3 62.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-17-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-net postgresql-17-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb pigsty 0.20.3 61.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-17-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb
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
@ el10.x86_64 16 pg_net_16 pg_net_16-0.20.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.4 34.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.20.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.20.3-1PIGSTY.el10.x86_64.rpm pigsty 0.20.3 36.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_16-0.20.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.20.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.3 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.20.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.20.3-1PGDG.rhel10.1.x86_64.rpm pgdg 0.20.3 34.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.20.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_net_16 pg_net_16-0.20.3-1PGDG.rhel10.0.x86_64.rpm pgdg 0.20.3 34.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_net_16-0.20.3-1PGDG.rhel10.0.x86_64.rpm
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
@ el10.aarch64 16 pg_net_16 pg_net_16-0.20.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.20.4 34.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.20.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.20.3-1PIGSTY.el10.aarch64.rpm pigsty 0.20.3 36.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_16-0.20.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.20.3-1PGDG.rhel10.1.aarch64.rpm pgdg 0.20.3 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.20.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_net_16 pg_net_16-0.20.3-1PGDG.rhel10.0.aarch64.rpm pgdg 0.20.3 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_net_16-0.20.3-1PGDG.rhel10.0.aarch64.rpm
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
@ d12.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb pigsty 0.20.3 60.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-16-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb pigsty 0.20.3 58.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-16-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb pigsty 0.20.3 60.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-16-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb pigsty 0.20.3 59.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-16-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 44.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-16-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 43.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-16-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.3-1PIGSTY~noble_amd64.deb pigsty 0.20.3 62.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-16-pg-net_0.20.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.3-1PIGSTY~noble_arm64.deb pigsty 0.20.3 61.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-16-pg-net_0.20.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb pigsty 0.20.3 62.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-16-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-net postgresql-16-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb pigsty 0.20.3 61.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-16-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb
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
@ el10.x86_64 15 pg_net_15 pg_net_15-0.20.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.4 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.20.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.20.3-1PIGSTY.el10.x86_64.rpm pigsty 0.20.3 37.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_15-0.20.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.20.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.3 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.20.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.20.3-1PGDG.rhel10.1.x86_64.rpm pgdg 0.20.3 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.20.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_net_15 pg_net_15-0.20.3-1PGDG.rhel10.0.x86_64.rpm pgdg 0.20.3 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_net_15-0.20.3-1PGDG.rhel10.0.x86_64.rpm
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
@ el10.aarch64 15 pg_net_15 pg_net_15-0.20.4-1PGDG.rhel10.2.aarch64.rpm pgdg 0.20.4 35.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.20.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.20.3-1PIGSTY.el10.aarch64.rpm pigsty 0.20.3 37.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_15-0.20.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.20.3-1PGDG.rhel10.1.aarch64.rpm pgdg 0.20.3 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.20.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_net_15 pg_net_15-0.20.3-1PGDG.rhel10.0.aarch64.rpm pgdg 0.20.3 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_net_15-0.20.3-1PGDG.rhel10.0.aarch64.rpm
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
@ d12.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb pigsty 0.20.3 61.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-15-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb pigsty 0.20.3 59.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-15-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb pigsty 0.20.3 60.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-15-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb pigsty 0.20.3 59.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-15-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 44.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-15-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 43.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-15-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.3-1PIGSTY~noble_amd64.deb pigsty 0.20.3 63.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-15-pg-net_0.20.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.3-1PIGSTY~noble_arm64.deb pigsty 0.20.3 62.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-15-pg-net_0.20.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb pigsty 0.20.3 63.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-15-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-net postgresql-15-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb pigsty 0.20.3 62.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-15-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb
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
@ el10.x86_64 14 pg_net_14 pg_net_14-0.20.4-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.4 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.20.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.20.3-1PIGSTY.el10.x86_64.rpm pigsty 0.20.3 37.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_net_14-0.20.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.20.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.20.3 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.20.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.20.3-1PGDG.rhel10.1.x86_64.rpm pgdg 0.20.3 35.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.20.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_net_14 pg_net_14-0.20.3-1PGDG.rhel10.0.x86_64.rpm pgdg 0.20.3 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_net_14-0.20.3-1PGDG.rhel10.0.x86_64.rpm
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
@ el10.aarch64 14 pg_net_14 pg_net_14-0.20.4-1PGDG.rhel10.1.aarch64.rpm pgdg 0.20.4 35.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.20.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.20.3-1PIGSTY.el10.aarch64.rpm pigsty 0.20.3 37.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_net_14-0.20.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.20.3-1PGDG.rhel10.1.aarch64.rpm pgdg 0.20.3 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.20.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_net_14 pg_net_14-0.20.3-1PGDG.rhel10.0.aarch64.rpm pgdg 0.20.3 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_net_14-0.20.3-1PGDG.rhel10.0.aarch64.rpm
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
@ d12.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb pigsty 0.20.3 60.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-14-pg-net_0.20.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb pigsty 0.20.3 58.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-net/postgresql-14-pg-net_0.20.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb pigsty 0.20.3 60.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-14-pg-net_0.20.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb pigsty 0.20.3 59.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-net/postgresql-14-pg-net_0.20.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb pigsty 0.9.2 44.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-14-pg-net_0.9.2-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb pigsty 0.9.2 43.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-net/postgresql-14-pg-net_0.9.2-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.3-1PIGSTY~noble_amd64.deb pigsty 0.20.3 63.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-14-pg-net_0.20.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.3-1PIGSTY~noble_arm64.deb pigsty 0.20.3 62.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-net/postgresql-14-pg-net_0.20.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb pigsty 0.20.3 63.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-14-pg-net_0.20.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-net postgresql-14-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb pigsty 0.20.3 62.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-net/postgresql-14-pg-net_0.20.3-1PIGSTY~resolute_arm64.deb
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

来源：[official README](https://github.com/supabase/pg_net)、[v0.20.3 release notes](https://github.com/supabase/pg_net/releases/tag/v0.20.3)、[local package metadata](../db/extension.csv)。

`pg_net` 可以从 SQL 中排队发起异步 HTTP 和 HTTPS 请求。它会创建 `net` 模式，将待处理工作存入 `net.http_request_queue`，并将响应存入 `net._http_response`。后台工作进程使用 `libcurl` 处理队列中的请求。

该扩展要求配置 `shared_preload_libraries = 'pg_net'`，并需要 `libcurl >= 7.83`。

### GET 请求

```sql
CREATE EXTENSION pg_net;

SELECT net.http_get(
  'https://postman-echo.com/get',
  params := '{"foo": "bar"}'::jsonb,
  headers := '{"API-KEY": "<key>"}'::jsonb,
  timeout_milliseconds := 1000
) AS request_id;
```

`net.http_get(url, params, headers, timeout_milliseconds)` 返回一个 `bigint` 请求 ID。

### POST 请求

```sql
SELECT net.http_post(
  'https://postman-echo.com/post',
  body := '{"key": "value"}'::jsonb,
  headers := '{"Content-Type": "application/json"}'::jsonb,
  timeout_milliseconds := 1000
) AS request_id;
```

将一行表数据作为 JSON 发送：

```sql
WITH selected_row AS (
  SELECT * FROM my_table LIMIT 1
)
SELECT net.http_post(
  'https://api.example.com/data',
  to_jsonb(selected_row.*)
) AS request_id
FROM selected_row;
```

### DELETE 请求

```sql
SELECT net.http_delete(
  'https://api.example.com/resource/42',
  timeout_milliseconds := 2000
) AS request_id;
```

`net.http_delete(url, params, headers, timeout_milliseconds)` 是 `SECURITY DEFINER`，并返回一个 `bigint` 请求 ID。

### 查看响应

```sql
SELECT id, status_code, content, error_msg, created
FROM net._http_response
ORDER BY created DESC;
```

可以通过 `status_code` 和 `error_msg` 识别失败请求。响应表不会保留所有原始请求参数；如果需要实现重试工作流，请单独保存请求元数据。

### 配置

```sql
SHOW pg_net.batch_size;
SHOW pg_net.ttl;
SHOW pg_net.database_name;
SHOW pg_net.username;
```

- `pg_net.batch_size` 默认值为 `200`，限制工作进程每轮处理的队列请求数量。
- `pg_net.ttl` 默认值为 `6 hours`，控制响应保留时间。
- `pg_net.database_name` 默认值为 `postgres`，选择工作进程运行所在数据库。
- `pg_net.username` 默认值为 NULL，选择工作进程连接用户；NULL 表示使用引导用户。

可以在 `postgresql.conf` 中修改设置，也可以使用 `ALTER SYSTEM`：

```sql
ALTER SYSTEM SET pg_net.ttl TO '1 hour';
ALTER SYSTEM SET pg_net.batch_size TO 500;
SELECT pg_reload_conf();
```

修改 `pg_net.database_name` 或 `pg_net.username` 后，需要重启工作进程：

```sql
SELECT net.worker_restart();
```

### 注意事项

- Pigsty 元数据记录 PostgreSQL 14-18 的 `pg_net` 版本为 0.20.3，但本地包备注说明 0.20.3 只在 `d12`、`d13`、`el10`、`u24` 和 `u26` 上可用；由于旧版 `libcurl`，`el8`、`el9` 和 `u22` 仍停留在 0.9.2。
- 上游文档声明兼容 PostgreSQL 12+，但此目录行面向 PostgreSQL 14-18 打包。
- `pg_net` 通过 `pg_net.database_name` 在每个集群中只支持一个数据库。
- v0.20.3 是工作进程/维护发布：它会刷新 pgstat 计数器以便 autovacuum 可见，并向 `pg_stat_activity` 报告工作进程活动；没有记录新的 SQL 请求 API。

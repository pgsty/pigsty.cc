---
title: "pg_partman"
linkTitle: "pg_partman"
description: "用于按时间或 ID 管理分区表的扩展"
weight: 2510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgpartman/pg_partman">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgpartman/pg_partman</div>
    <div class="ext-card__desc">https://github.com/pgpartman/pg_partman</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_partman-5.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_partman-5.5.0.tar.gz</div>
    <div class="ext-card__desc">pg_partman-5.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_partman`**](/ext/e/pg_partman) | `5.5.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2510  | [**`pg_partman`**](/ext/e/pg_partman) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`timescaledb`](/ext/e/timescaledb) [`pg_ttl_index`](/ext/e/pg_ttl_index) [`citus`](/ext/e/citus) [`pg_fkpart`](/ext/e/pg_fkpart) [`timeseries`](/ext/e/timeseries) [`pg_cron`](/ext/e/pg_cron) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | `partman_to_cstore` [`timeseries`](/ext/e/timeseries) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_partman` | `plpgsql` |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_partman_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-partman` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 5.5.0 9 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 18 | AVAIL PIGSTY 5.5.0 22 | AVAIL PIGSTY 5.5.0 26 |
| el8.aarch64 | AVAIL PIGSTY 5.5.0 9 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 18 | AVAIL PIGSTY 5.5.0 21 | AVAIL PIGSTY 5.5.0 21 |
| el9.x86_64 | AVAIL PGDG 5.5.0 14 | AVAIL PGDG 5.5.0 19 | AVAIL PGDG 5.5.0 23 | AVAIL PGDG 5.5.0 27 | AVAIL PGDG 5.5.0 29 |
| el9.aarch64 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 19 | AVAIL PIGSTY 5.5.0 23 | AVAIL PIGSTY 5.5.0 26 | AVAIL PIGSTY 5.5.0 26 |
| el10.x86_64 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 14 |
| el10.aarch64 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 14 | AVAIL PIGSTY 5.5.0 14 |
| d12.x86_64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| d12.aarch64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| d13.x86_64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| d13.aarch64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| u22.x86_64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| u22.aarch64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| u24.x86_64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| u24.aarch64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| u26.x86_64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
| u26.aarch64 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 | AVAIL PIGSTY 5.5.0 4 |
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.5.0-1PIGSTY.el8.x86_64.rpm pigsty 5.5.0 290.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_partman_18-5.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.3 279.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel8.x86_64.rpm pgdg 5.2.4 262.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.2.4-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.5.0-1PIGSTY.el8.aarch64.rpm pigsty 5.5.0 290.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_partman_18-5.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.3 279.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 279.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel8.aarch64.rpm pgdg 5.2.4 262.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.2.4-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.5.0-2PGDG.rhel9.8.x86_64.rpm pgdg 5.5.0 218.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.5.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.5.0-1PIGSTY.el9.x86_64.rpm pigsty 5.5.0 230.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_partman_18-5.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.3 218.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.2 218.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.1 217.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.0 216.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 213.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel9.x86_64.rpm pgdg 5.2.4 208.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.2.4-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.5.0-1PIGSTY.el9.aarch64.rpm pigsty 5.5.0 230.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_partman_18-5.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.5.0-1PGDG.rhel9.8.aarch64.rpm pgdg 5.5.0 220.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.5.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.1 217.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.2.4-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.5.0-1PIGSTY.el10.x86_64.rpm pigsty 5.5.0 232.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_partman_18-5.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.5.0-1PGDG.rhel10.2.x86_64.rpm pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.5.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 5.4.3 220.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.3 221.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.2 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.1 220.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.0 218.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.5.0-1PIGSTY.el10.aarch64.rpm pigsty 5.5.0 232.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_partman_18-5.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.2 220.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.0 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~bookworm_amd64.deb pigsty 5.5.0 187.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg12+1_amd64.deb pgdg 5.5.0 242.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg12+1_amd64.deb pgdg 5.4.3 238.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~bookworm_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg12+1_arm64.deb pgdg 5.5.0 242.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg12+1_arm64.deb pgdg 5.4.3 238.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~trixie_amd64.deb pigsty 5.5.0 187.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg13+1_amd64.deb pgdg 5.5.0 242.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg13+1_amd64.deb pgdg 5.4.3 238.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~trixie_arm64.deb pigsty 5.5.0 187.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg13+1_arm64.deb pgdg 5.5.0 242.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg13+1_arm64.deb pgdg 5.4.3 238.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~jammy_amd64.deb pigsty 5.5.0 183.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg22.04+1_amd64.deb pgdg 5.5.0 234.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg22.04+1_amd64.deb pgdg 5.4.3 231.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 231.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~jammy_arm64.deb pigsty 5.5.0 183.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg22.04+1_arm64.deb pgdg 5.5.0 234.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg22.04+1_arm64.deb pgdg 5.4.3 230.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 230.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~noble_amd64.deb pigsty 5.5.0 182.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg24.04+1_amd64.deb pgdg 5.5.0 234.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg24.04+1_amd64.deb pgdg 5.4.3 230.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~noble_arm64.deb pigsty 5.5.0 182.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg24.04+1_arm64.deb pgdg 5.5.0 233.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg24.04+1_arm64.deb pgdg 5.4.3 230.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~resolute_amd64.deb pigsty 5.5.0 182.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg26.04+1_amd64.deb pgdg 5.5.0 233.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg26.04+1_amd64.deb pgdg 5.4.3 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg26.04+1_amd64.deb pgdg 5.4.2 230.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-2PIGSTY~resolute_arm64.deb pigsty 5.5.0 182.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-partman postgresql-18-partman_5.5.0-1.pgdg26.04+1_arm64.deb pgdg 5.5.0 233.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.5.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.3-1.pgdg26.04+1_arm64.deb pgdg 5.4.3 230.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg26.04+1_arm64.deb pgdg 5.4.2 230.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.5.0-1PIGSTY.el8.x86_64.rpm pigsty 5.5.0 290.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_partman_17-5.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.3 279.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.4-1PGDG.rhel8.x86_64.rpm pgdg 5.2.4 261.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.3-1PGDG.rhel8.x86_64.rpm pgdg 5.2.3 260.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.1-1PGDG.rhel8.x86_64.rpm pgdg 5.2.1 259.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.0-1PGDG.rhel8.x86_64.rpm pgdg 5.2.0 259.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.1.0-2PGDG.rhel8.x86_64.rpm pgdg 5.1.0 254.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.5.0-1PIGSTY.el8.aarch64.rpm pigsty 5.5.0 290.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_partman_17-5.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.3 279.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 279.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.4-1PGDG.rhel8.aarch64.rpm pgdg 5.2.4 261.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.3-1PGDG.rhel8.aarch64.rpm pgdg 5.2.3 260.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.2-1PGDG.rhel8.aarch64.rpm pgdg 5.2.2 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.1-1PGDG.rhel8.aarch64.rpm pgdg 5.2.1 259.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.0-1PGDG.rhel8.aarch64.rpm pgdg 5.2.0 259.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.1.0-2PGDG.rhel8.aarch64.rpm pgdg 5.1.0 254.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.1.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.5.0-2PGDG.rhel9.8.x86_64.rpm pgdg 5.5.0 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.5.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.5.0-1PIGSTY.el9.x86_64.rpm pigsty 5.5.0 230.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_partman_17-5.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.3 218.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.2 218.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.1 217.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.0 216.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 212.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.4-1PGDG.rhel9.x86_64.rpm pgdg 5.2.4 207.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.3-1PGDG.rhel9.x86_64.rpm pgdg 5.2.3 206.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 206.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.1-1PGDG.rhel9.x86_64.rpm pgdg 5.2.1 205.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.0-1PGDG.rhel9.x86_64.rpm pgdg 5.2.0 205.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.1.0-2PGDG.rhel9.x86_64.rpm pgdg 5.1.0 201.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.5.0-1PIGSTY.el9.aarch64.rpm pigsty 5.5.0 230.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_partman_17-5.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.5.0-1PGDG.rhel9.8.aarch64.rpm pgdg 5.5.0 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.5.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.1 217.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.0 216.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.4-1PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.3-1PGDG.rhel9.aarch64.rpm pgdg 5.2.3 207.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.2-1PGDG.rhel9.aarch64.rpm pgdg 5.2.2 206.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.1-1PGDG.rhel9.aarch64.rpm pgdg 5.2.1 205.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.0-1PGDG.rhel9.aarch64.rpm pgdg 5.2.0 205.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.1.0-2PGDG.rhel9.aarch64.rpm pgdg 5.1.0 201.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.1.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.5.0-1PIGSTY.el10.x86_64.rpm pigsty 5.5.0 232.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_partman_17-5.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.5.0-1PGDG.rhel10.2.x86_64.rpm pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.5.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.3 221.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.2 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.1 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.0 218.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.5.0-1PIGSTY.el10.aarch64.rpm pigsty 5.5.0 232.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_partman_17-5.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 5.5.0 223.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.2 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.0 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~bookworm_amd64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg12+1_amd64.deb pgdg 5.5.0 242.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg12+1_amd64.deb pgdg 5.4.3 238.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~bookworm_arm64.deb pigsty 5.5.0 187.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg12+1_arm64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg12+1_arm64.deb pgdg 5.4.3 238.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~trixie_amd64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg13+1_amd64.deb pgdg 5.5.0 242.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg13+1_amd64.deb pgdg 5.4.3 238.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~trixie_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg13+1_arm64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg13+1_arm64.deb pgdg 5.4.3 238.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~jammy_amd64.deb pigsty 5.5.0 187.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg22.04+1_amd64.deb pgdg 5.5.0 239.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg22.04+1_amd64.deb pgdg 5.4.3 235.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 235.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~jammy_arm64.deb pigsty 5.5.0 187.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg22.04+1_arm64.deb pgdg 5.5.0 238.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg22.04+1_arm64.deb pgdg 5.4.3 235.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 235.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~noble_amd64.deb pigsty 5.5.0 181.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg24.04+1_amd64.deb pgdg 5.5.0 234.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg24.04+1_amd64.deb pgdg 5.4.3 230.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~noble_arm64.deb pigsty 5.5.0 182.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg24.04+1_arm64.deb pgdg 5.5.0 233.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg24.04+1_arm64.deb pgdg 5.4.3 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~resolute_amd64.deb pigsty 5.5.0 182.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg26.04+1_amd64.deb pgdg 5.5.0 233.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg26.04+1_amd64.deb pgdg 5.4.3 230.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg26.04+1_amd64.deb pgdg 5.4.2 230.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-2PIGSTY~resolute_arm64.deb pigsty 5.5.0 182.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-partman postgresql-17-partman_5.5.0-1.pgdg26.04+1_arm64.deb pgdg 5.5.0 233.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.5.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.3-1.pgdg26.04+1_arm64.deb pgdg 5.4.3 229.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg26.04+1_arm64.deb pgdg 5.4.2 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.5.0-1PIGSTY.el8.x86_64.rpm pigsty 5.5.0 290.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_partman_16-5.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.3 279.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.4-1PGDG.rhel8.x86_64.rpm pgdg 5.2.4 261.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.3-1PGDG.rhel8.x86_64.rpm pgdg 5.2.3 260.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.1-1PGDG.rhel8.x86_64.rpm pgdg 5.2.1 259.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.0-1PGDG.rhel8.x86_64.rpm pgdg 5.2.0 259.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.1.0-1PGDG.rhel8.x86_64.rpm pgdg 5.1.0 254.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 249.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.0.0-1PGDG.rhel8.x86_64.rpm pgdg 5.0.0 248.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-4.7.4-1PGDG.rhel8.x86_64.rpm pgdg 4.7.4 246.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-4.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-4.7.3-3.rhel8.x86_64.rpm pgdg 4.7.3 246.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-4.7.3-3.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.5.0-1PIGSTY.el8.aarch64.rpm pigsty 5.5.0 290.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_partman_16-5.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.3 279.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 278.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.4-1PGDG.rhel8.aarch64.rpm pgdg 5.2.4 261.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.3-1PGDG.rhel8.aarch64.rpm pgdg 5.2.3 260.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.2-1PGDG.rhel8.aarch64.rpm pgdg 5.2.2 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.1-1PGDG.rhel8.aarch64.rpm pgdg 5.2.1 259.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.0-1PGDG.rhel8.aarch64.rpm pgdg 5.2.0 259.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.1.0-1PGDG.rhel8.aarch64.rpm pgdg 5.1.0 254.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 249.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.0.0-1PGDG.rhel8.aarch64.rpm pgdg 5.0.0 248.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-4.7.4-1PGDG.rhel8.aarch64.rpm pgdg 4.7.4 246.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-4.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-4.7.3-3.rhel8.aarch64.rpm pgdg 4.7.3 246.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-4.7.3-3.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.5.0-2PGDG.rhel9.8.x86_64.rpm pgdg 5.5.0 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.5.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.5.0-1PIGSTY.el9.x86_64.rpm pigsty 5.5.0 230.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_partman_16-5.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.2 218.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.1 217.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.0 216.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 212.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.4-1PGDG.rhel9.x86_64.rpm pgdg 5.2.4 207.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.3-1PGDG.rhel9.x86_64.rpm pgdg 5.2.3 206.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 206.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.1-1PGDG.rhel9.x86_64.rpm pgdg 5.2.1 206.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.0-1PGDG.rhel9.x86_64.rpm pgdg 5.2.0 205.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.1.0-1PGDG.rhel9.x86_64.rpm pgdg 5.1.0 201.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 197.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.0.0-1PGDG.rhel9.x86_64.rpm pgdg 5.0.0 197.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-4.7.4-1PGDG.rhel9.x86_64.rpm pgdg 4.7.4 198.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-4.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-4.7.3-3.rhel9.x86_64.rpm pgdg 4.7.3 194.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-4.7.3-3.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.5.0-1PIGSTY.el9.aarch64.rpm pigsty 5.5.0 230.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_partman_16-5.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.5.0-1PGDG.rhel9.8.aarch64.rpm pgdg 5.5.0 220.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.5.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.2 218.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.1 217.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.4-1PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.3-1PGDG.rhel9.aarch64.rpm pgdg 5.2.3 207.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.2-1PGDG.rhel9.aarch64.rpm pgdg 5.2.2 206.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.1-1PGDG.rhel9.aarch64.rpm pgdg 5.2.1 205.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.0-1PGDG.rhel9.aarch64.rpm pgdg 5.2.0 205.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.1.0-1PGDG.rhel9.aarch64.rpm pgdg 5.1.0 201.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 197.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.0.0-1PGDG.rhel9.aarch64.rpm pgdg 5.0.0 197.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-4.7.4-1PGDG.rhel9.aarch64.rpm pgdg 4.7.4 198.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-4.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-4.7.3-3.rhel9.aarch64.rpm pgdg 4.7.3 194.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-4.7.3-3.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.5.0-1PIGSTY.el10.x86_64.rpm pigsty 5.5.0 232.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_partman_16-5.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.5.0-1PGDG.rhel10.2.x86_64.rpm pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.5.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.3 220.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.3 221.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.2 220.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.1 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.0 218.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.5.0-1PIGSTY.el10.aarch64.rpm pigsty 5.5.0 232.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_partman_16-5.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.2 220.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.0 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~bookworm_amd64.deb pigsty 5.5.0 187.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg12+1_amd64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg12+1_amd64.deb pgdg 5.4.3 238.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~bookworm_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg12+1_arm64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg12+1_arm64.deb pgdg 5.4.3 238.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~trixie_amd64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg13+1_amd64.deb pgdg 5.5.0 242.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg13+1_amd64.deb pgdg 5.4.3 238.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~trixie_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg13+1_arm64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg13+1_arm64.deb pgdg 5.4.3 238.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~jammy_amd64.deb pigsty 5.5.0 187.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg22.04+1_amd64.deb pgdg 5.5.0 238.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg22.04+1_amd64.deb pgdg 5.4.3 235.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 235.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~jammy_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg22.04+1_arm64.deb pgdg 5.5.0 238.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg22.04+1_arm64.deb pgdg 5.4.3 235.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 234.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~noble_amd64.deb pigsty 5.5.0 182.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg24.04+1_amd64.deb pgdg 5.5.0 233.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg24.04+1_amd64.deb pgdg 5.4.3 230.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~noble_arm64.deb pigsty 5.5.0 181.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg24.04+1_arm64.deb pgdg 5.5.0 233.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg24.04+1_arm64.deb pgdg 5.4.3 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~resolute_amd64.deb pigsty 5.5.0 182.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg26.04+1_amd64.deb pgdg 5.5.0 233.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg26.04+1_amd64.deb pgdg 5.4.3 230.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg26.04+1_amd64.deb pgdg 5.4.2 230.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-2PIGSTY~resolute_arm64.deb pigsty 5.5.0 182.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-partman postgresql-16-partman_5.5.0-1.pgdg26.04+1_arm64.deb pgdg 5.5.0 233.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.5.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.3-1.pgdg26.04+1_arm64.deb pgdg 5.4.3 229.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg26.04+1_arm64.deb pgdg 5.4.2 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.5.0-1PIGSTY.el8.x86_64.rpm pigsty 5.5.0 290.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_partman_15-5.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.3 279.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.4-1PGDG.rhel8.x86_64.rpm pgdg 5.2.4 261.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.3-1PGDG.rhel8.x86_64.rpm pgdg 5.2.3 260.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.1-1PGDG.rhel8.x86_64.rpm pgdg 5.2.1 259.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.0-1PGDG.rhel8.x86_64.rpm pgdg 5.2.0 259.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.1.0-1PGDG.rhel8.x86_64.rpm pgdg 5.1.0 254.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 249.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.0.0-1PGDG.rhel8.x86_64.rpm pgdg 5.0.0 248.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.4-1PGDG.rhel8.x86_64.rpm pgdg 4.7.4 246.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.3-3.rhel8.x86_64.rpm pgdg 4.7.3 246.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.3-3.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.3-1.rhel8.x86_64.rpm pgdg 4.7.3 246.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.2-1.rhel8.x86_64.rpm pgdg 4.7.2 245.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.1-1.rhel8.x86_64.rpm pgdg 4.7.1 260.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.0-2.rhel8.x86_64.rpm pgdg 4.7.0 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.0-2.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.5.0-1PIGSTY.el8.aarch64.rpm pigsty 5.5.0 290.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_partman_15-5.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.3 279.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 278.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.4-1PGDG.rhel8.aarch64.rpm pgdg 5.2.4 261.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.3-1PGDG.rhel8.aarch64.rpm pgdg 5.2.3 260.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.2-1PGDG.rhel8.aarch64.rpm pgdg 5.2.2 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.1-1PGDG.rhel8.aarch64.rpm pgdg 5.2.1 259.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.0-1PGDG.rhel8.aarch64.rpm pgdg 5.2.0 259.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.1.0-1PGDG.rhel8.aarch64.rpm pgdg 5.1.0 254.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 249.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.0.0-1PGDG.rhel8.aarch64.rpm pgdg 5.0.0 248.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.4-1PGDG.rhel8.aarch64.rpm pgdg 4.7.4 246.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.3-3.rhel8.aarch64.rpm pgdg 4.7.3 246.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.3-3.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.3-1.rhel8.aarch64.rpm pgdg 4.7.3 246.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.3-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.2-1.rhel8.aarch64.rpm pgdg 4.7.2 245.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.1-1.rhel8.aarch64.rpm pgdg 4.7.1 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.1-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.5.0-2PGDG.rhel9.8.x86_64.rpm pgdg 5.5.0 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.5.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.5.0-1PIGSTY.el9.x86_64.rpm pigsty 5.5.0 230.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_partman_15-5.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 5.4.3 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.3 218.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.2 218.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.1 217.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.0 216.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 213.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.4-1PGDG.rhel9.x86_64.rpm pgdg 5.2.4 207.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.3-1PGDG.rhel9.x86_64.rpm pgdg 5.2.3 206.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 206.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.1-1PGDG.rhel9.x86_64.rpm pgdg 5.2.1 206.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.0-1PGDG.rhel9.x86_64.rpm pgdg 5.2.0 205.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.1.0-1PGDG.rhel9.x86_64.rpm pgdg 5.1.0 201.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 197.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.0.0-1PGDG.rhel9.x86_64.rpm pgdg 5.0.0 197.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.4-1PGDG.rhel9.x86_64.rpm pgdg 4.7.4 198.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.3-3.rhel9.x86_64.rpm pgdg 4.7.3 198.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.3-3.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.3-1.rhel9.x86_64.rpm pgdg 4.7.3 198.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.2-1.rhel9.x86_64.rpm pgdg 4.7.2 198.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.1-1.rhel9.x86_64.rpm pgdg 4.7.1 213.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.0-2.rhel9.x86_64.rpm pgdg 4.7.0 213.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.0-2.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.5.0-1PIGSTY.el9.aarch64.rpm pigsty 5.5.0 230.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_partman_15-5.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.5.0-1PGDG.rhel9.8.aarch64.rpm pgdg 5.5.0 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.5.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.2 218.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.1 217.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.0 216.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.4-1PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.3-1PGDG.rhel9.aarch64.rpm pgdg 5.2.3 206.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.2-1PGDG.rhel9.aarch64.rpm pgdg 5.2.2 206.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.1-1PGDG.rhel9.aarch64.rpm pgdg 5.2.1 205.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.0-1PGDG.rhel9.aarch64.rpm pgdg 5.2.0 205.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.1.0-1PGDG.rhel9.aarch64.rpm pgdg 5.1.0 201.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 197.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.0.0-1PGDG.rhel9.aarch64.rpm pgdg 5.0.0 197.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.4-1PGDG.rhel9.aarch64.rpm pgdg 4.7.4 198.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.3-3.rhel9.aarch64.rpm pgdg 4.7.3 198.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.3-3.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.3-1.rhel9.aarch64.rpm pgdg 4.7.3 198.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.3-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.2-1.rhel9.aarch64.rpm pgdg 4.7.2 197.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.1-1.rhel9.aarch64.rpm pgdg 4.7.1 212.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.1-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.5.0-1PIGSTY.el10.x86_64.rpm pigsty 5.5.0 232.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_partman_15-5.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.5.0-1PGDG.rhel10.2.x86_64.rpm pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.5.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 5.4.3 220.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.3 221.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.2 220.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.1 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.0 218.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.5.0-1PIGSTY.el10.aarch64.rpm pigsty 5.5.0 232.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_partman_15-5.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 5.4.3 220.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.2 220.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 219.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.0 218.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~bookworm_amd64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg12+1_amd64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg12+1_amd64.deb pgdg 5.4.3 238.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~bookworm_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg12+1_arm64.deb pgdg 5.5.0 242.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg12+1_arm64.deb pgdg 5.4.3 237.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~trixie_amd64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg13+1_amd64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg13+1_amd64.deb pgdg 5.4.3 238.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~trixie_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg13+1_arm64.deb pgdg 5.5.0 242.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg13+1_arm64.deb pgdg 5.4.3 238.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~jammy_amd64.deb pigsty 5.5.0 187.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg22.04+1_amd64.deb pgdg 5.5.0 238.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg22.04+1_amd64.deb pgdg 5.4.3 235.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 235.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~jammy_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg22.04+1_arm64.deb pgdg 5.5.0 238.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg22.04+1_arm64.deb pgdg 5.4.3 235.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 234.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~noble_amd64.deb pigsty 5.5.0 182.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg24.04+1_amd64.deb pgdg 5.5.0 233.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg24.04+1_amd64.deb pgdg 5.4.3 230.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~noble_arm64.deb pigsty 5.5.0 182.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg24.04+1_arm64.deb pgdg 5.5.0 233.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg24.04+1_arm64.deb pgdg 5.4.3 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~resolute_amd64.deb pigsty 5.5.0 182.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg26.04+1_amd64.deb pgdg 5.5.0 233.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg26.04+1_amd64.deb pgdg 5.4.3 230.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg26.04+1_amd64.deb pgdg 5.4.2 230.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-2PIGSTY~resolute_arm64.deb pigsty 5.5.0 182.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-partman postgresql-15-partman_5.5.0-1.pgdg26.04+1_arm64.deb pgdg 5.5.0 233.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.5.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.3-1.pgdg26.04+1_arm64.deb pgdg 5.4.3 229.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg26.04+1_arm64.deb pgdg 5.4.2 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.5.0-1PIGSTY.el8.x86_64.rpm pigsty 5.5.0 290.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_partman_14-5.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.3 279.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.4.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.4-1PGDG.rhel8.x86_64.rpm pgdg 5.2.4 261.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.3-1PGDG.rhel8.x86_64.rpm pgdg 5.2.3 260.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 260.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.1-1PGDG.rhel8.x86_64.rpm pgdg 5.2.1 259.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.0-1PGDG.rhel8.x86_64.rpm pgdg 5.2.0 259.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.1.0-1PGDG.rhel8.x86_64.rpm pgdg 5.1.0 254.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 249.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.0.0-1PGDG.rhel8.x86_64.rpm pgdg 5.0.0 248.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.4-1PGDG.rhel8.x86_64.rpm pgdg 4.7.4 246.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.3-3.rhel8.x86_64.rpm pgdg 4.7.3 246.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.3-3.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.3-1.rhel8.x86_64.rpm pgdg 4.7.3 246.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.2-1.rhel8.x86_64.rpm pgdg 4.7.2 245.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.1-1.rhel8.x86_64.rpm pgdg 4.7.1 260.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.0-1.rhel8.x86_64.rpm pgdg 4.7.0 259.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.6.2-1.rhel8.x86_64.rpm pgdg 4.6.2 256.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.6.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.6.1-1.rhel8.x86_64.rpm pgdg 4.6.1 255.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.6.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.6.0-1.rhel8.x86_64.rpm pgdg 4.6.0 252.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.6.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.5.1-2.rhel8.x86_64.rpm pgdg 4.5.1 246.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.5.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.5.0-1PIGSTY.el8.aarch64.rpm pigsty 5.5.0 290.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_partman_14-5.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.5.0 284.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.3 279.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.4.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 279.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.4-1PGDG.rhel8.aarch64.rpm pgdg 5.2.4 261.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.3-1PGDG.rhel8.aarch64.rpm pgdg 5.2.3 260.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.2-1PGDG.rhel8.aarch64.rpm pgdg 5.2.2 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.1-1PGDG.rhel8.aarch64.rpm pgdg 5.2.1 259.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.0-1PGDG.rhel8.aarch64.rpm pgdg 5.2.0 259.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.1.0-1PGDG.rhel8.aarch64.rpm pgdg 5.1.0 254.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 249.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.0.0-1PGDG.rhel8.aarch64.rpm pgdg 5.0.0 248.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.4-1PGDG.rhel8.aarch64.rpm pgdg 4.7.4 246.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.3-3.rhel8.aarch64.rpm pgdg 4.7.3 246.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.3-3.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.3-1.rhel8.aarch64.rpm pgdg 4.7.3 246.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.3-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.2-1.rhel8.aarch64.rpm pgdg 4.7.2 245.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.1-1.rhel8.aarch64.rpm pgdg 4.7.1 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.1-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.5.0-2PGDG.rhel9.8.x86_64.rpm pgdg 5.5.0 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.5.0-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.5.0-1PIGSTY.el9.x86_64.rpm pigsty 5.5.0 230.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_partman_14-5.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel9.8.x86_64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.3 218.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.3-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.2 218.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.1 217.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel9.6.x86_64.rpm pgdg 5.4.0 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.0-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 212.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.4-1PGDG.rhel9.x86_64.rpm pgdg 5.2.4 207.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.3-1PGDG.rhel9.x86_64.rpm pgdg 5.2.3 206.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 206.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.1-1PGDG.rhel9.x86_64.rpm pgdg 5.2.1 205.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.0-1PGDG.rhel9.x86_64.rpm pgdg 5.2.0 205.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.1.0-1PGDG.rhel9.x86_64.rpm pgdg 5.1.0 201.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 197.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.0.0-1PGDG.rhel9.x86_64.rpm pgdg 5.0.0 197.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.4-1PGDG.rhel9.x86_64.rpm pgdg 4.7.4 198.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.3-3.rhel9.x86_64.rpm pgdg 4.7.3 198.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.3-3.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.3-1.rhel9.x86_64.rpm pgdg 4.7.3 198.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.2-1.rhel9.x86_64.rpm pgdg 4.7.2 198.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.1-1.rhel9.x86_64.rpm pgdg 4.7.1 213.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.0-1.rhel9.x86_64.rpm pgdg 4.7.0 213.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.6.2-1.rhel9.x86_64.rpm pgdg 4.6.2 211.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.6.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.6.1-1.rhel9.x86_64.rpm pgdg 4.6.1 210.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.6.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.5.0-1PIGSTY.el9.aarch64.rpm pigsty 5.5.0 230.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_partman_14-5.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.5.0-1PGDG.rhel9.8.aarch64.rpm pgdg 5.5.0 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.5.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel9.8.aarch64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.3 218.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.3 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.3-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.2 218.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.1 217.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.1-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel9.6.aarch64.rpm pgdg 5.4.0 216.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.0-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.4-1PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.3-1PGDG.rhel9.aarch64.rpm pgdg 5.2.3 206.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.2-1PGDG.rhel9.aarch64.rpm pgdg 5.2.2 206.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.1-1PGDG.rhel9.aarch64.rpm pgdg 5.2.1 205.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.0-1PGDG.rhel9.aarch64.rpm pgdg 5.2.0 205.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.1.0-1PGDG.rhel9.aarch64.rpm pgdg 5.1.0 201.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 197.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.0.0-1PGDG.rhel9.aarch64.rpm pgdg 5.0.0 197.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.4-1PGDG.rhel9.aarch64.rpm pgdg 4.7.4 198.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.3-3.rhel9.aarch64.rpm pgdg 4.7.3 198.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.3-3.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.3-1.rhel9.aarch64.rpm pgdg 4.7.3 198.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.3-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.2-1.rhel9.aarch64.rpm pgdg 4.7.2 197.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.1-1.rhel9.aarch64.rpm pgdg 4.7.1 212.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.1-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.5.0-1PIGSTY.el10.x86_64.rpm pigsty 5.5.0 232.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_partman_14-5.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.5.0-1PGDG.rhel10.2.x86_64.rpm pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.5.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel10.2.x86_64.rpm pgdg 5.4.3 220.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.3 220.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.3 221.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.3-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.2 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.1 220.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel10.0.x86_64.rpm pgdg 5.4.0 218.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.0-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.5.0-1PIGSTY.el10.aarch64.rpm pigsty 5.5.0 232.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_partman_14-5.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 5.5.0 223.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel10.2.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.3-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.3 220.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.2 220.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.1 220.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel10.0.aarch64.rpm pgdg 5.4.0 218.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~bookworm_amd64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg12+1_amd64.deb pgdg 5.5.0 242.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg12+1_amd64.deb pgdg 5.4.3 238.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~bookworm_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg12+1_arm64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg12+1_arm64.deb pgdg 5.4.3 238.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~trixie_amd64.deb pigsty 5.5.0 187.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg13+1_amd64.deb pgdg 5.5.0 242.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg13+1_amd64.deb pgdg 5.4.3 238.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~trixie_arm64.deb pigsty 5.5.0 187.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg13+1_arm64.deb pgdg 5.5.0 242.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg13+1_arm64.deb pgdg 5.4.3 238.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~jammy_amd64.deb pigsty 5.5.0 186.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg22.04+1_amd64.deb pgdg 5.5.0 237.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg22.04+1_amd64.deb pgdg 5.4.3 234.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 233.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~jammy_arm64.deb pigsty 5.5.0 185.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg22.04+1_arm64.deb pgdg 5.5.0 237.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg22.04+1_arm64.deb pgdg 5.4.3 233.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 233.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~noble_amd64.deb pigsty 5.5.0 182.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg24.04+1_amd64.deb pgdg 5.5.0 233.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg24.04+1_amd64.deb pgdg 5.4.3 230.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~noble_arm64.deb pigsty 5.5.0 182.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg24.04+1_arm64.deb pgdg 5.5.0 233.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg24.04+1_arm64.deb pgdg 5.4.3 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~resolute_amd64.deb pigsty 5.5.0 182.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg26.04+1_amd64.deb pgdg 5.5.0 233.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg26.04+1_amd64.deb pgdg 5.4.3 230.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg26.04+1_amd64.deb pgdg 5.4.2 230.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-2PIGSTY~resolute_arm64.deb pigsty 5.5.0 182.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-partman postgresql-14-partman_5.5.0-1.pgdg26.04+1_arm64.deb pgdg 5.5.0 233.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.5.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.3-1.pgdg26.04+1_arm64.deb pgdg 5.4.3 229.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.3-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg26.04+1_arm64.deb pgdg 5.4.2 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_partman` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_partman         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_partman` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_partman;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_partman -v 18  # PG 18
pig ext install -y pg_partman -v 17  # PG 17
pig ext install -y pg_partman -v 16  # PG 16
pig ext install -y pg_partman -v 15  # PG 15
pig ext install -y pg_partman -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_partman_18       # PG 18
dnf install -y pg_partman_17       # PG 17
dnf install -y pg_partman_16       # PG 16
dnf install -y pg_partman_15       # PG 15
dnf install -y pg_partman_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-partman   # PG 18
apt install -y postgresql-17-partman   # PG 17
apt install -y postgresql-16-partman   # PG 16
apt install -y postgresql-15-partman   # PG 15
apt install -y postgresql-14-partman   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_partman CASCADE;  -- 依赖: plpgsql
```

## 用法

来源：

- [pg_partman 5.5.0 README](https://github.com/pgpartman/pg_partman/blob/v5.5.0/README.md)
- [pg_partman 5.5.0 变更日志](https://github.com/pgpartman/pg_partman/blob/v5.5.0/CHANGELOG.md)
- [pg_partman 使用指南](https://github.com/pgpartman/pg_partman/blob/v5.5.0/doc/pg_partman_howto.md)
- [pg_partman 参考文档](https://github.com/pgpartman/pg_partman/blob/v5.5.0/doc/pg_partman.md)
- [pg_partman 5.5.0 控制文件](https://github.com/pgpartman/pg_partman/blob/v5.5.0/pg_partman.control)

`pg_partman` 按时间或整数 ID 自动管理 PostgreSQL 声明式分区集。它可以创建未来分区、执行保留策略、移动已有数据，并通过 SQL 调度或可选后台工作进程运行维护。底层表仍是普通 PostgreSQL 原生分区表。

### 核心流程

```sql
CREATE SCHEMA partman;
CREATE EXTENSION pg_partman SCHEMA partman;

CREATE TABLE public.measurements (
    id bigint GENERATED ALWAYS AS IDENTITY,
    created_at timestamptz NOT NULL,
    value numeric
) PARTITION BY RANGE (created_at);

SELECT partman.create_partition(
    p_parent_table := 'public.measurements',
    p_control := 'created_at',
    p_interval := '1 day'
);

CALL partman.run_maintenance_proc();
SELECT * FROM partman.show_partitions('public.measurements');
```

`create_partition()` 是创建受管分区集的当前名称。旧的 `create_parent()` 在 5.x 系列中仍为向后兼容保留。模板表用于携带 PostgreSQL 不会自动传播的属性；子分区已经存在后再修改模板，只会影响未来子分区，除非另外调整旧分区。

### 保留与数据移动

```sql
UPDATE partman.part_config
SET retention = '30 days',
    retention_keep_table = false
WHERE parent_table = 'public.measurements';

CALL partman.partition_data_proc('public.measurements');
CALL partman.undo_partition_proc('public.measurements');
```

当配置为删除子表时，保留策略具有破坏性。如果其他表通过外键引用该分区集，只有在确认引用行不再阻止分离或删除后，才应设置 `detach_before_drop`。使用 `retention_schema` 时，5.5 要求目标 schema 与每个被移动子表具有同一所有者。

### 后台工作进程

在服务启动前加入工作进程库：

```conf
shared_preload_libraries = 'pg_partman_bgw'
pg_partman_bgw.interval = 3600
pg_partman_bgw.dbname = 'mydb'
pg_partman_bgw.role = 'partman_maintainer'
```

修改 `shared_preload_libraries` 需要重启；其余工作进程设置可以重载。工作进程角色需要完整访问 pg_partman schema 及全部受管分区集。应使用专用非超级用户角色，并把拥有这些表的角色授予它：

```sql
CREATE ROLE partman_maintainer WITH LOGIN;
GRANT table_owner TO partman_maintainer;
```

5.5 将 `pg_partman_bgw.role` 的默认值改为 `partman_maintainer`。因此升级后，之前依赖隐式配置的工作进程会停止成功运行，直到该角色存在并获得所需权限。

### 5.5 版本升级

```sql
ALTER EXTENSION pg_partman UPDATE TO '5.5.0';
```

5.5 修复多条 SQL 注入与权限提升路径，增加用于对配置行实施 RLS 策略的 `maintenance_role` 列，并允许某一分区集失败后继续维护其他分区集。失败分区集会记录 warning，并把最后运行标记设为空，因此监控必须同时检查 PostgreSQL 日志与配置状态。

该版本还增加 `detach_before_drop`、继承列级统计目标，并改变保留 schema 的所有权规则。部分升级脚本会重建扩展函数或过程，因此扩展升级后要复查 PUBLIC 授权。

### 运维边界

- 要求 PostgreSQL 14 或更高版本；版本 5 只使用原生声明式分区。
- `pg_jobmon` 是可选依赖。安装后会增加任务监控，也会增加一层权限边界。
- 按文档配置所有者、schema、表、过程、函数、临时表及可选 RLS 权限后，无需超级用户也可以安装和运行 pg_partman。
- 日常维护应只有一个调度器负责。除非经过明确协调，不要同时使用后台工作进程与外部调度器。
- 大型维护可能获取许多锁并移动大量数据。应在代表性数据上测试保留与迁移，监控默认分区，并使用独立于分区保留策略的备份。

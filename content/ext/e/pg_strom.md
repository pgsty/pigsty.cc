---
title: "pg_strom"
linkTitle: "pg_strom"
description: "使用GPU与NVMe加速大数据处理"
weight: 2530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/heterodb/pg-strom">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">heterodb/pg-strom</div>
    <div class="ext-card__desc">https://github.com/heterodb/pg-strom</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_strom`**](/ext/e/pg_strom) | `6.1` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2530  | [**`pg_strom`**](/ext/e/pg_strom) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg4ml`](/ext/e/pg4ml) [`pgml`](/ext/e/pgml) [`columnar`](/ext/e/columnar) [`citus`](/ext/e/citus) [`pg_analytics`](/ext/e/pg_analytics) [`citus_columnar`](/ext/e/citus_columnar) [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_mooncake`](/ext/e/pg_mooncake) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `6.1` | {{< pgvers "17,16,15,14" >}} | `pg_strom` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `6.1` | {{< pgvers "17,16,15,14" >}} | `pg_strom_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 6.1 1 | AVAIL PGDG 6.1 3 | AVAIL PGDG 6.1 9 | AVAIL PGDG 6.1 11 | AVAIL PGDG 3.5 2 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 6.1 2 | AVAIL PGDG 6.1 3 | AVAIL PGDG 6.1 9 | AVAIL PGDG 6.1 11 | AVAIL PGDG 3.5 3 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 6.1 2 | AVAIL PGDG 6.1 2 | AVAIL PGDG 6.1 2 | AVAIL PGDG 6.1 2 | MISS PGDG - 0 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 pg_strom_18 pg_strom_18-6.1-2PGDG.rhel8.10.x86_64.rpm pgdg 6.1 725.8KiB https://download.postgresql.org/pub/repos/yum/non-free/18/redhat/rhel-8-x86_64/pg_strom_18-6.1-2PGDG.rhel8.10.x86_64.rpm
@ el9.x86_64 18 pg_strom_18 pg_strom_18-6.1-2PGDG.rhel9.7.x86_64.rpm pgdg 6.1 691.0KiB https://download.postgresql.org/pub/repos/yum/non-free/18/redhat/rhel-9-x86_64/pg_strom_18-6.1-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_strom_18 pg_strom_18-6.1-1PGDG.el9.x86_64.rpm pgdg 6.1 691.0KiB https://download.postgresql.org/pub/repos/yum/non-free/18/redhat/rhel-9-x86_64/pg_strom_18-6.1-1PGDG.el9.x86_64.rpm
@ el10.x86_64 18 pg_strom_18 pg_strom_18-6.1-2PGDG.rhel10.1.x86_64.rpm pgdg 6.1 710.1KiB https://download.postgresql.org/pub/repos/yum/non-free/18/redhat/rhel-10-x86_64/pg_strom_18-6.1-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_strom_18 pg_strom_18-6.1-1PGDG.el10.x86_64.rpm pgdg 6.1 705.8KiB https://download.postgresql.org/pub/repos/yum/non-free/18/redhat/rhel-10-x86_64/pg_strom_18-6.1-1PGDG.el10.x86_64.rpm
@ el8.x86_64 17 pg_strom_17 pg_strom_17-6.1-2PGDG.rhel8.10.x86_64.rpm pgdg 6.1 725.4KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-8-x86_64/pg_strom_17-6.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_strom_17 pg_strom_17-6.0-1PGDG.rhel8.x86_64.rpm pgdg 6.0 565.1KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-8-x86_64/pg_strom_17-6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_strom_17 pg_strom_17-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 472.4KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-8-x86_64/pg_strom_17-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 17 pg_strom_17 pg_strom_17-6.1-2PGDG.rhel9.7.x86_64.rpm pgdg 6.1 690.9KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-9-x86_64/pg_strom_17-6.1-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_strom_17 pg_strom_17-6.0-1PGDG.rhel9.x86_64.rpm pgdg 6.0 539.0KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-9-x86_64/pg_strom_17-6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_strom_17 pg_strom_17-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 467.3KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-9-x86_64/pg_strom_17-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 17 pg_strom_17 pg_strom_17-6.1-2PGDG.rhel10.1.x86_64.rpm pgdg 6.1 710.1KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-10-x86_64/pg_strom_17-6.1-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_strom_17 pg_strom_17-6.1-1PGDG.el10.x86_64.rpm pgdg 6.1 705.4KiB https://download.postgresql.org/pub/repos/yum/non-free/17/redhat/rhel-10-x86_64/pg_strom_17-6.1-1PGDG.el10.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-6.1-2PGDG.rhel8.10.x86_64.rpm pgdg 6.1 725.7KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-6.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-6.0-1PGDG.rhel8.x86_64.rpm pgdg 6.0 565.4KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 472.8KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-5.1.2-1PGDG.rhel8.x86_64.rpm pgdg 5.1.2 462.2KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-5.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-5.1.1-1PGDG.rhel8.x86_64.rpm pgdg 5.1.1 461.7KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-5.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-5.0.4-1PGDG.rhel8.x86_64.rpm pgdg 5.0.4 19.2MiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-5.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-5.0.3-1PGDG.rhel8.x86_64.rpm pgdg 5.0.3 19.2MiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-5.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-5.0.2-1PGDG.rhel8.x86_64.rpm pgdg 5.0.2 19.2MiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-5.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_strom_16 pg_strom_16-5.0-1PGDG.rhel8.x86_64.rpm pgdg 5.0 19.2MiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-8-x86_64/pg_strom_16-5.0-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-6.1-2PGDG.rhel9.7.x86_64.rpm pgdg 6.1 691.2KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-6.1-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-6.0-1PGDG.rhel9.x86_64.rpm pgdg 6.0 539.0KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 467.3KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-5.1.2-1PGDG.rhel9.x86_64.rpm pgdg 5.1.2 455.8KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-5.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-5.1.1-1PGDG.rhel9.x86_64.rpm pgdg 5.1.1 455.2KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-5.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-5.0.4-1PGDG.rhel9.x86_64.rpm pgdg 5.0.4 8.6MiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-5.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-5.0.3-1PGDG.rhel9.x86_64.rpm pgdg 5.0.3 8.6MiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-5.0.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-5.0.2-1PGDG.rhel9.x86_64.rpm pgdg 5.0.2 8.6MiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-5.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_strom_16 pg_strom_16-5.0-1PGDG.rhel9.x86_64.rpm pgdg 5.0 8.6MiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-9-x86_64/pg_strom_16-5.0-1PGDG.rhel9.x86_64.rpm
@ el10.x86_64 16 pg_strom_16 pg_strom_16-6.1-2PGDG.rhel10.1.x86_64.rpm pgdg 6.1 710.2KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-10-x86_64/pg_strom_16-6.1-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_strom_16 pg_strom_16-6.1-1PGDG.el10.x86_64.rpm pgdg 6.1 705.7KiB https://download.postgresql.org/pub/repos/yum/non-free/16/redhat/rhel-10-x86_64/pg_strom_16-6.1-1PGDG.el10.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-6.1-2PGDG.rhel8.10.x86_64.rpm pgdg 6.1 730.8KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-6.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-6.0-1PGDG.rhel8.x86_64.rpm pgdg 6.0 569.4KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 475.6KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-5.1.2-1PGDG.rhel8.x86_64.rpm pgdg 5.1.2 464.9KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-5.1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-5.1.1-1PGDG.rhel8.x86_64.rpm pgdg 5.1.1 464.7KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-5.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-5.0.4-1PGDG.rhel8.x86_64.rpm pgdg 5.0.4 19.2MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-5.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-5.0.3-1PGDG.rhel8.x86_64.rpm pgdg 5.0.3 19.2MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-5.0.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-5.0.2-1PGDG.rhel8.x86_64.rpm pgdg 5.0.2 19.2MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-5.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-5.0-1PGDG.rhel8.x86_64.rpm pgdg 5.0 19.2MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-3.5-1.rhel8.x86_64.rpm pgdg 3.5 28.6MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-3.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_strom_15 pg_strom_15-3.4-1.rhel8.x86_64.rpm pgdg 3.4 28.4MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-8-x86_64/pg_strom_15-3.4-1.rhel8.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-6.1-2PGDG.rhel9.7.x86_64.rpm pgdg 6.1 699.0KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-6.1-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-6.0-1PGDG.rhel9.x86_64.rpm pgdg 6.0 545.7KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 474.2KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-5.1.2-1PGDG.rhel9.x86_64.rpm pgdg 5.1.2 464.7KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-5.1.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-5.1.1-1PGDG.rhel9.x86_64.rpm pgdg 5.1.1 463.8KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-5.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-5.0.4-1PGDG.rhel9.x86_64.rpm pgdg 5.0.4 8.6MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-5.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-5.0.3-1PGDG.rhel9.x86_64.rpm pgdg 5.0.3 8.6MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-5.0.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-5.0.2-1PGDG.rhel9.x86_64.rpm pgdg 5.0.2 8.6MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-5.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-5.0-1PGDG.rhel9.x86_64.rpm pgdg 5.0 8.6MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-3.5-1.rhel9.x86_64.rpm pgdg 3.5 21.2MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-3.5-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_strom_15 pg_strom_15-3.4-1.rhel9.x86_64.rpm pgdg 3.4 21.0MiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-9-x86_64/pg_strom_15-3.4-1.rhel9.x86_64.rpm
@ el10.x86_64 15 pg_strom_15 pg_strom_15-6.1-2PGDG.rhel10.1.x86_64.rpm pgdg 6.1 734.6KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-10-x86_64/pg_strom_15-6.1-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_strom_15 pg_strom_15-6.1-1PGDG.el10.x86_64.rpm pgdg 6.1 730.1KiB https://download.postgresql.org/pub/repos/yum/non-free/15/redhat/rhel-10-x86_64/pg_strom_15-6.1-1PGDG.el10.x86_64.rpm
@ el8.x86_64 14 pg_strom_14 pg_strom_14-3.5-1.rhel8.x86_64.rpm pgdg 3.5 28.6MiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-8-x86_64/pg_strom_14-3.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_strom_14 pg_strom_14-3.4-1.rhel8.x86_64.rpm pgdg 3.4 28.4MiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-8-x86_64/pg_strom_14-3.4-1.rhel8.x86_64.rpm
@ el9.x86_64 14 pg_strom_14 pg_strom_14-3.5-1.rhel9.x86_64.rpm pgdg 3.5 21.2MiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-9-x86_64/pg_strom_14-3.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_strom_14 pg_strom_14-3.4-1.rhel9.x86_64.rpm pgdg 3.4 21.0MiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-9-x86_64/pg_strom_14-3.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_strom_14 pg_strom_14-3.3.2-1.rhel9.x86_64.rpm pgdg 3.3.2 21.0MiB https://download.postgresql.org/pub/repos/yum/non-free/14/redhat/rhel-9-x86_64/pg_strom_14-3.3.2-1.rhel9.x86_64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_strom` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_strom;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_strom -v 17  # PG 17
pig ext install -y pg_strom -v 16  # PG 16
pig ext install -y pg_strom -v 15  # PG 15
pig ext install -y pg_strom -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_strom_17       # PG 17
dnf install -y pg_strom_16       # PG 16
dnf install -y pg_strom_15       # PG 15
dnf install -y pg_strom_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_strom;
```

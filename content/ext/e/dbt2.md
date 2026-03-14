---
title: "dbt2"
linkTitle: "dbt2"
description: "OSDL-DBT-2 测试组件"
weight: 3220
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/osdldbt/dbt2">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">osdldbt/dbt2</div>
    <div class="ext-card__desc">https://github.com/osdldbt/dbt2</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`dbt2`**](/ext/e/dbt2) | `0.61.7` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3220  | [**`dbt2`**](/ext/e/dbt2) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgtap`](/ext/e/pgtap) [`faker`](/ext/e/faker) [`plpgsql`](/ext/e/plpgsql) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_tle`](/ext/e/pg_tle) [`plv8`](/ext/e/plv8) [`pllua`](/ext/e/pllua) [`hstore_pllua`](/ext/e/hstore_pllua) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.61.7` | {{< pgvers "18,17,16,15,14" >}} | `dbt2` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.61.7` | {{< pgvers "18,17,16,15,14" >}} | `dbt2-pg$v-extensions` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 0.53.7 1 | AVAIL PGDG 0.53.7 5 | AVAIL PGDG 0.53.7 6 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 0.53.7 1 | AVAIL PGDG 0.53.7 4 | AVAIL PGDG 0.53.7 4 |
| el9.x86_64 | AVAIL PGDG 0.61.7 1 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 4 | AVAIL PGDG 0.61.7 8 | AVAIL PGDG 0.61.7 7 |
| el9.aarch64 | AVAIL PGDG 0.61.7 1 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 4 | AVAIL PGDG 0.61.7 8 | AVAIL PGDG 0.61.7 8 |
| el10.x86_64 | AVAIL PGDG 0.61.7 1 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 2 |
| el10.aarch64 | AVAIL PGDG 0.61.7 1 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 2 | AVAIL PGDG 0.61.7 2 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el9.x86_64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/dbt2-pg18-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/dbt2-pg18-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/dbt2-pg18-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 dbt2-pg18-extensions dbt2-pg18-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/dbt2-pg18-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el9.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/dbt2-pg17-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm pgdg 0.61.6 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/dbt2-pg17-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/dbt2-pg17-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm pgdg 0.61.6 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/dbt2-pg17-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/dbt2-pg17-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm pgdg 0.61.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/dbt2-pg17-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/dbt2-pg17-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 dbt2-pg17-extensions dbt2-pg17-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm pgdg 0.61.6 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/dbt2-pg17-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/dbt2-pg16-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm pgdg 0.53.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/dbt2-pg16-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm pgdg 0.61.6 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm pgdg 0.53.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.6-1PGDG.rhel9.x86_64.rpm pgdg 0.53.6 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/dbt2-pg16-extensions-0.53.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm pgdg 0.61.6 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm pgdg 0.53.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.53.6-1PGDG.rhel9.aarch64.rpm pgdg 0.53.6 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/dbt2-pg16-extensions-0.53.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/dbt2-pg16-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm pgdg 0.61.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/dbt2-pg16-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/dbt2-pg16-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 dbt2-pg16-extensions dbt2-pg16-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm pgdg 0.61.6 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/dbt2-pg16-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.4-1PGDG.rhel8.x86_64.rpm pgdg 0.53.4 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.53.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.50.1-1.rhel8.x86_64.rpm pgdg 0.50.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.50.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.49.1-1.rhel8.x86_64.rpm pgdg 0.49.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.49.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.7-1.rhel8.x86_64.rpm pgdg 0.48.7 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/dbt2-pg15-extensions-0.48.7-1.rhel8.x86_64.rpm
@ el8.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm pgdg 0.53.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/dbt2-pg15-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.4-1PGDG.rhel8.aarch64.rpm pgdg 0.53.4 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/dbt2-pg15-extensions-0.53.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.50.1-1.rhel8.aarch64.rpm pgdg 0.50.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/dbt2-pg15-extensions-0.50.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.49.1-1.rhel8.aarch64.rpm pgdg 0.49.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/dbt2-pg15-extensions-0.49.1-1.rhel8.aarch64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm pgdg 0.61.6 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm pgdg 0.53.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.4-1PGDG.rhel9.x86_64.rpm pgdg 0.53.4 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.53.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.50.1-1.rhel9.x86_64.rpm pgdg 0.50.1 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.50.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.49.1-1.rhel9.x86_64.rpm pgdg 0.49.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.49.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.7-1.rhel9.x86_64.rpm pgdg 0.48.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.48.7-1.rhel9.x86_64.rpm
@ el9.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.3-2.rhel9.x86_64.rpm pgdg 0.48.3 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/dbt2-pg15-extensions-0.48.3-2.rhel9.x86_64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm pgdg 0.61.6 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.53.4-1PGDG.rhel9.aarch64.rpm pgdg 0.53.4 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.53.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.50.1-1.rhel9.aarch64.rpm pgdg 0.50.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.50.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.49.1-1.rhel9.aarch64.rpm pgdg 0.49.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.49.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.7-1.rhel9.aarch64.rpm pgdg 0.48.7 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.48.7-1.rhel9.aarch64.rpm
@ el9.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.48.3-2.rhel9.aarch64.rpm pgdg 0.48.3 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/dbt2-pg15-extensions-0.48.3-2.rhel9.aarch64.rpm
@ el10.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/dbt2-pg15-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm pgdg 0.61.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/dbt2-pg15-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/dbt2-pg15-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 dbt2-pg15-extensions dbt2-pg15-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm pgdg 0.61.6 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/dbt2-pg15-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.53.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.4-1PGDG.rhel8.x86_64.rpm pgdg 0.53.4 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.53.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.50.1-1.rhel8.x86_64.rpm pgdg 0.50.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.50.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.49.1-1.rhel8.x86_64.rpm pgdg 0.49.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.49.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.7-1.rhel8.x86_64.rpm pgdg 0.48.7 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.48.7-1.rhel8.x86_64.rpm
@ el8.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.3-2.rhel8.x86_64.rpm pgdg 0.48.3 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/dbt2-pg14-extensions-0.48.3-2.rhel8.x86_64.rpm
@ el8.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm pgdg 0.53.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/dbt2-pg14-extensions-0.53.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.4-1PGDG.rhel8.aarch64.rpm pgdg 0.53.4 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/dbt2-pg14-extensions-0.53.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.50.1-1.rhel8.aarch64.rpm pgdg 0.50.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/dbt2-pg14-extensions-0.50.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.49.1-1.rhel8.aarch64.rpm pgdg 0.49.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/dbt2-pg14-extensions-0.49.1-1.rhel8.aarch64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm pgdg 0.61.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.61.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm pgdg 0.61.6 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.61.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm pgdg 0.53.7 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.53.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.4-1PGDG.rhel9.x86_64.rpm pgdg 0.53.4 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.53.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.50.1-1.rhel9.x86_64.rpm pgdg 0.50.1 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.50.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.49.1-1.rhel9.x86_64.rpm pgdg 0.49.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.49.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.7-1.rhel9.x86_64.rpm pgdg 0.48.7 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/dbt2-pg14-extensions-0.48.7-1.rhel9.x86_64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm pgdg 0.61.7 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.61.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm pgdg 0.61.6 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.61.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm pgdg 0.53.7 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.53.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.53.4-1PGDG.rhel9.aarch64.rpm pgdg 0.53.4 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.53.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.50.1-1.rhel9.aarch64.rpm pgdg 0.50.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.50.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.49.1-1.rhel9.aarch64.rpm pgdg 0.49.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.49.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.7-1.rhel9.aarch64.rpm pgdg 0.48.7 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.48.7-1.rhel9.aarch64.rpm
@ el9.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.48.3-2.rhel9.aarch64.rpm pgdg 0.48.3 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/dbt2-pg14-extensions-0.48.3-2.rhel9.aarch64.rpm
@ el10.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm pgdg 0.61.7 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/dbt2-pg14-extensions-0.61.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm pgdg 0.61.6 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/dbt2-pg14-extensions-0.61.6-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm pgdg 0.61.7 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/dbt2-pg14-extensions-0.61.7-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 dbt2-pg14-extensions dbt2-pg14-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm pgdg 0.61.6 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/dbt2-pg14-extensions-0.61.6-2PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `dbt2` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install dbt2;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y dbt2 -v 18  # PG 18
pig ext install -y dbt2 -v 17  # PG 17
pig ext install -y dbt2 -v 16  # PG 16
pig ext install -y dbt2 -v 15  # PG 15
pig ext install -y dbt2 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y dbt2-pg18-extensions       # PG 18
dnf install -y dbt2-pg17-extensions       # PG 17
dnf install -y dbt2-pg16-extensions       # PG 16
dnf install -y dbt2-pg15-extensions       # PG 15
dnf install -y dbt2-pg14-extensions       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION dbt2;
```



## 用法

> [dbt2: OSDL-DBT-2 测试套件](https://github.com/osdldbt/dbt2)

`dbt2` 是一个面向 PostgreSQL 的 TPC-C 基准测试实现。该扩展提供了实现五种标准 TPC-C 事务类型的存储过程。

```sql
CREATE EXTENSION dbt2;
```

### TPC-C 事务类型

该扩展提供了五种标准 TPC-C 事务的存储过程：

- **新订单（New Order）**：创建包含多个行项目的新订单，并更新库存水平
- **支付（Payment）**：处理客户付款，更新仓库和区域余额
- **订单状态（Order Status）**：查询客户最近一笔订单的状态
- **发货（Delivery）**：处理所有区域中待发货的订单
- **库存水平（Stock Level）**：检查近期售出且库存偏低的商品数量

### 基准测试工作流

`dbt2` 系统由以下部分组成：

1. **数据库扩展**（`dbt2`）：TPC-C 事务的存储过程
2. **数据加载器**：用 TPC-C 数据填充基准测试表
3. **驱动程序**：生成模拟终端用户的事务负载
4. **客户端**：管理驱动程序与数据库之间的连接

### 运行基准测试

基准测试通常使用 `dbt2` 命令行工具运行（与扩展本身分开）：

```bash
# 构建基准测试数据库
dbt2 build --dbms pgsql --warehouses 10

# 运行基准测试
dbt2 run --dbms pgsql --warehouses 10 --duration 300 --connections 10

# 生成报告
dbt2 report --dbms pgsql
```

### TPC-C 模式

基准测试使用以下标准表：`warehouse`、`district`、`customer`、`history`、`new_order`、`orders`、`order_line`、`item` 和 `stock`。

有关详细的配置和调优选项，请参阅仓库中的 `doc/` 目录。

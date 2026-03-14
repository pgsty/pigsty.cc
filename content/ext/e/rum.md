---
title: "rum"
linkTitle: "rum"
description: "RUM 索引访问方法"
weight: 2720
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgrespro/rum">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgrespro/rum</div>
    <div class="ext-card__desc">https://github.com/postgrespro/rum</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/rum-1.3.15.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">rum-1.3.15.tar.gz</div>
    <div class="ext-card__desc">rum-1.3.15.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`rum`**](/ext/e/rum) | `1.3.15` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2720  | [**`rum`**](/ext/e/rum) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_trgm`](/ext/e/pg_trgm) [`btree_gist`](/ext/e/btree_gist) [`btree_gin`](/ext/e/btree_gin) [`pg_search`](/ext/e/pg_search) [`pgroonga`](/ext/e/pgroonga) [`pg_bigm`](/ext/e/pg_bigm) [`zhparser`](/ext/e/zhparser) [`pgroonga_database`](/ext/e/pgroonga_database) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb`](/ext/e/documentdb) |
{.ext-table .ext-table--rel}


> 1.3.15 build pass on pg 16,17,18


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.3.15` | {{< pgvers "18,17,16,15,14" >}} | `rum` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.15` | {{< pgvers "18,17,16,15,14" >}} | `rum_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.15` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-rum` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.3.15 1 | AVAIL PIGSTY 1.3.15 2 | AVAIL PIGSTY 1.3.15 3 | AVAIL PGDG 1.3.14 2 | AVAIL PGDG 1.3.14 3 |
| el8.aarch64 | AVAIL PIGSTY 1.3.15 1 | AVAIL PIGSTY 1.3.15 2 | AVAIL PIGSTY 1.3.15 3 | AVAIL PGDG 1.3.14 2 | AVAIL PGDG 1.3.14 2 |
| el9.x86_64 | AVAIL PIGSTY 1.3.15 1 | AVAIL PIGSTY 1.3.15 2 | AVAIL PIGSTY 1.3.15 3 | AVAIL PGDG 1.3.14 2 | AVAIL PGDG 1.3.14 2 |
| el9.aarch64 | AVAIL PIGSTY 1.3.15 1 | AVAIL PIGSTY 1.3.15 2 | AVAIL PIGSTY 1.3.15 3 | AVAIL PGDG 1.3.14 2 | AVAIL PGDG 1.3.14 2 |
| el10.x86_64 | AVAIL PIGSTY 1.3.15 1 | AVAIL PIGSTY 1.3.15 2 | AVAIL PIGSTY 1.3.15 2 | AVAIL PGDG 1.3.14 1 | AVAIL PGDG 1.3.14 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3.15 1 | AVAIL PIGSTY 1.3.15 2 | AVAIL PIGSTY 1.3.15 2 | AVAIL PGDG 1.3.14 1 | AVAIL PGDG 1.3.14 1 |
| d12.x86_64 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 |
| d12.aarch64 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 |
| d13.x86_64 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 |
| d13.aarch64 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 |
| u22.x86_64 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 |
| u22.aarch64 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 |
| u24.x86_64 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 |
| u24.aarch64 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 | AVAIL PGDG 1.3.15 1 |
@ el8.x86_64 18 rum_18 rum_18-1.3.15-1PIGSTY.el8.x86_64.rpm pigsty 1.3.15 104.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rum_18-1.3.15-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 rum_18 rum_18-1.3.15-1PIGSTY.el8.aarch64.rpm pigsty 1.3.15 97.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rum_18-1.3.15-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 rum_18 rum_18-1.3.15-1PIGSTY.el9.x86_64.rpm pigsty 1.3.15 96.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rum_18-1.3.15-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 rum_18 rum_18-1.3.15-1PIGSTY.el9.aarch64.rpm pigsty 1.3.15 92.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rum_18-1.3.15-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 rum_18 rum_18-1.3.15-1PIGSTY.el10.x86_64.rpm pigsty 1.3.15 97.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rum_18-1.3.15-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 rum_18 rum_18-1.3.15-1PIGSTY.el10.aarch64.rpm pigsty 1.3.15 93.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rum_18-1.3.15-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-rum postgresql-18-rum_1.3.15-1.pgdg12+1_amd64.deb pgdg 1.3.15 233.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-18-rum_1.3.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-rum postgresql-18-rum_1.3.15-1.pgdg12+1_arm64.deb pgdg 1.3.15 225.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-18-rum_1.3.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-rum postgresql-18-rum_1.3.15-1.pgdg13+1_amd64.deb pgdg 1.3.15 233.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-18-rum_1.3.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-rum postgresql-18-rum_1.3.15-1.pgdg13+1_arm64.deb pgdg 1.3.15 226.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-18-rum_1.3.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-rum postgresql-18-rum_1.3.15-1.pgdg22.04+1_amd64.deb pgdg 1.3.15 240.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-18-rum_1.3.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-rum postgresql-18-rum_1.3.15-1.pgdg22.04+1_arm64.deb pgdg 1.3.15 232.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-18-rum_1.3.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-rum postgresql-18-rum_1.3.15-1.pgdg24.04+1_amd64.deb pgdg 1.3.15 234.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-18-rum_1.3.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-rum postgresql-18-rum_1.3.15-1.pgdg24.04+1_arm64.deb pgdg 1.3.15 226.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-18-rum_1.3.15-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 rum_17 rum_17-1.3.15-1PIGSTY.el8.x86_64.rpm pigsty 1.3.15 104.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rum_17-1.3.15-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 rum_17 rum_17-1.3.14-1PGDG.rhel8.x86_64.rpm pgdg 1.3.14 93.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/rum_17-1.3.14-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 rum_17 rum_17-1.3.15-1PIGSTY.el8.aarch64.rpm pigsty 1.3.15 97.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rum_17-1.3.15-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 rum_17 rum_17-1.3.14-1PGDG.rhel8.aarch64.rpm pgdg 1.3.14 86.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/rum_17-1.3.14-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 rum_17 rum_17-1.3.15-1PIGSTY.el9.x86_64.rpm pigsty 1.3.15 96.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rum_17-1.3.15-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 rum_17 rum_17-1.3.14-1PGDG.rhel9.x86_64.rpm pgdg 1.3.14 91.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/rum_17-1.3.14-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 rum_17 rum_17-1.3.15-1PIGSTY.el9.aarch64.rpm pigsty 1.3.15 92.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rum_17-1.3.15-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 rum_17 rum_17-1.3.14-1PGDG.rhel9.aarch64.rpm pgdg 1.3.14 87.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/rum_17-1.3.14-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 rum_17 rum_17-1.3.15-1PIGSTY.el10.x86_64.rpm pigsty 1.3.15 97.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rum_17-1.3.15-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 rum_17 rum_17-1.3.14-2PGDG.rhel10.x86_64.rpm pgdg 1.3.14 93.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/rum_17-1.3.14-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 rum_17 rum_17-1.3.15-1PIGSTY.el10.aarch64.rpm pigsty 1.3.15 94.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rum_17-1.3.15-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 rum_17 rum_17-1.3.14-2PGDG.rhel10.aarch64.rpm pgdg 1.3.14 88.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/rum_17-1.3.14-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-rum postgresql-17-rum_1.3.15-1.pgdg12+1_amd64.deb pgdg 1.3.15 234.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-17-rum_1.3.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-rum postgresql-17-rum_1.3.15-1.pgdg12+1_arm64.deb pgdg 1.3.15 225.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-17-rum_1.3.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-rum postgresql-17-rum_1.3.15-1.pgdg13+1_amd64.deb pgdg 1.3.15 234.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-17-rum_1.3.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-rum postgresql-17-rum_1.3.15-1.pgdg13+1_arm64.deb pgdg 1.3.15 226.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-17-rum_1.3.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-rum postgresql-17-rum_1.3.15-1.pgdg22.04+1_amd64.deb pgdg 1.3.15 265.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-17-rum_1.3.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-rum postgresql-17-rum_1.3.15-1.pgdg22.04+1_arm64.deb pgdg 1.3.15 257.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-17-rum_1.3.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-rum postgresql-17-rum_1.3.15-1.pgdg24.04+1_amd64.deb pgdg 1.3.15 235.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-17-rum_1.3.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-rum postgresql-17-rum_1.3.15-1.pgdg24.04+1_arm64.deb pgdg 1.3.15 227.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-17-rum_1.3.15-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 rum_16 rum_16-1.3.15-1PIGSTY.el8.x86_64.rpm pigsty 1.3.15 104.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rum_16-1.3.15-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 rum_16 rum_16-1.3.14-1PGDG.rhel8.x86_64.rpm pgdg 1.3.14 93.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/rum_16-1.3.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 rum_16 rum_16-1.3.13-2.rhel8.1.x86_64.rpm pgdg 1.3.13 92.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/rum_16-1.3.13-2.rhel8.1.x86_64.rpm
@ el8.aarch64 16 rum_16 rum_16-1.3.15-1PIGSTY.el8.aarch64.rpm pigsty 1.3.15 97.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rum_16-1.3.15-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 rum_16 rum_16-1.3.14-1PGDG.rhel8.aarch64.rpm pgdg 1.3.14 86.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/rum_16-1.3.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 rum_16 rum_16-1.3.13-2.rhel8.1.aarch64.rpm pgdg 1.3.13 86.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/rum_16-1.3.13-2.rhel8.1.aarch64.rpm
@ el9.x86_64 16 rum_16 rum_16-1.3.15-1PIGSTY.el9.x86_64.rpm pigsty 1.3.15 96.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rum_16-1.3.15-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 rum_16 rum_16-1.3.14-1PGDG.rhel9.x86_64.rpm pgdg 1.3.14 91.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/rum_16-1.3.14-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 rum_16 rum_16-1.3.13-2.rhel9.1.x86_64.rpm pgdg 1.3.13 91.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/rum_16-1.3.13-2.rhel9.1.x86_64.rpm
@ el9.aarch64 16 rum_16 rum_16-1.3.15-1PIGSTY.el9.aarch64.rpm pigsty 1.3.15 92.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rum_16-1.3.15-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 rum_16 rum_16-1.3.14-1PGDG.rhel9.aarch64.rpm pgdg 1.3.14 87.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/rum_16-1.3.14-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 rum_16 rum_16-1.3.13-2.rhel9.1.aarch64.rpm pgdg 1.3.13 87.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/rum_16-1.3.13-2.rhel9.1.aarch64.rpm
@ el10.x86_64 16 rum_16 rum_16-1.3.15-1PIGSTY.el10.x86_64.rpm pigsty 1.3.15 97.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rum_16-1.3.15-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 rum_16 rum_16-1.3.14-2PGDG.rhel10.x86_64.rpm pgdg 1.3.14 92.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/rum_16-1.3.14-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 rum_16 rum_16-1.3.15-1PIGSTY.el10.aarch64.rpm pigsty 1.3.15 93.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rum_16-1.3.15-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 rum_16 rum_16-1.3.14-2PGDG.rhel10.aarch64.rpm pgdg 1.3.14 88.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/rum_16-1.3.14-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-rum postgresql-16-rum_1.3.15-1.pgdg12+1_amd64.deb pgdg 1.3.15 234.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-16-rum_1.3.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-rum postgresql-16-rum_1.3.15-1.pgdg12+1_arm64.deb pgdg 1.3.15 225.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-16-rum_1.3.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-rum postgresql-16-rum_1.3.15-1.pgdg13+1_amd64.deb pgdg 1.3.15 234.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-16-rum_1.3.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-rum postgresql-16-rum_1.3.15-1.pgdg13+1_arm64.deb pgdg 1.3.15 226.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-16-rum_1.3.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-rum postgresql-16-rum_1.3.15-1.pgdg22.04+1_amd64.deb pgdg 1.3.15 264.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-16-rum_1.3.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-rum postgresql-16-rum_1.3.15-1.pgdg22.04+1_arm64.deb pgdg 1.3.15 256.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-16-rum_1.3.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-rum postgresql-16-rum_1.3.15-1.pgdg24.04+1_amd64.deb pgdg 1.3.15 234.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-16-rum_1.3.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-rum postgresql-16-rum_1.3.15-1.pgdg24.04+1_arm64.deb pgdg 1.3.15 226.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-16-rum_1.3.15-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 rum_15 rum_15-1.3.14-1PGDG.rhel8.x86_64.rpm pgdg 1.3.14 113.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/rum_15-1.3.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 rum_15 rum_15-1.3.13-1.rhel8.x86_64.rpm pgdg 1.3.13 113.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/rum_15-1.3.13-1.rhel8.x86_64.rpm
@ el8.aarch64 15 rum_15 rum_15-1.3.14-1PGDG.rhel8.aarch64.rpm pgdg 1.3.14 105.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/rum_15-1.3.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 rum_15 rum_15-1.3.13-1.rhel8.aarch64.rpm pgdg 1.3.13 105.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/rum_15-1.3.13-1.rhel8.aarch64.rpm
@ el9.x86_64 15 rum_15 rum_15-1.3.14-1PGDG.rhel9.x86_64.rpm pgdg 1.3.14 111.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/rum_15-1.3.14-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 rum_15 rum_15-1.3.13-1.rhel9.x86_64.rpm pgdg 1.3.13 111.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/rum_15-1.3.13-1.rhel9.x86_64.rpm
@ el9.aarch64 15 rum_15 rum_15-1.3.14-1PGDG.rhel9.aarch64.rpm pgdg 1.3.14 107.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/rum_15-1.3.14-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 rum_15 rum_15-1.3.13-1.rhel9.aarch64.rpm pgdg 1.3.13 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/rum_15-1.3.13-1.rhel9.aarch64.rpm
@ el10.x86_64 15 rum_15 rum_15-1.3.14-2PGDG.rhel10.x86_64.rpm pgdg 1.3.14 112.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/rum_15-1.3.14-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 rum_15 rum_15-1.3.14-2PGDG.rhel10.aarch64.rpm pgdg 1.3.14 108.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/rum_15-1.3.14-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-rum postgresql-15-rum_1.3.15-1.pgdg12+1_amd64.deb pgdg 1.3.15 288.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-15-rum_1.3.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-rum postgresql-15-rum_1.3.15-1.pgdg12+1_arm64.deb pgdg 1.3.15 277.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-15-rum_1.3.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-rum postgresql-15-rum_1.3.15-1.pgdg13+1_amd64.deb pgdg 1.3.15 289.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-15-rum_1.3.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-rum postgresql-15-rum_1.3.15-1.pgdg13+1_arm64.deb pgdg 1.3.15 278.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-15-rum_1.3.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-rum postgresql-15-rum_1.3.15-1.pgdg22.04+1_amd64.deb pgdg 1.3.15 327.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-15-rum_1.3.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-rum postgresql-15-rum_1.3.15-1.pgdg22.04+1_arm64.deb pgdg 1.3.15 316.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-15-rum_1.3.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-rum postgresql-15-rum_1.3.15-1.pgdg24.04+1_amd64.deb pgdg 1.3.15 288.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-15-rum_1.3.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-rum postgresql-15-rum_1.3.15-1.pgdg24.04+1_arm64.deb pgdg 1.3.15 279.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-15-rum_1.3.15-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 rum_14 rum_14-1.3.14-1PGDG.rhel8.x86_64.rpm pgdg 1.3.14 111.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/rum_14-1.3.14-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 rum_14 rum_14-1.3.13-1.rhel8.x86_64.rpm pgdg 1.3.13 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/rum_14-1.3.13-1.rhel8.x86_64.rpm
@ el8.x86_64 14 rum_14 rum_14-1.3.8-1.rhel8.x86_64.rpm pgdg 1.3.8 308.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/rum_14-1.3.8-1.rhel8.x86_64.rpm
@ el8.aarch64 14 rum_14 rum_14-1.3.14-1PGDG.rhel8.aarch64.rpm pgdg 1.3.14 104.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/rum_14-1.3.14-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 rum_14 rum_14-1.3.13-1.rhel8.aarch64.rpm pgdg 1.3.13 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/rum_14-1.3.13-1.rhel8.aarch64.rpm
@ el9.x86_64 14 rum_14 rum_14-1.3.14-1PGDG.rhel9.x86_64.rpm pgdg 1.3.14 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/rum_14-1.3.14-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 rum_14 rum_14-1.3.13-1.rhel9.x86_64.rpm pgdg 1.3.13 111.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/rum_14-1.3.13-1.rhel9.x86_64.rpm
@ el9.aarch64 14 rum_14 rum_14-1.3.14-1PGDG.rhel9.aarch64.rpm pgdg 1.3.14 105.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/rum_14-1.3.14-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 rum_14 rum_14-1.3.13-1.rhel9.aarch64.rpm pgdg 1.3.13 105.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/rum_14-1.3.13-1.rhel9.aarch64.rpm
@ el10.x86_64 14 rum_14 rum_14-1.3.14-2PGDG.rhel10.x86_64.rpm pgdg 1.3.14 111.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/rum_14-1.3.14-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 rum_14 rum_14-1.3.14-2PGDG.rhel10.aarch64.rpm pgdg 1.3.14 107.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/rum_14-1.3.14-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-rum postgresql-14-rum_1.3.15-1.pgdg12+1_amd64.deb pgdg 1.3.15 287.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-14-rum_1.3.15-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-rum postgresql-14-rum_1.3.15-1.pgdg12+1_arm64.deb pgdg 1.3.15 277.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-14-rum_1.3.15-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-rum postgresql-14-rum_1.3.15-1.pgdg13+1_amd64.deb pgdg 1.3.15 287.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-14-rum_1.3.15-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-rum postgresql-14-rum_1.3.15-1.pgdg13+1_arm64.deb pgdg 1.3.15 277.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-14-rum_1.3.15-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-rum postgresql-14-rum_1.3.15-1.pgdg22.04+1_amd64.deb pgdg 1.3.15 324.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-14-rum_1.3.15-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-rum postgresql-14-rum_1.3.15-1.pgdg22.04+1_arm64.deb pgdg 1.3.15 314.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-14-rum_1.3.15-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-rum postgresql-14-rum_1.3.15-1.pgdg24.04+1_amd64.deb pgdg 1.3.15 287.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-14-rum_1.3.15-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-rum postgresql-14-rum_1.3.15-1.pgdg24.04+1_arm64.deb pgdg 1.3.15 277.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-rum/postgresql-14-rum_1.3.15-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `rum` 扩展的 RPM 包：

```bash
pig build pkg rum         # 构建 RPM 包
```


## 安装

您可以直接安装 `rum` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install rum;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y rum -v 18  # PG 18
pig ext install -y rum -v 17  # PG 17
pig ext install -y rum -v 16  # PG 16
pig ext install -y rum -v 15  # PG 15
pig ext install -y rum -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y rum_18       # PG 18
dnf install -y rum_17       # PG 17
dnf install -y rum_16       # PG 16
dnf install -y rum_15       # PG 15
dnf install -y rum_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-rum   # PG 18
apt install -y postgresql-17-rum   # PG 17
apt install -y postgresql-16-rum   # PG 16
apt install -y postgresql-15-rum   # PG 15
apt install -y postgresql-14-rum   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION rum;
```




## 用法

> [rum: RUM 索引访问方法](https://github.com/postgrespro/rum)

RUM 是一种索引访问方法，通过在 posting tree 中存储附加信息来扩展 GIN。这使得可以直接访问位置数据，避免在排序、短语搜索和时间戳排序时进行额外的堆扫描。

### 创建索引

```sql
CREATE INDEX idx ON table_name USING rum (column operator_class);
```

带附加运算符（例如，在全文搜索的同时按时间戳排序）：

```sql
CREATE INDEX tsts_idx ON tsts USING rum (t rum_tsvector_addon_ops, d)
    WITH (attach = 'd', to = 't');
```

### 运算符类

| 运算符类 | 描述 |
|---------|------|
| `rum_tsvector_ops` | 存储 tsvector 词素及位置。支持 `<=>` 排序和前缀搜索。 |
| `rum_tsvector_hash_ops` | 存储哈希化的 tsvector 词素及位置。支持 `<=>` 排序，不支持前缀搜索。 |
| `rum_tsvector_addon_ops` | 将 tsvector 与附加字段（时间戳、整数等）组合，用于过滤和排序。 |
| `rum_tsvector_hash_addon_ops` | 支持附加字段的哈希变体，不支持前缀搜索。 |
| `rum_tsquery_ops` | 存储 tsquery 分支，用于快速查询匹配已索引的文档。 |
| `rum_anyarray_ops` | 索引数组类型。支持 `&&`、`@>`、`<@`、`=`、`%` 和 `<=>` 排序。 |
| `rum_anyarray_addon_ops` | 将数组元素与附加字段组合。 |
| `rum_TYPE_ops` | 通用运算符类，适用于 int2、int4、int8、float4、float8、money、oid、time、timetz、date、interval、macaddr、inet、cidr、text、varchar、char、bytea、bit、varbit、numeric、timestamp、timestamptz。 |

### 排序运算符

| 运算符 | 描述 |
|--------|------|
| `<=>` | 距离运算符，适用于 tsvector、timestamp、数值类型、数组 |
| `<=\|` | 左侧距离，适用于 timestamp、int、float、money、oid |
| `\|=>` | 右侧距离，适用于 timestamp、int、float、money、oid |

### 示例

带排序的全文搜索：

```sql
SELECT t, a <=> to_tsquery('english', 'beautiful | place') AS rank
FROM test_rum
WHERE a @@ to_tsquery('english', 'beautiful | place')
ORDER BY a <=> to_tsquery('english', 'beautiful | place');
```

按时间戳排序的全文搜索：

```sql
SELECT id, d, d <=> '2016-05-16 14:21:25' FROM tsts
WHERE t @@ 'wr&qh'
ORDER BY d <=> '2016-05-16 14:21:25'
LIMIT 5;
```

带距离排序的数组匹配：

```sql
SELECT * FROM test_array
WHERE i && '{1}'
ORDER BY i <=> '{1}' ASC;
```

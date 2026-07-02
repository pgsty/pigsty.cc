---
title: "db2fce"
linkTitle: "db2fce"
description: "为 PostgreSQL 提供 DB2 兼容函数、类型、操作符与 SYSIBM.SYSDUMMY1。"
weight: 9200
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/credativ/db2fce">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">credativ/db2fce</div>
    <div class="ext-card__desc">https://github.com/credativ/db2fce</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/db2fce-0.0.17.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">db2fce-0.0.17.tar.gz</div>
    <div class="ext-card__desc">db2fce-0.0.17.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`db2fce`**](/ext/e/db2fce) | `0.0.17` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9200  | [**`db2fce`**](/ext/e/db2fce) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `db2` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`orafce`](/ext/e/orafce) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_dbms_job`](/ext/e/pg_dbms_job) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGDG APT is complete for PG14-18; Pigsty RPM noarch spec fills the PGDG YUM gap for PG14-18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.0.17` | {{< pgvers "18,17,16,15,14" >}} | `db2fce` | `plpgsql` |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.17` | {{< pgvers "18,17,16,15,14" >}} | `db2fce_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.0.17` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-db2fce` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 | AVAIL PIGSTY 0.0.17 1 |
| d12.x86_64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| d12.aarch64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| d13.x86_64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| d13.aarch64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| u22.x86_64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| u22.aarch64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| u24.x86_64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| u24.aarch64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| u26.x86_64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
| u26.aarch64 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 | AVAIL PGDG 0.0.17 1 |
@ el8.x86_64 18 db2fce_18 db2fce_18-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db2fce_18-0.0.17-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 db2fce_18 db2fce_18-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db2fce_18-0.0.17-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 db2fce_18 db2fce_18-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db2fce_18-0.0.17-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 db2fce_18 db2fce_18-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db2fce_18-0.0.17-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 db2fce_18 db2fce_18-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db2fce_18-0.0.17-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 db2fce_18 db2fce_18-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db2fce_18-0.0.17-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg13+1_all.deb
@ u22.x86_64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u24.x86_64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u26.x86_64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-db2fce postgresql-18-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-18-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ el8.x86_64 17 db2fce_17 db2fce_17-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db2fce_17-0.0.17-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 db2fce_17 db2fce_17-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db2fce_17-0.0.17-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 db2fce_17 db2fce_17-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db2fce_17-0.0.17-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 db2fce_17 db2fce_17-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db2fce_17-0.0.17-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 db2fce_17 db2fce_17-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db2fce_17-0.0.17-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 db2fce_17 db2fce_17-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db2fce_17-0.0.17-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d13.x86_64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg13+1_all.deb
@ u22.x86_64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u24.x86_64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u26.x86_64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-db2fce postgresql-17-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-17-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ el8.x86_64 16 db2fce_16 db2fce_16-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db2fce_16-0.0.17-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 db2fce_16 db2fce_16-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db2fce_16-0.0.17-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 db2fce_16 db2fce_16-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db2fce_16-0.0.17-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 db2fce_16 db2fce_16-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db2fce_16-0.0.17-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 db2fce_16 db2fce_16-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db2fce_16-0.0.17-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 db2fce_16 db2fce_16-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db2fce_16-0.0.17-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d13.x86_64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg13+1_all.deb
@ u22.x86_64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u24.x86_64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u26.x86_64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-db2fce postgresql-16-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-16-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ el8.x86_64 15 db2fce_15 db2fce_15-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db2fce_15-0.0.17-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 db2fce_15 db2fce_15-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db2fce_15-0.0.17-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 db2fce_15 db2fce_15-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db2fce_15-0.0.17-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 db2fce_15 db2fce_15-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db2fce_15-0.0.17-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 db2fce_15 db2fce_15-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db2fce_15-0.0.17-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 db2fce_15 db2fce_15-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db2fce_15-0.0.17-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d13.x86_64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg13+1_all.deb
@ u22.x86_64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u22.aarch64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u24.x86_64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u26.x86_64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ u26.aarch64 15 postgresql-15-db2fce postgresql-15-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-15-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ el8.x86_64 14 db2fce_14 db2fce_14-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/db2fce_14-0.0.17-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 db2fce_14 db2fce_14-0.0.17-1PIGSTY.el8.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/db2fce_14-0.0.17-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 db2fce_14 db2fce_14-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/db2fce_14-0.0.17-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 db2fce_14 db2fce_14-0.0.17-1PIGSTY.el9.noarch.rpm pigsty 0.0.17 17.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/db2fce_14-0.0.17-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 db2fce_14 db2fce_14-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/db2fce_14-0.0.17-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 db2fce_14 db2fce_14-0.0.17-1PIGSTY.el10.noarch.rpm pigsty 0.0.17 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/db2fce_14-0.0.17-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg12+1_all.deb pgdg 0.0.17 8.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg12+1_all.deb
@ d13.x86_64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg13+1_all.deb pgdg 0.0.17 8.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg13+1_all.deb
@ u22.x86_64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u22.aarch64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg22.04+1_all.deb pgdg 0.0.17 8.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg22.04+1_all.deb
@ u24.x86_64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg24.04+1_all.deb pgdg 0.0.17 8.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg24.04+1_all.deb
@ u26.x86_64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg26.04+1_all.deb
@ u26.aarch64 14 postgresql-14-db2fce postgresql-14-db2fce_0.0.17-1.pgdg26.04+1_all.deb pgdg 0.0.17 8.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/db2fce/postgresql-14-db2fce_0.0.17-1.pgdg26.04+1_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `db2fce` 扩展的 RPM / DEB 包：

```bash
pig build pkg db2fce         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `db2fce` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install db2fce;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y db2fce -v 18  # PG 18
pig ext install -y db2fce -v 17  # PG 17
pig ext install -y db2fce -v 16  # PG 16
pig ext install -y db2fce -v 15  # PG 15
pig ext install -y db2fce -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y db2fce_18       # PG 18
dnf install -y db2fce_17       # PG 17
dnf install -y db2fce_16       # PG 16
dnf install -y db2fce_15       # PG 15
dnf install -y db2fce_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-db2fce   # PG 18
apt install -y postgresql-17-db2fce   # PG 17
apt install -y postgresql-16-db2fce   # PG 16
apt install -y postgresql-15-db2fce   # PG 15
apt install -y postgresql-14-db2fce   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION db2fce CASCADE;  -- 依赖: plpgsql
```




## 用法

来源：[README](https://github.com/credativ/db2fce/blob/master/README.md)，[SQL objects](https://github.com/credativ/db2fce/blob/master/db2fce.sql)，[control file](https://github.com/credativ/db2fce/blob/master/db2fce.control)

`db2fce` 为 PostgreSQL 提供 DB2 兼容环境。它创建 DB2 风格的函数、类型、操作符，以及 `SYSIBM.SYSDUMMY1` 兼容视图，便于迁移或适配原本面向 IBM Db2 的 SQL。

### 启用

```sql
CREATE EXTENSION db2fce;

SET search_path = db2, sysibm, public;
```

大多数兼容对象位于 `db2` schema，`sysibm.sysdummy1` 用于兼容需要 dummy 单行表的 DB2 查询。

```sql
SELECT * FROM sysibm.sysdummy1;
```

### 兼容函数

`db2` schema 包含日期时间函数，例如 `microsecond`、`second`、`minute`、`hour`、`day`、`month`、`year`、`days`、`months_between`、`date`、`time`、`timestamp_format`。

字符串和转换函数包括 `locate`、`translate`、`lcase`、`upper`、`lower`、`strip`、`char`、`integer`、`int`、`double`、`decimal`、`dec`、`hex`、`round`、`digits`、`value`。

### 操作符

SQL 层还定义了 DB2 风格操作符，例如用于不等比较的 `^=`，以及多种类型上的拼接操作符 `!!`。

```sql
SELECT db2.int('42');
SELECT db2.days(current_date);
SELECT 'db' !! '2';
```

### 注意事项

把 `db2` 加入 `search_path` 后，很多 DB2 函数调用可以不带 schema 前缀。部分与 PostgreSQL 语法或内置行为冲突的名称，仍然需要显式写成 `db2.` 前缀。

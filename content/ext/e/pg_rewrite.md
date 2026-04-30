---
title: "pg_rewrite"
linkTitle: "pg_rewrite"
description: "在线重写整表，不阻塞读写"
weight: 5020
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cybertec-postgresql/pg_rewrite">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cybertec-postgresql/pg_rewrite</div>
    <div class="ext-card__desc">https://github.com/cybertec-postgresql/pg_rewrite</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_rewrite`**](/ext/e/pg_rewrite) | `2.1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5020  | [**`pg_rewrite`**](/ext/e/pg_rewrite) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_repack`](/ext/e/pg_repack) [`pg_squeeze`](/ext/e/pg_squeeze) [`pgfincore`](/ext/e/pgfincore) [`pg_prewarm`](/ext/e/pg_prewarm) [`pgstattuple`](/ext/e/pgstattuple) [`amcheck`](/ext/e/amcheck) [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_rewrite` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_rewrite_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-rewrite` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 |
| el8.aarch64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 |
| el9.x86_64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 |
| el9.aarch64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 |
| el10.x86_64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 |
| el10.aarch64 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 2 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 | AVAIL PGDG 2.1.0 3 |
| d12.x86_64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| d12.aarch64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| d13.x86_64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| d13.aarch64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| u22.x86_64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| u22.aarch64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| u24.x86_64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| u24.aarch64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| u26.x86_64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
| u26.aarch64 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 | AVAIL PGDG 2.1.0 1 |
@ el8.x86_64 18 pg_rewrite_18 pg_rewrite_18-2.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.0 38.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_rewrite_18-2.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_rewrite_18 pg_rewrite_18-2.0.0-1PGDG.rhel8.x86_64.rpm pgdg 2.0.0 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_rewrite_18-2.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_rewrite_18 pg_rewrite_18-2.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.0 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_rewrite_18-2.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_rewrite_18 pg_rewrite_18-2.0.0-1PGDG.rhel8.aarch64.rpm pgdg 2.0.0 35.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_rewrite_18-2.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_rewrite_18 pg_rewrite_18-2.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.1.0 38.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_rewrite_18-2.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_rewrite_18 pg_rewrite_18-2.0.0-1PGDG.rhel9.x86_64.rpm pgdg 2.0.0 38.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_rewrite_18-2.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_rewrite_18 pg_rewrite_18-2.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 2.1.0 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_rewrite_18-2.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_rewrite_18 pg_rewrite_18-2.0.0-1PGDG.rhel9.aarch64.rpm pgdg 2.0.0 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_rewrite_18-2.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_rewrite_18 pg_rewrite_18-2.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.1.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_rewrite_18-2.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_rewrite_18 pg_rewrite_18-2.0.0-1PGDG.rhel10.x86_64.rpm pgdg 2.0.0 39.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_rewrite_18-2.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_rewrite_18 pg_rewrite_18-2.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.1.0 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_rewrite_18-2.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_rewrite_18 pg_rewrite_18-2.0.0-1PGDG.rhel10.aarch64.rpm pgdg 2.0.0 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_rewrite_18-2.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb pgdg 2.1.0 76.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb pgdg 2.1.0 71.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb pgdg 2.1.0 76.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb pgdg 2.1.0 71.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb pgdg 2.1.0 79.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb pgdg 2.1.0 74.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb pgdg 2.1.0 76.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb pgdg 2.1.0 71.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb pgdg 2.1.0 75.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-rewrite postgresql-18-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb pgdg 2.1.0 71.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-18-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_rewrite_17 pg_rewrite_17-2.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.0 37.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_rewrite_17-2.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PIGSTY.el8.x86_64.rpm pigsty 2.0.0 37.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_rewrite_17-2.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PGDG.rhel8.x86_64.rpm pgdg 2.0.0 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_rewrite_17-2.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_rewrite_17 pg_rewrite_17-2.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_rewrite_17-2.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PIGSTY.el8.aarch64.rpm pigsty 2.0.0 35.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_rewrite_17-2.0.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PGDG.rhel8.aarch64.rpm pgdg 2.0.0 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_rewrite_17-2.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_rewrite_17 pg_rewrite_17-2.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.1.0 38.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_rewrite_17-2.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PIGSTY.el9.x86_64.rpm pigsty 2.0.0 37.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_rewrite_17-2.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PGDG.rhel9.x86_64.rpm pgdg 2.0.0 37.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_rewrite_17-2.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_rewrite_17 pg_rewrite_17-2.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 2.1.0 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_rewrite_17-2.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PIGSTY.el9.aarch64.rpm pigsty 2.0.0 36.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_rewrite_17-2.0.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PGDG.rhel9.aarch64.rpm pgdg 2.0.0 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_rewrite_17-2.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_rewrite_17 pg_rewrite_17-2.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.1.0 39.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_rewrite_17-2.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PGDG.rhel10.x86_64.rpm pgdg 2.0.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_rewrite_17-2.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_rewrite_17 pg_rewrite_17-2.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.1.0 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_rewrite_17-2.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_rewrite_17 pg_rewrite_17-2.0.0-1PGDG.rhel10.aarch64.rpm pgdg 2.0.0 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_rewrite_17-2.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb pgdg 2.1.0 75.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb pgdg 2.1.0 71.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb pgdg 2.1.0 75.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb pgdg 2.1.0 71.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb pgdg 2.1.0 90.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb pgdg 2.1.0 85.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb pgdg 2.1.0 75.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb pgdg 2.1.0 70.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb pgdg 2.1.0 74.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-rewrite postgresql-17-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb pgdg 2.1.0 70.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-17-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_rewrite_16 pg_rewrite_16-2.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.0 37.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_rewrite_16-2.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_rewrite_16 pg_rewrite_16-2.0.0-1PGDG.rhel8.x86_64.rpm pgdg 2.0.0 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_rewrite_16-2.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_rewrite_16 pg_rewrite_16-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_rewrite_16-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_rewrite_16 pg_rewrite_16-2.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_rewrite_16-2.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_rewrite_16 pg_rewrite_16-2.0.0-1PGDG.rhel8.aarch64.rpm pgdg 2.0.0 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_rewrite_16-2.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_rewrite_16 pg_rewrite_16-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 34.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_rewrite_16-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_rewrite_16 pg_rewrite_16-2.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.1.0 38.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_rewrite_16-2.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_rewrite_16 pg_rewrite_16-2.0.0-1PGDG.rhel9.x86_64.rpm pgdg 2.0.0 37.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_rewrite_16-2.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_rewrite_16 pg_rewrite_16-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_rewrite_16-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_rewrite_16 pg_rewrite_16-2.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 2.1.0 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_rewrite_16-2.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_rewrite_16 pg_rewrite_16-2.0.0-1PGDG.rhel9.aarch64.rpm pgdg 2.0.0 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_rewrite_16-2.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_rewrite_16 pg_rewrite_16-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_rewrite_16-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_rewrite_16 pg_rewrite_16-2.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.1.0 39.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_rewrite_16-2.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_rewrite_16 pg_rewrite_16-2.0.0-1PGDG.rhel10.x86_64.rpm pgdg 2.0.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_rewrite_16-2.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_rewrite_16 pg_rewrite_16-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_rewrite_16-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_rewrite_16 pg_rewrite_16-2.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.1.0 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_rewrite_16-2.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_rewrite_16 pg_rewrite_16-2.0.0-1PGDG.rhel10.aarch64.rpm pgdg 2.0.0 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_rewrite_16-2.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_rewrite_16 pg_rewrite_16-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 35.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_rewrite_16-1.1.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb pgdg 2.1.0 75.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb pgdg 2.1.0 71.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb pgdg 2.1.0 75.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb pgdg 2.1.0 71.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb pgdg 2.1.0 89.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb pgdg 2.1.0 85.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb pgdg 2.1.0 75.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb pgdg 2.1.0 70.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb pgdg 2.1.0 74.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-rewrite postgresql-16-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb pgdg 2.1.0 70.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-16-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_rewrite_15 pg_rewrite_15-2.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.0 38.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_rewrite_15-2.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_rewrite_15 pg_rewrite_15-2.0.0-1PGDG.rhel8.x86_64.rpm pgdg 2.0.0 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_rewrite_15-2.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_rewrite_15 pg_rewrite_15-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_rewrite_15-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_rewrite_15 pg_rewrite_15-2.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_rewrite_15-2.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_rewrite_15 pg_rewrite_15-2.0.0-1PGDG.rhel8.aarch64.rpm pgdg 2.0.0 35.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_rewrite_15-2.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_rewrite_15 pg_rewrite_15-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 34.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_rewrite_15-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_rewrite_15 pg_rewrite_15-2.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.1.0 38.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_rewrite_15-2.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_rewrite_15 pg_rewrite_15-2.0.0-1PGDG.rhel9.x86_64.rpm pgdg 2.0.0 38.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_rewrite_15-2.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_rewrite_15 pg_rewrite_15-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 36.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_rewrite_15-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_rewrite_15 pg_rewrite_15-2.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 2.1.0 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_rewrite_15-2.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_rewrite_15 pg_rewrite_15-2.0.0-1PGDG.rhel9.aarch64.rpm pgdg 2.0.0 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_rewrite_15-2.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_rewrite_15 pg_rewrite_15-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_rewrite_15-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_rewrite_15 pg_rewrite_15-2.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.1.0 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_rewrite_15-2.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_rewrite_15 pg_rewrite_15-2.0.0-1PGDG.rhel10.x86_64.rpm pgdg 2.0.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_rewrite_15-2.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_rewrite_15 pg_rewrite_15-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_rewrite_15-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_rewrite_15 pg_rewrite_15-2.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.1.0 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_rewrite_15-2.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_rewrite_15 pg_rewrite_15-2.0.0-1PGDG.rhel10.aarch64.rpm pgdg 2.0.0 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_rewrite_15-2.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_rewrite_15 pg_rewrite_15-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_rewrite_15-1.1.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb pgdg 2.1.0 75.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb pgdg 2.1.0 70.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb pgdg 2.1.0 75.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb pgdg 2.1.0 70.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb pgdg 2.1.0 89.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb pgdg 2.1.0 84.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb pgdg 2.1.0 75.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb pgdg 2.1.0 70.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb pgdg 2.1.0 74.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-rewrite postgresql-15-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb pgdg 2.1.0 70.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-15-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_rewrite_14 pg_rewrite_14-2.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.1.0 38.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_rewrite_14-2.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_rewrite_14 pg_rewrite_14-2.0.0-1PGDG.rhel8.x86_64.rpm pgdg 2.0.0 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_rewrite_14-2.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_rewrite_14 pg_rewrite_14-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_rewrite_14-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_rewrite_14 pg_rewrite_14-2.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.1.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_rewrite_14-2.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_rewrite_14 pg_rewrite_14-2.0.0-1PGDG.rhel8.aarch64.rpm pgdg 2.0.0 35.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_rewrite_14-2.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_rewrite_14 pg_rewrite_14-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 34.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_rewrite_14-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_rewrite_14 pg_rewrite_14-2.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 2.1.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_rewrite_14-2.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_rewrite_14 pg_rewrite_14-2.0.0-1PGDG.rhel9.x86_64.rpm pgdg 2.0.0 38.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_rewrite_14-2.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_rewrite_14 pg_rewrite_14-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 36.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_rewrite_14-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_rewrite_14 pg_rewrite_14-2.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 2.1.0 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_rewrite_14-2.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_rewrite_14 pg_rewrite_14-2.0.0-1PGDG.rhel9.aarch64.rpm pgdg 2.0.0 36.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_rewrite_14-2.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_rewrite_14 pg_rewrite_14-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_rewrite_14-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_rewrite_14 pg_rewrite_14-2.1.0-1PGDG.rhel10.1.x86_64.rpm pgdg 2.1.0 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_rewrite_14-2.1.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_rewrite_14 pg_rewrite_14-2.0.0-1PGDG.rhel10.x86_64.rpm pgdg 2.0.0 39.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_rewrite_14-2.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_rewrite_14 pg_rewrite_14-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_rewrite_14-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_rewrite_14 pg_rewrite_14-2.1.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.1.0 37.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_rewrite_14-2.1.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_rewrite_14 pg_rewrite_14-2.0.0-1PGDG.rhel10.aarch64.rpm pgdg 2.0.0 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_rewrite_14-2.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_rewrite_14 pg_rewrite_14-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_rewrite_14-1.1.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb pgdg 2.1.0 75.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb pgdg 2.1.0 71.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb pgdg 2.1.0 75.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb pgdg 2.1.0 70.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb pgdg 2.1.0 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb pgdg 2.1.0 84.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb pgdg 2.1.0 75.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb pgdg 2.1.0 71.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb pgdg 2.1.0 74.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-rewrite postgresql-14-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb pgdg 2.1.0 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-rewrite/postgresql-14-pg-rewrite_2.1.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_rewrite` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_rewrite;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_rewrite -v 18  # PG 18
pig ext install -y pg_rewrite -v 17  # PG 17
pig ext install -y pg_rewrite -v 16  # PG 16
pig ext install -y pg_rewrite -v 15  # PG 15
pig ext install -y pg_rewrite -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_rewrite_18       # PG 18
dnf install -y pg_rewrite_17       # PG 17
dnf install -y pg_rewrite_16       # PG 16
dnf install -y pg_rewrite_15       # PG 15
dnf install -y pg_rewrite_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-rewrite   # PG 18
apt install -y postgresql-17-pg-rewrite   # PG 17
apt install -y postgresql-16-pg-rewrite   # PG 16
apt install -y postgresql-15-pg-rewrite   # PG 15
apt install -y postgresql-14-pg-rewrite   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_rewrite';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_rewrite;
```



## 用法

> [pg_rewrite: 允许在表重写期间继续读写的工具](https://github.com/cybertec-postgresql/pg_rewrite)

`pg_rewrite` 需要设置 `wal_level = logical`，并且必须添加到 `shared_preload_libraries` 中。常见用例包括更改列数据类型、分区表、重新排列列以及将表移动到不同的表空间——同时允许并发读写。

### 重写表

创建具有目标架构的目标表，然后调用 `rewrite_table()`：

```sql
-- 源表
CREATE TABLE measurement (id int, city_id int NOT NULL, logdate date NOT NULL, peaktemp int, PRIMARY KEY(id, logdate));

-- 具有新模式的目标表（例如 bigint id + 分区）
CREATE TABLE measurement_aux (id bigint, city_id int NOT NULL, logdate date NOT NULL, peaktemp int, PRIMARY KEY(id, logdate))
  PARTITION BY RANGE (logdate);

CREATE TABLE measurement_y2006m02 PARTITION OF measurement_aux FOR VALUES FROM ('2006-02-01') TO ('2006-03-01');

-- 执行重写（复制数据、应用并发变更，然后重命名）
SELECT rewrite_table('measurement', 'measurement_aux', 'measurement_old');
```

源表和目标表都必须有一个标识索引（通常是主键）。该函数会复制所有行，通过逻辑解码重放并发变更，然后原子性地重命名表。

### 进度监控

```sql
SELECT * FROM pg_rewrite_progress;
```

显示 `ins_initial`（初始复制的行数）、`ins`、`upd`、`del`（应用的并发变更）。

### 配置

- **`rewrite.max_xlock_time`** -- 最终重命名阶段持有排他锁的最大时间（毫秒）。默认 `0`（不限制）。设置为例如 `100` 可将锁定时间限制在 0.1 秒；超出时函数会重试。

```sql
SET rewrite.max_xlock_time TO 100;
```

### 约束处理

- PRIMARY KEY、UNIQUE、EXCLUDE：在调用 `rewrite_table()` 之前添加到目标表
- CHECK、NOT NULL（PG18+）、FOREIGN KEY：自动创建为 NOT VALID；使用 `ALTER TABLE ... VALIDATE CONSTRAINT ...` 验证

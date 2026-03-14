---
title: "pg_squeeze"
linkTitle: "pg_squeeze"
description: "从关系中删除未使用空间"
weight: 5040
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cybertec-postgresql/pg_squeeze">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cybertec-postgresql/pg_squeeze</div>
    <div class="ext-card__desc">https://github.com/cybertec-postgresql/pg_squeeze</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_squeeze`**](/ext/e/pg_squeeze) | `1.9.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5040  | [**`pg_squeeze`**](/ext/e/pg_squeeze) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `squeeze` |
{.ext-table}

| **相关扩展** | [`pg_repack`](/ext/e/pg_repack) [`pgfincore`](/ext/e/pgfincore) [`pg_prewarm`](/ext/e/pg_prewarm) [`pgstattuple`](/ext/e/pgstattuple) [`pg_cooldown`](/ext/e/pg_cooldown) [`pgcozy`](/ext/e/pgcozy) [`amcheck`](/ext/e/amcheck) [`pageinspect`](/ext/e/pageinspect) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_squeeze` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_squeeze_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-squeeze` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 4 | AVAIL PGDG 1.9.1 5 | AVAIL PGDG 1.9.1 6 | AVAIL PGDG 1.9.1 7 |
| el8.aarch64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 4 | AVAIL PGDG 1.9.1 5 | AVAIL PGDG 1.9.1 6 | AVAIL PGDG 1.9.1 6 |
| el9.x86_64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 4 | AVAIL PGDG 1.9.1 5 | AVAIL PGDG 1.9.1 6 | AVAIL PGDG 1.9.1 7 |
| el9.aarch64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 4 | AVAIL PGDG 1.9.1 5 | AVAIL PGDG 1.9.1 6 | AVAIL PGDG 1.9.1 6 |
| el10.x86_64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 2 | AVAIL PGDG 1.9.1 2 | AVAIL PGDG 1.9.1 2 | AVAIL PGDG 1.9.1 2 |
| el10.aarch64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 2 | AVAIL PGDG 1.9.1 2 | AVAIL PGDG 1.9.1 2 | AVAIL PGDG 1.9.1 2 |
| d12.x86_64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 |
| d12.aarch64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 |
| d13.x86_64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 |
| d13.aarch64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 |
| u22.x86_64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 |
| u22.aarch64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 |
| u24.x86_64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 |
| u24.aarch64 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 | AVAIL PGDG 1.9.1 1 |
@ el8.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_squeeze_18-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 54.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_squeeze_18-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_squeeze_18-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_squeeze_18-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_squeeze_18-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 55.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_squeeze_18-1.9.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.1-3.pgdg12+1_amd64.deb pgdg 1.9.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.1-3.pgdg12+1_arm64.deb pgdg 1.9.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.1-3.pgdg13+1_amd64.deb pgdg 1.9.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.1-3.pgdg13+1_arm64.deb pgdg 1.9.1 111.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb pgdg 1.9.1 118.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb pgdg 1.9.1 113.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb pgdg 1.9.1 115.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb pgdg 1.9.1 110.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel8.x86_64.rpm pgdg 1.8.0 56.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-2PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.7.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 54.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel8.aarch64.rpm pgdg 1.8.0 54.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-2PGDG.rhel8.aarch64.rpm pgdg 1.7.0 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.7.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel9.x86_64.rpm pgdg 1.8.0 56.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-2PGDG.rhel9.x86_64.rpm pgdg 1.7.0 55.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.7.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 56.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel9.aarch64.rpm pgdg 1.8.0 54.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-2PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.7.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel10.x86_64.rpm pgdg 1.8.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 55.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.9.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel10.aarch64.rpm pgdg 1.8.0 55.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.1-3.pgdg12+1_amd64.deb pgdg 1.9.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.1-3.pgdg12+1_arm64.deb pgdg 1.9.1 110.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.1-3.pgdg13+1_amd64.deb pgdg 1.9.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.1-3.pgdg13+1_arm64.deb pgdg 1.9.1 111.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb pgdg 1.9.1 138.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb pgdg 1.9.1 133.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb pgdg 1.9.1 115.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb pgdg 1.9.1 110.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel8.x86_64.rpm pgdg 1.8.0 56.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 52.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 52.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 54.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel8.aarch64.rpm pgdg 1.8.0 54.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 53.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 56.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel9.x86_64.rpm pgdg 1.8.0 56.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 55.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel9.aarch64.rpm pgdg 1.8.0 54.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel10.x86_64.rpm pgdg 1.8.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 55.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.9.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel10.aarch64.rpm pgdg 1.8.0 55.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.1-3.pgdg12+1_amd64.deb pgdg 1.9.1 115.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.1-3.pgdg12+1_arm64.deb pgdg 1.9.1 110.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.1-3.pgdg13+1_amd64.deb pgdg 1.9.1 115.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.1-3.pgdg13+1_arm64.deb pgdg 1.9.1 111.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb pgdg 1.9.1 136.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb pgdg 1.9.1 131.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb pgdg 1.9.1 115.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb pgdg 1.9.1 110.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel8.x86_64.rpm pgdg 1.8.0 57.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 52.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.5.0-1.rhel8.x86_64.rpm pgdg 1.5.0 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.5.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 54.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel8.aarch64.rpm pgdg 1.8.0 54.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.5.0-1.rhel8.aarch64.rpm pgdg 1.5.0 43.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.5.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 56.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel9.x86_64.rpm pgdg 1.8.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 56.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 52.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 52.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.5.0-1.rhel9.x86_64.rpm pgdg 1.5.0 46.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.5.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel9.aarch64.rpm pgdg 1.8.0 54.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.5.0-1.rhel9.aarch64.rpm pgdg 1.5.0 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.5.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel10.x86_64.rpm pgdg 1.8.0 57.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 55.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.9.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel10.aarch64.rpm pgdg 1.8.0 55.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.1-3.pgdg12+1_amd64.deb pgdg 1.9.1 115.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.1-3.pgdg12+1_arm64.deb pgdg 1.9.1 110.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.1-3.pgdg13+1_amd64.deb pgdg 1.9.1 115.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.1-3.pgdg13+1_arm64.deb pgdg 1.9.1 111.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb pgdg 1.9.1 137.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb pgdg 1.9.1 132.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb pgdg 1.9.1 115.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb pgdg 1.9.1 110.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel8.x86_64.rpm pgdg 1.8.0 57.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 53.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.5.0-1.rhel8.x86_64.rpm pgdg 1.5.0 46.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.4.1-2.rhel8.x86_64.rpm pgdg 1.4.1 112.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.4.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 55.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel8.aarch64.rpm pgdg 1.8.0 54.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 54.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 50.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.5.0-1.rhel8.aarch64.rpm pgdg 1.5.0 43.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.5.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 57.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel9.x86_64.rpm pgdg 1.8.0 56.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.5.0-1.rhel9.x86_64.rpm pgdg 1.5.0 46.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.5.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.4.1-2.rhel9.x86_64.rpm pgdg 1.4.1 112.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.4.1-2.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel9.aarch64.rpm pgdg 1.8.0 54.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 50.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.5.0-1.rhel9.aarch64.rpm pgdg 1.5.0 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.5.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel10.x86_64.rpm pgdg 1.8.0 57.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 56.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.9.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel10.aarch64.rpm pgdg 1.8.0 55.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.1-3.pgdg12+1_amd64.deb pgdg 1.9.1 115.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.1-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.1-3.pgdg12+1_arm64.deb pgdg 1.9.1 111.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.1-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.1-3.pgdg13+1_amd64.deb pgdg 1.9.1 115.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.1-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.1-3.pgdg13+1_arm64.deb pgdg 1.9.1 111.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.1-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb pgdg 1.9.1 137.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.1-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb pgdg 1.9.1 132.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.1-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb pgdg 1.9.1 115.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.1-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb pgdg 1.9.1 110.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.1-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_squeeze` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_squeeze;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_squeeze -v 18  # PG 18
pig ext install -y pg_squeeze -v 17  # PG 17
pig ext install -y pg_squeeze -v 16  # PG 16
pig ext install -y pg_squeeze -v 15  # PG 15
pig ext install -y pg_squeeze -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_squeeze_18       # PG 18
dnf install -y pg_squeeze_17       # PG 17
dnf install -y pg_squeeze_16       # PG 16
dnf install -y pg_squeeze_15       # PG 15
dnf install -y pg_squeeze_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-squeeze   # PG 18
apt install -y postgresql-17-squeeze   # PG 17
apt install -y postgresql-16-squeeze   # PG 16
apt install -y postgresql-15-squeeze   # PG 15
apt install -y postgresql-14-squeeze   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_squeeze';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_squeeze;
```



## 用法

> [pg_squeeze: 从关系中移除未使用空间的工具](https://github.com/cybertec-postgresql/pg_squeeze)

`pg_squeeze` 需要设置 `wal_level = logical`，并且必须添加到 `shared_preload_libraries` 中。它使用逻辑解码而非触发器，在允许并发读写的同时移除表膨胀。

### 注册表进行定期处理

向 `squeeze.tables` 插入数据以启用定期膨胀检查：

```sql
INSERT INTO squeeze.tables (tabschema, tabname, schedule)
VALUES ('public', 'foo', ('{30}', '{22}', NULL, NULL, '{3, 5}'));
```

`schedule` 字段使用类似 crontab 的格式：`(minutes, hours, days_of_month, months, days_of_week)`。上面的配置在每周三和周五的 22:30 检查表 `foo`。

可选列：`free_space_extra`（触发所需的最小额外空闲空间百分比，默认 50）、`min_size`（最小 MB 数，默认 8）、`vacuum_max_age`（距上次 VACUUM 的最大时间，默认 1小时）、`max_retry`（重试次数，默认 0）、`clustering_index`（按此索引排序元组）、`rel_tablespace`、`ind_tablespaces`、`skip_analyze`。

### 临时压缩

```sql
SELECT squeeze.squeeze_table('public', 'pgbench_accounts');
SELECT squeeze.squeeze_table('public', 'mytable', 'my_cluster_idx', 'target_tablespace');
```

### 启动/停止工作进程

```sql
SELECT squeeze.start_worker();   -- 启动调度器和压缩工作进程
SELECT squeeze.stop_worker();    -- 停止当前数据库的所有工作进程
```

通过 `postgresql.conf` 在集群启动时自动启动：

```
squeeze.worker_autostart = 'my_database your_database'
squeeze.worker_role = postgres
```

### 监控

- **`squeeze.log`** -- 每个成功压缩的表对应一条记录（包含 `started`、`finished`、`ins_initial`、`ins`、`upd`、`del`）
- **`squeeze.errors`** -- 压缩过程中的错误
- **`squeeze.get_active_workers()`** -- 显示当前活动的压缩工作进程及其进度

### 配置

- **`squeeze.max_xlock_time`** -- 最大排他锁时间，毫秒（默认不限制）
- **`squeeze.workers_per_database`** -- 每个数据库的并发压缩工作进程数（默认 1）

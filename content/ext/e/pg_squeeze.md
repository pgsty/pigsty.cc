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
| [**`pg_squeeze`**](/ext/e/pg_squeeze) | `1.9.4` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd2clause" href="/ext/license#bsd2clause">BSD-2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5040  | [**`pg_squeeze`**](/ext/e/pg_squeeze) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `squeeze` |
{.ext-table}

| **相关扩展** | [`pg_repack`](/ext/e/pg_repack) [`pgstattuple`](/ext/e/pgstattuple) [`pg_dirtyread`](/ext/e/pg_dirtyread) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_column_tetris`](/ext/e/pg_column_tetris) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_squeeze` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_squeeze_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.9.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-squeeze` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 6 | AVAIL PGDG 1.9.4 7 | AVAIL PGDG 1.9.4 8 | AVAIL PGDG 1.9.4 9 |
| el8.aarch64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 6 | AVAIL PGDG 1.9.4 7 | AVAIL PGDG 1.9.4 8 | AVAIL PGDG 1.9.4 8 |
| el9.x86_64 | AVAIL PGDG 1.9.4 6 | AVAIL PGDG 1.9.4 9 | AVAIL PGDG 1.9.4 10 | AVAIL PGDG 1.9.4 11 | AVAIL PGDG 1.9.4 12 |
| el9.aarch64 | AVAIL PGDG 1.9.4 6 | AVAIL PGDG 1.9.4 9 | AVAIL PGDG 1.9.4 10 | AVAIL PGDG 1.9.4 11 | AVAIL PGDG 1.9.4 11 |
| el10.x86_64 | AVAIL PGDG 1.9.4 6 | AVAIL PGDG 1.9.4 7 | AVAIL PGDG 1.9.4 7 | AVAIL PGDG 1.9.4 7 | AVAIL PGDG 1.9.4 7 |
| el10.aarch64 | AVAIL PGDG 1.9.4 6 | AVAIL PGDG 1.9.4 7 | AVAIL PGDG 1.9.4 7 | AVAIL PGDG 1.9.4 7 | AVAIL PGDG 1.9.4 7 |
| d12.x86_64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| d12.aarch64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| d13.x86_64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| d13.aarch64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| u22.x86_64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| u22.aarch64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| u24.x86_64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| u24.aarch64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| u26.x86_64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
| u26.aarch64 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 | AVAIL PGDG 1.9.4 3 |
@ el8.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.4 58.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_squeeze_18-1.9.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 58.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_squeeze_18-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_squeeze_18-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.4 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_squeeze_18-1.9.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_squeeze_18-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 54.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_squeeze_18-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.4-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.4 57.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_squeeze_18-1.9.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.2 57.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_squeeze_18-1.9.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.9.2 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_squeeze_18-1.9.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.9.2 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_squeeze_18-1.9.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.9.1 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_squeeze_18-1.9.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_squeeze_18-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.4-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.4 55.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_squeeze_18-1.9.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.2 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_squeeze_18-1.9.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.9.2 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_squeeze_18-1.9.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.9.2 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_squeeze_18-1.9.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.9.1 54.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_squeeze_18-1.9.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_squeeze_18-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.4-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.4 57.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_squeeze_18-1.9.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.2 57.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_squeeze_18-1.9.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.9.2 57.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_squeeze_18-1.9.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.9.2 57.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_squeeze_18-1.9.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.9.1 57.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_squeeze_18-1.9.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_squeeze_18-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.4-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.4 56.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_squeeze_18-1.9.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.2 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_squeeze_18-1.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_squeeze_18-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_squeeze_18-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.9.1 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_squeeze_18-1.9.1-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_squeeze_18 pg_squeeze_18-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 55.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_squeeze_18-1.9.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg12+1_amd64.deb pgdg 1.9.4 116.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg12+1_amd64.deb pgdg 1.9.4 116.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg12+1_amd64.deb pgdg 1.9.3 116.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg12+1_arm64.deb pgdg 1.9.4 112.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg12+1_arm64.deb pgdg 1.9.4 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg12+1_arm64.deb pgdg 1.9.3 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg13+1_amd64.deb pgdg 1.9.4 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg13+1_amd64.deb pgdg 1.9.4 116.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg13+1_amd64.deb pgdg 1.9.3 116.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg13+1_arm64.deb pgdg 1.9.4 112.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg13+1_arm64.deb pgdg 1.9.4 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg13+1_arm64.deb pgdg 1.9.3 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb pgdg 1.9.4 119.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb pgdg 1.9.4 119.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb pgdg 1.9.3 119.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb pgdg 1.9.4 114.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb pgdg 1.9.4 114.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb pgdg 1.9.3 113.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb pgdg 1.9.3 116.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb pgdg 1.9.3 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb pgdg 1.9.4 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb pgdg 1.9.4 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb pgdg 1.9.3 114.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-squeeze postgresql-18-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb pgdg 1.9.3 110.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-18-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.4 58.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.9.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 58.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel8.x86_64.rpm pgdg 1.8.0 56.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-2PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.7.0-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_squeeze_17-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.4 55.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.9.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 55.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 54.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel8.aarch64.rpm pgdg 1.8.0 54.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-2PGDG.rhel8.aarch64.rpm pgdg 1.7.0 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.7.0-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_squeeze_17-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.4-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.4 57.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.9.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.2 57.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.9.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.9.2 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.9.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.9.2 57.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.9.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.9.1 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.9.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel9.x86_64.rpm pgdg 1.8.0 56.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-2PGDG.rhel9.x86_64.rpm pgdg 1.7.0 55.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.7.0-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 56.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_squeeze_17-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.4-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.4 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.9.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.2 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.9.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.9.2 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.9.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.9.2 55.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.9.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.9.1 55.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.9.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel9.aarch64.rpm pgdg 1.8.0 54.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-2PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.7.0-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_squeeze_17-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.4-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.4 57.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.9.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.2 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.9.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.9.2 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.9.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.9.2 57.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.9.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.9.1 57.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.9.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel10.x86_64.rpm pgdg 1.8.0 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_squeeze_17-1.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.4-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.4 56.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.9.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.2 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.9.1 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.9.1-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.9.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_squeeze_17 pg_squeeze_17-1.8.0-1PGDG.rhel10.aarch64.rpm pgdg 1.8.0 55.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_squeeze_17-1.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg12+1_amd64.deb pgdg 1.9.4 116.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg12+1_amd64.deb pgdg 1.9.4 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg12+1_amd64.deb pgdg 1.9.3 116.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg12+1_arm64.deb pgdg 1.9.4 112.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg12+1_arm64.deb pgdg 1.9.4 112.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg12+1_arm64.deb pgdg 1.9.3 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg13+1_amd64.deb pgdg 1.9.4 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg13+1_amd64.deb pgdg 1.9.4 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg13+1_amd64.deb pgdg 1.9.3 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg13+1_arm64.deb pgdg 1.9.4 112.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg13+1_arm64.deb pgdg 1.9.4 112.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg13+1_arm64.deb pgdg 1.9.3 112.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb pgdg 1.9.4 140.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb pgdg 1.9.4 140.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb pgdg 1.9.3 140.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb pgdg 1.9.4 135.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb pgdg 1.9.4 135.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb pgdg 1.9.3 134.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb pgdg 1.9.3 116.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb pgdg 1.9.3 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb pgdg 1.9.4 115.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb pgdg 1.9.4 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb pgdg 1.9.3 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-squeeze postgresql-17-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb pgdg 1.9.3 110.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-17-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.4 58.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.9.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 58.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel8.x86_64.rpm pgdg 1.8.0 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 52.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 52.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_squeeze_16-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.4 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.9.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 54.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel8.aarch64.rpm pgdg 1.8.0 54.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 50.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 50.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_squeeze_16-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.4-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.4 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.9.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.2 57.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.9.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.9.2 56.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.9.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.9.2 57.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.9.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.9.1 56.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.9.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 56.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel9.x86_64.rpm pgdg 1.8.0 56.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 55.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 52.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 52.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_squeeze_16-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.4-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.4 55.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.9.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.2 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.9.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.9.2 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.9.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.9.2 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.9.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.9.1 55.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.9.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel9.aarch64.rpm pgdg 1.8.0 54.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 50.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 50.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_squeeze_16-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.4-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.4 57.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.9.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.2 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.9.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.9.2 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.9.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.9.2 57.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.9.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.9.1 57.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.9.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel10.x86_64.rpm pgdg 1.8.0 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_squeeze_16-1.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.4-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.4 56.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.9.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.2 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.9.1 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.9.1-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.9.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_squeeze_16 pg_squeeze_16-1.8.0-1PGDG.rhel10.aarch64.rpm pgdg 1.8.0 55.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_squeeze_16-1.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg12+1_amd64.deb pgdg 1.9.4 116.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg12+1_amd64.deb pgdg 1.9.4 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg12+1_amd64.deb pgdg 1.9.3 116.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg12+1_arm64.deb pgdg 1.9.4 112.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg12+1_arm64.deb pgdg 1.9.4 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg12+1_arm64.deb pgdg 1.9.3 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg13+1_amd64.deb pgdg 1.9.4 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg13+1_amd64.deb pgdg 1.9.4 116.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg13+1_amd64.deb pgdg 1.9.3 116.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg13+1_arm64.deb pgdg 1.9.4 112.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg13+1_arm64.deb pgdg 1.9.4 112.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg13+1_arm64.deb pgdg 1.9.3 112.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb pgdg 1.9.4 138.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb pgdg 1.9.4 138.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb pgdg 1.9.3 137.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb pgdg 1.9.4 133.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb pgdg 1.9.4 133.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb pgdg 1.9.3 132.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb pgdg 1.9.4 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb pgdg 1.9.3 116.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb pgdg 1.9.3 111.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb pgdg 1.9.4 114.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb pgdg 1.9.4 114.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb pgdg 1.9.3 114.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-squeeze postgresql-16-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb pgdg 1.9.3 110.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-16-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.4 58.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.9.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 58.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel8.x86_64.rpm pgdg 1.8.0 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 52.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 52.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.5.0-1.rhel8.x86_64.rpm pgdg 1.5.0 46.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_squeeze_15-1.5.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.4 55.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.9.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 55.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 54.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel8.aarch64.rpm pgdg 1.8.0 54.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 50.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 50.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.5.0-1.rhel8.aarch64.rpm pgdg 1.5.0 43.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_squeeze_15-1.5.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.4-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.4 58.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.9.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.2 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.9.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.9.2 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.9.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.9.2 57.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.9.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.9.1 57.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.9.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 56.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel9.x86_64.rpm pgdg 1.8.0 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 56.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 52.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 52.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.5.0-1.rhel9.x86_64.rpm pgdg 1.5.0 46.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_squeeze_15-1.5.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.4-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.4 55.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.9.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.2 55.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.9.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.9.2 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.9.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.9.2 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.9.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.9.1 55.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.9.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel9.aarch64.rpm pgdg 1.8.0 54.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 50.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 50.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.5.0-1.rhel9.aarch64.rpm pgdg 1.5.0 44.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_squeeze_15-1.5.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.4-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.4 58.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.9.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.2 57.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.9.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.9.2 57.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.9.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.9.2 58.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.9.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.9.1 57.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.9.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel10.x86_64.rpm pgdg 1.8.0 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_squeeze_15-1.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.4-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.4 56.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.9.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.2 56.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 56.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 56.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.9.1 55.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.9.1-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 55.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.9.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_squeeze_15 pg_squeeze_15-1.8.0-1PGDG.rhel10.aarch64.rpm pgdg 1.8.0 55.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_squeeze_15-1.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg12+1_amd64.deb pgdg 1.9.4 116.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg12+1_amd64.deb pgdg 1.9.4 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg12+1_amd64.deb pgdg 1.9.3 116.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg12+1_arm64.deb pgdg 1.9.4 112.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg12+1_arm64.deb pgdg 1.9.4 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg12+1_arm64.deb pgdg 1.9.3 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg13+1_amd64.deb pgdg 1.9.4 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg13+1_amd64.deb pgdg 1.9.4 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg13+1_amd64.deb pgdg 1.9.3 116.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg13+1_arm64.deb pgdg 1.9.4 112.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg13+1_arm64.deb pgdg 1.9.4 112.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg13+1_arm64.deb pgdg 1.9.3 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb pgdg 1.9.4 138.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb pgdg 1.9.4 138.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb pgdg 1.9.3 138.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb pgdg 1.9.4 133.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb pgdg 1.9.4 134.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb pgdg 1.9.3 133.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb pgdg 1.9.3 116.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb pgdg 1.9.3 111.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb pgdg 1.9.4 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb pgdg 1.9.4 115.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb pgdg 1.9.3 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-squeeze postgresql-15-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb pgdg 1.9.3 110.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-15-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.4-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.4 59.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.9.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 58.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel8.x86_64.rpm pgdg 1.9.1 57.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel8.x86_64.rpm pgdg 1.8.0 57.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.7.0-1PGDG.rhel8.x86_64.rpm pgdg 1.7.0 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 53.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.6.1-1PGDG.rhel8.x86_64.rpm pgdg 1.6.1 53.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.5.0-1.rhel8.x86_64.rpm pgdg 1.5.0 46.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.4.1-2.rhel8.x86_64.rpm pgdg 1.4.1 112.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_squeeze_14-1.4.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.4-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.4 56.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.9.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel8.aarch64.rpm pgdg 1.9.1 55.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel8.aarch64.rpm pgdg 1.8.0 54.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.7.0-1PGDG.rhel8.aarch64.rpm pgdg 1.7.0 54.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 50.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.6.1-1PGDG.rhel8.aarch64.rpm pgdg 1.6.1 50.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.5.0-1.rhel8.aarch64.rpm pgdg 1.5.0 43.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_squeeze_14-1.5.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.4-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.4 57.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.9.4-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel9.8.x86_64.rpm pgdg 1.9.2 57.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.9.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel9.7.x86_64.rpm pgdg 1.9.2 57.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.9.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel9.6.x86_64.rpm pgdg 1.9.2 57.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.9.2-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-3PGDG.rhel9.8.x86_64.rpm pgdg 1.9.1 57.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.9.1-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel9.x86_64.rpm pgdg 1.9.1 57.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel9.x86_64.rpm pgdg 1.8.0 56.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.7.0-1PGDG.rhel9.x86_64.rpm pgdg 1.7.0 56.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 52.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.6.1-1PGDG.rhel9.x86_64.rpm pgdg 1.6.1 52.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.5.0-1.rhel9.x86_64.rpm pgdg 1.5.0 46.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.5.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.4.1-2.rhel9.x86_64.rpm pgdg 1.4.1 112.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_squeeze_14-1.4.1-2.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.4-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.4 56.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.9.4-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel9.8.aarch64.rpm pgdg 1.9.2 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.9.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel9.7.aarch64.rpm pgdg 1.9.2 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.9.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel9.6.aarch64.rpm pgdg 1.9.2 55.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.9.2-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-3PGDG.rhel9.8.aarch64.rpm pgdg 1.9.1 55.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.9.1-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel9.aarch64.rpm pgdg 1.9.1 54.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel9.aarch64.rpm pgdg 1.8.0 54.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.7.0-1PGDG.rhel9.aarch64.rpm pgdg 1.7.0 54.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 50.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.6.1-1PGDG.rhel9.aarch64.rpm pgdg 1.6.1 50.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.5.0-1.rhel9.aarch64.rpm pgdg 1.5.0 44.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_squeeze_14-1.5.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.4-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.4 58.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.9.4-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel10.2.x86_64.rpm pgdg 1.9.2 58.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.9.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel10.1.x86_64.rpm pgdg 1.9.2 58.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.9.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel10.0.x86_64.rpm pgdg 1.9.2 58.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.9.2-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-3PGDG.rhel10.2.x86_64.rpm pgdg 1.9.1 57.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.9.1-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel10.x86_64.rpm pgdg 1.9.1 57.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.9.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel10.x86_64.rpm pgdg 1.8.0 57.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_squeeze_14-1.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.4-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.4 56.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.9.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.2 56.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.9.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 56.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 56.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-3PGDG.rhel10.2.aarch64.rpm pgdg 1.9.1 56.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.9.1-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.9.1-1PGDG.rhel10.aarch64.rpm pgdg 1.9.1 56.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.9.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_squeeze_14 pg_squeeze_14-1.8.0-1PGDG.rhel10.aarch64.rpm pgdg 1.8.0 55.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_squeeze_14-1.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg12+1_amd64.deb pgdg 1.9.4 116.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg12+1_amd64.deb pgdg 1.9.4 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg12+1_amd64.deb pgdg 1.9.3 116.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg12+1_arm64.deb pgdg 1.9.4 112.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg12+1_arm64.deb pgdg 1.9.4 112.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg12+1_arm64.deb pgdg 1.9.3 112.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg13+1_amd64.deb pgdg 1.9.4 116.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg13+1_amd64.deb pgdg 1.9.4 116.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg13+1_amd64.deb pgdg 1.9.3 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg13+1_arm64.deb pgdg 1.9.4 112.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg13+1_arm64.deb pgdg 1.9.4 112.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg13+1_arm64.deb pgdg 1.9.3 112.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb pgdg 1.9.4 138.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb pgdg 1.9.4 138.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb pgdg 1.9.3 138.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb pgdg 1.9.4 133.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb pgdg 1.9.4 133.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb pgdg 1.9.3 133.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb pgdg 1.9.4 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb pgdg 1.9.3 116.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb pgdg 1.9.4 111.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb pgdg 1.9.3 111.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb pgdg 1.9.4 115.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb pgdg 1.9.4 115.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb pgdg 1.9.3 115.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb pgdg 1.9.4 110.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-squeeze postgresql-14-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb pgdg 1.9.3 110.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-squeeze/postgresql-14-squeeze_1.9.3-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_squeeze` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install pg_squeeze;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_squeeze -v 18  # PG 18
pig ext install -y pg_squeeze -v 17  # PG 17
pig ext install -y pg_squeeze -v 16  # PG 16
pig ext install -y pg_squeeze -v 15  # PG 15
pig ext install -y pg_squeeze -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_squeeze_18       # PG 18
dnf install -y pg_squeeze_17       # PG 17
dnf install -y pg_squeeze_16       # PG 16
dnf install -y pg_squeeze_15       # PG 15
dnf install -y pg_squeeze_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-squeeze   # PG 18
apt install -y postgresql-17-squeeze   # PG 17
apt install -y postgresql-16-squeeze   # PG 16
apt install -y postgresql-15-squeeze   # PG 15
apt install -y postgresql-14-squeeze   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_squeeze';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_squeeze;
```

## 用法

来源：

- [pg_squeeze REL1_9_4 发行版](https://github.com/cybertec-postgresql/pg_squeeze/releases/tag/REL1_9_4)
- [pg_squeeze REL1_9_4 README](https://github.com/cybertec-postgresql/pg_squeeze/blob/REL1_9_4/README.md)
- [pg_squeeze 发行说明](https://github.com/cybertec-postgresql/pg_squeeze/blob/REL1_9_4/NEWS)

`pg_squeeze` 可以在允许并发读写的同时清除表及其索引中的膨胀。它将存活元组复制到新存储，并通过逻辑解码应用并发变更，从而避免 `VACUUM FULL` 的长时间排他锁。只有在规划好复制槽、磁盘空间和表的副本标识后才应使用。

### 配置与安装

```conf
max_replication_slots = 1  # or add one to the existing requirement
shared_preload_libraries = 'pg_squeeze'
wal_level = logical       # required on PostgreSQL versions before 19
```

重启 PostgreSQL，然后创建扩展：

```sql
CREATE EXTENSION pg_squeeze;
```

表必须有标识索引。主键可配合默认副本标识使用；否则，请使用 `ALTER TABLE ... REPLICA IDENTITY USING INDEX` 选择合适的唯一索引。

### 执行临时压缩

```sql
SELECT squeeze.squeeze_table('public', 'pgbench_accounts');

SELECT squeeze.squeeze_table(
  'public',
  'large_table',
  'large_table_cluster_idx',
  'target_tablespace'
);
```

该函数会启动后台任务，并不具备普通 SQL 函数意义上的事务性。请监控操作，不要假定外围的 `ROLLBACK` 会取消它。

### 调度表并监控任务

```sql
INSERT INTO squeeze.tables (tabschema, tabname, schedule)
VALUES ('public', 'events', ('{30}', '{22}', NULL, NULL, '{3,5}'));

SELECT * FROM squeeze.get_active_workers();
SELECT * FROM squeeze.log ORDER BY finished DESC;
SELECT * FROM squeeze.errors;
```

调度元组依次包含分钟、小时、月中日期、月份和星期。注册还支持阈值与放置选项，例如 `free_space_extra`、`min_size`、`vacuum_max_age`、`max_retry`、`clustering_index`、关系/索引表空间，以及 `skip_analyze`。

如需自动启动：

```conf
squeeze.worker_autostart = 'my_database'
squeeze.worker_role = 'postgres'
```

### 版本 1.9.4 与运维注意事项

- 版本 1.9.4 修复了动态构造的 `ANALYZE`、日志和错误语句中的不安全引用问题，其中包括一条超级用户 SQL 注入路径。应尽快升级早期 1.9 版本。
- 全表压缩所需的空闲磁盘空间约为目标表及其索引总大小的两倍。
- 破坏性 DDL、`VACUUM FULL`、`CLUSTER` 或 `TRUNCATE` 可能使正在进行的压缩中止。请协调模式变更并审慎设置 `max_retry`。
- 与其他在线重写工具类似，`pg_squeeze` 会改变行可见性；对于持有旧快照的并发会话，它存在文档明确说明的 MVCC 注意事项。
- 在对包含该扩展的数据库执行 `pg_upgrade` 或转储/恢复之前，请先在新集群的 `shared_preload_libraries` 中配置 `pg_squeeze`。
- 当前 Pigsty 软件包覆盖 PostgreSQL 14-18。对于这些版本，请保持 `wal_level = logical`；上游针对 PostgreSQL 19 放宽的规则尚不适用于该软件包矩阵。

---
title: "pg_dirtyread"
linkTitle: "pg_dirtyread"
description: "从表中读取尚未垃圾回收的行"
weight: 5050
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/df7cb/pg_dirtyread">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">df7cb/pg_dirtyread</div>
    <div class="ext-card__desc">https://github.com/df7cb/pg_dirtyread</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_dirtyread-2.8.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_dirtyread-2.8.tar.gz</div>
    <div class="ext-card__desc">pg_dirtyread-2.8.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_dirtyread`**](/ext/e/pg_dirtyread) | `2.8` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5050  | [**`pg_dirtyread`**](/ext/e/pg_dirtyread) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_orphaned`](/ext/e/pg_orphaned) [`pg_surgery`](/ext/e/pg_surgery) [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) [`amcheck`](/ext/e/amcheck) [`pg_repack`](/ext/e/pg_repack) [`pg_squeeze`](/ext/e/pg_squeeze) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `2.8` | {{< pgvers "18,17,16,15,14" >}} | `pg_dirtyread` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.8` | {{< pgvers "18,17,16,15,14" >}} | `pg_dirtyread_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.8` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-dirtyread` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.8 2 | AVAIL PIGSTY 2.8 2 | AVAIL PIGSTY 2.8 2 | AVAIL PIGSTY 2.8 2 | AVAIL PIGSTY 2.8 2 |
| el8.aarch64 | AVAIL PIGSTY 2.8 2 | AVAIL PIGSTY 2.8 2 | AVAIL PIGSTY 2.8 2 | AVAIL PIGSTY 2.8 2 | AVAIL PIGSTY 2.8 2 |
| el9.x86_64 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 |
| el9.aarch64 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 |
| el10.x86_64 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 |
| el10.aarch64 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 | AVAIL PIGSTY 2.8 3 |
| d12.x86_64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| d12.aarch64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| d13.x86_64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| d13.aarch64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| u22.x86_64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| u22.aarch64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| u24.x86_64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| u24.aarch64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| u26.x86_64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
| u26.aarch64 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 | AVAIL PGDG 2.8 2 |
@ el8.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.8-1PIGSTY.el8.x86_64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dirtyread_18-2.8-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel8.x86_64.rpm pgdg 2.7 17.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_dirtyread_18-2.7-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.8-1PIGSTY.el8.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dirtyread_18-2.8-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel8.aarch64.rpm pgdg 2.7 16.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_dirtyread_18-2.7-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.8-1PIGSTY.el9.x86_64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dirtyread_18-2.8-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-6PGDG.rhel9.8.x86_64.rpm pgdg 2.7 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_dirtyread_18-2.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel9.x86_64.rpm pgdg 2.7 17.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_dirtyread_18-2.7-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.8-1PIGSTY.el9.aarch64.rpm pigsty 2.8 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dirtyread_18-2.8-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-6PGDG.rhel9.8.aarch64.rpm pgdg 2.7 16.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_dirtyread_18-2.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel9.aarch64.rpm pgdg 2.7 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_dirtyread_18-2.7-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.8-1PIGSTY.el10.x86_64.rpm pigsty 2.8 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dirtyread_18-2.8-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-6PGDG.rhel10.2.x86_64.rpm pgdg 2.7 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_dirtyread_18-2.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_dirtyread_18-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.8-1PIGSTY.el10.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dirtyread_18-2.8-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-6PGDG.rhel10.2.aarch64.rpm pgdg 2.7 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dirtyread_18-2.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dirtyread_18-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg12+1_amd64.deb pgdg 2.8 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg12+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg13+1_amd64.deb pgdg 2.8 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg13+1_arm64.deb pgdg 2.8 21.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg22.04+1_amd64.deb pgdg 2.8 22.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 22.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg22.04+1_arm64.deb pgdg 2.8 21.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 21.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg24.04+1_amd64.deb pgdg 2.8 21.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg24.04+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg26.04+1_amd64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg26.04+1_amd64.deb pgdg 2.7 21.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.8-1.pgdg26.04+1_arm64.deb pgdg 2.8 20.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.8-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg26.04+1_arm64.deb pgdg 2.7 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.8-1PIGSTY.el8.x86_64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dirtyread_17-2.8-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-2PGDG.rhel8.x86_64.rpm pgdg 2.7 16.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_dirtyread_17-2.7-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.8-1PIGSTY.el8.aarch64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dirtyread_17-2.8-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-2PGDG.rhel8.aarch64.rpm pgdg 2.7 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_dirtyread_17-2.7-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.8-1PIGSTY.el9.x86_64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dirtyread_17-2.8-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-6PGDG.rhel9.8.x86_64.rpm pgdg 2.7 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_dirtyread_17-2.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-2PGDG.rhel9.x86_64.rpm pgdg 2.7 17.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_dirtyread_17-2.7-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.8-1PIGSTY.el9.aarch64.rpm pigsty 2.8 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dirtyread_17-2.8-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-6PGDG.rhel9.8.aarch64.rpm pgdg 2.7 16.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_dirtyread_17-2.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-2PGDG.rhel9.aarch64.rpm pgdg 2.7 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_dirtyread_17-2.7-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.8-1PIGSTY.el10.x86_64.rpm pigsty 2.8 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dirtyread_17-2.8-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-6PGDG.rhel10.2.x86_64.rpm pgdg 2.7 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_dirtyread_17-2.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_dirtyread_17-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.8-1PIGSTY.el10.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dirtyread_17-2.8-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-6PGDG.rhel10.2.aarch64.rpm pgdg 2.7 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dirtyread_17-2.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dirtyread_17-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg12+1_amd64.deb pgdg 2.8 21.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg12+1_arm64.deb pgdg 2.8 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg13+1_amd64.deb pgdg 2.8 21.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg13+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg22.04+1_amd64.deb pgdg 2.8 26.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 26.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg22.04+1_arm64.deb pgdg 2.8 25.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 25.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg24.04+1_amd64.deb pgdg 2.8 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg24.04+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg26.04+1_amd64.deb pgdg 2.8 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg26.04+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.8-1.pgdg26.04+1_arm64.deb pgdg 2.8 20.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.8-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg26.04+1_arm64.deb pgdg 2.7 20.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.8-1PIGSTY.el8.x86_64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dirtyread_16-2.8-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 16.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_dirtyread_16-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.8-1PIGSTY.el8.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dirtyread_16-2.8-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_dirtyread_16-2.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.8-1PIGSTY.el9.x86_64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dirtyread_16-2.8-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-6PGDG.rhel9.8.x86_64.rpm pgdg 2.7 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_dirtyread_16-2.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 16.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_dirtyread_16-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.8-1PIGSTY.el9.aarch64.rpm pigsty 2.8 16.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dirtyread_16-2.8-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-6PGDG.rhel9.8.aarch64.rpm pgdg 2.7 16.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_dirtyread_16-2.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 16.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_dirtyread_16-2.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.8-1PIGSTY.el10.x86_64.rpm pigsty 2.8 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dirtyread_16-2.8-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-6PGDG.rhel10.2.x86_64.rpm pgdg 2.7 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_dirtyread_16-2.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_dirtyread_16-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.8-1PIGSTY.el10.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dirtyread_16-2.8-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-6PGDG.rhel10.2.aarch64.rpm pgdg 2.7 17.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dirtyread_16-2.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dirtyread_16-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg12+1_amd64.deb pgdg 2.8 21.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg12+1_arm64.deb pgdg 2.8 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg13+1_amd64.deb pgdg 2.8 21.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 21.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg13+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg22.04+1_amd64.deb pgdg 2.8 25.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 25.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg22.04+1_arm64.deb pgdg 2.8 24.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 24.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg24.04+1_amd64.deb pgdg 2.8 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg24.04+1_arm64.deb pgdg 2.8 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg26.04+1_amd64.deb pgdg 2.8 20.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg26.04+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.8-1.pgdg26.04+1_arm64.deb pgdg 2.8 20.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.8-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg26.04+1_arm64.deb pgdg 2.7 20.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.8-1PIGSTY.el8.x86_64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dirtyread_15-2.8-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 16.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_dirtyread_15-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.8-1PIGSTY.el8.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dirtyread_15-2.8-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_dirtyread_15-2.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.8-1PIGSTY.el9.x86_64.rpm pigsty 2.8 17.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dirtyread_15-2.8-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-6PGDG.rhel9.8.x86_64.rpm pgdg 2.7 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_dirtyread_15-2.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 17.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_dirtyread_15-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.8-1PIGSTY.el9.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dirtyread_15-2.8-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-6PGDG.rhel9.8.aarch64.rpm pgdg 2.7 17.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_dirtyread_15-2.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 16.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_dirtyread_15-2.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.8-1PIGSTY.el10.x86_64.rpm pigsty 2.8 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dirtyread_15-2.8-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-6PGDG.rhel10.2.x86_64.rpm pgdg 2.7 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_dirtyread_15-2.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_dirtyread_15-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.8-1PIGSTY.el10.aarch64.rpm pigsty 2.8 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dirtyread_15-2.8-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-6PGDG.rhel10.2.aarch64.rpm pgdg 2.7 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dirtyread_15-2.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dirtyread_15-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg12+1_amd64.deb pgdg 2.8 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg12+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg13+1_amd64.deb pgdg 2.8 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg13+1_arm64.deb pgdg 2.8 21.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg22.04+1_amd64.deb pgdg 2.8 25.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 25.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg22.04+1_arm64.deb pgdg 2.8 25.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 25.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg24.04+1_amd64.deb pgdg 2.8 21.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg24.04+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg26.04+1_amd64.deb pgdg 2.8 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg26.04+1_amd64.deb pgdg 2.7 21.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.8-1.pgdg26.04+1_arm64.deb pgdg 2.8 20.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.8-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg26.04+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.8-1PIGSTY.el8.x86_64.rpm pigsty 2.8 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_dirtyread_14-2.8-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 16.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_dirtyread_14-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.8-1PIGSTY.el8.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_dirtyread_14-2.8-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_dirtyread_14-2.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.8-1PIGSTY.el9.x86_64.rpm pigsty 2.8 17.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_dirtyread_14-2.8-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-6PGDG.rhel9.8.x86_64.rpm pgdg 2.7 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_dirtyread_14-2.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 17.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_dirtyread_14-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.8-1PIGSTY.el9.aarch64.rpm pigsty 2.8 17.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_dirtyread_14-2.8-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-6PGDG.rhel9.8.aarch64.rpm pgdg 2.7 17.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_dirtyread_14-2.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 16.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_dirtyread_14-2.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.8-1PIGSTY.el10.x86_64.rpm pigsty 2.8 17.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_dirtyread_14-2.8-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-6PGDG.rhel10.2.x86_64.rpm pgdg 2.7 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_dirtyread_14-2.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_dirtyread_14-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.8-1PIGSTY.el10.aarch64.rpm pigsty 2.8 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_dirtyread_14-2.8-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-6PGDG.rhel10.2.aarch64.rpm pgdg 2.7 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_dirtyread_14-2.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_dirtyread_14-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg12+1_amd64.deb pgdg 2.8 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 21.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg12+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg13+1_amd64.deb pgdg 2.8 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg13+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg22.04+1_amd64.deb pgdg 2.8 25.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 25.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg22.04+1_arm64.deb pgdg 2.8 25.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 25.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg24.04+1_amd64.deb pgdg 2.8 21.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg24.04+1_arm64.deb pgdg 2.8 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg26.04+1_amd64.deb pgdg 2.8 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg26.04+1_amd64.deb pgdg 2.7 21.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.8-1.pgdg26.04+1_arm64.deb pgdg 2.8 20.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.8-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg26.04+1_arm64.deb pgdg 2.7 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_dirtyread` 扩展的 RPM 包：

```bash
pig build pkg pg_dirtyread         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_dirtyread` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_dirtyread;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_dirtyread -v 18  # PG 18
pig ext install -y pg_dirtyread -v 17  # PG 17
pig ext install -y pg_dirtyread -v 16  # PG 16
pig ext install -y pg_dirtyread -v 15  # PG 15
pig ext install -y pg_dirtyread -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_dirtyread_18       # PG 18
dnf install -y pg_dirtyread_17       # PG 17
dnf install -y pg_dirtyread_16       # PG 16
dnf install -y pg_dirtyread_15       # PG 15
dnf install -y pg_dirtyread_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-dirtyread   # PG 18
apt install -y postgresql-17-dirtyread   # PG 17
apt install -y postgresql-16-dirtyread   # PG 16
apt install -y postgresql-15-dirtyread   # PG 15
apt install -y postgresql-14-dirtyread   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_dirtyread;
```




## 用法

来源：[upstream README](https://github.com/df7cb/pg_dirtyread)、[Debian changelog](https://github.com/df7cb/pg_dirtyread/blob/master/debian/changelog)、[tags](https://github.com/df7cb/pg_dirtyread/tags)。

`pg_dirtyread` 可以读取尚未被 vacuum 清理掉的死亡或已更新堆表行。该函数返回 `record`，因此每次调用都需要带一个表别名，用来声明希望返回的列。

### 基本用法

```sql
CREATE EXTENSION pg_dirtyread;

SELECT *
FROM pg_dirtyread('foo') AS t(bar bigint, baz text);
```

列按名称匹配，因此别名可以省略部分列，也可以使用不同的列顺序。

### 示例

```sql
CREATE TABLE foo (bar bigint, baz text);
ALTER TABLE foo SET (autovacuum_enabled = false, toast.autovacuum_enabled = false);

INSERT INTO foo VALUES (1, 'Test'), (2, 'New Test');
DELETE FROM foo WHERE bar = 1;

SELECT * FROM pg_dirtyread('foo') AS t(bar bigint, baz text);
```

被删除的行在 vacuum 移除之前仍可能可见。

### 已删除的列

只要表还没有被 `VACUUM FULL` 或 `CLUSTER` 等操作重写，就可以取回已删除列的内容。使用 `dropped_N`，其中 `N` 是原始的 1 基列序号：

```sql
CREATE TABLE ab(a text, b text);
INSERT INTO ab VALUES ('Hello', 'World');
ALTER TABLE ab DROP COLUMN b;
DELETE FROM ab;

SELECT *
FROM pg_dirtyread('ab') AS ab(a text, dropped_2 text);
```

由于 PostgreSQL 会移除已删除列的原始类型元数据，这里只能执行有限的类型检查。

### 系统列

在别名中包含系统列即可取回它们。特殊的 `dead boolean` 列会报告确定已经死亡的行：

```sql
SELECT *
FROM pg_dirtyread('foo') AS t(
  tableoid oid,
  ctid tid,
  xmin xid,
  xmax xid,
  cmin cid,
  cmax cid,
  dead boolean,
  bar bigint,
  baz text
);
```

`dead` 列在恢复期间不可用，包括在备用服务器上。`oid` 系统列只在 PostgreSQL 11 及更早版本中可用。

### 注意事项

- Pigsty 将 `pg_dirtyread` 2.8 作为 PostgreSQL 14-18 的 RPM 打包；DEB 可用性来自 PGDG 的 `postgresql-$v-dirtyread`。
- 上游 2.8 是面向 PostgreSQL 19 默认 TOAST 压缩改为 `lz4` 的兼容性发布；没有记录新的面向用户 SQL 函数。
- `pg_dirtyread` 用于取证和恢复类检查。它绕过常规 MVCC 可见性预期，不应被用于应用读取。

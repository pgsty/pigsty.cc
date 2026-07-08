---
title: "toastinfo"
linkTitle: "toastinfo"
description: "显示TOAST字段的详细信息"
weight: 6530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/df7cb/toastinfo">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">df7cb/toastinfo</div>
    <div class="ext-card__desc">https://github.com/df7cb/toastinfo</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/toastinfo-1.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">toastinfo-1.7.tar.gz</div>
    <div class="ext-card__desc">toastinfo-1.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`toastinfo`**](/ext/e/toastinfo) | `1.7` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6530  | [**`toastinfo`**](/ext/e/toastinfo) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) [`pgstattuple`](/ext/e/pgstattuple) [`amcheck`](/ext/e/amcheck) [`pg_relusage`](/ext/e/pg_relusage) [`pg_buffercache`](/ext/e/pg_buffercache) [`pg_freespacemap`](/ext/e/pg_freespacemap) [`pg_repack`](/ext/e/pg_repack) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `toastinfo` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `toastinfo_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-toastinfo` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el8.aarch64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el9.x86_64 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 |
| el9.aarch64 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 |
| el10.x86_64 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 |
| el10.aarch64 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 4 | AVAIL PIGSTY 1.7 3 |
| d12.x86_64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| d12.aarch64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| d13.x86_64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| d13.aarch64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| u22.x86_64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| u22.aarch64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| u24.x86_64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| u24.aarch64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| u26.x86_64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
| u26.aarch64 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 | AVAIL PGDG 1.7 3 |
@ el8.x86_64 18 toastinfo_18 toastinfo_18-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_18-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/toastinfo_18-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 toastinfo_18 toastinfo_18-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_18-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/toastinfo_18-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 toastinfo_18 toastinfo_18-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_18-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/toastinfo_18-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/toastinfo_18-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel9.6.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/toastinfo_18-1.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 toastinfo_18 toastinfo_18-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_18-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/toastinfo_18-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/toastinfo_18-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel9.6.aarch64.rpm pgdg 1.6 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/toastinfo_18-1.6-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 toastinfo_18 toastinfo_18-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_18-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/toastinfo_18-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/toastinfo_18-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel10.0.x86_64.rpm pgdg 1.6 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/toastinfo_18-1.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 toastinfo_18 toastinfo_18-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 13.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_18-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/toastinfo_18-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/toastinfo_18-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 toastinfo_18 toastinfo_18-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/toastinfo_18-1.6-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg12+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg12+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg12+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg12+1_arm64.deb pgdg 1.6 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg13+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg13+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg13+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg13+1_arm64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg22.04+1_amd64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg22.04+1_amd64.deb pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg22.04+1_arm64.deb pgdg 1.7 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg22.04+1_arm64.deb pgdg 1.6 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg24.04+1_amd64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg24.04+1_amd64.deb pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg24.04+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg24.04+1_arm64.deb pgdg 1.6 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg26.04+1_amd64.deb pgdg 1.7 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg26.04+1_amd64.deb pgdg 1.6 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.7-1.pgdg26.04+1_arm64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.6-1.pgdg26.04+1_arm64.deb pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-toastinfo postgresql-18-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-18-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 toastinfo_17 toastinfo_17-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_17-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/toastinfo_17-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 toastinfo_17 toastinfo_17-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_17-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/toastinfo_17-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 toastinfo_17 toastinfo_17-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_17-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/toastinfo_17-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/toastinfo_17-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel9.6.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/toastinfo_17-1.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 17 toastinfo_17 toastinfo_17-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_17-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/toastinfo_17-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/toastinfo_17-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel9.6.aarch64.rpm pgdg 1.6 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/toastinfo_17-1.6-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 17 toastinfo_17 toastinfo_17-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_17-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/toastinfo_17-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/toastinfo_17-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel10.0.x86_64.rpm pgdg 1.6 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/toastinfo_17-1.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 toastinfo_17 toastinfo_17-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 13.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_17-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/toastinfo_17-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/toastinfo_17-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 toastinfo_17 toastinfo_17-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/toastinfo_17-1.6-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg12+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg12+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg12+1_arm64.deb pgdg 1.7 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg12+1_arm64.deb pgdg 1.6 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg13+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg13+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg13+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg13+1_arm64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg22.04+1_amd64.deb pgdg 1.7 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg22.04+1_amd64.deb pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg22.04+1_arm64.deb pgdg 1.7 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg22.04+1_arm64.deb pgdg 1.6 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg24.04+1_amd64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg24.04+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg24.04+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg24.04+1_arm64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg26.04+1_amd64.deb pgdg 1.7 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg26.04+1_amd64.deb pgdg 1.6 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.7-1.pgdg26.04+1_arm64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.6-1.pgdg26.04+1_arm64.deb pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-toastinfo postgresql-17-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-17-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 toastinfo_16 toastinfo_16-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_16-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/toastinfo_16-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 toastinfo_16 toastinfo_16-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_16-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/toastinfo_16-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 toastinfo_16 toastinfo_16-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_16-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/toastinfo_16-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/toastinfo_16-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel9.6.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/toastinfo_16-1.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 16 toastinfo_16 toastinfo_16-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_16-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/toastinfo_16-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/toastinfo_16-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel9.6.aarch64.rpm pgdg 1.6 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/toastinfo_16-1.6-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 16 toastinfo_16 toastinfo_16-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_16-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/toastinfo_16-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/toastinfo_16-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel10.0.x86_64.rpm pgdg 1.6 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/toastinfo_16-1.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 toastinfo_16 toastinfo_16-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 13.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_16-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/toastinfo_16-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/toastinfo_16-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 toastinfo_16 toastinfo_16-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/toastinfo_16-1.6-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg12+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg12+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg12+1_arm64.deb pgdg 1.7 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg12+1_arm64.deb pgdg 1.6 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg13+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg13+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg13+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg13+1_arm64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg22.04+1_amd64.deb pgdg 1.7 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg22.04+1_amd64.deb pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg22.04+1_arm64.deb pgdg 1.7 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg22.04+1_arm64.deb pgdg 1.6 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg24.04+1_amd64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg24.04+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg24.04+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg24.04+1_arm64.deb pgdg 1.6 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg26.04+1_amd64.deb pgdg 1.7 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg26.04+1_amd64.deb pgdg 1.6 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.7-1.pgdg26.04+1_arm64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.6-1.pgdg26.04+1_arm64.deb pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-toastinfo postgresql-16-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-16-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 toastinfo_15 toastinfo_15-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_15-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/toastinfo_15-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 15 toastinfo_15 toastinfo_15-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_15-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/toastinfo_15-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 toastinfo_15 toastinfo_15-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_15-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/toastinfo_15-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/toastinfo_15-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel9.6.x86_64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/toastinfo_15-1.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 15 toastinfo_15 toastinfo_15-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_15-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/toastinfo_15-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/toastinfo_15-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel9.6.aarch64.rpm pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/toastinfo_15-1.6-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 15 toastinfo_15 toastinfo_15-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 13.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_15-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/toastinfo_15-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/toastinfo_15-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel10.0.x86_64.rpm pgdg 1.6 13.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/toastinfo_15-1.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 15 toastinfo_15 toastinfo_15-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_15-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/toastinfo_15-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/toastinfo_15-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 toastinfo_15 toastinfo_15-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/toastinfo_15-1.6-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg12+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg12+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg12+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg12+1_arm64.deb pgdg 1.6 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg13+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg13+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg13+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg13+1_arm64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg22.04+1_amd64.deb pgdg 1.7 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg22.04+1_amd64.deb pgdg 1.6 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg22.04+1_arm64.deb pgdg 1.7 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg22.04+1_arm64.deb pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg24.04+1_amd64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg24.04+1_amd64.deb pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg24.04+1_arm64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg24.04+1_arm64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg26.04+1_amd64.deb pgdg 1.7 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg26.04+1_amd64.deb pgdg 1.6 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.7-1.pgdg26.04+1_arm64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.6-1.pgdg26.04+1_arm64.deb pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-toastinfo postgresql-15-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-15-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 toastinfo_14 toastinfo_14-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/toastinfo_14-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 13.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/toastinfo_14-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 14 toastinfo_14 toastinfo_14-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 13.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/toastinfo_14-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/toastinfo_14-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 14 toastinfo_14 toastinfo_14-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/toastinfo_14-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/toastinfo_14-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel9.7.x86_64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/toastinfo_14-1.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel9.6.x86_64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/toastinfo_14-1.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 14 toastinfo_14 toastinfo_14-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 13.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/toastinfo_14-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/toastinfo_14-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel9.7.aarch64.rpm pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/toastinfo_14-1.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel9.6.aarch64.rpm pgdg 1.6 12.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/toastinfo_14-1.6-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 14 toastinfo_14 toastinfo_14-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 13.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/toastinfo_14-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/toastinfo_14-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel10.1.x86_64.rpm pgdg 1.6 13.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/toastinfo_14-1.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel10.0.x86_64.rpm pgdg 1.6 13.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/toastinfo_14-1.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 14 toastinfo_14 toastinfo_14-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 13.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/toastinfo_14-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/toastinfo_14-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 toastinfo_14 toastinfo_14-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 13.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/toastinfo_14-1.6-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg12+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg12+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg12+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg12+1_arm64.deb pgdg 1.7 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg12+1_arm64.deb pgdg 1.6 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg12+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg13+1_amd64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg13+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg13+1_amd64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg13+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg13+1_arm64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg13+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg22.04+1_amd64.deb pgdg 1.7 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg22.04+1_amd64.deb pgdg 1.6 13.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg22.04+1_amd64.deb pgdg 1.5 13.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg22.04+1_arm64.deb pgdg 1.7 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg22.04+1_arm64.deb pgdg 1.6 13.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg22.04+1_arm64.deb pgdg 1.5 12.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg24.04+1_amd64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg24.04+1_amd64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg24.04+1_amd64.deb pgdg 1.5 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg24.04+1_arm64.deb pgdg 1.7 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg24.04+1_arm64.deb pgdg 1.6 12.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg24.04+1_arm64.deb pgdg 1.5 12.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg26.04+1_amd64.deb pgdg 1.7 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg26.04+1_amd64.deb pgdg 1.6 12.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg26.04+1_amd64.deb pgdg 1.5 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.7-1.pgdg26.04+1_arm64.deb pgdg 1.7 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.6-1.pgdg26.04+1_arm64.deb pgdg 1.6 12.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.6-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-toastinfo postgresql-14-toastinfo_1.5-3.pgdg26.04+1_arm64.deb pgdg 1.5 13.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/t/toastinfo/postgresql-14-toastinfo_1.5-3.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `toastinfo` 扩展的 RPM 包：

```bash
pig build pkg toastinfo         # 构建 RPM 包
```


## 安装

您可以直接安装 `toastinfo` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install toastinfo;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y toastinfo -v 18  # PG 18
pig ext install -y toastinfo -v 17  # PG 17
pig ext install -y toastinfo -v 16  # PG 16
pig ext install -y toastinfo -v 15  # PG 15
pig ext install -y toastinfo -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y toastinfo_18       # PG 18
dnf install -y toastinfo_17       # PG 17
dnf install -y toastinfo_16       # PG 16
dnf install -y toastinfo_15       # PG 15
dnf install -y toastinfo_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-toastinfo   # PG 18
apt install -y postgresql-17-toastinfo   # PG 17
apt install -y postgresql-16-toastinfo   # PG 16
apt install -y postgresql-15-toastinfo   # PG 15
apt install -y postgresql-14-toastinfo   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION toastinfo;
```




## 用法

来源：[upstream README](https://github.com/credativ/toastinfo)、[upstream tags](https://github.com/credativ/toastinfo/tags)、[PGDG package metadata via local `db/extension.csv`](../db/extension.csv)。

`toastinfo` 暴露 PostgreSQL 存储变长值（`varlena`）的方式，包括行内、压缩和行外 TOAST 存储形式。

### 函数

`pg_toastinfo(anyelement)` 描述一个 datum 的存储形式：

```sql
CREATE EXTENSION toastinfo;

SELECT a, length(b), pg_column_size(b), pg_toastinfo(b), pg_toastpointer(b)
FROM t;
```

可能的存储形式包括：

- `null`，表示 NULL 值。
- `ordinary`，表示非 varlena 数据类型。
- `short inline varlena`，最多 126 字节，使用 1 字节头。
- `long inline varlena, uncompressed`，最多 1 GiB，使用 4 字节头。
- `long inline varlena, compressed (pglz|lz4)`。
- `toasted varlena, uncompressed`。
- `toasted varlena, compressed (pglz|lz4)`。

在 PostgreSQL 14+ 上，压缩 varlena 会显示压缩方法。

`pg_toastpointer(anyelement)` 返回行外 toasted 值在 TOAST 表中的 `chunk_id` OID；对于非 toasted 输入返回 NULL：

```sql
SELECT pg_toastpointer(large_column)
FROM my_table;
```

### 存储示例

```sql
CREATE TABLE t (a text, b text);

ALTER TABLE t ALTER COLUMN b SET STORAGE EXTERNAL;
INSERT INTO t VALUES ('external-10000', repeat('x', 10000));

ALTER TABLE t ALTER COLUMN b SET STORAGE EXTENDED;
INSERT INTO t VALUES ('extended-1000000', repeat('x', 1000000));

ALTER TABLE t ALTER COLUMN b SET COMPRESSION lz4;
INSERT INTO t VALUES ('extended-lz4', repeat('x', 1000000));

SELECT a, pg_column_size(b), pg_toastinfo(b), pg_toastpointer(b)
FROM t;
```

### 注意事项

- Pigsty 元数据记录 `toastinfo` 1.6 覆盖 PostgreSQL 14-18，并同时有 Pigsty RPM 和 PGDG DEB。
- 上游 GitHub README 记录的是相同 SQL 表面；但评审时公开 GitHub tags 只可见到 `v1.5`，在该仓库中没有找到上游 1.6 changelog。
- `pg_toastpointer` 只对行外 toasted 数据有意义；普通、行内或 NULL 值都会返回 NULL。

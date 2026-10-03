---
title: "plr"
linkTitle: "plr"
description: "从数据库中加载R语言解释器并执行R脚本"
weight: 3100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgres-plr/plr">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgres-plr/plr</div>
    <div class="ext-card__desc">https://github.com/postgres-plr/plr</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plr`**](/ext/e/plr) | `8.4.8.7` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3100  | [**`plr`**](/ext/e/plr) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plxslt`](/ext/e/plxslt) [`pltcl`](/ext/e/pltcl) [`plperl`](/ext/e/plperl) [`pljava`](/ext/e/pljava) [`plsh`](/ext/e/plsh) [`plpython3u`](/ext/e/plpython3u) [`plpgsql`](/ext/e/plpgsql) [`plperlu`](/ext/e/plperlu) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `8.4.8.7` | {{< pgvers "18,17,16,15,14" >}} | `plr` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `8.4.8.6` | {{< pgvers "18,17,16,15,14" >}} | `plr_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `8.4.8.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plr` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 8.4.8.6 3 | AVAIL PGDG 8.4.8.6 4 | AVAIL PGDG 8.4.8.6 5 | AVAIL PGDG 8.4.8.6 6 | AVAIL PGDG 8.4.8.6 7 |
| el8.aarch64 | AVAIL PGDG 8.4.8.6 3 | AVAIL PGDG 8.4.8.6 4 | AVAIL PGDG 8.4.8.6 5 | AVAIL PGDG 8.4.8.6 5 | AVAIL PGDG 8.4.8.6 5 |
| el9.x86_64 | AVAIL PGDG 8.4.8.6 6 | AVAIL PGDG 8.4.8.6 7 | AVAIL PGDG 8.4.8.6 10 | AVAIL PGDG 8.4.8.6 9 | AVAIL PGDG 8.4.8.6 9 |
| el9.aarch64 | AVAIL PGDG 8.4.8.6 6 | AVAIL PGDG 8.4.8.6 7 | AVAIL PGDG 8.4.8.6 8 | AVAIL PGDG 8.4.8.6 8 | AVAIL PGDG 8.4.8.6 8 |
| el10.x86_64 | AVAIL PGDG 8.4.8.6 5 | AVAIL PGDG 8.4.8.6 5 | AVAIL PGDG 8.4.8.6 5 | AVAIL PGDG 8.4.8.6 5 | AVAIL PGDG 8.4.8.6 5 |
| el10.aarch64 | AVAIL PGDG 8.4.8.6 6 | AVAIL PGDG 8.4.8.6 6 | AVAIL PGDG 8.4.8.6 6 | AVAIL PGDG 8.4.8.6 6 | AVAIL PGDG 8.4.8.6 6 |
| d12.x86_64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| d12.aarch64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| d13.x86_64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| d13.aarch64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| u22.x86_64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| u22.aarch64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| u24.x86_64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| u24.aarch64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| u26.x86_64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
| u26.aarch64 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 | AVAIL PGDG 8.4.8.7 3 |
@ el8.x86_64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.6 77.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plr_18-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.4 77.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plr_18-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 plr_18 plr_18-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/plr_18-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.6 75.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plr_18-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.4 75.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plr_18-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 plr_18 plr_18-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/plr_18-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm pgdg 8.4.8.6 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plr_18-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.6 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plr_18-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.6 75.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plr_18-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.4 75.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plr_18-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.4 75.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plr_18-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 plr_18 plr_18-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 73.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/plr_18-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm pgdg 8.4.8.6 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plr_18-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.6 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plr_18-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.6 73.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plr_18-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.4 73.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plr_18-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.4 73.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plr_18-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 plr_18 plr_18-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/plr_18-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm pgdg 8.4.8.6 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plr_18-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.6 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plr_18-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.6 77.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plr_18-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.4 76.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plr_18-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.4 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/plr_18-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm pgdg 8.4.8.6 74.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plr_18-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.6 74.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plr_18-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plr_18 plr_18-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.6 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plr_18-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.4 74.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plr_18-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 plr_18 plr_18-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.4 74.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plr_18-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 plr_18 plr_18-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/plr_18-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg12+2_amd64.deb pgdg 8.4.8.7 135.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg12+2_amd64.deb
@ d12.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg12+1_amd64.deb pgdg 8.4.8.7 135.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg12+1_amd64.deb pgdg 8.4.8.6 135.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg12+2_arm64.deb pgdg 8.4.8.7 132.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg12+2_arm64.deb
@ d12.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg12+1_arm64.deb pgdg 8.4.8.7 132.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg12+1_arm64.deb pgdg 8.4.8.6 132.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg13+2_amd64.deb pgdg 8.4.8.7 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg13+1_amd64.deb pgdg 8.4.8.7 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg13+1_amd64.deb pgdg 8.4.8.6 136.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg13+2_arm64.deb pgdg 8.4.8.7 132.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg13+1_arm64.deb pgdg 8.4.8.7 132.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg13+1_arm64.deb pgdg 8.4.8.6 132.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb pgdg 8.4.8.7 131.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.7 131.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.6 131.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb pgdg 8.4.8.7 128.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.7 128.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.6 128.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb pgdg 8.4.8.7 127.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.7 127.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.6 127.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb pgdg 8.4.8.7 123.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.7 123.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.6 123.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb pgdg 8.4.8.7 125.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.7 125.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.6 125.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb pgdg 8.4.8.7 122.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.7 122.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.6 122.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.6 77.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plr_17-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.4 77.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plr_17-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 plr_17 plr_17-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plr_17-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plr_17 plr_17-8.4.7-1PGDG.rhel8.x86_64.rpm pgdg 8.4.7 75.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/plr_17-8.4.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.6 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plr_17-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.4 75.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plr_17-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 plr_17 plr_17-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plr_17-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plr_17 plr_17-8.4.7-1PGDG.rhel8.aarch64.rpm pgdg 8.4.7 73.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/plr_17-8.4.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm pgdg 8.4.8.6 75.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.6 75.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.6 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.4 74.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.4 75.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.7-1PGDG.rhel9.x86_64.rpm pgdg 8.4.7 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm pgdg 8.4.8.6 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.6 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.6 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.4 73.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.4 73.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.7-1PGDG.rhel9.aarch64.rpm pgdg 8.4.7 72.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm pgdg 8.4.8.6 76.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plr_17-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.6 76.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plr_17-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.6 77.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plr_17-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.4 76.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plr_17-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.4 76.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/plr_17-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm pgdg 8.4.8.6 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plr_17-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.6 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plr_17-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plr_17 plr_17-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.6 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plr_17-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.4 74.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plr_17-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 plr_17 plr_17-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.4 74.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plr_17-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 plr_17 plr_17-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 73.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/plr_17-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg12+2_amd64.deb pgdg 8.4.8.7 136.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg12+2_amd64.deb
@ d12.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg12+1_amd64.deb pgdg 8.4.8.7 135.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg12+1_amd64.deb pgdg 8.4.8.6 135.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg12+2_arm64.deb pgdg 8.4.8.7 132.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg12+2_arm64.deb
@ d12.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg12+1_arm64.deb pgdg 8.4.8.7 132.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg12+1_arm64.deb pgdg 8.4.8.6 132.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg13+2_amd64.deb pgdg 8.4.8.7 136.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg13+2_amd64.deb
@ d13.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg13+1_amd64.deb pgdg 8.4.8.7 136.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg13+1_amd64.deb pgdg 8.4.8.6 136.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg13+2_arm64.deb pgdg 8.4.8.7 132.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg13+2_arm64.deb
@ d13.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg13+1_arm64.deb pgdg 8.4.8.7 132.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg13+1_arm64.deb pgdg 8.4.8.6 132.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb pgdg 8.4.8.7 155.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.7 155.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.6 155.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb pgdg 8.4.8.7 152.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.7 152.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.6 152.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb pgdg 8.4.8.7 127.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.7 127.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.6 127.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb pgdg 8.4.8.7 123.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.7 123.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.6 123.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb pgdg 8.4.8.7 125.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.7 125.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.6 125.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb pgdg 8.4.8.7 122.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.7 122.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.6 122.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.6 77.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plr_16-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.4 77.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plr_16-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 plr_16 plr_16-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plr_16-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plr_16 plr_16-8.4.7-1PGDG.rhel8.x86_64.rpm pgdg 8.4.7 75.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plr_16-8.4.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plr_16 plr_16-8.4.6-1PGDG.rhel8.x86_64.rpm pgdg 8.4.6 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/plr_16-8.4.6-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.6 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plr_16-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.4 75.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plr_16-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 plr_16 plr_16-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plr_16-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plr_16 plr_16-8.4.7-1PGDG.rhel8.aarch64.rpm pgdg 8.4.7 73.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plr_16-8.4.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plr_16 plr_16-8.4.6-1PGDG.rhel8.aarch64.rpm pgdg 8.4.6 72.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/plr_16-8.4.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm pgdg 8.4.8.6 75.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.6 75.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.6 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.4 74.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.4 75.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.7-1PGDG.rhel9.x86_64.rpm pgdg 8.4.7 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm pgdg 8.4.8.6 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.6 73.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.6 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.4 73.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.4 73.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.7-1PGDG.rhel9.aarch64.rpm pgdg 8.4.7 72.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.6-1PGDG.rhel9.aarch64.rpm pgdg 8.4.6 71.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm pgdg 8.4.8.6 76.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plr_16-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.6 76.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plr_16-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.6 77.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plr_16-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.4 76.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plr_16-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.4 76.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/plr_16-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm pgdg 8.4.8.6 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plr_16-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.6 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plr_16-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plr_16 plr_16-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.6 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plr_16-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.4 74.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plr_16-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 plr_16 plr_16-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.4 74.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plr_16-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 plr_16 plr_16-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 73.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/plr_16-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg12+2_amd64.deb pgdg 8.4.8.7 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg12+2_amd64.deb
@ d12.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg12+1_amd64.deb pgdg 8.4.8.7 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg12+1_amd64.deb pgdg 8.4.8.6 136.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg12+2_arm64.deb pgdg 8.4.8.7 132.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg12+2_arm64.deb
@ d12.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg12+1_arm64.deb pgdg 8.4.8.7 132.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg12+1_arm64.deb pgdg 8.4.8.6 132.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg13+2_amd64.deb pgdg 8.4.8.7 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg13+2_amd64.deb
@ d13.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg13+1_amd64.deb pgdg 8.4.8.7 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg13+1_amd64.deb pgdg 8.4.8.6 136.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg13+2_arm64.deb pgdg 8.4.8.7 132.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg13+2_arm64.deb
@ d13.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg13+1_arm64.deb pgdg 8.4.8.7 132.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg13+1_arm64.deb pgdg 8.4.8.6 132.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb pgdg 8.4.8.7 151.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.7 151.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.6 151.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb pgdg 8.4.8.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.6 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb pgdg 8.4.8.7 127.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.7 127.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.6 127.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb pgdg 8.4.8.7 123.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.7 123.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.6 123.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb pgdg 8.4.8.7 125.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.7 125.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.6 125.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb pgdg 8.4.8.7 122.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.7 122.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.6 122.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.6 78.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.4 77.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 plr_15 plr_15-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plr_15 plr_15-8.4.7-1PGDG.rhel8.x86_64.rpm pgdg 8.4.7 76.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plr_15 plr_15-8.4.6-1PGDG.rhel8.x86_64.rpm pgdg 8.4.6 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plr_15 plr_15-8.4.5-1.rhel8.x86_64.rpm pgdg 8.4.5 167.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.5-1.rhel8.x86_64.rpm
@ el8.aarch64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.6 75.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plr_15-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.4 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plr_15-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 plr_15 plr_15-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plr_15-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plr_15 plr_15-8.4.7-1PGDG.rhel8.aarch64.rpm pgdg 8.4.7 73.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plr_15-8.4.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plr_15 plr_15-8.4.6-1PGDG.rhel8.aarch64.rpm pgdg 8.4.6 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/plr_15-8.4.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm pgdg 8.4.8.6 76.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.6 76.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.6 76.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.4 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.4 75.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 74.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.7-1PGDG.rhel9.x86_64.rpm pgdg 8.4.7 74.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.5-1.rhel9.x86_64.rpm pgdg 8.4.5 167.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.5-1.rhel9.x86_64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm pgdg 8.4.8.6 74.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.6 74.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.6 74.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.4 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.4 73.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.7-1PGDG.rhel9.aarch64.rpm pgdg 8.4.7 72.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.6-1PGDG.rhel9.aarch64.rpm pgdg 8.4.6 71.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm pgdg 8.4.8.6 77.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plr_15-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.6 77.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plr_15-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.6 77.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plr_15-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.4 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plr_15-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.4 77.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/plr_15-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm pgdg 8.4.8.6 75.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plr_15-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.6 75.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plr_15-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plr_15 plr_15-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.6 75.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plr_15-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.4 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plr_15-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 plr_15 plr_15-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.4 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plr_15-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 plr_15 plr_15-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/plr_15-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg12+2_amd64.deb pgdg 8.4.8.7 136.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg12+2_amd64.deb
@ d12.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg12+1_amd64.deb pgdg 8.4.8.7 136.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg12+1_amd64.deb pgdg 8.4.8.6 136.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg12+2_arm64.deb pgdg 8.4.8.7 132.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg12+2_arm64.deb
@ d12.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg12+1_arm64.deb pgdg 8.4.8.7 132.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg12+1_arm64.deb pgdg 8.4.8.6 132.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg13+2_amd64.deb pgdg 8.4.8.7 136.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg13+2_amd64.deb
@ d13.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg13+1_amd64.deb pgdg 8.4.8.7 136.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg13+1_amd64.deb pgdg 8.4.8.6 136.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg13+2_arm64.deb pgdg 8.4.8.7 132.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg13+2_arm64.deb
@ d13.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg13+1_arm64.deb pgdg 8.4.8.7 132.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg13+1_arm64.deb pgdg 8.4.8.6 132.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb pgdg 8.4.8.7 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.7 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.6 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb pgdg 8.4.8.7 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.6 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb pgdg 8.4.8.7 127.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.7 127.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.6 127.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb pgdg 8.4.8.7 123.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.7 123.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.6 123.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb pgdg 8.4.8.7 125.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.7 125.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.6 125.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb pgdg 8.4.8.7 122.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.7 122.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.6 122.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.6 78.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.8.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm pgdg 8.4.8.4 77.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.8.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.7-1PGDG.rhel8.x86_64.rpm pgdg 8.4.7 76.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.6-1PGDG.rhel8.x86_64.rpm pgdg 8.4.6 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.5-1.rhel8.x86_64.rpm pgdg 8.4.5 166.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.3-1.rhel8.x86_64.rpm pgdg 8.4.3 166.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.3-1.rhel8.x86_64.rpm
@ el8.aarch64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.6 75.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plr_14-8.4.8.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm pgdg 8.4.8.4 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plr_14-8.4.8.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 plr_14 plr_14-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plr_14-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plr_14 plr_14-8.4.7-1PGDG.rhel8.aarch64.rpm pgdg 8.4.7 73.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plr_14-8.4.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plr_14 plr_14-8.4.6-1PGDG.rhel8.aarch64.rpm pgdg 8.4.6 73.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/plr_14-8.4.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm pgdg 8.4.8.6 75.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.8.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.6 75.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.8.6-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.6 76.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.8.6-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm pgdg 8.4.8.4 75.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.8.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm pgdg 8.4.8.4 75.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.8.4-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 74.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.7-1PGDG.rhel9.x86_64.rpm pgdg 8.4.7 74.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 73.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.5-1.rhel9.x86_64.rpm pgdg 8.4.5 167.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.5-1.rhel9.x86_64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm pgdg 8.4.8.6 74.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.8.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.6 74.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.8.6-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.6 74.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.8.6-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm pgdg 8.4.8.4 73.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.8.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm pgdg 8.4.8.4 73.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.8.4-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.7-1PGDG.rhel9.aarch64.rpm pgdg 8.4.7 72.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.6-1PGDG.rhel9.aarch64.rpm pgdg 8.4.6 71.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm pgdg 8.4.8.6 77.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plr_14-8.4.8.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.6 77.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plr_14-8.4.8.6-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.6 77.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plr_14-8.4.8.6-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm pgdg 8.4.8.4 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plr_14-8.4.8.4-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm pgdg 8.4.8.4 77.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/plr_14-8.4.8.4-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm pgdg 8.4.8.6 75.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plr_14-8.4.8.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.6 75.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plr_14-8.4.8.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 plr_14 plr_14-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.6 75.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plr_14-8.4.8.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm pgdg 8.4.8.4 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plr_14-8.4.8.4-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 plr_14 plr_14-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm pgdg 8.4.8.4 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plr_14-8.4.8.4-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 plr_14 plr_14-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/plr_14-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg12+2_amd64.deb pgdg 8.4.8.7 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg12+2_amd64.deb
@ d12.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg12+1_amd64.deb pgdg 8.4.8.7 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg12+1_amd64.deb pgdg 8.4.8.6 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg12+2_arm64.deb pgdg 8.4.8.7 132.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg12+2_arm64.deb
@ d12.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg12+1_arm64.deb pgdg 8.4.8.7 132.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg12+1_arm64.deb pgdg 8.4.8.6 132.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg13+2_amd64.deb pgdg 8.4.8.7 136.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg13+2_amd64.deb
@ d13.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg13+1_amd64.deb pgdg 8.4.8.7 136.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg13+1_amd64.deb pgdg 8.4.8.6 136.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg13+2_arm64.deb pgdg 8.4.8.7 132.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg13+2_arm64.deb
@ d13.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg13+1_arm64.deb pgdg 8.4.8.7 132.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg13+1_arm64.deb pgdg 8.4.8.6 132.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb pgdg 8.4.8.7 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.7 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.6 151.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb pgdg 8.4.8.7 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.7 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.6 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb pgdg 8.4.8.7 127.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.7 127.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.6 127.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb pgdg 8.4.8.7 123.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.7 123.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.6 123.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb pgdg 8.4.8.7 125.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.7 125.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb pgdg 8.4.8.6 125.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb pgdg 8.4.8.7 122.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.7 122.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.7-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb pgdg 8.4.8.6 122.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.6-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `plr` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install plr;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y plr -v 18  # PG 18
pig ext install -y plr -v 17  # PG 17
pig ext install -y plr -v 16  # PG 16
pig ext install -y plr -v 15  # PG 15
pig ext install -y plr -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y plr_18       # PG 18
dnf install -y plr_17       # PG 17
dnf install -y plr_16       # PG 16
dnf install -y plr_15       # PG 15
dnf install -y plr_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-plr   # PG 18
apt install -y postgresql-17-plr   # PG 17
apt install -y postgresql-16-plr   # PG 16
apt install -y postgresql-15-plr   # PG 15
apt install -y postgresql-14-plr   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION plr;
```

## 用法

来源：

- [8.4.8.7 README](https://github.com/postgres-plr/plr/blob/REL8_4_8_7/README.md)
- [Versioned user guide](https://github.com/postgres-plr/plr/blob/REL8_4_8_7/userguide.md)
- [Control file](https://github.com/postgres-plr/plr/blob/REL8_4_8_7/plr.control)
- [Version 8.4.8.7 SQL](https://github.com/postgres-plr/plr/blob/REL8_4_8_7/plr--8.4.8.7.sql)

`plr` 允许在 PostgreSQL 中使用 R 编程语言编写函数，提供对 R 统计和数据分析功能的完整访问。

```sql
CREATE EXTENSION plr;
```

### 创建函数

```sql
CREATE OR REPLACE FUNCTION r_max(integer, integer) RETURNS integer AS '
if (arg1 > arg2)
  return(arg1)
else
  return(arg2)
' LANGUAGE plr STRICT;

SELECT r_max(10, 20);  -- 20
```

使用命名参数：

```sql
CREATE OR REPLACE FUNCTION sd(vals float8[]) RETURNS float AS '
sd(vals)
' LANGUAGE plr STRICT;

SELECT sd(ARRAY[1.0, 2.0, 3.0, 4.0, 5.0]);
```

### 参数处理

- 未命名参数以 `arg1`、`arg2` 等形式访问；显式命名的参数会替换对应的 `argN` 变量。
- SQL 标量 NULL 转为 R NULL，数组内的空元素转为 R `NA`。`STRICT` 函数会跳过整个参数为 NULL 的调用，但不会跳过包含空元素的数组。
- 复合类型（行）以 R data.frame 形式传递
- 一维数组转为 R 向量，二维数组转为矩阵，三维数组转为 R 数组；不支持更高维数。

```sql
CREATE OR REPLACE FUNCTION r_max(integer, integer) RETURNS integer AS '
if (is.null(arg1) && is.null(arg2))
  return(NULL)
if (is.null(arg1))
  return(arg2)
if (is.null(arg2))
  return(arg1)
if (arg1 > arg2)
  return(arg1)
return(arg2)
' LANGUAGE plr;
```

### 通过 SPI 访问数据库

```sql
CREATE OR REPLACE FUNCTION test_spi(text) RETURNS SETOF record AS '
pg.spi.exec(arg1)
' LANGUAGE plr;

SELECT * FROM test_spi('SELECT oid, typname FROM pg_type LIMIT 5')
  AS t(oid oid, typname name);
```

调用准备参数化查询的函数之前，应在同一连接中初始化类型 OID 变量：

```sql
SELECT load_r_typenames();

CREATE OR REPLACE FUNCTION lookup_type(type_name text)
RETURNS SETOF record AS $$
sp <- pg.spi.prepare(
  'SELECT oid, typname FROM pg_type WHERE typname = $1',
  c(NAMEOID)
)
pg.spi.execp(sp, list(type_name))
$$ LANGUAGE plr;

SELECT * FROM lookup_type('text') AS t(oid oid, typname name);
```

### 集合返回函数

返回 R 向量以产生标量值集合：

```sql
CREATE OR REPLACE FUNCTION get_numbers(n int) RETURNS SETOF integer AS '
1:n
' LANGUAGE plr;

SELECT * FROM get_numbers(5);
```

### 窗口函数

```sql
CREATE OR REPLACE FUNCTION r_regr_slope(float8, float8, int)
RETURNS float8 AS '
slope <- NA
y <- farg1
x <- farg2
if (fnumrows == arg3 + 1L)
  try(slope <- lm(y ~ x)$coefficients[2])
return(slope)
' LANGUAGE plr WINDOW;
```

窗口函数接收 `farg1..fargN`（窗口帧内的值向量）、`fnumrows`（帧大小）和 `prownum`（分区中的当前行位置）。

### 全局变量

使用 R 的全局环境在函数调用之间保持数据：

```sql
CREATE OR REPLACE FUNCTION set_state(key text, val text) RETURNS void AS '
assign(key, val, env=.GlobalEnv)
' LANGUAGE plr;
```

### 实用辅助函数

```sql
SELECT load_r_typenames();  -- Load type OID variables
SELECT * FROM r_typenames(); -- List available type OIDs
SELECT plr_version();        -- PL/R version
```

### 触发器函数

PL/R 支持触发器函数，可以访问 `pg.tg.name`、`pg.tg.relname`、`pg.tg.when`、`pg.tg.level`、`pg.tg.op`、`pg.tg.new` 和 `pg.tg.old`。

### 运行环境与权限

本文对应 PL/R 8.4.8.7。PL/R 是不受信任的过程语言：创建其函数需要超级用户，R 代码能够以 PostgreSQL 操作系统用户的权限访问文件和进程，因此应审查函数体和 EXECUTE 授权。R 共享库必须可用；在 Unix 系统上，上游要求启动前将 `R_HOME` 设置到 PostgreSQL 服务进程的环境中，仅在交互式客户端终端设置并不能配置服务。

SQL 标量 NULL 转换为 R NULL，数组内的空元素则转换为 R NA；将函数声明为 STRICT 可以避免以空参数调用。R 全局状态属于单个后端进程，既不是跨会话共享状态，也不是持久数据库表。上游撤销了 PUBLIC 对 `plr_set_rhome(text)` 等修改环境的辅助函数的执行权限；应由管理员管理运行环境，而不是向应用角色开放这些函数。普通使用无需共享预加载。

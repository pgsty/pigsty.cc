---
title: "powa"
linkTitle: "powa"
description: "PostgreSQL 工作负载分析器-核心"
weight: 6870
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/powa-team/powa">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">powa-team/powa</div>
    <div class="ext-card__desc">https://github.com/powa-team/powa</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`powa`**](/ext/e/powa) | `5.1.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang python" href="/ext/language#python">Python</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6870  | [**`powa`**](/ext/e/powa) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `public` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`btree_gist`](/ext/e/btree_gist) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_wait_sampling`](/ext/e/pg_wait_sampling) [`hypopg`](/ext/e/hypopg) [`plprofiler`](/ext/e/plprofiler) [`pg_profile`](/ext/e/pg_profile) [`pg_track_settings`](/ext/e/pg_track_settings) [`btree_gin`](/ext/e/btree_gin) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pgdg missing el10.pg17


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.1.1` | {{< pgvers "18,17,16,15,14" >}} | `powa` | `plpgsql`, `pg_stat_statements`, `btree_gist` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.1.0` | {{< pgvers "18,17,16,15,14" >}} | `powa_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.1.1` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-powa` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 5 | AVAIL PGDG 5.1.0 6 | AVAIL PGDG 5.1.0 8 |
| el8.aarch64 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 5 | AVAIL PGDG 5.1.0 6 | AVAIL PGDG 5.1.0 6 |
| el9.x86_64 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 5 | AVAIL PGDG 5.1.0 6 | AVAIL PGDG 5.1.0 7 |
| el9.aarch64 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 5 | AVAIL PGDG 5.1.0 6 | AVAIL PGDG 5.1.0 6 |
| el10.x86_64 | AVAIL PGDG 5.1.0 2 | MISS PGDG - 0 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 2 |
| el10.aarch64 | AVAIL PGDG 5.1.0 2 | MISS PGDG - 0 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 2 | AVAIL PGDG 5.1.0 2 |
| d12.x86_64 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 |
| d12.aarch64 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 |
| d13.x86_64 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 |
| d13.aarch64 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 |
| u22.x86_64 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 |
| u22.aarch64 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 |
| u24.x86_64 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 |
| u24.aarch64 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 | AVAIL PGDG 5.1.1 1 |
@ el8.x86_64 18 powa_18 powa_18-5.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/powa_18-5.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 powa_18 powa_18-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/powa_18-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 powa_18 powa_18-5.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/powa_18-5.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 powa_18 powa_18-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/powa_18-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 powa_18 powa_18-5.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/powa_18-5.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 powa_18 powa_18-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 6.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/powa_18-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 powa_18 powa_18-5.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/powa_18-5.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 powa_18 powa_18-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/powa_18-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 powa_18 powa_18-5.1.0-1PGDGrhel10.1.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/powa_18-5.1.0-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 18 powa_18 powa_18-5.0.1-1PGDG.rhel10.x86_64.rpm pgdg 5.0.1 7.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/powa_18-5.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 powa_18 powa_18-5.1.0-1PGDGrhel10.1.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/powa_18-5.1.0-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 18 powa_18 powa_18-5.0.1-1PGDG.rhel10.aarch64.rpm pgdg 5.0.1 7.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/powa_18-5.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-powa postgresql-18-powa_5.1.1-1.pgdg12+1_amd64.deb pgdg 5.1.1 63.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-18-powa_5.1.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-powa postgresql-18-powa_5.1.1-1.pgdg12+1_arm64.deb pgdg 5.1.1 63.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-18-powa_5.1.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-powa postgresql-18-powa_5.1.1-1.pgdg13+1_amd64.deb pgdg 5.1.1 63.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-18-powa_5.1.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-powa postgresql-18-powa_5.1.1-1.pgdg13+1_arm64.deb pgdg 5.1.1 63.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-18-powa_5.1.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-powa postgresql-18-powa_5.1.1-1.pgdg22.04+1_amd64.deb pgdg 5.1.1 59.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-18-powa_5.1.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-powa postgresql-18-powa_5.1.1-1.pgdg22.04+1_arm64.deb pgdg 5.1.1 59.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-18-powa_5.1.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-powa postgresql-18-powa_5.1.1-1.pgdg24.04+1_amd64.deb pgdg 5.1.1 59.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-18-powa_5.1.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-powa postgresql-18-powa_5.1.1-1.pgdg24.04+1_arm64.deb pgdg 5.1.1 58.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-18-powa_5.1.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 powa_17 powa_17-5.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/powa_17-5.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 powa_17 powa_17-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/powa_17-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 powa_17 powa_17-5.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/powa_17-5.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 powa_17 powa_17-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/powa_17-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 powa_17 powa_17-5.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/powa_17-5.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 powa_17 powa_17-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 6.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/powa_17-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 powa_17 powa_17-5.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/powa_17-5.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 powa_17 powa_17-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/powa_17-5.0.1-1PGDG.rhel9.aarch64.rpm
@ d12.x86_64 17 postgresql-17-powa postgresql-17-powa_5.1.1-1.pgdg12+1_amd64.deb pgdg 5.1.1 63.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-17-powa_5.1.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-powa postgresql-17-powa_5.1.1-1.pgdg12+1_arm64.deb pgdg 5.1.1 63.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-17-powa_5.1.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-powa postgresql-17-powa_5.1.1-1.pgdg13+1_amd64.deb pgdg 5.1.1 63.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-17-powa_5.1.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-powa postgresql-17-powa_5.1.1-1.pgdg13+1_arm64.deb pgdg 5.1.1 63.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-17-powa_5.1.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-powa postgresql-17-powa_5.1.1-1.pgdg22.04+1_amd64.deb pgdg 5.1.1 63.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-17-powa_5.1.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-powa postgresql-17-powa_5.1.1-1.pgdg22.04+1_arm64.deb pgdg 5.1.1 63.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-17-powa_5.1.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-powa postgresql-17-powa_5.1.1-1.pgdg24.04+1_amd64.deb pgdg 5.1.1 59.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-17-powa_5.1.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-powa postgresql-17-powa_5.1.1-1.pgdg24.04+1_arm64.deb pgdg 5.1.1 58.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-17-powa_5.1.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 powa_16 powa_16-5.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/powa_16-5.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 powa_16 powa_16-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/powa_16-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 powa_16 powa_16-4.2.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2.2 6.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/powa_16-4.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 powa_16 powa_16-4.2.1-1PGDG.rhel8.x86_64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/powa_16-4.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 powa_16 powa_16-4.2.0-1PGDG.rhel8.x86_64.rpm pgdg 4.2.0 6.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/powa_16-4.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 powa_16 powa_16-5.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/powa_16-5.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 powa_16 powa_16-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/powa_16-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 powa_16 powa_16-4.2.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2.2 6.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/powa_16-4.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 powa_16 powa_16-4.2.1-1PGDG.rhel8.aarch64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/powa_16-4.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 powa_16 powa_16-4.2.0-1PGDG.rhel8.aarch64.rpm pgdg 4.2.0 6.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/powa_16-4.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 powa_16 powa_16-5.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/powa_16-5.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 powa_16 powa_16-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 6.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/powa_16-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 powa_16 powa_16-4.2.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2.2 6.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/powa_16-4.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 powa_16 powa_16-4.2.1-1PGDG.rhel9.x86_64.rpm pgdg 4.2.1 6.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/powa_16-4.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 powa_16 powa_16-4.2.0-1PGDG.rhel9.x86_64.rpm pgdg 4.2.0 6.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/powa_16-4.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 powa_16 powa_16-5.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/powa_16-5.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 powa_16 powa_16-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/powa_16-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 powa_16 powa_16-4.2.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2.2 6.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/powa_16-4.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 powa_16 powa_16-4.2.1-1PGDG.rhel9.aarch64.rpm pgdg 4.2.1 6.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/powa_16-4.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 powa_16 powa_16-4.2.0-1PGDG.rhel9.aarch64.rpm pgdg 4.2.0 6.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/powa_16-4.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 powa_16 powa_16-5.1.0-1PGDGrhel10.1.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/powa_16-5.1.0-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 16 powa_16 powa_16-5.0.1-1PGDG.rhel10.x86_64.rpm pgdg 5.0.1 7.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/powa_16-5.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 powa_16 powa_16-5.1.0-1PGDGrhel10.1.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/powa_16-5.1.0-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 powa_16 powa_16-5.0.1-1PGDG.rhel10.aarch64.rpm pgdg 5.0.1 7.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/powa_16-5.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-powa postgresql-16-powa_5.1.1-1.pgdg12+1_amd64.deb pgdg 5.1.1 63.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-16-powa_5.1.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-powa postgresql-16-powa_5.1.1-1.pgdg12+1_arm64.deb pgdg 5.1.1 63.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-16-powa_5.1.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-powa postgresql-16-powa_5.1.1-1.pgdg13+1_amd64.deb pgdg 5.1.1 63.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-16-powa_5.1.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-powa postgresql-16-powa_5.1.1-1.pgdg13+1_arm64.deb pgdg 5.1.1 63.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-16-powa_5.1.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-powa postgresql-16-powa_5.1.1-1.pgdg22.04+1_amd64.deb pgdg 5.1.1 63.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-16-powa_5.1.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-powa postgresql-16-powa_5.1.1-1.pgdg22.04+1_arm64.deb pgdg 5.1.1 63.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-16-powa_5.1.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-powa postgresql-16-powa_5.1.1-1.pgdg24.04+1_amd64.deb pgdg 5.1.1 59.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-16-powa_5.1.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-powa postgresql-16-powa_5.1.1-1.pgdg24.04+1_arm64.deb pgdg 5.1.1 58.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-16-powa_5.1.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 powa_15 powa_15-5.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/powa_15-5.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 powa_15 powa_15-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/powa_15-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 powa_15 powa_15-4.2.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2.2 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/powa_15-4.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 powa_15 powa_15-4.2.1-1PGDG.rhel8.x86_64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/powa_15-4.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 powa_15 powa_15-4.2.0-1PGDG.rhel8.x86_64.rpm pgdg 4.2.0 6.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/powa_15-4.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 powa_15 powa_15-4.1.4-1.rhel8.x86_64.rpm pgdg 4.1.4 66.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/powa_15-4.1.4-1.rhel8.x86_64.rpm
@ el8.aarch64 15 powa_15 powa_15-5.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/powa_15-5.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 powa_15 powa_15-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/powa_15-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 powa_15 powa_15-4.2.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2.2 6.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/powa_15-4.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 powa_15 powa_15-4.2.1-1PGDG.rhel8.aarch64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/powa_15-4.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 powa_15 powa_15-4.2.0-1PGDG.rhel8.aarch64.rpm pgdg 4.2.0 6.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/powa_15-4.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 powa_15 powa_15-4.1.4-1.rhel8.aarch64.rpm pgdg 4.1.4 66.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/powa_15-4.1.4-1.rhel8.aarch64.rpm
@ el9.x86_64 15 powa_15 powa_15-5.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/powa_15-5.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 powa_15 powa_15-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 6.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/powa_15-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 powa_15 powa_15-4.2.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2.2 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/powa_15-4.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 powa_15 powa_15-4.2.1-1PGDG.rhel9.x86_64.rpm pgdg 4.2.1 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/powa_15-4.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 powa_15 powa_15-4.2.0-1PGDG.rhel9.x86_64.rpm pgdg 4.2.0 6.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/powa_15-4.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 powa_15 powa_15-4.1.4-1.rhel9.x86_64.rpm pgdg 4.1.4 61.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/powa_15-4.1.4-1.rhel9.x86_64.rpm
@ el9.aarch64 15 powa_15 powa_15-5.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/powa_15-5.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 powa_15 powa_15-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/powa_15-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 powa_15 powa_15-4.2.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2.2 6.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/powa_15-4.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 powa_15 powa_15-4.2.1-1PGDG.rhel9.aarch64.rpm pgdg 4.2.1 6.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/powa_15-4.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 powa_15 powa_15-4.2.0-1PGDG.rhel9.aarch64.rpm pgdg 4.2.0 6.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/powa_15-4.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 powa_15 powa_15-4.1.4-1.rhel9.aarch64.rpm pgdg 4.1.4 61.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/powa_15-4.1.4-1.rhel9.aarch64.rpm
@ el10.x86_64 15 powa_15 powa_15-5.1.0-1PGDGrhel10.1.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/powa_15-5.1.0-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 15 powa_15 powa_15-5.0.1-1PGDG.rhel10.x86_64.rpm pgdg 5.0.1 7.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/powa_15-5.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 powa_15 powa_15-5.1.0-1PGDGrhel10.1.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/powa_15-5.1.0-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 powa_15 powa_15-5.0.1-1PGDG.rhel10.aarch64.rpm pgdg 5.0.1 7.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/powa_15-5.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-powa postgresql-15-powa_5.1.1-1.pgdg12+1_amd64.deb pgdg 5.1.1 64.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-15-powa_5.1.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-powa postgresql-15-powa_5.1.1-1.pgdg12+1_arm64.deb pgdg 5.1.1 64.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-15-powa_5.1.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-powa postgresql-15-powa_5.1.1-1.pgdg13+1_amd64.deb pgdg 5.1.1 64.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-15-powa_5.1.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-powa postgresql-15-powa_5.1.1-1.pgdg13+1_arm64.deb pgdg 5.1.1 64.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-15-powa_5.1.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-powa postgresql-15-powa_5.1.1-1.pgdg22.04+1_amd64.deb pgdg 5.1.1 63.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-15-powa_5.1.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-powa postgresql-15-powa_5.1.1-1.pgdg22.04+1_arm64.deb pgdg 5.1.1 63.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-15-powa_5.1.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-powa postgresql-15-powa_5.1.1-1.pgdg24.04+1_amd64.deb pgdg 5.1.1 59.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-15-powa_5.1.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-powa postgresql-15-powa_5.1.1-1.pgdg24.04+1_arm64.deb pgdg 5.1.1 59.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-15-powa_5.1.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 powa_14 powa_14-5.1.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/powa_14-5.1.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 powa_14 powa_14-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/powa_14-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 powa_14 powa_14-4.2.2-1PGDG.rhel8.x86_64.rpm pgdg 4.2.2 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/powa_14-4.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 powa_14 powa_14-4.2.1-1PGDG.rhel8.x86_64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/powa_14-4.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 powa_14 powa_14-4.2.0-1PGDG.rhel8.x86_64.rpm pgdg 4.2.0 6.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/powa_14-4.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 powa_14 powa_14-4.1.4-1.rhel8.x86_64.rpm pgdg 4.1.4 68.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/powa_14-4.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 powa_14 powa_14-4.1.3-1.rhel8.x86_64.rpm pgdg 4.1.3 68.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/powa_14-4.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 powa_14 powa_14-4.1.2-4.rhel8.x86_64.rpm pgdg 4.1.2 66.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/powa_14-4.1.2-4.rhel8.x86_64.rpm
@ el8.aarch64 14 powa_14 powa_14-5.1.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/powa_14-5.1.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 powa_14 powa_14-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/powa_14-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 powa_14 powa_14-4.2.2-1PGDG.rhel8.aarch64.rpm pgdg 4.2.2 6.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/powa_14-4.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 powa_14 powa_14-4.2.1-1PGDG.rhel8.aarch64.rpm pgdg 4.2.1 6.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/powa_14-4.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 powa_14 powa_14-4.2.0-1PGDG.rhel8.aarch64.rpm pgdg 4.2.0 6.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/powa_14-4.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 powa_14 powa_14-4.1.4-1.rhel8.aarch64.rpm pgdg 4.1.4 67.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/powa_14-4.1.4-1.rhel8.aarch64.rpm
@ el9.x86_64 14 powa_14 powa_14-5.1.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/powa_14-5.1.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 powa_14 powa_14-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 6.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/powa_14-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 powa_14 powa_14-4.2.2-1PGDG.rhel9.x86_64.rpm pgdg 4.2.2 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/powa_14-4.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 powa_14 powa_14-4.2.1-1PGDG.rhel9.x86_64.rpm pgdg 4.2.1 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/powa_14-4.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 powa_14 powa_14-4.2.0-1PGDG.rhel9.x86_64.rpm pgdg 4.2.0 6.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/powa_14-4.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 powa_14 powa_14-4.1.4-1.rhel9.x86_64.rpm pgdg 4.1.4 62.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/powa_14-4.1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 powa_14 powa_14-4.1.3-1.rhel9.x86_64.rpm pgdg 4.1.3 62.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/powa_14-4.1.3-1.rhel9.x86_64.rpm
@ el9.aarch64 14 powa_14 powa_14-5.1.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.1.0 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/powa_14-5.1.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 powa_14 powa_14-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 6.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/powa_14-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 powa_14 powa_14-4.2.2-1PGDG.rhel9.aarch64.rpm pgdg 4.2.2 6.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/powa_14-4.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 powa_14 powa_14-4.2.1-1PGDG.rhel9.aarch64.rpm pgdg 4.2.1 6.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/powa_14-4.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 powa_14 powa_14-4.2.0-1PGDG.rhel9.aarch64.rpm pgdg 4.2.0 6.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/powa_14-4.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 powa_14 powa_14-4.1.4-1.rhel9.aarch64.rpm pgdg 4.1.4 62.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/powa_14-4.1.4-1.rhel9.aarch64.rpm
@ el10.x86_64 14 powa_14 powa_14-5.1.0-1PGDGrhel10.1.x86_64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/powa_14-5.1.0-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 14 powa_14 powa_14-5.0.1-1PGDG.rhel10.x86_64.rpm pgdg 5.0.1 7.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/powa_14-5.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 powa_14 powa_14-5.1.0-1PGDGrhel10.1.aarch64.rpm pgdg 5.1.0 6.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/powa_14-5.1.0-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 14 powa_14 powa_14-5.0.1-1PGDG.rhel10.aarch64.rpm pgdg 5.0.1 7.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/powa_14-5.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-powa postgresql-14-powa_5.1.1-1.pgdg12+1_amd64.deb pgdg 5.1.1 65.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-14-powa_5.1.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-powa postgresql-14-powa_5.1.1-1.pgdg12+1_arm64.deb pgdg 5.1.1 65.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-14-powa_5.1.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-powa postgresql-14-powa_5.1.1-1.pgdg13+1_amd64.deb pgdg 5.1.1 66.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-14-powa_5.1.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-powa postgresql-14-powa_5.1.1-1.pgdg13+1_arm64.deb pgdg 5.1.1 66.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-14-powa_5.1.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-powa postgresql-14-powa_5.1.1-1.pgdg22.04+1_amd64.deb pgdg 5.1.1 64.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-14-powa_5.1.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-powa postgresql-14-powa_5.1.1-1.pgdg22.04+1_arm64.deb pgdg 5.1.1 64.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-14-powa_5.1.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-powa postgresql-14-powa_5.1.1-1.pgdg24.04+1_amd64.deb pgdg 5.1.1 61.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-14-powa_5.1.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-powa postgresql-14-powa_5.1.1-1.pgdg24.04+1_arm64.deb pgdg 5.1.1 61.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/powa-archivist/postgresql-14-powa_5.1.1-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `powa` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install powa;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y powa -v 18  # PG 18
pig ext install -y powa -v 17  # PG 17
pig ext install -y powa -v 16  # PG 16
pig ext install -y powa -v 15  # PG 15
pig ext install -y powa -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y powa_18       # PG 18
dnf install -y powa_17       # PG 17
dnf install -y powa_16       # PG 16
dnf install -y powa_15       # PG 15
dnf install -y powa_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-powa   # PG 18
apt install -y postgresql-17-powa   # PG 17
apt install -y postgresql-16-powa   # PG 16
apt install -y postgresql-15-powa   # PG 15
apt install -y postgresql-14-powa   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION powa CASCADE;  -- 依赖: plpgsql, pg_stat_statements, btree_gist
```

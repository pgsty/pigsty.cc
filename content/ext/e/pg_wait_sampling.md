---
title: "pg_wait_sampling"
linkTitle: "pg_wait_sampling"
description: "基于采样的等待事件统计"
weight: 6280
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgrespro/pg_wait_sampling">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgrespro/pg_wait_sampling</div>
    <div class="ext-card__desc">https://github.com/postgrespro/pg_wait_sampling</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_wait_sampling`**](/ext/e/pg_wait_sampling) | `1.1.9` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6280  | [**`pg_wait_sampling`**](/ext/e/pg_wait_sampling) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`powa`](/ext/e/powa) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_background`](/ext/e/pg_background) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`system_stats`](/ext/e/system_stats) [`pgnodemx`](/ext/e/pgnodemx) [`pg_profile`](/ext/e/pg_profile) [`pgsentinel`](/ext/e/pgsentinel) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.9` | {{< pgvers "18,17,16,15,14" >}} | `pg_wait_sampling` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.9` | {{< pgvers "18,17,16,15,14" >}} | `pg_wait_sampling_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-wait-sampling` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 4 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 6 |
| el8.aarch64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 4 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 5 |
| el9.x86_64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 4 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 5 |
| el9.aarch64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 4 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 5 |
| el10.x86_64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 2 | AVAIL PGDG 1.1.9 2 | AVAIL PGDG 1.1.9 2 | AVAIL PGDG 1.1.9 2 |
| el10.aarch64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 2 | AVAIL PGDG 1.1.9 2 | AVAIL PGDG 1.1.9 2 | AVAIL PGDG 1.1.9 2 |
| d12.x86_64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 |
| d12.aarch64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 |
| d13.x86_64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 |
| d13.aarch64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 |
| u22.x86_64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 |
| u22.aarch64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 |
| u24.x86_64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 |
| u24.aarch64 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 | AVAIL PGDG 1.1.9 1 |
@ el8.x86_64 18 pg_wait_sampling_18 pg_wait_sampling_18-1.1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.1.9 24.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_wait_sampling_18-1.1.9-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_wait_sampling_18 pg_wait_sampling_18-1.1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.1.9 24.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_wait_sampling_18-1.1.9-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_wait_sampling_18 pg_wait_sampling_18-1.1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.1.9 24.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_wait_sampling_18-1.1.9-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_wait_sampling_18 pg_wait_sampling_18-1.1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.1.9 23.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_wait_sampling_18-1.1.9-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_wait_sampling_18 pg_wait_sampling_18-1.1.9-1PGDG.rhel10.x86_64.rpm pgdg 1.1.9 24.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_wait_sampling_18-1.1.9-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_wait_sampling_18 pg_wait_sampling_18-1.1.9-1PGDG.rhel10.aarch64.rpm pgdg 1.1.9 24.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_wait_sampling_18-1.1.9-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-wait-sampling postgresql-18-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb pgdg 1.1.9 38.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-18-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-wait-sampling postgresql-18-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb pgdg 1.1.9 38.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-18-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-wait-sampling postgresql-18-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb pgdg 1.1.9 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-18-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-wait-sampling postgresql-18-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb pgdg 1.1.9 38.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-18-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-wait-sampling postgresql-18-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb pgdg 1.1.9 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-18-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-wait-sampling postgresql-18-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb pgdg 1.1.9 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-18-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-wait-sampling postgresql-18-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb pgdg 1.1.9 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-18-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-wait-sampling postgresql-18-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb pgdg 1.1.9 38.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-18-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.1.9 24.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_wait_sampling_17-1.1.9-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.1.8 24.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_wait_sampling_17-1.1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 24.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_wait_sampling_17-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 24.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_wait_sampling_17-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.1.9 24.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_wait_sampling_17-1.1.9-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.1.8 23.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_wait_sampling_17-1.1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 23.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_wait_sampling_17-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 24.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_wait_sampling_17-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.1.9 23.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_wait_sampling_17-1.1.9-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.1.8 23.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_wait_sampling_17-1.1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 23.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_wait_sampling_17-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 24.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_wait_sampling_17-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.1.9 23.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_wait_sampling_17-1.1.9-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.1.8 23.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_wait_sampling_17-1.1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 23.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_wait_sampling_17-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 24.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_wait_sampling_17-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.9-1PGDG.rhel10.x86_64.rpm pgdg 1.1.9 24.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_wait_sampling_17-1.1.9-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.8-1PGDG.rhel10.x86_64.rpm pgdg 1.1.8 24.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_wait_sampling_17-1.1.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.9-1PGDG.rhel10.aarch64.rpm pgdg 1.1.9 24.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_wait_sampling_17-1.1.9-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_wait_sampling_17 pg_wait_sampling_17-1.1.8-1PGDG.rhel10.aarch64.rpm pgdg 1.1.8 24.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_wait_sampling_17-1.1.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-wait-sampling postgresql-17-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb pgdg 1.1.9 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-17-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-wait-sampling postgresql-17-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb pgdg 1.1.9 38.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-17-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-wait-sampling postgresql-17-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb pgdg 1.1.9 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-17-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-wait-sampling postgresql-17-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb pgdg 1.1.9 38.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-17-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-wait-sampling postgresql-17-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb pgdg 1.1.9 43.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-17-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-wait-sampling postgresql-17-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb pgdg 1.1.9 42.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-17-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-wait-sampling postgresql-17-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb pgdg 1.1.9 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-17-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-wait-sampling postgresql-17-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb pgdg 1.1.9 38.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-17-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.1.9 24.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_wait_sampling_16-1.1.9-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.1.8 24.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_wait_sampling_16-1.1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_wait_sampling_16-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 24.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_wait_sampling_16-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.1.5 22.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_wait_sampling_16-1.1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.1.9 24.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_wait_sampling_16-1.1.9-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.1.8 23.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_wait_sampling_16-1.1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 23.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_wait_sampling_16-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_wait_sampling_16-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.1.5 21.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_wait_sampling_16-1.1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.1.9 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_wait_sampling_16-1.1.9-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.1.8 23.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_wait_sampling_16-1.1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 23.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_wait_sampling_16-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 24.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_wait_sampling_16-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.1.5 22.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_wait_sampling_16-1.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.1.9 23.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_wait_sampling_16-1.1.9-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.1.8 23.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_wait_sampling_16-1.1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 23.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_wait_sampling_16-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 24.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_wait_sampling_16-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.1.5 21.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_wait_sampling_16-1.1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.9-1PGDG.rhel10.x86_64.rpm pgdg 1.1.9 24.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_wait_sampling_16-1.1.9-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.8-1PGDG.rhel10.x86_64.rpm pgdg 1.1.8 24.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_wait_sampling_16-1.1.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.9-1PGDG.rhel10.aarch64.rpm pgdg 1.1.9 24.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_wait_sampling_16-1.1.9-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_wait_sampling_16 pg_wait_sampling_16-1.1.8-1PGDG.rhel10.aarch64.rpm pgdg 1.1.8 24.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_wait_sampling_16-1.1.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-wait-sampling postgresql-16-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb pgdg 1.1.9 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-16-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-wait-sampling postgresql-16-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb pgdg 1.1.9 38.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-16-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-wait-sampling postgresql-16-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb pgdg 1.1.9 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-16-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-wait-sampling postgresql-16-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb pgdg 1.1.9 38.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-16-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-wait-sampling postgresql-16-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb pgdg 1.1.9 43.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-16-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-wait-sampling postgresql-16-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb pgdg 1.1.9 42.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-16-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-wait-sampling postgresql-16-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb pgdg 1.1.9 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-16-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-wait-sampling postgresql-16-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb pgdg 1.1.9 37.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-16-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.1.9 24.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_wait_sampling_15-1.1.9-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.1.8 24.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_wait_sampling_15-1.1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 24.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_wait_sampling_15-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 24.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_wait_sampling_15-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.4-1.rhel8.x86_64.rpm pgdg 1.1.4 47.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_wait_sampling_15-1.1.4-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.1.9 24.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_wait_sampling_15-1.1.9-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.1.8 24.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_wait_sampling_15-1.1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 24.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_wait_sampling_15-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 24.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_wait_sampling_15-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.4-1.rhel8.aarch64.rpm pgdg 1.1.4 46.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_wait_sampling_15-1.1.4-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.1.9 24.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_wait_sampling_15-1.1.9-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.1.8 24.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_wait_sampling_15-1.1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 24.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_wait_sampling_15-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 24.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_wait_sampling_15-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.4-1.rhel9.x86_64.rpm pgdg 1.1.4 48.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_wait_sampling_15-1.1.4-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.1.9 24.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_wait_sampling_15-1.1.9-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.1.8 24.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_wait_sampling_15-1.1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_wait_sampling_15-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 24.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_wait_sampling_15-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.4-1.rhel9.aarch64.rpm pgdg 1.1.4 47.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_wait_sampling_15-1.1.4-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.9-1PGDG.rhel10.x86_64.rpm pgdg 1.1.9 24.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_wait_sampling_15-1.1.9-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.8-1PGDG.rhel10.x86_64.rpm pgdg 1.1.8 24.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_wait_sampling_15-1.1.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.9-1PGDG.rhel10.aarch64.rpm pgdg 1.1.9 25.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_wait_sampling_15-1.1.9-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_wait_sampling_15 pg_wait_sampling_15-1.1.8-1PGDG.rhel10.aarch64.rpm pgdg 1.1.8 24.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_wait_sampling_15-1.1.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-wait-sampling postgresql-15-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb pgdg 1.1.9 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-15-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-wait-sampling postgresql-15-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb pgdg 1.1.9 38.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-15-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-wait-sampling postgresql-15-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb pgdg 1.1.9 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-15-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-wait-sampling postgresql-15-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb pgdg 1.1.9 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-15-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-wait-sampling postgresql-15-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb pgdg 1.1.9 43.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-15-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-wait-sampling postgresql-15-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb pgdg 1.1.9 43.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-15-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-wait-sampling postgresql-15-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb pgdg 1.1.9 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-15-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-wait-sampling postgresql-15-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb pgdg 1.1.9 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-15-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.1.9 24.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_wait_sampling_14-1.1.9-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.1.8 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_wait_sampling_14-1.1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 24.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_wait_sampling_14-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_wait_sampling_14-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.4-1.rhel8.x86_64.rpm pgdg 1.1.4 46.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_wait_sampling_14-1.1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.3-1.rhel8.x86_64.rpm pgdg 1.1.3 49.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_wait_sampling_14-1.1.3-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.1.9 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_wait_sampling_14-1.1.9-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.1.8 24.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_wait_sampling_14-1.1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 24.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_wait_sampling_14-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 24.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_wait_sampling_14-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.4-1.rhel8.aarch64.rpm pgdg 1.1.4 46.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_wait_sampling_14-1.1.4-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.1.9 24.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_wait_sampling_14-1.1.9-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.1.8 24.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_wait_sampling_14-1.1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 24.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_wait_sampling_14-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 24.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_wait_sampling_14-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.4-1.rhel9.x86_64.rpm pgdg 1.1.4 48.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_wait_sampling_14-1.1.4-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.1.9 24.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_wait_sampling_14-1.1.9-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.1.8 24.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_wait_sampling_14-1.1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 24.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_wait_sampling_14-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 24.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_wait_sampling_14-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.4-1.rhel9.aarch64.rpm pgdg 1.1.4 47.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_wait_sampling_14-1.1.4-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.9-1PGDG.rhel10.x86_64.rpm pgdg 1.1.9 24.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_wait_sampling_14-1.1.9-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.8-1PGDG.rhel10.x86_64.rpm pgdg 1.1.8 24.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_wait_sampling_14-1.1.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.9-1PGDG.rhel10.aarch64.rpm pgdg 1.1.9 25.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_wait_sampling_14-1.1.9-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_wait_sampling_14 pg_wait_sampling_14-1.1.8-1PGDG.rhel10.aarch64.rpm pgdg 1.1.8 24.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_wait_sampling_14-1.1.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-wait-sampling postgresql-14-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb pgdg 1.1.9 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-14-pg-wait-sampling_1.1.9-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-wait-sampling postgresql-14-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb pgdg 1.1.9 38.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-14-pg-wait-sampling_1.1.9-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-wait-sampling postgresql-14-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb pgdg 1.1.9 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-14-pg-wait-sampling_1.1.9-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-wait-sampling postgresql-14-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb pgdg 1.1.9 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-14-pg-wait-sampling_1.1.9-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-wait-sampling postgresql-14-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb pgdg 1.1.9 43.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-14-pg-wait-sampling_1.1.9-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-wait-sampling postgresql-14-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb pgdg 1.1.9 42.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-14-pg-wait-sampling_1.1.9-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-wait-sampling postgresql-14-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb pgdg 1.1.9 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-14-pg-wait-sampling_1.1.9-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-wait-sampling postgresql-14-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb pgdg 1.1.9 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-wait-sampling/postgresql-14-pg-wait-sampling_1.1.9-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_wait_sampling` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_wait_sampling;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_wait_sampling -v 18  # PG 18
pig ext install -y pg_wait_sampling -v 17  # PG 17
pig ext install -y pg_wait_sampling -v 16  # PG 16
pig ext install -y pg_wait_sampling -v 15  # PG 15
pig ext install -y pg_wait_sampling -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_wait_sampling_18       # PG 18
dnf install -y pg_wait_sampling_17       # PG 17
dnf install -y pg_wait_sampling_16       # PG 16
dnf install -y pg_wait_sampling_15       # PG 15
dnf install -y pg_wait_sampling_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-wait-sampling   # PG 18
apt install -y postgresql-17-pg-wait-sampling   # PG 17
apt install -y postgresql-16-pg-wait-sampling   # PG 16
apt install -y postgresql-15-pg-wait-sampling   # PG 15
apt install -y postgresql-14-pg-wait-sampling   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_wait_sampling';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_wait_sampling;
```

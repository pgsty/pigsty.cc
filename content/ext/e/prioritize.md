---
title: "prioritize"
linkTitle: "prioritize"
description: "获取和设置 PostgreSQL 后端的优先级"
weight: 5100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/schmiddy/pg_prioritize">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">schmiddy/pg_prioritize</div>
    <div class="ext-card__desc">https://github.com/schmiddy/pg_prioritize</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_prioritize`**](/ext/e/prioritize) | `1.0.4` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5100  | [**`prioritize`**](/ext/e/prioritize) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_proctab`](/ext/e/pg_proctab) [`pg_background`](/ext/e/pg_background) [`system_stats`](/ext/e/system_stats) [`pgnodemx`](/ext/e/pgnodemx) [`pg_wait_sampling`](/ext/e/pg_wait_sampling) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_squeeze`](/ext/e/pg_squeeze) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> no pg 14 on el9


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_prioritize` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_prioritize_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-prioritize` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el8.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el9.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | MISS PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el10.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el10.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| d12.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| d12.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| d13.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| d13.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u22.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u22.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u24.x86_64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| u24.aarch64 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
@ el8.x86_64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel8.x86_64.rpm pgdg 1.0.4 14.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_prioritize_18-1.0.4-7PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel8.aarch64.rpm pgdg 1.0.4 14.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_prioritize_18-1.0.4-7PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel9.x86_64.rpm pgdg 1.0.4 14.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_prioritize_18-1.0.4-7PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel9.aarch64.rpm pgdg 1.0.4 13.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_prioritize_18-1.0.4-7PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_prioritize_18-1.0.4-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_prioritize_18 pg_prioritize_18-1.0.4-7PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_prioritize_18-1.0.4-7PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-prioritize postgresql-18-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-18-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-5PGDG.rhel8.x86_64.rpm pgdg 1.0.4 14.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_prioritize_17-1.0.4-5PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-5PGDG.rhel8.aarch64.rpm pgdg 1.0.4 14.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_prioritize_17-1.0.4-5PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-5PGDG.rhel9.x86_64.rpm pgdg 1.0.4 14.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_prioritize_17-1.0.4-5PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-5PGDG.rhel9.aarch64.rpm pgdg 1.0.4 13.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_prioritize_17-1.0.4-5PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-6PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_prioritize_17-1.0.4-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_prioritize_17 pg_prioritize_17-1.0.4-6PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_prioritize_17-1.0.4-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-prioritize postgresql-17-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-17-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-4PGDG.rhel8.x86_64.rpm pgdg 1.0.4 14.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_prioritize_16-1.0.4-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-4PGDG.rhel8.aarch64.rpm pgdg 1.0.4 13.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_prioritize_16-1.0.4-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-4PGDG.rhel9.x86_64.rpm pgdg 1.0.4 13.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_prioritize_16-1.0.4-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-4PGDG.rhel9.aarch64.rpm pgdg 1.0.4 13.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_prioritize_16-1.0.4-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-6PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_prioritize_16-1.0.4-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_prioritize_16 pg_prioritize_16-1.0.4-6PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_prioritize_16-1.0.4-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-prioritize postgresql-16-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-16-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-2.rhel8.x86_64.rpm pgdg 1.0.4 19.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_prioritize_15-1.0.4-2.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-2.rhel8.aarch64.rpm pgdg 1.0.4 19.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_prioritize_15-1.0.4-2.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-2.rhel9.x86_64.rpm pgdg 1.0.4 19.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_prioritize_15-1.0.4-2.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-2.rhel9.aarch64.rpm pgdg 1.0.4 19.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_prioritize_15-1.0.4-2.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-6PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_prioritize_15-1.0.4-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_prioritize_15 pg_prioritize_15-1.0.4-6PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_prioritize_15-1.0.4-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-prioritize postgresql-15-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-15-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-2.rhel8.x86_64.rpm pgdg 1.0.4 20.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_prioritize_14-1.0.4-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-2.rhel8.aarch64.rpm pgdg 1.0.4 19.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_prioritize_14-1.0.4-2.rhel8.aarch64.rpm
@ el9.aarch64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-2.rhel9.aarch64.rpm pgdg 1.0.4 19.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_prioritize_14-1.0.4-2.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-6PGDG.rhel10.x86_64.rpm pgdg 1.0.4 14.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_prioritize_14-1.0.4-6PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_prioritize_14 pg_prioritize_14-1.0.4-6PGDG.rhel10.aarch64.rpm pgdg 1.0.4 14.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_prioritize_14-1.0.4-6PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg12+1_amd64.deb pgdg 1.0.4 11.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg12+1_arm64.deb pgdg 1.0.4 11.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg13+1_amd64.deb pgdg 1.0.4 11.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg13+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb pgdg 1.0.4 12.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb pgdg 1.0.4 12.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb pgdg 1.0.4 11.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-prioritize postgresql-14-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb pgdg 1.0.4 11.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-prioritize/postgresql-14-prioritize_1.0.4-13.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_prioritize` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_prioritize;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_prioritize -v 18  # PG 18
pig ext install -y pg_prioritize -v 17  # PG 17
pig ext install -y pg_prioritize -v 16  # PG 16
pig ext install -y pg_prioritize -v 15  # PG 15
pig ext install -y pg_prioritize -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_prioritize_18       # PG 18
dnf install -y pg_prioritize_17       # PG 17
dnf install -y pg_prioritize_16       # PG 16
dnf install -y pg_prioritize_15       # PG 15
dnf install -y pg_prioritize_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-prioritize   # PG 18
apt install -y postgresql-17-prioritize   # PG 17
apt install -y postgresql-16-prioritize   # PG 16
apt install -y postgresql-15-prioritize   # PG 15
apt install -y postgresql-14-prioritize   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION prioritize;
```

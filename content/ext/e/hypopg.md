---
title: "hypopg"
linkTitle: "hypopg"
description: "假设索引，用于创建一个虚拟索引检验执行计划"
weight: 2790
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HypoPG/hypopg">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HypoPG/hypopg</div>
    <div class="ext-card__desc">https://github.com/HypoPG/hypopg</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/hypopg-1.4.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">hypopg-1.4.2.tar.gz</div>
    <div class="ext-card__desc">hypopg-1.4.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`hypopg`**](/ext/e/hypopg) | `1.4.2` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2790  | [**`hypopg`**](/ext/e/hypopg) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`index_advisor`](/ext/e/index_advisor) [`pg_qualstats`](/ext/e/pg_qualstats) [`powa`](/ext/e/powa) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`btree_gin`](/ext/e/btree_gin) [`pg_show_plans`](/ext/e/pg_show_plans) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `hypopg` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `hypopg_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-hypopg` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| el8.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| el9.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| el9.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 3 | AVAIL PGDG 1.4.1 3 |
| el10.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| el10.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| d12.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| d12.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| d13.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| d13.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| u22.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| u22.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| u24.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| u24.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| u26.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| u26.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
@ el8.x86_64 18 hypopg_18 hypopg_18-1.4.2-1PGDG.rhel8.x86_64.rpm pgdg 1.4.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/hypopg_18-1.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 hypopg_18 hypopg_18-1.4.2-1PGDG.rhel8.aarch64.rpm pgdg 1.4.2 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/hypopg_18-1.4.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 hypopg_18 hypopg_18-1.4.2-1PGDG.rhel9.x86_64.rpm pgdg 1.4.2 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/hypopg_18-1.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 hypopg_18 hypopg_18-1.4.2-1PGDG.rhel9.aarch64.rpm pgdg 1.4.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/hypopg_18-1.4.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 hypopg_18 hypopg_18-1.4.2-1PGDG.rhel10.x86_64.rpm pgdg 1.4.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/hypopg_18-1.4.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 hypopg_18 hypopg_18-1.4.2-1PGDG.rhel10.aarch64.rpm pgdg 1.4.2 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/hypopg_18-1.4.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg12+1_amd64.deb pgdg 1.4.2 57.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg12+1_arm64.deb pgdg 1.4.2 57.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg13+1_amd64.deb pgdg 1.4.2 57.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg13+1_arm64.deb pgdg 1.4.2 58.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb pgdg 1.4.2 59.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb pgdg 1.4.2 59.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb pgdg 1.4.2 57.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb pgdg 1.4.2 57.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb pgdg 1.4.2 56.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-hypopg postgresql-18-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb pgdg 1.4.2 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-18-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 hypopg_17 hypopg_17-1.4.1-2PGDG.rhel8.x86_64.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/hypopg_17-1.4.1-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 hypopg_17 hypopg_17-1.4.1-2PGDG.rhel8.aarch64.rpm pgdg 1.4.1 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/hypopg_17-1.4.1-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 hypopg_17 hypopg_17-1.4.1-2PGDG.rhel9.x86_64.rpm pgdg 1.4.1 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/hypopg_17-1.4.1-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 hypopg_17 hypopg_17-1.4.1-2PGDG.rhel9.aarch64.rpm pgdg 1.4.1 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/hypopg_17-1.4.1-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 hypopg_17 hypopg_17-1.4.1-3PGDG.rhel10.x86_64.rpm pgdg 1.4.1 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/hypopg_17-1.4.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 hypopg_17 hypopg_17-1.4.1-3PGDG.rhel10.aarch64.rpm pgdg 1.4.1 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/hypopg_17-1.4.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg12+1_amd64.deb pgdg 1.4.2 57.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg12+1_arm64.deb pgdg 1.4.2 57.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg13+1_amd64.deb pgdg 1.4.2 57.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg13+1_arm64.deb pgdg 1.4.2 58.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb pgdg 1.4.2 72.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb pgdg 1.4.2 72.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb pgdg 1.4.2 57.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb pgdg 1.4.2 57.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb pgdg 1.4.2 56.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-hypopg postgresql-17-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb pgdg 1.4.2 57.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-17-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 hypopg_16 hypopg_16-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/hypopg_16-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 hypopg_16 hypopg_16-1.4.0-2PGDG.rhel8.x86_64.rpm pgdg 1.4.0 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/hypopg_16-1.4.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 hypopg_16 hypopg_16-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/hypopg_16-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 hypopg_16 hypopg_16-1.4.0-2PGDG.rhel8.aarch64.rpm pgdg 1.4.0 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/hypopg_16-1.4.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 hypopg_16 hypopg_16-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 28.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/hypopg_16-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 hypopg_16 hypopg_16-1.4.0-2PGDG.rhel9.x86_64.rpm pgdg 1.4.0 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/hypopg_16-1.4.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 hypopg_16 hypopg_16-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/hypopg_16-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 hypopg_16 hypopg_16-1.4.0-2PGDG.rhel9.aarch64.rpm pgdg 1.4.0 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/hypopg_16-1.4.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 hypopg_16 hypopg_16-1.4.1-3PGDG.rhel10.x86_64.rpm pgdg 1.4.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/hypopg_16-1.4.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 hypopg_16 hypopg_16-1.4.1-3PGDG.rhel10.aarch64.rpm pgdg 1.4.1 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/hypopg_16-1.4.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg12+1_amd64.deb pgdg 1.4.2 57.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg12+1_arm64.deb pgdg 1.4.2 58.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg13+1_amd64.deb pgdg 1.4.2 57.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg13+1_arm64.deb pgdg 1.4.2 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb pgdg 1.4.2 72.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb pgdg 1.4.2 72.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb pgdg 1.4.2 57.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb pgdg 1.4.2 57.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb pgdg 1.4.2 56.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-hypopg postgresql-16-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb pgdg 1.4.2 57.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-16-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 hypopg_15 hypopg_15-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/hypopg_15-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 hypopg_15 hypopg_15-1.4.0-1.rhel8.x86_64.rpm pgdg 1.4.0 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/hypopg_15-1.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 hypopg_15 hypopg_15-1.3.1-1.rhel8.x86_64.rpm pgdg 1.3.1 74.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/hypopg_15-1.3.1-1.rhel8.x86_64.rpm
@ el8.aarch64 15 hypopg_15 hypopg_15-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/hypopg_15-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 hypopg_15 hypopg_15-1.4.0-1.rhel8.aarch64.rpm pgdg 1.4.0 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/hypopg_15-1.4.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 hypopg_15 hypopg_15-1.3.1-1.rhel8.aarch64.rpm pgdg 1.3.1 74.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/hypopg_15-1.3.1-1.rhel8.aarch64.rpm
@ el9.x86_64 15 hypopg_15 hypopg_15-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/hypopg_15-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 hypopg_15 hypopg_15-1.4.0-1.rhel9.x86_64.rpm pgdg 1.4.0 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/hypopg_15-1.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 hypopg_15 hypopg_15-1.3.1-1.rhel9.x86_64.rpm pgdg 1.3.1 75.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/hypopg_15-1.3.1-1.rhel9.x86_64.rpm
@ el9.aarch64 15 hypopg_15 hypopg_15-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/hypopg_15-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 hypopg_15 hypopg_15-1.4.0-1.rhel9.aarch64.rpm pgdg 1.4.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/hypopg_15-1.4.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 hypopg_15 hypopg_15-1.3.1-1.rhel9.aarch64.rpm pgdg 1.3.1 76.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/hypopg_15-1.3.1-1.rhel9.aarch64.rpm
@ el10.x86_64 15 hypopg_15 hypopg_15-1.4.1-3PGDG.rhel10.x86_64.rpm pgdg 1.4.1 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/hypopg_15-1.4.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 hypopg_15 hypopg_15-1.4.1-3PGDG.rhel10.aarch64.rpm pgdg 1.4.1 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/hypopg_15-1.4.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg12+1_amd64.deb pgdg 1.4.2 57.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg12+1_arm64.deb pgdg 1.4.2 58.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg13+1_amd64.deb pgdg 1.4.2 58.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg13+1_arm64.deb pgdg 1.4.2 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb pgdg 1.4.2 72.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb pgdg 1.4.2 72.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb pgdg 1.4.2 57.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb pgdg 1.4.2 58.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb pgdg 1.4.2 57.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-hypopg postgresql-15-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb pgdg 1.4.2 57.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-15-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 hypopg_14 hypopg_14-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/hypopg_14-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 hypopg_14 hypopg_14-1.4.0-1.rhel8.x86_64.rpm pgdg 1.4.0 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/hypopg_14-1.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 hypopg_14 hypopg_14-1.3.1-1.rhel8.x86_64.rpm pgdg 1.3.1 74.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/hypopg_14-1.3.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 hypopg_14 hypopg_14-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/hypopg_14-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 hypopg_14 hypopg_14-1.4.0-1.rhel8.aarch64.rpm pgdg 1.4.0 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/hypopg_14-1.4.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 hypopg_14 hypopg_14-1.3.1-1.rhel8.aarch64.rpm pgdg 1.3.1 73.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/hypopg_14-1.3.1-1.rhel8.aarch64.rpm
@ el9.x86_64 14 hypopg_14 hypopg_14-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/hypopg_14-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 hypopg_14 hypopg_14-1.4.0-1.rhel9.x86_64.rpm pgdg 1.4.0 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/hypopg_14-1.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 hypopg_14 hypopg_14-1.3.1-1.rhel9.x86_64.rpm pgdg 1.3.1 74.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/hypopg_14-1.3.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 hypopg_14 hypopg_14-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/hypopg_14-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 hypopg_14 hypopg_14-1.4.0-1.rhel9.aarch64.rpm pgdg 1.4.0 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/hypopg_14-1.4.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 hypopg_14 hypopg_14-1.3.1-1.rhel9.aarch64.rpm pgdg 1.3.1 75.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/hypopg_14-1.3.1-1.rhel9.aarch64.rpm
@ el10.x86_64 14 hypopg_14 hypopg_14-1.4.1-3PGDG.rhel10.x86_64.rpm pgdg 1.4.1 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/hypopg_14-1.4.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 hypopg_14 hypopg_14-1.4.1-3PGDG.rhel10.aarch64.rpm pgdg 1.4.1 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/hypopg_14-1.4.1-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg12+1_amd64.deb pgdg 1.4.2 57.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg12+1_arm64.deb pgdg 1.4.2 58.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg13+1_amd64.deb pgdg 1.4.2 58.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg13+1_arm64.deb pgdg 1.4.2 58.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb pgdg 1.4.2 71.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb pgdg 1.4.2 71.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb pgdg 1.4.2 57.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb pgdg 1.4.2 58.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb pgdg 1.4.2 57.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-hypopg postgresql-14-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb pgdg 1.4.2 57.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/h/hypopg/postgresql-14-hypopg_1.4.2-2.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `hypopg` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install hypopg;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y hypopg -v 18  # PG 18
pig ext install -y hypopg -v 17  # PG 17
pig ext install -y hypopg -v 16  # PG 16
pig ext install -y hypopg -v 15  # PG 15
pig ext install -y hypopg -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y hypopg_18       # PG 18
dnf install -y hypopg_17       # PG 17
dnf install -y hypopg_16       # PG 16
dnf install -y hypopg_15       # PG 15
dnf install -y hypopg_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-hypopg   # PG 18
apt install -y postgresql-17-hypopg   # PG 17
apt install -y postgresql-16-hypopg   # PG 16
apt install -y postgresql-15-hypopg   # PG 15
apt install -y postgresql-14-hypopg   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION hypopg;
```




## 用法

> [hypopg: PostgreSQL 假想索引](https://github.com/HypoPG/hypopg)

HypoPG 允许创建仅存在于当前会话中的假想（虚拟）索引，这些索引可被 `EXPLAIN`（不带 `ANALYZE`）在查询规划时考虑。这使得无需实际创建索引即可测试索引对查询的影响。

### 函数

| 函数 | 描述 |
|------|------|
| `hypopg_create_index(query text)` | 使用 CREATE INDEX 语法创建假想索引 |
| `hypopg_list_indexes()` | 列出当前会话中的所有假想索引 |
| `hypopg_drop_index(oid)` | 通过 OID 删除特定假想索引 |
| `hypopg_reset()` | 删除所有假想索引 |
| `hypopg()` | 以类似 pg_index 的格式返回假想索引 |

### 工作流程

创建测试表并查看基线执行计划：

```sql
CREATE TABLE hypo AS SELECT id, 'line ' || id AS val FROM generate_series(1, 10000) id;
ANALYZE hypo;
EXPLAIN SELECT * FROM hypo WHERE id = 1;
-- Seq Scan on hypo (cost=0.00..170.00 rows=1 width=15)
```

创建假想索引：

```sql
SELECT * FROM hypopg_create_index('CREATE INDEX ON hypo (id)');
--  indexrelid |      indexname
-- ------------+----------------------
--       13543 | <13543>btree_hypo_id
```

查看使用假想索引后的执行计划：

```sql
EXPLAIN SELECT * FROM hypo WHERE id = 1;
-- Index Scan using <13543>btree_hypo_id on hypo (cost=0.04..8.06 rows=1 width=15)
```

列出和管理假想索引：

```sql
SELECT * FROM hypopg_list_indexes();
SELECT * FROM hypopg_drop_index(13543);
SELECT * FROM hypopg_reset();
```

### 限制

- 只有不带 `ANALYZE` 的 `EXPLAIN` 才会考虑假想索引
- 假想索引仅存在于当前后端会话中
- 其他并发连接不受影响
- 索引名称和部分 CREATE INDEX 选项会被忽略

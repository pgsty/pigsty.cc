---
title: "pg_track_settings"
linkTitle: "pg_track_settings"
description: "跟踪设置更改"
weight: 6260
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rjuju/pg_track_settings">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rjuju/pg_track_settings</div>
    <div class="ext-card__desc">https://github.com/rjuju/pg_track_settings</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_track_settings`**](/ext/e/pg_track_settings) | `2.1.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6260  | [**`pg_track_settings`**](/ext/e/pg_track_settings) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_show_plans`](/ext/e/pg_show_plans) [`powa`](/ext/e/powa) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_profile`](/ext/e/pg_profile) [`pg_store_plans`](/ext/e/pg_store_plans) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_qualstats`](/ext/e/pg_qualstats) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_track_settings` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_track_settings_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.1.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-track-settings` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 2 | AVAIL PGDG 2.1.2 3 |
| el8.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 2 | AVAIL PGDG 2.1.2 2 |
| el9.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 2 | AVAIL PGDG 2.1.2 2 |
| el9.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 2 | AVAIL PGDG 2.1.2 2 |
| el10.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| el10.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| d12.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| d12.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| d13.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| d13.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| u22.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| u22.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| u24.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| u24.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| u26.x86_64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
| u26.aarch64 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 | AVAIL PGDG 2.1.2 1 |
@ el8.x86_64 18 pg_track_settings_18 pg_track_settings_18-2.1.2-3PGDG.rhel8.noarch.rpm pgdg 2.1.2 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_track_settings_18-2.1.2-3PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pg_track_settings_18 pg_track_settings_18-2.1.2-3PGDG.rhel8.noarch.rpm pgdg 2.1.2 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_track_settings_18-2.1.2-3PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pg_track_settings_18 pg_track_settings_18-2.1.2-3PGDG.rhel9.noarch.rpm pgdg 2.1.2 15.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_track_settings_18-2.1.2-3PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pg_track_settings_18 pg_track_settings_18-2.1.2-3PGDG.rhel9.noarch.rpm pgdg 2.1.2 15.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_track_settings_18-2.1.2-3PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pg_track_settings_18 pg_track_settings_18-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_track_settings_18-2.1.2-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pg_track_settings_18 pg_track_settings_18-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_track_settings_18-2.1.2-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ u22.x86_64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u24.x86_64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u26.x86_64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-pg-track-settings postgresql-18-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-18-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ el8.x86_64 17 pg_track_settings_17 pg_track_settings_17-2.1.2-2PGDG.rhel8.x86_64.rpm pgdg 2.1.2 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_track_settings_17-2.1.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_track_settings_17 pg_track_settings_17-2.1.2-2PGDG.rhel8.aarch64.rpm pgdg 2.1.2 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_track_settings_17-2.1.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_track_settings_17 pg_track_settings_17-2.1.2-2PGDG.rhel9.x86_64.rpm pgdg 2.1.2 16.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_track_settings_17-2.1.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_track_settings_17 pg_track_settings_17-2.1.2-2PGDG.rhel9.aarch64.rpm pgdg 2.1.2 16.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_track_settings_17-2.1.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_track_settings_17 pg_track_settings_17-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_track_settings_17-2.1.2-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pg_track_settings_17 pg_track_settings_17-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_track_settings_17-2.1.2-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d13.x86_64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ u22.x86_64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u24.x86_64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u26.x86_64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-pg-track-settings postgresql-17-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-17-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ el8.x86_64 16 pg_track_settings_16 pg_track_settings_16-2.1.2-2PGDG.rhel8.x86_64.rpm pgdg 2.1.2 17.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_track_settings_16-2.1.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_track_settings_16 pg_track_settings_16-2.1.2-2PGDG.rhel8.aarch64.rpm pgdg 2.1.2 17.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_track_settings_16-2.1.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_track_settings_16 pg_track_settings_16-2.1.2-2PGDG.rhel9.x86_64.rpm pgdg 2.1.2 16.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_track_settings_16-2.1.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_track_settings_16 pg_track_settings_16-2.1.2-2PGDG.rhel9.aarch64.rpm pgdg 2.1.2 15.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_track_settings_16-2.1.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_track_settings_16 pg_track_settings_16-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_track_settings_16-2.1.2-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pg_track_settings_16 pg_track_settings_16-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_track_settings_16-2.1.2-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d13.x86_64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ u22.x86_64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u24.x86_64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u26.x86_64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-pg-track-settings postgresql-16-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-16-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ el8.x86_64 15 pg_track_settings_15 pg_track_settings_15-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_track_settings_15-2.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_track_settings_15 pg_track_settings_15-2.1.0-1.rhel8.x86_64.rpm pgdg 2.1.0 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_track_settings_15-2.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_track_settings_15 pg_track_settings_15-2.1.2-1.rhel8.aarch64.rpm pgdg 2.1.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_track_settings_15-2.1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_track_settings_15 pg_track_settings_15-2.1.0-1.rhel8.aarch64.rpm pgdg 2.1.0 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_track_settings_15-2.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_track_settings_15 pg_track_settings_15-2.1.2-1.rhel9.x86_64.rpm pgdg 2.1.2 16.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_track_settings_15-2.1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_track_settings_15 pg_track_settings_15-2.1.0-1.rhel9.x86_64.rpm pgdg 2.1.0 15.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_track_settings_15-2.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_track_settings_15 pg_track_settings_15-2.1.2-1.rhel9.aarch64.rpm pgdg 2.1.2 15.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_track_settings_15-2.1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_track_settings_15 pg_track_settings_15-2.1.0-1.rhel9.aarch64.rpm pgdg 2.1.0 15.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_track_settings_15-2.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_track_settings_15 pg_track_settings_15-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_track_settings_15-2.1.2-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pg_track_settings_15 pg_track_settings_15-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_track_settings_15-2.1.2-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d13.x86_64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ u22.x86_64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u22.aarch64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u24.x86_64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u26.x86_64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ u26.aarch64 15 postgresql-15-pg-track-settings postgresql-15-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-15-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ el8.x86_64 14 pg_track_settings_14 pg_track_settings_14-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_track_settings_14-2.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_track_settings_14 pg_track_settings_14-2.1.0-1.rhel8.x86_64.rpm pgdg 2.1.0 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_track_settings_14-2.1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_track_settings_14 pg_track_settings_14-2.0.1-3.rhel8.x86_64.rpm pgdg 2.0.1 15.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_track_settings_14-2.0.1-3.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_track_settings_14 pg_track_settings_14-2.1.2-1.rhel8.aarch64.rpm pgdg 2.1.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_track_settings_14-2.1.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_track_settings_14 pg_track_settings_14-2.1.0-1.rhel8.aarch64.rpm pgdg 2.1.0 16.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_track_settings_14-2.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_track_settings_14 pg_track_settings_14-2.1.2-1.rhel9.x86_64.rpm pgdg 2.1.2 16.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_track_settings_14-2.1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_track_settings_14 pg_track_settings_14-2.1.0-1.rhel9.x86_64.rpm pgdg 2.1.0 15.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_track_settings_14-2.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_track_settings_14 pg_track_settings_14-2.1.2-1.rhel9.aarch64.rpm pgdg 2.1.2 15.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_track_settings_14-2.1.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_track_settings_14 pg_track_settings_14-2.1.0-1.rhel9.aarch64.rpm pgdg 2.1.0 15.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_track_settings_14-2.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_track_settings_14 pg_track_settings_14-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_track_settings_14-2.1.2-3PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pg_track_settings_14 pg_track_settings_14-2.1.2-3PGDG.rhel10.noarch.rpm pgdg 2.1.2 16.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_track_settings_14-2.1.2-3PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg12+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg12+1_all.deb
@ d13.x86_64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg13+1_all.deb pgdg 2.1.2 9.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg13+1_all.deb
@ u22.x86_64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u22.aarch64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg22.04+1_all.deb
@ u24.x86_64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg24.04+1_all.deb
@ u26.x86_64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
@ u26.aarch64 14 postgresql-14-pg-track-settings postgresql-14-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb pgdg 2.1.2 9.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-track-settings/postgresql-14-pg-track-settings_2.1.2-5.pgdg26.04+1_all.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_track_settings` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_track_settings;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_track_settings -v 18  # PG 18
pig ext install -y pg_track_settings -v 17  # PG 17
pig ext install -y pg_track_settings -v 16  # PG 16
pig ext install -y pg_track_settings -v 15  # PG 15
pig ext install -y pg_track_settings -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_track_settings_18       # PG 18
dnf install -y pg_track_settings_17       # PG 17
dnf install -y pg_track_settings_16       # PG 16
dnf install -y pg_track_settings_15       # PG 15
dnf install -y pg_track_settings_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-track-settings   # PG 18
apt install -y postgresql-17-pg-track-settings   # PG 17
apt install -y postgresql-16-pg-track-settings   # PG 16
apt install -y postgresql-15-pg-track-settings   # PG 15
apt install -y postgresql-14-pg-track-settings   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_track_settings;
```




## 用法

> [pg_track_settings: 追踪 PostgreSQL 配置变更](https://github.com/rjuju/pg_track_settings)

pg_track_settings 记录 PostgreSQL 配置随时间的变更，追踪全局设置（`pg_settings`）和按角色/数据库的覆盖设置（`pg_db_role_setting`）。

### 采集快照

定期调用（通过 cron 或 PoWA）以捕获当前设置：

```sql
SELECT pg_track_settings_snapshot();
```

### 查看某一时间点的设置

```sql
-- 指定时间的所有设置
SELECT * FROM pg_track_settings('2024-01-15 10:00:00');

-- 指定时间的所有覆盖（按角色/数据库）设置
SELECT * FROM pg_track_db_role_settings('2024-01-15 10:00:00');
```

### 比较两个时间点的设置

```sql
-- 查看最近一小时内的变更
SELECT * FROM pg_track_settings_diff(now() - interval '1 hour', now());

-- 比较覆盖设置
SELECT * FROM pg_track_db_role_settings_diff(now() - interval '1 hour', now());
```

### 查看变更历史

```sql
-- 特定设置的历史
SELECT * FROM pg_track_settings_log('work_mem');

-- 覆盖设置的历史
SELECT * FROM pg_track_db_role_settings_log('work_mem');

-- PostgreSQL 重启历史
SELECT * FROM pg_reboot;
```

### 重置历史

```sql
SELECT pg_track_settings_reset();
```

### 函数摘要

| 函数 | 描述 |
|----------|-------------|
| `pg_track_settings_snapshot()` | 捕获当前设置 |
| `pg_track_settings(timestamptz)` | 指定时间的所有设置 |
| `pg_track_settings_diff(timestamptz, timestamptz)` | 两个时间点之间变更的设置 |
| `pg_track_settings_log(text)` | 特定设置的历史 |
| `pg_track_db_role_settings(timestamptz)` | 指定时间的覆盖设置 |
| `pg_track_db_role_settings_diff(timestamptz, timestamptz)` | 覆盖设置的变更 |
| `pg_track_db_role_settings_log(text)` | 特定覆盖设置的历史 |
| `pg_track_settings_reset()` | 清除所有历史 |

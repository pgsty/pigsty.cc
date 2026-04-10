---
title: "pg_ivm"
linkTitle: "pg_ivm"
description: "增量维护的物化视图"
weight: 2840
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/sraoss/pg_ivm">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">sraoss/pg_ivm</div>
    <div class="ext-card__desc">https://github.com/sraoss/pg_ivm</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_ivm-1.13.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_ivm-1.13.tar.gz</div>
    <div class="ext-card__desc">pg_ivm-1.13.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_ivm`**](/ext/e/pg_ivm) | `1.13` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2840  | [**`pg_ivm`**](/ext/e/pg_ivm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> deb takeover by pgdg since 2026-01


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.13` | {{< pgvers "18,17,16,15,14" >}} | `pg_ivm` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.13` | {{< pgvers "18,17,16,15,14" >}} | `pg_ivm_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.13` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-ivm` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.14 4 | AVAIL PIGSTY 1.14 6 | AVAIL PIGSTY 1.14 7 | AVAIL PIGSTY 1.14 12 | AVAIL PIGSTY 1.14 16 |
| el8.aarch64 | AVAIL PIGSTY 1.14 4 | AVAIL PIGSTY 1.14 6 | AVAIL PIGSTY 1.14 7 | AVAIL PIGSTY 1.14 12 | AVAIL PIGSTY 1.14 12 |
| el9.x86_64 | AVAIL PIGSTY 1.14 4 | AVAIL PIGSTY 1.14 6 | AVAIL PIGSTY 1.14 7 | AVAIL PIGSTY 1.14 12 | AVAIL PIGSTY 1.14 15 |
| el9.aarch64 | AVAIL PIGSTY 1.14 4 | AVAIL PIGSTY 1.14 6 | AVAIL PIGSTY 1.14 7 | AVAIL PIGSTY 1.14 12 | AVAIL PIGSTY 1.14 12 |
| el10.x86_64 | AVAIL PIGSTY 1.14 4 | AVAIL PIGSTY 1.14 5 | AVAIL PIGSTY 1.14 5 | AVAIL PIGSTY 1.14 5 | AVAIL PIGSTY 1.14 5 |
| el10.aarch64 | AVAIL PIGSTY 1.14 4 | AVAIL PIGSTY 1.14 5 | AVAIL PIGSTY 1.14 5 | AVAIL PIGSTY 1.14 5 | AVAIL PIGSTY 1.14 5 |
| d12.x86_64 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 |
| d12.aarch64 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 |
| d13.x86_64 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 |
| d13.aarch64 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 |
| u22.x86_64 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 |
| u22.aarch64 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 |
| u24.x86_64 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 |
| u24.aarch64 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 | AVAIL PIGSTY 1.14 2 |
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PIGSTY.el8.x86_64.rpm pigsty 1.14 57.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_18-1.14-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 50.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel8.x86_64.rpm pgdg 1.12 43.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.12-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PIGSTY.el8.aarch64.rpm pigsty 1.14 55.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_18-1.14-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 47.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel8.aarch64.rpm pgdg 1.12 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.12-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PIGSTY.el9.x86_64.rpm pigsty 1.14 57.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_18-1.14-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel9.x86_64.rpm pgdg 1.12 43.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.12-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PIGSTY.el9.aarch64.rpm pigsty 1.14 56.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_18-1.14-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel9.aarch64.rpm pgdg 1.12 42.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.12-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PIGSTY.el10.x86_64.rpm pigsty 1.14 58.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_18-1.14-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 50.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel10.x86_64.rpm pgdg 1.12 44.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.12-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PIGSTY.el10.aarch64.rpm pigsty 1.14 57.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_18-1.14-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel10.aarch64.rpm pgdg 1.12 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.12-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb pigsty 1.14 119.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 118.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb pigsty 1.14 116.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 115.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb pigsty 1.14 119.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 118.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb pigsty 1.14 116.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 114.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb pigsty 1.14 130.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 121.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb pigsty 1.14 128.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 117.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.14-1PIGSTY~noble_amd64.deb pigsty 1.14 125.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.14-1PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 118.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.14-1PIGSTY~noble_arm64.deb pigsty 1.14 123.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.14-1PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 114.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PIGSTY.el8.x86_64.rpm pigsty 1.14 57.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_17-1.14-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel8.x86_64.rpm pgdg 1.11 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel8.x86_64.rpm pgdg 1.10 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.9 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.9-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PIGSTY.el8.aarch64.rpm pigsty 1.14 55.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_17-1.14-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 47.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel8.aarch64.rpm pgdg 1.11 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel8.aarch64.rpm pgdg 1.10 40.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.9 38.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.9-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PIGSTY.el9.x86_64.rpm pigsty 1.14 57.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_17-1.14-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel9.x86_64.rpm pgdg 1.11 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel9.x86_64.rpm pgdg 1.10 42.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.9 41.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.9-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PIGSTY.el9.aarch64.rpm pigsty 1.14 56.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_17-1.14-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel9.aarch64.rpm pgdg 1.11 41.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel9.aarch64.rpm pgdg 1.10 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.9 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.9-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PIGSTY.el10.x86_64.rpm pigsty 1.14 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_17-1.14-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 50.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel10.x86_64.rpm pgdg 1.11 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.11-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel10.x86_64.rpm pgdg 1.10 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PIGSTY.el10.aarch64.rpm pigsty 1.14 57.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_17-1.14-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel10.aarch64.rpm pgdg 1.11 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.11-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel10.aarch64.rpm pgdg 1.10 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.10-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb pigsty 1.14 119.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 118.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb pigsty 1.14 116.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 115.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb pigsty 1.14 119.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 118.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb pigsty 1.14 115.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 114.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb pigsty 1.14 151.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 141.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb pigsty 1.14 148.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 137.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.14-1PIGSTY~noble_amd64.deb pigsty 1.14 124.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.14-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 118.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.14-1PIGSTY~noble_arm64.deb pigsty 1.14 122.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.14-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 114.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PIGSTY.el8.x86_64.rpm pigsty 1.14 57.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_16-1.14-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel8.x86_64.rpm pgdg 1.11 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel8.x86_64.rpm pgdg 1.10 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 41.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PIGSTY.el8.aarch64.rpm pigsty 1.14 55.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_16-1.14-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 47.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel8.aarch64.rpm pgdg 1.11 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel8.aarch64.rpm pgdg 1.10 40.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 37.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PIGSTY.el9.x86_64.rpm pigsty 1.14 57.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_16-1.14-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel9.x86_64.rpm pgdg 1.11 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel9.x86_64.rpm pgdg 1.10 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 40.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PIGSTY.el9.aarch64.rpm pigsty 1.14 56.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_16-1.14-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 48.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 48.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel9.aarch64.rpm pgdg 1.11 42.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel9.aarch64.rpm pgdg 1.10 41.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 39.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 41.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PIGSTY.el10.x86_64.rpm pigsty 1.14 58.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_16-1.14-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 50.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel10.x86_64.rpm pgdg 1.11 44.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.11-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel10.x86_64.rpm pgdg 1.10 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PIGSTY.el10.aarch64.rpm pigsty 1.14 57.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_16-1.14-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel10.aarch64.rpm pgdg 1.11 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.11-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel10.aarch64.rpm pgdg 1.10 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.10-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb pigsty 1.14 119.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 118.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb pigsty 1.14 116.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 115.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb pigsty 1.14 119.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 118.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb pigsty 1.14 115.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 114.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb pigsty 1.14 150.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 140.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb pigsty 1.14 147.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 136.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.14-1PIGSTY~noble_amd64.deb pigsty 1.14 124.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.14-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 118.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.14-1PIGSTY~noble_arm64.deb pigsty 1.14 122.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.14-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 114.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PIGSTY.el8.x86_64.rpm pigsty 1.14 58.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_15-1.14-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 49.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel8.x86_64.rpm pgdg 1.11 43.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel8.x86_64.rpm pgdg 1.10 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.6 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.5.1-1.rhel8.x86_64.rpm pgdg 1.5.1 39.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.5.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.5-1.rhel8.x86_64.rpm pgdg 1.5 39.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.4-1.rhel8.x86_64.rpm pgdg 1.4 38.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.3-1.rhel8.x86_64.rpm pgdg 1.3 37.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PIGSTY.el8.aarch64.rpm pigsty 1.14 56.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_15-1.14-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 47.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel8.aarch64.rpm pgdg 1.11 41.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel8.aarch64.rpm pgdg 1.10 40.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 38.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 40.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.6 39.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.5.1-1.rhel8.aarch64.rpm pgdg 1.5.1 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.5.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.5-1.rhel8.aarch64.rpm pgdg 1.5 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.4-1.rhel8.aarch64.rpm pgdg 1.4 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.3-1.rhel8.aarch64.rpm pgdg 1.3 36.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PIGSTY.el9.x86_64.rpm pigsty 1.14 58.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_15-1.14-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel9.x86_64.rpm pgdg 1.11 44.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel9.x86_64.rpm pgdg 1.10 43.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 43.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.5.1-1.rhel9.x86_64.rpm pgdg 1.5.1 41.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.5.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.5-1.rhel9.x86_64.rpm pgdg 1.5 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.4-1.rhel9.x86_64.rpm pgdg 1.4 40.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.3-1.rhel9.x86_64.rpm pgdg 1.3 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.3-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PIGSTY.el9.aarch64.rpm pigsty 1.14 57.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_15-1.14-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel9.aarch64.rpm pgdg 1.11 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel9.aarch64.rpm pgdg 1.10 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 39.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6 42.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.5.1-1.rhel9.aarch64.rpm pgdg 1.5.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.5.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.5-1.rhel9.aarch64.rpm pgdg 1.5 39.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.4-1.rhel9.aarch64.rpm pgdg 1.4 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.3-1.rhel9.aarch64.rpm pgdg 1.3 38.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PIGSTY.el10.x86_64.rpm pigsty 1.14 59.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_15-1.14-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel10.x86_64.rpm pgdg 1.11 45.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.11-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel10.x86_64.rpm pgdg 1.10 44.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PIGSTY.el10.aarch64.rpm pigsty 1.14 57.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_15-1.14-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 50.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel10.aarch64.rpm pgdg 1.11 43.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.11-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel10.aarch64.rpm pgdg 1.10 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.10-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb pigsty 1.14 119.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 118.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb pigsty 1.14 115.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 115.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb pigsty 1.14 119.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 118.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb pigsty 1.14 115.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 114.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb pigsty 1.14 149.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 140.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb pigsty 1.14 147.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 136.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.14-1PIGSTY~noble_amd64.deb pigsty 1.14 124.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.14-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 118.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.14-1PIGSTY~noble_arm64.deb pigsty 1.14 123.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.14-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 115.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PIGSTY.el8.x86_64.rpm pigsty 1.14 87.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_14-1.14-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 78.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 78.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel8.x86_64.rpm pgdg 1.11 71.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel8.x86_64.rpm pgdg 1.10 71.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 68.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 71.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.6 71.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.5.1-1.rhel8.x86_64.rpm pgdg 1.5.1 69.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.5.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.5-1.rhel8.x86_64.rpm pgdg 1.5 69.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.4-1.rhel8.x86_64.rpm pgdg 1.4 68.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.3-1.rhel8.x86_64.rpm pgdg 1.3 67.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.2-1.rhel8.x86_64.rpm pgdg 1.2 66.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.1-1.rhel8.x86_64.rpm pgdg 1.1 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.0-.rhel8.x86_64.rpm pgdg 1.0 74.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.0-.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.0-alpha1.rhel8.x86_64.rpm pgdg 1.0 62.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.0-alpha1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PIGSTY.el8.aarch64.rpm pigsty 1.14 83.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_14-1.14-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 74.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 73.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel8.aarch64.rpm pgdg 1.11 67.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel8.aarch64.rpm pgdg 1.10 66.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 64.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 67.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.6 66.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.5.1-1.rhel8.aarch64.rpm pgdg 1.5.1 64.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.5.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.5-1.rhel8.aarch64.rpm pgdg 1.5 64.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.4-1.rhel8.aarch64.rpm pgdg 1.4 63.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.3-1.rhel8.aarch64.rpm pgdg 1.3 63.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PIGSTY.el9.x86_64.rpm pigsty 1.14 87.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_14-1.14-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 79.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 79.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel9.x86_64.rpm pgdg 1.11 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel9.x86_64.rpm pgdg 1.10 73.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 71.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 74.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6 74.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.5.1-1.rhel9.x86_64.rpm pgdg 1.5.1 72.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.5.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.5-1.rhel9.x86_64.rpm pgdg 1.5 72.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.4-1.rhel9.x86_64.rpm pgdg 1.4 71.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.3-1.rhel9.x86_64.rpm pgdg 1.3 71.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.2-1.rhel9.x86_64.rpm pgdg 1.2 69.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.1-1.rhel9.x86_64.rpm pgdg 1.1 34.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.0-.rhel9.x86_64.rpm pgdg 1.0 77.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.0-.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PIGSTY.el9.aarch64.rpm pigsty 1.14 85.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_14-1.14-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 77.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 77.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel9.aarch64.rpm pgdg 1.11 70.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel9.aarch64.rpm pgdg 1.10 70.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 68.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 71.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6 71.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.5.1-1.rhel9.aarch64.rpm pgdg 1.5.1 69.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.5.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.5-1.rhel9.aarch64.rpm pgdg 1.5 69.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.4-1.rhel9.aarch64.rpm pgdg 1.4 68.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.3-1.rhel9.aarch64.rpm pgdg 1.3 68.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PIGSTY.el10.x86_64.rpm pigsty 1.14 89.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_14-1.14-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 81.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 80.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel10.x86_64.rpm pgdg 1.11 74.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.11-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel10.x86_64.rpm pgdg 1.10 74.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PIGSTY.el10.aarch64.rpm pigsty 1.14 86.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_14-1.14-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 78.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 79.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel10.aarch64.rpm pgdg 1.11 72.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.11-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel10.aarch64.rpm pgdg 1.10 72.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.10-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb pigsty 1.14 209.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.14-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 209.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb pigsty 1.14 202.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.14-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 201.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb pigsty 1.14 209.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.14-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 208.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb pigsty 1.14 202.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.14-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 201.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb pigsty 1.14 253.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.14-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 238.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb pigsty 1.14 250.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.14-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 230.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.14-1PIGSTY~noble_amd64.deb pigsty 1.14 218.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.14-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 208.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.14-1PIGSTY~noble_arm64.deb pigsty 1.14 216.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.14-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 202.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_ivm` 扩展的 DEB 包：

```bash
pig build pkg pg_ivm         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_ivm` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_ivm;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_ivm -v 18  # PG 18
pig ext install -y pg_ivm -v 17  # PG 17
pig ext install -y pg_ivm -v 16  # PG 16
pig ext install -y pg_ivm -v 15  # PG 15
pig ext install -y pg_ivm -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_ivm_18       # PG 18
dnf install -y pg_ivm_17       # PG 17
dnf install -y pg_ivm_16       # PG 16
dnf install -y pg_ivm_15       # PG 15
dnf install -y pg_ivm_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-ivm   # PG 18
apt install -y postgresql-17-pg-ivm   # PG 17
apt install -y postgresql-16-pg-ivm   # PG 16
apt install -y postgresql-15-pg-ivm   # PG 15
apt install -y postgresql-14-pg-ivm   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_ivm';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_ivm;
```


## 用法

> [pg_ivm: PostgreSQL 增量视图维护](https://github.com/sraoss/pg_ivm)

`pg_ivm` 扩展提供增量视图维护（IVM）功能：通过只计算并应用增量变更，而不是像 `REFRESH MATERIALIZED VIEW` 那样从头重算，从而更新物化视图。视图会在基表被修改时通过 AFTER 触发器立即更新。

```sql
CREATE EXTENSION pg_ivm;
```

### 配置

将 `pg_ivm` 加入预加载库，以便正确维护：

```ini
shared_preload_libraries = 'pg_ivm'
```

### 函数

#### create_immv

```sql
pgivm.create_immv(immv_name text, view_definition text) RETURNS bigint
```

创建一个增量可维护物化视图（IMMV）。系统会自动创建触发器来保持视图更新；如果条件允许，还会自动创建唯一索引。

```sql
SELECT pgivm.create_immv('myview', 'SELECT * FROM mytab');
```

#### refresh_immv

```sql
pgivm.refresh_immv(immv_name text, with_data bool) RETURNS bigint
```

完全替换 IMMV 内容。`with_data = false` 时，IMMV 会变为空集并删除触发器；`with_data = true` 时，会重新创建触发器和索引。

```sql
SELECT pgivm.refresh_immv('myview', true);
```

#### get_immv_def

```sql
pgivm.get_immv_def(immv regclass) RETURNS text
```

返回 IMMV 的重建版 `SELECT` 命令。

### IMMV 元数据目录

`pgivm.pg_ivm_immv` 目录保存 IMMV 信息：

| 列 | 类型 | 描述 |
|----|------|------|
| `immvrelid` | regclass | IMMV 的 OID |
| `viewdef` | text | 视图定义的查询树 |
| `ispopulated` | bool | 当前 IMMV 是否已填充 |

### 示例

创建带聚合的 IMMV：

```sql
SELECT pgivm.create_immv('immv_agg',
    'SELECT bid, count(*), sum(abalance), avg(abalance)
     FROM pgbench_accounts JOIN pgbench_branches USING(bid) GROUP BY bid');
```

基表更新会自动反映到视图中：

```sql
UPDATE pgbench_accounts SET abalance = abalance + 1000 WHERE aid = 4112345;
SELECT * FROM immv_agg WHERE bid = 42;  -- 聚合值已自动更新
```

列出所有 IMMV：

```sql
SELECT immvrelid AS immv, pgivm.get_immv_def(immvrelid) AS def
FROM pgivm.pg_ivm_immv;
```

用 `DROP TABLE` 删除 IMMV：

```sql
DROP TABLE myview;
```

### 禁用/启用维护

在批量修改前先禁用即时维护，再刷新：

```sql
SELECT pgivm.refresh_immv('myview', false);   -- 禁用
-- ... 批量修改 ...
SELECT pgivm.refresh_immv('myview', true);    -- 刷新并重新启用
```

### 支持的查询特性

- 内连接和外连接（包括自连接）
- `DISTINCT` 子句
- 聚合函数：`count`、`sum`、`avg`、`min`、`max`
- `FROM` 子句中的简单子查询
- `WHERE` 子句中的 `EXISTS` 子查询
- 简单 CTE（`WITH` 查询）
- `GROUP BY` 子句

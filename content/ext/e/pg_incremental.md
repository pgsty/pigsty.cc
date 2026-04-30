---
title: "pg_incremental"
linkTitle: "pg_incremental"
description: "增量处理流式事件"
weight: 2850
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrunchyData/pg_incremental">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrunchyData/pg_incremental</div>
    <div class="ext-card__desc">https://github.com/CrunchyData/pg_incremental</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_incremental-1.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_incremental-1.5.0.tar.gz</div>
    <div class="ext-card__desc">pg_incremental-1.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_incremental`**](/ext/e/pg_incremental) | `1.5.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2850  | [**`pg_incremental`**](/ext/e/pg_incremental) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pg_cron is optional since v1.3 and only required for scheduled pipelines.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.0` | {{< pgvers "18,17,16" >}} | `pg_incremental` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.0` | {{< pgvers "18,17,16" >}} | `pg_incremental_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-incremental` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | AVAIL PIGSTY 1.5.0 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | AVAIL PIGSTY 1.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el8.x86_64.rpm pigsty 1.5.0 33.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_incremental_18-1.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el8.aarch64.rpm pigsty 1.5.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_incremental_18-1.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el9.x86_64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_incremental_18-1.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el9.aarch64.rpm pigsty 1.5.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_incremental_18-1.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el10.x86_64.rpm pigsty 1.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_incremental_18-1.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el10.aarch64.rpm pigsty 1.5.0 31.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_incremental_18-1.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.5.0-1PIGSTY~bookworm_amd64.deb pigsty 1.5.0 55.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.5.0-1PIGSTY~bookworm_arm64.deb pigsty 1.5.0 54.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.5.0-1PIGSTY~trixie_amd64.deb pigsty 1.5.0 55.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.5.0-1PIGSTY~trixie_arm64.deb pigsty 1.5.0 54.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.5.0-1PIGSTY~jammy_amd64.deb pigsty 1.5.0 57.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.5.0-1PIGSTY~jammy_arm64.deb pigsty 1.5.0 56.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.5.0-1PIGSTY~noble_amd64.deb pigsty 1.5.0 56.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.5.0-1PIGSTY~noble_arm64.deb pigsty 1.5.0 55.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.5.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el8.x86_64.rpm pigsty 1.5.0 33.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_incremental_17-1.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el8.aarch64.rpm pigsty 1.5.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_incremental_17-1.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el9.x86_64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_incremental_17-1.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el9.aarch64.rpm pigsty 1.5.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_incremental_17-1.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el10.x86_64.rpm pigsty 1.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_incremental_17-1.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el10.aarch64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_incremental_17-1.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.5.0-1PIGSTY~bookworm_amd64.deb pigsty 1.5.0 55.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.5.0-1PIGSTY~bookworm_arm64.deb pigsty 1.5.0 54.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.5.0-1PIGSTY~trixie_amd64.deb pigsty 1.5.0 55.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.5.0-1PIGSTY~trixie_arm64.deb pigsty 1.5.0 54.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.5.0-1PIGSTY~jammy_amd64.deb pigsty 1.5.0 62.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.5.0-1PIGSTY~jammy_arm64.deb pigsty 1.5.0 61.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.5.0-1PIGSTY~noble_amd64.deb pigsty 1.5.0 56.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.5.0-1PIGSTY~noble_arm64.deb pigsty 1.5.0 55.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.5.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el8.x86_64.rpm pigsty 1.5.0 33.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_incremental_16-1.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el8.aarch64.rpm pigsty 1.5.0 33.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_incremental_16-1.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el9.x86_64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_incremental_16-1.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el9.aarch64.rpm pigsty 1.5.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_incremental_16-1.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el10.x86_64.rpm pigsty 1.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_incremental_16-1.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el10.aarch64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_incremental_16-1.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.5.0-1PIGSTY~bookworm_amd64.deb pigsty 1.5.0 55.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.5.0-1PIGSTY~bookworm_arm64.deb pigsty 1.5.0 54.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.5.0-1PIGSTY~trixie_amd64.deb pigsty 1.5.0 55.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.5.0-1PIGSTY~trixie_arm64.deb pigsty 1.5.0 54.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.5.0-1PIGSTY~jammy_amd64.deb pigsty 1.5.0 62.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.5.0-1PIGSTY~jammy_arm64.deb pigsty 1.5.0 61.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.5.0-1PIGSTY~noble_amd64.deb pigsty 1.5.0 56.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.5.0-1PIGSTY~noble_arm64.deb pigsty 1.5.0 55.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.5.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_incremental` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_incremental         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_incremental` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_incremental;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_incremental -v 18  # PG 18
pig ext install -y pg_incremental -v 17  # PG 17
pig ext install -y pg_incremental -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_incremental_18       # PG 18
dnf install -y pg_incremental_17       # PG 17
dnf install -y pg_incremental_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-incremental   # PG 18
apt install -y postgresql-17-pg-incremental   # PG 17
apt install -y postgresql-16-pg-incremental   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_incremental;
```

## 用法

- 来源：[README](https://github.com/CrunchyData/pg_incremental/blob/main/README.md)，[v1.5.0 release](https://github.com/CrunchyData/pg_incremental/releases/tag/v1.5.0)

`pg_incremental` 为 append-only table 和 file feed 定义 exactly-once 增量流水线。上游文档记录了三类 pipeline：sequence、time-interval 和 file-list。

### 安装与调度模型

上游 README 仍然使用基于 `pg_cron` 的调度模型，并通过下面的方式安装：

```sql
CREATE EXTENSION pg_incremental CASCADE;
```

除非显式指定 `execute_immediately := false`，否则 pipeline 会在创建时立刻运行一次，之后继续按 `pg_cron` 调度执行。README 还说明，即使没有新数据，每次调度执行也会出现在 `cron.job_run_details` 中。

### Sequence Pipelines

sequence pipeline 用于处理可安全消费的序列值范围：

```sql
SELECT incremental.create_sequence_pipeline('event-aggregation', 'events', $$
  INSERT INTO events_agg
  SELECT date_trunc('day', event_time), count(*)
  FROM events
  WHERE event_id BETWEEN $1 AND $2
  GROUP BY 1
  ON CONFLICT (day) DO UPDATE
  SET event_count = events_agg.event_count + excluded.event_count
$$);
```

README 记录了 `max_batch_size`，可用于限制每次运行处理的 sequence ID 数量。

### Time-Interval Pipelines

当命令希望把 `$1` 和 `$2` 作为时间区间边界接收时，可以使用时间窗口：

```sql
SELECT incremental.create_time_interval_pipeline('event-aggregation', '1 day', $$
  INSERT INTO events_agg
  SELECT event_time::date, count(DISTINCT event_id)
  FROM events
  WHERE event_time >= $1 AND event_time < $2
  GROUP BY 1
$$);
```

对于导出类任务，README 记录了 `batched := false`，这样每个时间区间都会单独执行。

### File-List Pipelines

file-list pipeline 用于处理新发现的文件：

```sql
SELECT incremental.create_file_list_pipeline('event-import', 's3://mybucket/events/*.csv', $$
  SELECT import_events($1)
$$);
```

v1.5.0 release 为 file-list pipeline 增加了 `max_batches_per_run`。README 还记录了 `incremental.skip_file()`，可将坏文件永久标记为已处理。

### 运维与监控

README 记录了以下接口：

- `CALL incremental.execute_pipeline(name)`：若存在新工作则执行一次。
- `SELECT incremental.reset_pipeline(name)`：重置进度。
- `SELECT incremental.drop_pipeline(name)`：删除 pipeline。
- `incremental.sequence_pipelines`、`incremental.time_interval_pipelines`、`incremental.file_list_pipelines` 与 `incremental.processed_files` 等视图和表。

v1.5.0 release note 还提到修复了在未安装 `pg_cron` 环境下的 `DROP EXTENSION` 问题。

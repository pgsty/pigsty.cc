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
  <a class="ext-card ext-card--source" href="pg_incremental-1.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_incremental-1.4.1.tar.gz</div>
    <div class="ext-card__desc">pg_incremental-1.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_incremental`**](/ext/e/pg_incremental) | `1.4.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2850  | [**`pg_incremental`**](/ext/e/pg_incremental) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16" >}} | `pg_incremental` | `pg_cron` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16" >}} | `pg_incremental_$v` | `pg_cron_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-incremental` | `postgresql-$v-cron` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | AVAIL PIGSTY 1.4.1 2 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_incremental_18 pg_incremental_18-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 31.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_incremental_18-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_incremental_18 pg_incremental_18-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 31.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_incremental_18-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 30.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_incremental_18-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 29.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_incremental_18-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 30.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_incremental_18-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 30.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_incremental_18-1.4.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 53.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 52.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 53.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 52.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 55.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 54.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 54.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 53.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_incremental_17 pg_incremental_17-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 31.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_incremental_17-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_incremental_17 pg_incremental_17-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 31.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_incremental_17-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 30.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_incremental_17-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 29.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_incremental_17-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 30.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_incremental_17-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 30.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_incremental_17-1.4.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 53.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 52.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 53.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 52.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 59.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 59.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 54.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 53.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.4.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_incremental_16 pg_incremental_16-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 31.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_incremental_16-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_incremental_16 pg_incremental_16-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 31.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_incremental_16-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 30.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_incremental_16-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 29.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_incremental_16-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 30.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_incremental_16-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 30.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_incremental_16-1.4.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.4.1-1PIGSTY~bookworm_amd64.deb pigsty 1.4.1 53.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.4.1-1PIGSTY~bookworm_arm64.deb pigsty 1.4.1 52.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.4.1-1PIGSTY~trixie_amd64.deb pigsty 1.4.1 53.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.4.1-1PIGSTY~trixie_arm64.deb pigsty 1.4.1 52.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.4.1-1PIGSTY~jammy_amd64.deb pigsty 1.4.1 59.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.4.1-1PIGSTY~jammy_arm64.deb pigsty 1.4.1 59.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.4.1-1PIGSTY~noble_amd64.deb pigsty 1.4.1 54.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.4.1-1PIGSTY~noble_arm64.deb pigsty 1.4.1 53.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.4.1-1PIGSTY~noble_arm64.deb
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
CREATE EXTENSION pg_incremental CASCADE;  -- 依赖: pg_cron
```

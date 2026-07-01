---
title: "documentdb"
linkTitle: "documentdb"
description: "微软DocumentDB的API层"
weight: 9000
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/documentdb/documentdb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">documentdb/documentdb</div>
    <div class="ext-card__desc">https://github.com/documentdb/documentdb</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/documentdb-0.113-0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">documentdb-0.113-0.tar.gz</div>
    <div class="ext-card__desc">documentdb-0.113-0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`documentdb`**](/ext/e/documentdb) | `0.113` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9000  | [**`documentdb`**](/ext/e/documentdb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9010  | [**`documentdb_core`**](/ext/e/documentdb_core) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9020  | [**`documentdb_distributed`**](/ext/e/documentdb_distributed) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9030  | [**`documentdb_extended_rum`**](/ext/e/documentdb_extended_rum) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`documentdb_core`](/ext/e/documentdb_core) [`pg_cron`](/ext/e/pg_cron) [`postgis`](/ext/e/postgis) [`tsm_system_rows`](/ext/e/tsm_system_rows) [`vector`](/ext/e/vector) [`mongo_fdw`](/ext/e/mongo_fdw) [`wal2mongo`](/ext/e/wal2mongo) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb_distributed`](/ext/e/documentdb_distributed) [`documentdb_extended_rum`](/ext/e/documentdb_extended_rum) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.113` | {{< pgvers "18,17,16,15" >}} | `documentdb` | `documentdb_core`, `pg_cron`, `postgis`, `tsm_system_rows`, `vector` |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.113` | {{< pgvers "18,17,16,15" >}} | `documentdb_$v` | `postgresql$v-contrib`, `pg_cron_$v`, `pgvector_$v`, `rum_$v`, `postgis36_$v` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.113` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-documentdb` | `postgresql-$v-cron`, `postgresql-$v-pgvector`, `postgresql-$v-rum`, `postgresql-$v-postgis-3` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | AVAIL PIGSTY 0.113 1 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | AVAIL PGDG 0.113 4 | MISS PIGSTY - 0 |
@ el8.x86_64 18 documentdb_18 documentdb_18-0.113-0PIGSTY.el8.x86_64.rpm pigsty 0.113 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/documentdb_18-0.113-0PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 documentdb_18 documentdb_18-0.113-0PIGSTY.el8.aarch64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/documentdb_18-0.113-0PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 documentdb_18 documentdb_18-0.113-0PIGSTY.el9.x86_64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/documentdb_18-0.113-0PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 documentdb_18 documentdb_18-0.113-0PIGSTY.el9.aarch64.rpm pigsty 0.113 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/documentdb_18-0.113-0PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 documentdb_18 documentdb_18-0.113-0PIGSTY.el10.x86_64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/documentdb_18-0.113-0PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 documentdb_18 documentdb_18-0.113-0PIGSTY.el10.aarch64.rpm pigsty 0.113 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/documentdb_18-0.113-0PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~bookworm_amd64.deb pigsty 0.113 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~bookworm_arm64.deb pigsty 0.113 5.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0-1.pgdg13+1_amd64.deb pgdg 0.113 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~trixie_amd64.deb pigsty 0.113 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.112-0-1.pgdg13+1_amd64.deb pgdg 0.112 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.112-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.108-0-1.pgdg13+1_amd64.deb pgdg 0.108 4.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.108-0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0-1.pgdg13+1_arm64.deb pgdg 0.113 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~trixie_arm64.deb pigsty 0.113 5.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.112-0-1.pgdg13+1_arm64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.112-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.108-0-1.pgdg13+1_arm64.deb pgdg 0.108 4.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.108-0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~jammy_amd64.deb pigsty 0.113 5.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~jammy_arm64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~noble_amd64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~noble_arm64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~resolute_amd64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.108-0-1.pgdg26.04+1_amd64.deb pgdg 0.108 4.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.108-0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb pgdg 0.113 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0PIGSTY~resolute_arm64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb pgdg 0.112 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.108-0-1.pgdg26.04+1_arm64.deb pgdg 0.108 4.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.108-0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 documentdb_17 documentdb_17-0.113-0PIGSTY.el8.x86_64.rpm pigsty 0.113 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/documentdb_17-0.113-0PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 documentdb_17 documentdb_17-0.113-0PIGSTY.el8.aarch64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/documentdb_17-0.113-0PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 documentdb_17 documentdb_17-0.113-0PIGSTY.el9.x86_64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/documentdb_17-0.113-0PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 documentdb_17 documentdb_17-0.113-0PIGSTY.el9.aarch64.rpm pigsty 0.113 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/documentdb_17-0.113-0PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 documentdb_17 documentdb_17-0.113-0PIGSTY.el10.x86_64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/documentdb_17-0.113-0PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 documentdb_17 documentdb_17-0.113-0PIGSTY.el10.aarch64.rpm pigsty 0.113 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/documentdb_17-0.113-0PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~bookworm_amd64.deb pigsty 0.113 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~bookworm_arm64.deb pigsty 0.113 5.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0-1.pgdg13+1_amd64.deb pgdg 0.113 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~trixie_amd64.deb pigsty 0.113 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.112-0-1.pgdg13+1_amd64.deb pgdg 0.112 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.112-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.108-0-1.pgdg13+1_amd64.deb pgdg 0.108 4.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.108-0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0-1.pgdg13+1_arm64.deb pgdg 0.113 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~trixie_arm64.deb pigsty 0.113 5.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.112-0-1.pgdg13+1_arm64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.112-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.108-0-1.pgdg13+1_arm64.deb pgdg 0.108 4.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.108-0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~jammy_amd64.deb pigsty 0.113 5.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~jammy_arm64.deb pigsty 0.113 5.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~noble_amd64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~noble_arm64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~resolute_amd64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.108-0-1.pgdg26.04+1_amd64.deb pgdg 0.108 4.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.108-0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb pgdg 0.113 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0PIGSTY~resolute_arm64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb pgdg 0.112 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.108-0-1.pgdg26.04+1_arm64.deb pgdg 0.108 4.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.108-0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 documentdb_16 documentdb_16-0.113-0PIGSTY.el8.x86_64.rpm pigsty 0.113 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/documentdb_16-0.113-0PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 documentdb_16 documentdb_16-0.113-0PIGSTY.el8.aarch64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/documentdb_16-0.113-0PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 documentdb_16 documentdb_16-0.113-0PIGSTY.el9.x86_64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/documentdb_16-0.113-0PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 documentdb_16 documentdb_16-0.113-0PIGSTY.el9.aarch64.rpm pigsty 0.113 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/documentdb_16-0.113-0PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 documentdb_16 documentdb_16-0.113-0PIGSTY.el10.x86_64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/documentdb_16-0.113-0PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 documentdb_16 documentdb_16-0.113-0PIGSTY.el10.aarch64.rpm pigsty 0.113 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/documentdb_16-0.113-0PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~bookworm_amd64.deb pigsty 0.113 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~bookworm_arm64.deb pigsty 0.113 5.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0-1.pgdg13+1_amd64.deb pgdg 0.113 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~trixie_amd64.deb pigsty 0.113 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.112-0-1.pgdg13+1_amd64.deb pgdg 0.112 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.112-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.108-0-1.pgdg13+1_amd64.deb pgdg 0.108 4.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.108-0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0-1.pgdg13+1_arm64.deb pgdg 0.113 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~trixie_arm64.deb pigsty 0.113 5.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.112-0-1.pgdg13+1_arm64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.112-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.108-0-1.pgdg13+1_arm64.deb pgdg 0.108 4.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.108-0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~jammy_amd64.deb pigsty 0.113 5.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~jammy_arm64.deb pigsty 0.113 5.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~noble_amd64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~noble_arm64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~resolute_amd64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.108-0-1.pgdg26.04+1_amd64.deb pgdg 0.108 4.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.108-0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb pgdg 0.113 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0PIGSTY~resolute_arm64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb pgdg 0.112 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.108-0-1.pgdg26.04+1_arm64.deb pgdg 0.108 4.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.108-0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 documentdb_15 documentdb_15-0.113-0PIGSTY.el8.x86_64.rpm pigsty 0.113 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/documentdb_15-0.113-0PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 documentdb_15 documentdb_15-0.113-0PIGSTY.el8.aarch64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/documentdb_15-0.113-0PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 documentdb_15 documentdb_15-0.113-0PIGSTY.el9.x86_64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/documentdb_15-0.113-0PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 documentdb_15 documentdb_15-0.113-0PIGSTY.el9.aarch64.rpm pigsty 0.113 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/documentdb_15-0.113-0PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 documentdb_15 documentdb_15-0.113-0PIGSTY.el10.x86_64.rpm pigsty 0.113 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/documentdb_15-0.113-0PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 documentdb_15 documentdb_15-0.113-0PIGSTY.el10.aarch64.rpm pigsty 0.113 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/documentdb_15-0.113-0PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~bookworm_amd64.deb pigsty 0.113 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~bookworm_arm64.deb pigsty 0.113 5.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0-1.pgdg13+1_amd64.deb pgdg 0.113 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~trixie_amd64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.112-0-1.pgdg13+1_amd64.deb pgdg 0.112 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.112-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.108-0-1.pgdg13+1_amd64.deb pgdg 0.108 4.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.108-0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0-1.pgdg13+1_arm64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~trixie_arm64.deb pigsty 0.113 5.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.112-0-1.pgdg13+1_arm64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.112-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.108-0-1.pgdg13+1_arm64.deb pgdg 0.108 4.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.108-0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~jammy_amd64.deb pigsty 0.113 6.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~jammy_arm64.deb pigsty 0.113 5.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~noble_amd64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~noble_arm64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~resolute_amd64.deb pigsty 0.113 5.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb pgdg 0.112 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.108-0-1.pgdg26.04+1_amd64.deb pgdg 0.108 4.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.108-0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb pgdg 0.113 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0PIGSTY~resolute_arm64.deb pigsty 0.113 5.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb pgdg 0.112 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.108-0-1.pgdg26.04+1_arm64.deb pgdg 0.108 4.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.108-0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `documentdb` 扩展的 RPM / DEB 包：

```bash
pig build pkg documentdb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `documentdb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install documentdb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y documentdb -v 18  # PG 18
pig ext install -y documentdb -v 17  # PG 17
pig ext install -y documentdb -v 16  # PG 16
pig ext install -y documentdb -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y documentdb_18       # PG 18
dnf install -y documentdb_17       # PG 17
dnf install -y documentdb_16       # PG 16
dnf install -y documentdb_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-documentdb   # PG 18
apt install -y postgresql-17-documentdb   # PG 17
apt install -y postgresql-16-documentdb   # PG 16
apt install -y postgresql-15-documentdb   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_documentdb, pg_documentdb_core, pg_cron';
```


**创建扩展**：

```sql
CREATE EXTENSION documentdb CASCADE;  -- 依赖: documentdb_core, pg_cron, postgis, tsm_system_rows, vector
```

## 用法

来源：[README](https://github.com/documentdb/documentdb/blob/v0.113-0/README.md)、[CHANGELOG](https://github.com/documentdb/documentdb/blob/v0.113-0/CHANGELOG.md)、[documentdb.control](https://github.com/documentdb/documentdb/blob/v0.113-0/pg_documentdb/documentdb.control)、[documentdb_core.control](https://github.com/documentdb/documentdb/blob/v0.113-0/pg_documentdb_core/documentdb_core.control)、[documentdb_extended_rum.control](https://github.com/documentdb/documentdb/blob/v0.113-0/pg_documentdb_extended_rum/documentdb_extended_rum.control)

`documentdb` 是以 PostgreSQL 扩展实现的 MongoDB 兼容文档数据库。它在 PostgreSQL 中加入 BSON 存储和 API，并可通过可选 gateway 层服务 MongoDB wire-protocol 客户端。FerretDB 2.0+ 可以使用 DocumentDB 作为后端。

### 组件

公开扩展接口拆分为多个相关扩展：

- `documentdb_core`：BSON 数据类型与底层 BSON 操作。
- `documentdb`：面向文档 CRUD 与查询行为的公开 API。
- `documentdb_extended_rum`：DocumentDB 索引使用的 extended RUM access method。
- `pg_documentdb_gw`：本地 Docker 镜像和 MongoDB 兼容客户端使用的 gateway protocol layer。

在需要 API 的每个数据库中安装 SQL 扩展：

```sql
CREATE EXTENSION IF NOT EXISTS documentdb CASCADE;
```

`0.113-0` 的 `documentdb.control` 声明依赖 `documentdb_core`、`pg_cron`、`tsm_system_rows`、`vector` 和 `postgis`。gateway container 监听 MongoDB 兼容端口；README 示例使用 `10260`，避免与本机 MongoDB 服务冲突。

### MongoDB 客户端示例

```python
import pymongo

client = pymongo.MongoClient(
    "mongodb://user:pass@localhost:10260/?tls=true&tlsAllowInvalidCertificates=true"
)

db = client["quickStartDatabase"]
coll = db.create_collection("quickStartCollection")

coll.insert_one({"name": "Alice", "email": "alice@example.com"})
print(coll.find_one({"name": "Alice"}))
```

上游 README 也展示了通过普通 MongoDB driver 执行 aggregation pipeline：

```python
pipeline = [
    {"$match": {"name": "Alice"}},
    {"$project": {"_id": 0, "name": 1, "email": 1}},
]

for doc in coll.aggregate(pipeline):
    print(doc)
```

### 版本说明

本项目 CSV 跟踪 DocumentDB `0.113`，覆盖 PostgreSQL 15-18。上游 tag 为 `v0.113-0`；control files 报告 `default_version = '0.113-0'`。

`0.111` 到 `0.113` 的 changelog 主要是 query planner、collation 与 index correctness 方面的工作：

- `0.113-0` 为带 `$in` 和 `$nin` 的非唯一 ordered indexes 增加 opt-in collation support，并在 feature flag 后支持清理 ordered TTL indexes 上的 dead index entries。
- `0.112-0` 移除较旧的 composite-returning `bson_update_document` UDF 路径，扩展非唯一 ordered-index collation support，并改进 `$group` 和 accumulator 执行。
- `0.111-0` 增加后台初始化 job infrastructure、更多 `$group` 校验、collation/index pushdown 改进，以及多个 crash fix。

### 注意事项

- DocumentDB 是多扩展栈；`CREATE EXTENSION documentdb CASCADE` 是通常入口，但如果需要 MongoDB wire compatibility，实际部署还需要 gateway/runtime pieces。
- changelog 中部分功能受 `documentdb.*` feature flags 控制。将行为写成 always-on 前，先核对确切安装版本中的 flag 默认值。
- `documentdb_extended_rum` 可 relocation，但 `documentdb` 和 `documentdb_core` 不可 relocation。

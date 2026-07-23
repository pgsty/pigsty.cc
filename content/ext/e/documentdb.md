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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/documentdb-0.114-0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">documentdb-0.114-0.tar.gz</div>
    <div class="ext-card__desc">documentdb-0.114-0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`documentdb`**](/ext/e/documentdb) | `0.114` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.114` | {{< pgvers "18,17,16,15" >}} | `documentdb` | `documentdb_core`, `pg_cron`, `postgis`, `tsm_system_rows`, `vector` |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.114` | {{< pgvers "18,17,16,15" >}} | `documentdb_$v` | `postgresql$v-contrib`, `pg_cron_$v`, `pgvector_$v`, `rum_$v`, `postgis36_$v` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.114` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-documentdb` | `postgresql-$v-cron`, `postgresql-$v-pgvector`, `postgresql-$v-rum`, `postgresql-$v-postgis-3` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | AVAIL PIGSTY 0.114 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | AVAIL PGDG 0.114 4 | N/A PIGSTY - 0 |
@ el8.x86_64 18 documentdb_18 documentdb_18-0.114-0PIGSTY.el8.x86_64.rpm pigsty 0.114 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/documentdb_18-0.114-0PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 documentdb_18 documentdb_18-0.114-0PIGSTY.el8.aarch64.rpm pigsty 0.114 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/documentdb_18-0.114-0PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 documentdb_18 documentdb_18-0.114-0PIGSTY.el9.x86_64.rpm pigsty 0.114 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/documentdb_18-0.114-0PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 documentdb_18 documentdb_18-0.114-0PIGSTY.el9.aarch64.rpm pigsty 0.114 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/documentdb_18-0.114-0PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 documentdb_18 documentdb_18-0.114-0PIGSTY.el10.x86_64.rpm pigsty 0.114 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/documentdb_18-0.114-0PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 documentdb_18 documentdb_18-0.114-0PIGSTY.el10.aarch64.rpm pigsty 0.114 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/documentdb_18-0.114-0PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~bookworm_amd64.deb pigsty 0.114 5.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~bookworm_arm64.deb pigsty 0.114 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0-1.pgdg13+1_amd64.deb pgdg 0.114 5.1MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~trixie_amd64.deb pigsty 0.114 5.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0-1.pgdg13+1_amd64.deb pgdg 0.113 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.112-0-1.pgdg13+1_amd64.deb pgdg 0.112 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.112-0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0-1.pgdg13+1_arm64.deb pgdg 0.114 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~trixie_arm64.deb pigsty 0.114 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0-1.pgdg13+1_arm64.deb pgdg 0.113 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.112-0-1.pgdg13+1_arm64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.112-0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~jammy_amd64.deb pigsty 0.114 5.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~jammy_arm64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~noble_amd64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~noble_arm64.deb pigsty 0.114 5.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0-1.pgdg26.04+1_amd64.deb pgdg 0.114 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~resolute_amd64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-documentdb postgresql-18-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0-1.pgdg26.04+1_arm64.deb pgdg 0.114 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.114-0PIGSTY~resolute_arm64.deb pigsty 0.114 5.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-18-documentdb_0.114-0PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb pgdg 0.113 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-documentdb postgresql-18-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb pgdg 0.112 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-18-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 documentdb_17 documentdb_17-0.114-0PIGSTY.el8.x86_64.rpm pigsty 0.114 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/documentdb_17-0.114-0PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 documentdb_17 documentdb_17-0.114-0PIGSTY.el8.aarch64.rpm pigsty 0.114 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/documentdb_17-0.114-0PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 documentdb_17 documentdb_17-0.114-0PIGSTY.el9.x86_64.rpm pigsty 0.114 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/documentdb_17-0.114-0PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 documentdb_17 documentdb_17-0.114-0PIGSTY.el9.aarch64.rpm pigsty 0.114 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/documentdb_17-0.114-0PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 documentdb_17 documentdb_17-0.114-0PIGSTY.el10.x86_64.rpm pigsty 0.114 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/documentdb_17-0.114-0PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 documentdb_17 documentdb_17-0.114-0PIGSTY.el10.aarch64.rpm pigsty 0.114 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/documentdb_17-0.114-0PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~bookworm_amd64.deb pigsty 0.114 5.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~bookworm_arm64.deb pigsty 0.114 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0-1.pgdg13+1_amd64.deb pgdg 0.114 5.1MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~trixie_amd64.deb pigsty 0.114 5.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0-1.pgdg13+1_amd64.deb pgdg 0.113 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.112-0-1.pgdg13+1_amd64.deb pgdg 0.112 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.112-0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0-1.pgdg13+1_arm64.deb pgdg 0.114 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~trixie_arm64.deb pigsty 0.114 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0-1.pgdg13+1_arm64.deb pgdg 0.113 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.112-0-1.pgdg13+1_arm64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.112-0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~jammy_amd64.deb pigsty 0.114 6.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~jammy_arm64.deb pigsty 0.114 6.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~noble_amd64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~noble_arm64.deb pigsty 0.114 5.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0-1.pgdg26.04+1_amd64.deb pgdg 0.114 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~resolute_amd64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-documentdb postgresql-17-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0-1.pgdg26.04+1_arm64.deb pgdg 0.114 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.114-0PIGSTY~resolute_arm64.deb pigsty 0.114 5.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-17-documentdb_0.114-0PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb pgdg 0.113 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-documentdb postgresql-17-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb pgdg 0.112 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-17-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 documentdb_16 documentdb_16-0.114-0PIGSTY.el8.x86_64.rpm pigsty 0.114 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/documentdb_16-0.114-0PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 documentdb_16 documentdb_16-0.114-0PIGSTY.el8.aarch64.rpm pigsty 0.114 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/documentdb_16-0.114-0PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 documentdb_16 documentdb_16-0.114-0PIGSTY.el9.x86_64.rpm pigsty 0.114 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/documentdb_16-0.114-0PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 documentdb_16 documentdb_16-0.114-0PIGSTY.el9.aarch64.rpm pigsty 0.114 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/documentdb_16-0.114-0PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 documentdb_16 documentdb_16-0.114-0PIGSTY.el10.x86_64.rpm pigsty 0.114 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/documentdb_16-0.114-0PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 documentdb_16 documentdb_16-0.114-0PIGSTY.el10.aarch64.rpm pigsty 0.114 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/documentdb_16-0.114-0PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~bookworm_amd64.deb pigsty 0.114 5.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~bookworm_arm64.deb pigsty 0.114 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0-1.pgdg13+1_amd64.deb pgdg 0.114 5.1MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~trixie_amd64.deb pigsty 0.114 5.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0-1.pgdg13+1_amd64.deb pgdg 0.113 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.112-0-1.pgdg13+1_amd64.deb pgdg 0.112 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.112-0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0-1.pgdg13+1_arm64.deb pgdg 0.114 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~trixie_arm64.deb pigsty 0.114 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0-1.pgdg13+1_arm64.deb pgdg 0.113 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.112-0-1.pgdg13+1_arm64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.112-0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~jammy_amd64.deb pigsty 0.114 6.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~jammy_arm64.deb pigsty 0.114 6.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~noble_amd64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~noble_arm64.deb pigsty 0.114 5.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0-1.pgdg26.04+1_amd64.deb pgdg 0.114 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~resolute_amd64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-documentdb postgresql-16-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0-1.pgdg26.04+1_arm64.deb pgdg 0.114 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.114-0PIGSTY~resolute_arm64.deb pigsty 0.114 5.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-16-documentdb_0.114-0PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb pgdg 0.113 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-documentdb postgresql-16-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb pgdg 0.112 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-16-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 documentdb_15 documentdb_15-0.114-0PIGSTY.el8.x86_64.rpm pigsty 0.114 3.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/documentdb_15-0.114-0PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 documentdb_15 documentdb_15-0.114-0PIGSTY.el8.aarch64.rpm pigsty 0.114 3.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/documentdb_15-0.114-0PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 documentdb_15 documentdb_15-0.114-0PIGSTY.el9.x86_64.rpm pigsty 0.114 2.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/documentdb_15-0.114-0PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 documentdb_15 documentdb_15-0.114-0PIGSTY.el9.aarch64.rpm pigsty 0.114 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/documentdb_15-0.114-0PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 documentdb_15 documentdb_15-0.114-0PIGSTY.el10.x86_64.rpm pigsty 0.114 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/documentdb_15-0.114-0PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 documentdb_15 documentdb_15-0.114-0PIGSTY.el10.aarch64.rpm pigsty 0.114 2.9MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/documentdb_15-0.114-0PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~bookworm_amd64.deb pigsty 0.114 5.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~bookworm_arm64.deb pigsty 0.114 5.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0-1.pgdg13+1_amd64.deb pgdg 0.114 5.2MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~trixie_amd64.deb pigsty 0.114 5.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0-1.pgdg13+1_amd64.deb pgdg 0.113 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.112-0-1.pgdg13+1_amd64.deb pgdg 0.112 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.112-0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0-1.pgdg13+1_arm64.deb pgdg 0.114 5.0MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~trixie_arm64.deb pigsty 0.114 5.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0-1.pgdg13+1_arm64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.112-0-1.pgdg13+1_arm64.deb pgdg 0.112 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.112-0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~jammy_amd64.deb pigsty 0.114 6.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~jammy_arm64.deb pigsty 0.114 6.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~noble_amd64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~noble_arm64.deb pigsty 0.114 5.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0-1.pgdg26.04+1_amd64.deb pgdg 0.114 5.1MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~resolute_amd64.deb pigsty 0.114 5.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb pgdg 0.113 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-documentdb postgresql-15-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb pgdg 0.112 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.112-0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0-1.pgdg26.04+1_arm64.deb pgdg 0.114 4.9MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.114-0PIGSTY~resolute_arm64.deb pigsty 0.114 5.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/documentdb/postgresql-15-documentdb_0.114-0PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb pgdg 0.113 4.8MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.113-0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-documentdb postgresql-15-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb pgdg 0.112 4.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/d/documentdb/postgresql-15-documentdb_0.112-0-1.pgdg26.04+1_arm64.deb
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

来源：

- [DocumentDB v0.114-0 README](https://github.com/documentdb/documentdb/blob/v0.114-0/README.md)
- [DocumentDB v0.114-0 changelog](https://github.com/documentdb/documentdb/blob/v0.114-0/CHANGELOG.md)
- [`documentdb` control file](https://github.com/documentdb/documentdb/blob/v0.114-0/pg_documentdb/documentdb.control)
- [Official preload helper](https://github.com/documentdb/documentdb/blob/v0.114-0/scripts/preload_libraries.sh)

`documentdb` 是 PostgreSQL 的公共 API 扩展，用于 DocumentDB，这是一个基于 PostgreSQL 开源的 MongoDB 兼容文档数据库。它存储 BSON 文档并实现 CRUD、聚合、全文搜索、地理空间和向量工作流。MongoDB 驱动程序需要单独的 DocumentDB 网关；仅安装此扩展不会暴露 Wire-Protocol 监听器，而是 PostgreSQL API。

### 配置与安装

官方部署助手使用 `pg_cron` 预加载核心库和 API 库。更改此设置后，请重启 PostgreSQL：

```conf
shared_preload_libraries = 'pg_cron, pg_documentdb_core, pg_documentdb'
```

安装公共扩展及其声明的依赖项：

```sql
CREATE EXTENSION documentdb CASCADE;
```

`CASCADE` 可以在文件存在时安装 `documentdb_core`、`pg_cron`、`tsm_system_rows`、`vector` 和 `postgis`。安装仅限超级用户且不可重定位。

### 原生 SQL 工作流

SQL 接口使用数据库名、集合名和 BSON 命令文档：

```sql
SELECT documentdb_api.create_collection('appdb', 'people');

SELECT documentdb_api.insert_one(
  'appdb',
  'people',
  '{"_id": 1, "name": "Ada", "team": "storage"}',
  NULL
);

SELECT document
FROM documentdb_api_catalog.bson_aggregation_find(
  'appdb',
  '{"find":"people","filter":{"team":"storage"}}'
);
```

为了应用程序兼容性，请运行网关并在其配置的 TLS 端点上使用受支持的 MongoDB 驱动程序。网关将 Wire-Protocol 命令转换为此 PostgreSQL API。

### 重要对象

- `documentdb_api` 包含集合管理及命令函数，如 `create_collection` 和 `insert_one`。
- `documentdb_api_catalog.bson_aggregation_find` 执行 MongoDB 风格的查找规范并返回 BSON 文档。
- `documentdb_core.bson` 是由 `documentdb_core` 提供的存储和交换类型。
- DocumentDB 角色和内部模式将公共读写操作与管理及实现对象分开。
- `documentdb.enableNonBlockingUniqueIndexBuild` 控制 v0.114 路径下的后台唯一有序索引构建，并在该版本中默认启用。

### 版本与运行注意事项

v0.114-0 标签的变更日志默认启用了模式验证，修复了验证器传播和缓存问题，并启用了非阻塞唯一有序索引构建。它还记录了网关配置、连通性检查、TLS 和凭证处理改进。该变更日志中的两个 RUM 优化仍受功能开关控制且默认禁用；请勿将它们描述为已启用行为。

MongoDB 兼容性并不等同于所有 MongoDB 服务器版本。应测试应用实际使用的操作符、索引行为、事务、模式验证、身份验证和驱动行为。请确保 `documentdb`、`documentdb_core`、网关及可选的分布式/索引组件来自同一发行系列。

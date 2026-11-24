---
title: "pg_parquet"
linkTitle: "pg_parquet"
description: "在PostgreSQL与本地/S3中的Parquet文件复制数据"
weight: 2480
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrunchyData/pg_parquet/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrunchyData/pg_parquet</div>
    <div class="ext-card__desc">https://github.com/CrunchyData/pg_parquet/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_parquet-v0.6.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_parquet-v0.6.1.tar.gz</div>
    <div class="ext-card__desc">pg_parquet-v0.6.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_parquet`**](/ext/e/pg_parquet) | `0.6.1` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2480  | [**`pg_parquet`**](/ext/e/pg_parquet) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`file_fdw`](/ext/e/file_fdw) [`aws_s3`](/ext/e/aws_s3) [`pg_bulkload`](/ext/e/pg_bulkload) [`pg_lake`](/ext/e/pg_lake) [`pg_ducklake`](/ext/e/pg_ducklake) [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_mooncake`](/ext/e/pg_mooncake) [`pg_fact_loader`](/ext/e/pg_fact_loader) [`pg_csv`](/ext/e/pg_csv) [`omni_csv`](/ext/e/omni_csv) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Pigsty fixes streaming COPY temp-file leaks.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "19,18,17,16,15" >}} | `pg_parquet` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.1` | {{< pgvers "18,17,16,15" >}} | `pg_parquet_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.1` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-parquet` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.5.1 3 | AVAIL PIGSTY 0.5.1 3 | AVAIL PIGSTY 0.5.1 3 | AVAIL PIGSTY 0.5.1 3 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.5.1 3 | AVAIL PIGSTY 0.5.1 3 | AVAIL PIGSTY 0.5.1 3 | AVAIL PIGSTY 0.5.1 3 |
| el9.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 |
| el9.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 |
| el10.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 | AVAIL PIGSTY 0.5.1 2 |
| el10.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 4 | AVAIL PIGSTY 0.5.1 4 | AVAIL PIGSTY 0.5.1 4 | AVAIL PIGSTY 0.5.1 4 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| d13.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| d13.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u26.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u26.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
@ el8.x86_64 18 pg_parquet_18 pg_parquet_18-0.5.1-4PGSTY.el8.x86_64.rpm pigsty 0.5.1 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_parquet_18-0.5.1-4PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_parquet_18 pg_parquet_18-0.5.1-2PGDG.rhel8.10.x86_64.rpm pgdg 0.5.1 7.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_parquet_18-0.5.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_parquet_18 pg_parquet_18-0.5.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.5.1 7.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_parquet_18-0.5.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-4PGSTY.el8.aarch64.rpm pigsty 0.5.1 8.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_parquet_18-0.5.1-4PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-2PGDG.rhel8.10.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_parquet_18-0.5.1-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_parquet_18-0.5.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_parquet_18 pg_parquet_18-0.5.1-4PGSTY.el9.x86_64.rpm pigsty 0.5.1 9.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_parquet_18-0.5.1-4PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_parquet_18 pg_parquet_18-0.5.1-3PGDG.rhel9.9.x86_64.rpm pgdg 0.5.1 6.8MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_parquet_18-0.5.1-3PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-4PGSTY.el9.aarch64.rpm pigsty 0.5.1 9.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_parquet_18-0.5.1-4PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-3PGDG.rhel9.9.aarch64.rpm pgdg 0.5.1 6.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_parquet_18-0.5.1-3PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 18 pg_parquet_18 pg_parquet_18-0.5.1-4PGSTY.el10.x86_64.rpm pigsty 0.5.1 9.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_parquet_18-0.5.1-4PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_parquet_18 pg_parquet_18-0.5.1-3PGDG.rhel10.3.x86_64.rpm pgdg 0.5.1 6.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_parquet_18-0.5.1-3PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-4PGSTY.el10.aarch64.rpm pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_parquet_18-0.5.1-4PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-3PGDG.rhel10.3.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_parquet_18-0.5.1-3PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-2PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 6.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_parquet_18-0.5.1-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_parquet_18 pg_parquet_18-0.5.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 6.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_parquet_18-0.5.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~bookworm_amd64.deb pigsty 0.5.1 8.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~bookworm_arm64.deb pigsty 0.5.1 7.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~trixie_amd64.deb pigsty 0.5.1 8.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~trixie_arm64.deb pigsty 0.5.1 7.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~jammy_amd64.deb pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~jammy_arm64.deb pigsty 0.5.1 8.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~noble_amd64.deb pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~noble_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~resolute_amd64.deb pigsty 0.5.1 9.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-parquet postgresql-18-pg-parquet_0.5.1-4PGSTY~resolute_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-parquet/postgresql-18-pg-parquet_0.5.1-4PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_parquet_17 pg_parquet_17-0.5.1-4PGSTY.el8.x86_64.rpm pigsty 0.5.1 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_parquet_17-0.5.1-4PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_parquet_17 pg_parquet_17-0.5.1-2PGDG.rhel8.10.x86_64.rpm pgdg 0.5.1 7.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_parquet_17-0.5.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_parquet_17 pg_parquet_17-0.5.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.5.1 7.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_parquet_17-0.5.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-4PGSTY.el8.aarch64.rpm pigsty 0.5.1 8.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_parquet_17-0.5.1-4PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-2PGDG.rhel8.10.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_parquet_17-0.5.1-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_parquet_17-0.5.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 17 pg_parquet_17 pg_parquet_17-0.5.1-4PGSTY.el9.x86_64.rpm pigsty 0.5.1 9.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_parquet_17-0.5.1-4PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_parquet_17 pg_parquet_17-0.5.1-3PGDG.rhel9.9.x86_64.rpm pgdg 0.5.1 6.8MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_parquet_17-0.5.1-3PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-4PGSTY.el9.aarch64.rpm pigsty 0.5.1 9.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_parquet_17-0.5.1-4PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-3PGDG.rhel9.9.aarch64.rpm pgdg 0.5.1 6.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_parquet_17-0.5.1-3PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 17 pg_parquet_17 pg_parquet_17-0.5.1-4PGSTY.el10.x86_64.rpm pigsty 0.5.1 9.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_parquet_17-0.5.1-4PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_parquet_17 pg_parquet_17-0.5.1-3PGDG.rhel10.3.x86_64.rpm pgdg 0.5.1 6.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_parquet_17-0.5.1-3PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-4PGSTY.el10.aarch64.rpm pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_parquet_17-0.5.1-4PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-3PGDG.rhel10.3.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_parquet_17-0.5.1-3PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-2PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 6.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_parquet_17-0.5.1-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_parquet_17 pg_parquet_17-0.5.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 6.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_parquet_17-0.5.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~bookworm_amd64.deb pigsty 0.5.1 8.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~bookworm_arm64.deb pigsty 0.5.1 7.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~trixie_amd64.deb pigsty 0.5.1 8.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~trixie_arm64.deb pigsty 0.5.1 7.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~jammy_amd64.deb pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~jammy_arm64.deb pigsty 0.5.1 8.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~noble_amd64.deb pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~noble_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~resolute_amd64.deb pigsty 0.5.1 9.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-parquet postgresql-17-pg-parquet_0.5.1-4PGSTY~resolute_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-parquet/postgresql-17-pg-parquet_0.5.1-4PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_parquet_16 pg_parquet_16-0.5.1-4PGSTY.el8.x86_64.rpm pigsty 0.5.1 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_parquet_16-0.5.1-4PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_parquet_16 pg_parquet_16-0.5.1-2PGDG.rhel8.10.x86_64.rpm pgdg 0.5.1 7.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_parquet_16-0.5.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_parquet_16 pg_parquet_16-0.5.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.5.1 7.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_parquet_16-0.5.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-4PGSTY.el8.aarch64.rpm pigsty 0.5.1 8.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_parquet_16-0.5.1-4PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-2PGDG.rhel8.10.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_parquet_16-0.5.1-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_parquet_16-0.5.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 16 pg_parquet_16 pg_parquet_16-0.5.1-4PGSTY.el9.x86_64.rpm pigsty 0.5.1 9.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_parquet_16-0.5.1-4PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_parquet_16 pg_parquet_16-0.5.1-3PGDG.rhel9.9.x86_64.rpm pgdg 0.5.1 6.8MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_parquet_16-0.5.1-3PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-4PGSTY.el9.aarch64.rpm pigsty 0.5.1 9.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_parquet_16-0.5.1-4PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-3PGDG.rhel9.9.aarch64.rpm pgdg 0.5.1 6.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_parquet_16-0.5.1-3PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 16 pg_parquet_16 pg_parquet_16-0.5.1-4PGSTY.el10.x86_64.rpm pigsty 0.5.1 9.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_parquet_16-0.5.1-4PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_parquet_16 pg_parquet_16-0.5.1-3PGDG.rhel10.3.x86_64.rpm pgdg 0.5.1 6.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_parquet_16-0.5.1-3PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-4PGSTY.el10.aarch64.rpm pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_parquet_16-0.5.1-4PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-3PGDG.rhel10.3.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_parquet_16-0.5.1-3PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-2PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 6.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_parquet_16-0.5.1-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_parquet_16 pg_parquet_16-0.5.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 6.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_parquet_16-0.5.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~bookworm_amd64.deb pigsty 0.5.1 8.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~bookworm_arm64.deb pigsty 0.5.1 7.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~trixie_amd64.deb pigsty 0.5.1 8.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~trixie_arm64.deb pigsty 0.5.1 7.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~jammy_amd64.deb pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~jammy_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~noble_amd64.deb pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~noble_arm64.deb pigsty 0.5.1 8.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~resolute_amd64.deb pigsty 0.5.1 9.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-parquet postgresql-16-pg-parquet_0.5.1-4PGSTY~resolute_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-parquet/postgresql-16-pg-parquet_0.5.1-4PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_parquet_15 pg_parquet_15-0.5.1-4PGSTY.el8.x86_64.rpm pigsty 0.5.1 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_parquet_15-0.5.1-4PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_parquet_15 pg_parquet_15-0.5.1-2PGDG.rhel8.10.x86_64.rpm pgdg 0.5.1 7.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_parquet_15-0.5.1-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_parquet_15 pg_parquet_15-0.5.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.5.1 7.1MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_parquet_15-0.5.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-4PGSTY.el8.aarch64.rpm pigsty 0.5.1 8.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_parquet_15-0.5.1-4PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-2PGDG.rhel8.10.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_parquet_15-0.5.1-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_parquet_15-0.5.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 15 pg_parquet_15 pg_parquet_15-0.5.1-4PGSTY.el9.x86_64.rpm pigsty 0.5.1 9.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_parquet_15-0.5.1-4PGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_parquet_15 pg_parquet_15-0.5.1-3PGDG.rhel9.9.x86_64.rpm pgdg 0.5.1 6.8MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_parquet_15-0.5.1-3PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-4PGSTY.el9.aarch64.rpm pigsty 0.5.1 9.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_parquet_15-0.5.1-4PGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-3PGDG.rhel9.9.aarch64.rpm pgdg 0.5.1 6.3MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_parquet_15-0.5.1-3PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 15 pg_parquet_15 pg_parquet_15-0.5.1-4PGSTY.el10.x86_64.rpm pigsty 0.5.1 9.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_parquet_15-0.5.1-4PGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_parquet_15 pg_parquet_15-0.5.1-3PGDG.rhel10.3.x86_64.rpm pgdg 0.5.1 6.7MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_parquet_15-0.5.1-3PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-4PGSTY.el10.aarch64.rpm pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_parquet_15-0.5.1-4PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-3PGDG.rhel10.3.aarch64.rpm pgdg 0.5.1 6.2MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_parquet_15-0.5.1-3PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-2PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 6.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_parquet_15-0.5.1-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_parquet_15 pg_parquet_15-0.5.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.5.1 6.4MiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_parquet_15-0.5.1-1PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~bookworm_amd64.deb pigsty 0.5.1 8.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~bookworm_arm64.deb pigsty 0.5.1 7.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~trixie_amd64.deb pigsty 0.5.1 8.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~trixie_arm64.deb pigsty 0.5.1 7.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~jammy_amd64.deb pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~jammy_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~noble_amd64.deb pigsty 0.5.1 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~noble_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~resolute_amd64.deb pigsty 0.5.1 9.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-parquet postgresql-15-pg-parquet_0.5.1-4PGSTY~resolute_arm64.deb pigsty 0.5.1 8.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-parquet/postgresql-15-pg-parquet_0.5.1-4PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_parquet` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_parquet         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_parquet` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_parquet;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_parquet -v 19  # PG 19
pig ext install -y pg_parquet -v 18  # PG 18
pig ext install -y pg_parquet -v 17  # PG 17
pig ext install -y pg_parquet -v 16  # PG 16
pig ext install -y pg_parquet -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_parquet_19       # PG 19
dnf install -y pg_parquet_18       # PG 18
dnf install -y pg_parquet_17       # PG 17
dnf install -y pg_parquet_16       # PG 16
dnf install -y pg_parquet_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-parquet   # PG 19
apt install -y postgresql-18-pg-parquet   # PG 18
apt install -y postgresql-17-pg-parquet   # PG 17
apt install -y postgresql-16-pg-parquet   # PG 16
apt install -y postgresql-15-pg-parquet   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_parquet';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_parquet;
```

## 用法

来源：

- [Official source](https://github.com/CrunchyData/pg_parquet/blob/v0.6.0/README.md)
- [Official source](https://github.com/CrunchyData/pg_parquet/blob/v0.6.0/pg_parquet.control)
- [Official source](https://github.com/CrunchyData/pg_parquet/blob/v0.6.0/Cargo.toml)
- [Official source](https://github.com/CrunchyData/pg_parquet/releases/tag/v0.6.0)

`pg_parquet` 0.6.0 通过 PostgreSQL COPY 读写 Parquet，并检查文件元数据。源码目标为 PostgreSQL 14–19，可访问服务器本地文件以及 S3、Azure、GCS 和 HTTP(S) 端点；这些位置及凭据不包含在普通 PostgreSQL 备份中。

### 启用与复制

保留其他预加载项，加入该库后重启。由超级用户创建不可重定位的扩展。服务器进程必须有权访问所选本地路径或远程对象。以下示例由具备相应 COPY 权限的管理员执行：

```ini
shared_preload_libraries = 'pg_parquet'
```

```sql
CREATE EXTENSION pg_parquet;
CREATE TABLE parquet_demo (id bigint, label text);
INSERT INTO parquet_demo VALUES (1, 'first'), (2, 'second');
COPY parquet_demo TO '/tmp/parquet_demo.parquet' WITH (format parquet);
CREATE TABLE parquet_copy (LIKE parquet_demo);
COPY parquet_copy FROM '/tmp/parquet_demo.parquet' WITH (format parquet, match_by name);
SELECT * FROM parquet.schema('/tmp/parquet_demo.parquet');
SELECT * FROM parquet.file_metadata('/tmp/parquet_demo.parquet');
```

可导出查询结果以筛选数据。STDIN、STDOUT 和 PROGRAM 流须显式指定 Parquet 格式。外部输出不随 SQL 事务回滚，失败或回滚的导出可能留下文件或未完成的上传。

### 模式与类型处理

```sql
CREATE TABLE inferred_demo () WITH (load_from = '/tmp/parquet_demo.parquet');
SET pg_parquet.max_parallel_workers = 2;
SELECT * FROM pg_stat_progress_copy;
```

`load_from` 表选项推断列并加载数据。复合类型建立在 `parquet_structs` 中，创建者需要该模式的 CREATE 权限，安装时会向 PUBLIC 授予此权限。删除表不会删除生成类型；以 CASCADE 删除扩展可能删除依赖列。映射类型需要 `crunchy_map`，无法推断的类型应先显式定义目标表。

`match_by name` 同样按名称匹配嵌套复合字段，默认按位置匹配。0.6.0 改进字典、decimal、INT96 及无限日期/时间戳读取，保留 JSON 文本并拒绝含 NUL 的字符串。COPY TO 拒绝多维数组。PostGIS geometry/geography 使用 Parquet 地理空间类型，曲线等不支持的几何类型须先转换或显式导出为二进制。

### 文件、性能与凭据

`parquet.metadata`、`parquet.kv_metadata`、`parquet.column_stats` 和 `parquet.schema` 用于检查文件。导出选项 `bloom_filter` 与 `dictionary` 可选择列；COPY FROM 读取全部行，不使用布隆过滤器筛选行。

`pg_parquet.max_parallel_workers` 默认为零。符合条件的复制可使用并行工作进程；查询导出、临时表、触发器、默认值等场景可能保持串行。导入工作进程负责解码，主进程负责插入。通过 `pg_stat_progress_copy` 观察进度，并按实际文件及表配置资源。

`file_size_bytes` 生成文件目录。目录非空时默认拒绝，须显式指定 `overwrite true`；但无法列举目录时不能确定其内容，仍沿用旧写入行为。覆盖可能删除上次复制留下的文件。同一 PostgreSQL 实例会排斥并发写入者，不同实例仍需外部协调。单文件目标保留原有替换行为，应规划失败导出的清理。

只有角色被 `parquet.user_profile_mapping` 允许时，`pg_parquet.profile_name` 才能选择相应对象存储身份。映射仅由超级用户或 `parquet_profile_manager` 管理，每次复制都会重新检查权限。凭据应置于受保护的服务器文件或环境中。`pg_parquet.allow_credentials_in_parameters` 默认关闭，因为 SQL 中的凭据可能进入日志及活动视图。HTTP 导出在内存中缓冲单文件，上限为 10 MiB；对象存储的并行分段上传要求各异，要求等长分段的存储存在限制。

### 升级

部署匹配服务器主版本的文件，按预加载维护流程操作，并采用发行版提供的 SQL 更新路径。迁移到 0.6.0 前应检查目录导出任务、推断复合类型的依赖、凭据映射及类型转换行为。
